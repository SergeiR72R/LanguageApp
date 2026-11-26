import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'a2-exam-2',
  level: 'A2',
  title: 'Übungstest A2 – 2',

  // ───────────────────────────── LESEN ─────────────────────────────
  lesen: {
    minutes: 30,
    parts: [
      {
        teil: 1,
        minutes: 7,
        title: 'Gemüse vom Parkplatz',
        textType: 'Zeitungsartikel',
        texts: [
          {
            heading: 'Gemüse vom Parkplatz: Nachbarn machen einen Garten für alle',
            body: `Rosenheim. Wo früher ein alter Parkplatz war, wachsen heute Tomaten, Salat und Kartoffeln. Vor zwei Jahren hatten einige Nachbarn aus der Gartenstraße eine Idee: Sie wollten aus dem hässlichen Platz einen Garten für alle machen. Die Stadt hat ihnen den Platz kostenlos gegeben. Nur das Wasser müssen die Gärtner selbst bezahlen.

Heute machen etwa 40 Menschen mit: Junge und Alte, Deutsche und Menschen aus zwölf anderen Ländern. „Hier habe ich mehr Nachbarn kennengelernt als in zehn Jahren in meinem Haus“, sagt Ali Demir (58). Er pflanzt im Garten Paprika und Bohnen, so wie früher in der Türkei.

Jeden Samstagvormittag arbeiten alle zusammen. Danach gibt es oft ein Picknick, und jeder bringt etwas zu essen mit. Die Kinder aus dem Kindergarten nebenan kommen einmal pro Woche und lernen, wie Gemüse wächst.

Neue Gärtner brauchen keine Erfahrung. Sie müssen nur zwei Stunden pro Woche helfen. Am 15. Juni feiert der Garten ein Sommerfest. Alle Nachbarn sind herzlich eingeladen.`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text aus der Zeitung. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст из газеты. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Was war früher an diesem Ort?',
                options: ['Ein Kindergarten.', 'Ein Parkplatz.', 'Ein Bauernhof.'],
                answer: 1,
                explanationRu: '«Wo früher ein alter Parkplatz war…» — раньше там была старая парковка.',
              },
              {
                kind: 'mc',
                question: 'Was müssen die Gärtner bezahlen?',
                options: ['Das Wasser.', 'Den Platz.', 'Nichts.'],
                answer: 0,
                explanationRu: 'Место город дал бесплатно, но «nur das Wasser müssen die Gärtner selbst bezahlen».',
              },
              {
                kind: 'mc',
                question: 'Herr Demir …',
                options: ['hat im Garten viele Nachbarn kennengelernt.', 'wohnt erst seit Kurzem in Rosenheim.', 'hat den Garten allein gemacht.'],
                answer: 0,
                explanationRu: '«Hier habe ich mehr Nachbarn kennengelernt als in zehn Jahren in meinem Haus» — он живёт там уже десять лет, а сад делали вместе.',
              },
              {
                kind: 'mc',
                question: 'Die Kinder aus dem Kindergarten …',
                options: ['kommen jeden Samstag in den Garten.', 'lernen im Garten etwas über Gemüse.', 'machen jeden Tag ein Picknick.'],
                answer: 1,
                explanationRu: 'Дети приходят раз в неделю и узнают, как растут овощи: «…lernen, wie Gemüse wächst». По субботам работают взрослые.',
              },
              {
                kind: 'mc',
                question: 'Neue Gärtner …',
                options: ['müssen schon viel über Gärten wissen.', 'sollen jede Woche ein bisschen helfen.', 'können nur im Juni anfangen.'],
                answer: 1,
                explanationRu: '«Neue Gärtner brauchen keine Erfahrung. Sie müssen nur zwei Stunden pro Woche helfen.» В июне — только летний праздник.',
              },
            ],
          },
        ],
      },
      {
        teil: 2,
        minutes: 6,
        title: 'Im Ärztehaus',
        textType: 'Informationstafel',
        texts: [
          {
            heading: 'Ärztehaus am Markt – Wegweiser',
            body: `5. Stock: Praxis für Psychotherapie · Verwaltung des Ärztehauses
4. Stock: Physiotherapie „Fit & Gesund“ (Massage, Krankengymnastik) · Dr. med. Ines Hahn, Hautärztin
3. Stock: Dr. med. Eva Bauer, Hausärztin (Allgemeinmedizin) · Labor (Blutabnahme Mo–Fr 7.30–10.00 Uhr)
2. Stock: Dr. med. Sven Krüger, Augenarzt · Optiker Klarblick (Brillen und Kontaktlinsen, auch Reparatur)
1. Stock: Dr. med. Anna Roth, Kinderärztin · Dr. med. Paul Lenz, Zahnarzt
Erdgeschoss: Apotheke am Markt · Sanitätshaus · Café „Pause“

Der Aufzug ist rechts neben der Apotheke.`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Sie sind im Ärztehaus. Lesen Sie die Aufgaben und den Wegweiser. In welches Stockwerk gehen Sie? Wählen Sie die richtige Lösung.',
            instructionRu: 'Вы в медицинском центре. Прочитайте задания и указатель. На какой этаж вы пойдёте? Выберите правильный ответ.',
            options: ['Erdgeschoss', '1. Stock', '2. Stock', '3. Stock', '4. Stock', '5. Stock'],
            items: [
              {
                kind: 'match',
                prompt: 'Ihr Sohn ist vier Jahre alt und hat seit gestern Fieber.',
                answer: 1,
                explanationRu: 'Ребёнок болеет — к детскому врачу (Kinderärztin), 1-й этаж.',
              },
              {
                kind: 'match',
                prompt: 'Ihre Brille ist kaputt.',
                answer: 2,
                explanationRu: 'Оптика «Klarblick» чинит очки («auch Reparatur») — 2-й этаж.',
              },
              {
                kind: 'match',
                prompt: 'Sie haben von Ihrer Ärztin ein Rezept bekommen und brauchen jetzt das Medikament.',
                answer: 0,
                explanationRu: 'Лекарство по рецепту покупают в аптеке (Apotheke) — первый этаж (Erdgeschoss).',
              },
              {
                kind: 'match',
                prompt: 'Ihr Arzt sagt: „Sie brauchen Massagen für Ihren Rücken.“',
                answer: 4,
                explanationRu: 'Массаж делают в физиотерапии «Fit & Gesund» — 4-й этаж.',
              },
              {
                kind: 'match',
                prompt: 'Sie sind erkältet und brauchen eine Krankmeldung für Ihre Firma.',
                answer: 3,
                explanationRu: 'С простудой и за больничным идут к врачу общей практики (Hausärztin) — 3-й этаж.',
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        minutes: 8,
        title: 'Eine E-Mail von Marta',
        textType: 'E-Mail',
        texts: [
          {
            heading: 'Von: Marta Nowak · An: Dimitri Orlow · Betreff: Neuigkeiten und eine Einladung',
            body: `Hallo Dimitri,

wie geht es dir? Gefällt dir deine neue Wohnung?

Bei mir gibt es auch Neuigkeiten: Seit dem 1. Oktober arbeite ich nicht mehr im Supermarkt, sondern in einem Hotel an der Rezeption. Die Arbeit ist interessanter, und ich kann endlich mein Englisch benutzen. Leider muss ich oft am Wochenende arbeiten, aber dafür habe ich unter der Woche manchmal frei.

Am Samstag, den 18. November, werde ich vierzig! Das möchte ich natürlich feiern, und ich lade dich herzlich ein. Die Party beginnt um 19 Uhr bei mir zu Hause. Ich koche ein großes Essen, du musst also nichts zu essen mitbringen. Aber vielleicht kannst du deine Gitarre mitnehmen? Du spielst doch so schön!

Und ich habe noch eine Bitte: Kannst du mir am Freitag beim Einkaufen helfen? Ich habe kein Auto, und ich muss viele Getränke kaufen. Dein Auto ist doch groß genug.

Sag mir bitte bis Mittwoch, ob du kommen kannst.

Viele Grüße
Marta`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie die E-Mail. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте электронное письмо. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Wo arbeitet Marta jetzt?',
                options: ['Im Supermarkt.', 'In einem Hotel.', 'In einer Sprachschule.'],
                answer: 1,
                explanationRu: '«…arbeite ich nicht mehr im Supermarkt, sondern in einem Hotel an der Rezeption».',
              },
              {
                kind: 'mc',
                question: 'Was ist an der neuen Arbeit nicht so gut?',
                options: ['Marta muss oft am Wochenende arbeiten.', 'Marta verdient weniger Geld.', 'Marta muss viel Englisch lernen.'],
                answer: 0,
                explanationRu: '«Leider muss ich oft am Wochenende arbeiten» — leider (к сожалению) показывает минус. О зарплате ничего не сказано.',
              },
              {
                kind: 'mc',
                question: 'Was soll Dimitri zur Party mitbringen?',
                options: ['Etwas zu essen.', 'Getränke.', 'Seine Gitarre.'],
                answer: 2,
                explanationRu: 'Еду Марта готовит сама, а Дмитрия просит взять гитару: «vielleicht kannst du deine Gitarre mitnehmen?»',
              },
              {
                kind: 'mc',
                question: 'Wobei soll Dimitri Marta am Freitag helfen?',
                options: ['Beim Kochen.', 'Beim Einkaufen.', 'Beim Aufräumen.'],
                answer: 1,
                explanationRu: '«Kannst du mir am Freitag beim Einkaufen helfen?» — у Марты нет машины, а напитков нужно много.',
              },
              {
                kind: 'mc',
                question: 'Bis wann soll Dimitri antworten?',
                options: ['Bis Mittwoch.', 'Bis Freitag.', 'Bis Samstag.'],
                answer: 0,
                explanationRu: '«Sag mir bitte bis Mittwoch, ob du kommen kannst.»',
              },
            ],
          },
        ],
      },
      {
        teil: 4,
        minutes: 9,
        title: 'Kleinanzeigen',
        textType: 'Anzeigen',
        texts: [
          {
            label: 'a',
            heading: 'Möbel zu verschenken',
            body: 'Wir ziehen ins Ausland. Sofa, Esstisch mit vier Stühlen und ein Kinderbett – alles kostenlos! Sie müssen die Möbel nur am Samstag selbst abholen. Tel. 0176 2345678.',
          },
          {
            label: 'b',
            heading: 'Umzugshilfe Stark',
            body: 'Zwei starke Männer mit Transporter helfen Ihnen beim Umzug – auch am Wochenende. 35 Euro pro Stunde. Kartons bringen wir mit!',
          },
          {
            label: 'c',
            heading: 'Nachhilfe in Mathe',
            body: 'Student (Mathematik, 6. Semester) gibt Nachhilfe für Schülerinnen und Schüler der Klassen 5 bis 10. 15 Euro pro Stunde, gern auch bei Ihnen zu Hause.',
          },
          {
            label: 'd',
            heading: 'Fahrradwerkstatt Speiche',
            body: 'Ihr Fahrrad ist kaputt? Wir reparieren schnell und günstig. Außerdem verkaufen wir gebrauchte Fahrräder für Erwachsene und Kinder ab 80 Euro. Mo–Fr 9–18 Uhr.',
          },
          {
            label: 'e',
            heading: 'Zimmer frei',
            body: 'Helles Zimmer (14 m²) in einer Wohngemeinschaft mit zwei Studentinnen, nah an der Uni. 350 Euro warm. Wir suchen eine Frau, Nichtraucherin.',
          },
          {
            label: 'f',
            heading: 'Hilfe im Haushalt gesucht',
            body: 'Ältere Dame (82) sucht freundliche Hilfe für den Haushalt: zweimal pro Woche vormittags putzen und einkaufen. 14 Euro pro Stunde. Tel. 089 765432.',
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sechs Personen suchen im Internet nach Angeboten. Lesen Sie die Aufgaben und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person? Für eine Person gibt es keine passende Anzeige. Dann wählen Sie „0“.',
            instructionRu:
              'Шесть человек ищут предложения в интернете. Прочитайте задания и объявления a–f. Какое объявление подходит какому человеку? Для одного человека подходящего объявления нет — тогда выберите «0».',
            options: [
              'Möbel zu verschenken',
              'Umzugshilfe Stark',
              'Nachhilfe in Mathe',
              'Fahrradwerkstatt Speiche',
              'Zimmer frei',
              'Hilfe im Haushalt gesucht',
            ],
            allowNone: true,
            items: [
              {
                kind: 'match',
                prompt: 'Frau Kim studiert und möchte etwas Geld verdienen. Sie hat am Vormittag Zeit.',
                answer: 5,
                explanationRu: 'f — пожилая дама ищет помощницу по дому до обеда («vormittags»), 14 евро в час.',
              },
              {
                kind: 'match',
                prompt: 'Herr Becker zieht nächste Woche um. Er hat viele schwere Möbel, aber keine Freunde mit Auto.',
                answer: 1,
                explanationRu: 'b — помощь при переезде: двое мужчин с фургоном.',
              },
              {
                kind: 'match',
                prompt: 'Familie Ivanov hat eine neue Wohnung, aber noch keine Möbel. Sie hat nicht viel Geld.',
                answer: 0,
                explanationRu: 'a — мебель отдают бесплатно («alles kostenlos»).',
              },
              {
                kind: 'match',
                prompt: 'Die Eltern von Tom (12) suchen Hilfe, weil Tom in Mathe schlechte Noten hat.',
                answer: 2,
                explanationRu: 'c — репетитор по математике для 5–10 классов. Тому 12 лет — это примерно 6–7 класс.',
              },
              {
                kind: 'match',
                prompt: 'Jan studiert und sucht ein Zimmer. Er raucht nicht.',
                answer: -1,
                explanationRu: 'Подходящего объявления нет: комнату e сдают только женщине («Wir suchen eine Frau»), а Ян — мужчина.',
              },
              {
                kind: 'match',
                prompt: 'Ihre Tochter (9) möchte Fahrrad fahren. Sie möchten aber kein neues Fahrrad kaufen, das ist zu teuer.',
                answer: 3,
                explanationRu: 'd — мастерская продаёт подержанные велосипеды для детей («gebrauchte Fahrräder … ab 80 Euro»).',
              },
            ],
          },
        ],
      },
    ],
  },

  // ───────────────────────────── HÖREN ─────────────────────────────
  hoeren: {
    minutes: 30,
    parts: [
      {
        teil: 1,
        instructionDe: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu: 'Вы услышите пять коротких текстов. Каждый текст звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Verkehrsmeldung',
            kind: 'monolog',
            situation: 'Sie hören Verkehrsinformationen im Radio.',
            playCount: 2,
            text: 'Und jetzt die Verkehrsmeldungen. Auf der Autobahn A8 von München Richtung Salzburg gab es einen Unfall. Zwischen Rosenheim und Bernau stehen die Autos jetzt zehn Kilometer im Stau. Bitte fahren Sie ab Rosenheim über die Bundesstraße. Und in der Stadt ist die Bahnhofstraße wegen Bauarbeiten noch bis Freitag gesperrt.',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Warum gibt es auf der A8 einen Stau?',
                    options: ['Es gibt Bauarbeiten.', 'Es gab einen Unfall.', 'Es schneit stark.'],
                    answer: 1,
                    explanationRu: '«Auf der Autobahn A8 … gab es einen Unfall» — авария. Ремонтные работы — на Bahnhofstraße в городе.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von der Werkstatt',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Guten Tag, Herr Lindner, hier ist die Autowerkstatt Meier. Ihr Auto ist leider noch nicht fertig. Wir warten noch auf ein Ersatzteil. Das kommt morgen Vormittag. Sie können Ihr Auto dann morgen ab 16 Uhr abholen. Wenn Sie Fragen haben, rufen Sie uns einfach an. Auf Wiederhören!',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann kann Herr Lindner sein Auto abholen?',
                    options: ['Heute Nachmittag.', 'Morgen Vormittag.', 'Morgen Nachmittag.'],
                    answer: 2,
                    explanationRu: 'Утром завтра придёт запчасть, а машину можно забрать «morgen ab 16 Uhr» — завтра после обеда.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Im Schwimmbad',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Schwimmbad.',
            playCount: 2,
            text: 'Liebe Badegäste, wegen einer Veranstaltung schließen wir heute schon um 18 Uhr. Bitte kommen Sie bis 17.30 Uhr aus dem Wasser. Die Sauna bleibt heute bis 21 Uhr geöffnet. Morgen sind wir wieder wie immer von 7 bis 22 Uhr für Sie da. Vielen Dank!',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann schließt das Schwimmbad heute?',
                    options: ['Um 17.30 Uhr.', 'Um 18 Uhr.', 'Um 22 Uhr.'],
                    answer: 1,
                    explanationRu: '«…schließen wir heute schon um 18 Uhr». В 17:30 нужно выйти из воды, до 22 часов бассейн работает обычно (завтра).',
                  },
                ],
              },
            ],
          },
          {
            title: 'Tipp für das Wochenende',
            kind: 'monolog',
            situation: 'Sie hören einen Veranstaltungstipp im Radio.',
            playCount: 2,
            text: 'Unser Tipp für das Wochenende: Am Samstag und Sonntag gibt es im Stadtpark das große Kinderfest. Es gibt Musik, Spiele und einen Zauberer. Der Eintritt ist frei, nur das Karussell kostet einen Euro. Und wenn es regnet? Kein Problem, dann feiern wir in der Stadthalle.',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was kostet auf dem Kinderfest Geld?',
                    options: ['Der Eintritt.', 'Das Karussell.', 'Der Zauberer.'],
                    answer: 1,
                    explanationRu: '«Der Eintritt ist frei, nur das Karussell kostet einen Euro.»',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von Birgit',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo Elena, hier ist Birgit. Du, morgen schreiben wir doch im Deutschkurs den Test. Ich bin leider krank und kann nicht kommen. Kannst du bitte der Lehrerin sagen, dass ich krank bin? Und kannst du mir nach dem Kurs die Hausaufgaben schicken? Danke dir, tschüss!',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was soll Elena machen?',
                    options: ['Birgit zu Hause besuchen.', 'Mit der Lehrerin sprechen.', 'Für Birgit den Test schreiben.'],
                    answer: 1,
                    explanationRu: '«Kannst du bitte der Lehrerin sagen, dass ich krank bin?» — Елена должна сказать учительнице, что Биргит больна.',
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
          'Sie hören ein Gespräch. Sie hören den Text einmal. Was bringen die Leute zur Party mit? Wählen Sie für jede Person das passende Wort a bis h. Sie können jeden Buchstaben nur einmal wählen.',
        instructionRu:
          'Вы услышите разговор один раз. Что люди принесут на вечеринку? Для каждого человека выберите подходящее слово a–h. Каждую букву можно выбрать только один раз.',
        segments: [
          {
            title: 'Wer bringt was mit?',
            kind: 'dialog',
            speakers: { A: 'Lena', B: 'Max' },
            situation: 'Lena und Max planen eine Party für ihren Freund Jonas.',
            playCount: 1,
            text: `A: Max, am Samstag ist doch die Party für Jonas. Weißt du schon, wer was mitbringt?
B: Ja, ich habe mit fast allen telefoniert. Sophie bringt einen großen Nudelsalat mit. Den macht sie immer so lecker.
A: Super. Und Ben? Er wollte doch einen Kuchen backen.
B: Nein, er hat keine Zeit zum Backen. Er bringt seine Lautsprecher mit und macht die Musik.
A: Auch gut. Und wer macht jetzt den Kuchen?
B: Meine Mutter. Sie hat gesagt, sie backt einen Apfelkuchen.
A: Toll! Und Tarek?
B: Tarek kauft die Getränke. Er hat ein Auto, da kann er die Kisten gut transportieren.
A: Und Frau Berger, die Nachbarin? Kommt sie auch?
B: Ja, sie kommt. Sie hat gefragt, ob wir genug Teller und Gläser haben. Wir haben nicht genug, deshalb bringt sie Geschirr mit.
A: Und wer kauft die Würstchen für den Grill?
B: Das machen wir beide am Freitag. Und die Blumen für Jonas kaufe ich am Samstag früh.`,
            tasks: [
              {
                instructionDe: 'Was bringen die Leute mit? Wählen Sie das passende Wort.',
                instructionRu: 'Что принесут эти люди? Выберите подходящее слово.',
                options: ['Kuchen', 'Salat', 'Getränke', 'Musik', 'Würstchen', 'Geschirr', 'Blumen', 'Brot'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Sophie',
                    answer: 1,
                    explanationRu: '«Sophie bringt einen großen Nudelsalat mit.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Ben',
                    answer: 3,
                    explanationRu: 'Бен хотел испечь пирог, но у него нет времени. Он приносит колонки и отвечает за музыку.',
                  },
                  {
                    kind: 'match',
                    prompt: 'die Mutter von Max',
                    answer: 0,
                    explanationRu: '«Meine Mutter. Sie hat gesagt, sie backt einen Apfelkuchen.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Tarek',
                    answer: 2,
                    explanationRu: '«Tarek kauft die Getränke.» У него есть машина для ящиков.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Frau Berger',
                    answer: 5,
                    explanationRu: 'Тарелок и стаканов не хватает, поэтому соседка приносит посуду: «deshalb bringt sie Geschirr mit».',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        instructionDe: 'Sie hören fünf kurze Gespräche. Sie hören jedes Gespräch zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu: 'Вы услышите пять коротких диалогов. Каждый диалог звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'In der Bäckerei',
            kind: 'dialog',
            speakers: { A: 'Kundin', B: 'Verkäufer' },
            situation: 'Eine Frau kauft in der Bäckerei ein.',
            playCount: 2,
            text: `A: Guten Morgen! Ich hätte gern sechs Brötchen und ein Vollkornbrot.
B: Gern. Die Brötchen kosten zusammen 2,40 Euro, das Brot kostet 3,60 Euro. Möchten Sie noch etwas?
A: Nein, danke, das ist alles.
B: Dann bekomme ich sechs Euro, bitte.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wie viel bezahlt die Frau?',
                    options: ['2,40 Euro.', '3,60 Euro.', '6 Euro.'],
                    answer: 2,
                    explanationRu: 'Булочки 2,40 + хлеб 3,60 = 6 евро: «Dann bekomme ich sechs Euro».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Wo ist die Post?',
            kind: 'dialog',
            speakers: { A: 'Mann', B: 'Frau' },
            situation: 'Ein Mann fragt auf der Straße nach dem Weg.',
            playCount: 2,
            text: `A: Entschuldigung, wo ist hier die Post?
B: Die Post? Gehen Sie hier geradeaus bis zur Ampel und dann links. Die Post ist neben der Apotheke, gegenüber vom Supermarkt.
A: Also an der Ampel links, und dann neben der Apotheke. Vielen Dank!
B: Bitte, gern.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wo ist die Post?',
                    options: ['Neben der Apotheke.', 'Im Supermarkt.', 'An der Ampel rechts.'],
                    answer: 0,
                    explanationRu: '«Die Post ist neben der Apotheke, gegenüber vom Supermarkt.» На светофоре надо повернуть налево, а не направо.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Ein Termin beim Friseur',
            kind: 'dialog',
            speakers: { A: 'Friseurin', B: 'Herr Weber' },
            situation: 'Herr Weber ruft beim Friseur an.',
            playCount: 2,
            text: `A: Friseursalon Schnitt, guten Tag.
B: Guten Tag, hier ist Weber. Ich hätte gern einen Termin zum Haareschneiden, am liebsten am Donnerstag.
A: Am Donnerstag sind wir leider schon voll. Am Freitag um 10 Uhr geht es oder am Samstag um 9 Uhr.
B: Samstag ist schlecht. Dann nehme ich den Termin am Freitag.
A: Gut, Herr Weber, bis Freitag.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann geht Herr Weber zum Friseur?',
                    options: ['Am Donnerstag.', 'Am Freitag.', 'Am Samstag.'],
                    answer: 1,
                    explanationRu: 'В четверг всё занято, суббота ему неудобна: «Dann nehme ich den Termin am Freitag.»',
                  },
                ],
              },
            ],
          },
          {
            title: 'Urlaubspläne',
            kind: 'dialog',
            speakers: { A: 'Kollegin', B: 'Kollege' },
            situation: 'Zwei Kollegen sprechen über den Urlaub.',
            playCount: 2,
            text: `A: Fahrt ihr dieses Jahr wieder ans Meer?
B: Nein, letztes Jahr war es an der Ostsee zu kalt und zu voll. Dieses Jahr fahren wir in die Berge, nach Österreich. Die Kinder wollen wandern.
A: Schön! Und wie lange bleibt ihr?
B: Zwei Wochen. Wir fahren am 3. August los.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wohin fährt die Familie in diesem Jahr?',
                    options: ['An die Ostsee.', 'In die Berge.', 'Ans Mittelmeer.'],
                    answer: 1,
                    explanationRu: 'На Балтийском море были в прошлом году. В этом году: «Dieses Jahr fahren wir in die Berge, nach Österreich.»',
                  },
                ],
              },
            ],
          },
          {
            title: 'Etwas ist kaputt',
            kind: 'dialog',
            speakers: { A: 'Mieterin', B: 'Herr Schneider, Hausmeister' },
            situation: 'Eine Mieterin spricht mit dem Hausmeister.',
            playCount: 2,
            text: `A: Hallo Herr Schneider, gut, dass ich Sie treffe. In meiner Wohnung ist etwas kaputt.
B: Was denn? Die Heizung schon wieder?
A: Nein, die Heizung funktioniert jetzt gut. Aber in der Küche geht das Licht nicht mehr. Ich habe schon eine neue Glühbirne gekauft, aber es funktioniert trotzdem nicht.
B: Dann ist es bestimmt ein Problem mit dem Strom. Ich komme heute Nachmittag vorbei.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was ist in der Wohnung kaputt?',
                    options: ['Die Heizung.', 'Das Licht in der Küche.', 'Der Herd.'],
                    answer: 1,
                    explanationRu: 'Отопление теперь работает. Сломан свет на кухне: «in der Küche geht das Licht nicht mehr».',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 4,
        instructionDe: 'Sie hören ein Interview im Radio. Sie hören den Text zweimal. Wählen Sie für die Aufgaben: Ja oder Nein?',
        instructionRu: 'Вы услышите интервью по радио. Текст звучит два раза. Для каждого утверждения выберите: да (Ja) или нет (Nein)?',
        segments: [
          {
            title: 'Aktiv im Alter: Der Lesepate',
            kind: 'dialog',
            speakers: { A: 'Moderatorin', B: 'Herr Wolf, Rentner' },
            situation: 'Die Moderatorin spricht mit Herrn Wolf. Er liest in einer Schule mit Kindern.',
            playCount: 2,
            text: `A: Guten Tag und willkommen zu unserer Sendung „Aktiv im Alter“. Bei mir ist heute Herr Wolf. Herr Wolf, Sie sind seit zwei Jahren Rentner. Ist Ihnen manchmal langweilig?
B: Nein, gar nicht! Ich habe jetzt sogar weniger Zeit als früher. Zweimal pro Woche gehe ich in eine Grundschule und lese mit den Kindern.
A: Wie sind Sie auf diese Idee gekommen?
B: Meine Frau hat in der Zeitung eine Anzeige gesehen. Die Schule hat Lesepaten gesucht. Ich habe früher in einer Buchhandlung gearbeitet, Bücher sind also mein Leben.
A: Was machen Sie genau mit den Kindern?
B: Ich lese mit kleinen Gruppen, immer mit drei oder vier Kindern. Viele Kinder sprechen zu Hause eine andere Sprache. Sie lesen mir vor, und dann sprechen wir über die Geschichten. Das ist eine gute Übung für sie.
A: Bekommen Sie dafür Geld?
B: Nein, ich bekomme kein Geld. Aber ich bekomme etwas viel Schöneres: Letzte Woche hat mir ein Mädchen ein Bild gemalt. Das hängt jetzt in meiner Küche.
A: Was möchten Sie anderen Rentnern sagen?
B: Bleiben Sie nicht zu Hause! Die Schulen suchen immer Leute. Man braucht keine besondere Ausbildung, nur Zeit und Geduld.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie: Ja oder Nein?',
                instructionRu: 'Выберите: да (Ja) или нет (Nein)?',
                tfLabels: ['Ja', 'Nein'],
                items: [
                  {
                    kind: 'tf',
                    statement: 'Herr Wolf hat als Rentner oft Langeweile.',
                    answer: false,
                    explanationRu: 'Нет: «Nein, gar nicht! Ich habe jetzt sogar weniger Zeit als früher.»',
                  },
                  {
                    kind: 'tf',
                    statement: 'Herr Wolf hat früher in einer Buchhandlung gearbeitet.',
                    answer: true,
                    explanationRu: '«Ich habe früher in einer Buchhandlung gearbeitet».',
                  },
                  {
                    kind: 'tf',
                    statement: 'Herr Wolf liest immer mit der ganzen Klasse.',
                    answer: false,
                    explanationRu: 'Нет: он читает с маленькими группами по 3–4 ребёнка.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Herr Wolf bekommt Geld für seine Arbeit in der Schule.',
                    answer: false,
                    explanationRu: 'Нет: «Nein, ich bekomme kein Geld.» Зато девочка подарила ему рисунок.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Herr Wolf meint, auch andere Rentner können Lesepaten werden.',
                    answer: true,
                    explanationRu: '«Bleiben Sie nicht zu Hause! Die Schulen suchen immer Leute. Man braucht keine besondere Ausbildung».',
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
    minutes: 30,
    tasks: [
      {
        teil: 1,
        instructionDe:
          'Ihr Freund Paul hat Sie am Sonntag zum Grillen in seinen Garten eingeladen. Schreiben Sie Paul eine SMS. Schreiben Sie etwas zu allen drei Punkten. Schreiben Sie 20–30 Wörter.',
        instructionRu:
          'Ваш друг Пауль пригласил вас в воскресенье на шашлыки (гриль) к себе в сад. Напишите Паулю SMS (20–30 слов). Напишите что-нибудь по каждому из трёх пунктов.',
        situationDe: 'SMS von Paul: „Hallo! Am Sonntag grillen wir bei mir im Garten. Kommst du auch?“',
        points: [
          'Bedanken Sie sich für die Einladung und sagen Sie zu.',
          'Fragen Sie, was Sie mitbringen können.',
          'Fragen Sie, ob Ihr Bruder auch mitkommen darf.',
        ],
        minWords: 20,
        register: 'informell',
        minutes: 10,
        maxPoints: 40,
      },
      {
        teil: 2,
        instructionDe:
          'Sie haben sich bei der Volkshochschule für einen Computerkurs angemeldet. Die Kursleiterin ist Frau Haas. Der Kurs beginnt am Montag, aber am ersten Tag können Sie nicht kommen. Schreiben Sie Frau Haas eine E-Mail. Schreiben Sie etwas zu allen drei Punkten. Schreiben Sie 30–40 Wörter. Vergessen Sie nicht die Anrede und den Gruß.',
        instructionRu:
          'Вы записались на компьютерный курс в народном университете (Volkshochschule). Руководитель курса — фрау Хаас. Курс начинается в понедельник, но в первый день вы прийти не можете. Напишите фрау Хаас письмо (30–40 слов) по всем трём пунктам. Не забудьте обращение и приветствие в конце. Стиль — официальный (Sie).',
        situationDe: 'Computerkurs für Anfänger, Volkshochschule, Kursleiterin: Frau Haas. Beginn: Montag, 18 Uhr.',
        points: [
          'Entschuldigen Sie sich und schreiben Sie, warum Sie am Montag nicht kommen können.',
          'Fragen Sie, was Sie für den Kurs brauchen.',
          'Fragen Sie, ob Sie die Unterlagen vom ersten Tag bekommen können.',
        ],
        minWords: 30,
        register: 'formell',
        minutes: 20,
        maxPoints: 60,
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
          'Fragen zur Person. Sie bekommen Karten mit Wörtern. Stellen Sie mit jedem Wort eine Frage an Ihre Gesprächspartnerin / Ihren Gesprächspartner und beantworten Sie auch ihre / seine Fragen.',
        instructionRu:
          'Вопросы о себе. У вас карточки со словами. С каждым словом задайте вопрос партнёру и отвечайте на его вопросы. Пример: «Kinder?» → «Haben Sie Kinder?»',
        situationDe: 'Karten: Heimat? · Wohnort? · Arbeit? · Kinder? · Lieblingsessen? · Urlaub?',
        points: ['Heimat?', 'Wohnort?', 'Arbeit?', 'Kinder?', 'Lieblingsessen?', 'Urlaub?'],
        aiRole:
          'Sie sind Peter, ein anderer Teilnehmer der Prüfung (Niveau A2). Sie sprechen einfach, langsam und freundlich und siezen Ihren Partner. Sie stellen abwechselnd mit Ihrem Partner Fragen zu den Karten (Heimat, Wohnort, Arbeit, Kinder, Lieblingsessen, Urlaub) und beantworten seine Fragen kurz (Peter: 52 Jahre, aus Polen, wohnt in Dresden, arbeitet als Koch, eine Tochter, Lieblingsessen Pierogi, fährt im Urlaub gern an die Ostsee). Wenn er etwas nicht versteht, sagen Sie es noch einmal mit anderen Worten.',
        opener: 'Guten Tag, ich heiße Peter. Darf ich anfangen? Meine Karte ist „Heimat“. Woher kommen Sie?',
        minutes: 4,
        maxPoints: 25,
      },
      {
        teil: 2,
        mode: 'presentation',
        instructionDe:
          'Über sich erzählen. Sie bekommen eine Karte mit einer Frage und vier Stichpunkten. Erzählen Sie etwa eine Minute über sich. Danach stellt die Prüferin Ihnen eine Frage.',
        instructionRu:
          'Рассказ о себе. Вы получаете карточку с вопросом и четырьмя пунктами. Расскажите о себе примерно одну минуту — по всем пунктам. Потом экзаменатор задаст вам вопрос.',
        situationDe: 'Thema: „Essen und Kochen – was mögen Sie?“',
        points: [
          'Was essen Sie gern?',
          'Kochen Sie selbst? Was?',
          'Was haben Sie als Kind gern gegessen?',
          'Gehen Sie gern ins Restaurant?',
        ],
        aiRole:
          'Sie sind Prüferin in einer Prüfung auf Niveau A2. Sie sprechen langsam und deutlich. Sie hören dem Teilnehmer zu und unterbrechen ihn nicht. Am Ende stellen Sie eine einfache Frage zum Thema Essen (zum Beispiel: Was essen Sie zum Frühstück?).',
        opener: 'Bitte erzählen Sie: Was essen Sie gern, und kochen Sie selbst?',
        minutes: 5,
        maxPoints: 40,
      },
      {
        teil: 3,
        mode: 'dialog',
        instructionDe:
          'Gemeinsam etwas planen. Ihre Nachbarin, Frau Albrecht, wird nächste Woche 80 Jahre alt. Sie möchten am Freitag zusammen ein Geschenk für sie kaufen. Finden Sie eine Zeit, wann Sie beide Zeit haben.',
        instructionRu:
          'Совместное планирование. Вашей соседке, фрау Альбрехт, на следующей неделе исполняется 80 лет. В пятницу вы хотите вместе купить ей подарок. Сравните ваши планы и найдите время, когда вы оба свободны. Договоритесь также, где встретиться, что купить и сколько потратить.',
        situationDe:
          'Ihr Kalender am Freitag: 8.00–9.30 Arzttermin · 10.00–12.00 Deutschkurs · 12.30 Mittagessen mit Tom · 14.00–15.00 frei · 15.00–16.30 Fußball mit dem Enkel · 17.00–18.30 frei · 19.00 Gäste zum Abendessen',
        points: ['Wann?', 'Wo treffen Sie sich?', 'Was für ein Geschenk?', 'Wie viel Geld?'],
        aiRole:
          'Sie sind ein Nachbar / eine Nachbarin des Teilnehmers und duzen ihn. Sie sprechen einfach (Niveau A2). Sie möchten zusammen ein Geschenk für Frau Albrecht (80) kaufen. Ihr Kalender am Freitag: 8.00–10.00 frei; 10.00–15.00 Arbeit; 15.30 Zahnarzt (bis 16.30); 17.00–18.30 frei; ab 19.00 Kino mit Freunden. Die einzige gute gemeinsame Zeit ist 17.00–18.30 (9.30–10.00 ist zu kurz). Machen Sie Vorschläge, sagen Sie, wann Sie nicht können und warum, und reagieren Sie auf die Vorschläge des Partners. Sprechen Sie auch über das Geschenk (z. B. Blumen, ein Buch, ein Fotoalbum, Pralinen), den Treffpunkt und wie viel Geld jeder bezahlt.',
        opener: 'Hallo! Du, Frau Albrecht wird ja nächste Woche 80. Wollen wir am Freitag zusammen ein Geschenk kaufen? Wann hast du Zeit?',
        minutes: 6,
        maxPoints: 35,
      },
    ],
  },
};
