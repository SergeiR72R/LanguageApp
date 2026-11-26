import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-16',
  level: 'A1',
  order: 16,
  title: 'Körper und Gesundheit',
  titleRu: 'Тело и здоровье',
  goalsRu: [
    'Называть части тела',
    'Говорить, что у вас болит: Mir tut der Kopf weh. Ich habe Fieber.',
    'Понимать советы врача, разрешения и запреты (sollen, dürfen)',
    'Говорить о своих желаниях с глаголом wollen',
  ],
  grammar: {
    topic: 'Modalverben wollen, sollen, dürfen; Mir tut … weh',
    topicRu: 'Модальные глаголы wollen, sollen, dürfen; «у меня болит …»',
    explanationRu: `**Модальные глаголы** — это глаголы-помощники. Они говорят о желании, совете или разрешении. Вы уже знаете **können** (мочь) и **müssen** (быть должным). Сегодня ещё три:

- **wollen** — хотеть (твёрдо решил): Ich **will** heute Fußball spielen.
- **sollen** — должен, потому что **кто-то так сказал** (врач, начальник): Der Arzt sagt, ich **soll** viel Tee trinken.
- **dürfen** — можно, разрешено: **Darf** ich hier rauchen? — Nein, hier **dürfen** Sie nicht rauchen. (**nicht dürfen** = нельзя)

Порядок слов такой же, как с können: модальный глагол стоит на **2-м месте**, второй глагол (инфинитив) — в **самом конце**: Ich **soll** im Bett **bleiben**.

Обратите внимание: у **ich** и **er/sie/es** одна и та же форма, без окончания: ich will — er will, ich darf — sie darf.

**Что болит?** По-немецки говорят: **Mir tut der Kopf weh.** — «У меня болит голова» (дословно: «Мне делает больно голова»). **mir** — «мне», **dir** — «тебе». Пока просто запомните фразы:

- Mir **tut** der Bauch weh. (болит одно — tut)
- Mir **tun** die Füße weh. (болит много — tun)
- Was tut **dir** weh? — Что у тебя болит?
- Was tut **Ihnen** weh? — Что у вас болит? (вежливо, так спрашивает врач)

Можно сказать и так: Ich habe **Kopfschmerzen / Bauchschmerzen / Rückenschmerzen**.

**Типичные ошибки:**

- «Ich tut weh» ✗ → **Mir** tut der Kopf weh.
- «Mir tut die Beine weh» ✗ → Mir **tun** die Beine weh.
- «Ich will» звучит очень твёрдо. В магазине или в кафе вежливее: **ich möchte**.
- Не путайте: Sie **müssen nicht** kommen — вам не обязательно приходить; Sie **dürfen nicht** kommen — вам нельзя приходить.`,
    table: [
      ['', 'wollen', 'sollen', 'dürfen'],
      ['ich', 'will', 'soll', 'darf'],
      ['du', 'willst', 'sollst', 'darfst'],
      ['er/sie/es', 'will', 'soll', 'darf'],
      ['wir', 'wollen', 'sollen', 'dürfen'],
      ['ihr', 'wollt', 'sollt', 'dürft'],
      ['sie/Sie', 'wollen', 'sollen', 'dürfen'],
    ],
    examples: [
      { de: 'Ich will heute Fußball spielen.', ru: 'Я хочу сегодня играть в футбол.' },
      { de: 'Der Arzt sagt, ich soll im Bett bleiben.', ru: 'Врач говорит, что мне нужно лежать в постели.' },
      { de: 'Darf ich hier rauchen? – Nein, das dürfen Sie nicht.', ru: 'Можно здесь курить? — Нет, нельзя.' },
      { de: 'Mir tut der Kopf weh.', ru: 'У меня болит голова.' },
      { de: 'Mir tun die Beine weh.', ru: 'У меня болят ноги.' },
      { de: 'Was tut dir weh?', ru: 'Что у тебя болит?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Du ___ heute keinen Sport machen. Du hast Fieber.',
        options: ['darfst', 'darf', 'dürft', 'dürfen'],
        answer: 0,
        explanationRu: 'С du глагол dürfen имеет форму darfst: du darfst. Kein Sport = нельзя заниматься спортом.',
      },
      {
        type: 'choice',
        prompt: 'Der Arzt sagt, ich ___ viel Tee trinken.',
        options: ['sollst', 'soll', 'sollen', 'sollt'],
        answer: 1,
        explanationRu: 'ich soll — без окончания, как er soll. sollen = так сказал другой человек (здесь врач).',
      },
      {
        type: 'choice',
        prompt: 'Wir ___ am Sonntag Fußball spielen. – Toll, ich komme mit!',
        options: ['will', 'willst', 'wollen', 'wollt'],
        answer: 2,
        explanationRu: 'С wir форма модального глагола совпадает с инфинитивом: wir wollen.',
      },
      {
        type: 'choice',
        audio: 'Mir tut der Bauch weh.',
        prompt: 'Что болит у человека?',
        options: ['голова', 'спина', 'живот', 'горло'],
        answer: 2,
        explanationRu: 'der Bauch — живот. Mir tut der Bauch weh = у меня болит живот.',
      },
      {
        type: 'choice',
        prompt: 'Mir ___ die Füße weh.',
        options: ['tut', 'tun', 'tue', 'tust'],
        answer: 1,
        explanationRu: 'die Füße — много (мн. число), поэтому tun: Mir tun die Füße weh.',
      },
      {
        type: 'choice',
        prompt: 'Was tut ___ weh, Paul?',
        options: ['du', 'dich', 'dir', 'ich'],
        answer: 2,
        explanationRu: 'В этой фразе нужно dir («тебе»): Was tut dir weh? — Что у тебя болит?',
      },
      {
        type: 'gap',
        prompt: 'Ihr ___ die Tabletten dreimal am Tag nehmen.',
        answers: ['sollt'],
        hintRu: 'sollen',
        explanationRu: 'С ihr модальный глагол кончается на -t: ihr sollt, ihr wollt, ihr dürft.',
      },
      {
        type: 'gap',
        prompt: 'Meine Frau ___ ein neues Auto kaufen.',
        answers: ['will'],
        hintRu: 'wollen',
        explanationRu: 'er/sie/es will — без окончания и с гласной i: meine Frau (= sie) will.',
      },
      {
        type: 'gap',
        audio: 'Sie dürfen eine Woche keinen Sport machen.',
        prompt: 'Что нельзя делать? Sie dürfen eine Woche keinen ___ machen.',
        answers: ['Sport'],
        explanationRu: 'Врач говорит: Sie dürfen keinen Sport machen — вам нельзя заниматься спортом неделю.',
      },
      {
        type: 'order',
        words: ['Wie oft', 'soll', 'ich', 'die Tabletten', 'nehmen?'],
        translationRu: 'Как часто мне принимать таблетки?',
        explanationRu: 'W-вопрос: вопросительное слово, затем модальный глагол (2-е место), подлежащее, а инфинитив nehmen — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Добавьте модальный глагол dürfen (ей нельзя).',
        prompt: 'Sie trinkt keinen Kaffee.',
        answers: ['Sie darf keinen Kaffee trinken.'],
        explanationRu: 'darf встаёт на 2-е место, а trinken уходит в конец предложения: Sie darf keinen Kaffee trinken.',
      },
      {
        type: 'choice',
        audio: 'Ich will nicht zum Arzt gehen.',
        prompt: 'Какой модальный глагол вы слышите?',
        options: ['soll', 'darf', 'muss', 'will'],
        answer: 3,
        explanationRu: 'Слышно «will» — хочу: Ich will nicht zum Arzt gehen. — Я не хочу идти к врачу.',
      },
    ],
  },
  vocab: [
    { de: 'Körper', article: 'der', plural: '-', pos: 'noun', ru: 'тело', example: 'Der Körper braucht viel Wasser.', exampleRu: 'Телу нужно много воды.', pronRu: 'дер КЁР-па' },
    { de: 'Kopf', article: 'der', plural: '-¨e', pos: 'noun', ru: 'голова', example: 'Mir tut der Kopf weh.', exampleRu: 'У меня болит голова.', pronRu: 'дер КОПФ' },
    { de: 'Bauch', article: 'der', plural: '-¨e', pos: 'noun', ru: 'живот', example: 'Ich habe Schmerzen im Bauch.', exampleRu: 'У меня боли в животе.', pronRu: 'дер БАУХ' },
    { de: 'Rücken', article: 'der', plural: '-', pos: 'noun', ru: 'спина', example: 'Mein Vater hat oft Rückenschmerzen.', exampleRu: 'У моего отца часто болит спина.', pronRu: 'дер РЮ-кен' },
    { de: 'Hals', article: 'der', plural: '-¨e', pos: 'noun', ru: 'горло, шея', example: 'Tee ist gut für den Hals.', exampleRu: 'Чай полезен для горла.', pronRu: 'дер ХАЛЬС' },
    { de: 'Auge', article: 'das', plural: '-n', pos: 'noun', ru: 'глаз', example: 'Sie hat blaue Augen.', exampleRu: 'У неё голубые глаза.', pronRu: 'дас АУ-гэ' },
    { de: 'Hand', article: 'die', plural: '-¨e', pos: 'noun', ru: 'рука (кисть)', example: 'Waschen Sie bitte die Hände.', exampleRu: 'Помойте, пожалуйста, руки.', pronRu: 'ди ХАНТ' },
    { de: 'Arm', article: 'der', plural: '-e', pos: 'noun', ru: 'рука (от плеча до кисти)', example: 'Mein Arm tut sehr weh.', exampleRu: 'У меня очень болит рука.', pronRu: 'дер АРМ' },
    { de: 'Bein', article: 'das', plural: '-e', pos: 'noun', ru: 'нога', example: 'Mir tun die Beine weh.', exampleRu: 'У меня болят ноги.', pronRu: 'дас БАЙН' },
    { de: 'Fuß', article: 'der', plural: '-¨e', pos: 'noun', ru: 'ступня, нога; zu Fuß — пешком', example: 'Ich gehe zu Fuß.', exampleRu: 'Я иду пешком.', pronRu: 'дер ФУ:С' },
    { de: 'Arzt', article: 'der', plural: '-¨e', pos: 'noun', ru: 'врач (die Ärztin — женщина-врач)', example: 'Ich gehe heute zum Arzt.', exampleRu: 'Я сегодня иду к врачу.', pronRu: 'дер А:РЦТ' },
    { de: 'krank', pos: 'adj', ru: 'больной, болен', example: 'Mein Kind ist krank.', exampleRu: 'Мой ребёнок болен.', pronRu: 'КРАНК' },
    { de: 'gesund', pos: 'adj', ru: 'здоровый, полезный', example: 'Obst ist gesund.', exampleRu: 'Фрукты полезны.', pronRu: 'гэ-ЗУНТ' },
    { de: 'Fieber', article: 'das', plural: '–', pos: 'noun', ru: 'температура (жар)', example: 'Hast du Fieber?', exampleRu: 'У тебя температура?', pronRu: 'дас ФИ:-ба' },
    { de: 'Tablette', article: 'die', plural: '-n', pos: 'noun', ru: 'таблетка', example: 'Nehmen Sie eine Tablette.', exampleRu: 'Примите таблетку.', pronRu: 'ди та-БЛЕ-тэ' },
    { de: 'Schmerz', article: 'der', plural: '-en', pos: 'noun', ru: 'боль (чаще мн. ч.: die Schmerzen)', example: 'Ich habe starke Schmerzen.', exampleRu: 'У меня сильные боли.', pronRu: 'дер ШМЕРЦ' },
    { de: 'wehtun', forms: 'es tut weh, hat wehgetan', pos: 'verb', ru: 'болеть (Mir tut … weh — у меня болит …)', example: 'Mir tut der Rücken weh.', exampleRu: 'У меня болит спина.', pronRu: 'ВЕ:-ту:н' },
    { de: 'wollen', forms: 'ich will, du willst, er will', pos: 'verb', ru: 'хотеть', example: 'Wir wollen heute schwimmen.', exampleRu: 'Мы хотим сегодня плавать.', pronRu: 'ВО-лэн' },
    { de: 'sollen', forms: 'ich soll, du sollst, er soll', pos: 'verb', ru: 'быть должным (по чужому совету, указанию)', example: 'Ich soll viel Wasser trinken.', exampleRu: 'Мне надо (велели) пить много воды.', pronRu: 'ЗО-лэн' },
    { de: 'dürfen', forms: 'ich darf, du darfst, er darf', pos: 'verb', ru: 'мочь (иметь разрешение); nicht dürfen — нельзя', example: 'Darf ich hier rauchen?', exampleRu: 'Можно мне здесь курить?', pronRu: 'ДЮР-фэн' },
  ],
  listening: {
    title: 'Beim Arzt',
    kind: 'dialog',
    text: `A: Guten Tag, Herr Petrow. Was ist los?
B: Guten Tag, Frau Doktor. Mir tut der Hals weh, und ich habe Kopfschmerzen.
A: Haben Sie auch Fieber?
B: Ja, 38 Grad.
A: Das ist eine Erkältung. Trinken Sie viel Tee und bleiben Sie im Bett.
B: Soll ich Tabletten nehmen?
A: Ja, nehmen Sie diese Tabletten dreimal am Tag.
B: Darf ich am Samstag Fußball spielen?
A: Nein, das dürfen Sie nicht. Sie dürfen eine Woche keinen Sport machen.
B: Schade! Vielen Dank, Frau Doktor.
A: Bitte. Gute Besserung!`,
    questions: [
      { question: 'Was hat Herr Petrow?', options: ['Bauchschmerzen', 'Halsschmerzen und Kopfschmerzen', 'Rückenschmerzen'], answer: 1 },
      { question: 'Hat Herr Petrow Fieber?', options: ['Ja, 38 Grad.', 'Nein.', 'Ja, 40 Grad.'], answer: 0 },
      { question: 'Was soll er trinken?', options: ['Kaffee', 'Saft', 'Tee'], answer: 2 },
      { question: 'Wie oft soll er die Tabletten nehmen?', options: ['einmal am Tag', 'dreimal am Tag', 'zweimal am Tag'], answer: 1 },
      { question: 'Was darf er nicht machen?', options: ['Sport machen', 'Tee trinken', 'im Bett bleiben'], answer: 0 },
    ],
  },
  writing: {
    taskRu: 'Вы заболели и не можете прийти на курс немецкого. Напишите короткое сообщение (e-mail) преподавательнице, фрау Беккер: что с вами, что сказал врач и когда вы придёте снова.',
    taskDe: 'Sie sind krank. Schreiben Sie eine E-Mail an Ihre Lehrerin, Frau Becker.',
    points: ['Sie sind krank: Was tut Ihnen weh?', 'Was sagt der Arzt?', 'Wann kommen Sie wieder?'],
    minWords: 25,
    usefulPhrases: [
      'Liebe Frau Becker,',
      'leider kann ich heute nicht kommen.',
      'Ich bin krank. Ich habe Fieber.',
      'Mir tut der Kopf / der Hals weh.',
      'Der Arzt sagt, ich soll im Bett bleiben.',
      'Ich darf nicht arbeiten.',
      'Am Montag komme ich wieder.',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы пришли к врачу. Врач спрашивает, что у вас болит. Расскажите о своих жалобах и спросите, что вам можно и нельзя делать.',
    aiRole:
      'Sie sind Frau Doktor Keller, Ärztin in einer Praxis in Köln. Ein Patient kommt zu Ihnen. Er lernt Deutsch auf Niveau A1 (Anfänger). Fragen Sie: Was tut Ihnen weh? Haben Sie Fieber? Geben Sie einfache Tipps (Trinken Sie viel Tee! Sie dürfen keinen Sport machen. Nehmen Sie die Tabletten dreimal am Tag.). Sprechen Sie sehr einfach und langsam, nur kurze Sätze im Präsens. Stellen Sie immer nur eine Frage. Wenn der Patient nicht weiterweiß, helfen Sie mit einer einfachen Frage, zum Beispiel: „Tut der Kopf weh oder der Bauch?“',
    opener: 'Guten Tag! Was tut Ihnen weh?',
    tasksRu: [
      'Скажите, что у вас болит (Mir tut … weh / Ich habe Kopfschmerzen …).',
      'Ответьте, есть ли у вас температура (Ich habe Fieber / kein Fieber).',
      'Спросите, что вам можно делать (Darf ich … arbeiten / Sport machen?).',
      'Спросите, как часто принимать таблетки (Wie oft soll ich …?).',
    ],
    readAloud: ['Mir tut der Kopf weh.', 'Ich habe Fieber.', 'Darf ich Sport machen?', 'Ich soll viel Tee trinken.', 'Gute Besserung!'],
  },
};
