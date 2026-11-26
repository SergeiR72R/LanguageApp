import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-10',
  level: 'A1',
  order: 10,
  title: 'Mein Tag',
  titleRu: 'Мой день',
  goalsRu: [
    'Спрашивать и называть время: Wie spät ist es? — Es ist halb acht.',
    'Понимать официальное время (18:15 — achtzehn Uhr fünfzehn) и разговорное (Viertel nach sechs)',
    'Рассказывать о своём распорядке дня с глаголами aufstehen, einkaufen, fernsehen, anrufen',
    'Говорить, когда что происходит: um 8 Uhr, am Abend, von 9 bis 17 Uhr',
  ],
  grammar: {
    topic: 'Trennbare Verben; Uhrzeit; um, am, von … bis',
    topicRu: 'Глаголы с отделяемой приставкой; время; um, am, von … bis',
    explanationRu: `**Глаголы с отделяемой приставкой.** У некоторых глаголов есть приставка, которая в предложении «отрывается» и уходит в **самый конец**:

- auf|stehen (вставать) → Ich **stehe** um 7 Uhr **auf**.
- ein|kaufen (делать покупки) → Wir **kaufen** am Abend **ein**.
- an|rufen (звонить) → Ich **rufe** Anna **an**.

Глагол стоит на своём месте (в утверждении — на 2-м), а приставка — в конце, как вторая половинка скобки. В вопросе так же: **Wann stehst** du **auf**? **Rufst** du Anna **an**?
В словаре приставка пишется слитно: aufstehen. Ударение — на приставке: **АУФ**-ште-эн.

Отделяются: **an-, auf-, aus-, ein-, ab-, mit-, zu-, fern-**. Не отделяются **be-, ver-**: ich bezahle, ich verstehe. И frühstücken тоже не делится: Ich frühstücke um 8.

**Типичная ошибка:** «Ich aufstehe um 7». Правильно: **Ich stehe um 7 auf.**

**Который час?** — Wie spät ist es? / Wie viel Uhr ist es?
- **Официально** (радио, вокзал, работа): 18:15 — achtzehn Uhr fünfzehn.
- **В разговоре**: Viertel nach sieben (7:15), Viertel vor acht (7:45), zehn nach sieben (7:10), zehn vor acht (7:50).
- **Внимание:** **halb acht = 7:30!** Как по-русски «половина восьмого»: halb + следующий час. Частая ошибка — думать, что это 8:30.

**Когда?**
- **um** + время: um 8 Uhr, um halb neun.
- **am** + часть дня: am Morgen, am Mittag, am Abend, am Wochenende. Но: **in der Nacht** (ночью).
- **von … bis** — с … до: Ich arbeite von 9 bis 17 Uhr.`,
    table: [
      ['Uhr', 'offiziell (официально)', 'informell (в разговоре)'],
      ['7:00', 'sieben Uhr', 'sieben'],
      ['7:10', 'sieben Uhr zehn', 'zehn nach sieben'],
      ['7:15', 'sieben Uhr fünfzehn', 'Viertel nach sieben'],
      ['7:30', 'sieben Uhr dreißig', 'halb acht'],
      ['7:45', 'sieben Uhr fünfundvierzig', 'Viertel vor acht'],
      ['19:50', 'neunzehn Uhr fünfzig', 'zehn vor acht'],
    ],
    examples: [
      { de: 'Wie spät ist es? – Es ist halb acht.', ru: 'Который час? — Половина восьмого (7:30).' },
      { de: 'Ich stehe um sechs Uhr auf.', ru: 'Я встаю в шесть часов.' },
      { de: 'Wann rufst du deine Mutter an?', ru: 'Когда ты звонишь маме?' },
      { de: 'Wir kaufen am Abend ein.', ru: 'Мы делаем покупки вечером.' },
      { de: 'Ich arbeite von neun bis fünf.', ru: 'Я работаю с девяти до пяти.' },
      { de: 'Der Supermarkt macht um 7.30 Uhr auf.', ru: 'Супермаркет открывается в 7:30 (sieben Uhr dreißig).' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich ___ um sieben Uhr auf.',
        options: ['stehe', 'aufstehe', 'stehen', 'steht'],
        answer: 0,
        explanationRu: 'aufstehen — глагол с отделяемой приставкой: stehe стоит на 2-м месте, auf уходит в конец.',
      },
      {
        type: 'gap',
        prompt: 'Wir kaufen am Abend ___.',
        answers: ['ein'],
        hintRu: 'einkaufen — делать покупки',
        explanationRu: 'Приставка ein- от einkaufen стоит в конце предложения: Wir kaufen … ein.',
      },
      {
        type: 'order',
        words: ['Wann', 'stehst', 'du', 'auf?'],
        translationRu: 'Когда ты встаёшь?',
        explanationRu: 'W-вопрос: вопросительное слово, глагол, подлежащее — а приставка auf в самом конце.',
      },
      {
        type: 'order',
        words: ['Räumst', 'du', 'das Zimmer', 'auf?'],
        translationRu: 'Ты убираешь комнату?',
        explanationRu: 'Вопрос «да/нет»: глагол на 1-м месте, приставка auf — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Составьте предложение. Глагол поставьте в нужную форму.',
        prompt: 'ich / einkaufen / am Abend',
        answers: ['Ich kaufe am Abend ein.', 'Am Abend kaufe ich ein.'],
        explanationRu: 'kaufe — на 2-м месте, ein — в конце: Ich kaufe am Abend ein.',
      },
      {
        type: 'choice',
        prompt: 'Es ist 7:30. Wie sagt man?',
        options: ['halb acht', 'halb sieben', 'Viertel nach sieben', 'Viertel vor acht'],
        answer: 0,
        explanationRu: '7:30 — «половина восьмого»: halb + следующий час = halb acht.',
      },
      {
        type: 'gap',
        prompt: 'Es ist 14:15 Uhr. Informell sagt man: Es ist Viertel nach ___.',
        answers: ['zwei', '2'],
        explanationRu: 'В разговоре используют 12 часов: 14:15 = четверть третьего = Viertel nach zwei.',
      },
      {
        type: 'choice',
        prompt: 'Ich arbeite ___ acht ___ vier Uhr.',
        options: ['von … bis', 'um … am', 'am … um', 'bis … von'],
        answer: 0,
        explanationRu: '«С … до …» по-немецки: von … bis.',
      },
      {
        type: 'gap',
        prompt: 'Ich frühstücke ___ acht Uhr.',
        answers: ['um'],
        explanationRu: 'Перед точным временем (часы) ставим um: um acht Uhr.',
      },
      {
        type: 'choice',
        audio: 'Es ist Viertel vor neun.',
        prompt: 'Который час?',
        options: ['8:45', '9:15', '8:15', '9:45'],
        answer: 0,
        explanationRu: 'Viertel vor neun — без четверти девять, то есть 8:45.',
      },
      {
        type: 'gap',
        audio: 'Ich stehe um halb sieben auf.',
        prompt: 'Во сколько встаёт человек? Напишите цифрами (например, 7:15): ___',
        answers: ['6:30', '6.30', '06:30', '06.30'],
        explanationRu: 'halb sieben — половина седьмого, то есть 6:30.',
      },
      {
        type: 'choice',
        audio: 'Ich räume am Abend auf.',
        prompt: 'Что делает человек вечером?',
        options: ['убирает', 'делает покупки', 'звонит', 'смотрит телевизор'],
        answer: 0,
        explanationRu: 'aufräumen — убирать, наводить порядок: Ich räume … auf.',
      },
    ],
  },
  vocab: [
    { de: 'Wie spät ist es?', pos: 'phrase', ru: 'Который час?', example: 'Entschuldigung, wie spät ist es?', exampleRu: 'Извините, который час?', pronRu: 'ви: ШПЭ:Т ист эс' },
    { de: 'Uhr', article: 'die', plural: '-en', pos: 'noun', ru: 'часы; час (при указании времени)', example: 'Es ist acht Uhr.', exampleRu: 'Сейчас восемь часов.', pronRu: 'ди У:А' },
    { de: 'Stunde', article: 'die', plural: '-n', pos: 'noun', ru: 'час (60 минут)', example: 'Ich arbeite acht Stunden.', exampleRu: 'Я работаю восемь часов.', pronRu: 'ди ШТУН-дэ' },
    { de: 'Minute', article: 'die', plural: '-n', pos: 'noun', ru: 'минута', example: 'Ich habe nur fünf Minuten.', exampleRu: 'У меня только пять минут.', pronRu: 'ди ми-НУ:-тэ' },
    { de: 'halb', pos: 'adv', ru: 'половина (halb acht = 7:30)', example: 'Es ist halb acht.', exampleRu: 'Сейчас половина восьмого (7:30).', pronRu: 'ХАЛЬП' },
    { de: 'Viertel', article: 'das', plural: '-', pos: 'noun', ru: 'четверть (Viertel nach drei = 3:15)', example: 'Es ist Viertel nach drei.', exampleRu: 'Сейчас четверть четвёртого (3:15).', pronRu: 'дас ФИР-тэль' },
    { de: 'Morgen', article: 'der', plural: '-', pos: 'noun', ru: 'утро (am Morgen — утром)', example: 'Ich trinke am Morgen Kaffee.', exampleRu: 'Утром я пью кофе.', pronRu: 'дер МОР-ген' },
    { de: 'Abend', article: 'der', plural: '-e', pos: 'noun', ru: 'вечер (am Abend — вечером)', example: 'Ich sehe am Abend fern.', exampleRu: 'Вечером я смотрю телевизор.', pronRu: 'дер А:-бэнт' },
    { de: 'Nacht', article: 'die', plural: '-¨e', pos: 'noun', ru: 'ночь (in der Nacht — ночью)', example: 'Ich schlafe in der Nacht acht Stunden.', exampleRu: 'Ночью я сплю восемь часов.', pronRu: 'ди НАХТ' },
    { de: 'früh', pos: 'adj', ru: 'рано; ранний', example: 'Ich stehe früh auf.', exampleRu: 'Я встаю рано.', pronRu: 'ФРЮ:' },
    { de: 'spät', pos: 'adj', ru: 'поздно; поздний', example: 'Es ist schon spät.', exampleRu: 'Уже поздно.', pronRu: 'ШПЭ:Т' },
    { de: 'aufstehen', forms: 'er steht auf', pos: 'verb', ru: 'вставать', example: 'Ich stehe um sechs Uhr auf.', exampleRu: 'Я встаю в шесть часов.', pronRu: 'АУФ-ште:-эн' },
    { de: 'frühstücken', forms: 'er frühstückt (не делится!)', pos: 'verb', ru: 'завтракать', example: 'Wir frühstücken um sieben.', exampleRu: 'Мы завтракаем в семь.', pronRu: 'ФРЮ:-штю-кэн' },
    { de: 'anfangen', forms: 'er fängt an (a → ä, см. юнит 11)', pos: 'verb', ru: 'начинать(ся)', example: 'Der Deutschkurs fängt um neun Uhr an.', exampleRu: 'Курс немецкого начинается в девять часов.', pronRu: 'АН-фан-ген' },
    { de: 'einkaufen', forms: 'er kauft ein', pos: 'verb', ru: 'делать покупки, ходить за покупками', example: 'Ich kaufe am Abend ein.', exampleRu: 'Я делаю покупки вечером.', pronRu: 'АЙН-кау-фэн' },
    { de: 'anrufen', forms: 'er ruft an', pos: 'verb', ru: 'звонить (по телефону)', example: 'Ich rufe meine Tochter an.', exampleRu: 'Я звоню своей дочери.', pronRu: 'АН-ру:-фэн' },
    { de: 'fernsehen', forms: 'er sieht fern (e → ie, см. юнит 11)', pos: 'verb', ru: 'смотреть телевизор', example: 'Wir sehen am Abend fern.', exampleRu: 'Вечером мы смотрим телевизор.', pronRu: 'ФЕРН-зе:-эн' },
    { de: 'aufräumen', forms: 'er räumt auf', pos: 'verb', ru: 'убирать, наводить порядок', example: 'Ich räume die Küche auf.', exampleRu: 'Я убираю кухню.', pronRu: 'АУФ-рой-мэн' },
    { de: 'abholen', forms: 'er holt ab', pos: 'verb', ru: 'забирать (кого-то), заезжать за кем-то', example: 'Ich hole Anna um vier Uhr ab.', exampleRu: 'Я забираю Анну в четыре часа.', pronRu: 'АП-хо:-лэн' },
    { de: 'Feierabend', article: 'der', plural: '-e', pos: 'noun', ru: 'конец рабочего дня', example: 'Ich habe um fünf Uhr Feierabend.', exampleRu: 'В пять часов у меня заканчивается рабочий день.', pronRu: 'дер ФАЙ-а-а:-бэнт' },
  ],
  listening: {
    title: 'Janas Tag',
    kind: 'monolog',
    text: `Hallo, ich heiße Jana. Ich bin Verkäuferin. Ich stehe jeden Tag um halb sechs auf. Das ist sehr früh! Ich frühstücke nicht, ich trinke nur einen Kaffee. Ich arbeite von sieben bis drei Uhr. Ich habe um drei Uhr Feierabend. Ich hole meinen Sohn um Viertel nach drei ab. Wir kaufen zusammen ein. Ich koche am Abend, und mein Sohn räumt sein Zimmer auf. Wir sehen dann zusammen fern. Ich gehe um zehn Uhr ins Bett.`,
    questions: [
      { question: 'Wann steht Jana auf?', options: ['Um halb sechs.', 'Um halb sieben.', 'Um sieben Uhr.'], answer: 0 },
      { question: 'Was macht Jana am Morgen?', options: ['Sie frühstückt viel.', 'Sie trinkt einen Kaffee.', 'Sie sieht fern.'], answer: 1 },
      { question: 'Wann hat Jana Feierabend?', options: ['Um drei Uhr.', 'Um sieben Uhr.', 'Um zehn Uhr.'], answer: 0 },
      { question: 'Wer räumt auf?', options: ['Jana.', 'Der Sohn.', 'Der Mann.'], answer: 1 },
      { question: 'Wann geht Jana ins Bett?', options: ['Um neun Uhr.', 'Um halb elf.', 'Um zehn Uhr.'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'Ваш немецкий друг Томас спрашивает, как проходит ваш обычный день. Напишите ему короткое сообщение: когда вы встаёте, что делаете днём и вечером. Используйте глаголы с отделяемой приставкой (aufstehen, einkaufen, fernsehen).',
    taskDe: 'Schreiben Sie Thomas eine kurze Nachricht über Ihren Tag.',
    points: ['Wann stehen Sie auf?', 'Was machen Sie am Vormittag und am Nachmittag?', 'Was machen Sie am Abend?'],
    minWords: 25,
    usefulPhrases: [
      'Lieber Thomas,',
      'Ich stehe um … Uhr auf.',
      'Ich frühstücke um …',
      'Ich arbeite von … bis …',
      'Ich kaufe am Nachmittag ein.',
      'Ich sehe am Abend fern.',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы разговариваете с соседкой Петрой о распорядке дня. Она спрашивает, когда вы встаёте и что делаете днём и вечером, и рассказывает о своём дне.',
    aiRole:
      'Sie sind Petra, eine freundliche Nachbarin. Sie sprechen mit einem Anfänger (Niveau A1) über den Tagesablauf. Sprechen Sie sehr einfach und langsam: kurze Sätze, nur Präsens, viele Uhrzeiten. Duzen Sie den Lernenden. Stellen Sie immer nur eine Frage, zum Beispiel: Wann stehst du auf? Wann frühstückst du? Was machst du am Abend? Erzählen Sie auch kurz von Ihrem Tag. Wenn der Lernende nicht weiterweiß, helfen Sie mit einem Beispiel: „Ich stehe um sieben Uhr auf. Und du?“',
    opener: 'Hallo! Wann stehst du am Morgen auf?',
    tasksRu: [
      'Скажите, во сколько вы встаёте и завтракаете.',
      'Расскажите, что вы делаете вечером (fernsehen, einkaufen, aufräumen).',
      'Спросите Петру: «Wann hast du Feierabend?»',
      'Спросите, который час: «Wie spät ist es?»',
    ],
    readAloud: ['Ich stehe um sieben Uhr auf.', 'Es ist Viertel nach acht.', 'Wir kaufen am Abend ein.', 'Ich rufe meine Mutter an.', 'Es ist schon halb zehn.'],
  },
};
