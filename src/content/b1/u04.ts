import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-04',
  level: 'B1',
  order: 4,
  title: 'Gesundheit & Körper',
  titleRu: 'Здоровье и тело',
  goalsRu: [
    'Описывать самочувствие и симптомы на приёме у врача',
    'Правильно употреблять возвратные глаголы с местоимениями в Akkusativ и Dativ',
    'Использовать глаголы с управлением (warten auf, sich kümmern um и др.)',
    'Задавать вопросы и отвечать с помощью wo- и da-конструкций (worauf, darauf)',
  ],
  grammar: {
    topic: 'Reflexive Verben; Verben mit Präpositionen; da- und wo-Komposita',
    topicRu: 'Возвратные глаголы; глаголы с предлогами; конструкции с da- и wo-',
    explanationRu: `**Возвратные глаголы** употребляются с местоимением: ich fühle **mich**, du fühlst **dich**, er/sie fühlt **sich**, wir fühlen **uns**, ihr fühlt **euch**, sie/Sie fühlen **sich**. Если в предложении есть ещё одно прямое дополнение (часть тела, предмет), местоимение стоит в **дательном** падеже — отличие только у ich и du: Ich wasche **mir** die Hände. Putz **dir** die Zähne!

**Глаголы с предлогами** нужно учить вместе с предлогом и падежом: warten **auf** + Akk, sich kümmern **um** + Akk, denken **an** + Akk, Angst haben **vor** + Dat. Предлог часто не совпадает с русским!

**Конструкции с da- и wo-.** Если речь идёт о **предмете или событии**, вопрос и замена строятся так: **wo(r) + предлог** и **da(r) + предлог**. Буква **r** добавляется перед гласной: worauf, darauf, woran, daran; но wofür, dafür, womit, damit.

- Worauf wartest du? — Auf das Ergebnis. → Ich warte **darauf**.

Если речь идёт о **человеке**, используется предлог + местоимение: Auf **wen** wartest du? — Auf meine Ärztin. → Ich warte auf **sie**.

da-конструкция также указывает на последующее придаточное: Ich ärgere mich **darüber**, dass der Arzt keine Zeit hat.

**Типичные ошибки русскоговорящих:**

- Русские глаголы на -ся и немецкие возвратные не всегда совпадают: учиться — **lernen** (без sich), отдыхать/выздоравливать — **sich erholen**.
- Предлоги переводят дословно: «думать о» — не über, а **denken an**; «бояться чего-то» — **Angst haben vor** + Dat; «ждать кого-то» — **warten auf** + Akk.
- da-конструкции используют для людей: «Ich denke daran» о человеке — неверно, правильно: **an ihn / an sie**.
- Забывают местоимение: «Ich fühle gut» вместо **«Ich fühle mich gut»**.`,
    table: [
      ['Глагол', 'Предлог + падеж', 'Пример'],
      ['warten', 'auf + Akk', 'Ich warte auf den Arzt.'],
      ['sich kümmern', 'um + Akk', 'Sie kümmert sich um ihre Mutter.'],
      ['denken / sich erinnern', 'an + Akk', 'Denk an deine Tabletten!'],
      ['achten', 'auf + Akk', 'Achte auf deine Ernährung!'],
      ['sich ärgern', 'über + Akk', 'Er ärgert sich über die lange Wartezeit.'],
      ['Angst haben', 'vor + Dat', 'Er hat Angst vor der Spritze.'],
      ['leiden', 'an / unter + Dat', 'Sie leidet unter Kopfschmerzen.'],
    ],
    examples: [
      { de: 'Ich habe mich am Wochenende erkältet.', ru: 'Я простудился на выходных.' },
      { de: 'Nach der Operation muss sich mein Vater gut erholen.', ru: 'После операции моему отцу нужно хорошо восстановиться.' },
      { de: 'Wasch dir bitte vor dem Essen die Hände!', ru: 'Помой, пожалуйста, руки перед едой!' },
      { de: 'Ich warte schon seit einer Woche auf das Ergebnis.', ru: 'Я уже неделю жду результата.' },
      { de: 'Worüber hast du dich beim Arzt geärgert? – Darüber, dass ich so lange warten musste.', ru: 'Из-за чего ты разозлился у врача? — Из-за того, что мне пришлось так долго ждать.' },
      { de: 'Erinnerst du dich an Dr. Neumann? – Ja, ich erinnere mich gut an ihn.', ru: 'Ты помнишь доктора Нойманна? — Да, я хорошо его помню.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich wasche ___ jeden Abend die Haare.',
        options: ['mir', 'mich', 'sich', 'mein'],
        answer: 0,
        explanationRu: 'В предложении уже есть прямое дополнение (die Haare), поэтому возвратное местоимение стоит в дательном падеже: mir.',
      },
      {
        type: 'choice',
        prompt: 'Wartest du auch ___ den Arzt?',
        options: ['auf', 'für', 'an', 'um'],
        answer: 0,
        explanationRu: 'warten всегда употребляется с auf + Akk. «für» — частая ошибка под влиянием английского «wait for».',
      },
      {
        type: 'choice',
        prompt: 'Er hat große Angst ___ der Operation.',
        options: ['vor', 'von', 'über', 'an'],
        answer: 0,
        explanationRu: 'Angst haben vor + Dativ: vor der Operation.',
      },
      {
        type: 'choice',
        prompt: '– Denkst du an den Termin morgen? – Ja, ich denke ___.',
        options: ['daran', 'an es', 'darauf', 'woran'],
        answer: 0,
        explanationRu: 'Речь о предмете (Termin), поэтому da- + предлог глагола (denken an): daran. darauf — неверный предлог, woran — вопросительное слово.',
      },
      {
        type: 'gap',
        prompt: 'Ich fühle ___ heute nicht so gut.',
        answers: ['mich'],
        explanationRu: 'sich fühlen — возвратный глагол; для ich в винительном падеже: mich.',
      },
      {
        type: 'gap',
        prompt: 'Meine Schwester kümmert sich ___ unsere kranke Oma.',
        answers: ['um'],
        explanationRu: 'sich kümmern um + Akk — заботиться о ком-либо.',
      },
      {
        type: 'gap',
        prompt: '___ interessierst du dich? – Für Sport und gesunde Ernährung.',
        answers: ['Wofür'],
        explanationRu: 'sich interessieren für; вопрос о предметах → wo + für = wofür (перед согласной r не нужна).',
      },
      {
        type: 'gap',
        prompt: 'Ich habe mich sehr ___ geärgert, dass der Arzt keine Zeit hatte.',
        answers: ['darüber'],
        explanationRu: 'sich ärgern über + Akk. Придаточное с dass «объявляется» в главном предложении через da(r) + предлог: darüber.',
      },
      {
        type: 'order',
        words: ['Mein', 'Sohn', 'hat', 'sich', 'beim', 'Fußball', 'verletzt.'],
        translationRu: 'Мой сын травмировался на футболе.',
        explanationRu: 'В перфекте возвратное местоимение стоит после вспомогательного глагола (hat sich), Partizip II — в конце.',
      },
      {
        type: 'order',
        words: ['Worauf', 'wartest', 'du', 'denn', 'noch?'],
        translationRu: 'Чего же ты ещё ждёшь?',
        explanationRu: 'warten auf → вопрос о предмете: worauf. Вопросительное слово на первом месте, глагол на втором.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените предлог с существительным на da-конструкцию.',
        prompt: 'Ich habe keine Lust auf das Fitnessstudio.',
        answers: ['Ich habe keine Lust darauf.'],
        explanationRu: 'Lust haben auf + Akk. Fitnessstudio — предмет, поэтому auf das Fitnessstudio → darauf.',
      },
      {
        type: 'transform',
        instructionRu: 'Задайте вопрос к части «um ihren Vater».',
        prompt: 'Sie kümmert sich um ihren Vater.',
        answers: ['Um wen kümmert sie sich?'],
        explanationRu: 'О человеке спрашивают «предлог + вопросительное местоимение»: um wen (не worum).',
      },
    ],
  },
  vocab: [
    { de: 'Beschwerden', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'жалобы, недомогание', example: 'Seit wann haben Sie diese Beschwerden?', exampleRu: 'С какого времени у вас эти жалобы?' },
    { de: 'Rezept', article: 'das', plural: '-e', pos: 'noun', ru: 'рецепт', example: 'Mit diesem Rezept bekommen Sie das Medikament in jeder Apotheke.', exampleRu: 'С этим рецептом вы получите лекарство в любой аптеке.' },
    { de: 'Überweisung', article: 'die', plural: '-en', pos: 'noun', ru: 'направление (к врачу); денежный перевод', example: 'Für den Hautarzt brauchen Sie eine Überweisung.', exampleRu: 'Для дерматолога вам нужно направление.' },
    { de: 'Facharzt', article: 'der', plural: '-¨e', pos: 'noun', ru: 'врач-специалист', example: 'Auf einen Termin beim Facharzt muss man oft lange warten.', exampleRu: 'Приёма у специалиста часто приходится долго ждать.' },
    { de: 'Sprechstunde', article: 'die', plural: '-n', pos: 'noun', ru: 'приёмные часы', example: 'Die Sprechstunde beginnt montags um acht Uhr.', exampleRu: 'Приём по понедельникам начинается в восемь часов.' },
    { de: 'Krankenversicherung', article: 'die', plural: '-en', pos: 'noun', ru: 'медицинская страховка', example: 'In Deutschland braucht jeder eine Krankenversicherung.', exampleRu: 'В Германии каждому нужна медицинская страховка.' },
    { de: 'Ernährung', article: 'die', plural: '–', pos: 'noun', ru: 'питание', example: 'Eine gesunde Ernährung stärkt das Immunsystem.', exampleRu: 'Здоровое питание укрепляет иммунитет.' },
    { de: 'Verletzung', article: 'die', plural: '-en', pos: 'noun', ru: 'травма, ранение', example: 'Die Verletzung am Knie war zum Glück nicht schlimm.', exampleRu: 'Травма колена, к счастью, была несерьёзной.' },
    { de: 'krankschreiben', forms: 'schreibt krank, schrieb krank, hat krankgeschrieben', pos: 'verb', ru: 'выписать больничный', example: 'Die Ärztin hat mich für eine Woche krankgeschrieben.', exampleRu: 'Врач выписала мне больничный на неделю.' },
    { de: 'sich erkälten', pos: 'verb', ru: 'простудиться', example: 'Zieh eine Jacke an, sonst erkältest du dich!', exampleRu: 'Надень куртку, а то простудишься!' },
    { de: 'sich erholen', forms: 'von + Dat', pos: 'verb', ru: 'отдыхать, восстанавливаться', example: 'Im Urlaub habe ich mich gut vom Stress erholt.', exampleRu: 'В отпуске я хорошо отдохнул от стресса.' },
    { de: 'sich verletzen', pos: 'verb', ru: 'пораниться, получить травму', example: 'Beim Skifahren hat er sich am Bein verletzt.', exampleRu: 'Катаясь на лыжах, он повредил ногу.' },
    { de: 'sich ausruhen', forms: 'ruht sich aus, ruhte sich aus, hat sich ausgeruht', pos: 'verb', ru: 'отдыхать (лёжа, в покое)', example: 'Nach der Arbeit ruhe ich mich eine halbe Stunde aus.', exampleRu: 'После работы я полчаса отдыхаю.' },
    { de: 'leiden', forms: 'leidet, litt, hat gelitten; an/unter + Dat', pos: 'verb', ru: 'страдать (от чего-л.)', example: 'Viele Menschen leiden im Frühling unter Allergien.', exampleRu: 'Многие люди весной страдают от аллергии.' },
    { de: 'achten', forms: 'auf + Akk', pos: 'verb', ru: 'обращать внимание, следить', example: 'Ich achte darauf, dass ich genug schlafe.', exampleRu: 'Я слежу за тем, чтобы высыпаться.' },
    { de: 'sich kümmern', forms: 'um + Akk', pos: 'verb', ru: 'заботиться, заниматься (чем-л.)', example: 'Wer kümmert sich um die Kinder, wenn du im Krankenhaus bist?', exampleRu: 'Кто позаботится о детях, когда ты будешь в больнице?' },
    { de: 'verschreiben', forms: 'verschreibt, verschrieb, hat verschrieben', pos: 'verb', ru: 'выписывать (лекарство)', example: 'Der Arzt hat mir Tabletten gegen die Schmerzen verschrieben.', exampleRu: 'Врач выписал мне таблетки от боли.' },
    { de: 'ansteckend', pos: 'adj', ru: 'заразный', example: 'Die Grippe ist sehr ansteckend.', exampleRu: 'Грипп очень заразен.' },
    { de: 'regelmäßig', pos: 'adj', ru: 'регулярный', example: 'Ich mache regelmäßig Sport, mindestens zweimal pro Woche.', exampleRu: 'Я регулярно занимаюсь спортом, минимум два раза в неделю.' },
    { de: 'Gute Besserung!', pos: 'phrase', ru: 'Выздоравливай(те)!', example: 'Ich habe gehört, dass du krank bist. Gute Besserung!', exampleRu: 'Я слышал, что ты болеешь. Выздоравливай!' },
  ],
  listening: {
    title: 'Beim Hausarzt',
    kind: 'dialog',
    text: `A: Guten Morgen, Herr Petrow. Setzen Sie sich bitte. Was fehlt Ihnen denn?
B: Guten Morgen, Frau Doktor. Ich fühle mich seit drei Tagen gar nicht gut. Ich habe Halsschmerzen, Husten und bin ständig müde.
A: Haben Sie auch Fieber?
B: Gestern Abend hatte ich 38,5. Heute Morgen war es ein bisschen besser.
A: Haben Sie sich vielleicht erkältet? Waren Sie in letzter Zeit viel draußen?
B: Ja, am Wochenende war ich mit meinem Sohn beim Fußball. Es war sehr kalt und windig, und ich hatte keine Mütze dabei.
A: Ich höre Sie mal ab. Atmen Sie bitte tief ein … und wieder aus. Gut, die Lunge ist frei. Das ist eine normale Erkältung, aber sie ist ansteckend. Ich schreibe Sie bis Freitag krank.
B: Bis Freitag? Oje, wir haben gerade ein wichtiges Projekt. Mein Chef wartet auf meinen Bericht.
A: Das verstehe ich, aber Ihre Gesundheit ist wichtiger. Sie müssen sich jetzt ausruhen, sonst dauert es noch länger.
B: Na gut. Bekomme ich ein Medikament?
A: Ich verschreibe Ihnen einen Hustensaft. Hier ist das Rezept. Und trinken Sie viel Tee mit Honig.
B: Darf ich Sport machen? Ich gehe normalerweise dreimal pro Woche joggen.
A: Nein, darauf müssen Sie diese Woche verzichten. Ihr Körper muss sich erst erholen.
B: Okay. Und wenn es nicht besser wird?
A: Dann kommen Sie am Montag wieder in die Sprechstunde. Vielleicht bekommen Sie dann eine Überweisung zum Lungenfacharzt. Aber ich glaube nicht, dass das nötig ist.
B: Vielen Dank, Frau Doktor. Ich kümmere mich gleich um die Krankmeldung für meinen Arbeitgeber.
A: Gute Besserung, Herr Petrow!`,
    questions: [
      {
        question: 'Welche Beschwerden hat Herr Petrow?',
        options: ['Bauchschmerzen und Fieber', 'Halsschmerzen, Husten und Müdigkeit', 'Kopfschmerzen und Schwindel'],
        answer: 1,
      },
      {
        question: 'Wo hat er sich wahrscheinlich erkältet?',
        options: ['Beim Joggen im Park', 'Im Büro', 'Beim Fußball mit seinem Sohn', 'Im Schwimmbad'],
        answer: 2,
      },
      { question: 'Bis wann ist Herr Petrow krankgeschrieben?', options: ['Bis Montag', 'Für zwei Wochen', 'Bis Mittwoch', 'Bis Freitag'], answer: 3 },
      { question: 'Was verschreibt die Ärztin?', options: ['Einen Hustensaft', 'Tabletten gegen Fieber', 'Tee mit Honig'], answer: 0 },
      {
        question: 'Was soll Herr Petrow machen, wenn es nicht besser wird?',
        options: ['Sofort ins Krankenhaus fahren', 'Am Montag wieder in die Sprechstunde kommen', 'Mehr Sport machen', 'Direkt zum Lungenfacharzt gehen'],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Вы заболели и не можете ходить на курсы немецкого на этой неделе. Напишите письмо преподавательнице, госпоже Ланге.',
    taskDe: 'Sie sind krank und können diese Woche nicht zum Deutschkurs kommen. Schreiben Sie eine E-Mail an Ihre Kursleiterin, Frau Lange.',
    points: [
      'Was haben Sie und wie fühlen Sie sich?',
      'Was hat der Arzt gesagt?',
      'Bitten Sie um die Hausaufgaben und Materialien.',
      'Wann kommen Sie wieder?',
    ],
    minWords: 80,
    usefulPhrases: [
      'Liebe Frau Lange,',
      'leider muss ich Ihnen mitteilen, dass …',
      'Ich habe mich am Wochenende erkältet.',
      'Der Arzt hat mich bis … krankgeschrieben.',
      'Könnten Sie mir bitte die Hausaufgaben schicken?',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы звоните в кабинет семейного врача, чтобы записаться на приём. Вы плохо себя чувствуете уже несколько дней.',
    aiRole:
      'Sie sind Frau Wolf, medizinische Fachangestellte in einer Hausarztpraxis in Bremen. Sie nehmen Anrufe entgegen, fragen nach Namen, Beschwerden und Krankenversicherung und bieten passende Termine an. Sprechen Sie freundlich, aber effizient auf B1-Niveau und fragen Sie nach, wenn etwas unklar ist.',
    opener: 'Praxis Dr. Albrecht, Wolf am Apparat, guten Tag! Was kann ich für Sie tun?',
    tasksRu: [
      'Назовите себя и опишите симптомы (используйте возвратные глаголы: sich fühlen, sich erkälten).',
      'Договоритесь о времени приёма.',
      'Спросите, что нужно взять с собой (карточку страховки, направление).',
      'Используйте хотя бы один глагол с предлогом (warten auf, leiden unter, sich kümmern um).',
    ],
    readAloud: [
      'Ich fühle mich müde und habe seit Tagen starke Kopfschmerzen.',
      'Der Arzt hat mir einen Hustensaft verschrieben.',
      'Achten Sie auf eine gesunde Ernährung und ruhen Sie sich aus!',
    ],
  },
};
