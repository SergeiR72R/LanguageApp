import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Anna und Paul ___ in Wien.',
      options: ['wohnt', 'wohnen', 'wohnst'],
      answer: 1,
      explanationRu: 'Anna und Paul = sie (они). С sie (они) окончание -en: sie wohnen.',
    },
    {
      type: 'choice',
      prompt: 'Ihr ___ Deutsch.',
      options: ['lernt', 'lernen', 'lernst'],
      answer: 0,
      explanationRu: 'С ihr (вы — несколько друзей) окончание -t: ihr lernt.',
    },
    {
      type: 'choice',
      prompt: 'Wir ___ zwei Handys.',
      options: ['habt', 'haben', 'hat'],
      answer: 1,
      explanationRu: 'haben с wir: wir haben — как в словаре.',
    },
    {
      type: 'choice',
      prompt: 'Wie ___ du? – Ich heiße Ben.',
      options: ['heißst', 'heißt', 'heiße'],
      answer: 1,
      explanationRu: 'Основа heiß- кончается на ß, поэтому у du только -t: du heißt. «heißst» — так не пишут.',
    },
    {
      type: 'gap',
      prompt: 'Ihr ___ in Leipzig.',
      answers: ['wohnt', 'arbeitet'],
      hintRu: 'wohnen',
      explanationRu: 'С ihr окончание -t: ihr wohnt.',
    },
    {
      type: 'gap',
      prompt: 'Was ___ ihr?',
      answers: ['macht'],
      hintRu: 'machen',
      explanationRu: 'С ihr окончание -t: ihr macht. Was macht ihr? — Что вы делаете?',
    },
    {
      type: 'gap',
      prompt: 'Frau Roth ___ ein Handy.',
      answers: ['hat'],
      hintRu: 'haben',
      explanationRu: 'Frau Roth = sie (она). haben с sie: sie hat.',
    },
    {
      type: 'gap',
      prompt: '___ ihr Zeit?',
      answers: ['Habt'],
      hintRu: 'haben',
      explanationRu: 'haben с ihr: ihr habt. В вопросе «да/нет» глагол стоит первым: Habt ihr Zeit?',
    },
    {
      type: 'gap',
      prompt: 'Wo ___ Sie, Herr Lang?',
      answers: ['arbeiten', 'wohnen'],
      hintRu: 'arbeiten',
      explanationRu: 'С вежливым Sie окончание -en: Sie arbeiten.',
    },
    {
      type: 'gap',
      audio: 'zweiundachtzig',
      prompt: 'Напишите число цифрами: ___',
      answers: ['82'],
      explanationRu: 'zwei-und-achtzig: сначала 2, потом 80 → 82.',
    },
    {
      type: 'gap',
      audio: 'neunundneunzig',
      prompt: 'Напишите число цифрами: ___',
      answers: ['99'],
      explanationRu: 'neun-und-neunzig = 9 + 90 = 99.',
    },
    {
      type: 'choice',
      audio: 'fünfunddreißig',
      prompt: 'Какое число вы слышите?',
      options: ['53', '35', '25'],
      answer: 1,
      explanationRu: 'fünf-und-dreißig: первым звучит fünf (5), потом dreißig (30) → 35.',
    },
    {
      type: 'gap',
      audio: 'Die Vorwahl ist null, drei, null.',
      prompt: 'Напишите код (Vorwahl) цифрами: ___',
      answers: ['030'],
      explanationRu: 'Номера телефонов говорят по одной цифре: null – drei – null = 030 (это код Берлина).',
    },
    {
      type: 'choice',
      audio: 'Wir wohnen in der Mozartstraße vierzehn.',
      prompt: 'Какой адрес?',
      options: ['Mozartstraße 4', 'Mozartstraße 14', 'Mozartstraße 40'],
      answer: 1,
      explanationRu: 'vierzehn = 14. Сравните: vier = 4, vierzig = 40.',
    },
    {
      type: 'order',
      words: ['Wo', 'arbeitet', 'ihr', 'jetzt?'],
      translationRu: 'Где вы сейчас работаете?',
      explanationRu: 'Вопросительное слово wo — первое, глагол arbeitet — второй, затем ihr и jetzt.',
    },
    {
      type: 'order',
      words: ['Ich', 'bin', 'achtundfünfzig', 'Jahre', 'alt.'],
      translationRu: 'Мне пятьдесят восемь лет.',
      explanationRu: 'Возраст: Ich bin + число + Jahre alt.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение с er (он).',
      prompt: 'Ich arbeite und lerne Deutsch.',
      answers: ['Er arbeitet und lernt Deutsch.'],
      explanationRu: 'С er окончание -t: er lernt. У arbeiten вставляем e: er arbeitet.',
    },
    // Wiederholung
    {
      type: 'choice',
      prompt: 'Повторение. Woher ___ Sie?',
      options: ['kommst', 'kommen', 'kommt'],
      answer: 1,
      explanationRu: 'С вежливым Sie окончание -en: Woher kommen Sie?',
    },
    {
      type: 'choice',
      audio: 'Wien',
      prompt: 'Повторение. Какое слово вы слышите?',
      options: ['Wein', 'Wien', 'wen'],
      answer: 1,
      explanationRu: 'ie читается как долгое «и:» — Wien («ви:н», Вена). ei читается «ай» — Wein («вайн», вино).',
    },
    {
      type: 'gap',
      prompt: 'Повторение. Das ist Lena. ___ kommt aus Graz.',
      answers: ['Sie'],
      explanationRu: 'Лена — она, по-немецки sie. В начале предложения — с большой буквы.',
    },
  ],
  reading: [
    {
      title: 'Anmeldung und SMS',
      textType: 'Formular und SMS',
      texts: [
        {
          label: 'Formular',
          heading: 'Anmeldung: Deutschkurs A1',
          body: `Familienname: Kowalski
Vorname: Marek
Alter: 45
Straße, Hausnummer: Lindenstraße 23
Postleitzahl, Ort: 50674 Köln
Telefon: 0176 55 92 31`,
        },
        {
          label: 'SMS',
          body: 'Hallo Jan! Ich wohne jetzt in Köln. Ich habe auch eine neue Handynummer: 0176 55 92 31. Ich arbeite hier und lerne Deutsch. Viele Grüße, Marek',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie das Formular und die SMS. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте анкету и SMS. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Marek ist 45 Jahre alt.', answer: true, explanationRu: 'В анкете: «Alter: 45».' },
            { kind: 'tf', statement: 'Marek wohnt in der Lindenstraße 32.', answer: false, explanationRu: 'Номер дома — 23, а не 32: «Lindenstraße 23».' },
            { kind: 'tf', statement: 'Die Postleitzahl ist 50674.', answer: true, explanationRu: '«Postleitzahl, Ort: 50674 Köln».' },
            { kind: 'tf', statement: 'Marek hat eine neue Handynummer.', answer: true, explanationRu: 'В SMS: «Ich habe auch eine neue Handynummer».' },
            { kind: 'tf', statement: 'Marek arbeitet in Bonn.', answer: false, explanationRu: 'Марек живёт и работает в Кёльне: «Ich wohne jetzt in Köln … Ich arbeite hier».' },
          ],
        },
      ],
    },
    {
      title: 'Kleinanzeigen',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', body: 'Deutschkurs für Anfänger in Leipzig! Info: Telefon 0341 22 81 90.' },
        { label: 'b', body: 'Fahrrad, 3 Jahre alt, nur 90 Euro! Telefon: 0176 34 21 77.' },
        { label: 'c', body: 'Handy, ganz neu, 100 Euro. Schreiben Sie eine E-Mail: handy-ben@web.de' },
        { label: 'd', body: 'Wir suchen eine Wohnung in Leipzig, 2 Zimmer. Telefon: 0157 81 45 63. Familie Rossi' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте объявления. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was kostet das Fahrrad?', options: ['30 Euro', '90 Euro', '100 Euro'], answer: 1, explanationRu: 'Объявление b: «nur 90 Euro». 100 евро стоит мобильный.' },
            { kind: 'mc', question: 'Wie alt ist das Fahrrad?', options: ['3 Jahre', '9 Jahre', '13 Jahre'], answer: 0, explanationRu: '«Fahrrad, 3 Jahre alt» — велосипеду три года.' },
            { kind: 'mc', question: 'Was sucht Familie Rossi?', options: ['ein Fahrrad', 'ein Handy', 'eine Wohnung'], answer: 2, explanationRu: 'Объявление d: «Wir suchen eine Wohnung» — они ищут квартиру.' },
          ],
        },
        {
          instructionDe: 'Welche Anzeige passt? Wählen Sie a, b, c oder d.',
          instructionRu: 'Какое объявление подходит? Выберите a, b, c или d.',
          options: ['Anzeige a', 'Anzeige b', 'Anzeige c', 'Anzeige d'],
          items: [
            { kind: 'match', prompt: 'Sie lernen Deutsch und wohnen in Leipzig.', answer: 0, explanationRu: 'В объявлении a — курс немецкого для начинающих в Лейпциге.' },
            { kind: 'match', prompt: 'Sie brauchen ein Handy.', answer: 2, explanationRu: 'Мобильный продают в объявлении c (связь — по e-mail).' },
            { kind: 'match', prompt: 'Sie brauchen ein Fahrrad.', answer: 1, explanationRu: 'Велосипед за 90 евро — объявление b.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine neue Nummer',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Hallo, hier ist Sabine Krüger. Ich habe eine neue Telefonnummer: null, vier, null – sechs, zwei, acht, eins, fünf. Noch einmal: null, vier, null – sechs, zwei, acht, eins, fünf. Und ich wohne jetzt in Hamburg, Rosenweg dreizehn. Tschüss!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie ist die neue Telefonnummer?', options: ['040 62815', '040 26815', '040 62851'], answer: 0, explanationRu: 'Сабина говорит дважды: null, vier, null – sechs, zwei, acht, eins, fünf = 040 62815.' },
            { kind: 'mc', question: 'Wie ist die Adresse?', options: ['Rosenweg 30', 'Rosenweg 3', 'Rosenweg 13'], answer: 2, explanationRu: '«Rosenweg dreizehn» — dreizehn = 13. Тридцать было бы dreißig.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [{ kind: 'tf', statement: 'Sabine wohnt jetzt in Hamburg.', answer: true, explanationRu: '«Und ich wohne jetzt in Hamburg».' }],
        },
      ],
    },
    {
      title: 'Wie alt bist du?',
      kind: 'dialog',
      speakers: { A: 'Lea', B: 'Max' },
      situation: 'Lea und Max sprechen im Sportverein.',
      text: `A: Max, wie alt bist du?
B: Ich bin vierundzwanzig. Und du, Lea?
A: Ich bin einunddreißig. Und Herr Wagner?
B: Herr Wagner ist schon siebenundsechzig!
A: Wirklich? Und wo wohnt ihr?
B: Tom und ich wohnen in Bonn, in der Kirchstraße zwölf.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie alt ist Max?', options: ['24', '42', '34'], answer: 0, explanationRu: 'vier-und-zwanzig = 4 + 20 = 24.' },
            { kind: 'mc', question: 'Wie alt ist Lea?', options: ['13', '30', '31'], answer: 2, explanationRu: 'ein-und-dreißig = 1 + 30 = 31.' },
            { kind: 'mc', question: 'Wie alt ist Herr Wagner?', options: ['76', '67', '57'], answer: 1, explanationRu: 'sieben-und-sechzig = 7 + 60 = 67.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [{ kind: 'tf', statement: 'Max wohnt in Bonn.', answer: true, explanationRu: '«Tom und ich wohnen in Bonn» — Макс и Том живут в Бонне.' }],
        },
      ],
    },
  ],
};
