import type { VocabItem } from '../../types';

// Word bank A2 · Unit 18 — Ämter und Dienstleistungen
export const words: VocabItem[] = [
  // Ämter
  { de: 'Rathaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'ратуша, городская администрация', example: 'Das Bürgeramt ist im Rathaus, im ersten Stock.', exampleRu: 'Бюро обслуживания граждан находится в ратуше, на втором этаже.' },
  { de: 'Behörde', article: 'die', plural: '-n', pos: 'noun', ru: 'орган власти, ведомство', example: 'Für dieses Problem ist eine andere Behörde zuständig.', exampleRu: 'Этим вопросом занимается другое ведомство.', pronRu: 'ди бэ-ХЁ:А-дэ' },
  { de: 'Ausländerbehörde', article: 'die', plural: '-n', pos: 'noun', ru: 'ведомство по делам иностранцев', example: 'Mein Visum muss ich bei der Ausländerbehörde verlängern.', exampleRu: 'Визу мне нужно продлить в ведомстве по делам иностранцев.', pronRu: 'ди АУС-лэн-да-бэ-хё:а-дэ' },
  { de: 'Sprechzeiten', article: 'die', plural: '(nur Plural)', pos: 'noun', ru: 'часы приёма', example: 'Die Sprechzeiten stehen an der Tür.', exampleRu: 'Часы приёма написаны на двери.' },
  { de: 'zuständig', forms: 'für + Akk', pos: 'adj', ru: 'ответственный (за что-л.), компетентный', example: 'Wer ist hier für Ausweise zuständig?', exampleRu: 'Кто здесь занимается удостоверениями личности?', pronRu: 'ЦУ:-штэн-дихь' },
  { de: 'eine Nummer ziehen', forms: 'zieht, hat gezogen', pos: 'phrase', ru: 'взять номерок (талон очереди)', example: 'Ziehen Sie bitte zuerst eine Nummer am Automaten.', exampleRu: 'Сначала возьмите, пожалуйста, номерок в автомате.' },
  { de: 'Schlange stehen', forms: 'steht Schlange, hat Schlange gestanden', pos: 'phrase', ru: 'стоять в очереди', example: 'Auf der Post musste ich eine halbe Stunde Schlange stehen.', exampleRu: 'На почте мне пришлось полчаса простоять в очереди.' },

  // Dokumente
  { de: 'Passfoto', article: 'das', plural: '-s', pos: 'noun', ru: 'фото на паспорт', example: 'Für den neuen Ausweis brauche ich ein Passfoto.', exampleRu: 'Для нового удостоверения мне нужно фото на паспорт.' },
  { de: 'Kopie', article: 'die', plural: '-n', pos: 'noun', ru: 'копия', example: 'Bringen Sie bitte eine Kopie von Ihrem Mietvertrag mit.', exampleRu: 'Принесите, пожалуйста, копию вашего договора аренды.', pronRu: 'ди ко-ПИ:' },
  { de: 'Dokument', article: 'das', plural: '-e', pos: 'noun', ru: 'документ', example: 'Alle Dokumente liegen in diesem Ordner.', exampleRu: 'Все документы лежат в этой папке.' },
  { de: 'Bestätigung', article: 'die', plural: '-en', pos: 'noun', ru: 'подтверждение, справка', example: 'Nach der Anmeldung bekommen Sie eine Bestätigung.', exampleRu: 'После регистрации вы получите подтверждение.', pronRu: 'ди бэ-ШТЭ:-ти-гунг' },
  { de: 'Geburtsurkunde', article: 'die', plural: '-n', pos: 'noun', ru: 'свидетельство о рождении', example: 'Für die Hochzeit brauchen wir unsere Geburtsurkunden.', exampleRu: 'Для свадьбы нам нужны наши свидетельства о рождении.', pronRu: 'ди гэ-БУРТС-у:а-кун-дэ' },
  { de: 'Visum', article: 'das', plural: 'die Visa', pos: 'noun', ru: 'виза', example: 'Für diese Reise brauchen Sie kein Visum.', exampleRu: 'Для этой поездки вам не нужна виза.', pronRu: 'дас ВИ:-зум' },
  { de: 'Wohnsitz', article: 'der', plural: '-e', pos: 'noun', ru: 'место жительства', example: 'Mein Wohnsitz ist seit Mai in Leipzig.', exampleRu: 'С мая моё место жительства — Лейпциг.' },
  { de: 'abmelden', forms: 'meldet ab, hat abgemeldet', pos: 'verb', ru: 'выписаться, снять с учёта; отписаться', example: 'Vor dem Umzug ins Ausland muss man sich abmelden.', exampleRu: 'Перед переездом за границу нужно выписаться.' },
  { de: 'verlängern', forms: 'verlängert, hat verlängert', pos: 'verb', ru: 'продлевать', example: 'Wir möchten den Vertrag um ein Jahr verlängern.', exampleRu: 'Мы хотели бы продлить договор на год.' },
  { de: 'abgeben', forms: 'gibt ab, hat abgegeben', pos: 'verb', ru: 'сдавать, отдавать', example: 'Das Formular können Sie am Schalter 2 abgeben.', exampleRu: 'Бланк можно сдать в окошке 2.' },
  { de: 'erledigen', forms: 'erledigt, hat erledigt', pos: 'verb', ru: 'сделать, уладить (дела)', example: 'Heute muss ich noch viel erledigen: Bank, Post und Amt.', exampleRu: 'Сегодня мне ещё многое надо сделать: банк, почта и ведомство.', pronRu: 'эр-ЛЭ:-ди-гэн' },
  { de: 'ungültig', pos: 'adj', ru: 'недействительный', example: 'Ohne Unterschrift ist das Formular ungültig.', exampleRu: 'Без подписи бланк недействителен.' },
  { de: 'dringend', pos: 'adj', ru: 'срочный; срочно', example: 'Ich brauche dringend einen Termin.', exampleRu: 'Мне срочно нужна запись на приём.' },
  { de: 'Stempel', article: 'der', plural: '-', pos: 'noun', ru: 'печать, штамп', example: 'Auf dem Dokument fehlt noch ein Stempel.', exampleRu: 'На документе ещё не хватает печати.' },

  // Bank
  { de: 'Kontonummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер счёта', example: 'Schreiben Sie bitte Ihre Kontonummer auf das Formular.', exampleRu: 'Напишите, пожалуйста, номер вашего счёта на бланке.' },
  { de: 'Bankkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'банковская карта', example: 'Mit der Bankkarte kann man am Automaten Geld holen.', exampleRu: 'С банковской картой можно снять деньги в банкомате.' },
  { de: 'Kreditkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'кредитная карта', example: 'Kann ich hier mit Kreditkarte bezahlen?', exampleRu: 'Можно здесь заплатить кредитной картой?' },
  { de: 'Kontoauszug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'выписка со счёта', example: 'Auf dem Kontoauszug sehe ich alle Zahlungen.', exampleRu: 'В выписке со счёта я вижу все платежи.', pronRu: 'дер КОН-то-аус-цу:к' },
  { de: 'Überweisung', article: 'die', plural: '-en', pos: 'noun', ru: 'денежный перевод', example: 'Die Überweisung dauert ein bis zwei Tage.', exampleRu: 'Перевод идёт один-два дня.', pronRu: 'ди ю-ба-ВАЙ-зунг' },
  { de: 'Bargeld', article: 'das', plural: '–', pos: 'noun', ru: 'наличные деньги', example: 'Ich habe kein Bargeld dabei, kann ich mit Karte zahlen?', exampleRu: 'У меня нет с собой наличных, можно заплатить картой?' },
  { de: 'abheben', forms: 'hebt ab, hat abgehoben', pos: 'verb', ru: 'снимать (деньги со счёта)', example: 'Ich muss noch Geld am Automaten abheben.', exampleRu: 'Мне ещё надо снять деньги в банкомате.' },
  { de: 'eröffnen', forms: 'eröffnet, hat eröffnet', pos: 'verb', ru: 'открывать (счёт, магазин)', example: 'Ich möchte ein Konto eröffnen.', exampleRu: 'Я хотел бы открыть счёт.', pronRu: 'эр-ЁФ-нэн' },
  { de: 'Filiale', article: 'die', plural: '-n', pos: 'noun', ru: 'отделение, филиал', example: 'Die Filiale in der Bahnhofstraße hat auch samstags geöffnet.', exampleRu: 'Отделение на Банхофштрассе открыто и по субботам.', pronRu: 'ди фи-ЛЬЯ:-лэ' },
  { de: 'Online-Banking', article: 'das', plural: '–', pos: 'noun', ru: 'интернет-банк', example: 'Meine Rechnungen bezahle ich mit Online-Banking.', exampleRu: 'Свои счета я оплачиваю через интернет-банк.' },
  { de: 'Betrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'сумма', example: 'Bitte überweisen Sie den Betrag bis zum 15. März.', exampleRu: 'Пожалуйста, переведите сумму до 15 марта.' },

  // Post
  { de: 'Päckchen', article: 'das', plural: '-', pos: 'noun', ru: 'бандероль, маленькая посылка', example: 'Ein Päckchen ist billiger als ein Paket.', exampleRu: 'Бандероль дешевле, чем посылка.', pronRu: 'дас ПЭК-хьен' },
  { de: 'Briefkasten', article: 'der', plural: '-¨', pos: 'noun', ru: 'почтовый ящик', example: 'Den Brief werfe ich gleich in den Briefkasten.', exampleRu: 'Письмо я сейчас брошу в почтовый ящик.' },
  { de: 'Porto', article: 'das', plural: '-s', pos: 'noun', ru: 'плата за пересылку, почтовый сбор', example: 'Wie hoch ist das Porto für einen Brief nach Spanien?', exampleRu: 'Сколько стоит отправка письма в Испанию?' },
  { de: 'Absender', article: 'der', plural: '-', pos: 'noun', ru: 'отправитель; обратный адрес', example: 'Auf dem Paket steht kein Absender.', exampleRu: 'На посылке нет обратного адреса.' },
  { de: 'Empfänger', article: 'der', plural: '-', pos: 'noun', ru: 'получатель', example: 'Schreiben Sie den Namen vom Empfänger bitte deutlich.', exampleRu: 'Напишите, пожалуйста, имя получателя разборчиво.', pronRu: 'дер эм-ПФЭН-га' },
  { de: 'Postleitzahl', article: 'die', plural: '-en', pos: 'noun', ru: 'почтовый индекс', example: 'Die Postleitzahl hat in Deutschland fünf Zahlen.', exampleRu: 'Почтовый индекс в Германии состоит из пяти цифр.' },
  { de: 'Einschreiben', article: 'das', plural: '-', pos: 'noun', ru: 'заказное письмо', example: 'Wichtige Briefe schicke ich als Einschreiben.', exampleRu: 'Важные письма я отправляю заказными.' },
  { de: 'Sendung', article: 'die', plural: '-en', pos: 'noun', ru: 'отправление (почтовое); передача (по ТВ)', example: 'Ihre Sendung kommt morgen an.', exampleRu: 'Ваше отправление придёт завтра.' },
  { de: 'wiegen', forms: 'wiegt, hat gewogen', pos: 'verb', ru: 'весить; взвешивать', example: 'Das Paket wiegt drei Kilo.', exampleRu: 'Посылка весит три килограмма.' },
  { de: 'Postfiliale', article: 'die', plural: '-n', pos: 'noun', ru: 'почтовое отделение', example: 'Die nächste Postfiliale ist im Supermarkt.', exampleRu: 'Ближайшее почтовое отделение — в супермаркете.' },

  // Dienstleistungen
  { de: 'Reinigung', article: 'die', plural: '-en', pos: 'noun', ru: 'химчистка; уборка', example: 'Ich bringe meinen Anzug in die Reinigung.', exampleRu: 'Я отнесу свой костюм в химчистку.' },
  { de: 'Werkstatt', article: 'die', plural: '-¨en', pos: 'noun', ru: 'мастерская, автосервис', example: 'Mein Auto ist seit Montag in der Werkstatt.', exampleRu: 'Моя машина с понедельника в автосервисе.' },
  { de: 'Reparatur', article: 'die', plural: '-en', pos: 'noun', ru: 'ремонт', example: 'Die Reparatur kostet ungefähr 200 Euro.', exampleRu: 'Ремонт стоит примерно 200 евро.', pronRu: 'ди рэ-па-ра-ТУ:А' },
  { de: 'Handwerker', article: 'der', plural: '-', pos: 'noun', ru: 'ремесленник, мастер (сантехник, электрик и т. п.)', example: 'Morgen kommt ein Handwerker und repariert die Heizung.', exampleRu: 'Завтра придёт мастер и починит отопление.' },
  { de: 'Kundenservice', article: 'der', plural: '–', pos: 'noun', ru: 'служба поддержки клиентов', example: 'Ich habe beim Kundenservice angerufen, aber niemand hat geantwortet.', exampleRu: 'Я позвонил в службу поддержки, но никто не ответил.' },
  { de: 'Quittung', article: 'die', plural: '-en', pos: 'noun', ru: 'квитанция, чек', example: 'Kann ich bitte eine Quittung bekommen?', exampleRu: 'Можно мне, пожалуйста, квитанцию?' },
  { de: 'Beratung', article: 'die', plural: '-en', pos: 'noun', ru: 'консультация', example: 'Die Beratung in der Bank ist kostenlos.', exampleRu: 'Консультация в банке бесплатная.' },
  { de: 'Vertrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'договор', example: 'Lesen Sie den Vertrag genau, bevor Sie unterschreiben.', exampleRu: 'Внимательно прочитайте договор, прежде чем подписывать.' },
  { de: 'kündigen', forms: 'kündigt, hat gekündigt', pos: 'verb', ru: 'расторгать (договор); увольнять(ся)', example: 'Ich habe meinen Handyvertrag gekündigt.', exampleRu: 'Я расторг договор на мобильную связь.' },
  { de: 'ausdrucken', forms: 'druckt aus, hat ausgedruckt', pos: 'verb', ru: 'распечатывать', example: 'Kannst du mir das Formular bitte ausdrucken?', exampleRu: 'Можешь мне, пожалуйста, распечатать бланк?' },
];
