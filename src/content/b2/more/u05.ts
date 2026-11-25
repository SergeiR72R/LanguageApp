import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt?',
      options: [
        'Er hat weder keine Zeit noch keine Lust.',
        'Er hat weder Zeit noch Lust.',
        'Er hat nicht weder Zeit noch Lust.',
        'Er hat weder Zeit oder Lust.',
      ],
      answer: 1,
      explanationRu: 'Weder … noch уже содержит отрицание, поэтому kein/nicht не нужны (в отличие от русского «ни…ни» с «не»). Вторая часть — только noch, не oder.',
    },
    {
      type: 'choice',
      prompt: 'Wir können den Streit entweder heute Abend klären ___ am Wochenende.',
      options: ['als auch', 'noch', 'oder', 'sondern'],
      answer: 2,
      explanationRu: 'Entweder … oder = «либо …, либо». Als auch относится к sowohl, noch — к weder, sondern — к nicht nur.',
    },
    {
      type: 'gap',
      prompt: 'Je älter meine Eltern werden, ___ mehr Hilfe brauchen sie im Alltag.',
      answers: ['desto', 'umso'],
      explanationRu: 'Je + сравнительная степень … , desto/umso + сравнительная степень + глагол. Обе формы, desto и umso, правильны.',
    },
    {
      type: 'order',
      words: ['Wir', 'treffen uns', 'entweder', 'bei mir', 'oder', 'bei dir.'],
      translationRu: 'Мы встречаемся либо у меня, либо у тебя.',
      explanationRu: 'Entweder … oder соединяет два обстоятельства места; entweder стоит непосредственно перед первой альтернативой.',
    },
    {
      type: 'choice',
      prompt: '___ möchte ich mehr Zeit mit meiner Familie verbringen, andererseits brauche ich auch Zeit für mich.',
      options: ['Einerseits', 'Entweder', 'Sowohl', 'Weder'],
      answer: 0,
      explanationRu: 'Einerseits … andererseits («с одной стороны …, с другой стороны») противопоставляет два аспекта. Einerseits стоит на первом месте, после него инверсия (möchte ich).',
    },
    {
      type: 'gap',
      prompt: '___ ist die Wohnung ziemlich teuer, aber dafür haben wir einen großen Garten.',
      answers: ['Zwar'],
      explanationRu: 'Zwar ведёт себя как наречие: если оно стоит на первом месте, глагол идёт сразу за ним (Zwar ist die Wohnung …). После aber — прямой порядок слов.',
    },
    {
      type: 'gap',
      prompt: 'Mein Mitbewohner kocht ___ selbst, noch bestellt er Essen – er isst jeden Tag bei seiner Mutter.',
      answers: ['weder'],
      explanationRu: 'Weder … noch соединяет два предложения. После noch, который стоит на первом месте, идёт инверсия: noch bestellt er.',
    },
    {
      type: 'choice',
      prompt: 'Weder hat er sich entschuldigt, noch ___',
      options: ['er hat angerufen.', 'hat er angerufen.', 'er angerufen hat.', 'angerufen hat er.'],
      answer: 1,
      explanationRu: 'Если weder и noch вводят целые предложения, после каждого из них сразу идёт спрягаемый глагол (инверсия): noch hat er angerufen.',
    },
    {
      type: 'gap',
      prompt: 'Entweder ___ du dich bei ihr, oder sie redet nie wieder mit dir.',
      answers: ['entschuldigst'],
      hintRu: 'sich entschuldigen',
      explanationRu: 'Entweder может стоять на первом месте с инверсией: Entweder entschuldigst du dich … Вариант «Entweder du entschuldigst dich» тоже возможен, но здесь место глагола сразу после entweder.',
    },
    {
      type: 'gap',
      prompt: 'Mein Partner arbeitet nicht nur Vollzeit, sondern kümmert sich ___ um seine kranke Mutter.',
      answers: ['auch'],
      explanationRu: 'Вторая часть nicht nur … sondern auch: auch может стоять не сразу после sondern, а перед той частью, которую оно выделяет.',
    },
    {
      type: 'choice',
      prompt: 'Je öfter wir uns streiten, ___',
      options: [
        'desto die Versöhnung wird schwieriger.',
        'desto wird die Versöhnung schwieriger.',
        'die Versöhnung wird desto schwieriger.',
        'desto schwieriger wird die Versöhnung.',
      ],
      answer: 3,
      explanationRu: 'Desto + сравнительная степень образуют одну позицию в начале главного предложения, сразу за ними глагол: desto schwieriger wird …',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью zwar … aber.',
      prompt: 'Unsere Nachbarn sind manchmal laut. Aber sie sind sehr hilfsbereit.',
      answers: [
        'Unsere Nachbarn sind zwar manchmal laut, aber sie sind sehr hilfsbereit.',
        'Zwar sind unsere Nachbarn manchmal laut, aber sie sind sehr hilfsbereit.',
        'Unsere Nachbarn sind zwar manchmal laut, aber sehr hilfsbereit.',
      ],
      explanationRu: 'Zwar стоит в середине первого предложения (или на первом месте с инверсией), aber — в начале второй части, перед ним запятая.',
    },
    {
      type: 'gap',
      prompt: 'Einerseits genieße ich die Ruhe, seit ich allein wohne, ___ fehlt mir manchmal die Gesellschaft.',
      answers: ['andererseits'],
      explanationRu: 'Пара einerseits … andererseits. Andererseits занимает первое место во второй части, поэтому дальше идёт глагол (fehlt).',
    },
    {
      type: 'choice',
      prompt: 'Die beiden verstehen sich sehr gut, ___ sie völlig unterschiedliche Interessen haben.',
      options: ['zwar', 'trotzdem', 'obwohl', 'aber'],
      answer: 2,
      explanationRu: 'Повторение B1: глагол haben стоит в конце, значит нужен подчинительный союз — obwohl. Trotzdem и zwar — наречия, aber требует прямого порядка слов.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью nicht nur … sondern auch.',
      prompt: 'Tim hilft seiner Oma beim Einkaufen. Er repariert auch ihren Computer.',
      answers: [
        'Tim hilft seiner Oma nicht nur beim Einkaufen, sondern repariert auch ihren Computer.',
        'Tim hilft seiner Oma nicht nur beim Einkaufen, sondern er repariert auch ihren Computer.',
      ],
      explanationRu: 'Nicht nur стоит перед первой частью (beim Einkaufen), sondern открывает вторую часть, auch — перед новой информацией. Подлежащее после sondern можно повторить.',
    },
    {
      type: 'gap',
      prompt: 'Je ___ man sich kennt, desto leichter verzeiht man einander kleine Fehler.',
      answers: ['besser'],
      hintRu: 'gut → сравнительная степень',
      explanationRu: 'После je нужна сравнительная степень: gut → besser (неправильная форма). Глагол kennt стоит в конце части с je.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью weder … noch.',
      prompt: 'Mein Bruder ruft nicht an. Er schreibt auch keine Nachrichten.',
      answers: [
        'Mein Bruder ruft weder an, noch schreibt er Nachrichten.',
        'Mein Bruder ruft weder an noch schreibt er Nachrichten.',
        'Weder ruft mein Bruder an, noch schreibt er Nachrichten.',
      ],
      explanationRu: 'Отрицания nicht и keine исчезают — их заменяет weder … noch. Во второй части noch стоит на первом месте, затем глагол: noch schreibt er.',
    },
    {
      type: 'order',
      words: ['Zwar', 'streiten', 'wir', 'uns', 'oft,', 'aber', 'wir', 'versöhnen', 'uns', 'schnell.'],
      translationRu: 'Мы, правда, часто ссоримся, но быстро миримся.',
      explanationRu: 'Zwar на первом месте → инверсия (streiten wir uns). Aber на нулевой позиции → прямой порядок (wir versöhnen uns).',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение с je … desto.',
      prompt: 'Wenn Kinder älter werden, werden sie selbstständiger.',
      answers: [
        'Je älter Kinder werden, desto selbstständiger werden sie.',
        'Je älter Kinder werden, umso selbstständiger werden sie.',
        'Je älter die Kinder werden, desto selbstständiger werden sie.',
        'Je älter die Kinder werden, umso selbstständiger werden sie.',
      ],
      explanationRu: 'Je + Komparativ (älter) + подлежащее + глагол в конце; desto + Komparativ (selbstständiger) + глагол + подлежащее.',
    },
    {
      type: 'order',
      words: ['Nicht nur', 'hat', 'er', 'mich', 'angelogen,', 'sondern', 'er', 'hat', 'auch', 'mein Vertrauen', 'missbraucht.'],
      translationRu: 'Он не только мне солгал, но и злоупотребил моим доверием.',
      explanationRu: 'Если nicht nur стоит на первом месте, за ним сразу спрягаемый глагол (hat er). После sondern — прямой порядок, auch выделяет новую информацию.',
    },
  ],
  reading: [
    {
      title: 'Gemeinschaftsordnung der Wohnanlage Lindenhof',
      textType: 'Hausordnung',
      texts: [
        {
          label: 'Abschnitt 1',
          body: `Der Gemeinschaftsraum im Erdgeschoss steht allen Bewohnerinnen und Bewohnern sowohl für private Feiern als auch für Treffen von Gruppen zur Verfügung. Reservierungen erfolgen über die Liste am Schwarzen Brett, höchstens vier Wochen im Voraus. Nach der Nutzung ist der Raum gereinigt zu übergeben; der Schlüssel wird beim Hausmeister abgegeben.`,
        },
        {
          label: 'Abschnitt 2',
          body: `Zwischen 22 und 7 Uhr sowie sonntags ganztägig ist besondere Rücksicht auf die Nachbarn zu nehmen. Musik und Fernseher sind so einzustellen, dass sie weder im Treppenhaus noch in den Nachbarwohnungen zu hören sind. Wer eine Feier plant, sollte die Nachbarn vorher informieren – das verhindert zwar nicht jeden Ärger, aber viele Missverständnisse.`,
        },
        {
          label: 'Abschnitt 3',
          body: `Für Besuch kann die Gästewohnung im dritten Stock gemietet werden; sie kostet 25 Euro pro Nacht. Pro Haushalt ist die Nutzung auf zehn Nächte im Jahr begrenzt, damit möglichst viele Familien davon profitieren. Die Wohnung ist bei der Hausverwaltung mindestens eine Woche vorher zu buchen.`,
        },
        {
          label: 'Abschnitt 4',
          body: `Am Eingang hängt eine Tafel, auf der Bewohner Hilfe anbieten oder suchen können – etwa beim Einkaufen, bei Behördengängen oder bei der Kinderbetreuung. Die Hilfe ist freiwillig und unentgeltlich. Für Schäden, die dabei entstehen, haftet die Hausverwaltung nicht.`,
        },
        {
          label: 'Abschnitt 5',
          body: `Kommt es zu Meinungsverschiedenheiten, sollen die Beteiligten zunächst das direkte Gespräch suchen. Gelingt dies nicht, kann der Bewohnerbeirat als Vermittler eingeschaltet werden. Erst wenn auch diese Schlichtung scheitert, wird die Hausverwaltung hinzugezogen. Anonyme Beschwerden werden nicht bearbeitet.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Überschriften a–g und die Abschnitte 1–5. Welche Überschrift passt zu welchem Abschnitt? Zwei Überschriften bleiben übrig.',
          instructionRu: 'Прочитайте заголовки a–g и разделы 1–5. Какой заголовок подходит к какому разделу? Два заголовка лишние.',
          options: [
            'Unterkunft für Besucher',
            'Haustiere in der Wohnanlage',
            'Wenn es Streit gibt',
            'Räume für Feiern und Treffen buchen',
            'Mieterhöhungen und Nebenkosten',
            'Ruhe und gegenseitige Rücksicht',
            'Unterstützung unter Nachbarn',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Abschnitt 1',
              answer: 3,
              explanationRu: 'Раздел 1: общая комната для праздников и встреч групп, бронирование через список на доске.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 2',
              answer: 5,
              explanationRu: 'Раздел 2: часы тишины, громкость музыки и телевизора, предупреждение соседей о празднике.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 3',
              answer: 0,
              explanationRu: 'Раздел 3: гостевая квартира для посетителей, 25 евро за ночь.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 4',
              answer: 6,
              explanationRu: 'Раздел 4: доска, на которой жильцы предлагают или ищут помощь (покупки, ведомства, присмотр за детьми).',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 5',
              answer: 2,
              explanationRu: 'Раздел 5: порядок действий при разногласиях — разговор, совет жильцов, управляющая компания.',
            },
          ],
        },
      ],
    },
    {
      title: 'Leserkommentare: Wohnen im „Hotel Mama“',
      textType: 'Leserkommentare',
      texts: [
        {
          label: 'Artikel',
          heading: 'Immer später raus aus dem Elternhaus',
          body: `Junge Erwachsene ziehen heute deutlich später bei ihren Eltern aus als noch vor dreißig Jahren. Viele wohnen mit Mitte zwanzig noch im Kinderzimmer – oft wegen der hohen Mieten in den Städten. Wir haben gefragt: Was halten Sie davon?`,
        },
        {
          label: '1',
          heading: 'Sophie, 26',
          body: `Ich wohne noch bei meinen Eltern und schäme mich überhaupt nicht dafür. Ich spare jeden Monat einen Teil meines Gehalts für eine eigene Wohnung. Umsonst wohne ich aber nicht: Ich zahle meinen Eltern sowohl einen Beitrag zur Miete als auch zu den Lebensmitteln, und ich übernehme feste Aufgaben im Haushalt. Ich finde, nur so ist es fair. Unser Verhältnis ist dadurch eher besser geworden.`,
        },
        {
          label: '2',
          heading: 'Klaus, 58',
          body: `Unser Sohn ist 29 und wohnt immer noch bei uns. Wir lieben ihn, keine Frage. Aber meine Frau und ich hatten uns nach all den Jahren auf ein bisschen mehr Zweisamkeit gefreut. Stattdessen streiten wir uns über nasse Handtücher im Bad und darüber, wer wann die Küche benutzt. Je länger das dauert, desto mehr wünsche ich mir, dass er endlich seinen eigenen Weg geht.`,
        },
        {
          label: '3',
          heading: 'Aylin, 31',
          body: `Ich bin mit achtzehn zum Studium ausgezogen und habe in dieser Zeit mehr gelernt als in jedem Seminar: wie man mit Geld umgeht, wie man einen Vermieter anruft, wie man Wäsche wäscht, ohne dass alles rosa wird. Ich glaube, jeder Mensch sollte irgendwann einmal allein oder in einer WG leben. Nur so findet man heraus, wer man eigentlich ist und was man ohne die Eltern schafft.`,
        },
        {
          label: '4',
          heading: 'Tomasz, 40',
          body: `In dem Dorf, aus dem ich komme, wohnen oft drei Generationen unter einem Dach, und niemand findet das seltsam. Die Großeltern betreuen die Kinder, die Jüngeren kümmern sich später um die Alten. Der Ausdruck „Hotel Mama“ klingt für mich deshalb ziemlich abwertend. Ob man mit dreißig noch bei den Eltern lebt, hat nicht unbedingt etwas mit Faulheit zu tun, sondern auch damit, wo und wie man aufgewachsen ist.`,
        },
        {
          label: '5',
          heading: 'Ines, 35, Sozialarbeiterin',
          body: `In meiner Arbeit treffe ich täglich junge Leute, die gern ausziehen würden, es aber nicht können. Eine Einzimmerwohnung kostet in unserer Stadt inzwischen die Hälfte eines Azubi-Gehalts. Man sollte also weder den Jugendlichen noch ihren Eltern Vorwürfe machen. Solange nicht genug bezahlbare Wohnungen gebaut werden, wird sich daran nichts ändern.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Kommentare 1–5. Welche Aussage a–h passt zu welchem Kommentar? Drei Aussagen passen nicht.',
          instructionRu: 'Прочитайте комментарии 1–5. Какое высказывание a–h подходит к какому комментарию? Три высказывания лишние.',
          options: [
            'Eine Zeit ohne die Eltern zu leben, ist wichtig für die Selbstständigkeit.',
            'Eltern sollten von ihren erwachsenen Kindern keine Miete verlangen.',
            'Nicht die jungen Leute, sondern die Wohnungspolitik ist das Problem.',
            'Wer bei den Eltern wohnt, sollte sich an Kosten und Hausarbeit beteiligen.',
            'Das Zusammenleben mehrerer Generationen führt zwangsläufig zu Streit.',
            'Ob man bei den Eltern wohnt, hängt auch von der eigenen Herkunft ab.',
            'Wohngemeinschaften sind günstiger als das Wohnen bei den Eltern.',
            'Manche Eltern wünschen sich nach vielen Jahren wieder mehr Zeit zu zweit.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Kommentar 1',
              answer: 3,
              explanationRu: 'Sophie платит родителям за жильё и продукты и выполняет обязанности по дому — «nur so ist es fair».',
            },
            {
              kind: 'match',
              prompt: 'Kommentar 2',
              answer: 7,
              explanationRu: 'Klaus и его жена ждали больше времени вдвоём (Zweisamkeit), а теперь ссорятся с сыном из-за мелочей.',
            },
            {
              kind: 'match',
              prompt: 'Kommentar 3',
              answer: 0,
              explanationRu: 'Aylin: каждый должен когда-то жить один или в WG, чтобы понять, что он может без родителей.',
            },
            {
              kind: 'match',
              prompt: 'Kommentar 4',
              answer: 5,
              explanationRu: 'Tomasz: в его родной деревне три поколения живут вместе; это зависит от того, где и как человек вырос.',
            },
            {
              kind: 'match',
              prompt: 'Kommentar 5',
              answer: 2,
              explanationRu: 'Ines: молодые люди хотят переехать, но не могут из-за цен; нужно строить доступное жильё.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Radiotipp: Nachbarschaftsfest in der Südstadt',
      kind: 'monolog',
      situation: 'Sie hören einen Veranstaltungstipp im Radio.',
      text: `Und hier noch unser Tipp fürs Wochenende: Am Samstag feiert die Südstadt ihr erstes Nachbarschaftsfest. Zwischen elf und achtzehn Uhr wird die Körnerstraße für den Verkehr gesperrt, und die Anwohner stellen Tische und Bänke mitten auf die Straße. Jeder bringt etwas zu essen mit – entweder etwas Selbstgekochtes oder einen Kuchen. Getränke gibt der Bürgerverein gegen eine kleine Spende aus. Für Kinder gibt es sowohl eine Hüpfburg als auch einen Flohmarkt, auf dem sie ihre alten Spielsachen verkaufen können. Wer selbst einen Stand aufbauen möchte, muss sich bis Donnerstag beim Bürgerverein melden, ein kurzer Anruf genügt. Die Organisatoren hoffen, dass nicht nur Alteingesessene kommen, sondern auch Menschen, die erst vor Kurzem in die Südstadt gezogen sind. Und falls es regnet: Das Fest wird nicht abgesagt, sondern in die Turnhalle der Grundschule verlegt.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Die Gäste sollen selbst etwas zu essen mitbringen.',
              answer: true,
              explanationRu: '«Jeder bringt etwas zu essen mit – entweder etwas Selbstgekochtes oder einen Kuchen».',
            },
            {
              kind: 'tf',
              statement: 'Bei schlechtem Wetter fällt das Fest aus.',
              answer: false,
              explanationRu: 'При дожде праздник не отменяют, а переносят в спортзал начальной школы.',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was muss man tun, wenn man einen eigenen Stand möchte?',
              options: [
                'sich bis Donnerstag beim Bürgerverein melden',
                'eine Standgebühr bezahlen',
                'ein Formular im Internet ausfüllen',
              ],
              answer: 0,
              explanationRu: 'Нужно до четверга сообщить в Bürgerverein, достаточно короткого звонка.',
            },
            {
              kind: 'mc',
              question: 'Wen möchten die Organisatoren besonders ansprechen?',
              options: [
                'vor allem Familien mit kleinen Kindern',
                'auch Menschen, die neu im Viertel wohnen',
                'vor allem ältere Alleinstehende',
              ],
              answer: 1,
              explanationRu: 'Организаторы надеются, что придут не только старожилы, но и те, кто недавно переехал в район.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Zusammen, aber nicht unter einem Dach',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin Anna Berger',
        B: 'Renate Vogt, lebt mit ihrem Partner in getrennten Wohnungen',
        C: 'Dr. Lukas Brenner, Paartherapeut',
      },
      situation: 'Sie hören eine Diskussion im Radio. Es geht um Paare, die nicht zusammenwohnen.',
      text: `A: Willkommen bei „Miteinander“. Immer mehr Paare leben zwar in einer festen Beziehung, aber in getrennten Wohnungen. Frau Vogt, Sie und Ihr Partner machen das seit zwölf Jahren. Warum?
B: Wir waren beide schon einmal verheiratet, und beide Ehen sind nicht zuletzt am Alltag gescheitert. Als wir uns kennengelernt haben, war uns klar: Wir wollen uns nicht wieder über offene Zahnpastatuben und volle Spülmaschinen streiten. Er wohnt zehn Minuten von mir entfernt. Wir sehen uns an vier Abenden pro Woche und fast jedes Wochenende.
A: Herr Dr. Brenner, ist das ein Modell mit Zukunft?
C: Es wird jedenfalls häufiger, gerade bei Menschen über fünfzig. Ich sehe darin viele Vorteile. Aber ich warne auch: Getrennte Wohnungen können eine Art Flucht sein. Wer nie zusammenlebt, muss auch nie lernen, Konflikte auszuhalten und zu lösen.
B: Wir streiten uns durchaus, keine Sorge! Aber eben über wichtige Dinge und nicht über Socken auf dem Fußboden.
A: Ganz ehrlich: Zwei Wohnungen sind doch auch ziemlich teuer, oder?
B: Natürlich. Das ist ein Luxus, das muss man zugeben. Wir verdienen beide und haben keine Kinder mehr im Haus. Für eine junge Familie in der Großstadt wäre das kaum machbar.
C: Und hier liegt für mich übrigens das eigentliche Problem – allerdings in die andere Richtung. Viele junge Paare ziehen vor allem deshalb zusammen, weil eine Wohnung billiger ist als zwei, und nicht, weil beide es wirklich wollen. Das geht nicht selten schief.
A: Was ist denn nun das Geheimnis einer glücklichen Beziehung – zusammen oder getrennt wohnen?
C: Weder das eine noch das andere. Entscheidend ist, dass beide offen darüber sprechen, wie viel Nähe und wie viel Freiraum sie brauchen. Wenn einer sich eine gemeinsame Wohnung wünscht und der andere nicht, wird es schwierig – egal, für welches Modell man sich entscheidet.
A: Frau Vogt, eine letzte Frage: Was wäre, wenn einer von Ihnen beiden einmal krank würde und Pflege bräuchte?
B: Dann würden wir neu nachdenken. Nichts ist für immer festgelegt, und genau das gefällt mir an unserem Modell.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen den Personen zu.',
          instructionRu: 'Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin Berger', 'Frau Vogt', 'Dr. Brenner'],
          items: [
            {
              kind: 'match',
              prompt: 'Wir wollten Streit über Kleinigkeiten im Haushalt vermeiden.',
              answer: 1,
              explanationRu: 'Frau Vogt: они не хотели снова ссориться из-за открытых тюбиков с пастой и посудомоечной машины.',
            },
            {
              kind: 'match',
              prompt: 'Getrennte Wohnungen können auch bedeuten, dass man Konflikten ausweicht.',
              answer: 2,
              explanationRu: 'Dr. Brenner: раздельные квартиры могут быть «бегством» — кто не живёт вместе, не учится решать конфликты.',
            },
            {
              kind: 'match',
              prompt: 'Was würde passieren, wenn einer der Partner pflegebedürftig wäre?',
              answer: 0,
              explanationRu: 'Этот вопрос задаёт модератор в конце передачи.',
            },
            {
              kind: 'match',
              prompt: 'Manche Paare ziehen hauptsächlich aus finanziellen Gründen zusammen.',
              answer: 2,
              explanationRu: 'Dr. Brenner: многие молодые пары съезжаются, потому что одна квартира дешевле двух.',
            },
            {
              kind: 'match',
              prompt: 'Unser Modell können sich nicht alle Paare leisten.',
              answer: 1,
              explanationRu: 'Frau Vogt признаёт, что две квартиры — это роскошь, для молодой семьи в большом городе почти невозможная.',
            },
            {
              kind: 'match',
              prompt: 'Wichtig ist, dass beide ehrlich über ihr Bedürfnis nach Nähe sprechen.',
              answer: 2,
              explanationRu: 'Dr. Brenner: решающее — открыто говорить, сколько близости и свободы нужно каждому.',
            },
          ],
        },
      ],
    },
  ],
};
