import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wie lange bleibst du in Hamburg? – ___ eine Woche.',
      options: ['Für', 'Seit', 'Vor', 'In'],
      answer: 0,
      explanationRu: 'Вопрос о сроке «на сколько?» → für + Akkusativ: für eine Woche.',
    },
    {
      type: 'choice',
      prompt: 'Das Fitnessstudio ist ___ 6 Uhr geöffnet. Vorher ist es geschlossen.',
      options: ['ab', 'bis', 'seit', 'vor'],
      answer: 0,
      explanationRu: '«Начиная с 6 часов» → ab 6 Uhr. До этого (vorher) клуб закрыт.',
    },
    {
      type: 'choice',
      prompt: 'Ich warte schon ___ einer Stunde auf dich!',
      options: ['seit', 'vor', 'in', 'für'],
      answer: 0,
      explanationRu: 'Ожидание началось час назад и продолжается сейчас (Präsens: ich warte) → seit einer Stunde.',
    },
    {
      type: 'choice',
      prompt: 'Ich habe ___ zwei Tagen meinen Trainer angerufen.',
      options: ['vor', 'seit', 'in', 'ab'],
      answer: 0,
      explanationRu: 'Звонок — законченное действие в прошлом (Perfekt), «два дня назад» → vor zwei Tagen.',
    },
    {
      type: 'choice',
      prompt: 'Seit wann spielst du Handball? – ___',
      options: ['Seit fünf Jahren.', 'Vor fünf Jahren.', 'In fünf Jahren.'],
      answer: 0,
      explanationRu: 'На вопрос Seit wann? отвечают с seit: Seit fünf Jahren. vor — «назад», in — «через».',
    },
    {
      type: 'choice',
      prompt: 'Wann ist das nächste Spiel? – ___',
      options: ['In zwei Wochen.', 'Seit zwei Wochen.', 'Für zwei Wochen.'],
      answer: 0,
      explanationRu: 'Следующая игра — в будущем, «через две недели» → in zwei Wochen.',
    },
    {
      type: 'gap',
      prompt: 'Vor ___ Spiel bin ich immer nervös.',
      answers: ['dem'],
      explanationRu: 'vor + Dativ («перед»). das Spiel (ср. р.) → vor dem Spiel.',
    },
    {
      type: 'gap',
      prompt: 'Seit ___ Woche habe ich keine Zeit für Sport.',
      answers: ['einer'],
      explanationRu: 'seit + Dativ. die Woche (ж. р.) → seit einer Woche.',
    },
    {
      type: 'gap',
      prompt: 'Der Trainer ist für ___ Woche im Urlaub.',
      answers: ['eine'],
      explanationRu: 'für требует Akkusativ. die Woche (ж. р.) → für eine Woche.',
    },
    {
      type: 'gap',
      prompt: 'Das Training dauert von 18 ___ 20 Uhr.',
      answers: ['bis'],
      explanationRu: 'Отрезок времени «с … до …» → von … bis …: von 18 bis 20 Uhr.',
    },
    {
      type: 'gap',
      prompt: 'In zwei ___ habe ich endlich Urlaub.',
      answers: ['Monaten'],
      hintRu: 'der Monat, мн. ч.',
      explanationRu: 'in + Dativ. Мн. ч. die Monate, в Dativ добавляется -n: in zwei Monaten.',
    },
    {
      type: 'gap',
      audio: 'Ich spiele seit acht Jahren Tischtennis.',
      prompt: 'Сколько лет человек играет в настольный теннис? Напишите цифрой: ___',
      answers: ['8'],
      explanationRu: 'acht = 8. seit acht Jahren — «уже восемь лет», и он играет до сих пор.',
    },
    {
      type: 'choice',
      audio: 'Das Spiel beginnt in einer halben Stunde.',
      prompt: 'Когда начинается игра?',
      options: ['через полчаса', 'полчаса назад', 'уже полчаса идёт'],
      answer: 0,
      explanationRu: 'in einer halben Stunde — «через полчаса» (in + Dativ указывает на будущее).',
    },
    {
      type: 'choice',
      audio: 'Vor drei Wochen habe ich mit dem Joggen aufgehört.',
      prompt: 'Что сказал человек?',
      options: ['Он перестал бегать три недели назад.', 'Он бегает уже три недели.', 'Он начнёт бегать через три недели.'],
      answer: 0,
      explanationRu: 'vor drei Wochen — «три недели назад», aufhören — «перестать».',
    },
    {
      type: 'order',
      words: ['Seit', 'zwei', 'Jahren', 'spielt', 'mein', 'Sohn', 'Fußball.'],
      translationRu: 'Мой сын уже два года играет в футбол.',
      explanationRu: 'Seit zwei Jahren стоит на первом месте, глагол spielt — на втором, потом подлежащее mein Sohn.',
    },
    {
      type: 'order',
      words: ['Nach', 'dem', 'Spiel', 'sind', 'wir', 'essen', 'gegangen.'],
      translationRu: 'После игры мы пошли поесть.',
      explanationRu: 'Nach dem Spiel — на первом месте, вспомогательный глагол sind — на втором, Partizip II gegangen — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Ответьте полным предложением с seit (zwei Jahre).',
      prompt: 'Seit wann machst du Yoga?',
      answers: ['Ich mache seit zwei Jahren Yoga.', 'Seit zwei Jahren mache ich Yoga.'],
      explanationRu: 'seit + Dativ мн. ч. (zwei Jahren) и глагол в настоящем времени: ich mache.',
    },
    {
      type: 'choice',
      prompt: 'Zum Geburtstag schenke ich ___ ein neues Fahrrad.',
      options: ['meinem Sohn', 'meinen Sohn', 'mein Sohn'],
      answer: 0,
      explanationRu: 'Повторение (юнит 15): кому? — Dativ: meinem Sohn; что? — Akkusativ: ein neues Fahrrad.',
    },
    {
      type: 'gap',
      prompt: 'Wissen Sie, ___ das Schwimmbad heute geöffnet ist?',
      answers: ['ob'],
      explanationRu: 'Повторение (юнит 14): косвенный вопрос без вопросительного слова (Ist das Schwimmbad geöffnet?) вводится союзом ob.',
    },
    {
      type: 'choice',
      prompt: 'Ich freue mich schon ___ das Spiel am Samstag.',
      options: ['auf', 'über', 'für', 'an'],
      answer: 0,
      explanationRu: 'Повторение (юнит 11): sich freuen auf + Akk — радоваться тому, что будет в будущем.',
    },
  ],
  reading: [
    {
      title: 'Neue Kurse im Sportverein',
      textType: 'Aushang',
      texts: [
        {
          heading: 'TSV Lindenhof – Neue Kurse im Herbst',
          body: `Liebe Mitglieder, liebe Gäste,

ab Oktober gibt es bei uns wieder neue Kurse!

Yoga für Anfänger: Der Kurs beginnt am 7. Oktober und dauert zehn Wochen. Wir treffen uns immer dienstags von 18 bis 19 Uhr in der kleinen Halle.

Rückenfit: Diesen Kurs gibt es seit drei Jahren, und er ist sehr beliebt. Er ist gut für Menschen mit Rückenschmerzen. Termin: donnerstags von 10 bis 11 Uhr, ab dem 9. Oktober.

Schwimmen für Erwachsene: Sie können nicht schwimmen? Kein Problem! In acht Wochen lernen Sie es bei uns. Der Kurs findet im Hallenbad am Stadtpark statt, immer samstags um 9 Uhr.

Für Mitglieder sind alle Kurse kostenlos. Gäste bezahlen 60 Euro pro Kurs. Anmeldung bitte bis zum 30. September im Büro (Montag bis Freitag, 16 bis 19 Uhr).

Ihr TSV-Team`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Der Yogakurs ist für Leute ohne Erfahrung.', answer: true, explanationRu: '«Yoga für Anfänger» — курс для начинающих, то есть без опыта.' },
            { kind: 'tf', statement: 'Der Yogakurs findet am Wochenende statt.', answer: false, explanationRu: 'Йога проходит по вторникам (dienstags), а не на выходных.' },
            { kind: 'tf', statement: 'Den Kurs „Rückenfit“ gibt es schon seit drei Jahren.', answer: true, explanationRu: '«Diesen Kurs gibt es seit drei Jahren» — курс существует уже три года.' },
            { kind: 'tf', statement: 'Der Schwimmkurs ist im Freibad.', answer: false, explanationRu: 'Курс проходит im Hallenbad — в крытом бассейне, а не в открытом.' },
            { kind: 'tf', statement: 'Mitglieder müssen für die Kurse nichts bezahlen.', answer: true, explanationRu: '«Für Mitglieder sind alle Kurse kostenlos» — для членов клуба бесплатно.' },
            { kind: 'tf', statement: 'Man kann sich bis Ende Oktober anmelden.', answer: false, explanationRu: 'Записаться нужно bis zum 30. September — до конца сентября.' },
          ],
        },
      ],
    },
    {
      title: 'Eine E-Mail von Svenja',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Marina,

wie geht es dir? Bei mir gibt es Neuigkeiten: Seit einem Monat spiele ich Volleyball! Eine Kollegin hat mich vor sechs Wochen zu einem Probetraining mitgenommen, und es hat mir sofort gefallen. Jetzt bin ich Mitglied im Verein. Wir trainieren zweimal pro Woche, am Montag und am Mittwoch. Nach dem Training gehen wir oft zusammen in eine Pizzeria. Die Leute sind wirklich nett!

Am Anfang war es schwer, weil ich vorher zehn Jahre lang keinen Sport gemacht habe. Nach dem ersten Training hat mir drei Tage lang alles wehgetan.

In drei Wochen haben wir unser erstes Spiel. Ich spiele noch nicht so gut, aber der Trainer sagt, ich darf vielleicht zehn Minuten mitspielen. Kommst du zum Zuschauen? Das Spiel ist am Samstag, dem 14. Mai, um 15 Uhr in der Sporthalle in der Goethestraße.

Liebe Grüße
deine Svenja`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте письмо. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Seit wann spielt Svenja Volleyball?', options: ['Seit sechs Wochen', 'Seit einem Monat', 'Seit der Schule'], answer: 1, explanationRu: '«Seit einem Monat spiele ich Volleyball». Шесть недель назад было только пробное занятие.' },
            { kind: 'mc', question: 'Wie hat Svenja den Verein gefunden?', options: ['Durch eine Kollegin', 'Durch eine Anzeige', 'Durch Marina'], answer: 0, explanationRu: '«Eine Kollegin hat mich … zu einem Probetraining mitgenommen» — её привела коллега.' },
            { kind: 'mc', question: 'Was machen die Spieler oft nach dem Training?', options: ['Sie gehen schwimmen.', 'Sie essen zusammen Pizza.', 'Sie trainieren noch eine Stunde.'], answer: 1, explanationRu: '«Nach dem Training gehen wir oft zusammen in eine Pizzeria».' },
            { kind: 'mc', question: 'Warum war der Anfang schwer?', options: ['Die Leute waren nicht nett.', 'Sie hatte lange keinen Sport gemacht.', 'Das Training war zu spät.'], answer: 1, explanationRu: '«…weil ich vorher zehn Jahre lang keinen Sport gemacht habe» — десять лет без спорта.' },
            { kind: 'mc', question: 'Was möchte Svenja von Marina?', options: ['Marina soll beim Spiel zuschauen.', 'Marina soll im Verein mitspielen.', 'Marina soll sie zum Training fahren.'], answer: 0, explanationRu: '«Kommst du zum Zuschauen?» — Свенья приглашает Марину посмотреть игру.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht vom Trainer',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Hallo Leon, hier ist Jens, dein Trainer. Ich habe eine wichtige Information für dich: Das Training am Donnerstag fällt leider aus, weil die Halle eine Woche lang geschlossen ist. Ab nächster Woche trainieren wir wieder normal, also am Dienstag um 18 Uhr. Und noch etwas: Unser Spiel gegen Neustadt ist nicht am Samstag. Es ist erst in zwei Wochen, am Sonntag um 11 Uhr. Bitte sag das auch den anderen Spielern. Bis Dienstag, tschüss!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Das Training am Donnerstag findet nicht statt.', answer: true, explanationRu: '«Das Training am Donnerstag fällt leider aus» — тренировка отменяется, зал закрыт.' },
            { kind: 'tf', statement: 'Leon soll die anderen Spieler informieren.', answer: true, explanationRu: '«Bitte sag das auch den anderen Spielern» — Леон должен передать информацию другим.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann ist das nächste Training?', options: ['Am Donnerstag', 'Am Dienstag um 18 Uhr', 'Am Samstag'], answer: 1, explanationRu: '«Ab nächster Woche trainieren wir wieder normal, also am Dienstag um 18 Uhr».' },
            { kind: 'mc', question: 'Wann ist das Spiel gegen Neustadt?', options: ['Am Samstag', 'In zwei Wochen am Sonntag', 'Morgen um 11 Uhr'], answer: 1, explanationRu: '«Es ist erst in zwei Wochen, am Sonntag um 11 Uhr» — не в субботу, а через две недели в воскресенье.' },
          ],
        },
      ],
    },
    {
      title: 'Im Fitnessstudio',
      kind: 'dialog',
      speakers: { A: 'Mitarbeiterin im Fitnessstudio', B: 'Herr Kaya' },
      situation: 'Herr Kaya möchte in einem Fitnessstudio trainieren und fragt an der Rezeption.',
      text: `A: Guten Tag! Kann ich Ihnen helfen?
B: Ja, ich möchte gern hier trainieren. Wann haben Sie geöffnet?
A: Von Montag bis Freitag von 6 bis 23 Uhr, am Wochenende ab 8 Uhr.
B: Und wie viel kostet das?
A: Das kommt darauf an. Für ein Jahr kostet es 29 Euro im Monat. Für drei Monate bezahlen Sie 39 Euro im Monat.
B: Hm, ich weiß noch nicht, ob ich ein ganzes Jahr bleibe. Kann ich erst einmal probieren?
A: Natürlich. Sie können eine Woche kostenlos trainieren. Und am ersten Tag zeigt Ihnen ein Trainer alle Geräte.
B: Sehr gut. Kann ich gleich heute anfangen?
A: Heute ist leider kein Trainer mehr da. Aber ab morgen um 9 Uhr ist das kein Problem.
B: Gut, dann komme ich morgen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann öffnet das Fitnessstudio am Samstag?', options: ['Um 6 Uhr', 'Um 8 Uhr', 'Um 9 Uhr'], answer: 1, explanationRu: '«…am Wochenende ab 8 Uhr». Суббота — это выходной. В 6 открывается в будни.' },
            { kind: 'mc', question: 'Wie viel kostet ein Monat, wenn man für ein Jahr Mitglied wird?', options: ['29 Euro', '39 Euro', '23 Euro'], answer: 0, explanationRu: '«Für ein Jahr kostet es 29 Euro im Monat». 39 евро — при договоре на три месяца.' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Herr Kaya kann eine Woche kostenlos trainieren.', answer: true, explanationRu: '«Sie können eine Woche kostenlos trainieren».' },
            { kind: 'tf', statement: 'Herr Kaya beginnt heute mit dem Training.', answer: false, explanationRu: 'Сегодня тренера уже нет, поэтому он придёт завтра: «dann komme ich morgen».' },
          ],
        },
      ],
    },
  ],
};
