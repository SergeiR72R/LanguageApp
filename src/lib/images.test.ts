import { expect, it } from 'vitest';
import { wordSlug } from './images';

it('builds file-name slugs', () => {
  expect(wordSlug('Lebenslauf')).toBe('lebenslauf');
  expect(wordSlug('sich bewerben')).toBe('sich-bewerben');
  expect(wordSlug('Größe')).toBe('groesse');
  expect(wordSlug('auf jeden Fall')).toBe('auf-jeden-fall');
});
