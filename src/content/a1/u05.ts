import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-05',
  level: 'A1',
  order: 5,
  title: 'Zahlen, Alter, Kontakt',
  titleRu: 'Числа, возраст, контакты',
  goalsRu: [
    'Понимать и называть числа до 100',
    'Говорить, сколько вам лет: Ich bin … Jahre alt',
    'Называть адрес, номер телефона и e-mail',
    'Спрягать правильные глаголы во всех лицах (ich wohne, wir wohnen …)',
    'Употреблять глагол haben (иметь)',
  ],
  grammar: {
    topic: 'Präsens: regelmäßige Verben und haben',
    topicRu: 'Настоящее время: правильные глаголы и haben',
    explanationRu: `**Шаг 1. Основа глагола.** В словаре глагол стоит в начальной форме (инфинитив). Она почти всегда кончается на **-en**: wohn**en**, lern**en**, mach**en**. Отрежьте -en — получится основа: **wohn-**, **lern-**, **mach-**.

**Шаг 2. Окончания.** К основе добавляем окончание. Оно зависит от того, кто действует (см. таблицу):

- ich → **-e**: ich wohn**e**
- du → **-st**: du wohn**st**
- er / sie / es → **-t**: er wohn**t**
- wir → **-en**: wir wohn**en**
- ihr → **-t**: ihr wohn**t**
- sie (они) / Sie (Вы) → **-en**: sie wohn**en**

Хорошая новость: у **wir**, **sie** и **Sie** форма такая же, как в словаре.

**Шаг 3. Маленькие особенности.**

- Основа кончается на **-t** или **-d** (arbeit-): для удобства вставляем **e**: du arbeit**e**st, er arbeit**e**t, ihr arbeit**e**t.
- Основа кончается на **-s, -ß, -z** (heiß-): у du только **-t**: du heißt.

**Шаг 4. Глагол haben (иметь).** Он почти правильный, только у du и er/sie пропадает b: du **hast**, er **hat**. Русское «у меня есть» по-немецки — «я имею»: **Ich habe** ein Handy.

**Шаг 5. Возраст — с sein, а не с haben!** «Мне 50 лет» → **Ich bin 50 Jahre alt.** Вопрос: **Wie alt bist du? / Wie alt sind Sie?**

**Шаг 6. Числа 21–99 — «наоборот».** Сначала единицы, потом десятки: 21 = **ein-und-zwanzig** («один-и-двадцать»), 47 = **sieben-und-vierzig**. Пишется одним словом. 100 = **hundert**. Номер телефона обычно говорят по одной цифре: null – eins – sieben …

**Типичные ошибки:** «Ich habe 50 Jahre» (правильно: Ich bin 50 Jahre alt); «du wohnt» (правильно: du wohnst); на слух путают 25 и 52 — слушайте, что идёт **первым**.`,
    table: [
      ['', 'wohnen', 'arbeiten', 'heißen', 'haben'],
      ['ich', 'wohne', 'arbeite', 'heiße', 'habe'],
      ['du', 'wohnst', 'arbeitest', 'heißt', 'hast'],
      ['er / sie / es', 'wohnt', 'arbeitet', 'heißt', 'hat'],
      ['wir', 'wohnen', 'arbeiten', 'heißen', 'haben'],
      ['ihr', 'wohnt', 'arbeitet', 'heißt', 'habt'],
      ['sie / Sie', 'wohnen', 'arbeiten', 'heißen', 'haben'],
    ],
    examples: [
      { de: 'Wir wohnen in Köln.', ru: 'Мы живём в Кёльне.' },
      { de: 'Was macht ihr? – Wir lernen Deutsch.', ru: 'Что вы делаете? — Мы учим немецкий.' },
      { de: 'Du arbeitest in Berlin, oder?', ru: 'Ты работаешь в Берлине, да?' },
      { de: 'Hast du ein Handy? – Ja, die Nummer ist 0176 …', ru: 'У тебя есть мобильный? — Да, номер 0176 …' },
      { de: 'Wie alt sind Sie? – Ich bin dreiundsechzig Jahre alt.', ru: 'Сколько Вам лет? — Мне шестьдесят три года.' },
      { de: 'Frau Roth hat zwei Kinder.', ru: 'У госпожи Рот двое детей.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Wir ___ in Köln.',
        options: ['wohnt', 'wohnen', 'wohnst'],
        answer: 1,
        explanationRu: 'С wir окончание -en, как в словаре: wir wohnen.',
      },
      {
        type: 'choice',
        prompt: 'Was ___ du?',
        options: ['machst', 'macht', 'machen'],
        answer: 0,
        explanationRu: 'С du окончание -st: du machst.',
      },
      {
        type: 'choice',
        prompt: 'Er ___ ein Handy.',
        options: ['habt', 'hast', 'hat'],
        answer: 2,
        explanationRu: 'haben с er: er hat (b пропадает). hast — для du, habt — для ihr.',
      },
      {
        type: 'choice',
        prompt: 'Wie alt sind Sie? – Ich ___ 52 Jahre alt.',
        options: ['habe', 'bin', 'hat'],
        answer: 1,
        explanationRu: 'Возраст по-немецки — с глаголом sein: Ich bin 52 Jahre alt. «Ich habe 52 Jahre» — типичная ошибка.',
      },
      {
        type: 'gap',
        prompt: 'Ich ___ in Hamburg.',
        answers: ['arbeite', 'wohne'],
        hintRu: 'arbeiten',
        explanationRu: 'С ich окончание -e: ich arbeite.',
      },
      {
        type: 'gap',
        prompt: 'Du ___ in Hamburg.',
        answers: ['arbeitest'],
        hintRu: 'arbeiten',
        explanationRu: 'Основа arbeit- кончается на -t, поэтому вставляем e: du arbeitest.',
      },
      {
        type: 'gap',
        prompt: '___ du ein Handy?',
        answers: ['Hast'],
        hintRu: 'haben',
        explanationRu: 'haben с du: du hast. В вопросе «да/нет» глагол стоит первым: Hast du …?',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите предложение с ihr (вы — несколько друзей).',
        prompt: 'Wir wohnen in Bonn.',
        answers: ['Ihr wohnt in Bonn.'],
        explanationRu: 'С ihr окончание -t: ihr wohnt.',
      },
      {
        type: 'gap',
        audio: 'siebenundvierzig',
        prompt: 'Напишите число цифрами: ___',
        answers: ['47'],
        explanationRu: 'sieben-und-vierzig: сначала единицы (7), потом десятки (40) → 47.',
      },
      {
        type: 'choice',
        audio: 'Ich bin dreiundsechzig Jahre alt.',
        prompt: 'Сколько лет человеку?',
        options: ['36', '63', '73'],
        answer: 1,
        explanationRu: 'drei-und-sechzig = 3 + 60 = 63. Первым звучит число единиц!',
      },
      {
        type: 'gap',
        audio: 'Die Hausnummer ist achtundzwanzig.',
        prompt: 'Какой номер дома? Напишите цифрами: ___',
        answers: ['28'],
        explanationRu: 'acht-und-zwanzig = 8 + 20 = 28.',
      },
      {
        type: 'order',
        words: ['Wie', 'alt', 'sind', 'Sie?'],
        translationRu: 'Сколько Вам лет?',
        explanationRu: 'Вопросительная часть «wie alt» стоит в начале, затем глагол sind и Sie.',
      },
    ],
  },
  vocab: [
    { de: 'dreißig', pos: 'other', ru: 'тридцать (30)', example: 'Ich bin dreißig Jahre alt.', exampleRu: 'Мне тридцать лет.', pronRu: 'ДРАЙ-сихь' },
    { de: 'vierzig', pos: 'other', ru: 'сорок (40)', example: 'Das Handy kostet vierzig Euro.', exampleRu: 'Мобильный стоит сорок евро.', pronRu: 'ФИР-цихь' },
    { de: 'fünfzig', pos: 'other', ru: 'пятьдесят (50)', example: 'Frau Weber ist fünfzig Jahre alt.', exampleRu: 'Госпоже Вебер пятьдесят лет.', pronRu: 'ФЮНФ-цихь' },
    { de: 'sechzig', pos: 'other', ru: 'шестьдесят (60)', example: 'Sechzig Minuten sind eine Stunde.', exampleRu: 'Шестьдесят минут — это час.', pronRu: 'ЗЕХЬ-цихь' },
    { de: 'siebzig', pos: 'other', ru: 'семьдесят (70)', example: 'Herr Klein ist siebzig Jahre alt.', exampleRu: 'Господину Кляйну семьдесят лет.', pronRu: 'ЗИ:П-цихь' },
    { de: 'achtzig', pos: 'other', ru: 'восемьдесят (80)', example: 'Die Hausnummer ist achtzig.', exampleRu: 'Номер дома — восемьдесят.', pronRu: 'АХ-цихь' },
    { de: 'neunzig', pos: 'other', ru: 'девяносто (90)', example: 'Zehn plus achtzig ist neunzig.', exampleRu: 'Десять плюс восемьдесят — девяносто.', pronRu: 'НОЙН-цихь' },
    { de: 'hundert', pos: 'other', ru: 'сто (100)', example: 'Ich habe hundert Euro.', exampleRu: 'У меня сто евро.', pronRu: 'ХУН-дэрт' },
    { de: 'haben', forms: 'du hast, er hat; hat gehabt', pos: 'verb', ru: 'иметь; «у меня есть»', example: 'Hast du ein Handy?', exampleRu: 'У тебя есть мобильный?', pronRu: 'ХА-бэн' },
    { de: 'arbeiten', forms: 'du arbeitest, er arbeitet; hat gearbeitet', pos: 'verb', ru: 'работать', example: 'Ich arbeite in Berlin.', exampleRu: 'Я работаю в Берлине.', pronRu: 'АР-бай-тэн' },
    { de: 'machen', forms: 'er macht, hat gemacht', pos: 'verb', ru: 'делать', example: 'Was machst du?', exampleRu: 'Что ты делаешь?', pronRu: 'МА-хэн' },
    { de: 'alt', pos: 'adj', ru: 'старый; (о возрасте) … лет', example: 'Wie alt bist du?', exampleRu: 'Сколько тебе лет?', pronRu: 'АЛЬТ' },
    { de: 'Jahr', article: 'das', plural: '-e', pos: 'noun', ru: 'год', example: 'Ich bin vierzig Jahre alt.', exampleRu: 'Мне сорок лет.', pronRu: 'дас ЯА' },
    { de: 'Telefonnummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер телефона', example: 'Wie ist Ihre Telefonnummer?', exampleRu: 'Какой у Вас номер телефона?', pronRu: 'ди тэ-лэ-ФОН-ну-ма' },
    { de: 'Handy', article: 'das', plural: '-s', pos: 'noun', ru: 'мобильный телефон', example: 'Das Handy ist neu.', exampleRu: 'Мобильный — новый.', pronRu: 'дас ХЭН-ди' },
    { de: 'Adresse', article: 'die', plural: '-n', pos: 'noun', ru: 'адрес', example: 'Wie ist Ihre Adresse?', exampleRu: 'Какой у Вас адрес?', pronRu: 'ди а-ДРЕ-сэ' },
    { de: 'Straße', article: 'die', plural: '-n', pos: 'noun', ru: 'улица', example: 'Die Straße heißt Goethestraße.', exampleRu: 'Улица называется Гётештрассе.', pronRu: 'ди ШТРА-сэ' },
    { de: 'Hausnummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер дома', example: 'Die Hausnummer ist zwölf.', exampleRu: 'Номер дома — двенадцать.', pronRu: 'ди ХАУС-ну-ма' },
    { de: 'Postleitzahl', article: 'die', plural: '-en', pos: 'noun', ru: 'почтовый индекс', example: 'Die Postleitzahl ist 10115.', exampleRu: 'Почтовый индекс — 10115.', pronRu: 'ди ПОСТ-лайт-цаль' },
    { de: 'E-Mail', article: 'die', plural: '-s', pos: 'noun', ru: 'электронное письмо, e-mail', example: 'Ich schreibe eine E-Mail.', exampleRu: 'Я пишу электронное письмо.', pronRu: 'ди И:-мэйль' },
  ],
  listening: {
    title: 'Anmeldung zum Deutschkurs',
    kind: 'dialog',
    text: `A: Guten Tag! Wie heißen Sie, bitte?
B: Guten Tag. Ich heiße Nikolai Sorokin.
A: Danke. Wie alt sind Sie, Herr Sorokin?
B: Ich bin achtundfünfzig Jahre alt.
A: Und wo wohnen Sie?
B: In Bremen, Gartenstraße vierunddreißig.
A: Und die Postleitzahl?
B: Zwei, acht, eins, neun, fünf.
A: Haben Sie auch ein Handy?
B: Ja. Die Nummer ist null, eins, sechs, null – drei, neun, sieben, zwei, vier.
A: Vielen Dank, Herr Sorokin!`,
    questions: [
      { question: 'Wie alt ist Herr Sorokin?', options: ['48', '58', '85'], answer: 1 },
      { question: 'Wo wohnt er?', options: ['in Berlin', 'in Bonn', 'in Bremen'], answer: 2 },
      { question: 'Wie ist die Hausnummer?', options: ['34', '43', '24'], answer: 0 },
      { question: 'Wie ist die Postleitzahl?', options: ['28159', '28195', '82195'], answer: 1 },
      { question: 'Wie beginnt die Handynummer?', options: ['0106', '0161', '0160'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'Ваша подруга по курсу Лиза просит ваши контакты. Напишите ей короткое SMS-сообщение: ваш адрес, номер мобильного и e-mail.',
    taskDe: 'Ihre Kursfreundin Lisa fragt nach Ihrer Adresse und Telefonnummer. Schreiben Sie eine SMS.',
    points: ['Adresse: Straße, Hausnummer, Postleitzahl, Stadt', 'Handynummer', 'E-Mail-Adresse'],
    minWords: 20,
    usefulPhrases: [
      'Hallo Lisa,',
      'Meine Adresse ist: …',
      'Die Postleitzahl ist …',
      'Meine Handynummer ist …',
      'Meine E-Mail-Adresse ist …',
      'Viele Grüße',
      'Bis bald!',
    ],
  },
  speaking: {
    scenarioRu: 'Вы записываетесь на курс немецкого в народном университете (Volkshochschule). Сотрудник заполняет анкету и спрашивает ваши данные.',
    aiRole:
      'Sie sind Herr Wolf und arbeiten an der Anmeldung der Volkshochschule. Ein neuer Teilnehmer meldet sich für einen Deutschkurs A1 an. Fragen Sie nacheinander nach Name, Alter, Adresse (Straße, Hausnummer, Postleitzahl, Stadt), Telefonnummer und E-Mail-Adresse. Sprechen Sie sehr einfach und langsam, in kurzen Sätzen, nur im Präsens. Stellen Sie immer nur eine Frage. Wiederholen Sie Zahlen zur Kontrolle („Also: vierunddreißig?“). Wenn der Teilnehmer nicht weiterweiß, helfen Sie mit einem Beispiel, z. B. „Sagen Sie: Ich bin … Jahre alt.“',
    opener: 'Guten Tag! Wie heißen Sie, bitte?',
    tasksRu: [
      'Назовите своё имя и возраст: Ich bin … Jahre alt.',
      'Скажите адрес: улицу, номер дома, индекс и город.',
      'Продиктуйте номер телефона по одной цифре.',
      'Если не поняли — попросите повторить: Wie bitte? Noch einmal, bitte.',
    ],
    readAloud: [
      'Wie alt sind Sie?',
      'Ich bin dreiundsechzig Jahre alt.',
      'Die Hausnummer ist achtzehn.',
      'Wir wohnen in Hamburg.',
      'Hast du eine E-Mail-Adresse?',
    ],
  },
};
