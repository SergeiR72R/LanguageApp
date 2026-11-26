import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich ___ gern ein Ticket für die Straßenbahn.',
      options: ['hätte', 'hatte', 'hättest', 'hätten'],
      answer: 0,
      explanationRu: 'Для ich — форма hätte (без окончания). hatte без умлаута — прошедшее время «имел».',
    },
    {
      type: 'choice',
      prompt: '___ du mich morgen zum Flughafen bringen?',
      options: ['Könntest', 'Könntet', 'Konntest', 'Könnten'],
      answer: 0,
      explanationRu: 'Просьба к du: könntest (умлаут + окончание -st). Konntest — прошедшее время, оно не подходит к слову morgen.',
    },
    {
      type: 'choice',
      prompt: 'Ihr seid schon wieder zu spät! Ihr ___ früher aufstehen.',
      options: ['solltet', 'sollte', 'solltest', 'sollten'],
      answer: 0,
      explanationRu: 'Совет для ihr: ihr solltet (окончание -t, как в ihr macht).',
    },
    {
      type: 'choice',
      prompt: 'Würden Sie bitte das Fenster ___?',
      options: ['schließen', 'schließt', 'geschlossen', 'schließe'],
      answer: 0,
      explanationRu: 'После würde всегда нужен инфинитив в конце предложения: Würden Sie … schließen?',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ letzte Woche nicht kommen, ich war krank.',
      options: ['konnte', 'könnte', 'kann', 'könntest'],
      answer: 0,
      explanationRu: 'Здесь речь о прошлом (letzte Woche) — нужен претерит konnte без умлаута. könnte — это «мог бы».',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist ein Ratschlag (совет)?',
      options: ['Du solltest mehr Fahrrad fahren.', 'Du konntest gut Fahrrad fahren.', 'Du hattest ein Fahrrad.'],
      answer: 0,
      explanationRu: 'Совет дают с помощью sollte: Du solltest … Два других предложения рассказывают о прошлом.',
    },
    {
      type: 'gap',
      prompt: 'Du hast Kopfschmerzen? Du ___ mehr Wasser trinken.',
      answers: ['solltest'],
      explanationRu: 'Совет для du: du solltest + инфинитив в конце (trinken).',
    },
    {
      type: 'gap',
      prompt: '___ ihr mir bitte beim Umzug helfen?',
      answers: ['Könntet', 'Würdet'],
      explanationRu: 'Просьба к нескольким друзьям (ihr): Könntet ihr …? или Würdet ihr …? Окончание -t.',
    },
    {
      type: 'gap',
      prompt: 'Mein Mann ___ gern ein neues Fahrrad.',
      answers: ['hätte'],
      explanationRu: 'Желание: er/sie hätte gern … Форма для er совпадает с формой для ich.',
    },
    {
      type: 'gap',
      prompt: 'Was ___ Sie mir empfehlen: den Bus oder die U-Bahn?',
      answers: ['würden', 'könnten'],
      explanationRu: 'Вежливый вопрос к Sie: Was würden Sie mir empfehlen? Инфинитив empfehlen стоит в конце.',
    },
    {
      type: 'gap',
      prompt: 'Es ist schon spät. Ich ___ an deiner Stelle ein Taxi nehmen.',
      answers: ['würde'],
      explanationRu: 'Совет «на твоём месте я бы…»: ich würde … nehmen.',
    },
    {
      type: 'choice',
      audio: 'Würden Sie bitte Ihren Rucksack vom Sitz nehmen?',
      prompt: 'О чём просят пассажира?',
      options: ['Убрать рюкзак с сиденья.', 'Показать билет.', 'Открыть окно.'],
      answer: 0,
      explanationRu: 'Вы слышите: «Ihren Rucksack vom Sitz nehmen» — убрать рюкзак с сиденья. Würden Sie bitte … — вежливая просьба.',
    },
    {
      type: 'gap',
      audio: 'Wir hätten gern zwei Fahrkarten nach Bremen.',
      prompt: 'Сколько билетов хотят купить? Напишите цифрой: ___',
      answers: ['2', 'zwei'],
      explanationRu: 'Вы слышите «zwei Fahrkarten» — два билета до Бремена.',
    },
    {
      type: 'gap',
      audio: 'Sie sollten pünktlich am Bahnhof sein.',
      prompt: 'Напишите недостающее слово: Sie ___ pünktlich am Bahnhof sein.',
      answers: ['sollten'],
      explanationRu: 'Вы слышите sollten — совет для Sie. Инфинитив sein стоит в конце.',
    },
    {
      type: 'choice',
      audio: 'Achtung an Gleis 3: Der Zug nach München hat heute circa zehn Minuten Verspätung.',
      prompt: 'Что вы узнали о поезде в Мюнхен?',
      options: ['Он опаздывает примерно на 10 минут.', 'Он отменён.', 'Он отправляется с пути 10.'],
      answer: 0,
      explanationRu: '«zehn Minuten Verspätung» — опоздание около десяти минут. Поезд идёт с пути 3.',
    },
    {
      type: 'order',
      words: ['Könntest', 'du', 'bitte', 'langsamer', 'fahren?'],
      translationRu: 'Ты не мог бы ехать помедленнее?',
      explanationRu: 'Просьба: könntest на первом месте, bitte после подлежащего, инфинитив fahren в конце.',
    },
    {
      type: 'order',
      words: ['Was', 'würdest', 'du', 'an meiner Stelle', 'machen?'],
      translationRu: 'Что бы ты сделал на моём месте?',
      explanationRu: 'W-вопрос: Was + würdest (2-е место) + du … + инфинитив machen в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте из приказа вежливую просьбу (könntest или würdest).',
      prompt: 'Hilf mir bitte!',
      answers: ['Könntest du mir bitte helfen?', 'Würdest du mir bitte helfen?', 'Könntest du mir helfen?', 'Würdest du mir helfen?'],
      explanationRu: 'Könntest/Würdest du … на первом месте, helfen — в конце. Не забудьте вопросительный знак.',
    },
    {
      type: 'gap',
      prompt: 'Gestern ___ ich mit dem Fahrrad zur Arbeit gefahren.',
      answers: ['bin'],
      explanationRu: 'Повторение (перфект): fahren — глагол движения, поэтому ich bin gefahren.',
    },
    {
      type: 'order',
      words: ['Ich', 'komme', 'zu spät,', 'weil', 'der', 'Bus', 'Verspätung', 'hat.'],
      translationRu: 'Я опаздываю, потому что автобус задерживается.',
      explanationRu: 'Повторение (weil): в придаточном предложении спрягаемый глагол hat стоит в самом конце.',
    },
    {
      type: 'choice',
      prompt: 'Im Sommer fahren wir mit dem Auto ___ Schweiz.',
      options: ['in die', 'nach', 'zu der', 'in der'],
      answer: 0,
      explanationRu: 'Повторение (куда?): страны с артиклем — in + Akkusativ: in die Schweiz. nach — только для стран без артикля.',
    },
  ],
  reading: [
    {
      title: 'Ein Jahr ohne Auto',
      textType: 'Zeitungsartikel',
      texts: [
        {
          heading: 'Ein Jahr ohne Auto – geht das?',
          body: `Familie Becker aus Münster hat es probiert. Im letzten Frühling war ihr altes Auto kaputt, und die Reparatur war zu teuer. „Wir wollten zuerst ein neues Auto kaufen“, erzählt Thomas Becker (42). „Aber dann hatten wir eine andere Idee: Wir machen ein Jahr Pause vom Auto.“

Jetzt fahren die Beckers fast alles mit dem Fahrrad. Münster ist eine Fahrradstadt, und es gibt viele Radwege. Die Kinder (9 und 12) fahren allein mit dem Rad zur Schule. Für den Einkauf hat die Familie ein Lastenrad gekauft – das ist ein Fahrrad mit einer großen Kiste vorne. Wenn es stark regnet, nehmen sie den Bus. Für Ausflüge mieten sie manchmal ein Auto bei einer Carsharing-Firma.

„Am Anfang war es schwer“, sagt Anna Becker (40). „Im Winter mussten wir oft früher aufstehen, weil der Bus langsamer ist. Aber jetzt sind wir fitter, und wir sparen viel Geld.“ Das Jahr ist bald vorbei. Kaufen sie wieder ein Auto? „Nein“, sagt Thomas und lacht. „Ich glaube, wir brauchen keins mehr.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Das alte Auto der Familie war kaputt.', answer: true, explanationRu: '«Im letzten Frühling war ihr altes Auto kaputt» — старая машина сломалась.' },
            { kind: 'tf', statement: 'Die Beckers haben sofort ein neues Auto gekauft.', answer: false, explanationRu: 'Сначала хотели, но потом решили сделать год перерыва без машины.' },
            { kind: 'tf', statement: 'Die Kinder fahren mit dem Bus zur Schule.', answer: false, explanationRu: '«Die Kinder fahren allein mit dem Rad zur Schule» — на велосипеде, а не на автобусе.' },
            { kind: 'tf', statement: 'Bei starkem Regen fährt die Familie mit dem Bus.', answer: true, explanationRu: '«Wenn es stark regnet, nehmen sie den Bus.»' },
            { kind: 'tf', statement: 'Die Familie möchte bald wieder ein Auto kaufen.', answer: false, explanationRu: 'Томас говорит: «Nein … wir brauchen keins mehr» — машина им больше не нужна.' },
          ],
        },
      ],
    },
    {
      title: 'Rund ums Auto und Fahrrad',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', heading: 'Fahrschule Klein', body: 'Führerschein in sechs Wochen! Abendkurse von Montag bis Donnerstag. Unterricht auch auf Russisch und Englisch.' },
        { label: 'b', heading: 'Radhaus Müller', body: 'Ihr Fahrrad ist kaputt? Wir reparieren es schnell. Wir vermieten auch Fahrräder und E-Bikes – ab 12 Euro pro Tag.' },
        { label: 'c', heading: 'Stadtauto – Carsharing', body: 'Sie brauchen nur manchmal ein Auto? Mit unserer App buchen Sie ein Auto in Ihrer Nähe, 24 Stunden am Tag. Ab 3 Euro pro Stunde.' },
        { label: 'd', heading: 'Autowerkstatt Özdemir', body: 'Wir reparieren alle Autos – auch am Samstag. Bei einer Panne rufen Sie uns an: 0251 77 34 10.' },
        { label: 'e', heading: 'Mitfahren nach München', body: 'Ich fahre am Freitag mit dem Auto von Hamburg nach München und habe noch zwei Plätze frei. 35 Euro pro Person.' },
        { label: 'f', heading: 'Monatskarte „Stadt mobil“', body: 'Einen Monat lang so oft Sie wollen mit Bus und Straßenbahn in der Stadt fahren. Nur 49 Euro im Monat.' },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–6 und die Anzeigen a–f. Welche Anzeige passt? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–6 и объявления a–f. Какое объявление подходит? Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет.',
          options: ['Fahrschule Klein', 'Radhaus Müller', 'Stadtauto – Carsharing', 'Autowerkstatt Özdemir', 'Mitfahren nach München', 'Monatskarte „Stadt mobil“'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihr Nachbar möchte Auto fahren lernen. Er arbeitet bis 17 Uhr.', answer: 0, explanationRu: 'a: автошкола с вечерними курсами.' },
            { kind: 'match', prompt: 'Ihre Freundin braucht am Sonntag für einen Ausflug ein Fahrrad.', answer: 1, explanationRu: 'b: в Radhaus Müller можно взять велосипед напрокат.' },
            { kind: 'match', prompt: 'Ein Kollege hat kein Auto, aber er braucht manchmal eins für den Großeinkauf.', answer: 2, explanationRu: 'c: каршеринг — машина только тогда, когда она нужна.' },
            { kind: 'match', prompt: 'Sie wohnen in Hamburg und möchten am Freitag günstig nach München fahren.', answer: 4, explanationRu: 'e: попутка из Гамбурга в Мюнхен в пятницу, 35 евро.' },
            { kind: 'match', prompt: 'Ihr Auto ist am Samstag kaputt und muss schnell repariert werden.', answer: 3, explanationRu: 'd: автомастерская работает и в субботу.' },
            { kind: 'match', prompt: 'Ihr Sohn möchte nach Berlin fliegen und sucht ein billiges Flugticket.', answer: -1, explanationRu: 'Подходящего объявления нет: про самолёты и авиабилеты здесь ничего нет.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Durchsage im Zug',
      kind: 'monolog',
      situation: 'Sie hören eine Durchsage im Zug.',
      text: `Sehr geehrte Fahrgäste, in wenigen Minuten erreichen wir Hannover Hauptbahnhof. Wegen einer Störung haben wir leider etwa fünfzehn Minuten Verspätung. Reisende nach Bremen: Ihr Anschlusszug wartet heute nicht. Sie können aber den nächsten Zug um 11:42 Uhr von Gleis 4 nehmen. Reisende nach Berlin erreichen ihren Anschluss: Der ICE nach Berlin fährt heute zehn Minuten später, um 11:25 Uhr von Gleis 8. Bitte vergessen Sie beim Aussteigen Ihr Gepäck nicht. Unser Bistro in Wagen 5 ist heute leider geschlossen. Wir bitten um Entschuldigung.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Durchsage. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте объявление. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie viel Verspätung hat der Zug?', options: ['5 Minuten.', '15 Minuten.', '50 Minuten.'], answer: 1, explanationRu: '«etwa fünfzehn Minuten Verspätung» — около 15 минут.' },
            { kind: 'mc', question: 'Wann fährt der nächste Zug nach Bremen?', options: ['Um 11:25 Uhr.', 'Um 11:42 Uhr.', 'Um 11:52 Uhr.'], answer: 1, explanationRu: 'Следующий поезд в Бремен — в 11:42 с пути 4. 11:25 — это ICE в Берлин.' },
            { kind: 'mc', question: 'Von welchem Gleis fährt der ICE nach Berlin?', options: ['Von Gleis 4.', 'Von Gleis 5.', 'Von Gleis 8.'], answer: 2, explanationRu: '«um 11:25 Uhr von Gleis 8». Путь 4 — для поезда в Бремен, 5 — номер вагона с бистро.' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Der Anschlusszug nach Bremen wartet.', answer: false, explanationRu: '«Ihr Anschlusszug wartet heute nicht» — поезд в Бремен не ждёт.' },
            { kind: 'tf', statement: 'Im Zug kann man heute im Bistro Kaffee kaufen.', answer: false, explanationRu: '«Unser Bistro … ist heute leider geschlossen» — бистро сегодня закрыто.' },
          ],
        },
      ],
    },
    {
      title: 'Jeden Morgen im Stau',
      kind: 'dialog',
      speakers: { A: 'Sabine, Kollegin', B: 'Jan, Kollege' },
      situation: 'Sie hören ein Gespräch zwischen zwei Kollegen im Büro.',
      text: `A: Morgen, Jan! Du siehst müde aus.
B: Ja, ich war heute eine Stunde im Stau. Jeden Morgen das gleiche Problem!
A: Warum fährst du nicht mit der S-Bahn? Sie braucht nur 25 Minuten.
B: Ich weiß, aber die Haltestelle ist weit weg von meiner Wohnung. Ich muss dann 20 Minuten zu Fuß gehen.
A: Du könntest doch mit dem Fahrrad zur Haltestelle fahren. Da gibt es viele Plätze für Fahrräder.
B: Hm, das ist eine gute Idee. Aber was mache ich im Winter?
A: Im Winter würde ich den Bus zur S-Bahn nehmen. Ich mache das auch so. Und du sparst Geld, Benzin ist so teuer!
B: Stimmt. Und in der S-Bahn könnte ich lesen oder Musik hören.
A: Genau! Und du solltest eine Monatskarte kaufen. Sie ist viel billiger als Einzelfahrkarten.
B: Okay, ich probiere es ab nächster Woche. Danke für den Tipp!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Jan war heute eine Stunde im Stau.', answer: true, explanationRu: '«ich war heute eine Stunde im Stau».' },
            { kind: 'tf', statement: 'Mit der S-Bahn braucht Jan nur 25 Minuten.', answer: true, explanationRu: 'Сабина говорит: «Sie braucht nur 25 Minuten».' },
            { kind: 'tf', statement: 'Jan wohnt direkt neben der Haltestelle.', answer: false, explanationRu: 'Остановка далеко: до неё 20 минут пешком.' },
            { kind: 'tf', statement: 'Im Winter fährt Sabine mit dem Bus zur S-Bahn.', answer: true, explanationRu: '«Im Winter würde ich den Bus zur S-Bahn nehmen. Ich mache das auch so.»' },
            { kind: 'tf', statement: 'Jan möchte weiter jeden Tag mit dem Auto fahren.', answer: false, explanationRu: 'Ян хочет со следующей недели попробовать ездить на электричке.' },
          ],
        },
      ],
    },
  ],
};
