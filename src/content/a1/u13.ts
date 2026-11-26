import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-13',
  level: 'A1',
  order: 13,
  title: 'In der Stadt',
  titleRu: 'В городе',
  goalsRu: [
    'Называть важные места в городе: почта, банк, аптека, вокзал, парк',
    'Спрашивать дорогу и понимать простой ответ: geradeaus, links, rechts',
    'Давать указания и просить в повелительном наклонении: Gehen Sie! Geh! Geht!',
    'Говорить, где что находится: im Park, in der Stadt, neben der Post',
  ],
  grammar: {
    topic: 'Imperativ; Wo ist …? — im, in der, neben, hier',
    topicRu: 'Повелительное наклонение; «Где находится …?»',
    explanationRu: `**Императив** (повелительное наклонение) — это форма глагола для просьбы, совета или указания: «Идите прямо!», «Возьми автобус!». В немецком у него три формы — для **Sie**, **du** и **ihr**.

**1. Форма Sie** (вежливо — незнакомому человеку). Глагол стоит на первом месте, за ним **Sie**: **Gehen Sie** geradeaus! **Nehmen Sie** den Bus! Слово Sie здесь обязательно.

**2. Форма du** (другу, ребёнку). Берём форму du и убираем **du** и окончание **-st**: du gehst → **Geh!**, du kommst → **Komm!**
- Глаголы с e → i меняют гласную и здесь: du nimmst → **Nimm!**, du liest → **Lies!**, du sprichst → **Sprich!**
- А a → ä НЕ меняется: du fährst → **Fahr!**, du schläfst → **Schlaf!**
- Если основа кончается на -t или -d, добавляем -e: **Warte!**

**3. Форма ihr** (нескольким друзьям, детям). Просто форма ihr без слова ihr: ihr kommt → **Kommt!**, ihr nehmt → **Nehmt!**

Отделяемая приставка уходит в конец: **Rufen Sie** bitte **an**! Особый глагол sein: **Seien Sie / Sei / Seid** ruhig! Слово **bitte** делает просьбу вежливой.

**Wo ist …? — Где находится?** После **in** (в), **neben** (рядом с) и **an** (у) на вопрос «где?» артикль меняется:
- der и das → **dem**: neben dem Park; in + dem = **im**: im Park, im Zentrum; an + dem = **am**: am Bahnhof
- die → **der**: in der Stadt, neben der Post, an der Ampel

Ещё полезно: **hier** (здесь), **da** (там), **links** (слева), **rechts** (справа), **geradeaus** (прямо).

**Типичные ошибки:**
- «Gehen geradeaus!» — забыли Sie. Правильно: **Gehen Sie geradeaus!**
- «Gehst!», «Nehm!» — правильно: **Geh! Nimm!**
- «Fähr!» — правильно: **Fahr!**
- «Die Post ist in die Stadt» — на вопрос «где?» правильно: **in der Stadt**.`,
    table: [
      ['Infinitiv', 'Sie', 'du', 'ihr'],
      ['gehen', 'Gehen Sie!', 'Geh!', 'Geht!'],
      ['kommen', 'Kommen Sie!', 'Komm!', 'Kommt!'],
      ['nehmen', 'Nehmen Sie!', 'Nimm!', 'Nehmt!'],
      ['lesen', 'Lesen Sie!', 'Lies!', 'Lest!'],
      ['fahren', 'Fahren Sie!', 'Fahr!', 'Fahrt!'],
      ['warten', 'Warten Sie!', 'Warte!', 'Wartet!'],
      ['anrufen', 'Rufen Sie an!', 'Ruf an!', 'Ruft an!'],
      ['sein', 'Seien Sie!', 'Sei!', 'Seid!'],
    ],
    examples: [
      { de: 'Gehen Sie geradeaus und dann links.', ru: 'Идите прямо, а потом налево.' },
      { de: 'Nimm die zweite Straße rechts!', ru: 'Сверни на вторую улицу направо!' },
      { de: 'Kinder, kommt bitte!', ru: 'Дети, идите сюда, пожалуйста!' },
      { de: 'Wo ist die Bank? – Sie ist neben der Post.', ru: 'Где банк? – Он рядом с почтой.' },
      { de: 'Das Rathaus ist im Zentrum.', ru: 'Ратуша находится в центре.' },
      { de: 'Die Apotheke ist in der Bahnhofstraße.', ru: 'Аптека находится на Вокзальной улице.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ Sie bitte geradeaus!',
        options: ['Gehen', 'Geh', 'Geht', 'Gehst'],
        answer: 0,
        explanationRu: 'Вежливая форма: глагол в форме инфинитива + Sie. Gehen Sie!',
      },
      {
        type: 'choice',
        prompt: 'Anna, ___ bitte den Bus!',
        options: ['nimm', 'nehm', 'nimmst', 'nehmt'],
        answer: 0,
        explanationRu: 'Анне говорим «ты»: du nimmst → Nimm! Гласная e → i сохраняется, окончание -st уходит.',
      },
      {
        type: 'gap',
        prompt: 'Kinder, ___ bitte nach Hause!',
        answers: ['kommt'],
        hintRu: 'kommen, форма ihr',
        explanationRu: 'Нескольким детям говорим «ihr»: ihr kommt → Kommt! Слово ihr не нужно.',
      },
      {
        type: 'gap',
        prompt: 'Peter, ___ bitte nicht so schnell!',
        answers: ['fahr', 'fahre'],
        hintRu: 'fahren, форма du',
        explanationRu: 'du fährst → Fahr! В императиве a → ä не меняется: не «fähr», а fahr.',
      },
      {
        type: 'gap',
        prompt: 'Lena, ___ bitte heute Oma an!',
        answers: ['ruf', 'rufe'],
        hintRu: 'anrufen, форма du',
        explanationRu: 'anrufen — отделяемый глагол: Ruf … an! Приставка an уходит в конец предложения.',
      },
      {
        type: 'choice',
        prompt: 'Wo ist die Apotheke? – Sie ist neben ___ Bank.',
        options: ['der', 'dem', 'die', 'den'],
        answer: 0,
        explanationRu: 'die Bank — женский род. На вопрос «где?» после neben: die → der. Neben der Bank.',
      },
      {
        type: 'gap',
        prompt: 'Die Kinder spielen ___ Park.',
        answers: ['im'],
        explanationRu: 'der Park → in dem Park = im Park. На вопрос «где?» после in: der → dem, а in + dem = im.',
      },
      {
        type: 'order',
        words: ['Entschuldigung,', 'wo', 'ist', 'der', 'Bahnhof?'],
        translationRu: 'Извините, где вокзал?',
        explanationRu: 'Вопрос с вопросительным словом: Wo на первом месте, глагол ist — на втором.',
      },
      {
        type: 'transform',
        instructionRu: 'Сделайте из предложения вежливую просьбу (форма Sie).',
        prompt: 'Sie nehmen die erste Straße links.',
        answers: ['Nehmen Sie die erste Straße links!', 'Nehmen Sie bitte die erste Straße links!'],
        explanationRu: 'В императиве Sie глагол ставим на первое место, Sie — сразу за ним: Nehmen Sie …!',
      },
      {
        type: 'choice',
        audio: 'Gehen Sie geradeaus und dann rechts.',
        prompt: 'Куда нужно идти?',
        options: ['прямо, потом направо', 'прямо, потом налево', 'направо, потом прямо', 'налево, потом прямо'],
        answer: 0,
        explanationRu: 'geradeaus — прямо, dann rechts — потом направо.',
      },
      {
        type: 'gap',
        audio: 'Die Post ist neben der Kirche.',
        prompt: 'Где почта? Die Post ist neben der ___.',
        answers: ['Kirche'],
        explanationRu: 'Вы слышите «neben der Kirche» — рядом с церковью.',
      },
      {
        type: 'choice',
        audio: 'Nimm die zweite Straße links!',
        prompt: 'Что вы слышите?',
        options: ['Nimm die zweite Straße links!', 'Nimm die zweite Straße rechts!', 'Nehmen Sie die zweite Straße links!', 'Nimm die erste Straße links!'],
        answer: 0,
        explanationRu: 'Звучит форма du (Nimm), вторая улица (zweite) и налево (links).',
      },
    ],
  },
  vocab: [
    { de: 'Stadt', article: 'die', plural: '-¨e', pos: 'noun', ru: 'город', example: 'Die Stadt ist sehr schön.', exampleRu: 'Город очень красивый.', pronRu: 'ди ШТАТ' },
    { de: 'Straße', article: 'die', plural: '-n', pos: 'noun', ru: 'улица', example: 'Ich wohne in der Bergstraße.', exampleRu: 'Я живу на Горной улице.', pronRu: 'ди ШТРА-сэ' },
    { de: 'Platz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'площадь; место', example: 'Der Platz ist sehr groß.', exampleRu: 'Площадь очень большая.', pronRu: 'дер ПЛАЦ' },
    { de: 'Post', article: 'die', plural: '–', pos: 'noun', ru: 'почта', example: 'Die Post ist neben der Bank.', exampleRu: 'Почта рядом с банком.', pronRu: 'ди ПОСТ' },
    { de: 'Bank', article: 'die', plural: '-en', pos: 'noun', ru: 'банк', example: 'Wo ist hier eine Bank?', exampleRu: 'Где здесь банк?', pronRu: 'ди БАНК' },
    { de: 'Apotheke', article: 'die', plural: '-n', pos: 'noun', ru: 'аптека', example: 'Die Apotheke ist hier rechts.', exampleRu: 'Аптека здесь справа.', pronRu: 'ди а-по-ТЭ:-кэ' },
    { de: 'Krankenhaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'больница', example: 'Das Krankenhaus ist nicht weit.', exampleRu: 'Больница недалеко.', pronRu: 'дас КРАН-кэн-хаус' },
    { de: 'Rathaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'ратуша, мэрия', example: 'Das Rathaus ist im Zentrum.', exampleRu: 'Ратуша находится в центре.', pronRu: 'дас РА:Т-хаус' },
    { de: 'Kirche', article: 'die', plural: '-n', pos: 'noun', ru: 'церковь', example: 'Die Kirche ist sehr alt.', exampleRu: 'Церковь очень старая.', pronRu: 'ди КИР-хьэ' },
    { de: 'Museum', article: 'das', plural: 'die Museen', pos: 'noun', ru: 'музей', example: 'Das Museum ist neben dem Park.', exampleRu: 'Музей рядом с парком.', pronRu: 'дас му-ЗЭ:-ум' },
    { de: 'Park', article: 'der', plural: '-s', pos: 'noun', ru: 'парк', example: 'Die Kinder spielen im Park.', exampleRu: 'Дети играют в парке.', pronRu: 'дер ПАРК' },
    { de: 'Ampel', article: 'die', plural: '-n', pos: 'noun', ru: 'светофор', example: 'Da ist eine Ampel. Gehen Sie dann links.', exampleRu: 'Там светофор. Потом идите налево.', pronRu: 'ди АМ-пэль' },
    { de: 'Kreuzung', article: 'die', plural: '-en', pos: 'noun', ru: 'перекрёсток', example: 'Hier ist eine Kreuzung. Gehen Sie rechts.', exampleRu: 'Здесь перекрёсток. Идите направо.', pronRu: 'ди КРОЙ-цунг' },
    { de: 'Ecke', article: 'die', plural: '-n', pos: 'noun', ru: 'угол', example: 'Die Bäckerei ist an der Ecke.', exampleRu: 'Пекарня на углу.', pronRu: 'ди Э-кэ' },
    { de: 'Weg', article: 'der', plural: '-e', pos: 'noun', ru: 'путь, дорога', example: 'Ich kenne den Weg nicht.', exampleRu: 'Я не знаю дороги.', pronRu: 'дер ВЭ:К' },
    { de: 'links', pos: 'adv', ru: 'слева, налево', example: 'Die Bank ist links.', exampleRu: 'Банк слева.', pronRu: 'ЛИНКС' },
    { de: 'rechts', pos: 'adv', ru: 'справа, направо', example: 'Gehen Sie hier rechts.', exampleRu: 'Идите здесь направо.', pronRu: 'РЭХЬТС' },
    { de: 'geradeaus', pos: 'adv', ru: 'прямо', example: 'Gehen Sie immer geradeaus.', exampleRu: 'Идите всё время прямо.', pronRu: 'гэ-ра-дэ-АУС' },
    { de: 'weit', pos: 'adj', ru: 'далеко, далёкий', example: 'Ist das weit? – Nein, nur fünf Minuten.', exampleRu: 'Это далеко? – Нет, всего пять минут.', pronRu: 'ВАЙТ' },
    { de: 'neben', pos: 'prep', forms: 'wo? + Dativ: neben dem / neben der', ru: 'рядом с, возле', example: 'Das Café ist neben der Post.', exampleRu: 'Кафе рядом с почтой.', pronRu: 'НЭ:-бэн' },
  ],
  listening: {
    title: 'Wo ist die Post?',
    kind: 'dialog',
    text: `A: Entschuldigung, wo ist hier die Post?
B: Die Post? Die ist in der Schillerstraße, neben der Kirche.
A: Ist das weit?
B: Nein, nicht weit. Nur zehn Minuten.
A: Und wie gehe ich?
B: Gehen Sie hier geradeaus. Dann kommt eine Ampel. Gehen Sie da links.
A: Links, gut.
B: Dann nehmen Sie die zweite Straße rechts. Das ist die Schillerstraße.
A: Gibt es da auch eine Apotheke?
B: Ja, die Apotheke ist direkt neben der Post.
A: Super. Vielen Dank!
B: Bitte, gern.`,
    questions: [
      { question: 'Was sucht der Mann?', options: ['die Post', 'die Bank', 'den Bahnhof'], answer: 0 },
      { question: 'Wo ist die Post?', options: ['neben der Bank', 'neben der Kirche', 'im Park'], answer: 1 },
      { question: 'Ist der Weg weit?', options: ['Ja, sehr weit.', 'Nein, nur zehn Minuten.', 'Nein, nur zwei Minuten.'], answer: 1 },
      { question: 'Wohin geht der Mann an der Ampel?', options: ['nach links', 'nach rechts', 'geradeaus'], answer: 0 },
      { question: 'Wo ist die Apotheke?', options: ['im Krankenhaus', 'in der Bahnhofstraße', 'neben der Post'], answer: 2 },
    ],
  },
  writing: {
    taskRu:
      'Ваш друг Марк первый раз приходит к вам в гости. Напишите ему SMS: на какой улице вы живёте, как идти от остановки к вашему дому и что находится рядом с домом. Используйте императив на du: Geh …, Nimm …',
    taskDe: 'Ihr Freund Mark besucht Sie zum ersten Mal. Schreiben Sie ihm eine SMS und beschreiben Sie den Weg.',
    points: ['Wo wohnen Sie? (Straße, Hausnummer)', 'Der Weg: geradeaus, links, rechts', 'Was ist neben dem Haus?'],
    minWords: 25,
    usefulPhrases: [
      'Hallo Mark,',
      'Ich wohne in der …straße …',
      'Geh geradeaus.',
      'Nimm die erste Straße links.',
      'Dann geh rechts.',
      'Das Haus ist neben dem/der …',
      'Bis später!',
    ],
  },
  speaking: {
    scenarioRu: 'Вы в незнакомом городе. Вы спрашиваете у прохожей, как пройти к почте и аптеке.',
    aiRole:
      'Sie sind eine freundliche Frau auf der Straße in Hannover. Der Lerner ist Anfänger (A1) und fragt nach dem Weg. Sprechen Sie sehr einfach und langsam, in kurzen Sätzen. Benutzen Sie den Imperativ mit Sie (Gehen Sie …, Nehmen Sie …) und Wörter wie links, rechts, geradeaus, neben, im, in der. Stellen Sie immer nur eine Frage. Wenn der Lerner nicht weiterweiß, helfen Sie mit einer einfachen Frage.',
    opener: 'Hallo! Suchen Sie etwas?',
    tasksRu: [
      'Вежливо обратитесь: «Entschuldigung, …»',
      'Спросите, где почта (die Post) и где аптека (die Apotheke)',
      'Спросите, далеко ли это: «Ist das weit?»',
      'Повторите дорогу (geradeaus, links …) и поблагодарите',
    ],
    readAloud: [
      'Gehen Sie geradeaus.',
      'Die Post ist links.',
      'Nimm die erste Straße rechts.',
      'Das Museum ist im Zentrum.',
      'Die Bank ist neben der Kirche.',
    ],
  },
};
