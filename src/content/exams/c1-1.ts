import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'c1-exam-1',
  level: 'C1',
  title: 'Übungstest C1 – 1',
  lesen: {
    minutes: 65,
    parts: [
      // ───────────────────────── Lesen Teil 1 ─────────────────────────
      {
        teil: 1,
        minutes: 15,
        title: 'Wenn Ergebnisse sich nicht wiederholen lassen',
        textType: 'Sachtext mit Lücken',
        texts: [
          {
            body: `Es gehört zu den Grundannahmen der empirischen Wissenschaft, dass ein Befund erst dann als gesichert gilt, wenn andere Forschende ihn unter vergleichbaren Bedingungen bestätigen können. Umso größer war die Unruhe, als ein internationaler Verbund von Psychologinnen und Psychologen vor gut zehn Jahren versuchte, rund hundert veröffentlichte Studien zu wiederholen. [1] Seitdem ist von einer „Replikationskrise“ die Rede, und längst betrifft die Debatte nicht mehr nur die Psychologie, sondern auch Teile der Medizin, der Wirtschaftswissenschaften und der Biologie.

Die Ursachen sind weniger in individuellem Fehlverhalten zu suchen als im System selbst. Fachzeitschriften bevorzugen seit jeher überraschende, „positive“ Ergebnisse; Studien, die keinen Effekt nachweisen, verschwinden dagegen häufig in der Schublade. [2] Hinzu kommt ein Spielraum bei der Auswertung, den Fachleute als „Forschungsfreiheitsgrade“ bezeichnen: Wer erst nach der Datenerhebung entscheidet, welche Messgrößen berücksichtigt und welche Ausreißer ausgeschlossen werden, findet mit einiger Wahrscheinlichkeit irgendein signifikantes Muster – auch dort, wo keines ist.

[3] Viele der ursprünglichen Untersuchungen beruhten auf sehr kleinen Stichproben, oft auf einigen Dutzend Studierenden, die für ihre Teilnahme einen Gutschein erhielten. Bei so wenigen Teilnehmenden genügen einige untypische Reaktionen, um ein Ergebnis in die eine oder andere Richtung kippen zu lassen.

Inzwischen hat die Wissenschaftsgemeinschaft eine Reihe von Gegenmaßnahmen ergriffen. Besonders verbreitet ist die sogenannte Präregistrierung: Forschende legen Hypothesen, Stichprobengröße und Auswertungsplan vor Beginn der Studie öffentlich fest. [4] Einige Zeitschriften gehen noch weiter und sagen die Veröffentlichung eines Artikels bereits auf Grundlage des Studiendesigns zu – unabhängig davon, was am Ende herauskommt.

Kritikerinnen und Kritiker warnen allerdings davor, das Kind mit dem Bade auszuschütten. [5] Gerade in frühen Phasen eines Forschungsfeldes sei es legitim, Daten offen zu durchsuchen und neue Fragen zu entwickeln, statt nur vorab Formuliertes zu überprüfen. Entscheidend sei, dass solche explorativen Analysen als solche gekennzeichnet würden.

Auch die öffentliche Wahrnehmung ist ein heikler Punkt. [6] Bislang zeigen Umfragen jedoch, dass das Vertrauen in die Forschung insgesamt nicht nennenswert gesunken ist. Viele Fachleute deuten die Krise daher eher als Zeichen von Selbstkorrektur: Eine Disziplin, die ihre eigenen Befunde systematisch überprüft, beweise gerade dadurch ihre Wissenschaftlichkeit.

Ob die Reformen dauerhaft greifen, wird sich erst in einigen Jahren zeigen. [7] Solange Karrieren vor allem an der Zahl der Veröffentlichungen in renommierten Zeitschriften gemessen werden, bleibt der Anreiz bestehen, möglichst spektakuläre Ergebnisse zu produzieren.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze bleiben übrig.',
            instructionRu:
              'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
            options: [
              'Dadurch entsteht ein verzerrtes Bild der Forschungslage, weil Misserfolge kaum sichtbar werden.',
              'Größere Stichproben gelten daher heute als überflüssig, da sie das Risiko zufälliger Ergebnisse erhöhen.',
              'Eine allzu starre Festlegung im Voraus könne die Neugier ersticken, von der Wissenschaft lebt.',
              'Das Ergebnis war ernüchternd: Nur in etwa einem Drittel bis der Hälfte der Fälle ließ sich der ursprüngliche Effekt erneut beobachten.',
              'Viel hängt davon ab, ob sich auch die Kriterien ändern, nach denen wissenschaftliche Leistung bewertet wird.',
              'Ein weiteres Problem ist statistischer Natur.',
              'Die betroffenen Forschenden wurden deshalb in den meisten Fällen von ihren Universitäten entlassen.',
              'Manche befürchteten, die Debatte könne Wissenschaftsskeptikern Argumente liefern.',
              'Auf diese Weise wird es erheblich schwerer, die Daten nachträglich so lange zu drehen, bis sie das gewünschte Ergebnis liefern.',
            ],
            items: [
              {
                kind: 'match',
                prompt: 'Lücke 1',
                answer: 3,
                explanationRu:
                  'После упоминания попытки повторить около ста исследований логично следует результат этой попытки («Das Ergebnis war ernüchternd»), который и породил понятие «Replikationskrise».',
              },
              {
                kind: 'match',
                prompt: 'Lücke 2',
                answer: 0,
                explanationRu:
                  'Предложение обобщает предыдущее: если исследования без эффекта «исчезают в ящике стола», картина исследований искажается («verzerrtes Bild»).',
              },
              {
                kind: 'match',
                prompt: 'Lücke 3',
                answer: 5,
                explanationRu:
                  '«Ein weiteres Problem ist statistischer Natur» вводит новую причину — слишком маленькие выборки, о которых говорится далее.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 4',
                answer: 8,
                explanationRu:
                  '«Auf diese Weise» относится к пререгистрации: если план анализа зафиксирован заранее, данные трудно «подгонять» задним числом.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 5',
                answer: 2,
                explanationRu:
                  'Критики предупреждают «не выплеснуть ребёнка вместе с водой»: слишком жёсткая предварительная фиксация может задушить любопытство; далее — аргумент в пользу исследовательского анализа.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 6',
                answer: 7,
                explanationRu:
                  'Опасение, что дебаты дадут аргументы скептикам, противопоставляется следующему предложению: «Bislang zeigen Umfragen jedoch …» — доверие не снизилось.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 7',
                answer: 4,
                explanationRu:
                  'Многое зависит от критериев оценки научной работы — это объясняется далее: пока карьера измеряется числом публикаций, стимул к сенсациям сохраняется.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 2 ─────────────────────────
      {
        teil: 2,
        minutes: 20,
        title: 'Schreiben mit der Hand – ein Auslaufmodell?',
        textType: 'Zeitungsartikel',
        texts: [
          {
            heading: 'Schreiben mit der Hand – ein Auslaufmodell?',
            body: `Als die Kultusministerien vor einigen Jahren begannen, Schulen flächendeckend mit Tablets auszustatten, schien das Schicksal des Füllers besiegelt. Wozu mühsam Schreibschrift üben, wenn Texte ohnehin am Bildschirm entstehen? Inzwischen jedoch mehren sich die Stimmen, die vor einem vorschnellen Abschied von der Handschrift warnen – und sie kommen keineswegs nur aus dem Lager der Kulturpessimisten.

Die Neuropsychologin Henrike Albers untersucht seit Jahren, was im Gehirn geschieht, während Kinder schreiben. „Beim Schreiben mit der Hand muss jeder Buchstabe aktiv geformt werden“, erklärt sie. „Das verlangt eine feine Abstimmung von Motorik, Wahrnehmung und Sprachverarbeitung, die beim Tippen weitgehend entfällt.“ In ihren Studien schnitten Grundschulkinder, die neue Buchstaben handschriftlich lernten, bei späteren Erkennungs- und Lesetests besser ab als Kinder, die dieselben Buchstaben auf der Tastatur übten. Albers betont allerdings, dass sich daraus keine pauschale Überlegenheit der Handschrift ableiten lasse: Der Vorteil zeige sich vor allem beim Erwerb der Schrift, weniger bei geübten Schreiberinnen und Schreibern.

Ähnlich differenziert fällt der Befund bei Erwachsenen aus. Mehrere Studien legen nahe, dass Studierende, die in Vorlesungen handschriftlich mitschreiben, Inhalte besser verstehen, weil sie gezwungen sind, das Gehörte zu verdichten und in eigene Worte zu fassen. Wer tippt, neigt dagegen dazu, möglichst wörtlich zu protokollieren. Andere Forschergruppen konnten diesen Effekt jedoch nur teilweise bestätigen. Er scheint weniger am Werkzeug selbst zu liegen als an der Art, wie es genutzt wird: Wer auch am Laptop bewusst zusammenfasst, statt mitzuschreiben, erzielt vergleichbare Ergebnisse.

In der Bildungspolitik sind solche Nuancen bislang kaum angekommen. Während einige Länder die verbundene Schreibschrift bereits aus den Lehrplänen gestrichen haben, fordern Lehrerverbände andernorts die Rückkehr zu verbindlichen Schönschreibstunden. Beides geht nach Ansicht von Fachleuten am Kern der Sache vorbei. „Es kommt nicht darauf an, ob Kinder eine bestimmte Schriftform beherrschen, sondern ob sie flüssig und leserlich schreiben können“, sagt der Grundschuldidaktiker Matthias Ronneburg. Eine Handschrift, die zu langsam oder zu mühsam sei, binde Aufmerksamkeit, die dann für das eigentliche Formulieren fehle.

Genau hier sehen Lehrkräfte ein wachsendes Problem. In einer Befragung gab gut die Hälfte der Grundschullehrkräfte an, die Handschrift ihrer Schülerinnen und Schüler habe sich in den vergangenen zehn Jahren verschlechtert. Als Gründe nannten sie neben der Digitalisierung auch fehlende Übungszeit und motorische Defizite, die bereits im Kindergartenalter erkennbar seien. Ob die Tablets daran tatsächlich schuld sind, lässt sich aus solchen Einschätzungen allerdings nicht ablesen.

Für Ronneburg liegt die Lösung daher nicht in einem Entweder-oder. Kinder sollten zunächst sicher mit der Hand schreiben lernen und später gezielt das Tippen üben, das – anders als oft angenommen – ebenfalls kein Selbstläufer sei. Viele Jugendliche, die souverän auf dem Smartphone wischen, beherrschten das Zehnfingersystem nicht und tippten entsprechend langsam. „Digitale Kompetenz“, so Ronneburg, „beginnt nicht beim Wischen, sondern bei soliden Grundfertigkeiten – analog wie digital.“`,
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
                question: 'Was erfährt man im ersten Absatz über die Warnungen vor dem Abschied von der Handschrift?',
                options: [
                  'Sie stammen überwiegend von Menschen, die grundsätzlich technikfeindlich sind.',
                  'Sie werden nicht nur von notorischen Kulturpessimisten vorgebracht.',
                  'Sie haben bereits zu einem Stopp der Tablet-Ausstattung geführt.',
                ],
                answer: 1,
                explanationRu:
                  '«… sie kommen keineswegs nur aus dem Lager der Kulturpessimisten» — предупреждения звучат не только от пессимистов.',
              },
              {
                kind: 'mc',
                question: 'Was zeigen die Studien von Henrike Albers?',
                options: [
                  'Die Handschrift ist dem Tippen in allen Altersgruppen überlegen.',
                  'Geübte Schreiber profitieren am stärksten vom Schreiben mit der Hand.',
                  'Handschriftliches Üben erleichtert Kindern das Erlernen von Buchstaben.',
                ],
                answer: 2,
                explanationRu:
                  'Дети, учившие буквы от руки, лучше справлялись с тестами; преимущество проявляется «vor allem beim Erwerb der Schrift», а не у опытных пишущих.',
              },
              {
                kind: 'mc',
                question: 'Worauf führen Forschende den Vorteil handschriftlicher Mitschriften bei Studierenden zurück?',
                options: [
                  'Auf die intensivere Verarbeitung des Gehörten beim Zusammenfassen.',
                  'Auf die geringere Ablenkung durch das Internet.',
                  'Auf die höhere Geschwindigkeit beim Schreiben.',
                ],
                answer: 0,
                explanationRu:
                  'Студенты вынуждены «das Gehörte zu verdichten und in eigene Worte zu fassen» — сжимать услышанное и формулировать своими словами.',
              },
              {
                kind: 'mc',
                question: 'Was lässt sich aus den teilweise widersprüchlichen Studienergebnissen schließen?',
                options: [
                  'Der Laptop ist für Mitschriften grundsätzlich ungeeignet.',
                  'Entscheidend ist eher die Arbeitsweise als das Schreibmedium.',
                  'Der Effekt der Handschrift wurde inzwischen vollständig widerlegt.',
                ],
                answer: 1,
                explanationRu:
                  'Эффект «weniger am Werkzeug selbst … als an der Art, wie es genutzt wird»: кто и на ноутбуке осознанно резюмирует, получает сопоставимые результаты.',
              },
              {
                kind: 'mc',
                question: 'Wie beurteilt Matthias Ronneburg die aktuelle bildungspolitische Debatte?',
                options: [
                  'Er unterstützt die Forderung nach verbindlichen Schönschreibstunden.',
                  'Er hält die Abschaffung der Schreibschrift für überfällig.',
                  'Er findet, dass beide Seiten das eigentliche Ziel verfehlen.',
                ],
                answer: 2,
                explanationRu:
                  '«Beides geht … am Kern der Sache vorbei»: важна не форма письма, а беглость и разборчивость.',
              },
              {
                kind: 'mc',
                question: 'Wie wird die Befragung der Lehrkräfte im Text bewertet?',
                options: [
                  'Sie belegt, dass Tablets die Handschrift verschlechtern.',
                  'Sie lässt keine eindeutigen Schlüsse über die Ursachen zu.',
                  'Sie widerspricht den Ergebnissen der Hirnforschung.',
                ],
                answer: 1,
                explanationRu:
                  '«Ob die Tablets daran tatsächlich schuld sind, lässt sich aus solchen Einschätzungen allerdings nicht ablesen» — о причинах опрос однозначно не говорит.',
              },
              {
                kind: 'mc',
                question: 'Was meint Ronneburg mit der Aussage, das Tippen sei „kein Selbstläufer“?',
                options: [
                  'Auch das Tippen muss gezielt gelernt werden.',
                  'Tippen ist für Kinder schädlicher als Wischen.',
                  'Tippen sollte bereits im Kindergarten geübt werden.',
                ],
                answer: 0,
                explanationRu:
                  '«kein Selbstläufer» = само собой не получается: многие подростки не владеют слепым десятипальцевым методом, поэтому печатать нужно учить целенаправленно.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 3 ─────────────────────────
      {
        teil: 3,
        minutes: 15,
        title: 'Ferienwohnungen in der Stadt – begrenzen oder nicht?',
        textType: 'Meinungsäußerungen',
        texts: [
          {
            label: 'Katrin Weller, Stadträtin',
            body: `In unserem Viertel sind in den letzten fünf Jahren über zweihundert Wohnungen vom regulären Mietmarkt verschwunden, weil sie sich als Ferienunterkunft weitaus lukrativer vermieten lassen. Das ist keine Randerscheinung mehr, sondern verschärft eine ohnehin angespannte Lage. Ich halte deshalb eine Genehmigungspflicht mit einer klaren Obergrenze von sechzig Tagen pro Jahr für unverzichtbar. Wer gelegentlich die eigene Wohnung untervermietet, während er verreist ist, soll das weiterhin tun dürfen. Wer dagegen ganze Häuser aufkauft, um sie dauerhaft an Touristen zu vermieten, betreibt de facto ein Hotel und sollte sich auch an die entsprechenden Auflagen halten müssen. Mit Verboten allein ist es allerdings nicht getan: Ohne ausreichend Personal in der Verwaltung bleibt jede Regel ein zahnloser Tiger.`,
          },
          {
            label: 'Jonas Brückner, privater Vermieter',
            body: `Ich vermiete seit Jahren eine kleine Einliegerwohnung an Gäste, und ohne diese Einnahmen könnte ich das Haus meiner Eltern kaum halten. Natürlich verstehe ich den Ärger über Investoren, die ganze Straßenzüge in Ferienapartments verwandeln. Aber die Politik macht es sich zu leicht, wenn sie private Gastgeber pauschal zu Sündenböcken erklärt. Die Wohnungsnot ist über Jahrzehnte entstanden, weil zu wenig gebaut wurde – daran ändern ein paar hundert Ferienwohnungen wenig. Zudem bringen unsere Gäste Geld in Stadtteile, in die sich Hotelgäste nie verirren würden: Bäckereien, kleine Cafés und Läden profitieren unmittelbar davon. Eine Registrierungspflicht fände ich vertretbar, eine starre Tagesgrenze dagegen nicht.`,
          },
          {
            label: 'Dr. Selin Aydın, Stadtsoziologin',
            body: `Die Debatte wird oft so geführt, als ginge es nur um Mietpreise. Mindestens ebenso wichtig ist jedoch, was mit der Nachbarschaft geschieht. Wo immer mehr Wohnungen im Wochentakt neue Bewohner bekommen, löst sich das soziale Gefüge allmählich auf: Niemand kennt mehr die Menschen im Treppenhaus, niemand fühlt sich für den Innenhof verantwortlich. Unsere Untersuchungen zeigen, dass dieser Effekt bereits ab einem vergleichsweise geringen Anteil an Ferienwohnungen spürbar wird. Ob eine Obergrenze von sechzig oder neunzig Tagen gilt, ist aus meiner Sicht zweitrangig. Wichtiger wäre, die Regeln je nach Stadtteil unterschiedlich zu gestalten, denn ein Altstadtviertel steht unter ganz anderem Druck als eine Randlage.`,
          },
          {
            label: 'Felix Hartung, Tourismusverband',
            body: `Ferienwohnungen sind längst ein fester Bestandteil des Angebots, und gerade Familien und Geschäftsreisende, die länger bleiben, fragen sie gezielt nach. Ein weitgehendes Verbot würde diese Gäste nicht in Hotels lenken, sondern in die Nachbarstädte. Gleichwohl sehe ich, dass der Wildwuchs der letzten Jahre der gesamten Branche schadet. Wenn Anwohner Touristen nur noch als Belastung wahrnehmen, leidet am Ende auch das Image der Stadt als Reiseziel. Deshalb plädieren wir für eine verpflichtende Registrierungsnummer, die auf jeder Buchungsplattform angezeigt werden muss. So ließe sich endlich verlässlich erfassen, wie viele Unterkünfte es überhaupt gibt – eine Zahl, über die derzeit nur spekuliert wird.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Meinungsäußerungen. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
            instructionRu:
              'Прочитайте высказывания. Какое утверждение относится к какому человеку? Одного и того же человека можно выбирать несколько раз.',
            options: ['Katrin Weller', 'Jonas Brückner', 'Selin Aydın', 'Felix Hartung'],
            items: [
              {
                kind: 'match',
                prompt: 'Regeln bleiben wirkungslos, wenn niemand ihre Einhaltung überprüfen kann.',
                answer: 0,
                explanationRu:
                  'Веллер: «Ohne ausreichend Personal in der Verwaltung bleibt jede Regel ein zahnloser Tiger».',
              },
              {
                kind: 'match',
                prompt: 'Bislang fehlt es an verlässlichen Zahlen über das Angebot.',
                answer: 3,
                explanationRu:
                  'Хартунг: число жилья для туристов пока неизвестно — «eine Zahl, über die derzeit nur spekuliert wird».',
              },
              {
                kind: 'match',
                prompt: 'Kleine Geschäfte im Viertel ziehen einen direkten Nutzen aus den Gästen.',
                answer: 1,
                explanationRu:
                  'Брюкнер: «Bäckereien, kleine Cafés und Läden profitieren unmittelbar davon».',
              },
              {
                kind: 'match',
                prompt: 'Die Regeln sollten an die Lage des jeweiligen Stadtteils angepasst werden.',
                answer: 2,
                explanationRu:
                  'Айдын: «die Regeln je nach Stadtteil unterschiedlich zu gestalten».',
              },
              {
                kind: 'match',
                prompt: 'Die Hauptursache der Wohnungsnot liegt in jahrzehntelang versäumtem Wohnungsbau.',
                answer: 1,
                explanationRu:
                  'Брюкнер: «Die Wohnungsnot ist über Jahrzehnte entstanden, weil zu wenig gebaut wurde».',
              },
              {
                kind: 'match',
                prompt: 'Strenge Verbote würden Besucher in andere Orte abwandern lassen.',
                answer: 3,
                explanationRu:
                  'Хартунг: запрет направил бы гостей «nicht in Hotels …, sondern in die Nachbarstädte».',
              },
              {
                kind: 'match',
                prompt: 'Gewerbliche Anbieter von Ferienwohnungen sollten dieselben Auflagen erfüllen wie Hotels.',
                answer: 0,
                explanationRu:
                  'Веллер: кто скупает целые дома, «betreibt de facto ein Hotel und sollte sich auch an die entsprechenden Auflagen halten müssen».',
              },
              {
                kind: 'match',
                prompt: 'Die genaue Höhe einer Tagesgrenze ist nebensächlich.',
                answer: 2,
                explanationRu:
                  'Айдын: «Ob eine Obergrenze von sechzig oder neunzig Tagen gilt, ist aus meiner Sicht zweitrangig».',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 4 ─────────────────────────
      {
        teil: 4,
        minutes: 15,
        title: 'Weniger ist mehr – auch in den Nachrichten',
        textType: 'Kommentar',
        texts: [
          {
            heading: 'Weniger ist mehr – auch in den Nachrichten',
            body: `Es gibt ein Ritual, das viele von uns täglich vollziehen, ohne darüber nachzudenken: Kaum ist das Smartphone entsperrt, wandert der Daumen zur Nachrichten-App. Eilmeldung hier, Liveticker dort, dazwischen eine Push-Nachricht über ein Ereignis, das sich drei Stunden später als halb so dramatisch herausstellen wird. Man fühlt sich informiert. Ob man es auch ist, steht auf einem anderen Blatt.

Ich will nicht in den Chor derer einstimmen, die das Ende des Journalismus beklagen, sobald eine Redaktion einen Liveblog startet. Schnelligkeit hat ihren Wert, etwa wenn Menschen vor einem Unwetter gewarnt werden müssen. Doch in weiten Teilen der Berichterstattung ist Tempo zum Selbstzweck geworden. Wer als Erster meldet, gewinnt Klicks; wer zwei Stunden später, dafür aber geprüft und eingeordnet berichtet, hat im Wettbewerb um Aufmerksamkeit bereits verloren. Dass dabei Fehler entstehen, die später stillschweigend korrigiert werden, nimmt man offenbar in Kauf.

Seit einigen Jahren formiert sich eine Gegenbewegung, die unter dem Schlagwort „Slow Journalism“ firmiert. Ihre Vertreterinnen und Vertreter verzichten bewusst auf Eilmeldungen und veröffentlichen stattdessen wenige, gründlich recherchierte Stücke, die ein Thema von mehreren Seiten beleuchten. Manche dieser Projekte erscheinen nur vierteljährlich. Man mag das für einen Luxus halten, den sich nur ein kleines, gebildetes und zahlungskräftiges Publikum leisten kann – und dieser Einwand ist nicht ganz von der Hand zu weisen. Gleichwohl wäre es kurzsichtig, die Idee deshalb als elitäre Spielerei abzutun.

Denn die eigentliche Frage lautet nicht, ob wir schnelle oder langsame Nachrichten brauchen, sondern wie wir mit unserer begrenzten Aufmerksamkeit umgehen. Wer zwanzigmal am Tag Schlagzeilen überfliegt, weiß am Abend über vieles ein wenig und über nichts wirklich Bescheid. Studien deuten zudem darauf hin, dass ständiger Nachrichtenkonsum eher Gefühle der Ohnmacht und Gereiztheit verstärkt als das Verständnis der Welt. Das ist kein Argument gegen Information, wohl aber eines gegen ihre pausenlose Dosierung.

Die Verantwortung dafür allein den Leserinnen und Lesern zuzuschieben, wäre allerdings zu bequem. Solange Redaktionen nach Reichweite bezahlt und bewertet werden, wird sich wenig ändern. Es bräuchte Finanzierungsmodelle, die Sorgfalt belohnen statt Geschwindigkeit – etwa Abonnements, bei denen nicht die Zahl der Klicks, sondern die Treue des Publikums zählt.

Ich selbst habe vor einem halben Jahr alle Push-Benachrichtigungen abgeschaltet. Verpasst habe ich, soweit ich das beurteilen kann, nichts Wesentliches. Gewonnen habe ich dafür etwas, das im Nachrichtengeschäft erstaunlich selten geworden ist: die Zeit, über eine Meldung nachzudenken, bevor die nächste sie verdrängt.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Kommentar. Entsprechen die Aussagen der Meinung der Autorin? Wählen Sie richtig oder falsch.',
            instructionRu:
              'Прочитайте комментарий. Соответствуют ли утверждения мнению автора? Выберите «верно» или «неверно».',
            items: [
              {
                kind: 'tf',
                statement: 'Die Autorin hält schnelle Berichterstattung grundsätzlich für überflüssig.',
                answer: false,
                explanationRu:
                  '«Schnelligkeit hat ihren Wert, etwa wenn Menschen vor einem Unwetter gewarnt werden müssen» — она не отвергает скорость полностью.',
              },
              {
                kind: 'tf',
                statement: 'Sie kritisiert, dass Redaktionen Fehler zugunsten der Geschwindigkeit in Kauf nehmen.',
                answer: true,
                explanationRu:
                  '«Dass dabei Fehler entstehen, die später stillschweigend korrigiert werden, nimmt man offenbar in Kauf» — явная критика.',
              },
              {
                kind: 'tf',
                statement: 'Sie räumt ein, dass „Slow Journalism“ womöglich vor allem ein privilegiertes Publikum erreicht.',
                answer: true,
                explanationRu:
                  'Возражение об элитарности «nicht ganz von der Hand zu weisen» — то есть она частично признаёт его справедливость.',
              },
              {
                kind: 'tf',
                statement: 'Wer ständig Schlagzeilen liest, erwirbt nach ihrer Ansicht eher oberflächliches Wissen.',
                answer: true,
                explanationRu:
                  '«… weiß am Abend über vieles ein wenig und über nichts wirklich Bescheid».',
              },
              {
                kind: 'tf',
                statement: 'In erster Linie sind die Leserinnen und Leser gefordert, ihr Verhalten zu ändern.',
                answer: false,
                explanationRu:
                  '«Die Verantwortung dafür allein den Leserinnen und Lesern zuzuschieben, wäre allerdings zu bequem» — ответственность лежит и на редакциях.',
              },
              {
                kind: 'tf',
                statement: 'Sie spricht sich für Finanzierungsmodelle aus, die gründliche Arbeit honorieren.',
                answer: true,
                explanationRu:
                  '«Es bräuchte Finanzierungsmodelle, die Sorgfalt belohnen statt Geschwindigkeit».',
              },
              {
                kind: 'tf',
                statement: 'Seit sie keine Push-Nachrichten mehr erhält, fühlt sie sich schlechter informiert.',
                answer: false,
                explanationRu:
                  '«Verpasst habe ich … nichts Wesentliches» — наоборот, она выиграла время для размышлений.',
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
          'Sie hören vier kurze Aussagen zum Thema „Ehrenamt“. Sie hören jede Aussage zweimal. Lösen Sie zu jeder Aussage zwei Aufgaben.',
        instructionRu:
          'Вы услышите четыре коротких высказывания на тему «волонтёрство». Каждое звучит дважды. К каждому высказыванию решите два задания.',
        segments: [
          {
            title: 'Aussage 1',
            kind: 'monolog',
            situation: 'Sie hören Martina, 58, die ehrenamtlich in einem Hospiz arbeitet.',
            playCount: 2,
            text: `Ich begleite seit sieben Jahren ehrenamtlich Menschen in ihrer letzten Lebensphase. Viele in meinem Bekanntenkreis fragen, wie ich das aushalte. Ehrlich gesagt hatte ich anfangs selbst Zweifel, ob ich der Aufgabe gewachsen bin. Was mir geholfen hat, war die gründliche Vorbereitung: Ein halbes Jahr lang haben wir uns in einem Kurs mit Fragen zu Trauer, Kommunikation und auch zu unseren eigenen Grenzen beschäftigt. Heute würde ich sagen, dass ich mehr zurückbekomme, als ich gebe. Man lernt, das Wesentliche vom Unwesentlichen zu unterscheiden – und das hat auch meinen Alltag verändert.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Martina war sich von Anfang an sicher, dass sie die Aufgabe bewältigen würde.',
                    answer: false,
                    explanationRu: '«… hatte ich anfangs selbst Zweifel, ob ich der Aufgabe gewachsen bin».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was hat Martina besonders geholfen?',
                    options: [
                      'Gespräche mit ihrer Familie.',
                      'Der Austausch mit Angehörigen der Sterbenden.',
                      'Eine längere Qualifizierung vor ihrem Einsatz.',
                    ],
                    answer: 2,
                    explanationRu: '«Was mir geholfen hat, war die gründliche Vorbereitung: Ein halbes Jahr lang … in einem Kurs».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 2',
            kind: 'monolog',
            situation: 'Sie hören Herrn Okafor, 34, der eine Jugendfußballmannschaft trainiert.',
            playCount: 2,
            text: `Ich trainiere zweimal die Woche eine Jugendmannschaft in unserem Verein. Was mich zunehmend frustriert, ist weniger der Zeitaufwand als die Bürokratie. Für jedes Turnier müssen Formulare ausgefüllt, Fahrgemeinschaften organisiert und Versicherungsfragen geklärt werden. Früher hat das ein Vorstandsmitglied übernommen, aber seit der in Rente gegangen und weggezogen ist, findet sich niemand mehr dafür. Wenn das so weitergeht, frage ich mich schon, wie lange ich das noch mache. Dabei sind die Jungs großartig, und für einige von ihnen ist der Verein wirklich der wichtigste Halt in ihrem Leben.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Herrn Okafor stört vor allem die Zahl der Trainingsstunden.',
                    answer: false,
                    explanationRu: '«… weniger der Zeitaufwand als die Bürokratie» — его раздражает бюрократия.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie sieht Herr Okafor seine Zukunft im Verein?',
                    options: [
                      'Er will das Traineramt im nächsten Jahr abgeben.',
                      'Er ist unsicher, ob er sich auf Dauer weiter engagieren wird.',
                      'Er möchte selbst in den Vorstand wechseln.',
                    ],
                    answer: 1,
                    explanationRu: '«… frage ich mich schon, wie lange ich das noch mache» — он сомневается, но решения не принял.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 3',
            kind: 'monolog',
            situation: 'Sie hören Lea, 22, Studentin, die online Nachhilfe gibt.',
            playCount: 2,
            text: `Ehrenamt, das klang für mich lange nach Vereinsheim und festen Terminen – und genau das passt mit meinem Studium überhaupt nicht zusammen. Vor einem Jahr bin ich dann auf eine Plattform gestoßen, über die Studierende Schülerinnen und Schülern aus finanzschwachen Familien kostenlos Nachhilfe geben, und zwar per Video. Ich kann selbst entscheiden, wann und wie oft ich Stunden anbiete. Natürlich ist der Kontakt nicht derselbe wie im Klassenzimmer, man sieht eben nur einen Ausschnitt auf dem Bildschirm. Aber wenn mir eine Schülerin schreibt, dass sie ihre Mathearbeit bestanden hat, ist das mindestens genauso viel wert.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Lea schätzt an ihrem Engagement vor allem die zeitliche Flexibilität.',
                    answer: true,
                    explanationRu: '«Ich kann selbst entscheiden, wann und wie oft ich Stunden anbiete» — в отличие от фиксированных встреч в клубе.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie beurteilt Lea den Kontakt über Video?',
                    options: [
                      'Er hat Grenzen, ist aber dennoch lohnend.',
                      'Er ersetzt den persönlichen Kontakt vollständig.',
                      'Er ist für Nachhilfe eigentlich ungeeignet.',
                    ],
                    answer: 0,
                    explanationRu: '«Natürlich ist der Kontakt nicht derselbe … Aber … ist das mindestens genauso viel wert».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 4',
            kind: 'monolog',
            situation: 'Sie hören Dr. Bernd Fiedler, Engagementforscher, in einer Radiosendung.',
            playCount: 2,
            text: `Die Zahl der Menschen, die sich freiwillig engagieren, ist in Deutschland seit Jahren erstaunlich stabil. Was sich verändert hat, ist die Form. Immer weniger Menschen sind bereit, über Jahrzehnte ein Amt im Verein zu übernehmen; stattdessen engagieren sie sich projektbezogen und zeitlich begrenzt. Für traditionelle Organisationen ist das eine große Herausforderung, denn sie sind auf Menschen angewiesen, die Verantwortung für die Strukturen übernehmen. Wer hier allerdings nur über mangelnden Gemeinsinn klagt, verkennt, dass sich die Lebensumstände grundlegend gewandelt haben – Stichwort berufliche Mobilität.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Dr. Fiedler zufolge hat sich vor allem die Art des Engagements verändert.',
                    answer: true,
                    explanationRu: 'Число волонтёров стабильно, «Was sich verändert hat, ist die Form».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was kritisiert Dr. Fiedler?',
                    options: [
                      'Dass Vereine sich zu wenig modernisieren.',
                      'Dass manche den Wandel vorschnell als Egoismus deuten.',
                      'Dass Arbeitgeber ihre Beschäftigten nicht freistellen.',
                    ],
                    answer: 1,
                    explanationRu: 'Кто жалуется лишь на «mangelnden Gemeinsinn» (недостаток общественного духа), не видит изменившихся условий жизни.',
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
          'Sie hören ein Interview mit einer Schlafforscherin. Sie hören das Interview einmal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите интервью с исследовательницей сна. Интервью звучит один раз. Выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Interview: Wie viel Schlaf braucht die Gesellschaft?',
            kind: 'dialog',
            speakers: { A: 'Moderator', B: 'Prof. Dr. Nora Kessler, Schlafforscherin' },
            situation: 'Sie hören ein Interview im Radio.',
            playCount: 1,
            text: `A: Frau Professor Kessler, man hört immer wieder, wir lebten in einer übermüdeten Gesellschaft. Ist das eine Übertreibung?
B: Teils, teils. Wenn man die durchschnittliche Schlafdauer betrachtet, hat sie sich in den letzten Jahrzehnten weniger dramatisch verändert, als oft behauptet wird. Was zugenommen hat, ist die Zahl der Menschen, die ihren Schlaf als nicht erholsam empfinden. Und das ist eigentlich der aussagekräftigere Wert.
A: Woran liegt das?
B: Da gibt es nicht die eine Ursache. Ein wichtiger Faktor ist, dass viele Menschen gegen ihre innere Uhr leben müssen. Wir unterscheiden ja sogenannte Chronotypen – vereinfacht gesagt Lerchen, die früh müde und früh wach sind, und Eulen, bei denen es umgekehrt ist. Unsere Arbeits- und Schulzeiten sind aber weitgehend auf Lerchen zugeschnitten. Eulen leben dadurch gewissermaßen in einem permanenten Jetlag.
A: Gerade bei Jugendlichen wird ja seit Langem ein späterer Schulbeginn diskutiert.
B: Ja, und hier ist die Datenlage recht eindeutig. In der Pubertät verschiebt sich der Schlafrhythmus biologisch nach hinten. Ein Teenager, der um acht Uhr eine Mathearbeit schreibt, befindet sich physiologisch gesehen mitten in seiner Nacht. Schulen, die den Unterricht eine Stunde später beginnen lassen, berichten von weniger Fehlzeiten und einer besseren Stimmung im Unterricht. Bei den Noten sind die Effekte kleiner, aber durchaus messbar.
A: Warum setzt sich das dann nicht flächendeckend durch?
B: Weil Schule eben nicht im luftleeren Raum stattfindet. Busfahrpläne, Arbeitszeiten der Eltern, Nachmittagsangebote der Vereine – das hängt alles zusammen. Ein späterer Schulbeginn ist deshalb weniger eine pädagogische als eine organisatorische Frage. Und Organisation ist bekanntlich zäh.
A: Ein anderes Stichwort: Smartphones im Schlafzimmer. Wie schädlich ist das blaue Licht der Bildschirme wirklich?
B: Da muss ich ein wenig Wasser in den Wein gießen. Das blaue Licht wird in der öffentlichen Diskussion stark überschätzt. Ja, es kann die Ausschüttung des Schlafhormons Melatonin etwas verzögern, aber der Effekt ist bei normaler Bildschirmhelligkeit gering. Viel problematischer ist der Inhalt: Wer kurz vor dem Einschlafen noch berufliche E-Mails liest oder sich in eine hitzige Diskussion in sozialen Netzwerken verstrickt, ist schlicht zu aufgewühlt, um abzuschalten.
A: Was raten Sie Menschen, die schlecht schlafen?
B: Zunächst einmal: nicht in Panik verfallen. Eine schlechte Nacht ist kein Grund zur Sorge, und gerade die Angst vor dem Nichteinschlafen hält viele Menschen wach. Hilfreich sind regelmäßige Aufstehzeiten, auch am Wochenende, und ausreichend Tageslicht am Vormittag. Von Schlaftrackern, die jede Nacht mit einer Note bewerten, rate ich Menschen mit Schlafproblemen eher ab – die ständige Selbstbeobachtung verstärkt oft genau den Druck, den sie loswerden wollen.
A: Frau Professor Kessler, vielen Dank für das Gespräch.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was ist laut Prof. Kessler der aussagekräftigste Hinweis auf Schlafprobleme in der Gesellschaft?',
                    options: [
                      'Die stark gesunkene durchschnittliche Schlafdauer.',
                      'Der Anteil der Menschen, die sich nach dem Schlaf nicht erholt fühlen.',
                      'Die Zahl der verschriebenen Schlafmittel.',
                    ],
                    answer: 1,
                    explanationRu: 'Выросло число людей, у которых сон «nicht erholsam», — «das ist eigentlich der aussagekräftigere Wert». Продолжительность сна изменилась не так сильно.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt sie über die sogenannten Eulen?',
                    options: [
                      'Sie brauchen insgesamt mehr Schlaf als Lerchen.',
                      'Sie leiden häufiger unter Jetlag, weil sie viel reisen.',
                      'Ihr Rhythmus passt schlecht zu den üblichen Arbeits- und Schulzeiten.',
                    ],
                    answer: 2,
                    explanationRu: 'Время работы и учёбы «auf Lerchen zugeschnitten», поэтому «совы» живут как в постоянном джетлаге (в переносном смысле).',
                  },
                  {
                    kind: 'mc',
                    question: 'Welche Erfahrungen haben Schulen mit einem späteren Unterrichtsbeginn gemacht?',
                    options: [
                      'Die Noten haben sich deutlich verbessert.',
                      'Die Schüler fehlen seltener und die Stimmung ist besser.',
                      'Die Schüler gehen abends früher schlafen.',
                    ],
                    answer: 1,
                    explanationRu: '«… weniger Fehlzeiten und einer besseren Stimmung»; влияние на оценки — «kleiner».',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum wird ein späterer Schulbeginn selten umgesetzt?',
                    options: [
                      'Weil viele andere Abläufe davon abhängen.',
                      'Weil Lehrkräfte ihn mehrheitlich ablehnen.',
                      'Weil die Forschungslage noch unklar ist.',
                    ],
                    answer: 0,
                    explanationRu: 'Расписание автобусов, работа родителей, секции — «das hängt alles zusammen», это вопрос организации.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie beurteilt Prof. Kessler die Rolle des blauen Bildschirmlichts?',
                    options: [
                      'Sie hält es für die Hauptursache von Einschlafproblemen.',
                      'Sie hält die Inhalte am Bildschirm für problematischer als das Licht.',
                      'Sie empfiehlt spezielle Filter für alle Geräte.',
                    ],
                    answer: 1,
                    explanationRu: 'Синий свет «stark überschätzt»; «Viel problematischer ist der Inhalt» — рабочие письма, споры в соцсетях.',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum rät sie Menschen mit Schlafproblemen von Schlaftrackern ab?',
                    options: [
                      'Weil die Geräte zu ungenau messen.',
                      'Weil das Tragen der Geräte den Schlaf stört.',
                      'Weil die ständige Kontrolle den Druck noch erhöhen kann.',
                    ],
                    answer: 2,
                    explanationRu: '«… die ständige Selbstbeobachtung verstärkt oft genau den Druck, den sie loswerden wollen».',
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
            title: 'Streitfrage: Künstliche Intelligenz im Klassenzimmer',
            kind: 'discussion',
            speakers: {
              A: 'Moderatorin Frau Reimann',
              B: 'Thomas Lindner, Schulleiter eines Gymnasiums',
              C: 'Prof. Yasemin Arslan, Medienpädagogin',
            },
            situation: 'Sie hören eine Diskussion in der Radiosendung „Streitfrage“.',
            playCount: 1,
            text: `A: Herzlich willkommen zu unserer Sendung „Streitfrage“. Seit Programme mit künstlicher Intelligenz auf Knopfdruck Aufsätze, Referate und sogar Gedichte verfassen, stehen Schulen vor einer grundsätzlichen Frage: Sollen sie diese Werkzeuge verbieten oder in den Unterricht integrieren? Darüber spreche ich mit Thomas Lindner, Schulleiter eines Gymnasiums, und mit Yasemin Arslan, Professorin für Medienpädagogik. Herr Lindner, Sie haben an Ihrer Schule zunächst ein Verbot ausgesprochen. Warum?
B: Ganz einfach, weil wir überrumpelt wurden. Innerhalb weniger Wochen bekamen Kolleginnen und Kollegen Hausaufgaben, die sprachlich makellos, inhaltlich aber merkwürdig austauschbar waren. Wir hatten weder Regeln noch Erfahrung. Das Verbot war also eher eine Notbremse als eine pädagogische Überzeugung. Inzwischen haben wir es auch gelockert.
C: Und das halte ich für richtig. Verbote lassen sich ohnehin kaum durchsetzen – die Programme sind auf jedem Smartphone verfügbar. Die Frage ist doch, was Schülerinnen und Schüler in einer Welt können müssen, in der solche Werkzeuge selbstverständlich sind. Dazu gehört, ihre Ergebnisse kritisch zu prüfen, Fehler zu erkennen und zu verstehen, wie sie überhaupt zustande kommen.
A: Frau Arslan, heißt das, klassische Hausaufgaben haben ausgedient?
C: Zumindest der klassische Aufsatz, der zu Hause geschrieben und dann benotet wird, hat als Leistungsnachweis seine Aussagekraft weitgehend verloren. Man kann schlicht nicht mehr feststellen, wer ihn geschrieben hat. Ich plädiere deshalb dafür, den Schreibprozess stärker sichtbar zu machen: Entwürfe, Gespräche über Zwischenstände, mündliche Verteidigungen der eigenen Argumentation.
B: Da muss ich einhaken. Das klingt in der Theorie wunderbar, aber haben Sie einmal ausgerechnet, wie viel Zeit das kostet? Eine Deutschlehrerin mit vier Klassen à dreißig Schülern kann nicht mit jedem Einzelnen über seine Entwürfe sprechen. Solche Konzepte scheitern an der Realität unserer Personalausstattung.
C: Das bestreite ich gar nicht. Aber daraus folgt doch nicht, dass man alles beim Alten lässt, sondern dass man über Prioritäten reden muss. Vielleicht braucht es weniger, dafür aber intensiver begleitete Schreibaufgaben.
A: Herr Lindner, wie sieht es mit der Gerechtigkeit aus? Nicht alle Familien können sich die kostenpflichtigen Versionen solcher Programme leisten.
B: Das ist in der Tat ein Punkt, der mir Sorgen macht. Wir beobachten schon jetzt, dass Kinder aus bildungsnahen Elternhäusern die Werkzeuge geschickter einsetzen – nicht, weil sie bessere Geräte haben, sondern weil zu Hause jemand mit ihnen darüber spricht, was eine gute Frage an die Maschine ist. Wenn die Schule das nicht auffängt, öffnet sich die Schere weiter.
C: Da sind wir uns völlig einig. Genau deshalb darf die Schule das Thema nicht ausklammern. Ein Verbot im Unterricht bedeutet ja nicht, dass die Programme zu Hause nicht genutzt werden – es bedeutet nur, dass niemand anleitet.
A: Zum Schluss: Wird künstliche Intelligenz die Lehrkraft eines Tages ersetzen?
B: Nein, und ich finde die Frage ehrlich gesagt etwas schief gestellt. Lernen ist ein sozialer Vorgang. Eine Maschine kann erklären, aber sie kann nicht ermutigen, nicht trösten und keine Klassengemeinschaft zusammenhalten.
C: Ich wäre da etwas vorsichtiger mit absoluten Aussagen. Bestimmte Aufgaben, etwa individuelles Üben mit sofortiger Rückmeldung, werden Programme sehr gut übernehmen. Die Rolle der Lehrkraft wird sich verändern – ob man das „ersetzen“ nennt, ist eine Definitionsfrage.
A: Vielen Dank Ihnen beiden.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen der Moderatorin oder einem der Gäste zu.',
                instructionRu: 'Кто что говорит? Отнесите высказывания к ведущей или к одному из гостей.',
                options: ['Moderatorin Frau Reimann', 'Thomas Lindner', 'Yasemin Arslan'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Das ursprüngliche Verbot war eine Reaktion auf eine Situation, auf die man nicht vorbereitet war.',
                    answer: 1,
                    explanationRu: 'Линднер: «weil wir überrumpelt wurden … eher eine Notbremse als eine pädagogische Überzeugung».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Zu Hause verfasste Texte eignen sich kaum noch zur Leistungsbewertung.',
                    answer: 2,
                    explanationRu: 'Арслан: домашнее сочинение «hat als Leistungsnachweis seine Aussagekraft weitgehend verloren».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Aufwendige Betreuungskonzepte sind mit dem vorhandenen Personal nicht umsetzbar.',
                    answer: 1,
                    explanationRu: 'Линднер: «Solche Konzepte scheitern an der Realität unserer Personalausstattung».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Man könnte weniger Schreibaufgaben stellen, diese aber intensiver begleiten.',
                    answer: 2,
                    explanationRu: 'Арслан: «Vielleicht braucht es weniger, dafür aber intensiver begleitete Schreibaufgaben».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Nicht jede Familie kann sich kostenpflichtige Programmversionen leisten.',
                    answer: 0,
                    explanationRu: 'Этот аспект поднимает ведущая в вопросе о справедливости.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Wie geschickt Kinder mit KI umgehen, hängt stark von der Unterstützung im Elternhaus ab.',
                    answer: 1,
                    explanationRu: 'Линднер: дети из образованных семей используют инструменты лучше, «weil zu Hause jemand mit ihnen darüber spricht».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Ein Verbot verhindert nicht die Nutzung, sondern nur die Anleitung.',
                    answer: 2,
                    explanationRu: 'Арслан: запрет в школе «bedeutet nur, dass niemand anleitet».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Maschinen können Schülerinnen und Schüler emotional nicht unterstützen.',
                    answer: 1,
                    explanationRu: 'Линднер: машина «kann nicht ermutigen, nicht trösten».',
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
          'Sie hören einen Vortrag. Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите доклад. Он звучит дважды. Выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Verfällt die deutsche Sprache?',
            kind: 'monolog',
            situation:
              'Sie hören einen Vortrag der Sprachwissenschaftlerin Prof. Dr. Ulrike Hahn im Rahmen einer öffentlichen Vortragsreihe.',
            playCount: 2,
            text: `Meine sehr geehrten Damen und Herren, kaum ein Thema erregt in Leserbriefen und Kommentarspalten so zuverlässig die Gemüter wie die Frage, ob die deutsche Sprache verfällt. Die Klagen sind bekannt: zu viele Anglizismen, eine verarmte Jugendsprache, der angebliche Tod des Genitivs. In meinem heutigen Vortrag möchte ich diese Sorgen nicht einfach abtun, sie aber in einen größeren Zusammenhang stellen.

Beginnen wir mit einer historischen Beobachtung. Die Klage über den Sprachverfall ist mindestens so alt wie die schriftliche Überlieferung selbst. Im siebzehnten Jahrhundert beklagten gelehrte Gesellschaften die Flut französischer Wörter, die damals als vornehm galten. Viele dieser Wörter – denken Sie an „Etage“, „Friseur“ oder „Portemonnaie“ – empfinden wir heute als ganz selbstverständlich. Die Sprache hat sie aufgenommen, angepasst und, wenn man so will, verdaut. Ich vermute, dass es vielen heutigen Anglizismen ähnlich ergehen wird, während andere nach einigen Jahren wieder verschwinden.

Zweitens: Sprachwandel ist kein Unfall, sondern der Normalzustand. Eine Sprache, die sich nicht mehr verändert, wird in der Regel nicht mehr gesprochen. Dass Formen wie „wegen dem Regen“ statt „wegen des Regens“ zunehmen, ist sprachwissenschaftlich betrachtet kein Zeichen von Nachlässigkeit, sondern folgt einer Tendenz, die sich im Deutschen seit Jahrhunderten beobachten lässt: Der Genitiv wird in vielen Kontexten durch den Dativ oder durch Präpositionalkonstruktionen ersetzt. Ob man das stilistisch bedauert, ist eine andere Frage – und eine durchaus berechtigte.

Damit komme ich zu einem Punkt, der mir besonders wichtig ist. Die Sprachwissenschaft beschreibt, wie Menschen sprechen; sie schreibt nicht vor, wie sie sprechen sollen. Das bedeutet aber nicht, dass Normen überflüssig wären. In Schule, Verwaltung und Rechtsprechung brauchen wir eine verbindliche Standardsprache, auf die sich alle verlassen können. Problematisch wird es erst, wenn diese Norm als einzig richtige Form des Deutschen gilt und alles, was davon abweicht, als falsch oder minderwertig abgewertet wird.

Ein gutes Beispiel ist die Jugendsprache. Untersuchungen zeigen, dass Jugendliche keineswegs nur ihren eigenen Jargon beherrschen. Die meisten wechseln mühelos zwischen dem Ton auf dem Schulhof, der Sprache im Klassenzimmer und dem Gespräch mit den Großeltern. Diese Fähigkeit, je nach Situation das passende Register zu wählen, ist eine anspruchsvolle sprachliche Leistung – sie wird nur selten als solche gewürdigt.

Was die Anglizismen betrifft, möchte ich zum Schluss eine Unterscheidung vorschlagen. Es gibt Entlehnungen, die eine Lücke füllen, weil es für eine neue Sache schlicht noch kein deutsches Wort gibt. Und es gibt solche, die vor allem aus Imagegründen verwendet werden – etwa, wenn ein Unternehmen seinen Kundendienst plötzlich „Customer Care Center“ nennt. Letztere halte ich durchaus für kritikwürdig, allerdings weniger aus sprachpflegerischen Gründen als deshalb, weil sie Menschen ausschließen, die des Englischen nicht mächtig sind. Hier geht es also nicht um die Reinheit der Sprache, sondern um Verständlichkeit – und damit letztlich um Teilhabe.

Ich danke Ihnen für Ihre Aufmerksamkeit und freue mich auf Ihre Fragen.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Welches Ziel verfolgt die Referentin mit ihrem Vortrag?',
                    options: [
                      'Sie will die Sorgen um die Sprache als unbegründet zurückweisen.',
                      'Sie will die Sorgen um die Sprache in einen größeren Kontext einordnen.',
                      'Sie will neue Regeln für den Gebrauch von Anglizismen vorschlagen.',
                    ],
                    answer: 1,
                    explanationRu: '«… diese Sorgen nicht einfach abtun, sie aber in einen größeren Zusammenhang stellen».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wozu erwähnt die Referentin Wörter wie „Etage“ oder „Friseur“?',
                    options: [
                      'Um zu zeigen, dass Fremdwörter oft dauerhaft in die Sprache integriert werden.',
                      'Um zu belegen, dass Französisch früher wichtiger war als Englisch heute.',
                      'Um vor einer erneuten Überfremdung des Deutschen zu warnen.',
                    ],
                    answer: 0,
                    explanationRu: 'Эти французские слова сегодня воспринимаются как свои: язык их «aufgenommen, angepasst … verdaut».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie bewertet die Referentin die Zunahme von Formen wie „wegen dem Regen“?',
                    options: [
                      'Als Folge mangelnder Bildung.',
                      'Als Fehler, der in der Schule stärker korrigiert werden sollte.',
                      'Als Teil einer langfristigen Entwicklung des Deutschen.',
                    ],
                    answer: 2,
                    explanationRu: 'Это не небрежность, а тенденция, «die sich im Deutschen seit Jahrhunderten beobachten lässt».',
                  },
                  {
                    kind: 'mc',
                    question: 'Welche Haltung hat die Referentin zu sprachlichen Normen?',
                    options: [
                      'Sie hält sie für überflüssig, weil sich Sprache ohnehin wandelt.',
                      'Sie hält sie für notwendig, lehnt aber die Abwertung anderer Sprachformen ab.',
                      'Sie fordert, die Standardsprache an die Jugendsprache anzupassen.',
                    ],
                    answer: 1,
                    explanationRu: 'Нужен обязательный стандарт, но проблема — когда всё остальное «als falsch oder minderwertig abgewertet wird».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt die Referentin über Jugendliche?',
                    options: [
                      'Sie können ihre Sprache flexibel an die jeweilige Situation anpassen.',
                      'Sie beherrschen meist nur ihren eigenen Jargon.',
                      'Sie sprechen mit ihren Großeltern meist Dialekt.',
                    ],
                    answer: 0,
                    explanationRu: 'Большинство «wechseln mühelos» между регистрами — это «eine anspruchsvolle sprachliche Leistung».',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum kritisiert die Referentin bestimmte Anglizismen?',
                    options: [
                      'Weil sie die deutsche Sprache verunreinigen.',
                      'Weil sie für manche Menschen schwer verständlich sind.',
                      'Weil es für alle englischen Begriffe deutsche Entsprechungen gibt.',
                    ],
                    answer: 1,
                    explanationRu: 'Не из-за «чистоты языка», а потому что они исключают тех, кто не владеет английским: «um Verständlichkeit … um Teilhabe».',
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
          'Напишите дискуссионный пост для онлайн-форума (около 230 слов). Раскройте все четыре пункта. Следите за чёткой структурой (введение, основная часть, заключение) и логичными переходами между частями.',
        situationDe: `Forum „Gesellschaft im Gespräch“ – Thema der Woche: Ein verpflichtendes Gesellschaftsjahr für alle?

In der Politik wird vorgeschlagen, dass alle jungen Menschen nach der Schule ein Jahr lang einen Dienst für die Gesellschaft leisten müssen – etwa in der Pflege, im Umweltschutz, in Kultureinrichtungen oder beim Katastrophenschutz.

Einer aktuellen Umfrage zufolge befürworten 62 % der über 50-Jährigen ein solches Pflichtjahr, aber nur 31 % der 18- bis 29-Jährigen.

Beitrag von „M_Becker“: „Ein Pflichtjahr würde den Zusammenhalt stärken. Wer einmal im Altenheim geholfen hat, sieht die Welt mit anderen Augen.“`,
        points: [
          'Erläutern Sie, warum ein solches Gesellschaftsjahr gefordert wird.',
          'Deuten Sie die unterschiedlichen Umfrageergebnisse der Altersgruppen.',
          'Wägen Sie Vor- und Nachteile eines Pflichtjahres gegeneinander ab.',
          'Legen Sie Ihre eigene begründete Position dar und skizzieren Sie eine mögliche Alternative.',
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
        situationDe: `Sie haben sich bei der Volkshochschule für ein zweitägiges Wochenendseminar „Wissenschaftliches Schreiben“ angemeldet und die Kursgebühr von 180 Euro bereits bezahlt. Sie hatten sich ausdrücklich für die Präsenzvariante entschieden. Eine Woche vor Beginn erhalten Sie die Mitteilung, dass das Seminar aus organisatorischen Gründen nur online stattfinden wird. Schreiben Sie an die Kursleiterin, Frau Dr. Petersen.`,
        points: [
          'Nehmen Sie Bezug auf die Mitteilung der Volkshochschule.',
          'Erklären Sie, warum das Online-Format für Sie nicht geeignet ist.',
          'Bitten Sie um eine Lösung (z. B. Umbuchung oder Erstattung).',
          'Nennen Sie eine Frist, bis zu der Sie eine Antwort erwarten.',
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
        situationDe: `Thema: Digitale Auszeit – Luxus oder Notwendigkeit?

Einer Umfrage zufolge verbringen Erwachsene in Deutschland durchschnittlich rund dreieinhalb Stunden täglich am Smartphone. 41 % geben an, schon einmal bewusst eine „digitale Auszeit“ genommen zu haben; von diesen fanden 70 % die Erfahrung positiv.

These: „Wer heute nicht regelmäßig offline geht, verliert die Kontrolle über seine Zeit.“`,
        points: [
          'Führen Sie in das Thema ein und nennen Sie die Gliederung Ihres Vortrags.',
          'Erläutern und interpretieren Sie die Zahlen.',
          'Nennen Sie mögliche Ursachen und Folgen intensiver Smartphone-Nutzung.',
          'Setzen Sie sich kritisch mit der These auseinander (Argumente und Gegenargumente).',
          'Ziehen Sie ein Fazit und formulieren Sie Ihre eigene Position.',
        ],
        aiRole:
          'Sie sind Prüferin in der mündlichen Prüfung Goethe-Zertifikat C1. Sie hören dem Vortrag aufmerksam zu, ohne zu unterbrechen. Danach stellen Sie ein bis zwei anspruchsvolle Rückfragen, z. B. zur Aussagekraft der Zahlen, zu einem genannten Argument oder zu möglichen Gegenpositionen. Sie sprechen gepflegtes Standarddeutsch.',
        opener:
          'Guten Tag. Sie haben sich auf das Thema „Digitale Auszeit“ vorbereitet. Bitte beginnen Sie mit Ihrem Vortrag – Sie haben etwa drei bis vier Minuten Zeit.',
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
        situationDe:
          'Sollten öffentlich finanzierte Museen auf Eintrittsgelder vollständig verzichten?',
        points: [
          'Kulturelle Teilhabe und soziale Gerechtigkeit',
          'Finanzierung und Folgen für die Museen',
          'Wertschätzung von Kultur („Was nichts kostet, ist nichts wert?“)',
          'Mögliche Kompromisse (z. B. freie Tage, Ermäßigungen)',
        ],
        aiRole:
          'Sie sind Gesprächspartner in der mündlichen Prüfung Goethe-Zertifikat C1. Sie vertreten konsequent die Gegenposition: Museen sollten weiterhin Eintritt verlangen. Argumente: Finanzierungslücken, Wertschätzung, freier Eintritt erreicht vor allem ohnehin Kulturinteressierte, Geld fehlt dann für Bildungsprogramme. Sie sprechen idiomatisches C1-Deutsch (z. B. „ein Tropfen auf den heißen Stein“, „das greift zu kurz“, „da bin ich anderer Meinung“), widersprechen höflich, aber bestimmt, fragen nach Belegen und Beispielen. Wenn Ihr Gegenüber überzeugend argumentiert, zeigen Sie gegen Ende Kompromissbereitschaft (z. B. kostenlose Tage oder freier Eintritt für junge Menschen). Halten Sie Ihre Beiträge kurz (2–4 Sätze), damit der Prüfling ausreichend sprechen kann.',
        opener:
          'Also, ich will ehrlich sein: Die Idee, Museen grundsätzlich kostenlos zu machen, klingt sympathisch, aber ich halte sie für einen Trugschluss. Irgendjemand muss das ja bezahlen. Wie sehen Sie das?',
        minutes: 6,
        maxPoints: 50,
      },
    ],
  },
};
