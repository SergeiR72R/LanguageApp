import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Herr Braun, ___ Sie bitte hier links!',
      options: ['gehen', 'geh', 'geht', 'gehst'],
      answer: 0,
      explanationRu: 'К господину Брауну обращаемся на Sie: Gehen Sie! — глагол и потом Sie.',
    },
    {
      type: 'choice',
      prompt: 'Mama, ___ bitte!',
      options: ['warte', 'wartest', 'wartet', 'warten'],
      answer: 0,
      explanationRu: 'Маме говорим «ты»: du wartest → Warte! Основа кончается на -t, поэтому добавляем -e.',
    },
    {
      type: 'choice',
      audio: 'Kommt bitte schnell!',
      prompt: 'Кому говорят эту фразу?',
      options: ['нескольким детям или друзьям', 'одному другу', 'незнакомому человеку'],
      answer: 0,
      explanationRu: 'Kommt! — это форма ihr: так обращаются к нескольким людям, которым говорят «ты».',
    },
    {
      type: 'choice',
      prompt: 'Lisa und Tim, ___ bitte den Text!',
      options: ['lest', 'lies', 'lesen', 'liest'],
      answer: 0,
      explanationRu: 'Двоим детям говорим «ihr»: ihr lest → Lest! Lies — форма для одного (du).',
    },
    {
      type: 'gap',
      prompt: 'Max, ___ bitte langsam!',
      answers: ['sprich'],
      hintRu: 'sprechen, форма du',
      explanationRu: 'du sprichst → Sprich! Гласная e → i остаётся и в императиве.',
    },
    {
      type: 'gap',
      prompt: '___ Sie bitte die erste Straße rechts!',
      answers: ['Nehmen'],
      hintRu: 'nehmen',
      explanationRu: 'Форма Sie: Nehmen Sie! В вежливой форме гласная не меняется.',
    },
    {
      type: 'gap',
      prompt: 'Kinder, ___ bitte ruhig!',
      answers: ['seid'],
      hintRu: 'sein, форма ihr',
      explanationRu: 'Глагол sein особый: Seien Sie! — Sei! — Seid! Детям (ihr) говорим: Seid ruhig!',
    },
    {
      type: 'choice',
      audio: 'Nimm den Bus!',
      prompt: 'Что вы слышите?',
      options: ['Nimm den Bus!', 'Nehmen Sie den Bus!', 'Nehmt den Bus!'],
      answer: 0,
      explanationRu: 'Слышно короткое «Nimm» — это форма du.',
    },
    {
      type: 'choice',
      prompt: 'Die Kinder spielen ___ Park.',
      options: ['im', 'in der', 'in die'],
      answer: 0,
      explanationRu: 'der Park → in dem Park = im Park (на вопрос «где?»).',
    },
    {
      type: 'choice',
      prompt: 'Das Hotel ist neben ___ Bahnhof.',
      options: ['dem', 'der', 'den'],
      answer: 0,
      explanationRu: 'der Bahnhof — мужской род. На вопрос «где?» после neben: der → dem.',
    },
    {
      type: 'gap',
      prompt: 'Wir wohnen in ___ Stadt.',
      answers: ['der'],
      explanationRu: 'die Stadt → in der Stadt. На вопрос «где?» артикль die меняется на der.',
    },
    {
      type: 'gap',
      audio: 'Das Rathaus ist im Zentrum.',
      prompt: 'Где ратуша? Das Rathaus ist im ___.',
      answers: ['Zentrum'],
      explanationRu: 'Вы слышите «im Zentrum» — в центре.',
    },
    {
      type: 'gap',
      audio: 'Apotheke',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Apotheke'],
      explanationRu: 'die Apotheke — аптека. Сочетание th читается как простое «т»: A-po-the-ke.',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте просьбу к другу (форма du).',
      prompt: 'Du kommst morgen.',
      answers: ['Komm morgen!', 'Komme morgen!', 'Komm bitte morgen!'],
      explanationRu: 'du kommst → Komm! Убираем du и окончание -st.',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте просьбу к друзьям (форма ihr).',
      prompt: 'Ihr fahrt langsam.',
      answers: ['Fahrt langsam!', 'Fahrt bitte langsam!'],
      explanationRu: 'Форма ihr = форма глагола без ihr: ihr fahrt → Fahrt!',
    },
    {
      type: 'order',
      words: ['Nimm', 'die', 'zweite', 'Straße', 'links!'],
      translationRu: 'Сверни на вторую улицу налево!',
      explanationRu: 'В императиве глагол стоит на первом месте: Nimm …!',
    },
    {
      type: 'choice',
      audio: 'Gehen Sie die zweite Straße links.',
      prompt: 'Куда нужно идти?',
      options: ['вторая улица налево', 'вторая улица направо', 'первая улица налево'],
      answer: 0,
      explanationRu: 'die zweite Straße — вторая улица, links — налево.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (юнит 8): Ich möchte ___ Kaffee, bitte.',
      options: ['einen', 'ein', 'eine'],
      answer: 0,
      explanationRu: 'der Kaffee — мужской род. После möchten нужен аккузатив: ein → einen.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (юнит 12): Ich ___ heute nicht kommen.',
      options: ['kann', 'kannst', 'können'],
      answer: 0,
      explanationRu: 'können: ich kann, du kannst. Второй глагол (kommen) стоит в конце в инфинитиве.',
    },
    {
      type: 'order',
      words: ['Wann', 'stehst', 'du', 'morgen', 'auf?'],
      translationRu: 'Повторение (юнит 10): Когда ты завтра встаёшь?',
      explanationRu: 'aufstehen — отделяемый глагол: stehst на втором месте, приставка auf — в конце.',
    },
  ],
  reading: [
    {
      title: 'Eine Nachricht von Jonas',
      textType: 'SMS',
      texts: [
        {
          body: `Hallo Mia! Ich bin schon in der Stadt und warte im Café Rosa. Das Café ist in der Marktstraße, neben der Apotheke. Geh am Rathaus links und dann immer geradeaus. Das Café ist rechts. Ich sitze am Fenster. Bring bitte das Buch für Lisa mit! Bis gleich, Jonas`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die SMS. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте SMS. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Jonas ist zu Hause.', answer: false, explanationRu: '«Ich bin schon in der Stadt» — Йонас уже в городе, в кафе.' },
            { kind: 'tf', statement: 'Das Café ist neben der Apotheke.', answer: true, explanationRu: '«Das Café ist … neben der Apotheke».' },
            { kind: 'tf', statement: 'Am Rathaus geht Mia rechts.', answer: false, explanationRu: '«Geh am Rathaus links» — у ратуши нужно повернуть налево.' },
            { kind: 'tf', statement: 'Mia bringt ein Buch mit.', answer: true, explanationRu: '«Bring bitte das Buch für Lisa mit!» — Мия должна принести книгу.' },
          ],
        },
      ],
    },
    {
      title: 'Schilder in der Stadt',
      textType: 'Schilder',
      texts: [
        { label: 'a', body: 'Stadtmuseum: Montag geschlossen. Dienstag bis Sonntag 10 bis 18 Uhr. Eingang neben dem Rathaus.' },
        { label: 'b', body: 'Apotheke am Markt: Heute bis 22 Uhr geöffnet.' },
        { label: 'c', body: 'Achtung! Die Goethestraße ist geschlossen. Bitte gehen Sie hier rechts durch den Park.' },
        { label: 'd', body: 'Die Stadtbibliothek ist jetzt am Kirchplatz 3, neben der Post. Montag bis Freitag 9 bis 19 Uhr.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Schilder. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте таблички. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Das Museum ist am Montag offen.', answer: false, explanationRu: '«Montag geschlossen» — в понедельник музей закрыт.' },
            { kind: 'tf', statement: 'Die Apotheke ist heute bis 22 Uhr offen.', answer: true, explanationRu: '«Heute bis 22 Uhr geöffnet» — geöffnet = открыто.' },
            { kind: 'tf', statement: 'Die Goethestraße ist offen.', answer: false, explanationRu: 'Табличка c: «Die Goethestraße ist geschlossen» — улица закрыта, нужно идти через парк.' },
            { kind: 'tf', statement: 'Die Bibliothek ist neben der Kirche.', answer: false, explanationRu: '«am Kirchplatz 3, neben der Post» — библиотека рядом с почтой, а не с церковью.' },
            { kind: 'tf', statement: 'Die Bibliothek ist am Samstag offen.', answer: false, explanationRu: 'Библиотека работает только с понедельника по пятницу (Montag bis Freitag).' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Stadtführung',
      kind: 'monolog',
      situation: 'Sie hören eine Stadtführerin.',
      text: `Guten Tag und herzlich willkommen in Lindenau! Hier links sehen Sie das Rathaus. Es ist sehr alt und schön. Neben dem Rathaus ist die Marienkirche. Bitte gehen Sie jetzt immer geradeaus. Hier rechts ist das Stadtmuseum. Es ist heute leider geschlossen. Und jetzt sind wir im Stadtpark. Im Park ist ein kleines Café. Hier machen wir eine Pause, zwanzig Minuten. Trinken Sie einen Kaffee!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was ist neben dem Rathaus?', options: ['die Kirche', 'das Museum', 'das Café'], answer: 0, explanationRu: '«Neben dem Rathaus ist die Marienkirche».' },
            { kind: 'mc', question: 'Wie lange ist die Pause?', options: ['zehn Minuten', 'zwanzig Minuten', 'dreißig Minuten'], answer: 1, explanationRu: '«Hier machen wir eine Pause, zwanzig Minuten».' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Das Museum ist heute offen.', answer: false, explanationRu: '«Es ist heute leider geschlossen» — сегодня музей закрыт.' },
            { kind: 'tf', statement: 'Das Café ist im Park.', answer: true, explanationRu: '«Im Park ist ein kleines Café».' },
          ],
        },
      ],
    },
    {
      title: 'Wo wohnst du genau?',
      kind: 'dialog',
      speakers: { A: 'Kati', B: 'Ben' },
      situation: 'Kati ruft ihren Freund Ben an.',
      text: `A: Hallo Ben, hier ist Kati. Ich bin jetzt am Bahnhof. Wo wohnst du genau?
B: In der Lindenstraße acht. Das ist nicht weit. Geh links und dann immer geradeaus.
A: Okay. Und dann?
B: Da ist eine Ampel. Geh da rechts. Das ist schon die Lindenstraße.
A: Und wo ist dein Haus?
B: Neben dem Supermarkt. Ich warte unten.
A: Super, bis gleich!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Kati ist am Bahnhof.', answer: true, explanationRu: '«Ich bin jetzt am Bahnhof».' },
            { kind: 'tf', statement: 'Bens Haus ist neben der Post.', answer: false, explanationRu: '«Neben dem Supermarkt» — дом Бена рядом с супермаркетом.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wo wohnt Ben?', options: ['Lindenstraße 8', 'Lindenstraße 18', 'Bahnhofstraße 8'], answer: 0, explanationRu: '«In der Lindenstraße acht».' },
            { kind: 'mc', question: 'Wohin geht Kati an der Ampel?', options: ['nach links', 'nach rechts', 'geradeaus'], answer: 1, explanationRu: '«Da ist eine Ampel. Geh da rechts».' },
          ],
        },
      ],
    },
  ],
};
