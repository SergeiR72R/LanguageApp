import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-07',
  level: 'C1',
  order: 7,
  title: 'Psychologie und Verhalten',
  titleRu: 'Психология и поведение',
  goalsRu: [
    'Выражать уступку и противопоставление разнообразными средствами (wenngleich, so … auch, wie … auch immer, ungeachtet, nichtsdestotrotz)',
    'Правильно строить порядок слов в уступительных конструкциях',
    'Понимать подкасты и популярные лекции по психологии',
    'Писать комментарий и спорить о психологических явлениях в обществе',
  ],
  grammar: {
    topic: 'Konzessive und adversative Strukturen',
    topicRu: 'Уступительные и противительные конструкции',
    explanationRu: `**Уступка** (Konzession) означает: «вопреки обстоятельству результат всё равно наступает». На уровне C1 важно разнообразить привычное *obwohl*.

**1. Подчинительные союзы** (глагол в конце): *obwohl, obgleich, obschon* (книжн.), ***wenngleich*** (книжн.), *auch wenn / selbst wenn* (даже если). Сокращённая форма: *ein kleiner, **wenn auch** wichtiger Schritt*.

**2. Союзные наречия** (позиция 1 → инверсия): *trotzdem, dennoch, **nichtsdestotrotz**, nichtsdestoweniger, gleichwohl*: *Nichtsdestotrotz **bleibt** sie optimistisch.*

**3. Двойной союз** *zwar … aber/doch/jedoch*: *Er ist **zwar** klug, **aber** ungeduldig.*

**4. Обобщающие уступительные предложения**: ***so/wie** + прилагательное/наречие … **auch (immer)***, *was/wer/wo … auch (immer)*. Глагол стоит в конце, а главное предложение после них **обычно сохраняет прямой порядок слов**:

- *So sehr er sich auch bemühte, **er schaffte** es nicht.*
- *Was du auch tust, **ich unterstütze** dich.*

Русская параллель: «как бы он **ни** старался» — немецкое *auch* выполняет роль русского «ни».

**5. Предлоги**: *trotz* + Gen., ***ungeachtet*** + Gen. (может стоять и после существительного: *der Kritik ungeachtet*), ***bei aller/allem*** + Dat. (*bei aller Kritik* — при всей критике), *ungeachtet dessen* (несмотря на это).

**Противопоставление** (Adversativität) выражают *während, wohingegen, hingegen, dagegen, (an)statt dass, vielmehr*.

**Типичные ошибки русскоговорящих:**

- после *obwohl/wenngleich* ставят глагол на второе место, как после русского «хотя» ✗;
- после придаточного с *obwohl* забывают инверсию: *Obwohl sie müde war, sie arbeitete* ✗ — правильно *arbeitete sie*;
- используют *trotzdem* как подчинительный союз (*trotzdem er müde war* — разговорно, в письме ✗);
- употребляют *trotz* с дательным падежом — в письменной речи нужен генитив;
- забывают *auch* в обобщающих конструкциях: *So sehr er sich bemühte, …* — смысл уступки теряется.`,
    table: [
      ['Средство', 'Порядок слов', 'Пример'],
      ['obwohl, obgleich, wenngleich', 'глагол в конце', '…, wenngleich die Studie klein war.'],
      ['zwar … aber', 'два главных предложения', 'Er ist zwar klug, aber ungeduldig.'],
      ['trotzdem, dennoch, nichtsdestotrotz', 'позиция 1 → инверсия', 'Nichtsdestotrotz bleibt sie ruhig.'],
      ['so/wie … auch (immer)', 'глагол в конце; дальше прямой порядок', 'So klug er auch ist, er irrt sich.'],
      ['trotz, ungeachtet + Gen.', 'предложная группа', 'ungeachtet aller Warnungen'],
    ],
    examples: [
      {
        de: 'Wenngleich die Stichprobe klein war, liefert die Studie wichtige Hinweise.',
        ru: 'Хотя выборка была небольшой, исследование даёт важные подсказки.',
      },
      {
        de: 'So überzeugend die Argumente auch sein mögen, Gewohnheiten lassen sich nur schwer ändern.',
        ru: 'Какими бы убедительными ни были аргументы, привычки меняются с большим трудом.',
      },
      {
        de: 'Wie sehr wir uns auch um Rationalität bemühen, unsere Entscheidungen sind stets von Emotionen beeinflusst.',
        ru: 'Как бы мы ни стремились к рациональности, наши решения всегда находятся под влиянием эмоций.',
      },
      {
        de: 'Ungeachtet aller Warnungen schieben viele Menschen unangenehme Aufgaben vor sich her.',
        ru: 'Несмотря на все предупреждения, многие люди откладывают неприятные дела.',
      },
      {
        de: 'Die Therapie ist langwierig und anstrengend; nichtsdestotrotz berichten die meisten Teilnehmenden von deutlichen Verbesserungen.',
        ru: 'Терапия длительная и утомительная; тем не менее большинство участников сообщают о заметных улучшениях.',
      },
      {
        de: 'Während manche Menschen unter Druck aufblühen, reagieren andere mit Rückzug.',
        ru: 'В то время как некоторые люди под давлением расцветают, другие реагируют уходом в себя.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ er sich auch bemühte, er konnte seine Prüfungsangst nicht überwinden.',
        options: ['So sehr', 'Obwohl', 'Trotzdem', 'Ungeachtet'],
        answer: 0,
        explanationRu:
          'Конструкция «so sehr … auch» («как бы ни») требует «auch» в придаточном; главное предложение после неё сохраняет прямой порядок. После «Obwohl» потребовалась бы инверсия, а «auch» было бы лишним.',
      },
      {
        type: 'choice',
        prompt: 'Die Ergebnisse sind noch vorläufig; ___ lassen sie interessante Schlüsse zu.',
        options: ['wenngleich', 'nichtsdestotrotz', 'obgleich', 'ungeachtet'],
        answer: 1,
        explanationRu:
          'После коннектора идёт спрягаемый глагол «lassen» — значит, нужно союзное наречие. «wenngleich» и «obgleich» требуют глагола в конце, «ungeachtet» — предлог.',
      },
      {
        type: 'choice',
        prompt: '___ der zahlreichen Rückschläge gab die Forscherin nicht auf.',
        options: ['Obwohl', 'Wenngleich', 'Ungeachtet', 'Trotzdem'],
        answer: 2,
        explanationRu:
          'После пропуска стоит именная группа в генитиве («der zahlreichen Rückschläge»), поэтому нужен предлог: «ungeachtet» + Gen.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist korrekt?',
        options: [
          'Obwohl sie war erschöpft, arbeitete sie weiter.',
          'Obwohl sie erschöpft war, sie arbeitete weiter.',
          'Obwohl sie erschöpft war, arbeitete sie weiter.',
          'Sie war erschöpft, obwohl arbeitete sie weiter.',
        ],
        answer: 2,
        explanationRu:
          'В придаточном с «obwohl» глагол стоит в конце. Придаточное занимает первое место в предложении, поэтому в главном предложении — инверсия: «arbeitete sie».',
      },
      {
        type: 'gap',
        prompt: 'Die Studie ist aufschlussreich, ___ sie methodische Schwächen aufweist.',
        answers: ['wenngleich', 'obwohl', 'obgleich', 'obschon', 'auch wenn'],
        hintRu: 'книжное «хотя»',
        explanationRu:
          '«wenngleich» — книжный синоним «obwohl». Это подчинительный союз: спрягаемый глагол «aufweist» стоит в конце.',
      },
      {
        type: 'gap',
        prompt: 'Was du ___ immer tust, tu es mit Überzeugung.',
        answers: ['auch'],
        explanationRu: 'Обобщающая уступка «was … auch (immer)» = «что бы ты ни делал». «auch» соответствует русскому «ни».',
      },
      {
        type: 'gap',
        prompt: 'Er ist ___ hochintelligent, aber im Umgang mit Kritik äußerst empfindlich.',
        answers: ['zwar'],
        explanationRu: 'Двойной союз «zwar … aber»: первая часть что-то признаёт, вторая противопоставляет.',
      },
      {
        type: 'gap',
        prompt: '___ aller Kritik muss man anerkennen, dass das Experiment wegweisend war.',
        answers: ['Bei', 'Trotz', 'Ungeachtet'],
        hintRu: '«при всей критике»',
        explanationRu: '«bei aller/allem» + Dat. выражает уступку: «при всей критике (несмотря на неё)». Возможны также «Trotz» и «Ungeachtet» + Gen. (форма «aller Kritik» совпадает в дательном и родительном падежах).',
      },
      {
        type: 'order',
        words: ['Wie schwer', 'es', 'auch', 'sein mag,', 'wir müssen', 'unsere Gewohnheiten', 'ändern.'],
        translationRu: 'Как бы трудно это ни было, мы должны изменить свои привычки.',
        explanationRu:
          'В обобщающем уступительном придаточном «auch» стоит после подлежащего, глагол — в конце. Главное предложение сохраняет прямой порядок слов.',
      },
      {
        type: 'order',
        words: ['Sie', 'blieb', 'gelassen,', 'wenngleich', 'die Lage', 'äußerst', 'angespannt', 'war.'],
        translationRu: 'Она сохраняла спокойствие, хотя ситуация была крайне напряжённой.',
        explanationRu: '«wenngleich» вводит придаточное предложение: спрягаемый глагол «war» стоит в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью конструкции «so … auch».',
        prompt: 'Die Versuchung ist groß. Man sollte ihr widerstehen.',
        answers: [
          'So groß die Versuchung auch ist, man sollte ihr widerstehen.',
          'So groß die Versuchung auch sein mag, man sollte ihr widerstehen.',
          'So groß die Versuchung auch ist, sollte man ihr widerstehen.',
        ],
        explanationRu:
          '«so» + прилагательное открывает придаточное, «auch» стоит после подлежащего, глагол — в конце. Главное предложение, как правило, сохраняет прямой порядок слов.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное с «obwohl» предложной группой с «ungeachtet» или «trotz».',
        prompt: 'Obwohl die Risiken bekannt sind, rauchen viele Jugendliche.',
        answers: [
          'Ungeachtet der bekannten Risiken rauchen viele Jugendliche.',
          'Trotz der bekannten Risiken rauchen viele Jugendliche.',
          'Den bekannten Risiken ungeachtet rauchen viele Jugendliche.',
        ],
        explanationRu:
          'Именной стиль: «die Risiken sind bekannt» → «die bekannten Risiken» в генитиве после «ungeachtet/trotz». Предложная группа занимает первое место, затем — инверсия.',
      },
    ],
  },
  vocab: [
    {
      de: 'Verhaltensweise',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'модель поведения, манера поведения',
      example: 'Viele Verhaltensweisen eignen wir uns bereits in der frühen Kindheit an.',
      exampleRu: 'Многие модели поведения мы усваиваем уже в раннем детстве.',
    },
    {
      de: 'Selbstwertgefühl',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'чувство собственного достоинства, самооценка',
      example: 'Ständige Kritik kann das Selbstwertgefühl eines Kindes nachhaltig schädigen.',
      exampleRu: 'Постоянная критика может надолго подорвать самооценку ребёнка.',
    },
    {
      de: 'Wahrnehmung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'восприятие',
      example: 'Unsere Wahrnehmung wird stark von unseren Erwartungen beeinflusst.',
      exampleRu: 'Наше восприятие сильно зависит от наших ожиданий.',
    },
    {
      de: 'unterdrücken',
      forms: 'unterdrückt, unterdrückte, hat unterdrückt',
      pos: 'verb',
      ru: 'подавлять (чувства, эмоции)',
      example: 'Wer seine Gefühle dauerhaft unterdrückt, riskiert psychosomatische Beschwerden.',
      exampleRu: 'Тот, кто постоянно подавляет свои чувства, рискует получить психосоматические расстройства.',
    },
    {
      de: 'Resilienz',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'психологическая устойчивость',
      example: 'Stabile soziale Beziehungen gelten als wichtigster Faktor für Resilienz.',
      exampleRu: 'Прочные социальные связи считаются важнейшим фактором психологической устойчивости.',
    },
    {
      de: 'Leistungsdruck',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'давление необходимости добиваться результатов',
      example: 'Schon Grundschulkinder klagen heute über zunehmenden Leistungsdruck.',
      exampleRu: 'Уже младшие школьники сегодня жалуются на растущее давление требований.',
    },
    {
      de: 'aufschieben',
      forms: 'schiebt auf, schob auf, hat aufgeschoben',
      pos: 'verb',
      ru: 'откладывать (на потом)',
      example: 'Unangenehme Entscheidungen schieben wir gern so lange wie möglich auf.',
      exampleRu: 'Неприятные решения мы охотно откладываем как можно дольше.',
    },
    {
      de: 'Veranlagung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'предрасположенность, задатки',
      example: 'Ob jemand ängstlich ist, hängt teils von der genetischen Veranlagung ab.',
      exampleRu: 'Склонность к тревожности отчасти зависит от генетической предрасположенности.',
    },
    {
      de: 'sich überwinden',
      forms: 'überwindet sich, überwand sich, hat sich überwunden',
      pos: 'verb',
      ru: 'пересилить себя, заставить себя',
      example: 'Es kostete ihn große Mühe, sich zu überwinden und den Konflikt anzusprechen.',
      exampleRu: 'Ему стоило больших усилий пересилить себя и заговорить о конфликте.',
    },
    {
      de: 'impulsiv',
      pos: 'adj',
      ru: 'импульсивный',
      example: 'Unter Stress treffen viele Menschen impulsive Entscheidungen, die sie später bereuen.',
      exampleRu: 'В состоянии стресса многие принимают импульсивные решения, о которых потом жалеют.',
    },
    {
      de: 'ausgeglichen',
      pos: 'adj',
      ru: 'уравновешенный',
      example: 'Seit sie regelmäßig meditiert, wirkt sie deutlich ausgeglichener.',
      exampleRu: 'С тех пор как она регулярно медитирует, она выглядит гораздо уравновешеннее.',
    },
    {
      de: 'Verhaltensänderung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'изменение поведения',
      example: 'Eine nachhaltige Verhaltensänderung erfordert Geduld und kleine Schritte.',
      exampleRu: 'Устойчивое изменение поведения требует терпения и маленьких шагов.',
    },
    {
      de: 'Belohnungsaufschub',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'отсроченное вознаграждение (способность ждать награды)',
      example: 'Im berühmten Marshmallow-Test wurde die Fähigkeit zum Belohnungsaufschub untersucht.',
      exampleRu: 'В знаменитом «зефирном тесте» изучалась способность откладывать вознаграждение.',
    },
    {
      de: 'beeinflussbar',
      pos: 'adj',
      ru: 'поддающийся влиянию, внушаемый',
      example: 'Jugendliche gelten als besonders leicht beeinflussbar durch Gleichaltrige.',
      exampleRu: 'Подростки считаются особенно восприимчивыми к влиянию сверстников.',
    },
    {
      de: 'Selbstüberschätzung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'переоценка собственных сил',
      example: 'Selbstüberschätzung ist eine der häufigsten Ursachen für Unfälle im Straßenverkehr.',
      exampleRu: 'Переоценка собственных сил — одна из самых частых причин ДТП.',
    },
    {
      de: 'verinnerlichen',
      forms: 'verinnerlicht, verinnerlichte, hat verinnerlicht',
      pos: 'verb',
      ru: 'усваивать, делать частью себя',
      example: 'Viele Frauen haben das Ideal der perfekten Mutter tief verinnerlicht.',
      exampleRu: 'Многие женщины глубоко усвоили идеал идеальной матери.',
    },
    {
      de: 'zwanghaft',
      pos: 'adj',
      ru: 'навязчивый, компульсивный',
      example: 'Sein zwanghaftes Bedürfnis nach Kontrolle belastete die ganze Familie.',
      exampleRu: 'Его навязчивая потребность всё контролировать тяготила всю семью.',
    },
    {
      de: 'sich etwas schönreden',
      forms: 'redet sich schön, redete sich schön, hat sich schöngeredet',
      pos: 'phrase',
      ru: 'приукрашивать что-либо для самоуспокоения',
      example: 'Er redet sich seine ungesunden Gewohnheiten seit Jahren schön.',
      exampleRu: 'Он годами оправдывает перед собой свои вредные привычки.',
    },
    {
      de: 'über seinen Schatten springen',
      forms: 'springt, sprang, ist gesprungen',
      pos: 'phrase',
      ru: 'переступить через себя',
      example: 'Für die Versöhnung musste sie über ihren Schatten springen und sich entschuldigen.',
      exampleRu: 'Ради примирения ей пришлось переступить через себя и извиниться.',
    },
    {
      de: 'den inneren Schweinehund überwinden',
      forms: 'überwindet, überwand, hat überwunden',
      pos: 'phrase',
      ru: 'побороть свою лень',
      example: 'Morgens um sechs joggen zu gehen, heißt vor allem, den inneren Schweinehund zu überwinden.',
      exampleRu: 'Выйти на пробежку в шесть утра — это прежде всего победить собственную лень.',
    },
  ],
  listening: {
    title: 'Podcast „Kopfsache“: Warum wir aufschieben',
    kind: 'monolog',
    text: `Herzlich willkommen zu einer neuen Folge von „Kopfsache“, dem Psychologie-Podcast. Heute geht es um ein Phänomen, das fast jeder kennt: das Aufschieben. Die Steuererklärung, der Zahnarzttermin, die Hausarbeit – so wichtig diese Aufgaben auch sein mögen, wir finden immer wieder Gründe, sie auf morgen zu verschieben.

Lange Zeit hat man Prokrastination für ein Zeichen von Faulheit oder mangelnder Disziplin gehalten. Die Forschung zeichnet inzwischen ein differenzierteres Bild. Wenngleich schlechtes Zeitmanagement eine Rolle spielen kann, liegt die eigentliche Ursache meist woanders: Wir schieben Aufgaben auf, weil sie unangenehme Gefühle auslösen – Langeweile, Unsicherheit oder die Angst zu versagen. Das Aufschieben ist demnach weniger ein Zeitproblem als ein Problem der Emotionsregulation.

Besonders betroffen sind übrigens nicht etwa die Gleichgültigen, sondern häufig Perfektionisten. Wer an sich selbst überhöhte Ansprüche stellt, fängt lieber gar nicht erst an, als ein mittelmäßiges Ergebnis zu riskieren. Kurzfristig fühlt sich das Aufschieben wie eine Erleichterung an. Langfristig hingegen wachsen Stress und Schuldgefühle, was das Selbstwertgefühl zusätzlich untergräbt.

Was hilft also? Wie verlockend schnelle Lösungen auch erscheinen mögen – den einen Trick gibt es nicht. Bewährt hat sich aber, große Aufgaben in kleine, überschaubare Schritte zu zerlegen. Statt sich vorzunehmen, die ganze Hausarbeit zu schreiben, nimmt man sich vor, zehn Minuten lang Notizen zu machen. Erfahrungsgemäß ist der Anfang das Schwierigste; ist er erst einmal gemacht, läuft es oft wie von selbst.

Ein weiterer Ansatz ist Selbstmitgefühl. Das klingt zunächst paradox. Ungeachtet dessen zeigen Studien, dass Menschen, die sich ihr Aufschieben verzeihen, beim nächsten Mal seltener prokrastinieren als jene, die sich dafür heftig kritisieren. Wer sich selbst beschimpft, verstärkt nämlich genau die negativen Gefühle, vor denen er eigentlich flüchten wollte.

Natürlich wird niemand von heute auf morgen zum Organisationswunder. Gewohnheiten lassen sich nur langsam ändern, und Rückschläge gehören dazu. Nichtsdestotrotz lohnt es sich, den inneren Schweinehund immer wieder herauszufordern. Und vielleicht fangen Sie gleich damit an – nach dieser Folge natürlich.`,
    questions: [
      {
        question: 'Wie wurde Prokrastination früher meist erklärt?',
        options: [
          'als Folge einer psychischen Erkrankung',
          'als Zeichen von Faulheit oder mangelnder Disziplin',
          'als typisches Verhalten von Perfektionisten',
          'als Problem der Emotionsregulation',
        ],
        answer: 1,
      },
      {
        question: 'Worin sieht die aktuelle Forschung die eigentliche Ursache des Aufschiebens?',
        options: [
          'in schlechtem Zeitmanagement',
          'in zu vielen Aufgaben gleichzeitig',
          'im Wunsch, unangenehme Gefühle zu vermeiden',
          'in einer genetischen Veranlagung',
        ],
        answer: 2,
      },
      {
        question: 'Warum schieben Perfektionisten laut dem Podcast häufig Aufgaben auf?',
        options: [
          'Sie fürchten, ein nur mittelmäßiges Ergebnis zu erzielen.',
          'Ihnen sind die Aufgaben gleichgültig.',
          'Sie haben grundsätzlich zu wenig Zeit.',
        ],
        answer: 0,
      },
      {
        question: 'Was zeigen Studien über Selbstmitgefühl?',
        options: [
          'Es führt dazu, dass man noch öfter aufschiebt.',
          'Es hat keinerlei messbare Wirkung.',
          'Es hilft nur Menschen ohne Perfektionismus.',
          'Wer sich das Aufschieben verzeiht, prokrastiniert später seltener.',
        ],
        answer: 3,
      },
      {
        question: 'Welche Haltung vermittelt der Sprecher am Ende?',
        options: [
          'Prokrastination lasse sich mit einem einfachen Trick sofort beseitigen.',
          'Veränderung brauche Zeit, sei aber dennoch lohnend.',
          'Man solle das Aufschieben als Teil der Persönlichkeit akzeptieren.',
          'Nur eine Therapie könne wirklich helfen.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu:
      'Напишите комментарий для онлайн-журнала на тему «Самооптимизация — благо или ловушка?». Речь идёт о приложениях, которые отслеживают сон, шаги, продуктивность и настроение. Используйте уступительные и противительные конструкции.',
    taskDe:
      'Schreiben Sie einen Kommentar für ein Online-Magazin zum Thema „Selbstoptimierung – Segen oder Falle?“. Beziehen Sie sich auf Apps, die Schlaf, Schritte, Produktivität und Stimmung messen.',
    points: [
      'Beschreiben Sie das Phänomen der Selbstoptimierung und seine Verbreitung.',
      'Würdigen Sie mögliche positive Effekte (Motivation, Gesundheitsbewusstsein).',
      'Zeigen Sie psychologische Risiken auf (Leistungsdruck, zwanghaftes Verhalten, Selbstwert).',
      'Beziehen Sie klar Stellung und geben Sie eine Empfehlung.',
    ],
    minWords: 220,
    usefulPhrases: [
      'So verlockend … auch sein mag, …',
      'Wenngleich nicht zu bestreiten ist, dass …, …',
      'Bei allem Verständnis für … darf man nicht vergessen, dass …',
      'Ungeachtet dieser Vorteile …',
      'Nichtsdestotrotz bleibt die Frage, ob …',
      '… zwar …, aber …',
      'Statt sich ständig zu vermessen, sollte man …',
      'Mein Fazit fällt daher zwiespältig aus: …',
    ],
  },
  speaking: {
    scenarioRu:
      'В Германии обсуждается запрет социальных сетей для детей до 16 лет ради их психического здоровья. Вы против полного запрета. Ваша собеседница — психолог, которая этот запрет поддерживает.',
    aiRole:
      'Sie sind Dr. Sabine Hartwig, Kinder- und Jugendpsychologin mit langjähriger Praxiserfahrung. Sie sprechen auf C1-Niveau, lebendig und mit idiomatischen Wendungen, und befürworten ein gesetzliches Verbot sozialer Netzwerke für unter 16-Jährige. Sie konfrontieren Ihr Gegenüber mit Studienergebnissen und Fallbeispielen und verlangen überzeugende Begründungen.',
    opener:
      'In meiner Praxis sehe ich jede Woche Jugendliche, die unter Angststörungen und Schlafmangel leiden – und fast immer spielt das Smartphone eine Rolle. Wie können Sie da gegen ein Verbot sein?',
    tasksRu: [
      'Признайте проблему, но выразите несогласие с решением (zwar … aber, wenngleich).',
      'Используйте не менее двух обобщающих уступительных конструкций (so … auch, wie … auch immer).',
      'Предложите альтернативы запрету (медиаграмотность, настройки платформ, роль родителей).',
      'Ответьте на конкретный пример собеседницы и обоснуйте свою позицию.',
    ],
    readAloud: [
      'So überzeugend die Argumente für ein Verbot auch klingen mögen, wir sollten die Selbstbestimmung junger Menschen nicht unterschätzen.',
      'Wenngleich Leistungsdruck und Selbstüberschätzung weit verbreitet sind, entwickeln die meisten Jugendlichen mit der Zeit eine erstaunliche Resilienz.',
      'Ungeachtet aller guten Vorsätze fällt es vielen Menschen schwer, den inneren Schweinehund zu überwinden und unangenehme Aufgaben nicht länger aufzuschieben.',
    ],
  },
};
