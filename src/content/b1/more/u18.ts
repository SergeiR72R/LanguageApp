import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das ist der Mann, ___ Hund gestern bei uns im Garten war.',
      options: ['dessen', 'deren', 'dem', 'der'],
      answer: 0,
      explanationRu: '«Чья собака» — Genitiv. «Владелец» — der Mann (мужской род) → dessen.',
    },
    {
      type: 'choice',
      prompt: 'Meine Nachbarn, ___ Kinder ziemlich laut sind, sind trotzdem sehr nett.',
      options: ['deren', 'dessen', 'denen', 'die'],
      answer: 0,
      explanationRu: '«Владелец» — Nachbarn (множественное число) → deren. Не путайте с denen — это Dativ Plural.',
    },
    {
      type: 'choice',
      prompt: 'Es ist kalt. Ich ziehe ___ schnell eine Jacke an.',
      options: ['mich', 'mir', 'sich', 'meine'],
      answer: 1,
      explanationRu: 'Есть прямое дополнение (eine Jacke), поэтому возвратное местоимение в Dativ → mir.',
    },
    {
      type: 'choice',
      prompt: 'Warte kurz! Ich ziehe ___ schnell an, dann gehen wir.',
      options: ['mich', 'mir', 'sich', 'meine'],
      answer: 0,
      explanationRu: 'Ловушка: другого дополнения нет — одеваюсь «сам» → Akkusativ mich. Сравните: Ich ziehe mir eine Jacke an.',
    },
    {
      type: 'choice',
      prompt: '___ zu spät kommt, muss die erste Runde bezahlen.',
      options: ['Wer', 'Was', 'Der', 'Welcher'],
      answer: 0,
      explanationRu: 'Речь о любом человеке («тот, кто»), существительного перед придаточным нет → wer.',
    },
    {
      type: 'choice',
      prompt: 'Die Stadt, ___ ich meine beste Freundin kennengelernt habe, heißt Leipzig.',
      options: ['wo', 'was', 'die', 'wer'],
      answer: 0,
      explanationRu: 'После обозначения места можно использовать wo (= in der). die не подходит: kennenlernen уже имеет прямое дополнение (meine beste Freundin).',
    },
    {
      type: 'gap',
      prompt: 'Das ist meine Kollegin Ana, ___ Sohn mit meinem Sohn befreundet ist.',
      answers: ['deren'],
      explanationRu: '«Владелец» — Ana (женский род) → deren Sohn, без артикля.',
    },
    {
      type: 'gap',
      prompt: 'Das Kind, ___ Fahrrad gestohlen wurde, hat bitterlich geweint.',
      answers: ['dessen'],
      explanationRu: 'das Kind — средний род → dessen (как и для мужского рода).',
    },
    {
      type: 'gap',
      prompt: 'Die Freundin, ___ ich jeden Tag telefoniere, wohnt in Australien.',
      answers: ['mit der'],
      hintRu: 'предлог + относительное местоимение',
      explanationRu: 'telefonieren mit + Dativ; die Freundin → женский род, Dativ → mit der.',
    },
    {
      type: 'gap',
      prompt: 'Das Thema, ___ wir uns gestritten haben, war eigentlich ganz unwichtig.',
      answers: ['über das', 'worüber'],
      hintRu: 'sich streiten über + Akk',
      explanationRu: 'sich streiten über + Akkusativ; das Thema → средний род → über das (в разговорной речи также worüber).',
    },
    {
      type: 'gap',
      prompt: 'Du siehst so müde aus. Gönn ___ doch mal einen freien Tag!',
      answers: ['dir'],
      explanationRu: 'sich (Dat) etwas gönnen — «позволить себе». Прямое дополнение — einen freien Tag, поэтому местоимение в Dativ: dir.',
    },
    {
      type: 'gap',
      prompt: 'Wir haben ___ gestern einen lustigen Film angesehen.',
      answers: ['uns'],
      explanationRu: 'Для wir формы Dativ и Akkusativ совпадают: uns. Разница между mir/mich есть только у ich и du.',
    },
    {
      type: 'gap',
      prompt: 'Ich habe ganz vergessen, ___ für das schöne Geschenk zu bedanken.',
      answers: ['mich'],
      explanationRu: 'Повторение юнитов 4 и 10: sich bedanken für + Akk — другого прямого дополнения нет, поэтому mich (Akk). В инфинитивном обороте с zu возвратное местоимение сохраняется.',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich du ___, würde ich mich bei ihr entschuldigen.',
      answers: ['wäre'],
      explanationRu: 'Повторение юнита 8: совет с Konjunktiv II — Wenn ich du wäre, würde ich …',
    },
    {
      type: 'order',
      words: ['Er', 'ist', 'ein', 'Mensch,', 'dessen', 'Ehrlichkeit', 'ich', 'sehr', 'schätze.'],
      translationRu: 'Он человек, честность которого я очень ценю.',
      explanationRu: 'dessen + существительное без артикля открывают придаточное, спрягаемый глагол schätze стоит в конце.',
    },
    {
      type: 'order',
      words: ['Alles,', 'was', 'sie', 'mir', 'erzählt', 'hat,', 'war', 'gelogen.'],
      translationRu: 'Всё, что она мне рассказала, было ложью.',
      explanationRu: 'После alles — was. Придаточное стоит внутри главного предложения и выделяется запятыми с двух сторон.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения: используйте предлог + относительное местоимение.',
      prompt: 'Das ist mein Freund Ali. Ich kann mich immer auf ihn verlassen.',
      answers: ['Das ist mein Freund Ali, auf den ich mich immer verlassen kann.'],
      explanationRu: 'sich verlassen auf + Akk; Ali → мужской род → auf den. Модальный глагол kann стоит в конце придаточного.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью deren.',
      prompt: 'Ich habe zwei Freundinnen. Ihre Eltern kommen aus Polen.',
      answers: ['Ich habe zwei Freundinnen, deren Eltern aus Polen kommen.'],
      explanationRu: 'ihre Eltern → deren Eltern («владельцы» — две подруги, множественное число). Глагол kommen уходит в конец.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите начало предложения с помощью wer.',
      prompt: 'Jemand, der viel lacht, lebt länger.',
      answers: ['Wer viel lacht, lebt länger.'],
      explanationRu: 'Конструкцию «jemand, der …» можно заменить обобщающим wer («тот, кто»). Главное предложение начинается с глагола lebt.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите как просьбу в повелительном наклонении (du).',
      prompt: 'Du sollst dir vor dem Essen die Hände waschen.',
      answers: ['Wasch dir vor dem Essen die Hände!', 'Wasche dir vor dem Essen die Hände!', 'Wasch dir vor dem Essen die Hände.'],
      explanationRu: 'Императив для du: Wasch(e)! Возвратное местоимение остаётся в Dativ (dir), потому что есть прямое дополнение die Hände.',
    },
  ],
  reading: [
    {
      title: 'Meine beste Freundin wohnt über 3000 Kilometer weit weg',
      textType: 'Blogbeitrag',
      texts: [
        {
          body: `Hallo zusammen! Ich bin Olga, 29, und lebe seit vier Jahren in Freiburg. Heute möchte ich über ein Thema schreiben, das mich schon lange beschäftigt: Freundschaft über große Entfernungen.

Meine beste Freundin Dascha kenne ich seit der fünften Klasse. Wir haben in Jekaterinburg in derselben Straße gewohnt und eigentlich alles zusammen gemacht. Als ich nach Deutschland gegangen bin, hatte ich große Angst, dass unsere Freundschaft das nicht überlebt. Am Anfang haben wir jeden Abend telefoniert, was natürlich nicht lange geklappt hat. Ich hatte einen neuen Job, einen Sprachkurs und tausend Formulare, und Dascha hat in dieser Zeit geheiratet.

Nach einem Jahr gab es eine kleine Krise: Dascha war beleidigt, weil ich ihren Geburtstag vergessen hatte. Ich hatte ein furchtbar schlechtes Gewissen. Wir haben dann lange gesprochen und uns versprochen, ehrlicher zu sein, wenn uns etwas stört.

Heute haben wir eine Regel, die wirklich hilft: Jeden ersten Sonntag im Monat machen wir einen Videoanruf, für den wir uns mindestens zwei Stunden Zeit nehmen. Außerdem schicken wir uns Sprachnachrichten, wenn etwas Lustiges passiert. Einmal im Jahr besuchen wir uns – mal bei ihr, mal bei mir.

In Freiburg habe ich inzwischen auch neue Freundinnen gefunden, mit denen ich wandern oder ins Kino gehe. Das ist schön, aber anders. Wer seit fast zwanzig Jahren befreundet ist, muss nicht viel erklären. Dascha versteht mich oft schon, bevor ich etwas gesagt habe.

Habt ihr auch Freunde, die weit weg wohnen? Wie haltet ihr den Kontakt? Schreibt es mir in die Kommentare!`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Olga und Dascha kennen sich seit ihrer Schulzeit.', answer: true, explanationRu: '«Meine beste Freundin Dascha kenne ich seit der fünften Klasse».' },
            { kind: 'tf', statement: 'Nach Olgas Umzug haben die beiden lange Zeit jeden Abend telefoniert.', answer: false, explanationRu: 'Они звонили каждый вечер только вначале, «was natürlich nicht lange geklappt hat».' },
            { kind: 'tf', statement: 'Dascha war gekränkt, weil Olga ihren Geburtstag vergessen hatte.', answer: true, explanationRu: '«Dascha war beleidigt, weil ich ihren Geburtstag vergessen hatte».' },
            { kind: 'tf', statement: 'Die beiden telefonieren jeden Sonntag per Video miteinander.', answer: false, explanationRu: 'Не каждое воскресенье, а «jeden ersten Sonntag im Monat».' },
            { kind: 'tf', statement: 'Olga und Dascha besuchen sich abwechselnd.', answer: true, explanationRu: '«Einmal im Jahr besuchen wir uns – mal bei ihr, mal bei mir».' },
            { kind: 'tf', statement: 'Die neuen Freundschaften in Freiburg sind für Olga genauso eng wie die Freundschaft mit Dascha.', answer: false, explanationRu: '«Das ist schön, aber anders» — с Дашей не нужно ничего объяснять.' },
          ],
        },
      ],
    },
    {
      title: 'Zusammen statt allein – Besuchsdienst für Seniorinnen und Senioren',
      textType: 'Informationstext / Regeln',
      texts: [
        {
          body: `Viele ältere Menschen in unserer Stadt leben allein und haben kaum Kontakt zu anderen. Unser Besuchsdienst bringt Ehrenamtliche mit Seniorinnen und Senioren zusammen. Bitte lesen Sie die folgenden Regeln, bevor Sie sich anmelden.

Wer kann mitmachen? Ehrenamtliche müssen mindestens 18 Jahre alt sein. Vor dem ersten Besuch nehmen alle an einem kostenlosen Einführungsabend teil, an dem wir über Gesprächsführung und Datenschutz informieren. Außerdem brauchen wir ein polizeiliches Führungszeugnis; die Kosten dafür übernimmt die Stadt.

Wie oft finden die Besuche statt? Wir erwarten, dass Sie Ihre Partnerin oder Ihren Partner mindestens einmal pro Woche für ein bis zwei Stunden besuchen. Wenn Sie einmal nicht kommen können, sagen Sie bitte rechtzeitig direkt bei der Person ab, die auf Sie wartet. Wenn Sie länger verhindert sind, zum Beispiel wegen eines Urlaubs, informieren Sie bitte zusätzlich unser Büro.

Was machen wir bei den Besuchen? Spazieren gehen, Kaffee trinken, Karten spielen oder einfach reden – das entscheiden Sie gemeinsam. Pflegerische Aufgaben, also zum Beispiel Hilfe beim Waschen oder bei Medikamenten, gehören ausdrücklich nicht dazu.

Geld und Geschenke: Ehrenamtliche dürfen kein Geld und keine wertvollen Geschenke annehmen. Kleine Aufmerksamkeiten wie ein Stück Kuchen sind natürlich in Ordnung. Fahrtkosten bis zu 20 Euro im Monat erstatten wir Ihnen gegen Beleg.

Und wenn es nicht passt? Nicht jede Beziehung funktioniert. Wenn Sie sich mit Ihrem Partner oder Ihrer Partnerin nicht verstehen, wenden Sie sich bitte an unsere Koordinatorin, Frau Yılmaz. Sie sucht dann gemeinsam mit Ihnen nach einer neuen Lösung.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie für die Aufgaben 1–4 die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите правильный ответ a, b или c для заданий 1–4.',
          items: [
            {
              kind: 'mc',
              question: 'Was müssen Ehrenamtliche vor dem ersten Besuch tun?',
              options: ['Einen Kurs bezahlen.', 'An einem Informationsabend teilnehmen.', 'Einen Pflegekurs machen.'],
              answer: 1,
              explanationRu: '«Vor dem ersten Besuch nehmen alle an einem kostenlosen Einführungsabend teil». Он бесплатный, а уход за пожилыми в задачи не входит.',
            },
            {
              kind: 'mc',
              question: 'Sie können am Donnerstag nicht zum Besuch kommen. Was sollen Sie tun?',
              options: ['Dem Büro eine E-Mail schreiben.', 'Nichts, das ist kein Problem.', 'Der Seniorin oder dem Senior selbst Bescheid sagen.'],
              answer: 2,
              explanationRu: '«…sagen Sie bitte rechtzeitig direkt bei der Person ab, die auf Sie wartet». Бюро сообщают только при долгом отсутствии.',
            },
            {
              kind: 'mc',
              question: 'Was gehört nicht zu den Aufgaben der Ehrenamtlichen?',
              options: ['Mit der Person spazieren gehen.', 'Bei der Körperpflege helfen.', 'Zusammen Karten spielen.'],
              answer: 1,
              explanationRu: '«Pflegerische Aufgaben, also zum Beispiel Hilfe beim Waschen … gehören ausdrücklich nicht dazu».',
            },
            {
              kind: 'mc',
              question: 'Was gilt beim Thema Geld?',
              options: [
                'Ehrenamtliche bekommen einen Teil ihrer Fahrtkosten zurück.',
                'Ehrenamtliche dürfen kleine Geldgeschenke annehmen.',
                'Ehrenamtliche müssen das Führungszeugnis selbst bezahlen.',
              ],
              answer: 0,
              explanationRu: 'Проезд до 20 евро в месяц возмещают по чеку. Деньги принимать нельзя, справку оплачивает город.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Nachricht auf der Mailbox',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Hallo Nina, hier ist Carla. Du, ich wollte dir nur kurz sagen: Die Überraschungsparty für Ben findet nicht am Freitag statt, sondern schon am Donnerstag, weil Ben am Freitag beruflich nach München fliegen muss. Wir treffen uns um sieben bei Lukas, dessen Wohnung ja am größten ist. Ben kommt um halb acht, also sei bitte pünktlich! Kannst du dir vielleicht noch überlegen, was wir ihm zusammen schenken können? Ich dachte an einen Gutschein für das Kletterzentrum, aber du kennst ihn viel besser als ich. Und bitte verrat nichts – Ben darf auf keinen Fall etwas merken! Ruf mich einfach zurück, ich bin heute Abend zu Hause. Tschüss!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Die Party für Ben findet am Freitag statt.', answer: false, explanationRu: '«…nicht am Freitag …, sondern schon am Donnerstag».' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Worum bittet Carla Nina?',
              options: ['Einen Gutschein im Kletterzentrum zu kaufen.', 'Eine Idee für ein gemeinsames Geschenk zu finden.', 'Ben zur Party einzuladen.'],
              answer: 1,
              explanationRu: '«Kannst du dir vielleicht noch überlegen, was wir ihm zusammen schenken können?» Сертификат — лишь идея Карлы, а Бен ничего не должен знать.',
            },
          ],
        },
      ],
    },
    {
      title: 'Nach dem Klassentreffen',
      kind: 'dialog',
      speakers: { A: 'Anna', B: 'Murat, ihr Kollege' },
      situation: 'Sie hören ein Gespräch zwischen zwei Kollegen in der Kantine.',
      text: `A: Hallo Murat! Ist hier noch frei?
B: Klar, Anna, setz dich. Na, wie war dein Wochenende? Du warst doch auf diesem Klassentreffen, oder?
A: Ja, genau. Fünfzehn Jahre nach dem Abitur! Ich war vorher total nervös, weil ich viele Leute so lange nicht gesehen hatte.
B: Und? Hast du alle wiedererkannt?
A: Fast alle. Nur Jonas, mit dem ich früher immer Mathe gelernt habe, habe ich zuerst gar nicht erkannt. Er hat jetzt einen langen Bart und ist Lehrer – an unserer alten Schule!
B: Ha, das ist ja witzig. Und deine beste Freundin aus der Schulzeit, war die auch da?
A: Leider nicht. Kathrin wohnt jetzt in Kanada, und der Flug ist einfach zu teuer. Aber wir haben sie per Video angerufen, und alle haben ihr zugewinkt. Das war echt süß.
B: Schön. Und gab es auch Leute, die du nicht so gern wiedergesehen hast?
A: Na ja, Melanie, die mich in der Schule immer geärgert hat. Ich hatte damals richtig Angst vor ihr. Aber stell dir vor: Sie hat sich bei mir entschuldigt! Sie hat erzählt, dass sie damals selbst viele Probleme zu Hause hatte.
B: Wow. Das finde ich ziemlich mutig von ihr.
A: Ja, ich war richtig gerührt. Wir haben dann lange geredet und uns sogar für nächsten Monat zum Kaffee verabredet.
B: Toll. Und was habt ihr sonst noch gemacht?
A: Wir haben uns alte Fotos angesehen, die unsere Klassenlehrerin mitgebracht hatte. Frau Berger ist inzwischen siebzig und immer noch so lustig wie früher. Und dann haben wir bis drei Uhr morgens getanzt.
B: Bis drei Uhr? Kein Wunder, dass du heute so müde aussiehst!
A: Stimmt. Ich habe mir für heute Abend nur eins vorgenommen: früh ins Bett gehen!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слышите разговор один раз. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Anna war vor dem Klassentreffen aufgeregt.', answer: true, explanationRu: '«Ich war vorher total nervös».' },
            { kind: 'tf', statement: 'Jonas unterrichtet heute an der Schule, die Anna früher besucht hat.', answer: true, explanationRu: '«…ist Lehrer – an unserer alten Schule!»' },
            { kind: 'tf', statement: 'Kathrin ist für das Treffen aus Kanada gekommen.', answer: false, explanationRu: 'Её не было — перелёт слишком дорогой; ей позвонили по видеосвязи.' },
            { kind: 'tf', statement: 'Melanie hat sich für ihr Verhalten in der Schulzeit entschuldigt.', answer: true, explanationRu: '«Sie hat sich bei mir entschuldigt!»' },
            { kind: 'tf', statement: 'Anna möchte keinen Kontakt mehr zu Melanie.', answer: false, explanationRu: 'Наоборот, они договорились встретиться за кофе в следующем месяце.' },
            { kind: 'tf', statement: 'Die Klassenlehrerin hat alte Fotos mitgebracht.', answer: true, explanationRu: '«…alte Fotos …, die unsere Klassenlehrerin mitgebracht hatte».' },
            { kind: 'tf', statement: 'Anna will heute Abend noch ausgehen.', answer: false, explanationRu: '«Ich habe mir für heute Abend nur eins vorgenommen: früh ins Bett gehen!»' },
          ],
        },
      ],
    },
  ],
};
