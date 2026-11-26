import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-06',
  level: 'A1',
  order: 6,
  title: 'Meine Familie',
  titleRu: 'Моя семья',
  goalsRu: [
    'Называть членов семьи: Vater, Mutter, Bruder, Schwester …',
    'Рассказывать о своей семье по фотографии: Das ist mein Sohn …',
    'Употреблять притяжательные слова mein, dein, sein, ihr, unser, Ihr',
    'Задавать вопросы «да/нет»: Hast du Geschwister? Sind Sie verheiratet?',
  ],
  grammar: {
    topic: 'Possessivartikel (Nominativ) und Ja/Nein-Fragen',
    topicRu: 'Притяжательные слова (мой, твой…) и вопросы «да/нет»',
    explanationRu: `**Шаг 1. Чей?** Слова «мой, твой, его, её, наш, Ваш» стоят перед существительным: **mein** Vater — мой отец.

- ich → **mein** (мой), du → **dein** (твой)
- er → **sein** (его), sie → **ihr** (её)
- wir → **unser** (наш), Sie → **Ihr** (Ваш — с большой буквы!)

**Шаг 2. Когда добавлять -e?** У немецких существительных есть род. Его показывает артикль — маленькое слово перед существительным: **der** Vater (муж. род), **die** Mutter (жен. род), **das** Kind (ср. род). Учите слова сразу с артиклем!

- der-слова и das-слова: **mein** Vater, **mein** Kind
- die-слова и множественное число: **meine** Mutter, **meine** Eltern

Так же: dein**e** Schwester, unser**e** Kinder, Ihr**e** Familie.

**Шаг 3. sein или ihr?** Смотрим, **чей** человек: мужчины → sein, женщины → ihr. Paul und **seine** Mutter (Пауль и его мама). Anna und **ihr** Vater (Анна и её папа).

**Внимание:** в немецком нет слова «свой»! Er liebt **seine** Frau. Ich besuche **meine** Eltern.

**Шаг 4. Вопрос «да/нет».** Глагол встаёт на **1-е место**:

- Du hast Kinder. → **Hast** du Kinder?
- Sie sind verheiratet. → **Sind** Sie verheiratet?

Ответ: **Ja, …** или **Nein, …**: Bist du verheiratet? – Nein, ich bin ledig.

**Полезная фраза:** «У меня есть брат» = Ich habe **einen** Bruder. Почему einen — узнаете в юните 8, пока запомните целиком.

**Типичные ошибки:**

- «sein Mutter» → правильно **seine** Mutter (Mutter — die-слово).
- «Anna und sein Bruder» → правильно **ihr** Bruder (Анна — женщина).
- «Du hast Kinder?» — правильный вопрос: **Hast du** Kinder?`,
    table: [
      ['', 'der Vater / das Kind', 'die Mutter / die Eltern (мн. ч.)'],
      ['ich', 'mein', 'meine'],
      ['du', 'dein', 'deine'],
      ['er', 'sein', 'seine'],
      ['sie (она)', 'ihr', 'ihre'],
      ['wir', 'unser', 'unsere'],
      ['Sie (Вы)', 'Ihr', 'Ihre'],
    ],
    examples: [
      { de: 'Das ist mein Vater, und das ist meine Mutter.', ru: 'Это мой отец, а это моя мама.' },
      { de: 'Wie heißt deine Schwester?', ru: 'Как зовут твою сестру?' },
      { de: 'Paul wohnt in Bonn. Seine Eltern wohnen in Kiel.', ru: 'Пауль живёт в Бонне. Его родители живут в Киле.' },
      { de: 'Anna ist verheiratet. Ihr Mann heißt Tom.', ru: 'Анна замужем. Её мужа зовут Том.' },
      { de: 'Hast du Geschwister? – Ja, zwei Brüder.', ru: 'У тебя есть братья или сёстры? — Да, два брата.' },
      { de: 'Sind Sie verheiratet? – Nein, ich bin geschieden.', ru: 'Вы женаты? — Нет, я разведён.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Das ist ___ Mutter. (моя)',
        options: ['mein', 'meine', 'deine'],
        answer: 1,
        explanationRu: 'die Mutter — die-слово, поэтому добавляем -e: meine Mutter.',
      },
      {
        type: 'choice',
        prompt: 'Wie heißt ___ Vater? (твой)',
        options: ['dein', 'deine', 'mein'],
        answer: 0,
        explanationRu: 'der Vater — der-слово, без -e: dein Vater.',
      },
      {
        type: 'choice',
        prompt: 'Paul und ___ Schwester wohnen in Bonn. (его)',
        options: ['ihre', 'seine', 'sein'],
        answer: 1,
        explanationRu: 'Сестра Пауля — его (мужчина) → sein-. die Schwester — die-слово → seine.',
      },
      {
        type: 'choice',
        prompt: 'Anna und ___ Bruder kommen aus Kiel. (её)',
        options: ['sein', 'ihr', 'ihre'],
        answer: 1,
        explanationRu: 'Брат Анны — её (женщина) → ihr-. der Bruder — der-слово, без -e → ihr Bruder.',
      },
      {
        type: 'gap',
        prompt: 'Das sind ___ Eltern. (мои)',
        answers: ['meine'],
        explanationRu: 'Eltern — множественное число, поэтому с -e: meine Eltern.',
      },
      {
        type: 'gap',
        prompt: 'Herr Braun, wie alt ist ___ Sohn? (Ваш)',
        answers: ['Ihr'],
        explanationRu: 'Вежливое «Ваш» — Ihr с большой буквы. der Sohn — без -e: Ihr Sohn.',
      },
      {
        type: 'gap',
        prompt: 'Wir wohnen in Köln. ___ Kinder wohnen auch in Köln. (наши)',
        answers: ['Unsere'],
        explanationRu: 'Kinder — множественное число → unsere. В начале предложения — с большой буквы.',
      },
      {
        type: 'order',
        words: ['Sind', 'Sie', 'verheiratet,', 'Frau', 'Lange?'],
        translationRu: 'Вы замужем, госпожа Ланге?',
        explanationRu: 'Вопрос «да/нет»: глагол sind стоит на первом месте, потом Sie. Обращение — в конце через запятую.',
      },
      {
        type: 'transform',
        instructionRu: 'Сделайте из утверждения вопрос «да/нет».',
        prompt: 'Du hast Kinder.',
        answers: ['Hast du Kinder?'],
        explanationRu: 'В вопросе «да/нет» глагол (hast) ставим на первое место: Hast du Kinder?',
      },
      {
        type: 'choice',
        audio: 'Das ist meine Schwester.',
        prompt: 'Кто это?',
        options: ['мой брат', 'моя сестра', 'моя мама'],
        answer: 1,
        explanationRu: 'Schwester — сестра. Брат — Bruder, мама — Mutter.',
      },
      {
        type: 'choice',
        audio: 'Hast du Geschwister?',
        prompt: 'Какой вопрос вы слышите?',
        options: ['Hast du Kinder?', 'Hast du Geschwister?', 'Bist du verheiratet?'],
        answer: 1,
        explanationRu: 'Звучит «гэ-ШВИС-та» — Geschwister (братья и сёстры).',
      },
      {
        type: 'gap',
        audio: 'Mein Sohn heißt Max. Er ist zwölf.',
        prompt: 'Сколько лет сыну? Напишите цифрами: ___',
        answers: ['12'],
        explanationRu: 'zwölf = 12. Сыну (Sohn) Максу двенадцать лет.',
      },
    ],
  },
  vocab: [
    { de: 'Familie', article: 'die', plural: '-n', pos: 'noun', ru: 'семья', example: 'Meine Familie wohnt in Moskau.', exampleRu: 'Моя семья живёт в Москве.', pronRu: 'ди фа-МИ-ли-э' },
    { de: 'Eltern', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'родители', example: 'Meine Eltern wohnen in Kiel.', exampleRu: 'Мои родители живут в Киле.', pronRu: 'ди ЭЛЬ-тэрн' },
    { de: 'Vater', article: 'der', plural: '-¨', pos: 'noun', ru: 'отец', example: 'Mein Vater heißt Boris.', exampleRu: 'Моего отца зовут Борис.', pronRu: 'дер ФА-та' },
    { de: 'Mutter', article: 'die', plural: '-¨', pos: 'noun', ru: 'мать', example: 'Meine Mutter ist siebzig Jahre alt.', exampleRu: 'Моей маме семьдесят лет.', pronRu: 'ди МУ-та' },
    { de: 'Sohn', article: 'der', plural: '-¨e', pos: 'noun', ru: 'сын', example: 'Unser Sohn wohnt in Berlin.', exampleRu: 'Наш сын живёт в Берлине.', pronRu: 'дер ЗОН' },
    { de: 'Tochter', article: 'die', plural: '-¨', pos: 'noun', ru: 'дочь', example: 'Ihre Tochter heißt Lena.', exampleRu: 'Её дочь зовут Лена.', pronRu: 'ди ТОХ-та' },
    { de: 'Bruder', article: 'der', plural: '-¨', pos: 'noun', ru: 'брат', example: 'Mein Bruder arbeitet in Hamburg.', exampleRu: 'Мой брат работает в Гамбурге.', pronRu: 'дер БРУ-да' },
    { de: 'Schwester', article: 'die', plural: '-n', pos: 'noun', ru: 'сестра', example: 'Meine Schwester ist ledig.', exampleRu: 'Моя сестра не замужем.', pronRu: 'ди ШВЕС-та' },
    { de: 'Geschwister', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'братья и сёстры', example: 'Hast du Geschwister?', exampleRu: 'У тебя есть братья или сёстры?', pronRu: 'ди гэ-ШВИС-та' },
    { de: 'Kind', article: 'das', plural: '-er', pos: 'noun', ru: 'ребёнок', example: 'Das Kind ist drei Jahre alt.', exampleRu: 'Ребёнку три года.', pronRu: 'дас КИНТ' },
    { de: 'Mann', article: 'der', plural: '-¨er', pos: 'noun', ru: 'мужчина; муж', example: 'Ihr Mann kommt aus Polen.', exampleRu: 'Её муж из Польши.', pronRu: 'дер МАН' },
    { de: 'Großvater', article: 'der', plural: '-¨', pos: 'noun', ru: 'дедушка', example: 'Mein Großvater ist achtzig.', exampleRu: 'Моему дедушке восемьдесят.', pronRu: 'дер ГРОС-фа-та' },
    { de: 'Großmutter', article: 'die', plural: '-¨', pos: 'noun', ru: 'бабушка', example: 'Meine Großmutter wohnt in Omsk.', exampleRu: 'Моя бабушка живёт в Омске.', pronRu: 'ди ГРОС-му-та' },
    { de: 'Großeltern', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'бабушка и дедушка', example: 'Meine Großeltern wohnen in Kasachstan.', exampleRu: 'Мои бабушка и дедушка живут в Казахстане.', pronRu: 'ди ГРОС-эль-тэрн' },
    { de: 'verheiratet', pos: 'adj', ru: 'женатый, замужняя', example: 'Sind Sie verheiratet?', exampleRu: 'Вы женаты (замужем)?', pronRu: 'фер-ХАЙ-ра-тэт' },
    { de: 'ledig', pos: 'adj', ru: 'холостой, незамужняя', example: 'Nein, ich bin ledig.', exampleRu: 'Нет, я не женат.', pronRu: 'ЛЕ-дихь' },
    { de: 'geschieden', pos: 'adj', ru: 'разведённый', example: 'Mein Bruder ist geschieden.', exampleRu: 'Мой брат разведён.', pronRu: 'гэ-ШИ:-дэн' },
    { de: 'mein', pos: 'other', ru: 'мой (meine — моя, мои)', example: 'Das ist mein Sohn.', exampleRu: 'Это мой сын.', pronRu: 'МАЙН' },
    { de: 'Foto', article: 'das', plural: '-s', pos: 'noun', ru: 'фотография', example: 'Hier ist ein Foto. Das ist meine Familie.', exampleRu: 'Вот фотография. Это моя семья.', pronRu: 'дас ФО-то' },
    { de: 'zusammen', pos: 'adv', ru: 'вместе', example: 'Wir wohnen zusammen.', exampleRu: 'Мы живём вместе.', pronRu: 'цу-ЗА-мэн' },
  ],
  listening: {
    title: 'Ein Familienfoto',
    kind: 'monolog',
    text: `Hallo! Ich heiße Swetlana. Hier ist ein Foto. Das ist meine Familie. Das ist mein Mann. Er heißt Andrej und ist zweiundsechzig Jahre alt. Und das sind unsere Kinder: unser Sohn Pawel und unsere Tochter Olga. Pawel wohnt in Hamburg. Er ist verheiratet. Olga ist ledig. Sie wohnt in Berlin. Und das ist meine Mutter. Sie ist schon fünfundachtzig! Sie wohnt auch hier in Köln.`,
    questions: [
      { question: 'Wie heißt Swetlanas Mann?', options: ['Pawel', 'Andrej', 'Olga'], answer: 1 },
      { question: 'Wie alt ist Andrej?', options: ['52', '26', '62'], answer: 2 },
      { question: 'Wo wohnt Pawel?', options: ['in Berlin', 'in Köln', 'in Hamburg'], answer: 2 },
      { question: 'Wer ist ledig?', options: ['Olga', 'Pawel', 'Andrej'], answer: 0 },
      { question: 'Wie alt ist die Mutter?', options: ['58', '85', '75'], answer: 1 },
    ],
  },
  writing: {
    taskRu: 'Ваша подруга по переписке Мария спрашивает: «Расскажи о своей семье!» Напишите ей короткое письмо о вашей семье.',
    taskDe: 'Ihre Brieffreundin Maria fragt: „Wie ist deine Familie?“ Schreiben Sie eine kurze E-Mail.',
    points: ['Partner oder Partnerin: Name, Alter', 'Kinder oder Geschwister', 'Wo wohnt Ihre Familie?'],
    minWords: 25,
    usefulPhrases: [
      'Liebe Maria,',
      'Ich bin verheiratet / ledig / geschieden.',
      'Mein Mann heißt … / Meine Frau heißt …',
      'Er / Sie ist … Jahre alt.',
      'Ich habe zwei Kinder / zwei Geschwister.',
      'Meine Eltern wohnen in …',
      'Und du? Hast du Geschwister?',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Соседка, госпожа Беккер, видит у вас фотографию семьи и расспрашивает: кто это, как зовут, сколько лет, где живут.',
    aiRole:
      'Sie sind Frau Becker, eine freundliche Nachbarin (60 Jahre). Sie sehen ein Familienfoto und fragen nach der Familie: Wer ist das? Wie heißt er/sie? Wie alt ist er/sie? Wo wohnt er/sie? Sprechen Sie sehr einfach und langsam, in kurzen Sätzen, nur im Präsens. Benutzen Sie „Sie“ und die Wörter mein, dein, sein, ihr, Ihr. Stellen Sie immer nur eine Frage, auch Ja/Nein-Fragen („Ist das Ihr Sohn?“). Wenn der Lernende nicht weiterweiß, geben Sie ein einfaches Beispiel, z. B. „Sagen Sie: Das ist meine Tochter.“ Wenn er fragt, erzählen Sie kurz von Ihrer Familie (ein Sohn, zwei Enkel).',
    opener: 'Oh, ein Foto! Ist das Ihre Familie?',
    tasksRu: [
      'Покажите и назовите 3 человек на фото: Das ist mein … / meine …',
      'Скажите, как их зовут, сколько им лет и где они живут.',
      'Ответьте, женаты ли вы (замужем ли вы): Ich bin verheiratet / ledig …',
      'Задайте соседке вопрос «да/нет», например: Haben Sie Kinder?',
    ],
    readAloud: ['Das ist meine Familie.', 'Mein Vater heißt Boris.', 'Meine Schwester wohnt in Kiel.', 'Hast du Geschwister?', 'Sind Sie verheiratet?'],
  },
};
