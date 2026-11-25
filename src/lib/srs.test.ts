import { describe, expect, it } from 'vitest';
import { newSrs, schedule } from './srs';
import { checkAnswer, wordDiff } from './grading';

describe('srs', () => {
  it('grows intervals on good answers and resets on lapse', () => {
    let s = newSrs('2026-01-01');
    s = schedule(s, 2, '2026-01-01');
    expect(s.interval).toBe(1);
    expect(s.due).toBe('2026-01-02');
    s = schedule(s, 2, '2026-01-02');
    expect(s.interval).toBe(3);
    s = schedule(s, 2, '2026-01-05');
    expect(s.interval).toBe(8);
    s = schedule(s, 0, '2026-01-13');
    expect(s.interval).toBe(1);
    expect(s.lapses).toBe(1);
  });
});

describe('grading', () => {
  it('is lenient with case and punctuation', () => {
    expect(checkAnswer('Das Haus wurde gebaut', ['Das Haus wurde gebaut.'])).toBe('correct');
    expect(checkAnswer('  dem ', ['dem'])).toBe('correct');
  });
  it('detects spelling-only differences', () => {
    expect(checkAnswer('Strasse', ['Straße'])).toBe('almost');
    expect(checkAnswer('schoen', ['schön'])).toBe('almost');
    expect(checkAnswer('den', ['dem'])).toBe('wrong');
  });
  it('diffs words', () => {
    const d = wordDiff('Ich möchte gern ein Brötchen.', 'ich möchte ein brötchen');
    expect(d.accuracy).toBeCloseTo(0.8);
    expect(d.tokens.find((t) => t.word === 'gern')?.status).toBe('missing');
  });
});
