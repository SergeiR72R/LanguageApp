import type { UnitMore } from '../../types';

// Extra practice B1 · Unit 20 — Auf dem Weg zum Zertifikat (Wortstellung + Gesamtwiederholung B1)
export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich kann heute leider ___ zum Kurs kommen.',
      options: ['nicht', 'kein', 'keine'],
      answer: 0,
      explanationRu: 'Отрицается действие (прийти), а не существительное → nicht. Оно стоит перед направлением zum Kurs и инфинитивом в конце.',
    },
    {
      type: 'choice',
      prompt: 'Wir ___ gestern erst um Mitternacht in Wien angekommen.',
      options: ['haben', 'sind', 'werden'],
      answer: 1,
      explanationRu: 'Повторение Perfekt (юнит 1): ankommen — глагол движения/изменения состояния → sein: sind … angekommen.',
    },
    {
      type: 'choice',
      prompt: 'Ich habe den Koffer auf ___ Bett gelegt.',
      options: ['dem', 'das', 'den'],
      answer: 1,
      explanationRu: 'Повторение Wechselpräpositionen (юнит 2): legen — куда? → Akkusativ: auf das Bett.',
    },
    {
      type: 'choice',
      prompt: 'Wir haben in einem ___ Hotel direkt am See übernachtet.',
      options: ['günstig', 'günstige', 'günstigen', 'günstiges'],
      answer: 2,
      explanationRu: 'Повторение склонения прилагательных (юнит 6): in + Dativ, неопределённый артикль einem → окончание -en: einem günstigen Hotel.',
    },
    {
      type: 'choice',
      prompt: 'Je früher wir losfahren, ___ weniger Stau gibt es.',
      options: ['so', 'desto', 'als', 'wie'],
      answer: 1,
      explanationRu: 'Повторение (юнит 7): je + сравнительная степень …, desto + сравнительная степень. После desto weniger идёт глагол (gibt).',
    },
    {
      type: 'gap',
      prompt: 'Wegen ___ Streiks fuhren am Montag keine Züge.',
      answers: ['des'],
      explanationRu: 'Повторение (юнит 15): wegen + Genitiv; der Streik → des Streiks.',
    },
    {
      type: 'gap',
      prompt: 'Das ___ des Anmeldeformulars dauert nur fünf Minuten.',
      answers: ['Ausfüllen'],
      hintRu: 'ausfüllen',
      explanationRu: 'Повторение словообразования (юнит 19): субстантивированный инфинитив — das Ausfüllen, с большой буквы.',
    },
    {
      type: 'gap',
      prompt: 'Können Sie mir sagen, ___ der Zug nach Köln Verspätung hat?',
      answers: ['ob'],
      explanationRu: 'Повторение косвенных вопросов (юнит 12): вопрос без вопросительного слова («Есть ли опоздание?») вводится через ob; глагол hat — в конце.',
    },
    {
      type: 'gap',
      prompt: 'Das ist der Prüfer, ___ ich meinen Ausweis gezeigt habe.',
      answers: ['dem'],
      explanationRu: 'Повторение относительных предложений (юнит 5): zeigen + Dativ (кому?) → der Prüfer → dem.',
    },
    {
      type: 'gap',
      prompt: 'Nach der Prüfung ___ die Antwortbögen von der Aufsicht eingesammelt.',
      answers: ['werden'],
      explanationRu: 'Повторение пассива (юнит 9): werden + Partizip II; подлежащее die Antwortbögen во мн. ч. → werden.',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.',
      answers: ['hätte'],
      explanationRu: 'Повторение Konjunktiv II (юнит 8): нереальное условие в настоящем → wenn ich … hätte, (dann) würde ich …',
    },
    {
      type: 'gap',
      prompt: 'Ich lerne jeden Abend Vokabeln, ___ ich die Prüfung sicher bestehe.',
      answers: ['damit'],
      explanationRu: 'Повторение (юнит 10): после пропуска стоят подлежащее ich и глагол в конце (bestehe) — значит, нужен союз damit. При одинаковом подлежащем чаще говорят um … zu, но тогда нужен инфинитив: um die Prüfung sicher zu bestehen.',
    },
    {
      type: 'choice',
      prompt: 'Wir fahren nicht mit dem Auto, ___ mit dem Zug.',
      options: ['aber', 'sondern', 'denn', 'oder'],
      answer: 1,
      explanationRu: 'Повторение (юнит 17): после отрицания (nicht …) исправление вводится через sondern («а»).',
    },
    {
      type: 'choice',
      prompt: '___ denkst du gerade? – An die Prüfung morgen.',
      options: ['Worauf', 'Woran', 'Wofür', 'Was'],
      answer: 1,
      explanationRu: 'Повторение (юнит 4): denken an + Akk → вопрос о предмете: woran?',
    },
    {
      type: 'choice',
      prompt: 'Die Teilnehmerin, ___ Koffer im Zug geblieben ist, wartet am Schalter.',
      options: ['die', 'deren', 'dessen', 'der'],
      answer: 1,
      explanationRu: 'Повторение (юнит 18): притяжательное относительное местоимение для женского рода — deren («чей», «у которой»). dessen — для мужского и среднего рода.',
    },
    {
      type: 'order',
      words: ['Obwohl', 'ich', 'sehr', 'aufgeregt', 'war,', 'habe', 'ich', 'die', 'Prüfung', 'bestanden.'],
      translationRu: 'Хотя я очень волновался, я сдал экзамен.',
      explanationRu: 'Придаточное с obwohl (глагол в конце) стоит на первом месте → главное начинается с глагола: «war, habe ich …». Причастие bestanden закрывает рамку.',
    },
    {
      type: 'order',
      words: ['Ich', 'werde', 'es', 'dir', 'morgen', 'genau', 'erklären.'],
      translationRu: 'Я завтра тебе это подробно объясню.',
      explanationRu: 'Futur I (юнит 13): werde … erklären — рамка. Два местоимения: сначала Akkusativ (es), потом Dativ (dir); затем время (morgen) и способ (genau) — TeKaMoLo.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте в пассив с модальным глаголом.',
      prompt: 'Man muss den Ausweis am Eingang zeigen.',
      answers: ['Der Ausweis muss am Eingang gezeigt werden.', 'Am Eingang muss der Ausweis gezeigt werden.'],
      explanationRu: 'Пассив с модальным глаголом (юнит 9): модальный глагол на 2-м месте, в конце — Partizip II + werden: muss … gezeigt werden.',
    },
    {
      type: 'transform',
      instructionRu: 'Перефразируйте с помощью lassen.',
      prompt: 'Ich repariere mein Handy nicht selbst, ein Techniker macht das für mich.',
      answers: ['Ich lasse mein Handy reparieren.', 'Ich lasse mein Handy von einem Techniker reparieren.'],
      explanationRu: 'Повторение (юнит 16): lassen + инфинитив = поручить кому-то сделать что-то. Инфинитив reparieren стоит в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью nachdem. Начните с придаточного.',
      prompt: 'Ich hatte die Aufgaben genau gelesen. Dann begann ich zu schreiben.',
      answers: ['Nachdem ich die Aufgaben genau gelesen hatte, begann ich zu schreiben.'],
      explanationRu: 'Повторение (юниты 1 и 10): nachdem + Plusquamperfekt для более раннего действия; глагол hatte в конце придаточного. Затем инверсия: «…, begann ich …».',
    },
  ],
  reading: [
    {
      title: 'Anzeigen: Reisen und Sprachen lernen',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Sonnenreisen 60+',
          body: 'Zehn Tage Gardasee mit dem komfortablen Reisebus! Wir holen Sie zu Hause ab und bringen Sie wieder zurück. Hotel mit Halbpension, Ausflüge nach Verona und Venedig, deutschsprachige Reiseleitung – Sie müssen sich um nichts kümmern. Abfahrt jeden Montag von Mai bis September.',
        },
        {
          label: 'b',
          heading: 'Sprachschule Alpenblick, Salzburg',
          body: 'Deutsch lernen, wo andere Urlaub machen: Intensivkurse auf allen Niveaus im Juli und August, Dauer zwei bis vier Wochen. Wir vermitteln Ihnen ein Zimmer in einer österreichischen Gastfamilie oder in unserem Wohnheim. Nachmittags Ausflüge und Sport.',
        },
        {
          label: 'c',
          heading: 'Hostel Spreeblick, Berlin-Mitte',
          body: 'Zentral, sauber, günstig: Betten im Mehrbettzimmer ab 22 €, Einzelzimmer ab 45 € pro Nacht. Für Frauen, die allein reisen, gibt es einen eigenen Schlafsaal. Rezeption 24 Stunden geöffnet, Frühstück 6 €.',
        },
        {
          label: 'd',
          heading: 'Work & Travel Australien',
          body: 'Ein Jahr arbeiten, reisen und dabei perfekt Englisch lernen! Wir helfen Ihnen bei Visum, Flug und Jobsuche. Teilnahme ab 18 Jahren, Englischkenntnisse auf Schulniveau genügen. Infoabend jeden ersten Donnerstag im Monat.',
        },
        {
          label: 'e',
          heading: 'VHS Nord: Prüfungstraining B1',
          body: 'Ihre Prüfung steht bald an? Am Samstag, dem 8. März, simulieren wir die komplette B1-Prüfung unter echten Bedingungen – mit Zeitvorgaben, Aufsicht und mündlichem Teil. Danach bekommen Sie eine persönliche Rückmeldung zu Ihren Stärken und Schwächen. Gebühr: 35 €.',
        },
        {
          label: 'f',
          heading: 'Sprachcafé online',
          body: 'Sie möchten Ihr Deutsch verbessern, aber Ihnen fehlen Gesprächspartner? Jeden Abend von 19 bis 20 Uhr treffen sich Lernende und Muttersprachler per Video zum lockeren Plaudern. Kostenlos und ohne Anmeldung.',
        },
        {
          label: 'g',
          heading: 'Donau-Radtouren',
          body: 'Sieben Tage von Passau nach Wien auf einem der schönsten Radwege Europas. Wir buchen die Hotels und transportieren Ihr Gepäck. Bitte bringen Sie Ihr eigenes Fahrrad mit. Termine von April bis Oktober.',
        },
        {
          label: 'h',
          heading: 'Seerad – Fahrradverleih am Chiemsee',
          body: 'Direkt am Bahnhof Prien: Trekkingräder ab 12 € pro Tag, E-Bikes ab 25 €. Unser Wochenendangebot: Freitag bis Sonntag zum Preis von zwei Tagen. Karten mit den schönsten Touren rund um den See bekommen Sie gratis dazu.',
        },
        {
          label: 'i',
          heading: 'Sommercamp Irland',
          body: 'Englisch lernen und Spaß haben: drei Wochen Sprachkurs für Jugendliche von 12 bis 17 Jahren, Unterkunft im Internat, nachmittags Sport, Musik und Ausflüge. Betreuung rund um die Uhr.',
        },
        {
          label: 'j',
          heading: 'Fundservice Bahn & Bus Region Mitte',
          body: 'Sie haben etwas im Zug, im Bus oder am Bahnhof liegen lassen? Melden Sie den Verlust online oder telefonisch. Gefundene Gegenstände bewahren wir drei Monate auf und schicken sie Ihnen gegen eine kleine Gebühr nach Hause.',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1 bis 7 und die Anzeigen a bis j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–7 и объявления a–j. Какое объявление подходит к какой ситуации? Каждое объявление можно использовать один раз. Для одной ситуации подходящего объявления нет.',
          options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihre Kollegin möchte im Sommer zwei Wochen in Österreich Deutsch lernen und bei einer Familie wohnen.', answer: 1, explanationRu: 'b: интенсивные курсы в Зальцбурге летом, 2–4 недели, проживание в австрийской семье.' },
            { kind: 'match', prompt: 'Ein Freund macht nächsten Monat die B1-Prüfung und möchte sie vorher einmal unter realen Bedingungen ausprobieren.', answer: 4, explanationRu: 'e: симуляция всего экзамена B1 в реальных условиях. Языковое кафе (f) — только свободное общение, не экзамен.' },
            { kind: 'match', prompt: 'Sie möchten am Wochenende mit dem Rad an einem See entlangfahren, haben aber kein eigenes Fahrrad.', answer: 7, explanationRu: 'h: прокат велосипедов у Кимзее с выгодным предложением на выходные. g не подходит: нужно своё колесо и 7 дней.' },
            { kind: 'match', prompt: 'Ihre Eltern sind über 70 und möchten eine Reise nach Italien machen, bei der alles organisiert ist.', answer: 0, explanationRu: 'a: автобусный тур на озеро Гарда для 60+, всё организовано, забирают из дома.' },
            { kind: 'match', prompt: 'Sie haben auf der Rückfahrt Ihre Jacke im Zug vergessen.', answer: 9, explanationRu: 'j: бюро находок для поездов и автобусов, вещи можно прислать домой.' },
            { kind: 'match', prompt: 'Eine Bekannte reist allein nach Berlin und sucht für eine Nacht eine günstige Unterkunft.', answer: 2, explanationRu: 'c: хостел в Берлине, места от 22 €, есть даже отдельная комната для женщин, путешествующих в одиночку.' },
            { kind: 'match', prompt: 'Ihr Sohn ist 16 und möchte in den Sommerferien im Ausland Geld verdienen und dabei Englisch lernen.', answer: -1, explanationRu: 'Нет подходящего объявления: Work & Travel (d) — только с 18 лет, а лагерь в Ирландии (i) — это курс без работы.' },
          ],
        },
      ],
    },
    {
      title: 'Hinweise für Prüfungsteilnehmende',
      textType: 'Informationstext / Prüfungsordnung',
      texts: [
        {
          heading: 'Sprachprüfungszentrum am Markt – Hinweise für Teilnehmende an den B1-Prüfungen',
          body: `1. Anmeldung und Gebühren
Ihre Anmeldung ist erst vollständig, wenn die Prüfungsgebühr auf unserem Konto eingegangen ist. Wenn Sie sich bis 14 Tage vor dem Prüfungstermin abmelden, erstatten wir Ihnen 75 % der Gebühr zurück. Danach ist eine Rückerstattung nur noch mit ärztlichem Attest möglich.

2. Am Prüfungstag
Bitte seien Sie spätestens 30 Minuten vor Beginn im Prüfungszentrum. Bringen Sie einen gültigen Personalausweis oder Reisepass mit; ein Führerschein wird nicht akzeptiert. Wer erst nach dem Beginn des Moduls Lesen kommt, darf an diesem Modul nicht mehr teilnehmen, kann die folgenden Module aber trotzdem ablegen.

3. Im Prüfungsraum
Taschen, Jacken und Handys lassen Sie bitte in den Schließfächern im Erdgeschoss. Handys müssen ausgeschaltet sein. Eine Armbanduhr darf auf dem Tisch liegen, wenn sie keine Internetverbindung hat. Stifte bekommen Sie von uns. Wörterbücher und andere Hilfsmittel sind nicht erlaubt. Wer mogelt oder während der Prüfung mit anderen Teilnehmenden spricht, wird von der Prüfung ausgeschlossen.

4. Mündliche Prüfung
Die mündliche Prüfung findet in der Regel am selben Tag statt, in Ausnahmefällen am folgenden Tag. Ihre genaue Uhrzeit wird nicht per E-Mail verschickt: Sie hängt am Prüfungstag ab 9 Uhr am Schwarzen Brett im Eingangsbereich aus.

5. Ergebnisse
Ihre Ergebnisse können Sie etwa vier Wochen nach der Prüfung mit Ihrer Teilnehmernummer online abrufen. Telefonisch geben wir aus Datenschutzgründen keine Auskunft. Die Zertifikate können Sie persönlich abholen oder sich gegen eine Gebühr von 5 € per Post zuschicken lassen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст и задания. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Sie melden sich zehn Tage vor der Prüfung ab. Was gilt?',
              options: [
                'Sie bekommen 75 % der Gebühr zurück.',
                'Sie bekommen nur mit einem ärztlichen Attest Geld zurück.',
                'Sie bekommen die ganze Gebühr zurück.',
              ],
              answer: 1,
              explanationRu: '75 % возвращают только при отказе не позднее чем за 14 дней. «Danach ist eine Rückerstattung nur noch mit ärztlichem Attest möglich».',
            },
            {
              kind: 'mc',
              question: 'Was passiert, wenn man nach dem Beginn des Moduls Lesen ankommt?',
              options: [
                'Man darf an der ganzen Prüfung nicht mehr teilnehmen.',
                'Man bekommt für das Lesen weniger Zeit.',
                'Man kann die anderen Module trotzdem machen.',
              ],
              answer: 2,
              explanationRu: 'В модуле «Чтение» участвовать уже нельзя, но «…kann die folgenden Module aber trotzdem ablegen».',
            },
            {
              kind: 'mc',
              question: 'Was darf man im Prüfungsraum haben?',
              options: [
                'Eine Uhr ohne Internetverbindung',
                'Ein ausgeschaltetes Handy auf dem Tisch',
                'Eigene Stifte und ein Wörterbuch',
              ],
              answer: 0,
              explanationRu: '«Eine Armbanduhr darf auf dem Tisch liegen, wenn sie keine Internetverbindung hat». Телефоны остаются в шкафчиках, словари запрещены.',
            },
            {
              kind: 'mc',
              question: 'Wie erfährt man die Uhrzeit der mündlichen Prüfung?',
              options: [
                'Durch eine E-Mail am Tag vor der Prüfung',
                'Durch einen Aushang am Prüfungstag',
                'Durch einen Anruf im Prüfungszentrum',
              ],
              answer: 1,
              explanationRu: 'Время не рассылают по e-mail: «Sie hängt am Prüfungstag ab 9 Uhr am Schwarzen Brett … aus».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Nachricht vom Prüfungszentrum',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf Ihrem Anrufbeantworter.',
      text: `Guten Tag, hier spricht Melanie Krüger vom Sprachprüfungszentrum am Markt. Ich rufe wegen Ihrer Anmeldung zur B1-Prüfung am Samstag, dem 12. April, an. Leider ist in unserem Gebäude die Heizung kaputt. Deshalb findet die schriftliche Prüfung nicht bei uns statt, sondern in der Berufsschule in der Gartenstraße 18, Raum 204. Die Uhrzeit bleibt gleich: Bitte seien Sie um halb neun da. Die Straßenbahnlinie 3 hält direkt vor der Schule, Parkplätze gibt es dort leider kaum. Die mündliche Prüfung findet wie geplant am Sonntag bei uns am Markt statt, aber Ihre Uhrzeit hat sich geändert: Sie sind nicht um zehn, sondern erst um Viertel nach elf dran. Bei Fragen erreichen Sie mich bis Freitag unter 0341 55 82 90. Vielen Dank und auf Wiederhören!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören den Text zweimal. Ist die Aussage richtig oder falsch?',
          instructionRu: 'Вы слушаете текст два раза. Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Die schriftliche Prüfung findet an einem anderen Ort statt.', answer: true, explanationRu: 'Из-за сломанного отопления письменный экзамен проходит в профессиональном училище на Gartenstraße.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was hat sich bei der mündlichen Prüfung geändert?',
              options: ['Der Tag', 'Die Uhrzeit', 'Der Ort'],
              answer: 1,
              explanationRu: 'Устный экзамен — как и планировалось, в воскресенье и на Markt, но не в 10:00, а в 11:15.',
            },
          ],
        },
      ],
    },
    {
      title: 'Zufällige Begegnung im Zug',
      kind: 'dialog',
      speakers: { A: 'Anna', B: 'Marco, ein früherer Kollege von Anna' },
      situation: 'Sie sitzen im Zug und hören, wie sich eine Frau und ein Mann unterhalten.',
      text: `A: Marco? Das gibt's doch nicht! Was machst du denn im Zug nach Hamburg?
B: Anna! So ein Zufall! Ich fahre zu meiner Schwester, sie hat am Sonntag Geburtstag. Und du?
A: Ich habe morgen früh ein Vorstellungsgespräch bei einer Reederei. Ich bin ziemlich aufgeregt, ehrlich gesagt.
B: Das schaffst du! Dein Deutsch ist inzwischen ja richtig gut. Hast du nicht letztes Jahr die B1-Prüfung gemacht?
A: Doch, im November. Aber da hatte ich mehr Glück als Verstand. Beim Hören war ich so nervös, dass ich den ersten Teil kaum verstanden habe. Zum Glück lief das Schreiben super, da hatte ich fast die volle Punktzahl.
B: Ich muss die Prüfung im März machen. Ohne das Zertifikat kann ich mich nicht einbürgern lassen. Am meisten Angst habe ich vor dem Sprechen.
A: Das verstehe ich, aber für mich war das Sprechen am Ende der angenehmste Teil. Die beiden Prüferinnen waren total nett. Wichtig ist nur, dass du wirklich mit deinem Partner sprichst und nicht nur auswendig gelernte Sätze aufsagst.
B: Und die Präsentation? Fünf Folien in drei Minuten – das finde ich echt schwer.
A: Übe sie ein paar Mal mit der Uhr. Und schreib dir nur Stichpunkte auf, keine ganzen Sätze, sonst liest du nur vor.
B: Guter Tipp, danke. Ich werde es mit meiner Frau üben.
A: Und sonst? Ihr wolltet doch umziehen, oder?
B: Ja, endlich haben wir es geschafft! Wir wohnen jetzt in einer größeren Wohnung am Stadtrand, und die Kinder haben jeder ein eigenes Zimmer. Nur zur Arbeit brauche ich jetzt fast eine Stunde.
A: Oh, das ist lang. Fährst du mit dem Auto?
B: Nein, mit der S-Bahn. Und das ist gar nicht so schlecht: In der Bahn lerne ich jeden Tag Vokabeln. Ohne den langen Weg hätte ich dafür gar keine Zeit.
A: Siehst du, alles hat auch seine Vorteile.
B: Sag mal, magst du nach deinem Gespräch nicht bei meiner Schwester vorbeikommen? Sie wohnt in Altona und freut sich bestimmt.
A: Sehr gern, aber ich fahre schon morgen Nachmittag zurück, weil ich am Wochenende arbeiten muss. Vielleicht klappt es beim nächsten Mal.
B: Schade! Dann drücke ich dir für morgen ganz fest die Daumen.
A: Danke, und ich dir für März!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слушаете разговор один раз. Верны ли утверждения?',
          items: [
            { kind: 'tf', statement: 'Marco fährt nach Hamburg, um seine Schwester zu besuchen.', answer: true, explanationRu: 'Марко едет к сестре: у неё в воскресенье день рождения.' },
            { kind: 'tf', statement: 'Anna fährt nach Hamburg, weil sie dort eine neue Stelle angefangen hat.', answer: false, explanationRu: 'У Анны только собеседование («ein Vorstellungsgespräch»), работу она ещё не начала.' },
            { kind: 'tf', statement: 'Anna hatte im Prüfungsteil Hören keine Probleme.', answer: false, explanationRu: 'Наоборот: из-за волнения она почти не поняла первую часть аудирования.' },
            { kind: 'tf', statement: 'Marco braucht das Zertifikat für seine Einbürgerung.', answer: true, explanationRu: '«Ohne das Zertifikat kann ich mich nicht einbürgern lassen».' },
            { kind: 'tf', statement: 'Anna fand die mündliche Prüfung am schwierigsten.', answer: false, explanationRu: 'Для Анны говорение оказалось самой приятной частью («der angenehmste Teil»).' },
            { kind: 'tf', statement: 'Seit dem Umzug hat Marco einen längeren Weg zur Arbeit.', answer: true, explanationRu: 'Теперь он живёт на окраине и едет на работу почти час.' },
            { kind: 'tf', statement: 'Anna wird nach ihrem Gespräch Marcos Schwester besuchen.', answer: false, explanationRu: 'Анна отказывается: она уже завтра после обеда едет обратно, потому что работает в выходные.' },
          ],
        },
      ],
    },
  ],
};
