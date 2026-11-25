/**
 * Self-contained prompt files for Claude in Chrome + Google Flow (instructions + word data inside).
 * Run: npx vite-node tools/export-prompts.ts
 */
import { existsSync, writeFileSync } from 'node:fs';
import { allUnits, wordBank } from '../src/content';
import { wordSlug } from '../src/lib/images';
import type { VocabItem } from '../src/content/types';

const STYLE =
  'Style: cheerful flat vector illustration with soft shading, rounded shapes, warm pastel colors, plain light background, single clear focal subject, centered composition, friendly characters, uncluttered. Absolutely no text, no letters, no numbers, no captions, no watermarks.';

const instructions = (title: string, count: number) => `# ${title}

Ты работаешь в Chrome во вкладке Google Flow (я уже вошёл). Задача — сгенерировать иллюстрации для карточек немецких слов и скачать их. Все данные ниже, ничего открывать не нужно.

## Как работать
1. Иди по списку сверху вниз (всего ${count} слов). Делай пачками по 20 слов; после каждой пачки — короткий отчёт: номера готовых и пропущенных (с причиной). Затем продолжай без ожидания, если я не сказал остановиться.
2. Для каждого слова придумай по-английски описание сцены (1–2 предложения), которое однозначно показывает значение (смотри перевод и пример):
   - предмет → один предмет крупно по центру;
   - глагол → человек выполняет действие;
   - прилагательное/наречие → сцена, где свойство очевидно;
   - абстрактное слово/выражение → простая символическая сцена с 1–2 персонажами, понятная без текста;
   - по возможности немецкая обстановка (город, квартира, офис, природа Германии).
3. Во Flow выбери создание ИЗОБРАЖЕНИЯ (не видео), формат 1:1, один вариант. Промпт:
   "<описание сцены>. ${STYLE}"
4. Если на картинке появился текст/буквы или смысл неочевиден — перегенерируй с уточнённым описанием (максимум 2 попытки), иначе пропусти слово.
5. Скачай картинку и назови файл ТОЧНО как в первой колонке (например \`lebenslauf.png\`). Файлы пусть попадают в «Загрузки».
6. Если кончились кредиты Flow, появилась капча или ошибка — остановись и напиши, на каком номере остановился.

## Слова
Формат строки: № | имя файла | немецкое слово | перевод | пример
`;

function lines(items: { v: VocabItem; unit: string }[]): string {
  return items
    .map(({ v }, i) => `${i + 1} | ${wordSlug(v.de)}.png | ${v.article ? `${v.article} ${v.de}` : v.de} | ${v.ru} | ${v.example}`)
    .join('\n');
}

const hasPicture = (v: VocabItem) => ['webp', 'png', 'jpg'].some((e) => existsSync(`src/assets/words/${wordSlug(v.de)}.${e}`));

const seen = new Set<string>();
const take = (list: { v: VocabItem; unit: string }[]) =>
  list.filter(({ v }) => {
    const k = wordSlug(v.de);
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  });

// 1) all core words of the course in one file
const core = take(allUnits.flatMap((u) => u.vocab.map((v) => ({ v, unit: u.id }))));
writeFileSync('tools/word-images/CLAUDE_CHROME_1_core_words.md', instructions('Картинки для основных слов курса (B1–C1)', core.length) + '\n' + lines(core) + '\n');
console.log('core', core.length);

// 1b) core words that still have no picture in src/assets/words
const missing = core.filter(({ v }) => !hasPicture(v));
writeFileSync('tools/word-images/CLAUDE_CHROME_0_missing_core.md', instructions('Картинки: недостающие основные слова', missing.length) + '\n' + lines(missing) + '\n');
console.log('missing core', missing.length);

// 2) word banks per level, split into parts of ~500 words
for (const level of ['B1', 'B2', 'C1'] as const) {
  // only words that still have no picture
  const bank = take(allUnits.filter((u) => u.level === level).flatMap((u) => wordBank(u.id).map((v) => ({ v, unit: u.id })))).filter(
    ({ v }) => !hasPicture(v),
  );
  const size = 500;
  for (let i = 0; i * size < bank.length; i++) {
    const part = bank.slice(i * size, (i + 1) * size);
    const name = `tools/word-images/CLAUDE_CHROME_2_${level}_bank_part${i + 1}.md`;
    // stale parts from earlier runs are removed below
    writeFileSync(name, instructions(`Картинки: словарь ${level}, часть ${i + 1}`, part.length) + '\n' + lines(part) + '\n');
    console.log(name, part.length);
  }
}
