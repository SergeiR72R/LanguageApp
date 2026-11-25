import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das ist die Reiseleiterin, ___ uns gestern die Altstadt gezeigt hat.',
      options: ['die', 'der', 'den', 'dem'],
      answer: 0,
      explanationRu: 'Род — по слову die Reiseleiterin (ж. р.), падеж — по роли в придаточном: она показала → подлежащее → Nominativ: die.',
    },
    {
      type: 'choice',
      prompt: 'Die Wanderschuhe, ___ ich mir gekauft habe, sind sehr bequem.',
      options: ['die', 'den', 'denen', 'der'],
      answer: 0,
      explanationRu: 'die Wanderschuhe — множественное число; в придаточном это прямое дополнение (ich habe sie gekauft) → Akkusativ Plural: die.',
    },
    {
      type: 'choice',
      prompt: 'Die Touristen, ___ ich den Weg zum Bahnhof erklärt habe, kamen aus Japan.',
      options: ['die', 'den', 'denen', 'der'],
      answer: 2,
      explanationRu: 'jemandem etwas erklären → Dativ. Dativ Plural относительного местоимения — denen (не den!).',
    },
    {
      type: 'choice',
      prompt: 'Wir übernachten in einer kleinen Pension, ___ direkt am See liegt.',
      options: ['wo', 'der', 'die', 'das'],
      answer: 2,
      explanationRu: 'Пансион сам лежит у озера → относительное местоимение — подлежащее придаточного: die Pension → die. wo заменяет только «предлог + местоимение» (in der), а не подлежащее.',
    },
    {
      type: 'choice',
      prompt: 'Das Schönste, ___ ich im Urlaub erlebt habe, war die Fahrt mit dem Heißluftballon.',
      options: ['das', 'was', 'dem', 'wo'],
      answer: 1,
      explanationRu: 'После субстантивированного превосходного прилагательного (das Schönste, das Beste) так же, как после alles, nichts, etwas, употребляется was.',
    },
    {
      type: 'choice',
      prompt: 'Der Urlaub, ___ ich mich schon so lange freue, beginnt endlich morgen.',
      options: ['auf den', 'auf dem', 'über den', 'an den'],
      answer: 0,
      explanationRu: 'Повторение юнита 4: sich freuen auf + Akk (ждать с радостью). Предлог стоит перед местоимением, падеж определяет предлог: auf den Urlaub → auf den.',
    },
    {
      type: 'gap',
      prompt: 'Wie heißt noch mal das Hotel, ___ ihr letztes Jahr gewohnt habt?',
      answers: ['in dem', 'wo'],
      explanationRu: 'wohnen in + Dativ (где?) → in dem (das Hotel). Для места можно сказать и wo.',
    },
    {
      type: 'gap',
      prompt: 'Die Kinder, ___ wir im Zug kennengelernt haben, waren sehr lustig.',
      answers: ['die'],
      explanationRu: 'Мы познакомились с ними → прямое дополнение, Akkusativ Plural: die.',
    },
    {
      type: 'gap',
      prompt: 'Der Kollege, ___ ich meine Kamera geliehen habe, macht eine Safari in Kenia.',
      answers: ['dem'],
      explanationRu: 'jemandem etwas leihen → Dativ. der Kollege → dem.',
    },
    {
      type: 'gap',
      prompt: 'Im Souvenirladen gab es nichts, ___ uns wirklich gefallen hat.',
      answers: ['was'],
      explanationRu: 'После nichts (alles, etwas, vieles) относительное местоимение — was.',
    },
    {
      type: 'gap',
      prompt: 'Die Gastfamilie, bei ___ ich in Dublin gewohnt habe, hatte drei Hunde.',
      answers: ['der'],
      explanationRu: 'bei + Dativ; die Gastfamilie — ж. р. → bei der.',
    },
    {
      type: 'gap',
      prompt: 'Unser Zug hatte zwei Stunden Verspätung, ___ uns sehr geärgert hat.',
      answers: ['was'],
      explanationRu: 'Придаточное относится не к одному слову, а ко всему предложению (то, что поезд опоздал) → was.',
    },
    {
      type: 'gap',
      prompt: 'Das ist die Insel, auf ___ wir nächsten Sommer fahren wollen.',
      answers: ['die'],
      explanationRu: 'Повторение юнита 2: fahren — куда? → auf + Akkusativ: auf die Insel. Сравните: die Insel, auf der wir waren (где? → Dativ).',
    },
    {
      type: 'order',
      words: ['Die', 'Stadt,', 'in', 'der', 'ich', 'geboren', 'bin,', 'liegt', 'an', 'der', 'Ostsee.'],
      translationRu: 'Город, в котором я родился, находится на Балтийском море.',
      explanationRu: 'Относительное придаточное стоит в середине и выделяется запятыми с двух сторон; в нём глагол bin — в конце. Затем главное предложение продолжается глаголом liegt.',
    },
    {
      type: 'order',
      words: ['Ist', 'das', 'der', 'Bus,', 'der', 'zum', 'Flughafen', 'fährt?'],
      translationRu: 'Это автобус, который едет в аэропорт?',
      explanationRu: 'der Bus — подлежащее придаточного → der. Глагол fährt — в конце придаточного.',
    },
    {
      type: 'order',
      words: ['Wir', 'fahren', 'nach', 'Wien,', 'wo', 'wir', 'uns', 'vor', 'zehn', 'Jahren', 'kennengelernt', 'haben.'],
      translationRu: 'Мы едем в Вену, где мы познакомились десять лет назад.',
      explanationRu: 'После названий городов используется wo. Повторение: перфект возвратного глагола в придаточном — kennengelernt haben в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините в одно предложение: второе предложение сделайте относительным придаточным к «Die Wanderkarte».',
      prompt: 'Die Wanderkarte war leider falsch. Ich habe sie am Kiosk gekauft.',
      answers: ['Die Wanderkarte, die ich am Kiosk gekauft habe, war leider falsch.'],
      explanationRu: 'sie (Akk) → die. Придаточное ставится сразу после слова, к которому относится, глагол habe — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью относительного местоимения.',
      prompt: 'Das sind meine Cousins. Ich habe ihnen Postkarten aus Rom geschickt.',
      answers: ['Das sind meine Cousins, denen ich Postkarten aus Rom geschickt habe.'],
      explanationRu: 'ihnen — Dativ Plural → относительное местоимение denen.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью относительного местоимения с предлогом.',
      prompt: 'Das ist der Ausflug. Ich habe dir von dem Ausflug erzählt.',
      answers: ['Das ist der Ausflug, von dem ich dir erzählt habe.'],
      explanationRu: 'erzählen von + Dativ → von dem. Предлог стоит в начале придаточного, перед местоимением.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения: замените darüber относительным местоимением с предлогом.',
      prompt: 'Das ist das Problem. Wir haben uns im Hotel darüber beschwert.',
      answers: ['Das ist das Problem, über das wir uns im Hotel beschwert haben.'],
      explanationRu: 'sich beschweren über + Akk; das Problem — ср. р. → über das. В придаточном вспомогательный глагол haben — в самом конце.',
    },
  ],
  reading: [
    {
      title: 'Reiseanzeigen',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Ferienwohnung „Dünenblick“ auf Rügen',
          body: 'Gemütliche Ferienwohnung für 2–4 Personen, nur 200 m vom Strand. Haustiere sind herzlich willkommen! Mindestaufenthalt: 7 Nächte.',
        },
        {
          label: 'b',
          heading: 'Jugendherberge Berchtesgaden',
          body: 'Mehrbettzimmer ab 29 € pro Nacht inklusive Frühstück. Geführte Bergwanderungen für Gruppen. Ideal für Schulklassen und Vereine!',
        },
        {
          label: 'c',
          heading: 'Wien entdecken',
          body: '3 Tage Wien mit Bahnfahrt ab München, Übernachtung im 3-Sterne-Hotel und Stadtführung. Ab 299 € pro Person.',
        },
        {
          label: 'd',
          heading: 'Radverleih Bodensee',
          body: 'E-Bikes und Tourenräder ab 15 € pro Tag. Unser Service: Wir bringen Ihr Gepäck zum nächsten Hotel, und Sie fahren ganz entspannt ohne Taschen.',
        },
        {
          label: 'e',
          heading: 'Sprachreisen Malta',
          body: 'Englisch lernen und Sonne tanken: zwei Wochen Sprachkurs mit Unterkunft in einer Gastfamilie. Für Erwachsene ab 18 Jahren.',
        },
        {
          label: 'f',
          heading: 'Mitfahrgelegenheit Köln – Berlin',
          body: 'Ich fahre jeden Freitag um 16 Uhr von Köln nach Berlin und am Sonntagabend zurück. 2 Plätze frei, 25 € pro Person und Strecke. Nichtraucher bevorzugt.',
        },
        {
          label: 'g',
          heading: 'Last Minute Mallorca',
          body: 'Eine Woche All-inclusive im 4-Sterne-Hotel, Flug ab Frankfurt. Nur noch wenige Plätze – jetzt für 499 € buchen!',
        },
        {
          label: 'h',
          heading: 'Campingplatz Seeblick',
          body: 'Stellplätze für Zelte und Wohnmobile direkt am Ufer. Kanuverleih, Kiosk und Kinderprogramm im Juli und August.',
        },
        {
          label: 'i',
          heading: 'Gemütlich wandern im Schwarzwald',
          body: 'Wanderreise für Gäste ab 60: kurze Etappen auf flachen Wegen, ohne steile Anstiege. Ihr Gepäck wird jeden Tag ins nächste Hotel gebracht.',
        },
        {
          label: 'j',
          heading: 'Reiserücktrittsversicherung',
          body: 'Sie werden vor der Reise krank und können nicht fahren? Wir erstatten Ihnen die Stornokosten. Abschluss bis 30 Tage vor Reisebeginn möglich.',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–7 und die Anzeigen a–j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–7 и объявления a–j. Какое объявление подходит к какой ситуации? Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет.',
          options: [
            'Ferienwohnung „Dünenblick“ auf Rügen',
            'Jugendherberge Berchtesgaden',
            'Wien entdecken',
            'Radverleih Bodensee',
            'Sprachreisen Malta',
            'Mitfahrgelegenheit Köln – Berlin',
            'Last Minute Mallorca',
            'Campingplatz Seeblick',
            'Gemütlich wandern im Schwarzwald',
            'Reiserücktrittsversicherung',
          ],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Familie Schulz möchte eine Woche am Meer verbringen und ihren Hund mitnehmen.', answer: 0, explanationRu: 'a: квартира в 200 м от пляжа, животные приветствуются, минимум 7 ночей.' },
            { kind: 'match', prompt: 'Ein Lehrer sucht eine günstige Unterkunft in den Bergen für seine Klasse.', answer: 1, explanationRu: 'b: молодёжная турбаза в горах, «Ideal für Schulklassen».' },
            { kind: 'match', prompt: 'Ihre Großeltern, die beide über 70 sind, wandern gern, aber nicht mehr steil bergauf. Ihre Koffer möchten sie nicht selbst tragen.', answer: 8, explanationRu: 'i: для гостей от 60 лет, ровные дороги, багаж перевозят.' },
            { kind: 'match', prompt: 'Ein Freund, der kein Auto hat, möchte am Wochenende günstig von Köln nach Berlin fahren.', answer: 5, explanationRu: 'f: попутка из Кёльна в Берлин по пятницам, 25 евро.' },
            { kind: 'match', prompt: 'Ihre Kollegin hat eine teure Reise gebucht und hat Angst, dass sie vorher krank wird.', answer: 9, explanationRu: 'j: страховка от отмены поездки — возвращает расходы при болезни.' },
            { kind: 'match', prompt: 'Ein Paar möchte eine Radtour am See machen, aber ohne schwere Taschen am Fahrrad.', answer: 3, explanationRu: 'd: прокат велосипедов на Боденском озере, багаж везут в следующий отель.' },
            { kind: 'match', prompt: 'Ihre Schwester möchte im Urlaub einen Spanischkurs machen.', answer: -1, explanationRu: 'Нет подходящего объявления: на Мальте (e) учат английский, а на Майорке (g) нет языкового курса.' },
          ],
        },
      ],
    },
    {
      title: 'Urlaub ohne Handy?',
      textType: 'Leserbriefe',
      texts: [
        {
          heading: 'Einleitung',
          body: 'Immer mehr Hotels bieten einen „Digital-Detox-Urlaub“ an: Die Gäste geben ihr Handy an der Rezeption ab und bekommen es erst bei der Abreise zurück. Wir haben unsere Leserinnen und Leser gefragt: Was halten Sie von einem Urlaub ohne Handy?',
        },
        {
          label: 'Katrin, 38, Hannover',
          body: 'Letzten Sommer habe ich mein Handy zum ersten Mal zu Hause gelassen. Die ersten zwei Tage waren komisch, ich habe ständig in meine Tasche gegriffen. Aber dann habe ich mich so gut erholt wie seit Jahren nicht mehr. Ich habe Bücher gelesen, die schon ewig auf meinem Nachttisch lagen. Das mache ich jetzt jedes Jahr.',
        },
        {
          label: 'Florian, 27, München',
          body: 'Für mich ist das Handy auf Reisen das wichtigste Gepäckstück. Darauf habe ich meine Tickets, die Karten und die Übersetzungs-App, mit der ich mich in Japan überhaupt verständigen konnte. Ohne Handy zu reisen, ist für mich wie Reisen mit verbundenen Augen. Nein danke!',
        },
        {
          label: 'Ahmed, 45, Dortmund',
          body: 'Ich bin selbstständig und habe einen kleinen Handwerksbetrieb. Wenn ich eine Woche lang nicht erreichbar bin, rufen meine Kunden einfach die Konkurrenz an. Ich checke im Urlaub also jeden Morgen meine Nachrichten. Ein Hotel, in dem ich mein Handy abgeben muss, würde ich nie buchen.',
        },
        {
          label: 'Gisela, 64, Erfurt',
          body: 'Früher sind wir mit einer Straßenkarte durch Italien gefahren und haben Einheimische nach dem Weg gefragt. Dabei haben wir die nettesten Menschen kennengelernt. Heute sitzen meine Enkel beim Abendessen im Restaurant und schauen nur auf ihre Bildschirme. Ein Urlaub ohne Handy täte allen gut.',
        },
        {
          label: 'Julia, 31, Kiel',
          body: 'Eigentlich bin ich ein echter Handy-Mensch – im Alltag habe ich es immer in der Hand. Aber genau deshalb schalte ich es im Urlaub inzwischen komplett aus. Nach zwei Wochen ohne Nachrichten und Social Media fühle ich mich wie neu. Das kann ich wirklich jedem empfehlen.',
        },
        {
          label: 'Bernd, 52, Leipzig',
          body: 'Ich verstehe die Idee, und für manche Menschen ist das sicher gut. Aber wir reisen mit zwei kleinen Kindern, und wenn etwas passiert, müssen wir schnell einen Arzt finden oder Hilfe rufen können. Deshalb kommt ein Urlaub ganz ohne Handy für unsere Familie nicht infrage.',
        },
        {
          label: 'Lea, 24, Jena',
          body: 'Im Frühling war ich eine Woche in einem Kloster, in dem es kein WLAN gibt. Am Anfang hatte ich Angst, dass ich mich langweile. Aber es war die ruhigste und schönste Woche des ganzen Jahres. Ich finde, jeder sollte so etwas einmal ausprobieren.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Leserbriefe. Ist die Person für einen Urlaub ohne Handy?',
          instructionRu: 'Прочитайте письма читателей. Выступает ли человек за отпуск без телефона?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            { kind: 'tf', statement: 'Katrin', answer: true, explanationRu: 'Без телефона она отдохнула лучше, чем за многие годы, и теперь делает так каждый год.' },
            { kind: 'tf', statement: 'Florian', answer: false, explanationRu: 'Телефон для него — главный предмет багажа: билеты, карты, переводчик. «Nein danke!»' },
            { kind: 'tf', statement: 'Ahmed', answer: false, explanationRu: 'Как предприниматель он должен быть на связи и никогда не забронировал бы такой отель.' },
            { kind: 'tf', statement: 'Gisela', answer: true, explanationRu: 'Вспоминает поездки с бумажной картой и считает, что отпуск без телефона пошёл бы всем на пользу.' },
            { kind: 'tf', statement: 'Julia', answer: true, explanationRu: 'Ловушка: в обычной жизни она не выпускает телефон из рук, но в отпуске полностью его выключает и всем советует.' },
            { kind: 'tf', statement: 'Bernd', answer: false, explanationRu: 'Ловушка: понимает идею, но с маленькими детьми отпуск без телефона «nicht infrage» (исключён).' },
            { kind: 'tf', statement: 'Lea', answer: true, explanationRu: 'Неделя в монастыре без Wi-Fi была самой спокойной и красивой; советует попробовать всем.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Durchsage im ICE',
      kind: 'monolog',
      situation: 'Sie sitzen im Zug und hören eine Durchsage.',
      text: `Sehr geehrte Fahrgäste, hier spricht Ihr Zugchef. Wegen einer Signalstörung hat unser ICE nach Hamburg, der planmäßig um 14:12 Uhr in Hannover ankommen sollte, zurzeit etwa 25 Minuten Verspätung. Eine wichtige Information für alle Reisenden, die in Hannover nach Bremen umsteigen möchten: Der Regionalexpress, der normalerweise um 14:20 Uhr abfährt, kann heute leider nicht auf uns warten. Bitte nehmen Sie den nächsten Zug um 14:50 Uhr von Gleis 7. Ihre Fahrkarte gilt selbstverständlich auch für diesen Zug. Unser Bordrestaurant, das Sie in Wagen 9 finden, bietet allen Fahrgästen als kleine Entschuldigung ein kostenloses Getränk an. Wir bitten um Ihr Verständnis.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Der Zug nach Bremen wartet in Hannover auf die Fahrgäste aus dem ICE.', answer: false, explanationRu: 'Региональный экспресс «kann heute leider nicht auf uns warten» — нужно ехать следующим поездом в 14:50.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was bekommen die Fahrgäste im Bordrestaurant?',
              options: ['Einen Gutschein für die nächste Fahrt.', 'Ein Getränk, das nichts kostet.', 'Ein kostenloses Mittagessen.'],
              answer: 1,
              explanationRu: '«…ein kostenloses Getränk» — бесплатный напиток в качестве извинения.',
            },
          ],
        },
      ],
    },
    {
      title: 'Zurück aus Portugal',
      kind: 'dialog',
      speakers: { A: 'Nina', B: 'Tim' },
      situation: 'Sie hören ein Gespräch zwischen zwei Kollegen im Büro.',
      text: `A: Tim! Du bist ja ganz braun. Wie war der Urlaub?
B: Hallo Nina! Fantastisch, aber auch ein bisschen chaotisch.
A: Erzähl! Ihr wart doch in Portugal, oder?
B: Genau, an der Algarve. Aber der Anfang war eine Katastrophe. Unser Flug hatte vier Stunden Verspätung, und der Koffer, in dem alle unsere Badesachen waren, ist in Frankfurt geblieben.
A: Oh nein! Und dann?
B: Wir mussten am ersten Tag alles neu kaufen: Badehose, Sonnencreme, Handtücher. Die Fluggesellschaft hat das zum Glück später bezahlt. Der Koffer ist erst nach drei Tagen gekommen.
A: Und die Unterkunft? Ihr hattet doch dieses Hotel gebucht, das so gute Bewertungen hatte.
B: Nein, das haben wir kurz vorher storniert. Wir haben stattdessen ein kleines Ferienhaus gemietet, das einem älteren Ehepaar gehört. Die beiden wohnen direkt nebenan und waren super nett. Jeden Morgen hat uns die Frau frisches Brot vor die Tür gelegt.
A: Wie schön! Und was habt ihr so gemacht?
B: Viel am Strand gelegen, natürlich. Aber das Beste war eine Bootstour zu den Höhlen an der Küste. Der Kapitän, der uns gefahren hat, hat die ganze Zeit Geschichten erzählt – leider nur auf Portugiesisch, aber Lisa hat übersetzt.
A: Lisa spricht Portugiesisch?
B: Ein bisschen. Sie hat vor dem Urlaub einen Kurs an der Volkshochschule gemacht.
A: Und das Wetter? Ich habe gehört, dass es im Süden dieses Jahr extrem heiß war.
B: Ja, an zwei Tagen hatten wir über 40 Grad. Da sind wir nur morgens und abends rausgegangen. Mittags haben wir im Haus geschlafen, wie die Einheimischen.
A: Klingt trotzdem toll. Fahrt ihr nächstes Jahr wieder hin?
B: Vielleicht. Aber dann im Mai, wenn es noch nicht so heiß ist. Und meine Badehose kommt ins Handgepäck!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слышите разговор один раз. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Tims Flug ist pünktlich in Portugal angekommen.', answer: false, explanationRu: 'Рейс опоздал на четыре часа.' },
            { kind: 'tf', statement: 'Der Koffer mit den Badesachen kam erst später an.', answer: true, explanationRu: 'Чемодан остался во Франкфурте и пришёл только через три дня.' },
            { kind: 'tf', statement: 'Tim musste die neuen Sachen selbst bezahlen.', answer: false, explanationRu: '«Die Fluggesellschaft hat das zum Glück später bezahlt».' },
            { kind: 'tf', statement: 'Tim und Lisa haben in einem Hotel gewohnt.', answer: false, explanationRu: 'Отель они отменили и сняли маленький дом у пожилой пары.' },
            { kind: 'tf', statement: 'Die Vermieterin hat ihnen jeden Morgen Brot gebracht.', answer: true, explanationRu: '«Jeden Morgen hat uns die Frau frisches Brot vor die Tür gelegt».' },
            { kind: 'tf', statement: 'Lisa hat vor der Reise Portugiesisch gelernt.', answer: true, explanationRu: 'Она ходила на курс в народном университете (VHS) перед отпуском.' },
            { kind: 'tf', statement: 'Tim möchte beim nächsten Mal zu einer anderen Jahreszeit fahren.', answer: true, explanationRu: '«…dann im Mai, wenn es noch nicht so heiß ist».' },
          ],
        },
      ],
    },
  ],
};
