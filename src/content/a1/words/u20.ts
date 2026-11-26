import type { VocabItem } from '../../types';

// Word bank A1 · Unit 20 — Prüfungstraining Start Deutsch 1
export const words: VocabItem[] = [
  // Schilder
  { de: 'Notausgang', article: 'der', plural: '-¨e', pos: 'noun', ru: 'запасной выход', example: 'Der Notausgang ist hinten.', exampleRu: 'Запасной выход сзади.', pronRu: 'дер НО:Т-аус-ганг' },
  { de: 'Kopie', article: 'die', plural: '-n', pos: 'noun', ru: 'копия', example: 'Bitte bringen Sie eine Kopie mit.', exampleRu: 'Пожалуйста, принесите копию.', pronRu: 'ди ко-ПИ:' },
  { de: 'Ruhetag', article: 'der', plural: '-e', pos: 'noun', ru: 'выходной день (у магазина, кафе)', example: 'Montag ist Ruhetag.', exampleRu: 'Понедельник — выходной.', pronRu: 'дер РУ:-э-так' },
  { de: 'ziehen', forms: 'zieht, hat gezogen', pos: 'verb', ru: 'тянуть (на двери: «к себе»)', example: 'Auf der Tür steht: Ziehen.', exampleRu: 'На двери написано: «К себе».', pronRu: 'ЦИ:-эн' },
  { de: 'drücken', forms: 'drückt, hat gedrückt', pos: 'verb', ru: 'толкать, нажимать (на двери: «от себя»)', example: 'Bitte drücken Sie den Knopf.', exampleRu: 'Пожалуйста, нажмите кнопку.', pronRu: 'ДРЮ-кен' },
  { de: 'verboten', pos: 'adj', ru: 'запрещено', example: 'Hier ist Rauchen verboten.', exampleRu: 'Здесь курить запрещено.', pronRu: 'фэр-БО:-тэн' },
  { de: 'außer Betrieb', pos: 'phrase', ru: 'не работает (об автомате, лифте)', example: 'Der Automat ist außer Betrieb.', exampleRu: 'Автомат не работает.', pronRu: 'АУ-са бэ-ТРИ:П' },
  { de: 'besetzt', pos: 'adj', ru: 'занято (туалет, место, телефон)', example: 'Die Toilette ist besetzt.', exampleRu: 'Туалет занят.', pronRu: 'бэ-ЗЭЦТ' },

  // Formulare
  { de: 'Passfoto', article: 'das', plural: '-s', pos: 'noun', ru: 'фото на паспорт (на документы)', example: 'Für das Formular brauche ich ein Passfoto.', exampleRu: 'Для анкеты мне нужно фото на документы.', pronRu: 'дас ПАС-фо-то' },
  { de: 'männlich', pos: 'adj', ru: 'мужской (пол)', example: 'Kreuzen Sie an: männlich oder weiblich.', exampleRu: 'Отметьте: мужской или женский пол.', pronRu: 'МЭН-лихь' },
  { de: 'weiblich', pos: 'adj', ru: 'женский (пол)', example: 'Meine Tochter kreuzt „weiblich“ an.', exampleRu: 'Моя дочь отмечает «женский».', pronRu: 'ВАЙП-лихь' },
  { de: 'E-Mail-Adresse', article: 'die', plural: '-n', pos: 'noun', ru: 'адрес электронной почты', example: 'Wie ist Ihre E-Mail-Adresse?', exampleRu: 'Какой у вас адрес электронной почты?', pronRu: 'ди И:-мэйл-а-дрэ-сэ' },
  { de: 'Handynummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер мобильного телефона', example: 'Meine Handynummer ist neu.', exampleRu: 'У меня новый номер мобильного.', pronRu: 'ди ХЭН-ди-ну-ма' },
  { de: 'Fragebogen', article: 'der', plural: '-¨ (die Fragebögen)', pos: 'noun', ru: 'анкета, опросный лист', example: 'Bitte lesen Sie den Fragebogen.', exampleRu: 'Пожалуйста, прочитайте анкету.', pronRu: 'дер ФРА:-гэ-бо:-гэн' },
  { de: 'Kreuz', article: 'das', plural: '-e', pos: 'noun', ru: 'крестик (в анкете), крест', example: 'Machen Sie hier ein Kreuz.', exampleRu: 'Поставьте здесь крестик.', pronRu: 'дас КРОЙЦ' },

  // Prüfung, Nachrichten, Telefon
  { de: 'Frage', article: 'die', plural: '-n', pos: 'noun', ru: 'вопрос', example: 'Ich habe eine Frage.', exampleRu: 'У меня есть вопрос.', pronRu: 'ди ФРА:-гэ' },
  { de: 'Punkt', article: 'der', plural: '-e', pos: 'noun', ru: 'балл (на экзамене); точка', example: 'Die Aufgabe hat fünf Punkte.', exampleRu: 'За задание дают пять баллов.', pronRu: 'дер ПУНКТ' },
  { de: 'Zettel', article: 'der', plural: '-', pos: 'noun', ru: 'записка, листок бумаги', example: 'Ich schreibe dir einen Zettel.', exampleRu: 'Я напишу тебе записку.', pronRu: 'дер ЦЭ-тэль' },
  { de: 'Anzeige', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление (в газете, интернете)', example: 'Ich lese die Anzeigen in der Zeitung.', exampleRu: 'Я читаю объявления в газете.', pronRu: 'ди АН-цай-гэ' },
  { de: 'Ansage', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление, сообщение (по телефону, радио)', example: 'Hören Sie die Ansage genau.', exampleRu: 'Внимательно послушайте объявление.', pronRu: 'ди АН-за-гэ' },
  { de: 'Mailbox', article: 'die', plural: '-en', pos: 'noun', ru: 'голосовая почта (в мобильном)', example: 'Ich spreche auf deine Mailbox.', exampleRu: 'Я оставляю сообщение на твоей голосовой почте.', pronRu: 'ди МЭЙЛ-бокс' },
  { de: 'Auf Wiederhören!', pos: 'phrase', ru: 'До свидания! (по телефону)', example: 'Vielen Dank und auf Wiederhören!', exampleRu: 'Большое спасибо, до свидания!', pronRu: 'ауф ВИ:-да-хё-рэн' },
  { de: 'Moment, bitte!', pos: 'phrase', ru: 'Минуточку, пожалуйста!', example: 'Moment, bitte! Ich suche einen Kuli.', exampleRu: 'Минуточку! Я ищу ручку.', pronRu: 'мо-МЭНТ, БИ-тэ' },
  { de: 'Tut mir leid.', pos: 'phrase', ru: 'Мне жаль. / Извините.', example: 'Tut mir leid, das geht nicht.', exampleRu: 'Извините, так не получится.', pronRu: 'ту:т ми:р ЛАЙТ' },
  { de: 'Natürlich!', pos: 'phrase', ru: 'Конечно!', example: 'Können Sie mir helfen? – Natürlich!', exampleRu: 'Вы можете мне помочь? – Конечно!', pronRu: 'на-ТЮР-лихь' },
];
