import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich ___ so gern einmal nach Island fahren.',
      options: ['würde', 'wurde', 'werde', 'wäre'],
      answer: 0,
      explanationRu: 'Желание: würde + Infinitiv. wurde (без умлаута) — претерит от werden, wäre — Konjunktiv II от sein, с fahren не сочетается.',
    },
    {
      type: 'choice',
      prompt: 'Wenn wir einen Garten ___, könnten wir eigenes Gemüse anbauen.',
      options: ['hatten', 'hätten', 'haben', 'würden'],
      answer: 1,
      explanationRu: 'Нереальное условие (сада у нас нет) → hätten. hatten — претерит («у нас был сад»), смысл другой.',
    },
    {
      type: 'choice',
      prompt: 'Was ___ du an meiner Stelle machen?',
      options: ['wärst', 'hättest', 'würdest', 'würde'],
      answer: 2,
      explanationRu: 'Вопрос-совет: würdest du … machen? Форма для du — würdest (с -st).',
    },
    {
      type: 'choice',
      prompt: 'Es wäre toll, wenn du mir bei der Bewerbung helfen ___.',
      options: ['kannst', 'konntest', 'könnte', 'könntest'],
      answer: 3,
      explanationRu: 'Вежливое желание в Konjunktiv II: du könntest (умлаут + -st). konntest — претерит, könnte — форма для ich/er.',
    },
    {
      type: 'choice',
      prompt: 'Wenn es morgen regnet, ___ wir ins Kino.',
      options: ['gehen', 'wären', 'hätten', 'würden'],
      answer: 0,
      explanationRu: 'Ловушка: это реальное условие (завтра вполне может пойти дождь), поэтому нужен обычный индикатив: Wenn es regnet, gehen wir … Одно würden без инфинитива невозможно.',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ gern, wie viel so eine Weltreise ungefähr kostet.',
      options: ['wusste', 'wüsste', 'weiß würde', 'wüssten'],
      answer: 1,
      explanationRu: 'wissen имеет собственную форму Konjunktiv II: ich wüsste. Ich wüsste gern … = вежливое «я хотел бы знать …».',
    },
    {
      type: 'gap',
      prompt: 'Du ___ dich bei mehreren Firmen bewerben, nicht nur bei einer.',
      answers: ['solltest', 'könntest', 'müsstest'],
      explanationRu: 'Совет: du solltest (или könntest) + Infinitiv в конце. У sollen в Konjunktiv II нет умлаута.',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich besser Englisch ___, hätte ich im Job bessere Chancen.',
      answers: ['könnte', 'sprechen würde', 'spräche', 'sprechen könnte'],
      explanationRu: 'Нереальное условие: Englisch können → wenn ich besser Englisch könnte (или sprechen würde). Глагол стоит в конце придаточного.',
    },
    {
      type: 'gap',
      prompt: '___ Sie mir bitte sagen, wann der Kurs beginnt?',
      answers: ['Könnten', 'Würden'],
      explanationRu: 'Вежливая просьба: Könnten/Würden Sie …? Глагол на первом месте, инфинитив sagen — в конце.',
    },
    {
      type: 'gap',
      prompt: 'Ihr ___ mal eine Auszeit nehmen, ihr seht total gestresst aus.',
      answers: ['solltet', 'müsstet', 'könntet'],
      explanationRu: 'Совет для ihr: ihr solltet (окончание -t). Также возможно müsstet/könntet.',
    },
    {
      type: 'gap',
      prompt: 'Wenn wir nicht so weit weg ___, würden wir euch öfter besuchen.',
      answers: ['wohnten', 'wohnen würden'],
      explanationRu: 'У слабых глаголов Konjunktiv II совпадает с претеритом (wohnten), поэтому в речи чаще говорят wohnen würden. Оба варианта верны.',
    },
    {
      type: 'gap',
      prompt: 'Es ___ schön, wenn wir uns im Sommer wiedersehen könnten.',
      answers: ['wäre'],
      explanationRu: 'Es wäre schön, wenn … — типичная формула желания. sein → wäre.',
    },
    {
      type: 'gap',
      prompt: 'Ich wäre viel ___, wenn ich weniger arbeiten müsste.',
      answers: ['zufriedener'],
      hintRu: 'zufrieden (Komparativ)',
      explanationRu: 'Повторение раздела 07: сравнительная степень zufrieden → zufriedener; viel усиливает её. В придаточном müsste — Konjunktiv II от müssen.',
    },
    {
      type: 'order',
      words: ['An', 'deiner', 'Stelle', 'würde', 'ich', 'mehr', 'Sport', 'machen.'],
      translationRu: 'На твоём месте я бы больше занимался спортом.',
      explanationRu: 'An deiner Stelle занимает первое место, würde — второе, инфинитив machen — в конце.',
    },
    {
      type: 'order',
      words: ['Wenn', 'ich', 'reich', 'wäre,', 'würde', 'ich', 'mir', 'ein', 'großes', 'Haus', 'kaufen.'],
      translationRu: 'Если бы я был богат, я бы купил себе большой дом.',
      explanationRu: 'wäre в конце придаточного, главное начинается с würde. Повторение раздела 06: ein großes Haus (Akk. ср. р. после ein → -es).',
    },
    {
      type: 'order',
      words: ['Ich', 'hätte', 'gern', 'einen', 'Job,', 'bei', 'dem', 'ich', 'mehr', 'reisen', 'könnte.'],
      translationRu: 'Мне хотелось бы иметь работу, на которой я мог бы больше путешествовать.',
      explanationRu: 'Ich hätte gern … — вежливое желание. Повторение раздела 05: относительное придаточное bei dem …, модальный глагол könnte в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите нереальное желание (wenn … doch nur / Konjunktiv II).',
      prompt: 'Ich habe keine Zeit für meine Hobbys.',
      answers: ['Wenn ich doch nur Zeit für meine Hobbys hätte!', 'Wenn ich nur Zeit für meine Hobbys hätte!', 'Wenn ich doch Zeit für meine Hobbys hätte!', 'Hätte ich doch nur Zeit für meine Hobbys!', 'Hätte ich doch Zeit für meine Hobbys!'],
      explanationRu: 'Отрицание исчезает (keine Zeit → Zeit), haben → hätte в конце предложения с wenn. Частицы doch/nur усиливают желание.',
    },
    {
      type: 'transform',
      instructionRu: 'Превратите повелительное наклонение в совет с sollte.',
      prompt: 'Mach doch mal eine Pause!',
      answers: ['Du solltest mal eine Pause machen.', 'Du solltest eine Pause machen.', 'Du solltest doch mal eine Pause machen.'],
      explanationRu: 'Совет мягче приказа: du solltest + Infinitiv (machen) в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Сформулируйте нереальное условие с wenn.',
      prompt: 'Es ist zu kalt. Deshalb gehen wir nicht schwimmen.',
      answers: ['Wenn es nicht so kalt wäre, würden wir schwimmen gehen.', 'Wenn es nicht zu kalt wäre, würden wir schwimmen gehen.', 'Wenn es wärmer wäre, würden wir schwimmen gehen.', 'Wenn es nicht so kalt wäre, gingen wir schwimmen.', 'Wenn es wärmer wäre, gingen wir schwimmen.'],
      explanationRu: 'Реальность меняется на противоположную: zu kalt → nicht so kalt / wärmer; nicht gehen → würden gehen. Глагол wäre — в конце придаточного.',
    },
    {
      type: 'transform',
      instructionRu: 'Сделайте фразу вежливой с помощью Konjunktiv II от haben.',
      prompt: 'Ich will einen Termin am Montag.',
      answers: ['Ich hätte gern einen Termin am Montag.', 'Ich hätte gerne einen Termin am Montag.'],
      explanationRu: 'Ich will … звучит грубо. Вежливо: Ich hätte gern … (= Ich möchte …).',
    },
  ],
  reading: [
    {
      title: 'Merkblatt: Das Sabbatjahr',
      textType: 'Informationstext',
      texts: [
        {
          heading: 'Merkblatt: Das Sabbatjahr bei der Nordwind Versicherung AG',
          body: `Sie träumen von einer längeren Auszeit – zum Beispiel für eine Weltreise, eine Weiterbildung oder mehr Zeit mit der Familie? Mit unserem Sabbatjahr-Modell können Sie diesen Wunsch verwirklichen.

1. Wer kann teilnehmen?
Alle Mitarbeiterinnen und Mitarbeiter mit einem unbefristeten Vertrag, die seit mindestens drei Jahren bei uns beschäftigt sind. Auszubildende können leider nicht teilnehmen.

2. Wie funktioniert das Modell?
Sie arbeiten weiterhin voll, bekommen aber über einen festgelegten Zeitraum (zwei bis sechs Jahre) nur einen Teil Ihres Gehalts ausgezahlt. Den Rest sparen Sie auf einem Zeitkonto. Während der Auszeit (drei bis zwölf Monate) bekommen Sie aus diesem Konto weiterhin jeden Monat Geld. Sie bleiben in dieser Zeit kranken- und rentenversichert.

3. Wie stelle ich einen Antrag?
Den Antrag stellen Sie schriftlich bei der Personalabteilung, spätestens sechs Monate vor Beginn der Sparphase. Bitte besprechen Sie Ihren Plan vorher mit Ihrer Teamleitung.

4. Und nach der Auszeit?
Nach Ihrer Rückkehr haben Sie das Recht auf einen gleichwertigen Arbeitsplatz. Das muss aber nicht genau Ihre alte Stelle sein.

5. Was passiert, wenn sich meine Pläne ändern?
Wenn Sie die Auszeit nicht nehmen können, zum Beispiel wegen einer Krankheit, bekommen Sie das gesparte Geld vollständig ausgezahlt.

Bei Fragen erreichen Sie Frau Demir aus der Personalabteilung unter der Durchwahl 214.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aufgaben und den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте памятку и выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Wer darf ein Sabbatjahr machen?',
              options: ['alle Auszubildenden', 'Mitarbeiter mit unbefristetem Vertrag, die seit drei Jahren in der Firma sind', 'nur Mitarbeiter mit Kindern'],
              answer: 1,
              explanationRu: 'Пункт 1: бессрочный договор и не менее трёх лет в фирме. Ученики (Auszubildende) участвовать не могут.',
            },
            {
              kind: 'mc',
              question: 'Wie funktioniert das Modell?',
              options: ['Man bekommt eine Zeit lang weniger Gehalt ausgezahlt und spart den Rest.', 'Während der Auszeit bekommt man kein Geld.', 'Man muss vorher viele Überstunden machen.'],
              answer: 0,
              explanationRu: 'Пункт 2: работаете полностью, но получаете часть зарплаты, остальное копится на счёте и выплачивается во время отпуска.',
            },
            {
              kind: 'mc',
              question: 'Was muss man beim Antrag beachten?',
              options: ['Man gibt ihn mündlich bei der Teamleitung ab.', 'Man reicht ihn spätestens sechs Monate vor Beginn der Auszeit ein.', 'Man reicht ihn spätestens sechs Monate vor Beginn der Sparphase schriftlich ein.'],
              answer: 2,
              explanationRu: 'Пункт 3: заявление подают письменно в отдел кадров не позднее чем за шесть месяцев до начала фазы накопления (Sparphase), а не самого отпуска.',
            },
            {
              kind: 'mc',
              question: 'Was gilt nach der Rückkehr?',
              options: ['Man bekommt auf jeden Fall seinen alten Arbeitsplatz zurück.', 'Man hat ein Recht auf eine gleichwertige Stelle.', 'Man muss sich neu bewerben.'],
              answer: 1,
              explanationRu: 'Пункт 4: право на равноценное рабочее место, но не обязательно на прежнее.',
            },
          ],
        },
      ],
    },
    {
      title: 'Café-Traum: Soll ich es wagen?',
      textType: 'Blogbeitrag',
      texts: [
        {
          heading: 'Café-Traum: Soll ich es wagen?',
          body: `Seit Jahren träume ich davon, ein eigenes kleines Café zu eröffnen. Bis jetzt war das nur ein Traum, aber letzte Woche ist etwas passiert: Die Bäckerei an der Ecke, in der ich jeden Morgen meine Brötchen kaufe, schließt im Sommer. Die Besitzerin, Frau Haller, geht in Rente und sucht jemanden, der den Laden übernimmt.

Ich habe sofort an mein Café gedacht. Der Raum ist hell, es gibt eine kleine Terrasse, und die Miete ist für diese Lage wirklich fair. Wenn ich den Laden übernehmen würde, könnte ich selbst gebackenen Kuchen und guten Kaffee anbieten – und am Wochenende vielleicht kleine Konzerte.

Aber ich bin auch unsicher. Im Moment habe ich einen sicheren Job als Bankkaufmann. Mein Gehalt ist gut, und meine Kollegen sind nett. Meine Frau findet die Idee schön, sagt aber: „Wenn du kündigst, haben wir ein Jahr lang wahrscheinlich viel weniger Geld.“ Da hat sie natürlich recht.

Mein bester Freund Ali hat mir geraten, nicht sofort zu kündigen. Er meint, ich sollte zuerst mit meinem Chef sprechen. Vielleicht könnte ich ein Jahr lang nur halbtags arbeiten. Das finde ich eine gute Idee. Nächste Woche habe ich außerdem einen Termin bei der Gründungsberatung der Stadt. Die Beratung ist zum Glück kostenlos.

Was meint ihr? Würdet ihr an meiner Stelle das Risiko eingehen? Ich freue mich über eure Kommentare!

Tobias`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Tobias kauft regelmäßig in der Bäckerei an der Ecke ein.',
              answer: true,
              explanationRu: 'Верно: «in der ich jeden Morgen meine Brötchen kaufe».',
            },
            {
              kind: 'tf',
              statement: 'Frau Haller schließt die Bäckerei, weil sie umzieht.',
              answer: false,
              explanationRu: 'Неверно: она уходит на пенсию («geht in Rente»).',
            },
            {
              kind: 'tf',
              statement: 'Tobias findet die Miete für den Laden zu hoch.',
              answer: false,
              explanationRu: 'Неверно: «die Miete ist für diese Lage wirklich fair».',
            },
            {
              kind: 'tf',
              statement: 'Tobias ist mit seiner jetzigen Arbeit unzufrieden.',
              answer: false,
              explanationRu: 'Неверно: у него надёжная работа, хорошая зарплата и приятные коллеги.',
            },
            {
              kind: 'tf',
              statement: 'Ali rät Tobias, zuerst mit seinem Chef zu sprechen.',
              answer: true,
              explanationRu: 'Верно: «Er meint, ich sollte zuerst mit meinem Chef sprechen».',
            },
            {
              kind: 'tf',
              statement: 'Tobias lässt sich bald zur Gründung eines Geschäfts beraten.',
              answer: true,
              explanationRu: 'Верно: на следующей неделе у него встреча в городской консультации для основателей бизнеса (Gründungsberatung).',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Traum vom Reisen',
      kind: 'dialog',
      speakers: { A: 'Sandra', B: 'Paul, ihr Kollege' },
      situation: 'Sie hören ein Gespräch zwischen zwei Kollegen in der Kantine.',
      text: `A: Na, Paul, du siehst so nachdenklich aus. Alles in Ordnung?
B: Ja, ja. Ich habe nur gestern mit meiner Schwester telefoniert. Sie macht gerade ein Sabbatjahr und ist zurzeit in Kanada. Sie arbeitet dort auf einer Farm und schickt mir jeden Tag Fotos von Bergen und Seen.
A: Wie schön! Und jetzt möchtest du am liebsten auch los?
B: Ehrlich gesagt, ja. Wenn ich könnte, würde ich sofort kündigen und ein halbes Jahr durch Südamerika reisen.
A: Und warum machst du es nicht?
B: Na ja, ich habe gerade eine Wohnung gekauft. Wenn ich keinen Kredit hätte, wäre alles viel einfacher.
A: Verstehe. Aber du musst ja nicht gleich kündigen. Bei uns in der Firma gibt es doch dieses Sabbatical-Modell. Meine Kollegin aus der Buchhaltung hat das letztes Jahr gemacht.
B: Wirklich? Davon wusste ich gar nichts. Wie funktioniert das denn?
A: Soweit ich weiß, arbeitet man ein paar Jahre voll, bekommt aber weniger Geld. Und dann hat man ein paar Monate frei und bekommt trotzdem Gehalt.
B: Hm, das klingt interessant. Aber drei Jahre warten … Dann bin ich ja schon fast vierzig.
A: Na und? Mit vierzig kann man doch auch noch reisen! Und in der Zeit könntest du noch Spanisch lernen.
B: Stimmt, mein Spanisch ist wirklich schlecht. Ich kann gerade mal „hola“ und „gracias“ sagen.
A: Siehst du! Ich an deiner Stelle würde morgen einfach mal mit der Personalabteilung sprechen.
B: Weißt du was? Das mache ich. Danke, Sandra! Und wenn es klappt, schicke ich dir eine Postkarte aus Peru.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aussagen. Hören Sie dann das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Pauls Schwester arbeitet zurzeit in Kanada.',
              answer: true,
              explanationRu: 'Верно: сестра в творческом отпуске и работает на ферме в Канаде.',
            },
            {
              kind: 'tf',
              statement: 'Paul möchte am liebsten auch nach Kanada reisen.',
              answer: false,
              explanationRu: 'Неверно: он мечтает полгода путешествовать по Южной Америке.',
            },
            {
              kind: 'tf',
              statement: 'Paul hat vor Kurzem eine Wohnung gekauft.',
              answer: true,
              explanationRu: 'Верно: «ich habe gerade eine Wohnung gekauft» — поэтому у него кредит.',
            },
            {
              kind: 'tf',
              statement: 'Paul kennt das Sabbatical-Modell der Firma schon lange.',
              answer: false,
              explanationRu: 'Неверно: «Davon wusste ich gar nichts».',
            },
            {
              kind: 'tf',
              statement: 'Sandra hat letztes Jahr selbst ein Sabbatical gemacht.',
              answer: false,
              explanationRu: 'Неверно: это сделала её коллега из бухгалтерии.',
            },
            {
              kind: 'tf',
              statement: 'Paul spricht schon ziemlich gut Spanisch.',
              answer: false,
              explanationRu: 'Неверно: его испанский «wirklich schlecht», он знает только «hola» и «gracias».',
            },
            {
              kind: 'tf',
              statement: 'Paul will mit der Personalabteilung sprechen.',
              answer: true,
              explanationRu: 'Верно: на совет Сандры он отвечает «Das mache ich».',
            },
          ],
        },
      ],
    },
    {
      title: 'Drei kurze Texte: Reise, Gewinnspiel, Bildungsmesse',
      kind: 'monolog',
      situation: 'Sie hören drei kurze Texte: eine Nachricht auf dem Anrufbeantworter, eine Ansage im Radio und eine Durchsage auf einer Messe. Sie hören jeden Text zweimal.',
      text: `Text 1. Hallo, Herr Kowalski, hier spricht Anja Roth vom Reisebüro Fernweh. Sie hatten uns ja nach einer Reise nach Japan im Oktober gefragt. Ich habe gute Nachrichten: Für die Gruppenreise vom fünften bis neunzehnten Oktober gibt es noch zwei freie Plätze. Der Preis liegt bei 2890 Euro pro Person, Flug und Hotel inklusive. Wenn Sie Interesse haben, sollten Sie sich bis Freitag bei mir melden, denn die Plätze sind sehr gefragt. Sie erreichen mich unter 0711 556230. Einen schönen Tag noch!

Text 2. Und jetzt zu unserem großen Sommer-Gewinnspiel „Dein Traum, unser Geld“! Erzählen Sie uns, welchen Traum Sie sich schon immer erfüllen wollten – eine Ballonfahrt, einen Tanzkurs oder vielleicht einen Fallschirmsprung? Schicken Sie uns bis Sonntag eine Sprachnachricht über unsere App. Jede Woche wählt unsere Jury den schönsten Traum aus und bezahlt ihn – bis zu 3000 Euro. Bitte beachten Sie: Mitmachen dürfen alle ab 18 Jahren.

Text 3. Liebe Besucherinnen und Besucher der Bildungsmesse, in zehn Minuten beginnt in Halle 2, Raum B, unser Vortrag „Ein Jahr im Ausland – aber wie?“. Dort erfahren Sie, wie Sie ein Auslandsjahr planen und finanzieren können. Achtung: Der Vortrag findet nicht, wie im Programm angegeben, in Halle 3 statt, sondern in Halle 2. Der Eintritt ist frei, eine Anmeldung ist nicht nötig.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Text 1: Ist die Aussage richtig oder falsch? Wählen Sie dann die richtige Antwort a, b oder c.',
          instructionRu: 'Текст 1: верно ли утверждение? Затем выберите правильный ответ.',
          items: [
            {
              kind: 'tf',
              statement: 'Für die Japanreise im Oktober gibt es keine freien Plätze mehr.',
              answer: false,
              explanationRu: 'Неверно: «es gibt noch zwei freie Plätze».',
            },
            {
              kind: 'mc',
              question: 'Bis wann soll sich Herr Kowalski melden?',
              options: ['bis Freitag', 'bis zum fünften Oktober', 'bis morgen'],
              answer: 0,
              explanationRu: '«… sollten Sie sich bis Freitag bei mir melden». 5 октября — начало поездки.',
            },
          ],
        },
        {
          instructionDe: 'Text 2: Ist die Aussage richtig oder falsch? Wählen Sie dann die richtige Antwort a, b oder c.',
          instructionRu: 'Текст 2: верно ли утверждение? Затем выберите правильный ответ.',
          items: [
            {
              kind: 'tf',
              statement: 'Der Sender bezahlt jede Woche einen Traum bis zu 3000 Euro.',
              answer: true,
              explanationRu: 'Верно: жюри каждую неделю выбирает самую красивую мечту и оплачивает её — до 3000 евро.',
            },
            {
              kind: 'mc',
              question: 'Wie kann man mitmachen?',
              options: ['mit einer Postkarte', 'mit einer Sprachnachricht über die App', 'mit einem Anruf im Studio'],
              answer: 1,
              explanationRu: '«Schicken Sie uns bis Sonntag eine Sprachnachricht über unsere App».',
            },
          ],
        },
        {
          instructionDe: 'Text 3: Ist die Aussage richtig oder falsch? Wählen Sie dann die richtige Antwort a, b oder c.',
          instructionRu: 'Текст 3: верно ли утверждение? Затем выберите правильный ответ.',
          items: [
            {
              kind: 'tf',
              statement: 'Der Vortrag findet in Halle 3 statt.',
              answer: false,
              explanationRu: 'Неверно: доклад перенесли — он не в зале 3, как в программе, а в зале 2.',
            },
            {
              kind: 'mc',
              question: 'Was muss man für den Vortrag tun?',
              options: ['sich vorher anmelden', 'eine Eintrittskarte kaufen', 'nichts, man kann einfach hingehen'],
              answer: 2,
              explanationRu: '«Der Eintritt ist frei, eine Anmeldung ist nicht nötig».',
            },
          ],
        },
      ],
    },
  ],
};
