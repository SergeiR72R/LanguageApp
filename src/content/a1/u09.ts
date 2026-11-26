import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-09',
  level: 'A1',
  order: 9,
  title: 'Einkaufen',
  titleRu: 'Покупки',
  goalsRu: [
    'Называть продукты, упаковки и количество: ein Kilo, eine Flasche, eine Packung',
    'Образовывать множественное число существительных',
    'Спрашивать цену: «Was kostet …?» / «Was kosten …?»',
    'Понимать и называть цены в евро и центах',
  ],
  grammar: {
    topic: 'Plural der Nomen – Was kostet …? / Was kosten …?',
    topicRu: 'Множественное число существительных; вопрос о цене',
    explanationRu: `**Множественное число (Plural)** в немецком образуется по-разному, одного правила нет. Поэтому слово учат так: **артикль + слово + множественное число**: der Apfel – die Äpfel.

**Хорошая новость:** артикль во множественном числе **всегда die**: der Apfel → **die** Äpfel, das Ei → **die** Eier.

Основные окончания:

- **-e**: der Tisch → die Tische (иногда с умлаутом: der Stuhl → die Stühle)
- **-n / -en**: die Tomate → die Tomaten, die Packung → die Packungen
- **-er** (часто с умлаутом): das Ei → die Eier, das Glas → die Gläser
- **-s**: das Kilo → die Kilos, das Sofa → die Sofas (слова из других языков)
- **без окончания** (иногда с умлаутом): das Zimmer → die Zimmer, der Apfel → die Äpfel

Подсказки: слова женского рода на **-e** получают **-n** (die Banane → die Bananen); слова на **-er, -el, -chen** часто не меняются (das Brötchen → die Brötchen).

**ein и kein во множественном числе.** У ein нет множественного числа: ein Apfel → Äpfel / zwei Äpfel. А kein → **keine**: Wir haben **keine** Tomaten.

**Сколько стоит?**

- один предмет: Was **kostet** der Käse? — Er kostet 3,50 Euro.
- много предметов: Was **kosten** die Äpfel? — Sie kosten 2 Euro.

3,50 € читается «drei Euro fünfzig».

**Количество:** после Kilo, Gramm, Flasche, Packung, Glas существительное идёт **сразу**, без предлога: ein Kilo Äpfel, eine Flasche Wasser, zwei Packungen Milch. После числа Kilo, Gramm и Euro не меняются: zwei **Kilo**, fünf **Euro**.

**Типичные ошибки:**

- «ein Kilo von Äpfel» → правильно: **ein Kilo Äpfel** (не как «килограмм яблок»);
- -s на всех словах, как в английском: не «Tomates», а **Tomaten**;
- «Die Äpfel kostet» → правильно: **kosten**.`,
    table: [
      ['Singular', 'Plural', 'Endung'],
      ['der Tisch', 'die Tische', '-e'],
      ['der Stuhl', 'die Stühle', '¨-e'],
      ['die Tomate', 'die Tomaten', '-n'],
      ['die Packung', 'die Packungen', '-en'],
      ['das Ei', 'die Eier', '-er'],
      ['das Glas', 'die Gläser', '¨-er'],
      ['das Kilo', 'die Kilos', '-s'],
      ['das Brötchen', 'die Brötchen', '–'],
      ['der Apfel', 'die Äpfel', '¨'],
    ],
    examples: [
      { de: 'Was kostet der Käse? – Er kostet drei Euro fünfzig.', ru: 'Сколько стоит сыр? — Он стоит три евро пятьдесят.' },
      { de: 'Was kosten die Tomaten? – Sie kosten zwei Euro.', ru: 'Сколько стоят помидоры? — Они стоят два евро.' },
      { de: 'Ich brauche ein Kilo Kartoffeln.', ru: 'Мне нужен килограмм картошки.' },
      { de: 'Wir kaufen zwei Flaschen Wasser.', ru: 'Мы покупаем две бутылки воды.' },
      { de: 'Wir haben keine Eier.', ru: 'У нас нет яиц.' },
      { de: 'Das kostet zusammen 7,80 Euro.', ru: 'Это стоит вместе 7 евро 80 центов.' },
    ],
    exercises: [
      {
        type: 'choice',
        audio: 'zwei Äpfel',
        prompt: 'Что вы слышите?',
        options: ['ein Apfel', 'zwei Äpfel', 'zwei Apfel'],
        answer: 1,
        explanationRu: 'Вы слышите «Э» в начале: Äpfel — множественное число от der Apfel.',
      },
      {
        type: 'choice',
        prompt: 'Eine Tomate, drei ___.',
        options: ['Tomates', 'Tomaten', 'Tomate'],
        answer: 1,
        explanationRu: 'Слова женского рода на -e получают во множественном числе -n: die Tomaten.',
      },
      {
        type: 'choice',
        prompt: 'Ein Ei, sechs ___.',
        options: ['Eis', 'Eien', 'Eier'],
        answer: 2,
        explanationRu: 'das Ei → die Eier (окончание -er). Это слово нужно просто запомнить.',
      },
      {
        type: 'gap',
        prompt: 'Eine Banane, zwei ___.',
        answers: ['Bananen'],
        explanationRu: 'die Banane — женский род на -e → die Bananen.',
      },
      {
        type: 'choice',
        prompt: 'Was ___ die Kartoffeln?',
        options: ['kostet', 'kosten', 'kostest'],
        answer: 1,
        explanationRu: 'die Kartoffeln — множественное число (= sie), поэтому kosten.',
      },
      {
        type: 'gap',
        prompt: 'Ich brauche ein Kilo ___.',
        answers: ['Kartoffeln'],
        hintRu: 'die Kartoffel → мн. ч.',
        explanationRu: 'После «ein Kilo» — множественное число, без предлога: ein Kilo Kartoffeln.',
      },
      {
        type: 'choice',
        prompt: 'Wir kaufen zwei ___ Wasser.',
        options: ['Flaschen', 'Flasche', 'Flaschens'],
        answer: 0,
        explanationRu: 'die Flasche → die Flaschen. Две бутылки — zwei Flaschen, а слово Wasser не меняется.',
      },
      {
        type: 'gap',
        prompt: 'Haben Sie Äpfel? – Nein, wir haben ___ Äpfel.',
        answers: ['keine'],
        hintRu: 'kein → ?',
        explanationRu: 'Во множественном числе kein → keine: keine Äpfel.',
      },
      {
        type: 'order',
        words: ['Was', 'kosten', 'die', 'Bananen?'],
        translationRu: 'Сколько стоят бананы?',
        explanationRu: 'W-вопрос: вопросительное слово – глагол – подлежащее. Бананов много → kosten.',
      },
      {
        type: 'gap',
        audio: 'Das kostet drei Euro fünfzig.',
        prompt: 'Сколько стоит? Напишите цифрами: ___ €',
        answers: ['3,50', '3.50', '3,5'],
        explanationRu: '«drei Euro fünfzig» = 3,50 €. Сначала евро, потом центы.',
      },
      {
        type: 'choice',
        audio: 'die Gläser',
        prompt: 'Что вы слышите?',
        options: ['das Glas', 'die Gläser', 'die Glase'],
        answer: 1,
        explanationRu: 'die Gläser — множественное число от das Glas (окончание -er и умлаут ä).',
      },
      {
        type: 'gap',
        audio: 'Packung',
        prompt: 'Напишите слово, которое слышите: ___',
        answers: ['Packung'],
        explanationRu: 'die Packung — пачка, упаковка. ck = «к», -ung — «унг».',
      },
    ],
  },
  vocab: [
    { de: 'kaufen', forms: 'er kauft', pos: 'verb', ru: 'покупать', example: 'Ich kaufe Brot und Milch.', exampleRu: 'Я покупаю хлеб и молоко.', pronRu: 'КАУ-фэн' },
    { de: 'kosten', forms: 'es kostet, sie kosten', pos: 'verb', ru: 'стоить', example: 'Was kostet das?', exampleRu: 'Сколько это стоит?', pronRu: 'КОС-тэн' },
    { de: 'brauchen', forms: 'er braucht', pos: 'verb', ru: 'нуждаться; мне нужно', example: 'Wir brauchen Eier.', exampleRu: 'Нам нужны яйца.', pronRu: 'БРАУ-хен' },
    { de: 'Supermarkt', article: 'der', plural: '-¨e', pos: 'noun', ru: 'супермаркет', example: 'Der Supermarkt ist hier.', exampleRu: 'Супермаркет здесь.', pronRu: 'дер ЗУ-па-маркт' },
    { de: 'Euro', article: 'der', plural: '-s (после числа: 5 Euro)', pos: 'noun', ru: 'евро', example: 'Das kostet fünf Euro.', exampleRu: 'Это стоит пять евро.', pronRu: 'дер ОЙ-ро' },
    { de: 'Cent', article: 'der', plural: '-s (после числа: 50 Cent)', pos: 'noun', ru: 'цент', example: 'Der Apfel kostet 50 Cent.', exampleRu: 'Яблоко стоит 50 центов.', pronRu: 'дер СЭНТ' },
    { de: 'Kilo', article: 'das', plural: '-s (после числа: 2 Kilo)', pos: 'noun', ru: 'килограмм', example: 'Ein Kilo Tomaten, bitte.', exampleRu: 'Килограмм помидоров, пожалуйста.', pronRu: 'дас КИ-ло' },
    { de: 'Gramm', article: 'das', plural: '– (после числа: 200 Gramm)', pos: 'noun', ru: 'грамм', example: 'Ich möchte 200 Gramm Käse.', exampleRu: 'Я хотел бы 200 граммов сыра.', pronRu: 'дас ГРАМ' },
    { de: 'Flasche', article: 'die', plural: '-n', pos: 'noun', ru: 'бутылка', example: 'Eine Flasche Wasser, bitte.', exampleRu: 'Бутылку воды, пожалуйста.', pronRu: 'ди ФЛА-ше' },
    { de: 'Packung', article: 'die', plural: '-en', pos: 'noun', ru: 'пачка, упаковка', example: 'Ich kaufe eine Packung Milch.', exampleRu: 'Я покупаю пакет молока.', pronRu: 'ди ПА-кунг' },
    { de: 'Glas', article: 'das', plural: '-¨er', pos: 'noun', ru: 'стакан; банка (стеклянная)', example: 'Ein Glas Marmelade kostet 2 Euro.', exampleRu: 'Банка джема стоит 2 евро.', pronRu: 'дас ГЛАС' },
    { de: 'Tomate', article: 'die', plural: '-n', pos: 'noun', ru: 'помидор', example: 'Die Tomaten sind frisch.', exampleRu: 'Помидоры свежие.', pronRu: 'ди то-МА-тэ' },
    { de: 'Kartoffel', article: 'die', plural: '-n', pos: 'noun', ru: 'картофелина; мн. ч.: картошка', example: 'Die Kartoffeln sind billig.', exampleRu: 'Картошка дешёвая.', pronRu: 'ди кар-ТО-фэль' },
    { de: 'Banane', article: 'die', plural: '-n', pos: 'noun', ru: 'банан', example: 'Die Kinder mögen Bananen.', exampleRu: 'Дети любят бананы.', pronRu: 'ди ба-НА-нэ' },
    { de: 'Obst', article: 'das', plural: '–', pos: 'noun', ru: 'фрукты', example: 'Das Obst ist sehr frisch.', exampleRu: 'Фрукты очень свежие.', pronRu: 'дас ОПСТ' },
    { de: 'Gemüse', article: 'das', plural: '–', pos: 'noun', ru: 'овощи', example: 'Wir essen viel Gemüse.', exampleRu: 'Мы едим много овощей.', pronRu: 'дас ге-МЮ-зэ' },
    { de: 'teuer', pos: 'adj', ru: 'дорогой', example: 'Der Käse ist teuer.', exampleRu: 'Сыр дорогой.', pronRu: 'ТОЙ-а' },
    { de: 'billig', pos: 'adj', ru: 'дешёвый', example: 'Die Äpfel sind billig.', exampleRu: 'Яблоки дешёвые.', pronRu: 'БИ-лихь' },
    { de: 'Geld', article: 'das', plural: '-er', pos: 'noun', ru: 'деньги', example: 'Ich habe kein Geld.', exampleRu: 'У меня нет денег.', pronRu: 'дас ГЭЛЬТ' },
    { de: 'Kasse', article: 'die', plural: '-n', pos: 'noun', ru: 'касса', example: 'Die Kasse ist dort.', exampleRu: 'Касса там.', pronRu: 'ди КА-сэ' },
  ],
  listening: {
    title: 'Auf dem Markt',
    kind: 'dialog',
    text: `A: Guten Tag! Was möchten Sie?
B: Guten Tag. Was kosten die Tomaten?
A: Ein Kilo kostet drei Euro.
B: Gut, ein Kilo Tomaten, bitte. Und ich brauche Kartoffeln.
A: Die Kartoffeln kosten zwei Euro fünfzig das Kilo.
B: Zwei Kilo, bitte. Haben Sie auch Äpfel?
A: Nein, leider. Wir haben heute keine Äpfel.
B: Schade. Ich nehme drei Bananen.
A: Gut. Das macht zusammen neun Euro fünfzig.
B: Hier sind zehn Euro.
A: Und fünfzig Cent zurück. Danke schön und tschüss!`,
    questions: [
      { question: 'Was kostet ein Kilo Tomaten?', options: ['2,50 Euro', '3 Euro', '9,50 Euro'], answer: 1 },
      { question: 'Wie viele Kilo Kartoffeln kauft die Frau?', options: ['ein Kilo', 'zwei Kilo', 'drei Kilo'], answer: 1 },
      { question: 'Gibt es Äpfel?', options: ['Ja, sie kosten zwei Euro.', 'Nein.', 'Ja, nur drei.'], answer: 1 },
      { question: 'Was kauft die Frau noch?', options: ['Bananen', 'Eier', 'Käse'], answer: 0 },
      { question: 'Was kostet alles zusammen?', options: ['9,50 Euro', '10 Euro', '50 Cent'], answer: 0 },
    ],
  },
  writing: {
    taskRu: 'Вы готовите ужин, но многих продуктов нет. Напишите сообщение мужу или жене (или другу): чего нет дома, что нужно купить и сколько (Kilo, Flasche, Packung …). Спросите, нужно ли ещё что-нибудь.',
    taskDe: 'Sie brauchen Lebensmittel. Schreiben Sie eine Nachricht: Was haben Sie nicht? Was kaufen Sie?',
    points: [
      'Was haben wir nicht?',
      'Was kaufst du? Wie viel? (Kilo, Flasche, Packung …)',
      'Frage: Brauchen wir noch etwas?',
    ],
    minWords: 25,
    usefulPhrases: [
      'Hallo …,',
      'Wir haben keine … / keinen … / kein …',
      'Ich kaufe ein Kilo …',
      'zwei Flaschen … / eine Packung …',
      'Brauchen wir auch …?',
      'Die Tomaten sind heute billig.',
      'Bis später! / Liebe Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы на рынке. Продавщица спрашивает, что вы хотите. Спросите цены, купите несколько продуктов с количеством и заплатите.',
    aiRole:
      'Sie sind Frau Huber, Verkäuferin auf dem Markt. Der Kunde lernt Deutsch (A1). Sprechen Sie sehr einfach und langsam, nur kurze Sätze im Präsens. Sie haben: Tomaten (1 Kilo 3 Euro), Kartoffeln (1 Kilo 2 Euro), Äpfel (1 Kilo 2,50 Euro), Bananen (1 Kilo 1,80 Euro), Eier (6 Stück 2 Euro), Käse (200 Gramm 3 Euro). Es gibt heute keine Erdbeeren. Fragen Sie immer nur eine Sache: Wie viel? Noch etwas? Wenn der Kunde nicht weiterweiß, helfen Sie: „Ein Kilo oder zwei Kilo?“. Am Ende sagen Sie den Preis zusammen.',
    opener: 'Guten Tag! Was möchten Sie?',
    tasksRu: [
      'Спросите цену: «Was kostet …?» / «Was kosten die …?»',
      'Купите 2–3 продукта с количеством: «Ein Kilo …, bitte», «Sechs Eier, bitte».',
      'Спросите, есть ли продукт, которого нет в списке.',
      'Спросите, сколько всё стоит, заплатите и попрощайтесь.',
    ],
    readAloud: ['Was kosten die Äpfel?', 'Ein Kilo Tomaten, bitte.', 'Ich brauche zwei Flaschen Wasser.', 'Das ist sehr teuer.', 'Wir haben keine Eier.'],
  },
};
