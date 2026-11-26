import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-11',
  level: 'A1',
  order: 11,
  title: 'Freizeit und Hobbys',
  titleRu: 'Свободное время и хобби',
  goalsRu: [
    'Рассказывать о своих хобби и о том, что вы делаете в выходные',
    'Говорить, что вы любите делать: Ich lese gern. Ich tanze lieber. Am liebsten schwimme ich.',
    'Правильно спрягать глаголы с чередованием гласной: du fährst, er liest, sie spricht',
    'Начинать предложение со времени: Am Sonntag spiele ich Fußball.',
  ],
  grammar: {
    topic: 'Verben mit Vokalwechsel; gern – lieber – am liebsten; Verb auf Position 2',
    topicRu: 'Глаголы с чередованием гласной; gern/lieber; глагол на 2-м месте',
    explanationRu: `**1. Глаголы с чередованием гласной.** У некоторых глаголов гласная меняется, но **только в формах du и er/sie/es**. Остальные формы (ich, wir, ihr, sie/Sie) — обычные.

- **a → ä**: fahren → du **fährst**, er **fährt**; schlafen → du **schläfst**, er **schläft**
- **e → i**: sprechen → er **spricht**; treffen → er **trifft**; essen → er **isst**; nehmen → er **nimmt**
- **e → ie**: lesen → er **liest**; sehen → er **sieht**

Также с приставкой: er **sieht fern**, der Film **fängt an**.

**Типичные ошибки:** «er fahrt», «du sprechst», «ich fähre». Правильно: er **fährt**, du **sprichst**, ich **fahre**. Ещё: du **liest** и du **isst** — без второго s.

**2. gern — lieber — am liebsten.** По-русски «я люблю читать», а по-немецки: глагол + **gern**: Ich **lese gern**. (Не говорите «Ich liebe lesen».)
- Ich spiele **nicht gern** Fußball. — Я не люблю играть в футбол.
- **lieber** — «охотнее, больше»: Ich trinke gern Tee, aber **lieber** Kaffee.
- **am liebsten** — «больше всего»: **Am liebsten** tanze ich.

**3. Глагол на 2-м месте.** В немецком утверждении глагол **всегда второй**. Если предложение начинается не с подлежащего, а, например, со времени, подлежащее встаёт **после** глагола:
- Ich **spiele** am Sonntag Fußball. → Am Sonntag **spiele ich** Fußball.
- Heute **lese ich** ein Buch.
- Am Abend **sehe ich** fern.

**Ошибка русскоговорящих:** «Am Sonntag ich spiele …» — так нельзя! Глагол сразу после первого члена предложения.`,
    table: [
      ['', 'fahren', 'sprechen', 'lesen', 'nehmen'],
      ['ich', 'fahre', 'spreche', 'lese', 'nehme'],
      ['du', 'fährst', 'sprichst', 'liest', 'nimmst'],
      ['er/sie/es', 'fährt', 'spricht', 'liest', 'nimmt'],
      ['wir', 'fahren', 'sprechen', 'lesen', 'nehmen'],
      ['ihr', 'fahrt', 'sprecht', 'lest', 'nehmt'],
      ['sie/Sie', 'fahren', 'sprechen', 'lesen', 'nehmen'],
    ],
    examples: [
      { de: 'Mein Mann fährt gern Fahrrad.', ru: 'Мой муж любит кататься на велосипеде.' },
      { de: 'Liest du gern? – Ja, ich lese sehr gern.', ru: 'Ты любишь читать? — Да, очень люблю.' },
      { de: 'Am Wochenende trifft Anna ihre Freundin.', ru: 'В выходные Анна встречается с подругой.' },
      { de: 'Ich trinke gern Tee, aber lieber Kaffee.', ru: 'Я люблю чай, но кофе — больше.' },
      { de: 'Am Sonntag schläft mein Sohn lange.', ru: 'В воскресенье мой сын долго спит.' },
      { de: 'Am liebsten spiele ich Schach.', ru: 'Больше всего я люблю играть в шахматы.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Mein Sohn ___ gern Fahrrad.',
        options: ['fährt', 'fahrt', 'fähre', 'fahren'],
        answer: 0,
        explanationRu: 'fahren: a → ä в форме er/sie/es — er fährt.',
      },
      {
        type: 'gap',
        prompt: 'Anna ___ gut Englisch. (sprechen)',
        answers: ['spricht'],
        explanationRu: 'sprechen: e → i в форме er/sie/es — sie spricht.',
      },
      {
        type: 'gap',
        prompt: '___ du gern Bücher? (lesen)',
        answers: ['Liest'],
        explanationRu: 'lesen: e → ie в форме du — du liest (без второго s!).',
      },
      {
        type: 'choice',
        prompt: 'Am Sonntag ___ ich lange.',
        options: ['schlafe', 'schläft', 'schläfe', 'schlafen'],
        answer: 0,
        explanationRu: 'В форме ich гласная не меняется: ich schlafe. Ä только у du и er/sie/es.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: ['Am Abend lese ich ein Buch.', 'Am Abend ich lese ein Buch.', 'Am Abend lese ein Buch ich.'],
        answer: 0,
        explanationRu: 'Глагол всегда на 2-м месте. Если первое — «Am Abend», то подлежащее ich стоит после глагола.',
      },
      {
        type: 'order',
        words: ['Fährst', 'du', 'gern', 'Fahrrad?'],
        translationRu: 'Ты любишь кататься на велосипеде?',
        explanationRu: 'Вопрос «да/нет»: глагол на 1-м месте, gern — сразу после подлежащего.',
      },
      {
        type: 'transform',
        instructionRu: 'Начните предложение со слова в скобках.',
        prompt: 'Ich sehe heute einen Film. (Heute)',
        answers: ['Heute sehe ich einen Film.'],
        explanationRu: 'Heute — 1-е место, глагол sehe — 2-е, подлежащее ich — после глагола.',
      },
      {
        type: 'choice',
        prompt: 'Ich trinke gern Tee, aber ___ Kaffee.',
        options: ['lieber', 'gern', 'am liebsten'],
        answer: 0,
        explanationRu: 'Сравниваем два напитка: кофе я пью охотнее — lieber.',
      },
      {
        type: 'gap',
        prompt: 'Was ___ du? – Ich nehme eine Pizza. (nehmen)',
        answers: ['nimmst'],
        explanationRu: 'nehmen: в форме du — du nimmst (меняется не только гласная, но и согласная: mm).',
      },
      {
        type: 'choice',
        audio: 'Er trifft am Samstag seine Freunde.',
        prompt: 'Что делает мужчина в субботу?',
        options: ['встречается с друзьями', 'играет в футбол', 'читает книгу', 'долго спит'],
        answer: 0,
        explanationRu: 'treffen — встречать(ся): er trifft seine Freunde.',
      },
      {
        type: 'gap',
        audio: 'Sie liest gern.',
        prompt: 'Напишите глагол, который слышите: Sie ___ gern.',
        answers: ['liest'],
        explanationRu: 'lesen → sie liest. Звучит «ли:ст».',
      },
      {
        type: 'choice',
        audio: 'Am Wochenende fahre ich Fahrrad.',
        prompt: 'Что вы слышите?',
        options: ['Am Wochenende fahre ich Fahrrad.', 'Am Wochenende fährt er Fahrrad.', 'Am Wochenende fahren wir Fahrrad.'],
        answer: 0,
        explanationRu: 'Вы слышите «fahre ich» — без умлаута, это форма ich.',
      },
    ],
  },
  vocab: [
    { de: 'Freizeit', article: 'die', plural: '–', pos: 'noun', ru: 'свободное время', example: 'Was machst du in der Freizeit?', exampleRu: 'Что ты делаешь в свободное время?', pronRu: 'ди ФРАЙ-цайт' },
    { de: 'Hobby', article: 'das', plural: '-s', pos: 'noun', ru: 'хобби', example: 'Mein Hobby ist Musik.', exampleRu: 'Моё хобби — музыка.', pronRu: 'дас ХО-би' },
    { de: 'gern', pos: 'adv', ru: 'охотно, с удовольствием (Ich lese gern. — Я люблю читать.)', example: 'Ich koche sehr gern.', exampleRu: 'Я очень люблю готовить.', pronRu: 'ГЕРН' },
    { de: 'lieber', pos: 'adv', ru: 'охотнее, лучше (больше нравится)', example: 'Ich trinke lieber Tee.', exampleRu: 'Я лучше выпью чай. / Мне больше нравится чай.', pronRu: 'ЛИ:-ба' },
    { de: 'am liebsten', pos: 'phrase', ru: 'больше всего (нравится)', example: 'Am liebsten schwimme ich.', exampleRu: 'Больше всего я люблю плавать.', pronRu: 'ам ЛИ:П-стэн' },
    { de: 'lesen', forms: 'er liest', pos: 'verb', ru: 'читать', example: 'Mein Vater liest jeden Tag die Zeitung.', exampleRu: 'Мой отец каждый день читает газету.', pronRu: 'ЛЕ:-зэн' },
    { de: 'fahren', forms: 'er fährt', pos: 'verb', ru: 'ехать, ездить', example: 'Wir fahren am Sonntag nach Berlin.', exampleRu: 'В воскресенье мы едем в Берлин.', pronRu: 'ФА:-рэн' },
    { de: 'schlafen', forms: 'er schläft', pos: 'verb', ru: 'спать', example: 'Am Sonntag schläft meine Tochter lange.', exampleRu: 'В воскресенье моя дочь долго спит.', pronRu: 'ШЛА:-фэн' },
    { de: 'sprechen', forms: 'er spricht', pos: 'verb', ru: 'говорить', example: 'Sie spricht Deutsch und Russisch.', exampleRu: 'Она говорит по-немецки и по-русски.', pronRu: 'ШПРЭ-хьэн' },
    { de: 'treffen', forms: 'er trifft', pos: 'verb', ru: 'встречать (кого-то), встречаться с кем-то', example: 'Ich treffe heute meine Freundin.', exampleRu: 'Сегодня я встречаюсь с подругой.', pronRu: 'ТРЭ-фэн' },
    { de: 'sehen', forms: 'er sieht', pos: 'verb', ru: 'видеть; смотреть', example: 'Wir sehen am Abend einen Film.', exampleRu: 'Вечером мы смотрим фильм.', pronRu: 'ЗЕ:-эн' },
    { de: 'schwimmen', forms: 'er schwimmt', pos: 'verb', ru: 'плавать', example: 'Meine Frau schwimmt sehr gern.', exampleRu: 'Моя жена очень любит плавать.', pronRu: 'ШВИ-мэн' },
    { de: 'tanzen', forms: 'er tanzt', pos: 'verb', ru: 'танцевать', example: 'Wir tanzen gern Salsa.', exampleRu: 'Мы любим танцевать сальсу.', pronRu: 'ТАН-цэн' },
    { de: 'wandern', forms: 'er wandert', pos: 'verb', ru: 'ходить в походы, гулять пешком (за городом)', example: 'Am Wochenende wandern wir oft.', exampleRu: 'В выходные мы часто ходим в походы.', pronRu: 'ВАН-дерн' },
    { de: 'singen', forms: 'er singt', pos: 'verb', ru: 'петь', example: 'Meine Oma singt sehr schön.', exampleRu: 'Моя бабушка очень красиво поёт.', pronRu: 'ЗИН-ген' },
    { de: 'Sport', article: 'der', plural: '–', pos: 'noun', ru: 'спорт (Sport machen — заниматься спортом)', example: 'Ich mache gern Sport.', exampleRu: 'Я люблю заниматься спортом.', pronRu: 'дер ШПОРТ' },
    { de: 'Fußball', article: 'der', plural: '–', pos: 'noun', ru: 'футбол', example: 'Am Samstag spielen wir Fußball.', exampleRu: 'В субботу мы играем в футбол.', pronRu: 'дер ФУ:С-баль' },
    { de: 'Musik', article: 'die', plural: '–', pos: 'noun', ru: 'музыка', example: 'Ich höre gern Musik.', exampleRu: 'Я люблю слушать музыку.', pronRu: 'ди му-ЗИ:К' },
    { de: 'Konzert', article: 'das', plural: '-e', pos: 'noun', ru: 'концерт', example: 'Das Konzert fängt um acht Uhr an.', exampleRu: 'Концерт начинается в восемь часов.', pronRu: 'дас кон-ЦЭРТ' },
    { de: 'Wochenende', article: 'das', plural: '-n', pos: 'noun', ru: 'выходные (am Wochenende — в выходные)', example: 'Was machst du am Wochenende?', exampleRu: 'Что ты делаешь в выходные?', pronRu: 'дас ВО-хэн-эн-дэ' },
  ],
  listening: {
    title: 'Was machst du am Wochenende?',
    kind: 'dialog',
    text: `A: Hallo Sergej! Was machst du am Wochenende?
B: Am Samstag spiele ich Fußball. Und am Sonntag schlafe ich lange.
A: Spielst du gern Fußball?
B: Ja, sehr gern! Und du? Was machst du gern?
A: Ich lese gern, und ich wandere gern. Aber am liebsten tanze ich.
B: Tanzen? Toll! Tanzt dein Mann auch?
A: Nein, er tanzt nicht gern. Er sieht lieber fern.
B: Am Sonntag fahren wir nach Potsdam. Kommst du mit?
A: Gern! Wann fahrt ihr?
B: Um zehn Uhr.`,
    questions: [
      { question: 'Was macht Sergej am Samstag?', options: ['Er spielt Fußball.', 'Er schläft lange.', 'Er tanzt.'], answer: 0 },
      { question: 'Was macht die Frau am liebsten?', options: ['Sie liest.', 'Sie wandert.', 'Sie tanzt.'], answer: 2 },
      { question: 'Was macht ihr Mann lieber?', options: ['Er sieht fern.', 'Er tanzt.', 'Er liest.'], answer: 0 },
      { question: 'Wohin fahren Sergej und die Frau am Sonntag?', options: ['Nach Potsdam.', 'Nach Berlin.', 'Nach Hamburg.'], answer: 0 },
      { question: 'Wann fahren sie?', options: ['Um neun Uhr.', 'Um zehn Uhr.', 'Um elf Uhr.'], answer: 1 },
    ],
  },
  writing: {
    taskRu: 'Вы ищете партнёра для языкового тандема. Напишите короткий текст о себе для сайта: что вы любите делать в свободное время, что делаете в выходные и чего не любите. Начните хотя бы одно предложение со времени (Am Wochenende …).',
    taskDe: 'Schreiben Sie einen kurzen Text für eine Tandem-Webseite: Was machen Sie in der Freizeit?',
    points: ['Was machen Sie gern?', 'Was machen Sie am Wochenende?', 'Was machen Sie nicht gern?'],
    minWords: 25,
    usefulPhrases: [
      'Ich heiße … und ich komme aus …',
      'In der Freizeit … ich gern …',
      'Am Wochenende … ich …',
      'Ich … lieber …',
      'Am liebsten … ich …',
      'Ich … nicht gern …',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы впервые разговариваете с тандем-партнёром Максом из Лейпцига. Он спрашивает о ваших хобби и о выходных и рассказывает о себе.',
    aiRole:
      'Sie sind Max, ein freundlicher Tandempartner aus Leipzig. Sie sprechen mit einem Anfänger (Niveau A1) über Hobbys und Freizeit. Sprechen Sie sehr einfach und langsam, in kurzen Sätzen, nur im Präsens. Duzen Sie den Lernenden. Stellen Sie immer nur eine Frage, zum Beispiel: Was machst du gern? Was machst du am Wochenende? Liest du gern? Erzählen Sie auch kurz von Ihren Hobbys. Wenn der Lernende nicht weiterweiß, geben Sie ein Beispiel: „Ich fahre gern Fahrrad. Und du?“',
    opener: 'Hallo! Ich bin Max. Was machst du gern in der Freizeit?',
    tasksRu: [
      'Расскажите о двух-трёх своих хобби (… gern).',
      'Скажите, что вы делаете в выходные, начиная с «Am Wochenende …» или «Am Sonntag …».',
      'Скажите, что вам нравится больше (lieber) и больше всего (am liebsten).',
      'Спросите Макса: «Was machst du gern?» и «Sprichst du Russisch?»',
    ],
    readAloud: ['Ich lese sehr gern.', 'Am Sonntag schläft er lange.', 'Sie spricht gut Deutsch.', 'Fährst du gern Fahrrad?', 'Am liebsten tanze ich.'],
  },
};
