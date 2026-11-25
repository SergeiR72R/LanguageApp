import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Gestern ___ ich mit meiner früheren Chefin telefoniert.',
      options: ['habe', 'bin', 'hatte', 'war'],
      answer: 0,
      explanationRu: 'telefonieren не обозначает движения или изменения состояния → перфект с haben. Обратите внимание: у глаголов на -ieren нет приставки ge-: telefoniert.',
    },
    {
      type: 'choice',
      prompt: 'Wann ___ du eigentlich in Deutschland angekommen?',
      options: ['hast', 'bist', 'hattest', 'wurdest'],
      answer: 1,
      explanationRu: 'ankommen — глагол движения (прибыть), поэтому перфект образуется с sein: du bist angekommen.',
    },
    {
      type: 'choice',
      prompt: 'In meinem ersten Job habe ich leider nicht viel ___.',
      options: ['geverdient', 'verdient', 'verdiente', 'verdienen'],
      answer: 1,
      explanationRu: 'У глаголов с неотделяемыми приставками (be-, ver-, er-, ent-, ge-, zer-…) Partizip II образуется без ge-: verdienen → verdient.',
    },
    {
      type: 'choice',
      prompt: '– Warum warst du nicht beim Vorstellungsgespräch? – Ich ___ leider nicht kommen, mein Kind war krank.',
      options: ['konnte', 'bin gekonnt', 'hatte gekonnt', 'könnte'],
      answer: 0,
      explanationRu: 'Модальные глаголы даже в разговорной речи обычно употребляются в претерите: ich konnte. «könnte» — это сослагательное наклонение («мог бы»), оно здесь не подходит.',
    },
    {
      type: 'choice',
      prompt: 'Mit achtzehn ___ ich zum ersten Mal das Auto meines Vaters gefahren.',
      options: ['habe', 'bin', 'war', 'wurde'],
      answer: 0,
      explanationRu: 'Ловушка! fahren с прямым дополнением в Akkusativ (das Auto fahren — вести машину) образует перфект с haben. Без дополнения (nach Berlin fahren) — с sein.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: [
        'Bevor ich nach Wien zog, war ich zwei Jahre in Prag gelebt.',
        'Bevor ich nach Wien zog, hatte ich zwei Jahre in Prag leben.',
        'Bevor ich nach Wien zog, hatte ich zwei Jahre in Prag gelebt.',
      ],
      answer: 2,
      explanationRu: 'Жизнь в Праге была раньше переезда → плюсквамперфект: hatte + Partizip II (gelebt). leben образует сложные времена с haben, а в конце нужен Partizip II, а не инфинитив.',
    },
    {
      type: 'gap',
      prompt: 'Nach dem Abitur ___ ich ein Jahr in Australien geblieben.',
      answers: ['bin'],
      explanationRu: 'bleiben, как и sein, образует перфект с sein: ich bin geblieben — хотя никакого движения здесь нет.',
    },
    {
      type: 'gap',
      prompt: 'Wir haben uns 2018 bei einem Praktikum in Leipzig ___.',
      answers: ['kennengelernt', 'kennen gelernt'],
      hintRu: 'kennenlernen',
      explanationRu: 'kennenlernen — отделяемый глагол: ge- стоит между частями: kennengelernt. Возвратное sich kennenlernen образует перфект с haben.',
    },
    {
      type: 'gap',
      prompt: 'Was ist denn ___? Du siehst so traurig aus.',
      answers: ['passiert'],
      hintRu: 'passieren',
      explanationRu: 'passieren (случиться) образует перфект с sein (ist passiert) и, как все глаголы на -ieren, без ge-.',
    },
    {
      type: 'gap',
      prompt: '1998 ___ er sein Studium an der Universität Hamburg.',
      answers: ['begann'],
      hintRu: 'beginnen, претерит',
      explanationRu: 'В письменной биографии используется претерит. beginnen — сильный глагол: begann, hat begonnen.',
    },
    {
      type: 'gap',
      prompt: 'Damals ___ ich noch niemanden in der neuen Stadt.',
      answers: ['kannte'],
      hintRu: 'kennen, претерит',
      explanationRu: 'kennen — смешанный глагол: меняет корневую гласную, но имеет окончание слабых глаголов: kannte, hat gekannt (так же: bringen → brachte, denken → dachte).',
    },
    {
      type: 'gap',
      prompt: 'Als die Firma mich endlich anrief, ___ ich schon eine andere Stelle angenommen.',
      answers: ['hatte'],
      explanationRu: 'Сначала он(а) принял(а) другое предложение, потом позвонила фирма → плюсквамперфект. annehmen образует его с hatte.',
    },
    {
      type: 'gap',
      prompt: 'Nachdem sie nach Berlin ___ war, suchte sie sofort einen Sprachkurs.',
      answers: ['umgezogen'],
      hintRu: 'umziehen',
      explanationRu: 'После nachdem при главном предложении в претерите нужен плюсквамперфект. umziehen — отделяемый глагол движения: war umgezogen.',
    },
    {
      type: 'order',
      words: ['Letztes', 'Jahr', 'bin', 'ich', 'nach', 'Leipzig', 'umgezogen.'],
      translationRu: 'В прошлом году я переехал в Лейпциг.',
      explanationRu: 'Обстоятельство времени на первом месте, вспомогательный глагол bin — на втором, Partizip II umgezogen — в конце.',
    },
    {
      type: 'order',
      words: ['Ich', 'hatte', 'mich', 'schon', 'bei', 'drei', 'Firmen', 'beworben.'],
      translationRu: 'Я уже подал заявки в три фирмы.',
      explanationRu: 'Плюсквамперфект: hatte на втором месте, возвратное местоимение mich сразу после подлежащего, Partizip II beworben — в конце.',
    },
    {
      type: 'order',
      words: ['Ich', 'war', 'nervös,', 'weil', 'ich', 'noch', 'nie', 'ein', 'Vorstellungsgespräch', 'gehabt', 'hatte.'],
      translationRu: 'Я нервничал, потому что ещё никогда не был на собеседовании.',
      explanationRu: 'Повторение: в придаточном с weil спрягаемый глагол стоит в самом конце — после Partizip II: …gehabt hatte.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение для письменной биографии (претерит).',
      prompt: 'Sie hat in Graz Medizin studiert.',
      answers: ['Sie studierte in Graz Medizin.'],
      explanationRu: 'studieren — слабый глагол: претерит образуется с суффиксом -te: sie studierte. Partizip II исчезает, глагол стоит на втором месте.',
    },
    {
      type: 'transform',
      instructionRu: 'Перескажите это в разговорной форме (перфект).',
      prompt: 'Nach der Prüfung fuhren wir ans Meer.',
      answers: ['Nach der Prüfung sind wir ans Meer gefahren.', 'Wir sind nach der Prüfung ans Meer gefahren.'],
      explanationRu: 'fahren без прямого дополнения обозначает движение → sein: sind … gefahren.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью nachdem (первое действие — в плюсквамперфекте).',
      prompt: 'Er schloss die Ausbildung ab. Danach arbeitete er in einer Werkstatt.',
      answers: [
        'Nachdem er die Ausbildung abgeschlossen hatte, arbeitete er in einer Werkstatt.',
        'Er arbeitete in einer Werkstatt, nachdem er die Ausbildung abgeschlossen hatte.',
      ],
      explanationRu: 'Более раннее действие → плюсквамперфект (abgeschlossen hatte) в конце придаточного. Если придаточное стоит первым, главное начинается с глагола: arbeitete er.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте предложение в плюсквамперфект.',
      prompt: 'Sie wird Teamleiterin.',
      answers: ['Sie war Teamleiterin geworden.'],
      explanationRu: 'werden — изменение состояния → вспомогательный глагол sein: war … geworden. Partizip II от werden — geworden.',
    },
  ],
  reading: [
    {
      title: 'Mein Umweg zum Traumberuf',
      textType: 'Blogbeitrag',
      texts: [
        {
          body: `Hallo zusammen! Ich bin Tomasz, 31, und heute möchte ich euch erzählen, wie ich zu meinem Traumberuf gekommen bin – denn der Weg war alles andere als gerade.

Nach dem Abitur habe ich zuerst Jura in Göttingen studiert. Meine Eltern waren begeistert, ich leider nicht. Ich saß stundenlang in der Bibliothek und lernte Gesetze auswendig, aber Spaß hatte ich dabei nie. Nach vier Semestern habe ich das Studium abgebrochen. Das war damals eine schwere Entscheidung, denn ich hatte das Gefühl, dass ich versagt hatte.

Danach habe ich ein Jahr lang in einem Fahrradladen gejobbt, eigentlich nur, um Geld zu verdienen. Aber genau dort habe ich gemerkt, was mir wirklich gefällt: mit den Händen arbeiten und Probleme lösen. Mein Chef hat das schnell bemerkt und mir angeboten, bei ihm eine Ausbildung zum Zweiradmechatroniker zu machen. Ich habe sofort Ja gesagt.

Die Ausbildung hat dreieinhalb Jahre gedauert. In der Berufsschule war ich mit 24 der Älteste in der Klasse, und am Anfang war mir das ein bisschen peinlich. Später war es eher ein Vorteil: Ich hatte schon an der Uni gelernt, wie man sich auf Prüfungen vorbereitet. Die Abschlussprüfung habe ich als Jahrgangsbester bestanden.

Heute arbeite ich immer noch im selben Laden, inzwischen als stellvertretender Werkstattleiter. Und meine Eltern? Die sind mittlerweile richtig stolz auf mich. Vor Kurzem hat mein Vater sogar sein altes Rennrad aus dem Keller geholt und es bei mir reparieren lassen.

Mein Fazit: Ein Studienabbruch ist kein Weltuntergang. Manchmal muss man einen Umweg machen, um herauszufinden, was man wirklich will.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Tomasz hat sein Jurastudium mit einem Abschluss beendet.', answer: false, explanationRu: '«Nach vier Semestern habe ich das Studium abgebrochen» — он бросил учёбу, диплома нет.' },
            { kind: 'tf', statement: 'Seine Eltern fanden das Jurastudium gut.', answer: true, explanationRu: '«Meine Eltern waren begeistert» — родители были в восторге.' },
            { kind: 'tf', statement: 'Im Fahrradladen hat er zuerst nur gearbeitet, um Geld zu verdienen.', answer: true, explanationRu: '«eigentlich nur, um Geld zu verdienen» — сначала только ради заработка.' },
            { kind: 'tf', statement: 'Er hat sich bei mehreren Betrieben um einen Ausbildungsplatz beworben.', answer: false, explanationRu: 'Никуда он не подавал заявки: начальник сам предложил ему обучение («Mein Chef … hat mir angeboten …»).' },
            { kind: 'tf', statement: 'In der Berufsschule hat ihm seine Erfahrung von der Uni geholfen.', answer: true, explanationRu: '«Ich hatte schon an der Uni gelernt, wie man sich auf Prüfungen vorbereitet» — это было преимуществом.' },
            { kind: 'tf', statement: 'Sein Vater hat bei ihm ein neues Fahrrad gekauft.', answer: false, explanationRu: 'Отец не покупал велосипед, а дал отремонтировать свой старый («reparieren lassen»).' },
          ],
        },
      ],
    },
    {
      title: 'Lebensläufe heute',
      textType: 'Zeitungsartikel',
      texts: [
        {
          label: '1',
          heading: 'Lücken im Lebenslauf: Ehrlichkeit zahlt sich aus',
          body: `Ein Jahr Weltreise, eine lange Krankheit oder die Pflege der Eltern: Viele Menschen haben Lücken in ihrem Lebenslauf. Lange galten solche Pausen als Nachteil bei der Bewerbung. Eine neue Umfrage unter 500 Personalverantwortlichen zeigt jetzt: Das hat sich geändert. Nur noch 18 Prozent der Befragten sehen eine Lücke von mehr als sechs Monaten kritisch. Vor zehn Jahren war es noch fast die Hälfte.

„Wichtig ist, dass Bewerber offen mit der Pause umgehen“, sagt die Karriereberaterin Miriam Hollstein aus Frankfurt. „Wer die Lücke verstecken will, macht sich verdächtig.“ Sie empfiehlt, im Lebenslauf kurz und sachlich zu erklären, was man in dieser Zeit gemacht hat. Wer zum Beispiel ein Familienmitglied gepflegt hat, hat dabei oft Organisationstalent und Verantwortungsbewusstsein gezeigt – Fähigkeiten, die auch im Beruf wichtig sind.

Ein großer Fehler ist es dagegen, falsche Angaben zu machen. Personalabteilungen prüfen Zeugnisse und Daten heute genauer als früher. Wer bei einer Lüge erwischt wird, verliert nicht nur die Chance auf die Stelle, sondern im schlimmsten Fall sogar seinen Arbeitsvertrag.`,
        },
        {
          label: '2',
          heading: 'Mit 52 noch einmal Azubi',
          body: `Als Renate Albers vor drei Jahren ihren Job als Sekretärin verlor, dachte sie zuerst an Frührente. Die Firma, bei der sie 25 Jahre gearbeitet hatte, war pleitegegangen. „Ich habe mich bei über dreißig Büros beworben, aber niemand wollte eine Frau über fünfzig einstellen“, erzählt sie.

Dann sah sie im Fernsehen eine Reportage über den Fachkräftemangel in der Altenpflege. Schon am nächsten Tag ging sie zur Agentur für Arbeit und ließ sich beraten. Die Agentur finanzierte ihr eine dreijährige Ausbildung zur Pflegefachfrau. „Am Anfang hatte ich Angst, dass ich mit den jungen Leuten nicht mithalten kann“, sagt Albers. Doch in der Klasse wurde sie schnell zur „Mama“, die bei Problemen half und für alle Kuchen backte.

Im Sommer hat sie ihre Abschlussprüfung bestanden. Inzwischen arbeitet sie in einem Pflegeheim in Bremen. Ihr Gehalt ist etwas niedriger als früher, trotzdem bereut sie nichts: „Zum ersten Mal habe ich das Gefühl, dass meine Arbeit wirklich wichtig ist.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text 1. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 1. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was zeigt die Umfrage?',
              options: [
                'Die meisten Personalverantwortlichen finden Lücken heute nicht mehr problematisch.',
                'Fast die Hälfte der Bewerber hat eine Lücke im Lebenslauf.',
                'Vor zehn Jahren hatten nur wenige Menschen Lücken im Lebenslauf.',
              ],
              answer: 0,
              explanationRu: 'Только 18 % опрошенных относятся к паузе критически, то есть большинство — нет. «Почти половина» относится к работодателям 10 лет назад, а не к соискателям.',
            },
            {
              kind: 'mc',
              question: 'Was rät Miriam Hollstein?',
              options: [
                'Die Lücke im Lebenslauf besser nicht zu erwähnen.',
                'Kurz und ehrlich zu erklären, was man in der Pause gemacht hat.',
                'Im Vorstellungsgespräch ausführlich über die Pause zu sprechen.',
              ],
              answer: 1,
              explanationRu: '«Sie empfiehlt, im Lebenslauf kurz und sachlich zu erklären, was man in dieser Zeit gemacht hat» и «Wer die Lücke verstecken will, macht sich verdächtig».',
            },
            {
              kind: 'mc',
              question: 'Was kann passieren, wenn man im Lebenslauf lügt?',
              options: [
                'Man muss alle Zeugnisse noch einmal einreichen.',
                'Die Personalabteilung ruft den alten Arbeitgeber an.',
                'Man kann sogar die neue Stelle wieder verlieren.',
              ],
              answer: 2,
              explanationRu: '«…verliert … im schlimmsten Fall sogar seinen Arbeitsvertrag» — можно даже потерять уже полученную работу.',
            },
          ],
        },
        {
          instructionDe: 'Lesen Sie den Text 2. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 2. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Warum hat Renate Albers ihre Stelle verloren?',
              options: ['Sie war für die Firma zu alt.', 'Ihre Firma ging pleite.', 'Sie wollte in Frührente gehen.'],
              answer: 1,
              explanationRu: '«Die Firma, bei der sie 25 Jahre gearbeitet hatte, war pleitegegangen» — фирма обанкротилась. О пенсии она лишь подумала после потери работы.',
            },
            {
              kind: 'mc',
              question: 'Wie kam sie auf die Idee, in der Pflege zu arbeiten?',
              options: ['Durch eine Fernsehreportage.', 'Durch ein Gespräch mit einer Kollegin.', 'Durch eine Anzeige in der Zeitung.'],
              answer: 0,
              explanationRu: '«Dann sah sie im Fernsehen eine Reportage über den Fachkräftemangel in der Altenpflege».',
            },
            {
              kind: 'mc',
              question: 'Wie fühlt sie sich heute in ihrem neuen Beruf?',
              options: [
                'Sie verdient mehr als früher und ist deshalb zufrieden.',
                'Sie würde lieber wieder im Büro arbeiten.',
                'Sie findet ihre Arbeit sinnvoll, auch wenn sie weniger verdient.',
              ],
              answer: 2,
              explanationRu: '«Ihr Gehalt ist etwas niedriger als früher, trotzdem bereut sie nichts» — работа кажется ей важной.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht von der Personalabteilung',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Guten Tag, Frau Petrenko, hier spricht Markus Lindner von der Personalabteilung der Firma Holzmann. Vielen Dank für Ihre Bewerbung als Bürokauffrau. Ihr Lebenslauf hat uns sehr gut gefallen, besonders Ihre Erfahrungen in der Buchhaltung. Sie hatten in Ihrem Anschreiben erwähnt, dass Sie auch schon Praktikanten betreut haben – darüber würden wir gern mehr erfahren. Wir möchten Sie deshalb zu einem Vorstellungsgespräch einladen, und zwar am Donnerstag, dem 14. März, um 10 Uhr. Leider haben wir in Ihren Unterlagen ein Zeugnis nicht gefunden, nämlich das Arbeitszeugnis von Ihrer letzten Stelle in Kiel. Könnten Sie es uns bitte bis Montag per E-Mail schicken? Und falls Ihnen der Termin am Donnerstag nicht passt, rufen Sie mich bitte unter der Nummer 0421 55 63 80 zurück. Ich bin täglich bis 16 Uhr im Büro. Auf Wiederhören!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Frau Petrenko soll ein fehlendes Dokument nachschicken.', answer: true, explanationRu: 'Не хватает рабочей характеристики с последнего места работы в Киле — её нужно прислать до понедельника.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was soll Frau Petrenko tun, wenn sie am Donnerstag keine Zeit hat?',
              options: ['Eine E-Mail schreiben.', 'Herrn Lindner anrufen.', 'Bis Montag warten.'],
              answer: 1,
              explanationRu: '«…falls Ihnen der Termin … nicht passt, rufen Sie mich bitte … zurück». E-Mail нужна только для характеристики.',
            },
          ],
        },
      ],
    },
    {
      title: 'Wiedersehen beim Klassentreffen',
      kind: 'dialog',
      speakers: { A: 'Lena', B: 'Jonas' },
      situation: 'Sie hören ein Gespräch zwischen zwei ehemaligen Mitschülern auf einem Klassentreffen.',
      text: `A: Jonas? Das gibt's doch nicht! Wie lange haben wir uns nicht gesehen?
B: Lena! Mindestens zehn Jahre, oder? Seit dem Abiball, glaube ich.
A: Stimmt. Und, was hast du seitdem gemacht? Du wolltest doch damals unbedingt Medizin studieren.
B: Ja, wollte ich. Aber mein Abi war nicht gut genug, ich habe keinen Studienplatz bekommen. Deshalb habe ich erst mal eine Ausbildung zum Rettungssanitäter gemacht.
A: Echt? Und dann?
B: Dann habe ich fünf Jahre im Rettungsdienst gearbeitet. Das war eine tolle Zeit, ich habe unglaublich viel gelernt. Und als ich mich dann noch einmal beworben habe, hat es endlich geklappt. Jetzt bin ich im letzten Semester.
A: Respekt, das ist ja ein langer Weg!
B: Und du? Wohnst du noch in Freiburg?
A: Nein, schon lange nicht mehr. Ich habe in Freiburg mit Lehramt angefangen, aber nach zwei Semestern bin ich nach Kopenhagen gegangen – eigentlich nur für ein Auslandssemester.
B: Eigentlich?
A: Ja, dort habe ich meinen Mann kennengelernt. Also bin ich geblieben und habe mein Studium in Dänemark abgeschlossen. Heute unterrichte ich Deutsch an einer Schule in Kopenhagen.
B: Das ist ja witzig! Du warst doch in Deutsch immer die Beste.
A: Na ja, nicht immer. Aber Dänisch zu lernen war am Anfang richtig schwer. Ich hatte vorher noch nie ein Wort Dänisch gesprochen.
B: Und bist du heute extra aus Kopenhagen gekommen?
A: Nein, ich bin sowieso gerade für zwei Wochen bei meinen Eltern. Meine Mutter hatte mir von dem Klassentreffen erzählt, und da habe ich mich spontan angemeldet.
B: Wie schön! Komm, wir holen uns etwas zu trinken, und du erzählst mir mehr.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слышите разговор один раз. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Jonas und Lena haben sich seit dem Abiball nicht mehr gesehen.', answer: true, explanationRu: '«Seit dem Abiball, glaube ich.» — «Stimmt.»' },
            { kind: 'tf', statement: 'Jonas hat direkt nach dem Abitur mit dem Medizinstudium angefangen.', answer: false, explanationRu: 'Он не получил места в вузе и сначала выучился на фельдшера скорой помощи.' },
            { kind: 'tf', statement: 'Jonas hat im Rettungsdienst gearbeitet, bevor er das Studium begonnen hat.', answer: true, explanationRu: 'Пять лет работал в скорой помощи, потом снова подал заявку, и его приняли.' },
            { kind: 'tf', statement: 'Lena hat ihr Studium in Freiburg abgeschlossen.', answer: false, explanationRu: 'В Фрайбурге она только начала учиться, а закончила учёбу в Дании.' },
            { kind: 'tf', statement: 'Lena ist wegen ihres Mannes in Dänemark geblieben.', answer: true, explanationRu: '«…dort habe ich meinen Mann kennengelernt. Also bin ich geblieben».' },
            { kind: 'tf', statement: 'Lena hatte schon in der Schule Dänisch gelernt.', answer: false, explanationRu: '«Ich hatte vorher noch nie ein Wort Dänisch gesprochen».' },
            { kind: 'tf', statement: 'Lena ist nur wegen des Klassentreffens aus Kopenhagen gekommen.', answer: false, explanationRu: 'Она и так гостит у родителей две недели и записалась на встречу спонтанно.' },
          ],
        },
      ],
    },
  ],
};
