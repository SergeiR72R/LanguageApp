import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-12',
  level: 'A1',
  order: 12,
  title: 'Termine',
  titleRu: 'Встречи и запись к врачу',
  goalsRu: [
    'Называть дни недели, месяцы и дату: Heute ist der erste Mai.',
    'Договариваться о встрече и записываться к врачу по телефону',
    'Говорить, что вы можете и что должны делать: können, müssen',
    'Ставить второй глагол в конец предложения (рамка): Ich muss heute arbeiten.',
  ],
  grammar: {
    topic: 'Modalverben können und müssen; Satzklammer; Datum',
    topicRu: 'Модальные глаголы können и müssen; рамка предложения; дата',
    explanationRu: `**Модальные глаголы** показывают отношение к действию:
- **können** — мочь, уметь: Ich **kann** heute kommen.
- **müssen** — быть должным, нужно: Ich **muss** arbeiten.

**Формы** (см. таблицу). Внимание: у **ich** и **er/sie/es** форма одинаковая и **без окончания**: ich kann, er kann; ich muss, er muss. Ошибка: «er kannt», «er musst».

**Рамка (Satzklammer).** Модальный глагол стоит на **2-м месте** (в вопросе — на 1-м), а второй глагол — в **инфинитиве** в **самом конце**:
- Ich **kann** am Montag **kommen**.
- Am Freitag **muss** ich **arbeiten**.
- **Können** Sie morgen um 10 Uhr **kommen**?
- Глагол с приставкой в конце пишется слитно: Ich **muss** um 6 Uhr **aufstehen**.

**Типичные ошибки русскоговорящих:**
- «Ich kann kommen am Montag» — как по-русски «могу прийти в понедельник». По-немецки инфинитив — в конец: Ich kann am Montag **kommen**.
- «Ich muss arbeite» — второй глагол не спрягается: Ich muss **arbeiten**.

**Дата.** Для даты нужны порядковые числительные (первый, второй …):
- 1–19: число + **-te**: zwei**te**, vier**te**, fünf**te**. Особые: **erste** (1.), **dritte** (3.), **siebte** (7.), **achte** (8.).
- с 20: число + **-ste**: zwanzig**ste**, einunddreißig**ste**.
- Heute ist **der dritte** Mai. (3.5.)
- Когда? **am** + **-ten**: Der Termin ist **am dritten** Mai, **am zwanzigsten** Juli.

На письме после порядкового числа ставят точку: der 3. Mai. Дни недели — **am** Montag, а месяцы — **im** Mai.`,
    table: [
      ['', 'können', 'müssen'],
      ['ich', 'kann', 'muss'],
      ['du', 'kannst', 'musst'],
      ['er/sie/es', 'kann', 'muss'],
      ['wir', 'können', 'müssen'],
      ['ihr', 'könnt', 'müsst'],
      ['sie/Sie', 'können', 'müssen'],
    ],
    examples: [
      { de: 'Können Sie am Dienstag um neun Uhr kommen?', ru: 'Вы можете прийти во вторник в девять часов?' },
      { de: 'Ich muss heute lange arbeiten.', ru: 'Сегодня я должен долго работать.' },
      { de: 'Am Freitag kann ich leider nicht kommen.', ru: 'В пятницу я, к сожалению, не могу прийти.' },
      { de: 'Du musst morgen früh aufstehen.', ru: 'Завтра тебе нужно рано встать.' },
      { de: 'Heute ist der erste März.', ru: 'Сегодня первое марта.' },
      { de: 'Mein Termin ist am zwölften Juni.', ru: 'Мой приём — двенадцатого июня.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich ___ heute nicht kommen.',
        options: ['kann', 'kannst', 'können', 'kannt'],
        answer: 0,
        explanationRu: 'Форма ich от können — kann (без окончания).',
      },
      {
        type: 'gap',
        prompt: 'Du ___ morgen früh aufstehen. (müssen)',
        answers: ['musst'],
        explanationRu: 'Форма du от müssen — musst (без умлаута).',
      },
      {
        type: 'gap',
        prompt: '___ Sie am Montag um neun Uhr kommen? (können)',
        answers: ['Können'],
        explanationRu: 'Вежливое Sie — как множественное число: Können Sie …? Модальный глагол в вопросе на 1-м месте.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: ['Ich muss am Freitag arbeiten.', 'Ich muss arbeiten am Freitag.', 'Ich muss am Freitag arbeite.'],
        answer: 0,
        explanationRu: 'Рамка: muss — на 2-м месте, инфинитив arbeiten — в самом конце.',
      },
      {
        type: 'order',
        words: ['Können', 'Sie', 'morgen', 'kommen?'],
        translationRu: 'Вы можете прийти завтра?',
        explanationRu: 'Вопрос: können на 1-м месте, инфинитив kommen — в конце.',
      },
      {
        type: 'order',
        words: ['Müssen', 'wir', 'heute', 'einkaufen?'],
        translationRu: 'Нам нужно сегодня делать покупки?',
        explanationRu: 'müssen на 1-м месте, инфинитив einkaufen (слитно!) — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Добавьте модальный глагол из скобок.',
        prompt: 'Ich arbeite am Samstag. (müssen)',
        answers: ['Ich muss am Samstag arbeiten.', 'Am Samstag muss ich arbeiten.'],
        explanationRu: 'muss встаёт на 2-е место, а arbeiten в инфинитиве уходит в конец.',
      },
      {
        type: 'choice',
        prompt: 'Der Termin ist am ___ Mai. (3.)',
        options: ['dritten', 'dreiten', 'drei', 'dritte'],
        answer: 0,
        explanationRu: '3. — особая форма dritte; после am окончание -en: am dritten Mai.',
      },
      {
        type: 'gap',
        prompt: 'Heute ist der ___ Juli. (1.)',
        answers: ['erste'],
        explanationRu: '1. — der erste (особая форма, не «einte»).',
      },
      {
        type: 'choice',
        audio: 'Der Termin ist am Mittwoch um halb zehn.',
        prompt: 'Когда приём?',
        options: ['в среду в 9:30', 'в среду в 10:30', 'в четверг в 9:30', 'в понедельник в 9:30'],
        answer: 0,
        explanationRu: 'Mittwoch — среда; halb zehn — половина десятого, 9:30.',
      },
      {
        type: 'gap',
        audio: 'Heute ist der zwölfte Oktober.',
        prompt: 'Какое сегодня число? Напишите цифрами: ___. Oktober',
        answers: ['12'],
        explanationRu: 'zwölfte — двенадцатое: 12. Oktober.',
      },
      {
        type: 'choice',
        audio: 'Ich kann leider nicht kommen.',
        prompt: 'Что говорит человек?',
        options: ['Он не может прийти.', 'Он должен прийти.', 'Он придёт.'],
        answer: 0,
        explanationRu: 'kann … nicht kommen — не может прийти; leider — к сожалению.',
      },
    ],
  },
  vocab: [
    { de: 'Termin', article: 'der', plural: '-e', pos: 'noun', ru: 'назначенная встреча, приём (у врача)', example: 'Ich habe morgen einen Termin.', exampleRu: 'Завтра у меня назначена встреча.', pronRu: 'дер тэр-МИ:Н' },
    { de: 'Datum', article: 'das', plural: 'die Daten', pos: 'noun', ru: 'дата, число', example: 'Das Datum ist der 3. Mai.', exampleRu: 'Дата — 3 мая.', pronRu: 'дас ДА:-тум' },
    { de: 'Montag', article: 'der', plural: '-e', pos: 'noun', ru: 'понедельник (am Montag — в понедельник)', example: 'Am Montag arbeite ich.', exampleRu: 'В понедельник я работаю.', pronRu: 'дер МО:Н-та:к' },
    { de: 'Dienstag', article: 'der', plural: '-e', pos: 'noun', ru: 'вторник', example: 'Am Dienstag habe ich Deutschkurs.', exampleRu: 'Во вторник у меня курс немецкого.', pronRu: 'дер ДИ:НС-та:к' },
    { de: 'Mittwoch', article: 'der', plural: '-e', pos: 'noun', ru: 'среда', example: 'Am Mittwoch kann ich nicht kommen.', exampleRu: 'В среду я не могу прийти.', pronRu: 'дер МИТ-вох' },
    { de: 'Donnerstag', article: 'der', plural: '-e', pos: 'noun', ru: 'четверг', example: 'Der Termin ist am Donnerstag.', exampleRu: 'Приём в четверг.', pronRu: 'дер ДО-нас-та:к' },
    { de: 'Freitag', article: 'der', plural: '-e', pos: 'noun', ru: 'пятница', example: 'Am Freitag habe ich frei.', exampleRu: 'В пятницу я свободен (у меня выходной).', pronRu: 'дер ФРАЙ-та:к' },
    { de: 'Samstag', article: 'der', plural: '-e', pos: 'noun', ru: 'суббота', example: 'Am Samstag kaufe ich ein.', exampleRu: 'В субботу я делаю покупки.', pronRu: 'дер ЗАМС-та:к' },
    { de: 'Sonntag', article: 'der', plural: '-e', pos: 'noun', ru: 'воскресенье', example: 'Am Sonntag schlafe ich lange.', exampleRu: 'В воскресенье я долго сплю.', pronRu: 'дер ЗОН-та:к' },
    { de: 'Woche', article: 'die', plural: '-n', pos: 'noun', ru: 'неделя', example: 'Die Woche hat sieben Tage.', exampleRu: 'В неделе семь дней.', pronRu: 'ди ВО-хэ' },
    { de: 'Monat', article: 'der', plural: '-e', pos: 'noun', ru: 'месяц', example: 'Der Januar ist der erste Monat.', exampleRu: 'Январь — первый месяц.', pronRu: 'дер МО:-нат' },
    { de: 'können', forms: 'er kann', pos: 'verb', ru: 'мочь, уметь', example: 'Ich kann am Freitag kommen.', exampleRu: 'Я могу прийти в пятницу.', pronRu: 'КЁ-нэн' },
    { de: 'müssen', forms: 'er muss', pos: 'verb', ru: 'быть должным, нужно', example: 'Ich muss heute arbeiten.', exampleRu: 'Сегодня я должен работать.', pronRu: 'МЮ-сэн' },
    { de: 'Praxis', article: 'die', plural: 'die Praxen', pos: 'noun', ru: 'кабинет врача, врачебная практика', example: 'Die Praxis macht um acht Uhr auf.', exampleRu: 'Кабинет врача открывается в восемь часов.', pronRu: 'ди ПРАК-сис' },
    { de: 'heute', pos: 'adv', ru: 'сегодня', example: 'Heute habe ich keine Zeit.', exampleRu: 'Сегодня у меня нет времени.', pronRu: 'ХОЙ-тэ' },
    { de: 'morgen', pos: 'adv', ru: 'завтра', example: 'Kannst du morgen kommen?', exampleRu: 'Ты можешь прийти завтра?', pronRu: 'МОР-ген' },
    { de: 'frei', pos: 'adj', ru: 'свободный', example: 'Ist am Montag ein Termin frei?', exampleRu: 'В понедельник есть свободное время для приёма?', pronRu: 'ФРАЙ' },
    { de: 'leider', pos: 'adv', ru: 'к сожалению', example: 'Am Montag kann ich leider nicht.', exampleRu: 'В понедельник я, к сожалению, не могу.', pronRu: 'ЛАЙ-да' },
    { de: 'absagen', forms: 'er sagt ab', pos: 'verb', ru: 'отменять (встречу), отказываться', example: 'Ich muss den Termin leider absagen.', exampleRu: 'К сожалению, мне нужно отменить встречу.', pronRu: 'АП-за:-ген' },
    { de: 'Kalender', article: 'der', plural: '-', pos: 'noun', ru: 'календарь', example: 'Mein Kalender ist voll.', exampleRu: 'Мой календарь полностью занят.', pronRu: 'дер ка-ЛЭН-да' },
  ],
  listening: {
    title: 'Ein Termin beim Arzt',
    kind: 'dialog',
    text: `A: Praxis Dr. Becker, guten Tag.
B: Guten Tag, mein Name ist Iwanow. Ich brauche einen Termin, bitte.
A: Können Sie am Dienstag um neun Uhr kommen?
B: Am Dienstag? Da muss ich leider arbeiten.
A: Und am Donnerstag um Viertel nach drei?
B: Am Donnerstag kann ich, aber erst um vier Uhr.
A: Gut, dann am Donnerstag um 16 Uhr. Das ist der vierzehnte März.
B: Vielen Dank! Muss ich etwas mitbringen?
A: Ja, Ihre Versichertenkarte, bitte.
B: Gut. Auf Wiederhören!`,
    questions: [
      { question: 'Was möchte Herr Iwanow?', options: ['Einen Termin.', 'Ein Rezept.', 'Eine Adresse.'], answer: 0 },
      { question: 'Warum kann er am Dienstag nicht?', options: ['Er muss arbeiten.', 'Er ist krank.', 'Er hat Deutschkurs.'], answer: 0 },
      { question: 'Wann ist der Termin?', options: ['Am Donnerstag um 16 Uhr.', 'Am Dienstag um 9 Uhr.', 'Am Donnerstag um 15.15 Uhr.'], answer: 0 },
      { question: 'Der Termin ist am …', options: ['14. März.', '4. März.', '14. Mai.'], answer: 0 },
      { question: 'Was muss Herr Iwanow mitbringen?', options: ['Seine Versichertenkarte.', 'Ein Foto.', 'Nichts.'], answer: 0 },
    ],
  },
  writing: {
    taskRu: 'Вы не можете прийти на курс немецкого в среду. Напишите короткое письмо преподавательнице, фрау Шмидт: извинитесь, назовите причину (что вы должны делать) и спросите, что нужно выучить к пятнице.',
    taskDe: 'Sie können am Mittwoch nicht in den Deutschkurs kommen. Schreiben Sie Frau Schmidt eine kurze E-Mail.',
    points: ['Sie können am Mittwoch nicht kommen.', 'Warum nicht? Was müssen Sie machen?', 'Was müssen Sie für Freitag lernen?'],
    minWords: 25,
    usefulPhrases: [
      'Liebe Frau Schmidt,',
      'Ich kann am Mittwoch leider nicht kommen.',
      'Ich muss …',
      'Ich habe am Mittwoch einen Arzttermin.',
      'Was müssen wir für Freitag lernen?',
      'Vielen Dank!',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы звоните в кабинет врача и хотите записаться на приём. Сотрудница предлагает время. Первое время вам не подходит — объясните почему и договоритесь о другом.',
    aiRole:
      'Sie sind Frau Kraus, Mitarbeiterin in der Praxis von Dr. Wolf. Ein Patient (Anfänger, Niveau A1) ruft an und möchte einen Termin. Sprechen Sie sehr einfach und langsam, in kurzen Sätzen, nur im Präsens und mit können/müssen. Schlagen Sie Termine mit Tag, Datum und Uhrzeit vor, zum Beispiel: „Können Sie am Montag, den fünften Mai, um zehn Uhr kommen?“ Der erste Termin passt nicht, der zweite passt. Fragen Sie dann nach Name und Telefonnummer. Wenn der Patient nicht weiterweiß, helfen Sie mit einer einfachen Frage.',
    opener: 'Praxis Dr. Wolf, guten Tag! Was kann ich für Sie tun?',
    tasksRu: [
      'Скажите, что вам нужен приём: «Ich brauche einen Termin».',
      'Откажитесь от первого времени и объясните почему: «Am … muss ich arbeiten».',
      'Договоритесь о дне и времени и повторите дату: «Also am …».',
      'Назовите своё имя (по буквам) и номер телефона.',
    ],
    readAloud: ['Ich brauche einen Termin.', 'Können Sie am Montag kommen?', 'Ich muss heute arbeiten.', 'Heute ist der erste Mai.', 'Am Freitag kann ich leider nicht.'],
  },
};
