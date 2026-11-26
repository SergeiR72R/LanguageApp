import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich trinke einen Kaffee, wenn ich müde ___.',
      options: ['bin', 'ist', 'bist', 'sind'],
      answer: 0,
      explanationRu: 'Подлежащее — ich, поэтому ich bin. Глагол стоит в конце части с wenn.',
    },
    {
      type: 'choice',
      prompt: '___ du Hilfe brauchst, ruf mich an.',
      options: ['Wenn', 'Wann', 'Was'],
      answer: 0,
      explanationRu: 'Это условие «если тебе нужна помощь», глагол brauchst в конце — нужен союз wenn. wann — только вопрос «когда?».',
    },
    {
      type: 'choice',
      audio: 'Wenn ich Spätschicht habe, schlafe ich lange.',
      prompt: 'Послушайте. Что делает человек, когда у него вечерняя смена?',
      options: ['Долго спит.', 'Рано встаёт.', 'Работает сверхурочно.'],
      answer: 0,
      explanationRu: '«Wenn ich Spätschicht habe, schlafe ich lange» — когда у меня вечерняя смена, я долго сплю.',
    },
    {
      type: 'gap',
      prompt: 'Wenn der Chef krank ___, gibt es keine Besprechung.',
      answers: ['ist'],
      explanationRu: 'В части с wenn глагол стоит в конце: wenn der Chef krank ist.',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich morgen früh ___, rufe ich dich an.',
      answers: ['aufstehe'],
      hintRu: 'aufstehen',
      explanationRu: 'В придаточном предложении отделяемый глагол не разделяется: wenn ich aufstehe (а в обычном предложении: Ich stehe auf).',
    },
    {
      type: 'gap',
      prompt: 'Wenn du morgen nicht kommen ___, schreib mir bitte eine SMS.',
      answers: ['kannst'],
      hintRu: 'können',
      explanationRu: 'Модальный глагол стоит в самом конце части с wenn: nicht kommen kannst.',
    },
    {
      type: 'choice',
      prompt: 'Wenn es heute regnet, ___',
      options: ['nehme ich den Bus.', 'ich nehme den Bus.', 'den Bus ich nehme.'],
      answer: 0,
      explanationRu: 'Часть с wenn стоит на первом месте, поэтому дальше сразу идёт глагол: «…, nehme ich den Bus».',
    },
    {
      type: 'gap',
      audio: 'Wenn ich Überstunden mache, bekomme ich mehr Geld.',
      prompt: 'Послушайте и допишите: Er bekommt mehr Geld, wenn er ___ macht.',
      answers: ['Überstunden', 'Uberstunden', 'Ueberstunden'],
      explanationRu: '«Wenn ich Überstunden mache, bekomme ich mehr Geld» — когда я работаю сверхурочно, я получаю больше денег.',
    },
    {
      type: 'gap',
      prompt: 'Was machst du, wenn du Feierabend ___?',
      answers: ['hast'],
      explanationRu: 'du hast; глагол стоит в конце части с wenn. Обратите внимание: в вопросе может быть и часть с wenn.',
    },
    {
      type: 'order',
      words: ['Ich', 'komme', 'zu', 'spät,', 'wenn', 'der', 'Bus', 'nicht', 'kommt.'],
      translationRu: 'Я опоздаю, если автобус не придёт.',
      explanationRu: 'Сначала главное предложение, потом запятая и часть с wenn. В ней глагол kommt стоит в конце, nicht — перед ним.',
    },
    {
      type: 'order',
      words: ['Wenn', 'die', 'Arbeit', 'fertig', 'ist,', 'gehen', 'wir', 'nach', 'Hause.'],
      translationRu: 'Когда работа будет готова, мы пойдём домой.',
      explanationRu: 'Часть с wenn — на первом месте (ist в конце), затем сразу глагол gehen и только потом wir.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: [
        'Wenn ich Zeit habe, ich lese die Zeitung.',
        'Wenn ich Zeit habe, lese ich die Zeitung.',
        'Wenn ich habe Zeit, lese ich die Zeitung.',
      ],
      answer: 1,
      explanationRu: 'Правильно: глагол habe — в конце части с wenn, а вторая часть начинается с глагола lese. Модель «…habe, lese…».',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью wenn. Начните с Wenn.',
      prompt: 'Ich bin krank. Ich bleibe zu Hause.',
      answers: ['Wenn ich krank bin, bleibe ich zu Hause.', 'Wenn ich krank bin, dann bleibe ich zu Hause.'],
      explanationRu: 'bin уходит в конец части с wenn, вторая часть начинается с глагола: «…, bleibe ich zu Hause».',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью wenn. Начните с главного предложения (Ich …).',
      prompt: 'Ich gehe spazieren. Das Wetter ist schön.',
      answers: ['Ich gehe spazieren, wenn das Wetter schön ist.'],
      explanationRu: 'Главное предложение остаётся без изменений, а во второй части глагол ist стоит в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью wenn. Начните с Wenn.',
      prompt: 'Der Kurs fängt an. Ich mache das Handy aus.',
      answers: ['Wenn der Kurs anfängt, mache ich das Handy aus.', 'Wenn der Kurs anfängt, dann mache ich das Handy aus.'],
      explanationRu: 'В части с wenn отделяемый глагол собирается в конце: anfängt. Во второй части: mache … aus.',
    },
    {
      type: 'choice',
      audio: 'Wann beginnt das Vorstellungsgespräch? – Um zehn Uhr.',
      prompt: 'Послушайте. Когда начинается собеседование?',
      options: ['В 10:00', 'В 12:00', 'В 9:00'],
      answer: 0,
      explanationRu: '«Um zehn Uhr» — в десять часов. Обратите внимание: вопрос начинается с wann (когда?).',
    },
    {
      type: 'gap',
      audio: 'Bewerbung',
      prompt: 'Напишите слово, которое слышите (без артикля): ___',
      answers: ['Bewerbung'],
      explanationRu: 'die Bewerbung — заявление о приёме на работу. «w» читается как русское «в», «e» перед r — как «э»: бэ-ВЭР-бунг.',
    },
    {
      type: 'gap',
      prompt: 'Ich komme heute nicht zur Arbeit, weil ich krank ___.',
      answers: ['bin'],
      explanationRu: 'Повторение (юнит 3): после weil глагол тоже стоит в конце — weil ich krank bin.',
    },
    {
      type: 'choice',
      prompt: 'Ich glaube, dass die neue Arbeit ___ gefällt.',
      options: ['mir', 'mich', 'ich'],
      answer: 0,
      explanationRu: 'Повторение (юнит 9): gefallen требует дательного падежа — mir. После dass глагол gefällt стоит в конце.',
    },
    {
      type: 'gap',
      prompt: 'Die neue Stelle ist ___ als die alte.',
      answers: ['besser'],
      hintRu: 'gut, сравнительная степень',
      explanationRu: 'Повторение (юнит 8): gut — besser — am besten. После сравнительной степени — als.',
    },
  ],
  reading: [
    {
      title: 'Jobs in der Stadt',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Bäckerei Krüger',
          body: 'Wir suchen ab sofort eine freundliche Verkäuferin oder einen freundlichen Verkäufer in Teilzeit (20 Stunden pro Woche). Arbeitszeit: Montag bis Freitag von 8 bis 12 Uhr. Erfahrung ist nicht nötig. Tel. 0511 / 34 22 18',
        },
        {
          label: 'b',
          heading: 'Hotel am Park',
          body: 'Wir suchen Reinigungskräfte für unsere Zimmer. Arbeitszeit: nur am Wochenende, Samstag und Sonntag von 9 bis 15 Uhr. Gute Bezahlung! Kommen Sie mit Ihren Unterlagen an die Rezeption.',
        },
        {
          label: 'c',
          heading: 'Lager Nord GmbH',
          body: 'Lagerarbeiter (m/w/d) in Vollzeit gesucht. Wir arbeiten in drei Schichten: Frühschicht, Spätschicht und Nachtschicht. Sie haben einen Führerschein? Super! Bewerbung bitte per E-Mail.',
        },
        {
          label: 'd',
          heading: 'Restaurant Adria',
          body: 'Wir suchen eine Aushilfe für die Küche, am Freitag- und Samstagabend von 18 bis 23 Uhr. Sie sprechen Deutsch und Italienisch? Dann rufen Sie uns an!',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt zu welcher Person? Für eine Person gibt es keine passende Anzeige.',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит какому человеку? Для одного человека подходящего объявления нет.',
          options: ['a: Bäckerei Krüger', 'b: Hotel am Park', 'c: Lager Nord GmbH', 'd: Restaurant Adria'],
          allowNone: true,
          items: [
            {
              kind: 'match',
              prompt: 'Olga hat zwei kleine Kinder. Sie kann nur am Vormittag arbeiten, wenn die Kinder im Kindergarten sind.',
              answer: 0,
              explanationRu: 'Пекарня: с понедельника по пятницу с 8 до 12 — это утро, когда дети в детском саду.',
            },
            {
              kind: 'match',
              prompt: 'Herr Kaya möchte viele Stunden arbeiten. Er hat einen Führerschein und kann auch nachts arbeiten.',
              answer: 2,
              explanationRu: 'Склад: полный рабочий день (Vollzeit), есть ночная смена, водительские права — плюс.',
            },
            {
              kind: 'match',
              prompt: 'Lisa studiert von Montag bis Freitag. Sie möchte nur am Wochenende am Tag arbeiten.',
              answer: 1,
              explanationRu: 'Отель: только суббота и воскресенье с 9 до 15 — днём на выходных. Ресторан не подходит: там вечер и пятница.',
            },
            {
              kind: 'match',
              prompt: 'Marco kommt aus Italien. Er kocht gern und kann nur abends arbeiten.',
              answer: 3,
              explanationRu: 'Ресторан «Адрия»: работа на кухне вечером, нужен итальянский язык.',
            },
            {
              kind: 'match',
              prompt: 'Pavel sucht eine Stelle im Büro. Er arbeitet gern am Computer.',
              answer: -1,
              explanationRu: 'Ни одно объявление не предлагает работу в офисе — подходящего объявления нет.',
            },
          ],
        },
      ],
    },
    {
      title: 'Neue Arbeitszeiten',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Frau Schneider,

ab nächster Woche gibt es in unserer Abteilung neue Arbeitszeiten. Wenn Sie Frühschicht haben, beginnen Sie um 6 Uhr und haben um 14 Uhr Feierabend. Die Spätschicht beginnt um 14 Uhr und endet um 22 Uhr. Den neuen Plan finden Sie im Anhang.

Wenn Sie an einem Tag nicht arbeiten können, sprechen Sie bitte direkt mit Herrn Lang. Er macht jetzt die Schichtpläne. Bitte tauschen Sie Ihre Schicht nicht ohne ihn.

Noch etwas: Am Freitag um 15 Uhr haben wir eine Besprechung in Raum 204. Danach feiern wir den Geburtstag von Frau Özdemir in der Kantine. Wenn Sie möchten, können Sie einen Kuchen mitbringen.

Viele Grüße
Monika Hartmann`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Die Frühschicht endet um 14 Uhr.', answer: true, explanationRu: '«…beginnen Sie um 6 Uhr und haben um 14 Uhr Feierabend».' },
            { kind: 'tf', statement: 'Herr Lang macht jetzt die Schichtpläne.', answer: true, explanationRu: '«Er macht jetzt die Schichtpläne» — графики смен теперь составляет господин Ланг.' },
            {
              kind: 'tf',
              statement: 'Frau Schneider darf ihre Schicht allein mit einer Kollegin tauschen.',
              answer: false,
              explanationRu: '«Bitte tauschen Sie Ihre Schicht nicht ohne ihn» — меняться сменами можно только через господина Ланга.',
            },
            { kind: 'tf', statement: 'Die Besprechung ist am Freitagvormittag.', answer: false, explanationRu: 'Совещание в пятницу в 15 часов — это после обеда, а не утром.' },
            {
              kind: 'tf',
              statement: 'Alle Kollegen müssen einen Kuchen mitbringen.',
              answer: false,
              explanationRu: '«Wenn Sie möchten, können Sie einen Kuchen mitbringen» — можно, если хочется, но не обязательно.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Einladung zum Vorstellungsgespräch',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Guten Tag, Herr Morozov, hier ist Sabine Keller von der Firma Becker Logistik. Vielen Dank für Ihre Bewerbung. Wir möchten Sie gern zu einem Vorstellungsgespräch einladen. Haben Sie am Mittwoch, dem 12. Mai, um 10 Uhr Zeit? Das Gespräch dauert ungefähr eine Stunde. Bitte bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit. Unsere Adresse ist Hafenstraße 8. Wenn Sie mit dem Bus kommen, nehmen Sie die Linie 34 bis zur Haltestelle „Hafen“. Wenn der Termin nicht passt, rufen Sie mich bitte zurück. Meine Nummer ist 0421 55 63 70. Vielen Dank und bis bald!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wann ist das Vorstellungsgespräch?',
              options: ['Am Mittwoch um 10 Uhr', 'Am Montag um 10 Uhr', 'Am Mittwoch um 12 Uhr'],
              answer: 0,
              explanationRu: '«am Mittwoch, dem 12. Mai, um 10 Uhr» — 12 — это число месяца, а не время.',
            },
            {
              kind: 'mc',
              question: 'Was soll Herr Morozov mitbringen?',
              options: ['Seinen Pass', 'Seinen Lebenslauf und seine Zeugnisse', 'Ein Foto'],
              answer: 1,
              explanationRu: '«Bitte bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit».',
            },
            {
              kind: 'mc',
              question: 'Wie kommt man mit dem Bus zur Firma?',
              options: ['Mit der Linie 8', 'Mit der Linie 34', 'Mit der Linie 12'],
              answer: 1,
              explanationRu: '«…nehmen Sie die Linie 34 bis zur Haltestelle „Hafen“». 8 — номер дома.',
            },
            {
              kind: 'mc',
              question: 'Was soll Herr Morozov machen, wenn er am Mittwoch keine Zeit hat?',
              options: ['Eine E-Mail schreiben', 'Frau Keller anrufen', 'Einfach am Donnerstag kommen'],
              answer: 1,
              explanationRu: '«Wenn der Termin nicht passt, rufen Sie mich bitte zurück» — нужно перезвонить фрау Келлер.',
            },
          ],
        },
      ],
    },
    {
      title: 'Nachtschicht',
      kind: 'dialog',
      speakers: { A: 'Anja', B: 'Dmitri' },
      situation: 'Zwei Freunde treffen sich auf der Straße.',
      text: `A: Hallo Dmitri! Du siehst müde aus. Was ist los?
B: Ich habe diese Woche Nachtschicht. Ich arbeite von 22 bis 6 Uhr.
A: Oh je. Und wann schläfst du?
B: Wenn ich nach Hause komme, frühstücke ich kurz und dann schlafe ich bis zwei Uhr.
A: Und gefällt dir die Arbeit?
B: Die Arbeit ist okay, und in der Nacht verdiene ich mehr Geld. Aber ich sehe meine Familie zu wenig.
A: Kannst du nicht nur Frühschicht machen?
B: Leider nicht. Aber nächsten Monat bekomme ich eine neue Stelle im Büro. Dann arbeite ich nur am Tag, von acht bis halb fünf.
A: Super! Das freut mich für dich.
B: Danke! Wenn ich die neue Stelle habe, feiern wir zusammen, okay?`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Dmitri arbeitet diese Woche in der Nacht.', answer: true, explanationRu: '«Ich habe diese Woche Nachtschicht» — на этой неделе у него ночная смена.' },
            {
              kind: 'tf',
              statement: 'Wenn Dmitri nach Hause kommt, geht er sofort ins Bett.',
              answer: false,
              explanationRu: 'Сначала он коротко завтракает, а потом спит: «frühstücke ich kurz und dann schlafe ich».',
            },
            { kind: 'tf', statement: 'In der Nacht verdient Dmitri mehr Geld.', answer: true, explanationRu: '«in der Nacht verdiene ich mehr Geld».' },
            { kind: 'tf', statement: 'Dmitri sieht seine Familie oft.', answer: false, explanationRu: '«Aber ich sehe meine Familie zu wenig» — он видит семью слишком редко.' },
            {
              kind: 'tf',
              statement: 'Mit der neuen Stelle arbeitet Dmitri nur am Tag.',
              answer: true,
              explanationRu: '«Dann arbeite ich nur am Tag, von acht bis halb fünf».',
            },
          ],
        },
      ],
    },
  ],
};
