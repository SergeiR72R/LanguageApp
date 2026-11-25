import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-02',
  level: 'B2',
  order: 2,
  title: 'Bildung & Lernen',
  titleRu: 'Образование и обучение',
  goalsRu: [
    'Рассказывать о своём образовании и оценивать принятые решения задним числом.',
    'Выражать сожаление, упрёк и нереальные условия в прошлом (hätte/wäre + Partizip II).',
    'Использовать модальные глаголы в Konjunktiv II прошедшего времени: hätte machen sollen/können.',
    'Написать письмо читателя в газету на тему образования.',
  ],
  grammar: {
    topic: 'Konjunktiv II der Vergangenheit',
    topicRu: 'Konjunktiv II прошедшего времени',
    explanationRu: `**Konjunktiv II прошедшего времени** описывает нереальные ситуации в прошлом — то, что могло бы произойти, но не произошло. Образование: **hätte / wäre** + Partizip II.

- Wenn ich mehr gelernt **hätte**, **hätte** ich die Prüfung **bestanden**. — Если бы я больше занимался, я бы сдал экзамен.
- Wenn er früher losgefahren **wäre**, **wäre** er pünktlich **gekommen**.

Выбор между hätte и wäre такой же, как в Perfekt: глаголы движения и изменения состояния, а также sein и bleiben → **wäre**; все остальные → **hätte**.

**Основные функции:**

- нереальное условие: Wenn …, hätte/wäre …
- сожаление: **Hätte** ich **doch** Medizin studiert! / Wenn ich **nur** früher angefangen **hätte**!
- «чуть не»: Ich **wäre fast** durchgefallen. — Я чуть не провалился.
- упрёк или совет задним числом: Du **hättest** dich besser vorbereiten **sollen**.

**Модальные глаголы** образуют «двойной инфинитив»: hätte + Infinitiv + Modalverb в инфинитиве: Ich **hätte** mehr **lernen sollen**. В придаточном предложении hätte стоит **перед** двойным инфинитивом: …, dass ich mehr **hätte lernen sollen**.

**Типичные ошибки русскоговорящих:**

- Русское «бы» не показывает время: «я бы пошёл» может значить и сейчас, и в прошлом. В немецком нужно выбрать: ich **würde gehen** (сейчас) или ich **wäre gegangen** (в прошлом).
- Неправильный порядок слов: *Wenn ich hätte das gewusst* — правильно **Wenn ich das gewusst hätte**.
- *Ich hätte gemusst lernen* или *hätte lernen gemusst* — при модальном глаголе нужен двойной инфинитив: **hätte lernen müssen**.
- Конструкция *würde gelernt haben* звучит неуклюже; в нереальных предложениях о прошлом используйте **hätte gelernt**.`,
    table: [
      ['Тип глагола', 'Gegenwart', 'Vergangenheit'],
      ['с haben', 'Ich würde lernen.', 'Ich hätte gelernt.'],
      ['с sein', 'Ich würde fahren.', 'Ich wäre gefahren.'],
      ['модальный', 'Ich müsste lernen.', 'Ich hätte lernen müssen.'],
      ['модальный в придаточном', '…, dass ich lernen müsste.', '…, dass ich hätte lernen müssen.'],
    ],
    examples: [
      {
        de: 'Wenn ich in der Schule besser aufgepasst hätte, hätte ich jetzt weniger Probleme mit Mathe.',
        ru: 'Если бы я лучше слушал в школе, у меня сейчас было бы меньше проблем с математикой.',
      },
      {
        de: 'Hätte ich doch nur früher mit dem Deutschkurs angefangen!',
        ru: 'Если бы я только раньше начал заниматься немецким!',
      },
      {
        de: 'Ohne die Hilfe meiner Tutorin wäre ich durch die Prüfung gefallen.',
        ru: 'Без помощи моей наставницы я бы провалил экзамен.',
      },
      {
        de: 'Du hättest dich rechtzeitig für das Seminar anmelden sollen.',
        ru: 'Тебе следовало вовремя записаться на семинар.',
      },
      {
        de: 'Wir hätten das Stipendium bekommen können, wenn wir den Antrag nicht zu spät abgeschickt hätten.',
        ru: 'Мы могли бы получить стипендию, если бы не отправили заявление слишком поздно.',
      },
      {
        de: 'Beinahe hätte ich das Studium abgebrochen.',
        ru: 'Я чуть было не бросил учёбу.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Wenn ich das früher gewusst ___, hätte ich mich anders entschieden.',
        options: ['hätte', 'wäre', 'würde', 'habe'],
        answer: 0,
        explanationRu: 'wissen образует Perfekt с haben, поэтому в Konjunktiv II прошедшего времени: gewusst hätte.',
      },
      {
        type: 'choice',
        prompt: 'Wenn sie nicht krank geworden ___, hätte sie die Prüfung mitgeschrieben.',
        options: ['hätte', 'wäre', 'würde', 'war'],
        answer: 1,
        explanationRu: 'werden — глагол изменения состояния, Perfekt с sein (ist geworden), поэтому: geworden wäre. War — индикатив, он не выражает нереальность.',
      },
      {
        type: 'choice',
        prompt: 'Du ___ dich besser auf das Gespräch vorbereiten sollen.',
        options: ['wärst', 'hättest', 'würdest', 'solltest'],
        answer: 1,
        explanationRu: 'Упрёк о прошлом: hätte + Infinitiv + sollen (двойной инфинитив). Модальные глаголы образуют прошедшее время с haben.',
      },
      {
        type: 'choice',
        prompt: 'Mir ist jetzt klar, dass ich mehr Vokabeln ___.',
        options: ['lernen müssen hätte', 'hätte gelernt müssen', 'hätte lernen gemusst', 'hätte lernen müssen'],
        answer: 3,
        explanationRu: 'В придаточном с двойным инфинитивом hätte стоит перед ним: …, dass ich mehr Vokabeln hätte lernen müssen.',
      },
      {
        type: 'gap',
        prompt: 'Wenn der Kurs nicht so teuer gewesen wäre, ___ ich ihn gemacht.',
        answers: ['hätte'],
        explanationRu: 'machen образует Perfekt с haben → hätte gemacht. В главном предложении hätte стоит на втором месте (после придаточного).',
      },
      {
        type: 'gap',
        prompt: 'Ohne die Nachhilfe wäre mein Sohn sitzen ___.',
        answers: ['geblieben'],
        hintRu: 'sitzen bleiben — остаться на второй год',
        explanationRu: 'bleiben образует Perfekt с sein, поэтому wäre … geblieben.',
      },
      {
        type: 'gap',
        prompt: '___ ich doch bloß Informatik studiert!',
        answers: ['Hätte'],
        explanationRu: 'Нереальное желание без wenn: спрягаемый глагол hätte стоит на первом месте, плюс частицы doch / bloß / nur.',
      },
      {
        type: 'gap',
        prompt: 'Wir hätten die Hausarbeit pünktlich abgeben ___, wenn der Drucker nicht kaputt gewesen wäre.',
        answers: ['können'],
        hintRu: 'модальный глагол со значением «мочь»',
        explanationRu: 'Двойной инфинитив: hätten abgeben können. Модальный глагол стоит в инфинитиве, а не в форме gekonnt.',
      },
      {
        type: 'order',
        words: ['Wenn ich', 'mehr Zeit', 'gehabt hätte,', 'hätte ich', 'den Kurs', 'beendet.'],
        translationRu: 'Если бы у меня было больше времени, я бы закончил курс.',
        explanationRu: 'В придаточном с wenn hätte стоит в конце, затем главное предложение начинается со спрягаемого глагола: hätte ich … beendet.',
      },
      {
        type: 'order',
        words: ['Du', 'hättest', 'den Lehrer', 'um Hilfe', 'bitten', 'sollen.'],
        translationRu: 'Тебе следовало попросить учителя о помощи.',
        explanationRu: 'Упрёк: hättest на втором месте, в конце двойной инфинитив bitten sollen.',
      },
      {
        type: 'transform',
        instructionRu: 'Составьте одно нереальное условное предложение с wenn.',
        prompt: 'Ich habe nicht genug gelernt. Deshalb bin ich durchgefallen.',
        answers: [
          'Wenn ich genug gelernt hätte, wäre ich nicht durchgefallen.',
          'Ich wäre nicht durchgefallen, wenn ich genug gelernt hätte.',
          'Hätte ich genug gelernt, wäre ich nicht durchgefallen.',
        ],
        explanationRu: 'Реальность меняется на противоположную: nicht genug gelernt → genug gelernt hätte; durchgefallen → nicht durchgefallen. durchfallen образует Perfekt с sein → wäre durchgefallen.',
      },
      {
        type: 'transform',
        instructionRu: 'Выразите сожаление в виде нереального желания (без wenn, с частицей doch).',
        prompt: 'Leider habe ich mich nicht für das Stipendium beworben.',
        answers: [
          'Hätte ich mich doch für das Stipendium beworben!',
          'Hätte ich mich doch nur für das Stipendium beworben!',
          'Hätte ich mich doch bloß für das Stipendium beworben!',
        ],
        explanationRu: 'Нереальное желание о прошлом: Hätte + подлежащее + doch (nur/bloß) … + Partizip II! Отрицание nicht убирается, потому что мы желаем противоположного.',
      },
    ],
  },
  vocab: [
    {
      de: 'Abschluss',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'окончание учёбы, диплом, аттестат',
      example: 'Ohne einen anerkannten Abschluss ist es schwer, eine gut bezahlte Stelle zu finden.',
      exampleRu: 'Без признанного диплома трудно найти хорошо оплачиваемую работу.',
    },
    {
      de: 'Stipendium',
      article: 'das',
      plural: 'die Stipendien',
      pos: 'noun',
      ru: 'стипендия',
      example: 'Dank eines Stipendiums konnte sie ein Jahr in Kanada studieren.',
      exampleRu: 'Благодаря стипендии она смогла год учиться в Канаде.',
    },
    {
      de: 'Nachhilfe',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'репетиторство, дополнительные занятия',
      example: 'Viele Eltern zahlen viel Geld für Nachhilfe in Mathematik.',
      exampleRu: 'Многие родители платят много денег за репетиторов по математике.',
    },
    {
      de: 'Studiengang',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'учебная программа, специальность',
      example: 'Der neue Studiengang verbindet Informatik mit Psychologie.',
      exampleRu: 'Новая специальность объединяет информатику и психологию.',
    },
    {
      de: 'Hochschulreife',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'аттестат, дающий право поступить в вуз',
      example: 'Für dieses Studium braucht man die allgemeine Hochschulreife.',
      exampleRu: 'Для этой учёбы нужен общий аттестат зрелости, дающий право на поступление в вуз.',
    },
    {
      de: 'Leistungsdruck',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'давление ради высоких результатов',
      example: 'Schon in der Grundschule leiden manche Kinder unter enormem Leistungsdruck.',
      exampleRu: 'Уже в начальной школе некоторые дети страдают от огромного давления ради оценок.',
    },
    {
      de: 'Chancengleichheit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'равенство возможностей',
      example: 'Kostenlose Kitas sollen mehr Chancengleichheit schaffen.',
      exampleRu: 'Бесплатные детские сады должны создать больше равенства возможностей.',
    },
    {
      de: 'Bildungssystem',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'система образования',
      example: 'Das deutsche Bildungssystem trennt die Kinder schon sehr früh.',
      exampleRu: 'Немецкая система образования очень рано разделяет детей по разным типам школ.',
    },
    {
      de: 'Lehrkraft',
      article: 'die',
      plural: '-¨e',
      pos: 'noun',
      ru: 'преподаватель, учитель',
      example: 'An vielen Schulen fehlen qualifizierte Lehrkräfte.',
      exampleRu: 'Во многих школах не хватает квалифицированных учителей.',
    },
    {
      de: 'Prüfungsangst',
      article: 'die',
      plural: '-¨e',
      pos: 'noun',
      ru: 'страх перед экзаменами',
      example: 'Gegen ihre Prüfungsangst hat sie einen Kurs an der Uni besucht.',
      exampleRu: 'Чтобы справиться со страхом перед экзаменами, она посещала курс в университете.',
    },
    {
      de: 'abbrechen',
      forms: 'bricht ab, brach ab, hat abgebrochen',
      pos: 'verb',
      ru: 'прерывать, бросать (учёбу)',
      example: 'Fast ein Drittel der Studierenden bricht das Studium vorzeitig ab.',
      exampleRu: 'Почти треть студентов досрочно бросает учёбу.',
    },
    {
      de: 'sich einschreiben',
      forms: 'für + Akk; schreibt sich ein, schrieb sich ein, hat sich eingeschrieben',
      pos: 'verb',
      ru: 'зачисляться, записываться (в вуз, на курс)',
      example: 'Er hat sich für den Masterstudiengang Wirtschaftsinformatik eingeschrieben.',
      exampleRu: 'Он записался на магистерскую программу по экономической информатике.',
    },
    {
      de: 'durchfallen',
      forms: 'durch + Akk; fällt durch, fiel durch, ist durchgefallen',
      pos: 'verb',
      ru: 'провалиться (на экзамене)',
      example: 'Beim ersten Versuch ist er durch die Führerscheinprüfung gefallen.',
      exampleRu: 'С первой попытки он провалил экзамен на права.',
    },
    {
      de: 'fördern',
      forms: 'förderte, hat gefördert',
      pos: 'verb',
      ru: 'поддерживать, способствовать развитию',
      example: 'Die Schule fördert besonders begabte Schülerinnen und Schüler.',
      exampleRu: 'Школа особо поддерживает одарённых учеников.',
    },
    {
      de: 'vermitteln',
      forms: 'vermittelte, hat vermittelt',
      pos: 'verb',
      ru: 'передавать (знания), объяснять',
      example: 'Gute Lehrkräfte vermitteln nicht nur Wissen, sondern auch Neugier.',
      exampleRu: 'Хорошие учителя передают не только знания, но и любознательность.',
    },
    {
      de: 'sich aneignen',
      forms: 'sich (Dat) etw. aneignen; eignet sich an, eignete sich an, hat sich angeeignet',
      pos: 'verb',
      ru: 'усваивать, осваивать',
      example: 'Die Programmierkenntnisse hat sie sich selbst angeeignet.',
      exampleRu: 'Навыки программирования она освоила самостоятельно.',
    },
    {
      de: 'anspruchsvoll',
      pos: 'adj',
      ru: 'сложный, требовательный',
      example: 'Das Medizinstudium gilt als besonders anspruchsvoll.',
      exampleRu: 'Учёба на медицинском считается особенно сложной.',
    },
    {
      de: 'praxisnah',
      pos: 'adj',
      ru: 'практико-ориентированный',
      example: 'An der Fachhochschule ist die Ausbildung praxisnäher als an der Universität.',
      exampleRu: 'В университете прикладных наук обучение более практико-ориентированное, чем в классическом университете.',
    },
    {
      de: 'lebenslanges Lernen',
      pos: 'phrase',
      ru: 'обучение в течение всей жизни',
      example: 'In einer sich schnell verändernden Arbeitswelt ist lebenslanges Lernen unverzichtbar.',
      exampleRu: 'В быстро меняющемся мире труда обучение в течение всей жизни необходимо.',
    },
    {
      de: 'eine Prüfung ablegen',
      forms: 'legt ab, legte ab, hat abgelegt',
      pos: 'phrase',
      ru: 'сдавать экзамен (официально)',
      example: 'Die Teilnehmer legen am Ende des Kurses eine schriftliche Prüfung ab.',
      exampleRu: 'В конце курса участники сдают письменный экзамен.',
    },
  ],
  listening: {
    title: 'Umwege zum Ziel',
    kind: 'dialog',
    text: `A: Sag mal, Jana, bereust du eigentlich, dass du das Studium abgebrochen hast?
B: Ehrlich gesagt nicht. Wenn ich weiter Jura studiert hätte, wäre ich heute wahrscheinlich todunglücklich. Der Leistungsdruck war enorm, und mir hat einfach die Praxis gefehlt.
A: Aber deine Eltern waren damals ziemlich enttäuscht, oder?
B: Oh ja. Mein Vater meinte, ich hätte wenigstens den Bachelor abschließen sollen. Aber ich hatte schon im zweiten Semester Prüfungsangst, und das wurde immer schlimmer.
A: Und dann hast du die Ausbildung zur Mediengestalterin gemacht?
B: Genau. Das war viel praxisnäher. Im Betrieb habe ich mir in drei Jahren mehr angeeignet als an der Uni in zwei. Und jetzt mache ich berufsbegleitend ein Fernstudium, diesmal aus eigenem Interesse.
A: Bei mir war es ja umgekehrt. Ich hätte nach dem Abitur gern eine Ausbildung gemacht, aber alle haben gesagt: Mit deinen Noten musst du studieren.
B: Und? Bist du zufrieden?
A: Teils, teils. Das Studium war anspruchsvoll, aber interessant. Nur hätte ich mich früher um Praktika kümmern müssen. Nach dem Abschluss hatte ich kaum Berufserfahrung und habe fast ein Jahr nach einer Stelle gesucht.
B: Das hätte dir aber auch mit einer Ausbildung passieren können.
A: Vielleicht. Was mich eigentlich ärgert: In der Schule hat uns niemand richtig beraten. Wenn es eine gute Berufsberatung gegeben hätte, hätten wir beide vielleicht anders entschieden.
B: Da hast du recht. Unser Bildungssystem fördert vor allem diejenigen, deren Eltern sich gut auskennen. Mit Chancengleichheit hat das wenig zu tun.
A: Stimmt. Ich wäre ohne meine Tante, die selbst Professorin ist, nie auf die Idee gekommen, mich für ein Stipendium zu bewerben.
B: Siehst du. Na ja, immerhin haben wir beide bewiesen, dass man auch auf Umwegen ans Ziel kommt.
A: Lebenslanges Lernen nennt man das wohl.`,
    questions: [
      {
        question: 'Warum hat Jana ihr Jurastudium abgebrochen?',
        options: [
          'Sie hatte kein Geld mehr für das Studium.',
          'Der Druck war zu hoch, und ihr fehlte die Praxis.',
          'Sie ist durch alle Prüfungen gefallen.',
          'Ihre Eltern wollten es so.',
        ],
        answer: 1,
      },
      {
        question: 'Was hätte sich Janas Vater gewünscht?',
        options: [
          'Dass sie eine Ausbildung macht.',
          'Dass sie ins Ausland geht.',
          'Dass sie zumindest den Bachelor abschließt.',
          'Dass sie das Fach wechselt.',
        ],
        answer: 2,
      },
      {
        question: 'Was macht Jana heute neben ihrem Beruf?',
        options: [
          'Ein Fernstudium.',
          'Eine zweite Ausbildung.',
          'Nachhilfe für Schüler.',
          'Ein Praktikum.',
        ],
        answer: 0,
      },
      {
        question: 'Was bedauert Person A?',
        options: [
          'Dass sie nicht Jura studiert hat.',
          'Dass sie ihr Studium nicht abgebrochen hat.',
          'Dass sie in der Schule schlechte Noten hatte.',
          'Dass sie sich nicht rechtzeitig um Praktika gekümmert hat.',
        ],
        answer: 3,
      },
      {
        question: 'Was meinen beide über das Bildungssystem?',
        options: [
          'Es ist nicht anspruchsvoll genug.',
          'Es hängt stark vom Elternhaus ab, wer gefördert wird.',
          'Es legt zu viel Wert auf praktische Erfahrung.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'В газете вышла статья «Учиться любой ценой? Почему всё больше молодых людей бросают университет». Напишите письмо читателя, в котором вы рассказываете о своём опыте и высказываете мнение.',
    taskDe: 'In einer Zeitung ist der Artikel „Studieren um jeden Preis? Warum immer mehr junge Menschen ihr Studium abbrechen“ erschienen. Schreiben Sie einen Leserbrief.',
    points: [
      'Ihre eigene Bildungsentscheidung nach der Schule',
      'Was Sie rückblickend anders gemacht hätten',
      'Die Rolle von Schule, Eltern und Berufsberatung',
      'Ihre Vorschläge, wie man Studienabbrüche vermeiden könnte',
    ],
    minWords: 170,
    usefulPhrases: [
      'Mit großem Interesse habe ich Ihren Artikel über … gelesen.',
      'Rückblickend hätte ich …',
      'Wenn ich damals gewusst hätte, dass …, hätte ich …',
      'Meiner Ansicht nach sollten Schulen …',
      'Ein weiteres Problem sehe ich darin, dass …',
      'Abschließend möchte ich betonen, dass …',
    ],
  },
  speaking: {
    scenarioRu: 'Вам за тридцать, и вы хотите начать новое обучение (переквалификацию). Вы пришли на консультацию к консультанту по образованию и обсуждаете свой прежний путь и планы.',
    aiRole: 'Sie sind Herr Lorenz, Bildungsberater bei der Volkshochschule. Sie sprechen klares Deutsch auf B2-Niveau, fragen nach dem bisherigen Bildungsweg Ihres Gesprächspartners und danach, was er rückblickend anders gemacht hätte. Hinterfragen Sie seine Pläne kritisch (Kosten, Zeitaufwand, Chancen auf dem Arbeitsmarkt) und bringen Sie Gegenargumente.',
    opener: 'Guten Tag, nehmen Sie doch Platz. Sie haben am Telefon erwähnt, dass Sie sich beruflich neu orientieren möchten. Erzählen Sie doch erst einmal: Wie sah Ihr bisheriger Bildungsweg aus?',
    tasksRu: [
      'Кратко расскажите о своём образовании.',
      'Скажите, что вы сделали бы по-другому (hätte/wäre + Partizip II).',
      'Хотя бы два раза используйте модальный глагол в Konjunktiv II прошедшего времени (hätte … machen sollen/können).',
      'Ответьте на критические вопросы консультанта и обоснуйте свои планы.',
    ],
    readAloud: [
      'Wenn ich nach dem Abitur eine gründliche Berufsberatung bekommen hätte, hätte ich mich wahrscheinlich für einen praxisnäheren Studiengang entschieden.',
      'Rückblickend hätte ich mich viel früher um ein Stipendium bewerben sollen, denn die Lebenshaltungskosten im Ausland waren enorm hoch.',
      'Ohne die Unterstützung meiner Lehrkräfte wäre ich während der Abschlussprüfungen vermutlich an meiner Prüfungsangst gescheitert.',
    ],
  },
};
