import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-05',
  level: 'B1',
  order: 5,
  title: 'Freizeit & Reisen',
  titleRu: 'Досуг и путешествия',
  goalsRu: [
    'Рассказывать о поездках, отпуске и проведении свободного времени',
    'Уточнять и описывать людей, места и вещи с помощью относительных предложений',
    'Использовать относительные местоимения в Nominativ, Akkusativ и Dativ, в том числе с предлогами',
    'Писать отзыв о гостинице или месте отдыха',
  ],
  grammar: {
    topic: 'Relativsätze (Nominativ, Akkusativ, Dativ; mit Präposition; wo und was)',
    topicRu: 'Относительные придаточные предложения',
    explanationRu: `**Относительное придаточное** описывает существительное подробнее — как русское «который». Оно отделяется запятой, а спрягаемый глагол стоит **в конце**.

Как выбрать относительное местоимение:

- **Род и число** — от слова, к которому относится придаточное: der Zug → der/den/dem.
- **Падеж** — от роли местоимения **в самом придаточном**: Der Zug, **den** wir nehmen (nehmen + Akk), … ; Der Freund, **dem** ich helfe (helfen + Dat), …

Формы почти совпадают с определённым артиклем. Запомните исключение: **Dativ Plural — denen** (die Leute, mit denen ich reise).

**С предлогом:** предлог стоит **перед** местоимением, а падеж определяет предлог: das Hotel, **in dem** wir wohnen; die Freundin, **mit der** ich reise.

**wo** можно использовать вместо «предлог + местоимение», когда речь идёт о месте: die Stadt, **wo** (= in der) ich wohne. С названиями городов и стран обычно используется только wo: Wir fahren nach Rom, wo …

**was** употребляется после **alles, nichts, etwas, vieles, das** и после целого предложения: Alles, **was** ich brauche, ist Ruhe.

**Типичные ошибки русскоговорящих:**

- Выбирают падеж по главному предложению, а не по придаточному: «Der Mann, der ich gesehen habe» вместо **den**.
- Ставят глагол сразу после местоимения, как в русском: «das Hotel, das ist am Meer» вместо **«das am Meer ist»**.
- Пишут **den** вместо **denen** в Dativ Plural.
- Используют was после существительного среднего рода: «das Buch, was …» — правильно **das Buch, das …**
- Забывают запятые с обеих сторон придаточного.`,
    table: [
      ['Kasus', 'maskulin', 'feminin', 'neutral', 'Plural'],
      ['Nominativ', 'der', 'die', 'das', 'die'],
      ['Akkusativ', 'den', 'die', 'das', 'die'],
      ['Dativ', 'dem', 'der', 'dem', 'denen'],
    ],
    examples: [
      { de: 'Das ist der Reiseführer, der mir so gut gefallen hat.', ru: 'Это тот путеводитель, который мне так понравился.' },
      { de: 'Die Wanderung, die wir am Samstag gemacht haben, war wunderschön.', ru: 'Поход, который мы совершили в субботу, был чудесным.' },
      { de: 'Wie heißt die Frau, der du die Fotos geschickt hast?', ru: 'Как зовут женщину, которой ты отправил фотографии?' },
      { de: 'Das ist das Hotel, in dem wir letzten Sommer gewohnt haben.', ru: 'Это отель, в котором мы жили прошлым летом.' },
      { de: 'Wir fahren wieder nach Rügen, wo wir als Kinder immer Urlaub gemacht haben.', ru: 'Мы снова едем на Рюген, где мы в детстве всегда отдыхали.' },
      { de: 'Im Urlaub mache ich nur das, was mir Spaß macht.', ru: 'В отпуске я делаю только то, что мне нравится.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Der Zug, ___ um acht Uhr abfährt, ist meistens voll.',
        options: ['der', 'den', 'dem', 'die'],
        answer: 0,
        explanationRu: 'der Zug — мужской род; в придаточном местоимение является подлежащим (Nominativ): der.',
      },
      {
        type: 'choice',
        prompt: 'Die Freunde, mit ___ ich in Italien war, kommen aus Wien.',
        options: ['den', 'die', 'denen', 'dem'],
        answer: 2,
        explanationRu: 'Множественное число + предлог mit (Dativ) → denen. Это особая форма Dativ Plural.',
      },
      {
        type: 'choice',
        prompt: 'Das Museum, ___ wir besucht haben, war leider ziemlich langweilig.',
        options: ['das', 'dem', 'was', 'der'],
        answer: 0,
        explanationRu: 'das Museum — средний род, besuchen + Akk → das. was после существительного не используется.',
      },
      {
        type: 'choice',
        prompt: 'Ich habe alles eingepackt, ___ wir für den Campingurlaub brauchen.',
        options: ['das', 'was', 'wo', 'die'],
        answer: 1,
        explanationRu: 'После alles, nichts, etwas, vieles используется относительное местоимение was.',
      },
      {
        type: 'gap',
        prompt: 'Der Mann, ___ wir nach dem Weg gefragt haben, war sehr freundlich.',
        answers: ['den'],
        explanationRu: 'fragen требует Akkusativ (jemanden fragen); der Mann → den.',
      },
      {
        type: 'gap',
        prompt: 'Die Kollegin, ___ ich mein Fahrrad geliehen habe, fährt damit an den Bodensee.',
        answers: ['der'],
        explanationRu: 'jemandem etwas leihen — кому? → Dativ. die Kollegin → der.',
      },
      {
        type: 'gap',
        prompt: 'Das ist der Campingplatz, auf ___ wir jedes Jahr zelten.',
        answers: ['dem'],
        explanationRu: 'auf + Dativ (где? — место), der Campingplatz → auf dem.',
      },
      {
        type: 'gap',
        prompt: 'Kennst du ein Land, ___ man im Winter im Meer baden kann?',
        answers: ['wo', 'in dem'],
        explanationRu: 'Речь о месте → wo (или in dem). Глагол kann стоит в конце придаточного.',
      },
      {
        type: 'order',
        words: ['Das', 'ist', 'die', 'Insel,', 'auf', 'der', 'wir', 'unseren', 'Urlaub', 'verbracht', 'haben.'],
        translationRu: 'Это остров, на котором мы провели наш отпуск.',
        explanationRu: 'Предлог стоит перед относительным местоимением (auf der), спрягаемый глагол haben — в конце.',
      },
      {
        type: 'order',
        words: ['Ich', 'suche', 'ein', 'Hotel,', 'das', 'nicht', 'so', 'teuer', 'ist.'],
        translationRu: 'Я ищу отель, который не очень дорогой.',
        explanationRu: 'das Hotel → das (Nominativ). Глагол ist стоит в конце придаточного.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините два предложения в одно с помощью относительного местоимения.',
        prompt: 'Wir haben eine Reiseleiterin. Sie spricht fünf Sprachen.',
        answers: ['Wir haben eine Reiseleiterin, die fünf Sprachen spricht.'],
        explanationRu: 'Reiseleiterin — женский род, подлежащее в придаточном → die. Глагол spricht в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините два предложения в одно (с предлогом).',
        prompt: 'Das ist der Freund. Ich fahre mit ihm in den Urlaub.',
        answers: ['Das ist der Freund, mit dem ich in den Urlaub fahre.'],
        explanationRu: 'mit ihm → mit dem: предлог переходит вместе с местоимением в начало придаточного, падеж Dativ.',
      },
    ],
  },
  vocab: [
    { de: 'Unterkunft', article: 'die', plural: '-¨e', pos: 'noun', ru: 'жильё, место проживания (в поездке)', example: 'Wir suchen eine günstige Unterkunft in der Nähe vom Bahnhof.', exampleRu: 'Мы ищем недорогое жильё рядом с вокзалом.' },
    { de: 'Sehenswürdigkeit', article: 'die', plural: '-en', pos: 'noun', ru: 'достопримечательность', example: 'Der Kölner Dom ist eine Sehenswürdigkeit, die jeder Tourist sehen will.', exampleRu: 'Кёльнский собор — достопримечательность, которую хочет увидеть каждый турист.' },
    { de: 'Reiseleiter', article: 'der', plural: '-', pos: 'noun', ru: 'гид, руководитель группы', example: 'Der Reiseleiter hat uns viel über die Geschichte der Stadt erzählt.', exampleRu: 'Гид много рассказал нам об истории города.' },
    { de: 'Pauschalreise', article: 'die', plural: '-n', pos: 'noun', ru: 'пакетный тур', example: 'Bei einer Pauschalreise sind Flug und Hotel schon im Preis enthalten.', exampleRu: 'В пакетный тур перелёт и отель уже включены в цену.' },
    { de: 'Verbindung', article: 'die', plural: '-en', pos: 'noun', ru: 'сообщение, связь (транспортная)', example: 'Gibt es eine direkte Verbindung von Berlin nach Prag?', exampleRu: 'Есть ли прямое сообщение из Берлина в Прагу?' },
    { de: 'Verspätung', article: 'die', plural: '-en', pos: 'noun', ru: 'опоздание, задержка', example: 'Der Flug hatte zwei Stunden Verspätung.', exampleRu: 'Рейс задержался на два часа.' },
    { de: 'Reiseziel', article: 'das', plural: '-e', pos: 'noun', ru: 'цель поездки, направление', example: 'Mallorca ist ein beliebtes Reiseziel der Deutschen.', exampleRu: 'Майорка — популярное у немцев направление.' },
    { de: 'Wanderung', article: 'die', plural: '-en', pos: 'noun', ru: 'пеший поход', example: 'Am Sonntag machen wir eine Wanderung durch den Schwarzwald.', exampleRu: 'В воскресенье мы идём в поход по Шварцвальду.' },
    { de: 'Ausflug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'экскурсия, вылазка', example: 'Mit der Klasse haben wir einen Ausflug an den See gemacht.', exampleRu: 'С классом мы съездили на озеро.' },
    { de: 'Ermäßigung', article: 'die', plural: '-en', pos: 'noun', ru: 'скидка, льгота', example: 'Studenten bekommen im Museum eine Ermäßigung.', exampleRu: 'Студенты получают в музее скидку.' },
    { de: 'Gepäck', article: 'das', plural: '–', pos: 'noun', ru: 'багаж', example: 'Mein Gepäck ist leider in Frankfurt geblieben.', exampleRu: 'Мой багаж, к сожалению, остался во Франкфурте.' },
    { de: 'buchen', pos: 'verb', ru: 'бронировать', example: 'Wir haben das Ferienhaus schon im Januar gebucht.', exampleRu: 'Мы забронировали дом для отпуска ещё в январе.' },
    { de: 'übernachten', pos: 'verb', ru: 'ночевать', example: 'Auf der Fahrt nach Italien übernachten wir in München.', exampleRu: 'По пути в Италию мы переночуем в Мюнхене.' },
    { de: 'stornieren', pos: 'verb', ru: 'отменять (бронь)', example: 'Wegen der Krankheit mussten wir die Reise stornieren.', exampleRu: 'Из-за болезни нам пришлось отменить поездку.' },
    { de: 'sich entspannen', pos: 'verb', ru: 'расслабляться', example: 'Am Strand kann ich mich richtig entspannen.', exampleRu: 'На пляже я могу по-настоящему расслабиться.' },
    { de: 'verbringen', forms: 'verbringt, verbrachte, hat verbracht', pos: 'verb', ru: 'проводить (время)', example: 'Wir haben eine Woche an der Ostsee verbracht.', exampleRu: 'Мы провели неделю на Балтийском море.' },
    { de: 'sich lohnen', pos: 'verb', ru: 'стоить того, окупаться', example: 'Der Aufstieg war anstrengend, aber die Aussicht hat sich gelohnt.', exampleRu: 'Подъём был тяжёлым, но вид того стоил.' },
    { de: 'abwechslungsreich', pos: 'adj', ru: 'разнообразный', example: 'Das Programm der Reise war sehr abwechslungsreich.', exampleRu: 'Программа поездки была очень разнообразной.' },
    { de: 'ausgebucht', pos: 'adj', ru: 'полностью забронированный, мест нет', example: 'Im August sind die meisten Hotels an der Küste ausgebucht.', exampleRu: 'В августе большинство отелей на побережье заняты.' },
    { de: 'Lust haben auf', forms: 'auf + Akk', pos: 'phrase', ru: 'хотеть чего-л., иметь желание', example: 'Hast du Lust auf einen Ausflug in die Berge?', exampleRu: 'Хочешь съездить в горы?' },
  ],
  listening: {
    title: 'Ein Wochenende im Allgäu',
    kind: 'monolog',
    text: `Hallo zusammen, hier ist wieder Lena mit einem neuen Reise-Podcast! Heute erzähle ich euch von meinem Kurzurlaub im Allgäu, den ich letzte Woche mit meiner Freundin Sophie gemacht habe.

Wir hatten keine Lust auf eine Pauschalreise, deshalb haben wir alles selbst organisiert. Wir haben eine kleine Unterkunft gebucht, die direkt am See liegt. Die Besitzerin, der das Haus seit vierzig Jahren gehört, hat uns jeden Morgen ein fantastisches Frühstück gemacht – mit Käse aus dem Dorf, in dem sie geboren ist.

Am ersten Tag haben wir eine Wanderung auf den Tegelberg gemacht. Der Weg, den wir genommen haben, war ziemlich steil, aber die Aussicht hat sich wirklich gelohnt. Oben gibt es eine Hütte, wo man super essen kann. Am zweiten Tag wollten wir Schloss Neuschwanstein besichtigen. Das ist die Sehenswürdigkeit, die jeder Tourist in Bayern sehen will. Leider waren die Führungen am Wochenende komplett ausgebucht. Mein Tipp: Bucht die Tickets unbedingt ein paar Wochen vorher online!

Stattdessen haben wir einen Ausflug nach Füssen gemacht. Das ist eine hübsche Stadt mit einer Altstadt, in der es viele kleine Cafés gibt. Mit der Gästekarte, die man in vielen Hotels bekommt, kann man dort übrigens kostenlos Bus fahren.

Auf der Rückfahrt hatte unser Zug natürlich eine Stunde Verspätung. Aber das war das Einzige, was nicht perfekt war. Ich kann das Allgäu allen empfehlen, die die Natur lieben und sich ein bisschen entspannen wollen.`,
    questions: [
      { question: 'Mit wem war Lena im Allgäu?', options: ['Mit ihrer Familie', 'Mit ihrer Freundin Sophie', 'Mit einer Reisegruppe'], answer: 1 },
      { question: 'Wo lag die Unterkunft?', options: ['Direkt am See', 'In der Altstadt von Füssen', 'Neben dem Schloss', 'Auf dem Tegelberg'], answer: 0 },
      {
        question: 'Warum konnten Lena und Sophie Schloss Neuschwanstein nicht besichtigen?',
        options: ['Es war wegen Renovierung geschlossen.', 'Ihr Zug hatte Verspätung.', 'Das Wetter war zu schlecht.', 'Die Führungen waren ausgebucht.'],
        answer: 3,
      },
      {
        question: 'Was kann man mit der Gästekarte machen?',
        options: ['Billiger im Restaurant essen', 'Das Schloss kostenlos besichtigen', 'Kostenlos Bus fahren'],
        answer: 2,
      },
      {
        question: 'Was war auf der Reise nicht perfekt?',
        options: ['Das Frühstück', 'Die Verspätung auf der Rückfahrt', 'Die Aussicht vom Tegelberg'],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Вы недавно вернулись из поездки. Напишите отзыв о месте, где вы жили, для туристического портала.',
    taskDe: 'Sie sind gerade von einer Reise zurückgekommen. Schreiben Sie eine Bewertung über Ihre Unterkunft auf einem Reiseportal.',
    points: [
      'Lage und Zimmer',
      'Personal und Service',
      'Ausflugsmöglichkeiten in der Nähe',
      'Was war nicht so gut? Empfehlen Sie die Unterkunft?',
    ],
    minWords: 90,
    usefulPhrases: [
      'Wir haben … Nächte in … verbracht.',
      'Das Hotel liegt in einer ruhigen Straße, die …',
      'Das Personal, das …, war sehr hilfsbereit.',
      'In der Nähe gibt es einen See, wo man …',
      'Das Einzige, was uns nicht gefallen hat, war …',
      'Ich kann die Unterkunft allen empfehlen, die …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы с другом планируете поездку на выходные. У каждого свои идеи — нужно договориться о месте, жилье и транспорте.',
    aiRole:
      'Sie sind Tom, ein guter Freund Ihres Gesprächspartners. Sie planen zusammen einen Wochenendausflug; Sie möchten lieber in die Berge als in eine Großstadt, und es soll nicht zu teuer sein. Machen Sie Vorschläge, reagieren Sie auf die Ideen Ihres Partners, benutzen Sie ab und zu Relativsätze und sprechen Sie locker auf B1-Niveau.',
    opener: 'Hey! Wir haben doch nächstes Wochenende frei. Hast du schon eine Idee, wohin wir fahren?',
    tasksRu: [
      'Предложите место для поездки и опишите его с помощью относительных предложений (eine Stadt, die …; ein Ort, wo …).',
      'Обсудите жильё и транспорт.',
      'Не соглашайтесь хотя бы с одним предложением друга и объясните почему (weil …).',
      'Договоритесь об общем плане.',
    ],
    readAloud: [
      'Das ist die Brücke, über die wir gestern gewandert sind.',
      'Wir übernachten in einer Hütte, die mitten in den Bergen liegt.',
      'Für Schüler und Studenten gibt es eine Ermäßigung.',
    ],
  },
};
