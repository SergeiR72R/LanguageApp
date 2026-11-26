import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.',
      options: ['weil', 'denn', 'deshalb', 'trotzdem'],
      answer: 0,
      explanationRu: 'Спрягаемый глагол möchte стоит в конце — значит, это придаточное предложение. Из вариантов только weil вводит придаточное.',
    },
    {
      type: 'choice',
      prompt: 'Mein Kollege ist krank, ___ muss ich heute länger arbeiten.',
      options: ['deshalb', 'trotzdem', 'weil', 'denn'],
      answer: 0,
      explanationRu: 'После пропуска сразу идёт глагол muss → нужна связка на 1-м месте. Коллега болен → поэтому я работаю дольше: deshalb.',
    },
    {
      type: 'choice',
      prompt: 'Der Film war langweilig, ___ haben wir ihn bis zum Ende gesehen.',
      options: ['trotzdem', 'deshalb', 'denn', 'weil'],
      answer: 0,
      explanationRu: 'Фильм был скучным, но мы всё равно досмотрели — противоречие → trotzdem. Глагол haben идёт сразу после связки.',
    },
    {
      type: 'choice',
      prompt: '– Kannst du mir sagen, ___ der Zug nach Köln abfährt? – Um 10:15 Uhr.',
      options: ['wann', 'ob', 'dass', 'wo'],
      answer: 0,
      explanationRu: 'Ответ — время (um 10:15 Uhr), значит, вопрос «когда?»: косвенный вопрос с wann, глагол abfährt в конце.',
    },
    {
      type: 'choice',
      prompt: '___ ich morgen Zeit habe, helfe ich dir beim Umzug.',
      options: ['Wenn', 'Ob', 'Dass', 'Denn'],
      answer: 0,
      explanationRu: '«Если у меня завтра будет время, я помогу тебе» — условие → wenn. Придаточное стоит первым, поэтому главное начинается с глагола helfe.',
    },
    {
      type: 'choice',
      audio: 'Ich habe die Prüfung bestanden!',
      prompt: 'Что случилось?',
      options: ['Человек сдал экзамен.', 'Человек не сдал экзамен.', 'Человек записался на экзамен.'],
      answer: 0,
      explanationRu: '«bestanden» — Partizip II от bestehen: «я сдал экзамен».',
    },
    {
      type: 'choice',
      prompt: 'Letztes Jahr ___ wir keine Zeit für Urlaub.',
      options: ['hatten', 'haben', 'hätten', 'hattet'],
      answer: 0,
      explanationRu: 'Прошлое (letztes Jahr) → претерит от haben. С wir — hatten. «hätten» — это «имели бы» (Konjunktiv II).',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ gestern lange im Büro bleiben.',
      options: ['musste', 'muss', 'müsste', 'habe gemusst'],
      answer: 0,
      explanationRu: 'Модальный глагол в прошлом (gestern) → претерит: ich musste. Перфект «habe … bleiben müssen» возможен, но «habe gemusst» с инфинитивом неправилен.',
    },
    {
      type: 'choice',
      prompt: 'Mit dem ___ Fahrrad fahre ich jeden Tag zur Arbeit.',
      options: ['neuen', 'neue', 'neues', 'neuer'],
      answer: 0,
      explanationRu: 'mit + Dativ: mit dem … Fahrrad. После dem окончание прилагательного всегда -en: mit dem neuen Fahrrad.',
    },
    {
      type: 'choice',
      prompt: 'Sie trägt heute einen ___ Mantel.',
      options: ['schwarzen', 'schwarzer', 'schwarze', 'schwarzes'],
      answer: 0,
      explanationRu: 'der Mantel — мужской род, Akkusativ (trägt что?): einen schwarzen Mantel. В Akkusativ мужского рода окончание -en.',
    },
    {
      type: 'gap',
      prompt: 'Wir ___ gestern ins Kino gegangen.',
      answers: ['sind'],
      explanationRu: 'gehen — глагол движения, перфект образуется с sein: wir sind gegangen.',
    },
    {
      type: 'gap',
      prompt: 'Hast du schon die Hausaufgaben ___?',
      answers: ['gemacht'],
      hintRu: 'machen',
      explanationRu: 'Перфект: hast + Partizip II. machen — правильный глагол: ge-mach-t.',
    },
    {
      type: 'gap',
      audio: 'Könnten Sie mir bitte helfen?',
      prompt: 'Повторение (вежливая просьба). Послушайте и вставьте: ___ Sie mir bitte helfen?',
      answers: ['Könnten'],
      explanationRu: 'Вежливая просьба с Konjunktiv II: Könnten Sie …? — «Не могли бы вы…?» (юнит 13).',
    },
    {
      type: 'gap',
      audio: 'Ich bin müde, trotzdem gehe ich heute joggen.',
      prompt: 'Послушайте и вставьте связку: Ich bin müde, ___ gehe ich heute joggen.',
      answers: ['trotzdem'],
      explanationRu: 'Вы слышите trotzdem — «всё равно». Я устал, но всё равно иду бегать: глагол gehe стоит сразу после связки.',
    },
    {
      type: 'gap',
      prompt: 'Er sagt, dass er nächste Woche Urlaub ___.',
      answers: ['hat', 'macht', 'nimmt'],
      hintRu: 'haben',
      explanationRu: 'После dass спрягаемый глагол стоит в самом конце: dass er … Urlaub hat.',
    },
    {
      type: 'order',
      words: ['Ich', 'weiß', 'nicht,', 'wann', 'die Prüfung', 'beginnt.'],
      translationRu: 'Я не знаю, когда начинается экзамен.',
      explanationRu: 'Косвенный вопрос с wann — это придаточное: глагол beginnt стоит в самом конце.',
    },
    {
      type: 'order',
      words: ['Wenn', 'du', 'Zeit', 'hast,', 'kannst', 'du', 'mich', 'besuchen.'],
      translationRu: 'Если у тебя есть время, ты можешь меня навестить.',
      explanationRu: 'В придаточном с wenn глагол hast в конце. Главное предложение начинается с глагола kannst, инфинитив besuchen — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью deshalb.',
      prompt: 'Es regnet. Wir bleiben zu Hause.',
      answers: ['Es regnet, deshalb bleiben wir zu Hause.', 'Es regnet. Deshalb bleiben wir zu Hause.'],
      explanationRu: 'deshalb занимает 1-е место во второй части, поэтому сразу после него идёт глагол bleiben, а потом подлежащее wir.',
    },
    {
      type: 'choice',
      prompt: 'Wiederholung (Komparativ): Berlin ist größer ___ München.',
      options: ['als', 'wie', 'so', 'dann'],
      answer: 0,
      explanationRu: 'Повторение (юнит 8): после сравнительной степени (größer) используется als. wie — при равенстве: so groß wie.',
    },
    {
      type: 'choice',
      prompt: 'Wiederholung (Wohin?): Ich stelle die Vase auf ___ Tisch.',
      options: ['den', 'dem', 'der', 'des'],
      answer: 0,
      explanationRu: 'Повторение (юнит 4): stellen — движение «куда?» (wohin?), поэтому после auf Akkusativ: auf den Tisch.',
    },
  ],
  reading: [
    {
      title: 'Lesen Teil 1: Der Bücherbus ist zurück',
      textType: 'Zeitungsartikel',
      texts: [
        {
          heading: 'Der Bücherbus ist zurück',
          body: `Jeden Dienstag hält ein großer gelber Bus auf dem Marktplatz von Lindenau. Er bringt keine Fahrgäste, sondern Bücher. Seit März fährt der Bücherbus wieder durch die Dörfer im Kreis Altenberg. Zwei Jahre lang gab es ihn nicht, weil die Stadt kein Geld für einen Fahrer hatte.

„Viele Leute haben uns Briefe geschrieben“, erzählt die Bibliothekarin Monika Schaller. „Besonders ältere Menschen haben den Bus vermisst, denn in den Dörfern gibt es keine Buchhandlung und keine Bibliothek.“ Jetzt bezahlt eine Bank aus der Region den Fahrer.

Im Bus gibt es etwa 3000 Bücher, aber auch Zeitschriften, Hörbücher und Spiele für Kinder. Zum Ausleihen braucht man einen Bibliotheksausweis. Der Ausweis kostet zehn Euro im Jahr, für Kinder und Rentner ist er kostenlos. Ein besonderer Service: Man kann Bücher im Internet bestellen, und der Bus bringt sie in der nächsten Woche mit.

Der Bus hält in zwölf Dörfern, immer für eine Stunde. Den genauen Fahrplan findet man auf der Internetseite der Stadtbibliothek.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text aus der Zeitung. Wählen Sie für die Aufgaben die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте газетную статью. Выберите правильный ответ a, b или c (как в части 1 экзамена).',
          items: [
            {
              kind: 'mc',
              question: 'Der Bücherbus …',
              options: ['fährt seit zwei Jahren durch die Dörfer.', 'ist seit März wieder unterwegs.', 'bringt Fahrgäste zum Marktplatz.'],
              answer: 1,
              explanationRu: '«Seit März fährt der Bücherbus wieder» — с марта снова ездит. Два года его как раз не было, а пассажиров он не возит.',
            },
            {
              kind: 'mc',
              question: 'Warum gab es den Bus zwei Jahre lang nicht?',
              options: ['Die Stadt konnte keinen Fahrer bezahlen.', 'Der Bus war kaputt.', 'Niemand wollte die Bücher lesen.'],
              answer: 0,
              explanationRu: '«…weil die Stadt kein Geld für einen Fahrer hatte».',
            },
            {
              kind: 'mc',
              question: 'Wer bezahlt jetzt den Fahrer?',
              options: ['Die Stadt', 'Die Leute aus den Dörfern', 'Eine Bank'],
              answer: 2,
              explanationRu: '«Jetzt bezahlt eine Bank aus der Region den Fahrer.» Люди из деревень только писали письма.',
            },
            {
              kind: 'mc',
              question: 'Der Bibliotheksausweis …',
              options: ['kostet für alle zehn Euro.', 'ist für Rentner kostenlos.', 'ist nur für Kinder.'],
              answer: 1,
              explanationRu: '«…für Kinder und Rentner ist er kostenlos» — для детей и пенсионеров бесплатно, для остальных 10 евро.',
            },
            {
              kind: 'mc',
              question: 'Was kann man im Internet machen?',
              options: ['Bücher bestellen', 'Hörbücher hören', 'Einen Ausweis kaufen'],
              answer: 0,
              explanationRu: '«Man kann Bücher im Internet bestellen, und der Bus bringt sie in der nächsten Woche mit.»',
            },
          ],
        },
      ],
    },
    {
      title: 'Lesen Teil 2: Im Kaufhaus',
      textType: 'Informationstafel',
      texts: [
        {
          heading: 'Kaufhaus Brandt – Wegweiser',
          body: `4. Stock: Restaurant mit Dachterrasse · Kundenservice und Umtausch · Geschenkverpackung · Toiletten
3. Stock: Möbel · Lampen · Teppiche · Betten und Bettwäsche
2. Stock: Sport und Freizeit · Fahrräder · Spielwaren · Bücher und Schreibwaren
1. Stock: Damenmode · Herrenmode · Kindermode · Schuhe
Erdgeschoss: Kosmetik · Schmuck · Uhren · Taschen · Zeitschriften
Untergeschoss: Lebensmittel · Getränke · Haushaltswaren · Töpfe und Küchengeräte

Öffnungszeiten: Montag bis Samstag 9:30–20:00 Uhr. Aufzüge und Rolltreppen finden Sie in der Mitte des Hauses.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aufgaben und den Wegweiser. In welches Stockwerk gehen Sie? Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте ситуации и указатель. На какой этаж вы пойдёте? Выберите a, b или c. «anderer Stock» = другой этаж (как в части 2 экзамена).',
          items: [
            {
              kind: 'mc',
              question: 'Sie möchten Ihrer Nichte eine Puppe zum Geburtstag kaufen.',
              options: ['Erdgeschoss', '2. Stock', 'anderer Stock'],
              answer: 1,
              explanationRu: 'Кукла — это игрушка: Spielwaren находятся в 2. Stock. Внимание: в Германии счёт начинается с Erdgeschoss, поэтому 2. Stock — это по-русски 3-й этаж.',
            },
            {
              kind: 'mc',
              question: 'Sie brauchen einen neuen Kochtopf.',
              options: ['1. Stock', '3. Stock', 'anderer Stock'],
              answer: 2,
              explanationRu: 'Кастрюли (Töpfe und Küchengeräte) — в Untergeschoss (цокольный этаж). Его нет среди a и b, поэтому «anderer Stock».',
            },
            {
              kind: 'mc',
              question: 'Sie haben eine Hose gekauft, aber sie ist zu klein. Sie möchten sie umtauschen.',
              options: ['1. Stock', '4. Stock', 'anderer Stock'],
              answer: 1,
              explanationRu: 'Обмен товара — Kundenservice und Umtausch в 4. Stock. Ловушка: одежда (Mode) в 1. Stock, но менять вещь нужно в сервисе.',
            },
            {
              kind: 'mc',
              question: 'Sie suchen eine Uhr als Geschenk für Ihren Mann.',
              options: ['Erdgeschoss', '3. Stock', 'anderer Stock'],
              answer: 0,
              explanationRu: 'Uhren (часы) — в Erdgeschoss (по-русски это первый этаж).',
            },
            {
              kind: 'mc',
              question: 'Sie brauchen ein Wörterbuch für Ihren Deutschkurs.',
              options: ['Erdgeschoss', '2. Stock', 'anderer Stock'],
              answer: 1,
              explanationRu: 'Книги (Bücher und Schreibwaren) — в 2. Stock. В Erdgeschoss только журналы (Zeitschriften).',
            },
          ],
        },
      ],
    },
    {
      title: 'Lesen Teil 3: Eine E-Mail von Olga',
      textType: 'E-Mail',
      texts: [
        {
          heading: 'Betreff: Endlich in Leipzig!',
          body: `Lieber Sven,

entschuldige, dass ich so lange nicht geschrieben habe. Die letzten Wochen waren sehr stressig. Wie du weißt, habe ich im Oktober eine neue Stelle in einem Hotel in Leipzig angefangen. Die Arbeit an der Rezeption gefällt mir sehr gut, und meine Kollegen sind nett. Nur die Arbeitszeiten sind nicht so toll: Oft muss ich am Wochenende arbeiten.

Eine Wohnung habe ich auch schon gefunden. Sie ist nicht groß, aber hell und ruhig, und ich kann mit dem Fahrrad zur Arbeit fahren. Am 15. November mache ich eine kleine Party in meiner neuen Wohnung. Ich würde mich sehr freuen, wenn du kommst! Du kannst gern bei mir übernachten, ich habe ein Gästebett.

Kannst du vielleicht deine Gitarre mitbringen? Dann können wir wie früher zusammen singen.

Bitte schreib mir bis Ende Oktober, ob du kommen kannst.

Viele Grüße
Olga`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie für die Aufgaben die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте письмо. Выберите правильный ответ a, b или c (как в части 3 экзамена).',
          items: [
            {
              kind: 'mc',
              question: 'Warum hat Olga lange nicht geschrieben?',
              options: ['Sie war krank.', 'Sie hatte viel Stress.', 'Sie war im Urlaub.'],
              answer: 1,
              explanationRu: '«Die letzten Wochen waren sehr stressig» — последние недели были напряжёнными.',
            },
            {
              kind: 'mc',
              question: 'Was gefällt Olga an ihrer neuen Stelle nicht?',
              options: ['Die Kollegen', 'Die Arbeit an der Rezeption', 'Die Arbeitszeiten'],
              answer: 2,
              explanationRu: '«Nur die Arbeitszeiten sind nicht so toll: Oft muss ich am Wochenende arbeiten.» Работа и коллеги ей нравятся.',
            },
            {
              kind: 'mc',
              question: 'Olgas neue Wohnung …',
              options: ['ist groß und hell.', 'ist nicht weit von ihrer Arbeit.', 'hat keinen Platz für Gäste.'],
              answer: 1,
              explanationRu: 'Она может ездить на работу на велосипеде — значит, недалеко. Квартира не большая, а для гостя есть кровать (Gästebett).',
            },
            {
              kind: 'mc',
              question: 'Was soll Sven mitbringen?',
              options: ['Ein Gästebett', 'Seine Gitarre', 'Etwas zu essen'],
              answer: 1,
              explanationRu: '«Kannst du vielleicht deine Gitarre mitbringen?»',
            },
            {
              kind: 'mc',
              question: 'Bis wann soll Sven antworten?',
              options: ['Bis Ende Oktober', 'Bis zum 15. November', 'Bis zum Wochenende'],
              answer: 0,
              explanationRu: '«Bitte schreib mir bis Ende Oktober, ob du kommen kannst.» 15 ноября — это дата вечеринки.',
            },
          ],
        },
      ],
    },
    {
      title: 'Lesen Teil 4: Anzeigen',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Deutsch am Abend',
          body: 'Deutschkurs A2 für Berufstätige: Montag und Mittwoch, 18:30–20:00 Uhr, Volkshochschule Mitte. Kursbeginn: 3. März. Anmeldung online oder im Büro.',
        },
        {
          label: 'b',
          heading: 'Fahrrad-Werkstatt Speiche',
          body: 'Ihr Fahrrad ist kaputt? Wir reparieren es schnell und günstig, oft noch am selben Tag. Gebrauchte Räder ab 80 €. Mo–Sa 9–18 Uhr.',
        },
        {
          label: 'c',
          heading: 'Schwimmen für Erwachsene',
          body: 'Sie können nicht schwimmen? Kein Problem! Kleine Gruppen, nur für Erwachsene, mit viel Geduld. Hallenbad Nord, samstags um 8 Uhr.',
        },
        {
          label: 'd',
          heading: 'Babysitter gesucht',
          body: 'Familie mit zwei Kindern (3 und 6 Jahre) sucht eine freundliche Person für zwei Abende pro Woche. 12 € pro Stunde.',
        },
        {
          label: 'e',
          heading: 'Kochen wie in Italien',
          body: 'Pizza, Pasta und Tiramisu: Kochkurs an vier Freitagabenden. Wir kochen zusammen und essen danach gemeinsam. 120 € mit Lebensmitteln.',
        },
        {
          label: 'f',
          heading: 'Umzugshilfe Kraft',
          body: 'Zwei starke Männer und ein großes Auto: Wir helfen Ihnen beim Umzug, auch am Wochenende. Rufen Sie uns an!',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Sechs Personen suchen Hilfe oder ein Angebot. Lesen Sie die Situationen 1–6 und die Anzeigen a–f. Welche Anzeige passt zu welcher Person? Für eine Situation gibt es keine passende Anzeige. Dann wählen Sie „0“ (keine Lösung).',
          instructionRu:
            'Шесть человек ищут помощь или предложение. Прочитайте ситуации 1–6 и объявления a–f. Какое объявление подходит какому человеку? Для одной ситуации подходящего объявления нет — тогда выберите «0 / нет решения» (как в части 4 экзамена).',
          options: ['Deutsch am Abend', 'Fahrrad-Werkstatt Speiche', 'Schwimmen für Erwachsene', 'Babysitter gesucht', 'Kochen wie in Italien', 'Umzugshilfe Kraft'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihr Nachbar arbeitet tagsüber und möchte abends sein Deutsch verbessern.', answer: 0, explanationRu: 'a: курс A2 для работающих, по вечерам в 18:30.' },
            { kind: 'match', prompt: 'Ihre Freundin ist 40 Jahre alt und möchte endlich schwimmen lernen.', answer: 2, explanationRu: 'c: плавание для взрослых, которые не умеют плавать.' },
            { kind: 'match', prompt: 'Sie möchten gern lernen, wie man chinesisch kocht.', answer: -1, explanationRu: 'Нет решения: курс e — итальянская кухня, а не китайская.' },
            { kind: 'match', prompt: 'Sie ziehen nächsten Monat um und haben kein Auto.', answer: 5, explanationRu: 'f: помощь при переезде, есть большая машина.' },
            { kind: 'match', prompt: 'Ihr Sohn ist Student und sucht einen Job am Abend. Er mag Kinder.', answer: 3, explanationRu: 'd: семья ищет няню на два вечера в неделю.' },
            { kind: 'match', prompt: 'Die Bremse an Ihrem Fahrrad funktioniert nicht mehr.', answer: 1, explanationRu: 'b: мастерская ремонтирует велосипеды быстро и недорого.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Hören Teil 1: Eine Nachricht von der Arztpraxis',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Guten Tag, Herr Novak, hier ist die Praxis Dr. Krämer. Sie haben morgen um zehn Uhr einen Termin bei uns. Leider ist Frau Doktor Krämer morgen krank. Wir können Ihnen einen neuen Termin am Donnerstag um halb neun oder am Freitag um vierzehn Uhr geben. Bitte rufen Sie uns heute noch an und sagen Sie uns, welcher Termin Ihnen besser passt. Bringen Sie bitte auch Ihre Krankenkassenkarte mit, wir brauchen sie noch. Vielen Dank und auf Wiederhören!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören einen Text. Wählen Sie für die Aufgaben die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите текст. Выберите правильный ответ a, b или c (как в части 1 аудирования).',
          items: [
            { kind: 'mc', question: 'Warum kann Herr Novak morgen nicht zum Arzt?', options: ['Er ist krank.', 'Die Ärztin ist krank.', 'Die Praxis macht Urlaub.'], answer: 1, explanationRu: '«Leider ist Frau Doktor Krämer morgen krank» — больна врач, а не Herr Novak.' },
            { kind: 'mc', question: 'Welche neuen Termine gibt es?', options: ['Donnerstag 8:30 Uhr oder Freitag 14 Uhr', 'Donnerstag 10 Uhr oder Freitag 8:30 Uhr', 'Mittwoch 14 Uhr oder Freitag 10 Uhr'], answer: 0, explanationRu: '«am Donnerstag um halb neun oder am Freitag um vierzehn Uhr». Помните: halb neun = 8:30!' },
            { kind: 'mc', question: 'Was soll Herr Novak mitbringen?', options: ['Ein Rezept', 'Seinen Ausweis', 'Seine Krankenkassenkarte'], answer: 2, explanationRu: '«Bringen Sie bitte auch Ihre Krankenkassenkarte mit».' },
          ],
        },
      ],
    },
    {
      title: 'Hören Teil 1: Durchsage im Kaufhaus',
      kind: 'monolog',
      situation: 'Sie hören eine Durchsage im Kaufhaus.',
      text: 'Liebe Kundinnen und Kunden, nur heute bis 20 Uhr: In unserer Sportabteilung im zweiten Stock bekommen Sie alle Fahrradhelme und Sportschuhe zwanzig Prozent billiger. Und im Untergeschoss gibt es frisches Brot vom Bäcker Lange: zwei Brote zum Preis von einem. Bitte beachten Sie: Unser Restaurant im vierten Stock ist heute wegen einer Feier geschlossen. Kaffee und Kuchen bekommen Sie aber im Café im Erdgeschoss. Vielen Dank für Ihren Einkauf!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören einen Text. Wählen Sie für die Aufgaben die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите объявление. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was ist heute in der Sportabteilung billiger?', options: ['Fahrräder und Sportkleidung', 'Fahrradhelme und Sportschuhe', 'Alle Sportsachen'], answer: 1, explanationRu: '«alle Fahrradhelme und Sportschuhe zwanzig Prozent billiger» — только шлемы и кроссовки.' },
            { kind: 'mc', question: 'Wo kann man heute Kaffee trinken?', options: ['Im Café im Erdgeschoss', 'Im Restaurant im vierten Stock', 'Beim Bäcker im Untergeschoss'], answer: 0, explanationRu: 'Ресторан сегодня закрыт, а кофе и пирог есть «im Café im Erdgeschoss».' },
          ],
        },
      ],
    },
    {
      title: 'Hören Teil 2: Lenas Woche',
      kind: 'dialog',
      speakers: { A: 'Mark', B: 'Lena' },
      situation: 'Sie hören ein Gespräch. Was macht Lena an welchem Tag?',
      text: `A: Lena, hast du nächste Woche mal Zeit? Wir könnten zusammen ins Kino gehen.
B: Hm, nächste Woche ist schwierig. Am Montag habe ich nach der Arbeit meinen Yogakurs.
A: Und am Dienstag?
B: Am Dienstag kommt meine Mutter. Ich hole sie am Bahnhof ab, und sie bleibt bis Donnerstag.
A: Ach so. Was macht ihr dann zusammen?
B: Am Mittwoch gehen wir einkaufen, sie braucht einen neuen Wintermantel. Am Donnerstagmorgen fährt sie zurück, und am Nachmittag habe ich einen Termin beim Zahnarzt.
A: Oje. Und am Freitag?
B: Am Freitag feiert mein Kollege seinen Geburtstag im Restaurant. Da muss ich hin.
A: Und am Wochenende?
B: Samstag geht. Wie wäre es mit Samstagabend?
A: Super, dann gehen wir am Samstag ins Kino!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Was macht Lena an welchem Tag? Wählen Sie für jeden Tag die richtige Aktivität. Sie können jede Aktivität nur einmal wählen.',
          instructionRu: 'Что Лена делает в какой день? Выберите для каждого дня правильное занятие. Каждое занятие можно выбрать только один раз (как в части 2 аудирования). Лишние варианты не подходят ни к одному дню.',
          options: ['ins Kino gehen', 'Kleidung kaufen', 'zum Zahnarzt gehen', 'länger arbeiten', 'Sport machen', 'Geburtstag feiern', 'jemanden vom Bahnhof abholen', 'Freunde besuchen'],
          items: [
            { kind: 'match', prompt: 'Montag', answer: 4, explanationRu: '«Am Montag habe ich nach der Arbeit meinen Yogakurs» — йога = спорт.' },
            { kind: 'match', prompt: 'Dienstag', answer: 6, explanationRu: '«Am Dienstag kommt meine Mutter. Ich hole sie am Bahnhof ab.»' },
            { kind: 'match', prompt: 'Mittwoch', answer: 1, explanationRu: '«Am Mittwoch gehen wir einkaufen, sie braucht einen neuen Wintermantel» — покупают одежду.' },
            { kind: 'match', prompt: 'Donnerstag', answer: 2, explanationRu: '«…am Nachmittag habe ich einen Termin beim Zahnarzt».' },
            { kind: 'match', prompt: 'Freitag', answer: 5, explanationRu: '«Am Freitag feiert mein Kollege seinen Geburtstag im Restaurant.» В кино они пойдут только в субботу.' },
          ],
        },
      ],
    },
    {
      title: 'Hören Teil 3: In der Bäckerei',
      kind: 'dialog',
      speakers: { A: 'Kundin', B: 'Verkäufer' },
      situation: 'Sie hören ein kurzes Gespräch in einer Bäckerei.',
      text: `A: Guten Tag, ich hätte gern zwei Brötchen und ein Vollkornbrot.
B: Das Vollkornbrot ist leider schon ausverkauft. Wir haben noch Roggenbrot oder Sonnenblumenbrot.
A: Hm, dann nehme ich das Sonnenblumenbrot. Und haben Sie noch Apfelkuchen?
B: Ja, ganz frisch. Wie viele Stücke möchten Sie?
A: Drei Stück, bitte. Was macht das zusammen?
B: Das macht neun Euro zwanzig.
A: Hier sind zehn Euro. Stimmt so!
B: Vielen Dank! Schönen Tag noch!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören ein Gespräch. Wählen Sie für die Aufgaben die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите короткий диалог. Выберите правильный ответ a, b или c (как в части 3 аудирования).',
          items: [
            { kind: 'mc', question: 'Welches Brot kauft die Frau?', options: ['Vollkornbrot', 'Roggenbrot', 'Sonnenblumenbrot'], answer: 2, explanationRu: 'Vollkornbrot уже распродан (ausverkauft), поэтому она берёт Sonnenblumenbrot.' },
            { kind: 'mc', question: 'Wie viel kostet der Einkauf?', options: ['9,20 €', '10,00 €', '3,00 €'], answer: 0, explanationRu: '«Das macht neun Euro zwanzig». Она даёт 10 евро и говорит «Stimmt so» — сдачи не надо (чаевые).' },
          ],
        },
      ],
    },
    {
      title: 'Hören Teil 3: Vor dem Kino',
      kind: 'dialog',
      speakers: { A: 'Sarah', B: 'Tim' },
      situation: 'Sie hören ein kurzes Telefongespräch.',
      text: `A: Hallo Tim, ich stehe hier vor dem Kino. Wo bist du denn?
B: Oh, tut mir leid, Sarah! Mein Bus hatte Verspätung. Ich bin in zehn Minuten da.
A: Der Film beginnt aber schon in fünf Minuten.
B: Dann geh doch schon rein. Hast du die Karten?
A: Nein, die Karten hast du doch auf deinem Handy!
B: Ach ja, stimmt. Dann warte bitte am Eingang. Ich beeile mich.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören ein Gespräch. Wählen Sie für die Aufgaben die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите короткий телефонный разговор. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Warum kommt Tim zu spät?', options: ['Er hat den Film vergessen.', 'Sein Bus war zu spät.', 'Er hat keine Karten.'], answer: 1, explanationRu: '«Mein Bus hatte Verspätung» — автобус опоздал.' },
            { kind: 'mc', question: 'Was soll Sarah machen?', options: ['Am Eingang warten', 'Schon ins Kino gehen', 'Neue Karten kaufen'], answer: 0, explanationRu: 'Билеты у Тима в телефоне, поэтому: «Dann warte bitte am Eingang».' },
          ],
        },
      ],
    },
    {
      title: 'Hören Teil 4: Ein Interview im Radio',
      kind: 'dialog',
      speakers: { A: 'Moderatorin', B: 'Herr Petrov' },
      situation: 'Sie hören ein Interview im Radio.',
      text: `A: Herzlich willkommen in unserer Sendung „Neu in der Stadt“. Heute ist Herr Petrov bei uns. Herr Petrov, Sie sind 61 Jahre alt und haben gerade die A2-Prüfung gemacht.
B: Ja, genau. Und ich habe bestanden! Ich bin sehr stolz.
A: Herzlichen Glückwunsch! Wann sind Sie nach Deutschland gekommen?
B: Vor zwei Jahren. Meine Tochter wohnt hier mit ihrer Familie. Am Anfang konnte ich nur „Hallo“ und „Danke“ sagen.
A: Wie haben Sie gelernt?
B: Ich habe einen Kurs an der Volkshochschule besucht. Und ich habe jeden Tag mit meinem Enkel Deutsch gesprochen. Er ist sieben und korrigiert mich immer!
A: Was war in der Prüfung am schwierigsten?
B: Das Hören. Die Leute sprechen oft so schnell. Das Sprechen war leichter, weil meine Partnerin sehr nett war.
A: Und was sind jetzt Ihre Pläne?
B: Ich werde weiterlernen. Nächstes Jahr möchte ich die B1-Prüfung machen.
A: Vielen Dank, Herr Petrov, und viel Erfolg!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören ein Interview. Wählen Sie für die Aussagen Ja oder Nein.',
          instructionRu: 'Вы слышите интервью. Выберите для каждого утверждения «Ja» (да) или «Nein» (нет) — как в части 4 аудирования.',
          tfLabels: ['Ja', 'Nein'],
          items: [
            { kind: 'tf', statement: 'Herr Petrov hat die A2-Prüfung bestanden.', answer: true, explanationRu: '«Und ich habe bestanden! Ich bin sehr stolz.»' },
            { kind: 'tf', statement: 'Herr Petrov ist vor fünf Jahren nach Deutschland gekommen.', answer: false, explanationRu: '«Vor zwei Jahren» — два года назад, а не пять.' },
            { kind: 'tf', statement: 'Sein Enkel hilft ihm beim Deutschlernen.', answer: true, explanationRu: 'Он каждый день говорит с внуком по-немецки, и внук его поправляет.' },
            { kind: 'tf', statement: 'Das Sprechen war für ihn am schwierigsten.', answer: false, explanationRu: 'Самым трудным было аудирование (das Hören). Говорение было легче.' },
            { kind: 'tf', statement: 'Herr Petrov möchte noch eine Prüfung machen.', answer: true, explanationRu: '«Nächstes Jahr möchte ich die B1-Prüfung machen.»' },
          ],
        },
      ],
    },
  ],
};
