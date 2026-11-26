import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-19',
  level: 'B1',
  order: 19,
  title: 'Technik & Alltag',
  titleRu: 'Техника и повседневная жизнь',
  goalsRu: [
    'Рассказывать о бытовой технике, гаджетах и проблемах с ними',
    'Образовывать существительные от глаголов и прилагательных (-ung, -heit, -keit, -ion, das Lesen) и правильно определять их род',
    'Понимать и строить сложные слова (Komposita) и прилагательные на -bar, -los, -ig, -lich',
    'Сообщать о неисправности в службу поддержки устно и письменно',
  ],
  grammar: {
    topic: 'Wortbildung: Nomen aus Verben und Adjektiven, Komposita, Adjektive auf -bar/-los/-ig/-lich',
    topicRu: 'Словообразование: существительные от глаголов и прилагательных, сложные слова, суффиксы прилагательных',
    explanationRu: `**Словообразование** помогает понимать незнакомые слова: зная глагол bedienen, легко понять die Bedienung.

**1. Существительные от глаголов**

- **-ung** → всегда **die**, мн. ч. -en: bedienen → die Bedienung, stören → die Störung, erfinden → die Erfindung.
- **-ion / -tion** (часто от глаголов на -ieren) → **die**: installieren → die Installation, informieren → die Information, diskutieren → die Diskussion.
- **Субстантивированный инфинитив** → всегда **das** и с большой буквы: das Lesen, das Einkaufen. Часто с **beim** (во время) и **zum** (для): beim Fahren, zum Kochen.
- Основа без суффикса → обычно **der**: anrufen → der Anruf, besuchen → der Besuch.

**2. Существительные от прилагательных** — всегда **die**:

- **-heit**: sicher → die Sicherheit, krank → die Krankheit.
- **-keit**, особенно после -ig, -lich, -bar, -sam: möglich → die Möglichkeit, zuverlässig → die Zuverlässigkeit, haltbar → die Haltbarkeit.

**3. Сложные слова (Komposita).** Род и множественное число определяет **последнее** слово: das Handy + die Hülle → **die** Handyhülle. Ударение — на первой части. После -ung, -heit, -keit, -ion ставится соединительное **-s-**: die Wohnungstür, der Sicherheitscode. От глагола берётся основа: waschen → die Waschmaschine.

**4. Прилагательные**

- **-bar** = «можно сделать»: waschbar, reparierbar.
- **-los** = «без»: kabellos, kostenlos.
- **-ig** и **-lich** — от существительных и глаголов: Eile → eilig, Freund → freundlich, Gefahr → gefährlich (часто с умлаутом).

**Типичные ошибки русскоговорящих:**

- Род по русскому слову: «das Lösung» (решение) → **die Lösung**.
- Род сложного слова по первой части: «das Handyhülle» → **die Handyhülle**.
- Маленькая буква: «beim lesen» → **beim Lesen**.
- Пропуск -s-: «Wohnungtür» → **Wohnungstür**.
- -heit вместо -keit: «Möglichheit» → **Möglichkeit**.`,
    table: [
      ['Суффикс', 'Род / часть речи', 'Образуется от', 'Пример'],
      ['-ung', 'die (сущ.)', 'глагола', 'bedienen → die Bedienung'],
      ['-ion / -tion', 'die (сущ.)', 'глагола на -ieren', 'installieren → die Installation'],
      ['инфинитив', 'das (сущ.)', 'глагола', 'lesen → das Lesen, beim Lesen'],
      ['-heit / -keit', 'die (сущ.)', 'прилагательного', 'sicher → die Sicherheit, möglich → die Möglichkeit'],
      ['-bar', 'прилагательное', 'глагола', 'waschen → waschbar («можно стирать»)'],
      ['-los', 'прилагательное', 'существительного', 'das Kabel → kabellos («без кабеля»)'],
      ['-ig / -lich', 'прилагательное', 'сущ. / глагола', 'die Eile → eilig, verstehen → verständlich'],
    ],
    examples: [
      { de: 'Die Bedienung der neuen Waschmaschine ist ganz einfach.', ru: 'Управление новой стиральной машиной совсем простое.' },
      { de: 'Beim Telefonieren sollte man nicht Auto fahren.', ru: 'Во время телефонного разговора не стоит вести машину.' },
      { de: 'Ich habe die Gebrauchsanweisung zweimal gelesen und trotzdem nichts verstanden.', ru: 'Я дважды прочитал инструкцию по эксплуатации и всё равно ничего не понял.' },
      { de: 'Die Zuverlässigkeit eines Geräts ist mir wichtiger als das Design.', ru: 'Надёжность прибора для меня важнее, чем дизайн.' },
      { de: 'Meine neuen Kopfhörer sind kabellos und leicht.', ru: 'Мои новые наушники беспроводные и лёгкие.' },
      { de: 'Nach der Installation des Updates ist mein Computer abgestürzt.', ru: 'После установки обновления мой компьютер завис.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ Handyhülle ist leider kaputt.',
        options: ['Der', 'Die', 'Das'],
        answer: 1,
        explanationRu: 'Род сложного слова определяет последняя часть: das Handy + die Hülle → die Handyhülle.',
      },
      {
        type: 'choice',
        prompt: 'Ein großer Vorteil dieses Druckers ist seine ___.',
        options: ['Zuverlässigheit', 'Zuverlässigkeit', 'Zuverlässung', 'Zuverlässige'],
        answer: 1,
        explanationRu: 'От прилагательных на -ig существительное образуется с помощью -keit: zuverlässig → die Zuverlässigkeit.',
      },
      {
        type: 'choice',
        prompt: 'Diese Jacke kann man in der Maschine waschen. Sie ist ___.',
        options: ['waschlos', 'waschig', 'waschbar', 'wäschlich'],
        answer: 2,
        explanationRu: 'Суффикс -bar означает «можно сделать»: waschbar — «можно стирать».',
      },
      {
        type: 'choice',
        prompt: 'Ich brauche noch zehn Minuten zum ___, dann können wir los.',
        options: ['packen', 'Packen', 'Packung', 'gepackt'],
        answer: 1,
        explanationRu: 'После zum (= zu dem) стоит субстантивированный инфинитив — с большой буквы: zum Packen. Die Packung — это «упаковка, пачка», а не процесс.',
      },
      {
        type: 'gap',
        prompt: 'Mein neuer Staubsauger braucht kein Kabel, er ist ___.',
        answers: ['kabellos'],
        hintRu: 'das Kabel + суффикс со значением «без»',
        explanationRu: 'Суффикс -los = «без»: kabellos — «без кабеля, беспроводной».',
      },
      {
        type: 'gap',
        prompt: 'Ich habe meinen ___ verloren und komme nicht in die Wohnung.',
        answers: ['Wohnungsschlüssel'],
        hintRu: 'die Wohnung + der Schlüssel',
        explanationRu: 'После -ung ставится соединительное -s-: Wohnung + s + Schlüssel → der Wohnungsschlüssel.',
      },
      {
        type: 'gap',
        prompt: 'Nach der ___ der App musste ich das Handy neu starten.',
        answers: ['Installation'],
        hintRu: 'installieren',
        explanationRu: 'Глаголы на -ieren часто образуют существительное на -ion: installieren → die Installation.',
      },
      {
        type: 'gap',
        prompt: 'Vorsicht, das Kabel ist kaputt! Das ist sehr ___.',
        answers: ['gefährlich'],
        hintRu: 'die Gefahr + -lich',
        explanationRu: 'die Gefahr → gefährlich: суффикс -lich, часто с умлаутом.',
      },
      {
        type: 'order',
        words: ['Beim', 'Kochen', 'höre', 'ich', 'gern', 'Radio.'],
        translationRu: 'Во время готовки я люблю слушать радио.',
        explanationRu: 'beim + субстантивированный инфинитив (с большой буквы) = «во время …». Это первое место, поэтому дальше идёт глагол höre.',
      },
      {
        type: 'order',
        words: ['Die', 'Bedienung', 'der', 'neuen', 'Kaffeemaschine', 'ist', 'leider', 'kompliziert.'],
        translationRu: 'Управление новой кофемашиной, к сожалению, сложное.',
        explanationRu: 'die Bedienung (от bedienen) + генитив der neuen Kaffeemaschine — типичная «номинальная» конструкция.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное предложение конструкцией beim + существительное.',
        prompt: 'Wenn ich Auto fahre, telefoniere ich nie.',
        answers: ['Beim Autofahren telefoniere ich nie.', 'Beim Fahren telefoniere ich nie.'],
        explanationRu: 'wenn ich Auto fahre → beim Autofahren (существительное среднего рода, пишется слитно и с большой буквы). После beim-конструкции сразу идёт глагол.',
      },
      {
        type: 'transform',
        instructionRu: 'Перефразируйте с существительным на -ung: «Die … des Geräts ist …».',
        prompt: 'Man kann das Gerät leicht bedienen.',
        answers: ['Die Bedienung des Geräts ist leicht.', 'Die Bedienung des Gerätes ist leicht.', 'Die Bedienung des Geräts ist einfach.'],
        explanationRu: 'bedienen → die Bedienung; дополнение глагола (das Gerät) становится генитивом: des Geräts.',
      },
    ],
  },
  vocab: [
    { de: 'Gebrauchsanweisung', article: 'die', plural: '-en', pos: 'noun', ru: 'инструкция по эксплуатации', example: 'Lies bitte zuerst die Gebrauchsanweisung, bevor du das Gerät benutzt.', exampleRu: 'Прочитай, пожалуйста, сначала инструкцию, прежде чем пользоваться прибором.' },
    { de: 'Haushaltsgerät', article: 'das', plural: '-e', pos: 'noun', ru: 'бытовой прибор', example: 'Kühlschrank und Waschmaschine sind die wichtigsten Haushaltsgeräte.', exampleRu: 'Холодильник и стиральная машина — самые важные бытовые приборы.' },
    { de: 'Störung', article: 'die', plural: '-en', pos: 'noun', ru: 'неполадка, сбой; помеха', example: 'Wegen einer technischen Störung funktioniert das Internet heute nicht.', exampleRu: 'Из-за технического сбоя интернет сегодня не работает.' },
    { de: 'Reparatur', article: 'die', plural: '-en', pos: 'noun', ru: 'ремонт', example: 'Die Reparatur des Fernsehers hat über hundert Euro gekostet.', exampleRu: 'Ремонт телевизора обошёлся больше чем в сто евро.' },
    { de: 'Kundendienst', article: 'der', plural: '-e', pos: 'noun', ru: 'служба поддержки клиентов, сервисная служба', example: 'Ich habe beim Kundendienst angerufen, aber niemand hat abgenommen.', exampleRu: 'Я позвонил в службу поддержки, но никто не взял трубку.' },
    { de: 'Fehlermeldung', article: 'die', plural: '-en', pos: 'noun', ru: 'сообщение об ошибке', example: 'Auf dem Display erscheint immer dieselbe Fehlermeldung.', exampleRu: 'На дисплее всё время появляется одно и то же сообщение об ошибке.' },
    { de: 'Stecker', article: 'der', plural: '-', pos: 'noun', ru: 'штекер, вилка (электрическая)', example: 'Zieh bitte den Stecker, bevor du das Gerät sauber machst.', exampleRu: 'Вынь, пожалуйста, вилку из розетки, прежде чем чистить прибор.' },
    { de: 'Erfinder', article: 'der', plural: '-', pos: 'noun', ru: 'изобретатель (die Erfinderin — изобретательница)', example: 'Der Erfinder des Buchdrucks hieß Johannes Gutenberg.', exampleRu: 'Изобретателя книгопечатания звали Иоганн Гутенберг.' },
    { de: 'Bedienung', article: 'die', plural: '-en', pos: 'noun', ru: 'управление (прибором); обслуживание; официант(ка)', example: 'Die Bedienung des Fahrkartenautomaten ist für Touristen schwierig.', exampleRu: 'Пользоваться билетным автоматом туристам сложно.' },
    { de: 'Haltbarkeit', article: 'die', plural: '–', pos: 'noun', ru: 'долговечность; срок годности', example: 'Bei Schuhen achte ich vor allem auf die Haltbarkeit.', exampleRu: 'В обуви я обращаю внимание прежде всего на долговечность.' },
    { de: 'Lebensdauer', article: 'die', plural: '–', pos: 'noun', ru: 'срок службы', example: 'Die Lebensdauer eines Smartphones liegt oft nur bei drei Jahren.', exampleRu: 'Срок службы смартфона часто составляет всего три года.' },
    { de: 'Zuverlässigkeit', article: 'die', plural: '–', pos: 'noun', ru: 'надёжность', example: 'Diese Automarke ist für ihre Zuverlässigkeit bekannt.', exampleRu: 'Эта марка машин известна своей надёжностью.' },
    { de: 'Erleichterung', article: 'die', plural: '-en', pos: 'noun', ru: 'облегчение', example: 'Die Spülmaschine ist für uns eine große Erleichterung im Alltag.', exampleRu: 'Посудомоечная машина для нас большое облегчение в быту.' },
    { de: 'einschalten', forms: 'schaltet ein, schaltete ein, hat eingeschaltet', pos: 'verb', ru: 'включать', example: 'Wie schaltet man diesen Fernseher eigentlich ein?', exampleRu: 'А как вообще включается этот телевизор?' },
    { de: 'anschließen', forms: 'schließt an, schloss an, hat angeschlossen', pos: 'verb', ru: 'подключать', example: 'Der Techniker kommt morgen und schließt die Waschmaschine an.', exampleRu: 'Техник придёт завтра и подключит стиральную машину.' },
    { de: 'installieren', pos: 'verb', ru: 'устанавливать (программу, прибор)', example: 'Kannst du mir helfen, die neue App zu installieren?', exampleRu: 'Можешь помочь мне установить новое приложение?' },
    { de: 'abstürzen', forms: 'stürzt ab, stürzte ab, ist abgestürzt', pos: 'verb', ru: 'зависать, «падать» (о компьютере); разбиваться', example: 'Mein Laptop ist mitten in der Präsentation abgestürzt.', exampleRu: 'Мой ноутбук завис прямо посреди презентации.' },
    { de: 'aktualisieren', pos: 'verb', ru: 'обновлять', example: 'Sie sollten die Software regelmäßig aktualisieren.', exampleRu: 'Вам следует регулярно обновлять программное обеспечение.' },
    { de: 'tragbar', pos: 'adj', ru: 'переносной, портативный; приемлемый', example: 'Für die Reise habe ich mir einen kleinen tragbaren Lautsprecher gekauft.', exampleRu: 'Для поездки я купил себе маленькую портативную колонку.' },
    { de: 'verständlich', pos: 'adj', ru: 'понятный', example: 'Die Anleitung ist kurz und gut verständlich geschrieben.', exampleRu: 'Инструкция написана коротко и понятно.' },
  ],
  listening: {
    title: 'Radio-Ratgeber: Damit Haushaltsgeräte länger leben',
    kind: 'monolog',
    text: `Guten Morgen und willkommen zu unserem Ratgeber „Technik im Alltag“. Heute geht es um eine Frage, die viele Hörerinnen und Hörer interessiert: Wie kann man die Lebensdauer von Haushaltsgeräten verlängern?

Erstens: Lesen Sie die Gebrauchsanweisung! Das klingt langweilig, aber viele Störungen entstehen durch eine falsche Bedienung. Wer seine Waschmaschine immer zu voll macht, muss sich über eine teure Reparatur nicht wundern.

Zweitens: Reinigung ist wichtig. Beim Kaffeekochen bildet sich Kalk, und eine verkalkte Kaffeemaschine braucht mehr Strom. Entkalken Sie die Maschine deshalb etwa einmal im Monat. Und ziehen Sie vor dem Saubermachen immer den Stecker – Sicherheit geht vor!

Drittens: Wenn ein Gerät eine Fehlermeldung zeigt, werfen Sie es nicht gleich weg. Viele Probleme sind reparierbar. Rufen Sie zuerst den Kundendienst an oder schauen Sie auf der Webseite des Herstellers nach. In vielen Städten gibt es außerdem Reparaturcafés. Dort helfen Ehrenamtliche kostenlos, nur die Ersatzteile muss man selbst bezahlen.

Und viertens: Achten Sie schon beim Kaufen auf Qualität. Ein billiger Staubsauger ist oft nach zwei Jahren kaputt. Ein etwas teureres Gerät mit hoher Zuverlässigkeit spart am Ende Geld und ist besser für die Umwelt, weil weniger Elektroschrott entsteht.

Haben Sie Fragen zu Ihren Geräten? Dann rufen Sie uns an. Bis nächste Woche!`,
    questions: [
      {
        question: 'Warum gehen viele Geräte laut der Sendung kaputt?',
        options: ['Weil sie schlecht produziert werden.', 'Weil man sie falsch bedient.', 'Weil sie zu alt sind.'],
        answer: 1,
      },
      {
        question: 'Wie oft soll man die Kaffeemaschine entkalken?',
        options: ['Jede Woche', 'Etwa einmal im Monat', 'Einmal im Jahr', 'Nur bei einer Fehlermeldung'],
        answer: 1,
      },
      {
        question: 'Was soll man vor dem Saubermachen tun?',
        options: ['Den Kundendienst anrufen', 'Die Gebrauchsanweisung lesen', 'Den Stecker ziehen'],
        answer: 2,
      },
      {
        question: 'Was muss man im Reparaturcafé bezahlen?',
        options: ['Nur die Ersatzteile', 'Die Arbeit der Helfer', 'Einen Eintritt', 'Nichts, alles ist kostenlos'],
        answer: 0,
      },
      {
        question: 'Warum empfiehlt der Ratgeber ein etwas teureres Gerät?',
        options: ['Es sieht moderner aus.', 'Es ist leiser.', 'Es hält länger und spart am Ende Geld.'],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu: 'Вы купили в интернет-магазине робот-пылесос. Через три недели он перестал работать. Напишите письмо в службу поддержки магазина.',
    taskDe: 'Sie haben vor drei Wochen in einem Online-Shop einen Saugroboter gekauft. Jetzt funktioniert er nicht mehr. Schreiben Sie eine E-Mail an den Kundendienst.',
    points: [
      'was Sie wann gekauft haben',
      'welche Störung es gibt',
      'was Sie schon versucht haben',
      'was Sie jetzt erwarten (Reparatur, Umtausch oder Geld zurück)',
    ],
    minWords: 100,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'am … habe ich bei Ihnen … bestellt (Bestellnummer …).',
      'Leider zeigt das Gerät seit … eine Fehlermeldung.',
      'Ich habe bereits versucht, … – leider ohne Erfolg.',
      'Da das Gerät noch Garantie hat, bitte ich Sie um eine kostenlose Reparatur oder einen Umtausch.',
      'Ich freue mich auf Ihre baldige Antwort. Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu: 'Ваша новая стиральная машина показывает ошибку и не включается. Вы звоните на горячую линию сервисной службы производителя.',
    aiRole:
      'Sie sind Herr Brandt, Mitarbeiter an der Service-Hotline eines Herstellers von Haushaltsgeräten. Der Kunde oder die Kundin hat ein Problem mit einer neuen Waschmaschine. Fragen Sie nach Modell, Kaufdatum, Fehlermeldung und danach, was schon versucht wurde. Schlagen Sie einfache Lösungen vor und bieten Sie am Ende einen Termin mit einem Techniker an. Sprechen Sie freundlich und klar auf B1-Niveau.',
    opener: 'Kundendienst, Brandt am Apparat, guten Tag! Was kann ich für Sie tun?',
    tasksRu: [
      'Опишите проблему: что за прибор, когда купили, какая ошибка (Fehlermeldung, Störung).',
      'Расскажите, что вы уже попробовали сделать (Ich habe den Stecker gezogen …).',
      'Используйте хотя бы три существительных на -ung/-heit/-keit или сложных слова.',
      'Договоритесь о визите техника или о замене прибора.',
    ],
    readAloud: [
      'Die Bedienung der neuen Waschmaschine ist leider nicht verständlich.',
      'Beim Einschalten erscheint immer dieselbe Fehlermeldung.',
      'Eine schnelle Reparatur wäre für mich eine große Erleichterung.',
    ],
  },
};
