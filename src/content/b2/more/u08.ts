import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: '___ eines Jahres hat die Bürgerinitiative über 20.000 Unterschriften gesammelt.',
      options: ['Trotz', 'Innerhalb', 'Statt', 'Angesichts'],
      answer: 1,
      explanationRu: 'Речь о сроке, в пределах которого что-то произошло: innerhalb + Genitiv — «в течение года».',
    },
    {
      type: 'choice',
      prompt: 'Ich habe gestern lange mit unserem ___ über die Wahl gesprochen.',
      options: ['Nachbar', 'Nachbarn', 'Nachbars', 'Nachbaren'],
      answer: 1,
      explanationRu: 'Nachbar склоняется слабо: во всех формах, кроме Nominativ Singular, окончание -n: mit unserem Nachbarn.',
    },
    {
      type: 'choice',
      prompt: 'Haben Sie schon ___ Müller nach seiner Meinung gefragt?',
      options: ['Herrn', 'Herr', 'Herren', 'Herrns'],
      answer: 0,
      explanationRu: 'Herr — особое слабое существительное: в единственном числе Akk/Dat/Gen — Herrn, во множественном — Herren.',
    },
    {
      type: 'choice',
      prompt: 'Die Bedeutung des ___ der neuen Partei war vielen Wählern nicht klar.',
      options: ['Name', 'Namen', 'Namens', 'Names'],
      answer: 2,
      explanationRu: 'Name (как Gedanke, Glaube, Buchstabe) склоняется смешанно: Akk/Dat — Namen, но Genitiv — des Namens.',
    },
    {
      type: 'choice',
      prompt: 'Weil der Ratssaal renoviert wird, findet die Sitzung diesmal ___ des Rathauses statt.',
      options: ['wegen', 'anstatt', 'innerhalb', 'außerhalb'],
      answer: 3,
      explanationRu: 'Зал ремонтируется, поэтому заседание проходит вне здания ратуши: außerhalb + Genitiv.',
    },
    {
      type: 'choice',
      prompt: 'Aufgrund ___ Erkenntnisse muss der Gesetzentwurf überarbeitet werden.',
      options: ['neue', 'neuen', 'neuer', 'neues'],
      answer: 2,
      explanationRu: 'Genitiv множественного числа без артикля: прилагательное берёт сильное окончание -er (aufgrund neuer Erkenntnisse).',
    },
    {
      type: 'gap',
      prompt: 'Trotz des starken ___ kamen über 5.000 Menschen zur Kundgebung.',
      answers: ['Regens'],
      hintRu: 'der Regen',
      explanationRu: 'trotz + Genitiv; мужской род: des starken Regens — артикль des, прилагательное -en, существительное -s.',
    },
    {
      type: 'gap',
      prompt: 'Die Opposition lehnte den Plan ___ der hohen Kosten ab.',
      answers: ['wegen', 'aufgrund', 'angesichts'],
      explanationRu: 'Причина → wegen / aufgrund + Genitiv; также возможно angesichts («ввиду»).',
    },
    {
      type: 'gap',
      prompt: 'Innerhalb ___ zwei Wochen muss der Antrag beim Bürgeramt eingereicht werden.',
      answers: ['von'],
      explanationRu: 'Во множественном числе без артикля и прилагательного Genitiv не виден, поэтому используют von + Dativ: innerhalb von zwei Wochen.',
    },
    {
      type: 'gap',
      prompt: 'Die Regierung folgte der Empfehlung des ___.',
      answers: ['Experten'],
      hintRu: 'der Experte',
      explanationRu: 'Experte — мужской род на -e (лицо), слабое склонение: des Experten (без -s!).',
    },
    {
      type: 'gap',
      prompt: 'Kennen Sie einen ___, der sich im Wahlrecht gut auskennt?',
      answers: ['Juristen'],
      hintRu: 'der Jurist',
      explanationRu: 'Существительные на -ist склоняются слабо: Akkusativ einen Juristen.',
    },
    {
      type: 'gap',
      prompt: 'Während der ___ Legislaturperiode wurden zwölf Gesetze verabschiedet.',
      answers: ['letzten'],
      hintRu: 'letzt-',
      explanationRu: 'während + Genitiv; женский род после определённого артикля: der letzten Legislaturperiode (окончание -en).',
    },
    {
      type: 'gap',
      prompt: 'Statt eines ___ Kompromisses gab es am Ende nur leere Versprechen.',
      answers: ['fairen'],
      hintRu: 'fair',
      explanationRu: 'statt + Genitiv; после неопределённого артикля в Genitiv прилагательное получает -en: eines fairen Kompromisses.',
    },
    {
      type: 'order',
      words: ['Anlässlich', 'des Jubiläums', 'hielt', 'der Bundespräsident', 'eine Rede.'],
      translationRu: 'По случаю юбилея федеральный президент произнёс речь.',
      explanationRu: 'anlässlich + Genitiv («по случаю»). Предложная группа на первом месте, спрягаемый глагол — на втором.',
    },
    {
      type: 'order',
      words: ['Der Polizist', 'fragte', 'den Demonstranten', 'nach', 'seinem', 'Namen.'],
      translationRu: 'Полицейский спросил демонстранта, как его зовут.',
      explanationRu: 'Demonstrant (-ant) — слабое склонение: den Demonstranten. Name в Dativ — dem/seinem Namen.',
    },
    {
      type: 'order',
      words: ['Infolge', 'der Krise', 'sind', 'nicht nur', 'die Preise', 'gestiegen,', 'sondern auch', 'die Mieten.'],
      translationRu: 'Вследствие кризиса выросли не только цены, но и арендная плата.',
      explanationRu: 'infolge + Genitiv. Повторение: двойной союз nicht nur …, sondern auch.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное предложение предложной группой с trotz.',
      prompt: 'Obwohl es heftige Proteste gab, wurde das Gesetz verabschiedet.',
      answers: [
        'Trotz der heftigen Proteste wurde das Gesetz verabschiedet.',
        'Trotz heftiger Proteste wurde das Gesetz verabschiedet.',
      ],
      explanationRu: 'obwohl → trotz + Genitiv. С артиклем: der heftigen Proteste; без артикля — сильное окончание: heftiger Proteste.',
    },
    {
      type: 'transform',
      instructionRu: 'Исправьте предложение в соответствии с письменной нормой.',
      prompt: 'Während dem Wahlkampf haben die Parteien viel versprochen.',
      answers: [
        'Während des Wahlkampfs haben die Parteien viel versprochen.',
        'Während des Wahlkampfes haben die Parteien viel versprochen.',
      ],
      explanationRu: 'В письменной речи после während нужен Genitiv: des Wahlkampfs / des Wahlkampfes.',
    },
    {
      type: 'transform',
      instructionRu: 'Поменяйте подлежащее и дополнение местами.',
      prompt: 'Der Präsident begrüßt den Journalisten.',
      answers: ['Der Journalist begrüßt den Präsidenten.'],
      explanationRu: 'Оба существительных слабые: в Nominativ — без окончания (der Journalist), в Akkusativ — -en (den Präsidenten).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените für + Akkusativ предлогом zugunsten + Genitiv.',
      prompt: 'Die Bürgerinitiative sammelte Spenden für die Opfer des Hochwassers.',
      answers: ['Die Bürgerinitiative sammelte Spenden zugunsten der Opfer des Hochwassers.'],
      explanationRu: 'zugunsten + Genitiv — «в пользу». die Opfer (Plural) → der Opfer.',
    },
  ],
  reading: [
    {
      title: 'Wählen ab 16?',
      textType: 'Meinungen',
      texts: [
        {
          label: 'Lea, 17, Schülerin',
          body: 'Ich verstehe nicht, warum man mit 16 schon Steuern zahlen, aber nicht wählen darf. Wer eine Ausbildung macht und Geld verdient, zahlt doch bereits in die Sozialkassen ein. Außerdem betreffen viele politische Entscheidungen – etwa beim Klimaschutz oder bei der Rente – vor allem unsere Generation. Trotzdem entscheiden darüber fast nur Ältere. In meiner Klasse interessieren sich übrigens viel mehr Leute für Politik, als Erwachsene glauben. Wir informieren uns eben anders: über Podcasts und soziale Medien statt über die Tageszeitung.',
        },
        {
          label: 'Matthias, 58, Politikwissenschaftler',
          body: 'Die Erfahrungen aus den Bundesländern, in denen man bei Landtagswahlen schon mit 16 wählen darf, sind interessant. Die Wahlbeteiligung der 16- und 17-Jährigen liegt dort teilweise sogar höher als die der jungen Erwachsenen zwischen 18 und 25. Das spricht dafür, dass Jugendliche, die noch zu Hause wohnen und in der Schule über Wahlen sprechen, eher zur Wahl gehen. Ein Allheilmittel gegen Politikverdrossenheit ist das Wahlrecht ab 16 aber nicht. Entscheidend ist, ob sich die Parteien danach auch wirklich um die Themen junger Menschen kümmern.',
        },
        {
          label: 'Aylin, 34, Lehrerin',
          body: 'Als Lehrerin erlebe ich jeden Tag, wie unterschiedlich Jugendliche in diesem Alter sind. Manche sind politisch erstaunlich gut informiert, andere interessieren sich überhaupt nicht dafür. Aber das ist bei Erwachsenen genauso. Wichtiger als die Frage nach dem Alter finde ich deshalb die politische Bildung. Wenn wir das Wahlalter senken, muss Politik ab der siebten Klasse ein richtiges Schulfach werden – mit mehr als einer Stunde pro Woche. Sonst bleibt die Reform ein reines Symbol.',
        },
        {
          label: 'Konrad, 70, Gemeinderat',
          body: 'Ich sitze seit dreißig Jahren im Gemeinderat und bin ehrlich gesagt dagegen. Mit 16 ist man noch sehr leicht zu beeinflussen – von den Eltern, von Freunden und inzwischen vor allem von irgendwelchen Videos im Internet. Volljährigkeit und Wahlrecht gehören für mich zusammen: Wer wählen darf, sollte auch für sein eigenes Handeln voll verantwortlich sein. Wenn junge Leute sich engagieren wollen, gibt es dafür schon heute viele Möglichkeiten, zum Beispiel in Jugendparlamenten oder Schülervertretungen.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Meinungen. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте мнения. Какое утверждение относится к какому человеку? Одного человека можно выбирать несколько раз (формат Goethe B2 Lesen, Teil 1).',
          options: ['Lea', 'Matthias', 'Aylin', 'Konrad'],
          items: [
            {
              kind: 'match',
              prompt: 'Jugendliche lassen sich leichter manipulieren.',
              answer: 3,
              explanationRu: 'Конрад: «Mit 16 ist man noch sehr leicht zu beeinflussen».',
            },
            {
              kind: 'match',
              prompt: 'Wer schon finanziell zum Staat beiträgt, sollte auch mitbestimmen dürfen.',
              answer: 0,
              explanationRu: 'Леа: в 16 платят налоги и взносы, но голосовать не могут.',
            },
            {
              kind: 'match',
              prompt: 'In manchen Regionen gehen Minderjährige häufiger wählen als junge Erwachsene.',
              answer: 1,
              explanationRu: 'Маттиас: явка 16–17-летних местами выше, чем у 18–25-летних.',
            },
            {
              kind: 'match',
              prompt: 'Ohne zusätzlichen Unterricht hätte eine Senkung des Wahlalters kaum Wirkung.',
              answer: 2,
              explanationRu: 'Айлин: политика должна стать полноценным предметом, иначе реформа останется символом.',
            },
            {
              kind: 'match',
              prompt: 'Junge Menschen nutzen andere Informationsquellen als ältere.',
              answer: 0,
              explanationRu: 'Леа: «über Podcasts und soziale Medien statt über die Tageszeitung».',
            },
            {
              kind: 'match',
              prompt: 'Das Wahlrecht sollte an die Volljährigkeit gekoppelt bleiben.',
              answer: 3,
              explanationRu: 'Конрад: «Volljährigkeit und Wahlrecht gehören für mich zusammen».',
            },
            {
              kind: 'match',
              prompt: 'Das politische Interesse ist bei Jugendlichen genauso unterschiedlich wie bei Erwachsenen.',
              answer: 2,
              explanationRu: 'Айлин: одни подростки хорошо информированы, другие не интересуются — «das ist bei Erwachsenen genauso».',
            },
            {
              kind: 'match',
              prompt: 'Junge Menschen können sich bereits jetzt auf anderen Wegen politisch beteiligen.',
              answer: 3,
              explanationRu: 'Конрад: уже сейчас есть молодёжные парламенты и школьное самоуправление.',
            },
            {
              kind: 'match',
              prompt: 'Es kommt darauf an, wie die Parteien auf junge Wählerinnen und Wähler reagieren.',
              answer: 1,
              explanationRu: 'Маттиас: решающее значение имеет, займутся ли партии темами молодёжи.',
            },
          ],
        },
      ],
    },
    {
      title: 'Gelost statt gewählt',
      textType: 'Zeitungsartikel',
      texts: [
        {
          heading: 'Gelost statt gewählt: Was Bürgerräte leisten können',
          body: `Eine Krankenpflegerin aus Rostock, ein Landwirt aus dem Allgäu, ein Student aus Köln: Sie hätten sich wohl nie kennengelernt, wenn nicht das Los entschieden hätte. Gemeinsam mit 157 anderen zufällig ausgewählten Menschen saßen sie mehrere Wochenenden lang in einem Bürgerrat zum Thema Ernährung. Am Ende stand eine Liste mit neun Empfehlungen an den Bundestag.

Die Idee hinter Bürgerräten ist einfach: Statt nur Fachleute und Interessenverbände anzuhören, holt man gewöhnliche Bürgerinnen und Bürger an einen Tisch. Damit die Gruppe die Gesellschaft möglichst gut abbildet, wird nicht nur gelost, sondern auch auf Alter, Geschlecht, Bildungsabschluss und Wohnort geachtet. Innerhalb weniger Wochen informieren sich die Teilnehmenden bei Expertinnen und Experten, diskutieren in kleinen Gruppen und stimmen schließlich über ihre Vorschläge ab. Für ihren Einsatz erhalten sie eine Aufwandsentschädigung.

Befürworter sehen darin eine Antwort auf die wachsende Politikverdrossenheit. „Viele Menschen haben das Gefühl, dass ihre Stimme zwischen den Wahlen nicht zählt“, sagt die Politikwissenschaftlerin Dr. Hanna Reuter. „In Bürgerräten erleben sie, wie schwierig es ist, unterschiedliche Interessen auszugleichen. Das schafft Verständnis für politische Kompromisse – auch dann, wenn man selbst anderer Meinung ist.“ Bemerkenswert sei zudem, dass sich die Teilnehmenden trotz großer Meinungsunterschiede am Ende meist auf gemeinsame Empfehlungen einigten.

Kritiker weisen dagegen auf ein grundsätzliches Problem hin: Die Empfehlungen sind nicht bindend. Das Parlament kann sie aufgreifen, muss es aber nicht. „Wenn die Vorschläge anschließend in der Schublade verschwinden, ist die Enttäuschung umso größer“, warnt der Abgeordnete Peter Lindner. Außerdem stelle sich die Frage nach der Legitimation: Gewählte Abgeordnete müssten sich vor ihren Wählern verantworten, ausgeloste Bürger nicht.

Angesichts dieser Bedenken fordern manche Fachleute klare Regeln. Das Parlament solle sich zum Beispiel verpflichten, innerhalb eines halben Jahres öffentlich zu jeder Empfehlung Stellung zu nehmen und zu begründen, warum es einem Vorschlag folgt oder nicht. In Irland, wo Bürgerversammlungen schon seit Jahren eingesetzt werden, hat sich dieses Vorgehen bewährt: Dort führten Empfehlungen eines solchen Gremiums sogar zu Volksabstimmungen über wichtige gesellschaftliche Fragen.

Ob Bürgerräte in Deutschland dauerhaft eine Rolle spielen werden, bleibt abzuwarten. Die Teilnehmenden des Ernährungsrats jedenfalls ziehen eine positive Bilanz. „Ich habe gelernt, anderen zuzuhören“, sagt die Krankenpflegerin aus Rostock. „Das hätte ich mir vorher nicht zugetraut.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text und die Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте статью и выберите правильный ответ a, b или c (формат Goethe B2 Lesen, Teil 2).',
          items: [
            {
              kind: 'mc',
              question: 'Wie werden die Mitglieder eines Bürgerrats ausgewählt?',
              options: [
                'Sie bewerben sich mit einem Motivationsschreiben.',
                'Sie werden ausgelost, wobei auf eine ausgewogene Zusammensetzung geachtet wird.',
                'Sie werden von den Parteien vorgeschlagen.',
              ],
              answer: 1,
              explanationRu: 'Участников выбирают по жребию, но учитывают возраст, пол, образование и место жительства.',
            },
            {
              kind: 'mc',
              question: 'Was tun die Teilnehmenden während des Bürgerrats?',
              options: [
                'Sie lassen sich von Fachleuten informieren und diskutieren in Gruppen.',
                'Sie schreiben gemeinsam neue Gesetze.',
                'Sie arbeiten ehrenamtlich ohne jede Entschädigung.',
              ],
              answer: 0,
              explanationRu: 'Они получают информацию от экспертов, обсуждают в малых группах и голосуют. Денежную компенсацию они получают (Aufwandsentschädigung).',
            },
            {
              kind: 'mc',
              question: 'Welchen Vorteil von Bürgerräten nennt Dr. Reuter?',
              options: [
                'Sie könnten langfristig Wahlen ersetzen.',
                'Sie beschleunigen politische Entscheidungen.',
                'Sie fördern das Verständnis für politische Kompromisse.',
              ],
              answer: 2,
              explanationRu: '«Das schafft Verständnis für politische Kompromisse – auch dann, wenn man selbst anderer Meinung ist».',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert Peter Lindner?',
              options: [
                'Die Teilnehmenden sind schlecht informiert.',
                'Die Empfehlungen werden womöglich gar nicht umgesetzt.',
                'Bürgerräte kosten zu viel Geld.',
              ],
              answer: 1,
              explanationRu: 'Рекомендации не обязательны; если они «исчезнут в ящике», разочарование будет ещё больше.',
            },
            {
              kind: 'mc',
              question: 'Was fordern manche Fachleute?',
              options: [
                'Das Parlament soll zu jeder Empfehlung öffentlich Stellung nehmen.',
                'Die Empfehlungen sollen für das Parlament verbindlich sein.',
                'Bürgerräte sollen nur noch in den Gemeinden stattfinden.',
              ],
              answer: 0,
              explanationRu: 'Парламент должен в течение полугода публично ответить на каждую рекомендацию и обосновать решение.',
            },
            {
              kind: 'mc',
              question: 'Was erfährt man über Irland?',
              options: [
                'Dort wurden Bürgerversammlungen wieder abgeschafft.',
                'Dort werden die Mitglieder solcher Gremien gewählt.',
                'Dort haben Empfehlungen solcher Gremien zu Volksabstimmungen geführt.',
              ],
              answer: 2,
              explanationRu: '«Dort führten Empfehlungen eines solchen Gremiums sogar zu Volksabstimmungen».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Nachricht vom Wahlamt',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      playCount: 2,
      text: `Guten Tag, Frau Yilmaz, hier spricht Thomas Krause vom Wahlamt der Stadt. Vielen Dank noch einmal, dass Sie sich als Wahlhelferin gemeldet haben! Ich rufe an, weil sich wegen der hohen Zahl an Briefwählern eine Änderung ergeben hat. Wir würden Sie gern nicht wie geplant im Wahllokal in der Goetheschule einsetzen, sondern im Briefwahlzentrum im Rathaus. Dort beginnt Ihr Einsatz allerdings erst um 15 Uhr, dafür kann es abends etwas länger dauern – je nachdem, wie schnell ausgezählt wird. Das Erfrischungsgeld von 50 Euro bekommen Sie selbstverständlich trotzdem in voller Höhe. Und bitte denken Sie an die Schulung am kommenden Dienstag. Sie findet um 18 Uhr im Sitzungssaal des Rathauses statt, also nicht wie im Brief angegeben im Bürgerbüro. Falls Sie mit dem neuen Einsatzort nicht einverstanden sind, rufen Sie mich bitte innerhalb dieser Woche zurück, die Nummer steht auf Ihrem Einladungsschreiben. Vielen Dank und auf Wiederhören!`,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения? (формат Goethe B2 Hören, Teil 1)',
          items: [
            {
              kind: 'tf',
              statement: 'Frau Yilmaz soll an einem anderen Ort helfen als ursprünglich geplant.',
              answer: true,
              explanationRu: 'Не в школе имени Гёте, а в центре обработки почтовых бюллетеней в ратуше.',
            },
            {
              kind: 'tf',
              statement: 'Für den neuen Einsatz bekommt Frau Yilmaz weniger Geld.',
              answer: false,
              explanationRu: 'Деньги (Erfrischungsgeld, 50 евро) она получит «trotzdem in voller Höhe».',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Wo findet die Schulung statt?',
              options: ['Im Bürgerbüro.', 'In der Goetheschule.', 'Im Sitzungssaal des Rathauses.'],
              answer: 2,
              explanationRu: 'Обучение — в зале заседаний ратуши, а не в Bürgerbüro, как было указано в письме.',
            },
            {
              kind: 'mc',
              question: 'Was soll Frau Yilmaz tun, wenn sie mit der Änderung nicht einverstanden ist?',
              options: [
                'Herrn Krause bis Ende der Woche zurückrufen.',
                'Eine E-Mail an das Wahlamt schreiben.',
                'Am Dienstag persönlich im Bürgerbüro vorbeikommen.',
              ],
              answer: 0,
              explanationRu: '«… rufen Sie mich bitte innerhalb dieser Woche zurück».',
            },
          ],
        },
      ],
    },
    {
      title: 'Jung und im Stadtrat',
      kind: 'dialog',
      speakers: { A: 'Moderator', B: 'Mara Engel, Mitglied des Stadtrats' },
      situation: 'Sie hören ein Radiointerview mit dem jüngsten Mitglied eines Stadtrats.',
      playCount: 2,
      text: `A: Mara Engel, Sie sind 23 Jahre alt und seit einem Jahr das jüngste Mitglied unseres Stadtrats. Wie kam es dazu?
B: Angefangen hat alles mit einer Bürgerinitiative. Als ich sechzehn war, sollte der einzige Jugendtreff in unserem Stadtteil geschlossen werden – angeblich wegen fehlender Mittel. Wir haben damals Unterschriften gesammelt und Demonstrationen organisiert, und am Ende blieb der Treff offen. Da habe ich zum ersten Mal gemerkt, dass man tatsächlich etwas bewegen kann.
A: Und dann sind Sie gleich in eine Partei eingetreten?
B: Nein, das hat noch ein paar Jahre gedauert. Ehrlich gesagt hatte ich lange Vorbehalte gegen Parteien. Ich dachte, da wird nur geredet. Aber irgendwann habe ich verstanden: Wenn ich will, dass sich wirklich etwas ändert, muss ich dort sitzen, wo die Entscheidungen getroffen werden.
A: Wie haben die älteren Kolleginnen und Kollegen auf Sie reagiert?
B: Unterschiedlich. Die meisten waren offen und hilfsbereit. Aber es gab auch Momente, in denen ich nicht ernst genommen wurde. In meiner ersten Sitzung hat mich ein Kollege gefragt, ob ich die neue Praktikantin sei. Inzwischen können wir beide darüber lachen.
A: Wie viel Zeit kostet Sie das Mandat?
B: Mehr, als ich gedacht hätte. Neben meinem Studium sind das etwa fünfzehn Stunden pro Woche: Sitzungen, Ausschüsse, Gespräche mit Bürgern – und natürlich muss man die ganzen Unterlagen lesen. Während der Haushaltsberatungen ist es noch mehr. Da bleibt nicht viel Freizeit.
A: Viele sagen, junge Menschen seien politikverdrossen. Stimmt das?
B: Das sehe ich anders. Junge Leute interessieren sich sehr für Politik, nur nicht unbedingt für Parteien. Sie engagieren sich lieber in Projekten mit einem klaren Ziel – für den Klimaschutz oder für bezahlbaren Wohnraum. Das Problem ist eher, dass die Strukturen in der Politik wenig attraktiv sind: lange Sitzungen am Abend, viel Bürokratie und wenig sichtbare Ergebnisse.
A: Was müsste sich ändern?
B: Zum einen sollte man an Sitzungen auch digital teilnehmen können. Das würde allen helfen, die Familie haben oder im Schichtdienst arbeiten – nicht nur jungen Leuten. Zum anderen wünsche ich mir ein Jugendparlament mit echtem Mitspracherecht und einem eigenen Budget.
A: Und Ihre eigenen Pläne? Wollen Sie Berufspolitikerin werden?
B: Auf keinen Fall sofort. Ich möchte erst mein Studium abschließen und ein paar Jahre als Ingenieurin arbeiten. Ich finde, es tut der Politik gut, wenn Menschen Erfahrungen aus dem Berufsleben mitbringen.`,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите интервью два раза. Выберите правильный ответ (формат Goethe B2 Hören, Teil 2).',
          items: [
            {
              kind: 'mc',
              question: 'Wie begann Mara Engels politisches Engagement?',
              options: [
                'Mit dem Eintritt in eine Partei.',
                'Mit dem Protest gegen die Schließung eines Jugendtreffs.',
                'Mit einem Praktikum im Rathaus.',
              ],
              answer: 1,
              explanationRu: 'В 16 лет она участвовала в инициативе против закрытия молодёжного клуба.',
            },
            {
              kind: 'mc',
              question: 'Warum ist sie später doch in eine Partei eingetreten?',
              options: [
                'Sie wollte dort mitwirken, wo entschieden wird.',
                'Freunde haben sie dazu überredet.',
                'Eine Partei hat ihr einen Platz im Stadtrat angeboten.',
              ],
              answer: 0,
              explanationRu: '«… muss ich dort sitzen, wo die Entscheidungen getroffen werden».',
            },
            {
              kind: 'mc',
              question: 'Was erlebte sie in ihrer ersten Sitzung?',
              options: [
                'Sie musste spontan eine Rede halten.',
                'Sie bekam viel Lob für ihre Ideen.',
                'Ein Kollege hielt sie für eine Praktikantin.',
              ],
              answer: 2,
              explanationRu: 'Коллега спросил, не новая ли она практикантка.',
            },
            {
              kind: 'mc',
              question: 'Was sagt sie über ihren Zeitaufwand?',
              options: [
                'Er ist höher, als sie erwartet hatte.',
                'Er ist neben dem Studium kein Problem.',
                'Sie arbeitet fast nur in den Semesterferien für den Stadtrat.',
              ],
              answer: 0,
              explanationRu: '«Mehr, als ich gedacht hätte» — около 15 часов в неделю, свободного времени мало.',
            },
            {
              kind: 'mc',
              question: 'Wie sieht sie das politische Interesse junger Menschen?',
              options: [
                'Es ist in den letzten Jahren stark gesunken.',
                'Es richtet sich eher auf konkrete Projekte als auf Parteien.',
                'Es beschränkt sich auf den Klimaschutz.',
              ],
              answer: 1,
              explanationRu: 'Молодёжь интересуется политикой, но предпочитает проекты с ясной целью, а не партии.',
            },
            {
              kind: 'mc',
              question: 'Was möchte sie nach dem Studium tun?',
              options: [
                'Sofort Berufspolitikerin werden.',
                'Einige Jahre im Ausland verbringen.',
                'Zunächst in ihrem Beruf arbeiten.',
              ],
              answer: 2,
              explanationRu: 'Сначала она хочет несколько лет поработать инженером.',
            },
          ],
        },
      ],
    },
  ],
};
