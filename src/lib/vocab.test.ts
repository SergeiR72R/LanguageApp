import { describe, expect, it } from 'vitest';
import { pluralForm } from './vocab';

const n = (de: string, plural: string) => ({ de, plural, pos: 'noun' as const, article: 'der' as const, ru: '', example: '', exampleRu: '' });

describe('pluralForm', () => {
  it('handles suffix and umlaut notations', () => {
    expect(pluralForm(n('Lebenslauf', '-¨e'))).toBe('die Lebensläufe');
    expect(pluralForm(n('Bewerbung', '-en'))).toBe('die Bewerbungen');
    expect(pluralForm(n('Lehrer', '-'))).toBe('die Lehrer');
    expect(pluralForm(n('Vertrag', '-¨e'))).toBe('die Verträge');
    expect(pluralForm(n('Mutter', '-¨'))).toBe('die Mütter');
    expect(pluralForm(n('Haus', '-¨er'))).toBe('die Häuser');
    expect(pluralForm(n('Wissen', '–'))).toBe('нет мн. ч.');
    expect(pluralForm(n('Gehalt', '-¨er'))).toBe('die Gehälter');
  });
});
