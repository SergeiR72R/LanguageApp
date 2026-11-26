import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-14',
  level: 'B1',
  order: 14,
  title: 'Ämter & Dienstleistungen',
  titleRu: 'Учреждения и услуги',
  goalsRu: [
    'Решать дела в ведомстве, банке, на почте и в страховой компании',
    'Употреблять глаголы с дательным и винительным падежом (geben, schicken, erklären …)',
    'Правильно расставлять дополнения: существительные и местоимения',
    'Использовать глаголы с дательным падежом (helfen, danken, gefallen, fehlen …) и писать официальные письма',
  ],
  grammar: {
    topic: 'Verben mit Dativ und Akkusativ; Reihenfolge der Objekte; Verben mit Dativ',
    topicRu: 'Глаголы с дательным и винительным падежом; порядок дополнений',
    explanationRu: `**Глаголы с двумя дополнениями.** Многие глаголы «передачи» требуют **дательного** падежа (кому? — обычно человек) и **винительного** (что? — обычно вещь): geben, schicken, zeigen, erklären, empfehlen, bringen, leihen, schenken, anbieten, mitteilen, zurückgeben.

- Die Sachbearbeiterin erklärt **dem Mann** (Dat) **das Formular** (Akk).

**Порядок дополнений в середине предложения:**

- два **существительных**: сначала **Dativ**, потом **Akkusativ**: Ich schicke **der Versicherung** **die Rechnung**.
- **местоимение + существительное**: местоимение всегда **впереди**, в любом падеже: Ich schicke **ihr** die Rechnung. / Ich schicke **sie** der Versicherung.
- два **местоимения**: сначала **Akkusativ**, потом **Dativ**: Ich schicke **sie ihr**.

Короткое правило: «Местоимения — вперёд; из двух местоимений первым идёт Akkusativ».

**Глаголы только с дательным:** helfen, danken, gefallen, gehören, gratulieren, antworten, glauben (кому-то), passen, schmecken, fehlen, zuhören, folgen, vertrauen.

- Der Berater hat **mir** sehr geholfen. Das Konto gehört **meiner Frau**.
- У gefallen, fehlen, passen, schmecken подлежащее — **вещь**, а человек стоит в Dativ, как в русском «мне нравится»: **Mir fehlt** noch ein Dokument.

**Ловушки для русскоговорящих:**

- danken и gratulieren требуют **Dativ**, хотя по-русски «благодарить/поздравлять **кого**»: Ich danke **Ihnen** (не ~~Sie~~)!
- anrufen, fragen, bitten — с **Akkusativ**, хотя по-русски «звонить **кому**»: Ich rufe **den** Vermieter an.
- helfen + Dativ, но unterstützen + Akkusativ: Ich helfe **ihm**, ich unterstütze **ihn**.
- Вежливое «вам» в Dativ — **Ihnen**: Kann ich **Ihnen** helfen?
- Не ставьте местоимение после существительного: ~~Ich gebe dem Beamten ihn~~ → Ich gebe **ihn** dem Beamten.`,
    table: [
      ['Дополнения', 'Порядок', 'Пример'],
      ['существительное + существительное', 'Dativ → Akkusativ', 'Ich gebe dem Beamten den Antrag.'],
      ['местоимение + существительное', 'местоимение → существительное', 'Ich gebe ihm den Antrag.'],
      ['существительное + местоимение', 'местоимение → существительное', 'Ich gebe ihn dem Beamten.'],
      ['местоимение + местоимение', 'Akkusativ → Dativ', 'Ich gebe ihn ihm.'],
    ],
    examples: [
      { de: 'Können Sie mir bitte das Formular erklären?', ru: 'Не могли бы вы объяснить мне этот бланк?' },
      { de: 'Die Bank schickt Ihnen die neue Karte per Post.', ru: 'Банк пришлёт вам новую карту по почте.' },
      { de: 'Den Ausweis? Ich habe ihn ihr schon gezeigt.', ru: 'Удостоверение? Я его ей уже показал.' },
      { de: 'Mir fehlt leider noch die Meldebescheinigung.', ru: 'Мне, к сожалению, не хватает ещё справки о регистрации.' },
      { de: 'Ich danke Ihnen für Ihre schnelle Hilfe.', ru: 'Благодарю вас за быструю помощь.' },
      { de: 'Gehört dieses Paket Ihrer Nachbarin?', ru: 'Эта посылка принадлежит вашей соседке?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die Sachbearbeiterin gibt ___ das Formular.',
        options: ['mein Vater', 'meinen Vater', 'meinem Vater'],
        answer: 2,
        explanationRu: 'geben: кому? — Dativ (meinem Vater), что? — Akkusativ (das Formular).',
      },
      {
        type: 'choice',
        prompt: 'Ich danke ___ für Ihre schnelle Antwort.',
        options: ['Sie', 'Ihnen', 'Ihr', 'Ihre'],
        answer: 1,
        explanationRu: 'danken + Dativ. Вежливая форма в Dativ — Ihnen. Ловушка: по-русски «благодарю вас» — винительный.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: [
          'Ich schicke der Versicherung sie morgen.',
          'Ich schicke sie morgen der Versicherung.',
          'Ich schicke morgen der Versicherung sie.',
        ],
        answer: 1,
        explanationRu: 'Местоимение (sie = die Rechnung) стоит раньше существительного (der Versicherung), даже если оно в Akkusativ.',
      },
      {
        type: 'choice',
        prompt: '___ gehört dieser Schlüssel? – Ich glaube, Frau Berger.',
        options: ['Wer', 'Wen', 'Wem', 'Wessen'],
        answer: 2,
        explanationRu: 'gehören + Dativ → вопрос wem? (кому?). Ответ тоже в Dativ: (der) Frau Berger.',
      },
      {
        type: 'gap',
        prompt: 'Können Sie ___ bitte helfen? Ich finde den Schalter nicht.',
        answers: ['mir'],
        hintRu: 'мне',
        explanationRu: 'helfen + Dativ: ich → mir.',
      },
      {
        type: 'gap',
        prompt: 'Der neue Bankberater gefällt ___ Frau sehr gut.',
        answers: ['meiner'],
        hintRu: 'meine Frau',
        explanationRu: 'gefallen + Dativ: тот, кому нравится, стоит в Dativ — meiner Frau. Подлежащее — der Bankberater.',
      },
      {
        type: 'gap',
        prompt: 'Ich rufe morgen ___ Versicherung an.',
        answers: ['die'],
        explanationRu: 'Ловушка: anrufen требует Akkusativ (по-русски «звонить кому»). Артикль женского рода в Akkusativ — die.',
      },
      {
        type: 'gap',
        prompt: 'Der Paketbote hat das Paket nicht mir gegeben. Er hat ___ der Nachbarin gegeben.',
        answers: ['es'],
        explanationRu: 'Местоимение es (= das Paket) стоит перед существительным в Dativ (der Nachbarin).',
      },
      {
        type: 'order',
        words: ['Der', 'Beamte', 'erklärt', 'dem', 'Mann', 'den', 'Antrag.'],
        translationRu: 'Чиновник объясняет мужчине заявление.',
        explanationRu: 'Два существительных: сначала Dativ (dem Mann), потом Akkusativ (den Antrag).',
      },
      {
        type: 'order',
        words: ['Haben', 'Sie', 'ihn', 'ihr', 'schon', 'gezeigt?'],
        translationRu: 'Вы ей его уже показали?',
        explanationRu: 'Два местоимения: сначала Akkusativ (ihn), потом Dativ (ihr).',
      },
      {
        type: 'transform',
        instructionRu: 'Замените оба дополнения местоимениями.',
        prompt: 'Ich gebe der Sachbearbeiterin die Unterlagen.',
        answers: ['Ich gebe sie ihr.'],
        explanationRu: 'die Unterlagen → sie (Akk), der Sachbearbeiterin → ihr (Dat). Два местоимения: Akkusativ перед Dativ.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените дополнение в винительном падеже (Akkusativ) местоимением.',
        prompt: 'Die Bank schickt meinem Sohn die neue Kreditkarte.',
        answers: ['Die Bank schickt sie meinem Sohn.'],
        explanationRu: 'die Kreditkarte → sie. Местоимение встаёт перед существительным в Dativ: schickt sie meinem Sohn.',
      },
    ],
  },
  vocab: [
    { de: 'Amt', article: 'das', plural: '-¨er', pos: 'noun', ru: 'ведомство, учреждение; должность', example: 'Für die Ummeldung muss ich aufs Amt.', exampleRu: 'Для перерегистрации мне нужно в ведомство.' },
    { de: 'Antrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'заявление, ходатайство', example: 'Den Antrag auf Kindergeld kann man auch online stellen.', exampleRu: 'Заявление на детское пособие можно подать и онлайн.' },
    { de: 'Formular', article: 'das', plural: '-e', pos: 'noun', ru: 'бланк, формуляр', example: 'Bitte füllen Sie das Formular in Druckbuchstaben aus.', exampleRu: 'Пожалуйста, заполните бланк печатными буквами.' },
    { de: 'Sachbearbeiter', article: 'der', plural: '-', pos: 'noun', ru: 'сотрудник, ведущий дело (die Sachbearbeiterin)', example: 'Der Sachbearbeiter hat mir alle Fragen geduldig beantwortet.', exampleRu: 'Сотрудник терпеливо ответил на все мои вопросы.' },
    { de: 'Nachweis', article: 'der', plural: '-e', pos: 'noun', ru: 'подтверждение, справка, доказательство', example: 'Für die Ermäßigung brauchen wir einen Nachweis über Ihr Einkommen.', exampleRu: 'Для скидки нам нужна справка о ваших доходах.' },
    { de: 'Meldebescheinigung', article: 'die', plural: '-en', pos: 'noun', ru: 'справка о регистрации по месту жительства', example: 'Die Bank möchte eine Kopie meiner Meldebescheinigung sehen.', exampleRu: 'Банк хочет видеть копию моей справки о регистрации.' },
    { de: 'Gebühr', article: 'die', plural: '-en', pos: 'noun', ru: 'сбор, пошлина, плата', example: 'Für den neuen Pass müssen Sie eine Gebühr von 70 Euro bezahlen.', exampleRu: 'За новый паспорт нужно заплатить пошлину 70 евро.' },
    { de: 'Konto', article: 'das', plural: 'die Konten', pos: 'noun', ru: 'счёт (банковский)', example: 'Das Gehalt wird jeden Monat auf mein Konto überwiesen.', exampleRu: 'Зарплата каждый месяц переводится на мой счёт.' },
    { de: 'Geheimzahl', article: 'die', plural: '-en', pos: 'noun', ru: 'ПИН-код', example: 'Die Geheimzahl darf man niemandem verraten.', exampleRu: 'ПИН-код нельзя никому сообщать.' },
    { de: 'Versicherung', article: 'die', plural: '-en', pos: 'noun', ru: 'страхование; страховая компания', example: 'Ich habe der Versicherung den Schaden sofort gemeldet.', exampleRu: 'Я сразу сообщил страховой компании об ущербе.' },
    { de: 'Haftpflichtversicherung', article: 'die', plural: '-en', pos: 'noun', ru: 'страхование гражданской ответственности', example: 'Die Haftpflichtversicherung bezahlt, wenn man bei anderen etwas kaputt macht.', exampleRu: 'Страховка ответственности платит, если ты что-то сломал у других.' },
    { de: 'Schalter', article: 'der', plural: '-', pos: 'noun', ru: 'окошко (в учреждении), стойка; выключатель', example: 'Pakete können Sie am Schalter 3 abholen.', exampleRu: 'Посылки можно получить в окошке № 3.' },
    { de: 'Wartenummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер очереди, талон', example: 'Ziehen Sie bitte eine Wartenummer und warten Sie, bis sie aufgerufen wird.', exampleRu: 'Возьмите, пожалуйста, талон и ждите, пока ваш номер вызовут.' },
    { de: 'Bescheid', article: 'der', plural: '-e', pos: 'noun', ru: 'официальное решение, уведомление; Bescheid sagen/geben — сообщить', example: 'Den Bescheid vom Finanzamt habe ich gestern bekommen.', exampleRu: 'Уведомление из налоговой я получил вчера.' },
    { de: 'ummelden', forms: 'meldet um, meldete um, hat umgemeldet; sich ummelden', pos: 'verb', ru: 'перерегистрировать(ся) (по новому адресу)', example: 'Nach dem Umzug muss man sich innerhalb von zwei Wochen ummelden.', exampleRu: 'После переезда нужно перерегистрироваться в течение двух недель.' },
    { de: 'einzahlen', forms: 'zahlt ein, zahlte ein, hat eingezahlt', pos: 'verb', ru: 'вносить (деньги на счёт)', example: 'Am Automaten kann man auch Bargeld einzahlen.', exampleRu: 'В банкомате можно также вносить наличные.' },
    { de: 'zuschicken', forms: 'jdm. etw. (Akk); schickt zu, schickte zu, hat zugeschickt', pos: 'verb', ru: 'присылать, высылать', example: 'Wir schicken Ihnen die Unterlagen gern per Post zu.', exampleRu: 'Мы охотно вышлем вам документы по почте.' },
    { de: 'leihen', forms: 'jdm. etw. (Akk); leiht, lieh, hat geliehen', pos: 'verb', ru: 'одалживать, давать взаймы; sich (Dat) etw. leihen — брать взаймы', example: 'Kannst du mir deinen Kugelschreiber leihen?', exampleRu: 'Можешь одолжить мне свою ручку?' },
    { de: 'beglaubigen', pos: 'verb', ru: 'заверять (документ)', example: 'Die Kopie des Zeugnisses muss amtlich beglaubigt werden.', exampleRu: 'Копию аттестата нужно официально заверить.' },
    { de: 'ablaufen', forms: 'läuft ab, lief ab, ist abgelaufen', pos: 'verb', ru: 'истекать (о сроке действия)', example: 'Mein Reisepass läuft im März ab.', exampleRu: 'Срок действия моего паспорта истекает в марте.' },
  ],
  listening: {
    title: 'Podcast „Neu in Deutschland“: Meine ersten Behördengänge',
    kind: 'monolog',
    text: `Hallo und willkommen bei „Neu in Deutschland“, dem Podcast für alle, die gerade angekommen sind. Heute erzählt Olga aus Kasachstan von ihren ersten Wochen in Leipzig.

Als ich vor drei Monaten nach Leipzig gezogen bin, musste ich mich zuerst beim Bürgeramt anmelden. Meine Nachbarin hat mir empfohlen, online einen Termin zu buchen, weil man ohne Termin oft stundenlang wartet. Leider war der nächste freie Termin erst in fünf Wochen! Also bin ich doch ohne Termin hingegangen, um sieben Uhr morgens. Ich habe eine Wartenummer gezogen und fast drei Stunden gewartet. Die Sachbearbeiterin war aber sehr nett. Sie hat mir alles langsam erklärt, und am Ende hat sie mir die Meldebescheinigung sofort gegeben.

Mit der Meldebescheinigung konnte ich dann ein Konto eröffnen. Bei der Bank war es einfacher. Der Berater hat mir ein kostenloses Konto empfohlen, und eine Woche später hat mir die Bank die Karte geschickt. Die Geheimzahl kam in einem eigenen Brief – das fand ich zuerst komisch, aber so ist es sicherer.

Am schwierigsten war für mich das Thema Versicherungen. In Deutschland gibt es so viele! Ein Kollege hat mir erklärt, dass eine Haftpflichtversicherung sehr wichtig ist. Das habe ich nicht gewusst. Er hat mir seine Versicherung empfohlen, und ich habe sie gleich abgeschlossen.

Mein Tipp für euch: Nehmt immer alle Dokumente mit, und auch Kopien. Und habt keine Angst, Fragen zu stellen. Die meisten Leute helfen euch gern.`,
    questions: [
      {
        question: 'Warum hat die Nachbarin Olga einen Online-Termin empfohlen?',
        options: ['Weil das Bürgeramt nur online arbeitet.', 'Weil es online billiger ist.', 'Weil man ohne Termin oft sehr lange warten muss.'],
        answer: 2,
      },
      {
        question: 'Wie lange hat Olga im Bürgeramt gewartet?',
        options: ['Fünf Wochen', 'Fast drei Stunden', 'Eine halbe Stunde'],
        answer: 1,
      },
      {
        question: 'Was hat die Sachbearbeiterin gemacht?',
        options: [
          'Sie hat Olga die Meldebescheinigung gleich gegeben.',
          'Sie hat Olga einen neuen Termin gegeben.',
          'Sie hat Olga zur Bank geschickt.',
        ],
        answer: 0,
      },
      {
        question: 'Wie hat Olga die Geheimzahl bekommen?',
        options: ['Zusammen mit der Karte', 'In einem eigenen Brief', 'Persönlich in der Bank'],
        answer: 1,
      },
      {
        question: 'Wer hat Olga die Haftpflichtversicherung empfohlen?',
        options: ['Ihre Nachbarin', 'Der Bankberater', 'Ein Kollege', 'Die Sachbearbeiterin'],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu:
      'В гостях у знакомого вы случайно уронили его ноутбук, и он сломался. Напишите письмо в свою страховую компанию (страхование ответственности).',
    taskDe:
      'Sie haben bei einem Bekannten aus Versehen seinen Laptop vom Tisch gestoßen. Der Laptop ist kaputt. Schreiben Sie eine E-Mail an Ihre Haftpflichtversicherung.',
    points: [
      'Was ist wann und wo passiert?',
      'Welche Unterlagen Sie der Versicherung schicken (Rechnung, Fotos …)',
      'Fragen Sie, wie lange die Bearbeitung dauert',
      'Bitten Sie um einen Rückruf',
    ],
    minWords: 90,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'ich möchte Ihnen einen Schaden melden. Meine Versicherungsnummer lautet …',
      'Am … ist mir leider Folgendes passiert: …',
      'Im Anhang schicke ich Ihnen die Rechnung und Fotos vom Schaden.',
      'Könnten Sie mir bitte mitteilen, wie lange die Bearbeitung dauert?',
      'Ich danke Ihnen im Voraus. Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы переехали на новую квартиру в том же городе и пришли в Bürgeramt, чтобы перерегистрироваться. Сотрудница проверяет ваши документы — одного документа не хватает.',
    aiRole:
      'Sie sind Frau Kessler, Sachbearbeiterin im Bürgeramt. Eine Person möchte sich nach einem Umzug ummelden. Fragen Sie nach Ausweis, alter und neuer Adresse, Einzugsdatum und der Wohnungsgeberbestätigung vom Vermieter. Diese Bestätigung fehlt – erklären Sie, was das ist und wie man sie nachreichen kann. Sprechen Sie freundlich, aber im typischen Behördenstil auf B1-Niveau.',
    opener: 'Guten Morgen! Nummer 47, richtig? Bitte nehmen Sie Platz. Was kann ich für Sie tun?',
    tasksRu: [
      'Объясните, зачем вы пришли (Ich möchte mich ummelden, weil …).',
      'Попросите объяснить, какого документа не хватает (Können Sie mir bitte erklären, …?).',
      'Используйте местоимения в Dativ и Akkusativ (Ich gebe ihn Ihnen. / Kann ich sie Ihnen per E-Mail schicken?).',
      'Поблагодарите сотрудницу и уточните следующий шаг (Ich danke Ihnen …).',
    ],
    readAloud: [
      'Können Sie mir bitte erklären, welche Unterlagen mir noch fehlen?',
      'Den Antrag habe ich gestern ausgefüllt, ich gebe ihn Ihnen gleich.',
      'Die Bank schickt mir die Geheimzahl in einem separaten Brief.',
    ],
  },
};
