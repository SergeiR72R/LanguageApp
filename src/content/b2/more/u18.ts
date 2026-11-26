import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Laut ___ Hausordnung ist das Grillen auf dem Balkon verboten.',
      options: ['die', 'der', 'den', 'das'],
      answer: 1,
      explanationRu: 'laut + Dativ или Genitiv. У слова женского рода (die Hausordnung) обе формы совпадают: laut der Hausordnung.',
    },
    {
      type: 'gap',
      prompt: 'Aufgrund ___ Streiks fallen heute zahlreiche Züge aus.',
      answers: ['des'],
      hintRu: 'aufgrund + Genitiv, der Streik',
      explanationRu: 'aufgrund требует родительного падежа. Мужской род: des Streiks (артикль des и окончание -s у существительного).',
    },
    {
      type: 'choice',
      prompt: 'Bezüglich ___ Anfrage vom 3. März teilen wir Ihnen Folgendes mit.',
      options: ['Ihre', 'Ihrem', 'Ihren', 'Ihrer'],
      answer: 3,
      explanationRu: 'bezüglich + Genitiv. die Anfrage (ж. р.) в Genitiv: Ihrer Anfrage.',
    },
    {
      type: 'gap',
      prompt: 'Mithilfe ___ erfahrenen Anwalts hat er den Prozess gewonnen.',
      answers: ['eines', 'seines', 'des'],
      hintRu: 'mithilfe + Genitiv, der Anwalt',
      explanationRu: 'mithilfe + Genitiv: eines erfahrenen Anwalts. Внимание: Anwalt не относится к n-склонению, поэтому в Genitiv — Anwalts.',
    },
    {
      type: 'gap',
      prompt: 'Der Vermieter hat sich ___ gegenüber immer fair verhalten.',
      answers: ['uns'],
      hintRu: 'местоимение wir в Dativ',
      explanationRu: 'gegenüber + Dativ. С личным местоимением gegenüber обычно стоит после него: uns gegenüber, ihm gegenüber.',
    },
    {
      type: 'choice',
      prompt: 'Welche Wortgruppe ist korrekt?',
      options: ['zufolge der Studie', 'der Studie zufolge', 'zufolge die Studie', 'die Studie zufolge'],
      answer: 1,
      explanationRu: 'zufolge — послелог: стоит после существительного в Dativ: der Studie zufolge («согласно исследованию»).',
    },
    {
      type: 'choice',
      prompt: 'Aufgrund ___ Mängeln wurde die gesamte Lieferung zurückgeschickt.',
      options: ['der', 'des', 'von', 'den'],
      answer: 2,
      explanationRu: 'Mängeln — это форма Dativ мн. ч. Если у существительного во мн. ч. нет артикля, вместо Genitiv используют von + Dativ: aufgrund von Mängeln.',
    },
    {
      type: 'gap',
      prompt: 'Gemäß ___ gesetzlichen Vorschriften haben Sie 14 Tage Zeit für den Widerruf.',
      answers: ['den'],
      hintRu: 'gemäß + Dativ, мн. ч.',
      explanationRu: 'gemäß управляет Dativ. Во мн. ч. Dativ: den gesetzlichen Vorschriften.',
    },
    {
      type: 'choice',
      prompt: '___ meiner Nachbarin will der Vermieter das ganze Haus verkaufen.',
      options: ['Gemäß', 'Entsprechend', 'Anhand', 'Laut'],
      answer: 3,
      explanationRu: 'Соседка — источник информации («по словам соседки»), поэтому нужен laut (или meiner Nachbarin zufolge). gemäß и entsprechend означают соответствие правилу или желанию.',
    },
    {
      type: 'gap',
      prompt: 'Die Polizei konnte den Betrüger ___ eines Überwachungsvideos identifizieren.',
      answers: ['anhand', 'mithilfe'],
      hintRu: '«по (видеозаписи)», + Genitiv',
      explanationRu: 'anhand + Genitiv — «на основании, по» (документу, фото, признаку). Возможен и mithilfe.',
    },
    {
      type: 'choice',
      prompt: 'Innerhalb ___ Monats müssen Sie gegen den Bescheid Widerspruch einlegen.',
      options: ['ein', 'einem', 'eines', 'einen'],
      answer: 2,
      explanationRu: 'Повторение (B2, Einheit 8): innerhalb + Genitiv: innerhalb eines Monats. Без артикля во мн. ч. — innerhalb von zwei Monaten.',
    },
    {
      type: 'gap',
      prompt: 'Gegen den Mahnbescheid hat sie rechtzeitig Widerspruch ___.',
      answers: ['eingelegt', 'erhoben'],
      hintRu: 'повторение: устойчивое сочетание «подать возражение»',
      explanationRu: 'Повторение (B2, Einheit 6): Widerspruch / Einspruch einlegen (или erheben) — устойчивое именно-глагольное сочетание. Perfekt: hat … eingelegt.',
    },
    {
      type: 'choice',
      prompt: 'Wir bestehen ___, dass der Schaden innerhalb von 14 Tagen behoben wird.',
      options: ['darin', 'darauf', 'daraus', 'dazu'],
      answer: 1,
      explanationRu: 'Повторение (B2, Einheit 17): bestehen auf + Dat — «настаивать на». Перед придаточным нужен коррелят darauf.',
    },
    {
      type: 'order',
      words: ['Bezüglich', 'Ihrer Beschwerde', 'möchten', 'wir', 'uns', 'zunächst', 'entschuldigen.'],
      translationRu: 'Что касается вашей жалобы, мы прежде всего хотели бы извиниться.',
      explanationRu: 'Предложная группа bezüglich + Genitiv занимает первое место, глагол möchten — на втором, инфинитив — в конце.',
    },
    {
      type: 'order',
      words: ['Ihnen', 'gegenüber', 'hat', 'der Vermieter', 'nie', 'eine Mieterhöhung', 'erwähnt.'],
      translationRu: 'При вас (по отношению к вам) арендодатель ни разу не упоминал о повышении арендной платы.',
      explanationRu: 'С местоимением gegenüber стоит после него: Ihnen gegenüber. Вся группа занимает первое место, поэтому глагол hat стоит на втором.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное предложение предложной группой с entsprechend или gemäß.',
      prompt: 'Wie Sie es gewünscht haben, haben wir Ihr Kundenkonto gelöscht.',
      answers: [
        'Ihrem Wunsch entsprechend haben wir Ihr Kundenkonto gelöscht.',
        'Entsprechend Ihrem Wunsch haben wir Ihr Kundenkonto gelöscht.',
        'Ihrem Wunsch gemäß haben wir Ihr Kundenkonto gelöscht.',
        'Gemäß Ihrem Wunsch haben wir Ihr Kundenkonto gelöscht.',
      ],
      explanationRu: 'wie Sie es gewünscht haben → Ihr Wunsch. entsprechend / gemäß + Dativ: Ihrem Wunsch; предлог может стоять до или после существительного.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное с indem предложной группой с anhand von.',
      prompt: 'Indem sie Fotos vorlegte, konnte sie den Transportschaden beweisen.',
      answers: [
        'Anhand von Fotos konnte sie den Transportschaden beweisen.',
        'Anhand der Fotos konnte sie den Transportschaden beweisen.',
      ],
      explanationRu: 'indem («тем, что») выражает способ; в письменной речи его можно заменить на anhand / mithilfe. Fotos без артикля → anhand von + Dativ.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите начало делового письма с предлогом bezüglich.',
      prompt: 'Was Ihre Bestellung betrifft, möchten wir Ihnen mitteilen, dass sich die Lieferung verzögert.',
      answers: [
        'Bezüglich Ihrer Bestellung möchten wir Ihnen mitteilen, dass sich die Lieferung verzögert.',
      ],
      explanationRu: 'was … betrifft («что касается …») → bezüglich + Genitiv: bezüglich Ihrer Bestellung. Синонимы в официальных письмах: hinsichtlich, in Bezug auf + Akk.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist NICHT korrekt?',
      options: [
        'Dem Vertrag gemäß ist die Miete im Voraus zu zahlen.',
        'Laut Gesetz haben Sie Anspruch auf Ersatz.',
        'Zufolge dem Urteil ist die Klausel unwirksam.',
        'Aufgrund von Lieferproblemen verzögert sich der Versand.',
      ],
      answer: 2,
      explanationRu: 'zufolge стоит только после существительного: dem Urteil zufolge. Остальные предложения верны: gemäß может стоять после существительного, laut — без артикля, aufgrund von — без артикля во мн. ч.',
    },
    {
      type: 'gap',
      prompt: 'Den Angaben des Herstellers ___ hält der Akku bis zu zehn Stunden.',
      answers: ['zufolge', 'entsprechend', 'gemäß'],
      hintRu: 'предлог стоит после существительного: «по данным производителя»',
      explanationRu: 'После группы в Dativ (den Angaben des Herstellers) чаще всего стоит zufolge («по данным»). Возможны также entsprechend / gemäß («в соответствии с данными»), но laut после существительного невозможен.',
    },
  ],
  reading: [
    {
      title: 'Nutzungsbedingungen „StadtAuto“',
      textType: 'Regelungstext',
      texts: [
        {
          label: '§ 1',
          body: `Die Nutzung der Fahrzeuge setzt eine Registrierung in der App voraus. Anhand eines gültigen Führerscheins und eines amtlichen Ausweisdokuments wird die Identität der Kundin bzw. des Kunden geprüft. Nutzerinnen und Nutzer müssen mindestens 21 Jahre alt sein und ihren Führerschein seit mindestens zwei Jahren besitzen. Ausländische Führerscheine werden nur gemäß den geltenden gesetzlichen Bestimmungen anerkannt.`,
        },
        {
          label: '§ 2',
          body: `Fahrzeuge können über die App bis zu 14 Tage im Voraus gebucht werden. Eine Stornierung ist bis 30 Minuten vor Beginn der Buchung kostenlos. Bei einer späteren Stornierung wird entsprechend der aktuellen Preisliste eine Gebühr von 5 Euro berechnet. Wird das Fahrzeug nicht innerhalb von 15 Minuten nach Buchungsbeginn geöffnet, verfällt die Reservierung.`,
        },
        {
          label: '§ 3',
          body: `Vor Fahrtantritt ist das Fahrzeug auf sichtbare Schäden und Verschmutzungen zu prüfen. Neue Schäden sind vor Beginn der Fahrt mithilfe der Fotofunktion in der App zu melden; andernfalls kann der Kunde für diese Schäden verantwortlich gemacht werden. Rauchen ist in allen Fahrzeugen untersagt. Tiere dürfen nur in geschlossenen Transportboxen mitgenommen werden.`,
        },
        {
          label: '§ 4',
          body: `Bei einem Unfall ist unverzüglich die Polizei zu verständigen, auch wenn keine andere Person beteiligt ist. Anschließend ist der Kundenservice über die Notrufnummer in der App zu informieren. Gegenüber Dritten dürfen keine Schuldanerkenntnisse abgegeben werden. Die Selbstbeteiligung des Kunden beträgt pro Schadensfall 500 Euro; durch ein Zusatzpaket kann sie auf 150 Euro reduziert werden.`,
        },
        {
          label: '§ 5',
          body: `Die Abrechnung erfolgt monatlich per Lastschrift. Gerät der Kunde in Zahlungsverzug, wird für jede Mahnung eine Gebühr von 5 Euro erhoben. Einwände gegen eine Rechnung sind binnen sechs Wochen nach Rechnungsdatum schriftlich oder per E-Mail geltend zu machen. Nach Ablauf dieser Frist gilt die Rechnung als genehmigt.`,
        },
        {
          label: '§ 6',
          body: `Die Mitgliedschaft kann von beiden Seiten jederzeit mit einer Frist von einem Monat zum Monatsende gekündigt werden. Aufgrund schwerer Verstöße gegen diese Bedingungen, etwa Fahren unter Alkoholeinfluss oder Weitergabe der Zugangsdaten an Dritte, ist StadtAuto zur fristlosen Kündigung berechtigt. Bereits gezahlte Grundgebühren werden in diesem Fall nicht erstattet.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Nutzungsbedingungen. Welche Überschrift a–h passt zu welchem Paragrafen? Zwei Überschriften passen nicht.',
          instructionRu: 'Прочитайте условия пользования. Какой заголовок a–h подходит к какому параграфу? Два заголовка лишние.',
          options: [
            'Tanken und Laden der Fahrzeuge',
            'Bezahlung und Einwände gegen Rechnungen',
            'Voraussetzungen für die Anmeldung',
            'Beendigung der Mitgliedschaft',
            'Pflichten vor und während der Fahrt',
            'Sonderpreise für Studierende',
            'Reservierung und Absage einer Fahrt',
            'Verhalten nach einem Unfall',
          ],
          items: [
            {
              kind: 'match',
              prompt: '§ 1',
              answer: 2,
              explanationRu: 'Регистрация, проверка документов, минимальный возраст и стаж — условия для регистрации.',
            },
            {
              kind: 'match',
              prompt: '§ 2',
              answer: 6,
              explanationRu: 'Бронирование через приложение и отмена (Stornierung) — Reservierung und Absage.',
            },
            {
              kind: 'match',
              prompt: '§ 3',
              answer: 4,
              explanationRu: 'Проверка машины перед поездкой, запрет курения, перевозка животных — обязанности до и во время поездки.',
            },
            {
              kind: 'match',
              prompt: '§ 4',
              answer: 7,
              explanationRu: 'Вызвать полицию, сообщить в службу поддержки, не признавать вину — действия после аварии.',
            },
            {
              kind: 'match',
              prompt: '§ 5',
              answer: 1,
              explanationRu: 'Ежемесячное списание, сбор за напоминание, возражения против счёта в течение шести недель.',
            },
            {
              kind: 'match',
              prompt: '§ 6',
              answer: 3,
              explanationRu: 'Расторжение членства обеими сторонами, в том числе без соблюдения срока при грубых нарушениях.',
            },
          ],
        },
      ],
    },
    {
      title: 'Ein Klick zum Ausstieg',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `Als Markus Brenner im Januar seinen Streamingdienst kündigen wollte, verbrachte er fast eine Stunde auf der Webseite des Anbieters. „Ich habe überall gesucht – in meinem Profil, in den Einstellungen, in den Hilfe-Artikeln“, erzählt der 34-jährige Lehrer aus Bremen. „Am Ende stand im Kleingedruckten, dass man nur per Brief kündigen kann.“ Brenner schickte ein Einschreiben. Die Bestätigung kam drei Wochen später – zusammen mit einer weiteren Monatsrechnung.

Solche Erfahrungen sollen eigentlich der Vergangenheit angehören. Seit Sommer 2022 sind Unternehmen in Deutschland gesetzlich verpflichtet, Verträge, die online abgeschlossen werden können, auch online kündbar zu machen. Auf der Webseite muss ein gut sichtbarer Kündigungsbutton zu finden sein, über den Kundinnen und Kunden ihren Vertrag mit wenigen Klicks beenden können. Außerdem gilt für neue Verträge: Läuft ein Vertrag nach der Mindestlaufzeit automatisch weiter, kann er danach jederzeit mit einer Frist von einem Monat gekündigt werden.

Der Verbraucherzentrale zufolge halten sich jedoch längst nicht alle Anbieter an die Vorgaben. Bei einer Überprüfung von rund 900 Webseiten fanden die Verbraucherschützer bei fast jeder dritten Seite Mängel. Mal war der Button erst nach langem Scrollen zu sehen, mal trug er eine unklare Bezeichnung wie „Weitere Optionen“, mal mussten die Nutzer vor der Kündigung unnötige Angaben machen. „Einige Firmen versuchen offenbar, ihre Kunden durch kleine Hürden vom Kündigen abzuhalten“, sagt Juristin Sandra Pohl. „Das ist nicht nur ärgerlich, sondern rechtswidrig.“

Die Folgen für die Unternehmen können erheblich sein. Fehlt der Button oder ist er schwer zu finden, können Verbraucher ihren Vertrag jederzeit und ohne Einhaltung einer Frist kündigen. Mehrere Anbieter wurden bereits abgemahnt; einige mussten ihre Webseiten nach Gerichtsurteilen ändern.

Pohl rät Betroffenen, die Kündigung in jedem Fall zu dokumentieren. „Machen Sie ein Bildschirmfoto von der Bestätigungsseite und speichern Sie die Eingangsbestätigung, die der Anbieter Ihnen per E-Mail schicken muss.“ Wer keine Bestätigung erhält, solle sich zeitnah schriftlich an das Unternehmen wenden und eine Frist setzen.

Markus Brenner hat aus seiner Erfahrung gelernt. Bevor er ein neues Abo abschließt, prüft er inzwischen, wie man es wieder loswird. „Wenn ich den Kündigungsbutton nicht innerhalb von einer Minute finde, unterschreibe ich gar nicht erst.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was erlebte Markus Brenner bei der Kündigung seines Streamingdienstes?',
              options: [
                'Er konnte den Vertrag nur schriftlich per Post beenden.',
                'Der Anbieter hat die Kündigung nie bestätigt.',
                'Er hat die Kündigung nach einer Stunde aufgegeben.',
              ],
              answer: 0,
              explanationRu: 'В мелком шрифте было написано, что расторгнуть можно только письмом; он отправил заказное письмо. Подтверждение пришло через три недели.',
            },
            {
              kind: 'mc',
              question: 'Was schreibt das Gesetz seit 2022 vor?',
              options: [
                'Alle Verträge dürfen höchstens einen Monat laufen.',
                'Online abgeschlossene Verträge müssen auch online gekündigt werden können.',
                'Kündigungen sind nur noch per Einschreiben gültig.',
              ],
              answer: 1,
              explanationRu: 'Компании обязаны сделать договоры, заключаемые онлайн, расторгаемыми онлайн, с помощью хорошо заметной кнопки.',
            },
            {
              kind: 'mc',
              question: 'Was gilt für neue Verträge nach Ende der Mindestlaufzeit?',
              options: [
                'Sie verlängern sich automatisch um ein weiteres Jahr.',
                'Sie enden automatisch ohne Kündigung.',
                'Sie können monatlich gekündigt werden.',
              ],
              answer: 2,
              explanationRu: 'Если договор продолжается автоматически, его можно в любой момент расторгнуть со сроком в один месяц.',
            },
            {
              kind: 'mc',
              question: 'Was hat die Überprüfung der Verbraucherzentrale ergeben?',
              options: [
                'Etwa ein Drittel der Webseiten erfüllte die Vorgaben nicht vollständig.',
                'Fast alle Anbieter haben den Button korrekt umgesetzt.',
                'Die meisten Anbieter verzichten ganz auf einen Kündigungsbutton.',
              ],
              answer: 0,
              explanationRu: 'Почти у каждой третьей страницы были недостатки: кнопку трудно найти, неясное название, лишние данные.',
            },
            {
              kind: 'mc',
              question: 'Welche Folge hat ein fehlender oder versteckter Kündigungsbutton?',
              options: [
                'Das Unternehmen muss den Kunden ein Jahr lang kostenlos beliefern.',
                'Die Kunden dürfen fristlos kündigen.',
                'Der Vertrag wird automatisch unwirksam.',
              ],
              answer: 1,
              explanationRu: 'Если кнопки нет или её трудно найти, потребители могут расторгнуть договор в любой момент без соблюдения срока.',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt Sandra Pohl?',
              options: [
                'sofort einen Anwalt einzuschalten',
                'nur noch Verträge mit kurzer Laufzeit abzuschließen',
                'die Kündigung mit Bildschirmfoto und Bestätigung zu belegen',
              ],
              answer: 2,
              explanationRu: 'Она советует сделать скриншот страницы подтверждения и сохранить подтверждение получения по e-mail.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Nachricht vom Kundenservice',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf Ihrem Anrufbeantworter. Sie hören den Text zweimal.',
      text: `Guten Tag, hier spricht Katrin Ewald vom Kundenservice der Firma Hausgeräte Lindner. Ich rufe bezüglich Ihrer Reklamation vom 14. Oktober an. Es geht um die Spülmaschine mit dem Wasserschaden. Unser Techniker hat das Gerät anhand Ihrer Fotos geprüft und bestätigt, dass ein Produktionsfehler vorliegt. Da sich das Gerät noch in der Gewährleistung befindet, bieten wir Ihnen entsprechend Ihrem Wunsch ein neues Gerät an. Die Lieferung ist für Donnerstag, den 30. Oktober, zwischen 8 und 12 Uhr geplant. Das alte Gerät nimmt unser Fahrer gleich mit; dafür entstehen Ihnen selbstverständlich keine Kosten. Falls der Termin bei Ihnen nicht passt, rufen Sie uns bitte bis Montag unter der Nummer 0421 55 66 70 zurück. Und noch ein Hinweis: Den Schaden am Fußboden müssten Sie bitte direkt bei unserer Versicherung melden. Das entsprechende Formular schicke ich Ihnen per E-Mail. Vielen Dank und auf Wiederhören.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно ли утверждение?',
          items: [
            {
              kind: 'tf',
              statement: 'Der Kunde muss für den Abtransport des alten Geräts bezahlen.',
              answer: false,
              explanationRu: 'Водитель заберёт старый прибор, «dafür entstehen Ihnen selbstverständlich keine Kosten».',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was soll der Kunde wegen des Schadens am Fußboden tun?',
              options: [
                'den Techniker noch einmal anrufen',
                'den Schaden direkt bei der Versicherung melden',
                'Fotos an den Kundenservice schicken',
              ],
              answer: 1,
              explanationRu: 'Повреждение пола нужно заявить напрямую в страховую компанию; форму пришлют по e-mail.',
            },
            {
              kind: 'mc',
              question: 'Wie hat die Firma den Fehler festgestellt?',
              options: [
                'durch einen Besuch des Technikers beim Kunden',
                'mithilfe der Fotos des Kunden',
                'anhand eines Gutachtens der Versicherung',
              ],
              answer: 1,
              explanationRu: '«Unser Techniker hat das Gerät anhand Ihrer Fotos geprüft».',
            },
          ],
        },
      ],
    },
    {
      title: 'Interview: Ärger mit der Airline – was tun?',
      kind: 'dialog',
      speakers: {
        A: 'Moderator',
        B: 'Dr. Petra Engel, Schlichterin',
      },
      situation: 'Sie hören ein Interview im Radio. Sie hören den Text zweimal.',
      text: `A: Die Urlaubszeit beginnt, und damit leider auch der Ärger mit verspäteten Flügen. Bei mir im Studio ist Dr. Petra Engel. Sie arbeitet als Schlichterin bei einer Schlichtungsstelle für den Reiseverkehr. Frau Engel, mit welchen Fällen haben Sie am häufigsten zu tun?
B: Ganz klar mit Verspätungen und Annullierungen von Flügen. Sie machen über zwei Drittel unserer Fälle aus. Danach kommen verlorenes Gepäck und Probleme mit Pauschalreisen.
A: Welche Rechte habe ich denn, wenn mein Flug verspätet ist?
B: Gemäß einer europäischen Verordnung haben Passagiere ab einer Ankunftsverspätung von drei Stunden Anspruch auf eine Ausgleichszahlung. Die Höhe hängt von der Flugstrecke ab: zwischen 250 und 600 Euro pro Person. Und zwar unabhängig davon, was das Ticket gekostet hat.
A: Auch für einen Flug für 30 Euro?
B: Ja, auch dann. Viele wissen das nicht und verzichten auf ihr Geld.
A: Gibt es Ausnahmen?
B: Ja. Wenn die Verspätung aufgrund außergewöhnlicher Umstände entstanden ist, muss die Airline nicht zahlen. Dazu gehören zum Beispiel ein schweres Unwetter oder ein Streik der Fluglotsen. Streikt dagegen das eigene Personal der Fluggesellschaft, gilt das den Gerichten zufolge nicht als außergewöhnlich. Leider berufen sich manche Airlines auch dann auf Ausnahmen, wenn es eigentlich keine gibt.
A: Und wie läuft eine Schlichtung ab?
B: Zuerst müssen sich die Fluggäste selbst an die Airline wenden und ihren Anspruch geltend machen. Erst wenn die Airline ablehnt oder nach zwei Monaten nicht reagiert hat, können sie zu uns kommen. Wir prüfen den Fall anhand der Unterlagen und machen beiden Seiten einen Vorschlag. Für die Reisenden ist das Verfahren kostenlos, die Kosten trägt die Airline.
A: Muss man den Vorschlag annehmen?
B: Nein, er ist nicht verbindlich. Wer nicht einverstanden ist, kann immer noch vor Gericht ziehen. Aber in etwa neun von zehn Fällen akzeptieren beide Seiten unsere Lösung.
A: Was raten Sie unseren Hörerinnen und Hörern für die Reise?
B: Bewahren Sie Bordkarte und Buchungsbestätigung gut auf und notieren Sie die genaue Ankunftszeit. Am besten fotografieren Sie die Anzeigetafel am Flughafen. Das klingt nach einer Kleinigkeit, ist aber später ein wichtiger Beweis.
A: Frau Engel, herzlichen Dank für das Gespräch.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете интервью дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Womit beschäftigt sich die Schlichtungsstelle am häufigsten?',
              options: [
                'mit verlorenem Gepäck',
                'mit Problemen bei Pauschalreisen',
                'mit verspäteten und abgesagten Flügen',
              ],
              answer: 2,
              explanationRu: 'Задержки и отмены рейсов составляют более двух третей всех дел.',
            },
            {
              kind: 'mc',
              question: 'Wovon hängt die Höhe der Ausgleichszahlung ab?',
              options: [
                'vom Preis des Tickets',
                'von der Länge der Flugstrecke',
                'von der Dauer der Verspätung',
              ],
              answer: 1,
              explanationRu: '«Die Höhe hängt von der Flugstrecke ab» — независимо от цены билета.',
            },
            {
              kind: 'mc',
              question: 'Wann muss die Airline keine Entschädigung zahlen?',
              options: [
                'wenn die Fluglotsen streiken',
                'wenn das eigene Personal streikt',
                'wenn das Ticket sehr billig war',
              ],
              answer: 0,
              explanationRu: 'Забастовка авиадиспетчеров — чрезвычайное обстоятельство. Забастовка собственного персонала, по мнению судов, таковым не считается.',
            },
            {
              kind: 'mc',
              question: 'Wann können sich Reisende an die Schlichtungsstelle wenden?',
              options: [
                'sofort nach der Landung',
                'nachdem die Airline den Anspruch abgelehnt oder nicht reagiert hat',
                'erst nach einem Gerichtsurteil',
              ],
              answer: 1,
              explanationRu: 'Сначала нужно обратиться в авиакомпанию; только если она отказала или не ответила за два месяца, можно идти в примирительную комиссию.',
            },
            {
              kind: 'mc',
              question: 'Was gilt für den Vorschlag der Schlichtungsstelle?',
              options: [
                'Beide Seiten müssen ihn annehmen.',
                'Er kostet die Reisenden eine Gebühr.',
                'Man kann ihn ablehnen und vor Gericht gehen.',
              ],
              answer: 2,
              explanationRu: 'Предложение не обязательно (nicht verbindlich); несогласные могут обратиться в суд. Для путешественников процедура бесплатна.',
            },
            {
              kind: 'mc',
              question: 'Was rät Frau Engel den Reisenden?',
              options: [
                'Beweise wie Bordkarte und Fotos der Anzeigetafel zu sammeln',
                'nur noch teure Tickets zu kaufen',
                'bei Verspätungen sofort einen Anwalt anzurufen',
              ],
              answer: 0,
              explanationRu: 'Сохранить посадочный талон и подтверждение брони, записать время прибытия, сфотографировать табло — это важные доказательства.',
            },
          ],
        },
      ],
    },
  ],
};
