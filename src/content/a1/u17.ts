import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-17',
  level: 'A1',
  order: 17,
  title: 'Arbeit und Beruf',
  titleRu: 'Работа и профессия',
  goalsRu: [
    'Называть профессии и места работы',
    'Говорить, кто вы по профессии и где вы работали',
    'Рассказывать о прошлом в перфекте с haben: Ich habe … gearbeitet.',
    'Спрашивать: Was hast du gestern gemacht?',
  ],
  grammar: {
    topic: 'Perfekt mit haben (regelmäßige Verben)',
    topicRu: 'Перфект с haben (правильные глаголы)',
    explanationRu: `**Перфект (Perfekt)** — главное прошедшее время в разговорной речи. Так немцы говорят о том, что было вчера, на прошлой неделе или много лет назад.

Перфект состоит из **двух частей**:

- **haben** в нужной форме — на **2-м месте**;
- **Partizip II** (причастие) — в **самом конце** предложения.

Ich **habe** gestern viel **gearbeitet**. — Я вчера много работал(а).
Was **hast** du am Wochenende **gemacht**? — Что ты делал(а) в выходные?

Это та же «рамка», что с модальными глаголами: Ich **muss** heute **arbeiten**. → Ich **habe** gestern **gearbeitet**.

**Partizip II правильных глаголов:** **ge** + основа + **t**

- machen → **ge**mach**t**, kaufen → **ge**kauf**t**, wohnen → **ge**wohn**t**
- основа на -t или -d → **-et**: arbeiten → gearbeit**et**, warten → gewart**et**
- глаголы на **-ieren** — без ge-: telefonieren → telefoniert, studieren → studiert
- приставки **be-, ver-** — без ge-: besuchen → besucht, verkaufen → verkauft
- отделяемые глаголы — ge в середине: einkaufen → ein**ge**kauft, aufräumen → auf**ge**räumt

**Профессия — без артикля:** Ich bin Lehrer. Sie ist Ärztin. Er arbeitet **als** Koch.

**Типичные ошибки:**

- Забывают haben: «Ich gearbeitet» ✗ → Ich **habe** gearbeitet.
- Ставят причастие в середину: «Ich habe gemacht die Hausaufgaben» ✗ → Ich habe die Hausaufgaben **gemacht**.
- В русском прошедшее время меняется по родам (работал — работала). В немецком нет: ich habe gearbeitet — и мужчина, и женщина.`,
    table: [
      ['Infinitiv', 'Partizip II', 'Beispiel'],
      ['machen', 'gemacht', 'Ich habe Pause gemacht.'],
      ['arbeiten', 'gearbeitet', 'Sie hat im Büro gearbeitet.'],
      ['kaufen', 'gekauft', 'Wir haben Brot gekauft.'],
      ['reparieren', 'repariert', 'Er hat das Auto repariert.'],
      ['verkaufen', 'verkauft', 'Ich habe mein Auto verkauft.'],
      ['einkaufen', 'eingekauft', 'Hast du schon eingekauft?'],
    ],
    examples: [
      { de: 'Ich habe 30 Jahre als Lehrerin gearbeitet.', ru: 'Я 30 лет работала учительницей.' },
      { de: 'Was hast du gestern gemacht?', ru: 'Что ты делал вчера?' },
      { de: 'Wir haben zehn Jahre in Moskau gewohnt.', ru: 'Мы десять лет жили в Москве.' },
      { de: 'Der Mechaniker hat das Auto repariert.', ru: 'Механик отремонтировал машину.' },
      { de: 'Habt ihr schon eingekauft?', ru: 'Вы уже сделали покупки?' },
      { de: 'Sie hat mit dem Chef telefoniert.', ru: 'Она поговорила с начальником по телефону.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich ___ gestern lange gearbeitet.',
        options: ['habe', 'hat', 'hast', 'haben'],
        answer: 0,
        explanationRu: 'Перфект: haben + Partizip II. С ich — habe: Ich habe gearbeitet.',
      },
      {
        type: 'choice',
        prompt: 'Was ___ ihr am Samstag gemacht?',
        options: ['hat', 'haben', 'habt', 'hast'],
        answer: 2,
        explanationRu: 'С ihr глагол haben имеет форму habt: Was habt ihr gemacht?',
      },
      {
        type: 'choice',
        prompt: 'Wir haben Brot ___.',
        options: ['kaufen', 'gekauft', 'gekaufen', 'kauft'],
        answer: 1,
        explanationRu: 'kaufen — правильный глагол: ge + kauf + t = gekauft.',
      },
      {
        type: 'choice',
        audio: 'Ich habe zehn Jahre als Koch gearbeitet.',
        prompt: 'Кем работал человек?',
        options: ['официантом', 'водителем', 'учителем', 'поваром'],
        answer: 3,
        explanationRu: 'der Koch — повар. Ich habe als Koch gearbeitet = я работал поваром.',
      },
      {
        type: 'choice',
        prompt: 'Sie hat mit der Chefin ___.',
        options: ['getelefoniert', 'telefoniert', 'telefonieren', 'telefoniertet'],
        answer: 1,
        explanationRu: 'Глаголы на -ieren образуют Partizip II без ge-: telefonieren → telefoniert.',
      },
      {
        type: 'gap',
        prompt: 'Meine Mutter hat 20 Jahre in einer Fabrik ___.',
        answers: ['gearbeitet'],
        hintRu: 'arbeiten',
        explanationRu: 'Основа arbeit- кончается на -t, поэтому добавляем -et: gearbeitet.',
      },
      {
        type: 'gap',
        prompt: 'Hast du die Hausaufgaben schon ___?',
        answers: ['gemacht'],
        hintRu: 'machen',
        explanationRu: 'machen → gemacht. Причастие стоит в самом конце предложения.',
      },
      {
        type: 'gap',
        prompt: 'Der Mechaniker hat mein Auto ___.',
        answers: ['repariert'],
        hintRu: 'reparieren',
        explanationRu: 'reparieren — глагол на -ieren, поэтому без ge-: repariert.',
      },
      {
        type: 'gap',
        audio: 'Wir haben gestern Fußball gespielt.',
        prompt: 'Wir haben gestern Fußball ___.',
        answers: ['gespielt'],
        explanationRu: 'spielen → gespielt: ge + spiel + t.',
      },
      {
        type: 'order',
        words: ['Was', 'hast', 'du', 'gestern', 'gemacht?'],
        translationRu: 'Что ты делал вчера?',
        explanationRu: 'W-вопрос: вопросительное слово, hast на 2-м месте, du, а причастие gemacht — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Поставьте предложение в перфект.',
        prompt: 'Ich kaufe einen Computer.',
        answers: ['Ich habe einen Computer gekauft.'],
        explanationRu: 'kaufe → habe … gekauft: haben на 2-м месте, причастие в конце.',
      },
      {
        type: 'choice',
        audio: 'Er hat in einer Bank gearbeitet.',
        prompt: 'Что вы слышите?',
        options: ['Er arbeitet in einer Bank.', 'Er hat in einer Bank gewartet.', 'Er hat in einer Bank gearbeitet.'],
        answer: 2,
        explanationRu: 'Слышно «hat … gearbeitet» — это перфект: он работал в банке.',
      },
    ],
  },
  vocab: [
    { de: 'Beruf', article: 'der', plural: '-e', pos: 'noun', ru: 'профессия', example: 'Was sind Sie von Beruf?', exampleRu: 'Кто вы по профессии?', pronRu: 'дер бэ-РУ:Ф' },
    { de: 'Arbeit', article: 'die', plural: '-en', pos: 'noun', ru: 'работа', example: 'Meine Arbeit ist interessant.', exampleRu: 'Моя работа интересная.', pronRu: 'ди АР-байт' },
    { de: 'arbeiten', forms: 'er arbeitet, hat gearbeitet', pos: 'verb', ru: 'работать', example: 'Ich arbeite in einem Büro.', exampleRu: 'Я работаю в офисе.', pronRu: 'АР-бай-тэн' },
    { de: 'Lehrer', article: 'der', plural: '-', pos: 'noun', ru: 'учитель (die Lehrerin — учительница)', example: 'Mein Bruder ist Lehrer.', exampleRu: 'Мой брат — учитель.', pronRu: 'дер ЛЕ:-ра' },
    { de: 'Verkäufer', article: 'der', plural: '-', pos: 'noun', ru: 'продавец (die Verkäuferin — продавщица)', example: 'Die Verkäuferin ist sehr nett.', exampleRu: 'Продавщица очень милая.', pronRu: 'дер фэа-КОЙ-фа' },
    { de: 'Koch', article: 'der', plural: '-¨e', pos: 'noun', ru: 'повар (die Köchin)', example: 'Er arbeitet als Koch.', exampleRu: 'Он работает поваром.', pronRu: 'дер КОХ' },
    { de: 'Kellner', article: 'der', plural: '-', pos: 'noun', ru: 'официант (die Kellnerin)', example: 'Der Kellner bringt den Kaffee.', exampleRu: 'Официант приносит кофе.', pronRu: 'дер КЕЛЬ-на' },
    { de: 'Ingenieur', article: 'der', plural: '-e', pos: 'noun', ru: 'инженер (die Ingenieurin)', example: 'Mein Mann ist Ingenieur von Beruf.', exampleRu: 'Мой муж по профессии инженер.', pronRu: 'дер ин-же-НЬЁ:А' },
    { de: 'Mechaniker', article: 'der', plural: '-', pos: 'noun', ru: 'механик, автослесарь', example: 'Der Mechaniker repariert das Auto.', exampleRu: 'Механик ремонтирует машину.', pronRu: 'дер ме-ХА:-ни-ка' },
    { de: 'Krankenpfleger', article: 'der', plural: '-', pos: 'noun', ru: 'медбрат (die Krankenpflegerin — медсестра)', example: 'Sie ist Krankenpflegerin.', exampleRu: 'Она медсестра.', pronRu: 'дер КРАН-кен-пфле:-га' },
    { de: 'Fahrer', article: 'der', plural: '-', pos: 'noun', ru: 'водитель (die Fahrerin)', example: 'Der Fahrer wartet im Auto.', exampleRu: 'Водитель ждёт в машине.', pronRu: 'дер ФА:-ра' },
    { de: 'Rentner', article: 'der', plural: '-', pos: 'noun', ru: 'пенсионер (die Rentnerin — пенсионерка)', example: 'Mein Vater ist schon Rentner.', exampleRu: 'Мой отец уже на пенсии.', pronRu: 'дер РЕНТ-на' },
    { de: 'Firma', article: 'die', plural: 'die Firmen', pos: 'noun', ru: 'фирма', example: 'Ich arbeite bei einer Firma in Köln.', exampleRu: 'Я работаю в одной фирме в Кёльне.', pronRu: 'ди ФИР-ма' },
    { de: 'Büro', article: 'das', plural: '-s', pos: 'noun', ru: 'офис, контора', example: 'Sie arbeitet im Büro.', exampleRu: 'Она работает в офисе.', pronRu: 'дас бю-РО:' },
    { de: 'Fabrik', article: 'die', plural: '-en', pos: 'noun', ru: 'фабрика, завод', example: 'Er hat in einer Fabrik gearbeitet.', exampleRu: 'Он работал на заводе.', pronRu: 'ди фа-БРИК' },
    { de: 'Krankenhaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'больница', example: 'Sie arbeitet im Krankenhaus.', exampleRu: 'Она работает в больнице.', pronRu: 'дас КРАН-кен-хаус' },
    { de: 'Chef', article: 'der', plural: '-s', pos: 'noun', ru: 'начальник (die Chefin — начальница)', example: 'Mein Chef ist sehr nett.', exampleRu: 'Мой начальник очень приятный.', pronRu: 'дер ШЕФ' },
    { de: 'Kollege', article: 'der', plural: '-n', pos: 'noun', ru: 'коллега (die Kollegin — коллега-женщина)', example: 'Das ist mein Kollege Tim.', exampleRu: 'Это мой коллега Тим.', pronRu: 'дер ко-ЛЕ:-гэ' },
    { de: 'verdienen', forms: 'er verdient, hat verdient', pos: 'verb', ru: 'зарабатывать', example: 'Er verdient nicht viel.', exampleRu: 'Он зарабатывает немного.', pronRu: 'фэа-ДИ:-нэн' },
    { de: 'arbeitslos', pos: 'adj', ru: 'безработный', example: 'Mein Nachbar ist arbeitslos.', exampleRu: 'Мой сосед — безработный.', pronRu: 'АР-байтс-ло:с' },
  ],
  listening: {
    title: 'Viktor erzählt',
    kind: 'monolog',
    text: 'Hallo, ich heiße Viktor Bauer. Ich bin 66 Jahre alt und schon Rentner. Früher habe ich als Mechaniker in einer Werkstatt in Köln gearbeitet. Ich habe dort 40 Jahre lang Autos repariert. Meine Frau Inge hat als Verkäuferin in einem Supermarkt gearbeitet. Jetzt haben wir viel Zeit. Letzte Woche haben wir unsere Tochter in Hamburg besucht. Sie ist Ärztin von Beruf. Gestern habe ich im Garten gearbeitet, und Inge hat eine Suppe gekocht. Heute Abend spielen wir Karten.',
    questions: [
      { question: 'Was ist Viktor jetzt?', options: ['Mechaniker', 'Rentner', 'Verkäufer'], answer: 1 },
      { question: 'Wo hat Viktor gearbeitet?', options: ['in einem Supermarkt', 'in einem Krankenhaus', 'in einer Werkstatt'], answer: 2 },
      { question: 'Wie lange hat er dort gearbeitet?', options: ['40 Jahre', '14 Jahre', '4 Jahre'], answer: 0 },
      { question: 'Was ist die Tochter von Beruf?', options: ['Verkäuferin', 'Ärztin', 'Lehrerin'], answer: 1 },
      { question: 'Was hat Inge gestern gemacht?', options: ['Sie hat im Garten gearbeitet.', 'Sie hat Karten gespielt.', 'Sie hat eine Suppe gekocht.'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'В вашем курсе немецкого все пишут короткий текст о себе для стенгазеты. Напишите, кто вы по профессии, где вы работали раньше и что вы делали вчера.',
    taskDe: 'Schreiben Sie einen kurzen Text über sich und Ihren Beruf.',
    points: ['Was sind Sie von Beruf?', 'Wo haben Sie früher gearbeitet?', 'Was haben Sie gestern gemacht?'],
    minWords: 30,
    usefulPhrases: [
      'Ich bin … von Beruf.',
      'Ich bin Rentner / Rentnerin.',
      'Früher habe ich als … gearbeitet.',
      'Ich habe … Jahre bei … gearbeitet.',
      'Gestern habe ich gekocht / eingekauft / Deutsch gelernt.',
      'Meine Arbeit ist interessant.',
      'Jetzt suche ich Arbeit.',
    ],
  },
  speaking: {
    scenarioRu: 'На курсе немецкого вы знакомитесь с новой преподавательницей. Она спрашивает о вашей профессии, о прежней работе и о том, что вы делали вчера.',
    aiRole:
      'Sie sind Frau Schulz, Lehrerin in einem Deutschkurs. Ihr Gesprächspartner ist neu im Kurs und lernt Deutsch auf Niveau A1 (Anfänger). Fragen Sie nach seinem Beruf: Was sind Sie von Beruf? Wo haben Sie gearbeitet? Wie lange? Was haben Sie gestern gemacht? Erzählen Sie auch kurz von sich (Ich bin Lehrerin. Gestern habe ich viel gearbeitet.). Sprechen Sie sehr einfach und langsam, nur kurze Sätze im Präsens und im Perfekt mit haben. Stellen Sie immer nur eine Frage. Wenn der Lerner nicht weiterweiß, helfen Sie mit einem Beispiel, zum Beispiel: „Haben Sie in einem Büro gearbeitet oder in einer Fabrik?“',
    opener: 'Hallo! Was sind Sie von Beruf?',
    tasksRu: [
      'Назовите свою профессию (Ich bin … von Beruf / Ich bin Rentner).',
      'Расскажите, где и сколько лет вы работали (Ich habe … Jahre als … gearbeitet).',
      'Скажите 2–3 предложения о том, что вы делали вчера (перфект с haben).',
      'Спросите преподавательницу: Was haben Sie gestern gemacht?',
    ],
    readAloud: ['Ich bin Ingenieur von Beruf.', 'Ich habe in einer Fabrik gearbeitet.', 'Gestern habe ich gekocht.', 'Was hast du gemacht?', 'Mein Chef ist nett.'],
  },
};
