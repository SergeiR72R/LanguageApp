import { addDays } from './date';

/** 0 = снова, 1 = трудно, 2 = хорошо, 3 = легко */
export type Grade = 0 | 1 | 2 | 3;

export interface SrsState {
  ease: number;
  /** days */
  interval: number;
  due: string;
  reps: number;
  lapses: number;
  last?: string;
}

export function newSrs(due: string): SrsState {
  return { ease: 2.5, interval: 0, due, reps: 0, lapses: 0 };
}

/** SM-2 style scheduler with day granularity. */
export function schedule(s: SrsState, grade: Grade, today: string): SrsState {
  let { ease, interval, reps, lapses } = s;
  if (grade === 0) {
    lapses += 1;
    reps = 0;
    ease = Math.max(1.3, ease - 0.2);
    interval = 1;
  } else {
    if (grade === 1) {
      ease = Math.max(1.3, ease - 0.15);
      interval = reps === 0 ? 1 : Math.max(interval + 1, Math.round(interval * 1.2));
    } else if (grade === 2) {
      interval = reps === 0 ? 1 : reps === 1 ? 3 : Math.round(interval * ease);
    } else {
      ease = ease + 0.15;
      interval = reps === 0 ? 3 : reps === 1 ? 6 : Math.round(interval * ease * 1.3);
    }
    reps += 1;
  }
  interval = Math.min(Math.max(interval, 1), 365);
  return { ease: Math.round(ease * 100) / 100, interval, reps, lapses, due: addDays(today, interval), last: today };
}

/** A card is "learned" (mature) once its interval reaches 21 days. */
export function isMature(s: SrsState): boolean {
  return s.interval >= 21;
}
