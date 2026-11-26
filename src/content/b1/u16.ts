import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-16',
  level: 'B1',
  order: 16,
  title: 'Sport & Vereine',
  titleRu: 'Спорт и клубы',
  goalsRu: [
    'Рассказывать о своих спортивных занятиях, клубах и соревнованиях',
    'Говорить, что вы поручаете сделать другим или что разрешаете: lassen + инфинитив',
    'Выражать отсутствие необходимости: brauchen nicht / nur … zu',
    'Рассказывать о прошлом с модальными глаголами в претерите (konnte, musste, durfte …)',
  ],
  grammar: {
    topic: 'lassen + Infinitiv; brauchen nicht / nur … zu; Modalverben im Präteritum',
    topicRu: 'Глагол lassen с инфинитивом; brauchen nicht / nur … zu; модальные глаголы в претерите',
    explanationRu: `**lassen + инфинитив** имеет два основных значения:

- **поручить, заставить сделать** (делает кто-то другой): Ich **lasse** mein Fahrrad **reparieren**. — Я отдаю велосипед в ремонт (чинит мастер).
- **позволить, не мешать**: Der Trainer **lässt** uns heute früher **gehen**.
- **Lass uns …** = «давай …»: Lass uns zusammen joggen!

Формы: ich lasse, du **lässt**, er **lässt**; претерит — **ließ**. В перфекте вместо gelassen стоит **инфинитив lassen**: Ich habe das Rad reparieren **lassen**. Без второго глагола — обычное gelassen: Ich habe die Tasche im Auto gelassen.

**brauchen + zu + инфинитив** заменяет müssen в отрицании и с «только»:

- **nicht / kein … zu** — не нужно: Du brauchst keine Schuhe mitzubringen (= Du musst keine Schuhe mitbringen).
- **nur … zu** — нужно только: Sie brauchen nur das Formular auszufüllen.

Без nicht/kein/nur такая конструкция не употребляется: «Du musst kommen», а не «Du brauchst zu kommen». У отделяемых глаголов zu стоит внутри: mit**zu**bringen.

**Модальные глаголы в претерите.** О прошлом с модальными глаголами обычно говорят в Präteritum, а не в Perfekt. Суффикс **-te-**, умлаут исчезает: können → **konnte**, müssen → **musste**, dürfen → **durfte**, mögen → **mochte**; wollen → wollte, sollen → sollte. У ich и er/sie/es окончания нет: ich musste, er musste. Прошедшее время для «möchte» — **wollte**.

**Типичные ошибки русскоговорящих:**

- «Ich habe mein Auto repariert», хотя чинил мастер → **Ich habe mein Auto reparieren lassen**.
- «Ich habe die Trikots drucken gelassen» → **drucken lassen**.
- «Du brauchst nicht kommen» — в разговорной речи бывает, но в письме: **nicht zu kommen**.
- Путают умлаут: **ich musste** (я должен был) ≠ ich müsste (я должен был бы); **ich konnte** ≠ ich könnte.
- «Ich möchtete» — такой формы нет, правильно **ich wollte**.`,
    table: [
      ['Инфинитив', 'ich / er, sie, es', 'du', 'wir / sie, Sie', 'ihr'],
      ['können', 'konnte', 'konntest', 'konnten', 'konntet'],
      ['müssen', 'musste', 'musstest', 'mussten', 'musstet'],
      ['dürfen', 'durfte', 'durftest', 'durften', 'durftet'],
      ['wollen', 'wollte', 'wolltest', 'wollten', 'wolltet'],
      ['sollen', 'sollte', 'solltest', 'sollten', 'solltet'],
      ['mögen', 'mochte', 'mochtest', 'mochten', 'mochtet'],
    ],
    examples: [
      { de: 'Unser Verein lässt den alten Fußballplatz neu bauen.', ru: 'Наш клуб заказал полную перестройку старого футбольного поля.' },
      { de: 'Die Trainerin lässt die Kinder am Ende des Trainings frei spielen.', ru: 'Тренер в конце тренировки разрешает детям свободно поиграть.' },
      { de: 'Wir haben für die ganze Mannschaft neue Trikots drucken lassen.', ru: 'Мы заказали печать новых футболок для всей команды.' },
      { de: 'Zum Probetraining brauchen Sie nur Sportkleidung mitzubringen.', ru: 'На пробную тренировку вам нужно принести только спортивную одежду.' },
      { de: 'Früher konnte ich zehn Kilometer ohne Pause laufen.', ru: 'Раньше я мог пробежать десять километров без перерыва.' },
      { de: 'Als Kind wollte ich unbedingt Fußball spielen, aber ich durfte nicht.', ru: 'В детстве я очень хотел играть в футбол, но мне не разрешали.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Der Trainer ___ uns heute früher nach Hause gehen.',
        options: ['lässt', 'lasst', 'lasse', 'lassen'],
        answer: 0,
        explanationRu: 'er/sie/es → lässt (с умлаутом, как fahren → fährt). lasst — форма для ihr.',
      },
      {
        type: 'choice',
        prompt: 'Gestern ___ ich leider nicht zum Training kommen, ich war krank.',
        options: ['konnte', 'könnte', 'kann', 'gekonnt'],
        answer: 0,
        explanationRu: 'Прошлое (gestern) → претерит konnte, без умлаута. könnte — Konjunktiv II («мог бы»).',
      },
      {
        type: 'choice',
        prompt: 'Du ___ keine Sportschuhe mitzubringen, wir haben genug.',
        options: ['brauchst', 'musst', 'sollst', 'darfst'],
        answer: 0,
        explanationRu: 'Инфинитив с zu (mitzubringen) возможен только после brauchen: brauchst keine … mitzubringen = не нужно приносить.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: [
          'Wir haben die Trikots drucken gelassen.',
          'Wir haben die Trikots drucken lassen.',
          'Wir haben die Trikots gedruckt lassen.',
          'Wir haben die Trikots lassen drucken.',
        ],
        answer: 1,
        explanationRu: 'В перфекте с другим инфинитивом lassen не превращается в gelassen: drucken lassen (двойной инфинитив в конце).',
      },
      {
        type: 'gap',
        prompt: 'Als Kind ___ ich jeden Tag Klavier üben, aber ich wollte lieber Fußball spielen.',
        answers: ['musste'],
        hintRu: 'müssen',
        explanationRu: 'Претерит от müssen: ich musste — без умлаута и без окончания в 1-м лице.',
      },
      {
        type: 'gap',
        prompt: 'Für die Anmeldung brauchen Sie nur dieses Formular ___.',
        answers: ['auszufüllen'],
        hintRu: 'ausfüllen',
        explanationRu: 'brauchen nur … zu + инфинитив. У отделяемого глагола zu стоит между приставкой и корнем: auszufüllen.',
      },
      {
        type: 'gap',
        prompt: 'Früher ___ meine Schwester keinen Sport, heute geht sie dreimal pro Woche schwimmen.',
        answers: ['mochte'],
        hintRu: 'mögen',
        explanationRu: 'Претерит от mögen: sie mochte (ö → o, g → ch).',
      },
      {
        type: 'gap',
        prompt: 'Im letzten Sommer ___ der Verein einen neuen Sportplatz bauen.',
        answers: ['ließ'],
        hintRu: 'lassen, претерит',
        explanationRu: 'Претерит от lassen — ließ. Значение: клуб поручил построить площадку (строили другие).',
      },
      {
        type: 'order',
        words: ['Ich', 'lasse', 'meinen', 'Sohn', 'allein', 'zum', 'Training', 'fahren.'],
        translationRu: 'Я разрешаю сыну ездить на тренировку одному.',
        explanationRu: 'lassen на втором месте, инфинитив fahren — в конце предложения.',
      },
      {
        type: 'order',
        words: ['Wegen', 'des', 'Gewitters', 'durften', 'wir', 'nicht', 'draußen', 'trainieren.'],
        translationRu: 'Из-за грозы нам нельзя было тренироваться на улице.',
        explanationRu: 'Претерит durften на втором месте, инфинитив trainieren в конце. Повторение юнита 15: wegen + Genitiv.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените müssen на brauchen … zu.',
        prompt: 'Du musst heute nicht zum Training kommen.',
        answers: ['Du brauchst heute nicht zum Training zu kommen.'],
        explanationRu: 'nicht müssen = nicht brauchen … zu: brauchst … nicht … zu kommen. Инфинитив с zu стоит в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Поставьте предложение в претерит.',
        prompt: 'Ich will Profi werden, aber ich kann nicht genug trainieren.',
        answers: ['Ich wollte Profi werden, aber ich konnte nicht genug trainieren.'],
        explanationRu: 'will → wollte, kann → konnte. Инфинитивы остаются на своих местах в конце.',
      },
    ],
  },
  vocab: [
    { de: 'Sportverein', article: 'der', plural: '-e', pos: 'noun', ru: 'спортивный клуб, спортивное общество', example: 'In Deutschland sind Millionen Menschen Mitglied in einem Sportverein.', exampleRu: 'В Германии миллионы людей состоят в спортивных клубах.' },
    { de: 'Mitgliedsbeitrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'членский взнос', example: 'Der Mitgliedsbeitrag für Jugendliche beträgt zehn Euro im Monat.', exampleRu: 'Членский взнос для подростков составляет десять евро в месяц.' },
    { de: 'Wettkampf', article: 'der', plural: '-¨e', pos: 'noun', ru: 'соревнование', example: 'Vor einem wichtigen Wettkampf kann ich nie gut schlafen.', exampleRu: 'Перед важным соревнованием я никогда не могу хорошо выспаться.' },
    { de: 'Schiedsrichter', article: 'der', plural: '-', pos: 'noun', ru: 'судья (в спорте), арбитр', example: 'Der Schiedsrichter hat das Spiel nach neunzig Minuten beendet.', exampleRu: 'Судья закончил игру через девяносто минут.' },
    { de: 'Sieg', article: 'der', plural: '-e', pos: 'noun', ru: 'победа', example: 'Nach dem Sieg haben die Spieler bis spät in die Nacht gefeiert.', exampleRu: 'После победы игроки праздновали до поздней ночи.' },
    { de: 'Niederlage', article: 'die', plural: '-n', pos: 'noun', ru: 'поражение', example: 'Nach drei Niederlagen ist die Stimmung in der Mannschaft schlecht.', exampleRu: 'После трёх поражений настроение в команде плохое.' },
    { de: 'Unentschieden', article: 'das', plural: '-', pos: 'noun', ru: 'ничья', example: 'Das Spiel endete mit einem Unentschieden: 2 zu 2.', exampleRu: 'Матч закончился вничью: 2:2.' },
    { de: 'Meisterschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'чемпионат', example: 'Unsere Volleyballerinnen haben die Meisterschaft gewonnen.', exampleRu: 'Наши волейболистки выиграли чемпионат.' },
    { de: 'Gegner', article: 'der', plural: '-', pos: 'noun', ru: 'противник, соперник', example: 'Der Gegner war stärker, als wir gedacht hatten.', exampleRu: 'Соперник оказался сильнее, чем мы думали.' },
    { de: 'Ausdauer', article: 'die', plural: '–', pos: 'noun', ru: 'выносливость; упорство', example: 'Für einen Marathon braucht man viel Ausdauer.', exampleRu: 'Для марафона нужна большая выносливость.' },
    { de: 'sich aufwärmen', forms: 'wärmt sich auf, wärmte sich auf, hat sich aufgewärmt', pos: 'verb', ru: 'разминаться', example: 'Vor dem Training wärmen wir uns zehn Minuten auf.', exampleRu: 'Перед тренировкой мы десять минут разминаемся.' },
    { de: 'Muskelkater', article: 'der', plural: '–', pos: 'noun', ru: 'боль в мышцах (после нагрузки)', example: 'Nach dem ersten Training hatte ich drei Tage lang Muskelkater.', exampleRu: 'После первой тренировки у меня три дня болели мышцы.' },
    { de: 'Vorstand', article: 'der', plural: '-¨e', pos: 'noun', ru: 'правление (клуба, организации)', example: 'Der Vorstand des Vereins trifft sich einmal im Monat.', exampleRu: 'Правление клуба собирается раз в месяц.' },
    { de: 'anfeuern', forms: 'feuert an, feuerte an, hat angefeuert', pos: 'verb', ru: 'подбадривать, болеть (за кого-л.)', example: 'Die Eltern feuern ihre Kinder am Spielfeldrand laut an.', exampleRu: 'Родители громко подбадривают детей у кромки поля.' },
    { de: 'Saison', article: 'die', plural: '-s', pos: 'noun', ru: 'сезон', example: 'In dieser Saison hat unser Team noch kein Spiel verloren.', exampleRu: 'В этом сезоне наша команда ещё не проиграла ни одной игры.' },
    { de: 'Teilnehmer', article: 'der', plural: '-', pos: 'noun', ru: 'участник', example: 'Beim Stadtlauf gab es dieses Jahr über 3000 Teilnehmer.', exampleRu: 'В городском забеге в этом году было более 3000 участников.' },
    { de: 'Sportart', article: 'die', plural: '-en', pos: 'noun', ru: 'вид спорта', example: 'Welche Sportart ist in deinem Heimatland am beliebtesten?', exampleRu: 'Какой вид спорта самый популярный в твоей стране?' },
    { de: 'Ehrgeiz', article: 'der', plural: '–', pos: 'noun', ru: 'честолюбие, стремление к успеху', example: 'Mit viel Ehrgeiz hat sie es in die Nationalmannschaft geschafft.', exampleRu: 'Благодаря большому упорству она попала в национальную сборную.' },
    { de: 'Zusammenhalt', article: 'der', plural: '–', pos: 'noun', ru: 'сплочённость', example: 'In unserem kleinen Verein ist der Zusammenhalt besonders groß.', exampleRu: 'В нашем маленьком клубе особенно сильная сплочённость.' },
    { de: 'sich anstrengen', forms: 'strengt sich an, strengte sich an, hat sich angestrengt', pos: 'verb', ru: 'стараться, прилагать усилия', example: 'Wenn wir gewinnen wollen, müssen wir uns mehr anstrengen.', exampleRu: 'Если мы хотим выиграть, нам нужно больше стараться.' },
  ],
  listening: {
    title: 'Jana und der Ruderverein',
    kind: 'dialog',
    text: `A: Hallo Jana! Du siehst ja richtig fit aus. Machst du jetzt Sport?
B: Hi Max! Ja, stell dir vor, ich bin seit drei Monaten im Ruderverein am See.
A: Rudern? Wie bist du denn darauf gekommen?
B: Durch einen Kollegen. Er rudert schon seit Jahren und hat mich zu einem Probetraining mitgenommen. Ich brauchte nur Sportkleidung mitzubringen, die Boote stellt der Verein.
A: Und? War es schwer?
B: Am Anfang schon. In der ersten Woche konnte ich kaum die Arme bewegen, so einen Muskelkater hatte ich. Und ich musste erst mal lernen, im gleichen Rhythmus wie die anderen zu rudern.
A: Ist das nicht teuer?
B: Es geht. Der Mitgliedsbeitrag ist 25 Euro im Monat. Dafür darf ich die Boote benutzen, so oft ich will, und zweimal pro Woche gibt es Training mit einer Trainerin.
A: Klingt gut. Ich wollte früher auch immer in einen Verein, aber wegen meiner Schichtarbeit konnte ich nie regelmäßig zum Training gehen.
B: Bei uns ist das kein Problem. Die Trainerin lässt uns selbst entscheiden, ob wir morgens oder abends kommen. Und am Wochenende gibt es oft Ausflüge oder Feste, der Zusammenhalt ist wirklich toll.
A: Macht ihr auch Wettkämpfe?
B: Die Fortgeschrittenen schon. Im Juni ist eine Regatta, da darf ich aber noch nicht mitfahren. Ich soll erst noch ein paar Monate üben. Aber ich gehe hin und feuere die anderen an.
A: Vielleicht komme ich mal mit zum Probetraining.
B: Gern! Du brauchst dich nur vorher auf der Webseite anzumelden. Wie wäre es mit Samstag um zehn?
A: Abgemacht!`,
    questions: [
      { question: 'Seit wann ist Jana im Ruderverein?', options: ['Seit drei Wochen.', 'Seit drei Monaten.', 'Seit drei Jahren.'], answer: 1 },
      {
        question: 'Wie ist Jana zum Rudern gekommen?',
        options: ['Durch eine Anzeige in der Zeitung.', 'Durch ihre Trainerin.', 'Durch einen Kollegen.'],
        answer: 2,
      },
      {
        question: 'Was war für Jana am Anfang schwierig?',
        options: [
          'Sie konnte nicht schwimmen.',
          'Sie hatte keine passende Sportkleidung.',
          'Der Mitgliedsbeitrag war zu hoch.',
          'Sie hatte starken Muskelkater und musste den Rhythmus lernen.',
        ],
        answer: 3,
      },
      {
        question: 'Warum war Max früher in keinem Verein?',
        options: [
          'Wegen seiner Arbeitszeiten.',
          'Weil er keinen Sport mochte.',
          'Weil die Vereine zu teuer waren.',
        ],
        answer: 0,
      },
      {
        question: 'Was macht Jana bei der Regatta im Juni?',
        options: [
          'Sie fährt im Boot mit.',
          'Sie schaut zu und feuert die anderen an.',
          'Sie organisiert das Fest danach.',
          'Sie ist im Urlaub.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Вы недавно вступили в спортивный клуб. Напишите письмо другу или подруге.',
    taskDe: 'Sie sind seit Kurzem Mitglied in einem Sportverein. Schreiben Sie Ihrem Freund / Ihrer Freundin eine E-Mail.',
    points: [
      'Welcher Verein und warum Sie eingetreten sind',
      'Was Sie dort machen und wie das erste Training war',
      'Laden Sie Ihren Freund / Ihre Freundin zu einem Probetraining ein und sagen Sie, was er/sie mitbringen muss (oder nicht mitzubringen braucht).',
    ],
    minWords: 80,
    usefulPhrases: [
      'Liebe Sabine, / Lieber Paul,',
      'stell dir vor, ich bin jetzt Mitglied im …',
      'Am Anfang konnte ich kaum …, und ich musste …',
      'Die Trainerin lässt uns …',
      'Du brauchst nur … mitzubringen. / Du brauchst keine … mitzubringen.',
      'Hast du Lust, nächsten Samstag mitzukommen? Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы хотите вступить в спортивный клуб и звоните в его офис. Узнайте о пробной тренировке, взносах и о том, что нужно принести. Расскажите о своём спортивном опыте.',
    aiRole:
      'Sie sind Frau Keller und arbeiten ehrenamtlich im Büro des Sportvereins „TSV Grün-Weiß“. Der Verein bietet Fußball, Volleyball, Schwimmen und Lauftreffs an. Ein Interessent ruft an. Beantworten Sie Fragen zu Probetraining, Mitgliedsbeitrag (Erwachsene 18 Euro im Monat) und Ausrüstung, und fragen Sie, welchen Sport die Person früher gemacht hat und warum sie aufgehört hat. Sprechen Sie freundlich auf B1-Niveau.',
    opener: 'TSV Grün-Weiß, Keller am Apparat. Guten Tag! Was kann ich für Sie tun?',
    tasksRu: [
      'Спросите о пробной тренировке и о том, что нужно принести (Muss ich … mitbringen?).',
      'Узнайте размер членского взноса и как можно записаться.',
      'Расскажите о спорте в прошлом с модальными глаголами в претерите (Früher konnte/musste/durfte ich …).',
      'Используйте lassen или brauchen … zu хотя бы один раз.',
    ],
    readAloud: [
      'Zum Probetraining brauchen Sie nur Sportschuhe mitzubringen.',
      'Als Kind durfte ich nicht in den Verein eintreten, weil ich zu jung war.',
      'Unser Trainer lässt uns am Ende des Trainings oft frei spielen.',
    ],
  },
};
