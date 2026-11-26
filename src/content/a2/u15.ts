import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-15',
  level: 'A2',
  order: 15,
  title: 'Feste und Geschenke',
  titleRu: 'Праздники и подарки',
  goalsRu: [
    'Говорить, кому и что вы дарите: Ich schenke meiner Mutter eine Kette.',
    'Правильно ставить два дополнения: Ich schenke sie ihr.',
    'Поздравлять и благодарить: Herzlichen Glückwunsch! Vielen Dank für …',
    'Рассказывать о праздниках в Германии и в своей стране',
    'Вместе планировать подарок и праздник',
  ],
  grammar: {
    topic: 'Verben mit Dativ und Akkusativ; Stellung der Objekte',
    topicRu: 'Глаголы с дательным и винительным падежом; порядок дополнений',
    explanationRu: `Некоторые глаголы имеют **два дополнения**: **кому?** (Dativ — обычно человек) и **что?** (Akkusativ — обычно вещь). В русском так же: «Я дарю **маме** (кому?) **цепочку** (что?)».

Такие глаголы: **geben, schenken, zeigen, erklären, bringen, schicken, kaufen, empfehlen, erzählen, leihen, wünschen**.

- Ich schenke **meiner Mutter** (Dat) **eine Kette** (Akk).
- Der Lehrer erklärt **den Schülern** (Dat) **die Regel** (Akk).

**Напоминание: Dativ.** der/das → **dem** (einem, meinem), die → **der** (einer, meiner), мн. ч. → **den** + **-n**: den Kinder**n**. Местоимения — в таблице.

**Порядок слов — три правила:**

1. **Два существительных:** сначала **Dativ**, потом **Akkusativ**. Ich gebe **dem Kind** **den Ball**.
2. **Местоимение + существительное:** местоимение (короткое слово) идёт **раньше**. Ich gebe **ihm** den Ball. / Ich gebe **ihn** dem Kind.
3. **Два местоимения:** сначала **Akkusativ**, потом **Dativ**. Ich gebe **ihn ihm**. Ich schenke **sie ihr**.

Запомните: **короткое — вперёд**, а из двух коротких первым идёт **Akkusativ**.

**Типичные ошибки русскоговорящих:**

- В русском порядок свободный, поэтому говорят «Ich schenke **ein Buch meinem Vater**». Это не совсем ошибка, но в обычной речи немцы скажут: Ich schenke **meinem Vater ein Buch**.
- Неправильный порядок местоимений: «Ich gebe **ihm es**» ✗ → Ich gebe **es ihm** ✓.
- Путают падежи: gratulieren и danken требуют только Dativ: Ich gratuliere **dir** (не dich!).
- Забывают **-n** в дательном падеже множественного числа: den Kinder**n**, den Freunde**n**.`,
    table: [
      ['Nominativ', 'Akkusativ', 'Dativ'],
      ['ich', 'mich', 'mir'],
      ['du', 'dich', 'dir'],
      ['er', 'ihn', 'ihm'],
      ['sie', 'sie', 'ihr'],
      ['es', 'es', 'ihm'],
      ['wir', 'uns', 'uns'],
      ['ihr', 'euch', 'euch'],
      ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen'],
    ],
    examples: [
      { de: 'Ich schenke meiner Mutter einen Blumenstrauß.', ru: 'Я дарю маме букет цветов.' },
      { de: 'Kannst du mir das Foto zeigen?', ru: 'Можешь показать мне фото?' },
      { de: 'Das Foto? Ich zeige es dir später.', ru: 'Фото? Я покажу тебе его позже.' },
      { de: 'Wir haben unseren Kindern ein Spiel gekauft.', ru: 'Мы купили нашим детям игру.' },
      { de: 'Der Kuchen ist für Oma. Ich bringe ihn ihr morgen.', ru: 'Торт для бабушки. Я отнесу его ей завтра.' },
      { de: 'Ich wünsche dir alles Gute zum Geburtstag!', ru: 'Желаю тебе всего хорошего в день рождения!' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich schenke ___ Mutter einen Blumenstrauß.',
        options: ['meiner', 'meine', 'meinem', 'meinen'],
        answer: 0,
        explanationRu: 'Кому? → Dativ. die Mutter → meiner Mutter.',
      },
      {
        type: 'choice',
        prompt: 'Kannst du ___ das Foto zeigen? Ich möchte es sehen.',
        options: ['mir', 'mich', 'ich', 'meiner'],
        answer: 0,
        explanationRu: 'Показать кому? мне → Dativ: mir. mich — это Akkusativ (меня).',
      },
      {
        type: 'choice',
        prompt: 'Das Buch? Ich gebe ___ morgen.',
        options: ['es dir', 'dir es', 'dich es', 'es dich'],
        answer: 0,
        explanationRu: 'Два местоимения: сначала Akkusativ (es), потом Dativ (dir).',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: ['Ich gratuliere dir zum Geburtstag.', 'Ich gratuliere dich zum Geburtstag.', 'Ich gratuliere du zum Geburtstag.'],
        answer: 0,
        explanationRu: 'gratulieren требует Dativ: Ich gratuliere dir. Не путайте с русским «поздравляю тебя».',
      },
      {
        type: 'gap',
        prompt: 'Ich habe ___ Kindern ein Spiel gekauft.',
        answers: ['den', 'meinen', 'unseren'],
        explanationRu: 'Кому? детям → Dativ мн. ч.: den Kindern (артикль den + окончание -n у существительного).',
      },
      {
        type: 'gap',
        prompt: 'Mein Bruder hat Geburtstag. Ich schenke ___ eine Uhr.',
        answers: ['ihm'],
        explanationRu: 'Кому? ему (er) → Dativ: ihm.',
      },
      {
        type: 'gap',
        prompt: 'Anna hatte gestern Geburtstag. Hast du ___ schon gratuliert?',
        answers: ['ihr'],
        explanationRu: 'gratulieren + Dativ; sie (Anna) в дательном падеже — ihr.',
      },
      {
        type: 'order',
        words: ['Hast', 'du', 'deiner', 'Schwester', 'die', 'Fotos', 'gezeigt?'],
        translationRu: 'Ты показал сестре фотографии?',
        explanationRu: 'Два существительных: сначала Dativ (deiner Schwester), потом Akkusativ (die Fotos). Partizip II в конце.',
      },
      {
        type: 'order',
        words: ['Kannst', 'du', 'es', 'mir', 'erklären?'],
        translationRu: 'Ты можешь мне это объяснить?',
        explanationRu: 'Два местоимения: Akkusativ (es) перед Dativ (mir). Инфинитив erklären в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените «das Buch» местоимением.',
        prompt: 'Ich gebe meiner Freundin das Buch.',
        answers: ['Ich gebe es meiner Freundin.'],
        explanationRu: 'Местоимение (es) идёт раньше существительного (meiner Freundin).',
      },
      {
        type: 'choice',
        audio: 'Ich schenke meiner Oma eine Kerze.',
        prompt: 'Кому дарят подарок и какой?',
        options: ['Бабушке — свечу.', 'Дедушке — свечу.', 'Бабушке — цветы.'],
        answer: 0,
        explanationRu: 'Вы слышите «meiner Oma eine Kerze»: meiner Oma — бабушке (Dativ), eine Kerze — свечу.',
      },
      {
        type: 'gap',
        audio: 'Herzlichen Glückwunsch zum Geburtstag!',
        prompt: 'Напишите слово, которое вы слышите: Herzlichen ___ zum Geburtstag!',
        answers: ['Glückwunsch'],
        explanationRu: 'Herzlichen Glückwunsch! — «Поздравляю!» Слово Glückwunsch пишется с большой буквы, как все существительные.',
      },
    ],
  },
  vocab: [
    { de: 'Fest', article: 'das', plural: '-e', pos: 'noun', ru: 'праздник', example: 'Weihnachten ist für uns das wichtigste Fest.', exampleRu: 'Рождество — для нас самый важный праздник.' },
    { de: 'feiern', forms: 'feiert, hat gefeiert', pos: 'verb', ru: 'праздновать', example: 'Wir feiern meinen Geburtstag im Garten.', exampleRu: 'Мы празднуем мой день рождения в саду.', pronRu: 'ФАЙ-эрн' },
    { de: 'Geschenk', article: 'das', plural: '-e', pos: 'noun', ru: 'подарок', example: 'Vielen Dank für das schöne Geschenk!', exampleRu: 'Большое спасибо за прекрасный подарок!', pronRu: 'гэ-ШЕНК' },
    { de: 'schenken', forms: 'schenkt, hat geschenkt', pos: 'verb', ru: 'дарить (кому? что?)', example: 'Was schenkst du deinem Vater?', exampleRu: 'Что ты подаришь своему отцу?' },
    { de: 'einpacken', forms: 'packt ein, hat eingepackt', pos: 'verb', ru: 'упаковывать, заворачивать', example: 'Könnten Sie mir das Geschenk bitte einpacken?', exampleRu: 'Не могли бы вы упаковать мне подарок?' },
    { de: 'auspacken', forms: 'packt aus, hat ausgepackt', pos: 'verb', ru: 'распаковывать, разворачивать', example: 'Die Kinder packen ihre Geschenke aus.', exampleRu: 'Дети разворачивают свои подарки.' },
    { de: 'Überraschung', article: 'die', plural: '-en', pos: 'noun', ru: 'сюрприз', example: 'Die Party ist eine Überraschung für Papa.', exampleRu: 'Вечеринка — сюрприз для папы.', pronRu: 'ю-ба-РА-шунг' },
    { de: 'gratulieren', forms: 'gratuliert, hat gratuliert (+ Dat)', pos: 'verb', ru: 'поздравлять (кого? — Dativ!)', example: 'Ich gratuliere dir zum Geburtstag!', exampleRu: 'Поздравляю тебя с днём рождения!', pronRu: 'гра-ту-ЛИ:-рэн' },
    { de: 'Glückwunsch', article: 'der', plural: '-¨e', pos: 'noun', ru: 'поздравление', example: 'Herzlichen Glückwunsch zur Hochzeit!', exampleRu: 'Поздравляем со свадьбой!', pronRu: 'ГЛЮК-вунш' },
    { de: 'Hochzeit', article: 'die', plural: '-en', pos: 'noun', ru: 'свадьба', example: 'Zur Hochzeit kommen hundert Gäste.', exampleRu: 'На свадьбу придут сто гостей.', pronRu: 'ХОХ-цайт' },
    { de: 'Weihnachten', article: 'das', plural: '–', pos: 'noun', ru: 'Рождество', example: 'An Weihnachten besuchen wir meine Eltern.', exampleRu: 'На Рождество мы навещаем моих родителей.', pronRu: 'ВАЙ-нах-тэн' },
    { de: 'Ostern', article: 'das', plural: '–', pos: 'noun', ru: 'Пасха', example: 'An Ostern suchen die Kinder bunte Eier.', exampleRu: 'На Пасху дети ищут крашеные яйца.', pronRu: 'О:С-тэрн' },
    { de: 'Silvester', article: 'das', plural: '–', pos: 'noun', ru: 'канун Нового года (31 декабря)', example: 'Silvester feiern wir mit Freunden.', exampleRu: 'Новый год мы встречаем с друзьями.', pronRu: 'зиль-ВЭС-та' },
    { de: 'Gast', article: 'der', plural: '-¨e', pos: 'noun', ru: 'гость', example: 'Die Gäste kommen um sieben Uhr.', exampleRu: 'Гости придут в семь часов.' },
    { de: 'Einladung', article: 'die', plural: '-en', pos: 'noun', ru: 'приглашение', example: 'Vielen Dank für die Einladung!', exampleRu: 'Большое спасибо за приглашение!', pronRu: 'АЙН-ла:-дунг' },
    { de: 'Kerze', article: 'die', plural: '-n', pos: 'noun', ru: 'свеча', example: 'Auf dem Kuchen sind sechzig Kerzen.', exampleRu: 'На торте шестьдесят свечей.', pronRu: 'КЭР-цэ' },
    { de: 'Blumenstrauß', article: 'der', plural: '-¨e', pos: 'noun', ru: 'букет цветов', example: 'Ich bringe der Gastgeberin einen Blumenstrauß mit.', exampleRu: 'Я принесу хозяйке букет цветов.', pronRu: 'БЛУ:-мэн-штраус' },
    { de: 'Gutschein', article: 'der', plural: '-e', pos: 'noun', ru: 'подарочный сертификат, купон', example: 'Wir schenken ihr einen Gutschein für ein Restaurant.', exampleRu: 'Мы подарим ей сертификат в ресторан.', pronRu: 'ГУ:Т-шайн' },
    { de: 'sich bedanken', forms: 'bedankt sich, hat sich bedankt (bei + Dat, für + Akk)', pos: 'verb', ru: 'благодарить', example: 'Ich möchte mich für das Geschenk bedanken.', exampleRu: 'Я хотел бы поблагодарить за подарок.' },
    { de: 'wünschen', forms: 'wünscht, hat gewünscht', pos: 'verb', ru: 'желать (кому? что?)', example: 'Wir wünschen euch frohe Weihnachten!', exampleRu: 'Желаем вам счастливого Рождества!', pronRu: 'ВЮН-шэн' },
  ],
  listening: {
    title: 'Ein Geschenk für die Eltern',
    kind: 'dialog',
    text: `A: Du, Lena, Mama und Papa haben nächsten Samstag Hochzeitstag. Dreißig Jahre! Was schenken wir ihnen?
B: Gute Frage. Letztes Jahr haben wir ihnen ein Kochbuch geschenkt. Das war nicht so toll.
A: Papa wollte doch immer eine Ballonfahrt machen. Wir könnten ihnen eine Ballonfahrt schenken.
B: Das ist zu teuer, oder? Eine Ballonfahrt für zwei kostet bestimmt 400 Euro.
A: Wenn Tom auch mitmacht, zahlt jeder nur ungefähr 130 Euro.
B: Hm. Aber Mama hat Angst vor dem Fliegen. Ich habe eine andere Idee: Wir laden sie in ihr Lieblingsrestaurant ein und schenken ihnen ein Fotobuch. Mit Fotos aus dreißig Jahren!
A: Ein Fotobuch ist schön. Aber wo finden wir die alten Fotos?
B: Oma hat viele. Ich rufe sie morgen an. Sie kann sie uns bestimmt leihen.
A: Gut. Und ich reserviere einen Tisch für Samstag, 19 Uhr. Soll ich Tom fragen, ob er auch kommt?
B: Ja, schreib ihm eine Nachricht. Aber erzähl Mama und Papa nichts! Es soll eine Überraschung sein.`,
    questions: [
      { question: 'Was feiern die Eltern?', options: ['Ihren Geburtstag.', 'Ihren Hochzeitstag.', 'Weihnachten.'], answer: 1 },
      { question: 'Was haben die Kinder den Eltern letztes Jahr geschenkt?', options: ['Ein Kochbuch.', 'Eine Ballonfahrt.', 'Ein Fotobuch.'], answer: 0 },
      { question: 'Warum ist die Ballonfahrt keine gute Idee?', options: ['Papa möchte das nicht.', 'Mama hat Angst vor dem Fliegen.', 'Tom macht nicht mit.'], answer: 1 },
      { question: 'Wer hat die alten Fotos?', options: ['Tom.', 'Die Oma.', 'Die Mutter.'], answer: 1 },
      { question: 'Was macht der Bruder?', options: ['Er ruft die Oma an.', 'Er reserviert einen Tisch.', 'Er kauft ein Kochbuch.'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'Ваш друг Пауль пригласил вас на свою свадьбу. Напишите ему e-mail (50–70 слов): поблагодарите за приглашение, скажите, придёте ли вы (и с кем), и спросите, что вы можете подарить паре. Используйте глаголы с двумя дополнениями (schenken, mitbringen …).',
    taskDe: 'Ihr Freund Paul heiratet und hat Sie zur Hochzeit eingeladen. Schreiben Sie ihm eine E-Mail.',
    points: [
      'Bedanken Sie sich für die Einladung.',
      'Schreiben Sie, ob Sie kommen und mit wem.',
      'Fragen Sie, was Sie Paul und seiner Frau schenken können.',
    ],
    minWords: 50,
    usefulPhrases: [
      'Lieber Paul,',
      'vielen Dank für die Einladung zu eurer Hochzeit!',
      'Ich komme sehr gern, und ich bringe … mit.',
      'Leider kann ich nicht kommen, weil …',
      'Kannst du mir sagen, was ihr euch wünscht?',
      'Ich möchte euch gern … schenken.',
      'Ich freue mich schon auf das Fest!',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'У вашей коллеги, госпожи Ланг, в следующую пятницу 60-летний юбилей. Вы и ваш коллега Ким вместе планируете подарок и маленький праздник в офисе.',
    aiRole:
      'Sie sind Kim, ein Kollege im Büro. Ihre Kollegin Frau Lang hat nächsten Freitag ihren 60. Geburtstag. Sie planen mit dem Lernenden zusammen ein Geschenk und eine kleine Feier im Büro. Frau Lang liest gern, hat einen Garten und trinkt gern Tee. Machen Sie Vorschläge (Blumen, Gutschein für eine Buchhandlung, Kuchen), fragen Sie nach der Meinung des Lernenden und reagieren Sie darauf. Klären Sie zusammen: Was schenken wir ihr? Wer kauft es? Wie viel Geld gibt jeder? Wer bringt einen Kuchen mit? Sprechen Sie sehr einfach (Niveau A2), in kurzen Sätzen. Benutzen Sie Sätze wie „Wir könnten ihr … schenken.“ Wenn der Lernende ein Wort nicht weiß, helfen Sie ihm.',
    opener: 'Du, Frau Lang hat nächsten Freitag Geburtstag. Was schenken wir ihr?',
    tasksRu: [
      'Предложите подарок: Wir könnten ihr … schenken.',
      'Обсудите идею коллеги: согласитесь или предложите другое',
      'Договоритесь, кто купит подарок и сколько денег даст каждый',
      'Решите, кто принесёт торт; используйте местоимения: Ich kaufe ihn. / Ich bringe ihn mit.',
    ],
    readAloud: [
      'Ich schenke meiner Mutter Blumen.',
      'Wir gratulieren dir herzlich!',
      'Kannst du es mir zeigen?',
      'Frohe Weihnachten und ein gutes neues Jahr!',
    ],
  },
};
