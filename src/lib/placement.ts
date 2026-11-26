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
  const a1 = acc(byBand, 'A1');
  const a2 = acc(byBand, 'A2');
  const b1 = acc(byBand, 'B1');
  const b2 = acc(byBand, 'B2');
  const c1 = acc(byBand, 'C1');

  let estimated: PlacementResult['estimated'];
  let recommended: string;
  const unitAt = (level: 'A1' | 'A2' | 'B1', pos: number) => allUnits.filter((u) => u.level === level)[pos]?.id;
  const b1Unit = (pos: number) => unitAt('B1', pos);
  const hasA1 = !!byBand.A1?.total;

  if (hasA1 && a1 < 0.4) {
    estimated = 'A1';
    recommended = firstUnitOfLevel('A1')!.id; // from the alphabet
  } else if (hasA1 && a1 < 0.75) {
    estimated = 'A1';
    recommended = unitAt('A1', 3) ?? firstUnitOfLevel('A1')!.id; // reading is fine: skip the letters & sounds units
  } else if (a2 < 0.5) {
    estimated = 'A1';
    recommended = firstUnitOfLevel('A2')?.id ?? firstUnitOfLevel('B1')!.id;
  } else if (a2 < 0.75) {
    estimated = 'A2';
    recommended = unitAt('A2', 10) ?? firstUnitOfLevel('B1')!.id;
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
    if (b2 < 0.4) recommended = b1Unit(10) ?? b1Unit(6) ?? recommended; // core B1 known: continue with the advanced B1 units
  } else if (c1 < 0.7) {
    estimated = 'B2';
    recommended = firstUnitOfLevel('C1')!.id;
  } else {
    estimated = 'C1+';
    recommended = firstUnitOfLevel('C1')!.id;
  }
  return { date: today(), byBand, bySkill, estimated, recommendedUnitId: recommended };
}

const RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };

export function parseCefr(s: string): number | undefined {
  const m = /([ABC][12])/.exec(s.toUpperCase());
  return m ? RANK[m[1]] : undefined;
}

/**
 * The multiple-choice test measures recognition; free writing shows active command.
 * If the writing sample is two or more levels below the level we would start at,
 * start one level lower (never below A2).
 */
export function adjustForWriting(unitId: string, writingCefr: string): { unitId: string; adjusted: boolean } {
  const unit = allUnits.find((u) => u.id === unitId);
  const w = parseCefr(writingCefr);
  if (!unit || w === undefined) return { unitId, adjusted: false };
  const startRank = RANK[unit.level];
  if (startRank - w < 2 || startRank <= RANK.A2) return { unitId, adjusted: false };
  const lower = unit.level === 'C1' ? 'B2' : unit.level === 'B2' ? 'B1' : 'A2';
  return { unitId: firstUnitOfLevel(lower)!.id, adjusted: true };
}
