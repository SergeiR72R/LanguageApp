import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-01',
  level: 'B1',
  order: 1,
  title: 'Lebenslauf & Erfahrungen',
  titleRu: 'Резюме и жизненный опыт',
  goalsRu: [
    'Рассказывать о своём образовании и профессиональном пути',
    'Выбирать между перфектом и претеритом в устной и письменной речи',
    'Описывать, что произошло раньше другого события в прошлом (плюсквамперфект)',
    'Понимать и составлять краткую биографию',
  ],
  grammar: {
    topic: 'Perfekt, Präteritum und Plusquamperfekt',
    topicRu: 'Перфект, претерит и плюсквамперфект',
    explanationRu: `**Перфект или претерит?** Оба времени описывают прошлое, но различаются по стилю. В устной речи и в личных письмах немцы почти всегда используют **перфект**: «Ich habe in Berlin studiert». **Претерит** — время письменных текстов: биографий, новостей, романов: «Er studierte in Berlin».

Исключение: глаголы **sein**, **haben** и модальные глаголы (können, müssen, wollen…) даже в разговоре обычно употребляются в претерите: «Ich war krank», «Ich hatte keine Zeit», «Ich musste arbeiten».

**Плюсквамперфект** (Plusquamperfekt) — это «прошедшее в прошедшем». Он показывает действие, которое произошло **раньше** другого действия в прошлом. Образование: **hatte/war + Partizip II** (в конце предложения).

- Ich hatte schon gegessen. — Я уже поел (до того момента).
- Der Zug war schon abgefahren. — Поезд уже ушёл.

Выбор hatte или war — по тем же правилам, что и в перфекте: глаголы движения и изменения состояния (fahren, kommen, umziehen, werden) и sein, bleiben употребляются с **sein**, остальные — с **haben**.

Плюсквамперфект часто стоит со словами **schon, vorher, davor, noch nie** или после союза **nachdem** (подробнее о нём — в юните 10).

**Типичные ошибки русскоговорящих:**

- В русском языке одно прошедшее время, поэтому плюсквамперфект забывают: «Als ich kam, ist er schon gegangen» вместо **«…, war er schon gegangen»**.
- Путают вспомогательный глагол: «Ich habe umgezogen» вместо **«Ich bin umgezogen»**.
- В разговоре употребляют претерит обычных глаголов («Gestern ging ich ins Kino») — это звучит книжно.
- Забывают поставить Partizip II в самый конец предложения.`,
    table: [
      ['Infinitiv', 'Präteritum', 'Perfekt', 'Plusquamperfekt'],
      ['arbeiten', 'ich arbeitete', 'ich habe gearbeitet', 'ich hatte gearbeitet'],
      ['beginnen', 'ich begann', 'ich habe begonnen', 'ich hatte begonnen'],
      ['umziehen', 'ich zog um', 'ich bin umgezogen', 'ich war umgezogen'],
      ['werden', 'ich wurde', 'ich bin geworden', 'ich war geworden'],
      ['sein', 'ich war', 'ich bin gewesen', 'ich war gewesen'],
    ],
    examples: [
      { de: 'Nach der Schule habe ich eine Ausbildung als Krankenpfleger gemacht.', ru: 'После школы я выучился на медбрата.' },
      { de: '2015 zog die Familie nach Hamburg. Dort fand der Vater eine neue Stelle.', ru: 'В 2015 году семья переехала в Гамбург. Там отец нашёл новую работу.' },
      { de: 'Ich konnte nicht zum Kurs kommen, weil ich krank war.', ru: 'Я не смог прийти на курс, потому что был болен.' },
      { de: 'Als ich in Deutschland ankam, hatte ich schon zwei Jahre Deutsch gelernt.', ru: 'Когда я приехал в Германию, я уже два года учил немецкий.' },
      { de: 'Sie wurde 2010 Lehrerin. Vorher hatte sie lange als Übersetzerin gearbeitet.', ru: 'В 2010 году она стала учительницей. До этого она долго работала переводчицей.' },
      { de: 'Nachdem er das Studium abgeschlossen hatte, bewarb er sich bei mehreren Firmen.', ru: 'После того как он окончил учёбу, он отправил заявки в несколько фирм.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Als wir am Bahnhof ankamen, ___ der Zug schon abgefahren.',
        options: ['war', 'hatte', 'ist', 'hat'],
        answer: 0,
        explanationRu: 'Отъезд поезда произошёл раньше прибытия — нужен плюсквамперфект. Глагол abfahren (движение) образует его с war.',
      },
      {
        type: 'choice',
        prompt: 'Ich ___ 2019 von Kiew nach Leipzig umgezogen.',
        options: ['habe', 'bin', 'hatte', 'wurde'],
        answer: 1,
        explanationRu: 'umziehen — изменение места, поэтому перфект образуется с sein: ich bin umgezogen.',
      },
      {
        type: 'choice',
        prompt: 'Sie bestand die Prüfung ohne Probleme, denn sie ___ sich gut ___.',
        options: ['hatte … vorbereitet', 'war … vorbereitet', 'wurde … vorbereiten', 'hat … vorbereiten'],
        answer: 0,
        explanationRu: 'Подготовка была раньше экзамена → плюсквамперфект. Возвратный глагол sich vorbereiten образует его с hatte.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz passt am besten in eine schriftliche Biografie?',
        options: [
          'Er studierte in München Informatik.',
          'Er hat in München Informatik studieren.',
          'Er ist in München Informatik studiert.',
        ],
        answer: 0,
        explanationRu: 'В письменной биографии обычно используется претерит. Остальные варианты грамматически неверны (неправильная форма глагола и вспомогательный глагол).',
      },
      {
        type: 'gap',
        prompt: 'Nachdem ich die Ausbildung ___ hatte, fand ich sofort eine Stelle.',
        answers: ['abgeschlossen'],
        hintRu: 'abschließen',
        explanationRu: 'Plusquamperfekt = hatte + Partizip II. Partizip II от abschließen — abgeschlossen (ge- после отделяемой приставки).',
      },
      {
        type: 'gap',
        prompt: 'Mein Bruder ___ letztes Jahr Vater geworden.',
        answers: ['ist'],
        explanationRu: 'werden (стать) обозначает изменение состояния, поэтому перфект образуется с sein: ist geworden.',
      },
      {
        type: 'gap',
        prompt: 'Ich war sehr müde, weil ich die ganze Nacht nicht ___ hatte.',
        answers: ['geschlafen'],
        hintRu: 'schlafen',
        explanationRu: 'Бессонная ночь была раньше усталости → hatte + Partizip II: geschlafen.',
      },
      {
        type: 'gap',
        prompt: 'Als ich ihn anrief, ___ er schon nach Hause gegangen.',
        answers: ['war'],
        explanationRu: 'Он ушёл до звонка → плюсквамперфект. gehen — глагол движения, поэтому war, а не hatte.',
      },
      {
        type: 'order',
        words: ['Nachdem', 'sie', 'das', 'Praktikum', 'gemacht', 'hatte,', 'bekam', 'sie', 'eine', 'feste', 'Stelle.'],
        translationRu: 'После того как она прошла практику, она получила постоянную должность.',
        explanationRu: 'В придаточном спрягаемый глагол (hatte) стоит в конце. Главное предложение начинается с глагола (bekam), так как придаточное занимает первое место.',
      },
      {
        type: 'order',
        words: ['Vorher', 'hatte', 'er', 'noch', 'nie', 'im', 'Ausland', 'gelebt.'],
        translationRu: 'До этого он никогда не жил за границей.',
        explanationRu: 'Вспомогательный глагол hatte стоит на втором месте, Partizip II gelebt — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Переделайте предложение в перфект (разговорный стиль).',
        prompt: 'Im Sommer machte ich ein Praktikum bei einer Bank.',
        answers: ['Im Sommer habe ich ein Praktikum bei einer Bank gemacht.'],
        explanationRu: 'machen образует перфект с haben: habe … gemacht. Partizip II уходит в конец предложения.',
      },
      {
        type: 'transform',
        instructionRu: 'Переделайте предложение в плюсквамперфект.',
        prompt: 'Die Gäste sind schon gegangen.',
        answers: ['Die Gäste waren schon gegangen.'],
        explanationRu: 'Перфект с sein превращается в плюсквамперфект с war/waren; Partizip II не меняется.',
      },
    ],
  },
  vocab: [
    { de: 'Lebenslauf', article: 'der', plural: '-¨e', pos: 'noun', ru: 'резюме, биография', example: 'Bitte schicken Sie uns Ihren Lebenslauf und Ihre Zeugnisse.', exampleRu: 'Пожалуйста, пришлите нам ваше резюме и ваши аттестаты.' },
    { de: 'Erfahrung', article: 'die', plural: '-en', pos: 'noun', ru: 'опыт', example: 'Sie hat viel Erfahrung im Verkauf.', exampleRu: 'У неё большой опыт в продажах.' },
    { de: 'Ausbildung', article: 'die', plural: '-en', pos: 'noun', ru: 'профессиональное обучение', example: 'Nach der Schule hat er eine Ausbildung zum Elektriker gemacht.', exampleRu: 'После школы он выучился на электрика.' },
    { de: 'Studium', article: 'das', plural: 'Studien', pos: 'noun', ru: 'учёба в вузе', example: 'Während des Studiums hat sie in einem Café gejobbt.', exampleRu: 'Во время учёбы она подрабатывала в кафе.' },
    { de: 'Abschluss', article: 'der', plural: '-¨e', pos: 'noun', ru: 'окончание учёбы; диплом', example: 'Sie hat ihren Abschluss an der Universität Wien gemacht.', exampleRu: 'Она получила диплом в Венском университете.' },
    { de: 'Praktikum', article: 'das', plural: 'Praktika', pos: 'noun', ru: 'практика, стажировка', example: 'Ich habe ein dreimonatiges Praktikum bei einer Zeitung gemacht.', exampleRu: 'Я прошёл трёхмесячную стажировку в газете.' },
    { de: 'Zeugnis', article: 'das', plural: '-se', pos: 'noun', ru: 'аттестат; характеристика с работы', example: 'Mein alter Chef hat mir ein sehr gutes Zeugnis geschrieben.', exampleRu: 'Мой бывший начальник написал мне очень хорошую характеристику.' },
    { de: 'Kenntnis', article: 'die', plural: '-se', pos: 'noun', ru: 'знание (обычно во мн. ч.)', example: 'Für die Stelle braucht man gute Englischkenntnisse.', exampleRu: 'Для этой должности нужно хорошее знание английского.' },
    { de: 'Fähigkeit', article: 'die', plural: '-en', pos: 'noun', ru: 'способность, умение', example: 'Teamfähigkeit ist eine wichtige Fähigkeit im Beruf.', exampleRu: 'Умение работать в команде — важное качество в профессии.' },
    { de: 'Weiterbildung', article: 'die', plural: '-en', pos: 'noun', ru: 'повышение квалификации', example: 'Die Firma hat meine Weiterbildung bezahlt.', exampleRu: 'Фирма оплатила моё повышение квалификации.' },
    { de: 'Auslandsaufenthalt', article: 'der', plural: '-e', pos: 'noun', ru: 'пребывание за границей', example: 'Nach meinem Auslandsaufenthalt in Spanien sprach ich fließend Spanisch.', exampleRu: 'После пребывания в Испании я свободно говорил по-испански.' },
    { de: 'Arbeitgeber', article: 'der', plural: '-', pos: 'noun', ru: 'работодатель', example: 'Mein früherer Arbeitgeber war ein kleines Familienunternehmen.', exampleRu: 'Моим прежним работодателем было небольшое семейное предприятие.' },
    { de: 'sich bewerben', forms: 'bewirbt, bewarb, hat beworben; um + Akk / bei + Dat', pos: 'verb', ru: 'подавать заявку (на работу, учёбу)', example: 'Ich habe mich um einen Ausbildungsplatz bei der Post beworben.', exampleRu: 'Я подал заявку на место ученика на почте.' },
    { de: 'abschließen', forms: 'schließt ab, schloss ab, hat abgeschlossen', pos: 'verb', ru: 'заканчивать (учёбу, обучение)', example: 'Er hat sein Studium mit sehr guten Noten abgeschlossen.', exampleRu: 'Он окончил учёбу с очень хорошими оценками.' },
    { de: 'umziehen', forms: 'zieht um, zog um, ist umgezogen', pos: 'verb', ru: 'переезжать', example: 'Wir sind vor drei Jahren nach Dresden umgezogen.', exampleRu: 'Мы переехали в Дрезден три года назад.' },
    { de: 'erwerben', forms: 'erwirbt, erwarb, hat erworben', pos: 'verb', ru: 'приобретать (знания, опыт)', example: 'Im Praktikum hat sie wichtige Kenntnisse erworben.', exampleRu: 'На практике она приобрела важные знания.' },
    { de: 'verantwortlich', forms: 'für + Akk', pos: 'adj', ru: 'ответственный (за что-л.)', example: 'In meinem letzten Job war ich für die Buchhaltung verantwortlich.', exampleRu: 'На последней работе я отвечал за бухгалтерию.' },
    { de: 'zuverlässig', pos: 'adj', ru: 'надёжный', example: 'Unsere neue Kollegin ist sehr zuverlässig und pünktlich.', exampleRu: 'Наша новая коллега очень надёжная и пунктуальная.' },
    { de: 'Erfahrungen sammeln', pos: 'phrase', ru: 'набираться опыта', example: 'Im Ausland habe ich viele neue Erfahrungen gesammelt.', exampleRu: 'За границей я приобрёл много нового опыта.' },
    { de: 'Wert legen auf', forms: 'auf + Akk', pos: 'phrase', ru: 'придавать значение чему-л.', example: 'Viele Firmen legen großen Wert auf Sprachkenntnisse.', exampleRu: 'Многие фирмы придают большое значение знанию языков.' },
  ],
  listening: {
    title: 'Mein Weg nach Deutschland',
    kind: 'monolog',
    text: `Hallo, ich heiße Olga und ich erzähle euch heute ein bisschen von meinem beruflichen Weg. Ich bin in Nowosibirsk aufgewachsen und habe dort nach der Schule Wirtschaft studiert. Das Studium war interessant, aber ziemlich theoretisch. Praktische Erfahrungen habe ich erst später gesammelt, nämlich bei einem Praktikum in einer großen Bank. Dort war ich für die Kundenbetreuung verantwortlich, und das hat mir sehr viel Spaß gemacht.

2016 habe ich meinen Abschluss gemacht. Ein Jahr später bin ich mit meinem Mann nach Deutschland umgezogen. Er hatte schon vorher eine Stelle in Köln gefunden, ich dagegen hatte noch gar keinen Plan. Ich hatte zwar in der Schule ein bisschen Deutsch gelernt, aber im Alltag habe ich am Anfang fast nichts verstanden. Das war wirklich eine schwierige Zeit.

Also habe ich zuerst einen Intensivkurs besucht und meine Sprachkenntnisse verbessert. Danach musste ich mein Zeugnis anerkennen lassen. Das hat fast ein halbes Jahr gedauert! Dann habe ich mich bei vielen Firmen beworben. Die meisten Arbeitgeber haben gar nicht geantwortet. Erst nach der zwanzigsten Bewerbung hat mich eine Versicherung zum Gespräch eingeladen – und ich habe die Stelle bekommen.

Heute arbeite ich dort als Sachbearbeiterin. Nebenbei mache ich eine Weiterbildung im Bereich Marketing. Mein Tipp für euch: Gebt nicht auf! Jede Absage ist auch eine Erfahrung.`,
    questions: [
      { question: 'Was hat Olga in Russland studiert?', options: ['Marketing', 'Wirtschaft', 'Sprachen', 'Informatik'], answer: 1 },
      { question: 'Wo hat Olga ihr Praktikum gemacht?', options: ['In einer Versicherung', 'In einem Hotel', 'In einer Bank'], answer: 2 },
      {
        question: 'Was war vor dem Umzug nach Deutschland schon passiert?',
        options: [
          'Ihr Mann hatte eine Stelle in Köln gefunden.',
          'Olga hatte einen Intensivkurs in Köln besucht.',
          'Olga hatte eine Stelle bei einer Versicherung bekommen.',
        ],
        answer: 0,
      },
      { question: 'Wie lange hat die Anerkennung ihres Zeugnisses gedauert?', options: ['Ungefähr zwei Monate', 'Fast ein Jahr', 'Fast sechs Monate', 'Zwei Wochen'], answer: 2 },
      {
        question: 'Was macht Olga heute neben ihrer Arbeit?',
        options: ['Sie besucht einen Intensivkurs.', 'Sie studiert Wirtschaft.', 'Sie bewirbt sich bei Banken.', 'Sie macht eine Weiterbildung.'],
        answer: 3,
      },
    ],
  },
  writing: {
    taskRu: 'Вы участвуете в интернет-форуме «Neu in Deutschland». Новые участники рассказывают о своём профессиональном пути. Напишите пост о себе.',
    taskDe: 'Schreiben Sie einen Beitrag im Forum „Neu in Deutschland“ und erzählen Sie von Ihrem beruflichen Weg.',
    points: [
      'Schule, Ausbildung oder Studium',
      'wichtige berufliche Erfahrungen',
      'was vor Ihrem Umzug oder Berufsstart schon passiert war',
      'Ihre Pläne für die Zukunft',
    ],
    minWords: 100,
    usefulPhrases: [
      'Nach der Schule habe ich … gemacht.',
      'Ich habe mein Studium im Jahr … abgeschlossen.',
      'Damals war ich für … verantwortlich.',
      'Vorher hatte ich schon …',
      'Dabei habe ich viele Erfahrungen gesammelt.',
      'In Zukunft möchte ich …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы пришли на первую консультацию в агентство по трудоустройству. Консультант расспрашивает вас о вашем образовании и опыте работы.',
    aiRole:
      'Sie sind Herr Krüger, Berater bei der Agentur für Arbeit in Leipzig. Sie führen ein freundliches Erstgespräch und fragen nach Schule, Ausbildung, Studium, Berufserfahrung und Sprachkenntnissen. Sprechen Sie einfach und klar auf B1-Niveau und stellen Sie immer nur eine Frage auf einmal.',
    opener: 'Guten Tag, schön, dass Sie da sind! Erzählen Sie mir doch zuerst ein bisschen über sich: Wo sind Sie zur Schule gegangen und was haben Sie danach gemacht?',
    tasksRu: [
      'Расскажите о своём образовании, используя перфект.',
      'Опишите свой самый важный профессиональный опыт.',
      'Употребите хотя бы два раза плюсквамперфект (например: «Vorher hatte ich …»).',
      'Спросите консультанта о возможностях повышения квалификации.',
    ],
    readAloud: [
      'Nach dem Abitur habe ich eine Ausbildung zur Bürokauffrau gemacht.',
      'Für diese Stelle braucht man gründliche Kenntnisse und viel Erfahrung.',
      'Vorher hatte ich schon zwölf Monate in Zürich gearbeitet.',
    ],
  },
};
