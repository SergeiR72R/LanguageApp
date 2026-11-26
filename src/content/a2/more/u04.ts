import type { UnitMore } from '../../types';

// Extra practice A2 · Unit 04 — Wohnen und Umziehen (Wechselpräpositionen)
export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Die Katze schläft auf ___ Sofa.',
      options: ['das', 'dem', 'den', 'der'],
      answer: 1,
      explanationRu: 'Кошка спит — движения нет, вопрос «где?» → Dativ. das Sofa → auf dem Sofa.',
    },
    {
      type: 'choice',
      prompt: 'Ich gehe jetzt in ___ Küche.',
      options: ['der', 'dem', 'die', 'den'],
      answer: 2,
      explanationRu: 'gehen in … — движение, вопрос «куда?» → Akkusativ. die Küche остаётся die.',
    },
    {
      type: 'choice',
      prompt: 'Die Bücher ___ im Regal.',
      options: ['stellen', 'stehen', 'legen', 'hängen'],
      answer: 1,
      explanationRu: 'Книги в шкафу по-немецки «стоят» (stehen). im = in dem — Dativ, значит, это состояние, а не действие.',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ den Mantel in den Schrank.',
      options: ['hänge', 'hängt', 'liege', 'stehe'],
      answer: 0,
      explanationRu: 'Пальто вешают: ich hänge. hängt — форма для er/sie/es, а liegen/stehen не могут иметь дополнения (den Mantel).',
    },
    {
      type: 'choice',
      audio: 'Der Schlüssel liegt unter der Zeitung.',
      prompt: 'Где лежит ключ?',
      options: ['на газете', 'под газетой', 'рядом с газетой', 'за газетой'],
      answer: 1,
      explanationRu: 'unter — «под». unter der Zeitung = под газетой (Dativ, потому что ключ просто лежит).',
    },
    {
      type: 'gap',
      prompt: 'Das Auto steht vor ___ Haus.',
      answers: ['dem'],
      explanationRu: 'stehen — где? → Dativ. das Haus → vor dem Haus.',
    },
    {
      type: 'gap',
      prompt: 'Die Kinder spielen ___ Garten.',
      answers: ['im', 'in dem'],
      explanationRu: 'Дети играют в саду — «где?» → Dativ: in dem Garten = im Garten.',
    },
    {
      type: 'choice',
      audio: 'Stell die Kiste bitte in den Keller!',
      prompt: 'Что нужно сделать?',
      options: ['Принести ящик из подвала', 'Открыть ящик в подвале', 'Поставить ящик в подвал', 'Положить ящик на пол'],
      answer: 2,
      explanationRu: '«Stell … in den Keller» — поставь в подвал: stellen + Akkusativ (куда?).',
    },
    {
      type: 'gap',
      prompt: 'Wir hängen die Lampe über ___ Tisch.',
      answers: ['den'],
      explanationRu: 'Мы вешаем лампу — действие, «куда?» → Akkusativ: der Tisch → über den Tisch.',
    },
    {
      type: 'gap',
      prompt: 'Wir stellen den Tisch zwischen ___ Sofa und das Fenster.',
      answers: ['das'],
      explanationRu: 'stellen — «куда?» → Akkusativ. После zwischen обе части в Akkusativ: das Sofa und das Fenster.',
    },
    {
      type: 'gap',
      audio: 'Das Bild hängt über dem Sofa.',
      prompt: 'Где висит картина? ___ dem Sofa.',
      answers: ['über', 'ueber'],
      explanationRu: 'Вы слышите «über dem Sofa» — над диваном.',
    },
    {
      type: 'choice',
      prompt: 'Gestern habe ich das Fahrrad in den Keller ___.',
      options: ['gestanden', 'gestellt', 'gestellen', 'stellt'],
      answer: 1,
      explanationRu: 'Я поставил (действие, in den Keller — Akk) → stellen, перфект: habe … gestellt. gestanden — от stehen (стоять).',
    },
    {
      type: 'choice',
      prompt: 'Wo ist meine Brille? – Sie ___ neben dem Bett.',
      options: ['legt', 'liegt', 'stellt', 'hängt'],
      answer: 1,
      explanationRu: 'Вопрос «Wo?» и Dativ (neben dem Bett) → состояние: die Brille liegt.',
    },
    {
      type: 'order',
      words: ['Wohin', 'hast', 'du', 'meine', 'Brille', 'gelegt?'],
      translationRu: 'Куда ты положил мои очки?',
      explanationRu: 'W-вопрос: Wohin — 1-е место, hast — 2-е, причастие gelegt — в конце.',
    },
    {
      type: 'order',
      words: ['Kannst', 'du', 'die', 'Flaschen', 'in', 'den', 'Kühlschrank', 'stellen?'],
      translationRu: 'Можешь поставить бутылки в холодильник?',
      explanationRu: 'Вопрос без вопросительного слова начинается с глагола (Kannst), инфинитив stellen — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите, где теперь лежит вещь (liegen + Dativ).',
      prompt: 'Ich lege den Teppich vor das Sofa.',
      answers: ['Der Teppich liegt vor dem Sofa.', 'Jetzt liegt der Teppich vor dem Sofa.'],
      explanationRu: 'legen (куда? + Akk) → liegen (где? + Dativ): vor das Sofa → vor dem Sofa.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите, что вы делаете (hängen + Akkusativ). Начните с «Ich».',
      prompt: 'Die Uhr hängt an der Wand.',
      answers: ['Ich hänge die Uhr an die Wand.'],
      explanationRu: 'Действие «вешать» → wohin? → Akkusativ: an der Wand → an die Wand.',
    },
    {
      type: 'gap',
      prompt: 'Wir ___ im Juni nach Leipzig umgezogen.',
      answers: ['sind'],
      hintRu: 'Повторение: перфект',
      explanationRu: 'umziehen — смена места, поэтому перфект с sein: wir sind umgezogen.',
    },
    {
      type: 'choice',
      prompt: 'Früher ___ wir keinen Balkon.',
      options: ['hatten', 'hattet', 'hatte', 'haben'],
      answer: 0,
      explanationRu: 'Повторение: претерит от haben. Früher (раньше) → прошедшее время; для wir — hatten.',
    },
    {
      type: 'order',
      words: ['Ich', 'suche', 'eine', 'Wohnung,', 'weil', 'mein', 'Zimmer', 'zu', 'klein', 'ist.'],
      translationRu: 'Я ищу квартиру, потому что моя комната слишком маленькая.',
      explanationRu: 'Повторение: в придаточном с weil глагол (ist) стоит в самом конце.',
    },
  ],
  reading: [
    {
      title: 'Wohnungsanzeigen',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', heading: '2-Zimmer-Wohnung im Zentrum', body: '55 m², 2. Stock mit Aufzug, Balkon. 650 Euro warm. Keine Haustiere.' },
        { label: 'b', heading: 'WG-Zimmer frei!', body: 'Wir sind zwei Studentinnen und suchen eine Mitbewohnerin. Das Zimmer ist möbliert, 18 m², 350 Euro warm. Frei ab 1. Oktober.' },
        { label: 'c', heading: 'Haus am Stadtrand', body: '5 Zimmer, Garten und Garage. Ideal für Familien mit Kindern. 1500 Euro kalt.' },
        { label: 'd', heading: 'Kleine Wohnung im Erdgeschoss', body: '1 Zimmer, Küche, Bad. Ruhige Lage, nur drei Minuten zum Bus. 420 Euro warm. Hunde und Katzen sind willkommen.' },
        { label: 'e', heading: 'Ferienwohnung an der Ostsee', body: '2 Zimmer, Blick aufs Meer. 80 Euro pro Nacht. Nur von Mai bis September.' },
        { label: 'f', heading: 'Umzugshilfe Schnell', body: 'Wir tragen Ihre Möbel und Kisten – schnell und günstig, mit Transporter. Rufen Sie uns an: 0176 4455321.' },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–5 und die Anzeigen a–f. Welche Anzeige passt? Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–5 и объявления a–f. Какое объявление подходит? Для одной ситуации подходящего объявления нет.',
          options: ['2-Zimmer-Wohnung im Zentrum', 'WG-Zimmer frei!', 'Haus am Stadtrand', 'Kleine Wohnung im Erdgeschoss', 'Ferienwohnung an der Ostsee', 'Umzugshilfe Schnell'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Herr Klein ist 70 Jahre alt. Treppen sind für ihn schwer. Er hat einen Hund und nicht viel Geld.', answer: 3, explanationRu: 'd: первый этаж (без лестницы), недорого, собаки разрешены.' },
            { kind: 'match', prompt: 'Familie Petrow hat drei Kinder und möchte einen Garten.', answer: 2, explanationRu: 'c: дом с садом, «ideal für Familien mit Kindern».' },
            { kind: 'match', prompt: 'Lena studiert. Sie sucht ein Zimmer mit Möbeln.', answer: 1, explanationRu: 'b: комната в WG «möbliert» — с мебелью, ищут студентку.' },
            { kind: 'match', prompt: 'Sie ziehen nächste Woche um und brauchen Hilfe mit den Möbeln.', answer: 5, explanationRu: 'f: фирма помогает при переезде — носит мебель и коробки.' },
            { kind: 'match', prompt: 'Ein Paar sucht eine Wohnung in der Stadt mit Balkon. Die beiden haben eine Katze.', answer: -1, explanationRu: 'Подходящего объявления нет: в квартире a есть балкон, но там «Keine Haustiere» — животные запрещены.' },
          ],
        },
      ],
    },
    {
      title: 'Endlich umgezogen!',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Olga,

endlich habe ich Zeit für eine E-Mail! Wir sind vor zwei Wochen umgezogen. Die Wohnung ist im vierten Stock. Leider gibt es keinen Aufzug, und der Umzug war sehr anstrengend. Mein Bruder und seine Freunde haben uns geholfen. Sie haben alle Möbel und Kisten nach oben getragen – vier Stunden lang!

Jetzt ist fast alles fertig. Im Wohnzimmer stehen das Sofa und zwei Sessel, an der Wand hängt ein Bild von meiner Oma. Nur im Schlafzimmer stehen noch viele Kisten. Die Wohnung ist nicht groß, aber hell und gemütlich. Vom Balkon sehe ich einen Park.

Die Miete ist leider teuer: 800 Euro warm. Aber ich brauche jetzt nur zehn Minuten bis zur Arbeit.

Möchtest du am Sonntag zum Kaffee kommen? Dann zeige ich dir alles. Bring bitte gute Schuhe mit – wir haben ja keinen Aufzug!

Viele Grüße
Katja`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Katja wohnt seit zwei Wochen in der Wohnung.', answer: true, explanationRu: '«Wir sind vor zwei Wochen umgezogen» — они переехали две недели назад.' },
            { kind: 'tf', statement: 'Im Haus gibt es einen Aufzug.', answer: false, explanationRu: '«Leider gibt es keinen Aufzug» — лифта нет.' },
            { kind: 'tf', statement: 'Katjas Bruder hat beim Umzug geholfen.', answer: true, explanationRu: '«Mein Bruder und seine Freunde haben uns geholfen».' },
            { kind: 'tf', statement: 'Im Schlafzimmer ist schon alles fertig.', answer: false, explanationRu: '«Nur im Schlafzimmer stehen noch viele Kisten» — там ещё стоят коробки.' },
            { kind: 'tf', statement: 'Im Wohnzimmer hängt ein Bild von Katjas Oma.', answer: true, explanationRu: '«an der Wand hängt ein Bild von meiner Oma».' },
            { kind: 'tf', statement: 'Katja fährt jetzt eine Stunde zur Arbeit.', answer: false, explanationRu: '«ich brauche jetzt nur zehn Minuten bis zur Arbeit» — всего десять минут.' },
            { kind: 'tf', statement: 'Katja lädt Olga für Sonntag ein.', answer: true, explanationRu: '«Möchtest du am Sonntag zum Kaffee kommen?» — это приглашение.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht vom Vermieter',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Guten Tag, Frau Novak, hier ist Thomas Wagner. Ich bin der Vermieter von der Wohnung in der Gartenstraße. Sie haben mir gestern eine E-Mail geschrieben. Die Wohnung ist noch frei. Sie können sie am Donnerstag um 17 Uhr besichtigen. Die Adresse ist Gartenstraße 12, die Wohnung ist im ersten Stock. Bitte klingeln Sie bei „Wagner“ im Erdgeschoss, ich wohne auch im Haus. Und bringen Sie bitte eine Kopie von Ihrem Ausweis mit. Die Kaution ist 1100 Euro. Passt Ihnen der Termin nicht? Dann rufen Sie mich bitte an. Meine Nummer ist 0171 2345678. Auf Wiederhören!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann kann Frau Novak die Wohnung besichtigen?', options: ['Am Dienstag um 17 Uhr', 'Am Donnerstag um 17 Uhr', 'Am Donnerstag um 7 Uhr'], answer: 1, explanationRu: '«am Donnerstag um 17 Uhr».' },
            { kind: 'mc', question: 'Wo soll Frau Novak klingeln?', options: ['Bei Wagner im Erdgeschoss', 'Im ersten Stock', 'Im Keller'], answer: 0, explanationRu: '«Bitte klingeln Sie bei „Wagner“ im Erdgeschoss».' },
            { kind: 'mc', question: 'Was soll Frau Novak mitbringen?', options: ['Den Mietvertrag', 'Die Kaution', 'Eine Kopie von ihrem Ausweis'], answer: 2, explanationRu: '«bringen Sie bitte eine Kopie von Ihrem Ausweis mit».' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Herr Wagner wohnt nicht im Haus.', answer: false, explanationRu: '«ich wohne auch im Haus» — он живёт в этом доме, на первом этаже.' },
            { kind: 'tf', statement: 'Die Kaution kostet 1100 Euro.', answer: true, explanationRu: '«Die Kaution ist 1100 Euro».' },
          ],
        },
      ],
    },
    {
      title: 'Der neue Nachbar',
      kind: 'dialog',
      speakers: { A: 'Frau Schulz, Nachbarin', B: 'Herr Ivanov, neuer Mieter' },
      situation: 'Sie hören ein Gespräch im Treppenhaus.',
      text: `A: Guten Tag! Sind Sie der neue Nachbar?
B: Ja, guten Tag. Mein Name ist Ivanov. Ich bin gestern eingezogen, in den zweiten Stock.
A: Herzlich willkommen! Ich bin Frau Schulz, ich wohne im Erdgeschoss.
B: Freut mich! Frau Schulz, darf ich mein Fahrrad hier ins Treppenhaus stellen?
A: Nein, das ist leider verboten. Stellen Sie das Fahrrad bitte in den Keller. Die Tür zum Keller ist hier links.
B: Danke. Und wohin bringe ich den Müll?
A: Die Mülltonnen stehen hinter dem Haus, neben der Garage.
B: Gut. Und wo finde ich den Hausmeister?
A: Herr Becker kommt nur am Dienstag und am Freitag. Seine Telefonnummer hängt unten an der Haustür.
B: Vielen Dank für Ihre Hilfe!
A: Gern. Haben Sie mal ein Problem? Dann klingeln Sie einfach bei mir.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Herr Ivanov wohnt seit gestern im Haus.', answer: true, explanationRu: '«Ich bin gestern eingezogen» — он въехал вчера.' },
            { kind: 'tf', statement: 'Herr Ivanov wohnt im Erdgeschoss.', answer: false, explanationRu: 'Он въехал «in den zweiten Stock». На первом этаже живёт фрау Шульц.' },
            { kind: 'tf', statement: 'Das Fahrrad darf im Treppenhaus stehen.', answer: false, explanationRu: '«das ist leider verboten» — велосипед нужно поставить в подвал.' },
            { kind: 'tf', statement: 'Die Mülltonnen stehen neben der Garage.', answer: true, explanationRu: '«hinter dem Haus, neben der Garage».' },
            { kind: 'tf', statement: 'Der Hausmeister kommt jeden Tag.', answer: false, explanationRu: 'Он приходит только по вторникам и пятницам.' },
          ],
        },
      ],
    },
  ],
};
