import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-11',
  level: 'A2',
  order: 11,
  title: 'Lernen und Weiterbildung',
  titleRu: 'Учёба и повышение квалификации',
  goalsRu: [
    'Говорить о курсах, учёбе и экзаменах',
    'Правильно употреблять глаголы с предлогами: warten auf, denken an, sich interessieren für и др.',
    'Различать sich freuen auf (то, что будет) и sich freuen über (то, что уже есть)',
    'Задавать вопросы worauf? / auf wen? и отвечать коротко: darauf / auf ihn',
    'Записаться на курс и расспросить о нём',
  ],
  grammar: {
    topic: 'Verben mit Präpositionen; worauf? – darauf',
    topicRu: 'Глаголы с предлогами; вопросы worauf? и ответы darauf',
    explanationRu: `Многие немецкие глаголы «дружат» с определённым предлогом. Этот предлог часто **не такой, как в русском**, поэтому учите глагол **вместе с предлогом и падежом**, как одно целое: **warten auf + Akk** (ждать), **denken an + Akk** (думать о).

- Ich warte **auf den** Bus. — Я жду автобус. (по-русски без предлога!)
- Ich denke **an meine** Familie. — Я думаю **о** семье.

**Падеж.** В этом юните почти все предлоги требуют **Akkusativ**: auf, an, für, über, um. **Dativ** — после mit, nach, von, vor и в teilnehmen **an + Dat**. Внимание: у **an** бывает и так, и так: denken an + Akk, но teilnehmen an + Dat.

**sich freuen auf или über?**
- **auf** — радуюсь тому, что **будет**: Ich freue mich **auf** den Urlaub.
- **über** — радуюсь тому, что **уже есть / было**: Ich freue mich **über** das Geschenk.

**Вопрос: worauf? или auf wen?**
- о **вещи, событии**: **wo + предлог**: Worauf wartest du? Wofür interessierst du dich?
- о **человеке**: **предлог + wen / wem**: Auf wen wartest du? Mit wem sprichst du?

Если предлог начинается с гласной (auf, an, über, um), вставляем **r**: wo**r**auf, wo**r**an, wo**r**über, wo**r**um. Но: wofür, womit, wonach.

**Короткий ответ: darauf или auf ihn?**
- **вещь**: **da + предлог** (с r перед гласной): Wartest du auf den Bus? — Ja, ich warte **darauf**. Interessierst du dich für Musik? — Ja, **dafür**.
- **человек**: **предлог + местоимение**: Wartest du auf Anna? — Ja, ich warte **auf sie**. Sprichst du mit dem Lehrer? — Ja, **mit ihm**.

**Типичные ошибки русскоговорящих:**
- Нет предлога: ~~Ich warte den Bus~~ → **auf den Bus**.
- Русский предлог: ~~Ich denke über dich~~ → **an dich**; ~~in Musik~~ → **für Musik**.
- da- для людей: ~~Ich warte darauf~~ (об Анне) → **auf sie**.
- Забывают **sich**: Ich interessiere **mich** für …`,
    table: [
      ['Глагол', 'Предлог + падеж', 'Пример', 'Вопрос / ответ (вещь)'],
      ['warten', 'auf + Akk', 'Ich warte auf den Bus.', 'Worauf? – Darauf.'],
      ['sich freuen (будущее)', 'auf + Akk', 'Ich freue mich auf den Kurs.', 'Worauf? – Darauf.'],
      ['sich freuen (уже есть)', 'über + Akk', 'Ich freue mich über das Zertifikat.', 'Worüber? – Darüber.'],
      ['sich interessieren', 'für + Akk', 'Er interessiert sich für Computer.', 'Wofür? – Dafür.'],
      ['denken', 'an + Akk', 'Ich denke an die Prüfung.', 'Woran? – Daran.'],
      ['sprechen', 'über + Akk', 'Wir sprechen über den Test.', 'Worüber? – Darüber.'],
      ['sprechen', 'mit + Dat', 'Ich spreche mit der Lehrerin.', 'Mit wem? – Mit ihr. (человек)'],
      ['fragen', 'nach + Dat', 'Sie fragt nach dem Weg.', 'Wonach? – Danach.'],
      ['sich kümmern', 'um + Akk', 'Er kümmert sich um den Garten.', 'Worum? – Darum.'],
      ['teilnehmen', 'an + Dat', 'Ich nehme am Kurs teil.', 'Woran? – Daran.'],
    ],
    examples: [
      { de: 'Ich warte auf mein Prüfungsergebnis.', ru: 'Я жду результата своего экзамена.' },
      { de: 'Wofür interessierst du dich? – Für Geschichte.', ru: 'Чем ты интересуешься? — Историей.' },
      { de: 'Wir freuen uns schon auf die Ferien.', ru: 'Мы уже радуемся предстоящим каникулам.' },
      { de: 'Sie hat sich sehr über die gute Note gefreut.', ru: 'Она очень обрадовалась хорошей оценке.' },
      { de: 'Mit wem sprichst du? – Mit meinem Kursleiter.', ru: 'С кем ты говоришь? — С руководителем моего курса.' },
      { de: 'Denkst du an den Termin? – Ja, ich denke daran.', ru: 'Ты помнишь о встрече? — Да, помню.' },
      { de: 'Wer kümmert sich um die Kinder, wenn du im Kurs bist?', ru: 'Кто заботится о детях, когда ты на курсе?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich warte ___ den Bus.',
        options: ['auf', 'für', 'an', 'nach'],
        answer: 0,
        explanationRu: 'warten auf + Akkusativ. В русском «ждать автобус» без предлога, а в немецком предлог auf обязателен.',
      },
      {
        type: 'choice',
        prompt: 'Interessierst du dich ___ Geschichte?',
        options: ['für', 'auf', 'über', 'an'],
        answer: 0,
        explanationRu: 'sich interessieren für + Akk — интересоваться чем-то. Не «in», как хочется сказать по-английски, и не творительный падеж, как в русском.',
      },
      {
        type: 'choice',
        prompt: 'Nächste Woche fahren wir nach Italien. Ich freue mich schon ___ die Reise.',
        options: ['auf', 'über', 'an', 'für'],
        answer: 0,
        explanationRu: 'Поездка ещё впереди (будущее) → sich freuen auf. über — для того, что уже есть или уже было.',
      },
      {
        type: 'choice',
        prompt: 'Danke für die Blumen! Ich freue mich sehr ___.',
        options: ['darüber', 'darauf', 'dafür', 'daran'],
        answer: 0,
        explanationRu: 'Цветы уже подарены — радуются тому, что уже есть: sich freuen über → darüber (über начинается с гласной, поэтому da-r-über).',
      },
      {
        type: 'gap',
        prompt: 'Ich denke oft ___ meine Kindheit.',
        answers: ['an'],
        explanationRu: 'denken an + Akk — думать о ком-то/чём-то, вспоминать. Русское «о» здесь не переводится как über.',
      },
      {
        type: 'gap',
        prompt: 'Der Tourist fragt ___ dem Weg zum Bahnhof.',
        answers: ['nach'],
        explanationRu: 'fragen nach + Dat — спрашивать о чём-то (о дороге, о цене, о времени). После nach — Dativ: dem Weg.',
      },
      {
        type: 'order',
        words: ['Mein', 'Mann', 'kümmert', 'sich', 'um', 'den', 'Garten.'],
        translationRu: 'Мой муж ухаживает за садом.',
        explanationRu: 'sich kümmern um + Akk — заботиться о, ухаживать за. Возвратное местоимение sich стоит сразу после глагола.',
      },
      {
        type: 'choice',
        prompt: 'Wir sprechen mit ___ Lehrerin über ___ Test.',
        options: ['der … den', 'die … dem', 'der … dem', 'die … den'],
        answer: 0,
        explanationRu: 'mit + Dativ → mit der Lehrerin; sprechen über + Akkusativ → über den Test.',
      },
      {
        type: 'choice',
        prompt: '___ wartest du? – Auf meinen Bruder.',
        options: ['Auf wen', 'Worauf', 'Wo', 'Wem'],
        answer: 0,
        explanationRu: 'Ответ — человек (брат), поэтому вопрос «предлог + wen»: Auf wen? Worauf спрашивают только о вещах и событиях.',
      },
      {
        type: 'transform',
        instructionRu: 'Ответьте «да» коротко, без повтора слова: используйте da(r) + предлог.',
        prompt: 'Interessierst du dich für Fußball?',
        answers: ['Ja, ich interessiere mich dafür.', 'Ja, dafür interessiere ich mich.', 'Ich interessiere mich dafür.', 'Ja, ich interessiere mich sehr dafür.'],
        explanationRu: 'Футбол — это вещь/занятие, поэтому für Fußball → dafür (für начинается с согласной, r не нужно).',
      },
      {
        type: 'choice',
        audio: 'Woran denkst du gerade? – An die Prüfung morgen.',
        prompt: 'Послушайте. О чём думает человек?',
        options: ['О завтрашнем экзамене', 'О своём друге', 'О курсе в субботу'],
        answer: 0,
        explanationRu: '«Woran denkst du?» — «О чём ты думаешь?» Ответ: «An die Prüfung morgen» — о завтрашнем экзамене.',
      },
      {
        type: 'gap',
        audio: 'Ich interessiere mich für Computer.',
        prompt: 'Послушайте и напишите пропущенный предлог: Ich interessiere mich ___ Computer.',
        answers: ['für', 'fur', 'fuer'],
        explanationRu: 'sich interessieren für + Akk. Это сочетание нужно запомнить целиком.',
      },
    ],
  },
  vocab: [
    { de: 'Weiterbildung', article: 'die', plural: '-en', pos: 'noun', ru: 'повышение квалификации, дополнительное обучение', example: 'Die Firma bezahlt meine Weiterbildung.', exampleRu: 'Фирма оплачивает моё повышение квалификации.', pronRu: 'ди ВАЙ-та-биль-дунг' },
    { de: 'Sprachkurs', article: 'der', plural: '-e', pos: 'noun', ru: 'языковой курс', example: 'Der Sprachkurs beginnt im September.', exampleRu: 'Языковой курс начинается в сентябре.', pronRu: 'дер ШПРА:Х-курс' },
    { de: 'Volkshochschule', article: 'die', plural: '-n', pos: 'noun', ru: 'народный университет (курсы для взрослых), сокращённо VHS', example: 'An der Volkshochschule gibt es viele Kurse.', exampleRu: 'В народном университете много курсов.', pronRu: 'ди ФОЛЬКС-хо:х-шу:-ле' },
    { de: 'Teilnehmer', article: 'der', plural: '-', pos: 'noun', ru: 'участник (die Teilnehmerin — участница)', example: 'Im Kurs sind zwölf Teilnehmer.', exampleRu: 'На курсе двенадцать участников.', pronRu: 'дер ТАЙЛЬ-не:-ма' },
    { de: 'Integrationskurs', article: 'der', plural: '-e', pos: 'noun', ru: 'интеграционный курс (язык + жизнь в Германии)', example: 'Im Integrationskurs lernt man Deutsch und viel über Deutschland.', exampleRu: 'На интеграционном курсе учат немецкий и многое узнают о Германии.', pronRu: 'дер ин-тэ-гра-ЦЬО:НС-курс' },
    { de: 'Zertifikat', article: 'das', plural: '-e', pos: 'noun', ru: 'сертификат', example: 'Nach der Prüfung bekommt man ein Zertifikat.', exampleRu: 'После экзамена получают сертификат.', pronRu: 'дас цэр-ти-фи-КА:Т' },
    { de: 'Niveau', article: 'das', plural: '-s', pos: 'noun', ru: 'уровень (знаний)', example: 'Welches Niveau hast du? – A2.', exampleRu: 'Какой у тебя уровень? — A2.', pronRu: 'дас ни-ВО:' },
    { de: 'Kursleiter', article: 'der', plural: '-', pos: 'noun', ru: 'руководитель курса, преподаватель (die Kursleiterin)', example: 'Unsere Kursleiterin erklärt alles sehr gut.', exampleRu: 'Наша преподавательница всё очень хорошо объясняет.', pronRu: 'дер КУРС-лай-та' },
    { de: 'Hausaufgabe', article: 'die', plural: '-n', pos: 'noun', ru: 'домашнее задание', example: 'Hast du die Hausaufgaben schon gemacht?', exampleRu: 'Ты уже сделал домашнее задание?', pronRu: 'ди ХАУС-ауф-га:-бе' },
    { de: 'Anmeldung', article: 'die', plural: '-en', pos: 'noun', ru: 'запись, регистрация', example: 'Die Anmeldung für den Kurs ist bis Freitag.', exampleRu: 'Запись на курс — до пятницы.', pronRu: 'ди АН-мэль-дунг' },
    { de: 'warten auf', forms: '+ Akk; wartet, hat gewartet', pos: 'verb', ru: 'ждать (кого? что?)', example: 'Ich warte auf meine Freundin.', exampleRu: 'Я жду свою подругу.', pronRu: 'ВАР-тэн ауф' },
    { de: 'sich freuen auf', forms: '+ Akk; freut sich, hat sich gefreut', pos: 'verb', ru: 'радоваться (тому, что будет), ждать с радостью', example: 'Ich freue mich auf das Wochenende.', exampleRu: 'Я с радостью жду выходных.', pronRu: 'зихь ФРОЙ-эн ауф' },
    { de: 'sich freuen über', forms: '+ Akk; freut sich, hat sich gefreut', pos: 'verb', ru: 'радоваться (тому, что уже есть / было)', example: 'Er freut sich über die gute Note.', exampleRu: 'Он радуется хорошей оценке.', pronRu: 'зихь ФРОЙ-эн Ю-ба' },
    { de: 'sich interessieren für', forms: '+ Akk; interessiert sich, hat sich interessiert', pos: 'verb', ru: 'интересоваться (чем?)', example: 'Ich interessiere mich für Musik.', exampleRu: 'Я интересуюсь музыкой.', pronRu: 'зихь ин-тэ-рэ-СИ:-рэн фюр' },
    { de: 'denken an', forms: '+ Akk; denkt, hat gedacht', pos: 'verb', ru: 'думать (о ком? о чём?), помнить о', example: 'Denk bitte an die Hausaufgaben!', exampleRu: 'Не забудь, пожалуйста, о домашнем задании!', pronRu: 'ДЭН-кен ан' },
    { de: 'sprechen über', forms: '+ Akk; spricht, hat gesprochen; sprechen mit + Dat', pos: 'verb', ru: 'говорить (о чём?); sprechen mit — говорить (с кем?)', example: 'Im Kurs sprechen wir über das Wetter.', exampleRu: 'На курсе мы говорим о погоде.', pronRu: 'ШПРЭ-хьен Ю-ба' },
    { de: 'sich kümmern um', forms: '+ Akk; kümmert sich, hat sich gekümmert', pos: 'verb', ru: 'заботиться (о ком? о чём?), заниматься (чем?)', example: 'Wer kümmert sich um den Hund?', exampleRu: 'Кто заботится о собаке?', pronRu: 'зихь КЮ-мерн ум' },
    { de: 'fragen nach', forms: '+ Dat; fragt, hat gefragt', pos: 'verb', ru: 'спрашивать (о чём?), узнавать', example: 'Er fragt nach dem Preis.', exampleRu: 'Он спрашивает о цене.', pronRu: 'ФРА:-ген на:х' },
    { de: 'sich vorbereiten auf', forms: '+ Akk; bereitet sich vor, hat sich vorbereitet', pos: 'verb', ru: 'готовиться (к чему?)', example: 'Ich bereite mich auf die Prüfung vor.', exampleRu: 'Я готовлюсь к экзамену.', pronRu: 'зихь ФОР-бэ-рай-тэн ауф' },
    { de: 'teilnehmen an', forms: '+ Dat; nimmt teil, hat teilgenommen', pos: 'verb', ru: 'участвовать (в чём?), посещать', example: 'Ich nehme an einem Computerkurs teil.', exampleRu: 'Я посещаю компьютерный курс.', pronRu: 'ТАЙЛЬ-не:-мен ан' },
  ],
  listening: {
    title: 'Anruf bei der Volkshochschule',
    kind: 'dialog',
    text: `A: Volkshochschule Kassel, guten Tag. Was kann ich für Sie tun?
B: Guten Tag, mein Name ist Iwanow. Ich interessiere mich für einen Computerkurs. Haben Sie da etwas?
A: Ja, wir haben einen Kurs für Anfänger. Er beginnt am 3. März.
B: Und wann ist der Kurs?
A: Immer dienstags von 18 bis 20 Uhr, zehn Wochen lang. Er kostet 89 Euro.
B: Das passt gut. Abends habe ich Zeit, weil ich nur bis 17 Uhr arbeite.
A: Möchten Sie sich gleich anmelden? Dann brauche ich Ihre Adresse und Ihre Telefonnummer.
B: Ja, gern. Bekommt man am Ende auch ein Zertifikat?
A: Ja, wenn Sie regelmäßig teilnehmen, bekommen Sie am Ende ein Zertifikat.
B: Prima. Meine Frau hat übrigens auch nach einem Kurs gefragt. Sie möchte ihr Deutsch verbessern.
A: Dann kommt sie am besten zu unserem Test. Der ist jeden Montag um zehn Uhr.
B: Danke, ich spreche heute Abend mit ihr darüber.`,
    questions: [
      { question: 'Wofür interessiert sich Herr Iwanow?', options: ['Für einen Deutschkurs', 'Für einen Computerkurs', 'Für einen Sportkurs'], answer: 1 },
      { question: 'Wann ist der Kurs?', options: ['Montags von 10 bis 12 Uhr', 'Dienstags von 18 bis 20 Uhr', 'Dienstags von 17 bis 19 Uhr'], answer: 1 },
      { question: 'Wie viel kostet der Kurs?', options: ['89 Euro', '98 Euro', '79 Euro'], answer: 0 },
      { question: 'Wann bekommt man ein Zertifikat?', options: ['Wenn man am Montag einen Test macht.', 'Wenn man regelmäßig teilnimmt.', 'Wenn man sofort bezahlt.'], answer: 1 },
      { question: 'Wonach hat die Frau von Herrn Iwanow gefragt?', options: ['Nach einem Deutschkurs', 'Nach einem Computerkurs', 'Nach einer Arbeit'], answer: 0 },
    ],
  },
  writing: {
    taskRu:
      'Вы записались на курс. Напишите письмо по электронной почте подруге Марии (минимум 50 слов): расскажите о курсе, о том, что вас интересует, и пригласите её. Используйте хотя бы три глагола с предлогами (sich interessieren für, sich freuen auf, sprechen über …).',
    taskDe: 'Sie haben sich für einen Kurs angemeldet. Schreiben Sie Ihrer Freundin Maria eine E-Mail.',
    points: ['Welchen Kurs machen Sie und wann ist er?', 'Wofür interessieren Sie sich besonders? Worüber sprechen Sie im Kurs?', 'Laden Sie Maria ein: Sie soll auch mitkommen.'],
    minWords: 50,
    usefulPhrases: [
      'Liebe Maria, wie geht es dir?',
      'Ich habe mich für einen …kurs angemeldet.',
      'Der Kurs ist immer am … von … bis … Uhr.',
      'Ich interessiere mich sehr für …',
      'Im Kurs sprechen wir über …',
      'Ich freue mich schon auf …',
      'Hast du auch Lust auf den Kurs?',
      'Ich warte auf deine Antwort. Liebe Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы пришли в народный университет (Volkshochschule) и хотите выбрать курс. Сотрудница спрашивает, чем вы интересуетесь, и рассказывает о курсах. Отвечайте с глаголами с предлогами.',
    aiRole:
      'Sie sind Frau Lehmann, Kursberaterin an der Volkshochschule in Bremen. Ein Kunde lernt Deutsch auf Niveau A2 und möchte einen Kurs finden. Sprechen Sie langsam und in kurzen, einfachen Sätzen. Fragen Sie mit Verben mit Präpositionen: Wofür interessieren Sie sich? Worauf freuen Sie sich? Haben Sie schon an einem Kurs teilgenommen? Wer kümmert sich um Ihre Kinder, wenn Sie im Kurs sind? Nennen Sie passende Kurse mit Tag, Uhrzeit und Preis. Stellen Sie immer nur eine Frage. Wenn der Kunde etwas nicht versteht, sagen Sie es noch einmal einfacher.',
    opener: 'Guten Tag! Willkommen in der Volkshochschule. Wofür interessieren Sie sich?',
    tasksRu: [
      'Скажите, чем вы интересуетесь (Ich interessiere mich für …).',
      'Спросите о времени и цене курса (Ich möchte nach dem Preis fragen. / Wann ist der Kurs?).',
      'Скажите, чему вы радуетесь или чего ждёте (Ich freue mich auf …).',
      'Хотя бы раз ответьте коротко с da(r)- (Ja, ich interessiere mich dafür. / Ja, ich denke daran.).',
    ],
    readAloud: [
      'Ich warte auf den Bus.',
      'Worauf freust du dich?',
      'Ich interessiere mich für Geschichte.',
      'Wir sprechen oft über die Arbeit.',
      'Er kümmert sich um seine Mutter.',
    ],
  },
};
