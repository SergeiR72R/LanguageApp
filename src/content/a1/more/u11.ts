import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Du ___ sehr gut Deutsch!',
      options: ['sprichst', 'sprechst', 'spricht', 'sprecht'],
      answer: 0,
      explanationRu: 'sprechen: e → i в форме du, окончание -st: du sprichst.',
    },
    {
      type: 'choice',
      prompt: 'Maria ___ jeden Tag ein Buch.',
      options: ['liest', 'lest', 'lese', 'lesen'],
      answer: 0,
      explanationRu: 'lesen: e → ie в форме er/sie/es — sie liest.',
    },
    {
      type: 'gap',
      prompt: 'Peter ___ gern Fahrrad. (fahren)',
      answers: ['fährt'],
      explanationRu: 'fahren: a → ä в форме er — er fährt.',
    },
    {
      type: 'gap',
      prompt: '___ du am Samstag deine Freunde? (treffen)',
      answers: ['Triffst'],
      explanationRu: 'treffen: e → i и двойное f — du triffst.',
    },
    {
      type: 'gap',
      prompt: 'Das Baby ___ viel. (schlafen)',
      answers: ['schläft'],
      explanationRu: 'schlafen: a → ä в форме es — das Baby schläft.',
    },
    {
      type: 'gap',
      prompt: 'Er ___ gern Pizza. (essen)',
      answers: ['isst'],
      explanationRu: 'essen: e → i — er isst (два s, без третьего).',
    },
    {
      type: 'choice',
      audio: 'Was nimmst du?',
      prompt: 'Что вы слышите?',
      options: ['Was nimmst du?', 'Was nehmt ihr?', 'Was nimmt er?'],
      answer: 0,
      explanationRu: 'Вы слышите «nimmst du» — форма du от nehmen.',
    },
    {
      type: 'gap',
      audio: 'Er spricht Russisch.',
      prompt: 'Напишите глагол: Er ___ Russisch.',
      answers: ['spricht'],
      explanationRu: 'sprechen → er spricht (e → i).',
    },
    {
      type: 'choice',
      audio: 'Meine Frau tanzt gern, aber ich wandere lieber.',
      prompt: 'Что мужчина любит больше?',
      options: ['ходить в походы', 'танцевать', 'плавать'],
      answer: 0,
      explanationRu: '«ich wandere lieber» — он больше любит ходить в походы. Танцевать любит жена.',
    },
    {
      type: 'choice',
      prompt: 'Ich spiele gern Tennis. Ich spiele lieber Fußball. Und ___ spiele ich Schach – das ist mein Hobby Nummer 1!',
      options: ['am liebsten', 'gern', 'nicht gern'],
      answer: 0,
      explanationRu: 'gern → lieber → am liebsten. Хобби номер один — это am liebsten («больше всего»).',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Heute trifft Anna ihre Freundin.', 'Heute Anna trifft ihre Freundin.', 'Heute Anna ihre Freundin trifft.'],
      answer: 0,
      explanationRu: 'Heute — 1-е место, глагол trifft — 2-е, подлежащее Anna — после глагола.',
    },
    {
      type: 'order',
      words: ['Was', 'macht', 'ihr', 'am Wochenende?'],
      translationRu: 'Что вы делаете в выходные?',
      explanationRu: 'W-вопрос: вопросительное слово, глагол, подлежащее, потом остальное.',
    },
    {
      type: 'order',
      words: ['Was', 'liest', 'du', 'gern?'],
      translationRu: 'Что ты любишь читать?',
      explanationRu: 'Was + глагол (du liest) + подлежащее + gern.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните предложение со слов в скобках.',
      prompt: 'Wir fahren am Wochenende nach Hamburg. (Am Wochenende)',
      answers: ['Am Wochenende fahren wir nach Hamburg.'],
      explanationRu: 'Am Wochenende — 1-е место, глагол fahren — 2-е, wir — после глагола.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение для «er».',
      prompt: 'Ich sehe gern Filme. (Er …)',
      answers: ['Er sieht gern Filme.'],
      explanationRu: 'sehen: e → ie в форме er — er sieht.',
    },
    {
      type: 'gap',
      audio: 'Freizeit',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Freizeit'],
      explanationRu: 'Freizeit — свободное время. «ei» читается как «ай», z — как «ц».',
    },
    {
      type: 'choice',
      audio: 'Am Samstag schwimmt Lisa, und am Sonntag spielt sie Tennis.',
      prompt: 'Что делает Лиза в воскресенье?',
      options: ['играет в теннис', 'плавает', 'танцует'],
      answer: 0,
      explanationRu: '«am Sonntag spielt sie Tennis» — в воскресенье она играет в теннис. Плавает она в субботу.',
    },
    {
      type: 'gap',
      prompt: 'Ich stehe um sechs Uhr ___.',
      answers: ['auf'],
      explanationRu: 'Повторение (юнит 10): aufstehen — приставка auf уходит в конец.',
    },
    {
      type: 'choice',
      prompt: 'Es ist 8:30. Es ist ___.',
      options: ['halb neun', 'halb acht', 'Viertel nach acht'],
      answer: 0,
      explanationRu: 'Повторение (юнит 10): 8:30 — половина девятого = halb neun.',
    },
    {
      type: 'choice',
      prompt: 'Ich esse gern ___ Apfel.',
      options: ['einen', 'eine', 'ein'],
      answer: 0,
      explanationRu: 'Повторение (юнит 8): der Apfel — мужской род, в аккузативе einen Apfel.',
    },
  ],
  reading: [
    {
      title: 'Kurse in der Freizeit',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', heading: 'Tanzkurs für Anfänger', body: 'Salsa und Tango! Jeden Freitag von 19 bis 21 Uhr. 8 Euro pro Abend.' },
        { label: 'b', heading: 'Schwimmkurs', body: 'Sie schwimmen nicht gut? Unser Kurs für Erwachsene ist am Montag und Mittwoch um 18 Uhr.' },
        { label: 'c', heading: 'Wandergruppe', body: 'Wir wandern jeden Sonntag. Start: 9 Uhr am Bahnhof. Die Tour kostet nichts.' },
        { label: 'd', heading: 'Fotokurs', body: 'Sie fotografieren gern? Unser Fotokurs ist am Samstag von 10 bis 13 Uhr. Preis: 25 Euro.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt? Für eine Person gibt es keine Anzeige.',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит каждому человеку? Для одного человека подходящего объявления нет.',
          options: ['Tanzkurs', 'Schwimmkurs', 'Wandergruppe', 'Fotokurs'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Olga tanzt gern. Sie hat am Freitagabend Zeit.', answer: 0, explanationRu: 'Танцы по пятницам вечером — объявление a.' },
            { kind: 'match', prompt: 'Herr Braun schwimmt nicht gut. Er möchte schwimmen lernen.', answer: 1, explanationRu: 'Курс для взрослых, которые плохо плавают, — объявление b.' },
            { kind: 'match', prompt: 'Familie Wolf ist gern in der Natur. Sie hat nur am Sonntag Zeit.', answer: 2, explanationRu: 'Группа ходит в походы каждое воскресенье — объявление c.' },
            { kind: 'match', prompt: 'Nina hat eine neue Kamera.', answer: 3, explanationRu: 'Новая камера — значит, ей подходит курс фотографии (d).' },
            { kind: 'match', prompt: 'Paul spielt gern Schach.', answer: -1, explanationRu: 'Объявления о шахматах нет — подходящего варианта нет.' },
          ],
        },
      ],
    },
    {
      title: 'Hast du am Samstag Zeit?',
      textType: 'E-Mail',
      texts: [
        {
          body: `Hallo Tom,
hast du am Samstag Zeit? Wir spielen um drei Uhr Fußball. Max und Ali kommen auch. Danach essen wir zusammen Pizza. Am Sonntag habe ich leider keine Zeit. Ich fahre nach Köln, meine Schwester wohnt dort. Am Montag fängt der Deutschkurs wieder an. Kommst du auch?
Bis bald!
Jan`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Jan spielt am Samstag Fußball.', answer: true, explanationRu: '«hast du am Samstag Zeit? Wir spielen um drei Uhr Fußball».' },
            { kind: 'tf', statement: 'Das Spiel fängt um 13 Uhr an.', answer: false, explanationRu: 'Игра в три часа (um drei Uhr), то есть в 15 часов.' },
            { kind: 'tf', statement: 'Am Samstag essen die Freunde Pizza.', answer: true, explanationRu: '«Danach essen wir zusammen Pizza» — после футбола они едят пиццу.' },
            { kind: 'tf', statement: 'Jans Schwester wohnt in Köln.', answer: true, explanationRu: '«Ich fahre nach Köln, meine Schwester wohnt dort.»' },
            { kind: 'tf', statement: 'Der Deutschkurs fängt am Sonntag an.', answer: false, explanationRu: 'Курс начинается в понедельник: «Am Montag fängt der Deutschkurs wieder an».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Ein Konzert am Freitag',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Hallo Lena, hier ist Tanja. Hast du am Freitag Zeit? Es gibt ein Konzert. Die Band spielt Jazz. Das Konzert fängt um acht Uhr an. Die Karten kosten zwölf Euro. Mein Bruder kommt auch mit. Er fährt Auto. Bis dann, tschüss!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте текст. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was gibt es am Freitag?', options: ['Ein Konzert.', 'Ein Fußballspiel.', 'Einen Film.'], answer: 0, explanationRu: '«Es gibt ein Konzert» — в пятницу концерт.' },
            { kind: 'mc', question: 'Wie viel kosten die Karten?', options: ['12 Euro.', '20 Euro.', '8 Euro.'], answer: 0, explanationRu: '«Die Karten kosten zwölf Euro» — 12 евро.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Tanjas Bruder kommt auch mit.', answer: true, explanationRu: '«Mein Bruder kommt auch mit» — брат тоже пойдёт.' },
          ],
        },
      ],
    },
    {
      title: 'Ein Interview: Freizeit',
      kind: 'dialog',
      speakers: { A: 'Reporterin', B: 'Herr Kowalski' },
      situation: 'Eine Reporterin fragt Herrn Kowalski nach seiner Freizeit.',
      text: `A: Herr Kowalski, was machen Sie in der Freizeit?
B: Ich lese sehr gern. Ich lese jeden Tag die Zeitung.
A: Und am Wochenende?
B: Am Samstag treffe ich meine Freunde. Wir spielen Karten.
A: Machen Sie auch Sport?
B: Ja, ich schwimme gern. Aber am liebsten fahre ich Rad.
A: Und Ihre Frau?
B: Meine Frau fährt nicht gern Rad. Sie tanzt lieber.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Interview. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте интервью. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was liest Herr Kowalski jeden Tag?', options: ['Die Zeitung.', 'Ein Buch.', 'E-Mails.'], answer: 0, explanationRu: '«Ich lese jeden Tag die Zeitung.»' },
            { kind: 'mc', question: 'Was macht Herr Kowalski am liebsten?', options: ['Rad fahren.', 'Schwimmen.', 'Tanzen.'], answer: 0, explanationRu: '«Aber am liebsten fahre ich Rad.» Плавать он тоже любит, но меньше.' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Am Samstag spielt Herr Kowalski Karten.', answer: true, explanationRu: '«Am Samstag treffe ich meine Freunde. Wir spielen Karten.»' },
            { kind: 'tf', statement: 'Seine Frau fährt gern Rad.', answer: false, explanationRu: '«Meine Frau fährt nicht gern Rad. Sie tanzt lieber.»' },
          ],
        },
      ],
    },
  ],
};
