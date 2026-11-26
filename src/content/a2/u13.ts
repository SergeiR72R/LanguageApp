import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-13',
  level: 'A2',
  order: 13,
  title: 'Verkehr und Mobilität',
  titleRu: 'Транспорт и мобильность',
  goalsRu: [
    'Вежливо просить о помощи: Könnten Sie …? Würden Sie bitte …?',
    'Вежливо говорить, чего вы хотите: Ich hätte gern …',
    'Давать советы: Du solltest … / An deiner Stelle würde ich …',
    'Говорить о машине, поезде и велосипеде, о пробках и опозданиях',
    'Понимать объявления на вокзале и в поезде',
  ],
  grammar: {
    topic: 'Konjunktiv II: höfliche Bitten und Ratschläge',
    topicRu: 'Konjunktiv II: вежливые просьбы и советы',
    explanationRu: `**Konjunktiv II** — это немецкое «бы». По-русски мы говорим «Не могли **бы** вы мне помочь?» — так звучит вежливее, чем «Помогите мне!». В немецком то же самое. В этом юните нам нужны только четыре формы:

- **könnte** (от können) — для вежливой просьбы: **Könnten** Sie mir helfen? — Не могли бы вы мне помочь?
- **würde** + инфинитив — тоже просьба: **Würden** Sie bitte das Fenster **schließen**?
- **hätte gern** (от haben) — «я хотел бы (получить)»: Ich **hätte gern** eine Fahrkarte nach Köln.
- **sollte** (от sollen) — совет: Du **solltest** früher losfahren. — Тебе следовало бы выехать раньше.

**Как строится предложение.** könnte, würde и sollte работают как модальные глаголы: они стоят на 2-м месте (в вопросе — на 1-м), а **инфинитив уходит в конец**:

- Ich **würde** gern mit dem Fahrrad **fahren**.
- **Könntest** du mich zum Bahnhof **bringen**?

Полезная фраза для совета: **An deiner Stelle würde ich** … — «На твоём месте я бы …». An deiner Stelle würde ich den Zug nehmen.

**Окончания** — как у модальных глаголов в претерите: ich/er без окончания, du **-st**, wir/sie/Sie **-n**, ihr **-t** (см. таблицу).

**Типичные ошибки русскоговорящих:**

- Забывают умлаут: **konnte** — это «мог» (прошлое), а **könnte** — «мог бы». Ich konnte nicht kommen = я не смог прийти. Könnten Sie kommen? = не могли бы вы прийти?
- То же с haben: **hatte** — «имел», **hätte** — «имел бы». Правильно: Ich **hätte** gern einen Kaffee.
- У sollte умлаута нет: sollte, а не «söllte».
- Ставят инфинитив сразу после würde: «Würden Sie helfen mir?» ✗ → **Würden Sie mir helfen?** ✓`,
    table: [
      ['', 'können', 'werden', 'haben', 'sollen'],
      ['ich', 'könnte', 'würde', 'hätte', 'sollte'],
      ['du', 'könntest', 'würdest', 'hättest', 'solltest'],
      ['er/sie/es', 'könnte', 'würde', 'hätte', 'sollte'],
      ['wir', 'könnten', 'würden', 'hätten', 'sollten'],
      ['ihr', 'könntet', 'würdet', 'hättet', 'solltet'],
      ['sie/Sie', 'könnten', 'würden', 'hätten', 'sollten'],
    ],
    examples: [
      { de: 'Könnten Sie mir bitte helfen?', ru: 'Не могли бы вы мне помочь?' },
      { de: 'Würden Sie bitte etwas langsamer sprechen?', ru: 'Не могли бы вы говорить немного медленнее?' },
      { de: 'Ich hätte gern eine Fahrkarte nach Hamburg.', ru: 'Я хотел бы билет до Гамбурга.' },
      { de: 'Du solltest nicht so schnell fahren.', ru: 'Тебе не следует ездить так быстро.' },
      { de: 'An deiner Stelle würde ich mit der S-Bahn fahren.', ru: 'На твоём месте я бы поехал на электричке.' },
      { de: 'Könntest du mich morgen zum Bahnhof bringen?', ru: 'Ты не мог бы завтра отвезти меня на вокзал?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Entschuldigung, ___ Sie mir sagen, wo Gleis 5 ist?',
        options: ['könnten', 'konnten', 'hätten', 'sollten'],
        answer: 0,
        explanationRu: 'Вежливая просьба: könnten (с умлаутом) = «не могли бы». konnten без умлаута — это прошедшее время «могли».',
      },
      {
        type: 'choice',
        prompt: 'Ich ___ gern eine Fahrkarte nach Hamburg.',
        options: ['hätte', 'hatte', 'würde', 'könnte'],
        answer: 0,
        explanationRu: 'Ich hätte gern … = «я хотел бы (получить)». würde и könnte требуют инфинитива в конце, а hatte — прошедшее время.',
      },
      {
        type: 'choice',
        prompt: 'Du bist sehr müde. Du ___ heute nicht mehr Auto fahren.',
        options: ['solltest', 'solltet', 'sollten', 'sollte'],
        answer: 0,
        explanationRu: 'Совет для du: du solltest (окончание -st, как у всех глаголов с du).',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist am höflichsten?',
        options: ['Geben Sie mir den Fahrplan!', 'Ich will den Fahrplan.', 'Könnten Sie mir bitte den Fahrplan geben?'],
        answer: 2,
        explanationRu: 'Самая вежливая форма — вопрос с könnten и bitte. Повелительное наклонение и ich will звучат грубо.',
      },
      {
        type: 'gap',
        prompt: '___ Sie bitte etwas langsamer sprechen?',
        answers: ['Könnten', 'Würden'],
        explanationRu: 'Вежливая просьба к Sie: Könnten Sie …? или Würden Sie …? Инфинитив sprechen стоит в конце.',
      },
      {
        type: 'gap',
        prompt: 'Wir ___ gern zwei Fahrkarten nach Berlin, bitte.',
        answers: ['hätten'],
        explanationRu: 'Желание вежливо: wir hätten gern … Форма для wir оканчивается на -n: hätten.',
      },
      {
        type: 'gap',
        prompt: 'An deiner Stelle ___ ich mit dem Zug fahren.',
        answers: ['würde'],
        explanationRu: 'Совет: An deiner Stelle würde ich … — «на твоём месте я бы…». После würde инфинитив (fahren) в конце.',
      },
      {
        type: 'order',
        words: ['Könntest', 'du', 'mich', 'zum Bahnhof', 'bringen?'],
        translationRu: 'Ты не мог бы отвезти меня на вокзал?',
        explanationRu: 'В вопросе-просьбе könntest стоит на первом месте, инфинитив bringen — в конце.',
      },
      {
        type: 'order',
        words: ['Wann', 'sollten', 'wir', 'am Bahnhof', 'sein?'],
        translationRu: 'Когда нам следует быть на вокзале?',
        explanationRu: 'W-вопрос: вопросительное слово, затем sollten (2-е место), подлежащее, инфинитив sein в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Сделайте просьбу вежливой с помощью «Könnten Sie …?».',
        prompt: 'Machen Sie bitte die Tür auf.',
        answers: ['Könnten Sie bitte die Tür aufmachen?', 'Könnten Sie die Tür bitte aufmachen?'],
        explanationRu: 'Könnten — на первое место, aufmachen — целиком в конец: отделяемая приставка соединяется с глаголом в инфинитиве.',
      },
      {
        type: 'choice',
        audio: 'Du solltest den Zug um acht Uhr nehmen.',
        prompt: 'Что вам советуют?',
        options: ['Поехать поездом в восемь часов.', 'Поехать автобусом в восемь часов.', 'Вызвать такси в восемь часов.'],
        answer: 0,
        explanationRu: 'Вы слышите: «Du solltest den Zug um acht Uhr nehmen» — der Zug = поезд, sollte = совет.',
      },
      {
        type: 'gap',
        audio: 'Könnten Sie mir bitte helfen?',
        prompt: 'Напишите первое слово, которое вы слышите: ___ Sie mir bitte helfen?',
        answers: ['Könnten'],
        explanationRu: 'Вы слышите könnten — с умлаутом ö. Это вежливая просьба «не могли бы вы…».',
      },
    ],
  },
  vocab: [
    { de: 'Verspätung', article: 'die', plural: '-en', pos: 'noun', ru: 'опоздание, задержка', example: 'Der Zug hat zwanzig Minuten Verspätung.', exampleRu: 'Поезд опаздывает на двадцать минут.', pronRu: 'фэа-ШПЭ-тунг' },
    { de: 'Stau', article: 'der', plural: '-s', pos: 'noun', ru: 'пробка (на дороге)', example: 'Auf der Autobahn war ein langer Stau.', exampleRu: 'На автобане была длинная пробка.', pronRu: 'ШТАУ' },
    { de: 'Führerschein', article: 'der', plural: '-e', pos: 'noun', ru: 'водительские права', example: 'Ich habe den Führerschein mit 18 gemacht.', exampleRu: 'Я получил права в 18 лет.', pronRu: 'ФЮ-ра-шайн' },
    { de: 'Ampel', article: 'die', plural: '-n', pos: 'noun', ru: 'светофор', example: 'Die Ampel ist rot, wir müssen warten.', exampleRu: 'Светофор красный, нам нужно подождать.', pronRu: 'АМ-пель' },
    { de: 'Kreuzung', article: 'die', plural: '-en', pos: 'noun', ru: 'перекрёсток', example: 'Fahren Sie an der Kreuzung links.', exampleRu: 'На перекрёстке поверните налево.', pronRu: 'КРОЙ-цунг' },
    { de: 'Tankstelle', article: 'die', plural: '-n', pos: 'noun', ru: 'заправка (АЗС)', example: 'Gibt es hier in der Nähe eine Tankstelle?', exampleRu: 'Здесь поблизости есть заправка?', pronRu: 'ТАНК-ште-ле' },
    { de: 'tanken', forms: 'tankt, hat getankt', pos: 'verb', ru: 'заправлять(ся) топливом', example: 'Ich muss vor der Fahrt noch tanken.', exampleRu: 'Перед поездкой мне ещё нужно заправиться.' },
    { de: 'parken', forms: 'parkt, hat geparkt', pos: 'verb', ru: 'парковать(ся)', example: 'Hier darf man nicht parken.', exampleRu: 'Здесь нельзя парковаться.' },
    { de: 'Parkplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'парковка, место для стоянки', example: 'Im Zentrum findet man nur schwer einen Parkplatz.', exampleRu: 'В центре трудно найти место для парковки.' },
    { de: 'Autobahn', article: 'die', plural: '-en', pos: 'noun', ru: 'автобан, скоростное шоссе', example: 'Auf der Autobahn fahren wir schneller.', exampleRu: 'По автобану мы едем быстрее.' },
    { de: 'Unfall', article: 'der', plural: '-¨e', pos: 'noun', ru: 'авария, несчастный случай', example: 'Gestern habe ich an der Kreuzung einen Unfall gesehen.', exampleRu: 'Вчера я видел аварию на перекрёстке.', pronRu: 'УН-фаль' },
    { de: 'Panne', article: 'die', plural: '-n', pos: 'noun', ru: 'поломка (в пути)', example: 'Mein Auto hatte eine Panne auf der Autobahn.', exampleRu: 'У моей машины случилась поломка на автобане.' },
    { de: 'Werkstatt', article: 'die', plural: '-¨en', pos: 'noun', ru: 'мастерская, автосервис', example: 'Das Auto ist seit Montag in der Werkstatt.', exampleRu: 'Машина с понедельника в автосервисе.', pronRu: 'ВЭРК-штат' },
    { de: 'umsteigen', forms: 'steigt um, ist umgestiegen', pos: 'verb', ru: 'делать пересадку', example: 'In Köln müssen Sie umsteigen.', exampleRu: 'В Кёльне вам нужно сделать пересадку.', pronRu: 'УМ-штай-гэн' },
    { de: 'Anschluss', article: 'der', plural: '-¨e', pos: 'noun', ru: 'пересадка, стыковочный поезд', example: 'Wegen der Verspätung habe ich meinen Anschluss verpasst.', exampleRu: 'Из-за опоздания я пропустил свою пересадку.', pronRu: 'АН-шлус' },
    { de: 'verpassen', forms: 'verpasst, hat verpasst', pos: 'verb', ru: 'опоздать (на транспорт), пропустить', example: 'Ich habe den Bus verpasst.', exampleRu: 'Я опоздал на автобус.', pronRu: 'фэа-ПА-сэн' },
    { de: 'ausfallen', forms: 'fällt aus, ist ausgefallen', pos: 'verb', ru: 'отменяться (о поезде, уроке)', example: 'Der Zug um neun Uhr fällt heute aus.', exampleRu: 'Поезд в девять часов сегодня отменён.', pronRu: 'АУС-фа-лен' },
    { de: 'Durchsage', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление (по громкоговорителю)', example: 'Haben Sie die Durchsage verstanden?', exampleRu: 'Вы поняли объявление?', pronRu: 'ДУРХ-за-гэ' },
    { de: 'pünktlich', pos: 'adj', ru: 'пунктуальный; вовремя', example: 'Der Bus ist heute pünktlich.', exampleRu: 'Автобус сегодня пришёл вовремя.', pronRu: 'ПЮНКТ-лихь' },
    { de: 'Verkehr', article: 'der', plural: '–', pos: 'noun', ru: 'движение (транспорта)', example: 'Morgens ist in der Stadt viel Verkehr.', exampleRu: 'Утром в городе сильное движение.', pronRu: 'фэа-КЕ:А' },
  ],
  listening: {
    title: 'Am Bahnhof: Der Zug hat Verspätung',
    kind: 'dialog',
    text: `A: Entschuldigung, könnten Sie mir bitte helfen? Ich möchte nach Leipzig. Mein Zug fährt um 10:15 Uhr, aber ich finde ihn nicht.
B: Moment, ich schaue mal. Ah, der ICE nach Leipzig hat heute leider 40 Minuten Verspätung.
A: 40 Minuten? Oh nein! In Leipzig muss ich umsteigen. Dann verpasse ich meinen Anschluss nach Dresden.
B: Das kann sein. Sie könnten aber den Regionalzug um 10:30 Uhr nehmen. Er ist langsamer, aber er fährt pünktlich.
A: Und wann komme ich dann in Dresden an?
B: Um 13:05 Uhr. Mit dem ICE kommen Sie erst um 13:40 Uhr an.
A: Gut, dann nehme ich den Regionalzug. Kann ich mit meiner Fahrkarte fahren?
B: Ja, heute ist das kein Problem. Aber Sie sollten schnell gehen. Der Zug fährt von Gleis 7, und das ist ganz hinten.
A: Vielen Dank! Ach, noch eine Frage: Wo könnte ich hier schnell einen Kaffee kaufen?
B: Direkt neben Gleis 7 gibt es einen Kiosk.
A: Super, danke schön!`,
    questions: [
      { question: 'Wo muss die Frau umsteigen?', options: ['In Leipzig.', 'In Dresden.', 'In Berlin.'], answer: 0 },
      { question: 'Wie viel Verspätung hat der ICE?', options: ['15 Minuten.', '30 Minuten.', '40 Minuten.'], answer: 2 },
      { question: 'Welchen Tipp gibt der Mann?', options: ['Ein Taxi nehmen.', 'Den Regionalzug nehmen.', 'Morgen fahren.'], answer: 1 },
      { question: 'Wann ist die Frau mit dem Regionalzug in Dresden?', options: ['Um 13:05 Uhr.', 'Um 13:40 Uhr.', 'Um 10:30 Uhr.'], answer: 0 },
      { question: 'Wo kann die Frau Kaffee kaufen?', options: ['Im Zug.', 'Neben Gleis 7.', 'Am Eingang.'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'Вы едете на встречу с подругой Марией, но ваш поезд опаздывает. Напишите ей сообщение (40–60 слов): объясните, почему вы опаздываете, когда вы будете на месте, и вежливо попросите её о чём-нибудь (Könntest du …?).',
    taskDe:
      'Sie sind mit Ihrer Freundin Maria im Café verabredet. Aber Ihr Zug hat Verspätung. Schreiben Sie Maria eine Nachricht.',
    points: [
      'Warum kommen Sie zu spät?',
      'Wann sind Sie im Café?',
      'Bitten Sie Maria höflich um etwas (z. B. warten, schon bestellen).',
    ],
    minWords: 40,
    usefulPhrases: [
      'Liebe Maria,',
      'leider komme ich später, weil …',
      'Mein Zug hat … Minuten Verspätung.',
      'Ich bin ungefähr um … Uhr da.',
      'Könntest du bitte …?',
      'Würdest du schon einen Tisch suchen?',
      'Es tut mir leid!',
      'Bis gleich!',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы на вокзале во Франкфурте. Ваш поезд в Кёльн отменили. Вы подходите к информационной стойке и вежливо спрашиваете, как вам теперь доехать.',
    aiRole:
      'Sie arbeiten am Informationsschalter im Bahnhof Frankfurt. Der Zug des Kunden nach Köln um 14:10 Uhr fällt heute aus. Die nächste Verbindung: Abfahrt 14:40 Uhr, Gleis 9, ohne Umsteigen, Ankunft in Köln 15:55 Uhr. Die Fahrkarte des Kunden gilt auch für diesen Zug. Sprechen Sie sehr einfach und langsam (Niveau A2), nur kurze Sätze. Seien Sie freundlich und geduldig. Wenn der Kunde ein Wort nicht weiß, helfen Sie ihm. Benutzen Sie selbst höfliche Formen wie „Sie könnten …“ oder „Sie sollten …“.',
    opener: 'Guten Tag! Wie kann ich Ihnen helfen?',
    tasksRu: [
      'Вежливо спросите о своём поезде (Könnten Sie mir sagen …? / Mein Zug nach Köln …)',
      'Узнайте, когда и с какого пути идёт следующий поезд',
      'Спросите, нужно ли делать пересадку и подходит ли ваш билет',
      'Попросите совет: Was sollte ich jetzt machen? — и поблагодарите',
    ],
    readAloud: [
      'Könnten Sie mir bitte helfen?',
      'Ich hätte gern eine Fahrkarte nach Köln.',
      'Der Zug hat zwanzig Minuten Verspätung.',
      'Du solltest früher losfahren.',
    ],
  },
};
