import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Er ___ heute nicht arbeiten. Er ist krank.',
      options: ['kann', 'kannst', 'können'],
      answer: 0,
      explanationRu: 'Форма er от können — kann (как у ich, без окончания).',
    },
    {
      type: 'choice',
      prompt: 'Ihr ___ morgen um acht Uhr da sein.',
      options: ['müsst', 'muss', 'müssen'],
      answer: 0,
      explanationRu: 'Форма ihr от müssen — müsst (с умлаутом и окончанием -t).',
    },
    {
      type: 'gap',
      prompt: 'Wir ___ leider nicht kommen. (können)',
      answers: ['können'],
      explanationRu: 'Форма wir совпадает с инфинитивом: wir können.',
    },
    {
      type: 'gap',
      prompt: '___ du am Samstag arbeiten? (müssen)',
      answers: ['Musst'],
      explanationRu: 'Форма du от müssen — musst, без умлаута. В вопросе — на 1-м месте.',
    },
    {
      type: 'gap',
      prompt: 'Ich muss um sechs Uhr ___. (aufstehen)',
      answers: ['aufstehen'],
      explanationRu: 'После модального глагола второй глагол стоит в конце в инфинитиве. Глагол с приставкой — слитно: aufstehen.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Am Montag kann ich nicht kommen.', 'Am Montag ich kann nicht kommen.', 'Am Montag kann ich nicht komme.', 'Am Montag kann kommen ich nicht.'],
      answer: 0,
      explanationRu: 'kann — на 2-м месте, ich — после него, инфинитив kommen — в самом конце.',
    },
    {
      type: 'order',
      words: ['Musst', 'du', 'morgen', 'arbeiten?'],
      translationRu: 'Тебе нужно завтра работать?',
      explanationRu: 'Вопрос «да/нет»: musst на 1-м месте, arbeiten — в конце.',
    },
    {
      type: 'order',
      words: ['Wann', 'können', 'Sie', 'kommen?'],
      translationRu: 'Когда вы можете прийти?',
      explanationRu: 'W-вопрос: Wann + модальный глагол + Sie + инфинитив в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Добавьте модальный глагол из скобок.',
      prompt: 'Wir kaufen heute ein. (müssen)',
      answers: ['Wir müssen heute einkaufen.', 'Heute müssen wir einkaufen.'],
      explanationRu: 'müssen — на 2-м месте; einkaufen в конце пишется слитно.',
    },
    {
      type: 'transform',
      instructionRu: 'Добавьте модальный глагол из скобок.',
      prompt: 'Kommst du am Dienstag? (können)',
      answers: ['Kannst du am Dienstag kommen?'],
      explanationRu: 'Kannst — на 1-м месте вместо kommst, а kommen уходит в конец.',
    },
    {
      type: 'choice',
      audio: 'Können Sie am Freitag um zehn Uhr kommen?',
      prompt: 'Какое время предлагают?',
      options: ['пятница, 10:00', 'четверг, 10:00', 'пятница, 12:00'],
      answer: 0,
      explanationRu: 'am Freitag — в пятницу, um zehn Uhr — в 10 часов.',
    },
    {
      type: 'gap',
      audio: 'Am Montag muss ich arbeiten.',
      prompt: 'Когда человек должен работать? Am ___ muss ich arbeiten.',
      answers: ['Montag'],
      explanationRu: 'Montag — понедельник.',
    },
    {
      type: 'gap',
      audio: 'der dritte',
      prompt: 'Напишите число цифрами: ___',
      answers: ['3.', '3'],
      explanationRu: 'der dritte — третий (3.). Особая форма: не «dreite».',
    },
    {
      type: 'choice',
      audio: 'Mein Geburtstag ist am zwanzigsten Juli.',
      prompt: 'Когда день рождения?',
      options: ['20 июля', '2 июля', '20 июня', '12 июля'],
      answer: 0,
      explanationRu: 'zwanzigsten — двадцатого (20.), Juli — июль. Не путайте Juli и Juni!',
    },
    {
      type: 'gap',
      audio: 'Donnerstag',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Donnerstag'],
      explanationRu: 'Donnerstag — четверг. Пишется с большой буквы, как все существительные.',
    },
    {
      type: 'choice',
      prompt: 'Heute ist der ___ Juni. (7.)',
      options: ['siebte', 'siebzehnte', 'sieben'],
      answer: 0,
      explanationRu: '7. — der siebte (особая форма). siebzehnte — это 17.',
    },
    {
      type: 'gap',
      prompt: 'Der Termin ist am ___ April. (1.)',
      answers: ['ersten'],
      explanationRu: 'После am порядковое числительное получает -en: am ersten April.',
    },
    {
      type: 'gap',
      prompt: 'Mein Bruder ___ gern Bücher. (lesen)',
      answers: ['liest'],
      explanationRu: 'Повторение (юнит 11): lesen → er liest (e → ie).',
    },
    {
      type: 'choice',
      prompt: 'Wann ___ der Film an?',
      options: ['fängt', 'anfängt', 'fangt'],
      answer: 0,
      explanationRu: 'Повторение (юниты 10–11): anfangen — приставка an в конце, a → ä: der Film fängt … an.',
    },
    {
      type: 'transform',
      instructionRu: 'Повторение (юнит 11). Начните предложение со слов в скобках.',
      prompt: 'Wir fahren am Sonntag nach Berlin. (Am Sonntag)',
      answers: ['Am Sonntag fahren wir nach Berlin.'],
      explanationRu: 'Глагол всегда на 2-м месте: Am Sonntag fahren wir …',
    },
  ],
  reading: [
    {
      title: 'Praxis Dr. Wolf',
      textType: 'Schild',
      texts: [
        {
          heading: 'Praxis Dr. med. Anna Wolf',
          body: `Sprechzeiten:
Montag, Dienstag, Donnerstag: 8 bis 12 Uhr und 15 bis 18 Uhr
Mittwoch und Freitag: 8 bis 12 Uhr, nachmittags geschlossen
Urlaub: 22. Juli bis 9. August
Sie brauchen einen Termin. Telefon: 0341 55 61 20`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie das Schild. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте табличку. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Am Mittwoch ist die Praxis am Nachmittag offen.', answer: false, explanationRu: 'В среду и пятницу только с 8 до 12, после обеда закрыто (nachmittags geschlossen).' },
            { kind: 'tf', statement: 'Am Montag kann man um 16 Uhr kommen.', answer: true, explanationRu: 'В понедельник приём и с 15 до 18 часов — 16 часов подходит.' },
            { kind: 'tf', statement: 'Am 1. August ist die Praxis offen.', answer: false, explanationRu: 'С 22 июля по 9 августа — отпуск (Urlaub), практика закрыта.' },
            { kind: 'tf', statement: 'Man muss vorher anrufen und einen Termin machen.', answer: true, explanationRu: '«Sie brauchen einen Termin. Telefon: …» — без записи нельзя.' },
          ],
        },
      ],
    },
    {
      title: 'Ich kann am Freitag nicht',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Sabine,
es tut mir leid, ich kann am Freitag leider nicht ins Kino gehen. Ich muss bis 20 Uhr arbeiten. Kannst du am Samstag? Der Film ist auch am Samstag um 19 Uhr. Am Sonntag kann ich nicht. Ich muss meine Mutter besuchen, sie hat am 12. Mai Geburtstag.
Liebe Grüße
Olga`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте письмо. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Warum kann Olga am Freitag nicht?', options: ['Sie muss arbeiten.', 'Sie ist krank.', 'Sie besucht ihre Mutter.'], answer: 0, explanationRu: '«Ich muss bis 20 Uhr arbeiten.» Маму она навещает в воскресенье.' },
            { kind: 'mc', question: 'Wann möchte Olga den Film sehen?', options: ['Am Samstag um 19 Uhr.', 'Am Freitag um 20 Uhr.', 'Am Sonntag um 19 Uhr.'], answer: 0, explanationRu: '«Kannst du am Samstag? Der Film ist auch am Samstag um 19 Uhr.»' },
            { kind: 'mc', question: 'Wann hat Olgas Mutter Geburtstag?', options: ['Am 12. Mai.', 'Am 2. Mai.', 'Am 20. Mai.'], answer: 0, explanationRu: '«sie hat am 12. Mai Geburtstag».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht von der Praxis',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Guten Tag, Frau Petrowa, hier ist die Praxis Dr. Wolf. Ihr Termin am Mittwoch um zehn Uhr geht leider nicht. Dr. Wolf ist krank. Können Sie am Freitag um halb neun kommen? Bitte rufen Sie zurück. Unsere Nummer ist 0341 55 61 20. Vielen Dank und auf Wiederhören!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте текст. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Warum geht der Termin am Mittwoch nicht?', options: ['Dr. Wolf ist krank.', 'Frau Petrowa ist krank.', 'Die Praxis hat Urlaub.'], answer: 0, explanationRu: '«Dr. Wolf ist krank» — болен врач, а не пациентка.' },
            { kind: 'mc', question: 'Wann ist der neue Termin?', options: ['Am Freitag um 8.30 Uhr.', 'Am Freitag um 9.30 Uhr.', 'Am Mittwoch um 10 Uhr.'], answer: 0, explanationRu: '«am Freitag um halb neun» — в пятницу в 8:30.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Frau Petrowa muss die Praxis anrufen.', answer: true, explanationRu: '«Bitte rufen Sie zurück» — её просят перезвонить.' },
          ],
        },
      ],
    },
    {
      title: 'Wann hast du Zeit?',
      kind: 'dialog',
      speakers: { A: 'Paul', B: 'Mia' },
      situation: 'Zwei Freunde machen einen Termin.',
      text: `A: Hallo Mia, wann hast du nächste Woche Zeit?
B: Hm, am Montag muss ich arbeiten, und am Dienstag habe ich Deutschkurs.
A: Und am Mittwoch?
B: Am Mittwoch kann ich, aber erst ab fünf Uhr.
A: Gut. Wir können um sechs Uhr Tennis spielen.
B: Super! Und danach können wir Pizza essen.
A: Ja, gern. Also Mittwoch, der achte Mai, um sechs Uhr. Bis dann!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте разговор. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was macht Mia am Dienstag?', options: ['Sie hat Deutschkurs.', 'Sie arbeitet.', 'Sie spielt Tennis.'], answer: 0, explanationRu: '«am Dienstag habe ich Deutschkurs». Работает она в понедельник.' },
            { kind: 'mc', question: 'Wann spielen Paul und Mia Tennis?', options: ['Am Mittwoch um 18 Uhr.', 'Am Mittwoch um 17 Uhr.', 'Am Montag um 18 Uhr.'], answer: 0, explanationRu: '«Wir können um sechs Uhr Tennis spielen» — в среду в 18 часов. С пяти часов Мия только свободна.' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Das Treffen ist am 8. Mai.', answer: true, explanationRu: '«Mittwoch, der achte Mai» — 8 мая.' },
            { kind: 'tf', statement: 'Mia kann am Mittwoch schon um drei Uhr.', answer: false, explanationRu: 'Мия свободна только с пяти часов: «erst ab fünf Uhr».' },
          ],
        },
      ],
    },
  ],
};
