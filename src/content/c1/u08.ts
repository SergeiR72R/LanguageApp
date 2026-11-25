import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-08',
  level: 'C1',
  order: 8,
  title: 'Wirtschaft und Innovation',
  titleRu: 'Экономика и инновации',
  goalsRu: [
    'Использовать устойчивые словосочетания и функциональные глагольные конструкции деловой речи',
    'Различать активные и пассивные пары функциональных глаголов (zur Verfügung stellen / stehen)',
    'Понимать интервью с предпринимателями и деловые идиомы',
    'Убедительно презентовать бизнес-идею и писать официальный запрос о поддержке',
  ],
  grammar: {
    topic: 'Kollokationen und Funktionsverbgefüge in der Geschäftssprache',
    topicRu: 'Коллокации и функциональные глагольные конструкции в деловом языке',
    explanationRu: `Деловой немецкий во многом состоит из **устойчивых сочетаний** (Kollokationen): существительное «выбирает» свой глагол, и заменить его нельзя. Носитель скажет *eine Entscheidung **treffen***, а не *machen* или *nehmen*.

**Важные коллокации:** *Maßnahmen ergreifen, Kritik üben (an + Dat.), Bedenken äußern, einen Gewinn erzielen, Verluste einfahren, Marktanteile gewinnen, eine Strategie verfolgen, ein Risiko eingehen, eine Einigung erzielen, einen Vorschlag unterbreiten.*

**Функциональные глагольные конструкции** (Funktionsverbgefüge) вы уже знаете с уровня B2. На уровне C1 важно видеть **пары**, где один глагол выражает активное (каузативное) действие, а другой — пассивное или процесс:

- *stellen* ↔ *stehen*: *Mittel **zur Verfügung stellen*** (предоставлять) ↔ *Mittel **stehen** zur Verfügung* (имеются);
- *bringen* ↔ *kommen*: *eine Technik **zum Einsatz bringen*** ↔ *die Technik **kommt** zum Einsatz* (применяется);
- *setzen* ↔ *geraten/kommen/treten*: *jdn. **unter Druck setzen*** ↔ ***unter Druck geraten***; *in Kraft setzen* ↔ *in Kraft treten*.

Некоторые глаголы придают конструкции пассивное значение: *Anerkennung **finden*** (= anerkannt werden), *eine Veränderung **erfahren*** (= verändert werden), *Kritik **erfahren***.

**Деловые идиомы:** *schwarze/rote Zahlen schreiben* (работать с прибылью/убытком), *den Rotstift ansetzen* (урезать расходы), *etw. unter Dach und Fach bringen* (успешно завершить), *die Nase vorn haben* (лидировать), *an einem Strang ziehen* (действовать сообща).

**Типичные ошибки русскоговорящих:**

- дословный перевод: «принимать решение» → *eine Entscheidung nehmen* ✗ (*treffen*); «принимать меры» → *Maßnahmen nehmen* ✗ (*ergreifen/treffen*); «оказывать влияние» → *Einfluss ausüben/nehmen*;
- произвольный артикль: *in Kraft*, *zur Verfügung*, *zum Einsatz* — без вариантов;
- путают активную и пассивную пару: *Die Daten stellen zur Verfügung* ✗ → *Die Daten stehen zur Verfügung*;
- отрицание: в FVG с предлогом обычно *nicht* (*kommt nicht in Frage*), с существительным без предлога — *kein* (*keine Kritik üben*).`,
    table: [
      ['Активно / каузативно', 'Пассивно / процесс', 'Значение'],
      ['zur Verfügung stellen', 'zur Verfügung stehen', 'предоставлять / быть в распоряжении'],
      ['zum Einsatz bringen', 'zum Einsatz kommen', 'применять / применяться'],
      ['in Gang setzen', 'in Gang kommen', 'запускать / начаться'],
      ['zur Diskussion stellen', 'zur Diskussion stehen', 'выносить на обсуждение / обсуждаться'],
      ['unter Druck setzen', 'unter Druck geraten', 'давить / оказаться под давлением'],
      ['in Kraft setzen', 'in Kraft treten', 'вводить в действие / вступать в силу'],
    ],
    examples: [
      {
        de: 'Das Start-up hat bereits im zweiten Geschäftsjahr schwarze Zahlen geschrieben.',
        ru: 'Стартап вышел на прибыль уже на второй год работы.',
      },
      {
        de: 'Der Vorstand hat beschlossen, umfassende Sparmaßnahmen zu ergreifen.',
        ru: 'Правление решило принять масштабные меры экономии.',
      },
      {
        de: 'Die neue Software kommt ab Januar in allen Filialen zum Einsatz.',
        ru: 'С января новое программное обеспечение будет применяться во всех филиалах.',
      },
      {
        de: 'Der Vorschlag des Betriebsrats fand bei der Geschäftsführung breite Zustimmung.',
        ru: 'Предложение производственного совета получило широкое одобрение руководства.',
      },
      {
        de: 'Durch die Billigkonkurrenz aus Fernost ist der Mittelständler stark unter Druck geraten.',
        ru: 'Из-за дешёвых конкурентов с Дальнего Востока среднее предприятие оказалось под сильным давлением.',
      },
      {
        de: 'Nach monatelangen Verhandlungen konnte der Vertrag endlich unter Dach und Fach gebracht werden.',
        ru: 'После многомесячных переговоров договор наконец удалось успешно заключить.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Nach langer Diskussion hat der Vorstand endlich eine Entscheidung ___.',
        options: ['getroffen', 'genommen', 'gemacht', 'gestellt'],
        answer: 0,
        explanationRu: 'Устойчивое сочетание: «eine Entscheidung treffen». Калька с русского «принять решение» (*nehmen*) — типичная ошибка.',
      },
      {
        type: 'choice',
        prompt: 'Die neuen Regeln ___ am 1. Januar in Kraft.',
        options: ['setzen', 'treten', 'stellen', 'bringen'],
        answer: 1,
        explanationRu:
          '«in Kraft treten» — «вступать в силу» (процесс, подлежащее — сами правила). «in Kraft setzen» — активная пара: кто-то вводит правила в действие.',
      },
      {
        type: 'choice',
        prompt: 'Die Idee des Praktikanten ___ in der Abteilung große Anerkennung.',
        options: ['gab', 'hielt', 'fand', 'nahm'],
        answer: 2,
        explanationRu: '«Anerkennung finden» = «получить признание» (= anerkannt werden). Глагол «finden» придаёт конструкции пассивное значение.',
      },
      {
        type: 'choice',
        prompt: 'Unser Unternehmen schreibt seit drei Jahren rote Zahlen. Das heißt: …',
        options: [
          'Es wächst schneller als erwartet.',
          'Es veröffentlicht seine Bilanz nicht.',
          'Es hat neue Mitarbeitende eingestellt.',
          'Es macht Verluste.',
        ],
        answer: 3,
        explanationRu: '«rote Zahlen schreiben» — работать в убыток; противоположность — «schwarze Zahlen schreiben» (работать с прибылью).',
      },
      {
        type: 'gap',
        prompt: 'Wegen der hohen Energiepreise mussten wir die Produktion vorübergehend ___ Stillstand bringen.',
        answers: ['zum'],
        explanationRu: '«etw. zum Stillstand bringen» — «остановить». В функциональных конструкциях предлог и артикль фиксированы: zu + dem = zum.',
      },
      {
        type: 'gap',
        prompt: 'Die Geschäftsführung hat zusätzliche Mittel für Weiterbildung zur Verfügung ___.',
        answers: ['gestellt'],
        explanationRu:
          'Подлежащее (руководство) активно предоставляет средства → «zur Verfügung stellen». «zur Verfügung stehen» означало бы, что средства имеются.',
      },
      {
        type: 'gap',
        prompt: 'Bei der Präsentation hat der Investor erhebliche Bedenken ___.',
        answers: ['geäußert', 'angemeldet', 'vorgebracht'],
        explanationRu: 'Коллокация «Bedenken äußern» (также «anmelden», «vorbringen») — «высказывать сомнения/опасения».',
      },
      {
        type: 'gap',
        prompt: 'Wenn alle Abteilungen an einem ___ ziehen, schaffen wir die Wende.',
        answers: ['Strang'],
        explanationRu: 'Идиома «an einem (gleichen) Strang ziehen» — «действовать сообща, тянуть в одну сторону».',
      },
      {
        type: 'order',
        words: ['Die Verhandlungen', 'konnten', 'erst', 'nach Monaten', 'zum Abschluss', 'gebracht werden.'],
        translationRu: 'Переговоры удалось завершить лишь спустя несколько месяцев.',
        explanationRu:
          'Именная часть функциональной конструкции («zum Abschluss») стоит в конце среднего поля, непосредственно перед глагольной частью.',
      },
      {
        type: 'order',
        words: ['Das', 'Unternehmen', 'ist', 'durch', 'die Billigkonkurrenz', 'unter Druck', 'geraten.'],
        translationRu: 'Из-за дешёвых конкурентов предприятие оказалось под давлением.',
        explanationRu:
          '«unter Druck geraten» образует перфект с «sein». Предложная часть «unter Druck» стоит непосредственно перед причастием.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените глагол функциональной конструкцией с «zum Einsatz kommen».',
        prompt: 'Künstliche Intelligenz wird in der Logistik zunehmend eingesetzt.',
        answers: ['Künstliche Intelligenz kommt in der Logistik zunehmend zum Einsatz.'],
        explanationRu: '«eingesetzt werden» (пассив) = «zum Einsatz kommen». Именная часть «zum Einsatz» уходит в конец предложения.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените глагол «kritisieren» коллокацией «Kritik üben an».',
        prompt: 'Die Aktionäre kritisierten die Strategie des Vorstands scharf.',
        answers: [
          'Die Aktionäre übten scharfe Kritik an der Strategie des Vorstands.',
          'Die Aktionäre übten an der Strategie des Vorstands scharfe Kritik.',
        ],
        explanationRu:
          '«kritisieren» → «Kritik üben an + Dat.». Наречие «scharf» превращается в определение: «scharfe Kritik». Прямое дополнение становится предложным: «an der Strategie».',
      },
    ],
  },
  vocab: [
    {
      de: 'Geschäftsmodell',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'бизнес-модель',
      example: 'Investoren wollen vor allem wissen, ob das Geschäftsmodell langfristig trägt.',
      exampleRu: 'Инвесторы прежде всего хотят знать, жизнеспособна ли бизнес-модель в долгосрочной перспективе.',
    },
    {
      de: 'Markteinführung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'выход (продукта) на рынок',
      example: 'Die Markteinführung des neuen Modells wurde wegen technischer Probleme verschoben.',
      exampleRu: 'Выход новой модели на рынок отложили из-за технических проблем.',
    },
    {
      de: 'Wettbewerber',
      article: 'der',
      plural: '-',
      pos: 'noun',
      ru: 'конкурент',
      example: 'Unsere Wettbewerber investieren deutlich mehr in Forschung und Entwicklung.',
      exampleRu: 'Наши конкуренты вкладывают значительно больше в исследования и разработки.',
    },
    {
      de: 'Start-up',
      article: 'das',
      plural: '-s',
      pos: 'noun',
      ru: 'стартап',
      example: 'Berlin gilt als eines der wichtigsten Zentren für Start-ups in Europa.',
      exampleRu: 'Берлин считается одним из важнейших центров стартапов в Европе.',
    },
    {
      de: 'Risikokapitalgeber',
      article: 'der',
      plural: '-',
      pos: 'noun',
      ru: 'венчурный инвестор',
      example: 'Ohne die Unterstützung eines Risikokapitalgebers hätte das Projekt nie realisiert werden können.',
      exampleRu: 'Без поддержки венчурного инвестора проект никогда не удалось бы реализовать.',
    },
    {
      de: 'Rendite',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'доходность, прибыль на вложенный капитал',
      example: 'Nachhaltige Fonds erzielen inzwischen ähnliche Renditen wie konventionelle Anlagen.',
      exampleRu: 'Устойчивые фонды сегодня приносят доходность, сопоставимую с обычными инвестициями.',
    },
    {
      de: 'disruptiv',
      pos: 'adj',
      ru: 'прорывной, разрушающий старые модели рынка',
      example: 'Disruptive Technologien können ganze Branchen innerhalb weniger Jahre umkrempeln.',
      exampleRu: 'Прорывные технологии способны за несколько лет перевернуть целые отрасли.',
    },
    {
      de: 'Kostensenkung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'снижение затрат',
      example: 'Die geplante Kostensenkung soll ohne betriebsbedingte Kündigungen erreicht werden.',
      exampleRu: 'Запланированного снижения затрат хотят добиться без увольнений по инициативе работодателя.',
    },
    {
      de: 'investieren',
      forms: 'in + Akk',
      pos: 'verb',
      ru: 'инвестировать, вкладывать',
      example: 'Das Unternehmen investiert jährlich zehn Prozent seines Umsatzes in neue Technologien.',
      exampleRu: 'Компания ежегодно вкладывает десять процентов оборота в новые технологии.',
    },
    {
      de: 'expandieren',
      forms: 'expandiert, expandierte, hat expandiert',
      pos: 'verb',
      ru: 'расширяться, выходить на новые рынки',
      example: 'Nach dem Erfolg in Deutschland will die Firma nach Skandinavien expandieren.',
      exampleRu: 'После успеха в Германии фирма хочет выйти на скандинавский рынок.',
    },
    {
      de: 'skalierbar',
      pos: 'adj',
      ru: 'масштабируемый',
      example: 'Ein digitales Geschäftsmodell ist in der Regel leichter skalierbar als ein Handwerksbetrieb.',
      exampleRu: 'Цифровую бизнес-модель, как правило, проще масштабировать, чем ремесленное предприятие.',
    },
    {
      de: 'rentabel',
      pos: 'adj',
      ru: 'рентабельный, прибыльный',
      example: 'Die Filiale auf dem Land arbeitet schon lange nicht mehr rentabel.',
      exampleRu: 'Сельский филиал уже давно работает нерентабельно.',
    },
    {
      de: 'tragfähig',
      pos: 'adj',
      ru: 'жизнеспособный, надёжный (о концепции, решении)',
      example: 'Bisher fehlt ein tragfähiges Konzept für die Finanzierung des Projekts.',
      exampleRu: 'Пока нет жизнеспособной концепции финансирования проекта.',
    },
    {
      de: 'Insolvenz',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'несостоятельность, банкротство',
      example: 'Der Modehändler musste nach mehreren Verlustjahren Insolvenz anmelden.',
      exampleRu: 'После нескольких убыточных лет торговец одеждой был вынужден объявить о банкротстве.',
    },
    {
      de: 'Marktanteile gewinnen',
      forms: 'gewinnt, gewann, hat gewonnen',
      pos: 'phrase',
      ru: 'увеличивать долю рынка',
      example: 'Mit günstigen Elektroautos will der Hersteller in Europa Marktanteile gewinnen.',
      exampleRu: 'С помощью недорогих электромобилей производитель хочет увеличить свою долю на европейском рынке.',
    },
    {
      de: 'schwarze Zahlen schreiben',
      forms: 'schreibt, schrieb, hat geschrieben',
      pos: 'phrase',
      ru: 'работать с прибылью',
      example: 'Nach Jahren der Verluste schreibt die Airline endlich wieder schwarze Zahlen.',
      exampleRu: 'После многих убыточных лет авиакомпания наконец снова работает с прибылью.',
    },
    {
      de: 'den Rotstift ansetzen',
      forms: 'setzt an, setzte an, hat angesetzt',
      pos: 'phrase',
      ru: 'урезать расходы, сокращать бюджет',
      example: 'Bei den Reisekosten will die Geschäftsführung als Erstes den Rotstift ansetzen.',
      exampleRu: 'Руководство в первую очередь хочет урезать командировочные расходы.',
    },
    {
      de: 'etwas unter Dach und Fach bringen',
      forms: 'bringt, brachte, hat gebracht',
      pos: 'phrase',
      ru: 'успешно завершить, довести до конца (сделку)',
      example: 'Die Übernahme soll bis Jahresende unter Dach und Fach gebracht werden.',
      exampleRu: 'Сделку по поглощению планируют завершить до конца года.',
    },
    {
      de: 'Maßnahmen ergreifen',
      forms: 'ergreift, ergriff, hat ergriffen',
      pos: 'phrase',
      ru: 'принимать меры',
      example: 'Die Regierung muss endlich wirksame Maßnahmen gegen den Fachkräftemangel ergreifen.',
      exampleRu: 'Правительство должно наконец принять действенные меры против нехватки специалистов.',
    },
    {
      de: 'die Nase vorn haben',
      forms: 'hat, hatte, hat gehabt',
      pos: 'phrase',
      ru: 'лидировать, опережать других',
      example: 'Bei der Batterietechnik haben asiatische Hersteller derzeit klar die Nase vorn.',
      exampleRu: 'В аккумуляторных технологиях азиатские производители сейчас явно лидируют.',
    },
  ],
  listening: {
    title: 'Wirtschaftspodcast: Vom Garagenprojekt zum Marktführer',
    kind: 'dialog',
    text: `A: Frau Krämer, Ihr Start-up hat innerhalb von nur fünf Jahren den Sprung vom Garagenprojekt zum Marktführer geschafft. Wie ist Ihnen das gelungen?
B: Ehrlich gesagt mit viel Glück – und mit einem Geschäftsmodell, das von Anfang an skalierbar war. Wir haben eine Software entwickelt, die den Energieverbrauch in Bürogebäuden automatisch optimiert. Die Idee stieß zunächst auf wenig Gegenliebe, aber als die Energiepreise explodierten, wollten plötzlich alle mit uns reden.
A: Sie hatten also den richtigen Zeitpunkt erwischt.
B: Genau. Wobei man dazusagen muss, dass wir zwei Jahre lang rote Zahlen geschrieben haben. Es gab Monate, in denen wir nicht wussten, ob wir die Gehälter zahlen können. Eine Insolvenz stand mehr als einmal im Raum.
A: Wie haben Sie diese Phase überstanden?
B: Wir haben radikal den Rotstift angesetzt und alles gestrichen, was nicht unmittelbar zum Produkt beigetragen hat. Und wir hatten einen Risikokapitalgeber, der an uns geglaubt hat. Ohne ihn hätten wir es nicht geschafft.
A: Viele Gründerinnen und Gründer klagen, in Deutschland sei es viel schwerer als etwa in den USA, an Kapital zu kommen. Teilen Sie diese Einschätzung?
B: Leider ja. Hierzulande ist man sehr risikoscheu. Banken wollen Sicherheiten sehen, die ein junges Unternehmen gar nicht bieten kann. In den USA hingegen wird ein Scheitern eher als Lernerfahrung betrachtet. Da hat Amerika eindeutig die Nase vorn.
A: Inzwischen schreiben Sie schwarze Zahlen und expandieren ins Ausland. Wie geht es weiter?
B: Wir wollen in den nächsten zwei Jahren in Frankreich und Skandinavien deutliche Marktanteile gewinnen. Ein großer Vertrag mit einer Hotelkette ist bereits unter Dach und Fach. Außerdem bringen wir im Herbst eine Version für Privathaushalte auf den Markt.
A: Die Konkurrenz schläft aber nicht. Mehrere große Konzerne haben ähnliche Produkte angekündigt.
B: Das stimmt, und das setzt uns natürlich unter Druck. Aber wir sind schneller und näher an den Kunden. In großen Konzernen dauert es oft Monate, bis eine Entscheidung getroffen ist. Wir dagegen können innerhalb weniger Tage Maßnahmen ergreifen.
A: Zum Schluss: Welchen Rat würden Sie jungen Gründern geben?
B: Verlieben Sie sich nicht in Ihre Idee, sondern in das Problem, das Sie lösen wollen. Und suchen Sie sich ein Team, das auch in schwierigen Zeiten an einem Strang zieht.`,
    questions: [
      {
        question: 'Was bietet das Start-up von Frau Krämer an?',
        options: [
          'eine App für die Buchung von Hotelzimmern',
          'eine Software zur Optimierung des Energieverbrauchs in Bürogebäuden',
          'Beratung für Gründerinnen und Gründer',
          'Solaranlagen für Privathaushalte',
        ],
        answer: 1,
      },
      {
        question: 'Was war laut Frau Krämer der Wendepunkt für ihr Unternehmen?',
        options: [
          'eine Förderung durch den Staat',
          'der Einstieg eines großen Konzerns',
          'ein Fernsehauftritt',
          'der starke Anstieg der Energiepreise',
        ],
        answer: 3,
      },
      {
        question: 'Wie hat das Unternehmen die Verlustjahre überstanden?',
        options: [
          'durch drastische Einsparungen und einen Investor, der an das Team glaubte',
          'durch einen günstigen Bankkredit',
          'durch die Entlassung der Hälfte der Belegschaft',
        ],
        answer: 0,
      },
      {
        question: 'Wie beurteilt Frau Krämer die Finanzierungsbedingungen in Deutschland?',
        options: [
          'Sie seien besser als in den USA.',
          'Sie hätten sich in den letzten Jahren stark verbessert.',
          'Sie seien wegen der Risikoscheu schwieriger als in den USA.',
          'Sie spielten für den Erfolg keine Rolle.',
        ],
        answer: 2,
      },
      {
        question: 'Welchen Vorteil sieht sie gegenüber großen Konzernen?',
        options: [
          'mehr Kapital',
          'eine größere Bekanntheit',
          'niedrigere Preise',
          'Schnelligkeit und Kundennähe',
        ],
        answer: 3,
      },
    ],
  },
  writing: {
    taskRu:
      'Вы хотите открыть собственное дело (например, сервис по ремонту электроники или экологичный магазин). Напишите официальное письмо в городской отдел содействия экономике (Wirtschaftsförderung) с просьбой о консультации и финансовой поддержке.',
    taskDe:
      'Sie planen die Gründung eines eigenen Unternehmens. Schreiben Sie einen formellen Brief an die Wirtschaftsförderung Ihrer Stadt, in dem Sie Ihr Vorhaben vorstellen und um Beratung sowie finanzielle Unterstützung bitten.',
    points: [
      'Stellen Sie Ihre Geschäftsidee und Ihr Geschäftsmodell kurz vor.',
      'Erläutern Sie, worin der Nutzen für Kunden und für die Region besteht.',
      'Beschreiben Sie den bisherigen Stand (Finanzierung, Marktanalyse, Partner).',
      'Formulieren Sie Ihr konkretes Anliegen und bitten Sie um einen Gesprächstermin.',
    ],
    minWords: 220,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'hiermit möchte ich Ihnen mein Gründungsvorhaben vorstellen.',
      'Unser Geschäftsmodell beruht darauf, dass …',
      'Erste Gespräche mit potenziellen Kunden haben gezeigt, dass …',
      'Für die Markteinführung benötigen wir …',
      'Ich würde mich freuen, wenn Sie mir Informationen über Fördermöglichkeiten zur Verfügung stellen könnten.',
      'Gern stehe ich Ihnen für ein persönliches Gespräch zur Verfügung.',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы презентуете свой стартап опытному инвестору и просите 200 000 евро в обмен на 15 % компании. Инвестор задаёт неудобные вопросы о бизнес-модели, конкурентах и рентабельности.',
    aiRole:
      'Sie sind Thomas Berger, erfahrener Business Angel, der schon in über dreißig Start-ups investiert hat. Sie sprechen auf C1-Niveau, direkt, mit vielen Wendungen aus der Geschäftswelt, und sind grundsätzlich skeptisch. Sie fragen hartnäckig nach Zahlen, Wettbewerbern und dem Geschäftsmodell und verlangen für jede Behauptung eine stichhaltige Begründung.',
    opener:
      'Sie haben fünf Minuten. Erzählen Sie mir, welches Problem Sie lösen, warum ausgerechnet Sie die Nase vorn haben werden und wann Sie schwarze Zahlen schreiben.',
    tasksRu: [
      'Кратко представьте продукт и проблему, которую он решает.',
      'Используйте не менее пяти коллокаций и функциональных конструкций из урока.',
      'Объясните, чем вы лучше конкурентов и когда планируете выйти на прибыль.',
      'Договоритесь об условиях сделки или аргументированно отклоните встречное предложение.',
    ],
    readAloud: [
      'Unser Geschäftsmodell ist von Anfang an skalierbar, sodass wir innerhalb von zwei Jahren deutliche Marktanteile gewinnen können.',
      'Nachdem wir den Rotstift angesetzt und unnötige Ausgaben gestrichen hatten, schrieben wir bereits im dritten Geschäftsjahr schwarze Zahlen.',
      'Sobald der Vertrag mit dem Risikokapitalgeber unter Dach und Fach ist, kommt unsere Technologie auch in Frankreich und Skandinavien zum Einsatz.',
    ],
  },
};
