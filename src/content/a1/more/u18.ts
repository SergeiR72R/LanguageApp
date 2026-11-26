import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      audio: 'Es regnet.',
      prompt: 'Какая погода?',
      options: ['идёт снег', 'идёт дождь', 'жарко'],
      answer: 1,
      explanationRu: 'regnen — идёт дождь (der Regen — дождь). Es regnet.',
    },
    {
      type: 'choice',
      audio: 'Im Herbst ist es oft windig.',
      prompt: 'О каком времени года идёт речь?',
      options: ['весна', 'лето', 'осень', 'зима'],
      answer: 2,
      explanationRu: 'der Herbst — осень. Im Herbst ist es oft windig — осенью часто ветрено.',
    },
    {
      type: 'gap',
      audio: 'Es sind minus fünf Grad.',
      prompt: 'Сколько градусов? Напишите число цифрами: ___',
      answers: ['-5', 'minus 5', '−5', '- 5'],
      explanationRu: 'minus fünf Grad — минус пять градусов (−5).',
    },
    {
      type: 'choice',
      prompt: '___ du am Wochenende in Berlin?',
      options: ['War', 'Warst', 'Wart'],
      answer: 1,
      explanationRu: 'Прошедшее от sein с du: du warst (как du bist → du warst).',
    },
    {
      type: 'choice',
      prompt: 'Wir ___ am Samstag viel Arbeit.',
      options: ['waren', 'hattet', 'hatten'],
      answer: 2,
      explanationRu: 'Arbeit haben — иметь работу. Прошедшее от haben с wir: wir hatten.',
    },
    {
      type: 'choice',
      prompt: 'Er ___ nach Hause gegangen.',
      options: ['hat', 'ist', 'sind'],
      answer: 1,
      explanationRu: 'gehen — движение, поэтому sein: er ist gegangen.',
    },
    {
      type: 'choice',
      prompt: 'Ich habe ein Buch ___.',
      options: ['gelest', 'geleset', 'gelesen'],
      answer: 2,
      explanationRu: 'lesen — неправильный глагол: gelesen (окончание -en).',
    },
    {
      type: 'gap',
      prompt: 'Ihr ___ zu spät gekommen!',
      answers: ['seid'],
      explanationRu: 'kommen — движение, перфект с sein. С ihr: ihr seid gekommen.',
    },
    {
      type: 'gap',
      prompt: 'Wir haben im Park Freunde ___.',
      answers: ['getroffen'],
      hintRu: 'treffen',
      explanationRu: 'treffen — неправильный глагол: getroffen (e → o, окончание -en).',
    },
    {
      type: 'gap',
      prompt: 'Meine Schwester ___ nach Spanien geflogen.',
      answers: ['ist'],
      explanationRu: 'fliegen — движение, поэтому sein: sie ist geflogen.',
    },
    {
      type: 'gap',
      prompt: 'Gestern ___ ich Kopfschmerzen.',
      answers: ['hatte'],
      hintRu: 'haben, прошедшее время',
      explanationRu: 'Прошедшее от haben: ich hatte. Gestern hatte ich Kopfschmerzen — вчера у меня болела голова.',
    },
    {
      type: 'gap',
      audio: 'Ich habe lange geschlafen.',
      prompt: 'Ich habe lange ___.',
      answers: ['geschlafen'],
      explanationRu: 'schlafen — неправильный глагол: geschlafen. Перфект с haben.',
    },
    {
      type: 'choice',
      audio: 'Wir sind zu Hause geblieben.',
      prompt: 'Что сделали эти люди?',
      options: ['поехали домой', 'остались дома', 'работали дома'],
      answer: 1,
      explanationRu: 'bleiben — оставаться: wir sind geblieben — мы остались. «Поехали домой» было бы: Wir sind nach Hause gefahren.',
    },
    {
      type: 'order',
      words: ['Bist', 'du', 'mit dem Zug', 'gefahren?'],
      translationRu: 'Ты ехал на поезде?',
      explanationRu: 'Вопрос без вопросительного слова: Bist на 1-м месте, причастие gefahren в конце.',
    },
    {
      type: 'order',
      words: ['Wie', 'war', 'das Wetter', 'in Italien?'],
      translationRu: 'Какая была погода в Италии?',
      explanationRu: 'W-вопрос: Wie + war (2-е место) + das Wetter + место.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте предложение в перфект.',
      prompt: 'Wir essen Fisch.',
      answers: ['Wir haben Fisch gegessen.'],
      explanationRu: 'essen — с haben и неправильным причастием: Wir haben Fisch gegessen.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте предложение в перфект.',
      prompt: 'Ich stehe um 7 Uhr auf.',
      answers: ['Ich bin um 7 Uhr aufgestanden.', 'Ich bin um sieben Uhr aufgestanden.'],
      explanationRu: 'aufstehen — перфект с sein, ge в середине: auf + ge + standen → Ich bin um 7 Uhr aufgestanden.',
    },
    {
      type: 'gap',
      prompt: 'Ich habe zehn Jahre in einer Firma ___.',
      answers: ['gearbeitet'],
      hintRu: 'arbeiten',
      explanationRu: 'Повторение (юнит 17): arbeiten → gearbeitet (основа на -t, поэтому -et).',
    },
    {
      type: 'choice',
      prompt: 'Mir ___ die Beine weh.',
      options: ['tut', 'tun', 'tust'],
      answer: 1,
      explanationRu: 'Повторение (юнит 16): die Beine — мн. число, поэтому tun.',
    },
    {
      type: 'choice',
      prompt: 'Ich fahre mit ___ Fahrrad zum See.',
      options: ['dem', 'der', 'den'],
      answer: 0,
      explanationRu: 'Повторение (юнит 14): после mit — дательный падеж. das Fahrrad → mit dem Fahrrad.',
    },
  ],
  reading: [
    {
      title: 'Das Wetter am Wochenende',
      textType: 'Wetterbericht',
      texts: [
        {
          body: `Samstag: Im Norden regnet es viel, und es gibt Wind. Die Temperaturen: 12 bis 15 Grad. Im Süden scheint die Sonne, und es ist warm: bis 22 Grad.

Sonntag: In ganz Deutschland ist es sonnig und trocken. Am Nachmittag gibt es im Süden vielleicht ein Gewitter. Die Temperaturen: 18 bis 24 Grad.

Montag: Es ist kühl und bewölkt, nur 10 bis 14 Grad.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Wetterbericht. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте прогноз погоды. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Am Samstag regnet es im Norden.', answer: true, explanationRu: '«Im Norden regnet es viel» — на севере много дождя.' },
            { kind: 'tf', statement: 'Am Samstag ist es im Süden kalt.', answer: false, explanationRu: 'На юге светит солнце и тепло — до 22 градусов.' },
            { kind: 'tf', statement: 'Am Sonntag ist das Wetter in ganz Deutschland schön.', answer: true, explanationRu: '«In ganz Deutschland ist es sonnig und trocken» — солнечно и сухо.' },
            { kind: 'tf', statement: 'Am Montag sind es 20 Grad.', answer: false, explanationRu: 'В понедельник только 10–14 градусов.' },
          ],
        },
      ],
    },
    {
      title: 'Grüße aus Salzburg',
      textType: 'Postkarte',
      texts: [
        {
          body: `Liebe Oma, lieber Opa,

viele Grüße aus Österreich! Wir sind am Samstag mit dem Zug nach Salzburg gefahren. Die Fahrt war lang, aber schön. Am Sonntag hatten wir Glück: Die Sonne hat geschienen, und wir sind in den Bergen gewandert. Am Abend haben wir Fisch gegessen. Heute regnet es leider. Wir sind im Hotel geblieben und haben Karten gespielt. Am Freitag kommen wir nach Hause.

Bis bald!
Eure Mia`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Postkarte. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте открытку. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie ist Mia nach Salzburg gefahren?', options: ['mit dem Auto', 'mit dem Zug', 'mit dem Bus'], answer: 1, explanationRu: '«Wir sind … mit dem Zug nach Salzburg gefahren» — на поезде.' },
            { kind: 'mc', question: 'Wie war das Wetter am Sonntag?', options: ['Es hat geregnet.', 'Es war kalt.', 'Die Sonne hat geschienen.'], answer: 2, explanationRu: '«Am Sonntag … Die Sonne hat geschienen» — светило солнце.' },
            { kind: 'mc', question: 'Was hat die Familie heute gemacht?', options: ['Sie ist gewandert.', 'Sie hat Karten gespielt.', 'Sie hat Fisch gegessen.'], answer: 1, explanationRu: 'Сегодня дождь, поэтому они остались в отеле и играли в карты.' },
            { kind: 'mc', question: 'Wann kommt Mia nach Hause?', options: ['am Freitag', 'am Sonntag', 'heute'], answer: 0, explanationRu: '«Am Freitag kommen wir nach Hause» — в пятницу.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Das Wetter für morgen',
      kind: 'monolog',
      situation: 'Sie hören den Wetterbericht im Radio.',
      text: 'Und jetzt das Wetter für morgen, Dienstag. Am Morgen gibt es viel Nebel. Am Mittag scheint die Sonne, und es ist warm: 20 Grad. Am Abend gibt es Regen und vielleicht auch ein Gewitter. Nehmen Sie also Ihren Regenschirm mit! Am Mittwoch ist es wieder sonnig und trocken.',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie den Wetterbericht. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте прогноз погоды. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie ist das Wetter am Dienstagmorgen?', options: ['Es gibt Nebel.', 'Es regnet.', 'Es schneit.'], answer: 0, explanationRu: '«Am Morgen gibt es viel Nebel» — утром туман.' },
            { kind: 'mc', question: 'Wie warm ist es am Mittag?', options: ['12 Grad', '20 Grad', '25 Grad'], answer: 1, explanationRu: '«es ist warm: 20 Grad» — двадцать градусов.' },
            { kind: 'mc', question: 'Was soll man mitnehmen?', options: ['eine Sonnenbrille', 'eine Jacke', 'einen Regenschirm'], answer: 2, explanationRu: 'Вечером дождь: «Nehmen Sie also Ihren Regenschirm mit!»' },
          ],
        },
      ],
    },
    {
      title: 'Ein Anruf bei Oma',
      kind: 'dialog',
      speakers: { A: 'Max', B: 'Oma' },
      situation: 'Max telefoniert am Montag mit seiner Oma.',
      text: `A: Hallo Oma, hier ist Max!
B: Hallo Max! Wie war dein Wochenende?
A: Toll! Am Samstag bin ich mit Papa ins Schwimmbad gegangen.
B: Schön! Und am Sonntag?
A: Am Sonntag hat es geschneit! Wir sind in den Park gegangen und haben einen Schneemann gebaut.
B: War es kalt?
A: Ja, sehr kalt, minus drei Grad. Aber dann haben wir zu Hause Tee getrunken und Kuchen gegessen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Max ist am Samstag ins Schwimmbad gegangen.', answer: true, explanationRu: '«Am Samstag bin ich mit Papa ins Schwimmbad gegangen.»' },
            { kind: 'tf', statement: 'Am Sonntag hat es geregnet.', answer: false, explanationRu: 'В воскресенье шёл снег: «Am Sonntag hat es geschneit!»' },
            { kind: 'tf', statement: 'Max hat im Park einen Schneemann gebaut.', answer: true, explanationRu: '«Wir sind in den Park gegangen und haben einen Schneemann gebaut.»' },
            { kind: 'tf', statement: 'Es waren plus drei Grad.', answer: false, explanationRu: 'Было очень холодно: «minus drei Grad» — минус три градуса.' },
          ],
        },
      ],
    },
  ],
};
