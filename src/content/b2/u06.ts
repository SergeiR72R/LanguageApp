import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-06',
  level: 'B2',
  order: 6,
  title: 'Wirtschaft & Konsum',
  titleRu: 'Экономика и потребление',
  goalsRu: [
    'Понимать репортажи и интервью о потребительском поведении и защите прав потребителей.',
    'Использовать устойчивые именно-глагольные сочетания (Funktionsverbgefüge): eine Entscheidung treffen, zur Verfügung stellen, in Frage kommen и др.',
    'Заменять сочетания простыми глаголами и наоборот, выбирая подходящий стиль.',
    'Написать официальную рекламацию в интернет-магазин.',
  ],
  grammar: {
    topic: 'Nomen-Verb-Verbindungen (Funktionsverbgefüge)',
    topicRu: 'Устойчивые именно-глагольные сочетания',
    explanationRu: `**Nomen-Verb-Verbindungen** (Funktionsverbgefüge) — устойчивые сочетания существительного и глагола, который почти потерял своё собственное значение: eine Entscheidung **treffen**, Kritik **üben**, zur Verfügung **stellen**. Главный смысл несёт существительное. Часто существует простой глагол-синоним: eine Entscheidung treffen = **entscheiden**.

Такие сочетания типичны для официального и делового стиля, новостей и экзаменов уровня B2. Их нужно учить **целиком**, вместе с предлогом и артиклем.

**Активное и пассивное значение.** Некоторые сочетания образуют пары:

- Die Firma **stellt** Laptops **zur Verfügung**. — Фирма предоставляет ноутбуки (активно).
- Laptops **stehen zur Verfügung**. — Ноутбуки имеются в распоряжении (пассивное значение).

Также с пассивным значением: **in Frage kommen** (= möglich sein), **in Kraft treten** (= gültig werden), **auf Kritik stoßen** (= kritisiert werden).

**Отрицание.** Перед сочетанием с предлогом обычно стоит **nicht**: Das kommt **nicht** in Frage. Если у существительного неопределённый артикль, используется **kein**: Wir haben noch **keine** Entscheidung getroffen.

**Типичные ошибки русскоговорящих** — дословный перевод:

- «принять решение» → *eine Entscheidung nehmen* — правильно **eine Entscheidung treffen**
- «оказывать влияние» → *Einfluss machen* — правильно **Einfluss nehmen / ausüben**
- «подать заявление» → *einen Antrag geben* — правильно **einen Antrag stellen**
- «задать вопрос» → *eine Frage fragen* — правильно **eine Frage stellen**

Обратите внимание и на слитные формы: **zur** Verfügung (= zu der), **zum** Ausdruck (= zu dem). Написание **in Frage** и **infrage** — оба варианта верны.`,
    table: [
      ['Сочетание', 'Простой глагол', 'Перевод'],
      ['eine Entscheidung treffen', 'entscheiden', 'принять решение'],
      ['Kritik üben an + Dat', 'kritisieren', 'критиковать'],
      ['einen Antrag stellen auf + Akk', 'beantragen', 'подать заявление'],
      ['zur Verfügung stellen', 'bereitstellen', 'предоставить'],
      ['zur Verfügung stehen', 'verfügbar sein', 'быть в распоряжении'],
      ['in Frage kommen', 'möglich sein', 'подходить, рассматриваться'],
      ['in Kraft treten', 'gültig werden', 'вступить в силу'],
      ['Einfluss nehmen auf + Akk', 'beeinflussen', 'влиять'],
      ['in Anspruch nehmen', 'nutzen', 'воспользоваться'],
      ['in Kauf nehmen', 'akzeptieren (Nachteil)', 'смириться, пойти на (недостаток)'],
      ['zum Ausdruck bringen', 'ausdrücken', 'выразить'],
    ],
    examples: [
      {
        de: 'Die Firma stellt allen Mitarbeitern ein Diensthandy zur Verfügung.',
        ru: 'Фирма предоставляет всем сотрудникам служебный телефон.',
      },
      {
        de: 'Verbraucherschützer üben scharfe Kritik an den versteckten Kosten.',
        ru: 'Защитники прав потребителей резко критикуют скрытые расходы.',
      },
      {
        de: 'Ein teurerer Vertrag kommt für uns leider nicht in Frage.',
        ru: 'Более дорогой договор нам, к сожалению, не подходит.',
      },
      {
        de: 'Das neue Gesetz zum Verbraucherschutz tritt im Januar in Kraft.',
        ru: 'Новый закон о защите прав потребителей вступает в силу в январе.',
      },
      {
        de: 'Bevor Sie eine Kaufentscheidung treffen, sollten Sie die Preise vergleichen.',
        ru: 'Прежде чем принять решение о покупке, вам следует сравнить цены.',
      },
      {
        de: 'Viele Kunden nehmen den kostenlosen Lieferservice in Anspruch.',
        ru: 'Многие клиенты пользуются бесплатной доставкой.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Nach langen Verhandlungen hat der Vorstand endlich eine Entscheidung ___.',
        options: ['genommen', 'gemacht', 'getroffen', 'gegeben'],
        answer: 2,
        explanationRu: 'Устойчивое сочетание: eine Entscheidung treffen. Русское «принять» здесь не переводится как nehmen.',
      },
      {
        type: 'choice',
        prompt: 'Für das Projekt stehen uns nur 5.000 Euro zur ___.',
        options: ['Sprache', 'Verfügung', 'Kenntnis', 'Hilfe'],
        answer: 1,
        explanationRu: 'zur Verfügung stehen — иметься в распоряжении (пассивное значение к zur Verfügung stellen).',
      },
      {
        type: 'choice',
        prompt: 'Die neue Regelung ___ am 1. Juli in Kraft.',
        options: ['tritt', 'kommt', 'geht', 'nimmt'],
        answer: 0,
        explanationRu: 'Устойчивое сочетание: in Kraft treten — вступать в силу (о законах и правилах).',
      },
      {
        type: 'choice',
        prompt: 'Ein Kredit mit so hohen Zinsen kommt für mich nicht in ___.',
        options: ['Kauf', 'Anspruch', 'Betrieb', 'Frage'],
        answer: 3,
        explanationRu: 'in Frage kommen — подходить, рассматриваться как вариант. Отрицание: nicht in Frage kommen.',
      },
      {
        type: 'gap',
        prompt: 'Die Verbraucherzentrale übt heftige ___ an den neuen Gebühren der Bank.',
        answers: ['Kritik'],
        explanationRu: 'Kritik üben an + Dativ = kritisieren.',
      },
      {
        type: 'gap',
        prompt: 'Wenn das Gerät defekt ist, können Sie die Gewährleistung in ___ nehmen.',
        answers: ['Anspruch'],
        explanationRu: 'in Anspruch nehmen — воспользоваться (услугой, правом, помощью).',
      },
      {
        type: 'gap',
        prompt: 'Für die Rückerstattung müssen Sie einen schriftlichen Antrag ___.',
        answers: ['stellen'],
        explanationRu: 'einen Antrag stellen = beantragen. Глагол stellen, а не geben или machen.',
      },
      {
        type: 'gap',
        prompt: 'Wegen des günstigen Preises nehmen viele Kunden die lange Lieferzeit in ___.',
        answers: ['Kauf'],
        explanationRu: 'etwas in Kauf nehmen — мириться с недостатком ради выгоды.',
      },
      {
        type: 'order',
        words: ['Die Kundin', 'hat', 'ihre Unzufriedenheit', 'deutlich', 'zum Ausdruck', 'gebracht.'],
        translationRu: 'Клиентка ясно выразила своё недовольство.',
        explanationRu: 'Как и с отделяемой приставкой: zum Ausdruck стоит перед Partizip II в конце предложения.',
      },
      {
        type: 'order',
        words: ['Werbung', 'nimmt', 'großen Einfluss', 'auf', 'unser', 'Kaufverhalten.'],
        translationRu: 'Реклама сильно влияет на наше покупательское поведение.',
        explanationRu: 'Einfluss nehmen auf + Akkusativ = beeinflussen.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените глагол entscheiden сочетанием с Entscheidung.',
        prompt: 'Der Händler hat entschieden, die Preise zu senken.',
        answers: [
          'Der Händler hat die Entscheidung getroffen, die Preise zu senken.',
          'Der Händler hat eine Entscheidung getroffen, die Preise zu senken.',
        ],
        explanationRu: 'entscheiden = eine/die Entscheidung treffen. Инфинитивный оборот остаётся без изменений.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените сочетание zur Verfügung stellen простым глаголом (bereitstellen).',
        prompt: 'Das Unternehmen stellt den Kunden eine kostenlose Beratung zur Verfügung.',
        answers: ['Das Unternehmen stellt den Kunden eine kostenlose Beratung bereit.'],
        explanationRu: 'zur Verfügung stellen = bereitstellen. Приставка bereit- отделяется и уходит в конец предложения.',
      },
    ],
  },
  vocab: [
    {
      de: 'Verbraucherschutz',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'защита прав потребителей',
      example: 'Der Verbraucherschutz in der EU wurde in den letzten Jahren deutlich verbessert.',
      exampleRu: 'Защита прав потребителей в ЕС за последние годы значительно улучшилась.',
    },
    {
      de: 'Kaufentscheidung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'решение о покупке',
      example: 'Bewertungen im Internet beeinflussen die Kaufentscheidung vieler Kunden.',
      exampleRu: 'Отзывы в интернете влияют на решение о покупке у многих клиентов.',
    },
    {
      de: 'Nachfrage',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'спрос',
      example: 'Die Nachfrage nach Elektroautos ist im letzten Jahr gesunken.',
      exampleRu: 'Спрос на электромобили в прошлом году снизился.',
    },
    {
      de: 'Inflation',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'инфляция',
      example: 'Wegen der hohen Inflation können sich viele Familien weniger leisten.',
      exampleRu: 'Из-за высокой инфляции многие семьи могут позволить себе меньше.',
    },
    {
      de: 'Umsatz',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'оборот, выручка',
      example: 'Der Onlinehändler hat seinen Umsatz im Weihnachtsgeschäft verdoppelt.',
      exampleRu: 'Интернет-магазин удвоил оборот в рождественский сезон.',
    },
    {
      de: 'Rücksendung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'возврат (товара)',
      example: 'Kostenlose Rücksendungen sind für viele Händler ein großes Problem.',
      exampleRu: 'Бесплатный возврат товара — большая проблема для многих продавцов.',
    },
    {
      de: 'Gewährleistung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'гарантийная ответственность продавца',
      example: 'Die gesetzliche Gewährleistung beträgt in Deutschland zwei Jahre.',
      exampleRu: 'Установленный законом срок ответственности продавца в Германии составляет два года.',
    },
    {
      de: 'Konsum',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'потребление',
      example: 'Der Konsum von Fleisch geht in Deutschland langsam zurück.',
      exampleRu: 'Потребление мяса в Германии постепенно снижается.',
    },
    {
      de: 'Ratenzahlung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'оплата в рассрочку',
      example: 'Den Fernseher haben wir auf Ratenzahlung gekauft.',
      exampleRu: 'Телевизор мы купили в рассрочку.',
    },
    {
      de: 'Lieferkette',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'цепочка поставок',
      example: 'Während der Pandemie wurden viele internationale Lieferketten unterbrochen.',
      exampleRu: 'Во время пандемии многие международные цепочки поставок были прерваны.',
    },
    {
      de: 'Wettbewerb',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'конкуренция; конкурс',
      example: 'Der harte Wettbewerb zwingt die Firmen, ihre Preise zu senken.',
      exampleRu: 'Жёсткая конкуренция вынуждает фирмы снижать цены.',
    },
    {
      de: 'erstatten',
      forms: 'erstattete, hat erstattet',
      pos: 'verb',
      ru: 'возмещать, возвращать (деньги)',
      example: 'Der Shop hat mir den Kaufpreis innerhalb einer Woche erstattet.',
      exampleRu: 'Магазин вернул мне стоимость покупки в течение недели.',
    },
    {
      de: 'sich verschulden',
      forms: 'verschuldete sich, hat sich verschuldet',
      pos: 'verb',
      ru: 'влезать в долги',
      example: 'Immer mehr junge Leute verschulden sich durch Ratenkäufe.',
      exampleRu: 'Всё больше молодых людей влезают в долги из-за покупок в рассрочку.',
    },
    {
      de: 'reklamieren',
      forms: 'reklamierte, hat reklamiert',
      pos: 'verb',
      ru: 'предъявлять претензию, рекламировать (брак)',
      example: 'Ich habe die defekte Kaffeemaschine beim Händler reklamiert.',
      exampleRu: 'Я предъявил продавцу претензию по поводу неисправной кофемашины.',
    },
    {
      de: 'abschließen',
      forms: 'schließt ab, schloss ab, hat abgeschlossen',
      pos: 'verb',
      ru: 'заключать (договор)',
      example: 'Bevor Sie einen Handyvertrag abschließen, sollten Sie das Kleingedruckte lesen.',
      exampleRu: 'Прежде чем заключать договор на мобильную связь, прочитайте то, что написано мелким шрифтом.',
    },
    {
      de: 'kostspielig',
      pos: 'adj',
      ru: 'дорогостоящий',
      example: 'Die Reparatur war kostspieliger als ein neues Gerät.',
      exampleRu: 'Ремонт обошёлся дороже, чем новый прибор.',
    },
    {
      de: 'verbraucherfreundlich',
      pos: 'adj',
      ru: 'удобный, выгодный для потребителя',
      example: 'Die neuen Regeln für Fluggastrechte sind deutlich verbraucherfreundlicher.',
      exampleRu: 'Новые правила о правах авиапассажиров значительно выгоднее для потребителей.',
    },
    {
      de: 'zur Verfügung stellen',
      forms: 'stellt, stellte, hat gestellt',
      pos: 'phrase',
      ru: 'предоставлять (в распоряжение)',
      example: 'Die Stadt stellt Familien eine kostenlose Schuldnerberatung zur Verfügung.',
      exampleRu: 'Город предоставляет семьям бесплатные консультации по долгам.',
    },
    {
      de: 'Kritik üben',
      forms: 'an + Dat; übt, übte, hat geübt',
      pos: 'phrase',
      ru: 'критиковать',
      example: 'Die Gewerkschaft übt scharfe Kritik an den Arbeitsbedingungen bei Lieferdiensten.',
      exampleRu: 'Профсоюз резко критикует условия труда в службах доставки.',
    },
    {
      de: 'in Anspruch nehmen',
      forms: 'nimmt, nahm, hat genommen',
      pos: 'phrase',
      ru: 'воспользоваться (услугой, правом)',
      example: 'Immer mehr Menschen nehmen eine Schuldnerberatung in Anspruch.',
      exampleRu: 'Всё больше людей обращаются за консультацией по долгам.',
    },
  ],
  listening: {
    title: 'Geld & Alltag: Jetzt kaufen, später zahlen?',
    kind: 'dialog',
    text: `A: Herzlich willkommen bei „Geld & Alltag“. Bei mir im Studio ist Dr. Petra Sommer von der Verbraucherzentrale. Frau Sommer, Sie üben seit Monaten Kritik an den sogenannten „Jetzt kaufen, später zahlen“-Angeboten. Warum?
B: Weil sie gerade junge Menschen in die Schuldenfalle locken. Man bestellt online ein Handy oder Kleidung und muss erst in 30 Tagen bezahlen oder in kleinen Raten. Das klingt verbraucherfreundlich, aber viele verlieren dabei den Überblick.
A: Aber die Kunden treffen diese Entscheidung doch freiwillig.
B: Natürlich. Aber die Angebote sind so gestaltet, dass man kaum nachdenkt. Ein Klick, und schon hat man einen Kreditvertrag abgeschlossen, oft ohne es zu merken. Wer dann zu spät zahlt, muss hohe Mahngebühren in Kauf nehmen.
A: Wie viele Menschen sind denn betroffen?
B: Bei uns in der Beratung haben sich die Fälle in zwei Jahren verdreifacht. Besonders oft nehmen Menschen zwischen 18 und 25 unsere Schuldnerberatung in Anspruch.
A: Was fordern Sie konkret?
B: Erstens: Bevor ein Ratenkauf abgeschlossen wird, muss geprüft werden, ob sich der Kunde das überhaupt leisten kann. Zweitens müssen alle Kosten auf den ersten Blick erkennbar sein und nicht erst im Kleingedruckten.
A: Die Händler sagen, ohne solche Angebote würde ihr Umsatz deutlich sinken.
B: Das mag sein. Aber Verbraucherschutz muss wichtiger sein als Umsatz. Immerhin tritt im nächsten Jahr eine neue EU-Richtlinie in Kraft, die genau diese Probleme angehen soll. Das ist ein erster Schritt, aber er reicht noch nicht aus.
A: Und was raten Sie unseren Hörerinnen und Hörern bis dahin?
B: Ganz einfach: nur das kaufen, was man auch sofort bezahlen könnte. Und wer schon Probleme hat, sollte nicht warten. Wir stellen auf unserer Website kostenlose Haushaltspläne zur Verfügung, und eine Erstberatung ist bei uns gratis.
A: Frau Sommer, vielen Dank für das Gespräch.
B: Sehr gern.`,
    questions: [
      {
        question: 'Woran übt Frau Sommer Kritik?',
        options: [
          'An zu hohen Preisen im Onlinehandel.',
          'An Angeboten, bei denen man erst später bezahlt.',
          'An den hohen Zinsen der Banken.',
          'An kostenlosen Rücksendungen.',
        ],
        answer: 1,
      },
      {
        question: 'Warum sind diese Angebote laut Frau Sommer problematisch?',
        options: [
          'Weil man sie nur im Geschäft nutzen kann.',
          'Weil sie nur für teure Produkte gelten.',
          'Weil man leicht den Überblick über seine Ausgaben verliert.',
          'Weil sie in Deutschland verboten sind.',
        ],
        answer: 2,
      },
      {
        question: 'Wer nimmt die Schuldnerberatung besonders oft in Anspruch?',
        options: [
          'Junge Erwachsene zwischen 18 und 25.',
          'Rentnerinnen und Rentner.',
          'Selbstständige.',
          'Familien mit vielen Kindern.',
        ],
        answer: 0,
      },
      {
        question: 'Was fordert Frau Sommer unter anderem?',
        options: [
          'Ein generelles Verbot von Ratenkäufen.',
          'Höhere Mahngebühren.',
          'Niedrigere Preise im Onlinehandel.',
          'Eine Prüfung, ob sich der Kunde den Kauf leisten kann.',
        ],
        answer: 3,
      },
      {
        question: 'Wie bewertet Frau Sommer die neue EU-Richtlinie?',
        options: [
          'Sie hält sie für überflüssig.',
          'Sie sieht sie positiv, findet sie aber nicht ausreichend.',
          'Sie glaubt, dass sie den Händlern schadet.',
          'Sie kennt die Richtlinie noch nicht.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Вы заказали в интернет-магазине ноутбук. Через два месяца он сломался, а служба поддержки не отвечает на ваши письма. Напишите официальную рекламацию (претензию) магазину.',
    taskDe: 'Sie haben bei einem Onlinehändler einen Laptop bestellt. Nach zwei Monaten ist das Gerät defekt, und der Kundenservice reagiert nicht auf Ihre E-Mails. Schreiben Sie eine formelle Reklamation.',
    points: [
      'Was Sie wann gekauft haben',
      'Welche Mängel aufgetreten sind',
      'Ihr bisheriger Kontakt mit dem Kundenservice',
      'Ihre Forderung (Reparatur, Ersatz oder Erstattung) mit einer Frist',
    ],
    minWords: 160,
    usefulPhrases: [
      'Am … habe ich bei Ihnen … bestellt (Bestellnummer …).',
      'Leider musste ich feststellen, dass …',
      'Ich möchte daher meine Rechte aus der Gewährleistung in Anspruch nehmen.',
      'Eine weitere Reparatur kommt für mich nicht in Frage.',
      'Ich fordere Sie auf, mir den Kaufpreis bis zum … zu erstatten.',
      'Für Rückfragen stehe ich Ihnen gern zur Verfügung.',
    ],
  },
  speaking: {
    scenarioRu: 'Вы звоните на горячую линию интернет-магазина: купленный у них ноутбук сломался уже во второй раз. Сотрудник сначала пытается отклонить вашу претензию.',
    aiRole: 'Sie sind Herr Krämer, Mitarbeiter im Kundenservice eines großen Onlinehändlers. Sie sind höflich, versuchen aber zunächst, die Reklamation abzuwehren (z. B. Schaden durch falsche Benutzung, nur Reparatur statt Erstattung). Sprechen Sie Deutsch auf B2-Niveau, stellen Sie Nachfragen und reagieren Sie auf die Argumente des Kunden mit Gegenargumenten.',
    opener: 'Kundenservice, mein Name ist Krämer. Was kann ich für Sie tun?',
    tasksRu: [
      'Опишите проблему и когда вы купили товар.',
      'Используйте не менее четырёх устойчивых сочетаний (in Anspruch nehmen, eine Frist setzen, in Frage kommen, zur Verfügung stellen …).',
      'Возразите, если сотрудник отказывает или предлагает невыгодное решение.',
      'Договоритесь о конкретном решении и сроке.',
    ],
    readAloud: [
      'Nachdem ich die defekte Ware fristgerecht reklamiert hatte, wurde mir der volle Kaufpreis innerhalb von zwei Wochen erstattet.',
      'Verbraucherschützer üben seit Jahren Kritik daran, dass wichtige Informationen über zusätzliche Gebühren oft nur im Kleingedruckten zu finden sind.',
      'Eine weitere Reparatur kommt für mich nicht in Frage, da das Gerät bereits zum dritten Mal ausgefallen ist und ich die Gewährleistung in Anspruch nehmen möchte.',
    ],
  },
};
