import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-18',
  level: 'B2',
  order: 18,
  title: 'Recht & Verbraucher',
  titleRu: 'Право и защита прав потребителей',
  goalsRu: [
    'Понимать договоры, условия, официальные письма и советы юристов по защите прав потребителей.',
    'Использовать предлоги письменной речи: gegenüber, entsprechend, laut, zufolge, gemäß, aufgrund, mithilfe, anhand, bezüglich — с правильным падежом и порядком слов.',
    'Писать формальные письма и жалобы (Beschwerde, Reklamation) с чёткими требованиями и сроками.',
    'Отстаивать свои права в разговоре со службой поддержки или ведомством.',
  ],
  grammar: {
    topic: 'Präpositionen der Schriftsprache',
    topicRu: 'Предлоги письменной и официальной речи',
    explanationRu: `В договорах, официальных письмах и новостях часто встречаются предлоги, которые в устной речи заменяют более простыми (wegen, mit, nach, über). Для B2 важно знать их **падеж** и **место в предложении**.

**С Genitiv:** **aufgrund** (на основании, из-за), **mithilfe** (с помощью), **anhand** (на основе, по), **bezüglich** (относительно): *aufgrund **des** Lieferverzugs, mithilfe **eines** Anwalts, anhand **der** Rechnung, bezüglich **Ihres** Schreibens.* Если артикля нет, используется **von + Dat**: *aufgrund von Mängeln, mithilfe von Zeugen.*

**С Dativ:**
- **gegenüber** — по отношению к; с местоимением стоит **после** него: *gegenüber dem Kunden*, но *ihm gegenüber*;
- **entsprechend** и **gemäß** — согласно, в соответствии с; могут стоять до и после: *gemäß **dem** Vertrag / dem Vertrag gemäß; entsprechend **Ihrem** Wunsch / Ihrem Wunsch entsprechend*;
- **zufolge** — по словам, согласно (источнику); стоит **после** существительного: *dem Bericht **zufolge***.

**laut** («согласно, по данным») употребляется с Dativ или Genitiv, без артикля часто без окончания: *laut **dem** Vertrag / laut **des** Vertrags / laut Vertrag*. Во множественном числе без артикля — Dativ: *laut Berichten*.

**Типичные ошибки русскоговорящих:**

- русское «согласно» всегда переводят как *laut* — но *laut* указывает на **источник информации**, а *gemäß / entsprechend* — на **правило или желание**, которому следуют: *gemäß § 437 BGB, entsprechend Ihrer Bitte*;
- ставят *zufolge* перед существительным: *zufolge dem Bericht* — правильно **dem Bericht zufolge**;
- путают падеж: *aufgrund dem Fehler* — правильно **aufgrund des Fehlers**;
- забывают окончание -s в Genitiv: *bezüglich des Vertrag* — правильно **des Vertrags**;
- путают *gegenüber* как место («напротив») и как отношение («по отношению к»): *Der Händler war mir gegenüber unfreundlich.*`,
    table: [
      ['Präposition', 'Kasus', 'Stellung', 'Beispiel'],
      ['aufgrund', 'Gen (von + Dat)', 'vor dem Nomen', 'aufgrund des Lieferverzugs'],
      ['mithilfe / anhand', 'Gen (von + Dat)', 'vor dem Nomen', 'anhand der Fotos, mithilfe eines Anwalts'],
      ['bezüglich', 'Gen', 'vor dem Nomen', 'bezüglich Ihrer Anfrage'],
      ['laut', 'Dat / Gen', 'vor dem Nomen', 'laut Vertrag, laut dem Gutachten'],
      ['gemäß / entsprechend', 'Dat', 'vor oder nach dem Nomen', 'gemäß den AGB, Ihrem Wunsch entsprechend'],
      ['zufolge', 'Dat', 'nach dem Nomen', 'dem Urteil zufolge'],
      ['gegenüber', 'Dat', 'vor dem Nomen; nach Pronomen', 'gegenüber der Behörde, ihm gegenüber'],
    ],
    examples: [
      {
        de: 'Aufgrund des Lieferverzugs treten wir vom Kaufvertrag zurück.',
        ru: 'В связи с задержкой поставки мы отказываемся от договора купли-продажи.',
      },
      {
        de: 'Gemäß § 3 der Vertragsbedingungen beträgt die Kündigungsfrist einen Monat.',
        ru: 'Согласно § 3 условий договора, срок расторжения составляет один месяц.',
      },
      {
        de: 'Einem Urteil des Landgerichts zufolge ist diese Klausel unwirksam.',
        ru: 'Согласно решению земельного суда, этот пункт недействителен.',
      },
      {
        de: 'Anhand der Fotos lässt sich der Transportschaden eindeutig nachweisen.',
        ru: 'По фотографиям можно однозначно доказать повреждение при транспортировке.',
      },
      {
        de: 'Bezüglich Ihrer Beanstandung vom 3. Mai teilen wir Ihnen Folgendes mit.',
        ru: 'Относительно вашей претензии от 3 мая сообщаем вам следующее.',
      },
      {
        de: 'Der Vermieter hat sich uns gegenüber stets korrekt verhalten.',
        ru: 'Арендодатель всегда вёл себя по отношению к нам корректно.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Gemäß ___ Vertrag haben Sie Anspruch auf eine kostenlose Reparatur.',
        options: ['des', 'dem', 'den', 'der'],
        answer: 1,
        explanationRu: 'gemäß управляет дательным падежом: gemäß dem Vertrag (der Vertrag, мужской род → dem).',
      },
      {
        type: 'choice',
        prompt: 'Dem Gutachten ___ war das Gerät schon bei der Lieferung beschädigt.',
        options: ['laut', 'aufgrund', 'zufolge', 'bezüglich'],
        answer: 2,
        explanationRu: 'Предлог стоит после существительного в Dativ — это может быть только zufolge («согласно заключению»). laut, aufgrund и bezüglich стоят перед существительным.',
      },
      {
        type: 'choice',
        prompt: 'Wir wenden uns an Sie ___ Ihrer Rechnung vom 12. März.',
        options: ['gegenüber', 'entsprechend', 'zufolge', 'bezüglich'],
        answer: 3,
        explanationRu: 'bezüglich + Genitiv = «относительно, по поводу». Типичное начало делового письма: bezüglich Ihrer Rechnung / Ihres Schreibens.',
      },
      {
        type: 'choice',
        prompt: 'Der Händler hat sich ___ seinen Kunden immer sehr kulant verhalten.',
        options: ['gegenüber', 'anhand', 'zufolge', 'aufgrund'],
        answer: 0,
        explanationRu: 'gegenüber + Dativ = «по отношению к». seinen Kunden — Dativ мн. ч. (окончание -n).',
      },
      {
        type: 'gap',
        prompt: 'Aufgrund ___ hohen Nachfrage verlängert sich die Lieferzeit um zwei Wochen.',
        answers: ['der'],
        hintRu: 'aufgrund + Genitiv, die Nachfrage',
        explanationRu: 'aufgrund требует Genitiv. Женский род в Genitiv: der → aufgrund der hohen Nachfrage.',
      },
      {
        type: 'gap',
        prompt: '___ der Seriennummer konnte der Hersteller das Produktionsdatum feststellen.',
        answers: ['Anhand', 'Mithilfe'],
        hintRu: '«по (серийному номеру)», + Genitiv',
        explanationRu: 'anhand + Genitiv = «на основании, по (документу, признаку)». Возможен и mithilfe («с помощью»).',
      },
      {
        type: 'gap',
        prompt: 'Ihrem Wunsch ___ haben wir den Vertrag zum 31. Mai gekündigt.',
        answers: ['entsprechend', 'gemäß'],
        hintRu: '«в соответствии с вашим желанием», после существительного',
        explanationRu: 'entsprechend (или gemäß) + Dativ может стоять после существительного: Ihrem Wunsch entsprechend. laut здесь не подходит: желание — не источник информации.',
      },
      {
        type: 'gap',
        prompt: 'Laut ___ Mietvertrag ist die Haltung von Hunden nicht erlaubt.',
        answers: ['Ihrem', 'dem'],
        hintRu: 'притяжательное местоимение Ihr; у существительного нет окончания -s',
        explanationRu: 'laut употребляется с Dativ или Genitiv. Так как у Mietvertrag нет окончания -(e)s, возможен только Dativ: laut Ihrem / dem Mietvertrag.',
      },
      {
        type: 'order',
        words: ['Mithilfe', 'der Verbraucherzentrale', 'hat', 'sie', 'ihr Geld', 'zurückbekommen.'],
        translationRu: 'С помощью центра защиты прав потребителей она получила свои деньги обратно.',
        explanationRu: 'mithilfe + Genitiv открывает предложение, на втором месте — спрягаемый глагол hat, затем подлежащее sie.',
      },
      {
        type: 'order',
        words: ['Den Angaben', 'des Herstellers', 'zufolge', 'ist', 'das Gerät', 'wasserdicht.'],
        translationRu: 'По данным производителя, прибор водонепроницаем.',
        explanationRu: 'zufolge стоит после группы в Dativ (den Angaben des Herstellers). Вся группа занимает первое место, глагол ist — на втором.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное предложение предложной группой с aufgrund.',
        prompt: 'Weil die Lieferung verspätet war, verlangen wir eine Preisminderung.',
        answers: [
          'Aufgrund der verspäteten Lieferung verlangen wir eine Preisminderung.',
          'Aufgrund der Lieferverspätung verlangen wir eine Preisminderung.',
        ],
        explanationRu: 'Номинализация: die Lieferung war verspätet → die verspätete Lieferung. aufgrund + Genitiv: aufgrund der verspäteten Lieferung. После предложной группы сразу идёт глагол (verlangen).',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите предложение с предлогом zufolge.',
        prompt: 'Wie es im Bericht der Verbraucherzentrale heißt, sind viele Fitnessstudio-Verträge unwirksam.',
        answers: [
          'Dem Bericht der Verbraucherzentrale zufolge sind viele Fitnessstudio-Verträge unwirksam.',
        ],
        explanationRu: 'zufolge стоит после существительного в Dativ: dem Bericht … zufolge. Вариант с laut: Laut dem Bericht der Verbraucherzentrale sind …',
      },
    ],
  },
  vocab: [
    {
      de: 'Anspruch',
      article: 'der',
      plural: '-¨e',
      forms: 'auf + Akk',
      pos: 'noun',
      ru: 'право, притязание (на)',
      example: 'Bei einem Mangel haben Sie zwei Jahre lang Anspruch auf Gewährleistung.',
      exampleRu: 'При обнаружении дефекта вы в течение двух лет имеете право на гарантийные требования.',
    },
    {
      de: 'Einspruch',
      article: 'der',
      plural: '-¨e',
      forms: 'gegen + Akk; Einspruch einlegen',
      pos: 'noun',
      ru: 'возражение, протест (официальный)',
      example: 'Gegen den Bescheid können Sie innerhalb eines Monats Einspruch einlegen.',
      exampleRu: 'На это решение вы можете подать возражение в течение месяца.',
    },
    {
      de: 'Klage',
      article: 'die',
      plural: '-n',
      forms: 'gegen + Akk; Klage erheben / einreichen',
      pos: 'noun',
      ru: 'иск, судебная жалоба',
      example: 'Der Verbraucherverband hat Klage gegen den Mobilfunkanbieter eingereicht.',
      exampleRu: 'Союз потребителей подал иск против оператора мобильной связи.',
    },
    {
      de: 'Schadensersatz',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'возмещение ущерба',
      example: 'Die Fluggesellschaft musste den Passagieren Schadensersatz zahlen.',
      exampleRu: 'Авиакомпании пришлось выплатить пассажирам возмещение ущерба.',
    },
    {
      de: 'Vereinbarung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'соглашение, договорённость',
      example: 'Mündliche Vereinbarungen sollte man sich immer schriftlich bestätigen lassen.',
      exampleRu: 'Устные договорённости всегда стоит подтверждать письменно.',
    },
    {
      de: 'Rechtsanwalt',
      article: 'der',
      plural: '-¨e',
      forms: 'die Rechtsanwältin, -nen',
      pos: 'noun',
      ru: 'адвокат, юрист',
      example: 'Bevor Sie den Vertrag unterschreiben, sollte ihn ein Rechtsanwalt prüfen.',
      exampleRu: 'Прежде чем подписывать договор, его стоит показать адвокату.',
    },
    {
      de: 'Gericht',
      article: 'das',
      plural: '-e',
      forms: 'vor Gericht gehen / ziehen',
      pos: 'noun',
      ru: 'суд',
      example: 'Wenn wir uns nicht einigen, ziehe ich vor Gericht.',
      exampleRu: 'Если мы не договоримся, я обращусь в суд.',
    },
    {
      de: 'fristgerecht',
      pos: 'adj',
      ru: 'в установленный срок, своевременный',
      example: 'Die Kündigung ist fristgerecht bei uns eingegangen.',
      exampleRu: 'Заявление о расторжении поступило к нам в установленный срок.',
    },
    {
      de: 'Beanstandung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'претензия, рекламация, замечание',
      example: 'Ihre Beanstandung wird derzeit von unserer Fachabteilung geprüft.',
      exampleRu: 'Ваша претензия сейчас рассматривается нашим профильным отделом.',
    },
    {
      de: 'Sonderkündigung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'досрочное расторжение договора (по особому основанию)',
      example: 'Nach der Preiserhöhung habe ich von meinem Recht auf Sonderkündigung Gebrauch gemacht.',
      exampleRu: 'После повышения цен я воспользовался правом на досрочное расторжение договора.',
    },
    {
      de: 'Nachbesserung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'устранение недостатков, доработка',
      example: 'Ich habe dem Handwerker eine Frist zur Nachbesserung gesetzt.',
      exampleRu: 'Я установил мастеру срок для устранения недостатков.',
    },
    {
      de: 'Widerrufsfrist',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'срок для отказа от договора',
      example: 'Bei Onlinekäufen beträgt die Widerrufsfrist in der EU 14 Tage.',
      exampleRu: 'При онлайн-покупках срок для отказа от договора в ЕС составляет 14 дней.',
    },
    {
      de: 'Lieferverzug',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'просрочка поставки',
      example: 'Bei einem Lieferverzug von mehr als vier Wochen können Sie vom Vertrag zurücktreten.',
      exampleRu: 'При задержке поставки более чем на четыре недели вы можете отказаться от договора.',
    },
    {
      de: 'Preisminderung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'снижение цены (из-за недостатка)',
      example: 'Wegen der Kratzer am Tisch hat mir das Möbelhaus eine Preisminderung angeboten.',
      exampleRu: 'Из-за царапин на столе мебельный магазин предложил мне скидку.',
    },
    {
      de: 'auffordern',
      forms: 'zu + Dat; fordert auf, forderte auf, hat aufgefordert',
      pos: 'verb',
      ru: 'требовать (от кого-л. что-л. сделать), призывать',
      example: 'Hiermit fordere ich Sie auf, den Betrag bis zum 15. Juni zu erstatten.',
      exampleRu: 'Настоящим требую от вас возместить сумму до 15 июня.',
    },
    {
      de: 'Schlichtung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'досудебное урегулирование, примирение сторон',
      example: 'Die Schlichtung ist für Verbraucher kostenlos und dauert nur wenige Wochen.',
      exampleRu: 'Досудебное урегулирование для потребителей бесплатно и длится всего несколько недель.',
    },
    {
      de: 'beschädigt',
      pos: 'adj',
      ru: 'повреждённый',
      example: 'Das Paket kam mit einem beschädigten Karton bei mir an.',
      exampleRu: 'Посылка пришла ко мне в повреждённой коробке.',
    },
    {
      de: 'Vertragsbedingungen',
      article: 'die',
      plural: 'Pl.',
      pos: 'noun',
      ru: 'условия договора',
      example: 'Lesen Sie die Vertragsbedingungen genau, bevor Sie unterschreiben.',
      exampleRu: 'Внимательно прочитайте условия договора, прежде чем подписывать.',
    },
    {
      de: 'Zahlungsverzug',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'просрочка платежа',
      example: 'Bei Zahlungsverzug dürfen zusätzliche Mahngebühren berechnet werden.',
      exampleRu: 'При просрочке платежа могут взиматься дополнительные сборы за напоминание.',
    },
    {
      de: 'Rechtsschutzversicherung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'страхование судебных расходов',
      example: 'Zum Glück übernimmt meine Rechtsschutzversicherung die Kosten für den Anwalt.',
      exampleRu: 'К счастью, моя страховка судебных расходов покрывает расходы на адвоката.',
    },
  ],
  listening: {
    title: 'Verbrauchertipp: Wenn das neue Gerät kaputt ist',
    kind: 'monolog',
    text: `Und nun, wie jeden Donnerstag, unser Verbrauchertipp. Heute mit Rechtsanwältin Dr. Miriam Busch von der Verbraucherzentrale.

Guten Morgen! Stellen Sie sich vor: Sie haben online einen Kaffeevollautomaten für 600 Euro gekauft, und nach vier Monaten kommt plötzlich kein Kaffee mehr heraus. Was nun? Viele Kunden wenden sich zuerst an den Hersteller. Das ist aber nicht unbedingt der richtige Weg. Gemäß dem Bürgerlichen Gesetzbuch ist nämlich zunächst der Verkäufer Ihr Ansprechpartner. Laut Gesetz haben Sie gegenüber dem Händler zwei Jahre lang einen Anspruch auf Gewährleistung – unabhängig davon, ob der Hersteller zusätzlich eine Garantie gibt.

Wichtig ist außerdem die sogenannte Beweislastumkehr. Tritt ein Mangel innerhalb des ersten Jahres auf, wird vermutet, dass er schon beim Kauf vorhanden war. Der Händler muss also das Gegenteil beweisen. Nach Ablauf dieses Jahres müssen dagegen Sie selbst nachweisen, dass der Mangel schon beim Kauf bestand – zum Beispiel anhand eines Gutachtens.

Wie gehen Sie konkret vor? Schreiben Sie dem Händler eine kurze, sachliche Beanstandung, am besten per E-Mail oder Brief, damit Sie später einen Nachweis haben. Beschreiben Sie den Mangel genau und setzen Sie eine angemessene Frist, in der Regel zwei Wochen. Übrigens dürfen Sie als Käufer wählen, ob das Gerät repariert oder durch ein neues ersetzt werden soll. Erst wenn die Reparatur zweimal scheitert, können Sie vom Vertrag zurücktreten oder eine Preisminderung verlangen.

Und was, wenn der Händler die Reparatur aufgrund angeblich falscher Bedienung verweigert? Dann lohnt sich ein Gespräch mit uns. Unseren Erfahrungen zufolge lassen sich die meisten Fälle ohne Gericht lösen, oft mithilfe einer kostenlosen Schlichtungsstelle.

Bei Fragen bezüglich Ihrer Rechte erreichen Sie uns montags bis freitags von 9 bis 16 Uhr. Die Telefonnummer finden Sie auf unserer Webseite.`,
    questions: [
      {
        question: 'An wen sollte man sich laut Dr. Busch zuerst wenden?',
        options: ['an den Hersteller', 'an den Verkäufer', 'an die Verbraucherzentrale', 'an ein Gericht'],
        answer: 1,
      },
      {
        question: 'Was bedeutet die Beweislastumkehr im ersten Jahr?',
        options: [
          'Der Händler muss beweisen, dass der Mangel beim Kauf noch nicht bestand.',
          'Der Kunde muss beweisen, dass er das Gerät richtig bedient hat.',
          'Der Hersteller muss ein Gutachten bezahlen.',
          'Der Kunde muss den Mangel sofort melden.',
        ],
        answer: 0,
      },
      {
        question: 'Was sollte die Beanstandung enthalten?',
        options: [
          'eine Drohung mit einem Anwalt',
          'eine Forderung nach Schadensersatz',
          'eine genaue Beschreibung des Mangels und eine Frist',
          'eine Kopie der Herstellergarantie',
        ],
        answer: 2,
      },
      {
        question: 'Wer entscheidet, ob das Gerät repariert oder ersetzt wird?',
        options: ['der Händler', 'der Hersteller', 'die Schlichtungsstelle', 'der Käufer'],
        answer: 3,
      },
      {
        question: 'Wie werden die meisten Fälle laut Dr. Busch gelöst?',
        options: [
          'vor Gericht',
          'ohne Gericht, oft mit Hilfe einer Schlichtungsstelle',
          'durch die Garantie des Herstellers',
          'durch ein Telefonat mit dem Hersteller',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Вы заказали в интернет-магазине ноутбук. Его доставили с повреждённым экраном, а служба поддержки уже две недели не отвечает. Напишите официальную жалобу (Beschwerde) в отдел обслуживания клиентов.',
    taskDe: 'Sie haben in einem Onlineshop einen Laptop bestellt. Das Gerät wurde mit einem beschädigten Bildschirm geliefert, und der Kundenservice reagiert seit zwei Wochen nicht. Schreiben Sie eine formelle Beschwerde an die Kundenbetreuung.',
    points: [
      'Bestellung und Lieferung (Datum, Bestellnummer, Zustand des Geräts)',
      'Ihre bisherigen Kontaktversuche und Ihre Enttäuschung darüber',
      'Ihre Forderung (Ersatz oder Rückerstattung) mit einer klaren Frist',
      'Weitere Schritte, falls der Händler nicht reagiert',
    ],
    minWords: 160,
    usefulPhrases: [
      'Bezüglich meiner Bestellung vom … (Bestellnummer …) wende ich mich heute an Sie.',
      'Aufgrund des beschädigten Bildschirms ist das Gerät nicht nutzbar.',
      'Anhand der beigefügten Fotos können Sie den Schaden deutlich erkennen.',
      'Gemäß den gesetzlichen Bestimmungen habe ich Anspruch auf …',
      'Ich fordere Sie daher auf, mir bis zum … ein neues Gerät zu liefern.',
      'Andernfalls sehe ich mich gezwungen, die Verbraucherzentrale einzuschalten.',
    ],
  },
  speaking: {
    scenarioRu: 'Вы переезжаете в город, где у вашего фитнес-клуба нет филиала, и хотите досрочно расторгнуть договор. Вы звоните на горячую линию. Сотрудник пытается удержать вас и ссылается на условия договора.',
    aiRole: 'Sie sind Herr Krause, Mitarbeiter der Kundenhotline einer Fitnessstudio-Kette. Ein Kunde möchte seinen Vertrag wegen eines Umzugs vorzeitig kündigen. Sie sind höflich, aber hartnäckig: Sie verweisen auf die Mindestlaufzeit laut Vertrag, bieten zuerst eine Pausierung oder einen Rabatt an und verlangen Nachweise (Meldebescheinigung). Sprechen Sie formelles Deutsch auf B2-Niveau. Geben Sie erst nach, wenn der Kunde sachlich und bestimmt argumentiert und eine schriftliche Bestätigung verlangt.',
    opener: 'Guten Tag, Sie sprechen mit Jan Krause vom Kundenservice von „FitPlus“. Ich habe gesehen, dass Sie uns bezüglich Ihrer Mitgliedschaft geschrieben haben. Wie kann ich Ihnen helfen?',
    tasksRu: [
      'Объясните ситуацию и назовите свою просьбу (Aufgrund meines Umzugs möchte ich …).',
      'Ссылайтесь на правила и закон (gemäß, laut Vertrag, entsprechend den Bedingungen …).',
      'Вежливо, но твёрдо отклоните альтернативные предложения сотрудника.',
      'Потребуйте письменное подтверждение расторжения и назовите срок.',
    ],
    readAloud: [
      'Bezüglich Ihres Schreibens vom 4. April teilen wir Ihnen mit, dass Ihre Beanstandung berechtigt ist.',
      'Aufgrund des erheblichen Lieferverzugs trete ich hiermit gemäß den gesetzlichen Bestimmungen vom Kaufvertrag zurück.',
      'Einem aktuellen Urteil zufolge haben Kunden auch gegenüber Onlinehändlern einen Anspruch auf eine kostenlose Nachbesserung.',
    ],
  },
};
