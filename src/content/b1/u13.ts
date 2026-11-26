import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-13',
  level: 'B1',
  order: 13,
  title: 'Schule & Weiterbildung',
  titleRu: 'Школа и повышение квалификации',
  goalsRu: [
    'Рассказывать о школе, учёбе, курсах и повышении квалификации',
    'Говорить о планах, давать обещания и высказывать предположения с помощью Futur I',
    'Различать функции глагола werden: «становиться», будущее время, пассив, würde',
    'Записываться на курс и писать другу о своих учебных планах',
  ],
  grammar: {
    topic: 'Futur I; die Funktionen von „werden“',
    topicRu: 'Будущее время Futur I; функции глагола werden',
    explanationRu: `**Futur I** = спрягаемый **werden** (2-е место) + **инфинитив** (в самом конце):

- Ich **werde** im Herbst einen Kurs **machen**.
- В придаточном werden уходит в конец: …, dass ich den Kurs **machen werde**.

Спряжение: ich werde, du **wirst**, er/sie **wird**, wir werden, ihr werdet, sie/Sie werden.

**Когда нужен Futur I?** В немецком о будущем чаще говорят в **Präsens** с указанием времени: «Morgen **schreibe** ich die Klassenarbeit». Futur I используют:

- для **планов и решений**, особенно без указания времени: Ich **werde** Medizin **studieren**.
- для **обещаний**: Ich **werde** dir **helfen**, versprochen!
- для **предположений** о настоящем (часто с wohl, sicher, wahrscheinlich): Er ist nicht da. Er **wird wohl krank sein**. — Он, наверное, болен.
- для **прогнозов**: Morgen **wird** es **regnen**.

**Четыре функции werden:**

- **werden** + существительное/прилагательное = «становиться»: Sie **wird** Lehrerin. Es **wird** kalt. Перфект: ist **geworden**.
- **werden + инфинитив** = Futur I.
- **werden + Partizip II** = пассив (юнит 9): Die Tests **werden** **korrigiert**.
- **würde + инфинитив** = Konjunktiv II (юнит 8): Ich **würde** gern **studieren**.

**Типичные ошибки:**

- «Ich **will** morgen lernen» — это не будущее, а «я **хочу**». Будущее: Ich **werde** morgen lernen.
- Инфинитив не в конце: ~~Ich werde lernen jeden Tag~~ → Ich werde jeden Tag **lernen**.
- Русское «буду» не всегда = Futur: «Завтра я буду дома» естественнее сказать «Morgen **bin** ich zu Hause».
- Путают «Er **wird** Arzt» (становится) и «Er **wird** operiert» (его оперируют): смотрите, что стоит в конце — существительное, инфинитив или Partizip II.`,
    table: [
      ['Функция', 'Конструкция', 'Пример'],
      ['«становиться»', 'werden + Nomen/Adjektiv', 'Sie wird Lehrerin. Es wird dunkel.'],
      ['Futur I: план, обещание', 'werden + Infinitiv', 'Ich werde die Prüfung bestehen.'],
      ['Futur I: предположение', 'werden + (wohl) + Infinitiv', 'Er wird wohl noch in der Schule sein.'],
      ['Passiv', 'werden + Partizip II', 'Die Noten werden morgen bekannt gegeben.'],
      ['Konjunktiv II', 'würde + Infinitiv', 'Ich würde gern eine Fortbildung machen.'],
    ],
    examples: [
      { de: 'Nächstes Jahr werde ich eine Fortbildung zur Buchhalterin machen.', ru: 'В следующем году я пройду курс повышения квалификации по бухгалтерии.' },
      { de: 'Keine Sorge, ich werde dir beim Referat helfen.', ru: 'Не волнуйся, я помогу тебе с докладом.' },
      { de: 'Die Lehrerin ist nicht im Klassenzimmer. Sie wird wohl im Lehrerzimmer sein.', ru: 'Учительницы нет в классе. Она, наверное, в учительской.' },
      { de: 'Mein Bruder wird im Sommer Ingenieur.', ru: 'Мой брат летом станет инженером.' },
      { de: 'Die Klassenarbeiten werden bis Freitag korrigiert.', ru: 'Контрольные работы проверят до пятницы.' },
      { de: 'Ich glaube, dass du die Prüfung problemlos bestehen wirst.', ru: 'Я думаю, что ты без проблем сдашь экзамен.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Du ___ sehen: Der Test ist gar nicht so schwer.',
        options: ['werde', 'wirst', 'wird', 'werdet'],
        answer: 1,
        explanationRu: 'Форма werden для du — wirst (с изменением корня, как в wird у er/sie/es).',
      },
      {
        type: 'choice',
        prompt: 'In welchem Satz bedeutet „werden“ „становиться“?',
        options: [
          'Die Prüfungen werden im Juni geschrieben.',
          'Meine Schwester wird nächstes Jahr Lehrerin.',
          'Wir werden im Sommer einen Sprachkurs machen.',
          'Ich würde gern Medizin studieren.',
        ],
        answer: 1,
        explanationRu: 'werden + существительное (Lehrerin) = «становиться». В остальных: пассив (+ Partizip II), Futur I (+ инфинитив), Konjunktiv II (würde).',
      },
      {
        type: 'choice',
        prompt: 'Paul ist heute nicht im Unterricht. Er ___ wohl krank sein.',
        options: ['ist', 'hat', 'wird', 'will'],
        answer: 2,
        explanationRu: 'Предположение о настоящем: werden + wohl + инфинитив (sein в конце) → Er wird wohl krank sein.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: [
          'Ich werde nächstes Jahr studieren Informatik.',
          'Ich werde studieren nächstes Jahr Informatik.',
          'Ich werde nächstes Jahr Informatik studieren.',
        ],
        answer: 2,
        explanationRu: 'Рамочная конструкция: werde на 2-м месте, инфинитив studieren — в самом конце предложения.',
      },
      {
        type: 'gap',
        prompt: 'Keine Angst, ich ___ dich nach der Prüfung abholen.',
        answers: ['werde'],
        hintRu: 'werden',
        explanationRu: 'Обещание → Futur I: ich werde + инфинитив (abholen) в конце.',
      },
      {
        type: 'gap',
        prompt: 'Ich bin sicher, dass ihr die Prüfung ___ werdet.',
        answers: ['bestehen'],
        hintRu: 'сдать (экзамен)',
        explanationRu: 'В придаточном с dass werden стоит в самом конце, инфинитив — перед ним: bestehen werdet.',
      },
      {
        type: 'gap',
        prompt: 'Nach der Weiterbildung ist sie Teamleiterin ___.',
        answers: ['geworden'],
        hintRu: 'werden, Perfekt',
        explanationRu: 'werden в значении «становиться» в перфекте: ist … geworden (со вспомогательным sein).',
      },
      {
        type: 'gap',
        prompt: 'Die Klassenarbeiten ___ vom Lehrer bis Freitag korrigiert.',
        answers: ['werden'],
        explanationRu: 'Пассив: werden + Partizip II (korrigiert). Подлежащее во множественном числе → werden.',
      },
      {
        type: 'order',
        words: ['Wir', 'werden', 'im', 'Herbst', 'einen', 'Sprachkurs', 'besuchen.'],
        translationRu: 'Осенью мы будем ходить на языковые курсы.',
        explanationRu: 'werden на втором месте, инфинитив besuchen закрывает рамку в конце предложения.',
      },
      {
        type: 'order',
        words: ['Ich', 'verspreche', 'dir,', 'dass', 'ich', 'jeden', 'Tag', 'lernen', 'werde.'],
        translationRu: 'Обещаю тебе, что буду учиться каждый день.',
        explanationRu: 'В придаточном с dass порядок «инфинитив + werden» в самом конце: lernen werde.',
      },
      {
        type: 'transform',
        instructionRu: 'Переделайте предложение в Futur I.',
        prompt: 'Mein Sohn macht nächstes Jahr das Abitur.',
        answers: ['Mein Sohn wird nächstes Jahr das Abitur machen.', 'Nächstes Jahr wird mein Sohn das Abitur machen.'],
        explanationRu: 'Спрягаемый глагол заменяется на wird, а macht превращается в инфинитив machen в конце предложения.',
      },
      {
        type: 'transform',
        instructionRu: 'Выразите предположение с помощью Futur I и wohl.',
        prompt: 'Vermutlich ist die Lehrerin noch im Lehrerzimmer.',
        answers: [
          'Die Lehrerin wird wohl noch im Lehrerzimmer sein.',
          'Die Lehrerin wird noch im Lehrerzimmer sein.',
          'Sie wird wohl noch im Lehrerzimmer sein.',
        ],
        explanationRu: 'Предположение о настоящем: wird + wohl + инфинитив sein в конце. Слово vermutlich заменяется на wohl.',
      },
    ],
  },
  vocab: [
    { de: 'Fortbildung', article: 'die', plural: '-en', pos: 'noun', ru: 'повышение квалификации (в своей профессии)', example: 'Die Firma bezahlt jedem Mitarbeiter eine Fortbildung pro Jahr.', exampleRu: 'Фирма оплачивает каждому сотруднику одно повышение квалификации в год.' },
    { de: 'Note', article: 'die', plural: '-n', pos: 'noun', ru: 'оценка, отметка', example: 'In Deutschland ist die Eins die beste Note.', exampleRu: 'В Германии единица — лучшая оценка.' },
    { de: 'Stundenplan', article: 'der', plural: '-¨e', pos: 'noun', ru: 'расписание уроков', example: 'Laut Stundenplan haben wir montags zwei Stunden Mathe.', exampleRu: 'По расписанию у нас по понедельникам два урока математики.' },
    { de: 'Klassenarbeit', article: 'die', plural: '-en', pos: 'noun', ru: 'контрольная работа (в школе)', example: 'Morgen schreiben wir eine Klassenarbeit in Deutsch.', exampleRu: 'Завтра мы пишем контрольную по немецкому.' },
    { de: 'Unterricht', article: 'der', plural: '–', pos: 'noun', ru: 'урок, занятия, обучение', example: 'Der Unterricht beginnt um acht Uhr.', exampleRu: 'Занятия начинаются в восемь часов.' },
    { de: 'Referat', article: 'das', plural: '-e', pos: 'noun', ru: 'доклад, реферат', example: 'Nächste Woche werde ich ein Referat über erneuerbare Energien halten.', exampleRu: 'На следующей неделе я буду делать доклад о возобновляемой энергии.' },
    { de: 'Schulabschluss', article: 'der', plural: '-¨e', pos: 'noun', ru: 'аттестат, школьное образование', example: 'Ohne Schulabschluss ist es schwer, eine Ausbildung zu finden.', exampleRu: 'Без аттестата трудно найти место профобучения.' },
    { de: 'Kursgebühr', article: 'die', plural: '-en', pos: 'noun', ru: 'плата за курс', example: 'Die Kursgebühr müssen Sie vor Kursbeginn überweisen.', exampleRu: 'Плату за курс нужно перевести до начала курса.' },
    { de: 'Teilnehmer', article: 'der', plural: '-', pos: 'noun', ru: 'участник (die Teilnehmerin — участница)', example: 'Der Kurs findet nur statt, wenn es mindestens acht Teilnehmer gibt.', exampleRu: 'Курс состоится, только если будет не менее восьми участников.' },
    { de: 'Kenntnisse', article: 'die', plural: '(nur Pl.)', pos: 'noun', ru: 'знания', example: 'Für diese Stelle braucht man gute Englischkenntnisse und Kenntnisse in Excel.', exampleRu: 'Для этой должности нужны хорошее знание английского и знание Excel.' },
    { de: 'Einstufungstest', article: 'der', plural: '-s', pos: 'noun', ru: 'тест на определение уровня', example: 'Vor dem Sprachkurs muss man einen Einstufungstest machen.', exampleRu: 'Перед языковым курсом нужно пройти тест на определение уровня.' },
    { de: 'bestehen', forms: 'besteht, bestand, hat bestanden', pos: 'verb', ru: 'сдать, выдержать (экзамен)', example: 'Sie hat die Führerscheinprüfung beim ersten Mal bestanden.', exampleRu: 'Она сдала экзамен на права с первого раза.' },
    { de: 'unterrichten', pos: 'verb', ru: 'преподавать, обучать', example: 'Herr Braun unterrichtet Physik und Chemie.', exampleRu: 'Господин Браун преподаёт физику и химию.' },
    { de: 'teilnehmen', forms: 'an + Dat; nimmt teil, nahm teil, hat teilgenommen', pos: 'verb', ru: 'участвовать', example: 'Ich werde an einem Kurs für Buchhaltung teilnehmen.', exampleRu: 'Я буду участвовать в курсе по бухгалтерии.' },
    { de: 'wiederholen', forms: 'wiederholt, wiederholte, hat wiederholt', pos: 'verb', ru: 'повторять', example: 'Vor der Prüfung wiederhole ich die ganze Grammatik.', exampleRu: 'Перед экзаменом я повторяю всю грамматику.' },
    { de: 'versprechen', forms: 'verspricht, versprach, hat versprochen', pos: 'verb', ru: 'обещать', example: 'Ich verspreche dir, dass ich ab jetzt pünktlich sein werde.', exampleRu: 'Обещаю тебе, что с этого момента буду приходить вовремя.' },
    { de: 'vermuten', pos: 'verb', ru: 'предполагать', example: 'Ich vermute, dass der Kurs schon ausgebucht ist.', exampleRu: 'Я предполагаю, что на курсе уже нет мест.' },
    { de: 'fleißig', pos: 'adj', ru: 'прилежный, старательный', example: 'Wenn du fleißig lernst, wirst du die Prüfung bestimmt bestehen.', exampleRu: 'Если будешь усердно учиться, обязательно сдашь экзамен.' },
    { de: 'berufsbegleitend', pos: 'adj', ru: 'без отрыва от работы (об обучении)', example: 'Sie macht ein berufsbegleitendes Studium an einer Fernuniversität.', exampleRu: 'Она учится без отрыва от работы в заочном университете.' },
    { de: 'mündlich', pos: 'adj', ru: 'устный', example: 'Die mündliche Prüfung dauert etwa fünfzehn Minuten.', exampleRu: 'Устный экзамен длится около пятнадцати минут.' },
  ],
  listening: {
    title: 'Pläne für den Herbst',
    kind: 'dialog',
    text: `A: Hallo Murat! Du siehst aber zufrieden aus.
B: Hallo Lena! Ja, ich habe gute Nachrichten. Ab September werde ich eine Weiterbildung zum Techniker machen.
A: Toll! Neben der Arbeit?
B: Genau, berufsbegleitend. Der Unterricht findet zweimal pro Woche abends statt und dazu jeden zweiten Samstag. Das wird bestimmt anstrengend.
A: Und wie lange dauert das Ganze?
B: Vier Jahre. Aber mein Chef unterstützt mich. Die Firma wird die Hälfte der Kursgebühr bezahlen.
A: Das ist ja großzügig! Und was sagt deine Frau dazu?
B: Sie war zuerst nicht so begeistert. Aber ich habe ihr versprochen, dass ich sonntags nie lernen werde. Der Sonntag gehört der Familie.
A: Gute Idee. Ich mache übrigens auch etwas Neues: Ich werde im Herbst einen Englischkurs an der Volkshochschule besuchen.
B: Englisch? Wofür brauchst du das denn?
A: In meiner Abteilung wird ab nächstem Jahr viel mit Kunden aus Skandinavien gearbeitet, und die Besprechungen werden dann auf Englisch geführt.
B: Verstehe. Musstest du einen Einstufungstest machen?
A: Ja, letzte Woche. Ich komme in den Kurs für Fortgeschrittene. Ich hatte Angst, dass ich alles vergessen habe, aber es war gar nicht so schlimm.
B: Siehst du! Sag mal, wo ist eigentlich Tobias? Er wollte doch auch kommen.
A: Keine Ahnung. Er wird wohl noch im Büro sein. Er arbeitet ja immer bis spät.
B: Oder er hat unser Treffen vergessen. Na, egal. Sollen wir uns in einem Jahr wieder hier treffen und erzählen, wie es läuft?
A: Abgemacht! Und bis dahin wirst du schon ein halber Techniker sein.
B: Hoffentlich! Und du wirst fließend Englisch sprechen.`,
    questions: [
      {
        question: 'Was wird Murat ab September machen?',
        options: ['Eine Ausbildung zum Lehrer', 'Eine Weiterbildung neben der Arbeit', 'Ein Studium in Vollzeit'],
        answer: 1,
      },
      {
        question: 'Wer bezahlt einen Teil der Kursgebühr?',
        options: ['Murats Frau', 'Die Volkshochschule', 'Lenas Abteilung', 'Murats Firma'],
        answer: 3,
      },
      {
        question: 'Was hat Murat seiner Frau versprochen?',
        options: ['Er wird sonntags nicht lernen.', 'Er wird weniger arbeiten.', 'Er wird den Kurs nach einem Jahr beenden.'],
        answer: 0,
      },
      {
        question: 'Warum lernt Lena Englisch?',
        options: [
          'Sie will nach Skandinavien ziehen.',
          'Sie muss eine Prüfung an der Universität machen.',
          'Sie wird Englisch bei der Arbeit brauchen.',
        ],
        answer: 2,
      },
      {
        question: 'Was vermutet Lena über Tobias?',
        options: ['Er ist krank.', 'Er ist noch bei der Arbeit.', 'Er hat keine Lust.'],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Осенью вы начинаете курс повышения квалификации. Напишите письмо другу/подруге (около 80 слов).',
    taskDe: 'Sie werden im Herbst eine Weiterbildung beginnen. Schreiben Sie Ihrem Freund / Ihrer Freundin eine E-Mail.',
    points: [
      'Welche Weiterbildung Sie machen werden und wann',
      'Warum Sie diese Weiterbildung machen',
      'Was sich in Ihrem Alltag ändern wird',
      'Schlagen Sie ein Treffen vor, bevor der Kurs beginnt',
    ],
    minWords: 80,
    usefulPhrases: [
      'Liebe Anna, / Lieber Tom,',
      'stell dir vor: Ab Oktober werde ich …',
      'Ich habe mich dafür entschieden, weil …',
      'Ich werde wohl weniger Zeit haben, denn …',
      'Ich verspreche dir, dass wir uns trotzdem regelmäßig sehen werden.',
      'Hast du Lust, dass wir uns vorher noch treffen? Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы и ваш однокурсник по курсу немецкого через шесть недель сдаёте экзамен B1. Вместе спланируйте подготовку: когда и где встречаться, что повторять, какие материалы использовать (задание 1 экзамена Goethe B1 — «вместе что-то спланировать»).',
    aiRole:
      'Sie sind Jonas, Teilnehmer im selben Deutschkurs wie der Lerner. In sechs Wochen haben Sie beide die B1-Prüfung. Sie planen gemeinsam die Vorbereitung: Termine, Ort, Inhalte (Schreiben, Sprechen, Hören), Materialien. Machen Sie eigene Vorschläge, reagieren Sie auf die Vorschläge des Partners, manchmal auch mit Einwänden (z. B. Sie arbeiten dienstags lange). Benutzen Sie oft Futur I für Pläne und Versprechen. Sprechen Sie natürlich auf B1-Niveau.',
    opener: 'Hallo! Also, in sechs Wochen ist die Prüfung. Ich bin ehrlich gesagt ein bisschen nervös. Wollen wir zusammen lernen? Wann hättest du denn Zeit?',
    tasksRu: [
      'Предложите время и место встреч и договоритесь о компромиссе.',
      'Скажите, что вы будете повторять, используя Futur I (Ich werde … wiederholen).',
      'Дайте обещание (Ich verspreche dir, dass …).',
      'Выскажите предположение с wohl (Das wird wohl …).',
    ],
    readAloud: [
      'Nächstes Jahr werde ich eine berufsbegleitende Fortbildung machen.',
      'Keine Sorge, du wirst die mündliche Prüfung bestimmt bestehen.',
      'Unsere Lehrerin ist nicht da, sie wird wohl noch im Lehrerzimmer sein.',
    ],
  },
};
