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

import { useStore, type Card } from './store';
import { buildPlan } from './daily';

const due = (n: number) =>
  Object.fromEntries(
    Array.from({ length: n }, (_, i) => [`v:b1-01:${i}`, { id: `v:b1-01:${i}`, kind: 'vocab', unitId: 'b1-01', index: i, srs: { due: '2000-01-01', interval: 1, ease: 2.5, reps: 1, lapses: 0 } } as Card]),
  );

it('adds new words only while the review queue is within the daily limit', () => {
  const s0 = useStore.getState();
  useStore.setState({ startUnitId: 'b1-01', cards: due(10), settings: { ...s0.settings, reviewLimit: 80 } });
  expect(buildPlan(useStore.getState()).some((i) => i.kind === 'words')).toBe(true);
  useStore.setState({ cards: due(120) });
  const plan = buildPlan(useStore.getState());
  expect(plan.some((i) => i.kind === 'words')).toBe(false);
  expect(plan[0].kind).toBe('review');
});
