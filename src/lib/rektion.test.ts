import { expect, it } from 'vitest';
import { daForm, rektionExercise, rektionLabel, woForm } from './rektion';

const warten = { id: 'r:warten:auf', level: 'B1' as const, verb: 'warten', prep: 'auf', case: 'Akk' as const, ru: 'ждать', example: 'Ich warte auf den Bus.', exampleRu: 'Я жду автобус.', gap: 'Ich warte ___ den Bus.', gapAnswer: 'auf' };
const helfen = { id: 'r:helfen:dat', level: 'B1' as const, verb: 'helfen', case: 'Dat' as const, ru: 'помогать (кому?)', example: 'Ich helfe dem Mann.', exampleRu: 'Я помогаю мужчине.', gap: 'Ich helfe ___ Mann.', gapAnswer: 'dem' };

it('builds labels and wo/da forms', () => {
  expect(rektionLabel(warten)).toBe('warten auf + Akk');
  expect(rektionLabel(helfen)).toBe('helfen + Dat');
  expect(woForm('auf')).toBe('worauf');
  expect(daForm('mit')).toBe('damit');
});

it('rotates exercise types and always has a valid key', () => {
  for (let reps = 0; reps < 10; reps++) {
    for (const r of [warten, helfen]) {
      const ex = rektionExercise(r, reps);
      if (ex.type === 'choice') expect(ex.answer).toBeGreaterThanOrEqual(0);
      if (ex.type === 'gap') expect(ex.answers[0]).toBe(r.gapAnswer);
    }
  }
  expect(rektionExercise(warten, 0).type).toBe('choice');
  expect(rektionExercise(warten, 1).type).toBe('gap');
});
