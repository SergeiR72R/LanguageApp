import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-06',
  level: 'A2',
  order: 6,
  title: 'Essen gehen',
  titleRu: 'В ресторане',
  goalsRu: [
    'Заказывать еду и напитки в ресторане',
    'Употреблять прилагательные после der/die/das с окончаниями -e и -en',
    'Вежливо жаловаться: суп холодный, блюдо слишком солёное',
    'Просить счёт, платить вместе или отдельно, оставлять чаевые',
  ],
  grammar: {
    topic: 'Adjektivdeklination nach dem bestimmten Artikel',
    topicRu: 'Окончания прилагательных после определённого артикля (der rote Wein)',
    explanationRu: `Если прилагательное стоит **перед существительным**, оно получает окончание: der rot**e** Wein, den rot**en** Wein.

После **определённого артикля** (der, die, das) — а также после **dieser** и **welcher** — всё просто: окончаний только **два: -e и -en**.

**Окончание -e** — только в **5 случаях**:
- Nominativ (именительный падеж) ед. числа: **der** rot**e** Wein, **die** heiß**e** Suppe, **das** kalt**e** Bier
- Akkusativ (винительный) женского и среднего рода: Ich nehme **die** heiß**e** Suppe / **das** kalt**e** Bier.

**Во всех остальных случаях — -en:**
- Akkusativ мужского рода: Ich nehme **den** rot**en** Wein.
- весь Dativ (дательный): mit **dem** kalt**en** Bier, mit **der** heiß**en** Suppe
- всё множественное число: **die** frisch**en** Brötchen

**Почему так?** Артикль уже показывает род и падеж, поэтому прилагательному хватает «простого» окончания -e или -en.

**Подсказка:** видите **den** или **dem** — пишите **-en**. Множественное число — тоже **-en**. Akkusativ отличается от Nominativ только в мужском роде (der → den), поэтому и прилагательное меняется только там: der rote Wein → den rot**en** Wein.

**После sein окончания нет:** Der Wein ist **rot**. Die Suppe ist **kalt**. Окончание нужно только тогда, когда прилагательное стоит между артиклем и существительным.

**Типичные ошибки русскоговорящих:**
- «Ich nehme den rote Wein» ✗ → **den roten Wein** ✓
- «mit dem kalte Bier» ✗ → **mit dem kalten Bier** ✓
- «Die Suppe ist kalte» ✗ → **Die Suppe ist kalt** ✓
- В русском окончание меняется по роду (красн**ое** вино, красн**ая** рыба). После der/die/das в немецком не нужны «-er» или «-es»: не «der roter Wein», а **der rote Wein**.`,
    table: [
      ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      ['Nominativ', 'der rote Wein', 'die heiße Suppe', 'das kalte Bier', 'die frischen Brötchen'],
      ['Akkusativ', 'den roten Wein', 'die heiße Suppe', 'das kalte Bier', 'die frischen Brötchen'],
      ['Dativ', 'dem roten Wein', 'der heißen Suppe', 'dem kalten Bier', 'den frischen Brötchen'],
    ],
    examples: [
      { de: 'Der rote Wein kommt aus Italien.', ru: 'Красное вино из Италии.' },
      { de: 'Ich nehme den grünen Salat.', ru: 'Я возьму зелёный салат.' },
      { de: 'Die heiße Suppe ist für meine Frau.', ru: 'Горячий суп — для моей жены.' },
      { de: 'Möchtest du das kleine Schnitzel oder das große?', ru: 'Ты хочешь маленький шницель или большой?' },
      { de: 'Wir essen die Kartoffeln mit der hellen Soße.', ru: 'Мы едим картофель со светлым соусом.' },
      { de: 'Die frischen Brötchen sind noch warm.', ru: 'Свежие булочки ещё тёплые.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Der ___ Wein kommt aus Frankreich.',
        options: ['rote', 'roten', 'roter', 'rotes'],
        answer: 0,
        explanationRu: 'der Wein — Nominativ, мужской род, после der → окончание -e: der rote Wein.',
      },
      {
        type: 'choice',
        prompt: 'Ich nehme den ___ Salat.',
        options: ['grüne', 'grünen', 'grüner', 'grünes'],
        answer: 1,
        explanationRu: 'den Salat — Akkusativ мужского рода. После den всегда -en: den grünen Salat.',
      },
      {
        type: 'choice',
        prompt: 'Die Suppe ist leider ___.',
        options: ['kalte', 'kalten', 'kalt', 'kaltes'],
        answer: 2,
        explanationRu: 'Прилагательное стоит после ist (sein), а не перед существительным, — окончания нет: Die Suppe ist kalt.',
      },
      {
        type: 'choice',
        prompt: 'Wir möchten das ___ Brot, bitte.',
        options: ['frischen', 'frisches', 'frischer', 'frische'],
        answer: 3,
        explanationRu: 'das Brot — Akkusativ среднего рода, артикль не меняется (das) → окончание -e: das frische Brot.',
      },
      {
        type: 'gap',
        prompt: 'Die ___ Kellnerin ist sehr nett.',
        answers: ['junge'],
        hintRu: 'jung',
        explanationRu: 'die Kellnerin — Nominativ ед. ч. → -e: die junge Kellnerin.',
      },
      {
        type: 'gap',
        prompt: 'Ich esse die Pizza mit dem ___ Käse.',
        answers: ['italienischen'],
        hintRu: 'italienisch',
        explanationRu: 'mit + Dativ: dem Käse. В дательном падеже всегда -en: mit dem italienischen Käse.',
      },
      {
        type: 'gap',
        prompt: 'Wie findest du die ___ Kartoffeln?',
        answers: ['kleinen'],
        hintRu: 'klein',
        explanationRu: 'die Kartoffeln — множественное число. Во мн. ч. после die всегда -en: die kleinen Kartoffeln.',
      },
      {
        type: 'gap',
        prompt: 'Ich nehme das ___ Schnitzel.',
        answers: ['große'],
        hintRu: 'groß',
        explanationRu: 'das Schnitzel — Akkusativ среднего рода, артикль das не меняется → -e: das große Schnitzel.',
      },
      {
        type: 'order',
        words: ['Der', 'Fisch', 'mit', 'dem', 'grünen', 'Salat', 'schmeckt', 'sehr', 'gut.'],
        translationRu: 'Рыба с зелёным салатом очень вкусная.',
        explanationRu: '«Der Fisch mit dem grünen Salat» — это подлежащее (1-е место), глагол schmeckt — на 2-м. После dem — окончание -en.',
      },
      {
        type: 'transform',
        instructionRu: 'Скажите, что вы это берёте: начните с «Ich nehme …» (Akkusativ).',
        prompt: 'Der rote Wein ist gut.',
        answers: ['Ich nehme den roten Wein.'],
        explanationRu: 'В Akkusativ der → den, и прилагательное получает -en: den roten Wein.',
      },
      {
        type: 'choice',
        audio: 'Ich möchte den kleinen Salat, bitte.',
        prompt: 'Что заказывает человек?',
        options: ['большой салат', 'маленький салат', 'маленький суп', 'салат без соуса'],
        answer: 1,
        explanationRu: '«den kleinen Salat» — маленький салат (klein = маленький).',
      },
      {
        type: 'gap',
        audio: 'Die Suppe ist heute sehr scharf.',
        prompt: 'Какой сегодня суп? Die Suppe ist sehr ___.',
        answers: ['scharf'],
        explanationRu: 'scharf — острый. После ist прилагательное без окончания.',
      },
    ],
  },
  vocab: [
    { de: 'Speisekarte', article: 'die', plural: '-n', pos: 'noun', ru: 'меню', example: 'Können wir bitte die Speisekarte haben?', exampleRu: 'Можно нам, пожалуйста, меню?', pronRu: 'ди ШПАЙ-зе-кар-те' },
    { de: 'Vorspeise', article: 'die', plural: '-n', pos: 'noun', ru: 'закуска, первое блюдо', example: 'Als Vorspeise nehme ich die Tomatensuppe.', exampleRu: 'На закуску я возьму томатный суп.', pronRu: 'ди ФО:Р-шпай-зе' },
    { de: 'Hauptgericht', article: 'das', plural: '-e', pos: 'noun', ru: 'основное блюдо', example: 'Das Hauptgericht kommt in zehn Minuten.', exampleRu: 'Основное блюдо будет через десять минут.', pronRu: 'дас ХАУПТ-ге-рихьт' },
    { de: 'Nachtisch', article: 'der', plural: '-e', pos: 'noun', ru: 'десерт', example: 'Zum Nachtisch gibt es Eis mit Sahne.', exampleRu: 'На десерт есть мороженое со сливками.', pronRu: 'дер НАХ-тиш' },
    { de: 'Beilage', article: 'die', plural: '-n', pos: 'noun', ru: 'гарнир', example: 'Als Beilage gibt es Reis oder Kartoffeln.', exampleRu: 'На гарнир есть рис или картофель.', pronRu: 'ди БАЙ-ла:-ге' },
    { de: 'Portion', article: 'die', plural: '-en', pos: 'noun', ru: 'порция', example: 'Die Portion ist sehr groß.', exampleRu: 'Порция очень большая.', pronRu: 'ди пор-ЦЬО:Н' },
    { de: 'Kellner', article: 'der', plural: '-', pos: 'noun', ru: 'официант (die Kellnerin — официантка)', example: 'Der Kellner bringt die Getränke.', exampleRu: 'Официант приносит напитки.', pronRu: 'дер КЕЛЬ-на' },
    { de: 'Rechnung', article: 'die', plural: '-en', pos: 'noun', ru: 'счёт', example: 'Entschuldigung, die Rechnung, bitte!', exampleRu: 'Извините, счёт, пожалуйста!', pronRu: 'ди РЕХЬ-нунг' },
    { de: 'Trinkgeld', article: 'das', plural: '-er', pos: 'noun', ru: 'чаевые', example: 'In Deutschland gibt man etwa zehn Prozent Trinkgeld.', exampleRu: 'В Германии дают примерно десять процентов чаевых.', pronRu: 'дас ТРИНК-гельт' },
    { de: 'Besteck', article: 'das', plural: '-e', pos: 'noun', ru: 'столовые приборы', example: 'Das Besteck liegt neben dem Teller.', exampleRu: 'Столовые приборы лежат рядом с тарелкой.', pronRu: 'дас бе-ШТЕК' },
    { de: 'reservieren', forms: 'reserviert, hat reserviert', pos: 'verb', ru: 'бронировать, заказывать (столик)', example: 'Ich möchte einen Tisch für vier Personen reservieren.', exampleRu: 'Я хотел бы заказать столик на четырёх человек.', pronRu: 'ре-зер-ВИ:-рен' },
    { de: 'bestellen', forms: 'bestellt, hat bestellt', pos: 'verb', ru: 'заказывать', example: 'Haben Sie schon bestellt?', exampleRu: 'Вы уже заказали?', pronRu: 'бе-ШТЕ-лен' },
    { de: 'empfehlen', forms: 'empfiehlt, hat empfohlen', pos: 'verb', ru: 'советовать, рекомендовать', example: 'Was können Sie uns empfehlen?', exampleRu: 'Что вы можете нам посоветовать?', pronRu: 'эмп-ФЕ:-лен' },
    { de: 'sich beschweren', forms: 'beschwert sich, hat sich beschwert', pos: 'verb', ru: 'жаловаться', example: 'Der Gast beschwert sich, weil das Essen kalt ist.', exampleRu: 'Гость жалуется, потому что еда холодная.', pronRu: 'зихь бе-ШВЕ:-рен' },
    { de: 'scharf', pos: 'adj', ru: 'острый (о еде)', example: 'Vorsicht, die Soße ist sehr scharf!', exampleRu: 'Осторожно, соус очень острый!', pronRu: 'ШАРФ' },
    { de: 'salzig', pos: 'adj', ru: 'солёный', example: 'Die Suppe ist viel zu salzig.', exampleRu: 'Суп слишком солёный.', pronRu: 'ЗАЛЬ-цихь' },
    { de: 'sauer', pos: 'adj', ru: 'кислый', example: 'Der Wein ist ein bisschen sauer.', exampleRu: 'Вино немного кислое.', pronRu: 'ЗАУ-а' },
    { de: 'satt', pos: 'adj', ru: 'сытый', example: 'Danke, ich bin schon satt.', exampleRu: 'Спасибо, я уже сыт.', pronRu: 'ЗАТ' },
    { de: 'Stimmt so!', pos: 'phrase', ru: 'Сдачи не надо!', example: 'Das macht 27 Euro. – Hier sind 30. Stimmt so!', exampleRu: 'С вас 27 евро. — Вот 30. Сдачи не надо!', pronRu: 'ШТИМТ ЗО:' },
    { de: 'getrennt zahlen', pos: 'phrase', ru: 'платить отдельно (каждый за себя)', example: 'Zahlen Sie zusammen oder getrennt? – Getrennt, bitte.', exampleRu: 'Вы платите вместе или отдельно? — Отдельно, пожалуйста.', pronRu: 'ге-ТРЕНТ ЦА:-лен' },
  ],
  listening: {
    title: 'Im Restaurant',
    kind: 'dialog',
    text: `A: Guten Abend! Haben Sie einen Tisch reserviert?
B: Ja, auf den Namen Sokolow, für zwei Personen.
A: Ah ja. Bitte, der kleine Tisch am Fenster. Hier ist die Speisekarte. Möchten Sie schon etwas trinken?
B: Ja, meine Frau nimmt den roten Wein, und ich möchte ein Wasser.
A: Gern. Haben Sie auch schon ein Essen gewählt?
B: Ja. Als Vorspeise nehmen wir zweimal die Kartoffelsuppe. Dann möchte ich das große Schnitzel mit Pommes, und meine Frau nimmt den Fisch mit Reis.
A: Sehr gut.
B: Entschuldigung! Die Suppe ist leider kalt.
A: Oh, das tut mir leid! Ich mache die Suppe sofort warm. Und den Nachtisch bekommen Sie heute gratis.
B: Oh, danke! Was gibt es denn zum Nachtisch?
A: Heute empfehle ich den warmen Apfelkuchen mit Sahne.
B: Wunderbar. Und danach bitte die Rechnung.
A: Natürlich. Zahlen Sie zusammen oder getrennt?
B: Zusammen, bitte.`,
    questions: [
      { question: 'Wo sitzen die Gäste?', options: ['Am großen Tisch an der Tür', 'Am kleinen Tisch am Fenster', 'Auf der Terrasse'], answer: 1 },
      { question: 'Was trinkt die Frau?', options: ['Wasser', 'Bier', 'Den roten Wein'], answer: 2 },
      { question: 'Was isst der Mann als Hauptgericht?', options: ['Das große Schnitzel mit Pommes', 'Den Fisch mit Reis', 'Die Kartoffelsuppe'], answer: 0 },
      { question: 'Was ist das Problem?', options: ['Der Wein ist sauer.', 'Das Schnitzel ist zu klein.', 'Die Suppe ist kalt.'], answer: 2 },
      { question: 'Was empfiehlt der Kellner zum Nachtisch?', options: ['Eis mit Sahne', 'Den warmen Apfelkuchen', 'Den Käsekuchen'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'В выходные вы были в ресторане. Напишите отзыв на интернет-форуме: когда и с кем вы там были, что ели и пили, что понравилось и что нет. Используйте прилагательные после der/die/das (der rote Wein, die heiße Suppe…).',
    taskDe: 'Sie waren am Wochenende in einem Restaurant. Schreiben Sie eine Bewertung in einem Internetforum.',
    points: [
      'Wann und mit wem waren Sie dort?',
      'Was haben Sie gegessen und getrunken?',
      'Was war gut, was war nicht so gut? Empfehlen Sie das Restaurant?',
    ],
    minWords: 50,
    usefulPhrases: [
      'Am Samstag war ich mit … im Restaurant „…“.',
      'Als Vorspeise habe ich die … gegessen.',
      'Der rote Wein war sehr gut.',
      'Die Suppe war leider zu salzig.',
      'Der Kellner war sehr freundlich.',
      'Die Preise sind nicht zu hoch.',
      'Ich empfehle das Restaurant!',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы пришли в ресторан «Zur Linde». Официант (ИИ) приносит меню. Закажите напиток и блюда, спросите совет, пожалуйтесь на что-нибудь и попросите счёт.',
    aiRole:
      'Sie sind Kellner im Restaurant „Zur Linde“ in einer kleinen Stadt. Der Lerner ist Gast. Begrüßen Sie den Gast, nehmen Sie die Bestellung auf und empfehlen Sie Gerichte (heute: die Gemüsesuppe, das Schnitzel mit Kartoffelsalat, den Fisch mit Reis, zum Nachtisch den Apfelkuchen). Vielleicht beschwert sich der Gast später: Reagieren Sie freundlich und helfen Sie. Am Ende fragen Sie: „Zusammen oder getrennt?“ Sprechen Sie sehr einfach und langsam, in kurzen Sätzen auf A2-Niveau. Stellen Sie immer nur eine Frage. Macht der Gast einen Fehler mit der Adjektivendung, wiederholen Sie die Bestellung einmal richtig („Also, den grünen Salat, sehr gern.“).',
    opener: 'Guten Abend! Hier ist die Speisekarte. Was möchten Sie trinken?',
    tasksRu: [
      'Закажите напиток, закуску и основное блюдо: «Ich nehme den / die / das …».',
      'Спросите, что официант советует: «Was können Sie empfehlen?»',
      'Пожалуйтесь: блюдо холодное или слишком солёное.',
      'Попросите счёт и оставьте чаевые: «Stimmt so!»',
    ],
    readAloud: [
      'Die Speisekarte, bitte.',
      'Ich nehme den grünen Salat.',
      'Die Suppe ist leider kalt.',
      'Der rote Wein schmeckt sehr gut.',
      'Zahlen, bitte! Stimmt so.',
    ],
  },
};
