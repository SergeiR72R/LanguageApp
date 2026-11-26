import type { Exercise, Level, MockExam, PlacementItem, RektionItem, Unit, UnitMore, VocabItem } from './types';

const unitModules = import.meta.glob<{ unit: Unit }>('./{a1,a2,b1,b2,c1}/u*.ts', { eager: true });
const wordModules = import.meta.glob<{ words: VocabItem[] }>('./{a1,a2,b1,b2,c1}/words/u*.ts', { eager: true });
const moreModules = import.meta.glob<{ more: UnitMore }>('./{a1,a2,b1,b2,c1}/more/u*.ts', { eager: true });
// mock exams are large: loaded on demand
const examModules = import.meta.glob<{ exam: MockExam }>('./exams/*.ts');
const rektionModules = import.meta.glob<{ rektion: RektionItem[] }>('./rektion/*.ts', { eager: true });
const placementModules = import.meta.glob<{ placementItems: PlacementItem[] }>('./placement.ts', { eager: true });

const LEVEL_ORDER: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

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
  const m = /\.\/(a1|a2|b1|b2|c1)\/\w+\/u(\d+)\.ts$/.exec(path);
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

export interface ExamInfo {
  id: string;
  level: Level;
  title: string;
}

/** "./exams/b1-2.ts" → { id: "b1-exam-2", level: "B1", title: "Übungstest B1 – 2" } */
export const exams: ExamInfo[] = Object.keys(examModules)
  .map((p) => {
    const [, lvl, n] = /\/(a1|a2|b1|b2|c1)-(\d+)\.ts$/.exec(p) ?? [];
    return { id: `${lvl}-exam-${n}`, level: lvl.toUpperCase() as Level, title: `Übungstest ${lvl.toUpperCase()} – ${n}` };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export async function loadExam(id: string): Promise<MockExam | undefined> {
  const m = /^(a1|a2|b1|b2|c1)-exam-(\d+)$/.exec(id);
  const loader = m && examModules[`./exams/${m[1]}-${m[2]}.ts`];
  return loader ? (await loader()).exam : undefined;
}

export function totalWordCount(): number {
  return allUnits.reduce((a, u) => a + u.vocab.length + wordBank(u.id).length, 0);
}

// ---------------- verb government (Rektion) ----------------

export interface RektionEntry extends RektionItem {
  id: string;
  level: Level;
}

const slug = (x: string) =>
  x
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** All entries A2 → C1, duplicates across levels removed (first occurrence wins). */
export const rektionItems: RektionEntry[] = (() => {
  const out: RektionEntry[] = [];
  const seen = new Set<string>();
  for (const level of LEVEL_ORDER) {
    const mod = Object.entries(rektionModules).find(([p]) => p.endsWith(`/${level.toLowerCase()}.ts`))?.[1];
    for (const r of mod?.rektion ?? []) {
      const key = `${r.verb}|${r.prep ?? ''}|${r.case}`.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ ...r, level, id: `r:${slug(r.verb)}:${r.prep ?? r.case.toLowerCase()}` });
    }
  }
  return out;
})();

const rektionById = new Map(rektionItems.map((r) => [r.id, r]));
export const getRektion = (id: string) => rektionById.get(id);
