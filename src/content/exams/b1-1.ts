import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'b1-exam-1',
  level: 'B1',
  title: 'Übungstest B1 – 1',

  // ───────────────────────────── LESEN ─────────────────────────────
  lesen: {
    minutes: 65,
    parts: [
      {
        teil: 1,
        minutes: 10,
        title: 'Samstags im Reparaturcafé',
        textType: 'Blogbeitrag',
        texts: [
          {
            heading: 'Miriams Blog: Samstags im Reparaturcafé',
            body: `Hallo zusammen!

Heute möchte ich euch von meinem neuen Hobby erzählen. Seit März helfe ich jeden zweiten Samstag im Reparaturcafé in unserem Stadtteil mit. Die Idee ist ganz einfach: Die Leute bringen kaputte Sachen mit – einen Toaster, eine Lampe oder eine Hose mit Loch – und reparieren sie zusammen mit Ehrenamtlichen wie mir. Bezahlen muss niemand, aber die meisten Besucher geben eine kleine Spende für Kaffee und Kuchen.

Eigentlich bin ich Bürokauffrau und habe mit Technik nicht viel zu tun. Am Anfang hatte ich deshalb Angst, dass ich gar nicht helfen kann. Mein Nachbar Herbert, ein pensionierter Elektriker, hat mich damals einfach mitgenommen. Er hat gesagt: „Du kannst doch nähen, das reicht völlig.“ Er hatte recht: An meinem Tisch werden vor allem Kleidung und Taschen repariert. Elektrogeräte darf bei uns übrigens nur reparieren, wer eine passende Ausbildung hat – das ist einfach sicherer.

Am schönsten finde ich die Gespräche. Letzten Samstag kam eine ältere Dame mit einem Teddybären, der schon ihrer Tochter gehört hatte. Ein Arm war ab, und sie war ganz traurig. Nach einer halben Stunde war der Bär wieder wie neu, und sie hat vor Freude fast geweint.

Natürlich klappt nicht alles. Manchmal fehlen Ersatzteile, oder ein Gerät ist einfach zu alt. Dann empfehlen wir eine Fachwerkstatt oder erklären, wie man das Gerät richtig entsorgt.

Wir suchen übrigens noch Leute, die sich mit Fahrrädern auskennen. Wer Lust hat, kann einfach vorbeikommen: Wir treffen uns im Gemeindehaus in der Lindenstraße, von 10 bis 14 Uhr.

Eure Miriam`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text und die Aufgaben dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте текст и задания к нему. Выберите: верны утверждения (richtig) или нет (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: 'Miriam arbeitet jeden Samstag im Reparaturcafé.',
                answer: false,
                explanationRu: 'В тексте: «jeden zweiten Samstag» — каждую вторую субботу, а не каждую.',
              },
              {
                kind: 'tf',
                statement: 'Die Besucher müssen für die Reparatur nichts bezahlen.',
                answer: true,
                explanationRu: '«Bezahlen muss niemand» — платить никто не обязан, можно оставить пожертвование.',
              },
              {
                kind: 'tf',
                statement: 'Miriam hat in ihrem Beruf viel mit Technik zu tun.',
                answer: false,
                explanationRu: 'Она офисный работник: «habe mit Technik nicht viel zu tun».',
              },
              {
                kind: 'tf',
                statement: 'Im Reparaturcafé darf jeder Helfer Elektrogeräte reparieren.',
                answer: false,
                explanationRu: 'Электроприборы ремонтируют только те, у кого есть соответствующее образование: «nur …, wer eine passende Ausbildung hat».',
              },
              {
                kind: 'tf',
                statement: 'Die ältere Dame hat sich über die Reparatur sehr gefreut.',
                answer: true,
                explanationRu: '«…sie hat vor Freude fast geweint» — она чуть не заплакала от радости.',
              },
              {
                kind: 'tf',
                statement: 'Das Reparaturcafé sucht noch Helfer, die Fahrräder reparieren können.',
                answer: true,
                explanationRu: '«Wir suchen übrigens noch Leute, die sich mit Fahrrädern auskennen.»',
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
            heading: 'Wohnen für Hilfe: Studentin zieht bei Rentnerin ein',
            body: `Göttingen. Seit einem halben Jahr wohnt die 22-jährige Lehramtsstudentin Lea Hartmann bei der 79-jährigen Gisela Brandt. Miete zahlt sie dafür kaum: Für ihr 18 Quadratmeter großes Zimmer überweist sie nur die Nebenkosten von 90 Euro im Monat. Dafür hilft sie ihrer Vermieterin im Haushalt – pro Quadratmeter Wohnfläche eine Stunde im Monat, also etwa 18 Stunden. Lea kauft ein, mäht den Rasen und bringt den Müll raus. Pflegearbeiten gehören ausdrücklich nicht dazu.

Das Projekt „Wohnen für Hilfe“ gibt es in vielen deutschen Universitätsstädten. Organisiert wird es meistens vom Studierendenwerk zusammen mit der Stadt. Die Mitarbeiterinnen führen mit beiden Seiten ausführliche Gespräche, bevor sie passende Partner zusammenbringen. „Nicht nur der Preis muss stimmen, sondern auch die Chemie“, sagt Projektleiterin Sandra Wolf. Pro Jahr finden in Göttingen etwa 40 Paare zusammen. Die Nachfrage von Studierenden ist allerdings dreimal so groß wie das Angebot an Zimmern.

Für Gisela Brandt ist das Projekt ein Glück. Nach dem Tod ihres Mannes war es in dem großen Haus sehr still. „Jetzt ist wieder Leben im Haus“, sagt sie. Abends spielen die beiden oft Karten, und am Wochenende kocht Lea manchmal für beide. Nur mit der lauten Musik hatte die Rentnerin am Anfang Probleme – inzwischen benutzt Lea Kopfhörer.`,
          },
          {
            label: 'Text 2',
            heading: 'Schule ohne Hausaufgaben – ein Versuch',
            body: `Kassel. Am Gymnasium am Weinberg gibt es seit Beginn des Schuljahres in den Klassen 5 bis 7 keine Hausaufgaben mehr. Stattdessen haben die Kinder jeden Tag eine zusätzliche „Lernzeit“ in der Schule. In diesen 45 Minuten üben sie selbstständig, und Lehrkräfte helfen, wenn jemand Fragen hat.

Die Idee kam von den Eltern. „In vielen Familien gab es abends nur noch Streit wegen der Hausaufgaben“, erzählt Schulleiter Thomas Becker. Außerdem sei das alte System ungerecht gewesen: Kinder, deren Eltern helfen konnten oder Nachhilfe bezahlten, hätten Vorteile gehabt. In der Lernzeit dagegen hätten alle die gleichen Chancen.

Nach den ersten Monaten sind die Reaktionen überwiegend positiv. In einer Umfrage gaben drei Viertel der Eltern an, dass die Nachmittage entspannter geworden seien. Auch die Noten sind bisher nicht schlechter geworden. Einige Lehrerinnen und Lehrer sind trotzdem skeptisch: Vokabeln zum Beispiel müsse man auch zu Hause wiederholen, meinen sie. Deshalb dürfen die Kinder freiwillig weiterüben – kontrolliert wird das aber nicht.

Ob das Modell auch in den höheren Klassen eingeführt wird, will die Schule im Sommer entscheiden. Bis dahin soll eine Studie der Universität Kassel zeigen, wie gut die Schülerinnen und Schüler wirklich gelernt haben.`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text 1 aus der Presse und die Aufgaben dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст 1 из прессы и задания к нему. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Lea Hartmann …',
                options: [
                  'zahlt eine normale Miete für ihr Zimmer.',
                  'bezahlt nur die Nebenkosten.',
                  'wohnt ganz kostenlos bei Frau Brandt.',
                ],
                answer: 1,
                explanationRu: '«…überweist sie nur die Nebenkosten von 90 Euro» — она платит только коммунальные расходы.',
              },
              {
                kind: 'mc',
                question: 'Im Projekt „Wohnen für Hilfe“ …',
                options: [
                  'pflegen die Studierenden alte Menschen.',
                  'gibt es mehr Zimmer als interessierte Studierende.',
                  'sprechen Mitarbeiterinnen vorher mit beiden Seiten.',
                ],
                answer: 2,
                explanationRu: '«Die Mitarbeiterinnen führen mit beiden Seiten ausführliche Gespräche». Уход (Pflege) исключён, а спрос втрое больше предложения.',
              },
              {
                kind: 'mc',
                question: 'Frau Brandt …',
                options: [
                  'hatte am Anfang Probleme mit Leas Musik.',
                  'kocht jeden Abend für Lea.',
                  'möchte ihr großes Haus verkaufen.',
                ],
                answer: 0,
                explanationRu: '«Nur mit der lauten Musik hatte die Rentnerin am Anfang Probleme». Готовит иногда Леа, а не фрау Брандт.',
              },
            ],
          },
          {
            instructionDe: 'Lesen Sie den Text 2 aus der Presse und die Aufgaben dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст 2 из прессы и задания к нему. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Die Kinder in den Klassen 5 bis 7 …',
                options: [
                  'haben jetzt am Nachmittag immer frei.',
                  'bekommen weniger Hausaufgaben als früher.',
                  'lernen jeden Tag zusätzlich in der Schule.',
                ],
                answer: 2,
                explanationRu: 'Вместо домашних заданий есть ежедневное дополнительное «Lernzeit» (45 минут) в школе. Домашних заданий нет совсем, а не «меньше».',
              },
              {
                kind: 'mc',
                question: 'Der Schulleiter meint, dass …',
                options: [
                  'Eltern bei den Hausaufgaben mehr helfen sollten.',
                  'früher nicht alle Kinder die gleichen Chancen hatten.',
                  'Nachhilfe für viele Familien zu teuer ist.',
                ],
                answer: 1,
                explanationRu: 'Директор считает старую систему несправедливой: дети, которым помогали родители или репетиторы, имели преимущество.',
              },
              {
                kind: 'mc',
                question: 'Im Sommer …',
                options: [
                  'bekommen alle Klassen keine Hausaufgaben mehr.',
                  'entscheidet die Schule, wie es weitergeht.',
                  'kontrollieren die Lehrer die Vokabeln.',
                ],
                answer: 1,
                explanationRu: '«Ob das Modell auch in den höheren Klassen eingeführt wird, will die Schule im Sommer entscheiden.»',
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        minutes: 10,
        title: 'Kurse und Freizeitangebote',
        textType: 'Anzeigen',
        texts: [
          {
            label: 'a',
            heading: 'Business English – online',
            body: 'Sie brauchen Englisch im Job? Unsere Online-Kurse für Berufstätige finden montags und mittwochs von 19 bis 20.30 Uhr per Videokonferenz statt. Themen: Telefonieren, E-Mails, Meetings. Einstufungstest kostenlos auf unserer Webseite.',
          },
          {
            label: 'b',
            heading: 'Fleisch & Feuer – der Grillkurs',
            body: 'Das perfekte Steak, saftige Rippchen, Würstchen vom Profi: In unserem Grillkurs am Samstagnachmittag lernen Sie alle Tricks rund um Fleisch und Holzkohle. Getränke inklusive. Max. 12 Personen.',
          },
          {
            label: 'c',
            heading: 'Tanzschule Wirbel – Schnupperabend',
            body: 'Walzer, Tango, Discofox – einfach mal ausprobieren! Jeden Freitag ab 20 Uhr Schnupperabend für Paare. Ohne Anmeldung, ohne Vertrag, 10 Euro pro Person. Bequeme Schuhe mitbringen!',
          },
          {
            label: 'd',
            heading: 'Digital fit ab 60',
            body: 'Nachrichten schreiben, Fotos verschicken, mit den Enkeln per Video telefonieren: In unserem Kurs im Bürgerzentrum lernen Seniorinnen und Senioren in kleinen Gruppen Schritt für Schritt, ihr Smartphone zu benutzen. Geduldige Trainer, keine Vorkenntnisse nötig.',
          },
          {
            label: 'e',
            heading: 'Englisch für die Reise',
            body: 'Im Hotel einchecken, nach dem Weg fragen, im Restaurant bestellen: Unser Kurs an der Volkshochschule bereitet Sie auf den nächsten Urlaub vor. Dienstags und donnerstags, 9 bis 11 Uhr, im Raum 204.',
          },
          {
            label: 'f',
            heading: 'Bäckerei Kornfeld: Brot wie früher',
            body: 'Sauerteig ansetzen, Teig kneten, im Holzofen backen: In unserer Backstube zeigt Bäckermeister Huber jeden ersten Sonntag im Monat, wie man ein richtig gutes Brot selbst macht. Das Brot dürfen Sie natürlich mit nach Hause nehmen.',
          },
          {
            label: 'g',
            heading: 'Aqua-Fitness im Hallenbad',
            body: 'Fit werden im Wasser – gut für Rücken und Gelenke! Kurse für Erwachsene jeden Dienstag und Donnerstag um 18 Uhr im Hallenbad Am Stadtpark. Schwimmkenntnisse erforderlich.',
          },
          {
            label: 'h',
            heading: 'Kochschule „Grüner Löffel“',
            body: 'Gemüse kann mehr! Bei uns lernen Sie die vegetarische und vegane Küche aus aller Welt kennen. Kurse jeden Samstag von 10 bis 14 Uhr, Gruppen mit höchstens acht Personen. Anmeldung bis Donnerstag.',
          },
          {
            label: 'i',
            heading: 'Hip-Hop für Kids und Teens',
            body: 'Coole Moves zu aktueller Musik: Unsere Hip-Hop-Kurse für Jugendliche von 12 bis 16 Jahren finden montags und mittwochs nachmittags statt. Am Ende des Kurses gibt es eine große Show für Eltern und Freunde.',
          },
          {
            label: 'j',
            heading: 'Freizeitkicker gesucht!',
            body: 'Unsere Hobbymannschaft „Alte Herren“ sucht Verstärkung. Wir sind zwischen 35 und 60 Jahre alt und spielen einmal pro Woche zum Spaß. Anfänger sind herzlich willkommen – wichtig ist nur die gute Laune!',
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Situationen und die Anzeigen a bis j. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie „keine passende Anzeige“.',
            instructionRu:
              'Прочитайте ситуации и объявления a–j. Выберите, какое объявление подходит к какой ситуации. Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет — в этом случае выберите «нет подходящего объявления».',
            options: [
              'Business English – online',
              'Fleisch & Feuer – der Grillkurs',
              'Tanzschule Wirbel – Schnupperabend',
              'Digital fit ab 60',
              'Englisch für die Reise',
              'Bäckerei Kornfeld: Brot wie früher',
              'Aqua-Fitness im Hallenbad',
              'Kochschule „Grüner Löffel“',
              'Hip-Hop für Kids und Teens',
              'Freizeitkicker gesucht!',
            ],
            allowNone: true,
            items: [
              {
                kind: 'match',
                prompt: 'Ihre Freundin möchte am Wochenende kochen lernen. Sie isst kein Fleisch.',
                answer: 7,
                explanationRu: 'h — вегетарианская и веганская кухня по субботам. Курс b (гриль) — про мясо.',
              },
              {
                kind: 'match',
                prompt: 'Ein Kollege möchte sein Englisch für den Beruf verbessern. Er hat nur abends Zeit und möchte von zu Hause aus lernen.',
                answer: 0,
                explanationRu: 'a — онлайн-курс делового английского по вечерам. Курс e — утром и очно, для путешествий.',
              },
              {
                kind: 'match',
                prompt: 'Ihre Nachbarin ist 72 und möchte lernen, wie man mit dem Handy Fotos an die Familie schickt.',
                answer: 3,
                explanationRu: 'd — курс по смартфону для пожилых: «Fotos verschicken».',
              },
              {
                kind: 'match',
                prompt: 'Ihr Sohn ist sechs Jahre alt und soll in den Sommerferien schwimmen lernen.',
                answer: -1,
                explanationRu: 'Подходящего объявления нет: Aqua-Fitness (g) — для взрослых, умеющих плавать.',
              },
              {
                kind: 'match',
                prompt: 'Ein Freund (42) möchte in seiner Freizeit Fußball spielen. Er hat das aber noch nie in einem Verein gemacht.',
                answer: 9,
                explanationRu: 'j — любительская команда 35–60 лет, новички приветствуются.',
              },
              {
                kind: 'match',
                prompt: 'Ihre Schwester und ihr Mann möchten Paartanz einmal ausprobieren, ohne sich lange für einen Kurs anzumelden.',
                answer: 2,
                explanationRu: 'c — пробный вечер для пар без записи и без договора. Хип-хоп (i) — для подростков.',
              },
              {
                kind: 'match',
                prompt: 'Sie möchten lernen, wie man selbst Brot backt.',
                answer: 5,
                explanationRu: 'f — пекарня проводит курс «Brot wie früher».',
              },
            ],
          },
        ],
      },
      {
        teil: 4,
        minutes: 15,
        title: 'Handyverbot an Schulen?',
        textType: 'Leserbriefe',
        texts: [
          {
            label: 'Markus',
            heading: 'Markus, 45, Hamburg',
            body: 'Mein Sohn ist zwölf. Früher hat er mir erzählt, dass in den Pausen alle nur auf ihre Bildschirme schauen und niemand mehr Fußball spielt. Seit seine Schule die Handys morgens einsammelt und erst nach dem Unterricht zurückgibt, ist das ganz anders. Die Kinder reden wieder miteinander. So eine Regel sollte es meiner Meinung nach an allen Schulen geben.',
          },
          {
            label: 'Aylin',
            heading: 'Aylin, 16, Köln',
            body: 'Ich brauche mein Handy, um meinen Eltern nach der Schule Bescheid zu sagen, wenn der Bus ausfällt. Außerdem benutzen wir im Unterricht oft Lern-Apps oder suchen schnell etwas im Internet. Ein Verbot wäre wirklich ein Schritt zurück. Viel sinnvoller sind klare Regeln, wann man das Handy benutzen darf und wann nicht.',
          },
          {
            label: 'Herr Krüger',
            heading: 'Stefan Krüger, 51, Lehrer aus Erfurt',
            body: 'Ich merke jeden Tag, wie schwer es Jugendlichen fällt, sich zu konzentrieren, wenn das Handy in der Tasche vibriert. Und für Notfälle gibt es ja das Telefon im Sekretariat. Deshalb sage ich ganz klar: Während der Schulzeit gehören Handys in den Spind und nicht auf den Tisch.',
          },
          {
            label: 'Julia',
            heading: 'Julia, 38, Leipzig',
            body: 'Natürlich nervt mich das ständige Tippen meiner Tochter manchmal auch. Aber mit Verboten lösen wir das Problem nicht. Kinder müssen lernen, vernünftig mit dem Handy umzugehen, und das geht nur, wenn sie es auch benutzen dürfen. Die Schule sollte lieber Medienkompetenz unterrichten, statt einfach alles zu verbieten.',
          },
          {
            label: 'Paul',
            heading: 'Paul, 19, Freiburg',
            body: 'Als Schüler war ich selbst gegen jedes Verbot und habe heimlich unter dem Tisch gechattet. Heute sehe ich das anders: Ich habe im Unterricht viel verpasst, und meine Noten waren deshalb nicht besonders gut. Strengere Regeln hätten mir damals sicher geholfen. Ich verstehe gut, warum Schulen die Handys wegschließen wollen.',
          },
          {
            label: 'Frau Demir',
            heading: 'Selin Demir, 34, Schulsozialarbeiterin aus Dortmund',
            body: 'An unserer Gesamtschule werden die Handys seit einem Jahr morgens in Boxen eingeschlossen. Seitdem gibt es in den Pausen deutlich weniger Streit, und auch peinliche Fotos von Mitschülern tauchen nicht mehr ständig im Klassenchat auf. Die Schülerinnen und Schüler haben sich schnell daran gewöhnt. Ich kann ein solches Verbot nur empfehlen.',
          },
          {
            label: 'Erik',
            heading: 'Erik, 68, Rostock',
            body: 'Man könnte denken, dass jemand in meinem Alter gegen Handys ist. Aber meine Enkelin schickt mir in der Mittagspause oft ein Foto oder eine kurze Nachricht, und darüber freue ich mich jedes Mal. Im Unterricht sollte das Handy natürlich aus sein. Aber ein komplettes Verbot in der ganzen Schule finde ich übertrieben.',
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Texte. In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über Handys in der Schule. Wählen Sie: Ist die Person für ein Handyverbot an Schulen?',
            instructionRu:
              'Прочитайте тексты. В журнале вы читаете комментарии к статье о мобильных телефонах в школе. Выберите: выступает ли человек ЗА запрет телефонов в школах? (Ja — да, Nein — нет)',
            tfLabels: ['Ja', 'Nein'],
            items: [
              {
                kind: 'tf',
                statement: 'Markus ist für ein Handyverbot an Schulen.',
                answer: true,
                explanationRu: '«So eine Regel sollte es … an allen Schulen geben» — он за запрет.',
              },
              {
                kind: 'tf',
                statement: 'Aylin ist für ein Handyverbot an Schulen.',
                answer: false,
                explanationRu: '«Ein Verbot wäre wirklich ein Schritt zurück» — она за правила, но против запрета.',
              },
              {
                kind: 'tf',
                statement: 'Herr Krüger ist für ein Handyverbot an Schulen.',
                answer: true,
                explanationRu: '«Während der Schulzeit gehören Handys in den Spind» — учитель за запрет.',
              },
              {
                kind: 'tf',
                statement: 'Julia ist für ein Handyverbot an Schulen.',
                answer: false,
                explanationRu: '«…mit Verboten lösen wir das Problem nicht» — она против запрета, за обучение медиакомпетентности.',
              },
              {
                kind: 'tf',
                statement: 'Paul ist für ein Handyverbot an Schulen.',
                answer: true,
                explanationRu: 'Раньше был против, но сегодня считает: «Strengere Regeln hätten mir damals sicher geholfen».',
              },
              {
                kind: 'tf',
                statement: 'Frau Demir ist für ein Handyverbot an Schulen.',
                answer: true,
                explanationRu: '«Ich kann ein solches Verbot nur empfehlen.»',
              },
              {
                kind: 'tf',
                statement: 'Erik ist für ein Handyverbot an Schulen.',
                answer: false,
                explanationRu: 'Только на уроках телефон должен быть выключен, но «ein komplettes Verbot … finde ich übertrieben».',
              },
            ],
          },
        ],
      },
      {
        teil: 5,
        minutes: 10,
        title: 'Badeordnung',
        textType: 'Hausordnung',
        texts: [
          {
            heading: 'Badeordnung – Hallenbad Am Stadtpark',
            body: `§ 1 Öffnungszeiten
Das Hallenbad ist dienstags bis sonntags von 7 bis 21 Uhr geöffnet. Montags bleibt das Bad wegen Reinigungsarbeiten geschlossen. Der Einlass endet eine Stunde vor Schließung. Das Wasser muss 20 Minuten vor Schließung verlassen werden.

§ 2 Eintritt
Die Eintrittskarte gilt für einen Aufenthalt von höchstens drei Stunden. Wer länger bleibt, zahlt beim Verlassen des Bades für jede weitere angefangene Stunde 2 Euro nach. Kinder unter sechs Jahren haben freien Eintritt, dürfen das Bad aber nur in Begleitung eines Erwachsenen besuchen.

§ 3 Hygiene
Vor dem Baden ist gründliches Duschen ohne Badekleidung Pflicht. Im Barfußbereich dürfen keine Straßenschuhe getragen werden. Das Schwimmen in Unterwäsche oder Straßenkleidung ist nicht gestattet.

§ 4 Sicherheit
Das Springen vom Beckenrand ist nur im Sprungbecken erlaubt. Der Sprungturm ist nur geöffnet, wenn eine Aufsicht anwesend ist. Nichtschwimmer dürfen sich nur im Nichtschwimmerbereich aufhalten.

§ 5 Wertsachen
Für Wertsachen stehen Schließfächer zur Verfügung. Sie benötigen dafür eine 1-Euro-Münze, die Sie zurückbekommen. Für Gegenstände, die nicht eingeschlossen werden, übernimmt das Bad keine Haftung.

§ 6 Speisen und Getränke
Mitgebrachte Speisen dürfen nur im Aufenthaltsraum gegessen werden. Glasflaschen sind im gesamten Bad verboten.

§ 7 Fotografieren
Fotografieren und Filmen ist nur mit Erlaubnis der Badleitung gestattet.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sie informieren sich über die Badeordnung im Hallenbad Ihrer Stadt. Lesen Sie die Aufgaben und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu:
              'Вы знакомитесь с правилами крытого бассейна вашего города. Прочитайте задания и текст. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Wer an einem Mittwoch um 20.30 Uhr zum Hallenbad kommt, …',
                options: [
                  'darf noch eine halbe Stunde schwimmen.',
                  'kommt nicht mehr ins Bad.',
                  'muss einen höheren Eintritt bezahlen.',
                ],
                answer: 1,
                explanationRu: '§ 1: вход заканчивается за час до закрытия, т. е. в 20 часов.',
              },
              {
                kind: 'mc',
                question: 'Für Kinder gilt:',
                options: [
                  'Kinder unter sechs Jahren zahlen keinen Eintritt.',
                  'Kinder dürfen nur am Wochenende ins Bad.',
                  'Kinder unter sechs Jahren dürfen allein schwimmen.',
                ],
                answer: 0,
                explanationRu: '§ 2: «Kinder unter sechs Jahren haben freien Eintritt», но только в сопровождении взрослого.',
              },
              {
                kind: 'mc',
                question: 'Wenn man länger als drei Stunden im Bad bleibt, …',
                options: [
                  'muss man sofort das Bad verlassen.',
                  'braucht man eine Tageskarte.',
                  'muss man Geld nachzahlen.',
                ],
                answer: 2,
                explanationRu: '§ 2: за каждый начатый дополнительный час доплачивают 2 евро.',
              },
              {
                kind: 'mc',
                question: 'Im Hallenbad ist es erlaubt, …',
                options: [
                  'eigenes Essen am Beckenrand zu essen.',
                  'mit Erlaubnis der Badleitung Fotos zu machen.',
                  'überall vom Beckenrand zu springen.',
                ],
                answer: 1,
                explanationRu: '§ 7: фотографировать можно с разрешения администрации. Еду — только в комнате отдыха, прыгать — только в бассейне для прыжков.',
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
            title: 'Durchsage am Bahnhof',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage am Bahnhof.',
            playCount: 2,
            text: 'Liebe Fahrgäste am Gleis 7, bitte beachten Sie: Der Regionalexpress RE 4 nach Aachen, planmäßige Abfahrt 14.12 Uhr, fällt heute wegen einer Signalstörung aus. Reisende nach Aachen benutzen bitte die Regionalbahn um 14.25 Uhr von Gleis 5. Diese Bahn hält an allen Stationen, Sie kommen deshalb etwa zwanzig Minuten später in Aachen an. Ihre Fahrkarten für den Regionalexpress behalten ihre Gültigkeit. Wir bitten um Entschuldigung.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Der Regionalexpress nach Aachen hat heute Verspätung.',
                    answer: false,
                    explanationRu: 'Поезд не опаздывает, а отменён: «fällt heute … aus».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sollen die Fahrgäste nach Aachen tun?',
                    options: [
                      'Am Gleis 7 auf den nächsten Regionalexpress warten.',
                      'Eine neue Fahrkarte kaufen.',
                      'Mit der Regionalbahn von Gleis 5 fahren.',
                    ],
                    answer: 2,
                    explanationRu: '«…benutzen bitte die Regionalbahn um 14.25 Uhr von Gleis 5». Старые билеты действительны.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von der Arztpraxis',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Guten Tag, Frau Kowalski, hier ist die Praxis Dr. Seidel. Sie haben morgen, am Donnerstag, um 9.30 Uhr einen Termin bei uns. Leider ist Frau Dr. Seidel krank geworden. Wir können Ihnen einen neuen Termin am Montag um 8 Uhr anbieten. Sie können aber auch morgen zu ihrer Vertretung gehen, das ist Dr. Haas in der Bahnhofstraße 12. Bitte rufen Sie uns heute noch bis 18 Uhr zurück und sagen Sie uns, was Ihnen lieber ist. Und bringen Sie auf jeden Fall Ihre Versichertenkarte mit, die hatten Sie letztes Mal vergessen. Vielen Dank und auf Wiederhören.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Frau Kowalski soll die Praxis heute noch anrufen.',
                    answer: true,
                    explanationRu: '«Bitte rufen Sie uns heute noch bis 18 Uhr zurück».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was soll Frau Kowalski mitbringen?',
                    options: ['Ihre Versichertenkarte.', 'Eine Überweisung von Dr. Haas.', 'Ihre alten Befunde.'],
                    answer: 0,
                    explanationRu: '«…bringen Sie auf jeden Fall Ihre Versichertenkarte mit».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Wetterbericht',
            kind: 'monolog',
            situation: 'Sie hören den Wetterbericht im Radio.',
            playCount: 2,
            text: 'Und nun zum Wetter am Wochenende: Am Samstag bleibt es im ganzen Land noch freundlich und sonnig, bei Temperaturen bis 24 Grad. Erst am Abend ziehen von Westen her Wolken auf. Am Sonntag regnet es dann vor allem im Norden kräftig, teilweise auch mit Gewittern. Im Süden bleibt es meist trocken, es wird aber deutlich kühler – die Höchstwerte liegen nur noch bei 16 Grad. Wer am Sonntag einen Ausflug plant, sollte also eine Jacke einpacken oder lieber gleich am Samstag losfahren.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Am Samstag regnet es im Norden.',
                    answer: false,
                    explanationRu: 'В субботу везде солнечно; дождь на севере будет в воскресенье.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie wird das Wetter am Sonntag im Süden?',
                    options: ['Sonnig und warm.', 'Kühler, aber meistens trocken.', 'Regnerisch mit Gewittern.'],
                    answer: 1,
                    explanationRu: '«Im Süden bleibt es meist trocken, es wird aber deutlich kühler».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Durchsage im Kaufhaus',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Kaufhaus.',
            playCount: 2,
            text: 'Liebe Kundinnen und Kunden, herzlich willkommen im Kaufhaus Merkur! Nur heute: In unserer Sportabteilung im dritten Stock sind alle Laufschuhe 30 Prozent günstiger. Und im Erdgeschoss bekommen Sie an unserem Kaffeestand einen Cappuccino gratis, wenn Sie bei uns für mindestens 20 Euro eingekauft haben. Zeigen Sie dafür einfach Ihren Kassenbon. Bitte beachten Sie außerdem: Wegen einer Betriebsfeier schließen wir heute schon um 18 Uhr.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Das Kaufhaus ist heute länger geöffnet als sonst.',
                    answer: false,
                    explanationRu: 'Наоборот: сегодня магазин закрывается раньше, уже в 18 часов.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was bekommt man im Erdgeschoss?',
                    options: [
                      'Laufschuhe zum halben Preis.',
                      'Einen Gutschein über 20 Euro.',
                      'Einen kostenlosen Kaffee mit Kassenbon.',
                    ],
                    answer: 2,
                    explanationRu: 'Бесплатный капучино при покупке от 20 евро по чеку. Кроссовки — на 30 %, на третьем этаже.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von Nina',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo Tobi, hier ist Nina. Du, wegen Samstag: Das Konzert im Park fällt ja wegen des Wetters aus, das hast du bestimmt schon gehört. Ich habe mir überlegt, wir könnten stattdessen ins Kino gehen. Um acht läuft der neue Film von dem Regisseur, den du so magst. Vorher würde ich gern noch eine Kleinigkeit essen, beim Italiener direkt neben dem Kino. Wenn du Lust hast, treffen wir uns um sieben im Restaurant. Schreib mir einfach kurz zurück, okay? Tschüss!',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Das Konzert am Samstag findet nicht statt.',
                    answer: true,
                    explanationRu: '«Das Konzert im Park fällt … aus» — концерт отменён.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wo möchte Nina Tobi treffen?',
                    options: ['In einem Restaurant.', 'Vor dem Kino.', 'Im Park.'],
                    answer: 0,
                    explanationRu: '«…treffen wir uns um sieben im Restaurant» (у итальянца рядом с кинотеатром).',
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
          'Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Sie nehmen an einer Führung durch eine Schokoladenmanufaktur teil.',
        instructionRu:
          'Вы услышите текст один раз. К нему нужно решить пять заданий. В каждом задании выберите правильный ответ a, b или c. Вы участвуете в экскурсии по шоколадной мануфактуре.',
        segments: [
          {
            title: 'Führung durch die Schokoladenmanufaktur',
            kind: 'monolog',
            situation: 'Sie nehmen an einer Führung durch eine Schokoladenmanufaktur teil.',
            playCount: 1,
            text: `Herzlich willkommen in der Schokoladenmanufaktur Kakaowerk! Mein Name ist Sandra Becker, und ich führe Sie heute etwa eine Stunde lang durch unseren Betrieb. Bevor wir anfangen, eine kurze Bitte: Fotografieren ist in der Produktion leider nicht erlaubt, weil wir einige Maschinen selbst entwickelt haben. Im Laden am Ende der Führung dürfen Sie aber so viele Fotos machen, wie Sie möchten.

Unsere Firma gibt es seit 1952. Damals hat der Großvater unseres heutigen Chefs in einer kleinen Küche angefangen, Pralinen für Hochzeiten herzustellen. Heute arbeiten hier 85 Menschen, und wir produzieren jeden Tag rund zwei Tonnen Schokolade.

Den Kakao kaufen wir direkt bei Bauernfamilien in Ecuador und Ghana. Wir zahlen ihnen mehr als den üblichen Marktpreis, und einmal im Jahr besucht jemand von uns die Plantagen. So wissen wir genau, woher unsere Bohnen kommen.

Gleich gehen wir in die Rösterei. Dort werden die Bohnen bei etwa 130 Grad geröstet. Es riecht dort sehr stark – manche Besucher finden das zu intensiv. Wenn Ihnen das zu viel wird, können Sie gern im Flur auf die Gruppe warten. Danach sehen Sie unsere großen Rührmaschinen. Die Schokoladenmasse wird dort bis zu 48 Stunden gerührt – deshalb ist sie so schön zart.

Am Ende der Führung kommen wir in unseren Probierraum. Dort dürfen Sie zwölf verschiedene Sorten probieren, auch unsere neue Sorte mit Chili und Orange. Und noch ein Tipp: Mit Ihrer Eintrittskarte bekommen Sie heute im Laden zehn Prozent Rabatt.

Ach ja, bevor es losgeht: Bitte setzen Sie jetzt noch die Haarnetze auf, die da vorne in der Kiste liegen. Das ist in der Produktion Vorschrift. So, dann kann es losgehen!`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wo dürfen die Besucher fotografieren?',
                    options: ['In der Rösterei.', 'Überall in der Firma.', 'Im Laden.'],
                    answer: 2,
                    explanationRu: 'На производстве фотографировать нельзя, а в магазине в конце экскурсии — можно.',
                  },
                  {
                    kind: 'mc',
                    question: 'Die Firma …',
                    options: [
                      'wurde von einer Bäckerfamilie gegründet.',
                      'hat mit Pralinen für Hochzeiten angefangen.',
                      'hatte schon 1952 viele Mitarbeiter.',
                    ],
                    answer: 1,
                    explanationRu: 'Дедушка нынешнего шефа начал на маленькой кухне делать конфеты для свадеб.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt Frau Becker über den Kakao?',
                    options: [
                      'Die Firma kauft ihn direkt bei Bauernfamilien.',
                      'Er kommt nur aus Ghana.',
                      'Die Firma zahlt dafür den normalen Marktpreis.',
                    ],
                    answer: 0,
                    explanationRu: 'Какао покупают напрямую у фермерских семей в Эквадоре и Гане, причём дороже обычной рыночной цены.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was können Besucher tun, denen der Geruch in der Rösterei zu stark ist?',
                    options: [
                      'Sie bekommen eine Maske.',
                      'Sie gehen schon in den Probierraum.',
                      'Sie warten im Flur.',
                    ],
                    answer: 2,
                    explanationRu: '«…können Sie gern im Flur auf die Gruppe warten».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was müssen die Besucher vor dem Start tun?',
                    options: ['Ihre Eintrittskarte zeigen.', 'Ein Haarnetz aufsetzen.', 'Ihre Jacken abgeben.'],
                    answer: 1,
                    explanationRu: '«Bitte setzen Sie jetzt noch die Haarnetze auf … Das ist in der Produktion Vorschrift.»',
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
          'Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Sie sitzen in einem Café und hören, wie sich zwei Bekannte über ein Wochenende unterhalten.',
        instructionRu:
          'Вы услышите разговор один раз. К нему нужно решить семь заданий. Выберите: верны утверждения или нет? Вы сидите в кафе и слышите, как двое знакомых разговаривают о выходных.',
        segments: [
          {
            title: 'Ein Campingwochenende',
            kind: 'dialog',
            speakers: { A: 'Sarah', B: 'Lukas' },
            situation: 'Sie sitzen in einem Café und hören, wie sich Sarah und Lukas unterhalten.',
            playCount: 1,
            text: `A: Hallo Lukas! Na, wie war euer Campingwochenende am See?
B: Ach, Sarah, frag lieber nicht. Es hat fast die ganze Zeit geregnet.
A: Oh nein! Dabei war doch gutes Wetter angesagt.
B: Ja, am Freitag war es auch noch richtig schön. Wir sind gleich nach der Arbeit losgefahren und waren um sechs am Campingplatz. Abends haben wir gegrillt und sind sogar noch schwimmen gegangen.
A: Das klingt doch gut.
B: Ja, aber in der Nacht kam dann das Gewitter. Und unser Zelt war nicht dicht. Um drei Uhr morgens waren unsere Schlafsäcke nass.
A: Was habt ihr dann gemacht?
B: Wir haben uns ins Auto gesetzt und dort bis zum Morgen geschlafen. Na ja, geschlafen ist übertrieben. Am Samstag sind wir dann in die Stadt gefahren und haben ein neues Zelt gekauft.
A: Ein neues Zelt? Wäre es nicht einfacher gewesen, nach Hause zu fahren?
B: Das wollte Jana auch. Aber ich hatte den Platz schon bis Sonntag bezahlt, und das Geld bekommt man nicht zurück. Außerdem war das alte Zelt schon zehn Jahre alt. Wir brauchten sowieso ein neues.
A: Und hat es dann noch Spaß gemacht?
B: Am Samstagnachmittag hat es kurz aufgehört zu regnen. Da haben wir ein Boot geliehen und sind über den See gerudert. Das war wirklich schön. Aber am Abend ging es wieder los, und wir haben im Restaurant vom Campingplatz gesessen und Karten gespielt.
A: Also eher ein Kartenwochenende als ein Campingwochenende.
B: Genau. Am Sonntag sind wir dann schon mittags zurückgefahren. Und Jana hat jetzt eine Erkältung.
A: Die Arme. Und, fahrt ihr trotzdem wieder campen?
B: Ich auf jeden Fall! Wir wollen im August an die Ostsee. Aber Jana sagt, nächstes Mal mieten wir lieber einen kleinen Bungalow.
A: Das kann ich verstehen. Sag ihr gute Besserung von mir!`,
            tasks: [
              {
                instructionDe: 'Wählen Sie: Sind die Aussagen richtig oder falsch?',
                instructionRu: 'Выберите: верны утверждения или нет?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Am Freitag war das Wetter am See gut.',
                    answer: true,
                    explanationRu: '«…am Freitag war es auch noch richtig schön».',
                  },
                  {
                    kind: 'tf',
                    statement: 'Lukas und Jana sind am Freitagmorgen losgefahren.',
                    answer: false,
                    explanationRu: 'Они выехали сразу после работы: «gleich nach der Arbeit».',
                  },
                  {
                    kind: 'tf',
                    statement: 'In der Nacht ist Regen ins Zelt gekommen.',
                    answer: true,
                    explanationRu: 'Палатка протекла: «Unser Zelt war nicht dicht … unsere Schlafsäcke nass».',
                  },
                  {
                    kind: 'tf',
                    statement: 'Am Samstag sind Lukas und Jana nach Hause gefahren.',
                    answer: false,
                    explanationRu: 'В субботу они поехали в город и купили новую палатку; домой вернулись в воскресенье.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Lukas wollte bleiben, weil er den Campingplatz schon bezahlt hatte.',
                    answer: true,
                    explanationRu: '«…ich hatte den Platz schon bis Sonntag bezahlt, und das Geld bekommt man nicht zurück».',
                  },
                  {
                    kind: 'tf',
                    statement: 'Am Samstagnachmittag waren die beiden mit einem Boot auf dem See.',
                    answer: true,
                    explanationRu: '«Da haben wir ein Boot geliehen und sind über den See gerudert.»',
                  },
                  {
                    kind: 'tf',
                    statement: 'Jana möchte beim nächsten Mal wieder im Zelt schlafen.',
                    answer: false,
                    explanationRu: 'Яна хочет в следующий раз снять маленькое бунгало.',
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
          'Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Die Moderatorin der Radiosendung „Thema am Abend“ diskutiert mit Jonas Brandt, Teamleiter in einer Softwarefirma, und Petra Yilmaz, Psychologin, über das Thema „Homeoffice – Fortschritt oder Problem?“.',
        instructionRu:
          'Вы услышите дискуссию два раза. К ней нужно решить восемь заданий. Определите: кто что говорит? Ведущая радиопередачи обсуждает с Йонасом Брандтом, руководителем команды в IT-компании, и психологом Петрой Йылмаз тему «Работа из дома — прогресс или проблема?».',
        segments: [
          {
            title: 'Homeoffice – Fortschritt oder Problem?',
            kind: 'discussion',
            speakers: { A: 'Anja Kühn (Moderatorin)', B: 'Jonas Brandt', C: 'Petra Yilmaz' },
            situation: 'Sie hören eine Diskussion im Radio.',
            playCount: 2,
            text: `A: Herzlich willkommen zu „Thema am Abend“. Seit einigen Jahren arbeiten viele Menschen ganz oder teilweise von zu Hause aus. Ist das Homeoffice ein Fortschritt – oder fehlt uns dabei etwas? Darüber spreche ich heute mit Jonas Brandt, Teamleiter in einer Softwarefirma, und mit Petra Yilmaz, Psychologin und Beraterin für Unternehmen. Herr Brandt, wie ist das bei Ihnen?
B: Bei uns kann jeder selbst entscheiden, wo er arbeitet. Die meisten kommen nur noch ein- oder zweimal pro Woche ins Büro. Und ehrlich gesagt: Die Ergebnisse sind besser geworden. Zu Hause wird man nicht ständig von Kollegen unterbrochen.
C: Das höre ich oft. Aber ich erlebe auch die andere Seite. Viele Menschen, die zu mir in die Beratung kommen, können abends nicht mehr abschalten. Der Laptop steht im Wohnzimmer, und um zehn Uhr schaut man doch noch schnell in die E-Mails.
A: Ich muss zugeben, das kenne ich von mir selbst. Frau Yilmaz, was raten Sie?
C: Feste Arbeitszeiten und, wenn möglich, einen eigenen Arbeitsplatz – nicht das Sofa und nicht den Küchentisch. Und nach Feierabend sollte man den Computer wirklich ausschalten.
B: Da stimme ich Ihnen zu. Wir haben im Team sogar eine Regel: Nach 18 Uhr schreibt niemand mehr Nachrichten. Das hat am Anfang nicht jedem gefallen, aber jetzt sind alle froh darüber.
A: Ein großes Argument für das Homeoffice ist ja auch, dass man nicht mehr pendeln muss.
B: Absolut. Ich habe früher jeden Tag eine Stunde im Stau gestanden. Die Zeit verbringe ich jetzt lieber mit meinen Kindern. Das ist für mich der wichtigste Vorteil.
C: Für Eltern ist das sicher toll. Aber gerade junge Leute, die neu in einer Firma sind, haben es schwer. Sie lernen viel, wenn sie erfahrenen Kollegen im Büro über die Schulter schauen. Per Videokonferenz klappt das nicht so gut.
A: Herr Brandt, wie machen Sie das bei neuen Mitarbeitern?
B: Neue Kolleginnen und Kollegen kommen bei uns in den ersten drei Monaten jeden Tag ins Büro. Erst danach dürfen sie zu Hause arbeiten. Das hat sich bewährt.
A: Ich frage mich manchmal, ob uns nicht auch etwas fehlt – die Gespräche in der Kaffeeküche zum Beispiel.
C: Genau das ist der Punkt. Viele Menschen fühlen sich zu Hause einsam, auch wenn sie es nicht sofort merken. Ich empfehle Firmen deshalb, regelmäßig Teamtage zu organisieren, an denen wirklich alle da sind.
B: Wir machen einmal im Monat ein gemeinsames Frühstück. Da kommen fast alle.
A: Zum Schluss: Wie sieht die Arbeitswelt in zehn Jahren aus?
B: Ich glaube, das Homeoffice bleibt. Feste Arbeitsplätze im Büro wird es dann kaum noch geben.
C: Da bin ich vorsichtiger. Ich denke, viele Firmen werden ihre Mitarbeiter wieder öfter ins Büro holen – nicht jeden Tag, aber häufiger als heute.
A: Vielen Dank Ihnen beiden für das Gespräch.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie jede Aussage einer Person zu.',
                instructionRu: 'Кто что говорит? Соотнесите каждое высказывание с одним из участников.',
                options: ['Anja Kühn (Moderatorin)', 'Jonas Brandt', 'Petra Yilmaz'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Zu Hause kann man konzentrierter arbeiten.',
                    answer: 1,
                    explanationRu: 'Брандт: дома никто не отвлекает, результаты стали лучше.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Viele Menschen haben Probleme, nach der Arbeit abzuschalten.',
                    answer: 2,
                    explanationRu: 'Йылмаз: многие её клиенты не могут вечером «отключиться».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Ich lese abends manchmal auch noch berufliche E-Mails.',
                    answer: 0,
                    explanationRu: 'Ведущая признаётся: «das kenne ich von mir selbst».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Eine feste Regel für Nachrichten am Abend hat dem Team geholfen.',
                    answer: 1,
                    explanationRu: 'Брандт: после 18 часов в команде никто не пишет сообщений, и все этим довольны.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Neue Mitarbeiter lernen im Büro mehr als per Videokonferenz.',
                    answer: 2,
                    explanationRu: 'Йылмаз: новички учатся, наблюдая за опытными коллегами в офисе.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Die Gespräche in der Kaffeeküche fehlen vielleicht.',
                    answer: 0,
                    explanationRu: 'Это вопрос ведущей: «die Gespräche in der Kaffeeküche zum Beispiel».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Firmen sollten Tage planen, an denen das ganze Team zusammenkommt.',
                    answer: 2,
                    explanationRu: 'Йылмаз рекомендует фирмам регулярные «Teamtage».',
                  },
                  {
                    kind: 'match',
                    prompt: 'In Zukunft wird es kaum noch feste Arbeitsplätze im Büro geben.',
                    answer: 1,
                    explanationRu: 'Прогноз Брандта. Йылмаз, наоборот, думает, что сотрудники будут чаще возвращаться в офис.',
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
          'Sie haben letztes Wochenende Ihren Geburtstag gefeiert. Ihr Freund Daniel konnte leider nicht kommen. Schreiben Sie Daniel eine E-Mail. Schreiben Sie etwa 80 Wörter. Schreiben Sie etwas zu allen drei Punkten.',
        instructionRu:
          'В прошлые выходные вы отмечали день рождения. Ваш друг Даниэль не смог прийти. Напишите ему электронное письмо (около 80 слов). Раскройте все три пункта.',
        situationDe: 'Sie haben letztes Wochenende Ihren Geburtstag gefeiert. Ihr Freund Daniel war krank und konnte nicht kommen.',
        points: [
          'Beschreiben Sie: Wie war die Feier?',
          'Begründen Sie: Welches Geschenk hat Ihnen am besten gefallen und warum?',
          'Machen Sie einen Vorschlag für ein Treffen mit Daniel.',
        ],
        minWords: 80,
        register: 'informell',
        minutes: 20,
        maxPoints: 40,
      },
      {
        teil: 2,
        instructionDe:
          'Sie haben im Fernsehen eine Diskussionssendung zum Thema „Einkaufen im Internet“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie nun Ihre Meinung (circa 80 Wörter).',
        instructionRu:
          'Вы посмотрели по телевизору ток-шоу на тему «Покупки в интернете». В онлайн-гостевой книге передачи вы нашли следующее мнение. Напишите своё мнение (около 80 слов).',
        situationDe:
          'Karin, 52: „Ich kaufe fast alles nur noch online – Kleidung, Bücher, sogar Lebensmittel. Das ist bequem, oft billiger, und ich spare viel Zeit. Warum sollte ich noch in die Stadt fahren und im Geschäft Schlange stehen? Ich glaube, in zehn Jahren braucht niemand mehr normale Läden.“',
        points: [
          'Sagen Sie Ihre Meinung zum Einkaufen im Internet.',
          'Nennen Sie Vor- oder Nachteile und geben Sie Beispiele.',
          'Reagieren Sie auf Karins Aussage über die Zukunft der Geschäfte.',
        ],
        minWords: 80,
        register: 'halbformell',
        minutes: 25,
        maxPoints: 40,
      },
      {
        teil: 3,
        instructionDe:
          'Sie haben morgen einen Termin bei Ihrer Chefin, Frau Albers. Sie wollten mit ihr über eine Weiterbildung sprechen. Sie können aber nicht kommen. Schreiben Sie an Frau Albers. Entschuldigen Sie sich höflich und berichten Sie, warum Sie nicht kommen können. Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.',
        instructionRu:
          'Завтра у вас назначена встреча с начальницей, фрау Альберс, по поводу повышения квалификации. Вы не можете прийти. Напишите ей письмо (около 40 слов): вежливо извинитесь и объясните причину. Не забудьте обращение и приветствие в конце.',
        situationDe: 'Termin morgen um 10 Uhr bei Frau Albers (Abteilungsleiterin) – Gespräch über eine Weiterbildung.',
        points: [
          'Entschuldigen Sie sich höflich.',
          'Nennen Sie den Grund, warum Sie nicht kommen können.',
          'Schlagen Sie einen neuen Termin vor.',
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
          'Gemeinsam etwas planen. Eine Kollegin, Frau Schröder, geht nach 25 Jahren in Rente. Sie möchten zusammen mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner eine kleine Abschiedsfeier im Büro organisieren. Sprechen Sie über die Punkte unten, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Gesprächspartners. Planen und entscheiden Sie gemeinsam, was Sie tun möchten.',
        instructionRu:
          'Совместное планирование. Коллега, фрау Шрёдер, после 25 лет работы уходит на пенсию. Вместе с партнёром по разговору организуйте небольшую прощальную вечеринку в офисе. Обсудите пункты ниже, делайте предложения, реагируйте на предложения партнёра и вместе примите решение.',
        situationDe: 'Abschiedsfeier für die Kollegin Frau Schröder, die nach 25 Jahren in Rente geht.',
        points: [
          'Wann und wo feiern?',
          'Essen und Getränke?',
          'Welches Geschenk?',
          'Wer wird eingeladen?',
          'Wer hält eine kleine Rede?',
        ],
        aiRole:
          'Kollegin / Kollege, die oder der zusammen mit Ihnen die Abschiedsfeier plant. Macht eigene Vorschläge, reagiert auf Ihre Ideen, ist manchmal anderer Meinung und sucht mit Ihnen eine gemeinsame Lösung.',
        opener:
          'Hallo! Du, Frau Schröder hört ja Ende des Monats auf. Wir wollten doch etwas für sie organisieren. Hast du schon eine Idee, wann und wo wir feiern könnten?',
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
        situationDe: 'Thema: „Mit dem Fahrrad zur Arbeit?“',
        points: [
          'Folie 1: Mit dem Fahrrad zur Arbeit? – Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.',
          'Folie 2: Meine persönlichen Erfahrungen – Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.',
          'Folie 3: Die Situation in meinem Heimatland – Berichten Sie, wie es in Ihrem Heimatland ist, und geben Sie Beispiele.',
          'Folie 4: Vor- und Nachteile & meine Meinung – Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.',
          'Folie 5: Abschluss & Dank – Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.',
        ],
        aiRole: 'Prüferin, die Ihrer Präsentation zuhört und Sie nicht unterbricht.',
        opener: 'Bitte beginnen Sie jetzt mit Ihrer Präsentation zum Thema „Mit dem Fahrrad zur Arbeit?“. Sie haben etwa drei Minuten Zeit.',
        minutes: 3,
        maxPoints: 40,
      },
      {
        teil: 3,
        mode: 'dialog',
        instructionDe:
          'Über eine Präsentation sprechen. Nach Ihrer Präsentation gibt Ihnen Ihre Gesprächspartnerin eine Rückmeldung und stellt Ihnen Fragen zu Ihrer Präsentation. Reagieren Sie auf die Rückmeldung und beantworten Sie die Fragen.',
        instructionRu:
          'Обсуждение презентации. После вашей презентации партнёр даёт вам обратную связь и задаёт вопросы. Отреагируйте на обратную связь и ответьте на вопросы.',
        situationDe: 'Gespräch nach Ihrer Präsentation „Mit dem Fahrrad zur Arbeit?“.',
        points: [
          'Reagieren Sie auf die Rückmeldung Ihrer Gesprächspartnerin.',
          'Beantworten Sie die Fragen ausführlich und mit Beispielen.',
          'Fragen Sie gegebenenfalls nach, wenn Sie etwas nicht verstanden haben.',
        ],
        aiRole:
          'Gesprächspartnerin bzw. Prüferin, die Ihre Präsentation gehört hat. Gibt eine kurze, freundliche Rückmeldung und stellt ein bis zwei Fragen zu Ihrer Präsentation.',
        opener:
          'Vielen Dank für deine Präsentation, das war wirklich interessant! Mich würde noch etwas interessieren: Würdest du auch im Winter mit dem Fahrrad zur Arbeit fahren, wenn es kalt ist oder schneit?',
        minutes: 2,
        maxPoints: 20,
      },
    ],
  },
};
