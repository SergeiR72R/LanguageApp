import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-03',
  level: 'B2',
  order: 3,
  title: 'Wissenschaft & Technik',
  titleRu: 'Наука и техника',
  goalsRu: [
    'Понимать научно-популярные тексты и подкасты о новых технологиях.',
    'Использовать Partizip I и Partizip II в роли определения перед существительным.',
    'Понимать и строить простые расширенные причастные определения (die von Forschern entwickelte Methode).',
    'Письменно высказывать позицию по спорному технологическому вопросу.',
  ],
  grammar: {
    topic: 'Partizipialattribute',
    topicRu: 'Причастия в роли определения',
    explanationRu: `**Причастные определения** — это причастия, которые стоят перед существительным как прилагательные и **склоняются как прилагательные**.

**Partizip I** (инфинитив + **-d**) обозначает активное действие, которое происходит одновременно: die steigend**en** Preise — растущие цены, ein schlafend**es** Kind — спящий ребёнок. По-русски это обычно причастия на **-ущий/-ющий/-ащий**.

**Partizip II** обозначает пассивное и/или завершённое действие: die veröffentlicht**e** Studie — опубликованное исследование. У глаголов, которые образуют Perfekt с sein, Partizip II имеет активное значение: der gestern angekommen**e** Zug — поезд, прибывший вчера.

**Расширенное определение (erweitertes Partizipialattribut).** Между артиклем и причастием могут стоять зависимые слова:

- die **von Forschern entwickelte** Methode = die Methode, die von Forschern entwickelt wurde
- der **seit Jahren andauernde** Streit = der Streit, der seit Jahren andauert

По-русски это похоже на причастный оборот, но в немецком весь оборот стоит **перед** существительным, между артиклем и существительным. Совет для чтения: найдите артикль, затем существительное, к которому он относится, и только потом читайте середину.

**Типичные ошибки русскоговорящих:**

- Ставят оборот после существительного, как в русском: *die Methode, entwickelt von Forschern* — правильно **die von Forschern entwickelte Methode**.
- Забывают окончание: *die entwickelt Methode* — причастие склоняется: die entwickelt**e** Methode, mit der entwickelt**en** Methode.
- Путают Partizip I и II: die steigenden Preise (цены растут сейчас) — die gestiegenen Preise (цены уже выросли).
- Забывают **-d** в Partizip I: *die wachsene Zahl* — правильно die wachsen**d**e Zahl.`,
    table: [
      ['Придаточное определительное', 'Причастное определение'],
      ['die Preise, die steigen', 'die steigenden Preise'],
      ['die Studie, die veröffentlicht wurde', 'die veröffentlichte Studie'],
      ['der Forscher, der in Berlin arbeitet', 'der in Berlin arbeitende Forscher'],
      ['das Medikament, das letztes Jahr zugelassen wurde', 'das letztes Jahr zugelassene Medikament'],
      ['die Temperatur, die stark gestiegen ist', 'die stark gestiegene Temperatur'],
    ],
    examples: [
      {
        de: 'Die ständig wachsende Datenmenge stellt Unternehmen vor neue Herausforderungen.',
        ru: 'Постоянно растущий объём данных ставит перед компаниями новые задачи.',
      },
      {
        de: 'Die im Juni veröffentlichte Studie bestätigt die bisherigen Ergebnisse.',
        ru: 'Опубликованное в июне исследование подтверждает прежние результаты.',
      },
      {
        de: 'Das Team arbeitet an einem selbstlernenden Algorithmus.',
        ru: 'Команда работает над самообучающимся алгоритмом.',
      },
      {
        de: 'Das von einem Start-up entwickelte Gerät misst den Blutzucker ohne Nadel.',
        ru: 'Прибор, разработанный стартапом, измеряет уровень сахара в крови без иглы.',
      },
      {
        de: 'Die in Laboren gezüchteten Organe könnten eines Tages Leben retten.',
        ru: 'Органы, выращенные в лабораториях, однажды могли бы спасать жизни.',
      },
      {
        de: 'Der vor zwei Jahren gestartete Satellit liefert täglich neue Bilder.',
        ru: 'Спутник, запущенный два года назад, ежедневно передаёт новые снимки.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Wegen der ___ Energiepreise suchen viele Firmen nach Alternativen.',
        options: ['steigenden', 'steigende', 'steigend', 'gestiegen'],
        answer: 0,
        explanationRu: 'Причастие склоняется как прилагательное: der (Genitiv Plural) + -en → der steigenden Energiepreise.',
      },
      {
        type: 'choice',
        prompt: 'Die ___ Ergebnisse wurden von anderen Teams überprüft.',
        options: ['veröffentlichenden', 'veröffentlichten', 'veröffentlicht', 'veröffentlichende'],
        answer: 1,
        explanationRu: 'Результаты не публикуют сами, их опубликовали — нужно пассивное Partizip II с окончанием -en (die … Ergebnisse, Plural).',
      },
      {
        type: 'choice',
        prompt: 'Welche Form entspricht dem Relativsatz „die Technologie, die in vielen Ländern eingesetzt wird“?',
        options: [
          'die eingesetzte in vielen Ländern Technologie',
          'die in vielen Ländern einsetzende Technologie',
          'die in vielen Ländern eingesetzte Technologie',
          'die Technologie in vielen Ländern eingesetzt',
        ],
        answer: 2,
        explanationRu: 'Пассив (eingesetzt wird) → Partizip II. Все зависимые слова стоят между артиклем и причастием: die in vielen Ländern eingesetzte Technologie.',
      },
      {
        type: 'choice',
        prompt: 'Das im Labor ___ Experiment muss wiederholt werden, weil ein Messfehler passiert ist.',
        options: ['durchführende', 'durchgeführt', 'durchgeführten', 'durchgeführte'],
        answer: 3,
        explanationRu: 'Эксперимент уже провели (пассив, завершённость) → Partizip II. После das в именительном падеже окончание -e: das durchgeführte Experiment.',
      },
      {
        type: 'gap',
        prompt: 'Ein ___ Auto erkennt Hindernisse mithilfe von Sensoren.',
        answers: ['selbstfahrendes', 'selbst fahrendes'],
        hintRu: 'selbst fahren, Partizip I',
        explanationRu: 'Автомобиль едет сам (активное действие) → Partizip I + окончание -es (ein … Auto, Neutrum, Nominativ).',
      },
      {
        type: 'gap',
        prompt: 'Die ___ Daten werden anonym gespeichert.',
        answers: ['gesammelten'],
        hintRu: 'sammeln, Partizip II',
        explanationRu: 'Данные собраны (пассив) → Partizip II gesammelt + окончание -en (die … Daten, Plural).',
      },
      {
        type: 'gap',
        prompt: 'Die von der Regierung ___ Fördergelder reichen nicht aus.',
        answers: ['bereitgestellten'],
        hintRu: 'bereitstellen, Partizip II',
        explanationRu: 'Средства предоставлены правительством (пассив, von + Dativ) → Partizip II bereitgestellt + -en.',
      },
      {
        type: 'gap',
        prompt: 'Der seit Jahren ___ Streit über Gentechnik ist noch nicht beendet.',
        answers: ['andauernde'],
        hintRu: 'andauern, Partizip I',
        explanationRu: 'Спор продолжается (активное, одновременное действие) → Partizip I andauernd + -e (der … Streit, Nominativ).',
      },
      {
        type: 'order',
        words: ['Die', 'von Forschern', 'entwickelte', 'Methode', 'spart', 'viel Energie.'],
        translationRu: 'Метод, разработанный исследователями, экономит много энергии.',
        explanationRu: 'Расширенное определение: артикль + зависимые слова + причастие + существительное.',
      },
      {
        type: 'order',
        words: ['Das', 'vor einem Jahr', 'eröffnete', 'Labor', 'arbeitet', 'mit modernsten Geräten.'],
        translationRu: 'Лаборатория, открытая год назад, работает с новейшим оборудованием.',
        explanationRu: 'Обстоятельство времени (vor einem Jahr) стоит внутри определения, между das и eröffnete.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное определительное причастным определением.',
        prompt: 'Die Studie, die gestern veröffentlicht wurde, sorgt für Aufsehen.',
        answers: ['Die gestern veröffentlichte Studie sorgt für Aufsehen.'],
        explanationRu: 'Пассив (veröffentlicht wurde) → Partizip II. Слово gestern переходит в определение перед причастием.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное определительное причастным определением.',
        prompt: 'Die Zahl der Nutzer, die ständig wächst, überrascht die Experten.',
        answers: ['Die ständig wachsende Zahl der Nutzer überrascht die Experten.'],
        explanationRu: 'Активное действие в настоящем (wächst) → Partizip I wachsend + -e. Определение относится к die Zahl, поэтому стоит перед ним.',
      },
    ],
  },
  vocab: [
    {
      de: 'Forschung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'исследование, научные исследования',
      example: 'Die Forschung an neuen Batterien wird von der EU gefördert.',
      exampleRu: 'Исследования новых аккумуляторов финансируются Евросоюзом.',
    },
    {
      de: 'Erkenntnis',
      article: 'die',
      plural: '-se',
      pos: 'noun',
      ru: 'знание, вывод, научные данные',
      example: 'Die neuesten Erkenntnisse der Hirnforschung überraschen selbst Fachleute.',
      exampleRu: 'Новейшие данные исследований мозга удивляют даже специалистов.',
    },
    {
      de: 'Durchbruch',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'прорыв',
      example: 'Den Forschern ist ein Durchbruch in der Krebstherapie gelungen.',
      exampleRu: 'Исследователям удалось совершить прорыв в лечении рака.',
    },
    {
      de: 'Erfindung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'изобретение',
      example: 'Der Buchdruck gilt als eine der wichtigsten Erfindungen der Menschheit.',
      exampleRu: 'Книгопечатание считается одним из важнейших изобретений человечества.',
    },
    {
      de: 'Anwendung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'применение, приложение',
      example: 'Die Anwendungen künstlicher Intelligenz reichen von der Medizin bis zur Landwirtschaft.',
      exampleRu: 'Сферы применения искусственного интеллекта простираются от медицины до сельского хозяйства.',
    },
    {
      de: 'Verfahren',
      article: 'das',
      plural: '-',
      pos: 'noun',
      ru: 'метод, технология, процедура',
      example: 'Mit dem neuen Verfahren lässt sich Wasser günstiger reinigen.',
      exampleRu: 'С помощью нового метода воду можно очищать дешевле.',
    },
    {
      de: 'Versuch',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'опыт, эксперимент; попытка',
      example: 'Der Versuch musste dreimal wiederholt werden.',
      exampleRu: 'Эксперимент пришлось повторить три раза.',
    },
    {
      de: 'Datenmenge',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'объём данных',
      example: 'Die riesigen Datenmengen werden in Rechenzentren gespeichert.',
      exampleRu: 'Огромные объёмы данных хранятся в центрах обработки данных.',
    },
    {
      de: 'Voraussetzung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'предпосылка, условие',
      example: 'Eine stabile Internetverbindung ist Voraussetzung für die Telemedizin.',
      exampleRu: 'Стабильное интернет-соединение — необходимое условие для телемедицины.',
    },
    {
      de: 'Fortschritt',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'прогресс, успех',
      example: 'Der technische Fortschritt bringt nicht nur Vorteile mit sich.',
      exampleRu: 'Технический прогресс приносит не только преимущества.',
    },
    {
      de: 'erforschen',
      forms: 'erforschte, hat erforscht',
      pos: 'verb',
      ru: 'исследовать, изучать',
      example: 'Das Team erforscht, wie sich Bienen orientieren.',
      exampleRu: 'Команда исследует, как ориентируются пчёлы.',
    },
    {
      de: 'nachweisen',
      forms: 'weist nach, wies nach, hat nachgewiesen',
      pos: 'verb',
      ru: 'доказывать, обнаруживать',
      example: 'Die Wirksamkeit des Medikaments konnte bisher nicht nachgewiesen werden.',
      exampleRu: 'Эффективность препарата до сих пор не удалось доказать.',
    },
    {
      de: 'einsetzen',
      forms: 'setzt ein, setzte ein, hat eingesetzt',
      pos: 'verb',
      ru: 'применять, использовать',
      example: 'In vielen Krankenhäusern werden bereits Roboter bei Operationen eingesetzt.',
      exampleRu: 'Во многих больницах роботов уже применяют при операциях.',
    },
    {
      de: 'ermöglichen',
      forms: 'ermöglichte, hat ermöglicht',
      pos: 'verb',
      ru: 'делать возможным',
      example: 'Neue Sensoren ermöglichen eine genauere Wettervorhersage.',
      exampleRu: 'Новые датчики делают возможным более точный прогноз погоды.',
    },
    {
      de: 'überprüfen',
      forms: 'überprüfte, hat überprüft',
      pos: 'verb',
      ru: 'проверять',
      example: 'Unabhängige Experten haben die Daten sorgfältig überprüft.',
      exampleRu: 'Независимые эксперты тщательно проверили данные.',
    },
    {
      de: 'bahnbrechend',
      pos: 'adj',
      ru: 'новаторский, революционный',
      example: 'Die Entdeckung des Penicillins war bahnbrechend für die Medizin.',
      exampleRu: 'Открытие пенициллина стало революционным для медицины.',
    },
    {
      de: 'zuverlässig',
      pos: 'adj',
      ru: 'надёжный',
      example: 'Die Software liefert erstaunlich zuverlässige Ergebnisse.',
      exampleRu: 'Программа выдаёт удивительно надёжные результаты.',
    },
    {
      de: 'umstritten',
      pos: 'adj',
      ru: 'спорный',
      example: 'Der Einsatz von Gesichtserkennung im öffentlichen Raum ist umstritten.',
      exampleRu: 'Использование распознавания лиц в общественных местах — спорный вопрос.',
    },
    {
      de: 'eine These aufstellen',
      forms: 'stellt auf, stellte auf, hat aufgestellt',
      pos: 'phrase',
      ru: 'выдвинуть тезис, гипотезу',
      example: 'Die Forscherin stellte die These auf, dass Schlaf das Gedächtnis stärkt.',
      exampleRu: 'Исследовательница выдвинула гипотезу, что сон укрепляет память.',
    },
    {
      de: 'in den Kinderschuhen stecken',
      pos: 'phrase',
      ru: 'быть в зачаточном состоянии',
      example: 'Die Entwicklung von Quantencomputern steckt noch in den Kinderschuhen.',
      exampleRu: 'Разработка квантовых компьютеров ещё находится в зачаточном состоянии.',
    },
  ],
  listening: {
    title: 'Wissen kompakt: Künstliche Intelligenz beim Hautarzt',
    kind: 'monolog',
    text: `Hallo und herzlich willkommen bei „Wissen kompakt“, dem Podcast für alle, die verstehen wollen, wie Forschung unseren Alltag verändert. Heute geht es um ein Thema, das gerade viel diskutiert wird: künstliche Intelligenz in der Medizin.

Am Universitätsklinikum Heidelberg wird seit einem Jahr eine von Informatikern und Hautärzten gemeinsam entwickelte Software eingesetzt. Sie analysiert Fotos von Muttermalen und erkennt Hautkrebs im Frühstadium. Die Ergebnisse der im März veröffentlichten Studie sind beeindruckend: In über 90 Prozent der Fälle lag das Programm richtig – und damit häufiger als die meisten der getesteten Ärztinnen und Ärzte.

Wie funktioniert das? Das System wurde mit mehr als 100.000 bereits diagnostizierten Bildern trainiert. Bei jedem neuen Foto vergleicht der selbstlernende Algorithmus bestimmte Merkmale wie Farbe, Form und Größe. Die ständig wachsende Datenmenge sorgt dafür, dass die Software immer zuverlässiger wird.

Ist das also ein Durchbruch? Die Projektleiterin, Professorin Andrea Hahn, bleibt vorsichtig. „Die Technologie steckt noch in den Kinderschuhen“, sagt sie. „Bei dunkler Haut zum Beispiel sind die Ergebnisse deutlich schlechter, weil die zum Training verwendeten Fotos überwiegend von hellhäutigen Patienten stammen.“ Dieses Problem lässt sich aber lösen, indem man vielfältigere Daten sammelt.

Umstritten ist außerdem die Frage der Verantwortung. Wer haftet, wenn die Software einen Tumor übersieht? Kritiker fordern deshalb klare gesetzliche Regeln, bevor künstliche Intelligenz in Arztpraxen flächendeckend eingesetzt wird.

Für Professorin Hahn ist die Sache klar: „Die KI ersetzt keine Ärztin und keinen Arzt. Sie ist ein Werkzeug, das uns hilft, schneller und genauer zu arbeiten.“ Die endgültige Entscheidung über die Diagnose trifft also weiterhin ein Mensch.

In der nächsten Folge sprechen wir über ein ebenso spannendes Thema: im Labor gezüchtetes Fleisch. Bis dahin – bleiben Sie neugierig!`,
    questions: [
      {
        question: 'Was kann die in Heidelberg eingesetzte Software?',
        options: [
          'Sie kann selbstständig operieren.',
          'Sie erkennt Hautkrebs auf Fotos.',
          'Sie ersetzt die Hautärzte vollständig.',
          'Sie entwickelt neue Medikamente.',
        ],
        answer: 1,
      },
      {
        question: 'Womit wurde das System trainiert?',
        options: [
          'Mit Bildern, deren Diagnose bereits bekannt war.',
          'Mit Daten aus Arztbriefen.',
          'Mit Videos von Operationen.',
          'Mit Befragungen von Patienten.',
        ],
        answer: 0,
      },
      {
        question: 'Warum sind die Ergebnisse bei dunkler Haut schlechter?',
        options: [
          'Die Kameras sind nicht gut genug.',
          'Die Ärzte haben damit weniger Erfahrung.',
          'Die Trainingsbilder zeigen vor allem helle Haut.',
          'Bei dunkler Haut gibt es mehr Muttermale.',
        ],
        answer: 2,
      },
      {
        question: 'Was fordern Kritiker?',
        options: [
          'Ein Verbot der Software.',
          'Mehr Geld für die Forschung.',
          'Kürzere Wartezeiten in Arztpraxen.',
          'Klare Gesetze zur Frage der Haftung.',
        ],
        answer: 3,
      },
      {
        question: 'Welche Haltung hat Professorin Hahn?',
        options: [
          'Sie glaubt, dass KI bald alle Diagnosen selbstständig stellen wird.',
          'Sie sieht KI als nützliches Werkzeug, das den Arzt nicht ersetzt.',
          'Sie lehnt den Einsatz von KI in der Medizin grundsätzlich ab.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Ваш город планирует установить в центре камеры с функцией распознавания лиц. Мэрия проводит опрос жителей. Напишите письменную позицию (Stellungnahme) по этому вопросу.',
    taskDe: 'Ihre Stadt plant, in der Innenstadt Kameras mit Gesichtserkennung zu installieren. Die Stadtverwaltung bittet die Bürgerinnen und Bürger um ihre Meinung. Schreiben Sie eine Stellungnahme.',
    points: [
      'Ziel der geplanten Maßnahme',
      'Mögliche Vorteile (z. B. Sicherheit, Aufklärung von Straftaten)',
      'Risiken (z. B. Datenschutz, fehlerhafte Erkennung)',
      'Ihre Position und ein Kompromissvorschlag',
    ],
    minWords: 170,
    usefulPhrases: [
      'Zu der geplanten Einführung von … möchte ich wie folgt Stellung nehmen.',
      'Die von der Stadt genannten Argumente überzeugen mich nur teilweise.',
      'Befürworter weisen darauf hin, dass …',
      'Ein nicht zu unterschätzendes Risiko besteht darin, dass …',
      'Es ist fraglich, ob …',
      'Ich schlage daher vor, …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы звоните в радиопередачу о технике. Ведущий обсуждает со слушателями беспилотные автомобили и восторгается техническим прогрессом.',
    aiRole: 'Sie sind Moderator einer Radiosendung über Technik und diskutieren mit einem Hörer über selbstfahrende Autos. Sie sind begeistert vom technischen Fortschritt und halten Bedenken oft für übertrieben. Sprechen Sie natürliches Deutsch auf B2-Niveau, stellen Sie Nachfragen und widersprechen Sie mit Gegenargumenten.',
    opener: 'Herzlich willkommen in unserer Sendung! Wir sprechen heute über selbstfahrende Autos. In einigen Städten fahren schon Robotertaxis ganz ohne Fahrer. Würden Sie in so ein Auto einsteigen?',
    tasksRu: [
      'Выскажите своё отношение к беспилотным автомобилям.',
      'Приведите аргументы за и против, используя минимум три причастных определения (die getesteten Fahrzeuge, die ständig wachsende Zahl …).',
      'Возразите ведущему, когда он преуменьшает риски.',
      'Назовите условия, при которых технология была бы для вас приемлемой.',
    ],
    readAloud: [
      'Die von einem internationalen Forschungsteam entwickelte Software erkennt Krankheiten oft früher als erfahrene Ärztinnen und Ärzte.',
      'Die ständig wachsende Datenmenge stellt Wissenschaftler vor die Frage, wie sich persönliche Informationen zuverlässig schützen lassen.',
      'Trotz der beeindruckenden Fortschritte steckt die Technologie selbstfahrender Autos in vielen Bereichen noch in den Kinderschuhen.',
    ],
  },
};
