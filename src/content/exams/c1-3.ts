import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'c1-exam-3',
  level: 'C1',
  title: 'Übungstest C1 – 3',
  lesen: {
    minutes: 65,
    parts: [
      // ───────────────────────── Lesen Teil 1 ─────────────────────────
      {
        teil: 1,
        minutes: 15,
        title: 'Gene aus der Vergangenheit',
        textType: 'Sachtext mit Lücken',
        texts: [
          {
            body: `Lange Zeit waren Archäologinnen und Archäologen auf das angewiesen, was Menschen früherer Epochen an Spuren hinterlassen hatten: Werkzeuge, Keramikscherben, Grabbeigaben, die Reste von Häusern. Aus solchen Funden ließ sich viel über Lebensweise und Handel ablesen, über die Herkunft der Menschen selbst aber oft nur spekulieren. [1] Seit es gelingt, Erbgut aus jahrtausendealten Knochen zu gewinnen und zu entschlüsseln, lassen sich Wanderungsbewegungen, Verwandtschaftsverhältnisse und sogar Krankheiten der Vergangenheit rekonstruieren.

Die technischen Hürden waren lange beträchtlich. Erbgut zerfällt nach dem Tod eines Organismus allmählich, und was übrig bleibt, ist meist mit der DNA von Bakterien, Pilzen und nicht zuletzt der Forschenden selbst verunreinigt. [2] Erst neue Sequenziermethoden, mit denen sich Millionen kurzer Bruchstücke gleichzeitig auslesen lassen, haben das Feld revolutioniert. Als besonders ergiebig hat sich übrigens ein unscheinbarer Knochen im Innenohr erwiesen, das sogenannte Felsenbein, dessen dichte Struktur das Erbgut vergleichsweise gut konserviert.

Die Ergebnisse haben manche Lehrbuchmeinung ins Wanken gebracht. [3] So zeigen die Analysen, dass sich die Bevölkerung Europas in der Jungsteinzeit und der Bronzezeit mehrfach tiefgreifend verändert hat, weil Gruppen aus Anatolien und später aus der osteuropäischen Steppe einwanderten und sich mit der ansässigen Bevölkerung vermischten. Die Vorstellung von seit Urzeiten sesshaften, klar abgrenzbaren Völkern lässt sich damit kaum noch aufrechterhalten.

Doch die neue Methode hat auch eine Debatte über die Deutungshoheit ausgelöst. [4] Sie werfen manchen genetischen Studien vor, komplexe historische Prozesse auf simple Bewegungen von Genen zu reduzieren. Wenn ein Erbgutanteil in einer Region zunimmt, sagt das noch nichts darüber, ob die Einwanderung friedlich oder gewaltsam verlief, ob sich Sprachen und Bräuche mit verbreiteten oder ob die Neuankömmlinge die Kultur der Ansässigen übernahmen.

Hinzu kommt eine politische Dimension. [5] Begriffe wie „Ursprung“ oder „Abstammung“ sind historisch belastet, und Ergebnisse der Archäogenetik wurden bereits von nationalistischen Gruppen vereinnahmt, die daraus eine vermeintliche Reinheit ihrer Vorfahren ableiten wollten. Ironischerweise belegen die Daten eher das Gegenteil: Nahezu jede heutige Bevölkerung ist das Ergebnis vielfacher Vermischung.

Auch ethische Fragen stellen sich. [6] Im Gegensatz zu lebenden Menschen können die Toten keine Einwilligung geben. Besonders heikel ist dies dort, wo es Nachfahren gibt, die sich den Verstorbenen verbunden fühlen, etwa bei indigenen Gemeinschaften. Einige Forschungseinrichtungen haben daher Richtlinien entwickelt, nach denen solche Gemeinschaften frühzeitig in Projekte eingebunden werden müssen.

Inzwischen setzt sich zunehmend die Einsicht durch, dass Genetik und klassische Archäologie aufeinander angewiesen sind. [7] Erst wenn Funde, Schriftquellen und Erbgutdaten zusammen betrachtet werden, ergibt sich ein Bild, das der Komplexität der Vergangenheit gerecht wird.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze bleiben übrig.',
            instructionRu:
              'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
            options: [
              'Vor allem aus der klassischen Archäologie und den Geschichtswissenschaften kommt Kritik.',
              'Mit der Analyse alter DNA hat sich das grundlegend geändert.',
              'Die Archäologie verzichtet deshalb inzwischen weitgehend auf Ausgrabungen.',
              'Darf man die Überreste von Menschen, die vor Tausenden von Jahren gestorben sind, ohne Weiteres für Analysen zerstören?',
              'Lange Zeit galten die gewonnenen Daten deshalb als wenig verlässlich.',
              'Die Gene verraten, wer wohin gezogen ist; die Fundstücke erzählen, wie diese Menschen gelebt haben.',
              'Dies gilt insbesondere für die Frage, wie sich die Bevölkerung Europas zusammensetzte.',
              'Nationalistische Deutungen konnten dadurch endgültig verhindert werden.',
              'Die Forschung bewegt sich hier auf einem schmalen Grat.',
            ],
            items: [
              {
                kind: 'match',
                prompt: 'Lücke 1',
                answer: 1,
                explanationRu:
                  'До этого о происхождении людей можно было лишь гадать; «Mit der Analyse alter DNA hat sich das grundlegend geändert» — далее объясняется, что стало возможно.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 2',
                answer: 4,
                explanationRu:
                  'Из-за распада и загрязнения ДНК данные долго считались ненадёжными; «Erst neue Sequenziermethoden …» показывает перелом.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 3',
                answer: 6,
                explanationRu:
                  'Предложение конкретизирует, какие представления пошатнулись, — состав населения Европы; затем «So zeigen die Analysen …».',
              },
              {
                kind: 'match',
                prompt: 'Lücke 4',
                answer: 0,
                explanationRu:
                  'Местоимение «Sie» в следующем предложении относится к представителям классической археологии и исторических наук, которые критикуют генетические исследования.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 5',
                answer: 8,
                explanationRu:
                  'Политическое измерение: исследование «балансирует на узкой грани» — понятия «происхождение» исторически отягощены, данные присваивают националисты.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 6',
                answer: 3,
                explanationRu:
                  'Этический вопрос о разрушении останков для анализа; ответ продолжается: умершие не могут дать согласия.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 7',
                answer: 5,
                explanationRu:
                  'Иллюстрирует взаимозависимость генетики и археологии: гены показывают миграции, находки — образ жизни; затем вывод о совместном рассмотрении.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 2 ─────────────────────────
      {
        teil: 2,
        minutes: 20,
        title: 'Losglück für die Demokratie?',
        textType: 'Zeitungsartikel',
        texts: [
          {
            heading: 'Losglück für die Demokratie?',
            body: `Der Brief kam unerwartet. Eine Einladung, an einem „Bürgerrat“ zum Thema Ernährung teilzunehmen, ausgewählt per Los aus dem Melderegister. Petra Lindqvist, Bürokauffrau aus einer Kleinstadt in Hessen, hielt ihn zunächst für Werbung. „Ich hatte mich nie politisch engagiert und dachte, die suchen bestimmt Leute, die sich auskennen“, erzählt sie. Ein halbes Jahr später saß sie mit 160 anderen Menschen aus allen Teilen des Landes an mehreren Wochenenden zusammen, hörte Fachleuten zu, diskutierte in Kleingruppen und stimmte schließlich über Empfehlungen an den Bundestag ab.

Bürgerräte wie dieser sind Ausdruck einer Idee, die in vielen Demokratien an Zuspruch gewinnt. Statt politische Entscheidungen allein gewählten Vertreterinnen und Vertretern zu überlassen, werden zufällig ausgeloste Bürgerinnen und Bürger beteiligt. Um ein möglichst getreues Abbild der Bevölkerung zu erhalten, wird das Los nicht völlig blind gezogen: Man achtet darauf, dass Alter, Geschlecht, Bildungsabschluss und Wohnort annähernd der Gesamtbevölkerung entsprechen. Auch Menschen, die sonst nie an einer Bürgerversammlung teilnehmen würden, sollen so zu Wort kommen.

Befürworter verweisen auf Erfahrungen aus dem Ausland. In Irland etwa bereiteten ausgeloste Versammlungen Volksabstimmungen über gesellschaftlich hoch umstrittene Fragen vor, die das Parlament jahrzehntelang gescheut hatte. Die Empfehlungen der Versammlungen fanden später auch bei den Abstimmungen eine Mehrheit. Für den Politikwissenschaftler Daniel Ostermann zeigt das vor allem eines: „Wenn man Menschen Zeit, Informationen und einen geschützten Rahmen gibt, sind sie zu sehr differenzierten Urteilen fähig – oft differenzierter als die öffentliche Debatte, die von Schlagzeilen getrieben ist.“

Kritische Stimmen gibt es dennoch, und sie kommen nicht nur von Gegnern der Bürgerbeteiligung. Ein Einwand lautet, dass die Ergebnisse stark davon abhängen, welche Fachleute eingeladen werden und wie die Fragen formuliert sind. Wer den Rahmen setzt, bestimme also im Hintergrund mit. Ein zweiter, grundsätzlicherer Einwand betrifft die Legitimation: Gewählte Abgeordnete müssen sich für ihre Entscheidungen vor den Wählern verantworten, ausgeloste Bürger nicht. Deshalb, so die Kritikerinnen und Kritiker, dürften Bürgerräte allenfalls beraten, keinesfalls aber selbst entscheiden.

Ostermann teilt diese Einschätzung im Kern. Die größte Gefahr sieht er jedoch woanders: in der Enttäuschung. „Wenn Menschen monatelang ihre Freizeit opfern und ihre Empfehlungen dann folgenlos in einer Schublade verschwinden, richtet das mehr Schaden an, als wenn man sie gar nicht erst gefragt hätte.“ Bürgerräte seien kein Instrument, um politische Verantwortung abzugeben, sondern eines, das die Verantwortlichen verpflichte, sich ernsthaft mit den Ergebnissen auseinanderzusetzen – und öffentlich zu begründen, wenn sie davon abweichen.

Petra Lindqvist hat ihre eigenen Schlüsse gezogen. Nicht alle Empfehlungen ihres Rates seien bislang umgesetzt worden, sagt sie, und das ärgere sie. Trotzdem möchte sie die Erfahrung nicht missen. „Ich habe gemerkt, wie kompliziert manche Fragen sind, über die ich vorher am Küchentisch schnell geurteilt habe. Und ich habe Leute kennengelernt, mit denen ich sonst nie ein Wort gewechselt hätte.“ Seit dem vergangenen Jahr sitzt sie im Gemeinderat ihrer Stadt.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Zeitungsartikel. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu:
              'Прочитайте газетную статью. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Wie reagierte Petra Lindqvist zunächst auf die Einladung?',
                options: [
                  'Sie sagte sofort zu, weil sie politisch schon lange aktiv war.',
                  'Sie hielt sie nicht für eine ernst gemeinte Anfrage.',
                  'Sie befürchtete, zu wenig Zeit für die Teilnahme zu haben.',
                ],
                answer: 1,
                explanationRu:
                  'Она «hielt ihn zunächst für Werbung» — сначала приняла письмо за рекламу.',
              },
              {
                kind: 'mc',
                question: 'Warum wird das Los nicht völlig zufällig gezogen?',
                options: [
                  'Damit die Zusammensetzung der Bevölkerung möglichst genau abgebildet wird.',
                  'Damit vor allem Fachleute im Bürgerrat vertreten sind.',
                  'Damit nur politisch interessierte Menschen teilnehmen.',
                ],
                answer: 0,
                explanationRu:
                  '«Um ein möglichst getreues Abbild der Bevölkerung zu erhalten» учитывают возраст, пол, образование и место жительства.',
              },
              {
                kind: 'mc',
                question: 'Was schließt Daniel Ostermann aus den Erfahrungen in Irland?',
                options: [
                  'Volksabstimmungen sind dem Parlament grundsätzlich überlegen.',
                  'Bürgerinnen und Bürger sollten Gesetze direkt beschließen.',
                  'Gut informierte Bürger können zu ausgewogenen Urteilen kommen.',
                ],
                answer: 2,
                explanationRu:
                  'Если дать людям время, информацию и защищённые рамки, они способны к «sehr differenzierten Urteilen».',
              },
              {
                kind: 'mc',
                question: 'Welcher Kritikpunkt wird im Text genannt?',
                options: [
                  'Bürgerräte verursachen zu hohe Kosten.',
                  'Die Organisatoren können die Ergebnisse indirekt beeinflussen.',
                  'Ausgeloste Bürger sind meist schlecht vorbereitet.',
                ],
                answer: 1,
                explanationRu:
                  'Результаты зависят от выбора экспертов и формулировки вопросов: «Wer den Rahmen setzt, bestimme also im Hintergrund mit».',
              },
              {
                kind: 'mc',
                question: 'Worin sieht Ostermann die größte Gefahr?',
                options: [
                  'Dass sich zu wenige Menschen zur Teilnahme bereit erklären.',
                  'Dass Bürgerräte die Entscheidungen der Parlamente ersetzen.',
                  'Dass die Empfehlungen folgenlos bleiben und Frust erzeugen.',
                ],
                answer: 2,
                explanationRu:
                  'Главная опасность — «in der Enttäuschung»: рекомендации исчезают «folgenlos in einer Schublade».',
              },
              {
                kind: 'mc',
                question: 'Welche Funktion sollten Bürgerräte nach Ostermanns Ansicht erfüllen?',
                options: [
                  'Sie sollten Politiker von unangenehmen Entscheidungen entlasten.',
                  'Sie sollten die Verantwortlichen zur Auseinandersetzung mit den Ergebnissen verpflichten.',
                  'Sie sollten das Parlament auf lange Sicht ersetzen.',
                ],
                answer: 1,
                explanationRu:
                  'Это не способ снять с себя ответственность, а инструмент, который обязывает политиков всерьёз работать с результатами и публично объяснять отклонения.',
              },
              {
                kind: 'mc',
                question: 'Was hat die Teilnahme bei Petra Lindqvist bewirkt?',
                options: [
                  'Sie urteilt vorsichtiger und engagiert sich inzwischen selbst in der Kommunalpolitik.',
                  'Sie ist von der Politik so enttäuscht, dass sie sich zurückgezogen hat.',
                  'Sie ist überzeugt, dass Bürgerräte überflüssig sind.',
                ],
                answer: 0,
                explanationRu:
                  'Она поняла, насколько сложны вопросы, о которых раньше судила «am Küchentisch», и теперь заседает в городском совете.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 3 ─────────────────────────
      {
        teil: 3,
        minutes: 15,
        title: 'Wie viel Kulturförderung brauchen wir?',
        textType: 'Meinungsäußerungen',
        texts: [
          {
            label: 'Ingrid Hollmann, Intendantin',
            body: `Wer Kulturförderung für ein Geschenk an ein bildungsbürgerliches Publikum hält, war lange nicht mehr in einem Stadttheater. Wir spielen für Schulklassen, wir entwickeln Projekte mit Geflüchteten, wir haben einen Jugendclub mit über hundert Mitgliedern. All das wäre ohne öffentliche Mittel undenkbar, denn kein privater Investor finanziert Experimente, deren Ertrag sich nicht in Eintrittskarten messen lässt. Natürlich müssen wir uns fragen lassen, ob wir genug Menschen erreichen. Aber die Antwort darauf kann nicht lauten, die Förderung zu kürzen und dann abzuwarten, wer übrig bleibt. Ein Theater, das einmal geschlossen ist, öffnet nicht wieder.`,
          },
          {
            label: 'Kai Neubauer, Stadtrat',
            body: `Ich bin kein Kulturbanause, ich gehe selbst gern ins Konzert. Aber wenn jede Opernkarte mit über hundert Euro aus öffentlichen Mitteln bezuschusst wird, während in derselben Stadt Schwimmbäder schließen und Schulen verfallen, dann stimmt etwas mit den Prioritäten nicht. Die meisten Menschen, die von dieser Förderung profitieren, könnten sich höhere Preise durchaus leisten. Ich plädiere deshalb nicht für die Abschaffung, aber für eine Umschichtung: weniger Geld für die großen Häuser, mehr für Musikschulen, Stadtteilkultur und freie Gruppen, die dorthin gehen, wo die Menschen tatsächlich sind.`,
          },
          {
            label: 'Leonie Baraki, Schauspielerin einer freien Theatergruppe',
            body: `Die Debatte wird meistens so geführt, als gäbe es nur das große Stadttheater auf der einen und die Haushaltslöcher auf der anderen Seite. Wir freien Gruppen kommen darin kaum vor, obwohl wir einen großen Teil der innovativen Arbeit leisten – und zwar unter oft prekären Bedingungen. Viele von uns hangeln sich von Projektförderung zu Projektförderung, ohne zu wissen, wovon sie im nächsten Jahr leben sollen. Ich wünsche mir deshalb keine Umverteilung, bei der die einen gegen die anderen ausgespielt werden, sondern eine verlässliche, mehrjährige Förderung, die langfristiges Arbeiten überhaupt erst ermöglicht.`,
          },
          {
            label: 'Prof. Dr. Henning Wolters, Kulturökonom',
            body: `Aus ökonomischer Sicht ist Kultur ein klassisches Beispiel für ein Gut, dessen Nutzen über den unmittelbaren Konsum hinausgeht: Sie prägt das Image einer Stadt, zieht Fachkräfte an und stärkt den Tourismus. Insofern ist öffentliche Förderung gut begründbar. Was mich allerdings stört, ist die mangelnde Transparenz. Viele Häuser legen kaum offen, wen sie mit ihren Angeboten erreichen und wie sich ihr Publikum zusammensetzt. Ohne solche Daten bleibt jede Debatte über Kürzungen oder Erhöhungen ein Streit um Bauchgefühle. Wer öffentliches Geld erhält, sollte auch öffentlich Rechenschaft ablegen.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Meinungsäußerungen. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
            instructionRu:
              'Прочитайте высказывания. Какое утверждение относится к какому человеку? Одного и того же человека можно выбирать несколько раз.',
            options: ['Ingrid Hollmann', 'Kai Neubauer', 'Leonie Baraki', 'Henning Wolters'],
            items: [
              {
                kind: 'match',
                prompt: 'Die Förderung kommt überwiegend Menschen zugute, die sie eigentlich nicht bräuchten.',
                answer: 1,
                explanationRu:
                  'Нойбауэр: большинство получателей поддержки «könnten sich höhere Preise durchaus leisten».',
              },
              {
                kind: 'match',
                prompt: 'Kultureinrichtungen sollten genauer belegen, welche Bevölkerungsgruppen sie erreichen.',
                answer: 3,
                explanationRu:
                  'Вольтерс: многие учреждения не раскрывают состав своей публики; «Wer öffentliches Geld erhält, sollte auch öffentlich Rechenschaft ablegen».',
              },
              {
                kind: 'match',
                prompt: 'Kürzungen könnten Folgen haben, die sich nicht mehr rückgängig machen lassen.',
                answer: 0,
                explanationRu:
                  'Холльман: «Ein Theater, das einmal geschlossen ist, öffnet nicht wieder».',
              },
              {
                kind: 'match',
                prompt: 'Kurzfristige Förderzusagen erschweren eine kontinuierliche künstlerische Arbeit.',
                answer: 2,
                explanationRu:
                  'Бараки: многие живут «von Projektförderung zu Projektförderung» и хотят многолетнего финансирования.',
              },
              {
                kind: 'match',
                prompt: 'Kultur bringt einer Stadt auch wirtschaftliche Vorteile.',
                answer: 3,
                explanationRu:
                  'Вольтерс: культура формирует имидж, привлекает специалистов и туристов.',
              },
              {
                kind: 'match',
                prompt: 'Mittel sollten von den großen Häusern zu kleineren Angeboten verlagert werden.',
                answer: 1,
                explanationRu:
                  'Нойбауэр: «Umschichtung: weniger Geld für die großen Häuser, mehr für Musikschulen, Stadtteilkultur …».',
              },
              {
                kind: 'match',
                prompt: 'Verschiedene Bereiche der Kultur sollten nicht gegeneinander ausgespielt werden.',
                answer: 2,
                explanationRu:
                  'Бараки: «keine Umverteilung, bei der die einen gegen die anderen ausgespielt werden».',
              },
              {
                kind: 'match',
                prompt: 'Öffentliche Gelder ermöglichen Vorhaben, die sich nicht rechnen müssen.',
                answer: 0,
                explanationRu:
                  'Холльман: частный инвестор не финансирует эксперименты, «deren Ertrag sich nicht in Eintrittskarten messen lässt».',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 4 ─────────────────────────
      {
        teil: 4,
        minutes: 15,
        title: 'Das vermessene Ich',
        textType: 'Kommentar',
        texts: [
          {
            heading: 'Das vermessene Ich',
            body: `Mein Schrittzähler hat mir gestern gratuliert. Elftausend Schritte, ein neuer Wochenrekord, dazu ein kleines Feuerwerk auf dem Display. Ich gebe zu: Ich habe mich gefreut. Und genau das macht mich misstrauisch.

Millionen Menschen tragen inzwischen Geräte am Handgelenk, die ihren Puls, ihren Schlaf, ihre Schritte und manchmal sogar ihren Stresspegel aufzeichnen. Die Hersteller versprechen nichts weniger als ein gesünderes, bewussteres Leben. Und es wäre unredlich zu bestreiten, dass manche davon profitieren. Wer sich vorher kaum bewegt hat, kann durch die tägliche Erinnerung tatsächlich aktiver werden; bei manchen Herzpatienten haben die Geräte sogar Rhythmusstörungen aufgedeckt, die sonst unentdeckt geblieben wären.

Doch der Nutzen hat eine Kehrseite, über die erstaunlich wenig gesprochen wird. Was als Hilfsmittel beginnt, wird schnell zum Maßstab. Ich habe Bekannte erlebt, die abends noch im Wohnzimmer im Kreis gelaufen sind, um ihr Tagesziel zu erreichen, und die nach einer schlechten „Schlafbewertung“ müder aufstanden als nach einer tatsächlich schlechten Nacht. Wer sich ständig an Zahlen misst, verlernt womöglich, auf seinen Körper zu hören – ausgerechnet das also, was die Geräte zu fördern vorgeben.

Hinzu kommt, dass die Zahlen eine Genauigkeit suggerieren, die sie oft nicht haben. Wie viele Kalorien wir verbrannt haben oder wie viel Tiefschlaf wir hatten, können die meisten Geräte allenfalls grob schätzen. Auf dem Display erscheint aber eine präzise Ziffer, und präzise Ziffern haben eine eigentümliche Autorität. Man glaubt ihnen mehr als dem eigenen Empfinden.

Am meisten beunruhigt mich jedoch, wohin die Daten wandern. Schon heute bieten manche Krankenversicherungen Bonusprogramme an, bei denen man Punkte sammelt, wenn man seine Aktivitätsdaten teilt. Noch ist das freiwillig, und noch winken nur Prämien. Aber es braucht wenig Fantasie, sich vorzustellen, wie aus der Belohnung für die Fleißigen irgendwann eine Benachteiligung derer wird, die nicht mitmachen wollen oder können. Gesundheit ist eben nicht nur eine Frage der Disziplin, sondern auch der Gene, der Arbeitsbedingungen und des Geldbeutels.

Ich will niemandem sein Fitnessarmband ausreden. Ich plädiere nur für etwas mehr Gelassenheit im Umgang damit – und für klare gesetzliche Grenzen, was mit den gesammelten Daten geschehen darf. Mein eigenes Gerät habe ich übrigens behalten. Die Benachrichtigungen allerdings habe ich ausgeschaltet. Das Feuerwerk vermisse ich nicht.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Kommentar. Entsprechen die Aussagen der Meinung der Autorin? Wählen Sie Ja oder Nein.',
            instructionRu:
              'Прочитайте комментарий. Соответствуют ли утверждения мнению автора? Выберите «Да» или «Нет».',
            tfLabels: ['Ja', 'Nein'],
            items: [
              {
                kind: 'tf',
                statement: 'Die Autorin ist stolz darauf, dass sie sich vom Lob ihres Geräts nicht beeinflussen lässt.',
                answer: false,
                explanationRu:
                  'Наоборот: «Ich habe mich gefreut. Und genau das macht mich misstrauisch» — похвала на неё подействовала.',
              },
              {
                kind: 'tf',
                statement: 'Sie räumt ein, dass Fitnessgeräte für manche Menschen gesundheitliche Vorteile haben.',
                answer: true,
                explanationRu:
                  '«es wäre unredlich zu bestreiten, dass manche davon profitieren» — например, малоподвижные люди и сердечники.',
              },
              {
                kind: 'tf',
                statement: 'Sie befürchtet, dass Menschen durch die Geräte das Gespür für den eigenen Körper verlieren.',
                answer: true,
                explanationRu:
                  '«Wer sich ständig an Zahlen misst, verlernt womöglich, auf seinen Körper zu hören».',
              },
              {
                kind: 'tf',
                statement: 'Die Messwerte der Geräte hält sie für sehr zuverlässig.',
                answer: false,
                explanationRu:
                  'Цифры лишь создают видимость точности: устройства могут оценить калории и сон «allenfalls grob».',
              },
              {
                kind: 'tf',
                statement: 'Bonusprogramme der Krankenkassen sind für sie eine unbedenkliche Belohnung gesunden Verhaltens.',
                answer: false,
                explanationRu:
                  'Её это больше всего беспокоит: поощрение может превратиться в «eine Benachteiligung derer …, die nicht mitmachen wollen oder können».',
              },
              {
                kind: 'tf',
                statement: 'Gesundheit hängt nach Ansicht der Autorin nicht allein vom persönlichen Einsatz ab.',
                answer: true,
                explanationRu:
                  '«Gesundheit ist eben nicht nur eine Frage der Disziplin, sondern auch der Gene, der Arbeitsbedingungen und des Geldbeutels».',
              },
              {
                kind: 'tf',
                statement: 'Sie fordert gesetzliche Regeln für den Umgang mit den gesammelten Daten.',
                answer: true,
                explanationRu:
                  '«… für klare gesetzliche Grenzen, was mit den gesammelten Daten geschehen darf».',
              },
            ],
          },
        ],
      },
    ],
  },
  hoeren: {
    minutes: 40,
    parts: [
      // ───────────────────────── Hören Teil 1 ─────────────────────────
      {
        teil: 1,
        instructionDe:
          'Sie hören vier kurze Aussagen zum Thema „Mehrsprachigkeit“. Sie hören jede Aussage zweimal. Lösen Sie zu jeder Aussage zwei Aufgaben.',
        instructionRu:
          'Вы услышите четыре коротких высказывания на тему «многоязычие». Каждое звучит дважды. К каждому высказыванию решите два задания.',
        segments: [
          {
            title: 'Aussage 1',
            kind: 'monolog',
            situation: 'Sie hören Elena, 38, Mutter einer zweisprachig aufwachsenden Tochter.',
            playCount: 2,
            text: `Mein Mann ist Deutscher, ich bin in Sankt Petersburg aufgewachsen. Als unsere Tochter geboren wurde, haben wir beschlossen, dass ich konsequent Russisch mit ihr spreche und mein Mann Deutsch. Eine Zeit lang hat das wunderbar funktioniert. Seit sie in die Kita geht, antwortet sie mir allerdings immer öfter auf Deutsch, obwohl sie alles versteht. Anfangs hat mich das ziemlich gekränkt. Inzwischen sehe ich das gelassener: Wir lesen abends russische Bücher, und in den Sommerferien bei meinen Eltern spricht sie nach ein paar Tagen ganz selbstverständlich Russisch.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Elenas Tochter versteht kein Russisch mehr.',
                    answer: false,
                    explanationRu: 'Дочь отвечает по-немецки, «obwohl sie alles versteht».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie geht Elena heute mit der Situation um?',
                    options: [
                      'Sie ist darüber nach wie vor sehr verletzt.',
                      'Sie spricht inzwischen auch Deutsch mit ihrer Tochter.',
                      'Sie sieht die Entwicklung entspannter.',
                    ],
                    answer: 2,
                    explanationRu: '«Anfangs hat mich das ziemlich gekränkt. Inzwischen sehe ich das gelassener».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 2',
            kind: 'monolog',
            situation: 'Sie hören Herrn Mensah, Personalleiter eines Logistikunternehmens.',
            playCount: 2,
            text: `In unserem Logistikunternehmen arbeiten Menschen aus über dreißig Nationen. Lange Zeit galt bei uns die Regel, dass während der Arbeitszeit ausschließlich Deutsch gesprochen wird. Wir dachten, das fördere den Zusammenhalt. Tatsächlich hat es eher zu Misstrauen geführt: Wer in der Pause mit Kollegen in seiner Muttersprache redete, wurde schief angeschaut. Heute ist Deutsch die gemeinsame Sprache bei Besprechungen und Sicherheitsunterweisungen, aber ansonsten darf jeder sprechen, wie er möchte. Die Stimmung ist seitdem spürbar besser, und die Deutschkenntnisse haben darunter nicht gelitten.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Die frühere Sprachregel hat das Betriebsklima verbessert.',
                    answer: false,
                    explanationRu: '«Tatsächlich hat es eher zu Misstrauen geführt».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was gilt heute im Unternehmen?',
                    options: [
                      'Alle Beschäftigten müssen Deutschkurse besuchen.',
                      'Deutsch ist nur noch in bestimmten Situationen verpflichtend.',
                      'Besprechungen finden inzwischen auf Englisch statt.',
                    ],
                    answer: 1,
                    explanationRu: 'Немецкий обязателен на совещаниях и инструктажах по технике безопасности, «aber ansonsten darf jeder sprechen, wie er möchte».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 3',
            kind: 'monolog',
            situation: 'Sie hören Sophie, 19, die in Ostfriesland aufgewachsen ist.',
            playCount: 2,
            text: `Ich bin in einem Dorf in Ostfriesland aufgewachsen, und meine Großeltern haben mit mir immer Plattdeutsch gesprochen. In der Schule fand ich das lange eher peinlich, weil viele Mitschüler es nur als Sprache der Alten gesehen haben. Erst als ich für ein Referat zur Geschichte der Regionalsprachen recherchiert habe, ist mir klar geworden, was da eigentlich verloren geht. Inzwischen mache ich bei einem Podcast mit, in dem junge Leute auf Platt über ganz aktuelle Themen reden. Die Resonanz ist viel größer, als wir gedacht hätten.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Eine Schularbeit hat Sophies Einstellung zum Plattdeutschen verändert.',
                    answer: true,
                    explanationRu: 'Подготовка реферата по истории региональных языков открыла ей глаза: «ist mir klar geworden, was da eigentlich verloren geht».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt Sophie über den Podcast?',
                    options: [
                      'Er stößt auf unerwartet großes Interesse.',
                      'Er wird vor allem von älteren Menschen gemacht.',
                      'Er behandelt hauptsächlich historische Themen.',
                    ],
                    answer: 0,
                    explanationRu: '«Die Resonanz ist viel größer, als wir gedacht hätten»; делают его молодые люди и об актуальных темах.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 4',
            kind: 'monolog',
            situation: 'Sie hören Prof. Dr. Ana Kovač, Sprachwissenschaftlerin, in einer Radiosendung.',
            playCount: 2,
            text: `Lange hielt sich die Vorstellung, Kinder würden durch zwei Sprachen überfordert und könnten am Ende keine richtig. Diese Sorge ist wissenschaftlich weitgehend widerlegt. Mehrsprachig aufwachsende Kinder durchlaufen zwar Phasen, in denen sie Sprachen mischen, aber das ist kein Zeichen von Verwirrung, sondern eine ganz normale Strategie. Was allerdings stimmt: Mehrsprachigkeit stellt sich nicht von selbst ein. Eine Sprache, die nur gelegentlich gesprochen wird und keine Funktion im Alltag des Kindes hat, geht mit großer Wahrscheinlichkeit wieder verloren.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Laut Prof. Kovač ist das Mischen von Sprachen bei Kindern ein normales Phänomen.',
                    answer: true,
                    explanationRu: 'Смешение языков — «kein Zeichen von Verwirrung, sondern eine ganz normale Strategie».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wovon hängt laut Prof. Kovač der Erhalt einer Sprache ab?',
                    options: [
                      'Vom Alter, in dem das Kind die Sprache lernt.',
                      'Davon, ob die Sprache im Alltag des Kindes gebraucht wird.',
                      'Von der Zahl der Sprachen, die ein Kind gleichzeitig lernt.',
                    ],
                    answer: 1,
                    explanationRu: 'Язык, который «keine Funktion im Alltag des Kindes hat», скорее всего будет утрачен.',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ───────────────────────── Hören Teil 2 ─────────────────────────
      {
        teil: 2,
        instructionDe:
          'Sie hören ein Interview mit einer Gletscherforscherin. Sie hören das Interview einmal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите интервью с исследовательницей ледников. Интервью звучит один раз. Выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Interview: Chronistin eines Abschieds',
            kind: 'dialog',
            speakers: { A: 'Moderator', B: 'Dr. Marlene Aichinger, Glaziologin' },
            situation: 'Sie hören ein Interview in einer Wissenschaftssendung im Radio.',
            playCount: 1,
            text: `A: Frau Dr. Aichinger, Sie untersuchen seit zwanzig Jahren die Gletscher der Ostalpen. Wie hat sich Ihre Arbeit in dieser Zeit verändert?
B: Grundlegend. Als ich angefangen habe, haben wir die Gletscher vor allem vermessen, um zu verstehen, wie sie funktionieren. Heute dokumentieren wir, offen gesagt, ihr Verschwinden. Einige der Gletscher, auf denen ich als Doktorandin Messpegel gebohrt habe, existieren in dieser Form nicht mehr. Das ist für eine Wissenschaftlerin eine merkwürdige Erfahrung – man wird gewissermaßen zur Chronistin eines Abschieds.
A: Wie schnell geht das?
B: Schneller, als wir es noch vor zehn Jahren erwartet hätten. Die Ostalpen haben seit Mitte des neunzehnten Jahrhunderts deutlich mehr als die Hälfte ihrer Gletscherfläche verloren, und die Verluste haben sich in den letzten Jahren noch einmal beschleunigt. Selbst wenn es gelänge, die Erwärmung sofort zu stoppen, wären viele kleinere Gletscher nicht mehr zu retten. Sie reagieren mit Verzögerung auf das Klima der vergangenen Jahrzehnte.
A: Man liest manchmal von Versuchen, Gletscher mit weißen Planen abzudecken. Ist das eine Lösung?
B: Lokal kann das sinnvoll sein, etwa um ein Skigebiet oder den Zugang zu einer Hütte für einige Jahre zu sichern. Die Planen reflektieren das Sonnenlicht und verringern das Abschmelzen an dieser Stelle tatsächlich spürbar. Aber man muss die Dimensionen sehen: Abgedeckt werden wenige Hektar, und das unter erheblichem Aufwand. Für den Gletscher als Ganzes ist das bestenfalls Kosmetik. Ich habe manchmal die Sorge, dass solche Bilder den Eindruck erwecken, das Problem sei technisch lösbar.
A: Welche Folgen hat der Gletscherrückgang für die Menschen in den Alpen?
B: Kurzfristig fließt sogar mehr Schmelzwasser in die Flüsse, was paradoxerweise wie ein Vorteil wirken kann, etwa für die Wasserkraft. Langfristig fällt aber genau dieses Wasser weg, und zwar vor allem im Hochsommer, wenn Landwirtschaft und Natur es am dringendsten brauchen. Hinzu kommen Gefahren, über die man lange zu wenig gesprochen hat: Wenn das Eis schwindet und der Permafrost im Fels taut, werden Hänge instabil. Felsstürze und Murenabgänge nehmen zu, und manche Bergwege mussten bereits dauerhaft gesperrt werden.
A: Sie haben gesagt, Sie dokumentieren einen Abschied. Klingt da Resignation mit?
B: Nein, oder sagen wir: nicht nur. Für die kleineren Gletscher ist es zu spät, das muss man ehrlich sagen. Aber ob am Ende des Jahrhunderts in den Alpen noch nennenswerte Eismassen existieren oder fast gar keine, das hängt sehr wohl davon ab, wie viel Treibhausgas wir in den nächsten Jahrzehnten ausstoßen. Diese Botschaft ist mir wichtig, weil Fatalismus genauso lähmend ist wie Verdrängung.
A: Frau Dr. Aichinger, herzlichen Dank für das Gespräch.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wie hat sich die Arbeit von Dr. Aichinger verändert?',
                    options: [
                      'Sie dokumentiert heute vor allem das Verschwinden der Gletscher.',
                      'Sie arbeitet heute hauptsächlich im Labor.',
                      'Sie untersucht inzwischen andere Gebirge.',
                    ],
                    answer: 0,
                    explanationRu: 'Раньше ледники измеряли, чтобы понять их устройство, «Heute dokumentieren wir … ihr Verschwinden».',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum sind viele kleinere Gletscher nicht mehr zu retten?',
                    options: [
                      'Weil die bisherigen Messmethoden zu ungenau waren.',
                      'Weil sie zeitverzögert auf die Erwärmung der vergangenen Jahrzehnte reagieren.',
                      'Weil sie durch den Ausbau von Skigebieten zerstört wurden.',
                    ],
                    answer: 1,
                    explanationRu: '«Sie reagieren mit Verzögerung auf das Klima der vergangenen Jahrzehnte».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie beurteilt sie das Abdecken von Gletschern mit Planen?',
                    options: [
                      'Als zu teuer, um überhaupt sinnvoll zu sein.',
                      'Als wirksamen Schutz für ganze Gletscher.',
                      'Als lokal begrenzte Maßnahme, die falsche Hoffnungen wecken kann.',
                    ],
                    answer: 2,
                    explanationRu: 'Локально полезно, но для ледника в целом «bestenfalls Kosmetik»; она боится впечатления, что проблему можно решить технически.',
                  },
                  {
                    kind: 'mc',
                    question: 'Welche kurzfristige Folge des Gletscherrückgangs nennt sie?',
                    options: [
                      'Die Flüsse führen vorübergehend mehr Wasser.',
                      'Die Wasserkraft verliert sofort an Bedeutung.',
                      'Die Landwirtschaft hat im Sommer zu wenig Wasser.',
                    ],
                    answer: 0,
                    explanationRu: '«Kurzfristig fließt sogar mehr Schmelzwasser in die Flüsse»; нехватка воды летом — долгосрочное последствие.',
                  },
                  {
                    kind: 'mc',
                    question: 'Welche Gefahr wurde laut Dr. Aichinger lange unterschätzt?',
                    options: [
                      'Instabile Berghänge durch tauenden Permafrost.',
                      'Überschwemmungen in den Alpentälern.',
                      'Wassermangel in den großen Städten.',
                    ],
                    answer: 0,
                    explanationRu: '«Gefahren, über die man lange zu wenig gesprochen hat»: при таянии вечной мерзлоты склоны теряют устойчивость.',
                  },
                  {
                    kind: 'mc',
                    question: 'Welche Haltung vertritt sie am Ende des Interviews?',
                    options: [
                      'Es ist ohnehin zu spät, noch etwas zu ändern.',
                      'Technische Lösungen werden das Problem beheben.',
                      'Das künftige Ausmaß des Eisverlusts lässt sich noch beeinflussen.',
                    ],
                    answer: 2,
                    explanationRu: 'Для малых ледников поздно, но сколько льда останется к концу века, «hängt sehr wohl davon ab, wie viel Treibhausgas wir … ausstoßen».',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ───────────────────────── Hören Teil 3 ─────────────────────────
      {
        teil: 3,
        instructionDe:
          'Sie hören eine Radiodiskussion. Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen zu.',
        instructionRu:
          'Вы услышите радиодискуссию. Она звучит один раз. Кто что говорит? Соотнесите высказывания с участниками.',
        segments: [
          {
            title: 'Arbeitswelten: Zurück ins Büro?',
            kind: 'discussion',
            speakers: {
              A: 'Moderatorin Frau Bauer',
              B: 'Tobias Engel, Geschäftsführer eines Softwareunternehmens',
              C: 'Dr. Sabine Krüger, Arbeitspsychologin',
            },
            situation: 'Sie hören eine Diskussion in der Radiosendung „Arbeitswelten“.',
            playCount: 1,
            text: `A: Willkommen zu „Arbeitswelten“. Nach Jahren, in denen das Homeoffice für viele Beschäftigte selbstverständlich geworden ist, rufen immer mehr Unternehmen ihre Leute ins Büro zurück – teils mit festen Anwesenheitstagen, teils sogar ganz. Darüber diskutiere ich mit Tobias Engel, Geschäftsführer eines Softwareunternehmens mit rund zweihundert Beschäftigten, und mit der Arbeitspsychologin Sabine Krüger. Herr Engel, Sie haben in Ihrer Firma drei Präsenztage pro Woche eingeführt. Was hat Sie dazu bewogen?
B: Vor allem die Beobachtung, dass uns etwas verloren gegangen ist, das sich schwer messen lässt. Die Routineaufgaben liefen im Homeoffice hervorragend, keine Frage. Aber neue Kolleginnen und Kollegen haben deutlich länger gebraucht, um sich einzuarbeiten, und die spontanen Gespräche an der Kaffeemaschine, aus denen früher manchmal die besten Ideen entstanden sind, gab es einfach nicht mehr.
C: Das mit der Einarbeitung kann ich aus der Forschung bestätigen. Gerade Berufseinsteiger profitieren enorm davon, erfahreneren Kollegen über die Schulter zu schauen. Bei den spontanen Ideen an der Kaffeemaschine wäre ich allerdings vorsichtig. Das ist ein beliebtes Bild, aber die Belege dafür sind dünner, als man denkt. Viele Innovationen entstehen in konzentrierter Einzelarbeit – und die ist im Großraumbüro oft gerade nicht möglich.
B: Gut, das mag sein. Aber ich rede ja auch nicht vom Großraumbüro. Wir haben unsere Räume umgebaut, mit Rückzugsräumen und Bereichen für Teamarbeit.
A: Frau Krüger, was sagen die Beschäftigten selbst?
C: Die Umfragen sind ziemlich eindeutig: Die große Mehrheit wünscht sich ein Mischmodell, also einige Tage zu Hause und einige im Büro. Wer zur vollständigen Rückkehr gezwungen wird, denkt deutlich häufiger über einen Jobwechsel nach – und zwar vor allem die Hochqualifizierten, die auf dem Arbeitsmarkt Alternativen haben. Unternehmen, die hier zu rigide sind, schneiden sich ins eigene Fleisch.
B: Das sehe ich genauso, deshalb haben wir uns ja bewusst gegen die volle Präsenzpflicht entschieden. Allerdings muss ich ehrlich sagen: Die Diskussion wird mir manchmal zu sehr aus der Perspektive derjenigen geführt, die überhaupt die Wahl haben. In unserer Firma gibt es auch Menschen im Lager oder am Empfang, die nie ins Homeoffice konnten. Die haben die Debatte zum Teil als ziemlich abgehoben empfunden.
A: Ein Gerechtigkeitsproblem also?
C: Durchaus, und eines, das zu wenig beachtet wird. Wobei ich hinzufügen würde, dass auch innerhalb der Homeoffice-Gruppe große Unterschiede bestehen. Wer ein eigenes Arbeitszimmer hat, erlebt das Homeoffice ganz anders als jemand, der am Küchentisch zwischen zwei Kindern arbeitet. Gerade für Eltern verschwimmen die Grenzen zwischen Arbeit und Privatleben, was auf Dauer erschöpfend sein kann.
A: Herr Engel, wie wollen Sie die Leute denn ins Büro locken, statt sie zu zwingen?
B: Ehrlich gesagt mit Dingen, die selbstverständlich klingen: gutes Essen in der Kantine, feste Teamtage, an denen tatsächlich alle da sind, damit man nicht ins Büro fährt, um dann doch nur Videokonferenzen zu führen. Das war anfangs nämlich unser größter Fehler.
C: Und genau das ist der entscheidende Punkt: Das Büro muss einen Mehrwert bieten, den man zu Hause nicht hat. Sonst bleibt die Präsenzpflicht eine Kontrollmaßnahme – und so wird sie dann auch empfunden.
A: Vielen Dank Ihnen beiden für das Gespräch.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen der Moderatorin oder einem der Gäste zu.',
                instructionRu: 'Кто что говорит? Отнесите высказывания к ведущей или к одному из гостей.',
                options: ['Moderatorin Frau Bauer', 'Tobias Engel', 'Sabine Krüger'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Immer mehr Unternehmen verlangen wieder Anwesenheit im Büro.',
                    answer: 0,
                    explanationRu: 'Ведущая во вступлении: «rufen immer mehr Unternehmen ihre Leute ins Büro zurück».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Die langwierige Einarbeitung neuer Mitarbeiter war ein Auslöser für die neue Regelung.',
                    answer: 1,
                    explanationRu: 'Энгель: новые сотрудники «haben deutlich länger gebraucht, um sich einzuarbeiten» — это одна из причин введения дней присутствия.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Die Bedeutung zufälliger Begegnungen für Innovationen wird möglicherweise überschätzt.',
                    answer: 2,
                    explanationRu: 'Крюгер: о спонтанных идеях у кофемашины — «die Belege dafür sind dünner, als man denkt».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Starre Präsenzregeln können gerade begehrte Fachkräfte zum Wechsel bewegen.',
                    answer: 2,
                    explanationRu: 'Крюгер: о смене работы чаще думают «vor allem die Hochqualifizierten».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Beschäftigte ohne Möglichkeit zum Homeoffice haben die Debatte als realitätsfern erlebt.',
                    answer: 1,
                    explanationRu: 'Энгель: сотрудники склада и ресепшена восприняли дискуссию «als ziemlich abgehoben».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Wie belastend das Homeoffice ist, hängt auch von der Wohnsituation ab.',
                    answer: 2,
                    explanationRu: 'Крюгер: собственный кабинет vs. кухонный стол «zwischen zwei Kindern».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Anfangs fanden im Büro trotzdem überwiegend Online-Besprechungen statt.',
                    answer: 1,
                    explanationRu: 'Энгель: ехали в офис, «um dann doch nur Videokonferenzen zu führen. Das war anfangs … unser größter Fehler».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Ohne erkennbaren Mehrwert wird eine Anwesenheitspflicht als Kontrolle empfunden.',
                    answer: 2,
                    explanationRu: 'Крюгер: иначе обязательное присутствие остаётся «eine Kontrollmaßnahme».',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ───────────────────────── Hören Teil 4 ─────────────────────────
      {
        teil: 4,
        instructionDe:
          'Sie hören einen Ausschnitt aus einer Vorlesung. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите фрагмент лекции. Текст звучит дважды. Выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Sanfte Anstöße: Nudging zwischen Wirkung und Manipulation',
            kind: 'monolog',
            situation:
              'Sie hören einen Ausschnitt aus einer Vorlesung der Verhaltensökonomin Prof. Dr. Katharina Wendt.',
            playCount: 2,
            text: `Guten Morgen, meine Damen und Herren. In der heutigen Sitzung beschäftigen wir uns mit einem Konzept, das in den letzten fünfzehn Jahren eine erstaunliche Karriere gemacht hat – von der Fachliteratur der Verhaltensökonomie bis in die Regierungszentralen zahlreicher Länder. Die Rede ist vom sogenannten Nudging, auf Deutsch etwa: einem sanften Anstoßen.

Die Grundidee ist rasch erklärt. Die klassische Wirtschaftstheorie ging lange von einem Menschen aus, der seine Entscheidungen rational trifft, alle verfügbaren Informationen abwägt und stets seinen Nutzen maximiert. Die Verhaltensökonomie hat dieses Bild gründlich erschüttert. Wir wissen heute, dass Menschen systematisch von bestimmten Mustern beeinflusst werden: Sie bevorzugen den Status quo, sie überschätzen kurzfristige Vorteile gegenüber langfristigen, und sie lassen sich davon beeinflussen, in welcher Reihenfolge ihnen Optionen präsentiert werden.

Ein Nudge nutzt diese Muster, um Menschen zu Entscheidungen zu bewegen, die – so die Annahme – in ihrem eigenen Interesse liegen, ohne ihnen dabei Optionen zu verbieten oder finanzielle Anreize zu verändern. Das bekannteste Beispiel ist die sogenannte Standardoption. Wenn Beschäftigte automatisch in eine betriebliche Altersvorsorge aufgenommen werden und aktiv widersprechen müssen, wenn sie nicht teilnehmen wollen, steigt die Teilnahmequote dramatisch – obwohl sich an den Bedingungen selbst nichts geändert hat. Ähnliches gilt für die Platzierung von Obst auf Augenhöhe in einer Kantine.

Befürworter sprechen von einem „libertären Paternalismus“: paternalistisch, weil man Menschen in eine bestimmte Richtung lenkt; libertär, weil ihnen die Freiheit der Wahl erhalten bleibt. Gerade diese Verbindung hat das Konzept für Regierungen unterschiedlicher politischer Ausrichtung attraktiv gemacht. Es verspricht Wirkung ohne Verbote und ohne hohe Kosten.

Allerdings – und damit komme ich zum zweiten Teil – ist die Kritik in den letzten Jahren lauter geworden, und zwar aus zwei Richtungen. Der erste Einwand ist empirischer Natur. Neuere Übersichtsarbeiten, die sehr viele Studien zusammenfassen, kommen zu dem Ergebnis, dass die durchschnittliche Wirkung von Nudges deutlich kleiner ist, als frühe, viel beachtete Einzelstudien nahelegten. Berücksichtigt man, dass erfolglose Experimente seltener veröffentlicht werden, schrumpft der Effekt in manchen Bereichen beinahe auf null. Das gilt nicht für alle Nudges gleichermaßen – Standardoptionen erweisen sich als vergleichsweise robust –, aber die anfängliche Euphorie war offenkundig übertrieben.

Der zweite Einwand ist ethischer Natur. Wer entscheidet eigentlich, was im Interesse der Menschen liegt? Und ist es mit der Würde mündiger Bürger vereinbar, sie gezielt über Mechanismen zu beeinflussen, die ihnen meist gar nicht bewusst sind? Kritiker sprechen von Manipulation, gerade weil Nudges am besten funktionieren, wenn man sie nicht bemerkt. Befürworter halten dem entgegen, dass es keine neutrale Gestaltung gibt: Irgendeine Option muss in der Kantine nun einmal vorne stehen. Wenn ohnehin beeinflusst werde, dann lieber bewusst und zum Wohl der Betroffenen.

Ich persönlich halte diesen Gegeneinwand für stärker, als die Kritiker zugestehen, aber nicht für ausreichend. Er rechtfertigt Nudges nur dann, wenn sie transparent sind, also offengelegt wird, welches Ziel verfolgt wird, und wenn sie strukturelle Probleme nicht verdecken. Ein Obstteller auf Augenhöhe ersetzt keine Gesundheitspolitik. In der nächsten Sitzung schauen wir uns dazu einige konkrete Fallstudien an.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Welches Menschenbild hat die Verhaltensökonomie infrage gestellt?',
                    options: [
                      'Das Bild eines Menschen, der stets rational entscheidet.',
                      'Das Bild eines Menschen, der vor allem gefühlsgesteuert handelt.',
                      'Das Bild eines Menschen, der ständig nach Veränderung sucht.',
                    ],
                    answer: 0,
                    explanationRu: 'Классическая теория исходила из человека, который «seine Entscheidungen rational trifft»; поведенческая экономика это опровергла.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was kennzeichnet einen Nudge laut der Dozentin?',
                    options: [
                      'Er belohnt erwünschtes Verhalten finanziell.',
                      'Er verbietet unerwünschte Alternativen.',
                      'Er beeinflusst Entscheidungen, ohne Wahlmöglichkeiten einzuschränken.',
                    ],
                    answer: 2,
                    explanationRu: 'Nudge действует «ohne ihnen dabei Optionen zu verbieten oder finanzielle Anreize zu verändern».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was zeigt das Beispiel der betrieblichen Altersvorsorge?',
                    options: [
                      'Beschäftigte interessieren sich kaum für ihre Altersvorsorge.',
                      'Eine voreingestellte Option kann das Verhalten stark verändern.',
                      'Bessere Bedingungen führen zu höheren Teilnahmequoten.',
                    ],
                    answer: 1,
                    explanationRu: 'При автоматическом включении участие резко растёт, «obwohl sich an den Bedingungen selbst nichts geändert hat».',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum ist Nudging für Regierungen attraktiv?',
                    options: [
                      'Weil es Wirkung ohne Verbote und große Ausgaben verspricht.',
                      'Weil die Bevölkerung es grundsätzlich nicht bemerkt.',
                      'Weil es nur von einer politischen Richtung unterstützt wird.',
                    ],
                    answer: 0,
                    explanationRu: '«Es verspricht Wirkung ohne Verbote und ohne hohe Kosten»; привлекательно для правительств разной политической ориентации.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was ergaben neuere Übersichtsarbeiten?',
                    options: [
                      'Nudges wirken durchweg stärker als erwartet.',
                      'Die Wirkung vieler Nudges wurde anfangs überschätzt.',
                      'Standardoptionen haben sich als wirkungslos erwiesen.',
                    ],
                    answer: 1,
                    explanationRu: 'Средний эффект «deutlich kleiner» ранних оценок, «die anfängliche Euphorie war offenkundig übertrieben»; опции по умолчанию как раз относительно устойчивы.',
                  },
                  {
                    kind: 'mc',
                    question: 'Welche Position vertritt die Dozentin am Ende?',
                    options: [
                      'Sie lehnt Nudges als Manipulation grundsätzlich ab.',
                      'Sie hält Nudges für einen Ersatz für Gesundheitspolitik.',
                      'Sie hält Nudges unter bestimmten Bedingungen, etwa Transparenz, für vertretbar.',
                    ],
                    answer: 2,
                    explanationRu: 'Nudges оправданы, только если они прозрачны и не маскируют структурные проблемы: «Ein Obstteller … ersetzt keine Gesundheitspolitik».',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  schreiben: {
    minutes: 75,
    tasks: [
      {
        teil: 1,
        instructionDe:
          'Sie schreiben einen Diskussionsbeitrag für ein Online-Forum (ca. 230 Wörter). Gehen Sie auf alle vier Punkte ein. Achten Sie auf eine klare Gliederung mit Einleitung und Schluss sowie auf gelungene Übergänge zwischen den Abschnitten.',
        instructionRu:
          'Напишите дискуссионный пост для онлайн-форума (около 230 слов). Раскройте все четыре пункта. Следите за чёткой структурой и логичными переходами.',
        situationDe: `Forum „Beruf & Zukunft“ – Thema: Wer ist für lebenslanges Lernen verantwortlich?

Einer Erhebung zufolge haben im vergangenen Jahr rund 60 % der Beschäftigten mit Hochschulabschluss an einer beruflichen Weiterbildung teilgenommen, aber nur etwa 25 % der Beschäftigten ohne Berufsabschluss.

Beitrag von „J.Hartmann“: „Weiterbildung ist Privatsache. Wer im Beruf bestehen will, muss eben selbst Zeit und Geld investieren.“`,
        points: [
          'Deuten Sie die unterschiedlichen Teilnahmequoten.',
          'Erläutern Sie, welche Rolle Arbeitgeber, Staat und Einzelne bei der Weiterbildung spielen sollten.',
          'Nennen Sie Hindernisse, die Menschen von einer Weiterbildung abhalten.',
          'Nehmen Sie begründet Stellung zur Aussage von „J.Hartmann“ und machen Sie einen konkreten Vorschlag.',
        ],
        minWords: 230,
        register: 'halbformell',
        minutes: 50,
        maxPoints: 60,
      },
      {
        teil: 2,
        instructionDe:
          'Schreiben Sie eine formelle E-Mail (ca. 120 Wörter). Behandeln Sie alle vier Punkte. Achten Sie auf Anrede, Gruß und einen angemessenen Ton.',
        instructionRu:
          'Напишите официальное электронное письмо (около 120 слов). Раскройте все четыре пункта. Обратите внимание на обращение, заключительную формулу и уместный тон.',
        situationDe: `Sie haben sich bei einer Stiftung um ein Stipendium für einen dreimonatigen Forschungsaufenthalt beworben. Die Stiftung teilt Ihnen mit, dass Ihre Unterlagen vollständig sind – bis auf ein Fachgutachten Ihrer Betreuerin, das bis zum 15. des Monats nachgereicht werden muss. Ihre Betreuerin ist jedoch für mehrere Wochen erkrankt. Schreiben Sie an die zuständige Sachbearbeiterin, Frau Kowalski.`,
        points: [
          'Nehmen Sie Bezug auf das Schreiben der Stiftung.',
          'Erklären Sie, warum Sie die Frist nicht einhalten können.',
          'Bitten Sie um eine Fristverlängerung und nennen Sie ein konkretes Datum.',
          'Bieten Sie eine alternative Lösung an (z. B. ein Gutachten einer anderen Person).',
        ],
        minWords: 120,
        register: 'formell',
        minutes: 25,
        maxPoints: 40,
      },
    ],
  },
  sprechen: {
    minutes: 15,
    tasks: [
      {
        teil: 1,
        mode: 'presentation',
        instructionDe:
          'Halten Sie einen Vortrag von ca. 3–4 Minuten. Stellen Sie das Thema vor, erläutern Sie die Zahlen, setzen Sie sich mit der These auseinander und kommen Sie zu einem begründeten Fazit. Im Anschluss stellt Ihnen die Prüferin eine oder zwei Fragen.',
        instructionRu:
          'Сделайте доклад на 3–4 минуты. Представьте тему, прокомментируйте цифры, разберите тезис и сделайте обоснованный вывод. После доклада экзаменатор задаст один-два вопроса.',
        situationDe: `Thema: Wohnungsnot in den Großstädten

In vielen deutschen Großstädten sind die Mieten bei Neuvermietungen innerhalb von zehn Jahren um mehr als 50 % gestiegen. Gleichzeitig ist die durchschnittliche Wohnfläche pro Kopf auf rund 47 m² gewachsen – vor allem, weil immer mehr Menschen allein in großen Wohnungen leben.

These: „Das Problem ist nicht zu wenig Wohnraum, sondern seine ungerechte Verteilung.“`,
        points: [
          'Führen Sie in das Thema ein und nennen Sie die Gliederung Ihres Vortrags.',
          'Erläutern und interpretieren Sie die Zahlen.',
          'Nennen Sie Ursachen und gesellschaftliche Folgen der Wohnungsknappheit.',
          'Setzen Sie sich kritisch mit der These auseinander (Argumente und Gegenargumente).',
          'Ziehen Sie ein Fazit und skizzieren Sie mögliche Lösungsansätze.',
        ],
        aiRole:
          'Sie sind Prüferin in der mündlichen Prüfung Goethe-Zertifikat C1. Sie hören dem Vortrag aufmerksam zu, ohne zu unterbrechen. Danach stellen Sie ein bis zwei anspruchsvolle Rückfragen, z. B. zur Umsetzbarkeit einer genannten Lösung oder zur Lage in anderen Ländern. Sie sprechen gepflegtes Standarddeutsch.',
        opener:
          'Guten Tag. Ihr Thema ist die Wohnungsnot in den Großstädten. Bitte beginnen Sie mit Ihrem Vortrag – Sie haben etwa drei bis vier Minuten Zeit.',
        minutes: 6,
        maxPoints: 50,
      },
      {
        teil: 2,
        mode: 'discussion',
        instructionDe:
          'Diskutieren Sie mit Ihrem Gesprächspartner über die folgende Frage (ca. 5–6 Minuten). Vertreten Sie Ihren Standpunkt, begründen Sie ihn, gehen Sie auf die Argumente Ihres Partners ein und versuchen Sie, am Ende zu einem Ergebnis zu kommen.',
        instructionRu:
          'Обсудите с партнёром следующий вопрос (около 5–6 минут). Отстаивайте и обосновывайте свою позицию, реагируйте на контраргументы партнёра и постарайтесь в конце прийти к результату.',
        situationDe: 'Sollte das Wahlalter bei Bundestagswahlen auf 16 Jahre gesenkt werden?',
        points: [
          'Politische Reife und Urteilsfähigkeit Jugendlicher',
          'Generationengerechtigkeit in einer alternden Gesellschaft',
          'Rolle der Schule und der politischen Bildung',
          'Erfahrungen mit dem Wahlalter 16 bei Kommunal- oder Landtagswahlen',
        ],
        aiRole:
          'Sie sind Gesprächspartner in der mündlichen Prüfung Goethe-Zertifikat C1. Sie vertreten konsequent die Gegenposition: Das Wahlalter bei Bundestagswahlen sollte bei 18 bleiben. Argumente: Einheit von Rechten und Pflichten (Volljährigkeit, Geschäftsfähigkeit), Anfälligkeit für Stimmungen in sozialen Medien, geringes Interesse vieler Jugendlicher, Wahlbeteiligung Erstwähler. Sie sprechen idiomatisches C1-Deutsch (z. B. „das ist ein zweischneidiges Schwert“, „ich gebe zu bedenken, dass …“, „das lässt sich nicht von der Hand weisen“), widersprechen höflich, aber bestimmt, und verlangen Belege. Wenn Ihr Gegenüber überzeugend argumentiert, zeigen Sie gegen Ende Kompromissbereitschaft (z. B. Wahlalter 16 zunächst auf kommunaler Ebene, verbunden mit mehr politischer Bildung). Halten Sie Ihre Beiträge kurz (2–4 Sätze).',
        opener:
          'Ich gebe zu bedenken: Mit 16 darf man in Deutschland nicht einmal einen Handyvertrag allein abschließen – aber über die Bundesregierung soll man mitentscheiden? Das passt für mich nicht zusammen. Wie sehen Sie das?',
        minutes: 6,
        maxPoints: 50,
      },
    ],
  },
};
