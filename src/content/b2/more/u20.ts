import type { UnitMore } from '../../types';

// Gesamtwiederholung B2: jede Übung wiederholt ein Grammatikthema aus B2 (Einheit in Klammern in explanationRu).
export const more: UnitMore = {
  exercises: [
    {
      type: 'gap',
      prompt: 'Die alte Brücke ist im vergangenen Sommer vollständig renoviert ___.',
      answers: ['worden'],
      hintRu: 'Passiv Perfekt',
      explanationRu: 'Повторение (B2, единица 1): Passiv Perfekt = sein + Partizip II + worden. Не geworden: в пассиве используется укороченная форма worden.',
    },
    {
      type: 'gap',
      prompt: 'Ein ___ von mir arbeitet als Dolmetscher bei der EU.',
      answers: ['Bekannter'],
      hintRu: 'bekannt → существительное',
      explanationRu: 'Повторение (единица 15): прилагательное в роли существительного склоняется как прилагательное. После ein в мужском роде, Nominativ → -er: ein Bekannter (но: der Bekannte).',
    },
    {
      type: 'gap',
      prompt: 'Innerhalb ___ nächsten zwei Wochen erhalten Sie eine schriftliche Antwort.',
      answers: ['der'],
      hintRu: 'innerhalb + Genitiv',
      explanationRu: 'Повторение (единица 8): innerhalb требует Genitiv. Мн. ч., Genitiv: der nächsten zwei Wochen.',
    },
    {
      type: 'gap',
      prompt: 'Viele Jugendliche sind inzwischen stark abhängig ___ ihrem Smartphone.',
      answers: ['von'],
      hintRu: 'abhängig + предлог',
      explanationRu: 'Повторение (единица 17): abhängig von + Dat. Ловушка для русскоговорящих: «зависим от» → von, а не *aus*.',
    },
    {
      type: 'choice',
      prompt: 'Wenn ich das früher gewusst ___, wäre ich gar nicht erst gekommen.',
      options: ['hätte', 'wäre', 'würde', 'habe'],
      answer: 0,
      explanationRu: 'Повторение (единица 2): Konjunktiv II Vergangenheit — hätte/wäre + Partizip II. wissen образует Perfekt с haben → hätte gewusst.',
    },
    {
      type: 'choice',
      prompt: 'Die Wohnung war ___ groß ___ hell, deshalb haben wir sie sofort gemietet.',
      options: ['weder … noch', 'entweder … oder', 'sowohl … als auch', 'nicht nur … aber'],
      answer: 2,
      explanationRu: 'Повторение (единица 5): по смыслу (deshalb … sofort gemietet) нужны два положительных качества → sowohl … als auch. Weder … noch противоречило бы выводу; *nicht nur … aber* не существует (правильно: nicht nur … sondern auch).',
    },
    {
      type: 'choice',
      prompt: '___ ich die Prüfung bestanden hatte, habe ich mich sofort auf die Stelle beworben.',
      options: ['Seitdem', 'Während', 'Nachdem', 'Bevor'],
      answer: 2,
      explanationRu: 'Повторение (единица 14): в придаточном Plusquamperfekt (bestanden hatte), в главном — Perfekt: действие придаточного произошло раньше → nachdem.',
    },
    {
      type: 'gap',
      prompt: 'Alles, ___ der Referent gesagt hat, war gut belegt.',
      answers: ['was'],
      hintRu: 'относительное местоимение после alles',
      explanationRu: 'Повторение (единица 11): после alles, etwas, nichts, das и превосходной степени (das Beste) относительное местоимение was.',
    },
    {
      type: 'gap',
      prompt: 'Der Minister erklärte, er ___ von den Problemen nichts gewusst.',
      answers: ['habe'],
      hintRu: 'Konjunktiv I, косвенная речь',
      explanationRu: 'Повторение (единица 4): косвенная речь в прошедшем времени — Konjunktiv I от haben/sein + Partizip II: er habe … gewusst.',
    },
    {
      type: 'choice',
      prompt: '___ der hohen Kosten hat sich die Stadt für den Bau des neuen Schwimmbads entschieden.',
      options: ['Obwohl', 'Trotz', 'Trotzdem', 'Dennoch'],
      answer: 1,
      explanationRu: 'Повторение (единица 13): после пропуска стоит существительное в Genitiv (der hohen Kosten) → предлог trotz. Obwohl вводит придаточное с глаголом в конце, trotzdem/dennoch — наречия.',
    },
    {
      type: 'gap',
      prompt: 'Die Regierung hat in dieser Frage noch keine endgültige Entscheidung ___.',
      answers: ['getroffen'],
      hintRu: 'eine Entscheidung …',
      explanationRu: 'Повторение (единица 6): устойчивое сочетание eine Entscheidung treffen. Ловушка: калька с русского *eine Entscheidung machen/nehmen*.',
    },
    {
      type: 'choice',
      prompt: 'Sie geht nicht ans Telefon. Sie ___ schon im Flugzeug sitzen – ihr Flug ging um acht.',
      options: ['soll', 'muss', 'will', 'möchte'],
      answer: 1,
      explanationRu: 'Повторение (единица 7): субъективное müssen — почти уверенное предположение на основе фактов («она, должно быть, уже в самолёте»). soll — «говорят», will — «утверждает о себе».',
    },
    {
      type: 'choice',
      prompt: '___ Angaben der Polizei wurde bei dem Unfall niemand verletzt.',
      options: ['Bezüglich', 'Anhand', 'Laut', 'Mithilfe'],
      answer: 2,
      explanationRu: 'Повторение (единица 18): ссылка на источник информации — laut (+ Dat/Gen) или … zufolge. Bezüglich = «касательно», anhand = «на основании», mithilfe = «с помощью».',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите, используя indem.',
      prompt: 'Man kann viel Energie sparen, wenn man die Heizung nachts herunterdreht.',
      answers: [
        'Man kann viel Energie sparen, indem man die Heizung nachts herunterdreht.',
        'Man kann dadurch viel Energie sparen, dass man die Heizung nachts herunterdreht.',
      ],
      explanationRu: 'Повторение (единица 12): indem отвечает на вопрос «каким образом?» (способ). Глагол в конце придаточного: indem man … herunterdreht.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное инфинитивным оборотом.',
      prompt: 'Der Zeuge behauptet, dass er den Unfall genau gesehen hat.',
      answers: ['Der Zeuge behauptet, den Unfall genau gesehen zu haben.'],
      explanationRu: 'Повторение (единица 16): подлежащее совпадает, действие произошло раньше → Infinitiv Perfekt: gesehen zu haben.',
    },
    {
      type: 'choice',
      prompt: 'Die Umfrage wurde nur in einer einzigen Stadt durchgeführt. ___ lassen sich die Ergebnisse nicht ohne Weiteres verallgemeinern.',
      options: ['Dennoch', 'Folglich', 'Im Gegensatz dazu', 'Zudem'],
      answer: 1,
      explanationRu: 'Тема этой единицы: из первого предложения логически вытекает вывод → folglich. Dennoch означал бы противоречие, zudem — просто ещё один аргумент.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное определительное причастным определением.',
      prompt: 'Die Zahl der Menschen, die in Armut leben, steigt seit Jahren.',
      answers: ['Die Zahl der in Armut lebenden Menschen steigt seit Jahren.'],
      explanationRu: 'Повторение (единица 3): активное одновременное действие → Partizip I (lebend). Genitiv мн. ч. → -en. Зависимые слова (in Armut) стоят между артиклем и причастием.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите условное предложение без wenn.',
      prompt: 'Wenn Sie weitere Fragen haben, wenden Sie sich bitte an unser Team.',
      answers: [
        'Haben Sie weitere Fragen, wenden Sie sich bitte an unser Team.',
        'Sollten Sie weitere Fragen haben, wenden Sie sich bitte an unser Team.',
        'Haben Sie weitere Fragen, dann wenden Sie sich bitte an unser Team.',
        'Sollten Sie weitere Fragen haben, dann wenden Sie sich bitte an unser Team.',
      ],
      explanationRu: 'Повторение (единица 10): без wenn спрягаемый глагол встаёт на первое место (Haben Sie …). В деловых письмах часто используют Sollten Sie … haben.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное предложной группой с wegen или aufgrund (номинализация).',
      prompt: 'Weil die Preise stark gestiegen sind, kaufen viele Menschen weniger Bio-Produkte.',
      answers: [
        'Wegen des starken Anstiegs der Preise kaufen viele Menschen weniger Bio-Produkte.',
        'Aufgrund des starken Anstiegs der Preise kaufen viele Menschen weniger Bio-Produkte.',
        'Wegen des starken Preisanstiegs kaufen viele Menschen weniger Bio-Produkte.',
        'Aufgrund des starken Preisanstiegs kaufen viele Menschen weniger Bio-Produkte.',
        'Wegen der stark gestiegenen Preise kaufen viele Menschen weniger Bio-Produkte.',
        'Aufgrund der stark gestiegenen Preise kaufen viele Menschen weniger Bio-Produkte.',
      ],
      explanationRu: 'Повторение (единица 9): глагол steigen → существительное der Anstieg; наречие stark → прилагательное starken. wegen/aufgrund + Genitiv: des starken Anstiegs der Preise.',
    },
    {
      type: 'order',
      words: ['Es', 'wurde', 'uns', 'leider', 'kein', 'Ersatzzimmer', 'angeboten.'],
      translationRu: 'Нам, к сожалению, не предложили другой номер.',
      explanationRu: 'Повторение (единица 19): es — заполнитель первого места в пассиве; местоимение uns стоит в самом начале средней части, перед подлежащим kein Ersatzzimmer.',
    },
  ],
  reading: [
    {
      title: 'Streiten will gelernt sein',
      textType: 'Zeitungsartikel mit Lücken',
      texts: [
        {
          body: `Es ist Dienstagnachmittag, und im Musikraum des Humboldt-Gymnasiums in Kassel geht es laut zu. Zwei Teams zu je drei Schülerinnen und Schülern stehen sich gegenüber, das Thema lautet: „Soll das Wahlalter auf 16 Jahre gesenkt werden?“ [1] Welche Seite sie vertreten müssen, erfahren sie nämlich erst eine Viertelstunde vor Beginn – per Los.

„Genau das ist der Reiz“, sagt die Deutschlehrerin Anja Petersen, die den Debattierclub vor sechs Jahren gegründet hat. „Wer eine Position verteidigen muss, die er eigentlich ablehnt, beginnt, die Gegenseite ernst zu nehmen.“ [2] Petersen hat beobachtet, dass ihre Schülerinnen und Schüler im Unterricht seitdem aufmerksamer zuhören und seltener mit Pauschalurteilen argumentieren.

Die Regeln sind streng. Jede Rednerin und jeder Redner hat genau vier Minuten Zeit, eine Jury bewertet Sachkenntnis, Ausdrucksvermögen, Gesprächsfähigkeit und Überzeugungskraft. Wer den Gegner persönlich angreift, bekommt Punktabzug. [3] „Am Anfang hatte ich richtig Angst, vor anderen zu sprechen“, erzählt die 16-jährige Mira. „Heute melde ich mich sogar in Mathe, wenn ich etwas nicht verstanden habe.“

Bildungsforscher sehen in solchen Angeboten großes Potenzial. Eine Untersuchung der Universität Göttingen kam zu dem Ergebnis, dass Jugendliche, die regelmäßig debattieren, komplexe Texte besser verstehen und eigene Standpunkte klarer begründen können. [4] Sie verweisen darauf, dass vor allem Kinder aus Akademikerfamilien an den Clubs teilnehmen – also gerade diejenigen, die ohnehin schon gut reden können.

Petersen kennt diesen Einwand. Deshalb hat sie das Debattieren an ihrer Schule in den regulären Deutschunterricht der achten und zehnten Klassen eingebaut. [5] Die Ergebnisse sind ermutigend: Auch Jugendliche, die sich sonst kaum beteiligen, haben in den Debatten plötzlich etwas zu sagen.

Natürlich gibt es auch Kritik am Konzept. Manche Eltern befürchten, ihre Kinder lernten vor allem, mit geschickten Tricks zu gewinnen, statt nach der Wahrheit zu suchen. Petersen widerspricht: [6] „Gerade weil man jedes Argument der Gegenseite vorhersehen muss, merkt man schnell, wo die eigene Position Schwächen hat.“ Und manchmal, sagt sie lächelnd, ändere am Ende einer Debatte sogar jemand seine Meinung. Das sei für sie der größte Erfolg.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz a–h passt in welche Lücke 1–6? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение a–h подходит к какому пропуску 1–6? Два предложения лишние.',
          options: [
            'Allerdings warnen andere Fachleute davor, diese Ergebnisse zu überschätzen.',
            'Viele Lehrkräfte halten Debatten im Unterricht deshalb für Zeitverschwendung.',
            'Wer dafür und wer dagegen spricht, haben sich die Jugendlichen allerdings nicht selbst ausgesucht.',
            'Ihrer Erfahrung nach fördert das Debattieren deshalb nicht nur das Reden, sondern vor allem das Zuhören.',
            'Damit nimmt jedes Kind mindestens einmal im Jahr an einer Debatte teil.',
            'Für viele Teilnehmende ist jedoch nicht der Sieg das Wichtigste, sondern das wachsende Selbstvertrauen.',
            'Die Teilnahme an überregionalen Wettbewerben kostet die Schule allerdings viel Geld.',
            'Beim Debattieren gehe es nicht um Tricks, sondern um gründliche Vorbereitung.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 2,
              explanationRu: 'Следующее предложение объясняет (nämlich), почему подростки не выбрали сторону сами: сторону определяют по жребию.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 3,
              explanationRu: 'deshalb отсылает к цитате (начинают принимать всерьёз другую сторону), а «Zuhören» подхватывается дальше: Schüler hören aufmerksamer zu.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 5,
              explanationRu: 'Переход от правил к личному опыту: «Selbstvertrauen» подготавливает рассказ Миры о том, как она перестала бояться говорить.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 0,
              explanationRu: 'После положительного результата исследования следует ограничение (Allerdings … andere Fachleute), а местоимение «Sie verweisen darauf» отсылает к этим специалистам. Далее: Petersen kennt diesen Einwand.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 4,
              explanationRu: 'Damit отсылает к тому, что дебаты включены в обычные уроки: так в них участвует каждый ребёнок, а не только дети академиков.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 7,
              explanationRu: 'После «Petersen widerspricht:» идёт её позиция в косвенной речи (Konjunktiv I gehe), продолжение цитаты подтверждает: важна подготовка, а не трюки.',
            },
          ],
        },
      ],
    },
    {
      title: 'Zwei Sprachen, ein Kinderzimmer',
      textType: 'Zeitungsartikel',
      texts: [
        {
          heading: 'Zwei Sprachen, ein Kinderzimmer',
          body: `Wenn Elena Kowalski mit ihrer vierjährigen Tochter spricht, tut sie das auf Polnisch. Ihr Mann redet mit dem Kind Deutsch, in der Kita wird ebenfalls Deutsch gesprochen. „Am Anfang hatten wir große Sorge, dass Zofia durcheinanderkommt“, erzählt die Ärztin aus Bremen. Als ihre Tochter mit drei Jahren noch deutlich weniger Wörter sprach als die anderen Kinder in der Gruppe, riet ihnen eine Erzieherin sogar, zu Hause nur noch Deutsch zu sprechen.

Solche Ratschläge hören mehrsprachige Familien häufig – und sie sind nach heutigem Forschungsstand meist falsch. „Dass zweisprachige Kinder in einer einzelnen Sprache zunächst einen kleineren Wortschatz haben, ist völlig normal“, erklärt die Sprachwissenschaftlerin Ingrid Haas von der Universität Hamburg. „Zählt man aber die Wörter in beiden Sprachen zusammen, liegen sie meist gleichauf mit einsprachigen Kindern.“ Auch das Mischen der Sprachen, etwa „Mama, ich will den Ball, ten czerwony!“, sei kein Zeichen von Verwirrung. Im Gegenteil: Die Kinder nutzten gezielt alle Mittel, die ihnen zur Verfügung stünden.

Besonders problematisch findet Haas den Rat, die Familiensprache aufzugeben. Eltern sollten mit ihren Kindern in der Sprache sprechen, in der sie sich selbst am wohlsten fühlen. „Wer mit seinem Kind in einer Sprache redet, die er nur unvollkommen beherrscht, bietet ihm ein ärmeres sprachliches Vorbild“, so Haas. Zudem gehe dem Kind ein Teil seiner Familiengeschichte verloren: Viele Erwachsene bedauerten später, dass sie sich mit ihren Großeltern kaum verständigen könnten.

Dennoch ist Mehrsprachigkeit kein Selbstläufer. Damit ein Kind eine Sprache wirklich lernt, braucht es ausreichend Kontakt zu ihr – Fachleute nennen als grobe Orientierung etwa ein Drittel der Zeit, die das Kind wach ist. Ist die Familiensprache nur beim Abendessen zu hören, wird das Kind sie zwar verstehen, aber kaum aktiv sprechen. Haas empfiehlt deshalb, gezielt Gelegenheiten zu schaffen: Bücher und Hörspiele in der Familiensprache, Spielgruppen mit anderen Familien, Ferien bei Verwandten.

Auch das Bildungssystem sieht die Expertin in der Pflicht. Während Englisch oder Französisch als wertvolle Fremdsprachen gelten, werden Sprachen wie Türkisch, Arabisch oder Polnisch oft eher als Problem wahrgenommen. „Dabei verschenken wir ein enormes Potenzial“, kritisiert Haas. In einigen Bundesländern können Schülerinnen und Schüler ihre Herkunftssprache inzwischen als Prüfungsfach wählen, flächendeckend ist das Angebot jedoch bei Weitem nicht.

Elena Kowalski hat sich gegen den Rat der Erzieherin entschieden. Heute, ein Jahr später, spricht Zofia beide Sprachen fließend – und korrigiert ihren Vater, wenn er versucht, ein polnisches Wort auszusprechen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was riet eine Erzieherin der Familie Kowalski?',
              options: [
                'Mit dem Kind nur noch Polnisch zu sprechen.',
                'Zu Hause auf die polnische Sprache zu verzichten.',
                'Das Kind von einer Sprachtherapeutin untersuchen zu lassen.',
              ],
              answer: 1,
              explanationRu: 'Воспитательница посоветовала «zu Hause nur noch Deutsch zu sprechen», т. е. отказаться от польского дома.',
            },
            {
              kind: 'mc',
              question: 'Was sagt Ingrid Haas über den Wortschatz zweisprachiger Kinder?',
              options: [
                'Er ist insgesamt deutlich kleiner als bei einsprachigen Kindern.',
                'In jeder einzelnen Sprache ist er genauso groß wie bei einsprachigen Kindern.',
                'In beiden Sprachen zusammen ist er meist ähnlich groß wie bei einsprachigen Kindern.',
              ],
              answer: 2,
              explanationRu: '«Zählt man aber die Wörter in beiden Sprachen zusammen, liegen sie meist gleichauf» — в сумме словарь сопоставим. В отдельном языке он сначала меньше, поэтому b неверно.',
            },
            {
              kind: 'mc',
              question: 'Wie bewertet Haas das Mischen der Sprachen?',
              options: [
                'Als geschickte Nutzung aller sprachlichen Möglichkeiten.',
                'Als Hinweis darauf, dass das Kind überfordert ist.',
                'Als Phase, die Eltern möglichst schnell beenden sollten.',
              ],
              answer: 0,
              explanationRu: 'Смешение — «kein Zeichen von Verwirrung», дети «nutzten gezielt alle Mittel, die ihnen zur Verfügung stünden».',
            },
            {
              kind: 'mc',
              question: 'Warum sollen Eltern laut Haas in ihrer eigenen Sprache mit dem Kind sprechen?',
              options: [
                'Weil das Kind sonst ein schwächeres sprachliches Vorbild bekommt.',
                'Weil die Kitas das von den Eltern verlangen.',
                'Weil die Großeltern sonst gekränkt sind.',
              ],
              answer: 0,
              explanationRu: '«…bietet ihm ein ärmeres sprachliches Vorbild». Бабушки и дедушки упомянуты, но в связи с тем, что с ними трудно общаться, а не с обидой.',
            },
            {
              kind: 'mc',
              question: 'Was ist nach dem Text nötig, damit ein Kind eine Sprache auch aktiv spricht?',
              options: [
                'Dass die Sprache regelmäßig beim Abendessen gesprochen wird.',
                'Dass die Sprache früh in der Schule unterrichtet wird.',
                'Dass das Kind im Alltag genügend Kontakt mit der Sprache hat.',
              ],
              answer: 2,
              explanationRu: 'Нужен «ausreichend Kontakt» — примерно треть времени бодрствования. Если язык звучит только за ужином, ребёнок будет понимать, но почти не говорить.',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert Haas am Bildungssystem?',
              options: [
                'Dass an Schulen zu viel Englisch und Französisch unterrichtet wird.',
                'Dass manche Herkunftssprachen eher als Problem denn als Gewinn gesehen werden.',
                'Dass man Herkunftssprachen in keinem Bundesland als Prüfungsfach wählen kann.',
              ],
              answer: 1,
              explanationRu: 'Турецкий, арабский, польский «oft eher als Problem wahrgenommen» — так теряется потенциал. Вариант c неверен: в некоторых землях это уже возможно.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Vortrag: Warum wir uns so oft falsch entscheiden',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag aus der Reihe „Wissenschaft am Abend“.',
      text: `Guten Abend, meine Damen und Herren, und herzlich willkommen zu unserer Reihe „Wissenschaft am Abend“. Mein Name ist Martin Seidel, ich bin Psychologe an der Universität Freiburg, und ich möchte heute mit Ihnen über eine unbequeme Wahrheit sprechen: Wir alle treffen jeden Tag Entscheidungen, die wir für vernünftig halten – und die es oft nicht sind.

Lassen Sie mich mit einem Experiment beginnen, das Kollegen von mir vor einigen Jahren durchgeführt haben. Sie baten zwei Gruppen von Versuchspersonen, den Preis einer gebrauchten Waschmaschine zu schätzen. Der ersten Gruppe nannten sie vorher ganz beiläufig die Zahl 900, der zweiten die Zahl 150. Obwohl diese Zahlen mit der Waschmaschine überhaupt nichts zu tun hatten, schätzte die erste Gruppe den Preis im Durchschnitt fast doppelt so hoch. Wir sprechen hier vom sogenannten Ankereffekt: Eine zufällige Zahl setzt sich in unserem Kopf fest und beeinflusst unser Urteil. Händler wissen das übrigens sehr genau. Deshalb steht auf dem Preisschild oft ein durchgestrichener, deutlich höherer Preis.

Ein zweiter Denkfehler ist noch weiter verbreitet. Wir suchen bevorzugt nach Informationen, die bestätigen, was wir ohnehin schon glauben. Wer überzeugt ist, dass Elektroautos schlecht für die Umwelt sind, wird Artikel, die das belegen, aufmerksam lesen – und alle anderen schnell wieder vergessen. Soziale Netzwerke verstärken diesen Effekt, weil ihre Algorithmen uns vor allem Inhalte zeigen, die uns gefallen. Infolgedessen entsteht leicht der Eindruck, die ganze Welt denke wie wir.

Der dritte Punkt betrifft unseren Umgang mit Verlusten. Zahlreiche Studien zeigen: Ein Verlust von 100 Euro schmerzt uns ungefähr doppelt so stark, wie uns ein Gewinn von 100 Euro freut. Das erklärt zum Beispiel, warum viele Menschen an Aktien festhalten, die seit Jahren an Wert verlieren. Sie zu verkaufen, würde bedeuten, den Verlust endgültig zu akzeptieren.

Nun fragen Sie sich vielleicht: Kann man sich gegen solche Denkfehler schützen? Die ehrliche Antwort lautet: nur teilweise. Selbst Fachleute, die diese Effekte genau kennen, sind nicht davor sicher. Dennoch gibt es Strategien, die helfen. Bei wichtigen Entscheidungen sollten Sie ganz bewusst nach Argumenten suchen, die gegen Ihre Meinung sprechen. Hilfreich ist es auch, eine Nacht darüber zu schlafen, statt unter Zeitdruck zu entscheiden. Und schließlich: Fragen Sie jemanden um Rat, der von der Entscheidung nicht selbst betroffen ist. Außenstehende lassen sich weniger von Gefühlen leiten.

Zum Schluss möchte ich betonen: Diese Denkfehler sind kein Zeichen von Dummheit. Sie haben sich im Laufe der Evolution entwickelt, weil schnelle Entscheidungen für unsere Vorfahren oft überlebenswichtig waren. In der modernen Welt mit ihrer Flut an Informationen führen sie uns allerdings manchmal in die Irre. Nach einer kurzen Pause freue ich mich auf Ihre Fragen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören einen Vortrag. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы услышите доклад дважды. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Worum geht es in dem Vortrag?',
              options: [
                'Um Entscheidungen, die weniger vernünftig sind, als wir glauben.',
                'Um Methoden, mit denen man schneller entscheiden kann.',
                'Um die Geschichte der Psychologie als Wissenschaft.',
              ],
              answer: 0,
              explanationRu: '«Wir alle treffen jeden Tag Entscheidungen, die wir für vernünftig halten – und die es oft nicht sind.»',
            },
            {
              kind: 'mc',
              question: 'Was zeigte das Experiment mit der Waschmaschine?',
              options: [
                'Die meisten Menschen kennen die Preise gebrauchter Geräte nicht.',
                'Eine zufällig genannte Zahl beeinflusste die Schätzung.',
                'Die zweite Gruppe schätzte den Preis genauer.',
              ],
              answer: 1,
              explanationRu: 'Группа, которой назвали 900, оценила цену почти вдвое выше — это и есть Ankereffekt.',
            },
            {
              kind: 'mc',
              question: 'Warum zeigen Händler oft einen durchgestrichenen Preis?',
              options: [
                'Weil das gesetzlich vorgeschrieben ist.',
                'Um den Ankereffekt für sich zu nutzen.',
                'Weil die Preise im Handel ständig sinken.',
              ],
              answer: 1,
              explanationRu: '«Händler wissen das übrigens sehr genau. Deshalb …» — высокая зачёркнутая цена служит «якорем».',
            },
            {
              kind: 'mc',
              question: 'Was sagt der Redner über soziale Netzwerke?',
              options: [
                'Sie helfen, unterschiedliche Meinungen kennenzulernen.',
                'Sie verbreiten vor allem Falschinformationen über Elektroautos.',
                'Sie zeigen Nutzern bevorzugt Inhalte, die ihnen gefallen.',
              ],
              answer: 2,
              explanationRu: 'Алгоритмы показывают «vor allem Inhalte, die uns gefallen», и усиливают склонность искать подтверждение своему мнению. Электромобили — лишь пример.',
            },
            {
              kind: 'mc',
              question: 'Was gilt laut Studien für Verluste?',
              options: [
                'Sie werden stärker empfunden als gleich große Gewinne.',
                'Sie werden schneller vergessen als Gewinne.',
                'Sie motivieren Menschen, mehr Risiken einzugehen.',
              ],
              answer: 0,
              explanationRu: 'Потеря 100 евро ощущается примерно вдвое сильнее, чем радость от выигрыша 100 евро.',
            },
            {
              kind: 'mc',
              question: 'Warum halten viele Menschen an Aktien fest, die an Wert verlieren?',
              options: [
                'Weil sie auf einen schnellen Gewinn hoffen.',
                'Weil ein Verkauf hohe Gebühren verursacht.',
                'Weil sie den Verlust nicht endgültig hinnehmen wollen.',
              ],
              answer: 2,
              explanationRu: '«Sie zu verkaufen, würde bedeuten, den Verlust endgültig zu akzeptieren.»',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt der Redner bei wichtigen Entscheidungen?',
              options: [
                'Schnell zu entscheiden, um Stress zu vermeiden.',
                'Gezielt nach Argumenten gegen die eigene Meinung zu suchen.',
                'Nur Fachleute um Rat zu fragen.',
              ],
              answer: 1,
              explanationRu: 'Он советует искать контраргументы, «eine Nacht darüber schlafen» и спросить постороннего человека, а не обязательно эксперта (даже эксперты подвержены этим ошибкам).',
            },
            {
              kind: 'mc',
              question: 'Wie erklärt der Redner die Entstehung dieser Denkfehler?',
              options: [
                'Durch mangelnde Bildung.',
                'Durch die heutige Flut an Informationen.',
                'Durch ihren Nutzen für das Überleben in der Evolution.',
              ],
              answer: 2,
              explanationRu: 'Ошибки возникли в ходе эволюции, «weil schnelle Entscheidungen … oft überlebenswichtig waren». Поток информации лишь сегодня вводит нас в заблуждение, но не объясняет их происхождение.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Wählen ab 16?',
      kind: 'discussion',
      speakers: {
        A: 'Moderator Felix Brandt',
        B: 'Jana Weber, Schülersprecherin',
        C: 'Prof. Klaus Reimann, Politikwissenschaftler',
      },
      situation: 'Sie hören eine Radiodiskussion zum Thema „Wahlalter“.',
      text: `A: Guten Abend und willkommen zur „Streitfrage“. Heute geht es um das Wahlalter: Sollen schon 16-Jährige den Bundestag wählen dürfen? Bei mir sind Jana Weber, Schülersprecherin aus Dresden, und Professor Klaus Reimann, Politikwissenschaftler an der Universität Mainz. Frau Weber, warum sollten Jugendliche wählen dürfen?
B: Weil die Entscheidungen, die heute getroffen werden, vor allem uns betreffen. Ob es um das Klima geht, um die Rente oder um die Schulden des Staates – wir müssen am längsten mit den Folgen leben. Trotzdem haben wir kein Mitspracherecht. Das finde ich, ehrlich gesagt, nicht fair.
A: Herr Reimann, ist das nicht ein starkes Argument?
C: Es klingt zunächst überzeugend. Aber mit derselben Logik könnte man fragen, warum nicht auch Zwölfjährige wählen dürfen. Irgendwo muss man eine Grenze ziehen, und 18 ist das Alter, in dem man auch sonst volle Verantwortung trägt: Man darf Verträge abschließen, heiraten, Auto fahren.
B: Mit 16 darf ich aber arbeiten und Steuern zahlen. Warum darf ich dann nicht mitbestimmen, was mit diesem Geld passiert?
C: Das ist ein berechtigter Einwand, das gebe ich zu. Meine eigentliche Sorge ist aber eine andere: Viele 16-Jährige wissen schlicht zu wenig über Politik. Studien zeigen, dass das politische Wissen in dieser Altersgruppe im Durchschnitt geringer ist als bei Älteren.
A: Wobei man sagen muss, dass auch viele Erwachsene nicht besonders gut informiert sind. Und von denen verlangt niemand einen Test, bevor sie wählen dürfen.
C: Das stimmt natürlich. Ich will auch niemandem das Wahlrecht absprechen. Ich bezweifle nur, dass eine Absenkung die Wahlbeteiligung junger Menschen erhöht, wie oft behauptet wird.
B: Da habe ich andere Erfahrungen gemacht. In Bundesländern, in denen man schon mit 16 bei Kommunalwahlen wählen darf, wird in den Schulen viel mehr über Politik gesprochen. Wenn man weiß, dass man selbst bald wählt, beschäftigt man sich ganz anders mit den Themen.
C: Und genau hier liegt aus meiner Sicht der entscheidende Punkt: Wenn wir das Wahlalter senken, dann nur zusammen mit deutlich mehr politischer Bildung in den Schulen. Sonst bleibt es ein symbolischer Schritt.
A: Das klingt ja beinahe nach einer Annäherung. Frau Weber, könnten Sie damit leben?
B: Absolut. Mehr Politikunterricht fordern wir als Schülervertretung schon lange. Leider ist das oft das erste Fach, das ausfällt, wenn Lehrkräfte fehlen.
A: Frau Weber, Herr Reimann, vielen Dank für die spannende Diskussion.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы услышите дискуссию один раз. Кто что говорит? Соотнесите высказывания.',
          options: ['Moderator Felix Brandt', 'Jana Weber', 'Prof. Klaus Reimann'],
          items: [
            {
              kind: 'match',
              prompt: '1. Junge Menschen müssen die Konsequenzen heutiger Politik am längsten tragen.',
              answer: 1,
              explanationRu: 'Weber: «wir müssen am längsten mit den Folgen leben».',
            },
            {
              kind: 'match',
              prompt: '2. Eine feste Altersgrenze ist notwendig, auch wenn jede Grenze etwas willkürlich wirkt.',
              answer: 2,
              explanationRu: 'Reimann: «Irgendwo muss man eine Grenze ziehen» — 18 лет как возраст полной ответственности.',
            },
            {
              kind: 'match',
              prompt: '3. Von erwachsenen Wählern wird auch kein Nachweis politischen Wissens verlangt.',
              answer: 0,
              explanationRu: 'Модератор: «von denen verlangt niemand einen Test, bevor sie wählen dürfen».',
            },
            {
              kind: 'match',
              prompt: '4. Ob mehr junge Menschen zur Wahl gehen würden, ist fraglich.',
              answer: 2,
              explanationRu: 'Reimann: «Ich bezweifle nur, dass eine Absenkung die Wahlbeteiligung junger Menschen erhöht».',
            },
            {
              kind: 'match',
              prompt: '5. Die Aussicht, bald selbst wählen zu dürfen, weckt das Interesse an politischen Themen.',
              answer: 1,
              explanationRu: 'Weber: «Wenn man weiß, dass man selbst bald wählt, beschäftigt man sich ganz anders mit den Themen.»',
            },
            {
              kind: 'match',
              prompt: '6. Politischer Unterricht wird bei Personalmangel häufig gestrichen.',
              answer: 1,
              explanationRu: 'Weber: «Leider ist das oft das erste Fach, das ausfällt, wenn Lehrkräfte fehlen.» Ловушка: Reimann требует больше политического образования, но о выпадении уроков говорит Weber.',
            },
          ],
        },
      ],
    },
  ],
};
