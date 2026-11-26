import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-17',
  level: 'B1',
  order: 17,
  title: 'Kultur & Unterhaltung',
  titleRu: 'Культура и развлечения',
  goalsRu: [
    'Рассказывать о концертах, спектаклях, фильмах и сериалах и давать им оценку',
    'Объяснять причины и следствия с помощью denn, weil, da, deshalb, daher, darum, sodass и so … dass',
    'Противопоставлять и исправлять с помощью aber, sondern, jedoch и während',
    'Договариваться о культурной программе и аргументировать своё предложение',
  ],
  grammar: {
    topic: 'Konnektoren für Grund, Folge und Gegensatz: denn/weil/da, deshalb/daher/darum, sodass/so … dass, aber/sondern/jedoch/während',
    topicRu: 'Коннекторы причины, следствия и противопоставления',
    explanationRu: `**Коннекторы** связывают предложения и показывают логику: причину, следствие или противопоставление. Главное — знать, **куда они ставят спрягаемый глагол**.

**1. Позиция 0 — порядок слов не меняется:** und, oder, **aber**, **denn**, **sondern**. → Ich gehe nicht mit, **denn** ich **habe** keine Zeit.

**2. Подчинительные союзы — глагол в конце:** **weil, da** (причина), **sodass / so … dass** (следствие), **während** (противопоставление), obwohl. → …, **weil** ich keine Zeit **habe**.

**3. Наречия — стоят на 1-м месте, сразу за ними глагол:** **deshalb, deswegen, daher, darum** (следствие), **jedoch** (однако), trotzdem. → Das Konzert war ausverkauft, **daher sind** wir ins Kino gegangen. Они могут стоять и внутри предложения: Wir sind **daher** ins Kino gegangen.

**Причина.** weil — самый частый союз. **da** обычно стоит в начале и называет уже известную причину: **Da** die Sängerin krank ist, fällt das Konzert aus. **denn** не может начинать всё предложение и не отправляет глагол в конец.

**Следствие.** **sodass** (можно писать и so dass) — «так что»: Es regnete, **sodass** das Fest drinnen stattfand. **so + прилагательное … dass** подчёркивает степень: Der Film war **so** spannend, **dass** niemand gegangen ist.

**Противопоставление.** **sondern** употребляется только после отрицания (nicht, kein), когда мы исправляем первую часть: Das ist **kein** Krimi, **sondern** eine Komödie. **aber** — просто «но». **jedoch** — более книжное «однако». **während** — «тогда как», когда сравниваем двух людей или два факта: Ich höre Jazz, **während** mein Bruder Rock **mag**.

**Типичные ошибки русскоговорящих:**

- «aber» после отрицания: «nicht ins Kino, aber ins Theater» → правильно **sondern**.
- Глагол в конце после denn: «denn ich keine Zeit habe» → **denn ich habe keine Zeit**.
- После daher/darum сначала подлежащее: «daher wir sind» → **daher sind wir**.
- Путают sodass (следствие) и damit (цель, «чтобы»).`,
    table: [
      ['Значение', 'Позиция 0', 'Глагол в конце', 'Позиция 1 + глагол'],
      ['Причина', 'denn', 'weil, da', '—'],
      ['Следствие', '—', 'sodass, so … dass', 'deshalb, deswegen, daher, darum'],
      ['Противопоставление', 'aber, sondern', 'während, obwohl', 'jedoch, trotzdem'],
    ],
    examples: [
      { de: 'Wir sind in der Pause gegangen, denn das Theaterstück war ziemlich langweilig.', ru: 'Мы ушли в антракте, потому что пьеса была довольно скучной.' },
      { de: 'Da die Sängerin erkältet ist, fällt das Konzert heute Abend aus.', ru: 'Так как певица простужена, концерт сегодня вечером отменяется.' },
      { de: 'Im Vorverkauf waren die Karten billiger, daher haben wir sie schon im März gekauft.', ru: 'В предварительной продаже билеты были дешевле, поэтому мы купили их ещё в марте.' },
      { de: 'Die Serie war so spannend, dass ich die ganze Staffel an einem Wochenende gesehen habe.', ru: 'Сериал был таким захватывающим, что я посмотрел весь сезон за одни выходные.' },
      { de: 'Die Ausstellung ist nicht im Museum, sondern in einer alten Fabrikhalle.', ru: 'Выставка проходит не в музее, а в старом заводском цехе.' },
      { de: 'Meine Schwester geht gern in die Oper, während ich lieber Rockkonzerte besuche.', ru: 'Моя сестра любит ходить в оперу, тогда как я предпочитаю рок-концерты.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich komme heute nicht mit ins Kino, ___ ich muss noch für die Prüfung lernen.',
        options: ['weil', 'denn', 'deshalb', 'da'],
        answer: 1,
        explanationRu: 'После пропуска обычный порядок слов (ich muss …) — это возможно только после denn (позиция 0). После weil и da глагол стоял бы в конце, после deshalb — сразу после коннектора.',
      },
      {
        type: 'choice',
        prompt: 'Das ist kein Krimi, ___ eine romantische Komödie.',
        options: ['aber', 'sondern', 'jedoch', 'während'],
        answer: 1,
        explanationRu: 'Первая часть содержит отрицание (kein), вторая её исправляет → sondern («а»). aber после отрицания-исправления не используется.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: [
          'Das Festival war ausverkauft, daher wir haben keine Karten bekommen.',
          'Das Festival war ausverkauft, daher haben wir keine Karten bekommen.',
          'Das Festival war ausverkauft, daher wir keine Karten bekommen haben.',
        ],
        answer: 1,
        explanationRu: 'daher — наречие: оно занимает первое место, и сразу за ним стоит спрягаемый глагол (haben), потом подлежащее.',
      },
      {
        type: 'choice',
        prompt: 'Der Film war ___ lang, dass die Kinder eingeschlafen sind.',
        options: ['so', 'sodass', 'sehr', 'zu'],
        answer: 0,
        explanationRu: 'Конструкция so + прилагательное … dass («настолько …, что»). sodass пишется слитно только тогда, когда между so и dass ничего нет.',
      },
      {
        type: 'gap',
        prompt: 'Mein Bruder schaut am liebsten Krimiserien, ___ ich lieber Komödien sehe.',
        answers: ['während', 'wohingegen'],
        hintRu: 'противопоставление двух людей, глагол в конце',
        explanationRu: 'Сравниваем двух людей («тогда как»), глагол sehe стоит в конце → während.',
      },
      {
        type: 'gap',
        prompt: 'Die Schauspielerin hatte hohes Fieber, ___ wurde die Vorstellung abgesagt.',
        answers: ['deshalb', 'deswegen', 'daher', 'darum'],
        explanationRu: 'Вторая часть — следствие, и сразу после пропуска стоит глагол (wurde) → наречие deshalb/deswegen/daher/darum.',
      },
      {
        type: 'gap',
        prompt: '___ die Karten an der Abendkasse teurer sind, kaufen wir sie lieber online.',
        answers: ['Da', 'Weil'],
        explanationRu: 'Причина стоит в начале, глагол sind — в конце придаточного → da (или weil). denn в начале предложения стоять не может.',
      },
      {
        type: 'gap',
        prompt: 'Es hat plötzlich stark geregnet, ___ das Open-Air-Konzert unterbrochen werden musste.',
        answers: ['sodass', 'so dass'],
        explanationRu: 'Вторая часть — следствие, глагол musste стоит в конце → союз sodass (или so dass).',
      },
      {
        type: 'order',
        words: ['Der', 'Film', 'war', 'so', 'langweilig,', 'dass', 'ich', 'eingeschlafen', 'bin.'],
        translationRu: 'Фильм был таким скучным, что я заснул.',
        explanationRu: 'so стоит перед прилагательным в главном предложении, dass вводит придаточное с глаголом в конце (eingeschlafen bin).',
      },
      {
        type: 'order',
        words: ['Da', 'das', 'Wetter', 'schlecht', 'war,', 'fand', 'das', 'Konzert', 'im', 'Saal', 'statt.'],
        translationRu: 'Так как погода была плохой, концерт прошёл в зале.',
        explanationRu: 'Придаточное с da стоит первым, глагол war — в его конце. Главное предложение начинается со спрягаемого глагола fand; приставка statt уходит в конец.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью denn.',
        prompt: 'Wir kaufen die Karten im Vorverkauf. Sie sind dort billiger.',
        answers: ['Wir kaufen die Karten im Vorverkauf, denn sie sind dort billiger.'],
        explanationRu: 'denn стоит на позиции 0: после него обычный порядок слов (sie sind …). Перед denn ставится запятая.',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите предложение с sodass вместо deshalb.',
        prompt: 'Das Publikum hat lange applaudiert, deshalb hat die Band noch zwei Lieder gespielt.',
        answers: [
          'Das Publikum hat lange applaudiert, sodass die Band noch zwei Lieder gespielt hat.',
          'Das Publikum hat lange applaudiert, so dass die Band noch zwei Lieder gespielt hat.',
        ],
        explanationRu: 'deshalb — наречие (глагол сразу после него), sodass — союз: вспомогательный глагол hat уходит в конец придаточного.',
      },
    ],
  },
  vocab: [
    { de: 'Bühne', article: 'die', plural: '-n', pos: 'noun', ru: 'сцена', example: 'Nach dem letzten Lied kam die Band noch einmal auf die Bühne.', exampleRu: 'После последней песни группа ещё раз вышла на сцену.' },
    { de: 'Schauspieler', article: 'der', plural: '-', pos: 'noun', ru: 'актёр (die Schauspielerin — актриса)', example: 'Die Schauspieler haben am Ende großen Applaus bekommen.', exampleRu: 'В конце актёры получили бурные аплодисменты.' },
    { de: 'Theaterstück', article: 'das', plural: '-e', pos: 'noun', ru: 'пьеса, спектакль', example: 'Das Theaterstück handelt von einer Familie in Berlin.', exampleRu: 'Пьеса рассказывает о семье в Берлине.' },
    { de: 'Hauptdarsteller', article: 'der', plural: '-', pos: 'noun', ru: 'исполнитель главной роли', example: 'Der Hauptdarsteller hat für diesen Film einen Preis gewonnen.', exampleRu: 'Исполнитель главной роли получил за этот фильм премию.' },
    { de: 'Vorverkauf', article: 'der', plural: '-¨e', pos: 'noun', ru: 'предварительная продажа (билетов)', example: 'Im Vorverkauf kostet eine Karte nur 25 Euro.', exampleRu: 'В предварительной продаже билет стоит всего 25 евро.' },
    { de: 'Abendkasse', article: 'die', plural: '-n', pos: 'noun', ru: 'вечерняя касса (продажа билетов перед началом)', example: 'An der Abendkasse gibt es manchmal noch Restkarten.', exampleRu: 'В кассе перед началом иногда ещё бывают оставшиеся билеты.' },
    { de: 'Orchester', article: 'das', plural: '-', pos: 'noun', ru: 'оркестр', example: 'Das Orchester spielt heute Abend Werke von Mozart.', exampleRu: 'Сегодня вечером оркестр исполняет произведения Моцарта.' },
    { de: 'Festival', article: 'das', plural: '-s', pos: 'noun', ru: 'фестиваль', example: 'Jeden Sommer fahren wir zu einem Musikfestival an der Ostsee.', exampleRu: 'Каждое лето мы ездим на музыкальный фестиваль на Балтийском море.' },
    { de: 'Serie', article: 'die', plural: '-n', pos: 'noun', ru: 'сериал; серия', example: 'Welche Serie schaust du gerade?', exampleRu: 'Какой сериал ты сейчас смотришь?' },
    { de: 'Staffel', article: 'die', plural: '-n', pos: 'noun', ru: 'сезон (сериала)', example: 'Die dritte Staffel ist leider nicht so gut wie die ersten beiden.', exampleRu: 'Третий сезон, к сожалению, не такой хороший, как первые два.' },
    { de: 'Unterhaltung', article: 'die', plural: '-en', pos: 'noun', ru: 'развлечение; беседа', example: 'Auf dem Stadtfest gibt es Musik und Unterhaltung für die ganze Familie.', exampleRu: 'На городском празднике есть музыка и развлечения для всей семьи.' },
    { de: 'Geschmack', article: 'der', plural: '-¨e', pos: 'noun', ru: 'вкус', example: 'Der Film war nicht ganz mein Geschmack, aber die Musik war toll.', exampleRu: 'Фильм был не совсем в моём вкусе, но музыка была отличная.' },
    { de: 'Applaus', article: 'der', plural: '–', pos: 'noun', ru: 'аплодисменты', example: 'Nach der Vorstellung gab es minutenlangen Applaus.', exampleRu: 'После спектакля несколько минут не смолкали аплодисменты.' },
    { de: 'Auftritt', article: 'der', plural: '-e', pos: 'noun', ru: 'выступление; выход на сцену', example: 'Vor ihrem ersten Auftritt war die Sängerin sehr nervös.', exampleRu: 'Перед своим первым выступлением певица очень нервничала.' },
    { de: 'Eintrittspreis', article: 'der', plural: '-e', pos: 'noun', ru: 'цена входного билета', example: 'Die Eintrittspreise für das Museum sind dieses Jahr gestiegen.', exampleRu: 'Цены на вход в музей в этом году выросли.' },
    { de: 'aufführen', forms: 'führt auf, führte auf, hat aufgeführt', pos: 'verb', ru: 'ставить, исполнять (на сцене)', example: 'Die Schüler führen am Ende des Schuljahres ein Theaterstück auf.', exampleRu: 'В конце учебного года школьники ставят спектакль.' },
    { de: 'sich begeistern', forms: 'für + Akk', pos: 'verb', ru: 'увлекаться, восхищаться (чем-л.)', example: 'Schon als Kind hat sie sich für das Theater begeistert.', exampleRu: 'Уже в детстве она увлекалась театром.' },
    { de: 'begeistert', forms: 'von + Dat', pos: 'adj', ru: 'восхищённый, в восторге', example: 'Wir waren von der Aufführung total begeistert.', exampleRu: 'Мы были в полном восторге от постановки.' },
    { de: 'berühmt', pos: 'adj', ru: 'знаменитый', example: 'In diesem Haus hat früher ein berühmter Schriftsteller gewohnt.', exampleRu: 'В этом доме раньше жил знаменитый писатель.' },
    { de: 'witzig', pos: 'adj', ru: 'остроумный, смешной', example: 'Die Komödie war so witzig, dass wir die ganze Zeit gelacht haben.', exampleRu: 'Комедия была такой смешной, что мы смеялись всё время.' },
  ],
  listening: {
    title: 'Radio Stadtwelle: Kulturtipps fürs Wochenende',
    kind: 'monolog',
    text: `Guten Abend, liebe Hörerinnen und Hörer! Wie jeden Freitag haben wir auch heute unsere Kulturtipps fürs Wochenende für Sie.

Beginnen wir mit einer schlechten Nachricht: Die Komödie „Chaos im Treppenhaus“ im Stadttheater fällt am Samstag aus, denn der Hauptdarsteller hat sich bei der Probe am Fuß verletzt. Wer schon Karten hat, kann sie an der Theaterkasse zurückgeben oder gegen Karten für einen anderen Termin im Juni tauschen.

Gute Nachrichten gibt es dagegen für alle Musikfans: Das Jazzfestival im Stadtpark beginnt am Samstag um 16 Uhr. Da die Wettervorhersage sehr gut ist, finden alle Konzerte draußen auf der Freilichtbühne statt. Im Vorverkauf kostet ein Tagesticket 18 Euro, an der Abendkasse jedoch 25 Euro. Sie sollten sich also beeilen, denn letztes Jahr war das Festival so beliebt, dass es schon am Freitagabend keine Karten mehr gab.

Für Familien empfehlen wir das Puppentheater in der Stadtbibliothek. Das Stück „Der kleine Drache Fridolin“ ist nicht nur für Kinder, sondern auch für Erwachsene sehr unterhaltsam. Der Eintritt ist frei, aber die Plätze sind begrenzt, deshalb sollten Sie sich vorher telefonisch anmelden.

Und wer lieber zu Hause bleibt: Die zweite Staffel der Krimiserie „Nebel über Rostock“ ist ab Sonntag in der Mediathek zu sehen. Die Kritiken sind allerdings gemischt: Während die einen die Schauspieler loben, finden andere die Geschichte viel zu langsam. Am besten bilden Sie sich selbst eine Meinung.

Wir wünschen Ihnen ein schönes Wochenende – und viel Spaß!`,
    questions: [
      {
        question: 'Warum fällt die Komödie am Samstag aus?',
        options: ['Weil zu wenige Karten verkauft wurden.', 'Weil ein Schauspieler verletzt ist.', 'Weil das Theater renoviert wird.'],
        answer: 1,
      },
      {
        question: 'Wo finden die Konzerte des Jazzfestivals statt?',
        options: ['Im Stadttheater.', 'In der Stadtbibliothek.', 'Draußen im Stadtpark.', 'In einer Konzerthalle.'],
        answer: 2,
      },
      {
        question: 'Wie viel kostet ein Tagesticket an der Abendkasse?',
        options: ['18 Euro.', '25 Euro.', 'Nichts, der Eintritt ist frei.'],
        answer: 1,
      },
      {
        question: 'Was muss man für das Puppentheater tun?',
        options: ['Eine Karte im Vorverkauf kaufen.', 'Sich vorher telefonisch anmelden.', 'Unbedingt mit Kindern kommen.'],
        answer: 1,
      },
      {
        question: 'Was sagt der Sprecher über die neue Staffel der Krimiserie?',
        options: [
          'Alle Kritiker finden sie sehr gut.',
          'Die Meinungen über die Serie sind unterschiedlich.',
          'Sie läuft ab Samstag im Kino.',
          'Die Schauspieler sind schlecht, aber die Geschichte ist spannend.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu:
      'На форуме городского культурного журнала обсуждают вопрос: «Нужны ли ещё кино и театр, если есть стриминговые сервисы?» Напишите свой комментарий.',
    taskDe:
      'Im Online-Forum eines Stadtmagazins wird diskutiert: „Brauchen wir heute noch Kino und Theater, wenn es Streamingdienste gibt?“ Schreiben Sie Ihre Meinung.',
    points: [
      'Ihre Meinung zum Thema',
      'Gründe für Ihre Meinung (weil, da, denn)',
      'Vorteile und Nachteile von Streaming und Kino/Theater (während, jedoch)',
      'eine eigene Erfahrung',
    ],
    minWords: 100,
    usefulPhrases: [
      'Meiner Meinung nach brauchen wir …, denn …',
      'Da man zu Hause …, …',
      'Streaming ist bequem, während ein Kinobesuch …',
      'Ein Theaterabend ist jedoch …',
      'Das ist nicht nur …, sondern auch …',
      'Letztes Jahr war ich …, und die Aufführung war so …, dass …',
    ],
  },
  speaking: {
    scenarioRu:
      'Ваш друг Йонас приезжает к вам в гости на выходные. Вместе спланируйте культурную программу: концерт, театр, кино или музей. Обсудите время, цены и билеты.',
    aiRole:
      'Sie sind Jonas, ein guter Freund der Person, mit der Sie sprechen. Sie kommen am Wochenende zu Besuch und möchten gemeinsam ein Kulturprogramm planen. Sie mögen Rockmusik und Kino, finden Oper eher langweilig und haben nicht viel Geld. Machen Sie eigene Vorschläge, reagieren Sie auf die Vorschläge Ihres Gesprächspartners, nennen Sie Gründe und widersprechen Sie manchmal freundlich. Sprechen Sie natürlich auf B1-Niveau.',
    opener:
      'Hallo! Ich freue mich schon total auf das Wochenende bei dir. Was können wir denn am Samstagabend machen? Hast du schon eine Idee?',
    tasksRu: [
      'Предложите два варианта программы и обоснуйте их (denn, weil, da).',
      'Вежливо отклоните предложение друга и предложите альтернативу (nicht …, sondern …).',
      'Назовите следствие с помощью deshalb/daher или sodass (например, билеты дорогие → …).',
      'Договоритесь о времени, месте встречи и покупке билетов.',
    ],
    readAloud: [
      'Wir gehen nicht ins Theater, sondern ins Kino, denn der neue Film soll großartig sein.',
      'Da die Karten im Vorverkauf billiger sind, kaufe ich sie schon heute.',
      'Das Konzert war so laut, dass wir uns kaum unterhalten konnten.',
    ],
  },
};
