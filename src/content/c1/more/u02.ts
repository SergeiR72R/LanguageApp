import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    // ---------- choice ----------
    {
      type: 'choice',
      prompt: 'Hast du ___ schon wieder unbezahlte Überstunden gemacht? Das darf doch nicht wahr sein!',
      options: ['etwa', 'halt', 'ruhig', 'eben'],
      answer: 0,
      explanationRu:
        '«etwa» в вопросе «да/нет» выражает опасение или неприятное удивление: говорящий надеется, что ответ будет «нет» (≈ «неужели»). Остальные частицы в таком вопросе не употребляются.',
    },
    {
      type: 'choice',
      prompt: 'Sie können mich ___ anrufen, wenn Sie noch Fragen haben – ich bin den ganzen Tag im Büro.',
      options: ['bloß', 'etwa', 'ruhig', 'denn'],
      answer: 2,
      explanationRu:
        '«ruhig» в предложениях с разрешением или побуждением снимает неловкость: «смело звоните, не стесняйтесь». «bloß» в побуждении звучит как предостережение.',
    },
    {
      type: 'choice',
      prompt: 'Wer macht ___ gern Überstunden, ohne dafür bezahlt zu werden? Niemand natürlich.',
      options: ['mal', 'schon', 'ja', 'ruhig'],
      answer: 1,
      explanationRu:
        '«schon» в риторическом вопросе подразумевает отрицательный ответ: «Кто же любит…? — Никто». Это иная функция, чем успокаивающее «Das wird schon».',
    },
    {
      type: 'choice',
      prompt: 'Das war ___ ein anstrengender Tag! Drei Meetings und dann noch ein schwieriger Kundenbesuch.',
      options: ['etwa', 'denn', 'vielleicht', 'eigentlich'],
      answer: 2,
      explanationRu:
        'В восклицательном предложении «vielleicht» не означает «возможно», а усиливает оценку: «Ну и денёк был!». Так же могут употребляться «aber» и «ja».',
    },
    {
      type: 'choice',
      prompt: 'In welchem Satz steht die Modalpartikel an der richtigen Stelle?',
      options: [
        'Ich habe doch es Ihnen gesagt.',
        'Ich doch habe es Ihnen gesagt.',
        'Ich habe es Ihnen gesagt doch.',
        'Ich habe es Ihnen doch gesagt.',
      ],
      answer: 3,
      explanationRu:
        'Безударные местоимения («es», «Ihnen») стоят в начале среднего поля, частица — после них, но перед новой информацией и перед смысловым глаголом в конце предложения.',
    },
    {
      type: 'choice',
      prompt: '– „Sie haben die Präsentation noch nicht vorbereitet?“ – „___ Sie liegt schon auf Ihrem Schreibtisch.“',
      options: ['Ja!', 'Doch!', 'Schon!', 'Eben!'],
      answer: 1,
      explanationRu:
        'Ловушка: на отрицательный вопрос возражают ударным «Doch!» («Да нет же, подготовил!»). Ответ «Ja» здесь означал бы согласие с отрицанием. Это не модальная частица, а слово-ответ.',
    },
    // ---------- gap ----------
    {
      type: 'gap',
      prompt: 'Sag ___ nichts dem Chef – sonst bekommen wir beide Ärger!',
      answers: ['bloß', 'bloss', 'nur', 'ja'],
      hintRu: 'частица предостережения',
      explanationRu:
        '«bloß» или «nur» (а также ударное «ja») в повелительном предложении превращают его в предостережение или угрозу: «Только не говори шефу!».',
    },
    {
      type: 'gap',
      prompt: 'Hätte ich ___ früher gekündigt! Dann wäre mir viel Ärger erspart geblieben.',
      answers: ['doch', 'nur', 'doch nur', 'bloß', 'doch bloß', 'bloss'],
      hintRu: 'нереальное желание (Konjunktiv II)',
      explanationRu:
        'В предложениях-желаниях с Konjunktiv II и глаголом на первом месте нужна частица «doch», «nur» или их сочетание «doch nur»: «Если бы я только уволился раньше!».',
    },
    {
      type: 'gap',
      prompt: 'Das ist ___ nett von Ihnen, dass Sie mir beim Umzug ins neue Büro helfen!',
      answers: ['aber', 'ja', 'wirklich', 'echt'],
      hintRu: 'восклицание, приятное удивление',
      explanationRu:
        'В восклицательных предложениях «aber» и «ja» выражают удивление и усиливают оценку: «Как же это мило с вашей стороны!».',
    },
    {
      type: 'gap',
      prompt: 'Wo bleibt ___ der Bewerber? Das Gespräch hätte vor zwanzig Minuten beginnen sollen.',
      answers: ['denn', 'bloß', 'nur', 'denn bloß', 'denn nur', 'eigentlich', 'bloss'],
      hintRu: 'вопрос с нетерпением или беспокойством',
      explanationRu:
        'В w-вопросе «denn» передаёт интерес, а «bloß / nur» — беспокойство и нетерпение («Где же он?»). Возможны сочетания «denn bloß / denn nur».',
    },
    {
      type: 'gap',
      prompt: 'Wenn Sie Fragen zum Vertrag haben, rufen Sie ___ an – ganz unkompliziert.',
      answers: ['einfach', 'ruhig', 'doch', 'einfach mal', 'ruhig mal', 'doch mal', 'doch einfach', 'mal'],
      hintRu: '≈ «просто (позвоните)»',
      explanationRu:
        '«einfach» в побуждении подчёркивает, что действие несложное и не требует формальностей. Подходят также «ruhig» (не стесняйтесь) и «doch» (дружеский совет).',
    },
    {
      type: 'gap',
      prompt: '– Der neue Kollege ist schon wieder zu spät. – Na ja, er hat ___ einen sehr langen Anfahrtsweg.',
      answers: ['ja', 'eben', 'halt', 'doch', 'nun mal', 'nun einmal'],
      hintRu: 'обоснование, известный обоим факт',
      explanationRu:
        '«ja» указывает на факт, известный обоим собеседникам и оправдывающий ситуацию; «eben / halt / nun mal» подчёркивают неизбежность: «так уж вышло».',
    },
    {
      type: 'gap',
      prompt: 'Könnten Sie mir ___ sagen, bis wann die Bewerbungsfrist läuft?',
      answers: ['vielleicht', 'mal', 'bitte', 'eventuell', 'vielleicht mal', 'bitte mal'],
      hintRu: 'вежливая просьба (повторение: Konjunktiv II)',
      explanationRu:
        'Повторение B1/B2: вежливая просьба с Konjunktiv II «Könnten Sie …?». Частица «vielleicht» (или «mal») дополнительно смягчает вопрос и делает его ещё вежливее.',
    },
    // ---------- order ----------
    {
      type: 'order',
      words: ['Sie haben die Stelle', 'doch', 'nicht', 'etwa', 'abgelehnt?'],
      translationRu: 'Вы же не отказались от этой должности, правда?',
      explanationRu:
        'Сочетание «doch nicht etwa» выражает тревожное подозрение. Порядок фиксирован: «doch» → отрицание «nicht» → «etwa», затем причастие в конце.',
    },
    {
      type: 'order',
      words: ['Das', 'hätten', 'Sie', 'mir', 'ja auch früher', 'sagen können!'],
      translationRu: 'Вы же могли сказать мне об этом и раньше!',
      explanationRu:
        'Упрёк: Konjunktiv II прошедшего времени с модальным глаголом («hätten … sagen können») + частица «ja». Частица стоит после местоимений «Sie», «mir».',
    },
    {
      type: 'order',
      words: ['Wie', 'soll', 'ich', 'das', 'bloß', 'bis Freitag', 'schaffen?'],
      translationRu: 'Как же мне успеть это к пятнице?',
      explanationRu:
        '«bloß» в w-вопросе выражает растерянность. Частица стоит после безударного местоимения «das», но перед новой информацией «bis Freitag».',
    },
    // ---------- transform ----------
    {
      type: 'transform',
      instructionRu: 'Добавьте модальную частицу, чтобы выразить упрёк («я же вам говорил»).',
      prompt: 'Ich habe Ihnen gesagt, dass die Frist am Montag endet.',
      answers: [
        'Ich habe Ihnen doch gesagt, dass die Frist am Montag endet.',
        'Ich habe Ihnen ja gesagt, dass die Frist am Montag endet.',
        'Ich habe Ihnen doch schon gesagt, dass die Frist am Montag endet.',
      ],
      explanationRu:
        '«doch» в утверждении напоминает о том, что собеседник должен был знать, и звучит как лёгкий упрёк. Частица стоит после местоимения «Ihnen».',
    },
    {
      type: 'transform',
      instructionRu: 'Перефразируйте как риторический вопрос с частицей «schon».',
      prompt: 'Niemand liest gern lange E-Mails.',
      answers: ['Wer liest schon gern lange E-Mails?'],
      explanationRu:
        'Риторический вопрос с «schon» подразумевает ответ «никто». «niemand» превращается в вопросительное слово «wer».',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите сожаление в форме нереального желания (Konjunktiv II + частица).',
      prompt: 'Leider habe ich bei der Gehaltsverhandlung nicht mehr gefordert.',
      answers: [
        'Hätte ich bei der Gehaltsverhandlung doch mehr gefordert!',
        'Hätte ich bei der Gehaltsverhandlung nur mehr gefordert!',
        'Hätte ich bei der Gehaltsverhandlung doch nur mehr gefordert!',
        'Hätte ich doch bei der Gehaltsverhandlung mehr gefordert!',
        'Hätte ich nur bei der Gehaltsverhandlung mehr gefordert!',
        'Hätte ich doch nur bei der Gehaltsverhandlung mehr gefordert!',
        'Wenn ich bei der Gehaltsverhandlung doch mehr gefordert hätte!',
        'Wenn ich bei der Gehaltsverhandlung nur mehr gefordert hätte!',
        'Wenn ich bei der Gehaltsverhandlung doch nur mehr gefordert hätte!',
        'Wenn ich doch bei der Gehaltsverhandlung mehr gefordert hätte!',
        'Wenn ich doch nur bei der Gehaltsverhandlung mehr gefordert hätte!',
      ],
      explanationRu:
        'Нереальное желание о прошлом: Konjunktiv II прошедшего времени («hätte … gefordert») + обязательная частица «doch / nur». Глагол стоит на первом месте или (с «wenn») в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите опасение в виде вопроса с частицей «etwa».',
      prompt: 'Ich befürchte, dass Sie die Kündigungsfrist verpasst haben.',
      answers: [
        'Haben Sie etwa die Kündigungsfrist verpasst?',
        'Haben Sie die Kündigungsfrist etwa verpasst?',
        'Sie haben doch nicht etwa die Kündigungsfrist verpasst?',
        'Sie haben die Kündigungsfrist doch nicht etwa verpasst?',
      ],
      explanationRu:
        '«etwa» в вопросе «да/нет» выражает опасение. В вопросе с прямым порядком слов используется сочетание «doch nicht etwa» («вы же не …?»).',
    },
  ],

  reading: [
    {
      title: 'Zurück ins Büro? Vier Stimmen zur Präsenzpflicht',
      textType: 'Meinungsbeiträge',
      texts: [
        {
          label: 'A',
          heading: 'Miriam Hofer, Personalleiterin eines Versicherungskonzerns',
          body: `Ich bin keineswegs gegen das Homeoffice – während der Pandemie hat es uns gerettet. Aber nach drei Jahren beobachten wir Entwicklungen, die mir Sorgen machen. Neue Kolleginnen und Kollegen tun sich unglaublich schwer, die ungeschriebenen Regeln unseres Hauses zu verstehen, wenn sie ihr Team nur als Kacheln auf dem Bildschirm kennen. Und viele der besten Ideen der letzten Jahre sind nicht in geplanten Videokonferenzen entstanden, sondern beim Kaffee in der Küche oder auf dem Flur. Deshalb haben wir uns auf drei feste Bürotage pro Woche geeinigt. Kontrollieren wollen wir dabei niemanden; uns geht es um Begegnung.`,
        },
        {
          label: 'B',
          heading: 'Tobias Schell, Softwareentwickler',
          body: `Ich pendle an Bürotagen insgesamt fast zwei Stunden. Zu Hause schaffe ich in derselben Zeit nachweislich mehr, weil ich nicht alle zehn Minuten unterbrochen werde. Wenn Unternehmen jetzt wieder die Anwesenheit vorschreiben, hat das aus meiner Sicht wenig mit Kreativität zu tun, sondern vor allem damit, dass manche Vorgesetzte ihren Leuten schlicht nicht zutrauen, ohne Aufsicht zu arbeiten. Gemessen werden sollte das Ergebnis, nicht die Zahl der Stunden am Schreibtisch. Ich habe meinem Arbeitgeber offen gesagt: Sollte eine tägliche Präsenzpflicht kommen, würde ich mich nach etwas anderem umsehen. In meiner Branche ist das kein leeres Versprechen.`,
        },
        {
          label: 'C',
          heading: 'Prof. Dr. Ute Lindner, Arbeitspsychologin',
          body: `Die Forschungslage ist deutlich weniger eindeutig, als es beide Lager gern darstellen. Für konzentrierte Einzelarbeit erweist sich das Homeoffice häufig als vorteilhaft; bei Aufgaben, die viel Abstimmung oder spontane Rückfragen erfordern, schneiden Teams vor Ort dagegen oft besser ab. Hinzu kommen Risiken, die man nicht unterschätzen sollte: Manche Beschäftigte vereinsamen, anderen gelingt es kaum noch, Arbeit und Privatleben voneinander zu trennen. Pauschale Vorgaben von oben halte ich deshalb für wenig zielführend. Sinnvoller wäre es, wenn Teams selbst aushandeln, wann sie sich treffen – sie wissen schließlich am besten, was ihre Arbeit erfordert.`,
        },
        {
          label: 'D',
          heading: 'Kerem Aydın, Betriebsrat in einem Logistikunternehmen',
          body: `Mich ärgert an dieser Debatte vor allem, wer darin gar nicht vorkommt. In unserem Betrieb arbeiten rund achtzig Prozent der Beschäftigten im Lager, im Fuhrpark oder in der Werkstatt. Für sie stellt sich die Frage nach dem Homeoffice überhaupt nicht. Wenn dann in der Kantine die Kolleginnen und Kollegen aus der Verwaltung darüber klagen, dass sie zwei Tage pro Woche ins Büro müssen, entsteht schnell böses Blut. Ich fordere daher, dass Unternehmen auch für diejenigen, die nicht mobil arbeiten können, Flexibilität schaffen – etwa durch planbare Schichten oder zusätzliche freie Tage. Sonst spaltet die Debatte die Belegschaft.`,
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Beiträge. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden. Für eine Aussage gibt es keine passende Person.',
          instructionRu:
            'Прочитайте высказывания. Какое утверждение относится к какому человеку? Людей можно выбирать несколько раз. Для одного утверждения подходящего человека нет.',
          options: ['Miriam Hofer', 'Tobias Schell', 'Ute Lindner', 'Kerem Aydın'],
          allowNone: true,
          items: [
            {
              kind: 'match',
              prompt: 'Eine tägliche Anwesenheitspflicht wäre für diese Person ein Grund, den Arbeitgeber zu wechseln.',
              answer: 1,
              explanationRu: 'Шелль: «Sollte eine tägliche Präsenzpflicht kommen, würde ich mich nach etwas anderem umsehen».',
            },
            {
              kind: 'match',
              prompt: 'Neue Beschäftigte finden sich ohne persönliche Kontakte schlecht im Unternehmen zurecht.',
              answer: 0,
              explanationRu: 'Хофер: новичкам трудно понять «die ungeschriebenen Regeln unseres Hauses», если они видят коллег только на экране.',
            },
            {
              kind: 'match',
              prompt: 'Ob Arbeit zu Hause sinnvoll ist, hängt davon ab, welche Aufgaben zu erledigen sind.',
              answer: 2,
              explanationRu:
                'Линднер: для концентрированной индивидуальной работы удобнее дома, для задач с большим количеством согласований — в офисе.',
            },
            {
              kind: 'match',
              prompt: 'Die Diskussion übersieht Beschäftigte, deren Tätigkeit an einen festen Ort gebunden ist.',
              answer: 3,
              explanationRu: 'Айдын: «wer darin gar nicht vorkommt» — работники склада, автопарка и мастерской.',
            },
            {
              kind: 'match',
              prompt: 'Über gemeinsame Bürotage sollten die Teams am besten selbst entscheiden.',
              answer: 2,
              explanationRu: 'Линднер: «Sinnvoller wäre es, wenn Teams selbst aushandeln, wann sie sich treffen».',
            },
            {
              kind: 'match',
              prompt: 'Hinter der Rückkehr ins Büro steckt häufig mangelndes Vertrauen der Führungskräfte.',
              answer: 1,
              explanationRu: 'Шелль: начальники «ihren Leuten schlicht nicht zutrauen, ohne Aufsicht zu arbeiten».',
            },
            {
              kind: 'match',
              prompt: 'Gute Einfälle entstehen oft bei ungeplanten Begegnungen.',
              answer: 0,
              explanationRu: 'Хофер: лучшие идеи появились «beim Kaffee in der Küche oder auf dem Flur», а не на запланированных видеоконференциях.',
            },
            {
              kind: 'match',
              prompt: 'Der Staat sollte die Kosten für das Arbeiten zu Hause steuerlich stärker berücksichtigen.',
              answer: -1,
              explanationRu: 'О налогах и государственной поддержке никто из авторов не говорит — подходящего человека нет.',
            },
          ],
        },
      ],
    },
    {
      title: 'Weg mit dem Geheimcode!',
      textType: 'Kommentar',
      texts: [
        {
          body: `Es gibt Rituale, die man nur noch aus Gewohnheit pflegt. Das Arbeitszeugnis gehört zweifellos dazu. Wer in Deutschland eine Stelle verlässt, hat einen gesetzlichen Anspruch auf ein schriftliches Zeugnis, das – so will es die Rechtsprechung – „wohlwollend“ formuliert sein muss. Was auf den ersten Blick wie ein Schutz der Beschäftigten aussieht, hat sich im Laufe der Jahrzehnte zu einem absurden Versteckspiel entwickelt.

Weil offene Kritik nicht erlaubt ist, hat sich eine Geheimsprache herausgebildet, die nur Eingeweihte entschlüsseln können. „Er hat sich stets bemüht“ klingt freundlich, bedeutet im Klartext aber: Er hat nichts zustande gebracht. „Sie trug durch ihre Geselligkeit zur Verbesserung des Betriebsklimas bei“ kann je nach Lesart sogar auf übermäßigen Alkoholkonsum hindeuten. Wer diesen Code nicht kennt – und das sind keineswegs nur Zugewanderte, sondern auch zahlreiche Personalverantwortliche in kleineren Betrieben –, liest Lob, wo in Wahrheit ein Verriss steht.

Man mag einwenden, dass sich die Lage längst entspannt habe, weil inzwischen fast alle Zeugnisse sehr gut ausfielen. Genau darin liegt jedoch das nächste Problem. Untersuchungen zufolge wird heute die überwiegende Mehrheit der Beschäftigten mit „gut“ oder „sehr gut“ bewertet. Ein Dokument, das nahezu allen dasselbe bescheinigt, verliert jede Aussagekraft. Personalabteilungen wissen das natürlich und verlassen sich bei der Auswahl ohnehin auf Vorstellungsgespräche, Arbeitsproben und – zunehmend – auf telefonische Auskünfte früherer Vorgesetzter, die rechtlich weit heikler sind als jedes Zeugnis.

Hinzu kommt ein erheblicher Aufwand. Zeugnisse werden häufig von den Beschäftigten selbst vorformuliert, weil die Vorgesetzten keine Zeit dafür haben, und anschließend in zähen Verhandlungen Wort für Wort abgeklopft. Nicht selten landet der Streit sogar vor dem Arbeitsgericht. Man fragt sich, ob diese Energie nicht sinnvoller eingesetzt werden könnte.

Nun wäre es naiv zu glauben, eine bloße Abschaffung löse alle Probleme. Beschäftigte brauchen weiterhin einen Nachweis darüber, wie lange sie wo welche Aufgaben übernommen haben – gerade wer häufig den Arbeitgeber wechselt oder im Ausland arbeiten will, ist darauf angewiesen. Ein einfaches Zeugnis, das Dauer und Tätigkeiten nüchtern auflistet, gibt es bereits; es sollte zum Regelfall werden. Wer darüber hinaus eine Bewertung wünscht, könnte auf freiwillige, offen formulierte Referenzen setzen, wie sie in vielen anderen Ländern üblich sind.

Das qualifizierte Zeugnis in seiner heutigen Form dagegen ist ein Relikt, das weder Arbeitgebern noch Beschäftigten nützt. Es ist höchste Zeit, sich davon zu verabschieden – ganz ohne Geheimcode.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Kommentar. Entsprechen die Aussagen der Meinung des Autors?',
          instructionRu: 'Прочитайте комментарий. Соответствуют ли утверждения мнению автора?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            {
              kind: 'tf',
              statement: 'Am Arbeitszeugnis hält man vor allem aus Tradition fest.',
              answer: true,
              explanationRu: '«Es gibt Rituale, die man nur noch aus Gewohnheit pflegt. Das Arbeitszeugnis gehört zweifellos dazu.»',
            },
            {
              kind: 'tf',
              statement: 'Die Pflicht zur wohlwollenden Formulierung schützt die Beschäftigten wirksam.',
              answer: false,
              explanationRu: 'Это лишь «auf den ersten Blick» похоже на защиту; на деле получилась «ein absurdes Versteckspiel».',
            },
            {
              kind: 'tf',
              statement: 'Nur Menschen aus dem Ausland haben Probleme, die Zeugnissprache zu verstehen.',
              answer: false,
              explanationRu: '«keineswegs nur Zugewanderte, sondern auch zahlreiche Personalverantwortliche in kleineren Betrieben».',
            },
            {
              kind: 'tf',
              statement: 'Weil fast alle Zeugnisse gut ausfallen, sagen sie kaum noch etwas aus.',
              answer: true,
              explanationRu: '«Ein Dokument, das nahezu allen dasselbe bescheinigt, verliert jede Aussagekraft.»',
            },
            {
              kind: 'tf',
              statement: 'Telefonische Auskünfte früherer Vorgesetzter sind eine unproblematische Alternative zum Zeugnis.',
              answer: false,
              explanationRu: 'Автор называет их «rechtlich weit heikler … als jedes Zeugnis» — то есть проблематичнее.',
            },
            {
              kind: 'tf',
              statement: 'Beschäftigte sollten künftig überhaupt keinen Nachweis über ihre Tätigkeit mehr erhalten.',
              answer: false,
              explanationRu: 'Автор считает наивной простую отмену: простое (einfaches) свидетельство о сроках и задачах должно стать нормой.',
            },
            {
              kind: 'tf',
              statement: 'Bewertungen der Leistung sollten nur noch auf freiwilliger Basis erfolgen.',
              answer: true,
              explanationRu: 'Оценку можно было бы давать в виде «freiwillige, offen formulierte Referenzen», как в других странах.',
            },
          ],
        },
      ],
    },
  ],

  listening: [
    {
      title: 'Interview: Die berufliche Auszeit',
      kind: 'dialog',
      speakers: { A: 'Moderator', B: 'Dr. Nina Hartwig, Karriereberaterin' },
      situation: 'Sie hören ein Radiointerview mit einer Karriereberaterin zum Thema Sabbatical.',
      text: `A: Frau Dr. Hartwig, immer mehr Beschäftigte träumen von einem Sabbatical, also einer längeren beruflichen Auszeit. Ist das nur eine Modeerscheinung?
B: Na ja, ganz neu ist der Wunsch ja nicht. Lehrkräfte zum Beispiel können seit Jahrzehnten ein sogenanntes Sabbatjahr nehmen. Neu ist eher, dass inzwischen auch viele Unternehmen in der Privatwirtschaft solche Modelle anbieten – nicht zuletzt, weil sie im Wettbewerb um Fachkräfte attraktiv bleiben wollen.
A: Wer nimmt denn so eine Auszeit typischerweise?
B: Das Bild vom gestressten Manager, der ein halbes Jahr um die Welt segelt, stimmt so eigentlich nicht. In meiner Beratung erlebe ich ganz unterschiedliche Menschen: Leute, die Angehörige pflegen, die sich weiterbilden oder die einfach merken, dass sie seit Jahren auf der Stelle treten. Gemeinsam ist ihnen eigentlich nur, dass sie innehalten wollen, bevor sie völlig ausbrennen.
A: Und wie finanziert man das? Ein halbes Jahr ohne Gehalt kann sich ja nicht jeder leisten.
B: Das ist tatsächlich der Knackpunkt. Am verbreitetsten ist das Ansparmodell: Man arbeitet beispielsweise drei Jahre lang voll, bekommt aber nur einen Teil des Gehalts ausgezahlt, und im vierten Jahr wird das Angesparte weitergezahlt. So bleibt man auch während der Auszeit sozialversichert. Wer dagegen einfach unbezahlten Urlaub nimmt, muss sich um Kranken- und Rentenversicherung selbst kümmern – und das wird oft unterschätzt.
A: Haben Beschäftigte denn einen Anspruch auf ein Sabbatical?
B: Nein, einen allgemeinen gesetzlichen Anspruch gibt es in der Privatwirtschaft nicht. Man ist also auf das Entgegenkommen des Arbeitgebers angewiesen – oder auf eine entsprechende Betriebsvereinbarung.
A: Viele fürchten ja, dass eine Auszeit der Karriere schadet. Zu Recht?
B: Diese Sorge höre ich ständig, und ganz unbegründet ist sie nicht. Wer ausgerechnet in einer Phase aussteigt, in der über Beförderungen entschieden wird, hat womöglich das Nachsehen. Meine Erfahrung ist aber, dass es vor allem auf die Vorbereitung ankommt. Wer seine Vertretung sauber regelt und mit der Führungskraft vorher klar vereinbart, auf welche Position er zurückkehrt, hat in der Regel keine Nachteile. Manche kommen sogar mit neuen Ideen und Kompetenzen zurück, von denen das Unternehmen profitiert.
A: Was raten Sie jemandem, der mit dem Gedanken spielt?
B: Zunächst mal: sich ehrlich fragen, wovor man eigentlich davonlaufen möchte. Wenn das Problem der Job selbst ist, löst ein halbes Jahr Pause es nicht. Dann kommt man zurück, und nach drei Wochen ist alles wie vorher. In dem Fall wäre eine berufliche Neuorientierung wohl die ehrlichere Lösung. Wenn es aber darum geht, Kraft zu tanken oder einen lang gehegten Plan umzusetzen, dann kann ich nur sagen: Trauen Sie sich ruhig – und fangen Sie früh mit der Planung an.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie die richtige Antwort.',
          instructionRu: 'Вы слушаете интервью дважды. Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist laut Dr. Hartwig neu am Thema Sabbatical?',
              options: [
                'dass Lehrkräfte ein Sabbatjahr nehmen können',
                'dass auch private Unternehmen Auszeiten anbieten',
                'dass der Staat berufliche Auszeiten finanziert',
              ],
              answer: 1,
              explanationRu: '«Neu ist eher, dass inzwischen auch viele Unternehmen in der Privatwirtschaft solche Modelle anbieten».',
            },
            {
              kind: 'mc',
              question: 'Wer nimmt nach ihrer Erfahrung eine Auszeit?',
              options: [
                'vor allem Führungskräfte mit hohem Einkommen',
                'überwiegend junge Berufseinsteiger',
                'Menschen mit sehr unterschiedlichen Beweggründen',
              ],
              answer: 2,
              explanationRu:
                'Образ менеджера-яхтсмена неверен: это люди, ухаживающие за родственниками, повышающие квалификацию или «топчущиеся на месте».',
            },
            {
              kind: 'mc',
              question: 'Welchen Vorteil hat das Ansparmodell?',
              options: [
                'Man bleibt auch während der Auszeit sozialversichert.',
                'Man erhält während der Auszeit ein zusätzliches Gehalt.',
                'Man braucht keine Zustimmung des Arbeitgebers.',
              ],
              answer: 0,
              explanationRu: '«So bleibt man auch während der Auszeit sozialversichert» — в отличие от неоплачиваемого отпуска.',
            },
            {
              kind: 'mc',
              question: 'Was sagt Dr. Hartwig zum rechtlichen Anspruch auf ein Sabbatical?',
              options: [
                'Jeder hat nach drei Jahren Betriebszugehörigkeit einen Anspruch.',
                'In der Privatwirtschaft gibt es keinen allgemeinen Anspruch.',
                'Nur der Betriebsrat kann ein Sabbatical beantragen.',
              ],
              answer: 1,
              explanationRu: '«einen allgemeinen gesetzlichen Anspruch gibt es in der Privatwirtschaft nicht».',
            },
            {
              kind: 'mc',
              question: 'Wovon hängt es laut Dr. Hartwig vor allem ab, ob eine Auszeit der Karriere schadet?',
              options: ['von der Dauer der Auszeit', 'vom Alter der Beschäftigten', 'von einer gründlichen Vorbereitung'],
              answer: 2,
              explanationRu: '«dass es vor allem auf die Vorbereitung ankommt»: заместитель и договорённость о возвращении на должность.',
            },
            {
              kind: 'mc',
              question: 'In welchem Fall hält sie ein Sabbatical nicht für die richtige Lösung?',
              options: [
                'wenn die Unzufriedenheit von der Stelle selbst ausgeht',
                'wenn man Angehörige pflegen muss',
                'wenn man einen lang gehegten Plan verwirklichen möchte',
              ],
              answer: 0,
              explanationRu:
                '«Wenn das Problem der Job selbst ist, löst ein halbes Jahr Pause es nicht» — тогда честнее сменить профессиональное направление.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Unternehmen ohne Chefs?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin Hanna Vogt',
        B: 'Lisa Ehlers, Gründerin einer Softwarefirma',
        C: 'Dr. Martin Brückner, Organisationssoziologe',
      },
      situation: 'Sie hören eine Diskussion in der Radiosendung „Arbeitswelten“ über Unternehmen ohne klassische Hierarchien.',
      text: `A: Herzlich willkommen zu „Arbeitswelten“. Unser Thema heute: Unternehmen ohne Chefs. Was vor einigen Jahren noch als Spinnerei galt, probieren inzwischen auch etablierte Firmen aus. Frau Ehlers, Sie haben vor acht Jahren eine Softwarefirma gegründet, in der es keine klassischen Vorgesetzten gibt. Wie funktioniert das denn im Alltag?
B: Ganz ohne Struktur geht es natürlich nicht, das ist ein verbreitetes Missverständnis. Wir haben klar definierte Rollen und feste Regeln dafür, wie Entscheidungen getroffen werden. Der Unterschied ist, dass Verantwortung nicht an einer Position hängt, sondern an der jeweiligen Aufgabe. Wer ein Projekt leitet, entscheidet darüber – aber eben nur über dieses Projekt.
A: Herr Dr. Brückner, Sie beschäftigen sich wissenschaftlich mit solchen Modellen. Klingt doch eigentlich überzeugend, oder?
C: In der Theorie schon. Ich will auch gar nicht bestreiten, dass es Firmen gibt, in denen das hervorragend funktioniert. Mein Eindruck ist allerdings, dass Hierarchien in solchen Organisationen nicht verschwinden, sondern nur unsichtbar werden. Wer am lautesten redet oder am längsten dabei ist, hat dann eben informell das Sagen. Und gegen informelle Macht kann man sich viel schlechter wehren als gegen einen Chef, dessen Befugnisse klar geregelt sind.
B: Das Risiko sehe ich durchaus. Deshalb legen wir ja so viel Wert auf Transparenz. Bei uns sind zum Beispiel alle Gehälter offen einsehbar, und jede größere Entscheidung wird schriftlich begründet.
A: Offene Gehälter – das dürfte manchen unserer Zuhörerinnen und Zuhörer einen ziemlichen Schrecken einjagen.
B: Am Anfang war das auch bei uns nicht einfach, das gebe ich zu. Aber inzwischen möchte niemand mehr zurück. Neid entsteht nämlich vor allem dort, wo man nur Gerüchte kennt.
C: Ich würde gern noch einen anderen Punkt ansprechen. Selbstorganisation verlangt den Beschäftigten enorm viel ab: Sie müssen ständig mitentscheiden, Konflikte selbst austragen, sich abstimmen. Nicht jeder will das, und das ist auch völlig legitim. Es gibt Menschen, die gern eine klare Ansage bekommen und sich dann auf ihre fachliche Arbeit konzentrieren. Für die kann ein solches Modell regelrecht zur Belastung werden.
A: Frau Ehlers, verlieren Sie solche Leute?
B: Ehrlich gesagt: ja, gelegentlich. Wir sagen das aber schon im Bewerbungsgespräch ganz offen. Wer bei uns anfängt, weiß, worauf er sich einlässt. Und die Fluktuation ist bei uns deutlich niedriger, als es in der Branche üblich ist.
A: Lässt sich das Modell denn auf große Konzerne übertragen?
C: Da bin ich skeptisch. In einer Firma mit sechzig Leuten kennt jeder jeden. Bei sechzigtausend Beschäftigten an Standorten in zwanzig Ländern braucht man schlicht Strukturen, die Verbindlichkeit schaffen. Was ich mir allerdings gut vorstellen kann: dass einzelne Abteilungen oder Projektteams mehr Freiräume bekommen. Das wäre schon ein großer Fortschritt.
B: Da würde ich gar nicht widersprechen. Niemand muss das ganze Unternehmen auf einen Schlag umkrempeln. Man kann ruhig klein anfangen und schauen, was funktioniert.
A: Dann halte ich fest: Ganz ohne Regeln geht es nicht – aber vielleicht mit weniger Chefs. Vielen Dank Ihnen beiden.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was?',
          instructionRu: 'Вы слушаете дискуссию один раз. Кто что говорит?',
          options: ['Moderatorin Hanna Vogt', 'Lisa Ehlers', 'Dr. Martin Brückner'],
          items: [
            {
              kind: 'match',
              prompt: 'Entscheidungsbefugnisse hängen von der Aufgabe ab, nicht von einer festen Position.',
              answer: 1,
              explanationRu: 'Элерс: «dass Verantwortung nicht an einer Position hängt, sondern an der jeweiligen Aufgabe».',
            },
            {
              kind: 'match',
              prompt: 'In Organisationen ohne Vorgesetzte entsteht häufig verdeckte Macht.',
              answer: 2,
              explanationRu: 'Брюкнер: иерархии «nicht verschwinden, sondern nur unsichtbar werden» — появляется неформальная власть.',
            },
            {
              kind: 'match',
              prompt: 'Wenn alle wissen, was die anderen verdienen, entsteht weniger Missgunst.',
              answer: 1,
              explanationRu: 'Элерс: «Neid entsteht nämlich vor allem dort, wo man nur Gerüchte kennt».',
            },
            {
              kind: 'match',
              prompt: 'Die Offenlegung der Gehälter könnte beim Publikum Unbehagen auslösen.',
              answer: 0,
              explanationRu: 'Модератор: «das dürfte manchen unserer Zuhörerinnen und Zuhörer einen ziemlichen Schrecken einjagen».',
            },
            {
              kind: 'match',
              prompt: 'Manche Beschäftigte empfinden die ständige Mitbestimmung als Last.',
              answer: 2,
              explanationRu: 'Брюкнер: для людей, которые хотят чётких указаний, такая модель может стать «regelrecht zur Belastung».',
            },
            {
              kind: 'match',
              prompt: 'Wer sich bewirbt, wird frühzeitig über die besondere Arbeitsweise informiert.',
              answer: 1,
              explanationRu: 'Элерс: «Wir sagen das aber schon im Bewerbungsgespräch ganz offen».',
            },
            {
              kind: 'match',
              prompt: 'In großen Konzernen könnten zumindest einzelne Teams mehr Eigenständigkeit erhalten.',
              answer: 2,
              explanationRu: 'Брюкнер скептичен насчёт концернов, но допускает, что отдельные отделы или проектные команды получат больше свободы.',
            },
          ],
        },
      ],
    },
  ],
};
