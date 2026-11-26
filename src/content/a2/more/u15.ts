import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Was schenkst du ___ Vater zum Geburtstag?',
      options: ['deinem', 'deinen', 'deiner', 'dein'],
      answer: 0,
      explanationRu: 'Кому? → Dativ. der Vater → deinem Vater.',
    },
    {
      type: 'choice',
      prompt: 'Ich zeige ___ Gästen den Garten.',
      options: ['den', 'die', 'der', 'dem'],
      answer: 0,
      explanationRu: 'Кому? гостям → Dativ мн. ч.: den Gästen (артикль den + -n).',
    },
    {
      type: 'choice',
      prompt: 'Die Kette ist sehr schön! Wer hat ___ geschenkt?',
      options: ['sie dir', 'dir sie', 'sie dich', 'dich sie'],
      answer: 0,
      explanationRu: 'Два местоимения: сначала Akkusativ (sie = die Kette), потом Dativ (dir).',
    },
    {
      type: 'choice',
      prompt: 'Liebe Anna, lieber Max, wir wünschen ___ frohe Weihnachten!',
      options: ['euch', 'ihr', 'eure'],
      answer: 0,
      explanationRu: 'Кому? вам (ihr) → Dativ: euch. ihr — это Nominativ («вы»).',
    },
    {
      type: 'choice',
      prompt: 'Der Kuchen ist für Oma. Welcher Satz ist richtig?',
      options: ['Ich bringe ihn ihr morgen.', 'Ich bringe ihr ihn morgen.', 'Ich bringe ihm sie morgen.'],
      answer: 0,
      explanationRu: 'ihn = den Kuchen (Akk), ihr = Oma (Dat). Два местоимения: Akkusativ перед Dativ.',
    },
    {
      type: 'gap',
      prompt: 'Kannst du ___ bitte das Salz geben?',
      hintRu: 'мне',
      answers: ['mir'],
      explanationRu: 'Дать кому? мне → Dativ: mir.',
    },
    {
      type: 'gap',
      prompt: 'Meine Eltern haben Hochzeitstag. Ich schenke ___ eine Reise.',
      answers: ['ihnen'],
      explanationRu: 'Кому? им (sie, мн. ч.) → Dativ: ihnen.',
    },
    {
      type: 'gap',
      prompt: 'Lisa hat ein neues Kleid. Sie zeigt ___ ihrer Freundin.',
      answers: ['es'],
      explanationRu: 'das Kleid → es. Местоимение (es) стоит перед существительным (ihrer Freundin).',
    },
    {
      type: 'gap',
      prompt: 'Du hast ein Fahrrad bekommen? Wer hat ___ dir geschenkt?',
      answers: ['es'],
      explanationRu: 'das Fahrrad → es (Akk). Два местоимения: es перед dir.',
    },
    {
      type: 'gap',
      prompt: 'Ich danke ___ für das schöne Geschenk!',
      answers: ['dir', 'Ihnen', 'euch'],
      explanationRu: 'danken требует Dativ: Ich danke dir / Ihnen / euch. Не «dich»!',
    },
    {
      type: 'order',
      words: ['Hast', 'du', 'den', 'Kindern', 'die', 'Geschichte', 'erzählt?'],
      translationRu: 'Ты рассказал детям эту историю?',
      explanationRu: 'Два существительных: Dativ (den Kindern) перед Akkusativ (die Geschichte). Partizip II в конце.',
    },
    {
      type: 'order',
      words: ['Wann', 'zeigst', 'du', 'sie', 'uns?'],
      translationRu: 'Когда ты нам их покажешь? (фотографии)',
      explanationRu: 'Два местоимения: Akkusativ (sie = die Fotos) перед Dativ (uns).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените оба дополнения местоимениями.',
      prompt: 'Ich schenke meinem Bruder den Schal.',
      answers: ['Ich schenke ihn ihm.'],
      explanationRu: 'den Schal → ihn (Akk), meinem Bruder → ihm (Dat). Порядок: Akkusativ перед Dativ.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените «den Kindern» местоимением.',
      prompt: 'Wir geben den Kindern die Geschenke.',
      answers: ['Wir geben ihnen die Geschenke.'],
      explanationRu: 'den Kindern → ihnen (Dat мн. ч.). Местоимение стоит перед существительным.',
    },
    {
      type: 'choice',
      audio: 'Ich habe meinem Opa ein Buch geschenkt.',
      prompt: 'Что и кому подарили?',
      options: ['Дедушке — книгу.', 'Бабушке — книгу.', 'Дедушке — цветы.'],
      answer: 0,
      explanationRu: 'Вы слышите «meinem Opa ein Buch»: meinem Opa — дедушке, ein Buch — книгу.',
    },
    {
      type: 'gap',
      audio: 'Frohe Weihnachten und ein gutes neues Jahr!',
      prompt: 'Напишите слово, которое вы слышите: Frohe ___ und ein gutes neues Jahr!',
      answers: ['Weihnachten'],
      explanationRu: 'Frohe Weihnachten! — «Счастливого Рождества!»',
    },
    {
      type: 'gap',
      audio: 'Kannst du es mir zeigen?',
      prompt: 'Напишите два местоимения, которые вы слышите: Kannst du ___ zeigen?',
      answers: ['es mir'],
      explanationRu: 'Вы слышите «es mir»: Akkusativ (es) стоит перед Dativ (mir).',
    },
    {
      type: 'gap',
      prompt: 'Weißt du, ___ Tom Geburtstag hat? – Am 3. Mai.',
      answers: ['wann'],
      explanationRu: 'Повторение (косвенный вопрос): ответ — дата, значит, спрашиваем wann. Глагол hat в конце.',
    },
    {
      type: 'choice',
      prompt: 'Wir ___ ihr eine Kette schenken. Was meinst du?',
      options: ['könnten', 'konnten', 'könntet'],
      answer: 0,
      explanationRu: 'Повторение (Konjunktiv II): предложение-идея — wir könnten … («мы могли бы …»).',
    },
    {
      type: 'order',
      words: ['Ich', 'hoffe,', 'dass', 'dir', 'das', 'Geschenk', 'gefällt.'],
      translationRu: 'Надеюсь, что тебе понравится подарок.',
      explanationRu: 'Повторение (dass + gefallen): gefallen требует Dativ (dir), глагол gefällt стоит в конце придаточного.',
    },
  ],
  reading: [
    {
      title: 'Einladung zum Sommerfest',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Nachbarinnen und Nachbarn,

am Samstag, den 14. Juni, feiern wir unser Sommerfest im Hof! Wir beginnen um 16 Uhr mit Kaffee und Kuchen. Später grillen wir zusammen. Würstchen und Getränke kaufen wir ein – das Geld dafür (5 Euro pro Person) sammeln wir auf dem Fest. Könnten Sie bitte einen Salat oder einen Kuchen mitbringen? Für die Kinder gibt es Spiele und Luftballons. Herr Yilmaz aus dem dritten Stock bringt seine Gitarre mit, und wir singen zusammen.

Bitte schreiben Sie mir bis Mittwoch, ob Sie kommen und wie viele Personen Sie sind. Dann weiß ich, wie viel wir einkaufen müssen. Wenn es regnet, feiern wir im Gemeinschaftsraum im Keller.

Ich freue mich auf Sie!
Viele Grüße
Sabine Kraus (Wohnung 2b)`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте письмо. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wann beginnt das Fest?', options: ['Um 14 Uhr.', 'Um 16 Uhr.', 'Am Abend.'], answer: 1, explanationRu: '«Wir beginnen um 16 Uhr mit Kaffee und Kuchen.»' },
            { kind: 'mc', question: 'Was sollen die Nachbarn mitbringen?', options: ['Würstchen.', 'Getränke.', 'Einen Salat oder einen Kuchen.'], answer: 2, explanationRu: 'Сосиски и напитки покупают организаторы, а соседей просят принести салат или пирог.' },
            { kind: 'mc', question: 'Wie viel muss man für das Fest bezahlen?', options: ['Nichts.', '5 Euro pro Person.', '14 Euro.'], answer: 1, explanationRu: '«5 Euro pro Person» — на сосиски и напитки. 14 — это дата (14 июня).' },
            { kind: 'mc', question: 'Was möchte Frau Kraus bis Mittwoch wissen?', options: ['Ob die Nachbarn kommen und wie viele.', 'Wer Gitarre spielen kann.', 'Wer grillen möchte.'], answer: 0, explanationRu: '«Bitte schreiben Sie mir bis Mittwoch, ob Sie kommen und wie viele Personen Sie sind.»' },
            { kind: 'mc', question: 'Wo feiert man, wenn das Wetter schlecht ist?', options: ['Im Hof.', 'Im Keller.', 'In Wohnung 2b.'], answer: 1, explanationRu: '«Wenn es regnet, feiern wir im Gemeinschaftsraum im Keller.»' },
          ],
        },
      ],
    },
    {
      title: 'Neujahr in drei Ländern',
      textType: 'Blogbeiträge',
      texts: [
        {
          label: 'Olga, Russland',
          body: 'Bei uns in Russland ist Silvester für viele Familien das wichtigste Fest – wichtiger als Weihnachten. Wir essen zusammen, und um Mitternacht trinken wir Sekt. Die Kinder finden ihre Geschenke unter dem Tannenbaum: Väterchen Frost hat sie ihnen gebracht. Weihnachten feiern wir erst am 7. Januar.',
        },
        {
          label: 'Wei, China',
          body: 'Das chinesische Neujahr ist nicht am 1. Januar. Es ist im Januar oder Februar, jedes Jahr an einem anderen Tag. Die ganze Familie kommt zusammen, und wir essen viele Teigtaschen. Die Kinder bekommen rote Umschläge. In den Umschlägen ist Geld.',
        },
        {
          label: 'Marco, Italien',
          body: 'In Italien feiern wir Silvester oft mit Freunden. Wir essen Linsen, denn sie sollen im neuen Jahr Geld bringen. Am 6. Januar kommt dann die Befana, eine alte Frau. Sie bringt den Kindern Süßigkeiten.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте тексты. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Für viele Familien in Russland ist Weihnachten wichtiger als Silvester.', answer: false, explanationRu: 'Наоборот: «Silvester … das wichtigste Fest – wichtiger als Weihnachten».' },
            { kind: 'tf', statement: 'Olga feiert Weihnachten am 7. Januar.', answer: true, explanationRu: '«Weihnachten feiern wir erst am 7. Januar.»' },
            { kind: 'tf', statement: 'Das chinesische Neujahr ist jedes Jahr am 1. Januar.', answer: false, explanationRu: 'Китайский Новый год — в январе или феврале, каждый год в другой день.' },
            { kind: 'tf', statement: 'In China bekommen Kinder zum Neujahr Geld.', answer: true, explanationRu: 'Дети получают красные конверты с деньгами: «In den Umschlägen ist Geld».' },
            { kind: 'tf', statement: 'In Italien bekommen die Kinder am 6. Januar Süßigkeiten.', answer: true, explanationRu: '«Am 6. Januar kommt … die Befana … Sie bringt den Kindern Süßigkeiten.»' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Einladung auf dem Anrufbeantworter',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Hallo Martin, hier ist Julia. Du weißt ja, ich werde am Freitag vierzig! Ich mache eine kleine Party und möchte dich und Sandra herzlich einladen. Wir feiern nicht bei mir zu Hause. Die Party ist im Restaurant „Seeblick“ in der Uferstraße 5. Wir fangen um 19 Uhr an. Und bitte bringt mir keine Geschenke mit, ich habe schon alles! Aber wenn ihr mir unbedingt etwas schenken möchtet: Ich sammle Geld für eine Reise nach Island. Könnt ihr mir bis Mittwoch sagen, ob ihr kommt? Ich muss den Tisch reservieren. Bis bald!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте сообщение. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wie alt wird Julia?', options: ['30 Jahre.', '40 Jahre.', '50 Jahre.'], answer: 1, explanationRu: '«ich werde am Freitag vierzig».' },
            { kind: 'mc', question: 'Wo ist die Party?', options: ['Bei Julia zu Hause.', 'In einem Restaurant.', 'Bei Martin und Sandra.'], answer: 1, explanationRu: '«Wir feiern nicht bei mir zu Hause. Die Party ist im Restaurant „Seeblick“».' },
            { kind: 'mc', question: 'Was wünscht sich Julia?', options: ['Blumen.', 'Geld für eine Reise.', 'Ein Buch über Island.'], answer: 1, explanationRu: 'Она собирает деньги на поездку в Исландию.' },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Die Party beginnt um 19 Uhr.', answer: true, explanationRu: '«Wir fangen um 19 Uhr an.»' },
            { kind: 'tf', statement: 'Martin soll bis Freitag antworten.', answer: false, explanationRu: 'Ответить нужно до среды (bis Mittwoch). В пятницу — сам праздник.' },
          ],
        },
      ],
    },
    {
      title: 'Ein Geschenk kaufen',
      kind: 'dialog',
      speakers: { A: 'Verkäuferin', B: 'Kunde' },
      situation: 'Sie hören ein Gespräch in einem Geschäft.',
      text: `A: Guten Tag, kann ich Ihnen helfen?
B: Ja, bitte. Ich suche ein Geschenk für meine Frau. Sie hat am Sonntag Geburtstag.
A: Was mag Ihre Frau denn? Schmuck vielleicht? Wir haben sehr schöne Ketten.
B: Hm, Schmuck hat sie schon viel. Letztes Jahr habe ich ihr Ohrringe geschenkt.
A: Und ein Parfüm? Dieses hier ist neu.
B: Oh, das riecht gut. Was kostet es?
A: 59 Euro.
B: Das ist ein bisschen teuer. Haben Sie es auch kleiner?
A: Ja, die kleine Flasche kostet 35 Euro.
B: Gut, die nehme ich. Könnten Sie sie mir bitte als Geschenk einpacken?
A: Gern. Rotes oder blaues Geschenkpapier?
B: Rot, bitte. Das ist ihre Lieblingsfarbe.
A: Und wenn Ihrer Frau das Parfüm nicht gefällt, kann sie es in den nächsten zwei Wochen umtauschen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Die Frau des Kunden hat am Sonntag Geburtstag.', answer: true, explanationRu: '«Sie hat am Sonntag Geburtstag.»' },
            { kind: 'tf', statement: 'Der Kunde kauft seiner Frau eine Kette.', answer: false, explanationRu: 'Украшений у жены уже много — он покупает духи.' },
            { kind: 'tf', statement: 'Letztes Jahr hat er ihr Ohrringe geschenkt.', answer: true, explanationRu: '«Letztes Jahr habe ich ihr Ohrringe geschenkt.»' },
            { kind: 'tf', statement: 'Der Kunde nimmt die große Flasche für 59 Euro.', answer: false, explanationRu: 'Большая слишком дорогая, он берёт маленькую за 35 евро.' },
            { kind: 'tf', statement: 'Das Geschenk bekommt rotes Papier.', answer: true, explanationRu: '«Rot, bitte. Das ist ihre Lieblingsfarbe.»' },
          ],
        },
      ],
    },
  ],
};
