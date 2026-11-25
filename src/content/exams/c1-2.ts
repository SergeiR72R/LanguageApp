import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'c1-exam-2',
  level: 'C1',
  title: 'Übungstest C1 – 2',
  lesen: {
    minutes: 65,
    parts: [
      // ───────────────────────── Lesen Teil 1 ─────────────────────────
      {
        teil: 1,
        minutes: 15,
        title: 'Der unterschätzte Klimaschützer unter unseren Füßen',
        textType: 'Sachtext mit Lücken',
        texts: [
          {
            body: `Wenn vom Klimaschutz die Rede ist, denken die meisten an Windräder, Elektroautos oder aufgeforstete Wälder. Kaum jemand denkt an den Boden. Dabei speichern die Böden der Erde nach gängigen Schätzungen mehr Kohlenstoff als die gesamte Vegetation und die Atmosphäre zusammen. [1] Umgekehrt gilt allerdings auch: Werden Böden falsch bewirtschaftet, geben sie gespeicherten Kohlenstoff als Kohlendioxid wieder ab.

Wie viel Kohlenstoff ein Boden binden kann, hängt vor allem von seinem Gehalt an Humus ab, also an abgestorbenem und umgewandeltem organischem Material. [2] Intensiver Ackerbau mit häufigem Pflügen, einseitigen Fruchtfolgen und lange unbedeckten Flächen hat in vielen Regionen dazu geführt, dass der Humusgehalt über Jahrzehnte gesunken ist. Besonders drastisch ist die Lage bei entwässerten Mooren: Obwohl sie nur einen kleinen Teil der landwirtschaftlichen Fläche ausmachen, verursachen sie einen erheblichen Anteil der Treibhausgasemissionen aus der Landwirtschaft.

[3] Zwischenfrüchte, die nach der Ernte ausgesät werden, halten den Boden auch im Winter bedeckt und führen ihm organisches Material zu. Hecken und Baumreihen auf Feldern, wie sie in der sogenannten Agroforstwirtschaft üblich sind, bremsen zudem die Erosion durch Wind und Wasser. Und wer auf das Pflügen verzichtet oder es reduziert, stört das Bodenleben weniger.

So plausibel diese Ansätze klingen, so schwierig ist ihre Bewertung. [4] Zudem ist der Humusaufbau umkehrbar: Kehrt ein Betrieb nach einigen Jahren zu seinen alten Methoden zurück, kann der mühsam gespeicherte Kohlenstoff innerhalb kurzer Zeit wieder entweichen. Fachleute sprechen deshalb von einer Frage der „Permanenz“.

Gerade diese Unsicherheit macht ein Geschäftsmodell problematisch, das in den letzten Jahren an Bedeutung gewonnen hat. Unternehmen bezahlen Landwirte dafür, Humus aufzubauen, und verrechnen die vermeintlich gespeicherte Menge mit ihren eigenen Emissionen. [5] Kritiker sprechen von einem modernen Ablasshandel, der vor allem dazu diene, sich als klimaneutral zu bezeichnen, ohne die eigenen Emissionen tatsächlich zu senken.

Das heißt jedoch nicht, dass der Boden für den Klimaschutz bedeutungslos wäre. [6] Ein humusreicher Boden speichert mehr Wasser, übersteht Trockenperioden besser und bietet unzähligen Organismen einen Lebensraum. Die Landwirte, die ihn aufbauen, sichern damit nicht zuletzt ihre eigenen Erträge in einem sich wandelnden Klima.

Für die Politik ergibt sich daraus eine doppelte Aufgabe. [7] Gleichzeitig muss sie verhindern, dass zweifelhafte Zertifikate als Ersatz für echte Emissionsminderungen herhalten. Der Boden kann ein Verbündeter im Klimaschutz sein – ein Allheilmittel ist er nicht.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze bleiben übrig.',
            instructionRu:
              'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
            options: [
              'Humus baut sich nur sehr langsam auf, und Veränderungen lassen sich mit vertretbarem Aufwand kaum zuverlässig messen.',
              'Aus diesem Grund haben die meisten Landwirte bereits vollständig auf das Pflügen verzichtet.',
              'Schon geringe Veränderungen dieses Speichers können daher spürbare Auswirkungen auf das Klima haben.',
              'Sie sollte Landwirte, die ihre Böden schonend bewirtschaften, gezielt fördern und ihnen verlässliche Rahmenbedingungen bieten.',
              'Sein größter Nutzen liegt womöglich aber weniger in der Speicherung von Kohlenstoff als in der Anpassung an die Folgen der Erwärmung.',
              'Dabei gibt es eine Reihe erprobter Methoden, mit denen sich dieser Trend umkehren ließe.',
              'Moore sollten deshalb möglichst rasch weiter entwässert werden, um neue Ackerflächen zu gewinnen.',
              'Ob diese Mengen tatsächlich und dauerhaft im Boden verbleiben, lässt sich jedoch oft kaum überprüfen.',
              'Und genau dieser Gehalt ist in vielen Ackerböden bedenklich niedrig.',
            ],
            items: [
              {
                kind: 'match',
                prompt: 'Lücke 1',
                answer: 2,
                explanationRu:
                  'Почвы — огромный резервуар углерода, поэтому даже небольшие изменения «dieses Speichers» заметно влияют на климат; далее — «Umgekehrt gilt allerdings auch …».',
              },
              {
                kind: 'match',
                prompt: 'Lücke 2',
                answer: 8,
                explanationRu:
                  '«dieser Gehalt» отсылает к содержанию гумуса; следующее предложение объясняет, почему он снизился.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 3',
                answer: 5,
                explanationRu:
                  'Предложение вводит абзац о методах (промежуточные культуры, агролесоводство, отказ от вспашки), которые могут обратить тенденцию вспять.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 4',
                answer: 0,
                explanationRu:
                  'Объясняет, почему оценка методов сложна: гумус накапливается медленно, а изменения трудно измерить; затем «Zudem …» добавляет вторую проблему.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 5',
                answer: 7,
                explanationRu:
                  'Сомнение в том, что «эти количества» углерода действительно и надолго остаются в почве, ведёт к упрёку в «Ablasshandel» (торговле индульгенциями).',
              },
              {
                kind: 'match',
                prompt: 'Lücke 6',
                answer: 4,
                explanationRu:
                  'Главная польза почвы — в адаптации к последствиям потепления; это раскрывается далее: влагоудержание, устойчивость к засухе.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 7',
                answer: 3,
                explanationRu:
                  'Первая из «двойной задачи» политики — поддерживать фермеров; «Gleichzeitig …» вводит вторую.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 2 ─────────────────────────
      {
        teil: 2,
        minutes: 20,
        title: 'Die produktive Leere: Was Langeweile über uns verrät',
        textType: 'Zeitungsartikel',
        texts: [
          {
            heading: 'Die produktive Leere: Was Langeweile über uns verrät',
            body: `Langeweile hat keinen guten Ruf. Sie gilt als Zeichen von Einfallslosigkeit, als lästiger Zustand, den man möglichst schnell beenden sollte – und dank Smartphone gelingt das heute in Sekundenschnelle. Die Psychologie hat sich lange kaum für das Phänomen interessiert. Erst in den vergangenen zwei Jahrzehnten ist eine eigene Forschungsrichtung entstanden, die zu überraschenden Ergebnissen kommt.

Zunächst einmal ist Langeweile offenbar schwerer zu ertragen, als viele annehmen. In einem vielzitierten Experiment sollten Versuchspersonen eine Viertelstunde allein in einem kargen Raum verbringen, ohne Handy, ohne Buch, nur mit ihren Gedanken. Die einzige Ablenkung bestand in einem Knopf, mit dem sie sich selbst einen leichten, aber unangenehmen elektrischen Schlag versetzen konnten. Eine beträchtliche Zahl der Teilnehmenden – vor allem Männer – drückte den Knopf mindestens einmal, obwohl sie zuvor angegeben hatten, sie würden sogar Geld bezahlen, um genau diesen Reiz zu vermeiden.

Die Psychologin Clara Engström, die seit Jahren zur Langeweile forscht, deutet solche Befunde nicht als Kuriosität. „Langeweile ist ein Signal“, erklärt sie. „Sie zeigt uns, dass die gegenwärtige Tätigkeit unseren Bedürfnissen nicht entspricht – entweder weil sie uns unterfordert oder weil wir ihren Sinn nicht erkennen.“ In diesem Sinne erfülle sie eine ähnliche Funktion wie Hunger oder Schmerz: Sie sei unangenehm, damit wir etwas ändern. Problematisch werde es erst, wenn Menschen auf dieses Signal reflexhaft mit der nächstbesten Ablenkung reagierten, statt der Ursache nachzugehen.

Besonders populär ist die These, Langeweile mache kreativ. Tatsächlich gibt es Studien, in denen Teilnehmende nach einer eintönigen Aufgabe – etwa dem Abschreiben von Telefonnummern – bei anschließenden Kreativitätstests mehr originelle Ideen hatten als eine Vergleichsgruppe. Engström mahnt jedoch zur Vorsicht. Die Effekte seien klein, und es sei unklar, ob sie im Alltag eine nennenswerte Rolle spielten. „Langeweile ist kein Zaubermittel. Sie kann einen Raum öffnen, in dem Gedanken umherschweifen. Ob daraus etwas Kreatives entsteht, hängt von vielen anderen Faktoren ab.“

Weniger bekannt, aber gut belegt ist ein anderer Zusammenhang: Menschen, die häufig und intensiv unter Langeweile leiden, neigen eher zu riskantem Verhalten, zu übermäßigem Essen oder zu impulsiven Entscheidungen. Hier lohnt es sich, zwischen situativer Langeweile – etwa in einer zähen Sitzung – und einer chronischen Neigung zu unterscheiden. Letztere geht oft mit dem Gefühl einher, das eigene Leben habe wenig Bedeutung, und wird in der Forschung zunehmend als ernst zu nehmendes Problem betrachtet.

Und das Smartphone? Man könnte meinen, es habe die Langeweile abgeschafft. Erste Untersuchungen deuten eher auf das Gegenteil hin. Wer jede Leerlaufphase sofort mit kurzen Reizen füllt, scheint die Schwelle zu senken, ab der er sich langweilt. Ständige Stimulation macht offenbar nicht zufriedener, sondern ungeduldiger.

Was also tun? Engström rät nicht dazu, sich gezielt zu langweilen, wie es manche Ratgeber empfehlen. Sinnvoller sei es, Langeweile als Frage zu verstehen: Was fehlt mir gerade? Manchmal laute die Antwort, dass man eine Aufgabe neu gestalten müsse. Manchmal aber auch, dass man sich schlicht ein wenig Geduld abverlangen sollte.`,
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
                question: 'Was zeigt das beschriebene Experiment?',
                options: [
                  'Viele Menschen ertragen es schlecht, nur mit ihren Gedanken allein zu sein.',
                  'Männer reagieren auf elektrische Reize empfindlicher als Frauen.',
                  'Die meisten Teilnehmenden brachen das Experiment vorzeitig ab.',
                ],
                answer: 0,
                explanationRu:
                  'Многие нажимали кнопку с неприятным разрядом, хотя раньше готовы были платить, чтобы его избежать, — лишь бы не оставаться наедине с мыслями.',
              },
              {
                kind: 'mc',
                question: 'Womit vergleicht Clara Engström die Langeweile?',
                options: [
                  'Mit einer Krankheit, die behandelt werden muss.',
                  'Mit körperlichen Warnsignalen, die zu einer Veränderung anregen.',
                  'Mit einer Belohnung für erledigte Arbeit.',
                ],
                answer: 1,
                explanationRu:
                  'Скука выполняет функцию, похожую на голод или боль: «Sie sei unangenehm, damit wir etwas ändern».',
              },
              {
                kind: 'mc',
                question: 'Wann wird Langeweile laut Engström zum Problem?',
                options: [
                  'Wenn sie länger als einige Minuten dauert.',
                  'Wenn sie während der Arbeitszeit auftritt.',
                  'Wenn man sie reflexhaft durch Ablenkung beendet, statt nach dem Grund zu fragen.',
                ],
                answer: 2,
                explanationRu:
                  '«… wenn Menschen … reflexhaft mit der nächstbesten Ablenkung reagierten, statt der Ursache nachzugehen».',
              },
              {
                kind: 'mc',
                question: 'Wie beurteilt Engström die These, Langeweile mache kreativ?',
                options: [
                  'Sie hält die Belege für zu schwach, um weitreichende Schlüsse zu ziehen.',
                  'Sie hält die These für vollständig widerlegt.',
                  'Sie sieht die These durch zahlreiche Studien eindeutig bestätigt.',
                ],
                answer: 0,
                explanationRu:
                  'Эффекты «klein», неясно, важны ли они в повседневности: «Langeweile ist kein Zaubermittel». Тезис не опровергнут, но доказательства слабы.',
              },
              {
                kind: 'mc',
                question: 'Was erfährt man über chronische Langeweile?',
                options: [
                  'Sie tritt vor allem in langwierigen Sitzungen auf.',
                  'Sie ist häufig mit dem Gefühl der Bedeutungslosigkeit des eigenen Lebens verbunden.',
                  'Sie wird von der Forschung inzwischen als harmlos eingestuft.',
                ],
                answer: 1,
                explanationRu:
                  'Хроническая скука «geht oft mit dem Gefühl einher, das eigene Leben habe wenig Bedeutung». Скучное совещание — пример ситуативной скуки.',
              },
              {
                kind: 'mc',
                question: 'Welche Wirkung hat ständige Ablenkung durch das Smartphone laut ersten Untersuchungen?',
                options: [
                  'Man wird kreativer.',
                  'Man wird zufriedener.',
                  'Man wird ungeduldiger und langweilt sich schneller.',
                ],
                answer: 2,
                explanationRu:
                  'Порог скуки снижается: «Ständige Stimulation macht offenbar nicht zufriedener, sondern ungeduldiger».',
              },
              {
                kind: 'mc',
                question: 'Was empfiehlt Engström?',
                options: [
                  'Regelmäßig bewusst Langeweile herbeizuführen.',
                  'Langeweile als Anlass zu nehmen, die eigenen Bedürfnisse zu hinterfragen.',
                  'Langeweile durch sinnvolle Aktivitäten konsequent zu vermeiden.',
                ],
                answer: 1,
                explanationRu:
                  'Она не советует скучать нарочно, а предлагает понимать скуку как вопрос: «Was fehlt mir gerade?»',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 3 ─────────────────────────
      {
        teil: 3,
        minutes: 15,
        title: 'Bedingungsloses Grundeinkommen – Utopie oder Zukunftsmodell?',
        textType: 'Meinungsäußerungen',
        texts: [
          {
            label: 'Miriam Scholz, Altenpflegerin',
            body: `Ich arbeite seit fünfzehn Jahren in der Altenpflege und kenne viele Kolleginnen, die ihre Stunden reduziert haben, weil sie körperlich nicht mehr können – und die dann jeden Euro zweimal umdrehen müssen. Ein Grundeinkommen würde Menschen wie uns endlich die Freiheit geben, Nein zu sagen: zu Schichten, die krank machen, und zu Arbeitgebern, die das ausnutzen. Ich glaube nicht, dass dann niemand mehr arbeiten würde. Die meisten von uns haben diesen Beruf ja gewählt, weil er uns etwas bedeutet. Aber die Arbeitgeber müssten sich mehr anstrengen, und genau das wäre überfällig. Wie man so etwas finanziert, kann ich als Laie nicht beurteilen – aber dass sich die Frage überhaupt stellt, zeigt doch, wie wenig unsere Arbeit bisher wert ist.`,
          },
          {
            label: 'Prof. Dr. Ralf Behrendt, Finanzwissenschaftler',
            body: `Die Idee hat zweifellos ihren Charme, gerade weil sie das komplizierte Geflecht aus Sozialleistungen durch eine einfache Zahlung ersetzen würde. Doch die Rechnung geht nicht auf. Ein Grundeinkommen, das tatsächlich zum Leben reicht, würde Steuersätze erfordern, die in einer offenen Volkswirtschaft kaum durchsetzbar sind. Und eine niedrige Variante, die finanzierbar wäre, würde Menschen mit besonderem Bedarf – etwa Schwerbehinderte – schlechterstellen als heute. Die Pilotprojekte, die gern zitiert werden, sind zudem nur bedingt aussagekräftig: Wer weiß, dass die Zahlung nach drei Jahren endet, verhält sich anders als jemand, der lebenslang darauf zählen kann.`,
          },
          {
            label: 'Hanna Vogt, Gründerin eines Start-ups',
            body: `Als ich mein Unternehmen gegründet habe, hatte ich das Glück, dass meine Eltern mich finanziell unterstützen konnten. Viele kluge Leute, die ich kenne, haben diesen Rückhalt nicht und bleiben deshalb in Jobs, die sie langweilen. Ein Grundeinkommen wäre für mich vor allem ein Sicherheitsnetz für Risikobereitschaft: Es würde mehr Menschen ermöglichen, etwas Neues auszuprobieren, ohne beim Scheitern ins Bodenlose zu fallen. Ob das gesamtgesellschaftlich finanzierbar ist, sollen Ökonomen klären. Ich würde mir aber wünschen, dass man es zumindest in einem größeren Modellversuch über einen längeren Zeitraum testet, statt die Debatte immer nur theoretisch zu führen.`,
          },
          {
            label: 'Wolfgang Pietsch, Gewerkschaftssekretär',
            body: `Ich stehe der Idee skeptischer gegenüber, als man es von einem Gewerkschafter vielleicht erwarten würde. Meine Sorge ist, dass ein Grundeinkommen als Vorwand dienen könnte, den Sozialstaat abzubauen: Man zahlt jedem eine Pauschale und zieht sich ansonsten aus der Verantwortung zurück. Arbeit ist außerdem mehr als Broterwerb. Sie strukturiert den Tag, schafft soziale Kontakte und vermittelt Anerkennung. Statt Menschen mit Geld abzufinden, sollten wir lieber dafür sorgen, dass gute Arbeit für alle zugänglich ist – mit fairen Löhnen, Weiterbildung und Arbeitszeiten, die ein Leben neben dem Beruf zulassen.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Meinungsäußerungen. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden. Zu einer Aussage passt keine Person.',
            instructionRu:
              'Прочитайте высказывания. Какое утверждение относится к какому человеку? Людей можно выбирать несколько раз. Одно утверждение не подходит ни к кому.',
            options: ['Miriam Scholz', 'Ralf Behrendt', 'Hanna Vogt', 'Wolfgang Pietsch'],
            allowNone: true,
            items: [
              {
                kind: 'match',
                prompt: 'Ein Grundeinkommen würde die Verhandlungsposition von Beschäftigten stärken.',
                answer: 0,
                explanationRu:
                  'Шольц: базовый доход дал бы свободу «Nein zu sagen» плохим сменам и работодателям — тем пришлось бы стараться больше.',
              },
              {
                kind: 'match',
                prompt: 'Bisherige Modellprojekte lassen nur begrenzte Rückschlüsse zu.',
                answer: 1,
                explanationRu:
                  'Берендт: пилотные проекты «nur bedingt aussagekräftig», потому что выплаты ограничены по времени.',
              },
              {
                kind: 'match',
                prompt: 'Ein Grundeinkommen könnte unternehmerischen Mut fördern.',
                answer: 2,
                explanationRu:
                  'Фогт: «ein Sicherheitsnetz für Risikobereitschaft» — больше людей рискнули бы начать что-то новое.',
              },
              {
                kind: 'match',
                prompt: 'Die Einführung könnte dazu missbraucht werden, soziale Leistungen abzubauen.',
                answer: 3,
                explanationRu:
                  'Пич: базовый доход может стать «Vorwand …, den Sozialstaat abzubauen».',
              },
              {
                kind: 'match',
                prompt: 'Ein Grundeinkommen sollte nur an Erwerbstätige ausgezahlt werden.',
                answer: -1,
                explanationRu:
                  'Никто из авторов этого не предлагает — это противоречит самой идее «безусловного» дохода.',
              },
              {
                kind: 'match',
                prompt: 'Eine finanzierbare Variante würde bestimmte Gruppen benachteiligen.',
                answer: 1,
                explanationRu:
                  'Берендт: низкий вариант «würde Menschen mit besonderem Bedarf … schlechterstellen als heute».',
              },
              {
                kind: 'match',
                prompt: 'Erwerbsarbeit erfüllt auch wichtige soziale Funktionen.',
                answer: 3,
                explanationRu:
                  'Пич: работа «strukturiert den Tag, schafft soziale Kontakte und vermittelt Anerkennung».',
              },
              {
                kind: 'match',
                prompt: 'Die Idee sollte zunächst über einen längeren Zeitraum praktisch erprobt werden.',
                answer: 2,
                explanationRu:
                  'Фогт: «in einem größeren Modellversuch über einen längeren Zeitraum testet».',
              },
              {
                kind: 'match',
                prompt: 'Die Debatte macht deutlich, wie gering bestimmte Berufe bisher geschätzt werden.',
                answer: 0,
                explanationRu:
                  'Шольц: сама постановка вопроса показывает, «wie wenig unsere Arbeit bisher wert ist».',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 4 ─────────────────────────
      {
        teil: 4,
        minutes: 15,
        title: 'Die Maschine übersetzt – und wer verantwortet den Text?',
        textType: 'Kommentar',
        texts: [
          {
            heading: 'Die Maschine übersetzt – und wer verantwortet den Text?',
            body: `Vor einigen Wochen gab ein großer Publikumsverlag bekannt, er werde einen Teil seiner Unterhaltungsromane künftig maschinell übersetzen und anschließend nur noch „nachbearbeiten“ lassen. Die Empörung in der Branche war erwartbar, und sie war in Teilen auch berechtigt. Trotzdem möchte ich mich nicht jenen anschließen, die nun den Untergang der Literatur ausrufen. Die Lage ist komplizierter – und gerade deshalb unbequemer.

Zunächst sollte man ehrlich anerkennen, was die Programme inzwischen leisten. Wer einen Sachtext oder einen schlichten Krimi durch eine aktuelle Übersetzungssoftware schickt, erhält in vielen Fällen ein Ergebnis, das grammatisch korrekt und auf den ersten Blick flüssig lesbar ist. Wer das bestreitet, macht sich unglaubwürdig, und genau das ist in der Debatte bisweilen geschehen. Die Frage ist nicht, ob die Maschine Sätze übertragen kann, sondern was dabei verloren geht.

Und das ist mehr, als der flüchtige Blick verrät. Literarisches Übersetzen besteht zu einem großen Teil aus Entscheidungen, die sich nicht aus dem einzelnen Satz ergeben: Wie klingt eine Figur über dreihundert Seiten hinweg? Welche Anspielung ist dem deutschen Publikum vertraut, welche muss man umschreiben? Wo darf ein Text sperrig bleiben, weil er im Original sperrig ist? Eine Software, die Satz für Satz die statistisch wahrscheinlichste Lösung wählt, neigt dazu, alles zu glätten. Heraus kommt eine Prosa, die nirgends aneckt – und gerade deshalb nirgends lebendig wird.

Das „Nachbearbeiten“ klingt nach einer bescheidenen Korrekturarbeit. In Wahrheit ist es oft mühsamer als eine Übersetzung von Grund auf, weil man sich ständig gegen die Vorschläge der Maschine durchsetzen muss. Wer dafür nur einen Bruchteil des üblichen Honorars erhält, wird sich diesen Kampf kaum leisten können. Das eigentliche Problem ist daher nicht technischer, sondern ökonomischer Natur: Die Verlage sparen nicht an der Maschine, sondern an der menschlichen Sorgfalt.

Was folgt daraus? Ein Verbot maschineller Übersetzung halte ich weder für durchsetzbar noch für wünschenswert; viele Übersetzerinnen und Übersetzer nutzen die Werkzeuge längst selbst, als Nachschlagewerk oder für eine Rohfassung. Wohl aber sollten Leserinnen und Leser erfahren, wie ein Buch entstanden ist. Eine klare Kennzeichnung auf dem Titelblatt würde niemanden bevormunden, sondern lediglich eine informierte Entscheidung ermöglichen. Ich vermute, dass mancher Verlag diese Transparenz scheut – und das sagt bereits einiges.

Am Ende entscheidet ohnehin das Publikum. Wenn es sich mit geglätteter Massenware zufriedengibt, wird es sie bekommen. Ich bin allerdings optimistisch genug zu glauben, dass viele Menschen den Unterschied spüren, auch wenn sie ihn nicht benennen können.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Kommentar. Wählen Sie bei jeder Aufgabe die Lösung a, b oder c, die der Position des Autors entspricht.',
            instructionRu:
              'Прочитайте комментарий. В каждом задании выберите вариант a, b или c, который соответствует позиции автора.',
            items: [
              {
                kind: 'mc',
                question: 'Wie steht der Autor zur Reaktion der Branche auf die Ankündigung des Verlags?',
                options: [
                  'Er hält sie für vollkommen überzogen.',
                  'Er hält sie teilweise für nachvollziehbar, teilt aber nicht jede Schlussfolgerung.',
                  'Er schließt sich ihr uneingeschränkt an.',
                ],
                answer: 1,
                explanationRu:
                  'Возмущение «in Teilen auch berechtigt», но он не согласен с теми, кто провозглашает «гибель литературы».',
              },
              {
                kind: 'mc',
                question: 'Was wirft der Autor manchen Kritikern maschineller Übersetzung vor?',
                options: [
                  'Dass sie die Leistungsfähigkeit der Programme kleinreden.',
                  'Dass sie selbst nie Literatur übersetzt haben.',
                  'Dass sie nur an ihr eigenes Honorar denken.',
                ],
                answer: 0,
                explanationRu:
                  'Кто отрицает, что программы дают грамматически правильный и гладкий текст, «macht sich unglaubwürdig, und genau das ist … geschehen».',
              },
              {
                kind: 'mc',
                question: 'Welche Schwäche sieht der Autor in maschinellen Übersetzungen literarischer Texte?',
                options: [
                  'Sie enthalten zahlreiche grammatische Fehler.',
                  'Sie übertragen Anspielungen grundsätzlich zu wörtlich.',
                  'Sie ebnen stilistische Eigenheiten des Originals ein.',
                ],
                answer: 2,
                explanationRu:
                  'Программа «neigt dazu, alles zu glätten» — получается проза, которая «nirgends aneckt», то есть стилистические особенности сглаживаются.',
              },
              {
                kind: 'mc',
                question: 'Was sagt der Autor über das sogenannte Nachbearbeiten?',
                options: [
                  'Es ist eine angemessene Aufgabe für Berufsanfänger.',
                  'Es erfordert oft mehr Aufwand, als die Bezeichnung vermuten lässt.',
                  'Es sollte künftig ebenfalls von Programmen übernommen werden.',
                ],
                answer: 1,
                explanationRu:
                  '«In Wahrheit ist es oft mühsamer als eine Übersetzung von Grund auf».',
              },
              {
                kind: 'mc',
                question: 'Worin sieht der Autor das eigentliche Problem?',
                options: [
                  'In den wirtschaftlichen Interessen der Verlage.',
                  'In der noch unausgereiften Technik.',
                  'In der mangelnden Ausbildung der Übersetzer.',
                ],
                answer: 0,
                explanationRu:
                  '«Das eigentliche Problem ist … nicht technischer, sondern ökonomischer Natur: Die Verlage sparen … an der menschlichen Sorgfalt».',
              },
              {
                kind: 'mc',
                question: 'Was fordert der Autor?',
                options: [
                  'Höhere Ladenpreise für übersetzte Bücher.',
                  'Ein gesetzliches Verbot maschineller Übersetzung.',
                  'Eine Kennzeichnung maschinell übersetzter Bücher.',
                ],
                answer: 2,
                explanationRu:
                  'Запрет он считает невозможным и нежелательным; он хочет «eine klare Kennzeichnung auf dem Titelblatt».',
              },
              {
                kind: 'mc',
                question: 'Wie blickt der Autor in die Zukunft?',
                options: [
                  'Resigniert, weil das Publikum keinen Unterschied bemerkt.',
                  'Vorsichtig optimistisch, dass Leser Qualität wahrnehmen.',
                  'Gleichgültig, weil ohnehin die Verlage entscheiden.',
                ],
                answer: 1,
                explanationRu:
                  '«Ich bin allerdings optimistisch genug zu glauben, dass viele Menschen den Unterschied spüren».',
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
          'Sie hören vier kurze Aussagen zum Thema „Wohnen im Alter“. Sie hören jede Aussage zweimal. Lösen Sie zu jeder Aussage zwei Aufgaben.',
        instructionRu:
          'Вы услышите четыре коротких высказывания на тему «жильё в пожилом возрасте». Каждое звучит дважды. К каждому высказыванию решите два задания.',
        segments: [
          {
            title: 'Aussage 1',
            kind: 'monolog',
            situation: 'Sie hören Herrn Brandt, 71, der in einem Mehrgenerationenhaus lebt.',
            playCount: 2,
            text: `Als meine Frau gestorben ist, stand ich vor der Frage: allein in unserem großen Haus bleiben oder etwas Neues wagen? Meine Kinder hätten mich gern in ihrer Nähe gehabt, aber ich wollte niemandem zur Last fallen. Jetzt lebe ich seit drei Jahren in einem Mehrgenerationenhaus. Ich habe meine eigene Wohnung, aber es gibt einen Gemeinschaftsraum und einen Garten, um den wir uns gemeinsam kümmern. Ich helfe zwei Kindern aus dem Haus bei den Hausaufgaben, und die Eltern bringen mir dafür manchmal etwas vom Einkaufen mit. Das ist kein Geschäft, das ergibt sich einfach.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Herr Brandt ist in die Nähe seiner Kinder gezogen.',
                    answer: false,
                    explanationRu: 'Дети хотели этого, но он «wollte niemandem zur Last fallen» и переехал в дом для нескольких поколений.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie beschreibt Herr Brandt die gegenseitige Hilfe im Haus?',
                    options: [
                      'Sie ist vertraglich genau geregelt.',
                      'Sie entsteht ganz selbstverständlich.',
                      'Sie wird von einer Sozialarbeiterin organisiert.',
                    ],
                    answer: 1,
                    explanationRu: '«Das ist kein Geschäft, das ergibt sich einfach».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 2',
            kind: 'monolog',
            situation: 'Sie hören Frau Demir, 45, Architektin.',
            playCount: 2,
            text: `In unserem Büro planen wir immer häufiger Wohnprojekte für ältere Menschen, und ich merke, wie sehr sich die Wünsche verändert haben. Vor zwanzig Jahren ging es vor allem um Barrierefreiheit – breite Türen, keine Schwellen, ein Aufzug. Das ist nach wie vor wichtig, aber heute fragen die Bauherren zuerst nach Begegnungsräumen. Die größte Gefahr im Alter ist nicht die Treppe, sondern die Einsamkeit. Allerdings scheitern viele Projekte am Grundstück: In den Innenstädten sind Flächen so teuer, dass gemeinschaftliche Räume schnell als Luxus gestrichen werden.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Laut Frau Demir spielt Barrierefreiheit heute keine Rolle mehr.',
                    answer: false,
                    explanationRu: '«Das ist nach wie vor wichtig» — безбарьерность по-прежнему важна, но на первом месте теперь места для общения.',
                  },
                  {
                    kind: 'mc',
                    question: 'Woran scheitern viele Projekte laut Frau Demir?',
                    options: [
                      'An fehlendem Interesse älterer Menschen.',
                      'An strengen Bauvorschriften.',
                      'An den hohen Grundstückspreisen.',
                    ],
                    answer: 2,
                    explanationRu: '«… scheitern viele Projekte am Grundstück: In den Innenstädten sind Flächen so teuer …».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 3',
            kind: 'monolog',
            situation: 'Sie hören Jana, 29, Studentin, die bei einer älteren Dame wohnt.',
            playCount: 2,
            text: `Ich wohne seit einem Jahr bei einer 84-jährigen Dame, und zwar im Rahmen eines Programms, das sich „Wohnen für Hilfe“ nennt. Ich zahle nur die Nebenkosten und helfe ihr dafür ungefähr eine Stunde pro Quadratmeter im Monat – ich gehe einkaufen, mache den Garten und begleite sie zum Arzt. Pflege gehört ausdrücklich nicht dazu. Am Anfang hatten wir beide ziemliche Bedenken, gerade was die Privatsphäre angeht. Inzwischen haben wir unsere Rituale: Sonntags kochen wir zusammen, und ansonsten lässt jede die andere in Ruhe.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Jana zahlt keine reguläre Miete.',
                    answer: true,
                    explanationRu: '«Ich zahle nur die Nebenkosten» — вместо аренды она помогает по хозяйству.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie hat sich das Zusammenleben entwickelt?',
                    options: [
                      'Anfängliche Bedenken haben sich durch feste Gewohnheiten gelegt.',
                      'Die beiden verbringen inzwischen fast jeden Abend zusammen.',
                      'Die Privatsphäre ist nach wie vor ein großes Problem.',
                    ],
                    answer: 0,
                    explanationRu: 'Сначала были сомнения насчёт личного пространства, «Inzwischen haben wir unsere Rituale».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Aussage 4',
            kind: 'monolog',
            situation: 'Sie hören Dr. Peter Konrad, Gerontologe, in einer Radiosendung.',
            playCount: 2,
            text: `Die allermeisten Menschen wollen im Alter so lange wie möglich in den eigenen vier Wänden bleiben. Das ist verständlich, führt aber zu einem paradoxen Effekt: Viele ältere Menschen leben allein in Wohnungen, die für eine Familie gebaut wurden, während junge Familien keinen Wohnraum finden. Programme, die einen Wohnungstausch erleichtern sollen, werden bisher kaum genutzt. Das liegt nicht nur an Bequemlichkeit. Eine kleinere Wohnung ist bei einem neuen Vertrag oft teurer als die große Wohnung mit altem Mietvertrag. Solange das so ist, darf man sich über die geringe Umzugsbereitschaft nicht wundern.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Laut Dr. Konrad werden Tauschprogramme bislang selten in Anspruch genommen.',
                    answer: true,
                    explanationRu: '«Programme, die einen Wohnungstausch erleichtern sollen, werden bisher kaum genutzt».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie erklärt Dr. Konrad die geringe Umzugsbereitschaft?',
                    options: [
                      'Vor allem mit der Bequemlichkeit älterer Menschen.',
                      'Mit den finanziellen Nachteilen eines Umzugs.',
                      'Mit fehlenden Informationen über Tauschprogramme.',
                    ],
                    answer: 1,
                    explanationRu: '«Das liegt nicht nur an Bequemlichkeit»: маленькая квартира по новому договору часто дороже большой по старому.',
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
          'Sie hören ein Interview mit einem Experten für Stadtklima. Sie hören das Interview einmal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите интервью с экспертом по городскому климату. Интервью звучит один раз. Выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Interview: Wenn die Stadt zum Glutofen wird',
            kind: 'dialog',
            speakers: { A: 'Moderatorin', B: 'Dr. Jakob Feldmann, Stadtklimatologe' },
            situation: 'Sie hören ein Interview in einem Wissenschaftsmagazin im Radio.',
            playCount: 1,
            text: `A: Herr Feldmann, die Sommer werden heißer, und in den Städten spüren wir das besonders. Warum eigentlich?
B: Städte sind gewissermaßen Wärmespeicher. Asphalt, Beton und Ziegel nehmen tagsüber enorm viel Sonnenenergie auf und geben sie nachts wieder ab. Hinzu kommt, dass dichte Bebauung die Luftzirkulation behindert. Der Unterschied zum Umland ist deshalb vor allem nachts gravierend: In manchen Innenstädten ist es um Mitternacht bis zu acht Grad wärmer als draußen auf dem Land. Und gerade die fehlende nächtliche Abkühlung macht vielen Menschen gesundheitlich zu schaffen.
A: Wen trifft das am härtesten?
B: Ältere Menschen, chronisch Kranke, kleine Kinder – das ist bekannt. Weniger bekannt ist die soziale Dimension. Wer in einer schlecht gedämmten Dachgeschosswohnung an einer stark befahrenen Straße lebt, kann nachts kaum lüften und hat oft auch keinen Garten oder Balkon, auf den er ausweichen kann. Hitze ist also auch eine Frage des Einkommens.
A: Was können Städte tun?
B: Da gibt es kein Patentrezept, aber ein paar Grundprinzipien. Das Wichtigste ist Grün – und zwar nicht irgendein Grün. Ein großer Straßenbaum mit dichter Krone kühlt seine Umgebung durch Verdunstung und Schatten weit stärker als eine Rasenfläche. Das Problem ist nur: Bäume brauchen Jahrzehnte, bis sie diese Wirkung voll entfalten, und unter vielen Straßen liegen Leitungen, die das Pflanzen erschweren. Wir müssen also heute für eine Stadt planen, die wir erst in dreißig Jahren erleben.
A: Und kurzfristig?
B: Kurzfristig helfen helle Oberflächen, die weniger Wärme aufnehmen, oder Sonnensegel über Plätzen. Ebenso wichtig sind aber organisatorische Maßnahmen, die gar nicht so viel kosten. Einige Städte haben Hitzeaktionspläne eingeführt: Bei Hitzewarnungen werden gezielt allein lebende ältere Menschen angerufen, öffentliche Gebäude mit Klimaanlage werden als kühle Räume geöffnet, Trinkbrunnen werden aufgestellt. Das klingt banal, kann aber Leben retten.
A: Klimaanlagen in allen Wohnungen – wäre das nicht die einfachste Lösung?
B: Für Einzelne mag das so sein, für die Stadt als Ganzes ist es keine. Klimaanlagen geben die Wärme ja nach draußen ab und heizen die Straßen zusätzlich auf. Außerdem verbrauchen sie viel Strom. In Krankenhäusern oder Pflegeheimen sind sie sinnvoll, flächendeckend wären sie ein Teufelskreis.
A: Wenn Sie einen Wunsch an die Politik frei hätten?
B: Dass Hitzeschutz nicht länger als Sonderthema der Umweltämter behandelt wird. Er betrifft Verkehrsplanung, Gesundheit, Bauordnung, Sozialpolitik. Solange jede Behörde für sich arbeitet, bleiben wir bei Einzelmaßnahmen stehen.
A: Herr Feldmann, vielen Dank.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Warum ist der Temperaturunterschied zwischen Stadt und Umland vor allem nachts groß?',
                    options: [
                      'Weil Baumaterialien die tagsüber gespeicherte Wärme abgeben.',
                      'Weil nachts mehr Lieferverkehr in den Städten herrscht.',
                      'Weil das Umland nachts besonders stark auskühlt.',
                    ],
                    answer: 0,
                    explanationRu: 'Асфальт, бетон и кирпич днём накапливают солнечную энергию «und geben sie nachts wieder ab».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was meint Herr Feldmann mit der „sozialen Dimension“ der Hitze?',
                    options: [
                      'Hitze führt in Städten zu mehr Konflikten zwischen Nachbarn.',
                      'Menschen mit geringerem Einkommen sind oft stärker betroffen.',
                      'Soziale Einrichtungen bleiben bei Hitze geschlossen.',
                    ],
                    answer: 1,
                    explanationRu: 'Плохо утеплённая мансарда у оживлённой улицы, нет сада и балкона — «Hitze ist also auch eine Frage des Einkommens».',
                  },
                  {
                    kind: 'mc',
                    question: 'Welches Problem sieht Herr Feldmann bei Straßenbäumen?',
                    options: [
                      'Sie kühlen weniger stark als Rasenflächen.',
                      'Ihre Pflege ist für die Städte sehr teuer.',
                      'Sie entfalten ihre Wirkung erst nach langer Zeit.',
                    ],
                    answer: 2,
                    explanationRu: '«Bäume brauchen Jahrzehnte, bis sie diese Wirkung voll entfalten». Деревья охлаждают сильнее газонов, а не слабее.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt er über Hitzeaktionspläne?',
                    options: [
                      'Sie sind relativ günstig und können sehr wirksam sein.',
                      'Sie sind bisher nur in wenigen Ländern zulässig.',
                      'Sie machen langfristige bauliche Maßnahmen überflüssig.',
                    ],
                    answer: 0,
                    explanationRu: 'Организационные меры «gar nicht so viel kosten», а «kann aber Leben retten».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie beurteilt er Klimaanlagen?',
                    options: [
                      'Er lehnt sie grundsätzlich und überall ab.',
                      'Er hält sie nur in bestimmten Einrichtungen für sinnvoll.',
                      'Er empfiehlt sie vor allem für Dachgeschosswohnungen.',
                    ],
                    answer: 1,
                    explanationRu: '«In Krankenhäusern oder Pflegeheimen sind sie sinnvoll, flächendeckend wären sie ein Teufelskreis».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was wünscht er sich von der Politik?',
                    options: [
                      'Mehr Geld für die Umweltämter.',
                      'Strengere Auflagen für Bauträger.',
                      'Eine engere Zusammenarbeit der verschiedenen Ressorts.',
                    ],
                    answer: 2,
                    explanationRu: 'Защита от жары касается транспорта, здравоохранения, строительства и соцполитики: «Solange jede Behörde für sich arbeitet …».',
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
            title: 'Forum Wirtschaft: Ein Recht auf Reparatur?',
            kind: 'discussion',
            speakers: {
              A: 'Moderator Herr Kühn',
              B: 'Lisa Hoffmann, Leiterin eines Repair-Cafés',
              C: 'Dr. Martin Seidel, Verband der Elektroindustrie',
            },
            situation: 'Sie hören eine Diskussion in der Radiosendung „Forum Wirtschaft“.',
            playCount: 1,
            text: `A: Guten Abend und willkommen bei „Forum Wirtschaft“. Der Toaster streikt, das Smartphone-Display ist gesprungen, die Waschmaschine gibt nach sieben Jahren auf – und oft lohnt sich die Reparatur nicht oder sie ist gar nicht möglich. Die Europäische Union will das mit einem „Recht auf Reparatur“ ändern. Bei mir sind Lisa Hoffmann, die seit zehn Jahren ein Repair-Café leitet, und Martin Seidel vom Verband der Elektroindustrie. Frau Hoffmann, was erleben Sie in Ihrem Repair-Café?
B: Jede Menge Frust, ehrlich gesagt. Die Leute kommen mit Geräten, die eigentlich nur eine Kleinigkeit haben – ein defekter Schalter, ein gebrochenes Scharnier. Aber dann ist das Gehäuse verklebt statt verschraubt, oder es gibt das Ersatzteil schlicht nicht zu kaufen. Und wenn es das Teil doch gibt, kostet es manchmal mehr als ein neues Gerät. Da fühlt man sich als Verbraucherin ziemlich veräppelt.
A: Herr Seidel, bauen die Hersteller absichtlich Geräte, die schnell kaputtgehen?
C: Diesen Vorwurf höre ich oft, und er hält einer genauen Prüfung nicht stand. Es gibt keine belastbaren Belege dafür, dass Hersteller systematisch Sollbruchstellen einbauen. Dass Geräte verklebt werden, hat meist andere Gründe: Sie sollen dünner, leichter und wasserdicht sein. Das wünschen sich die Kundinnen und Kunden ja auch.
B: Moment, die Kundinnen und Kunden hat aber niemand gefragt, ob sie dafür ein Gerät in Kauf nehmen, das man nicht mehr öffnen kann. Das ist doch eine Entscheidung, die die Hersteller für uns getroffen haben.
C: Na ja, der Markt entscheidet schon mit. Geräte, die sich gut reparieren lassen, gibt es durchaus – sie verkaufen sich nur nicht besser. Trotzdem will ich nicht bestreiten, dass bei den Ersatzteilen Verbesserungsbedarf besteht. Die Branche ist durchaus bereit, Teile länger vorzuhalten. Nur muss das für alle Anbieter gleichermaßen gelten, sonst haben die europäischen Hersteller einen Wettbewerbsnachteil gegenüber der Konkurrenz aus Übersee.
A: Frau Hoffmann, reicht ein Gesetz, um das Problem zu lösen?
B: Ein Gesetz ist ein Anfang, aber nicht mehr. Wir brauchen auch Menschen, die reparieren können. In vielen Kleinstädten gibt es keine einzige Werkstatt mehr für Elektrogeräte. Das Handwerk ist in diesem Bereich praktisch ausgestorben, weil sich das Geschäft nicht mehr gelohnt hat. Das baut man nicht über Nacht wieder auf.
A: Herr Seidel, was halten Sie von einem Reparaturbonus, wie ihn einige Bundesländer bereits zahlen – also einem staatlichen Zuschuss zu den Reparaturkosten?
C: Ich bin da hin- und hergerissen. Einerseits ist es sinnvoll, Reparaturen attraktiver zu machen. Andererseits zahlt am Ende die Allgemeinheit dafür, und es ist nicht gesagt, dass das Geld dort ankommt, wo es am meisten bewirkt. Mir wäre lieber, man würde die Mehrwertsteuer auf Reparaturdienstleistungen senken. Das wäre unbürokratischer.
B: Da würde ich ausnahmsweise mitgehen. Hauptsache, die Reparatur wird billiger als der Neukauf – auf welchem Weg, ist mir am Ende fast egal.
A: Eine erstaunliche Einigkeit zum Schluss. Vielen Dank Ihnen beiden.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen dem Moderator oder einem der Gäste zu.',
                instructionRu: 'Кто что говорит? Отнесите высказывания к ведущему или к одному из гостей.',
                options: ['Moderator Herr Kühn', 'Lisa Hoffmann', 'Martin Seidel'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Ersatzteile sind mitunter teurer als ein komplett neues Gerät.',
                    answer: 1,
                    explanationRu: 'Хоффман: запчасть «kostet … manchmal mehr als ein neues Gerät».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Der Vorwurf absichtlich eingebauter Schwachstellen ist nicht ausreichend belegt.',
                    answer: 2,
                    explanationRu: 'Зайдель: «Es gibt keine belastbaren Belege dafür, dass Hersteller systematisch Sollbruchstellen einbauen».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Die Hersteller haben über die Köpfe der Verbraucher hinweg entschieden.',
                    answer: 1,
                    explanationRu: 'Хоффман: «Das ist doch eine Entscheidung, die die Hersteller für uns getroffen haben».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Reparaturfreundliche Geräte sind keine Verkaufsschlager.',
                    answer: 2,
                    explanationRu: 'Зайдель: такие приборы есть, «sie verkaufen sich nur nicht besser».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Neue Pflichten müssen für alle Wettbewerber in gleicher Weise gelten.',
                    answer: 2,
                    explanationRu: 'Зайдель: иначе у европейских производителей будет «Wettbewerbsnachteil».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Vielerorts fehlt es an Fachbetrieben, die Reparaturen durchführen können.',
                    answer: 1,
                    explanationRu: 'Хоффман: «In vielen Kleinstädten gibt es keine einzige Werkstatt mehr für Elektrogeräte».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Einige Bundesländer gewähren bereits Zuschüsse für Reparaturen.',
                    answer: 0,
                    explanationRu: 'Это сообщает ведущий в вопросе о «Reparaturbonus».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Eine steuerliche Entlastung wäre einfacher umzusetzen als ein Zuschuss.',
                    answer: 2,
                    explanationRu: 'Зайдель предлагает снизить НДС на ремонт: «Das wäre unbürokratischer».',
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
            title: 'Eine kurze Geschichte der Pünktlichkeit',
            kind: 'monolog',
            situation:
              'Sie hören einen Vortrag des Kulturhistorikers Dr. Lukas Brenner an einer Volkshochschule.',
            playCount: 2,
            text: `Liebe Zuhörerinnen und Zuhörer, wenn ich Sie frage, was typisch deutsch sei, wird vermutlich bei vielen von Ihnen früher oder später das Wort „Pünktlichkeit“ fallen. Heute möchte ich Ihnen zeigen, dass diese angebliche Nationaltugend eine erstaunlich junge Geschichte hat – und dass sie weniger mit Charakter als mit Technik und Wirtschaft zu tun hat.

Bis weit ins neunzehnte Jahrhundert hinein hatte praktisch jede Stadt ihre eigene Zeit. Maßgeblich war der Sonnenstand: Wenn die Sonne am höchsten stand, war es Mittag. Da sich die Erde dreht, war es in einer Stadt im Osten einige Minuten früher Mittag als in einer Stadt weiter westlich. Für den Alltag spielte das keine Rolle. Wer zu Fuß oder mit der Kutsche reiste, bemerkte die paar Minuten Unterschied ohnehin nicht.

Das änderte sich schlagartig mit der Eisenbahn. Plötzlich mussten Fahrpläne erstellt werden, die über Hunderte von Kilometern hinweg funktionierten. Die Bahngesellschaften behalfen sich zunächst mit einer eigenen Bahnzeit, die von der Ortszeit abwich – und so konnte es passieren, dass am selben Bahnhof zwei Uhren mit unterschiedlichen Zeiten hingen. Erst 1893 wurde im Deutschen Reich eine einheitliche Zeit gesetzlich eingeführt. Pünktlichkeit im modernen Sinn, also das Einhalten einer auf die Minute genauen, überall gleichen Zeit, war vorher gar nicht möglich.

Der zweite Motor war die Fabrik. In der bäuerlichen Arbeitswelt richtete sich der Tag nach den Jahreszeiten und dem Licht; man arbeitete, bis die Arbeit getan war. In der Fabrik dagegen mussten Hunderte Menschen gleichzeitig an den Maschinen stehen. Fabrikordnungen jener Zeit sahen empfindliche Lohnabzüge für jede Minute Verspätung vor, und die Fabriksirene ersetzte die Kirchenglocke als Taktgeber des Lebens. Historiker sprechen in diesem Zusammenhang von einer regelrechten Erziehung zur Zeitdisziplin, die keineswegs ohne Widerstand ablief.

Auch die Schule spielte dabei eine Rolle. Der Unterricht im Stundentakt, die Glocke zur Pause, die Einträge ins Klassenbuch für jedes Zuspätkommen: All das bereitete Kinder auf eine Arbeitswelt vor, in der Zeit Geld war. Pünktlichkeit wurde so zu einer moralischen Kategorie. Wer zu spät kam, galt nicht nur als unpraktisch, sondern als unzuverlässig, ja als charakterlich fragwürdig.

Man könnte nun meinen, diese Entwicklung sei abgeschlossen. Ich glaube eher, dass wir gerade eine neue Phase erleben. Mit Smartphones und Messengerdiensten ist eine Art flexible Pünktlichkeit entstanden: Man verabredet sich nicht mehr für 19 Uhr, sondern für „so gegen sieben“ und schickt kurz vorher eine Nachricht, man sei in zehn Minuten da. Die Verspätung wird nicht abgeschafft, sondern angekündigt – und damit sozial akzeptabel. Ob das ein Verlust an Verbindlichkeit oder ein Gewinn an Gelassenheit ist, darüber können wir im Anschluss gern diskutieren.

Eines jedenfalls zeigt die Geschichte deutlich: Pünktlichkeit ist keine angeborene Eigenschaft eines Volkes, sondern eine kulturelle Praxis, die unter bestimmten Bedingungen entstanden ist und sich mit diesen Bedingungen auch wieder wandelt.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Welche These vertritt der Referent?',
                    options: [
                      'Pünktlichkeit ist eine typisch deutsche Charaktereigenschaft.',
                      'Pünktlichkeit ist vor allem ein Produkt technischer und wirtschaftlicher Entwicklungen.',
                      'Pünktlichkeit hat in Deutschland eine jahrhundertealte Tradition.',
                    ],
                    answer: 1,
                    explanationRu: 'Пунктуальность «hat eine erstaunlich junge Geschichte» и связана «weniger mit Charakter als mit Technik und Wirtschaft».',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum spielten unterschiedliche Ortszeiten früher kaum eine Rolle?',
                    options: [
                      'Weil die meisten Menschen keine Uhren besaßen.',
                      'Weil man sich ausschließlich nach der Kirchenglocke richtete.',
                      'Weil man so langsam reiste, dass die Unterschiede nicht auffielen.',
                    ],
                    answer: 2,
                    explanationRu: '«Wer zu Fuß oder mit der Kutsche reiste, bemerkte die paar Minuten Unterschied ohnehin nicht».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was geschah zunächst, als die Eisenbahn aufkam?',
                    options: [
                      'Es wurde sofort eine einheitliche Zeit eingeführt.',
                      'Teilweise existierten zwei verschiedene Zeiten nebeneinander.',
                      'Die Bahn richtete sich nach der Ortszeit der jeweils größten Stadt.',
                    ],
                    answer: 1,
                    explanationRu: 'Сначала ввели особое «железнодорожное время», и на одном вокзале могли висеть двое часов с разным временем; единое время — лишь в 1893 году.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt der Referent über die Zeitdisziplin in den Fabriken?',
                    options: [
                      'Sie wurde unter anderem mit finanziellen Strafen durchgesetzt.',
                      'Sie wurde von den Arbeitern widerstandslos akzeptiert.',
                      'Sie führte zu deutlich höheren Löhnen.',
                    ],
                    answer: 0,
                    explanationRu: '«… empfindliche Lohnabzüge für jede Minute Verspätung»; и это происходило «keineswegs ohne Widerstand».',
                  },
                  {
                    kind: 'mc',
                    question: 'Welche Rolle spielte die Schule?',
                    options: [
                      'Sie lehnte die Zeitdisziplin der Fabriken ab.',
                      'Sie machte Pünktlichkeit zu einer Frage der Moral.',
                      'Sie führte als erste Institution den Stundentakt ein.',
                    ],
                    answer: 1,
                    explanationRu: '«Pünktlichkeit wurde so zu einer moralischen Kategorie» — опоздавший считался ненадёжным человеком.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was versteht der Referent unter „flexibler Pünktlichkeit“?',
                    options: [
                      'Man kommt bewusst etwas früher als vereinbart.',
                      'Man trifft sich insgesamt seltener persönlich.',
                      'Verspätungen werden durch vorherige Ankündigung akzeptabel.',
                    ],
                    answer: 2,
                    explanationRu: '«Die Verspätung wird nicht abgeschafft, sondern angekündigt – und damit sozial akzeptabel».',
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
          'Sie schreiben einen Diskussionsbeitrag für das Online-Forum Ihrer Stadtzeitung (ca. 230 Wörter). Gehen Sie auf alle vier Punkte ein. Achten Sie auf eine klare Gliederung mit Einleitung und Schluss sowie auf gelungene Übergänge zwischen den Abschnitten.',
        instructionRu:
          'Напишите дискуссионный пост для онлайн-форума городской газеты (около 230 слов). Раскройте все четыре пункта. Следите за чёткой структурой и логичными переходами.',
        situationDe: `Forum der Stadtzeitung – Thema: Autofreie Innenstadt?

Die Stadtverwaltung prüft, die Innenstadt für den privaten Autoverkehr zu sperren. Eine Befragung ergab: 58 % der Innenstadtbesucher kommen bereits mit Bus und Bahn, mit dem Fahrrad oder zu Fuß. Gleichzeitig befürchten 70 % der Einzelhändler Umsatzeinbußen.

Beitrag von „Rentner_Klaus“: „Autofreie Innenstädte sind ein Projekt für junge Großstädter. Ältere Menschen und Leute vom Land bleiben dabei auf der Strecke.“`,
        points: [
          'Ordnen Sie die Ergebnisse der Befragung ein und nennen Sie mögliche Gründe für die Sorge des Einzelhandels.',
          'Gehen Sie auf die Aussage von „Rentner_Klaus“ ein.',
          'Wägen Sie Argumente für und gegen eine autofreie Innenstadt ab.',
          'Legen Sie Ihre eigene Position dar und machen Sie einen Vorschlag zur Umsetzung.',
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
        situationDe: `Sie haben einen Vortrag für eine Fachtagung eingereicht, und das Organisationsteam hat ihn angenommen. Im soeben veröffentlichten Programm ist Ihr Vortrag jedoch für den ersten Tag um 9 Uhr vorgesehen. An diesem Vormittag können Sie aus beruflichen Gründen nicht anwesend sein. Schreiben Sie an die Tagungsleiterin, Frau Dr. Lehmann.`,
        points: [
          'Bedanken Sie sich für die Annahme Ihres Vortrags.',
          'Schildern Sie das Problem und nennen Sie den Grund.',
          'Schlagen Sie mindestens zwei alternative Zeitpunkte vor.',
          'Stellen Sie eine Frage zur technischen Ausstattung des Vortragsraums.',
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
          'Halten Sie einen Vortrag von ca. 3–4 Minuten. Stellen Sie das Thema vor, erläutern Sie die Zahlen, setzen Sie sich mit der These auseinander und kommen Sie zu einem begründeten Fazit. Im Anschluss stellt Ihnen der Prüfer eine oder zwei Fragen.',
        instructionRu:
          'Сделайте доклад на 3–4 минуты. Представьте тему, прокомментируйте цифры, разберите тезис и сделайте обоснованный вывод. После доклада экзаменатор задаст один-два вопроса.',
        situationDe: `Thema: Weniger Fleisch – Privatsache oder politische Aufgabe?

Der Fleischkonsum pro Kopf ist in Deutschland innerhalb von etwa zehn Jahren von rund 60 kg auf gut 50 kg pro Jahr gesunken. Im selben Zeitraum hat sich der Umsatz mit pflanzlichen Fleischalternativen mehr als verdoppelt – ihr Marktanteil liegt aber weiterhin im niedrigen einstelligen Prozentbereich.

These: „Ohne staatliche Lenkung – etwa durch höhere Steuern auf Fleisch – wird sich der Wandel viel zu langsam vollziehen.“`,
        points: [
          'Führen Sie in das Thema ein und nennen Sie die Gliederung Ihres Vortrags.',
          'Erläutern und interpretieren Sie die Zahlen.',
          'Nennen Sie Gründe für das veränderte Konsumverhalten.',
          'Setzen Sie sich kritisch mit der These auseinander (Argumente und Gegenargumente).',
          'Ziehen Sie ein Fazit und formulieren Sie Ihre eigene Position.',
        ],
        aiRole:
          'Sie sind Prüfer in der mündlichen Prüfung Goethe-Zertifikat C1. Sie hören dem Vortrag aufmerksam zu, ohne zu unterbrechen. Danach stellen Sie ein bis zwei anspruchsvolle Rückfragen, z. B. zur sozialen Gerechtigkeit einer Fleischsteuer oder zur Situation in anderen Ländern. Sie sprechen gepflegtes Standarddeutsch.',
        opener:
          'Guten Tag. Ihr Thema ist der Fleischkonsum und die Frage, welche Rolle der Staat dabei spielen sollte. Bitte beginnen Sie – Sie haben etwa drei bis vier Minuten Zeit.',
        minutes: 6,
        maxPoints: 50,
      },
      {
        teil: 2,
        mode: 'discussion',
        instructionDe:
          'Diskutieren Sie mit Ihrer Gesprächspartnerin über die folgende Frage (ca. 5–6 Minuten). Vertreten Sie Ihren Standpunkt, begründen Sie ihn, gehen Sie auf die Argumente Ihrer Partnerin ein und versuchen Sie, am Ende zu einem Ergebnis zu kommen.',
        instructionRu:
          'Обсудите с партнёршей следующий вопрос (около 5–6 минут). Отстаивайте и обосновывайте свою позицию, реагируйте на её аргументы и постарайтесь в конце прийти к результату.',
        situationDe:
          'Sollte die Vier-Tage-Woche bei vollem Lohnausgleich zum gesetzlichen Regelfall werden?',
        points: [
          'Gesundheit, Motivation und Produktivität der Beschäftigten',
          'Folgen für Unternehmen, Branchen mit Schichtbetrieb und den Fachkräftemangel',
          'Gesetzliche Regelung oder freiwillige Vereinbarungen',
          'Mögliche Kompromisse (z. B. Pilotphasen, Wahlmodelle)',
        ],
        aiRole:
          'Sie sind Gesprächspartnerin in der mündlichen Prüfung Goethe-Zertifikat C1. Sie vertreten konsequent die Gegenposition: Eine gesetzlich vorgeschriebene Vier-Tage-Woche bei vollem Lohn ist der falsche Weg. Argumente: Fachkräftemangel verschärft sich, Pflege, Handwerk und Gastronomie können nicht einfach verkürzen, kleine Betriebe werden überfordert, Studien stammen oft aus Bürojobs. Sie sprechen idiomatisches C1-Deutsch (z. B. „das ist leichter gesagt als getan“, „man darf das Kind nicht mit dem Bade ausschütten“, „das steht auf einem anderen Blatt“), widersprechen höflich, aber bestimmt, und fragen nach Belegen. Wenn Ihr Gegenüber überzeugend argumentiert, zeigen Sie gegen Ende Kompromissbereitschaft (z. B. freiwillige Modelle, Pilotprojekte). Halten Sie Ihre Beiträge kurz (2–4 Sätze).',
        opener:
          'Ich sage es ganz offen: Eine Vier-Tage-Woche per Gesetz für alle halte ich für realitätsfern. Im Büro mag das funktionieren, aber wer pflegt dann am Freitag die Patienten? Was meinen Sie?',
        minutes: 6,
        maxPoints: 50,
      },
    ],
  },
};
