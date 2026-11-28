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

import { parseAzure, tipFor } from './pronunciation';

// shape of a real Azure response (REST, format=detailed, de-DE)
const sample = {
  RecognitionStatus: 'Success',
  DisplayText: 'Ich möchte heute.',
  NBest: [
    {
      Display: 'Ich möchte heute.',
      AccuracyScore: 81,
      FluencyScore: 90,
      CompletenessScore: 100,
      PronScore: 86.4,
      Words: [
        { Word: 'Ich', AccuracyScore: 100, ErrorType: 'None', Syllables: [{ Syllable: '', Grapheme: 'ich', AccuracyScore: 100 }] },
        { Word: 'möchte', AccuracyScore: 52, ErrorType: 'Mispronunciation', Syllables: [{ Grapheme: 'möch', AccuracyScore: 40 }, { Grapheme: 'te', AccuracyScore: 90 }] },
        { Word: 'heute', AccuracyScore: 0, ErrorType: 'Omission' },
      ],
    },
  ],
};

it('reads scores per sentence, word and syllable', () => {
  const r = parseAzure(sample);
  expect([r.pron, r.accuracy, r.fluency, r.completeness]).toEqual([86.4, 81, 90, 100]);
  expect(r.words[1]).toEqual({ word: 'möchte', accuracy: 52, error: 'Mispronunciation', syllables: [{ grapheme: 'möch', accuracy: 40 }, { grapheme: 'te', accuracy: 90 }] });
  expect(r.words[2].error).toBe('Omission');
});

it('explains silence instead of failing silently', () => {
  expect(() => parseAzure({ RecognitionStatus: 'NoMatch' })).toThrow(/не услышана/);
});

it('gives a hint for the tricky German sound', () => {
  expect(tipFor('möchte', 'möch')).toMatch(/^ö:/);
  expect(tipFor('eine', 'ne')).toMatch(/ei\/ai/);
  expect(tipFor('gemacht', 'macht')).toMatch(/твёрдое «х»/);
  expect(tipFor('ich')).toMatch(/мягкое «хь»/);
});
