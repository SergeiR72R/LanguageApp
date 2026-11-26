import { getUnit, rektionItems, type RektionEntry } from '../content';
import { levels } from '../content';
import { today } from './date';
import { currentUnitId, type AppState } from './store';

export const verbCardId = (r: RektionEntry) => r.id;

/** Not-yet-learned verbs up to the learner's current level, B1 first. */
export function verbQueue(s: Pick<AppState, 'cards' | 'units' | 'startUnitId'>, limit = Infinity): RektionEntry[] {
  const cur = currentUnitId(s);
  const lvl = (cur ? getUnit(cur)?.level : 'C1') ?? 'B1';
  const maxIdx = levels.indexOf(lvl);
  const out: RektionEntry[] = [];
  for (const r of rektionItems) {
    if (levels.indexOf(r.level) > maxIdx) continue;
    if (s.cards[r.id]) continue;
    out.push(r);
    if (out.length >= limit) break;
  }
  return out;
}

export function verbsLeftToday(s: AppState): number {
  return Math.max(0, s.settings.newVerbsPerDay - (s.activity[today()]?.newVerbs ?? 0));
}
