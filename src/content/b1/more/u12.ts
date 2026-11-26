import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Weißt du, ___ der Supermarkt heute noch offen hat?',
      options: ['ob', 'wenn', 'dass'],
      answer: 0,
      explanationRu: 'Прямой вопрос «Hat der Supermarkt noch offen?» — да/нет → ob («ли»).',
    },
    {
      type: 'choice',
      prompt: 'Ich möchte gern wissen, ___ Sie mir heute empfehlen.',
      options: ['was', 'ob', 'dass', 'wenn'],
      answer: 0,
      explanationRu: 'Прямой вопрос: «Was empfehlen Sie mir heute?» → W-слово сохраняется: …, was Sie mir heute empfehlen.',
    },
    {
      type: 'choice',
      prompt: 'Können Sie mir sagen, ___ ich die Haferflocken finde?',
      options: ['wo', 'wohin', 'woher'],
      answer: 0,
      explanationRu: 'finden — где? → wo. wohin — куда, woher — откуда.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig geschrieben?',
      options: [
        'Ich möchte wissen, wo die Mensa ist?',
        'Ich möchte wissen, wo die Mensa ist.',
        'Ich möchte wissen wo die Mensa ist.',
      ],
      answer: 1,
      explanationRu: 'Главное предложение — утверждение (Ich möchte wissen), поэтому в конце точка. Перед косвенным вопросом обязательна запятая.',
    },
    {
      type: 'choice',
      prompt: 'Meine Mutter fragt, ___ wir am Sonntag zum Mittagessen kommen.',
      options: ['dass', 'ob', 'wenn', 'als'],
      answer: 1,
      explanationRu: 'Ловушка: после fragen не бывает dass. Вопрос да/нет → ob.',
    },
    {
      type: 'choice',
      prompt: 'Wissen Sie, wann ___?',
      options: ['der Kochkurs anfängt', 'der Kochkurs fängt an', 'fängt der Kochkurs an'],
      answer: 0,
      explanationRu: 'В косвенном вопросе отделяемый глагол стоит в конце целиком: anfängt.',
    },
    {
      type: 'choice',
      prompt: 'Weißt du noch, ___?',
      options: [
        'wo wir letztes Jahr so gut gegessen haben',
        'wo haben wir letztes Jahr so gut gegessen',
        'wo wir haben letztes Jahr so gut gegessen',
      ],
      answer: 0,
      explanationRu: 'Perfekt в придаточном: Partizip II, затем вспомогательный глагол haben в самом конце.',
    },
    {
      type: 'gap',
      prompt: 'Kannst du mir sagen, ___ dieses Gemüse auf Deutsch heißt?',
      answers: ['wie'],
      explanationRu: 'Прямой вопрос: «Wie heißt dieses Gemüse?» → …, wie dieses Gemüse heißt.',
    },
    {
      type: 'gap',
      prompt: 'Ich weiß nicht, ___ Rezept du meinst – das mit Kartoffeln oder das mit Reis?',
      answers: ['welches'],
      hintRu: 'какой (из нескольких)',
      explanationRu: 'Выбор из нескольких → welch-. das Rezept — средний род, Akkusativ: welches Rezept.',
    },
    {
      type: 'gap',
      prompt: 'Die Verkäuferin fragt, ___ ich eine Tüte brauche.',
      answers: ['ob'],
      explanationRu: 'Прямой вопрос «Brauchen Sie eine Tüte?» — да/нет → ob.',
    },
    {
      type: 'gap',
      prompt: 'Darf ich fragen, ___ viel Zucker in diesem Saft ist?',
      answers: ['wie'],
      explanationRu: 'Количество → wie viel. В косвенном вопросе wie viel остаётся в начале придаточного.',
    },
    {
      type: 'gap',
      prompt: 'Sag mir bitte, ___ du heute Lust hast: auf Pizza oder auf Sushi?',
      answers: ['worauf'],
      hintRu: 'на что',
      explanationRu: 'Lust haben auf + Akk. Вопрос о предмете → wo(r) + предлог: Worauf hast du Lust? → …, worauf du Lust hast.',
    },
    {
      type: 'gap',
      prompt: 'Wissen Sie, ob man diese Pilze roh essen ___?',
      answers: ['kann', 'darf'],
      hintRu: 'können',
      explanationRu: 'Модальный глагол в косвенном вопросе стоит в самом конце, после инфинитива: essen kann.',
    },
    {
      type: 'gap',
      prompt: 'Weißt du, wo diese Tomaten angebaut ___?',
      answers: ['werden', 'wurden'],
      hintRu: 'пассив',
      explanationRu: 'Повторение юнита 9: пассив (werden + Partizip II). В придаточном werden стоит в конце: angebaut werden.',
    },
    {
      type: 'gap',
      prompt: '___ Sie mir bitte sagen, wo hier die Toiletten sind?',
      answers: ['Könnten', 'Würden'],
      hintRu: 'вежливо, Konjunktiv II',
      explanationRu: 'Повторение юнита 8: Konjunktiv II делает просьбу особенно вежливой: Könnten Sie mir sagen, …?',
    },
    {
      type: 'gap',
      prompt: 'Ich weiß nicht, ob Vollkornbrot wirklich ___ ist als Weißbrot.',
      answers: ['gesünder'],
      hintRu: 'gesund',
      explanationRu: 'Повторение юнита 7: сравнительная степень gesund → gesünder (с умлаутом) + als.',
    },
    {
      type: 'order',
      words: ['Können', 'Sie', 'mir', 'sagen,', 'wie', 'lange', 'die', 'Nudeln', 'kochen', 'müssen?'],
      translationRu: 'Не подскажете, сколько времени нужно варить макароны?',
      explanationRu: 'wie lange — вопросительная группа в начале придаточного; модальный глагол müssen стоит последним.',
    },
    {
      type: 'order',
      words: ['Ob', 'das', 'Restaurant', 'heute', 'geöffnet', 'hat,', 'weiß', 'ich', 'leider', 'nicht.'],
      translationRu: 'Открыт ли ресторан сегодня, я, к сожалению, не знаю.',
      explanationRu: 'Если косвенный вопрос стоит первым, он занимает первое место, и главное предложение начинается с глагола: …, weiß ich …',
    },
    {
      type: 'transform',
      instructionRu: 'Передайте вопрос официанта, начав с «Der Kellner fragt, …» (вопрос обращён к вам и вашему другу).',
      prompt: '„Haben Sie schon gewählt?“',
      answers: ['Der Kellner fragt, ob wir schon gewählt haben.', 'Der Kellner fragt, ob Sie schon gewählt haben.'],
      explanationRu: 'Вопрос да/нет → ob; вспомогательный глагол haben уходит в конец. Обычно меняют лицо: Sie → wir.',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте вежливый вопрос, начав с «Wissen Sie zufällig, …?».',
      prompt: 'Mit wem hat Anna das Café eröffnet?',
      answers: ['Wissen Sie zufällig, mit wem Anna das Café eröffnet hat?'],
      explanationRu: 'Предлог остаётся перед вопросительным словом (mit wem), а вспомогательный глагол hat уходит в конец после Partizip II.',
    },
  ],
  reading: [
    {
      title: 'Rund ums Essen: Anzeigen',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Kochschule „Pfeffer & Salz“',
          body: 'Vegane Küche für Einsteiger: vier Abende, immer mittwochs von 18 bis 21 Uhr. Wir kochen mit Hülsenfrüchten, Tofu und frischem Gemüse – ganz ohne Fleisch, Eier und Milchprodukte. 120 Euro inklusive aller Zutaten.',
        },
        {
          label: 'b',
          heading: 'Restaurant „Seeblick“',
          body: 'Sonntagsbrunch von 10 bis 14 Uhr mit großem Buffet und Blick auf den See. Kinder unter sechs Jahren essen kostenlos. Reservierung empfohlen.',
        },
        {
          label: 'c',
          heading: 'Ernährungsberatung Dr. Maier',
          body: 'Sie möchten abnehmen, oder Sie haben eine Lebensmittelunverträglichkeit und wissen nicht, was Sie noch essen dürfen? Wir beraten Sie individuell. Die Kosten werden teilweise von der Krankenkasse übernommen.',
        },
        {
          label: 'd',
          heading: 'Hofladen Sonnenhof',
          body: 'Frische Eier, Milch, Käse und Gemüse direkt vom Bauernhof. Dienstag bis Samstag, 8 bis 18 Uhr. Ab Juni: Erdbeeren selbst pflücken!',
        },
        {
          label: 'e',
          heading: '„Teller statt Tonne“',
          body: 'Foodsharing-Treff im Stadtteilzentrum: Jeden Freitag um 17 Uhr verteilen wir kostenlos Lebensmittel, die Supermärkte nicht mehr verkaufen, die aber noch gut sind. Jeder darf kommen – bitte eigene Taschen mitbringen.',
        },
        {
          label: 'f',
          heading: 'Lieferdienst „FrischBox“',
          body: 'Jede Woche bringen wir Ihnen eine Kochbox mit Rezepten und allen Zutaten nach Hause. Die Gerichte sind in 30 Minuten fertig. Ihre erste Box ist 50 Prozent günstiger!',
        },
        {
          label: 'g',
          heading: 'Café Glückskind',
          body: 'Familienfreundliches Café mit großer Spielecke, glutenfreien Kuchen und laktosefreier Milch. Wir organisieren auch Kindergeburtstage – sprechen Sie uns an!',
        },
        {
          label: 'h',
          heading: 'Backen wie die Profis',
          body: 'Backkurs für Kinder von 8 bis 12 Jahren in der Bäckerei Krüger: samstags von 10 bis 12 Uhr. Brezeln und Brötchen selbst backen und mit nach Hause nehmen. 15 Euro pro Kind.',
        },
        {
          label: 'i',
          heading: 'Weingut Lenz',
          body: 'Weinprobe mit fünf Weinen aus der Region und kleinen Snacks. Freitags ab 19 Uhr. Nur für Gäste ab 18 Jahren.',
        },
        {
          label: 'j',
          heading: 'Mensa am Campus',
          body: 'Auch Gäste sind bei uns willkommen! Tagesgericht ab 5,90 Euro, jeden Tag mit einem veganen Gericht. Montag bis Freitag, 11:30 bis 14 Uhr.',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–7 und die Anzeigen a–j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–7 и объявления a–j. Какое объявление подходит к какой ситуации? Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет.',
          options: [
            'Kochschule „Pfeffer & Salz“',
            'Restaurant „Seeblick“',
            'Ernährungsberatung Dr. Maier',
            'Hofladen Sonnenhof',
            '„Teller statt Tonne“',
            'Lieferdienst „FrischBox“',
            'Café Glückskind',
            'Backen wie die Profis',
            'Weingut Lenz',
            'Mensa am Campus',
          ],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihre Kollegin darf seit Kurzem kein Gluten mehr essen und weiß nicht, wie sie sich jetzt ernähren soll.', answer: 2, explanationRu: 'c: консультация по питанию при непереносимости продуктов. Кафе (g) с безглютеновыми пирогами не объясняет, как питаться.' },
            { kind: 'match', prompt: 'Ihr Nachbar hat wenig Geld und findet es schlimm, wenn gutes Essen weggeworfen wird.', answer: 4, explanationRu: 'e: бесплатная раздача продуктов, которые супермаркеты больше не продают.' },
            { kind: 'match', prompt: 'Sie möchten lernen, wie man ganz ohne tierische Produkte kocht.', answer: 0, explanationRu: 'a: курс веганской кухни — без мяса, яиц и молочных продуктов.' },
            { kind: 'match', prompt: 'Ihr zehnjähriger Sohn möchte am Wochenende etwas Praktisches lernen.', answer: 7, explanationRu: 'h: кулинарный курс для детей 8–12 лет по субботам.' },
            { kind: 'match', prompt: 'Sie arbeiten bis spät und möchten abends frisch kochen, aber keine Zeit mit Einkaufen verlieren.', answer: 5, explanationRu: 'f: доставка наборов со всеми ингредиентами и рецептами на дом.' },
            { kind: 'match', prompt: 'Ihre Freundin sucht einen Ort für den fünften Geburtstag ihrer Tochter.', answer: 6, explanationRu: 'g: кафе для семей с игровым уголком, организует детские дни рождения.' },
            { kind: 'match', prompt: 'Sie möchten mit Freunden einen Kochkurs für italienische Küche besuchen.', answer: -1, explanationRu: 'Нет подходящего объявления: кулинарный курс (a) — только веганская кухня, а детский курс (h) — выпечка для детей.' },
          ],
        },
      ],
    },
    {
      title: 'Regeln für die Gemeinschaftsküche',
      textType: 'Hausordnung',
      texts: [
        {
          heading: 'Studentenwohnheim Lindenstraße – Regeln für die Gemeinschaftsküche',
          body: `Liebe Bewohnerinnen und Bewohner,
damit sich alle in unserer Gemeinschaftsküche wohlfühlen, bitten wir Sie, folgende Regeln zu beachten:

1. Öffnungszeiten: Die Küche ist täglich von 6 bis 23 Uhr geöffnet. Nach 23 Uhr darf aus Rücksicht auf die Nachbarzimmer nicht mehr gekocht werden.

2. Sauberkeit: Bitte spülen Sie Ihr Geschirr direkt nach dem Essen. Herd und Arbeitsflächen müssen nach dem Kochen sauber gemacht werden. Geschirr, das länger als 24 Stunden im Spülbecken steht, wird vom Hausmeister entfernt.

3. Kühlschrank: Jedes Zimmer hat ein eigenes Fach. Bitte schreiben Sie Ihren Namen und das Datum auf alle Lebensmittel. Jeden Freitagabend wird der Kühlschrank kontrolliert: Abgelaufene oder unbeschriftete Lebensmittel werden weggeworfen. Wer verreist, nimmt seine Lebensmittel mit oder schenkt sie den Nachbarn.

4. Müll: Bitte trennen Sie Bio-, Papier-, Verpackungs- und Restmüll. Die Mülleimer werden von den Bewohnern nach einem Plan geleert. Den aktuellen Plan finden Sie an der Küchentür.

5. Sicherheit: Lassen Sie Herd und Backofen nie ohne Aufsicht. Bei Rauch öffnen Sie bitte sofort das Fenster, denn der Feuermelder reagiert sehr empfindlich. Ein Fehlalarm durch Unachtsamkeit kostet 150 Euro.

6. Gemeinsame Abende: Am ersten Mittwoch im Monat findet ein internationaler Kochabend statt. Wer mitkochen möchte, trägt sich in die Liste am Schwarzen Brett ein.

Haben Sie Fragen? Dann wenden Sie sich bitte an Ihre Etagensprecherin oder an die Hausverwaltung.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was passiert mit Geschirr, das länger als einen Tag im Spülbecken steht?',
              options: ['Der Hausmeister räumt es weg.', 'Der Besitzer muss 150 Euro bezahlen.', 'Die Etagensprecherin spült es.'],
              answer: 0,
              explanationRu: 'Пункт 2: «…wird vom Hausmeister entfernt». 150 евро — штраф за ложную пожарную тревогу.',
            },
            {
              kind: 'mc',
              question: 'Was müssen die Bewohner auf ihre Lebensmittel im Kühlschrank schreiben?',
              options: ['den Preis', 'ihren Namen und das Datum', 'ihre Zimmernummer'],
              answer: 1,
              explanationRu: 'Пункт 3: «Bitte schreiben Sie Ihren Namen und das Datum auf alle Lebensmittel».',
            },
            {
              kind: 'mc',
              question: 'Wo erfährt man, wann man den Müll wegbringen muss?',
              options: ['bei der Hausverwaltung', 'am Schwarzen Brett', 'an der Küchentür'],
              answer: 2,
              explanationRu: 'Пункт 4: «Den aktuellen Plan finden Sie an der Küchentür». На доске объявлений — список для кулинарного вечера.',
            },
            {
              kind: 'mc',
              question: 'Wann muss ein Bewohner 150 Euro bezahlen?',
              options: [
                'wenn er nach 23 Uhr kocht',
                'wenn er aus Unachtsamkeit einen Feueralarm auslöst',
                'wenn er nicht am internationalen Kochabend teilnimmt',
              ],
              answer: 1,
              explanationRu: 'Пункт 5: «Ein Fehlalarm durch Unachtsamkeit kostet 150 Euro».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Durchsage im Supermarkt',
      kind: 'monolog',
      situation: 'Sie hören eine Durchsage im Supermarkt.',
      text: `Liebe Kundinnen und Kunden, herzlich willkommen bei Frischmarkt! Heute ist bei uns Aktionstag „Regional genießen“: An unserem Stand neben der Bäckerei können Sie bis 18 Uhr kostenlos Käse und Apfelsaft von Bauernhöfen aus der Region probieren. Außerdem bekommen Sie heute auf alle Bio-Milchprodukte zwanzig Prozent Rabatt. Und noch ein Hinweis: Unsere Fischtheke ist heute wegen einer Reparatur leider geschlossen. Frischen Fisch finden Sie aber verpackt im Kühlregal in Gang sieben. Wir wünschen Ihnen einen angenehmen Einkauf!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Die Fischtheke ist heute geöffnet.', answer: false, explanationRu: '«Unsere Fischtheke ist heute wegen einer Reparatur leider geschlossen».' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist heute billiger als sonst?',
              options: ['Käse von Bauernhöfen aus der Region', 'Bio-Milchprodukte', 'verpackter Fisch'],
              answer: 1,
              explanationRu: 'Скидка 20 % — на все биомолочные продукты. Сыр из региона можно только бесплатно попробовать.',
            },
          ],
        },
      ],
    },
    {
      title: 'Treffen auf dem Wochenmarkt',
      kind: 'dialog',
      speakers: { A: 'Jana', B: 'Tim' },
      situation: 'Sie hören ein Gespräch zwischen zwei Bekannten auf dem Wochenmarkt.',
      text: `A: Tim! Hallo! Was machst du denn hier auf dem Markt? Ich dachte, du kaufst immer im Supermarkt ein.
B: Hallo Jana! Ja, früher schon. Aber seit zwei Monaten versuche ich, mich gesünder zu ernähren. Und das Gemüse hier ist einfach frischer.
A: Ach, wirklich? Was ist denn passiert?
B: Na ja, mein Arzt hat gesagt, dass mein Cholesterin zu hoch ist. Da habe ich mich gefragt, woran das liegt. Und dann habe ich gemerkt: Ich habe jeden Mittag in der Kantine Schnitzel oder Currywurst gegessen und abends meistens eine Pizza beim Lieferdienst bestellt.
A: Oh je. Und jetzt?
B: Jetzt koche ich abends selbst und nehme mir am nächsten Tag etwas davon mit ins Büro. Fleisch esse ich nur noch am Wochenende.
A: Respekt! Und schmeckt dir das?
B: Am Anfang war es schwer, ehrlich gesagt. Aber inzwischen probiere ich gern neue Rezepte aus. Gestern habe ich zum ersten Mal ein Curry mit Kichererbsen gemacht – das war köstlich!
A: Das klingt toll. Du, ich gebe am Samstag ein kleines Abendessen für ein paar Freunde. Hast du Lust zu kommen?
B: Sehr gern! Soll ich etwas mitbringen?
A: Vielleicht einen Nachtisch? Lisa ist Veganerin, und Murat isst kein Schweinefleisch. Ich weiß ehrlich gesagt noch nicht, was ich koche.
B: Dann mache ich einen Obstsalat, der passt für alle. Weißt du schon, um wie viel Uhr wir anfangen?
A: Um sieben. Ach, und kannst du Lisa fragen, ob sie dich mitnimmt? Sie wohnt bei dir um die Ecke und kommt mit dem Auto.
B: Klar, mache ich. Dann bis Samstag!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слышите разговор один раз. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Tim kauft schon immer auf dem Markt ein.', answer: false, explanationRu: 'Раньше он покупал в супермаркете, на рынок ходит только последние два месяца.' },
            { kind: 'tf', statement: 'Tim hat seine Ernährung nach einem Gespräch mit seinem Arzt geändert.', answer: true, explanationRu: 'Врач сказал, что у него слишком высокий холестерин.' },
            { kind: 'tf', statement: 'Früher hat Tim abends oft Essen bestellt.', answer: true, explanationRu: '«…abends meistens eine Pizza beim Lieferdienst bestellt».' },
            { kind: 'tf', statement: 'Tim isst heute überhaupt kein Fleisch mehr.', answer: false, explanationRu: 'Мясо он ест только по выходным.' },
            { kind: 'tf', statement: 'Das Kichererbsen-Curry hat Tim nicht geschmeckt.', answer: false, explanationRu: '«…das war köstlich!»' },
            { kind: 'tf', statement: 'Jana weiß schon genau, was sie am Samstag kocht.', answer: false, explanationRu: '«Ich weiß ehrlich gesagt noch nicht, was ich koche».' },
            { kind: 'tf', statement: 'Tim soll mit Lisa zusammen zum Abendessen fahren.', answer: true, explanationRu: 'Яна просит Тима спросить Лизу, не подвезёт ли она его на машине.' },
          ],
        },
      ],
    },
  ],
};
