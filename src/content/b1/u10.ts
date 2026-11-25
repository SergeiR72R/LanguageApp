import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-10',
  level: 'B1',
  order: 10,
  title: 'Feste & Gesellschaft',
  titleRu: 'Праздники и общество',
  goalsRu: [
    'Рассказывать о праздниках, традициях и обычаях в Германии и своей стране',
    'Употреблять инфинитив с zu, а также um … zu / damit, ohne … zu, statt … zu',
    'Выражать временны́е отношения с помощью als, wenn, während, bevor, nachdem, seitdem',
    'Писать приглашение и планировать праздник вместе с другими',
  ],
  grammar: {
    topic: 'Infinitiv mit zu; um … zu / damit; ohne … zu / statt … zu; temporale Nebensätze',
    topicRu: 'Инфинитив с zu; цель; временные придаточные предложения',
    explanationRu: `**Инфинитив с zu** стоит в конце после многих глаголов и выражений: versuchen, vergessen, anfangen, vorhaben, Lust/Zeit haben, es ist wichtig … Ich habe vergessen, Brot **zu kaufen**. У отделяемых глаголов zu стоит внутри: ein**zu**laden. После модальных глаголов zu **не** нужно.

**Цель («чтобы»):**

- **um … zu** — если подлежащее одно и то же: Ich spare, **um** eine Party **zu** machen.
- **damit** + придаточное — если подлежащие разные: Ich schreibe die Adresse auf, **damit** die Gäste uns finden.

**ohne … zu** — «не делая»: Er ging, ohne sich zu verabschieden. **statt … zu** — «вместо того чтобы»: Statt zu kochen, bestellen wir Pizza.

**Временные союзы** (глагол в конце придаточного):

- **als** — когда (однократно в прошлом)
- **wenn** — когда (каждый раз; в настоящем и будущем)
- **während** — пока, в то время как
- **bevor** — прежде чем
- **nachdem** — после того как: если в главном предложении прошедшее время, в придаточном — **плюсквамперфект** (Nachdem wir gegessen **hatten**, tanzten wir).
- **seitdem / seit** — с тех пор как

**Типичные ошибки русскоговорящих:**

- Русское «когда» переводят всегда как wenn: «Wenn ich 2015 nach Berlin kam» — для единичного события в прошлом нужно **als**.
- Русское «для того чтобы» переводят как «für … zu» — правильно **um … zu**.
- Ставят zu после модального глагола: «Ich kann zu tanzen» — правильно **Ich kann tanzen**.
- Неправильно ставят zu в отделяемых глаголах: «zu einladen» вместо **einzuladen**.
- Используют um … zu при разных подлежащих — тогда нужно **damit**.`,
    table: [
      ['Союз', 'Значение', 'Пример'],
      ['als', 'когда (один раз в прошлом)', 'Als ich 18 wurde, gab es eine große Party.'],
      ['wenn', 'когда (каждый раз; сейчас/в будущем)', 'Immer wenn wir Geburtstag feiern, backt Oma einen Kuchen.'],
      ['während', 'пока, в то время как', 'Während die Gäste essen, spielt die Band.'],
      ['bevor', 'прежде чем', 'Bevor die Gäste kommen, räumen wir auf.'],
      ['nachdem', 'после того как', 'Nachdem wir gegessen hatten, tanzten alle.'],
      ['seitdem / seit', 'с тех пор как', 'Seitdem ich in Köln wohne, feiere ich Karneval.'],
    ],
    examples: [
      { de: 'Wir haben vor, im Juli ein großes Sommerfest zu organisieren.', ru: 'Мы планируем организовать в июле большой летний праздник.' },
      { de: 'Sie ist nach München gefahren, um das Oktoberfest zu besuchen.', ru: 'Она поехала в Мюнхен, чтобы побывать на Октоберфесте.' },
      { de: 'Ich schicke euch die Adresse, damit ihr uns leicht findet.', ru: 'Я пришлю вам адрес, чтобы вы легко нас нашли.' },
      { de: 'Er ist von der Party gegangen, ohne sich zu verabschieden.', ru: 'Он ушёл с вечеринки, не попрощавшись.' },
      { de: 'Als wir in Köln ankamen, war der Karneval schon in vollem Gang.', ru: 'Когда мы приехали в Кёльн, карнавал был уже в самом разгаре.' },
      { de: 'Nachdem die Gäste gegangen waren, räumten wir die Küche auf.', ru: 'После того как гости ушли, мы убрали кухню.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ ich zum ersten Mal Silvester in Berlin gefeiert habe, war ich total begeistert.',
        options: ['Als', 'Wenn', 'Bevor', 'Ob'],
        answer: 0,
        explanationRu: 'Однократное событие в прошлом → als. wenn для прошлого используется только при повторении.',
      },
      {
        type: 'choice',
        prompt: 'Ich spare Geld, ___ meinen 30. Geburtstag groß zu feiern.',
        options: ['damit', 'für', 'um', 'weil'],
        answer: 2,
        explanationRu: 'Цель при одном и том же подлежащем + инфинитив с zu → um … zu. «für … zu» не существует.',
      },
      {
        type: 'choice',
        prompt: 'Wir verschicken die Einladungen früh, ___ alle Gäste Zeit haben.',
        options: ['um', 'damit', 'ohne', 'statt'],
        answer: 1,
        explanationRu: 'Подлежащие разные (wir — alle Gäste), и в придаточном есть спрягаемый глагол → damit.',
      },
      {
        type: 'choice',
        prompt: 'Wir müssen noch die Wohnung putzen, ___ die Gäste kommen.',
        options: ['nachdem', 'als', 'seitdem', 'bevor'],
        answer: 3,
        explanationRu: 'Уборка должна быть до прихода гостей → bevor (прежде чем).',
      },
      {
        type: 'gap',
        prompt: 'Hast du Lust, am Samstag mit uns auf das Stadtfest ___ gehen?',
        answers: ['zu'],
        explanationRu: 'После выражения Lust haben используется инфинитив с zu.',
      },
      {
        type: 'gap',
        prompt: 'Vergiss nicht, deine Nachbarn zur Party ___!',
        answers: ['einzuladen'],
        hintRu: 'einladen',
        explanationRu: 'После vergessen — инфинитив с zu. У отделяемого глагола zu стоит между приставкой и корнем: einzuladen.',
      },
      {
        type: 'gap',
        prompt: 'Er hat die ganze Nacht getanzt, ___ einmal Pause zu machen.',
        answers: ['ohne'],
        explanationRu: '«Не сделав ни одного перерыва» → ohne … zu.',
      },
      {
        type: 'gap',
        prompt: '___ ich in Deutschland lebe, feiere ich mit meinen Kindern auch Sankt Martin.',
        answers: ['Seitdem', 'Seit'],
        explanationRu: '«С тех пор как я живу в Германии» → seitdem (или seit); глагол lebe в конце.',
      },
      {
        type: 'order',
        words: ['Nachdem', 'alle', 'Gäste', 'gegangen', 'waren,', 'räumten', 'wir', 'auf.'],
        translationRu: 'После того как все гости ушли, мы убрались.',
        explanationRu: 'В придаточном с nachdem — плюсквамперфект (gegangen waren), в главном — претерит. Главное начинается с глагола.',
      },
      {
        type: 'order',
        words: ['Während', 'die', 'Kinder', 'Laternen', 'basteln,', 'backen', 'die', 'Eltern', 'Kekse.'],
        translationRu: 'Пока дети мастерят фонарики, родители пекут печенье.',
        explanationRu: 'В придаточном с während глагол в конце (basteln); главное предложение начинается с глагола (backen).',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью um … zu.',
        prompt: 'Viele Menschen fahren nach Köln. Sie wollen Karneval feiern.',
        answers: ['Viele Menschen fahren nach Köln, um Karneval zu feiern.'],
        explanationRu: 'Подлежащее одно и то же, второе предложение выражает цель → um … zu + инфинитив в конце; wollen исчезает.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью statt … zu.',
        prompt: 'Er schreibt keine Geburtstagskarte. Er schickt nur eine kurze Nachricht.',
        answers: [
          'Statt eine Geburtstagskarte zu schreiben, schickt er nur eine kurze Nachricht.',
          'Er schickt nur eine kurze Nachricht, statt eine Geburtstagskarte zu schreiben.',
          'Anstatt eine Geburtstagskarte zu schreiben, schickt er nur eine kurze Nachricht.',
          'Er schickt nur eine kurze Nachricht, anstatt eine Geburtstagskarte zu schreiben.',
        ],
        explanationRu: '«Вместо того чтобы написать открытку» → statt … zu schreiben. Если эта часть стоит первой, главное предложение начинается с глагола.',
      },
    ],
  },
  vocab: [
    { de: 'Feier', article: 'die', plural: '-n', pos: 'noun', ru: 'праздник, торжество', example: 'Die Feier fand im Garten unserer Nachbarn statt.', exampleRu: 'Праздник проходил в саду наших соседей.' },
    { de: 'Feiertag', article: 'der', plural: '-e', pos: 'noun', ru: 'праздничный (нерабочий) день', example: 'Am 3. Oktober ist in Deutschland ein Feiertag.', exampleRu: '3 октября в Германии праздничный день.' },
    { de: 'Brauch', article: 'der', plural: '-¨e', pos: 'noun', ru: 'обычай', example: 'Zu Ostern Eier zu bemalen ist ein alter Brauch.', exampleRu: 'Раскрашивать яйца на Пасху — старый обычай.' },
    { de: 'Tradition', article: 'die', plural: '-en', pos: 'noun', ru: 'традиция', example: 'Bei uns ist es Tradition, an Heiligabend Karpfen zu essen.', exampleRu: 'У нас есть традиция есть карпа в сочельник.' },
    { de: 'Gastgeber', article: 'der', plural: '-', pos: 'noun', ru: 'хозяин (принимающий гостей)', example: 'Als Gastgeber muss man sich um alle Gäste kümmern.', exampleRu: 'Хозяин должен позаботиться обо всех гостях.' },
    { de: 'Hochzeit', article: 'die', plural: '-en', pos: 'noun', ru: 'свадьба', example: 'Zur Hochzeit meiner Cousine kamen über hundert Gäste.', exampleRu: 'На свадьбу моей двоюродной сестры пришли больше ста гостей.' },
    { de: 'Jubiläum', article: 'das', plural: 'Jubiläen', pos: 'noun', ru: 'юбилей, годовщина', example: 'Die Firma feiert dieses Jahr ihr 50-jähriges Jubiläum.', exampleRu: 'В этом году фирма отмечает свой 50-летний юбилей.' },
    { de: 'Umzug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'шествие; переезд', example: 'Beim Karnevalsumzug werfen die Leute Süßigkeiten.', exampleRu: 'Во время карнавального шествия люди бросают сладости.' },
    { de: 'Feuerwerk', article: 'das', plural: '-e', pos: 'noun', ru: 'фейерверк', example: 'Um Mitternacht gab es ein großes Feuerwerk über der Stadt.', exampleRu: 'В полночь над городом был большой фейерверк.' },
    { de: 'Verein', article: 'der', plural: '-e', pos: 'noun', ru: 'объединение, клуб, общество', example: 'Im Sportverein lernt man schnell neue Leute kennen.', exampleRu: 'В спортивном клубе быстро знакомишься с новыми людьми.' },
    { de: 'Gesellschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'общество; компания', example: 'In unserer Gesellschaft leben Menschen aus vielen Kulturen.', exampleRu: 'В нашем обществе живут люди из многих культур.' },
    { de: 'gratulieren', forms: '+ Dat; zu + Dat', pos: 'verb', ru: 'поздравлять', example: 'Wir gratulieren dir herzlich zum Geburtstag!', exampleRu: 'Сердечно поздравляем тебя с днём рождения!' },
    { de: 'sich verkleiden', forms: 'als + Nom', pos: 'verb', ru: 'наряжаться, переодеваться (в костюм)', example: 'Zum Karneval hat sich mein Sohn als Pirat verkleidet.', exampleRu: 'На карнавал мой сын нарядился пиратом.' },
    { de: 'anstoßen', forms: 'stößt an, stieß an, hat angestoßen; auf + Akk', pos: 'verb', ru: 'чокаться, поднимать бокалы (за что-л.)', example: 'Lasst uns auf das Brautpaar anstoßen!', exampleRu: 'Давайте выпьем за молодожёнов!' },
    { de: 'sich verabschieden', forms: 'von + Dat', pos: 'verb', ru: 'прощаться', example: 'Um Mitternacht haben wir uns von den Gastgebern verabschiedet.', exampleRu: 'В полночь мы попрощались с хозяевами.' },
    { de: 'stattfinden', forms: 'findet statt, fand statt, hat stattgefunden', pos: 'verb', ru: 'состояться, проходить', example: 'Das Stadtfest findet jedes Jahr im August statt.', exampleRu: 'Городской праздник проходит каждый год в августе.' },
    { de: 'sich engagieren', forms: 'für + Akk', pos: 'verb', ru: 'активно участвовать, заниматься (общественной деятельностью)', example: 'Sie engagiert sich in ihrer Freizeit für Flüchtlinge.', exampleRu: 'В свободное время она помогает беженцам.' },
    { de: 'festlich', pos: 'adj', ru: 'праздничный, нарядный', example: 'Zur Hochzeit tragen alle festliche Kleidung.', exampleRu: 'На свадьбу все надевают праздничную одежду.' },
    { de: 'ehrenamtlich', pos: 'adj', ru: 'на общественных началах, волонтёрский', example: 'Viele Helfer beim Stadtfest arbeiten ehrenamtlich.', exampleRu: 'Многие помощники на городском празднике работают бесплатно, как волонтёры.' },
    { de: 'Herzlichen Glückwunsch!', forms: 'zu + Dat', pos: 'phrase', ru: 'Поздравляю! Сердечно поздравляю!', example: 'Herzlichen Glückwunsch zur Hochzeit!', exampleRu: 'Сердечно поздравляю со свадьбой!' },
  ],
  listening: {
    title: 'Karneval in Köln',
    kind: 'dialog',
    text: `A: Irina, hast du am Donnerstag schon etwas vor?
B: Am Donnerstag? Nein, wieso? Das ist doch ein ganz normaler Arbeitstag.
A: Normal? Das ist Weiberfastnacht! Da beginnt in Köln der Straßenkarneval. Um elf Uhr elf hören viele Leute auf zu arbeiten und feiern auf der Straße.
B: Wirklich? Und was macht man da genau?
A: Man verkleidet sich, singt und tanzt. An Weiberfastnacht ist es Tradition, dass die Frauen den Männern die Krawatte abschneiden.
B: Lustig! Als ich letztes Jahr im Februar nach Köln gekommen bin, waren überall Leute in Kostümen. Ich hatte keine Ahnung, was los war.
A: Ja, das war bestimmt genau Karneval. Hast du Lust, dieses Jahr mitzufeiern? Wir gehen als Gruppe aus dem Büro.
B: Gern! Aber ich habe gar kein Kostüm.
A: Kein Problem. Viele Leute machen ihr Kostüm selbst, statt viel Geld im Laden auszugeben. Meine Kollegin verkleidet sich zum Beispiel jedes Jahr als Biene.
B: Gute Idee. Und was passiert am Montag? Ich habe gehört, dass da ein großer Umzug stattfindet.
A: Genau, der Rosenmontagszug. Während die Wagen durch die Stadt fahren, werfen die Leute auf den Wagen Süßigkeiten und Blumen ins Publikum. Bring unbedingt eine große Tasche mit, damit du alles sammeln kannst!
B: Das erinnert mich ein bisschen an die Masleniza bei uns. Da feiert man auch das Ende des Winters, bevor die Fastenzeit beginnt.
A: Ah, interessant! Und was isst man da?
B: Vor allem Bliny, also dünne Pfannkuchen. Wenn du willst, backe ich nächste Woche welche fürs Büro.
A: Super, sehr gern! Dann feiern wir dieses Jahr einfach zwei Feste!`,
    questions: [
      {
        question: 'Wann beginnt in Köln der Straßenkarneval?',
        options: ['Am Rosenmontag um elf Uhr', 'An Weiberfastnacht um elf Uhr elf', 'Am Sonntag um zwölf Uhr'],
        answer: 1,
      },
      {
        question: 'Was machen die Frauen an Weiberfastnacht traditionell?',
        options: ['Sie backen Pfannkuchen.', 'Sie werfen Süßigkeiten.', 'Sie schneiden den Männern die Krawatte ab.', 'Sie arbeiten länger.'],
        answer: 2,
      },
      {
        question: 'Was hat Irina erlebt, als sie nach Köln gekommen ist?',
        options: ['Sie hat überall Leute in Kostümen gesehen.', 'Sie hat sofort mitgefeiert.', 'Sie hat sich ein teures Kostüm gekauft.'],
        answer: 0,
      },
      {
        question: 'Warum soll Irina eine große Tasche mitbringen?',
        options: ['Für ihr Kostüm', 'Für die Bliny', 'Für ihre Getränke', 'Damit sie Süßigkeiten und Blumen sammeln kann'],
        answer: 3,
      },
      {
        question: 'Was bietet Irina an?',
        options: ['Sie will ein Kostüm für die Kollegin nähen.', 'Sie will Bliny fürs Büro backen.', 'Sie will den Umzug organisieren.'],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Ваш немецкий друг хочет узнать больше о праздниках в вашей стране. Напишите ему письмо о своём любимом празднике и пригласите его.',
    taskDe: 'Ihr deutscher Freund möchte mehr über Feste in Ihrem Heimatland wissen. Schreiben Sie ihm eine E-Mail über Ihr Lieblingsfest und laden Sie ihn ein.',
    points: [
      'Welches Fest ist es und wann feiert man es?',
      'Welche Bräuche und Traditionen gibt es?',
      'Ihre schönste Erinnerung an dieses Fest',
      'Laden Sie Ihren Freund ein.',
    ],
    minWords: 100,
    usefulPhrases: [
      'Bei uns feiert man im … das Fest …',
      'Bevor das Fest beginnt, …',
      'Man trifft sich mit der Familie, um zusammen zu essen und zu feiern.',
      'Als ich Kind war, …',
      'Hast du Lust, dieses Jahr mit uns zu feiern?',
      'Ich würde mich sehr freuen, wenn du kommen könntest.',
    ],
  },
  speaking: {
    scenarioRu: 'Вы вместе с коллегой организуете рождественскую вечеринку вашего отдела. Обсудите место, программу и распределите задачи.',
    aiRole:
      'Sie sind Sabine, eine Kollegin, und organisieren zusammen mit Ihrem Gesprächspartner die Weihnachtsfeier der Abteilung. Sie haben viele Ideen, fragen aber auch nach Festen und Bräuchen aus dem Heimatland Ihres Partners. Sprechen Sie freundlich auf B1-Niveau und benutzen Sie Sätze mit um … zu, damit, bevor und nachdem.',
    opener: 'Also, die Chefin hat gesagt, dass wir beide dieses Jahr die Weihnachtsfeier organisieren sollen. Hast du schon eine Idee, wo wir feiern könnten?',
    tasksRu: [
      'Предложите место и программу праздника (um … zu, damit).',
      'Обсудите порядок событий (bevor, nachdem, während).',
      'Расскажите о празднике в вашей стране (Als ich Kind war, … / Immer wenn …).',
      'Распределите задачи (Kannst du daran denken, … zu …?).',
    ],
    readAloud: [
      'Bevor die Gäste kommen, müssen wir noch die Tische schmücken.',
      'Als ich klein war, haben wir Weihnachten immer bei meinen Großeltern gefeiert.',
      'Um Mitternacht stoßen wir an, um das neue Jahr zu begrüßen.',
    ],
  },
};
