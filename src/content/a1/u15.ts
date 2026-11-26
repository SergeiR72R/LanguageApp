import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-15',
  level: 'A1',
  order: 15,
  title: 'Kleidung und Farben',
  titleRu: 'Одежда и цвета',
  goalsRu: [
    'Называть одежду и цвета',
    'Покупать одежду: спрашивать размер, цвет и цену, примерять',
    'Заменять существительное местоимением в винительном падеже: Ich nehme ihn.',
    'Спрашивать и говорить, что нравится: Wie gefällt dir …? Welcher …? Dieser!',
  ],
  grammar: {
    topic: 'Personalpronomen im Akkusativ; welch- und dies-; Wie gefällt dir …?',
    topicRu: 'Личные местоимения в винительном падеже; «какой?» и «этот»; «Как тебе нравится …?»',
    explanationRu: `**Местоимение** — слово вместо существительного: «он», «её», «их». В винительном падеже (Akkusativ — кого? что?) немецкие местоимения меняются, как и русские: я → меня, ты → тебя.

**mich, dich, ihn, sie, es, uns, euch, sie, Sie** — смотрите таблицу.
- Siehst du **mich**? — Ты меня видишь?
- Ich rufe **dich** an. — Я тебе позвоню.

**Вещи тоже бывают «он», «она», «оно»** — по роду артикля:
- der Pullover → **ihn**: Der Pullover ist schön. Ich nehme **ihn**.
- die Jacke → **sie**: Die Jacke ist toll. Ich kaufe **sie**.
- das Kleid → **es**: Das Kleid ist zu teuer. Ich nehme **es** nicht.
- die Schuhe (мн. ч.) → **sie**: Ich probiere **sie** an.

Меняется только мужской род: er → **ihn**. sie, es, sie остаются как были.

**welch- (какой?) и dies- (этот)** имеют окончания как у артикля der/die/das:
- der → **welcher / dieser**: Welcher Rock? — Dieser.
- die → **welche / diese**: Welche Farbe? — Diese.
- das → **welches / dieses**: Welches Hemd?
- мн. ч. → **welche / diese**: Welche Schuhe?
- в Akkusativ мужской род: **welchen / diesen**: Welchen Mantel nimmst du? — Diesen hier.

**Wie gefällt dir …? — Как тебе нравится …?** Это готовая фраза. Вещь стоит в именительном падеже, а глагол согласуется с ней:
- Der Rock **gefällt** mir. — Мне нравится юбка.
- Die Schuhe **gefallen** mir. — Мне нравятся туфли.
- Вежливо: Wie gefällt **Ihnen** …?

**Типичные ошибки русскоговорящих:**
- «Ich finde er schön» — правильно: Ich finde **ihn** schön.
- Говорят **es** обо всех вещах (как английское it). По-немецки: der Mantel → **ihn**, die Hose → **sie**.
- «Der Rock gefällt mich» — правильно: gefällt **mir**.
- «Die Schuhe gefällt mir» — правильно: gefall**en** (их много).`,
    table: [
      ['Nominativ', 'Akkusativ', 'Beispiel'],
      ['ich', 'mich', 'Hörst du mich?'],
      ['du', 'dich', 'Ich sehe dich.'],
      ['er (der Rock)', 'ihn', 'Ich nehme ihn.'],
      ['sie (die Jacke)', 'sie', 'Ich kaufe sie.'],
      ['es (das Kleid)', 'es', 'Ich finde es schön.'],
      ['wir', 'uns', 'Besuchst du uns?'],
      ['ihr', 'euch', 'Ich rufe euch an.'],
      ['sie / Sie', 'sie / Sie', 'Ich verstehe Sie nicht.'],
    ],
    examples: [
      { de: 'Der Pullover ist schön. Ich nehme ihn.', ru: 'Свитер красивый. Я его возьму.' },
      { de: 'Wo ist meine Jacke? Ich finde sie nicht.', ru: 'Где моя куртка? Я не могу её найти.' },
      { de: 'Welche Farbe möchten Sie? – Blau, bitte.', ru: 'Какой цвет вы хотите? – Синий, пожалуйста.' },
      { de: 'Welchen Mantel nimmst du? – Diesen hier.', ru: 'Какое пальто ты берёшь? – Вот это.' },
      { de: 'Wie gefällt dir das Kleid? – Es gefällt mir sehr gut.', ru: 'Как тебе платье? – Оно мне очень нравится.' },
      { de: 'Die Schuhe gefallen mir nicht.', ru: 'Эти туфли мне не нравятся.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Der Pullover ist schön. Ich nehme ___.',
        options: ['ihn', 'er', 'sie', 'es'],
        answer: 0,
        explanationRu: 'der Pullover — мужской род. В Akkusativ er → ihn.',
      },
      {
        type: 'choice',
        prompt: 'Wie gefällt ___ das Kleid?',
        options: ['dir', 'dich', 'du', 'ihn'],
        answer: 0,
        explanationRu: 'Готовая фраза: Wie gefällt dir …? — Как тебе нравится …? (а не dich).',
      },
      {
        type: 'choice',
        prompt: '___ Rock möchtest du? – Diesen hier.',
        options: ['Welchen', 'Welcher', 'Welches', 'Welche'],
        answer: 0,
        explanationRu: 'der Rock — мужской род, и здесь он в Akkusativ (что ты хочешь?): welcher → welchen.',
      },
      {
        type: 'gap',
        prompt: 'Ich suche meine Jacke. Siehst du ___?',
        answers: ['sie'],
        explanationRu: 'die Jacke — женский род: в Akkusativ остаётся sie.',
      },
      {
        type: 'gap',
        prompt: 'Das Hemd ist toll. Ich kaufe ___.',
        answers: ['es'],
        explanationRu: 'das Hemd — средний род: в Akkusativ остаётся es.',
      },
      {
        type: 'gap',
        prompt: 'Hallo Tom! Ich sehe ___ nicht. Wo bist du?',
        answers: ['dich'],
        explanationRu: 'du → dich (тебя) в Akkusativ.',
      },
      {
        type: 'gap',
        prompt: '___ Schuhe gefallen mir. Sie sind schön.',
        answers: ['Diese'],
        hintRu: 'dies-',
        explanationRu: 'die Schuhe — множественное число: diese (как артикль die).',
      },
      {
        type: 'gap',
        prompt: 'Die Schuhe ___ mir gut.',
        answers: ['gefallen'],
        hintRu: 'gefallen',
        explanationRu: 'Глагол согласуется с вещью: die Schuhe (их много) → gefallen.',
      },
      {
        type: 'order',
        words: ['Wie', 'gefällt', 'dir', 'der', 'Mantel?'],
        translationRu: 'Как тебе пальто?',
        explanationRu: 'Wie на первом месте, глагол gefällt — на втором, затем dir и вещь.',
      },
      {
        type: 'choice',
        audio: 'Die Jacke ist rot und die Hose ist schwarz.',
        prompt: 'Какого цвета брюки?',
        options: ['чёрные', 'красные', 'белые', 'синие'],
        answer: 0,
        explanationRu: 'die Hose ist schwarz — брюки чёрные. Красная (rot) — куртка.',
      },
      {
        type: 'gap',
        audio: 'Haben Sie die Bluse in Größe achtunddreißig?',
        prompt: 'Какой размер нужен? Напишите цифрами: ___',
        answers: ['38'],
        explanationRu: 'achtunddreißig = acht + und + dreißig = 38.',
      },
      {
        type: 'choice',
        audio: 'Ich finde ihn sehr schön.',
        prompt: 'О какой вещи могут так сказать?',
        options: ['der Mantel', 'die Jacke', 'das Kleid'],
        answer: 0,
        explanationRu: 'ihn — местоимение мужского рода в Akkusativ, значит речь о der Mantel.',
      },
    ],
  },
  vocab: [
    { de: 'Kleidung', article: 'die', plural: '–', pos: 'noun', ru: 'одежда', example: 'Ich kaufe neue Kleidung.', exampleRu: 'Я покупаю новую одежду.', pronRu: 'ди КЛАЙ-дунг' },
    { de: 'Hose', article: 'die', plural: '-n', pos: 'noun', ru: 'брюки, штаны', example: 'Die Hose ist zu lang.', exampleRu: 'Брюки слишком длинные.', pronRu: 'ди ХО:-зэ' },
    { de: 'Hemd', article: 'das', plural: '-en', pos: 'noun', ru: 'рубашка (мужская)', example: 'Das Hemd ist weiß.', exampleRu: 'Рубашка белая.', pronRu: 'дас ХЭМТ' },
    { de: 'Bluse', article: 'die', plural: '-n', pos: 'noun', ru: 'блузка', example: 'Die Bluse gefällt mir.', exampleRu: 'Блузка мне нравится.', pronRu: 'ди БЛУ:-зэ' },
    { de: 'Rock', article: 'der', plural: '-¨e', pos: 'noun', ru: 'юбка', example: 'Der Rock ist zu kurz.', exampleRu: 'Юбка слишком короткая.', pronRu: 'дер РОК' },
    { de: 'Kleid', article: 'das', plural: '-er', pos: 'noun', ru: 'платье', example: 'Das Kleid ist sehr schön.', exampleRu: 'Платье очень красивое.', pronRu: 'дас КЛАЙТ' },
    { de: 'Pullover', article: 'der', plural: '–', pos: 'noun', ru: 'свитер', example: 'Der Pullover ist warm.', exampleRu: 'Свитер тёплый.', pronRu: 'дер пу-ЛО:-ва' },
    { de: 'Jacke', article: 'die', plural: '-n', pos: 'noun', ru: 'куртка; пиджак', example: 'Nimm die Jacke, es ist kalt!', exampleRu: 'Возьми куртку, холодно!', pronRu: 'ди ЙА-кэ' },
    { de: 'Mantel', article: 'der', plural: '-¨', pos: 'noun', ru: 'пальто', example: 'Der Mantel kostet 120 Euro.', exampleRu: 'Пальто стоит 120 евро.', pronRu: 'дер МАН-тэль' },
    { de: 'Schuh', article: 'der', plural: '-e', pos: 'noun', ru: 'туфля, ботинок; мн. ч. обувь', example: 'Die Schuhe sind zu klein.', exampleRu: 'Туфли слишком маленькие.', pronRu: 'дер ШУ:' },
    { de: 'Größe', article: 'die', plural: '-n', pos: 'noun', ru: 'размер; рост', example: 'Welche Größe haben Sie?', exampleRu: 'Какой у вас размер?', pronRu: 'ди ГРЁ:-сэ' },
    { de: 'Farbe', article: 'die', plural: '-n', pos: 'noun', ru: 'цвет; краска', example: 'Welche Farbe magst du?', exampleRu: 'Какой цвет тебе нравится?', pronRu: 'ди ФАР-бэ' },
    { de: 'rot', pos: 'adj', ru: 'красный', example: 'Die Jacke ist rot.', exampleRu: 'Куртка красная.', pronRu: 'РО:Т' },
    { de: 'blau', pos: 'adj', ru: 'синий, голубой', example: 'Meine Hose ist blau.', exampleRu: 'Мои брюки синие.', pronRu: 'БЛАУ' },
    { de: 'grün', pos: 'adj', ru: 'зелёный', example: 'Der Pullover ist grün.', exampleRu: 'Свитер зелёный.', pronRu: 'ГРЮ:Н' },
    { de: 'schwarz', pos: 'adj', ru: 'чёрный', example: 'Die Schuhe sind schwarz.', exampleRu: 'Туфли чёрные.', pronRu: 'ШВАРЦ' },
    { de: 'weiß', pos: 'adj', ru: 'белый', example: 'Das Hemd ist weiß.', exampleRu: 'Рубашка белая.', pronRu: 'ВАЙС' },
    { de: 'gefallen', pos: 'verb', forms: 'er gefällt, hat gefallen; Das gefällt mir.', ru: 'нравиться', example: 'Der Mantel gefällt mir.', exampleRu: 'Пальто мне нравится.', pronRu: 'гэ-ФА-лэн' },
    { de: 'tragen', pos: 'verb', forms: 'er trägt, hat getragen', ru: 'носить (одежду); нести', example: 'Sie trägt heute ein Kleid.', exampleRu: 'Сегодня она в платье.', pronRu: 'ТРА:-гэн' },
    { de: 'anprobieren', pos: 'verb', forms: 'er probiert an, hat anprobiert', ru: 'примерять', example: 'Kann ich die Hose anprobieren?', exampleRu: 'Можно мне примерить брюки?', pronRu: 'АН-про-би:-рэн' },
  ],
  listening: {
    title: 'Im Geschäft',
    kind: 'dialog',
    text: `A: Guten Tag. Kann ich Ihnen helfen?
B: Ja, bitte. Ich suche eine Jacke für den Winter.
A: Welche Farbe möchten Sie?
B: Schwarz oder blau.
A: Wie finden Sie diese Jacke hier? Sie ist blau und sehr warm.
B: Die gefällt mir gut. Haben Sie sie in Größe vierzig?
A: Ja, hier, bitte. Probieren Sie sie an!
B: Hm, sie ist zu klein. Haben Sie sie auch in zweiundvierzig?
A: Moment … Ja, hier, bitte.
B: Die passt! Was kostet sie?
A: Neunundachtzig Euro.
B: Gut, ich nehme sie.`,
    questions: [
      { question: 'Was sucht die Frau?', options: ['einen Mantel', 'eine Jacke', 'einen Pullover'], answer: 1 },
      { question: 'Welche Farbe hat die Jacke?', options: ['schwarz', 'blau', 'grün'], answer: 1 },
      { question: 'Wie ist die Jacke in Größe 40?', options: ['zu groß', 'zu klein', 'gut'], answer: 1 },
      { question: 'Welche Größe nimmt die Frau?', options: ['38', '40', '42'], answer: 2 },
      { question: 'Was kostet die Jacke?', options: ['79 Euro', '89 Euro', '98 Euro'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'Вы в магазине одежды. Напишите подруге Лене сообщение: что вы хотите купить (вещь и цвет), сколько это стоит и спросите, как ей нравится вещь. Используйте ihn / sie / es.',
    taskDe: 'Sie sind in einem Geschäft. Schreiben Sie Ihrer Freundin Lena eine Nachricht.',
    points: ['Was möchten Sie kaufen? (Kleidung, Farbe)', 'Was kostet es?', 'Fragen Sie: Wie gefällt dir …?'],
    minWords: 25,
    usefulPhrases: [
      'Hallo Lena,',
      'Ich bin im Kaufhaus.',
      'Ich möchte einen/eine/ein … kaufen.',
      'Er/Sie/Es ist rot/blau/schwarz.',
      'Ich finde ihn/sie/es schön.',
      'Er/Sie/Es kostet … Euro.',
      'Wie gefällt dir …?',
      'Bis bald!',
    ],
  },
  speaking: {
    scenarioRu: 'Вы в магазине одежды. Продавщица помогает вам выбрать вещь.',
    aiRole:
      'Sie sind Verkäuferin in einem Kleidungsgeschäft in Köln. Der Kunde ist Anfänger (A1). Sprechen Sie sehr einfach und langsam, in kurzen Sätzen. Fragen Sie nach Farbe und Größe, zeigen Sie Kleidung (Wie finden Sie diesen Pullover? Wie gefällt Ihnen diese Jacke?) und nennen Sie den Preis. Benutzen Sie ihn, sie, es. Wenn der Kunde nicht weiterweiß, geben Sie zwei einfache Möglichkeiten zur Auswahl, zum Beispiel: Blau oder schwarz?',
    opener: 'Guten Tag! Was suchen Sie?',
    tasksRu: [
      'Скажите, что вы ищете: вещь, цвет и размер',
      'Спросите, можно ли примерить: «Kann ich ihn / sie / es anprobieren?»',
      'Скажите, нравится ли вам вещь и подходит ли размер (zu groß / zu klein)',
      'Спросите цену и купите вещь: «Ich nehme ihn / sie / es.»',
    ],
    readAloud: [
      'Der Pullover ist blau.',
      'Ich nehme diese Jacke.',
      'Wie gefällt dir das Kleid?',
      'Ich finde ihn sehr schön.',
      'Die Schuhe sind zu klein.',
    ],
  },
};
