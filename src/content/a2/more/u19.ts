import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich ___ morgen früh aufstehen.',
      options: ['werde', 'wird', 'werdet', 'wirst'],
      answer: 0,
      explanationRu: 'С ich глагол werden имеет форму werde. Инфинитив aufstehen стоит в конце целиком.',
    },
    {
      type: 'choice',
      prompt: 'Was ___ ihr in den Ferien machen?',
      options: ['werdet', 'werden', 'wird', 'werde'],
      answer: 0,
      explanationRu: 'С ihr — форма werdet: Was werdet ihr … machen?',
    },
    {
      type: 'choice',
      prompt: 'Mein Sohn ___ nächsten Monat achtzehn.',
      options: ['wird', 'werdet', 'würde', 'wäre'],
      answer: 0,
      explanationRu: 'Здесь werden значит «становиться»: Er wird achtzehn — ему исполнится восемнадцать. Инфинитива нет — это не Futur, а просто глагол werden в настоящем времени.',
    },
    {
      type: 'choice',
      audio: 'Wir werden im Juli nach Spanien fliegen.',
      prompt: 'Когда люди полетят в Испанию?',
      options: ['В июле', 'В июне', 'В январе'],
      answer: 0,
      explanationRu: '«im Juli» — в июле. Не путайте Juli (июль) и Juni (июнь).',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ gern ein bisschen jünger.',
      options: ['wäre', 'hätte', 'würde', 'werde'],
      answer: 0,
      explanationRu: '«Я хотел бы быть моложе» — желание «быть каким-то»: wäre gern + прилагательное.',
    },
    {
      type: 'choice',
      prompt: 'Meine Kinder ___ gern einen Hund.',
      options: ['hätten', 'wären', 'würden', 'werden'],
      answer: 0,
      explanationRu: 'Хотеть иметь что-то (einen Hund) — hätten gern. Подлежащее во множественном числе (meine Kinder = sie) → hätten.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Morgen ich werde dich anrufen.', 'Morgen werde ich dich anrufen.', 'Morgen werde ich anrufen dich.'],
      answer: 1,
      explanationRu: 'Morgen на 1-м месте → werde сразу на 2-м, потом ich. Инфинитив anrufen — в самом конце.',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet der Satz „Er wird Lehrer“?',
      options: ['Он станет учителем.', 'Он будет учить.', 'Он был учителем.'],
      answer: 0,
      explanationRu: 'werden + существительное = «становиться кем-то». Для «он будет учить» нужен инфинитив: Er wird unterrichten.',
    },
    {
      type: 'gap',
      prompt: 'Keine Angst, du ___ die Prüfung bestimmt bestehen!',
      answers: ['wirst'],
      hintRu: 'глагол werden',
      explanationRu: 'С du — форма wirst. Это прогноз/ободрение: «Ты наверняка сдашь экзамен».',
    },
    {
      type: 'gap',
      prompt: 'Ich bin so müde. Am liebsten ___ ich jetzt im Bett.',
      answers: ['wäre'],
      hintRu: 'sein в Konjunktiv II',
      explanationRu: '«Больше всего мне хотелось бы сейчас быть в постели» — wäre (Konjunktiv II от sein) + место.',
    },
    {
      type: 'gap',
      prompt: 'Ich ___ so gern mal eine Kreuzfahrt machen!',
      answers: ['würde'],
      hintRu: 'werden в Konjunktiv II',
      explanationRu: 'Желание что-то сделать: würde gern + инфинитив (machen) в конце.',
    },
    {
      type: 'gap',
      audio: 'Es wird morgen bestimmt schneien.',
      prompt: 'Послушайте: какая погода будет завтра? Es wird morgen bestimmt ___.',
      answers: ['schneien'],
      explanationRu: 'Вы слышите «schneien» — идти (о снеге). Futur: es wird … schneien.',
    },
    {
      type: 'gap',
      prompt: 'Ich glaube, dass wir den Zug noch erreichen ___.',
      answers: ['werden', 'können'],
      hintRu: 'глагол werden',
      explanationRu: 'В придаточном с dass спрягаемый глагол стоит в самом конце: … erreichen werden.',
    },
    {
      type: 'order',
      words: ['Ich', 'werde', 'dir', 'eine Postkarte', 'schicken.'],
      translationRu: 'Я пришлю тебе открытку.',
      explanationRu: 'werde на 2-м месте; дательный dir обычно стоит перед существительным eine Postkarte; инфинитив schicken — в конце.',
    },
    {
      type: 'order',
      words: ['Am liebsten', 'würde', 'ich', 'im Garten', 'arbeiten.'],
      translationRu: 'Больше всего мне хотелось бы работать в саду.',
      explanationRu: '«Am liebsten» на 1-м месте, würde — на 2-м, затем ich; инфинитив arbeiten — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните предложение с «Ich glaube, dass …».',
      prompt: 'Er wird bald heiraten.',
      answers: ['Ich glaube, dass er bald heiraten wird.'],
      explanationRu: 'После dass спрягаемый глагол wird уходит в самый конец, после инфинитива heiraten.',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите это как желание с «hätte gern».',
      prompt: 'Ich habe ein großes Auto.',
      answers: ['Ich hätte gern ein großes Auto.', 'Ich hätte gerne ein großes Auto.'],
      explanationRu: 'habe → hätte gern. Окончание прилагательного не меняется: ein großes Auto (средний род, Akkusativ).',
    },
    {
      type: 'choice',
      prompt: 'Wiederholung (Relativsatz): Das ist der Mann, ___ mir im Bürgeramt geholfen hat.',
      options: ['der', 'den', 'die', 'das'],
      answer: 0,
      explanationRu: 'Повторение: der Mann — мужской род, и в придаточном он подлежащее (он помог) → Nominativ der.',
    },
    {
      type: 'gap',
      prompt: 'Wiederholung (Passiv): Der Müll ___ jeden Dienstag abgeholt.',
      answers: ['wird'],
      explanationRu: 'Повторение: пассив = werden + Partizip II (abgeholt). Сравните: Futur = werden + инфинитив, пассив = werden + Partizip II.',
    },
    {
      type: 'gap',
      audio: 'Ich lerne seit zwei Jahren Deutsch.',
      prompt: 'Повторение (seit). Послушайте и вставьте: Ich lerne seit ___ Jahren Deutsch.',
      answers: ['zwei', '2'],
      explanationRu: 'Вы слышите «seit zwei Jahren» — уже два года. После seit — Dativ (Jahren) и настоящее время.',
    },
  ],
  reading: [
    {
      title: 'Bald in Rente – und dann?',
      textType: 'Forumsbeiträge',
      texts: [
        {
          heading: 'Forum „Neue Zeit“',
          body: 'Bald in Rente – was sind Ihre Pläne? Erzählen Sie!',
        },
        {
          label: 'Gerhard, 64',
          body: 'In drei Monaten ist es so weit: Dann bin ich Rentner! Zuerst werde ich gar nichts machen, nur lange schlafen und Zeitung lesen. Aber dann möchte ich etwas Sinnvolles tun. Ich war vierzig Jahre Elektriker. Ich werde jungen Leuten in einer Werkstatt helfen – ohne Geld natürlich.',
        },
        {
          label: 'Larissa, 62',
          body: 'Ich gehe im Herbst in Rente. Mein Mann und ich träumen von einem kleinen Haus auf dem Land. Wir würden gern Gemüse im eigenen Garten haben und vielleicht ein paar Hühner. Unsere Kinder finden die Idee verrückt. Aber wir haben schon ein Haus gesehen, nur dreißig Kilometer von der Stadt.',
        },
        {
          label: 'Bernd, 66',
          body: 'Ich bin schon seit einem Jahr Rentner. Mein Tipp: Planen Sie nicht zu viel! Ich hatte eine lange Liste: Spanisch lernen, Gitarre spielen, nach Kanada reisen … Am Ende hatte ich mehr Stress als bei der Arbeit. Jetzt mache ich nur noch zwei Sachen: Zweimal pro Woche passe ich auf meine Enkelin auf, und ich gehe jeden Tag schwimmen.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Forumsbeiträge. Zu welcher Person passt die Aussage?',
          instructionRu: 'Прочитайте сообщения на форуме. К какому человеку относится утверждение?',
          options: ['Gerhard', 'Larissa', 'Bernd'],
          items: [
            { kind: 'match', prompt: 'Diese Person ist schon in Rente.', answer: 2, explanationRu: 'Бернд: «Ich bin schon seit einem Jahr Rentner» — он уже год на пенсии.' },
            { kind: 'match', prompt: 'Diese Person möchte zuerst einmal nur ausruhen.', answer: 0, explanationRu: 'Герхард: «Zuerst werde ich gar nichts machen, nur lange schlafen und Zeitung lesen».' },
            { kind: 'match', prompt: 'Diese Person möchte jungen Menschen mit ihrer Berufserfahrung helfen.', answer: 0, explanationRu: 'Герхард 40 лет был электриком и будет бесплатно помогать молодым в мастерской.' },
            { kind: 'match', prompt: 'Diese Person möchte aufs Land ziehen.', answer: 1, explanationRu: 'Лариса: «Wir träumen von einem kleinen Haus auf dem Land».' },
            { kind: 'match', prompt: 'Die Familie dieser Person findet den Plan nicht gut.', answer: 1, explanationRu: 'Лариса: «Unsere Kinder finden die Idee verrückt» — дети считают идею сумасшедшей.' },
            { kind: 'match', prompt: 'Diese Person hatte am Anfang zu viele Pläne.', answer: 2, explanationRu: 'Бернд: «Ich hatte eine lange Liste … Am Ende hatte ich mehr Stress als bei der Arbeit».' },
          ],
        },
      ],
    },
    {
      title: 'Große Neuigkeiten',
      textType: 'E-Mail',
      texts: [
        {
          heading: 'Betreff: Große Neuigkeiten!',
          body: `Liebe Tanja,

wie geht es dir? Bei uns gibt es große Neuigkeiten: Wir werden nächsten Sommer nach Freiburg umziehen! Thomas hat dort eine neue Stelle gefunden. Er wird in einem Krankenhaus arbeiten, und das Gehalt ist viel besser. Ich bin ein bisschen traurig, weil ich meine Freundinnen hier sehr vermissen werde. Aber Freiburg ist eine schöne Stadt, und das Wetter ist dort wärmer als in Hamburg.

Am liebsten hätte ich eine Wohnung mit Garten, aber das ist in Freiburg sehr teuer. Wahrscheinlich werden wir zuerst eine kleine Wohnung mieten.

Und ich habe auch einen persönlichen Plan: Ich werde endlich meinen Führerschein machen. Mit 45 Jahren! Ich bin jetzt schon nervös.

Wirst du uns in Freiburg besuchen? Wir haben bestimmt ein Gästezimmer für dich.

Liebe Grüße
deine Sabine`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Sabine und Thomas ziehen in diesem Sommer um.', answer: false, explanationRu: 'В письме: «nächsten Sommer» — следующим летом, а не этим.' },
            { kind: 'tf', statement: 'Thomas hat in Freiburg eine Arbeit gefunden.', answer: true, explanationRu: '«Thomas hat dort eine neue Stelle gefunden» — он будет работать в больнице.' },
            { kind: 'tf', statement: 'Sabine freut sich nur auf den Umzug.', answer: false, explanationRu: 'Сабина немного грустит, потому что будет скучать по подругам: «Ich bin ein bisschen traurig».' },
            { kind: 'tf', statement: 'Sabine wünscht sich eine Wohnung mit Garten.', answer: true, explanationRu: '«Am liebsten hätte ich eine Wohnung mit Garten» — это её желание.' },
            { kind: 'tf', statement: 'Sabine hat schon einen Führerschein.', answer: false, explanationRu: '«Ich werde endlich meinen Führerschein machen» — у неё ещё нет прав.' },
            { kind: 'tf', statement: 'Sabine lädt Tanja nach Freiburg ein.', answer: true, explanationRu: '«Wirst du uns in Freiburg besuchen? Wir haben bestimmt ein Gästezimmer für dich.»' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Ein Geburtstag in Dresden',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: 'Hallo Peter, hier ist Klaus. Du weißt ja, nächsten Monat werde ich sechzig. Ich möchte keine große Party machen. Ich würde lieber mit ein paar Freunden einen Ausflug machen. Mein Plan: Wir werden am Samstag, dem 14. Juni, mit dem Zug nach Dresden fahren. Dort werden wir eine Stadtführung machen und dann zusammen essen gehen. Der Zug fährt um neun Uhr. Das Ticket kostet nur zwanzig Euro, und ich bezahle das Essen. Bitte sag mir bis Mittwoch, ob du mitkommst. Ruf mich am besten abends an, tagsüber bin ich noch bei der Arbeit. Tschüss!',
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте сообщение. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was möchte Klaus zum Geburtstag machen?', options: ['Eine große Party', 'Einen Ausflug mit Freunden', 'Eine Reise allein'], answer: 1, explanationRu: '«Ich möchte keine große Party machen. Ich würde lieber mit ein paar Freunden einen Ausflug machen.»' },
            { kind: 'mc', question: 'Wie fahren die Freunde nach Dresden?', options: ['Mit dem Auto', 'Mit dem Bus', 'Mit dem Zug'], answer: 2, explanationRu: '«…mit dem Zug nach Dresden fahren. Der Zug fährt um neun Uhr.»' },
            { kind: 'mc', question: 'Was bezahlt Klaus?', options: ['Das Ticket', 'Das Essen', 'Die Stadtführung'], answer: 1, explanationRu: 'Билет стоит 20 евро (каждый платит сам), а Клаус платит за еду: «ich bezahle das Essen».' },
            { kind: 'mc', question: 'Wann soll Peter Klaus anrufen?', options: ['Am Morgen', 'Am Abend', 'In der Mittagspause'], answer: 1, explanationRu: '«Ruf mich am besten abends an, tagsüber bin ich noch bei der Arbeit.»' },
          ],
        },
      ],
    },
    {
      title: 'Gute Vorsätze',
      kind: 'dialog',
      speakers: { A: 'Jan', B: 'Maria' },
      situation: 'Sie hören ein Gespräch zwischen zwei Kollegen am 30. Dezember.',
      text: `A: Sag mal, Maria, hast du schon gute Vorsätze für das neue Jahr?
B: Ja, natürlich! Nächstes Jahr werde ich mehr Sport machen. Ich habe mich schon im Fitnessstudio angemeldet.
A: Das hast du letztes Jahr auch gesagt.
B: Ich weiß. Aber diesmal habe ich schon bezahlt, für zwölf Monate. Und du?
A: Ich werde mit dem Rauchen aufhören. Mein Arzt sagt das schon lange.
B: Das ist ein guter Plan. Und sonst?
A: Ich würde gern mehr reisen. Am liebsten würde ich mal nach Island fliegen. Die Natur dort ist fantastisch.
B: Island ist aber teuer.
A: Ja, das stimmt. Ich werde jeden Monat hundert Euro sparen. Ohne Zigaretten habe ich ja mehr Geld.
B: Gute Idee! Und ich hätte gern mehr Zeit für meine Familie. Ich arbeite einfach zu viel.
A: Dann mach doch weniger Überstunden!
B: Das ist leider nicht so einfach.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Maria hat sich schon im Fitnessstudio angemeldet.', answer: true, explanationRu: '«Ich habe mich schon im Fitnessstudio angemeldet» и даже заплатила за 12 месяцев.' },
            { kind: 'tf', statement: 'Maria hatte letztes Jahr keine guten Vorsätze.', answer: false, explanationRu: 'Ян говорит: «Das hast du letztes Jahr auch gesagt» — в прошлом году она обещала то же самое.' },
            { kind: 'tf', statement: 'Jan will nicht mehr rauchen.', answer: true, explanationRu: '«Ich werde mit dem Rauchen aufhören.»' },
            { kind: 'tf', statement: 'Jan war schon einmal in Island.', answer: false, explanationRu: '«Am liebsten würde ich mal nach Island fliegen» — это только мечта, он там ещё не был.' },
            { kind: 'tf', statement: 'Maria möchte mehr Zeit mit ihrer Familie verbringen.', answer: true, explanationRu: '«Ich hätte gern mehr Zeit für meine Familie.»' },
          ],
        },
      ],
    },
  ],
};
