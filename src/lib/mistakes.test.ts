import { expect, it, vi } from 'vitest';

vi.hoisted(() => {
  const mem = new Map<string, string>();
  (globalThis as unknown as { localStorage: Storage }).localStorage = {
    getItem: (k: string) => mem.get(k) ?? null,
    setItem: (k: string, v: string) => void mem.set(k, v),
    removeItem: (k: string) => void mem.delete(k),
    clear: () => mem.clear(),
    key: () => null,
    length: 0,
  };
});

import { dueCards, isReviewableMistake, type Card, type Mistake } from './store';

const m = (p: Partial<Mistake>): Mistake => ({
  id: 'x',
  date: '2026-01-01',
  source: 'speaking',
  original: 'a',
  correction: 'b',
  category: 'Verbform/Konjugation',
  explanationRu: '…',
  ...p,
});

it('keeps word forms and basic grammar, drops phrasing remarks from conversations', () => {
  expect(isReviewableMistake(m({ category: 'Verbform/Konjugation', correction: 'fährt' }))).toBe(true);
  expect(isReviewableMistake(m({ category: 'Kasus', correction: 'mit dem Bus' }))).toBe(true);
  expect(isReviewableMistake(m({ category: 'Sonstiges', correction: 'kommen Sie bitte herein' }))).toBe(false);
  expect(isReviewableMistake(m({ category: 'Stil/Register', correction: 'gern' }))).toBe(false);
  expect(isReviewableMistake(m({ category: 'Wortschatz/Lexik', correction: 'kommen Sie bitte herein' }))).toBe(false);
  expect(isReviewableMistake(m({ source: 'writing', category: 'Kasus', correction: 'wegen des schlechten Wetters' }))).toBe(true);
});

it('hides existing cards of such mistakes from the review queue', () => {
  const card = (id: string): Card => ({ id, kind: 'mistake', srs: { due: '2026-01-01', interval: 1, ease: 2.5, reps: 0, lapses: 0 } }) as Card;
  const due = dueCards({
    cards: { 'm:a': card('m:a'), 'm:b': card('m:b') },
    mistakes: [m({ id: 'a', category: 'Sonstiges', correction: 'kommen Sie bitte herein' }), m({ id: 'b', correction: 'fährt' })],
  });
  expect(due.map((c) => c.id)).toEqual(['m:b']);
});
