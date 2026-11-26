import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich ___ 2005 nach Berlin geflogen.',
      options: ['habe', 'bin', 'hat', 'ist'],
      answer: 1,
      explanationRu: 'fliegen — движение из точки А в точку Б, поэтому перфект с sein: ich bin geflogen.',
    },
    {
      type: 'choice',
      prompt: 'Er hat drei Jahre in Polen ___.',
      options: ['gearbeitet', 'arbeitet', 'geworden', 'arbeiten'],
      answer: 0,
      explanationRu: 'После hat нужен Partizip II в конце: arbeiten → gearbeitet (ge- … -et, потому что основа кончается на -t).',
    },
    {
      type: 'choice',
      audio: 'Wir sind 1999 umgezogen.',
      prompt: 'Что вы слышите?',
      options: ['Wir sind 1999 umgezogen.', 'Wir haben 1999 geheiratet.', 'Wir sind 1989 umgezogen.'],
      answer: 0,
      explanationRu: 'Звучит «neunzehnhundertneunundneunzig» (1999) и umgezogen — «переехали».',
    },
    {
      type: 'choice',
      prompt: 'lesen → Ich habe das Buch ___.',
      options: ['gelest', 'gelesen', 'gelasen'],
      answer: 1,
      explanationRu: 'lesen — неправильный глагол: Partizip II gelesen (ge- … -en).',
    },
    {
      type: 'choice',
      prompt: 'Какое предложение правильное?',
      options: ['Ich habe in Kiew studiert.', 'Ich habe in Kiew gestudiert.', 'Ich bin in Kiew studiert.'],
      answer: 0,
      explanationRu: 'У глаголов на -ieren в Partizip II нет ge-: studiert. Вспомогательный глагол — haben.',
    },
    {
      type: 'gap',
      prompt: 'Meine Eltern ___ 1970 geheiratet.',
      answers: ['haben'],
      explanationRu: 'heiraten образует перфект с haben. Подлежащее meine Eltern — «они», поэтому haben.',
    },
    {
      type: 'gap',
      prompt: 'Ich bin in Sibirien ___.',
      answers: ['aufgewachsen'],
      hintRu: 'aufwachsen',
      explanationRu: 'aufwachsen — отделяемый глагол: ge- стоит между auf и wachsen: aufgewachsen.',
    },
    {
      type: 'gap',
      prompt: 'Die Prüfung hat um neun Uhr ___.',
      answers: ['begonnen'],
      hintRu: 'beginnen',
      explanationRu: 'beginnen — неправильный глагол с приставкой be-, поэтому без ge-: begonnen.',
    },
    {
      type: 'gap',
      prompt: 'Wie lange ___ ihr in Italien geblieben?',
      answers: ['seid'],
      explanationRu: 'bleiben образует перфект с sein. Для ihr форма — seid.',
    },
    {
      type: 'gap',
      prompt: 'Ich habe meine Brille ___. Wo ist sie nur?',
      answers: ['verloren'],
      hintRu: 'verlieren',
      explanationRu: 'verlieren — приставка ver-, поэтому без ge-: verloren.',
    },
    {
      type: 'gap',
      audio: 'geboren',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['geboren'],
      explanationRu: 'geboren — «рождён». Ich bin … geboren — я родился.',
    },
    {
      type: 'gap',
      audio: 'Meine Mutter ist neunzig Jahre alt geworden.',
      prompt: 'Сколько лет исполнилось матери? Напишите число цифрами: ___',
      answers: ['90'],
      explanationRu: 'neunzig = 90. «ist … geworden» — «исполнилось, стала».',
    },
    {
      type: 'gap',
      prompt: 'Er hat uns viel von seiner Kindheit ___.',
      answers: ['erzählt'],
      hintRu: 'erzählen',
      explanationRu: 'erzählen — приставка er-, поэтому без ge-: erzählt.',
    },
    {
      type: 'order',
      words: ['Wo', 'hast', 'du', 'Deutsch', 'gelernt?'],
      translationRu: 'Где ты учил немецкий?',
      explanationRu: 'W-слово на 1-м месте, вспомогательный глагол hast — на 2-м, Partizip II gelernt — в конце.',
    },
    {
      type: 'order',
      words: ['Meine', 'Oma', 'ist', '1940', 'geboren.'],
      translationRu: 'Моя бабушка родилась в 1940 году.',
      explanationRu: 'Фраза «ist … geboren»: ist на 2-м месте, geboren — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Перескажите в перфекте.',
      prompt: 'Ich schreibe einen Brief.',
      answers: ['Ich habe einen Brief geschrieben.'],
      explanationRu: 'schreiben — неправильный глагол: hat geschrieben.',
    },
    {
      type: 'transform',
      instructionRu: 'Перескажите в перфекте.',
      prompt: 'Wir fahren nach Österreich.',
      answers: ['Wir sind nach Österreich gefahren.'],
      explanationRu: 'fahren — движение, поэтому sein: sind … gefahren.',
    },
    {
      type: 'choice',
      prompt: 'Повторение A1. Ich habe ___ Bruder und eine Schwester.',
      options: ['einen', 'ein', 'eine'],
      answer: 0,
      explanationRu: 'После haben нужен аккузатив. der Bruder → einen Bruder.',
    },
    {
      type: 'order',
      words: ['Ich', 'muss', 'heute', 'lange', 'arbeiten.'],
      translationRu: 'Сегодня мне нужно долго работать.',
      explanationRu: 'Повторение A1: модальный глагол muss стоит на 2-м месте, инфинитив arbeiten — в конце.',
    },
    {
      type: 'gap',
      prompt: 'Повторение A1. Ich fahre mit ___ Bus zur Arbeit.',
      answers: ['dem'],
      explanationRu: 'После mit всегда датив: der Bus → mit dem Bus.',
    },
  ],
  reading: [
    {
      title: 'Ein Leben in zwei Ländern',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `Ludmila Wagner ist 68 Jahre alt. Sie ist in Kasachstan geboren und in einem Dorf bei Karaganda aufgewachsen. Ihre Großeltern waren Deutsche, aber zu Hause hat die Familie meistens Russisch gesprochen. Nach der Schule hat Ludmila in Karaganda Mathematik studiert. Danach hat sie zwanzig Jahre als Lehrerin an einer Schule gearbeitet.

1994 ist sie mit ihrem Mann und ihren zwei Söhnen nach Deutschland gekommen. Die ersten Jahre waren schwer: Ihr Diplom hat in Deutschland nicht viel geholfen, und sie hat lange keine Stelle gefunden. Dann hat sie eine Ausbildung als Altenpflegerin gemacht und fünfzehn Jahre in einem Pflegeheim in Hannover gearbeitet. Seit 2020 ist sie in Rente.

„Ich habe zweimal neu angefangen“, sagt sie. „Das war nicht leicht, aber heute bin ich zufrieden.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Ludmila ist in Deutschland geboren.', answer: false, explanationRu: '«Sie ist in Kasachstan geboren» — она родилась в Казахстане.' },
            { kind: 'tf', statement: 'Die Familie hat zu Hause meistens Deutsch gesprochen.', answer: false, explanationRu: '«zu Hause hat die Familie meistens Russisch gesprochen» — дома говорили в основном по-русски.' },
            { kind: 'tf', statement: 'Ludmila war zwanzig Jahre Lehrerin.', answer: true, explanationRu: '«Danach hat sie zwanzig Jahre als Lehrerin … gearbeitet».' },
            { kind: 'tf', statement: 'In Deutschland hat sie sofort eine Stelle gefunden.', answer: false, explanationRu: '«sie hat lange keine Stelle gefunden» — она долго не могла найти работу.' },
            { kind: 'tf', statement: 'Heute arbeitet Ludmila nicht mehr.', answer: true, explanationRu: '«Seit 2020 ist sie in Rente» — она на пенсии.' },
          ],
        },
      ],
    },
    {
      title: 'Kurse und Angebote',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', heading: 'Erzählcafé', body: 'Sie sind über 60 und haben viel erlebt? Jeden Mittwoch um 15 Uhr erzählen Seniorinnen und Senioren im Café „Lindenhof“ aus ihrem Leben. Kaffee und Kuchen: 3 Euro.' },
        { label: 'b', heading: 'Bewerbungstraining', body: 'Wir helfen Ihnen: Wir schreiben mit Ihnen Ihren Lebenslauf und üben das Gespräch mit dem Chef. Dienstag, 18 Uhr, Volkshochschule, Raum 12. Kostenlos!' },
        { label: 'c', heading: 'Deutsch am Abend', body: 'Deutschkurs A2 für Erwachsene. Montag und Donnerstag, 19 bis 21 Uhr. Beginn: 4. März. Anmeldung im Büro der Volkshochschule.' },
        { label: 'd', heading: 'Computer für Anfänger', body: 'Sie haben noch nie mit einem Computer gearbeitet? Kein Problem! In diesem Kurs lernen Sie E-Mails schreiben und Fotos schicken. Für Menschen ab 55.' },
        { label: 'e', heading: 'Fotostudio Klick', body: 'Haben Sie alte Fotos aus Ihrem Leben? Wir machen digitale Bilder daraus. Bringen Sie die Fotos einfach vorbei: Bahnhofstraße 3.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt? Für eine Person gibt es keine passende Anzeige.',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит каждому человеку? Для одного человека подходящего объявления нет.',
          options: ['a', 'b', 'c', 'd', 'e'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Herr Kowalski ist 70. Er möchte anderen Leuten von seinem Leben erzählen.', answer: 0, explanationRu: 'В кафе «Lindenhof» пожилые люди рассказывают о своей жизни (объявление a).' },
            { kind: 'match', prompt: 'Frau Demir sucht eine Stelle. Sie braucht Hilfe mit ihrem Lebenslauf.', answer: 1, explanationRu: 'На тренинге b помогают написать резюме и подготовиться к собеседованию.' },
            { kind: 'match', prompt: 'Ihre Nachbarin hat noch nie einen Computer benutzt. Sie möchte E-Mails an ihren Enkel schreiben.', answer: 3, explanationRu: 'Курс d для начинающих: там учат писать e-mail.' },
            { kind: 'match', prompt: 'Herr Iwanow möchte seine alten Familienfotos auf dem Handy haben.', answer: 4, explanationRu: 'Фотостудия e делает из старых фотографий цифровые.' },
            { kind: 'match', prompt: 'Frau Schulz möchte am Wochenende Englisch lernen.', answer: -1, explanationRu: 'Курса английского нет: курс c — немецкий и по будним дням. Подходящего объявления нет.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht von der Volkshochschule',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Guten Tag, Herr Morosow, hier ist Claudia Brandt von der Volkshochschule. Ich habe gute Nachrichten: Sie haben die Prüfung A1 bestanden! Herzlichen Glückwunsch! Ihr Zeugnis ist schon fertig. Sie können es ab Montag im Büro abholen, Zimmer 104. Das Büro ist von 9 bis 13 Uhr geöffnet. Der Kurs A2 beginnt am 3. April. Er ist am Dienstag und am Freitag, immer von 10 bis 12 Uhr. Möchten Sie mitmachen? Dann rufen Sie mich bitte bis Freitag an. Meine Nummer ist 0511 46 72 30. Auf Wiederhören!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте сообщение. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist passiert?',
              options: ['Herr Morosow hat die Prüfung bestanden.', 'Herr Morosow hat sein Zeugnis verloren.', 'Der Kurs A2 hat schon begonnen.'],
              answer: 0,
              explanationRu: '«Sie haben die Prüfung A1 bestanden!» — он сдал экзамен.',
            },
            {
              kind: 'mc',
              question: 'Wann kann Herr Morosow das Zeugnis abholen?',
              options: ['Ab Montag', 'Am Freitag', 'Am 3. April'],
              answer: 0,
              explanationRu: '«Sie können es ab Montag im Büro abholen» — с понедельника.',
            },
            {
              kind: 'mc',
              question: 'Wann ist der Kurs A2?',
              options: ['Am Montag und am Donnerstag', 'Am Dienstag und am Freitag', 'Jeden Tag von 9 bis 13 Uhr'],
              answer: 1,
              explanationRu: '«Er ist am Dienstag und am Freitag» — с 9 до 13 открыт офис, а не курс.',
            },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Herr Morosow soll Frau Brandt bis Freitag anrufen.', answer: true, explanationRu: '«Dann rufen Sie mich bitte bis Freitag an» — позвонить нужно до пятницы.' },
          ],
        },
      ],
    },
    {
      title: 'Was hast du früher gemacht?',
      kind: 'dialog',
      speakers: { A: 'Maria', B: 'Dmitri' },
      situation: 'Zwei Kursteilnehmer sprechen in der Pause.',
      text: `A: Sag mal, Dmitri, was hast du eigentlich früher gemacht?
B: Ich habe lange als Lkw-Fahrer gearbeitet. Ich bin durch ganz Europa gefahren.
A: Wirklich? Das ist ja interessant! Wo bist du überall gewesen?
B: In Polen, in Ungarn, in Italien und oft in Deutschland. Und du, Maria?
A: Ich habe in Charkiw Medizin studiert und dann als Ärztin gearbeitet. Aber hier in Deutschland habe ich noch keine Stelle gefunden.
B: Warum nicht?
A: Ich muss hier noch eine Prüfung machen. Sie ist im Oktober.
B: Dann viel Glück! Lernst du viel?
A: Ja, jeden Tag drei Stunden.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Dmitri war früher Lkw-Fahrer.', answer: true, explanationRu: '«Ich habe lange als Lkw-Fahrer gearbeitet» — он был водителем грузовика.' },
            { kind: 'tf', statement: 'Dmitri ist nie in Italien gewesen.', answer: false, explanationRu: 'Он перечисляет: «In Polen, in Ungarn, in Italien …» — в Италии он был.' },
            { kind: 'tf', statement: 'Maria hat Medizin studiert.', answer: true, explanationRu: '«Ich habe in Charkiw Medizin studiert».' },
            { kind: 'tf', statement: 'Maria arbeitet in Deutschland als Ärztin.', answer: false, explanationRu: '«hier in Deutschland habe ich noch keine Stelle gefunden» — работы у неё пока нет.' },
            { kind: 'tf', statement: 'Marias Prüfung ist im Oktober.', answer: true, explanationRu: '«Sie ist im Oktober» — экзамен в октябре.' },
          ],
        },
      ],
    },
  ],
};
