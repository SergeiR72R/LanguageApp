import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-14',
  level: 'A1',
  order: 14,
  title: 'Unterwegs: Verkehr und Reisen',
  titleRu: 'В пути: транспорт и поездки',
  goalsRu: [
    'Называть виды транспорта: Bus, Zug, U-Bahn, Auto',
    'Говорить, на чём и куда вы едете: mit dem Bus, nach Berlin, zum Bahnhof',
    'Покупать билет на вокзале и понимать время, путь (Gleis) и цену',
    'Употреблять предлоги mit, zu, nach, von, aus, bei с дательным падежом',
  ],
  grammar: {
    topic: 'Präpositionen mit Dativ: mit, zu, nach, von, aus, bei',
    topicRu: 'Предлоги с дательным падежом',
    explanationRu: `**Предлог** — маленькое слово перед существительным: «с», «к», «из». После шести немецких предлогов **mit, zu, nach, von, aus, bei** всегда идёт **дательный падеж** (Dativ). Это легко запомнить: русские «с кем?», «к кому?», «у кого?» — тоже не именительный падеж.

**Как меняется артикль в Dativ:**
- der → **dem**: der Bus → mit **dem** Bus
- das → **dem**: das Auto → mit **dem** Auto
- die → **der**: die U-Bahn → mit **der** U-Bahn
- множественное число → **den** + **-n** у слова: die Kinder → mit **den** Kinder**n**
- ein → **einem**, eine → **einer**; mein → **meinem**, meine → **meiner**

**Короткие формы:** zu + dem = **zum**, zu + der = **zur**, von + dem = **vom**, bei + dem = **beim**: Ich gehe **zum** Bahnhof. Sie fährt **zur** Arbeit.

**Что значат предлоги:**
- **mit** — на чём / с кем: mit dem Zug, mit meiner Frau
- **zu** — к человеку или в место (куда?): zum Arzt, zu Anna
- **nach** — в город или страну без артикля: nach Berlin, nach Österreich; и **nach Hause** (домой)
- **von** — от, с: vom Bahnhof, von Gleis 3; von … bis …
- **aus** — из (откуда родом): Ich komme aus Russland.
- **bei** — у кого-то, на фирме: bei Anna, bei Siemens

**Типичные ошибки русскоговорящих:**
- «Ich fahre mit Bus» — в немецком нужен артикль: **mit dem Bus**.
- «Ich fahre zu Berlin» — для городов и стран: **nach Berlin**.
- «mit dem Fuß» — правильно: **zu Fuß** (пешком).
- «Ich bin nach Hause» — «дома» = **zu Hause**, «домой» = **nach Hause**.`,
    table: [
      ['', 'der', 'das', 'die', 'Plural'],
      ['Nominativ', 'der Bus', 'das Auto', 'die U-Bahn', 'die Kinder'],
      ['Dativ', 'mit dem Bus', 'mit dem Auto', 'mit der U-Bahn', 'mit den Kindern'],
      ['ein / mein', 'mit einem Bus', 'mit meinem Auto', 'mit meiner Frau', 'mit meinen Kindern'],
      ['zu', 'zum Bahnhof', 'zum Hotel', 'zur Haltestelle', 'zu den Freunden'],
    ],
    examples: [
      { de: 'Ich fahre mit dem Bus zur Arbeit.', ru: 'Я езжу на работу на автобусе.' },
      { de: 'Wir fahren am Samstag nach Hamburg.', ru: 'В субботу мы едем в Гамбург.' },
      { de: 'Der Zug fährt von Gleis 5.', ru: 'Поезд отправляется с пятого пути.' },
      { de: 'Gehst du heute zum Arzt?', ru: 'Ты сегодня идёшь к врачу?' },
      { de: 'Meine Frau arbeitet bei Siemens.', ru: 'Моя жена работает в «Сименсе».' },
      { de: 'Ich gehe zu Fuß nach Hause.', ru: 'Я иду домой пешком.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich fahre mit ___ Bus.',
        options: ['dem', 'der', 'den', 'das'],
        answer: 0,
        explanationRu: 'После mit — дательный падеж. der Bus → mit dem Bus.',
      },
      {
        type: 'choice',
        prompt: 'Anna fährt mit ___ U-Bahn.',
        options: ['der', 'dem', 'die', 'den'],
        answer: 0,
        explanationRu: 'die U-Bahn — женский род. В дательном падеже die → der: mit der U-Bahn.',
      },
      {
        type: 'choice',
        prompt: 'Wir fahren morgen ___ Berlin.',
        options: ['nach', 'zu', 'bei', 'aus'],
        answer: 0,
        explanationRu: 'С названиями городов и стран (без артикля) говорим nach: nach Berlin.',
      },
      {
        type: 'choice',
        prompt: 'Ich gehe jetzt ___ Bahnhof.',
        options: ['zum', 'zur', 'nach', 'bei'],
        answer: 0,
        explanationRu: 'der Bahnhof — мужской род: zu + dem = zum Bahnhof.',
      },
      {
        type: 'gap',
        prompt: 'Nach dem Kurs fahre ich ___ Hause.',
        answers: ['nach'],
        explanationRu: '«Домой» — nach Hause. А «дома» — zu Hause.',
      },
      {
        type: 'gap',
        prompt: 'Mein Vater arbeitet ___ Siemens.',
        answers: ['bei'],
        explanationRu: 'Работать на фирме — arbeiten bei: bei Siemens, bei der Post.',
      },
      {
        type: 'gap',
        prompt: 'Ich fahre mit ___ Fahrrad zur Arbeit.',
        answers: ['dem'],
        explanationRu: 'das Fahrrad — средний род. В дательном падеже das → dem.',
      },
      {
        type: 'gap',
        prompt: 'Gehst du heute ___ Ärztin?',
        answers: ['zur'],
        explanationRu: 'die Ärztin — женский род: zu + der = zur Ärztin.',
      },
      {
        type: 'order',
        words: ['Fährst', 'du', 'mit', 'der', 'Straßenbahn?'],
        translationRu: 'Ты едешь на трамвае?',
        explanationRu: 'Вопрос без вопросительного слова: глагол на первом месте. mit der Straßenbahn — дательный падеж.',
      },
      {
        type: 'choice',
        audio: 'Ich fahre mit dem Bus zur Arbeit.',
        prompt: 'Как человек едет на работу?',
        options: ['на автобусе', 'на поезде', 'на машине', 'пешком'],
        answer: 0,
        explanationRu: 'mit dem Bus — на автобусе.',
      },
      {
        type: 'gap',
        audio: 'Der Zug nach Köln fährt von Gleis sieben.',
        prompt: 'С какого пути отправляется поезд? Напишите цифрой: ___',
        answers: ['7', 'sieben'],
        explanationRu: 'von Gleis sieben — с седьмого пути.',
      },
      {
        type: 'choice',
        audio: 'Einmal nach Dresden, hin und zurück, bitte.',
        prompt: 'Какой билет покупает человек?',
        options: ['в Дрезден туда и обратно', 'в Дрезден только туда', 'в Дортмунд туда и обратно'],
        answer: 0,
        explanationRu: 'nach Dresden — в Дрезден, hin und zurück — туда и обратно.',
      },
    ],
  },
  vocab: [
    { de: 'Bahnhof', article: 'der', plural: '-¨e', pos: 'noun', ru: 'вокзал', example: 'Ich gehe zum Bahnhof.', exampleRu: 'Я иду на вокзал.', pronRu: 'дер БА:Н-хо:ф' },
    { de: 'Zug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'поезд', example: 'Der Zug kommt um acht.', exampleRu: 'Поезд приходит в восемь.', pronRu: 'дер ЦУ:К' },
    { de: 'Bus', article: 'der', plural: 'die Busse', pos: 'noun', ru: 'автобус', example: 'Ich fahre mit dem Bus.', exampleRu: 'Я еду на автобусе.', pronRu: 'дер БУС' },
    { de: 'U-Bahn', article: 'die', plural: '-en', pos: 'noun', ru: 'метро', example: 'Nimm die U-Bahn, das geht schnell.', exampleRu: 'Поезжай на метро, это быстро.', pronRu: 'ди У:-ба:н' },
    { de: 'Straßenbahn', article: 'die', plural: '-en', pos: 'noun', ru: 'трамвай', example: 'Die Straßenbahn fährt zum Zentrum.', exampleRu: 'Трамвай едет в центр.', pronRu: 'ди ШТРА-сэн-ба:н' },
    { de: 'Auto', article: 'das', plural: '-s', pos: 'noun', ru: 'машина, автомобиль', example: 'Wir fahren mit dem Auto.', exampleRu: 'Мы едем на машине.', pronRu: 'дас АУ-то' },
    { de: 'Flugzeug', article: 'das', plural: '-e', pos: 'noun', ru: 'самолёт', example: 'Das Flugzeug ist pünktlich.', exampleRu: 'Самолёт прилетает вовремя.', pronRu: 'дас ФЛУ:К-цойк' },
    { de: 'Flughafen', article: 'der', plural: '-¨', pos: 'noun', ru: 'аэропорт', example: 'Der Flughafen ist weit.', exampleRu: 'Аэропорт далеко.', pronRu: 'дер ФЛУ:К-ха-фэн' },
    { de: 'Haltestelle', article: 'die', plural: '-n', pos: 'noun', ru: 'остановка', example: 'Die Haltestelle ist hier links.', exampleRu: 'Остановка здесь слева.', pronRu: 'ди ХАЛЬ-тэ-штэ-лэ' },
    { de: 'Fahrkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'билет (на транспорт)', example: 'Ich brauche eine Fahrkarte.', exampleRu: 'Мне нужен билет.', pronRu: 'ди ФА:Р-кар-тэ' },
    { de: 'Gleis', article: 'das', plural: '-e', pos: 'noun', ru: 'путь (на вокзале)', example: 'Der Zug fährt von Gleis 3.', exampleRu: 'Поезд отправляется с третьего пути.', pronRu: 'дас ГЛАЙС' },
    { de: 'Fahrplan', article: 'der', plural: '-¨e', pos: 'noun', ru: 'расписание', example: 'Wo ist der Fahrplan?', exampleRu: 'Где расписание?', pronRu: 'дер ФА:Р-пла:н' },
    { de: 'Reise', article: 'die', plural: '-n', pos: 'noun', ru: 'поездка, путешествие', example: 'Gute Reise!', exampleRu: 'Счастливого пути!', pronRu: 'ди РАЙ-зэ' },
    { de: 'Koffer', article: 'der', plural: '–', pos: 'noun', ru: 'чемодан', example: 'Mein Koffer ist sehr schwer.', exampleRu: 'Мой чемодан очень тяжёлый.', pronRu: 'дер КО-фа' },
    { de: 'Verspätung', article: 'die', plural: '-en', pos: 'noun', ru: 'опоздание, задержка', example: 'Der Zug hat zehn Minuten Verspätung.', exampleRu: 'Поезд опаздывает на десять минут.', pronRu: 'ди фэр-ШПЭ:-тунг' },
    { de: 'abfahren', pos: 'verb', forms: 'er fährt ab, ist abgefahren', ru: 'отправляться, уезжать', example: 'Der Bus fährt um neun Uhr ab.', exampleRu: 'Автобус отправляется в девять часов.', pronRu: 'АП-фа:-рэн' },
    { de: 'ankommen', pos: 'verb', forms: 'er kommt an, ist angekommen', ru: 'прибывать, приезжать', example: 'Wann kommt der Zug in Berlin an?', exampleRu: 'Когда поезд прибывает в Берлин?', pronRu: 'АН-ко-мэн' },
    { de: 'umsteigen', pos: 'verb', forms: 'er steigt um, ist umgestiegen', ru: 'делать пересадку', example: 'Sie müssen in Hannover umsteigen.', exampleRu: 'Вам нужно сделать пересадку в Ганновере.', pronRu: 'УМ-штай-гэн' },
    { de: 'zu Fuß', pos: 'phrase', ru: 'пешком', example: 'Ich gehe zu Fuß zur Arbeit.', exampleRu: 'Я хожу на работу пешком.', pronRu: 'цу ФУ:С' },
    { de: 'hin und zurück', pos: 'phrase', ru: 'туда и обратно', example: 'Einmal nach Bonn, hin und zurück, bitte.', exampleRu: 'Один билет до Бонна туда и обратно, пожалуйста.', pronRu: 'ХИН унт цу-РЮК' },
  ],
  listening: {
    title: 'Am Fahrkartenschalter',
    kind: 'dialog',
    text: `A: Guten Tag. Ich möchte nach Leipzig fahren. Wann fährt der nächste Zug?
B: Um zehn Uhr fünfzehn. Sie müssen in Halle umsteigen.
A: Und wann komme ich in Leipzig an?
B: Um zwölf Uhr vierzig.
A: Gut. Dann einmal nach Leipzig, bitte.
B: Einfach oder hin und zurück?
A: Hin und zurück, bitte. Was kostet das?
B: Achtundfünfzig Euro.
A: Hier, bitte. Und wo fährt der Zug ab?
B: Von Gleis vier.
A: Vielen Dank!
B: Bitte schön. Gute Reise!`,
    questions: [
      { question: 'Wohin fährt die Frau?', options: ['nach Halle', 'nach Leipzig', 'nach Berlin'], answer: 1 },
      { question: 'Wann fährt der Zug?', options: ['um 10.15 Uhr', 'um 12.40 Uhr', 'um 10.50 Uhr'], answer: 0 },
      { question: 'Wo muss sie umsteigen?', options: ['in Leipzig', 'in Berlin', 'in Halle'], answer: 2 },
      { question: 'Was kostet die Fahrkarte?', options: ['48 Euro', '58 Euro', '85 Euro'], answer: 1 },
      { question: 'Wo fährt der Zug ab?', options: ['Gleis 4', 'Gleis 14', 'Gleis 2'], answer: 0 },
    ],
  },
  writing: {
    taskRu:
      'В субботу вы едете в гости к подруге Юлии в другой город. Напишите ей короткое сообщение: когда вы приезжаете, на чём вы едете, и попросите её прийти на вокзал.',
    taskDe: 'Sie besuchen am Samstag Ihre Freundin Julia. Schreiben Sie ihr eine Nachricht.',
    points: ['Wann kommen Sie an?', 'Wie fahren Sie? (Zug, Bus …)', 'Bitte: Julia soll zum Bahnhof kommen.'],
    minWords: 25,
    usefulPhrases: [
      'Liebe Julia,',
      'Ich komme am Samstag um … Uhr an.',
      'Ich fahre mit dem Zug.',
      'Ich muss in … umsteigen.',
      'Kannst du zum Bahnhof kommen?',
      'Bis Samstag!',
      'Liebe Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы на вокзале и покупаете билет в кассе. Кассир задаёт вам вопросы.',
    aiRole:
      'Sie arbeiten am Fahrkartenschalter im Bahnhof Hannover. Der Kunde ist Anfänger (A1). Sprechen Sie sehr einfach und langsam, in kurzen Sätzen. Fragen Sie: Wohin? Wann? Einfach oder hin und zurück? Nennen Sie Uhrzeit, Gleis und Preis. Benutzen Sie mit, nach, von und zum/zur. Wenn der Kunde etwas nicht versteht, wiederholen Sie es langsam und mit anderen, einfachen Wörtern.',
    opener: 'Guten Tag! Wohin möchten Sie fahren?',
    tasksRu: [
      'Скажите, куда вы хотите поехать: «Ich möchte nach … fahren.»',
      'Спросите, когда отправляется поезд и нужна ли пересадка',
      'Купите билет туда и обратно и спросите цену',
      'Спросите, с какого пути отправляется поезд',
    ],
    readAloud: [
      'Ich fahre mit dem Zug.',
      'Einmal nach Berlin, bitte.',
      'Der Bus kommt um acht.',
      'Ich gehe zu Fuß.',
      'Wir fahren zum Flughafen.',
    ],
  },
};
