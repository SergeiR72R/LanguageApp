import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    // ---------- choice ----------
    {
      type: 'choice',
      prompt: 'Der Sprachkurs besteht ___ vier Modulen, die aufeinander aufbauen.',
      options: ['auf', 'aus', 'in', 'von'],
      answer: 1,
      explanationRu:
        '«bestehen aus» + Dat. — «состоять из». Ср.: «bestehen auf» — настаивать на, «bestehen in» — заключаться в.',
    },
    {
      type: 'choice',
      prompt: 'Die eigentliche Schwierigkeit besteht ___, die Balance zwischen Herkunftssprache und Landessprache zu finden.',
      options: ['darauf', 'daraus', 'darin', 'davon'],
      answer: 2,
      explanationRu:
        '«bestehen in» + Dat. = «заключаться в» → коррелят «darin», который отсылает к инфинитивному обороту. «darauf» означало бы «настаивать на том, чтобы…».',
    },
    {
      type: 'choice',
      prompt: 'Viele Kinder aus Einwandererfamilien sind zu Recht stolz ___ ihre Zweisprachigkeit.',
      options: ['auf', 'mit', 'über', 'an'],
      answer: 0,
      explanationRu:
        '«stolz auf» + Akk. Типичная ошибка — калька с русского «гордиться чем» (творительный падеж) → «stolz mit» ✗.',
    },
    {
      type: 'choice',
      prompt: '– Denkst du noch oft an deine Großmutter in Kasachstan? – Ja, ich denke fast jeden Tag ___.',
      options: ['daran', 'an sie', 'an ihr', 'woran'],
      answer: 1,
      explanationRu:
        'Местоименные наречия (da-/wo- + предлог) заменяют только предметы и абстракции. Для людей используется предлог + личное местоимение: «an sie» (denken an + Akk.).',
    },
    {
      type: 'choice',
      prompt: 'Die Linguistin ist sich ___ bewusst, dass ihre These in der Fachwelt umstritten ist.',
      options: ['darüber', 'davon', 'es', 'dessen'],
      answer: 3,
      explanationRu:
        '«sich (Dat.) einer Sache bewusst sein» управляет генитивом, поэтому коррелят — указательное местоимение в генитиве «dessen», а не da-слово.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt?',
      options: [
        'Ich nehme seit Jahren in einem Sprachtandem teil.',
        'Er ist mit der Kultur seines Gastlandes bestens vertraut.',
        'Sie interessiert sich sehr an der Geschichte ihrer Familie.',
        'Wir haben lange über unsere Herkunft gedacht.',
      ],
      answer: 1,
      explanationRu:
        '«vertraut mit» + Dat. — верно. Ошибки-кальки: «teilnehmen an» (не «in»), «sich interessieren für» (но «das Interesse an»), «nachdenken über» или «denken an» (не «denken über» в значении «думать о»).',
    },
    // ---------- gap ----------
    {
      type: 'gap',
      prompt: 'Viele Menschen mit Migrationsgeschichte neigen ___, ihre Muttersprache im Berufsleben zu verbergen.',
      answers: ['dazu'],
      explanationRu: '«neigen zu» + Dat. — «быть склонным к» → коррелят «dazu» перед инфинитивным оборотом.',
    },
    {
      type: 'gap',
      prompt: 'Die Integrationsbeauftragte appellierte ___ die Schulen, Herkunftssprachen stärker zu fördern.',
      answers: ['an'],
      explanationRu: '«appellieren an» + Akk. — «призывать кого-либо». Падеж виден по артиклю «die Schulen» (Akk. мн. ч.).',
    },
    {
      type: 'gap',
      prompt: 'Anfangs fiel es mir schwer, mich ___ zu gewöhnen, dass sich hier alle duzen.',
      answers: ['daran'],
      explanationRu:
        '«sich gewöhnen an» + Akk. — «привыкать к» → коррелят «daran», отсылающий к придаточному с «dass». Обратите внимание: «es» в начале — коррелят к инфинитивному обороту «mich … zu gewöhnen».',
    },
    {
      type: 'gap',
      prompt: '– Wovor hast du eigentlich Angst? – Ich habe Angst ___, meine Muttersprache allmählich zu vergessen.',
      answers: ['davor'],
      explanationRu:
        '«Angst haben vor» + Dat. → вопрос «wovor?», коррелят «davor». Не калькируйте русское «бояться чего» без предлога.',
    },
    {
      type: 'gap',
      prompt: 'In der Debatte wird oft vergessen, ___ es eigentlich ankommt – nämlich auf gegenseitigen Respekt.',
      answers: ['worauf'],
      hintRu: 'вопросительное местоименное наречие',
      explanationRu:
        '«es kommt auf etwas an» — «дело в чём-то, важно что-то». В косвенном вопросе используется вопросительное местоименное наречие «worauf».',
    },
    {
      type: 'gap',
      prompt: 'Es kommt vor allem ___ an, wie konsequent die Eltern beide Sprachen im Alltag verwenden.',
      answers: ['darauf'],
      explanationRu:
        '«es kommt darauf an, ob / wie …» — «всё зависит от того, …». Коррелят «darauf» здесь обязателен, приставка «an» стоит в конце главного предложения.',
    },
    {
      type: 'gap',
      prompt: 'Die Förderung von Minderheitensprachen bedarf ___ langfristigen Strategie.',
      answers: ['einer'],
      hintRu: 'какой падеж требует «bedürfen»?',
      explanationRu:
        '«bedürfen» (нуждаться) — один из немногих глаголов с генитивом (книжный стиль): «einer Strategie bedürfen». Ж. р., ед. ч., генитив → «einer».',
    },
    // ---------- order ----------
    {
      type: 'order',
      words: ['Ich', 'kann mich', 'noch genau daran', 'erinnern,', 'wie', 'ich', 'mein erstes deutsches Wort', 'gelernt habe.'],
      translationRu: 'Я до сих пор хорошо помню, как выучил своё первое немецкое слово.',
      explanationRu:
        '«sich erinnern an» → коррелят «daran» стоит в среднем поле главного предложения, затем придаточное с «wie» и глаголом в конце.',
    },
    {
      type: 'order',
      words: ['Das', 'ist', 'ein Thema,', 'mit dem', 'ich mich', 'schon lange', 'auseinandersetze.'],
      translationRu: 'Это тема, которой я занимаюсь уже давно.',
      explanationRu:
        'Повторение: относительное придаточное с предлогом. Предлог из управления глагола («sich auseinandersetzen mit») стоит перед относительным местоимением: «mit dem».',
    },
    {
      type: 'order',
      words: ['Ich', 'halte', 'es', 'für', 'wichtig,', 'die Herkunftssprache', 'zu pflegen.'],
      translationRu: 'Я считаю важным сохранять язык своего происхождения.',
      explanationRu:
        'При «halten für» коррелят «es» замещает инфинитивный оборот, который следует за главным предложением.',
    },
    // ---------- transform ----------
    {
      type: 'transform',
      instructionRu: 'Замените именную группу придаточным с «dass» и коррелятом.',
      prompt: 'Wir freuen uns auf den Besuch unserer Verwandten aus Polen.',
      answers: [
        'Wir freuen uns darauf, dass unsere Verwandten aus Polen uns besuchen.',
        'Wir freuen uns darauf, dass uns unsere Verwandten aus Polen besuchen.',
        'Wir freuen uns darauf, dass unsere Verwandten aus Polen zu Besuch kommen.',
        'Wir freuen uns darauf, dass unsere Verwandten aus Polen kommen.',
      ],
      explanationRu:
        '«sich freuen auf» + Akk. При замене существительного придаточным появляется коррелят «darauf». Генитив «unserer Verwandten» становится подлежащим придаточного.',
    },
    {
      type: 'transform',
      instructionRu: 'Задайте вопрос к предложному дополнению (это предмет, а не человек).',
      prompt: 'Ich warte schon seit Wochen auf die Antwort der Ausländerbehörde.',
      answers: ['Worauf wartest du schon seit Wochen?', 'Worauf wartest du?', 'Worauf warten Sie schon seit Wochen?', 'Worauf warten Sie?'],
      explanationRu:
        'Вопрос к предложному дополнению-предмету: «wo(r)- + предлог» → «worauf» (warten auf). О человеке спросили бы «Auf wen wartest du?».',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное именной группой — коррелят при этом исчезнет.',
      prompt: 'Die Linguistin warnt davor, dass die Dialekte verschwinden.',
      answers: ['Die Linguistin warnt vor dem Verschwinden der Dialekte.'],
      explanationRu:
        '«warnen vor» + Dat. Если дополнение выражено существительным, коррелят «davor» не нужен: «vor dem Verschwinden der Dialekte» (номинализация глагола + генитив).',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью коррелята и инфинитивного оборота с «zu».',
      prompt: 'Er hat sich entschieden. Er spricht mit seinen Kindern nur Russisch.',
      answers: [
        'Er hat sich dafür entschieden, mit seinen Kindern nur Russisch zu sprechen.',
        'Er hat sich dafür entschieden, nur Russisch mit seinen Kindern zu sprechen.',
      ],
      explanationRu:
        '«sich entscheiden für» + Akk. → коррелят «dafür» в главном предложении; при одинаковом подлежащем используется инфинитивный оборот с «zu» в конце.',
    },
  ],

  reading: [
    {
      title: 'Vom Makel zum Markenzeichen?',
      textType: 'Sachtext (Lückentext)',
      texts: [
        {
          body: `Lange Zeit galt der Dialekt in Deutschland als Zeichen mangelnder Bildung. Wer beruflich vorankommen wollte, bemühte sich um ein möglichst neutrales Hochdeutsch und legte die Mundart seiner Kindheit spätestens im Studium ab. [1] Viele Eltern sprachen deshalb mit ihren Kindern bewusst Hochdeutsch, selbst wenn sie untereinander weiterhin Bairisch, Schwäbisch oder Sächsisch redeten.

Die Folgen dieser Entwicklung sind heute deutlich zu hören. In vielen Regionen sprechen vor allem ältere Menschen noch den örtlichen Dialekt, während Jugendliche allenfalls eine regional gefärbte Umgangssprache verwenden. [2] Sprachwissenschaftler beobachten zudem, dass sich kleinräumige Unterschiede abschleifen: An die Stelle zahlreicher Ortsmundarten treten großräumigere Regionalsprachen.

Hinzu kommt die gestiegene Mobilität: Wer für Ausbildung oder Beruf mehrfach umzieht, passt seine Sprechweise der jeweiligen Umgebung an und gibt die Mundart seiner Herkunft an die eigenen Kinder kaum noch weiter. Auch die Medien haben ihren Anteil an dieser Entwicklung, denn in Radio und Fernsehen dominierte über Jahrzehnte eine weitgehend dialektfreie Standardsprache.

Gleichzeitig lässt sich jedoch eine gegenläufige Entwicklung beobachten. [3] Bands singen auf Kölsch oder Bairisch und füllen damit große Hallen, Werbeagenturen setzen gezielt auf mundartliche Slogans, und in manchen Regionen werden Dialektkurse für Zugezogene angeboten. Das Image der Mundart hat sich offenbar gewandelt: Sie steht immer seltener für Rückständigkeit und immer häufiger für Authentizität und Verwurzelung.

Fachleute warnen allerdings davor, diese Renaissance zu überschätzen. [4] Wer im Alltag nur noch einzelne Ausdrücke verwendet, um seine regionale Zugehörigkeit zu signalisieren, beherrscht die Mundart damit noch lange nicht. Mancher Linguist spricht in diesem Zusammenhang spöttisch von „Dialekt als Dekoration“. Ob aus dem neuen Prestige eine echte Weitergabe an die nächste Generation erwächst, ist jedenfalls offen.

Bemerkenswert ist zudem, dass Dialekte keineswegs überall gleich bewertet werden. [5] Während etwa das Bairische oder das Schweizerdeutsche häufig als sympathisch empfunden werden, haben Sprecherinnen und Sprecher anderer Varietäten immer wieder mit Spott zu kämpfen. Studien zeigen, dass Bewerberinnen und Bewerber mit bestimmten Akzenten bei gleicher Qualifikation als weniger kompetent eingeschätzt werden.

Was bedeutet das für die Zukunft? Ein Zurück in die Zeit, in der jedes Dorf seine eigene Mundart pflegte, wird es kaum geben. [6] Sprachforschende betonen, dass Mehrsprachigkeit nicht erst beim Erlernen einer Fremdsprache beginnt: Wer zwischen Dialekt und Standardsprache wechseln kann, verfügt über eine Fähigkeit, auf die er durchaus stolz sein darf.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze bleiben übrig.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Die Mundart galt als Hindernis, das man den eigenen Kindern ersparen wollte.',
            'Ein vollständiges Gespräch im Dialekt können viele von ihnen weder führen noch verstehen.',
            'Seit einigen Jahren erleben regionale Sprachformen eine bemerkenswerte Aufwertung.',
            'Denn häufig beschränkt sich das neue Interesse auf symbolische Versatzstücke.',
            'Ihr Ansehen hängt stark davon ab, welche Region man mit ihnen verbindet.',
            'Wohl aber könnte die Fähigkeit, sich in mehreren Sprachformen zu bewegen, wieder stärker geschätzt werden.',
            'Aus diesem Grund ist das Hochdeutsche inzwischen an vielen Schulen zurückgedrängt worden.',
            'Die Zahl der Dialektsprecher hat sich deshalb in den letzten Jahren verdoppelt.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 0,
              explanationRu:
                'Диалект считался препятствием для карьеры, поэтому («deshalb») родители говорили с детьми на литературном языке — предложение логически связывает обе мысли.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 1,
              explanationRu: '«viele von ihnen» = молодые люди, которые используют лишь регионально окрашенный разговорный язык.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 2,
              explanationRu: '«eine gegenläufige Entwicklung» конкретизируется: диалекты переживают подъём — группы, реклама, курсы.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 3,
              explanationRu:
                '«Denn» обосновывает предостережение специалистов: интерес часто ограничивается отдельными словечками («Dialekt als Dekoration»).',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 4,
              explanationRu: 'Диалекты оцениваются неодинаково: престиж зависит от региона — баварский симпатичен, другие высмеивают.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 5,
              explanationRu:
                '«Wohl aber» противопоставляется предыдущему отрицанию («wird es kaum geben»); далее речь о ценности умения переключаться между вариантами языка.',
            },
          ],
        },
      ],
    },
    {
      title: 'Sprachpflege oder Sprachpanik?',
      textType: 'Fachkommentar',
      texts: [
        {
          body: `Kaum ein Thema erregt die Gemüter so zuverlässig wie der Einfluss des Englischen auf das Deutsche. Leserbriefe beklagen das „Denglisch“ in der Werbung, Sprachvereine verleihen Negativpreise für besonders überflüssige Anglizismen, und regelmäßig wird die Forderung laut, die deutsche Sprache gesetzlich zu schützen. Hinter all dem steht die Befürchtung, das Deutsche könne in absehbarer Zeit zu einer Mischsprache verkommen oder gar ganz verdrängt werden. Als Sprachwissenschaftlerin halte ich diese Sorge für unbegründet – wenn auch nicht für völlig unverständlich.

Zunächst einige Fakten. Untersuchungen großer Textsammlungen zeigen, dass Anglizismen nur einen geringen Anteil am Wortschatz ausmachen, auch wenn ihre Zahl in den vergangenen Jahrzehnten gestiegen ist. Noch entscheidender ist, dass die Grammatik praktisch unberührt bleibt. Ob wir sagen, wir hätten eine Datei „gedownloadet“ oder „heruntergeladen“: In beiden Fällen bildet das Deutsche das Partizip nach seinen eigenen Regeln. Fremde Wörter werden also nicht einfach übernommen, sondern angepasst und eingegliedert.

Zudem lohnt ein Blick in die Geschichte. Das Deutsche hat im Laufe der Jahrhunderte Tausende Wörter aus dem Lateinischen, dem Französischen und anderen Sprachen aufgenommen. Wörter wie „Fenster“, „Mauer“ oder „Onkel“ empfindet heute niemand mehr als fremd. Auch damals gab es Puristen, die vor dem Untergang der Muttersprache warnten, und auch damals hat sich die Sprache als erstaunlich widerstandsfähig erwiesen.

Das bedeutet freilich nicht, dass jede Entlehnung sinnvoll wäre. Wenn eine Behörde ihre Bürger zum „Service Point“ schickt oder ein Unternehmen von einer „Learning Journey“ spricht, wo es schlicht um eine Fortbildung geht, dann hat das wenig mit sprachlicher Notwendigkeit und viel mit Imagepflege zu tun. Problematisch finde ich solche Fälle allerdings weniger wegen der Sprache als wegen der Ausgrenzung: Wer kein Englisch spricht – und das betrifft vor allem ältere Menschen –, wird von wichtigen Informationen abgeschnitten. Hier ist Kritik berechtigt, und hier sind vor allem öffentliche Einrichtungen in der Pflicht, verständlich zu kommunizieren.

Ein gesetzlicher Schutz der Sprache, wie ihn einige fordern, wäre dagegen wenig hilfreich. Sprache lässt sich nicht verordnen; sie wird von ihren Sprecherinnen und Sprechern gemacht. Wörter, die niemand braucht, verschwinden in der Regel von selbst wieder, während sich jene, die eine Lücke füllen, durchsetzen – ganz gleich, woher sie stammen.

Vielleicht verrät die Aufregung um Anglizismen ohnehin mehr über unser Selbstverständnis als über den Zustand der Sprache. Wer sich um das Deutsche sorgt, sorgt sich häufig um etwas Größeres: um Zugehörigkeit, um die eigene Rolle in einer globalisierten Welt. Diese Sorgen verdienen es, ernst genommen zu werden. An der Sprache allein lassen sie sich jedoch nicht festmachen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Kommentar. Sind die Aussagen im Sinne der Autorin richtig oder falsch?',
          instructionRu: 'Прочитайте комментарий. Верны ли утверждения с точки зрения автора?',
          items: [
            {
              kind: 'tf',
              statement: 'Die Autorin kann nachvollziehen, warum sich manche Menschen um die deutsche Sprache sorgen.',
              answer: true,
              explanationRu: 'Она считает опасения необоснованными, «wenn auch nicht für völlig unverständlich» — то есть понятными.',
            },
            {
              kind: 'tf',
              statement: 'Anglizismen machen inzwischen einen großen Teil des deutschen Wortschatzes aus.',
              answer: false,
              explanationRu: 'Исследования показывают, что англицизмы составляют «nur einen geringen Anteil am Wortschatz».',
            },
            {
              kind: 'tf',
              statement: 'Durch englische Wörter verändert sich die deutsche Grammatik grundlegend.',
              answer: false,
              explanationRu: '«die Grammatik [bleibt] praktisch unberührt»: заимствования адаптируются по немецким правилам («gedownloadet»).',
            },
            {
              kind: 'tf',
              statement: 'Schon in früheren Jahrhunderten wurde vor dem Niedergang der deutschen Sprache gewarnt.',
              answer: true,
              explanationRu: '«Auch damals gab es Puristen, die vor dem Untergang der Muttersprache warnten».',
            },
            {
              kind: 'tf',
              statement: 'Die Autorin hält sämtliche Entlehnungen aus dem Englischen für unproblematisch.',
              answer: false,
              explanationRu: '«Das bedeutet freilich nicht, dass jede Entlehnung sinnvoll wäre» — примеры «Service Point», «Learning Journey».',
            },
            {
              kind: 'tf',
              statement: 'Unverständliche Anglizismen bei Behörden kritisiert sie vor allem, weil sie Menschen ausschließen.',
              answer: true,
              explanationRu: 'Проблема «weniger wegen der Sprache als wegen der Ausgrenzung»: люди без английского отрезаны от информации.',
            },
            {
              kind: 'tf',
              statement: 'Ein Sprachgesetz könnte überflüssige Anglizismen nach Ansicht der Autorin wirksam eindämmen.',
              answer: false,
              explanationRu: 'Законодательная защита «wäre dagegen wenig hilfreich», потому что «Sprache lässt sich nicht verordnen».',
            },
          ],
        },
      ],
    },
  ],

  listening: [
    {
      title: 'Vorlesung: Was wird aus der Familiensprache?',
      kind: 'monolog',
      situation: 'Sie hören einen Ausschnitt aus einer Vorlesung zur Mehrsprachigkeitsforschung.',
      text: `Liebe Studierende, in der letzten Sitzung haben wir uns mit dem Erwerb einer zweiten Sprache beschäftigt. Heute drehen wir die Perspektive gewissermaßen um und fragen: Was geschieht eigentlich mit der ersten Sprache, wenn man in einem Land lebt, in dem sie kaum gesprochen wird?

Beginnen wir mit einem Begriff, der sich in der Forschung inzwischen etabliert hat: den sogenannten Herkunftssprecherinnen und Herkunftssprechern. Gemeint sind Menschen, die in der Familie mit einer Sprache aufgewachsen sind, die sich von der Umgebungssprache unterscheidet – etwa Kinder russischsprachiger Eltern in Deutschland. Typischerweise verläuft ihre Entwicklung so: Bis zum Kindergartenalter dominiert die Familiensprache, spätestens mit dem Schuleintritt übernimmt jedoch das Deutsche die Führung. Die Familiensprache wird zunehmend auf bestimmte Lebensbereiche beschränkt – auf Gespräche mit den Großeltern, auf das Essen, auf Gefühle.

Das hat Folgen, die sich sprachwissenschaftlich recht genau beschreiben lassen. Herkunftssprecher verstehen ihre Familiensprache in der Regel ausgezeichnet und sprechen sie oft akzentfrei. Lücken zeigen sich dagegen beim Schreiben, im formellen Register und bei komplexen grammatischen Strukturen. Im Russischen etwa wird das Kasussystem häufig vereinfacht: Bestimmte Endungen werden verallgemeinert, andere gehen verloren. Das ist kein Zeichen mangelnder Begabung, wie Eltern manchmal befürchten, sondern eine völlig erwartbare Folge eingeschränkten Inputs.

Davon zu unterscheiden ist das, was wir als Sprachattrition bezeichnen, also das allmähliche Verlernen einer Sprache, die man bereits vollständig beherrscht hat. Hier spielt das Alter bei der Auswanderung eine entscheidende Rolle. Wer als Erwachsener emigriert, verliert seine Muttersprache kaum je vollständig. Typisch sind Wortfindungsprobleme – man sucht nach einem Begriff, der einem früher mühelos eingefallen wäre – sowie ein gewisser Einfluss der neuen Sprache auf Satzbau und Ausdrucksweise. Bei Kindern, die vor etwa dem zehnten Lebensjahr auswandern, kann der Verlust dagegen sehr weitreichend sein, bis hin zu dem Punkt, an dem sie die Sprache ihrer Kindheit kaum noch verstehen.

Aus der Migrationsforschung kennen wir außerdem ein Muster, das sich in vielen Einwanderungsgesellschaften wiederholt: Die erste Generation spricht vorwiegend die Herkunftssprache, die zweite ist zweisprachig, die dritte häufig nur noch einsprachig in der Sprache des neuen Landes. Unausweichlich ist diese Entwicklung allerdings nicht.

Was kann man also tun, wenn man die Familiensprache erhalten möchte? Die Forschung gibt hier recht klare Hinweise. Entscheidend sind erstens Menge und Vielfalt des Inputs: Es genügt nicht, dass zu Hause gesprochen wird; Kinder brauchen auch Bücher, Filme und Kontakte zu Gleichaltrigen. Zweitens spielt das Ansehen der Sprache eine große Rolle. Kinder geben eine Sprache bereitwilliger auf, wenn sie merken, dass sie in ihrer Umgebung als wertlos oder gar als Makel gilt. Und drittens kann herkunftssprachlicher Unterricht in der Schule viel bewirken, insbesondere was die Schriftsprache betrifft. In der nächsten Woche sehen wir uns genauer an, wie solche Angebote in den verschiedenen Bundesländern organisiert sind.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Vorlesung zweimal. Wählen Sie die richtige Antwort.',
          instructionRu: 'Вы слушаете лекцию дважды. Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Wer gilt als Herkunftssprecherin oder Herkunftssprecher?',
              options: [
                'wer eine Fremdsprache während eines Auslandsaufenthalts gelernt hat',
                'wer in der Familie eine andere Sprache als die Umgebungssprache erworben hat',
                'wer erst als Erwachsener in ein anderes Land ausgewandert ist',
              ],
              answer: 1,
              explanationRu: 'Это люди, выросшие в семье с языком, «die sich von der Umgebungssprache unterscheidet».',
            },
            {
              kind: 'mc',
              question: 'Wie entwickelt sich die Familiensprache typischerweise?',
              options: [
                'Sie bleibt bis ins Erwachsenenalter die dominante Sprache.',
                'Sie wird mit dem Schuleintritt vollständig aufgegeben.',
                'Sie wird ab der Schulzeit auf bestimmte Lebensbereiche zurückgedrängt.',
              ],
              answer: 2,
              explanationRu:
                'Со школы доминирует немецкий, а семейный язык ограничивается отдельными сферами — бабушки и дедушки, еда, чувства.',
            },
            {
              kind: 'mc',
              question: 'Womit haben Herkunftssprecher häufig Schwierigkeiten?',
              options: [
                'mit dem Hörverstehen im Alltag',
                'mit dem Schreiben, dem formellen Register und komplexer Grammatik',
                'mit einer akzentfreien Aussprache',
              ],
              answer: 1,
              explanationRu: 'Понимают они отлично и часто говорят без акцента; пробелы — «beim Schreiben, im formellen Register und bei komplexen grammatischen Strukturen».',
            },
            {
              kind: 'mc',
              question: 'Wie erklärt die Dozentin die Vereinfachung des Kasussystems?',
              options: [
                'als Folge eines eingeschränkten sprachlichen Inputs',
                'als Hinweis auf eine Lernschwäche des Kindes',
                'als Einfluss der Sprache der Großeltern',
              ],
              answer: 0,
              explanationRu: '«kein Zeichen mangelnder Begabung …, sondern eine völlig erwartbare Folge eingeschränkten Inputs».',
            },
            {
              kind: 'mc',
              question: 'Was ist für Menschen typisch, die als Erwachsene auswandern?',
              options: [
                'Sie vergessen ihre Muttersprache meist vollständig.',
                'Ihre Muttersprache bleibt völlig unverändert.',
                'Ihnen fallen manche Wörter nicht mehr so leicht ein.',
              ],
              answer: 2,
              explanationRu: 'Взрослые почти никогда не теряют язык полностью; типичны «Wortfindungsprobleme» и влияние нового языка.',
            },
            {
              kind: 'mc',
              question: 'Wie beurteilt die Dozentin das Muster der drei Generationen?',
              options: [
                'als weit verbreitet, aber nicht zwangsläufig',
                'als unvermeidliche Entwicklung',
                'als inzwischen widerlegt',
              ],
              answer: 0,
              explanationRu: 'Модель повторяется во многих обществах, но «Unausweichlich ist diese Entwicklung allerdings nicht».',
            },
            {
              kind: 'mc',
              question: 'Welche Rolle spielt laut Dozentin das Ansehen einer Sprache?',
              options: [
                'Es ist nur für den Schriftspracherwerb von Bedeutung.',
                'Kinder geben eine Sprache eher auf, wenn sie als minderwertig gilt.',
                'Es spielt im Vergleich zum Unterricht kaum eine Rolle.',
              ],
              answer: 1,
              explanationRu: 'Дети охотнее отказываются от языка, если он в окружении считается «wertlos oder gar als Makel».',
            },
          ],
        },
      ],
    },
    {
      title: 'Diskussion: Nur Deutsch auf dem Schulhof?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin',
        B: 'Herr Albers, Schulleiter',
        C: 'Dr. Selin Arslan, Sprachwissenschaftlerin',
        D: 'Jonas Weber, Schülersprecher',
      },
      situation: 'Sie hören eine Diskussion in der Radiosendung „Schule im Gespräch“.',
      text: `A: Willkommen zu „Schule im Gespräch“. An einer Gesamtschule in Nordrhein-Westfalen gilt seit diesem Schuljahr eine neue Regel: Auch in den Pausen soll ausschließlich Deutsch gesprochen werden. Die Entscheidung hat für erheblichen Wirbel gesorgt. Bei mir sind Herr Albers, der Leiter der Schule, die Sprachwissenschaftlerin Dr. Selin Arslan und Jonas Weber, Schülersprecher eines Gymnasiums. Herr Albers, warum diese Regel?
B: Zunächst einmal möchte ich betonen, dass es uns nicht darum geht, irgendeine Sprache abzuwerten. An unserer Schule werden über dreißig Sprachen gesprochen, und darauf sind wir stolz. Aber wir haben festgestellt, dass sich auf dem Schulhof Gruppen bilden, die sich nach Sprachen voneinander abgrenzen. Kinder, die die jeweilige Sprache nicht verstehen, fühlen sich ausgeschlossen. Deutsch ist die einzige Sprache, die alle gemeinsam haben.
C: Ich verstehe das Anliegen, halte die Regel aber für kontraproduktiv. Wenn Kinder erleben, dass ihre Familiensprache in der Schule unerwünscht ist, dann lernen sie daraus vor allem eines: dass mit dieser Sprache etwas nicht stimmt. Und es ist gut belegt, dass Kinder, die ihre Herkunftssprache sicher beherrschen, auch beim Deutschlernen davon profitieren.
B: Aber Frau Dr. Arslan, im Unterricht sprechen die Kinder doch ohnehin Deutsch. Mehr Übung kann nicht schaden, gerade für diejenigen, die erst seit Kurzem hier sind.
C: Mehr Übung ja, aber unter Zwang? Sprachliche Fortschritte entstehen durch echte Kommunikation, nicht durch Kontrolle. Außerdem stellt sich eine ganz praktische Frage: Wer soll das eigentlich überwachen? Sollen Lehrkräfte über den Pausenhof gehen und Kinder ermahnen, weil sie sich auf Arabisch über ein Fußballspiel unterhalten?
A: Jonas, wie sieht man das unter Schülerinnen und Schülern?
D: Ehrlich gesagt sind die Meinungen ziemlich gespalten. Einige finden die Regel gut, weil sie sich tatsächlich manchmal ausgeschlossen fühlen. Mir geht es aber vor allem darum, dass niemand gefragt wurde. Bei einer Regel, die so stark in unseren Alltag eingreift, hätte man die Schülervertretung zumindest richtig beteiligen müssen.
B: Da muss ich widersprechen: Wir haben die Regel in der Schulkonferenz beschlossen, und dort sind auch Schüler vertreten.
D: Formal stimmt das schon. Aber eine Abstimmung in einem Gremium ist etwas anderes als eine echte Diskussion mit allen.
A: Gäbe es denn Alternativen?
C: Durchaus. Man könnte zum Beispiel Projekte anbieten, in denen Kinder unterschiedlicher Herkunft zusammenarbeiten müssen, oder Patenschaften zwischen älteren und jüngeren Schülern einrichten. Dann entsteht Deutsch als gemeinsame Sprache von selbst – weil man sich verständigen will, nicht weil man muss.
D: Und man sollte die Sprachen, die an einer Schule gesprochen werden, sichtbarer machen. Bei uns gibt es zum Beispiel einmal im Jahr einen Tag, an dem Schüler anderen ein paar Sätze in ihrer Familiensprache beibringen. Das kommt super an.
B: Solche Ideen greife ich gern auf. Ich bin auch bereit, die Regel nach einem Jahr zu überprüfen. Aber ganz darauf verzichten möchte ich im Moment nicht.
A: Vielen Dank Ihnen dreien für diese engagierte Diskussion.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was?',
          instructionRu: 'Вы слушаете дискуссию один раз. Кто что говорит?',
          options: ['Moderatorin', 'Herr Albers', 'Dr. Selin Arslan', 'Jonas Weber'],
          items: [
            {
              kind: 'match',
              prompt: 'Die neue Regel hat für viel Aufregung gesorgt.',
              answer: 0,
              explanationRu: 'Модератор: «Die Entscheidung hat für erheblichen Wirbel gesorgt.»',
            },
            {
              kind: 'match',
              prompt: 'Die Vielfalt der Sprachen an der Schule ist ein Grund zum Stolz.',
              answer: 1,
              explanationRu: 'Альберс: в школе говорят более чем на тридцати языках, «und darauf sind wir stolz».',
            },
            {
              kind: 'match',
              prompt: 'Wer die Herkunftssprache gut beherrscht, lernt auch leichter Deutsch.',
              answer: 2,
              explanationRu: 'Арслан: дети, хорошо владеющие языком происхождения, «auch beim Deutschlernen davon profitieren».',
            },
            {
              kind: 'match',
              prompt: 'Die Einhaltung der Regel ließe sich kaum sinnvoll kontrollieren.',
              answer: 2,
              explanationRu: 'Арслан: «Wer soll das eigentlich überwachen?» — учителям пришлось бы ходить по двору и делать замечания.',
            },
            {
              kind: 'match',
              prompt: 'Die Betroffenen hätten stärker in die Entscheidung einbezogen werden müssen.',
              answer: 3,
              explanationRu: 'Вебер: «hätte man die Schülervertretung zumindest richtig beteiligen müssen».',
            },
            {
              kind: 'match',
              prompt: 'Gemeinsame Aufgaben fördern Deutsch als gemeinsame Sprache auf natürliche Weise.',
              answer: 2,
              explanationRu: 'Арслан: в совместных проектах немецкий возникает сам — «weil man sich verständigen will, nicht weil man muss».',
            },
            {
              kind: 'match',
              prompt: 'Ein Aktionstag, an dem Familiensprachen vermittelt werden, kommt sehr gut an.',
              answer: 3,
              explanationRu: 'Вебер рассказывает о дне, когда ученики учат друг друга фразам на своих языках: «Das kommt super an.»',
            },
            {
              kind: 'match',
              prompt: 'Die Regel soll nach einer gewissen Zeit erneut bewertet werden.',
              answer: 1,
              explanationRu: 'Альберс: «Ich bin auch bereit, die Regel nach einem Jahr zu überprüfen.»',
            },
          ],
        },
      ],
    },
  ],
};
