import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wir essen Torte ___ trinken Kaffee.',
      options: ['und', 'denn', 'aber'],
      answer: 0,
      explanationRu: 'Два действия просто идут одно за другим — нужен und (и). Противопоставления (aber) или причины (denn) здесь нет.',
    },
    {
      type: 'choice',
      prompt: 'Kommst du heute ___ morgen?',
      options: ['oder', 'denn', 'aber'],
      answer: 0,
      explanationRu: 'Нужно выбрать один из двух вариантов (сегодня или завтра) — это oder.',
    },
    {
      type: 'choice',
      prompt: 'Ich gehe nicht zur Party, ___ ich bin müde.',
      options: ['denn', 'dann', 'oder'],
      answer: 0,
      explanationRu: 'Вторая часть — причина («потому что я устал»), значит denn. dann — это «потом», после него глагол стоял бы сразу: «dann bin ich…».',
    },
    {
      type: 'choice',
      prompt: 'Meine Schwester hat Geburtstag. Ich schenke ___ Blumen.',
      options: ['ihr', 'ihm', 'sie'],
      answer: 0,
      explanationRu: 'Сестра — она (sie). «Кому?» → ihr (ей). ihm — «ему», sie — «её» (Akkusativ).',
    },
    {
      type: 'choice',
      prompt: 'Peter, ich gratuliere ___ zum Geburtstag!',
      options: ['dir', 'dich', 'du'],
      answer: 0,
      explanationRu: 'gratulieren + Dativ: «кому?» → dir. По-русски «поздравляю тебя», но по-немецки нельзя «dich».',
    },
    {
      type: 'choice',
      prompt: 'Guten Tag, Frau Schmidt! Wie geht es ___?',
      options: ['Ihnen', 'dir', 'Sie'],
      answer: 0,
      explanationRu: 'С фрау Шмидт мы говорим на «Вы». Вежливое «Вам» — Ihnen: Wie geht es Ihnen?',
    },
    {
      type: 'gap',
      prompt: 'Ich kann nicht kommen, denn ich ___ keine Zeit.',
      answers: ['habe'],
      explanationRu: 'После denn — обычный порядок слов: ich habe (глагол на 2-м месте). haben → ich habe.',
    },
    {
      type: 'gap',
      prompt: 'Wir möchten feiern, ___ wir haben kein Geld.',
      answers: ['aber'],
      explanationRu: 'Хотим праздновать, НО нет денег — противопоставление, нужен aber.',
    },
    {
      type: 'gap',
      prompt: 'Kannst du ___ bitte helfen? Die Torte ist so schwer!',
      answers: ['mir'],
      hintRu: 'мне',
      explanationRu: 'helfen + Dativ: «кому помочь?» → mir (мне). Не «mich»!',
    },
    {
      type: 'gap',
      prompt: 'Gestern ___ wir den Geburtstag von Oma gefeiert.',
      answers: ['haben'],
      explanationRu: 'Повторение (юнит 17): перфект от feiern образуется с haben: wir haben gefeiert.',
    },
    {
      type: 'gap',
      prompt: 'Am Samstag ___ ich leider arbeiten.',
      answers: ['muss'],
      hintRu: 'müssen',
      explanationRu: 'Повторение (юнит 12): модальный глагол müssen → ich muss; инфинитив arbeiten стоит в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините два предложения союзом aber.',
      prompt: 'Ich komme gern. Ich habe nur eine Stunde Zeit.',
      answers: ['Ich komme gern, aber ich habe nur eine Stunde Zeit.', 'Ich komme gern aber ich habe nur eine Stunde Zeit.'],
      explanationRu: 'aber стоит на нулевой позиции, после него — обычное предложение (ich habe …). Перед aber ставится запятая.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените имя местоимением «кому?» (Dativ).',
      prompt: 'Ich schenke Maria eine Kerze.',
      answers: ['Ich schenke ihr eine Kerze.'],
      explanationRu: 'Maria — она. «Кому?» → ihr: Ich schenke ihr eine Kerze.',
    },
    {
      type: 'order',
      words: ['Ich', 'bleibe', 'zu', 'Hause,', 'denn', 'ich', 'bin', 'krank.'],
      translationRu: 'Я остаюсь дома, потому что я болен.',
      explanationRu: 'После denn обычный порядок: подлежащее ich, глагол bin на 2-м месте, потом krank.',
    },
    {
      type: 'order',
      words: ['Gibst', 'du', 'mir', 'bitte', 'ein', 'Stück', 'Torte?'],
      translationRu: 'Дашь мне, пожалуйста, кусок торта?',
      explanationRu: 'Вопрос «да/нет»: глагол на 1-м месте, потом du, потом «кому?» (mir) и «что?» (ein Stück Torte).',
    },
    {
      type: 'choice',
      audio: 'Ich komme gern, aber ich komme erst um neun.',
      prompt: 'Что говорит человек?',
      options: ['Он придёт, но поздно', 'Он не придёт', 'Он придёт рано'],
      answer: 0,
      explanationRu: '«Ich komme gern, aber … erst um neun» — приду с радостью, но только в девять.',
    },
    {
      type: 'gap',
      audio: 'Wir schenken ihm ein Buch.',
      prompt: 'Что дарят? Ein ___',
      answers: ['Buch'],
      explanationRu: 'Вы слышите: «Wir schenken ihm ein Buch» — мы дарим ему книгу.',
    },
    {
      type: 'gap',
      audio: 'Einladung',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Einladung', 'die Einladung'],
      explanationRu: 'Einladung — приглашение. ei читается как «ай»: АЙН-ла-дунг.',
    },
    {
      type: 'choice',
      audio: 'Frohe Weihnachten!',
      prompt: 'С каким праздником поздравляют?',
      options: ['С Рождеством', 'С Пасхой', 'С Новым годом', 'Со свадьбой'],
      answer: 0,
      explanationRu: 'Weihnachten — Рождество. С Пасхой — «Frohe Ostern!», с Новым годом — «Frohes neues Jahr!».',
    },
    {
      type: 'gap',
      audio: 'Die Party beginnt um halb acht am Abend.',
      prompt: 'Во сколько начинается вечеринка? Напишите время цифрами: ___',
      answers: ['19:30', '7:30', '19.30', '7.30', '19 30', '7 30'],
      explanationRu: 'Повторение (юнит 10): halb acht — половина восьмого, то есть 7:30 (вечером 19:30).',
    },
  ],
  reading: [
    {
      title: 'Günter wird 60',
      textType: 'E-Mail (Einladung)',
      texts: [
        {
          body: `Liebe Freunde,

am Samstag, 14. Juni, habe ich Geburtstag – ich werde 60! Das möchte ich mit euch feiern. Die Party beginnt um 18 Uhr bei mir im Garten. Wir grillen und es gibt Musik. Ihr müsst nichts mitbringen, denn ich habe genug Essen und Getränke. Bei Regen feiern wir in der Garage.

Bitte sagt mir bis Mittwoch: Kommt ihr oder kommt ihr nicht? Meine Nummer: 0176 5534 21.

Viele Grüße
Günter`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Утверждения верны (Richtig) или неверны (Falsch)?',
          items: [
            { kind: 'tf', statement: 'Günter hat am Samstag Geburtstag.', answer: true, explanationRu: '«am Samstag, 14. Juni, habe ich Geburtstag» — день рождения в субботу.' },
            { kind: 'tf', statement: 'Die Party beginnt um acht Uhr am Abend.', answer: false, explanationRu: 'Праздник начинается в 18 часов, то есть в шесть вечера, а не в восемь.' },
            { kind: 'tf', statement: 'Die Gäste sollen Essen mitbringen.', answer: false, explanationRu: '«Ihr müsst nichts mitbringen» — ничего приносить не нужно, у Гюнтера всё есть.' },
            { kind: 'tf', statement: 'Auch bei Regen gibt es die Party.', answer: true, explanationRu: '«Bei Regen feiern wir in der Garage» — если дождь, празднуют в гараже.' },
            { kind: 'tf', statement: 'Die Gäste sollen bis Mittwoch antworten.', answer: true, explanationRu: '«Bitte sagt mir bis Mittwoch» — ответить нужно до среды.' },
          ],
        },
      ],
    },
    {
      title: 'Antworten an Günter',
      textType: 'SMS',
      texts: [
        { label: 'a', heading: 'Monika', body: 'Hallo Günter, vielen Dank für die Einladung! Ich komme sehr gern. Ich bringe einen Kuchen mit, okay? Bis Samstag! Monika' },
        { label: 'b', heading: 'Paul', body: 'Lieber Günter, leider kann ich nicht kommen, denn ich bin am Wochenende bei meiner Tochter in Köln. Ich rufe dich am Samstag an. Alles Gute! Paul' },
        { label: 'c', heading: 'Anke und Tim', body: 'Hallo Günter, wir kommen gern, aber erst um 20 Uhr. Unser Sohn hat bis 19 Uhr Fußball. Ist das okay? Liebe Grüße, Anke und Tim' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Nachrichten. Wer ist das? Ordnen Sie zu.',
          instructionRu: 'Прочитайте сообщения. Кто это? Подберите имя к каждому предложению.',
          options: ['Monika', 'Paul', 'Anke und Tim'],
          items: [
            { kind: 'match', prompt: 'Wer kommt nicht zur Party?', answer: 1, explanationRu: 'Пауль пишет: «leider kann ich nicht kommen» — он не придёт, он у дочери в Кёльне.' },
            { kind: 'match', prompt: 'Wer kommt spät?', answer: 2, explanationRu: 'Анке и Тим придут только в 20 часов, потому что у сына до 19 часов футбол.' },
            { kind: 'match', prompt: 'Wer bringt etwas zum Essen mit?', answer: 0, explanationRu: 'Моника пишет: «Ich bringe einen Kuchen mit» — она принесёт пирог.' },
            { kind: 'match', prompt: 'Wer telefoniert am Samstag mit Günter?', answer: 1, explanationRu: 'Пауль: «Ich rufe dich am Samstag an» — он позвонит в субботу.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht von Julia',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Hallo Sabine, hier ist Julia. Vielen Dank für deine Einladung zur Hochzeit! Ich komme sehr gern. Aber mein Mann kann leider nicht kommen, denn er ist an dem Tag in Spanien. Er arbeitet dort. Sag mal, was möchtest du zur Hochzeit haben? Wir möchten dir etwas schenken. Ruf mich bitte an! Meine Nummer ist null eins fünf eins, zwei drei vier, fünf sechs. Tschüss!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Послушайте сообщение. Утверждения верны или неверны?',
          items: [
            { kind: 'tf', statement: 'Sabine macht eine Hochzeit.', answer: true, explanationRu: 'Юлия благодарит за приглашение на свадьбу (Einladung zur Hochzeit) — значит, свадьба у Сабины.' },
            { kind: 'tf', statement: 'Julia und ihr Mann kommen zusammen.', answer: false, explanationRu: 'Юлия придёт, а её муж — нет: «mein Mann kann leider nicht kommen».' },
            { kind: 'tf', statement: 'Julias Mann arbeitet an dem Tag in Spanien.', answer: true, explanationRu: '«er ist an dem Tag in Spanien. Er arbeitet dort.»' },
          ],
        },
        {
          instructionDe: 'Hören Sie noch einmal. Wählen Sie die richtige Lösung.',
          instructionRu: 'Послушайте ещё раз. Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Was fragt Julia?', options: ['Was möchtest du zur Hochzeit haben?', 'Wann beginnt die Hochzeit?', 'Wo ist die Hochzeit?'], answer: 0, explanationRu: 'Юлия спрашивает: «was möchtest du zur Hochzeit haben?» — что подарить.' },
            { kind: 'mc', question: 'Was soll Sabine machen?', options: ['Julia anrufen.', 'Eine E-Mail schreiben.', 'Nach Spanien fahren.'], answer: 0, explanationRu: '«Ruf mich bitte an!» — Сабина должна позвонить Юлии.' },
          ],
        },
      ],
    },
    {
      title: 'Ein Geschenk für die Frau',
      kind: 'dialog',
      speakers: { A: 'Verkäuferin', B: 'Kunde' },
      situation: 'Ein Mann ist in einem Geschäft. Er sucht ein Geschenk.',
      text: `A: Guten Tag! Kann ich Ihnen helfen?
B: Ja, bitte. Meine Frau hat morgen Geburtstag. Ich suche ein Geschenk für sie.
A: Was macht Ihre Frau gern?
B: Sie liest gern.
A: Dann schenken Sie ihr doch ein Buch. Dieses Buch ist neu und sehr gut.
B: Was kostet es?
A: Zweiundzwanzig Euro.
B: Gut, ich nehme es. Haben Sie auch Karten?
A: Ja, die Glückwunschkarten sind dort, links.
B: Danke schön!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Wählen Sie die richtige Lösung.',
          instructionRu: 'Послушайте разговор. Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Wer hat Geburtstag?', options: ['Seine Frau', 'Seine Tochter', 'Die Verkäuferin'], answer: 0, explanationRu: '«Meine Frau hat morgen Geburtstag» — день рождения у жены.' },
            { kind: 'mc', question: 'Was kauft der Mann?', options: ['Blumen', 'Ein Buch', 'Eine Kerze'], answer: 1, explanationRu: 'Жена любит читать, продавщица советует книгу, и мужчина говорит: «ich nehme es».' },
            { kind: 'mc', question: 'Wie viel kostet das Geschenk?', options: ['12 Euro', '20 Euro', '22 Euro'], answer: 2, explanationRu: '«Zweiundzwanzig Euro» — 22 евро.' },
            { kind: 'mc', question: 'Was sucht der Mann noch?', options: ['Eine Karte', 'Eine Torte', 'Einen Kuli'], answer: 0, explanationRu: '«Haben Sie auch Karten?» — он ищет ещё открытку.' },
          ],
        },
      ],
    },
  ],
};
