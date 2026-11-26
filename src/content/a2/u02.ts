import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-02',
  level: 'A2',
  order: 2,
  title: 'Kindheit und Erinnerungen',
  titleRu: 'Детство и воспоминания',
  goalsRu: [
    'Рассказывать о своём детстве, школе и каникулах',
    'Употреблять war, hatte и модальные глаголы в претерите',
    'Говорить, что раньше было нужно, можно или нельзя',
    'Понимать воспоминания других людей на слух и при чтении',
  ],
  grammar: {
    topic: 'Präteritum: sein, haben und Modalverben',
    topicRu: 'Претерит: war, hatte и модальные глаголы',
    explanationRu: `Когда немцы рассказывают о прошлом, они обычно используют перфект: «Ich habe gespielt». Но у некоторых очень частых глаголов в разговоре почти всегда используют **претерит** (Präteritum) — простое прошедшее время: одно слово вместо двух.

Это глаголы:

- **sein** → **war**: Als Kind **war** ich oft krank.
- **haben** → **hatte**: Wir **hatten** einen Hund.
- **модальные глаголы**: können → **konnte**, müssen → **musste**, wollen → **wollte**, dürfen → **durfte**, sollen → **sollte**.

«Ich bin krank gewesen» или «Ich habe einen Hund gehabt» — тоже правильно, но «Ich war», «Ich hatte» звучит естественнее. А у модальных глаголов перфект почти не используют: не «Ich habe schwimmen gekonnt», а только **Ich konnte schwimmen**.

**Окончания** у всех этих глаголов одинаковые (см. таблицу). Важно: у **ich** и **er/sie/es** окончания нет, форма одна и та же: ich war — er war, ich musste — sie musste.

**Умлаут исчезает!** können → k**o**nnte, müssen → m**u**sste, dürfen → d**u**rfte. Форма «könnte» с точками — это совсем другое («мог бы»), её мы изучим позже.

**Порядок слов** — как в настоящем времени: модальный глагол на 2-м месте, инфинитив в конце:

- Als Kind **musste** ich jeden Tag Milch **trinken**.
- Wir **durften** nicht lange draußen **spielen**.

**Полезная фраза:** **es gab** — прошедшее время от es gibt («есть, имеется»): Früher **gab es** kein Internet. — Раньше не было интернета.

**Типичные ошибки русскоговорящих:**

- «ich wart», «er warte» → правильно: ich **war**, er **war**;
- «Ich könnte nicht kommen», когда хотят сказать «я не смог прийти» → правильно: Ich **konnte** nicht kommen;
- путают dürfen и müssen с отрицанием: «Ich **durfte nicht** fernsehen» — мне **нельзя было** смотреть телевизор; «Ich **musste nicht** arbeiten» — мне **не нужно было** работать.`,
    table: [
      ['', 'sein', 'haben', 'können', 'müssen', 'dürfen'],
      ['ich', 'war', 'hatte', 'konnte', 'musste', 'durfte'],
      ['du', 'warst', 'hattest', 'konntest', 'musstest', 'durftest'],
      ['er/sie/es', 'war', 'hatte', 'konnte', 'musste', 'durfte'],
      ['wir', 'waren', 'hatten', 'konnten', 'mussten', 'durften'],
      ['ihr', 'wart', 'hattet', 'konntet', 'musstet', 'durftet'],
      ['sie/Sie', 'waren', 'hatten', 'konnten', 'mussten', 'durften'],
    ],
    examples: [
      { de: 'Als Kind war ich oft bei meiner Oma.', ru: 'В детстве я часто бывал у бабушки.' },
      { de: 'Wir hatten keinen Fernseher.', ru: 'У нас не было телевизора.' },
      { de: 'Ich konnte mit fünf Jahren lesen.', ru: 'Я умел читать в пять лет.' },
      { de: 'Wir mussten jeden Tag zu Fuß zur Schule gehen.', ru: 'Нам каждый день приходилось ходить в школу пешком.' },
      { de: 'Ich durfte nicht lange draußen spielen.', ru: 'Мне не разрешали долго играть на улице.' },
      { de: 'Mein Bruder wollte immer Pilot werden.', ru: 'Мой брат всегда хотел стать лётчиком.' },
      { de: 'Früher gab es im Dorf kein Kino.', ru: 'Раньше в деревне не было кинотеатра.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Als Kind ___ ich sehr schüchtern.',
        options: ['war', 'hatte', 'bin', 'warst'],
        answer: 0,
        explanationRu: 'schüchtern sein — «быть застенчивым». Претерит от sein для ich — war (без окончания).',
      },
      {
        type: 'choice',
        prompt: 'Wir ___ einen Hund und zwei Katzen.',
        options: ['waren', 'hatten', 'hattet', 'hatte'],
        answer: 1,
        explanationRu: 'У нас были животные → haben. Для wir — hatten.',
      },
      {
        type: 'choice',
        prompt: 'Ich ___ nicht ins Kino gehen, ich musste lernen.',
        options: ['durfte', 'dürfte', 'darf', 'durften'],
        answer: 0,
        explanationRu: 'Речь о прошлом (musste) → претерит от dürfen: ich durfte — без умлаута и без окончания.',
      },
      {
        type: 'choice',
        prompt: 'Mein Vater ___ sehr gut singen.',
        options: ['konnte', 'könnte', 'konntest', 'gekonnt'],
        answer: 0,
        explanationRu: 'Отец умел петь → претерит от können: er konnte. «könnte» с умлаутом значит «мог бы».',
      },
      {
        type: 'choice',
        audio: 'Wir mussten früh aufstehen.',
        prompt: 'Что вы слышите?',
        options: ['Wir mussten früh aufstehen.', 'Wir müssen früh aufstehen.', 'Wir wollten früh aufstehen.'],
        answer: 0,
        explanationRu: 'Звучит mussten (с «у», без умлаута) — это прошедшее время: «нам приходилось рано вставать».',
      },
      {
        type: 'gap',
        prompt: 'Du ___ damals sehr frech!',
        answers: ['warst'],
        hintRu: 'sein',
        explanationRu: 'Претерит от sein для du — warst.',
      },
      {
        type: 'gap',
        prompt: 'Meine Schwester ___ immer Lehrerin werden.',
        answers: ['wollte'],
        hintRu: 'wollen',
        explanationRu: 'wollen → wollte. У sie (она) окончания нет: sie wollte.',
      },
      {
        type: 'gap',
        prompt: 'Wir ___ in den Ferien bis zehn Uhr schlafen.',
        answers: ['durften'],
        hintRu: 'dürfen',
        explanationRu: 'dürfen → durften (wir). Умлаут исчезает: dürfen — durften.',
      },
      {
        type: 'gap',
        audio: 'In unserer Klasse waren dreißig Kinder.',
        prompt: 'Сколько детей было в классе? Напишите число цифрами: ___',
        answers: ['30'],
        explanationRu: 'dreißig = 30. «In unserer Klasse waren dreißig Kinder» — в классе было 30 детей.',
      },
      {
        type: 'order',
        words: ['Früher', 'gab', 'es', 'kein', 'Handy.'],
        translationRu: 'Раньше не было мобильного телефона.',
        explanationRu: 'Früher на 1-м месте, глагол gab — на 2-м, потом es. es gab — прошедшее время от es gibt.',
      },
      {
        type: 'transform',
        instructionRu: 'Поставьте в претерит.',
        prompt: 'Ich muss im Garten helfen.',
        answers: ['Ich musste im Garten helfen.'],
        explanationRu: 'müssen → musste: умлаут исчезает, у ich нет окончания. Инфинитив helfen остаётся в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Поставьте вопрос в претерит.',
        prompt: 'Hast du einen Hund?',
        answers: ['Hattest du einen Hund?'],
        explanationRu: 'haben → hatte, для du — hattest. Глагол остаётся на 1-м месте, потому что это вопрос без W-слова.',
      },
    ],
  },
  vocab: [
    { de: 'Kindheit', article: 'die', plural: '–', pos: 'noun', ru: 'детство', example: 'In meiner Kindheit war ich oft krank.', exampleRu: 'В детстве я часто болел.', pronRu: 'ди КИНТ-хайт' },
    { de: 'Erinnerung', article: 'die', plural: '-en', pos: 'noun', forms: 'an + Akk', ru: 'воспоминание; память', example: 'Ich habe viele Erinnerungen an meine Schulzeit.', exampleRu: 'У меня много воспоминаний о школьных годах.', pronRu: 'ди эр-И-нэ-рунг' },
    { de: 'Kindergarten', article: 'der', plural: '-¨', pos: 'noun', ru: 'детский сад', example: 'Im Kindergarten habe ich viel gespielt.', exampleRu: 'В детском саду я много играл.', pronRu: 'дер КИН-да-гар-тэн' },
    { de: 'Grundschule', article: 'die', plural: '-n', pos: 'noun', ru: 'начальная школа', example: 'Die Grundschule war nicht weit von unserem Haus.', exampleRu: 'Начальная школа была недалеко от нашего дома.', pronRu: 'ди ГРУНТ-шу-ле' },
    { de: 'Klasse', article: 'die', plural: '-n', pos: 'noun', ru: 'класс', example: 'In meiner Klasse waren 35 Kinder.', exampleRu: 'В моём классе было 35 детей.', pronRu: 'ди КЛА-сэ' },
    { de: 'Fach', article: 'das', plural: '-¨er', pos: 'noun', ru: 'школьный предмет', example: 'Mein Lieblingsfach war Mathe.', exampleRu: 'Моим любимым предметом была математика.', pronRu: 'дас ФАХ' },
    { de: 'Note', article: 'die', plural: '-n', pos: 'noun', ru: 'оценка, отметка', example: 'Welche Note hast du in Mathe bekommen?', exampleRu: 'Какую оценку ты получил по математике?', pronRu: 'ди НО-тэ' },
    { de: 'streng', pos: 'adj', ru: 'строгий', example: 'Unser Lehrer war sehr streng.', exampleRu: 'Наш учитель был очень строгим.', pronRu: 'ШТРЭНГ' },
    { de: 'frech', pos: 'adj', ru: 'дерзкий, озорной', example: 'Als Kind war mein Bruder sehr frech.', exampleRu: 'В детстве мой брат был очень озорным.', pronRu: 'ФРЭХЬ' },
    { de: 'schüchtern', pos: 'adj', ru: 'застенчивый, робкий', example: 'Meine Tochter war früher sehr schüchtern.', exampleRu: 'Моя дочь раньше была очень застенчивой.', pronRu: 'ШЮХЬ-тэрн' },
    { de: 'brav', pos: 'adj', ru: 'послушный (о ребёнке)', example: 'Die Kinder waren heute sehr brav.', exampleRu: 'Дети сегодня были очень послушными.', pronRu: 'БРА:Ф' },
    { de: 'Spielzeug', article: 'das', plural: '-e', pos: 'noun', ru: 'игрушка, игрушки', example: 'Wir hatten nicht viel Spielzeug.', exampleRu: 'У нас было мало игрушек.', pronRu: 'дас ШПИ:ЛЬ-цойк' },
    { de: 'Hof', article: 'der', plural: '-¨e', pos: 'noun', ru: 'двор', example: 'Nach der Schule haben wir im Hof Fußball gespielt.', exampleRu: 'После школы мы играли во дворе в футбол.', pronRu: 'дер ХО:Ф' },
    { de: 'klettern', forms: 'klettert, ist geklettert', pos: 'verb', ru: 'лазить, карабкаться', example: 'Wir sind oft auf Bäume geklettert.', exampleRu: 'Мы часто лазили по деревьям.', pronRu: 'КЛЭ-тэрн' },
    { de: 'erlauben', forms: 'erlaubt, hat erlaubt', pos: 'verb', ru: 'разрешать', example: 'Meine Eltern haben mir das nicht erlaubt.', exampleRu: 'Родители мне этого не разрешали.', pronRu: 'эр-ЛАУ-бэн' },
    { de: 'verbieten', forms: 'verbietet, hat verboten', pos: 'verb', ru: 'запрещать', example: 'Mein Vater hat mir das Rauchen verboten.', exampleRu: 'Отец запретил мне курить.', pronRu: 'фэр-БИ:-тэн' },
    { de: 'Ferien', article: 'die', plural: 'только мн. ч.', pos: 'noun', ru: 'каникулы', example: 'In den Ferien war ich immer bei meiner Oma.', exampleRu: 'На каникулах я всегда был у бабушки.', pronRu: 'ди ФЕ:-ри-эн' },
    { de: 'Dorf', article: 'das', plural: '-¨er', pos: 'noun', ru: 'деревня, село', example: 'Ich bin in einem Dorf aufgewachsen.', exampleRu: 'Я вырос в деревне.', pronRu: 'дас ДОРФ' },
    { de: 'früher', pos: 'adv', ru: 'раньше, в прошлом', example: 'Früher war hier ein Kino.', exampleRu: 'Раньше здесь был кинотеатр.', pronRu: 'ФРЮ-а' },
    { de: 'Angst haben', forms: 'vor + Dat; hatte Angst', pos: 'phrase', ru: 'бояться (чего-л.)', example: 'Als Kind hatte ich Angst vor Hunden.', exampleRu: 'В детстве я боялся собак.', pronRu: 'АНГСТ ХА-бэн' },
  ],
  listening: {
    title: 'Opa, wie war deine Kindheit?',
    kind: 'dialog',
    text: `A: Opa, wie war deine Kindheit?
B: Oh, das ist lange her! Ich bin in einem Dorf an der Wolga aufgewachsen. Wir waren sechs Kinder.
A: Sechs Kinder! War euer Haus groß?
B: Nein, unser Haus war klein. Ich musste mit zwei Brüdern in einem Zimmer schlafen.
A: Und was habt ihr gespielt?
B: Wir hatten nicht viel Spielzeug. Wir waren immer draußen, im Hof oder am Fluss. Im Sommer konnten wir jeden Tag schwimmen.
A: Und wie war die Schule?
B: Die Schule war im Nachbardorf. Wir mussten fünf Kilometer zu Fuß gehen. Unsere Lehrerin war sehr streng.
A: Durftest du fernsehen?
B: Fernsehen? Es gab im Dorf nur einen Fernseher, und der war beim Bürgermeister!`,
    questions: [
      { question: 'Wo ist der Opa aufgewachsen?', options: ['In einer Stadt an der Wolga', 'In einem Dorf an der Wolga', 'In einem Dorf in Deutschland'], answer: 1 },
      { question: 'Wie viele Kinder waren in der Familie?', options: ['Zwei', 'Drei', 'Sechs'], answer: 2 },
      { question: 'Was konnten die Kinder im Sommer machen?', options: ['Jeden Tag schwimmen', 'Jeden Tag fernsehen', 'Mit dem Bus in die Stadt fahren'], answer: 0 },
      { question: 'Wie sind die Kinder zur Schule gekommen?', options: ['Mit dem Bus', 'Zu Fuß', 'Mit dem Fahrrad'], answer: 1 },
      { question: 'Wo war der Fernseher?', options: ['Bei der Familie zu Hause', 'In der Schule', 'Beim Bürgermeister'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'На форуме «Deutsch lernen 50 plus» один участник спрашивает: «Какое у вас было детство?» Напишите короткий пост о своём детстве. Используйте war, hatte, musste, durfte, konnte.',
    taskDe: 'Im Forum „Deutsch lernen 50 plus“ fragt jemand: „Wie war Ihre Kindheit?“ Schreiben Sie einen Beitrag.',
    points: ['Wo haben Sie als Kind gewohnt?', 'Was mussten oder durften Sie (nicht) machen?', 'Was haben Sie gern gespielt?'],
    minWords: 50,
    usefulPhrases: [
      'Als Kind habe ich in … gewohnt.',
      'Wir hatten …',
      'Ich musste jeden Tag …',
      'Ich durfte (nicht) …',
      'Ich wollte immer … werden.',
      'Früher gab es …',
      'Am liebsten habe ich … gespielt.',
    ],
  },
  speaking: {
    scenarioRu: 'Вы пьёте кофе с соседом-немцем. Он расспрашивает вас о детстве и сам немного рассказывает о своём.',
    aiRole:
      'Sie sind Paul, ein netter Nachbar (65 Jahre) aus Deutschland. Sie trinken mit der Person Kaffee und sprechen über die Kindheit. Sie erzählen auch kurz von Ihrer Kindheit in einem Dorf in Bayern. Sprechen Sie langsam, in kurzen, einfachen Sätzen (Niveau A2). Benutzen Sie oft war, hatte, konnte, musste, durfte. Stellen Sie immer nur eine Frage. Wenn die Person ein Wort nicht weiß, helfen Sie freundlich.',
    opener: 'Sagen Sie mal, wo haben Sie als Kind gewohnt?',
    tasksRu: [
      'Расскажите, где вы жили в детстве и какая у вас была семья.',
      'Скажите, что вам приходилось делать (musste) и что вам разрешали (durfte).',
      'Расскажите о школе: учителя, любимый предмет, оценки.',
      'Спросите соседа, кем он хотел стать в детстве.',
    ],
    readAloud: [
      'Als Kind war ich oft krank.',
      'Wir hatten keinen Fernseher.',
      'Ich musste früh aufstehen.',
      'Im Sommer durften wir lange spielen.',
      'Mein Lieblingsfach war Mathe.',
    ],
  },
};
