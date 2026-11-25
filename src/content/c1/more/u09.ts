import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Hast du dem Verlag das Manuskript schon geschickt? – Ja, ich habe ___ gestern geschickt.',
      options: ['es ihm', 'ihm es', 'ihn es', 'es ihn'],
      answer: 0,
      explanationRu:
        'Два местоимения в среднем поле: винительный перед дательным — «es ihm». «das Manuskript» → es, «dem Verlag» → ihm.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist grammatisch FALSCH?',
      options: [
        'Gestern hat die Autorin aus ihrem neuen Roman gelesen.',
        'Aus ihrem neuen Roman hat die Autorin gestern gelesen.',
        'Gestern die Autorin hat aus ihrem neuen Roman gelesen.',
        'Die Autorin hat gestern aus ihrem neuen Roman gelesen.',
      ],
      answer: 2,
      explanationRu: 'В Vorfeld (перед спрягаемым глаголом) может стоять только один член предложения. «Gestern die Autorin hat» — два.',
    },
    {
      type: 'gap',
      prompt: 'Hat die Jury dem Fotografen den Preis schon verliehen? – Ja, sie hat ___ dem Fotografen gestern verliehen.',
      answers: ['ihn'],
      explanationRu:
        'Местоимение стоит перед существительным: местоимение в винительном («ihn» = den Preis) идёт раньше дательного существительного «dem Fotografen».',
    },
    {
      type: 'gap',
      prompt: 'Die Kuratorin hat ___ die Installation gestern ausführlich erklärt. (им — местоимение)',
      answers: ['ihnen'],
      explanationRu:
        'Местоимения стоят в начале среднего поля, раньше существительных: «hat ihnen die Installation … erklärt».',
    },
    {
      type: 'gap',
      prompt: 'Mit diesem Thema beschäftigt ___ die Künstlerin schon seit Jahrzehnten.',
      answers: ['sich'],
      explanationRu:
        'Возвратное местоимение стремится в начало среднего поля и часто стоит даже перед подлежащим-существительным.',
    },
    {
      type: 'gap',
      prompt: '___ wurde während der Lesung erstaunlich viel gelacht.',
      answers: ['Es'],
      explanationRu:
        'Бессубъектный пассив (повторение C1-06): если Vorfeld ничем не занят, его заполняет «es» — только для сохранения глагола на втором месте.',
    },
    {
      type: 'gap',
      prompt: 'Das Gemälde? Man hat ___ ihm für eine lächerliche Summe abgekauft.',
      answers: ['es'],
      hintRu: 'местоимение вместо «das Gemälde»',
      explanationRu:
        'Порядок местоимений в среднем поле: Nom. → Akk. → Dat. Подлежащее «man» стоит в Vorfeld, затем «es» (Akk.) перед «ihm» (Dat.).',
    },
    {
      type: 'choice',
      prompt: 'Welche Reihe ist richtig geordnet: gehoben – neutral – umgangssprachlich?',
      options: [
        'speisen – essen – futtern',
        'essen – speisen – futtern',
        'futtern – essen – speisen',
        'speisen – futtern – essen',
      ],
      answer: 0,
      explanationRu: '«speisen» — книжное, «essen» — нейтральное, «futtern» — разговорное («уплетать»).',
    },
    {
      type: 'gap',
      prompt: 'Der Dichter ___ im Frühjahr 1832 in seinem Haus in Weimar. (gehoben für „starb“)',
      answers: ['verschied', 'entschlief'],
      explanationRu:
        'Книжные синонимы «sterben»: «verscheiden» (verschied) и «entschlafen» (entschlief). Разговорные — «abkratzen, draufgehen» — в таком тексте недопустимы.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz verneint die ganze Aussage (nicht nur ein Satzglied)?',
      options: [
        'Die Autorin hat nicht ihrem Verleger das Manuskript geschickt.',
        'Die Autorin hat ihrem Verleger das Manuskript nicht geschickt.',
        'Die Autorin hat ihrem Verleger nicht das Manuskript geschickt.',
        'Nicht die Autorin hat ihrem Verleger das Manuskript geschickt.',
      ],
      answer: 1,
      explanationRu:
        'При отрицании всего предложения «nicht» стоит в конце среднего поля, перед второй частью сказуемого. В других вариантах отрицается отдельный член («не издателю, а …»).',
    },
    {
      type: 'gap',
      prompt: 'So vielschichtig der Roman ___ sein mag, er ist stellenweise ermüdend zu lesen.',
      answers: ['auch'],
      hintRu: 'повторение: уступка (C1-07)',
      explanationRu:
        'Обобщающая уступка «so … auch»; после неё главное предложение сохраняет прямой порядок слов: «er ist …».',
    },
    {
      type: 'choice',
      prompt: 'Welche Variante ist im geschriebenen Standarddeutsch üblich?',
      options: [
        'Er hat, dass das Bild eine Fälschung sei, öffentlich behauptet.',
        'Er hat öffentlich behauptet, dass das Bild eine Fälschung sei.',
        'Er, dass das Bild eine Fälschung sei, hat öffentlich behauptet.',
        'Er hat öffentlich dass das Bild eine Fälschung sei behauptet.',
      ],
      answer: 1,
      explanationRu: 'Придаточные предложения, как правило, выносятся в Nachfeld — за правую часть рамки («behauptet»).',
    },
    {
      type: 'choice',
      prompt:
        'Welcher Satz schließt am besten an? „In der Ausstellung hängt ein kleines, unscheinbares Ölbild.“',
      options: [
        'Ein Sammler aus Basel hat dieses Bild 1950 für wenige Franken gekauft.',
        '1950 hat für wenige Franken ein Sammler aus Basel dieses Bild gekauft.',
        'Dieses Bild hat ein Sammler aus Basel 1950 für wenige Franken gekauft.',
        'Für wenige Franken hat dieses Bild 1950 ein Sammler aus Basel gekauft.',
      ],
      answer: 2,
      explanationRu:
        'В Vorfeld лучше ставить известную информацию, связывающую с предыдущим предложением: «Dieses Bild …». Новое (кто купил) идёт дальше.',
    },
    {
      type: 'order',
      words: ['Sie', 'hat', 'es', 'ihm', 'erst', 'nach der Lesung', 'gegeben.'],
      translationRu: 'Она отдала ему это только после чтения.',
      explanationRu: 'Местоимения в порядке Akk. → Dat. («es ihm») стоят в начале среднего поля, затем обстоятельство времени.',
    },
    {
      type: 'order',
      words: ['Der', 'Film', 'ist', 'viel', 'düsterer', 'geworden', 'als', 'die Romanvorlage.'],
      translationRu: 'Фильм получился гораздо мрачнее, чем литературный первоисточник.',
      explanationRu: 'Сравнение с «als» выносится за рамку (Ausklammerung): после причастия «geworden».',
    },
    {
      type: 'order',
      words: ['Sie', 'hat', 'einen', 'Roman', 'geschrieben,', 'der', 'die Kritik', 'spaltet.'],
      translationRu: 'Она написала роман, который раскалывает критиков.',
      explanationRu: 'Относительное придаточное стоит в Nachfeld — после причастия «geschrieben», а не внутри рамки.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените оба дополнения местоимениями.',
      prompt: 'Der Museumsdirektor hat dem Sammler das Gemälde abgekauft.',
      answers: ['Der Museumsdirektor hat es ihm abgekauft.'],
      explanationRu: '«das Gemälde» → es (Akk.), «dem Sammler» → ihm (Dat.). Два местоимения: сначала Akk., потом Dat.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните предложение с «Vor allem die Bühnenbilder», чтобы выделить их.',
      prompt: 'Die Kritiker lobten vor allem die Bühnenbilder.',
      answers: ['Vor allem die Bühnenbilder lobten die Kritiker.'],
      explanationRu:
        'Дополнение в Vorfeld выделяется логически; глагол остаётся на втором месте, подлежащее переходит в среднее поле.',
    },
    {
      type: 'transform',
      instructionRu: 'Вынесите сравнение за рамку (Ausklammerung).',
      prompt: 'Die Ausstellung hat mehr Besucher als erwartet angezogen.',
      answers: ['Die Ausstellung hat mehr Besucher angezogen als erwartet.'],
      explanationRu: 'Сравнение «als erwartet» обычно стоит после правой части рамки — причастия «angezogen».',
    },
    {
      type: 'transform',
      instructionRu: 'Замените разговорный глагол нейтральным или книжным синонимом.',
      prompt: 'Die Autorin hat für ihr Buch einen renommierten Preis gekriegt.',
      answers: [
        'Die Autorin hat für ihr Buch einen renommierten Preis erhalten.',
        'Die Autorin hat für ihr Buch einen renommierten Preis bekommen.',
      ],
      explanationRu: '«kriegen» — разговорное; нейтрально «bekommen», книжно «erhalten». Стиль слов должен соответствовать тексту.',
    },
  ],
  reading: [
    {
      title: 'Kunst aus der Maschine',
      textType: 'Zeitungsartikel (Feuilleton)',
      texts: [
        {
          heading: 'Ein Museum zeigt KI-Bilder – und löst eine Debatte darüber aus, was Kunst ist',
          body: `Als im vergangenen Herbst ein großes Kunstmuseum im Rheinland ankündigte, eine Ausstellung ausschließlich mit Werken zu bestreiten, die mithilfe künstlicher Intelligenz entstanden sind, war die Empörung groß. Von einem „Ausverkauf der Kunst“ war in den Feuilletons die Rede, Künstlerverbände riefen zum Boykott auf. Inzwischen ist die Schau eröffnet – und die Besucherzahlen übertreffen alle Erwartungen.

Wer durch die Räume geht, begegnet Bildern, die auf den ersten Blick kaum von Gemälden aus Menschenhand zu unterscheiden sind: verschwommene Landschaften im Stil der Impressionisten, surreale Porträts, abstrakte Kompositionen in leuchtenden Farben. Erst die Begleittexte verraten, wie sie entstanden sind. Und genau hier setzt die Kuratorin an. Es gehe ihr nicht darum, die Maschine als neue Künstlerin zu feiern, erklärt sie, sondern darum, Fragen zu stellen: Was macht ein Kunstwerk aus? Welche Rolle spielt die Absicht dessen, der es geschaffen hat? Und ist ein Bild weniger wert, wenn man weiß, dass ein Algorithmus es erzeugt hat?

Dass diese Fragen keineswegs akademisch sind, zeigt ein Experiment, das das Museum begleitend durchführt. Besucherinnen und Besucher bewerten zunächst eine Reihe von Bildern, ohne deren Herkunft zu kennen. Anschließend erfahren sie, welche Werke von Menschen und welche von einer KI stammen, und bewerten erneut. Die vorläufigen Ergebnisse decken sich mit früheren Studien: Sobald bekannt ist, dass ein Bild maschinell erzeugt wurde, fällt das Urteil deutlich schlechter aus – selbst bei Werken, die zuvor zu den Favoriten gehörten.

Für die Kuratorin ist das ein Beleg dafür, dass wir Kunst nie nur mit den Augen betrachten. „Wir suchen im Werk immer auch den Menschen“, sagt sie. „Wir wollen wissen, was jemand erlebt, gedacht, erlitten hat.“ Eine KI hingegen verarbeite lediglich Millionen bereits existierender Bilder und errechne daraus Wahrscheinlichkeiten.

Genau an diesem Punkt entzündet sich die schärfste Kritik. Viele der Bilder, mit denen die Systeme trainiert wurden, stammen von lebenden Künstlerinnen und Künstlern, die weder gefragt noch bezahlt wurden. Eine Illustratorin, deren Stil von einem Bildgenerator auffallend genau nachgeahmt wird, spricht von „Diebstahl mit System“. Juristisch ist die Lage unübersichtlich: Ob das Training mit urheberrechtlich geschützten Werken zulässig ist, beschäftigt derzeit Gerichte in mehreren Ländern.

Das Museum hat auf die Kritik reagiert. In einem eigenen Raum kommen Künstlerinnen und Künstler zu Wort, die sich von der Technik bedroht fühlen; zugleich werden Arbeiten gezeigt, in denen Kunstschaffende die KI bewusst als Werkzeug einsetzen und ihre Arbeitsschritte offenlegen. Gerade diese Arbeiten gehören zu den eindrucksvollsten der Ausstellung. Sie legen nahe, dass die eigentliche Frage womöglich gar nicht lautet, ob Maschinen Kunst schaffen können – sondern was Menschen mit ihnen schaffen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Artikel. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
          instructionRu: 'Прочитайте статью. Выберите правильный ответ в каждом задании.',
          items: [
            {
              kind: 'mc',
              question: 'Wie wurde die Ankündigung der Ausstellung zunächst aufgenommen?',
              options: [
                'mit großer Neugier und Vorfreude',
                'mit heftiger Ablehnung und Boykottaufrufen',
                'weitgehend gleichgültig',
              ],
              answer: 1,
              explanationRu: '«… war die Empörung groß», «Künstlerverbände riefen zum Boykott auf».',
            },
            {
              kind: 'mc',
              question: 'Was möchte die Kuratorin mit der Ausstellung erreichen?',
              options: [
                'Sie will Fragen nach dem Wesen der Kunst aufwerfen.',
                'Sie will zeigen, dass Maschinen die besseren Künstler sind.',
                'Sie will KI-Bilder an Sammler verkaufen.',
              ],
              answer: 0,
              explanationRu: 'Ей важно не прославить машину, а «Fragen zu stellen: Was macht ein Kunstwerk aus?».',
            },
            {
              kind: 'mc',
              question: 'Was hat das begleitende Experiment bisher ergeben?',
              options: [
                'Besucher können KI-Bilder sicher von menschlichen Werken unterscheiden.',
                'Die Herkunft eines Bildes spielt für das Urteil keine Rolle.',
                'Bilder werden schlechter bewertet, sobald man weiß, dass eine KI sie erzeugt hat.',
              ],
              answer: 2,
              explanationRu: '«Sobald bekannt ist, dass ein Bild maschinell erzeugt wurde, fällt das Urteil deutlich schlechter aus».',
            },
            {
              kind: 'mc',
              question: 'Wie erklärt die Kuratorin dieses Ergebnis?',
              options: [
                'KI-Bilder sind technisch noch nicht ausgereift.',
                'Betrachter suchen in einem Kunstwerk immer auch die Erfahrungen eines Menschen.',
                'Die Besucher waren durch die Medienberichte voreingenommen.',
              ],
              answer: 1,
              explanationRu: '«Wir suchen im Werk immer auch den Menschen» — что человек пережил, думал, выстрадал.',
            },
            {
              kind: 'mc',
              question: 'Worauf bezieht sich der Vorwurf „Diebstahl mit System“?',
              options: [
                'auf das Training der Systeme mit Werken, deren Urheber weder gefragt noch bezahlt wurden',
                'auf den Verkauf von Eintrittskarten zu überhöhten Preisen',
                'auf Kopien berühmter impressionistischer Gemälde in der Ausstellung',
              ],
              answer: 0,
              explanationRu: 'Системы обучали на работах живых художников, «die weder gefragt noch bezahlt wurden».',
            },
            {
              kind: 'mc',
              question: 'Welche Arbeiten hebt der Verfasser besonders hervor?',
              options: [
                'die Werke im Stil der Impressionisten',
                'die Beiträge der Künstler, die die Ausstellung boykottieren',
                'Werke, in denen Kunstschaffende die KI bewusst als Werkzeug nutzen',
              ],
              answer: 2,
              explanationRu: 'Именно работы, где КИ используется как инструмент с открытыми этапами, «gehören zu den eindrucksvollsten».',
            },
          ],
        },
      ],
    },
    {
      title: 'Wozu noch Literaturkritik?',
      textType: 'Kommentar',
      texts: [
        {
          heading: 'Die Kritik hat ihr Monopol verloren – und das ist gut so',
          body: `Es ist eine Klage, die man seit Jahren hört: Die Literaturkritik sei am Ende. Die Feuilletons schrumpfen, Rezensionen werden kürzer, und über den Erfolg eines Buches entscheiden längst nicht mehr die Kritiker großer Zeitungen, sondern junge Leserinnen und Leser, die ihre Lektüre in kurzen Videos auf sozialen Plattformen vorstellen. Auf diesem Weg werden Romane zu Bestsellern, die von der etablierten Kritik kaum beachtet wurden.

Viele meiner Kolleginnen und Kollegen reagieren darauf mit einer Mischung aus Spott und Kränkung. Die Videos seien oberflächlich, heißt es, es gehe um Tränen und Gefühle statt um Sprache und Form. Ich halte diese Haltung für überheblich – und, schlimmer noch, für selbstgefällig. Wer Millionen junger Menschen zum Lesen bringt, verdient zunächst einmal Respekt und nicht Herablassung. Dass sich Jugendliche für dicke Romane begeistern und vor Buchhandlungen Schlange stehen, hätte vor zehn Jahren kaum jemand für möglich gehalten. Hinzu kommt, dass die neue Leserschaft ihre Empfehlungen mit einer Leidenschaft vorträgt, die man in mancher Rezension vergeblich sucht. Wer schildert, wie ein Buch ihn nachts wachgehalten oder zum Weinen gebracht hat, erreicht andere Leser unmittelbar. Darin liegt keine Schwäche, sondern eine Stärke, von der sich die professionelle Kritik durchaus etwas abschauen könnte.

Gleichwohl wäre es naiv, die Entwicklung unkritisch zu bejubeln. Die Algorithmen der Plattformen belohnen, was schnell starke Reaktionen hervorruft. Bücher, die sich nicht in dreißig Sekunden zusammenfassen lassen, die sperrig, verstörend oder leise sind, haben es dort schwer. Verlage wiederum reagieren auf die Nachfrage, indem sie mehr vom immer Gleichen produzieren. Die Gefahr besteht nicht darin, dass zu wenig gelesen wird, sondern darin, dass die Vielfalt des Gelesenen schrumpft.

Genau hier sehe ich die Aufgabe der Kritik – nicht als Gegenspielerin der neuen Leserschaft, sondern als deren Ergänzung. Kritik kann Bücher sichtbar machen, die im Strom der Empfehlungen untergehen würden. Sie kann begründen, warum ein Text gelungen oder misslungen ist, und damit Maßstäbe anbieten, an denen man sich reiben kann. Das setzt allerdings voraus, dass sie sich verständlich ausdrückt. Eine Kritik, die in einem Jargon verfasst ist, den nur Eingeweihte verstehen, darf sich nicht wundern, wenn sie kein Publikum mehr findet.

Die Literaturkritik ist also nicht am Ende. Sie hat lediglich ihr Monopol verloren. Und vielleicht ist das gar nicht so schlecht: Wer nicht mehr automatisch gehört wird, muss sich wieder Mühe geben, zu überzeugen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Kommentar. Wählen Sie bei jeder Aufgabe die Lösung, die der Haltung des Autors entspricht.',
          instructionRu: 'Прочитайте комментарий. Выберите ответ, соответствующий позиции автора.',
          items: [
            {
              kind: 'mc',
              question: 'Wie beurteilt der Autor die Reaktion vieler Kritiker auf die Buchvideos?',
              options: ['als verständlich und berechtigt', 'als überheblich und selbstgefällig', 'als zu zurückhaltend'],
              answer: 1,
              explanationRu: '«Ich halte diese Haltung für überheblich – und, schlimmer noch, für selbstgefällig».',
            },
            {
              kind: 'mc',
              question: 'Was erkennt der Autor an den Buchvideos ausdrücklich an?',
              options: [
                'dass sie viele junge Menschen zum Lesen bringen',
                'dass sie besonders anspruchsvolle Literatur fördern',
                'dass sie die Sprache eines Romans genau analysieren',
              ],
              answer: 0,
              explanationRu: '«Wer Millionen junger Menschen zum Lesen bringt, verdient … Respekt».',
            },
            {
              kind: 'mc',
              question: 'Welche Gefahr sieht der Autor in der Entwicklung?',
              options: [
                'Es wird insgesamt weniger gelesen.',
                'Buchhandlungen verlieren ihre Kundschaft.',
                'Das Spektrum der gelesenen Bücher wird enger.',
              ],
              answer: 2,
              explanationRu: 'Опасность не в том, что читают мало, а в том, «dass die Vielfalt des Gelesenen schrumpft».',
            },
            {
              kind: 'mc',
              question: 'Welche Rolle sollte die Kritik nach Meinung des Autors übernehmen?',
              options: [
                'Sie sollte die Plattformen bekämpfen.',
                'Sie sollte ergänzend wirken und übersehene Bücher sichtbar machen.',
                'Sie sollte sich ganz auf Bestseller konzentrieren.',
              ],
              answer: 1,
              explanationRu: 'Критика — «nicht als Gegenspielerin …, sondern als deren Ergänzung»: она может показать незамеченные книги.',
            },
            {
              kind: 'mc',
              question: 'Was erwartet der Autor von Kritikerinnen und Kritikern?',
              options: [
                'eine verständliche Sprache statt Fachjargon',
                'kürzere und emotionalere Rezensionen',
                'eigene Videos auf sozialen Plattformen',
              ],
              answer: 0,
              explanationRu: 'Критика, написанная жаргоном для посвящённых, не должна удивляться, что теряет публику.',
            },
            {
              kind: 'mc',
              question: 'Wie lässt sich das Fazit des Autors zusammenfassen?',
              options: [
                'Die Literaturkritik hat keine Zukunft mehr.',
                'Die Plattformen werden bald wieder an Bedeutung verlieren.',
                'Der Verlust der Vormachtstellung kann die Kritik zu mehr Überzeugungskraft anspornen.',
              ],
              answer: 2,
              explanationRu: 'Критика потеряла монополию; кто не слышен автоматически, «muss sich wieder Mühe geben, zu überzeugen».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Interview: Die unsichtbare Autorin – Literaturübersetzung',
      kind: 'dialog',
      speakers: { A: 'Moderatorin', B: 'Katharina Weiss, Literaturübersetzerin' },
      situation: 'Sie hören ein Interview mit einer Übersetzerin in einer Kultursendung im Radio.',
      text: `A: Frau Weiss, Sie übersetzen seit über zwanzig Jahren Romane aus dem Russischen und Polnischen. Wie wird man eigentlich Literaturübersetzerin?
B: Bei mir war es eher ein Zufall. Ich habe Slawistik studiert und während eines Aufenthalts in Krakau einen Roman gelesen, der mich nicht mehr losgelassen hat. Ich habe ein Kapitel übersetzt, einfach so, und es an einen Verlag geschickt. Zu meiner Überraschung hat man mir den Auftrag gegeben. Heute würde das kaum noch so funktionieren; die meisten haben inzwischen eine spezielle Ausbildung oder einen entsprechenden Masterstudiengang absolviert.
A: Was ist das Schwierigste an Ihrer Arbeit?
B: Viele denken, es seien die einzelnen Wörter. Die sind meistens das geringste Problem. Schwieriger ist der Ton. Jeder Autor hat seinen eigenen Rhythmus, seine eigene Satzmelodie. Im Russischen kann man Satzglieder sehr frei umstellen, um etwas zu betonen. Im Deutschen ist die Wortstellung strenger geregelt, da muss man andere Mittel finden – man stellt etwas an den Satzanfang oder schiebt es ans Ende, hinter das Verb. Wenn ich das nicht beachte, klingt die Übersetzung zwar korrekt, aber leblos.
A: Und wie gehen Sie mit Umgangssprache oder Dialekt um?
B: Das ist eine der heikelsten Fragen überhaupt. Wenn eine Figur in einem russischen Roman einen ländlichen Dialekt spricht, kann ich sie nicht einfach Bairisch reden lassen – dann säße sie plötzlich in Oberbayern. Ich versuche eher, durch Satzbau und einzelne Wendungen den Eindruck von Mündlichkeit zu erzeugen, ohne die Figur geografisch festzulegen.
A: Arbeiten Sie mit den Autorinnen und Autoren zusammen?
B: Wann immer es möglich ist. Ich schicke ihnen Listen mit Fragen, manchmal sind das Dutzende. Manche sind dafür sehr dankbar, andere eher irritiert. Ein Autor hat mir einmal geantwortet, ich solle das Buch so übersetzen, als hätte er es selbst auf Deutsch geschrieben. Das ist ein wunderbarer Satz – aber auch ein unmöglicher Auftrag.
A: Inzwischen gibt es Übersetzungsprogramme, die erstaunlich gute Ergebnisse liefern. Macht Ihnen das Sorgen?
B: Sorgen ist vielleicht zu viel gesagt, aber es beschäftigt mich. Bei Sachtexten sind die Programme tatsächlich beeindruckend. Bei Literatur sieht es anders aus: Sie liefern einen glatten, plausiblen Text – aber eben einen Durchschnittstext. Das Eigenwillige, das Überraschende geht verloren. Was mich mehr beunruhigt, ist die wirtschaftliche Seite. Manche Verlage lassen bereits maschinell vorübersetzen und bezahlen Übersetzer nur noch für das Nachbearbeiten – zu deutlich geringeren Honoraren.
A: Was wünschen Sie sich für Ihren Berufsstand?
B: Mehr Sichtbarkeit. Übersetzerinnen sind im Grunde Mitautorinnen. Es ist erfreulich, dass unsere Namen inzwischen häufiger auf dem Umschlag stehen. Aber in vielen Rezensionen wird die Übersetzung immer noch mit keinem Wort erwähnt – obwohl die Kritiker ja gar nicht das Original gelesen haben, sondern unseren Text.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Interview. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
          instructionRu: 'Прослушайте интервью. Выберите правильный ответ в каждом задании.',
          items: [
            {
              kind: 'mc',
              question: 'Wie kam Frau Weiss zu ihrem ersten Übersetzungsauftrag?',
              options: [
                'über ein Praktikum bei einem Krakauer Verlag',
                'durch eine Probeübersetzung, die sie unaufgefordert einschickte',
                'durch einen spezialisierten Masterstudiengang',
              ],
              answer: 1,
              explanationRu: 'Она перевела главу «einfach so» и отправила в издательство — и получила заказ.',
            },
            {
              kind: 'mc',
              question: 'Was hält sie für die größte Herausforderung beim Übersetzen?',
              options: [
                'den Ton und den Rhythmus des Autors zu treffen',
                'die richtige Übersetzung einzelner Wörter zu finden',
                'die Termine der Verlage einzuhalten',
              ],
              answer: 0,
              explanationRu: 'Слова — «das geringste Problem»; сложнее всего — «der Ton», ритм и мелодия фразы.',
            },
            {
              kind: 'mc',
              question: 'Welchen Unterschied zwischen dem Russischen und dem Deutschen nennt sie?',
              options: [
                'Das Deutsche hat einen größeren Wortschatz.',
                'Im Russischen gibt es keine Umgangssprache.',
                'Im Russischen ist die Wortstellung freier als im Deutschen.',
              ],
              answer: 2,
              explanationRu: 'По-русски члены предложения можно переставлять свободно, в немецком порядок строже — нужны другие средства (Vorfeld, Nachfeld).',
            },
            {
              kind: 'mc',
              question: 'Wie überträgt sie Dialekte ins Deutsche?',
              options: [
                'Sie ersetzt sie durch einen passenden deutschen Dialekt.',
                'Sie erzeugt Mündlichkeit, ohne die Figur einer bestimmten Region zuzuordnen.',
                'Sie übersetzt sie grundsätzlich in Hochdeutsch.',
              ],
              answer: 1,
              explanationRu: 'Не баварский диалект (иначе персонаж «окажется» в Баварии), а синтаксис и обороты устной речи.',
            },
            {
              kind: 'mc',
              question: 'Was sagt sie über maschinelle Übersetzungen von Literatur?',
              options: [
                'Sie sind fehlerhaft und kaum lesbar.',
                'Sie sind bereits besser als menschliche Übersetzungen.',
                'Sie sind glatt, aber durchschnittlich; das Eigenwillige geht verloren.',
              ],
              answer: 2,
              explanationRu: '«einen glatten, plausiblen Text – aber eben einen Durchschnittstext». Больше её беспокоят низкие гонорары.',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert sie an vielen Rezensionen?',
              options: [
                'Die Übersetzung wird darin nicht erwähnt.',
                'Die Kritiker lesen nur das Original.',
                'Die Rezensionen sind zu lang.',
              ],
              answer: 0,
              explanationRu: 'Перевод «mit keinem Wort erwähnt», хотя критики читали именно текст переводчика.',
            },
          ],
        },
      ],
    },
    {
      title: 'Stimmen nach der Premiere',
      kind: 'discussion',
      speakers: {
        A: 'Gerda, 71, Theaterabonnentin',
        B: 'Tim, 19, Schüler',
        C: 'Dr. Ines Hofmann, Literaturwissenschaftlerin',
        D: 'Sven, 45, Besucher',
      },
      situation: 'Sie hören vier kurze Stimmen von Zuschauern nach der Premiere einer modernen „Faust“-Inszenierung.',
      text: `A: Ich habe seit vierzig Jahren ein Abonnement, aber so etwas habe ich selten erlebt. Man hat den Text um die Hälfte gekürzt und dafür überall Videoleinwände aufgestellt, auf denen Bilder von Börsenkursen flimmern. Goethes Verse gehen in diesem Getöse schlichtweg unter. Den Schauspielern möchte ich allerdings keinen Vorwurf machen – die waren hervorragend, insbesondere der Mephisto. Ihnen gebührt mein Respekt, dem Regisseur gewiss nicht.
B: Ehrlich gesagt bin ich nur hier, weil wir das Stück in der Schule lesen und unsere Lehrerin uns die Karten besorgt hat. Ich dachte, das wird voll langweilig. War's aber nicht! Dass Faust so ein Typ ist, der nie zufrieden ist und immer mehr will – das hab ich erst heute Abend kapiert, als ich die Szenen mit den Börsenkursen gesehen hab. Das hat's für mich irgendwie greifbar gemacht. Ich glaub, ich komm wieder.
C: Das Konzept, Faust als rastlosen Investor zu zeigen, finde ich durchaus reizvoll. Es knüpft an eine Deutungstradition an, die das Stück als Parabel auf den modernen Fortschrittsglauben liest. Leider wird es nicht konsequent durchgehalten. In der zweiten Hälfte verliert die Inszenierung merklich an Spannung, und manche Einfälle wirken eher beliebig. Überzeugend ist dagegen die Gretchen-Figur: Sie ist hier keine naive Unschuld, sondern eine junge Frau mit eigenem Willen.
D: Also, ich bin wegen meiner Frau mitgekommen, Theater ist eigentlich nicht so meins. Dreieinhalb Stunden sind mir einfach zu lang, da hab ich zwischendurch schon auf die Uhr geschaut. Die Musik war aber wirklich klasse, die Band live auf der Bühne – das hat mir gefallen. Trotzdem: Wenn ich die Wahl habe, gehe ich lieber ins Kino.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Stimmen. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте высказывания. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Gerda lobt die Leistung der Schauspieler.',
              answer: true,
              explanationRu: '«die waren hervorragend, insbesondere der Mephisto».',
            },
            {
              kind: 'tf',
              statement: 'Tim ist aus eigenem Antrieb ins Theater gegangen.',
              answer: false,
              explanationRu: 'Он пришёл, потому что пьесу проходят в школе и учительница достала билеты.',
            },
            {
              kind: 'tf',
              statement: 'Frau Hofmann findet, dass das Konzept bis zum Ende überzeugend umgesetzt ist.',
              answer: false,
              explanationRu: '«Leider wird es nicht konsequent durchgehalten» — во второй половине спектакль теряет напряжение.',
            },
            {
              kind: 'tf',
              statement: 'Sven geht lieber ins Kino als ins Theater.',
              answer: true,
              explanationRu: '«Wenn ich die Wahl habe, gehe ich lieber ins Kino».',
            },
          ],
        },
        {
          instructionDe: 'Hören Sie die Stimmen noch einmal. Wählen Sie die richtige Lösung.',
          instructionRu: 'Прослушайте ещё раз. Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was stört Gerda vor allem an der Inszenierung?',
              options: [
                'die schlechte Akustik im Saal',
                'die Kürzungen des Textes und die Videoeffekte',
                'die Länge der Aufführung',
              ],
              answer: 1,
              explanationRu: 'Текст сокращён вдвое, повсюду видеоэкраны — стихи Гёте «gehen im Getöse unter».',
            },
            {
              kind: 'mc',
              question: 'Was hat Tim geholfen, die Figur des Faust zu verstehen?',
              options: [
                'die Erklärungen seiner Lehrerin',
                'die Lektüre des Programmhefts',
                'die Bezüge zur heutigen Finanzwelt',
              ],
              answer: 2,
              explanationRu: 'Он понял Фауста, «als ich die Szenen mit den Börsenkursen gesehen hab».',
            },
            {
              kind: 'mc',
              question: 'Was gefällt Frau Hofmann besonders gut?',
              options: [
                'die Darstellung Gretchens als selbstbestimmte junge Frau',
                'die Spannung in der zweiten Hälfte',
                'die vielen spontanen Einfälle',
              ],
              answer: 0,
              explanationRu: 'Гретхен здесь «keine naive Unschuld, sondern eine junge Frau mit eigenem Willen».',
            },
            {
              kind: 'mc',
              question: 'Was hat Sven an dem Abend gefallen?',
              options: ['das Bühnenbild', 'die Live-Musik', 'die Länge des Stücks'],
              answer: 1,
              explanationRu: '«Die Musik war aber wirklich klasse, die Band live auf der Bühne».',
            },
          ],
        },
      ],
    },
  ],
};
