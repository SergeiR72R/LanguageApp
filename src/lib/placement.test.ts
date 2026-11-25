import { describe, expect, it } from 'vitest';
import { placementItems } from '../content';
import { scorePlacement } from './placement';

function answersFor(correctBands: Record<string, number>) {
  const answers: Record<string, number> = {};
  const counters: Record<string, number> = {};
  for (const it of placementItems) {
    const share = correctBands[it.band] ?? 0;
    const bandItems = placementItems.filter((i) => i.band === it.band).length;
    counters[it.band] = (counters[it.band] ?? 0) + 1;
    answers[it.id] = counters[it.band] <= Math.round(share * bandItems) ? it.answer : (it.answer + 1) % it.options.length;
  }
  return answers;
}

describe('placement scoring', () => {
  it('beginner starts at B1 unit 1', () => {
    const r = scorePlacement(placementItems, answersFor({ A2: 0.4 }));
    expect(r.estimated).toBe('A2');
    expect(r.recommendedUnitId).toBe('b1-01');
  });
  it('solid B1 starts at B2', () => {
    const r = scorePlacement(placementItems, answersFor({ A2: 1, B1: 0.9, B2: 0.5 }));
    expect(r.estimated).toBe('B1');
    expect(r.recommendedUnitId).toBe('b2-01');
  });
  it('solid B2 starts at C1', () => {
    const r = scorePlacement(placementItems, answersFor({ A2: 1, B1: 1, B2: 0.8, C1: 0.4 }));
    expect(r.estimated).toBe('B2');
    expect(r.recommendedUnitId).toBe('c1-01');
  });
});
