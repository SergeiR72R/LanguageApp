import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich habe gestern Pizza ___.',
      options: ['kaufen', 'gekauft', 'kaufe'],
      answer: 1,
      explanationRu: 'Перфект: habe + Partizip II. kaufen → gekauft.',
    },
    {
      type: 'choice',
      prompt: 'Du ___ aber lange telefoniert!',
      options: ['habe', 'hat', 'hast'],
      answer: 2,
      explanationRu: 'С du глагол haben имеет форму hast: du hast telefoniert.',
    },
    {
      type: 'gap',
      audio: 'gemacht',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['gemacht'],
      explanationRu: 'gemacht — Partizip II от machen: ge + mach + t.',
    },
    {
      type: 'gap',
      audio: 'gearbeitet',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['gearbeitet'],
      explanationRu: 'gearbeitet — от arbeiten. Основа кончается на -t, поэтому -et.',
    },
    {
      type: 'choice',
      audio: 'Sie hat als Kellnerin gearbeitet.',
      prompt: 'Кем работала женщина?',
      options: ['продавщицей', 'официанткой', 'медсестрой', 'учительницей'],
      answer: 1,
      explanationRu: 'die Kellnerin — официантка.',
    },
    {
      type: 'choice',
      prompt: 'Ich habe meine Freundin in Berlin ___.',
      options: ['gebesucht', 'besuchen', 'besucht'],
      answer: 2,
      explanationRu: 'У глаголов с приставкой be- нет ge- в причастии: besuchen → besucht.',
    },
    {
      type: 'choice',
      prompt: 'Welches Wort ist richtig? Wir haben die Wohnung ___.',
      options: ['geputzt', 'geputzen', 'putzt'],
      answer: 0,
      explanationRu: 'putzen — правильный глагол: ge + putz + t = geputzt.',
    },
    {
      type: 'gap',
      prompt: 'Er hat zwei Jahre in Bonn ___.',
      answers: ['gewohnt'],
      hintRu: 'wohnen',
      explanationRu: 'wohnen → gewohnt: ge + wohn + t.',
    },
    {
      type: 'gap',
      prompt: 'Habt ihr schon ___?',
      answers: ['eingekauft'],
      hintRu: 'einkaufen',
      explanationRu: 'einkaufen — отделяемый глагол: ge стоит между ein и kauft → eingekauft.',
    },
    {
      type: 'gap',
      prompt: 'Sie hat in Moskau Medizin ___.',
      answers: ['studiert'],
      hintRu: 'studieren',
      explanationRu: 'Глаголы на -ieren — без ge-: studieren → studiert.',
    },
    {
      type: 'gap',
      prompt: 'Ich ___ eine halbe Stunde am Bahnhof gewartet.',
      answers: ['habe'],
      explanationRu: 'warten образует перфект с haben. С ich — habe.',
    },
    {
      type: 'choice',
      audio: 'Ich habe mein Auto verkauft.',
      prompt: 'Что сделал человек?',
      options: ['купил машину', 'отремонтировал машину', 'продал машину'],
      answer: 2,
      explanationRu: 'verkaufen — продавать, verkauft — продал. Купил было бы gekauft.',
    },
    {
      type: 'gap',
      audio: 'Mein Kollege hat heute Kuchen gekauft.',
      prompt: 'Что купил коллега? ___',
      answers: ['Kuchen', 'einen Kuchen'],
      explanationRu: 'Слышно: «hat heute Kuchen gekauft» — коллега купил пирог.',
    },
    {
      type: 'order',
      words: ['Wo', 'hast', 'du', 'früher', 'gearbeitet?'],
      translationRu: 'Где ты работал раньше?',
      explanationRu: 'W-вопрос: Wo + hast (2-е место) + du … причастие gearbeitet в конце.',
    },
    {
      type: 'order',
      words: ['Was', 'habt', 'ihr', 'gekocht?'],
      translationRu: 'Что вы приготовили?',
      explanationRu: 'Вопросительное слово, habt на 2-м месте, ihr, причастие gekocht в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте предложение в перфект.',
      prompt: 'Sie arbeitet im Büro.',
      answers: ['Sie hat im Büro gearbeitet.'],
      explanationRu: 'arbeitet → hat … gearbeitet. hat на 2-м месте, gearbeitet в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте предложение в перфект.',
      prompt: 'Ich räume mein Zimmer auf.',
      answers: ['Ich habe mein Zimmer aufgeräumt.'],
      explanationRu: 'aufräumen — отделяемый глагол: auf + ge + räumt = aufgeräumt.',
    },
    {
      type: 'choice',
      prompt: 'Der Arzt sagt, du ___ viel schlafen.',
      options: ['soll', 'sollst', 'sollen'],
      answer: 1,
      explanationRu: 'Повторение (юнит 16): du sollst — так сказал врач.',
    },
    {
      type: 'choice',
      prompt: 'Wie gefällt ___ die Jacke?',
      options: ['dir', 'du', 'dich'],
      answer: 0,
      explanationRu: 'Повторение (юнит 15): Wie gefällt dir …? — Как тебе нравится …?',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ morgen um 7 Uhr arbeiten.',
      options: ['müssen', 'musst', 'muss'],
      answer: 2,
      explanationRu: 'Повторение (юнит 12): ich muss — без окончания.',
    },
  ],
  reading: [
    {
      title: 'Wir suchen Sie!',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          body: 'Restaurant „Zur Post“ sucht Koch oder Köchin. Arbeitszeit: Dienstag bis Samstag, 16 bis 23 Uhr. Telefon: 0711 23 45 67.',
        },
        {
          label: 'b',
          body: 'Bäckerei Klein: Wir suchen eine Verkäuferin oder einen Verkäufer für Samstag und Sonntag, 6 bis 12 Uhr. Kommen Sie einfach in die Bäckerei!',
        },
        {
          label: 'c',
          body: 'Autowerkstatt Schmidt: Mechaniker gesucht! Vollzeit, Montag bis Freitag. Bitte rufen Sie an: 0711 98 76 54.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt? Für eine Person gibt es keine Anzeige.',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит каждому человеку? Для одного человека подходящего объявления нет.',
          options: ['Anzeige a', 'Anzeige b', 'Anzeige c'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Lena möchte nur am Wochenende arbeiten.', answer: 1, explanationRu: 'Пекарня ищет продавца на субботу и воскресенье — это выходные.' },
            { kind: 'match', prompt: 'Herr Wolf ist Mechaniker und möchte Vollzeit arbeiten.', answer: 2, explanationRu: 'Автомастерская ищет механика на полный день (Vollzeit).' },
            { kind: 'match', prompt: 'Maria kocht gern und kann am Abend arbeiten.', answer: 0, explanationRu: 'Ресторан ищет повара, работа с 16 до 23 часов — вечером.' },
            { kind: 'match', prompt: 'Peter sucht Arbeit in einem Büro.', answer: -1, explanationRu: 'Ни одно объявление не предлагает работу в офисе.' },
          ],
        },
      ],
    },
    {
      title: 'Meine neue Arbeit',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Natascha,

wie geht es dir? Ich habe jetzt eine neue Arbeit! Ich arbeite als Verkäuferin in einem Blumenladen. Gestern habe ich zum ersten Mal allein gearbeitet. Ich habe viele Blumen verkauft und mit vielen Kunden geredet. Am Abend hat mein Chef gesagt: „Gut gemacht!“ Die Kolleginnen sind sehr nett. Nur eine Sache ist nicht so gut: Ich verdiene nicht viel.
Am Samstag habe ich frei. Hast du Zeit? Wir können zusammen Kaffee trinken.

Liebe Grüße
Irina`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте e-mail. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Irina arbeitet in einem Supermarkt.', answer: false, explanationRu: 'Ирина работает в цветочном магазине: «in einem Blumenladen».' },
            { kind: 'tf', statement: 'Gestern hat Irina allein gearbeitet.', answer: true, explanationRu: '«Gestern habe ich zum ersten Mal allein gearbeitet» — вчера впервые одна.' },
            { kind: 'tf', statement: 'Der Chef findet Irinas Arbeit gut.', answer: true, explanationRu: 'Начальник сказал: «Gut gemacht!» — «Молодец!».' },
            { kind: 'tf', statement: 'Irina verdient viel Geld.', answer: false, explanationRu: '«Ich verdiene nicht viel» — она зарабатывает немного.' },
            { kind: 'tf', statement: 'Irina möchte Natascha am Samstag treffen.', answer: true, explanationRu: 'В субботу Ирина свободна и предлагает вместе выпить кофе.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht aus dem Büro',
      kind: 'monolog',
      situation: 'Tom hört eine Nachricht auf seiner Mailbox.',
      text: 'Hallo Tom, hier ist Maria aus dem Büro. Ich habe heute mit dem Chef telefoniert. Das Meeting ist jetzt am Dienstag, nicht am Montag. Es beginnt um 10 Uhr. Ich habe schon einen Raum gebucht, Raum 12. Bitte bring deinen Laptop mit. Bis Dienstag!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте сообщение. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wer hat mit dem Chef telefoniert?', options: ['Tom', 'Maria', 'ein Kollege'], answer: 1, explanationRu: 'Мария говорит: «Ich habe heute mit dem Chef telefoniert».' },
            { kind: 'mc', question: 'Wann ist das Meeting?', options: ['am Montag um 10 Uhr', 'am Dienstag um 12 Uhr', 'am Dienstag um 10 Uhr'], answer: 2, explanationRu: '«am Dienstag, nicht am Montag. Es beginnt um 10 Uhr.»' },
            { kind: 'mc', question: 'Was soll Tom mitbringen?', options: ['seinen Laptop', 'Kaffee', 'sein Handy'], answer: 0, explanationRu: '«Bitte bring deinen Laptop mit» — принести ноутбук.' },
          ],
        },
      ],
    },
    {
      title: 'Am Montag im Büro',
      kind: 'dialog',
      speakers: { A: 'Frau Kaya', B: 'Herr Lang' },
      situation: 'Zwei Kollegen sprechen am Montagmorgen.',
      text: `A: Guten Morgen, Herr Lang! Was haben Sie am Wochenende gemacht?
B: Guten Morgen, Frau Kaya! Ich habe meine Wohnung geputzt und eingekauft. Und Sie?
A: Ich habe am Samstag gearbeitet. Wir haben im Laden viel verkauft.
B: Oh, am Samstag? Und am Sonntag?
A: Am Sonntag habe ich gekocht. Meine Eltern haben uns besucht.
B: Schön! Ich habe am Sonntag Fußball gespielt.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Herr Lang hat am Wochenende eingekauft.', answer: true, explanationRu: '«Ich habe meine Wohnung geputzt und eingekauft.»' },
            { kind: 'tf', statement: 'Frau Kaya hat am Samstag gearbeitet.', answer: true, explanationRu: '«Ich habe am Samstag gearbeitet» — она работала в магазине.' },
            { kind: 'tf', statement: 'Am Sonntag hat Frau Kaya ihre Eltern besucht.', answer: false, explanationRu: 'Наоборот: родители приехали к ней — «Meine Eltern haben uns besucht».' },
            { kind: 'tf', statement: 'Herr Lang hat am Sonntag Tennis gespielt.', answer: false, explanationRu: 'Он играл в футбол: «Ich habe am Sonntag Fußball gespielt».' },
          ],
        },
      ],
    },
  ],
};
