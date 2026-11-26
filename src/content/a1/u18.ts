import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-18',
  level: 'A1',
  order: 18,
  title: 'Wetter und Wochenende',
  titleRu: 'Погода и выходные',
  goalsRu: [
    'Говорить о погоде и временах года',
    'Рассказывать, что вы делали в выходные (перфект с haben и sein)',
    'Знать важные неправильные причастия: gegessen, getrunken, gefahren, gegangen …',
    'Говорить о прошлом с war и hatte: Das Wetter war schön. Ich hatte keine Zeit.',
  ],
  grammar: {
    topic: 'Perfekt mit sein, unregelmäßige Partizipien; war und hatte',
    topicRu: 'Перфект с sein, неправильные причастия; war и hatte',
    explanationRu: `В юните 17 вы учили перфект с **haben**. Но некоторые глаголы образуют перфект с **sein**.

**Перфект с sein** — у глаголов **движения** (из точки А в точку Б):

- gehen → ich **bin** gegangen
- fahren → wir **sind** gefahren
- kommen → er **ist** gekommen
- fliegen → sie **ist** geflogen
- aufstehen → ich **bin** aufgestanden

И запомните: bleiben → ich **bin** geblieben (хотя движения нет!). Все остальные глаголы — с **haben**.

**Неправильные причастия** часто кончаются на **-en**, а гласная может меняться: essen → gegess**en**, trinken → getrunk**en**, lesen → geles**en**, sehen → geseh**en**, schlafen → geschlaf**en**, schreiben → geschrieb**en**, treffen → getroff**en**. Их нужно учить наизусть, как слова.

**war и hatte.** Когда говорят о прошлом с глаголами **sein** и **haben**, немцы обычно используют короткие формы:

- Das Wetter **war** schön. — Погода была хорошая.
- Ich **hatte** keine Zeit. — У меня не было времени.

**Погода** — всегда с **es**: **Es** regnet. **Es** schneit. **Es** ist kalt. В перфекте: Gestern **hat es** geregnet.

**Типичные ошибки:**

- «Ich habe nach Berlin gefahren» ✗ → Ich **bin** nach Berlin gefahren.
- «Ich habe gegesst» ✗ → Ich habe **gegessen**.
- «Regnet» ✗ → **Es** regnet.
- «Ich bin gestern krank gewesen» — так можно, но проще и чаще: Ich **war** gestern krank.`,
    table: [
      ['', 'sein → war', 'haben → hatte'],
      ['ich', 'war', 'hatte'],
      ['du', 'warst', 'hattest'],
      ['er/sie/es', 'war', 'hatte'],
      ['wir', 'waren', 'hatten'],
      ['ihr', 'wart', 'hattet'],
      ['sie/Sie', 'waren', 'hatten'],
    ],
    examples: [
      { de: 'Am Samstag sind wir zum See gefahren.', ru: 'В субботу мы поехали на озеро.' },
      { de: 'Wir haben Eis gegessen.', ru: 'Мы ели мороженое.' },
      { de: 'Gestern hat es den ganzen Tag geregnet.', ru: 'Вчера весь день шёл дождь.' },
      { de: 'Das Wetter war schön.', ru: 'Погода была хорошая.' },
      { de: 'Ich hatte keine Zeit.', ru: 'У меня не было времени.' },
      { de: 'Bist du am Sonntag zu Hause geblieben?', ru: 'Ты в воскресенье остался дома?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Wir ___ am Wochenende nach Hamburg gefahren.',
        options: ['haben', 'sind', 'seid', 'hat'],
        answer: 1,
        explanationRu: 'fahren — движение из точки А в точку Б, поэтому перфект с sein: wir sind gefahren.',
      },
      {
        type: 'choice',
        prompt: 'Am Sonntag ___ das Wetter sehr schön.',
        options: ['hatte', 'waren', 'war', 'warst'],
        answer: 2,
        explanationRu: 'das Wetter = es → war. О погоде в прошлом говорят: Das Wetter war schön.',
      },
      {
        type: 'choice',
        prompt: 'Hast du schon ___?',
        options: ['gegesst', 'gegessen', 'geessen', 'essen'],
        answer: 1,
        explanationRu: 'essen — неправильный глагол: gegessen. Это причастие нужно запомнить.',
      },
      {
        type: 'choice',
        audio: 'Heute schneit es.',
        prompt: 'Какая сегодня погода?',
        options: ['идёт дождь', 'идёт снег', 'светит солнце', 'дует ветер'],
        answer: 1,
        explanationRu: 'schneien — идёт снег (der Schnee — снег). Es schneit.',
      },
      {
        type: 'gap',
        prompt: 'Ich ___ am Samstag keine Zeit.',
        answers: ['hatte'],
        hintRu: 'haben, прошедшее время',
        explanationRu: 'Прошедшее от haben: ich hatte. Ich hatte keine Zeit — у меня не было времени.',
      },
      {
        type: 'gap',
        prompt: 'Mein Sohn ___ um 6 Uhr aufgestanden.',
        answers: ['ist'],
        explanationRu: 'aufstehen (вставать) образует перфект с sein: er ist aufgestanden.',
      },
      {
        type: 'gap',
        prompt: 'Wir haben viel Tee ___.',
        answers: ['getrunken'],
        hintRu: 'trinken',
        explanationRu: 'trinken — неправильный глагол: getrunken (i → u, окончание -en).',
      },
      {
        type: 'gap',
        prompt: 'Gestern hat es den ganzen Tag ___.',
        answers: ['geregnet'],
        hintRu: 'regnen',
        explanationRu: 'regnen — правильный глагол, основа на -n после согласной, поэтому -et: geregnet. Перфект с haben: es hat geregnet.',
      },
      {
        type: 'gap',
        audio: 'Am Samstag sind wir zum See gefahren.',
        prompt: 'Куда они поехали? Wir sind zum ___ gefahren.',
        answers: ['See'],
        explanationRu: 'der See — озеро. zum See = zu dem See (к озеру).',
      },
      {
        type: 'order',
        words: ['Wohin', 'seid', 'ihr', 'gefahren?'],
        translationRu: 'Куда вы ездили?',
        explanationRu: 'Вопрос: Wohin + seid (2-е место) + ihr + причастие gefahren в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Поставьте предложение в перфект.',
        prompt: 'Ich fahre nach Berlin.',
        answers: ['Ich bin nach Berlin gefahren.'],
        explanationRu: 'fahren — движение, поэтому sein: Ich bin nach Berlin gefahren.',
      },
      {
        type: 'choice',
        audio: 'Ich war gestern zu Hause.',
        prompt: 'Что вы слышите?',
        options: ['Ich bin heute zu Hause.', 'Ich war gestern im Park.', 'Ich war gestern zu Hause.'],
        answer: 2,
        explanationRu: 'Слышно «war gestern zu Hause» — я вчера был дома.',
      },
    ],
  },
  vocab: [
    { de: 'Wetter', article: 'das', plural: '–', pos: 'noun', ru: 'погода', example: 'Wie ist das Wetter heute?', exampleRu: 'Какая сегодня погода?', pronRu: 'дас ВЕ-та' },
    { de: 'Sonne', article: 'die', plural: '-n', pos: 'noun', ru: 'солнце', example: 'Heute scheint die Sonne.', exampleRu: 'Сегодня светит солнце.', pronRu: 'ди ЗО-нэ' },
    { de: 'scheinen', forms: 'die Sonne scheint, hat geschienen', pos: 'verb', ru: 'светить (о солнце)', example: 'Am Sonntag hat die Sonne geschienen.', exampleRu: 'В воскресенье светило солнце.', pronRu: 'ШАЙ-нэн' },
    { de: 'Regen', article: 'der', plural: '–', pos: 'noun', ru: 'дождь', example: 'Ich mag keinen Regen.', exampleRu: 'Я не люблю дождь.', pronRu: 'дер РЕ:-гэн' },
    { de: 'regnen', forms: 'es regnet, hat geregnet', pos: 'verb', ru: 'идёт дождь', example: 'Es regnet schon wieder.', exampleRu: 'Опять идёт дождь.', pronRu: 'РЕ:Г-нэн' },
    { de: 'Schnee', article: 'der', plural: '–', pos: 'noun', ru: 'снег', example: 'Im Winter gibt es viel Schnee.', exampleRu: 'Зимой много снега.', pronRu: 'дер ШНЕ:' },
    { de: 'schneien', forms: 'es schneit, hat geschneit', pos: 'verb', ru: 'идёт снег', example: 'Heute schneit es.', exampleRu: 'Сегодня идёт снег.', pronRu: 'ШНАЙ-эн' },
    { de: 'Wind', article: 'der', plural: '-e', pos: 'noun', ru: 'ветер', example: 'Der Wind ist heute stark.', exampleRu: 'Ветер сегодня сильный.', pronRu: 'дер ВИНТ' },
    { de: 'Wolke', article: 'die', plural: '-n', pos: 'noun', ru: 'облако, туча', example: 'Heute gibt es viele Wolken.', exampleRu: 'Сегодня много облаков.', pronRu: 'ди ВОЛЬ-кэ' },
    { de: 'warm', pos: 'adj', ru: 'тёплый, тепло', example: 'Im Sommer ist es warm.', exampleRu: 'Летом тепло.', pronRu: 'ВАРМ' },
    { de: 'kalt', pos: 'adj', ru: 'холодный, холодно', example: 'Heute ist es sehr kalt.', exampleRu: 'Сегодня очень холодно.', pronRu: 'КАЛЬТ' },
    { de: 'heiß', pos: 'adj', ru: 'жаркий, жарко; горячий', example: 'Im August ist es oft heiß.', exampleRu: 'В августе часто жарко.', pronRu: 'ХАЙС' },
    { de: 'Grad', article: 'der', plural: '-e', pos: 'noun', ru: 'градус', example: 'Heute sind es 25 Grad.', exampleRu: 'Сегодня 25 градусов.', pronRu: 'дер ГРА:Т' },
    { de: 'Jahreszeit', article: 'die', plural: '-en', pos: 'noun', ru: 'время года', example: 'Welche Jahreszeit magst du?', exampleRu: 'Какое время года ты любишь?', pronRu: 'ди ЯА:-рэс-цайт' },
    { de: 'Frühling', article: 'der', plural: '-e', pos: 'noun', ru: 'весна', example: 'Im Frühling ist es oft schön.', exampleRu: 'Весной часто хорошая погода.', pronRu: 'дер ФРЮ:-линг' },
    { de: 'Sommer', article: 'der', plural: '-', pos: 'noun', ru: 'лето', example: 'Im Sommer schwimmen wir viel.', exampleRu: 'Летом мы много плаваем.', pronRu: 'дер ЗО-ма' },
    { de: 'Herbst', article: 'der', plural: '-e', pos: 'noun', ru: 'осень', example: 'Im Herbst regnet es oft.', exampleRu: 'Осенью часто идёт дождь.', pronRu: 'дер ХЕРПСТ' },
    { de: 'Winter', article: 'der', plural: '-', pos: 'noun', ru: 'зима', example: 'Der Winter in Russland ist kalt.', exampleRu: 'Зима в России холодная.', pronRu: 'дер ВИН-та' },
    { de: 'Ausflug', article: 'der', plural: '-¨e', forms: 'einen Ausflug machen', pos: 'noun', ru: 'поездка, экскурсия (на день)', example: 'Am Sonntag machen wir einen Ausflug.', exampleRu: 'В воскресенье мы едем за город.', pronRu: 'дер АУС-флу:к' },
    { de: 'See', article: 'der', plural: '-n', pos: 'noun', ru: 'озеро (die See — море)', example: 'Wir sind zum See gefahren.', exampleRu: 'Мы поехали на озеро.', pronRu: 'дер ЗЕ:' },
  ],
  listening: {
    title: 'Wie war dein Wochenende?',
    kind: 'dialog',
    text: `A: Hallo Sabine! Wie war dein Wochenende?
B: Hallo Tim! Super! Am Samstag war das Wetter sehr schön. Es waren 28 Grad. Wir sind zum See gefahren.
A: Seid ihr auch geschwommen?
B: Ja, das Wasser war warm. Und wir haben Eis gegessen. Und du, Tim?
A: Ich hatte leider keine Zeit. Am Samstag habe ich gearbeitet. Und am Sonntag hat es den ganzen Tag geregnet.
B: Oh, schade! Was hast du am Sonntag gemacht?
A: Ich bin zu Hause geblieben und habe ein Buch gelesen.`,
    questions: [
      { question: 'Wie war das Wetter am Samstag?', options: ['Es hat geregnet.', 'Es war schön und warm.', 'Es hat geschneit.'], answer: 1 },
      { question: 'Wohin ist Sabine gefahren?', options: ['zum See', 'nach Berlin', 'in die Berge'], answer: 0 },
      { question: 'Was hat Sabine gegessen?', options: ['Kuchen', 'Pizza', 'Eis'], answer: 2 },
      { question: 'Was hat Tim am Samstag gemacht?', options: ['Er ist geschwommen.', 'Er hat gearbeitet.', 'Er hat ein Buch gelesen.'], answer: 1 },
      { question: 'Wo war Tim am Sonntag?', options: ['im Kino', 'am See', 'zu Hause'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'Вы провели выходные за городом. Напишите короткое сообщение подруге Анне: где вы были, какая была погода и что вы делали.',
    taskDe: 'Schreiben Sie eine Nachricht an Ihre Freundin Anna über Ihr Wochenende.',
    points: ['Wo waren Sie?', 'Wie war das Wetter?', 'Was haben Sie gemacht?'],
    minWords: 30,
    usefulPhrases: [
      'Liebe Anna,',
      'am Wochenende war ich in …',
      'Wir sind nach … / zum … gefahren.',
      'Das Wetter war schön / schlecht.',
      'Es hat geregnet. / Die Sonne hat geschienen.',
      'Wir haben … gegessen / gesehen.',
      'Und wie war dein Wochenende?',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Понедельник. Подруга по курсу немецкого спрашивает вас о выходных. Расскажите, где вы были, какая была погода и что вы делали, и спросите её о её выходных.',
    aiRole:
      'Sie sind Lena, eine Freundin aus dem Deutschkurs. Es ist Montag. Ihr Gesprächspartner lernt Deutsch auf Niveau A1 (Anfänger). Fragen Sie nach seinem Wochenende: Wie war dein Wochenende? Wie war das Wetter? Was hast du gemacht? Bist du zu Hause geblieben? Erzählen Sie auch kurz von Ihrem Wochenende (Perfekt, war, hatte). Sprechen Sie sehr einfach und langsam, nur kurze Sätze. Stellen Sie immer nur eine Frage. Wenn der Lerner nicht weiterweiß, geben Sie zwei Möglichkeiten zur Auswahl, zum Beispiel: „Warst du zu Hause oder im Park?“',
    opener: 'Hallo! Wie war dein Wochenende?',
    tasksRu: [
      'Скажите, где вы были и какая была погода (Ich war …, Es hat geregnet …).',
      'Расскажите 2–3 предложения о том, что вы делали (перфект с haben и sein).',
      'Спросите Лену о её выходных: Was hast du gemacht?',
      'Скажите, какое время года вы любите (Ich mag den Sommer. Da ist es warm.).',
    ],
    readAloud: ['Das Wetter war schön.', 'Wir sind zum See gefahren.', 'Ich habe Eis gegessen.', 'Gestern hat es geregnet.', 'Ich hatte keine Zeit.'],
  },
};
