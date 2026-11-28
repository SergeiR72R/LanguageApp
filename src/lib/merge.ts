import type { AppState, Card, DayActivity, StepProgress, UnitProgress } from './store';

/** Persisted part of a profile (what zustand stores under the profile's localStorage key). */
export type ProfileData = Partial<
  Pick<
    AppState,
    | 'settings'
    | 'placement'
    | 'startUnitId'
    | 'units'
    | 'cards'
    | 'mistakes'
    | 'activity'
    | 'writings'
    | 'conversations'
    | 'consolidations'
    | 'examResults'
    | 'reports'
    | 'celebrated'
    | 'plan'
    | 'avatar'
    | 'epoch'
  >
>;

const max = (a?: number, b?: number) => (a === undefined ? b : b === undefined ? a : Math.max(a, b));
const maxStr = (a?: string, b?: string) => (!a ? b : !b ? a : a > b ? a : b);

function mergeStep(a?: StepProgress, b?: StepProgress): StepProgress | undefined {
  if (!a) return b;
  if (!b) return a;
  return {
    done: a.done || b.done,
    score: max(a.score, b.score),
    date: maxStr(a.date, b.date)!,
    attempts: max(a.attempts, b.attempts),
  };
}

function mergeUnits(a: Record<string, UnitProgress> = {}, b: Record<string, UnitProgress> = {}): Record<string, UnitProgress> {
  const out: Record<string, UnitProgress> = {};
  for (const id of new Set([...Object.keys(a), ...Object.keys(b)])) {
    const x = a[id];
    const y = b[id];
    if (!x || !y) {
      out[id] = (x ?? y)!;
      continue;
    }
    const steps: UnitProgress['steps'] = {};
    for (const s of new Set([...Object.keys(x.steps ?? {}), ...Object.keys(y.steps ?? {})]) as Set<keyof UnitProgress['steps']>) {
      const m = mergeStep(x.steps?.[s], y.steps?.[s]);
      if (m) steps[s] = m;
    }
    const completed = !!(x.completed || y.completed);
    out[id] = { steps, completed, completedDate: completed ? (x.completedDate && y.completedDate ? (x.completedDate < y.completedDate ? x.completedDate : y.completedDate) : x.completedDate ?? y.completedDate) : undefined };
  }
  return out;
}

/** The card that has seen more reviews wins (ties: the more recently reviewed one). */
function pickCard(a: Card, b: Card): Card {
  const ra = a.srs.reps + a.srs.lapses;
  const rb = b.srs.reps + b.srs.lapses;
  if (ra !== rb) return ra > rb ? a : b;
  const la = a.srs.last ?? '';
  const lb = b.srs.last ?? '';
  if (la !== lb) return la > lb ? a : b;
  return a.srs.due >= b.srs.due ? a : b;
}

function mergeCards(a: Record<string, Card> = {}, b: Record<string, Card> = {}): Record<string, Card> {
  const out: Record<string, Card> = { ...a };
  for (const [id, c] of Object.entries(b)) out[id] = out[id] ? pickCard(out[id], c) : c;
  return out;
}

/** Per day and counter the larger value (avoids double counting when the same data is merged repeatedly). */
function mergeActivity(a: Record<string, DayActivity> = {}, b: Record<string, DayActivity> = {}): Record<string, DayActivity> {
  const out: Record<string, DayActivity> = { ...a };
  for (const [day, y] of Object.entries(b)) {
    const x = out[day];
    if (!x) {
      out[day] = y;
      continue;
    }
    const m = { ...x } as DayActivity;
    for (const k of new Set([...Object.keys(x), ...Object.keys(y)]) as Set<keyof DayActivity>) m[k] = Math.max(x[k] ?? 0, y[k] ?? 0);
    out[day] = m;
  }
  return out;
}

function unionBy<T>(a: T[] = [], b: T[] = [], key: (x: T) => string, combine?: (x: T, y: T) => T): T[] {
  const map = new Map<string, T>();
  for (const x of a) map.set(key(x), x);
  for (const y of b) {
    const k = key(y);
    const x = map.get(k);
    map.set(k, x && combine ? combine(x, y) : x ?? y);
  }
  return [...map.values()];
}

/**
 * Merge two copies of the same learner profile (e.g. phone and laptop).
 * Progress only ever grows: nothing learned on either device is lost.
 * `newer` decides plain values such as the chosen start unit or settings.
 */
export function mergeProfile(local: ProfileData, remote: ProfileData, newer: 'local' | 'remote'): ProfileData {
  // a cleaned-up profile (higher epoch) replaces older copies completely
  const le = local.epoch ?? 0;
  const re = remote.epoch ?? 0;
  if (le !== re) return le > re ? local : remote;
  const n = newer === 'local' ? local : remote;
  const o = newer === 'local' ? remote : local;
  const settings = n.settings || o.settings ? { ...(o.settings ?? {}), ...(n.settings ?? {}) } : undefined;
  if (settings && o.settings?.keys) {
    // never lose an API key that only one device has
    const keys = { ...o.settings.keys };
    for (const [k, v] of Object.entries(n.settings?.keys ?? {})) if (v) keys[k as keyof typeof keys] = v;
    settings.keys = keys;
  }
  return {
    ...o,
    ...n,
    settings: settings as AppState['settings'] | undefined,
    placement: !n.placement ? o.placement : !o.placement ? n.placement : n.placement.date >= o.placement.date ? n.placement : o.placement,
    startUnitId: n.startUnitId ?? o.startUnitId,
    units: mergeUnits(local.units, remote.units),
    cards: mergeCards(local.cards, remote.cards),
    activity: mergeActivity(local.activity, remote.activity),
    mistakes: unionBy(local.mistakes, remote.mistakes, (m) => m.id, (x, y) => ({ ...x, resolved: !!(x.resolved || y.resolved) })),
    writings: unionBy(local.writings, remote.writings, (w) => w.id),
    conversations: unionBy(local.conversations, remote.conversations, (c) => c.id),
    consolidations: unionBy(local.consolidations, remote.consolidations, (c) => `${c.date}|${c.score}|${c.total}`),
    examResults: unionBy(local.examResults, remote.examResults, (r) => `${r.examId}|${r.module}|${r.date}|${r.points}`),
    reports: unionBy(local.reports, remote.reports, (r) => `${r.date}|${JSON.stringify(r.exercise)}|${r.given}`),
    celebrated: n.celebrated ?? o.celebrated,
    plan: n.plan ?? o.plan,
    avatar: n.avatar ?? o.avatar,
  };
}
