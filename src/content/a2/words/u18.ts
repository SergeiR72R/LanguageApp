import type { VocabItem } from '../../types';

// Word bank A2 · Unit 18 — Ämter und Dienstleistungen
export const words: VocabItem[] = [
  // Ämter
  { de: 'Behörde', article: 'die', plural: '-n', pos: 'noun', ru: 'орган власти, ведомство', example: 'Für dieses Problem ist eine andere Behörde zuständig.', exampleRu: 'Этим вопросом занимается другое ведомство.', pronRu: 'ди бэ-ХЁ:А-дэ' },
  { de: 'Ausländerbehörde', article: 'die', plural: '-n', pos: 'noun', ru: 'ведомство по делам иностранцев', example: 'Mein Visum muss ich bei der Ausländerbehörde verlängern.', exampleRu: 'Визу мне нужно продлить в ведомстве по делам иностранцев.', pronRu: 'ди АУС-лэн-да-бэ-хё:а-дэ' },
  { de: 'Sprechzeiten', article: 'die', plural: '(nur Plural)', pos: 'noun', ru: 'часы приёма', example: 'Die Sprechzeiten stehen an der Tür.', exampleRu: 'Часы приёма написаны на двери.' },
  { de: 'zuständig', forms: 'für + Akk', pos: 'adj', ru: 'ответственный (за что-л.), компетентный', example: 'Wer ist hier für Ausweise zuständig?', exampleRu: 'Кто здесь занимается удостоверениями личности?', pronRu: 'ЦУ:-штэн-дихь' },
  { de: 'eine Nummer ziehen', forms: 'zieht, hat gezogen', pos: 'phrase', ru: 'взять номерок (талон очереди)', example: 'Ziehen Sie bitte zuerst eine Nummer am Automaten.', exampleRu: 'Сначала возьмите, пожалуйста, номерок в автомате.' },
  { de: 'Schlange stehen', forms: 'steht Schlange, hat Schlange gestanden', pos: 'phrase', ru: 'стоять в очереди', example: 'Auf der Post musste ich eine halbe Stunde Schlange stehen.', exampleRu: 'На почте мне пришлось полчаса простоять в очереди.' },

  // Dokumente
  { de: 'Dokument', article: 'das', plural: '-e', pos: 'noun', ru: 'документ', example: 'Alle Dokumente liegen in diesem Ordner.', exampleRu: 'Все документы лежат в этой папке.' },
  { de: 'Bestätigung', article: 'die', plural: '-en', pos: 'noun', ru: 'подтверждение, справка', example: 'Nach der Anmeldung bekommen Sie eine Bestätigung.', exampleRu: 'После регистрации вы получите подтверждение.', pronRu: 'ди бэ-ШТЭ:-ти-гунг' },
  { de: 'Geburtsurkunde', article: 'die', plural: '-n', pos: 'noun', ru: 'свидетельство о рождении', example: 'Für die Hochzeit brauchen wir unsere Geburtsurkunden.', exampleRu: 'Для свадьбы нам нужны наши свидетельства о рождении.', pronRu: 'ди гэ-БУРТС-у:а-кун-дэ' },
  { de: 'Wohnsitz', article: 'der', plural: '-e', pos: 'noun', ru: 'место жительства', example: 'Mein Wohnsitz ist seit Mai in Leipzig.', exampleRu: 'С мая моё место жительства — Лейпциг.' },
  { de: 'abmelden', forms: 'meldet ab, hat abgemeldet', pos: 'verb', ru: 'выписаться, снять с учёта; отписаться', example: 'Vor dem Umzug ins Ausland muss man sich abmelden.', exampleRu: 'Перед переездом за границу нужно выписаться.' },
  { de: 'verlängern', forms: 'verlängert, hat verlängert', pos: 'verb', ru: 'продлевать', example: 'Wir möchten den Vertrag um ein Jahr verlängern.', exampleRu: 'Мы хотели бы продлить договор на год.' },
  { de: 'abgeben', forms: 'gibt ab, hat abgegeben', pos: 'verb', ru: 'сдавать, отдавать', example: 'Das Formular können Sie am Schalter 2 abgeben.', exampleRu: 'Бланк можно сдать в окошке 2.' },
  { de: 'ungültig', pos: 'adj', ru: 'недействительный', example: 'Ohne Unterschrift ist das Formular ungültig.', exampleRu: 'Без подписи бланк недействителен.' },
  { de: 'Stempel', article: 'der', plural: '-', pos: 'noun', ru: 'печать, штамп', example: 'Auf dem Dokument fehlt noch ein Stempel.', exampleRu: 'На документе ещё не хватает печати.' },

  // Bank
  { de: 'Kontonummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер счёта', example: 'Schreiben Sie bitte Ihre Kontonummer auf das Formular.', exampleRu: 'Напишите, пожалуйста, номер вашего счёта на бланке.' },
  { de: 'Bankkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'банковская карта', example: 'Mit der Bankkarte kann man am Automaten Geld holen.', exampleRu: 'С банковской картой можно снять деньги в банкомате.' },
  { de: 'Kreditkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'кредитная карта', example: 'Kann ich hier mit Kreditkarte bezahlen?', exampleRu: 'Можно здесь заплатить кредитной картой?' },
  { de: 'Bargeld', article: 'das', plural: '–', pos: 'noun', ru: 'наличные деньги', example: 'Ich habe kein Bargeld dabei, kann ich mit Karte zahlen?', exampleRu: 'У меня нет с собой наличных, можно заплатить картой?' },
  { de: 'abheben', forms: 'hebt ab, hat abgehoben', pos: 'verb', ru: 'снимать (деньги со счёта)', example: 'Ich muss noch Geld am Automaten abheben.', exampleRu: 'Мне ещё надо снять деньги в банкомате.' },
  { de: 'eröffnen', forms: 'eröffnet, hat eröffnet', pos: 'verb', ru: 'открывать (счёт, магазин)', example: 'Ich möchte ein Konto eröffnen.', exampleRu: 'Я хотел бы открыть счёт.', pronRu: 'эр-ЁФ-нэн' },
  { de: 'Filiale', article: 'die', plural: '-n', pos: 'noun', ru: 'отделение, филиал', example: 'Die Filiale in der Bahnhofstraße hat auch samstags geöffnet.', exampleRu: 'Отделение на Банхофштрассе открыто и по субботам.', pronRu: 'ди фи-ЛЬЯ:-лэ' },
  { de: 'Online-Banking', article: 'das', plural: '–', pos: 'noun', ru: 'интернет-банк', example: 'Meine Rechnungen bezahle ich mit Online-Banking.', exampleRu: 'Свои счета я оплачиваю через интернет-банк.' },
  { de: 'Betrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'сумма', example: 'Bitte überweisen Sie den Betrag bis zum 15. März.', exampleRu: 'Пожалуйста, переведите сумму до 15 марта.' },

  // Post
  { de: 'Porto', article: 'das', plural: '-s', pos: 'noun', ru: 'плата за пересылку, почтовый сбор', example: 'Wie hoch ist das Porto für einen Brief nach Spanien?', exampleRu: 'Сколько стоит отправка письма в Испанию?' },
  { de: 'Einschreiben', article: 'das', plural: '-', pos: 'noun', ru: 'заказное письмо', example: 'Wichtige Briefe schicke ich als Einschreiben.', exampleRu: 'Важные письма я отправляю заказными.' },
  { de: 'wiegen', forms: 'wiegt, hat gewogen', pos: 'verb', ru: 'весить; взвешивать', example: 'Das Paket wiegt drei Kilo.', exampleRu: 'Посылка весит три килограмма.' },

  // Dienstleistungen
  { de: 'Reinigung', article: 'die', plural: '-en', pos: 'noun', ru: 'химчистка; уборка', example: 'Ich bringe meinen Anzug in die Reinigung.', exampleRu: 'Я отнесу свой костюм в химчистку.' },
  { de: 'Reparatur', article: 'die', plural: '-en', pos: 'noun', ru: 'ремонт', example: 'Die Reparatur kostet ungefähr 200 Euro.', exampleRu: 'Ремонт стоит примерно 200 евро.', pronRu: 'ди рэ-па-ра-ТУ:А' },
  { de: 'Kundenservice', article: 'der', plural: '–', pos: 'noun', ru: 'служба поддержки клиентов', example: 'Ich habe beim Kundenservice angerufen, aber niemand hat geantwortet.', exampleRu: 'Я позвонил в службу поддержки, но никто не ответил.' },
  { de: 'Beratung', article: 'die', plural: '-en', pos: 'noun', ru: 'консультация', example: 'Die Beratung in der Bank ist kostenlos.', exampleRu: 'Консультация в банке бесплатная.' },
  // Mehr Ämter
  { de: 'Finanzamt', article: 'das', plural: '-¨er', pos: 'noun', ru: 'налоговая инспекция', example: 'Die Steuererklärung schicke ich online ans Finanzamt.', exampleRu: 'Налоговую декларацию я отправляю в налоговую онлайн.', pronRu: 'дас фи-НАНЦ-амт' },
  { de: 'Steuer', article: 'die', plural: '-n', pos: 'noun', ru: 'налог', example: 'Von meinem Gehalt gehen viele Steuern ab.', exampleRu: 'С моей зарплаты удерживают много налогов.', pronRu: 'ди ШТОЙ-а' },
  { de: 'Aufenthaltserlaubnis', article: 'die', plural: '-se', pos: 'noun', ru: 'вид на жительство', example: 'Meine Aufenthaltserlaubnis ist noch zwei Jahre gültig.', exampleRu: 'Мой вид на жительство действителен ещё два года.', pronRu: 'ди АУФ-энт-хальтс-эр-лауп-нис' },
  { de: 'Fundbüro', article: 'das', plural: '-s', pos: 'noun', ru: 'бюро находок', example: 'Ich habe meine Tasche im Bus vergessen. Ich frage im Fundbüro.', exampleRu: 'Я забыл сумку в автобусе. Спрошу в бюро находок.', pronRu: 'дас ФУНТ-бю-ро:' },
  { de: 'Dolmetscher', article: 'der', plural: '-', pos: 'noun', ru: 'устный переводчик (die Dolmetscherin)', example: 'Beim Termin hat mir ein Dolmetscher geholfen.', exampleRu: 'На приёме мне помог переводчик.', pronRu: 'дер ДОЛЬ-мэт-ша' },
  { de: 'Übersetzung', article: 'die', plural: '-en', pos: 'noun', ru: 'перевод (текста)', example: 'Für das Amt brauche ich eine Übersetzung von meiner Geburtsurkunde.', exampleRu: 'Для ведомства мне нужен перевод свидетельства о рождении.', pronRu: 'ди ю-ба-ЗЭ-цунг' },
  { de: 'vereinbaren', forms: 'vereinbart, hat vereinbart', pos: 'verb', ru: 'договариваться (о встрече, сроке)', example: 'Ich möchte einen Termin vereinbaren.', exampleRu: 'Я хотел бы записаться на приём.', pronRu: 'фэр-АЙН-ба:-рэн' },

  // Mehr Bank und Geld
  { de: 'Bankverbindung', article: 'die', plural: '-en', pos: 'noun', ru: 'банковские реквизиты', example: 'Bitte schreiben Sie Ihre Bankverbindung auf die Rechnung.', exampleRu: 'Пожалуйста, укажите свои банковские реквизиты на счёте.' },
  { de: 'IBAN', article: 'die', plural: '-s', pos: 'noun', ru: 'IBAN, международный номер счёта', example: 'Ihre IBAN finden Sie auf der Bankkarte.', exampleRu: 'Ваш IBAN указан на банковской карте.', pronRu: 'ди И:-бан' },
  { de: 'Dauerauftrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'постоянное поручение (автоплатёж)', example: 'Die Miete bezahle ich mit einem Dauerauftrag.', exampleRu: 'Квартплату я оплачиваю постоянным поручением.', pronRu: 'дер ДАУ-а-ауф-тра:к' },
  { de: 'Kredit', article: 'der', plural: '-e', pos: 'noun', ru: 'кредит', example: 'Für das neue Auto haben wir einen Kredit genommen.', exampleRu: 'На новую машину мы взяли кредит.', pronRu: 'дер крэ-ДИ:Т' },
  { de: 'Zinsen', article: 'die', plural: '(Plural)', pos: 'noun', ru: 'проценты (по кредиту, вкладу)', example: 'Für den Kredit bezahlen wir fünf Prozent Zinsen.', exampleRu: 'По кредиту мы платим пять процентов.' },
  { de: 'Münze', article: 'die', plural: '-n', pos: 'noun', ru: 'монета', example: 'Für den Automaten brauche ich Münzen.', exampleRu: 'Для автомата мне нужны монеты.', pronRu: 'ди МЮН-цэ' },
  { de: 'Geldschein', article: 'der', plural: '-e', pos: 'noun', ru: 'банкнота, купюра', example: 'Der Automat nimmt keine Geldscheine.', exampleRu: 'Автомат не принимает купюры.' },
  { de: 'Kleingeld', article: 'das', plural: '–', pos: 'noun', ru: 'мелочь, мелкие деньги', example: 'Haben Sie Kleingeld? Ich kann nicht wechseln.', exampleRu: 'У вас есть мелочь? Мне нечем дать сдачу.' },

  // Mehr Post und Dienstleistungen
  { de: 'Abholschein', article: 'der', plural: '-e', pos: 'noun', ru: 'извещение (для получения посылки)', example: 'Im Briefkasten war ein Abholschein für ein Paket.', exampleRu: 'В почтовом ящике было извещение о посылке.' },
  { de: 'Packstation', article: 'die', plural: '-en', pos: 'noun', ru: 'постамат (автомат для посылок)', example: 'Mein Paket liegt in der Packstation am Bahnhof.', exampleRu: 'Моя посылка лежит в постамате у вокзала.' },
  { de: 'zustellen', forms: 'stellt zu, hat zugestellt', pos: 'verb', ru: 'доставлять (почту)', example: 'Die Post stellt Pakete auch am Samstag zu.', exampleRu: 'Почта доставляет посылки и в субботу.' },
  { de: 'Schneider', article: 'der', plural: '-', pos: 'noun', ru: 'портной (die Schneiderin)', example: 'Die Hose ist zu lang, ich bringe sie zum Schneider.', exampleRu: 'Брюки слишком длинные, я отнесу их портному.', pronRu: 'дер ШНАЙ-да' },
  { de: 'Schlüsseldienst', article: 'der', plural: '-e', pos: 'noun', ru: 'служба вскрытия замков', example: 'Ich habe keinen Schlüssel dabei, ich rufe den Schlüsseldienst an.', exampleRu: 'У меня нет с собой ключа, я позвоню в службу вскрытия замков.', pronRu: 'дер ШЛЮ-сэль-ди:нст' },
];
