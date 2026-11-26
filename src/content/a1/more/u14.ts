import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich fahre mit ___ Auto.',
      options: ['dem', 'der', 'den'],
      answer: 0,
      explanationRu: 'das Auto — средний род. После mit: das → dem.',
    },
    {
      type: 'choice',
      prompt: 'Olga kommt ___ der Ukraine.',
      options: ['aus', 'nach', 'zu'],
      answer: 0,
      explanationRu: 'Откуда человек родом — aus: aus Russland, aus der Ukraine.',
    },
    {
      type: 'choice',
      audio: 'Wir fahren mit der Straßenbahn.',
      prompt: 'На чём они едут?',
      options: ['на трамвае', 'на метро', 'на автобусе'],
      answer: 0,
      explanationRu: 'die Straßenbahn — трамвай. После mit: mit der Straßenbahn.',
    },
    {
      type: 'choice',
      prompt: 'Der Bus fährt ___ Zentrum.',
      options: ['zum', 'zur', 'nach'],
      answer: 0,
      explanationRu: 'das Zentrum — средний род: zu + dem = zum Zentrum. nach — только для городов и стран без артикля.',
    },
    {
      type: 'choice',
      prompt: 'Im Sommer fahren wir ___ Österreich.',
      options: ['nach', 'zu', 'bei'],
      answer: 0,
      explanationRu: 'Österreich — страна без артикля, поэтому nach Österreich.',
    },
    {
      type: 'gap',
      prompt: 'Ich habe kein Auto. Ich gehe ___ Fuß.',
      answers: ['zu'],
      explanationRu: '«Пешком» — zu Fuß. Не «mit dem Fuß»!',
    },
    {
      type: 'gap',
      prompt: 'Wie komme ich ___ Haltestelle?',
      answers: ['zur'],
      explanationRu: 'die Haltestelle — женский род: zu + der = zur Haltestelle.',
    },
    {
      type: 'gap',
      prompt: 'Ich komme gerade ___ Arzt.',
      answers: ['vom'],
      hintRu: 'von + dem',
      explanationRu: 'der Arzt — мужской род: von + dem = vom Arzt (иду от врача).',
    },
    {
      type: 'gap',
      prompt: 'Wir fahren mit ___ Kindern nach Rom.',
      answers: ['den'],
      explanationRu: 'Множественное число в дательном падеже: den + слово на -n: mit den Kindern.',
    },
    {
      type: 'gap',
      prompt: 'Ich fahre mit ___ Mann nach Wien.',
      answers: ['meinem'],
      hintRu: 'mein',
      explanationRu: 'der Mann — мужской род. После mit: mein → meinem.',
    },
    {
      type: 'gap',
      audio: 'Fahrkarte',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Fahrkarte'],
      explanationRu: 'die Fahrkarte — билет. ah читается как долгое «а:».',
    },
    {
      type: 'gap',
      audio: 'Der Bus Nummer dreiundvierzig fährt zum Bahnhof.',
      prompt: 'Какой номер у автобуса? Напишите цифрами: ___',
      answers: ['43'],
      explanationRu: 'dreiundvierzig = drei + und + vierzig = 43. В немецком сначала единицы, потом десятки.',
    },
    {
      type: 'choice',
      audio: 'Der Zug aus München hat zwanzig Minuten Verspätung.',
      prompt: 'Что с поездом из Мюнхена?',
      options: ['опаздывает на 20 минут', 'опаздывает на 10 минут', 'приходит вовремя'],
      answer: 0,
      explanationRu: 'zwanzig Minuten Verspätung — опоздание на двадцать минут.',
    },
    {
      type: 'choice',
      audio: 'Sie müssen in Frankfurt umsteigen.',
      prompt: 'Что нужно сделать во Франкфурте?',
      options: ['сделать пересадку', 'купить билет', 'взять такси'],
      answer: 0,
      explanationRu: 'umsteigen — делать пересадку.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените der Bus на die U-Bahn.',
      prompt: 'Ich fahre mit dem Bus.',
      answers: ['Ich fahre mit der U-Bahn.'],
      explanationRu: 'die U-Bahn — женский род, поэтому после mit: der U-Bahn.',
    },
    {
      type: 'order',
      words: ['Wann', 'kommt', 'der', 'Zug', 'in', 'Bonn', 'an?'],
      translationRu: 'Когда поезд прибывает в Бонн?',
      explanationRu: 'ankommen — отделяемый глагол: kommt на втором месте, an в самом конце.',
    },
    {
      type: 'order',
      words: ['Gehst', 'du', 'heute', 'zum', 'Arzt?'],
      translationRu: 'Ты сегодня идёшь к врачу?',
      explanationRu: 'Вопрос без вопросительного слова начинается с глагола. zum Arzt = zu dem Arzt.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (юнит 13): Herr Müller, ___ Sie bitte hier aus!',
      options: ['steigen', 'steig', 'steigt'],
      answer: 0,
      explanationRu: 'Императив на Sie: Steigen Sie … aus! Приставка aus уходит в конец.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (юнит 11): Er ___ jeden Tag mit dem Rad.',
      options: ['fährt', 'fahrt', 'fahrst'],
      answer: 0,
      explanationRu: 'fahren меняет гласную у du и er/sie/es: du fährst, er fährt.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (юнит 12): Wir ___ in Kassel umsteigen.',
      options: ['müssen', 'muss', 'müsst'],
      answer: 0,
      explanationRu: 'müssen: wir müssen. Второй глагол (umsteigen) стоит в конце целиком.',
    },
  ],
  reading: [
    {
      title: 'Eine E-Mail von Oma',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Sofia,

ich komme am Freitag nach Berlin! Ich fahre mit dem Zug von Rostock. Der Zug fährt um 8.10 Uhr ab und kommt um 10.45 Uhr am Hauptbahnhof an. Ich muss nicht umsteigen. Kannst du zum Bahnhof kommen? Mein Koffer ist sehr schwer. Dann fahren wir zusammen mit dem Taxi nach Hause.

Bis Freitag!
Deine Oma Erika`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Oma fährt mit dem Bus nach Berlin.', answer: false, explanationRu: '«Ich fahre mit dem Zug» — бабушка едет на поезде.' },
            { kind: 'tf', statement: 'Der Zug kommt um 10.45 Uhr in Berlin an.', answer: true, explanationRu: '«…kommt um 10.45 Uhr am Hauptbahnhof an».' },
            { kind: 'tf', statement: 'Oma muss in Hamburg umsteigen.', answer: false, explanationRu: '«Ich muss nicht umsteigen» — пересадки нет.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was möchte Oma?',
              options: ['Sofia kommt zum Bahnhof.', 'Sofia kauft eine Fahrkarte.', 'Sofia fährt nach Rostock.'],
              answer: 0,
              explanationRu: '«Kannst du zum Bahnhof kommen? Mein Koffer ist sehr schwer» — бабушка просит встретить её на вокзале.',
            },
          ],
        },
      ],
    },
    {
      title: 'Am Hauptbahnhof',
      textType: 'Schilder',
      texts: [
        { label: 'a', body: 'Fahrkarten gibt es am Automaten und im Reisezentrum. Reisezentrum: Montag bis Samstag 6 bis 20 Uhr.' },
        { label: 'b', body: 'Taxi: Bitte nehmen Sie den Ausgang Nord. Die Taxis warten vor dem Bahnhof.' },
        { label: 'c', body: 'Zu den Gleisen 3 bis 8: Bitte gehen Sie hier links.' },
        { label: 'd', body: 'Bus 12 zum Flughafen: Die Haltestelle ist rechts neben dem Bahnhof. Der Bus fährt alle 20 Minuten.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Schilder. Welches Schild passt? Für eine Situation gibt es kein Schild.',
          instructionRu: 'Прочитайте таблички. Какая табличка подходит к ситуации? Для одной ситуации таблички нет.',
          options: ['Schild a', 'Schild b', 'Schild c', 'Schild d'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Sie möchten zum Flughafen fahren.', answer: 3, explanationRu: 'Табличка d: автобус 12 едет в аэропорт (zum Flughafen).' },
            { kind: 'match', prompt: 'Sie brauchen eine Fahrkarte.', answer: 0, explanationRu: 'Табличка a: билеты в автомате и в Reisezentrum (билетная касса).' },
            { kind: 'match', prompt: 'Sie möchten mit dem Taxi fahren.', answer: 1, explanationRu: 'Табличка b: такси ждут у северного выхода.' },
            { kind: 'match', prompt: 'Sie möchten ein Fahrrad mieten.', answer: -1, explanationRu: 'Про велосипеды (Fahrrad) нет ни одной таблички.' },
            { kind: 'match', prompt: 'Ihr Zug fährt von Gleis 5.', answer: 2, explanationRu: 'Табличка c: к путям с 3 по 8 — налево.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Durchsage am Bahnhof',
      kind: 'monolog',
      situation: 'Sie sind am Bahnhof und hören eine Durchsage.',
      text: `Achtung an Gleis sechs! Der Zug nach Magdeburg, Abfahrt neun Uhr zwanzig, hat heute fünfzehn Minuten Verspätung. Wir bitten um Entschuldigung. Fahrgäste nach Braunschweig: Bitte nehmen Sie den Zug an Gleis zwei. Er fährt pünktlich um neun Uhr fünfundzwanzig ab.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wohin fährt der Zug an Gleis sechs?', options: ['nach Magdeburg', 'nach Braunschweig', 'nach Hamburg'], answer: 0, explanationRu: '«Achtung an Gleis sechs! Der Zug nach Magdeburg…»' },
            { kind: 'mc', question: 'Wie viel Verspätung hat der Zug?', options: ['fünf Minuten', 'fünfzehn Minuten', 'fünfzig Minuten'], answer: 1, explanationRu: '«…hat heute fünfzehn Minuten Verspätung».' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Der Zug nach Braunschweig fährt von Gleis zwei.', answer: true, explanationRu: '«Fahrgäste nach Braunschweig: Bitte nehmen Sie den Zug an Gleis zwei».' },
          ],
        },
      ],
    },
    {
      title: 'An der Bushaltestelle',
      kind: 'dialog',
      speakers: { A: 'eine Frau', B: 'ein Mann' },
      situation: 'Eine Frau fragt an der Haltestelle nach dem Bus.',
      text: `A: Entschuldigung, fährt der Bus Nummer fünf zum Krankenhaus?
B: Nein, leider nicht. Nehmen Sie die Linie acht.
A: Und wo fährt die Linie acht ab?
B: Hier gegenüber, neben der Apotheke.
A: Wie oft fährt der Bus?
B: Alle zehn Minuten.
A: Und wo muss ich aussteigen?
B: An der Haltestelle „Klinikum“. Das sind fünf Stationen.
A: Danke schön!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Die Frau nimmt den Bus …', options: ['Nummer 5.', 'Nummer 8.', 'Nummer 18.'], answer: 1, explanationRu: '«Nehmen Sie die Linie acht» — до больницы идёт восьмой маршрут.' },
            { kind: 'mc', question: 'Wo ist die Haltestelle?', options: ['neben der Apotheke', 'neben der Post', 'am Krankenhaus'], answer: 0, explanationRu: '«Hier gegenüber, neben der Apotheke».' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Der Bus fährt alle zwanzig Minuten.', answer: false, explanationRu: '«Alle zehn Minuten» — каждые десять минут.' },
            { kind: 'tf', statement: 'Die Frau fährt fünf Stationen.', answer: true, explanationRu: '«Das sind fünf Stationen».' },
          ],
        },
      ],
    },
  ],
};
