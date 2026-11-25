import { useEffect, useState } from 'react';
import { mergeProfile, type ProfileData } from './merge';
import { useStore } from './store';

/**
 * Cloud sync of the whole household (all learner profiles) through the Netlify function /api/sync.
 * Device-level settings live in localStorage under SYNC_KEY; profile data under the profiles' own keys.
 */

interface Profile {
  id: string;
  name: string;
  emoji: string;
  updatedAt?: number;
}

interface Registry {
  profiles: Profile[];
  active: string;
  deleted?: string[];
}

export interface Household {
  version: 1;
  profiles: Profile[];
  deleted: string[];
  data: Record<string, { updatedAt: number; state: ProfileData }>;
}

interface SyncConfig {
  password: string;
  lastSync?: number;
  /** last local change per profile (ms) */
  updated: Record<string, number>;
}

const SYNC_KEY = 'deutsch-trainer-sync';
const REGISTRY_KEY = 'deutsch-trainer-profiles';
const BASE_KEY = 'deutsch-trainer-v1';
const ENDPOINT = '/api/sync';
const keyFor = (id: string) => (id === 'default' ? BASE_KEY : `${BASE_KEY}:${id}`);

function readJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}
function writeJson(key: string, v: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {
    /* storage full / unavailable */
  }
}

function config(): SyncConfig | null {
  const c = readJson<SyncConfig>(SYNC_KEY);
  return c?.password ? { ...c, updated: c.updated ?? {} } : null;
}
function saveConfig(c: SyncConfig | null) {
  if (c) writeJson(SYNC_KEY, c);
  else localStorage.removeItem(SYNC_KEY);
}

function registry(): Registry {
  return readJson<Registry>(REGISTRY_KEY) ?? { profiles: [{ id: 'default', name: 'Профиль 1', emoji: '🦊' }], active: 'default' };
}

// ---------------- status for the UI ----------------

export type SyncStatus = { state: 'off' | 'idle' | 'syncing' | 'error'; message?: string; lastSync?: number };
let status: SyncStatus = { state: config() ? 'idle' : 'off', lastSync: config()?.lastSync };
const listeners = new Set<(s: SyncStatus) => void>();
function setStatus(s: SyncStatus) {
  status = s;
  listeners.forEach((l) => l(s));
}
export function useSyncStatus(): SyncStatus {
  const [s, set] = useState(status);
  useEffect(() => {
    listeners.add(set);
    return () => void listeners.delete(set);
  }, []);
  return s;
}
export const isSyncEnabled = () => !!config();

// ---------------- household build / merge / apply ----------------

function buildLocal(c: SyncConfig): Household {
  const reg = registry();
  const data: Household['data'] = {};
  for (const p of reg.profiles) {
    const st = readJson<{ state: ProfileData }>(keyFor(p.id))?.state;
    if (st) data[p.id] = { updatedAt: c.updated[p.id] ?? 0, state: st };
  }
  return { version: 1, profiles: reg.profiles, deleted: reg.deleted ?? [], data };
}

export function mergeHouseholds(local: Household, remote: Partial<Household>): Household {
  const deleted = [...new Set([...(local.deleted ?? []), ...(remote.deleted ?? [])])];
  const byId = new Map<string, Profile>();
  for (const p of remote.profiles ?? []) byId.set(p.id, p);
  for (const p of local.profiles) {
    const r = byId.get(p.id);
    byId.set(p.id, !r || (p.updatedAt ?? 0) > (r.updatedAt ?? 0) ? p : r);
  }
  const profiles = [...byId.values()].filter((p) => !deleted.includes(p.id));
  const data: Household['data'] = {};
  for (const p of profiles) {
    const l = local.data[p.id];
    const r = remote.data?.[p.id];
    if (l && r) {
      const newer = l.updatedAt >= r.updatedAt ? 'local' : 'remote';
      data[p.id] = { updatedAt: Math.max(l.updatedAt, r.updatedAt), state: mergeProfile(l.state, r.state, newer) };
    } else if (l || r) data[p.id] = (l ?? r)!;
  }
  return { version: 1, profiles, deleted, data };
}

let applying = false;

function applyLocal(h: Household, c: SyncConfig) {
  const reg = registry();
  const activeBefore = JSON.stringify(readJson(keyFor(reg.active)) ?? null);
  for (const [id, d] of Object.entries(h.data)) {
    const prev = readJson<{ state: ProfileData; version?: number }>(keyFor(id));
    writeJson(keyFor(id), { state: d.state, version: prev?.version ?? 1 });
    c.updated[id] = Math.max(c.updated[id] ?? 0, d.updatedAt);
  }
  for (const id of h.deleted) localStorage.removeItem(keyFor(id));
  const active = h.profiles.some((p) => p.id === reg.active) ? reg.active : h.profiles[0]?.id ?? 'default';
  writeJson(REGISTRY_KEY, { profiles: h.profiles.length ? h.profiles : reg.profiles, active, deleted: h.deleted });
  const activeAfter = JSON.stringify(readJson(keyFor(active)) ?? null);
  if (activeBefore !== activeAfter || active !== reg.active) {
    applying = true;
    // reload the live store from the merged data
    Promise.resolve(useStore.persist.rehydrate()).finally(() => (applying = false));
  }
}

async function request(method: 'GET' | 'PUT', password: string, body?: unknown): Promise<unknown> {
  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method,
      headers: { 'content-type': 'application/json', 'x-sync-password': password },
      body: body === undefined ? undefined : JSON.stringify(body),
      cache: 'no-store',
    });
  } catch {
    throw new Error('Нет связи с сервером синхронизации.');
  }
  if (res.status === 404) throw new Error('Сервер синхронизации не найден: сайт должен публиковаться из GitHub (см. Настройки).');
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error ?? `Ошибка синхронизации ${res.status}`);
  return data;
}

let running: Promise<void> | null = null;
let dirty = false;

/** Pull, merge with local data, apply locally and push the merged result. */
export function syncNow(): Promise<void> {
  if (running) return running;
  const c = config();
  if (!c) return Promise.resolve();
  running = (async () => {
    setStatus({ ...status, state: 'syncing' });
    try {
      const remote = (await request('GET', c.password)) as Partial<Household>;
      const merged = mergeHouseholds(buildLocal(c), remote);
      applyLocal(merged, c);
      await request('PUT', c.password, merged);
      c.lastSync = Date.now();
      saveConfig(c);
      dirty = false;
      setStatus({ state: 'idle', lastSync: c.lastSync });
    } catch (e) {
      setStatus({ state: 'error', message: (e as Error).message, lastSync: c.lastSync });
      throw e;
    } finally {
      running = null;
    }
  })();
  return running;
}

/** Connect this device with the household password and download the shared profiles. */
export async function connectSync(password: string): Promise<void> {
  const c: SyncConfig = { password: password.trim(), updated: config()?.updated ?? {} };
  await request('GET', c.password); // throws on wrong password / missing server
  saveConfig(c);
  setStatus({ state: 'idle' });
  await syncNow();
}

export function disconnectSync() {
  saveConfig(null);
  setStatus({ state: 'off' });
}

/** Start automatic sync: on start, after changes (debounced), when the tab is hidden or shown again. */
export function startAutoSync() {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const schedule = (ms: number) => {
    clearTimeout(timer);
    timer = setTimeout(() => void syncNow().catch(() => {}), ms);
  };
  useStore.subscribe(() => {
    if (applying || !config()) return;
    const c = config()!;
    const reg = registry();
    c.updated[reg.active] = Date.now();
    saveConfig(c);
    dirty = true;
    schedule(15_000);
  });
  document.addEventListener('visibilitychange', () => {
    if (!config()) return;
    if (document.visibilityState === 'visible') void syncNow().catch(() => {});
    else if (dirty) void syncNow().catch(() => {});
  });
  if (config()) void syncNow().catch(() => {});
}
