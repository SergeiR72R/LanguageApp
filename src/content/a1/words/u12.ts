import type { VocabItem } from '../../types';

// Word bank A1 · Unit 12 — Termine
export const words: VocabItem[] = [
  // Monate
  { de: 'Januar', article: 'der', plural: '-e', pos: 'noun', ru: 'январь (im Januar — в январе)', example: 'Im Januar ist es kalt.', exampleRu: 'В январе холодно.', pronRu: 'дер Я-ну-а:р' },
  { de: 'Februar', article: 'der', plural: '-e', pos: 'noun', ru: 'февраль', example: 'Der Februar hat 28 Tage.', exampleRu: 'В феврале 28 дней.', pronRu: 'дер ФЕ:-бру-а:р' },
  { de: 'März', article: 'der', plural: '-e', pos: 'noun', ru: 'март', example: 'Mein Termin ist am ersten März.', exampleRu: 'Мой приём — первого марта.', pronRu: 'дер МЭРЦ' },
  { de: 'April', article: 'der', plural: '-e', pos: 'noun', ru: 'апрель', example: 'Im April fahren wir nach Wien.', exampleRu: 'В апреле мы едем в Вену.', pronRu: 'дер а-ПРИЛЬ' },
  { de: 'Mai', article: 'der', plural: '-e', pos: 'noun', ru: 'май', example: 'Heute ist der dritte Mai.', exampleRu: 'Сегодня третье мая.', pronRu: 'дер МАЙ' },
  { de: 'Juni', article: 'der', plural: '-s', pos: 'noun', ru: 'июнь', example: 'Der Kurs fängt im Juni an.', exampleRu: 'Курс начинается в июне.', pronRu: 'дер Ю:-ни' },
  { de: 'Juli', article: 'der', plural: '-s', pos: 'noun', ru: 'июль', example: 'Im Juli habe ich Urlaub.', exampleRu: 'В июле у меня отпуск.', pronRu: 'дер Ю:-ли' },
  { de: 'August', article: 'der', plural: '-e', pos: 'noun', ru: 'август', example: 'Der August ist oft sehr warm.', exampleRu: 'Август часто очень тёплый.', pronRu: 'дер ау-ГУСТ' },
  { de: 'September', article: 'der', plural: '-', pos: 'noun', ru: 'сентябрь', example: 'Die Schule fängt im September an.', exampleRu: 'Школа начинается в сентябре.', pronRu: 'дер зэп-ТЭМ-ба' },
  { de: 'Oktober', article: 'der', plural: '-', pos: 'noun', ru: 'октябрь', example: 'Mein Sohn hat im Oktober Geburtstag.', exampleRu: 'У моего сына день рождения в октябре.', pronRu: 'дер ок-ТО:-ба' },
  { de: 'November', article: 'der', plural: '-', pos: 'noun', ru: 'ноябрь', example: 'Im November regnet es oft.', exampleRu: 'В ноябре часто идёт дождь.', pronRu: 'дер но-ВЭМ-ба' },
  { de: 'Dezember', article: 'der', plural: '-', pos: 'noun', ru: 'декабрь', example: 'Der Dezember ist der letzte Monat.', exampleRu: 'Декабрь — последний месяц.', pronRu: 'дер дэ-ЦЭМ-ба' },
  // Zeit
  { de: 'Wochentag', article: 'der', plural: '-e', pos: 'noun', ru: 'день недели', example: 'Der Montag ist ein Wochentag.', exampleRu: 'Понедельник — это день недели.', pronRu: 'дер ВО-хэн-та:к' },
  { de: 'gestern', pos: 'adv', ru: 'вчера', example: 'Gestern, heute, morgen – ich lerne jeden Tag Deutsch.', exampleRu: 'Вчера, сегодня, завтра — я учу немецкий каждый день.', pronRu: 'ГЭС-тэрн' },
  { de: 'übermorgen', pos: 'adv', ru: 'послезавтра', example: 'Ich habe übermorgen einen Termin.', exampleRu: 'Послезавтра у меня приём.', pronRu: 'Ю:-ба-мор-ген' },
  { de: 'Uhrzeit', article: 'die', plural: '-en', pos: 'noun', ru: 'время (на часах)', example: 'Die Uhrzeit passt gut.', exampleRu: 'Это время хорошо подходит.', pronRu: 'ди У:А-цайт' },
  // beim Arzt
  { de: 'Arzttermin', article: 'der', plural: '-e', pos: 'noun', ru: 'приём у врача, запись к врачу', example: 'Ich habe morgen einen Arzttermin.', exampleRu: 'Завтра у меня приём у врача.', pronRu: 'дер А:РЦТ-тэр-ми:н' },
  { de: 'Versichertenkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'карточка медицинской страховки', example: 'Ich muss meine Versichertenkarte mitbringen.', exampleRu: 'Мне нужно взять с собой карточку страховки.', pronRu: 'ди фэр-ЗИХЬ-а-тэн-кар-тэ' },
  { de: 'dringend', pos: 'adj', ru: 'срочный; срочно', example: 'Ich brauche dringend einen Termin.', exampleRu: 'Мне срочно нужен приём.', pronRu: 'ДРИН-гэнт' },
  { de: 'möglich', pos: 'adj', ru: 'возможный; возможно', example: 'Ist ein Termin am Freitag möglich?', exampleRu: 'Возможна запись на пятницу?', pronRu: 'МЁ:К-лихь' },
  { de: 'nachmittags', pos: 'adv', ru: 'после обеда, во второй половине дня (регулярно)', example: 'Die Praxis ist nachmittags geschlossen.', exampleRu: 'После обеда кабинет врача закрыт.', pronRu: 'НАХ-ми-та:кс' },
  { de: 'vorbeikommen', forms: 'er kommt vorbei', pos: 'verb', ru: 'заходить, заглядывать (ненадолго)', example: 'Kannst du heute vorbeikommen?', exampleRu: 'Ты можешь сегодня зайти?', pronRu: 'фор-БАЙ-ко-мэн' },
  // Redemittel
  { de: 'Das geht.', pos: 'phrase', ru: 'Так можно. / Это подходит.', example: 'Am Montag um zehn? Ja, das geht.', exampleRu: 'В понедельник в десять? Да, это подходит.', pronRu: 'дас ГЕ:Т' },
  { de: 'Bis dann!', pos: 'phrase', ru: 'До встречи! (тогда)', example: 'Also am Freitag um acht. Bis dann!', exampleRu: 'Итак, в пятницу в восемь. До встречи!', pronRu: 'бис ДАН' },
];
