import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-10',
  level: 'A2',
  order: 10,
  title: 'Arbeit und Beruf',
  titleRu: 'Работа и профессия',
  goalsRu: [
    'Понимать простые объявления о работе и рассказывать о своей работе и рабочем времени',
    'Говорить об условиях: «Если у меня есть время, я…» (придаточные предложения с wenn)',
    'Рассказывать, что вы делаете регулярно: «Когда я прихожу домой, я…»',
    'Не путать wenn (если / когда) и вопросительное слово wann (когда?)',
    'Отвечать на простые вопросы на собеседовании',
  ],
  grammar: {
    topic: 'Nebensätze mit wenn',
    topicRu: 'Придаточные предложения с wenn (если / когда)',
    explanationRu: `**wenn** — это союз, то есть маленькое слово, которое соединяет два предложения. Оно переводится как **«если»** или **«когда»**.

- **Условие (если):** Wenn ich Zeit habe, helfe ich dir. — Если у меня будет время, я тебе помогу.
- **Время (когда, каждый раз когда):** Wenn ich nach Hause komme, trinke ich Tee. — Когда я прихожу домой, я пью чай.

**Порядок слов.** Вы уже знаете придаточные предложения с **weil** и **dass**. С wenn правило то же самое: спрягаемый глагол уходит **в самый конец**.

- Ich komme mit, wenn ich frei **habe**.
- Ich rufe dich an, wenn der Chef **zurückkommt**. (отделяемая приставка снова «приклеивается» к глаголу)
- Ich bleibe länger, wenn ich Überstunden machen **muss**. (модальный глагол — в самом конце)

**Если предложение начинается с wenn**, то вся часть с wenn стоит на первом месте. Поэтому вторая часть начинается **с глагола**:

- **Wenn** ich Zeit habe, **komme** ich. (не: ~~ich komme~~)

Запомните картинку: «…habe, komme…» — два глагола рядом, а между ними запятая. Часто ещё добавляют **dann** (тогда): Wenn es regnet, dann fahre ich mit dem Bus.

**wenn или wann?**
- **wann** — вопрос «когда?»: Wann beginnt die Arbeit?
- **wenn** — союз внутри предложения: Wenn die Arbeit beginnt, mache ich das Handy aus.

**Типичные ошибки русскоговорящих:**
- Глагол не в конце: ~~Wenn ich habe Zeit~~ → **Wenn ich Zeit habe**.
- Подлежащее перед глаголом во второй части: ~~Wenn ich Zeit habe, ich komme~~ → **…, komme ich**.
- wann вместо wenn: ~~Wann ich müde bin, …~~ → **Wenn ich müde bin, …**
- Нет запятой. Часть с wenn всегда отделяется запятой.

В этом юните мы говорим о настоящем и будущем. Для одного события в прошлом немцы используют другой союз (als) — его вы выучите позже.`,
    table: [
      ['Часть 1', 'Часть 2', 'Перевод'],
      ['Ich komme,', 'wenn ich Zeit habe.', 'Я приду, если у меня будет время.'],
      ['Wenn ich Zeit habe,', 'komme ich.', 'Если у меня будет время, я приду.'],
      ['Ich rufe dich an,', 'wenn der Zug ankommt.', 'Я позвоню тебе, когда приедет поезд.'],
      ['Wenn ich länger arbeiten muss,', 'sage ich es dir.', 'Если мне придётся работать дольше, я тебе скажу.'],
      ['Wann beginnt die Arbeit?', '—', 'Когда начинается работа? (вопрос → wann)'],
    ],
    examples: [
      { de: 'Wenn ich Frühschicht habe, stehe ich um fünf Uhr auf.', ru: 'Когда у меня утренняя смена, я встаю в пять часов.' },
      { de: 'Wenn du Fragen hast, ruf mich an.', ru: 'Если у тебя есть вопросы, позвони мне.' },
      { de: 'Ich mache Überstunden, wenn viel Arbeit da ist.', ru: 'Я работаю сверхурочно, если много работы.' },
      { de: 'Wenn die Besprechung zu Ende ist, gehen wir in die Kantine.', ru: 'Когда совещание закончится, мы пойдём в столовую.' },
      { de: 'Was machst du, wenn du krank bist?', ru: 'Что ты делаешь, когда ты болеешь?' },
      { de: 'Wenn Sie Interesse haben, schicken Sie uns Ihre Bewerbung.', ru: 'Если вы заинтересованы, пришлите нам ваше заявление.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: ['Ich komme, wenn ich Zeit habe.', 'Ich komme, wenn ich habe Zeit.', 'Ich komme, wenn habe ich Zeit.'],
        answer: 0,
        explanationRu: 'После wenn спрягаемый глагол (habe) стоит в самом конце предложения.',
      },
      {
        type: 'choice',
        prompt: 'Wenn ich müde bin, ___ früh ins Bett.',
        options: ['gehe ich', 'ich gehe', 'gehen ich'],
        answer: 0,
        explanationRu: 'Предложение начинается с части wenn, поэтому вторая часть начинается с глагола: «…, gehe ich».',
      },
      {
        type: 'choice',
        prompt: '___ beginnt dein Deutschkurs? – Um 18 Uhr.',
        options: ['Wann', 'Wenn', 'Wo'],
        answer: 0,
        explanationRu: 'Это вопрос «когда?» — для вопроса нужно wann. wenn — союз внутри предложения, а не вопросительное слово.',
      },
      {
        type: 'choice',
        prompt: '___ das Wetter schön ist, fahre ich mit dem Fahrrad zur Arbeit.',
        options: ['Wenn', 'Wann', 'Dann'],
        answer: 0,
        explanationRu: 'Здесь условие («если погода хорошая») и глагол ist в конце — это придаточное с wenn.',
      },
      {
        type: 'gap',
        prompt: 'Ich rufe dich an, wenn der Zug ___.',
        answers: ['ankommt'],
        hintRu: 'ankommen',
        explanationRu: 'В части с wenn отделяемый глагол стоит в конце целиком: ankommen → wenn der Zug ankommt.',
      },
      {
        type: 'gap',
        prompt: 'Wenn ich Überstunden machen ___, komme ich spät nach Hause.',
        answers: ['muss'],
        hintRu: 'müssen',
        explanationRu: 'Модальный глагол стоит в самом конце части с wenn, после инфинитива: machen muss.',
      },
      {
        type: 'gap',
        prompt: 'Wenn es regnet, ___ ich mit dem Bus.',
        answers: ['fahre'],
        hintRu: 'fahren',
        explanationRu: 'Вторая часть начинается с глагола: «Wenn es regnet, fahre ich …».',
      },
      {
        type: 'order',
        words: ['Wenn', 'ich', 'Frühschicht', 'habe,', 'stehe', 'ich', 'um', 'fünf', 'Uhr', 'auf.'],
        translationRu: 'Когда у меня утренняя смена, я встаю в пять часов.',
        explanationRu: 'Сначала часть с wenn (глагол habe в конце), потом запятая и сразу глагол stehe. Приставка auf — в самом конце.',
      },
      {
        type: 'order',
        words: ['Ich', 'arbeite', 'gern', 'länger,', 'wenn', 'die', 'Arbeit', 'interessant', 'ist.'],
        translationRu: 'Я охотно работаю дольше, если работа интересная.',
        explanationRu: 'Главное предложение — обычный порядок слов. В части с wenn глагол ist стоит в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините два предложения с помощью wenn. Начните с Wenn.',
        prompt: 'Ich habe frei. Ich besuche meine Eltern.',
        answers: ['Wenn ich frei habe, besuche ich meine Eltern.', 'Wenn ich frei habe, dann besuche ich meine Eltern.'],
        explanationRu: 'habe уходит в конец части с wenn, а вторая часть начинается с глагола: «…, besuche ich …».',
      },
      {
        type: 'choice',
        audio: 'Wenn ich morgen Zeit habe, komme ich zur Besprechung.',
        prompt: 'Послушайте. Когда человек придёт на совещание?',
        options: ['Если завтра у него будет время.', 'Потому что завтра у него есть время.', 'Когда закончится работа.'],
        answer: 0,
        explanationRu: '«Wenn ich morgen Zeit habe» — «если завтра у меня будет время». Это условие, а не причина (причина была бы с weil).',
      },
      {
        type: 'gap',
        audio: 'Wenn der Chef kommt, beginnt die Besprechung.',
        prompt: 'Послушайте и допишите: Die Besprechung beginnt, wenn der ___ kommt.',
        answers: ['Chef'],
        explanationRu: 'Вы слышите: «Wenn der Chef kommt, beginnt die Besprechung» — совещание начнётся, когда придёт начальник.',
      },
    ],
  },
  vocab: [
    { de: 'Arbeitsvertrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'трудовой договор', example: 'Ich habe den Arbeitsvertrag schon unterschrieben.', exampleRu: 'Я уже подписал трудовой договор.', pronRu: 'дер АР-байтс-фэр-тра:к' },
    { de: 'Stellenanzeige', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление о вакансии', example: 'Ich lese jeden Tag die Stellenanzeigen.', exampleRu: 'Я каждый день читаю объявления о вакансиях.', pronRu: 'ди ШТЭ-лен-ан-цай-ге' },
    { de: 'Bewerbung', article: 'die', plural: '-en', pos: 'noun', ru: 'заявление о приёме на работу; отклик на вакансию', example: 'Ich habe meine Bewerbung per E-Mail geschickt.', exampleRu: 'Я отправил своё заявление по электронной почте.', pronRu: 'ди бэ-ВЭР-бунг' },
    { de: 'sich bewerben', forms: 'bewirbt sich, hat sich beworben; bei + Dat', pos: 'verb', ru: 'подавать заявление (на работу)', example: 'Er bewirbt sich bei einer Bäckerei.', exampleRu: 'Он подаёт заявление в пекарню.', pronRu: 'зихь бэ-ВЭР-бен' },
    { de: 'Vorstellungsgespräch', article: 'das', plural: '-e', pos: 'noun', ru: 'собеседование (при приёме на работу)', example: 'Morgen habe ich ein Vorstellungsgespräch.', exampleRu: 'Завтра у меня собеседование.', pronRu: 'дас ФОР-штэ-лунгс-гэ-шпрэхь' },
    { de: 'Arbeitgeber', article: 'der', plural: '-', pos: 'noun', ru: 'работодатель', example: 'Mein Arbeitgeber bezahlt das Ticket für den Bus.', exampleRu: 'Мой работодатель оплачивает проездной на автобус.', pronRu: 'дер АР-байт-гэ-ба' },
    { de: 'Gehalt', article: 'das', plural: '-¨er', pos: 'noun', ru: 'зарплата, оклад', example: 'Das Gehalt kommt immer am Monatsende.', exampleRu: 'Зарплата всегда приходит в конце месяца.', pronRu: 'дас гэ-ХАЛЬТ' },
    { de: 'Arbeitszeit', article: 'die', plural: '-en', pos: 'noun', ru: 'рабочее время', example: 'Meine Arbeitszeit ist von acht bis vier.', exampleRu: 'Моё рабочее время — с восьми до четырёх.', pronRu: 'ди АР-байтс-цайт' },
    { de: 'Teilzeit', article: 'die', plural: '–', pos: 'noun', ru: 'неполный рабочий день (in Teilzeit arbeiten)', example: 'Meine Frau arbeitet in Teilzeit.', exampleRu: 'Моя жена работает неполный день.', pronRu: 'ди ТАЙЛЬ-цайт' },
    { de: 'Schicht', article: 'die', plural: '-en', pos: 'noun', ru: 'смена (Frühschicht — утренняя, Spätschicht — вечерняя)', example: 'Diese Woche habe ich Frühschicht.', exampleRu: 'На этой неделе у меня утренняя смена.', pronRu: 'ди ШИХЬТ' },
    { de: 'Überstunde', article: 'die', plural: '-n', pos: 'noun', ru: 'сверхурочный час (Überstunden machen)', example: 'Gestern habe ich zwei Überstunden gemacht.', exampleRu: 'Вчера я отработал два часа сверхурочно.', pronRu: 'ди Ю-ба-штун-де' },
    { de: 'Besprechung', article: 'die', plural: '-en', pos: 'noun', ru: 'совещание, обсуждение', example: 'Die Besprechung beginnt um neun Uhr.', exampleRu: 'Совещание начинается в девять часов.', pronRu: 'ди бэ-ШПРЭ-хьунг' },
    { de: 'Betrieb', article: 'der', plural: '-e', pos: 'noun', ru: 'предприятие, фирма', example: 'In unserem Betrieb arbeiten 50 Leute.', exampleRu: 'На нашем предприятии работают 50 человек.', pronRu: 'дер бэ-ТРИ:П' },
    { de: 'Abteilung', article: 'die', plural: '-en', pos: 'noun', ru: 'отдел', example: 'Ich arbeite in der Abteilung für Einkauf.', exampleRu: 'Я работаю в отделе закупок.', pronRu: 'ди ап-ТАЙ-лунг' },
    { de: 'Probezeit', article: 'die', plural: '-en', pos: 'noun', ru: 'испытательный срок', example: 'Die Probezeit dauert sechs Monate.', exampleRu: 'Испытательный срок длится шесть месяцев.', pronRu: 'ди ПРО:-бэ-цайт' },
    { de: 'einstellen', forms: 'stellt ein, hat eingestellt', pos: 'verb', ru: 'нанимать, брать на работу', example: 'Die Firma stellt zehn neue Mitarbeiter ein.', exampleRu: 'Фирма берёт на работу десять новых сотрудников.', pronRu: 'АЙН-штэ-лен' },
    { de: 'kündigen', forms: 'kündigt, hat gekündigt', pos: 'verb', ru: 'уволиться; уволить; расторгнуть договор', example: 'Sie hat ihre alte Stelle gekündigt.', exampleRu: 'Она уволилась со старого места работы.', pronRu: 'КЮН-ди-ген' },
    { de: 'erledigen', forms: 'erledigt, hat erledigt', pos: 'verb', ru: 'сделать, выполнить (дело, задачу)', example: 'Ich erledige das sofort.', exampleRu: 'Я сделаю это сразу.', pronRu: 'эр-ЛЕ:-ди-ген' },
    { de: 'pünktlich', pos: 'adj', ru: 'пунктуальный; вовремя', example: 'Bitte seien Sie pünktlich!', exampleRu: 'Пожалуйста, будьте пунктуальны!', pronRu: 'ПЮНКТ-лихь' },
    { de: 'zuverlässig', pos: 'adj', ru: 'надёжный', example: 'Unser neuer Kollege ist sehr zuverlässig.', exampleRu: 'Наш новый коллега очень надёжный.', pronRu: 'ЦУ:-фэр-лэ-сихь' },
  ],
  listening: {
    title: 'Der erste Arbeitstag',
    kind: 'dialog',
    text: `A: Guten Morgen, Herr Petrow! Willkommen in unserer Firma. Ich bin Frau Wagner, die Leiterin der Abteilung.
B: Guten Morgen, Frau Wagner. Ich freue mich, dass ich hier bin.
A: Ich erkläre Ihnen kurz die wichtigsten Regeln. Die Arbeit beginnt um halb acht. Wenn Sie Frühschicht haben, beginnen Sie schon um sechs.
B: Und wann ist Feierabend?
A: Normalerweise um vier. Wenn viel Arbeit da ist, machen wir manchmal Überstunden. Die bezahlen wir natürlich extra.
B: Gut. Und was mache ich, wenn ich krank bin?
A: Wenn Sie krank sind, rufen Sie bitte bis acht Uhr im Büro an. Ab dem dritten Tag brauchen wir eine Krankmeldung vom Arzt.
B: Verstanden. Wo kann ich in der Pause essen?
A: Wir haben eine Kantine im Erdgeschoss. Das Essen ist billig und ziemlich gut.
B: Super. Und wenn ich Fragen habe?
A: Dann fragen Sie einfach Ihren Kollegen, Herrn Schulz. Oder Sie kommen zu mir. Meine Tür ist immer offen.`,
    questions: [
      { question: 'Wer ist Frau Wagner?', options: ['Eine neue Kollegin', 'Die Leiterin der Abteilung', 'Eine Ärztin'], answer: 1 },
      { question: 'Wann beginnt die Frühschicht?', options: ['Um sechs Uhr', 'Um halb acht', 'Um acht Uhr'], answer: 0 },
      { question: 'Was passiert, wenn viel Arbeit da ist?', options: ['Man macht Überstunden.', 'Man beginnt um sechs.', 'Man isst in der Kantine.'], answer: 0 },
      {
        question: 'Was muss Herr Petrow machen, wenn er krank ist?',
        options: ['Er schreibt eine E-Mail.', 'Er ruft bis acht Uhr im Büro an.', 'Er geht sofort zu Frau Wagner.'],
        answer: 1,
      },
      { question: 'Wo ist die Kantine?', options: ['Im Erdgeschoss', 'Im ersten Stock', 'Neben dem Büro'], answer: 0 },
    ],
  },
  writing: {
    taskRu:
      'Ваш друг Тобиас спрашивает, как у вас дела на новой работе. Напишите ему письмо по электронной почте (минимум 50 слов). Ответьте на все три пункта и используйте хотя бы два раза wenn.',
    taskDe: 'Ihr Freund Tobias fragt, wie Ihre neue Arbeit ist. Schreiben Sie ihm eine E-Mail.',
    points: ['Was ist Ihre neue Arbeit und wo arbeiten Sie?', 'Wie sind Ihre Arbeitszeiten?', 'Was machen Sie, wenn Sie Feierabend haben?'],
    minWords: 50,
    usefulPhrases: [
      'Lieber Tobias, vielen Dank für deine E-Mail.',
      'Seit zwei Wochen arbeite ich als … bei …',
      'Meine Arbeit beginnt um … und endet um …',
      'Wenn ich Frühschicht habe, …',
      'Wenn ich Feierabend habe, …',
      'Die Kollegen sind sehr nett.',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'У вас собеседование в супермаркете: вы хотите работать продавцом или на складе. Руководитель магазина задаёт вам простые вопросы. Отвечайте короткими предложениями.',
    aiRole:
      'Sie sind Frau Becker, Leiterin eines Supermarkts in Hannover. Sie führen ein kurzes, freundliches Vorstellungsgespräch mit einer Person, die Deutsch auf Niveau A2 lernt. Sprechen Sie langsam und in kurzen, einfachen Sätzen (Präsens und Perfekt). Fragen Sie nach: Berufserfahrung, wann die Person arbeiten kann, Frühschicht oder Spätschicht, Arbeit am Samstag, und was sie macht, wenn ein Kunde eine Frage hat. Stellen Sie immer nur eine Frage. Wenn die Person etwas nicht versteht, wiederholen Sie es mit einfacheren Wörtern.',
    opener: 'Guten Tag! Schön, dass Sie da sind. Was haben Sie bis jetzt beruflich gemacht?',
    tasksRu: [
      'Коротко расскажите о своём опыте работы (Ich habe … Jahre als … gearbeitet).',
      'Скажите, когда вы можете работать, используя wenn (Wenn meine Kinder in der Schule sind, kann ich …).',
      'Спросите о рабочем времени или о зарплате.',
      'В конце спросите, когда вы получите ответ (Wann bekomme ich eine Antwort?).',
    ],
    readAloud: [
      'Wenn ich Zeit habe, helfe ich gern.',
      'Ich habe fünf Jahre in einem Lager gearbeitet.',
      'Wenn ich Frühschicht habe, stehe ich früh auf.',
      'Ich bin pünktlich und zuverlässig.',
    ],
  },
};
