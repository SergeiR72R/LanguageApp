import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-20',
  level: 'A2',
  order: 20,
  title: 'Prüfungstraining A2',
  titleRu: 'Подготовка к экзамену A2',
  goalsRu: [
    'Повторить порядок слов: главное предложение, придаточные с weil, dass, wenn, ob, связки deshalb и trotzdem',
    'Повторить перфект, претерит (war, hatte, konnte) и окончания прилагательных',
    'Узнать формат экзамена Goethe-Zertifikat A2: чтение, аудирование, письмо, говорение',
    'Писать короткое личное сообщение и официальное письмо, вместе с партнёром планировать встречу',
  ],
  grammar: {
    topic: 'Wiederholung: Satzbau, Nebensätze, Vergangenheit, Adjektive',
    topicRu: 'Повторение: порядок слов, придаточные, прошедшее время, прилагательные',
    explanationRu: `Перед экзаменом главное — **место глагола**. Почти все ошибки на A2 — именно здесь.

**1. Главное предложение:** спрягаемый глагол всегда на **2-м месте**: Ich lerne heute. / Heute **lerne** ich.

**2. und, aber, oder, denn** — «нулевая позиция»: после них порядок слов обычный. …, **denn** ich **habe** morgen eine Prüfung.

**3. deshalb** (поэтому) и **trotzdem** (всё равно, несмотря на это) сами занимают **1-е место**, поэтому глагол идёт сразу после них, а подлежащее — после глагола:
- Ich war krank, **deshalb bin ich** zu Hause geblieben.
- Ich war krank, **trotzdem bin ich** zur Arbeit gegangen.

**4. Придаточные с weil, dass, wenn, ob** (и с вопросительным словом: wann, wo…) — спрягаемый глагол в **самом конце**:
- …, weil ich keine Zeit **habe**.
- Ich weiß nicht, ob der Kurs morgen **stattfindet**.
- Wenn das Wetter gut **ist**, **gehen** wir spazieren. — если придаточное стоит первым, главное начинается с глагола.

Сравните: **weil** и **denn** — «потому что» (сначала следствие, потом причина), а **deshalb** — «поэтому» (сначала причина, потом следствие).

**5. Прошедшее время.** В разговоре и в письмах — **перфект**: haben/sein на 2-м месте + Partizip II в конце (Ich habe gelernt. Ich bin gefahren.). sein, haben и модальные глаголы обычно в **претерите**: war, hatte, konnte, musste, wollte.

**6. Прилагательные:** после der/die/das окончание **-e** или **-en** (der neue Kurs, mit dem neuen Kurs). После ein/kein/mein окончание показывает род: ein neu**er** Kurs, ein neu**es** Buch.

**Типичные ошибки:** глагол не в конце после weil/dass; «deshalb ich bin» вместо **deshalb bin ich**; «Ich habe gefahren» вместо **Ich bin gefahren**.`,
    table: [
      ['Конструкция', 'Где глагол', 'Пример'],
      ['Aussage, W-Frage', '2-е место', 'Morgen habe ich eine Prüfung.'],
      ['und, aber, oder, denn', 'после связки — обычный порядок', '…, denn ich habe morgen eine Prüfung.'],
      ['deshalb, trotzdem', 'сразу после связки', '…, deshalb lerne ich heute.'],
      ['weil, dass, wenn, ob', 'в конце', '…, weil ich morgen eine Prüfung habe.'],
      ['Perfekt', 'haben/sein — 2-е место, Partizip — конец', 'Ich habe viel gelernt.'],
    ],
    examples: [
      { de: 'Ich habe viel gelernt, deshalb bin ich nicht nervös.', ru: 'Я много занимался, поэтому не нервничаю.' },
      { de: 'Die Prüfung war schwer, trotzdem habe ich sie bestanden.', ru: 'Экзамен был трудным, но я всё равно его сдал.' },
      { de: 'Ich glaube, dass ich die Prüfung bestehen werde.', ru: 'Я думаю, что сдам экзамен.' },
      { de: 'Wenn du Fragen hast, kannst du mich anrufen.', ru: 'Если у тебя есть вопросы, ты можешь мне позвонить.' },
      { de: 'Weißt du, wann die Prüfung beginnt?', ru: 'Ты знаешь, когда начинается экзамен?' },
      { de: 'Gestern konnte ich nicht kommen, weil mein Sohn krank war.', ru: 'Вчера я не смог прийти, потому что мой сын был болен.' },
      { de: 'Wir haben in einem kleinen Raum einen langen Test geschrieben.', ru: 'Мы писали длинный тест в маленькой комнате.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich habe heute keine Zeit, ___ ich muss arbeiten.',
        options: ['denn', 'weil', 'deshalb', 'dass'],
        answer: 0,
        explanationRu: 'После пропуска стоит «ich muss» — глагол на 2-м месте после подлежащего. Так бывает только после denn. После weil было бы «weil ich arbeiten muss», после deshalb — «deshalb muss ich».',
      },
      {
        type: 'choice',
        prompt: 'Der Bus ist nicht gekommen, ___ bin ich zu Fuß gegangen.',
        options: ['deshalb', 'trotzdem', 'weil', 'denn'],
        answer: 0,
        explanationRu: 'Сразу после пропуска стоит глагол (bin) — значит, нужна связка на 1-м месте: deshalb или trotzdem. По смыслу: автобус не пришёл → поэтому пошёл пешком = deshalb.',
      },
      {
        type: 'choice',
        prompt: 'Es hat stark geregnet, ___ sind wir spazieren gegangen.',
        options: ['trotzdem', 'deshalb', 'denn', 'dass'],
        answer: 0,
        explanationRu: 'Шёл сильный дождь, но мы всё равно пошли гулять — это противоречие, поэтому trotzdem. После trotzdem глагол (sind) идёт сразу.',
      },
      {
        type: 'choice',
        prompt: 'Ich weiß nicht, ___ der Supermarkt am Sonntag geöffnet ist.',
        options: ['ob', 'dass', 'wenn', 'weil'],
        answer: 0,
        explanationRu: 'Косвенный вопрос без вопросительного слова («открыт ли…») вводится словом ob — «ли».',
      },
      {
        type: 'choice',
        prompt: 'Gestern ___ ich leider nicht zum Kurs kommen.',
        options: ['konnte', 'kann', 'habe gekonnt', 'könnte'],
        answer: 0,
        explanationRu: 'Модальные глаголы в прошедшем времени обычно употребляют в претерите: ich konnte. «könnte» — это «мог бы» (Konjunktiv II).',
      },
      {
        type: 'choice',
        prompt: 'Wir haben ein ___ Auto gekauft.',
        options: ['neues', 'neuer', 'neue', 'neuen'],
        answer: 0,
        explanationRu: 'das Auto — средний род, Akkusativ, после ein. Артикль ein не показывает род, поэтому окончание прилагательного -es: ein neues Auto.',
      },
      {
        type: 'gap',
        prompt: 'Am Wochenende ___ wir nach Hamburg gefahren.',
        answers: ['sind'],
        explanationRu: 'fahren — глагол движения, перфект с sein: wir sind gefahren.',
      },
      {
        type: 'gap',
        prompt: 'Ich bleibe heute zu Hause, weil ich krank ___.',
        answers: ['bin'],
        explanationRu: 'После weil спрягаемый глагол стоит в самом конце: weil ich krank bin.',
      },
      {
        type: 'choice',
        audio: 'Ich bin nicht gekommen, weil mein Auto kaputt war.',
        prompt: 'Почему человек не пришёл?',
        options: ['Машина была сломана.', 'Он был болен.', 'Он забыл о встрече.'],
        answer: 0,
        explanationRu: '«weil mein Auto kaputt war» — потому что машина была сломана.',
      },
      {
        type: 'gap',
        audio: 'Wenn das Wetter schön ist, machen wir ein Picknick.',
        prompt: 'Послушайте и вставьте глагол: Wenn das Wetter schön ist, ___ wir ein Picknick.',
        answers: ['machen'],
        explanationRu: 'Придаточное с wenn стоит первым, поэтому главное предложение начинается с глагола: …, machen wir ein Picknick.',
      },
      {
        type: 'order',
        words: ['Ich', 'war', 'müde,', 'trotzdem', 'habe', 'ich', 'die Hausaufgaben', 'gemacht.'],
        translationRu: 'Я устал, но всё равно сделал домашнее задание.',
        explanationRu: 'После trotzdem сразу идёт спрягаемый глагол habe, потом подлежащее ich; Partizip II gemacht — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините два предложения с помощью weil.',
        prompt: 'Ich lerne viel. Ich habe bald eine Prüfung.',
        answers: ['Ich lerne viel, weil ich bald eine Prüfung habe.'],
        explanationRu: 'После weil глагол habe уходит в самый конец придаточного.',
      },
    ],
  },
  vocab: [
    { de: 'Prüfung', article: 'die', plural: '-en', pos: 'noun', ru: 'экзамен', example: 'Die Prüfung beginnt um neun Uhr.', exampleRu: 'Экзамен начинается в девять часов.', pronRu: 'ди ПРЮ-фунг' },
    { de: 'Aufgabe', article: 'die', plural: '-n', pos: 'noun', ru: 'задание, задача', example: 'Lesen Sie die Aufgabe genau.', exampleRu: 'Внимательно прочитайте задание.' },
    { de: 'Lösung', article: 'die', plural: '-en', pos: 'noun', ru: 'решение, ответ (в задании)', example: 'Markieren Sie die richtige Lösung.', exampleRu: 'Отметьте правильный ответ.', pronRu: 'ди ЛЁ-зунг' },
    { de: 'Aussage', article: 'die', plural: '-n', pos: 'noun', ru: 'утверждение, высказывание', example: 'Ist die Aussage richtig oder falsch?', exampleRu: 'Это утверждение верно или неверно?' },
    { de: 'Teil', article: 'der', plural: '-e', pos: 'noun', ru: 'часть', example: 'Der erste Teil der Prüfung ist Lesen.', exampleRu: 'Первая часть экзамена — чтение.' },
    { de: 'ankreuzen', forms: 'kreuzt an, hat angekreuzt', pos: 'verb', ru: 'отметить крестиком', example: 'Kreuzen Sie a, b oder c an.', exampleRu: 'Отметьте крестиком a, b или c.', pronRu: 'АН-крой-цэн' },
    { de: 'bestehen', forms: 'besteht, bestand, hat bestanden', pos: 'verb', ru: 'сдать (экзамен)', example: 'Meine Frau hat die Prüfung schon bestanden.', exampleRu: 'Моя жена уже сдала экзамен.', pronRu: 'бэ-ШТЕ:-эн' },
    { de: 'sich vorbereiten', forms: 'bereitet sich vor, hat sich vorbereitet; auf + Akk', pos: 'verb', ru: 'готовиться (к чему-то)', example: 'Ich bereite mich auf die A2-Prüfung vor.', exampleRu: 'Я готовлюсь к экзамену A2.', pronRu: 'зихь ФОР-бэ-рай-тэн' },
    { de: 'wiederholen', forms: 'wiederholt, hat wiederholt', pos: 'verb', ru: 'повторять', example: 'Können Sie die Frage bitte wiederholen?', exampleRu: 'Не могли бы вы повторить вопрос?', pronRu: 'ви:-дэр-ХО:-лэн' },
    { de: 'Ergebnis', article: 'das', plural: '-se', pos: 'noun', ru: 'результат', example: 'Das Ergebnis bekommen Sie in vier Wochen.', exampleRu: 'Результат вы получите через четыре недели.', pronRu: 'дас эр-ГЕ:П-нис' },
    { de: 'mündlich', pos: 'adj', ru: 'устный', example: 'Die mündliche Prüfung ist am Nachmittag.', exampleRu: 'Устный экзамен — во второй половине дня.', pronRu: 'МЮНТ-лихь' },
    { de: 'schriftlich', pos: 'adj', ru: 'письменный', example: 'Im schriftlichen Teil schreibt man zwei kurze Texte.', exampleRu: 'В письменной части пишут два коротких текста.', pronRu: 'ШРИФТ-лихь' },
    { de: 'sich anmelden', forms: 'meldet sich an, hat sich angemeldet; für + Akk / zu + Dat', pos: 'verb', ru: 'записаться, зарегистрироваться', example: 'Ich habe mich für die Prüfung im Mai angemeldet.', exampleRu: 'Я записался на экзамен в мае.' },
    { de: 'nervös', pos: 'adj', ru: 'нервный, взволнованный', example: 'Vor der Prüfung war ich sehr nervös.', exampleRu: 'Перед экзаменом я очень нервничал.', pronRu: 'нэр-ВЁС' },
    { de: 'deshalb', pos: 'adv', ru: 'поэтому (глагол сразу после него)', example: 'Ich habe Kopfschmerzen, deshalb gehe ich früh ins Bett.', exampleRu: 'У меня болит голова, поэтому я рано ложусь спать.', pronRu: 'ДЭС-хальп' },
    { de: 'trotzdem', pos: 'adv', ru: 'всё равно, несмотря на это', example: 'Es war kalt, trotzdem sind wir schwimmen gegangen.', exampleRu: 'Было холодно, но мы всё равно пошли плавать.', pronRu: 'ТРОЦ-дэм' },
    { de: 'vorschlagen', forms: 'schlägt vor, hat vorgeschlagen', pos: 'verb', ru: 'предлагать', example: 'Ich schlage vor, wir treffen uns um drei.', exampleRu: 'Предлагаю встретиться в три.', pronRu: 'ФОР-шла:-гэн' },
    { de: 'Vorschlag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'предложение (идея)', example: 'Hast du einen besseren Vorschlag?', exampleRu: 'У тебя есть предложение получше?' },
    { de: 'einverstanden', pos: 'adj', ru: 'согласен', example: 'Samstag um zehn? Einverstanden!', exampleRu: 'В субботу в десять? Согласен!', pronRu: 'АЙН-фэр-штан-дэн' },
    { de: 'Viel Erfolg!', pos: 'phrase', ru: 'Удачи! Успехов!', example: 'Morgen ist deine Prüfung? Viel Erfolg!', exampleRu: 'Завтра у тебя экзамен? Удачи!' },
  ],
  listening: {
    title: 'Zusammen lernen',
    kind: 'dialog',
    text: `A: Hallo Ali! Nächste Woche ist die A2-Prüfung. Bist du schon nervös?
B: Ein bisschen. Das Lesen ist kein Problem, aber beim Hören verstehe ich nicht alles.
A: Mir geht es genauso. Wollen wir zusammen üben?
B: Gern! Wann hast du Zeit?
A: Am Montag muss ich arbeiten. Wie wäre es mit Dienstag?
B: Dienstag geht leider nicht, da habe ich einen Termin beim Arzt. Aber am Mittwochnachmittag habe ich frei.
A: Mittwoch ist gut. Um drei Uhr?
B: Einverstanden. Und wo treffen wir uns? Bei mir ist es zu laut, meine Kinder sind zu Hause.
A: Dann treffen wir uns in der Bibliothek. Dort ist es ruhig, und es gibt Computer. Wir können Hörtexte im Internet hören.
B: Super Idee. Ich bringe die alten Prüfungen aus dem Kurs mit.
A: Und ich bringe Kaffee und Kekse mit. Ohne Kaffee kann ich nicht lernen.
B: Okay. Dann bis Mittwoch!`,
    questions: [
      { question: 'Was ist für Ali schwierig?', options: ['Das Lesen', 'Das Hören', 'Das Schreiben'], answer: 1 },
      { question: 'Warum kann Ali am Dienstag nicht?', options: ['Er muss arbeiten.', 'Er hat einen Arzttermin.', 'Seine Kinder sind krank.'], answer: 1 },
      { question: 'Wann treffen sich die beiden?', options: ['Am Mittwoch um 15 Uhr', 'Am Dienstag um 15 Uhr', 'Am Mittwoch um 13 Uhr'], answer: 0 },
      { question: 'Warum lernen sie nicht bei Ali?', options: ['Es ist dort zu laut.', 'Er hat keinen Computer.', 'Die Wohnung ist zu klein.'], answer: 0 },
      { question: 'Was bringt Ali mit?', options: ['Kaffee und Kekse', 'Alte Prüfungen', 'Einen Laptop'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'Как на экзамене (Schreiben, части 1 и 2), напишите ДВА коротких текста. 1) SMS подруге Марте (неформально, на «ты», ~25 слов): вы не можете завтра прийти на совместные занятия — извинитесь, назовите причину и предложите другой день. 2) E-mail преподавательнице, фрау Шуберт (официально, на «Sie», ~35 слов): на следующей неделе вы не сможете ходить на курс — объясните почему и спросите о домашнем задании и дате экзамена. Не забудьте обращение и подпись в обоих текстах!',
    taskDe:
      'Teil 1: Sie können morgen nicht zum gemeinsamen Lernen kommen. Schreiben Sie Ihrer Freundin Marta eine SMS. Teil 2: Sie können nächste Woche nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Kursleiterin, Frau Schubert, eine E-Mail.',
    points: [
      'SMS an Marta: sich entschuldigen, den Grund nennen, einen neuen Termin vorschlagen',
      'E-Mail an Frau Schubert: sagen, warum Sie nächste Woche nicht kommen können',
      'E-Mail an Frau Schubert: nach den Hausaufgaben und dem Prüfungstermin fragen',
    ],
    minWords: 60,
    usefulPhrases: [
      'Liebe Marta, leider kann ich morgen nicht kommen, denn …',
      'Tut mir leid! Hast du am … Zeit?',
      'Viele Grüße',
      'Sehr geehrte Frau Schubert,',
      'leider kann ich nächste Woche nicht zum Kurs kommen, weil …',
      'Könnten Sie mir bitte sagen, welche Hausaufgaben wir haben?',
      'Wissen Sie schon, wann die Prüfung ist?',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu:
      'Устная часть экзамена, задание 3 «Etwas gemeinsam planen». Курс заканчивается, и вы с партнёршей по курсу Паулой планируете небольшой прощальный праздник после экзамена. Договоритесь: когда и где? что будет из еды и напитков? кто что принесёт? какой подарок купить учительнице?',
    aiRole:
      'Sie sind Paula, Teilnehmerin im Deutschkurs und Partnerin in der mündlichen Prüfung Goethe-Zertifikat A2 (Sprechen Teil 3: etwas gemeinsam planen). Sie planen mit dem Lerner ein kleines Abschiedsfest für den Kurs nach der Prüfung. Zu klären: Wann? Wo? Essen und Getränke? Wer bringt was mit? Geschenk für die Lehrerin? Sprechen Sie einfach auf A2-Niveau, in kurzen Sätzen. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge des Lerners (zustimmen oder freundlich ablehnen mit Grund) und fragen Sie ihn nach seiner Meinung. Lehnen Sie mindestens einen Vorschlag ab, damit der Lerner einen neuen machen muss. Wenn der Lerner nicht weiterweiß, helfen Sie mit einer einfachen Frage.',
    opener: 'Hallo! Wir wollen doch nach der Prüfung zusammen feiern. Wann hast du Zeit?',
    tasksRu: [
      'Договоритесь о дне, времени и месте («Wie wäre es mit …?», «Treffen wir uns um …?»).',
      'Хотя бы один раз вежливо откажитесь и объясните причину («Das geht leider nicht, weil …»).',
      'Решите, кто что принесёт, и выберите подарок для учительницы.',
      'Используйте хотя бы один раз deshalb или trotzdem.',
    ],
    readAloud: [
      'Ich habe viel gelernt, deshalb bin ich nicht nervös.',
      'Wie wäre es mit Freitag um sechs?',
      'Das geht leider nicht, weil ich arbeiten muss.',
      'Einverstanden, dann bringe ich einen Kuchen mit.',
    ],
  },
};
