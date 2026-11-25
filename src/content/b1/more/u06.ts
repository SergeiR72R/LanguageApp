import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Die Lederjacke gefällt mir, aber sie ist mir zu ___.',
      options: ['teuer', 'teure', 'teurer', 'teuren'],
      answer: 0,
      explanationRu: 'Прилагательное после глагола (ist … zu teuer) не склоняется — никакого окончания.',
    },
    {
      type: 'choice',
      prompt: 'Wie findest du das ___ Kleid im Schaufenster?',
      options: ['grüne', 'grünen', 'grünes', 'grüner'],
      answer: 0,
      explanationRu: 'das Kleid — Akkusativ среднего рода после определённого артикля. Сигнал уже в das, поэтому -e: das grüne Kleid.',
    },
    {
      type: 'choice',
      prompt: 'Hast du schon ein ___ Geschenk für Oma gefunden?',
      options: ['schöne', 'schönen', 'schönes', 'schöner'],
      answer: 2,
      explanationRu: 'ein Geschenk (das), Akkusativ: у ein нет сигнала среднего рода, поэтому его берёт прилагательное → ein schönes Geschenk.',
    },
    {
      type: 'choice',
      prompt: 'Bei diesem ___ Wetter gehe ich nicht in die Stadt.',
      options: ['schlechte', 'schlechten', 'schlechtes', 'schlechtem'],
      answer: 1,
      explanationRu: 'bei + Dativ; dieser склоняется как определённый артикль (diesem — сигнал -m), поэтому у прилагательного -en.',
    },
    {
      type: 'choice',
      prompt: 'Auf dem Wochenmarkt kaufe ich gern ___ Gemüse aus der Region.',
      options: ['frischen', 'frische', 'frischem', 'frisches'],
      answer: 3,
      explanationRu: 'Без артикля прилагательное получает окончание артикля: das Gemüse → Akkusativ das → frisches.',
    },
    {
      type: 'choice',
      prompt: 'Viele ___ Leute bestellen ihre Kleidung nur noch online.',
      options: ['jungen', 'junge', 'junges', 'junger'],
      answer: 1,
      explanationRu: 'Ловушка: viele, einige, mehrere, zwei — это не артикли. Прилагательное склоняется как без артикля: viele junge Leute (но: alle jungen Leute).',
    },
    {
      type: 'gap',
      prompt: 'Haben Sie diese Bluse auch in einer ___ Farbe?',
      answers: ['anderen'],
      hintRu: 'ander-',
      explanationRu: 'in + Dativ: einer Farbe (die). Сигнал -r уже в артикле einer, поэтому прилагательное получает -en.',
    },
    {
      type: 'gap',
      prompt: 'Wir suchen einen ___ Kühlschrank, er darf nicht zu teuer sein.',
      answers: ['gebrauchten'],
      hintRu: 'gebraucht',
      explanationRu: 'einen Kühlschrank — Akkusativ мужского рода; в einen уже есть сигнал -n → gebrauchten.',
    },
    {
      type: 'gap',
      prompt: 'Mein Mann trinkt morgens am liebsten ___ Kaffee ohne Zucker.',
      answers: ['schwarzen'],
      hintRu: 'schwarz',
      explanationRu: 'Без артикля, der Kaffee в Akkusativ → окончание как у den: schwarzen.',
    },
    {
      type: 'gap',
      prompt: 'Die Tasche aus ___ Leder hat 120 Euro gekostet.',
      answers: ['echtem'],
      hintRu: 'echt',
      explanationRu: 'aus + Dativ, das Leder без артикля → окончание как у dem: echtem.',
    },
    {
      type: 'gap',
      prompt: 'Ich nehme die ___ Hose, die helle wird so schnell schmutzig.',
      answers: ['dunkle'],
      hintRu: 'dunkel',
      explanationRu: 'die Hose, Akkusativ ж. р. после die → -e. У прилагательных на -el выпадает e: dunkel → dunkle (не «dunkele»).',
    },
    {
      type: 'gap',
      prompt: 'Der Preis des ___ Fernsehers war mir leider zu hoch.',
      answers: ['neuen'],
      hintRu: 'neu',
      explanationRu: 'Genitiv: des Fernsehers. После артикля в Genitiv прилагательное всегда получает -en.',
    },
    {
      type: 'gap',
      prompt: 'Das ist der Online-Shop, ___ ich die günstigen Turnschuhe bestellt habe.',
      answers: ['in dem', 'wo', 'bei dem'],
      hintRu: 'повторение: относительное придаточное (раздел 05)',
      explanationRu: 'Повторение: относительное местоимение с предлогом — in dem / bei dem (der Shop, Dativ), в разговорной речи также wo. Обратите внимание: die günstigen Turnschuhe (мн. ч. после die → -en).',
    },
    {
      type: 'order',
      words: ['Mit', 'meinem', 'neuen', 'Handy', 'mache', 'ich', 'tolle', 'Fotos.'],
      translationRu: 'Своим новым телефоном я делаю классные фотографии.',
      explanationRu: 'mit meinem neuen Handy — Dativ после притяжательного артикля → -en; tolle Fotos — мн. ч. без артикля → -e.',
    },
    {
      type: 'order',
      words: ['Gestern', 'habe', 'ich', 'mir', 'eine', 'warme', 'Winterjacke', 'gekauft.'],
      translationRu: 'Вчера я купил(а) себе тёплую зимнюю куртку.',
      explanationRu: 'Повторение Perfekt: habe … gekauft (рамка). eine warme Winterjacke — Akkusativ ж. р. → -e.',
    },
    {
      type: 'order',
      words: ['Ich', 'kaufe', 'dort', 'nicht', 'mehr,', 'weil', 'die', 'neuen', 'Preise', 'zu', 'hoch', 'sind.'],
      translationRu: 'Я там больше не покупаю, потому что новые цены слишком высокие.',
      explanationRu: 'Повторение: в придаточном с weil глагол в конце (sind). die neuen Preise — мн. ч. после die → -en; hoch после глагола без окончания.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените неопределённые артикли на определённые.',
      prompt: 'Ich habe einen günstigen Laptop und ein neues Handy gekauft.',
      answers: ['Ich habe den günstigen Laptop und das neue Handy gekauft.'],
      explanationRu: 'den günstigen Laptop — окончание не меняется (-en); ein neues → das neue: сигнал -s переходит в артикль, прилагательному остаётся -e.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте предложение во множественное число.',
      prompt: 'Der teure Mantel ist ausverkauft.',
      answers: ['Die teuren Mäntel sind ausverkauft.'],
      explanationRu: 'Во множественном числе после die прилагательное всегда на -en: die teuren Mäntel. Глагол тоже меняется: sind. ausverkauft после глагола без окончания.',
    },
    {
      type: 'transform',
      instructionRu: 'Объедините два предложения в одно: прилагательное станет определением.',
      prompt: 'Die Kaffeemaschine ist kaputt. Ich bringe die Kaffeemaschine zurück.',
      answers: ['Ich bringe die kaputte Kaffeemaschine zurück.'],
      explanationRu: 'Перед существительным прилагательное получает окончание: die Kaffeemaschine, Akkusativ ж. р. → die kaputte Kaffeemaschine.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените alle на viele. Обратите внимание на окончание прилагательного.',
      prompt: 'Alle günstigen Angebote waren schnell weg.',
      answers: ['Viele günstige Angebote waren schnell weg.'],
      explanationRu: 'После alle прилагательное склоняется как после определённого артикля (-en), после viele — как без артикля (-e): viele günstige Angebote.',
    },
  ],
  reading: [
    {
      title: 'Mein Monat ohne Shopping',
      textType: 'Blogbeitrag',
      texts: [
        {
          heading: 'Mein Monat ohne Shopping – ein ehrlicher Bericht',
          body: `Hallo zusammen! Vor sechs Wochen habe ich hier geschrieben, dass ich einen ganzen Monat lang nichts Neues kaufen will – außer Lebensmitteln und Medikamenten natürlich. Viele von euch haben gefragt, wie das Experiment gelaufen ist. Hier ist mein ehrlicher Bericht.

Die erste Woche war leichter, als ich gedacht hatte. Ich habe einfach keine Online-Shops mehr geöffnet und die Newsletter mit den tollen Sonderangeboten sofort gelöscht. Schwierig wurde es in der zweiten Woche: Meine alte Winterjacke hatte plötzlich ein großes Loch, und draußen war es schon richtig kalt. Früher hätte ich sofort eine neue Jacke bestellt. Diesmal habe ich sie zu einer kleinen Schneiderei in meiner Straße gebracht. Die Reparatur hat nur 15 Euro gekostet, und die Jacke sieht fast wie neu aus.

In der dritten Woche hatte meine beste Freundin Geburtstag. Statt eines teuren Geschenks habe ich ihr einen selbst gebackenen Kuchen und einen Gutschein für ein gemeinsames Abendessen bei mir geschenkt. Sie hat sich riesig gefreut!

Am Ende des Monats habe ich nachgerechnet: Ich habe ungefähr 200 Euro weniger ausgegeben als sonst. Das Geld habe ich auf mein Sparkonto überwiesen. Noch wichtiger finde ich aber, dass ich jetzt viel bewusster einkaufe. Bevor ich etwas in den Warenkorb lege, frage ich mich: Brauche ich das wirklich?

Werde ich das Experiment wiederholen? Vielleicht, aber nicht ganz so streng. Gebrauchte Kleidung vom Flohmarkt finde ich inzwischen übrigens genauso schön wie neue Sachen aus dem Geschäft.

Eure Mira`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Mira hat während des Experiments auch keine Lebensmittel gekauft.',
              answer: false,
              explanationRu: 'Неверно: «nichts Neues kaufen … – außer Lebensmitteln und Medikamenten». Продукты покупать было можно.',
            },
            {
              kind: 'tf',
              statement: 'In der ersten Woche hatte Mira große Probleme.',
              answer: false,
              explanationRu: 'Неверно: «Die erste Woche war leichter, als ich gedacht hatte». Трудно стало только во вторую неделю.',
            },
            {
              kind: 'tf',
              statement: 'Mira hat ihre kaputte Jacke reparieren lassen.',
              answer: true,
              explanationRu: 'Верно: она отнесла куртку в маленькое ателье, ремонт стоил 15 евро.',
            },
            {
              kind: 'tf',
              statement: 'Ihre Freundin hat zum Geburtstag ein Geschenk aus dem Geschäft bekommen.',
              answer: false,
              explanationRu: 'Неверно: вместо дорогого подарка Мира подарила домашний торт и приглашение на ужин.',
            },
            {
              kind: 'tf',
              statement: 'Am Ende des Monats hatte Mira mehr Geld als sonst übrig.',
              answer: true,
              explanationRu: 'Верно: «Ich habe ungefähr 200 Euro weniger ausgegeben als sonst» — деньги она перевела на сберегательный счёт.',
            },
            {
              kind: 'tf',
              statement: 'Mira gefällt gebrauchte Kleidung heute gut.',
              answer: true,
              explanationRu: 'Верно: «Gebrauchte Kleidung vom Flohmarkt finde ich inzwischen … genauso schön wie neue Sachen».',
            },
          ],
        },
      ],
    },
    {
      title: 'Kleinanzeigen: Kaufen, tauschen, reparieren',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Kinderbasar im Gemeindehaus',
          body: 'Samstag, 10–14 Uhr: gut erhaltene Kinderkleidung, Spielzeug, Kinderwagen und Kinderfahrräder aus zweiter Hand. Kuchenbuffet, der Erlös geht an den Kindergarten.',
        },
        {
          label: 'b',
          heading: 'Repair-Café Nordstadt',
          body: 'Wegwerfen? Nein danke! Jeden ersten Sonntag im Monat helfen Ihnen erfahrene Ehrenamtliche, kaputte Elektrogeräte, Lampen und Kaffeemaschinen zu reparieren. Ersatzteile zum Selbstkostenpreis, die Hilfe ist kostenlos.',
        },
        {
          label: 'c',
          heading: 'Grüne Kiste vom Hof Sommerfeld',
          body: 'Frisches Bio-Gemüse und Obst direkt vom Bauernhof – jede Woche zu Ihnen nach Hause geliefert. Kleine Kiste ab 15 Euro, jederzeit kündbar.',
        },
        {
          label: 'd',
          heading: 'Festlich für einen Abend',
          body: 'Elegante Abendkleider, Anzüge und Accessoires zum Ausleihen statt Kaufen. Ideal für Hochzeiten, Bälle und Firmenfeiern. Reinigung inklusive. Termin unter 0371 448812.',
        },
        {
          label: 'e',
          heading: 'Volkshochschule: Nähen für Anfänger',
          body: 'Aus alt mach neu! In sechs Abenden lernen Sie, alte Kleidung zu ändern, zu flicken und neue Teile zu nähen. Nähmaschinen sind vorhanden. Beginn: 4. März, 18:30 Uhr.',
        },
        {
          label: 'f',
          heading: 'Großer Flohmarkt am Stadtpark',
          body: 'Sie haben alte Möbel, Bücher oder Geschirr? Melden Sie jetzt Ihren Verkaufsstand für den 12. April an! Standgebühr 10 Euro pro Meter. Anmeldung online oder im Bürgerbüro.',
        },
        {
          label: 'g',
          heading: 'Elektro-Mega: Laptop-Wochen',
          body: 'Nagelneue Laptops aller Marken jetzt bis zu 30 % reduziert! Nur solange der Vorrat reicht. Keine Rücknahme von reduzierter Ware.',
        },
        {
          label: 'h',
          heading: 'Supermarkt Kaiser liefert!',
          body: 'Bestellen Sie Ihren Wocheneinkauf bequem online. Lieferung am selben Tag, ab 50 Euro Bestellwert kostenlos. Großes Angebot an Markenprodukten.',
        },
        {
          label: 'i',
          heading: 'Brautmoden Weiß: Ausverkauf',
          body: 'Wir schließen! Alle Brautkleider und festlichen Abendkleider bis zu 60 % günstiger. Nur Verkauf, kein Umtausch.',
        },
        {
          label: 'j',
          heading: 'Handy-Doktor',
          body: 'Display kaputt? Akku schwach? Wir reparieren Smartphones und Tablets aller Marken – meistens in nur einer Stunde. Ohne Termin.',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–7 und die Anzeigen a–j. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige.',
          instructionRu: 'Подберите к каждой ситуации подходящее объявление. Для одной ситуации подходящего объявления нет.',
          options: [
            'Kinderbasar im Gemeindehaus',
            'Repair-Café Nordstadt',
            'Grüne Kiste vom Hof Sommerfeld',
            'Festlich für einen Abend',
            'Volkshochschule: Nähen für Anfänger',
            'Großer Flohmarkt am Stadtpark',
            'Elektro-Mega: Laptop-Wochen',
            'Supermarkt Kaiser liefert!',
            'Brautmoden Weiß: Ausverkauf',
            'Handy-Doktor',
          ],
          allowNone: true,
          items: [
            {
              kind: 'match',
              prompt: 'Sie möchten Ihre alte Kaffeemaschine reparieren lassen, statt eine neue zu kaufen.',
              answer: 1,
              explanationRu: 'b: Repair-Café помогает чинить электроприборы, в том числе кофемашины. j (Handy-Doktor) чинит только смартфоны и планшеты.',
            },
            {
              kind: 'match',
              prompt: 'Ihre Freundin sucht ein gebrauchtes Fahrrad für ihre fünfjährige Tochter.',
              answer: 0,
              explanationRu: 'a: на детском базаре продают детские велосипеды «aus zweiter Hand» (подержанные).',
            },
            {
              kind: 'match',
              prompt: 'Sie brauchen für eine Hochzeit ein elegantes Kleid, möchten aber keins kaufen.',
              answer: 3,
              explanationRu: 'd: платья можно взять напрокат («zum Ausleihen statt Kaufen»). i не подходит — там только продажа.',
            },
            {
              kind: 'match',
              prompt: 'Sie suchen einen gebrauchten, günstigen Laptop mit Garantie.',
              answer: -1,
              explanationRu: 'Подходящего объявления нет: в g продаются только новые («nagelneue») ноутбуки, j ремонтирует смартфоны.',
            },
            {
              kind: 'match',
              prompt: 'Ein Kollege möchte jede Woche Bio-Gemüse vom Bauernhof, hat aber keine Zeit zum Einkaufen.',
              answer: 2,
              explanationRu: 'c: био-овощи с фермы с еженедельной доставкой на дом. h — обычный супермаркет без био-продуктов с фермы.',
            },
            {
              kind: 'match',
              prompt: 'Ihr Nachbar will seinen alten Schrank und viele Bücher selbst verkaufen.',
              answer: 5,
              explanationRu: 'f: на блошином рынке можно зарегистрировать свой торговый стенд для старой мебели и книг.',
            },
            {
              kind: 'match',
              prompt: 'Sie möchten lernen, wie man eine zu lange Hose selbst kürzt.',
              answer: 4,
              explanationRu: 'e: курс шитья в народном университете — учат переделывать старую одежду («alte Kleidung zu ändern»).',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Drei kurze Texte: Kaufhaus, Reparatur, Verbrauchertipp',
      kind: 'monolog',
      situation: 'Sie hören drei kurze Texte: eine Durchsage im Kaufhaus, eine Nachricht auf dem Anrufbeantworter und einen Tipp im Radio. Sie hören jeden Text zweimal.',
      text: `Text 1. Liebe Kundinnen und Kunden, herzlich willkommen im Kaufhaus Lindner! Nur heute bekommen Sie in unserer Sportabteilung im dritten Stock 25 Prozent Rabatt auf alle Laufschuhe und Sportjacken. Und für unsere kleinen Gäste: Im Erdgeschoss neben dem Haupteingang gibt es bis 16 Uhr kostenlose Waffeln und einen bunten Luftballon. Wir wünschen Ihnen einen angenehmen Einkauf!

Text 2. Guten Tag, Frau Petrović, hier ist Herr Brandt vom Elektrogeschäft Brandt und Sohn. Sie hatten uns letzte Woche Ihren alten Staubsauger zur Reparatur gebracht. Leider gibt es für dieses Modell keine Ersatzteile mehr, die Reparatur ist also nicht möglich. Wir können Ihnen aber ein ähnliches, sehr leises Gerät zu einem günstigen Preis anbieten. Ihren alten Staubsauger können Sie ab Donnerstag bei uns abholen. Wir haben montags bis freitags von neun bis achtzehn Uhr geöffnet. Auf Wiederhören!

Text 3. Und jetzt unser Verbrauchertipp der Woche. Viele Menschen kaufen im Supermarkt mehr, als sie eigentlich brauchen – vor allem, wenn sie hungrig sind. Experten raten deshalb: Gehen Sie nie mit leerem Magen einkaufen und schreiben Sie vorher eine genaue Einkaufsliste. Achten Sie außerdem auf die unteren Regale. Dort stehen oft die günstigeren Produkte, denn die teuren Markenartikel stehen meistens direkt auf Augenhöhe. Wer diese einfachen Tipps beachtet, kann im Monat leicht fünfzig Euro sparen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Text 1: Ist die Aussage richtig oder falsch? Wählen Sie dann die richtige Antwort a, b oder c.',
          instructionRu: 'Текст 1: верно ли утверждение? Затем выберите правильный ответ.',
          items: [
            {
              kind: 'tf',
              statement: 'Laufschuhe sind heute billiger als sonst.',
              answer: true,
              explanationRu: 'Верно: только сегодня скидка 25 % на все беговые кроссовки и спортивные куртки.',
            },
            {
              kind: 'mc',
              question: 'Wo bekommen Kinder etwas geschenkt?',
              options: ['im dritten Stock', 'im Erdgeschoss', 'in der Sportabteilung'],
              answer: 1,
              explanationRu: '«Im Erdgeschoss neben dem Haupteingang» — бесплатные вафли и воздушный шарик.',
            },
          ],
        },
        {
          instructionDe: 'Text 2: Ist die Aussage richtig oder falsch? Wählen Sie dann die richtige Antwort a, b oder c.',
          instructionRu: 'Текст 2: верно ли утверждение? Затем выберите правильный ответ.',
          items: [
            {
              kind: 'tf',
              statement: 'Herr Brandt hat den Staubsauger repariert.',
              answer: false,
              explanationRu: 'Неверно: запчастей больше нет, ремонт невозможен («die Reparatur ist also nicht möglich»).',
            },
            {
              kind: 'mc',
              question: 'Was soll Frau Petrović tun?',
              options: ['den Staubsauger ab Donnerstag abholen', 'Ersatzteile im Internet bestellen', 'am Samstag ins Geschäft kommen'],
              answer: 0,
              explanationRu: '«Ihren alten Staubsauger können Sie ab Donnerstag bei uns abholen». По субботам магазин не работает.',
            },
          ],
        },
        {
          instructionDe: 'Text 3: Ist die Aussage richtig oder falsch? Wählen Sie dann die richtige Antwort a, b oder c.',
          instructionRu: 'Текст 3: верно ли утверждение? Затем выберите правильный ответ.',
          items: [
            {
              kind: 'tf',
              statement: 'Man soll vor dem Einkaufen eine Liste schreiben.',
              answer: true,
              explanationRu: 'Верно: «schreiben Sie vorher eine genaue Einkaufsliste».',
            },
            {
              kind: 'mc',
              question: 'Wo findet man im Supermarkt oft günstige Produkte?',
              options: ['an der Kasse', 'auf Augenhöhe', 'in den unteren Regalen'],
              answer: 2,
              explanationRu: '«Achten Sie … auf die unteren Regale. Dort stehen oft die günstigeren Produkte». На уровне глаз — дорогие бренды.',
            },
          ],
        },
      ],
    },
    {
      title: 'Ein Stuhl geht zurück',
      kind: 'dialog',
      speakers: { A: 'Lena', B: 'Max, ihr Mitbewohner' },
      situation: 'Sie hören ein Gespräch zwischen zwei Mitbewohnern in ihrer Wohnung.',
      text: `A: Hey Max, was ist denn das für ein riesiges Paket im Flur?
B: Ach, das ist der neue Schreibtischstuhl, den ich online bestellt habe. Leider muss er wieder zurück.
A: Warum denn? Ist er kaputt?
B: Nein, kaputt ist er nicht. Aber auf den Fotos sah er viel bequemer aus. Die Sitzfläche ist total hart, und nach einer halben Stunde tut mir der Rücken weh.
A: Oh je. Und die Rücksendung, kostet die was?
B: Zum Glück nicht. Ich muss nur das Etikett ausdrucken und das Paket zur Post bringen. Das Problem ist: Ich habe keinen Drucker.
A: Kein Problem, du kannst meinen benutzen. Aber sag mal, warum kaufst du so etwas überhaupt im Internet? In der Stadt gibt es doch dieses große Möbelhaus.
B: Ja, schon. Aber im Internet war der Stuhl dreißig Euro billiger. Und ich hatte keine Lust, am Samstag in volle Geschäfte zu gehen.
A: Verstehe ich. Ich kaufe Möbel trotzdem lieber im Geschäft. Da kann ich mich auf den Stuhl setzen und merke sofort, ob er bequem ist.
B: Da hast du recht. Weißt du was? Wenn ich das Paket weggeschickt habe, fahre ich am Samstag doch mal ins Möbelhaus. Kommst du mit?
A: Am Samstag arbeite ich leider bis zwei. Aber danach gern. Dann können wir anschließend noch einen Kaffee trinken.
B: Super, abgemacht! Dann hole ich dich um halb drei ab.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aussagen. Hören Sie dann das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Max hat einen Schreibtischstuhl im Internet gekauft.',
              answer: true,
              explanationRu: 'Верно: «der neue Schreibtischstuhl, den ich online bestellt habe».',
            },
            {
              kind: 'tf',
              statement: 'Der Stuhl ist kaputt angekommen.',
              answer: false,
              explanationRu: 'Неверно: «kaputt ist er nicht» — он просто неудобный и жёсткий.',
            },
            {
              kind: 'tf',
              statement: 'Max muss für die Rücksendung bezahlen.',
              answer: false,
              explanationRu: 'Неверно: «Zum Glück nicht» — возврат бесплатный.',
            },
            {
              kind: 'tf',
              statement: 'Max kann das Etikett bei Lena ausdrucken.',
              answer: true,
              explanationRu: 'Верно: у Макса нет принтера, Лена говорит: «du kannst meinen benutzen».',
            },
            {
              kind: 'tf',
              statement: 'Im Internet war der Stuhl günstiger als im Möbelhaus.',
              answer: true,
              explanationRu: 'Верно: «im Internet war der Stuhl dreißig Euro billiger».',
            },
            {
              kind: 'tf',
              statement: 'Lena kauft Möbel am liebsten online.',
              answer: false,
              explanationRu: 'Неверно: «Ich kaufe Möbel trotzdem lieber im Geschäft» — там можно сразу посидеть на стуле.',
            },
            {
              kind: 'tf',
              statement: 'Max und Lena fahren am Samstagvormittag ins Möbelhaus.',
              answer: false,
              explanationRu: 'Неверно: Лена работает до двух, Макс заберёт её в половине третьего — то есть после обеда.',
            },
          ],
        },
      ],
    },
  ],
};
