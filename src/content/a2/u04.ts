import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-04',
  level: 'A2',
  order: 4,
  title: 'Wohnen und Umziehen',
  titleRu: 'Жильё и переезд',
  goalsRu: [
    'Говорить, где стоят, лежат и висят вещи в квартире (Wo? + дательный падеж)',
    'Говорить, куда вы ставите, кладёте и вешаете вещи (Wohin? + винительный падеж)',
    'Различать пары глаголов stellen/stehen, legen/liegen и hängen',
    'Понимать объявления о квартирах и рассказывать о своём переезде',
  ],
  grammar: {
    topic: 'Wechselpräpositionen: Wo? und Wohin?',
    topicRu: 'Предлоги места: где? (Dativ) и куда? (Akkusativ)',
    explanationRu: `В немецком есть **9 предлогов**, после которых бывает **два разных падежа**. Их называют Wechselpräpositionen — «предлоги-переключатели»:

**in** (в), **an** (у, на — на стене, у окна), **auf** (на — сверху), **über** (над), **unter** (под), **vor** (перед), **hinter** (за), **neben** (рядом с), **zwischen** (между).

**Правило:**
- **Wo?** (где?) — вещь стоит на месте, движения нет → **Dativ** (дательный падеж): Das Buch liegt **auf dem** Tisch.
- **Wohin?** (куда?) — есть движение, мы что-то переносим → **Akkusativ** (винительный падеж): Ich lege das Buch **auf den** Tisch.

Хорошая новость: в русском так же! «Книга лежит **на столе**» (где?) — «Я кладу книгу **на стол**» (куда?). «В шкафу» — «в шкаф».

**Артикли:**
- Dativ: **dem** (der/das), **der** (die), **den** (мн. ч.)
- Akkusativ: **den** (der), **die** (die), **das** (das), **die** (мн. ч.)

**Слияния:** in + dem = **im**, an + dem = **am**, in + das = **ins**, an + das = **ans**.

**Пары глаголов** — очень важно:
- **stellen** (ставить) → **stehen** (стоять). Так говорят о вещах, которые стоят «вертикально»: шкаф, бутылка, лампа, книги в шкафу.
- **legen** (класть) → **liegen** (лежать): ковёр, ключ, газета.
- **hängen** (вешать) → **hängen** (висеть): картина, часы, куртка.

stellen, legen, hängen — действие → **wohin? + Akkusativ**. stehen, liegen, hängen — состояние → **wo? + Dativ**.

Перфект: ich habe … gestellt / gelegt / gehängt, но: es hat … gestanden / gelegen / gehangen.

**Типичные ошибки:**
- «Ich lege das Buch auf dem Tisch» ✗ — здесь движение, значит **auf den Tisch** ✓.
- «Ich gehe in der Küche» ✗ → **in die Küche** ✓.
- «на стене» — это **an der Wand**, а не auf der Wand: an — у вертикальной поверхности, auf — сверху.
- Книги в шкафу по-немецки обычно **стоят**: Die Bücher stehen im Regal.`,
    table: [
      ['', 'Wo? (Dativ)', 'Wohin? (Akkusativ)'],
      ['der Tisch', 'auf dem Tisch', 'auf den Tisch'],
      ['die Wand', 'an der Wand', 'an die Wand'],
      ['das Regal', 'im Regal', 'ins Regal'],
      ['die Kisten (мн. ч.)', 'neben den Kisten', 'neben die Kisten'],
      ['Verb', 'stehen / liegen / hängen', 'stellen / legen / hängen'],
    ],
    examples: [
      { de: 'Das Sofa steht im Wohnzimmer.', ru: 'Диван стоит в гостиной.' },
      { de: 'Wir stellen das Sofa ins Wohnzimmer.', ru: 'Мы ставим диван в гостиную.' },
      { de: 'Der Schlüssel liegt auf dem Tisch.', ru: 'Ключ лежит на столе.' },
      { de: 'Leg den Schlüssel bitte auf den Tisch!', ru: 'Положи, пожалуйста, ключ на стол!' },
      { de: 'Das Bild hängt an der Wand. Ich habe es gestern an die Wand gehängt.', ru: 'Картина висит на стене. Я вчера повесил её на стену.' },
      { de: 'Zwischen dem Fenster und der Tür steht ein Regal.', ru: 'Между окном и дверью стоит стеллаж.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Das Sofa steht ___ Wohnzimmer.',
        options: ['im', 'ins', 'in die', 'in den'],
        answer: 0,
        explanationRu: 'Вопрос «где?» (steht — стоит, движения нет) → Dativ: in dem = im.',
      },
      {
        type: 'choice',
        prompt: 'Ich stelle die Lampe neben ___ Bett.',
        options: ['dem', 'das', 'der', 'den'],
        answer: 1,
        explanationRu: 'stellen — действие, вопрос «куда?» → Akkusativ. das Bett в Akkusativ остаётся das.',
      },
      {
        type: 'choice',
        prompt: 'Der Teppich ___ auf dem Boden.',
        options: ['legt', 'stellt', 'liegt', 'steht'],
        answer: 2,
        explanationRu: 'Ковёр лежит (горизонтально), это состояние → liegen. legen — это действие «класть».',
      },
      {
        type: 'choice',
        prompt: 'Kannst du die Milch bitte in ___ Kühlschrank stellen?',
        options: ['dem', 'der', 'die', 'den'],
        answer: 3,
        explanationRu: 'stellen + «куда?» → Akkusativ. der Kühlschrank → den Kühlschrank.',
      },
      {
        type: 'gap',
        prompt: 'Das Bild hängt an ___ Wand.',
        answers: ['der'],
        explanationRu: 'Картина уже висит — «где?» → Dativ. die Wand → an der Wand.',
      },
      {
        type: 'gap',
        prompt: 'Leg die Zeitung bitte auf ___ Tisch.',
        answers: ['den'],
        explanationRu: 'legen — действие, «куда?» → Akkusativ: der Tisch → auf den Tisch.',
      },
      {
        type: 'gap',
        prompt: 'Die Schuhe stehen unter ___ Bett.',
        answers: ['dem'],
        explanationRu: 'stehen — состояние, «где?» → Dativ: das Bett → unter dem Bett.',
      },
      {
        type: 'gap',
        prompt: 'Wir hängen die Uhr über ___ Tür.',
        answers: ['die'],
        explanationRu: 'hängen здесь — действие «вешать» (wir hängen … über …) → Akkusativ: die Tür остаётся die.',
      },
      {
        type: 'order',
        words: ['Wohin', 'stellen', 'wir', 'das', 'Sofa?'],
        translationRu: 'Куда мы поставим диван?',
        explanationRu: 'В вопросе с вопросительным словом: Wohin на 1-м месте, глагол на 2-м, потом подлежащее.',
      },
      {
        type: 'transform',
        instructionRu: 'Скажите, где вещь находится теперь (stehen + Dativ).',
        prompt: 'Ich stelle die Vase auf den Tisch.',
        answers: ['Die Vase steht auf dem Tisch.', 'Jetzt steht die Vase auf dem Tisch.'],
        explanationRu: 'stellen (куда? + Akk) → stehen (где? + Dativ): auf den Tisch → auf dem Tisch.',
      },
      {
        type: 'choice',
        audio: 'Ich lege die Bücher ins Regal.',
        prompt: 'Что вы слышите? Что делает человек?',
        options: ['Книги уже лежат в шкафу.', 'Он кладёт книги в шкаф.', 'Он ставит шкаф в комнату.', 'Он ищет книги в шкафу.'],
        answer: 1,
        explanationRu: '«Ich lege … ins Regal» — действие (legen) и направление ins = in das (Akkusativ): кладёт в стеллаж.',
      },
      {
        type: 'gap',
        audio: 'Die Lampe steht neben dem Sofa.',
        prompt: 'Где стоит лампа? Neben dem ___.',
        answers: ['Sofa'],
        explanationRu: 'Вы слышите «neben dem Sofa» — рядом с диваном. Sofa — средний род, в Dativ: dem Sofa.',
      },
    ],
  },
  vocab: [
    { de: 'Umzug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'переезд', example: 'Nach dem Umzug war ich sehr müde.', exampleRu: 'После переезда я очень устал.', pronRu: 'УМ-цук' },
    { de: 'einziehen', forms: 'zieht ein, ist eingezogen', pos: 'verb', ru: 'въезжать (в квартиру)', example: 'Wir sind im Mai in die Wohnung eingezogen.', exampleRu: 'Мы въехали в квартиру в мае.', pronRu: 'АЙН-ци:-ен' },
    { de: 'ausziehen', forms: 'zieht aus, ist ausgezogen', pos: 'verb', ru: 'выезжать, съезжать (из квартиры)', example: 'Unser Nachbar ist letzte Woche ausgezogen.', exampleRu: 'Наш сосед съехал на прошлой неделе.', pronRu: 'АУС-ци:-ен' },
    { de: 'Mieter', article: 'der', plural: '-', pos: 'noun', ru: 'жилец, квартиросъёмщик', example: 'Die Mieter in unserem Haus sind sehr nett.', exampleRu: 'Жильцы в нашем доме очень милые.', pronRu: 'дер МИ:-та' },
    { de: 'Vermieter', article: 'der', plural: '-', pos: 'noun', ru: 'хозяин квартиры, арендодатель', example: 'Der Vermieter wohnt im Erdgeschoss.', exampleRu: 'Хозяин квартиры живёт на первом этаже.', pronRu: 'дер фер-МИ:-та' },
    { de: 'Nebenkosten', article: 'die', plural: 'только мн. ч.', pos: 'noun', ru: 'коммунальные расходы (вода, отопление, мусор)', example: 'Die Miete kostet 600 Euro plus 150 Euro Nebenkosten.', exampleRu: 'Аренда стоит 600 евро плюс 150 евро коммунальных расходов.', pronRu: 'НЕ:-бен-кос-тен' },
    { de: 'Kaution', article: 'die', plural: '-en', pos: 'noun', ru: 'залог (деньги за квартиру)', example: 'Für die Wohnung zahlen wir 1200 Euro Kaution.', exampleRu: 'За квартиру мы платим 1200 евро залога.', pronRu: 'ди кау-ЦЬО:Н' },
    { de: 'Stock', article: 'der', plural: 'die Stockwerke', pos: 'noun', ru: 'этаж (der erste Stock = русский 2-й этаж)', example: 'Ich wohne im dritten Stock.', exampleRu: 'Я живу на четвёртом этаже (по-русски).', pronRu: 'дер ШТОК' },
    { de: 'Erdgeschoss', article: 'das', plural: '-e', pos: 'noun', ru: 'первый (нижний) этаж', example: 'Im Erdgeschoss ist eine Bäckerei.', exampleRu: 'На первом этаже находится пекарня.', pronRu: 'дас ЭРТ-ге-шос' },
    { de: 'Keller', article: 'der', plural: '-', pos: 'noun', ru: 'подвал', example: 'Die Fahrräder stehen im Keller.', exampleRu: 'Велосипеды стоят в подвале.', pronRu: 'дер КЕ-ла' },
    { de: 'Aufzug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'лифт', example: 'Das Haus hat leider keinen Aufzug.', exampleRu: 'В доме, к сожалению, нет лифта.', pronRu: 'дер АУФ-цук' },
    { de: 'Wand', article: 'die', plural: '-¨e', pos: 'noun', ru: 'стена', example: 'An der Wand hängt ein Bild.', exampleRu: 'На стене висит картина.', pronRu: 'ди ВАНТ' },
    { de: 'Boden', article: 'der', plural: '-¨', pos: 'noun', ru: 'пол', example: 'Die Kiste steht auf dem Boden.', exampleRu: 'Ящик стоит на полу.', pronRu: 'дер БО:-ден' },
    { de: 'Wohnungsanzeige', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление о квартире', example: 'Ich lese jeden Tag die Wohnungsanzeigen in der Zeitung.', exampleRu: 'Я каждый день читаю объявления о квартирах в газете.', pronRu: 'ди ВО:-нунгс-ан-цай-ге' },
    { de: 'Teppich', article: 'der', plural: '-e', pos: 'noun', ru: 'ковёр', example: 'Der Teppich liegt vor dem Sofa.', exampleRu: 'Ковёр лежит перед диваном.', pronRu: 'дер ТЕ-пихь' },
    { de: 'Kiste', article: 'die', plural: '-n', pos: 'noun', ru: 'ящик, коробка', example: 'Wir packen die Bücher in Kisten.', exampleRu: 'Мы упаковываем книги в коробки.', pronRu: 'ди КИС-те' },
    { de: 'stellen', forms: 'stellt, hat gestellt; wohin? + Akk', pos: 'verb', ru: 'ставить', example: 'Ich stelle die Flasche in den Kühlschrank.', exampleRu: 'Я ставлю бутылку в холодильник.', pronRu: 'ШТЕ-лен' },
    { de: 'legen', forms: 'legt, hat gelegt; wohin? + Akk', pos: 'verb', ru: 'класть', example: 'Leg den Schlüssel bitte auf den Tisch.', exampleRu: 'Положи, пожалуйста, ключ на стол.', pronRu: 'ЛЕ:-ген' },
    { de: 'hängen', forms: 'hängt, hat gehängt (вешать) / hat gehangen (висеть)', pos: 'verb', ru: 'вешать; висеть', example: 'Ich hänge die Jacke in den Schrank.', exampleRu: 'Я вешаю куртку в шкаф.', pronRu: 'ХЭН-ген' },
    { de: 'möbliert', pos: 'adj', ru: 'с мебелью, меблированный', example: 'Das Zimmer ist möbliert: Bett, Schrank und Tisch sind schon da.', exampleRu: 'Комната с мебелью: кровать, шкаф и стол уже есть.', pronRu: 'мё-БЛИ:РТ' },
  ],
  listening: {
    title: 'Der Umzug',
    kind: 'dialog',
    text: `A: Hallo Max! Danke für deine Hilfe!
B: Kein Problem, Tanja. Der Umzug ist ja fast fertig. Wohin stellen wir das Sofa?
A: Ins Wohnzimmer, an die Wand neben der Tür.
B: Okay. Und der Fernseher?
A: Den stellen wir in die Ecke, neben das Regal.
B: Gut. Wo ist eigentlich der Teppich?
A: Der liegt noch im Flur. Wir legen ihn vor das Sofa.
B: Und diese Kiste hier? Auf der Kiste steht „Küche“.
A: Die bringst du bitte in die Küche. Stell sie einfach auf den Boden.
B: Mache ich. Und die Bilder? Hängst du sie heute noch an die Wand?
A: Nein, das geht nicht. Ich habe keinen Hammer. Die Bilder lege ich erst mal unter das Bett.
B: Ich habe einen Hammer im Keller. Ich bringe ihn morgen mit.
A: Super! Dann gibt es morgen Abend Pizza für uns.`,
    questions: [
      { question: 'Wohin stellen Tanja und Max das Sofa?', options: ['Ans Fenster', 'An die Wand neben der Tür', 'In die Ecke'], answer: 1 },
      { question: 'Wo steht der Fernseher später?', options: ['In der Küche', 'Vor dem Sofa', 'In der Ecke neben dem Regal'], answer: 2 },
      { question: 'Wo liegt der Teppich jetzt noch?', options: ['Im Flur', 'Im Keller', 'Unter dem Bett'], answer: 0 },
      { question: 'Warum hängen die Bilder heute noch nicht an der Wand?', options: ['Tanja hat keine Zeit.', 'Tanja hat keinen Hammer.', 'Max findet die Bilder nicht schön.'], answer: 1 },
      { question: 'Was macht Max morgen?', options: ['Er kauft Pizza.', 'Er zieht auch um.', 'Er bringt einen Hammer mit.'], answer: 2 },
    ],
  },
  writing: {
    taskRu:
      'Вы переехали в новую квартиру. Напишите e-mail другу или подруге: когда вы переехали, какая квартира (комнаты, этаж, где что стоит) и пригласите его/её в гости. Используйте предлоги места (im Wohnzimmer, an der Wand…).',
    taskDe: 'Sie sind umgezogen. Schreiben Sie eine E-Mail an einen Freund oder eine Freundin.',
    points: [
      'Wann sind Sie umgezogen? Wo ist die Wohnung?',
      'Beschreiben Sie die Wohnung: Zimmer, Stock, Möbel – was steht oder hängt wo?',
      'Laden Sie Ihren Freund / Ihre Freundin ein.',
    ],
    minWords: 50,
    usefulPhrases: [
      'Liebe Anna, / Lieber Peter,',
      'Ich bin am … umgezogen.',
      'Die Wohnung ist im zweiten Stock und hat drei Zimmer.',
      'Im Wohnzimmer steht ein Sofa, an der Wand hängt …',
      'Die Wohnung ist hell und gemütlich.',
      'Hast du am Samstag Zeit? Komm doch zum Kaffee!',
      'Bis bald! Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы переезжаете. Ваш друг Пауль помогает вам и всё время спрашивает, куда поставить, положить или повесить вещи. Отвечайте ему и говорите, где что находится.',
    aiRole:
      'Sie sind Paul, ein guter Freund. Sie helfen heute beim Umzug in die neue Wohnung. Sie tragen Möbel und Kisten und fragen immer: „Wohin stelle / lege / hänge ich …?“ und manchmal „Wo ist …?“. Sprechen Sie sehr einfach und langsam, mit kurzen Sätzen auf A2-Niveau. Stellen Sie immer nur eine Frage. Wenn der Lerner einen Fehler macht (z. B. „auf dem Tisch“ statt „auf den Tisch“), wiederholen Sie den Satz einmal freundlich und richtig.',
    opener: 'So, ich habe den Tisch. Wohin stelle ich ihn?',
    tasksRu: [
      'Скажите, куда поставить мебель: «Stell ihn bitte in die Küche / ans Fenster».',
      'Скажите, куда положить вещи (ковёр, книги, ключ): legen + Akkusativ.',
      'Попросите повесить картину или часы: «Häng das Bild bitte an die Wand».',
      'Ответьте на вопрос «Wo ist …?» с дательным падежом: «Er liegt auf dem Bett».',
    ],
    readAloud: [
      'Das Sofa steht im Wohnzimmer.',
      'Ich stelle die Lampe neben das Bett.',
      'Das Bild hängt an der Wand.',
      'Der Teppich liegt vor dem Sofa.',
      'Wir wohnen im dritten Stock.',
    ],
  },
};
