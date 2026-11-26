import { describe, expect, it } from 'vitest';
import type { Exercise, ListeningText, MockExam, ReadingText, Task, Unit, UnitMore, VocabItem } from './types';

const units = Object.values(import.meta.glob<{ unit: Unit }>('./{a1,a2,b1,b2,c1}/u*.ts', { eager: true })).map((m) => m.unit);
const wordMods = import.meta.glob<{ words: VocabItem[] }>('./{a1,a2,b1,b2,c1}/words/u*.ts', { eager: true });
const moreMods = import.meta.glob<{ more: UnitMore }>('./{a1,a2,b1,b2,c1}/more/u*.ts', { eager: true });
const examMods = import.meta.glob<{ exam: MockExam }>('./exams/*.ts', { eager: true });

const MIN_WORDS: Record<string, number> = { a1: 15, a2: 35, b1: 75, b2: 120, c1: 130 };
/** beginner texts are short */
const MIN_READING: Record<string, number> = { a1: 35, a2: 60 };
const levelOf = (where: string) => /\b(a1|a2|b1|b2|c1)\b|\/(a1|a2|b1|b2|c1)[/-]/.exec(where)?.slice(1).find(Boolean) ?? '';
export const lemmaKey = (v: VocabItem) => `${v.article ?? ''} ${v.de}`.toLowerCase().replace(/\s+/g, ' ').trim();

function checkTask(t: Task, where: string) {
  expect(t.instructionDe.length, where).toBeGreaterThan(10);
  expect(t.items.length, where).toBeGreaterThan(0);
  for (const [i, it] of t.items.entries()) {
    const w = `${where} item ${i}`;
    if (it.kind === 'mc') {
      expect(it.options.length, w).toBeGreaterThanOrEqual(3);
      expect(it.answer, w).toBeGreaterThanOrEqual(0);
      expect(it.answer, w).toBeLessThan(it.options.length);
    } else if (it.kind === 'tf') {
      expect(typeof it.answer, w).toBe('boolean');
    } else if (it.kind === 'match') {
      expect(t.options?.length, `${w}: match needs Task.options`).toBeGreaterThan(1);
      if (it.answer === -1) expect(t.allowNone, `${w}: -1 needs allowNone`).toBe(true);
      else expect(it.answer, w).toBeLessThan(t.options!.length);
    } else throw new Error(`${w}: unknown kind`);
  }
}

function checkReading(r: ReadingText, where: string) {
  expect(r.texts.length, where).toBeGreaterThan(0);
  const words = r.texts.reduce((a, t) => a + t.body.split(/\s+/).length, 0);
  expect(words, `${where} too short`).toBeGreaterThan(MIN_READING[levelOf(where)] ?? 80);
  r.tasks.forEach((t, i) => checkTask(t, `${where} task ${i}`));
}

function checkListening(l: ListeningText, where: string) {
  expect(l.text.split(/\s+/).length, `${where} too short`).toBeGreaterThan(25);
  if (l.kind !== 'monolog') {
    for (const line of l.text.split('\n').filter((x) => x.trim())) {
      expect(/^[ABCD]: /.test(line), `${where} line must start with "A: ".."D: ": ${line.slice(0, 40)}`).toBe(true);
    }
  }
  expect([1, 2]).toContain(l.playCount);
  l.tasks.forEach((t, i) => checkTask(t, `${where} task ${i}`));
}

function checkExercise(ex: Exercise, where: string) {
  if (ex.type === 'choice') {
    expect(ex.answer, where).toBeLessThan(ex.options.length);
    expect(new Set(ex.options).size, `${where} duplicate options`).toBe(ex.options.length);
  }
  if (ex.type === 'gap') expect(ex.prompt.split('___').length - 1, `${where} exactly one ___`).toBe(1);
  if (ex.type === 'gap' || ex.type === 'transform') expect(ex.answers.length, where).toBeGreaterThan(0);
  if (ex.type === 'order') expect(ex.words.length, where).toBeGreaterThanOrEqual(4);
  expect(ex.explanationRu.length, where).toBeGreaterThan(5);
}

describe('word banks', () => {
  for (const [path, mod] of Object.entries(wordMods)) {
    it(path, () => {
      const lvl = path.split('/')[1];
      const n = path.match(/u(\d+)\.ts$/)![1];
      expect(units.some((u) => u.id === `${lvl}-${n}`), `${path}: no matching unit`).toBe(true);
      expect(Array.isArray(mod.words), `${path} must export const words`).toBe(true);
      expect(mod.words.length, `${path} has too few words`).toBeGreaterThanOrEqual(MIN_WORDS[lvl]);
      for (const v of mod.words) {
        if (v.pos === 'noun') expect(v.article, `${path} ${v.de} needs article`).toBeDefined();
        expect(v.ru.length, `${path} ${v.de}`).toBeGreaterThan(0);
        expect(v.example.length, `${path} ${v.de}`).toBeGreaterThan(10);
      }
    });
  }
  it('after de-duplication every unit keeps enough words', async () => {
    const { wordBank, allUnits } = await import('./index');
    for (const u of allUnits) {
      const path = `./${u.level.toLowerCase()}/words/u${String(u.order).padStart(2, '0')}.ts`;
      if (!wordMods[path]) continue;
      const min = Math.floor(MIN_WORDS[u.level.toLowerCase()] * 0.9);
      expect(wordBank(u.id).length, `${path}: too many duplicates of other units' words`).toBeGreaterThanOrEqual(min);
    }
  });
});

describe('extra practice', () => {
  it('loads', () => expect(moreMods).toBeDefined());
  for (const [path, mod] of Object.entries(moreMods)) {
    it(path, () => {
      const m = mod.more;
      expect(m, `${path} must export const more`).toBeDefined();
      const unit = units.find((u) => `./${u.level.toLowerCase()}/more/u${String(u.order).padStart(2, '0')}.ts` === path);
      const steps = unit?.steps;
      expect(m.exercises.length, `${path} exercises`).toBeGreaterThanOrEqual(18);
      m.exercises.forEach((ex, i) => checkExercise(ex, `${path} ex ${i}`));
      expect(m.reading.length, `${path} reading`).toBeGreaterThanOrEqual(steps && !steps.includes('reading') ? 0 : 2);
      m.reading.forEach((r, i) => {
        checkReading(r, `${path} reading ${i}`);
        r.tasks.forEach((t) => t.items.forEach((it) => expect(it.explanationRu, `${path} reading ${i}: explanationRu required`).toBeTruthy()));
      });
      expect(m.listening.length, `${path} listening`).toBeGreaterThanOrEqual(steps ? 1 : 2);
      m.listening.forEach((l, i) => checkListening(l, `${path} listening ${i}`));
    });
  }
});

describe('mock exams', () => {
  it('loads', () => expect(examMods).toBeDefined());
  for (const [path, mod] of Object.entries(examMods)) {
    it(path, () => {
      const e = mod.exam;
      expect(e, `${path} must export const exam`).toBeDefined();
      expect(path.endsWith(`/${e.id.replace('-exam-', '-')}.ts`), `${path}: id ${e.id} must match file name`).toBe(true);
      expect(e.lesen.parts.length).toBeGreaterThanOrEqual(3);
      e.lesen.parts.forEach((p, i) => checkReading(p, `${path} Lesen ${i}`));
      expect(e.hoeren.parts.length).toBeGreaterThanOrEqual(3);
      e.hoeren.parts.forEach((p, i) => {
        expect(p.segments.length).toBeGreaterThan(0);
        p.segments.forEach((s, k) => checkListening(s, `${path} Hören ${i}.${k}`));
      });
      expect(e.schreiben.tasks.reduce((a, t) => a + t.maxPoints, 0), `${path} Schreiben points`).toBe(100);
      expect(e.sprechen.tasks.reduce((a, t) => a + t.maxPoints, 0), `${path} Sprechen points`).toBe(100);
      for (const t of e.sprechen.tasks) expect(t.opener.length, `${path} Sprechen opener`).toBeGreaterThan(5);
    });
  }
});

describe('completeness', () => {
  it('every unit has a word bank and extra practice; mock exams for every level', () => {
    for (const u of units) {
      const n = String(u.order).padStart(2, '0');
      const lvl = u.level.toLowerCase();
      expect(wordMods[`./${lvl}/words/u${n}.ts`], `${u.id} word bank`).toBeDefined();
      expect(moreMods[`./${lvl}/more/u${n}.ts`], `${u.id} extra practice`).toBeDefined();
    }
    for (const [lvl, n] of [['a1', 2], ['a2', 2], ['b1', 3], ['b2', 3], ['c1', 3]] as const) {
      if (!units.some((u) => u.level.toLowerCase() === lvl)) continue;
      expect(Object.keys(examMods).filter((p) => p.includes(`/${lvl}-`)).length, `${lvl} exams`).toBe(n);
    }
  });
});
