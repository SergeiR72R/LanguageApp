import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-17',
  level: 'A2',
  order: 17,
  title: 'Natur und Umwelt',
  titleRu: 'Природа и окружающая среда',
  goalsRu: [
    'Говорить о природе, погоде и охране окружающей среды',
    'Понимать правила сортировки мусора в доме',
    'Описывать процессы с помощью пассива: Der Müll wird getrennt.',
    'Давать простые советы, как экономить энергию',
  ],
  grammar: {
    topic: 'Passiv Präsens (Einführung)',
    topicRu: 'Пассив в настоящем времени (введение)',
    explanationRu: `**Пассив** (страдательный залог) нужен, когда важно **действие**, а не тот, кто его делает. По-русски мы говорим: «Мусор сортируют» или «Мусор сортируется». Кто именно сортирует — неважно.

**Образование:** форма глагола **werden** + **Partizip II** в конце предложения. Partizip II вы уже знаете из перфекта: gemacht, getrennt, gesammelt, geworfen.

- Der Müll **wird** jeden Montag **abgeholt**. — Мусор забирают каждый понедельник.
- Die Flaschen **werden** im Supermarkt **gesammelt**. — Бутылки собирают в супермаркете.

Чаще всего нужны две формы: **wird** (ед. ч.) и **werden** (мн. ч.). Все формы — в таблице.

**Актив → пассив.** В немецком часто говорят с **man** («man trennt den Müll» — «мусор сортируют»). В пассиве дополнение в Akkusativ становится подлежащим в **Nominativ**, а man исчезает:
- Man trennt **den** Müll. → **Der** Müll wird getrennt.
- Man sammelt **das** Altpapier. → **Das** Altpapier wird gesammelt.
- Man schaltet **die** Lampen aus. → **Die** Lampen **werden** ausgeschaltet.

Если нужно сказать, **кто** делает действие, используйте **von + Dativ**: Der Müll wird **von der** Stadt abgeholt.

**Порядок слов** — как в перфекте: werden на **2-м месте**, Partizip II — **в конце**. В вопросе: **Wird** das Glas auch abgeholt? Wann **wird** der Müll abgeholt?

**Типичные ошибки русскоговорящих:**
- Берут **sein** вместо werden. «Der Müll ist getrennt» значит «мусор уже рассортирован» (состояние). Процесс — **wird getrennt**.
- Не меняют артикль: «Den Müll wird getrennt» — неправильно, подлежащее всегда в Nominativ: **der** Müll.
- Путают число: «Die Flaschen wird gesammelt». Для мн. ч. нужно **werden**.
- Ставят Partizip II сразу после werden. Он должен стоять в самом конце.`,
    table: [
      ['Person', 'werden', 'Beispiel'],
      ['ich', 'werde', 'Ich werde oft gefragt.'],
      ['du', 'wirst', 'Du wirst gerufen.'],
      ['er / sie / es', 'wird', 'Der Müll wird getrennt.'],
      ['wir', 'werden', 'Wir werden abgeholt.'],
      ['ihr', 'werdet', 'Ihr werdet eingeladen.'],
      ['sie / Sie', 'werden', 'Die Flaschen werden gesammelt.'],
    ],
    examples: [
      { de: 'In Deutschland wird der Müll getrennt.', ru: 'В Германии мусор сортируют.' },
      { de: 'Das Altpapier wird alle zwei Wochen abgeholt.', ru: 'Макулатуру забирают раз в две недели.' },
      { de: 'Leere Flaschen werden im Supermarkt zurückgegeben.', ru: 'Пустые бутылки сдают в супермаркете.' },
      { de: 'Im Winter wird viel Energie verbraucht.', ru: 'Зимой расходуется много энергии.' },
      { de: 'Hier werden alte Bäume geschützt.', ru: 'Здесь охраняют старые деревья.' },
      { de: 'Wann wird der gelbe Sack abgeholt?', ru: 'Когда забирают жёлтый мешок?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Der Müll ___ jeden Dienstag abgeholt.',
        options: ['wird', 'werden', 'ist', 'hat'],
        answer: 0,
        explanationRu: 'Пассив = werden + Partizip II. Подлежащее der Müll — ед. ч., поэтому wird.',
      },
      {
        type: 'choice',
        prompt: 'Die Flaschen ___ im Supermarkt zurückgegeben.',
        options: ['werden', 'wird', 'sind', 'haben'],
        answer: 0,
        explanationRu: 'die Flaschen — мн. ч., поэтому нужна форма werden.',
      },
      {
        type: 'choice',
        prompt: 'Das Papier wird in die blaue Tonne ___.',
        options: ['geworfen', 'werfen', 'wirft', 'geworft'],
        answer: 0,
        explanationRu: 'В конце пассива стоит Partizip II. werfen — неправильный глагол: geworfen.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist ein Passivsatz?',
        options: ['Das Licht wird ausgeschaltet.', 'Ich schalte das Licht aus.', 'Man schaltet das Licht aus.'],
        answer: 0,
        explanationRu: 'Только в первом предложении есть werden + Partizip II. Два других — актив (с ich и с man).',
      },
      {
        type: 'gap',
        prompt: 'In unserem Haus ___ der Müll getrennt.',
        answers: ['wird'],
        explanationRu: 'der Müll — ед. ч. → wird getrennt.',
      },
      {
        type: 'gap',
        prompt: 'Alte Batterien ___ im Geschäft gesammelt.',
        answers: ['werden'],
        explanationRu: 'Batterien — мн. ч. → werden gesammelt.',
      },
      {
        type: 'gap',
        prompt: 'Im Winter wird viel Strom ___.',
        answers: ['verbraucht'],
        hintRu: 'verbrauchen',
        explanationRu: 'Partizip II от verbrauchen — verbraucht (приставка ver- не отделяется, ge- не нужно).',
      },
      {
        type: 'gap',
        prompt: 'Der Wald wird ___ der Stadt geschützt.',
        answers: ['von'],
        explanationRu: 'Кто выполняет действие в пассиве, говорят с von + Dativ: von der Stadt.',
      },
      {
        type: 'choice',
        audio: 'Das Glas wird in den Container geworfen.',
        prompt: 'Что делают со стеклом?',
        options: ['Его бросают в контейнер.', 'Его сдают в магазин.', 'Его моют и используют снова.'],
        answer: 0,
        explanationRu: 'wird in den Container geworfen — «бросают в контейнер».',
      },
      {
        type: 'gap',
        audio: 'Der gelbe Sack wird am Donnerstag abgeholt.',
        prompt: 'В какой день забирают жёлтый мешок? Напишите по-немецки: ___',
        answers: ['Donnerstag', 'am Donnerstag'],
        explanationRu: 'am Donnerstag — в четверг. В жёлтый мешок (der gelbe Sack) выбрасывают упаковки.',
      },
      {
        type: 'order',
        words: ['In', 'Deutschland', 'wird', 'der', 'Müll', 'getrennt.'],
        translationRu: 'В Германии мусор сортируют.',
        explanationRu: 'In Deutschland — на первом месте, wird — на втором, подлежащее der Müll, Partizip II getrennt — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Переделайте предложение в пассив.',
        prompt: 'Man trennt den Müll.',
        answers: ['Der Müll wird getrennt.'],
        explanationRu: 'man исчезает, den Müll (Akk) становится подлежащим der Müll (Nom), глагол: wird + getrennt.',
      },
    ],
  },
  vocab: [
    { de: 'Umwelt', article: 'die', plural: '–', pos: 'noun', ru: 'окружающая среда', example: 'Wir müssen die Umwelt schützen.', exampleRu: 'Мы должны защищать окружающую среду.', pronRu: 'ди УМ-вельт' },
    { de: 'Natur', article: 'die', plural: '–', pos: 'noun', ru: 'природа', example: 'Am Wochenende sind wir gern draußen in der Natur.', exampleRu: 'На выходных мы любим бывать на природе.', pronRu: 'ди на-ТУ:А' },
    { de: 'Müll', article: 'der', plural: '–', pos: 'noun', ru: 'мусор', example: 'Wer bringt heute den Müll raus?', exampleRu: 'Кто сегодня выносит мусор?', pronRu: 'дер МЮЛЬ' },
    { de: 'trennen', forms: 'trennt, hat getrennt', pos: 'verb', ru: 'разделять; сортировать (мусор)', example: 'In Deutschland trennt man den Müll.', exampleRu: 'В Германии мусор сортируют.', pronRu: 'ТРЭ-нэн' },
    { de: 'Mülltonne', article: 'die', plural: '-n', pos: 'noun', ru: 'мусорный бак', example: 'Die Mülltonnen stehen hinten im Hof.', exampleRu: 'Мусорные баки стоят сзади во дворе.', pronRu: 'ди МЮЛЬ-то-нэ' },
    { de: 'Verpackung', article: 'die', plural: '-en', pos: 'noun', ru: 'упаковка', example: 'Verpackungen aus Plastik kommen in den gelben Sack.', exampleRu: 'Пластиковые упаковки выбрасывают в жёлтый мешок.', pronRu: 'ди фэр-ПА-кунг' },
    { de: 'Plastik', article: 'das', plural: '–', pos: 'noun', ru: 'пластик', example: 'Auf dem Markt kaufe ich Obst ohne Plastik.', exampleRu: 'На рынке я покупаю фрукты без пластика.', pronRu: 'дас ПЛАС-тик' },
    { de: 'Altpapier', article: 'das', plural: '–', pos: 'noun', ru: 'макулатура, старая бумага', example: 'Zeitungen und Kartons sind Altpapier.', exampleRu: 'Газеты и картонные коробки — это макулатура.', pronRu: 'дас АЛЬТ-па-пи:а' },
    { de: 'Pfand', article: 'das', plural: '–', pos: 'noun', ru: 'залог (за бутылку, банку)', example: 'Auf diese Flasche gibt es 25 Cent Pfand.', exampleRu: 'За эту бутылку берут залог 25 центов.', pronRu: 'дас ПФАНТ' },
    { de: 'Energie', article: 'die', plural: '-n', pos: 'noun', ru: 'энергия', example: 'Mit LED-Lampen kann man viel Energie sparen.', exampleRu: 'Со светодиодными лампами можно сэкономить много энергии.', pronRu: 'ди э-нэр-ГИ:' },
    { de: 'Strom', article: 'der', plural: '–', pos: 'noun', ru: 'электричество, электроэнергия', example: 'Der Strom ist in Deutschland ziemlich teuer.', exampleRu: 'Электричество в Германии довольно дорогое.', pronRu: 'дер ШТРО:М' },
    { de: 'ausschalten', forms: 'schaltet aus, hat ausgeschaltet', pos: 'verb', ru: 'выключать', example: 'Schalte bitte das Licht aus, wenn du gehst.', exampleRu: 'Выключи, пожалуйста, свет, когда будешь уходить.', pronRu: 'АУС-шаль-тэн' },
    { de: 'verbrauchen', forms: 'verbraucht, hat verbraucht', pos: 'verb', ru: 'расходовать, потреблять', example: 'Ein alter Kühlschrank verbraucht viel Strom.', exampleRu: 'Старый холодильник потребляет много электричества.', pronRu: 'фэр-БРАУ-хэн' },
    { de: 'schützen', forms: 'schützt, hat geschützt', pos: 'verb', ru: 'защищать, охранять', example: 'Diese Tiere werden hier geschützt.', exampleRu: 'Этих животных здесь охраняют.', pronRu: 'ШЮ-цэн' },
    { de: 'Wald', article: 'der', plural: '-¨er', pos: 'noun', ru: 'лес', example: 'Am Sonntag gehen wir im Wald spazieren.', exampleRu: 'В воскресенье мы гуляем в лесу.', pronRu: 'дер ВАЛЬТ' },
    { de: 'Luft', article: 'die', plural: '–', pos: 'noun', ru: 'воздух', example: 'Auf dem Land ist die Luft sauberer als in der Stadt.', exampleRu: 'В деревне воздух чище, чем в городе.', pronRu: 'ди ЛУФТ' },
    { de: 'Klima', article: 'das', plural: '-s', pos: 'noun', ru: 'климат', example: 'In Spanien ist das Klima wärmer als bei uns.', exampleRu: 'В Испании климат теплее, чем у нас.', pronRu: 'дас КЛИ:-ма' },
    { de: 'sauber', pos: 'adj', ru: 'чистый', example: 'Der See ist sehr sauber, man kann dort schwimmen.', exampleRu: 'Озеро очень чистое, там можно купаться.', pronRu: 'ЗАУ-ба' },
    { de: 'werfen', forms: 'wirft, hat geworfen', pos: 'verb', ru: 'бросать, кидать', example: 'Bitte wirf das Papier in die blaue Tonne.', exampleRu: 'Пожалуйста, брось бумагу в синий бак.', pronRu: 'ВЭР-фэн' },
    { de: 'sammeln', forms: 'sammelt, hat gesammelt', pos: 'verb', ru: 'собирать', example: 'Die Kinder sammeln im Park Müll.', exampleRu: 'Дети собирают мусор в парке.', pronRu: 'ЗА-мэльн' },
  ],
  listening: {
    title: 'Der Hausmeister erklärt die Mülltrennung',
    kind: 'monolog',
    text: `Herzlich willkommen in unserem Haus! Ich bin Herr Krause, der Hausmeister. Ich erkläre Ihnen kurz, wie bei uns der Müll getrennt wird. Die Tonnen stehen hinten im Hof. Papier und Kartons kommen in die blaue Tonne. Die blaue Tonne wird alle zwei Wochen am Freitag geleert. Verpackungen aus Plastik und Metall kommen in den gelben Sack. Die gelben Säcke werden jeden Dienstag abgeholt. Bitte stellen Sie die Säcke erst am Montagabend an die Straße. Glas wird nicht abgeholt. Den Glascontainer finden Sie an der Ecke, neben dem Supermarkt. Aber Achtung: Am Sonntag darf man dort kein Glas in den Container werfen. Flaschen mit Pfand bringen Sie am besten in den Supermarkt zurück. Und Essensreste kommen in die braune Tonne. Haben Sie noch Fragen? Ich bin jeden Vormittag im Büro im Erdgeschoss.`,
    questions: [
      { question: 'Wer spricht?', options: ['Ein Nachbar', 'Der Hausmeister', 'Ein Verkäufer'], answer: 1 },
      { question: 'Wann wird die blaue Tonne geleert?', options: ['Jeden Dienstag', 'Alle zwei Wochen am Freitag', 'Jeden Montagabend'], answer: 1 },
      { question: 'Was kommt in den gelben Sack?', options: ['Papier und Kartons', 'Glas', 'Verpackungen aus Plastik und Metall'], answer: 2 },
      { question: 'Wo ist der Glascontainer?', options: ['Hinten im Hof', 'Neben dem Supermarkt', 'Im Erdgeschoss'], answer: 1 },
      { question: 'Wann darf man kein Glas in den Container werfen?', options: ['Am Sonntag', 'Am Montag', 'Am Vormittag'], answer: 0 },
    ],
  },
  writing: {
    taskRu: 'На интернет-форуме «Grün leben» спрашивают: «Что вы делаете для окружающей среды?» Напишите сообщение: как у вас дома сортируют мусор, как вы экономите энергию или воду и что в вашей родной стране по-другому.',
    taskDe: 'Schreiben Sie einen Beitrag im Forum „Grün leben“: Was machen Sie für die Umwelt?',
    points: [
      'Wie wird bei Ihnen zu Hause der Müll getrennt?',
      'Wie sparen Sie Energie oder Wasser?',
      'Was ist in Ihrem Heimatland anders?',
    ],
    minWords: 50,
    usefulPhrases: [
      'Bei uns wird der Müll getrennt.',
      'Papier kommt in die blaue Tonne.',
      'Ich schalte das Licht immer aus, wenn …',
      'Ich fahre oft mit dem Fahrrad, weil …',
      'In meinem Heimatland wird …',
      'Ich finde es wichtig, dass …',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы недавно переехали. Соседка объясняет вам, как в доме сортируют мусор. Задайте ей вопросы и расскажите, как это устроено в вашей стране.',
    aiRole:
      'Sie sind Frau Schulz, eine freundliche Nachbarin. Der Lerner ist neu im Haus. Erklären Sie sehr einfach (A2-Niveau, kurze Sätze), wie der Müll im Haus getrennt wird: blaue Tonne für Papier, gelber Sack für Plastik und Dosen, braune Tonne für Essensreste, der Glascontainer steht an der Ecke. Benutzen Sie oft das Passiv, zum Beispiel „Die Tonne wird am Freitag geleert.“ Beantworten Sie seine Fragen und fragen Sie auch, wie man den Müll in seinem Heimatland trennt. Wenn er etwas nicht versteht, erklären Sie es noch einfacher.',
    opener: 'Hallo! Sie sind neu hier, oder? Ich bin Frau Schulz von oben. Kann ich Ihnen helfen?',
    tasksRu: [
      'Спросите, куда выбрасывать бумагу, пластик и стекло.',
      'Спросите, когда забирают мусор (Wann wird … abgeholt?).',
      'Расскажите, как сортируют (или не сортируют) мусор в вашей стране — используйте пассив.',
      'Поблагодарите соседку и попрощайтесь.',
    ],
    readAloud: [
      'Der Müll wird getrennt.',
      'Papier kommt in die blaue Tonne.',
      'Die Flaschen werden im Supermarkt zurückgegeben.',
      'Bitte schalten Sie das Licht aus.',
    ],
  },
};
