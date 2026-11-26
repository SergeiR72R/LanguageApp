import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-20',
  level: 'B1',
  order: 20,
  title: 'Auf dem Weg zum Zertifikat',
  titleRu: 'На пути к сертификату',
  goalsRu: [
    'Уверенно строить порядок слов: рамочная конструкция, первое место и инверсия',
    'Правильно располагать обстоятельства и дополнения в середине предложения (TeKaMoLo)',
    'Ставить nicht на нужное место и различать nicht и kein',
    'Повторить грамматику B1 и подготовиться к заданиям экзамена Goethe-Zertifikat B1 (в том числе в поездке на экзамен)',
  ],
  grammar: {
    topic: 'Wortstellung: Satzklammer, Mittelfeld (TeKaMoLo), Position von „nicht“, Inversion',
    topicRu: 'Порядок слов: рамочная конструкция, середина предложения, место nicht, инверсия',
    explanationRu: `**Рамочная конструкция (Satzklammer).** В главном предложении спрягаемый глагол стоит на **2-м месте**, а вторая часть сказуемого — **в самом конце**: Ich **habe** gestern lange für die Prüfung **gelernt**. Так же работают модальные глаголы (kann … verstehen), отделяемые приставки (fährt … ab), пассив (wird … kontrolliert) и Futur (werde … bestehen). В вопросе без вопросительного слова глагол на 1-м месте: **Hast** du das Ticket **gebucht**?

**Первое место и инверсия.** На первом месте может стоять любой член предложения: обстоятельство, дополнение или целое придаточное. Тогда подлежащее идёт **после** глагола: Morgen **fahre ich** nach Wien. Wenn ich bestehe, **feiere ich**. Союзы und, aber, oder, denn, sondern стоят на «нулевом» месте и порядок слов не меняют.

**Середина предложения (Mittelfeld).** Обстоятельства обычно идут в порядке **TeKaMoLo**: **te**mporal (когда?) – **ka**usal (почему?) – **mo**dal (как?) – **lo**kal (где? куда?): Ich fahre morgen wegen der Prüfung mit dem Zug nach Köln. Дополнения-существительные: **Dativ перед Akkusativ** (Ich zeige dem Prüfer den Ausweis). Местоимения: **Akkusativ перед Dativ** (Ich zeige ihn ihm), и местоимения стоят раньше существительных.

**Место nicht.**
- Отрицание всего предложения: nicht стоит ближе к концу, но **перед** второй частью рамки, перед предложным дополнением, направлением и предикативом: Ich habe das Formular **nicht** ausgefüllt. Er wartet **nicht** auf den Bus. Das Hotel ist **nicht** teuer.
- Дополнения с артиклем и местоимения, а также heute, gestern стоят **перед** nicht: Ich finde meinen Pass **nicht**. Ich komme heute **nicht**.
- Частичное отрицание: nicht прямо перед отрицаемым словом, часто с sondern: Nicht ich, sondern mein Bruder hat gebucht.
- Существительное с неопределённым артиклем или без артикля отрицается словом **kein**.

**Типичные ошибки русскоговорящих:**
- «Morgen ich fahre …» → **Morgen fahre ich …**
- «Ich habe gelernt gestern» → **Ich habe gestern gelernt.**
- nicht сразу после глагола, как русское «не»: «Ich habe nicht das Formular ausgefüllt» → **Ich habe das Formular nicht ausgefüllt.**
- «Ich habe nicht Zeit» → **Ich habe keine Zeit.**
- «Wenn ich Zeit habe, ich komme» → **…, komme ich.**`,
    table: [
      ['Позиция 1 (Vorfeld)', 'Глагол (поз. 2)', 'Середина (Mittelfeld)', 'Конец рамки'],
      ['Ich', 'bin', 'gestern wegen des Streiks mit dem Bus nach Köln', 'gefahren.'],
      ['Morgen', 'darf', 'ich meinen Ausweis auf keinen Fall', 'vergessen.'],
      ['Den Antwortbogen', 'hat', 'die Aufsicht leider noch nicht', 'eingesammelt.'],
      ['Wenn ich bestehe,', 'lade', 'ich alle meine Freunde zum Essen', 'ein.'],
      ['Wann', 'fährt', 'der Anschlusszug', 'ab?'],
    ],
    examples: [
      { de: 'Am Samstag fahre ich wegen der Prüfung schon früh mit dem Zug nach Leipzig.', ru: 'В субботу из-за экзамена я рано утром еду на поезде в Лейпциг.' },
      { de: 'Den Personalausweis musst du unbedingt mitbringen.', ru: 'Удостоверение личности ты обязательно должен взять с собой.' },
      { de: 'Leider habe ich die Durchsage am Bahnsteig nicht verstanden.', ru: 'К сожалению, я не понял объявление на перроне.' },
      { de: 'Der Prüfer hat mir die Aufgabe noch einmal erklärt. – Er hat sie mir noch einmal erklärt.', ru: 'Экзаменатор ещё раз объяснил мне задание. – Он ещё раз мне его объяснил.' },
      { de: 'Nicht der Hörteil, sondern der Schreibteil war für mich am schwierigsten.', ru: 'Самой трудной для меня была не часть «Аудирование», а «Письмо».' },
      { de: 'Wenn du alle Aufgaben ruhig liest, wirst du die Prüfung bestimmt bestehen.', ru: 'Если ты спокойно прочитаешь все задания, ты наверняка сдашь экзамен.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: ['Morgen ich fahre nach Wien.', 'Morgen fahre ich nach Wien.', 'Morgen fahre nach Wien ich.'],
        answer: 1,
        explanationRu: 'Глагол всегда на 2-м месте. Если первое место занято (Morgen), подлежащее стоит после глагола — инверсия.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: ['Ich habe heute nicht Zeit.', 'Ich nicht habe heute Zeit.', 'Ich habe heute keine Zeit.'],
        answer: 2,
        explanationRu: 'Существительное без артикля отрицается через kein: keine Zeit. nicht не может стоять перед спрягаемым глаголом.',
      },
      {
        type: 'choice',
        prompt: 'Welche Reihenfolge ist am natürlichsten?',
        options: [
          'Wir fahren morgen mit dem Zug nach Salzburg.',
          'Wir fahren nach Salzburg mit dem Zug morgen.',
          'Wir fahren mit dem Zug nach Salzburg morgen.',
        ],
        answer: 0,
        explanationRu: 'TeKaMoLo: сначала время (morgen), потом способ (mit dem Zug), в конце место/направление (nach Salzburg).',
      },
      {
        type: 'choice',
        prompt: 'Wenn der Zug Verspätung hat, ___',
        options: ['ich nehme ein Taxi.', 'nehme ich ein Taxi.', 'ein Taxi ich nehme.'],
        answer: 1,
        explanationRu: 'Придаточное занимает первое место, поэтому главное предложение начинается с глагола: «…, nehme ich …» (глагол — запятая — глагол).',
      },
      {
        type: 'gap',
        prompt: 'Wir sind gestern erst um Mitternacht in Hamburg ___.',
        answers: ['angekommen'],
        hintRu: 'ankommen, Perfekt',
        explanationRu: 'Perfekt образует рамку: sind … angekommen. Причастие стоит в самом конце.',
      },
      {
        type: 'gap',
        prompt: 'Der Anschlusszug fährt um 7:15 Uhr von Gleis 4 ___.',
        answers: ['ab'],
        hintRu: 'abfahren',
        explanationRu: 'Отделяемая приставка образует вторую часть рамки и стоит в конце: fährt … ab.',
      },
      {
        type: 'gap',
        prompt: 'Hast du dem Prüfer den Ausweis gezeigt? – Ja, ich habe ___ ihm gezeigt.',
        answers: ['ihn'],
        hintRu: 'den Ausweis → местоимение',
        explanationRu: 'Если оба дополнения — местоимения, Akkusativ стоит перед Dativ: ihn ihm.',
      },
      {
        type: 'gap',
        prompt: 'Im Zug gab es leider ___ WLAN, deshalb konnte ich nicht lernen.',
        answers: ['kein'],
        explanationRu: 'Существительное без артикля (WLAN) отрицается через kein, а не nicht.',
      },
      {
        type: 'order',
        words: ['Ich', 'fahre', 'morgen', 'wegen', 'der', 'Prüfung', 'mit', 'dem', 'Zug', 'nach', 'München.'],
        translationRu: 'Завтра я из-за экзамена еду на поезде в Мюнхен.',
        explanationRu: 'Порядок TeKaMoLo: morgen (temporal) – wegen der Prüfung (kausal) – mit dem Zug (modal) – nach München (lokal).',
      },
      {
        type: 'order',
        words: ['Leider', 'habe', 'ich', 'meinen', 'Ausweis', 'zu', 'Hause', 'vergessen.'],
        translationRu: 'К сожалению, я забыл удостоверение дома.',
        explanationRu: 'Leider на первом месте → инверсия (habe ich). Причастие vergessen закрывает рамку в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Начните предложение с «Am Samstag».',
        prompt: 'Wir schreiben am Samstag die Prüfung.',
        answers: ['Am Samstag schreiben wir die Prüfung.'],
        explanationRu: 'Обстоятельство на первом месте, глагол остаётся на втором, подлежащее wir переходит за глагол.',
      },
      {
        type: 'transform',
        instructionRu: 'Сделайте отрицание всего предложения с помощью nicht.',
        prompt: 'Ich habe die Aufgabenstellung gestern genau gelesen.',
        answers: [
          'Ich habe die Aufgabenstellung gestern nicht genau gelesen.',
          'Ich habe gestern die Aufgabenstellung nicht genau gelesen.',
        ],
        explanationRu: 'Дополнение с артиклем и gestern стоят перед nicht; nicht стоит перед модальным словом genau и причастием в конце.',
      },
    ],
  },
  vocab: [
    { de: 'Teilnehmer', article: 'der', plural: '-', pos: 'noun', ru: 'участник (die Teilnehmerin — участница)', example: 'Alle Teilnehmer müssen um 8:30 Uhr im Prüfungsraum sein.', exampleRu: 'Все участники должны быть в аудитории в 8:30.' },
    { de: 'Prüfer', article: 'der', plural: '-', pos: 'noun', ru: 'экзаменатор (die Prüferin)', example: 'Die beiden Prüfer waren sehr freundlich und haben langsam gesprochen.', exampleRu: 'Оба экзаменатора были очень дружелюбны и говорили медленно.' },
    { de: 'Aufsicht', article: 'die', plural: '-en', pos: 'noun', ru: 'надзор; наблюдатель (на экзамене)', example: 'Die Aufsicht sammelt nach 65 Minuten die Antwortbögen ein.', exampleRu: 'Через 65 минут наблюдатель собирает листы ответов.' },
    { de: 'Personalausweis', article: 'der', plural: '-e', pos: 'noun', ru: 'удостоверение личности, ID-карта', example: 'Ohne gültigen Personalausweis oder Pass dürfen Sie nicht an der Prüfung teilnehmen.', exampleRu: 'Без действующего удостоверения личности или паспорта вас не допустят к экзамену.' },
    { de: 'Antwortbogen', article: 'der', plural: '-¨', pos: 'noun', ru: 'лист ответов, бланк ответов', example: 'Übertragen Sie Ihre Lösungen am Ende auf den Antwortbogen.', exampleRu: 'В конце перенесите свои ответы в бланк ответов.' },
    { de: 'Punktzahl', article: 'die', plural: '-en', pos: 'noun', ru: 'количество баллов', example: 'Für das Bestehen braucht man in jedem Modul mindestens 60 Prozent der Punktzahl.', exampleRu: 'Чтобы сдать, нужно в каждом модуле набрать минимум 60 процентов баллов.' },
    { de: 'bestehen', forms: 'besteht, bestand, hat bestanden', pos: 'verb', ru: 'сдать (экзамен); существовать', example: 'Sie hat die B1-Prüfung im ersten Versuch bestanden.', exampleRu: 'Она сдала экзамен B1 с первой попытки.' },
    { de: 'ankreuzen', forms: 'kreuzt an, kreuzte an, hat angekreuzt', pos: 'verb', ru: 'отмечать крестиком', example: 'Kreuzen Sie bei jeder Aufgabe nur eine Lösung an.', exampleRu: 'Отметьте в каждом задании только один ответ.' },
    { de: 'Anmeldeschluss', article: 'der', plural: '–', pos: 'noun', ru: 'последний срок регистрации', example: 'Anmeldeschluss für den Prüfungstermin im Juni ist der 15. Mai.', exampleRu: 'Регистрация на экзамен в июне заканчивается 15 мая.' },
    { de: 'Prüfungsgebühr', article: 'die', plural: '-en', pos: 'noun', ru: 'плата за экзамен', example: 'Die Prüfungsgebühr muss vor dem Anmeldeschluss überwiesen werden.', exampleRu: 'Плату за экзамен нужно перечислить до окончания регистрации.' },
    { de: 'Aufgabenstellung', article: 'die', plural: '-en', pos: 'noun', ru: 'формулировка задания', example: 'Lesen Sie die Aufgabenstellung genau, bevor Sie anfangen zu schreiben.', exampleRu: 'Внимательно прочитайте задание, прежде чем начать писать.' },
    { de: 'Wiederholung', article: 'die', plural: '-en', pos: 'noun', ru: 'повторение; пересдача', example: 'Vor der Prüfung ist eine Wiederholung der Grammatik sinnvoll.', exampleRu: 'Перед экзаменом имеет смысл повторить грамматику.' },
    { de: 'Konzentration', article: 'die', plural: '–', pos: 'noun', ru: 'концентрация, сосредоточенность', example: 'Nach drei Stunden Prüfung lässt die Konzentration langsam nach.', exampleRu: 'После трёх часов экзамена концентрация постепенно падает.' },
    { de: 'aufgeregt', pos: 'adj', ru: 'взволнованный', example: 'Vor der mündlichen Prüfung war ich total aufgeregt.', exampleRu: 'Перед устным экзаменом я ужасно волновался.' },
    { de: 'Anschlusszug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'поезд для пересадки, стыковочный поезд', example: 'Wegen der Verspätung habe ich meinen Anschlusszug verpasst.', exampleRu: 'Из-за опоздания я пропустил поезд, на который должен был пересесть.' },
    { de: 'Bahnsteig', article: 'der', plural: '-e', pos: 'noun', ru: 'перрон, платформа', example: 'Wir treffen uns direkt am Bahnsteig, Gleis 7.', exampleRu: 'Встречаемся прямо на перроне, путь 7.' },
    { de: 'Durchsage', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление (по громкой связи)', example: 'Laut Durchsage fällt der Zug nach Dresden heute aus.', exampleRu: 'Согласно объявлению, поезд на Дрезден сегодня отменён.' },
    { de: 'Platzreservierung', article: 'die', plural: '-en', pos: 'noun', ru: 'бронирование места', example: 'Am Freitagnachmittag lohnt sich eine Platzreservierung im ICE.', exampleRu: 'В пятницу после обеда стоит бронировать место в ICE.' },
    { de: 'Wegbeschreibung', article: 'die', plural: '-en', pos: 'noun', ru: 'описание дороги, как добраться', example: 'In der Einladung zur Prüfung finden Sie eine Wegbeschreibung zum Prüfungszentrum.', exampleRu: 'В приглашении на экзамен вы найдёте описание дороги до экзаменационного центра.' },
    { de: 'Rückerstattung', article: 'die', plural: '-en', pos: 'noun', ru: 'возврат (денег)', example: 'Bei einem Zugausfall haben Sie Anspruch auf eine Rückerstattung des Fahrpreises.', exampleRu: 'При отмене поезда вы имеете право на возврат стоимости проезда.' },
  ],
  listening: {
    title: 'Im Zug zur Prüfung',
    kind: 'dialog',
    text: `A: Lukas, da bist du ja! Ich habe schon gedacht, du kommst nicht mehr.
B: Hallo Daria! Die S-Bahn hatte zehn Minuten Verspätung. Ich bin vom Bahnsteig gegenüber gerannt. Hast du die Durchsage gehört?
A: Ja, unser Zug fährt heute nicht von Gleis 5, sondern von Gleis 8 ab. Gut, dass wir schon drin sitzen.
B: Und in Würzburg müssen wir umsteigen, oder?
A: Genau. Der Anschlusszug fährt um 8:12 Uhr. Wir haben nur sechs Minuten. Wenn wir den verpassen, kommen wir zu spät zur Prüfung.
B: Keine Panik. Die Prüfung beginnt erst um zehn, und vom Bahnhof bis zum Prüfungszentrum sind es laut Wegbeschreibung nur zehn Minuten zu Fuß.
A: Stimmt. Trotzdem bin ich total aufgeregt. Heute Nacht habe ich kaum geschlafen.
B: Ich auch nicht. Aber wir haben so viele Übungstests gemacht. Beim letzten Test hattest du im Lesen fast die volle Punktzahl!
A: Ja, Lesen geht. Aber vor dem Schreiben habe ich Angst. Ich vergesse immer die Wortstellung, wenn ich nervös bin.
B: Dann denk an unseren Trick: Zuerst die Aufgabenstellung lesen, Stichpunkte zu allen drei Inhaltspunkten machen und am Ende fünf Minuten kontrollieren: Steht das Verb an der richtigen Stelle?
A: Gute Idee. Sag mal, hast du deinen Personalausweis dabei?
B: Natürlich, den habe ich gestern Abend schon in die Jacke gesteckt. Und du?
A: Moment … ja, hier ist er. Und zwei Bleistifte und ein Radiergummi.
B: Perfekt. Und nach der Prüfung gehen wir zusammen essen. Ich lade dich ein – egal, wie es läuft!
A: Abgemacht!`,
    questions: [
      {
        question: 'Warum ist Lukas fast zu spät gekommen?',
        options: ['Er hat verschlafen.', 'Seine S-Bahn hatte Verspätung.', 'Er hat seinen Ausweis gesucht.'],
        answer: 1,
      },
      {
        question: 'Was haben die beiden durch die Durchsage erfahren?',
        options: [
          'Der Zug fällt aus.',
          'Der Zug hat zehn Minuten Verspätung.',
          'Der Zug fährt von einem anderen Gleis ab.',
          'Man muss in Würzburg nicht umsteigen.',
        ],
        answer: 2,
      },
      {
        question: 'Wann beginnt die Prüfung?',
        options: ['Um 8:12 Uhr', 'Um 10 Uhr', 'Um 10:10 Uhr'],
        answer: 1,
      },
      {
        question: 'Welcher Prüfungsteil macht Daria Sorgen?',
        options: ['Lesen', 'Hören', 'Schreiben', 'Sprechen'],
        answer: 2,
      },
      {
        question: 'Was schlägt Lukas für das Schreiben vor?',
        options: [
          'Stichpunkte machen und am Ende die Wortstellung kontrollieren.',
          'Möglichst lange Sätze schreiben.',
          'Zuerst den Text komplett auf Russisch schreiben.',
        ],
        answer: 0,
      },
    ],
  },
  writing: {
    taskRu: 'Вы недавно сдали экзамен B1. Ваша подруга Яна будет сдавать его в следующем месяце и просит у вас совета. Напишите ей неформальное письмо.',
    taskDe: 'Sie haben vor Kurzem die B1-Prüfung gemacht. Ihre Freundin Jana macht die Prüfung nächsten Monat und hat Sie um Tipps gebeten. Schreiben Sie Jana eine E-Mail.',
    points: [
      'Erzählen Sie, wie Ihre Prüfung war.',
      'Welcher Prüfungsteil war für Sie am schwierigsten? Warum?',
      'Geben Sie Jana Tipps für die Vorbereitung.',
      'Machen Sie einen Vorschlag für ein gemeinsames Treffen zum Üben.',
    ],
    minWords: 80,
    usefulPhrases: [
      'Liebe Jana, vielen Dank für deine Nachricht!',
      'Am Anfang war ich ziemlich aufgeregt, aber dann …',
      'Am schwierigsten war für mich …, weil …',
      'Mein wichtigster Tipp: Lies die Aufgabenstellung immer ganz genau!',
      'Wenn du Lust hast, können wir am Wochenende zusammen üben.',
      'Ich drücke dir die Daumen! Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Формат «Sprechen, Teil 1»: вы и ваша однокурсница хотите после экзамена вместе съездить куда-нибудь на выходные. Спланируйте поездку вместе.',
    aiRole:
      'Sie sind Marta, eine Kurskollegin aus dem B1-Kurs. Nach der Prüfung möchten Sie mit Ihrem Gesprächspartner einen Wochenendausflug machen. Besprechen Sie gemeinsam Reiseziel, Termin, Verkehrsmittel, Übernachtung und Programm. Machen Sie eigene Vorschläge, reagieren Sie auf die Vorschläge des Partners, widersprechen Sie manchmal höflich und suchen Sie gemeinsam eine Lösung. Sprechen Sie natürlich und auf B1-Niveau.',
    opener: 'Endlich ist die Prüfung bald vorbei! Wollen wir danach nicht zusammen ein Wochenende wegfahren? Hast du schon eine Idee, wohin?',
    tasksRu: [
      'Предложите цель поездки и обоснуйте её (Ich schlage vor, dass … / Wie wäre es mit …?).',
      'Договоритесь о дате, транспорте и ночёвке; начинайте некоторые фразы с обстоятельства (Am Samstag fahren wir …).',
      'Вежливо отклоните хотя бы одно предложение, правильно используя nicht или kein.',
      'Подведите итог: что вы решили (Also, wir fahren am … mit … nach …).',
    ],
    readAloud: [
      'Am Samstag fahren wir wegen der Prüfung schon um sechs Uhr mit dem Zug nach Leipzig.',
      'Leider habe ich die Durchsage am Bahnsteig nicht verstanden.',
      'Wenn ich die Prüfung bestehe, lade ich alle meine Freunde zum Essen ein.',
    ],
  },
};
