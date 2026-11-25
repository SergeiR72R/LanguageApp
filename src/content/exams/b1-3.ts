import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'b1-exam-3',
  level: 'B1',
  title: 'Übungstest B1 – 3',

  // ───────────────────────────── LESEN ─────────────────────────────
  lesen: {
    minutes: 65,
    parts: [
      {
        teil: 1,
        minutes: 10,
        title: 'Mit 45 noch einmal Azubi',
        textType: 'Blogbeitrag',
        texts: [
          {
            heading: 'Franks Blog: Mit 45 noch einmal Azubi',
            body: `Hallo, ich bin Frank, und ich habe etwas getan, was viele in meinem Alter nicht mehr wagen: Ich habe meinen sicheren Job aufgegeben und mache jetzt eine Ausbildung zum Tischler.

Zwanzig Jahre lang habe ich in einer Bank gearbeitet. Das Gehalt war gut und die Kollegen waren nett, aber ich saß den ganzen Tag vor dem Bildschirm. Abends war ich müde, obwohl ich mich kaum bewegt hatte. Mein Ausgleich war schon immer die kleine Werkstatt im Keller, wo ich Regale und Möbel für Freunde gebaut habe.

Vor zwei Jahren hat meine Bank dann viele Filialen geschlossen, auch meine. Man hat mir eine Stelle in der Zentrale angeboten, 150 Kilometer entfernt. Da habe ich mich gefragt: Will ich das wirklich noch zwanzig Jahre machen? Meine Frau hat mich sofort unterstützt. Meine Mutter dagegen konnte meine Entscheidung lange nicht verstehen.

Einen Ausbildungsplatz zu finden, war leichter als gedacht. Viele Handwerksbetriebe suchen dringend Leute, und mein Chef sagt, dass er meine Erfahrung mit Kunden sehr schätzt. In der Berufsschule bin ich natürlich der Älteste. Die jungen Leute haben mich am Anfang „Opa“ genannt. Inzwischen helfe ich ihnen in Mathe, und sie erklären mir die neuen Computerprogramme für die Möbelplanung.

Finanziell ist es nicht einfach. Als Azubi verdiene ich nur einen kleinen Teil meines alten Gehalts. Zum Glück hatten wir etwas gespart, und meine Frau arbeitet jetzt mehr Stunden.

Bereut habe ich meine Entscheidung keinen einzigen Tag. Nach der Prüfung im nächsten Sommer möchte ich in meinem Betrieb bleiben – und vielleicht irgendwann eine eigene kleine Werkstatt eröffnen.

Frank`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text und die Aufgaben dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте текст и задания к нему. Выберите: верны утверждения (richtig) или нет (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: 'Frank war in der Bank unzufrieden, weil die Kollegen unfreundlich waren.',
                answer: false,
                explanationRu: 'Коллеги были милые («nett»); ему не нравилось весь день сидеть перед экраном.',
              },
              {
                kind: 'tf',
                statement: 'Frank hat schon früher in seiner Freizeit Möbel gebaut.',
                answer: true,
                explanationRu: 'В мастерской в подвале он строил полки и мебель для друзей.',
              },
              {
                kind: 'tf',
                statement: 'Frank hätte bei der Bank in einer anderen Stadt weiterarbeiten können.',
                answer: true,
                explanationRu: 'Ему предложили место в центральном офисе в 150 км.',
              },
              {
                kind: 'tf',
                statement: 'Seine ganze Familie fand die Idee sofort gut.',
                answer: false,
                explanationRu: 'Жена сразу поддержала, а мама долго не могла понять его решение.',
              },
              {
                kind: 'tf',
                statement: 'In der Berufsschule helfen sich Frank und die jüngeren Mitschüler gegenseitig.',
                answer: true,
                explanationRu: 'Он помогает им с математикой, а они объясняют ему компьютерные программы.',
              },
              {
                kind: 'tf',
                statement: 'In der Ausbildung verdient Frank genauso viel wie früher.',
                answer: false,
                explanationRu: '«…verdiene ich nur einen kleinen Teil meines alten Gehalts».',
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
            heading: 'Freitags frei: Firma testet die Vier-Tage-Woche',
            body: `Bielefeld. Seit Januar arbeiten die 60 Mitarbeiterinnen und Mitarbeiter des Online-Versandhändlers „Gartenglück“ nur noch von Montag bis Donnerstag. Ihr Gehalt ist gleich geblieben, obwohl sie jetzt nur noch 34 statt 40 Stunden pro Woche arbeiten.

„Wir hatten große Probleme, neue Leute zu finden“, erklärt Geschäftsführerin Martina Kühn. „Mit der Vier-Tage-Woche sind wir für Bewerber plötzlich sehr interessant.“ Tatsächlich haben sich auf die letzte Stellenanzeige über 200 Personen beworben – früher waren es höchstens zehn.

Damit die Arbeit trotzdem fertig wird, hat die Firma einiges verändert. Besprechungen dürfen nicht länger als 30 Minuten dauern, und zwischen 9 und 11 Uhr gibt es eine „stille Zeit“, in der niemand gestört werden soll. Der Kundenservice ist weiterhin auch freitags erreichbar: Dort wechseln sich die Mitarbeiter ab und haben dafür an einem anderen Tag frei.

Nach einem halben Jahr ist die Bilanz positiv. Die Zahl der Krankheitstage ist deutlich gesunken, und der Umsatz ist sogar leicht gestiegen. Nicht alle Beschäftigten sind aber zufrieden. Einige finden die längeren Arbeitstage sehr anstrengend. „Am Donnerstagabend bin ich völlig kaputt“, sagt ein Mitarbeiter aus dem Lager.`,
          },
          {
            label: 'Text 2',
            heading: 'Kunst auf Zeit: Bilder ausleihen statt kaufen',
            body: `Erlangen. Ein echtes Ölgemälde über dem Sofa – das können sich die meisten Menschen nicht leisten. In der Artothek der Stadtbibliothek Erlangen ist das anders: Hier kann man Kunstwerke ausleihen wie Bücher. Rund 800 Bilder, Fotografien und kleine Skulpturen stehen zur Auswahl, die meisten von Künstlerinnen und Künstlern aus der Region.

Die Ausleihe kostet fünf Euro pro Werk für drei Monate. Wer möchte, kann die Leihfrist einmal verlängern. Um den Transport muss man sich allerdings selbst kümmern; die Bibliothek stellt dafür spezielle Taschen zur Verfügung. Wird ein Bild beschädigt, zahlt eine Versicherung, die schon im Preis enthalten ist.

„Viele Leute trauen sich nicht in Galerien, weil sie denken, dass Kunst nur etwas für Experten ist“, sagt Bibliotheksleiterin Eva Sommer. „Bei uns können sie in Ruhe ausprobieren, was ihnen gefällt.“ Das Angebot wird auch von Firmen genutzt, die ihre Büros schöner gestalten wollen.

Auch für die Künstler lohnt sich die Artothek: Wenn jemand ein ausgeliehenes Werk kaufen möchte, stellt die Bibliothek den Kontakt her. Im letzten Jahr wurden so fast 40 Bilder verkauft.`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text 1 aus der Presse und die Aufgaben dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст 1 из прессы и задания к нему. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Die Mitarbeiter von „Gartenglück“ …',
                options: [
                  'verdienen jetzt weniger Geld.',
                  'arbeiten weniger Stunden für das gleiche Gehalt.',
                  'arbeiten jeden Tag zehn Stunden.',
                ],
                answer: 1,
                explanationRu: 'Зарплата осталась прежней, хотя теперь они работают 34 часа вместо 40.',
              },
              {
                kind: 'mc',
                question: 'Die Firma hat die Vier-Tage-Woche eingeführt, weil …',
                options: [
                  'sie Schwierigkeiten hatte, Personal zu finden.',
                  'viele Mitarbeiter oft krank waren.',
                  'der Umsatz gesunken war.',
                ],
                answer: 0,
                explanationRu: '«Wir hatten große Probleme, neue Leute zu finden». Меньше больничных и рост оборота — это уже результаты.',
              },
              {
                kind: 'mc',
                question: 'Im Kundenservice …',
                options: [
                  'hat niemand am Freitag frei.',
                  'arbeitet man nur von Montag bis Donnerstag.',
                  'arbeiten einige Mitarbeiter auch am Freitag.',
                ],
                answer: 2,
                explanationRu: 'Служба поддержки работает и по пятницам: сотрудники чередуются и отдыхают в другой день.',
              },
            ],
          },
          {
            instructionDe: 'Lesen Sie den Text 2 aus der Presse und die Aufgaben dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст 2 из прессы и задания к нему. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'In der Artothek …',
                options: [
                  'kann man Kunstwerke für eine bestimmte Zeit mit nach Hause nehmen.',
                  'gibt es nur Bilder von berühmten Künstlern.',
                  'kann man Malkurse besuchen.',
                ],
                answer: 0,
                explanationRu: 'Произведения искусства можно брать напрокат, как книги. Авторы в основном местные.',
              },
              {
                kind: 'mc',
                question: 'Wer ein Bild ausleiht, …',
                options: [
                  'muss eine Versicherung extra bezahlen.',
                  'muss es selbst transportieren.',
                  'darf es höchstens drei Monate behalten.',
                ],
                answer: 1,
                explanationRu: 'О транспортировке нужно позаботиться самому. Страховка уже входит в цену, срок можно один раз продлить.',
              },
              {
                kind: 'mc',
                question: 'Was sagt Frau Sommer?',
                options: [
                  'Viele Menschen haben Hemmungen, in eine Galerie zu gehen.',
                  'Firmen dürfen keine Bilder ausleihen.',
                  'Die Künstler bekommen Geld für jede Ausleihe.',
                ],
                answer: 0,
                explanationRu: '«Viele Leute trauen sich nicht in Galerien…» — многие стесняются ходить в галереи.',
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        minutes: 10,
        title: 'Reisen und Urlaub',
        textType: 'Anzeigen',
        texts: [
          {
            label: 'a',
            heading: 'Ostseehotel Strandperle',
            body: 'Erholung pur direkt an der Ostsee: Zimmer mit Meerblick, Sauna und Frühstücksbuffet. Bitte beachten Sie, dass Haustiere in unserem Haus leider nicht erlaubt sind.',
          },
          {
            label: 'b',
            heading: 'Radreise an der Donau',
            body: 'Von Passau nach Wien in acht Tagen: Sie radeln gemütlich am Fluss entlang, wir bringen Ihr Gepäck jeden Tag ins nächste Hotel. Leihräder und E-Bikes können mitgebucht werden.',
          },
          {
            label: 'c',
            heading: 'Hostel „Spreeblick“ Berlin',
            body: 'Zentral, jung und günstig: Betten im Mehrbettzimmer ab 22 Euro pro Nacht, Einzelzimmer ab 45 Euro. Gemeinschaftsküche, kostenloses WLAN, Rezeption rund um die Uhr geöffnet.',
          },
          {
            label: 'd',
            heading: 'Segelschule am Bodensee',
            body: 'Lernen Sie segeln! Wochenkurse für Anfänger und Fortgeschrittene von Mai bis September. Am Ende des Kurses können Sie den offiziellen Segelschein machen.',
          },
          {
            label: 'e',
            heading: 'Ferien auf dem Ponyhof Lindner',
            body: 'Kühe füttern, Eier sammeln, auf Ponys reiten: Auf unserem Bauernhof im Schwarzwald erleben Familien mit Kindern echtes Landleben. Ferienwohnungen auch für ein Wochenende buchbar.',
          },
          {
            label: 'f',
            heading: 'Kochreise in die Toskana',
            body: 'Eine Woche Pasta, Olivenöl und Wein: Mit einem italienischen Koch kochen Sie jeden Tag typische Gerichte der Region. Kursleitung auf Deutsch, Unterkunft in einem alten Landhaus.',
          },
          {
            label: 'g',
            heading: 'Ferienhaus „Möwennest“ an der Nordsee',
            body: 'Gemütliches Ferienhaus für bis zu vier Personen, nur 300 Meter vom Deich. Großer, eingezäunter Garten – Hunde sind bei uns herzlich willkommen!',
          },
          {
            label: 'h',
            heading: 'Grand Hotel Berlin',
            body: 'Luxus im Herzen der Hauptstadt: elegante Suiten, Wellnessbereich mit Pool und ein Restaurant mit Stern. Wochenendangebot: zwei Nächte mit Frühstück ab 390 Euro pro Person.',
          },
          {
            label: 'i',
            heading: 'Sprachreise nach Florenz',
            body: 'Italienisch lernen, wo es gesprochen wird: Vormittags Sprachunterricht in kleinen Gruppen, nachmittags Ausflüge zu den schönsten Orten der Toskana. Unterkunft in Gastfamilien.',
          },
          {
            label: 'j',
            heading: 'Sonnenschein-Reisen: Bequem mit dem Bus',
            body: 'Unsere Busreisen für Seniorinnen und Senioren: Abholung an der Haustür, gute Hotels, Ausflüge mit Reiseleitung und eine Reisebegleiterin, die sich um alles kümmert. Nächstes Ziel: der Gardasee.',
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Situationen und die Anzeigen a bis j. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie „keine passende Anzeige“.',
            instructionRu:
              'Прочитайте ситуации и объявления a–j. Выберите, какое объявление подходит к какой ситуации. Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет — в этом случае выберите «нет подходящего объявления».',
            options: [
              'Ostseehotel Strandperle',
              'Radreise an der Donau',
              'Hostel „Spreeblick“ Berlin',
              'Segelschule am Bodensee',
              'Ferien auf dem Ponyhof Lindner',
              'Kochreise in die Toskana',
              'Ferienhaus „Möwennest“ an der Nordsee',
              'Grand Hotel Berlin',
              'Sprachreise nach Florenz',
              'Sonnenschein-Reisen: Bequem mit dem Bus',
            ],
            allowNone: true,
            items: [
              {
                kind: 'match',
                prompt: 'Sie möchten mit Ihren zwei kleinen Kindern ein Wochenende auf dem Land verbringen und Tiere erleben.',
                answer: 4,
                explanationRu: 'e — ферма для семей с детьми, можно забронировать на выходные.',
              },
              {
                kind: 'match',
                prompt: 'Ein Kollege möchte im Urlaub Italienisch lernen und gleichzeitig das Land kennenlernen.',
                answer: 8,
                explanationRu: 'i — языковая поездка во Флоренцию. Кулинарный курс (f) проходит на немецком.',
              },
              {
                kind: 'match',
                prompt: 'Ein Freund braucht eine günstige Übernachtung in Berlin für eine Nacht.',
                answer: 2,
                explanationRu: 'c — недорогой хостел. Grand Hotel (h) — дорогой.',
              },
              {
                kind: 'match',
                prompt: 'Ihre Eltern sind beide über 70 und möchten eine Reise machen, bei der sie sich um nichts kümmern müssen.',
                answer: 9,
                explanationRu: 'j — автобусные туры для пожилых: забирают от двери, сопровождающая обо всём заботится.',
              },
              {
                kind: 'match',
                prompt: 'Sie möchten mit Ihrem Hund Urlaub am Meer machen.',
                answer: 6,
                explanationRu: 'g — дом у Северного моря, собаки приветствуются. В отеле (a) животные запрещены.',
              },
              {
                kind: 'match',
                prompt: 'Ihre Freundin möchte mit dem Fahrrad an einem Fluss entlangfahren, ohne ihr Gepäck selbst zu transportieren.',
                answer: 1,
                explanationRu: 'b — велотур вдоль Дуная, багаж перевозят в следующий отель.',
              },
              {
                kind: 'match',
                prompt: 'Sie möchten im Urlaub tauchen lernen.',
                answer: -1,
                explanationRu: 'Подходящего объявления нет: в (d) учат ходить под парусом, а не нырять.',
              },
            ],
          },
        ],
      },
      {
        teil: 4,
        minutes: 15,
        title: 'Autofreie Innenstadt?',
        textType: 'Leserbriefe',
        texts: [
          {
            label: 'Claudia',
            heading: 'Claudia, 37, Bonn',
            body: 'Ich fahre jeden Tag mit meinen beiden Kindern mit dem Rad durch die Innenstadt, und ehrlich gesagt habe ich dabei oft Angst. Autos parken auf dem Radweg, Lieferwagen halten in der zweiten Reihe. Ohne Autos wäre die Stadt endlich sicher für Kinder. Ich wünsche mir das lieber heute als morgen.',
          },
          {
            label: 'Herr Baumann',
            heading: 'Rolf Baumann, 58, Inhaber eines Modegeschäfts aus Trier',
            body: 'Viele meiner Kunden kommen aus den Dörfern rund um die Stadt. Dort fährt oft nur zweimal am Tag ein Bus. Wenn diese Kunden nicht mehr mit dem Auto in die Stadt kommen können, kaufen sie eben im Internet oder im Einkaufszentrum auf der grünen Wiese. Für Geschäfte wie meins wäre das das Ende.',
          },
          {
            label: 'Elif',
            heading: 'Elif, 24, Studentin aus Freiburg',
            body: 'Ich habe ein Semester in Kopenhagen studiert. Dort habe ich gesehen, wie schön eine Stadt sein kann, wenn es mehr Platz für Fahrräder, Bänke und Straßencafés gibt. Die Luft ist besser, und es ist viel leiser. So etwas brauchen wir auch hier – je schneller, desto besser.',
          },
          {
            label: 'Werner',
            heading: 'Werner, 72, Halle',
            body: 'Seit meiner Knieoperation kann ich nicht mehr weit laufen. Bis zur nächsten Bushaltestelle sind es von meiner Wohnung zehn Minuten, und der Bus fährt am Abend nur noch jede Stunde. Mit dem Auto komme ich dagegen direkt bis vor die Apotheke. Wenn die Innenstadt für Autos gesperrt wird, bleibe ich zu Hause.',
          },
          {
            label: 'Tim',
            heading: 'Tim, 31, Taxifahrer aus Hamburg',
            body: 'Man könnte denken, dass ich als Taxifahrer dagegen bin. Aber in den meisten Plänen dürfen Taxis ja weiterhin fahren. Und ohne die vielen privaten Autos gäbe es keine Staus mehr – ich wäre mit meinen Fahrgästen viel schneller am Ziel. Ich finde die Idee also wirklich gut.',
          },
          {
            label: 'Dr. Hoffmann',
            heading: 'Dr. Jens Hoffmann, 49, Stadtplaner aus Kassel',
            body: 'In vielen europäischen Städten hat man inzwischen gute Erfahrungen gemacht. Wo keine Autos mehr fahren, kommen mehr Menschen zu Fuß in die Stadt, bleiben länger und geben sogar mehr Geld aus. Wichtig ist, dass Busse und Bahnen gleichzeitig ausgebaut werden. Dann ist eine autofreie Innenstadt ein Gewinn für alle.',
          },
          {
            label: 'Monika',
            heading: 'Monika, 45, Pendlerin aus Ulm',
            body: 'Grundsätzlich finde ich die Idee nicht schlecht. Aber ich wohne auf dem Land und arbeite in der Innenstadt. Mit Bus und Bahn brauche ich fast zwei Stunden, mit dem Auto nur 30 Minuten. Parkplätze am Stadtrand mit guten Busverbindungen gibt es bei uns nicht. Solange sich das nicht ändert, bin ich dagegen.',
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Texte. In einer Zeitung lesen Sie Kommentare zu einem Artikel über Innenstädte ohne Autos. Wählen Sie: Ist die Person für eine autofreie Innenstadt?',
            instructionRu:
              'Прочитайте тексты. В газете вы читаете комментарии к статье о центрах городов без автомобилей. Выберите: выступает ли человек ЗА центр города без машин? (Ja — да, Nein — нет)',
            tfLabels: ['Ja', 'Nein'],
            items: [
              {
                kind: 'tf',
                statement: 'Claudia ist für eine autofreie Innenstadt.',
                answer: true,
                explanationRu: 'Без машин город был бы безопасным для детей: «lieber heute als morgen».',
              },
              {
                kind: 'tf',
                statement: 'Herr Baumann ist für eine autofreie Innenstadt.',
                answer: false,
                explanationRu: 'Он боится потерять покупателей из деревень: «Für Geschäfte wie meins wäre das das Ende».',
              },
              {
                kind: 'tf',
                statement: 'Elif ist für eine autofreie Innenstadt.',
                answer: true,
                explanationRu: '«So etwas brauchen wir auch hier – je schneller, desto besser.»',
              },
              {
                kind: 'tf',
                statement: 'Werner ist für eine autofreie Innenstadt.',
                answer: false,
                explanationRu: 'После операции он не может далеко ходить; без машины он останется дома.',
              },
              {
                kind: 'tf',
                statement: 'Tim ist für eine autofreie Innenstadt.',
                answer: true,
                explanationRu: 'Такси по-прежнему смогут ездить, а пробок не будет: «Ich finde die Idee also wirklich gut».',
              },
              {
                kind: 'tf',
                statement: 'Dr. Hoffmann ist für eine autofreie Innenstadt.',
                answer: true,
                explanationRu: 'При развитии общественного транспорта это «ein Gewinn für alle».',
              },
              {
                kind: 'tf',
                statement: 'Monika ist für eine autofreie Innenstadt.',
                answer: false,
                explanationRu: 'Идея в принципе неплохая, но пока нет альтернатив: «Solange sich das nicht ändert, bin ich dagegen».',
              },
            ],
          },
        ],
      },
      {
        teil: 5,
        minutes: 10,
        title: 'Teilnahmebedingungen der Volkshochschule',
        textType: 'Informationstext',
        texts: [
          {
            heading: 'Volkshochschule Neustadt – Allgemeine Teilnahmebedingungen',
            body: `1. Anmeldung
Die Anmeldung ist online, per Post oder persönlich im Servicebüro möglich. Telefonische Anmeldungen können wir leider nicht annehmen. Ihre Anmeldung ist verbindlich. Sie erhalten keine schriftliche Bestätigung; wir informieren Sie nur, wenn ein Kurs ausfällt oder sich etwas ändert.

2. Bezahlung
Die Kursgebühr wird zwei Wochen vor Kursbeginn von Ihrem Konto abgebucht. Barzahlung ist nur im Servicebüro möglich.

3. Ermäßigung
Schülerinnen und Schüler, Studierende, Auszubildende sowie Personen mit Bürgergeld erhalten 30 Prozent Ermäßigung. Bitte legen Sie bei der Anmeldung einen Nachweis vor. Nachträglich ist keine Ermäßigung möglich.

4. Abmeldung
Bis zehn Tage vor Kursbeginn können Sie sich kostenlos abmelden. Danach müssen Sie die volle Kursgebühr bezahlen – außer Sie nennen uns eine Ersatzperson, die Ihren Platz übernimmt.

5. Ausfall von Kursen
Wenn sich weniger als acht Personen anmelden, kann der Kurs abgesagt werden. In diesem Fall erhalten Sie die gesamte Gebühr zurück. Fällt ein einzelner Termin wegen Krankheit der Kursleitung aus, wird er zu einem späteren Zeitpunkt nachgeholt.

6. Teilnahmebescheinigung
Wenn Sie mindestens 80 Prozent der Termine besucht haben, erhalten Sie auf Wunsch eine Teilnahmebescheinigung.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sie möchten einen Kurs an der Volkshochschule besuchen und lesen die Teilnahmebedingungen. Lesen Sie die Aufgaben und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu:
              'Вы хотите записаться на курс в народный университет и читаете условия участия. Прочитайте задания и текст. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Wie kann man sich für einen Kurs anmelden?',
                options: ['Nur online.', 'Auch telefonisch.', 'Online, per Post oder im Servicebüro.'],
                answer: 2,
                explanationRu: 'П. 1: онлайн, по почте или лично; по телефону — нельзя.',
              },
              {
                kind: 'mc',
                question: 'Wer eine Ermäßigung bekommen möchte, …',
                options: [
                  'muss bei der Anmeldung einen Nachweis vorlegen.',
                  'kann den Nachweis bis zum Kursende bringen.',
                  'bekommt die Hälfte der Gebühr zurück.',
                ],
                answer: 0,
                explanationRu: 'П. 3: документ нужно предъявить при записи, позже скидка невозможна. Скидка — 30 %.',
              },
              {
                kind: 'mc',
                question: 'Wenn man sich eine Woche vor Kursbeginn abmeldet, …',
                options: [
                  'bekommt man das ganze Geld zurück.',
                  'muss man die volle Gebühr bezahlen, wenn niemand den Platz übernimmt.',
                  'muss man die Hälfte der Gebühr bezahlen.',
                ],
                answer: 1,
                explanationRu: 'П. 4: бесплатно — только за 10 дней до начала; иначе полная оплата, если не найти замену.',
              },
              {
                kind: 'mc',
                question: 'Wenn die Kursleiterin an einem Tag krank ist, …',
                options: [
                  'bekommen die Teilnehmer Geld zurück.',
                  'wird der Termin später nachgeholt.',
                  'fällt der ganze Kurs aus.',
                ],
                answer: 1,
                explanationRu: 'П. 5: пропущенное из-за болезни преподавателя занятие проводят позже.',
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
            title: 'Durchsage im Zug',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Zug.',
            playCount: 2,
            text: 'Sehr geehrte Fahrgäste, in wenigen Minuten erreichen wir Hannover Hauptbahnhof. Wegen Bauarbeiten fahren wir heute auf Gleis 12 ein und nicht wie geplant auf Gleis 9. Ihre Anschlüsse: der ICE nach Berlin um 16.32 Uhr von Gleis 10 und der Regionalexpress nach Bremen um 16.40 Uhr von Gleis 4. Reisende nach Hamburg: Ihr Intercity hat heute etwa 15 Minuten Verspätung. Wir bedanken uns für Ihre Reise mit uns. Bitte vergessen Sie beim Aussteigen Ihr Gepäck nicht.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Der Zug kommt in Hannover auf einem anderen Gleis an als geplant.',
                    answer: true,
                    explanationRu: 'Из-за строительных работ поезд прибывает на 12-й путь, а не на 9-й.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was ist mit dem Zug nach Hamburg?',
                    options: ['Er fällt heute aus.', 'Er fährt von Gleis 4.', 'Er hat Verspätung.'],
                    answer: 2,
                    explanationRu: '«Ihr Intercity hat heute etwa 15 Minuten Verspätung.» С 4-го пути идёт поезд в Бремен.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht vom Reisebüro',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo, Frau Becker, hier ist Jonas Albrecht vom Reisebüro Sonnenweg. Es geht um Ihre Reise nach Mallorca im Mai. Das Hotel, das Sie gebucht hatten, ist leider überbucht. Wir können Ihnen aber ein anderes Hotel anbieten, das direkt am Strand liegt – zum gleichen Preis und sogar mit Halbpension. Die Unterlagen habe ich Ihnen schon per E-Mail geschickt. Bitte sehen Sie sich das Angebot an und geben Sie mir bis Freitag Bescheid. Sie erreichen mich unter 0711 45 89 30.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Für das neue Hotel muss Frau Becker mehr bezahlen.',
                    answer: false,
                    explanationRu: 'Новый отель — «zum gleichen Preis», по той же цене, да ещё с полупансионом.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was soll Frau Becker tun?',
                    options: [
                      'Ins Reisebüro kommen.',
                      'Das Angebot ansehen und sich bis Freitag melden.',
                      'Selbst ein neues Hotel suchen.',
                    ],
                    answer: 1,
                    explanationRu: 'Документы отправлены по e-mail; нужно посмотреть предложение и ответить до пятницы.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Veranstaltungstipp',
            kind: 'monolog',
            situation: 'Sie hören einen Veranstaltungstipp im Radio.',
            playCount: 2,
            text: 'Und hier unser Tipp für das Wochenende: Am Samstag und Sonntag findet im Stadtpark wieder das große Lichterfest statt. Ab 18 Uhr gibt es Musik und Essensstände, und wenn es dunkel wird, werden Hunderte Lampen und Kerzen angezündet. Höhepunkt ist am Samstag um 22 Uhr das Feuerwerk über dem See. Der Eintritt ist frei. Weil es in der Nähe kaum Parkplätze gibt, kommen Sie am besten mit Bus oder Bahn – die Busse fahren an beiden Abenden bis ein Uhr nachts.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Das Lichterfest dauert zwei Tage.',
                    answer: true,
                    explanationRu: 'Праздник проходит в субботу и воскресенье.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wann gibt es das Feuerwerk?',
                    options: ['Am Samstag um 22 Uhr.', 'Am Sonntag um 22 Uhr.', 'An beiden Abenden um 18 Uhr.'],
                    answer: 0,
                    explanationRu: '«Höhepunkt ist am Samstag um 22 Uhr das Feuerwerk». В 18 часов начинаются музыка и еда.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Durchsage im Tierpark',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Tierpark.',
            playCount: 2,
            text: 'Liebe Besucherinnen und Besucher des Tierparks, wir möchten Sie darauf hinweisen, dass das Affenhaus heute ab 14 Uhr geschlossen ist. Heute Morgen ist bei uns ein kleiner Gorilla geboren worden, und Mutter und Kind brauchen jetzt Ruhe. Ab morgen können Sie die beiden wieder besuchen. Um 15 Uhr findet wie jeden Tag die Fütterung der Seelöwen statt – heute mit einer besonderen Show für Kinder. Treffpunkt ist das große Becken am Haupteingang.',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Das Affenhaus ist heute den ganzen Tag geschlossen.',
                    answer: false,
                    explanationRu: 'Обезьянник закрыт только с 14 часов.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was passiert um 15 Uhr?',
                    options: [
                      'Die Seelöwen bekommen ihr Futter.',
                      'Man kann den kleinen Gorilla sehen.',
                      'Der Tierpark schließt.',
                    ],
                    answer: 0,
                    explanationRu: 'В 15 часов, как каждый день, кормят морских львов. Горилл можно будет увидеть только завтра.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von einer Kollegin',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo, Herr Petrović, hier ist Katharina Busch aus der Buchhaltung. Ich rufe wegen unseres Termins morgen an. Wir wollten ja um neun Uhr zusammen die Rechnungen für das Projekt Müller durchgehen. Leider muss ich morgen früh zum Arzt. Könnten wir uns stattdessen um halb zwei treffen? Und noch etwas: Bitte bringen Sie die Unterlagen auf Papier mit, mein Laptop ist gerade in der Reparatur. Danke und bis morgen!',
            tasks: [
              {
                instructionDe: 'Wählen Sie: Richtig oder falsch? Und wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите: верно или неверно? И выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Frau Busch möchte den Termin ganz absagen.',
                    answer: false,
                    explanationRu: 'Она не отменяет встречу, а переносит её на половину второго.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was soll Herr Petrović mitbringen?',
                    options: ['Seinen Laptop.', 'Die Unterlagen auf Papier.', 'Die Rechnungen per E-Mail.'],
                    answer: 1,
                    explanationRu: '«Bitte bringen Sie die Unterlagen auf Papier mit» — её ноутбук в ремонте.',
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
          'Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Sie beginnen eine Ausbildung in einem Hotel und hören die Begrüßung der Personalleiterin.',
        instructionRu:
          'Вы услышите текст один раз. К нему нужно решить пять заданий. В каждом задании выберите правильный ответ a, b или c. Вы начинаете обучение в отеле и слушаете приветствие руководителя отдела кадров.',
        segments: [
          {
            title: 'Erster Tag im Hotel Bergblick',
            kind: 'monolog',
            situation: 'Sie beginnen eine Ausbildung in einem Hotel und hören die Begrüßung der Personalleiterin.',
            playCount: 1,
            text: `Guten Morgen und herzlich willkommen im Hotel Bergblick! Ich bin Ulrike Schulte, die Personalleiterin, und ich freue mich, dass Sie heute als neue Auszubildende bei uns anfangen. In dieser ersten Stunde möchte ich Ihnen das Wichtigste erklären. Danach zeigen Ihnen Ihre Paten das Haus.

Jeder von Ihnen bekommt nämlich einen Paten oder eine Patin – das ist ein Azubi aus dem zweiten oder dritten Lehrjahr. Ihr Pate hilft Ihnen in den ersten Wochen bei allen Fragen. Natürlich können Sie auch jederzeit zu mir kommen. Mein Büro ist im ersten Stock, gleich neben der Buchhaltung.

Zu Ihrer Arbeitskleidung: Die Uniformen bekommen Sie heute Nachmittag in der Wäscherei im Keller. Um die Reinigung kümmern wir uns. Schwarze Schuhe müssen Sie sich aber selbst kaufen; dafür bekommen Sie einen Zuschuss von 50 Euro.

Ihre Dienstpläne hängen immer donnerstags für die nächste Woche am schwarzen Brett vor der Kantine. Außerdem finden Sie sie in unserer Mitarbeiter-App. Wenn Sie einen Dienst tauschen möchten, ist das kein Problem – Sie müssen es aber vorher mit Ihrer Abteilungsleitung absprechen.

Apropos Kantine: Das Mittagessen ist für Sie kostenlos. Für Ihre Pausen haben wir einen eigenen Aufenthaltsraum. Bitte verbringen Sie die Pausen nicht in der Lobby oder im Restaurant, denn diese Bereiche sind für unsere Gäste da.

Und noch etwas Wichtiges: Im ersten Monat arbeiten Sie in allen Abteilungen – an der Rezeption, im Restaurant, in der Küche und im Housekeeping. So lernen Sie das ganze Hotel kennen. Erst danach beginnen Sie in Ihrer eigentlichen Abteilung.

So, haben Sie bis hierhin Fragen? Nein? Dann stelle ich Ihnen jetzt Ihre Paten vor.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wer hilft den neuen Azubis in den ersten Wochen?',
                    options: ['Die Abteilungsleitung.', 'Ein Azubi aus einem höheren Lehrjahr.', 'Die Buchhaltung.'],
                    answer: 1,
                    explanationRu: 'Каждому дают «крёстного» — ученика второго или третьего года обучения.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was gilt für die Arbeitskleidung?',
                    options: [
                      'Die Schuhe kaufen die Azubis selbst, bekommen aber Geld dazu.',
                      'Die Azubis müssen ihre Uniformen selbst waschen.',
                      'Die Uniformen bekommt man an der Rezeption.',
                    ],
                    answer: 0,
                    explanationRu: 'Чёрную обувь покупают сами, но получают доплату 50 евро. Униформу чистит отель, её выдают в прачечной.',
                  },
                  {
                    kind: 'mc',
                    question: 'Die Dienstpläne …',
                    options: ['bekommt man per E-Mail.', 'hängen jeden Montag aus.', 'findet man auch in einer App.'],
                    answer: 2,
                    explanationRu: 'Графики вывешивают по четвергам, а также публикуют в приложении для сотрудников.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wo sollen die Azubis ihre Pausen verbringen?',
                    options: ['In der Lobby.', 'Im Aufenthaltsraum.', 'Im Restaurant.'],
                    answer: 1,
                    explanationRu: 'Для перерывов есть отдельная комната отдыха; лобби и ресторан — для гостей.',
                  },
                  {
                    kind: 'mc',
                    question: 'Im ersten Monat …',
                    options: [
                      'arbeiten die Azubis nur an der Rezeption.',
                      'haben die Azubis nur Unterricht in der Berufsschule.',
                      'lernen die Azubis alle Abteilungen kennen.',
                    ],
                    answer: 2,
                    explanationRu: 'В первый месяц они работают во всех отделах, чтобы узнать весь отель.',
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
          'Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Sie stehen im Treppenhaus und hören, wie sich zwei Nachbarn unterhalten.',
        instructionRu:
          'Вы услышите разговор один раз. К нему нужно решить семь заданий. Выберите: верны утверждения или нет? Вы стоите на лестнице и слышите, как разговаривают двое соседей.',
        segments: [
          {
            title: 'Ein Hoffest planen',
            kind: 'dialog',
            speakers: { A: 'Frau Kaya', B: 'Herr Brenner' },
            situation: 'Sie stehen im Treppenhaus und hören, wie sich Frau Kaya und Herr Brenner unterhalten.',
            playCount: 1,
            text: `A: Guten Morgen, Herr Brenner! Haben Sie einen Moment Zeit?
B: Ja, natürlich, Frau Kaya. Worum geht es denn?
A: Ich habe mir überlegt, dass wir im Sommer ein Hoffest machen könnten. Wir wohnen jetzt schon so lange hier, und viele Nachbarn kennen sich kaum.
B: Das ist eine schöne Idee! Seit die neuen Familien im dritten Stock eingezogen sind, habe ich mit ihnen noch kein Wort gesprochen. Wann haben Sie denn gedacht?
A: Vielleicht am letzten Samstag im Juni? Da sind noch keine Schulferien, also sind die meisten Familien noch da.
B: Das passt gut. Aber müssen wir nicht vorher die Hausverwaltung fragen? Der Hof gehört ja nicht uns.
A: Das habe ich schon gemacht. Herr Lindner von der Hausverwaltung war sofort einverstanden. Nur grillen dürfen wir nicht, wegen der Holzfassade.
B: Schade, eine Grillwurst gehört für mich eigentlich dazu. Aber gut, dann bringt eben jeder etwas zu essen mit – Salate, Kuchen und so weiter.
A: Genau so habe ich mir das vorgestellt. Und die Getränke könnten wir gemeinsam kaufen und die Kosten teilen.
B: Ich habe übrigens noch zwei Biertischgarnituren im Keller, die können wir benutzen. Und Herr Schmitt aus dem Erdgeschoss hat einen großen Sonnenschirm.
A: Super! Wissen Sie, was ich noch schön fände? Wenn es für die Kinder ein kleines Programm gäbe. Vielleicht Kinderschminken oder ein paar Spiele.
B: Fragen Sie doch mal Frau Okonkwo aus dem zweiten Stock. Sie ist Erzieherin, sie hat bestimmt gute Ideen.
A: Das mache ich. Und wie laden wir alle ein? Ich dachte an einen Zettel im Treppenhaus.
B: Ja, aber den lesen nicht alle. Ich würde zusätzlich in jeden Briefkasten eine Einladung werfen. Das übernehme ich gern.
A: Prima. Und was machen wir, wenn es regnet?
B: Dann verschieben wir das Fest einfach um eine Woche.
A: Einverstanden. Ich freue mich schon!`,
            tasks: [
              {
                instructionDe: 'Wählen Sie: Sind die Aussagen richtig oder falsch?',
                instructionRu: 'Выберите: верны утверждения или нет?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Frau Kaya möchte, dass sich die Nachbarn besser kennenlernen.',
                    answer: true,
                    explanationRu: '«…viele Nachbarn kennen sich kaum» — поэтому она предлагает праздник во дворе.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Herr Brenner kennt die neuen Familien im dritten Stock schon gut.',
                    answer: false,
                    explanationRu: 'Он с ними ещё ни слова не сказал.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Das Fest soll in den Schulferien stattfinden.',
                    answer: false,
                    explanationRu: 'Праздник планируют до каникул, чтобы семьи ещё не уехали.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Die Hausverwaltung hat das Fest erlaubt.',
                    answer: true,
                    explanationRu: 'Господин Линднер из управляющей компании сразу согласился.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Beim Fest darf gegrillt werden.',
                    answer: false,
                    explanationRu: 'Жарить на гриле нельзя из-за деревянного фасада.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Herr Brenner schlägt vor, eine Nachbarin wegen des Kinderprogramms zu fragen.',
                    answer: true,
                    explanationRu: 'Он советует спросить фрау Оконкво — она воспитательница.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Herr Brenner wirft die Einladungen in die Briefkästen.',
                    answer: true,
                    explanationRu: '«Ich würde zusätzlich in jeden Briefkasten eine Einladung werfen. Das übernehme ich gern.»',
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
          'Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Der Moderator der Radiosendung „Streitfrage“ diskutiert mit Karin Albrecht, Leiterin eines Seniorenheims, und dem Studenten Leon Hartwig über das Thema „Ein soziales Pflichtjahr für junge Menschen?“.',
        instructionRu:
          'Вы услышите дискуссию два раза. К ней нужно решить восемь заданий. Определите: кто что говорит? Ведущий радиопередачи обсуждает с Карин Альбрехт, руководителем дома престарелых, и студентом Леоном Хартвигом тему «Обязательный социальный год для молодёжи?».',
        segments: [
          {
            title: 'Ein soziales Pflichtjahr für junge Menschen?',
            kind: 'discussion',
            speakers: { A: 'Stefan Wolf (Moderator)', B: 'Karin Albrecht', C: 'Leon Hartwig' },
            situation: 'Sie hören eine Diskussion im Radio.',
            playCount: 2,
            text: `A: Herzlich willkommen zu „Streitfrage“. Heute geht es um eine Idee, die immer wieder diskutiert wird: Sollen alle jungen Menschen nach der Schule ein Jahr lang einen sozialen Dienst machen – zum Beispiel im Krankenhaus, im Kindergarten oder im Umweltschutz? Bei mir im Studio sind Karin Albrecht, sie leitet ein Seniorenheim in Mainz, und Leon Hartwig, 20 Jahre alt und Student. Frau Albrecht, Sie sind für ein Pflichtjahr, oder?
B: Ja, absolut. In unserem Heim arbeiten zurzeit drei junge Leute, die freiwillig ein soziales Jahr machen. Die Bewohner lieben sie! Die jungen Leute haben Zeit, mit ihnen spazieren zu gehen oder ihnen vorzulesen – dafür fehlt unseren Pflegekräften oft die Zeit.
C: Das glaube ich sofort. Aber genau das ist doch der Punkt: Die drei machen das freiwillig. Wenn man junge Menschen zwingt, sind sie nicht mit dem Herzen dabei. Und ein unmotivierter Helfer ist im Seniorenheim sicher keine große Hilfe.
A: Ich muss sagen, als ich nach dem Abitur Zivildienst gemacht habe, wollte ich das am Anfang auch nicht. Und am Ende war es eine der wichtigsten Erfahrungen meines Lebens.
B: Das höre ich sehr oft. Viele merken erst während des Jahres, wie gut ihnen die Arbeit tut. Einige unserer Freiwilligen haben danach sogar eine Ausbildung in der Pflege angefangen.
C: Das ist schön, aber ich sehe noch ein anderes Problem. Ich wollte nach der Schule sofort studieren. Ein Pflichtjahr hätte bedeutet, dass ich ein Jahr später in den Beruf einsteige und ein Jahr weniger verdiene.
A: Und wie sieht es mit dem Geld während des Jahres aus?
B: Freiwillige bekommen heute ein Taschengeld von etwa 600 Euro im Monat. Davon kann man nicht leben, wenn man eine eigene Wohnung hat. Wenn es eine Pflicht gibt, muss der Staat deutlich mehr bezahlen. Das ist für mich ganz klar.
C: Da stimme ich Ihnen zu. Aber ich habe noch eine Sorge: Die Einrichtungen könnten die jungen Leute als billige Arbeitskräfte benutzen, statt richtiges Personal einzustellen.
B: Diese Gefahr gibt es, das stimmt. Deshalb bräuchte man klare Regeln, was die Helfer machen dürfen und was nicht.
A: Herr Hartwig, gibt es für Sie eine Alternative?
C: Ich fände es besser, wenn man das freiwillige Jahr attraktiver macht, zum Beispiel mit Vorteilen bei der Studienplatzvergabe oder mit einem höheren Taschengeld. Dann würden viel mehr junge Leute mitmachen – ganz ohne Zwang.
A: Eine interessante Idee. Vielen Dank Ihnen beiden für das Gespräch.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie jede Aussage einer Person zu.',
                instructionRu: 'Кто что говорит? Соотнесите каждое высказывание с одним из участников.',
                options: ['Stefan Wolf (Moderator)', 'Karin Albrecht', 'Leon Hartwig'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Junge Helfer haben Zeit für Dinge, die das Pflegepersonal nicht schafft.',
                    answer: 1,
                    explanationRu: 'Альбрехт: молодые помощники гуляют с жильцами и читают им вслух.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Wer zu etwas gezwungen wird, arbeitet nicht mit voller Motivation.',
                    answer: 2,
                    explanationRu: 'Хартвиг: «Wenn man junge Menschen zwingt, sind sie nicht mit dem Herzen dabei.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Ich habe selbst einen Dienst gemacht, den ich am Anfang nicht wollte.',
                    answer: 0,
                    explanationRu: 'Ведущий рассказывает о своей альтернативной службе после школы.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Manche Freiwillige wählen danach einen Beruf in der Pflege.',
                    answer: 1,
                    explanationRu: 'Альбрехт: некоторые волонтёры потом начали обучение по уходу за людьми.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Durch ein Pflichtjahr fängt man später mit dem Beruf an.',
                    answer: 2,
                    explanationRu: 'Хартвиг: он начал бы работать на год позже и заработал бы меньше.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Der Staat müsste den Helfern mehr Geld zahlen.',
                    answer: 1,
                    explanationRu: 'Альбрехт: при обязательной службе государство должно платить значительно больше.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Die Einrichtungen könnten mit den Helfern Personalkosten sparen.',
                    answer: 2,
                    explanationRu: 'Хартвиг опасается, что молодёжь будут использовать как дешёвую рабочую силу.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Man sollte den freiwilligen Dienst mit Vorteilen attraktiver machen.',
                    answer: 2,
                    explanationRu: 'Альтернатива Хартвига: преимущества при поступлении и большее карманное пособие.',
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
          'Sie waren am Wochenende auf der Hochzeit Ihrer Cousine. Ihre Freundin Maria konnte leider nicht mitkommen. Schreiben Sie Maria eine E-Mail. Schreiben Sie etwa 80 Wörter. Schreiben Sie etwas zu allen drei Punkten.',
        instructionRu:
          'В выходные вы были на свадьбе своей двоюродной сестры. Ваша подруга Мария не смогла поехать с вами. Напишите ей электронное письмо (около 80 слов). Раскройте все три пункта.',
        situationDe: 'Sie waren am Wochenende auf der Hochzeit Ihrer Cousine. Ihre Freundin Maria war eingeladen, konnte aber nicht mitkommen.',
        points: [
          'Beschreiben Sie: Wie war die Hochzeit?',
          'Begründen Sie: Was hat Ihnen besonders gut gefallen und warum?',
          'Machen Sie einen Vorschlag, wann Sie Maria die Fotos zeigen können.',
        ],
        minWords: 80,
        register: 'informell',
        minutes: 20,
        maxPoints: 40,
      },
      {
        teil: 2,
        instructionDe:
          'Sie haben in einer Zeitschrift einen Artikel zum Thema „Im Urlaub für die Firma erreichbar?“ gelesen. Im Online-Forum der Zeitschrift finden Sie folgende Meinung. Schreiben Sie nun Ihre Meinung (circa 80 Wörter).',
        instructionRu:
          'Вы прочитали в журнале статью на тему «Нужно ли быть на связи с работой во время отпуска?». На онлайн-форуме журнала вы нашли следующее мнение. Напишите своё мнение (около 80 слов).',
        situationDe:
          'Ralf, 46: „Ich bin Abteilungsleiter und lese auch im Urlaub jeden Tag meine E-Mails. Das dauert nur eine halbe Stunde, und danach bin ich ganz entspannt, weil ich weiß, dass im Büro alles läuft. Wer Karriere machen will, muss auch im Urlaub erreichbar sein.“',
        points: [
          'Sagen Sie Ihre Meinung: Sollte man im Urlaub für die Firma erreichbar sein?',
          'Nennen Sie Argumente und geben Sie Beispiele.',
          'Reagieren Sie auf Ralfs Aussage über die Karriere.',
        ],
        minWords: 80,
        register: 'halbformell',
        minutes: 25,
        maxPoints: 40,
      },
      {
        teil: 3,
        instructionDe:
          'Sie besuchen einen Abendkurs bei Frau Neumann. Nächsten Dienstag können Sie nicht am Kurs teilnehmen. Schreiben Sie an Frau Neumann. Entschuldigen Sie sich höflich und bitten Sie um die Unterlagen. Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.',
        instructionRu:
          'Вы посещаете вечерний курс у фрау Нойман. В следующий вторник вы не сможете прийти на занятие. Напишите ей письмо (около 40 слов): вежливо извинитесь и попросите материалы. Не забудьте обращение и приветствие в конце.',
        situationDe: 'Abendkurs „Buchhaltung für Einsteiger“ bei Frau Neumann – nächsten Dienstag können Sie nicht kommen.',
        points: [
          'Entschuldigen Sie sich höflich.',
          'Nennen Sie den Grund, warum Sie nicht kommen können.',
          'Bitten Sie Frau Neumann, Ihnen die Unterlagen zu schicken.',
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
          'Gemeinsam etwas planen. Eine gemeinsame Bekannte, Lena, kommt aus dem Ausland für ein Wochenende in Ihre Stadt. Sie möchten zusammen mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner ihren Besuch planen. Sprechen Sie über die Punkte unten, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Gesprächspartners. Planen und entscheiden Sie gemeinsam, was Sie tun möchten.',
        instructionRu:
          'Совместное планирование. Ваша общая знакомая Лена приезжает из-за границы на выходные в ваш город. Вместе с партнёром спланируйте её визит. Обсудите пункты ниже, делайте предложения, реагируйте на предложения партнёра и вместе примите решение.',
        situationDe: 'Lena, eine gemeinsame Bekannte, besucht Sie von Freitagabend bis Sonntag.',
        points: [
          'Wann und wo abholen?',
          'Wo übernachtet Lena?',
          'Programm am Samstag?',
          'Wo essen gehen?',
          'Kleines Geschenk zum Abschied?',
        ],
        aiRole:
          'Freundin / Freund, die oder der zusammen mit Ihnen den Besuch von Lena plant. Macht eigene Vorschläge, reagiert auf Ihre Ideen, ist manchmal anderer Meinung und sucht mit Ihnen eine gemeinsame Lösung.',
        opener:
          'Hey, hast du schon gehört? Lena kommt nächstes Wochenende zu uns! Sie landet am Freitag um 19 Uhr. Sollen wir sie zusammen vom Flughafen abholen, oder was meinst du?',
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
        situationDe: 'Thema: „Arbeiten im Ausland – eine gute Idee?“',
        points: [
          'Folie 1: Arbeiten im Ausland – eine gute Idee? – Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.',
          'Folie 2: Meine persönlichen Erfahrungen – Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.',
          'Folie 3: Die Situation in meinem Heimatland – Berichten Sie, wie es in Ihrem Heimatland ist, und geben Sie Beispiele.',
          'Folie 4: Vor- und Nachteile & meine Meinung – Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.',
          'Folie 5: Abschluss & Dank – Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.',
        ],
        aiRole: 'Prüferin, die Ihrer Präsentation zuhört und Sie nicht unterbricht.',
        opener: 'Bitte beginnen Sie jetzt mit Ihrer Präsentation zum Thema „Arbeiten im Ausland – eine gute Idee?“. Sie haben etwa drei Minuten Zeit.',
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
        situationDe: 'Gespräch nach Ihrer Präsentation „Arbeiten im Ausland – eine gute Idee?“.',
        points: [
          'Reagieren Sie auf die Rückmeldung Ihrer Gesprächspartnerin.',
          'Beantworten Sie die Fragen ausführlich und mit Beispielen.',
          'Fragen Sie gegebenenfalls nach, wenn Sie etwas nicht verstanden haben.',
        ],
        aiRole:
          'Gesprächspartnerin bzw. Prüferin, die Ihre Präsentation gehört hat. Gibt eine kurze, freundliche Rückmeldung und stellt ein bis zwei Fragen zu Ihrer Präsentation.',
        opener:
          'Vielen Dank, das war eine sehr klare Präsentation! Eine Frage hätte ich noch: Was wäre für dich persönlich am schwierigsten, wenn du für längere Zeit im Ausland arbeiten würdest?',
        minutes: 2,
        maxPoints: 20,
      },
    ],
  },
};
