import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Weißt du, wann ___?',
      options: ['der Kurs beginnt', 'beginnt der Kurs', 'der Kurs beginnen'],
      answer: 0,
      explanationRu: 'В косвенном вопросе глагол стоит в конце: wann der Kurs beginnt.',
    },
    {
      type: 'choice',
      prompt: 'Können Sie mir sagen, ___ das Paket schon da ist?',
      options: ['ob', 'wenn', 'dass'],
      answer: 0,
      explanationRu: 'Вопрос «да/нет» (Ist das Paket schon da?) → ob = «ли».',
    },
    {
      type: 'choice',
      prompt: 'Ich weiß nicht, ___ er nicht zurückruft. Vielleicht ist er krank.',
      options: ['warum', 'ob', 'was'],
      answer: 0,
      explanationRu: 'Речь о причине: «не знаю, почему он не перезванивает» → warum.',
    },
    {
      type: 'choice',
      prompt: 'Weißt du, ob ich hier mit Karte ___?',
      options: ['bezahlen kann', 'kann bezahlen', 'bezahle kann'],
      answer: 0,
      explanationRu: 'Модальный глагол kann стоит в самом конце, после инфинитива: … bezahlen kann.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Ich weiß nicht, wo ich die App herunterladen kann.', 'Ich weiß nicht, wo kann ich die App herunterladen.', 'Ich weiß nicht, wo ich kann die App herunterladen.'],
      answer: 0,
      explanationRu: 'После wo порядок: подлежащее … инфинитив + модальный глагол в конце.',
    },
    {
      type: 'choice',
      prompt: 'Welches Satzzeichen passt? „Ich weiß nicht, wie das Passwort ist ___“',
      options: ['.', '?', '!'],
      answer: 0,
      explanationRu: 'Вся фраза — утверждение (Ich weiß nicht …), поэтому в конце точка, а не вопросительный знак.',
    },
    {
      type: 'gap',
      prompt: 'Weißt du, ___ Paula wohnt? Ich möchte ihr eine Karte schicken.',
      answers: ['wo'],
      explanationRu: 'Нужен адрес — спрашиваем «где»: wo. Глагол wohnt в конце.',
    },
    {
      type: 'gap',
      prompt: 'Hat das Hotel WLAN? → Ich möchte wissen, ___ das Hotel WLAN hat.',
      answers: ['ob'],
      explanationRu: 'Прямой вопрос без W-слова → в косвенном вопросе ob.',
    },
    {
      type: 'gap',
      prompt: 'Wann macht die Post auf? → Könnten Sie mir sagen, wann die Post ___?',
      answers: ['aufmacht'],
      explanationRu: 'Отделяемый глагол в конце придаточного пишется слитно: aufmacht.',
    },
    {
      type: 'gap',
      prompt: 'Wie viel kostet ein Brief nach Kiew? → Wissen Sie, wie viel ein Brief nach Kiew ___?',
      answers: ['kostet'],
      explanationRu: 'Глагол kostet переходит в конец косвенного вопроса.',
    },
    {
      type: 'gap',
      prompt: 'Hast du meine E-Mail bekommen? → Ich weiß nicht, ob du meine E-Mail bekommen ___.',
      answers: ['hast'],
      explanationRu: 'В перфекте вспомогательный глагол hast стоит после Partizip II, в самом конце.',
    },
    {
      type: 'order',
      words: ['Können', 'Sie', 'mir', 'sagen,', 'wie', 'spät', 'es', 'ist?'],
      translationRu: 'Вы не могли бы сказать, который час?',
      explanationRu: 'Главная часть — Können Sie mir sagen, затем запятая и косвенный вопрос wie spät es ist с глаголом в конце.',
    },
    {
      type: 'order',
      words: ['Wissen', 'Sie,', 'ob', 'der', 'Drucker', 'funktioniert?'],
      translationRu: 'Вы не знаете, работает ли принтер?',
      explanationRu: 'ob сразу после запятой, глагол funktioniert — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте косвенный вопрос. Начните с «Ich weiß nicht, …».',
      prompt: 'Kommt Anna heute?',
      answers: ['Ich weiß nicht, ob Anna heute kommt.'],
      explanationRu: 'Вопрос «да/нет» → ob, глагол kommt в конец, в конце точка.',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте вежливый косвенный вопрос. Начните с «Könnten Sie mir sagen, …».',
      prompt: 'Wo ist der Bahnhof?',
      answers: ['Könnten Sie mir sagen, wo der Bahnhof ist?'],
      explanationRu: 'W-слово wo остаётся, глагол ist уходит в конец, в конце — вопросительный знак.',
    },
    {
      type: 'choice',
      audio: 'Wissen Sie, wo ich hier Briefmarken kaufen kann?',
      prompt: 'Что ищет человек?',
      options: ['Где купить марки.', 'Где почтовый ящик.', 'Где купить конверт.'],
      answer: 0,
      explanationRu: 'Вы слышите «wo ich hier Briefmarken kaufen kann» — где можно купить марки.',
    },
    {
      type: 'choice',
      audio: 'Ich weiß nicht, ob mein Sohn heute zurückruft.',
      prompt: 'Что не знает человек?',
      options: ['Перезвонит ли сын сегодня.', 'Где сейчас сын.', 'Когда сын приедет.'],
      answer: 0,
      explanationRu: 'ob = «ли»; zurückrufen = перезвонить.',
    },
    {
      type: 'gap',
      audio: 'Können Sie mir sagen, wann der Laden aufmacht?',
      prompt: 'Напишите вопросительное слово, которое вы слышите: ___',
      answers: ['wann'],
      explanationRu: 'Вы слышите «wann der Laden aufmacht» — когда открывается магазин.',
    },
    {
      type: 'gap',
      prompt: 'An deiner Stelle ___ ich das Passwort aufschreiben.',
      answers: ['würde'],
      explanationRu: 'Повторение (Konjunktiv II): совет «на твоём месте я бы …» — ich würde + инфинитив.',
    },
    {
      type: 'order',
      words: ['Ich', 'kann', 'nicht', 'anrufen,', 'weil', 'mein', 'Akku', 'leer', 'ist.'],
      translationRu: 'Я не могу позвонить, потому что у меня сел аккумулятор.',
      explanationRu: 'Повторение (weil): спрягаемый глагол ist стоит в конце придаточного.',
    },
    {
      type: 'choice',
      prompt: 'Das Handy liegt nicht mehr auf dem Tisch. Ich habe es in die Tasche ___.',
      options: ['gelegt', 'gelegen', 'legen'],
      answer: 0,
      explanationRu: 'Повторение (legen/liegen): куда? (in die Tasche) → legen, перфект: habe … gelegt. gelegen — это Partizip II от liegen (лежать).',
    },
  ],
  reading: [
    {
      title: 'Kurse an der Volkshochschule',
      textType: 'Kursprogramm',
      texts: [
        { label: 'A', heading: 'Smartphone für Anfänger', body: 'Telefonieren, Nachrichten schreiben, Fotos machen: Wir zeigen Ihnen alles Schritt für Schritt. Montag, 10–12 Uhr, vier Termine, 40 Euro. Bitte bringen Sie Ihr Smartphone mit.' },
        { label: 'B', heading: 'Videoanrufe mit der Familie', body: 'Sie möchten Ihre Enkel sehen und mit ihnen sprechen? Hier lernen Sie, wie das geht. Mittwoch, 17–19 Uhr, zwei Termine, 20 Euro.' },
        { label: 'C', heading: 'Sicher im Internet', body: 'Wie mache ich ein gutes Passwort? Wie kaufe ich sicher online ein? Donnerstag, 18:30–20:30 Uhr, drei Termine, 30 Euro. Laptops sind im Kursraum.' },
        { label: 'D', heading: 'Briefe und E-Mails auf Deutsch', body: 'Sie schreiben an Ämter, an Vermieter oder an Ihren Chef? Wir üben gemeinsam. Samstag, 9–12 Uhr, ein Termin, 15 Euro.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie das Kursprogramm. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте программу курсов. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Ihre Mutter möchte mit ihren Enkeln per Video sprechen. Welcher Kurs passt?', options: ['Kurs A', 'Kurs B', 'Kurs C'], answer: 1, explanationRu: 'Курс B — «Videoanrufe mit der Familie».' },
            { kind: 'mc', question: 'Sie arbeiten bis 18 Uhr und möchten lernen, wie man sicher online einkauft. Welcher Kurs passt?', options: ['Kurs B', 'Kurs C', 'Kurs D'], answer: 1, explanationRu: 'Курс C о безопасных покупках онлайн, начинается в 18:30 — после работы.' },
            { kind: 'mc', question: 'Was muss man zum Kurs A mitbringen?', options: ['Einen Laptop.', 'Das eigene Smartphone.', 'Nichts.'], answer: 1, explanationRu: '«Bitte bringen Sie Ihr Smartphone mit.»' },
            { kind: 'mc', question: 'Wie viel kostet der Kurs „Briefe und E-Mails auf Deutsch“?', options: ['15 Euro.', '20 Euro.', '40 Euro.'], answer: 0, explanationRu: 'Курс D: один раз в субботу, 15 евро.' },
            { kind: 'mc', question: 'Welcher Kurs hat die meisten Termine?', options: ['Kurs A', 'Kurs C', 'Kurs D'], answer: 0, explanationRu: 'Курс A — четыре занятия, C — три, D — одно.' },
          ],
        },
      ],
    },
    {
      title: 'Brauchen Kinder ein Handy?',
      textType: 'Forumsbeiträge',
      texts: [
        { label: 'Katja, 38', body: 'Meine Tochter ist neun und hat seit Kurzem ein einfaches Handy. Sie fährt allein mit dem Bus zur Schule, und ich möchte wissen, ob sie gut angekommen ist. Internet hat das Handy nicht – das braucht sie noch nicht.' },
        { label: 'Bernd, 61', body: 'In meiner Kindheit hatten wir keine Handys, aber wir waren sehr glücklich. Heute sitzen die Kinder nur noch vor dem Bildschirm. Ich finde, ein Handy sollte man erst mit vierzehn oder fünfzehn bekommen.' },
        { label: 'Leonie, 16', body: 'Ich habe mein erstes Smartphone mit zwölf bekommen. Ohne Handy weiß man in der Klasse oft nicht, was los ist, weil alle Informationen im Chat stehen. Aber meine Eltern hatten eine Regel: Ab neun Uhr abends musste das Handy in der Küche bleiben.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Forumsbeiträge. Wer sagt das? Katja, Bernd oder Leonie?',
          instructionRu: 'Прочитайте сообщения на форуме. Кто это говорит: Катя, Бернд или Леони?',
          options: ['Katja', 'Bernd', 'Leonie'],
          items: [
            { kind: 'match', prompt: 'Ohne Handy bekommt man wichtige Informationen von der Schule nicht.', answer: 2, explanationRu: 'Леони: «alle Informationen im Chat stehen» — без телефона не знаешь, что происходит в классе.' },
            { kind: 'match', prompt: 'Kinder sollten erst später ein Handy haben.', answer: 1, explanationRu: 'Бернд: телефон стоит давать только в 14–15 лет.' },
            { kind: 'match', prompt: 'Das Handy von meinem Kind hat kein Internet.', answer: 0, explanationRu: 'Катя: «Internet hat das Handy nicht».' },
            { kind: 'match', prompt: 'Am Abend durfte ich das Handy nicht benutzen.', answer: 2, explanationRu: 'Леони: по правилу родителей после девяти вечера телефон должен был оставаться на кухне.' },
            { kind: 'match', prompt: 'Früher war das Leben ohne Handy auch schön.', answer: 1, explanationRu: 'Бернд: в его детстве телефонов не было, но все были очень счастливы.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht auf der Mailbox',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf der Mailbox.',
      text: `Hallo Irina, hier ist Daniel vom Computerkurs. Ich habe dich heute leider nicht erreicht. Ich wollte dir sagen, dass der Kurs am Donnerstag ausfällt. Die Lehrerin ist krank. Wir treffen uns dann erst nächsten Dienstag wieder, wie immer um 18 Uhr, aber in Raum 12, nicht in Raum 8. Ach ja, und weißt du, ob Olga noch mein Ladekabel hat? Ich habe es letzte Woche im Kursraum vergessen. Kannst du sie bitte fragen? Ruf mich doch heute Abend zurück, ich bin ab sieben zu Hause. Tschüss!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте сообщение. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Warum fällt der Kurs am Donnerstag aus?', options: ['Daniel hat keine Zeit.', 'Die Lehrerin ist krank.', 'Der Raum ist besetzt.'], answer: 1, explanationRu: '«Die Lehrerin ist krank.»' },
            { kind: 'mc', question: 'Wo ist der Kurs am Dienstag?', options: ['In Raum 8.', 'In Raum 12.', 'In Raum 18.'], answer: 1, explanationRu: '«in Raum 12, nicht in Raum 8». 18 — это время (18 Uhr).' },
            { kind: 'mc', question: 'Was soll Irina machen?', options: ['Olga nach dem Ladekabel fragen.', 'Ein Ladekabel kaufen.', 'Die Lehrerin anrufen.'], answer: 0, explanationRu: 'Даниэль просит: «Kannst du sie (Olga) bitte fragen?» — про его зарядный кабель.' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Der Kurs beginnt am Dienstag um 18 Uhr.', answer: true, explanationRu: '«wie immer um 18 Uhr».' },
            { kind: 'tf', statement: 'Daniel ist heute Abend nicht zu Hause.', answer: false, explanationRu: 'Он будет дома с семи вечера: «ich bin ab sieben zu Hause».' },
          ],
        },
      ],
    },
    {
      title: 'Auf der Post',
      kind: 'dialog',
      speakers: { A: 'Kundin', B: 'Mitarbeiter der Post' },
      situation: 'Sie hören ein Gespräch in einer Postfiliale.',
      text: `A: Guten Tag. Ich möchte dieses Paket nach Kasachstan schicken. Können Sie mir sagen, wie viel das kostet?
B: Moment, ich wiege es mal. Es hat vier Kilo. Das kostet 48 Euro.
A: Oh, das ist teuer. Wissen Sie, wie lange es dauert?
B: Ungefähr zwei bis drei Wochen.
A: Und kann man im Internet sehen, wo das Paket gerade ist?
B: Ja, Sie bekommen eine Nummer. Damit können Sie online sehen, wo es ist.
A: Gut. Ich hätte dann auch gern fünf Briefmarken für Postkarten nach Deutschland.
B: Gern. Sonst noch etwas?
A: Ja, ich weiß nicht, ob ich hier mit Karte bezahlen kann.
B: Natürlich, das ist kein Problem.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Das Paket wiegt vier Kilo.', answer: true, explanationRu: '«Es hat vier Kilo.»' },
            { kind: 'tf', statement: 'Das Paket ist in einer Woche da.', answer: false, explanationRu: 'Посылка идёт две-три недели.' },
            { kind: 'tf', statement: 'Die Frau kann online sehen, wo ihr Paket ist.', answer: true, explanationRu: 'Она получит номер и сможет отслеживать посылку онлайн.' },
            { kind: 'tf', statement: 'Die Frau kauft auch Briefmarken.', answer: true, explanationRu: '«Ich hätte dann auch gern fünf Briefmarken».' },
            { kind: 'tf', statement: 'Man kann auf der Post nur bar bezahlen.', answer: false, explanationRu: 'Оплатить картой можно: «Natürlich, das ist kein Problem».' },
          ],
        },
      ],
    },
  ],
};
