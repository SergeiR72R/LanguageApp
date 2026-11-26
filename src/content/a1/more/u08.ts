import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      audio: 'Ich möchte einen Apfel.',
      prompt: 'Что вы слышите?',
      options: ['ein Apfel', 'einen Apfel', 'eine Apfel'],
      answer: 1,
      explanationRu: 'der Apfel — мужской род. После möchten — Akkusativ: einen Apfel.',
    },
    {
      type: 'choice',
      prompt: 'Wir essen ___ Suppe.',
      options: ['einen', 'eine', 'ein'],
      answer: 1,
      explanationRu: 'die Suppe — женский род. В Akkusativ женский род не меняется: eine Suppe.',
    },
    {
      type: 'choice',
      prompt: 'Möchtest du ___ Brötchen?',
      options: ['einen', 'eine', 'ein'],
      answer: 2,
      explanationRu: 'das Brötchen — средний род (все слова на -chen — das). Средний род в Akkusativ не меняется: ein Brötchen.',
    },
    {
      type: 'gap',
      prompt: 'Der Käse ist lecker. Ich esse ___ Käse.',
      answers: ['den'],
      explanationRu: 'der Käse — мужской род; после essen — Akkusativ: der → den.',
    },
    {
      type: 'gap',
      prompt: 'Es gibt ___ Saft. Möchtest du ein Wasser?',
      answers: ['keinen'],
      hintRu: 'kein',
      explanationRu: 'После es gibt — Akkusativ. der Saft — мужской род: kein → keinen.',
    },
    {
      type: 'choice',
      prompt: 'Ich habe ___ Milch.',
      options: ['keinen', 'keine', 'kein'],
      answer: 1,
      explanationRu: 'die Milch — женский род: keine Milch. Женский род в Akkusativ не меняется.',
    },
    {
      type: 'gap',
      prompt: 'Was ___ ihr? – Zwei Wasser, bitte.',
      answers: ['möchtet'],
      hintRu: 'möchten',
      explanationRu: 'ihr → окончание -t: ihr möchtet.',
    },
    {
      type: 'choice',
      prompt: '___ du Fleisch? – Nein, ich esse kein Fleisch.',
      options: ['Magst', 'Mag', 'Mögt'],
      answer: 0,
      explanationRu: 'mögen: du magst. В вопросе «да/нет» глагол стоит первым.',
    },
    {
      type: 'gap',
      prompt: 'Mein Sohn ___ keine Milch.',
      answers: ['mag'],
      hintRu: 'mögen',
      explanationRu: 'mein Sohn = er → er mag (без окончания, как ich mag).',
    },
    {
      type: 'gap',
      audio: 'Wir mögen Fisch.',
      prompt: 'Что они любят? Wir mögen ___.',
      answers: ['Fisch'],
      explanationRu: '«Wir mögen Fisch» — мы любим рыбу. sch = «ш».',
    },
    {
      type: 'choice',
      audio: 'Ich mag Tee.',
      prompt: 'Что говорит человек?',
      options: ['Я хотел бы чаю.', 'Я люблю чай.', 'У меня нет чая.'],
      answer: 1,
      explanationRu: '«Ich mag» — я люблю (вообще). «Я хотел бы» — это «Ich möchte».',
    },
    {
      type: 'choice',
      audio: 'Ich möchte einen Tee.',
      prompt: 'Что говорит человек?',
      options: ['Я хотел бы чаю.', 'Я люблю чай.', 'У меня нет чая.'],
      answer: 0,
      explanationRu: '«Ich möchte» — я хотел бы (сейчас). Так заказывают в кафе.',
    },
    {
      type: 'choice',
      prompt: 'Im Café: «___ einen Kaffee, bitte.»',
      options: ['Ich möchte', 'Ich mag', 'Ich habe'],
      answer: 0,
      explanationRu: 'Когда заказываем, говорим вежливо: Ich möchte … «Ich mag» значит «я люблю».',
    },
    {
      type: 'gap',
      audio: 'Frühstück',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Frühstück'],
      explanationRu: 'das Frühstück — завтрак. ü — как «ю», st внутри слова (früh-stück) — «шт», потому что это начало второй части слова.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите «нет»: замените einen/eine/ein на keinen/keine/kein.',
      prompt: 'Ich esse einen Apfel.',
      answers: ['Ich esse keinen Apfel.'],
      explanationRu: 'einen Apfel → keinen Apfel: просто добавьте k.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите вежливо с möchten.',
      prompt: 'Kaffee, bitte!',
      answers: ['Ich möchte einen Kaffee, bitte.', 'Ich möchte einen Kaffee.', 'Ich möchte bitte einen Kaffee.', 'Ich möchte Kaffee, bitte.'],
      explanationRu: 'Ich möchte + Akkusativ: der Kaffee → einen Kaffee.',
    },
    {
      type: 'order',
      words: ['Möchten', 'Sie', 'eine', 'Suppe?'],
      translationRu: 'Хотите суп?',
      explanationRu: 'Вопрос «да/нет»: глагол на первом месте, потом Sie, потом дополнение.',
    },
    {
      type: 'choice',
      prompt: 'Das ist ___ Tisch, das ist ein Stuhl.',
      options: ['kein', 'keine', 'nicht'],
      answer: 0,
      explanationRu: 'Повторение юнита 7: der Tisch — мужской род, в Nominativ: kein Tisch.',
    },
    {
      type: 'choice',
      prompt: 'Die Suppe ist ___ lecker.',
      options: ['nicht', 'kein', 'keine'],
      answer: 0,
      explanationRu: 'Повторение юнита 7: lecker — прилагательное, его отрицаем словом nicht.',
    },
    {
      type: 'gap',
      prompt: 'Wo ___ ihr? – Wir wohnen in Hamburg.',
      answers: ['wohnt'],
      explanationRu: 'Повторение: ihr → окончание -t: ihr wohnt.',
    },
  ],
  reading: [
    {
      title: 'Frühstück im Café Morgenrot',
      textType: 'Speisekarte',
      texts: [
        {
          heading: 'Café Morgenrot – Frühstück',
          body: `Frühstück „Klein“: 1 Brötchen, Butter, Marmelade, Kaffee oder Tee – 4,50 €
Frühstück „Groß“: 2 Brötchen, Butter, Käse, Wurst, 1 Ei, Kaffee oder Tee, Orangensaft – 8,90 €
Frühstück „Ohne Fleisch“: Brot, Käse, Tomaten, 1 Ei, Tee – 6,80 €
Getränke: Kaffee 2,40 €, Tee 2,20 €, Milch 1,80 €, Saft 2,90 €, Wasser 1,90 €`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Speisekarte. Welches Frühstück passt?',
          instructionRu: 'Прочитайте меню. Какой завтрак подходит каждому человеку?',
          options: ['Frühstück „Klein“', 'Frühstück „Groß“', 'Frühstück „Ohne Fleisch“'],
          items: [
            { kind: 'match', prompt: 'Lisa mag keine Wurst und kein Fleisch. Sie möchte ein Ei.', answer: 2, explanationRu: 'Без мяса и с яйцом — завтрак «Ohne Fleisch» (Brot, Käse, Tomaten, 1 Ei).' },
            { kind: 'match', prompt: 'Tom möchte Wurst, Käse und einen Orangensaft.', answer: 1, explanationRu: 'Колбаса, сыр и апельсиновый сок есть только в завтраке «Groß».' },
            { kind: 'match', prompt: 'Frau Weiß möchte nur ein Brötchen und einen Kaffee.', answer: 0, explanationRu: 'Одна булочка и кофе — это завтрак «Klein».' },
          ],
        },
        {
          instructionDe: 'Richtig oder falsch?',
          instructionRu: 'Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Ein Tee kostet 2,20 €.', answer: true, explanationRu: 'В меню: «Tee 2,20 €».' },
            { kind: 'tf', statement: 'Das Frühstück „Klein“ hat ein Ei.', answer: false, explanationRu: 'В завтраке «Klein» нет яйца: только булочка, масло, джем и кофе или чай.' },
          ],
        },
      ],
    },
    {
      title: 'Nachrichten in der WG',
      textType: 'Kurznachrichten',
      texts: [
        {
          label: 'Lea',
          body: 'Hallo Jan, wir haben keinen Kaffee und keine Milch. Ich kaufe Kaffee, Milch und Brot. Möchtest du auch etwas? Die Suppe ist für dich. Sie ist sehr lecker! Ich mag keine Tomatensuppe. Du magst Tomatensuppe, oder? Bis später! Lea',
        },
        {
          label: 'Jan',
          body: 'Hallo Lea, danke für die Suppe! Ich möchte einen Joghurt und einen Apfelsaft. Danke! Jan',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Nachrichten. Richtig oder falsch?',
          instructionRu: 'Прочитайте сообщения. Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Lea und Jan haben keinen Kaffee.', answer: true, explanationRu: '«Wir haben keinen Kaffee und keine Milch.»' },
            { kind: 'tf', statement: 'Lea kauft Käse.', answer: false, explanationRu: 'Лея покупает кофе, молоко и хлеб — сыра в списке нет.' },
            { kind: 'tf', statement: 'Die Suppe ist für Jan.', answer: true, explanationRu: '«Die Suppe ist für dich» — Лея пишет это Яну.' },
            { kind: 'tf', statement: 'Lea mag Tomatensuppe.', answer: false, explanationRu: '«Ich mag keine Tomatensuppe» — Лея её не любит, а Ян любит.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Was möchte Jan?', options: ['Joghurt und Apfelsaft', 'Kaffee und Milch', 'Brot und Käse'], answer: 0, explanationRu: '«Ich möchte einen Joghurt und einen Apfelsaft.»' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Am Frühstückstisch',
      kind: 'dialog',
      speakers: { A: 'Mutter', B: 'Paul' },
      situation: 'Paul und seine Mutter frühstücken.',
      text: `A: Guten Morgen, Paul! Möchtest du ein Ei?
B: Nein, danke. Kein Ei.
A: Möchtest du ein Brötchen? Wir haben Käse.
B: Ja, bitte. Ein Brötchen mit Käse und Butter.
A: Und Milch oder Kakao?
B: Kakao, bitte! Haben wir Kakao?
A: Nein, leider. Wir haben keinen Kakao. Möchtest du einen Tee?
B: Nein, ich mag keinen Tee. Ich trinke Milch.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Paul möchte ein Ei.', answer: false, explanationRu: 'Пауль отказывается: «Nein, danke. Kein Ei.»' },
            { kind: 'tf', statement: 'Es gibt keinen Kakao.', answer: true, explanationRu: 'Мама говорит: «Wir haben keinen Kakao.»' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Was isst Paul?', options: ['ein Brötchen mit Käse', 'ein Ei', 'Kuchen'], answer: 0, explanationRu: '«Ein Brötchen mit Käse und Butter.»' },
            { kind: 'mc', question: 'Was trinkt Paul?', options: ['Kakao', 'Tee', 'Milch'], answer: 2, explanationRu: 'Какао нет, чай он не любит, поэтому: «Ich trinke Milch.»' },
          ],
        },
      ],
    },
    {
      title: 'Was mag Familie Yilmaz?',
      kind: 'monolog',
      situation: 'Mehmet spricht über seine Familie.',
      text: 'Hallo, ich bin Mehmet. Ich mag Fleisch, Fisch und Reis. Ich mag keinen Käse und keine Wurst. Mein Frühstück ist klein: ein Brötchen mit Butter und Marmelade und ein Kaffee. Meine Frau Aylin mag Obst und Joghurt. Sie trinkt keinen Kaffee, sie trinkt Tee. Unsere Kinder mögen Nudeln und Saft. Und sie mögen keine Suppe!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie den Text. Richtig oder falsch?',
          instructionRu: 'Прослушайте текст. Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Mehmet mag Käse.', answer: false, explanationRu: '«Ich mag keinen Käse und keine Wurst.»' },
            { kind: 'tf', statement: 'Die Kinder mögen Suppe.', answer: false, explanationRu: '«Und sie mögen keine Suppe!» — дети суп не любят.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Was trinkt Aylin?', options: ['Kaffee', 'Tee', 'Saft'], answer: 1, explanationRu: '«Sie trinkt keinen Kaffee, sie trinkt Tee.»' },
            { kind: 'mc', question: 'Was ist Mehmets Frühstück?', options: ['ein Brötchen und ein Kaffee', 'ein Ei und ein Tee', 'Obst und Joghurt'], answer: 0, explanationRu: '«Ein Brötchen mit Butter und Marmelade und ein Kaffee.» Obst und Joghurt любит его жена.' },
          ],
        },
      ],
    },
  ],
};
