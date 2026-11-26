import type { UnitMore } from '../../types';

// Extra practice A2 · Unit 06 — Essen gehen (Adjektive nach dem bestimmten Artikel)
export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das ___ Bier ist für mich.',
      options: ['kalte', 'kalten', 'kalter', 'kaltes'],
      answer: 0,
      explanationRu: 'das Bier — Nominativ среднего рода, после das → -e: das kalte Bier.',
    },
    {
      type: 'choice',
      prompt: 'Ich nehme die ___ Suppe.',
      options: ['heißen', 'heiße', 'heißer', 'heißes'],
      answer: 1,
      explanationRu: 'die Suppe — Akkusativ женского рода, артикль die не меняется → -e: die heiße Suppe.',
    },
    {
      type: 'choice',
      prompt: 'Der Kellner kommt mit dem ___ Kaffee.',
      options: ['heiße', 'heißen', 'heißer', 'heißem'],
      answer: 1,
      explanationRu: 'mit + Dativ: dem Kaffee. После dem всегда -en: mit dem heißen Kaffee.',
    },
    {
      type: 'choice',
      prompt: 'Die ___ Kartoffeln sind sehr lecker.',
      options: ['kleiner', 'kleine', 'kleines', 'kleinen'],
      answer: 3,
      explanationRu: 'die Kartoffeln — множественное число. Во мн. ч. после die → -en: die kleinen Kartoffeln.',
    },
    {
      type: 'choice',
      audio: 'Der Fisch ist heute ganz frisch.',
      prompt: 'Что говорят о рыбе?',
      options: ['Она сегодня очень свежая.', 'Её сегодня нет.', 'Она слишком солёная.', 'Она холодная.'],
      answer: 0,
      explanationRu: '«ganz frisch» — совсем свежая.',
    },
    {
      type: 'gap',
      prompt: 'Der ___ Kellner heißt Marco.',
      answers: ['nette'],
      hintRu: 'nett',
      explanationRu: 'der Kellner — Nominativ мужского рода → -e: der nette Kellner.',
    },
    {
      type: 'gap',
      prompt: 'Ich möchte den ___ Wein probieren.',
      answers: ['weißen'],
      hintRu: 'weiß',
      explanationRu: 'den Wein — Akkusativ мужского рода → -en: den weißen Wein.',
    },
    {
      type: 'gap',
      prompt: 'Wir nehmen das ___ Menü.',
      answers: ['billige'],
      hintRu: 'billig',
      explanationRu: 'das Menü — Akkusativ среднего рода, артикль das → -e: das billige Menü.',
    },
    {
      type: 'gap',
      prompt: 'Die ___ Brötchen sind leider schon weg.',
      answers: ['frischen'],
      hintRu: 'frisch',
      explanationRu: 'die Brötchen — множественное число → -en: die frischen Brötchen.',
    },
    {
      type: 'gap',
      audio: 'Ich nehme den grünen Salat.',
      prompt: 'Какой салат? Ich nehme den ___ Salat.',
      answers: ['grünen'],
      explanationRu: 'Вы слышите «den grünen Salat»: Akkusativ мужского рода → -en.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Die Suppe ist salzige.', 'Die Suppe ist salzig.', 'Die Suppe ist salzigen.'],
      answer: 1,
      explanationRu: 'После sein (ist) прилагательное не получает окончания.',
    },
    {
      type: 'choice',
      prompt: 'Wie findest du diesen ___ Wein?',
      options: ['süße', 'süßen', 'süßer', 'süßes'],
      answer: 1,
      explanationRu: 'dieser работает как der: diesen (Akk., м. р.) → -en: diesen süßen Wein.',
    },
    {
      type: 'choice',
      audio: 'Zahlen Sie zusammen oder getrennt?',
      prompt: 'Что спрашивает официант?',
      options: ['Вы платите вместе или отдельно?', 'Вам понравилось?', 'Вы будете десерт?', 'У вас заказан столик?'],
      answer: 0,
      explanationRu: 'zusammen — вместе, getrennt — отдельно (каждый за себя).',
    },
    {
      type: 'order',
      words: ['Ich', 'nehme', 'den', 'großen', 'Salat', 'mit', 'Käse.'],
      translationRu: 'Я возьму большой салат с сыром.',
      explanationRu: 'Глагол nehme на 2-м месте. den großen Salat — Akkusativ мужского рода, поэтому -en.',
    },
    {
      type: 'order',
      words: ['Wie', 'schmeckt', 'die', 'scharfe', 'Suppe?'],
      translationRu: 'Какой на вкус острый суп?',
      explanationRu: 'W-вопрос: Wie — 1-е место, глагол — 2-е. die scharfe Suppe — Nominativ, поэтому -e.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините два предложения в одно: поставьте прилагательное перед существительным.',
      prompt: 'Der Wein ist rot. Ich trinke den Wein.',
      answers: ['Ich trinke den roten Wein.'],
      explanationRu: 'den Wein — Akkusativ мужского рода, поэтому прилагательное получает -en: den roten Wein.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните с «Ich esse Brot mit …» (mit + Dativ).',
      prompt: 'Der Käse ist frisch.',
      answers: ['Ich esse Brot mit dem frischen Käse.'],
      explanationRu: 'mit требует Dativ: dem Käse. В Dativ прилагательное всегда с -en: mit dem frischen Käse.',
    },
    {
      type: 'gap',
      prompt: 'Der Gast beschwert ___, weil der Fisch kalt ist.',
      answers: ['sich'],
      hintRu: 'Повторение: возвратные глаголы',
      explanationRu: 'sich beschweren — возвратный глагол; для der Gast (= er) — sich.',
    },
    {
      type: 'choice',
      prompt: 'Der Kellner stellt die Gläser auf ___ Tisch.',
      options: ['dem', 'den', 'der', 'das'],
      answer: 1,
      explanationRu: 'Повторение юнита 4: stellen — «куда?» → Akkusativ: auf den Tisch.',
    },
    {
      type: 'gap',
      prompt: 'Gestern ___ wir im Restaurant gegessen.',
      answers: ['haben'],
      hintRu: 'Повторение: перфект',
      explanationRu: 'essen образует перфект с haben: wir haben gegessen.',
    },
  ],
  reading: [
    {
      title: 'Die Speisekarte',
      textType: 'Speisekarte',
      texts: [
        {
          heading: 'Restaurant „Zur Linde“',
          body: `Vorspeisen: Tomatensuppe mit Brot – 4,50 € · Salat mit Käse und Ei – 6,20 €
Hauptgerichte: Schnitzel mit Pommes oder Kartoffelsalat – 14,90 € · Fisch des Tages mit Reis – 16,50 € · Gemüsepfanne (vegetarisch, ohne Fleisch und Fisch) – 11,50 €
Nachtisch: Apfelkuchen mit Sahne – 4,20 € · Eis, drei Kugeln – 3,80 €
Getränke: Mineralwasser 0,5 l – 2,90 € · Hauswein, rot oder weiß, 0,2 l – 4,80 €
Mittagsmenü von Dienstag bis Freitag, 11:30–14:30 Uhr: Suppe, Hauptgericht und Kaffee für 12,90 €.
Montag Ruhetag – das Restaurant ist geschlossen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Speisekarte. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте меню. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was kostet das Schnitzel?', options: ['11,50 €', '14,90 €', '16,50 €'], answer: 1, explanationRu: '«Schnitzel mit Pommes oder Kartoffelsalat – 14,90 €».' },
            { kind: 'mc', question: 'Sie essen kein Fleisch und keinen Fisch. Was können Sie als Hauptgericht nehmen?', options: ['Die Gemüsepfanne', 'Das Schnitzel', 'Den Fisch des Tages'], answer: 0, explanationRu: 'Gemüsepfanne — «vegetarisch, ohne Fleisch und Fisch».' },
            { kind: 'mc', question: 'Was bekommt man im Mittagsmenü?', options: ['Salat und Nachtisch', 'Hauptgericht und Wein', 'Suppe, Hauptgericht und Kaffee'], answer: 2, explanationRu: '«Suppe, Hauptgericht und Kaffee für 12,90 €».' },
            { kind: 'mc', question: 'Sie möchten am Montag mittags im Restaurant essen. Was ist richtig?', options: ['Das Mittagsmenü kostet 12,90 €.', 'Das Restaurant ist geschlossen.', 'Es gibt nur Nachtisch.'], answer: 1, explanationRu: '«Montag Ruhetag» — в понедельник выходной, ресторан закрыт.' },
          ],
        },
      ],
    },
    {
      title: 'Eine Bewertung im Internet',
      textType: 'Bewertung',
      texts: [
        {
          heading: 'Pizzeria „Da Marco“ ★★★☆☆',
          body: `Gestern war ich mit meiner Familie in der Pizzeria „Da Marco“ in der Bahnhofstraße. Das Restaurant ist klein, aber sehr gemütlich. Wir hatten keinen Tisch reserviert und mussten zwanzig Minuten warten. Der junge Kellner war sehr freundlich und hat uns die Pizza mit Pilzen empfohlen. Die Pizza war wirklich lecker! Mein Mann hat die scharfe Salami-Pizza genommen, aber sie war ihm zu scharf. Leider war die Tomatensuppe für meine Tochter kalt. Der Kellner hat die Suppe aber sofort warm gemacht. Der italienische Rotwein war gut, aber teuer: sieben Euro für ein Glas! Zum Nachtisch hatten wir das italienische Eis. Es war fantastisch. Unser Tipp: Reservieren Sie am Wochenende einen Tisch!
Swetlana K.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Bewertung. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте отзыв. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Die Familie hatte einen Tisch reserviert.', answer: false, explanationRu: '«Wir hatten keinen Tisch reserviert und mussten zwanzig Minuten warten».' },
            { kind: 'tf', statement: 'Der Kellner war nett.', answer: true, explanationRu: '«Der junge Kellner war sehr freundlich».' },
            { kind: 'tf', statement: 'Die Salami-Pizza war für den Mann zu scharf.', answer: true, explanationRu: '«sie war ihm zu scharf» — ему было слишком остро.' },
            { kind: 'tf', statement: 'Die Suppe für die Tochter war zuerst kalt.', answer: true, explanationRu: '«Leider war die Tomatensuppe für meine Tochter kalt» — потом официант её подогрел.' },
            { kind: 'tf', statement: 'Der Wein war billig.', answer: false, explanationRu: '«gut, aber teuer: sieben Euro für ein Glas».' },
            { kind: 'tf', statement: 'Swetlana rät: Am Wochenende soll man einen Tisch reservieren.', answer: true, explanationRu: '«Unser Tipp: Reservieren Sie am Wochenende einen Tisch!»' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Der Anrufbeantworter vom Restaurant',
      kind: 'monolog',
      situation: 'Sie rufen in einem Restaurant an und hören eine Ansage.',
      text: `Guten Tag, hier ist das Restaurant „Zur Post“. Leider sind wir gerade nicht da. Unsere Öffnungszeiten sind Dienstag bis Sonntag von 12 bis 22 Uhr. Am Montag ist das Restaurant geschlossen. Möchten Sie einen Tisch reservieren? Dann schreiben Sie uns bitte eine E-Mail oder rufen Sie ab 11 Uhr wieder an. Diese Woche empfehlen wir den frischen Fisch aus der Nordsee und den warmen Apfelkuchen. Und am Sonntag gibt es von 10 bis 14 Uhr unser Sonntagsfrühstück für 15 Euro pro Person. Vielen Dank für Ihren Anruf!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann ist das Restaurant geschlossen?', options: ['Am Sonntag', 'Am Montag', 'Am Dienstag'], answer: 1, explanationRu: '«Am Montag ist das Restaurant geschlossen».' },
            { kind: 'mc', question: 'Wie kann man einen Tisch reservieren?', options: ['Per E-Mail oder ab 11 Uhr am Telefon', 'Nur im Restaurant', 'Nur am Sonntag'], answer: 0, explanationRu: '«schreiben Sie uns bitte eine E-Mail oder rufen Sie ab 11 Uhr wieder an».' },
            { kind: 'mc', question: 'Was kostet das Sonntagsfrühstück?', options: ['10 Euro', '14 Euro', '15 Euro'], answer: 2, explanationRu: '«für 15 Euro pro Person». 10 и 14 — это время (с 10 до 14 часов).' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно?',
          items: [
            { kind: 'tf', statement: 'Diese Woche empfiehlt das Restaurant Fisch.', answer: true, explanationRu: '«Diese Woche empfehlen wir den frischen Fisch aus der Nordsee».' },
          ],
        },
      ],
    },
    {
      title: 'Einen Tisch reservieren',
      kind: 'dialog',
      speakers: { A: 'Mitarbeiterin im Restaurant', B: 'Herr Petrenko' },
      situation: 'Herr Petrenko ruft in einem Restaurant an.',
      text: `A: Restaurant „Am Markt“, guten Tag!
B: Guten Tag, Petrenko hier. Ich möchte gern einen Tisch für Samstag reservieren.
A: Gern. Für wie viele Personen?
B: Für sechs Personen. Meine Mutter hat Geburtstag, sie wird achtzig.
A: Oh, herzlichen Glückwunsch! Um wie viel Uhr möchten Sie kommen?
B: Um 19 Uhr.
A: Hm, um sieben ist leider alles voll. Aber um halb acht geht es.
B: Gut, dann um halb acht. Ist der große Tisch auf der Terrasse noch frei?
A: Nein, leider nicht. Aber der runde Tisch im Garten ist noch frei.
B: Prima. Meine Mutter kann nicht gut laufen. Gibt es Treppen?
A: Nein, keine Treppen. Der Garten ist direkt hinter dem Restaurant.
B: Sehr gut. Darf ich einen Kuchen mitbringen?
A: Natürlich, das ist kein Problem.
B: Vielen Dank. Bis Samstag!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Herr Petrenko reserviert einen Tisch für sechs Personen.', answer: true, explanationRu: '«Für sechs Personen».' },
            { kind: 'tf', statement: 'Die Familie kommt um 19 Uhr.', answer: false, explanationRu: 'В 19 часов всё занято, поэтому они придут в половине восьмого (19:30).' },
            { kind: 'tf', statement: 'Die Familie sitzt auf der Terrasse.', answer: false, explanationRu: 'Большой стол на террасе занят, они сядут за круглый стол в саду.' },
            { kind: 'tf', statement: 'Im Garten gibt es keine Treppen.', answer: true, explanationRu: '«Nein, keine Treppen».' },
            { kind: 'tf', statement: 'Herr Petrenko darf einen Kuchen mitbringen.', answer: true, explanationRu: '«Natürlich, das ist kein Problem».' },
          ],
        },
      ],
    },
  ],
};
