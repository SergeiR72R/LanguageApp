import type { VocabItem } from '../../types';

// Word bank A2 · Unit 20 — Prüfungstraining A2
export const words: VocabItem[] = [
  // In der Prüfung
  { de: 'Punkt', article: 'der', plural: '-e', pos: 'noun', ru: 'балл; точка', example: 'Für jede richtige Antwort gibt es einen Punkt.', exampleRu: 'За каждый правильный ответ даётся один балл.' },
  { de: 'Übung', article: 'die', plural: '-en', pos: 'noun', ru: 'упражнение', example: 'Diese Übung ist ein bisschen schwer.', exampleRu: 'Это упражнение немного трудное.', pronRu: 'Ю-бунг' },
  { de: 'Lesetext', article: 'der', plural: '-e', pos: 'noun', ru: 'текст для чтения', example: 'Im Lesetext geht es um einen Umzug.', exampleRu: 'В тексте для чтения речь идёт о переезде.' },
  { de: 'Stichwort', article: 'das', plural: 'die Stichwörter', pos: 'noun', ru: 'ключевое слово (для заметок)', example: 'Schreiben Sie zuerst ein paar Stichwörter.', exampleRu: 'Сначала запишите несколько ключевых слов.', pronRu: 'ШТИХЬ-ворт' },
  { de: 'Kreuz', article: 'das', plural: '-e', pos: 'noun', ru: 'крестик, крест', example: 'Machen Sie ein Kreuz bei der richtigen Lösung.', exampleRu: 'Поставьте крестик у правильного ответа.', pronRu: 'дас КРОЙЦ' },
  { de: 'Kursleiterin', article: 'die', plural: '-nen', pos: 'noun', ru: 'преподавательница курса', example: 'Unsere Kursleiterin heißt Frau Schubert.', exampleRu: 'Нашу преподавательницу зовут фрау Шуберт.' },
  { de: 'Teilnehmerin', article: 'die', plural: '-nen', pos: 'noun', ru: 'участница', example: 'Jede Teilnehmerin bekommt am Ende ein Zertifikat.', exampleRu: 'Каждая участница в конце получает сертификат.' },
  { de: 'Fehler', article: 'der', plural: '-', pos: 'noun', ru: 'ошибка', example: 'Macht nichts, jeder macht Fehler.', exampleRu: 'Ничего страшного, все делают ошибки.' },
  { de: 'Pause', article: 'die', plural: '-n', pos: 'noun', ru: 'перерыв', example: 'Nach dem Hören gibt es eine Pause von zwanzig Minuten.', exampleRu: 'После аудирования будет перерыв двадцать минут.' },
  { de: 'Ausweis', article: 'der', plural: '-e', pos: 'noun', ru: 'удостоверение личности', example: 'Bringen Sie zur Prüfung Ihren Ausweis mit.', exampleRu: 'Возьмите с собой на экзамен удостоверение личности.', pronRu: 'АУС-вайс' },

  // Briefe und Nachrichten
  { de: 'Anrede', article: 'die', plural: '-n', pos: 'noun', ru: 'обращение (в письме)', example: 'Vergessen Sie die Anrede nicht, zum Beispiel „Liebe Anna“.', exampleRu: 'Не забудьте обращение, например «Дорогая Анна».' },
  { de: 'Gruß', article: 'der', plural: '-¨e', pos: 'noun', ru: 'привет; приветствие в конце письма', example: 'Am Ende der E-Mail steht ein Gruß.', exampleRu: 'В конце письма стоит прощальное приветствие.' },
  { de: 'Bitte', article: 'die', plural: '-n', pos: 'noun', ru: 'просьба', example: 'Ich habe eine Bitte: Können Sie mir helfen?', exampleRu: 'У меня просьба: не могли бы вы мне помочь?' },
  { de: 'Zusage', article: 'die', plural: '-n', pos: 'noun', ru: 'согласие (прийти), положительный ответ', example: 'Danke für deine Zusage! Ich freue mich auf dich.', exampleRu: 'Спасибо, что согласился прийти! Жду тебя.' },
  { de: 'Liebe Grüße', pos: 'phrase', ru: 'С любовью / С приветом (в конце личного письма)', example: 'Liebe Grüße und bis bald, deine Anna', exampleRu: 'С приветом и до скорого, твоя Анна' },
  { de: 'Sehr geehrte Frau …', pos: 'phrase', ru: 'Уважаемая госпожа … (официальное обращение)', example: 'Sehr geehrte Frau Schubert, leider kann ich morgen nicht kommen.', exampleRu: 'Уважаемая фрау Шуберт, к сожалению, я не смогу завтра прийти.' },
  { de: 'Ich freue mich auf Ihre Antwort.', pos: 'phrase', ru: 'Жду вашего ответа. (в официальном письме)', example: 'Vielen Dank! Ich freue mich auf Ihre Antwort.', exampleRu: 'Большое спасибо! Жду вашего ответа.' },
  { de: 'Ich habe eine Frage.', pos: 'phrase', ru: 'У меня вопрос.', example: 'Entschuldigung, ich habe eine Frage zur Prüfung.', exampleRu: 'Извините, у меня вопрос об экзамене.' },

  // Texte im Alltag (Lesen und Hören)
  { de: 'Ansage', article: 'die', plural: '-n', pos: 'noun', ru: 'объявление (по радио, по громкоговорителю)', example: 'Hören Sie die Ansage am Bahnhof genau.', exampleRu: 'Внимательно слушайте объявление на вокзале.' },
  { de: 'Kleinanzeige', article: 'die', plural: '-n', pos: 'noun', ru: 'частное объявление', example: 'Ich habe mein altes Fahrrad über eine Kleinanzeige verkauft.', exampleRu: 'Я продал свой старый велосипед через объявление.', pronRu: 'КЛАЙН-ан-цай-гэ' },
  { de: 'Wegweiser', article: 'der', plural: '-', pos: 'noun', ru: 'указатель (схема этажей, указатель дороги)', example: 'Der Wegweiser im Kaufhaus zeigt alle Abteilungen.', exampleRu: 'Указатель в универмаге показывает все отделы.', pronRu: 'ВЕ:К-вай-зэр' },
  { de: 'Etage', article: 'die', plural: '-n', pos: 'noun', ru: 'этаж', example: 'Die Toiletten sind in der ersten Etage.', exampleRu: 'Туалеты на втором этаже (в Германии этажи считают после Erdgeschoss).', pronRu: 'э-ТА:-жэ' },
  { de: 'Rolltreppe', article: 'die', plural: '-n', pos: 'noun', ru: 'эскалатор', example: 'Nehmen Sie die Rolltreppe in den ersten Stock.', exampleRu: 'Поднимитесь на эскалаторе на второй этаж.' },

  // Aufgaben lösen
  { de: 'auswählen', forms: 'wählt aus, hat ausgewählt', pos: 'verb', ru: 'выбирать', example: 'Wählen Sie eine Aufgabe aus.', exampleRu: 'Выберите одно задание.' },
  { de: 'notieren', forms: 'notiert, hat notiert', pos: 'verb', ru: 'записывать, отмечать', example: 'Notieren Sie die wichtigen Informationen.', exampleRu: 'Запишите важную информацию.' },
  { de: 'lösen', forms: 'löst, hat gelöst', pos: 'verb', ru: 'решать (задачу)', example: 'Diese Aufgabe kann ich nicht lösen.', exampleRu: 'Эту задачу я не могу решить.' },
  { de: 'abgeben', forms: 'gibt ab, hat abgegeben', pos: 'verb', ru: 'сдавать (работу, тест)', example: 'Geben Sie am Ende alle Blätter ab.', exampleRu: 'В конце сдайте все листы.' },
  { de: 'nachsehen', forms: 'sieht nach, hat nachgesehen', pos: 'verb', ru: 'посмотреть, проверить (в словаре)', example: 'Das Wort kenne ich nicht, ich sehe im Wörterbuch nach.', exampleRu: 'Это слово я не знаю, посмотрю в словаре.' },

  // Etwas gemeinsam planen
  { de: 'besorgen', forms: 'besorgt, hat besorgt', pos: 'verb', ru: 'достать, купить (что-то нужное)', example: 'Ich besorge die Getränke für das Fest.', exampleRu: 'Я куплю напитки для праздника.' },
  { de: 'organisieren', forms: 'organisiert, hat organisiert', pos: 'verb', ru: 'организовывать', example: 'Wer organisiert die Party?', exampleRu: 'Кто организует вечеринку?' },
  { de: 'mitbringen', forms: 'bringt mit, hat mitgebracht', pos: 'verb', ru: 'приносить с собой', example: 'Was soll ich zur Party mitbringen?', exampleRu: 'Что мне принести на вечеринку?' },
  { de: 'Bescheid geben', forms: 'gibt Bescheid, hat Bescheid gegeben', pos: 'phrase', ru: 'сообщить, дать знать', example: 'Gib mir bitte bis Freitag Bescheid.', exampleRu: 'Дай мне, пожалуйста, знать до пятницы.' },
  { de: 'Wie wäre es mit …?', pos: 'phrase', ru: 'Как насчёт …?', example: 'Wie wäre es mit Samstag um zehn?', exampleRu: 'Как насчёт субботы в десять?' },
  { de: 'Hast du am … Zeit?', pos: 'phrase', ru: 'У тебя есть время в …?', example: 'Hast du am Freitag Zeit?', exampleRu: 'У тебя есть время в пятницу?' },
  { de: 'Wollen wir …?', pos: 'phrase', ru: 'Давай …? (предложение)', example: 'Wollen wir zusammen für die Prüfung lernen?', exampleRu: 'Давай вместе готовиться к экзамену?' },
  { de: 'Lass uns …', pos: 'phrase', ru: 'Давай … (сделаем)', example: 'Lass uns zusammen einen Kuchen backen!', exampleRu: 'Давай вместе испечём пирог!' },
  { de: 'Das passt mir gut.', pos: 'phrase', ru: 'Мне это подходит.', example: 'Um drei Uhr? Das passt mir gut.', exampleRu: 'В три часа? Мне это подходит.' },
  { de: 'Das geht leider nicht.', pos: 'phrase', ru: 'К сожалению, не получится.', example: 'Am Montag? Das geht leider nicht, da arbeite ich.', exampleRu: 'В понедельник? К сожалению, не получится, я работаю.' },
  { de: 'Gute Idee!', pos: 'phrase', ru: 'Хорошая идея!', example: 'Wir kochen zusammen? Gute Idee!', exampleRu: 'Приготовим вместе? Хорошая идея!' },
  { de: 'Was meinst du?', pos: 'phrase', ru: 'Как ты думаешь?', example: 'Wir kaufen Blumen für die Lehrerin. Was meinst du?', exampleRu: 'Купим цветы учительнице. Как ты думаешь?' },
  { de: 'Ich bin dafür.', pos: 'phrase', ru: 'Я за.', example: 'Ein Picknick im Park? Ich bin dafür.', exampleRu: 'Пикник в парке? Я за.' },
  { de: 'Wer bringt was mit?', pos: 'phrase', ru: 'Кто что принесёт?', example: 'Wir machen ein Fest. Wer bringt was mit?', exampleRu: 'Мы устраиваем праздник. Кто что принесёт?' },

  // Wörter für die Textstruktur
  { de: 'zuerst', pos: 'adv', ru: 'сначала', example: 'Zuerst lesen Sie die Aufgaben, dann den Text.', exampleRu: 'Сначала прочитайте задания, потом текст.', pronRu: 'цу-ЭРСТ' },
  { de: 'danach', pos: 'adv', ru: 'после этого, потом', example: 'Danach haben wir eine kurze Pause.', exampleRu: 'После этого у нас короткий перерыв.' },
  { de: 'zum Schluss', pos: 'phrase', ru: 'в конце, напоследок', example: 'Zum Schluss schreiben Sie Ihren Namen.', exampleRu: 'В конце напишите своё имя.' },
  { de: 'also', pos: 'adv', ru: 'итак, значит, так что', example: 'Ich habe keine Zeit, also komme ich nicht.', exampleRu: 'У меня нет времени, так что я не приду.' },
  { de: 'entweder … oder', pos: 'conj', ru: 'или … или', example: 'Wir treffen uns entweder am Montag oder am Dienstag.', exampleRu: 'Мы встретимся или в понедельник, или во вторник.' },
  { de: 'nicht nur … sondern auch', pos: 'conj', ru: 'не только …, но и', example: 'Ich lerne nicht nur im Kurs, sondern auch zu Hause.', exampleRu: 'Я учусь не только на курсе, но и дома.' },
  { de: 'zum Beispiel', pos: 'phrase', ru: 'например', example: 'Ich esse gern Obst, zum Beispiel Äpfel.', exampleRu: 'Я люблю фрукты, например яблоки.' },

  // Im Gespräch
  { de: 'Wie bitte?', pos: 'phrase', ru: 'Простите, что? (переспросить)', example: 'Wie bitte? Ich habe Sie nicht verstanden.', exampleRu: 'Простите, что? Я вас не понял.' },
  { de: 'Können Sie das bitte wiederholen?', pos: 'phrase', ru: 'Повторите, пожалуйста.', example: 'Entschuldigung, können Sie das bitte wiederholen?', exampleRu: 'Извините, не могли бы вы это повторить?' },
  { de: 'Wie sagt man … auf Deutsch?', pos: 'phrase', ru: 'Как сказать … по-немецки?', example: 'Entschuldigung, wie sagt man das auf Deutsch?', exampleRu: 'Извините, как это сказать по-немецки?' },
  { de: 'Ich bin nicht sicher.', pos: 'phrase', ru: 'Я не уверен.', example: 'Ist die Antwort b? Ich bin nicht sicher.', exampleRu: 'Ответ b? Я не уверен.' },
  { de: 'Ich drücke dir die Daumen.', pos: 'phrase', ru: 'Держу за тебя кулачки. (желаю удачи)', example: 'Morgen ist deine Prüfung? Ich drücke dir die Daumen!', exampleRu: 'Завтра у тебя экзамен? Держу за тебя кулачки!' },
];
