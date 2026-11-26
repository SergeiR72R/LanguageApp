import { describe, expect, it } from 'vitest';
import { mergeProfile } from './merge';
import { newSrs } from './srs';

const card = (id: string, reps: number, last = '2026-11-01') => ({ id, kind: 'vocab' as const, added: '2026-11-01', srs: { ...newSrs('2026-11-02'), reps, last } });
const day = (answered: number) => ({ reviews: 0, correct: answered, answered, stepsDone: 0, newWords: 0, spokenTurns: 0, wordsWritten: 0, drills: 0, bankWords: 0, newVerbs: 0 });

describe('mergeProfile', () => {
  const phone = {
    startUnitId: 'b1-01',
    units: { 'b1-01': { steps: { vocab: { done: true, date: '2026-11-24', score: 0.8 } } } },
    cards: { a: card('a', 3, '2026-11-24'), b: card('b', 1) },
    activity: { '2026-11-24': day(30) },
    mistakes: [{ id: 'm1', date: '2026-11-24', source: 'writing' as const, original: 'x', correction: 'y', category: 'Kasus' as const, explanationRu: '' }],
  };
  const laptop = {
    startUnitId: 'b1-01',
    units: { 'b1-01': { steps: { grammar: { done: true, date: '2026-11-25', score: 0.9 } }, completed: false }, 'b1-02': { steps: {} } },
    cards: { a: card('a', 1), c: card('c', 2) },
    activity: { '2026-11-24': day(10), '2026-11-25': day(40) },
    mistakes: [{ id: 'm1', date: '2026-11-24', source: 'writing' as const, original: 'x', correction: 'y', category: 'Kasus' as const, explanationRu: '', resolved: true }],
  };

  it('keeps progress from both devices', () => {
    const m = mergeProfile(phone, laptop, 'remote');
    expect(Object.keys(m.units!['b1-01'].steps).sort()).toEqual(['grammar', 'vocab']);
    expect(m.units!['b1-02']).toBeDefined();
    expect(Object.keys(m.cards!).sort()).toEqual(['a', 'b', 'c']);
    expect(m.cards!.a.srs.reps).toBe(3); // the more-reviewed copy wins
    expect(m.activity!['2026-11-24'].answered).toBe(30);
    expect(m.activity!['2026-11-25'].answered).toBe(40);
    expect(m.mistakes).toHaveLength(1);
    expect(m.mistakes![0].resolved).toBe(true);
  });

  it('is stable when merged again (no double counting)', () => {
    const once = mergeProfile(phone, laptop, 'local');
    const twice = mergeProfile(once, laptop, 'local');
    expect(twice.activity).toEqual(once.activity);
    expect(Object.keys(twice.cards!)).toHaveLength(3);
  });

  it('never loses an API key that only one device has', () => {
    const a = { settings: { keys: { groq: 'gsk_phone', gemini: '', openrouter: '', custom: '' } } } as never;
    const b = { settings: { keys: { groq: '', gemini: 'AIza_laptop', openrouter: '', custom: '' } } } as never;
    const m = mergeProfile(a, b, 'remote');
    expect(m.settings!.keys).toMatchObject({ groq: 'gsk_phone', gemini: 'AIza_laptop' });
  });
});
