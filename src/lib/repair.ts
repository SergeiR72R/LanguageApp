import type { ProfileData } from './merge';
import type { Card, DayActivity, StepProgress, UnitProgress } from './store';

/**
 * Undo an accidental mix of two learners: remove from `target` everything that is identical to `other`.
 *
 * After the mix, records with an id (mistakes, texts, conversations, cards) exist in both profiles unchanged,
 * so they can be told apart exactly. Numbers that were merged by taking the larger value (daily activity,
 * step scores) can't be split back: identical ones are removed, different ones are kept (they contain the
 * target's own work). The result gets a higher `epoch`, so sync replaces older mixed copies instead of merging.
 */
export interface RepairReport {
  mistakes: number;
  writings: number;
  conversations: number;
  cards: number;
  units: number;
  steps: number;
  days: number;
  exams: number;
  consolidations: number;
}

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

export function separateProfiles(target: ProfileData, other: ProfileData): { state: ProfileData; report: RepairReport } {
  const report: RepairReport = { mistakes: 0, writings: 0, conversations: 0, cards: 0, units: 0, steps: 0, days: 0, exams: 0, consolidations: 0 };
  const dropById = <T extends { id: string }>(list: T[] | undefined, theirs: T[] | undefined, k: keyof RepairReport): T[] => {
    const ids = new Set((theirs ?? []).map((x) => x.id));
    const out = (list ?? []).filter((x) => !ids.has(x.id));
    report[k] += (list?.length ?? 0) - out.length;
    return out;
  };
  const dropSame = <T,>(list: T[] | undefined, theirs: T[] | undefined, k: keyof RepairReport): T[] => {
    const keys = new Set((theirs ?? []).map((x) => JSON.stringify(x)));
    const out = (list ?? []).filter((x) => !keys.has(JSON.stringify(x)));
    report[k] += (list?.length ?? 0) - out.length;
    return out;
  };

  // unit steps identical to the other learner's are theirs; anything different contains the target's own work
  const units: Record<string, UnitProgress> = {};
  for (const [id, up] of Object.entries(target.units ?? {})) {
    const o = other.units?.[id];
    if (!o) {
      units[id] = up;
      continue;
    }
    const steps: UnitProgress['steps'] = {};
    for (const [step, sp] of Object.entries(up.steps ?? {}) as [keyof UnitProgress['steps'], StepProgress][]) {
      if (same(sp, o.steps?.[step])) report.steps++;
      else steps[step] = sp;
    }
    if (!Object.keys(steps).length) {
      report.units++;
      continue;
    }
    const completed = !!up.completed && (!o.completed || !!steps.test);
    units[id] = { steps, completed, completedDate: completed ? up.completedDate : undefined };
  }

  // cards: identical copies are the other learner's — unless the target has worked on that unit, then keep them
  // (removing them would take the words out of the target's review for good)
  const cards: Record<string, Card> = {};
  for (const [id, c] of Object.entries(target.cards ?? {})) {
    const o = other.cards?.[id];
    const ownUnit = !!(c.unitId && units[c.unitId]);
    if (o && same(c, o) && !ownUnit) report.cards++;
    else cards[id] = c;
  }

  // daily activity was merged with max(): a day identical to the other learner's is theirs
  const activity: Record<string, DayActivity> = {};
  for (const [day, a] of Object.entries(target.activity ?? {})) {
    if (other.activity?.[day] && same(a, other.activity[day])) report.days++;
    else activity[day] = a;
  }

  const state: ProfileData = {
    ...target,
    units,
    cards,
    activity,
    mistakes: dropById(target.mistakes, other.mistakes, 'mistakes'),
    writings: dropById(target.writings, other.writings, 'writings'),
    conversations: dropById(target.conversations, other.conversations, 'conversations'),
    examResults: dropSame(target.examResults, other.examResults, 'exams'),
    consolidations: dropSame(target.consolidations, other.consolidations, 'consolidations'),
    reports: (target.reports ?? []).filter((r) => !(other.reports ?? []).some((o) => same(o, r))),
    placement: same(target.placement, other.placement) ? undefined : target.placement,
    avatar: same(target.avatar, other.avatar) ? undefined : target.avatar,
    celebrated: { achievements: [], level: 1, goalDay: '' },
    plan: undefined,
    epoch: (Math.max(target.epoch ?? 0, other.epoch ?? 0) || 0) + 1,
  };
  // the start unit: if it was taken over from the other learner, fall back to the first unit the target worked on
  if (target.startUnitId && target.startUnitId === other.startUnitId && !units[target.startUnitId]) {
    const first = Object.keys(units).sort()[0];
    state.startUnitId = first ?? target.startUnitId;
  }
  return { state, report };
}
