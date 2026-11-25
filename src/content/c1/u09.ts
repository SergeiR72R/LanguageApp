import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-09',
  level: 'C1',
  order: 9,
  title: 'Kunst und Literatur',
  titleRu: 'Искусство и литература',
  goalsRu: [
    'Осознанно выбирать, что поставить в начало предложения (Vorfeld), чтобы расставить акценты',
    'Правильно располагать местоимения, дополнения и обстоятельства в среднем поле (TeKaMoLo)',
    'Использовать вынос элементов за рамку (Ausklammerung) и различать стилистические регистры',
    'Понимать литературные рецензии и обсуждать произведения искусства',
  ],
  grammar: {
    topic: 'Satzgliedstellung, Ausklammerung und Stilebenen',
    topicRu: 'Порядок членов предложения, вынос за рамку и стилистические регистры',
    explanationRu: `Немецкое предложение удобно описывать **моделью полей**: *Vorfeld* (первое место) – левая часть рамки (спрягаемый глагол) – *Mittelfeld* (среднее поле) – правая часть рамки (причастие, инфинитив, приставка) – *Nachfeld* (позиция за рамкой).

**Vorfeld.** Сюда ставится ровно один член предложения — обычно то, что связывает с предыдущим текстом, или то, что нужно выделить: ***Den Roman** hat sie in drei Monaten geschrieben.* Если всегда начинать с подлежащего, текст звучит монотонно.

**Mittelfeld — основные правила:**

- **местоимения раньше существительных**, среди местоимений — *Nom. → Akk. → Dat.*: *Er hat **es ihr** gegeben.*
- два существительных: обычно **Dat. перед Akk.**: *Er hat **der Autorin den Preis** überreicht.* Но местоимение в Akk. стоит перед существительным в Dat.: *Er hat **ihn der Autorin** überreicht.*
- возвратное местоимение — как можно раньше, часто даже перед подлежащим-существительным: *Gestern hat **sich** die Autorin geäußert.*
- обстоятельства — по схеме **TeKaMoLo**: temporal – kausal – modal – lokal: *Sie probten **gestern wegen des Konzerts mit vollem Einsatz im Keller**.*
- известное → новое; *nicht* для отрицания всего предложения — в конце среднего поля.

**Nachfeld (Ausklammerung).** За рамку обычно выносятся сравнения с *als/wie* (*Sie ist berühmter geworden **als ihr Vater***), придаточные и инфинитивные группы. В разговорной речи — и длинные предложные группы.

**Стилистические регистры:** *gehoben* (книжный) — *erhalten, sich begeben, entschlafen*; *neutral* — *bekommen, gehen, sterben*; *umgangssprachlich* — *kriegen, abhauen, kapieren*. В одном тексте регистры не смешивают.

**Типичные ошибки русскоговорящих:**

- русский порядок слов свободный, поэтому местоимения ставят в конец: *Ich gebe dem Freund es* ✗ → *Ich gebe es dem Freund*;
- ставят два члена предложения перед глаголом: *Gestern die Autorin hat …* ✗;
- оставляют сравнение внутри рамки: *Er ist als ich größer geworden* ✗;
- используют разговорные слова (*kriegen, Typ, total*) в официальных текстах.`,
    table: [
      ['Vorfeld', 'Глагол 1', 'Mittelfeld', 'Глагол 2', 'Nachfeld'],
      ['Den Roman', 'hat', 'sie in drei Monaten', 'geschrieben.', '—'],
      ['Gestern', 'hat', 'sich die Autorin dazu', 'geäußert.', '—'],
      ['Die Jury', 'hat', 'ihn der Malerin', 'überreicht.', '—'],
      ['Sie', 'hat', 'mehr Bücher', 'gelesen', 'als ich.'],
    ],
    examples: [
      {
        de: 'Den diesjährigen Buchpreis hat eine erst 26-jährige Debütantin erhalten.',
        ru: 'Книжную премию в этом году получила дебютантка, которой всего 26 лет.',
      },
      {
        de: 'Die Kuratorin hat dem Publikum die Installation gestern ausführlich erläutert.',
        ru: 'Вчера куратор подробно объяснила публике инсталляцию.',
      },
      {
        de: 'Der Verlag hat ihn ihr bereits vor zwei Wochen zugeschickt.',
        ru: 'Издательство отправило ей его ещё две недели назад.',
      },
      {
        de: 'Der Maler arbeitete jahrelang aus finanzieller Not unter schwierigsten Bedingungen in einem winzigen Atelier.',
        ru: 'Художник годами работал из-за финансовой нужды в тяжелейших условиях в крошечной мастерской.',
      },
      {
        de: 'Ihr zweiter Roman ist noch vielschichtiger geworden als ihr Debüt.',
        ru: 'Её второй роман получился ещё многограннее, чем дебютный.',
      },
      {
        de: 'Der Dichter ist im Alter von 82 Jahren in seinem Haus am See entschlafen.',
        ru: 'Поэт почил в возрасте 82 лет в своём доме у озера.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Welche Wortstellung ist korrekt?',
        options: [
          'Die Autorin hat ihm es gestern geschickt.',
          'Die Autorin hat es ihm gestern geschickt.',
          'Die Autorin hat gestern ihm es geschickt.',
        ],
        answer: 1,
        explanationRu:
          'Местоимения стоят в начале среднего поля, причём местоимение в винительном падеже (es) предшествует местоимению в дательном (ihm).',
      },
      {
        type: 'choice',
        prompt: 'Welche Reihenfolge ist neutral (TeKaMoLo)? Die Band probte ___.',
        options: [
          'im Keller mit vollem Einsatz wegen des Konzerts gestern',
          'mit vollem Einsatz gestern im Keller wegen des Konzerts',
          'wegen des Konzerts im Keller gestern mit vollem Einsatz',
          'gestern wegen des Konzerts mit vollem Einsatz im Keller',
        ],
        answer: 3,
        explanationRu:
          'Нейтральный порядок обстоятельств: Temporal (gestern) – Kausal (wegen des Konzerts) – Modal (mit vollem Einsatz) – Lokal (im Keller).',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist korrekt?',
        options: [
          'Der zweite Band ist geworden spannender als der erste.',
          'Der zweite Band ist als der erste spannender geworden.',
          'Der zweite Band ist spannender geworden als der erste.',
        ],
        answer: 2,
        explanationRu:
          'Сравнение с «als» обычно выносится за рамку (в Nachfeld) — после причастия «geworden». Причастие нельзя ставить перед прилагательным внутри рамки.',
      },
      {
        type: 'choice',
        prompt: 'Welches Verb gehört zur Umgangssprache?',
        options: ['erhalten', 'bekommen', 'kriegen', 'empfangen'],
        answer: 2,
        explanationRu:
          '«kriegen» — разговорное. «bekommen» — нейтральное, «erhalten» и «empfangen» — книжные/официальные.',
      },
      {
        type: 'gap',
        prompt: 'Hast du der Kuratorin das Manuskript gegeben? – Ja, ich habe es ___ gestern gegeben.',
        answers: ['ihr'],
        explanationRu:
          'Оба дополнения заменены местоимениями: сначала винительный (es), затем дательный (ihr). Обстоятельство «gestern» следует за местоимениями.',
      },
      {
        type: 'gap',
        prompt: 'Gestern hat ___ der Regisseur endlich zu den Vorwürfen geäußert.',
        answers: ['sich'],
        explanationRu:
          'Возвратное местоимение стремится в начало среднего поля и может стоять даже перед подлежащим, выраженным существительным.',
      },
      {
        type: 'gap',
        prompt: 'Nach der Lesung ___ sich die Gäste in den Festsaal. (gehoben für „gingen“)',
        answers: ['begaben', 'begeben'],
        explanationRu: '«sich begeben» — книжный синоним «gehen». Форма прошедшего времени: begab – begaben (сильный глагол).',
      },
      {
        type: 'gap',
        prompt: 'Den Kritikern gefiel der Film ___ – das Publikum dagegen war begeistert.',
        answers: ['nicht', 'gar nicht', 'überhaupt nicht'],
        explanationRu:
          'При отрицании всего высказывания «nicht» стоит в конце среднего поля (здесь — в самом конце предложения, так как правой части рамки нет).',
      },
      {
        type: 'order',
        words: ['Der Verlag', 'hat', 'ihn', 'der Autorin', 'zugeschickt.'],
        translationRu: 'Издательство отправило его автору.',
        explanationRu: 'Местоимение в винительном падеже («ihn») стоит перед дополнением-существительным в дательном падеже («der Autorin»).',
      },
      {
        type: 'order',
        words: ['Sie', 'hat', 'in diesem Jahr', 'mehr Romane', 'gelesen', 'als je zuvor.'],
        translationRu: 'В этом году она прочитала больше романов, чем когда-либо прежде.',
        explanationRu: 'Сравнительная группа с «als» вынесена за рамку — после причастия «gelesen» (Ausklammerung).',
      },
      {
        type: 'transform',
        instructionRu: 'Замените оба дополнения личными местоимениями.',
        prompt: 'Die Jury hat der Malerin den Preis überreicht.',
        answers: ['Die Jury hat ihn ihr überreicht.'],
        explanationRu:
          '«der Malerin» → «ihr» (Dat.), «den Preis» → «ihn» (Akk.). Среди местоимений винительный падеж стоит перед дательным: «ihn ihr».',
      },
      {
        type: 'transform',
        instructionRu: 'Начните предложение с дополнения «den Roman», чтобы выделить его.',
        prompt: 'Die Autorin hat den Roman in nur drei Monaten geschrieben.',
        answers: ['Den Roman hat die Autorin in nur drei Monaten geschrieben.'],
        explanationRu:
          'В Vorfeld может стоять любой член предложения. Спрягаемый глагол остаётся на втором месте, подлежащее переходит в среднее поле.',
      },
    ],
  },
  vocab: [
    {
      de: 'Vernissage',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'вернисаж, открытие выставки',
      example: 'Zur Vernissage erschienen zahlreiche Prominente aus Kunst und Politik.',
      exampleRu: 'На вернисаж пришли многочисленные знаменитости из мира искусства и политики.',
    },
    {
      de: 'Spätwerk',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'позднее творчество',
      example: 'Im Spätwerk des Komponisten dominieren düstere, nachdenkliche Töne.',
      exampleRu: 'В позднем творчестве композитора преобладают мрачные, задумчивые тона.',
    },
    {
      de: 'Erzählperspektive',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'перспектива повествования',
      example: 'Der häufige Wechsel der Erzählperspektive verlangt dem Leser einiges ab.',
      exampleRu: 'Частая смена перспективы повествования требует от читателя немалых усилий.',
    },
    {
      de: 'Inszenierung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'постановка (спектакля)',
      example: 'Die neue Inszenierung des „Faust“ spaltet Publikum und Kritik.',
      exampleRu: 'Новая постановка «Фауста» разделила публику и критиков.',
    },
    {
      de: 'vielschichtig',
      pos: 'adj',
      ru: 'многогранный, многоплановый',
      example: 'Die Figuren des Romans sind psychologisch äußerst vielschichtig gezeichnet.',
      exampleRu: 'Персонажи романа психологически очень многогранны.',
    },
    {
      de: 'Gattung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'жанр, литературный род',
      example: 'Die Novelle ist eine Gattung, die im 19. Jahrhundert ihre Blütezeit erlebte.',
      exampleRu: 'Новелла — жанр, переживший расцвет в XIX веке.',
    },
    {
      de: 'Protagonist',
      article: 'der',
      plural: '-en',
      pos: 'noun',
      ru: 'главный герой',
      example: 'Der Protagonist gerät im Laufe der Handlung in einen tiefen moralischen Konflikt.',
      exampleRu: 'По ходу действия главный герой оказывается в глубоком моральном конфликте.',
    },
    {
      de: 'Metapher',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'метафора',
      example: 'Das Meer dient in ihren Gedichten als Metapher für Freiheit und Verlust.',
      exampleRu: 'Море в её стихах служит метафорой свободы и утраты.',
    },
    {
      de: 'verarbeiten',
      forms: 'verarbeitet, verarbeitete, hat verarbeitet',
      pos: 'verb',
      ru: 'перерабатывать, осмыслять (опыт, травму)',
      example: 'In ihrem Roman verarbeitet die Autorin die Flucht ihrer Familie.',
      exampleRu: 'В своём романе писательница осмысляет бегство своей семьи.',
    },
    {
      de: 'zeitgenössisch',
      pos: 'adj',
      ru: 'современный (об искусстве)',
      example: 'Das Museum hat sich auf zeitgenössische Kunst aus Osteuropa spezialisiert.',
      exampleRu: 'Музей специализируется на современном искусстве Восточной Европы.',
    },
    {
      de: 'eindringlich',
      pos: 'adj',
      ru: 'проникновенный, впечатляющий, настойчивый',
      example: 'Mit eindringlichen Bildern schildert der Film das Leben im Exil.',
      exampleRu: 'Проникновенными образами фильм рассказывает о жизни в эмиграции.',
    },
    {
      de: 'Rezension',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'рецензия',
      example: 'Die Rezension in der Wochenzeitung fiel ausgesprochen wohlwollend aus.',
      exampleRu: 'Рецензия в еженедельнике оказалась на редкость благожелательной.',
    },
    {
      de: 'verkörpern',
      forms: 'verkörpert, verkörperte, hat verkörpert',
      pos: 'verb',
      ru: 'воплощать; играть роль',
      example: 'Die Schauspielerin verkörpert die zerrissene Heldin mit großer Intensität.',
      exampleRu: 'Актриса с большой силой воплощает образ раздираемой противоречиями героини.',
    },
    {
      de: 'Kitsch',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'китч, безвкусица',
      example: 'Die Grenze zwischen Kunst und Kitsch ist nicht immer leicht zu ziehen.',
      exampleRu: 'Границу между искусством и китчем не всегда легко провести.',
    },
    {
      de: 'Feuilleton',
      article: 'das',
      plural: '-s',
      pos: 'noun',
      ru: 'раздел культуры в газете',
      example: 'Das Buch wurde im Feuilleton fast einhellig gefeiert.',
      exampleRu: 'В разделах культуры книгу почти единодушно превозносили.',
    },
    {
      de: 'wegweisend',
      pos: 'adj',
      ru: 'новаторский, определивший дальнейшее развитие',
      example: 'Die Ausstellung gilt als wegweisend für die Fotografie der Nachkriegszeit.',
      exampleRu: 'Эта выставка считается определяющей для фотографии послевоенного времени.',
    },
    {
      de: 'Avantgarde',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'авангард',
      example: 'Die russische Avantgarde hat die westeuropäische Kunst nachhaltig beeinflusst.',
      exampleRu: 'Русский авангард оказал долговременное влияние на западноевропейское искусство.',
    },
    {
      de: 'den Nerv der Zeit treffen',
      forms: 'trifft, traf, hat getroffen',
      pos: 'phrase',
      ru: 'попасть в нерв времени, отразить дух эпохи',
      example: 'Mit seinem Theaterstück über Einsamkeit hat der Autor den Nerv der Zeit getroffen.',
      exampleRu: 'Своей пьесой об одиночестве автор попал в самый нерв времени.',
    },
    {
      de: 'zwischen den Zeilen lesen',
      forms: 'liest, las, hat gelesen',
      pos: 'phrase',
      ru: 'читать между строк',
      example: 'Wer zwischen den Zeilen liest, erkennt die versteckte Kritik am Regime.',
      exampleRu: 'Тот, кто читает между строк, распознает скрытую критику режима.',
    },
    {
      de: 'Über Geschmack lässt sich streiten.',
      pos: 'phrase',
      ru: 'о вкусах можно поспорить (ироничный вариант поговорки «о вкусах не спорят»)',
      example: 'Die Fassade des neuen Museums ist gewagt – aber über Geschmack lässt sich bekanntlich streiten.',
      exampleRu: 'Фасад нового музея смелый, но о вкусах, как известно, можно спорить.',
    },
  ],
  listening: {
    title: 'Literatursendung „Zwischen den Zeilen“: Ein Debüt mit drei Stimmen',
    kind: 'monolog',
    text: `Guten Abend und willkommen zu unserer Sendung „Zwischen den Zeilen“. Im Mittelpunkt steht heute ein Buch, das im Feuilleton seit Wochen für Gesprächsstoff sorgt: „Das Haus am Fluss“, der Debütroman der 29-jährigen Leipziger Autorin Clara Weiss.

Erzählt wird die Geschichte dreier Generationen einer Familie, die ein altes Haus an der Elbe bewohnt. Die Großmutter hat dort den Krieg überlebt, die Mutter in der DDR ihre Jugend verbracht, und die Enkelin kehrt nach vielen Jahren in Berlin zurück, um das Haus zu verkaufen. Was zunächst wie eine klassische Familiensaga klingt, entpuppt sich bald als vielschichtiges Spiel mit Erzählperspektiven.

Bemerkenswert ist vor allem die Sprache. Weiss lässt jede der drei Frauen in einem eigenen Register sprechen. Die Großmutter erzählt in einem altertümlichen, fast feierlichen Ton, in dem Menschen nicht sterben, sondern entschlafen. Die Mutter hingegen spricht nüchtern und knapp, ihre Sätze wirken wie Protokolle. Die Enkelin wiederum redet, wie man in Berlin eben redet: schnell, ironisch, mit Anglizismen gespickt. Dass diese Stimmen nie in Kitsch abgleiten, ist eine beachtliche Leistung.

Auch formal wagt die Autorin einiges. Immer wieder stellt sie Satzglieder um, rückt Objekte an den Satzanfang oder lässt Sätze in einem nachgeschobenen Gedanken auslaufen. Dadurch entsteht ein eigentümlicher Rhythmus, der die mühsame Erinnerungsarbeit der Figuren hörbar macht. Wer zwischen den Zeilen zu lesen versteht, entdeckt zudem zahlreiche Anspielungen auf Fontane und Christa Wolf.

Ganz ohne Schwächen ist der Roman allerdings nicht. Gerade im Mittelteil verliert sich die Handlung zuweilen in Nebensträngen, und manche Metapher wirkt etwas bemüht. Einige Kritiker haben dem Buch deshalb vorgeworfen, es wolle zu viel auf einmal.

Ich sehe das anders. Gerade weil es nicht glatt ist, trifft dieses Buch den Nerv der Zeit: Es erzählt von Brüchen, von der Sprachlosigkeit zwischen den Generationen und davon, wie schwer es ist, Worte für die eigene Herkunft zu finden. Ein eindringliches, wegweisendes Debüt – und eines, über das man noch lange reden wird.`,
    questions: [
      {
        question: 'Wovon handelt der Roman „Das Haus am Fluss“?',
        options: [
          'von einem Architekten, der ein Haus an der Elbe baut',
          'von drei Generationen von Frauen einer Familie und ihrem Haus',
          'von der Jugend der Autorin in Leipzig',
          'von einem Kriminalfall in Berlin',
        ],
        answer: 1,
      },
      {
        question: 'Wodurch unterscheiden sich die drei Erzählerinnen vor allem?',
        options: [
          'durch ihre Sprache und ihr Register',
          'durch ihre Berufe',
          'durch ihre politischen Ansichten',
        ],
        answer: 0,
      },
      {
        question: 'Wie wird die Sprache der Mutter beschrieben?',
        options: [
          'feierlich und altertümlich',
          'ironisch und voller Anglizismen',
          'poetisch und bildreich',
          'nüchtern und knapp',
        ],
        answer: 3,
      },
      {
        question: 'Welche Schwäche des Romans nennt der Rezensent?',
        options: [
          'Die Figuren seien eindimensional.',
          'Die Sprache sei durchgehend kitschig.',
          'Die Handlung verliere sich im Mittelteil in Nebensträngen.',
          'Das Ende sei vorhersehbar.',
        ],
        answer: 2,
      },
      {
        question: 'Wie lautet das Gesamturteil des Rezensenten?',
        options: [
          'Das Buch wolle zu viel und sei deshalb gescheitert.',
          'Das Buch sei solide, aber wenig originell.',
          'Das Buch sei trotz kleiner Schwächen eindringlich und wegweisend.',
          'Das Buch eigne sich vor allem für Fachleute.',
        ],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu:
      'Напишите эссе-рассуждение: должно ли государство и в период бюджетной экономии увеличивать дотации театрам, музеям и библиотекам? Следите за единым книжным регистром и разнообразием начала предложений.',
    taskDe:
      'Verfassen Sie eine Erörterung zu der Frage, ob der Staat Theater, Museen und Bibliotheken auch in Zeiten knapper Kassen stärker fördern sollte.',
    points: [
      'Beschreiben Sie die aktuelle Situation (Sparzwänge, Besucherzahlen, Digitalisierung).',
      'Erläutern Sie, welche Bedeutung Kunst und Kultur für eine Gesellschaft haben.',
      'Gehen Sie auf Gegenargumente ein (andere Prioritäten, private Finanzierung, Eintrittspreise).',
      'Ziehen Sie ein begründetes Fazit.',
    ],
    minWords: 240,
    usefulPhrases: [
      'Gerade in Zeiten knapper Kassen stellt sich die Frage, …',
      'Unbestritten ist, dass …',
      'Dem lässt sich entgegenhalten, dass …',
      'Nicht zu unterschätzen ist dabei …',
      'Besonders schwer wiegt meines Erachtens …',
      'Was auf den ersten Blick einleuchtet, erweist sich bei näherer Betrachtung als …',
      'Aus diesen Gründen plädiere ich dafür, …',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы обсуждаете с литературным критиком, нужно ли сохранять классику (Гёте, Шиллер, Фонтане) в качестве обязательного школьного чтения или заменить её частично современной литературой. Вы — за большее место современных книг.',
    aiRole:
      'Sie sind Dr. Konrad Wiesner, renommierter Literaturkritiker und Herausgeber einer Klassiker-Reihe. Sie sprechen auf C1-Niveau, gewählt, bisweilen ironisch und mit gehobenem Wortschatz, und verteidigen den Kanon der Klassiker leidenschaftlich. Sie hinterfragen die Argumente Ihres Gegenübers scharf und verlangen konkrete Beispiele und Begründungen.',
    opener:
      'Goethe, Schiller, Fontane – das ist doch das Fundament unserer Kultur! Und Sie wollen ernsthaft, dass Schülerinnen und Schüler stattdessen Gegenwartsromane lesen? Erklären Sie mir das bitte.',
    tasksRu: [
      'Изложите свою позицию, варьируя начало предложений (не всегда с подлежащего).',
      'Приведите пример современного произведения и объясните, почему оно подходит для школы.',
      'Признайте ценность классики и предложите компромисс.',
      'Говорите в нейтрально-книжном регистре, избегая разговорных слов.',
    ],
    readAloud: [
      'Den Nerv der Zeit trifft dieser Roman gerade deshalb, weil er die Sprachlosigkeit zwischen den Generationen so eindringlich schildert.',
      'Gestern hat sich die Autorin im Feuilleton ausführlich zu den Vorwürfen geäußert, ihr Buch wolle zu viel auf einmal.',
      'Wer zwischen den Zeilen zu lesen versteht, entdeckt in ihrem vielschichtigen Debüt mehr Anspielungen auf die Klassiker als in manchem Lehrbuch.',
    ],
  },
};
