import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-12',
  level: 'B1',
  order: 12,
  title: 'Essen & Ernährung',
  titleRu: 'Еда и питание',
  goalsRu: [
    'Говорить о своих привычках в еде, диетах и здоровом питании',
    'Строить косвенные вопросы с ob и вопросительными словами (порядок слов придаточного)',
    'Вежливо спрашивать в ресторане, магазине и по телефону: Können Sie mir sagen, …? Wissen Sie, ob …?',
    'Писать официальный запрос (например, в кейтеринг) и узнавать нужную информацию',
  ],
  grammar: {
    topic: 'Indirekte Fragesätze mit ob und W-Wörtern; höfliche Fragen',
    topicRu: 'Косвенные вопросы с ob и вопросительными словами; вежливые вопросы',
    explanationRu: `**Косвенный вопрос** — это вопрос, «встроенный» в другое предложение: Wissen Sie, **wann der Markt öffnet**? Он вводится:

- **вопросительным словом** (wer, was, wann, wo, wie, warum, wie viel, welcher …), если исходный вопрос начинался с W-слова: Wann öffnet der Markt? → Können Sie mir sagen, **wann** der Markt **öffnet**?
- союзом **ob** («ли»), если исходный вопрос требовал ответа «да/нет»: Ist das Gericht vegan? → Ich weiß nicht, **ob** das Gericht vegan **ist**.

Порядок слов — как в любом придаточном: спрягаемый глагол стоит **в конце**. Отделяемая приставка не отделяется (…, wann der Kochkurs **anfängt**), модальный и вспомогательный глагол стоят последними (…, ob man hier mit Karte zahlen **kann** / …, was du gekocht **hast**). Перед косвенным вопросом всегда ставится **запятая**.

Предлог перед вопросительным словом сохраняется: Mit wem gehst du essen? → Sag mir, **mit wem** du essen gehst. Так же с wo(r)-словами: Worauf hast du Lust? → Ich frage mich, **worauf** du Lust hast.

**Вежливые вопросы.** В ресторане, магазине или по телефону прямой вопрос может звучать резко. Вежливее: Können / Könnten Sie mir sagen, …? · Wissen Sie, …? · Darf ich fragen, …? · Ich möchte gern wissen, … · Ich wüsste gern, … Если всё предложение — вопрос (Wissen Sie, …?), в конце ставится «?», если утверждение (Ich möchte wissen, …) — точка.

Если косвенный вопрос стоит первым, главное предложение начинается с глагола: Ob das Café sonntags geöffnet hat, **weiß** ich nicht.

**Типичные ошибки русскоговорящих:**

- Прямой порядок слов после W-слова: «Wissen Sie, wann öffnet der Markt?» → **…, wann der Markt öffnet?**
- wenn вместо ob. Русское «ли» — это всегда **ob**: Ich weiß nicht, **ob** er Fleisch isst.
- ob пропускают совсем: «Er fragt, ist das vegan» → **Er fragt, ob das vegan ist.**
- После fragen ставят dass: «Sie fragt, dass …» → после fragen / wissen wollen — только **ob** или W-слово.`,
    table: [
      ['Прямой вопрос', 'Косвенный вопрос'],
      ['Wann öffnet die Mensa?', 'Können Sie mir sagen, wann die Mensa öffnet?'],
      ['Ist die Suppe vegetarisch?', 'Wissen Sie, ob die Suppe vegetarisch ist?'],
      ['Was kann ich hier bestellen?', 'Ich möchte wissen, was ich hier bestellen kann.'],
      ['Hast du schon gegessen?', 'Mama fragt, ob du schon gegessen hast.'],
      ['Womit würzt man das?', 'Erklär mir bitte, womit man das würzt.'],
    ],
    examples: [
      { de: 'Können Sie mir sagen, ob in der Soße Nüsse sind?', ru: 'Не подскажете, есть ли в соусе орехи?' },
      { de: 'Wissen Sie, wann der Wochenmarkt morgen anfängt?', ru: 'Вы не знаете, когда завтра начинается рынок?' },
      { de: 'Ich weiß nicht, wie viele Kalorien ein Croissant hat.', ru: 'Я не знаю, сколько калорий в круассане.' },
      { de: 'Der Kellner fragt, ob wir schon bestellen möchten.', ru: 'Официант спрашивает, готовы ли мы сделать заказ.' },
      { de: 'Könnten Sie mir erklären, wie man dieses Gericht zubereitet?', ru: 'Не могли бы вы объяснить, как готовится это блюдо?' },
      { de: 'Ob das Restaurant sonntags geöffnet hat, steht leider nicht auf der Webseite.', ru: 'Открыт ли ресторан по воскресеньям, на сайте, к сожалению, не написано.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Wissen Sie, ___?',
        options: ['wann öffnet die Bäckerei', 'wann die Bäckerei öffnet', 'öffnet die Bäckerei wann'],
        answer: 1,
        explanationRu: 'Косвенный вопрос — это придаточное: W-слово в начале, спрягаемый глагол в конце: wann die Bäckerei öffnet.',
      },
      {
        type: 'choice',
        prompt: 'Ich weiß nicht, ___ das Brot glutenfrei ist.',
        options: ['wenn', 'ob', 'dass', 'was'],
        answer: 1,
        explanationRu: 'Исходный вопрос «Ist das Brot glutenfrei?» требует ответа да/нет → ob («ли»). wenn здесь — типичная ошибка.',
      },
      {
        type: 'choice',
        prompt: 'Können Sie mir sagen, ___ ein Kilo Tomaten kostet?',
        options: ['wie viel', 'ob', 'wie', 'welche'],
        answer: 0,
        explanationRu: 'Спрашиваем о цене: Wie viel kostet ein Kilo Tomaten? → …, wie viel ein Kilo Tomaten kostet.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: [
          'Ich möchte wissen, ob ist das Gericht scharf.',
          'Ich möchte wissen, ob das Gericht scharf ist.',
          'Ich möchte wissen, ist das Gericht scharf.',
        ],
        answer: 1,
        explanationRu: 'После ob глагол уходит в конец: ob das Gericht scharf ist. Без ob косвенный вопрос «да/нет» невозможен.',
      },
      {
        type: 'gap',
        prompt: 'Die Kellnerin fragt, ___ wir noch einen Nachtisch möchten.',
        answers: ['ob'],
        explanationRu: 'Прямой вопрос: «Möchten Sie noch einen Nachtisch?» — ответ да/нет → ob.',
      },
      {
        type: 'gap',
        prompt: 'Weißt du, ___ man Kichererbsen über Nacht einweichen muss?',
        answers: ['warum', 'wieso', 'weshalb'],
        hintRu: 'почему',
        explanationRu: 'Вопрос о причине → warum (wieso, weshalb). Модальный глагол muss стоит в конце.',
      },
      {
        type: 'gap',
        prompt: 'Können Sie mir erklären, wie man diese Soße ___?',
        answers: ['zubereitet'],
        hintRu: 'zubereiten',
        explanationRu: 'В косвенном вопросе отделяемый глагол стоит в конце и не разделяется: zubereitet.',
      },
      {
        type: 'gap',
        prompt: 'Ich habe keine Ahnung, ___ wem Paul heute Abend essen geht.',
        answers: ['mit'],
        hintRu: 'с кем',
        explanationRu: 'Предлог из прямого вопроса сохраняется: Mit wem geht Paul essen? → …, mit wem Paul essen geht.',
      },
      {
        type: 'order',
        words: ['Wissen', 'Sie,', 'ob', 'man', 'hier', 'mit', 'Karte', 'bezahlen', 'kann?'],
        translationRu: 'Вы не знаете, можно ли здесь заплатить картой?',
        explanationRu: 'Вежливый вопрос: Wissen Sie, + ob + … + инфинитив + модальный глагол в самом конце.',
      },
      {
        type: 'order',
        words: ['Ich', 'frage', 'mich,', 'was', 'ich', 'heute', 'kochen', 'soll.'],
        translationRu: 'Я спрашиваю себя, что мне сегодня приготовить.',
        explanationRu: 'Всё предложение — утверждение, поэтому точка. Модальный глагол soll стоит в конце косвенного вопроса.',
      },
      {
        type: 'transform',
        instructionRu: 'Задайте вежливый вопрос, начав с «Können Sie mir sagen, …?».',
        prompt: 'Wo finde ich glutenfreie Nudeln?',
        answers: ['Können Sie mir sagen, wo ich glutenfreie Nudeln finde?'],
        explanationRu: 'W-слово остаётся, глагол finde уходит в конец придаточного.',
      },
      {
        type: 'transform',
        instructionRu: 'Начните с «Ich möchte wissen, …».',
        prompt: 'Ist in diesem Kuchen Zucker?',
        answers: ['Ich möchte wissen, ob in diesem Kuchen Zucker ist.', 'Ich möchte wissen, ob Zucker in diesem Kuchen ist.'],
        explanationRu: 'Вопрос да/нет → ob, глагол ist в конце. Предложение — утверждение, поэтому в конце точка.',
      },
    ],
  },
  vocab: [
    { de: 'sich ernähren', forms: 'von + Dat', pos: 'verb', ru: 'питаться', example: 'Seit einem Jahr ernähre ich mich fast nur von Obst und Gemüse.', exampleRu: 'Уже год я питаюсь почти только фруктами и овощами.' },
    { de: 'Grundnahrungsmittel', article: 'das', plural: '-', pos: 'noun', ru: 'основной продукт питания', example: 'Reis ist in vielen Ländern Asiens das wichtigste Grundnahrungsmittel.', exampleRu: 'Рис — главный основной продукт питания во многих странах Азии.' },
    { de: 'Vegetarier', article: 'der', plural: '-', pos: 'noun', ru: 'вегетарианец', example: 'Ich bin Vegetarier, aber Fisch esse ich ab und zu.', exampleRu: 'Я вегетарианец, но рыбу иногда ем.' },
    { de: 'vegan', pos: 'adj', ru: 'веганский (без продуктов животного происхождения)', example: 'Wissen Sie, ob der Kuchen vegan ist?', exampleRu: 'Вы не знаете, этот пирог веганский?' },
    { de: 'Eiweiß', article: 'das', plural: '-e', pos: 'noun', ru: 'белок', example: 'Linsen und Bohnen enthalten viel Eiweiß.', exampleRu: 'В чечевице и фасоли много белка.' },
    { de: 'Kalorie', article: 'die', plural: '-n', pos: 'noun', ru: 'калория', example: 'Ein Stück Sahnetorte hat ungefähr 400 Kalorien.', exampleRu: 'В куске сливочного торта примерно 400 калорий.' },
    { de: 'Unverträglichkeit', article: 'die', plural: '-en', pos: 'noun', ru: 'непереносимость (продукта)', example: 'Wegen einer Unverträglichkeit darf mein Sohn keine Milch trinken.', exampleRu: 'Из-за непереносимости моему сыну нельзя пить молоко.' },
    { de: 'Hülsenfrucht', article: 'die', plural: '-¨e', pos: 'noun', ru: 'бобовые (фасоль, горох, чечевица)', example: 'Hülsenfrüchte sind billig, gesund und machen lange satt.', exampleRu: 'Бобовые дешёвые, полезные и надолго насыщают.' },
    { de: 'Fertiggericht', article: 'das', plural: '-e', pos: 'noun', ru: 'готовое блюдо (полуфабрикат)', example: 'Unter der Woche essen wir leider oft Fertiggerichte aus der Mikrowelle.', exampleRu: 'В будни мы, к сожалению, часто едим готовые блюда из микроволновки.' },
    { de: 'Beilage', article: 'die', plural: '-n', pos: 'noun', ru: 'гарнир', example: 'Als Beilage gibt es Reis, Kartoffeln oder Salat.', exampleRu: 'На гарнир есть рис, картофель или салат.' },
    { de: 'Vorspeise', article: 'die', plural: '-n', pos: 'noun', ru: 'закуска (первое блюдо)', example: 'Als Vorspeise nehme ich die Tomatensuppe.', exampleRu: 'На закуску я возьму томатный суп.' },
    { de: 'Portion', article: 'die', plural: '-en', pos: 'noun', ru: 'порция', example: 'Die Portionen in diesem Restaurant sind riesig.', exampleRu: 'Порции в этом ресторане огромные.' },
    { de: 'Gewürz', article: 'das', plural: '-e', pos: 'noun', ru: 'пряность, специя', example: 'Ohne Gewürze schmeckt die Suppe ziemlich langweilig.', exampleRu: 'Без специй суп довольно скучный на вкус.' },
    { de: 'zubereiten', forms: 'bereitet zu, bereitete zu, hat zubereitet', pos: 'verb', ru: 'готовить (блюдо)', example: 'Können Sie mir sagen, wie man dieses Gericht zubereitet?', exampleRu: 'Не подскажете, как готовится это блюдо?' },
    { de: 'würzen', pos: 'verb', ru: 'приправлять', example: 'Würz das Fleisch bitte erst am Ende mit Salz.', exampleRu: 'Посоли мясо, пожалуйста, только в самом конце.' },
    { de: 'probieren', pos: 'verb', ru: 'пробовать', example: 'Darf ich mal probieren, ob die Soße scharf ist?', exampleRu: 'Можно я попробую, острый ли соус?' },
    { de: 'satt', pos: 'adj', ru: 'сытый', example: 'Danke, ich bin schon satt, ich kann wirklich nichts mehr essen.', exampleRu: 'Спасибо, я уже сыт, правда больше ничего не могу съесть.' },
    { de: 'fettarm', pos: 'adj', ru: 'нежирный, с низким содержанием жира', example: 'Der Arzt hat ihm geraten, sich fettarm zu ernähren.', exampleRu: 'Врач посоветовал ему придерживаться нежирной диеты.' },
    { de: 'Essgewohnheit', article: 'die', plural: '-en', pos: 'noun', ru: 'пищевая привычка', example: 'Nach dem Umzug nach Deutschland haben sich meine Essgewohnheiten stark verändert.', exampleRu: 'После переезда в Германию мои пищевые привычки сильно изменились.' },
    { de: 'Lieferdienst', article: 'der', plural: '-e', pos: 'noun', ru: 'служба доставки (еды)', example: 'Am Freitagabend bestellen wir meistens beim Lieferdienst.', exampleRu: 'В пятницу вечером мы обычно заказываем еду с доставкой.' },
  ],
  listening: {
    title: 'Telefonat: Eine Reservierung mit vielen Fragen',
    kind: 'dialog',
    text: `A: Restaurant „Zur Linde“, Becker am Apparat, guten Tag.
B: Guten Tag, hier ist Petrova. Ich möchte für Samstagabend einen Tisch reservieren. Können Sie mir sagen, ob Sie für zwölf Personen noch Platz haben?
A: Moment, ich schaue mal nach … Samstag um wie viel Uhr?
B: Am liebsten um halb sieben. Wir feiern den siebzigsten Geburtstag meines Vaters.
A: Herzlichen Glückwunsch! Ja, um halb sieben ist unser Nebenraum noch frei. Da sind Sie ganz ungestört.
B: Wunderbar. Ich habe noch ein paar Fragen zum Essen. Meine Tochter ist Veganerin. Wissen Sie, ob es auf Ihrer Karte vegane Gerichte gibt?
A: Ja, wir haben immer zwei vegane Hauptgerichte, zurzeit ein Linsencurry und gefüllte Paprika. Und als Vorspeise gibt es eine Kürbissuppe ohne Sahne.
B: Sehr gut. Mein Schwager hat außerdem eine Laktoseintoleranz. Könnten Sie mir sagen, welche Gerichte ohne Milchprodukte sind?
A: Das kann ich Ihnen leider nicht genau sagen, da müsste ich unseren Koch fragen. Aber in unserer Speisekarte stehen alle Allergene. Ich kann Ihnen die Karte gern per E-Mail schicken.
B: Das wäre sehr nett. Und noch eine letzte Frage: Darf ich fragen, ob wir einen eigenen Kuchen mitbringen dürfen?
A: Grundsätzlich ja, aber wir berechnen dann zwei Euro pro Person für Teller und Service.
B: Das ist in Ordnung. Meine Mutter backt nämlich jedes Jahr die Geburtstagstorte selbst, das ist bei uns Tradition.
A: Kein Problem. Dann brauche ich nur noch Ihre Telefonnummer und Ihre E-Mail-Adresse.
B: Gern. Meine Nummer ist null eins sieben sechs, zwei drei vier fünf sechs sieben acht.
A: Vielen Dank, Frau Petrova. Die Speisekarte schicke ich Ihnen gleich. Dann bis Samstag!`,
    questions: [
      {
        question: 'Warum ruft Frau Petrova an?',
        options: [
          'Sie möchte einen Tisch für eine Geburtstagsfeier reservieren.',
          'Sie möchte Essen nach Hause bestellen.',
          'Sie sucht eine Stelle im Restaurant.',
        ],
        answer: 0,
      },
      { question: 'Für wie viele Personen reserviert sie?', options: ['für sieben', 'für siebzig', 'für zwölf'], answer: 2 },
      { question: 'Welches vegane Gericht gibt es zurzeit?', options: ['Linsencurry', 'Gemüselasagne', 'Kürbissuppe mit Sahne'], answer: 0 },
      {
        question: 'Wie reagiert Herr Becker auf die Frage nach Gerichten ohne Milchprodukte?',
        options: [
          'Er fragt sofort den Koch.',
          'Er schickt Frau Petrova die Speisekarte mit allen Allergenen.',
          'Er empfiehlt ein anderes Restaurant.',
          'Er sagt, dass alle Gerichte ohne Milch sind.',
        ],
        answer: 1,
      },
      {
        question: 'Was kostet es, wenn die Familie einen eigenen Kuchen mitbringt?',
        options: ['nichts', 'zwölf Euro für alle zusammen', 'zwei Euro pro Person'],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu: 'Ваша языковая группа устраивает праздник в конце курса. Напишите официальное письмо в кейтеринговую фирму «Buffet & mehr» и узнайте всё необходимое.',
    taskDe: 'Ihr Deutschkurs plant ein Abschlussfest. Schreiben Sie eine E-Mail an den Catering-Service „Buffet & mehr“.',
    points: [
      'Anlass, Datum und Zahl der Gäste',
      'besondere Wünsche (vegetarisch, vegan, Allergien)',
      'Fragen nach Preis und Lieferung',
      'Bitte um ein Angebot',
    ],
    minWords: 80,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'am … feiern wir das Ende unseres Deutschkurses mit etwa 25 Personen.',
      'Könnten Sie mir bitte mitteilen, ob Sie auch vegane Gerichte anbieten?',
      'Ich würde gern wissen, wie viel ein Buffet pro Person kostet.',
      'Außerdem möchte ich fragen, wann und wie Sie das Essen liefern.',
      'Ich freue mich auf Ihr Angebot. Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu: 'Вы в ресторане. У вас аллергия на орехи, и вы хотите поесть без мяса. Вежливо расспросите официанта о блюдах и сделайте заказ.',
    aiRole:
      'Sie sind Kellner im Restaurant „Grüner Baum“ in Freiburg. Auf der Karte stehen heute u. a. eine Kürbissuppe, ein Salat mit Walnüssen, Spinatknödel mit Käsesoße, ein Linsencurry, Schnitzel mit Pommes und ein Apfelstrudel. Beantworten Sie Fragen zu Zutaten, Allergien, Beilagen und Preisen freundlich und geduldig. Wenn Sie etwas nicht wissen, sagen Sie, dass Sie in der Küche nachfragen. Sprechen Sie natürlich auf B1-Niveau.',
    opener: 'Guten Abend und herzlich willkommen! Haben Sie schon in die Karte geschaut, oder darf ich Ihnen etwas empfehlen?',
    tasksRu: [
      'Задайте минимум три вежливых косвенных вопроса (Können Sie mir sagen, ob …? Wissen Sie, was …?).',
      'Объясните, что у вас аллергия на орехи и что вы не едите мясо.',
      'Спросите о гарнире и закажите закуску, основное блюдо и напиток.',
      'В конце узнайте, можно ли заплатить картой.',
    ],
    readAloud: [
      'Können Sie mir sagen, ob in diesem Gericht Nüsse sind?',
      'Ich wüsste gern, welche Beilage Sie mir empfehlen.',
      'Wissen Sie zufällig, wann die Küche heute schließt?',
    ],
  },
};
