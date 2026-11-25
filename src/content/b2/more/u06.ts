import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Entschuldigung, darf ich Ihnen zum Vertrag noch eine Frage ___?',
      options: ['fragen', 'stellen', 'machen', 'geben'],
      answer: 1,
      explanationRu: 'eine Frage stellen — задать вопрос. Дословное *eine Frage fragen* — типичная ошибка.',
    },
    {
      type: 'choice',
      prompt: 'Bei der Planung des Sortiments müssen wir auf die Wünsche der Stammkunden Rücksicht ___.',
      options: ['geben', 'machen', 'nehmen', 'tragen'],
      answer: 2,
      explanationRu: 'Rücksicht nehmen auf + Akk — учитывать, принимать во внимание (= berücksichtigen).',
    },
    {
      type: 'choice',
      prompt: 'Seit Montag ___ den Kunden ein neuer Online-Chat zur Verfügung.',
      options: ['steht', 'stellt', 'kommt', 'bringt'],
      answer: 0,
      explanationRu: 'Подлежащее — ein neuer Online-Chat, он «имеется в распоряжении»: zur Verfügung stehen (пассивное значение). Stellen требует деятеля: Die Firma stellt … zur Verfügung.',
    },
    {
      type: 'choice',
      prompt: 'Wir haben mit dem Lieferanten bisher ___ Vereinbarung getroffen.',
      options: ['nicht', 'kein', 'nichts', 'keine'],
      answer: 3,
      explanationRu: 'Существительное с неопределённым артиклем (eine Vereinbarung treffen) отрицается через kein: keine Vereinbarung. Nicht ставится перед сочетаниями с предлогом: nicht in Frage kommen.',
    },
    {
      type: 'choice',
      prompt: 'In der Sitzung wurde das Thema Kinderarbeit in den Lieferketten endlich zur Sprache ___.',
      options: ['gestellt', 'gebracht', 'gekommen', 'getreten'],
      answer: 1,
      explanationRu: 'zur Sprache bringen — поднять тему (активно); пассив: wurde zur Sprache gebracht. Пара с пассивным значением: zur Sprache kommen (Das Thema kam zur Sprache).',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz bedeutet: „Über den Vorschlag ist noch nicht entschieden, man diskutiert noch darüber“?',
      options: [
        'Der Vorschlag tritt in Kraft.',
        'Der Vorschlag steht zur Verfügung.',
        'Der Vorschlag steht zur Diskussion.',
        'Der Vorschlag kommt zum Ausdruck.',
      ],
      answer: 2,
      explanationRu: 'zur Diskussion stehen — обсуждаться, быть предметом обсуждения. In Kraft treten — вступить в силу, zur Verfügung stehen — быть в распоряжении.',
    },
    {
      type: 'gap',
      prompt: 'Die Werkstatt hat mir für die Reparatur 300 Euro in ___ gestellt.',
      answers: ['Rechnung'],
      hintRu: 'выставить счёт',
      explanationRu: 'etwas in Rechnung stellen = berechnen — выставить счёт за что-либо.',
    },
    {
      type: 'gap',
      prompt: 'Der Händler hat meine Beschwerde zwar zur ___ genommen, aber nichts unternommen.',
      answers: ['Kenntnis'],
      hintRu: 'принять к сведению',
      explanationRu: 'etwas zur Kenntnis nehmen — принять к сведению (zur = zu der, die Kenntnis).',
    },
    {
      type: 'gap',
      prompt: 'Die Regierung muss endlich Maßnahmen gegen die steigenden Preise ___.',
      answers: ['ergreifen', 'treffen'],
      explanationRu: 'Maßnahmen ergreifen (или treffen) — принимать меры. Русское «принимать» не переводится как nehmen.',
    },
    {
      type: 'gap',
      prompt: 'Die neue Produktionshalle soll im Herbst in ___ genommen werden.',
      answers: ['Betrieb'],
      hintRu: 'ввести в эксплуатацию',
      explanationRu: 'in Betrieb nehmen — ввести в эксплуатацию; пассивная пара: in Betrieb sein — работать, функционировать.',
    },
    {
      type: 'gap',
      prompt: 'Viele Verbraucher machen von ihrem Widerrufsrecht keinen ___.',
      answers: ['Gebrauch'],
      explanationRu: 'von etwas Gebrauch machen — воспользоваться (правом, возможностью). Отрицание: keinen Gebrauch machen.',
    },
    {
      type: 'gap',
      prompt: 'Im Interview brachte die Ministerin ihre Sorge über die Inflation ___ Ausdruck.',
      answers: ['zum'],
      explanationRu: 'der Ausdruck — мужской род, поэтому zu + dem = zum: zum Ausdruck bringen — выразить.',
    },
    {
      type: 'gap',
      prompt: 'Die Entscheidung über die Preiserhöhung ist gestern vom Vorstand getroffen ___.',
      answers: ['worden'],
      hintRu: 'повторение: пассив Perfekt',
      explanationRu: 'Сочетания тоже образуют пассив: eine Entscheidung treffen → Die Entscheidung ist getroffen worden (Passiv Perfekt: sein + Partizip II + worden).',
    },
    {
      type: 'order',
      words: ['Der Kunde', 'hat', 'dem Händler', 'eine Frist', 'von zwei Wochen', 'gesetzt.'],
      translationRu: 'Клиент дал продавцу срок в две недели.',
      explanationRu: 'eine Frist setzen — установить срок. Partizip II gesetzt стоит в конце, именная часть eine Frist — в середине предложения.',
    },
    {
      type: 'order',
      words: ['Ich', 'weiß nicht,', 'ob', 'diese Lösung', 'für uns', 'in Frage', 'kommt.'],
      translationRu: 'Я не знаю, подходит ли нам это решение.',
      explanationRu: 'В придаточном предложении спрягаемый глагол kommt уходит в конец, а именная часть in Frage стоит прямо перед ним.',
    },
    {
      type: 'order',
      words: ['Der Vorschlag', 'muss', 'noch', 'vom Aufsichtsrat', 'zur Diskussion', 'gestellt', 'werden.'],
      translationRu: 'Предложение ещё должно быть вынесено на обсуждение наблюдательного совета.',
      explanationRu: 'Пассив с модальным глаголом: muss … gestellt werden. Именная часть zur Diskussion стоит перед Partizip II, как отделяемая приставка.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените глагол kritisieren сочетанием с Kritik.',
      prompt: 'Die Verbraucherzentrale kritisiert die versteckten Gebühren.',
      answers: ['Die Verbraucherzentrale übt Kritik an den versteckten Gebühren.'],
      explanationRu: 'kritisieren = Kritik üben an + Dativ. Прямое дополнение (Akk) превращается в предложную группу с an + Dativ: an den versteckten Gebühren.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените сочетание in Anspruch nehmen простым глаголом.',
      prompt: 'Viele Kunden nehmen den kostenlosen Rückgabeservice in Anspruch.',
      answers: [
        'Viele Kunden nutzen den kostenlosen Rückgabeservice.',
        'Viele Kunden benutzen den kostenlosen Rückgabeservice.',
      ],
      explanationRu: 'in Anspruch nehmen = nutzen / benutzen. Именная часть in Anspruch исчезает.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение с zur Verfügung stehen (пассивное значение), без слов «die Firma».',
      prompt: 'Die Firma stellt den Kunden kostenlose Ersatzteile zur Verfügung.',
      answers: [
        'Den Kunden stehen kostenlose Ersatzteile zur Verfügung.',
        'Kostenlose Ersatzteile stehen den Kunden zur Verfügung.',
      ],
      explanationRu: 'zur Verfügung stellen (кто-то предоставляет) ↔ zur Verfügung stehen (что-то имеется). Бывшее дополнение kostenlose Ersatzteile становится подлежащим, глагол во мн. числе: stehen.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените глагол beauftragen сочетанием in Auftrag geben (Präteritum).',
      prompt: 'Der Konzern beauftragte eine Agentur mit der neuen Werbekampagne.',
      answers: [
        'Der Konzern gab die neue Werbekampagne bei einer Agentur in Auftrag.',
        'Der Konzern gab bei einer Agentur die neue Werbekampagne in Auftrag.',
      ],
      explanationRu: 'jemanden mit etwas beauftragen = etwas bei jemandem in Auftrag geben. Меняется конструкция: заказ (die Werbekampagne) становится прямым дополнением, исполнитель — bei + Dativ.',
    },
  ],
  reading: [
    {
      title: 'Besitzen war gestern?',
      textType: 'Zeitungsartikel',
      texts: [
        {
          heading: 'Besitzen war gestern? Wenn Sofa und Waschmaschine nur gemietet sind',
          body: `Ein neues Sofa für 29 Euro im Monat, eine Waschmaschine für 15 Euro – und wenn man umzieht oder keine Lust mehr hat, schickt man sie einfach zurück. Was bei Autos und Smartphones schon länger üblich ist, kommt nun auch bei Möbeln und Haushaltsgeräten in Mode: Immer mehr Start-ups bieten ihre Produkte zur Miete an, statt sie zu verkaufen.

Einer der Anbieter ist das Berliner Unternehmen „Wohnwechsel“. Gründerin Miriam Hoffmann erklärt die Idee so: „Viele junge Leute ziehen für den Job alle zwei, drei Jahre in eine andere Stadt. Sie wollen nicht jedes Mal eine komplette Einrichtung kaufen und sie später teuer entsorgen.“ Seit der Gründung vor vier Jahren hat sich die Zahl der Kunden nach Angaben des Unternehmens jedes Jahr verdoppelt. Besonders gefragt sind Schreibtische und Bürostühle – eine Folge des Trends zum Homeoffice.

Die Anbieter werben auch mit dem Umweltschutz. Zurückgegebene Möbel werden gereinigt, wenn nötig repariert und dann an den nächsten Kunden vermietet. Erst wenn das nicht mehr möglich ist, werden sie recycelt. „So bleibt ein Stuhl nicht nur fünf, sondern fünfzehn Jahre im Einsatz“, sagt Hoffmann.

Verbraucherschützer sehen das Modell dennoch mit gemischten Gefühlen. „Wer ein Produkt lange mietet, zahlt am Ende oft deutlich mehr, als wenn er es gekauft hätte“, warnt Jonas Albrecht von der Verbraucherzentrale. Eine Waschmaschine, die im Handel 500 Euro kostet, habe man bei einer Monatsmiete von 15 Euro nach knapp drei Jahren bezahlt – sie halte aber meist zehn Jahre und länger. Viele Kunden nähmen die höheren Kosten bewusst in Kauf, weil sie flexibel bleiben wollten. Sie sollten aber genau prüfen, wer für Schäden aufkommt. In manchen Verträgen müsse der Kunde selbst für kleine Kratzer bezahlen, wenn er das Möbelstück zurückgibt.

Albrecht rät deshalb, vor dem Abschluss eines Mietvertrags genau zu rechnen. Für Menschen, die nur für kurze Zeit in einer Stadt wohnen, könne Mieten durchaus sinnvoll sein. Wer dagegen lange am selben Ort lebe, fahre mit dem Kauf eines gebrauchten Geräts meist günstiger – und tue der Umwelt ebenfalls einen Gefallen.

Ob sich das Mietmodell langfristig durchsetzt, ist noch offen. Der Handelsverband schätzt, dass bisher weniger als zwei Prozent der Haushalte Möbel oder Geräte mieten. Hoffmann bleibt trotzdem optimistisch: „Vor zwanzig Jahren hätte auch niemand gedacht, dass wir Musik nicht mehr kaufen, sondern streamen.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text und die Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте статью и выберите правильный ответ a, b или c (формат Goethe B2 Lesen, Teil 2).',
          items: [
            {
              kind: 'mc',
              question: 'Warum mieten laut Miriam Hoffmann viele junge Leute Möbel?',
              options: [
                'Weil sie sich keine neuen Möbel leisten können.',
                'Weil sie aus beruflichen Gründen oft umziehen.',
                'Weil gebrauchte Möbel schwer zu finden sind.',
              ],
              answer: 1,
              explanationRu: '«Viele junge Leute ziehen für den Job alle zwei, drei Jahre in eine andere Stadt» — переезжают из-за работы. О нехватке денег речь не идёт.',
            },
            {
              kind: 'mc',
              question: 'Welche Produkte sind besonders gefragt?',
              options: ['Sofas und Betten.', 'Waschmaschinen und Kühlschränke.', 'Möbel für das Arbeiten zu Hause.'],
              answer: 2,
              explanationRu: '«Besonders gefragt sind Schreibtische und Bürostühle – eine Folge des Trends zum Homeoffice».',
            },
            {
              kind: 'mc',
              question: 'Was passiert mit zurückgegebenen Möbeln?',
              options: [
                'Sie werden sofort recycelt.',
                'Sie werden aufbereitet und erneut vermietet.',
                'Sie werden günstig an die bisherigen Kunden verkauft.',
              ],
              answer: 1,
              explanationRu: 'Мебель чистят, при необходимости ремонтируют и сдают следующему клиенту; перерабатывают только тогда, когда это уже невозможно.',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert Jonas Albrecht?',
              options: [
                'Mieten ist auf lange Sicht oft teurer als Kaufen.',
                'Die gemieteten Geräte gehen schnell kaputt.',
                'Die Anbieter reparieren keine Schäden.',
              ],
              answer: 0,
              explanationRu: '«Wer ein Produkt lange mietet, zahlt am Ende oft deutlich mehr, als wenn er es gekauft hätte» — пример со стиральной машиной.',
            },
            {
              kind: 'mc',
              question: 'Wem empfiehlt Albrecht eher den Kauf eines gebrauchten Geräts?',
              options: [
                'Studierenden, die ein Semester im Ausland verbringen.',
                'Menschen, die lange am selben Ort wohnen.',
                'Familien, die gerade eine Wohnung suchen.',
              ],
              answer: 1,
              explanationRu: '«Wer dagegen lange am selben Ort lebe, fahre mit dem Kauf eines gebrauchten Geräts meist günstiger».',
            },
            {
              kind: 'mc',
              question: 'Wie verbreitet ist das Mietmodell bisher?',
              options: [
                'Die Mehrheit der jungen Haushalte nutzt es.',
                'Etwa jeder fünfte Haushalt mietet Möbel.',
                'Es wird nur von sehr wenigen Haushalten genutzt.',
              ],
              answer: 2,
              explanationRu: 'По оценке торгового союза, мебель или технику арендуют менее двух процентов домохозяйств.',
            },
          ],
        },
      ],
    },
    {
      title: 'Rückgabe und Erstattung',
      textType: 'Regelungstext',
      texts: [
        {
          label: '1',
          body: 'Sie können Ihre Bestellung innerhalb von 14 Tagen nach Erhalt der Ware ohne Angabe von Gründen widerrufen. Zusätzlich räumen wir Ihnen freiwillig eine verlängerte Rückgabefrist von 30 Tagen ein. Um von diesem Recht Gebrauch zu machen, genügt eine kurze Mitteilung per E-Mail oder über das Rückgabeformular in Ihrem Kundenkonto.',
        },
        {
          label: '2',
          body: 'Innerhalb Deutschlands übernehmen wir die Kosten für die Rücksendung. Bitte verwenden Sie dafür ausschließlich das Rücksendeetikett, das wir Ihnen nach Ihrer Mitteilung per E-Mail zur Verfügung stellen. Unfrei an uns geschickte Pakete können wir leider nicht annehmen. Bei Rücksendungen aus dem Ausland tragen Sie die Versandkosten selbst.',
        },
        {
          label: '3',
          body: 'Sie dürfen die Ware so prüfen, wie Sie es auch in einem Geschäft tun würden. Bei Pflanzen und Saatgut ist eine Rückgabe ausgeschlossen, sobald die Verpackung geöffnet wurde. Wurde ein Artikel durch unsachgemäßen Gebrauch beschädigt, behalten wir uns vor, Ihnen den Wertverlust in Rechnung zu stellen.',
        },
        {
          label: '4',
          body: 'Nach Eingang und Prüfung der Rücksendung erstatten wir Ihnen den Kaufpreis innerhalb von zehn Werktagen. Die Rückzahlung erfolgt über dieselbe Zahlungsart, die Sie bei der Bestellung gewählt haben. Haben Sie per Rechnung bestellt und den Betrag noch nicht überwiesen, wird Ihre Rechnung entsprechend korrigiert.',
        },
        {
          label: '5',
          body: 'Sollte ein Artikel bereits bei der Lieferung beschädigt sein oder innerhalb der gesetzlichen Gewährleistungsfrist von zwei Jahren einen Mangel aufweisen, wenden Sie sich bitte an unseren Kundenservice. Wir entscheiden dann gemeinsam mit Ihnen, ob eine Reparatur, ein Ersatz oder eine Erstattung in Frage kommt. Die Gewährleistung gilt unabhängig von der freiwilligen Rückgabefrist.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Sie lesen die Rückgabebedingungen eines Onlineshops für Gartenbedarf. Welche Überschrift passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
          instructionRu: 'Прочитайте условия возврата интернет-магазина. Подберите заголовок к каждому разделу. Два заголовка лишние (формат Goethe B2 Lesen, Teil 5).',
          options: [
            'Wer zahlt den Rückversand?',
            'Wann Sie Ihr Geld zurückbekommen',
            'Lieferzeiten innerhalb Europas',
            'Wie lange Sie Artikel zurückgeben können',
            'Was tun, wenn ein Produkt defekt ist?',
            'Rabatte für Stammkunden',
            'Geöffnete und beschädigte Artikel',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Abschnitt 1',
              answer: 3,
              explanationRu: 'Речь о сроках: 14 дней по закону и добровольно продлённый срок 30 дней.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 2',
              answer: 0,
              explanationRu: 'Раздел о том, кто оплачивает обратную пересылку: по Германии — магазин, из-за границы — покупатель.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 3',
              answer: 6,
              explanationRu: 'Открытые семена и растения не принимаются, за повреждения из-за неправильного использования выставляется счёт.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 4',
              answer: 1,
              explanationRu: 'Стоимость покупки возвращается в течение десяти рабочих дней тем же способом оплаты.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 5',
              answer: 4,
              explanationRu: 'Раздел о повреждённом товаре и гарантийной ответственности (Gewährleistung): ремонт, замена или возврат денег.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Neue Ideen aus der Region: Elektronik aus zweiter Hand',
      kind: 'dialog',
      speakers: { A: 'Moderatorin', B: 'Tobias Brandt, Inhaber eines Ladens für gebrauchte Elektronik' },
      situation: 'Sie hören ein Interview im Radio mit dem Gründer eines Geschäfts für gebrauchte Elektronik.',
      playCount: 2,
      text: `A: In unserer Reihe „Neue Ideen aus der Region“ begrüße ich heute Tobias Brandt. Herr Brandt, Sie verkaufen in Ihrem Laden in Leipzig gebrauchte Smartphones und Laptops. Wie sind Sie darauf gekommen?
B: Eigentlich durch meinen alten Job. Ich habe zehn Jahre in der IT-Abteilung einer Versicherung gearbeitet. Dort wurden alle drei Jahre sämtliche Laptops ausgetauscht, obwohl die meisten noch einwandfrei funktioniert haben. Irgendwann habe ich gefragt, was mit den alten Geräten passiert – und die Antwort hat mich schockiert: Die meisten wurden einfach entsorgt.
A: Und da haben Sie die Entscheidung getroffen, sich selbstständig zu machen?
B: Nicht sofort. Ich habe erst mal ein Jahr lang am Wochenende Geräte aufbereitet und online verkauft. Als die Nachfrage immer größer wurde, habe ich gekündigt und den Laden eröffnet. Das war vor fünf Jahren.
A: Wer kauft denn bei Ihnen ein?
B: Ganz unterschiedliche Leute. Am Anfang waren es vor allem Studierende, die wenig Geld haben. Inzwischen kommen aber auch Firmen, die ihre Mitarbeiter ausstatten wollen, und ältere Menschen, die zum ersten Mal ein Smartphone brauchen. Die schätzen besonders, dass wir uns viel Zeit für die Beratung nehmen.
A: Viele haben ja Bedenken bei gebrauchter Elektronik. Was sagen Sie denen?
B: Das verstehe ich. Deshalb prüfen wir jedes Gerät in über vierzig Schritten, tauschen schwache Akkus aus und löschen alle alten Daten vollständig. Und wir geben auf alles ein Jahr Garantie. Die nehmen übrigens nur etwa zwei Prozent unserer Kunden in Anspruch.
A: Und wie viel spart man im Vergleich zu einem neuen Gerät?
B: Im Schnitt zahlt man bei uns dreißig bis vierzig Prozent weniger. Bei ganz neuen Modellen ist der Unterschied kleiner, da lohnt sich der Kauf bei uns oft gar nicht so sehr. Am meisten spart man bei Geräten, die zwei oder drei Jahre alt sind.
A: Was ist für Sie im Moment die größte Herausforderung?
B: Ehrlich gesagt: Nachschub. Wir könnten viel mehr verkaufen, aber es fehlt an gebrauchten Geräten. Viele Leute bewahren ihre alten Handys jahrelang in der Schublade auf. Deshalb zahlen wir jetzt für jedes alte Gerät eine kleine Prämie, auch wenn es kaputt ist. Ersatzteile können wir fast immer gebrauchen.
A: Und Ihre Pläne für die Zukunft?
B: Wir wollen nächstes Jahr eine zweite Filiale in Dresden eröffnen. Außerdem möchte ich Reparaturkurse anbieten, damit die Leute kleinere Probleme selbst lösen können. Das klingt vielleicht seltsam für einen Händler, aber mir geht es nicht nur ums Verkaufen.
A: Herr Brandt, vielen Dank für das Gespräch.`,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите интервью два раза. Выберите правильный ответ (формат Goethe B2 Hören, Teil 2).',
          items: [
            {
              kind: 'mc',
              question: 'Wie kam Herr Brandt auf seine Geschäftsidee?',
              options: [
                'Durch einen Zeitungsartikel über Elektroschrott.',
                'Durch Erfahrungen bei seinem früheren Arbeitgeber.',
                'Durch ein Studium der Umwelttechnik.',
              ],
              answer: 1,
              explanationRu: 'В страховой компании, где он работал, исправные ноутбуки каждые три года просто выбрасывали.',
            },
            {
              kind: 'mc',
              question: 'Was tat er, bevor er den Laden eröffnete?',
              options: [
                'Er verkaufte nebenbei aufbereitete Geräte im Internet.',
                'Er machte eine Ausbildung zum Elektroniker.',
                'Er arbeitete in einem Reparaturcafé.',
              ],
              answer: 0,
              explanationRu: '«Ich habe erst mal ein Jahr lang am Wochenende Geräte aufbereitet und online verkauft».',
            },
            {
              kind: 'mc',
              question: 'Was schätzen ältere Kunden besonders?',
              options: ['Die niedrigen Preise.', 'Die ausführliche Beratung.', 'Die schnelle Lieferung.'],
              answer: 1,
              explanationRu: '«Die schätzen besonders, dass wir uns viel Zeit für die Beratung nehmen».',
            },
            {
              kind: 'mc',
              question: 'Was sagt Herr Brandt über die Garantie?',
              options: [
                'Sie gilt nur für Laptops.',
                'Sie muss extra bezahlt werden.',
                'Nur wenige Kunden nutzen sie.',
              ],
              answer: 2,
              explanationRu: 'Гарантией пользуются (in Anspruch nehmen) лишь около двух процентов клиентов.',
            },
            {
              kind: 'mc',
              question: 'Wann spart man laut Herrn Brandt am meisten?',
              options: [
                'Bei Geräten, die zwei bis drei Jahre alt sind.',
                'Bei ganz neuen Modellen.',
                'Bei defekten Geräten.',
              ],
              answer: 0,
              explanationRu: '«Am meisten spart man bei Geräten, die zwei oder drei Jahre alt sind». У новых моделей разница меньше.',
            },
            {
              kind: 'mc',
              question: 'Was ist zurzeit das größte Problem des Ladens?',
              options: [
                'Es kommen zu wenige Kunden.',
                'Es gibt zu wenige gebrauchte Geräte zum Ankaufen.',
                'Die Miete für den Laden ist zu hoch.',
              ],
              answer: 1,
              explanationRu: 'Главная проблема — Nachschub: не хватает подержанных устройств, люди хранят старые телефоны в ящике.',
            },
          ],
        },
      ],
    },
    {
      title: 'Verbrauchertipp: Vorsicht vor Fake-Shops',
      kind: 'monolog',
      situation: 'Sie hören einen Verbrauchertipp im Radio.',
      playCount: 2,
      text: `Und nun zu unserem Verbrauchertipp der Woche. Kurz vor Weihnachten haben Fake-Shops wieder Hochsaison. Das sind Internetseiten, die aussehen wie echte Onlineshops, die bestellte Ware aber nie liefern. Die Polizei rechnet in diesem Jahr mit mehreren Tausend Betrugsfällen allein in unserem Bundesland. Woran erkennt man solche Seiten? Misstrauisch sollten Sie werden, wenn Markenprodukte deutlich günstiger angeboten werden als überall sonst. Ein weiteres Warnsignal: Am Ende des Bestellvorgangs wird nur noch Vorkasse per Überweisung angeboten, obwohl vorher auch andere Zahlungsarten genannt wurden. Werfen Sie außerdem einen Blick ins Impressum. Fehlt es oder enthält es keine vollständige Adresse, lassen Sie lieber die Finger von dem Angebot. Wer bereits Geld überwiesen hat, sollte sofort seine Bank informieren – manchmal lässt sich die Überweisung noch stoppen. Und erstatten Sie in jedem Fall Anzeige bei der Polizei. Übrigens: Die Verbraucherzentrale stellt auf ihrer Website einen kostenlosen Fake-Shop-Finder zur Verfügung, mit dem Sie verdächtige Seiten schon vor der Bestellung prüfen können.`,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения? (формат Goethe B2 Hören, Teil 1)',
          items: [
            {
              kind: 'tf',
              statement: 'Fake-Shops sind besonders in der Zeit vor Weihnachten aktiv.',
              answer: true,
              explanationRu: '«Kurz vor Weihnachten haben Fake-Shops wieder Hochsaison».',
            },
            {
              kind: 'tf',
              statement: 'Wer schon bezahlt hat, kann nichts mehr unternehmen.',
              answer: false,
              explanationRu: 'Нужно сразу сообщить в банк — иногда перевод ещё можно остановить, — и подать заявление в полицию.',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist laut dem Beitrag ein Warnsignal?',
              options: [
                'Der Shop bietet viele verschiedene Zahlungsarten an.',
                'Am Ende kann man nur noch per Vorkasse bezahlen.',
                'Das Impressum enthält eine vollständige Adresse.',
              ],
              answer: 1,
              explanationRu: 'Подозрительно, если в конце заказа остаётся только предоплата переводом, хотя раньше называлось больше способов оплаты.',
            },
            {
              kind: 'mc',
              question: 'Was bietet die Verbraucherzentrale an?',
              options: [
                'Ein kostenloses Online-Werkzeug zum Prüfen von Shops.',
                'Eine kostenlose Rechtsberatung am Telefon.',
                'Die Erstattung des verlorenen Geldes.',
              ],
              answer: 0,
              explanationRu: 'Центр защиты потребителей предоставляет (zur Verfügung stellen) бесплатный «Fake-Shop-Finder» на своём сайте.',
            },
          ],
        },
      ],
    },
  ],
};
