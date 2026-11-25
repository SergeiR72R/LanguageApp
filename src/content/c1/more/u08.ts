import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Die Gewerkschaft hat scharfe Kritik an den Sparplänen der Konzernleitung ___.',
      options: ['geübt', 'gemacht', 'genommen', 'gestellt'],
      answer: 0,
      explanationRu: 'Устойчивое сочетание: «Kritik üben an + Dat.» (критиковать). «Kritik machen» — калька, так не говорят.',
    },
    {
      type: 'gap',
      prompt: 'Wer ein Start-up gründet, muss bereit sein, ein hohes Risiko ___.',
      answers: ['einzugehen'],
      explanationRu: 'Коллокация «ein Risiko eingehen» (идти на риск). После «bereit sein» — инфинитив с «zu»: «einzugehen».',
    },
    {
      type: 'gap',
      prompt: 'Der neue Prototyp ___ erst im nächsten Quartal zum Einsatz.',
      answers: ['kommt'],
      explanationRu:
        'Процессная (пассивная по смыслу) пара: «zum Einsatz kommen» = «применяться». Каузативный вариант — «zum Einsatz bringen».',
    },
    {
      type: 'choice',
      prompt: 'Die Verkaufszahlen ___ allen Mitarbeitenden ab sofort im Intranet zur Verfügung.',
      options: ['stellen', 'stehen', 'bringen', 'kommen'],
      answer: 1,
      explanationRu:
        'Данные сами ничего не предоставляют — они «имеются в распоряжении» → «zur Verfügung stehen». «zur Verfügung stellen» требует действующего лица.',
    },
    {
      type: 'gap',
      prompt: 'Das neue Lieferkettengesetz ist in Deutschland bereits 2023 in Kraft ___.',
      answers: ['getreten'],
      explanationRu:
        '«in Kraft treten» (вступать в силу) — процесс; Perfekt с «sein»: «ist in Kraft getreten». Каузативно: «in Kraft setzen».',
    },
    {
      type: 'gap',
      prompt: 'Der Bilanzskandal hat den Konzern in große Schwierigkeiten ___.',
      answers: ['gebracht'],
      explanationRu:
        'Каузативная конструкция «jdn. in Schwierigkeiten bringen» (поставить в трудное положение). Процессный вариант: «in Schwierigkeiten geraten».',
    },
    {
      type: 'choice',
      prompt: 'Das Reformkonzept hat seit seiner ersten Vorstellung mehrere Änderungen ___.',
      options: ['erfahren', 'gemacht', 'gefunden', 'getroffen'],
      answer: 0,
      explanationRu:
        '«eine Änderung erfahren» имеет пассивное значение (= geändert werden). «Änderungen machen/treffen» — неверные коллокации.',
    },
    {
      type: 'gap',
      prompt: 'Wenn der Umsatz weiter sinkt, wird die Geschäftsführung den ___ ansetzen müssen.',
      answers: ['Rotstift'],
      explanationRu: 'Идиома «den Rotstift ansetzen» = урезать расходы.',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Eine Verlagerung der Produktion ins Ausland kommt für uns nicht in Frage.“?',
      options: [
        'Über eine Verlagerung wird gerade intensiv diskutiert.',
        'Eine Verlagerung ist für uns völlig ausgeschlossen.',
        'Ob eine Verlagerung möglich ist, muss noch geprüft werden.',
        'Eine Verlagerung ist für uns eine offene Frage.',
      ],
      answer: 1,
      explanationRu: '«nicht in Frage kommen» = «исключено, не рассматривается». Отрицание при ФВК с предлогом — «nicht».',
    },
    {
      type: 'gap',
      prompt: 'Der Aufsichtsrat hat ___ Einwände gegen die geplante Fusion erhoben.',
      answers: ['keine'],
      explanationRu:
        'В конструкции с существительным без предлога («Einwände erheben») отрицание выражается через «kein»: «keine Einwände erheben».',
    },
    {
      type: 'choice',
      prompt: 'Die noch ___ Maßnahmen sollen die Zahlungsfähigkeit des Unternehmens sichern. (= die ergriffen werden müssen)',
      options: ['zu ergreifenden', 'zu ergreifende', 'ergriffenen', 'zu ergriffenen'],
      answer: 0,
      explanationRu:
        'Повторение (C1-06): Gerundivum «zu + Partizip I» выражает необходимость. Мн. ч. после «die» → «zu ergreifenden». Коллокация: «Maßnahmen ergreifen».',
    },
    {
      type: 'gap',
      prompt: 'Die Stadt will die Pläne für das neue Gründerzentrum im Herbst öffentlich zur Diskussion ___.',
      answers: ['stellen'],
      explanationRu:
        '«etw. zur Diskussion stellen» — выносить на обсуждение (активно). Пассивная пара: «zur Diskussion stehen».',
    },
    {
      type: 'choice',
      prompt: 'Welche Verbindung ist NICHT üblich?',
      options: ['einen Antrag stellen', 'eine Forderung stellen', 'eine Entscheidung stellen', 'eine Bedingung stellen'],
      answer: 2,
      explanationRu: 'Решение «принимают» — «eine Entscheidung treffen». Остальные сочетания с «stellen» правильные.',
    },
    {
      type: 'order',
      words: ['Die', 'Verhandlungen', 'mit', 'dem', 'Zulieferer', 'sind', 'ins Stocken', 'geraten.'],
      translationRu: 'Переговоры с поставщиком застопорились.',
      explanationRu:
        'ФВК «ins Stocken geraten» (застопориться) образует рамку: «sind … ins Stocken geraten». Предложная часть стоит непосредственно перед причастием.',
    },
    {
      type: 'order',
      words: ['Wir', 'müssen', 'es', 'endlich', 'in Angriff', 'nehmen.'],
      translationRu: 'Нам наконец нужно за это взяться.',
      explanationRu:
        '«etw. in Angriff nehmen» (браться за что-л.): местоимение «es» стоит в начале среднего поля, именная часть ФВК — перед инфинитивом в конце.',
    },
    {
      type: 'order',
      words: ['Der', 'Vorschlag', 'des', 'Vorstands', 'stieß', 'bei den Investoren', 'auf wenig Gegenliebe.'],
      translationRu: 'Предложение правления не встретило у инвесторов поддержки.',
      explanationRu:
        '«auf (wenig) Gegenliebe stoßen» = встретить (мало) одобрения. Предложная часть ФВК стоит в конце среднего поля.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените пассив функциональной конструкцией с глаголом «finden».',
      prompt: 'Der Vorschlag wurde allgemein anerkannt.',
      answers: ['Der Vorschlag fand allgemeine Anerkennung.', 'Der Vorschlag fand allgemein Anerkennung.'],
      explanationRu: '«Anerkennung finden» имеет пассивное значение (= anerkannt werden). Время сохраняется: «wurde» → «fand».',
    },
    {
      type: 'transform',
      instructionRu: 'Замените глагол «beschließen» конструкцией «den Beschluss fassen».',
      prompt: 'Das Management hat beschlossen, die Produktion nach Polen zu verlagern.',
      answers: ['Das Management hat den Beschluss gefasst, die Produktion nach Polen zu verlagern.'],
      explanationRu: '«beschließen» = «einen/den Beschluss fassen». Инфинитивная группа сохраняется и отделяется запятой.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение: используйте процессную пару вместо каузативной (без действующего лица).',
      prompt: 'Die Behörde setzt die neue Verordnung im Mai in Kraft.',
      answers: ['Die neue Verordnung tritt im Mai in Kraft.'],
      explanationRu: 'Каузативное «in Kraft setzen» ↔ процессное «in Kraft treten». Объект «die Verordnung» становится подлежащим.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените разговорный глагол «machen» более официальной коллокацией с «unterbreiten».',
      prompt: 'Wir möchten Ihnen einen Vorschlag machen.',
      answers: ['Wir möchten Ihnen einen Vorschlag unterbreiten.'],
      explanationRu: 'В деловой переписке: «jdm. einen Vorschlag / ein Angebot unterbreiten». «machen» звучит разговорно.',
    },
  ],
  reading: [
    {
      title: 'Die Vier-Tage-Woche – ein Modell für alle?',
      textType: 'Meinungen / Expertenstatements',
      texts: [
        {
          label: 'A',
          heading: 'Sandra Köhler, Inhaberin einer Werbeagentur',
          body: `Wir haben die Vier-Tage-Woche vor einem Jahr bei vollem Gehalt eingeführt, zunächst als Experiment. Die Bilanz fällt durchweg positiv aus: Unsere Produktivität ist stabil geblieben, die Krankheitstage sind zurückgegangen, und auf eine Stellenanzeige erhalten wir inzwischen dreimal so viele Bewerbungen wie früher. Für ein kleines Unternehmen wie unseres ist das ein entscheidender Vorteil im Wettbewerb um gute Leute. Selbstverständlich ging das nicht von allein. Wir haben unsere Besprechungen radikal gekürzt und klare Regeln für die Erreichbarkeit aufgestellt. Einige Kunden haben anfangs skeptisch reagiert und befürchtet, freitags niemanden mehr zu erreichen. Diese Bedenken haben sich aber schnell zerstreut.`,
        },
        {
          label: 'B',
          heading: 'Dr. Martin Ulbrich, Arbeitsmarktökonom',
          body: `Ich gönne jedem Unternehmen seinen Erfolg. Man sollte allerdings vorsichtig sein, aus solchen Pilotprojekten allgemeine Schlüsse zu ziehen. Daran nehmen in der Regel Firmen teil, die ohnehin von dem Modell überzeugt sind und gute Voraussetzungen mitbringen. Die Ergebnisse sind daher nur begrenzt übertragbar. Gesamtwirtschaftlich stehen wir vor einem ganz anderen Problem: Bis 2035 gehen Millionen Babyboomer in Rente, und schon jetzt fehlen überall Fachkräfte. Wenn in dieser Lage alle weniger arbeiten, schrumpft das Arbeitsvolumen weiter – mit absehbaren Folgen für Wachstum und Sozialsysteme. Und wer weniger arbeitet, zahlt in der Regel auch weniger in die Rentenkasse ein.`,
        },
        {
          label: 'C',
          heading: 'Aylin Demir, Pflegedienstleiterin',
          body: `In einer Agentur mag das funktionieren, im Krankenhaus sieht die Welt anders aus. Patienten müssen rund um die Uhr versorgt werden, und jede Schicht muss besetzt sein. Eine Vier-Tage-Woche wäre bei uns nur mit deutlich mehr Personal machbar – und das haben wir schlicht nicht. Viele Kolleginnen reduzieren ohnehin schon ihre Stunden, weil sie die Belastung sonst nicht mehr aushalten. Manche Kliniken bieten an, die Wochenarbeitszeit auf vier Tage mit je zehn Stunden zu verteilen. Davon halte ich wenig: Wer zehn Stunden am Krankenbett steht, braucht den freien Tag zum Erholen. Was unsere Beschäftigten wirklich wollen, sind verlässliche Dienstpläne und mehr Mitsprache bei der Planung.`,
        },
        {
          label: 'D',
          heading: 'Jonas Feld, Betriebsratsvorsitzender in einem Maschinenbauunternehmen',
          body: `Wer heute vor dem Untergang der Wirtschaft warnt, sollte einen Blick in die Geschichte werfen. Dieselben Argumente hörte man, als die Gewerkschaften in den Achtzigerjahren für die 35-Stunden-Woche kämpften. Die Metallindustrie ist daran nicht zugrunde gegangen, im Gegenteil. Ich unterstütze die Vier-Tage-Woche, allerdings unter einer Bedingung: Sie muss mit einer echten Verkürzung der Arbeitszeit einhergehen. Produktivitätsfortschritte müssen schließlich auch bei den Beschäftigten ankommen, nicht nur bei den Aktionären. Wenn dieselbe Arbeitsmenge einfach in weniger Zeit gepresst wird, ist niemandem gedient. Das führt nur zu mehr Stress und am Ende zu mehr Krankschreibungen.`,
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Stellungnahmen. Welche Aussage passt zu welcher Person? Jede Person kann mehrmals gewählt werden.',
          instructionRu: 'Прочитайте мнения. Какое утверждение относится к какому человеку? Каждого можно выбирать несколько раз.',
          options: ['Sandra Köhler', 'Martin Ulbrich', 'Aylin Demir', 'Jonas Feld'],
          items: [
            {
              kind: 'match',
              prompt: 'Seit der Umstellung ist das Interesse von Bewerbern deutlich gestiegen.',
              answer: 0,
              explanationRu: 'Кёлер: «dreimal so viele Bewerbungen wie früher».',
            },
            {
              kind: 'match',
              prompt: 'Die Ergebnisse von Modellversuchen lassen sich nicht ohne Weiteres verallgemeinern.',
              answer: 1,
              explanationRu: 'Ульбрих: в пилотных проектах участвуют фирмы с хорошими условиями, результаты «nur begrenzt übertragbar».',
            },
            {
              kind: 'match',
              prompt: 'In bestimmten Berufen ist das Modell ohne zusätzliche Arbeitskräfte nicht umsetzbar.',
              answer: 2,
              explanationRu: 'Демир: в больнице это возможно «nur mit deutlich mehr Personal».',
            },
            {
              kind: 'match',
              prompt: 'Eine kürzere Woche darf nicht bedeuten, dass dieselbe Arbeit in weniger Zeit erledigt werden muss.',
              answer: 3,
              explanationRu: 'Фельд: если тот же объём работы «in weniger Zeit gepresst wird», это никому не поможет.',
            },
            {
              kind: 'match',
              prompt: 'Auftraggeber hatten zunächst Bedenken.',
              answer: 0,
              explanationRu: 'Кёлер: некоторые клиенты сначала опасались, что по пятницам никого не застанут.',
            },
            {
              kind: 'match',
              prompt: 'Angesichts des demografischen Wandels hält er eine allgemeine Arbeitszeitverkürzung für riskant.',
              answer: 1,
              explanationRu: 'Ульбрих: бэби-бумеры уходят на пенсию, не хватает специалистов — объём труда сократится ещё больше.',
            },
            {
              kind: 'match',
              prompt: 'Sehr lange Arbeitstage können den Nutzen eines zusätzlichen freien Tages aufheben.',
              answer: 2,
              explanationRu: 'Демир: после десяти часов у постели больного свободный день нужен просто для восстановления.',
            },
            {
              kind: 'match',
              prompt: 'Frühere Verkürzungen der Arbeitszeit haben der Industrie nicht geschadet.',
              answer: 3,
              explanationRu: 'Фельд: металлургия не погибла от 35-часовой недели, «im Gegenteil».',
            },
          ],
        },
      ],
    },
    {
      title: 'Das Dilemma der Marktführer',
      textType: 'Sachtext mit Lücken',
      texts: [
        {
          body: `Es gehört zu den irritierendsten Befunden der Wirtschaftsgeschichte: Unternehmen, die ihren Markt jahrzehntelang beherrscht haben, verlieren ihre Spitzenposition oft innerhalb weniger Jahre – und zwar nicht etwa, weil sie schlecht geführt wären. [1] Der Harvard-Ökonom Clayton Christensen hat für dieses Phänomen in den Neunzigerjahren den Begriff des „Innovator's Dilemma“ geprägt.

Christensen unterscheidet zwischen zwei Arten von Innovationen. Erhaltende Innovationen verbessern bestehende Produkte schrittweise: Die Kamera wird schärfer, das Auto sparsamer, die Software schneller. Hier haben etablierte Anbieter in der Regel die Nase vorn, denn sie verfügen über das nötige Kapital, die Erfahrung und den Zugang zu den Kunden. [2] Sie sind anfangs technisch unterlegen, dafür billiger und einfacher, und sie sprechen eine Kundschaft an, die für die Marktführer uninteressant ist.

Genau darin liegt die Falle. [3] Ihre besten Kunden verlangen nach leistungsfähigeren Produkten, nicht nach einfacheren; die Margen im neuen Segment sind gering, der Markt erscheint winzig. Aus Sicht des Managements wäre es geradezu verantwortungslos, Mittel aus dem profitablen Kerngeschäft abzuziehen. [4] Irgendwann sind die einstigen Billigprodukte für die Mehrheit der Kunden gut genug – und der Marktführer hat den Anschluss verpasst.

Das wohl bekannteste Beispiel ist Kodak. Ausgerechnet ein Ingenieur des Konzerns baute 1975 die erste Digitalkamera. [5] Das Management fürchtete, das lukrative Geschäft mit Filmen und Fotopapier zu gefährden. Knapp vier Jahrzehnte später musste das Unternehmen Insolvenz anmelden – überrollt von einer Technologie, die es selbst erfunden hatte.

Ähnlich erging es dem finnischen Konzern Nokia, der Mitte der Nullerjahre den Weltmarkt für Mobiltelefone dominierte. Als Apple 2007 das erste iPhone vorstellte, hielten viele Branchenkenner das Gerät für eine teure Spielerei mit schwachem Akku. Nokia setzte weiter auf robuste Tastenhandys – und verlor innerhalb weniger Jahre den Großteil seiner Marktanteile. Allerdings passt dieses Beispiel nur bedingt zu Christensens Theorie: Das iPhone war von Anfang an kein Billigprodukt, sondern ein Premiumgerät.

Was können Unternehmen aus solchen Fällen lernen? Christensen empfahl, disruptive Projekte in eigenständige Einheiten auszulagern, die nicht an den Maßstäben des Kerngeschäfts gemessen werden. [6] Andere Fachleute raten dazu, gezielt in Start-ups zu investieren oder sie aufzukaufen, um frühzeitig Zugang zu neuen Technologien zu erhalten. Eine Erfolgsgarantie bietet allerdings keine dieser Strategien. Entscheidend sei vielmehr, so der Tenor der Forschung, dass Unternehmen bereit sind, ihr eigenes Geschäftsmodell infrage zu stellen, solange es noch erfolgreich ist.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Ganz anders verhält es sich bei sogenannten disruptiven Innovationen.',
            'Vielmehr wird ihnen gerade ihr Erfolg im bestehenden Geschäft zum Verhängnis.',
            'Etablierte Unternehmen handeln nämlich durchaus rational, wenn sie solche Neuerungen zunächst ignorieren.',
            'Währenddessen verbessern die Neulinge ihre Technik Schritt für Schritt.',
            'Doch statt die Erfindung zu vermarkten, ließ man sie in der Schublade verschwinden.',
            'Dort sollen sie die Freiheit haben, mit kleinen Märkten und geringen Gewinnen zu experimentieren.',
            'Aus diesem Grund setzen sich disruptive Technologien nur äußerst selten durch.',
            'Kodak stellte daraufhin unverzüglich die Produktion von Filmen ein.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 1,
              explanationRu: '«nicht etwa, weil sie schlecht geführt wären» → «Vielmehr …» — причина в их собственном успехе.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 0,
              explanationRu: 'После описания «erhaltende Innovationen» вводится второй тип — подрывные инновации; дальше «Sie sind anfangs technisch unterlegen».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 2,
              explanationRu: '«Genau darin liegt die Falle»: лидеры рынка поступают рационально, игнорируя новинки; далее объясняется почему.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 3,
              explanationRu: 'Пока лидер не вкладывается, новички постепенно улучшают технику — и «irgendwann» их продукты становятся достаточно хорошими.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 4,
              explanationRu: 'Изобретение положили «в ящик», потому что руководство боялось за бизнес с плёнкой.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 5,
              explanationRu: '«Dort» = в самостоятельных подразделениях, которые не оцениваются по меркам основного бизнеса.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Vortrag: Warum Start-ups scheitern',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag einer Gründerin auf einer Veranstaltung für Existenzgründer.',
      text: `Guten Abend, meine Damen und Herren, und vielen Dank für die Einladung. Ich möchte heute über ein Thema sprechen, über das man auf Gründerveranstaltungen eher ungern redet: das Scheitern. Die Zahlen sind ernüchternd. Je nach Studie geben zwischen der Hälfte und zwei Dritteln aller Start-ups innerhalb der ersten fünf Jahre auf. Man könnte meinen, der häufigste Grund sei Geldmangel. Tatsächlich ist fehlendes Kapital aber meist nur das Symptom, nicht die Ursache.

Die mit Abstand häufigste Ursache ist eine andere: Das Produkt löst ein Problem, das niemand hat – oder zumindest keines, für dessen Lösung jemand zu zahlen bereit ist. Analysen gescheiterter Gründungen kommen immer wieder zu demselben Ergebnis: Rund ein Drittel der Teams räumt im Nachhinein ein, am Markt vorbei entwickelt zu haben. Ich habe selbst so ein Unternehmen gegründet. Wir haben zwei Jahre lang an einer Plattform zur Vermittlung von Handwerkern gefeilt, technisch war sie hervorragend. Nur: Die Handwerker hatten volle Auftragsbücher und keinerlei Interesse an zusätzlichen Kunden. Hätten wir zu Beginn mit zwanzig Betrieben gesprochen, hätten wir uns viel Geld und Nerven gespart.

Daraus folgt meine erste Empfehlung: Bringen Sie Ihr Produkt so früh wie möglich auf den Markt, auch wenn es noch unfertig ist. In der Gründerszene spricht man vom „minimal funktionsfähigen Produkt“. Das kostet Überwindung, denn niemand zeigt gern etwas Halbfertiges. Aber nur so erfahren Sie, ob Ihre Annahmen der Realität standhalten.

Der zweite große Faktor ist das Team. Investoren sagen gern, sie würden lieber in ein erstklassiges Team mit einer zweitklassigen Idee investieren als umgekehrt. Das ist keine Floskel. Konflikte unter den Gründern gehören zu den häufigsten Gründen für das Aus. Typischerweise entzünden sie sich nicht an der Idee selbst, sondern an ungeklärten Fragen: Wer entscheidet was? Wie werden die Anteile verteilt, wenn jemand aussteigt? Mein Rat: Regeln Sie das schriftlich, solange Sie sich noch gut verstehen – und nicht erst, wenn der Streit schon ausgebrochen ist.

Drittens wird häufig zu früh und zu schnell expandiert. Wer frisches Kapital erhält, ist versucht, sofort Dutzende neue Leute einzustellen und in weitere Länder zu gehen. Wenn das Geschäftsmodell aber noch nicht tragfähig ist, vervielfacht man auf diese Weise nur die Verluste.

Zum Schluss ein Wort zur Kultur des Scheiterns. In Deutschland haftet einer gescheiterten Gründung noch immer ein Makel an – anders als etwa in den USA, wo eine Pleite eher als Lehrgeld gilt. Das hat Folgen: Viele, die einmal gescheitert sind, wagen keinen zweiten Versuch. Dabei gibt es Hinweise darauf, dass Gründer beim zweiten Anlauf von ihren Erfahrungen profitieren können – vorausgesetzt, sie haben ihre Fehler ehrlich analysiert. Ich jedenfalls bin froh, dass ich es noch einmal versucht habe. Vielen Dank.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie den Vortrag. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
          instructionRu: 'Прослушайте доклад. Выберите правильный ответ в каждом задании.',
          items: [
            {
              kind: 'mc',
              question: 'Was sagt die Rednerin über fehlendes Kapital?',
              options: [
                'Es ist der wichtigste Grund für das Scheitern.',
                'Es ist meist eine Folge tiefer liegender Probleme.',
                'Es spielt bei Start-ups kaum eine Rolle.',
              ],
              answer: 1,
              explanationRu: '«… fehlendes Kapital ist meist nur das Symptom, nicht die Ursache».',
            },
            {
              kind: 'mc',
              question: 'Warum ist ihr eigenes erstes Unternehmen gescheitert?',
              options: [
                'Die Technik der Plattform war nicht ausgereift.',
                'Ein größerer Konkurrent hatte die Nase vorn.',
                'Die Zielgruppe hatte keinen Bedarf an dem Angebot.',
              ],
              answer: 2,
              explanationRu: 'У ремесленников были полные книги заказов, и новые клиенты им были не нужны.',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt sie in Bezug auf das Produkt?',
              options: [
                'es früh und auch unfertig auf den Markt zu bringen',
                'es erst zu veröffentlichen, wenn es technisch perfekt ist',
                'es zunächst nur Investoren vorzustellen',
              ],
              answer: 0,
              explanationRu: '«Bringen Sie Ihr Produkt so früh wie möglich auf den Markt, auch wenn es noch unfertig ist».',
            },
            {
              kind: 'mc',
              question: 'Woran entzünden sich Konflikte im Gründerteam laut der Rednerin meistens?',
              options: [
                'an unterschiedlichen Vorstellungen von der Geschäftsidee',
                'an ungeklärten Zuständigkeiten und Beteiligungsfragen',
                'an der Höhe der Gehälter',
              ],
              answer: 1,
              explanationRu: 'Не из-за идеи, а из-за вопросов «Wer entscheidet was? Wie werden die Anteile verteilt …?»',
            },
            {
              kind: 'mc',
              question: 'Wovor warnt sie Gründer, die frisches Kapital erhalten?',
              options: [
                'das Geld zu lange auf dem Konto liegen zu lassen',
                'mit Investoren zu viele Bedingungen auszuhandeln',
                'zu expandieren, bevor das Geschäftsmodell trägt',
              ],
              answer: 2,
              explanationRu: 'Слишком ранняя экспансия при нежизнеспособной модели лишь «vervielfacht … die Verluste».',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert sie an der Kultur in Deutschland?',
              options: [
                'Gescheiterte Gründer werden stigmatisiert und versuchen es seltener erneut.',
                'Der Staat unterstützt Gründungen finanziell zu wenig.',
                'In Deutschland werden zu viele Unternehmen gegründet.',
              ],
              answer: 0,
              explanationRu: 'Неудача в Германии — «ein Makel», поэтому многие не решаются на вторую попытку.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Milliarden für Chipfabriken?',
      kind: 'discussion',
      speakers: {
        A: 'Moderator',
        B: 'Dr. Laura Schenk, Ökonomin',
        C: 'Frank Albers, Branchenverband der Elektroindustrie',
      },
      situation: 'Sie hören eine Diskussion in der Radiosendung „Wirtschaft kontrovers“.',
      text: `A: Willkommen zu „Wirtschaft kontrovers“. Milliardensubventionen für neue Chipfabriken – kluge Industriepolitik oder Verschwendung von Steuergeld? Darüber diskutiere ich mit der Ökonomin Dr. Laura Schenk und mit Frank Albers vom Branchenverband der Elektroindustrie. Herr Albers, warum soll der Staat private Fabriken mitfinanzieren?
C: Weil wir sonst in eine gefährliche Abhängigkeit geraten. Erinnern Sie sich an die Pandemie: Damals standen in deutschen Autowerken die Bänder still, weil Chips im Wert von ein paar Euro fehlten. Ganze Produktionslinien sind damals zum Stillstand gekommen. Das darf sich nicht wiederholen.
B: Niemand bestreitet, dass die Lieferengpässe ein ernstes Problem waren. Aber eine einzelne Fabrik löst es nicht. Die Halbleiterproduktion besteht aus Dutzenden Schritten, die über die ganze Welt verteilt sind. Selbst wenn hier ein Werk entsteht, bleiben wir bei Rohstoffen, Maschinen und Vorprodukten auf andere angewiesen.
A: Frau Schenk, was stört Sie konkret an den Subventionen?
B: Vor allem die Größenordnung. Wenn ein Konzern pro Arbeitsplatz mehr als eine Million Euro an Fördergeldern erhält, muss man die Frage stellen, ob das Geld nicht anderswo besser angelegt wäre – in der Grundlagenforschung etwa oder in der Ausbildung von Fachkräften. Außerdem besteht die Gefahr von Mitnahmeeffekten: Manche Unternehmen hätten womöglich ohnehin investiert und nehmen das Geld eben gern mit.
C: Das halte ich für realitätsfern. Die USA und mehrere asiatische Länder locken mit enormen Summen. Wenn Europa da nicht mithält, entscheiden sich die Konzerne schlicht für andere Standorte. Wir reden hier nicht über einen fairen Wettbewerb, sondern über einen Subventionswettlauf, dem wir uns nicht entziehen können.
A: Ist das nicht ein Wettlauf, den am Ende nur die Konzerne gewinnen?
B: Genau das ist meine Sorge. Und wir sehen ja, dass nicht jede Zusage eingehalten wird. Mindestens ein großes Projekt in Deutschland ist auf Eis gelegt worden, obwohl die Förderung längst zugesagt war.
C: Das ist bedauerlich, aber kein Argument gegen die Strategie insgesamt. Bei Investitionen dieser Größenordnung kommt es nun einmal zu Verzögerungen. Entscheidend ist, dass wir langfristig denken.
A: Gäbe es denn einen Mittelweg?
B: Ich würde jede Förderzusage an klare Bedingungen knüpfen: eine Rückzahlungspflicht, wenn die versprochenen Arbeitsplätze nicht entstehen, und eine Beteiligung des Staates an späteren Gewinnen.
C: Über Bedingungen kann man reden. Nur dürfen sie nicht so streng ausfallen, dass am Ende niemand mehr in Europa investieren will.
A: Ich danke Ihnen beiden für die Diskussion.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen den Personen zu.',
          instructionRu: 'Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderator', 'Dr. Laura Schenk', 'Frank Albers'],
          items: [
            {
              kind: 'match',
              prompt: 'Fehlende Bauteile haben in der Vergangenheit ganze Produktionslinien lahmgelegt.',
              answer: 2,
              explanationRu: 'Альберс: во время пандемии конвейеры остановились из-за нехватки чипов.',
            },
            {
              kind: 'match',
              prompt: 'Auch mit eigenen Fabriken bleibt man auf Zulieferungen aus dem Ausland angewiesen.',
              answer: 1,
              explanationRu: 'Шенк: сырьё, машины и полуфабрикаты всё равно придётся получать от других.',
            },
            {
              kind: 'match',
              prompt: 'Das Fördergeld wäre in Forschung und Ausbildung möglicherweise besser angelegt.',
              answer: 1,
              explanationRu: 'Шенк: деньги можно было бы вложить «in der Grundlagenforschung … oder in der Ausbildung von Fachkräften».',
            },
            {
              kind: 'match',
              prompt: 'Ohne Förderung würden sich die Unternehmen für Standorte außerhalb Europas entscheiden.',
              answer: 2,
              explanationRu: 'Альберс: если Европа не будет конкурировать, концерны выберут другие места.',
            },
            {
              kind: 'match',
              prompt: 'Es ist fraglich, ob von dem Subventionswettlauf vor allem die Konzerne profitieren.',
              answer: 0,
              explanationRu: 'Ведущий: «Ist das nicht ein Wettlauf, den am Ende nur die Konzerne gewinnen?»',
            },
            {
              kind: 'match',
              prompt: 'Verzögerungen sind bei Großinvestitionen nichts Ungewöhnliches.',
              answer: 2,
              explanationRu: 'Альберс: «Bei Investitionen dieser Größenordnung kommt es nun einmal zu Verzögerungen».',
            },
            {
              kind: 'match',
              prompt: 'Wenn versprochene Stellen nicht entstehen, sollte das Geld zurückgezahlt werden.',
              answer: 1,
              explanationRu: 'Шенк предлагает «Rückzahlungspflicht» и участие государства в прибыли.',
            },
          ],
        },
      ],
    },
  ],
};
