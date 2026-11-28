import { expect, it } from 'vitest';
import { mergeProfile, type ProfileData } from './merge';
import { separateProfiles } from './repair';

const srs = (reps: number, due: string) => ({ due, interval: reps, ease: 2.5, reps, lapses: 0, last: due });
const day = (n: number) => ({ reviews: n, correct: n, answered: n, stepsDone: 0, newWords: 0, spokenTurns: 0, wordsWritten: 0, drills: 0, bankWords: 0, newVerbs: 0 });

const me: ProfileData = {
  startUnitId: 'b1-01',
  units: {
    'b1-01': { steps: { vocab: { done: true, score: 0.9, date: '2026-11-10' }, test: { done: true, score: 0.95, date: '2026-11-12' } }, completed: true, completedDate: '2026-11-12' },
    'b1-02': { steps: { vocab: { done: true, score: 1, date: '2026-11-14' } } },
  },
  cards: {
    'v:b1-01:0': { id: 'v:b1-01:0', kind: 'vocab', unitId: 'b1-01', index: 0, srs: srs(5, '2026-12-01') },
    'v:b1-02:0': { id: 'v:b1-02:0', kind: 'vocab', unitId: 'b1-02', index: 0, srs: srs(2, '2026-11-30') },
  } as unknown as ProfileData['cards'],
  activity: { '2026-11-10': day(50), '2026-11-14': day(80) },
  mistakes: [{ id: 'm-me', date: '2026-11-14', source: 'writing', original: 'a', correction: 'b', category: 'Kasus', explanationRu: '' }],
  writings: [{ id: 'w-me', date: '2026-11-14', task: 't', text: 'mein Text' }],
  avatar: { look: { gender: 'm' } as never, equipped: {} },
};

const hers: ProfileData = {
  startUnitId: 'b1-01',
  units: { 'b1-01': { steps: { vocab: { done: true, score: 0.8, date: '2026-11-20' } } } },
  cards: { 'v:b1-01:0': { id: 'v:b1-01:0', kind: 'vocab', unitId: 'b1-01', index: 0, srs: srs(1, '2026-11-29') } } as unknown as ProfileData['cards'],
  activity: { '2026-11-20': day(30), '2026-11-14': day(10) },
  mistakes: [{ id: 'm-her', date: '2026-11-20', source: 'writing', original: 'x', correction: 'y', category: 'Kasus', explanationRu: '' }],
  avatar: { look: { gender: 'f' } as never, equipped: {} },
};

it('removes the other learner from a mixed-up profile and keeps her own work', () => {
  // what happened: my data was saved under her key, then sync merged it with her cloud copy
  const mixed = mergeProfile(me, hers, 'local');
  expect(mixed.mistakes).toHaveLength(2);

  const { state, report } = separateProfiles(mixed, me);
  expect(state.mistakes!.map((m) => m.id)).toEqual(['m-her']);
  expect(state.writings).toEqual([]);
  expect(Object.keys(state.units!)).toEqual(['b1-01']); // b1-02 was only mine
  expect(state.units!['b1-01'].steps.test).toBeUndefined(); // my unit test
  expect(state.units!['b1-01'].completed).toBe(false);
  expect(state.cards!['v:b1-02:0']).toBeUndefined(); // my card of a unit she never started
  expect(state.cards!['v:b1-01:0']).toBeDefined(); // she learned these words too: keep them in her review
  expect(Object.keys(state.activity!)).toEqual(['2026-11-20']); // 11-10 and 11-14 (max = mine) removed
  expect(state.avatar).toBeUndefined(); // she gets to create her own hero again
  expect(state.epoch).toBe(1);
  expect(report.mistakes).toBe(1);
});

it('a cleaned profile replaces older mixed copies during sync instead of merging with them', () => {
  const mixed = mergeProfile(me, hers, 'local');
  const { state } = separateProfiles(mixed, me);
  expect(mergeProfile(mixed, state, 'local')).toBe(state);
  expect(mergeProfile(state, mixed, 'remote')).toBe(state);
});
