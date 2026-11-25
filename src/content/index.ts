import type { Exercise, Level, MockExam, PlacementItem, Unit, UnitMore, VocabItem } from './types';

const unitModules = import.meta.glob<{ unit: Unit }>('./{b1,b2,c1}/u*.ts', { eager: true });
const wordModules = import.meta.glob<{ words: VocabItem[] }>('./{b1,b2,c1}/words/u*.ts', { eager: true });
const moreModules = import.meta.glob<{ more: UnitMore }>('./{b1,b2,c1}/more/u*.ts', { eager: true });
const examModules = import.meta.glob<{ exam: MockExam }>('./exams/*.ts', { eager: true });
const placementModules = import.meta.glob<{ placementItems: PlacementItem[] }>('./placement.ts', { eager: true });

const LEVEL_ORDER: Level[] = ['B1', 'B2', 'C1'];

export const allUnits: Unit[] = Object.values(unitModules)
  .map((m) => m.unit)
  .filter(Boolean)
  .sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) || a.order - b.order);

export const placementItems: PlacementItem[] = Object.values(placementModules)[0]?.placementItems ?? [];

export const levels = LEVEL_ORDER;

const byId = new Map(allUnits.map((u) => [u.id, u]));

export function getUnit(id: string): Unit | undefined {
  return byId.get(id);
}

export function unitIndex(id: string): number {
  return allUnits.findIndex((u) => u.id === id);
}

export function unitsOfLevel(level: Level): Unit[] {
  return allUnits.filter((u) => u.level === level);
}

export function firstUnitOfLevel(level: Level): Unit | undefined {
  return allUnits.find((u) => u.level === level);
}

/** "./b1/words/u03.ts" → "b1-03" */
const idFromPath = (path: string) => {
  const m = /\.\/(b1|b2|c1)\/\w+\/u(\d+)\.ts$/.exec(path);
  return m ? `${m[1]}-${m[2]}` : '';
};

export const lemmaKey = (v: VocabItem) => `${v.article ?? ''} ${v.de}`.toLowerCase().replace(/\s+/g, ' ').trim();

/**
 * Word banks were written in parallel, so a word can appear in several of them.
 * Keep only its first occurrence in course order (core vocab of all units first).
 */
const wordBanks = (() => {
  const raw = new Map<string, VocabItem[]>(Object.entries(wordModules).map(([p, m]) => [idFromPath(p), m.words ?? []]));
  const seen = new Set<string>(allUnits.flatMap((u) => u.vocab.map(lemmaKey)));
  const out = new Map<string, VocabItem[]>();
  for (const u of allUnits) {
    const list = (raw.get(u.id) ?? []).filter((v) => {
      const k = lemmaKey(v);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
    out.set(u.id, list);
  }
  return out;
})();
const mores = new Map<string, UnitMore>(Object.entries(moreModules).map(([p, m]) => [idFromPath(p), m.more]));

/** Extended vocabulary of a unit (introduced gradually as "words of the day"). */
export function wordBank(unitId: string): VocabItem[] {
  return wordBanks.get(unitId) ?? [];
}

/** Extra grammar exercises, reading and listening of a unit. */
export function unitMore(unitId: string): UnitMore | undefined {
  return mores.get(unitId);
}

export function practiceExercises(unitId: string): Exercise[] {
  return mores.get(unitId)?.exercises ?? [];
}

export const exams: MockExam[] = Object.values(examModules)
  .map((m) => m.exam)
  .filter(Boolean)
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export function getExam(id: string): MockExam | undefined {
  return exams.find((e) => e.id === id);
}

export function totalWordCount(): number {
  return allUnits.reduce((a, u) => a + u.vocab.length + wordBank(u.id).length, 0);
}
