import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-07',
  level: 'A1',
  order: 7,
  title: 'Wohnen',
  titleRu: 'Мой дом, моя квартира',
  goalsRu: [
    'Называть комнаты и мебель — сразу с артиклем',
    'Понимать, когда говорят der/die/das, а когда ein/eine',
    'Говорить «нет» с помощью kein/keine и nicht',
    'Описывать свою квартиру простыми предложениями',
  ],
  grammar: {
    topic: 'Artikel: der, die, das – ein, eine – kein, nicht',
    topicRu: 'Артикли der/die/das и ein/eine; отрицание kein и nicht',
    explanationRu: `**Артикль** — это маленькое слово перед существительным. В русском языке артиклей нет, поэтому их легко забыть. Но в немецком почти каждое существительное стоит с артиклем.

**1. Род: der, die, das.** В немецком, как и в русском, три рода:

- **der** — мужской род: der Tisch, der Stuhl
- **die** — женский род: die Lampe, die Küche
- **das** — средний род: das Bett, das Zimmer

Внимание: род часто **не совпадает** с русским! **das** Bett — а «кровать» женского рода. **das** Sofa — а «диван» мужского рода. Поэтому учите каждое слово **сразу с артиклем**: не «Tisch», а «der Tisch».

**2. ein / eine** — неопределённый артикль («какой-то, один»). Его говорят, когда предмет называют **впервые**:

- der Tisch → **ein** Tisch
- das Bett → **ein** Bett
- die Lampe → **eine** Lampe

Сначала ein/eine, потом der/die/das: «Das ist **ein** Sofa. **Das** Sofa ist neu.» — «Это диван. (Этот) диван новый».

**3. Отрицание: kein или nicht?**

- **kein / keine** стоит перед существительным вместо ein/eine (или когда артикля нет): Das ist **kein** Tisch. Das ist **keine** Lampe.
- **nicht** отрицает всё остальное: прилагательное, глагол, слово с der/die/das или mein: Das Zimmer ist **nicht** groß. Das ist **nicht** mein Stuhl.

**4. er, sie, es.** Вместо существительного говорим местоимение **того же рода**: der Tisch → **er**, die Küche → **sie**, das Bett → **es**. «Wo ist das Bett? — **Es** ist hier.» (Не «sie», хотя по-русски «она»!)

**Типичные ошибки:**

- забывают артикль: не «Das ist Tisch», а «Das ist **ein** Tisch»;
- «Das ist nicht Lampe» → правильно: «Das ist **keine** Lampe»;
- «eine Bett» → правильно: «**ein** Bett» (eine — только для слов с die).`,
    table: [
      ['', 'мужской (der)', 'женский (die)', 'средний (das)'],
      ['определённый', 'der Tisch', 'die Lampe', 'das Bett'],
      ['неопределённый', 'ein Tisch', 'eine Lampe', 'ein Bett'],
      ['отрицание', 'kein Tisch', 'keine Lampe', 'kein Bett'],
      ['местоимение', 'er', 'sie', 'es'],
    ],
    examples: [
      { de: 'Das ist ein Tisch. Der Tisch ist neu.', ru: 'Это стол. Стол новый.' },
      { de: 'Das ist eine Küche. Sie ist klein.', ru: 'Это кухня. Она маленькая.' },
      { de: 'Ist das ein Sofa? – Nein, das ist kein Sofa. Das ist ein Bett.', ru: 'Это диван? — Нет, это не диван. Это кровать.' },
      { de: 'Das Zimmer ist nicht groß.', ru: 'Комната небольшая (не большая).' },
      { de: 'Das ist nicht meine Lampe.', ru: 'Это не моя лампа.' },
      { de: 'Wo ist der Schrank? – Er ist hier.', ru: 'Где шкаф? — Он здесь.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ Tisch ist neu.',
        options: ['Der', 'Die', 'Das'],
        answer: 0,
        explanationRu: 'Tisch — мужской род: der Tisch. Учите слово сразу с артиклем.',
      },
      {
        type: 'choice',
        prompt: 'Das ist ___ Bett.',
        options: ['ein', 'eine', 'der'],
        answer: 0,
        explanationRu: 'Bett — средний род (das Bett), поэтому ein Bett. eine — только для слов с die.',
      },
      {
        type: 'gap',
        prompt: 'Das ist ___ Lampe. Die Lampe ist neu.',
        answers: ['eine'],
        hintRu: 'ein или eine?',
        explanationRu: 'die Lampe — женский род, поэтому неопределённый артикль eine.',
      },
      {
        type: 'choice',
        prompt: 'Ist das ein Stuhl? – Nein, das ist ___ Stuhl. Das ist ein Tisch.',
        options: ['kein', 'keine', 'nicht'],
        answer: 0,
        explanationRu: 'Перед существительным вместо ein говорим kein. der Stuhl — мужской род → kein Stuhl.',
      },
      {
        type: 'choice',
        prompt: 'Das Zimmer ist ___ groß.',
        options: ['nicht', 'kein', 'keine'],
        answer: 0,
        explanationRu: 'groß — прилагательное, а не существительное. Прилагательное отрицаем словом nicht.',
      },
      {
        type: 'gap',
        prompt: 'Ist das eine Küche? – Nein, das ist ___ Küche. Das ist ein Bad.',
        answers: ['keine'],
        explanationRu: 'die Küche — женский род: eine Küche → keine Küche.',
      },
      {
        type: 'gap',
        prompt: 'Wo ist das Sofa? – ___ ist hier.',
        answers: ['Es'],
        explanationRu: 'das Sofa — средний род, поэтому местоимение es (хотя по-русски «диван» — он).',
      },
      {
        type: 'transform',
        instructionRu: 'Ответьте «нет» по образцу: Ist das ein Tisch? → Nein, das ist kein Tisch.',
        prompt: 'Ist das ein Fenster?',
        answers: ['Nein, das ist kein Fenster.', 'Das ist kein Fenster.'],
        explanationRu: 'das Fenster — средний род: ein Fenster → kein Fenster.',
      },
      {
        type: 'order',
        words: ['Die', 'Küche', 'ist', 'nicht', 'hell.'],
        translationRu: 'Кухня не светлая.',
        explanationRu: 'Порядок: подлежащее (die Küche) – глагол ist – nicht – прилагательное. nicht стоит перед словом, которое отрицает.',
      },
      {
        type: 'choice',
        audio: 'Das ist kein Bett.',
        prompt: 'Что вы слышите?',
        options: ['Das ist ein Bett.', 'Das ist kein Bett.', 'Das ist mein Bett.'],
        answer: 1,
        explanationRu: 'Вы слышите «kein» — звук [к] в начале. Das ist kein Bett. — Это не кровать.',
      },
      {
        type: 'gap',
        audio: 'Die Küche ist klein und hell.',
        prompt: 'Какая кухня? Die Küche ist klein und ___.',
        answers: ['hell'],
        explanationRu: 'Кухня маленькая и светлая: klein und hell.',
      },
      {
        type: 'gap',
        audio: 'der Schrank',
        prompt: 'Напишите слово вместе с артиклем: ___',
        answers: ['der Schrank'],
        explanationRu: 'der Schrank — шкаф. sch = «ш», в конце -nk.',
      },
    ],
  },
  vocab: [
    { de: 'Wohnung', article: 'die', plural: '-en', pos: 'noun', ru: 'квартира', example: 'Meine Wohnung ist klein.', exampleRu: 'Моя квартира маленькая.', pronRu: 'ди ВО-нунг' },
    { de: 'Haus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'дом', example: 'Das Haus ist alt.', exampleRu: 'Дом старый.', pronRu: 'дас ХАУС' },
    { de: 'Zimmer', article: 'das', plural: '–', pos: 'noun', ru: 'комната', example: 'Das Zimmer ist hell.', exampleRu: 'Комната светлая.', pronRu: 'дас ЦИ-ма' },
    { de: 'Küche', article: 'die', plural: '-n', pos: 'noun', ru: 'кухня', example: 'Die Küche ist sehr klein.', exampleRu: 'Кухня очень маленькая.', pronRu: 'ди КЮ-хье' },
    { de: 'Bad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'ванная (комната)', example: 'Das Bad ist neu.', exampleRu: 'Ванная новая.', pronRu: 'дас БАТ' },
    { de: 'Schlafzimmer', article: 'das', plural: '–', pos: 'noun', ru: 'спальня', example: 'Das Schlafzimmer ist ruhig.', exampleRu: 'В спальне тихо.', pronRu: 'дас ШЛАФ-ци-ма' },
    { de: 'Wohnzimmer', article: 'das', plural: '–', pos: 'noun', ru: 'гостиная', example: 'Das Wohnzimmer ist groß.', exampleRu: 'Гостиная большая.', pronRu: 'дас ВОН-ци-ма' },
    { de: 'Balkon', article: 'der', plural: '-e', pos: 'noun', ru: 'балкон', example: 'Der Balkon ist klein.', exampleRu: 'Балкон маленький.', pronRu: 'дер баль-КОН' },
    { de: 'Tisch', article: 'der', plural: '-e', pos: 'noun', ru: 'стол', example: 'Der Tisch ist neu.', exampleRu: 'Стол новый.', pronRu: 'дер ТИШ' },
    { de: 'Stuhl', article: 'der', plural: '-¨e', pos: 'noun', ru: 'стул', example: 'Wo ist der Stuhl?', exampleRu: 'Где стул?', pronRu: 'дер ШТУЛЬ' },
    { de: 'Bett', article: 'das', plural: '-en', pos: 'noun', ru: 'кровать', example: 'Das Bett ist sehr groß.', exampleRu: 'Кровать очень большая.', pronRu: 'дас БЭТ' },
    { de: 'Sofa', article: 'das', plural: '-s', pos: 'noun', ru: 'диван', example: 'Das Sofa ist nicht neu.', exampleRu: 'Диван не новый.', pronRu: 'дас ЗО-фа' },
    { de: 'Schrank', article: 'der', plural: '-¨e', pos: 'noun', ru: 'шкаф', example: 'Das ist mein Schrank.', exampleRu: 'Это мой шкаф.', pronRu: 'дер ШРАНК' },
    { de: 'Lampe', article: 'die', plural: '-n', pos: 'noun', ru: 'лампа', example: 'Die Lampe ist schön.', exampleRu: 'Лампа красивая.', pronRu: 'ди ЛАМ-пэ' },
    { de: 'Fenster', article: 'das', plural: '–', pos: 'noun', ru: 'окно', example: 'Das Fenster ist groß.', exampleRu: 'Окно большое.', pronRu: 'дас ФЭНС-та' },
    { de: 'Tür', article: 'die', plural: '-en', pos: 'noun', ru: 'дверь', example: 'Die Tür ist hier.', exampleRu: 'Дверь здесь.', pronRu: 'ди ТЮА' },
    { de: 'groß', pos: 'adj', ru: 'большой', example: 'Die Wohnung ist groß.', exampleRu: 'Квартира большая.', pronRu: 'ГРОС' },
    { de: 'klein', pos: 'adj', ru: 'маленький', example: 'Das Bad ist klein.', exampleRu: 'Ванная маленькая.', pronRu: 'КЛАЙН' },
    { de: 'hell', pos: 'adj', ru: 'светлый', example: 'Das Wohnzimmer ist hell.', exampleRu: 'Гостиная светлая.', pronRu: 'ХЭЛЬ' },
    { de: 'neu', pos: 'adj', ru: 'новый', example: 'Mein Sofa ist neu.', exampleRu: 'Мой диван новый.', pronRu: 'НОЙ' },
  ],
  listening: {
    title: 'Die neue Wohnung',
    kind: 'dialog',
    text: `A: Hallo, Lena! Ist das deine neue Wohnung?
B: Ja! Sie ist klein, nur zwei Zimmer. Hier ist das Wohnzimmer.
A: Oh, das Wohnzimmer ist schön und sehr hell!
B: Ja, das Fenster ist groß. Und das ist mein Sofa. Es ist neu.
A: Und wo ist das Schlafzimmer?
B: Hier links. Das Bett ist alt. Der Schrank ist noch nicht da.
A: Und die Küche? Ist sie groß?
B: Nein, die Küche ist klein. Da ist kein Tisch, nur ein Stuhl.
A: Ist hier auch ein Balkon?
B: Nein, leider. Kein Balkon.
A: Die Wohnung ist wirklich schön, Lena!`,
    questions: [
      { question: 'Wie ist das Wohnzimmer?', options: ['klein und dunkel', 'schön und hell', 'groß und alt'], answer: 1 },
      { question: 'Was ist neu?', options: ['das Sofa', 'das Bett', 'der Tisch'], answer: 0 },
      { question: 'Was ist noch nicht da?', options: ['das Bett', 'das Sofa', 'der Schrank'], answer: 2 },
      { question: 'Wie ist die Küche?', options: ['groß', 'klein', 'neu'], answer: 1 },
      { question: 'Ist da ein Balkon?', options: ['Ja, der Balkon ist groß.', 'Ja, der Balkon ist klein.', 'Nein, da ist kein Balkon.'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'У вас новая квартира. Напишите сообщение подруге Анне: какая квартира, сколько в ней комнат, какие комнаты и мебель. Скажите, чего ещё нет (kein/keine).',
    taskDe: 'Sie haben eine neue Wohnung. Schreiben Sie eine Nachricht an Anna.',
    points: [
      'Wie groß ist die Wohnung? Wie viele Zimmer?',
      'Wie sind die Küche und das Wohnzimmer?',
      'Was ist neu? Was ist noch nicht da?',
    ],
    minWords: 25,
    usefulPhrases: [
      'Liebe Anna,',
      'Meine Wohnung ist klein / groß.',
      'Die Wohnung hat zwei Zimmer.',
      'Das Wohnzimmer ist hell.',
      'Das Sofa ist neu.',
      'Ein Balkon ist nicht da. / Da ist kein Balkon.',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы показываете другу Тому свою новую квартиру по видеосвязи. Он задаёт простые вопросы о комнатах и мебели.',
    aiRole:
      'Du bist Tom, ein Freund. Dein Freund oder deine Freundin zeigt dir per Video die neue Wohnung. Sprich sehr einfach und langsam, nur kurze Sätze (A1, Präsens, Nominativ). Stell immer nur eine Frage: Wie viele Zimmer hat die Wohnung? Wie ist die Küche? Ist das Sofa neu? Wo ist das Bett? Ist da ein Balkon? Wenn der Lerner nicht weiterweiß, hilf mit einem Beispiel, z. B. „Die Küche ist … klein? groß?“. Lobe oft.',
    opener: 'Hallo! Ist das deine neue Wohnung?',
    tasksRu: [
      'Скажите, сколько в квартире комнат и какие они (groß, klein, hell).',
      'Назовите 3–4 предмета мебели с правильным артиклем.',
      'Скажите, чего в квартире нет: «Da ist kein …» / «… ist nicht da».',
      'Спросите Тома: «Wie ist deine Wohnung?»',
    ],
    readAloud: ['Das ist meine Wohnung.', 'Die Küche ist klein.', 'Das Sofa ist neu.', 'Das ist kein Tisch.', 'Der Stuhl ist nicht alt.'],
  },
};
