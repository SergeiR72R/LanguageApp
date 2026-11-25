import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-10',
  level: 'B2',
  order: 10,
  title: 'Umwelt & Zukunft',
  titleRu: 'Окружающая среда и будущее',
  goalsRu: [
    'Обсуждать изменение климата, энергетический переход и личный вклад в защиту окружающей среды.',
    'Строить условные предложения без wenn (с глаголом на первом месте) и с falls, sofern, es sei denn.',
    'Выражать нереальное сравнение с als ob, als wenn и als + Konjunktiv II.',
    'Написать официальное письмо в городскую администрацию с предложениями по защите климата.',
  ],
  grammar: {
    topic: 'Konditionalsätze ohne „wenn“, falls/sofern/es sei denn, irreale Vergleichssätze',
    topicRu: 'Условные предложения без wenn, falls/sofern/es sei denn, нереальное сравнение',
    explanationRu: `**Условие без wenn.** Союз wenn можно опустить. Тогда спрягаемый глагол встаёт **на первое место**, а главное предложение часто начинается со **so** или **dann**:

- Wenn wir jetzt nicht handeln, wird es zu spät sein. → **Handeln** wir jetzt nicht, (dann) wird es zu spät sein.
- **Hätten** wir früher reagiert, wäre der Schaden geringer.
- **Sollte** + инфинитив = «если вдруг» (малая вероятность): **Sollte** es morgen regnen, fällt die Aktion aus.

**Другие условные союзы** (глагол в конце):

- **falls** — «на случай если»: Falls der Zug ausfällt, nehmen wir den Bus.
- **sofern** — «при условии что»: Sofern das Wetter mitspielt, pflanzen wir am Samstag Bäume.
- **es sei denn** — «если только не», «разве что». Это отрицательное условие (= wenn … nicht). После него обычно идёт **главное предложение**: Wir schaffen die Klimaziele nicht, **es sei denn**, die Politik **handelt** sofort.

**Нереальное сравнение** («как будто», «словно») выражается Konjunktiv II (в письменной речи возможен и Konjunktiv I):

- **als ob / als wenn** + глагол в конце: Er tut so, **als ob** ihm die Umwelt egal **wäre**.
- **als** + глагол **сразу** после als: Er tut so, **als wäre** ihm die Umwelt egal.
- о прошлом: Sie sah mich an, **als hätte** sie einen Geist **gesehen**.

**Типичные ошибки русскоговорящих:**

- Дословный перевод «как будто»: *wie ob* — правильно **als ob**.
- После als без ob глагол сразу: *als er wäre müde* — правильно **als wäre er müde**.
- Индикатив после als ob: *als ob er krank ist* — в письменной речи нужно **als ob er krank wäre**.
- После es sei denn ставят глагол в конец: *es sei denn, die Politik sofort handelt* — правильно **es sei denn, die Politik handelt sofort**.
- Условие без wenn путают с вопросом. Разница видна по запятой и второй части: Regnet es? — Regnet es, bleiben wir zu Hause.`,
    table: [
      ['Конструкция', 'Значение', 'Пример'],
      ['Verb + …, (so/dann) …', 'если', 'Regnet es, bleiben wir zu Hause.'],
      ['Sollte …, …', 'если вдруг', 'Sollte der Strom ausfallen, rufen Sie diese Nummer an.'],
      ['falls', 'на случай если', 'Falls es regnet, nimm einen Schirm mit.'],
      ['sofern', 'при условии что', 'Sofern genug Geld da ist, bauen wir Solaranlagen.'],
      ['…, es sei denn, …', 'если только не', 'Das Projekt scheitert, es sei denn, die Stadt hilft.'],
      ['als ob / als wenn + Konj. II', 'как будто', 'Er tut so, als ob er nichts wüsste.'],
      ['als + Konj. II (глагол сразу)', 'как будто', 'Er tut so, als wüsste er nichts.'],
    ],
    examples: [
      {
        de: 'Sinkt der Verbrauch fossiler Energien nicht deutlich, wird sich die Erde weiter erwärmen.',
        ru: 'Если потребление ископаемых энергоносителей значительно не снизится, Земля продолжит нагреваться.',
      },
      {
        de: 'Hätten wir früher in erneuerbare Energien investiert, wären wir heute unabhängiger.',
        ru: 'Если бы мы раньше инвестировали в возобновляемую энергетику, сегодня мы были бы более независимыми.',
      },
      {
        de: 'Sollte die Hitzewelle anhalten, wird das Wasser in einigen Gemeinden rationiert.',
        ru: 'Если жара не спадёт, в некоторых общинах воду будут выдавать по нормам.',
      },
      {
        de: 'Wir fahren mit dem Rad zur Arbeit, es sei denn, es regnet in Strömen.',
        ru: 'Мы ездим на работу на велосипеде, разве что идёт проливной дождь.',
      },
      {
        de: 'Manche Politiker tun so, als ob es den Klimawandel gar nicht gäbe.',
        ru: 'Некоторые политики делают вид, будто изменения климата вообще не существует.',
      },
      {
        de: 'Im Sommer war es in Berlin so heiß, als wären wir am Mittelmeer.',
        ru: 'Летом в Берлине было так жарко, словно мы были на Средиземном море.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Welcher Satz ist korrekt?',
        options: [
          'Steigen die Strompreise weiter, werden mehr Menschen Energie sparen.',
          'Die Strompreise steigen weiter, werden mehr Menschen Energie sparen.',
          'Steigen die Strompreise weiter, mehr Menschen werden Energie sparen.',
          'Wenn steigen die Strompreise weiter, werden mehr Menschen Energie sparen.',
        ],
        answer: 0,
        explanationRu: 'Без wenn глагол стоит на первом месте условной части (Steigen …), а главное предложение начинается со спрягаемого глагола (werden …).',
      },
      {
        type: 'choice',
        prompt: 'Er redet über den Klimawandel, als ___ er ein Experte.',
        options: ['ist', 'ob wäre', 'wäre', 'sei denn'],
        answer: 2,
        explanationRu: 'После als (без ob) сразу идёт глагол в Konjunktiv II: als wäre er ein Experte — как будто он эксперт (а на самом деле нет).',
      },
      {
        type: 'choice',
        prompt: 'Wir fahren morgen an den See, ___ es gibt ein Gewitter.',
        options: ['falls', 'es sei denn,', 'sofern', 'als ob'],
        answer: 1,
        explanationRu: 'Порядок слов главного предложения (es gibt) подходит только после es sei denn. По смыслу: мы поедем, если только не будет грозы.',
      },
      {
        type: 'choice',
        prompt: 'Die Klimaziele sind nicht mehr zu erreichen, ___ alle Länder senken ihre Emissionen drastisch.',
        options: ['sofern', 'falls', 'als ob', 'es sei denn,'],
        answer: 3,
        explanationRu: 'Отрицательное условие («если только не») и порядок слов главного предложения после союза → es sei denn.',
      },
      {
        type: 'gap',
        prompt: '___ wir mehr Bäume gepflanzt, wäre es in der Stadt im Sommer nicht so heiß.',
        answers: ['Hätten'],
        explanationRu: 'Нереальное условие в прошлом без wenn: Hätten wir … gepflanzt = Wenn wir … gepflanzt hätten.',
      },
      {
        type: 'gap',
        prompt: '___ es morgen regnen, wird die Fahrraddemo verschoben.',
        answers: ['Sollte'],
        explanationRu: 'Sollte + Infinitiv на первом месте = «если вдруг». Используется для маловероятных условий.',
      },
      {
        type: 'gap',
        prompt: 'Sie tut so, als ___ sie noch nie etwas von Mülltrennung gehört.',
        answers: ['hätte'],
        explanationRu: 'Нереальное сравнение о прошлом: als + hätte … gehört (глагол сразу после als).',
      },
      {
        type: 'gap',
        prompt: 'Er hat den Müll einfach in den Wald geworfen, als ob das ganz normal ___.',
        answers: ['wäre', 'sei'],
        explanationRu: 'После als ob глагол стоит в конце и употребляется в Konjunktiv II (wäre), в письменной речи также в Konjunktiv I (sei).',
      },
      {
        type: 'order',
        words: ['Würden', 'alle', 'weniger Fleisch', 'essen,', 'könnte man', 'viel CO2', 'einsparen.'],
        translationRu: 'Если бы все ели меньше мяса, можно было бы сэкономить много CO2.',
        explanationRu: 'Нереальное условие без wenn: Würden на первом месте, инфинитив essen в конце условной части. Главное предложение начинается с глагола könnte.',
      },
      {
        type: 'order',
        words: ['Er', 'tut so,', 'als', 'wäre', 'ihm', 'die Umwelt', 'egal.'],
        translationRu: 'Он делает вид, будто ему безразлична окружающая среда.',
        explanationRu: 'После als без ob спрягаемый глагол (wäre) стоит сразу за als.',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите условное предложение без wenn.',
        prompt: 'Wenn die Regierung die Bahn stärker fördern würde, würden mehr Menschen auf das Auto verzichten.',
        answers: [
          'Würde die Regierung die Bahn stärker fördern, würden mehr Menschen auf das Auto verzichten.',
          'Würde die Regierung die Bahn stärker fördern, so würden mehr Menschen auf das Auto verzichten.',
          'Würde die Regierung die Bahn stärker fördern, dann würden mehr Menschen auf das Auto verzichten.',
        ],
        explanationRu: 'Wenn опускается, спрягаемый глагол würde переходит с конца на первое место. Главное предложение можно начать с so или dann.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените als ob на als.',
        prompt: 'Es sieht so aus, als ob es bald regnen würde.',
        answers: ['Es sieht so aus, als würde es bald regnen.'],
        explanationRu: 'После als спрягаемый глагол (würde) стоит сразу за союзом, инфинитив остаётся в конце.',
      },
    ],
  },
  vocab: [
    {
      de: 'Klimawandel',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'изменение климата',
      example: 'Der Klimawandel führt zu immer häufigeren Extremwetterereignissen.',
      exampleRu: 'Изменение климата приводит ко всё более частым экстремальным погодным явлениям.',
    },
    {
      de: 'Erderwärmung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'глобальное потепление',
      example: 'Das Pariser Abkommen soll die Erderwärmung auf deutlich unter zwei Grad begrenzen.',
      exampleRu: 'Парижское соглашение должно ограничить глобальное потепление значительно ниже двух градусов.',
    },
    {
      de: 'Emission',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'выброс (вредных веществ)',
      example: 'Der Verkehr verursacht einen großen Teil der Emissionen in Deutschland.',
      exampleRu: 'Транспорт является источником значительной части выбросов в Германии.',
    },
    {
      de: 'Energiewende',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'энергетический переход (к возобновляемым источникам)',
      example: 'Für die Energiewende braucht Deutschland viel mehr Windräder und Stromleitungen.',
      exampleRu: 'Для энергетического перехода Германии нужно гораздо больше ветряков и линий электропередачи.',
    },
    {
      de: 'Nachhaltigkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'устойчивость, экологичность',
      example: 'Viele Unternehmen werben mit Nachhaltigkeit, doch nicht immer steckt viel dahinter.',
      exampleRu: 'Многие компании рекламируют свою экологичность, но не всегда за этим что-то стоит.',
    },
    {
      de: 'Artensterben',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'вымирание видов',
      example: 'Wissenschaftler warnen vor einem dramatischen Artensterben.',
      exampleRu: 'Учёные предупреждают о драматическом вымирании видов.',
    },
    {
      de: 'Ressource',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'ресурс',
      example: 'Wasser ist eine knappe Ressource, mit der wir sparsam umgehen müssen.',
      exampleRu: 'Вода — дефицитный ресурс, который нужно расходовать бережно.',
    },
    {
      de: 'Verzicht',
      article: 'der',
      plural: '-e',
      forms: 'auf + Akk',
      pos: 'noun',
      ru: 'отказ (от чего-либо)',
      example: 'Klimaschutz bedeutet nicht nur Verzicht, sondern auch neue Chancen.',
      exampleRu: 'Защита климата означает не только отказ от чего-то, но и новые возможности.',
    },
    {
      de: 'Dürre',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'засуха',
      example: 'Nach der langen Dürre ist die Ernte in vielen Regionen ausgefallen.',
      exampleRu: 'После долгой засухи во многих регионах погиб урожай.',
    },
    {
      de: 'Kreislaufwirtschaft',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'экономика замкнутого цикла',
      example: 'In einer Kreislaufwirtschaft werden Produkte repariert und wiederverwertet, statt weggeworfen zu werden.',
      exampleRu: 'В экономике замкнутого цикла товары ремонтируют и перерабатывают, а не выбрасывают.',
    },
    {
      de: 'verringern',
      forms: 'verringerte, hat verringert',
      pos: 'verb',
      ru: 'уменьшать, сокращать',
      example: 'Durch eine bessere Dämmung kann man den Energieverbrauch deutlich verringern.',
      exampleRu: 'Благодаря лучшей теплоизоляции можно значительно сократить потребление энергии.',
    },
    {
      de: 'verzichten',
      forms: 'auf + Akk; verzichtete, hat verzichtet',
      pos: 'verb',
      ru: 'отказываться (от чего-либо)',
      example: 'Unsere Familie verzichtet seit einem Jahr auf Flugreisen.',
      exampleRu: 'Наша семья уже год не летает на самолётах.',
    },
    {
      de: 'recyceln',
      forms: 'recycelte, hat recycelt',
      pos: 'verb',
      ru: 'перерабатывать (отходы)',
      example: 'Aus recycelten Plastikflaschen werden zum Beispiel Jacken hergestellt.',
      exampleRu: 'Из переработанных пластиковых бутылок производят, например, куртки.',
    },
    {
      de: 'sich auswirken',
      forms: 'auf + Akk; wirkt sich aus, wirkte sich aus, hat sich ausgewirkt',
      pos: 'verb',
      ru: 'сказываться, влиять (на что-либо)',
      example: 'Die steigenden Temperaturen wirken sich auch auf die Landwirtschaft aus.',
      exampleRu: 'Рост температур сказывается и на сельском хозяйстве.',
    },
    {
      de: 'bedrohen',
      forms: 'bedrohte, hat bedroht',
      pos: 'verb',
      ru: 'угрожать',
      example: 'Der steigende Meeresspiegel bedroht viele Küstenstädte.',
      exampleRu: 'Повышение уровня моря угрожает многим прибрежным городам.',
    },
    {
      de: 'nachhaltig',
      pos: 'adj',
      ru: 'экологичный, устойчивый, долгосрочный',
      example: 'Wir sollten nachhaltiger leben und weniger konsumieren.',
      exampleRu: 'Нам следует жить экологичнее и меньше потреблять.',
    },
    {
      de: 'klimaneutral',
      pos: 'adj',
      ru: 'климатически нейтральный',
      example: 'Die Stadt will bis 2035 klimaneutral werden.',
      exampleRu: 'Город хочет стать климатически нейтральным к 2035 году.',
    },
    {
      de: 'unumkehrbar',
      pos: 'adj',
      ru: 'необратимый',
      example: 'Manche Folgen der Erderwärmung sind bereits unumkehrbar.',
      exampleRu: 'Некоторые последствия глобального потепления уже необратимы.',
    },
    {
      de: 'einen Beitrag leisten',
      forms: 'zu + Dat; leistet, leistete, hat geleistet',
      pos: 'phrase',
      ru: 'вносить вклад',
      example: 'Jeder kann einen Beitrag zum Klimaschutz leisten.',
      exampleRu: 'Каждый может внести вклад в защиту климата.',
    },
    {
      de: 'auf Kosten künftiger Generationen',
      pos: 'phrase',
      ru: 'за счёт будущих поколений',
      example: 'Wer heute Ressourcen verschwendet, lebt auf Kosten künftiger Generationen.',
      exampleRu: 'Тот, кто сегодня расточает ресурсы, живёт за счёт будущих поколений.',
    },
  ],
  listening: {
    title: 'Leben ohne eigenes Auto?',
    kind: 'dialog',
    text: `A: Markus, hast du dir die Unterlagen vom Carsharing-Anbieter angesehen?
B: Ja, gestern Abend. Ehrlich gesagt, Lena, bin ich immer noch skeptisch. Du tust so, als ob das Auto völlig überflüssig wäre.
A: Das habe ich nicht gesagt. Aber schau mal: Wir fahren fast nur am Wochenende. Unter der Woche steht es die ganze Zeit vor dem Haus. Würden wir es verkaufen, könnten wir im Jahr mindestens 3.000 Euro sparen.
B: Und was ist mit den Besuchen bei meinen Eltern auf dem Land? Mit dem Zug dauert das fast drei Stunden.
A: Dafür gibt es ja das Carsharing. Sofern wir rechtzeitig buchen, bekommen wir immer ein Auto. Und für kurze Strecken haben wir die Räder.
B: Schön und gut. Aber sollte eins der Kinder nachts krank werden, stehen wir ohne Auto da.
A: Dann nehmen wir ein Taxi. Das ist in fünf Jahren genau einmal passiert, Markus.
B: Na gut. Und im Winter? Fährst du dann auch jeden Tag mit dem Rad zur Arbeit?
A: Ja, es sei denn, es liegt Schnee. Dann nehme ich die Straßenbahn.
B: Hm. Weißt du, was mich eigentlich stört? Es fühlt sich an, als würden nur wir verzichten, während die großen Konzerne einfach weitermachen wie bisher.
A: Das verstehe ich. Aber hätten alle so gedacht, gäbe es heute auch keine Solaranlagen auf den Dächern. Irgendwer muss ja anfangen. Und ehrlich gesagt geht es mir nicht nur ums Klima. Die Kinder sollen lernen, dass man nicht für jede Strecke das Auto braucht.
B: Da hast du recht. Ich schlage vor, wir probieren es drei Monate aus. Wir lassen das Auto stehen und machen alles mit Carsharing, Bahn und Rad. Klappt das, verkaufen wir es im Frühling.
A: Einverstanden. Falls es nicht funktioniert, können wir immer noch umdenken.
B: Und falls es funktioniert, kaufen wir uns von dem Geld ein Lastenrad.
A: Siehst du, jetzt redest du schon, als wärst du von Anfang an dafür gewesen!`,
    questions: [
      {
        question: 'Worüber diskutieren Lena und Markus?',
        options: [
          'Ob sie ein Elektroauto kaufen sollen.',
          'Ob sie ihr eigenes Auto abschaffen sollen.',
          'Ob sie aufs Land ziehen sollen.',
          'Ob sie eine Solaranlage installieren sollen.',
        ],
        answer: 1,
      },
      {
        question: 'Warum glaubt Lena, dass sie kein eigenes Auto brauchen?',
        options: [
          'Weil sie das Auto fast nur am Wochenende nutzen.',
          'Weil Markus nicht gern Auto fährt.',
          'Weil das Auto alt und oft kaputt ist.',
          'Weil sie keinen Parkplatz haben.',
        ],
        answer: 0,
      },
      {
        question: 'Wann fährt Lena im Winter nicht mit dem Rad zur Arbeit?',
        options: [
          'Wenn es regnet.',
          'Wenn sie länger arbeiten muss.',
          'Wenn Schnee liegt.',
          'Wenn die Kinder krank sind.',
        ],
        answer: 2,
      },
      {
        question: 'Was stört Markus eigentlich?',
        options: [
          'Dass Carsharing zu teuer ist.',
          'Dass seine Eltern dagegen sind.',
          'Dass die Straßenbahn unzuverlässig ist.',
          'Dass Privatleute verzichten sollen, während große Firmen nichts ändern.',
        ],
        answer: 3,
      },
      {
        question: 'Worauf einigen sich die beiden am Ende?',
        options: [
          'Sie verkaufen das Auto sofort.',
          'Sie testen drei Monate lang ein Leben ohne eigenes Auto.',
          'Sie behalten das Auto und kaufen zusätzlich ein Lastenrad.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Ваш город хочет стать климатически нейтральным к 2035 году и собирает идеи жителей. Напишите официальное письмо в городскую администрацию со своими предложениями.',
    taskDe: 'Ihre Stadt möchte bis 2035 klimaneutral werden und bittet die Bürgerinnen und Bürger um Ideen. Schreiben Sie einen formellen Brief an die Stadtverwaltung mit Ihren Vorschlägen.',
    points: [
      'Aktuelle Umweltprobleme in Ihrer Stadt (z. B. Verkehr, Hitze, Müll)',
      'Zwei konkrete Vorschläge mit Begründung',
      'Mögliche Folgen, falls nichts getan wird',
      'Wie die Bürgerinnen und Bürger selbst einen Beitrag leisten können',
    ],
    minWords: 180,
    usefulPhrases: [
      'Mit Interesse habe ich gelesen, dass die Stadt Ideen für mehr Klimaschutz sammelt.',
      'Würde die Stadt mehr Radwege bauen, könnten …',
      'Sollte die Stadt nicht rechtzeitig handeln, …',
      'Sofern die Finanzierung gesichert ist, …',
      'Manchmal wirkt es so, als ob …',
      'Ich würde mich freuen, wenn meine Vorschläge berücksichtigt würden.',
    ],
  },
  speaking: {
    scenarioRu: 'Вы разговариваете с владельцем небольшой ремесленной фирмы, который возмущён новыми экологическими правилами города (запрет на въезд в центр для старых машин, требования к отоплению). Вы выступаете за защиту климата, но ищете компромисс.',
    aiRole: 'Sie sind Herr Brandt, Inhaber eines kleinen Handwerksbetriebs. Sie finden Klimaschutz grundsätzlich wichtig, halten aber neue Vorschriften wie Fahrverbote in der Innenstadt für zu teuer und praxisfern. Sprechen Sie natürliches Deutsch auf B2-Niveau, schildern Sie konkrete Probleme aus Ihrem Alltag und widersprechen Sie, wenn Ihr Gesprächspartner zu idealistisch argumentiert.',
    opener: 'Also ehrlich, diese neuen Fahrverbote in der Innenstadt machen mich fertig. Ich bin Handwerker, ich muss mit meinem Transporter zu den Kunden. Soll ich die Waschmaschine etwa mit dem Lastenrad bringen?',
    tasksRu: [
      'Покажите, что понимаете проблемы собеседника, но аргументируйте в пользу защиты климата.',
      'Используйте условные предложения без wenn (Würde die Stadt …, Sollte …) и союзы falls, sofern, es sei denn.',
      'Хотя бы один раз используйте нереальное сравнение (als ob / als + Konjunktiv II).',
      'Предложите компромиссы (исключения для ремесленников, субсидии, переходный период).',
    ],
    readAloud: [
      'Hätten wir früher konsequent in erneuerbare Energien investiert, wären wir heute weniger abhängig von fossilen Brennstoffen.',
      'Sollte die Erderwärmung nicht deutlich verlangsamt werden, könnten manche Folgen des Klimawandels schon bald unumkehrbar sein.',
      'Viele Menschen leben so, als ob die Ressourcen unseres Planeten unbegrenzt wären, und das geht auf Kosten künftiger Generationen.',
    ],
  },
};
