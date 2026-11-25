import { describe, expect, it } from 'vitest';
import { hasDoubledWord, structuralProblem } from './exerciseCheck';

describe('AI exercise checks', () => {
  it('rejects a key that repeats the word after the gap', () => {
    const ex = { type: 'choice' as const, prompt: 'Er ___ sich gestern auf die Stelle beworben.', options: ['hatte', 'hat', 'hatte sich', 'hat sich'], answer: 3, explanationRu: '' };
    expect(structuralProblem(ex)).toBeTruthy();
    expect(structuralProblem({ ...ex, answer: 1 })).toBeNull();
  });
  it('detects doubled words', () => {
    expect(hasDoubledWord('Er hat sich sich beworben.')).toBe(true);
    expect(hasDoubledWord('Er hat sich beworben.')).toBe(false);
  });
  it('rejects duplicate options', () => {
    expect(structuralProblem({ type: 'choice', prompt: 'X ___', options: ['a', 'A', 'b'], answer: 0, explanationRu: '' })).toBeTruthy();
  });
});
