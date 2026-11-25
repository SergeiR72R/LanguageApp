import type { VocabItem } from '../content/types';

/** File name (without extension) of a word's picture: "Lebenslauf" → "lebenslauf", "sich bewerben" → "sich-bewerben". */
export function wordSlug(de: string): string {
  return de
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Pictures live in src/assets/words/<slug>.(webp|png|jpg) – only files that exist are bundled.
const files = import.meta.glob<string>('../assets/words/*.{webp,png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' });
const bySlug = new Map<string, string>(
  Object.entries(files).map(([path, url]) => [path.split('/').pop()!.replace(/\.(webp|png|jpe?g)$/i, ''), url]),
);

export function wordImage(v: VocabItem): string | undefined {
  return bySlug.get(wordSlug(v.de));
}

export const wordImageCount = () => bySlug.size;
