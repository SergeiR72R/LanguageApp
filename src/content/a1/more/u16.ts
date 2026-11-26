import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      audio: 'Ich will Kaffee trinken.',
      prompt: 'Что вы слышите?',
      options: ['Ich soll Kaffee trinken.', 'Ich will Kaffee trinken.', 'Ich darf Kaffee trinken.'],
      answer: 1,
      explanationRu: 'Слышно «will» — хочу: Ich will Kaffee trinken. — Я хочу пить кофе.',
    },
    {
      type: 'choice',
      prompt: 'Du ___ im Bett bleiben. Das sagt der Arzt.',
      options: ['soll', 'sollst', 'sollt'],
      answer: 1,
      explanationRu: 'С du модальный глагол кончается на -st: du sollst. sollen — потому что так сказал врач.',
    },
    {
      type: 'choice',
      prompt: 'Er ___ heute nicht schwimmen. Er ist krank.',
      options: ['darfst', 'dürfen', 'darf'],
      answer: 2,
      explanationRu: 'er/sie/es darf — без окончания, как ich darf. nicht dürfen = нельзя.',
    },
    {
      type: 'choice',
      audio: 'Mir tut das Bein weh.',
      prompt: 'Что болит?',
      options: ['рука', 'нога', 'живот', 'голова'],
      answer: 1,
      explanationRu: 'das Bein — нога. Mir tut das Bein weh = у меня болит нога.',
    },
    {
      type: 'gap',
      audio: 'Fieber',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Fieber'],
      explanationRu: 'Fieber — температура. ie читается как долгое «и:»: ФИ:-ба.',
    },
    {
      type: 'gap',
      audio: 'der Rücken',
      prompt: 'Напишите слово без артикля: ___',
      answers: ['Rücken'],
      explanationRu: 'der Rücken — спина. ü читается как «ю», ck — как «к».',
    },
    {
      type: 'choice',
      prompt: 'Mir ___ die Augen weh.',
      options: ['tut', 'tust', 'tun'],
      answer: 2,
      explanationRu: 'die Augen — мн. число, поэтому tun: Mir tun die Augen weh.',
    },
    {
      type: 'choice',
      prompt: 'Was ___ dir weh?',
      options: ['tut', 'tun', 'tust'],
      answer: 0,
      explanationRu: 'В вопросе «Что болит?» глагол стоит в ед. числе: Was tut dir weh?',
    },
    {
      type: 'gap',
      prompt: 'Wir ___ am Wochenende nach Hamburg fahren.',
      answers: ['wollen'],
      hintRu: 'wollen',
      explanationRu: 'С wir форма совпадает с инфинитивом: wir wollen.',
    },
    {
      type: 'gap',
      prompt: 'Kinder, ihr ___ hier nicht laut sprechen. Das ist eine Arztpraxis.',
      answers: ['dürft'],
      hintRu: 'dürfen',
      explanationRu: 'С ihr: ihr dürft (умлаут ü остаётся, окончание -t). nicht dürfen = нельзя.',
    },
    {
      type: 'gap',
      prompt: 'Frau Müller, Sie ___ die Tabletten nach dem Essen nehmen.',
      answers: ['sollen'],
      hintRu: 'sollen',
      explanationRu: 'Вежливое Sie: форма как у инфинитива — Sie sollen.',
    },
    {
      type: 'choice',
      audio: 'Darf ich morgen arbeiten?',
      prompt: 'Что спрашивает человек?',
      options: ['Должен ли он завтра работать?', 'Хочет ли он завтра работать?', 'Можно ли ему завтра работать?'],
      answer: 2,
      explanationRu: 'Darf ich …? — Можно мне …? dürfen = разрешение.',
    },
    {
      type: 'gap',
      audio: 'Der Arzt sagt, ich soll zu Hause bleiben.',
      prompt: 'Что сказал врач? Ich soll zu Hause ___.',
      answers: ['bleiben'],
      explanationRu: 'zu Hause bleiben — оставаться дома. Инфинитив bleiben стоит в конце.',
    },
    {
      type: 'order',
      words: ['Darf', 'ich', 'hier', 'parken?'],
      translationRu: 'Можно мне здесь припарковаться?',
      explanationRu: 'Вопрос без вопросительного слова: модальный глагол на 1-м месте, инфинитив parken — в конце.',
    },
    {
      type: 'order',
      words: ['Der Arzt', 'sagt,', 'ich', 'soll', 'viel', 'schlafen.'],
      translationRu: 'Врач говорит, что мне нужно много спать.',
      explanationRu: 'После «Der Arzt sagt,» идёт обычное предложение: ich soll (2-е место) … schlafen (в конце).',
    },
    {
      type: 'transform',
      instructionRu: 'Добавьте модальный глагол wollen.',
      prompt: 'Paul spielt Tennis.',
      answers: ['Paul will Tennis spielen.'],
      explanationRu: 'will встаёт на 2-е место, spielen — в инфинитиве в конце: Paul will Tennis spielen.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите то же самое с конструкцией «Mir tut … weh».',
      prompt: 'Ich habe Kopfschmerzen.',
      answers: ['Mir tut der Kopf weh.', 'Der Kopf tut mir weh.'],
      explanationRu: 'Kopfschmerzen = боль в голове → Mir tut der Kopf weh (der Kopf — одна голова, поэтому tut).',
    },
    {
      type: 'choice',
      prompt: 'Der Pullover ist schön. Ich kaufe ___.',
      options: ['er', 'ihn', 'sie', 'es'],
      answer: 1,
      explanationRu: 'Повторение (юнит 15): der Pullover → в винительном падеже ihn.',
    },
    {
      type: 'choice',
      prompt: 'Ich fahre mit ___ Bus zum Arzt.',
      options: ['der', 'den', 'dem', 'das'],
      answer: 2,
      explanationRu: 'Повторение (юнит 14): после mit — дательный падеж. der Bus → mit dem Bus.',
    },
    {
      type: 'gap',
      prompt: 'Herr Petrow, ___ Sie bitte viel Wasser!',
      answers: ['trinken'],
      hintRu: 'trinken, вежливая просьба',
      explanationRu: 'Повторение (юнит 13): императив для Sie = инфинитив + Sie: Trinken Sie!',
    },
  ],
  reading: [
    {
      title: 'Praxis Dr. Wolf',
      textType: 'Schild',
      texts: [
        {
          heading: 'Praxis Dr. Anna Wolf',
          body: `Sprechstunden:
Montag bis Freitag: 8 bis 12 Uhr
Dienstag und Donnerstag auch: 15 bis 18 Uhr
Mittwochnachmittag und Samstag: geschlossen

Bitte bringen Sie immer Ihre Karte von der Krankenkasse mit.
Sie haben Fieber oder Husten? Bitte rufen Sie zuerst an: 0221 45 67 89.
Im Wartezimmer bitte nicht telefonieren!`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie das Schild. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте табличку. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Am Mittwochnachmittag ist die Praxis geschlossen.', answer: true, explanationRu: '«Mittwochnachmittag … geschlossen» — в среду после обеда закрыто.' },
            { kind: 'tf', statement: 'Am Samstag kann man zur Ärztin gehen.', answer: false, explanationRu: 'В субботу практика закрыта: «Samstag: geschlossen».' },
            { kind: 'tf', statement: 'Am Donnerstag um 16 Uhr ist Sprechstunde.', answer: true, explanationRu: 'Во вторник и четверг есть приём и с 15 до 18 часов.' },
            { kind: 'tf', statement: 'Mit Fieber soll man zuerst anrufen.', answer: true, explanationRu: '«Sie haben Fieber oder Husten? Bitte rufen Sie zuerst an» — сначала позвонить.' },
            { kind: 'tf', statement: 'Im Wartezimmer darf man telefonieren.', answer: false, explanationRu: '«Im Wartezimmer bitte nicht telefonieren!» — в приёмной звонить нельзя.' },
          ],
        },
      ],
    },
    {
      title: 'Ich bin krank',
      textType: 'E-Mail',
      texts: [
        {
          body: `Lieber Herr Braun,

leider kann ich heute nicht zum Deutschkurs kommen. Ich bin krank. Mir tut der Rücken sehr weh, und ich kann nicht gut gehen. Der Arzt sagt, ich soll drei Tage zu Hause bleiben. Ich darf auch nicht lange sitzen. Am Montag will ich wieder kommen.
Bitte schreiben Sie kurz: Was sind die Hausaufgaben?

Viele Grüße
Olga Iwanowa`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте e-mail. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Warum schreibt Olga?', options: ['Sie hat keine Zeit.', 'Sie ist krank.', 'Sie hat einen Termin.'], answer: 1, explanationRu: '«Ich bin krank» — Ольга больна.' },
            { kind: 'mc', question: 'Was tut Olga weh?', options: ['der Rücken', 'der Kopf', 'der Bauch'], answer: 0, explanationRu: '«Mir tut der Rücken sehr weh» — болит спина.' },
            { kind: 'mc', question: 'Wie lange soll Olga zu Hause bleiben?', options: ['eine Woche', 'zwei Tage', 'drei Tage'], answer: 2, explanationRu: '«ich soll drei Tage zu Hause bleiben» — три дня.' },
            { kind: 'mc', question: 'Wann will Olga wieder in den Kurs kommen?', options: ['am Freitag', 'am Montag', 'morgen'], answer: 1, explanationRu: '«Am Montag will ich wieder kommen» — в понедельник.' },
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
      text: 'Guten Tag, hier ist die Praxis Dr. Wolf. Frau Iwanowa, Sie haben morgen um 9 Uhr einen Termin. Aber die Ärztin ist leider krank. Bitte kommen Sie am Freitag um 10 Uhr. Bringen Sie bitte Ihre Karte von der Krankenkasse mit. Und Sie dürfen vor dem Termin nichts essen. Vielen Dank und auf Wiederhören!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте сообщение. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Der neue Termin ist am Freitag um 10 Uhr.', answer: true, explanationRu: '«Bitte kommen Sie am Freitag um 10 Uhr» — новый приём в пятницу в 10.' },
            { kind: 'tf', statement: 'Die Ärztin ist im Urlaub.', answer: false, explanationRu: 'Врач не в отпуске, она больна: «die Ärztin ist leider krank».' },
            { kind: 'tf', statement: 'Frau Iwanowa soll ihre Karte mitbringen.', answer: true, explanationRu: '«Bringen Sie bitte Ihre Karte von der Krankenkasse mit.»' },
            { kind: 'tf', statement: 'Vor dem Termin darf sie essen.', answer: false, explanationRu: '«Sie dürfen vor dem Termin nichts essen» — есть нельзя.' },
          ],
        },
      ],
    },
    {
      title: 'In der Apotheke',
      kind: 'dialog',
      speakers: { A: 'Apotheker', B: 'Kundin' },
      situation: 'Eine Frau ist in der Apotheke.',
      text: `A: Guten Tag! Was kann ich für Sie tun?
B: Guten Tag. Ich habe Husten, und mir tut der Hals weh.
A: Haben Sie auch Fieber?
B: Nein, kein Fieber.
A: Dann nehmen Sie diesen Tee und diese Tabletten.
B: Wie oft soll ich die Tabletten nehmen?
A: Viermal am Tag. Und trinken Sie viel Wasser.
B: Gut. Was kostet das?
A: Zusammen 12,50 Euro.
B: Hier, bitte. Danke schön!
A: Gute Besserung!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте разговор. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was hat die Frau?', options: ['Fieber', 'Husten und Halsschmerzen', 'Bauchschmerzen'], answer: 1, explanationRu: '«Ich habe Husten, und mir tut der Hals weh» — кашель и боль в горле. Температуры нет.' },
            { kind: 'mc', question: 'Wie oft soll sie die Tabletten nehmen?', options: ['dreimal am Tag', 'zweimal am Tag', 'viermal am Tag'], answer: 2, explanationRu: 'Аптекарь говорит: «Viermal am Tag» — четыре раза в день.' },
            { kind: 'mc', question: 'Was kostet alles zusammen?', options: ['12,50 Euro', '2,50 Euro', '20,50 Euro'], answer: 0, explanationRu: '«Zusammen 12,50 Euro» — двенадцать евро пятьдесят.' },
          ],
        },
      ],
    },
  ],
};
