import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das ist ___ Stuhl.',
      options: ['ein', 'eine', 'das'],
      answer: 0,
      explanationRu: 'der Stuhl — мужской род, поэтому ein Stuhl. «das» не подходит: Stuhl не среднего рода.',
    },
    {
      type: 'choice',
      prompt: '___ Wohnung ist hell.',
      options: ['Der', 'Die', 'Das'],
      answer: 1,
      explanationRu: 'Wohnung — женский род: die Wohnung. Почти все слова на -ung женского рода.',
    },
    {
      type: 'choice',
      audio: 'das Sofa',
      prompt: 'Какой артикль вы слышите?',
      options: ['der', 'die', 'das'],
      answer: 2,
      explanationRu: 'das Sofa — средний род. По-русски «диван» мужского рода, поэтому запомните артикль отдельно.',
    },
    {
      type: 'choice',
      audio: 'die Tür',
      prompt: 'Какой артикль вы слышите?',
      options: ['der', 'die', 'das'],
      answer: 1,
      explanationRu: 'die Tür — дверь, женский род (как и в русском).',
    },
    {
      type: 'gap',
      prompt: 'Das ist ___ Schrank. Der Schrank ist alt.',
      answers: ['ein'],
      hintRu: 'ein или eine?',
      explanationRu: 'der Schrank — мужской род, поэтому неопределённый артикль ein.',
    },
    {
      type: 'choice',
      prompt: 'Das ist ___ Tür. Das ist ein Fenster.',
      options: ['kein', 'keine', 'nicht'],
      answer: 1,
      explanationRu: 'die Tür — женский род: eine Tür → keine Tür.',
    },
    {
      type: 'gap',
      prompt: 'Das ist ___ Sofa. Das ist ein Bett.',
      answers: ['kein'],
      explanationRu: 'das Sofa — средний род: ein Sofa → kein Sofa.',
    },
    {
      type: 'gap',
      audio: 'Das ist keine Lampe.',
      prompt: 'Какое слово вы слышите? Das ist ___ Lampe.',
      answers: ['keine'],
      explanationRu: 'die Lampe — женский род, поэтому keine Lampe.',
    },
    {
      type: 'choice',
      prompt: 'Das ist ___ mein Schrank.',
      options: ['nicht', 'kein', 'keine'],
      answer: 0,
      explanationRu: 'Перед mein/dein (и перед der/die/das) kein не ставится — отрицаем словом nicht: Das ist nicht mein Schrank.',
    },
    {
      type: 'gap',
      prompt: 'Der Balkon ist groß. ___ ist auch hell.',
      answers: ['Er'],
      explanationRu: 'der Balkon — мужской род, поэтому местоимение er.',
    },
    {
      type: 'gap',
      prompt: 'Die Lampe ist neu. ___ ist sehr schön.',
      answers: ['Sie'],
      explanationRu: 'die Lampe — женский род, поэтому местоимение sie.',
    },
    {
      type: 'gap',
      audio: 'Wohnzimmer',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Wohnzimmer'],
      explanationRu: 'Wohnzimmer — гостиная (wohnen — жить + Zimmer — комната). h после o не читается, z = «ц».',
    },
    {
      type: 'choice',
      audio: 'Das Zimmer ist nicht groß.',
      prompt: 'Какая комната?',
      options: ['groß', 'nicht groß', 'sehr groß'],
      answer: 1,
      explanationRu: 'Вы слышите «nicht groß» — комната небольшая.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите наоборот: используйте kein или keine.',
      prompt: 'Das ist eine Küche.',
      answers: ['Das ist keine Küche.'],
      explanationRu: 'eine Küche → keine Küche: k + eine.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите наоборот: используйте nicht.',
      prompt: 'Die Wohnung ist hell.',
      answers: ['Die Wohnung ist nicht hell.'],
      explanationRu: 'hell — прилагательное, поэтому nicht. Оно стоит прямо перед hell.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Das ist nicht Tisch.', 'Das ist kein Tisch.', 'Das ist keine Tisch.'],
      answer: 1,
      explanationRu: 'Перед существительным без der/die/das отрицание — kein. Tisch мужского рода → kein Tisch (без -e).',
    },
    {
      type: 'order',
      words: ['Ist', 'das', 'dein', 'Sofa?'],
      translationRu: 'Это твой диван?',
      explanationRu: 'Вопрос «да/нет»: глагол на первом месте. das Sofa → dein Sofa (повторение юнита 6).',
    },
    {
      type: 'choice',
      prompt: 'Wir ___ in Berlin.',
      options: ['wohnen', 'wohnt', 'wohnst'],
      answer: 0,
      explanationRu: 'Повторение: wir → окончание -en: wir wohnen.',
    },
    {
      type: 'gap',
      prompt: 'Ihr ___ ein Haus? Toll!',
      answers: ['habt'],
      hintRu: 'haben',
      explanationRu: 'Повторение: haben — ihr habt.',
    },
    {
      type: 'gap',
      prompt: 'Das ist meine Wohnung. Und wo ist ___ Wohnung, Anna?',
      answers: ['deine'],
      explanationRu: 'Повторение: к Анне обращаемся на «ты» → dein; Wohnung женского рода → deine.',
    },
  ],
  reading: [
    {
      title: 'Wohnungsanzeigen',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', body: 'Kleine Wohnung: 1 Zimmer, Küche, Bad. 35 m², hell, nicht laut. Kein Balkon. 390 Euro. Tel. 0176 445 582' },
        { label: 'b', body: '3-Zimmer-Wohnung: Wohnzimmer, 2 Schlafzimmer, Küche, Bad und Balkon. 85 m². Die Küche ist neu. 890 Euro. Tel. 030 771 234' },
        { label: 'c', body: 'Zimmer frei! 18 m². Bett, Tisch, Stuhl und Schrank sind da. Küche und Bad für 3 Personen. 320 Euro. E-Mail: zimmer-frei@post.de' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt?',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит каждому человеку?',
          options: ['Anzeige a', 'Anzeige b', 'Anzeige c'],
          items: [
            { kind: 'match', prompt: 'Familie Lorenz: Wir sind vier Personen. Ein Balkon ist für uns wichtig.', answer: 1, explanationRu: 'Семье из четырёх человек нужна большая квартира с балконом — это объявление b: 3 комнаты и Balkon.' },
            { kind: 'match', prompt: 'Herr Wolf ist allein. Er sucht eine Wohnung für eine Person, kein Zimmer.', answer: 0, explanationRu: 'Ему нужна квартира, а не комната: объявление a — маленькая квартира (1 Zimmer, Küche, Bad). В объявлении c сдаётся только комната.' },
            { kind: 'match', prompt: 'Mila ist Studentin. Sie hat keine Möbel.', answer: 2, explanationRu: 'В объявлении c мебель уже есть: «Bett, Tisch, Stuhl und Schrank sind da».' },
          ],
        },
        {
          instructionDe: 'Lesen Sie die Anzeigen noch einmal. Richtig oder falsch?',
          instructionRu: 'Прочитайте объявления ещё раз. Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Das Zimmer in Anzeige c ist 18 m² groß.', answer: true, explanationRu: 'В объявлении c написано «18 m²».' },
            { kind: 'tf', statement: 'Die Wohnung in Anzeige a ist laut.', answer: false, explanationRu: 'Квартира a «hell, nicht laut» — светлая и не шумная.' },
          ],
        },
      ],
    },
    {
      title: 'Eine E-Mail von Sofia',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Oma,

ich habe jetzt eine Wohnung in Leipzig! Sie ist klein: ein Zimmer, eine Küche und ein Bad. Das Zimmer ist hell und sehr schön. Das Bett ist neu, der Schrank ist alt. Ein Sofa ist noch nicht da. Die Küche ist klein, da ist kein Tisch. Und ein Balkon ist da! Er ist klein und schön. Meine Nachbarin heißt Frau Schulz. Sie ist sehr nett.

Viele Grüße
Deine Sofia`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Sofia hat eine Wohnung in Leipzig.', answer: true, explanationRu: '«Ich habe jetzt eine Wohnung in Leipzig!»' },
            { kind: 'tf', statement: 'Die Wohnung hat drei Zimmer.', answer: false, explanationRu: 'Только одна комната: «ein Zimmer, eine Küche und ein Bad».' },
            { kind: 'tf', statement: 'Das Bett ist alt.', answer: false, explanationRu: 'Кровать новая: «Das Bett ist neu». Старый — шкаф.' },
            { kind: 'tf', statement: 'Ein Sofa ist noch nicht da.', answer: true, explanationRu: 'Так и написано: «Ein Sofa ist noch nicht da».' },
            { kind: 'tf', statement: 'Der Balkon ist groß.', answer: false, explanationRu: 'Балкон маленький: «Er ist klein und schön».' },
            { kind: 'tf', statement: 'Frau Schulz ist nett.', answer: true, explanationRu: '«Sie ist sehr nett» — соседка очень милая.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht von Frau Berg',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Hallo, Herr Novak, hier ist Petra Berg. Die Wohnung ist noch frei. Sie hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist groß und hell. Der Balkon ist klein. Die Küche ist neu. Und die Wohnung ist nicht teuer! Vielen Dank und tschüss!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Wählen Sie die richtige Lösung.',
          instructionRu: 'Прослушайте сообщение. Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Wie viele Zimmer hat die Wohnung?', options: ['ein Zimmer', 'zwei Zimmer', 'drei Zimmer'], answer: 1, explanationRu: '«Sie hat zwei Zimmer, eine Küche und ein Bad.»' },
            { kind: 'mc', question: 'Was ist neu?', options: ['die Küche', 'das Bad', 'der Balkon'], answer: 0, explanationRu: '«Die Küche ist neu.»' },
          ],
        },
        {
          instructionDe: 'Richtig oder falsch?',
          instructionRu: 'Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Das Wohnzimmer ist dunkel.', answer: false, explanationRu: 'Гостиная «groß und hell» — большая и светлая.' },
            { kind: 'tf', statement: 'Die Wohnung ist teuer.', answer: false, explanationRu: '«Die Wohnung ist nicht teuer» — квартира недорогая.' },
          ],
        },
      ],
    },
    {
      title: 'Das Zimmer von Max',
      kind: 'dialog',
      speakers: { A: 'Mutter', B: 'Max' },
      situation: 'Max und seine Mutter sprechen.',
      text: `A: Max, ist das dein Zimmer?
B: Ja, Mama. Es ist klein, nur zwölf Quadratmeter.
A: Und wo ist das Bett? Das ist ein Sofa.
B: Nein, Mama, das ist kein Sofa. Das ist mein Bett!
A: Ach so! Und der Schrank? Ist er neu?
B: Nein, er ist alt. Das ist Omas Schrank.
A: Und die Lampe? Sie ist sehr schön.
B: Ja, die Lampe ist neu.
A: Das Zimmer ist wirklich schön, Max!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Das Zimmer von Max ist groß.', answer: false, explanationRu: 'Комната маленькая: «Es ist klein, nur zwölf Quadratmeter».' },
            { kind: 'tf', statement: 'Max hat kein Bett, nur ein Sofa.', answer: false, explanationRu: 'Мама думает, что это диван, но Макс говорит: «Das ist kein Sofa. Das ist mein Bett!»' },
            { kind: 'tf', statement: 'Der Schrank ist alt.', answer: true, explanationRu: '«Nein, er ist alt. Das ist Omas Schrank.»' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            { kind: 'mc', question: 'Was ist neu?', options: ['der Schrank', 'die Lampe', 'das Bett'], answer: 1, explanationRu: '«Ja, die Lampe ist neu.»' },
          ],
        },
      ],
    },
  ],
};
