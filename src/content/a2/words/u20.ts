import type { VocabItem } from '../../types';

// Word bank A2 · Unit 20 — Prüfungstraining A2
export const words: VocabItem[] = [
  // In der Prüfung
  { de: 'Lesetext', article: 'der', plural: '-e', pos: 'noun', ru: 'текст для чтения', example: 'Im Lesetext geht es um einen Umzug.', exampleRu: 'В тексте для чтения речь идёт о переезде.' },
  { de: 'Stichwort', article: 'das', plural: 'die Stichwörter', pos: 'noun', ru: 'ключевое слово (для заметок)', example: 'Schreiben Sie zuerst ein paar Stichwörter.', exampleRu: 'Сначала запишите несколько ключевых слов.', pronRu: 'ШТИХЬ-ворт' },
  { de: 'Kursleiterin', article: 'die', plural: '-nen', pos: 'noun', ru: 'преподавательница курса', example: 'Unsere Kursleiterin heißt Frau Schubert.', exampleRu: 'Нашу преподавательницу зовут фрау Шуберт.' },
  { de: 'Fehler', article: 'der', plural: '-', pos: 'noun', ru: 'ошибка', example: 'Macht nichts, jeder macht Fehler.', exampleRu: 'Ничего страшного, все делают ошибки.' },
  { de: 'Ausweis', article: 'der', plural: '-e', pos: 'noun', ru: 'удостоверение личности', example: 'Bringen Sie zur Prüfung Ihren Ausweis mit.', exampleRu: 'Возьмите с собой на экзамен удостоверение личности.', pronRu: 'АУС-вайс' },

  // Briefe und Nachrichten
  { de: 'Anrede', article: 'die', plural: '-n', pos: 'noun', ru: 'обращение (в письме)', example: 'Vergessen Sie die Anrede nicht, zum Beispiel „Liebe Anna“.', exampleRu: 'Не забудьте обращение, например «Дорогая Анна».' },
  { de: 'Gruß', article: 'der', plural: '-¨e', pos: 'noun', ru: 'привет; приветствие в конце письма', example: 'Am Ende der E-Mail steht ein Gruß.', exampleRu: 'В конце письма стоит прощальное приветствие.' },
  { de: 'Liebe Grüße', pos: 'phrase', ru: 'С любовью / С приветом (в конце личного письма)', example: 'Liebe Grüße und bis bald, deine Anna', exampleRu: 'С приветом и до скорого, твоя Анна' },
  { de: 'Sehr geehrte Frau …', pos: 'phrase', ru: 'Уважаемая госпожа … (официальное обращение)', example: 'Sehr geehrte Frau Schubert, leider kann ich morgen nicht kommen.', exampleRu: 'Уважаемая фрау Шуберт, к сожалению, я не смогу завтра прийти.' },
  { de: 'Ich freue mich auf Ihre Antwort.', pos: 'phrase', ru: 'Жду вашего ответа. (в официальном письме)', example: 'Vielen Dank! Ich freue mich auf Ihre Antwort.', exampleRu: 'Большое спасибо! Жду вашего ответа.' },
  { de: 'Ich habe eine Frage.', pos: 'phrase', ru: 'У меня вопрос.', example: 'Entschuldigung, ich habe eine Frage zur Prüfung.', exampleRu: 'Извините, у меня вопрос об экзамене.' },

  // Texte im Alltag (Lesen und Hören)
  { de: 'Kleinanzeige', article: 'die', plural: '-n', pos: 'noun', ru: 'частное объявление', example: 'Ich habe mein altes Fahrrad über eine Kleinanzeige verkauft.', exampleRu: 'Я продал свой старый велосипед через объявление.', pronRu: 'КЛАЙН-ан-цай-гэ' },
  { de: 'Wegweiser', article: 'der', plural: '-', pos: 'noun', ru: 'указатель (схема этажей, указатель дороги)', example: 'Der Wegweiser im Kaufhaus zeigt alle Abteilungen.', exampleRu: 'Указатель в универмаге показывает все отделы.', pronRu: 'ВЕ:К-вай-зэр' },
  { de: 'Etage', article: 'die', plural: '-n', pos: 'noun', ru: 'этаж', example: 'Die Toiletten sind in der ersten Etage.', exampleRu: 'Туалеты на втором этаже (в Германии этажи считают после Erdgeschoss).', pronRu: 'э-ТА:-жэ' },

  // Aufgaben lösen
  { de: 'auswählen', forms: 'wählt aus, hat ausgewählt', pos: 'verb', ru: 'выбирать', example: 'Wählen Sie eine Aufgabe aus.', exampleRu: 'Выберите одно задание.' },
  { de: 'notieren', forms: 'notiert, hat notiert', pos: 'verb', ru: 'записывать, отмечать', example: 'Notieren Sie die wichtigen Informationen.', exampleRu: 'Запишите важную информацию.' },
  { de: 'lösen', forms: 'löst, hat gelöst', pos: 'verb', ru: 'решать (задачу)', example: 'Diese Aufgabe kann ich nicht lösen.', exampleRu: 'Эту задачу я не могу решить.' },
  { de: 'nachsehen', forms: 'sieht nach, hat nachgesehen', pos: 'verb', ru: 'посмотреть, проверить (в словаре)', example: 'Das Wort kenne ich nicht, ich sehe im Wörterbuch nach.', exampleRu: 'Это слово я не знаю, посмотрю в словаре.' },

  // Etwas gemeinsam planen
  { de: 'besorgen', forms: 'besorgt, hat besorgt', pos: 'verb', ru: 'достать, купить (что-то нужное)', example: 'Ich besorge die Getränke für das Fest.', exampleRu: 'Я куплю напитки для праздника.' },
  { de: 'organisieren', forms: 'organisiert, hat organisiert', pos: 'verb', ru: 'организовывать', example: 'Wer organisiert die Party?', exampleRu: 'Кто организует вечеринку?' },
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
  { de: 'zum Schluss', pos: 'phrase', ru: 'в конце, напоследок', example: 'Zum Schluss schreiben Sie Ihren Namen.', exampleRu: 'В конце напишите своё имя.' },
  { de: 'also', pos: 'adv', ru: 'итак, значит, так что', example: 'Ich habe keine Zeit, also komme ich nicht.', exampleRu: 'У меня нет времени, так что я не приду.' },
  { de: 'entweder … oder', pos: 'conj', ru: 'или … или', example: 'Wir treffen uns entweder am Montag oder am Dienstag.', exampleRu: 'Мы встретимся или в понедельник, или во вторник.' },
  { de: 'nicht nur … sondern auch', pos: 'conj', ru: 'не только …, но и', example: 'Ich lerne nicht nur im Kurs, sondern auch zu Hause.', exampleRu: 'Я учусь не только на курсе, но и дома.' },
  { de: 'zum Beispiel', pos: 'phrase', ru: 'например', example: 'Ich esse gern Obst, zum Beispiel Äpfel.', exampleRu: 'Я люблю фрукты, например яблоки.' },

  // Im Gespräch
  { de: 'Wie sagt man … auf Deutsch?', pos: 'phrase', ru: 'Как сказать … по-немецки?', example: 'Entschuldigung, wie sagt man das auf Deutsch?', exampleRu: 'Извините, как это сказать по-немецки?' },
  { de: 'Ich bin nicht sicher.', pos: 'phrase', ru: 'Я не уверен.', example: 'Ist die Antwort b? Ich bin nicht sicher.', exampleRu: 'Ответ b? Я не уверен.' },
  { de: 'Ich drücke dir die Daumen.', pos: 'phrase', ru: 'Держу за тебя кулачки. (желаю удачи)', example: 'Morgen ist deine Prüfung? Ich drücke dir die Daumen!', exampleRu: 'Завтра у тебя экзамен? Держу за тебя кулачки!' },

  // Noch mehr für die Prüfung
  { de: 'Antwortmöglichkeit', article: 'die', plural: '-en', pos: 'noun', ru: 'вариант ответа', example: 'Es gibt drei Antwortmöglichkeiten: a, b oder c.', exampleRu: 'Есть три варианта ответа: a, b или c.' },
  { de: 'Prüfungspartnerin', article: 'die', plural: '-nen', pos: 'noun', ru: 'партнёрша на устном экзамене', example: 'Meine Prüfungspartnerin war sehr nett.', exampleRu: 'Моя партнёрша на экзамене была очень милой.' },
  { de: 'Notizzettel', article: 'der', plural: '-', pos: 'noun', ru: 'листок для заметок', example: 'Auf dem Notizzettel stehen meine Stichwörter.', exampleRu: 'На листке для заметок записаны мои ключевые слова.', pronRu: 'но-ТИ:Ц-цэ-тэль' },
  { de: 'Lernkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'карточка для заучивания слов', example: 'Mit Lernkarten lerne ich jeden Tag zehn neue Wörter.', exampleRu: 'С помощью карточек я каждый день учу десять новых слов.' },
  { de: 'Vokabel', article: 'die', plural: '-n', pos: 'noun', ru: 'слово (для заучивания)', example: 'Vor der Prüfung wiederhole ich alle Vokabeln.', exampleRu: 'Перед экзаменом я повторяю все слова.', pronRu: 'во-КА:-бэль' },
  { de: 'mitschreiben', forms: 'schreibt mit, hat mitgeschrieben', pos: 'verb', ru: 'записывать (во время слушания)', example: 'Beim Hören können Sie Zahlen mitschreiben.', exampleRu: 'Во время аудирования можно записывать числа.' },
  { de: 'reagieren', forms: 'reagiert, hat reagiert; auf + Akk', pos: 'verb', ru: 'реагировать', example: 'Reagieren Sie auf die Vorschläge Ihres Partners.', exampleRu: 'Реагируйте на предложения своего партнёра.' },
  { de: 'Das stimmt.', pos: 'phrase', ru: 'Это верно. Точно.', example: 'Der Kurs ist sehr gut. – Das stimmt.', exampleRu: 'Курс очень хороший. — Это верно.' },
  { de: 'Das finde ich auch.', pos: 'phrase', ru: 'Я тоже так считаю.', example: 'Ein Picknick ist schöner als ein Restaurant. – Das finde ich auch.', exampleRu: 'Пикник лучше, чем ресторан. — Я тоже так считаю.' },
  { de: 'Ich bin dagegen.', pos: 'phrase', ru: 'Я против.', example: 'Wir feiern im Park? Ich bin dagegen, es wird regnen.', exampleRu: 'Отпразднуем в парке? Я против, будет дождь.' },
  { de: 'Langsamer, bitte.', pos: 'phrase', ru: 'Помедленнее, пожалуйста.', example: 'Entschuldigung, langsamer, bitte. Ich lerne noch Deutsch.', exampleRu: 'Извините, помедленнее, пожалуйста. Я ещё учу немецкий.' },
  { de: 'Was bedeutet …?', pos: 'phrase', ru: 'Что значит …?', example: 'Was bedeutet das Wort „ausverkauft“?', exampleRu: 'Что значит слово «ausverkauft»?' },
  { de: 'Ich weiß es nicht.', pos: 'phrase', ru: 'Я этого не знаю.', example: 'Wann beginnt die Prüfung? – Ich weiß es nicht.', exampleRu: 'Когда начинается экзамен? — Я не знаю.' },
  { de: 'Wer kümmert sich um …?', pos: 'phrase', ru: 'Кто займётся …?', example: 'Wer kümmert sich um die Getränke?', exampleRu: 'Кто займётся напитками?' },
  { de: 'Das ist eine gute Idee.', pos: 'phrase', ru: 'Это хорошая идея.', example: 'Wir schenken ihr Blumen? Das ist eine gute Idee.', exampleRu: 'Подарим ей цветы? Это хорошая идея.' },
];
