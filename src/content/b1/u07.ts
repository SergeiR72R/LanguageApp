import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-07',
  level: 'B1',
  order: 7,
  title: 'Medien & Kommunikation',
  titleRu: 'СМИ и общение',
  goalsRu: [
    'Рассказывать, какими медиа вы пользуетесь и как получаете информацию',
    'Сравнивать вещи и людей с помощью сравнительной и превосходной степени',
    'Правильно употреблять als, (genau)so … wie и je … desto',
    'Аргументированно высказывать мнение о плюсах и минусах разных медиа',
  ],
  grammar: {
    topic: 'Komparativ und Superlativ; Vergleiche mit als und wie; je … desto',
    topicRu: 'Степени сравнения; сравнения с als и wie; je … desto',
    explanationRu: `**Сравнительная степень (Komparativ)** образуется с помощью **-er**: schnell → schnell**er**. **Превосходная степень (Superlativ)** — **am …sten** (после глагола) или **der/die/das …ste** (перед существительным, с обычным окончанием прилагательного):

- Die App ist **am schnellsten**.
- Das ist **die schnellste** App.

Многие короткие прилагательные получают умлаут: alt → **ä**lter, groß → gr**ö**ßer, jung → j**ü**nger, kurz, lang, warm, kalt, oft. После **-t, -d, -s, -ß, -z** в превосходной степени вставляется **e**: am ältesten, am kürzesten, am heißesten.

Неправильные формы нужно выучить: **gut – besser – am besten**, **viel – mehr – am meisten**, **gern – lieber – am liebsten**, **hoch – höher – am höchsten**, **nah – näher – am nächsten**.

**Сравнение:**

- неравенство: Komparativ + **als** — Das Internet ist schneller **als** die Zeitung.
- равенство: **(genau)so** + прилагательное + **wie** — Das Handy ist genauso teuer **wie** der Laptop. Отрицание: nicht so … wie.

**je … desto/umso** — «чем …, тем …». Часть с je — придаточное (глагол в конце), часть с desto — главное (сразу глагол после прилагательного): **Je** mehr ich lese, **desto** besser **verstehe** ich.

Сравнительная степень перед существительным тоже склоняется: ein schneller**es** Handy, mit einem größer**en** Bildschirm.

**Типичные ошибки русскоговорящих:**

- Строят сравнение как в русском «более интересный»: «mehr interessant» вместо **interessanter**.
- Русское «чем» переводят как wie: «besser wie» — правильно **besser als**; а «так же, как» — **so … wie**, не «so … als».
- Забывают окончание у сравнительной степени: «ein besser Handy» вместо **ein besseres Handy**.
- В части с desto ставят подлежащее перед глаголом: «desto besser ich verstehe» — неверно.`,
    table: [
      ['Positiv', 'Komparativ', 'Superlativ'],
      ['schnell', 'schneller', 'am schnellsten'],
      ['alt', 'älter', 'am ältesten'],
      ['groß', 'größer', 'am größten'],
      ['gut', 'besser', 'am besten'],
      ['viel', 'mehr', 'am meisten'],
      ['gern', 'lieber', 'am liebsten'],
      ['hoch', 'höher', 'am höchsten'],
      ['nah', 'näher', 'am nächsten'],
    ],
    examples: [
      { de: 'Nachrichten im Internet sind oft schneller als die Zeitung.', ru: 'Новости в интернете часто появляются быстрее, чем в газете.' },
      { de: 'Mein neues Handy ist genauso teuer wie das alte.', ru: 'Мой новый телефон такой же дорогой, как старый.' },
      { de: 'Am liebsten lese ich Nachrichten in einer App.', ru: 'Больше всего я люблю читать новости в приложении.' },
      { de: 'Das ist der spannendste Podcast, den ich kenne.', ru: 'Это самый увлекательный подкаст из тех, что я знаю.' },
      { de: 'Jüngere Leute sehen weniger fern als ihre Eltern.', ru: 'Молодые люди смотрят телевизор меньше, чем их родители.' },
      { de: 'Je länger ich am Bildschirm sitze, desto müder werde ich.', ru: 'Чем дольше я сижу перед экраном, тем сильнее устаю.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ein Brief dauert viel länger ___ eine E-Mail.',
        options: ['als', 'wie', 'so', 'dann'],
        answer: 0,
        explanationRu: 'После сравнительной степени (länger) нужно als.',
      },
      {
        type: 'choice',
        prompt: 'Mein Laptop ist ___ alt wie deiner.',
        options: ['als', 'mehr', 'genauso', 'am'],
        answer: 2,
        explanationRu: 'Равенство выражается конструкцией (genau)so + прилагательное в исходной форме + wie.',
      },
      {
        type: 'choice',
        prompt: 'Welche Zeitschrift liest du ___?',
        options: ['am gernsten', 'am liebsten', 'am lieber', 'liebster'],
        answer: 1,
        explanationRu: 'gern — неправильное наречие: gern – lieber – am liebsten.',
      },
      {
        type: 'choice',
        prompt: 'Je öfter man übt, ___ besser spricht man.',
        options: ['als', 'wie', 'dann', 'desto'],
        answer: 3,
        explanationRu: 'Конструкция «чем …, тем …» — je … desto (или umso).',
      },
      {
        type: 'gap',
        prompt: 'Für viele Menschen ist das Internet heute wichtiger ___ das Fernsehen.',
        answers: ['als'],
        explanationRu: 'wichtiger — сравнительная степень, поэтому als.',
      },
      {
        type: 'gap',
        prompt: 'Das ist das ___ Smartphone im ganzen Geschäft.',
        answers: ['teuerste'],
        hintRu: 'teuer',
        explanationRu: 'Превосходная степень перед существительным: das teuerste (Nominativ ср. рода после das → -e).',
      },
      {
        type: 'gap',
        prompt: 'Im Sommer ist es hier viel ___ als im Winter.',
        answers: ['wärmer'],
        hintRu: 'warm',
        explanationRu: 'warm получает в сравнительной степени умлаут: wärmer.',
      },
      {
        type: 'gap',
        prompt: 'Ich brauche einen ___ Drucker als meinen alten.',
        answers: ['schnelleren'],
        hintRu: 'schnell',
        explanationRu: 'Сравнительная степень перед существительным склоняется: einen (Akk. м. р.) → schneller + en = schnelleren.',
      },
      {
        type: 'order',
        words: ['Je', 'mehr', 'Zeit', 'ich', 'online', 'verbringe,', 'desto', 'schlechter', 'schlafe', 'ich.'],
        translationRu: 'Чем больше времени я провожу в интернете, тем хуже я сплю.',
        explanationRu: 'В части с je глагол в конце (verbringe), после desto + сравнительная степень сразу идёт глагол (schlafe).',
      },
      {
        type: 'order',
        words: ['Mein', 'Bruder', 'telefoniert', 'viel', 'seltener', 'als', 'ich.'],
        translationRu: 'Мой брат звонит по телефону гораздо реже, чем я.',
        explanationRu: 'viel усиливает сравнительную степень (viel seltener = гораздо реже), после неё — als.',
      },
      {
        type: 'transform',
        instructionRu: 'Сравните газету и приложение, используя прилагательное teuer и als.',
        prompt: 'Eine Zeitung kostet 3 Euro. Eine App kostet 1 Euro.',
        answers: ['Eine Zeitung ist teurer als eine App.', 'Die Zeitung ist teurer als die App.'],
        explanationRu: 'teuer → teurer (e перед r выпадает) + als.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью je … desto (viel → mehr, gut → besser).',
        prompt: 'Man liest viel. Man schreibt gut.',
        answers: ['Je mehr man liest, desto besser schreibt man.', 'Je mehr man liest, umso besser schreibt man.'],
        explanationRu: 'je + Komparativ + … + глагол в конце; desto + Komparativ + глагол + подлежащее.',
      },
    ],
  },
  vocab: [
    { de: 'Sendung', article: 'die', plural: '-en', pos: 'noun', ru: 'передача (теле-, радио-)', example: 'Diese Sendung läuft jeden Sonntag um 20 Uhr.', exampleRu: 'Эта передача идёт каждое воскресенье в 20 часов.' },
    { de: 'Bildschirm', article: 'der', plural: '-e', pos: 'noun', ru: 'экран', example: 'Kinder sitzen heute zu lange vor dem Bildschirm.', exampleRu: 'Дети сегодня слишком долго сидят перед экраном.' },
    { de: 'Zeitschrift', article: 'die', plural: '-en', pos: 'noun', ru: 'журнал', example: 'Beim Arzt lese ich immer die Zeitschriften im Wartezimmer.', exampleRu: 'У врача я всегда читаю журналы в приёмной.' },
    { de: 'Werbung', article: 'die', plural: '-en', pos: 'noun', ru: 'реклама', example: 'Im Internet gibt es immer mehr Werbung.', exampleRu: 'В интернете всё больше рекламы.' },
    { de: 'Beitrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'статья, сообщение, пост; взнос', example: 'Ihr Beitrag im Forum hat viele Kommentare bekommen.', exampleRu: 'Её пост на форуме получил много комментариев.' },
    { de: 'Quelle', article: 'die', plural: '-n', pos: 'noun', ru: 'источник', example: 'Informationen aus dem Internet prüfe ich immer mit einer zweiten Quelle.', exampleRu: 'Информацию из интернета я всегда проверяю по второму источнику.' },
    { de: 'Netzwerk', article: 'das', plural: '-e', pos: 'noun', ru: 'сеть (soziale Netzwerke — соцсети)', example: 'In sozialen Netzwerken verbreiten sich Gerüchte sehr schnell.', exampleRu: 'В соцсетях слухи распространяются очень быстро.' },
    { de: 'Datenschutz', article: 'der', plural: '–', pos: 'noun', ru: 'защита данных', example: 'Beim Datenschutz sind die Deutschen besonders vorsichtig.', exampleRu: 'В вопросах защиты данных немцы особенно осторожны.' },
    { de: 'Schlagzeile', article: 'die', plural: '-n', pos: 'noun', ru: 'заголовок (газетный)', example: 'Die Schlagzeile auf der ersten Seite war ziemlich übertrieben.', exampleRu: 'Заголовок на первой странице был довольно преувеличенным.' },
    { de: 'Empfang', article: 'der', plural: '–', pos: 'noun', ru: 'приём (сигнала); приём (гостей)', example: 'In den Bergen hatte ich überhaupt keinen Empfang.', exampleRu: 'В горах у меня совсем не было связи.' },
    { de: 'Gerät', article: 'das', plural: '-e', pos: 'noun', ru: 'прибор, устройство', example: 'Wie viele elektronische Geräte habt ihr zu Hause?', exampleRu: 'Сколько электронных устройств у вас дома?' },
    { de: 'herunterladen', forms: 'lädt herunter, lud herunter, hat heruntergeladen', pos: 'verb', ru: 'скачивать', example: 'Ich habe mir die App der Tageszeitung heruntergeladen.', exampleRu: 'Я скачал себе приложение ежедневной газеты.' },
    { de: 'veröffentlichen', pos: 'verb', ru: 'публиковать', example: 'Die Zeitung hat gestern einen interessanten Artikel veröffentlicht.', exampleRu: 'Вчера газета опубликовала интересную статью.' },
    { de: 'sich informieren', forms: 'über + Akk', pos: 'verb', ru: 'узнавать, получать информацию', example: 'Ich informiere mich meistens im Internet über das Wetter.', exampleRu: 'О погоде я обычно узнаю в интернете.' },
    { de: 'abonnieren', pos: 'verb', ru: 'подписываться (на издание, канал)', example: 'Mein Vater hat die Lokalzeitung seit dreißig Jahren abonniert.', exampleRu: 'Мой отец выписывает местную газету уже тридцать лет.' },
    { de: 'teilen', pos: 'verb', ru: 'делить; делиться (постом)', example: 'Sie hat das Video mit all ihren Freunden geteilt.', exampleRu: 'Она поделилась видео со всеми друзьями.' },
    { de: 'erreichbar', pos: 'adj', ru: 'доступный (для связи)', example: 'Am Wochenende bin ich nicht erreichbar.', exampleRu: 'На выходных со мной нельзя связаться.' },
    { de: 'glaubwürdig', pos: 'adj', ru: 'достоверный, заслуживающий доверия', example: 'Ist diese Nachricht wirklich glaubwürdig?', exampleRu: 'Эта новость действительно достоверна?' },
    { de: 'aktuell', pos: 'adj', ru: 'актуальный, последний, текущий', example: 'Im Radio hört man die aktuellen Nachrichten jede halbe Stunde.', exampleRu: 'По радио свежие новости передают каждые полчаса.' },
    { de: 'auf dem Laufenden bleiben', pos: 'phrase', ru: 'быть в курсе событий', example: 'Mit dieser App bleibe ich immer auf dem Laufenden.', exampleRu: 'С этим приложением я всегда в курсе событий.' },
  ],
  listening: {
    title: 'Radiobericht: Wie informieren sich die Deutschen?',
    kind: 'monolog',
    text: `Und nun zu unserem Thema der Woche: Wie informieren sich die Deutschen heute? Eine neue Umfrage mit über 2000 Teilnehmern zeigt deutliche Unterschiede zwischen den Generationen.

Am wichtigsten ist das Fernsehen immer noch für die über Sechzigjährigen. Sie sehen jeden Tag durchschnittlich vier Stunden fern, also fast doppelt so lange wie die Zwanzig- bis Dreißigjährigen. Die Jüngeren informieren sich lieber im Internet. Mehr als siebzig Prozent von ihnen lesen Nachrichten am Smartphone, und am beliebtesten sind kurze Videos in sozialen Netzwerken.

Die Zeitung auf Papier verliert dagegen immer mehr Leser. Nur noch jeder fünfte Deutsche hat eine Tageszeitung abonniert. Vor zwanzig Jahren war die Zahl noch dreimal so hoch. Interessant ist aber: Bei der Frage, welche Quelle am glaubwürdigsten ist, liegt die Zeitung immer noch auf Platz eins, vor dem öffentlich-rechtlichen Fernsehen. Soziale Netzwerke landen auf dem letzten Platz. Viele Befragte sagen, dass es dort mehr Falschmeldungen gibt als in klassischen Medien.

Auch beim Thema Erreichbarkeit gibt es Unterschiede. Fast die Hälfte der Jugendlichen sagt, dass sie nervös wird, wenn das Handy keinen Empfang hat. Eine Medienpsychologin erklärt dazu: „Je mehr Zeit man online verbringt, desto schwerer kann man abschalten.“ Ihr Tipp: Legen Sie das Handy abends in ein anderes Zimmer. Dann schlafen Sie besser und sind am nächsten Morgen viel fitter.`,
    questions: [
      {
        question: 'Wer sieht am meisten fern?',
        options: ['Die Zwanzig- bis Dreißigjährigen', 'Die Jugendlichen', 'Die über Sechzigjährigen'],
        answer: 2,
      },
      { question: 'Wie informieren sich die meisten jungen Leute?', options: ['Am Smartphone', 'Mit der Tageszeitung', 'Im Radio', 'Im Fernsehen'], answer: 0 },
      {
        question: 'Wie viele Deutsche haben heute eine Tageszeitung abonniert?',
        options: ['Jeder zweite', 'Jeder dritte', 'Jeder zehnte', 'Jeder fünfte'],
        answer: 3,
      },
      {
        question: 'Welche Quelle finden die Befragten am glaubwürdigsten?',
        options: ['Soziale Netzwerke', 'Die Zeitung', 'Das öffentlich-rechtliche Fernsehen'],
        answer: 1,
      },
      {
        question: 'Was empfiehlt die Medienpsychologin?',
        options: ['Mehr Nachrichten im Internet lesen', 'Alle sozialen Netzwerke löschen', 'Das Handy abends in ein anderes Zimmer legen'],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu: 'На форуме обсуждают тему «Газета, телевизор или интернет — откуда вы берёте информацию?». Напишите свой пост.',
    taskDe: 'In einem Forum diskutieren die Leute über das Thema „Zeitung, Fernsehen oder Internet – wie informieren Sie sich?“. Schreiben Sie Ihren Beitrag.',
    points: [
      'Welche Medien nutzen Sie und wie oft?',
      'Vergleichen Sie Vor- und Nachteile von zwei Medien.',
      'Welche Quelle finden Sie am glaubwürdigsten und warum?',
      'Wie viel Zeit verbringen Sie online?',
    ],
    minWords: 100,
    usefulPhrases: [
      'Am liebsten informiere ich mich …',
      'Im Vergleich zur Zeitung ist das Internet viel aktueller.',
      'Das Fernsehen ist nicht so schnell wie …',
      'Am glaubwürdigsten finde ich …, weil …',
      'Je mehr …, desto …',
      'Meiner Meinung nach …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы разговариваете с коллегой, которая предпочитает бумажные газеты и не доверяет соцсетям. Обсудите, какие медиа лучше.',
    aiRole:
      'Sie sind Katrin, eine Kollegin Ihres Gesprächspartners. Sie lieben gedruckte Zeitungen und Bücher und sind skeptisch gegenüber sozialen Netzwerken. Diskutieren Sie freundlich, aber mit klarer Meinung, vergleichen Sie oft (besser als, nicht so … wie, am wichtigsten) und sprechen Sie auf B1-Niveau.',
    opener: 'Sag mal, liest du eigentlich noch Zeitung? Ich finde, eine richtige Zeitung ist viel besser als diese ganzen Apps!',
    tasksRu: [
      'Выразите своё мнение и сравните разные медиа (Komparativ + als).',
      'Хотя бы один раз используйте превосходную степень (am …sten / der …ste).',
      'Используйте конструкцию je … desto.',
      'Согласитесь с одним аргументом собеседницы и возразите против другого.',
    ],
    readAloud: [
      'Je öfter ich Nachrichten höre, desto besser verstehe ich die Sprache.',
      'Für mich ist das Radio am frühen Morgen am wichtigsten.',
      'Soziale Netzwerke sind schneller, aber nicht so glaubwürdig wie Zeitungen.',
    ],
  },
};
