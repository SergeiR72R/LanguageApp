import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-15',
  level: 'B2',
  order: 15,
  title: 'Gesellschaft & Migration',
  titleRu: 'Общество и миграция',
  goalsRu: [
    'Понимать репортажи, интервью и дискуссии о миграции, интеграции и общественной сплочённости.',
    'Правильно склонять субстантивированные прилагательные и причастия (der Deutsche — ein Deutscher, die Angestellten, den Zugewanderten).',
    'Уверенно использовать конструкции etwas Neues, nichts Besonderes, das Wichtigste, alles Gute.',
    'Аргументированно высказываться письменно и устно о том, что помогает людям «прижиться» в новой стране.',
  ],
  grammar: {
    topic: 'Adjektive und Partizipien als Nomen',
    topicRu: 'Субстантивированные прилагательные и причастия',
    explanationRu: `Многие прилагательные и причастия могут употребляться **как существительные**. Они пишутся **с большой буквы**, но **склоняются как прилагательные**: окончание зависит от артикля, рода, числа и падежа.

**Люди** (мужской и женский род, множественное число):

- der Deutsche — ein Deutsch**er**; die Deutsche — eine Deutsche; die Deutsch**en** — Deutsch**e** (без артикля)
- der/die Bekannte, Verwandte, Erwachsene, Arbeitslose, Einheimische
- из **Partizip I**: der/die Reisende, Studierende, Vorsitzende, Teilnehmende
- из **Partizip II**: der/die Angestellte, Geflüchtete, Zugewanderte, Verletzte

**Абстрактные понятия** — всегда средний род: das Gute, das Neue, das Wichtigste, das Schöne daran ist …

**После etwas, nichts, viel, wenig** — сильное окончание: etwas Neu**es**, nichts Besonder**es**, viel Gut**es**, mit etwas Neu**em**. Но после **alles** — слабое окончание: alles Gut**e**, alles Wichtig**e**.

**Типичные ошибки русскоговорящих:**

- *ein Deutsche, *ein Bekannte — после ein в именительном падеже мужского рода нужно **-er**: ein Deutscher, ein Bekannter. Без артикля: Er ist Deutsch**er**. Sie ist Deutsch**e**.
- Окончание теряют в косвенных падежах: *mit einem Bekannte → mit einem Bekannt**en**; *Wir helfen den Geflüchtete → den Geflüchtet**en**.
- Пишут со строчной буквы: *etwas neues, *das wichtigste → etwas **N**eues, das **W**ichtigste.
- Путают с n-склонением: der Kollege — ein Kolleg**e** (n-Deklination), но der Bekannte — ein Bekannt**er** (склонение прилагательного).
- **der Beamte** склоняется как прилагательное (ein Beamter), но женский род — **die Beamtin**.

Хорошая новость: в русском языке это явление тоже есть (учёный, больной, рабочий, «новое»), поэтому логика знакома — нужно лишь не забывать окончания прилагательных.`,
    table: [
      ['Падеж', 'с der/die', 'с ein/eine', 'мн. ч. с die', 'мн. ч. без артикля'],
      ['Nominativ', 'der / die Bekannte', 'ein Bekannter / eine Bekannte', 'die Bekannten', 'Bekannte'],
      ['Akkusativ', 'den Bekannten / die Bekannte', 'einen Bekannten / eine Bekannte', 'die Bekannten', 'Bekannte'],
      ['Dativ', 'dem / der Bekannten', 'einem / einer Bekannten', 'den Bekannten', 'Bekannten'],
      ['Genitiv', 'des / der Bekannten', 'eines / einer Bekannten', 'der Bekannten', 'Bekannter'],
    ],
    examples: [
      {
        de: 'Viele Zugewanderte arbeiten in Pflegeberufen, obwohl ihr Abschluss noch nicht anerkannt ist.',
        ru: 'Многие переселенцы работают в сфере ухода, хотя их диплом ещё не признан.',
      },
      {
        de: 'Ein Bekannter von mir ist vor zehn Jahren aus Kasachstan nach Leipzig gekommen.',
        ru: 'Один мой знакомый десять лет назад приехал из Казахстана в Лейпциг.',
      },
      {
        de: 'Die Angestellten der Ausländerbehörde sind seit Monaten überlastet.',
        ru: 'Сотрудники ведомства по делам иностранцев уже несколько месяцев перегружены.',
      },
      {
        de: 'Das Schwierigste am Anfang war für mich nicht die Sprache, sondern die Bürokratie.',
        ru: 'Самым трудным для меня в начале был не язык, а бюрократия.',
      },
      {
        de: 'In einem fremden Land erlebt man jeden Tag etwas Neues.',
        ru: 'В чужой стране каждый день узнаёшь что-то новое.',
      },
      {
        de: 'Für Einheimische ist das nichts Besonderes, für Neuankömmlinge dagegen schon.',
        ru: 'Для местных в этом нет ничего особенного, а вот для новоприбывших — есть.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Mein Nachbar ist ___, lebt aber schon seit 30 Jahren in Spanien.',
        options: ['Deutsche', 'Deutscher', 'ein Deutsche', 'Deutschen'],
        answer: 1,
        explanationRu: 'О мужчине без артикля (как профессия или национальность) — сильное окончание -er: Er ist Deutscher. Форма «ein Deutsche» неверна: после ein нужно -er.',
      },
      {
        type: 'choice',
        prompt: 'Die Beratungsstelle hilft ___ bei der Wohnungssuche.',
        options: ['Geflüchtete', 'Geflüchteten', 'Geflüchteter', 'den Geflüchtete'],
        answer: 1,
        explanationRu: 'helfen + Dativ. Во множественном числе без артикля в дательном падеже окончание -en: Geflüchteten. С артиклем тоже было бы den Geflüchteten.',
      },
      {
        type: 'choice',
        prompt: 'Ich wünsche dir alles ___ für dein neues Leben in Kanada!',
        options: ['Gutes', 'Gute', 'Guten', 'gute'],
        answer: 1,
        explanationRu: 'После alles — слабое окончание -e: alles Gute. Сильное -es бывает после etwas/nichts/viel (etwas Gutes). Пишется с большой буквы.',
      },
      {
        type: 'choice',
        prompt: 'Gestern habe ich auf dem Amt ___ getroffen.',
        options: ['einen alten Bekannten', 'einen alten Bekannter', 'ein alter Bekannte', 'einem alten Bekannten'],
        answer: 0,
        explanationRu: 'treffen + Akkusativ: einen alten Bekannten. Субстантивированное прилагательное склоняется как прилагательное: после einen — -en.',
      },
      {
        type: 'gap',
        prompt: 'Hast du schon etwas ___ von deiner Bewerbung gehört?',
        answers: ['Neues'],
        hintRu: 'neu',
        explanationRu: 'После etwas — сильное окончание среднего рода -es и большая буква: etwas Neues.',
      },
      {
        type: 'gap',
        prompt: 'Die ___ des Integrationskurses kommen aus zwölf Ländern.',
        answers: ['Teilnehmenden'],
        hintRu: 'teilnehmen, Partizip I',
        explanationRu: 'Partizip I teilnehmend → существительное die Teilnehmenden (мн. ч. с артиклем die → -en). Так часто говорят вместо Teilnehmer und Teilnehmerinnen.',
      },
      {
        type: 'gap',
        prompt: 'Das ___ beim Ankommen ist, dass man nicht aufgibt.',
        answers: ['Wichtigste'],
        hintRu: 'wichtig, превосходная степень',
        explanationRu: 'Абстрактное понятие — средний род: das Wichtigste («самое важное»). После das — слабое окончание -e.',
      },
      {
        type: 'gap',
        prompt: 'In unserer Firma ist jeder dritte ___ im Ausland geboren.',
        answers: ['Angestellte'],
        hintRu: 'angestellt, Partizip II',
        explanationRu: 'После jeder (как после der) — слабое окончание -e: jeder dritte Angestellte.',
      },
      {
        type: 'order',
        words: ['Ein', 'Verwandter', 'meiner Frau', 'hat', 'uns', 'bei der Wohnungssuche', 'geholfen.'],
        translationRu: 'Один родственник моей жены помог нам в поисках квартиры.',
        explanationRu: 'ein Verwandter — Nominativ мужского рода после ein → -er. Глагол hat на втором месте, Partizip II в конце.',
      },
      {
        type: 'order',
        words: ['Im Integrationskurs', 'habe', 'ich', 'viel', 'Nützliches', 'über das Leben in Deutschland', 'gelernt.'],
        translationRu: 'На интеграционном курсе я узнал много полезного о жизни в Германии.',
        explanationRu: 'viel + субстантивированное прилагательное с сильным окончанием -es: viel Nützliches. Порядок: обстоятельство места на первом месте, затем глагол и подлежащее.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените выделенную группу субстантивированным причастием.',
        prompt: 'Menschen, die zugewandert sind, bringen oft wertvolle Erfahrungen mit.',
        answers: ['Zugewanderte bringen oft wertvolle Erfahrungen mit.', 'Die Zugewanderten bringen oft wertvolle Erfahrungen mit.'],
        explanationRu: 'Partizip II zugewandert → die Zugewanderten / без артикля Zugewanderte (сильное окончание -e во мн. ч.).',
      },
      {
        type: 'transform',
        instructionRu: 'Замените группу с придаточным субстантивированным причастием (Partizip I).',
        prompt: 'Menschen, die reisen, müssen an der Grenze ihren Pass vorzeigen.',
        answers: ['Reisende müssen an der Grenze ihren Pass vorzeigen.', 'Die Reisenden müssen an der Grenze ihren Pass vorzeigen.'],
        explanationRu: 'Partizip I reisend → Reisende (без артикля, мн. ч., сильное окончание -e) или die Reisenden.',
      },
    ],
  },
  vocab: [
    {
      de: 'Zugewanderte',
      article: 'der',
      plural: 'die Zugewanderten',
      forms: 'ein Zugewanderter / eine Zugewanderte',
      pos: 'noun',
      ru: 'переселенец, мигрант (букв. «прибывший»)',
      example: 'Viele Zugewanderte engagieren sich in Vereinen und Elternbeiräten.',
      exampleRu: 'Многие переселенцы активно участвуют в работе объединений и родительских советов.',
    },
    {
      de: 'Einheimische',
      article: 'der',
      plural: 'die Einheimischen',
      forms: 'ein Einheimischer / eine Einheimische',
      pos: 'noun',
      ru: 'местный житель',
      example: 'Den besten Tipp für eine günstige Wohnung bekam ich von einer Einheimischen.',
      exampleRu: 'Лучший совет насчёт недорогой квартиры я получил от местной жительницы.',
    },
    {
      de: 'Angehörige',
      article: 'der',
      plural: 'die Angehörigen',
      forms: 'ein Angehöriger / eine Angehörige',
      pos: 'noun',
      ru: 'родственник; член (группы, организации)',
      example: 'Viele Geflüchtete machen sich große Sorgen um ihre Angehörigen im Kriegsgebiet.',
      exampleRu: 'Многие беженцы очень волнуются за своих родственников в зоне военных действий.',
    },
    {
      de: 'Asylsuchende',
      article: 'der',
      plural: 'die Asylsuchenden',
      forms: 'ein Asylsuchender / eine Asylsuchende',
      pos: 'noun',
      ru: 'лицо, ищущее убежища',
      example: 'Asylsuchende dürfen in den ersten Monaten oft nicht arbeiten.',
      exampleRu: 'Лицам, ищущим убежища, в первые месяцы часто не разрешают работать.',
    },
    {
      de: 'Neuankömmling',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'новоприбывший, новичок',
      example: 'Für Neuankömmlinge bietet die Stadt eine kostenlose Orientierungsführung an.',
      exampleRu: 'Для новоприбывших город предлагает бесплатную ознакомительную экскурсию.',
    },
    {
      de: 'Aufnahmegesellschaft',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'принимающее общество',
      example: 'Integration ist keine Einbahnstraße – auch die Aufnahmegesellschaft muss sich bewegen.',
      exampleRu: 'Интеграция — не улица с односторонним движением: принимающее общество тоже должно идти навстречу.',
    },
    {
      de: 'Willkommenskultur',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'культура гостеприимства, открытость к приезжим',
      example: 'Unternehmen, die Fachkräfte aus dem Ausland suchen, setzen zunehmend auf eine echte Willkommenskultur.',
      exampleRu: 'Компании, которые ищут специалистов за рубежом, всё больше делают ставку на настоящую культуру гостеприимства.',
    },
    {
      de: 'Einwanderungsland',
      article: 'das',
      plural: '-¨er',
      pos: 'noun',
      ru: 'страна иммиграции',
      example: 'Lange wollte die Politik nicht zugeben, dass Deutschland ein Einwanderungsland ist.',
      exampleRu: 'Долгое время политики не хотели признавать, что Германия — страна иммиграции.',
    },
    {
      de: 'Integrationskurs',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'интеграционный курс (язык + основы жизни в Германии)',
      example: 'Der Integrationskurs besteht aus einem Sprachkurs und einem Orientierungskurs.',
      exampleRu: 'Интеграционный курс состоит из языкового и ознакомительного курса.',
    },
    {
      de: 'Ausländerbehörde',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'ведомство по делам иностранцев',
      example: 'Auf einen Termin bei der Ausländerbehörde muss man in manchen Städten monatelang warten.',
      exampleRu: 'В некоторых городах записи в ведомство по делам иностранцев приходится ждать месяцами.',
    },
    {
      de: 'Bleiberecht',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'право остаться в стране',
      example: 'Gut integrierte Jugendliche können unter bestimmten Bedingungen ein Bleiberecht erhalten.',
      exampleRu: 'Хорошо интегрированные подростки при определённых условиях могут получить право остаться в стране.',
    },
    {
      de: 'Familiennachzug',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'воссоединение семьи (переезд членов семьи к мигранту)',
      example: 'Der Familiennachzug ist an Bedingungen wie ausreichenden Wohnraum geknüpft.',
      exampleRu: 'Воссоединение семьи связано с условиями, например с достаточной жилплощадью.',
    },
    {
      de: 'Fremdenfeindlichkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'ксенофобия, враждебность к иностранцам',
      example: 'Die Initiative will Fremdenfeindlichkeit durch persönliche Begegnungen abbauen.',
      exampleRu: 'Инициатива хочет преодолевать ксенофобию с помощью личных встреч.',
    },
    {
      de: 'Zusammenleben',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'совместная жизнь, сосуществование',
      example: 'Für ein friedliches Zusammenleben braucht es gemeinsame Regeln und gegenseitigen Respekt.',
      exampleRu: 'Для мирного сосуществования нужны общие правила и взаимное уважение.',
    },
    {
      de: 'Anlaufstelle',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'место первичного обращения, консультационный пункт',
      example: 'Das Nachbarschaftszentrum ist die erste Anlaufstelle für Familien, die neu im Viertel sind.',
      exampleRu: 'Соседский центр — первое место, куда обращаются семьи, недавно поселившиеся в районе.',
    },
    {
      de: 'sich einleben',
      forms: 'lebt sich ein, lebte sich ein, hat sich eingelebt',
      pos: 'verb',
      ru: 'освоиться, обжиться (на новом месте)',
      example: 'Unsere Kinder haben sich erstaunlich schnell in der neuen Schule eingelebt.',
      exampleRu: 'Наши дети удивительно быстро освоились в новой школе.',
    },
    {
      de: 'Heimweh',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'тоска по дому, по родине',
      example: 'Besonders an Feiertagen hat sie großes Heimweh nach ihrer Familie.',
      exampleRu: 'Особенно в праздники она сильно скучает по семье.',
    },
    {
      de: 'Staatsangehörigkeit',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'гражданство',
      example: 'Seit der Reform dürfen Eingebürgerte ihre bisherige Staatsangehörigkeit in vielen Fällen behalten.',
      exampleRu: 'После реформы натурализованные граждане во многих случаях могут сохранить прежнее гражданство.',
    },
    {
      de: 'vielfältig',
      pos: 'adj',
      ru: 'многообразный, разнообразный',
      example: 'Die Gründe, warum Menschen ihre Heimat verlassen, sind vielfältig.',
      exampleRu: 'Причины, по которым люди покидают родину, многообразны.',
    },
    {
      de: 'Benachteiligung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'ущемление, дискриминация, неравные условия',
      example: 'Studien belegen eine Benachteiligung von Bewerbern mit ausländisch klingenden Namen.',
      exampleRu: 'Исследования подтверждают, что кандидаты с иностранно звучащими именами находятся в невыгодном положении.',
    },
  ],
  listening: {
    title: 'Neue Nachbarn: Das Küchentandem',
    kind: 'monolog',
    text: `Guten Abend und willkommen zu unserer Sendereihe „Neue Nachbarn“. Heute stellen wir Ihnen ein Projekt aus Bremen vor, das seit fünf Jahren Einheimische und Zugewanderte zusammenbringt: das „Küchentandem“.

Die Idee ist einfach. Jeweils zwei Personen – eine, die schon lange in der Stadt lebt, und eine, die neu angekommen ist – kochen einmal im Monat gemeinsam, abwechselnd in der einen und in der anderen Küche. Die Gründerin, Sabine Kröger, ist selbst keine Zugewanderte, aber ihre Großmutter kam in den Sechzigerjahren als Gastarbeiterin aus Italien. „Das Wichtigste beim Ankommen sind nicht Formulare, sondern Menschen“, sagt sie. „Ein Bekannter, den man anrufen kann, wenn ein Brief vom Amt kommt, ist manchmal mehr wert als jeder Kurs.“

Inzwischen machen über dreihundert Personen mit. Unter den Teilnehmenden sind Studierende, Rentnerinnen, Angestellte und auch einige Arbeitslose. Die meisten Neuankömmlinge stammen aus Syrien, der Ukraine und Afghanistan, aber es gibt auch eine Ärztin aus Brasilien und einen Ingenieur aus Indien.

Einer der Ehrenamtlichen ist Werner Stahl, 71 Jahre alt, früher Busfahrer. „Am Anfang dachte ich, ich müsste den Neuen alles erklären“, erzählt er lachend. „Aber ich habe mindestens genauso viel Neues gelernt – zum Beispiel, dass man Linsen auf zwanzig verschiedene Arten kochen kann.“ Sein Tandempartner Yusuf, ein ehemaliger Lehrer aus Aleppo, ergänzt: „Werner hat mir gezeigt, wie man sich hier bei einem Vermieter vorstellt. Das war nichts Großes für ihn, aber für mich etwas sehr Wichtiges.“

Ganz ohne Schwierigkeiten läuft das Projekt allerdings nicht. Die Finanzierung durch die Stadt ist nur bis Ende des Jahres gesichert, und unter den Einheimischen fehlen vor allem männliche Freiwillige. Kröger bleibt trotzdem optimistisch: „Das Schöne ist, dass aus vielen Tandems echte Freundschaften entstanden sind. Und Freunde lassen einander nicht im Stich.“

Wer mitmachen möchte, findet alle Informationen auf der Internetseite des Projekts.`,
    questions: [
      {
        question: 'Was ist das Ziel des Projekts „Küchentandem“?',
        options: [
          'Zugewanderten kostenlose Deutschkurse anzubieten.',
          'Einheimische und Neuangekommene durch gemeinsames Kochen zusammenzubringen.',
          'ein Restaurant mit internationaler Küche zu eröffnen.',
          'Rezepte aus aller Welt in einem Buch zu sammeln.',
        ],
        answer: 1,
      },
      {
        question: 'Was erfährt man über die Gründerin?',
        options: [
          'Sie ist selbst als Kind nach Deutschland gekommen.',
          'Sie arbeitet bei einer Behörde.',
          'Ihre Großmutter ist als Gastarbeiterin eingewandert.',
          'Sie war früher Köchin in Italien.',
        ],
        answer: 2,
      },
      {
        question: 'Was ist für Sabine Kröger beim Ankommen am wichtigsten?',
        options: [
          'persönliche Kontakte zu Menschen vor Ort',
          'möglichst gute Sprachkurse',
          'schnell arbeitende Behörden',
          'eine eigene Wohnung',
        ],
        answer: 0,
      },
      {
        question: 'Was sagt Yusuf über Werner?',
        options: [
          'Werner hat ihm eine Wohnung vermietet.',
          'Werner hat ihm gezeigt, wie man sich bei einem Vermieter vorstellt.',
          'Werner hat ihm das Kochen beigebracht.',
          'Werner hat ihm eine Stelle als Lehrer vermittelt.',
        ],
        answer: 1,
      },
      {
        question: 'Welches Problem hat das Projekt?',
        options: [
          'Es melden sich zu wenige Zugewanderte.',
          'Die Tandempartner streiten sich oft.',
          'Die Stadt verbietet Treffen in Privatwohnungen.',
          'Die Finanzierung ist nur bis zum Jahresende gesichert.',
        ],
        answer: 3,
      },
    ],
  },
  writing: {
    taskRu: 'На форуме городского портала обсуждают вопрос: «Что нужно переселенцам, чтобы действительно почувствовать себя дома?» Напишите сообщение на форум (Forumsbeitrag), раскрыв все четыре пункта.',
    taskDe: 'Im Forum Ihres Stadtportals wird diskutiert: „Was brauchen Zugewanderte, um wirklich anzukommen?“ Schreiben Sie einen Forumsbeitrag.',
    points: [
      'Eigene Erfahrungen oder Erfahrungen von Bekannten mit einem Neuanfang in einem anderen Land',
      'Welche Rolle Sprache und Arbeit beim Ankommen spielen',
      'Was Einheimische, Nachbarn und Vereine beitragen können',
      'Was die Stadt Ihrer Meinung nach konkret verbessern sollte',
    ],
    minWords: 160,
    usefulPhrases: [
      'Aus eigener Erfahrung weiß ich, dass …',
      'Ein Bekannter von mir hat erlebt, wie …',
      'Das Wichtigste ist meiner Meinung nach …',
      'Für Neuankömmlinge ist es oft nicht leicht, …',
      'Ich halte es für entscheidend, dass auch die Einheimischen …',
      'Abschließend möchte ich vorschlagen, …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы участвуете в заседании районного совета. Обсуждается проект «Соседи-лоцманы»: местные жители-волонтёры сопровождают новоприбывших в первые месяцы — в ведомства, к врачу, при поиске квартиры. Член совета настроен скептически: он считает, что это работа для профессионалов, а не для любителей.',
    aiRole: 'Sie sind Herr Krämer, Mitglied im Bezirksrat einer deutschen Großstadt. Sie diskutieren mit einer Bürgerin oder einem Bürger über das Projekt „Nachbarschaftslotsen“, bei dem Ehrenamtliche Neuankömmlinge in den ersten Monaten begleiten. Sie sind skeptisch: Behördengänge und Beratung sind für Sie Aufgabe von Fachleuten, und Sie befürchten, dass Freiwillige überfordert werden oder falsche Auskünfte geben. Sprechen Sie natürliches Deutsch auf B2-Niveau, fragen Sie nach konkreten Beispielen, bringen Sie Gegenargumente und lassen Sie sich nur von guten Argumenten überzeugen. Suchen Sie am Ende gemeinsam einen Kompromiss.',
    opener: 'Guten Abend! Ich habe Ihren Vorschlag gelesen, aber ehrlich gesagt bin ich skeptisch. Warum sollten ausgerechnet Freiwillige die Neuankömmlinge begleiten? Dafür haben wir doch ausgebildete Fachkräfte, oder?',
    tasksRu: [
      'Объясните, почему личный контакт с местными жителями важен для новоприбывших; приведите пример из своего опыта или опыта знакомых.',
      'Используйте не менее пяти субстантивированных прилагательных и причастий (die Ehrenamtlichen, ein Bekannter, die Zugewanderten, das Wichtigste, etwas Neues …).',
      'Ответьте на опасения собеседника, что волонтёры будут перегружены или дадут неверные советы.',
      'Предложите компромисс (например, обучение для волонтёров, сотрудничество с консультационными центрами).',
    ],
    readAloud: [
      'Für viele Zugewanderte ist ein einheimischer Bekannter, der beim ersten Behördengang hilft, wertvoller als jede Broschüre.',
      'Das Wichtigste beim Ankommen ist das Gefühl, von den Einheimischen nicht nur geduldet, sondern wirklich willkommen geheißen zu werden.',
      'Unter den Ehrenamtlichen sind Studierende, Angestellte und Rentner, die jede Woche etwas Neues über andere Kulturen erfahren.',
    ],
  },
};
