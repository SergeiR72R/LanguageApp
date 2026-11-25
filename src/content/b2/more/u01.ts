import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Seit letztem Jahr ___ in unserem Büro keine Papierakten mehr verwendet worden.',
      options: ['sind', 'haben', 'werden', 'wurden'],
      answer: 0,
      explanationRu: 'Пассив Perfekt образуется только с sein: sind + verwendet + worden. Haben в пассиве не используется, а werden/wurden не сочетаются с worden.',
    },
    {
      type: 'choice',
      prompt: 'Unsere frühere Abteilungsleiterin ist im Mai Geschäftsführerin ___.',
      options: ['worden', 'geworden', 'gewesen', 'gewordet'],
      answer: 1,
      explanationRu: 'Здесь werden — самостоятельный глагол «стать» (а не пассив), поэтому Partizip II — geworden. Worden используется только в пассиве вместе с другим причастием.',
    },
    {
      type: 'gap',
      prompt: 'Im letzten Quartal sind bei uns 40 neue Mitarbeiterinnen und Mitarbeiter ___ worden.',
      answers: ['eingestellt'],
      hintRu: 'einstellen — принимать на работу',
      explanationRu: 'Пассив Perfekt: sind + Partizip II + worden. У отделяемого глагола einstellen ge- стоит после приставки: eingestellt.',
    },
    {
      type: 'gap',
      prompt: 'Wegen der vielen Bewerbungen muss die Frist leider verlängert ___.',
      answers: ['werden'],
      hintRu: 'повторение B1: пассив с модальным глаголом',
      explanationRu: 'Повторение: пассив с модальным глаголом в настоящем времени — Modalverb + Partizip II + werden (Infinitiv Passiv).',
    },
    {
      type: 'choice',
      prompt: 'Sie können leider nicht hinein: Der Serverraum ___ abgeschlossen, und den Schlüssel hat nur der Hausmeister.',
      options: ['wird', 'ist', 'hat', 'worden'],
      answer: 1,
      explanationRu: 'Описывается состояние (дверь уже заперта, войти нельзя), а не процесс — нужен пассив состояния: sein + Partizip II.',
    },
    {
      type: 'gap',
      prompt: 'Ich weiß nicht, ob die Überstunden vom letzten Monat schon ausgezahlt worden ___.',
      answers: ['sind'],
      explanationRu: 'В придаточном предложении спрягаемый глагол стоит в конце: ausgezahlt worden sind. Подлежащее во мн. ч. (die Überstunden) → sind.',
    },
    {
      type: 'order',
      words: ['Leider', 'bin', 'ich', 'nicht', 'zum Vorstellungsgespräch eingeladen', 'worden.'],
      translationRu: 'К сожалению, меня не пригласили на собеседование.',
      explanationRu: 'Главное предложение: Leider на первом месте → инверсия (bin ich). Partizip II и worden стоят в самом конце.',
    },
    {
      type: 'gap',
      prompt: 'Nachdem die Filiale in der Innenstadt geschlossen worden ___, wechselten viele Angestellte in die Zentrale.',
      answers: ['war'],
      explanationRu: 'Действие произошло раньше другого прошедшего действия → Plusquamperfekt пассива: geschlossen worden war. После nachdem обычно Plusquamperfekt.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt?',
      options: [
        'Die Formulare sind bis Ende des Monats zu ausfüllen.',
        'Die Formulare sind bis Ende des Monats auszufüllen.',
        'Die Formulare sind bis Ende des Monats ausfüllen.',
        'Die Formulare lassen bis Ende des Monats auszufüllen.',
      ],
      answer: 1,
      explanationRu: 'sein + zu + Infinitiv («нужно заполнить»). У отделяемого глагола ausfüllen zu стоит между приставкой и корнем: auszufüllen. Lassen требует sich и инфинитива без zu.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените пассив с müssen конструкцией sein + zu.',
      prompt: 'Die Arbeitszeit muss täglich elektronisch erfasst werden.',
      answers: ['Die Arbeitszeit ist täglich elektronisch zu erfassen.'],
      explanationRu: 'müssen + Passiv = sein + zu + Infinitiv: muss erfasst werden → ist zu erfassen. Глагол erfassen неотделяемый, поэтому zu стоит перед ним отдельно.',
    },
    {
      type: 'gap',
      prompt: 'Im Krankheitsfall ist die Vorgesetzte noch am selben Morgen ___.',
      answers: ['zu benachrichtigen', 'zu informieren'],
      hintRu: 'benachrichtigen — уведомлять; sein + zu',
      explanationRu: 'Официальное правило «нужно уведомить» → sein + zu + Infinitiv: ist zu benachrichtigen. Benachrichtigen — неотделяемый глагол, zu пишется отдельно.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените выделенную конструкцию прилагательным на -bar.',
      prompt: 'Diese Tätigkeit kann kaum automatisiert werden.',
      answers: ['Diese Tätigkeit ist kaum automatisierbar.'],
      explanationRu: 'können + Passiv = sein + прилагательное на -bar: kann automatisiert werden → ist automatisierbar.',
    },
    {
      type: 'gap',
      prompt: 'In der Betriebsversammlung ist stundenlang über die Umstrukturierung ___ worden.',
      answers: ['diskutiert', 'gesprochen', 'debattiert', 'gestritten'],
      explanationRu: 'Безличный пассив без подлежащего (es в середине предложения опускается): ist … diskutiert worden. Глагол всегда в 3-м лице ед. ч.',
    },
    {
      type: 'choice',
      prompt: 'Nach zwanzig Jahren in der Firma ___ zum Jahresende gekündigt worden.',
      options: ['ist er', 'hat ihn', 'ist ihm', 'sind ihm'],
      answer: 2,
      explanationRu: 'kündigen управляет дательным падежом (jemandem kündigen). В пассиве дательный сохраняется, подлежащего нет, поэтому: ist ihm gekündigt worden. «Er ist gekündigt worden» — типичная ошибка.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте в пассив Perfekt. Обратите внимание на падеж.',
      prompt: 'Man hat ihr eine Stelle in der Zentrale angeboten.',
      answers: [
        'Ihr ist eine Stelle in der Zentrale angeboten worden.',
        'Eine Stelle in der Zentrale ist ihr angeboten worden.',
      ],
      explanationRu: 'Подлежащим становится винительное дополнение (eine Stelle), дательное ihr остаётся дательным: Ihr ist eine Stelle … angeboten worden.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте в пассив Plusquamperfekt.',
      prompt: 'Man hatte die Belegschaft nicht rechtzeitig über die Pläne informiert.',
      answers: [
        'Die Belegschaft war nicht rechtzeitig über die Pläne informiert worden.',
        'Über die Pläne war die Belegschaft nicht rechtzeitig informiert worden.',
      ],
      explanationRu: 'Plusquamperfekt пассива: war + Partizip II + worden. Man исчезает, die Belegschaft становится подлежащим.',
    },
    {
      type: 'order',
      words: ['Nachdem', 'die beiden Abteilungen', 'zusammengelegt', 'worden', 'waren,', 'gab es', 'viel Streit.'],
      translationRu: 'После того как два отдела были объединены, было много ссор.',
      explanationRu: 'В придаточном с nachdem: Partizip II + worden + waren (в конце). Главное предложение начинается со спрягаемого глагола: gab es.',
    },
    {
      type: 'gap',
      prompt: 'Zum Glück hat sich das Problem mit der Software schnell lösen ___.',
      answers: ['lassen'],
      hintRu: 'sich lassen в Perfekt',
      explanationRu: 'Perfekt от sich lassen + Infinitiv образуется с двойным инфинитивом: hat sich lösen lassen (не gelassen).',
    },
    {
      type: 'choice',
      prompt: 'Weil zwei Kollegen ausgefallen sind, hat die Präsentation verschoben ___.',
      options: ['werden müssen', 'worden müssen', 'müssen werden', 'gemusst werden'],
      answer: 0,
      explanationRu: 'Пассив с модальным глаголом в Perfekt: hat + Partizip II + werden + müssen (двойной инфинитив). Вспомогательный глагол — haben, потому что его требует модальный глагол.',
    },
    {
      type: 'order',
      words: ['Der Chef', 'erklärte,', 'dass', 'das Projekt', 'hat', 'gestoppt', 'werden', 'müssen.'],
      translationRu: 'Шеф объяснил, что проект пришлось остановить.',
      explanationRu: 'В придаточном при двойном инфинитиве hat стоит не в конце, а перед всей группой: hat gestoppt werden müssen.',
    },
  ],
  reading: [
    {
      title: 'Vier Tage arbeiten, drei Tage frei?',
      textType: 'Meinungstexte',
      texts: [
        {
          label: 'a',
          heading: 'Jana, 34, Projektmanagerin',
          body: `Bei uns ist die Vier-Tage-Woche im letzten Jahr als Pilotprojekt eingeführt worden. Ehrlich gesagt hatte ich damals große Zweifel, ob das funktionieren kann. Inzwischen bin ich überzeugt. Unsere Abläufe sind gründlich überprüft worden: Besprechungen dauern höchstens noch eine halbe Stunde, und vieles, was früher per Telefon geklärt wurde, lässt sich heute in zwei Minuten im Team-Chat erledigen. Ich arbeite konzentrierter und habe endlich mehr Zeit für meine Kinder. Ein Problem gibt es allerdings: Unsere Kunden erwarten, dass sie uns auch freitags erreichen. Deshalb haben wir ein Rotationssystem entwickelt, bei dem immer ein Teil des Teams im Dienst ist.`,
        },
        {
          label: 'b',
          heading: 'Mehmet, 51, Schichtleiter',
          body: `In der Verwaltung mag das alles machbar sein, aber in unserer Produktion sieht die Sache anders aus. Unsere Maschinen laufen rund um die Uhr, sie können nicht einfach freitags abgeschaltet werden. Wenn die Wochenarbeitszeit gleich bleibt und nur auf vier Tage verteilt wird, stehen meine Leute zehn Stunden an der Linie. Das halte ich gesundheitlich für unverantwortlich, gerade bei körperlich schwerer Arbeit. Und zusätzliches Personal ist wegen des Fachkräftemangels kaum zu finden. Mir wäre viel mehr geholfen, wenn Überstunden flexibler abgebaut werden könnten – zum Beispiel über ein Arbeitszeitkonto, auf dem man Stunden sammelt und sie dann am Stück nimmt.`,
        },
        {
          label: 'c',
          heading: 'Corinna, 27, Pflegefachkraft',
          body: `Ich arbeite schon seit zwei Jahren nur noch vier Tage pro Woche – allerdings in Teilzeit und mit entsprechend weniger Gehalt. Anders hätte ich den Beruf nicht durchgehalten. Viele meiner Kolleginnen sind ausgebrannt, einige haben die Pflege ganz verlassen. Deshalb fordere ich eine Vier-Tage-Woche bei vollem Lohn, zumindest für Berufe mit hoher Belastung. Natürlich kostet das Geld. Aber ich bin sicher, dass damit Leute zurückgewonnen werden könnten, die der Pflege den Rücken gekehrt haben. Wer weniger erschöpft ist, macht außerdem weniger Fehler – und das ist in einem Krankenhaus kein unwichtiges Argument.`,
        },
        {
          label: 'd',
          heading: 'Frank Albers, 58, Inhaber eines Handwerksbetriebs',
          body: `Ich habe die Vier-Tage-Woche vor zwei Jahren eingeführt – aus purer Not, denn auf unsere Ausbildungsplätze hatte sich niemand mehr beworben. Seitdem hat sich die Zahl der Bewerbungen verdoppelt. Auch die Krankmeldungen sind spürbar zurückgegangen. Es gibt aber auch einen Preis: Nicht jeder Auftrag kann angenommen werden, manche Kunden müssen länger warten. Ein Patentrezept ist das Modell also nicht. Mein wichtigster Rat an andere Betriebe: Die Regeln dürfen nicht einfach von oben festgelegt werden. Bei uns sind sie gemeinsam mit allen Mitarbeitenden erarbeitet worden, und nur deshalb funktioniert es.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте тексты. Какое высказывание относится к какому человеку? Одного человека можно выбирать несколько раз.',
          options: ['Jana', 'Mehmet', 'Corinna', 'Frank Albers'],
          items: [
            {
              kind: 'match',
              prompt: 'Durch kürzere Arbeitszeiten ist unser Betrieb für junge Leute attraktiver geworden.',
              answer: 3,
              explanationRu: 'Frank Albers: на учебные места никто не подавал заявки, а теперь число заявок удвоилось.',
            },
            {
              kind: 'match',
              prompt: 'In meinem Bereich würde eine kürzere Woche zu überlangen Arbeitstagen führen.',
              answer: 1,
              explanationRu: 'Mehmet: при тех же часах люди стояли бы у линии по десять часов, что он считает вредным для здоровья.',
            },
            {
              kind: 'match',
              prompt: 'Ich arbeite weniger, verdiene dafür aber auch weniger.',
              answer: 2,
              explanationRu: 'Corinna работает четыре дня в неделю на неполной ставке «mit entsprechend weniger Gehalt».',
            },
            {
              kind: 'match',
              prompt: 'Am Anfang war ich skeptisch, ob das Modell funktioniert.',
              answer: 0,
              explanationRu: 'Jana: «Ehrlich gesagt hatte ich damals große Zweifel, ob das funktionieren kann».',
            },
            {
              kind: 'match',
              prompt: 'Damit Kunden nicht vor verschlossenen Türen stehen, wechseln sich die Kollegen ab.',
              answer: 0,
              explanationRu: 'Jana: клиенты ждут, что с ними свяжутся и в пятницу, поэтому введена система ротации.',
            },
            {
              kind: 'match',
              prompt: 'Ich würde mir eher eine flexiblere Lösung für Mehrarbeit wünschen.',
              answer: 1,
              explanationRu: 'Mehmet предлагает гибко отгуливать сверхурочные через Arbeitszeitkonto вместо четырёхдневки.',
            },
            {
              kind: 'match',
              prompt: 'Seit der Umstellung fehlen die Beschäftigten seltener wegen Krankheit.',
              answer: 3,
              explanationRu: 'Frank Albers: «Auch die Krankmeldungen sind spürbar zurückgegangen».',
            },
            {
              kind: 'match',
              prompt: 'Bessere Bedingungen könnten ehemalige Fachkräfte in den Beruf zurückbringen.',
              answer: 2,
              explanationRu: 'Corinna уверена, что так можно вернуть людей, которые ушли из сферы ухода.',
            },
            {
              kind: 'match',
              prompt: 'Die Beschäftigten müssen an der Planung beteiligt werden.',
              answer: 3,
              explanationRu: 'Frank Albers: правила нельзя устанавливать сверху, у них их разработали вместе со всеми сотрудниками.',
            },
          ],
        },
      ],
    },
    {
      title: 'Betriebsvereinbarung zum mobilen Arbeiten',
      textType: 'Regelungstext',
      texts: [
        {
          label: 'Abschnitt 1',
          body: `Diese Vereinbarung gilt für alle Beschäftigten der Firma Kessler Logistik GmbH, deren Tätigkeit sich ganz oder teilweise außerhalb des Betriebs erledigen lässt. Ausgenommen sind Beschäftigte im Lager und im Fuhrpark sowie Auszubildende im ersten Ausbildungsjahr. Befristet Beschäftigte können nach Ablauf der Probezeit teilnehmen.`,
        },
        {
          label: 'Abschnitt 2',
          body: `Der Wunsch nach mobiler Arbeit ist schriftlich bei der direkten Führungskraft einzureichen. Im Antrag ist anzugeben, an welchen Wochentagen mobil gearbeitet werden soll. Die Führungskraft entscheidet innerhalb von zwei Wochen. Wird ein Antrag abgelehnt, ist die Ablehnung schriftlich zu begründen; in diesem Fall kann der Betriebsrat hinzugezogen werden.`,
        },
        {
          label: 'Abschnitt 3',
          body: `Auch bei mobiler Arbeit gilt das Arbeitszeitgesetz. Die tägliche Arbeitszeit ist im elektronischen Zeiterfassungssystem zu dokumentieren. Zwischen 9 und 15 Uhr müssen die Beschäftigten telefonisch und per Chat erreichbar sein. Außerhalb dieser Kernzeit wird von niemandem erwartet, dass er E-Mails beantwortet oder Anrufe annimmt.`,
        },
        {
          label: 'Abschnitt 4',
          body: `Für die mobile Arbeit wird jeder und jedem Beschäftigten ein Laptop mit Headset zur Verfügung gestellt. Private Geräte dürfen für dienstliche Zwecke nicht genutzt werden. Für Strom und Internet wird eine monatliche Pauschale von 25 Euro gezahlt. Weitere Kosten, etwa für Möbel, werden nur nach vorheriger Absprache übernommen.`,
        },
        {
          label: 'Abschnitt 5',
          body: `Dienstliche Unterlagen sind so aufzubewahren, dass sie für Familienmitglieder oder Besucher nicht zugänglich sind. Der Bildschirm ist bei jeder Arbeitsunterbrechung zu sperren. Vertrauliche Gespräche dürfen nicht in öffentlichen Verkehrsmitteln oder in Cafés geführt werden. Verstöße können arbeitsrechtliche Folgen haben.`,
        },
        {
          label: 'Abschnitt 6',
          body: `Beschäftigte können jederzeit mit einer Frist von vier Wochen an ihren Arbeitsplatz im Betrieb zurückkehren. Auch der Arbeitgeber kann die Vereinbarung beenden, wenn betriebliche Gründe dies erfordern. Die Gründe sind der oder dem Beschäftigten in einem persönlichen Gespräch zu erläutern. Ein Arbeitsplatz im Büro wird in jedem Fall garantiert.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Überschriften a–h und die Abschnitte 1–6. Welche Überschrift passt zu welchem Abschnitt? Zwei Überschriften bleiben übrig.',
          instructionRu: 'Прочитайте заголовки a–h и разделы 1–6. Какой заголовок подходит к какому разделу? Два заголовка лишние.',
          options: [
            'Technische Ausstattung und Kosten',
            'Wer mobil arbeiten darf',
            'Schutz von Unterlagen und Daten',
            'Fortbildungsangebote für Beschäftigte',
            'Erreichbarkeit und Arbeitszeiten',
            'Rückkehr ins Büro',
            'Gesundheitsschutz am heimischen Schreibtisch',
            'So wird ein Antrag gestellt',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Abschnitt 1',
              answer: 1,
              explanationRu: 'Раздел 1 определяет, для кого действует соглашение и кто исключён (склад, автопарк, ученики первого года).',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 2',
              answer: 7,
              explanationRu: 'Раздел 2 описывает подачу заявления руководителю и порядок принятия решения.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 3',
              answer: 4,
              explanationRu: 'Раздел 3: учёт рабочего времени и обязательная доступность с 9 до 15 часов.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 4',
              answer: 0,
              explanationRu: 'Раздел 4: ноутбук и гарнитура, ежемесячная компенсация 25 евро за ток и интернет.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 5',
              answer: 2,
              explanationRu: 'Раздел 5: хранение документов, блокировка экрана, конфиденциальные разговоры.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 6',
              answer: 5,
              explanationRu: 'Раздел 6: сотрудник может в любой момент вернуться на рабочее место в офисе; место гарантировано.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Nachricht aus der Personalabteilung',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf Ihrem Anrufbeantworter.',
      text: `Guten Tag, Herr Petrović, hier spricht Sabine Kraus aus der Personalabteilung der Firma Lindner Technik. Ich rufe wegen Ihrer Bewerbung als Elektroniker an. Ihre Unterlagen sind inzwischen von der Fachabteilung geprüft worden, und wir würden Sie sehr gern kennenlernen. Ursprünglich war das Vorstellungsgespräch für Dienstag geplant, aber leider ist der Termin vom Abteilungsleiter abgesagt worden, weil er an diesem Tag auf einer Messe ist. Könnten Sie stattdessen am Donnerstag um zehn Uhr kommen? Bitte bringen Sie Ihre Zeugnisse im Original mit – die Kopien, die Sie uns geschickt haben, sind leider nicht vollständig, es fehlt die zweite Seite Ihres Abschlusszeugnisses. Der Besucherparkplatz ist zurzeit wegen Bauarbeiten gesperrt, nehmen Sie also am besten die Straßenbahn, Linie vier bis zur Haltestelle Industriestraße. Rufen Sie mich bitte kurz zurück, ob der Termin passt. Sie erreichen mich unter null-sieben-elf, vier-fünf-drei-zwanzig. Vielen Dank und bis bald!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Die Bewerbungsunterlagen von Herrn Petrović sind bereits geprüft worden.',
              answer: true,
              explanationRu: '«Ihre Unterlagen sind inzwischen von der Fachabteilung geprüft worden».',
            },
            {
              kind: 'tf',
              statement: 'Herr Petrović soll mit dem Auto kommen und auf dem Besucherparkplatz parken.',
              answer: false,
              explanationRu: 'Парковка для посетителей закрыта из-за строительных работ, ему советуют ехать на трамвае.',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Warum findet das Gespräch nicht am Dienstag statt?',
              options: [
                'Herr Petrović hat den Termin abgesagt.',
                'Der Abteilungsleiter ist an diesem Tag nicht im Haus.',
                'Die Unterlagen waren noch nicht vollständig.',
              ],
              answer: 1,
              explanationRu: 'Начальник отдела отменил встречу, потому что в этот день он на выставке (auf einer Messe).',
            },
            {
              kind: 'mc',
              question: 'Was soll Herr Petrović mitbringen?',
              options: [
                'seine Zeugnisse im Original',
                'eine Kopie seines Personalausweises',
                'eine zweite Bewerbungsmappe',
              ],
              answer: 0,
              explanationRu: '«Bitte bringen Sie Ihre Zeugnisse im Original mit» — в присланных копиях не хватает второй страницы.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Kollege KI?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin Katrin Ebert',
        B: 'Ulrike Sander, Gewerkschaftssekretärin',
        C: 'Tobias Wenger, Unternehmensberater',
      },
      situation: 'Sie hören eine Diskussion im Radio zum Thema „Künstliche Intelligenz am Arbeitsplatz“.',
      text: `A: Herzlich willkommen zu „Arbeit heute“. Künstliche Intelligenz schreibt Texte, beantwortet Kundenanfragen, prüft Rechnungen. Frau Sander, Sie vertreten Beschäftigte im Dienstleistungsbereich. Wie ist die Stimmung?
B: Ehrlich gesagt: angespannt. In vielen Callcentern sind in den letzten zwei Jahren Stellen gestrichen worden, ohne dass mit den Betroffenen vorher gesprochen wurde. Die Leute erfahren aus der Zeitung, dass ihre Arbeit angeblich bald von einem Programm erledigt wird. Das macht Angst.
A: Herr Wenger, Sie beraten Unternehmen bei der Einführung solcher Systeme. Ist die Angst berechtigt?
C: Ich verstehe sie, aber ich halte sie für übertrieben. In den Projekten, die ich begleitet habe, ist kaum jemand entlassen worden. Die KI übernimmt Routineaufgaben, zum Beispiel das Sortieren von E-Mails. Die komplizierten Fälle landen weiterhin bei Menschen – und die haben dadurch eigentlich mehr Zeit dafür.
B: Das klingt schön, aber in der Praxis wird diese gewonnene Zeit selten für die Beschäftigten genutzt. Meistens wird einfach erwartet, dass jeder mehr Fälle bearbeitet.
A: Was müsste sich denn ändern, Frau Sander?
B: Zuerst einmal muss der Betriebsrat von Anfang an beteiligt werden. Und es braucht Weiterbildung, und zwar während der Arbeitszeit, nicht abends nach Feierabend.
C: Da gebe ich Ihnen völlig recht. Ein System, das gegen die Belegschaft eingeführt wird, scheitert. Ich sage meinen Kunden immer: Planen Sie mindestens so viel Geld für Schulungen ein wie für die Software.
A: Und wer trägt die Verantwortung, wenn die KI einen Fehler macht, etwa eine falsche Auskunft gibt?
C: Rechtlich immer das Unternehmen. Deshalb sollte jede Entscheidung, die für Kunden wichtig ist, von einem Menschen überprüft werden.
B: Nur darf man dann nicht einer einzigen Person hundert solcher Prüfungen pro Stunde zumuten. Sonst wird die Kontrolle zur reinen Formsache.
A: Eine letzte Frage: Wird es in zehn Jahren noch Callcenter geben?
C: Ja, aber kleinere, mit besser qualifizierten Leuten.
B: Ich hoffe es. Aber das hängt davon ab, ob wir jetzt die richtigen Regeln aufstellen.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen den Personen zu.',
          instructionRu: 'Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin Ebert', 'Frau Sander', 'Herr Wenger'],
          items: [
            {
              kind: 'match',
              prompt: 'Beschäftigte wurden über Stellenabbau nicht rechtzeitig informiert.',
              answer: 1,
              explanationRu: 'Frau Sander: места сокращали, не поговорив заранее с сотрудниками; люди узнают обо всём из газет.',
            },
            {
              kind: 'match',
              prompt: 'Durch die Technik bleibt mehr Zeit für schwierige Aufgaben.',
              answer: 2,
              explanationRu: 'Herr Wenger: ИИ берёт на себя рутину, а у людей остаётся больше времени на сложные случаи.',
            },
            {
              kind: 'match',
              prompt: 'Statt Entlastung bringt die Technik oft mehr Arbeitsdruck.',
              answer: 1,
              explanationRu: 'Frau Sander: от каждого просто ожидают, что он обработает больше случаев.',
            },
            {
              kind: 'match',
              prompt: 'In Schulungen sollte genauso viel investiert werden wie in die Programme.',
              answer: 2,
              explanationRu: 'Herr Wenger: «Planen Sie mindestens so viel Geld für Schulungen ein wie für die Software».',
            },
            {
              kind: 'match',
              prompt: 'Wer ist haftbar, wenn ein Programm falsche Informationen weitergibt?',
              answer: 0,
              explanationRu: 'Этот вопрос задаёт модератор: «Und wer trägt die Verantwortung, wenn die KI einen Fehler macht …?»',
            },
            {
              kind: 'match',
              prompt: 'Menschliche Kontrolle ist nur sinnvoll, wenn dafür genug Zeit bleibt.',
              answer: 1,
              explanationRu: 'Frau Sander: нельзя требовать от одного человека сто проверок в час, иначе контроль станет формальностью.',
            },
          ],
        },
      ],
    },
  ],
};
