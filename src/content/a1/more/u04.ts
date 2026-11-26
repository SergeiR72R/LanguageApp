import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das ___ Herr Braun.',
      options: ['sind', 'ist', 'bin'],
      answer: 1,
      explanationRu: '«Das ist …» — «Это …». С das (это) глагол sein имеет форму ist.',
    },
    {
      type: 'choice',
      prompt: '___ heißt du? – Ich heiße Mia.',
      options: ['Wo', 'Wie', 'Woher'],
      answer: 1,
      explanationRu: 'Имя спрашивают со словом wie (как): Wie heißt du? — «Как тебя зовут?».',
    },
    {
      type: 'choice',
      audio: 'Wer ist das?',
      prompt: 'Какой вопрос вы слышите?',
      options: ['Was ist das?', 'Wer ist das?', 'Wo ist das?'],
      answer: 1,
      explanationRu: 'Звучит «вэа ист дас» — Wer ist das? (Кто это?). Was — «вас», wo — «во».',
    },
    {
      type: 'choice',
      prompt: 'Herr Weber, woher ___ Sie?',
      options: ['kommst', 'kommt', 'kommen'],
      answer: 2,
      explanationRu: 'Вежливое Sie (Вы) всегда с окончанием -en: Sie kommen.',
    },
    {
      type: 'choice',
      prompt: 'Frau Klein ___ in Bremen.',
      options: ['wohne', 'wohnst', 'wohnt'],
      answer: 2,
      explanationRu: 'Frau Klein = sie (она). С sie окончание -t: sie wohnt.',
    },
    {
      type: 'choice',
      prompt: 'Вы говорите с пожилым незнакомым мужчиной. Как вежливо спросить его имя?',
      options: ['Wie heißt du?', 'Wie heißen Sie?', 'Wie heißt er?'],
      answer: 1,
      explanationRu: 'Незнакомым взрослым говорят Sie: Wie heißen Sie? «du» — только друзьям, детям, родным.',
    },
    {
      type: 'gap',
      prompt: 'Ich ___ aus Polen.',
      answers: ['komme', 'bin'],
      explanationRu: 'Можно сказать «Ich komme aus Polen» или «Ich bin aus Polen». С ich: komme / bin.',
    },
    {
      type: 'gap',
      prompt: 'Wo ___ du?',
      answers: ['wohnst', 'bist'],
      hintRu: 'wohnen',
      explanationRu: 'С du окончание -st: du wohnst. (Вопрос «Wo bist du?» — «Где ты?» — тоже правильный.)',
    },
    {
      type: 'gap',
      prompt: 'Das ist Anna. ___ kommt aus Wien.',
      answers: ['Sie'],
      explanationRu: 'Анна — женщина, значит «она» — sie. В начале предложения пишем с большой буквы: Sie kommt …',
    },
    {
      type: 'gap',
      prompt: '___ kommst du? – Aus Kasachstan.',
      answers: ['Woher'],
      explanationRu: 'Ответ «Aus Kasachstan» (из Казахстана) — значит вопрос «откуда?» — woher.',
    },
    {
      type: 'gap',
      audio: 'wohnen',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['wohnen'],
      explanationRu: 'wohnen — «жить». h после o не читается, оно только делает o долгим: «ВО-нэн».',
    },
    {
      type: 'gap',
      audio: 'Hallo, ich bin Marta. Ich komme aus Polen.',
      prompt: 'Откуда Марта? Напишите страну по-немецки: ___',
      answers: ['Polen', 'aus Polen'],
      explanationRu: 'Марта говорит «Ich komme aus Polen» — она из Польши (Polen).',
    },
    {
      type: 'choice',
      audio: 'Ich wohne in Hamburg.',
      prompt: 'Где живёт человек?',
      options: ['in Berlin', 'in Hamburg', 'in Bremen'],
      answer: 1,
      explanationRu: 'Человек говорит «Ich wohne in Hamburg» — он живёт в Гамбурге.',
    },
    {
      type: 'order',
      words: ['Wie', 'heißt', 'die', 'Frau?'],
      translationRu: 'Как зовут эту женщину?',
      explanationRu: 'Вопросительное слово wie — первое, глагол heißt — второй, потом «кто»: die Frau.',
    },
    {
      type: 'order',
      words: ['Woher', 'kommen', 'Sie,', 'Frau', 'Roth?'],
      translationRu: 'Откуда Вы, госпожа Рот?',
      explanationRu: 'Woher — 1-е место, kommen — 2-е, затем Sie. Обращение (Frau Roth) стоит в конце через запятую.',
    },
    {
      type: 'transform',
      instructionRu: 'Задайте вопрос другу (на «ты»). Ответом на него будет это предложение.',
      prompt: 'Ich wohne in Leipzig.',
      answers: ['Wo wohnst du?'],
      explanationRu: 'Место «в Лейпциге» — это ответ на вопрос wo (где). С du: Wo wohnst du?',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите то же самое о себе (ich).',
      prompt: 'Er heißt Max und kommt aus Bonn.',
      answers: ['Ich heiße Max und komme aus Bonn.', 'Ich heiße Max und ich komme aus Bonn.'],
      explanationRu: 'С ich у глаголов окончание -e: ich heiße, ich komme.',
    },
    // Wiederholung (Einheiten 1–3)
    {
      type: 'gap',
      audio: 'fünfzehn',
      prompt: 'Повторение. Напишите число цифрами: ___',
      answers: ['15'],
      explanationRu: 'fünfzehn = fünf (5) + zehn (10) = 15.',
    },
    {
      type: 'gap',
      audio: 'Ha, A, En, Es',
      prompt: 'Повторение. Имя произносят по буквам. Напишите его: ___',
      answers: ['Hans'],
      explanationRu: 'Ha = H, A = A, En = N, Es = S → Hans.',
    },
    {
      type: 'choice',
      prompt: 'Повторение. Утром вы приходите на курс. Что вы говорите?',
      options: ['Gute Nacht!', 'Tschüss!', 'Guten Morgen!'],
      answer: 2,
      explanationRu: 'Утром здороваются: Guten Morgen! Gute Nacht — «спокойной ночи», Tschüss — «пока».',
    },
  ],
  reading: [
    {
      title: 'Neu im Deutschkurs',
      textType: 'Steckbriefe',
      texts: [
        { label: 'Tomasz', body: 'Hallo! Ich heiße Tomasz. Ich komme aus Polen, aus Krakau. Ich wohne jetzt in Dresden. Ich lerne hier Deutsch.' },
        { label: 'Elena', body: 'Ich bin Elena. Ich komme aus Russland, aus Samara. Ich wohne jetzt auch in Dresden. Freut mich!' },
        { label: 'Ahmed', body: 'Hallo, ich bin Ahmed. Ich komme aus Syrien. Ich wohne in Pirna. Pirna ist eine Stadt bei Dresden.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте тексты. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Tomasz kommt aus Polen.', answer: true, explanationRu: '«Ich komme aus Polen, aus Krakau» — Томаш из Польши.' },
            { kind: 'tf', statement: 'Tomasz wohnt in Krakau.', answer: false, explanationRu: 'Он родом из Кракова, но живёт сейчас в Дрездене: «Ich wohne jetzt in Dresden».' },
            { kind: 'tf', statement: 'Elena kommt aus Samara.', answer: true, explanationRu: '«Ich komme aus Russland, aus Samara».' },
            { kind: 'tf', statement: 'Elena wohnt in Russland.', answer: false, explanationRu: 'Елена живёт в Дрездене: «Ich wohne jetzt auch in Dresden».' },
            { kind: 'tf', statement: 'Ahmed wohnt in Dresden.', answer: false, explanationRu: 'Ахмед живёт в Пирне — это город рядом с Дрезденом.' },
          ],
        },
      ],
    },
    {
      title: 'Eine E-Mail an die Lehrerin',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Frau Roth,

ich heiße Wiktor Petrow. Ich bin neu im Kurs. Ich komme aus Russland, aus Omsk. Ich wohne jetzt in Leipzig. Mein Familienname ist Petrow: P – E – T – R – O – W.

Viele Grüße
Wiktor Petrow`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте письмо. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wer schreibt?', options: ['Frau Roth', 'Wiktor Petrow', 'Tomasz'], answer: 1, explanationRu: 'Письмо подписано «Wiktor Petrow», а Frau Roth — это адресат, учительница.' },
            { kind: 'mc', question: 'Woher kommt Wiktor?', options: ['aus Leipzig', 'aus Omsk', 'aus Polen'], answer: 1, explanationRu: '«Ich komme aus Russland, aus Omsk».' },
            { kind: 'mc', question: 'Wo wohnt Wiktor jetzt?', options: ['in Omsk', 'in Moskau', 'in Leipzig'], answer: 2, explanationRu: '«Ich wohne jetzt in Leipzig».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Sprachnachricht',
      kind: 'monolog',
      situation: 'Sie hören eine Sprachnachricht von Maria.',
      text: 'Hallo, hier ist Maria. Ich bin neu im Kurs. Ich komme aus Spanien, aus Madrid. Ich wohne jetzt in Köln. Und du? Wie heißt du? Woher kommst du? Bis bald!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Maria kommt aus Madrid.', answer: true, explanationRu: '«Ich komme aus Spanien, aus Madrid».' },
            { kind: 'tf', statement: 'Maria wohnt in Madrid.', answer: false, explanationRu: 'Мария живёт сейчас в Кёльне: «Ich wohne jetzt in Köln».' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was fragt Maria?', options: ['Wo wohnst du?', 'Woher kommst du?', 'Was lernst du?'], answer: 1, explanationRu: 'Мария спрашивает «Wie heißt du? Woher kommst du?».' },
          ],
        },
      ],
    },
    {
      title: 'Wer ist das?',
      kind: 'dialog',
      speakers: { A: 'Lisa', B: 'Max' },
      situation: 'Lisa und Max sind auf einer Party.',
      text: `A: Max, wer ist das?
B: Das ist Herr Nowak.
A: Woher kommt er?
B: Er kommt aus Tschechien, aus Prag.
A: Und wo wohnt er?
B: Er wohnt jetzt hier in Berlin.
A: Und die Frau? Wer ist das?
B: Das ist Frau Lindner. Sie ist aus Wien.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Woher kommt Herr Nowak?', options: ['aus Polen', 'aus Tschechien', 'aus Österreich'], answer: 1, explanationRu: '«Er kommt aus Tschechien, aus Prag».' },
            { kind: 'mc', question: 'Wo wohnt Herr Nowak?', options: ['in Prag', 'in Wien', 'in Berlin'], answer: 2, explanationRu: '«Er wohnt jetzt hier in Berlin».' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [{ kind: 'tf', statement: 'Frau Lindner kommt aus Wien.', answer: true, explanationRu: '«Das ist Frau Lindner. Sie ist aus Wien» — она из Вены.' }],
        },
      ],
    },
  ],
};
