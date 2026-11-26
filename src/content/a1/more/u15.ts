import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wo ist mein Mantel? Ich finde ___ nicht.',
      options: ['ihn', 'er', 'es'],
      answer: 0,
      explanationRu: 'der Mantel — мужской род. В Akkusativ er → ihn.',
    },
    {
      type: 'choice',
      prompt: 'Die Bluse ist schön. Ich probiere ___ an.',
      options: ['sie', 'ihn', 'es'],
      answer: 0,
      explanationRu: 'die Bluse — женский род: в Akkusativ остаётся sie.',
    },
    {
      type: 'choice',
      audio: 'Der Mantel ist grün.',
      prompt: 'Какого цвета пальто?',
      options: ['зелёное', 'серое', 'синее'],
      answer: 0,
      explanationRu: 'grün — зелёный.',
    },
    {
      type: 'choice',
      prompt: 'Kinder, ich rufe ___ heute an.',
      options: ['euch', 'ihr', 'uns'],
      answer: 0,
      explanationRu: 'ihr → euch (вас) в Akkusativ. Детям, которым говорим «ihr», — euch.',
    },
    {
      type: 'gap',
      prompt: 'Herr Klein, ich verstehe ___ nicht.',
      answers: ['Sie'],
      explanationRu: 'Вежливое Sie в Akkusativ не меняется: Ich verstehe Sie.',
    },
    {
      type: 'gap',
      prompt: 'Das T-Shirt ist billig. Ich nehme ___.',
      answers: ['es'],
      explanationRu: 'das T-Shirt — средний род: в Akkusativ остаётся es.',
    },
    {
      type: 'gap',
      prompt: 'Der Rock ist zu kurz. Ich kaufe ___ nicht.',
      answers: ['ihn'],
      explanationRu: 'der Rock — мужской род: er → ihn. Не путайте: по-русски юбка — «она», а по-немецки der Rock — «он».',
    },
    {
      type: 'choice',
      prompt: '___ Farbe gefällt dir? – Rot.',
      options: ['Welche', 'Welcher', 'Welches'],
      answer: 0,
      explanationRu: 'die Farbe — женский род: welche (как артикль die).',
    },
    {
      type: 'choice',
      prompt: 'Ich nehme ___ Pullover hier.',
      options: ['diesen', 'dieser', 'dieses'],
      answer: 0,
      explanationRu: 'der Pullover — мужской род, и он в Akkusativ (что я беру?): dieser → diesen.',
    },
    {
      type: 'gap',
      prompt: '___ Kleid kaufst du?',
      answers: ['Welches'],
      hintRu: 'welch-',
      explanationRu: 'das Kleid — средний род: welches (окончание как у das: -es).',
    },
    {
      type: 'choice',
      prompt: 'Wie ___ Ihnen die Schuhe?',
      options: ['gefallen', 'gefällt', 'gefallt'],
      answer: 0,
      explanationRu: 'die Schuhe — множественное число, поэтому gefallen.',
    },
    {
      type: 'choice',
      audio: 'Wie gefällt dir die Hose?',
      prompt: 'Что вы слышите?',
      options: ['Wie gefällt dir die Hose?', 'Wie gefallen dir die Schuhe?', 'Wie gefällt dir das Hemd?'],
      answer: 0,
      explanationRu: 'Звучит «die Hose» — брюки.',
    },
    {
      type: 'gap',
      audio: 'Pullover',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Pullover'],
      explanationRu: 'der Pullover — свитер. Двойное ll, конечное -er звучит как «а».',
    },
    {
      type: 'gap',
      audio: 'Die Schuhe kosten neunundfünfzig Euro.',
      prompt: 'Сколько стоят туфли? Напишите цифрами: ___',
      answers: ['59'],
      explanationRu: 'neunundfünfzig = neun + und + fünfzig = 59.',
    },
    {
      type: 'choice',
      audio: 'Kann ich ihn anprobieren?',
      prompt: 'О какой вещи может быть этот вопрос?',
      options: ['der Rock', 'die Bluse', 'das Hemd'],
      answer: 0,
      explanationRu: 'ihn заменяет существительное мужского рода — der Rock.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените существительное местоимением.',
      prompt: 'Ich kaufe den Mantel.',
      answers: ['Ich kaufe ihn.'],
      explanationRu: 'den Mantel (мужской род, Akkusativ) → ihn.',
    },
    {
      type: 'order',
      words: ['Kann', 'ich', 'die', 'Hose', 'anprobieren?'],
      translationRu: 'Можно мне примерить брюки?',
      explanationRu: 'Satzklammer: kann в начале вопроса, инфинитив anprobieren — в самом конце.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (юнит 12): ___ ich die Jacke anprobieren?',
      options: ['Kann', 'Kannst', 'Können'],
      answer: 0,
      explanationRu: 'können: ich kann. В вопросе без вопросительного слова модальный глагол стоит первым.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (юнит 14): Ich fahre mit ___ U-Bahn zum Kaufhaus.',
      options: ['der', 'dem', 'die'],
      answer: 0,
      explanationRu: 'После mit — дательный падеж: die U-Bahn → mit der U-Bahn.',
    },
    {
      type: 'gap',
      prompt: 'Повторение (юнит 13): Anna, ___ doch die Jacke an!',
      answers: ['probier', 'probiere'],
      hintRu: 'anprobieren, форма du',
      explanationRu: 'Императив du: du probierst → Probier … an! Приставка an уходит в конец.',
    },
  ],
  reading: [
    {
      title: 'Kleinanzeigen',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', body: 'Verkaufe Winterjacke, Größe 42, schwarz, fast neu. Nur 25 Euro! Tel. 0176 334455' },
        { label: 'b', body: 'Kinderkleidung: Hosen, Pullover und T-Shirts für Kinder von 2 bis 6 Jahren. Alles nur 2 Euro! Samstag 10 bis 14 Uhr, Gartenstraße 5.' },
        { label: 'c', body: 'Kleid für eine Hochzeit, Farbe: Weiß, Größe 38. Sehr schön! 150 Euro. Bitte nur am Abend anrufen: 0151 987654' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt? Für eine Situation gibt es keine Anzeige.',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит? Для одной ситуации объявления нет.',
          options: ['Anzeige a', 'Anzeige b', 'Anzeige c'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihre Tochter ist vier Jahre alt und braucht Kleidung.', answer: 1, explanationRu: 'Объявление b: одежда для детей от 2 до 6 лет.' },
            { kind: 'match', prompt: 'Sie brauchen eine warme Jacke für den Winter.', answer: 0, explanationRu: 'Объявление a: Winterjacke — зимняя куртка.' },
            { kind: 'match', prompt: 'Sie suchen Schuhe.', answer: -1, explanationRu: 'Обувь (Schuhe) не продаётся ни в одном объявлении.' },
            { kind: 'match', prompt: 'Ihre Schwester braucht ein Kleid für eine Hochzeit.', answer: 2, explanationRu: 'Объявление c: Kleid für eine Hochzeit — платье для свадьбы.' },
          ],
        },
      ],
    },
    {
      title: 'Maria im Kaufhaus',
      textType: 'SMS',
      texts: [
        {
          body: `Hallo Tanja! Ich bin im Kaufhaus Becker. Ich suche ein Kleid für die Party am Samstag. Das Kleid in Rot ist sehr schön, aber es kostet 90 Euro. Das ist zu teuer! Das Kleid in Blau kostet nur 45 Euro, aber es ist zu eng. Jetzt probiere ich noch einen Rock an. Kommst du auch? Das Kaufhaus ist bis 20 Uhr offen. Ich warte in der Cafeteria. Bis gleich! Maria`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die SMS. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте SMS. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Maria sucht eine Jacke.', answer: false, explanationRu: '«Ich suche ein Kleid» — Мария ищет платье, а не куртку.' },
            { kind: 'tf', statement: 'Das Kleid in Rot ist zu teuer.', answer: true, explanationRu: '«…es kostet 90 Euro. Das ist zu teuer!»' },
            { kind: 'tf', statement: 'Das Kleid in Blau ist zu groß.', answer: false, explanationRu: 'Синее платье слишком тесное: «es ist zu eng», а не большое.' },
            { kind: 'tf', statement: 'Das Kaufhaus ist bis 20 Uhr offen.', answer: true, explanationRu: '«Das Kaufhaus ist bis 20 Uhr offen».' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wo wartet Maria?', options: ['in der Cafeteria', 'vor dem Kaufhaus', 'zu Hause'], answer: 0, explanationRu: '«Ich warte in der Cafeteria».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Im Kaufhaus Nord',
      kind: 'monolog',
      situation: 'Sie hören eine Durchsage im Kaufhaus.',
      text: `Liebe Kundinnen und Kunden! Heute im Kaufhaus Nord: Alle Pullover und Jacken kosten nur die Hälfte! Sie finden sie im ersten Stock. Und hier im Erdgeschoss: T-Shirts in vielen Farben, nur fünf Euro. Wir sind heute bis zwanzig Uhr für Sie da. Viel Spaß beim Einkaufen!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was ist heute billig?', options: ['Pullover und Jacken', 'Schuhe', 'Hosen und Röcke'], answer: 0, explanationRu: '«Alle Pullover und Jacken kosten nur die Hälfte» — половина цены.' },
            { kind: 'mc', question: 'Was kostet ein T-Shirt?', options: ['5 Euro', '15 Euro', '50 Euro'], answer: 0, explanationRu: '«T-Shirts in vielen Farben, nur fünf Euro».' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Das Kaufhaus ist heute bis 22 Uhr offen.', answer: false, explanationRu: '«Wir sind heute bis zwanzig Uhr für Sie da» — до 20 часов.' },
          ],
        },
      ],
    },
    {
      title: 'Neue Schuhe',
      kind: 'dialog',
      speakers: { A: 'Lisa', B: 'Paula' },
      situation: 'Zwei Freundinnen sprechen über Kleidung.',
      text: `A: Wie findest du meine Schuhe? Sie sind neu.
B: Sie sind sehr schön! Sind sie grau?
A: Nein, sie sind dunkelblau.
B: Und woher sind sie?
A: Aus dem Kaufhaus am Markt. Sie kosten nur dreißig Euro.
B: Toll! Ich brauche auch Schuhe. Gehen wir am Samstag zusammen einkaufen?
A: Ja, gern! Ich brauche noch eine Jacke für den Winter.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Die Schuhe sind grau.', answer: false, explanationRu: '«Nein, sie sind dunkelblau» — туфли тёмно-синие.' },
            { kind: 'tf', statement: 'Lisa und Paula gehen am Samstag zusammen einkaufen.', answer: true, explanationRu: '«Gehen wir am Samstag zusammen einkaufen? – Ja, gern!»' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was kosten die Schuhe?', options: ['13 Euro', '30 Euro', '33 Euro'], answer: 1, explanationRu: '«Sie kosten nur dreißig Euro».' },
            { kind: 'mc', question: 'Was braucht Lisa noch?', options: ['einen Mantel', 'eine Jacke', 'einen Pullover'], answer: 1, explanationRu: '«Ich brauche noch eine Jacke für den Winter».' },
          ],
        },
      ],
    },
  ],
};
