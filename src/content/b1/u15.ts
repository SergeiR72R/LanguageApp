import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-15',
  level: 'B1',
  order: 15,
  title: 'Verkehr & Mobilität',
  titleRu: 'Транспорт и мобильность',
  goalsRu: [
    'Рассказывать о транспорте, дорожном движении и своём пути на работу',
    'Называть причину, уступку, время и замену с помощью wegen, trotz, während, statt',
    'Правильно склонять существительные n-склонения: den Kunden, dem Kollegen, des Jungen',
    'Понимать объявления на вокзале и дорожные сводки по радио',
  ],
  grammar: {
    topic: 'Präpositionen mit Genitiv (wegen, trotz, während, statt, innerhalb, außerhalb); n-Deklination',
    topicRu: 'Предлоги с родительным падежом; n-склонение существительных',
    explanationRu: `**Предлоги с генитивом.** После этих предлогов существительное стоит в **родительном падеже (Genitiv)**:

- **wegen** — из-за (причина): wegen des Staus
- **trotz** — несмотря на: trotz des Regens
- **während** — во время: während der Fahrt
- **statt / anstatt** — вместо: statt eines Autos
- **innerhalb** — внутри; в течение: innerhalb der Stadt, innerhalb einer Woche
- **außerhalb** — вне, за пределами: außerhalb der Stadt

Окончания: мужской и средний род — **des / eines / meines**, а существительное получает **-(e)s**: des Zug**es**, eines Auto**s**. Женский род и множественное число — **der / einer / meiner** без окончания у существительного: während der Fahrt, trotz der Baustellen. Прилагательное после артикля получает **-en**: wegen des stark**en** Verkehrs.

В разговорной речи часто говорят «wegen dem Stau», но в письме и на экзамене используйте генитив. Если артикля нет, после innerhalb/außerhalb обычно ставят **von + Dativ**: innerhalb von zwei Tagen.

**n-склонение.** Небольшая группа существительных **мужского рода** получает **-(e)n во всех падежах, кроме именительного единственного числа**:

- на **-e**: der Kunde, Kollege, Junge, Franzose → den Kunde**n**, dem Kollege**n**, des Junge**n**;
- на **-ent, -ant, -ist, -at, -oge**: der Student, Passant, Polizist, Soldat, Biologe;
- отдельные слова: der Mensch, Herr (den Herr**n**, мн. ч. die Herr**en**), Nachbar, Bauer.

Исключение: der Name — des Name**ns**.

**Типичные ошибки русскоговорящих:**

- Забывают -s в генитиве: «während des Unterricht» → **während des Unterrichts**.
- Путают предлог и союз: **trotz** и **wegen** + существительное, но **obwohl** и **weil** + придаточное. «Trotz es regnet» — неверно.
- Не добавляют -n: «Ich frage den Polizist» → **den Polizisten**; «mit meinem Kollege» → **mit meinem Kollegen**.
- Ставят лишнее -s у n-существительных: «des Kundens» → **des Kunden**.`,
    table: [
      ['Предлог', 'Значение', 'm / n', 'f / Pl.'],
      ['wegen', 'из-за', 'wegen des Unfalls', 'wegen der Baustelle'],
      ['trotz', 'несмотря на', 'trotz des Regens', 'trotz der Verspätung'],
      ['während', 'во время', 'während des Wochenendes', 'während der Fahrt'],
      ['statt / anstatt', 'вместо', 'statt eines Autos', 'statt einer Monatskarte'],
      ['innerhalb', 'внутри; в течение', 'innerhalb eines Monats', 'innerhalb der Stadt'],
      ['außerhalb', 'вне, за пределами', 'außerhalb des Zentrums', 'außerhalb der Stadt'],
    ],
    examples: [
      { de: 'Wegen eines Unfalls ist die Autobahn seit zwei Stunden gesperrt.', ru: 'Из-за аварии автобан перекрыт уже два часа.' },
      { de: 'Trotz des schlechten Wetters fahre ich jeden Tag mit dem Fahrrad zur Arbeit.', ru: 'Несмотря на плохую погоду, я каждый день езжу на работу на велосипеде.' },
      { de: 'Während der Fahrt dürfen Fahrgäste nicht mit dem Busfahrer sprechen.', ru: 'Во время поездки пассажирам нельзя разговаривать с водителем автобуса.' },
      { de: 'Statt eines Autos hat sich meine Schwester ein E-Bike gekauft.', ru: 'Вместо машины моя сестра купила себе электровелосипед.' },
      { de: 'Wir wohnen außerhalb der Stadt, deshalb brauchen wir leider ein Auto.', ru: 'Мы живём за городом, поэтому нам, к сожалению, нужна машина.' },
      { de: 'Der Busfahrer hat dem Passanten den Weg zum Bahnhof erklärt.', ru: 'Водитель автобуса объяснил прохожему дорогу к вокзалу.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ des Staus bin ich eine halbe Stunde zu spät zur Arbeit gekommen.',
        options: ['Wegen', 'Trotz', 'Statt', 'Innerhalb'],
        answer: 0,
        explanationRu: 'Пробка — причина опоздания → wegen (из-за). trotz означал бы «несмотря на».',
      },
      {
        type: 'choice',
        prompt: 'Trotz ___ Regens fahren viele Leute mit dem Fahrrad.',
        options: ['der', 'dem', 'des', 'den'],
        answer: 2,
        explanationRu: 'trotz + Genitiv; der Regen — мужской род → des Regens.',
      },
      {
        type: 'choice',
        prompt: 'Der Kontrolleur hat ___ ohne Fahrkarte erwischt.',
        options: ['den Student', 'den Studenten', 'dem Student', 'der Studenten'],
        answer: 1,
        explanationRu: 'erwischen + Akkusativ. der Student — n-склонение: в аккузативе den Studenten.',
      },
      {
        type: 'choice',
        prompt: 'Auf der Straße war Glatteis. ___ sind alle Busse pünktlich gefahren.',
        options: ['Trotz', 'Trotzdem', 'Wegen', 'Obwohl'],
        answer: 1,
        explanationRu: 'После пропуска сразу идёт глагол (sind) и нет существительного → наречие trotzdem. trotz требует существительное в генитиве, obwohl — глагол в конце.',
      },
      {
        type: 'gap',
        prompt: 'Während ___ Fahrt bitte nicht mit dem Fahrer sprechen.',
        answers: ['der'],
        explanationRu: 'während + Genitiv; die Fahrt — женский род → der Fahrt.',
      },
      {
        type: 'gap',
        prompt: 'Innerhalb ___ Woche müssen Sie das Bußgeld bezahlen.',
        answers: ['einer'],
        hintRu: 'неопределённый артикль',
        explanationRu: 'innerhalb + Genitiv; die Woche — женский род → einer Woche.',
      },
      {
        type: 'gap',
        prompt: 'Heute Morgen habe ich im Bus unseren neuen ___ getroffen.',
        answers: ['Kollegen'],
        hintRu: 'der Kollege',
        explanationRu: 'treffen + Akkusativ. Kollege — n-склонение: unseren Kollegen.',
      },
      {
        type: 'gap',
        prompt: 'Wegen des starken ___ ist die Fähre heute nicht gefahren.',
        answers: ['Windes', 'Winds'],
        hintRu: 'der Wind',
        explanationRu: 'wegen + Genitiv; der Wind — мужской род → des Windes (или des Winds).',
      },
      {
        type: 'order',
        words: ['Wegen', 'einer', 'Baustelle', 'gibt', 'es', 'in', 'der', 'Hauptstraße', 'eine', 'Umleitung.'],
        translationRu: 'Из-за стройки на Главной улице устроен объезд.',
        explanationRu: 'Группа «wegen + Genitiv» стоит на первом месте, затем сразу спрягаемый глагол gibt.',
      },
      {
        type: 'order',
        words: ['Der', 'Polizist', 'hat', 'dem', 'Jungen', 'über', 'die', 'Straße', 'geholfen.'],
        translationRu: 'Полицейский помог мальчику перейти через улицу.',
        explanationRu: 'helfen + Dativ: dem Jungen (n-склонение, окончание -n). Polizist в именительном падеже — без окончания.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное с weil на предлог wegen.',
        prompt: 'Die Fähre fährt heute nicht, weil das Wetter schlecht ist.',
        answers: [
          'Wegen des schlechten Wetters fährt die Fähre heute nicht.',
          'Die Fähre fährt heute wegen des schlechten Wetters nicht.',
          'Die Fähre fährt wegen des schlechten Wetters heute nicht.',
        ],
        explanationRu: 'weil + придаточное → wegen + Genitiv: das schlechte Wetter → des schlechten Wetters.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное с obwohl на предлог trotz.',
        prompt: 'Obwohl der Stau lang war, sind wir pünktlich angekommen.',
        answers: [
          'Trotz des langen Staus sind wir pünktlich angekommen.',
          'Wir sind trotz des langen Staus pünktlich angekommen.',
        ],
        explanationRu: 'obwohl + придаточное → trotz + Genitiv: der lange Stau → des langen Staus.',
      },
    ],
  },
  vocab: [
    { de: 'Verkehr', article: 'der', plural: '–', pos: 'noun', ru: 'движение (дорожное), транспорт', example: 'Morgens um acht ist in der Innenstadt besonders viel Verkehr.', exampleRu: 'Утром в восемь в центре города особенно оживлённое движение.' },
    { de: 'Ampel', article: 'die', plural: '-n', pos: 'noun', ru: 'светофор', example: 'Die Ampel ist rot, wir müssen warten.', exampleRu: 'На светофоре красный, нам нужно подождать.' },
    { de: 'Kreuzung', article: 'die', plural: '-en', pos: 'noun', ru: 'перекрёсток', example: 'An der nächsten Kreuzung biegen Sie bitte links ab.', exampleRu: 'На следующем перекрёстке поверните, пожалуйста, налево.' },
    { de: 'Führerschein', article: 'der', plural: '-e', pos: 'noun', ru: 'водительские права', example: 'Mein Sohn macht gerade den Führerschein.', exampleRu: 'Мой сын сейчас получает водительские права.' },
    { de: 'Umleitung', article: 'die', plural: '-en', pos: 'noun', ru: 'объезд', example: 'Wegen der Bauarbeiten gibt es eine Umleitung.', exampleRu: 'Из-за строительных работ сделан объезд.' },
    { de: 'Fußgänger', article: 'der', plural: '-', pos: 'noun', ru: 'пешеход', example: 'Autofahrer müssen am Zebrastreifen auf Fußgänger achten.', exampleRu: 'Водители должны пропускать пешеходов на пешеходном переходе.' },
    { de: 'Radweg', article: 'der', plural: '-e', pos: 'noun', ru: 'велосипедная дорожка', example: 'In unserer Stadt gibt es immer mehr Radwege.', exampleRu: 'В нашем городе становится всё больше велодорожек.' },
    { de: 'Haltestelle', article: 'die', plural: '-n', pos: 'noun', ru: 'остановка', example: 'Die Haltestelle liegt direkt vor unserem Haus.', exampleRu: 'Остановка находится прямо перед нашим домом.' },
    { de: 'Fahrgast', article: 'der', plural: '-¨e', pos: 'noun', ru: 'пассажир', example: 'Alle Fahrgäste müssen in Hamburg Hauptbahnhof aussteigen.', exampleRu: 'Всем пассажирам нужно выйти на главном вокзале Гамбурга.' },
    { de: 'Verkehrsmittel', article: 'das', plural: '-', pos: 'noun', ru: 'транспортное средство; вид транспорта', example: 'Welches Verkehrsmittel benutzt du am liebsten?', exampleRu: 'Каким видом транспорта ты пользуешься охотнее всего?' },
    { de: 'Geschwindigkeit', article: 'die', plural: '-en', pos: 'noun', ru: 'скорость', example: 'Vor der Schule ist die Geschwindigkeit auf 30 km/h begrenzt.', exampleRu: 'Перед школой скорость ограничена 30 км/ч.' },
    { de: 'Vorfahrt', article: 'die', plural: '–', pos: 'noun', ru: 'преимущественное право проезда', example: 'An dieser Kreuzung hat der Bus Vorfahrt.', exampleRu: 'На этом перекрёстке автобус имеет преимущество.' },
    { de: 'abbiegen', forms: 'biegt ab, bog ab, ist abgebogen', pos: 'verb', ru: 'поворачивать (на другую улицу)', example: 'Nach der Brücke müssen Sie rechts abbiegen.', exampleRu: 'После моста вам нужно повернуть направо.' },
    { de: 'überholen', forms: 'überholt, überholte, hat überholt', pos: 'verb', ru: 'обгонять', example: 'Auf dieser Straße darf man nicht überholen.', exampleRu: 'На этой дороге обгонять запрещено.' },
    { de: 'sich verspäten', forms: 'verspätet sich, verspätete sich, hat sich verspätet', pos: 'verb', ru: 'опаздывать, задерживаться', example: 'Der Zug aus München verspätet sich um etwa zehn Minuten.', exampleRu: 'Поезд из Мюнхена задерживается примерно на десять минут.' },
    { de: 'ausfallen', forms: 'fällt aus, fiel aus, ist ausgefallen', pos: 'verb', ru: 'отменяться, не состояться', example: 'Wegen des Sturms sind heute viele Züge ausgefallen.', exampleRu: 'Из-за бури сегодня отменили много поездов.' },
    { de: 'Unfall', article: 'der', plural: '-¨e', pos: 'noun', ru: 'несчастный случай, авария', example: 'Bei dem Unfall wurde zum Glück niemand verletzt.', exampleRu: 'К счастью, в аварии никто не пострадал.' },
    { de: 'Durchsage', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление (по громкой связи)', example: 'Ich habe die Durchsage am Bahnsteig leider nicht verstanden.', exampleRu: 'Я, к сожалению, не понял объявление на перроне.' },
    { de: 'Gleis', article: 'das', plural: '-e', pos: 'noun', ru: 'путь (на вокзале), колея', example: 'Der ICE nach Berlin fährt heute von Gleis 7 ab.', exampleRu: 'ICE до Берлина сегодня отправляется с седьмого пути.' },
    { de: 'Passant', article: 'der', plural: '-en', forms: 'den/dem/des Passanten (n-Deklination)', pos: 'noun', ru: 'прохожий', example: 'Ein Passant hat sofort den Krankenwagen gerufen.', exampleRu: 'Один прохожий сразу вызвал скорую помощь.' },
  ],
  listening: {
    title: 'Radio Mitte: Der Verkehrsservice am Morgen',
    kind: 'monolog',
    text: `Guten Morgen, hier ist Radio Mitte mit dem Verkehrsservice um halb acht.

Zuerst die Straßen: Wegen eines Unfalls auf der Stadtautobahn zwischen der Ausfahrt Nord und dem Messegelände ist die rechte Fahrspur gesperrt. Dort steht der Verkehr auf fünf Kilometern. Die Polizei bittet alle Autofahrer, die Unfallstelle zu umfahren. Innerhalb der Innenstadt ist die Lage trotz des Berufsverkehrs bisher ruhig. Aber Achtung in der Goethestraße: Während der Bauarbeiten gibt es dort bis Ende Mai eine Umleitung über den Schillerplatz.

Und nun zu Bus und Bahn: Wegen einer technischen Störung fällt die S-Bahn-Linie 3 zwischen Hauptbahnhof und Flughafen aus. Statt der S-Bahnen fahren Ersatzbusse alle zehn Minuten. Fahrgäste sollten etwa zwanzig Minuten mehr Zeit einplanen. Die U-Bahn fährt heute ganz normal.

Ein Hinweis für alle Radfahrer: Außerhalb der Stadt kann es heute Morgen glatt sein. Fahren Sie bitte vorsichtig und tragen Sie einen Helm.

Und zum Schluss noch eine schöne Nachricht: Ein Busfahrer der Linie 12 hat gestern Abend einem kleinen Jungen geholfen, der seine Eltern im Gedränge am Bahnhof verloren hatte. Er hat den Jungen bis zur Polizeiwache begleitet, und innerhalb einer halben Stunde waren die Eltern da. Danke an diesen Kollegen!

Das war der Verkehrsservice. Die nächsten Meldungen hören Sie um acht Uhr.`,
    questions: [
      {
        question: 'Warum ist auf der Stadtautobahn eine Fahrspur gesperrt?',
        options: ['Wegen Bauarbeiten.', 'Wegen eines Unfalls.', 'Wegen Glatteis.'],
        answer: 1,
      },
      {
        question: 'Was gilt für die Goethestraße?',
        options: [
          'Sie ist bis Ende Mai komplett geschlossen.',
          'Dort fahren keine Busse mehr.',
          'Während der Bauarbeiten gibt es eine Umleitung.',
          'Dort darf man nur 30 km/h fahren.',
        ],
        answer: 2,
      },
      {
        question: 'Wie kommen die Fahrgäste der S-Bahn-Linie 3 heute zum Flughafen?',
        options: ['Mit Ersatzbussen.', 'Mit der U-Bahn.', 'Mit dem Taxi.'],
        answer: 0,
      },
      {
        question: 'Was sollen Radfahrer heute Morgen tun?',
        options: [
          'Sie sollen in der Stadt bleiben.',
          'Sie sollen den Bus nehmen.',
          'Sie sollen langsam fahren und einen Helm tragen.',
          'Sie sollen die Polizei anrufen.',
        ],
        answer: 2,
      },
      {
        question: 'Was hat der Busfahrer gestern gemacht?',
        options: [
          'Er hat einen Unfall verhindert.',
          'Er hat einem Kind geholfen, seine Eltern wiederzufinden.',
          'Er hat einen Dieb zur Polizei gebracht.',
          'Er hat ein verlorenes Handy gefunden.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'В вашем городе обсуждают, нужно ли сделать центр города свободным от машин. Напишите сообщение на форуме местной газеты.',
    taskDe: 'In Ihrer Stadt wird diskutiert, ob die Innenstadt autofrei werden soll. Schreiben Sie einen Beitrag im Online-Forum der Lokalzeitung.',
    points: [
      'Wie Sie selbst in die Innenstadt kommen',
      'Vorteile einer autofreien Innenstadt',
      'Mögliche Probleme (z. B. für ältere Menschen oder Geschäfte)',
      'Ihre Meinung',
    ],
    minWords: 100,
    usefulPhrases: [
      'Ich wohne außerhalb der Stadt und fahre meistens mit …',
      'Wegen des starken Verkehrs ist die Luft im Zentrum schlecht.',
      'Statt neuer Parkplätze brauchen wir mehr Radwege und Busse.',
      'Trotz dieser Vorteile sehe ich auch Probleme: …',
      'Meiner Meinung nach sollte man …',
      'Ich bin gespannt auf eure Meinungen!',
    ],
  },
  speaking: {
    scenarioRu: 'Вы и ваш коллега едете на выставку в другой город. Вместе спланируйте поездку: вид транспорта, время отправления, билеты и что делать, если поезд опоздает.',
    aiRole:
      'Sie sind Tobias, ein freundlicher Kollege. Sie und Ihr Gesprächspartner fahren nächste Woche zusammen zu einer Messe nach Hamburg. Sie planen gemeinsam die Reise: Zug oder Auto, Abfahrtszeit, Tickets, was man bei Verspätungen macht. Sie fahren lieber mit dem Auto, lassen sich aber mit guten Argumenten überzeugen. Sprechen Sie natürlich auf B1-Niveau, machen Sie eigene Vorschläge und reagieren Sie auf die Vorschläge Ihres Partners.',
    opener: 'Hallo! Hast du schon überlegt, wie wir nächste Woche zur Messe nach Hamburg fahren? Ich würde ja gern das Auto nehmen.',
    tasksRu: [
      'Предложите вид транспорта и обоснуйте выбор (wegen …, statt …).',
      'Договоритесь о времени отправления и о том, кто купит билеты.',
      'Обсудите, что делать, если поезд опоздает или будет пробка (trotz …, während …).',
      'Подведите итог: о чём вы договорились.',
    ],
    readAloud: [
      'Wegen eines Unfalls fällt der Zug nach Hamburg heute aus.',
      'Trotz des Regens fahre ich lieber mit dem Fahrrad als mit dem Auto.',
      'Der Busfahrer hat dem Jungen und dem Passanten den Weg erklärt.',
    ],
  },
};
