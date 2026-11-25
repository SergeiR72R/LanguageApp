import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'b1-exam-2',
  level: 'B1',
  title: 'Übungstest B1 – 2',

  // ───────────────────────────── LESEN ─────────────────────────────
  lesen: {
    minutes: 65,
    parts: [
      {
        teil: 1,
        minutes: 10,
        title: 'Von der Großstadt aufs Dorf',
        textType: 'Blogbeitrag',
        texts: [
          {
            heading: 'Thomas’ Blog: Von der Großstadt aufs Dorf',
            body: `Liebe Leserinnen und Leser,

vor einem Jahr haben meine Frau Katrin, unsere beiden Kinder und ich eine große Entscheidung getroffen: Wir sind von München in ein kleines Dorf im Allgäu gezogen. Viele Freunde haben uns damals für verrückt gehalten. Heute möchte ich euch erzählen, wie es uns seitdem ergangen ist.

Der wichtigste Grund für den Umzug war die Wohnung. In München haben wir zu viert in drei Zimmern gewohnt und trotzdem fast die Hälfte unseres Einkommens für die Miete bezahlt. Hier haben wir ein altes Bauernhaus mit Garten gekauft – für weniger Geld, als eine kleine Eigentumswohnung in der Stadt gekostet hätte.

Meine Arbeit als Grafiker kann ich zum Glück größtenteils von zu Hause aus machen. Nur einmal pro Woche fahre ich ins Büro nach München. Das sind zwei Stunden mit dem Zug – ziemlich anstrengend, aber es geht. Katrin hatte noch mehr Glück: Sie hat als Krankenpflegerin sofort eine Stelle im Krankenhaus im Nachbarort gefunden.

Natürlich ist nicht alles perfekt. Der nächste Supermarkt ist acht Kilometer entfernt, und der Bus fährt nur alle zwei Stunden. Ohne Auto geht hier fast nichts. Und ins Kino oder ins Theater gehen wir viel seltener als früher.

Dafür haben die Kinder hier viel mehr Freiheit. Unsere Tochter Mia (9) fährt allein mit dem Fahrrad zur Schule, und unser Sohn Ben (6) spielt den ganzen Nachmittag mit den Nachbarskindern am Waldrand. Am Anfang waren die Leute im Dorf uns gegenüber etwas zurückhaltend. Aber seit ich bei der freiwilligen Feuerwehr mitmache, kennen wir fast alle.

Würden wir es wieder tun? Ja, ganz sicher!

Euer Thomas`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text und die Aufgaben dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте текст и задания к нему. Выберите: верны утверждения (richtig) или нет (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: 'Die Freunde von Thomas fanden die Idee mit dem Umzug sofort gut.',
                answer: false,
                explanationRu: '«Viele Freunde haben uns damals für verrückt gehalten» — друзья считали их сумасшедшими.',
              },
              {
                kind: 'tf',
                statement: 'In München musste die Familie sehr viel Geld für die Miete bezahlen.',
                answer: true,
                explanationRu: 'Почти половина дохода уходила на аренду.',
              },
              {
                kind: 'tf',
                statement: 'Thomas arbeitet jeden Tag in einem Büro in München.',
                answer: false,
                explanationRu: 'Он работает в основном из дома и ездит в офис только раз в неделю.',
              },
              {
                kind: 'tf',
                statement: 'Katrin hat schnell eine neue Arbeit gefunden.',
                answer: true,
                explanationRu: '«Sie hat … sofort eine Stelle im Krankenhaus im Nachbarort gefunden.»',
              },
              {
                kind: 'tf',
                statement: 'Auf dem Land braucht die Familie ein Auto.',
                answer: true,
                explanationRu: '«Ohne Auto geht hier fast nichts.»',
              },
              {
                kind: 'tf',
                statement: 'Die Leute im Dorf waren von Anfang an sehr offen.',
                answer: false,
                explanationRu: 'Сначала жители были сдержанными («zurückhaltend»); всё изменилось, когда Томас вступил в пожарную дружину.',
              },
            ],
          },
        ],
      },
      {
        teil: 2,
        minutes: 20,
        title: 'Zwei Zeitungsartikel',
        textType: 'Zeitungsartikel',
        texts: [
          {
            label: 'Text 1',
            heading: 'Obst für alle: Stadt pflanzt essbare Bäume',
            body: `Freiburg. Äpfel, Birnen, Kirschen – und das alles kostenlos: In Freiburg dürfen sich Bürgerinnen und Bürger seit diesem Herbst an mehr als 300 Obstbäumen in Parks und an Straßen bedienen. Die Stadt hat die Bäume in den letzten zwei Jahren gepflanzt. An jedem dieser Bäume hängt ein gelbes Band. Es bedeutet: Hier darf jeder pflücken.

Die Idee stammt von einer Gruppe von Studierenden, die sich über die vielen ungenutzten Früchte in der Stadt geärgert hatten. „Jedes Jahr fallen tonnenweise Äpfel und Birnen auf den Boden und verfaulen“, sagt Mitgründerin Laura Weiß. Auf einer Karte im Internet kann man inzwischen sehen, wo welcher Baum steht.

Es gibt allerdings Regeln: Man darf nur so viel pflücken, wie man für sich und seine Familie braucht. Wer das Obst zum Beispiel auf dem Markt verkauft, muss mit einer Strafe rechnen. Außerdem soll niemand Äste abbrechen oder auf die Bäume klettern.

Bisher sind die Erfahrungen gut. Besonders Familien mit Kindern und Schulklassen nutzen das Angebot. Ein Problem gab es nur am Anfang: Einige Bäume waren schon leer, bevor die Früchte richtig reif waren. Deshalb zeigt die Karte jetzt auch an, wann sich das Pflücken wirklich lohnt.`,
          },
          {
            label: 'Text 2',
            heading: 'Einkaufen ohne Kasse',
            body: `Hannover. Hineingehen, Waren aus dem Regal nehmen und einfach wieder gehen – im neuen Supermarkt in der Innenstadt von Hannover ist das möglich. Kassen gibt es dort nicht mehr. Kameras an der Decke und Sensoren in den Regalen erkennen, welche Produkte ein Kunde in seine Tasche legt. Bezahlt wird automatisch über eine App auf dem Smartphone.

Der Laden ist rund um die Uhr geöffnet, auch am Wochenende. „Viele unserer Kunden arbeiten im Schichtdienst und wollen nachts einkaufen“, erklärt Filialleiter Markus Engel. Personal gibt es trotzdem: Tagsüber füllen zwei Angestellte die Regale auf und beantworten Fragen. Durch das neue System seien keine Arbeitsplätze weggefallen, betont Engel.

Nicht alle sind begeistert. Datenschützer kritisieren, dass die Kameras sehr viel über die Kunden wissen: was sie kaufen, wann sie kommen und wie lange sie vor einem Regal stehen. Das Unternehmen versichert, dass die Daten nach 24 Stunden gelöscht werden. Außerdem können ältere Menschen ohne Smartphone den Laden nicht nutzen.

Eine erste Umfrage zeigt: Besonders junge Leute kaufen gern in dem Geschäft ein. Das Angebot ist allerdings kleiner als in einem normalen Supermarkt – frisches Fleisch und Fisch gibt es zum Beispiel nicht.`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text 1 aus der Presse und die Aufgaben dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст 1 из прессы и задания к нему. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'In Freiburg …',
                options: [
                  'kann man Obstbäume für den eigenen Garten kaufen.',
                  'erkennt man an einem Band, wo man pflücken darf.',
                  'dürfen nur Familien mit Kindern Obst pflücken.',
                ],
                answer: 1,
                explanationRu: '«An jedem dieser Bäume hängt ein gelbes Band. Es bedeutet: Hier darf jeder pflücken.»',
              },
              {
                kind: 'mc',
                question: 'Die Idee für das Projekt hatten …',
                options: ['Mitarbeiter der Stadt.', 'Bauern aus der Region.', 'junge Leute von der Universität.'],
                answer: 2,
                explanationRu: '«Die Idee stammt von einer Gruppe von Studierenden».',
              },
              {
                kind: 'mc',
                question: 'Wer Obst pflückt, …',
                options: [
                  'darf es nicht verkaufen.',
                  'muss sich vorher im Internet anmelden.',
                  'darf dafür auf die Bäume klettern.',
                ],
                answer: 0,
                explanationRu: 'За продажу фруктов, например на рынке, грозит штраф. Регистрироваться не нужно, лазить на деревья нельзя.',
              },
            ],
          },
          {
            instructionDe: 'Lesen Sie den Text 2 aus der Presse und die Aufgaben dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст 2 из прессы и задания к нему. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'In dem neuen Supermarkt …',
                options: [
                  'bezahlt man mit dem Smartphone.',
                  'bezahlt man bei einem Mitarbeiter.',
                  'gibt es nur Kassen zur Selbstbedienung.',
                ],
                answer: 0,
                explanationRu: '«Bezahlt wird automatisch über eine App auf dem Smartphone.» Касс нет вообще.',
              },
              {
                kind: 'mc',
                question: 'Der Filialleiter sagt, dass …',
                options: [
                  'der Laden nachts geschlossen ist.',
                  'durch die neue Technik keine Stellen verloren gegangen sind.',
                  'vor allem junge Leute dort einkaufen sollen.',
                ],
                answer: 1,
                explanationRu: '«Durch das neue System seien keine Arbeitsplätze weggefallen». Магазин работает круглосуточно.',
              },
              {
                kind: 'mc',
                question: 'Kritik gibt es, weil …',
                options: [
                  'die Preise höher sind als in anderen Supermärkten.',
                  'es dort kein frisches Obst gibt.',
                  'das System viele Daten über die Kunden sammelt.',
                ],
                answer: 2,
                explanationRu: 'Защитники данных критикуют, что камеры слишком много знают о покупателях.',
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        minutes: 10,
        title: 'Dienstleistungen und Jobs',
        textType: 'Anzeigen',
        texts: [
          {
            label: 'a',
            heading: 'Haushaltshilfe mit Herz',
            body: 'Zuverlässige Frau mit langjähriger Erfahrung übernimmt Putzen, Fensterputzen und Bügeln in Ihrem Haushalt. Gern auch bei älteren Menschen – auf Wunsch gehe ich auch für Sie einkaufen. Tel. 0176 2234 58.',
          },
          {
            label: 'b',
            heading: 'Hundeschule Pfote',
            body: 'Ihr Hund hört nicht? Welpenkurse und Erziehungstraining für Hunde jeden Alters. Einzel- und Gruppenstunden auf unserem großen Trainingsplatz am Stadtrand. Erste Probestunde kostenlos!',
          },
          {
            label: 'c',
            heading: 'PC-Doktor',
            body: 'Computer zu langsam? Virus? Drucker geht nicht? Wir helfen schnell und günstig – direkt bei Ihnen zu Hause. Termine auch abends bis 21 Uhr und am Samstag.',
          },
          {
            label: 'd',
            heading: 'Café Sonnenschein sucht Aushilfe',
            body: 'Für unser Café am Marktplatz suchen wir freundliche Aushilfen für Samstag und Sonntag, jeweils von 10 bis 16 Uhr. Ideal für Studierende! 14 Euro pro Stunde plus Trinkgeld.',
          },
          {
            label: 'e',
            heading: 'Ferienwohnung „Seeblick“',
            body: 'Gemütliche Ferienwohnung für 2–4 Personen direkt an der Ostsee, 100 Meter zum Strand. Im Juni und September noch Termine frei. Mindestaufenthalt eine Woche.',
          },
          {
            label: 'f',
            heading: 'Sozialkaufhaus „Zweite Chance“',
            body: 'Sie haben Möbel, die Sie nicht mehr brauchen? Wir holen gut erhaltene Schränke, Tische und Sofas kostenlos bei Ihnen ab und verkaufen sie günstig an Menschen mit wenig Geld.',
          },
          {
            label: 'g',
            heading: 'Büroaushilfe gesucht',
            body: 'Steuerbüro in der Innenstadt sucht Unterstützung für Ablage und Telefon, Montag bis Freitag von 8 bis 12 Uhr. Gute Deutschkenntnisse und Erfahrung mit dem Computer erforderlich.',
          },
          {
            label: 'h',
            heading: 'Umzüge Schneider',
            body: 'Umzug geplant? Wir kommen mit Transporter, Fahrer und zwei starken Helfern. Ab 39 Euro pro Stunde, auch am Wochenende. Kartons können Sie bei uns ausleihen.',
          },
          {
            label: 'i',
            heading: '2-Zimmer-Wohnung am Stadtpark',
            body: 'Helle 2-Zimmer-Wohnung, 58 m², mit Balkon und Einbauküche, ruhige Lage am Stadtpark. 890 Euro kalt. Frei ab 1. Mai, nur an Nichtraucher.',
          },
          {
            label: 'j',
            heading: 'Tiersitterin Jana',
            body: 'Sie fahren in Urlaub und Ihre Katze, Ihr Kaninchen oder Ihre Vögel bleiben zu Hause? Ich komme ein- bis zweimal am Tag zu Ihnen, füttere Ihre Tiere und spiele mit ihnen.',
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Situationen und die Anzeigen a bis j. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie „keine passende Anzeige“.',
            instructionRu:
              'Прочитайте ситуации и объявления a–j. Выберите, какое объявление подходит к какой ситуации. Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет — в этом случае выберите «нет подходящего объявления».',
            options: [
              'Haushaltshilfe mit Herz',
              'Hundeschule Pfote',
              'PC-Doktor',
              'Café Sonnenschein sucht Aushilfe',
              'Ferienwohnung „Seeblick“',
              'Sozialkaufhaus „Zweite Chance“',
              'Büroaushilfe gesucht',
              'Umzüge Schneider',
              '2-Zimmer-Wohnung am Stadtpark',
              'Tiersitterin Jana',
            ],
            allowNone: true,
            items: [
              {
                kind: 'match',
                prompt: 'Sie ziehen nächsten Monat um und brauchen jemanden mit einem Transporter.',
                answer: 7,
                explanationRu: 'h — фирма по переездам: фургон, водитель и два помощника.',
              },
              {
                kind: 'match',
                prompt: 'Ihre Freundin studiert und sucht einen Job, den sie am Wochenende machen kann.',
                answer: 3,
                explanationRu: 'd — кафе ищет помощников на субботу и воскресенье. Работа в офисе (g) — только в будни утром.',
              },
              {
                kind: 'match',
                prompt: 'Ihr Nachbar hat einen alten Schrank, den er nicht mehr braucht. Er kann ihn aber nicht selbst wegbringen.',
                answer: 5,
                explanationRu: 'f — социальный магазин бесплатно забирает мебель.',
              },
              {
                kind: 'match',
                prompt: 'Sie fahren drei Wochen in Urlaub und suchen jemanden, der sich um Ihre Katze kümmert.',
                answer: 9,
                explanationRu: 'j — няня для животных кормит кошек дома у хозяев. Школа для собак (b) не подходит.',
              },
              {
                kind: 'match',
                prompt: 'Ihr Laptop startet nicht mehr. Sie haben aber nur abends Zeit.',
                answer: 2,
                explanationRu: 'c — компьютерная помощь на дому, в том числе вечером до 21 часа.',
              },
              {
                kind: 'match',
                prompt: 'Ein Kollege beginnt im Herbst ein Studium und sucht ein günstiges Zimmer in einer Wohngemeinschaft.',
                answer: -1,
                explanationRu: 'Подходящего объявления нет: квартира (i) — целая двухкомнатная и дорогая, (e) — квартира для отпуска.',
              },
              {
                kind: 'match',
                prompt: 'Ihre Mutter ist 78 Jahre alt und schafft die Hausarbeit nicht mehr allein.',
                answer: 0,
                explanationRu: 'a — помощница по хозяйству, в том числе для пожилых людей.',
              },
            ],
          },
        ],
      },
      {
        teil: 4,
        minutes: 15,
        title: 'Einkaufen am Sonntag?',
        textType: 'Leserbriefe',
        texts: [
          {
            label: 'Sabine',
            heading: 'Sabine, 41, Verkäuferin aus Nürnberg',
            body: 'Ich arbeite schon jeden zweiten Samstag bis 20 Uhr. Der Sonntag ist der einzige Tag, an dem meine ganze Familie zusammen frühstücken und etwas unternehmen kann. Wenn die Geschäfte sonntags öffnen, ist auch dieser Tag weg. Wer unbedingt am Sonntag einkaufen will, sollte einfach besser planen.',
          },
          {
            label: 'Mehmet',
            heading: 'Mehmet, 29, Ingenieur aus Stuttgart',
            body: 'Unter der Woche arbeite ich oft bis 19 Uhr, und am Samstag ist die Innenstadt so voll, dass Einkaufen keinen Spaß macht. Der Sonntag wäre für mich der perfekte Tag, um in Ruhe neue Schuhe oder ein Geschenk zu kaufen. In vielen anderen Ländern ist das ganz normal – warum nicht auch bei uns?',
          },
          {
            label: 'Gerda',
            heading: 'Gerda, 66, Rentnerin aus Bremen',
            body: 'Ich finde es wunderbar, dass es bei uns einen Tag in der Woche gibt, an dem es ruhiger ist. Man geht spazieren, besucht Freunde oder liest ein Buch. Wenn alle Läden geöffnet haben, wird der Sonntag ein Tag wie jeder andere. Das wäre wirklich schade.',
          },
          {
            label: 'Herr Lange',
            heading: 'Peter Lange, 54, Buchhändler aus Kiel',
            body: 'Meine kleine Buchhandlung hat es gegen den Onlinehandel ohnehin schwer. Im Internet kann man rund um die Uhr bestellen, auch am Sonntag. Wenn wir Geschäfte in der Stadt nicht wenigstens ab und zu am Sonntag öffnen dürfen, verlieren wir noch mehr Kunden. Ich würde meinen Laden sofort aufmachen.',
          },
          {
            label: 'Lisa',
            heading: 'Lisa, 23, Studentin aus Göttingen',
            body: 'Viele denken, dass Studierende sowieso immer Zeit haben. Das stimmt nicht: Ich studiere und arbeite nebenbei in einem Modegeschäft. Für mich wäre es super, wenn ich auch am Sonntag arbeiten könnte, denn dafür gibt es mehr Geld pro Stunde. Und ich selbst könnte dann endlich auch mal in Ruhe einkaufen.',
          },
          {
            label: 'Dr. Fischer',
            heading: 'Dr. Anna Fischer, 47, Ärztin aus Dresden',
            body: 'Aus medizinischer Sicht braucht der Mensch regelmäßige Pausen. Schon jetzt kommen viele Patienten zu mir, die erschöpft sind und nicht mehr abschalten können. Ein gemeinsamer freier Tag für fast alle schützt die Gesundheit. Diesen Schutz sollten wir nicht für ein paar zusätzliche Einkaufsstunden aufgeben.',
          },
          {
            label: 'Jan',
            heading: 'Jan, 35, Vater von zwei Kindern aus Münster',
            body: 'Als ich in Kanada gelebt habe, konnte ich auch sonntags einkaufen, und das fand ich damals praktisch. Aber ehrlich gesagt vermisse ich es nicht. Seit wir wieder hier wohnen, machen wir sonntags Ausflüge, statt im Einkaufszentrum herumzulaufen. Von mir aus kann alles so bleiben, wie es ist.',
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Texte. In einer Zeitung lesen Sie Kommentare zu einem Artikel über die Öffnungszeiten von Geschäften. Wählen Sie: Ist die Person dafür, dass Geschäfte auch am Sonntag öffnen?',
            instructionRu:
              'Прочитайте тексты. В газете вы читаете комментарии к статье о часах работы магазинов. Выберите: выступает ли человек ЗА то, чтобы магазины работали и по воскресеньям? (Ja — да, Nein — нет)',
            tfLabels: ['Ja', 'Nein'],
            items: [
              {
                kind: 'tf',
                statement: 'Sabine ist für die Öffnung der Geschäfte am Sonntag.',
                answer: false,
                explanationRu: 'Воскресенье — единственный день для семьи; кто хочет покупать, должен лучше планировать.',
              },
              {
                kind: 'tf',
                statement: 'Mehmet ist für die Öffnung der Geschäfte am Sonntag.',
                answer: true,
                explanationRu: '«Der Sonntag wäre für mich der perfekte Tag» — он за.',
              },
              {
                kind: 'tf',
                statement: 'Gerda ist für die Öffnung der Geschäfte am Sonntag.',
                answer: false,
                explanationRu: 'Ей нравится спокойное воскресенье: «Das wäre wirklich schade».',
              },
              {
                kind: 'tf',
                statement: 'Herr Lange ist für die Öffnung der Geschäfte am Sonntag.',
                answer: true,
                explanationRu: 'Он боится потерять покупателей из-за интернет-торговли: «Ich würde meinen Laden sofort aufmachen».',
              },
              {
                kind: 'tf',
                statement: 'Lisa ist für die Öffnung der Geschäfte am Sonntag.',
                answer: true,
                explanationRu: 'Она хотела бы работать по воскресеньям (доплата) и спокойно делать покупки.',
              },
              {
                kind: 'tf',
                statement: 'Dr. Fischer ist für die Öffnung der Geschäfte am Sonntag.',
                answer: false,
                explanationRu: 'Общий выходной защищает здоровье: «Diesen Schutz sollten wir nicht … aufgeben».',
              },
              {
                kind: 'tf',
                statement: 'Jan ist für die Öffnung der Geschäfte am Sonntag.',
                answer: false,
                explanationRu: 'Раньше в Канаде это было удобно, но теперь он не скучает: «Von mir aus kann alles so bleiben, wie es ist».',
              },
            ],
          },
        ],
      },
      {
        teil: 5,
        minutes: 10,
        title: 'Benutzungsordnung der Stadtbibliothek',
        textType: 'Hausordnung',
        texts: [
          {
            heading: 'Benutzungsordnung der Stadtbibliothek',
            body: `§ 1 Anmeldung
Für die Ausleihe benötigen Sie einen Bibliotheksausweis. Sie erhalten ihn an der Information gegen Vorlage eines gültigen Personalausweises oder Reisepasses. Kinder und Jugendliche unter 16 Jahren brauchen zusätzlich die Unterschrift eines Elternteils. Der Ausweis kostet 15 Euro pro Jahr; für Schüler, Studierende und Auszubildende ist er kostenlos.

§ 2 Leihfristen
Bücher können für vier Wochen ausgeliehen werden, DVDs und Zeitschriften für eine Woche. Die Leihfrist kann bis zu zweimal verlängert werden – online, telefonisch oder an der Information –, wenn das Medium nicht von einer anderen Person vorgemerkt ist.

§ 3 Gebühren
Bei verspäteter Rückgabe werden pro Medium und Öffnungstag 20 Cent berechnet. Ab einer offenen Gebühr von 10 Euro ist keine weitere Ausleihe möglich.

§ 4 Rückgabe
Medien können während der Öffnungszeiten an den Rückgabeautomaten im Erdgeschoss zurückgegeben werden. Außerhalb der Öffnungszeiten steht die Rückgabeklappe am Haupteingang zur Verfügung. Konsolenspiele müssen immer an der Information zurückgegeben werden.

§ 5 Verlust und Beschädigung
Verlorene oder beschädigte Medien müssen ersetzt werden. Bitte melden Sie Schäden sofort an der Information.

§ 6 Aufenthalt
In den Lesesälen ist Essen nicht gestattet; Getränke in verschlossenen Flaschen sind erlaubt. Telefonieren ist nur im Eingangsbereich erlaubt. Die Computerarbeitsplätze können für höchstens zwei Stunden pro Tag reserviert werden.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sie informieren sich über die Regeln der Stadtbibliothek. Lesen Sie die Aufgaben und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu:
              'Вы знакомитесь с правилами городской библиотеки. Прочитайте задания и текст. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Wer einen Bibliotheksausweis möchte, …',
                options: [
                  'muss in jedem Fall 15 Euro bezahlen.',
                  'muss einen Personalausweis oder Pass zeigen.',
                  'braucht immer die Unterschrift der Eltern.',
                ],
                answer: 1,
                explanationRu: '§ 1: читательский билет выдают при предъявлении паспорта. Для учащихся он бесплатный; подпись родителей нужна только до 16 лет.',
              },
              {
                kind: 'mc',
                question: 'Eine DVD …',
                options: [
                  'darf man eine Woche behalten.',
                  'kann man nicht verlängern.',
                  'kostet 20 Cent Leihgebühr pro Tag.',
                ],
                answer: 0,
                explanationRu: '§ 2: DVD и журналы выдают на одну неделю; продлить можно до двух раз. 20 центов — это штраф за просрочку.',
              },
              {
                kind: 'mc',
                question: 'Ein Spiel für die Spielkonsole gibt man …',
                options: [
                  'an der Rückgabeklappe am Haupteingang zurück.',
                  'am Automaten im Erdgeschoss zurück.',
                  'an der Information zurück.',
                ],
                answer: 2,
                explanationRu: '§ 4: «Konsolenspiele müssen immer an der Information zurückgegeben werden.»',
              },
              {
                kind: 'mc',
                question: 'In den Lesesälen darf man …',
                options: ['eine verschlossene Flasche Wasser dabeihaben.', 'kurz telefonieren.', 'einen kleinen Snack essen.'],
                answer: 0,
                explanationRu: '§ 6: напитки в закрытых бутылках разрешены; есть нельзя, звонить — только у входа.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ───────────────────────────── HÖREN ─────────────────────────────
  hoeren: {
    minutes: 40,
    parts: [
      {
        teil: 1,
        instructionDe:
          'Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
        instructionRu:
          'Вы услышите пять коротких текстов. Каждый текст звучит два раза. К каждому тексту нужно решить два задания. Выберите правильный ответ.',
        segments: [
          {
            title: 'Durchsage am Flughafen',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage am Flughafen.',
            playCount: 2,
            text: 'Achtung, bitte! Eine Information für alle Passagiere des Fluges LH 2034 nach Wien: Wegen dichten Nebels in Wien verzögert sich Ihr Abflug um etwa 50 Minuten. Die neue Abflugzeit ist 11.40 Uhr. Bitte beachten Sie außerdem den Gatewechsel: Ihr Flug startet nicht von Gate B 12, sondern von Gate C 4. Als kleine Entschuldigung erhalten Sie dort am Schalter einen Gutschein für ein Getränk. Vielen Dank für Ihr Verständnis.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Der Flug nach Wien startet später als geplant.',
                    answer: true,
                    explanationRu: 'Вылет задерживается примерно на 50 минут из-за тумана.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sollen die Passagiere tun?',
                    options: ['Zum Gate C 4 gehen.', 'Am Gate B 12 warten.', 'Am Schalter ihren Flug umbuchen.'],
                    answer: 0,
                    explanationRu: 'Выход сменился: самолёт вылетает не с B 12, а с C 4.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von der Autowerkstatt',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Guten Tag, Herr Wagner, hier ist Brinkmann von der Autowerkstatt Brinkmann. Wir haben Ihr Auto jetzt durchgesehen. Die Bremsen sind in Ordnung, aber bei der Inspektion haben wir gesehen, dass die Batterie sehr alt ist. Wir würden sie gern wechseln, das kostet ungefähr 120 Euro. Dafür brauchen wir aber Ihr Okay. Wenn wir die Batterie heute noch bestellen, können Sie das Auto morgen ab 15 Uhr abholen. Rufen Sie mich doch bitte kurz zurück. Danke!',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'An den Bremsen gibt es ein Problem.',
                    answer: false,
                    explanationRu: '«Die Bremsen sind in Ordnung» — тормоза в порядке, проблема в аккумуляторе.',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum soll Herr Wagner zurückrufen?',
                    options: [
                      'Er soll einen neuen Termin vereinbaren.',
                      'Die Werkstatt braucht seine Zustimmung für die neue Batterie.',
                      'Er muss das Auto heute noch abholen.',
                    ],
                    answer: 1,
                    explanationRu: '«Dafür brauchen wir aber Ihr Okay» — нужно его согласие на замену аккумулятора.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Verkehrsmeldungen',
            kind: 'monolog',
            situation: 'Sie hören Verkehrsmeldungen im Radio.',
            playCount: 2,
            text: 'Und jetzt die Verkehrsmeldungen. Auf der A 7 zwischen Kassel-Nord und Göttingen gibt es nach einem Unfall zwölf Kilometer Stau, die rechte Spur ist gesperrt. Die Polizei empfiehlt, die Autobahn schon in Kassel-Nord zu verlassen und über die Bundesstraße 3 zu fahren. Gute Nachrichten von der A 44: Die Baustelle bei Warburg ist seit heute Morgen aufgehoben, hier fahren Sie wieder ohne Behinderungen. Und Vorsicht auf der B 27: Dort laufen zwischen Eschwege und Bad Sooden Kühe auf der Fahrbahn. Fahren Sie bitte besonders langsam.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Auf der A 44 bei Warburg gibt es keine Baustelle mehr.',
                    answer: true,
                    explanationRu: '«Die Baustelle bei Warburg ist seit heute Morgen aufgehoben».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was empfiehlt die Polizei den Autofahrern auf der A 7?',
                    options: ['Besonders langsam fahren.', 'Die rechte Spur benutzen.', 'Eine andere Straße nehmen.'],
                    answer: 2,
                    explanationRu: 'Полиция советует съехать с автобана в Kassel-Nord и ехать по федеральной дороге B 3.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Durchsage im Museum',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Museum.',
            playCount: 2,
            text: 'Liebe Besucherinnen und Besucher, in einer halben Stunde, um 15 Uhr, beginnt in Raum 3 im ersten Stock eine kostenlose Führung durch unsere neue Ausstellung „Leben am Fluss“. Die Führung dauert etwa 45 Minuten. Für Kinder gibt es zur gleichen Zeit im Erdgeschoss eine Malwerkstatt. Bitte melden Sie Ihre Kinder dafür an der Kasse an. Außerdem möchten wir Sie darauf hinweisen, dass unser Museumscafé heute wegen eines Wasserschadens geschlossen bleibt.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Für die Führung muss man extra bezahlen.',
                    answer: false,
                    explanationRu: 'Экскурсия бесплатная: «eine kostenlose Führung».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was können Kinder um 15 Uhr machen?',
                    options: ['An der Führung teilnehmen.', 'Malen.', 'Im Museumscafé Kuchen essen.'],
                    answer: 1,
                    explanationRu: 'Для детей в это время — мастерская рисования на первом этаже. Кафе сегодня закрыто.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht vom Volleyballverein',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo, hier ist Steffi vom Volleyballverein. Ich wollte dir nur kurz sagen, dass das Training am Mittwoch nicht in der Schulturnhalle stattfindet, weil dort der Boden repariert wird. Wir trainieren stattdessen in der Sporthalle neben dem Hallenbad – zur gleichen Zeit wie immer, also um 19 Uhr. Und denk bitte daran: Am Samstag ist unser Turnier. Wir brauchen noch jemanden, der einen Kuchen mitbringt. Wenn du Zeit hast, back doch einen. Melde dich einfach. Bis Mittwoch!',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Das Training am Mittwoch findet an einem anderen Ort statt.',
                    answer: true,
                    explanationRu: 'Тренировка будет не в школьном спортзале, а в зале рядом с бассейном (время прежнее).',
                  },
                  {
                    kind: 'mc',
                    question: 'Worum bittet Steffi?',
                    options: ['Einen Kuchen zu backen.', 'Beim Turnier Schiedsrichter zu sein.', 'Beim Reparieren der Halle zu helfen.'],
                    answer: 0,
                    explanationRu: '«Wenn du Zeit hast, back doch einen [Kuchen].»',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 2,
        instructionDe:
          'Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Sie machen eine Stadtführung durch die Altstadt von Wellburg.',
        instructionRu:
          'Вы услышите текст один раз. К нему нужно решить пять заданий. В каждом задании выберите правильный ответ a, b или c. Вы на экскурсии по старому городу Вельбурга.',
        segments: [
          {
            title: 'Stadtführung in Wellburg',
            kind: 'monolog',
            situation: 'Sie machen eine Stadtführung durch die Altstadt von Wellburg.',
            playCount: 1,
            text: `Guten Morgen, meine Damen und Herren, und herzlich willkommen in Wellburg! Ich bin Martin Vogel, und ich zeige Ihnen in den nächsten anderthalb Stunden die schönsten Ecken unserer Altstadt. Wir stehen hier auf dem Marktplatz, dem Herzen der Stadt. Jeden Dienstag und Freitag ist hier Wochenmarkt – heute ist leider Mittwoch, deshalb sehen Sie nur leere Plätze.

Das große Gebäude mit der Uhr ist unser Rathaus. Es wurde 1520 gebaut und ist damit das älteste Haus der Stadt. Im Jahr 1890 hat es fast vollständig gebrannt; nur die Fassade, die Sie hier sehen, ist noch original. Jeden Mittag um zwölf öffnet sich oben unter der Uhr ein kleines Fenster, und zwei Holzfiguren tanzen zu einer alten Melodie. Bleiben Sie also bis zwölf in der Nähe – das lohnt sich!

Gleich gehen wir durch die Fischergasse hinunter zum Fluss. Früher haben dort die Fischer gewohnt, heute gibt es in den kleinen Häusern vor allem Kunsthandwerk und Cafés. Bitte passen Sie gut auf: Die Gasse ist sehr steil, und das Kopfsteinpflaster ist bei Regen glatt.

Unten am Fluss sehen Sie dann die Alte Brücke. Sie ist für Autos gesperrt, aber für Fußgänger und Radfahrer offen. Von der Mitte der Brücke haben Sie den schönsten Blick auf die Burg oben auf dem Berg. Die Burg erreichen Sie übrigens nur zu Fuß – oder mit dem kleinen Touristenzug, der jede halbe Stunde am Bahnhof abfährt.

Am Ende unserer Führung kommen wir zur Tourist-Information. Dort bekommen Sie mit Ihrem Ticket einen Gutschein für ein Glas Apfelsaft aus der Region. Haben Sie noch Fragen? Nein? Dann folgen Sie mir bitte!`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Der Wochenmarkt auf dem Marktplatz …',
                    options: ['findet heute statt.', 'findet zweimal pro Woche statt.', 'findet jeden Tag außer Mittwoch statt.'],
                    answer: 1,
                    explanationRu: 'Рынок бывает по вторникам и пятницам, а сегодня среда.',
                  },
                  {
                    kind: 'mc',
                    question: 'Das Rathaus …',
                    options: [
                      'ist das älteste Gebäude der Stadt.',
                      'wurde 1890 zum ersten Mal gebaut.',
                      'ist komplett im Original erhalten.',
                    ],
                    answer: 0,
                    explanationRu: 'Построено в 1520 году — самое старое здание города. В 1890 году сгорело, сохранился только фасад.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was passiert jeden Tag um zwölf Uhr?',
                    options: ['Die Glocken des Rathauses läuten.', 'Am Rathaus tanzen zwei Figuren.', 'Der Wochenmarkt schließt.'],
                    answer: 1,
                    explanationRu: 'В полдень под часами открывается окошко, и две деревянные фигуры танцуют.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt Herr Vogel über die Fischergasse?',
                    options: [
                      'Man muss dort vorsichtig gehen.',
                      'Dort wohnen heute noch viele Fischer.',
                      'Dort kann man gut parken.',
                    ],
                    answer: 0,
                    explanationRu: 'Улочка очень крутая, а брусчатка в дождь скользкая: «Bitte passen Sie gut auf».',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie kommt man zur Burg?',
                    options: [
                      'Mit dem Auto über die Alte Brücke.',
                      'Mit dem Bus vom Marktplatz.',
                      'Zu Fuß oder mit einem kleinen Zug.',
                    ],
                    answer: 2,
                    explanationRu: 'До замка можно дойти пешком или доехать на маленьком туристическом поезде от вокзала.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        instructionDe:
          'Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Sie sind auf einer Familienfeier und hören, wie sich Max und seine Tante Claudia unterhalten.',
        instructionRu:
          'Вы услышите разговор один раз. К нему нужно решить семь заданий. Выберите: верны утверждения или нет? Вы на семейном празднике и слышите, как Макс разговаривает со своей тётей Клаудией.',
        segments: [
          {
            title: 'Der Führerschein',
            kind: 'dialog',
            speakers: { A: 'Claudia, die Tante', B: 'Max, 18' },
            situation: 'Sie sind auf einer Familienfeier und hören, wie sich Max und seine Tante Claudia unterhalten.',
            playCount: 1,
            text: `A: Hallo Max! Deine Mutter hat mir erzählt, dass du gerade den Führerschein machst. Wie läuft es denn?
B: Hallo, Tante Claudia! Eigentlich ganz gut. Die Theorieprüfung habe ich letzte Woche bestanden – beim ersten Mal und ohne einen einzigen Fehler.
A: Glückwunsch! Das habe ich damals nicht geschafft, ich musste die Prüfung zweimal machen.
B: Echt? Na ja, ich habe auch jeden Abend mit einer App geübt. Das hat viel geholfen.
A: Und die Fahrstunden? Machen die Spaß?
B: Meistens schon. Am Anfang war ich total nervös, vor allem in der Stadt mit den vielen Radfahrern. Inzwischen geht es besser. Nur das Einparken klappt immer noch nicht richtig.
A: Das lernt man mit der Zeit. Wie viele Stunden hast du denn schon gehabt?
B: Achtzehn. Dazu kommen noch die Pflichtstunden, also auf der Autobahn, in der Nacht und auf der Landstraße. Die Autobahnfahrt habe ich am Freitag. Darauf freue ich mich schon.
A: Das ist ja alles ziemlich teuer, oder?
B: Oh ja. Insgesamt werden es bestimmt über 3000 Euro. Meine Eltern bezahlen die Hälfte, den Rest habe ich selbst gespart. Ich habe im Sommer in einem Supermarkt gearbeitet.
A: Respekt! Und wann ist die praktische Prüfung?
B: Wenn alles klappt, Ende nächsten Monats. Mein Fahrlehrer meint aber, dass ich noch ein paar Stunden mehr brauche.
A: Und dann? Bekommst du ein eigenes Auto?
B: Nein, das kann ich mir nicht leisten. Aber ich darf manchmal Mamas Auto nehmen. Eigentlich brauche ich den Führerschein vor allem für meine Ausbildung. Ab September arbeite ich in einer Firma im Gewerbegebiet, und dorthin fährt am Wochenende kein Bus.
A: Ach so, verstehe. Weißt du was? Wenn du bestanden hast, kannst du mich mal zum Flughafen fahren. Dann sehe ich, wie gut du bist.
B: Gern! Aber nur, wenn du nicht die ganze Zeit kommentierst!`,
            tasks: [
              {
                instructionDe: 'Wählen Sie: Sind die Aussagen richtig oder falsch?',
                instructionRu: 'Выберите: верны утверждения или нет?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Max hat die Theorieprüfung beim ersten Versuch bestanden.',
                    answer: true,
                    explanationRu: '«…beim ersten Mal und ohne einen einzigen Fehler».',
                  },
                  {
                    kind: 'tf',
                    statement: 'Max hat sich mit Büchern auf die Theorieprüfung vorbereitet.',
                    answer: false,
                    explanationRu: 'Он каждый вечер занимался с помощью приложения (App).',
                  },
                  {
                    kind: 'tf',
                    statement: 'Beim Einparken hat Max noch Probleme.',
                    answer: true,
                    explanationRu: '«Nur das Einparken klappt immer noch nicht richtig.»',
                  },
                  {
                    kind: 'tf',
                    statement: 'Max ist schon auf der Autobahn gefahren.',
                    answer: false,
                    explanationRu: 'Поездка по автобану будет только в пятницу.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Die Eltern bezahlen den ganzen Führerschein.',
                    answer: false,
                    explanationRu: 'Родители платят половину, остальное Макс накопил сам.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Max braucht den Führerschein vor allem für seine Ausbildung.',
                    answer: true,
                    explanationRu: 'На работу в промзону в выходные не ходит автобус.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Max bekommt nach der Prüfung ein eigenes Auto.',
                    answer: false,
                    explanationRu: '«Nein, das kann ich mir nicht leisten» — иногда он будет брать машину мамы.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 4,
        instructionDe:
          'Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Der Moderator der Radiosendung „Im Gespräch“ diskutiert mit Sabine Schäfer von der Verbraucherzentrale und David Okafor, Inhaber eines Cafés, über das Thema „Brauchen wir noch Bargeld?“.',
        instructionRu:
          'Вы услышите дискуссию два раза. К ней нужно решить восемь заданий. Определите: кто что говорит? Ведущий радиопередачи обсуждает с Сабиной Шефер из общества защиты прав потребителей и Давидом Окафором, владельцем кафе, тему «Нужны ли нам ещё наличные?».',
        segments: [
          {
            title: 'Brauchen wir noch Bargeld?',
            kind: 'discussion',
            speakers: { A: 'Thomas Lorenz (Moderator)', B: 'Sabine Schäfer', C: 'David Okafor' },
            situation: 'Sie hören eine Diskussion im Radio.',
            playCount: 2,
            text: `A: Guten Abend und willkommen zu „Im Gespräch“. In Deutschland bezahlen immer mehr Menschen mit Karte oder Smartphone. Trotzdem hängen viele am Bargeld. Brauchen wir Münzen und Scheine überhaupt noch? Darüber diskutiere ich mit Sabine Schäfer von der Verbraucherzentrale und mit David Okafor, der in Bremen ein Café hat. Herr Okafor, wie bezahlen Ihre Gäste?
C: Das ist sehr unterschiedlich. Morgens kommen viele Berufstätige, die zahlen fast alle mit dem Handy. Nachmittags kommen eher ältere Gäste, und die legen das Geld lieber auf den Tisch. Ich persönlich wäre froh, wenn alle mit Karte bezahlen würden.
A: Warum?
C: Bargeld macht viel Arbeit. Abends muss ich die Kasse zählen und dann das Geld zur Bank bringen. Dafür muss ich inzwischen in die Nachbarstadt fahren, weil die Filiale bei uns geschlossen wurde.
B: Das verstehe ich. Aber man muss auch an die Menschen denken, die kein Smartphone haben oder mit der Technik nicht zurechtkommen. Für sie wäre ein Leben ohne Bargeld sehr schwierig. Deshalb muss jedes Geschäft auch in Zukunft Bargeld annehmen.
A: Ich gebe zu, ich habe selbst kaum noch Bargeld im Portemonnaie. Neulich wollte ich auf dem Flohmarkt eine alte Lampe kaufen und musste erst zum Geldautomaten laufen.
B: Das ist ein gutes Beispiel. Und es gibt noch einen Punkt: Mit Bargeld behält man einen besseren Überblick über seine Ausgaben. Wer mit Karte bezahlt, gibt oft mehr aus, als er eigentlich wollte. Das sehe ich in meinen Beratungen jeden Tag, vor allem bei jungen Leuten.
C: Hm, das stimmt vielleicht. Aber heute zeigt doch jede Banking-App ganz genau, wofür man wie viel ausgegeben hat. Das ist viel übersichtlicher als ein Portemonnaie.
A: Wie sieht es eigentlich mit der Sicherheit aus?
C: Bei mir im Café wurde vor zwei Jahren eingebrochen. Die Diebe haben die ganze Kasse mitgenommen. Seitdem lasse ich abends kein Geld mehr im Laden.
B: Aber auch das digitale Bezahlen hat Risiken. Wenn das Netz ausfällt, kann man plötzlich gar nicht mehr bezahlen. Und bei jeder Zahlung entstehen Daten, die Firmen sammeln können.
A: Zum Schluss: Wird es in zwanzig Jahren noch Bargeld geben?
B: Ich hoffe es sehr. Die Menschen sollen selbst entscheiden können, wie sie bezahlen.
C: Ich glaube, es wird weniger werden, aber ganz verschwinden wird es nicht. Auf dem Flohmarkt sicher nicht!
A: Da haben Sie wohl recht. Vielen Dank für das Gespräch.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie jede Aussage einer Person zu.',
                instructionRu: 'Кто что говорит? Соотнесите каждое высказывание с одним из участников.',
                options: ['Thomas Lorenz (Moderator)', 'Sabine Schäfer', 'David Okafor'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Je nach Tageszeit bezahlen die Gäste unterschiedlich.',
                    answer: 2,
                    explanationRu: 'Окафор: утром платят телефоном, после обеда пожилые гости — наличными.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Alle Geschäfte sollten auch in Zukunft Bargeld annehmen müssen.',
                    answer: 1,
                    explanationRu: 'Шефер: «Deshalb muss jedes Geschäft auch in Zukunft Bargeld annehmen.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Das Geld zur Bank zu bringen, kostet viel Zeit.',
                    answer: 2,
                    explanationRu: 'Окафор вынужден ездить в банк в соседний город.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Ich hatte neulich nicht genug Bargeld dabei.',
                    answer: 0,
                    explanationRu: 'Ведущий рассказывает про блошиный рынок: пришлось идти к банкомату.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Wer mit Karte bezahlt, gibt leicht zu viel Geld aus.',
                    answer: 1,
                    explanationRu: 'Шефер видит это на консультациях, особенно у молодёжи.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Mit einer App kann man seine Ausgaben gut kontrollieren.',
                    answer: 2,
                    explanationRu: 'Окафор: банковское приложение показывает расходы нагляднее, чем кошелёк.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Wenn die Technik nicht funktioniert, kann man nicht bezahlen.',
                    answer: 1,
                    explanationRu: 'Шефер: «Wenn das Netz ausfällt, kann man plötzlich gar nicht mehr bezahlen.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Bargeld wird es weniger geben, aber es wird nicht ganz verschwinden.',
                    answer: 2,
                    explanationRu: 'Прогноз Окафора в конце дискуссии.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────── SCHREIBEN ───────────────────────────
  schreiben: {
    minutes: 60,
    tasks: [
      {
        teil: 1,
        instructionDe:
          'Sie haben vor einem Monat eine neue Arbeitsstelle angefangen. Ihre Freundin Anna weiß das noch nicht. Schreiben Sie Anna eine E-Mail. Schreiben Sie etwa 80 Wörter. Schreiben Sie etwas zu allen drei Punkten.',
        instructionRu:
          'Месяц назад вы начали работать на новом месте. Ваша подруга Анна ещё об этом не знает. Напишите ей электронное письмо (около 80 слов). Раскройте все три пункта.',
        situationDe: 'Sie haben vor einem Monat eine neue Stelle in einer anderen Firma begonnen. Ihre Freundin Anna weiß noch nichts davon.',
        points: [
          'Beschreiben Sie: Wie sind die neue Arbeit und die Kollegen?',
          'Begründen Sie: Warum haben Sie die Stelle gewechselt?',
          'Machen Sie einen Vorschlag für ein Treffen am Wochenende.',
        ],
        minWords: 80,
        register: 'informell',
        minutes: 20,
        maxPoints: 40,
      },
      {
        teil: 2,
        instructionDe:
          'Sie haben im Radio eine Sendung zum Thema „Haustiere in der Stadt“ gehört. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie nun Ihre Meinung (circa 80 Wörter).',
        instructionRu:
          'Вы слушали радиопередачу на тему «Домашние животные в городе». В онлайн-гостевой книге передачи вы нашли следующее мнение. Напишите своё мнение (около 80 слов).',
        situationDe:
          'Tobias, 34: „Ich finde, Hunde und Katzen gehören nicht in eine kleine Stadtwohnung. Die Tiere haben dort viel zu wenig Platz und sind oft den ganzen Tag allein, weil ihre Besitzer arbeiten. Wer ein Haustier haben möchte, sollte aufs Land ziehen.“',
        points: [
          'Sagen Sie Ihre Meinung zu Haustieren in der Stadt.',
          'Nennen Sie Argumente und geben Sie Beispiele.',
          'Berichten Sie, wenn möglich, von eigenen Erfahrungen.',
        ],
        minWords: 80,
        register: 'halbformell',
        minutes: 25,
        maxPoints: 40,
      },
      {
        teil: 3,
        instructionDe:
          'Ihr Vermieter, Herr Ziegler, hat Ihnen mitgeteilt, dass am Donnerstag zwischen 8 und 12 Uhr ein Techniker die Heizung in Ihrer Wohnung kontrollieren soll. Sie sind zu dieser Zeit nicht zu Hause. Schreiben Sie an Herrn Ziegler. Entschuldigen Sie sich höflich und schlagen Sie eine Lösung vor. Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.',
        instructionRu:
          'Ваш арендодатель, господин Циглер, сообщил, что в четверг с 8 до 12 часов техник проверит отопление в вашей квартире. В это время вас не будет дома. Напишите ему письмо (около 40 слов): вежливо извинитесь и предложите решение. Не забудьте обращение и приветствие в конце.',
        situationDe: 'Kontrolle der Heizung am Donnerstag zwischen 8 und 12 Uhr – Sie sind dann nicht zu Hause.',
        points: [
          'Entschuldigen Sie sich höflich.',
          'Erklären Sie, warum Sie nicht zu Hause sind.',
          'Schlagen Sie einen anderen Termin oder eine andere Lösung vor.',
        ],
        minWords: 40,
        register: 'formell',
        minutes: 15,
        maxPoints: 20,
      },
    ],
  },

  // ─────────────────────────── SPRECHEN ───────────────────────────
  sprechen: {
    minutes: 15,
    tasks: [
      {
        teil: 1,
        mode: 'dialog',
        instructionDe:
          'Gemeinsam etwas planen. Ihr Deutschkurs ist bald zu Ende. Sie möchten zusammen mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner zum Abschluss einen Ausflug für die ganze Kursgruppe organisieren. Sprechen Sie über die Punkte unten, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Gesprächspartners. Planen und entscheiden Sie gemeinsam, was Sie tun möchten.',
        instructionRu:
          'Совместное планирование. Ваш курс немецкого скоро заканчивается. Вместе с партнёром организуйте прощальную поездку для всей группы. Обсудите пункты ниже, делайте предложения, реагируйте на предложения партнёра и вместе примите решение.',
        situationDe: 'Ein Ausflug mit der ganzen Kursgruppe zum Ende des Deutschkurses.',
        points: [
          'Wohin fahren?',
          'Wie hinkommen?',
          'Wann und wo treffen?',
          'Essen und Trinken?',
          'Wer kümmert sich um was?',
        ],
        aiRole:
          'Kurskollegin / Kurskollege, die oder der zusammen mit Ihnen den Kursausflug plant. Macht eigene Vorschläge, reagiert auf Ihre Ideen, ist manchmal anderer Meinung und sucht mit Ihnen eine gemeinsame Lösung.',
        opener:
          'Hallo! Unser Kurs ist ja in drei Wochen zu Ende. Die anderen haben gefragt, ob wir zwei einen Ausflug organisieren können. Hast du schon eine Idee, wohin wir fahren könnten?',
        minutes: 3,
        maxPoints: 40,
      },
      {
        teil: 2,
        mode: 'presentation',
        instructionDe:
          'Ein Thema präsentieren. Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben. Sprechen Sie etwa drei Minuten.',
        instructionRu:
          'Презентация темы. Вам нужно представить слушателям актуальную тему. Ниже пять слайдов — следуйте указаниям на каждом из них. Говорите около трёх минут.',
        situationDe: 'Thema: „Selbst kochen oder Fertiggerichte?“',
        points: [
          'Folie 1: Selbst kochen oder Fertiggerichte? – Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.',
          'Folie 2: Meine persönlichen Erfahrungen – Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.',
          'Folie 3: Die Situation in meinem Heimatland – Berichten Sie, wie es in Ihrem Heimatland ist, und geben Sie Beispiele.',
          'Folie 4: Vor- und Nachteile & meine Meinung – Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.',
          'Folie 5: Abschluss & Dank – Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.',
        ],
        aiRole: 'Prüfer, der Ihrer Präsentation zuhört und Sie nicht unterbricht.',
        opener: 'Bitte beginnen Sie jetzt mit Ihrer Präsentation zum Thema „Selbst kochen oder Fertiggerichte?“. Sie haben etwa drei Minuten Zeit.',
        minutes: 3,
        maxPoints: 40,
      },
      {
        teil: 3,
        mode: 'dialog',
        instructionDe:
          'Über eine Präsentation sprechen. Nach Ihrer Präsentation gibt Ihnen Ihr Gesprächspartner eine Rückmeldung und stellt Ihnen Fragen zu Ihrer Präsentation. Reagieren Sie auf die Rückmeldung und beantworten Sie die Fragen.',
        instructionRu:
          'Обсуждение презентации. После вашей презентации партнёр даёт вам обратную связь и задаёт вопросы. Отреагируйте на обратную связь и ответьте на вопросы.',
        situationDe: 'Gespräch nach Ihrer Präsentation „Selbst kochen oder Fertiggerichte?“.',
        points: [
          'Reagieren Sie auf die Rückmeldung Ihres Gesprächspartners.',
          'Beantworten Sie die Fragen ausführlich und mit Beispielen.',
          'Fragen Sie gegebenenfalls nach, wenn Sie etwas nicht verstanden haben.',
        ],
        aiRole:
          'Gesprächspartner bzw. Prüfer, der Ihre Präsentation gehört hat. Gibt eine kurze, freundliche Rückmeldung und stellt ein bis zwei Fragen zu Ihrer Präsentation.',
        opener:
          'Danke für deine Präsentation, die Beispiele aus deinem Heimatland fand ich besonders spannend! Eine Frage habe ich noch: Wie viel Zeit hast du an einem normalen Arbeitstag zum Kochen – und was kochst du dann am liebsten?',
        minutes: 2,
        maxPoints: 20,
      },
    ],
  },
};
