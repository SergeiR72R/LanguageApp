import type { UnitMore } from '../../types';

// Extra practice A2 · Unit 05 — Alltag und Haushalt (reflexive Verben)
export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wie fühlst du ___ heute?',
      options: ['mich', 'dich', 'sich', 'euch'],
      answer: 1,
      explanationRu: 'Подлежащее du → dich: Wie fühlst du dich? — Как ты себя чувствуешь?',
    },
    {
      type: 'choice',
      prompt: 'Wir ruhen ___ nach dem Essen aus.',
      options: ['uns', 'euch', 'sich', 'mich'],
      answer: 0,
      explanationRu: 'Подлежащее wir → uns: wir ruhen uns aus.',
    },
    {
      type: 'choice',
      prompt: 'Die Kinder ziehen ___ allein an.',
      options: ['uns', 'euch', 'sich', 'mich'],
      answer: 2,
      explanationRu: 'die Kinder = sie (они) → sich: die Kinder ziehen sich an — дети одеваются.',
    },
    {
      type: 'choice',
      prompt: 'Beeilen Sie ___ bitte, Frau Meyer!',
      options: ['dich', 'euch', 'sich', 'uns'],
      answer: 2,
      explanationRu: 'Вежливая форма Sie → sich: Beeilen Sie sich!',
    },
    {
      type: 'choice',
      audio: 'Ich ziehe mich schnell an.',
      prompt: 'Что делает человек?',
      options: ['Быстро раздевается', 'Быстро одевается', 'Быстро переодевается', 'Быстро умывается'],
      answer: 1,
      explanationRu: 'sich anziehen — одеваться. Раздеваться — sich ausziehen, переодеваться — sich umziehen.',
    },
    {
      type: 'gap',
      prompt: 'Setz ___ doch, Anna!',
      answers: ['dich'],
      explanationRu: 'Повелительное наклонение для du: Setz dich! — Садись!',
    },
    {
      type: 'gap',
      prompt: 'Ich rasiere ___ jeden Morgen.',
      answers: ['mich'],
      hintRu: 'себя (ich)',
      explanationRu: 'Подлежащее ich → mich: ich rasiere mich — я бреюсь.',
    },
    {
      type: 'gap',
      prompt: 'Ihr müsst ___ noch umziehen, wir gehen gleich ins Theater.',
      answers: ['euch'],
      explanationRu: 'Подлежащее ihr → euch: ihr müsst euch umziehen — вам надо переодеться.',
    },
    {
      type: 'gap',
      audio: 'Er fühlt sich heute nicht gut.',
      prompt: 'Напишите пропущенное слово: Er fühlt ___ heute nicht gut.',
      answers: ['sich'],
      explanationRu: 'Для er — sich: er fühlt sich nicht gut — он плохо себя чувствует.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig? („Я учу немецкий.“)',
      options: ['Ich lerne mich Deutsch.', 'Ich lerne Deutsch.', 'Ich lerne sich Deutsch.'],
      answer: 1,
      explanationRu: 'lernen (учить, учиться) — не возвратный глагол, хотя в русском есть «учиться». sich не нужен.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig? („Я отдыхаю.“)',
      options: ['Ich ruhe sich aus.', 'Ich ruhe aus.', 'Ich ruhe mich aus.'],
      answer: 2,
      explanationRu: 'sich ausruhen — возвратный глагол (хотя в русском «отдыхать» без -ся). Для ich — mich.',
    },
    {
      type: 'choice',
      prompt: 'Gestern ___ ich mich sehr beeilt.',
      options: ['bin', 'habe', 'hat', 'war'],
      answer: 1,
      explanationRu: 'Возвратные глаголы образуют перфект с haben: ich habe mich beeilt.',
    },
    {
      type: 'order',
      words: ['Morgens', 'ziehe', 'ich', 'mich', 'schnell', 'an.'],
      translationRu: 'Утром я быстро одеваюсь.',
      explanationRu: 'Morgens на 1-м месте → глагол ziehe, потом ich, потом mich; приставка an — в конце.',
    },
    {
      type: 'order',
      words: ['Wir', 'müssen', 'uns', 'heute', 'beeilen.'],
      translationRu: 'Сегодня нам нужно поторопиться.',
      explanationRu: 'Модальный глагол müssen на 2-м месте, uns сразу после него, инфинитив beeilen — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте предложение в перфект.',
      prompt: 'Die Kinder waschen sich.',
      answers: ['Die Kinder haben sich gewaschen.'],
      explanationRu: 'Перфект с haben: haben sich … gewaschen (waschen → gewaschen).',
    },
    {
      type: 'transform',
      instructionRu: 'Начните предложение со слов «Am Morgen».',
      prompt: 'Ich rasiere mich am Morgen.',
      answers: ['Am Morgen rasiere ich mich.'],
      explanationRu: 'Am Morgen на 1-м месте → глагол на 2-м, потом подлежащее ich и только потом mich.',
    },
    {
      type: 'choice',
      audio: 'Kannst du bitte den Müll rausbringen?',
      prompt: 'О чём просят?',
      options: ['вынести мусор', 'помыть посуду', 'пропылесосить', 'погладить бельё'],
      answer: 0,
      explanationRu: '«den Müll rausbringen» — вынести мусор.',
    },
    {
      type: 'gap',
      prompt: 'Die Waschmaschine steht ___ Bad.',
      answers: ['im', 'in dem'],
      hintRu: 'Повторение: где? + Dativ',
      explanationRu: 'Повторение юнита 4: stehen — «где?» → Dativ: in dem Bad = im Bad.',
    },
    {
      type: 'choice',
      prompt: 'Ich bin müde, ___ ich den ganzen Tag geputzt habe.',
      options: ['denn', 'weil', 'und', 'aber'],
      answer: 1,
      explanationRu: 'Повторение: глагол habe стоит в конце — так бывает только после weil. После denn порядок был бы обычный.',
    },
    {
      type: 'gap',
      prompt: 'Gestern ___ ich keine Zeit, ich musste putzen.',
      answers: ['hatte'],
      hintRu: 'Повторение: претерит от haben',
      explanationRu: 'Gestern — прошлое; haben в претерите для ich — hatte.',
    },
  ],
  reading: [
    {
      title: 'Zettel am Kühlschrank',
      textType: 'Notizen',
      texts: [
        { label: 'a', body: 'Hallo Leon! Ich bin heute bis 19 Uhr bei der Arbeit. Bitte wasch ab und bring den Müll raus. Das Essen steht im Kühlschrank. Kuss, Mama' },
        { label: 'b', body: 'Liebe Mama, ich habe schon abgewaschen. Den Müll bringe ich morgen raus. Ich muss mich beeilen, das Fußballtraining beginnt um vier! Leon' },
        { label: 'c', body: 'An alle: Die Waschmaschine ist kaputt! Der Techniker kommt am Freitag um 10 Uhr. Bitte legt bis Freitag keine Wäsche in die Maschine! Papa' },
        { label: 'd', body: 'Oma kommt am Samstag zu Besuch und freut sich schon sehr. Wer räumt am Freitagabend das Wohnzimmer auf und saugt Staub? Ich kann leider nicht, ich arbeite bis 20 Uhr. Papa' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Zettel. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте записки. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was soll Leon heute machen?', options: ['Kochen und einkaufen', 'Abwaschen und den Müll rausbringen', 'Das Wohnzimmer aufräumen'], answer: 1, explanationRu: 'Записка a: «Bitte wasch ab und bring den Müll raus».' },
            { kind: 'mc', question: 'Was hat Leon heute nicht gemacht?', options: ['Er hat nicht abgewaschen.', 'Er hat nicht Fußball gespielt.', 'Er hat den Müll nicht rausgebracht.'], answer: 2, explanationRu: 'Записка b: посуду он помыл, а мусор вынесет только завтра.' },
            { kind: 'mc', question: 'Wann kommt der Techniker?', options: ['Am Freitag um 10 Uhr', 'Am Samstag', 'Heute um 19 Uhr'], answer: 0, explanationRu: 'Записка c: «Der Techniker kommt am Freitag um 10 Uhr».' },
            { kind: 'mc', question: 'Was möchte Papa für Freitagabend?', options: ['Oma soll kommen.', 'Jemand soll das Wohnzimmer aufräumen.', 'Er möchte Staub saugen.'], answer: 1, explanationRu: 'Записка d: «Wer räumt am Freitagabend das Wohnzimmer auf …?» — сам он работает до 20 часов.' },
          ],
        },
      ],
    },
    {
      title: 'Wer macht bei euch den Haushalt?',
      textType: 'Forumsbeiträge',
      texts: [
        {
          label: 'Marta, 52',
          body: 'Bei uns macht mein Mann fast alles. Er arbeitet seit zwei Jahren nicht mehr und kocht jeden Tag. Ich komme erst um sechs nach Hause. Dann setze ich mich an den Tisch, und das Essen ist fertig. Nur die Wäsche wasche ich selbst, denn mein Mann wäscht alles zusammen – weiß und rot!',
        },
        {
          label: 'Jonas, 24',
          body: 'Ich wohne in einer WG mit drei Leuten. Wir haben einen Putzplan, und jede Woche macht jeder etwas anderes. Diese Woche muss ich das Bad putzen. Das mache ich nicht gern, aber der Plan funktioniert gut. Wir ärgern uns fast nie.',
        },
        {
          label: 'Herr Lehmann, 71',
          body: 'Ich lebe allein. Früher hat meine Frau alles gemacht, und ich konnte nicht mal Kaffee kochen. Heute mache ich alles selbst: Am Montag wasche ich die Wäsche, am Mittwoch sauge ich Staub. Und ich kann jetzt sogar Suppe kochen!',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Forumsbeiträge. Zu welcher Person passt die Aussage?',
          instructionRu: 'Прочитайте сообщения на форуме. К какому человеку подходит утверждение?',
          options: ['Marta', 'Jonas', 'Herr Lehmann'],
          items: [
            { kind: 'match', prompt: 'Diese Person lebt allein.', answer: 2, explanationRu: 'Herr Lehmann: «Ich lebe allein».' },
            { kind: 'match', prompt: 'Bei dieser Person kocht der Partner.', answer: 0, explanationRu: 'Marta: муж готовит каждый день.' },
            { kind: 'match', prompt: 'Diese Person hat einen Plan für die Hausarbeit.', answer: 1, explanationRu: 'Jonas: «Wir haben einen Putzplan».' },
            { kind: 'match', prompt: 'Diese Person wäscht die Wäsche selbst, weil der Partner Fehler macht.', answer: 0, explanationRu: 'Marta: муж стирает всё вместе — белое и красное.' },
            { kind: 'match', prompt: 'Diese Person hat früher nicht im Haushalt gearbeitet.', answer: 2, explanationRu: 'Herr Lehmann: раньше всё делала жена, он не умел даже сварить кофе.' },
            { kind: 'match', prompt: 'Diese Person putzt diese Woche das Bad.', answer: 1, explanationRu: 'Jonas: «Diese Woche muss ich das Bad putzen».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht von Paula',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf der Mailbox.',
      text: `Hallo Sven, hier ist Paula. Du, heute Abend gehen wir doch zu Mias Geburtstag. Wir treffen uns um halb acht vor dem Restaurant „Adler“, nicht um acht! Bitte beeil dich nach der Arbeit. Du musst dich nicht umziehen, Mia sagt, Jeans sind okay. Und noch etwas: Ich habe das Geschenk schon gekauft, ein Buch. Es kostet zwanzig Euro, also zahlst du zehn Euro. Mia freut sich bestimmt sehr. Bis später!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann treffen sich Paula und Sven?', options: ['Um 19:30 Uhr', 'Um 20:00 Uhr', 'Um 19:00 Uhr'], answer: 0, explanationRu: '«um halb acht» = 19:30, «nicht um acht».' },
            { kind: 'mc', question: 'Was soll Sven anziehen?', options: ['Einen Anzug', 'Jeans sind okay.', 'Er muss sich umziehen.'], answer: 1, explanationRu: '«Du musst dich nicht umziehen, … Jeans sind okay».' },
            { kind: 'mc', question: 'Wie viel bezahlt Sven für das Geschenk?', options: ['20 Euro', '30 Euro', '10 Euro'], answer: 2, explanationRu: 'Книга стоит 20 евро, Свен платит половину — 10 евро.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Paula hat das Geschenk schon gekauft.', answer: true, explanationRu: '«Ich habe das Geschenk schon gekauft, ein Buch».' },
          ],
        },
      ],
    },
    {
      title: 'Wir brauchen einen Putzplan',
      kind: 'dialog',
      speakers: { A: 'Nina', B: 'Kai' },
      situation: 'Nina und Kai wohnen zusammen. Sie hören ein Gespräch in der Küche.',
      text: `A: Kai, die Küche ist so schmutzig! Wer hat denn gestern gekocht?
B: Ich. Tut mir leid, ich hatte keine Zeit zum Abwaschen. Ich musste mich beeilen, mein Zug ist um acht gefahren.
A: Hm. Und der Müll? Der steht schon seit drei Tagen im Flur.
B: Ja, ich weiß. Ich bringe ihn gleich raus. Versprochen!
A: Okay. Ich glaube, wir brauchen einen Putzplan. Ich ärgere mich jede Woche, weil die Küche schmutzig ist.
B: Gute Idee. Ich kann gut staubsaugen und das Bad putzen.
A: Gut, dann wasche ich die Wäsche und putze die Küche. Und das Abwaschen?
B: Das machen wir zusammen, jeden Abend nach dem Essen.
A: Einverstanden. Und am Samstag ruhen wir uns aus!
B: Super. Und jetzt bringe ich den Müll raus.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Kai hat gestern nicht abgewaschen.', answer: true, explanationRu: '«ich hatte keine Zeit zum Abwaschen» — он торопился на поезд.' },
            { kind: 'tf', statement: 'Der Müll steht seit gestern im Flur.', answer: false, explanationRu: 'Мусор стоит в коридоре уже три дня: «seit drei Tagen».' },
            { kind: 'tf', statement: 'Kai putzt in Zukunft das Bad.', answer: true, explanationRu: '«Ich kann gut staubsaugen und das Bad putzen».' },
            { kind: 'tf', statement: 'Nina wäscht die Wäsche.', answer: true, explanationRu: '«dann wasche ich die Wäsche und putze die Küche» — говорит Нина.' },
            { kind: 'tf', statement: 'Das Abwaschen macht nur Nina.', answer: false, explanationRu: 'Посуду они будут мыть вместе: «Das machen wir zusammen».' },
          ],
        },
      ],
    },
  ],
};
