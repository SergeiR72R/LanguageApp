import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-09',
  level: 'A2',
  order: 9,
  title: 'Gesundheit',
  titleRu: 'Здоровье',
  goalsRu: [
    'Записываться к врачу, описывать симптомы и понимать советы врача',
    'Понимать инструкции в аптеке (wie oft? wann?)',
    'Сообщать на работу, что вы заболели (Krankmeldung)',
    'Говорить «Ich glaube, dass …» и правильно употреблять helfen, danken, gefallen, gehören, schmecken, passen с дательным падежом',
  ],
  grammar: {
    topic: 'Nebensätze mit dass; Verben mit Dativ',
    topicRu: 'Придаточные с dass; глаголы с дательным падежом',
    explanationRu: `**Часть 1. Придаточное предложение с dass («что»)**

**dass** — союз, как weil (юнит 3). После dass спрягаемый глагол уходит **в самый конец**. Перед dass всегда **запятая**.

- Der Arzt sagt: «Ich **muss** im Bett bleiben.»
- Der Arzt sagt, **dass** ich im Bett bleiben **muss**.

Так часто начинают предложения: Ich glaube, dass … / Ich denke, dass … / Ich hoffe, dass … / Ich weiß, dass … / Es ist wichtig, dass …

- Ich glaube, dass ich Fieber **habe**.
- Ich hoffe, dass es dir bald besser **geht**.

Модальный глагол — в самом конце: …, dass ich nicht arbeiten **kann**. Отделяемый глагол в конце пишется слитно: …, dass er die Tabletten **einnimmt**. В перфекте последним стоит haben/sein: …, dass ich beim Arzt **gewesen bin**.

Внимание: **dass** (союз «что») пишется с двумя s, а **das** — артикль или «это».

**Часть 2. Глаголы с дательным падежом (Dativ)**

Некоторые немецкие глаголы требуют Dativ («кому?»), хотя в русском падеж бывает другой:

- **helfen** — помогать: Ich helfe **dir**. Die Ärztin hilft **dem** Patienten.
- **danken** — благодарить (по-русски «кого», но по-немецки Dativ!): Ich danke **Ihnen**.
- **gefallen** — нравиться: Die Praxis gefällt **mir**.
- **schmecken** — быть по вкусу: Der Tee schmeckt **ihm** nicht.
- **gehören** — принадлежать: Die Tasche gehört **der** Frau.
- **passen** — подходить: Passt **Ihnen** der Termin um 10 Uhr?

Дательные местоимения — в таблице. Артикли в Dativ: **dem** (der/das), **der** (die), **den** + -n (множественное число).

**Типичные ошибки:**
- «Ich danke dich» → **Ich danke dir**
- «Ich helfe meine Mutter» → **Ich helfe meiner Mutter**
- «…, dass ich bin krank» → **…, dass ich krank bin**
- нет запятой перед dass`,
    table: [
      ['Nominativ', 'Dativ', 'Beispiel'],
      ['ich', 'mir', 'Kannst du mir helfen?'],
      ['du', 'dir', 'Ich danke dir.'],
      ['er / es', 'ihm', 'Das Essen schmeckt ihm.'],
      ['sie', 'ihr', 'Die Tasche gehört ihr.'],
      ['wir', 'uns', 'Der Arzt hilft uns.'],
      ['ihr', 'euch', 'Gefällt euch die Wohnung?'],
      ['sie / Sie', 'ihnen / Ihnen', 'Passt Ihnen der Termin?'],
    ],
    examples: [
      { de: 'Der Arzt sagt, dass ich drei Tage zu Hause bleiben soll.', ru: 'Врач говорит, что мне нужно три дня побыть дома.' },
      { de: 'Ich glaube, dass ich eine Erkältung habe.', ru: 'Мне кажется, что у меня простуда.' },
      { de: 'Es ist wichtig, dass Sie viel trinken.', ru: 'Важно, чтобы вы много пили.' },
      { de: 'Können Sie mir bitte helfen?', ru: 'Не могли бы вы мне помочь?' },
      { de: 'Vielen Dank, Frau Doktor, ich danke Ihnen!', ru: 'Большое спасибо, доктор, благодарю вас!' },
      { de: 'Gehört die Versichertenkarte Ihnen?', ru: 'Это ваша карточка медицинской страховки?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich glaube, dass ich Fieber ___.',
        options: ['habe', 'hat', 'haben', 'gehabt'],
        answer: 0,
        explanationRu: 'После dass спрягаемый глагол стоит в конце и согласуется с ich: ich habe.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: [
          'Der Arzt sagt, dass ich viel schlafen soll.',
          'Der Arzt sagt, dass ich soll viel schlafen.',
          'Der Arzt sagt, dass soll ich viel schlafen.',
        ],
        answer: 0,
        explanationRu: 'В придаточном с dass спрягаемый глагол (soll) уходит в самый конец, после инфинитива: …, dass ich viel schlafen soll.',
      },
      {
        type: 'choice',
        prompt: 'Kannst du ___ bitte helfen?',
        options: ['mir', 'mich', 'ich', 'mein'],
        answer: 0,
        explanationRu: 'helfen требует Dativ: помочь кому? — mir (не mich!).',
      },
      {
        type: 'choice',
        prompt: 'Ich danke ___ für Ihre Hilfe, Herr Doktor.',
        options: ['Ihnen', 'Sie', 'Ihr', 'Ihren'],
        answer: 0,
        explanationRu: 'danken требует Dativ. Вежливое Sie в Dativ — Ihnen. По-русски «благодарю вас», но по-немецки не Sie!',
      },
      {
        type: 'choice',
        audio: 'Die Ärztin sagt, dass ich nicht arbeiten darf.',
        prompt: 'Что, по словам врача, человеку нельзя делать?',
        options: ['arbeiten', 'schlafen', 'Tee trinken', 'spazieren gehen'],
        answer: 0,
        explanationRu: 'Вы слышите: «dass ich nicht arbeiten darf» — ему нельзя работать.',
      },
      {
        type: 'gap',
        prompt: 'Der Tee schmeckt ___ nicht.',
        answers: ['ihm'],
        hintRu: 'er',
        explanationRu: 'schmecken + Dativ. er в Dativ — ihm: Der Tee schmeckt ihm nicht.',
      },
      {
        type: 'gap',
        prompt: 'Gehört das Handy ___?',
        answers: ['dir'],
        hintRu: 'du',
        explanationRu: 'gehören + Dativ. du в Dativ — dir: Gehört das Handy dir? (= Это твой телефон?)',
      },
      {
        type: 'gap',
        prompt: 'Ich hoffe, ___ du bald wieder gesund bist.',
        answers: ['dass'],
        explanationRu: 'Союз dass («что») вводит придаточное: глагол bist стоит в конце. Пишется с двумя s.',
      },
      {
        type: 'gap',
        prompt: 'Passt ___ der Termin am Montag um 9 Uhr?',
        answers: ['Ihnen'],
        hintRu: 'Sie (вежливо)',
        explanationRu: 'passen + Dativ. Вежливое Sie в Dativ — Ihnen: Passt Ihnen der Termin?',
      },
      {
        type: 'gap',
        audio: 'Ich habe Halsschmerzen und Husten.',
        prompt: 'Что болит у человека? Напишите слово: Ich habe ___ und Husten.',
        answers: ['Halsschmerzen'],
        explanationRu: 'Вы слышите «Halsschmerzen» — боль в горле (der Hals + die Schmerzen).',
      },
      {
        type: 'order',
        words: ['Ich', 'weiß,', 'dass', 'Rauchen', 'ungesund', 'ist.'],
        translationRu: 'Я знаю, что курить вредно.',
        explanationRu: 'Главное предложение «Ich weiß,», затем dass, подлежащее (Rauchen) и в самом конце глагол ist.',
      },
      {
        type: 'transform',
        instructionRu: 'Перескажите слова врача. Начните с «Der Arzt sagt, dass …».',
        prompt: 'Ich muss viel Wasser trinken.',
        answers: ['Der Arzt sagt, dass ich viel Wasser trinken muss.', 'Der Arzt sagt, dass ich viel Wasser trinken muss'],
        explanationRu: 'После dass модальный глагол muss уходит в самый конец, после инфинитива trinken.',
      },
    ],
  },
  vocab: [
    { de: 'Krankmeldung', article: 'die', plural: '-en', pos: 'noun', ru: 'больничный лист; сообщение о болезни', example: 'Ich schicke meinem Chef die Krankmeldung.', exampleRu: 'Я посылаю начальнику больничный.', pronRu: 'ди КРАНК-мэль-дунг' },
    { de: 'krankschreiben', forms: 'schreibt krank, hat krankgeschrieben', pos: 'verb', ru: 'выписать больничный', example: 'Die Ärztin hat mich drei Tage krankgeschrieben.', exampleRu: 'Врач дала мне больничный на три дня.', pronRu: 'КРАНК-шрай-бэн' },
    { de: 'Hausarzt', article: 'der', plural: '-¨e', pos: 'noun', ru: 'семейный врач, терапевт', example: 'Mein Hausarzt ist sehr nett.', exampleRu: 'Мой семейный врач очень приятный.', pronRu: 'дер ХАУС-арцт' },
    { de: 'Patient', article: 'der', plural: '-en', pos: 'noun', ru: 'пациент', example: 'Im Wartezimmer sitzen viele Patienten.', exampleRu: 'В приёмной сидит много пациентов.', pronRu: 'дер па-ЦЬЕНТ' },
    { de: 'untersuchen', forms: 'untersucht, hat untersucht', pos: 'verb', ru: 'осматривать, обследовать', example: 'Der Arzt untersucht meinen Hals.', exampleRu: 'Врач осматривает моё горло.', pronRu: 'ун-та-ЗУ:-хэн' },
    { de: 'Erkältung', article: 'die', plural: '-en', pos: 'noun', ru: 'простуда', example: 'Ich glaube, dass ich eine Erkältung habe.', exampleRu: 'Мне кажется, у меня простуда.', pronRu: 'ди эр-КЭЛЬ-тунг' },
    { de: 'sich erkälten', forms: 'erkältet sich, hat sich erkältet', pos: 'verb', ru: 'простудиться', example: 'Zieh eine Jacke an, sonst erkältest du dich!', exampleRu: 'Надень куртку, а то простудишься!', pronRu: 'зихь эр-КЭЛЬ-тэн' },
    { de: 'schwindlig', pos: 'adj', ru: 'испытывающий головокружение', example: 'Mir ist schwindlig.', exampleRu: 'У меня кружится голова.', pronRu: 'ШВИНД-лихь' },
    { de: 'Schmerzmittel', article: 'das', plural: '-', pos: 'noun', ru: 'обезболивающее', example: 'Nehmen Sie das Schmerzmittel nur nach dem Essen.', exampleRu: 'Принимайте обезболивающее только после еды.', pronRu: 'дас ШМЕРЦ-ми-тэль' },
    { de: 'Hustensaft', article: 'der', plural: '-¨e', pos: 'noun', ru: 'сироп от кашля', example: 'Der Hustensaft schmeckt mir nicht.', exampleRu: 'Сироп от кашля мне не нравится на вкус.', pronRu: 'дер ХУ:С-тэн-зафт' },
    { de: 'Salbe', article: 'die', plural: '-n', pos: 'noun', ru: 'мазь', example: 'Die Salbe hilft gegen die Schmerzen.', exampleRu: 'Мазь помогает от боли.', pronRu: 'ди ЗАЛЬ-бэ' },
    { de: 'Tropfen', article: 'der', plural: '-', pos: 'noun', ru: 'капля; капли (лекарство)', example: 'Nehmen Sie dreimal am Tag zehn Tropfen.', exampleRu: 'Принимайте по десять капель три раза в день.', pronRu: 'дер ТРОП-фэн' },
    { de: 'einnehmen', forms: 'nimmt ein, hat eingenommen', pos: 'verb', ru: 'принимать (лекарство)', example: 'Wie oft soll ich die Tabletten einnehmen?', exampleRu: 'Как часто мне принимать таблетки?', pronRu: 'АЙН-не:-мэн' },
    { de: 'verschreiben', forms: 'verschreibt, hat verschrieben', pos: 'verb', ru: 'выписать (лекарство)', example: 'Die Ärztin verschreibt mir ein Medikament.', exampleRu: 'Врач выписывает мне лекарство.', pronRu: 'фер-ШРАЙ-бэн' },
    { de: 'Überweisung', article: 'die', plural: '-en', pos: 'noun', ru: 'направление (к другому врачу)', example: 'Für den Augenarzt brauchen Sie eine Überweisung.', exampleRu: 'К окулисту вам нужно направление.', pronRu: 'ди ю:-ба-ВАЙ-зунг' },
    { de: 'sich verletzen', forms: 'verletzt sich, hat sich verletzt', pos: 'verb', ru: 'пораниться, получить травму', example: 'Er hat sich beim Fußball am Knie verletzt.', exampleRu: 'Он повредил колено, играя в футбол.', pronRu: 'зихь фер-ЛЕ-цэн' },
    { de: 'Notfall', article: 'der', plural: '-¨e', pos: 'noun', ru: 'экстренный случай', example: 'Im Notfall rufen Sie die 112 an.', exampleRu: 'В экстренном случае звоните по номеру 112.', pronRu: 'дер НО:Т-фаль' },
    { de: 'Notaufnahme', article: 'die', plural: '-n', pos: 'noun', ru: 'приёмный покой, отделение неотложной помощи', example: 'Nachts ist nur die Notaufnahme im Krankenhaus offen.', exampleRu: 'Ночью в больнице работает только приёмный покой.', pronRu: 'ди НО:Т-ауф-на:-мэ' },
    { de: 'Allergie', article: 'die', plural: '-n', pos: 'noun', ru: 'аллергия', example: 'Haben Sie eine Allergie?', exampleRu: 'У вас есть аллергия?', pronRu: 'ди а-лер-ГИ:' },
    { de: 'Krankenversicherung', article: 'die', plural: '-en', pos: 'noun', ru: 'медицинская страховка', example: 'In Deutschland braucht jeder eine Krankenversicherung.', exampleRu: 'В Германии каждому нужна медицинская страховка.', pronRu: 'ди КРАН-кэн-фер-зи-хэ-рунг' },
  ],
  listening: {
    title: 'Beim Hausarzt',
    kind: 'dialog',
    text: `A: Guten Morgen, Herr Petrow. Was fehlt Ihnen denn?
B: Guten Morgen, Frau Doktor. Ich habe seit drei Tagen Husten und Halsschmerzen. Und heute Nacht hatte ich Fieber.
A: Wie hoch war das Fieber?
B: Achtunddreißig Komma fünf.
A: Gut, ich untersuche Sie jetzt. Machen Sie bitte den Mund auf. So … Ich glaube, dass Sie eine starke Erkältung haben. Zum Glück ist es keine Grippe.
B: Muss ich Tabletten nehmen?
A: Ich verschreibe Ihnen einen Hustensaft. Nehmen Sie ihn dreimal am Tag nach dem Essen. Und es ist wichtig, dass Sie viel trinken, am besten warmen Tee.
B: Kann ich morgen wieder arbeiten?
A: Nein, Sie bleiben bis Freitag zu Hause. Ich schreibe Sie krank. Hier ist die Krankmeldung für Ihren Arbeitgeber.
B: Vielen Dank, ich danke Ihnen.
A: Gern. Kommen Sie am Freitag noch einmal in die Sprechstunde. Gute Besserung!`,
    questions: [
      { question: 'Seit wann ist Herr Petrow krank?', options: ['Seit gestern.', 'Seit drei Tagen.', 'Seit einer Woche.'], answer: 1 },
      { question: 'Was hat Herr Petrow?', options: ['Eine Grippe.', 'Eine starke Erkältung.', 'Bauchschmerzen.'], answer: 1 },
      { question: 'Wie oft soll er den Hustensaft nehmen?', options: ['Einmal am Tag.', 'Zweimal am Tag.', 'Dreimal am Tag.'], answer: 2 },
      { question: 'Was soll er viel trinken?', options: ['Warmen Tee.', 'Kaltes Wasser.', 'Orangensaft.'], answer: 0 },
      { question: 'Bis wann bleibt er zu Hause?', options: ['Bis Mittwoch.', 'Bis Freitag.', 'Bis Montag.'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'Вы заболели и не можете прийти на работу. Напишите письмо начальнице, госпоже Бергер (Frau Berger): что с вами, что сказал врач (используйте dass: «Der Arzt sagt, dass …») и когда вы вернётесь на работу. Пишите вежливо: Sehr geehrte Frau Berger, … Mit freundlichen Grüßen.',
    taskDe: 'Sie sind krank und können nicht zur Arbeit kommen. Schreiben Sie eine E-Mail an Ihre Chefin, Frau Berger.',
    points: [
      'Was haben Sie? Warum können Sie nicht kommen?',
      'Was hat der Arzt gesagt?',
      'Wann kommen Sie wieder zur Arbeit?',
    ],
    minWords: 45,
    usefulPhrases: [
      'Sehr geehrte Frau Berger,',
      'leider kann ich heute nicht zur Arbeit kommen.',
      'Ich habe hohes Fieber und Husten.',
      'Der Arzt sagt, dass ich bis … zu Hause bleiben muss.',
      'Die Krankmeldung schicke ich Ihnen per Post.',
      'Ich hoffe, dass ich am … wieder arbeiten kann.',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы звоните в практику доктора Хоффманна, чтобы записаться на приём. Медицинская помощница спрашивает, что у вас болит, с какого времени и когда вам удобно прийти.',
    aiRole:
      'Sie sind Frau Schulz, medizinische Fachangestellte in der Praxis von Dr. Hoffmann in Bremen. Ein Patient ruft an und möchte einen Termin. Er lernt Deutsch (Niveau A2). Sprechen Sie langsam, freundlich und in kurzen, einfachen Sätzen. Fragen Sie: Was fehlt Ihnen? Seit wann? Haben Sie Fieber? Waren Sie schon einmal bei uns? Schlagen Sie einen Termin vor (zum Beispiel morgen um 9.30 Uhr) und fragen Sie: „Passt Ihnen das?“ Sagen Sie am Ende, dass er die Versichertenkarte mitbringen soll. Stellen Sie immer nur eine Frage. Wenn der Patient nicht weiterweiß, helfen Sie mit einem einfachen Vorschlag.',
    opener: 'Praxis Dr. Hoffmann, Schulz am Apparat. Guten Tag! Was kann ich für Sie tun?',
    tasksRu: [
      'Скажите, что хотите записаться к врачу, опишите, что у вас болит и с какого времени.',
      'Хотя бы раз используйте dass: «Ich glaube, dass ich … habe».',
      'Договоритесь о времени: «Der Termin passt mir» или «… passt mir leider nicht».',
      'Спросите, что нужно взять с собой, и поблагодарите: «Ich danke Ihnen».',
    ],
    readAloud: [
      'Ich glaube, dass ich Fieber habe.',
      'Passt Ihnen der Termin am Montag?',
      'Bitte bringen Sie Ihre Versichertenkarte mit.',
      'Vielen Dank, ich danke Ihnen.',
    ],
  },
};
