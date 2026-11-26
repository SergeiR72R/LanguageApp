import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-18',
  level: 'A2',
  order: 18,
  title: 'Ämter und Dienstleistungen',
  titleRu: 'Учреждения и услуги',
  goalsRu: [
    'Ориентироваться в ведомстве, банке и на почте',
    'Заполнять бланки и понимать простые официальные объявления',
    'Описывать людей и вещи с помощью относительных придаточных: der Mann, der …; das Formular, das …',
    'Вежливо спрашивать и просить о помощи у окошка',
  ],
  grammar: {
    topic: 'Relativsätze im Nominativ und Akkusativ (Einführung)',
    topicRu: 'Относительные придаточные в именительном и винительном падеже (введение)',
    explanationRu: `**Относительное придаточное** (Relativsatz) подробнее описывает существительное — как русское «который»: «Это бланк, **который** вам нужен».

По-немецки «который» — это **относительное местоимение**. Оно почти совпадает с определённым артиклем: **der, die, das, die** (Nominativ) и **den, die, das, die** (Akkusativ).

**Как выбрать форму? Два шага:**

1. **Род и число** берём от слова, к которому относится придаточное: der Mann → der/den; die Frau → die; das Formular → das; die Unterlagen (мн. ч.) → die.
2. **Падеж** определяем **внутри придаточного**: какую роль слово играет там?
- подлежащее (кто? что?) → **Nominativ**: Das ist der Mann, **der** am Schalter arbeitet. (Der Mann arbeitet am Schalter.)
- прямое дополнение (кого? что?) → **Akkusativ**: Das ist der Mann, **den** ich gefragt habe. (Ich habe den Mann gefragt.)

Разница видна только в **мужском роде**: der → **den**. У die, das и множественного числа формы одинаковые.

**Порядок слов:** придаточное отделяется **запятой**, спрягаемый глагол стоит **в конце** — как после weil, dass, wenn:
- Ich brauche das Formular, das auf dem Tisch **liegt**.
- Wo ist der Brief, den du gestern geschrieben **hast**?

Придаточное может стоять и внутри предложения — тогда запятые с двух сторон: Der Ausweis, **den** ich beantragt habe, ist fertig.

**Типичные ошибки русскоговорящих:**
- Ставят **was** или **wo** вместо der/die/das: «der Mann, was hier arbeitet» — неправильно.
- Выбирают падеж по главному предложению: «Ich frage den Mann, den hier arbeitet». Смотрите на придаточное: der Mann arbeitet → **der**.
- Забывают запятую или не ставят глагол в конец.
- Берут род из русского: «бланк» — м. р., но **das** Formular → **das**.`,
    table: [
      ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      ['Nominativ', 'der', 'die', 'das', 'die'],
      ['Akkusativ', 'den', 'die', 'das', 'die'],
      ['Beispiel (Nom.)', 'der Mann, der hilft', 'die Frau, die hilft', 'das Amt, das hilft', 'die Leute, die helfen'],
      ['Beispiel (Akk.)', 'der Brief, den ich schicke', 'die Karte, die ich brauche', 'das Paket, das ich abhole', 'die Briefe, die ich schicke'],
    ],
    examples: [
      { de: 'Das ist die Frau, die mir beim Formular geholfen hat.', ru: 'Это женщина, которая помогла мне с бланком.' },
      { de: 'Der Mann, der am Schalter 3 sitzt, ist sehr freundlich.', ru: 'Мужчина, который сидит у окошка 3, очень дружелюбный.' },
      { de: 'Ich brauche ein Formular, das man online ausfüllen kann.', ru: 'Мне нужен бланк, который можно заполнить онлайн.' },
      { de: 'Das ist der Brief, den ich gestern bekommen habe.', ru: 'Это письмо, которое я получил вчера.' },
      { de: 'Die Unterlagen, die Sie mitbringen müssen, stehen auf der Webseite.', ru: 'Документы, которые вы должны принести, указаны на сайте.' },
      { de: 'Hast du das Paket abgeholt, das deine Mutter geschickt hat?', ru: 'Ты забрал посылку, которую прислала твоя мама?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Das ist der Mann, ___ am Schalter arbeitet.',
        options: ['der', 'den', 'das', 'die'],
        answer: 0,
        explanationRu: 'der Mann — м. р. В придаточном он подлежащее (Der Mann arbeitet) → Nominativ: der.',
      },
      {
        type: 'choice',
        prompt: 'Das ist der Mann, ___ ich gestern gefragt habe.',
        options: ['den', 'der', 'die', 'das'],
        answer: 0,
        explanationRu: 'В придаточном подлежащее — ich, а мужчина — дополнение (Ich habe den Mann gefragt) → Akkusativ: den.',
      },
      {
        type: 'choice',
        prompt: 'Wo ist das Formular, ___ ich ausfüllen muss?',
        options: ['das', 'der', 'den', 'die'],
        answer: 0,
        explanationRu: 'das Formular — ср. р. В Akkusativ форма та же: das.',
      },
      {
        type: 'choice',
        prompt: 'Die Frau, ___ mir geholfen hat, war sehr nett.',
        options: ['die', 'der', 'den', 'das'],
        answer: 0,
        explanationRu: 'die Frau — ж. р., в придаточном она подлежащее (Die Frau hat mir geholfen) → die.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: [
          'Ich suche den Brief, den ich geschrieben habe.',
          'Ich suche den Brief, der ich geschrieben habe.',
          'Ich suche den Brief, den ich habe geschrieben.',
        ],
        answer: 0,
        explanationRu: 'Письмо — дополнение в придаточном (ich habe den Brief geschrieben) → den; спрягаемый глагол habe стоит в самом конце.',
      },
      {
        type: 'gap',
        prompt: 'Hier ist der Ausweis, ___ Sie beantragt haben.',
        answers: ['den'],
        explanationRu: 'der Ausweis — м. р.; в придаточном подлежащее Sie, а Ausweis — дополнение (Sie haben den Ausweis beantragt) → den.',
      },
      {
        type: 'gap',
        prompt: 'Ich habe eine Nachbarin, ___ bei der Post arbeitet.',
        answers: ['die'],
        explanationRu: 'die Nachbarin — ж. р., подлежащее в придаточном → die.',
      },
      {
        type: 'gap',
        prompt: 'Die Pakete, ___ hier liegen, sind für Herrn Wolf.',
        answers: ['die'],
        explanationRu: 'die Pakete — мн. ч. → die. Глагол liegen стоит в конце придаточного.',
      },
      {
        type: 'choice',
        audio: 'Das ist der Brief, den ich gestern bekommen habe.',
        prompt: 'Какое относительное местоимение вы слышите?',
        options: ['den', 'der', 'das', 'die'],
        answer: 0,
        explanationRu: 'der Brief — м. р., и он дополнение в придаточном (ich habe den Brief bekommen) → den.',
      },
      {
        type: 'gap',
        audio: 'Ich brauche das Formular, das auf dem Tisch liegt.',
        prompt: 'Где лежит бланк? Auf dem ___',
        answers: ['Tisch'],
        explanationRu: '…das auf dem Tisch liegt — «который лежит на столе».',
      },
      {
        type: 'order',
        words: ['Der', 'Brief,', 'den', 'du', 'geschickt', 'hast,', 'ist', 'angekommen.'],
        translationRu: 'Письмо, которое ты отправил, пришло.',
        explanationRu: 'Придаточное стоит внутри предложения между запятыми; в нём hast — в конце. Потом продолжается главное: ist angekommen.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините два предложения с помощью относительного местоимения.',
        prompt: 'Das ist die Bank. Die Bank hat am Samstag geöffnet.',
        answers: ['Das ist die Bank, die am Samstag geöffnet hat.'],
        explanationRu: 'die Bank — ж. р., подлежащее во втором предложении → die. Спрягаемый глагол hat уходит в конец.',
      },
    ],
  },
  vocab: [
    { de: 'Amt', article: 'das', plural: '-¨er', pos: 'noun', ru: 'ведомство, учреждение', example: 'Morgen muss ich aufs Amt, ich brauche einen neuen Pass.', exampleRu: 'Завтра мне надо идти в ведомство: мне нужен новый паспорт.', pronRu: 'дас АМТ' },
    { de: 'Bürgeramt', article: 'das', plural: '-¨er', pos: 'noun', ru: 'бюро обслуживания граждан (регистрация, паспорта)', example: 'Im Bürgeramt kann man seine Wohnung anmelden.', exampleRu: 'В бюро обслуживания граждан можно зарегистрировать квартиру.', pronRu: 'дас БЮР-га-амт' },
    { de: 'Personalausweis', article: 'der', plural: '-e', pos: 'noun', ru: 'удостоверение личности (ID-карта)', example: 'Bitte zeigen Sie Ihren Personalausweis.', exampleRu: 'Пожалуйста, покажите ваше удостоверение личности.', pronRu: 'дер пэр-зо-НА:ЛЬ-аус-вайс' },
    { de: 'Antrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'заявление, заявка', example: 'Den Antrag für den neuen Pass können Sie auch online stellen.', exampleRu: 'Заявление на новый паспорт можно подать и онлайн.', pronRu: 'дер АН-тра:к' },
    { de: 'Sachbearbeiter', article: 'der', plural: '-', pos: 'noun', ru: 'сотрудник (ведомства), который ведёт дело (die Sachbearbeiterin)', example: 'Die Sachbearbeiterin hat mir alles genau erklärt.', exampleRu: 'Сотрудница мне всё подробно объяснила.', pronRu: 'дер ЗАХ-бэ-ар-бай-та' },
    { de: 'Bescheinigung', article: 'die', plural: '-en', pos: 'noun', ru: 'справка, свидетельство', example: 'Vom Arbeitgeber brauche ich eine Bescheinigung über mein Gehalt.', exampleRu: 'Мне нужна справка о зарплате от работодателя.', pronRu: 'ди бэ-ШАЙ-ни-гунг' },
    { de: 'Öffnungszeiten', article: 'die', plural: '(nur Plural)', pos: 'noun', ru: 'часы работы', example: 'Die Öffnungszeiten vom Bürgeramt stehen im Internet.', exampleRu: 'Часы работы бюро обслуживания граждан указаны в интернете.', pronRu: 'ди ЁФ-нунгс-цай-тэн' },
    { de: 'Geheimzahl', article: 'die', plural: '-en', pos: 'noun', ru: 'ПИН-код', example: 'Sagen Sie niemandem Ihre Geheimzahl!', exampleRu: 'Никому не говорите свой ПИН-код!', pronRu: 'ди гэ-ХАЙМ-ца:ль' },
    { de: 'beantragen', forms: 'beantragt, hat beantragt', pos: 'verb', ru: 'подавать заявление (на что-л.), оформлять', example: 'Ich möchte einen neuen Reisepass beantragen.', exampleRu: 'Я хочу оформить новый паспорт.', pronRu: 'бэ-АН-тра:-гэн' },
    { de: 'Kontoauszug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'выписка со счёта', example: 'Auf dem Kontoauszug sehe ich alle Zahlungen.', exampleRu: 'В выписке со счёта я вижу все платежи.', pronRu: 'дер КОН-то-аус-цу:к' },
    { de: 'Konto', article: 'das', plural: 'die Konten', pos: 'noun', ru: 'счёт (в банке)', example: 'Ich habe ein Konto bei einer Bank in der Nähe.', exampleRu: 'У меня есть счёт в банке поблизости.', pronRu: 'дас КОН-то' },
    { de: 'überweisen', forms: 'überweist, hat überwiesen', pos: 'verb', ru: 'переводить (деньги на счёт)', example: 'Ich überweise die Miete jeden Monat am Ersten.', exampleRu: 'Я перевожу квартплату каждый месяц первого числа.', pronRu: 'ю-ба-ВАЙ-зэн' },
    { de: 'Geldautomat', article: 'der', plural: '-en', forms: 'den Geldautomaten', pos: 'noun', ru: 'банкомат', example: 'Der Geldautomat ist direkt neben dem Eingang.', exampleRu: 'Банкомат прямо рядом со входом.', pronRu: 'дер ГЭЛЬТ-ау-то-ма:т' },
    { de: 'Schalter', article: 'der', plural: '-', pos: 'noun', ru: 'окошко, стойка (в учреждении)', example: 'Bitte gehen Sie zu Schalter 4.', exampleRu: 'Пожалуйста, пройдите к окошку 4.', pronRu: 'дер ШАЛЬ-та' },
    { de: 'Wartenummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер очереди, талон', example: 'Nehmen Sie bitte eine Wartenummer und warten Sie dort.', exampleRu: 'Возьмите, пожалуйста, талон и подождите там.', pronRu: 'ди ВАР-тэ-ну-ма' },
    { de: 'Gebühr', article: 'die', plural: '-en', pos: 'noun', ru: 'сбор, пошлина, плата', example: 'Für den neuen Ausweis zahlt man eine Gebühr.', exampleRu: 'За новое удостоверение платят сбор.', pronRu: 'ди гэ-БЮ:А' },
    { de: 'Unterlagen', article: 'die', plural: '(nur Plural)', pos: 'noun', ru: 'документы, бумаги', example: 'Haben Sie alle Unterlagen dabei?', exampleRu: 'У вас с собой все документы?', pronRu: 'ди УН-та-ла:-гэн' },
    { de: 'gültig', pos: 'adj', ru: 'действительный (документ, билет)', example: 'Ihr Ausweis ist leider nicht mehr gültig.', exampleRu: 'Ваше удостоверение, к сожалению, больше не действительно.', pronRu: 'ГЮЛЬ-тихь' },
    { de: 'Paket', article: 'das', plural: '-e', pos: 'noun', ru: 'посылка', example: 'Ich muss noch ein Paket zur Post bringen.', exampleRu: 'Мне ещё надо отнести посылку на почту.', pronRu: 'дас па-КЭ:Т' },
    { de: 'Päckchen', article: 'das', plural: '-', pos: 'noun', ru: 'бандероль, маленькая посылка', example: 'Ein Päckchen ist billiger als ein Paket.', exampleRu: 'Бандероль дешевле, чем посылка.', pronRu: 'дас ПЭК-хьен' },
  ],
  listening: {
    title: 'Herr Novak im Bürgeramt',
    kind: 'dialog',
    text: `A: Guten Tag. Ich habe einen Termin um zehn Uhr. Meine Wartenummer ist die 47.
B: Guten Tag. Was kann ich für Sie tun?
A: Ich bin vor zwei Wochen umgezogen und möchte meine neue Wohnung anmelden.
B: Gut. Haben Sie das Formular dabei, das wir Ihnen geschickt haben?
A: Ja, hier. Ich habe es schon zu Hause ausgefüllt.
B: Danke. Und Ihren Personalausweis, bitte. Oh, Ihr Ausweis ist leider nur noch bis Ende Mai gültig.
A: Wirklich? Das habe ich nicht gewusst. Kann ich hier einen neuen beantragen?
B: Ja, aber dafür brauchen Sie einen extra Termin und ein neues Passfoto.
A: Was kostet der neue Ausweis?
B: Die Gebühr ist siebenunddreißig Euro.
A: Gut. Und was kostet die Anmeldung?
B: Die Anmeldung ist kostenlos. Unterschreiben Sie bitte hier unten. Danke, hier ist Ihre Bestätigung.
A: Vielen Dank. Und wo mache ich den Termin für den Ausweis?
B: Am Schalter, der direkt am Eingang ist. Oder online auf unserer Webseite.
A: Danke schön, auf Wiedersehen!`,
    questions: [
      { question: 'Warum ist Herr Novak im Bürgeramt?', options: ['Er möchte seine neue Wohnung anmelden.', 'Er möchte ein Konto eröffnen.', 'Er möchte ein Paket abholen.'], answer: 0 },
      { question: 'Was hat Herr Novak schon zu Hause gemacht?', options: ['Er hat ein Passfoto gemacht.', 'Er hat das Formular ausgefüllt.', 'Er hat die Gebühr überwiesen.'], answer: 1 },
      { question: 'Was ist das Problem mit dem Ausweis?', options: ['Er ist weg.', 'Er ist bald nicht mehr gültig.', 'Das Foto ist zu alt.'], answer: 1 },
      { question: 'Wie viel kostet der neue Ausweis?', options: ['Nichts', '27 Euro', '37 Euro'], answer: 2 },
      { question: 'Wo kann Herr Novak den Termin für den Ausweis machen?', options: ['Am Schalter am Eingang oder online', 'Nur am Telefon', 'Im Büro im ersten Stock'], answer: 0 },
    ],
  },
  writing: {
    taskRu: 'У вас на следующей неделе запись в Bürgeramt (бюро обслуживания граждан), но вы не можете прийти. Напишите e-mail: укажите, когда у вас запись, объясните, почему не можете прийти, попросите новую дату и спросите, какие документы нужно принести.',
    taskDe: 'Sie haben einen Termin im Bürgeramt, aber Sie können nicht kommen. Schreiben Sie eine E-Mail an das Bürgeramt.',
    points: [
      'Wann haben Sie den Termin und warum schreiben Sie?',
      'Warum können Sie nicht kommen?',
      'Bitten Sie um einen neuen Termin und fragen Sie nach den Unterlagen.',
    ],
    minWords: 50,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'ich habe am … um … Uhr einen Termin.',
      'Leider kann ich nicht kommen, weil …',
      'Könnten Sie mir bitte einen neuen Termin geben?',
      'Ich möchte wissen, welche Unterlagen ich mitbringen muss.',
      'Ich brauche einen Ausweis, der …',
      'Vielen Dank im Voraus.',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu: 'Вы на почте. Вы хотите отправить посылку за границу и купить марки. Сотрудник почты задаёт вам вопросы.',
    aiRole:
      'Sie sind Herr Lange und arbeiten am Schalter in einer Postfiliale. Der Kunde möchte ein Paket ins Ausland schicken und Briefmarken kaufen. Fragen Sie: Wohin geht das Paket? Was ist im Paket? Das Paket wiegt 5 Kilo und kostet 46 Euro, eine Briefmarke für einen Brief in Deutschland kostet 95 Cent. Für Pakete ins Ausland muss der Kunde ein Formular ausfüllen. Sprechen Sie sehr einfach (A2-Niveau), in kurzen Sätzen, und benutzen Sie manchmal Relativsätze, zum Beispiel „Das ist das Formular, das Sie ausfüllen müssen.“ Wenn der Kunde etwas nicht versteht, sagen Sie es noch einmal langsamer und einfacher.',
    opener: 'Guten Tag! Der Nächste, bitte. Was kann ich für Sie tun?',
    tasksRu: [
      'Скажите, что вы хотите отправить посылку, и куда.',
      'Купите марки для писем по Германии.',
      'Спросите про бланк: «Ist das das Formular, das ich ausfüllen muss?»',
      'Спросите, когда посылка придёт, и поблагодарите.',
    ],
    readAloud: [
      'Ich möchte ein Paket nach Polen schicken.',
      'Ist das das Formular, das ich ausfüllen muss?',
      'Der Mann, der am Schalter sitzt, ist sehr nett.',
      'Wo ist der Brief, den du geschrieben hast?',
    ],
  },
};
