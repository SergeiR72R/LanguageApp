import type { PlacementItem } from '../content/types';
import { allUnits, firstUnitOfLevel } from '../content';
import type { PlacementResult } from './store';
import { today } from './date';

type Tally = Record<string, { correct: number; total: number }>;

const acc = (t: Tally, k: string) => (t[k]?.total ? t[k].correct / t[k].total : 0);

/**
 * Turn answers into a level estimate and a recommended starting unit.
 * Bands are cumulative: a band counts only if the lower ones are solid.
 */
export function scorePlacement(items: PlacementItem[], answers: Record<string, number>): PlacementResult {
  const byBand: Tally = {};
  const bySkill: Tally = {};
  for (const it of items) {
    if (!(it.id in answers)) continue;
    const ok = answers[it.id] === it.answer ? 1 : 0;
    byBand[it.band] ??= { correct: 0, total: 0 };
    bySkill[it.skill] ??= { correct: 0, total: 0 };
    byBand[it.band].correct += ok;
    byBand[it.band].total += 1;
    bySkill[it.skill].correct += ok;
    bySkill[it.skill].total += 1;
  }
  const a2 = acc(byBand, 'A2');
  const b1 = acc(byBand, 'B1');
  const b2 = acc(byBand, 'B2');
  const c1 = acc(byBand, 'C1');

  let estimated: PlacementResult['estimated'];
  let recommended: string;
  const b1Unit = (pos: number) => allUnits.filter((u) => u.level === 'B1')[pos]?.id;

  if (a2 < 0.6) {
    estimated = 'A2';
    recommended = firstUnitOfLevel('B1')!.id;
  } else if (b1 < 0.5) {
    estimated = 'A2';
    recommended = firstUnitOfLevel('B1')!.id;
  } else if (b1 < 0.75) {
    estimated = 'B1';
    // partial B1: start in the middle of B1 when the result is good enough
    recommended = (b1 >= 0.65 ? b1Unit(4) : b1Unit(0)) ?? firstUnitOfLevel('B1')!.id;
  } else if (b2 < 0.65) {
    estimated = 'B1';
    recommended = firstUnitOfLevel('B2')!.id;
    if (b2 < 0.4) recommended = b1Unit(6) ?? recommended; // B1 almost done, finish the hard B1 topics first
  } else if (c1 < 0.7) {
    estimated = 'B2';
    recommended = firstUnitOfLevel('C1')!.id;
  } else {
    estimated = 'C1+';
    recommended = firstUnitOfLevel('C1')!.id;
  }
  return { date: today(), byBand, bySkill, estimated, recommendedUnitId: recommended };
}
