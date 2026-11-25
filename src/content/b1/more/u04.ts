import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Hast du ___ schon für den Yogakurs angemeldet?',
      options: ['dich', 'dir', 'sich', 'du'],
      answer: 0,
      explanationRu: 'sich anmelden — возвратный глагол. Других прямых дополнений нет, поэтому местоимение в Akkusativ: du → dich.',
    },
    {
      type: 'choice',
      prompt: 'Ich habe ___ beim Joggen den Fuß verletzt.',
      options: ['mich', 'mir', 'mein', 'ich'],
      answer: 1,
      explanationRu: 'В предложении уже есть прямое дополнение (den Fuß — часть тела), поэтому возвратное местоимение стоит в Dativ: mir.',
    },
    {
      type: 'choice',
      prompt: 'Du solltest mehr ___ deine Gesundheit achten.',
      options: ['auf', 'an', 'für', 'um'],
      answer: 0,
      explanationRu: 'achten auf + Akk — следить за чем-то, обращать внимание на что-то. Предлог нужно учить вместе с глаголом.',
    },
    {
      type: 'choice',
      prompt: '___ hast du dich in der Praxis so geärgert?',
      options: ['Worüber', 'Worauf', 'Wofür', 'Womit'],
      answer: 0,
      explanationRu: 'sich ärgern über + Akk → вопрос о предмете: wo(r) + über = worüber. r вставляется, потому что über начинается с гласной.',
    },
    {
      type: 'choice',
      prompt: '– Denkst du oft an deinen Großvater? – Ja, ich denke oft ___.',
      options: ['daran', 'an ihn', 'an ihm', 'darauf'],
      answer: 1,
      explanationRu: 'Ловушка: речь о человеке, поэтому не da-конструкция, а предлог + местоимение. denken an + Akk → an ihn.',
    },
    {
      type: 'choice',
      prompt: 'Mein Arzt hat mich ___ erinnert, dass ich die Tabletten nach dem Essen nehmen muss.',
      options: ['darauf', 'daran', 'davon', 'dafür'],
      answer: 1,
      explanationRu: 'jemanden erinnern an + Akk. da-конструкция (daran) указывает на следующее придаточное с dass.',
    },
    {
      type: 'gap',
      prompt: 'Nach der Grippe muss ich ___ erst einmal richtig erholen.',
      answers: ['mich'],
      explanationRu: 'sich erholen — возвратный глагол (в русском «выздоравливать, отдыхать» — без -ся тоже бывает!). Без другого дополнения → Akkusativ: mich.',
    },
    {
      type: 'gap',
      prompt: 'Putz ___ bitte die Zähne, bevor du ins Bett gehst!',
      answers: ['dir'],
      explanationRu: 'Есть прямое дополнение die Zähne → возвратное местоимение в Dativ: dir.',
    },
    {
      type: 'gap',
      prompt: 'Mein kleiner Sohn hat große Angst ___ der Spritze.',
      answers: ['vor'],
      explanationRu: 'Angst haben vor + Dativ (der Spritze). Русское «бояться чего-то» не подсказывает предлог — его нужно запомнить.',
    },
    {
      type: 'gap',
      prompt: 'Wie lange musst du noch ___ deinen Termin beim Facharzt warten?',
      answers: ['auf'],
      explanationRu: 'warten auf + Akk: auf deinen Termin.',
    },
    {
      type: 'gap',
      prompt: '– Hast du dich bei der Krankenkasse über die Rechnung beschwert? – Nein, ich habe mich noch nicht ___ beschwert.',
      answers: ['darüber'],
      explanationRu: 'sich beschweren über + Akk. Речь о предмете (die Rechnung) → da(r) + über = darüber.',
    },
    {
      type: 'gap',
      prompt: '___ denkst du gerade? – An meinen Termin beim Zahnarzt.',
      answers: ['Woran'],
      explanationRu: 'denken an + Akk, вопрос о предмете/событии → wo(r) + an = woran.',
    },
    {
      type: 'gap',
      prompt: 'Ich bin gestern nicht zum Training gegangen, weil ich ___ nicht gut gefühlt habe.',
      answers: ['mich'],
      explanationRu: 'Повторение юнитов 1 и 3: sich fühlen + перфект в придаточном с weil (gefühlt habe — в конце). Возвратное местоимение — mich.',
    },
    {
      type: 'order',
      words: ['Ich', 'habe', 'mich', 'im', 'Urlaub', 'stark', 'erkältet.'],
      translationRu: 'Я сильно простудился в отпуске.',
      explanationRu: 'Возвратное местоимение mich стоит сразу после вспомогательного глагола и подлежащего; Partizip II erkältet — в конце.',
    },
    {
      type: 'order',
      words: ['Er', 'hat', 'sich', 'noch', 'nicht', 'daran', 'gewöhnt,', 'dass', 'er', 'keinen', 'Zucker', 'essen', 'darf.'],
      translationRu: 'Он ещё не привык к тому, что ему нельзя есть сахар.',
      explanationRu: 'sich gewöhnen an + Akk; daran указывает на придаточное с dass. В придаточном модальный глагол darf стоит в конце.',
    },
    {
      type: 'order',
      words: ['Obwohl', 'ich', 'mich', 'ausgeruht', 'habe,', 'bin', 'ich', 'immer', 'noch', 'müde.'],
      translationRu: 'Хотя я отдохнул, я всё ещё устал.',
      explanationRu: 'Повторение юнита 3: obwohl + глагол в конце (ausgeruht habe); затем главное предложение начинается с глагола bin.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените выделенную часть (für gesunde Ernährung) da-конструкцией.',
      prompt: 'Ich interessiere mich sehr für gesunde Ernährung.',
      answers: ['Ich interessiere mich sehr dafür.'],
      explanationRu: 'Речь о предмете → da + für = dafür. Перед согласной r не нужен.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените выделенную часть (um meinen Vater) местоимением или da-конструкцией — выберите правильное.',
      prompt: 'Ich mache mir Sorgen um meinen Vater.',
      answers: ['Ich mache mir Sorgen um ihn.'],
      explanationRu: 'Отец — человек, поэтому da-конструкция (darum) невозможна: предлог + местоимение в нужном падеже → um ihn.',
    },
    {
      type: 'transform',
      instructionRu: 'Задайте вопрос к выделенной части (auf die Ergebnisse der Blutuntersuchung).',
      prompt: 'Sie wartet auf die Ergebnisse der Blutuntersuchung.',
      answers: ['Worauf wartet sie?'],
      explanationRu: 'Вопрос о предмете с warten auf → worauf. Вопросительное слово на первом месте, затем глагол.',
    },
    {
      type: 'transform',
      instructionRu: 'Добавьте в предложение «die Hände» и измените местоимение.',
      prompt: 'Du wäschst dich vor dem Essen.',
      answers: ['Du wäschst dir vor dem Essen die Hände.', 'Du wäschst dir die Hände vor dem Essen.'],
      explanationRu: 'Как только появляется прямое дополнение (die Hände), возвратное местоимение переходит в Dativ: dich → dir.',
    },
  ],
  reading: [
    {
      title: 'Gesundheit im Alltag',
      textType: 'Zeitungsartikel',
      texts: [
        {
          label: '1',
          heading: 'Weniger sitzen, gesünder leben',
          body: `Im Durchschnitt sitzen Erwachsene in Deutschland fast neun Stunden am Tag – im Büro, im Auto und abends auf dem Sofa. Eine Studie der Sporthochschule Köln zeigt nun, wie ungesund das sein kann. Die Forscher haben drei Jahre lang 2000 Büroangestellte begleitet. Das Ergebnis: Wer mehr als acht Stunden täglich sitzt, leidet doppelt so oft unter Rückenschmerzen wie Menschen, die sich regelmäßig bewegen. Auch das Risiko für Herzkrankheiten steigt.

Überraschend war für die Forscher, dass Sport am Abend die langen Sitzzeiten nicht vollständig ausgleicht. „Viele denken: Wenn ich dreimal pro Woche joggen gehe, ist alles in Ordnung“, sagt Studienleiterin Dr. Karin Vogt. „Aber noch wichtiger ist, dass man das Sitzen regelmäßig unterbricht.“ Sie empfiehlt, mindestens jede halbe Stunde kurz aufzustehen, beim Telefonieren herumzulaufen und die Treppe statt des Aufzugs zu nehmen.

Einige Firmen haben bereits reagiert. Ein Versicherungsunternehmen in Düsseldorf hat zum Beispiel höhenverstellbare Schreibtische angeschafft, und Besprechungen finden dort öfter im Stehen statt. Seitdem gibt es dort ein Drittel weniger Krankmeldungen wegen Rückenproblemen.`,
        },
        {
          label: '2',
          heading: 'Warten auf den Facharzt',
          body: `Wer einen Termin beim Hautarzt, Augenarzt oder Psychotherapeuten braucht, muss oft viel Geduld haben. Laut einer Umfrage einer großen Krankenkasse warten gesetzlich Versicherte im Durchschnitt 34 Tage auf einen Termin beim Facharzt. In ländlichen Regionen dauert es oft sogar länger als zwei Monate.

Doch es gibt Hilfe: Seit einigen Jahren vermitteln sogenannte Terminservicestellen Facharzttermine. Unter der Telefonnummer 116 117 oder online bekommt man innerhalb von vier Wochen einen Termin – allerdings nur, wenn man eine Überweisung vom Hausarzt hat. Außerdem kann man sich den Arzt nicht aussuchen, und die Praxis ist manchmal weit entfernt.

„Viele Patienten wissen gar nicht, dass es diesen Service gibt“, sagt Thomas Mehler von der Verbraucherzentrale. Er rät außerdem, bei den Praxen regelmäßig nachzufragen, ob ein Termin frei geworden ist. „Jeden Tag sagen Patienten ihre Termine ab. Wer morgens um acht anruft, hat gute Chancen.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text 1. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 1. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was hat die Studie gezeigt?',
              options: [
                'Menschen, die viel sitzen, haben häufiger Rückenschmerzen.',
                'Büroangestellte sitzen weniger als andere Menschen.',
                'Neun Stunden Sitzen pro Tag sind kein Problem.',
              ],
              answer: 0,
              explanationRu: '«Wer mehr als acht Stunden täglich sitzt, leidet doppelt so oft unter Rückenschmerzen…».',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt Dr. Vogt?',
              options: ['Jeden Tag joggen zu gehen.', 'Oft kurz aufzustehen und sich zu bewegen.', 'Abends mehr Sport zu machen.'],
              answer: 1,
              explanationRu: '«Sie empfiehlt, mindestens jede halbe Stunde kurz aufzustehen…». Спорт вечером, по исследованию, не решает проблему полностью.',
            },
            {
              kind: 'mc',
              question: 'Was hat sich in der Firma in Düsseldorf verändert?',
              options: ['Die Mitarbeiter arbeiten öfter im Homeoffice.', 'Die Firma bietet mehr Sportkurse an.', 'Weniger Mitarbeiter fehlen wegen Rückenschmerzen.'],
              answer: 2,
              explanationRu: '«Seitdem gibt es dort ein Drittel weniger Krankmeldungen wegen Rückenproblemen».',
            },
          ],
        },
        {
          instructionDe: 'Lesen Sie den Text 2. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 2. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wie lange warten Patienten auf dem Land oft auf einen Facharzttermin?',
              options: ['Ungefähr 34 Tage.', 'Länger als zwei Monate.', 'Höchstens vier Wochen.'],
              answer: 1,
              explanationRu: '«In ländlichen Regionen dauert es oft sogar länger als zwei Monate». 34 дня — это среднее значение по стране.',
            },
            {
              kind: 'mc',
              question: 'Was braucht man, wenn man die Terminservicestelle nutzen möchte?',
              options: ['Eine Überweisung vom Hausarzt.', 'Eine private Krankenversicherung.', 'Einen Facharzt in der Nähe.'],
              answer: 0,
              explanationRu: '«…allerdings nur, wenn man eine Überweisung vom Hausarzt hat».',
            },
            {
              kind: 'mc',
              question: 'Was rät Thomas Mehler?',
              options: [
                'Ohne Termin direkt in die Praxis zu gehen.',
                'Morgens früh in den Praxen nach freien Terminen zu fragen.',
                'Einen anderen Hausarzt zu suchen.',
              ],
              answer: 1,
              explanationRu: 'Он советует регулярно спрашивать о свободных терминах: «Wer morgens um acht anruft, hat gute Chancen».',
            },
          ],
        },
      ],
    },
    {
      title: 'Informationen für unsere Patienten',
      textType: 'Infotext',
      texts: [
        {
          heading: 'Gemeinschaftspraxis Dr. Ludwig & Dr. Sander – Hinweise für Patientinnen und Patienten',
          body: `Liebe Patientinnen und Patienten,
damit wir Sie gut versorgen können, bitten wir Sie, die folgenden Hinweise zu beachten.

Termine: Wir arbeiten als Bestellpraxis. Bitte vereinbaren Sie einen Termin telefonisch oder über unsere Online-Terminbuchung. Ohne Termin behandeln wir nur akute Notfälle, zum Beispiel bei hohem Fieber oder starken Schmerzen. Wenn Sie einen Termin nicht wahrnehmen können, sagen Sie ihn bitte mindestens 24 Stunden vorher ab.

Offene Sprechstunde: Jeden Montag von 8 bis 10 Uhr gibt es eine offene Sprechstunde für Patienten, die wegen einer Erkältung eine Krankschreibung brauchen. Bitte bringen Sie Ihre Versichertenkarte mit.

Rezepte und Überweisungen: Folgerezepte für Medikamente, die Sie regelmäßig nehmen, können Sie per Telefon oder E-Mail bestellen und nach zwei Werktagen an der Anmeldung abholen. Überweisungen zum Facharzt stellen wir nur nach einem persönlichen Gespräch mit dem Arzt aus.

Videosprechstunde: Für die Besprechung von Laborergebnissen bieten wir auch eine Videosprechstunde an. Sie brauchen dafür nur ein Smartphone oder einen Computer mit Kamera.

Wartezimmer: Bitte schalten Sie Ihr Handy im Wartezimmer stumm. Wenn Sie eine ansteckende Krankheit haben (z. B. Grippe oder Magen-Darm-Infekt), melden Sie sich bitte vorher telefonisch – Sie warten dann in einem separaten Raum.

Vielen Dank für Ihr Verständnis!
Ihr Praxisteam`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was muss man tun, wenn man nicht zu seinem Termin kommen kann?',
              options: ['Spätestens einen Tag vorher absagen.', 'Eine E-Mail an den Arzt schreiben.', 'Zur offenen Sprechstunde kommen.'],
              answer: 0,
              explanationRu: '«…sagen Sie ihn bitte mindestens 24 Stunden vorher ab» — то есть минимум за сутки.',
            },
            {
              kind: 'mc',
              question: 'Wofür ist die offene Sprechstunde am Montag?',
              options: ['Für alle Patienten mit starken Schmerzen.', 'Für Krankschreibungen bei einer Erkältung.', 'Für die Besprechung von Laborergebnissen.'],
              answer: 1,
              explanationRu: 'Открытый приём — «für Patienten, die wegen einer Erkältung eine Krankschreibung brauchen». Результаты анализов обсуждают по видео.',
            },
            {
              kind: 'mc',
              question: 'Wie bekommt man eine Überweisung zum Facharzt?',
              options: ['Per E-Mail nach zwei Werktagen.', 'Telefonisch an der Anmeldung.', 'Nur nach einem Gespräch mit dem Arzt.'],
              answer: 2,
              explanationRu: '«Überweisungen … stellen wir nur nach einem persönlichen Gespräch mit dem Arzt aus». По телефону/e-mail заказывают только повторные рецепты.',
            },
            {
              kind: 'mc',
              question: 'Was sollen Patienten mit einer ansteckenden Krankheit tun?',
              options: ['Zu Hause bleiben und eine Videosprechstunde buchen.', 'Vorher in der Praxis anrufen.', 'Im Wartezimmer eine Maske tragen.'],
              answer: 1,
              explanationRu: '«…melden Sie sich bitte vorher telefonisch» — тогда пациента посадят в отдельную комнату.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Vortrag: Gesund schlafen',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag an einem Gesundheitsabend in der Volkshochschule.',
      text: `Guten Abend, meine Damen und Herren, und herzlich willkommen zu unserem Gesundheitsabend hier in der Volkshochschule. Ich bin Martin Haas, ich arbeite als Arzt in einem Schlaflabor, und heute möchte ich mit Ihnen über ein Thema sprechen, das fast jeden betrifft: den Schlaf.

Wussten Sie, dass etwa jeder dritte Erwachsene in Deutschland regelmäßig schlecht schläft? Viele Menschen haben sich so sehr daran gewöhnt, dass sie gar nicht mehr zum Arzt gehen. Dabei kann schlechter Schlaf auf Dauer krank machen: Man kann sich schlechter konzentrieren, man erkältet sich öfter, und auch das Risiko für Übergewicht steigt.

Wie viel Schlaf brauchen wir? Die meisten Erwachsenen brauchen zwischen sieben und acht Stunden. Wichtiger als die genaue Zahl ist aber, dass man sich morgens erholt fühlt.

Ich gebe Ihnen heute drei einfache Tipps. Erstens: Gehen Sie möglichst jeden Tag zur gleichen Zeit ins Bett, auch am Wochenende. Unser Körper liebt Regelmäßigkeit. Zweitens: Legen Sie das Handy mindestens eine Stunde vor dem Schlafen weg. Das Licht vom Bildschirm sagt dem Gehirn: Es ist noch Tag! Am besten lassen Sie das Handy gar nicht im Schlafzimmer liegen. Drittens: Achten Sie auf Ihr Abendessen. Ein schweres, fettes Essen spät am Abend stört den Schlaf. Und ein Glas Wein hilft zwar beim Einschlafen, aber man wacht in der Nacht öfter auf.

Und was tun Sie, wenn Sie nachts aufwachen und nicht wieder einschlafen können? Bleiben Sie nicht stundenlang im Bett liegen und ärgern Sie sich nicht darüber. Stehen Sie lieber auf, setzen Sie sich in einen anderen Raum und lesen Sie etwas Ruhiges, bis Sie wieder müde sind.

Wenn Sie länger als drei Monate schlecht schlafen, sollten Sie unbedingt mit Ihrem Hausarzt darüber sprechen. Er kann Sie, wenn nötig, an ein Schlaflabor überweisen. So, und jetzt freue ich mich auf Ihre Fragen.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag einmal. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите доклад один раз. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wer ist Martin Haas?',
              options: ['Ein Kursleiter der Volkshochschule.', 'Ein Arzt aus einem Schlaflabor.', 'Ein Patient mit Schlafproblemen.'],
              answer: 1,
              explanationRu: '«…ich arbeite als Arzt in einem Schlaflabor».',
            },
            {
              kind: 'mc',
              question: 'Was kann passieren, wenn man lange schlecht schläft?',
              options: ['Man wird häufiger krank.', 'Man braucht mehr als acht Stunden Schlaf.', 'Man fühlt sich morgens immer erholt.'],
              answer: 0,
              explanationRu: '«…man erkältet sich öfter, und auch das Risiko für Übergewicht steigt».',
            },
            {
              kind: 'mc',
              question: 'Was rät Dr. Haas in Bezug auf das Handy?',
              options: ['Es nur im Schlafzimmer zu benutzen.', 'Abends den Bildschirm dunkler zu machen.', 'Es eine Stunde vor dem Schlafen wegzulegen.'],
              answer: 2,
              explanationRu: '«Legen Sie das Handy mindestens eine Stunde vor dem Schlafen weg».',
            },
            {
              kind: 'mc',
              question: 'Was sagt er über Wein am Abend?',
              options: ['Wein hilft beim Durchschlafen.', 'Ein Glas ist ganz unproblematisch.', 'Man wacht nachts häufiger auf.'],
              answer: 2,
              explanationRu: 'Вино помогает уснуть, «aber man wacht in der Nacht öfter auf».',
            },
            {
              kind: 'mc',
              question: 'Was soll man tun, wenn man nachts nicht wieder einschlafen kann?',
              options: ['Im Bett bleiben und warten.', 'Aufstehen und in einem anderen Raum etwas lesen.', 'Sofort den Hausarzt anrufen.'],
              answer: 1,
              explanationRu: '«Stehen Sie lieber auf, setzen Sie sich in einen anderen Raum und lesen Sie etwas Ruhiges».',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Bonus für gesundes Leben?',
      kind: 'discussion',
      speakers: { A: 'Moderator', B: 'Tobias Brandl, Fitnesstrainer', C: 'Dr. Miriam Ost, Hausärztin' },
      situation: 'Sie hören eine Diskussion im Radio. Das Thema: Sollen Krankenkassen gesundes Verhalten belohnen?',
      text: `A: Herzlich willkommen zu „Gesundheit aktuell“. Immer mehr Krankenkassen haben Bonusprogramme: Wer regelmäßig Sport macht oder zur Vorsorge geht, bekommt Geld zurück. Manche Kassen interessieren sich sogar für die Daten von Fitness-Uhren. Ist das eine gute Idee? Darüber spreche ich heute mit dem Fitnesstrainer Tobias Brandl und mit der Hausärztin Dr. Miriam Ost. Herr Brandl, Sie finden solche Programme gut?
B: Absolut. Viele meiner Kunden haben erst mit dem Training angefangen, weil ihre Krankenkasse einen Teil der Kosten übernommen hat. Geld ist eben eine starke Motivation. Und wer sich regelmäßig bewegt, ist seltener krank – davon profitieren am Ende alle.
C: Das klingt erst mal gut. Aber ich sehe in meiner Praxis jeden Tag Menschen, die gar nicht die Möglichkeit haben, viel Sport zu treiben. Eine alleinerziehende Mutter mit zwei Jobs hat keine Zeit fürs Fitnessstudio. Sie bekommt dann keinen Bonus, obwohl sie ihn vielleicht am dringendsten braucht.
A: Das heißt, Sie finden die Programme ungerecht?
C: In gewisser Weise schon. Die Gesunden bekommen Geld, und die anderen gehen leer aus.
B: Da muss ich widersprechen. Es gibt ja auch Punkte für Dinge, die nichts kosten: für die Vorsorgeuntersuchung beim Arzt zum Beispiel oder für einen Nichtraucherkurs.
A: Kommen wir zu den Fitness-Uhren. Einige Kassen möchten, dass ihre Mitglieder ihre Schritte oder ihren Puls an die Kasse schicken. Frau Dr. Ost?
C: Davor habe ich wirklich Angst. Gesundheitsdaten gehören zu den privatesten Daten überhaupt. Heute bekommt man einen Bonus – und vielleicht muss man morgen mehr bezahlen, wenn man zu wenig läuft.
B: Ich verstehe die Sorge. Ich selbst gebe meine Daten auch nicht an jede App weiter. Aber es ist ja freiwillig. Niemand wird gezwungen mitzumachen.
A: Zum Schluss eine persönliche Frage: Tragen Sie selbst eine Fitness-Uhr?
B: Natürlich, jeden Tag. Sie erinnert mich zum Beispiel daran, dass ich genug trinke.
C: Nein. Ich gehe jeden Morgen eine Stunde mit meinem Hund spazieren – dafür brauche ich keine Uhr, die mitzählt.
A: Vielen Dank Ihnen beiden für das Gespräch.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion zweimal. Wer sagt was?',
          instructionRu: 'Вы слышите дискуссию два раза. Кто что говорит?',
          options: ['Moderator', 'Tobias Brandl', 'Dr. Miriam Ost'],
          items: [
            { kind: 'match', prompt: 'Krankenkassen belohnen immer öfter gesundes Verhalten.', answer: 0, explanationRu: 'Модератор во вступлении: «Immer mehr Krankenkassen haben Bonusprogramme…».' },
            { kind: 'match', prompt: 'Geld motiviert viele Menschen, mit dem Training anzufangen.', answer: 1, explanationRu: 'Тобиас Брандль: «Geld ist eben eine starke Motivation».' },
            { kind: 'match', prompt: 'Gerade Menschen mit wenig Zeit bekommen oft keinen Bonus.', answer: 2, explanationRu: 'Д-р Ост приводит пример матери-одиночки с двумя работами.' },
            { kind: 'match', prompt: 'Auch kostenlose Angebote bringen Bonuspunkte.', answer: 1, explanationRu: 'Брандль: баллы дают и за то, что ничего не стоит, — профилактический осмотр, курс отказа от курения.' },
            { kind: 'match', prompt: 'Einige Kassen wollen Daten von Fitness-Uhren bekommen.', answer: 0, explanationRu: 'Модератор: «Einige Kassen möchten, dass ihre Mitglieder ihre Schritte oder ihren Puls an die Kasse schicken».' },
            { kind: 'match', prompt: 'Später könnten Versicherte wegen ihrer Daten Nachteile haben.', answer: 2, explanationRu: 'Д-р Ост: «…vielleicht muss man morgen mehr bezahlen, wenn man zu wenig läuft».' },
            { kind: 'match', prompt: 'Die Teilnahme an den Programmen ist freiwillig.', answer: 1, explanationRu: 'Брандль: «Aber es ist ja freiwillig».' },
            { kind: 'match', prompt: 'Für meine tägliche Bewegung brauche ich keine Uhr.', answer: 2, explanationRu: 'Д-р Ост гуляет с собакой и не нуждается в часах, «die mitzählt».' },
          ],
        },
      ],
    },
  ],
};
