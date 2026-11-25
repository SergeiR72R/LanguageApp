import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-08',
  level: 'B1',
  order: 8,
  title: 'Wünsche & Pläne',
  titleRu: 'Желания и планы',
  goalsRu: [
    'Говорить о мечтах, желаниях и планах на будущее',
    'Давать советы и вежливо формулировать просьбы',
    'Описывать нереальные ситуации с помощью wenn + Konjunktiv II',
    'Правильно образовывать формы wäre, hätte, könnte, sollte и würde + Infinitiv',
  ],
  grammar: {
    topic: 'Konjunktiv II Gegenwart: Wünsche, Ratschläge, Höflichkeit, irreale Bedingungen',
    topicRu: 'Сослагательное наклонение (Konjunktiv II) в настоящем времени',
    explanationRu: `**Konjunktiv II** соответствует русской частице **«бы»**. Он нужен в четырёх ситуациях:

- **Желания:** Ich **hätte** gern mehr Freizeit. Wenn ich nur mehr Zeit **hätte**!
- **Советы:** Du **solltest** mehr schlafen. An deiner Stelle **würde** ich zum Arzt gehen.
- **Вежливость:** **Könnten** Sie mir helfen? **Würden** Sie bitte das Fenster schließen?
- **Нереальные условия:** Wenn ich reich **wäre**, **würde** ich um die Welt reisen.

**Образование.** Для большинства глаголов используется **würde + Infinitiv** (в конце предложения): Ich würde gern reisen. Но у самых частых глаголов есть собственные формы — их используют вместо würde:

- sein → **wäre**, haben → **hätte**
- können → **könnte**, müssen → **müsste**, dürfen → **dürfte**
- sollen → **sollte**, wollen → **wollte** (без умлаута!)
- wissen → **wüsste**

**Нереальное условие:** в части с **wenn** глагол стоит в конце, главное предложение начинается с глагола: Wenn ich Zeit **hätte**, **würde** ich dich besuchen. Сравните с реальным условием: Wenn ich Zeit **habe**, besuche ich dich (это возможно).

**Типичные ошибки русскоговорящих:**

- В русском «бы» одно на все случаи, поэтому würde ставят везде: «Wenn ich reich sein würde» — лучше **Wenn ich reich wäre**; «Ich würde ein Auto haben» — лучше **Ich hätte ein Auto**.
- Путают формы с умлаутом и без: **hatte** (было) — **hätte** (было бы), **war** — **wäre**, **konnte** — **könnte**. Умлаут меняет смысл!
- Пишут «söllte» — правильно **sollte** (без умлаута).
- Забывают ставить глагол в конец придаточного с wenn.`,
    table: [
      ['', 'sein', 'haben', 'können', 'werden (+ Infinitiv)'],
      ['ich', 'wäre', 'hätte', 'könnte', 'würde'],
      ['du', 'wärst', 'hättest', 'könntest', 'würdest'],
      ['er/sie/es', 'wäre', 'hätte', 'könnte', 'würde'],
      ['wir', 'wären', 'hätten', 'könnten', 'würden'],
      ['ihr', 'wärt', 'hättet', 'könntet', 'würdet'],
      ['sie/Sie', 'wären', 'hätten', 'könnten', 'würden'],
    ],
    examples: [
      { de: 'Ich hätte gern mehr Zeit für meine Hobbys.', ru: 'Мне бы хотелось иметь больше времени на хобби.' },
      { de: 'Wenn ich im Lotto gewinnen würde, würde ich eine Weltreise machen.', ru: 'Если бы я выиграл в лотерею, я бы отправился в кругосветное путешествие.' },
      { de: 'An deiner Stelle würde ich das Angebot annehmen.', ru: 'На твоём месте я бы принял это предложение.' },
      { de: 'Du solltest mehr Pausen machen.', ru: 'Тебе следовало бы чаще делать перерывы.' },
      { de: 'Könnten Sie mir bitte einen Rat geben?', ru: 'Не могли бы вы дать мне совет?' },
      { de: 'Wenn ich doch nur besser Deutsch sprechen könnte!', ru: 'Если бы я только лучше говорил по-немецки!' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Wenn ich mehr Geld ___, würde ich ein Haus am Meer kaufen.',
        options: ['hätte', 'hatte', 'habe', 'würde'],
        answer: 0,
        explanationRu: 'Нереальное условие → Konjunktiv II. Для haben используется собственная форма hätte. hatte — это претерит (было).',
      },
      {
        type: 'choice',
        prompt: '___ Sie mir bitte das Salz geben?',
        options: ['Konnten', 'Könnten', 'Hätten', 'Wären'],
        answer: 1,
        explanationRu: 'Вежливая просьба: Könnten Sie …? Konnten (без умлаута) — претерит «могли».',
      },
      {
        type: 'choice',
        prompt: 'Du siehst müde aus. Du ___ früher ins Bett gehen.',
        options: ['söllte', 'solltet', 'solltest', 'hättest'],
        answer: 2,
        explanationRu: 'Совет: du solltest + Infinitiv. У sollen в Konjunktiv II нет умлаута, а форма для du оканчивается на -st.',
      },
      {
        type: 'choice',
        prompt: 'Wenn das Wetter schöner ___, könnten wir grillen.',
        options: ['ist', 'war', 'würde', 'wäre'],
        answer: 3,
        explanationRu: 'Нереальное условие → sein в Konjunktiv II: wäre. Одно würde без инфинитива невозможно.',
      },
      {
        type: 'gap',
        prompt: 'An deiner Stelle ___ ich mit dem Chef sprechen.',
        answers: ['würde'],
        explanationRu: 'Совет «на твоём месте я бы…» → würde + Infinitiv (sprechen в конце).',
      },
      {
        type: 'gap',
        prompt: 'Ich ___ gern einen Termin am Freitag.',
        answers: ['hätte'],
        explanationRu: 'Вежливое желание: Ich hätte gern … (= Ich möchte …).',
      },
      {
        type: 'gap',
        prompt: 'Wenn ich du ___, würde ich weniger arbeiten.',
        answers: ['wäre'],
        explanationRu: 'Нереальная ситуация (я не ты) → sein в Konjunktiv II: wäre, в конце придаточного.',
      },
      {
        type: 'gap',
        prompt: 'Es wäre schön, wenn ihr am Wochenende kommen ___.',
        answers: ['könntet', 'würdet'],
        explanationRu: 'Желание в Konjunktiv II; для ihr: könntet (или würdet). Глагол стоит в конце придаточного.',
      },
      {
        type: 'order',
        words: ['Wenn', 'ich', 'mehr', 'Zeit', 'hätte,', 'würde', 'ich', 'Gitarre', 'lernen.'],
        translationRu: 'Если бы у меня было больше времени, я бы научился играть на гитаре.',
        explanationRu: 'В придаточном hätte стоит в конце; главное предложение начинается с würde, инфинитив lernen — в конце.',
      },
      {
        type: 'order',
        words: ['Könnten', 'Sie', 'das', 'bitte', 'noch', 'einmal', 'wiederholen?'],
        translationRu: 'Не могли бы вы, пожалуйста, повторить это ещё раз?',
        explanationRu: 'Вежливый вопрос: Könnten на первом месте, инфинитив wiederholen — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Сформулируйте нереальное условие с wenn (Konjunktiv II).',
        prompt: 'Ich habe kein Auto. Deshalb fahre ich nicht ans Meer.',
        answers: ['Wenn ich ein Auto hätte, würde ich ans Meer fahren.', 'Wenn ich ein Auto hätte, führe ich ans Meer.'],
        explanationRu: 'Отрицание превращается в утверждение: kein Auto → ein Auto hätte; nicht fahren → würde fahren.',
      },
      {
        type: 'transform',
        instructionRu: 'Сформулируйте вежливую просьбу с Konjunktiv II.',
        prompt: 'Helfen Sie mir!',
        answers: ['Könnten Sie mir bitte helfen?', 'Könnten Sie mir helfen?', 'Würden Sie mir bitte helfen?', 'Würden Sie mir helfen?'],
        explanationRu: 'Императив звучит резко. Вежливо: Könnten/Würden Sie … + Infinitiv в конце?',
      },
    ],
  },
  vocab: [
    { de: 'Traum', article: 'der', plural: '-¨e', pos: 'noun', ru: 'мечта; сон', example: 'Ein eigenes Café war schon immer mein Traum.', exampleRu: 'Собственное кафе всегда было моей мечтой.' },
    { de: 'Ziel', article: 'das', plural: '-e', pos: 'noun', ru: 'цель', example: 'Mein Ziel für nächstes Jahr ist die B2-Prüfung.', exampleRu: 'Моя цель на следующий год — экзамен B2.' },
    { de: 'Zukunft', article: 'die', plural: '–', pos: 'noun', ru: 'будущее', example: 'In Zukunft möchte ich mehr Zeit mit meiner Familie verbringen.', exampleRu: 'В будущем я хочу проводить больше времени с семьёй.' },
    { de: 'Möglichkeit', article: 'die', plural: '-en', pos: 'noun', ru: 'возможность', example: 'In einer großen Stadt hat man mehr berufliche Möglichkeiten.', exampleRu: 'В большом городе больше профессиональных возможностей.' },
    { de: 'Entscheidung', article: 'die', plural: '-en', pos: 'noun', ru: 'решение', example: 'Das war die richtige Entscheidung.', exampleRu: 'Это было правильное решение.' },
    { de: 'Ratschlag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'совет', example: 'Danke für deinen Ratschlag, er hat mir sehr geholfen.', exampleRu: 'Спасибо за совет, он мне очень помог.' },
    { de: 'Weltreise', article: 'die', plural: '-n', pos: 'noun', ru: 'кругосветное путешествие', example: 'Nach dem Abitur hat sie eine Weltreise gemacht.', exampleRu: 'После окончания школы она совершила кругосветное путешествие.' },
    { de: 'Vorhaben', article: 'das', plural: '-', pos: 'noun', ru: 'замысел, план', example: 'Für dieses Vorhaben brauchen wir viel Geld.', exampleRu: 'Для этого замысла нам нужно много денег.' },
    { de: 'Rente', article: 'die', plural: '-n', pos: 'noun', ru: 'пенсия', example: 'Wenn ich in Rente bin, ziehe ich aufs Land.', exampleRu: 'Когда я выйду на пенсию, я перееду в деревню.' },
    { de: 'Auszeit', article: 'die', plural: '-en', pos: 'noun', ru: 'перерыв, тайм-аут (в работе)', example: 'Nach dem stressigen Jahr nehme ich mir eine Auszeit.', exampleRu: 'После напряжённого года я возьму перерыв.' },
    { de: 'sich wünschen', pos: 'verb', ru: 'желать (себе), хотеть', example: 'Zum Geburtstag wünsche ich mir ein neues Fahrrad.', exampleRu: 'На день рождения я хочу новый велосипед.' },
    { de: 'träumen', forms: 'von + Dat', pos: 'verb', ru: 'мечтать (о чём-л.)', example: 'Er träumt von einem Haus mit Garten.', exampleRu: 'Он мечтает о доме с садом.' },
    { de: 'verwirklichen', pos: 'verb', ru: 'осуществлять, воплощать', example: 'Mit fünfzig hat sie ihren Traum verwirklicht und ein Restaurant eröffnet.', exampleRu: 'В пятьдесят лет она осуществила мечту и открыла ресторан.' },
    { de: 'sich entscheiden', forms: 'entscheidet, entschied, hat entschieden; für + Akk', pos: 'verb', ru: 'решаться, делать выбор', example: 'Ich habe mich für das Studium in Hamburg entschieden.', exampleRu: 'Я выбрал учёбу в Гамбурге.' },
    { de: 'vorhaben', forms: 'hat vor, hatte vor, hat vorgehabt', pos: 'verb', ru: 'планировать, намереваться', example: 'Was hast du am Wochenende vor?', exampleRu: 'Что ты планируешь на выходные?' },
    { de: 'sich vornehmen', forms: 'nimmt sich vor, nahm sich vor, hat sich vorgenommen', pos: 'verb', ru: 'намереваться, ставить себе задачу', example: 'Für das neue Jahr habe ich mir viel vorgenommen.', exampleRu: 'На новый год у меня много планов.' },
    { de: 'unabhängig', pos: 'adj', ru: 'независимый', example: 'Mit einem eigenen Gehalt ist man finanziell unabhängig.', exampleRu: 'Со своей зарплатой ты финансово независим.' },
    { de: 'ehrgeizig', pos: 'adj', ru: 'честолюбивый, амбициозный', example: 'Meine Schwester ist sehr ehrgeizig und will Ärztin werden.', exampleRu: 'Моя сестра очень целеустремлённая и хочет стать врачом.' },
    { de: 'An deiner Stelle würde ich …', pos: 'phrase', ru: 'На твоём месте я бы …', example: 'An deiner Stelle würde ich noch einmal mit ihm sprechen.', exampleRu: 'На твоём месте я бы ещё раз с ним поговорил.' },
    { de: 'Es wäre schön, wenn …', pos: 'phrase', ru: 'Было бы здорово, если бы …', example: 'Es wäre schön, wenn wir uns bald wiedersehen könnten.', exampleRu: 'Было бы здорово, если бы мы скоро снова увиделись.' },
  ],
  listening: {
    title: 'Ein Traum von Südamerika',
    kind: 'dialog',
    text: `A: Hey Julia, du siehst so nachdenklich aus. Was ist los?
B: Ach, ich denke gerade über meine Zukunft nach. Ich arbeite jetzt seit sechs Jahren in der Bank, und eigentlich ist alles okay. Aber manchmal habe ich das Gefühl, dass ich etwas verpasse.
A: Was würdest du denn gern machen?
B: Ehrlich gesagt träume ich schon lange von einer Weltreise. Wenn ich genug Geld hätte, würde ich sofort kündigen und ein Jahr durch Südamerika reisen.
A: Wow! Und was hält dich davon ab?
B: Na ja, das Geld natürlich. Und meine Wohnung. Und meine Eltern wären bestimmt nicht begeistert.
A: Weißt du, du müsstest ja nicht gleich kündigen. Viele Firmen bieten heute eine Auszeit an. Hast du schon mal deine Chefin gefragt?
B: Nein, noch nicht. Meinst du, das wäre realistisch?
A: Warum nicht? Meine Schwester hat das letztes Jahr gemacht. Sie hat drei Jahre lang etwas weniger Gehalt bekommen und dann ein halbes Jahr frei gehabt. Danach hatte sie ihre alte Stelle wieder.
B: Das klingt eigentlich perfekt. Dann könnte ich meine Wohnung für ein halbes Jahr untervermieten.
A: Genau. An deiner Stelle würde ich nächste Woche mit der Chefin sprechen. Aber du solltest vorher einen genauen Plan machen: Wohin willst du, wie viel Geld brauchst du …
B: Du hast recht. Allein würde ich mich allerdings ein bisschen unsicher fühlen.
A: Dann frag doch Tim! Er hat gerade sein Studium beendet und weiß noch nicht, was er machen will.
B: Stimmt! Mit ihm wäre die Reise bestimmt lustig. Weißt du was? Ich rufe ihn heute Abend gleich an.
A: Super. Und vergiss nicht: Ich hätte gern jede Woche eine Postkarte!`,
    questions: [
      { question: 'Wie lange arbeitet Julia schon in der Bank?', options: ['Seit sechs Jahren', 'Seit drei Jahren', 'Seit einem Jahr'], answer: 0 },
      {
        question: 'Wovon träumt Julia?',
        options: ['Von einer neuen Wohnung', 'Von einem Studium', 'Von einer Reise durch Südamerika', 'Von einer Stelle als Chefin'],
        answer: 2,
      },
      {
        question: 'Was hat die Schwester von Julias Freundin gemacht?',
        options: [
          'Sie hat gekündigt und ist ausgewandert.',
          'Sie hat ein halbes Jahr frei genommen und danach wieder in ihrer alten Stelle gearbeitet.',
          'Sie hat ein Jahr in Südamerika studiert.',
        ],
        answer: 1,
      },
      {
        question: 'Was rät die Freundin Julia?',
        options: [
          'Sie soll sofort kündigen.',
          'Sie soll ihre Eltern um Geld bitten.',
          'Sie soll lieber allein reisen.',
          'Sie soll mit ihrer Chefin sprechen und einen Plan machen.',
        ],
        answer: 3,
      },
      { question: 'Mit wem möchte Julia vielleicht reisen?', options: ['Mit ihrer Schwester', 'Mit Tim', 'Mit ihrer Freundin', 'Mit ihren Eltern'], answer: 1 },
    ],
  },
  writing: {
    taskRu: 'Ваш друг Пауль написал вам, что хочет уволиться и на год уехать за границу, но не уверен в своём решении. Ответьте ему и дайте совет.',
    taskDe: 'Ihr Freund Paul hat Ihnen geschrieben: Er möchte kündigen und ein Jahr ins Ausland gehen, ist aber unsicher. Antworten Sie ihm und geben Sie ihm Ratschläge.',
    points: [
      'Reagieren Sie auf Pauls Nachricht.',
      'Was finden Sie gut an seinem Plan, was ist problematisch?',
      'Geben Sie mindestens zwei Ratschläge.',
      'Was würden Sie an seiner Stelle machen?',
    ],
    minWords: 90,
    usefulPhrases: [
      'Lieber Paul, vielen Dank für deine Nachricht!',
      'Ich finde deinen Plan toll, aber …',
      'Du solltest auf jeden Fall …',
      'An deiner Stelle würde ich …',
      'Wenn ich du wäre, würde ich …',
      'Es wäre schön, wenn du mir bald schreiben würdest, wie du dich entschieden hast.',
    ],
  },
  speaking: {
    scenarioRu: 'Вы с другом играете в игру «Что было бы, если …?». Вы по очереди задаёте друг другу гипотетические вопросы и рассказываете о своих мечтах.',
    aiRole:
      'Sie sind Max, ein neugieriger und fröhlicher Freund. Sie spielen mit Ihrem Gesprächspartner das Spiel „Was wäre, wenn …?“, stellen hypothetische Fragen (Lottogewinn, ein Jahr frei, Leben in einem anderen Land), erzählen von eigenen Träumen und geben Ratschläge. Sprechen Sie locker auf B1-Niveau und benutzen Sie oft den Konjunktiv II.',
    opener: 'Okay, ich fange an: Stell dir vor, du gewinnst morgen eine Million Euro. Was würdest du als Erstes machen?',
    tasksRu: [
      'Отвечайте на гипотетические вопросы, используя wenn … hätte/wäre/würde.',
      'Расскажите о своей мечте (Ich würde gern …, Ich hätte gern …).',
      'Дайте другу совет (Du solltest …, An deiner Stelle würde ich …).',
      'Задайте другу хотя бы два вопроса «Was würdest du machen, wenn …?».',
    ],
    readAloud: [
      'Wenn ich mehr Zeit hätte, würde ich öfter meine Freunde besuchen.',
      'Könnten Sie mir bitte sagen, wann der nächste Zug nach München fährt?',
      'Es wäre schön, wenn wir gemeinsam durch Österreich reisen könnten.',
    ],
  },
};
