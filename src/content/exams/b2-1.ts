import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'b2-exam-1',
  level: 'B2',
  title: 'Übungstest B2 – 1',
  lesen: {
    minutes: 65,
    parts: [
      // ───────────────────────── Lesen Teil 1 ─────────────────────────
      {
        teil: 1,
        minutes: 18,
        title: 'Vier-Tage-Woche – ein Modell für alle?',
        textType: 'Meinungen',
        texts: [
          {
            label: 'Jana',
            body: `Ich arbeite seit einem Jahr nur noch an vier Tagen, allerdings mit derselben Stundenzahl wie vorher. Das heißt: Meine Arbeitstage sind fast zehn Stunden lang. Am Anfang hatte ich Bedenken, ob ich das durchhalte, aber inzwischen möchte ich den freien Freitag nicht mehr missen. Ich erledige Arztbesuche und Behördengänge, für die ich früher Urlaub nehmen musste. Natürlich bin ich abends erschöpft, und unter der Woche bleibt kaum Zeit für Freunde. Wer kleine Kinder hat, dürfte mit diesem Modell Schwierigkeiten bekommen, denn keine Kita hat bis halb sieben geöffnet. Für mich persönlich überwiegen aber eindeutig die Vorteile.`,
          },
          {
            label: 'Markus',
            body: `In der öffentlichen Debatte klingt die Vier-Tage-Woche immer so, als könne man sie einfach überall einführen. Ich führe eine Bäckerei mit zwölf Angestellten, und unsere Kundschaft möchte auch am Freitag und am Samstag frische Brötchen. Wenn alle nur noch vier Tage arbeiten, brauche ich mehr Personal – und das finde ich schon heute kaum. Ich verstehe, dass junge Leute mehr Freizeit wollen, und ich habe unseren Dienstplan deshalb bereits flexibler gestaltet. Eine gesetzliche Regelung für alle Branchen halte ich aber für realitätsfern. Ein Bürojob lässt sich eben anders organisieren als die Arbeit in einer Backstube.`,
          },
          {
            label: 'Sevgi',
            body: `Als Arbeitspsychologin verfolge ich die Diskussion mit großem Interesse. Studien aus mehreren Ländern zeigen, dass Beschäftigte mit kürzerer Arbeitszeit seltener krank sind und konzentrierter arbeiten. Man muss allerdings genau hinsehen: Positive Effekte treten vor allem dann auf, wenn die Stundenzahl tatsächlich reduziert wird. Entscheidend ist außerdem, dass die Abläufe im Betrieb überprüft werden: überflüssige Besprechungen streichen, Zuständigkeiten klären, Unterbrechungen vermeiden. Ohne solche Veränderungen bleibt die Vier-Tage-Woche ein schönes Etikett. Ich rate Unternehmen deshalb, das Modell zunächst in einer Testphase auszuprobieren und die Ergebnisse sorgfältig auszuwerten.`,
          },
          {
            label: 'Thomas',
            body: `Als Vater von zwei Kindern habe ich mich bewusst für Teilzeit entschieden und arbeite 32 Stunden an vier Tagen. Weniger Geld zu verdienen, war keine leichte Entscheidung, aber die gemeinsame Zeit mit meiner Familie ist mir wichtiger. Was mich stört, ist die Haltung mancher Kollegen, die Teilzeitkräfte für weniger engagiert halten. Dabei schaffe ich in meinen vier Tagen oft mehr als andere in fünf, weil ich mir keine langen Kaffeepausen leiste. Ich wünsche mir, dass kürzere Arbeitszeiten in meinem Beruf selbstverständlich werden – auch für Männer und auch für Führungskräfte.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Texte. Zu welcher Person passen die Aussagen? Die Personen können mehrmals gewählt werden.',
            instructionRu:
              'Прочитайте тексты. К какому человеку относятся высказывания? Одного и того же человека можно выбирать несколько раз.',
            options: ['Jana', 'Markus', 'Sevgi', 'Thomas'],
            items: [
              {
                kind: 'match',
                prompt: 'Wer hat für bestimmte Erledigungen früher Urlaubstage opfern müssen?',
                answer: 0,
                explanationRu: 'Яна: «Arztbesuche und Behördengänge, für die ich früher Urlaub nehmen musste».',
              },
              {
                kind: 'match',
                prompt: 'Wer empfiehlt, ein neues Arbeitszeitmodell zunächst zu erproben?',
                answer: 2,
                explanationRu: 'Севги: «das Modell zunächst in einer Testphase auszuprobieren».',
              },
              {
                kind: 'match',
                prompt: 'Wer hat für mehr Freizeit finanzielle Einbußen in Kauf genommen?',
                answer: 3,
                explanationRu: 'Томас: «Weniger Geld zu verdienen, war keine leichte Entscheidung».',
              },
              {
                kind: 'match',
                prompt: 'Wer hält eine einheitliche Regelung für alle Berufe für unpassend?',
                answer: 1,
                explanationRu: 'Маркус: «Eine gesetzliche Regelung für alle Branchen halte ich für realitätsfern».',
              },
              {
                kind: 'match',
                prompt: 'Wer meint, dass sich auch die Arbeitsprozesse ändern müssen?',
                answer: 2,
                explanationRu: 'Севги: «dass die Abläufe im Betrieb überprüft werden» – иначе это просто «красивая этикетка».',
              },
              {
                kind: 'match',
                prompt: 'Wer fühlt sich von anderen unterschätzt?',
                answer: 3,
                explanationRu: 'Томас: коллеги считают сотрудников на неполной ставке менее увлечёнными работой.',
              },
              {
                kind: 'match',
                prompt: 'Wer sieht bei dem eigenen Modell Probleme für Eltern?',
                answer: 0,
                explanationRu: 'Яна: «Wer kleine Kinder hat, dürfte mit diesem Modell Schwierigkeiten bekommen».',
              },
              {
                kind: 'match',
                prompt: 'Wer ist den Wünschen jüngerer Beschäftigter bereits entgegengekommen?',
                answer: 1,
                explanationRu: 'Маркус: «habe unseren Dienstplan deshalb bereits flexibler gestaltet».',
              },
              {
                kind: 'match',
                prompt: 'Wer hat Mühe, genügend Arbeitskräfte zu finden?',
                answer: 1,
                explanationRu: 'Маркус: персонал «finde ich schon heute kaum».',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 2 ─────────────────────────
      {
        teil: 2,
        minutes: 12,
        title: 'Angefangen, aber nie beendet',
        textType: 'Zeitungsartikel',
        texts: [
          {
            heading: 'Angefangen, aber nie beendet: Warum so viele Bücher halb gelesen im Regal stehen',
            body: `Fast jeder kennt das: Man kauft voller Vorfreude einen Roman, liest die ersten fünfzig Seiten – und dann liegt das Buch monatelang auf dem Nachttisch, bis es schließlich unauffällig ins Regal wandert. Eine aktuelle Umfrage des Instituts für Lesekultur in Mainz bestätigt, dass dieses Phänomen weit verbreitet ist: Mehr als die Hälfte der Befragten gab an, im vergangenen Jahr mindestens drei Bücher abgebrochen zu haben. Vor zehn Jahren lag dieser Anteil noch bei rund einem Drittel.

Als Hauptgrund nennen die Befragten Zeitmangel. Doch die Leiterin der Studie, die Literaturwissenschaftlerin Dr. Katrin Albers, hält diese Erklärung für unvollständig. „Die Menschen haben nicht weniger Freizeit als früher, sie verbringen sie nur anders“, sagt sie. Wer abends nach einem Buch greift, konkurriert mit Serien, Nachrichten und sozialen Netzwerken, die ständig neue Reize bieten. Ein Roman dagegen verlangt Geduld, besonders am Anfang, wenn Figuren und Handlung erst entwickelt werden.

Interessant ist, dass vor allem jüngere Leserinnen und Leser kein schlechtes Gewissen haben, wenn sie ein Buch weglegen. Viele von ihnen sehen darin sogar eine bewusste Entscheidung: Warum Zeit mit einem Text verbringen, der einen nicht fesselt? Ältere Befragte berichteten dagegen häufiger, dass sie sich zum Weiterlesen zwingen – oft aus dem Gefühl heraus, ein Buch, das man angefangen hat, müsse man auch beenden.

Albers sieht in den Ergebnissen keinen Grund für Kulturpessimismus. Die Zahl der verkauften Bücher sei in den letzten Jahren stabil geblieben, und Hörbücher erlebten sogar einen regelrechten Boom. „Viele hören Literatur heute beim Joggen oder auf dem Weg zur Arbeit. Das ist eine andere Form der Lektüre, aber keine schlechtere.“ Bedenklich findet sie allerdings, dass die Fähigkeit, sich über längere Zeit auf einen komplexen Text zu konzentrieren, nachlassen könnte, wenn sie nicht regelmäßig trainiert wird.

Buchhandlungen und Verlage haben auf die veränderten Gewohnheiten bereits reagiert. Einige Verlage veröffentlichen vermehrt kürzere Romane oder Erzählbände, deren Geschichten sich an einem Abend lesen lassen. Buchhandlungen setzen dagegen auf Lesekreise, in denen man sich vornimmt, ein Buch bis zu einem bestimmten Termin zu lesen und anschließend gemeinsam darüber zu diskutieren. Der Austausch mit anderen, so die Erfahrung vieler Buchhändler, sei die beste Motivation, auch schwierige Passagen durchzustehen.`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Laut der Umfrage …',
                options: [
                  'lesen die Menschen heute weniger Bücher als vor zehn Jahren.',
                  'brechen heute mehr Menschen Bücher ab als früher.',
                  'beenden die meisten Menschen nur ein Drittel ihrer Bücher.',
                ],
                answer: 1,
                explanationRu: 'Больше половины опрошенных бросили минимум три книги; десять лет назад таких была примерно треть.',
              },
              {
                kind: 'mc',
                question: 'Dr. Albers meint, dass …',
                options: [
                  'die Menschen heute weniger Freizeit haben.',
                  'Romane am Anfang oft zu kompliziert geschrieben sind.',
                  'Bücher mit anderen Freizeitangeboten konkurrieren müssen.',
                ],
                answer: 2,
                explanationRu: '«…konkurriert mit Serien, Nachrichten und sozialen Netzwerken». Тезис о нехватке времени она считает неполным.',
              },
              {
                kind: 'mc',
                question: 'Jüngere Leserinnen und Leser …',
                options: [
                  'betrachten das Abbrechen eines Buches als legitime Entscheidung.',
                  'lesen häufiger aus Pflichtgefühl weiter.',
                  'wählen ihre Bücher sorgfältiger aus als Ältere.',
                ],
                answer: 0,
                explanationRu: 'Молодые читатели не испытывают угрызений совести и видят в этом «eine bewusste Entscheidung».',
              },
              {
                kind: 'mc',
                question: 'Hörbücher sind nach Ansicht von Dr. Albers …',
                options: [
                  'ein Grund für sinkende Buchverkäufe.',
                  'eine gleichwertige Art, Literatur aufzunehmen.',
                  'vor allem für sportliche Menschen geeignet.',
                ],
                answer: 1,
                explanationRu: '«Das ist eine andere Form der Lektüre, aber keine schlechtere.»',
              },
              {
                kind: 'mc',
                question: 'Sorgen macht Dr. Albers, dass …',
                options: [
                  'die Konzentration auf lange, anspruchsvolle Texte schwächer werden könnte.',
                  'immer weniger Bücher verkauft werden.',
                  'Verlage nur noch kurze Romane drucken.',
                ],
                answer: 0,
                explanationRu: '«Bedenklich findet sie…», что способность долго концентрироваться на сложном тексте может ослабнуть.',
              },
              {
                kind: 'mc',
                question: 'Lesekreise …',
                options: [
                  'werden vor allem von Verlagen organisiert.',
                  'beschäftigen sich nur mit kurzen Erzählungen.',
                  'können helfen, ein Buch bis zum Ende zu lesen.',
                ],
                answer: 2,
                explanationRu: 'Обмен мнениями – «die beste Motivation, auch schwierige Passagen durchzustehen». Организуют их книжные магазины.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 3 ─────────────────────────
      {
        teil: 3,
        minutes: 12,
        title: 'Bienen in der Großstadt',
        textType: 'Zeitschriftenartikel',
        texts: [
          {
            heading: 'Summen über den Dächern',
            body: `Wer auf dem Dach eines Bürogebäudes in Frankfurt Bienenstöcke entdeckt, mag zunächst überrascht sein. Doch die Stadtimkerei liegt seit einigen Jahren im Trend. [1] Allein in Berlin sollen inzwischen mehrere Tausend Bienenvölker gehalten werden – auf Balkonen, in Hinterhöfen und eben auf Dächern.

Dass Honigbienen in der Stadt gut zurechtkommen, hat mehrere Gründe. In Parks, Gärten und auf Friedhöfen blüht von März bis Oktober fast ununterbrochen etwas. [2] Zudem ist es in der Stadt meist ein bis zwei Grad wärmer als im Umland, was die Saison für die Bienen verlängert.

Viele Stadtimker begründen ihr Hobby mit dem Wunsch, etwas gegen das Insektensterben zu tun. Fachleute sehen das allerdings kritisch. [3] Wildbienen, von denen es in Deutschland über 500 Arten gibt, sind dagegen tatsächlich bedroht. Und genau hier entsteht ein Problem: Honigbienen und Wildbienen konkurrieren um dieselben Blüten. [4]

Die Biologin Martina Fehr empfiehlt daher, nicht einfach immer mehr Bienenstöcke aufzustellen. „Viel sinnvoller ist es, das Nahrungsangebot zu vergrößern“, sagt sie. [5] Auch ein Stück Rasen, das man nur zweimal im Jahr mäht, kann sich zu einer kleinen Blumenwiese entwickeln.

Einige Städte haben diesen Gedanken bereits aufgegriffen. München etwa hat in den vergangenen Jahren zahlreiche Grünstreifen an Straßen in Blühflächen umgewandelt, und in Hannover bekommen Hausbesitzer einen Zuschuss, wenn sie ihr Dach begrünen. [6] Denn eine Stadt, in der viel blüht, ist nicht nur für Insekten ein besserer Ort, sondern auch für die Menschen, die dort leben.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
            instructionRu:
              'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
            options: [
              'Wer einen Balkon besitzt, kann dort zum Beispiel heimische Wildblumen und Kräuter pflanzen.',
              'Die Honigbiene ist nämlich ein Nutztier, dessen Bestand vom Menschen gesichert wird.',
              'Immer mehr Menschen entscheiden sich dafür, selbst Bienen zu halten und ihren eigenen Honig zu ernten.',
              'Auf dem Land dagegen finden die Insekten nach der Rapsblüte oft wochenlang kaum Nahrung.',
              'Wo zu viele Bienenvölker auf engem Raum leben, bleibt für die wilden Verwandten oft nicht genug übrig.',
              'Solche Programme kosten zwar Geld, doch Fachleute halten sie für eine lohnende Investition.',
              'Deshalb ist Honig aus der Stadt häufig stärker mit Schadstoffen belastet als Honig vom Land.',
              'Imker müssen ihre Bienenvölker beim zuständigen Veterinäramt anmelden.',
            ],
            items: [
              {
                kind: 'match',
                prompt: 'Lücke 1',
                answer: 2,
                explanationRu: 'Перед пропуском – «Stadtimkerei liegt im Trend», после – число пчелиных семей в Берлине: всё больше людей держат пчёл.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 2',
                answer: 3,
                explanationRu: 'Противопоставление: в городе цветёт постоянно, а в деревне («dagegen») после цветения рапса корма почти нет.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 3',
                answer: 1,
                explanationRu: 'Объяснение критики специалистов: медоносная пчела – домашнее животное, её не нужно спасать; дальше – «Wildbienen … dagegen».',
              },
              {
                kind: 'match',
                prompt: 'Lücke 4',
                answer: 4,
                explanationRu: 'Продолжение мысли о конкуренции за цветы: диким пчёлам не хватает корма.',
              },
              {
                kind: 'match',
                prompt: 'Lücke 5',
                answer: 0,
                explanationRu: 'Пример того, как увеличить «Nahrungsangebot»; следующее предложение начинается с «Auch…».',
              },
              {
                kind: 'match',
                prompt: 'Lücke 6',
                answer: 5,
                explanationRu: '«Solche Programme» относится к мерам Мюнхена и Ганновера.',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 4 ─────────────────────────
      {
        teil: 4,
        minutes: 15,
        title: 'Handyverbot an Schulen?',
        textType: 'Leserkommentare',
        texts: [
          {
            label: 'a',
            heading: 'Petra, Lehrerin',
            body: `Seit unsere Schule die Handys in den Pausen verbietet, hat sich der Schulhof spürbar verändert. Die Kinder spielen wieder Fußball und reden miteinander, statt stumm auf Bildschirme zu starren. Anfangs gab es heftige Proteste, inzwischen haben sich die meisten daran gewöhnt. Ich kann jeder Schule nur raten, diesen Schritt zu wagen.`,
          },
          {
            label: 'b',
            heading: 'Ralf, Vater',
            body: `Ein Verbot klingt einfach, löst aber nichts. Mein Sohn verbringt nach der Schule ohnehin Stunden am Handy. Was Kinder brauchen, ist jemand, der ihnen erklärt, wie Algorithmen funktionieren und warum manche Apps süchtig machen. Das sollte ein eigenes Schulfach sein – und nicht nur ein Thema für eine einzige Projektwoche.`,
          },
          {
            label: 'c',
            heading: 'Lea, Schülerin, 16',
            body: `Ich finde es unfair, dass immer nur über uns Jugendliche geredet wird. Wenn ich meine Eltern beim Abendessen beobachte, schauen die genauso oft aufs Handy wie ich. Erwachsene sollten erst einmal selbst ein gutes Vorbild sein, bevor sie uns neue Vorschriften machen.`,
          },
          {
            label: 'd',
            heading: 'Dr. Hartmann, Kinderarzt',
            body: `In meiner Praxis sehe ich immer mehr Kinder mit Schlafproblemen und Kopfschmerzen. Ein Zusammenhang mit der Bildschirmzeit ist zwar nicht in jedem Fall nachgewiesen, aber sehr wahrscheinlich. Ob ein Verbot an Schulen hilft, kann ich nicht beurteilen. Entscheidend ist meiner Meinung nach, was abends im Kinderzimmer passiert.`,
          },
          {
            label: 'e',
            heading: 'Jonas, Schulleiter',
            body: `Wir setzen das Smartphone gezielt im Unterricht ein: für Recherchen, Umfragen oder kleine Filmprojekte. Ein komplettes Verbot würde diese Möglichkeiten zunichtemachen. Allerdings haben wir klare Regeln vereinbart, die Schüler, Eltern und Lehrkräfte gemeinsam erarbeitet haben – und die werden auch eingehalten.`,
          },
          {
            label: 'f',
            heading: 'Anna, Mutter',
            body: `Für mich ist das Handy vor allem eine Frage der Sicherheit. Meine Tochter fährt jeden Tag mit zwei Bussen zur Schule, und ich möchte sie erreichen können, falls unterwegs etwas passiert. Wenn die Geräte während des Unterrichts ausgeschaltet im Schrank liegen, habe ich nichts dagegen. Ganz zu Hause lassen sollte sie es aber nicht.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über Handyverbote an Schulen. Welcher Kommentar passt zu welcher Aussage?',
            instructionRu:
              'В журнале вы читаете комментарии к статье о запрете смартфонов в школах. Какой комментарий подходит к какому высказыванию?',
            options: ['a – Petra', 'b – Ralf', 'c – Lea', 'd – Dr. Hartmann', 'e – Jonas', 'f – Anna'],
            items: [
              {
                kind: 'match',
                prompt: 'Diese Person möchte ihr Kind jederzeit erreichen können.',
                answer: 5,
                explanationRu: 'Анна: «ich möchte sie erreichen können, falls unterwegs etwas passiert».',
              },
              {
                kind: 'match',
                prompt: 'Diese Person fordert, dass Medienkompetenz regelmäßig unterrichtet wird.',
                answer: 1,
                explanationRu: 'Ральф: это должно быть отдельным школьным предметом, а не темой одной проектной недели.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person hat mit einem Verbot gute Erfahrungen gemacht.',
                answer: 0,
                explanationRu: 'Петра: после запрета дети снова играют и разговаривают на переменах.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person nutzt die Geräte als Lernwerkzeug.',
                answer: 4,
                explanationRu: 'Йонас: смартфон используется на уроках для поиска информации, опросов и фильмов.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person kritisiert das Verhalten der Erwachsenen.',
                answer: 2,
                explanationRu: 'Леа: родители так же часто смотрят в телефон и должны быть примером.',
              },
              {
                kind: 'match',
                prompt: 'Diese Person hält die Nutzung zu Hause für wichtiger als die in der Schule.',
                answer: 3,
                explanationRu: 'Доктор Хартман: «Entscheidend ist …, was abends im Kinderzimmer passiert».',
              },
            ],
          },
        ],
      },
      // ───────────────────────── Lesen Teil 5 ─────────────────────────
      {
        teil: 5,
        minutes: 8,
        title: 'Nutzungsbedingungen StadtMobil',
        textType: 'Nutzungsbedingungen',
        texts: [
          {
            label: '§ 1',
            body: `Wer StadtMobil nutzen möchte, muss mindestens 21 Jahre alt sein und seit mindestens zwei Jahren einen gültigen Führerschein besitzen. Die Registrierung erfolgt online. Anschließend wird der Führerschein in einer unserer Servicestellen oder per Video-Identifikation geprüft. Erst nach erfolgreicher Prüfung wird das Kundenkonto freigeschaltet.`,
          },
          {
            label: '§ 2',
            body: `Fahrzeuge können bis zu 30 Tage im Voraus über die App gebucht werden. Eine Buchung kann bis eine Stunde vor Fahrtbeginn kostenlos storniert werden. Bei späterer Stornierung oder wenn das Fahrzeug nicht abgeholt wird, werden 50 Prozent der gebuchten Zeit berechnet.`,
          },
          {
            label: '§ 3',
            body: `Vor Fahrtbeginn ist das Fahrzeug auf sichtbare Schäden zu überprüfen. Neue Schäden sind vor der Abfahrt in der App mit Foto zu melden. Unterbleibt die Meldung, kann der Kunde für Schäden haftbar gemacht werden, die bei der Rückgabe festgestellt werden. Im Fahrzeug gilt ein striktes Rauchverbot; Tiere dürfen nur in geeigneten Transportboxen mitgenommen werden.`,
          },
          {
            label: '§ 4',
            body: `Der Tank- bzw. Ladestand muss bei der Rückgabe mindestens 25 Prozent betragen. Mit der im Fahrzeug hinterlegten Tankkarte kann kostenlos getankt werden; die dafür benötigte Zeit wird dem Kunden gutgeschrieben. Das Fahrzeug ist auf dem Stellplatz abzustellen, an dem es abgeholt wurde. Wird es an einem anderen Ort abgestellt, fällt eine Servicegebühr an.`,
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sie informieren sich über die Nutzungsbedingungen eines Carsharing-Anbieters. Welche Überschrift passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
            instructionRu:
              'Вы знакомитесь с условиями использования каршеринга. Какой заголовок подходит к какому разделу? Два заголовка лишние.',
            options: [
              'Rabatte für Vielfahrer',
              'Rückgabe des Fahrzeugs',
              'Voraussetzungen für die Anmeldung',
              'Versicherungsschutz im Ausland',
              'Buchung und Stornierung',
              'Pflichten vor und während der Fahrt',
            ],
            items: [
              {
                kind: 'match',
                prompt: '§ 1',
                answer: 2,
                explanationRu: 'Возраст, водительский стаж, регистрация и проверка прав – условия регистрации.',
              },
              {
                kind: 'match',
                prompt: '§ 2',
                answer: 4,
                explanationRu: 'Бронирование за 30 дней и бесплатная отмена за час до поездки.',
              },
              {
                kind: 'match',
                prompt: '§ 3',
                answer: 5,
                explanationRu: 'Проверка повреждений перед поездкой, запрет курения, перевозка животных.',
              },
              {
                kind: 'match',
                prompt: '§ 4',
                answer: 1,
                explanationRu: 'Уровень топлива при возврате и место, где нужно оставить машину.',
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
            title: 'Verkehrsmeldung',
            kind: 'monolog',
            situation: 'Sie hören Verkehrsinformationen im Radio.',
            playCount: 2,
            text: `Und nun die Verkehrslage für den Großraum Stuttgart. Auf der A8 in Richtung München ist zwischen dem Kreuz Stuttgart und Wendlingen wegen eines Lkw-Unfalls nur noch eine Spur befahrbar; dort staut sich der Verkehr auf zwölf Kilometern. Die Polizei rechnet damit, dass die Bergungsarbeiten bis zum frühen Nachmittag andauern. Wer kann, sollte über die B10 ausweichen. Außerdem ein Hinweis für alle, die mit der S-Bahn unterwegs sind: Wegen Bauarbeiten fahren die Linien S1 und S2 an diesem Wochenende nur zwischen Hauptbahnhof und Vaihingen. Zwischen Vaihingen und Herrenberg ist ein Ersatzverkehr mit Bussen eingerichtet.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Die Polizei erwartet, dass sich der Stau in Kürze auflöst.',
                    answer: false,
                    explanationRu: 'Работы продлятся «bis zum frühen Nachmittag» – быстро пробка не рассосётся.',
                  },
                  {
                    kind: 'mc',
                    question: 'Am Wochenende …',
                    options: [
                      'fahren die S-Bahnen S1 und S2 überhaupt nicht.',
                      'fahren zwischen Vaihingen und Herrenberg Busse.',
                      'wird der Hauptbahnhof gesperrt.',
                    ],
                    answer: 1,
                    explanationRu: 'Между Vaihingen и Herrenberg организованы автобусы («Ersatzverkehr mit Bussen»).',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht auf dem Anrufbeantworter',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf Ihrem Anrufbeantworter.',
            playCount: 2,
            text: `Guten Tag, Frau Kowalski, hier spricht Daniel Brandt von der Personalabteilung der Firma Lindner Logistik. Vielen Dank für Ihre Bewerbung als Teamleiterin im Kundenservice. Wir würden Sie gern persönlich kennenlernen und möchten Sie zu einem Gespräch am kommenden Donnerstag um zehn Uhr einladen. Das Gespräch findet allerdings nicht in unserer Zentrale statt, sondern in unserer neuen Niederlassung in der Hafenstraße 14. Bitte bringen Sie Ihre Arbeitszeugnisse im Original mit, die Kopien liegen uns ja bereits vor. Falls der Termin nicht passt, rufen Sie mich bitte bis Dienstag zurück, unter 0421 55 87 30. Ich freue mich auf Ihren Besuch.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Frau Kowalski soll Kopien ihrer Zeugnisse mitbringen.',
                    answer: false,
                    explanationRu: 'Нужны оригиналы («im Original»), копии у фирмы уже есть.',
                  },
                  {
                    kind: 'mc',
                    question: 'Das Vorstellungsgespräch findet …',
                    options: [
                      'in einer neuen Niederlassung der Firma statt.',
                      'in der Firmenzentrale statt.',
                      'per Videokonferenz statt.',
                    ],
                    answer: 0,
                    explanationRu: '«nicht in unserer Zentrale …, sondern in unserer neuen Niederlassung».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Gesundheitstipp',
            kind: 'monolog',
            situation: 'Sie hören einen Beitrag in einem Gesundheitsmagazin im Radio.',
            playCount: 2,
            text: `Hier ist wieder unser Gesundheitsmagazin „Fit durch den Tag“. Heute geht es um ein Thema, das viele unterschätzen: das Trinken. Erwachsene sollten täglich etwa anderthalb Liter Flüssigkeit zu sich nehmen, am besten Wasser oder ungesüßten Tee. Bei Hitze oder beim Sport darf es auch deutlich mehr sein. Viele Menschen merken erst spät, dass sie zu wenig getrunken haben – etwa durch Kopfschmerzen oder Konzentrationsprobleme am Nachmittag. Ein einfacher Trick: Stellen Sie sich morgens eine gefüllte Flasche auf den Schreibtisch. Wenn sie abends leer ist, haben Sie schon viel erreicht. Und noch etwas: Kaffee zählt, entgegen einem verbreiteten Irrtum, durchaus zur Trinkmenge, solange man ihn in Maßen genießt.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Kaffee darf man zur täglichen Trinkmenge dazurechnen.',
                    answer: true,
                    explanationRu: '«Kaffee zählt … durchaus zur Trinkmenge», если пить его умеренно.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was empfiehlt die Sendung?',
                    options: [
                      'Nur beim Sport mehr zu trinken.',
                      'Bei Kopfschmerzen sofort zum Arzt zu gehen.',
                      'Sich eine Flasche Wasser sichtbar an den Arbeitsplatz zu stellen.',
                    ],
                    answer: 2,
                    explanationRu: '«Stellen Sie sich morgens eine gefüllte Flasche auf den Schreibtisch».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Durchsage auf einer Messe',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage auf einer Bildungsmesse.',
            playCount: 2,
            text: `Liebe Besucherinnen und Besucher der Bildungsmesse, wir möchten Sie auf eine Programmänderung hinweisen. Der Vortrag „Studieren ohne Abitur – so geht’s“, der ursprünglich um 14 Uhr in Saal 3 stattfinden sollte, beginnt bereits um 13:30 Uhr, und zwar im großen Forum im Erdgeschoss. Grund ist die große Nachfrage: Im Saal 3 hätten nicht alle Interessierten Platz gefunden. Im Anschluss an den Vortrag steht die Referentin am Stand der Studienberatung in Halle B für Einzelgespräche zur Verfügung. Bitte beachten Sie außerdem, dass die Messe heute bereits um 17 Uhr schließt.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Der Vortrag wurde verlegt, weil der ursprüngliche Raum zu klein ist.',
                    answer: true,
                    explanationRu: 'В зале 3 не хватило бы места всем желающим.',
                  },
                  {
                    kind: 'mc',
                    question: 'Nach dem Vortrag …',
                    options: [
                      'kann man mit der Referentin persönlich sprechen.',
                      'gibt es eine Führung durch Halle B.',
                      'schließt die Messe.',
                    ],
                    answer: 0,
                    explanationRu: 'Докладчица будет доступна для индивидуальных бесед («Einzelgespräche») в зале B.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Kulturtipp',
            kind: 'monolog',
            situation: 'Sie hören einen Veranstaltungstipp im Radio.',
            playCount: 2,
            text: `Und zum Schluss noch unser Kulturtipp für das Wochenende: Das Stadtmuseum zeigt ab Samstag die Ausstellung „Arbeit im Wandel – vom Handwerk zum Homeoffice“. Anhand von Werkzeugen, Fotos und Interviews mit Zeitzeugen wird erzählt, wie sich das Arbeitsleben in unserer Region in den letzten 150 Jahren verändert hat. Besonders spannend ist der interaktive Teil, in dem Besucher selbst ausprobieren können, wie man früher an einem Webstuhl gearbeitet hat. Der Eintritt kostet acht Euro, Schülerinnen und Schüler zahlen die Hälfte. Am Eröffnungstag ist der Eintritt für alle frei, und um 16 Uhr gibt es eine Führung mit der Kuratorin.`,
            tasks: [
              {
                instructionDe: 'Richtig oder falsch? Wählen Sie dann die richtige Lösung a, b oder c.',
                instructionRu: 'Верно или неверно? Затем выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Am Samstag ist der Eintritt kostenlos.',
                    answer: true,
                    explanationRu: 'Суббота – день открытия выставки («Eröffnungstag»), вход для всех бесплатный.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was können die Besucher in der Ausstellung selbst tun?',
                    options: [
                      'Interviews mit Zeitzeugen aufnehmen.',
                      'Ein altes Handwerk ausprobieren.',
                      'Fotos aus ihrem eigenen Berufsleben zeigen.',
                    ],
                    answer: 1,
                    explanationRu: 'Можно попробовать поработать на ткацком станке («Webstuhl»).',
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
            title: 'Neustart im Beruf',
            kind: 'dialog',
            speakers: { A: 'Moderator', B: 'Ines Wagner, Laufbahnberaterin' },
            situation: 'Sie hören im Radio ein Interview mit einer Beraterin für Berufswechsel.',
            playCount: 2,
            text: `A: Herzlich willkommen zu unserer Sendung „Arbeitswelten“. Heute geht es um Menschen, die mitten im Berufsleben noch einmal ganz neu anfangen. Bei mir im Studio ist Ines Wagner, sie berät seit fünfzehn Jahren Menschen, die den Beruf wechseln wollen. Frau Wagner, hat die Zahl der Quereinsteiger zugenommen?
B: Ja, deutlich. Als ich angefangen habe, kamen vor allem Leute zu mir, die ihre Stelle verloren hatten und dringend etwas Neues suchten. Heute ist das anders: Die meisten haben einen sicheren Job, sind aber unzufrieden. Sie fragen sich, ob das wirklich alles gewesen sein soll.
A: Woran liegt das?
B: Ich glaube, die Erwartungen an die Arbeit haben sich verändert. Früher war ein sicheres Einkommen das Wichtigste. Heute wollen viele etwas tun, das sie für sinnvoll halten. Außerdem suchen Unternehmen in vielen Branchen so dringend Personal, dass sie auch Bewerber ohne klassische Ausbildung einstellen. Das macht natürlich Mut.
A: Welche Berufe sind bei Quereinsteigern besonders beliebt?
B: Sehr gefragt sind soziale Berufe, zum Beispiel Erzieher oder Lehrerin. Viele möchten mit Menschen arbeiten, nachdem sie jahrelang vor dem Computer gesessen haben. Aber es gibt auch den umgekehrten Weg: Eine Krankenschwester, die ich begleitet habe, arbeitet heute als Programmiererin.
A: Was raten Sie jemandem, der über einen Wechsel nachdenkt?
B: Zuerst sollte man herausfinden, was einen am bisherigen Job eigentlich stört. Manchmal ist es gar nicht der Beruf, sondern der Chef oder das Team. Dann reicht vielleicht schon ein Wechsel des Arbeitgebers. Wenn es wirklich am Beruf liegt, empfehle ich, den neuen Bereich vorher kennenzulernen – durch ein Praktikum im Urlaub oder durch Gespräche mit Leuten, die dort arbeiten.
A: Viele schrecken ja aus finanziellen Gründen zurück.
B: Das ist verständlich. Eine Umschulung dauert oft zwei Jahre, und in dieser Zeit verdient man wenig oder gar nichts. Es gibt aber Förderprogramme, etwa von der Agentur für Arbeit. Und manche Arbeitgeber bezahlen die Weiterbildung, wenn man sich verpflichtet, danach eine bestimmte Zeit bei ihnen zu bleiben. Man sollte sich also gründlich informieren, bevor man kündigt – das ist mein wichtigster Rat.
A: Gibt es ein Alter, ab dem es zu spät ist?
B: Nein, das glaube ich nicht. Meine älteste Klientin war 58, als sie ihre Ausbildung zur Gärtnerin begonnen hat. Natürlich lernt man mit 50 anders als mit 20. Aber ältere Menschen bringen viel Lebenserfahrung mit, und das wissen viele Arbeitgeber zu schätzen.
A: Frau Wagner, vielen Dank für das Gespräch.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wer kommt heute vor allem zu Frau Wagner?',
                    options: [
                      'Menschen, die arbeitslos geworden sind.',
                      'Menschen, die mit ihrer Arbeit unzufrieden sind.',
                      'Menschen, die gerade ihre Ausbildung beendet haben.',
                    ],
                    answer: 1,
                    explanationRu: '«Die meisten haben einen sicheren Job, sind aber unzufrieden». Безработные приходили раньше.',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum haben Quereinsteiger heute bessere Chancen?',
                    options: [
                      'Weil viele Unternehmen dringend Personal suchen.',
                      'Weil Weiterbildungen kürzer geworden sind.',
                      'Weil eine klassische Ausbildung weniger wert ist.',
                    ],
                    answer: 0,
                    explanationRu: 'Фирмы так срочно ищут персонал, что берут и кандидатов без классического образования.',
                  },
                  {
                    kind: 'mc',
                    question: 'Das Beispiel der Krankenschwester zeigt, dass …',
                    options: [
                      'soziale Berufe besonders anstrengend sind.',
                      'die meisten Menschen in soziale Berufe wechseln.',
                      'man auch aus einem sozialen Beruf in einen anderen Bereich wechseln kann.',
                    ],
                    answer: 2,
                    explanationRu: '«den umgekehrten Weg»: медсестра стала программисткой.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sollte man laut Frau Wagner als Erstes tun?',
                    options: [
                      'Sofort ein Praktikum in einem neuen Beruf machen.',
                      'Herausfinden, was genau einen am Job stört.',
                      'Mit dem Chef über ein höheres Gehalt sprechen.',
                    ],
                    answer: 1,
                    explanationRu: '«Zuerst sollte man herausfinden, was einen am bisherigen Job eigentlich stört».',
                  },
                  {
                    kind: 'mc',
                    question: 'Ihr wichtigster Rat lautet:',
                    options: [
                      'Vor einer Kündigung alle Finanzierungsmöglichkeiten prüfen.',
                      'Nur bei Arbeitgebern anfangen, die die Weiterbildung bezahlen.',
                      'Die Umschulung möglichst schnell abschließen.',
                    ],
                    answer: 0,
                    explanationRu: '«Man sollte sich also gründlich informieren, bevor man kündigt – das ist mein wichtigster Rat».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt Frau Wagner über ältere Quereinsteiger?',
                    options: [
                      'Sie lernen genauso schnell wie junge Menschen.',
                      'Sie haben bei Arbeitgebern kaum Chancen.',
                      'Ihre Lebenserfahrung wird von Arbeitgebern geschätzt.',
                    ],
                    answer: 2,
                    explanationRu: '«…das wissen viele Arbeitgeber zu schätzen». При этом учатся они иначе, чем в 20 лет.',
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
            title: 'Soziales Pflichtjahr – ja oder nein?',
            kind: 'discussion',
            speakers: {
              A: 'Moderatorin Sabine Roth',
              B: 'Felix Neumann, Landesjugendring',
              C: 'Ute Krämer, Leiterin eines Seniorenheims',
            },
            situation: 'Sie hören im Radio eine Diskussion über ein verpflichtendes soziales Jahr für junge Menschen.',
            playCount: 1,
            text: `A: Guten Abend und willkommen zu „Streitpunkt“. Seit Monaten wird darüber diskutiert, ob junge Menschen nach der Schule ein Jahr lang verpflichtend einen sozialen Dienst leisten sollen – etwa im Krankenhaus, im Kindergarten oder beim Katastrophenschutz. Darüber spreche ich mit Felix Neumann vom Landesjugendring und mit Ute Krämer, die ein Seniorenheim in Kassel leitet. Frau Krämer, Sie sind für das Pflichtjahr. Warum?
C: Weil ich jeden Tag sehe, wie wertvoll die Arbeit junger Menschen ist. Wir haben bei uns Freiwillige, und die Bewohner blühen richtig auf, wenn jemand Zeit für ein Gespräch oder einen Spaziergang hat. Ich bin überzeugt: Wenn alle ein Jahr lang so etwas erleben, wächst auch der Zusammenhalt in der Gesellschaft.
B: Da muss ich widersprechen. Dass soziale Arbeit wertvoll ist, bestreitet niemand. Aber eine Pflicht ist der falsche Weg. Junge Leute haben in den letzten Jahren schon auf sehr viel verzichtet. Jetzt sollen sie auch noch ein Jahr ihres Lebens abgeben, ohne gefragt zu werden? Das halte ich für ungerecht.
A: Herr Neumann, es gibt doch schon Freiwilligendienste. Reicht das nicht?
B: Die Angebote gibt es, ja, aber sie sind viel zu wenig bekannt und schlecht bezahlt. Ein Freiwilliger bekommt im Monat oft kaum mehr als ein Taschengeld. Wer von seinen Eltern nicht unterstützt wird, kann sich so ein Jahr gar nicht leisten. Wenn man das ändern würde, gäbe es sicher deutlich mehr Freiwillige.
C: Das unterschreibe ich sofort, die Bezahlung muss besser werden. Aber ich glaube nicht, dass Geld allein reicht. Ein Pflichtjahr erreicht auch Jugendliche, die von sich aus nie auf die Idee kämen, in einem Pflegeheim zu arbeiten. Viele von ihnen entdecken dort einen Beruf, an den sie vorher nie gedacht hätten.
A: Ein Argument, das man oft hört, lautet: Das Pflichtjahr soll den Personalmangel in der Pflege beheben.
C: Das wäre ein Missverständnis. Junge Menschen ohne Ausbildung können keine Fachkräfte ersetzen und dürfen das auch nicht. Sie sollen ergänzen, nicht einspringen.
B: Genau das ist aber meine Sorge. Wenn plötzlich Tausende günstige Hilfskräfte zur Verfügung stehen, dann ist die Versuchung groß, an regulären Stellen zu sparen. Und dann hätten wir am Ende sogar weniger Fachpersonal.
A: Mal ganz praktisch gefragt: Wäre so ein Pflichtjahr überhaupt umsetzbar?
B: Ich habe da große Zweifel. Wir reden von über 700.000 jungen Menschen pro Jahrgang. Die bräuchten alle eine Einsatzstelle, eine Betreuung, oft auch eine Unterkunft. Diese Strukturen gibt es schlicht nicht.
C: Natürlich ginge das nicht von heute auf morgen. Man müsste es schrittweise einführen, über mehrere Jahre. Andere Länder haben ähnliche Modelle aufgebaut, man kann also von ihnen lernen.
A: Zum Schluss: Gibt es etwas, worauf Sie sich einigen können?
B: Ich denke, wir sind uns einig, dass Engagement attraktiver werden muss. Ich würde bei der Freiwilligkeit bleiben, aber mit echten Anreizen – zum Beispiel Vorteilen bei der Vergabe von Studienplätzen.
C: Das wäre ein Anfang. Ich bleibe aber dabei: Ein verbindliches Jahr für alle wäre ein starkes Signal.`,
            tasks: [
              {
                instructionDe: 'Wer sagt was? Ordnen Sie zu: Moderatorin, Felix Neumann oder Ute Krämer.',
                instructionRu: 'Кто что говорит? Выберите: ведущая, Феликс Нойман или Уте Кремер.',
                options: ['Moderatorin Sabine Roth', 'Felix Neumann', 'Ute Krämer'],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Ein Pflichtjahr kann jungen Menschen neue berufliche Perspektiven eröffnen.',
                    answer: 2,
                    explanationRu: 'Кремер: многие открывают для себя профессию, о которой раньше не думали.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Ohne finanzielle Hilfe der Familie ist ein Freiwilligendienst kaum zu bezahlen.',
                    answer: 1,
                    explanationRu: 'Нойман: кого не поддерживают родители, тот не может позволить себе такой год.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Häufig wird behauptet, ein Pflichtjahr solle Personallücken schließen.',
                    answer: 0,
                    explanationRu: 'Ведущая: «Ein Argument, das man oft hört…» – устранить нехватку персонала в уходе.',
                  },
                  {
                    kind: 'match',
                    prompt: 'Ungelernte Helfer dürfen ausgebildetes Personal nicht ersetzen.',
                    answer: 2,
                    explanationRu: 'Кремер: «Sie sollen ergänzen, nicht einspringen».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Für so viele Jugendliche fehlen die organisatorischen Voraussetzungen.',
                    answer: 1,
                    explanationRu: 'Нойман: для 700 000 молодых людей нет мест, кураторов и жилья – «Diese Strukturen gibt es schlicht nicht».',
                  },
                  {
                    kind: 'match',
                    prompt: 'Man könnte sich an Erfahrungen aus anderen Staaten orientieren.',
                    answer: 2,
                    explanationRu: 'Кремер: другие страны создали похожие модели, у них можно учиться.',
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
            title: 'Lärm – das unterschätzte Umweltproblem',
            kind: 'monolog',
            situation: 'Sie hören einen Vortrag in der Reihe „Wissenschaft für alle“.',
            playCount: 2,
            text: `Meine Damen und Herren, ich freue mich, dass Sie heute so zahlreich zu unserem Vortrag in der Reihe „Wissenschaft für alle“ gekommen sind. Mein Thema ist ein Umweltproblem, über das erstaunlich wenig gesprochen wird: der Lärm.

Wenn wir an Umweltverschmutzung denken, fallen uns zuerst schmutzige Luft oder Plastik im Meer ein. Lärm dagegen gilt oft als bloße Belästigung, als etwas, woran man sich gewöhnen kann. Genau das ist aber ein Irrtum. Nach Schätzungen der Weltgesundheitsorganisation gehen in Westeuropa jedes Jahr über eine Million gesunde Lebensjahre durch Verkehrslärm verloren. Damit ist Lärm nach der Luftverschmutzung der zweitwichtigste umweltbedingte Risikofaktor für unsere Gesundheit.

Wie kommt das? Unser Gehör ist ein Warnsystem, das niemals abschaltet – auch nicht im Schlaf. Jedes laute Geräusch, etwa ein vorbeifahrender Lkw, löst im Körper eine Stressreaktion aus: Der Puls steigt, Stresshormone werden ausgeschüttet. Das Tückische ist, dass dies auch dann passiert, wenn wir gar nicht aufwachen. Wer glaubt, sich an den Lärm vor seinem Schlafzimmerfenster gewöhnt zu haben, täuscht sich also. Das Bewusstsein gewöhnt sich, der Körper nicht.

Langfristig hat das Folgen. Zahlreiche Studien zeigen, dass Menschen, die dauerhaft an stark befahrenen Straßen oder in der Nähe von Flughäfen wohnen, häufiger an Bluthochdruck und Herz-Kreislauf-Erkrankungen leiden. Bei Kindern hat man außerdem festgestellt, dass Fluglärm das Lesenlernen verlangsamen kann. In einer Untersuchung rund um einen großen Flughafen lagen Grundschüler aus besonders lauten Gebieten beim Leseverständnis bis zu zwei Monate hinter Gleichaltrigen aus ruhigeren Gegenden zurück.

Besonders betroffen sind Menschen mit geringem Einkommen. Wohnungen an Hauptverkehrsstraßen sind günstiger, und wer wenig Geld hat, kann sich eine ruhigere Lage oft nicht leisten. Lärm ist also nicht nur ein gesundheitliches, sondern auch ein soziales Problem.

Was lässt sich dagegen tun? Lärmschutzwände sind teuer und helfen nur in der unmittelbaren Umgebung. Wirksamer ist es, den Lärm an der Quelle zu bekämpfen. Ein Beispiel: Tempo 30 statt 50 senkt den Lärmpegel um etwa drei Dezibel. Das klingt nach wenig, entspricht aber für das menschliche Ohr ungefähr einer Halbierung des Verkehrs. Auch sogenannter Flüsterasphalt, ein spezieller Straßenbelag, kann den Lärm deutlich verringern, muss allerdings häufiger erneuert werden.

Und was kann jeder Einzelne tun? Wer an einer lauten Straße wohnt, sollte – wenn möglich – das Schlafzimmer auf die ruhigere Seite der Wohnung verlegen. Auch Schallschutzfenster helfen; in manchen Städten gibt es dafür sogar Zuschüsse. Am wichtigsten ist mir aber, dass wir Lärm endlich als das anerkennen, was er ist: ein ernstzunehmendes Gesundheitsrisiko.

Im zweiten Teil meines Vortrags möchte ich Ihnen nun einige Messergebnisse aus unserer eigenen Stadt vorstellen …`,
            tasks: [
              {
                instructionDe: 'Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
                instructionRu: 'В каждом задании выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wie wird Lärm nach Ansicht der Referentin in der Öffentlichkeit wahrgenommen?',
                    options: [
                      'Als eher harmlose Störung.',
                      'Als größtes Umweltproblem.',
                      'Als wichtiger als Plastik im Meer.',
                    ],
                    answer: 0,
                    explanationRu: '«Lärm dagegen gilt oft als bloße Belästigung» – и это ошибка.',
                  },
                  {
                    kind: 'mc',
                    question: 'Laut der Weltgesundheitsorganisation ist Lärm …',
                    options: [
                      'in Westeuropa weniger gefährlich als anderswo.',
                      'der zweitgrößte umweltbedingte Risikofaktor für die Gesundheit.',
                      'gefährlicher als Luftverschmutzung.',
                    ],
                    answer: 1,
                    explanationRu: '«nach der Luftverschmutzung der zweitwichtigste umweltbedingte Risikofaktor».',
                  },
                  {
                    kind: 'mc',
                    question: 'Was passiert, wenn im Schlaf ein lautes Geräusch zu hören ist?',
                    options: [
                      'Man wacht in jedem Fall auf.',
                      'Der Körper reagiert nur, wenn man aufwacht.',
                      'Der Körper reagiert mit Stress, auch wenn man weiterschläft.',
                    ],
                    answer: 2,
                    explanationRu: 'Стресс-реакция возникает, «auch dann …, wenn wir gar nicht aufwachen».',
                  },
                  {
                    kind: 'mc',
                    question: 'An Lärm gewöhnt man sich nach Meinung der Referentin …',
                    options: [
                      'nur körperlich, aber nicht im Kopf.',
                      'nur scheinbar.',
                      'nach einigen Wochen vollständig.',
                    ],
                    answer: 1,
                    explanationRu: '«Das Bewusstsein gewöhnt sich, der Körper nicht» – привыкание лишь кажущееся.',
                  },
                  {
                    kind: 'mc',
                    question: 'Die Untersuchung an einem Flughafen hat gezeigt, dass …',
                    options: [
                      'Kinder in lauten Gebieten langsamer lesen lernen.',
                      'Grundschüler dort häufiger krank sind.',
                      'Kinder durch Fluglärm schlechter hören.',
                    ],
                    answer: 0,
                    explanationRu: 'Школьники из шумных районов отставали в понимании прочитанного до двух месяцев.',
                  },
                  {
                    kind: 'mc',
                    question: 'Warum ist Lärm auch ein soziales Problem?',
                    options: [
                      'Weil laute Nachbarn oft Streit verursachen.',
                      'Weil Menschen mit wenig Geld häufiger an lauten Straßen wohnen.',
                      'Weil Lärmschutz nur in reichen Vierteln gebaut wird.',
                    ],
                    answer: 1,
                    explanationRu: 'Квартиры у оживлённых дорог дешевле, малообеспеченные не могут позволить себе тихий район.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was sagt die Referentin über Tempo 30?',
                    options: [
                      'Es halbiert die Zahl der Autos auf den Straßen.',
                      'Seine Wirkung ist kaum messbar.',
                      'Der Lärm wird so empfunden, als gäbe es nur halb so viel Verkehr.',
                    ],
                    answer: 2,
                    explanationRu: 'Минус 3 децибела для уха – примерно как вдвое меньше транспорта.',
                  },
                  {
                    kind: 'mc',
                    question: 'Was ist der Referentin am wichtigsten?',
                    options: [
                      'Dass Lärm als Gesundheitsgefahr ernst genommen wird.',
                      'Dass alle Haushalte Schallschutzfenster einbauen.',
                      'Dass niemand mehr an Hauptstraßen wohnt.',
                    ],
                    answer: 0,
                    explanationRu: '«Am wichtigsten ist mir aber, dass wir Lärm … anerkennen …: ein ernstzunehmendes Gesundheitsrisiko».',
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
        situationDe: `Forum „Stadt & Leben“ – Thema: Kostenloser Nahverkehr für alle?

Beitrag von „Lukas_92“: „In unserer Stadt wird gerade diskutiert, Busse und Bahnen für alle kostenlos zu machen. Das wäre super für die Umwelt und für Menschen mit wenig Geld! Kritiker sagen, das sei viel zu teuer und die Bahnen seien jetzt schon überfüllt. Was meint ihr?“`,
        points: [
          'Äußern Sie Ihre Meinung dazu, ob der öffentliche Nahverkehr kostenlos sein sollte.',
          'Nennen Sie Vor- und Nachteile eines kostenlosen Nahverkehrs.',
          'Beschreiben Sie, wie die Situation in Ihrem Heimatland ist.',
          'Nennen Sie andere Möglichkeiten, wie man mehr Menschen zum Umsteigen auf Bus und Bahn bewegen könnte.',
        ],
        minWords: 150,
        register: 'halbformell',
        minutes: 50,
        maxPoints: 60,
      },
      {
        teil: 2,
        instructionDe:
          'Sie schreiben eine Nachricht an Ihre Vorgesetzte (ca. 100 Wörter). Behandeln Sie alle vier Punkte. Denken Sie an eine passende Anrede und einen passenden Gruß.',
        instructionRu:
          'Напишите сообщение своей начальнице (около 100 слов). Раскройте все четыре пункта. Не забудьте о подходящем обращении и заключительной формуле.',
        situationDe: `Sie haben in Ihrer Firma die Organisation des diesjährigen Betriebsausflugs übernommen. Der Ausflug soll in drei Wochen stattfinden. Leider müssen Sie sich kurzfristig einer Operation unterziehen und fallen deshalb zwei Wochen aus. Schreiben Sie Ihrer Vorgesetzten, Frau Dr. Schuster.`,
        points: [
          'Entschuldigen Sie sich und erklären Sie die Situation.',
          'Beschreiben Sie, was für den Ausflug schon erledigt ist.',
          'Machen Sie einen Vorschlag, wer die Organisation übernehmen könnte.',
          'Bieten Sie an, wie Sie trotz Ihrer Abwesenheit helfen können.',
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
          'Sie sollen in einer Sitzung einen kurzen Vortrag halten (ca. 4 Minuten). Stellen Sie das Thema vor, beschreiben Sie verschiedene Positionen und sagen Sie Ihre Meinung. Danach stellt Ihnen die Prüferin eine Frage zu Ihrem Vortrag.',
        instructionRu:
          'Подготовьте короткий доклад (около 4 минут). Представьте тему, опишите разные позиции и выскажите своё мнение. После доклада экзаменатор задаст вам вопрос.',
        situationDe:
          'Thema: Lebensmittelverschwendung – Sollten Supermärkte verpflichtet werden, unverkaufte Lebensmittel zu spenden?',
        points: [
          'Stellen Sie das Thema vor und erklären Sie, warum es wichtig ist.',
          'Beschreiben Sie eine oder mehrere Lösungen und deren Vor- und Nachteile.',
          'Berichten Sie, wie die Situation in Ihrem Heimatland ist.',
          'Sagen Sie Ihre eigene Meinung und begründen Sie sie mit Beispielen.',
          'Beenden Sie Ihren Vortrag mit einem Schluss und bedanken Sie sich bei den Zuhörern.',
        ],
        aiRole:
          'Prüferin in der Prüfung Goethe-Zertifikat B2. Sie hört dem Vortrag zu und stellt danach eine Rückfrage (z. B. zu einem genannten Beispiel oder einer Lösung).',
        opener:
          'Guten Tag! Sie haben sich auf das Thema Lebensmittelverschwendung vorbereitet. Bitte beginnen Sie mit Ihrem Vortrag – Sie haben etwa vier Minuten Zeit.',
        minutes: 6,
        maxPoints: 50,
      },
      {
        teil: 2,
        mode: 'discussion',
        instructionDe:
          'Diskutieren Sie mit Ihrem Gesprächspartner über die folgende Frage. Tauschen Sie Argumente aus, reagieren Sie auf die Argumente Ihres Partners und versuchen Sie am Ende, einen Kompromiss zu finden (ca. 5 Minuten).',
        instructionRu:
          'Обсудите с партнёром следующий вопрос. Обменивайтесь аргументами, реагируйте на доводы партнёра и в конце постарайтесь найти компромисс (около 5 минут).',
        situationDe: 'Sollten soziale Netzwerke wie Instagram oder TikTok erst ab 16 Jahren erlaubt sein?',
        points: [
          'Schutz von Kindern und Jugendlichen',
          'Kontrollierbarkeit eines Verbots',
          'Rolle der Eltern und der Schule',
          'Kontakt zu Freunden und Teilhabe',
          'Kompromiss finden',
        ],
        aiRole:
          'Gesprächspartner Max, Mitte 30, arbeitet in einer Werbeagentur. Er ist gegen eine feste Altersgrenze von 16 Jahren: Verbote seien kaum kontrollierbar, Jugendliche würden ausgeschlossen, wichtiger sei Medienerziehung. Er argumentiert sachlich, reagiert auf Gegenargumente und ist am Ende zu einem Kompromiss bereit.',
        opener:
          'Also, ich halte ehrlich gesagt nicht viel von einem Verbot bis 16. Die Jugendlichen finden doch sowieso einen Weg, sich anzumelden. Wie siehst du das?',
        minutes: 5,
        maxPoints: 50,
      },
    ],
  },
};
