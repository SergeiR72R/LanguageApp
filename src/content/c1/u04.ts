import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-04',
  level: 'C1',
  order: 4,
  title: 'Globalisierung',
  titleRu: 'Глобализация',
  goalsRu: [
    'Связывать мысли в связный текст с помощью книжных коннекторов (folglich, demnach, indes, zumal, wohingegen)',
    'Правильно строить порядок слов после союзов и союзных наречий',
    'Понимать экспертные дискуссии об экономике и мировой торговле',
    'Писать структурированное эссе-рассуждение о последствиях глобализации',
  ],
  grammar: {
    topic: 'Textkohärenz und Konnektoren',
    topicRu: 'Связность текста и коннекторы',
    explanationRu: `Текст уровня C1 отличается не только словарём, но и **связностью** (Kohärenz): мысли логически вытекают одна из другой. Для этого используются коннекторы. Главное — помнить, к какой группе относится коннектор, потому что от этого зависит **порядок слов**.

**1. Союзные наречия** (Konjunktionaladverbien) — занимают позицию 1 (тогда спрягаемый глагол идёт сразу после них) или стоят в среднем поле:

- **folglich, somit, infolgedessen** — следовательно: *Die Kosten steigen; **folglich verlagern** viele Firmen ihre Produktion.*
- **demnach** — согласно этому, стало быть: *Demnach **dürfte** das Wachstum sinken.*
- **indes / indessen** (книжн.) — однако; также «тем временем»: *Die Realität sieht **indes** anders aus.*
- **hingegen, dagegen** — напротив.

**2. Подчинительные союзы** — глагол в конце придаточного:

- **wohingegen** — тогда как: *…, wohingegen die Importe **sinken**.*
- **zumal** — тем более что (добавляет ещё одну, особенно весомую причину): *…, zumal die Lage instabil **ist**.*
- **insofern/insoweit … als** — в той мере, в какой; постольку, поскольку: *Die Kritik ist **insofern** berechtigt, **als** die Gewinne ungleich verteilt **sind**.*

**3. geschweige denn** — «не говоря уже о»; употребляется **только после отрицания** или слов вроде *kaum*: *Er kann kaum Englisch, **geschweige denn** Chinesisch.*

**Отсылочные элементы** также создают связность: *dies, Letzteres/Ersteres, Ersterer … Letzterer, vor diesem Hintergrund, in diesem Zusammenhang*.

**Типичные ошибки русскоговорящих:**

- после *folglich, demnach* сохраняют прямой порядок, как после русского «следовательно»: *Folglich die Firmen verlagern …* ✗;
- после *zumal* и *wohingegen* ставят глагол на второе место ✗ — это подчинительные союзы;
- говорят *insofern, dass* — правильно *insofern, als*;
- используют *geschweige denn* после утвердительного предложения ✗.`,
    table: [
      ['Коннектор', 'Значение', 'Порядок слов'],
      ['folglich, somit, demnach', 'следовательно; согласно этому', 'позиция 1 → инверсия'],
      ['indes(sen), hingegen', 'однако; напротив', 'позиция 1 или среднее поле'],
      ['wohingegen', 'тогда как', 'глагол в конце'],
      ['zumal', 'тем более что', 'глагол в конце'],
      ['insofern … als', 'постольку … поскольку', 'глагол в конце (после als)'],
      ['geschweige denn', 'не говоря уже о', 'после отрицания'],
    ],
    examples: [
      {
        de: 'Die Produktionskosten in Asien sind gestiegen; folglich verlagern einige Unternehmen ihre Fertigung zurück nach Europa.',
        ru: 'Производственные издержки в Азии выросли; следовательно, некоторые компании переносят производство обратно в Европу.',
      },
      {
        de: 'Die Konzerne versprechen faire Löhne; die Wirklichkeit sieht indes oft anders aus.',
        ru: 'Концерны обещают справедливую оплату труда; действительность, однако, часто выглядит иначе.',
      },
      {
        de: 'Die Industrieländer profitieren vom Freihandel, wohingegen viele Entwicklungsländer kaum Zugang zu den Märkten haben.',
        ru: 'Промышленно развитые страны выигрывают от свободной торговли, тогда как многие развивающиеся страны почти не имеют доступа к рынкам.',
      },
      {
        de: 'Die Globalisierung ist insofern ambivalent, als sie Wohlstand schafft, aber auch Ungleichheit verschärft.',
        ru: 'Глобализация амбивалентна в том смысле, что она создаёт благосостояние, но и усиливает неравенство.',
      },
      {
        de: 'Die Lieferketten müssen widerstandsfähiger werden, zumal geopolitische Krisen zunehmen.',
        ru: 'Цепочки поставок должны стать устойчивее, тем более что геополитических кризисов становится больше.',
      },
      {
        de: 'Viele Kleinbauern können von ihrem Einkommen kaum leben, geschweige denn in neue Maschinen investieren.',
        ru: 'Многие мелкие фермеры едва могут прожить на свой доход, не говоря уже о том, чтобы инвестировать в новую технику.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die Transportkosten sind drastisch gestiegen. ___ lohnt sich die Produktion im Ausland für viele Firmen nicht mehr.',
        options: ['Folglich', 'Wohingegen', 'Zumal', 'Geschweige denn'],
        answer: 0,
        explanationRu:
          'После коннектора стоит спрягаемый глагол («lohnt») — значит, нужно союзное наречие на позиции 1. «wohingegen» и «zumal» требуют глагола в конце, «geschweige denn» — предшествующего отрицания.',
      },
      {
        type: 'choice',
        prompt: 'Ich kann mir kaum eine Wohnung in der Innenstadt leisten, ___ ein eigenes Haus.',
        options: ['zumal', 'geschweige denn', 'insofern', 'indes'],
        answer: 1,
        explanationRu:
          '«geschweige denn» («не говоря уже о») стоит после отрицательного или ограничительного высказывания («kaum») и вводит ещё менее вероятный элемент.',
      },
      {
        type: 'choice',
        prompt: 'Die Maßnahme ist insofern sinnvoll, ___ sie die Abhängigkeit von einzelnen Lieferanten verringert.',
        options: ['dass', 'als', 'wie', 'weil'],
        answer: 1,
        explanationRu:
          'Устойчивая пара «insofern … als» («постольку, поскольку»). Вариант «insofern, dass» распространён в разговорной речи, но считается ненормативным.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist korrekt?',
        options: [
          'Der Norden profitiert vom Handel, wohingegen fällt der Süden zurück.',
          'Der Norden profitiert vom Handel, wohingegen der Süden fällt zurück.',
          'Der Norden profitiert vom Handel, folglich der Süden zurückfällt.',
          'Der Norden profitiert vom Handel, wohingegen der Süden zurückfällt.',
        ],
        answer: 3,
        explanationRu:
          '«wohingegen» — подчинительный союз, поэтому глагол стоит в конце, а приставка не отделяется: «zurückfällt». После «folglich» был бы нужен глагол на втором месте.',
      },
      {
        type: 'gap',
        prompt: 'Wir sollten unsere Lieferanten diversifizieren, ___ die politische Lage in der Region äußerst instabil ist. (тем более что)',
        answers: ['zumal'],
        explanationRu:
          '«zumal» = «тем более что»: вводит дополнительную, особенно весомую причину. Это подчинительный союз — глагол «ist» стоит в конце.',
      },
      {
        type: 'gap',
        prompt: 'Laut der Prognose wird der Welthandel stagnieren. ___ müssen sich exportorientierte Unternehmen auf schwierige Jahre einstellen.',
        answers: ['Demnach', 'Folglich', 'Somit', 'Infolgedessen', 'Daher', 'Deshalb', 'Deswegen', 'Also'],
        hintRu: 'согласно этому / следовательно',
        explanationRu:
          '«Demnach» делает вывод из предыдущей информации (прогноза). Это союзное наречие: после него сразу идёт спрягаемый глагол «müssen».',
      },
      {
        type: 'gap',
        prompt: 'Die Konzerne versprechen faire Arbeitsbedingungen; die Wirklichkeit sieht ___ oft anders aus.',
        answers: ['indes', 'indessen', 'jedoch', 'allerdings', 'hingegen', 'dagegen', 'aber'],
        hintRu: 'книжное «однако»',
        explanationRu:
          '«indes» (книжн.) = «однако». Как союзное наречие оно может стоять в среднем поле после глагола и подлежащего.',
      },
      {
        type: 'gap',
        prompt: 'Freihandel ist ___ problematisch, als er lokale Märkte unter enormen Druck setzt.',
        answers: ['insofern', 'insoweit'],
        explanationRu:
          'Коррелят «insofern» (или «insoweit») в главном предложении образует пару с «als» в придаточном: «в той мере, в какой…».',
      },
      {
        type: 'order',
        words: ['Wir', 'investieren', 'nicht', 'in der Region,', 'zumal', 'die Rechtslage', 'unklar', 'ist.'],
        translationRu: 'Мы не инвестируем в этот регион, тем более что правовая ситуация неясна.',
        explanationRu: 'После «zumal» — порядок слов придаточного предложения: подлежащее, затем остальные члены, спрягаемый глагол в конце.',
      },
      {
        type: 'order',
        words: ['Viele Kleinbauern', 'können', 'kaum', 'überleben,', 'geschweige denn', 'investieren.'],
        translationRu: 'Многие мелкие фермеры едва могут выжить, не говоря уже об инвестициях.',
        explanationRu:
          '«geschweige denn» следует за ограничительным высказыванием с «kaum» и присоединяет элемент той же синтаксической функции (здесь — инфинитив).',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью «insofern … als».',
        prompt: 'Die Globalisierung ist ambivalent. Sie schafft Wohlstand, verschärft aber auch die Ungleichheit.',
        answers: [
          'Die Globalisierung ist insofern ambivalent, als sie Wohlstand schafft, aber auch die Ungleichheit verschärft.',
          'Die Globalisierung ist insofern ambivalent, als sie zwar Wohlstand schafft, aber auch die Ungleichheit verschärft.',
        ],
        explanationRu:
          '«insofern» стоит в главном предложении рядом с оцениваемым словом, «als» открывает придаточное, в котором глаголы стоят в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью «wohingegen».',
        prompt: 'In Europa sinkt die Geburtenrate. In vielen afrikanischen Ländern wächst die Bevölkerung rasant.',
        answers: [
          'In Europa sinkt die Geburtenrate, wohingegen die Bevölkerung in vielen afrikanischen Ländern rasant wächst.',
          'In Europa sinkt die Geburtenrate, wohingegen in vielen afrikanischen Ländern die Bevölkerung rasant wächst.',
        ],
        explanationRu:
          '«wohingegen» выражает противопоставление и вводит придаточное предложение: спрягаемый глагол «wächst» уходит в конец.',
      },
    ],
  },
  vocab: [
    {
      de: 'Lieferkette',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'цепочка поставок',
      example: 'Die Pandemie hat gezeigt, wie anfällig globale Lieferketten sind.',
      exampleRu: 'Пандемия показала, насколько уязвимы глобальные цепочки поставок.',
    },
    {
      de: 'Verflechtung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'переплетение, тесная взаимосвязь',
      example: 'Die wirtschaftliche Verflechtung zwischen China und Europa ist kaum noch rückgängig zu machen.',
      exampleRu: 'Экономическую взаимосвязь Китая и Европы уже почти невозможно разорвать.',
    },
    {
      de: 'verlagern',
      forms: 'etw. (Akk) in/nach + Akk verlagern',
      pos: 'verb',
      ru: 'переносить, перемещать (производство)',
      example: 'Der Konzern will seine Produktion teilweise nach Osteuropa verlagern.',
      exampleRu: 'Концерн хочет частично перенести производство в Восточную Европу.',
    },
    {
      de: 'Freihandel',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'свободная торговля',
      example: 'Befürworter des Freihandels betonen die Wohlstandsgewinne für alle Beteiligten.',
      exampleRu: 'Сторонники свободной торговли подчёркивают рост благосостояния всех участников.',
    },
    {
      de: 'Schwellenland',
      article: 'das',
      plural: '-¨er',
      pos: 'noun',
      ru: 'развивающаяся страна с быстро растущей экономикой',
      example: 'Schwellenländer wie Indien und Brasilien gewinnen weltpolitisch an Gewicht.',
      exampleRu: 'Такие страны, как Индия и Бразилия, набирают вес в мировой политике.',
    },
    {
      de: 'Abhängigkeit',
      article: 'die',
      plural: '-en',
      forms: 'von + Dat',
      pos: 'noun',
      ru: 'зависимость (от чего-либо)',
      example: 'Europa möchte seine Abhängigkeit von Rohstoffimporten verringern.',
      exampleRu: 'Европа хочет снизить зависимость от импорта сырья.',
    },
    {
      de: 'Wettbewerbsvorteil',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'конкурентное преимущество',
      example: 'Niedrige Energiepreise verschaffen den Unternehmen einen erheblichen Wettbewerbsvorteil.',
      exampleRu: 'Низкие цены на энергию дают компаниям значительное конкурентное преимущество.',
    },
    {
      de: 'Ungleichheit',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'неравенство',
      example: 'Die soziale Ungleichheit hat innerhalb vieler Länder zugenommen.',
      exampleRu: 'Социальное неравенство внутри многих стран усилилось.',
    },
    {
      de: 'sich abschotten',
      forms: 'gegen + Akk / von + Dat',
      pos: 'verb',
      ru: 'отгораживаться, изолироваться',
      example: 'Ein Land, das sich wirtschaftlich abschottet, schadet langfristig vor allem sich selbst.',
      exampleRu: 'Страна, которая экономически изолируется, в долгосрочной перспективе вредит прежде всего себе.',
    },
    {
      de: 'Zoll',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'пошлина; таможня',
      example: 'Die Regierung droht mit höheren Zöllen auf Importe aus Übersee.',
      exampleRu: 'Правительство грозит повысить пошлины на импорт из-за океана.',
    },
    {
      de: 'ausbeuten',
      forms: 'beutet aus, beutete aus, hat ausgebeutet',
      pos: 'verb',
      ru: 'эксплуатировать',
      example: 'In vielen Textilfabriken werden Arbeiterinnen nach wie vor ausgebeutet.',
      exampleRu: 'На многих текстильных фабриках работниц по-прежнему эксплуатируют.',
    },
    {
      de: 'widerstandsfähig',
      pos: 'adj',
      ru: 'устойчивый, стойкий',
      example: 'Unternehmen bemühen sich um widerstandsfähigere Lieferbeziehungen.',
      exampleRu: 'Компании стремятся к более устойчивым отношениям с поставщиками.',
    },
    {
      de: 'Wertschöpfung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'создание добавленной стоимости',
      example: 'Ein Großteil der Wertschöpfung findet längst nicht mehr im Inland statt.',
      exampleRu: 'Большая часть добавленной стоимости давно создаётся не внутри страны.',
    },
    {
      de: 'multinational',
      pos: 'adj',
      ru: 'многонациональный, транснациональный',
      example: 'Multinationale Konzerne verlagern ihre Gewinne oft in Steueroasen.',
      exampleRu: 'Транснациональные корпорации часто переводят прибыль в налоговые гавани.',
    },
    {
      de: 'Protektionismus',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'протекционизм',
      example: 'Ökonomen warnen vor einer neuen Welle des Protektionismus.',
      exampleRu: 'Экономисты предупреждают о новой волне протекционизма.',
    },
    {
      de: 'profitieren',
      forms: 'von + Dat',
      pos: 'verb',
      ru: 'извлекать выгоду, выигрывать (от чего-либо)',
      example: 'Nicht alle Bevölkerungsgruppen haben gleichermaßen von der Globalisierung profitiert.',
      exampleRu: 'Не все группы населения в равной мере выиграли от глобализации.',
    },
    {
      de: 'auf Kosten',
      forms: '+ Gen / von + Dat',
      pos: 'phrase',
      ru: 'за счёт (кого-либо/чего-либо)',
      example: 'Billige Kleidung wird häufig auf Kosten der Umwelt und der Arbeiterinnen produziert.',
      exampleRu: 'Дешёвую одежду часто производят за счёт окружающей среды и работниц.',
    },
    {
      de: 'ins Hintertreffen geraten',
      forms: 'gerät, geriet, ist geraten',
      pos: 'phrase',
      ru: 'отстать, оказаться в невыгодном положении',
      example: 'Bei der Digitalisierung ist Deutschland gegenüber anderen Ländern ins Hintertreffen geraten.',
      exampleRu: 'В цифровизации Германия отстала от других стран.',
    },
    {
      de: 'Hand in Hand gehen',
      forms: 'geht, ging, ist gegangen',
      pos: 'phrase',
      ru: 'идти рука об руку',
      example: 'Wirtschaftliches Wachstum und Umweltschutz müssen Hand in Hand gehen.',
      exampleRu: 'Экономический рост и защита окружающей среды должны идти рука об руку.',
    },
    {
      de: 'die Kehrseite der Medaille',
      pos: 'phrase',
      ru: 'обратная сторона медали',
      example: 'Die Kehrseite der Medaille sind die enormen Umweltschäden in den Produktionsländern.',
      exampleRu: 'Обратная сторона медали — огромный экологический ущерб в странах-производителях.',
    },
  ],
  listening: {
    title: 'Expertengespräch: Das Ende der Globalisierung?',
    kind: 'dialog',
    text: `A: Frau Professorin Lindner, seit der Pandemie ist immer häufiger von einer „Deglobalisierung“ die Rede. Erleben wir tatsächlich das Ende der Globalisierung?
B: Von einem Ende kann keine Rede sein. Der Welthandel ist auch in den letzten Jahren gewachsen, wenn auch langsamer als zuvor. Was sich indes verändert hat, ist die Art und Weise, wie Unternehmen ihre Lieferketten organisieren.
A: Inwiefern?
B: Jahrzehntelang galt nur ein Prinzip: Produziert wird dort, wo es am billigsten ist. Die Pandemie und mehrere geopolitische Krisen haben jedoch gezeigt, wie verwundbar dieses System ist. Folglich setzen viele Firmen heute stärker auf Sicherheit als auf Effizienz.
A: Was bedeutet das konkret?
B: Man verlagert Teile der Produktion zurück nach Europa oder in benachbarte Länder – Fachleute sprechen von Nearshoring. Außerdem werden Lieferanten breiter gestreut, um die Abhängigkeit von einzelnen Staaten zu verringern.
A: Das klingt nach einer vernünftigen Strategie. Gibt es auch eine Kehrseite der Medaille?
B: Durchaus. Widerstandsfähigere Lieferketten sind teurer, und diese Kosten werden letztlich an die Verbraucher weitergegeben. Hinzu kommt, dass gerade die Schwellenländer, die vom Freihandel enorm profitiert haben, ins Hintertreffen geraten könnten.
A: Globalisierungskritiker dürften das aber begrüßen. Sie argumentieren ja seit Langem, der Freihandel gehe auf Kosten der Ärmsten.
B: Diese Kritik ist insofern berechtigt, als die Gewinne der Globalisierung sehr ungleich verteilt wurden. Man darf aber nicht vergessen, dass Hunderte Millionen Menschen in Asien gerade durch die Integration in den Weltmarkt der extremen Armut entkommen sind. Ein Rückzug in den Protektionismus würde demnach ausgerechnet die Ärmsten am härtesten treffen.
A: Dennoch erhöhen viele Länder ihre Zölle. Halten Sie das für einen Fehler?
B: Grundsätzlich ja, zumal Zölle selten das erreichen, was man sich von ihnen verspricht. Sie schützen kurzfristig einzelne Branchen, wohingegen die Volkswirtschaft insgesamt verliert. Wer sich abschottet, kann seine Industrie kaum modernisieren, geschweige denn international wettbewerbsfähig halten.
A: Was wäre aus Ihrer Sicht der richtige Weg?
B: Eine kluge Balance: offene Märkte, aber faire Regeln, die auch Sozial- und Umweltstandards einschließen. Wirtschaftliche Offenheit und soziale Verantwortung müssen Hand in Hand gehen.`,
    questions: [
      {
        question: 'Wie beurteilt Professorin Lindner die These vom Ende der Globalisierung?',
        options: [
          'Sie hält sie für zutreffend.',
          'Sie hält sie für falsch, da der Welthandel weiterhin wächst.',
          'Sie meint, der Welthandel sei stark geschrumpft.',
          'Sie hält die Frage für nicht beantwortbar.',
        ],
        answer: 1,
      },
      {
        question: 'Was hat sich nach Ansicht der Expertin verändert?',
        options: [
          'Unternehmen legen heute mehr Wert auf Sicherheit als auf Effizienz.',
          'Die Produktion findet nur noch in Asien statt.',
          'Die Transportkosten sind gesunken.',
        ],
        answer: 0,
      },
      {
        question: 'Welchen Nachteil widerstandsfähigerer Lieferketten nennt sie?',
        options: [
          'Sie sind schwer zu kontrollieren.',
          'Sie verringern die Qualität der Produkte.',
          'Sie führen zu Arbeitsplatzverlusten in Europa.',
          'Sie verteuern die Produkte für die Verbraucher.',
        ],
        answer: 3,
      },
      {
        question: 'Welche Haltung nimmt die Expertin gegenüber der Globalisierungskritik ein?',
        options: [
          'Sie lehnt sie vollständig ab.',
          'Sie teilt sie uneingeschränkt.',
          'Sie hält sie für teilweise berechtigt, verweist aber auf den Rückgang der Armut in Asien.',
          'Sie hält sie für ein Problem der Schwellenländer.',
        ],
        answer: 2,
      },
      {
        question: 'Was denkt sie über höhere Zölle?',
        options: [
          'Sie schützen die Volkswirtschaft insgesamt.',
          'Sie nützen einzelnen Branchen kurzfristig, schaden aber der Gesamtwirtschaft.',
          'Sie sind das beste Mittel gegen Ungleichheit.',
          'Sie haben keinerlei Auswirkungen.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu:
      'Напишите эссе-рассуждение: должен ли Евросоюз вернуть в Европу производство стратегически важных товаров (лекарств, микрочипов), даже если это приведёт к росту цен? Используйте коннекторы из этого урока.',
    taskDe:
      'Verfassen Sie eine Erörterung zu der Frage, ob die EU die Produktion strategisch wichtiger Güter wie Medikamente oder Halbleiter nach Europa zurückholen sollte – auch wenn dadurch die Preise steigen.',
    points: [
      'Skizzieren Sie den Hintergrund: Abhängigkeiten in globalen Lieferketten.',
      'Erläutern Sie Argumente für eine Rückverlagerung der Produktion.',
      'Diskutieren Sie Gegenargumente (Kosten, Folgen für Schwellenländer, Protektionismus).',
      'Ziehen Sie ein ausgewogenes Fazit mit einer eigenen Empfehlung.',
    ],
    minWords: 250,
    usefulPhrases: [
      'Vor dem Hintergrund der jüngsten Krisen stellt sich die Frage, …',
      'Ein gewichtiges Argument für … ist, dass …',
      'Dies hat zur Folge, dass …; folglich …',
      'Die Befürworter übersehen indes, dass …',
      'Diese Forderung ist insofern nachvollziehbar, als …',
      '…, wohingegen …',
      'Dies gilt umso mehr, als … / zumal …',
      'Alles in allem komme ich zu dem Schluss, dass …',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы обсуждаете закон о цепочках поставок (Lieferkettengesetz), обязывающий компании контролировать соблюдение прав человека у поставщиков. Вы — за этот закон. Ваш собеседник — директор среднего текстильного предприятия, который считает закон бюрократическим бременем.',
    aiRole:
      'Sie sind Markus Hellwig, Geschäftsführer eines mittelständischen Textilunternehmens, das in Bangladesch und Vietnam produzieren lässt. Sie sprechen auf C1-Niveau, pointiert und mit idiomatischen Wendungen, und halten das Lieferkettengesetz für bürokratisch und realitätsfern. Sie widersprechen entschieden, bringen Gegenbeispiele und verlangen, dass Ihr Gegenüber jede Behauptung begründet.',
    opener:
      'Wissen Sie, ich halte viel von Menschenrechten – aber dieses Gesetz ist gut gemeint und schlecht gemacht. Wie soll ein Betrieb mit 300 Leuten bitte jeden Zulieferer in Asien kontrollieren?',
    tasksRu: [
      'Изложите аргументы в пользу закона, связывая их коннекторами (zumal, folglich, demnach).',
      'Признайте обоснованность части возражений с помощью «insofern … als».',
      'Противопоставьте интересы компаний и работников с помощью «wohingegen».',
      'Предложите способы снизить бюрократическую нагрузку на средние предприятия.',
    ],
    readAloud: [
      'Die Globalisierung ist insofern ambivalent, als sie Wohlstand schafft, gleichzeitig aber die Ungleichheit zwischen und innerhalb der Länder verschärft.',
      'Viele Unternehmen verlagern ihre Produktion zurück nach Europa, zumal sich die Abhängigkeit von einzelnen Lieferanten in der Krise als gefährlich erwiesen hat.',
      'Wer sich wirtschaftlich abschottet, kann seine Industrie kaum modernisieren, geschweige denn auf Dauer wettbewerbsfähig halten.',
    ],
  },
};
