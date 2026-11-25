import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-06',
  level: 'B1',
  order: 6,
  title: 'Einkaufen & Konsum',
  titleRu: 'Покупки и потребление',
  goalsRu: [
    'Описывать товары: цвет, материал, качество, цену',
    'Правильно склонять прилагательные после определённого, неопределённого и нулевого артикля',
    'Обменивать и возвращать товар, вести разговор с продавцом',
    'Писать письменную жалобу (рекламацию) в интернет-магазин',
  ],
  grammar: {
    topic: 'Adjektivdeklination nach bestimmtem, unbestimmtem und ohne Artikel',
    topicRu: 'Склонение прилагательных',
    explanationRu: `Если прилагательное стоит **перед** существительным, оно получает окончание. Если после глагола (Die Jacke ist **teuer**), окончания нет.

**Главный принцип:** «сигнал» рода и падежа (-r, -s, -e, -m, -n) должен появиться **один раз** — либо в артикле, либо в прилагательном.

**1. После определённого артикля** (der, die, das, dieser, jeder, welcher, alle): артикль уже показывает сигнал, поэтому у прилагательного только **-e** или **-en**:

- **-e**: Nominativ ед. ч. всех родов, Akkusativ женского и среднего рода: der neue Mantel, die neue Jacke, das neue Hemd.
- **-en**: во всех остальных случаях (den neuen Mantel, mit dem neuen Hemd, die neuen Schuhe).

**2. После неопределённого артикля** (ein, kein, mein, dein …): в трёх местах у ein нет сигнала, и его «берёт» прилагательное: ein neu**er** Mantel (Nom m), ein neu**es** Hemd (Nom/Akk n), eine neu**e** Jacke. В остальных случаях — **-en**.

**3. Без артикля** (Nullartikel): прилагательное получает окончание определённого артикля: frisch**er** Kaffee (der), frisch**e** Milch (die), frisch**es** Brot (das), mit frisch**em** Brot (dem), frisch**e** Eier.

**Обратите внимание:** у прилагательных на **-er/-el** выпадает e: teuer → ein **teures** Auto, dunkel → eine **dunkle** Hose.

**Типичные ошибки русскоговорящих:**

- В русском окончание зависит только от рода и падежа существительного, а в немецком — ещё и от артикля. Поэтому путают «der neue» и «ein neuer».
- Забывают **-en** в дательном падеже: «mit dem neue Handy» вместо **mit dem neuen Handy**.
- Ставят окончание после глагола: «Die Jacke ist teure» — неверно.
- Говорят «ein teueres Auto» — правильно **ein teures Auto**.`,
    table: [
      ['', 'm (der Mantel)', 'f (die Jacke)', 'n (das Hemd)', 'Plural (die Schuhe)'],
      ['Nom. bestimmt', 'der neue Mantel', 'die neue Jacke', 'das neue Hemd', 'die neuen Schuhe'],
      ['Akk. bestimmt', 'den neuen Mantel', 'die neue Jacke', 'das neue Hemd', 'die neuen Schuhe'],
      ['Dat. bestimmt', 'dem neuen Mantel', 'der neuen Jacke', 'dem neuen Hemd', 'den neuen Schuhen'],
      ['Nom. unbestimmt', 'ein neuer Mantel', 'eine neue Jacke', 'ein neues Hemd', 'keine neuen Schuhe'],
      ['Akk. unbestimmt', 'einen neuen Mantel', 'eine neue Jacke', 'ein neues Hemd', 'keine neuen Schuhe'],
      ['Dat. unbestimmt', 'einem neuen Mantel', 'einer neuen Jacke', 'einem neuen Hemd', 'keinen neuen Schuhen'],
      ['Nom. ohne Artikel', 'neuer Mantel', 'neue Jacke', 'neues Hemd', 'neue Schuhe'],
      ['Akk. ohne Artikel', 'neuen Mantel', 'neue Jacke', 'neues Hemd', 'neue Schuhe'],
      ['Dat. ohne Artikel', 'neuem Mantel', 'neuer Jacke', 'neuem Hemd', 'neuen Schuhen'],
    ],
    examples: [
      { de: 'Ich suche einen warmen Wintermantel in Größe 40.', ru: 'Я ищу тёплое зимнее пальто 40-го размера.' },
      { de: 'Die blaue Jacke aus dem Schaufenster ist leider ausverkauft.', ru: 'Синяя куртка с витрины, к сожалению, распродана.' },
      { de: 'Mit dem alten Handy bin ich eigentlich noch zufrieden.', ru: 'Старым телефоном я, в общем-то, ещё доволен.' },
      { de: 'Auf dem Wochenmarkt gibt es frisches Gemüse und regionalen Käse.', ru: 'На рынке продаются свежие овощи и местный сыр.' },
      { de: 'Wir haben zwei günstige Kaffeemaschinen im Sonderangebot gekauft.', ru: 'Мы купили две недорогие кофемашины по акции.' },
      { de: 'Das ist ein teures, aber sehr gutes Produkt.', ru: 'Это дорогой, но очень хороший продукт.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich nehme den ___ Pullover, der grüne gefällt mir nicht.',
        options: ['roten', 'rote', 'roter', 'rotes'],
        answer: 0,
        explanationRu: 'den Pullover — Akkusativ мужского рода после определённого артикля → -en: den roten Pullover.',
      },
      {
        type: 'choice',
        prompt: 'Hast du schon eine ___ Wohnung gefunden?',
        options: ['günstigen', 'günstiges', 'günstige', 'günstiger'],
        answer: 2,
        explanationRu: 'eine Wohnung — Akkusativ женского рода. Артикль eine уже показывает сигнал -e, прилагательное тоже на -e.',
      },
      {
        type: 'choice',
        prompt: 'Zum Frühstück trinke ich gern ___ Orangensaft.',
        options: ['frischer', 'frischen', 'frisches', 'frischem'],
        answer: 1,
        explanationRu: 'Без артикля прилагательное берёт окончание артикля: der Orangensaft → Akkusativ den → frischen.',
      },
      {
        type: 'choice',
        prompt: 'Der Verkäufer hat mir mit einem ___ Lächeln den Kassenbon gegeben.',
        options: ['freundliches', 'freundlicher', 'freundliche', 'freundlichen'],
        answer: 3,
        explanationRu: 'mit + Dativ: einem Lächeln (das). Сигнал -m уже есть в артикле, поэтому прилагательное получает -en.',
      },
      {
        type: 'gap',
        prompt: 'Das ist ein sehr ___ Geschäft.',
        answers: ['teures'],
        hintRu: 'teuer',
        explanationRu: 'ein Geschäft (das), Nominativ: прилагательное берёт сигнал -es. В teuer выпадает e: teures.',
      },
      {
        type: 'gap',
        prompt: 'Wir haben im Internet einen ___ Fernseher bestellt.',
        answers: ['neuen'],
        hintRu: 'neu',
        explanationRu: 'einen Fernseher — Akkusativ мужского рода; сигнал -n уже в артикле → neuen.',
      },
      {
        type: 'gap',
        prompt: 'In diesem Laden gibt es nur Kleidung aus ___ Baumwolle.',
        answers: ['ökologischer'],
        hintRu: 'ökologisch',
        explanationRu: 'aus + Dativ, die Baumwolle без артикля → окончание как у артикля der (Dativ ж. р.): ökologischer.',
      },
      {
        type: 'gap',
        prompt: 'Die ___ Schuhe waren leider zu klein.',
        answers: ['bestellten'],
        hintRu: 'bestellt',
        explanationRu: 'Причастие склоняется как прилагательное. Множественное число после die → -en: die bestellten Schuhe.',
      },
      {
        type: 'order',
        words: ['Ich', 'suche', 'eine', 'bequeme', 'Hose', 'für', 'den', 'Sommer.'],
        translationRu: 'Я ищу удобные брюки на лето.',
        explanationRu: 'eine Hose — Akkusativ женского рода → bequeme. Прилагательное стоит между артиклем и существительным.',
      },
      {
        type: 'order',
        words: ['Mit', 'dem', 'neuen', 'Staubsauger', 'bin', 'ich', 'sehr', 'zufrieden.'],
        translationRu: 'Новым пылесосом я очень доволен.',
        explanationRu: 'mit + Dativ: dem neuen Staubsauger. Глагол bin на втором месте, после всей группы «mit dem neuen Staubsauger».',
      },
      {
        type: 'transform',
        instructionRu: 'Замените определённый артикль на неопределённый.',
        prompt: 'Der alte Schrank steht im Keller.',
        answers: ['Ein alter Schrank steht im Keller.'],
        explanationRu: 'После ein в Nominativ мужского рода нет сигнала, поэтому прилагательное получает -er: ein alter Schrank.',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите предложение без артикля.',
        prompt: 'Ich esse gern das frische Brot vom Bäcker.',
        answers: ['Ich esse gern frisches Brot vom Bäcker.'],
        explanationRu: 'Без артикля прилагательное берёт сигнал артикля das: frisches Brot.',
      },
    ],
  },
  vocab: [
    { de: 'Sonderangebot', article: 'das', plural: '-e', pos: 'noun', ru: 'специальное предложение, акция', example: 'Diese Woche ist Kaffee im Sonderangebot.', exampleRu: 'На этой неделе кофе продаётся по акции.' },
    { de: 'Kassenbon', article: 'der', plural: '-s', pos: 'noun', ru: 'кассовый чек', example: 'Ohne Kassenbon können wir die Ware leider nicht umtauschen.', exampleRu: 'Без чека мы, к сожалению, не можем обменять товар.' },
    { de: 'Reklamation', article: 'die', plural: '-en', pos: 'noun', ru: 'рекламация, жалоба на товар', example: 'Für Reklamationen ist der Kundenservice im ersten Stock zuständig.', exampleRu: 'Жалобами на товар занимается служба поддержки на втором этаже.' },
    { de: 'Garantie', article: 'die', plural: '-n', pos: 'noun', ru: 'гарантия', example: 'Auf das Gerät gibt es zwei Jahre Garantie.', exampleRu: 'На прибор даётся гарантия два года.' },
    { de: 'Lieferung', article: 'die', plural: '-en', pos: 'noun', ru: 'доставка, поставка', example: 'Die Lieferung kommt voraussichtlich am Donnerstag.', exampleRu: 'Доставка ожидается в четверг.' },
    { de: 'Ware', article: 'die', plural: '-n', pos: 'noun', ru: 'товар', example: 'Reduzierte Ware kann man nicht zurückgeben.', exampleRu: 'Уценённый товар нельзя вернуть.' },
    { de: 'Verbraucher', article: 'der', plural: '-', pos: 'noun', ru: 'потребитель', example: 'Viele Verbraucher achten heute auf nachhaltige Produkte.', exampleRu: 'Многие потребители сегодня обращают внимание на экологичные продукты.' },
    { de: 'Qualität', article: 'die', plural: '-en', pos: 'noun', ru: 'качество', example: 'Die Qualität dieser Schuhe ist wirklich gut.', exampleRu: 'Качество этой обуви действительно хорошее.' },
    { de: 'Rücksendung', article: 'die', plural: '-en', pos: 'noun', ru: 'возврат (отправка обратно)', example: 'Die Rücksendung ist bei diesem Online-Shop kostenlos.', exampleRu: 'Возврат в этом интернет-магазине бесплатный.' },
    { de: 'Rabatt', article: 'der', plural: '-e', pos: 'noun', ru: 'скидка', example: 'Mit der Kundenkarte bekommen Sie zehn Prozent Rabatt.', exampleRu: 'С картой клиента вы получаете скидку десять процентов.' },
    { de: 'umtauschen', forms: 'tauscht um, tauschte um, hat umgetauscht', pos: 'verb', ru: 'обменивать (товар)', example: 'Kann ich die Hose gegen eine andere Größe umtauschen?', exampleRu: 'Могу я обменять брюки на другой размер?' },
    { de: 'reklamieren', pos: 'verb', ru: 'предъявлять претензию', example: 'Ich möchte diesen defekten Wasserkocher reklamieren.', exampleRu: 'Я хочу предъявить претензию по поводу этого неисправного чайника.' },
    { de: 'zurückschicken', forms: 'schickt zurück, schickte zurück, hat zurückgeschickt', pos: 'verb', ru: 'отправлять обратно', example: 'Die Jacke war zu klein, also habe ich sie zurückgeschickt.', exampleRu: 'Куртка была мала, так что я её отправил обратно.' },
    { de: 'sich leisten', forms: 'sich (Dat) etwas leisten', pos: 'verb', ru: 'позволить себе (купить)', example: 'Ein neues Auto können wir uns im Moment nicht leisten.', exampleRu: 'Новую машину мы сейчас не можем себе позволить.' },
    { de: 'vergleichen', forms: 'vergleicht, verglich, hat verglichen', pos: 'verb', ru: 'сравнивать', example: 'Vor dem Kauf vergleiche ich immer die Preise im Internet.', exampleRu: 'Перед покупкой я всегда сравниваю цены в интернете.' },
    { de: 'ausgeben', forms: 'gibt aus, gab aus, hat ausgegeben; für + Akk', pos: 'verb', ru: 'тратить (деньги)', example: 'Wie viel Geld gibst du im Monat für Kleidung aus?', exampleRu: 'Сколько денег ты тратишь в месяц на одежду?' },
    { de: 'ausverkauft', pos: 'adj', ru: 'распроданный', example: 'Das günstige Modell ist leider schon ausverkauft.', exampleRu: 'Недорогая модель, к сожалению, уже распродана.' },
    { de: 'preiswert', pos: 'adj', ru: 'недорогой, выгодный', example: 'Auf dem Flohmarkt findet man oft preiswerte Möbel.', exampleRu: 'На блошином рынке часто можно найти недорогую мебель.' },
    { de: 'nachhaltig', pos: 'adj', ru: 'экологичный, устойчивый', example: 'Ich kaufe lieber nachhaltige Kleidung aus fairer Produktion.', exampleRu: 'Я предпочитаю покупать экологичную одежду честного производства.' },
    { de: 'gebraucht', pos: 'adj', ru: 'подержанный, б/у', example: 'Mein Bruder hat sich ein gebrauchtes Fahrrad gekauft.', exampleRu: 'Мой брат купил себе подержанный велосипед.' },
  ],
  listening: {
    title: 'Eine kaputte Kaffeemaschine',
    kind: 'dialog',
    text: `A: Guten Tag, kann ich Ihnen helfen?
B: Guten Tag. Ja, ich habe vor zwei Wochen bei Ihnen diese neue Kaffeemaschine gekauft. Leider funktioniert sie nicht richtig.
A: Oh, das tut mir leid. Was ist denn das Problem?
B: Der Kaffee ist immer nur lauwarm, und gestern ist plötzlich heißes Wasser aus der Maschine gelaufen. Die ganze Küche war nass!
A: Das klingt wirklich nicht gut. Haben Sie den Kassenbon dabei?
B: Ja, hier ist er. Ich hatte die Maschine im Sonderangebot gekauft, mit zwanzig Prozent Rabatt.
A: Kein Problem, auch reduzierte Ware hat zwei Jahre Garantie. Möchten Sie Ihr Geld zurück oder lieber ein anderes Gerät?
B: Lieber ein anderes Gerät. Haben Sie auch Maschinen, die heiße Milch machen?
A: Ja, natürlich. Schauen Sie mal, hier vorne steht ein sehr beliebtes Modell. Es ist aus rostfreiem Edelstahl und macht auch Milchschaum für Cappuccino.
B: Das sieht schön aus. Was kostet die silberne Maschine?
A: Normalerweise 249 Euro, aber diese Woche nur 199 Euro.
B: Das ist mir leider zu teuer. Die alte Maschine hat nur 89 Euro gekostet.
A: Dann empfehle ich Ihnen das kleine schwarze Modell hier. Es ist preiswert und hat sehr gute Bewertungen.
B: Und wie lange hält so ein Gerät normalerweise?
A: Bei guter Pflege zehn Jahre oder länger. Sie müssen es nur regelmäßig entkalken.
B: Gut, dann nehme ich die schwarze Maschine. Muss ich noch etwas dazubezahlen?
A: Nein, sie kostet 79 Euro. Wir geben Ihnen also sogar zehn Euro zurück.
B: Super! Und kann ich die kaputte Maschine einfach hierlassen?
A: Ja, die schicken wir an den Hersteller zurück. Und hier ist Ihr neuer Kassenbon.`,
    questions: [
      { question: 'Wann hat die Kundin die Kaffeemaschine gekauft?', options: ['Vor zwei Wochen', 'Gestern', 'Vor zwei Jahren'], answer: 0 },
      {
        question: 'Was ist das Problem mit der Maschine?',
        options: ['Sie macht zu viel Lärm.', 'Der Kaffee ist nur lauwarm und es läuft Wasser heraus.', 'Sie ist zu groß für die Küche.'],
        answer: 1,
      },
      {
        question: 'Warum kauft die Kundin die silberne Maschine nicht?',
        options: ['Sie ist ausverkauft.', 'Sie hat keine Garantie.', 'Sie ist ihr zu teuer.'],
        answer: 2,
      },
      { question: 'Wie viel kostet die schwarze Maschine?', options: ['89 Euro', '199 Euro', '249 Euro', '79 Euro'], answer: 3 },
      {
        question: 'Was passiert mit der kaputten Maschine?',
        options: [
          'Die Kundin nimmt sie wieder mit nach Hause.',
          'Der Verkäufer repariert sie sofort.',
          'Das Geschäft schickt sie an den Hersteller zurück.',
          'Die Kundin muss sie selbst an den Hersteller schicken.',
        ],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu: 'Вы заказали в интернет-магазине зимнее пальто, но с товаром проблема. Напишите письмо-рекламацию.',
    taskDe: 'Sie haben in einem Online-Shop einen Wintermantel bestellt, aber es gibt ein Problem. Schreiben Sie eine Reklamation an den Kundenservice.',
    points: [
      'Was haben Sie wann bestellt?',
      'Welches Problem gibt es mit der Ware?',
      'Was erwarten Sie (Umtausch, Geld zurück)?',
      'Bis wann soll der Shop reagieren?',
    ],
    minWords: 100,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'am … habe ich bei Ihnen einen schwarzen Wintermantel (Bestellnummer …) bestellt.',
      'Leider musste ich feststellen, dass …',
      'Bitte schicken Sie mir einen neuen Mantel oder erstatten Sie mir den vollen Kaufpreis.',
      'Ich erwarte Ihre Antwort bis zum …',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu: 'Вы в магазине одежды и ищете определённую вещь (например, куртку или подарок). Продавщица консультирует вас.',
    aiRole:
      'Sie sind Verkäuferin in einem Bekleidungsgeschäft in Düsseldorf. Sie fragen nach Größe, Farbe, Material und Preisvorstellung und empfehlen verschiedene Artikel, die Sie mit vielen Adjektiven beschreiben. Sprechen Sie freundlich und auf B1-Niveau.',
    opener: 'Guten Tag! Kann ich Ihnen helfen, oder möchten Sie sich erst einmal umschauen?',
    tasksRu: [
      'Опишите, что вы ищете (цвет, материал, размер), с правильными окончаниями прилагательных.',
      'Спросите о цене, скидках и возможности обмена.',
      'Сравните две вещи (Die blaue Jacke ist schön, aber die graue …).',
      'Примите решение и вежливо завершите разговор.',
    ],
    readAloud: [
      'Ich suche einen warmen, wasserdichten Wintermantel in Größe 38.',
      'Die günstigen Angebote gibt es nur bis nächsten Freitag.',
      'Kann ich die grüne Bluse umtauschen, wenn sie nicht passt?',
    ],
  },
};
