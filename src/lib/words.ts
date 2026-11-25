import type { VocabItem } from '../content/types';
import { allUnits, unitIndex, wordBank } from '../content';
import { today } from './date';
import { currentUnitId, type AppState } from './store';

export interface QueuedWord {
  unitId: string;
  index: number;
  v: VocabItem;
}

export const bankCardId = (unitId: string, index: number) => `w:${unitId}:${index}`;

/**
 * Words not yet introduced, in learning order: the current unit's word bank first,
 * then earlier units (e.g. levels skipped by the placement test) from the beginning.
 */
export function wordQueue(s: Pick<AppState, 'cards' | 'units' | 'startUnitId'>, limit = Infinity): QueuedWord[] {
  const cur = currentUnitId(s);
  const curIdx = cur ? unitIndex(cur) : allUnits.length - 1;
  const order = [allUnits[curIdx], ...allUnits.slice(0, curIdx)].filter(Boolean);
  const out: QueuedWord[] = [];
  for (const u of order) {
    const bank = wordBank(u.id);
    for (let i = 0; i < bank.length && out.length < limit; i++) {
      if (!s.cards[bankCardId(u.id, i)]) out.push({ unitId: u.id, index: i, v: bank[i] });
    }
    if (out.length >= limit) break;
  }
  return out;
}

export function wordsLeftToday(s: AppState): number {
  const done = s.activity[today()]?.bankWords ?? 0;
  return Math.max(0, s.settings.newWordsPerDay - done);
}

export function bankStats(s: Pick<AppState, 'cards'>): { introduced: number; total: number } {
  const total = allUnits.reduce((a, u) => a + wordBank(u.id).length, 0);
  const introduced = Object.keys(s.cards).filter((k) => k.startsWith('w:')).length;
  return { introduced, total };
}
