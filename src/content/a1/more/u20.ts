import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Wann beginnt der Kurs?', 'Wann der Kurs beginnt?', 'Wann der Kurs beginnen?'],
      answer: 0,
      explanationRu: 'В W-вопросе глагол стоит сразу после вопросительного слова: Wann beginnt …?',
    },
    {
      type: 'choice',
      prompt: '___ du mir bitte helfen?',
      options: ['Kannst', 'Können', 'Kann'],
      answer: 0,
      explanationRu: 'Подлежащее du → форма kannst. Вежливая просьба: Kannst du mir bitte helfen?',
    },
    {
      type: 'choice',
      prompt: 'Bitte ___ Sie hier!',
      options: ['unterschreiben', 'unterschreibst', 'unterschreibt'],
      answer: 0,
      explanationRu: 'Императив с Sie = инфинитив + Sie: Bitte unterschreiben Sie hier!',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Morgen habe ich eine Prüfung.', 'Morgen ich habe eine Prüfung.', 'Morgen eine Prüfung ich habe.'],
      answer: 0,
      explanationRu: 'Глагол в утверждении всегда на 2-м месте. Если на 1-м месте Morgen, подлежащее ich идёт после глагола.',
    },
    {
      type: 'gap',
      prompt: '___ kommen Sie? – Aus Russland.',
      answers: ['Woher'],
      explanationRu: 'Ответ «Aus Russland» (откуда) → вопрос Woher kommen Sie?',
    },
    {
      type: 'gap',
      prompt: '___ kostet die Fahrkarte? – Drei Euro.',
      answers: ['Was', 'Wie viel', 'Wieviel'],
      explanationRu: 'О цене спрашивают: Was kostet …? или Wie viel kostet …?',
    },
    {
      type: 'gap',
      prompt: '___ Sie Kinder? – Ja, zwei.',
      answers: ['Haben'],
      explanationRu: 'Вопрос «да/нет»: глагол haben на 1-м месте, форма для Sie — haben.',
    },
    {
      type: 'gap',
      prompt: 'Der Kurs fängt um neun Uhr ___.',
      answers: ['an'],
      hintRu: 'anfangen',
      explanationRu: 'anfangen — отделяемый глагол: fängt стоит на 2-м месте, приставка an — в конце (рамка).',
    },
    {
      type: 'gap',
      prompt: 'Ich ___ das Formular gestern ausgefüllt.',
      answers: ['habe'],
      explanationRu: 'Повторение (юнит 17): перфект с haben — ich habe … ausgefüllt.',
    },
    {
      type: 'gap',
      prompt: 'Ich fahre mit ___ Bus zur Prüfung.',
      answers: ['dem'],
      explanationRu: 'Повторение (юнит 14): после mit всегда Dativ. der Bus → mit dem Bus.',
    },
    {
      type: 'gap',
      prompt: 'Für die Prüfung brauche ich ___ Kugelschreiber.',
      answers: ['einen', 'den'],
      hintRu: 'der Kugelschreiber',
      explanationRu: 'Повторение (юнит 8): brauchen + Akkusativ. der Kugelschreiber → einen (den) Kugelschreiber.',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте из утверждения вопрос «да/нет».',
      prompt: 'Sie sprechen Englisch.',
      answers: ['Sprechen Sie Englisch?'],
      explanationRu: 'В вопросе «да/нет» глагол переходит на 1-е место: Sprechen Sie Englisch?',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте вежливую просьбу с «Können Sie bitte …?»',
      prompt: 'Wiederholen Sie das!',
      answers: ['Können Sie das bitte wiederholen?', 'Können Sie bitte das wiederholen?'],
      explanationRu: 'Können на 1-м месте, инфинитив wiederholen — в конце (рамка). Так просьба звучит вежливее, чем императив.',
    },
    {
      type: 'order',
      words: ['Wo', 'bekomme', 'ich', 'ein', 'Formular?'],
      translationRu: 'Где я могу получить анкету?',
      explanationRu: 'W-вопрос: Wo, потом глагол bekomme, потом подлежащее ich.',
    },
    {
      type: 'order',
      words: ['Bitte', 'schreiben', 'Sie', 'Ihren', 'Namen', 'hier.'],
      translationRu: 'Пожалуйста, напишите здесь своё имя.',
      explanationRu: 'Императив с Sie: глагол schreiben, потом Sie. bitte может стоять в начале.',
    },
    {
      type: 'choice',
      audio: 'Achtung, bitte! Der Zug nach München fährt heute von Gleis fünf.',
      prompt: 'С какого пути отправляется поезд?',
      options: ['Gleis 5', 'Gleis 15', 'Gleis 3'],
      answer: 0,
      explanationRu: '«von Gleis fünf» — с пятого пути. 15 было бы fünfzehn.',
    },
    {
      type: 'gap',
      audio: 'Meine Telefonnummer ist null, eins, sieben, sechs, drei, vier, fünf, acht, neun.',
      prompt: 'Напишите номер телефона цифрами (без пробелов): ___',
      answers: ['017634589', '0176 34589', '0176 345 89'],
      explanationRu: 'Номер диктуют по одной цифре: 0-1-7-6-3-4-5-8-9.',
    },
    {
      type: 'gap',
      audio: 'Das Geschäft ist heute bis achtzehn Uhr geöffnet.',
      prompt: 'До какого часа открыт магазин? ___ Uhr',
      answers: ['18', '18.00', '18:00'],
      explanationRu: '«bis achtzehn Uhr geöffnet» — открыт до 18 часов.',
    },
    {
      type: 'choice',
      audio: 'Hallo Maria, hier ist Ben. Ich komme heute nicht zum Kurs, denn ich bin krank.',
      prompt: 'Почему Бен не придёт на курс?',
      options: ['Он болен', 'Он работает', 'У него нет времени'],
      answer: 0,
      explanationRu: '«denn ich bin krank» — потому что я болен.',
    },
    {
      type: 'choice',
      audio: 'Bitte nicht rauchen!',
      prompt: 'Что означает эта табличка?',
      options: ['Курить нельзя', 'Здесь можно курить', 'Не шуметь'],
      answer: 0,
      explanationRu: 'rauchen — курить. «Bitte nicht rauchen!» — пожалуйста, не курите.',
    },
  ],
  reading: [
    {
      title: 'Schilder in der Stadt',
      textType: 'Schilder und Aushänge',
      texts: [
        { label: 'a', heading: 'Arztpraxis Dr. Lange', body: 'Sprechstunde: Montag bis Freitag 8–12 Uhr, Dienstag und Donnerstag auch 15–18 Uhr.' },
        { label: 'b', heading: 'Liebe Kunden!', body: 'Unser Aufzug ist heute außer Betrieb. Bitte nehmen Sie die Treppe. Danke!' },
        { label: 'c', heading: 'Sprachschule Lingua', body: 'Anmeldung für die Deutschkurse: 2. Stock, Zimmer 204.' },
        { label: 'd', heading: 'Bäckerei Kraus', body: 'Montag Ruhetag. Dienstag bis Samstag 6.30–18 Uhr, Sonntag 7–11 Uhr.' },
        { label: 'e', heading: 'Parkplatz', body: 'Nur für Kunden vom Supermarkt Frisch. Parken bitte maximal zwei Stunden.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Schilder. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте таблички. Утверждения верны или неверны?',
          items: [
            { kind: 'tf', statement: 'a) Man kann am Dienstagnachmittag zum Arzt gehen.', answer: true, explanationRu: 'Во вторник и четверг приём есть и с 15 до 18 часов, то есть после обеда.' },
            { kind: 'tf', statement: 'b) Sie können heute mit dem Aufzug fahren.', answer: false, explanationRu: '«außer Betrieb» — лифт сегодня не работает, нужно идти по лестнице.' },
            { kind: 'tf', statement: 'c) Die Anmeldung für die Deutschkurse ist im Erdgeschoss.', answer: false, explanationRu: 'Регистрация — во 2. Stock (по-русски третий этаж), а не на первом этаже (Erdgeschoss).' },
            { kind: 'tf', statement: 'd) Die Bäckerei ist am Sonntag geöffnet.', answer: true, explanationRu: 'В воскресенье пекарня работает с 7 до 11 часов.' },
            { kind: 'tf', statement: 'd) Am Montag kann man bei Bäckerei Kraus Brot kaufen.', answer: false, explanationRu: '«Montag Ruhetag» — в понедельник пекарня закрыта.' },
            { kind: 'tf', statement: 'e) Kunden vom Supermarkt können hier den ganzen Tag parken.', answer: false, explanationRu: '«maximal zwei Stunden» — парковаться можно не больше двух часов.' },
          ],
        },
      ],
    },
    {
      title: 'Kleinanzeigen',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', heading: 'Deutsch am Samstag', body: 'Neuer Deutschkurs für Anfänger! Jeden Samstag von 10 bis 13 Uhr. Preis: 80 Euro für 8 Wochen. Tel. 0341 223344.' },
        { label: 'b', heading: 'Fahrrad zu verkaufen', body: 'Damenfahrrad, gebraucht, blau, zwei Jahre alt. Nur 120 Euro! Bitte ab 18 Uhr anrufen: 0176 9988776.' },
        { label: 'c', heading: 'Zimmer frei', body: 'Kleines Zimmer, 14 m², nah am Bahnhof. 350 Euro im Monat. Nur für Nichtraucher!' },
        { label: 'd', heading: 'Hilfe im Garten gesucht', body: 'Ich bin 82 Jahre alt und brauche Hilfe im Garten, zweimal pro Woche am Vormittag. 12 Euro pro Stunde. Frau Busch, Tel. 0341 556677.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt? Für eine Situation gibt es keine Anzeige.',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит к ситуации? Для одной ситуации подходящего объявления нет.',
          options: ['Deutsch am Samstag', 'Fahrrad zu verkaufen', 'Zimmer frei', 'Hilfe im Garten gesucht'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Sie arbeiten von Montag bis Freitag und möchten am Wochenende Deutsch lernen.', answer: 0, explanationRu: 'Курс «Deutsch am Samstag» проходит по субботам — это выходные.' },
            { kind: 'match', prompt: 'Sie suchen eine große Wohnung für Ihre Familie.', answer: -1, explanationRu: 'В объявлении c) только маленькая комната (kleines Zimmer, 14 м²) — для семьи не подходит. Подходящего объявления нет.' },
            { kind: 'match', prompt: 'Sie haben vormittags Zeit und möchten Geld verdienen.', answer: 3, explanationRu: 'Фрау Буш ищет помощника в саду утром (am Vormittag) и платит 12 евро в час.' },
            { kind: 'match', prompt: 'Ihre Frau braucht ein Fahrrad.', answer: 1, explanationRu: 'Damenfahrrad — женский велосипед за 120 евро.' },
            { kind: 'match', prompt: 'Sie rauchen nicht und suchen ein Zimmer.', answer: 2, explanationRu: 'Комната сдаётся только некурящим (nur für Nichtraucher) — подходит.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Durchsage am Bahnhof',
      kind: 'monolog',
      situation: 'Sie hören eine Durchsage am Bahnhof.',
      text: 'Achtung an Gleis vier! Der Zug nach Dresden, Abfahrt zehn Uhr fünfzehn, kommt heute zwanzig Minuten später. Achtung: Der Zug fährt heute von Gleis sieben. Ich wiederhole: Der Zug nach Dresden fährt heute von Gleis sieben. Wir bitten um Entschuldigung.',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Durchsage. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Послушайте объявление. Утверждения верны или неверны?',
          items: [
            { kind: 'tf', statement: 'Der Zug nach Dresden fährt pünktlich.', answer: false, explanationRu: '«kommt heute zwanzig Minuten später» — поезд опаздывает на 20 минут.' },
            { kind: 'tf', statement: 'Der Zug fährt heute von Gleis sieben.', answer: true, explanationRu: 'Объявление дважды повторяет: «von Gleis sieben».' },
          ],
        },
        {
          instructionDe: 'Hören Sie noch einmal. Wählen Sie die richtige Lösung.',
          instructionRu: 'Послушайте ещё раз. Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Wann ist die Abfahrt nach Plan?', options: ['10.15 Uhr', '10.50 Uhr', '10.20 Uhr'], answer: 0, explanationRu: '«Abfahrt zehn Uhr fünfzehn» — отправление по расписанию в 10:15.' },
          ],
        },
      ],
    },
    {
      title: 'Eine Nachricht von der Sprachschule',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Guten Tag, Frau Iwanowa, hier ist Petra Lang von der Sprachschule Lingua. Ihre Prüfung Start Deutsch 1 ist am Freitag, dem 12. März. Die Prüfung beginnt um neun Uhr. Bitte kommen Sie schon um halb neun. Bringen Sie bitte Ihren Pass und einen Kugelschreiber mit. Haben Sie noch Fragen? Dann rufen Sie mich bitte zurück: null drei vier eins, vier vier, fünf fünf, sechs sechs. Vielen Dank und auf Wiederhören!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Послушайте сообщение. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann ist die Prüfung?', options: ['Am Freitag', 'Am Donnerstag', 'Am Samstag'], answer: 0, explanationRu: '«am Freitag, dem 12. März» — в пятницу.' },
            { kind: 'mc', question: 'Wann soll Frau Iwanowa kommen?', options: ['Um 8.30 Uhr', 'Um 9.00 Uhr', 'Um 9.30 Uhr'], answer: 0, explanationRu: 'Экзамен в девять, но прийти нужно в половине девятого: «um halb neun» = 8:30.' },
            { kind: 'mc', question: 'Was soll sie mitbringen?', options: ['Pass und Kugelschreiber', 'Foto und Pass', 'Formular und Kugelschreiber'], answer: 0, explanationRu: '«Bringen Sie bitte Ihren Pass und einen Kugelschreiber mit.»' },
          ],
        },
      ],
    },
  ],
};
