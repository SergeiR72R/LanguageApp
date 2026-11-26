import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-04',
  level: 'A1',
  order: 4,
  title: 'Hallo! Ich bin …',
  titleRu: 'Привет! Я …',
  goalsRu: [
    'Представляться: называть имя, страну и город',
    'Спрашивать собеседника: Wie heißt du? Woher kommen Sie? Wo wohnst du?',
    'Знать личные местоимения (ich, du, er, sie …) и глагол sein (быть)',
    'Правильно говорить heißen, kommen, wohnen с ich, du, er/sie и Sie',
    'Понимать, когда говорить du, а когда — Sie',
  ],
  grammar: {
    topic: 'Personalpronomen, sein und W-Fragen',
    topicRu: 'Личные местоимения, глагол sein и вопросы с W',
    explanationRu: `**Шаг 1. Личные местоимения** — это короткие слова «я, ты, он, она…»:

- **ich** — я, **du** — ты, **er** — он, **sie** — она, **es** — оно
- **wir** — мы, **ihr** — вы (друзья), **sie** — они
- **Sie** (всегда с большой буквы!) — Вы (вежливо)

**du** говорят друзьям, детям, родственникам. Незнакомым взрослым, врачу, в офисе — **Sie**.

**Шаг 2. Глагол sein (быть).** По-русски мы говорим «Я Анна» — без глагола. По-немецки глагол нужен **всегда**: **Ich bin Anna.** Формы sein неправильные, их надо просто выучить: ich **bin**, du **bist**, er/sie/es **ist**, wir **sind**, ihr **seid**, sie/Sie **sind**.

**Шаг 3. heißen, kommen, wohnen.** Здесь всё проще: начало слова не меняется, меняется только окончание (см. таблицу):

- ich wohn**e**, du wohn**st**, er/sie wohn**t**, Sie wohn**en**
- у heißen: du hei**ßt** (не «heißst» — одной буквы s хватает)

**Шаг 4. Вопросы с W.** Вопросительное слово стоит на **1-м** месте, глагол — на **2-м**:

- **Wie** heißt du? — Как тебя зовут?
- **Woher** kommen Sie? — Откуда Вы? → Ich komme **aus** Russland.
- **Wo** wohnst du? — Где ты живёшь? → Ich wohne **in** Berlin.
- **Wer** ist das? — Кто это? **Was** ist das? — Что это?

**Типичные ошибки:**

- «Ich Anna» — нет глагола. Правильно: Ich **bin** Anna.
- Путают **wo** (где) и **woher** (откуда). После woher отвечаем с **aus**, после wo — с **in**.
- **sie** и **Sie**: «sie kommt» — она приходит; «Sie kommen» — Вы приходите. Смотрите на окончание глагола!`,
    table: [
      ['', 'sein', 'heißen', 'kommen', 'wohnen'],
      ['ich', 'bin', 'heiße', 'komme', 'wohne'],
      ['du', 'bist', 'heißt', 'kommst', 'wohnst'],
      ['er / sie / es', 'ist', 'heißt', 'kommt', 'wohnt'],
      ['Sie (Вы)', 'sind', 'heißen', 'kommen', 'wohnen'],
    ],
    examples: [
      { de: 'Ich bin Olga. Ich komme aus Russland.', ru: 'Я Ольга. Я из России.' },
      { de: 'Wie heißen Sie? – Ich heiße Peter Braun.', ru: 'Как Вас зовут? — Меня зовут Петер Браун.' },
      { de: 'Woher kommst du? – Ich komme aus Österreich.', ru: 'Откуда ты? — Я из Австрии.' },
      { de: 'Wo wohnt Anna? – Sie wohnt in Hamburg.', ru: 'Где живёт Анна? — Она живёт в Гамбурге.' },
      { de: 'Wer ist das? – Das ist Herr Klein.', ru: 'Кто это? — Это господин Кляйн.' },
      { de: 'Wir sind aus Kasachstan.', ru: 'Мы из Казахстана.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich ___ Anna.',
        options: ['bist', 'bin', 'ist'],
        answer: 1,
        explanationRu: 'С ich глагол sein имеет форму bin: Ich bin Anna. bist — для du, ist — для er/sie.',
      },
      {
        type: 'choice',
        audio: 'Er ist aus Polen.',
        prompt: 'Что вы слышите?',
        options: ['Ich bin aus Polen.', 'Er ist aus Polen.', 'Sie ist aus Polen.'],
        answer: 1,
        explanationRu: 'Звучит «эа ист» — er ist (он). «Ich bin» начинается с «ихь», «sie ist» — с «зи:».',
      },
      {
        type: 'choice',
        prompt: '___ wohnst du? – In Hamburg.',
        options: ['Woher', 'Wer', 'Wo', 'Was'],
        answer: 2,
        explanationRu: 'Ответ «In Hamburg» — это место, где человек живёт. Вопрос «где?» — wo.',
      },
      {
        type: 'choice',
        prompt: '___ kommen Sie? – Aus Russland.',
        options: ['Woher', 'Wo', 'Wie', 'Wer'],
        answer: 0,
        explanationRu: 'Ответ с aus («из») отвечает на вопрос «откуда?» — woher.',
      },
      {
        type: 'choice',
        audio: 'Ich komme aus Österreich.',
        prompt: 'Откуда этот человек?',
        options: ['aus Deutschland', 'aus Russland', 'aus Österreich'],
        answer: 2,
        explanationRu: 'Человек говорит «Ich komme aus Österreich» — он из Австрии.',
      },
      {
        type: 'gap',
        prompt: 'Er ___ in Berlin.',
        answers: ['wohnt'],
        hintRu: 'wohnen',
        explanationRu: 'С er (он) глагол получает окончание -t: er wohnt.',
      },
      {
        type: 'gap',
        prompt: 'Wie ___ du?',
        answers: ['heißt', 'heisst'],
        hintRu: 'heißen',
        explanationRu: 'С du обычно окончание -st, но основа heiß- уже кончается на ß, поэтому только -t: du heißt.',
      },
      {
        type: 'gap',
        prompt: 'Wir ___ aus Kasachstan.',
        answers: ['sind', 'kommen'],
        hintRu: 'sein',
        explanationRu: 'Глагол sein с wir: wir sind. (Можно сказать и «Wir kommen aus Kasachstan».)',
      },
      {
        type: 'gap',
        audio: 'Ich heiße Paul. Ich wohne in Wien.',
        prompt: 'Где живёт Пауль? Напишите город: ___',
        answers: ['Wien', 'in Wien'],
        explanationRu: 'Пауль говорит «Ich wohne in Wien» — он живёт в Вене (Wien).',
      },
      {
        type: 'choice',
        audio: 'Wo wohnen Sie?',
        prompt: 'Какой вопрос вы слышите?',
        options: ['Woher kommen Sie?', 'Wo wohnen Sie?', 'Wie heißen Sie?'],
        answer: 1,
        explanationRu: 'Звучит «во ВО-нэн зи:» — «Где Вы живёте?».',
      },
      {
        type: 'order',
        words: ['Woher', 'kommt', 'Herr', 'Braun?'],
        translationRu: 'Откуда господин Браун?',
        explanationRu: 'В вопросе с W вопросительное слово стоит первым, глагол — вторым, потом человек.',
      },
      {
        type: 'transform',
        instructionRu: 'Расскажите о Марии: замените ich на sie (она) и измените глагол.',
        prompt: 'Ich wohne in Köln.',
        answers: ['Sie wohnt in Köln.'],
        explanationRu: 'С sie (она) у глагола окончание -t: sie wohnt.',
      },
    ],
  },
  vocab: [
    { de: 'sein', forms: 'ich bin, du bist, er ist; ist gewesen', pos: 'verb', ru: 'быть', example: 'Ich bin Olga aus Moskau.', exampleRu: 'Я Ольга из Москвы.', pronRu: 'ЗАЙН' },
    { de: 'kommen', forms: 'er kommt, ist gekommen', pos: 'verb', ru: 'приходить; быть родом (aus — из)', example: 'Ich komme aus Russland.', exampleRu: 'Я из России.', pronRu: 'КО-мэн' },
    { de: 'wohnen', forms: 'er wohnt, hat gewohnt', pos: 'verb', ru: 'жить, проживать', example: 'Sie wohnt in Hamburg.', exampleRu: 'Она живёт в Гамбурге.', pronRu: 'ВО-нэн' },
    { de: 'lernen', forms: 'er lernt, hat gelernt', pos: 'verb', ru: 'учить, учиться', example: 'Ich lerne Deutsch.', exampleRu: 'Я учу немецкий.', pronRu: 'ЛЕР-нэн' },
    { de: 'du', pos: 'other', ru: 'ты', example: 'Woher kommst du?', exampleRu: 'Откуда ты?', pronRu: 'ДУ' },
    { de: 'er', pos: 'other', ru: 'он', example: 'Das ist Paul. Er wohnt in Bonn.', exampleRu: 'Это Пауль. Он живёт в Бонне.', pronRu: 'ЭА' },
    { de: 'sie', pos: 'other', ru: 'она; они', example: 'Das ist Anna. Sie kommt aus Wien.', exampleRu: 'Это Анна. Она из Вены.', pronRu: 'ЗИ:' },
    { de: 'wer', pos: 'other', ru: 'кто', example: 'Wer ist das? – Das ist Herr Braun.', exampleRu: 'Кто это? — Это господин Браун.', pronRu: 'ВЭА' },
    { de: 'wie', pos: 'adv', ru: 'как', example: 'Wie heißt du?', exampleRu: 'Как тебя зовут?', pronRu: 'ВИ:' },
    { de: 'wo', pos: 'adv', ru: 'где', example: 'Wo wohnen Sie?', exampleRu: 'Где Вы живёте?', pronRu: 'ВО' },
    { de: 'woher', pos: 'adv', ru: 'откуда', example: 'Woher kommen Sie?', exampleRu: 'Откуда Вы?', pronRu: 'во-ХЭА' },
    { de: 'was', pos: 'other', ru: 'что', example: 'Was lernst du? – Deutsch.', exampleRu: 'Что ты учишь? — Немецкий.', pronRu: 'ВАС' },
    { de: 'aus', pos: 'prep', ru: 'из (откуда)', example: 'Ich komme aus Polen.', exampleRu: 'Я из Польши.', pronRu: 'АУС' },
    { de: 'in', pos: 'prep', ru: 'в (где)', example: 'Er wohnt in München.', exampleRu: 'Он живёт в Мюнхене.', pronRu: 'ИН' },
    { de: 'Stadt', article: 'die', plural: '-¨e', pos: 'noun', ru: 'город', example: 'Berlin ist eine Stadt in Deutschland.', exampleRu: 'Берлин — город в Германии.', pronRu: 'ди ШТАТ' },
    { de: 'Herr', article: 'der', plural: '-en', pos: 'noun', ru: 'господин (перед фамилией)', example: 'Das ist Herr Schmidt.', exampleRu: 'Это господин Шмидт.', pronRu: 'дер ХЭР' },
    { de: 'Frau', article: 'die', plural: '-en', pos: 'noun', ru: 'женщина; госпожа (перед фамилией)', example: 'Frau Klein kommt aus Bremen.', exampleRu: 'Госпожа Кляйн из Бремена.', pronRu: 'ди ФРАУ' },
    { de: 'Vorname', article: 'der', plural: '-n', pos: 'noun', ru: 'имя (личное)', example: 'Mein Vorname ist Igor.', exampleRu: 'Моё имя — Игорь.', pronRu: 'дер ФОР-на-мэ' },
    { de: 'Familienname', article: 'der', plural: '-n', pos: 'noun', ru: 'фамилия', example: 'Mein Familienname ist Petrow.', exampleRu: 'Моя фамилия — Петров.', pronRu: 'дер фа-МИ-ли-эн-на-мэ' },
    { de: 'Freut mich!', pos: 'phrase', ru: 'Очень приятно!', example: 'Ich bin Lena. – Freut mich!', exampleRu: 'Я Лена. — Очень приятно!', pronRu: 'ФРОЙТ михь' },
  ],
  listening: {
    title: 'Im Deutschkurs',
    kind: 'dialog',
    text: `A: Hallo! Ich bin Lena. Wie heißt du?
B: Hallo, Lena. Ich heiße Igor.
A: Freut mich, Igor! Woher kommst du?
B: Ich komme aus Russland, aus Sankt Petersburg. Und du?
A: Ich komme aus Österreich, aus Graz.
B: Und wo wohnst du jetzt?
A: Ich wohne jetzt in Leipzig. Und du?
B: Ich wohne auch in Leipzig. Ich lerne hier Deutsch.
A: Super! Und ich lerne hier Russisch.`,
    questions: [
      { question: 'Wie heißt der Mann?', options: ['Lena', 'Igor', 'Peter'], answer: 1 },
      { question: 'Woher kommt Igor?', options: ['aus Österreich', 'aus Leipzig', 'aus Russland'], answer: 2 },
      { question: 'Woher kommt Lena?', options: ['aus Österreich', 'aus Russland', 'aus Deutschland'], answer: 0 },
      { question: 'Wo wohnt Igor jetzt?', options: ['in Sankt Petersburg', 'in Leipzig', 'in Graz'], answer: 1 },
      { question: 'Was lernt Igor?', options: ['Russisch', 'Englisch', 'Deutsch'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'Вы новенький в группе курса немецкого. Напишите короткое сообщение в чат группы и представьтесь: как вас зовут, откуда вы и где вы сейчас живёте.',
    taskDe: 'Sie sind neu im Deutschkurs. Schreiben Sie eine kurze Nachricht an die Gruppe.',
    points: ['Wie heißen Sie?', 'Woher kommen Sie?', 'Wo wohnen Sie jetzt?'],
    minWords: 20,
    usefulPhrases: [
      'Hallo!',
      'Ich heiße … / Ich bin …',
      'Mein Vorname ist …, mein Familienname ist …',
      'Ich komme aus …',
      'Ich wohne jetzt in …',
      'Ich lerne Deutsch.',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Первый день на курсе немецкого языка. Преподавательница, госпожа Келлер, знакомится с вами и задаёт простые вопросы.',
    aiRole:
      'Sie sind Frau Keller, Deutschlehrerin in einem Kurs für absolute Anfänger. Sie lernen einen neuen Teilnehmer kennen. Sprechen Sie sehr einfach und langsam: kurze Sätze (3–6 Wörter), nur Präsens, nur einfache Wörter (heißen, kommen, wohnen, sein, lernen). Benutzen Sie „Sie“. Stellen Sie immer nur eine Frage: Name, Herkunft, Wohnort. Wenn der Teilnehmer nicht antwortet oder Fehler macht, helfen Sie freundlich mit einem Beispiel, z. B. „Sagen Sie: Ich heiße …“. Erzählen Sie auch kurz von sich, wenn er fragt.',
    opener: 'Hallo! Ich bin Frau Keller. Wie heißen Sie?',
    tasksRu: [
      'Назовите своё имя: Ich heiße … / Ich bin …',
      'Скажите, откуда вы: Ich komme aus …',
      'Скажите, где вы живёте: Ich wohne in …',
      'Задайте преподавательнице вопрос: Woher kommen Sie? или Wo wohnen Sie?',
    ],
    readAloud: ['Ich heiße Peter.', 'Ich komme aus Russland.', 'Ich wohne in Berlin.', 'Woher kommen Sie?', 'Freut mich!'],
  },
};
