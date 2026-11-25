import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-05',
  level: 'C1',
  order: 5,
  title: 'Sprache und Identität',
  titleRu: 'Язык и идентичность',
  goalsRu: [
    'Уверенно использовать глаголы, существительные и прилагательные с устойчивым предложным управлением',
    'Правильно употреблять корреляты (darauf, dass …; daran, ob …; es) в сложных предложениях',
    'Понимать доклады о многоязычии, диалектах и языковой идентичности',
    'Писать официальное письмо в учреждение с обоснованной просьбой',
  ],
  grammar: {
    topic: 'Rektion und Korrelate',
    topicRu: 'Предложное управление и корреляты',
    explanationRu: `На уровне C1 важно владеть **управлением** не только глаголов, но и существительных и прилагательных. Предлог и падеж нужно учить вместе со словом:

- **глаголы:** *beruhen **auf** + Dat., sich berufen **auf** + Akk., zweifeln **an** + Dat., sich abfinden **mit**, neigen **zu**, appellieren **an** + Akk.*
- **существительные:** *der Anspruch **auf**, das Interesse **an**, die Sorge **um**, die Kritik **an**, der Einfluss **auf***
- **прилагательные:** *angewiesen **auf**, stolz **auf**, vertraut **mit**, zuständig **für**; sich (Dat.) einer Sache bewusst sein (генитив!)*

Один глагол может иметь разные предлоги с разным значением: *bestehen **auf** + Dat.* (настаивать), *bestehen **aus*** (состоять из), *bestehen **in*** (заключаться в).

**Корреляты.** Если предложное дополнение выражено придаточным (dass-, ob-, w-предложением или инфинитивным оборотом), в главном предложении стоит **местоименное наречие** da(r)- + предлог: *Ich bestehe **darauf**, dass … ; Es hängt **davon** ab, ob …* Русский язык здесь очень похож: «настаиваю **на том**, что…», «зависит **от того**, …». Используйте эту параллель!

У одних глаголов коррелят обязателен (*bestehen darauf, beruhen darauf, hinweisen darauf*), у других факультативен (*sich freuen (darauf), dass …*).

**Коррелят es** замещает придаточное-подлежащее или прямое дополнение: *Es freut mich, dass …; Ich halte **es** für wichtig, dass …* Если придаточное стоит **на первом месте**, *es* исчезает: *Dass du kommst, freut mich.*

**Типичные ошибки русскоговорящих:**

- калька русского управления: *denken über* (думать о) вместо *denken **an***; *teilnehmen in* вместо *teilnehmen **an***; *stolz mit* вместо *stolz **auf***;
- пропуск обязательного коррелята: *Ich bestehe, dass …* ✗;
- местоименное наречие для людей: *Ich denke daran* (о деле), но *Ich denke an **sie*** (о человеке);
- сохранение *es* в начале: *Dass …, freut es mich* ✗.`,
    table: [
      ['Слово', 'Управление', 'Перевод'],
      ['beruhen', 'auf + Dat', 'основываться на'],
      ['sich berufen', 'auf + Akk', 'ссылаться на'],
      ['zweifeln', 'an + Dat', 'сомневаться в'],
      ['sich abfinden', 'mit + Dat', 'смириться с'],
      ['der Anspruch', 'auf + Akk', 'право, притязание на'],
      ['angewiesen sein', 'auf + Akk', 'зависеть от, нуждаться в'],
      ['sich bewusst sein', '+ Gen (dessen)', 'осознавать'],
    ],
    examples: [
      {
        de: 'Viele Familien bestehen darauf, ihre Herkunftssprache an die Kinder weiterzugeben.',
        ru: 'Многие семьи настаивают на том, чтобы передать детям язык своего происхождения.',
      },
      {
        de: 'Ob ein Dialekt als Makel oder als Bereicherung empfunden wird, hängt stark davon ab, in welcher Region man lebt.',
        ru: 'Воспринимается ли диалект как недостаток или как богатство, сильно зависит от того, в каком регионе живёшь.',
      },
      {
        de: 'Die Sprachwissenschaftlerin wies darauf hin, dass Mehrsprachigkeit die geistige Flexibilität fördert.',
        ru: 'Лингвист указала на то, что многоязычие развивает гибкость мышления.',
      },
      {
        de: 'Es wird oft unterschätzt, wie sehr Sprache unser Denken prägt.',
        ru: 'Часто недооценивают, насколько сильно язык формирует наше мышление.',
      },
      {
        de: 'Kinder sind beim Spracherwerb auf vielfältige sprachliche Anregungen angewiesen.',
        ru: 'При освоении языка дети нуждаются в разнообразных языковых стимулах.',
      },
      {
        de: 'Viele Exilautoren haben sich nie damit abgefunden, im Alltag kaum noch ihre Muttersprache zu sprechen.',
        ru: 'Многие писатели-эмигранты так и не смирились с тем, что в повседневной жизни почти не говорят на родном языке.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die Theorie beruht ___ der Annahme, dass Sprache das Denken prägt.',
        options: ['auf', 'an', 'von', 'über'],
        answer: 0,
        explanationRu: '«beruhen auf» + Dat. — «основываться на». Падеж виден по артиклю «der Annahme» (Dat., ж. р.).',
      },
      {
        type: 'choice',
        prompt: 'Der Erfolg der Integration hängt maßgeblich ___ ab, ob Sprachkurse frühzeitig angeboten werden.',
        options: ['daran', 'davon', 'darauf', 'dafür'],
        answer: 1,
        explanationRu:
          '«abhängen von» → коррелят «davon», который отсылает к придаточному с «ob». Ср. русское «зависит от того, …».',
      },
      {
        type: 'choice',
        prompt: 'Viele Zugewanderte zweifeln ___, ob sie jemals akzentfrei sprechen werden.',
        options: ['darüber', 'davon', 'daran', 'darauf'],
        answer: 2,
        explanationRu: '«zweifeln an» + Dat. → коррелят «daran». Не калькируйте русское «сомневаться в»: предлог «in» здесь невозможен.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist korrekt?',
        options: [
          'Dass Kinder mehrsprachig aufwachsen, halte ich es für einen Gewinn.',
          'Dass Kinder mehrsprachig aufwachsen, halte ich für einen Gewinn.',
          'Ich halte für einen Gewinn, dass Kinder mehrsprachig aufwachsen.',
        ],
        answer: 1,
        explanationRu:
          'При «halten für» коррелят «es» обязателен, если придаточное стоит после главного. Если придаточное занимает первое место, «es» исчезает.',
      },
      {
        type: 'gap',
        prompt: 'Die Autorin setzt sich in ihrem Roman intensiv ___ der Frage auseinander, was Heimat bedeutet.',
        answers: ['mit'],
        explanationRu: '«sich auseinandersetzen mit» + Dat. — «разбираться, подробно заниматься чем-либо».',
      },
      {
        type: 'gap',
        prompt: 'Das wachsende Interesse ___ Minderheitensprachen ist erfreulich.',
        answers: ['an'],
        explanationRu:
          'Существительное «das Interesse» управляет предлогом «an» + Dat., тогда как глагол «sich interessieren» — предлогом «für». Это частая ловушка.',
      },
      {
        type: 'gap',
        prompt: 'Jeder Mensch hat einen Anspruch ___, vor Gericht in seiner Muttersprache gehört zu werden.',
        answers: ['darauf'],
        explanationRu:
          '«der Anspruch auf» + Akk. Когда дополнение выражено инфинитивным оборотом, в главном предложении нужен коррелят «darauf».',
      },
      {
        type: 'gap',
        prompt: 'Ich bedaure ___ sehr, dass ich die Sprache meiner Großeltern nie gelernt habe.',
        answers: ['es'],
        explanationRu:
          'Коррелят «es» замещает придаточное-дополнение, стоящее после главного предложения: «Ich bedaure es, dass …».',
      },
      {
        type: 'order',
        words: ['Viele Eltern', 'legen', 'großen Wert darauf,', 'dass', 'ihre Kinder', 'zweisprachig', 'aufwachsen.'],
        translationRu: 'Многие родители придают большое значение тому, чтобы их дети росли двуязычными.',
        explanationRu:
          '«Wert legen auf» → коррелят «darauf» в конце главного предложения, затем придаточное с «dass» и глаголом в конце.',
      },
      {
        type: 'order',
        words: ['Es', 'ist', 'unbestritten,', 'dass', 'die Sprache', 'unsere Identität', 'prägt.'],
        translationRu: 'Бесспорно, что язык формирует нашу идентичность.',
        explanationRu:
          '«Es» — коррелят придаточного-подлежащего, стоящего после главного предложения. В придаточном подлежащее «die Sprache» стоит перед дополнением.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените именную группу придаточным предложением с коррелятом.',
        prompt: 'Die Linguistin weist auf die Gefährdung vieler Minderheitensprachen hin.',
        answers: [
          'Die Linguistin weist darauf hin, dass viele Minderheitensprachen gefährdet sind.',
          'Die Linguistin weist darauf hin, dass viele Minderheitensprachen gefährdet seien.',
        ],
        explanationRu:
          '«hinweisen auf» + Akk. При замене существительного придаточным появляется коррелят «darauf», который стоит перед отделяемой приставкой «hin».',
      },
      {
        type: 'transform',
        instructionRu: 'Поставьте придаточное предложение на первое место.',
        prompt: 'Es freut mich, dass du dich für meine Muttersprache interessierst.',
        answers: ['Dass du dich für meine Muttersprache interessierst, freut mich.'],
        explanationRu:
          'Когда придаточное-подлежащее занимает первое место, коррелят «es» больше не нужен и опускается.',
      },
    ],
  },
  vocab: [
    {
      de: 'Mehrsprachigkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'многоязычие',
      example: 'Mehrsprachigkeit gilt heute als wertvolle Ressource und nicht mehr als Hindernis.',
      exampleRu: 'Многоязычие сегодня считается ценным ресурсом, а не препятствием.',
    },
    {
      de: 'Herkunftssprache',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'язык происхождения (семьи)',
      example: 'An einigen Schulen wird Unterricht in den Herkunftssprachen der Schüler angeboten.',
      exampleRu: 'В некоторых школах проводятся уроки на языках, на которых говорят в семьях учеников.',
    },
    {
      de: 'Spracherwerb',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'усвоение языка',
      example: 'Der frühe Spracherwerb verläuft bei Kindern weitgehend unbewusst.',
      exampleRu: 'Раннее усвоение языка у детей происходит в основном неосознанно.',
    },
    {
      de: 'Mundart',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'диалект, говор',
      example: 'In manchen Dörfern wird im Alltag fast ausschließlich Mundart gesprochen.',
      exampleRu: 'В некоторых деревнях в быту говорят почти исключительно на диалекте.',
    },
    {
      de: 'Zugehörigkeit',
      article: 'die',
      plural: '-en',
      forms: 'zu + Dat',
      pos: 'noun',
      ru: 'принадлежность',
      example: 'Sprache vermittelt ein Gefühl der Zugehörigkeit zu einer Gemeinschaft.',
      exampleRu: 'Язык дарит ощущение принадлежности к сообществу.',
    },
    {
      de: 'prägen',
      forms: 'prägt, prägte, hat geprägt',
      pos: 'verb',
      ru: 'формировать, накладывать отпечаток',
      example: 'Die Jahre im Ausland haben ihre Sicht auf die eigene Kultur nachhaltig geprägt.',
      exampleRu: 'Годы за границей надолго определили её взгляд на собственную культуру.',
    },
    {
      de: 'sich auseinandersetzen',
      forms: 'mit + Dat; setzt sich auseinander, setzte sich auseinander, hat sich auseinandergesetzt',
      pos: 'verb',
      ru: 'разбираться, критически осмыслять',
      example: 'In ihrem Essay setzt sie sich kritisch mit dem Begriff der Leitkultur auseinander.',
      exampleRu: 'В своём эссе она критически разбирает понятие «ведущей культуры».',
    },
    {
      de: 'beruhen',
      forms: 'auf + Dat',
      pos: 'verb',
      ru: 'основываться (на чём-либо)',
      example: 'Viele Vorurteile gegenüber Dialektsprechern beruhen auf Unwissenheit.',
      exampleRu: 'Многие предубеждения против носителей диалектов основаны на невежестве.',
    },
    {
      de: 'angewiesen',
      forms: 'auf + Akk',
      pos: 'adj',
      ru: 'зависимый, нуждающийся (в чём-либо)',
      example: 'Neu Zugewanderte sind oft auf Dolmetscher angewiesen.',
      exampleRu: 'Недавно прибывшие мигранты часто нуждаются в переводчиках.',
    },
    {
      de: 'sich abfinden',
      forms: 'mit + Dat; findet sich ab, fand sich ab, hat sich abgefunden',
      pos: 'verb',
      ru: 'смириться (с чем-либо)',
      example: 'Mit dem Verlust seiner Muttersprache wollte er sich nicht abfinden.',
      exampleRu: 'С утратой родного языка он не хотел мириться.',
    },
    {
      de: 'verdrängen',
      forms: 'verdrängt, verdrängte, hat verdrängt',
      pos: 'verb',
      ru: 'вытеснять',
      example: 'Das Hochdeutsche hat viele regionale Ausdrücke allmählich verdrängt.',
      exampleRu: 'Литературный немецкий постепенно вытеснил многие региональные выражения.',
    },
    {
      de: 'Anglizismus',
      article: 'der',
      plural: 'Anglizismen',
      pos: 'noun',
      ru: 'англицизм',
      example: 'Sprachpuristen kritisieren die Flut von Anglizismen in der Werbung.',
      exampleRu: 'Языковые пуристы критикуют поток англицизмов в рекламе.',
    },
    {
      de: 'Ausgrenzung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'исключение из общества, маргинализация',
      example: 'Sprachliche Ausgrenzung beginnt oft schon auf dem Schulhof.',
      exampleRu: 'Языковая дискриминация часто начинается уже на школьном дворе.',
    },
    {
      de: 'verankert',
      forms: 'in + Dat',
      pos: 'adj',
      ru: 'укоренённый, закреплённый',
      example: 'Die Rechte sprachlicher Minderheiten sind in der Verfassung verankert.',
      exampleRu: 'Права языковых меньшинств закреплены в конституции.',
    },
    {
      de: 'ausdrucksstark',
      pos: 'adj',
      ru: 'выразительный',
      example: 'Viele empfinden ihren Dialekt als besonders ausdrucksstark und direkt.',
      exampleRu: 'Многие считают свой диалект особенно выразительным и прямым.',
    },
    {
      de: 'Selbstverständnis',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'самосознание, представление о себе',
      example: 'Die Sprache ist ein zentraler Bestandteil des nationalen Selbstverständnisses.',
      exampleRu: 'Язык — центральная часть национального самосознания.',
    },
    {
      de: 'Sprachwandel',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'языковые изменения, эволюция языка',
      example: 'Was die einen als Sprachverfall beklagen, ist für andere schlicht natürlicher Sprachwandel.',
      exampleRu: 'То, что одни оплакивают как упадок языка, для других — просто естественная эволюция.',
    },
    {
      de: 'sich zugehörig fühlen',
      forms: '+ Dat / zu + Dat',
      pos: 'phrase',
      ru: 'чувствовать свою принадлежность',
      example: 'Erst als sie fließend Deutsch sprach, fühlte sie sich der neuen Heimat wirklich zugehörig.',
      exampleRu: 'Лишь когда она заговорила по-немецки свободно, она почувствовала, что по-настоящему принадлежит новой родине.',
    },
    {
      de: 'zwischen den Stühlen sitzen',
      forms: 'sitzt, saß, hat gesessen',
      pos: 'phrase',
      ru: 'оказаться между двух огней, не принадлежать ни к одной стороне',
      example: 'Als Kind von Einwanderern hatte er oft das Gefühl, zwischen den Stühlen zu sitzen.',
      exampleRu: 'Будучи ребёнком иммигрантов, он часто чувствовал, что не принадлежит ни к одной из сторон.',
    },
    {
      de: 'etwas in die Wiege gelegt bekommen',
      forms: 'bekommt, bekam, hat bekommen',
      pos: 'phrase',
      ru: 'получить что-либо от рождения',
      example: 'Die Liebe zu Sprachen hat sie gewissermaßen in die Wiege gelegt bekommen.',
      exampleRu: 'Любовь к языкам досталась ей, можно сказать, с рождения.',
    },
  ],
  listening: {
    title: 'Vortrag: Welche Sprache spricht die Seele?',
    kind: 'monolog',
    text: `Welche Sprache sprechen Sie, wenn Sie wütend sind? Wenn Sie träumen oder zählen? Für Millionen Menschen in Deutschland ist das keine banale Frage. Mehr als ein Viertel der Bevölkerung hat eine Einwanderungsgeschichte, und viele von ihnen bewegen sich täglich zwischen zwei oder mehr Sprachen.

Lange Zeit galt Mehrsprachigkeit hierzulande eher als Problem denn als Ressource. Eltern wurde geraten, mit ihren Kindern ausschließlich Deutsch zu sprechen, weil man befürchtete, die Herkunftssprache könne den Spracherwerb behindern. Heute wissen wir, dass diese Annahme auf einem Irrtum beruht. Kinder, die in ihrer Erstsprache sicher sind, lernen in der Regel auch die Zweitsprache besser. Entscheidend ist vielmehr, dass sie in beiden Sprachen reichhaltige Anregungen bekommen – darauf sind sie dringend angewiesen.

Bemerkenswert ist allerdings, dass nicht alle Sprachen gleich viel Ansehen genießen. Wer Englisch oder Französisch spricht, gilt als gebildet und weltoffen. Wer dagegen Türkisch oder Arabisch spricht, stößt nicht selten auf Ablehnung. Viele Jugendliche berichten, sie hätten sich in der Schule geschämt, ihre Herkunftssprache zu benutzen. Manche haben das Gefühl, zwischen den Stühlen zu sitzen: In Deutschland gelten sie als Ausländer, im Herkunftsland ihrer Eltern als Deutsche.

Sprache ist eben weit mehr als ein Kommunikationsmittel. Sie ist eng mit unserem Selbstverständnis verknüpft und signalisiert, zu welcher Gruppe wir gehören – oder eben nicht gehören. Das zeigt sich auch bei den Dialekten. Noch vor wenigen Jahrzehnten wurden Kinder, die Mundart sprachen, in der Schule belächelt. Inzwischen erleben viele Regionalsprachen eine kleine Renaissance, weil die Menschen Wert darauf legen, ihre regionale Zugehörigkeit zu zeigen.

Was folgt daraus für die Bildungspolitik? Ich plädiere dafür, Herkunftssprachen nicht als Defizit zu betrachten, sondern sie gezielt zu fördern – etwa durch herkunftssprachlichen Unterricht an regulären Schulen. Es wäre ein starkes Signal dafür, dass alle Sprachen, die hier gesprochen werden, zu diesem Land gehören. Denn wer erlebt, dass seine Sprache wertgeschätzt wird, fühlt sich eher zugehörig – und ist letztlich auch eher bereit, sich auf die Sprache der Mehrheit einzulassen.`,
    questions: [
      {
        question: 'Was wurde Eltern mit Migrationsgeschichte früher geraten?',
        options: [
          'mit den Kindern ausschließlich Deutsch zu sprechen',
          'die Kinder zweisprachig zu erziehen',
          'die Kinder in Sprachkurse im Herkunftsland zu schicken',
          'auf Dialekte zu verzichten',
        ],
        answer: 0,
      },
      {
        question: 'Was ist laut der Sprecherin für den erfolgreichen Spracherwerb entscheidend?',
        options: [
          'möglichst früher Englischunterricht',
          'der vollständige Verzicht auf die Erstsprache',
          'reichhaltige Anregungen in beiden Sprachen',
          'ein Aufenthalt im Ausland',
        ],
        answer: 2,
      },
      {
        question: 'Was stellt die Sprecherin in Bezug auf das Ansehen von Sprachen fest?',
        options: [
          'Alle Sprachen werden in Deutschland gleich geschätzt.',
          'Manche Sprachen gelten als prestigeträchtig, andere werden abgewertet.',
          'Arabisch und Türkisch gelten als besonders gebildet.',
        ],
        answer: 1,
      },
      {
        question: 'Was meint die Sprecherin mit der Wendung „zwischen den Stühlen sitzen“?',
        options: [
          'in der Schule keinen festen Sitzplatz haben',
          'sich nicht zwischen zwei Berufen entscheiden können',
          'mehrere Sprachen gleich gut beherrschen',
          'in keiner der beiden Gesellschaften als zugehörig gelten',
        ],
        answer: 3,
      },
      {
        question: 'Welche Forderung erhebt die Sprecherin am Ende?',
        options: [
          'Dialekte sollten im Unterricht verboten werden.',
          'Herkunftssprachen sollten an regulären Schulen gefördert werden.',
          'Deutschkurse sollten für alle verpflichtend sein.',
          'Englisch sollte zweite Amtssprache werden.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu:
      'Напишите официальное письмо в школьное управление (Schulamt) вашего города с просьбой ввести в школе ваших детей уроки русского языка как языка происхождения. Обоснуйте просьбу.',
    taskDe:
      'Schreiben Sie einen formellen Brief an das Schulamt Ihrer Stadt, in dem Sie die Einführung von herkunftssprachlichem Unterricht in Russisch an der Schule Ihrer Kinder anregen.',
    points: [
      'Stellen Sie sich kurz vor und nennen Sie den Anlass Ihres Schreibens.',
      'Begründen Sie Ihr Anliegen (Bedeutung der Herkunftssprache, Erkenntnisse der Forschung).',
      'Gehen Sie auf mögliche Einwände ein (Kosten, Organisation, Lehrkräfte) und bieten Sie Lösungen an.',
      'Bitten Sie um eine Stellungnahme oder einen Gesprächstermin.',
    ],
    minWords: 220,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'ich wende mich mit folgendem Anliegen an Sie: …',
      'Ich möchte Sie darauf aufmerksam machen, dass …',
      'Zahlreiche Studien weisen darauf hin, dass …',
      'Es liegt mir sehr am Herzen, dass …',
      'Mir ist durchaus bewusst, dass …',
      'Ich wäre Ihnen dankbar, wenn Sie …',
      'Für Rückfragen stehe ich Ihnen jederzeit gern zur Verfügung.',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы участвуете в городском форуме об интеграции. Ваш собеседник — депутат городского совета, который считает, что школа должна заниматься только немецким языком. Вы отстаиваете поддержку языков происхождения.',
    aiRole:
      'Sie sind Dr. Wolfgang Sattler, Stadtrat und bildungspolitischer Sprecher seiner Fraktion. Sie sprechen auf C1-Niveau, gewandt und mit idiomatischen Wendungen, und vertreten die Ansicht, dass Schulen ihre knappen Ressourcen ausschließlich in die Förderung des Deutschen stecken sollten. Sie stellen kritische Rückfragen und bestehen darauf, dass Ihr Gegenüber seine Behauptungen begründet.',
    opener:
      'Ich bin ja durchaus dafür, dass Familien ihre Kultur pflegen. Aber ich bestehe darauf, dass die Schule sich auf das Wesentliche konzentriert – und das ist nun mal Deutsch. Was spricht Ihrer Meinung nach dagegen?',
    tasksRu: [
      'Объясните, почему поддержка родного языка помогает и в изучении немецкого.',
      'Используйте не менее четырёх конструкций с коррелятами (darauf, dass …; davon, ob …; es …).',
      'Приведите личный пример или пример из исследований.',
      'Отреагируйте на аргумент о нехватке средств и предложите решение.',
    ],
    readAloud: [
      'Die weitverbreitete Annahme, die Herkunftssprache behindere den Erwerb des Deutschen, beruht nachweislich auf einem Irrtum.',
      'Viele Jugendliche haben das Gefühl, zwischen den Stühlen zu sitzen, weil sie sich weder hier noch im Herkunftsland ihrer Eltern wirklich zugehörig fühlen.',
      'Wie gut die Integration langfristig gelingt, hängt maßgeblich davon ab, ob Schulen Mehrsprachigkeit als Ressource begreifen.',
    ],
  },
};
