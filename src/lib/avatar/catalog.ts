/**
 * Avatar: looks (body, face, hair) and a wardrobe whose items unlock with experience from the daily tasks.
 * Everything is drawn as SVG in components/Avatar.tsx from these descriptions.
 */

export type Gender = 'f' | 'm';
export type Build = 'slim' | 'average' | 'athletic' | 'full';

export interface Look {
  gender: Gender;
  build: Build;
  skin: string;
  hair: string;
  hairColor: string;
  eyes: string;
  eyeColor: string;
  brows: string;
  nose: string;
  mouth: string;
  lips: string;
  beard: string;
  freckles: boolean;
  blush: boolean;
}

export type Slot = 'top' | 'bottom' | 'shoes' | 'hat' | 'outer' | 'acc' | 'neck' | 'bg';

export interface Item {
  id: string;
  slot: Slot;
  template: string;
  name: string;
  color: string;
  accent: string;
  pattern: string;
  rarity: 0 | 1 | 2 | 3;
}

export interface AvatarState {
  look: Look;
  equipped: Partial<Record<Slot, string | null>>;
  /** how many items per slot the learner has already been told about */
  seen?: Partial<Record<Slot, number>>;
}

// ---------------------------------------------------------------- looks

export const SKIN = ['#ffe3d3', '#f9d4bb', '#efc09c', '#dca47f', '#c48964', '#a06a46', '#7d4d31', '#5b3623'];
export const HAIR_COLORS: { id: string; ru: string }[] = [
  { id: '#2b2220', ru: 'чёрные' },
  { id: '#4a2f23', ru: 'тёмно-каштановые' },
  { id: '#7a4a2a', ru: 'каштановые' },
  { id: '#a0522d', ru: 'рыжевато-каштановые' },
  { id: '#c4622d', ru: 'рыжие' },
  { id: '#d9b062', ru: 'русые' },
  { id: '#efd894', ru: 'светлые' },
  { id: '#9a9a9a', ru: 'седые' },
  { id: '#e9e9e9', ru: 'белые' },
  { id: '#3b6fd8', ru: 'синие' },
  { id: '#e07ab8', ru: 'розовые' },
  { id: '#7b4fc4', ru: 'фиолетовые' },
  { id: '#3d9b6a', ru: 'зелёные' },
];
export const EYE_COLORS = ['#6b4226', '#3e2716', '#8a6d3b', '#4f8a4b', '#3f7cc7', '#7d8b99', '#b7791f'];
export const LIP_COLORS: { id: string; ru: string }[] = [
  { id: 'natural', ru: 'естественные' },
  { id: '#e58a9a', ru: 'розовые' },
  { id: '#c9374a', ru: 'красные' },
  { id: '#8e2e52', ru: 'ягодные' },
  { id: '#c98c6d', ru: 'нюд' },
];

export const BUILDS: { id: Build; ru: string }[] = [
  { id: 'slim', ru: 'худощавое' },
  { id: 'average', ru: 'среднее' },
  { id: 'athletic', ru: 'спортивное' },
  { id: 'full', ru: 'плотное' },
];

export const HAIR_STYLES: { id: string; ru: string }[] = [
  { id: 'short', ru: 'короткая' },
  { id: 'buzz', ru: 'ёжик' },
  { id: 'side', ru: 'на бок' },
  { id: 'quiff', ru: 'кок' },
  { id: 'curly', ru: 'кудри' },
  { id: 'afro', ru: 'афро' },
  { id: 'mohawk', ru: 'ирокез' },
  { id: 'bald', ru: 'без волос' },
  { id: 'long', ru: 'длинные' },
  { id: 'wavy', ru: 'волнистые' },
  { id: 'bangs', ru: 'с чёлкой' },
  { id: 'bob', ru: 'каре' },
  { id: 'ponytail', ru: 'хвост' },
  { id: 'bun', ru: 'пучок' },
  { id: 'pigtails', ru: 'два хвостика' },
  { id: 'braid', ru: 'коса' },
];
export const EYES: { id: string; ru: string }[] = [
  { id: 'round', ru: 'круглые' },
  { id: 'almond', ru: 'миндалевидные' },
  { id: 'lashes', ru: 'с ресницами' },
  { id: 'dot', ru: 'точки' },
  { id: 'happy', ru: 'улыбающиеся' },
  { id: 'sleepy', ru: 'сонные' },
];
export const BROWS: { id: string; ru: string }[] = [
  { id: 'arc', ru: 'дугой' },
  { id: 'straight', ru: 'прямые' },
  { id: 'thick', ru: 'густые' },
  { id: 'thin', ru: 'тонкие' },
  { id: 'angled', ru: 'с изломом' },
];
export const NOSES: { id: string; ru: string }[] = [
  { id: 'button', ru: 'кнопка' },
  { id: 'line', ru: 'прямой' },
  { id: 'round', ru: 'круглый' },
  { id: 'dots', ru: 'маленький' },
];
export const MOUTHS: { id: string; ru: string }[] = [
  { id: 'smile', ru: 'улыбка' },
  { id: 'grin', ru: 'широкая улыбка' },
  { id: 'small', ru: 'маленький' },
  { id: 'laugh', ru: 'смех' },
  { id: 'neutral', ru: 'спокойный' },
  { id: 'smirk', ru: 'ухмылка' },
  { id: 'full', ru: 'пухлые губы' },
];
export const BEARDS: { id: string; ru: string }[] = [
  { id: 'none', ru: 'нет' },
  { id: 'stubble', ru: 'щетина' },
  { id: 'mustache', ru: 'усы' },
  { id: 'goatee', ru: 'бородка' },
  { id: 'full', ru: 'борода' },
  { id: 'chin', ru: 'шкиперская' },
];

export function defaultLook(gender: Gender = 'f'): Look {
  return gender === 'f'
    ? { gender, build: 'average', skin: SKIN[1], hair: 'long', hairColor: '#7a4a2a', eyes: 'lashes', eyeColor: EYE_COLORS[4], brows: 'arc', nose: 'button', mouth: 'smile', lips: '#e58a9a', beard: 'none', freckles: false, blush: true }
    : { gender, build: 'average', skin: SKIN[1], hair: 'side', hairColor: '#4a2f23', eyes: 'round', eyeColor: EYE_COLORS[0], brows: 'straight', nose: 'line', mouth: 'smile', lips: 'natural', beard: 'stubble', freckles: false, blush: false };
}

// ---------------------------------------------------------------- wardrobe

export interface SlotInfo {
  slot: Slot;
  ru: string;
  icon: string;
  /** the daily task that fills this category */
  task: string;
  taskIcon: string;
  link: string;
  /** optional slots can be left empty */
  optional: boolean;
}

export const SLOTS: SlotInfo[] = [
  { slot: 'top', ru: 'Верх: футболки, рубашки, свитера', icon: '👕', task: 'Повторение', taskIcon: '🔁', link: '/review', optional: false },
  { slot: 'bottom', ru: 'Низ: брюки, джинсы, юбки', icon: '👖', task: 'Шаги курса', taskIcon: '🗺️', link: '/', optional: false },
  { slot: 'shoes', ru: 'Обувь', icon: '👟', task: 'Слова дня', taskIcon: '🆕', link: '/words', optional: false },
  { slot: 'hat', ru: 'Головные уборы', icon: '🧢', task: 'Глаголы', taskIcon: '🔗', link: '/verbs', optional: true },
  { slot: 'outer', ru: 'Верхняя одежда', icon: '🧥', task: 'Разговор и письмо', taskIcon: '🗣️', link: '/speak', optional: true },
  { slot: 'acc', ru: 'Очки и аксессуары', icon: '👓', task: 'Работа над ошибками', taskIcon: '📕', link: '/mistakes', optional: true },
  { slot: 'neck', ru: 'Шарфы, галстуки, украшения', icon: '🧣', task: 'Контрольные', taskIcon: '🧠', link: '/', optional: true },
  { slot: 'bg', ru: 'Фоны', icon: '🏞️', task: 'Пробные экзамены', taskIcon: '🎓', link: '/exams', optional: true },
];
export const slotInfo = (s: Slot) => SLOTS.find((x) => x.slot === s)!;

/** grammatical gender of the Russian name, for colour adjectives: m, f, n or plural */
type Gram = 'm' | 'f' | 'n' | 'p';

interface Template {
  id: string;
  ru: string;
  g: 'u' | Gender;
  gram: Gram;
}

const T = (id: string, ru: string, gram: Gram, g: 'u' | Gender = 'u'): Template => ({ id, ru, g, gram });

/** "синий" → "синяя / синее / синие", "золотой" → "золотая …", "космический" → "космическая …" */
export function agree(adj: string, gram: Gram): string {
  if (gram === 'm') return adj;
  const ends = { f: 0, n: 1, p: 2 }[gram];
  if (/[кгх]ий$/.test(adj)) return adj.slice(0, -2) + ['ая', 'ое', 'ие'][ends];
  if (/ний$/.test(adj)) return adj.slice(0, -2) + ['яя', 'ее', 'ие'][ends];
  if (/(ый|ой)$/.test(adj)) return adj.slice(0, -2) + ['ая', 'ое', 'ые'][ends];
  return adj;
}

export const TEMPLATES: Record<Slot, Template[]> = {
  top: [
    T('tee', 'Футболка', 'f'),
    T('tank', 'Майка', 'f'),
    T('longsleeve', 'Лонгслив', 'm'),
    T('vneck', 'Футболка с V-вырезом', 'f'),
    T('polo', 'Поло', 'n'),
    T('shirt', 'Рубашка', 'f'),
    T('sweater', 'Свитер', 'm'),
    T('turtleneck', 'Водолазка', 'f'),
    T('blouse', 'Блузка', 'f', 'f'),
    T('dress', 'Платье', 'n', 'f'),
    T('henley', 'Хенли', 'm', 'm'),
  ],
  bottom: [
    T('trousers', 'Брюки', 'p'),
    T('jeans', 'Джинсы', 'p'),
    T('shorts', 'Шорты', 'p'),
    T('joggers', 'Спортивные штаны', 'p'),
    T('cargo', 'Брюки карго', 'p'),
    T('skirt', 'Юбка', 'f', 'f'),
    T('longskirt', 'Длинная юбка', 'f', 'f'),
    T('leggings', 'Леггинсы', 'p', 'f'),
    T('chinos', 'Чиносы', 'p', 'm'),
  ],
  shoes: [
    T('sneakers', 'Кроссовки', 'p'),
    T('hightops', 'Высокие кеды', 'p'),
    T('boots', 'Ботинки', 'p'),
    T('loafers', 'Лоферы', 'p'),
    T('sandals', 'Сандалии', 'p'),
    T('rainboots', 'Резиновые сапоги', 'p'),
    T('heels', 'Туфли на каблуке', 'p', 'f'),
    T('flats', 'Балетки', 'p', 'f'),
    T('oxfords', 'Оксфорды', 'p', 'm'),
  ],
  hat: [
    T('cap', 'Кепка', 'f'),
    T('beanie', 'Шапка', 'f'),
    T('bucket', 'Панама', 'f'),
    T('fedora', 'Шляпа', 'f'),
    T('beret', 'Берет', 'm'),
    T('cowboy', 'Ковбойская шляпа', 'f'),
    T('tophat', 'Цилиндр', 'm'),
    T('wizard', 'Колпак волшебника', 'm'),
    T('headband', 'Ободок', 'm', 'f'),
    T('flowers', 'Венок', 'm', 'f'),
    T('bow', 'Бант', 'm', 'f'),
    T('crown', 'Корона', 'f'),
  ],
  outer: [
    T('hoodie', 'Худи', 'n'),
    T('jacket', 'Куртка', 'f'),
    T('blazer', 'Пиджак', 'm'),
    T('coat', 'Пальто', 'n'),
    T('puffer', 'Пуховик', 'm'),
    T('cardigan', 'Кардиган', 'm'),
    T('leather', 'Косуха', 'f'),
    T('vest', 'Жилет', 'm'),
    T('raincoat', 'Дождевик', 'm'),
  ],
  acc: [
    T('round', 'Круглые очки', 'p'),
    T('square', 'Квадратные очки', 'p'),
    T('sunglasses', 'Солнечные очки', 'p'),
    T('aviators', 'Очки-авиаторы', 'p'),
    T('cateye', 'Очки «кошачий глаз»', 'p', 'f'),
    T('hoops', 'Серьги-кольца', 'p', 'f'),
    T('studs', 'Серьги-гвоздики', 'p'),
    T('headphones', 'Наушники', 'p'),
    T('monocle', 'Монокль', 'm'),
  ],
  neck: [
    T('scarf', 'Шарф', 'm'),
    T('tie', 'Галстук', 'm'),
    T('bowtie', 'Бабочка', 'f'),
    T('bandana', 'Бандана', 'f'),
    T('chain', 'Цепочка', 'f'),
    T('medal', 'Медаль', 'f'),
    T('necklace', 'Кулон', 'm', 'f'),
    T('pearls', 'Жемчужное ожерелье', 'n', 'f'),
  ],
  bg: [
    T('sky', 'Небо', 'n'),
    T('sunset', 'Закат', 'm'),
    T('city', 'Берлин', 'm'),
    T('gate', 'Бранденбургские ворота', 'p'),
    T('mountains', 'Альпы', 'p'),
    T('sea', 'Море', 'n'),
    T('forest', 'Лес', 'm'),
    T('night', 'Звёздная ночь', 'f'),
    T('castle', 'Замок', 'm'),
    T('library', 'Библиотека', 'f'),
    T('stage', 'Сцена', 'f'),
    T('space', 'Космос', 'm'),
  ],
};

export const COLORS: { id: string; ru: string }[] = [
  { id: '#f5f5f4', ru: 'белый' },
  { id: '#374151', ru: 'графитовый' },
  { id: '#1e3a8a', ru: 'тёмно-синий' },
  { id: '#2563eb', ru: 'синий' },
  { id: '#dc2626', ru: 'красный' },
  { id: '#16a34a', ru: 'зелёный' },
  { id: '#9ca3af', ru: 'серый' },
  { id: '#facc15', ru: 'жёлтый' },
  { id: '#f97316', ru: 'оранжевый' },
  { id: '#ec4899', ru: 'розовый' },
  { id: '#7c3aed', ru: 'фиолетовый' },
  { id: '#0d9488', ru: 'бирюзовый' },
  { id: '#92400e', ru: 'коричневый' },
  { id: '#be123c', ru: 'бордовый' },
  { id: '#65a30d', ru: 'оливковый' },
  { id: '#38bdf8', ru: 'голубой' },
  { id: '#f9a8d4', ru: 'пудровый' },
  { id: '#d6b88a', ru: 'бежевый' },
];
const SPECIAL: { id: string; ru: string }[] = [
  { id: '#d4a017', ru: 'золотой' },
  { id: '#c0c7d0', ru: 'серебряный' },
  { id: 'rainbow', ru: 'радужный' },
  { id: 'galaxy', ru: 'космический' },
];

export const PATTERNS: { id: string; ru: string }[] = [
  { id: 'solid', ru: '' },
  { id: 'stripes', ru: 'в полоску' },
  { id: 'dots', ru: 'в горошек' },
  { id: 'checks', ru: 'в клетку' },
  { id: 'diagonal', ru: 'в диагональную полоску' },
  { id: 'zigzag', ru: 'с зигзагом' },
  { id: 'stars', ru: 'со звёздами' },
  { id: 'floral', ru: 'в цветочек' },
  { id: 'hearts', ru: 'с сердечками' },
  { id: 'camo', ru: 'в камуфляжной расцветке' },
];

/** Patterns don't suit every item */
const PLAIN_ONLY = new Set(['acc', 'bg', 'shoes', 'hat']);
const ITEMS_PER_GENDER: Record<Slot, number> = { top: 34, bottom: 32, shoes: 30, hat: 30, outer: 32, acc: 26, neck: 26, bg: 26 };

function shade(hex: string, amt: number): string {
  if (!hex.startsWith('#')) return hex;
  const n = parseInt(hex.slice(1), 16);
  const f = (c: number) => Math.max(0, Math.min(255, Math.round(c + (amt > 0 ? (255 - c) * amt : c * amt))));
  const r = f(n >> 16);
  const g = f((n >> 8) & 255);
  const b = f(n & 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
export { shade };

function accentFor(color: string, k: number): string {
  if (!color.startsWith('#')) return '#ffffff';
  const light = parseInt(color.slice(1, 3), 16) + parseInt(color.slice(3, 5), 16) + parseInt(color.slice(5, 7), 16) > 520;
  const options = light ? ['#1e3a8a', '#dc2626', '#374151', '#16a34a'] : ['#ffffff', '#facc15', '#f9a8d4', '#38bdf8'];
  return options[k % options.length];
}

/**
 * The wardrobe of one slot for one gender, in unlock order:
 * plain basics first, then colours and patterns, the last ones in gold, silver, rainbow and "galaxy".
 */
function buildSlot(slot: Slot, gender: Gender): Item[] {
  const templates = TEMPLATES[slot].filter((t) => t.g === 'u' || t.g === gender);
  const n = ITEMS_PER_GENDER[slot];
  const items: Item[] = [];
  const seen = new Set<string>();
  const plain = PLAIN_ONLY.has(slot);
  let i = 0;
  let guard = 0;
  while (items.length < n && guard++ < 5000) {
    const pos = items.length;
    const rarity: Item['rarity'] = pos < n * 0.35 ? 0 : pos < n * 0.65 ? 1 : pos < n * 0.88 ? 2 : 3;
    const t = templates[(i * 5 + Math.floor(i / templates.length)) % templates.length];
    let color: { id: string; ru: string };
    let pattern = PATTERNS[0];
    if (rarity === 3) color = SPECIAL[(i + pos) % SPECIAL.length];
    else {
      const palette = rarity === 0 ? COLORS.slice(0, 8) : COLORS;
      color = palette[(i * 7 + 3) % palette.length];
      if (!plain && rarity >= 1 && (i % 3 !== 0 || rarity === 2)) pattern = PATTERNS[1 + ((i * 3 + pos) % (PATTERNS.length - 1))];
    }
    // backgrounds have their own palette; hats/accessories/shoes: plain colours only
    if (slot === 'bg' && rarity < 3) color = COLORS[(i * 5 + 2) % COLORS.length];
    // the very first item of each slot is a plain basic
    if (pos === 0) {
      color = slot === 'bottom' ? COLORS[2] : slot === 'top' ? COLORS[0] : slot === 'shoes' ? COLORS[0] : slot === 'bg' ? COLORS[15] : COLORS[1];
      pattern = PATTERNS[0];
    }
    const key = `${t.id}:${pattern.id}:${color.id}`;
    i++;
    if (seen.has(key)) continue;
    // early items should mostly be different cuts, not the same cut in a new colour
    if (pos < templates.length && items.some((x) => x.template === t.id)) continue;
    seen.add(key);
    // backgrounds: the colour only matters when the same scene comes again
    const colorName = slot === 'bg' && !items.some((x) => x.template === t.id) && rarity < 3 ? '' : agree(color.ru, t.gram);
    const name = [t.ru, colorName, pattern.ru].filter(Boolean).join(', ');
    items.push({
      id: `${slot}:${t.id}:${pattern.id}:${color.id.replace('#', '')}`,
      slot,
      template: t.id,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      color: color.id,
      accent: accentFor(color.id, i),
      pattern: pattern.id,
      rarity,
    });
  }
  return items;
}

const cache = new Map<string, Item[]>();
export function wardrobe(slot: Slot, gender: Gender): Item[] {
  const k = `${slot}:${gender}`;
  if (!cache.has(k)) cache.set(k, buildSlot(slot, gender));
  return cache.get(k)!;
}

const byId = new Map<string, Item>();
export function getItem(id: string | null | undefined): Item | undefined {
  if (!id) return undefined;
  if (!byId.size) for (const s of SLOTS) for (const g of ['f', 'm'] as const) for (const it of wardrobe(s.slot, g)) byId.set(it.id, it);
  return byId.get(id);
}

export const RARITY: { ru: string; cls: string }[] = [
  { ru: 'обычная', cls: 'r0' },
  { ru: 'редкая', cls: 'r1' },
  { ru: 'эпическая', cls: 'r2' },
  { ru: 'легендарная', cls: 'r3' },
];

// ---------------------------------------------------------------- experience

/** XP needed for the k-th item of a slot (the first one is free). */
export function threshold(k: number): number {
  return k <= 0 ? 0 : Math.round((40 * Math.pow(k, 1.35)) / 10) * 10;
}

export interface XpSource {
  activity: Record<string, { reviews?: number; stepsDone?: number; bankWords?: number; newVerbs?: number; spokenTurns?: number; wordsWritten?: number; drills?: number }>;
  consolidations: unknown[];
  examResults: unknown[];
}

/** Experience per wardrobe category, computed from the learner's whole history (so past work counts too). */
export function slotXp(s: XpSource): Record<Slot, number> {
  const sum = (k: 'reviews' | 'stepsDone' | 'bankWords' | 'newVerbs' | 'spokenTurns' | 'wordsWritten' | 'drills') =>
    Object.values(s.activity ?? {}).reduce((a, d) => a + (d?.[k] ?? 0), 0);
  return {
    top: sum('reviews'),
    bottom: sum('stepsDone') * 15,
    shoes: sum('bankWords') * 3,
    hat: sum('newVerbs') * 8,
    outer: sum('spokenTurns') * 6 + Math.floor(sum('wordsWritten') / 4),
    acc: sum('drills') * 40,
    neck: (s.consolidations?.length ?? 0) * 120,
    bg: (s.examResults?.length ?? 0) * 60,
  };
}

/** What one unit of work gives, shown in the UI */
export const XP_RULE: Record<Slot, string> = {
  top: '+1 за каждую карточку в повторении',
  bottom: '+15 за каждый пройденный шаг юнита',
  shoes: '+3 за каждое новое слово дня',
  hat: '+8 за каждый новый глагол',
  outer: '+6 за реплику в разговоре, +1 за 4 слова в письме',
  acc: '+40 за тренировку ошибок',
  neck: '+120 за контрольную',
  bg: '+60 за модуль пробного экзамена',
};

export function unlockedCount(slot: Slot, gender: Gender, xp: number): number {
  const list = wardrobe(slot, gender);
  let k = 0;
  while (k < list.length && threshold(k) <= xp) k++;
  return k;
}

/** Basic clothes everyone starts with */
export function starterEquipped(gender: Gender): AvatarState['equipped'] {
  return { top: wardrobe('top', gender)[0].id, bottom: wardrobe('bottom', gender)[0].id, shoes: wardrobe('shoes', gender)[0].id };
}

/** Equipped items that exist and are unlocked for this gender; required slots fall back to the basics. */
export function validEquipped(a: AvatarState, xp: Record<Slot, number>): AvatarState['equipped'] {
  const out: AvatarState['equipped'] = {};
  for (const s of SLOTS) {
    const list = wardrobe(s.slot, a.look.gender);
    const open = list.slice(0, unlockedCount(s.slot, a.look.gender, xp[s.slot]));
    const cur = a.equipped[s.slot];
    if (cur && open.some((x) => x.id === cur)) out[s.slot] = cur;
    else if (!s.optional) out[s.slot] = list[0].id;
  }
  return out;
}

