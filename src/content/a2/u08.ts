import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-08',
  level: 'A2',
  order: 8,
  title: 'Stadt und Land',
  titleRu: 'Город и деревня',
  goalsRu: [
    'Сравнивать город и деревню, людей и вещи: größer als, so groß wie',
    'Говорить, что нравится больше всего: am besten, am liebsten, am schönsten',
    'Рассказывать о своём городе или деревне: плюсы и минусы',
    'Понимать короткие тексты о жизни в городе и за городом',
  ],
  grammar: {
    topic: 'Komparativ und Superlativ; Vergleiche mit als und wie',
    topicRu: 'Сравнительная и превосходная степень; als и wie',
    explanationRu: `Когда мы сравниваем, прилагательное меняет форму — как в русском: большой → больше → самый большой.

**1. Komparativ** (сравнительная степень) = прилагательное + **-er**: klein → klein**er**, billig → billig**er**, schnell → schnell**er**. Русское «чем» — это **als**:
- Berlin ist größer **als** Hamburg.
- Auf dem Land ist die Miete billiger **als** in der Stadt.

**2. Равенство: so … wie** («такой же … как»):
- Das Dorf ist **so** schön **wie** auf einer Postkarte.
- Mein Haus ist **nicht so** groß **wie** dein Haus. (= моё меньше)

**3. Superlativ** (превосходная степень) — две формы:
- после глагола: **am** + прилагательное + **-sten**: Im Mai ist es hier **am schönsten**.
- перед существительным: **der/die/das** + **-ste** (и окончания, как в юните 6): Das ist **der höchste** Berg. Wir wohnen in **der schönsten** Straße.

Если слово кончается на **-d, -t, -s, -ß, -z**, добавляем **-e-**: alt → am ält**e**sten, heiß → am heiß**e**sten. Исключение: groß → am größten.

**4. Умлаут.** Многие короткие слова получают умлаут: alt → **ä**lter, groß → gr**ö**ßer, jung → j**ü**nger, warm → w**ä**rmer, kalt → k**ä**lter, lang → l**ä**nger, kurz → k**ü**rzer.

**5. Неправильные формы** — выучите наизусть (см. таблицу): gut → besser, viel → mehr, gern → lieber, hoch → höher. Слово teuer теряет -e-: teu**rer**.

**Перед существительным** Komparativ тоже получает окончание: eine größer**e** Wohnung, ein ruhiger**es** Dorf.

**Типичные ошибки:**
- «mehr schön» (как «более красивый») → **schöner**
- «größer wie» → после Komparativ всегда **als**: größer **als**
- «so groß als» → при равенстве **wie**: so groß **wie**
- «am größte» → **am größten** (после am всегда -sten)`,
    table: [
      ['Grundform', 'Komparativ', 'Superlativ'],
      ['klein', 'kleiner', 'am kleinsten'],
      ['schön', 'schöner', 'am schönsten'],
      ['alt', 'älter', 'am ältesten'],
      ['groß', 'größer', 'am größten'],
      ['teuer', 'teurer', 'am teuersten'],
      ['gut', 'besser', 'am besten'],
      ['viel', 'mehr', 'am meisten'],
      ['gern', 'lieber', 'am liebsten'],
      ['hoch', 'höher', 'am höchsten'],
    ],
    examples: [
      { de: 'In der Stadt ist es lauter als auf dem Land.', ru: 'В городе шумнее, чем в деревне.' },
      { de: 'Unser Dorf ist nicht so groß wie eure Stadt.', ru: 'Наша деревня не такая большая, как ваш город.' },
      { de: 'Die Luft ist hier viel besser.', ru: 'Воздух здесь намного лучше.' },
      { de: 'Im Frühling ist es auf dem Land am schönsten.', ru: 'Весной за городом красивее всего.' },
      { de: 'München ist die teuerste Stadt in Deutschland.', ru: 'Мюнхен — самый дорогой город в Германии.' },
      { de: 'Ich wohne lieber in einer kleinen Stadt.', ru: 'Я предпочитаю жить в маленьком городе.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Hamburg ist größer ___ Köln.',
        options: ['als', 'wie', 'so', 'dann'],
        answer: 0,
        explanationRu: 'После Komparativ (größer) «чем» по-немецки — als.',
      },
      {
        type: 'choice',
        prompt: 'Das Dorf ist heute so ruhig ___ früher.',
        options: ['wie', 'als', 'am', 'so'],
        answer: 0,
        explanationRu: 'Равенство: so + прилагательное + wie («такой же тихий, как»).',
      },
      {
        type: 'choice',
        prompt: 'Mein Bruder ist drei Jahre ___ als ich.',
        options: ['älter', 'alter', 'mehr alt', 'am ältesten'],
        answer: 0,
        explanationRu: 'alt — короткое слово, в Komparativ получает умлаут: älter. «mehr alt» по-немецки не говорят.',
      },
      {
        type: 'choice',
        prompt: 'Ich trinke gern Tee, aber noch ___ trinke ich Kaffee.',
        options: ['lieber', 'gerner', 'mehr gern', 'am liebsten'],
        answer: 0,
        explanationRu: 'gern — неправильное слово: gern → lieber → am liebsten. Сравниваем два напитка, поэтому lieber.',
      },
      {
        type: 'choice',
        audio: 'Auf dem Land ist die Luft viel sauberer.',
        prompt: 'Что лучше в деревне, по словам человека?',
        options: ['die Luft', 'die Miete', 'die Busse', 'die Geschäfte'],
        answer: 0,
        explanationRu: 'Вы слышите: «die Luft ist viel sauberer» — воздух намного чище.',
      },
      {
        type: 'gap',
        prompt: 'Im Juli ist es hier am ___.',
        answers: ['wärmsten'],
        hintRu: 'warm',
        explanationRu: 'Superlativ после глагола: am + -sten. warm получает умлаут: am wärmsten.',
      },
      {
        type: 'gap',
        prompt: 'Die Zugspitze ist der ___ Berg in Deutschland.',
        answers: ['höchste'],
        hintRu: 'hoch',
        explanationRu: 'hoch — неправильное слово: höher, am höchsten. Перед существительным: der höchste Berg.',
      },
      {
        type: 'gap',
        prompt: 'Eine Wohnung in München ist viel ___ als in Leipzig.',
        answers: ['teurer'],
        hintRu: 'teuer',
        explanationRu: 'teuer в Komparativ теряет -e-: teurer (не «teuerer»).',
      },
      {
        type: 'gap',
        prompt: 'Der Bus ist nicht so schnell ___ die U-Bahn.',
        answers: ['wie'],
        explanationRu: 'nicht so … wie — «не такой … как». После so всегда wie, а не als.',
      },
      {
        type: 'gap',
        audio: 'Die Stadt ist lauter als das Dorf.',
        prompt: 'Напишите недостающее слово: Die Stadt ist ___ als das Dorf.',
        answers: ['lauter'],
        explanationRu: 'Вы слышите «lauter» — Komparativ от laut (шумный): город шумнее деревни.',
      },
      {
        type: 'order',
        words: ['Mein', 'Dorf', 'ist', 'kleiner', 'als', 'deine Stadt.'],
        translationRu: 'Моя деревня меньше, чем твой город.',
        explanationRu: 'Порядок: подлежащее + глагол + Komparativ + als + то, с чем сравниваем.',
      },
      {
        type: 'transform',
        instructionRu: 'Сравните в одном предложении с als. Начните с «Das Dorf ist …».',
        prompt: 'Die Stadt ist laut. Das Dorf ist ruhig.',
        answers: ['Das Dorf ist ruhiger als die Stadt.', 'Das Dorf ist ruhiger als die Stadt'],
        explanationRu: 'ruhig + -er = ruhiger, затем als и то, с чем сравниваем: ruhiger als die Stadt.',
      },
    ],
  },
  vocab: [
    { de: 'auf dem Land', pos: 'phrase', ru: 'в деревне, за городом', example: 'Meine Eltern wohnen auf dem Land.', exampleRu: 'Мои родители живут в деревне.', pronRu: 'ауф дем ЛАНТ' },
    { de: 'Dorf', article: 'das', plural: '-¨er', pos: 'noun', ru: 'деревня, село', example: 'Das Dorf hat nur 500 Einwohner.', exampleRu: 'В деревне всего 500 жителей.', pronRu: 'дас ДОРФ' },
    { de: 'Großstadt', article: 'die', plural: '-¨e', pos: 'noun', ru: 'большой город', example: 'In der Großstadt ist immer viel los.', exampleRu: 'В большом городе всегда много чего происходит.', pronRu: 'ди ГРО:С-штат' },
    { de: 'Kleinstadt', article: 'die', plural: '-¨e', pos: 'noun', ru: 'маленький город', example: 'Ich bin in einer Kleinstadt aufgewachsen.', exampleRu: 'Я вырос в маленьком городе.', pronRu: 'ди КЛАЙН-штат' },
    { de: 'Einwohner', article: 'der', plural: '-', pos: 'noun', ru: 'житель', example: 'Berlin hat mehr Einwohner als Hamburg.', exampleRu: 'В Берлине больше жителей, чем в Гамбурге.', pronRu: 'дер АЙН-во:-на' },
    { de: 'Umgebung', article: 'die', plural: '-en', pos: 'noun', ru: 'окрестности', example: 'Die Umgebung von Dresden ist sehr schön.', exampleRu: 'Окрестности Дрездена очень красивые.', pronRu: 'ди ум-ГЕ:-бунг' },
    { de: 'Gegend', article: 'die', plural: '-en', pos: 'noun', ru: 'местность, район', example: 'Wir wohnen in einer ruhigen Gegend.', exampleRu: 'Мы живём в тихом районе.', pronRu: 'ди ГЕ:-гэнт' },
    { de: 'Natur', article: 'die', plural: '–', pos: 'noun', ru: 'природа', example: 'Auf dem Land ist man näher an der Natur.', exampleRu: 'За городом ты ближе к природе.', pronRu: 'ди на-ТУ:Р' },
    { de: 'Luft', article: 'die', plural: '–', pos: 'noun', ru: 'воздух', example: 'Hier ist die Luft frischer als in der Stadt.', exampleRu: 'Здесь воздух свежее, чем в городе.', pronRu: 'ди ЛУФТ' },
    { de: 'Lärm', article: 'der', plural: '–', pos: 'noun', ru: 'шум', example: 'Der Lärm von der Straße stört mich.', exampleRu: 'Шум с улицы мне мешает.', pronRu: 'дер ЛЭРМ' },
    { de: 'ruhig', pos: 'adj', ru: 'тихий, спокойный', example: 'Unser Dorf ist ruhiger als die Stadt.', exampleRu: 'Наша деревня тише, чем город.', pronRu: 'РУ:-ихь' },
    { de: 'Landschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'пейзаж, ландшафт', example: 'Die Landschaft in Bayern ist wunderschön.', exampleRu: 'Пейзажи в Баварии чудесные.', pronRu: 'ди ЛАНТ-шафт' },
    { de: 'Feld', article: 'das', plural: '-er', pos: 'noun', ru: 'поле', example: 'Hinter dem Haus sind nur Felder.', exampleRu: 'За домом одни поля.', pronRu: 'дас ФЕЛЬТ' },
    { de: 'Wald', article: 'der', plural: '-¨er', pos: 'noun', ru: 'лес', example: 'Am Sonntag gehen wir im Wald spazieren.', exampleRu: 'В воскресенье мы гуляем в лесу.', pronRu: 'дер ВАЛЬТ' },
    { de: 'Bauernhof', article: 'der', plural: '-¨e', pos: 'noun', ru: 'крестьянский двор, ферма', example: 'Mein Onkel hat einen Bauernhof mit Kühen.', exampleRu: 'У моего дяди ферма с коровами.', pronRu: 'дер БАУ-ан-хо:ф' },
    { de: 'Verbindung', article: 'die', plural: '-en', pos: 'noun', ru: 'сообщение, связь (транспортная)', example: 'Die Busverbindung in die Stadt ist schlecht.', exampleRu: 'Автобусное сообщение с городом плохое.', pronRu: 'ди фер-БИН-дунг' },
    { de: 'Angebot', article: 'das', plural: '-e', pos: 'noun', ru: 'предложение, выбор (услуг, мероприятий)', example: 'In der Stadt ist das Angebot an Kinos und Theatern größer.', exampleRu: 'В городе больше выбор кинотеатров и театров.', pronRu: 'дас АН-гэ-бо:т' },
    { de: 'sauber', pos: 'adj', ru: 'чистый', example: 'Der See ist sehr sauber.', exampleRu: 'Озеро очень чистое.', pronRu: 'ЗАУ-ба' },
    { de: 'Vorteil', article: 'der', plural: '-e', pos: 'noun', ru: 'преимущество, плюс', example: 'Die Ruhe ist ein großer Vorteil.', exampleRu: 'Тишина — большой плюс.', pronRu: 'дер ФОР-тайль' },
    { de: 'Nachteil', article: 'der', plural: '-e', pos: 'noun', ru: 'недостаток, минус', example: 'Der größte Nachteil ist der lange Weg zur Arbeit.', exampleRu: 'Самый большой минус — долгая дорога на работу.', pronRu: 'дер НАХ-тайль' },
  ],
  listening: {
    title: 'Das Leben auf dem Land',
    kind: 'dialog',
    text: `A: Hallo Markus! Wie ist das Leben auf dem Land?
B: Super! Unser Dorf ist klein, es hat nur 800 Einwohner. Aber es ist viel ruhiger als in Frankfurt.
A: Und wie wohnt ihr jetzt?
B: Wir haben ein Haus mit Garten. Es ist größer als unsere alte Wohnung, und die Miete ist billiger.
A: Toll! Aber ist es nicht langweilig?
B: Nein, gar nicht. Am Wochenende gehen wir im Wald spazieren. Und die Kinder spielen auf dem Bauernhof von unseren Nachbarn. Am liebsten sind sie bei den Pferden.
A: Und deine Arbeit? Du arbeitest doch noch in Frankfurt.
B: Ja, das ist der größte Nachteil. Mit dem Zug brauche ich eine Stunde. Früher waren es nur zwanzig Minuten mit der U-Bahn.
A: Gibt es im Dorf Restaurants oder ein Kino?
B: Nur eine kleine Kneipe. Das Angebot ist in der Stadt natürlich besser. Aber die Luft ist viel sauberer, und ich schlafe besser.
A: Vielleicht besuche ich euch bald.
B: Gern! Im Mai ist es hier am schönsten.`,
    questions: [
      { question: 'Wie viele Einwohner hat das Dorf?', options: ['80', '800', '8000'], answer: 1 },
      { question: 'Was ist auf dem Land billiger?', options: ['Die Miete.', 'Der Zug.', 'Das Essen.'], answer: 0 },
      { question: 'Wo sind die Kinder am liebsten?', options: ['Im Wald.', 'Im Garten.', 'Bei den Pferden.'], answer: 2 },
      { question: 'Was ist für Markus der größte Nachteil?', options: ['Der lange Weg zur Arbeit.', 'Die schlechte Luft.', 'Das kleine Haus.'], answer: 0 },
      { question: 'Wann ist es im Dorf am schönsten?', options: ['Im März.', 'Im Mai.', 'Im Winter.'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'В интернет-форуме обсуждают вопрос «Где жить лучше: в городе или в деревне?». Напишите своё сообщение: где вы живёте, какие плюсы и минусы у вашего места и где вы хотели бы жить больше всего и почему. Используйте сравнения: ruhiger als, nicht so groß wie, am liebsten.',
    taskDe: 'Im Forum „Stadt oder Land?“ schreiben Leute, wo sie lieber wohnen. Schreiben Sie einen Beitrag.',
    points: [
      'Wo wohnen Sie? Wie groß ist der Ort?',
      'Vorteile und Nachteile von Ihrem Wohnort',
      'Wo möchten Sie am liebsten wohnen? Warum?',
    ],
    minWords: 50,
    usefulPhrases: [
      'Ich wohne in … . Der Ort hat ungefähr … Einwohner.',
      'In der Stadt ist es lauter als auf dem Land.',
      'Auf dem Land ist die Miete billiger.',
      'Mein Dorf ist nicht so groß wie …',
      'Ein Vorteil / Ein Nachteil ist: …',
      'Der größte Vorteil ist …',
      'Ich wohne lieber …, weil …',
      'Am liebsten möchte ich in … wohnen.',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы разговариваете с соседом Йонасом. Он вырос в маленькой деревне, а теперь живёт в Кёльне. Обсудите, где жить лучше — в городе или в деревне. Сравнивайте!',
    aiRole:
      'Sie sind Jonas, 45 Jahre alt. Sie sind in einem kleinen Dorf in der Eifel aufgewachsen und wohnen jetzt in Köln. Sie sprechen mit Ihrem Nachbarn, er lernt Deutsch (Niveau A2). Sprechen Sie langsam und einfach, in kurzen Sätzen. Erzählen Sie von Vorteilen und Nachteilen von Stadt und Land und benutzen Sie oft Vergleiche (ruhiger als, nicht so teuer wie, am schönsten). Stellen Sie immer nur eine Frage und fragen Sie nach seinem Wohnort. Wenn er nicht weiterweiß, helfen Sie mit einem einfachen Beispiel.',
    opener: 'Hallo! Sag mal, wohnst du lieber in der Stadt oder auf dem Land?',
    tasksRu: [
      'Расскажите, где вы живёте и сколько там жителей.',
      'Сравните город и деревню минимум тремя предложениями с als (billiger als, ruhiger als…).',
      'Используйте хотя бы раз so … wie и одну превосходную степень (am schönsten, am liebsten).',
      'Спросите Йонаса, где ему больше нравится и почему.',
    ],
    readAloud: [
      'Auf dem Land ist die Luft sauberer.',
      'Die Stadt ist lauter als das Dorf.',
      'Unser Dorf ist nicht so groß wie Berlin.',
      'Im Mai ist es hier am schönsten.',
    ],
  },
};
