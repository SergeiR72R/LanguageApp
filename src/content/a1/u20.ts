import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-20',
  level: 'A1',
  order: 20,
  title: 'Prüfungstraining Start Deutsch 1',
  titleRu: 'Подготовка к экзамену Start Deutsch 1',
  goalsRu: [
    'Заполнять простую анкету: имя, фамилия, адрес, дата рождения',
    'Понимать вывески, короткие записки, объявления и сообщения на автоответчике',
    'Вежливо просить о помощи и задавать вопросы',
    'Уверенно строить утверждение, W-вопрос, вопрос «да/нет», рамку и императив',
  ],
  grammar: {
    topic: 'Satzbau: Aussage, W-Frage, Ja/Nein-Frage, Satzklammer, Imperativ',
    topicRu: 'Порядок слов: повторение',
    explanationRu: `**Экзамен Start Deutsch 1** состоит из 4 частей: **Hören** (короткие диалоги, объявления, сообщения на автоответчике), **Lesen** (записки, объявления, вывески), **Schreiben** (заполнить анкету и написать короткое сообщение) и **Sprechen** (рассказать о себе, задавать вопросы, просить). Во всех частях важен **порядок слов**. Повторим его.

**1. Утверждение (Aussage):** глагол всегда на **2-м месте**. На 1-м месте — подлежащее или другое слово.
- Ich **wohne** in Leipzig.
- Morgen **habe** ich eine Prüfung.

**2. W-вопрос:** W-слово (wer, was, wo, woher, wann, wie, wie viel) + глагол + подлежащее.
- Wo **wohnen** Sie?

**3. Вопрос «да/нет»:** глагол на **1-м месте**.
- **Haben** Sie Kinder? – Ja. / Nein.

**4. Рамка (Satzklammer):** у модальных и отделяемых глаголов и в перфекте вторая часть уходит **в конец**.
- Ich **kann** heute nicht **kommen**.
- Der Kurs **fängt** um neun Uhr **an**.
- Ich **habe** das Formular **ausgefüllt**.

**5. Императив (просьба):** глагол на 1-м месте.
- **Füllen** Sie bitte das Formular **aus**! (Sie)
- **Ruf** mich bitte **an**! (du)

**Как вежливо просить:**
- **Können Sie** bitte langsam **sprechen**?
- **Kannst du** mir bitte **helfen**?
- Ich **möchte** ein Formular, bitte.

Ответы: «Ja, gern.», «Natürlich!», «Tut mir leid, das geht nicht.»

**Типичные ошибки:** «Morgen ich habe …» (глагол должен быть на 2-м месте!), забытая частица в конце (an, aus), «du» вместо «Sie» с незнакомыми людьми.`,
    table: [
      ['Тип предложения', 'Схема', 'Пример'],
      ['Утверждение', '… + ГЛАГОЛ (2) + …', 'Ich heiße Olga.'],
      ['W-вопрос', 'W-слово + ГЛАГОЛ + …?', 'Wo wohnen Sie?'],
      ['Вопрос «да/нет»', 'ГЛАГОЛ + подлежащее + …?', 'Haben Sie Zeit?'],
      ['Рамка', 'ГЛАГОЛ (2) … вторая часть в конце', 'Ich kann heute nicht kommen.'],
      ['Императив (Sie)', 'ГЛАГОЛ + Sie + …!', 'Füllen Sie bitte das Formular aus!'],
      ['Императив (du)', 'ГЛАГОЛ (без -st) + …!', 'Ruf mich bitte an!'],
    ],
    examples: [
      { de: 'Wie ist Ihr Familienname? – Smirnow.', ru: 'Какая у вас фамилия? – Смирнов.' },
      { de: 'Haben Sie eine Telefonnummer? – Ja, natürlich.', ru: 'У вас есть номер телефона? – Да, конечно.' },
      { de: 'Ich kann morgen leider nicht kommen.', ru: 'К сожалению, завтра я не могу прийти.' },
      { de: 'Füllen Sie bitte das Formular aus!', ru: 'Заполните, пожалуйста, анкету!' },
      { de: 'Können Sie das bitte wiederholen?', ru: 'Не могли бы вы это повторить?' },
      { de: 'Unterschreiben Sie bitte hier unten.', ru: 'Подпишите, пожалуйста, здесь внизу.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Welcher Satz ist eine Ja/Nein-Frage?',
        options: ['Wohnen Sie in Bonn?', 'Wo wohnen Sie?', 'Sie wohnen in Bonn.'],
        answer: 0,
        explanationRu: 'В вопросе «да/нет» глагол стоит на 1-м месте: Wohnen Sie …? Второй вариант — W-вопрос, третий — утверждение.',
      },
      {
        type: 'choice',
        prompt: '___ Sie bitte das Formular aus!',
        options: ['Füllen', 'Füllst', 'Ausfüllen', 'Füll'],
        answer: 0,
        explanationRu: 'Императив с Sie: глагол в форме инфинитива на 1-м месте (Füllen Sie …), а приставка aus — в конце.',
      },
      {
        type: 'gap',
        prompt: '___ wohnen Sie? – In Leipzig.',
        answers: ['Wo'],
        explanationRu: 'Ответ — место (in Leipzig), значит, вопрос «где?» — Wo.',
      },
      {
        type: 'gap',
        prompt: '___ heißen Sie? – Ich heiße Pawel Smirnow.',
        answers: ['Wie'],
        explanationRu: 'Имя спрашивают так: Wie heißen Sie? (буквально «Как вас зовут?»). Не «Was»!',
      },
      {
        type: 'gap',
        prompt: 'Ich habe das Formular schon ___.',
        answers: ['ausgefüllt'],
        hintRu: 'ausfüllen',
        explanationRu: 'Перфект — это рамка: habe на 2-м месте, Partizip II в конце. У отделяемого глагола ge- стоит в середине: aus-ge-füllt.',
      },
      {
        type: 'transform',
        instructionRu: 'Сделайте вежливую просьбу (императив с Sie и bitte).',
        prompt: 'Sie sprechen langsam.',
        answers: [
          'Sprechen Sie bitte langsam!',
          'Sprechen Sie bitte langsam.',
          'Bitte sprechen Sie langsam!',
          'Bitte sprechen Sie langsam.',
          'Sprechen Sie langsam, bitte!',
          'Sprechen Sie langsam, bitte.',
        ],
        explanationRu: 'Императив с Sie: глагол на 1-е место, потом Sie. bitte делает просьбу вежливой.',
      },
      {
        type: 'transform',
        instructionRu: 'Сделайте из утверждения вопрос «да/нет».',
        prompt: 'Sie haben eine Telefonnummer.',
        answers: ['Haben Sie eine Telefonnummer?'],
        explanationRu: 'В вопросе «да/нет» глагол переходит на 1-е место: Haben Sie …?',
      },
      {
        type: 'order',
        words: ['Können', 'Sie', 'mir', 'bitte', 'helfen?'],
        translationRu: 'Не могли бы вы мне помочь?',
        explanationRu: 'Вежливая просьба — вопрос «да/нет»: модальный глагол können на 1-м месте, инфинитив helfen в конце.',
      },
      {
        type: 'order',
        words: ['Morgen', 'rufe', 'ich', 'Sie', 'an.'],
        translationRu: 'Завтра я вам позвоню.',
        explanationRu: 'Morgen на 1-м месте, глагол rufe — на 2-м, потом подлежащее ich. Приставка an уходит в конец.',
      },
      {
        type: 'choice',
        audio: 'Bitte buchstabieren Sie Ihren Familiennamen.',
        prompt: 'Что вас просят сделать?',
        options: ['Назвать фамилию по буквам', 'Написать адрес', 'Подписать анкету'],
        answer: 0,
        explanationRu: 'buchstabieren — называть по буквам, Familienname — фамилия.',
      },
      {
        type: 'gap',
        audio: 'Meine Postleitzahl ist: null, vier, eins, null, neun.',
        prompt: 'Напишите почтовый индекс цифрами: ___',
        answers: ['04109'],
        explanationRu: 'Индекс диктуют по одной цифре: null (0), vier (4), eins (1), null (0), neun (9) → 04109.',
      },
      {
        type: 'gap',
        audio: 'Die Prüfung beginnt um neun Uhr.',
        prompt: 'Во сколько начинается экзамен? Напишите цифрами: ___ Uhr',
        answers: ['9', '09', '9.00', '9:00', '09:00'],
        explanationRu: '«um neun Uhr» — в девять часов.',
      },
    ],
  },
  vocab: [
    { de: 'Formular', article: 'das', plural: '-e', pos: 'noun', ru: 'анкета, бланк', example: 'Bitte füllen Sie das Formular aus.', exampleRu: 'Пожалуйста, заполните анкету.', pronRu: 'дас фор-му-ЛА:Р' },
    { de: 'ausfüllen', forms: 'füllt aus, hat ausgefüllt', pos: 'verb', ru: 'заполнять (анкету)', example: 'Ich fülle das Formular aus.', exampleRu: 'Я заполняю анкету.', pronRu: 'АУС-фю-лен' },
    { de: 'Geschlecht', article: 'das', plural: '-er', pos: 'noun', ru: 'пол (мужской / женский) — графа в анкете', example: 'Geschlecht: männlich oder weiblich?', exampleRu: 'Пол: мужской или женский?', pronRu: 'дас ге-ШЛЕХЬТ' },
    { de: 'Bitte', article: 'die', plural: '-n', pos: 'noun', ru: 'просьба', example: 'Ich habe eine Bitte.', exampleRu: 'У меня есть просьба.', pronRu: 'ди БИ-тэ' },
    { de: 'Geburtsdatum', article: 'das', plural: 'die Geburtsdaten', pos: 'noun', ru: 'дата рождения', example: 'Schreiben Sie hier Ihr Geburtsdatum.', exampleRu: 'Напишите здесь вашу дату рождения.', pronRu: 'дас ге-БУРТС-да-тум' },
    { de: 'Wohnort', article: 'der', plural: '-e', pos: 'noun', ru: 'место жительства', example: 'Mein Wohnort ist Leipzig.', exampleRu: 'Я живу в Лейпциге (моё место жительства — Лейпциг).', pronRu: 'дер ВО:Н-орт' },
    { de: 'Kugelschreiber', article: 'der', plural: '-', pos: 'noun', ru: 'шариковая ручка (коротко: der Kuli)', example: 'Haben Sie einen Kugelschreiber?', exampleRu: 'У вас есть шариковая ручка?', pronRu: 'дер КУ:-гэль-шрай-ба' },
    { de: 'Unterschrift', article: 'die', plural: '-en', pos: 'noun', ru: 'подпись', example: 'Hier fehlt noch Ihre Unterschrift.', exampleRu: 'Здесь ещё не хватает вашей подписи.', pronRu: 'ди УН-та-шрифт' },
    { de: 'unterschreiben', forms: 'unterschreibt, hat unterschrieben', pos: 'verb', ru: 'подписывать', example: 'Unterschreiben Sie bitte hier.', exampleRu: 'Подпишите, пожалуйста, здесь.', pronRu: 'ун-та-ШРАЙ-бэн' },
    { de: 'ankreuzen', forms: 'kreuzt an, hat angekreuzt', pos: 'verb', ru: 'отмечать крестиком', example: 'Kreuzen Sie an: ja oder nein.', exampleRu: 'Отметьте крестиком: да или нет.', pronRu: 'АН-крой-цэн' },
    { de: 'Familienstand', article: 'der', plural: '–', pos: 'noun', ru: 'семейное положение', example: 'Familienstand? – Verheiratet.', exampleRu: 'Семейное положение? – Женат.', pronRu: 'дер фа-МИ:-ли-эн-штант' },
    { de: 'Öffnungszeit', article: 'die', plural: '-en', pos: 'noun', ru: 'время работы (обычно мн. ч.: Öffnungszeiten)', example: 'Die Öffnungszeiten stehen an der Tür.', exampleRu: 'Часы работы написаны на двери.', pronRu: 'ди ЁФ-нунгс-цайт' },
    { de: 'Schild', article: 'das', plural: '-er', pos: 'noun', ru: 'табличка, вывеска, знак', example: 'Was steht auf dem Schild?', exampleRu: 'Что написано на табличке?', pronRu: 'дас ШИЛЬТ' },
    { de: 'geöffnet', pos: 'adj', ru: 'открыто', example: 'Die Apotheke ist bis 20 Uhr geöffnet.', exampleRu: 'Аптека открыта до 20 часов.', pronRu: 'ге-ЁФ-нэт' },
    { de: 'geschlossen', pos: 'adj', ru: 'закрыто', example: 'Am Sonntag ist die Bank geschlossen.', exampleRu: 'В воскресенье банк закрыт.', pronRu: 'ге-ШЛО-сэн' },
    { de: 'Ausgang', article: 'der', plural: '-¨e', pos: 'noun', ru: 'выход', example: 'Entschuldigung, wo ist der Ausgang?', exampleRu: 'Извините, где выход?', pronRu: 'дер АУС-ганг' },
    { de: 'Nachricht', article: 'die', plural: '-en', pos: 'noun', ru: 'сообщение', example: 'Ich schreibe dir eine Nachricht.', exampleRu: 'Я напишу тебе сообщение.', pronRu: 'ди НА:Х-рихьт' },
    { de: 'zurückrufen', forms: 'ruft zurück, hat zurückgerufen', pos: 'verb', ru: 'перезванивать', example: 'Bitte rufen Sie mich zurück.', exampleRu: 'Пожалуйста, перезвоните мне.', pronRu: 'цу-РЮК-ру:-фэн' },
    { de: 'Durchsage', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление (по громкоговорителю)', example: 'Hören Sie die Durchsage am Bahnhof?', exampleRu: 'Вы слышите объявление на вокзале?', pronRu: 'ди ДУРХ-за-гэ' },
    { de: 'Prüfung', article: 'die', plural: '-en', pos: 'noun', ru: 'экзамен', example: 'Die Prüfung beginnt um neun Uhr.', exampleRu: 'Экзамен начинается в девять часов.', pronRu: 'ди ПРЮ:-фунг' },
  ],
  listening: {
    title: 'Anmeldung zum Deutschkurs',
    kind: 'dialog',
    text: `A: Guten Tag. Ich möchte einen Deutschkurs machen.
B: Gern. Dann füllen wir zusammen das Formular aus. Wie ist Ihr Familienname?
A: Smirnow.
B: Wie bitte? Können Sie das bitte buchstabieren?
A: S, M, I, R, N, O, W.
B: Danke. Und Ihr Vorname?
A: Pawel.
B: Wie ist Ihr Geburtsdatum?
A: Der dritte Mai 1961.
B: Und wo wohnen Sie?
A: In Leipzig, Gartenstraße 12.
B: Sind Sie verheiratet?
A: Ja.
B: Gut. Unterschreiben Sie bitte hier unten. Der Kurs beginnt am Montag um neun Uhr.
A: Vielen Dank!`,
    questions: [
      { question: 'Was möchte der Mann machen?', options: ['Einen Deutschkurs', 'Eine Reise', 'Eine Party'], answer: 0 },
      { question: 'Wie ist sein Vorname?', options: ['Smirnow', 'Pawel', 'Peter'], answer: 1 },
      { question: 'Wann ist er geboren?', options: ['Am 3. März', 'Am 3. Mai', 'Am 13. Mai'], answer: 1 },
      { question: 'Wo wohnt er?', options: ['In Leipzig', 'In Berlin', 'In Gartenstadt'], answer: 0 },
      { question: 'Wann beginnt der Kurs?', options: ['Am Montag um neun Uhr', 'Am Montag um zehn Uhr', 'Am Mittwoch um neun Uhr'], answer: 0 },
    ],
  },
  writing: {
    taskRu:
      'Вы учитесь на курсе немецкого языка. Завтра вы заболели и не можете прийти. Напишите короткое письмо преподавательнице, фрау Бергер: напишите, что не придёте и почему, попросите прислать домашнее задание и сообщите, когда снова придёте. Это типичное задание из части «Schreiben» экзамена Start Deutsch 1.',
    taskDe: 'Sie sind morgen krank und können nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Lehrerin, Frau Berger, eine kurze E-Mail.',
    points: [
      'Sie kommen morgen nicht: Warum?',
      'Bitte: die Hausaufgaben schicken',
      'Wann kommen Sie wieder?',
    ],
    minWords: 30,
    usefulPhrases: [
      'Liebe Frau Berger,',
      'ich kann morgen leider nicht zum Kurs kommen, denn …',
      'Ich bin krank.',
      'Können Sie mir bitte die Hausaufgaben schicken?',
      'Am Montag komme ich wieder.',
      'Vielen Dank!',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Тренировка части «Sprechen» экзамена Start Deutsch 1. Экзаменатор называет слово (например, «Fenster» — окно), а вы вежливо просите о чём-то с этим словом. Потом он просит вас, а вы отвечаете. В конце вы задаёте вопросы на тему «Wochenende».',
    aiRole:
      'Du bist Prüfer in der Prüfung „Start Deutsch 1“, Teil „Bitten formulieren“ und „Fragen stellen“. Der Lerner ist Anfänger (A1) und spricht Russisch. Spiel so: 1) Du nennst ein Wort (zum Beispiel „Fenster“, „Kuli“, „Wasser“, „Telefon“, „Brot“). Der Lerner formuliert eine Bitte, z. B. „Können Sie bitte das Fenster aufmachen?“ Du reagierst kurz: „Ja, gern.“ oder „Natürlich, hier bitte.“ 2) Dann bittest du den Lerner um etwas („Geben Sie mir bitte Ihren Kuli!“), und er reagiert. 3) Danach nennst du Wörter zum Thema „Wochenende“ (Sport, Freunde, Kino, Sonntag), und der Lerner stellt dir Fragen dazu. Du antwortest kurz. Sprich sehr einfach und langsam, kurze Sätze, nur Präsens. Immer nur eine Aufgabe auf einmal. Wenn der Lerner einen Fehler macht, sag den richtigen Satz einmal freundlich und mach weiter.',
    opener: 'Guten Tag! Wir üben Bitten. Ihr Wort ist: „Fenster“.',
    tasksRu: [
      'К каждому слову сформулируйте вежливую просьбу: «Können Sie bitte …?» или «… Sie bitte …!»',
      'Отреагируйте на просьбу экзаменатора: «Ja, gern.», «Natürlich, hier bitte.» или «Tut mir leid, …»',
      'Задайте 3 вопроса на тему «Wochenende»: и W-вопросы, и вопросы «да/нет»',
      'Если вы не поняли, переспросите: «Wie bitte? Können Sie das bitte wiederholen?»',
    ],
    readAloud: [
      'Können Sie mir bitte helfen?',
      'Füllen Sie bitte das Formular aus.',
      'Wie bitte? Noch einmal, bitte.',
      'Wo ist der Ausgang?',
      'Unterschreiben Sie bitte hier.',
    ],
  },
};
