import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Im Stadtpark ___ jedes Jahr neue Bäume gepflanzt.',
      options: ['wird', 'werden', 'wurde', 'sind'],
      answer: 1,
      explanationRu: 'Подлежащее — neue Bäume (мн. ч.), поэтому werden. Пассив Präsens: werden + Partizip II.',
    },
    {
      type: 'choice',
      prompt: 'Die Plakate für die Klimademo wurden ___ einer Schülergruppe gestaltet.',
      options: ['von', 'durch', 'mit', 'bei'],
      answer: 0,
      explanationRu: 'Исполнитель-человек или группа людей вводится через von + Dativ. durch + Akk — для средства или причины.',
    },
    {
      type: 'choice',
      prompt: 'Früher ___ der Müll in unserem Dorf nicht getrennt.',
      options: ['wird', 'wurde', 'wurden', 'war'],
      answer: 1,
      explanationRu: 'Процесс в прошлом → Passiv Präteritum: wurde + Partizip II. Подлежащее der Müll — ед. ч. «war getrennt» описывало бы состояние, а не процесс.',
    },
    {
      type: 'choice',
      prompt: 'Die Solaranlage auf dem Dach muss regelmäßig ___ werden.',
      options: ['reinigen', 'gereinigt', 'reinigt', 'zu reinigen'],
      answer: 1,
      explanationRu: 'Пассив с модальным глаголом: модальный глагол + Partizip II + werden в конце (muss gereinigt werden).',
    },
    {
      type: 'choice',
      prompt: 'In welchem Satz ist „werden“ ein Passiv-Hilfsverb?',
      options: ['Mein Sohn wird Förster.', 'Morgen wird es regnen.', 'Der Wald wird geschützt.', 'Es wird langsam kalt.'],
      answer: 2,
      explanationRu: 'Пассив = werden + Partizip II (geschützt). В остальных: «становиться» (wird Förster, wird kalt) и будущее время (wird regnen).',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Hier trennt sich der Müll.', 'Hier wird der Müll getrennt.', 'Hier wird den Müll getrennt.', 'Hier ist den Müll getrennt.'],
      answer: 1,
      explanationRu: 'Русское «мусор сортируется» передаётся пассивом, а не возвратным глаголом. Подлежащее стоит в Nominativ: der Müll.',
    },
    {
      type: 'gap',
      prompt: 'Leere Pfandflaschen ___ im Supermarkt zurückgegeben.',
      answers: ['werden'],
      explanationRu: 'Подлежащее Pfandflaschen — мн. ч. → werden + Partizip II (zurückgegeben).',
    },
    {
      type: 'gap',
      prompt: 'Das letzte Atomkraftwerk in der Region wurde 2023 ___.',
      answers: ['abgeschaltet'],
      hintRu: 'abschalten',
      explanationRu: 'Partizip II отделяемого глагола: ab-ge-schaltet. Пассив Präteritum: wurde … abgeschaltet.',
    },
    {
      type: 'gap',
      prompt: 'Die kleine Insel ___ 2019 von einer schweren Überschwemmung getroffen.',
      answers: ['wurde'],
      explanationRu: 'Событие в прошлом (2019) → Passiv Präteritum, ед. ч.: wurde.',
    },
    {
      type: 'gap',
      prompt: 'Im Nationalpark dürfen keine Pflanzen ___ werden.',
      answers: ['gepflückt'],
      hintRu: 'pflücken',
      explanationRu: 'Пассив с модальным глаголом: dürfen + Partizip II (gepflückt) + werden.',
    },
    {
      type: 'gap',
      prompt: 'Der alte Kühlschrank konnte leider nicht mehr ___ werden.',
      answers: ['repariert'],
      hintRu: 'reparieren',
      explanationRu: 'Пассив с модальным глаголом в прошедшем времени: konnte … repariert werden. У глаголов на -ieren Partizip II без ge-.',
    },
    {
      type: 'gap',
      prompt: 'Das Naturschutzprojekt wird ___ der Stadt finanziert.',
      answers: ['von'],
      explanationRu: 'Исполнитель-организация (die Stadt) вводится через von + Dativ: von der Stadt.',
    },
    {
      type: 'gap',
      prompt: 'Je mehr Plastik recycelt wird, ___ weniger Müll landet im Meer.',
      answers: ['desto', 'umso'],
      explanationRu: 'Повторение раздела 07: je … desto/umso. Обратите внимание: в части с je пассив (recycelt wird) стоит в конце.',
    },
    {
      type: 'order',
      words: ['Die', 'alten', 'Fenster', 'wurden', 'letztes', 'Jahr', 'ausgetauscht.'],
      translationRu: 'Старые окна заменили в прошлом году.',
      explanationRu: 'wurden на втором месте, Partizip II ausgetauscht — в конце. die alten Fenster — мн. ч. после die → -en.',
    },
    {
      type: 'order',
      words: ['Plastiktüten', 'sollten', 'in', 'Zukunft', 'nicht', 'mehr', 'verkauft', 'werden.'],
      translationRu: 'Полиэтиленовые пакеты в будущем не следовало бы больше продавать.',
      explanationRu: 'Пассив с модальным глаголом: sollten … verkauft werden — werden в самом конце.',
    },
    {
      type: 'order',
      words: ['Ich', 'weiß,', 'dass', 'der', 'Müll', 'in', 'Deutschland', 'getrennt', 'wird.'],
      translationRu: 'Я знаю, что в Германии мусор сортируют.',
      explanationRu: 'Повторение раздела 03: в придаточном с dass спрягаемый глагол (wird) стоит в самом конце, после Partizip II.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте в пассив (Präsens).',
      prompt: 'Man repariert die Fahrräder in der Werkstatt.',
      answers: ['Die Fahrräder werden in der Werkstatt repariert.', 'In der Werkstatt werden die Fahrräder repariert.'],
      explanationRu: 'Akkusativ die Fahrräder становится подлежащим (мн. ч.) → werden … repariert. man исчезает.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте в пассив (Präteritum).',
      prompt: 'Man fällte im Winter viele alte Bäume.',
      answers: ['Im Winter wurden viele alte Bäume gefällt.', 'Viele alte Bäume wurden im Winter gefällt.'],
      explanationRu: 'Präteritum актива (fällte) → wurden + Partizip II (gefällt). Подлежащее во мн. ч.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте в пассив с модальным глаголом.',
      prompt: 'Man darf hier keinen Müll verbrennen.',
      answers: ['Hier darf kein Müll verbrannt werden.', 'Kein Müll darf hier verbrannt werden.'],
      explanationRu: 'Akkusativ keinen Müll → Nominativ kein Müll. Порядок: darf … verbrannt werden.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте в актив (подлежащее — die Schüler), в Präteritum или Perfekt.',
      prompt: 'Der Schulgarten wurde von den Schülern angelegt.',
      answers: ['Die Schüler legten den Schulgarten an.', 'Die Schüler haben den Schulgarten angelegt.'],
      explanationRu: 'Исполнитель (von den Schülern) становится подлежащим, а der Schulgarten — дополнением в Akkusativ: den Schulgarten. anlegen — отделяемый глагол.',
    },
  ],
  reading: [
    {
      title: 'Anzeigen: Natur und Umwelt in der Region',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Wer wohnt im Wald?',
          body: 'Familienführung mit Försterin Ute Grams: Wir suchen Tierspuren, bauen Nester und lernen, wie Fuchs und Specht leben. Für Kinder von 5 bis 12 Jahren mit Eltern. Jeden Sonntag, 14 Uhr, Treffpunkt Waldparkplatz. Anmeldung erwünscht.',
        },
        {
          label: 'b',
          heading: 'Wertstoffhof Ost',
          body: 'Wohin mit alten Elektrogeräten? Handys, Laptops, Kabel und Batterien nehmen wir kostenlos an. Die Geräte werden fachgerecht recycelt. Geöffnet Mo–Sa 8–17 Uhr.',
        },
        {
          label: 'c',
          heading: 'Aktion „Saubere Ufer“',
          body: 'Jeden ersten Samstag im Monat sammeln wir gemeinsam Müll am Flussufer. Handschuhe und Säcke werden gestellt. Keine Anmeldung nötig – einfach um 10 Uhr zur Fähre kommen!',
        },
        {
          label: 'd',
          heading: 'Strom vom eigenen Balkon',
          body: 'Die Verbraucherzentrale berät Sie kostenlos zu Mini-Solaranlagen für Balkon und Terrasse: Was kostet das? Was ist erlaubt? Termine online buchen.',
        },
        {
          label: 'e',
          heading: 'Lastenrad „Lotte“',
          body: 'Großer Einkauf, aber kein Auto? Leihen Sie sich unser Lastenrad für bis zu drei Tage – kostenlos! Eine kleine Spende ist willkommen. Reservierung im Stadtteilbüro.',
        },
        {
          label: 'f',
          heading: 'Freiwilliges Ökologisches Jahr in Bayern',
          body: 'Du bist zwischen 16 und 26 Jahre alt und willst ein Jahr lang in einem Naturschutzprojekt in Bayern mitarbeiten? Wir bieten Plätze in Nationalparks und Umweltzentren. Mit Taschengeld.',
        },
        {
          label: 'g',
          heading: 'Grüne Reisen',
          body: 'Urlaub im Regenwald von Costa Rica: Faultiere und Schildkröten beobachten, in umweltfreundlichen Lodges übernachten. 14 Tage ab 2490 Euro pro Person.',
        },
        {
          label: 'h',
          heading: 'Junge Imker gesucht!',
          body: 'Der Imkerverein Talheim gründet eine Bienen-AG für Jugendliche ab 14 Jahren. Lerne, wie Bienen leben und warum sie so wichtig für die Natur sind. Dienstags 16–18 Uhr.',
        },
        {
          label: 'i',
          heading: 'Frischer Honig vom Hof',
          body: 'Blütenhonig und Waldhonig aus eigener Imkerei. Verkauf ab Hof, freitags und samstags. Auch als Geschenk verpackt.',
        },
        {
          label: 'j',
          heading: 'E-Autos testen',
          body: 'Autohaus Lehmann: Fahren Sie unsere neuen Elektroautos ein Wochenende lang Probe. Jetzt Termin vereinbaren!',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–7 und die Anzeigen a–j. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige.',
          instructionRu: 'Подберите к каждой ситуации подходящее объявление. Для одной ситуации подходящего объявления нет.',
          options: [
            'Wer wohnt im Wald?',
            'Wertstoffhof Ost',
            'Aktion „Saubere Ufer“',
            'Strom vom eigenen Balkon',
            'Lastenrad „Lotte“',
            'Freiwilliges Ökologisches Jahr in Bayern',
            'Grüne Reisen',
            'Junge Imker gesucht!',
            'Frischer Honig vom Hof',
            'E-Autos testen',
          ],
          allowNone: true,
          items: [
            {
              kind: 'match',
              prompt: 'Ihre Nachbarin möchte Solarmodule auf ihrem Balkon installieren und braucht Informationen.',
              answer: 3,
              explanationRu: 'd: бесплатная консультация по мини-солнечным установкам для балкона.',
            },
            {
              kind: 'match',
              prompt: 'Sie möchten am Wochenende mit Ihren Kindern (6 und 9 Jahre) etwas über Tiere im Wald lernen.',
              answer: 0,
              explanationRu: 'a: семейная экскурсия с лесничей по воскресеньям, для детей 5–12 лет с родителями.',
            },
            {
              kind: 'match',
              prompt: 'Sie möchten ein Praktikum in einem Naturschutzprojekt im Ausland machen.',
              answer: -1,
              explanationRu: 'Подходящего объявления нет: f — годичная программа в Баварии (не за границей), g — туристическая поездка, а не практика.',
            },
            {
              kind: 'match',
              prompt: 'Ihr Kollege will sein altes Handy umweltfreundlich entsorgen.',
              answer: 1,
              explanationRu: 'b: пункт приёма вторсырья бесплатно принимает телефоны, они перерабатываются.',
            },
            {
              kind: 'match',
              prompt: 'Ihr Sohn (16) interessiert sich für Bienen und möchte mehr über sie lernen.',
              answer: 7,
              explanationRu: 'h: кружок пчеловодов для подростков от 14 лет. i — только продажа мёда.',
            },
            {
              kind: 'match',
              prompt: 'Sie möchten sich ab und zu für die Umwelt engagieren, aber ohne feste Verpflichtung.',
              answer: 2,
              explanationRu: 'c: раз в месяц собирают мусор на берегу, регистрация не нужна — можно просто прийти.',
            },
            {
              kind: 'match',
              prompt: 'Sie wollen Ihre Einkäufe ohne Auto transportieren, aber kein eigenes Lastenrad kaufen.',
              answer: 4,
              explanationRu: 'e: грузовой велосипед можно бесплатно взять напрокат на срок до трёх дней. j — электромобили, то есть снова машина.',
            },
          ],
        },
      ],
    },
    {
      title: 'Zwei Zeitungsartikel: Stadtbäume und Dorfstrom',
      textType: 'Zeitungsartikel',
      texts: [
        {
          label: 'Text 1',
          heading: 'Mehr Grün für Mannheim: 1000 neue Stadtbäume',
          body: `Die Sommer werden heißer, und in vielen Straßen gibt es kaum Schatten. Deshalb sollen in Mannheim bis Ende nächsten Jahres 1000 neue Bäume gepflanzt werden. Das wurde letzte Woche vom Gemeinderat beschlossen. Die Kosten von rund zwei Millionen Euro werden zum größten Teil vom Land Baden-Württemberg übernommen.

Gepflanzt werden vor allem Arten, die mit Hitze und Trockenheit gut zurechtkommen, zum Beispiel die Silberlinde. „Viele Bäume, die vor fünfzig Jahren gepflanzt wurden, leiden heute unter dem Klimawandel“, erklärt Gärtnermeisterin Andrea Vogt vom Grünflächenamt.

Auch die Bürgerinnen und Bürger können mitmachen: Wer einen neuen Baum vor seinem Haus haben möchte, kann das bis zum 31. März online beantragen. Außerdem werden Baumpaten gesucht. Sie sollen die jungen Bäume im Sommer regelmäßig gießen, denn in den ersten drei Jahren brauchen die Bäume besonders viel Wasser. Als Dankeschön bekommen alle Paten eine kleine Gießkanne mit ihrem Namen.`,
        },
        {
          label: 'Text 2',
          heading: 'Ein Dorf macht seinen eigenen Strom',
          body: `Im kleinen Dorf Grünbach in Niedersachsen wird schon seit acht Jahren mehr Strom produziert, als die 600 Einwohner verbrauchen. Der Strom wird von sechs Windrädern und einer Biogasanlage erzeugt. Die Biogasanlage wird mit Gülle und Pflanzenresten von den Bauernhöfen der Umgebung betrieben. Was im Dorf nicht gebraucht wird, wird ins öffentliche Netz eingespeist und verkauft.

Die Idee kam damals von Bürgermeister Klaus Ahrens. „Am Anfang waren viele dagegen, vor allem wegen der Windräder. Manche hatten Angst vor dem Lärm“, erinnert er sich. Bei mehreren Bürgerversammlungen wurde das Projekt diskutiert. Am Ende stimmte eine große Mehrheit dafür.

Heute profitieren alle: Die Einwohner zahlen etwa ein Viertel weniger für Strom als der Durchschnitt in Deutschland. Mit dem Gewinn wurde letztes Jahr der Kindergarten renoviert. Inzwischen kommen regelmäßig Besuchergruppen aus ganz Europa, um sich das Projekt anzusehen. Führungen werden jeden ersten Samstag im Monat angeboten.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie Text 1 und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 1 и выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Warum werden in Mannheim neue Bäume gepflanzt?',
              options: ['In vielen Straßen gibt es zu wenig Schatten.', 'Viele alte Bäume mussten gefällt werden.', 'Das Land Baden-Württemberg verlangt es.'],
              answer: 0,
              explanationRu: '«Die Sommer werden heißer, und in vielen Straßen gibt es kaum Schatten». Земля только оплачивает большую часть расходов.',
            },
            {
              kind: 'mc',
              question: 'Welche Bäume werden vor allem gepflanzt?',
              options: ['Bäume, die besonders viel Wasser brauchen', 'Bäume, die Hitze und Trockenheit gut vertragen', 'Bäume, die schon fünfzig Jahre alt sind'],
              answer: 1,
              explanationRu: '«Gepflanzt werden vor allem Arten, die mit Hitze und Trockenheit gut zurechtkommen».',
            },
            {
              kind: 'mc',
              question: 'Was sollen die Baumpaten tun?',
              options: ['einen Baum bezahlen', 'einen Baum vor ihrem Haus beantragen', 'die jungen Bäume im Sommer gießen'],
              answer: 2,
              explanationRu: '«Sie sollen die jungen Bäume im Sommer regelmäßig gießen». Подать заявку на дерево может любой житель — это не задача шефов.',
            },
          ],
        },
        {
          instructionDe: 'Lesen Sie Text 2 und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 2 и выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Womit wird in Grünbach Strom produziert?',
              options: ['mit Windrädern und einer Biogasanlage', 'mit Solaranlagen auf allen Dächern', 'mit einem kleinen Wasserkraftwerk'],
              answer: 0,
              explanationRu: '«Der Strom wird von sechs Windrädern und einer Biogasanlage erzeugt».',
            },
            {
              kind: 'mc',
              question: 'Was war am Anfang ein Problem?',
              options: ['Das Projekt war zu teuer.', 'Einige Einwohner hatten Angst vor Lärm.', 'Der Bürgermeister war dagegen.'],
              answer: 1,
              explanationRu: '«Manche hatten Angst vor dem Lärm» — из-за ветряков. Идея как раз принадлежала бургомистру.',
            },
            {
              kind: 'mc',
              question: 'Was wurde mit dem Gewinn gemacht?',
              options: ['Es wurden neue Windräder gebaut.', 'Der Strompreis wurde halbiert.', 'Der Kindergarten wurde renoviert.'],
              answer: 2,
              explanationRu: '«Mit dem Gewinn wurde letztes Jahr der Kindergarten renoviert». Электричество дешевле примерно на четверть, а не вдвое.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Führung im Recyclingzentrum',
      kind: 'monolog',
      situation: 'Sie nehmen an einer Führung durch ein Recyclingzentrum teil. Sie hören den Text einmal.',
      text: `Guten Morgen und herzlich willkommen im Recyclingzentrum Süd! Ich bin Markus Feld und zeige Ihnen heute, was mit Ihrem Müll passiert. Die Führung dauert ungefähr neunzig Minuten. Bitte bleiben Sie immer bei der Gruppe und tragen Sie die ganze Zeit die gelben Westen, die Sie am Eingang bekommen haben. Helme brauchen Sie nur in der großen Halle, die verteile ich dort.

Wir stehen hier an der Anlieferung. Jeden Tag werden hier etwa 300 Tonnen Verpackungsmüll aus der ganzen Region angeliefert, das sind ungefähr 25 Lastwagen. Der Müll wird zuerst auf ein langes Förderband gelegt.

Jetzt gehen wir in die große Halle. Hier wird der Müll automatisch sortiert: Metalle werden mit starken Magneten herausgezogen, und Kunststoffe werden mit Infrarotlicht erkannt und nach Sorten getrennt. Trotzdem arbeiten hier noch zwölf Menschen von Hand. Sie nehmen Dinge heraus, die nicht in den gelben Sack gehören – zum Beispiel Windeln oder sogar alte Schuhe.

Leider kann nicht alles recycelt werden. Nur etwa die Hälfte des Kunststoffs wird zu neuem Material verarbeitet. Der Rest wird verbrannt, und daraus wird Energie für die Fernwärme gewonnen.

Am Ende kommen wir in unseren Ausstellungsraum. Dort sehen Sie, was aus recyceltem Plastik hergestellt wird: Parkbänke, Blumentöpfe und sogar Kleidung. Und noch ein Tipp für zu Hause: Joghurtbecher müssen nicht gespült werden. Es reicht, wenn sie leer sind. So, dann gehen wir los!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aufgaben. Hören Sie dann den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте экскурсию и выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was müssen die Besucher während der ganzen Führung tragen?',
              options: ['einen Helm', 'eine gelbe Weste', 'Handschuhe'],
              answer: 1,
              explanationRu: 'Жёлтые жилеты носят всё время; каски нужны только в большом цехе.',
            },
            {
              kind: 'mc',
              question: 'Wie viel Müll wird jeden Tag angeliefert?',
              options: ['etwa 300 Lastwagen', 'etwa 25 Tonnen', 'etwa 300 Tonnen'],
              answer: 2,
              explanationRu: '«etwa 300 Tonnen … das sind ungefähr 25 Lastwagen». Числа в вариантах перепутаны.',
            },
            {
              kind: 'mc',
              question: 'Was machen die zwölf Mitarbeiter in der Halle?',
              options: ['Sie fahren die Lastwagen.', 'Sie nehmen falsche Dinge aus dem Müll.', 'Sie reparieren die Magnete.'],
              answer: 1,
              explanationRu: 'Они вручную вынимают то, что не относится к жёлтому мешку: подгузники, старую обувь.',
            },
            {
              kind: 'mc',
              question: 'Was passiert mit dem Kunststoff, der nicht recycelt werden kann?',
              options: ['Er wird verbrannt, und man gewinnt daraus Energie.', 'Er wird ins Ausland gebracht.', 'Er wird auf einer Deponie gelagert.'],
              answer: 0,
              explanationRu: '«Der Rest wird verbrannt, und daraus wird Energie für die Fernwärme gewonnen».',
            },
            {
              kind: 'mc',
              question: 'Was sagt Herr Feld über Joghurtbecher?',
              options: ['Man muss sie vorher spülen.', 'Sie gehören in den Restmüll.', 'Sie müssen nur leer sein.'],
              answer: 2,
              explanationRu: '«Joghurtbecher müssen nicht gespült werden. Es reicht, wenn sie leer sind».',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Eine autofreie Innenstadt?',
      kind: 'discussion',
      speakers: { A: 'Moderator Herr Brück', B: 'Frau Neumann, Verkehrsplanerin', C: 'Herr Kaya, Inhaber eines Schuhgeschäfts' },
      situation: 'Sie hören eine Diskussion im Radio. Der Moderator spricht mit zwei Gästen über eine autofreie Innenstadt.',
      text: `A: Hallo und willkommen bei „Stadtgespräch“. In unserer Stadt wird gerade heftig diskutiert: Soll die Innenstadt ab nächstem Jahr für Autos gesperrt werden? Bei mir im Studio sind Frau Neumann, Verkehrsplanerin bei der Stadt, und Herr Kaya, der in der Fußgängerzone ein Schuhgeschäft hat. Frau Neumann, warum soll das Zentrum autofrei werden?
B: Die Luft in der Innenstadt ist schlecht, und es ist sehr laut. Die Grenzwerte für Abgase wurden im letzten Jahr an vielen Tagen überschritten. Wenn weniger Autos fahren, wird die Luft besser, und die Menschen halten sich lieber in der Stadt auf.
C: Das klingt schön, aber ich mache mir große Sorgen. Viele meiner Kunden kommen mit dem Auto aus den Dörfern. Wenn sie nicht mehr parken können, fahren sie ins Einkaufszentrum am Stadtrand. Oder sie bestellen gleich im Internet.
A: Herr Kaya, ist das nur eine Befürchtung, oder gibt es dafür Zahlen?
C: Ich habe meine Kunden selbst gefragt. Fast die Hälfte kommt mit dem Auto.
B: Das verstehe ich. Deshalb sollen am Rand der Innenstadt zwei neue Parkhäuser gebaut werden. Von dort fahren dann alle zehn Minuten kostenlose Elektrobusse ins Zentrum.
C: Und wer bezahlt die Parkhäuser? Am Ende werden die Parkgebühren erhöht, und das zahlen wieder die Kunden.
B: Die Parkhäuser werden zum größten Teil vom Land finanziert. Und die Erfahrungen aus anderen Städten zeigen: Nach der Umstellung kamen sogar mehr Menschen in die Innenstadt, weil es dort ruhiger und schöner war.
A: Wir haben auch eine Nachricht von einer Hörerin bekommen. Sie schreibt, dass sie im Rollstuhl sitzt und auf ihr Auto angewiesen ist. Was passiert mit diesen Menschen?
B: Für Menschen mit Behinderung wird es selbstverständlich Ausnahmen geben, ebenso für Lieferwagen am Vormittag.
C: Das ist gut. Mein Vorschlag wäre trotzdem, das Ganze zuerst ein halbes Jahr zu testen. Dann sieht man, ob die Geschäfte wirklich nicht leiden.
A: Ein Testlauf – das wäre vielleicht ein Kompromiss, mit dem alle leben können. Frau Neumann?
B: Darüber kann man reden. Wichtig ist nur, dass wir überhaupt anfangen.
A: Vielen Dank Ihnen beiden!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aussagen. Hören Sie dann die Diskussion. Wer sagt was?',
          instructionRu: 'Прослушайте дискуссию. Кто что говорит?',
          options: ['Moderator Herr Brück', 'Frau Neumann', 'Herr Kaya'],
          items: [
            {
              kind: 'match',
              prompt: 'In der Innenstadt war die Luft im letzten Jahr oft zu schlecht.',
              answer: 1,
              explanationRu: 'Фрау Нойман: предельные значения выхлопов «wurden … an vielen Tagen überschritten».',
            },
            {
              kind: 'match',
              prompt: 'Viele Kunden könnten in Zukunft lieber online einkaufen.',
              answer: 2,
              explanationRu: 'Херр Кая: «Oder sie bestellen gleich im Internet».',
            },
            {
              kind: 'match',
              prompt: 'Es soll ein kostenloses Busangebot ins Zentrum geben.',
              answer: 1,
              explanationRu: 'Фрау Нойман: от новых парковок каждые десять минут будут ходить бесплатные электробусы.',
            },
            {
              kind: 'match',
              prompt: 'Am Ende müssen die Kunden vielleicht mehr fürs Parken bezahlen.',
              answer: 2,
              explanationRu: 'Херр Кая: «Am Ende werden die Parkgebühren erhöht, und das zahlen wieder die Kunden».',
            },
            {
              kind: 'match',
              prompt: 'In anderen Städten kamen nach der Umstellung mehr Besucher ins Zentrum.',
              answer: 1,
              explanationRu: 'Фрау Нойман ссылается на опыт других городов: людей в центре стало даже больше.',
            },
            {
              kind: 'match',
              prompt: 'Eine Hörerin braucht ihr Auto, weil sie im Rollstuhl sitzt.',
              answer: 0,
              explanationRu: 'Модератор зачитывает сообщение слушательницы.',
            },
            {
              kind: 'match',
              prompt: 'Man sollte das Projekt zuerst eine Zeit lang ausprobieren.',
              answer: 2,
              explanationRu: 'Херр Кая: «Mein Vorschlag wäre …, das Ganze zuerst ein halbes Jahr zu testen».',
            },
            {
              kind: 'match',
              prompt: 'Ein Test könnte eine Lösung sein, die für beide Seiten akzeptabel ist.',
              answer: 0,
              explanationRu: 'Модератор: «Ein Testlauf – das wäre vielleicht ein Kompromiss, mit dem alle leben können».',
            },
          ],
        },
      ],
    },
  ],
};
