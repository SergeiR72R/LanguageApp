import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'b2-exam-3',
  level: 'B2',
  title: 'Übungstest B2 – 3',
  lesen: {
    minutes: 65,
    parts: [
      // ───────────────────────── Lesen Teil 1 ─────────────────────────
      {
        teil: 1,
        minutes: 18,
        title: 'Studium oder Ausbildung?',
        textType: 'Meinungen',
        texts: [
          {
            label: 'Nadine',
            body: `Als Personalleiterin eines Maschinenbauunternehmens erlebe ich, dass wir händeringend Auszubildende suchen – und jedes Jahr bekommen wir weniger Bewerbungen. Viele Eltern wollen, dass ihre Kinder unbedingt studieren, weil sie glauben, nur so Karriere machen zu können. Das stimmt aber längst nicht mehr. Bei uns haben mehrere Abteilungsleiter mit einer Ausbildung angefangen und sich dann über Weiterbildungen hochgearbeitet. Wir finanzieren unseren Azubis sogar den Meister oder ein berufsbegleitendes Studium. Ich wünsche mir, dass Schulen viel deutlicher zeigen, welche Möglichkeiten eine Ausbildung bietet.`,
          },
          {
            label: 'Felix',
            body: `Nach dem Abitur habe ich mich für Informatik eingeschrieben, weil alle meine Freunde studiert haben. Nach drei Semestern war mir klar: Das ist nichts für mich. Die Vorlesungen waren mir viel zu theoretisch, ich wollte etwas mit den Händen machen. Der Abbruch fühlte sich damals wie eine Niederlage an, und meine Eltern waren ziemlich enttäuscht. Heute arbeite ich als Mechatroniker und bin froh über meine Entscheidung. Rückblickend hätte ich vor dem Studium ein paar Praktika machen sollen, dann hätte ich mir diesen Umweg erspart.`,
          },
          {
            label: 'Katharina',
            body: `Die Frage „Studium oder Ausbildung?“ lässt sich nicht pauschal beantworten. Entscheidend ist, was zu den Interessen und Stärken eines jungen Menschen passt. In meinen Beratungen erlebe ich oft, dass sich Jugendliche eher nach dem Ansehen eines Berufs richten als danach, was ihnen wirklich Spaß macht. Ich rate dazu, sich nicht unter Druck setzen zu lassen. Ein Studium nach der Ausbildung ist heute ebenso möglich wie eine Ausbildung nach einem abgebrochenen Studium. Kein Weg ist eine Sackgasse.`,
          },
          {
            label: 'Murat',
            body: `Ich bin der Erste in meiner Familie, der studiert hat, und ich bereue es keine Sekunde. Das Bauingenieurstudium hat mir nicht nur Fachwissen vermittelt, sondern mir auch beigebracht, mich selbstständig in komplexe Themen einzuarbeiten. Finanziell lohnt es sich auf lange Sicht ebenfalls: Akademiker verdienen im Durchschnitt deutlich mehr. Leicht war es allerdings nicht, denn meine Eltern konnten mich nicht unterstützen, und ich musste nebenher jobben. Ohne mein Stipendium hätte ich es vermutlich nicht geschafft.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Texte. Zu welcher Person passen die Aussagen? Die Personen können mehrmals gewählt werden.',
            instructionRu:
              'Прочитайте тексты. К какому человеку относятся высказывания? Одного и того же человека можно выбирать несколько раз.',
            options: ['Nadine', 'Felix', 'Katharina', 'Murat'],
            items: [
              {
                kind: 'match',
                prompt: 'Wer hätte vor der Entscheidung mehr praktische Erfahrungen sammeln sollen?',
                answer: 1,
                explanationRu: 'Феликс: «hätte ich vor dem Studium ein paar Praktika machen sollen».',
              },
              {
                kind: 'match',
                prompt: 'Wer war auf finanzielle Förderung angewiesen?',
                answer: 3,
                explanationRu: 'Мурат: без стипендии он бы, вероятно, не справился.',
              },
              {
                kind: 'match',
                prompt: 'Wer betont, dass man den eingeschlagenen Weg später noch ändern kann?',
                answer: 2,
                explanationRu: 'Катарина: учёба после профобучения и наоборот возможны – «Kein Weg ist eine Sackgasse».',
              },
              {
                kind: 'match',
                prompt: 'Wer kritisiert die Erwartungen vieler Eltern?',
                answer: 0,
                explanationRu: 'Надин: родители хотят, чтобы дети обязательно учились в вузе, считая это единственным путём к карьере.',
              },
              {
                kind: 'match',
                prompt: 'Wer hat mit der eigenen Entscheidung die Familie enttäuscht?',
                answer: 1,
                explanationRu: 'Феликс: «meine Eltern waren ziemlich enttäuscht».',
              },
              {
                kind: 'match',
                prompt: 'Wer hebt die besseren Verdienstmöglichkeiten hervor?',
                answer: 3,
                explanationRu: 'Мурат: «Akademiker verdienen im Durchschnitt deutlich mehr».',
              },
              {
                kind: 'match',
                prompt: 'Wer fordert, dass Schulen besser über Ausbildungsberufe informieren?',
                answer: 0,
                explanationRu: 'Надин: школы должны яснее показывать возможности профессионального обучения.',
              },
              {
                kind: 'match',
                prompt: 'Wer beobachtet, dass bei der Berufswahl das Prestige zu wichtig genommen wird?',
                answer: 2,
                explanationRu: 'Катарина: подростки ориентируются на престиж профессии («Ansehen»), а не на интерес.',
              },
              {
                kind: 'match',
                prompt: 'Wer hat sich bei der Entscheidung nach dem eigenen Umfeld gerichtet?',
                answer: 1,
                explanationRu: 'Феликс записался на информатику, «weil alle meine Freunde studiert haben».',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 2 ─────────────────────────
      {
        teil: 2,
        minutes: 12,
        title: 'Nachrichtenmüdigkeit',
        textType: 'Zeitungsartikel',
        texts: [
          {
            heading: 'Lieber nichts wissen? Warum immer mehr Menschen die Nachrichten meiden',
            body: `Immer mehr Menschen gehen den Nachrichten bewusst aus dem Weg. Das ist das Ergebnis einer internationalen Studie, für die jedes Jahr fast 100.000 Personen in über 40 Ländern befragt werden. In Deutschland gab zuletzt rund jeder Dritte an, Nachrichten zumindest gelegentlich zu meiden. Vor zehn Jahren war es nicht einmal jeder Fünfte. Fachleute sprechen von „Nachrichtenmüdigkeit“.

Die Gründe, die die Befragten nennen, sind vielfältig. Am häufigsten wird angegeben, dass Nachrichten schlechte Laune machen. Kriege, Krisen, Katastrophen – wer morgens die Nachrichten-App öffnet, startet selten gut gelaunt in den Tag. Viele fühlen sich außerdem von der schieren Menge an Informationen überfordert. Ein weiterer, oft unterschätzter Grund ist das Gefühl der Machtlosigkeit. „Wenn Menschen den Eindruck haben, ohnehin nichts ändern zu können, wenden sie sich ab“, erklärt die Kommunikationswissenschaftlerin Prof. Miriam Hellwig.

Für eine Demokratie ist diese Entwicklung nicht ungefährlich. Wer sich nicht informiert, kann politische Entscheidungen schlechter beurteilen und ist anfälliger für Falschinformationen, die sich in sozialen Netzwerken verbreiten. Hellwig warnt dennoch davor, die Nachrichtenvermeider pauschal zu verurteilen. „Viele von ihnen sind keineswegs desinteressiert. Sie schützen sich vor einer Flut von Meldungen, die sie emotional belastet.“ Tatsächlich zeigt die Studie, dass die meisten Vermeider Nachrichten nicht vollständig ignorieren, sondern ihren Konsum nur einschränken, zum Beispiel indem sie Push-Benachrichtigungen abschalten.

Einige Redaktionen haben begonnen, auf diese Entwicklung zu reagieren. Unter dem Stichwort „konstruktiver Journalismus“ berichten sie nicht nur über Probleme, sondern auch über mögliche Lösungen. Eine Reportage über Wohnungsnot endet dann etwa nicht mit düsteren Zahlen, sondern stellt eine Stadt vor, die das Problem erfolgreich angegangen ist. Kritiker befürchten, dass auf diese Weise Probleme verharmlost werden könnten. Befürworter halten dagegen, es gehe nicht um Schönfärberei, sondern um ein vollständigeres Bild der Wirklichkeit.

Erste Erfahrungen sind ermutigend: Leserinnen und Leser verbringen mit lösungsorientierten Artikeln mehr Zeit und teilen sie häufiger. Hellwig rät aber auch jedem Einzelnen zu einem bewussteren Umgang mit Nachrichten: „Es ist sinnvoller, sich einmal am Tag gründlich zu informieren, als ständig Eilmeldungen zu lesen.“`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Was zeigt die Studie für Deutschland?',
                options: [
                  'Jeder Fünfte liest überhaupt keine Nachrichten mehr.',
                  'Der Anteil der Menschen, die Nachrichten meiden, ist gestiegen.',
                  'In Deutschland meiden mehr Menschen Nachrichten als in anderen Ländern.',
                ],
                answer: 1,
                explanationRu: 'Сейчас примерно каждый третий, десять лет назад – меньше каждого пятого.',
              },
              {
                kind: 'mc',
                question: 'Welcher Grund wird am häufigsten genannt?',
                options: [
                  'Nachrichten verschlechtern die Stimmung.',
                  'Es gibt zu viele Informationen.',
                  'Man kann ohnehin nichts verändern.',
                ],
                answer: 0,
                explanationRu: '«Am häufigsten wird angegeben, dass Nachrichten schlechte Laune machen». Остальные причины – дополнительные.',
              },
              {
                kind: 'mc',
                question: 'Wie beurteilt Prof. Hellwig die Menschen, die Nachrichten meiden?',
                options: [
                  'Sie seien politisch desinteressiert.',
                  'Sie seien besonders leichtgläubig.',
                  'Viele wollten sich vor emotionaler Belastung schützen.',
                ],
                answer: 2,
                explanationRu: '«Sie schützen sich vor einer Flut von Meldungen, die sie emotional belastet».',
              },
              {
                kind: 'mc',
                question: 'Die meisten Nachrichtenvermeider …',
                options: [
                  'verzichten vollständig auf Nachrichten.',
                  'schränken ihren Nachrichtenkonsum ein.',
                  'informieren sich nur noch in sozialen Netzwerken.',
                ],
                answer: 1,
                explanationRu: 'Они не игнорируют новости полностью, а ограничивают потребление, например отключают push-уведомления.',
              },
              {
                kind: 'mc',
                question: 'Konstruktiver Journalismus …',
                options: [
                  'berichtet ausschließlich über positive Ereignisse.',
                  'verzichtet auf Zahlen und Statistiken.',
                  'zeigt neben Problemen auch Lösungsansätze.',
                ],
                answer: 2,
                explanationRu: 'Сообщает «nicht nur über Probleme, sondern auch über mögliche Lösungen».',
              },
              {
                kind: 'mc',
                question: 'Was rät Prof. Hellwig?',
                options: [
                  'Sich seltener, aber dafür gründlich zu informieren.',
                  'Push-Benachrichtigungen einzuschalten.',
                  'Nur noch lösungsorientierte Artikel zu lesen.',
                ],
                answer: 0,
                explanationRu: '«…sich einmal am Tag gründlich zu informieren, als ständig Eilmeldungen zu lesen».',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 3 ─────────────────────────
      {
        teil: 3,
        minutes: 12,
        title: 'Die Rückkehr des Wolfes',
        textType: 'Zeitschriftenartikel',
        texts: [
          {
            heading: 'Willkommen zurück – oder doch nicht?',
            body: `Mehr als hundert Jahre lang galt der Wolf in Deutschland als ausgerottet. Um das Jahr 2000 tauchten dann in der Lausitz, im Osten Sachsens, die ersten Tiere wieder auf. Sie waren aus Polen eingewandert. [1] Heute leben nach Angaben der Behörden wieder mehrere Hundert Rudel im Land, vor allem im Norden und Osten.

Für Naturschützer ist das ein großer Erfolg. Der Wolf steht unter strengem Schutz und darf nicht gejagt werden. [2] Wölfe erbeuten vor allem kranke und schwache Tiere und tragen so dazu bei, dass Reh- und Wildschweinbestände gesund bleiben.

Doch nicht alle freuen sich über die Rückkehr. Besonders Schäfer und Landwirte klagen über Angriffe auf ihre Tiere. [3] In manchen Regionen fürchten Weidetierhalter deshalb um ihre Existenz.

Um Konflikte zu verringern, unterstützen die Bundesländer den Herdenschutz finanziell. [4] Auch speziell ausgebildete Herdenschutzhunde haben sich in vielen Fällen bewährt. Allerdings sind solche Maßnahmen mit viel Arbeit verbunden, und nicht jede Weide lässt sich ohne Weiteres einzäunen, etwa an Deichen oder in den Bergen.

Für Menschen ist der Wolf nach Einschätzung von Fachleuten kaum gefährlich. [5] Begegnet man doch einmal einem Wolf, sollte man stehen bleiben, sich groß machen und laut sprechen. Weglaufen ist dagegen keine gute Idee.

Wie es mit dem Wolf weitergeht, wird derzeit kontrovers diskutiert. In der Politik gibt es Bestrebungen, den Schutzstatus zu lockern, damit einzelne Tiere, die wiederholt Herden angreifen, leichter abgeschossen werden können. [6] Klar ist nur: Der Wolf wird bleiben – und Mensch und Tier müssen lernen, miteinander auszukommen.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
            instructionRu:
              'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
            options: [
              'Wölfe meiden Menschen in der Regel und ziehen sich zurück, sobald sie sie bemerken.',
              'Gefördert werden zum Beispiel hohe Elektrozäune, die Wölfe nur schwer überwinden können.',
              'Seitdem hat sich die Population erstaunlich schnell ausgebreitet.',
              'Allein im vergangenen Jahr wurden mehrere Tausend Schafe und Ziegen getötet oder verletzt.',
              'Naturschutzverbände kritisieren das scharf, während viele Landwirte eine solche Änderung für längst überfällig halten.',
              'Viele Biologen betonen außerdem seine wichtige Rolle im Ökosystem.',
              'Deshalb ist es verboten, Wölfe in Zoos oder Wildparks zu halten.',
              'Im Winter ziehen die Rudel deshalb regelmäßig bis in die Innenstädte.',
            ],
            items: [
              {
                kind: 'match',
                prompt: 'Lücke 1',
                answer: 2,
                explanationRu: '«Seitdem» = с 2000 года; дальше – сегодня несколько сотен стай.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 2',
                answer: 5,
                explanationRu: 'Роль в экосистеме объясняется в следующем предложении: волки охотятся на больных и слабых животных.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 3',
                answer: 3,
                explanationRu: 'Конкретизация жалоб пастухов на нападения; дальше – страх за существование хозяйств.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 4',
                answer: 1,
                explanationRu: 'Пример финансируемой защиты стад; следующее предложение начинается с «Auch … Herdenschutzhunde».',
              },
              {
                kind: 'match',
                prompt: 'Lücke 5',
                answer: 0,
                explanationRu: 'Почему волк почти не опасен: он избегает людей. Далее – «Begegnet man doch einmal…».',
              },
              {
                kind: 'match',
                prompt: 'Lücke 6',
                answer: 4,
                explanationRu: '«das» / «eine solche Änderung» = ослабление охранного статуса; противоположные реакции защитников природы и фермеров.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 4 ─────────────────────────
      {
        teil: 4,
        minutes: 15,
        title: 'Brauchen wir noch Bargeld?',
        textType: 'Leserkommentare',
        texts: [
          {
            label: 'a',
            heading: 'Gerda, 71',
            body: `Ich bezahle fast alles bar, weil ich so den Überblick behalte. Wenn das Geld im Portemonnaie weg ist, ist es weg. Mit der Karte verliere ich schnell das Gefühl dafür, wie viel ich im Monat schon ausgegeben habe. Wer das Bargeld abschafft, nimmt Menschen wie mir ein wichtiges Hilfsmittel.`,
          },
          {
            label: 'b',
            heading: 'Tim, Café-Besitzer',
            body: `Für mein Café wäre ein Ende des Bargelds eine Erleichterung. Münzen und Scheine müssen gezählt, zur Bank gebracht und versichert werden – das kostet Zeit und Geld. Andererseits zahle ich für jede Kartenzahlung eine Gebühr an den Zahlungsdienstleister. Ideal wäre es, wenn der Gesetzgeber diese Gebühren begrenzen würde.`,
          },
          {
            label: 'c',
            heading: 'Jasmin, IT-Sicherheitsexpertin',
            body: `Was passiert, wenn bei einem Stromausfall oder einem Hackerangriff kein Kartenterminal mehr funktioniert? Wer dann kein Bargeld hat, kann nicht einmal ein Brot kaufen. Ein Land, das vollständig auf digitale Zahlungen setzt, macht sich verwundbar.`,
          },
          {
            label: 'd',
            heading: 'Oliver, Student',
            body: `Ich hatte seit Monaten kein Bargeld mehr in der Hand. Alles läuft über mein Handy, sogar wenn ich Freunden Geld fürs Kino zurückgebe. Ehrlich gesagt verstehe ich die ganze Aufregung nicht – in Skandinavien funktioniert das doch auch.`,
          },
          {
            label: 'e',
            heading: 'Petra, Datenschützerin',
            body: `Jede Kartenzahlung hinterlässt eine Spur. Banken und Unternehmen wissen dann, wann ich wo was gekauft habe. Bargeld ist die letzte Möglichkeit, anonym zu bezahlen, und diese Freiheit sollte man nicht leichtfertig aufgeben.`,
          },
          {
            label: 'f',
            heading: 'Uwe, Sozialarbeiter',
            body: `Viele meiner Klienten haben kein Bankkonto oder bekommen keine Kreditkarte. Für wohnungslose Menschen ist Bargeld oft die einzige Möglichkeit, überhaupt am Wirtschaftsleben teilzunehmen. Bevor man über eine Abschaffung redet, müsste sichergestellt sein, dass wirklich jeder Zugang zu digitalen Zahlungsmitteln hat.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sie lesen in einer Zeitschrift Kommentare zu der Frage, ob das Bargeld abgeschafft werden sollte. Welcher Kommentar passt zu welcher Aussage? Ein Kommentar passt zu keiner Aussage.',
            instructionRu:
              'В журнале вы читаете комментарии к вопросу, нужно ли отменить наличные деньги. Какой комментарий подходит к какому высказыванию? Один комментарий лишний.',
            options: ['a – Gerda', 'b – Tim', 'c – Jasmin', 'd – Oliver', 'e – Petra', 'f – Uwe'],
            items: [
              {
                kind: 'match',
                prompt: 'Diese Person befürchtet, dass Daten über das Kaufverhalten gesammelt werden.',
                answer: 4,
                explanationRu: 'Петра: каждая оплата картой оставляет след, наличные – последний способ платить анонимно.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person wünscht sich eine gesetzliche Regelung.',
                answer: 1,
                explanationRu: 'Тим: законодатель должен ограничить комиссии за оплату картой.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person warnt vor Problemen bei technischen Störungen.',
                answer: 2,
                explanationRu: 'Ясмин: при отключении электричества или хакерской атаке терминалы не работают.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person weist auf Menschen hin, die kein Konto haben.',
                answer: 5,
                explanationRu: 'Уве: у многих его клиентов нет банковского счёта.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person nutzt Bargeld, um ihre Ausgaben zu kontrollieren.',
                answer: 0,
                explanationRu: 'Герда: с наличными она сохраняет обзор своих расходов.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 5 ─────────────────────────
      {
        teil: 5,
        minutes: 8,
        title: 'Hausordnung des Studierendenwohnheims',
        textType: 'Hausordnung',
        texts: [
          {
            label: '§ 1',
            body: `Die Gemeinschaftsküchen stehen allen Bewohnerinnen und Bewohnern des jeweiligen Stockwerks zur Verfügung. Geschirr ist nach der Benutzung sofort zu spülen und wegzuräumen. Lebensmittel sind in den zugewiesenen Fächern des Kühlschranks zu lagern und mit Namen zu versehen. Einmal im Monat wird der Kühlschrank geleert; nicht beschriftete Lebensmittel werden dabei entsorgt.`,
          },
          {
            label: '§ 2',
            body: `Zwischen 22 und 7 Uhr gilt Nachtruhe. In dieser Zeit ist Musik nur in Zimmerlautstärke erlaubt. Feiern in den Gemeinschaftsräumen sind spätestens eine Woche vorher bei der Hausverwaltung anzumelden und müssen um Mitternacht beendet sein.`,
          },
          {
            label: '§ 3',
            body: `Übernachtungsgäste sind willkommen, dürfen sich aber höchstens drei Nächte am Stück im Wohnheim aufhalten. Eine Untervermietung des Zimmers, auch für kurze Zeit, ist ohne schriftliche Genehmigung der Verwaltung nicht gestattet.`,
          },
          {
            label: '§ 4',
            body: `Schäden an den Zimmern oder an Gemeinschaftseinrichtungen sind unverzüglich dem Hausmeister zu melden. Für Schäden, die durch unsachgemäße Nutzung entstehen, haftet die verursachende Person. Reparaturen dürfen nicht selbst durchgeführt werden.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sie ziehen in ein Studierendenwohnheim und lesen die Hausordnung. Welche Überschrift passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
            instructionRu:
              'Вы переезжаете в студенческое общежитие и читаете правила проживания. Какой заголовок подходит к какому разделу? Два заголовка лишние.',
            options: [
              'Besuch und Untervermietung',
              'Mülltrennung und Recycling',
              'Meldung von Schäden',
              'Nutzung der Küchen',
              'Ruhezeiten und Feiern',
              'Kündigung des Mietvertrags',
            ],
            items: [
              {
                kind: 'match',
                prompt: '§ 1',
                answer: 3,
                explanationRu: 'Общие кухни, посуда, холодильник.',
              },
              {
                kind: 'match',
                prompt: '§ 2',
                answer: 4,
                explanationRu: 'Ночной покой с 22 до 7 и правила проведения вечеринок.',
              },
              {
                kind: 'match',
                prompt: '§ 3',
                answer: 0,
                explanationRu: 'Гости на ночь (не более трёх ночей) и запрет субаренды без разрешения.',
              },
              {
                kind: 'match',
                prompt: '§ 4',
                answer: 2,
                explanationRu: 'О повреждениях нужно сразу сообщать завхозу; самостоятельный ремонт запрещён.',
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
          'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
        instructionRu:
          'Вы услышите пять коротких текстов. Каждый текст звучит два раза. К каждому тексту – два задания. Выберите правильный ответ в каждом задании.',
        segments: [
          {
            title: 'Nachricht aus der Arztpraxis',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: `Guten Tag, hier ist die Praxis Dr. Seidel. Diese Nachricht ist für Frau Nowak. Ihre Blutwerte sind da, und es ist alles in Ordnung – Sie müssen sich also keine Sorgen machen. Frau Dr. Seidel möchte trotzdem kurz mit Ihnen über die Ergebnisse sprechen, das geht aber auch telefonisch. Ihre Telefonsprechstunde ist montags und mittwochs zwischen 12 und 13 Uhr. Bitte rufen Sie in dieser Zeit an. Und noch etwas: Ihr Rezept für die Augentropfen liegt bei uns an der Anmeldung, Sie können es jederzeit während der Öffnungszeiten abholen.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Frau Nowak muss wegen der Blutwerte in die Praxis kommen.',
                    answer: false,
                    explanationRu: 'Поговорить с врачом можно по телефону («das geht aber auch telefonisch»).',
                  },
                  {
                    kind: 'mc',
                    question: 'Was kann Frau Nowak an der Anmeldung abholen?',
                    options: ['Ihre Laborergebnisse.', 'Ein Rezept.', 'Eine Überweisung.'],
                    answer: 1,
                    explanationRu: 'Рецепт на глазные капли лежит в регистратуре.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Bibliothek am Sonntag',
            kind: 'monolog',
            situation: 'Sie hören eine Meldung im Lokalradio.',
            playCount: 2,
            text: `Die Stadtbibliothek Münster wird ab dem kommenden Monat auch sonntags geöffnet sein – zunächst im Rahmen eines einjährigen Pilotprojekts. Möglich wird das durch moderne Technik: Am Sonntag ist kein Personal vor Ort, die Besucher melden sich mit ihrem Bibliotheksausweis am Eingang an und können Bücher selbst ausleihen und zurückgeben. Die Bibliothek reagiert damit auf eine Umfrage, in der sich viele Nutzer längere Öffnungszeiten gewünscht hatten. Kinder unter 14 Jahren dürfen die Bibliothek sonntags allerdings nur in Begleitung eines Erwachsenen besuchen.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Das Sonntagsangebot ist zunächst zeitlich begrenzt.',
                    answer: true,
                    explanationRu: 'Это пилотный проект на один год («einjähriges Pilotprojekt»).',
                  },
                  {
                    kind: 'mc',
                    question: 'Was gilt am Sonntag?',
                    options: [
                      'Bibliothekare beraten die Besucher.',
                      'Bücher können nicht zurückgegeben werden.',
                      'Kinder unter 14 dürfen nur mit einem Erwachsenen kommen.',
                    ],
                    answer: 2,
                    explanationRu: 'Персонала нет, книги можно брать и сдавать самостоятельно; дети до 14 – только со взрослым.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Durchsage im Supermarkt',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage in einem Supermarkt.',
            playCount: 2,
            text: `Liebe Kundinnen und Kunden, aufgrund eines technischen Defekts können wir an den Kassen eins bis vier zurzeit leider keine Kartenzahlungen annehmen. Bitte nutzen Sie für Zahlungen mit Karte die Kassen im Untergeschoss oder die Selbstbedienungskassen am Ausgang. Bargeldzahlungen sind an allen Kassen weiterhin möglich. Wir arbeiten mit Hochdruck an der Behebung des Problems. Als Dankeschön für Ihr Verständnis erhalten Sie heute in unserer Bäckerei-Ecke zu jedem Kaffee ein Croissant gratis.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'An allen Kassen kann man bar bezahlen.',
                    answer: true,
                    explanationRu: '«Bargeldzahlungen sind an allen Kassen weiterhin möglich».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wo kann man im Moment mit Karte bezahlen?',
                    options: [
                      'An den Selbstbedienungskassen.',
                      'An den Kassen eins bis vier.',
                      'Nur in der Bäckerei-Ecke.',
                    ],
                    answer: 0,
                    explanationRu: 'Картой можно платить на кассах в цокольном этаже или на кассах самообслуживания у выхода.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Konzert abgesagt',
            kind: 'dialog',
            speakers: { A: 'Max', B: 'Clara' },
            situation: 'Sie hören ein Gespräch zwischen zwei Freunden.',
            playCount: 2,
            text: `A: Hallo Clara, hast du schon gehört? Das Konzert von „Nordlicht“ am Freitag ist abgesagt worden.
B: Was? Ach nein, ich hatte mich so darauf gefreut! Warum denn?
A: Der Sänger ist krank. Aber es gibt einen Ersatztermin, Anfang Dezember. Die Tickets bleiben gültig.
B: Anfang Dezember bin ich leider auf Dienstreise in Wien. Kann man die Karten auch zurückgeben?
A: Ja, bis Ende des Monats bekommt man das Geld zurück, man muss es aber online beantragen. Oder du verkaufst deine Karte einfach weiter. Meine Kollegin sucht noch eine.
B: Super, dann frag sie doch bitte. Das ist einfacher, als mich durch das Online-Formular zu kämpfen.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Das Konzert findet am Freitag nicht statt.',
                    answer: true,
                    explanationRu: 'Концерт отменён, потому что певец заболел.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was möchte Clara mit ihrer Karte machen?',
                    options: [
                      'Sie online zurückgeben.',
                      'Sie an eine Bekannte von Max verkaufen.',
                      'Damit zum Ersatztermin gehen.',
                    ],
                    answer: 1,
                    explanationRu: 'Коллега Макса ищет билет – Клара просит спросить её; это проще онлайн-формы.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Verbrauchertipp',
            kind: 'monolog',
            situation: 'Sie hören einen Verbrauchertipp im Radio.',
            playCount: 2,
            text: `In unserer Rubrik „Geld und Recht“ geht es heute um Online-Bestellungen. Wer im Internet etwas kauft, hat in der Regel ein Widerrufsrecht von 14 Tagen. Das heißt: Sie können die Ware ohne Angabe von Gründen zurückschicken. Die Frist beginnt aber nicht mit der Bestellung, sondern erst, wenn die Ware bei Ihnen angekommen ist. Wichtig: Ein Widerruf muss ausdrücklich erklärt werden – eine E-Mail genügt. Das Paket einfach zurückzuschicken, reicht rechtlich gesehen nicht immer aus. Ob Sie die Rücksendekosten selbst tragen müssen, hängt von den Bedingungen des Händlers ab.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Die Widerrufsfrist beginnt mit dem Tag der Bestellung.',
                    answer: false,
                    explanationRu: 'Срок начинается, только когда товар получен.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie sollte man einen Widerruf erklären?',
                    options: [
                      'Man schickt die Ware einfach zurück.',
                      'Man ruft beim Händler an.',
                      'Man schreibt zum Beispiel eine E-Mail.',
                    ],
                    answer: 2,
                    explanationRu: 'Отказ нужно заявить явно – достаточно e-mail; просто отправить посылку не всегда достаточно.',
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
          'Sie hören ein Interview. Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите интервью. Интервью звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Hitze in der Stadt',
            kind: 'dialog',
            speakers: { A: 'Moderator', B: 'Dr. Carola Stein, Stadtklimatologin' },
            situation: 'Sie hören im Radio ein Interview mit einer Expertin für Stadtklima.',
            playCount: 2,
            text: `A: Der Sommer war wieder einmal extrem heiß, in vielen Städten wurden Rekordtemperaturen gemessen. Wie können sich unsere Städte darauf einstellen? Darüber spreche ich mit Dr. Carola Stein, die das Stadtklima an einer Technischen Universität erforscht. Frau Stein, warum ist es in der Stadt eigentlich so viel heißer als auf dem Land?
B: Das hat vor allem mit den Materialien zu tun. Beton, Asphalt und Ziegel speichern tagsüber die Wärme und geben sie nachts wieder ab. Deshalb kühlen Städte nachts kaum ab. Hinzu kommt, dass dichte Bebauung den Wind bremst und es wenige Pflanzen gibt, die durch Verdunstung kühlen. In großen Städten kann der Unterschied zum Umland nachts bis zu zehn Grad betragen.
A: Ist das nur unangenehm oder auch gefährlich?
B: Es ist definitiv gefährlich. Gerade die warmen Nächte sind ein Problem, weil sich der Körper nicht erholen kann. Ältere Menschen, chronisch Kranke und kleine Kinder sind besonders gefährdet. In heißen Sommern sterben in Deutschland mehrere Tausend Menschen zusätzlich an den Folgen der Hitze – das wird oft unterschätzt.
A: Was können Städte tun?
B: Am wirksamsten ist mehr Grün: Bäume spenden Schatten und kühlen die Umgebung. Auch begrünte Dächer und Fassaden helfen. Wichtig ist außerdem, Frischluftschneisen freizuhalten, also Flächen, über die kühle Luft aus dem Umland in die Stadt strömen kann. Leider wird genau dort oft gebaut, weil Wohnraum knapp ist.
A: Also ein Zielkonflikt.
B: Ja, ganz klar. Wir brauchen Wohnungen, aber wir dürfen dabei das Klima nicht vergessen. Ich plädiere dafür, eher in die Höhe zu bauen und dafür mehr Freiflächen zu lassen, statt jede Lücke zuzubauen.
A: Manche Städte setzen auf helle Oberflächen. Bringt das etwas?
B: Durchaus. Helle Straßenbeläge oder Dächer reflektieren mehr Sonnenlicht und heizen sich weniger auf. In einigen amerikanischen Städten hat man damit gute Erfahrungen gemacht. Man muss aber aufpassen, dass das reflektierte Licht Fußgänger nicht blendet oder die Hitze nicht einfach an die Hauswände weitergibt.
A: Und was kann jeder Einzelne tun?
B: Sehr viel! Tagsüber die Fenster geschlossen halten und die Rollläden herunterlassen, nachts dagegen kräftig lüften. Viel trinken, natürlich. Und, das ist mir besonders wichtig: sich um ältere Nachbarn kümmern. Einfach mal klingeln und fragen, ob alles in Ordnung ist. Viele ältere Menschen merken nämlich gar nicht, dass sie zu wenig trinken.
A: Frau Stein, vielen Dank für das Gespräch.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Warum kühlen Städte nachts kaum ab?',
                    options: [
                      'Weil dort mehr Autos fahren.',
                      'Weil Baumaterialien die Wärme speichern und nachts abgeben.',
                      'Weil der Wind in der Stadt stärker ist.',
                    ],
                    answer: 1,
                    explanationRu: 'Бетон, асфальт и кирпич накапливают тепло днём и отдают ночью; ветер застройка, наоборот, тормозит.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt Frau Stein über die Folgen der Hitze?',
                    options: [
                      'Die Gefahr wird oft unterschätzt.',
                      'Vor allem junge Erwachsene sind betroffen.',
                      'Warme Nächte sind weniger problematisch als heiße Tage.',
                    ],
                    answer: 0,
                    explanationRu: 'Тысячи дополнительных смертей – «das wird oft unterschätzt».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sind Frischluftschneisen?',
                    options: [
                      'Parks in der Innenstadt.',
                      'Begrünte Dächer und Fassaden.',
                      'Freie Flächen, über die kühle Luft in die Stadt gelangt.',
                    ],
                    answer: 2,
                    explanationRu: '«Flächen, über die kühle Luft aus dem Umland in die Stadt strömen kann».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie möchte Frau Stein den Konflikt zwischen Wohnungsbau und Klima lösen?',
                    options: [
                      'Höher bauen und dafür mehr Flächen frei lassen.',
                      'Weniger Wohnungen bauen.',
                      'Nur noch am Stadtrand bauen.',
                    ],
                    answer: 0,
                    explanationRu: '«eher in die Höhe zu bauen und dafür mehr Freiflächen zu lassen».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt sie über helle Oberflächen?',
                    options: [
                      'Sie haben keine Wirkung.',
                      'Sie sind nützlich, können aber auch Nachteile haben.',
                      'Sie werden in Deutschland bereits überall eingesetzt.',
                    ],
                    answer: 1,
                    explanationRu: 'Они помогают («Durchaus»), но могут слепить пешеходов или нагревать стены домов.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was ist Frau Stein bei ihren Tipps besonders wichtig?',
                    options: [
                      'Tagsüber die Fenster zu öffnen.',
                      'Eine Klimaanlage zu kaufen.',
                      'Sich um ältere Menschen in der Nachbarschaft zu kümmern.',
                    ],
                    answer: 2,
                    explanationRu: '«das ist mir besonders wichtig: sich um ältere Nachbarn kümmern».',
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
          'Sie hören eine Diskussion. Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen den Personen zu.',
        instructionRu:
          'Вы услышите дискуссию. Дискуссия звучит один раз. Кто что говорит? Соотнесите высказывания с участниками.',
        segments: [
          {
            title: 'Zu viele Touristen?',
            kind: 'discussion',
            speakers: {
              A: 'Moderatorin Katja Brandt',
              B: 'Stefan Haller, Hotelier',
              C: 'Elena Marquardt, Bürgerinitiative „Altstadt lebt“',
            },
            situation: 'Sie hören im Radio eine Diskussion über die Folgen des Massentourismus.',
            playCount: 1,
            text: `A: Herzlich willkommen zu „Zur Sache“. Venedig verlangt an bestimmten Tagen Eintritt, Amsterdam begrenzt die Zahl der Übernachtungen – und auch bei uns in Heidelberg wird über Grenzen für den Tourismus diskutiert. Meine Gäste sind Stefan Haller, er führt ein Hotel in der Altstadt, und Elena Marquardt von der Bürgerinitiative „Altstadt lebt“. Frau Marquardt, was stört Sie am Tourismus?
C: Mich stört nicht der Tourismus an sich, sondern sein Ausmaß. An manchen Tagen kommen mehrere Busladungen gleichzeitig, und dann ist die Hauptstraße so voll, dass man als Anwohnerin kaum noch zum Bäcker kommt. Dazu kommt, dass immer mehr Wohnungen über Online-Plattformen an Feriengäste vermietet werden. Die fehlen dann den Familien, die hier leben wollen.
B: Ich kann den Ärger nachvollziehen, aber man darf nicht vergessen: Der Tourismus sichert in unserer Stadt Tausende Arbeitsplätze. Ohne Gäste würden viele Geschäfte, Restaurants und auch Museen nicht überleben. Wer Touristen fernhält, schneidet sich ins eigene Fleisch.
A: Herr Haller, wären Sie denn für eine Begrenzung der Ferienwohnungen?
B: Da bin ich ehrlich gesagt hin- und hergerissen. Als Hotelier sind Ferienwohnungen natürlich Konkurrenz für mich. Aber ich halte nichts davon, wenn der Staat zu stark eingreift. Wenn man die bestehenden Regeln konsequent anwenden würde, wäre schon viel gewonnen.
C: Die Regeln gibt es, das stimmt, aber kontrolliert wird kaum. Die Stadt hat für die ganze Altstadt gerade einmal zwei Mitarbeiter, die sich darum kümmern. Das ist lächerlich.
A: Was halten Sie von einer Eintrittsgebühr wie in Venedig?
C: Ehrlich gesagt nicht viel. Fünf Euro schrecken kaum jemanden ab. Ich fände es sinnvoller, die Zahl der Reisebusse zu begrenzen, die gleichzeitig in die Altstadt fahren dürfen. Die Tagesgäste bringen ohnehin wenig Geld in die Stadt, weil sie nach zwei Stunden wieder weg sind.
B: Da muss ich widersprechen. Auch Tagestouristen kaufen ein und gehen essen. Außerdem: Wer bestimmt denn, wer kommen darf? Am Ende trifft es Reisegruppen von Senioren oder Schulklassen, und das finde ich nicht fair.
A: Gibt es Lösungen, die beiden Seiten gerecht werden?
B: Ich glaube, wir müssen die Besucher besser verteilen. Die meisten wollen nur die drei bekanntesten Sehenswürdigkeiten sehen. Dabei hat die Stadt viel mehr zu bieten. Mit einer guten digitalen Besucherlenkung könnte man zeigen, wo es gerade voll ist und wo nicht.
C: Das ist ein Ansatz, den ich unterstützen würde. Aber es darf nicht dabei bleiben. Die Interessen der Bewohner müssen bei allen Entscheidungen an erster Stelle stehen. Eine Altstadt, in der niemand mehr wohnt, ist nur noch eine Kulisse.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie zu: Moderatorin, Stefan Haller oder Elena Marquardt.',
                instructionRu: 'Кто что говорит? Выберите: ведущая, Штефан Халлер или Елена Марквардт.',
                options: ['Moderatorin Katja Brandt', 'Stefan Haller', 'Elena Marquardt'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Durch die Vermietung an Feriengäste wird Wohnraum für Einheimische knapp.',
                    answer: 2,
                    explanationRu: 'Марквардт: квартиры сдают туристам, и их не хватает семьям, которые хотят здесь жить.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Viele Betriebe sind auf Besucher angewiesen.',
                    answer: 1,
                    explanationRu: 'Халлер: без гостей многие магазины, рестораны и музеи не выживут.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Andere europäische Städte gehen bereits gegen zu viele Besucher vor.',
                    answer: 0,
                    explanationRu: 'Ведущая упоминает Венецию и Амстердам во вступлении.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Für die Kontrolle der Vorschriften fehlt es an Personal.',
                    answer: 2,
                    explanationRu: 'Марквардт: на весь старый город всего два сотрудника.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Eine Beschränkung könnte bestimmte Gruppen ungerecht treffen.',
                    answer: 1,
                    explanationRu: 'Халлер: пострадают группы пенсионеров или школьные классы – «das finde ich nicht fair».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Eine geringe Gebühr würde kaum jemanden vom Besuch abhalten.',
                    answer: 2,
                    explanationRu: 'Марквардт: «Fünf Euro schrecken kaum jemanden ab».',
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
          'Вы услышите доклад. Доклад звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Mehrsprachigkeit und Gehirn',
            kind: 'monolog',
            situation: 'Sie hören einen Vortrag an einer Universität.',
            playCount: 2,
            text: `Sehr geehrte Damen und Herren, liebe Studierende, ich begrüße Sie herzlich zu meinem Vortrag über ein Thema, das viele von Ihnen persönlich betrifft: Mehrsprachigkeit. Weltweit wächst mehr als die Hälfte aller Menschen mit mehr als einer Sprache auf. Einsprachigkeit ist also, global betrachtet, eher die Ausnahme als die Regel.

Lange Zeit hatte Mehrsprachigkeit allerdings einen schlechten Ruf. Noch in den 1960er-Jahren rieten Ärzte und Lehrer Eltern davon ab, mit ihren Kindern mehrere Sprachen zu sprechen. Man befürchtete, die Kinder könnten verwirrt werden und keine der Sprachen richtig lernen. Diese Annahme beruhte jedoch auf fehlerhaften Studien, in denen man zum Beispiel Kinder aus ärmeren Einwandererfamilien mit Kindern aus wohlhabenden einsprachigen Familien verglich – und so soziale Unterschiede fälschlicherweise der Sprache zuschrieb.

Heute wissen wir: Kinder können problemlos zwei oder sogar drei Sprachen gleichzeitig erwerben. Dass sie anfangs manchmal Wörter aus verschiedenen Sprachen mischen, ist kein Zeichen von Verwirrung, sondern ein ganz normaler Teil des Lernprozesses. Mit der Zeit lernen sie sehr genau, mit wem sie welche Sprache sprechen.

Viel diskutiert wird die Frage, ob Mehrsprachigkeit das Denken verbessert. Einige Studien deuten darauf hin, dass mehrsprachige Menschen Vorteile bei sogenannten exekutiven Funktionen haben – also etwa bei der Fähigkeit, die Aufmerksamkeit zu steuern oder schnell zwischen Aufgaben zu wechseln. Die Erklärung: Im Gehirn sind immer alle Sprachen aktiv, und es muss ständig die gerade nicht benötigte unterdrücken. Das ist eine Art tägliches Training. Ich muss allerdings ehrlich sein: Neuere, sehr große Studien konnten diese Vorteile nicht immer bestätigen. Die Forschung ist sich hier also keineswegs einig.

Relativ gut belegt ist dagegen ein anderer Befund: Bei mehrsprachigen Menschen treten die Symptome einer Demenzerkrankung im Durchschnitt einige Jahre später auf. Wohlgemerkt: Mehrsprachigkeit verhindert die Krankheit nicht. Das Gehirn scheint aber besser in der Lage zu sein, Schäden eine Zeit lang auszugleichen.

Und wie sieht es mit Erwachsenen aus, die eine neue Sprache lernen? Es stimmt, dass Kinder die Aussprache oft akzentfreier erwerben. Beim Wortschatz und bei der Grammatik lernen Erwachsene am Anfang aber sogar schneller, weil sie bewusst Regeln anwenden und auf Lernstrategien zurückgreifen können. Entscheidend für den Erfolg sind weniger das Alter als die Motivation und die Menge an Kontakt mit der Sprache.

Für die Praxis bedeutet das zweierlei. Erstens: Eltern sollten mit ihren Kindern die Sprache sprechen, in der sie sich am wohlsten fühlen – auch wenn es nicht die Landessprache ist. Zweitens: Es ist nie zu spät, eine neue Sprache zu lernen. Wer es versucht, tut seinem Gehirn in jedem Fall etwas Gutes.

Nach einer kurzen Pause werden wir uns ansehen, wie Mehrsprachigkeit in Schulen gefördert werden kann.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was sagt die Referentin über Mehrsprachigkeit weltweit?',
                    options: [
                      'Sie ist häufiger als Einsprachigkeit.',
                      'Sie nimmt stark ab.',
                      'Sie betrifft vor allem Einwanderer.',
                    ],
                    answer: 0,
                    explanationRu: 'Больше половины людей растут с несколькими языками; одноязычие – скорее исключение.',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum hielt man Mehrsprachigkeit früher für schädlich?',
                    options: [
                      'Weil mehrsprachige Kinder in der Schule schlechter waren.',
                      'Weil Studien soziale Unterschiede nicht berücksichtigt hatten.',
                      'Weil Ärzte häufig Sprachstörungen beobachteten.',
                    ],
                    answer: 1,
                    explanationRu: 'Ошибочные исследования сравнивали бедные семьи иммигрантов с богатыми одноязычными и приписывали социальные различия языку.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wenn mehrsprachige Kinder Sprachen mischen, …',
                    options: [
                      'sollten die Eltern auf eine Sprache verzichten.',
                      'ist das ein Zeichen von Verwirrung.',
                      'gehört das ganz normal zum Spracherwerb.',
                    ],
                    answer: 2,
                    explanationRu: '«kein Zeichen von Verwirrung, sondern ein ganz normaler Teil des Lernprozesses».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie erklärt man mögliche Vorteile bei den exekutiven Funktionen?',
                    options: [
                      'Mehrsprachige lernen in der Schule mehr.',
                      'Das Gehirn übt ständig, die gerade nicht benötigte Sprache zu unterdrücken.',
                      'Mehrsprachige haben ein größeres Gehirn.',
                    ],
                    answer: 1,
                    explanationRu: 'Все языки активны, мозг постоянно подавляет ненужный – «eine Art tägliches Training».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie beurteilt die Referentin die Forschung zu diesen Vorteilen?',
                    options: [
                      'Die Ergebnisse sind nicht einheitlich.',
                      'Die Vorteile sind eindeutig bewiesen.',
                      'Es gibt dazu noch keine Studien.',
                    ],
                    answer: 0,
                    explanationRu: 'Новые крупные исследования не всегда подтверждают преимущества – «keineswegs einig».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was ist über Mehrsprachigkeit und Demenz bekannt?',
                    options: [
                      'Mehrsprachigkeit verhindert Demenz.',
                      'Mehrsprachige Menschen erkranken häufiger.',
                      'Die Symptome zeigen sich bei Mehrsprachigen später.',
                    ],
                    answer: 2,
                    explanationRu: 'Симптомы появляются в среднем на несколько лет позже, но болезнь не предотвращается.',
                  },
                  {
                    kind: 'mc',
                    question: 'Erwachsene, die eine neue Sprache lernen, …',
                    options: [
                      'sprechen meistens ohne Akzent.',
                      'lernen Wortschatz und Grammatik anfangs schneller als Kinder.',
                      'haben kaum Chancen auf Erfolg.',
                    ],
                    answer: 1,
                    explanationRu: 'Взрослые сознательно применяют правила и стратегии, поэтому вначале учатся быстрее.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was rät die Referentin Eltern?',
                    options: [
                      'Immer die Landessprache zu sprechen.',
                      'Ihr Kind möglichst früh in einen Sprachkurs zu schicken.',
                      'Die Sprache zu sprechen, in der sie sich am wohlsten fühlen.',
                    ],
                    answer: 2,
                    explanationRu: '«die Sprache sprechen, in der sie sich am wohlsten fühlen – auch wenn es nicht die Landessprache ist».',
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
          'Sie schreiben einen Forumsbeitrag. Sie haben in einem Online-Forum den folgenden Beitrag gelesen. Schreiben Sie nun Ihre Meinung (ca. 150 Wörter). Gehen Sie auf die vier Punkte unten ein. Überlegen Sie sich eine passende Reihenfolge der Punkte, eine Einleitung und einen Schluss.',
        instructionRu:
          'Напишите пост на форуме (около 150 слов). Выскажите своё мнение по теме и раскройте все четыре пункта. Продумайте порядок пунктов, введение и заключение.',
        situationDe: `Forum „Arbeit & Leben“ – Thema: Recht auf Feierabend?

Beitrag von „Sandra_HR“: „Mein Chef schickt mir regelmäßig abends um zehn noch E-Mails und erwartet eine schnelle Antwort. In einigen Ländern gibt es schon ein Gesetz, das Beschäftigten das Recht gibt, nach Feierabend nicht erreichbar zu sein. Sollten wir so etwas auch haben? Oder gehört Flexibilität heute einfach dazu?“`,
        points: [
          'Äußern Sie Ihre Meinung zu einem gesetzlichen Recht auf Nichterreichbarkeit.',
          'Nennen Sie Gründe, warum viele Menschen auch nach Feierabend erreichbar sind.',
          'Beschreiben Sie, wie die Situation in Ihrem Heimatland ist.',
          'Machen Sie Vorschläge, wie Firmen mit diesem Thema umgehen könnten.',
        ],
        minWords: 150,
        register: 'halbformell',
        minutes: 50,
        maxPoints: 60,
      },
      {
        teil: 2,
        instructionDe:
          'Sie schreiben eine Nachricht an Ihren Vorgesetzten (ca. 100 Wörter). Behandeln Sie alle vier Punkte. Denken Sie an eine passende Anrede und einen passenden Gruß.',
        instructionRu:
          'Напишите сообщение своему руководителю (около 100 слов). Раскройте все четыре пункта. Не забудьте о подходящем обращении и заключительной формуле.',
        situationDe: `Sie haben ein Angebot für eine einwöchige Weiterbildung zum Thema „Projektmanagement“ gefunden, die im nächsten Quartal stattfindet und 950 Euro kostet. Sie möchten daran teilnehmen. Schreiben Sie an Ihren Vorgesetzten, Herrn Kaiser.`,
        points: [
          'Beschreiben Sie die Weiterbildung kurz.',
          'Erklären Sie, welchen Nutzen sie für Ihre Arbeit und die Firma hat.',
          'Machen Sie einen Vorschlag, wie Ihre Aufgaben in dieser Woche erledigt werden.',
          'Bitten Sie um Freistellung und um eine Beteiligung an den Kosten.',
        ],
        minWords: 100,
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
          'Halten Sie einen kurzen Vortrag (ca. 4 Minuten). Stellen Sie das Thema vor, beschreiben Sie verschiedene Positionen, nennen Sie Beispiele und sagen Sie Ihre Meinung. Danach stellt Ihnen die Prüferin eine Frage zu Ihrem Vortrag.',
        instructionRu:
          'Сделайте короткий доклад (около 4 минут). Представьте тему, опишите разные позиции, приведите примеры и выскажите своё мнение. После доклада экзаменатор задаст вам вопрос.',
        situationDe: 'Thema: Mehrgenerationenhäuser – ein Wohnmodell für die Zukunft?',
        points: [
          'Stellen Sie das Thema vor und erklären Sie, was ein Mehrgenerationenhaus ist.',
          'Beschreiben Sie Vor- und Nachteile dieses Wohnmodells für Jung und Alt.',
          'Berichten Sie, wie ältere Menschen in Ihrem Heimatland meistens wohnen.',
          'Sagen Sie Ihre eigene Meinung und begründen Sie sie mit Beispielen.',
          'Beenden Sie Ihren Vortrag mit einem Schluss und bedanken Sie sich bei den Zuhörern.',
        ],
        aiRole:
          'Prüferin in der Prüfung Goethe-Zertifikat B2. Sie hört dem Vortrag zu und stellt danach eine Rückfrage (z. B. ob die Kandidatin / der Kandidat selbst so wohnen möchte und warum).',
        opener:
          'Guten Tag! Ihr Thema sind Mehrgenerationenhäuser. Bitte beginnen Sie mit Ihrem Vortrag – Sie haben etwa vier Minuten Zeit.',
        minutes: 6,
        maxPoints: 50,
      },
      {
        teil: 2,
        mode: 'discussion',
        instructionDe:
          'Diskutieren Sie mit Ihrer Gesprächspartnerin über die folgende Frage. Tauschen Sie Argumente aus, reagieren Sie auf die Argumente Ihrer Partnerin und versuchen Sie am Ende, einen Kompromiss zu finden (ca. 5 Minuten).',
        instructionRu:
          'Обсудите с партнёршей следующий вопрос. Обменивайтесь аргументами, реагируйте на её доводы и в конце постарайтесь найти компромисс (около 5 минут).',
        situationDe: 'Sollten Hausaufgaben an Schulen abgeschafft werden?',
        points: [
          'Lernerfolg und Übung',
          'Freizeit und Erholung der Kinder',
          'Chancengleichheit (Unterstützung durch Eltern)',
          'Alternativen, z. B. Übungszeiten in der Schule',
          'Kompromiss finden',
        ],
        aiRole:
          'Gesprächspartnerin Sabine, Mutter von zwei Schulkindern und Bankkauffrau. Sie ist für die Abschaffung von Hausaufgaben: Kinder hätten nach langen Schultagen keine Freizeit mehr, und Kinder, deren Eltern nicht helfen können, seien benachteiligt. Sie argumentiert engagiert, geht auf Gegenargumente ein und ist am Ende zu einem Kompromiss bereit (z. B. Übungszeiten in der Schule oder weniger, aber sinnvollere Aufgaben).',
        opener:
          'Also, ich finde, Hausaufgaben gehören abgeschafft. Meine Kinder sitzen bis vier Uhr in der Schule und dann noch eine Stunde am Schreibtisch – wann sollen sie denn spielen? Wie siehst du das?',
        minutes: 5,
        maxPoints: 50,
      },
    ],
  },
};
