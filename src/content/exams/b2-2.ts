import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'b2-exam-2',
  level: 'B2',
  title: 'Übungstest B2 – 2',
  lesen: {
    minutes: 65,
    parts: [
      // ───────────────────────── Lesen Teil 1 ─────────────────────────
      {
        teil: 1,
        minutes: 18,
        title: 'Eine Innenstadt ohne Autos?',
        textType: 'Meinungen',
        texts: [
          {
            label: 'Claudia',
            body: `Seit die Stadt den Marktplatz und die umliegenden Straßen für Autos gesperrt hat, kommen spürbar weniger Kunden aus dem Umland in mein Schuhgeschäft. Viele ältere Stammkunden haben mir gesagt, dass ihnen der Weg vom Parkhaus zu weit ist. Natürlich ist die Atmosphäre auf dem Platz schöner geworden, die Cafés sind voll. Aber vom Kaffeetrinken anderer Leute kann ein Schuhgeschäft nicht leben. Ich hätte mir gewünscht, dass die Stadt uns Händler vorher nach unserer Meinung fragt. Stattdessen wurden wir vor vollendete Tatsachen gestellt. Wenn sich nichts ändert, muss ich überlegen, ob ich meinen Laden in ein Einkaufszentrum am Stadtrand verlege.`,
          },
          {
            label: 'Erik',
            body: `Als Verkehrsplaner kenne ich die Erfahrungen aus vielen europäischen Städten, und die sind eindeutig: Anfangs gibt es fast immer Widerstand, nach zwei, drei Jahren will kaum jemand zurück. Eine Innenstadt ohne Autos ist leiser, sicherer und lädt zum Verweilen ein. Allerdings reicht es nicht, Straßen einfach zu sperren. Man muss gleichzeitig gute Alternativen schaffen: dichte Bustakte, sichere Radwege, Lieferzonen für den Handel. Wer das vergisst, darf sich über Ärger nicht wundern. Ich bin überzeugt, dass auch die Geschäfte langfristig profitieren, denn Fußgänger bleiben länger in der Stadt und bummeln mehr.`,
          },
          {
            label: 'Ingrid',
            body: `Ich bin 74, gehe am Stock und bin auf mein Auto angewiesen. Früher konnte ich direkt vor der Apotheke halten, heute muss ich vom Parkhaus fast einen Kilometer laufen. Das schaffe ich an schlechten Tagen einfach nicht. Es gibt zwar einen Bus, aber der fährt nur jede halbe Stunde und hält nicht dort, wo ich hinmuss. Ich verstehe ja, dass sich junge Familien über mehr Platz zum Spielen freuen. Trotzdem hätte man an Menschen wie mich denken müssen. Ein kleiner Elektrobus, der langsam durch die Fußgängerzone fährt, wäre eine echte Hilfe.`,
          },
          {
            label: 'Paul',
            body: `Ich habe ein Semester in Kopenhagen verbracht, und seitdem fahre ich auch hier fast alles mit dem Fahrrad. Für mich ist die autofreie Innenstadt ein großer Gewinn: Ich muss nicht mehr ständig aufpassen, dass mich ein Autofahrer beim Abbiegen übersieht. Was mich allerdings ärgert: Abends ist der Platz wie ausgestorben, weil es in der Innenstadt kaum Wohnungen gibt. Die Stadt sollte dafür sorgen, dass dort wieder mehr Menschen leben und nicht nur einkaufen. Dann wäre das Zentrum auch nach Ladenschluss lebendig.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Texte. Zu welcher Person passen die Aussagen? Die Personen können mehrmals gewählt werden.',
            instructionRu:
              'Прочитайте тексты. К какому человеку относятся высказывания? Одного и того же человека можно выбирать несколько раз.',
            options: ['Claudia', 'Erik', 'Ingrid', 'Paul'],
            items: [
              {
                kind: 'match',
                prompt: 'Wer bemängelt, dass die Betroffenen vor der Entscheidung nicht angehört wurden?',
                answer: 0,
                explanationRu: 'Клаудия: «Ich hätte mir gewünscht, dass die Stadt uns Händler vorher nach unserer Meinung fragt».',
              },
              {
                kind: 'match',
                prompt: 'Wer schlägt ein zusätzliches Verkehrsangebot für Menschen vor, die nicht gut zu Fuß sind?',
                answer: 2,
                explanationRu: 'Ингрид: небольшой электробус через пешеходную зону.',
              },
              {
                kind: 'match',
                prompt: 'Wer erwartet, dass sich die Kritik mit der Zeit legt?',
                answer: 1,
                explanationRu: 'Эрик: сначала сопротивление, а через два-три года почти никто не хочет назад.',
              },
              {
                kind: 'match',
                prompt: 'Wer fühlt sich jetzt im Straßenverkehr sicherer?',
                answer: 3,
                explanationRu: 'Пауль: больше не нужно бояться, что водитель не заметит его при повороте.',
              },
              {
                kind: 'match',
                prompt: 'Wer denkt darüber nach, mit dem eigenen Geschäft umzuziehen?',
                answer: 0,
                explanationRu: 'Клаудия думает перенести магазин в торговый центр на окраине.',
              },
              {
                kind: 'match',
                prompt: 'Wer wünscht sich mehr Wohnraum im Zentrum?',
                answer: 3,
                explanationRu: 'Пауль: в центре должно жить больше людей, тогда он будет оживлённым и вечером.',
              },
              {
                kind: 'match',
                prompt: 'Wer ist überzeugt, dass der Handel letztlich von Fußgängern profitieren wird?',
                answer: 1,
                explanationRu: 'Эрик: «dass auch die Geschäfte langfristig profitieren».',
              },
              {
                kind: 'match',
                prompt: 'Wer kritisiert die schlechte Busverbindung?',
                answer: 2,
                explanationRu: 'Ингрид: автобус ходит раз в полчаса и останавливается не там, где нужно.',
              },
              {
                kind: 'match',
                prompt: 'Wer gibt zu, dass die Sperrung auch Positives gebracht hat, obwohl sie geschäftlich darunter leidet?',
                answer: 0,
                explanationRu: 'Клаудия признаёт: «Natürlich ist die Atmosphäre auf dem Platz schöner geworden», но её магазин теряет клиентов.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 2 ─────────────────────────
      {
        teil: 2,
        minutes: 12,
        title: 'Reparieren statt wegwerfen',
        textType: 'Zeitungsartikel',
        texts: [
          {
            heading: 'Schraubenzieher statt Mülltonne: Die neue Lust am Reparieren',
            body: `Ein Samstagnachmittag im Gemeindezentrum eines Leipziger Stadtteils: An langen Tischen sitzen Menschen mit Toastern, Lampen und Laptops, daneben ehrenamtliche Helfer mit Schraubenziehern und Lötkolben. Was hier stattfindet, nennt sich Repair-Café – und es ist längst kein Nischenphänomen mehr. Bundesweit gibt es inzwischen weit über tausend solcher Treffpunkte, an denen Freiwillige kostenlos beim Reparieren helfen.

„Die Leute kommen nicht nur, um Geld zu sparen“, erklärt Bernd Kühne, pensionierter Elektriker und seit sechs Jahren dabei. „Viele ärgern sich einfach darüber, dass ein Gerät nach kurzer Zeit kaputtgeht und sie es wegwerfen sollen.“ Tatsächlich zeigen Untersuchungen, dass die Lebensdauer vieler Elektrogeräte in den letzten Jahrzehnten gesunken ist. Ob die Hersteller das bewusst planen, ist umstritten. Unstrittig ist dagegen, dass viele Produkte so gebaut werden, dass man sie kaum öffnen kann: Akkus sind fest verklebt, Ersatzteile werden nicht angeboten.

Hier setzt die Politik an. Nach neuen europäischen Vorschriften müssen Hersteller bestimmter Geräte – darunter Waschmaschinen, Kühlschränke und Smartphones – künftig über mehrere Jahre Ersatzteile bereithalten und Reparaturanleitungen zur Verfügung stellen. Verbraucherschützer begrüßen das, halten die Regeln aber für unzureichend. „Was nützt ein Ersatzteil, wenn die Reparatur in der Werkstatt teurer ist als ein neues Gerät?“, fragt Sarah Lenz von einer Verbraucherorganisation.

Einige Länder versuchen deshalb, das Reparieren auch finanziell attraktiver zu machen. In Österreich etwa erhielten Verbraucher einen staatlichen Zuschuss, wenn sie ein Elektrogerät in einem Fachbetrieb reparieren ließen. Das Programm war so erfolgreich, dass das Budget in einigen Regionen schon nach wenigen Wochen aufgebraucht war. In Deutschland gibt es Vergleichbares bisher nur in einzelnen Bundesländern.

Für die Repair-Cafés bedeutet die neue Aufmerksamkeit nicht nur Gutes. Kühne berichtet, dass die Wartezeiten immer länger werden, während die Zahl der Helfer kaum wächst. Vor allem jüngere Freiwillige mit Elektronikkenntnissen seien schwer zu finden. Trotzdem ist er optimistisch: „Jedes Gerät, das wir retten, ist ein kleiner Sieg. Und wer einmal gesehen hat, wie einfach manche Reparatur ist, der kauft beim nächsten Mal vielleicht bewusster ein.“`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Was erfährt man über Repair-Cafés?',
                options: [
                  'Es gibt sie vor allem in Leipzig.',
                  'Dort helfen Freiwillige beim Reparieren, ohne dafür Geld zu verlangen.',
                  'Dort werden gebrauchte Geräte günstig verkauft.',
                ],
                answer: 1,
                explanationRu: '«…an denen Freiwillige kostenlos beim Reparieren helfen»; таких мест по всей Германии больше тысячи.',
              },
              {
                kind: 'mc',
                question: 'Laut Bernd Kühne kommen viele Menschen ins Repair-Café, weil …',
                options: [
                  'sie sich keine neuen Geräte leisten können.',
                  'sie selbst eine Ausbildung zum Elektriker machen möchten.',
                  'sie sich über die kurze Haltbarkeit von Produkten ärgern.',
                ],
                answer: 2,
                explanationRu: '«Viele ärgern sich einfach darüber, dass ein Gerät nach kurzer Zeit kaputtgeht». Экономия – не единственная причина.',
              },
              {
                kind: 'mc',
                question: 'Was gilt laut Text als sicher?',
                options: [
                  'Hersteller planen absichtlich, dass Geräte schnell kaputtgehen.',
                  'Viele Geräte lassen sich nur schwer reparieren, weil man sie kaum öffnen kann.',
                  'Die Lebensdauer von Elektrogeräten ist gleich geblieben.',
                ],
                answer: 1,
                explanationRu: '«Unstrittig ist dagegen…» – приборы трудно открыть, аккумуляторы вклеены. Умысел производителей – спорный вопрос.',
              },
              {
                kind: 'mc',
                question: 'Verbraucherschützer kritisieren an den neuen Vorschriften, dass …',
                options: [
                  'Reparaturen trotzdem oft teurer bleiben als ein Neukauf.',
                  'sie nur für Smartphones gelten.',
                  'Hersteller keine Anleitungen veröffentlichen müssen.',
                ],
                answer: 0,
                explanationRu: '«Was nützt ein Ersatzteil, wenn die Reparatur … teurer ist als ein neues Gerät?»',
              },
              {
                kind: 'mc',
                question: 'Das österreichische Förderprogramm …',
                options: [
                  'war so gefragt, dass das Geld teilweise schnell aufgebraucht war.',
                  'gilt inzwischen in ganz Deutschland.',
                  'richtete sich nur an Fachbetriebe.',
                ],
                answer: 0,
                explanationRu: 'Бюджет в некоторых регионах закончился уже через несколько недель.',
              },
              {
                kind: 'mc',
                question: 'Welches Problem haben die Repair-Cafés?',
                options: [
                  'Es werden zu wenige Geräte gebracht.',
                  'Es fehlen geeignete Räume.',
                  'Es gibt zu wenige Helfer für die steigende Nachfrage.',
                ],
                answer: 2,
                explanationRu: 'Очереди растут, а число помощников почти не увеличивается; особенно не хватает молодых электронщиков.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 3 ─────────────────────────
      {
        teil: 3,
        minutes: 12,
        title: 'Schlaf und Gedächtnis',
        textType: 'Zeitschriftenartikel',
        texts: [
          {
            heading: 'Wer schläft, lernt besser',
            body: `Wer für eine Prüfung lernt, opfert dafür häufig seinen Schlaf. Bis spät in die Nacht werden Vokabeln wiederholt und Formeln auswendig gelernt. [1] Denn Schlaf ist keine verlorene Zeit, sondern spielt eine zentrale Rolle dabei, Gelerntes dauerhaft zu speichern.

Während wir schlafen, ist unser Gehirn alles andere als untätig. [2] Vereinfacht gesagt werden Informationen, die zunächst nur vorübergehend gespeichert sind, ins Langzeitgedächtnis übertragen. Unwichtiges wird dagegen aussortiert.

Wie stark dieser Effekt ist, zeigen zahlreiche Experimente. In einer typischen Studie lernen Versuchspersonen am Abend eine Liste von Wortpaaren. Die eine Hälfte schläft danach normal, die andere bleibt die ganze Nacht wach. [3] Selbst ein kurzer Mittagsschlaf von 60 bis 90 Minuten kann übrigens schon eine positive Wirkung haben.

Nicht nur Fakten profitieren vom Schlaf. [4] Wer etwa ein neues Musikstück auf dem Klavier übt, spielt es am nächsten Morgen oft fehlerfreier als am Abend zuvor – ohne zusätzlich geübt zu haben.

Den Traum vom mühelosen Lernen im Schlaf, etwa mit einem Sprachkurs über Kopfhörer, müssen Forscher allerdings enttäuschen. [5] Völlig neue Inhalte, die man im Schlaf hört, werden dagegen kaum behalten.

Für Schülerinnen, Schüler und Studierende ergibt sich daraus ein klarer Rat: lieber über mehrere Tage verteilt lernen und dazwischen ausreichend schlafen, als in der letzten Nacht vor der Prüfung alles nachholen zu wollen. [6] Wer am Abend vor dem Examen früh ins Bett geht, handelt also nicht faul, sondern klug.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
            instructionRu:
              'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
            options: [
              'Beim Test am nächsten Tag erinnern sich die Ausgeschlafenen deutlich besser an die Begriffe.',
              'Auch Bewegungsabläufe werden in der Nacht gefestigt.',
              'Die Forschung zeigt jedoch, dass diese Strategie wenig sinnvoll ist.',
              'Im Gegenteil: In bestimmten Schlafphasen wird der Tag gewissermaßen noch einmal durchgespielt und geordnet.',
              'Zwar lassen sich bereits gelernte Inhalte durch leise Signale im Schlaf etwas verstärken.',
              'Übermüdung beeinträchtigt nämlich nicht nur das Speichern, sondern auch das Abrufen von Wissen.',
              'Deshalb empfehlen Experten, vor dem Schlafengehen auf Kaffee zu verzichten.',
              'Träume spielen dabei nach heutigem Wissen überhaupt keine Rolle.',
            ],
            items: [
              {
                kind: 'match',
                prompt: 'Lücke 1',
                answer: 2,
                explanationRu: '«diese Strategie» = учиться ночью вместо сна; далее «Denn Schlaf ist keine verlorene Zeit».',
              },
              {
                kind: 'match',
                prompt: 'Lücke 2',
                answer: 3,
                explanationRu: '«Im Gegenteil» продолжает мысль «alles andere als untätig»; затем объясняется, что происходит с информацией.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 3',
                answer: 0,
                explanationRu: 'Результат описанного эксперимента: выспавшиеся помнят слова лучше.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 4',
                answer: 1,
                explanationRu: '«Nicht nur Fakten…» – «Auch Bewegungsabläufe…», пример с игрой на пианино.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 5',
                answer: 4,
                explanationRu: 'Пара «Zwar … – … dagegen»: уже выученное можно немного усилить, а совершенно новое почти не запоминается.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 6',
                answer: 5,
                explanationRu: 'Обоснование совета не учить всю ночь перед экзаменом: усталость мешает и вспоминать знания.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 4 ─────────────────────────
      {
        teil: 4,
        minutes: 15,
        title: 'Freier Eintritt in Museen?',
        textType: 'Leserkommentare',
        texts: [
          {
            label: 'a',
            heading: 'Miriam, Museumspädagogin',
            body: `Bei uns ist der Eintritt seit zwei Jahren am ersten Sonntag im Monat frei. An diesen Tagen kommen Menschen, die wir sonst nie sehen: Familien mit vielen Kindern, Jugendliche in Gruppen, Leute, die zum ersten Mal überhaupt ein Museum betreten. Diese Begegnungen sind für mich das Schönste an meinem Beruf.`,
          },
          {
            label: 'b',
            heading: 'Herbert, Rentner',
            body: `Was nichts kostet, ist auch nichts wert – so sehen das leider viele. Bei kostenlosen Veranstaltungen erlebe ich es immer wieder: Die Leute melden sich an und kommen dann einfach nicht. Ein Museum ist die Arbeit von vielen Menschen, und das darf ruhig etwas kosten. Zehn Euro für eine gute Ausstellung finde ich völlig angemessen.`,
          },
          {
            label: 'c',
            heading: 'Sofia, Studentin',
            body: `Der Eintrittspreis ist doch gar nicht das Hauptproblem. Viele junge Leute halten Museen einfach für langweilig und verstaubt. Solange es keine interaktiven Angebote, keine Abendveranstaltungen und keine zeitgemäße Präsentation gibt, bleiben sie weg – egal, ob der Eintritt fünf Euro kostet oder gar nichts.`,
          },
          {
            label: 'd',
            heading: 'Klaus, Stadtrat',
            body: `Unsere Stadt hat schon jetzt kaum Geld für Schwimmbäder und Bibliotheken. Wenn die Museen auf ihre Einnahmen verzichten, muss das Geld woanders eingespart werden. Ich bin deshalb für eine Lösung, die gezielt hilft: freier Eintritt für Kinder, Schüler und Menschen mit geringem Einkommen, für alle anderen weiterhin ein Ticket.`,
          },
          {
            label: 'e',
            heading: 'Lena, Stadtführerin',
            body: `In London sind viele große Museen gratis, und das ist ein riesiger Anziehungspunkt für Besucher aus aller Welt. Davon profitieren Hotels, Restaurants und Geschäfte. Ich bin sicher, dass sich freier Eintritt auch für unsere Stadt wirtschaftlich auszahlen würde.`,
          },
          {
            label: 'f',
            heading: 'Ahmet, Vater von drei Kindern',
            body: `Für eine fünfköpfige Familie wird ein Museumsbesuch schnell zu einer Ausgabe von fünfzig Euro – ohne Café und Andenken. Das überlegen wir uns dreimal. Ich würde mit meinen Kindern viel öfter hingehen, wenn es günstiger wäre, denn sie interessieren sich sehr für Geschichte und Technik.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sie lesen in einer Zeitung Kommentare zu der Frage, ob Museen keinen Eintritt mehr verlangen sollten. Welcher Kommentar passt zu welcher Aussage?',
            instructionRu:
              'В газете вы читаете комментарии к вопросу, должны ли музеи отказаться от платы за вход. Какой комментарий подходит к какому высказыванию?',
            options: ['a – Miriam', 'b – Herbert', 'c – Sofia', 'd – Klaus', 'e – Lena', 'f – Ahmet'],
            items: [
              {
                kind: 'match',
                prompt: 'Diese Person glaubt, dass kostenlose Museen den Tourismus fördern.',
                answer: 4,
                explanationRu: 'Лена: бесплатные музеи Лондона привлекают туристов, выигрывают отели и рестораны.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person findet, dass sich die Museen modernisieren müssen.',
                answer: 2,
                explanationRu: 'София: нужны интерактивные предложения и современная подача, цена – не главное.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person würde bei niedrigeren Preisen häufiger ins Museum gehen.',
                answer: 5,
                explanationRu: 'Ахмет: «Ich würde … viel öfter hingehen, wenn es günstiger wäre».',
              },
              {
                kind: 'match',
                prompt: 'Diese Person schlägt vor, nur bestimmte Gruppen vom Eintritt zu befreien.',
                answer: 3,
                explanationRu: 'Клаус: бесплатно для детей, школьников и малообеспеченных, остальным – билет.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person meint, dass man kostenlose Angebote weniger schätzt.',
                answer: 1,
                explanationRu: 'Херберт: «Was nichts kostet, ist auch nichts wert».',
              },
              {
                kind: 'match',
                prompt: 'Diese Person berichtet, dass freier Eintritt ein neues Publikum anzieht.',
                answer: 0,
                explanationRu: 'Мириам: в бесплатные дни приходят люди, которых обычно в музее не бывает.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 5 ─────────────────────────
      {
        teil: 5,
        minutes: 8,
        title: 'Teilnahmebedingungen der Volkshochschule',
        textType: 'Geschäftsbedingungen',
        texts: [
          {
            label: '§ 1',
            body: `Die Anmeldung zu unseren Kursen ist online, telefonisch oder persönlich in der Geschäftsstelle möglich. Sie ist verbindlich und wird erst wirksam, wenn Sie eine schriftliche Bestätigung per E-Mail erhalten haben. Ist ein Kurs bereits ausgebucht, setzen wir Sie auf Wunsch auf eine Warteliste.`,
          },
          {
            label: '§ 2',
            body: `Die Kursgebühr wird vor Kursbeginn per Lastschrift eingezogen. Schülerinnen und Schüler, Studierende sowie Inhaber des städtischen Sozialpasses erhalten auf Antrag eine Ermäßigung von 50 Prozent. Der entsprechende Nachweis ist spätestens bei Kursbeginn vorzulegen.`,
          },
          {
            label: '§ 3',
            body: `Ein Rücktritt von der Anmeldung ist bis zehn Tage vor Kursbeginn kostenlos möglich. Bei einem späteren Rücktritt wird eine Bearbeitungsgebühr von 15 Euro erhoben. Wer einem Kurs ohne Abmeldung fernbleibt, muss die volle Gebühr bezahlen.`,
          },
          {
            label: '§ 4',
            body: `Die Volkshochschule behält sich vor, Kurse bei zu geringer Teilnehmerzahl abzusagen. In diesem Fall wird die bereits gezahlte Gebühr vollständig erstattet. Fällt ein einzelner Termin wegen Krankheit der Kursleitung aus, wird er nach Möglichkeit nachgeholt.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sie möchten sich für einen Kurs an der Volkshochschule anmelden und lesen die Teilnahmebedingungen. Welche Überschrift passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
            instructionRu:
              'Вы хотите записаться на курс в народном университете и читаете условия участия. Какой заголовок подходит к какому разделу? Два заголовка лишние.',
            options: [
              'Absage von Kursen und Terminen',
              'Teilnahmebescheinigungen und Zertifikate',
              'Anmeldung und Bestätigung',
              'Abmeldung durch Teilnehmende',
              'Haftung bei Unfällen',
              'Zahlung und Ermäßigungen',
            ],
            items: [
              {
                kind: 'match',
                prompt: '§ 1',
                answer: 2,
                explanationRu: 'Способы записи, письменное подтверждение, лист ожидания.',
              },
              {
                kind: 'match',
                prompt: '§ 2',
                answer: 5,
                explanationRu: 'Оплата через списание со счёта и скидка 50 %.',
              },
              {
                kind: 'match',
                prompt: '§ 3',
                answer: 3,
                explanationRu: 'Отказ участника от курса: бесплатно за 10 дней, позже – сбор 15 евро.',
              },
              {
                kind: 'match',
                prompt: '§ 4',
                answer: 0,
                explanationRu: 'Народный университет может отменить курс или отдельное занятие.',
              },
            ],
          },
        ],
      },
    ],
  },
  hoeren: {
    minutes: 40,
    parts: [
      // ───────────────────────── Hören Teil 1 ─────────────────────────
      {
        teil: 1,
        instructionDe:
          'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
        instructionRu:
          'Вы услышите пять коротких текстов. Каждый текст звучит два раза. К каждому тексту – два задания. Выберите правильный ответ в каждом задании.',
        segments: [
          {
            title: 'Nachricht von der Autowerkstatt',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: `Guten Tag, Herr Lorenz, hier ist die Autowerkstatt Becker. Wir haben Ihren Wagen jetzt durchgesehen. Die Bremsen sind in Ordnung, aber bei der Inspektion haben wir festgestellt, dass die Batterie fast am Ende ist. Wir würden sie gern austauschen; das kostet etwa 180 Euro zusätzlich. Bitte geben Sie uns kurz Bescheid, ob wir das machen sollen. Wenn wir bis heute 14 Uhr nichts von Ihnen hören, lassen wir die alte Batterie drin, dann können Sie das Auto wie vereinbart um 17 Uhr abholen. Mit neuer Batterie wird es leider erst morgen früh fertig, weil wir das Teil bestellen müssen.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Die Werkstatt hat ein Problem mit den Bremsen festgestellt.',
                    answer: false,
                    explanationRu: 'Тормоза в порядке («in Ordnung»), проблема с аккумулятором.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wenn Herr Lorenz eine neue Batterie möchte, …',
                    options: [
                      'kann er das Auto heute um 17 Uhr abholen.',
                      'muss er bis 14 Uhr in die Werkstatt kommen.',
                      'ist das Auto erst am nächsten Morgen fertig.',
                    ],
                    answer: 2,
                    explanationRu: '«Mit neuer Batterie wird es leider erst morgen früh fertig», потому что деталь нужно заказать.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Wissenschaftsnachrichten',
            kind: 'monolog',
            situation: 'Sie hören eine Meldung in den Wissenschaftsnachrichten im Radio.',
            playCount: 2,
            text: `Forscher der Universität Freiburg haben herausgefunden, dass Stadtparks deutlich mehr zur Kühlung beitragen als bisher angenommen. In heißen Sommernächten war es in der Nähe großer Grünflächen bis zu sechs Grad kühler als in dicht bebauten Vierteln. Entscheidend sei dabei nicht nur die Größe der Parks, sondern vor allem die Zahl alter Bäume, erklärte die Leiterin der Studie. Reine Rasenflächen hätten dagegen kaum einen Effekt. Die Forscher empfehlen den Städten deshalb, vorhandene Bäume besser zu schützen, denn ein neu gepflanzter Baum brauche Jahrzehnte, bis er dieselbe Wirkung entfalte.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Laut der Studie kühlen Rasenflächen genauso gut wie Bäume.',
                    answer: false,
                    explanationRu: 'Газоны почти не дают эффекта («kaum einen Effekt»), важны старые деревья.',
                  },
                  {
                    kind: 'mc',
                    question: 'Die Forscher raten den Städten, …',
                    options: [
                      'mehr Rasenflächen anzulegen.',
                      'alte Bäume zu erhalten.',
                      'neue Parks am Stadtrand zu bauen.',
                    ],
                    answer: 1,
                    explanationRu: '«vorhandene Bäume besser zu schützen» – новому дереву нужны десятилетия.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Durchsage im Zug',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Zug.',
            playCount: 2,
            text: `Sehr geehrte Fahrgäste, wegen einer Signalstörung zwischen Fulda und Kassel hat unser ICE derzeit etwa 25 Minuten Verspätung. Reisende mit Anschluss an den Regionalexpress nach Göttingen werden gebeten, sich im Bordrestaurant zu melden; unser Zugbegleiter klärt dort, ob der Anschlusszug warten kann. Fahrgäste mit Ziel Hamburg erreichen ihr Ziel ohne Umstieg. Wir bitten um Entschuldigung. Als kleine Entschädigung erhalten alle Reisenden im Bordrestaurant ein Heißgetränk ihrer Wahl kostenlos.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Der Zug hat wegen eines technischen Problems Verspätung.',
                    answer: true,
                    explanationRu: 'Причина – неисправность сигнала («Signalstörung»).',
                  },
                  {
                    kind: 'mc',
                    question: 'Was bekommen die Fahrgäste im Bordrestaurant?',
                    options: [
                      'Ein kostenloses Getränk.',
                      'Einen Gutschein für die nächste Fahrt.',
                      'Eine neue Fahrkarte.',
                    ],
                    answer: 0,
                    explanationRu: '«ein Heißgetränk ihrer Wahl kostenlos» – бесплатный горячий напиток.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Gespräch unter Kollegen',
            kind: 'dialog',
            speakers: { A: 'Kollegin', B: 'Jonas' },
            situation: 'Sie hören ein Gespräch zwischen zwei Kollegen im Büro.',
            playCount: 2,
            text: `A: Sag mal, Jonas, gehst du morgen auch zu der Schulung über das neue Buchungssystem?
B: Eigentlich schon, aber ich habe gerade gesehen, dass sie von neun bis fünf geht. Den ganzen Tag! Ich habe doch um drei den Termin mit dem Kunden aus Lyon.
A: Ach so. Weißt du was? Die Schulung gibt es nächste Woche noch einmal, am Dienstag. Frag doch Frau Ebert, ob du da hingehen kannst.
B: Gute Idee. Dann kann ich die Präsentation für Lyon auch in Ruhe fertig machen. Und du? Freust du dich auf das neue System?
A: Na ja, es soll vieles einfacher machen. Aber am Anfang gibt es bestimmt erst mal Chaos.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Jonas kann morgen nicht den ganzen Tag an der Schulung teilnehmen.',
                    answer: true,
                    explanationRu: 'Обучение идёт с девяти до пяти, а у Йонаса в три встреча с клиентом из Лиона.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was schlägt die Kollegin vor?',
                    options: [
                      'Den Kundentermin zu verschieben.',
                      'Nur am Vormittag zur Schulung zu gehen.',
                      'An einem anderen Tag an der Schulung teilzunehmen.',
                    ],
                    answer: 2,
                    explanationRu: 'Обучение повторится во вторник на следующей неделе – нужно спросить фрау Эберт.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Lesepaten gesucht',
            kind: 'monolog',
            situation: 'Sie hören einen Aufruf im Lokalradio.',
            playCount: 2,
            text: `Sie haben Zeit und möchten sich engagieren? Der Verein „Lesepaten Bremen“ sucht Ehrenamtliche, die Grundschulkindern einmal pro Woche vorlesen oder mit ihnen gemeinsam lesen. Vorkenntnisse sind nicht nötig – wichtig sind Geduld und Freude am Umgang mit Kindern. Bevor es losgeht, besuchen alle neuen Lesepaten eine kostenlose Einführung an zwei Abenden. Außerdem brauchen Sie ein erweitertes Führungszeugnis; die Kosten dafür übernimmt der Verein. Mehr Informationen gibt es auf unserer Internetseite oder bei unserem Infoabend am 12. März.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Für diese Tätigkeit braucht man pädagogische Erfahrung.',
                    answer: false,
                    explanationRu: '«Vorkenntnisse sind nicht nötig» – важны терпение и любовь к детям.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was bezahlt der Verein?',
                    options: [
                      'Die Fahrtkosten zur Schule.',
                      'Die Kosten für ein Dokument.',
                      'Die Bücher für die Kinder.',
                    ],
                    answer: 1,
                    explanationRu: 'Расширенную справку о несудимости («Führungszeugnis») оплачивает объединение.',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ───────────────────────── Hören Teil 2 ─────────────────────────
      {
        teil: 2,
        instructionDe:
          'Sie hören ein Interview. Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите интервью. Интервью звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Übersetzen im Zeitalter der künstlichen Intelligenz',
            kind: 'dialog',
            speakers: { A: 'Moderatorin', B: 'Jan Becker, Literaturübersetzer' },
            situation: 'Sie hören im Radio ein Interview mit einem Übersetzer.',
            playCount: 2,
            text: `A: In unserer Reihe „Berufe im Wandel“ spreche ich heute mit Jan Becker. Er übersetzt seit über zwanzig Jahren Romane aus dem Englischen und Spanischen ins Deutsche. Herr Becker, viele sagen, Ihr Beruf werde durch künstliche Intelligenz bald überflüssig. Machen Sie sich Sorgen?
B: Sorgen wäre zu viel gesagt, aber ich beobachte die Entwicklung natürlich genau. Bei Gebrauchstexten, also Bedienungsanleitungen oder einfachen Geschäftsbriefen, sind die Programme inzwischen erstaunlich gut. Kollegen, die vor allem solche Texte übersetzt haben, haben tatsächlich viele Aufträge verloren.
A: Und bei Literatur?
B: Da sieht es anders aus. Ein Roman lebt von Rhythmus, von Anspielungen, von Humor. Ein Programm übersetzt einen Satz meistens korrekt, aber es versteht nicht, warum ein Autor an einer bestimmten Stelle ein ungewöhnliches Wort gewählt hat. Die Ergebnisse klingen glatt, aber oft auch ein bisschen leblos.
A: Nutzen Sie solche Programme selbst?
B: Ja, aber nur für bestimmte Aufgaben. Wenn ich zum Beispiel einen Fachbegriff aus der Seefahrt nicht kenne, lasse ich mir Vorschläge machen. Oder ich prüfe am Ende, ob ich einen Satz übersehen habe. Die eigentliche Übersetzung mache ich aber nach wie vor selbst. Das ist für mich der kreative Teil, den ich mir nicht nehmen lassen möchte.
A: Manche Verlage lassen Bücher inzwischen maschinell vorübersetzen und dann nur noch von Menschen überarbeiten. Was halten Sie davon?
B: Ehrlich gesagt nicht viel. Das klingt effizient, aber in der Praxis dauert das Überarbeiten oft fast genauso lange wie eine neue Übersetzung, wird aber deutlich schlechter bezahlt. Und es besteht die Gefahr, dass man sich zu sehr an der Maschinenversion orientiert. Am Ende klingen dann alle Bücher gleich.
A: Was würden Sie jungen Menschen raten, die heute Übersetzer werden möchten?
B: Ich würde ihnen nicht abraten, ganz im Gegenteil. Aber sie sollten sich spezialisieren, etwa auf ein bestimmtes Fachgebiet oder auf eine Sprache, die nicht so verbreitet ist. Und sie sollten lernen, mit den neuen Werkzeugen umzugehen, statt sie zu ignorieren. Wer die Technik kennt, kann auch ihre Grenzen besser einschätzen.
A: Zum Schluss: Wird man in zwanzig Jahren noch Bücher lesen, die ein Mensch übersetzt hat?
B: Davon bin ich überzeugt. Vielleicht wird es weniger von uns geben. Aber Leserinnen und Leser merken den Unterschied – und ich glaube, sie werden auch bereit sein, dafür zu bezahlen.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Welche Übersetzer haben laut Herrn Becker bereits viele Aufträge verloren?',
                    options: [
                      'Übersetzer von Romanen.',
                      'Übersetzer von Gebrauchstexten.',
                      'Übersetzer aus dem Spanischen.',
                    ],
                    answer: 1,
                    explanationRu: 'Те, кто переводил в основном инструкции и деловые письма («Gebrauchstexte»).',
                  },
                  {
                    kind: 'mc',
                    question: 'Was fehlt maschinellen Übersetzungen von Romanen?',
                    options: [
                      'Ein Verständnis für die stilistischen Entscheidungen des Autors.',
                      'Grammatische Korrektheit.',
                      'Ein ausreichend großer Wortschatz.',
                    ],
                    answer: 0,
                    explanationRu: 'Программа переводит правильно, но не понимает, почему автор выбрал необычное слово.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wofür benutzt Herr Becker KI-Programme?',
                    options: [
                      'Für den ersten Entwurf einer Übersetzung.',
                      'Für Gebrauchstexte, die er nebenbei übersetzt.',
                      'Zur Suche nach Fachbegriffen und zur Kontrolle.',
                    ],
                    answer: 2,
                    explanationRu: 'Он просит подсказать морские термины и проверяет, не пропустил ли предложение.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was kritisiert er an maschinellen Vorübersetzungen?',
                    options: [
                      'Die Verlage setzen zu kurze Fristen.',
                      'Die Überarbeitung ist kaum schneller, wird aber schlechter bezahlt.',
                      'Die Programme sind zu teuer.',
                    ],
                    answer: 1,
                    explanationRu: 'Редактура длится почти столько же, сколько новый перевод, но оплачивается хуже.',
                  },
                  {
                    kind: 'mc',
                    question: 'Jungen Übersetzern rät er, …',
                    options: [
                      'einen anderen Beruf zu wählen.',
                      'auf die neuen Programme zu verzichten.',
                      'sich auf ein Fachgebiet oder eine seltene Sprache zu spezialisieren.',
                    ],
                    answer: 2,
                    explanationRu: '«sie sollten sich spezialisieren» и учиться работать с новыми инструментами.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wie sieht Herr Becker die Zukunft seines Berufs?',
                    options: [
                      'Der Beruf wird ganz verschwinden.',
                      'Es wird auch künftig von Menschen übersetzte Literatur geben.',
                      'Übersetzer werden mehr verdienen als heute.',
                    ],
                    answer: 1,
                    explanationRu: '«Davon bin ich überzeugt» – возможно, переводчиков станет меньше, но читатели заметят разницу.',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ───────────────────────── Hören Teil 3 ─────────────────────────
      {
        teil: 3,
        instructionDe:
          'Sie hören eine Diskussion. Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen den Personen zu.',
        instructionRu:
          'Вы услышите дискуссию. Дискуссия звучит один раз. Кто что говорит? Соотнесите высказывания с участниками.',
        segments: [
          {
            title: 'Wählen ab 16?',
            kind: 'discussion',
            speakers: {
              A: 'Moderator Tobias Kern',
              B: 'Lisa Hoffmann, Politiklehrerin',
              C: 'Bernd Albrecht, Politikwissenschaftler',
            },
            situation: 'Sie hören im Radio eine Diskussion über die Senkung des Wahlalters.',
            playCount: 1,
            text: `A: Willkommen bei „Forum Politik“. Bei Kommunalwahlen dürfen in vielen Bundesländern schon 16-Jährige wählen, bei der Bundestagswahl erst Volljährige. Soll sich das ändern? Darüber diskutiere ich mit Lisa Hoffmann, Politiklehrerin an einem Gymnasium in Hannover, und mit dem Politikwissenschaftler Bernd Albrecht. Frau Hoffmann, warum sollten 16-Jährige wählen dürfen?
B: Weil es um ihre Zukunft geht. Klimapolitik, Rente, Bildung – die Entscheidungen, die heute getroffen werden, betreffen die Jungen am längsten. Gleichzeitig wird unsere Gesellschaft immer älter, und die Stimmen junger Menschen haben immer weniger Gewicht. Das Wahlalter zu senken wäre ein kleiner Ausgleich.
C: Das Argument verstehe ich, aber man könnte es mit derselben Logik auch auf 14-Jährige ausdehnen. Irgendwo muss eine Grenze sein, und mit 18 ist man volljährig. Man darf Verträge unterschreiben und trägt die volle Verantwortung für sein Handeln. Ich finde es konsequent, dass Rechte und Pflichten zusammen beginnen.
A: Herr Albrecht, oft hört man ja, 16-Jährige seien einfach noch nicht reif genug.
C: So würde ich das nicht formulieren. Studien zeigen, dass viele 16-Jährige politisch durchaus gut informiert sind. Mein Einwand ist eher ein anderer: Die Wahlbeteiligung bei Erstwählern ist niedrig, und wer beim ersten Mal nicht wählt, tut es oft auch später nicht. Mit 16 interessieren sich viele noch nicht wirklich für Parteien.
B: Da habe ich ganz andere Erfahrungen gemacht. Mit 16 sind die Jugendlichen noch in der Schule. Wir können im Unterricht über die Wahl sprechen, Wahlprogramme vergleichen, Kandidaten einladen. Mit 18 oder 19 sind viele gerade umgezogen, in der Ausbildung oder im Studium – da geht die erste Wahl schnell unter. In Österreich, wo man schon seit Jahren ab 16 wählen darf, haben die Jüngsten sogar häufiger gewählt als die etwas Älteren.
A: Besteht nicht die Gefahr, dass Lehrkräfte ihre Schüler politisch beeinflussen?
B: Die Gefahr sehe ich nicht. Lehrkräfte sind zur Neutralität verpflichtet, und Schülerinnen und Schüler reagieren ziemlich kritisch, wenn jemand ihnen eine Meinung vorschreiben will.
C: Ganz so optimistisch bin ich nicht. Viel größer ist meiner Meinung nach aber der Einfluss der sozialen Medien. Junge Menschen informieren sich überwiegend über kurze Videos, und dort verbreiten sich einfache Botschaften besonders schnell.
B: Das gilt doch für Erwachsene genauso! Gerade deshalb ist politische Bildung in der Schule so wichtig.
A: Gibt es einen Weg, den Sie beide mittragen könnten?
C: Ich könnte mir vorstellen, das Wahlalter zunächst bei weiteren Landtagswahlen zu senken und die Erfahrungen wissenschaftlich auszuwerten. Danach kann man über die Bundestagswahl entscheiden.
B: Das wäre ein vernünftiger Zwischenschritt – auch wenn ich mir mehr Mut wünschen würde.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie zu: Moderator, Lisa Hoffmann oder Bernd Albrecht.',
                instructionRu: 'Кто что говорит? Выберите: ведущий, Лиза Хоффман или Бернд Альбрехт.',
                options: ['Moderator Tobias Kern', 'Lisa Hoffmann', 'Bernd Albrecht'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Das Wahlrecht sollte mit der Volljährigkeit beginnen.',
                    answer: 2,
                    explanationRu: 'Альбрехт: права и обязанности должны начинаться одновременно – с 18 лет.',
                  },
                  {
                    kind: 'match',
                    prompt: 'In der Schule kann man junge Menschen gut auf ihre erste Wahl vorbereiten.',
                    answer: 1,
                    explanationRu: 'Хоффман: на уроках можно сравнивать программы и приглашать кандидатов.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Jugendlichen wird häufig mangelnde Reife unterstellt.',
                    answer: 0,
                    explanationRu: 'Ведущий: «oft hört man ja, 16-Jährige seien einfach noch nicht reif genug».',
                  },
                  {
                    kind: 'match',
                    prompt: 'In einer alternden Gesellschaft verlieren junge Menschen an politischem Einfluss.',
                    answer: 1,
                    explanationRu: 'Хоффман: общество стареет, голоса молодых весят всё меньше.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Man sollte zunächst auf Länderebene Erfahrungen sammeln und diese untersuchen.',
                    answer: 2,
                    explanationRu: 'Альбрехт предлагает сначала снизить возраст на выборах в ландтаги и научно оценить опыт.',
                  },
                  {
                    kind: 'match',
                    prompt: 'In einem Nachbarland haben besonders junge Wähler eine hohe Beteiligung gezeigt.',
                    answer: 1,
                    explanationRu: 'Хоффман: в Австрии самые молодые голосовали даже чаще, чем чуть более старшие.',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ───────────────────────── Hören Teil 4 ─────────────────────────
      {
        teil: 4,
        instructionDe:
          'Sie hören einen Vortrag. Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите доклад. Доклад звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Warum wir Dinge aufschieben',
            kind: 'monolog',
            situation: 'Sie hören einen Vortrag in der Ringvorlesung „Psychologie im Alltag“.',
            playCount: 2,
            text: `Guten Tag, meine Damen und Herren, herzlich willkommen zur heutigen Sitzung unserer Ringvorlesung „Psychologie im Alltag“. Bevor ich anfange, eine kleine Frage: Wer von Ihnen hat heute schon etwas aufgeschoben, das eigentlich wichtig gewesen wäre? … Ich sehe, fast alle. Keine Sorge, Sie sind in guter Gesellschaft.

Das Aufschieben von Aufgaben – in der Fachsprache Prokrastination genannt – ist weit verbreitet. Etwa 20 Prozent der Erwachsenen geben an, so häufig aufzuschieben, dass es ihnen im Beruf oder im Privatleben ernsthaft schadet. Unter Studierenden ist der Anteil sogar noch höher. Wichtig ist mir aber gleich zu Beginn ein Punkt: Prokrastination hat nichts mit Faulheit zu tun. Faule Menschen haben keine Lust zu arbeiten und fühlen sich dabei wohl. Wer prokrastiniert, möchte die Aufgabe eigentlich erledigen – und leidet darunter, dass er es nicht tut.

Warum schieben wir also auf? Die Forschung sieht darin heute vor allem ein Problem der Gefühlsregulation. Eine Aufgabe löst unangenehme Gefühle aus: Langeweile, Unsicherheit oder die Angst, zu versagen. Indem wir sie aufschieben, verschwinden diese Gefühle für den Moment. Das Gehirn belohnt uns sozusagen kurzfristig für das Ausweichen. Langfristig wird das Problem natürlich größer, denn der Druck steigt, je näher die Frist rückt.

Besonders anfällig sind übrigens Perfektionisten. Das klingt zunächst paradox, ist aber leicht zu erklären: Wer den Anspruch hat, alles perfekt zu machen, empfindet den Beginn einer Aufgabe als besonders bedrohlich. Lieber fängt man gar nicht erst an, als etwas Unvollkommenes abzuliefern.

Was hilft also? Erstens: große Aufgaben in kleine, konkrete Schritte zerlegen. „Hausarbeit schreiben“ ist zu abstrakt. „Drei Artikel zum Thema heraussuchen“ ist ein Schritt, den man heute erledigen kann. Zweitens: feste Zeiten einplanen, und zwar mit Uhrzeit und Ort – also nicht „morgen lerne ich“, sondern „morgen um neun in der Bibliothek“. Drittens: Ablenkungen vorher beseitigen. Ein Smartphone, das im Nebenzimmer liegt, ist deutlich weniger verführerisch als eines neben der Tastatur.

Und viertens – das überrascht viele: Seien Sie nachsichtig mit sich selbst. In einer kanadischen Studie haben Studierende, die sich verziehen hatten, dass sie das Lernen für eine Prüfung aufgeschoben hatten, vor der nächsten Prüfung weniger aufgeschoben als diejenigen, die sich heftige Vorwürfe gemacht hatten. Selbstkritik verstärkt nämlich genau die negativen Gefühle, vor denen wir eigentlich fliehen.

Wann sollte man sich professionelle Hilfe suchen? Wenn das Aufschieben über Monate anhält, wenn man deswegen Prüfungen nicht besteht oder den Arbeitsplatz zu verlieren droht. Viele Hochschulen bieten dafür inzwischen spezielle Beratungen an.

Im nächsten Teil schauen wir uns an, wie man diese Strategien konkret in den Studienalltag einbauen kann.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wie viele Erwachsene leiden ernsthaft unter Prokrastination?',
                    options: [
                      'Fast alle.',
                      'Etwa jeder Fünfte.',
                      'Mehr als unter den Studierenden.',
                    ],
                    answer: 1,
                    explanationRu: 'Около 20 % взрослых; среди студентов – ещё больше.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was unterscheidet Menschen, die prokrastinieren, von faulen Menschen?',
                    options: [
                      'Sie wollen die Aufgabe eigentlich erledigen.',
                      'Sie arbeiten unter Druck besser.',
                      'Sie haben mehr Aufgaben als andere.',
                    ],
                    answer: 0,
                    explanationRu: '«Wer prokrastiniert, möchte die Aufgabe eigentlich erledigen» и страдает от этого.',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum schieben Menschen laut der Forschung Aufgaben auf?',
                    options: [
                      'Weil sie sich schlecht organisieren.',
                      'Weil sie die Fristen vergessen.',
                      'Weil sie unangenehmen Gefühlen ausweichen wollen.',
                    ],
                    answer: 2,
                    explanationRu: 'Это проблема регуляции эмоций: откладывая, мы на время избавляемся от неприятных чувств.',
                  },
                  {
                    kind: 'mc',
                    question: 'Perfektionisten …',
                    options: [
                      'prokrastinieren seltener als andere.',
                      'fangen aus Angst vor Fehlern oft gar nicht erst an.',
                      'erledigen Aufgaben besonders schnell.',
                    ],
                    answer: 1,
                    explanationRu: '«Lieber fängt man gar nicht erst an, als etwas Unvollkommenes abzuliefern».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was ist nach dem Vortrag ein gutes Beispiel für einen konkreten Schritt?',
                    options: [
                      'Eine Hausarbeit schreiben.',
                      'Morgen lernen.',
                      'Drei Artikel zum Thema heraussuchen.',
                    ],
                    answer: 2,
                    explanationRu: '«Hausarbeit schreiben» слишком абстрактно; «Drei Artikel … heraussuchen» – конкретный шаг.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was empfiehlt der Referent in Bezug auf das Smartphone?',
                    options: [
                      'Es in einem anderen Raum zu lassen.',
                      'Es ganz auszuschalten.',
                      'Eine App zur Zeitplanung zu nutzen.',
                    ],
                    answer: 0,
                    explanationRu: 'Смартфон в соседней комнате гораздо меньше отвлекает.',
                  },
                  {
                    kind: 'mc',
                    question: 'Die kanadische Studie zeigt, dass …',
                    options: [
                      'Selbstkritik zu besseren Noten führt.',
                      'Studierende, die sich selbst verzeihen, später weniger aufschieben.',
                      'Studierende vor Prüfungen besonders häufig aufschieben.',
                    ],
                    answer: 1,
                    explanationRu: 'Те, кто простил себя, перед следующим экзаменом откладывали меньше; самокритика усиливает негативные чувства.',
                  },
                  {
                    kind: 'mc',
                    question: 'Wann sollte man sich professionelle Hilfe suchen?',
                    options: [
                      'Sobald man eine Aufgabe einmal aufgeschoben hat.',
                      'Wenn man perfektionistisch veranlagt ist.',
                      'Wenn das Aufschieben lange anhält und ernste Folgen hat.',
                    ],
                    answer: 2,
                    explanationRu: 'Если это длится месяцами и из-за этого проваливают экзамены или рискуют потерять работу.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  schreiben: {
    minutes: 75,
    tasks: [
      {
        teil: 1,
        instructionDe:
          'Sie schreiben einen Forumsbeitrag. Sie haben in einem Online-Forum den folgenden Beitrag gelesen. Schreiben Sie nun Ihre Meinung (ca. 150 Wörter). Gehen Sie auf die vier Punkte unten ein. Überlegen Sie sich eine passende Reihenfolge der Punkte, eine Einleitung und einen Schluss.',
        instructionRu:
          'Напишите пост на форуме (около 150 слов). Выскажите своё мнение по теме и раскройте все четыре пункта. Продумайте порядок пунктов, введение и заключение.',
        situationDe: `Forum „Schule heute“ – Thema: Brauchen wir ein Schulfach „Alltagskompetenzen“?

Beitrag von „Mia_Kiel“: „Ich bin 19 und habe gerade meine erste Wohnung. Ich kann Gedichte interpretieren, aber ich weiß nicht, wie man einen Mietvertrag liest oder eine Steuererklärung macht. Ich finde, die Schule sollte so etwas unterrichten – zum Beispiel in einem eigenen Pflichtfach. Andere sagen, das sei Aufgabe der Eltern. Was denkt ihr?“`,
        points: [
          'Äußern Sie Ihre Meinung zu einem Pflichtfach „Alltagskompetenzen“.',
          'Nennen Sie Inhalte, die Sie in einem solchen Fach für besonders wichtig halten.',
          'Beschreiben Sie, wie junge Menschen in Ihrem Heimatland solche Dinge lernen.',
          'Gehen Sie auf das Argument ein, dass dies Aufgabe der Eltern sei.',
        ],
        minWords: 150,
        register: 'halbformell',
        minutes: 50,
        maxPoints: 60,
      },
      {
        teil: 2,
        instructionDe:
          'Sie schreiben eine Nachricht an den Veranstalter (ca. 100 Wörter). Behandeln Sie alle vier Punkte. Denken Sie an eine passende Anrede und einen passenden Gruß.',
        instructionRu:
          'Напишите сообщение организатору (около 100 слов). Раскройте все четыре пункта. Не забудьте о подходящем обращении и заключительной формуле.',
        situationDe: `Sie haben am vergangenen Wochenende ein Seminar „Erfolgreich präsentieren“ besucht, das 290 Euro gekostet hat. Laut Programm sollte jeder Teilnehmende eine eigene Präsentation halten und Feedback per Video bekommen. Tatsächlich bestand das Seminar fast nur aus Vorträgen des Trainers. Schreiben Sie an den Veranstalter, Herrn Brenner.`,
        points: [
          'Erklären Sie, warum Sie schreiben.',
          'Beschreiben Sie, was nicht der Seminarbeschreibung entsprach.',
          'Erläutern Sie, warum das für Sie ein Problem ist.',
          'Sagen Sie, was Sie jetzt vom Veranstalter erwarten.',
        ],
        minWords: 100,
        register: 'formell',
        minutes: 25,
        maxPoints: 40,
      },
    ],
  },
  sprechen: {
    minutes: 15,
    tasks: [
      {
        teil: 1,
        mode: 'presentation',
        instructionDe:
          'Halten Sie einen kurzen Vortrag (ca. 4 Minuten). Stellen Sie das Thema vor, beschreiben Sie verschiedene Positionen, nennen Sie Beispiele und sagen Sie Ihre Meinung. Danach stellt Ihnen der Prüfer eine Frage zu Ihrem Vortrag.',
        instructionRu:
          'Сделайте короткий доклад (около 4 минут). Представьте тему, опишите разные позиции, приведите примеры и выскажите своё мнение. После доклада экзаменатор задаст вам вопрос.',
        situationDe: 'Thema: Leben in der Stadt oder auf dem Land – wo lebt es sich besser?',
        points: [
          'Stellen Sie das Thema vor und erklären Sie, warum es für viele Menschen aktuell ist.',
          'Beschreiben Sie Vor- und Nachteile des Lebens in der Stadt und auf dem Land.',
          'Berichten Sie, wie die Situation in Ihrem Heimatland ist.',
          'Sagen Sie Ihre eigene Meinung und begründen Sie sie mit Beispielen.',
          'Beenden Sie Ihren Vortrag mit einem Schluss und bedanken Sie sich bei den Zuhörern.',
        ],
        aiRole:
          'Prüfer in der Prüfung Goethe-Zertifikat B2. Er hört dem Vortrag zu und stellt danach eine Rückfrage (z. B. zu einem Vorteil oder Nachteil, den der Kandidat genannt hat).',
        opener:
          'Guten Tag! Ihr Thema ist „Leben in der Stadt oder auf dem Land“. Bitte beginnen Sie mit Ihrem Vortrag – Sie haben etwa vier Minuten Zeit.',
        minutes: 6,
        maxPoints: 50,
      },
      {
        teil: 2,
        mode: 'discussion',
        instructionDe:
          'Diskutieren Sie mit Ihrer Gesprächspartnerin über die folgende Frage. Tauschen Sie Argumente aus, reagieren Sie auf die Argumente Ihrer Partnerin und versuchen Sie am Ende, einen Kompromiss zu finden (ca. 5 Minuten).',
        instructionRu:
          'Обсудите с партнёршей следующий вопрос. Обменивайтесь аргументами, реагируйте на её доводы и в конце постарайтесь найти компромисс (около 5 минут).',
        situationDe: 'Sollte Fleisch durch eine zusätzliche Steuer deutlich teurer werden?',
        points: [
          'Umwelt und Klima',
          'Tierwohl',
          'Menschen mit wenig Geld',
          'Freiheit der Verbraucher',
          'Kompromiss finden',
        ],
        aiRole:
          'Gesprächspartnerin Julia, Anfang 40, Krankenpflegerin und Mutter von zwei Kindern. Sie ist gegen eine Fleischsteuer: Sie treffe vor allem Familien mit wenig Geld, und der Staat solle den Menschen nicht vorschreiben, was sie essen. Sie argumentiert freundlich, aber bestimmt, geht auf Argumente ein und ist am Ende offen für einen Kompromiss (z. B. Steuer nur mit sozialem Ausgleich oder bessere Kennzeichnung).',
        opener:
          'Ehrlich gesagt finde ich die Idee mit der Fleischsteuer ziemlich ungerecht. Wer wenig verdient, kann sich dann kaum noch Fleisch leisten. Was meinst du dazu?',
        minutes: 5,
        maxPoints: 50,
      },
    ],
  },
};
