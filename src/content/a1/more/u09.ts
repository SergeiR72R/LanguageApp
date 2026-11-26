import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'der Tisch – zwei ___',
      options: ['Tische', 'Tischen', 'Tischs'],
      answer: 0,
      explanationRu: 'der Tisch → die Tische (окончание -e).',
    },
    {
      type: 'choice',
      prompt: 'das Zimmer – drei ___',
      options: ['Zimmers', 'Zimmer', 'Zimmern'],
      answer: 1,
      explanationRu: 'Слова на -er часто не меняются во множественном числе: das Zimmer → die Zimmer.',
    },
    {
      type: 'choice',
      audio: 'die Stühle',
      prompt: 'Что вы слышите?',
      options: ['der Stuhl', 'die Stühle', 'die Stuhle'],
      answer: 1,
      explanationRu: 'Вы слышите «ю» и окончание -e: die Stühle — множественное число от der Stuhl.',
    },
    {
      type: 'gap',
      prompt: 'Ein Brötchen, vier ___.',
      answers: ['Brötchen'],
      explanationRu: 'Слова на -chen во множественном числе не меняются: das Brötchen → die Brötchen.',
    },
    {
      type: 'gap',
      prompt: 'Eine Packung, zwei ___.',
      answers: ['Packungen'],
      explanationRu: 'Слова на -ung получают -en: die Packung → die Packungen.',
    },
    {
      type: 'gap',
      prompt: 'Ein Glas, drei ___.',
      answers: ['Gläser'],
      explanationRu: 'das Glas → die Gläser: окончание -er и умлаут a → ä.',
    },
    {
      type: 'choice',
      prompt: 'Die Bananen ___ 1,99 Euro.',
      options: ['kostet', 'kosten', 'kostest'],
      answer: 1,
      explanationRu: 'die Bananen — множественное число (= sie), поэтому kosten.',
    },
    {
      type: 'gap',
      prompt: 'Was ___ der Käse?',
      answers: ['kostet'],
      explanationRu: 'der Käse — один предмет (= er), поэтому kostet.',
    },
    {
      type: 'gap',
      audio: 'zwei Euro neunundneunzig',
      prompt: 'Напишите цену цифрами: ___ €',
      answers: ['2,99', '2.99'],
      explanationRu: '«zwei Euro neunundneunzig» = 2,99 €. neunundneunzig — «девять и девяносто» = 99.',
    },
    {
      type: 'gap',
      audio: 'Das kostet sieben Euro achtzig.',
      prompt: 'Сколько стоит? ___ €',
      answers: ['7,80', '7.80', '7,8'],
      explanationRu: '«sieben Euro achtzig» = 7,80 €.',
    },
    {
      type: 'choice',
      prompt: 'Ich kaufe ein ___ Äpfel.',
      options: ['Kilo', 'Flasche', 'Glas'],
      answer: 0,
      explanationRu: 'Яблоки покупают килограммами: ein Kilo Äpfel. К тому же Flasche — женского рода (eine Flasche).',
    },
    {
      type: 'choice',
      prompt: 'Wir brauchen eine ___ Wasser.',
      options: ['Kilo', 'Flasche', 'Glas'],
      answer: 1,
      explanationRu: 'Воду покупают в бутылках: eine Flasche Wasser. Перед словом стоит eine — значит, нужно слово женского рода (die Flasche).',
    },
    {
      type: 'gap',
      prompt: 'Haben Sie Tomaten? – Nein, wir haben ___ Tomaten.',
      answers: ['keine'],
      explanationRu: 'Во множественном числе kein → keine.',
    },
    {
      type: 'choice',
      audio: 'Was kosten die Eier?',
      prompt: 'Что спрашивает человек?',
      options: ['Сколько стоит яйцо?', 'Сколько стоят яйца?', 'Есть ли яйца?'],
      answer: 1,
      explanationRu: '«die Eier» и «kosten» — множественное число: сколько стоят яйца?',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте во множественное число.',
      prompt: 'Der Apfel kostet 50 Cent.',
      answers: ['Die Äpfel kosten 50 Cent.'],
      explanationRu: 'der Apfel → die Äpfel; глагол тоже во множественном числе: kosten.',
    },
    {
      type: 'order',
      words: ['Ich', 'brauche', 'zwei', 'Kilo', 'Kartoffeln.'],
      translationRu: 'Мне нужно два килограмма картошки.',
      explanationRu: 'После числа Kilo не меняется (zwei Kilo), а продукт стоит сразу за ним — без предлога.',
    },
    {
      type: 'gap',
      audio: 'Supermarkt',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Supermarkt'],
      explanationRu: 'der Supermarkt. s перед гласной звучит как «з»: «ЗУ-па-маркт».',
    },
    {
      type: 'choice',
      prompt: 'Ich kaufe ___ Kuchen.',
      options: ['einen', 'eine', 'ein'],
      answer: 0,
      explanationRu: 'Повторение юнита 8: der Kuchen — мужской род, после kaufen — Akkusativ: einen Kuchen.',
    },
    {
      type: 'gap',
      prompt: 'Was ___ du? – Ein Kilo Bananen, bitte.',
      answers: ['möchtest'],
      hintRu: 'möchten',
      explanationRu: 'Повторение юнита 8: du möchtest.',
    },
    {
      type: 'choice',
      prompt: 'Das Obst ist ___ teuer.',
      options: ['nicht', 'kein', 'keine'],
      answer: 0,
      explanationRu: 'Повторение юнита 7: teuer — прилагательное, отрицаем словом nicht.',
    },
  ],
  reading: [
    {
      title: 'Angebote im Supermarkt',
      textType: 'Prospekt',
      texts: [
        {
          heading: 'Frischmarkt – Angebote der Woche',
          body: `Äpfel aus Deutschland, 1 Kilo: 1,99 €
Bananen, 1 Kilo: 1,49 €
Kartoffeln, 2 Kilo: 2,99 €
Milch, 1 Liter: 0,99 €
Käse, 200 Gramm: 2,29 €
Mineralwasser, 6 Flaschen: 2,70 €
Eier, 10 Stück: 2,49 €
Brötchen: 6 Stück nur 1,50 €!`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Prospekt. Wählen Sie die richtige Lösung.',
          instructionRu: 'Прочитайте рекламный листок. Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Was kosten 10 Eier?', options: ['1,49 €', '2,49 €', '2,99 €'], answer: 1, explanationRu: '«Eier, 10 Stück: 2,49 €».' },
            { kind: 'mc', question: 'Wie viele Brötchen kosten 1,50 €?', options: ['ein Brötchen', 'sechs Brötchen', 'zehn Brötchen'], answer: 1, explanationRu: '«Brötchen: 6 Stück nur 1,50 €» — шесть булочек.' },
          ],
        },
        {
          instructionDe: 'Richtig oder falsch?',
          instructionRu: 'Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Ein Liter Milch kostet 99 Cent.', answer: true, explanationRu: '«Milch, 1 Liter: 0,99 €» — это 99 центов.' },
            { kind: 'tf', statement: 'Sechs Flaschen Wasser kosten 2,07 €.', answer: false, explanationRu: 'Шесть бутылок стоят 2,70 €, а не 2,07 €. Будьте внимательны с цифрами!' },
            { kind: 'tf', statement: 'Ein Kilo Käse kostet 2,29 €.', answer: false, explanationRu: '2,29 € стоят только 200 граммов сыра, а не килограмм.' },
          ],
        },
      ],
    },
    {
      title: 'Was brauchen wir?',
      textType: 'Kurznachrichten',
      texts: [
        {
          label: 'Marina',
          body: 'Hallo Igor, wir haben keine Milch und keine Eier. Kaufst du bitte zwei Liter Milch, sechs Eier und ein Brot? Wir haben noch Kartoffeln. Und Obst für die Kinder: ein Kilo Äpfel oder Bananen. Die Bananen sind heute billig! Danke! Marina',
        },
        {
          label: 'Igor',
          body: 'Hallo Marina, die Bananen kosten 1,49 €, das ist billig. Ich kaufe zwei Kilo. Brot ist leider nicht da. Ich kaufe sechs Brötchen. Bis gleich! Igor',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Nachrichten. Richtig oder falsch?',
          instructionRu: 'Прочитайте сообщения. Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Marina und Igor haben keine Eier.', answer: true, explanationRu: '«Wir haben keine Milch und keine Eier.»' },
            { kind: 'tf', statement: 'Igor kauft Kartoffeln.', answer: false, explanationRu: 'Картошка дома есть: «Wir haben noch Kartoffeln».' },
            { kind: 'tf', statement: 'Igor kauft ein Brot.', answer: false, explanationRu: 'Хлеба в магазине нет («Brot ist leider nicht da»), поэтому он покупает шесть булочек.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Was kauft Igor für die Kinder?', options: ['Äpfel', 'Bananen', 'Orangen'], answer: 1, explanationRu: 'Бананы дешёвые, поэтому Игорь покупает два килограмма бананов.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Angebote im Supermarkt',
      kind: 'monolog',
      situation: 'Sie hören eine Durchsage im Supermarkt.',
      text: 'Liebe Kundinnen und Kunden! Wir haben heute tolle Angebote. Ein Kilo Tomaten kostet nur einen Euro neunundneunzig. Die Erdbeeren kosten heute zwei Euro fünfzig – eine Packung, fünfhundert Gramm. Und Mineralwasser: Sechs Flaschen kosten nur zwei Euro vierzig. Vielen Dank!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Durchsage. Wählen Sie die richtige Lösung.',
          instructionRu: 'Прослушайте объявление. Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Was kostet ein Kilo Tomaten?', options: ['1,99 €', '2,50 €', '2,40 €'], answer: 0, explanationRu: '«Ein Kilo Tomaten kostet nur einen Euro neunundneunzig» = 1,99 €.' },
            { kind: 'mc', question: 'Was kosten sechs Flaschen Wasser?', options: ['2,40 €', '2,50 €', '6,00 €'], answer: 0, explanationRu: '«Sechs Flaschen kosten nur zwei Euro vierzig» = 2,40 €. 2,50 € стоит клубника.' },
          ],
        },
        {
          instructionDe: 'Richtig oder falsch?',
          instructionRu: 'Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Eine Packung Erdbeeren hat 500 Gramm.', answer: true, explanationRu: '«eine Packung, fünfhundert Gramm».' },
          ],
        },
      ],
    },
    {
      title: 'In der Bäckerei',
      kind: 'dialog',
      speakers: { A: 'Verkäufer', B: 'Kundin' },
      situation: 'Eine Frau kauft Brot und Brötchen.',
      text: `A: Guten Morgen! Was bekommen Sie?
B: Guten Morgen! Ich möchte sechs Brötchen, bitte.
A: Gern. Noch etwas?
B: Ja, ein Brot. Was kostet das Brot hier?
A: Drei Euro zwanzig.
B: Gut, ich nehme das Brot.
A: Sechs Brötchen und ein Brot. Das macht zusammen fünf Euro zwanzig.
B: Hier, bitte. Zehn Euro.
A: Und vier Euro achtzig zurück. Danke und tschüss!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Wählen Sie die richtige Lösung.',
          instructionRu: 'Прослушайте разговор. Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Wie viele Brötchen kauft die Frau?', options: ['vier', 'sechs', 'zehn'], answer: 1, explanationRu: '«Ich möchte sechs Brötchen, bitte.»' },
            { kind: 'mc', question: 'Was kostet das Brot?', options: ['3,20 €', '5,20 €', '4,80 €'], answer: 0, explanationRu: '«Drei Euro zwanzig» = 3,20 €. 5,20 € — это вся покупка, 4,80 € — сдача.' },
          ],
        },
        {
          instructionDe: 'Richtig oder falsch?',
          instructionRu: 'Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Die Frau bezahlt mit zehn Euro.', answer: true, explanationRu: '«Hier, bitte. Zehn Euro.» — она даёт 10 евро и получает 4,80 € сдачи.' },
          ],
        },
      ],
    },
  ],
};
