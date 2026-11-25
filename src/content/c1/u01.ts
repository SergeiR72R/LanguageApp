import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-01',
  level: 'C1',
  order: 1,
  title: 'Wissenschaft und Forschung',
  titleRu: 'Наука и исследования',
  goalsRu: [
    'Понимать и строить сложные именные группы, типичные для научного стиля',
    'Преобразовывать расширенные причастные определения в относительные придаточные и обратно',
    'Понимать лекции и научно-популярные доклады о проблемах современной науки',
    'Письменно излагать суть научной дискуссии и аргументированно выражать свою позицию',
  ],
  grammar: {
    topic: 'Nominalstil und erweiterte Partizipialattribute',
    topicRu: 'Именной стиль и расширенные причастные определения',
    explanationRu: `В научных текстах немецкий язык предпочитает **именной стиль** (Nominalstil): вместо придаточных предложений используются отглагольные существительные и развёрнутые определения. Ключевая конструкция — **расширенное причастное определение** (erweitertes Partizipialattribut): между артиклем и существительным «встраивается» целая фраза.

- **Partizip I** (инфинитив + -d) выражает активное действие, одновременное с главным: *die **seit Jahren steigende** Zahl* = die Zahl, die seit Jahren steigt.
- **Partizip II** переходных глаголов выражает пассив: *die **im Labor durchgeführte** Studie* = die Studie, die im Labor durchgeführt wurde.
- **Partizip II** глаголов движения и изменения состояния с sein — завершённое активное действие: *die **stark gesunkene** Temperatur* = die Temperatur, die stark gesunken ist.

**Как читать конструкцию:** найдите артикль, затем «перепрыгните» к существительному, к которому он относится. Причастие перед существительным станет сказуемым относительного придаточного, а всё, что стоит между артиклем и причастием, — его дополнениями и обстоятельствами.

**Обратное преобразование:** уберите относительное местоимение и вспомогательный глагол, поставьте причастие прямо перед существительным и склоняйте его как прилагательное: *die Ergebnisse, die vom Team veröffentlicht wurden → die vom Team veröffentlichten Ergebnisse*.

**Типичные ошибки русскоговорящих:**

- В русском причастие обычно открывает оборот («проведённое **в лаборатории** исследование»), в немецком оно всегда стоит **последним**, непосредственно перед существительным: *die im Labor durchgeführte Studie*.
- Забывают **окончание прилагательного**: *die durchgeführt Studie* ✗.
- Образуют Partizip II от глаголов с haben без прямого дополнения: *die zugenommene Zahl* ✗ — правильно *die zunehmende Zahl* или *die Zahl, die zugenommen hat*.
- Путают значения: *die steigende Zahl* (растущее) ≠ *die gestiegene Zahl* (выросшее).

Для именного стиля важно также **именное управление**: *die Daten auswerten → die Auswertung **der** Daten; auf etwas hinweisen → der Hinweis **auf** etwas*. Исполнитель действия передаётся через **durch** или **von**.`,
    table: [
      ['Относительное придаточное', 'Причастное определение'],
      ['die Studie, die im Labor durchgeführt wurde', 'die im Labor durchgeführte Studie'],
      ['die Zahl, die seit Jahren steigt', 'die seit Jahren steigende Zahl'],
      ['die Temperatur, die stark gesunken ist', 'die stark gesunkene Temperatur'],
      ['Daten, die weltweit erhoben werden', 'weltweit erhobene Daten'],
    ],
    examples: [
      {
        de: 'Die von einem internationalen Forschungsteam durchgeführte Studie bestätigt die bisherigen Annahmen nur teilweise.',
        ru: 'Исследование, проведённое международной группой учёных, лишь частично подтверждает прежние предположения.',
      },
      {
        de: 'Die seit Jahrzehnten kontinuierlich steigende Zahl an Publikationen erschwert den Überblick über den Forschungsstand.',
        ru: 'Непрерывно растущее на протяжении десятилетий число публикаций затрудняет обзор состояния исследований.',
      },
      {
        de: 'Die in der Fachzeitschrift veröffentlichten Ergebnisse konnten bislang von keinem anderen Labor reproduziert werden.',
        ru: 'Результаты, опубликованные в специализированном журнале, до сих пор не удалось воспроизвести ни одной другой лаборатории.',
      },
      {
        de: 'Nach Abschluss der Datenerhebung erfolgt die Auswertung der Messergebnisse.',
        ru: 'После завершения сбора данных проводится анализ результатов измерений.',
      },
      {
        de: 'Aufgrund der unzureichenden Finanzierung des Projekts musste die Untersuchung vorzeitig abgebrochen werden.',
        ru: 'Из-за недостаточного финансирования проекта исследование пришлось досрочно прекратить.',
      },
      {
        de: 'Die Forscherin, deren Hypothese lange belächelt worden war, erhielt schließlich den Nobelpreis.',
        ru: 'Исследовательница, над гипотезой которой долго посмеивались, в итоге получила Нобелевскую премию.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die ___ Daten müssen noch statistisch ausgewertet werden.',
        options: ['im Experiment gewinnenden', 'im Experiment gewonnenen', 'gewonnenen im Experiment', 'im Experiment gewonnene'],
        answer: 1,
        explanationRu:
          'Данные были получены (пассив) → Partizip II «gewonnen». Зависимые слова стоят перед причастием; после определённого артикля во мн. ч. окончание -en.',
      },
      {
        type: 'choice',
        prompt: 'Welche Umformung entspricht dem Satz: „Die Zahl der Studierenden, die sich für Naturwissenschaften entscheiden, wächst.“?',
        options: [
          'Die Zahl der für Naturwissenschaften entschiedenen Studierenden wächst.',
          'Die Zahl der sich entscheidenden für Naturwissenschaften Studierenden wächst.',
          'Die Zahl der sich für Naturwissenschaften entscheidenden Studierenden wächst.',
          'Die Zahl der Naturwissenschaften entscheidenden Studierenden wächst.',
        ],
        answer: 2,
        explanationRu:
          'Активное одновременное действие → Partizip I «entscheidend». Возвратное местоимение «sich» сохраняется и стоит в начале оборота, причастие — последним перед существительным.',
      },
      {
        type: 'choice',
        prompt: 'Die bereits vor zehn Jahren ___ Methode gilt heute als Standard.',
        options: ['entwickelnde', 'entwickelten', 'entwickelt', 'entwickelte'],
        answer: 3,
        explanationRu:
          'Метод был разработан (пассив, завершённость) → Partizip II. Им. п. ед. ч. женского рода после «die» → окончание -e: «entwickelte».',
      },
      {
        type: 'choice',
        prompt: 'Welche Nominalphrase entspricht dem Nebensatz „weil die Mittel gekürzt wurden“?',
        options: [
          'aufgrund der Kürzung der Mittel',
          'aufgrund die Kürzung der Mittel',
          'aufgrund der Kürzung den Mitteln',
          'trotz der Kürzung der Mittel',
        ],
        answer: 0,
        explanationRu:
          '«aufgrund» требует генитива (der Kürzung), а объект номинализированного действия также стоит в генитиве (der Mittel). «trotz» выражает уступку, а не причину.',
      },
      {
        type: 'gap',
        prompt: 'Die von der Ethikkommission ___ (genehmigen) Versuchsreihe beginnt im März.',
        answers: ['genehmigte'],
        hintRu: 'Partizip II + окончание',
        explanationRu:
          'Серия экспериментов одобрена комиссией (пассив) → Partizip II «genehmigt» + окончание -e (им. п., ж. р., после «die»).',
      },
      {
        type: 'gap',
        prompt: 'Wir sprechen über die in den letzten Jahren stark ___ (zunehmen) Zahl der Plagiatsfälle.',
        answers: ['zunehmende'],
        hintRu: 'Можно ли сказать «zugenommene»?',
        explanationRu:
          '«zunehmen» спрягается с haben и не имеет прямого дополнения, поэтому Partizip II нельзя использовать как определение. Остаётся Partizip I: «die stark zunehmende Zahl» (вин. п., ж. р.).',
      },
      {
        type: 'gap',
        prompt: 'Die ___ der Ergebnisse erfolgt im nächsten Kapitel. (darstellen)',
        answers: ['Darstellung'],
        explanationRu:
          'Именной стиль: глагол «darstellen» → существительное «die Darstellung». Объект действия переходит в генитив: «die Darstellung der Ergebnisse».',
      },
      {
        type: 'gap',
        prompt: 'Die Studie, ___ Ergebnisse gestern veröffentlicht wurden, sorgt für Aufsehen.',
        answers: ['deren'],
        explanationRu:
          'Относительное местоимение в генитиве: «результаты которого исследования». Для существительного женского рода (die Studie) → «deren».',
      },
      {
        type: 'order',
        words: ['Die', 'seit Jahren kontrovers', 'diskutierte', 'Frage', 'nach dem Ursprung', 'bleibt', 'ungeklärt.'],
        translationRu: 'Вопрос о происхождении, который годами обсуждается в спорах, остаётся невыясненным.',
        explanationRu:
          'Внутри рамки «артикль … существительное» стоят обстоятельства, затем причастие непосредственно перед существительным. Предложное дополнение «nach dem Ursprung» следует за существительным.',
      },
      {
        type: 'order',
        words: ['Die', 'von den Forschern', 'entwickelte', 'Methode', 'gilt als', 'umstritten.'],
        translationRu: 'Метод, разработанный исследователями, считается спорным.',
        explanationRu:
          'Агент «von den Forschern» входит в причастный оборот и стоит перед причастием «entwickelte», которое замыкает определение перед существительным.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените относительное придаточное расширенным причастным определением.',
        prompt: 'Die Forscherin präsentierte Ergebnisse, die in mehreren Ländern erhoben worden waren.',
        answers: ['Die Forscherin präsentierte in mehreren Ländern erhobene Ergebnisse.'],
        explanationRu:
          'Пассив → Partizip II «erhoben». Артикля нет, поэтому сильное окончание мн. ч. вин. п.: «-e». Обстоятельство «in mehreren Ländern» стоит перед причастием.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените причастное определение относительным придаточным.',
        prompt: 'Die an der Studie teilnehmenden Probanden wurden vorab umfassend informiert.',
        answers: [
          'Die Probanden, die an der Studie teilnahmen, wurden vorab umfassend informiert.',
          'Die Probanden, die an der Studie teilnehmen, wurden vorab umfassend informiert.',
        ],
        explanationRu:
          'Partizip I выражает одновременность и активный залог → придаточное с активным глаголом. Поскольку главное предложение в прошедшем времени, естественнее всего «teilnahmen». Отделяемая приставка в придаточном не отделяется.',
      },
    ],
  },
  vocab: [
    {
      de: 'Erkenntnis',
      article: 'die',
      plural: '-se',
      pos: 'noun',
      ru: 'знание, вывод, (научное) открытие',
      example: 'Die neuen Erkenntnisse der Hirnforschung verändern unser Verständnis von Lernen.',
      exampleRu: 'Новые данные исследований мозга меняют наше понимание обучения.',
    },
    {
      de: 'Hypothese',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'гипотеза',
      example: 'Das Team stellte die Hypothese auf, dass Schlafmangel die Entscheidungsfähigkeit beeinträchtigt.',
      exampleRu: 'Команда выдвинула гипотезу, что недосыпание ухудшает способность принимать решения.',
    },
    {
      de: 'widerlegen',
      forms: 'widerlegt, widerlegte, hat widerlegt',
      pos: 'verb',
      ru: 'опровергать',
      example: 'Die Annahme wurde durch eine groß angelegte Folgestudie eindeutig widerlegt.',
      exampleRu: 'Это предположение было однозначно опровергнуто масштабным последующим исследованием.',
    },
    {
      de: 'verwerfen',
      forms: 'verwirft, verwarf, hat verworfen',
      pos: 'verb',
      ru: 'отвергать, отбрасывать',
      example: 'Nach der Auswertung der Daten musste die ursprüngliche Theorie verworfen werden.',
      exampleRu: 'После анализа данных первоначальную теорию пришлось отвергнуть.',
    },
    {
      de: 'Stichprobe',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'выборка',
      example: 'Mit einer Stichprobe von nur 30 Personen lassen sich keine allgemeingültigen Aussagen treffen.',
      exampleRu: 'На выборке всего из 30 человек нельзя делать общезначимые выводы.',
    },
    {
      de: 'repräsentativ',
      pos: 'adj',
      ru: 'репрезентативный',
      example: 'Die Umfrage gilt als repräsentativ für die erwachsene Bevölkerung Deutschlands.',
      exampleRu: 'Опрос считается репрезентативным для взрослого населения Германии.',
    },
    {
      de: 'Fachzeitschrift',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'специализированный (научный) журнал',
      example: 'Ihr Aufsatz erscheint in einer der renommiertesten Fachzeitschriften des Fachs.',
      exampleRu: 'Её статья выходит в одном из самых авторитетных журналов в этой области.',
    },
    {
      de: 'Begutachtungsverfahren',
      article: 'das',
      plural: '-',
      pos: 'noun',
      ru: 'процедура рецензирования',
      example: 'Jeder Beitrag durchläuft ein anonymes Begutachtungsverfahren, bevor er veröffentlicht wird.',
      exampleRu: 'Каждая статья проходит анонимное рецензирование, прежде чем её опубликуют.',
    },
    {
      de: 'Forschungsantrag',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'заявка на финансирование исследования',
      example: 'Nur etwa jeder fünfte Forschungsantrag wird von der Stiftung bewilligt.',
      exampleRu: 'Фонд одобряет лишь примерно каждую пятую заявку на исследование.',
    },
    {
      de: 'empirisch',
      pos: 'adj',
      ru: 'эмпирический, опытный',
      example: 'Für diese These gibt es bislang keine empirischen Belege.',
      exampleRu: 'Для этого тезиса пока нет эмпирических доказательств.',
    },
    {
      de: 'Datenerhebung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'сбор данных',
      example: 'Die Datenerhebung erfolgte über standardisierte Online-Fragebögen.',
      exampleRu: 'Сбор данных проводился с помощью стандартизированных онлайн-анкет.',
    },
    {
      de: 'auswerten',
      forms: 'wertet aus, wertete aus, hat ausgewertet',
      pos: 'verb',
      ru: 'анализировать, обрабатывать (данные)',
      example: 'Die Messergebnisse werden derzeit von zwei unabhängigen Teams ausgewertet.',
      exampleRu: 'Результаты измерений сейчас анализируют две независимые группы.',
    },
    {
      de: 'nachweisen',
      forms: 'weist nach, wies nach, hat nachgewiesen',
      pos: 'verb',
      ru: 'доказывать, обнаруживать',
      example: 'Ein ursächlicher Zusammenhang konnte bisher nicht nachgewiesen werden.',
      exampleRu: 'Причинно-следственную связь до сих пор доказать не удалось.',
    },
    {
      de: 'Befund',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'результат (исследования), данные',
      example: 'Die Befunde decken sich weitgehend mit früheren Untersuchungen.',
      exampleRu: 'Полученные данные в целом совпадают с результатами прежних исследований.',
    },
    {
      de: 'Wechselwirkung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'взаимодействие, взаимовлияние',
      example: 'Die Wechselwirkungen zwischen Genen und Umwelt sind noch kaum erforscht.',
      exampleRu: 'Взаимодействие генов и окружающей среды пока почти не изучено.',
    },
    {
      de: 'bahnbrechend',
      pos: 'adj',
      ru: 'новаторский, прорывной',
      example: 'Ihre bahnbrechende Entdeckung revolutionierte die Krebstherapie.',
      exampleRu: 'Её прорывное открытие произвело революцию в лечении рака.',
    },
    {
      de: 'fundiert',
      pos: 'adj',
      ru: 'обоснованный, основательный',
      example: 'Der Bericht liefert eine wissenschaftlich fundierte Grundlage für politische Entscheidungen.',
      exampleRu: 'Доклад даёт научно обоснованную базу для политических решений.',
    },
    {
      de: 'etwas infrage stellen',
      forms: 'stellt infrage, stellte infrage, hat infrage gestellt',
      pos: 'phrase',
      ru: 'ставить что-либо под сомнение',
      example: 'Die neuen Daten stellen die gängige Lehrmeinung grundlegend infrage.',
      exampleRu: 'Новые данные ставят под сомнение общепринятую научную позицию.',
    },
    {
      de: 'auf Resonanz stoßen',
      forms: 'stößt, stieß, ist gestoßen',
      pos: 'phrase',
      ru: 'встретить отклик',
      example: 'Der Vorschlag, alle Rohdaten offenzulegen, stieß in der Fachwelt auf große Resonanz.',
      exampleRu: 'Предложение раскрывать все исходные данные встретило в научном сообществе широкий отклик.',
    },
    {
      de: 'einen Beitrag leisten',
      forms: 'zu + Dat',
      pos: 'phrase',
      ru: 'вносить вклад (во что-либо)',
      example: 'Die Studie leistet einen wichtigen Beitrag zur Erforschung seltener Krankheiten.',
      exampleRu: 'Исследование вносит важный вклад в изучение редких заболеваний.',
    },
  ],
  listening: {
    title: 'Vorlesung: Die Replikationskrise',
    kind: 'monolog',
    text: `Meine Damen und Herren, in der heutigen Vorlesung möchte ich mich einem Thema widmen, das die Fachwelt seit gut fünfzehn Jahren beschäftigt: der sogenannten Replikationskrise. Gemeint ist die erstaunlich hohe Zahl an Studien, deren Befunde sich bei einer Wiederholung nicht bestätigen lassen.

Im Rahmen eines groß angelegten, 2015 in der Fachzeitschrift „Science“ veröffentlichten Projekts wurden einhundert psychologische Experimente wiederholt. Das Ergebnis war ernüchternd: Nur etwa ein Drittel der ursprünglich als signifikant eingestuften Effekte konnte erneut nachgewiesen werden. Ähnliche, wenn auch weniger dramatische Befunde gibt es inzwischen aus der Medizin und der Ökonomie.

Wie lässt sich das erklären? Ein erster Grund liegt in den häufig viel zu kleinen Stichproben. Wer nur zwanzig Versuchspersonen untersucht, erhält leicht zufällige Ergebnisse, die mit der Wirklichkeit wenig zu tun haben. Ein zweiter Grund ist struktureller Natur: Die Fachzeitschriften bevorzugen spektakuläre, positive Resultate. Eine sauber durchgeführte, aber ergebnislose Untersuchung stößt dagegen kaum auf Resonanz – sie verschwindet in der Schublade. Drittens erzeugt das stark an Publikationszahlen orientierte Belohnungssystem der Universitäten einen erheblichen Druck. Wer seine Forschungsanträge bewilligt bekommen möchte, muss eine möglichst lange Publikationsliste vorweisen.

Ich möchte allerdings vor einer voreiligen Schlussfolgerung warnen. Die Krise bedeutet keineswegs, dass empirische Forschung grundsätzlich unzuverlässig wäre. Im Gegenteil: Dass die Wissenschaft ihre eigenen Erkenntnisse systematisch infrage stellt, belegt gerade ihre Fähigkeit zur Selbstkorrektur.

Inzwischen haben sich mehrere Gegenmaßnahmen etabliert. Besonders vielversprechend ist die sogenannte Präregistrierung: Die Forschenden legen ihre Hypothesen und die geplante Auswertung der Daten verbindlich fest, bevor die Datenerhebung beginnt. Damit wird verhindert, dass nachträglich nach irgendeinem auffälligen Zusammenhang gesucht wird. Außerdem verlangen immer mehr Zeitschriften, dass die erhobenen Rohdaten öffentlich zugänglich gemacht werden.

Ob diese Reformen ausreichen, wird sich erst in einigen Jahren zeigen. Persönlich bin ich jedoch zuversichtlich, dass sie einen entscheidenden Beitrag zu einer transparenteren Forschungskultur leisten werden.`,
    questions: [
      {
        question: 'Was hat das 2015 veröffentlichte Projekt ergeben?',
        options: [
          'Die meisten Effekte konnten bestätigt werden.',
          'Nur rund ein Drittel der Effekte ließ sich erneut nachweisen.',
          'Die Hälfte der Experimente war fehlerhaft dokumentiert.',
          'Psychologische Studien sind zuverlässiger als medizinische.',
        ],
        answer: 1,
      },
      {
        question: 'Welchen Grund für die Krise nennt der Dozent NICHT?',
        options: [
          'zu kleine Stichproben',
          'die Vorliebe der Zeitschriften für positive Resultate',
          'den Publikationsdruck an den Universitäten',
          'bewusst gefälschte Daten einzelner Forschender',
        ],
        answer: 3,
      },
      {
        question: 'Was geschieht laut dem Vortrag häufig mit ergebnislosen Studien?',
        options: [
          'Sie werden gar nicht erst veröffentlicht.',
          'Sie werden besonders streng begutachtet.',
          'Sie werden von Fachzeitschriften bevorzugt.',
        ],
        answer: 0,
      },
      {
        question: 'Wie deutet der Dozent die Replikationskrise insgesamt?',
        options: [
          'als Beweis, dass empirische Forschung unbrauchbar ist',
          'als ein vor allem in der Ökonomie verbreitetes Problem',
          'als Zeichen für die Fähigkeit der Wissenschaft, sich selbst zu korrigieren',
          'als ein inzwischen vollständig gelöstes Problem',
        ],
        answer: 2,
      },
      {
        question: 'Welchem Zweck dient die Präregistrierung?',
        options: [
          'Sie sichert die Finanzierung eines Projekts.',
          'Sie verhindert, dass im Nachhinein nach beliebigen Zusammenhängen gesucht wird.',
          'Sie erhöht die Zahl der Versuchspersonen.',
          'Sie schützt die Rohdaten vor der Öffentlichkeit.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu:
      'Напишите эссе-рассуждение (Erörterung) на тему: должны ли результаты исследований, финансируемых из государственного бюджета, быть бесплатно доступны всем (Open Access)? Используйте элементы именного стиля и причастные определения.',
    taskDe:
      'Verfassen Sie eine Erörterung zum Thema: „Sollten die Ergebnisse öffentlich finanzierter Forschung für alle frei zugänglich sein?“',
    points: [
      'Erläutern Sie kurz das Problem und die gegenwärtige Situation.',
      'Nennen Sie Argumente für einen freien Zugang zu Forschungsergebnissen.',
      'Gehen Sie auf mögliche Nachteile und Einwände ein (z. B. Kosten, Qualitätssicherung).',
      'Ziehen Sie ein begründetes Fazit und formulieren Sie einen Vorschlag.',
    ],
    minWords: 230,
    usefulPhrases: [
      'Die Frage, ob …, wird seit Jahren kontrovers diskutiert.',
      'Für einen freien Zugang spricht vor allem, dass …',
      'Ein häufig angeführtes Gegenargument lautet, dass …',
      'Dieser Einwand ist insofern berechtigt, als …',
      'Es ist jedoch zu berücksichtigen, dass …',
      'Angesichts der Tatsache, dass …',
      'Wägt man die Argumente gegeneinander ab, so …',
      'Abschließend lässt sich festhalten, dass …',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы участвуете в заседании комиссии, распределяющей деньги на исследования. Вы отстаиваете позицию, что фундаментальные исследования важнее прикладных. Собеседник — профессор, который сомневается в вашей точке зрения.',
    aiRole:
      'Sie sind Prof. Dr. Henrike Albers, Mitglied eines Gremiums, das über die Vergabe staatlicher Forschungsmittel entscheidet. Sie sprechen auf C1-Niveau, verwenden idiomatische und fachsprachliche Wendungen und vertreten den Standpunkt, dass anwendungsorientierte Forschung Vorrang haben sollte. Sie hinterfragen jedes Argument kritisch und verlangen Begründungen sowie konkrete Beispiele.',
    opener:
      'Guten Tag! Sie wollen also, dass wir das knappe Budget in Grundlagenforschung stecken, deren Nutzen vielleicht erst in Jahrzehnten sichtbar wird. Ehrlich gesagt leuchtet mir das nicht ganz ein – überzeugen Sie mich!',
    tasksRu: [
      'Изложите свою позицию и приведите минимум два аргумента в пользу фундаментальных исследований.',
      'Приведите пример научного открытия, которое оказалось полезным лишь спустя годы.',
      'Отреагируйте на контраргументы собеседника и частично согласитесь с ними.',
      'Предложите компромисс по распределению средств.',
    ],
    readAloud: [
      'Die von einem internationalen Forschungsteam durchgeführte Studie stellt die bislang gängige Lehrmeinung grundlegend infrage.',
      'Erst nach Abschluss der Datenerhebung und einer sorgfältigen Auswertung der Befunde lassen sich wissenschaftlich fundierte Aussagen treffen.',
      'Die seit Jahren kontrovers diskutierte Hypothese konnte durch eine repräsentative Stichprobe schließlich eindeutig widerlegt werden.',
    ],
  },
};
