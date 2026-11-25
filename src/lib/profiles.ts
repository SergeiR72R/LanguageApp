/**
 * Several learners on one browser: each profile keeps its own progress in its own localStorage key.
 * The original key stays for the first profile, so existing progress is kept.
 */
export interface Profile {
  id: string;
  name: string;
  emoji: string;
}

interface Registry {
  profiles: Profile[];
  active: string;
}

const REGISTRY_KEY = 'deutsch-trainer-profiles';
const BASE_KEY = 'deutsch-trainer-v1';
export const EMOJIS = ['🦊', '🐻', '🦉', '🐱', '🐼', '🦁', '🐸', '🐧'];

function read(): Registry {
  try {
    const raw = localStorage.getItem(REGISTRY_KEY);
    if (raw) {
      const r = JSON.parse(raw) as Registry;
      if (r.profiles?.length && r.profiles.some((p) => p.id === r.active)) return r;
    }
  } catch {
    /* storage unavailable */
  }
  return { profiles: [{ id: 'default', name: 'Профиль 1', emoji: EMOJIS[0] }], active: 'default' };
}

function write(r: Registry) {
  try {
    localStorage.setItem(REGISTRY_KEY, JSON.stringify(r));
  } catch {
    /* ignore */
  }
}

export const storageKeyFor = (id: string) => (id === 'default' ? BASE_KEY : `${BASE_KEY}:${id}`);

export function listProfiles(): Profile[] {
  return read().profiles;
}

export function activeProfile(): Profile {
  const r = read();
  return r.profiles.find((p) => p.id === r.active)!;
}

export function activeStorageKey(): string {
  return storageKeyFor(read().active);
}

/** Key for small per-profile extras (e.g. writing drafts). */
export function profileScopedKey(key: string): string {
  const id = read().active;
  return id === 'default' ? key : `${key}:${id}`;
}

function reload() {
  location.hash = '#/';
  location.reload();
}

export function switchProfile(id: string) {
  const r = read();
  if (!r.profiles.some((p) => p.id === id) || r.active === id) return;
  write({ ...r, active: id });
  reload();
}

/** Create a profile. API keys and voice settings are copied so they needn't be entered again. */
export function createProfile(name: string, settings: unknown) {
  const r = read();
  const id = Math.random().toString(36).slice(2, 9);
  const emoji = EMOJIS[r.profiles.length % EMOJIS.length];
  try {
    localStorage.setItem(storageKeyFor(id), JSON.stringify({ state: { settings }, version: 1 }));
  } catch {
    /* ignore */
  }
  write({ profiles: [...r.profiles, { id, name: name.trim() || `Профиль ${r.profiles.length + 1}`, emoji }], active: id });
  reload();
}

export function updateProfile(id: string, patch: Partial<Omit<Profile, 'id'>>) {
  const r = read();
  write({ ...r, profiles: r.profiles.map((p) => (p.id === id ? { ...p, ...patch } : p)) });
}

export function deleteProfile(id: string) {
  const r = read();
  if (r.profiles.length <= 1 || r.active === id) return;
  try {
    localStorage.removeItem(storageKeyFor(id));
  } catch {
    /* ignore */
  }
  write({ ...r, profiles: r.profiles.filter((p) => p.id !== id) });
}

/** Read another profile's saved progress (same device) – used for the leaderboard. */
export function readProfileState(id: string): Record<string, unknown> | null {
  try {
    const raw = localStorage.getItem(storageKeyFor(id));
    return raw ? (JSON.parse(raw).state as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}
