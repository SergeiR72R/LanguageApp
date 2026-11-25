import { describe, expect, it } from 'vitest';
import type { Exercise, PlacementItem, Unit } from './types';

const unitModules = import.meta.glob<{ unit: Unit }>('./{b1,b2,c1}/u*.ts', { eager: true });
const placementModules = import.meta.glob<{ placementItems: PlacementItem[] }>('./placement.ts', { eager: true });

function checkExercise(ex: Exercise, where: string) {
  switch (ex.type) {
    case 'choice':
      expect(ex.options.length, where).toBeGreaterThanOrEqual(3);
      expect(ex.answer, where).toBeGreaterThanOrEqual(0);
      expect(ex.answer, where).toBeLessThan(ex.options.length);
      expect(new Set(ex.options).size, `${where} duplicate options`).toBe(ex.options.length);
      break;
    case 'gap':
      expect(ex.prompt.split('___').length - 1, `${where} must contain exactly one ___`).toBe(1);
      expect(ex.answers.length, where).toBeGreaterThan(0);
      break;
    case 'order':
      expect(ex.words.length, where).toBeGreaterThanOrEqual(4);
      break;
    case 'transform':
      expect(ex.answers.length, where).toBeGreaterThan(0);
      expect(ex.instructionRu.length, where).toBeGreaterThan(3);
      break;
    default:
      throw new Error(`${where}: unknown exercise type`);
  }
  expect(ex.explanationRu.length, `${where} explanationRu`).toBeGreaterThan(5);
}

describe('course units', () => {
  const entries = Object.entries(unitModules);
  it('has units', () => {
    expect(entries.length).toBeGreaterThan(0);
  });
  for (const [path, mod] of entries) {
    describe(path, () => {
      const u = mod.unit;
      it('has consistent id/level', () => {
        expect(u, 'module must export const unit').toBeDefined();
        const folder = path.split('/')[1];
        expect(u.level.toLowerCase()).toBe(folder);
        expect(u.id).toBe(`${folder}-${String(u.order).padStart(2, '0')}`);
        expect(path.endsWith(`/u${String(u.order).padStart(2, '0')}.ts`)).toBe(true);
      });
      it('has grammar', () => {
        expect(u.grammar.explanationRu.length).toBeGreaterThan(300);
        expect(u.grammar.examples.length).toBeGreaterThanOrEqual(4);
        expect(u.grammar.exercises.length).toBeGreaterThanOrEqual(10);
        u.grammar.exercises.forEach((ex, i) => checkExercise(ex, `${u.id} ex ${i}`));
      });
      it('has 20 vocab items', () => {
        expect(u.vocab.length).toBe(20);
        for (const v of u.vocab) {
          if (v.pos === 'noun') expect(v.article, `${u.id} ${v.de} needs article`).toBeDefined();
          expect(v.example.length).toBeGreaterThan(10);
          expect(v.ru.length).toBeGreaterThan(0);
        }
        expect(new Set(u.vocab.map((v) => v.de)).size, `${u.id} duplicate vocab`).toBe(20);
      });
      it('has listening', () => {
        const words = u.listening.text.split(/\s+/).length;
        expect(words).toBeGreaterThan(120);
        expect(u.listening.questions.length).toBe(5);
        for (const q of u.listening.questions) {
          expect(q.answer).toBeLessThan(q.options.length);
        }
        if (u.listening.kind === 'dialog') {
          for (const line of u.listening.text.split('\n').filter((l) => l.trim())) {
            expect(/^[AB]: /.test(line), `${u.id} dialog line: ${line.slice(0, 30)}`).toBe(true);
          }
        }
      });
      it('has writing and speaking', () => {
        expect(u.writing.points.length).toBeGreaterThanOrEqual(3);
        expect(u.writing.minWords).toBeGreaterThan(50);
        expect(u.speaking.readAloud.length).toBe(3);
        expect(u.speaking.tasksRu.length).toBeGreaterThanOrEqual(3);
      });
    });
  }
});

describe('placement test', () => {
  const mods = Object.values(placementModules);
  it('exists', () => expect(mods.length).toBe(1));
  const items = mods[0]?.placementItems ?? [];
  it('is well-formed', () => {
    expect(items.length).toBeGreaterThanOrEqual(40);
    const ids = new Set(items.map((i) => i.id));
    expect(ids.size).toBe(items.length);
    for (const it of items) {
      expect(it.answer).toBeGreaterThanOrEqual(0);
      expect(it.answer, it.id).toBeLessThan(it.options.length);
      if (it.skill === 'listening') expect(it.audio, it.id).toBeTruthy();
      if (it.skill === 'reading') expect(it.context, it.id).toBeTruthy();
    }
    for (const band of ['A2', 'B1', 'B2', 'C1'] as const) {
      expect(items.filter((i) => i.band === band).length).toBeGreaterThanOrEqual(8);
    }
  });
});
