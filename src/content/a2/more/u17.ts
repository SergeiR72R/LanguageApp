import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das Papier ___ gesammelt.',
      options: ['wird', 'werden', 'wirst'],
      answer: 0,
      explanationRu: 'das Papier — 3-е лицо ед. ч. → wird. wirst — форма для du.',
    },
    {
      type: 'choice',
      prompt: 'Die Dosen ___ in den gelben Sack geworfen.',
      options: ['werden', 'wird', 'werdet'],
      answer: 0,
      explanationRu: 'die Dosen — мн. ч. (3-е лицо) → werden. werdet — форма для ihr.',
    },
    {
      type: 'choice',
      prompt: 'Im Park werden viele Bäume ___.',
      options: ['gepflanzt', 'pflanzen', 'pflanzt', 'pflanzte'],
      answer: 0,
      explanationRu: 'В пассиве после werden в конце стоит Partizip II: pflanzen → gepflanzt.',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Hier wird kein Plastik verkauft.“?',
      options: ['Здесь не продают пластик.', 'Здесь не покупают пластик.', 'Здесь выбрасывают пластик.'],
      answer: 0,
      explanationRu: 'verkaufen — продавать; wird … verkauft — «продают / продаётся». Отрицание kein Plastik.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Der Müll wird jeden Montag abgeholt.', 'Den Müll wird jeden Montag abgeholt.', 'Der Müll wird jeden Montag abholen.'],
      answer: 0,
      explanationRu: 'Подлежащее в пассиве стоит в Nominativ (der Müll), а в конце — Partizip II (abgeholt), не инфинитив.',
    },
    {
      type: 'choice',
      prompt: 'Wann ___ das Altpapier abgeholt?',
      options: ['wird', 'werden', 'ist'],
      answer: 0,
      explanationRu: 'Вопрос с вопросительным словом: Wann + werden на 2-м месте. das Altpapier — ед. ч. → wird.',
    },
    {
      type: 'gap',
      prompt: 'Die Heizung wird im Mai ___.',
      answers: ['ausgeschaltet'],
      hintRu: 'ausschalten',
      explanationRu: 'Отделяемый глагол: ge- стоит между приставкой и корнем: aus-ge-schaltet.',
    },
    {
      type: 'gap',
      prompt: 'Leere Flaschen ___ im Supermarkt zurückgegeben.',
      answers: ['werden'],
      explanationRu: 'Flaschen — мн. ч. → werden zurückgegeben.',
    },
    {
      type: 'gap',
      prompt: 'Die Mülltonnen werden ___ der Stadt geleert.',
      answers: ['von'],
      explanationRu: 'Исполнитель действия в пассиве — von + Dativ: von der Stadt.',
    },
    {
      type: 'gap',
      prompt: 'Der Wald wird hier besonders gut ___.',
      answers: ['geschützt'],
      hintRu: 'schützen',
      explanationRu: 'Partizip II от schützen — geschützt (правильный глагол: ge- + корень + -t).',
    },
    {
      type: 'gap',
      prompt: 'Im Winter ___ in vielen Wohnungen zu viel geheizt.',
      answers: ['wird'],
      explanationRu: 'Здесь нет подлежащего во мн. ч. — в таком «безличном» пассиве всегда wird.',
    },
    {
      type: 'choice',
      audio: 'Batterien werden im Supermarkt gesammelt.',
      prompt: 'Где собирают батарейки?',
      options: ['в супермаркете', 'в жёлтом мешке', 'в синем баке'],
      answer: 0,
      explanationRu: 'im Supermarkt gesammelt — «собирают в супермаркете».',
    },
    {
      type: 'gap',
      audio: 'Die blaue Tonne wird alle zwei Wochen geleert.',
      prompt: 'Как часто опорожняют синий бак? Alle ___ Wochen',
      answers: ['zwei', '2'],
      explanationRu: 'alle zwei Wochen — «раз в две недели» (каждые две недели).',
    },
    {
      type: 'gap',
      audio: 'Der Müll wird getrennt.',
      prompt: 'Напишите предложение, которое вы слышите: ___',
      answers: ['Der Müll wird getrennt.', 'Der Müll wird getrennt'],
      explanationRu: 'Der Müll (подлежащее) + wird + Partizip II getrennt. Müll пишется с ü и двумя l.',
    },
    {
      type: 'order',
      words: ['Wann', 'werden', 'die', 'gelben', 'Säcke', 'abgeholt?'],
      translationRu: 'Когда забирают жёлтые мешки?',
      explanationRu: 'Вопросительное слово — 1-е место, werden — 2-е, подлежащее die gelben Säcke, Partizip II abgeholt — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте предложение в пассив.',
      prompt: 'Man sammelt alte Batterien.',
      answers: ['Alte Batterien werden gesammelt.'],
      explanationRu: 'Batterien становятся подлежащим (мн. ч.) → werden + gesammelt; man исчезает.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте предложение в пассив.',
      prompt: 'Man schaltet das Licht aus.',
      answers: ['Das Licht wird ausgeschaltet.'],
      explanationRu: 'das Licht (Akk) → das Licht (Nom), wird + ausgeschaltet в конце.',
    },
    {
      type: 'choice',
      prompt: 'Wir wohnen ___ drei Jahren in dieser Stadt.',
      options: ['seit', 'vor', 'in'],
      answer: 0,
      explanationRu: 'Повторение (юнит 16): живём три года и до сих пор (Präsens) → seit drei Jahren.',
    },
    {
      type: 'choice',
      prompt: 'Du ___ weniger Auto fahren. Das ist besser für die Umwelt.',
      options: ['solltest', 'sollst', 'sollen', 'solltet'],
      answer: 0,
      explanationRu: 'Повторение (юнит 13): вежливый совет — Konjunktiv II: du solltest.',
    },
    {
      type: 'gap',
      prompt: 'Ich finde es wichtig, ___ wir Energie sparen.',
      answers: ['dass'],
      explanationRu: 'Повторение (юнит 9): после «Ich finde es wichtig» идёт придаточное с dass, глагол — в конце.',
    },
  ],
  reading: [
    {
      title: 'So wird bei uns der Müll getrennt',
      textType: 'Aushang',
      texts: [
        {
          heading: 'Information für alle Mieter',
          body: `Liebe Mieterinnen und Mieter,

leider wird der Müll in unserem Haus oft nicht richtig getrennt. Deshalb hier noch einmal die wichtigsten Regeln:

Blaue Tonne: Papier, Zeitungen und Kartons. Bitte machen Sie die Kartons klein!
Gelbe Tonne: Verpackungen aus Plastik und Metall, zum Beispiel Joghurtbecher und Dosen.
Braune Tonne: Obst- und Gemüsereste, Kaffeefilter, Blumen.
Schwarze Tonne: Restmüll, zum Beispiel alte Zahnbürsten.

Glas wird nicht in die Tonnen geworfen. Bringen Sie es bitte zum Container in der Lindenstraße. Alte Batterien werden im Supermarkt gesammelt.

Die Tonnen werden jeden Mittwoch geleert. Stellen Sie die Tonnen bitte am Dienstagabend an die Straße.

Vielen Dank!
Ihre Hausverwaltung`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wohin kommt der Müll? Ordnen Sie zu.',
          instructionRu: 'Прочитайте текст. Куда выбрасывать мусор? Соотнесите.',
          options: ['blaue Tonne', 'gelbe Tonne', 'braune Tonne', 'schwarze Tonne', 'Container in der Lindenstraße'],
          items: [
            { kind: 'match', prompt: 'eine leere Dose', answer: 1, explanationRu: 'Dosen упомянуты у жёлтого бака (gelbe Tonne): упаковки из пластика и металла.' },
            { kind: 'match', prompt: 'eine alte Zeitung', answer: 0, explanationRu: 'Бумага и газеты (Zeitungen) — в синий бак.' },
            { kind: 'match', prompt: 'Bananenschalen', answer: 2, explanationRu: 'Кожура банана — остатки фруктов (Obstreste) → коричневый бак.' },
            { kind: 'match', prompt: 'eine leere Weinflasche', answer: 4, explanationRu: 'Стекло не бросают в баки: его относят в контейнер на Lindenstraße.' },
            { kind: 'match', prompt: 'eine alte Zahnbürste', answer: 3, explanationRu: 'Старые зубные щётки — Restmüll, чёрный бак.' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Die Tonnen werden am Dienstag geleert.', answer: false, explanationRu: 'Баки опорожняют в среду (jeden Mittwoch); во вторник вечером их только выставляют на улицу.' },
            { kind: 'tf', statement: 'Batterien kommen in die schwarze Tonne.', answer: false, explanationRu: '«Alte Batterien werden im Supermarkt gesammelt» — батарейки сдают в супермаркете.' },
          ],
        },
      ],
    },
    {
      title: 'Energie sparen – so einfach geht das!',
      textType: 'Zeitschriftenartikel',
      texts: [
        {
          heading: 'Energie sparen – so einfach geht das!',
          body: `Strom und Heizung werden immer teurer. Aber mit ein paar kleinen Tipps können Sie viel Geld sparen und gleichzeitig die Umwelt schützen.

1. Licht aus! Wenn Sie aus einem Zimmer gehen, schalten Sie das Licht aus. Kaufen Sie LED-Lampen. Sie verbrauchen viel weniger Strom als alte Lampen.

2. Richtig lüften: Im Winter wird oft falsch gelüftet. Öffnen Sie die Fenster lieber dreimal am Tag für fünf Minuten ganz – nicht den ganzen Tag ein bisschen.

3. Nicht zu warm: 20 Grad im Wohnzimmer sind genug. Im Schlafzimmer reichen 17 oder 18 Grad.

4. Geräte ganz ausschalten: Schalten Sie Fernseher und Computer am Abend ganz aus. Auch im Stand-by-Modus wird Strom verbraucht.

5. Kurz duschen: Eine kurze Dusche braucht viel weniger Wasser und Energie als ein Bad.

Mit diesen Tipps kann eine Familie bis zu 300 Euro im Jahr sparen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Im Winter soll man die Fenster den ganzen Tag ein bisschen öffnen.', answer: false, explanationRu: 'Наоборот: лучше три раза в день на пять минут полностью, «nicht den ganzen Tag ein bisschen».' },
            { kind: 'tf', statement: 'Im Schlafzimmer sind 17 Grad genug.', answer: true, explanationRu: '«Im Schlafzimmer reichen 17 oder 18 Grad» — reichen = хватает.' },
            { kind: 'tf', statement: 'Im Stand-by-Modus verbrauchen Geräte keinen Strom.', answer: false, explanationRu: '«Auch im Stand-by-Modus wird Strom verbraucht» — электричество расходуется и в режиме ожидания.' },
            { kind: 'tf', statement: 'Ein Bad braucht mehr Wasser als eine kurze Dusche.', answer: true, explanationRu: '«Eine kurze Dusche braucht viel weniger Wasser … als ein Bad» — значит, ванна требует больше.' },
            { kind: 'tf', statement: 'LED-Lampen verbrauchen mehr Strom als alte Lampen.', answer: false, explanationRu: 'LED-лампы расходуют «viel weniger Strom» — гораздо меньше.' },
            { kind: 'tf', statement: 'Eine Familie kann mit den Tipps bis zu 300 Euro im Jahr sparen.', answer: true, explanationRu: 'Последнее предложение текста: «bis zu 300 Euro im Jahr».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Der Wetterbericht',
      kind: 'monolog',
      situation: 'Sie hören den Wetterbericht im Radio.',
      text: `Und jetzt das Wetter für morgen, Samstag. Am Vormittag ist es im Norden noch bewölkt und es regnet ein bisschen. Am Nachmittag kommt dann die Sonne. Die Temperaturen liegen zwischen 18 und 22 Grad. Im Süden gibt es am Abend Gewitter mit starkem Wind. Am Sonntag ist es überall sonnig und warm, bis 26 Grad. Ein perfekter Tag für einen Ausflug in die Natur! Aber Achtung: Im Wald ist es sehr trocken. Bitte machen Sie dort kein Feuer und werfen Sie keine Zigaretten weg.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie ist das Wetter am Samstagvormittag im Norden?', options: ['Sonnig und warm', 'Bewölkt mit etwas Regen', 'Gewitter mit Wind'], answer: 1, explanationRu: '«Am Vormittag ist es im Norden noch bewölkt und es regnet ein bisschen».' },
            { kind: 'mc', question: 'Wo gibt es am Abend Gewitter?', options: ['Im Norden', 'Im Süden', 'Überall'], answer: 1, explanationRu: '«Im Süden gibt es am Abend Gewitter mit starkem Wind».' },
            { kind: 'mc', question: 'Wie viel Grad sind es am Sonntag?', options: ['Bis zu 22 Grad', 'Bis zu 18 Grad', 'Bis zu 26 Grad'], answer: 2, explanationRu: '«Am Sonntag ist es überall sonnig und warm, bis 26 Grad». 18–22 градуса — это суббота.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Im Wald soll man kein Feuer machen.', answer: true, explanationRu: '«Bitte machen Sie dort kein Feuer» — в лесу очень сухо.' },
          ],
        },
      ],
    },
    {
      title: 'Flaschen, Heizung und Fahrrad',
      kind: 'dialog',
      speakers: { A: 'Lukas', B: 'Mia' },
      situation: 'Lukas und Mia wohnen zusammen. Sie sprechen in der Küche.',
      text: `A: Mia, warum steht hier so viel Müll in der Küche?
B: Das sind Flaschen und Dosen. Die bringe ich morgen weg.
A: Die Flaschen mit Pfand kannst du doch im Supermarkt zurückgeben. Da bekommst du Geld.
B: Ja, stimmt. Und die Weinflaschen? Die haben kein Pfand.
A: Die kommen in den Glascontainer. Aber nicht am Sonntag!
B: Ich weiß. Sag mal, warum ist es hier so kalt?
A: Ich habe die Fenster eine Stunde lang aufgemacht.
B: Lukas, du sollst doch nur fünf Minuten lüften! Sonst geht die ganze Wärme raus.
A: Okay, okay. Ich mache die Fenster sofort zu. Und morgen fahre ich mit dem Rad zur Arbeit, nicht mit dem Auto. Zufrieden?
B: Sehr zufrieden!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was soll Mia mit den Pfandflaschen machen?', options: ['In den Glascontainer werfen', 'Im Supermarkt zurückgeben', 'In den gelben Sack werfen'], answer: 1, explanationRu: '«Die Flaschen mit Pfand kannst du doch im Supermarkt zurückgeben».' },
            { kind: 'mc', question: 'Warum ist es in der Wohnung kalt?', options: ['Die Heizung ist kaputt.', 'Die Fenster waren lange offen.', 'Der Strom ist weg.'], answer: 1, explanationRu: 'Лукас открыл окна на целый час: «eine Stunde lang aufgemacht».' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Weinflaschen ohne Pfand kommen in den Glascontainer.', answer: true, explanationRu: '«Die kommen in den Glascontainer» — бутылки из-под вина без залога.' },
            { kind: 'tf', statement: 'Lukas fährt morgen mit dem Auto zur Arbeit.', answer: false, explanationRu: '«…morgen fahre ich mit dem Rad zur Arbeit, nicht mit dem Auto».' },
          ],
        },
      ],
    },
  ],
};
