import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Auf der Insel ___ seit drei Tagen ununterbrochen.',
      options: ['regnet es', 'es regnet', 'regnet', 'regnet das'],
      answer: 0,
      explanationRu: 'Безличное es при глаголах погоды (es regnet) никогда не исчезает. Первое место занято (Auf der Insel), поэтому es стоит после глагола: regnet es.',
    },
    {
      type: 'choice',
      prompt: 'Der Roman ___ einer abenteuerlichen Zugreise durch Sibirien.',
      options: ['handelt es sich um', 'handelt von', 'geht es um', 'handelt sich um'],
      answer: 1,
      explanationRu: 'Если подлежащее — сам текст (der Roman), используют handeln von + Dat. Конструкции es handelt sich um / es geht um требуют es как подлежащего: In dem Roman geht es um eine Zugreise.',
    },
    {
      type: 'choice',
      prompt: 'Es ___ in diesem Sommer erstaunlich wenige Gäste ins Hotel.',
      options: ['kam', 'kommt', 'kamen', 'gab'],
      answer: 2,
      explanationRu: 'Platzhalter-es не является подлежащим. Подлежащее — wenige Gäste (мн. ч.), поэтому глагол во мн. ч.: Es kamen … Gäste. Ловушка: *Es kam viele Gäste*.',
    },
    {
      type: 'gap',
      prompt: 'Worum geht ___ in dem Vortrag über nachhaltigen Tourismus?',
      answers: ['es'],
      hintRu: 'es geht um …',
      explanationRu: 'В выражении es geht um + Akk es обязательно и в вопросе: Worum geht es? Ошибка русскоговорящих: *Worum geht in dem Vortrag?*',
    },
    {
      type: 'choice',
      prompt: 'In unserem Ort ___ drei Hotels, zwei Pensionen und einen Campingplatz.',
      options: ['es gibt', 'geben es', 'sind es', 'gibt es'],
      answer: 3,
      explanationRu: 'es gibt + Akk: глагол всегда в ед. ч. (gibt), что бы ни следовало дальше. После обстоятельства на первом месте — инверсия: gibt es. Akkusativ виден по einen Campingplatz.',
    },
    {
      type: 'gap',
      prompt: 'Es fehlen noch zwei Teilnehmer. → Noch ___ zwei Teilnehmer.',
      answers: ['fehlen'],
      hintRu: 'что происходит с Platzhalter-es?',
      explanationRu: 'Здесь es — только заполнитель первого места. Когда первое место занимает noch, es исчезает, а глагол согласуется с Teilnehmer (мн. ч.): Noch fehlen zwei Teilnehmer.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist FALSCH?',
      options: [
        'Es wurden viele Beschwerden eingereicht.',
        'Gestern wurden es viele Beschwerden eingereicht.',
        'Gestern wurden viele Beschwerden eingereicht.',
        'Viele Beschwerden wurden gestern eingereicht.',
      ],
      answer: 1,
      explanationRu: 'Повторение пассива: в пассиве es тоже может быть заполнителем, но только на первом месте. Если первое место занято (Gestern), es исчезает.',
    },
    {
      type: 'gap',
      prompt: 'In der Region fehlt es vor allem ___ gut ausgebildeten Fachkräften.',
      answers: ['an'],
      hintRu: 'es fehlt … + Dat',
      explanationRu: 'Выражение es fehlt an + Dat («не хватает чего-л.»): Es fehlt an Fachkräften.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните предложение со слов «Im ganzen Hotel».',
      prompt: 'Es wird im ganzen Hotel nicht geraucht.',
      answers: ['Im ganzen Hotel wird nicht geraucht.'],
      explanationRu: 'Повторение безличного пассива: es здесь только заполнитель. Если первое место занято обстоятельством, es исчезает: Im ganzen Hotel wird nicht geraucht.',
    },
    {
      type: 'choice',
      prompt: 'Ich lehne ___ ab, für eine einzige Nacht 300 Euro zu bezahlen.',
      options: ['das', 'dafür', 'es', 'daran'],
      answer: 2,
      explanationRu: 'Глагол ablehnen присоединяет инфинитивный оборот через коррелят es: Ich lehne es ab, … zu bezahlen. dafür/daran употребляются только с глаголами с предлогом.',
    },
    {
      type: 'gap',
      prompt: 'Wir freuen uns schon ___, dass ihr uns im Sommer an der Ostsee besucht.',
      answers: ['darauf', 'drauf'],
      hintRu: 'sich freuen auf + Akk',
      explanationRu: 'Ловушка: у глаголов с предлогом коррелят — не es, а da(r)- + предлог. sich freuen auf (о будущем) → darauf, dass …',
    },
    {
      type: 'choice',
      prompt: 'Hat der Kellner dir die Rechnung schon gebracht? – Ja, er hat ___ schon gebracht.',
      options: ['sie mir', 'mir sie', 'sie mich', 'mich sie'],
      answer: 0,
      explanationRu: 'Два местоимения: Akkusativ перед Dativ. die Rechnung → sie (Akk), dir → mir (Dat): Er hat sie mir gebracht.',
    },
    {
      type: 'order',
      words: ['Gestern', 'hat', 'mich', 'die Reiseleiterin', 'auf einen Fehler', 'aufmerksam gemacht.'],
      translationRu: 'Вчера гид обратила моё внимание на ошибку.',
      explanationRu: 'Безударные местоимения стремятся в самое начало средней части — даже перед подлежащим-существительным: hat mich die Reiseleiterin …',
    },
    {
      type: 'gap',
      prompt: 'In diesem Sommer haben ___ besonders viele Gäste über den Baulärm beschwert.',
      answers: ['sich'],
      hintRu: 'возвратное местоимение',
      explanationRu: 'Возвратное местоимение sich, как и другие местоимения, обычно стоит в начале средней части, перед подлежащим-существительным: haben sich viele Gäste beschwert.',
    },
    {
      type: 'choice',
      prompt: 'Welche Reihenfolge der Angaben ist neutral (TeKaMoLo)?',
      options: [
        'Wir sind nach Hause gestern langsam wegen des Nebels gefahren.',
        'Wir sind langsam nach Hause wegen des Nebels gestern gefahren.',
        'Wir sind wegen des Nebels nach Hause gestern langsam gefahren.',
        'Wir sind gestern wegen des Nebels langsam nach Hause gefahren.',
      ],
      answer: 3,
      explanationRu: 'Нейтральный порядок обстоятельств: temporal (gestern) – kausal (wegen des Nebels) – modal (langsam) – lokal (nach Hause). Направление (nach Hause) стоит в конце средней части, прямо перед Partizip II.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните предложение со слова «Uns» и используйте коррелят es.',
      prompt: 'Dass das Hotel direkt am Strand liegt, gefällt uns besonders.',
      answers: [
        'Uns gefällt es besonders, dass das Hotel direkt am Strand liegt.',
        'Uns gefällt besonders, dass das Hotel direkt am Strand liegt.',
      ],
      explanationRu: 'Когда придаточное с dass переходит в конец предложения, в средней части появляется коррелят es (здесь он факультативен): Uns gefällt es besonders, dass …',
    },
    {
      type: 'choice',
      prompt: 'Wegen des Streiks konnten wir ___.',
      options: [
        'pünktlich nicht nach Hause fliegen',
        'pünktlich nach Hause nicht fliegen',
        'nicht pünktlich nach Hause fliegen',
        'nach Hause pünktlich nicht fliegen',
      ],
      answer: 2,
      explanationRu: 'nicht стоит перед обстоятельством образа действия (pünktlich) и перед направлением (nach Hause); направление всегда ближе всего к глаголу в конце.',
    },
    {
      type: 'gap',
      prompt: 'Ein Zimmer mit Meerblick – das ist genau das, ___ ich mich im Urlaub am meisten freue.',
      answers: ['worauf'],
      hintRu: 'повторение: относительное местоимение после das',
      explanationRu: 'Повторение (B2, единица 11): после das/alles/etwas относительное местоимение was, а с предлогом — wo(r)- + предлог: sich freuen auf → worauf.',
    },
    {
      type: 'gap',
      prompt: 'Wenn wir früher gebucht ___, hätten wir ein Zimmer mit Meerblick bekommen.',
      answers: ['hätten'],
      hintRu: 'повторение: Konjunktiv II Vergangenheit',
      explanationRu: 'Повторение (B2, единица 2): нереальное условие в прошлом — hätte/wäre + Partizip II: Wenn wir früher gebucht hätten, …',
    },
    {
      type: 'transform',
      instructionRu: 'Замените оба дополнения (den Gästen, die Tickets) местоимениями.',
      prompt: 'Die Reiseleiterin hat den Gästen die Tickets gestern ausgehändigt.',
      answers: ['Die Reiseleiterin hat sie ihnen gestern ausgehändigt.'],
      explanationRu: 'die Tickets → sie (Akk), den Gästen → ihnen (Dat). При двух местоимениях Akkusativ стоит перед Dativ, а обстоятельство gestern — после них.',
    },
  ],
  reading: [
    {
      title: 'Muss Urlaub weit weg sein?',
      textType: 'Meinungstexte',
      texts: [
        {
          label: 'a',
          heading: 'Katrin, 34, Lehrerin aus Kassel',
          body: `Früher bin ich jeden Sommer weit weg geflogen – Thailand, Mexiko, Kanada. Irgendwann ist mir aufgefallen, dass ich von diesen Reisen erschöpfter zurückkam, als ich losgefahren war: lange Flüge, Jetlag, ständig neue Unterkünfte. Seit drei Jahren verbringe ich die Ferien in Deutschland, meistens mit dem Fahrrad. Es überrascht mich immer wieder, wie wenig ich mein eigenes Land kannte. Ein Opfer ist das für mich nicht. Allerdings ärgert es mich, dass eine Woche an der Nordsee inzwischen oft mehr kostet als ein Pauschalurlaub in der Türkei. Da muss die Politik etwas tun, zum Beispiel bei den Bahnpreisen.`,
        },
        {
          label: 'b',
          heading: 'Yusuf, 52, Inhaber eines Reisebüros in Köln',
          body: `In meinem Reisebüro merke ich deutlich, dass sich die Wünsche der Kundschaft verändern. Es fragen mehr Menschen nach Zugreisen und nach Zielen, die man ohne Flugzeug erreicht. Trotzdem halte ich nichts davon, Fernreisen grundsätzlich schlechtzumachen. In vielen Ländern Afrikas und Asiens hängen Millionen Arbeitsplätze am Tourismus. Wenn die Gäste aus Europa wegbleiben, trifft das nicht die Reichen, sondern Kellner, Fahrer und Zimmermädchen. Mein Rat lautet deshalb: lieber seltener weit reisen, dafür aber länger bleiben – drei Wochen statt zehn Tage – und Unterkünfte wählen, die Einheimischen gehören.`,
        },
        {
          label: 'c',
          heading: 'Lea, 23, Studentin aus Leipzig',
          body: `Ich finde es scheinheilig, wenn Leute, die seit Jahrzehnten in die Karibik fliegen, jungen Menschen das Reisen verbieten wollen. Meine Generation hat die Welt doch noch gar nicht gesehen! Natürlich achte ich auf das Klima: Ich esse kaum Fleisch und habe kein Auto. Aber das halbe Jahr in Südamerika nach dem Abitur war die wichtigste Erfahrung meines Lebens. Ich habe Spanisch gelernt, in Gastfamilien gelebt und gemerkt, wie privilegiert wir in Europa sind. Solche Erfahrungen kann man nicht durch ein Wochenende im Harz ersetzen. Ehrlich gesagt geht es mir auf die Nerven, dass Reisen heute ständig moralisch bewertet wird.`,
        },
        {
          label: 'd',
          heading: 'Herbert, 67, Rentner aus Augsburg',
          body: `Als Kind bin ich jeden Sommer mit meinen Eltern an den Bodensee gefahren – mit dem Zug und drei Koffern. Weiter weg ging es nicht, dafür fehlte das Geld. Ich habe das nie als Mangel empfunden. Heute haben meine Frau und ich Zeit und genug Geld, und trotzdem zieht es uns nicht in die Ferne. Es gibt in den Alpen und in Skandinavien so viel zu entdecken, dass ein Leben dafür kaum reicht. Was ich allerdings nicht verstehe: Warum fliegen junge Leute für ein Wochenende nach Barcelona, nur um dort zu feiern? Mit Reisen hat das für mich wenig zu tun.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte a–d. Zu welcher Person passen die Aussagen 1–9? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте тексты a–d. Какому человеку соответствуют высказывания 1–9? Одного человека можно выбирать несколько раз.',
          options: ['Katrin', 'Yusuf', 'Lea', 'Herbert'],
          items: [
            {
              kind: 'match',
              prompt: '1. Diese Person beobachtet, dass sich das Buchungsverhalten der Reisenden wandelt.',
              answer: 1,
              explanationRu: 'Yusuf: «In meinem Reisebüro merke ich deutlich, dass sich die Wünsche der Kundschaft verändern» — больше спрашивают о поездках на поезде.',
            },
            {
              kind: 'match',
              prompt: '2. Diese Person war nach weiten Reisen oft eher müde als erholt.',
              answer: 0,
              explanationRu: 'Katrin: «dass ich von diesen Reisen erschöpfter zurückkam, als ich losgefahren war».',
            },
            {
              kind: 'match',
              prompt: '3. Diese Person stört sich daran, dass Reiseentscheidungen moralisch beurteilt werden.',
              answer: 2,
              explanationRu: 'Lea: «geht es mir auf die Nerven, dass Reisen heute ständig moralisch bewertet wird».',
            },
            {
              kind: 'match',
              prompt: '4. Diese Person hält Kurzreisen mit dem Flugzeug, die nur dem Feiern dienen, für fragwürdig.',
              answer: 3,
              explanationRu: 'Herbert критикует молодых людей, которые летают на выходные в Барселону, «nur um dort zu feiern».',
            },
            {
              kind: 'match',
              prompt: '5. Diese Person weist darauf hin, dass ärmere Länder vom Tourismus wirtschaftlich abhängen.',
              answer: 1,
              explanationRu: 'Yusuf: в Африке и Азии от туризма зависят миллионы рабочих мест; если туристы не приедут, пострадают официанты и водители.',
            },
            {
              kind: 'match',
              prompt: '6. Diese Person findet Urlaub im eigenen Land zu teuer und erwartet politische Maßnahmen.',
              answer: 0,
              explanationRu: 'Katrin: неделя на Северном море стоит дороже турпакета в Турцию; «Da muss die Politik etwas tun».',
            },
            {
              kind: 'match',
              prompt: '7. Diese Person konnte als Kind aus finanziellen Gründen keine weiten Reisen machen.',
              answer: 3,
              explanationRu: 'Herbert: «Weiter weg ging es nicht, dafür fehlte das Geld».',
            },
            {
              kind: 'match',
              prompt: '8. Diese Person empfiehlt, seltener, aber dafür länger zu verreisen.',
              answer: 1,
              explanationRu: 'Yusuf: «lieber seltener weit reisen, dafür aber länger bleiben – drei Wochen statt zehn Tage».',
            },
            {
              kind: 'match',
              prompt: '9. Diese Person betont, dass sie sich in anderen Lebensbereichen klimafreundlich verhält.',
              answer: 2,
              explanationRu: 'Lea: «Ich esse kaum Fleisch und habe kein Auto» — она заботится о климате в других сферах.',
            },
          ],
        },
      ],
    },
    {
      title: 'Mietbedingungen: Ferienwohnungen „Haus Seeblick“',
      textType: 'Regelungstext',
      texts: [
        {
          label: '1',
          body: `Der Mietvertrag kommt zustande, sobald Sie unsere schriftliche Buchungsbestätigung erhalten. Innerhalb von sieben Tagen nach Erhalt ist eine Anzahlung von 30 % des Mietpreises fällig. Die Restzahlung muss spätestens 30 Tage vor der Anreise auf unserem Konto eingegangen sein. Erfolgt die Zahlung nicht fristgerecht, behalten wir uns vor, die Wohnung anderweitig zu vergeben.`,
        },
        {
          label: '2',
          body: `Sie können jederzeit vor Mietbeginn vom Vertrag zurücktreten. Maßgeblich ist der Eingang Ihrer schriftlichen Erklärung. Es fallen folgende Stornogebühren an: bis 60 Tage vor der Anreise 10 %, bis 30 Tage vor der Anreise 50 %, danach 80 % des Mietpreises. Gelingt es uns, die Wohnung für den gebuchten Zeitraum anderweitig zu vermieten, erstatten wir Ihnen die Gebühr abzüglich einer Bearbeitungspauschale von 25 Euro. Wir empfehlen den Abschluss einer Reiserücktrittsversicherung.`,
        },
        {
          label: '3',
          body: `Die Wohnung steht Ihnen am Anreisetag ab 16 Uhr zur Verfügung. Sollten Sie nach 20 Uhr ankommen, bitten wir um eine kurze Nachricht; der Schlüssel wird dann in einem Schlüsseltresor neben der Haustür hinterlegt. Am Abreisetag ist die Wohnung bis 10 Uhr zu räumen. Eine spätere Abreise ist nach Absprache und gegen Aufpreis möglich.`,
        },
        {
          label: '4',
          body: `Strom, Wasser, Heizung, Bettwäsche und Handtücher sind im Mietpreis enthalten. Die Endreinigung wird mit 60 Euro pro Aufenthalt berechnet. Die Kurtaxe von 2,50 Euro pro Person und Nacht (Kinder unter 16 Jahren frei) wird vor Ort bezahlt. Mit der Gästekarte, die Sie im Gegenzug erhalten, nutzen Sie die Busse der Region kostenlos.`,
        },
        {
          label: '5',
          body: `In den Wohnungen 1 und 2 sind Hunde nach vorheriger Anmeldung erlaubt (15 Euro pro Nacht). In allen übrigen Wohnungen ist die Haltung von Tieren nicht gestattet. Im gesamten Haus herrscht Rauchverbot; geraucht werden darf ausschließlich auf den Balkonen. Bei Verstößen stellen wir eine Sonderreinigung in Rechnung.`,
        },
        {
          label: '6',
          body: `Bitte behandeln Sie die Einrichtung pfleglich. Schäden, die während Ihres Aufenthalts entstehen, melden Sie bitte umgehend, damit wir sie vor der Ankunft der nächsten Gäste beheben können. Für Schäden, die durch unsachgemäße Nutzung entstehen, haftet der Mieter. Für Wertsachen, die in der Wohnung abhandenkommen, übernehmen wir keine Haftung.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Mietbedingungen. Welche Überschrift a–h passt zu welchem Abschnitt 1–6? Zwei Überschriften passen nicht.',
          instructionRu: 'Прочитайте условия аренды. Какой заголовок a–h подходит к какому разделу 1–6? Два заголовка лишние.',
          options: [
            'Wann Sie die Wohnung beziehen und verlassen können',
            'Rabatte für Stammgäste und lange Aufenthalte',
            'Wenn Sie die Reise nicht antreten können',
            'Wer für Beschädigungen aufkommt',
            'Kosten, die zusätzlich zum Mietpreis entstehen',
            'Freizeitangebote in der Umgebung',
            'Wie Sie verbindlich reservieren und bezahlen',
            'Tiere und Tabak im Haus',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Abschnitt 1',
              answer: 6,
              explanationRu: 'Раздел 1: договор вступает в силу с подтверждением брони, затем предоплата 30 % и доплата остатка.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 2',
              answer: 2,
              explanationRu: 'Раздел 2: отказ от договора (zurücktreten) и плата за отмену (Stornogebühren).',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 3',
              answer: 0,
              explanationRu: 'Раздел 3: заезд с 16 часов, выезд до 10 часов, поздний выезд за доплату.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 4',
              answer: 4,
              explanationRu: 'Раздел 4: дополнительно оплачиваются финальная уборка (60 евро) и курортный сбор. Ловушка «h»: автобусы упоминаются, но это не программа досуга.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 5',
              answer: 7,
              explanationRu: 'Раздел 5: собаки только в квартирах 1 и 2, курение только на балконах.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 6',
              answer: 3,
              explanationRu: 'Раздел 6: за ущерб от неправильного использования отвечает арендатор (haftet der Mieter).',
            },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Wer zwei Monate vor der Anreise storniert, muss nur einen kleinen Teil des Mietpreises bezahlen.',
              answer: true,
              explanationRu: 'Раздел 2: «bis 60 Tage vor der Anreise 10 %» — это небольшая часть.',
            },
            {
              kind: 'tf',
              statement: 'Gäste, die spät am Abend ankommen, müssen den Schlüssel am nächsten Morgen abholen.',
              answer: false,
              explanationRu: 'Раздел 3: при позднем приезде ключ оставляют в сейфе для ключей у входной двери.',
            },
            {
              kind: 'tf',
              statement: 'Für Kinder unter 16 Jahren muss keine Kurtaxe bezahlt werden.',
              answer: true,
              explanationRu: 'Раздел 4: «Kinder unter 16 Jahren frei».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Interview: Wenn der Urlaub am Flughafen endet',
      kind: 'dialog',
      speakers: { A: 'Moderator Jan Hofer', B: 'Dr. Sabine Krüger, Juristin bei einer Verbraucherzentrale' },
      situation: 'Sie hören im Radio ein Interview mit einer Expertin für Reiserecht.',
      text: `A: Frau Krüger, die Sommerferien beginnen, und mit ihnen leider auch das Chaos an den Flughäfen. Womit haben Sie in Ihrer Beratung am häufigsten zu tun?
B: Ganz klar mit Verspätungen und Annullierungen. Es melden sich jeden Sommer Tausende Menschen bei uns, die nicht wissen, was ihnen zusteht. Viele glauben, sie müssten froh sein, wenn sie überhaupt irgendwann ankommen.
A: Und das stimmt nicht?
B: Nein. Nach dem EU-Recht haben Passagiere bei einer Ankunftsverspätung von mehr als drei Stunden in der Regel Anspruch auf eine Ausgleichszahlung – je nach Flugstrecke zwischen 250 und 600 Euro.
A: Auch bei einem Flug, der nur 29 Euro gekostet hat?
B: Genau, das überrascht viele. Es kommt nicht auf den Ticketpreis an, sondern auf die Entfernung.
A: Gibt es Ausnahmen?
B: Ja, und darüber wird am meisten gestritten. Wenn es sich um sogenannte außergewöhnliche Umstände handelt, muss die Airline nicht zahlen. Gemeint sind etwa Unwetter oder ein Streik beim Flughafenpersonal. Ein technischer Defekt am Flugzeug zählt dagegen meistens nicht dazu – auch wenn sich die Fluggesellschaften gern darauf berufen.
A: Was raten Sie den Betroffenen?
B: Erstens: Lassen Sie sich am Schalter schriftlich bestätigen, warum der Flug verspätet ist. Zweitens: Fotografieren Sie die Anzeigetafel. Und drittens: Bewahren Sie alle Quittungen auf. Wer lange warten muss, hat nämlich zusätzlich Anspruch auf Getränke, Essen und gegebenenfalls ein Hotelzimmer.
A: Viele beauftragen inzwischen Internetportale, die die Entschädigung für sie einfordern. Ist das sinnvoll?
B: Das ist bequem, aber nicht billig. Die Portale behalten oft 25 bis 35 Prozent der Summe ein. Ich empfehle, es zuerst selbst zu versuchen. Auf unserer Website gibt es Musterbriefe, die man nur noch ausfüllen muss. Erst wenn die Airline nicht reagiert, lohnt sich ein Portal oder eine Schlichtungsstelle.
A: Ein anderes Thema: Pauschalreisen. Was können Urlauber tun, wenn das Hotel nicht dem Katalog entspricht?
B: Das Wichtigste ist, den Mangel sofort vor Ort zu melden, bei der Reiseleitung oder direkt beim Veranstalter. Wer erst nach der Rückkehr reklamiert, hat schlechte Karten. Der Veranstalter muss die Chance bekommen, das Problem zu lösen, zum Beispiel durch ein anderes Zimmer.
A: Und wenn das nicht klappt?
B: Dann kann man den Reisepreis mindern. Wie viel, hängt vom Einzelfall ab. Bei Baulärm von morgens bis abends haben Gerichte schon bis zu 40 Prozent zugesprochen.
A: Frau Krüger, vielen Dank für diese hilfreichen Tipps.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы услышите интервью дважды. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Womit beschäftigt sich die Beratung im Sommer vor allem?',
              options: ['Mit verlorenem Gepäck.', 'Mit verspäteten und gestrichenen Flügen.', 'Mit überbuchten Hotels.'],
              answer: 1,
              explanationRu: '«Ganz klar mit Verspätungen und Annullierungen.»',
            },
            {
              kind: 'mc',
              question: 'Wovon hängt die Höhe der Ausgleichszahlung ab?',
              options: ['Vom Preis des Tickets.', 'Von der Fluggesellschaft.', 'Von der Länge der Flugstrecke.'],
              answer: 2,
              explanationRu: '«Es kommt nicht auf den Ticketpreis an, sondern auf die Entfernung.»',
            },
            {
              kind: 'mc',
              question: 'Was gilt laut Frau Krüger bei einem technischen Defekt?',
              options: [
                'Die Airline muss in den meisten Fällen zahlen.',
                'Er gilt immer als außergewöhnlicher Umstand.',
                'Passagiere bekommen nur Essen und Getränke.',
              ],
              answer: 0,
              explanationRu: 'Технический дефект «zählt meistens nicht dazu», т. е. не считается чрезвычайным обстоятельством — авиакомпания обычно платит.',
            },
            {
              kind: 'mc',
              question: 'Was sollen Reisende am Flughafen tun?',
              options: [
                'Sofort ein Internetportal beauftragen.',
                'Sich den Grund der Verspätung schriftlich bestätigen lassen.',
                'Selbst ein Hotelzimmer buchen.',
              ],
              answer: 1,
              explanationRu: '«Lassen Sie sich am Schalter schriftlich bestätigen, warum der Flug verspätet ist.»',
            },
            {
              kind: 'mc',
              question: 'Wie beurteilt Frau Krüger die Internetportale?',
              options: [
                'Sie rät grundsätzlich davon ab.',
                'Sie sind günstiger als ein eigener Brief.',
                'Sie sind praktisch, behalten aber einen Teil des Geldes.',
              ],
              answer: 2,
              explanationRu: '«Das ist bequem, aber nicht billig» — порталы оставляют себе 25–35 %. Она советует сначала попробовать самому, но не отвергает порталы полностью.',
            },
            {
              kind: 'mc',
              question: 'Was ist bei Mängeln einer Pauschalreise am wichtigsten?',
              options: [
                'Den Mangel noch am Urlaubsort melden.',
                'Nach der Rückkehr sofort einen Anwalt einschalten.',
                'Den Reisepreis selbst um 40 Prozent kürzen.',
              ],
              answer: 0,
              explanationRu: '«Das Wichtigste ist, den Mangel sofort vor Ort zu melden.» 40 % — это пример решения суда, а не самостоятельное сокращение.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Wie viel Tourismus verträgt die Stadt?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin Petra Lang',
        B: 'Miriam Vogt, Stadträtin und Bewohnerin der Altstadt',
        C: 'Jörg Haller, Vorsitzender des Hotelverbands',
      },
      situation: 'Sie hören eine Diskussion im Lokalradio über die Folgen des Städtetourismus.',
      text: `A: Willkommen zum „Stadtgespräch“. Unsere Stadt zählt in diesem Jahr erstmals über fünf Millionen Übernachtungen. Für die einen ist das ein Erfolg, für die anderen ein Problem. Bei mir im Studio sind Miriam Vogt, Stadträtin und selbst Bewohnerin der Altstadt, und Jörg Haller vom Hotelverband. Frau Vogt, ist es zu voll geworden?
B: Ganz eindeutig. Ich wohne seit zwanzig Jahren in der Altstadt, und es gibt dort kaum noch normale Geschäfte. Aus der Bäckerei ist ein Souvenirladen geworden, aus der Metzgerei ein Waffelstand. Es geht mir nicht darum, Touristen schlechtzumachen, aber eine Stadt ist nun einmal kein Freizeitpark.
A: Herr Haller, können Sie das nachvollziehen?
C: Natürlich. Aber man muss die Zahlen ins Verhältnis setzen. Der Tourismus sichert in unserer Stadt rund 20.000 Arbeitsplätze. Und das Problem sind nicht die Hotelgäste, die bleiben, essen gehen und Museen besuchen. Das Problem sind die Tagesbesucher von den Kreuzfahrtschiffen und die vielen illegalen Ferienwohnungen.
B: Da stimme ich Ihnen ausnahmsweise zu. Allein in meiner Straße werden sieben Wohnungen dauerhaft an Touristen vermietet. Für Familien ist dort kein Platz mehr.
A: Was schlagen Sie konkret vor, Frau Vogt?
B: Erstens strenge Kontrollen bei Ferienwohnungen, mit hohen Bußgeldern. Zweitens eine Obergrenze für Reisebusse in der Innenstadt. Und drittens sollte die Bettensteuer erhöht werden.
C: Da muss ich widersprechen. Eine höhere Bettensteuer trifft genau die Falschen, nämlich die Übernachtungsgäste. Die Tagestouristen zahlen weiterhin nichts. Wenn schon, dann brauchen wir eine Abgabe für Tagesbesucher, so wie in Venedig.
A: Aber wäre das nicht ein enormer Verwaltungsaufwand? Wer soll das denn kontrollieren?
C: Das ist lösbar. Bei Kreuzfahrtpassagieren könnte die Reederei die Gebühr direkt mit dem Ticket einziehen.
B: Das klingt vernünftig. Mir ist aber noch etwas anderes wichtig: Es reicht nicht, nur über Geld zu reden. Wir müssen die Besucher besser verteilen. Es gibt so viele interessante Viertel außerhalb des Zentrums, die kaum jemand kennt.
C: Richtig, und genau dabei können die Hotels helfen. Wir könnten unseren Gästen Touren in andere Stadtteile empfehlen, statt immer nur den Dom und die Altstadt.
A: Das klingt ja fast nach einer Einigung. Zum Schluss: Wo sehen Sie die Stadt in zehn Jahren?
B: Ich hoffe, dass in der Altstadt wieder Kinder auf der Straße spielen.
C: Und ich hoffe, dass sich unsere Gäste dann nicht mehr wie in einer Warteschlange fühlen, sondern wie Besucher, die willkommen sind.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы услышите дискуссию один раз. Кто что говорит? Соотнесите высказывания.',
          options: ['Moderatorin Petra Lang', 'Miriam Vogt', 'Jörg Haller'],
          items: [
            {
              kind: 'match',
              prompt: '1. Eine Stadt sollte sich nicht in eine Art Vergnügungspark verwandeln.',
              answer: 1,
              explanationRu: 'Vogt: «eine Stadt ist nun einmal kein Freizeitpark».',
            },
            {
              kind: 'match',
              prompt: '2. Gäste, die in der Stadt übernachten, sind nicht die Ursache des Problems.',
              answer: 2,
              explanationRu: 'Haller: «das Problem sind nicht die Hotelgäste» — проблема в однодневных туристах и нелегальных квартирах.',
            },
            {
              kind: 'match',
              prompt: '3. Die Kontrolle einer Gebühr für Tagesbesucher könnte viel Bürokratie verursachen.',
              answer: 0,
              explanationRu: 'Модератор спрашивает: «wäre das nicht ein enormer Verwaltungsaufwand?»',
            },
            {
              kind: 'match',
              prompt: '4. In der eigenen Wohnumgebung werden Wohnungen nur noch an Urlauber vermietet.',
              answer: 1,
              explanationRu: 'Vogt: «Allein in meiner Straße werden sieben Wohnungen dauerhaft an Touristen vermietet.»',
            },
            {
              kind: 'match',
              prompt: '5. Eine höhere Steuer auf Übernachtungen wäre ungerecht.',
              answer: 2,
              explanationRu: 'Haller: «Eine höhere Bettensteuer trifft genau die Falschen.»',
            },
            {
              kind: 'match',
              prompt: '6. Finanzielle Maßnahmen allein reichen nicht aus.',
              answer: 1,
              explanationRu: 'Vogt: «Es reicht nicht, nur über Geld zu reden. Wir müssen die Besucher besser verteilen.»',
            },
          ],
        },
      ],
    },
  ],
};
