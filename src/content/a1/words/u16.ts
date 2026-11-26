import type { VocabItem } from '../../types';

// Word bank A1 · Unit 16 — Körper und Gesundheit
export const words: VocabItem[] = [
  // Körper
  { de: 'Ohr', article: 'das', plural: '-en', pos: 'noun', ru: 'ухо', example: 'Mir tut das Ohr weh.', exampleRu: 'У меня болит ухо.', pronRu: 'дас О:А' },
  { de: 'Zahn', article: 'der', plural: '-¨e', pos: 'noun', ru: 'зуб', example: 'Mir tut ein Zahn weh.', exampleRu: 'У меня болит зуб.', pronRu: 'дер ЦА:Н' },
  { de: 'Nase', article: 'die', plural: '-n', pos: 'noun', ru: 'нос', example: 'Meine Nase ist rot.', exampleRu: 'У меня красный нос.', pronRu: 'ди НА:-зэ' },
  { de: 'Mund', article: 'der', plural: '-¨er', pos: 'noun', ru: 'рот', example: 'Machen Sie bitte den Mund auf.', exampleRu: 'Откройте, пожалуйста, рот.', pronRu: 'дер МУНТ' },
  { de: 'Gesicht', article: 'das', plural: '-er', pos: 'noun', ru: 'лицо', example: 'Sein Gesicht ist ganz rot.', exampleRu: 'У него совсем красное лицо.', pronRu: 'дас гэ-ЗИХЬТ' },
  { de: 'Finger', article: 'der', plural: '-', pos: 'noun', ru: 'палец (на руке)', example: 'Mein Finger tut weh.', exampleRu: 'У меня болит палец.', pronRu: 'дер ФИН-га' },
  { de: 'Knie', article: 'das', plural: '-', pos: 'noun', ru: 'колено', example: 'Mir tun die Knie weh.', exampleRu: 'У меня болят колени.', pronRu: 'дас КНИ:' },
  { de: 'Herz', article: 'das', plural: '-en', pos: 'noun', ru: 'сердце', example: 'Sein Herz ist gesund.', exampleRu: 'У него здоровое сердце.', pronRu: 'дас ХЕРЦ' },
  // Beim Arzt
  { de: 'Zahnarzt', article: 'der', plural: '-¨e', pos: 'noun', ru: 'зубной врач (die Zahnärztin)', example: 'Ich habe morgen einen Termin beim Zahnarzt.', exampleRu: 'У меня завтра приём у зубного врача.', pronRu: 'дер ЦА:Н-а:рцт' },
  { de: 'Praxis', article: 'die', plural: 'die Praxen', pos: 'noun', ru: 'кабинет врача, врачебная практика', example: 'Die Praxis ist am Mittwoch geschlossen.', exampleRu: 'Кабинет врача в среду закрыт.', pronRu: 'ди ПРАК-сис' },
  { de: 'Wartezimmer', article: 'das', plural: '-', pos: 'noun', ru: 'приёмная, комната ожидания', example: 'Bitte warten Sie im Wartezimmer.', exampleRu: 'Подождите, пожалуйста, в приёмной.', pronRu: 'дас ВАР-тэ-цы-ма' },
  { de: 'Sprechstunde', article: 'die', plural: '-n', pos: 'noun', ru: 'часы приёма', example: 'Die Sprechstunde beginnt um 8 Uhr.', exampleRu: 'Приём начинается в 8 часов.', pronRu: 'ди ШПРЕХЬ-штун-дэ' },
  { de: 'Medikament', article: 'das', plural: '-e', pos: 'noun', ru: 'лекарство', example: 'Das Medikament ist sehr gut.', exampleRu: 'Это лекарство очень хорошее.', pronRu: 'дас ме-ди-ка-МЕНТ' },
  { de: 'Rezept', article: 'das', plural: '-e', pos: 'noun', ru: 'рецепт (от врача; тж. кулинарный)', example: 'Die Ärztin schreibt ein Rezept.', exampleRu: 'Врач выписывает рецепт.', pronRu: 'дас ре-ЦЕПТ' },
  { de: 'Apotheke', article: 'die', plural: '-n', pos: 'noun', ru: 'аптека', example: 'Die Apotheke ist neben der Praxis.', exampleRu: 'Аптека рядом с кабинетом врача.', pronRu: 'ди а-по-ТЕ:-кэ' },
  { de: 'Krankenkasse', article: 'die', plural: '-n', pos: 'noun', ru: 'больничная касса (медицинская страховка)', example: 'Bei welcher Krankenkasse sind Sie?', exampleRu: 'В какой больничной кассе вы застрахованы?', pronRu: 'ди КРАН-кен-ка-сэ' },
  { de: 'Pflaster', article: 'das', plural: '-', pos: 'noun', ru: 'пластырь', example: 'Hast du ein Pflaster für mich?', exampleRu: 'У тебя есть для меня пластырь?', pronRu: 'дас ПФЛАС-та' },
  // Krankheiten
  { de: 'Erkältung', article: 'die', plural: '-en', pos: 'noun', ru: 'простуда', example: 'Ich habe eine Erkältung.', exampleRu: 'У меня простуда.', pronRu: 'ди эа-КЕЛЬ-тунг' },
  { de: 'Husten', article: 'der', plural: '–', pos: 'noun', ru: 'кашель', example: 'Der Husten ist schon besser.', exampleRu: 'Кашель уже лучше.', pronRu: 'дер ХУ:С-тэн' },
  { de: 'Schnupfen', article: 'der', plural: '–', pos: 'noun', ru: 'насморк', example: 'Im Winter habe ich oft Schnupfen.', exampleRu: 'Зимой у меня часто насморк.', pronRu: 'дер ШНУП-фэн' },
  { de: 'Grippe', article: 'die', plural: '-n', pos: 'noun', ru: 'грипп', example: 'Meine Frau hat Grippe.', exampleRu: 'У моей жены грипп.', pronRu: 'ди ГРИ-пэ' },
  { de: 'Gesundheit', article: 'die', plural: '–', pos: 'noun', ru: 'здоровье; Gesundheit! — Будьте здоровы! (когда чихают)', example: 'Sport ist gut für die Gesundheit.', exampleRu: 'Спорт полезен для здоровья.', pronRu: 'ди гэ-ЗУНТ-хайт' },
  { de: 'husten', forms: 'er hustet, hat gehustet', pos: 'verb', ru: 'кашлять', example: 'Das Kind hustet in der Nacht.', exampleRu: 'Ребёнок кашляет ночью.', pronRu: 'ХУ:С-тэн' },
  { de: 'rauchen', forms: 'er raucht, hat geraucht', pos: 'verb', ru: 'курить', example: 'Sie dürfen hier nicht rauchen.', exampleRu: 'Здесь нельзя курить.', pronRu: 'РАУ-хэн' },
  { de: 'müde', pos: 'adj', ru: 'усталый; хочется спать', example: 'Ich bin heute sehr müde.', exampleRu: 'Я сегодня очень устал.', pronRu: 'МЮ:-дэ' },
  { de: 'Gute Besserung!', pos: 'phrase', ru: 'Выздоравливай(те)!', example: 'Du bist krank? Gute Besserung!', exampleRu: 'Ты болен? Выздоравливай!', pronRu: 'ГУ:-тэ БЕ-сэ-рунг' },
];
