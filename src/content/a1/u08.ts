import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-08',
  level: 'A1',
  order: 8,
  title: 'Essen und Trinken',
  titleRu: 'Еда и напитки',
  goalsRu: [
    'Называть продукты и напитки на завтрак, обед и ужин',
    'Заказывать в кафе: «Ich möchte einen Kaffee, bitte»',
    'Говорить, что вы любите и что не любите (mögen)',
    'Употреблять винительный падеж: den, einen, keinen',
  ],
  grammar: {
    topic: 'Akkusativ (den, einen, keinen) – möchten und mögen',
    topicRu: 'Винительный падеж (Akkusativ); глаголы möchten и mögen',
    explanationRu: `**Падеж** — это форма слова, которая показывает его роль в предложении. Вы уже знаете **Nominativ** — это подлежащее (кто? что?): **Der Kaffee** ist lecker.

**Akkusativ** — это прямое дополнение: **кого? что?** я ем, пью, покупаю. Это как русский винительный падеж: «я пью вод**у**».

**Хорошая новость:** в Akkusativ меняется **только мужской род**:

- der → **den**: Ich trinke **den** Saft.
- ein → **einen**: Ich möchte **einen** Kaffee.
- kein → **keinen**: Es gibt **keinen** Käse.

Женский и средний род **не меняются**: Ich esse **eine** Suppe. Ich möchte **ein** Brötchen. Ich trinke **die** Milch.

Akkusativ нужен после глаголов **haben, essen, trinken, möchten, mögen, kaufen, brauchen** и после **es gibt** («есть, имеется»): Es gibt **keinen** Saft.

**möchten** = «хотел(а) бы». Так вежливо заказывают и просят:

- ich möchte, du möchtest, er/sie möchte
- wir möchten, ihr möchtet, sie/Sie möchten

Внимание: **ich möchte** и **er möchte** — без -t на конце!

**mögen** = «любить, нравиться» (вообще, всегда):

- ich **mag**, du **magst**, er/sie **mag**
- wir **mögen**, ihr **mögt**, sie/Sie **mögen**

**möchten или mögen?** «Ich möchte einen Tee» — хочу сейчас (в кафе). «Ich mag Tee» — я вообще люблю чай.

Продукты «вообще» часто стоят **без артикля**: Ich trinke Wasser. Ich mag Fleisch. Отрицание тогда тоже **kein**: Ich esse **kein** Fleisch.

**Типичные ошибки:**

- «Ich möchte ein Kaffee» → правильно: **einen** Kaffee (der Kaffee — мужской род);
- «er möchtet» → правильно: **er möchte**;
- в кафе «Ich mag einen Kaffee» → правильно: **Ich möchte** einen Kaffee.`,
    table: [
      ['', 'мужской (der)', 'женский (die)', 'средний (das)'],
      ['Nominativ', 'der / ein / kein Saft', 'die / eine / keine Suppe', 'das / ein / kein Ei'],
      ['Akkusativ', 'den / einen / keinen Saft', 'die / eine / keine Suppe', 'das / ein / kein Ei'],
    ],
    examples: [
      { de: 'Ich möchte einen Kaffee, bitte.', ru: 'Я хотел бы кофе, пожалуйста.' },
      { de: 'Wir essen ein Brötchen und ein Ei.', ru: 'Мы едим булочку и яйцо.' },
      { de: 'Magst du Käse? – Nein, ich mag keinen Käse.', ru: 'Ты любишь сыр? — Нет, я не люблю сыр.' },
      { de: 'Es gibt keinen Saft, nur Wasser.', ru: 'Сока нет, только вода.' },
      { de: 'Möchten Sie eine Suppe? – Ja, bitte.', ru: 'Хотите суп? — Да, пожалуйста.' },
      { de: 'Der Apfel ist lecker. Ich esse den Apfel.', ru: 'Яблоко вкусное. Я ем (это) яблоко.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich möchte ___ Kaffee, bitte.',
        options: ['einen', 'eine', 'ein'],
        answer: 0,
        explanationRu: 'der Kaffee — мужской род. После möchten нужен Akkusativ: ein → einen.',
      },
      {
        type: 'choice',
        prompt: 'Ich esse ___ Ei.',
        options: ['einen', 'eine', 'ein'],
        answer: 2,
        explanationRu: 'das Ei — средний род. В Akkusativ средний род не меняется: ein Ei.',
      },
      {
        type: 'choice',
        prompt: 'Wir trinken ___ Saft.',
        options: ['der', 'den', 'die'],
        answer: 1,
        explanationRu: 'der Saft — мужской род, после trinken — Akkusativ: der → den.',
      },
      {
        type: 'gap',
        prompt: 'Es gibt ___ Käse.',
        answers: ['keinen'],
        hintRu: 'kein → ?',
        explanationRu: 'После es gibt — Akkusativ. der Käse — мужской род: kein → keinen.',
      },
      {
        type: 'choice',
        prompt: 'Was ___ du? – Eine Suppe, bitte.',
        options: ['möchtest', 'möchte', 'möchten'],
        answer: 0,
        explanationRu: 'du → окончание -st: du möchtest.',
      },
      {
        type: 'gap',
        prompt: 'Er ___ einen Tee.',
        answers: ['möchte'],
        hintRu: 'möchten',
        explanationRu: 'er möchte — без -t на конце, так же как ich möchte.',
      },
      {
        type: 'choice',
        prompt: 'Ich ___ Fleisch. Fleisch ist lecker!',
        options: ['mag', 'mögen', 'magst'],
        answer: 0,
        explanationRu: 'mögen: ich mag (без окончания, как и er mag).',
      },
      {
        type: 'transform',
        instructionRu: 'Ответьте «нет» по образцу: Möchtest du ein Ei? → Nein, ich möchte kein Ei.',
        prompt: 'Möchtest du einen Apfel?',
        answers: ['Nein, ich möchte keinen Apfel.', 'Ich möchte keinen Apfel.', 'Nein, danke, ich möchte keinen Apfel.'],
        explanationRu: 'der Apfel — мужской род: einen Apfel → keinen Apfel. Глагол меняем: du möchtest → ich möchte.',
      },
      {
        type: 'order',
        words: ['Ich', 'trinke', 'keinen', 'Kaffee.'],
        translationRu: 'Я не пью кофе.',
        explanationRu: 'Подлежащее – глагол – дополнение. Kaffee мужского рода, поэтому keinen.',
      },
      {
        type: 'choice',
        audio: 'Ich möchte einen Tee, bitte.',
        prompt: 'Что хочет человек?',
        options: ['Kaffee', 'Tee', 'Wasser'],
        answer: 1,
        explanationRu: '«Ich möchte einen Tee» — человек хочет чай.',
      },
      {
        type: 'gap',
        audio: 'Ich mag keinen Käse.',
        prompt: 'Что этот человек не любит? Er mag keinen ___.',
        answers: ['Käse'],
        explanationRu: '«Ich mag keinen Käse» — я не люблю сыр. ä читается как «э»: Käse — «КЭ-зэ».',
      },
      {
        type: 'choice',
        audio: 'den Saft',
        prompt: 'Что вы слышите?',
        options: ['der Saft', 'den Saft', 'die Saft'],
        answer: 1,
        explanationRu: 'Вы слышите «den» — это Akkusativ мужского рода: den Saft.',
      },
    ],
  },
  vocab: [
    { de: 'essen', forms: 'du isst, er isst', pos: 'verb', ru: 'есть, кушать', example: 'Wir essen Brot und Käse.', exampleRu: 'Мы едим хлеб и сыр.', pronRu: 'Э-сэн' },
    { de: 'trinken', forms: 'er trinkt', pos: 'verb', ru: 'пить', example: 'Ich trinke Wasser.', exampleRu: 'Я пью воду.', pronRu: 'ТРИН-кен' },
    { de: 'möchten', forms: 'ich möchte, du möchtest, er möchte', pos: 'verb', ru: 'хотеть (вежливо), хотел бы', example: 'Ich möchte einen Tee, bitte.', exampleRu: 'Я хотел бы чаю, пожалуйста.', pronRu: 'МЁХЬ-тэн' },
    { de: 'mögen', forms: 'ich mag, du magst, er mag', pos: 'verb', ru: 'любить, нравиться', example: 'Ich mag Fisch.', exampleRu: 'Я люблю рыбу.', pronRu: 'МЁ-ген' },
    { de: 'Frühstück', article: 'das', plural: '-e', pos: 'noun', ru: 'завтрак', example: 'Das Frühstück ist lecker.', exampleRu: 'Завтрак вкусный.', pronRu: 'дас ФРЮ-штюк' },
    { de: 'Brot', article: 'das', plural: '-e', pos: 'noun', ru: 'хлеб', example: 'Das Brot ist frisch.', exampleRu: 'Хлеб свежий.', pronRu: 'дас БРОТ' },
    { de: 'Brötchen', article: 'das', plural: '–', pos: 'noun', ru: 'булочка', example: 'Ich möchte ein Brötchen.', exampleRu: 'Я хотел бы булочку.', pronRu: 'дас БРЁТ-хьен' },
    { de: 'Butter', article: 'die', plural: '–', pos: 'noun', ru: 'сливочное масло', example: 'Die Butter ist hier.', exampleRu: 'Масло здесь.', pronRu: 'ди БУ-та' },
    { de: 'Käse', article: 'der', plural: '–', pos: 'noun', ru: 'сыр', example: 'Ich mag keinen Käse.', exampleRu: 'Я не люблю сыр.', pronRu: 'дер КЭ-зэ' },
    { de: 'Wurst', article: 'die', plural: '-¨e', pos: 'noun', ru: 'колбаса', example: 'Die Wurst ist sehr gut.', exampleRu: 'Колбаса очень хорошая.', pronRu: 'ди ВУРСТ' },
    { de: 'Ei', article: 'das', plural: '-er', pos: 'noun', ru: 'яйцо', example: 'Möchtest du ein Ei?', exampleRu: 'Хочешь яйцо?', pronRu: 'дас АЙ' },
    { de: 'Milch', article: 'die', plural: '–', pos: 'noun', ru: 'молоко', example: 'Wir haben keine Milch.', exampleRu: 'У нас нет молока.', pronRu: 'ди МИЛЬХЬ' },
    { de: 'Kaffee', article: 'der', plural: '-s', pos: 'noun', ru: 'кофе', example: 'Der Kaffee ist heiß.', exampleRu: 'Кофе горячий.', pronRu: 'дер КА-фэ' },
    { de: 'Tee', article: 'der', plural: '-s', pos: 'noun', ru: 'чай', example: 'Ich trinke Tee.', exampleRu: 'Я пью чай.', pronRu: 'дер ТЭ' },
    { de: 'Wasser', article: 'das', plural: '–', pos: 'noun', ru: 'вода', example: 'Ein Wasser, bitte!', exampleRu: 'Воду, пожалуйста!', pronRu: 'дас ВА-са' },
    { de: 'Saft', article: 'der', plural: '-¨e', pos: 'noun', ru: 'сок', example: 'Der Saft ist sehr süß.', exampleRu: 'Сок очень сладкий.', pronRu: 'дер ЗАФТ' },
    { de: 'Apfel', article: 'der', plural: '-¨', pos: 'noun', ru: 'яблоко', example: 'Ich esse einen Apfel.', exampleRu: 'Я ем яблоко.', pronRu: 'дер АП-фэль' },
    { de: 'Fleisch', article: 'das', plural: '–', pos: 'noun', ru: 'мясо', example: 'Anna isst kein Fleisch.', exampleRu: 'Анна не ест мясо.', pronRu: 'дас ФЛАЙШ' },
    { de: 'Suppe', article: 'die', plural: '-n', pos: 'noun', ru: 'суп', example: 'Die Suppe ist warm.', exampleRu: 'Суп тёплый.', pronRu: 'ди ЗУ-пэ' },
    { de: 'lecker', pos: 'adj', ru: 'вкусный', example: 'Der Kuchen ist lecker!', exampleRu: 'Пирог вкусный!', pronRu: 'ЛЭ-ка' },
  ],
  listening: {
    title: 'Im Café',
    kind: 'dialog',
    text: `A: Guten Tag! Was möchten Sie?
B: Guten Tag! Ich möchte einen Kaffee, bitte.
A: Mit Milch?
B: Ja, mit Milch, bitte.
A: Möchten Sie auch etwas essen? Wir haben Kuchen, Brötchen und Suppe.
B: Haben Sie Apfelkuchen?
A: Nein, leider. Es gibt heute keinen Apfelkuchen.
B: Schade. Ich möchte eine Suppe.
A: Wir haben eine Tomatensuppe. Sie ist sehr lecker.
B: Gut, eine Tomatensuppe, bitte. Und ein Wasser.
A: Also: ein Kaffee, eine Suppe und ein Wasser. Danke!`,
    questions: [
      { question: 'Was trinkt der Gast?', options: ['Tee und Wasser', 'Kaffee und Wasser', 'Saft und Kaffee'], answer: 1 },
      { question: 'Gibt es Apfelkuchen?', options: ['Ja.', 'Nein.', 'Ja, nur ein Stück.'], answer: 1 },
      { question: 'Was isst der Gast?', options: ['ein Brötchen', 'eine Suppe', 'einen Kuchen'], answer: 1 },
      { question: 'Wie ist die Suppe?', options: ['sehr lecker', 'nicht lecker', 'kalt'], answer: 0 },
      { question: 'Was hat das Café?', options: ['Kuchen, Brötchen und Suppe', 'nur Kuchen', 'Fisch und Fleisch'], answer: 0 },
    ],
  },
  writing: {
    taskRu: 'Ваш друг Петер придёт к вам в воскресенье на завтрак. Напишите ему сообщение: что будет на завтрак, что вы любите и чего не любите, и спросите, что он хочет пить.',
    taskDe: 'Ihr Freund Peter kommt am Sonntag zum Frühstück. Schreiben Sie Peter eine Nachricht.',
    points: [
      'Frühstück: Was gibt es?',
      'Was magst du? Was magst du nicht?',
      'Frage an Peter: Kaffee oder Tee?',
    ],
    minWords: 25,
    usefulPhrases: [
      'Lieber Peter,',
      'Es gibt Brötchen, Käse und …',
      'Ich mag … / Ich mag keinen …',
      'Möchtest du Kaffee oder Tee?',
      'Der Kuchen ist sehr lecker.',
      'Bis Sonntag!',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы в кафе. Официант спрашивает, что вы хотите. Закажите напиток и еду, скажите, что вы любите или не любите.',
    aiRole:
      'Sie sind Kellner im Café „Sonne“. Der Gast lernt Deutsch (A1). Sprechen Sie sehr einfach und langsam, nur kurze Sätze im Präsens. Fragen Sie: Was möchten Sie? Möchten Sie auch etwas essen? Mit Milch? Sie haben: Kaffee, Tee, Saft, Wasser, Brötchen, Kuchen, Suppe, Ei. Es gibt heute keinen Fisch. Wenn der Gast nicht weiterweiß, helfen Sie mit zwei Möglichkeiten: „Kaffee oder Tee?“. Am Ende sagen Sie den Preis ganz einfach: „Das macht 8 Euro.“',
    opener: 'Guten Tag! Was möchten Sie?',
    tasksRu: [
      'Закажите напиток: «Ich möchte einen / eine / ein …, bitte».',
      'Закажите что-нибудь поесть.',
      'Скажите, что вы любите и чего не любите: «Ich mag … / Ich mag keinen …».',
      'Попрощайтесь и поблагодарите.',
    ],
    readAloud: ['Ich möchte einen Kaffee.', 'Ich mag keinen Käse.', 'Das Brot ist lecker.', 'Wir trinken Wasser.', 'Möchtest du ein Ei?'],
  },
};
