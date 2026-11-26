import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wir ___ gestern nicht draußen spielen, weil es stark geregnet hat.',
      options: ['konnten', 'können', 'könnten', 'gekonnt'],
      answer: 0,
      explanationRu: 'Прошлое (gestern) → претерит от können: wir konnten (без умлаута).',
    },
    {
      type: 'choice',
      prompt: 'Komm, Tim, ___ uns nach dem Training noch ein Eis essen!',
      options: ['lass', 'lässt', 'lasse', 'ließ'],
      answer: 0,
      explanationRu: 'Предложение «давай …» одному человеку (du) → императив lass uns … .',
    },
    {
      type: 'choice',
      prompt: '„Ich lasse mein Rad reparieren.“ Was bedeutet das?',
      options: [
        'Ich repariere mein Rad selbst.',
        'Jemand anderes repariert mein Rad für mich.',
        'Ich repariere mein Rad nicht mehr.',
      ],
      answer: 1,
      explanationRu: 'lassen + инфинитив = поручить сделать: чинит кто-то другой (мастер).',
    },
    {
      type: 'choice',
      prompt: '„Die Trainerin ließ die Kinder früher nach Hause gehen.“ Was bedeutet das?',
      options: ['Sie erlaubte es ihnen.', 'Sie verbot es ihnen.', 'Sie brachte die Kinder selbst nach Hause.'],
      answer: 0,
      explanationRu: 'Здесь lassen значит «позволить, отпустить»: тренер разрешила детям уйти раньше.',
    },
    {
      type: 'choice',
      prompt: 'Letzte Saison ___ unser bester Spieler wegen einer Verletzung drei Monate pausieren.',
      options: ['musste', 'müsste', 'muss', 'musstet'],
      answer: 0,
      explanationRu: 'Ловушка: прошлое → musste (без умлаута). müsste — Konjunktiv II («должен был бы»).',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: [
        'Du brauchst nicht zu kommen.',
        'Du brauchst zu kommen.',
        'Du brauchst nicht kommen zu.',
        'Du musst nicht zu kommen.',
      ],
      answer: 0,
      explanationRu: 'brauchen + zu употребляется только с nicht/kein/nur; zu стоит прямо перед инфинитивом в конце. После müssen zu не ставится.',
    },
    {
      type: 'choice',
      prompt: 'Gestern ___ ich eigentlich ins Fitnessstudio gehen, aber dann war ich zu müde.',
      options: ['wollte', 'möchtete', 'mochte', 'möchte'],
      answer: 0,
      explanationRu: 'Ловушка: у möchte нет своего прошедшего времени, вместо него — wollte. mochte — претерит от mögen («любил, нравилось»).',
    },
    {
      type: 'gap',
      prompt: 'Ich habe meine Laufschuhe im Geschäft reparieren ___.',
      answers: ['lassen'],
      explanationRu: 'Перфект с другим инфинитивом: reparieren lassen (не gelassen).',
    },
    {
      type: 'gap',
      prompt: 'Ich habe meine Jacke im Vereinsheim ___.',
      answers: ['gelassen', 'liegen lassen', 'liegen gelassen'],
      hintRu: 'lassen',
      explanationRu: 'Здесь нет второго инфинитива, lassen значит «оставить» → обычное Partizip II gelassen.',
    },
    {
      type: 'gap',
      prompt: 'Für das Probetraining brauchen Sie keinen Termin ___.',
      answers: ['zu vereinbaren'],
      hintRu: 'vereinbaren',
      explanationRu: 'brauchen kein … zu + инфинитив: keinen Termin zu vereinbaren (= Sie müssen keinen Termin vereinbaren).',
    },
    {
      type: 'gap',
      prompt: 'Ihr ___ gestern leider nicht mitspielen, weil ihr zu spät gekommen seid.',
      answers: ['durftet'],
      hintRu: 'dürfen',
      explanationRu: 'Претерит от dürfen для ihr: ihr durftet. В придаточном с weil глагол seid стоит в конце.',
    },
    {
      type: 'gap',
      prompt: 'Du ___ nur kurz anzurufen, wenn du nicht kommen kannst.',
      answers: ['brauchst'],
      explanationRu: 'nur … zu + инфинитив (anzurufen) → brauchen: du brauchst nur anzurufen = тебе нужно только позвонить.',
    },
    {
      type: 'gap',
      prompt: 'Weil die Halle geschlossen war, ___ wir das Training gestern ausfallen lassen.',
      answers: ['mussten'],
      hintRu: 'müssen',
      explanationRu: 'Претерит от müssen: wir mussten. В конце — два инфинитива: ausfallen lassen («пришлось отменить тренировку»).',
    },
    {
      type: 'gap',
      prompt: 'Wegen ___ Regens fiel das Spiel am Sonntag aus.',
      answers: ['des'],
      explanationRu: 'Повторение юнита 15: wegen + Genitiv; der Regen → des Regens.',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich mehr Zeit hätte, ___ ich öfter trainieren.',
      answers: ['könnte', 'würde'],
      hintRu: 'können, Konjunktiv II',
      explanationRu: 'Повторение юнита 8: нереальное условие → Konjunktiv II könnte (с умлаутом!). Сравните: konnte — претерит, könnte — «мог бы».',
    },
    {
      type: 'order',
      words: ['Ich', 'brauchte', 'nur', 'meine', 'Sportschuhe', 'mitzubringen.'],
      translationRu: 'Мне нужно было принести только свои кроссовки.',
      explanationRu: 'brauchen тоже бывает в претерите: brauchte. Инфинитив с zu (mitzubringen) — в конце.',
    },
    {
      type: 'order',
      words: ['Die', 'Eltern', 'haben', 'ihre', 'Kinder', 'allein', 'zum', 'Turnier', 'fahren', 'lassen.'],
      translationRu: 'Родители отпустили детей на турнир одних.',
      explanationRu: 'Перфект: haben на втором месте, в конце — двойной инфинитив fahren lassen.',
    },
    {
      type: 'transform',
      instructionRu: 'Ракетку чинили в мастерской. Перепишите предложение с lassen (в перфекте).',
      prompt: 'Ich habe meinen Tennisschläger repariert.',
      answers: ['Ich habe meinen Tennisschläger reparieren lassen.'],
      explanationRu: 'Если работу сделал другой человек, нужен lassen: Partizip repariert → инфинитив reparieren + lassen в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените müssen на brauchen nur … zu.',
      prompt: 'Sie müssen nur das Formular unterschreiben.',
      answers: ['Sie brauchen nur das Formular zu unterschreiben.'],
      explanationRu: 'müssen nur = brauchen nur … zu; zu ставится перед инфинитивом: zu unterschreiben (unterschreiben — неотделяемый глагол).',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте предложение в претерит.',
      prompt: 'Wir dürfen am Wochenende nicht in der Halle trainieren, deshalb müssen wir draußen laufen.',
      answers: ['Wir durften am Wochenende nicht in der Halle trainieren, deshalb mussten wir draußen laufen.'],
      explanationRu: 'dürfen → durften, müssen → mussten. Порядок слов не меняется: после deshalb сразу глагол.',
    },
  ],
  reading: [
    {
      title: 'Mein erstes Jahr als Trainerin',
      textType: 'Blogbeitrag',
      texts: [
        {
          body: `Hallo zusammen! Ich bin Natalia, 31, und heute möchte ich euch erzählen, wie ich – ohne es zu planen – Fußballtrainerin geworden bin.

Vor einem Jahr hat meine Tochter Mila angefangen, im FC Lindenau zu spielen. Ich habe sie jeden Dienstag zum Training gebracht und am Rand gewartet. Eines Tages sprach mich der Vorsitzende an: Die Trainerin der Mädchenmannschaft war umgezogen, und der Verein suchte dringend jemanden. „Sie sind doch jede Woche hier“, sagte er. Ehrlich gesagt wollte ich zuerst Nein sagen. Ich habe zwar als Jugendliche in Kasachstan selbst Fußball gespielt, aber eine Mannschaft trainieren? Und das auf Deutsch?

Mila hat mich schließlich überredet. Der Verein ließ mich einen Trainerkurs machen und hat ihn sogar bezahlt. Ich brauchte nur an vier Wochenenden teilzunehmen. Die ersten Trainingseinheiten waren trotzdem chaotisch: Ich konnte mir die Namen nicht merken, und die Mädchen durften am Anfang viel zu viel machen, was sie wollten. Ein erfahrener Kollege gab mir dann einen Tipp: klare Regeln, kurze Übungen und am Ende immer ein Spiel.

Jetzt läuft es viel besser. Wir trainieren zweimal pro Woche, und im Frühling haben wir zum ersten Mal ein Turnier gewonnen. Am meisten freut mich aber etwas anderes: Zwei Mädchen, die am Anfang kaum ein Wort gesprochen haben, sind heute richtige Freundinnen.

Für die Arbeit bekomme ich übrigens kein Gehalt, nur eine kleine Pauschale im Monat. Reich wird man als Trainerin im Verein also nicht. Aber ich habe so viel Neues gelernt – auch mein Deutsch ist viel besser geworden!`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Natalia wollte schon lange Trainerin werden.', answer: false, explanationRu: 'Она стала тренером «ohne es zu planen» и сначала хотела отказаться.' },
            { kind: 'tf', statement: 'Natalia hat früher selbst Fußball gespielt.', answer: true, explanationRu: '«…als Jugendliche in Kasachstan selbst Fußball gespielt».' },
            { kind: 'tf', statement: 'Natalia musste den Trainerkurs selbst bezahlen.', answer: false, explanationRu: 'Клуб не только отправил её на курс, но и оплатил его: «hat ihn sogar bezahlt».' },
            { kind: 'tf', statement: 'Am Anfang hatte Natalia Probleme mit der Disziplin in der Gruppe.', answer: true, explanationRu: 'Первые тренировки были хаотичными, девочки делали что хотели.' },
            { kind: 'tf', statement: 'Die Mannschaft hat bis heute noch kein Turnier gewonnen.', answer: false, explanationRu: 'Весной команда впервые выиграла турнир.' },
            { kind: 'tf', statement: 'Natalia bekommt für ihre Arbeit nur wenig Geld.', answer: true, explanationRu: 'Зарплаты нет, только небольшая ежемесячная компенсация (Pauschale).' },
          ],
        },
      ],
    },
    {
      title: 'Sport und Bewegung in Ihrer Stadt',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', heading: 'Lauftreff „Fit am Fluss“', body: 'Gemeinsam laufen macht mehr Spaß! Jeden Mittwoch um 18 Uhr am Parkeingang Süd. Gruppen für Anfänger und Fortgeschrittene. Keine Anmeldung, keine Kosten – einfach kommen!' },
        { label: 'b', heading: 'Endlich schwimmen lernen!', body: 'Schwimmkurs für Erwachsene ohne Vorkenntnisse im Hallenbad Mitte. Kleine Gruppen, geduldige Trainer. 8 Termine, samstags 9–10 Uhr, 80 Euro.' },
        { label: 'c', heading: 'Tennisclub Rot-Weiß', body: 'Schnupperstunden für Kinder und Erwachsene jeden Samstag. Schläger und Bälle stellen wir. Sie brauchen nur Turnschuhe mitzubringen!' },
        { label: 'd', heading: 'Fahrradwerkstatt Speiche', body: 'Lassen Sie Ihr Rad vor der Saison bei uns prüfen und reparieren! Wir holen es auf Wunsch bei Ihnen zu Hause ab. Inspektion ab 39 Euro.' },
        { label: 'e', heading: 'Rückenfit im Büro', body: 'Kurs für alle, die viel sitzen: Übungen gegen Rückenschmerzen. Zehn Abende, dienstags 19 Uhr. Viele Krankenkassen bezahlen einen Teil der Kosten.' },
        { label: 'f', heading: 'Bewegung ab 60', body: 'Gymnastik, Tanz und leichtes Krafttraining für Seniorinnen und Senioren. Dienstag und Donnerstag, 10–11 Uhr, im Gemeindezentrum. Danach gemeinsamer Kaffee.' },
        { label: 'g', heading: 'Boulderhalle Gipfelstürmer', body: 'Kindergeburtstag mal anders: zwei Stunden Klettern mit Betreuung, danach Pizza für alle. Für Kinder ab 6 Jahren, nur mit Reservierung.' },
        { label: 'h', heading: 'Sportbörse im Gymnasium Nord', body: 'Gebrauchte Ski, Skischuhe, Fahrräder und Sportkleidung günstig kaufen oder verkaufen. Samstag, 8. November, 9–14 Uhr. Gute Qualität zu kleinen Preisen!' },
        { label: 'i', heading: 'SV Eintracht sucht Verstärkung', body: 'Für unsere Jugendmannschaften suchen wir ehrenamtliche Trainerinnen und Trainer. Die Trainerausbildung bezahlt der Verein. Spaß am Fußball und an der Arbeit mit Kindern genügt!' },
        { label: 'j', heading: 'Stark und sicher', body: 'Selbstverteidigung für Frauen: Wochenendkurs mit erfahrener Kampfsporttrainerin. Samstag und Sonntag, 10–16 Uhr. Keine Vorkenntnisse nötig.' },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–7 und die Anzeigen a–j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–7 и объявления a–j. Какое объявление подходит к какой ситуации? Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет.',
          options: [
            'Lauftreff „Fit am Fluss“',
            'Endlich schwimmen lernen!',
            'Tennisclub Rot-Weiß',
            'Fahrradwerkstatt Speiche',
            'Rückenfit im Büro',
            'Bewegung ab 60',
            'Boulderhalle Gipfelstürmer',
            'Sportbörse im Gymnasium Nord',
            'SV Eintracht sucht Verstärkung',
            'Stark und sicher',
          ],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihr Nachbar ist 67 und möchte vormittags mit Leuten in seinem Alter Sport machen.', answer: 5, explanationRu: 'f: гимнастика и танцы для пожилых, по вторникам и четвергам утром.' },
            { kind: 'match', prompt: 'Ihre Kollegin ist 40 und kann leider nicht schwimmen.', answer: 1, explanationRu: 'b: курс плавания для взрослых без подготовки.' },
            { kind: 'match', prompt: 'Sie möchten nicht mehr allein joggen und wollen dafür kein Geld ausgeben.', answer: 0, explanationRu: 'a: совместные пробежки, бесплатно и без записи.' },
            { kind: 'match', prompt: 'Ihr Sohn möchte Tennis ausprobieren, hat aber keinen eigenen Schläger.', answer: 2, explanationRu: 'c: пробные занятия, ракетки и мячи даёт клуб.' },
            { kind: 'match', prompt: 'Ihre Tochter braucht für den Winterurlaub neue Skischuhe, die nicht viel kosten.', answer: 7, explanationRu: 'h: ярмарка подержанного спортивного снаряжения по низким ценам.' },
            { kind: 'match', prompt: 'Ein Freund liebt Fußball und möchte in seiner Freizeit mit Kindern arbeiten.', answer: 8, explanationRu: 'i: клуб ищет тренеров-волонтёров для детских команд.' },
            { kind: 'match', prompt: 'Ihre Schwester sucht einen Verein, in dem sie Basketball spielen kann.', answer: -1, explanationRu: 'Нет подходящего объявления: баскетбол нигде не предлагается.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Nach der Mitgliederversammlung',
      kind: 'dialog',
      speakers: { A: 'Petra', B: 'Ahmed' },
      situation: 'Sie hören ein Gespräch zwischen zwei Mitgliedern eines Volleyballvereins.',
      text: `A: Hallo Ahmed! Warst du gestern Abend bei der Mitgliederversammlung? Ich konnte leider nicht kommen, mein Sohn war krank.
B: Ja, ich war da. Es hat ewig gedauert, fast drei Stunden!
A: Oh je. Und? Was gibt es Neues?
B: Erstens: Der Mitgliedsbeitrag steigt. Ab Januar zahlen Erwachsene 15 statt 12 Euro im Monat.
A: Hm, das ist ärgerlich. Warum denn?
B: Die Stadt verlangt jetzt Miete für die Sporthalle. Früher durften die Vereine sie kostenlos benutzen. Der Kassenwart hat alles genau erklärt. Viele waren nicht begeistert, aber am Ende hat die Mehrheit zugestimmt.
A: Na gut. Und gibt es auch gute Nachrichten?
B: Ja! Der Verein lässt neue Netze und Bälle kaufen, und wir bekommen endlich neue Trikots. Die lassen wir mit dem Vereinslogo bedrucken.
A: Super. Die alten sind ja wirklich hässlich. Wer hat denn die Farbe ausgesucht?
B: Darüber haben wir abgestimmt. Blau.
A: Prima. Und was ist mit dem Sommerturnier?
B: Das findet wieder statt, am 14. Juni. Wir brauchen allerdings noch Helfer für den Kuchenstand. Ich habe dich gleich mal auf die Liste geschrieben. Ich hoffe, das ist okay.
A: Ach, Ahmed! Na ja, gut, ich backe gern. Muss ich den ganzen Tag dort stehen?
B: Nein, du brauchst nur zwei Stunden zu helfen, am Vormittag. Am Nachmittag spielen wir ja selbst.
A: Okay, dann bin ich dabei. Gab es sonst noch etwas?
B: Ja, Frau Schröder hört als Vorsitzende auf. Sie wollte schon letztes Jahr aufhören, aber niemand wollte das Amt übernehmen. Jetzt macht es Herr Becker.
A: Der Trainer der Jugendmannschaft? Der hat doch schon so viel zu tun!
B: Stimmt. Deshalb sucht er jetzt jemanden, der die Jugend übernimmt.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слышите разговор один раз. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Petra war gestern nicht bei der Versammlung, weil ihr Kind krank war.', answer: true, explanationRu: '«Ich konnte leider nicht kommen, mein Sohn war krank».' },
            { kind: 'tf', statement: 'Der Beitrag steigt, weil der Verein mehr Trainer braucht.', answer: false, explanationRu: 'Причина — город теперь берёт плату за аренду спортзала.' },
            { kind: 'tf', statement: 'Die meisten Mitglieder haben gegen die Erhöhung gestimmt.', answer: false, explanationRu: '«…am Ende hat die Mehrheit zugestimmt».' },
            { kind: 'tf', statement: 'Die neuen Trikots bekommen das Logo des Vereins.', answer: true, explanationRu: '«Die lassen wir mit dem Vereinslogo bedrucken».' },
            { kind: 'tf', statement: 'Petra soll beim Turnier den ganzen Tag am Kuchenstand helfen.', answer: false, explanationRu: 'Ей нужно помочь только два часа утром: «du brauchst nur zwei Stunden zu helfen».' },
            { kind: 'tf', statement: 'Frau Schröder wollte schon früher als Vorsitzende aufhören.', answer: true, explanationRu: '«Sie wollte schon letztes Jahr aufhören…».' },
            { kind: 'tf', statement: 'Herr Becker trainiert auch in Zukunft die Jugendmannschaft.', answer: false, explanationRu: 'Он ищет человека, который возьмёт юношескую команду.' },
          ],
        },
      ],
    },
    {
      title: 'Tag der offenen Tür im Sportverein',
      kind: 'monolog',
      situation: 'Sie nehmen an einer Führung durch einen Sportverein teil. Der Vorsitzende spricht zu den Besuchern.',
      text: `Herzlich willkommen beim TSV Waldheim! Schön, dass Sie heute zu unserem Tag der offenen Tür gekommen sind. Mein Name ist Jörg Hansen, ich bin seit diesem Frühjahr Vorsitzender des Vereins. Ich zeige Ihnen jetzt unser Gelände, und danach können Sie alles selbst ausprobieren.

Unser Verein wurde 1921 gegründet. Damals gab es nur eine einzige Abteilung, nämlich Turnen. Heute haben wir zwölf Abteilungen und über 1500 Mitglieder, das jüngste ist drei, das älteste 94 Jahre alt.

Hier links sehen Sie unseren neuen Kunstrasenplatz. Den haben wir letztes Jahr bauen lassen, zum Teil mit Geld von der Stadt, zum Teil mit Spenden unserer Mitglieder. Früher mussten unsere Fußballer bei Regen oft das Training absagen, weil der alte Rasen kaputtging. Das ist jetzt zum Glück vorbei.

Geradeaus ist die Sporthalle. Dort trainieren heute Nachmittag die Volleyballer und die Kinderturngruppe. Sie dürfen gern zuschauen, aber bitte gehen Sie nur mit sauberen Hallenschuhen hinein.

Und rechts, das kleine Haus mit der Terrasse, ist unser Vereinsheim. Dort gibt es heute Kaffee und Kuchen – den haben unsere Mitglieder selbst gebacken. Der Erlös geht an unsere Jugendabteilung.

Noch ein Wort zur Mitgliedschaft: Wer heute ein Anmeldeformular ausfüllt, braucht im ersten Monat keinen Beitrag zu bezahlen. Sie können also in Ruhe ausprobieren, ob unser Verein zu Ihnen passt. Und jetzt: Viel Spaß!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören den Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите текст один раз. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was erfahren die Besucher über die Geschichte des Vereins?',
              options: [
                'Am Anfang konnte man im Verein nur turnen.',
                'Der Verein hatte schon immer zwölf Abteilungen.',
                'Der Verein wurde im letzten Frühjahr gegründet.',
              ],
              answer: 0,
              explanationRu: 'В 1921 году было только одно отделение — гимнастика.',
            },
            {
              kind: 'mc',
              question: 'Wer hat den Kunstrasenplatz bezahlt?',
              options: ['Nur die Stadt.', 'Die Stadt und Mitglieder mit Spenden.', 'Ein Sportgeschäft.'],
              answer: 1,
              explanationRu: '«…zum Teil mit Geld von der Stadt, zum Teil mit Spenden unserer Mitglieder».',
            },
            {
              kind: 'mc',
              question: 'Welches Problem gab es früher?',
              options: [
                'Es gab keine Trainer für die Fußballer.',
                'Die Sporthalle war zu klein.',
                'Bei Regen fiel das Fußballtraining oft aus.',
              ],
              answer: 2,
              explanationRu: '«Früher mussten unsere Fußballer bei Regen oft das Training absagen».',
            },
            {
              kind: 'mc',
              question: 'Was müssen Besucher in der Sporthalle beachten?',
              options: [
                'Sie dürfen nicht hineingehen.',
                'Sie brauchen saubere Hallenschuhe.',
                'Sie müssen sich vorher anmelden.',
              ],
              answer: 1,
              explanationRu: 'Смотреть можно, но заходить только в чистой сменной обуви.',
            },
            {
              kind: 'mc',
              question: 'Was bekommen neue Mitglieder, die sich heute anmelden?',
              options: ['Ein Stück Kuchen gratis.', 'Einen Monat ohne Beitrag.', 'Ein Vereinstrikot.'],
              answer: 1,
              explanationRu: '«…braucht im ersten Monat keinen Beitrag zu bezahlen».',
            },
          ],
        },
      ],
    },
  ],
};
