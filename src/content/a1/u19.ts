import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-19',
  level: 'A1',
  order: 19,
  title: 'Feste und Einladungen',
  titleRu: 'Праздники и приглашения',
  goalsRu: [
    'Поздравлять с днём рождения и другими праздниками',
    'Принимать приглашение или вежливо отказываться и объяснять почему',
    'Соединять два предложения словами und, aber, oder, denn',
    'Говорить «кому?»: mir, dir, ihm, ihr (Ich schenke dir …)',
  ],
  grammar: {
    topic: 'und, aber, oder, denn; Dativpronomen mir, dir, ihm, ihr',
    topicRu: 'Союзы und, aber, oder, denn; местоимения mir, dir, ihm, ihr',
    explanationRu: `**Часть 1. Союзы und, aber, oder, denn**

Союз — это маленькое слово, которое соединяет два предложения:

- **und** — и
- **aber** — но
- **oder** — или
- **denn** — потому что

Эти союзы стоят на **нулевой позиции** — они «не считаются». После них идёт обычное предложение: подлежащее, потом глагол на **2-м месте**.

- Ich habe Geburtstag **und** ich mache eine Party.
- Ich komme gern, **aber** ich komme spät.
- Trinkst du Kaffee **oder** trinkst du Tee?
- Ich kann nicht kommen, **denn** ich **bin** krank.

**Внимание!** После denn глагол НЕ уходит в конец: «denn ich **bin** krank», а не «denn ich krank bin». Не путайте **denn** (потому что) и **dann** (потом). Перед **aber** и **denn** всегда ставим запятую.

**Часть 2. Кому? — mir, dir, ihm, ihr**

Вы уже знаете фразы «Wie geht es **dir**?» и «**Mir** tut der Kopf weh». Слова mir, dir, ihm, ihr отвечают на вопрос **«кому?»**. Это дательный падеж (Dativ).

- Ich schenke **dir** eine Kerze. — Я дарю тебе свечу.
- Wir schenken **ihm** ein Buch. — Мы дарим ему книгу.

Порядок: сначала «кому?» (dir), потом «что?» (eine Kerze).

**Типичная ошибка русскоговорящих:** по-русски мы говорим «поздравляю **тебя**» (кого?), а немецкий глагол gratulieren спрашивает «кому?»: Ich gratuliere **dir**! (не «dich»!). Так же: Ich helfe **dir**.

Осторожно: **ihr** — это и «ей» (Ich gratuliere **ihr**.), и «вы» (**Ihr** kommt.). Что имеется в виду, понятно по смыслу.`,
    table: [
      ['Кто? (Nominativ)', 'Кому? (Dativ)', 'Пример'],
      ['ich', 'mir', 'Danke, mir geht es gut.'],
      ['du', 'dir', 'Ich gratuliere dir!'],
      ['er', 'ihm', 'Wir schenken ihm ein Buch.'],
      ['sie', 'ihr', 'Ich schenke ihr eine Kerze.'],
      ['Sie (вежливо)', 'Ihnen', 'Wie geht es Ihnen?'],
    ],
    examples: [
      { de: 'Ich habe am Samstag Geburtstag und ich mache eine Party.', ru: 'У меня в субботу день рождения, и я устраиваю вечеринку.' },
      { de: 'Ich komme gern, aber ich habe nur bis neun Uhr Zeit.', ru: 'Я с радостью приду, но у меня есть время только до девяти.' },
      { de: 'Ich kann leider nicht kommen, denn ich muss arbeiten.', ru: 'К сожалению, я не могу прийти, потому что мне нужно работать.' },
      { de: 'Möchtest du Kaffee oder Tee?', ru: 'Ты хочешь кофе или чай?' },
      { de: 'Herzlichen Glückwunsch! Ich schenke dir eine Kerze.', ru: 'Поздравляю! Я дарю тебе свечу.' },
      { de: 'Was schenken wir ihm? – Wir schenken ihm ein Buch.', ru: 'Что мы ему подарим? – Мы подарим ему книгу.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Möchtest du Saft ___ Wasser?',
        options: ['oder', 'denn', 'aber', 'dann'],
        answer: 0,
        explanationRu: 'Человеку предлагают выбрать одно из двух — для выбора нужен союз oder (или).',
      },
      {
        type: 'choice',
        prompt: 'Ich komme gern, ___ ich komme erst um acht Uhr.',
        options: ['oder', 'aber', 'denn', 'und'],
        answer: 1,
        explanationRu: 'Человек приходит, но есть ограничение (только в восемь) — это противопоставление, нужен aber (но).',
      },
      {
        type: 'choice',
        prompt: 'Anna hat heute Geburtstag. Ich gratuliere ___.',
        options: ['sie', 'ihr', 'ihm', 'ihn'],
        answer: 1,
        explanationRu: 'gratulieren требует «кому?» (Dativ). Anna — она, «ей» = ihr. «sie» — это «её» (Akkusativ), так по-немецки не говорят.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините два предложения союзом denn.',
        prompt: 'Ich kann nicht kommen. Ich muss arbeiten.',
        answers: ['Ich kann nicht kommen, denn ich muss arbeiten.', 'Ich kann nicht kommen denn ich muss arbeiten.'],
        explanationRu: 'denn стоит на нулевой позиции, после него обычный порядок: ich muss arbeiten (глагол на 2-м месте). Перед denn ставится запятая.',
      },
      {
        type: 'gap',
        prompt: 'Wie geht es dir? – Danke, ___ geht es gut.',
        answers: ['mir'],
        hintRu: 'мне',
        explanationRu: 'Ответ на «Wie geht es dir?» — «Mir geht es gut» (мне хорошо). mir — это «мне», Dativ от ich.',
      },
      {
        type: 'gap',
        prompt: 'Mein Vater hat Geburtstag. Ich schenke ___ eine Uhr.',
        answers: ['ihm'],
        hintRu: 'ему',
        explanationRu: 'Отец — он (er). «Кому?» → ihm (ему). Сначала «кому?» (ihm), потом «что?» (eine Uhr).',
      },
      {
        type: 'gap',
        prompt: 'Ich bleibe zu Hause, denn ich ___ krank.',
        answers: ['bin'],
        explanationRu: 'После denn глагол стоит на 2-м месте: denn ich bin krank. sein → ich bin.',
      },
      {
        type: 'order',
        words: ['Wir', 'feiern', 'nicht,', 'denn', 'Oma', 'ist', 'krank.'],
        translationRu: 'Мы не празднуем, потому что бабушка больна.',
        explanationRu: 'Два обычных предложения, между ними denn. Во второй части глагол ist стоит на 2-м месте после подлежащего Oma.',
      },
      {
        type: 'order',
        words: ['Was', 'schenkst', 'du', 'ihm', 'zum', 'Geburtstag?'],
        translationRu: 'Что ты ему подаришь на день рождения?',
        explanationRu: 'W-вопрос: вопросительное слово, глагол, подлежащее. Местоимение ihm («кому?») стоит сразу после подлежащего.',
      },
      {
        type: 'choice',
        audio: 'Wie geht es Ihnen, Herr Bauer?',
        prompt: 'Как спрашивают?',
        options: ['Вежливо, на «Вы»', 'По-дружески, на «ты»', 'Спрашивают о третьем человеке'],
        answer: 0,
        explanationRu: 'Ihnen — вежливая форма («Вам»). Другу говорят «Wie geht es dir?».',
      },
      {
        type: 'choice',
        audio: 'Vielen Dank für die Einladung! Ich komme sehr gern.',
        prompt: 'Что делает человек?',
        options: ['Принимает приглашение', 'Отказывается', 'Сам приглашает гостей'],
        answer: 0,
        explanationRu: '«Vielen Dank für die Einladung! Ich komme sehr gern» — спасибо за приглашение, я с радостью приду.',
      },
      {
        type: 'gap',
        audio: 'Ich kann leider nicht kommen, denn ich muss arbeiten.',
        prompt: 'Почему человек не придёт? Er muss ___.',
        answers: ['arbeiten'],
        explanationRu: 'Причина стоит после denn: «denn ich muss arbeiten» — потому что мне нужно работать.',
      },
    ],
  },
  vocab: [
    { de: 'Fest', article: 'das', plural: '-e', pos: 'noun', ru: 'праздник', example: 'Das Fest beginnt um acht Uhr.', exampleRu: 'Праздник начинается в восемь часов.', pronRu: 'дас ФЭСТ' },
    { de: 'Feier', article: 'die', plural: '-n', pos: 'noun', ru: 'торжество, праздник', example: 'Die Feier ist im Garten.', exampleRu: 'Праздник будет в саду.', pronRu: 'ди ФАЙ-а' },
    { de: 'Party', article: 'die', plural: '-s', pos: 'noun', ru: 'вечеринка', example: 'Kommst du zu meiner Party?', exampleRu: 'Ты придёшь на мою вечеринку?', pronRu: 'ди ПА-ти' },
    { de: 'Geburtstag', article: 'der', plural: '-e', pos: 'noun', ru: 'день рождения', example: 'Ich habe heute Geburtstag.', exampleRu: 'У меня сегодня день рождения.', pronRu: 'дер ге-БУРТС-так' },
    { de: 'Hochzeit', article: 'die', plural: '-en', pos: 'noun', ru: 'свадьба', example: 'Die Hochzeit ist im Mai.', exampleRu: 'Свадьба будет в мае.', pronRu: 'ди ХОХ-цайт' },
    { de: 'Einladung', article: 'die', plural: '-en', pos: 'noun', ru: 'приглашение', example: 'Vielen Dank für die Einladung!', exampleRu: 'Большое спасибо за приглашение!', pronRu: 'ди АЙН-ла-дунг' },
    { de: 'einladen', forms: 'lädt ein, hat eingeladen', pos: 'verb', ru: 'приглашать', example: 'Ich lade dich zum Essen ein.', exampleRu: 'Я приглашаю тебя на обед.', pronRu: 'АЙН-ла-дэн' },
    { de: 'Gast', article: 'der', plural: '-¨e', pos: 'noun', ru: 'гость', example: 'Wir haben heute zehn Gäste.', exampleRu: 'У нас сегодня десять гостей.', pronRu: 'дер ГАСТ' },
    { de: 'Geschenk', article: 'das', plural: '-e', pos: 'noun', ru: 'подарок', example: 'Das Geschenk ist für dich.', exampleRu: 'Этот подарок для тебя.', pronRu: 'дас ге-ШЭНК' },
    { de: 'schenken', forms: 'schenkt, hat geschenkt', pos: 'verb', ru: 'дарить', example: 'Ich schenke dir ein Buch.', exampleRu: 'Я дарю тебе книгу.', pronRu: 'ШЭН-кен' },
    { de: 'feiern', forms: 'feiert, hat gefeiert', pos: 'verb', ru: 'праздновать', example: 'Wir feiern am Samstag.', exampleRu: 'Мы празднуем в субботу.', pronRu: 'ФАЙ-ан' },
    { de: 'gratulieren', forms: 'gratuliert, hat gratuliert; + Dativ (mir, dir …)', pos: 'verb', ru: 'поздравлять (кого-л. — по-немецки «кому?»)', example: 'Ich gratuliere dir!', exampleRu: 'Поздравляю тебя!', pronRu: 'гра-ту-ЛИ:-рэн' },
    { de: 'Glückwunsch', article: 'der', plural: '-¨e', pos: 'noun', ru: 'поздравление, пожелание', example: 'Herzlichen Glückwunsch zum Geburtstag!', exampleRu: 'Сердечно поздравляю с днём рождения!', pronRu: 'дер ГЛЮК-вунш' },
    { de: 'Alles Gute!', pos: 'phrase', ru: 'Всего хорошего! (пожелание, поздравление)', example: 'Alles Gute zum Geburtstag!', exampleRu: 'Всего хорошего в день рождения! (С днём рождения!)', pronRu: 'А-лес ГУ:-тэ' },
    { de: 'Torte', article: 'die', plural: '-n', pos: 'noun', ru: 'торт', example: 'Die Torte ist sehr lecker.', exampleRu: 'Торт очень вкусный.', pronRu: 'ди ТОР-тэ' },
    { de: 'Kerze', article: 'die', plural: '-n', pos: 'noun', ru: 'свеча', example: 'Wir brauchen noch zwei Kerzen.', exampleRu: 'Нам нужны ещё две свечи.', pronRu: 'ди КЭР-цэ' },
    { de: 'absagen', forms: 'sagt ab, hat abgesagt', pos: 'verb', ru: 'отказываться (от встречи), отменять', example: 'Ich muss die Party leider absagen.', exampleRu: 'К сожалению, мне придётся отказаться от вечеринки.', pronRu: 'АП-за-гэн' },
    { de: 'zusagen', forms: 'sagt zu, hat zugesagt', pos: 'verb', ru: 'принять приглашение, пообещать прийти', example: 'Fünf Gäste haben schon zugesagt.', exampleRu: 'Пять гостей уже согласились прийти.', pronRu: 'ЦУ:-за-гэн' },
    { de: 'leider', pos: 'adv', ru: 'к сожалению', example: 'Ich habe leider keine Zeit.', exampleRu: 'К сожалению, у меня нет времени.', pronRu: 'ЛАЙ-да' },
    { de: 'denn', forms: 'союз: глагол после него на 2-м месте', pos: 'conj', ru: 'потому что', example: 'Ich komme nicht, denn ich bin krank.', exampleRu: 'Я не приду, потому что я болен.', pronRu: 'ДЭН' },
  ],
  listening: {
    title: 'Eine Einladung am Telefon',
    kind: 'dialog',
    text: `A: Hallo Olga, hier ist Markus.
B: Hallo Markus! Wie geht es dir?
A: Danke, gut. Du, ich habe am Samstag Geburtstag und ich mache eine Party. Ich lade dich ein!
B: Oh, danke! Wann beginnt die Party?
A: Um sieben Uhr. Wir essen zusammen und meine Schwester macht eine Torte.
B: Super, ich komme gern. Aber ich kann nur bis zehn Uhr bleiben, denn ich muss am Sonntag früh arbeiten.
A: Kein Problem. Kommt dein Mann auch?
B: Nein, leider nicht. Er ist am Wochenende in Hamburg.
A: Schade! Also bis Samstag!
B: Bis Samstag, tschüss!`,
    questions: [
      { question: 'Wann hat Markus Geburtstag?', options: ['Am Freitag', 'Am Samstag', 'Am Sonntag'], answer: 1 },
      { question: 'Wann beginnt die Party?', options: ['Um sechs Uhr', 'Um sieben Uhr', 'Um zehn Uhr'], answer: 1 },
      { question: 'Wer macht die Torte?', options: ['Markus', 'Olga', 'Die Schwester von Markus'], answer: 2 },
      { question: 'Warum bleibt Olga nur bis zehn Uhr?', options: ['Sie muss am Sonntag arbeiten.', 'Sie ist krank.', 'Sie fährt nach Hamburg.'], answer: 0 },
      { question: 'Wo ist Olgas Mann am Wochenende?', options: ['Auf der Party', 'In Hamburg', 'Bei der Arbeit in Berlin'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'Ваша подруга Лена пригласила вас на день рождения в субботу. Вы не можете прийти. Напишите Лене короткое сообщение: поблагодарите за приглашение, поздравьте её, объясните, почему вы не придёте (используйте denn), и предложите встретиться в другой день.',
    taskDe: 'Ihre Freundin Lena hat am Samstag Geburtstag und lädt Sie zur Party ein. Sie können nicht kommen. Schreiben Sie Lena eine kurze Nachricht.',
    points: [
      'Danke für die Einladung und Glückwunsch',
      'Sie können nicht kommen: Warum? (denn …)',
      'Ein anderer Tag: Wann haben Sie Zeit?',
    ],
    minWords: 25,
    usefulPhrases: [
      'Liebe Lena,',
      'vielen Dank für die Einladung!',
      'Herzlichen Glückwunsch zum Geburtstag!',
      'Leider kann ich nicht kommen, denn …',
      'Ich habe ein Geschenk für dich.',
      'Hast du am Sonntag Zeit?',
      'Alles Gute und viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Ваш сосед Том звонит вам и приглашает на свой день рождения. Примите приглашение, расспросите о подробностях и поздравьте его.',
    aiRole:
      'Du bist Tom, ein freundlicher Nachbar. Du hast am Samstag Geburtstag und machst um 19 Uhr eine Party bei dir zu Hause. Du lädst den Lerner ein. Der Lerner ist Anfänger (A1). Sprich sehr einfach und langsam: kurze Sätze (3 bis 7 Wörter), nur Präsens, stelle immer nur eine Frage. Wenn der Lerner nicht antwortet oder nichts versteht, wiederhole den Satz noch einfacher und hilf mit einem Beispiel (z. B. „Sag: Ich komme gern.“).',
    opener: 'Hallo! Ich habe am Samstag Geburtstag. Kommst du zu meiner Party?',
    tasksRu: [
      'Поблагодарите за приглашение и скажите, придёте ли вы (Danke! Ich komme gern. / Leider …, denn …)',
      'Спросите, во сколько начинается праздник',
      'Спросите, что принести: «Was soll ich mitbringen?»',
      'Поздравьте соседа: «Herzlichen Glückwunsch! Alles Gute!»',
    ],
    readAloud: [
      'Herzlichen Glückwunsch zum Geburtstag!',
      'Ich schenke dir eine Kerze.',
      'Vielen Dank für die Einladung!',
      'Leider kann ich nicht kommen.',
      'Wie geht es dir?',
    ],
  },
};
