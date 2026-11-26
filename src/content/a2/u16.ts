import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-16',
  level: 'A2',
  order: 16,
  title: 'Sport und Freizeit',
  titleRu: 'Спорт и свободное время',
  goalsRu: [
    'Рассказывать, каким спортом вы занимаетесь и как давно',
    'Говорить о времени с предлогами vor, nach, seit, für, ab, bis, in',
    'Понимать расписание курсов и объявления спортивного клуба',
    'Записываться на курс и договариваться о тренировке',
  ],
  grammar: {
    topic: 'Temporale Präpositionen: vor, nach, seit, für, ab, bis, in',
    topicRu: 'Предлоги времени: vor, nach, seit, für, ab, bis, in',
    explanationRu: `**Предлоги времени** отвечают на вопросы «когда?», «как долго?», «с какого времени?». Большинство из них требуют **дательного падежа** (Dativ): **dem** (м. и ср. р.), **der** (ж. р.), во мн. ч. **den** + **-n** на конце слова.

- **vor** + Dat = «… назад», если стоит перед отрезком времени: vor zwei Jahren — два года назад. Перед событием — «перед»: vor dem Training — перед тренировкой.
- **nach** + Dat = «после»: nach dem Spiel, nach der Arbeit.
- **in** + Dat = «через» (в будущем): in einer Woche — через неделю.
- **seit** + Dat = «уже … (и до сих пор)», «с»: seit drei Jahren, seit dem Sommer.
- **für** + Akk = «на (какой срок)»: für eine Woche, für einen Monat.
- **ab** = «начиная с»: ab Montag, ab 18 Uhr.
- **bis** = «до»: bis Freitag, bis 20 Uhr. С артиклем — **bis zum / bis zur**: bis zum Wochenende.

**Важно: seit + настоящее время!** Если действие началось в прошлом и продолжается сейчас, немцы говорят в **Präsens**:
- Ich spiele **seit** drei Jahren Tennis. — Я играю в теннис уже три года (и сейчас играю).

По-русски тоже «играю», а не «играл» — так что это легко запомнить.

**Вопросы:**
- **Wie lange?** — как долго? (seit drei Jahren, für zwei Wochen)
- **Seit wann?** — с какого времени? (seit Mai, seit 2020)
- **Wann?** — когда? (vor einem Jahr, in einer Stunde, nach dem Kurs)
- **Ab wann? / Bis wann?** — с какого / до какого времени?

**Типичные ошибки русскоговорящих:**
- «через неделю» переводят как «durch eine Woche». Правильно: **in einer Woche**.
- «год назад»: слово vor стоит **впереди** — **vor einem Jahr**, а не «ein Jahr vor».
- Забывают -n во множественном числе: vor zwei Jahr**en**, seit drei Tag**en**.
- «на неделю» — **für eine Woche**, а не «auf eine Woche».
- После seit ставят прошедшее время: «Ich habe seit 3 Jahren gespielt» — так не говорят, если вы играете и сейчас.`,
    table: [
      ['Präposition', 'Kasus', 'Beispiel', 'Перевод'],
      ['vor', 'Dativ', 'vor einem Jahr / vor dem Training', 'год назад / перед тренировкой'],
      ['nach', 'Dativ', 'nach dem Spiel', 'после игры'],
      ['in', 'Dativ', 'in zwei Wochen', 'через две недели'],
      ['seit', 'Dativ', 'seit einem Monat', 'уже месяц, с прошлого месяца'],
      ['für', 'Akkusativ', 'für einen Tag', 'на один день'],
      ['ab', '(meist ohne Artikel)', 'ab Montag, ab 9 Uhr', 'с понедельника, с 9 часов'],
      ['bis', '(bis zum / bis zur)', 'bis Freitag, bis zum Abend', 'до пятницы, до вечера'],
    ],
    examples: [
      { de: 'Ich spiele seit fünf Jahren im Verein Fußball.', ru: 'Я уже пять лет играю в футбол в клубе.' },
      { de: 'Vor zwei Wochen haben wir das Spiel gewonnen.', ru: 'Две недели назад мы выиграли игру.' },
      { de: 'Nach dem Training gehen wir oft etwas trinken.', ru: 'После тренировки мы часто идём что-нибудь выпить.' },
      { de: 'Der neue Yogakurs beginnt in einer Woche.', ru: 'Новый курс йоги начинается через неделю.' },
      { de: 'Ab Montag hat das Schwimmbad bis 22 Uhr geöffnet.', ru: 'С понедельника бассейн открыт до 22 часов.' },
      { de: 'Im Sommer fahren wir für zehn Tage in die Berge.', ru: 'Летом мы едем в горы на десять дней.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich spiele ___ drei Jahren Tennis.',
        options: ['seit', 'vor', 'für', 'in'],
        answer: 0,
        explanationRu: 'Действие началось три года назад и продолжается сейчас (глагол в Präsens) → seit.',
      },
      {
        type: 'choice',
        prompt: 'Wir haben uns ___ einem Jahr im Verein kennengelernt.',
        options: ['vor', 'seit', 'in', 'ab'],
        answer: 0,
        explanationRu: 'Знакомство — законченное событие в прошлом (Perfekt), «год назад» → vor einem Jahr.',
      },
      {
        type: 'choice',
        prompt: 'Das Spiel beginnt ___ zehn Minuten. Beeil dich!',
        options: ['in', 'vor', 'seit', 'nach'],
        answer: 0,
        explanationRu: '«Через десять минут» (в будущем) → in + Dativ: in zehn Minuten.',
      },
      {
        type: 'choice',
        prompt: 'Wir fahren ___ eine Woche an die Ostsee.',
        options: ['für', 'seit', 'vor', 'bis'],
        answer: 0,
        explanationRu: '«На неделю» — срок, который мы планируем → für + Akkusativ: für eine Woche.',
      },
      {
        type: 'choice',
        prompt: 'Ich jogge seit ___ Monat jeden Morgen.',
        options: ['einem', 'einen', 'ein', 'einer'],
        answer: 0,
        explanationRu: 'seit требует Dativ. der Monat (м. р.) → seit einem Monat.',
      },
      {
        type: 'gap',
        prompt: 'Nach ___ Training bin ich immer sehr müde.',
        answers: ['dem'],
        explanationRu: 'nach + Dativ. das Training (ср. р.) → nach dem Training.',
      },
      {
        type: 'gap',
        prompt: 'Der Kurs dauert vom 3. bis ___ 28. Mai.',
        answers: ['zum'],
        explanationRu: 'Перед датой с артиклем говорят bis zum (bis + zu dem): vom 3. bis zum 28. Mai.',
      },
      {
        type: 'gap',
        prompt: 'Vor zwei ___ habe ich mit Yoga angefangen.',
        answers: ['Jahren'],
        hintRu: 'das Jahr, мн. ч.',
        explanationRu: 'vor + Dativ. Во мн. ч. в дательном падеже добавляется -n: die Jahre → vor zwei Jahren.',
      },
      {
        type: 'gap',
        audio: 'Ab Montag hat das Schwimmbad bis einundzwanzig Uhr geöffnet.',
        prompt: 'До скольки открыт бассейн с понедельника? Напишите число цифрами: ___',
        answers: ['21', '21 Uhr'],
        explanationRu: 'einundzwanzig = 21. bis 21 Uhr — «до 21 часа», ab Montag — «с понедельника».',
      },
      {
        type: 'choice',
        audio: 'Ich spiele seit zwei Jahren Volleyball.',
        prompt: 'Как давно человек играет в волейбол?',
        options: ['уже два года (и сейчас играет)', 'два года назад (сейчас не играет)', 'начнёт через два года'],
        answer: 0,
        explanationRu: 'seit + Präsens: действие началось два года назад и продолжается до сих пор.',
      },
      {
        type: 'order',
        words: ['Seit', 'einem', 'Monat', 'gehe', 'ich', 'ins', 'Fitnessstudio.'],
        translationRu: 'Уже месяц я хожу в фитнес-клуб.',
        explanationRu: 'Обстоятельство времени (Seit einem Monat) стоит на первом месте, поэтому глагол gehe — на втором, а подлежащее ich — после него.',
      },
      {
        type: 'transform',
        instructionRu: 'Человек играет на гитаре и сейчас. Исправьте предложение: с seit нужно настоящее время.',
        prompt: 'Ich habe seit vier Jahren Gitarre gespielt.',
        answers: ['Ich spiele seit vier Jahren Gitarre.', 'Seit vier Jahren spiele ich Gitarre.'],
        explanationRu: 'Если действие продолжается до сих пор, после seit используется Präsens: ich spiele.',
      },
    ],
  },
  vocab: [
    { de: 'Verein', article: 'der', plural: '-e', pos: 'noun', ru: 'клуб, общество (спортивное и др.)', example: 'Mein Sohn spielt seit einem Jahr in einem Fußballverein.', exampleRu: 'Мой сын уже год играет в футбольном клубе.', pronRu: 'дер фэр-АЙН' },
    { de: 'Mitglied', article: 'das', plural: '-er', pos: 'noun', ru: 'член (клуба, семьи)', example: 'Ich bin seit 2015 Mitglied im Schwimmverein.', exampleRu: 'Я с 2015 года член клуба плавания.', pronRu: 'дас МИТ-глит' },
    { de: 'Mannschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'команда', example: 'Unsere Mannschaft trainiert zweimal pro Woche.', exampleRu: 'Наша команда тренируется два раза в неделю.', pronRu: 'ди МАН-шафт' },
    { de: 'Training', article: 'das', plural: '-s', pos: 'noun', ru: 'тренировка', example: 'Das Training beginnt heute erst um 19 Uhr.', exampleRu: 'Тренировка сегодня начинается только в 19 часов.', pronRu: 'дас ТРЭЙ-нинг' },
    { de: 'trainieren', forms: 'trainiert, hat trainiert', pos: 'verb', ru: 'тренироваться; тренировать', example: 'Wir trainieren jeden Dienstag in der Halle.', exampleRu: 'Мы тренируемся каждый вторник в зале.', pronRu: 'трэ-НИ:-рэн' },
    { de: 'Trainer', article: 'der', plural: '-', pos: 'noun', ru: 'тренер (die Trainerin — женщина-тренер)', example: 'Unser Trainer ist streng, aber sehr nett.', exampleRu: 'Наш тренер строгий, но очень милый.', pronRu: 'дер ТРЭЙ-на' },
    { de: 'Spiel', article: 'das', plural: '-e', pos: 'noun', ru: 'игра, матч', example: 'Am Samstag haben wir ein wichtiges Spiel.', exampleRu: 'В субботу у нас важная игра.', pronRu: 'дас ШПИ:ЛЬ' },
    { de: 'Zuschauer', article: 'der', plural: '-', pos: 'noun', ru: 'зритель', example: 'Beim Spiel waren über tausend Zuschauer im Stadion.', exampleRu: 'На игре на стадионе было больше тысячи зрителей.', pronRu: 'дер ЦУ:-шау-а' },
    { de: 'gewinnen', forms: 'gewinnt, hat gewonnen', pos: 'verb', ru: 'выигрывать, побеждать', example: 'Wir haben das Spiel drei zu eins gewonnen.', exampleRu: 'Мы выиграли игру со счётом три — один.', pronRu: 'гэ-ВИ-нэн' },
    { de: 'Turnier', article: 'das', plural: '-e', pos: 'noun', ru: 'турнир', example: 'Im Juni spielt unsere Mannschaft bei einem Turnier in Köln.', exampleRu: 'В июне наша команда играет на турнире в Кёльне.', pronRu: 'дас тур-НИ:А' },
    { de: 'Tor', article: 'das', plural: '-e', pos: 'noun', ru: 'ворота; гол', example: 'Er hat im letzten Spiel zwei Tore geschossen.', exampleRu: 'В последней игре он забил два гола.', pronRu: 'дас ТО:А' },
    { de: 'Stadion', article: 'das', plural: 'die Stadien', pos: 'noun', ru: 'стадион', example: 'Am Wochenende gehen wir zusammen ins Stadion.', exampleRu: 'На выходных мы вместе идём на стадион.', pronRu: 'дас ШТА:-ди-он' },
    { de: 'Fitnessstudio', article: 'das', plural: '-s', pos: 'noun', ru: 'фитнес-клуб, тренажёрный зал', example: 'Nach der Arbeit gehe ich oft ins Fitnessstudio.', exampleRu: 'После работы я часто хожу в фитнес-клуб.', pronRu: 'дас ФИТ-нэс-шту-ди-о' },
    { de: 'Schwimmbad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'бассейн', example: 'Das Schwimmbad ist ab 7 Uhr geöffnet.', exampleRu: 'Бассейн открыт с 7 часов.', pronRu: 'дас ШВИМ-ба:т' },
    { de: 'joggen', forms: 'joggt, ist gejoggt', pos: 'verb', ru: 'бегать трусцой', example: 'Ich jogge jeden Morgen eine halbe Stunde im Park.', exampleRu: 'Каждое утро я полчаса бегаю в парке.', pronRu: 'ДЖО-гэн' },
    { de: 'sich bewegen', forms: 'bewegt sich, hat sich bewegt', pos: 'verb', ru: 'двигаться', example: 'Der Arzt sagt, ich soll mich mehr bewegen.', exampleRu: 'Врач говорит, что мне надо больше двигаться.', pronRu: 'зихь бэ-ВЭ:-гэн' },
    { de: 'regelmäßig', pos: 'adj', ru: 'регулярный; регулярно', example: 'Ich gehe regelmäßig schwimmen, zweimal pro Woche.', exampleRu: 'Я регулярно хожу плавать, два раза в неделю.', pronRu: 'РЭ:-гэль-мэ:-сихь' },
    { de: 'fit', pos: 'adj', ru: 'в хорошей форме, бодрый', example: 'Mit siebzig ist mein Opa noch sehr fit.', exampleRu: 'В семьдесят лет мой дедушка ещё в очень хорошей форме.' },
    { de: 'teilnehmen', forms: 'nimmt teil, hat teilgenommen; an + Dat', pos: 'verb', ru: 'участвовать (в чём-л.)', example: 'Nächste Woche nehme ich an einem Tenniskurs teil.', exampleRu: 'На следующей неделе я участвую в курсе тенниса.', pronRu: 'ТАЙЛЬ-нэ:-мэн' },
    { de: 'Anfänger', article: 'der', plural: '-', pos: 'noun', ru: 'начинающий, новичок (die Anfängerin)', example: 'Dieser Kurs ist nur für Anfänger.', exampleRu: 'Этот курс только для начинающих.', pronRu: 'дер АН-фэн-га' },
  ],
  listening: {
    title: 'Neue Hobbys',
    kind: 'dialog',
    text: `A: Hallo Tom! Du siehst so fit aus. Machst du jetzt Sport?
B: Ja, seit drei Monaten gehe ich ins Fitnessstudio. Zweimal pro Woche, am Montag und am Donnerstag.
A: Toll! Und spielst du noch Fußball im Verein?
B: Nein, damit habe ich vor einem Jahr aufgehört. Ich hatte einfach keine Zeit mehr.
A: Schade. Ich habe gerade mit Schwimmen angefangen. Vor zwei Wochen habe ich mich für einen Kurs angemeldet.
B: Ein Schwimmkurs? Für Anfänger?
A: Nein, ich kann schon schwimmen, aber nicht sehr gut. Der Kurs dauert zehn Wochen.
B: Und wann ist der Kurs?
A: Immer mittwochs von sieben bis acht Uhr abends. Nach dem Kurs bin ich total müde.
B: Das glaube ich. Hast du am Samstag Zeit? In meinem Fitnessstudio gibt es ab Samstag einen neuen Yogakurs. Die erste Stunde ist kostenlos.
A: Am Samstag? Da habe ich erst ab vierzehn Uhr Zeit.
B: Kein Problem, der Kurs beginnt um fünfzehn Uhr.
A: Super, dann komme ich mit!`,
    questions: [
      { question: 'Seit wann geht Tom ins Fitnessstudio?', options: ['Seit drei Wochen', 'Seit drei Monaten', 'Seit einem Jahr'], answer: 1 },
      { question: 'Wann hat Tom mit Fußball aufgehört?', options: ['Vor einem Monat', 'Vor zwei Wochen', 'Vor einem Jahr'], answer: 2 },
      { question: 'Wie lange dauert der Schwimmkurs?', options: ['Zehn Wochen', 'Zwei Wochen', 'Drei Monate'], answer: 0 },
      { question: 'Wann ist der Schwimmkurs?', options: ['Am Montag und am Donnerstag', 'Am Mittwochabend', 'Am Samstagnachmittag'], answer: 1 },
      { question: 'Wann beginnt der Yogakurs am Samstag?', options: ['Um 14 Uhr', 'Um 15 Uhr', 'Um 19 Uhr'], answer: 1 },
    ],
  },
  writing: {
    taskRu: 'Вы хотите записаться на курс в спортивном клубе. Напишите e-mail в клуб: расскажите немного о себе, скажите, какой курс вас интересует и с какого времени, и задайте вопросы о цене и времени занятий.',
    taskDe: 'Sie möchten in einem Sportverein einen Kurs machen. Schreiben Sie eine E-Mail an den Verein.',
    points: [
      'Welchen Sport machen Sie schon und seit wann?',
      'Welchen Kurs möchten Sie machen und ab wann?',
      'Fragen Sie nach dem Preis und den Kurszeiten.',
    ],
    minWords: 50,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'ich interessiere mich für Ihren Kurs …',
      'Ich spiele seit … Jahren …',
      'Vor … habe ich … gemacht.',
      'Ab … habe ich Zeit.',
      'Können Sie mir bitte sagen, wie viel der Kurs kostet?',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu: 'Вы звоните в спортивный клуб и хотите записаться на курс. Сотрудница клуба задаёт вам вопросы и отвечает на ваши.',
    aiRole:
      'Sie sind Frau Berger und arbeiten im Büro vom Sportverein „TSV Grünwald“. Ein Anrufer möchte einen Kurs machen (zum Beispiel Yoga, Schwimmen oder Volleyball). Fragen Sie: Welchen Sport möchte er machen? Seit wann macht er Sport? Ab wann hat er Zeit? Die Kurse kosten für Mitglieder nichts, für Gäste 60 Euro für zehn Wochen. Sprechen Sie sehr einfach auf A2-Niveau, mit kurzen Sätzen, und stellen Sie immer nur eine Frage. Wenn der Anrufer etwas nicht versteht, sagen Sie es noch einmal langsamer und einfacher.',
    opener: 'TSV Grünwald, Berger, guten Tag! Was kann ich für Sie tun?',
    tasksRu: [
      'Скажите, каким спортом вы хотите заниматься.',
      'Расскажите, как давно вы занимаетесь спортом (seit …) или когда занимались раньше (vor …).',
      'Спросите, с какого дня (ab wann) и до какого времени (bis wann) идёт курс.',
      'Узнайте, сколько стоит курс и на какой срок (für …) можно записаться.',
    ],
    readAloud: [
      'Ich spiele seit zwei Jahren Tennis.',
      'Vor einem Monat habe ich mit Yoga angefangen.',
      'Nach dem Training bin ich immer müde.',
      'Der Kurs beginnt in einer Woche.',
    ],
  },
};
