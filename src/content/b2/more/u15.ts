import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Sie ist ___, aber ihr Mann kommt aus Polen.',
      options: ['Deutsche', 'Deutscher', 'eine Deutscher', 'Deutschen'],
      answer: 0,
      explanationRu: 'О женщине без артикля — окончание -e: Sie ist Deutsche. Форма Deutscher — только для мужчины.',
    },
    {
      type: 'choice',
      prompt: 'Das ist ein ___ von mir aus der Schulzeit.',
      options: ['Bekannte', 'Bekannter', 'Bekannten', 'Bekanntes'],
      answer: 1,
      explanationRu: 'После ein в Nominativ мужского рода субстантивированное прилагательное получает -er: ein Bekannter.',
    },
    {
      type: 'gap',
      prompt: 'Im Wartezimmer der Notaufnahme saßen viele ___.',
      answers: ['Kranke'],
      hintRu: 'krank',
      explanationRu: 'viele + мн. ч. без артикля → сильное окончание -e: viele Kranke. С большой буквы, потому что это существительное.',
    },
    {
      type: 'gap',
      prompt: 'Heute ist auf dem Amt nichts ___ passiert.',
      answers: ['Besonderes'],
      hintRu: 'besonders',
      explanationRu: 'После nichts — сильное окончание среднего рода -es: nichts Besonderes.',
    },
    {
      type: 'gap',
      prompt: 'In der Ausstellung haben wir viel ___ über die Geschichte der Gastarbeiter erfahren.',
      answers: ['Interessantes'],
      hintRu: 'interessant',
      explanationRu: 'viel (в значении «много чего») + -es: viel Interessantes. Сравните: viele Interessierte — «много заинтересованных людей».',
    },
    {
      type: 'choice',
      prompt: 'Wir haben mit zwei ___ aus dem Integrationskurs gesprochen.',
      options: ['Teilnehmenden', 'Teilnehmende', 'Teilnehmender', 'Teilnehmendem'],
      answer: 0,
      explanationRu: 'mit + Dativ, мн. ч. без артикля (zwei не влияет на окончание) → -en: mit zwei Teilnehmenden.',
    },
    {
      type: 'gap',
      prompt: 'Der ___ wurde sofort ins Krankenhaus gebracht.',
      answers: ['Verletzte'],
      hintRu: 'verletzt, Partizip II',
      explanationRu: 'После der в Nominativ — слабое окончание -e: der Verletzte («раненый, пострадавший»).',
    },
    {
      type: 'gap',
      prompt: 'Meine Schwester arbeitet als ___ bei der Ausländerbehörde.',
      answers: ['Beamtin'],
      hintRu: 'der Beamte → женский род?',
      explanationRu: 'Исключение: der Beamte склоняется как прилагательное, но женская форма — die Beamtin (не *die Beamte).',
    },
    {
      type: 'choice',
      prompt: 'Welche Form ist FALSCH?',
      options: ['ein Bekannter', 'ein Kollege', 'ein Deutscher', 'ein Beamte'],
      answer: 3,
      explanationRu: 'der Beamte — субстантивированное причастие, поэтому ein Beamter. А der Kollege относится к n-склонению: ein Kollege (без -r). Это частая путаница.',
    },
    {
      type: 'choice',
      prompt: 'Die Stiftung beschäftigt sich zurzeit mit etwas ganz ___.',
      options: ['Neuem', 'Neues', 'Neuen', 'Neue'],
      answer: 0,
      explanationRu: 'mit + Dativ. После etwas — сильное окончание, в Dativ среднего рода это -em: mit etwas Neuem.',
    },
    {
      type: 'gap',
      prompt: 'Die Interessen der ___ müssen bei der Planung stärker berücksichtigt werden.',
      answers: ['Betroffenen'],
      hintRu: 'betroffen, Partizip II',
      explanationRu: 'Genitiv мн. ч. с артиклем der → слабое окончание -en: der Betroffenen («тех, кого это касается»).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените группу с придаточным субстантивированным причастием.',
      prompt: 'Die Personen, die befragt wurden, waren mehrheitlich zufrieden.',
      answers: ['Die Befragten waren mehrheitlich zufrieden.'],
      explanationRu: 'Partizip II befragt → die Befragten (мн. ч. с артиклем → -en). Это типичная форма в отчётах и статистике.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните предложение с субстантивированного прилагательного в превосходной степени.',
      prompt: 'Am wichtigsten ist, dass man die Sprache im Alltag benutzt.',
      answers: ['Das Wichtigste ist, dass man die Sprache im Alltag benutzt.'],
      explanationRu: 'am wichtigsten (наречие) → das Wichtigste (существительное среднего рода, «самое важное»).',
    },
    {
      type: 'order',
      words: ['Für', 'viele', 'Zugewanderte', 'war', 'das Schwierigste', 'die Anerkennung', 'des Abschlusses.'],
      translationRu: 'Для многих переселенцев самым трудным было признание диплома.',
      explanationRu: 'für + Akkusativ, viele + мн. ч. без артикля → Zugewanderte (-e). Das Schwierigste — средний род, абстрактное понятие.',
    },
    {
      type: 'order',
      words: ['Das Schöne', 'an diesem Projekt', 'ist,', 'dass', 'Einheimische und Zugewanderte', 'voneinander', 'lernen.'],
      translationRu: 'Прекрасно в этом проекте то, что местные и переселенцы учатся друг у друга.',
      explanationRu: 'das Schöne an etwas (Dat) — «прекрасное в чём-то». В придаточном с dass глагол стоит в конце.',
    },
    {
      type: 'choice',
      prompt: 'Ein ___ hat mir den Weg zum Rathaus gezeigt.',
      options: ['freundlicher Einheimischer', 'freundliche Einheimische', 'freundlicher Einheimische', 'freundlichen Einheimischen'],
      answer: 0,
      explanationRu: 'После ein оба слова — обычное прилагательное и субстантивированное — получают одинаковое окончание -er: ein freundlicher Einheimischer.',
    },
    {
      type: 'choice',
      prompt: 'Der Verein ist ein Zusammenschluss ___.',
      options: ['engagierter Ehrenamtlicher', 'engagierten Ehrenamtlichen', 'engagierte Ehrenamtliche', 'engagierter Ehrenamtlichen'],
      answer: 0,
      explanationRu: 'Genitiv мн. ч. без артикля → сильное окончание -er у обоих слов: engagierter Ehrenamtlicher («объединение активных волонтёров»). С артиклем было бы der engagierten Ehrenamtlichen.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените группу с придаточным субстантивированным причастием (с наречием neu).',
      prompt: 'Die Menschen, die neu angekommen sind, erhalten eine Begrüßungsmappe.',
      answers: ['Die neu Angekommenen erhalten eine Begrüßungsmappe.', 'Neu Angekommene erhalten eine Begrüßungsmappe.'],
      explanationRu: 'Partizip II angekommen → die Angekommenen; наречие neu остаётся со строчной буквы и стоит перед ним: die neu Angekommenen.',
    },
    {
      type: 'gap',
      prompt: 'Die Familie, ___ Sohn jetzt Medizin studiert, kam 2015 aus Syrien.',
      answers: ['deren'],
      hintRu: 'повторение: относительное местоимение в Genitiv',
      explanationRu: 'Повторение: «семья, чей сын …» — Genitiv женского рода → deren.',
    },
    {
      type: 'choice',
      prompt: 'Die Anträge der Asylsuchenden ___ zurzeit schneller bearbeitet als im letzten Jahr.',
      options: ['werden', 'sind', 'haben', 'wurde'],
      answer: 0,
      explanationRu: 'Повторение: пассив процесса в настоящем времени — werden + Partizip II. Подлежащее die Anträge во мн. ч. → werden.',
    },
  ],
  reading: [
    {
      title: 'Herkunftssprachen als Schulfach?',
      textType: 'Meinungstexte',
      texts: [
        {
          label: 'a',
          heading: 'Irina Wolkowa, Deutschlehrerin',
          body: `Ich unterrichte seit fünfzehn Jahren Deutsch an einer Gesamtschule und bin selbst mit Russisch als Muttersprache aufgewachsen. Aus Erfahrung weiß ich: Kinder, die ihre Erstsprache gut beherrschen, lernen auch Deutsch leichter, weil sie schon verstanden haben, wie Sprache funktioniert. Trotzdem wird Mehrsprachigkeit an vielen Schulen noch als Problem behandelt statt als Chance. Ich wünsche mir, dass Herkunftssprachen als reguläres Wahlfach mit Noten im Zeugnis angeboten werden – und zwar nicht am späten Nachmittag, wenn die Kinder müde sind, sondern im normalen Stundenplan. Das wäre auch ein Zeichen der Wertschätzung gegenüber den Familien.`,
        },
        {
          label: 'b',
          heading: 'Thomas Berger, Vater von zwei Kindern',
          body: `Ich habe nichts gegen andere Sprachen, ganz im Gegenteil. Aber unsere Schule hat schon jetzt zu wenige Lehrkräfte, und in der Klasse meiner Tochter fällt regelmäßig Mathematik aus. Wenn man nun zusätzlich Türkisch, Arabisch, Polnisch und Russisch anbieten will – woher sollen die Lehrer kommen? Die Schule sollte sich zuerst darauf konzentrieren, dass alle Kinder am Ende der Grundschule sicher Deutsch lesen und schreiben können. Für die Herkunftssprachen sind meiner Meinung nach eher die Familien und die Kulturvereine zuständig.`,
        },
        {
          label: 'c',
          heading: 'Dr. Leyla Aydın, Sprachwissenschaftlerin',
          body: `Die Forschung ist hier ziemlich eindeutig: Mehrsprachig aufwachsende Kinder haben keinen Nachteil, wenn sie in beiden Sprachen gefördert werden. Problematisch wird es erst, wenn eine Sprache ignoriert oder abgewertet wird. Viele Jugendliche, die ich interviewt habe, sprechen ihre Familiensprache nur noch auf „Küchenniveau“ – sie können damit weder einen Zeitungsartikel lesen noch einen formellen Brief schreiben. Das ist ein Verlust, übrigens auch wirtschaftlich: Unternehmen suchen händeringend Leute, die etwa Arabisch oder Ukrainisch auf hohem Niveau beherrschen. Gezwungen werden sollte allerdings niemand – das Angebot muss freiwillig bleiben.`,
        },
        {
          label: 'd',
          heading: 'Markus Lehmann, Schulleiter',
          body: `An unserer Schule haben wir vor drei Jahren Polnisch und Türkisch als Wahlfächer eingeführt. Das Interesse war größer als erwartet, und zwar auch bei Kindern ohne polnische oder türkische Wurzeln. Ehrlich gesagt war die Organisation aber ein Kraftakt: Die Lehrkräfte arbeiten an drei Schulen gleichzeitig, und die Stundenpläne zu koordinieren, ist jedes Halbjahr ein Puzzle. Ohne zusätzliche Mittel vom Land wird das nicht flächendeckend funktionieren. Wer A sagt, muss auch B sagen: Wenn die Politik Mehrsprachigkeit will, muss sie dafür auch bezahlen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte a–d. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте тексты a–d. Какое высказывание принадлежит какому человеку? Одного человека можно выбирать несколько раз.',
          options: ['Irina Wolkowa', 'Thomas Berger', 'Dr. Leyla Aydın', 'Markus Lehmann'],
          items: [
            {
              kind: 'match',
              prompt: 'Wer seine Erstsprache gut beherrscht, hat es beim Deutschlernen leichter.',
              answer: 0,
              explanationRu: 'Ирина: дети, хорошо владеющие первым языком, легче учат немецкий, потому что понимают, как устроен язык.',
            },
            {
              kind: 'match',
              prompt: 'Die Schule sollte im Moment andere Prioritäten setzen.',
              answer: 1,
              explanationRu: 'Томас: школа должна сначала сосредоточиться на том, чтобы все дети уверенно читали и писали по-немецки.',
            },
            {
              kind: 'match',
              prompt: 'Der Unterricht in den Herkunftssprachen darf nicht verpflichtend sein.',
              answer: 2,
              explanationRu: 'Д-р Айдын: «Gezwungen werden sollte allerdings niemand – das Angebot muss freiwillig bleiben.»',
            },
            {
              kind: 'match',
              prompt: 'Auch Kinder ohne familiären Bezug zu der Sprache haben sich für das Angebot interessiert.',
              answer: 3,
              explanationRu: 'Лемман: интерес проявили и дети без польских или турецких корней.',
            },
            {
              kind: 'match',
              prompt: 'Viele junge Menschen können ihre Familiensprache nur für einfache Alltagssituationen nutzen.',
              answer: 2,
              explanationRu: 'Д-р Айдын: многие подростки владеют языком семьи лишь «на кухонном уровне».',
            },
            {
              kind: 'match',
              prompt: 'Der Unterricht sollte zu einer Zeit stattfinden, in der die Kinder noch aufnahmefähig sind.',
              answer: 0,
              explanationRu: 'Ирина: не во второй половине дня, когда дети устали, а в обычном расписании.',
            },
            {
              kind: 'match',
              prompt: 'Ohne zusätzliche Finanzierung lässt sich das Angebot nicht überall einführen.',
              answer: 3,
              explanationRu: 'Лемман: без дополнительных средств от земли это не будет работать повсеместно; политика должна за это платить.',
            },
            {
              kind: 'match',
              prompt: 'Die Vermittlung der Herkunftssprache ist eher eine Aufgabe außerhalb der Schule.',
              answer: 1,
              explanationRu: 'Томас: за языки происхождения отвечают скорее семьи и культурные объединения.',
            },
            {
              kind: 'match',
              prompt: 'Gute Kenntnisse in Herkunftssprachen sind auf dem Arbeitsmarkt gefragt.',
              answer: 2,
              explanationRu: 'Д-р Айдын: компании отчаянно ищут людей, владеющих, например, арабским или украинским на высоком уровне.',
            },
          ],
        },
      ],
    },
    {
      title: 'Man rief Arbeitskräfte …',
      textType: 'Zeitungsartikel (Lückentext)',
      texts: [
        {
          body: `Am 10. September 1964 wurde auf dem Bahnhof Köln-Deutz ein Mann feierlich empfangen: Armando Rodrigues de Sá aus Portugal galt offiziell als der millionste Gastarbeiter in der Bundesrepublik. [1] Das Foto des etwas verlegen lächelnden Mannes erschien in allen Zeitungen. Es steht bis heute für eine Epoche, die Deutschland nachhaltig verändert hat.

Mitte der Fünfzigerjahre boomte die westdeutsche Wirtschaft, doch in Fabriken, Bergwerken und auf Baustellen fehlten Arbeitskräfte. Die Bundesregierung schloss deshalb ab 1955 Anwerbeabkommen mit Italien, Spanien, Griechenland, der Türkei und weiteren Ländern. [2] Die Angeworbenen sollten einige Jahre arbeiten, Geld verdienen und dann zurückkehren – so jedenfalls lautete der Plan.

Die Wirklichkeit sah anders aus. Viele Unternehmen wollten ihre eingearbeiteten Beschäftigten nicht schon nach kurzer Zeit wieder verlieren. [3] Gleichzeitig holten immer mehr Arbeiter ihre Familien nach. Untergebracht waren die Neuankömmlinge zunächst oft in einfachen Wohnheimen, nicht selten in Mehrbettzimmern direkt neben dem Werksgelände.

Um Sprachkurse oder gar Integration kümmerte sich damals kaum jemand. [4] Viele der Zugewanderten lernten Deutsch deshalb nur bruchstückhaft, am Fließband oder von Kollegen. Ihre Kinder dagegen wuchsen bereits in deutschen Schulen auf und wurden für die Eltern oft zu Dolmetschern im Alltag.

1973 beendete die Bundesregierung die Anwerbung wegen der Ölkrise. [5] Zahlreiche ehemalige Gastarbeiter entschieden sich nun bewusst zu bleiben, weil eine spätere Wiedereinreise kaum noch möglich gewesen wäre. Aus dem vorübergehenden Aufenthalt war ein Leben in Deutschland geworden.

Heute leben die Kinder und Enkel der damaligen Arbeitsmigranten in dritter und vierter Generation in Deutschland. Sie sind Ärztinnen, Unternehmer, Abgeordnete oder Fußballnationalspieler. [6] Ein Satz des Schriftstellers Max Frisch fasst die Erfahrung jener Jahre bis heute treffend zusammen: „Man hat Arbeitskräfte gerufen, und es kommen Menschen.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Die erwartete Massenrückkehr blieb jedoch aus.',
            'Gesucht wurden vor allem junge, gesunde Männer für einfache Tätigkeiten.',
            'Die meisten Gastarbeiter kehrten deshalb schon nach wenigen Monaten in ihre Heimat zurück.',
            'Man ging schließlich davon aus, dass die „Gäste“ ohnehin bald wieder gehen würden.',
            'Zur Begrüßung bekam er einen Blumenstrauß und ein Moped geschenkt.',
            'Sie drängten deshalb darauf, die Aufenthaltsgenehmigungen zu verlängern.',
            'Die deutschen Gewerkschaften lehnten die Anwerbung von Anfang an grundsätzlich ab.',
            'Die Frage, ob sie „richtige“ Deutsche sind, stellen sie sich längst nicht mehr – manche Mitmenschen stellen sie ihnen aber noch immer.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 4,
              explanationRu: 'Речь идёт о торжественной встрече (feierlich empfangen) — логично продолжение о подарке «er» = Armando Rodrigues de Sá.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 1,
              explanationRu: 'После упоминания соглашений о вербовке — уточнение, кого искали; следующее предложение продолжает: die Angeworbenen sollten …',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 5,
              explanationRu: '«Sie» = Unternehmen: фирмы не хотели терять обученных работников, поэтому добивались продления разрешений.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 3,
              explanationRu: 'Объяснение, почему никто не заботился о языковых курсах: считали, что «гости» скоро уедут.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 0,
              explanationRu: 'После прекращения вербовки ожидали массового возвращения, но многие решили остаться — jedoch выражает противопоставление.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 7,
              explanationRu: '«sie» = Kinder und Enkel: они давно часть общества, но вопрос об их «немецкости» им иногда всё ещё задают. Предложение c (вернулись через несколько месяцев) противоречит тексту.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Radiodiskussion: Fachkräfte aus dem Ausland',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin Frau Seidel',
        B: 'Dr. Jens Kühn, Geschäftsführer eines Pflegedienstes',
        C: 'Daria Petrova, Pflegefachkraft und Beraterin',
      },
      situation: 'Sie hören eine Diskussion im Radio. Sie hören den Text einmal.',
      text: `A: Herzlich willkommen zu „Forum am Abend“. Deutschland sucht dringend Fachkräfte, gleichzeitig klagen viele Zugewanderte über hohe Hürden. Bei mir im Studio sind Dr. Jens Kühn, Geschäftsführer eines Pflegedienstes in Hannover, und Daria Petrova, die vor acht Jahren als Krankenpflegerin aus Bulgarien kam und heute Zugewanderte bei der Anerkennung ihrer Abschlüsse berät. Herr Kühn, wie groß ist das Problem bei Ihnen?
B: Sehr groß. Wir könnten sofort zwölf Pflegekräfte einstellen. Etwa ein Drittel unseres Teams hat den Abschluss im Ausland gemacht. Ohne diese Kolleginnen und Kollegen müssten wir schon heute Patienten ablehnen.
A: Frau Petrova, Sie haben das Anerkennungsverfahren selbst durchlaufen. Wie war das?
C: Ehrlich gesagt: zermürbend. Ich hatte fünf Jahre Berufserfahrung auf einer Intensivstation, aber hier durfte ich zunächst nur als Hilfskraft arbeiten. Das Verfahren hat vierzehn Monate gedauert. Das Schlimmste war nicht die Arbeit, sondern das Gefühl, dass meine Erfahrung nichts wert ist.
B: Da muss ich zumindest teilweise widersprechen. Die Prüfungen haben ja einen Sinn. Pflege ist nicht in allen Ländern gleich organisiert, und wir tragen Verantwortung für die Patienten.
C: Das bestreitet niemand. Aber warum müssen Unterlagen mehrfach beglaubigt und übersetzt werden? Und warum kann ich die fehlenden Inhalte nicht parallel zur Arbeit nachholen, statt monatelang auf einen Bescheid zu warten?
A: Herr Kühn, was tun Sie als Arbeitgeber, damit sich neue Kolleginnen und Kollegen schneller zurechtfinden?
B: Wir stellen jeder neuen Kraft eine Patin oder einen Paten aus dem Team zur Seite, und wir bezahlen den Sprachkurs während der Arbeitszeit. Das kostet Geld, aber seitdem kündigen deutlich weniger Leute.
A: Das klingt ja geradezu vorbildlich.
C: Für große Betriebe vielleicht. In vielen kleinen Einrichtungen gibt es so etwas nicht, da wird man ins kalte Wasser geworfen. Und ein Punkt wird oft vergessen: die Familien. Wenn der Partner keinen Job findet und die Kinder keinen Kitaplatz bekommen, ziehen die Fachkräfte nach zwei Jahren weiter – nach Kanada oder in die Schweiz.
A: Viele Hörerinnen und Hörer schreiben uns gerade, dass auch der Umgang im Alltag eine große Rolle spielt.
B: Absolut. Gegen ein unfreundliches Klima auf dem Amt oder in der Nachbarschaft kann kein Arbeitgeber etwas ausrichten. Da ist die ganze Gesellschaft gefragt.
C: Und genau deshalb finde ich das Wort „Fachkräfte“ manchmal schwierig. Es kommen nicht nur Arbeitskräfte, es kommen Menschen mit Partnern, Kindern und eigenen Plänen.
A: Ein gutes Schlusswort. Vielen Dank Ihnen beiden.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы слушаете дискуссию один раз. Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin', 'Dr. Kühn', 'Frau Petrova'],
          items: [
            {
              kind: 'match',
              prompt: 'Ohne ausländische Beschäftigte müsste der Betrieb Patienten abweisen.',
              answer: 1,
              explanationRu: 'Кюн: без этих коллег уже сегодня пришлось бы отказывать пациентам.',
            },
            {
              kind: 'match',
              prompt: 'Am meisten belastete mich, dass meine Berufserfahrung nicht zählte.',
              answer: 2,
              explanationRu: 'Петрова: самым тяжёлым было чувство, что её опыт ничего не стоит.',
            },
            {
              kind: 'match',
              prompt: 'Die Überprüfung ausländischer Abschlüsse ist grundsätzlich berechtigt.',
              answer: 1,
              explanationRu: 'Кюн: проверки имеют смысл, работодатель отвечает за пациентов.',
            },
            {
              kind: 'match',
              prompt: 'Fehlende Inhalte sollte man neben der Arbeit nachholen können.',
              answer: 2,
              explanationRu: 'Петрова спрашивает, почему нельзя наверстать недостающее параллельно с работой.',
            },
            {
              kind: 'match',
              prompt: 'Das Angebot eines Arbeitgebers wird als beispielhaft gelobt.',
              answer: 0,
              explanationRu: 'Ведущая: «Das klingt ja geradezu vorbildlich.»',
            },
            {
              kind: 'match',
              prompt: 'Für ein freundliches Klima im Alltag sind nicht nur die Unternehmen verantwortlich.',
              answer: 1,
              explanationRu: 'Кюн: работодатель ничего не может сделать против недружелюбной атмосферы — здесь нужно всё общество.',
            },
          ],
        },
      ],
    },
    {
      title: 'Regionalnachrichten: Einbürgerungsfeier',
      kind: 'monolog',
      situation: 'Sie hören eine Meldung im Radio. Sie hören den Text zweimal.',
      text: `Und nun Nachrichten aus der Region. Zum ersten Mal hat die Stadt am Samstag eine große Einbürgerungsfeier im Konzerthaus veranstaltet. Rund vierhundert Neubürgerinnen und Neubürger aus 62 Ländern erhielten dabei feierlich ihre Urkunden. Die Jüngste war gerade achtzehn Jahre alt, der Älteste 84. In ihrer Rede betonte die Oberbürgermeisterin, die Eingebürgerten seien keine Gäste mehr, sondern gestalteten die Stadt aktiv mit. Seit der Reform des Staatsangehörigkeitsrechts ist die Zahl der Anträge deutlich gestiegen; die Wartezeit beträgt derzeit rund ein Jahr. Die Stadt will deshalb fünf zusätzliche Stellen in der Einbürgerungsbehörde schaffen. Die nächste Feier ist für den Herbst geplant. Wer am Samstag verhindert war, kann seine Urkunde aber schon ab Montag im Bürgeramt abholen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Bei der Feier erhielten Menschen aus mehr als sechzig Ländern ihre Urkunden.',
              answer: true,
              explanationRu: '«aus 62 Ländern» — больше шестидесяти.',
            },
            {
              kind: 'tf',
              statement: 'Wer am Samstag nicht kommen konnte, muss bis zur nächsten Feier im Herbst warten.',
              answer: false,
              explanationRu: 'Свидетельство можно забрать уже с понедельника в Bürgeramt.',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was plant die Stadt?',
              options: [
                'jeden Monat eine Einbürgerungsfeier',
                'mehr Personal für die Bearbeitung der Anträge',
                'die Wartezeit auf drei Monate zu begrenzen',
              ],
              answer: 1,
              explanationRu: 'Город хочет создать пять дополнительных ставок в ведомстве по натурализации.',
            },
          ],
        },
      ],
    },
  ],
};
