import type { VocabItem } from '../../types';

// Word bank A1 · Unit 10 — Mein Tag
export const words: VocabItem[] = [
  // Tageszeiten
  { de: 'Vormittag', article: 'der', plural: '-e', pos: 'noun', ru: 'первая половина дня, до обеда (am Vormittag)', example: 'Ich lerne am Vormittag Deutsch.', exampleRu: 'До обеда я учу немецкий.', pronRu: 'дер ФО:А-ми-та:к' },
  { de: 'Mittag', article: 'der', plural: '-e', pos: 'noun', ru: 'полдень; обеденное время (am Mittag)', example: 'Ich esse am Mittag eine Suppe.', exampleRu: 'В обед я ем суп.', pronRu: 'дер МИ-та:к' },
  { de: 'Nachmittag', article: 'der', plural: '-e', pos: 'noun', ru: 'вторая половина дня, после обеда (am Nachmittag)', example: 'Wir trinken am Nachmittag Tee.', exampleRu: 'После обеда мы пьём чай.', pronRu: 'дер НАХ-ми-та:к' },
  { de: 'morgens', pos: 'adv', ru: 'по утрам', example: 'Ich trinke morgens Tee.', exampleRu: 'По утрам я пью чай.', pronRu: 'МОР-генс' },
  { de: 'abends', pos: 'adv', ru: 'по вечерам', example: 'Ich lese abends ein Buch.', exampleRu: 'По вечерам я читаю книгу.', pronRu: 'А:-бэнтс' },
  { de: 'nachts', pos: 'adv', ru: 'по ночам', example: 'Mein Nachbar arbeitet nachts.', exampleRu: 'Мой сосед работает по ночам.', pronRu: 'НАХТС' },
  { de: 'Viertelstunde', article: 'die', plural: '-n', pos: 'noun', ru: 'четверть часа (15 минут)', example: 'Ich warte schon eine Viertelstunde.', exampleRu: 'Я жду уже четверть часа.', pronRu: 'ди ФИР-тэль-штун-дэ' },
  // Tagesablauf
  { de: 'Tagesablauf', article: 'der', plural: '-¨e', pos: 'noun', ru: 'распорядок дня', example: 'Mein Tagesablauf ist ganz normal.', exampleRu: 'Мой распорядок дня совсем обычный.', pronRu: 'дер ТА:-гес-ап-лауф' },
  { de: 'Alltag', article: 'der', plural: '–', pos: 'noun', ru: 'будни, повседневная жизнь', example: 'Der Alltag in Deutschland ist für mich neu.', exampleRu: 'Повседневная жизнь в Германии для меня новая.', pronRu: 'дер АЛЬ-та:к' },
  { de: 'Wecker', article: 'der', plural: '-', pos: 'noun', ru: 'будильник', example: 'Mein Wecker klingelt um sechs Uhr.', exampleRu: 'Мой будильник звонит в шесть часов.', pronRu: 'дер ВЭ-ка' },
  { de: 'aufwachen', forms: 'er wacht auf', pos: 'verb', ru: 'просыпаться', example: 'Ich wache um fünf Uhr auf.', exampleRu: 'Я просыпаюсь в пять часов.', pronRu: 'АУФ-ва-хэн' },
  { de: 'duschen', forms: 'er duscht', pos: 'verb', ru: 'принимать душ', example: 'Ich dusche am Morgen.', exampleRu: 'Я принимаю душ утром.', pronRu: 'ДУ:-шэн' },
  { de: 'anziehen', forms: 'er zieht an', pos: 'verb', ru: 'надевать (одежду)', example: 'Ich ziehe die Jacke an.', exampleRu: 'Я надеваю куртку.', pronRu: 'АН-ци:-эн' },
  { de: 'Pause', article: 'die', plural: '-n', pos: 'noun', ru: 'перерыв, пауза', example: 'Ich mache um zwölf Uhr Pause.', exampleRu: 'В двенадцать часов я делаю перерыв.', pronRu: 'ди ПАУ-зэ' },
  { de: 'nach Hause', pos: 'phrase', ru: 'домой (куда?)', example: 'Ich gehe um fünf Uhr nach Hause.', exampleRu: 'В пять часов я иду домой.', pronRu: 'нах ХАУ-зэ' },
  { de: 'ins Bett gehen', forms: 'er geht ins Bett', pos: 'phrase', ru: 'ложиться спать', example: 'Ich gehe um elf Uhr ins Bett.', exampleRu: 'Я ложусь спать в одиннадцать часов.', pronRu: 'инс БЭТ ге:-эн' },
  { de: 'ausschlafen', forms: 'er schläft aus', pos: 'verb', ru: 'высыпаться', example: 'Ich schlafe am Sonntag aus.', exampleRu: 'В воскресенье я высыпаюсь.', pronRu: 'АУС-шла:-фэн' },
  // trennbare Verben
  { de: 'aufmachen', forms: 'er macht auf', pos: 'verb', ru: 'открывать; открываться', example: 'Der Supermarkt macht um acht Uhr auf.', exampleRu: 'Супермаркет открывается в восемь часов.', pronRu: 'АУФ-ма-хэн' },
  { de: 'zumachen', forms: 'er macht zu', pos: 'verb', ru: 'закрывать; закрываться', example: 'Die Bäckerei macht um sechs Uhr zu.', exampleRu: 'Пекарня закрывается в шесть часов.', pronRu: 'ЦУ:-ма-хэн' },
  { de: 'mitkommen', forms: 'er kommt mit', pos: 'verb', ru: 'идти (ехать) вместе с кем-то', example: 'Wir gehen spazieren. Kommst du mit?', exampleRu: 'Мы идём гулять. Пойдёшь с нами?', pronRu: 'МИТ-ко-мэн' },
  { de: 'losgehen', forms: 'er geht los', pos: 'verb', ru: 'выходить, отправляться (в путь)', example: 'Ich gehe um sieben Uhr los.', exampleRu: 'Я выхожу (из дома) в семь часов.', pronRu: 'ЛО:С-ге:-эн' },
  { de: 'zurückkommen', forms: 'er kommt zurück', pos: 'verb', ru: 'возвращаться', example: 'Ich komme um sechs Uhr zurück.', exampleRu: 'Я вернусь в шесть часов.', pronRu: 'цу-РЮК-ко-мэн' },
  // nützliche Wörter
  { de: 'Arbeitstag', article: 'der', plural: '-e', pos: 'noun', ru: 'рабочий день', example: 'Mein Arbeitstag ist sehr lang.', exampleRu: 'Мой рабочий день очень длинный.', pronRu: 'дер АР-байтс-та:к' },
  { de: 'ungefähr', pos: 'adv', ru: 'примерно, приблизительно', example: 'Es ist ungefähr zehn Uhr.', exampleRu: 'Сейчас примерно десять часов.', pronRu: 'УН-ге-фэ:а' },
  { de: 'jeden Tag', pos: 'phrase', ru: 'каждый день', example: 'Ich lerne jeden Tag Deutsch.', exampleRu: 'Я учу немецкий каждый день.', pronRu: 'Е:-дэн ТА:К' },
  { de: 'gleich', pos: 'adv', ru: 'сейчас, сразу, скоро', example: 'Moment, ich komme gleich!', exampleRu: 'Минутку, я сейчас приду!', pronRu: 'ГЛАЙХЬ' },
];
