import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wenn ich das Studium damals nicht abgebrochen ___, hätte ich heute einen Abschluss.',
      options: ['hätte', 'wäre', 'würde', 'habe'],
      answer: 0,
      explanationRu: 'abbrechen (что-то) — переходный глагол, Perfekt с haben (hat abgebrochen) → в Konjunktiv II прошедшего времени: abgebrochen hätte.',
    },
    {
      type: 'choice',
      prompt: 'Wenn wir rechtzeitig aufgestanden ___, hätten wir die erste Vorlesung nicht verpasst.',
      options: ['hätten', 'wären', 'würden', 'sind'],
      answer: 1,
      explanationRu: 'aufstehen — глагол изменения положения, Perfekt с sein (ist aufgestanden) → aufgestanden wären. Sind — индикатив, он не передаёт нереальность.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz spricht über eine verpasste Möglichkeit in der Vergangenheit?',
      options: [
        'Ich würde gern Medizin studieren.',
        'Ich möchte gern Medizin studieren.',
        'Ich könnte Medizin studieren.',
        'Ich hätte gern Medizin studiert.',
      ],
      answer: 3,
      explanationRu: 'Русское «я бы изучал» не показывает время. В немецком о прошлом говорят hätte + Partizip II. Würde/könnte/möchte + Infinitiv относятся к настоящему или будущему (повторение Konjunktiv II Gegenwart).',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich die Hochschulreife nicht nachgeholt hätte, ___ ich nie Lehrer geworden.',
      answers: ['wäre'],
      explanationRu: 'werden — глагол изменения состояния, Perfekt с sein (ist geworden) → wäre … geworden.',
    },
    {
      type: 'gap',
      prompt: 'Fast ___ ich in der mündlichen Prüfung vor Aufregung alles vergessen.',
      answers: ['hätte'],
      hintRu: '«чуть не»',
      explanationRu: 'Fast/beinahe + Konjunktiv II прошедшего времени = «чуть не». vergessen образует Perfekt с haben → hätte … vergessen.',
    },
    {
      type: 'choice',
      prompt: 'Ohne die Unterstützung ihrer Tante ___ Lina das Auslandssemester nie finanzieren können.',
      options: ['wäre', 'hätte', 'würde', 'konnte'],
      answer: 1,
      explanationRu: 'Ohne + Dativ заменяет нереальное условие («если бы не…»). Модальный глагол können образует прошедшее время с haben + двойной инфинитив: hätte … finanzieren können.',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich nur früher mit dem Lernen angefangen ___! Jetzt bleiben mir nur noch zwei Tage.',
      answers: ['hätte'],
      explanationRu: 'Нереальное желание с wenn + nur/doch/bloß: спрягаемый глагол стоит в конце, как в обычном придаточном.',
    },
    {
      type: 'order',
      words: ['Beinahe', 'wäre', 'ich', 'durch die Statistikprüfung', 'gefallen.'],
      translationRu: 'Я чуть не провалил экзамен по статистике.',
      explanationRu: 'Beinahe на первом месте → wäre на втором, затем подлежащее. Durch eine Prüfung fallen образует Perfekt с sein.',
    },
    {
      type: 'gap',
      prompt: 'An deiner Stelle ___ ich mich sofort für den Sprachkurs eingeschrieben.',
      answers: ['hätte'],
      explanationRu: 'Совет задним числом: an deiner Stelle hätte ich … Возвратные глаголы (sich einschreiben) образуют Perfekt с haben.',
    },
    {
      type: 'transform',
      instructionRu: 'Составьте нереальное условное предложение с wenn.',
      prompt: 'Ich bin nicht zur Infoveranstaltung gegangen. Deshalb habe ich die Anmeldefrist verpasst.',
      answers: [
        'Wenn ich zur Infoveranstaltung gegangen wäre, hätte ich die Anmeldefrist nicht verpasst.',
        'Ich hätte die Anmeldefrist nicht verpasst, wenn ich zur Infoveranstaltung gegangen wäre.',
        'Wäre ich zur Infoveranstaltung gegangen, hätte ich die Anmeldefrist nicht verpasst.',
      ],
      explanationRu: 'Реальность меняется на противоположную. gehen → Perfekt с sein → gegangen wäre; verpassen → с haben → hätte … nicht verpasst.',
    },
    {
      type: 'transform',
      instructionRu: 'Сформулируйте упрёк с помощью sollen.',
      prompt: 'Warum hast du die Hausaufgaben nicht gemacht?',
      answers: ['Du hättest die Hausaufgaben machen sollen.'],
      explanationRu: 'Упрёк о прошлом: hättest + Infinitiv + sollen (двойной инфинитив). Отрицание убирается: упрекают в том, что чего-то не сделали.',
    },
    {
      type: 'gap',
      prompt: '___ er seine Prüfungsangst früher ernst genommen, wäre er nicht durchgefallen.',
      answers: ['Hätte'],
      explanationRu: 'Условие без wenn: спрягаемый глагол hätte стоит на первом месте придаточного. ernst nehmen образует Perfekt с haben.',
    },
    {
      type: 'choice',
      prompt: 'Die Dorfschule wäre beinahe geschlossen ___, wenn die Eltern nicht protestiert hätten.',
      options: ['geworden', 'worden', 'werden', 'gewesen'],
      answer: 1,
      explanationRu: 'Konjunktiv II прошедшего времени в пассиве: wäre + Partizip II + worden (повторение темы B2-01). Geworden — только «стать».',
    },
    {
      type: 'gap',
      prompt: 'Ohne die Spende des Fördervereins wäre die neue Schulbibliothek nie gebaut ___.',
      answers: ['worden'],
      explanationRu: 'Пассив в Konjunktiv II прошедшего времени: wäre … gebaut worden.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите условие без wenn.',
      prompt: 'Wenn die Schule mehr Lehrkräfte gehabt hätte, wären die Klassen kleiner gewesen.',
      answers: ['Hätte die Schule mehr Lehrkräfte gehabt, wären die Klassen kleiner gewesen.'],
      explanationRu: 'Без wenn спрягаемый глагол (hätte) переходит на первое место, Partizip II остаётся в конце придаточного.',
    },
    {
      type: 'gap',
      prompt: 'Die Lehrerin meinte, dass wir den Text gründlicher ___ lesen sollen.',
      answers: ['hätten'],
      explanationRu: 'В придаточном с двойным инфинитивом hätte стоит не в конце, а перед инфинитивами: …, dass wir … hätten lesen sollen.',
    },
    {
      type: 'transform',
      instructionRu: 'Составьте одно предложение: условие в прошлом, следствие в настоящем.',
      prompt: 'Ich habe kein Abitur gemacht. Deshalb kann ich jetzt nicht studieren.',
      answers: [
        'Wenn ich Abitur gemacht hätte, könnte ich jetzt studieren.',
        'Wenn ich das Abitur gemacht hätte, könnte ich jetzt studieren.',
        'Hätte ich Abitur gemacht, könnte ich jetzt studieren.',
        'Hätte ich das Abitur gemacht, könnte ich jetzt studieren.',
        'Ich könnte jetzt studieren, wenn ich Abitur gemacht hätte.',
        'Ich könnte jetzt studieren, wenn ich das Abitur gemacht hätte.',
      ],
      explanationRu: 'Смешанное предложение: условие относится к прошлому (gemacht hätte), а следствие — к настоящему (könnte jetzt studieren, Konjunktiv II Gegenwart).',
    },
    {
      type: 'order',
      words: ['Wenn', 'du', 'mich', 'gefragt', 'hättest,', 'hätte', 'ich', 'dir', 'geholfen.'],
      translationRu: 'Если бы ты меня спросил, я бы тебе помог.',
      explanationRu: 'В придаточном hättest стоит в конце; главное предложение начинается со спрягаемого глагола hätte, Partizip II — в конце.',
    },
    {
      type: 'choice',
      prompt: 'Wenn ich mich ___, hätte ich das Stipendium vielleicht bekommen.',
      options: [
        'früher bewerben gedurft hätte',
        'früher hätte bewerben dürfen',
        'früher hätte bewerben gedurft',
        'früher beworben hätte dürfen',
      ],
      answer: 1,
      explanationRu: 'Модальный глагол в придаточном: hätte стоит перед двойным инфинитивом (bewerben dürfen). Формы gedurft и beworben … dürfen неверны.',
    },
    {
      type: 'order',
      words: ['Es', 'wäre', 'besser gewesen,', 'wenn', 'ich', 'mich', 'hätte', 'beraten', 'lassen.'],
      translationRu: 'Было бы лучше, если бы я проконсультировался.',
      explanationRu: 'lassen ведёт себя как модальный глагол: двойной инфинитив beraten lassen, а hätte в придаточном стоит перед ним.',
    },
  ],
  reading: [
    {
      title: 'Mit 42 zurück auf die Schulbank',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `Als Sandra Möller vor drei Jahren ihr Abiturzeugnis in den Händen hielt, war sie 42 Jahre alt – und so stolz wie nie zuvor. „Hätte mir jemand mit sechzehn gesagt, dass ich einmal freiwillig Gedichte analysiere, hätte ich ihn ausgelacht“, sagt sie. Damals hatte sie die Schule nach der zehnten Klasse verlassen, um eine Ausbildung zur Bürokauffrau zu machen. Ihre Eltern hätten sie unterstützt, wenn sie weitergemacht hätte, doch sie wollte endlich eigenes Geld verdienen und nicht mehr fragen müssen.

Zwanzig Jahre später wurde ihre Abteilung im Zuge einer Umstrukturierung aufgelöst. „Ich hätte eine andere Stelle im Unternehmen bekommen können, aber ich hatte das Gefühl: Jetzt oder nie.“ Sie meldete sich am Abendgymnasium ihrer Stadt an, einer Schule, an der Berufstätige die Hochschulreife nachholen können. Der Unterricht findet an vier Abenden pro Woche statt; tagsüber arbeitete Möller in Teilzeit weiter.

Leicht war das nicht. Vor allem Mathematik bereitete ihr Probleme. „Ohne meine Lerngruppe wäre ich im ersten Jahr wahrscheinlich ausgestiegen“, erzählt sie. Die Gruppe traf sich jeden Samstag in der Stadtbibliothek – bunt gemischt: ein Paketbote, eine Krankenpflegerin, ein ehemaliger Fußballprofi. „Jeder hat den anderen das erklärt, was er selbst am besten konnte. Das hat mehr gebracht als jede bezahlte Nachhilfe.“

Für die Bildungsforscherin Dr. Ute Lange sind solche Biografien längst keine Ausnahme mehr. „Früher galt der zweite Bildungsweg als Notlösung für Menschen, die in der Schule gescheitert waren. Heute ist er für viele ein bewusster Neuanfang.“ Lange kritisiert allerdings, dass die Angebote zu wenig bekannt seien. Viele Erwachsene wüssten zum Beispiel nicht, dass sie unter bestimmten Voraussetzungen finanzielle Förderung beantragen können. Auch Möller hat davon erst im zweiten Jahr erfahren. „Wenn ich das früher gewusst hätte, hätte ich nicht so viele Überstunden machen müssen.“

Inzwischen studiert sie Sozialpädagogik. Bereut sie, dass sie nicht schon mit zwanzig studiert hat? Sie überlegt kurz. „Nein. Mit zwanzig hätte ich gar nicht gewusst, was ich will. Meine Berufserfahrung hilft mir heute in jedem Seminar.“ Nur eines würde sie anders machen: „Ich hätte mir viel früher Hilfe holen sollen, statt alles allein schaffen zu wollen.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Warum hat Sandra Möller die Schule mit sechzehn verlassen?',
              options: [
                'Ihre Eltern hatten es von ihr erwartet.',
                'Sie wollte finanziell unabhängig sein.',
                'Ihre Noten reichten für das Abitur nicht aus.',
              ],
              answer: 1,
              explanationRu: 'Она хотела «endlich eigenes Geld verdienen und nicht mehr fragen müssen». Родители, наоборот, поддержали бы её, если бы она продолжила учёбу.',
            },
            {
              kind: 'mc',
              question: 'Was gab den Anstoß, das Abitur nachzuholen?',
              options: [
                'Ihre Abteilung wurde aufgelöst, und sie wollte diese Gelegenheit nutzen.',
                'Sie hatte ihre Arbeit verloren und keine andere Wahl.',
                'Ihr Arbeitgeber verlangte von ihr einen höheren Abschluss.',
              ],
              answer: 0,
              explanationRu: 'Отдел расформировали; она могла бы получить другое место («hätte … bekommen können»), но решила: «Jetzt oder nie».',
            },
            {
              kind: 'mc',
              question: 'Was erfährt man über das Abendgymnasium?',
              options: [
                'Der Unterricht findet hauptsächlich am Wochenende statt.',
                'Es richtet sich nur an Menschen ohne Berufsausbildung.',
                'Man kann dort neben dem Beruf die Hochschulreife erwerben.',
              ],
              answer: 2,
              explanationRu: 'Это школа, «an der Berufstätige die Hochschulreife nachholen können», занятия четыре вечера в неделю.',
            },
            {
              kind: 'mc',
              question: 'Welche Rolle spielte die Lerngruppe für Frau Möller?',
              options: [
                'Sie ersetzte eine Nachhilfe, die sich Möller nicht leisten konnte.',
                'Die Mitglieder unterstützten sich gegenseitig mit ihren Stärken.',
                'Sie bestand aus ehemaligen Kolleginnen und Kollegen.',
              ],
              answer: 1,
              explanationRu: '«Jeder hat den anderen das erklärt, was er selbst am besten konnte». О том, что она не могла позволить себе репетитора, не говорится.',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert Dr. Lange?',
              options: [
                'Viele Erwachsene kennen die Fördermöglichkeiten nicht.',
                'Der zweite Bildungsweg gilt immer noch als Notlösung.',
                'Die Abendschulen sind für Berufstätige zu teuer.',
              ],
              answer: 0,
              explanationRu: 'Она критикует, что предложения малоизвестны и многие не знают о финансовой поддержке. Мнение о «Notlösung» относится к прошлому (früher).',
            },
            {
              kind: 'mc',
              question: 'Was würde Sandra Möller heute anders machen?',
              options: [
                'Sie würde schon mit zwanzig ein Studium beginnen.',
                'Sie würde neben der Schule gar nicht arbeiten.',
                'Sie würde sich früher Unterstützung suchen.',
              ],
              answer: 2,
              explanationRu: '«Ich hätte mir viel früher Hilfe holen sollen». Об учёбе в двадцать лет она не жалеет.',
            },
          ],
        },
      ],
    },
    {
      title: 'Warum wir vergessen – und was dagegen hilft',
      textType: 'Blogbeitrag einer Lerncoachin',
      texts: [
        {
          body: `Wer kennt das nicht: Am Abend vor der Prüfung hat man stundenlang gelernt, und eine Woche später ist fast alles wieder weg. [1] Schon im 19. Jahrhundert zeigte der Psychologe Hermann Ebbinghaus in Selbstversuchen, dass wir einen großen Teil neuer Informationen innerhalb weniger Tage vergessen, wenn wir sie nicht wiederholen.

Viele meiner Kursteilnehmer sagen mir im Rückblick: „Hätte ich das früher gewusst, hätte ich mir viel Stress erspart.“ Denn die Lösung ist erstaunlich einfach. [2] Statt den gesamten Stoff in einer langen Sitzung zu lernen, verteilt man ihn auf mehrere kurze Einheiten mit wachsenden Abständen: nach einem Tag, nach drei Tagen, nach einer Woche.

Ein zweiter typischer Fehler: Die meisten Lernenden lesen ihre Notizen einfach mehrmals durch. Das fühlt sich gut an, weil uns der Text mit jedem Mal vertrauter vorkommt. [3] Wirksamer ist es, sich selbst abzufragen – zum Beispiel mit Karteikarten oder indem man versucht, ein Thema ohne Unterlagen einer anderen Person zu erklären.

[4] Wer müde ist, kann sich schlechter konzentrieren, aber das ist noch nicht alles: Im Schlaf verarbeitet das Gehirn, was wir tagsüber aufgenommen haben, und überträgt es ins Langzeitgedächtnis. Eine durchgearbeitete Nacht vor der Prüfung schadet deshalb gleich doppelt.

Schließlich spielt auch die persönliche Bedeutung eine Rolle. Inhalte, die wir mit eigenen Erlebnissen verbinden, behalten wir deutlich besser. [5] Eine Teilnehmerin, die für ihren neuen Job viele Fachbegriffe aus der Buchhaltung lernen musste, schrieb dazu kleine Geschichten über ihren früheren Chef – sie hat die Wörter bis heute nicht vergessen.

Und wenn es trotzdem einmal schiefgeht? Eine schlechte Note ist kein Weltuntergang. [6] Fragen Sie sich lieber, was Sie beim nächsten Mal anders machen könnten, und probieren Sie es konsequent aus.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Doch dieses Gefühl täuscht: Etwas wiederzuerkennen ist nicht dasselbe, wie sich daran zu erinnern.',
            'Am besten lernt man ohnehin in einer möglichst großen Gruppe.',
            'Dieses Phänomen ist seit Langem wissenschaftlich gut untersucht.',
            'Ein häufig unterschätzter Faktor ist außerdem der Schlaf.',
            'Statt sich lange über verpasste Chancen zu ärgern, sollte man nach vorn schauen.',
            'Fachleute sprechen von verteilter Wiederholung.',
            'Deshalb sollte man vor einer Prüfung möglichst viel Kaffee trinken.',
            'Es lohnt sich also, abstrakten Stoff mit persönlichen Beispielen zu verknüpfen.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 2,
              explanationRu: '«Dieses Phänomen» — это быстрое забывание из предыдущего предложения; дальше идёт пример исследования Эббингауза.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 5,
              explanationRu: 'Перед пропуском: «решение простое», после — описание распределённого повторения с растущими интервалами.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 0,
              explanationRu: '«Dieses Gefühl» относится к ощущению, что текст становится знакомее; после пропуска — более эффективный метод.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 3,
              explanationRu: 'Абзац посвящён сну: «Im Schlaf verarbeitet das Gehirn …».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 7,
              explanationRu: 'Вывод из предыдущего предложения о личном опыте; после пропуска — пример с историями о бывшем начальнике.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 4,
              explanationRu: 'После «плохая оценка — не конец света» логично «не злиться, а смотреть вперёд»; затем «Fragen Sie sich lieber …».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Interview: Nachhilfe – ein Geschäft mit der Angst?',
      kind: 'dialog',
      speakers: {
        A: 'Moderatorin',
        B: 'Martin Haas, ehemaliger Gymnasiallehrer und Leiter eines Lernstudios',
      },
      situation: 'Sie hören ein Interview im Radio mit dem Leiter eines Nachhilfeinstituts.',
      text: `A: Herr Haas, Sie haben fünfzehn Jahre als Mathematiklehrer an einem Gymnasium gearbeitet. Heute leiten Sie ein Lernstudio. Warum der Wechsel?
B: Ich habe meinen Beruf geliebt, wirklich. Aber in Klassen mit über dreißig Kindern hatte ich kaum Zeit für den Einzelnen. Ich hätte gern viel mehr mit den Schülern gesprochen, die nicht mitkamen. Irgendwann habe ich gedacht: Entweder ich ändere etwas, oder ich bin in ein paar Jahren ausgebrannt.
A: Wer kommt denn zu Ihnen? Vor allem Schüler, die sitzen zu bleiben drohen?
B: Das denken die meisten, aber nein. Ungefähr die Hälfte unserer Schüler hat eigentlich ordentliche Noten. Sie wollen aber einen Einser-Abschluss, weil sie zum Beispiel Medizin studieren möchten. Der Leistungsdruck ist enorm gestiegen.
A: Kritiker sagen, Nachhilfe verstärke die Ungleichheit. Wer Geld hat, kauft sich bessere Noten.
B: Da ist leider etwas dran. Deshalb vergeben wir jeden zehnten Platz kostenlos, das finanziert ein Förderverein. Das löst das Problem natürlich nicht. Eigentlich müsste die Schule selbst genug Förderung anbieten.
A: Seit einigen Jahren boomt Nachhilfe im Internet. Machen Sie da mit?
B: Ja, für die Oberstufe funktioniert das sehr gut. Die Jugendlichen sind selbstständig und sparen sich die Fahrt. Bei Kindern aus der Grundschule halte ich wenig davon. Die brauchen jemanden, der neben ihnen sitzt und merkt, wann die Konzentration nachlässt.
A: Gibt es etwas, das Sie heute anders machen würden?
B: Oh ja. Am Anfang habe ich mit den Schülern im Grunde ihre Hausaufgaben gemacht. Die Eltern waren zufrieden, die Noten wurden kurzfristig besser. Aber die Kinder haben nicht gelernt, allein zu arbeiten. Ich hätte ihnen von Anfang an zeigen müssen, wie man lernt, und nicht nur, was man lernt.
A: Was raten Sie Eltern, deren Kind schlechte Noten schreibt?
B: Nicht in Panik geraten und nicht sofort Nachhilfe buchen. Zuerst sollte man mit der Lehrkraft sprechen. Oft gibt es einen Grund, den man zu Hause gar nicht sieht – Streit in der Klasse zum Beispiel. Nachhilfe ist erst der zweite Schritt.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете интервью дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Warum hat Herr Haas die Schule verlassen?',
              options: [
                'Er verdiente als Lehrer zu wenig.',
                'Er konnte sich kaum um einzelne Schüler kümmern.',
                'Er hatte Konflikte mit der Schulleitung.',
              ],
              answer: 1,
              explanationRu: 'В классах больше тридцати детей у него почти не было времени на каждого: «Ich hätte gern viel mehr mit den Schülern gesprochen…».',
            },
            {
              kind: 'mc',
              question: 'Wer nimmt bei Herrn Haas Nachhilfe?',
              options: [
                'vor allem Grundschulkinder',
                'fast nur Schüler, deren Versetzung gefährdet ist',
                'auch gute Schüler, die einen sehr guten Abschluss anstreben',
              ],
              answer: 2,
              explanationRu: 'Около половины учеников имеют хорошие оценки, но хотят отличный аттестат, например для медицинского факультета.',
            },
            {
              kind: 'mc',
              question: 'Was tut das Lernstudio für Familien mit wenig Geld?',
              options: [
                'Ein Teil der Plätze wird kostenlos vergeben.',
                'Die Preise richten sich nach dem Einkommen.',
                'Die Schule übernimmt die Kosten.',
              ],
              answer: 0,
              explanationRu: 'Каждое десятое место бесплатное, его финансирует Förderverein.',
            },
            {
              kind: 'mc',
              question: 'Wie beurteilt Herr Haas Online-Nachhilfe?',
              options: [
                'Sie ist für alle Altersgruppen gleich gut geeignet.',
                'Sie eignet sich eher für ältere Schüler.',
                'Er lehnt sie grundsätzlich ab.',
              ],
              answer: 1,
              explanationRu: 'Для старших классов онлайн-занятия работают хорошо, для младших школьников — нет.',
            },
            {
              kind: 'mc',
              question: 'Was war sein Fehler am Anfang?',
              options: [
                'Er hat zu viele Schüler gleichzeitig betreut.',
                'Er hat zu wenig mit den Eltern gesprochen.',
                'Er hat den Schülern die Arbeit abgenommen, statt ihnen das Lernen beizubringen.',
              ],
              answer: 2,
              explanationRu: '«Ich hätte ihnen von Anfang an zeigen müssen, wie man lernt» — сначала он фактически делал с ними домашние задания.',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt Herr Haas Eltern zuerst?',
              options: [
                'ein Gespräch mit der Lehrkraft',
                'sofort professionelle Nachhilfe',
                'mehr Kontrolle der Hausaufgaben',
              ],
              answer: 0,
              explanationRu: '«Zuerst sollte man mit der Lehrkraft sprechen». Репетитор — только второй шаг.',
            },
          ],
        },
      ],
    },
    {
      title: 'Vortrag: Lernen kennt kein Alter',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag an einer Volkshochschule zum Thema „Lernen im Alter“.',
      text: `Meine Damen und Herren, herzlich willkommen! „Was Hänschen nicht lernt, lernt Hans nimmermehr“ – diesen Spruch haben Sie sicher schon oft gehört. Heute möchte ich Ihnen zeigen, warum er nicht stimmt. Und ich gebe zu: Hätte man mir vor zwanzig Jahren gesagt, dass ich einmal genau darüber Vorträge halte, hätte ich es selbst nicht geglaubt.

Lange ging die Forschung davon aus, dass sich das Gehirn nach der Jugend kaum noch verändert. Heute wissen wir, dass es bis ins hohe Alter neue Verbindungen zwischen Nervenzellen bilden kann. Fachleute sprechen von Plastizität. Das heißt nicht, dass ältere Menschen genauso lernen wie Kinder. Isolierte Fakten, etwa lange Vokabellisten, merken wir uns mit siebzig tatsächlich langsamer. Dafür sind ältere Lernende oft besser darin, Neues mit vorhandenem Wissen zu verknüpfen. Sie verstehen Zusammenhänge schneller, weil sie mehr Erfahrung mitbringen.

Ein Beispiel aus meiner Familie: Mein Vater hat mit 71 Jahren angefangen, Italienisch zu lernen. Er wollte sich mit den Nachbarn in seinem Urlaubsort unterhalten. Die Grammatik fand er mühsam, aber er hat sich jeden Tag zwanzig Minuten hingesetzt. Nach zwei Jahren konnte er sich problemlos über Politik und Fußball unterhalten.

Damit bin ich beim wichtigsten Punkt. Das größte Hindernis beim Lernen im Alter ist meistens nicht das Gehirn, sondern die Angst, sich zu blamieren. Viele trauen sich nicht in einen Kurs, weil sie glauben, sie seien zu langsam. Wer diese Angst überwindet, hat schon die halbe Strecke geschafft.

Was können Sie konkret tun? Erstens: Regelmäßigkeit ist wichtiger als Dauer. Jeden Tag eine Viertelstunde bringt mehr als einmal pro Woche drei Stunden. Zweitens: Bewegen Sie sich. Ein Spaziergang verbessert die Durchblutung des Gehirns, und viele Menschen können danach besser denken. Drittens: Lernen Sie mit anderen. Gemeinsames Lernen motiviert und hält geistig beweglich. Und viertens: Setzen Sie sich ein Ziel, das Ihnen persönlich etwas bedeutet – wie mein Vater mit seinen Nachbarn.

Im zweiten Teil des Abends stellen Ihnen meine Kolleginnen die Kurse unseres neuen Programms vor. Danach haben Sie Gelegenheit, Fragen zu stellen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете доклад дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was möchte die Referentin mit ihrem Vortrag zeigen?',
              options: [
                'dass ein bekanntes Sprichwort falsch ist',
                'dass Kinder schneller lernen als Erwachsene',
                'wie man im Alter Vokabeln am besten lernt',
              ],
              answer: 0,
              explanationRu: 'Она хочет показать, почему поговорка «Was Hänschen nicht lernt…» не верна.',
            },
            {
              kind: 'mc',
              question: 'Was weiß man heute über das Gehirn?',
              options: [
                'Es verändert sich nach der Jugend kaum noch.',
                'Es kann auch im Alter neue Verbindungen bilden.',
                'Es funktioniert im Alter genauso wie bei Kindern.',
              ],
              answer: 1,
              explanationRu: 'Мозг до глубокой старости может образовывать новые связи (Plastizität). Первый вариант — прежнее мнение исследователей.',
            },
            {
              kind: 'mc',
              question: 'Was fällt älteren Menschen laut Vortrag schwerer?',
              options: [
                'Zusammenhänge zu verstehen',
                'Neues mit Erfahrungen zu verbinden',
                'sich einzelne Fakten zu merken',
              ],
              answer: 2,
              explanationRu: 'Изолированные факты, например длинные списки слов, в семьдесят лет запоминаются медленнее.',
            },
            {
              kind: 'mc',
              question: 'Warum hat der Vater der Referentin Italienisch gelernt?',
              options: [
                'Er wollte mit Nachbarn an seinem Urlaubsort sprechen.',
                'Er wollte eine Prüfung ablegen.',
                'Er interessierte sich für italienische Politik.',
              ],
              answer: 0,
              explanationRu: '«Er wollte sich mit den Nachbarn in seinem Urlaubsort unterhalten». Политика и футбол — темы его разговоров позже.',
            },
            {
              kind: 'mc',
              question: 'Was ist nach Meinung der Referentin das größte Hindernis?',
              options: [
                'das nachlassende Gedächtnis',
                'die Sorge, sich vor anderen lächerlich zu machen',
                'fehlende Kursangebote für Senioren',
              ],
              answer: 1,
              explanationRu: 'Главное препятствие — не мозг, а страх опозориться: «die Angst, sich zu blamieren».',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt die Referentin zur Lernzeit?',
              options: [
                'einmal pro Woche mehrere Stunden',
                'möglichst lange Lerneinheiten am Abend',
                'kurze, aber tägliche Lerneinheiten',
              ],
              answer: 2,
              explanationRu: 'Регулярность важнее продолжительности: четверть часа каждый день лучше, чем три часа раз в неделю.',
            },
            {
              kind: 'mc',
              question: 'Warum soll man sich bewegen?',
              options: [
                'weil man dabei neue Leute kennenlernt',
                'weil es die Durchblutung des Gehirns fördert',
                'weil man beim Gehen Vokabeln wiederholen kann',
              ],
              answer: 1,
              explanationRu: 'Прогулка улучшает кровоснабжение мозга, и после неё многим легче думать.',
            },
            {
              kind: 'mc',
              question: 'Was passiert im zweiten Teil des Abends?',
              options: [
                'Die Zuhörer bilden Lerngruppen.',
                'Der Vater der Referentin erzählt von seinen Erfahrungen.',
                'Das neue Kursprogramm wird vorgestellt.',
              ],
              answer: 2,
              explanationRu: 'Коллеги докладчицы представят курсы новой программы, затем можно задавать вопросы.',
            },
          ],
        },
      ],
    },
  ],
};
