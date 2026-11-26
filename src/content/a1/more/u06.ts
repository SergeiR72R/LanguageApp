import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das ist ___ Kind. (мой)',
      options: ['meine', 'mein', 'deine'],
      answer: 1,
      explanationRu: 'das Kind — das-слово, поэтому без -e: mein Kind.',
    },
    {
      type: 'choice',
      prompt: 'Ist das ___ Familie, Frau Roth? (Ваша)',
      options: ['Ihr', 'Ihre', 'deine'],
      answer: 1,
      explanationRu: 'Вежливое «Ваша» — Ihr- с большой буквы. die Familie — die-слово → Ihre Familie.',
    },
    {
      type: 'choice',
      prompt: 'Tom und ___ Frau wohnen in Wien. (его)',
      options: ['seine', 'ihre', 'sein'],
      answer: 0,
      explanationRu: 'Жена Тома — его → sein-. die Frau — die-слово → seine Frau.',
    },
    {
      type: 'choice',
      prompt: 'Lisa und ___ Mann haben zwei Kinder. (её)',
      options: ['sein', 'ihr', 'ihre'],
      answer: 1,
      explanationRu: 'Муж Лизы — её → ihr-. der Mann — der-слово, без -e → ihr Mann.',
    },
    {
      type: 'choice',
      prompt: '___ du verheiratet?',
      options: ['Hast', 'Bist', 'Ist'],
      answer: 1,
      explanationRu: '«verheiratet sein» — быть женатым. С du: bist. В вопросе «да/нет» глагол стоит первым.',
    },
    {
      type: 'gap',
      prompt: 'Wie heißt ___ Bruder? (твой)',
      answers: ['dein'],
      explanationRu: 'der Bruder — der-слово, без -e: dein Bruder.',
    },
    {
      type: 'gap',
      prompt: 'Max wohnt in Bonn. ___ Eltern wohnen in Kiel. (его)',
      answers: ['Seine'],
      explanationRu: 'Родители Макса — его → sein-. Eltern — множественное число → seine.',
    },
    {
      type: 'gap',
      prompt: 'Lena ist dreißig. ___ Tochter ist fünf. (её)',
      answers: ['Ihre'],
      explanationRu: 'Дочь Лены — её → ihr-. die Tochter — die-слово → ihre. В начале предложения — с большой буквы.',
    },
    {
      type: 'gap',
      prompt: '___ ihr Kinder? – Ja, zwei.',
      answers: ['Habt'],
      hintRu: 'haben',
      explanationRu: 'haben с ihr: ihr habt. В вопросе «да/нет» глагол — первый: Habt ihr Kinder?',
    },
    {
      type: 'choice',
      audio: 'Meine Eltern wohnen in Kiel.',
      prompt: 'Кто живёт в Киле?',
      options: ['мои родители', 'мои бабушка и дедушка', 'мои дети'],
      answer: 0,
      explanationRu: 'Eltern — родители. Бабушка и дедушка — Großeltern, дети — Kinder.',
    },
    {
      type: 'gap',
      audio: 'Tochter',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Tochter'],
      explanationRu: 'Tochter — дочь. ch после o звучит твёрдо, как «х»; -er на конце — как «а»: «ТОХ-та».',
    },
    {
      type: 'gap',
      audio: 'Geschwister',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Geschwister'],
      explanationRu: 'Geschwister — братья и сёстры: ge + schw + ister. sch = «ш».',
    },
    {
      type: 'choice',
      audio: 'Nein, ich bin geschieden.',
      prompt: 'Что говорит человек?',
      options: ['Он женат.', 'Он разведён.', 'Он не женат (холост).'],
      answer: 1,
      explanationRu: 'geschieden — разведён. Женат — verheiratet, холост — ledig.',
    },
    {
      type: 'order',
      words: ['Ist', 'das', 'dein', 'Vater?'],
      translationRu: 'Это твой отец?',
      explanationRu: 'Вопрос «да/нет»: глагол ist стоит на первом месте.',
    },
    {
      type: 'order',
      words: ['Wohnen', 'Ihre', 'Eltern', 'in', 'Berlin?'],
      translationRu: 'Ваши родители живут в Берлине?',
      explanationRu: 'Глагол wohnen — первый, потом «кто» (Ihre Eltern), потом «где».',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте из утверждения вопрос «да/нет».',
      prompt: 'Sie sind verheiratet.',
      answers: ['Sind Sie verheiratet?'],
      explanationRu: 'Глагол sind переходит на первое место: Sind Sie verheiratet?',
    },
    {
      type: 'transform',
      instructionRu: 'Замените «моя» на «наша».',
      prompt: 'Das ist meine Familie.',
      answers: ['Das ist unsere Familie.'],
      explanationRu: 'наш — unser; die Familie — die-слово, поэтому unsere.',
    },
    // Wiederholung
    {
      type: 'gap',
      audio: 'sechsundsiebzig',
      prompt: 'Повторение. Напишите число цифрами: ___',
      answers: ['76'],
      explanationRu: 'sechs-und-siebzig = 6 + 70 = 76. Сначала единицы, потом десятки.',
    },
    {
      type: 'choice',
      prompt: 'Повторение. ___ wohnen Sie? – In Kiel.',
      options: ['Woher', 'Wo', 'Wer'],
      answer: 1,
      explanationRu: 'Ответ «In Kiel» — это место, где живут. Вопрос «где?» — wo.',
    },
    {
      type: 'gap',
      prompt: 'Повторение. Wir ___ in Leipzig.',
      answers: ['arbeiten'],
      hintRu: 'arbeiten',
      explanationRu: 'С wir форма как в словаре: wir arbeiten.',
    },
  ],
  reading: [
    {
      title: 'Eine E-Mail von Thomas',
      textType: 'E-Mail',
      texts: [
        {
          body: `Hallo Igor,

das ist meine Familie! Ich bin verheiratet. Meine Frau heißt Birgit. Sie ist 48 Jahre alt und arbeitet in Köln. Wir haben zwei Kinder. Unsere Tochter Marie ist 19. Sie wohnt in München. Unser Sohn Lukas ist 15. Er wohnt hier in Köln.

Und deine Familie? Hast du Geschwister?

Viele Grüße
Thomas`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Thomas ist verheiratet.', answer: true, explanationRu: '«Ich bin verheiratet. Meine Frau heißt Birgit.»' },
            { kind: 'tf', statement: 'Birgit ist 48 Jahre alt.', answer: true, explanationRu: '«Sie ist 48 Jahre alt».' },
            { kind: 'tf', statement: 'Thomas hat drei Kinder.', answer: false, explanationRu: '«Wir haben zwei Kinder» — у них двое детей.' },
            { kind: 'tf', statement: 'Marie wohnt in Köln.', answer: false, explanationRu: 'Дочь Мари живёт в Мюнхене. В Кёльне живёт сын Лукас.' },
            { kind: 'tf', statement: 'Lukas ist 15 Jahre alt.', answer: true, explanationRu: '«Unser Sohn Lukas ist 15».' },
          ],
        },
      ],
    },
    {
      title: 'Kurze Nachrichten',
      textType: 'SMS und Notiz',
      texts: [
        { label: 'a', heading: 'SMS', body: 'Hallo Jana! Meine Schwester und ihr Mann sind jetzt in Berlin. Ihre Adresse ist Parkstraße 8. Kommst du heute? Liebe Grüße, Katja' },
        { label: 'b', heading: 'Notiz', body: 'Paul, deine Oma hat heute Geburtstag! Sie ist jetzt 80. Ihre Telefonnummer ist 0761 43 22 19. Mama' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Nachrichten. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте сообщения. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wo wohnen Katjas Schwester und ihr Mann?', options: ['Berlin, Parkstraße 8', 'Hamburg, Parkstraße 8', 'Berlin, Parkstraße 18'], answer: 0, explanationRu: '«…sind jetzt in Berlin. Ihre Adresse ist Parkstraße 8».' },
            { kind: 'mc', question: 'Wer hat Geburtstag?', options: ['Pauls Mama', 'Pauls Oma', 'Paul'], answer: 1, explanationRu: '«deine Oma hat heute Geburtstag» — день рождения у бабушки Пауля.' },
            { kind: 'mc', question: 'Wie alt ist die Oma?', options: ['18', '70', '80'], answer: 2, explanationRu: '«Sie ist jetzt 80».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Wer ist das auf dem Foto?',
      kind: 'dialog',
      speakers: { A: 'Julia', B: 'Kemal' },
      situation: 'Julia zeigt Kemal ein Foto.',
      text: `A: Hier ist ein Foto. Das ist meine Familie.
B: Oh, schön! Ist das dein Vater?
A: Nein, das ist mein Bruder Felix. Er ist fünfunddreißig.
B: Und die Frau? Ist das seine Frau?
A: Ja, das ist Sandra. Und das sind ihre Kinder, Ben und Emma.
B: Und wo wohnen sie?
A: In Dresden.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Auf dem Foto ist Julias Vater.', answer: false, explanationRu: '«Ist das dein Vater?» — «Nein, das ist mein Bruder Felix».' },
            { kind: 'tf', statement: 'Felix ist 35 Jahre alt.', answer: true, explanationRu: 'fünf-und-dreißig = 35.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie heißen die Kinder?', options: ['Felix und Sandra', 'Ben und Emma', 'Ben und Anna'], answer: 1, explanationRu: '«Und das sind ihre Kinder, Ben und Emma».' },
            { kind: 'mc', question: 'Wo wohnt Felix?', options: ['in Dresden', 'in Dortmund', 'in Berlin'], answer: 0, explanationRu: '«Und wo wohnen sie?» — «In Dresden».' },
          ],
        },
      ],
    },
    {
      title: 'Herr Schulz erzählt',
      kind: 'monolog',
      situation: 'Herr Schulz erzählt von seiner Familie.',
      text: 'Ich heiße Günter Schulz. Ich bin vierundsiebzig Jahre alt und wohne in Kassel. Meine Frau heißt Ingrid. Wir haben drei Kinder und fünf Enkel. Unsere Tochter wohnt auch in Kassel. Unsere Söhne wohnen in Frankfurt und in Köln.',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie alt ist Herr Schulz?', options: ['47', '74', '64'], answer: 1, explanationRu: 'vier-und-siebzig = 4 + 70 = 74.' },
            { kind: 'mc', question: 'Wie viele Kinder hat er?', options: ['zwei', 'drei', 'fünf'], answer: 1, explanationRu: '«Wir haben drei Kinder und fünf Enkel» — пять — это внуки.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [{ kind: 'tf', statement: 'Die Tochter wohnt in Frankfurt.', answer: false, explanationRu: 'Дочь живёт в Касселе. Во Франкфурте и Кёльне живут сыновья.' }],
        },
      ],
    },
  ],
};
