import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Es ist 9:15. Es ist ___ nach neun.',
      options: ['Viertel', 'halb', 'zehn', 'fünf'],
      answer: 0,
      explanationRu: '15 минут — это четверть часа: Viertel nach neun = 9:15.',
    },
    {
      type: 'choice',
      audio: 'Es ist halb vier.',
      prompt: 'Который час?',
      options: ['3:30', '4:30', '3:00', '4:00'],
      answer: 0,
      explanationRu: 'halb vier — «половина четвёртого», то есть 3:30. Не путайте с 4:30!',
    },
    {
      type: 'gap',
      audio: 'zehn nach elf',
      prompt: 'Напишите время цифрами (например, 9:20): ___',
      answers: ['11:10', '11.10', '23:10', '23.10'],
      explanationRu: 'zehn nach elf — десять минут двенадцатого: 11:10.',
    },
    {
      type: 'choice',
      audio: 'Es ist zwanzig Uhr fünfzehn.',
      prompt: 'Который час?',
      options: ['20:15', '20:50', '15:20', '21:15'],
      answer: 0,
      explanationRu: 'Официальное время: zwanzig Uhr (20 часов) fünfzehn (15 минут) = 20:15. Сначала часы, потом минуты.',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ meinen Freund an.',
      options: ['rufe', 'anrufe', 'rufen', 'ruft'],
      answer: 0,
      explanationRu: 'anrufen делится: rufe (форма для ich) на 2-м месте, an — в конце.',
    },
    {
      type: 'gap',
      prompt: 'Es ist warm. Ich mache das Fenster ___.',
      answers: ['auf'],
      hintRu: 'aufmachen — открывать',
      explanationRu: 'Тепло — значит, окно открывают: aufmachen → Ich mache das Fenster auf.',
    },
    {
      type: 'gap',
      prompt: 'Wann ___ du auf? (aufstehen)',
      answers: ['stehst'],
      explanationRu: 'Форма для du: stehst. Приставка auf уже стоит в конце вопроса.',
    },
    {
      type: 'gap',
      prompt: 'Wir ___ am Abend fern. (fernsehen)',
      answers: ['sehen'],
      explanationRu: 'fernsehen: для wir — sehen, приставка fern в конце.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Ich kaufe heute ein.', 'Ich einkaufe heute.', 'Ich kaufe ein heute.', 'Ein ich kaufe heute.'],
      answer: 0,
      explanationRu: 'Приставка ein уходит в самый конец предложения, после всех других слов: Ich kaufe heute ein.',
    },
    {
      type: 'order',
      words: ['Holst', 'du', 'Anna', 'ab?'],
      translationRu: 'Ты заберёшь Анну?',
      explanationRu: 'Вопрос «да/нет»: глагол holst на 1-м месте, приставка ab — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Составьте предложение. Глагол поставьте в нужную форму.',
      prompt: 'wir / aufräumen / am Abend / die Küche',
      answers: ['Wir räumen am Abend die Küche auf.', 'Wir räumen die Küche am Abend auf.', 'Am Abend räumen wir die Küche auf.'],
      explanationRu: 'räumen — на 2-м месте, auf — в самом конце: Wir räumen am Abend die Küche auf.',
    },
    {
      type: 'gap',
      audio: 'Ich rufe meine Schwester an.',
      prompt: 'Кому звонит человек? Ich rufe meine ___ an.',
      answers: ['Schwester'],
      explanationRu: 'Вы слышите: Ich rufe meine Schwester an — я звоню сестре.',
    },
    {
      type: 'choice',
      audio: 'Der Kurs ist von neun bis zwölf Uhr.',
      prompt: 'Когда идёт курс?',
      options: ['9–12 Uhr', '9–11 Uhr', '10–12 Uhr'],
      answer: 0,
      explanationRu: 'von neun bis zwölf — с девяти до двенадцати.',
    },
    {
      type: 'choice',
      prompt: 'Der Supermarkt ist ___ sieben ___ zweiundzwanzig Uhr offen.',
      options: ['von … bis', 'um … um', 'am … am'],
      answer: 0,
      explanationRu: 'Промежуток времени «с … до …» — von … bis.',
    },
    {
      type: 'gap',
      audio: 'Ich sehe am Abend fern.',
      prompt: 'Когда человек смотрит телевизор? Ich sehe am ___ fern.',
      answers: ['Abend'],
      explanationRu: 'am Abend — вечером. С частями дня используется am.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите время по-разговорному (informell).',
      prompt: 'Es ist 18:45 Uhr.',
      answers: ['Es ist Viertel vor sieben.', 'Viertel vor sieben'],
      explanationRu: '18:45 — без четверти семь: Viertel vor sieben. В разговоре используют 12 часов.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите время официально (как по радио или на вокзале).',
      prompt: 'Es ist halb drei am Nachmittag.',
      answers: ['Es ist vierzehn Uhr dreißig.', 'Es ist 14:30 Uhr.', 'Es ist 14.30 Uhr.', 'Vierzehn Uhr dreißig'],
      explanationRu: 'halb drei после обеда = 14:30. Официально: vierzehn Uhr dreißig.',
    },
    {
      type: 'choice',
      prompt: 'Ich möchte ___ Kaffee, bitte.',
      options: ['einen', 'ein', 'eine'],
      answer: 0,
      explanationRu: 'Повторение (юнит 8): der Kaffee — мужской род, в аккузативе ein → einen.',
    },
    {
      type: 'gap',
      prompt: 'Ich kaufe zwei ___. (die Flasche)',
      answers: ['Flaschen'],
      explanationRu: 'Повторение (юнит 9): множественное число от die Flasche — die Flaschen (+ -n).',
    },
    {
      type: 'choice',
      prompt: 'Das ist ___ Bruder. (мой)',
      options: ['mein', 'meine', 'meinen'],
      answer: 0,
      explanationRu: 'Повторение (юнит 6): der Bruder — мужской род, в именительном падеже: mein Bruder.',
    },
  ],
  reading: [
    {
      title: 'Öffnungszeiten',
      textType: 'Schilder',
      texts: [
        { label: 'a', heading: 'Bäckerei Sonne', body: 'Wir sind täglich von 6.00 bis 18.00 Uhr für Sie da. Frische Brötchen ab 6 Uhr!' },
        { label: 'b', heading: 'Arztpraxis Dr. Klein', body: 'Sprechzeiten: 8.00 bis 12.00 Uhr und 15.00 bis 18.00 Uhr. Mittagspause: 12.00 bis 15.00 Uhr.' },
        { label: 'c', heading: 'Supermarkt Frischmarkt', body: 'Öffnungszeiten: 7.00 bis 22.00 Uhr. Wir haben auch Getränke und Blumen.' },
        { label: 'd', heading: 'Schwimmbad', body: 'Das Schwimmbad ist von 9.00 bis 20.00 Uhr offen.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Schilder. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте таблички. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Die Bäckerei macht um 6 Uhr auf.', answer: true, explanationRu: '«von 6.00 bis 18.00 Uhr» — пекарня открывается в 6 часов.' },
            { kind: 'tf', statement: 'Die Arztpraxis ist um 13 Uhr offen.', answer: false, explanationRu: 'С 12 до 15 часов — обеденный перерыв (Mittagspause), в 13 часов практика закрыта.' },
            { kind: 'tf', statement: 'Der Supermarkt macht um 22 Uhr zu.', answer: true, explanationRu: '«7.00 bis 22.00 Uhr» — супермаркет закрывается в 22 часа.' },
            { kind: 'tf', statement: 'Das Schwimmbad macht um 8 Uhr auf.', answer: false, explanationRu: 'Бассейн открывается в 9 часов, а не в 8.' },
          ],
        },
      ],
    },
    {
      title: 'Hast du morgen Zeit?',
      textType: 'E-Mail',
      texts: [
        {
          body: `Hallo Lena,
wie geht's? Ich habe eine Frage: Hast du morgen Zeit? Ich arbeite morgen von acht bis zwei. Ich habe um 14 Uhr Feierabend. Ich kaufe dann noch ein und ich hole Paul um halb vier ab. Wir sind ab fünf Uhr zu Hause. Trinken wir am Abend zusammen Tee? Ich backe auch einen Kuchen.
Viele Grüße
Katja`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте письмо. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann hat Katja Feierabend?', options: ['Um 14 Uhr.', 'Um 15.30 Uhr.', 'Um 17 Uhr.'], answer: 0, explanationRu: '«Ich habe um 14 Uhr Feierabend.»' },
            { kind: 'mc', question: 'Was macht Katja um halb vier?', options: ['Sie holt Paul ab.', 'Sie arbeitet.', 'Sie trinkt Tee.'], answer: 0, explanationRu: '«ich hole Paul um halb vier ab» — в 15:30 она забирает Пауля.' },
            { kind: 'mc', question: 'Was möchte Katja am Abend?', options: ['Mit Lena Tee trinken.', 'Mit Lena einkaufen.', 'Lena abholen.'], answer: 0, explanationRu: '«Trinken wir am Abend zusammen Tee?» — она приглашает Лену на чай.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht von Markus',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Hallo Anna, hier ist Markus. Ich arbeite heute leider bis sechs Uhr. Der Film fängt um acht Uhr an. Ich komme um halb acht. Wir trinken dann noch einen Kaffee, ja? Bis später, tschüss!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте текст. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Bis wann arbeitet Markus heute?', options: ['Bis 18 Uhr.', 'Bis 19.30 Uhr.', 'Bis 20 Uhr.'], answer: 0, explanationRu: '«Ich arbeite heute leider bis sechs Uhr» — до 18 часов.' },
            { kind: 'mc', question: 'Wann fängt der Film an?', options: ['Um 20 Uhr.', 'Um 19.30 Uhr.', 'Um 18 Uhr.'], answer: 0, explanationRu: '«Der Film fängt um acht Uhr an» — в восемь вечера, то есть в 20 часов.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Markus kommt um halb acht.', answer: true, explanationRu: '«Ich komme um halb acht» — он придёт в 19:30.' },
          ],
        },
      ],
    },
    {
      title: 'Am Morgen in der Familie',
      kind: 'dialog',
      speakers: { A: 'Tim, ein Kind', B: 'Tims Mutter' },
      situation: 'Sie hören ein Gespräch am Morgen.',
      text: `A: Mama, wie spät ist es?
B: Es ist schon Viertel vor sieben. Stehst du jetzt auf?
A: Ja, ja. Wann fängt die Schule an?
B: Um acht Uhr. Frühstückst du heute?
A: Nein, ich trinke nur einen Kakao. Und wann kommst du heute nach Hause?
B: Ich arbeite bis vier. Ich komme um halb fünf nach Hause.
A: Gut. Ich räume dann mein Zimmer auf.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Es ist 6.45 Uhr.', answer: true, explanationRu: '«Viertel vor sieben» — без четверти семь, то есть 6:45.' },
            { kind: 'tf', statement: 'Tim frühstückt viel.', answer: false, explanationRu: 'Тим не завтракает: «ich trinke nur einen Kakao».' },
            { kind: 'tf', statement: 'Die Mutter kommt um halb fünf nach Hause.', answer: true, explanationRu: '«Ich komme um halb fünf nach Hause» — в 16:30.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann fängt die Schule an?', options: ['Um 8 Uhr.', 'Um 7.45 Uhr.', 'Um 6.45 Uhr.'], answer: 0, explanationRu: '«Um acht Uhr» — школа начинается в восемь.' },
          ],
        },
      ],
    },
  ],
};
