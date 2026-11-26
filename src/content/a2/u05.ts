import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-05',
  level: 'A2',
  order: 5,
  title: 'Alltag und Haushalt',
  titleRu: 'Повседневная жизнь и домашние дела',
  goalsRu: [
    'Рассказывать о своём утре и распорядке дня с возвратными глаголами',
    'Правильно выбирать mich, dich, sich, uns, euch',
    'Говорить о домашних делах: кто что делает по дому',
    'Договариваться с соседом по квартире о делах по дому',
  ],
  grammar: {
    topic: 'Reflexive Verben',
    topicRu: 'Возвратные глаголы (sich waschen, sich beeilen)',
    explanationRu: `**Возвратные глаголы** — это глаголы с маленьким словом **sich** («себя»). В русском похожие глаголы заканчиваются на **-ся/-сь**: умыва**ться**, одева**ться**, торопи**ться**, радова**ться**.

По-немецки «-ся» — это **отдельное слово**, и оно **меняется** по лицам (смотрите таблицу):

- ich → **mich**, du → **dich**
- wir → **uns**, ihr → **euch**
- er / sie / es, sie (они) и Sie (вежливо) → **sich**

**Где стоит sich?** Сразу после спрягаемого глагола:
- Ich **wasche mich**. — Я умываюсь.
- Morgens **wasche ich mich**. — если на 1-м месте другое слово: глагол — подлежащее — sich.
- Ich **ziehe mich** schnell **an**. — отделяемая приставка, как всегда, в конце.
- Ich muss **mich beeilen**. — с модальным глаголом инфинитив в конце, sich — перед ним.
- Повелительное наклонение: **Beeil dich!** **Setzen Sie sich!**

**Перфект** — всегда с **haben**: Ich **habe mich** beeilt. Er **hat sich** gewaschen.

**С sich и без sich.** Многие глаголы бывают и такими, и такими:
- Ich wasche **mich**. (себя) — Ich wasche **das Auto**. (машину)
- Ich ziehe **mich** an. (себя) — Ich ziehe **das Kind** an. (ребёнка)
Если действие направлено на себя — sich (mich, dich…), если на другого — обычное дополнение.

**Типичные ошибки русскоговорящих:**
- «Ich wasche sich» ✗ → **Ich wasche mich** ✓. sich — только для er/sie/es, sie и Sie!
- Не всё, что на «-ся», возвратное: учиться = **lernen**, начинаться = **beginnen / anfangen**, нравиться = **gefallen** — без sich!
- И наоборот: отдыхать = **sich ausruhen**, чувствовать себя = **sich fühlen** — с sich, хотя в русском нет «-ся».
- Чистить зубы: **Ich putze mir die Zähne** — запомните как готовую фразу (здесь mir, а не mich).`,
    table: [
      ['', 'sich waschen (умываться)', 'sich beeilen (торопиться)'],
      ['ich', 'wasche mich', 'beeile mich'],
      ['du', 'wäschst dich', 'beeilst dich'],
      ['er / sie / es', 'wäscht sich', 'beeilt sich'],
      ['wir', 'waschen uns', 'beeilen uns'],
      ['ihr', 'wascht euch', 'beeilt euch'],
      ['sie / Sie', 'waschen sich', 'beeilen sich'],
    ],
    examples: [
      { de: 'Ich stehe um sechs Uhr auf und dusche mich.', ru: 'Я встаю в шесть часов и принимаю душ.' },
      { de: 'Die Kinder ziehen sich allein an.', ru: 'Дети одеваются сами.' },
      { de: 'Beeil dich, der Bus kommt!', ru: 'Поторопись, автобус идёт!' },
      { de: 'Am Sonntag ruhen wir uns aus.', ru: 'В воскресенье мы отдыхаем.' },
      { de: 'Wir freuen uns sehr, denn unsere Tochter kommt zu Besuch.', ru: 'Мы очень радуемся, потому что к нам в гости приезжает дочь.' },
      { de: 'Gestern habe ich mich geärgert, weil der Bus nicht gekommen ist.', ru: 'Вчера я разозлился, потому что автобус не пришёл.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Du beeilst ___ nie!',
        options: ['mich', 'dich', 'sich', 'uns'],
        answer: 1,
        explanationRu: 'Подлежащее du → возвратное местоимение dich: du beeilst dich.',
      },
      {
        type: 'choice',
        prompt: 'Wir freuen ___ sehr, denn morgen kommt Oma.',
        options: ['sich', 'euch', 'uns', 'mich'],
        answer: 2,
        explanationRu: 'Подлежащее wir → uns: wir freuen uns.',
      },
      {
        type: 'choice',
        prompt: 'Herr Bauer fühlt ___ heute nicht gut.',
        options: ['ihn', 'sich', 'mich', 'ihm'],
        answer: 1,
        explanationRu: 'Herr Bauer = er, а для er/sie/es возвратное местоимение всегда sich.',
      },
      {
        type: 'choice',
        prompt: 'Ihr müsst ___ beeilen, der Zug fährt gleich!',
        options: ['euch', 'uns', 'sich', 'dich'],
        answer: 0,
        explanationRu: 'Подлежащее ihr → euch. С модальным глаголом: ihr müsst euch beeilen.',
      },
      {
        type: 'gap',
        prompt: 'Ich ziehe ___ schnell an.',
        answers: ['mich'],
        hintRu: 'себя (ich)',
        explanationRu: 'Подлежащее ich → mich: ich ziehe mich an — я одеваюсь.',
      },
      {
        type: 'gap',
        prompt: 'Am Sonntag ruht er ___ aus.',
        answers: ['sich'],
        explanationRu: 'Для er — sich. sich ausruhen (отдыхать) всегда с возвратным местоимением.',
      },
      {
        type: 'gap',
        prompt: 'Setzen Sie ___ bitte!',
        answers: ['sich'],
        explanationRu: 'Вежливая форма Sie → sich: Setzen Sie sich! — Садитесь!',
      },
      {
        type: 'gap',
        prompt: 'Gestern habe ich ___ sehr geärgert.',
        answers: ['mich'],
        hintRu: 'я сам рассердился',
        explanationRu: 'Подлежащее ich → mich. Перфект возвратных глаголов — с haben: ich habe mich geärgert.',
      },
      {
        type: 'order',
        words: ['Morgens', 'dusche', 'ich', 'mich', 'zuerst.'],
        translationRu: 'Утром я сначала принимаю душ.',
        explanationRu: 'Morgens на 1-м месте → глагол dusche на 2-м, потом подлежащее ich, потом mich.',
      },
      {
        type: 'transform',
        instructionRu: 'Поставьте предложение в перфект.',
        prompt: 'Ich ziehe mich an.',
        answers: ['Ich habe mich angezogen.'],
        explanationRu: 'Перфект с haben: habe mich … angezogen. Причастие от anziehen — angezogen (ge- после приставки).',
      },
      {
        type: 'choice',
        audio: 'Beeil dich, der Bus kommt!',
        prompt: 'Что вы слышите?',
        options: ['Отдохни, автобус ещё не пришёл.', 'Умойся, автобус ушёл!', 'Поторопись, автобус идёт!', 'Одевайся, автобус опаздывает.'],
        answer: 2,
        explanationRu: '«Beeil dich!» — поторопись (sich beeilen), «der Bus kommt» — автобус идёт.',
      },
      {
        type: 'gap',
        audio: 'Wir ruhen uns am Wochenende aus.',
        prompt: 'Напишите пропущенное слово: Wir ruhen ___ am Wochenende aus.',
        answers: ['uns'],
        explanationRu: 'Подлежащее wir → uns: wir ruhen uns aus — мы отдыхаем.',
      },
    ],
  },
  vocab: [
    { de: 'sich waschen', forms: 'wäscht sich, hat sich gewaschen', pos: 'verb', ru: 'умываться, мыться', example: 'Das Kind wäscht sich schon allein.', exampleRu: 'Ребёнок уже умывается сам.', pronRu: 'зихь ВА-шен' },
    { de: 'sich anziehen', forms: 'zieht sich an, hat sich angezogen', pos: 'verb', ru: 'одеваться', example: 'Ich ziehe mich schnell an und gehe los.', exampleRu: 'Я быстро одеваюсь и выхожу.', pronRu: 'зихь АН-ци:-ен' },
    { de: 'sich ausziehen', forms: 'zieht sich aus, hat sich ausgezogen', pos: 'verb', ru: 'раздеваться (без sich: съезжать с квартиры)', example: 'Er zieht sich aus und geht ins Bett.', exampleRu: 'Он раздевается и ложится в кровать.', pronRu: 'зихь АУС-ци:-ен' },
    { de: 'sich umziehen', forms: 'zieht sich um, hat sich umgezogen', pos: 'verb', ru: 'переодеваться', example: 'Nach der Arbeit ziehe ich mich um.', exampleRu: 'После работы я переодеваюсь.', pronRu: 'зихь УМ-ци:-ен' },
    { de: 'sich beeilen', forms: 'beeilt sich, hat sich beeilt', pos: 'verb', ru: 'торопиться, спешить', example: 'Wir müssen uns beeilen, der Film beginnt um acht.', exampleRu: 'Нам надо поторопиться, фильм начинается в восемь.', pronRu: 'зихь бе-АЙ-лен' },
    { de: 'sich freuen', forms: 'freut sich, hat sich gefreut', pos: 'verb', ru: 'радоваться', example: 'Die Kinder freuen sich, denn es schneit.', exampleRu: 'Дети радуются, потому что идёт снег.', pronRu: 'зихь ФРОЙ-ен' },
    { de: 'sich ausruhen', forms: 'ruht sich aus, hat sich ausgeruht', pos: 'verb', ru: 'отдыхать', example: 'Nach dem Putzen ruhe ich mich eine Stunde aus.', exampleRu: 'После уборки я час отдыхаю.', pronRu: 'зихь АУС-ру:-ен' },
    { de: 'sich duschen', forms: 'duscht sich, hat sich geduscht', pos: 'verb', ru: 'принимать душ (можно и без sich: ich dusche)', example: 'Ich dusche mich jeden Abend.', exampleRu: 'Я принимаю душ каждый вечер.', pronRu: 'зихь ДУ:-шен' },
    { de: 'sich rasieren', forms: 'rasiert sich, hat sich rasiert', pos: 'verb', ru: 'бриться', example: 'Mein Mann rasiert sich jeden Morgen.', exampleRu: 'Мой муж бреется каждое утро.', pronRu: 'зихь ра-ЗИ:-рен' },
    { de: 'sich setzen', forms: 'setzt sich, hat sich gesetzt', pos: 'verb', ru: 'садиться', example: 'Bitte setzen Sie sich!', exampleRu: 'Пожалуйста, садитесь!', pronRu: 'зихь ЗЕ-цен' },
    { de: 'sich fühlen', forms: 'fühlt sich, hat sich gefühlt', pos: 'verb', ru: 'чувствовать себя', example: 'Ich fühle mich heute nicht gut.', exampleRu: 'Я сегодня плохо себя чувствую.', pronRu: 'зихь ФЮ:-лен' },
    { de: 'sich ärgern', forms: 'ärgert sich, hat sich geärgert', pos: 'verb', ru: 'сердиться, злиться', example: 'Er ärgert sich, weil der Zug schon wieder zu spät ist.', exampleRu: 'Он злится, потому что поезд опять опаздывает.', pronRu: 'зихь ЭР-герн' },
    { de: 'Haushalt', article: 'der', plural: '-e', pos: 'noun', ru: 'домашнее хозяйство', example: 'Mein Sohn hilft viel im Haushalt.', exampleRu: 'Мой сын много помогает по хозяйству.', pronRu: 'дер ХАУС-хальт' },
    { de: 'Wäsche', article: 'die', plural: '–', pos: 'noun', ru: 'бельё; стирка', example: 'Die Wäsche ist schon trocken.', exampleRu: 'Бельё уже высохло.', pronRu: 'ди ВЭ-ше' },
    { de: 'Waschmaschine', article: 'die', plural: '-n', pos: 'noun', ru: 'стиральная машина', example: 'Die Waschmaschine steht im Bad.', exampleRu: 'Стиральная машина стоит в ванной.', pronRu: 'ди ВАШ-ма-ши:-не' },
    { de: 'Staubsauger', article: 'der', plural: '-', pos: 'noun', ru: 'пылесос', example: 'Der Staubsauger ist im Schrank im Flur.', exampleRu: 'Пылесос в шкафу в коридоре.', pronRu: 'дер ШТАУП-зау-га' },
    { de: 'staubsaugen', forms: 'saugt Staub / staubsaugt, hat staubgesaugt', pos: 'verb', ru: 'пылесосить', example: 'Heute muss ich noch staubsaugen.', exampleRu: 'Сегодня мне ещё надо пропылесосить.', pronRu: 'ШТАУП-зау-ген' },
    { de: 'bügeln', forms: 'bügelt, hat gebügelt', pos: 'verb', ru: 'гладить (утюгом)', example: 'Am Sonntag bügelt meine Frau die Hemden.', exampleRu: 'В воскресенье моя жена гладит рубашки.', pronRu: 'БЮ:-гельн' },
    { de: 'abwaschen', forms: 'wäscht ab, hat abgewaschen', pos: 'verb', ru: 'мыть посуду', example: 'Nach dem Essen wasche ich ab.', exampleRu: 'После еды я мою посуду.', pronRu: 'АП-ва-шен' },
    { de: 'den Müll rausbringen', forms: 'bringt den Müll raus, hat den Müll rausgebracht', pos: 'phrase', ru: 'выносить мусор', example: 'Kannst du bitte den Müll rausbringen?', exampleRu: 'Можешь, пожалуйста, вынести мусор?', pronRu: 'ден МЮЛЬ РАУС-брин-ген' },
  ],
  listening: {
    title: 'Bernds Alltag',
    kind: 'monolog',
    text: `Hallo, ich heiße Bernd. Ich bin 64 Jahre alt und arbeite nicht mehr. Aber ich stehe jeden Tag früh auf, um halb sieben. Zuerst dusche ich mich und rasiere mich. Dann ziehe ich mich an und mache Frühstück für meine Frau und mich. Meine Frau Inge arbeitet noch. Sie muss sich morgens immer beeilen, denn ihr Bus fährt schon um Viertel nach sieben.

Jetzt mache ich viel im Haushalt: Ich wasche die Wäsche, ich sauge Staub und ich koche. Nur bügeln kann ich nicht gut – das macht Inge am Wochenende. Am Nachmittag ruhe ich mich eine Stunde aus. Dann gehe ich spazieren oder ich treffe mich mit Freunden. Am Abend kommt Inge nach Hause. Manchmal ärgert sie sich, weil ihr Chef unfreundlich ist. Dann kochen wir zusammen, und sie fühlt sich schnell wieder gut.`,
    questions: [
      { question: 'Wann steht Bernd auf?', options: ['Um 6:30 Uhr', 'Um 7:15 Uhr', 'Um 7:30 Uhr'], answer: 0 },
      { question: 'Warum muss Inge sich morgens beeilen?', options: ['Sie macht das Frühstück.', 'Ihr Bus fährt früh.', 'Sie muss noch bügeln.'], answer: 1 },
      { question: 'Was macht Bernd im Haushalt nicht?', options: ['Er kocht.', 'Er wäscht die Wäsche.', 'Er bügelt.'], answer: 2 },
      { question: 'Was macht Bernd am Nachmittag zuerst?', options: ['Er ruht sich aus.', 'Er geht einkaufen.', 'Er trifft seine Frau.'], answer: 0 },
      { question: 'Warum ärgert sich Inge manchmal?', options: ['Der Bus kommt zu spät.', 'Bernd kocht nicht.', 'Ihr Chef ist unfreundlich.'], answer: 2 },
    ],
  },
  writing: {
    taskRu:
      'Друг (подруга) спрашивает в сообщении: «Как сейчас проходит твой день?» Ответьте ему: расскажите о своём утре, о домашних делах и об отдыхе. Используйте возвратные глаголы (ich dusche mich, ich ziehe mich an…).',
    taskDe: 'Ein Freund oder eine Freundin fragt: „Wie sieht dein Alltag jetzt aus?“ Schreiben Sie eine Antwort.',
    points: [
      'Wie sieht Ihr Morgen aus? (aufstehen, sich duschen, sich anziehen …)',
      'Wer macht was im Haushalt?',
      'Wann und wie ruhen Sie sich aus?',
    ],
    minWords: 50,
    usefulPhrases: [
      'Lieber Tom, / Liebe Maria,',
      'Ich stehe um … Uhr auf.',
      'Zuerst dusche ich mich, dann ziehe ich mich an.',
      'Morgens muss ich mich immer beeilen.',
      'Im Haushalt mache ich …, mein Mann / meine Frau …',
      'Am Abend ruhe ich mich aus.',
      'Und wie ist es bei dir? Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы снимаете квартиру вместе с Лизой. Вам нужно составить план: кто когда утром пользуется ванной и кто какие домашние дела делает.',
    aiRole:
      'Sie sind Lisa, 35 Jahre alt. Sie wohnen mit dem Lerner zusammen in einer Wohnung (WG). Sie wollen zusammen einen Plan machen: Wer braucht morgens wann das Bad? Wer macht was im Haushalt (putzen, staubsaugen, abwaschen, Müll rausbringen, Wäsche)? Fragen Sie zum Beispiel: „Wann stehst du auf?“, „Wie lange duschst du dich?“, „Was machst du nicht gern?“. Sprechen Sie sehr einfach und langsam, in kurzen Sätzen auf A2-Niveau. Stellen Sie immer nur eine Frage. Benutzen Sie oft reflexive Verben. Macht der Lerner einen Fehler (z. B. „ich wasche sich“), wiederholen Sie den Satz einmal freundlich und richtig.',
    opener: 'Hallo! Wir brauchen einen Plan für das Bad und den Haushalt. Wann stehst du morgens auf?',
    tasksRu: [
      'Расскажите, во сколько вы встаёте и что делаете утром (ich dusche mich, ich rasiere mich, ich ziehe mich an).',
      'Договоритесь, кто когда пользуется ванной.',
      'Скажите, какие домашние дела вы делаете охотно, а какие — нет.',
      'Предложите распределение: «Ich wasche ab, und du bringst den Müll raus.»',
    ],
    readAloud: [
      'Ich stehe um sieben Uhr auf.',
      'Dann dusche ich mich.',
      'Wir müssen uns beeilen!',
      'Am Sonntag ruhen wir uns aus.',
      'Kannst du bitte abwaschen?',
    ],
  },
};
