import type { VocabItem } from '../../types';

// Word bank A1 · Unit 06 — Meine Familie
export const words: VocabItem[] = [
  // Verwandte
  { de: 'Oma', article: 'die', plural: '-s', pos: 'noun', ru: 'бабушка (разг.)', example: 'Meine Oma ist achtzig Jahre alt.', exampleRu: 'Моей бабушке восемьдесят лет.', pronRu: 'ди О-ма' },
  { de: 'Opa', article: 'der', plural: '-s', pos: 'noun', ru: 'дедушка (разг.)', example: 'Mein Opa wohnt in Minsk.', exampleRu: 'Мой дедушка живёт в Минске.', pronRu: 'дер О-па' },
  { de: 'Enkel', article: 'der', plural: '-', pos: 'noun', ru: 'внук', example: 'Herr Schulz hat drei Enkel.', exampleRu: 'У господина Шульца трое внуков.', pronRu: 'дер ЭН-кэль' },
  { de: 'Enkelin', article: 'die', plural: '-nen', pos: 'noun', ru: 'внучка', example: 'Meine Enkelin heißt Sofia.', exampleRu: 'Мою внучку зовут София.', pronRu: 'ди ЭН-кэ-лин' },
  { de: 'Onkel', article: 'der', plural: '-', pos: 'noun', ru: 'дядя', example: 'Mein Onkel wohnt in Kanada.', exampleRu: 'Мой дядя живёт в Канаде.', pronRu: 'дер ОН-кэль' },
  { de: 'Tante', article: 'die', plural: '-n', pos: 'noun', ru: 'тётя', example: 'Meine Tante heißt Vera.', exampleRu: 'Мою тётю зовут Вера.', pronRu: 'ди ТАН-тэ' },
  { de: 'Cousin', article: 'der', plural: '-s', pos: 'noun', ru: 'двоюродный брат', example: 'Mein Cousin ist zwanzig.', exampleRu: 'Моему двоюродному брату двадцать.', pronRu: 'дер ку-ЗЭН' },
  { de: 'Cousine', article: 'die', plural: '-n', pos: 'noun', ru: 'двоюродная сестра', example: 'Meine Cousine wohnt in Wien.', exampleRu: 'Моя двоюродная сестра живёт в Вене.', pronRu: 'ди ку-ЗИ:-нэ' },
  { de: 'Zwilling', article: 'der', plural: '-e', pos: 'noun', ru: 'близнец', example: 'Anna und Maria sind Zwillinge.', exampleRu: 'Анна и Мария — близнецы.', pronRu: 'дер ЦВИ-линг' },

  // Paare
  { de: 'Ehemann', article: 'der', plural: '-¨er', pos: 'noun', ru: 'муж, супруг', example: 'Ihr Ehemann kommt aus Italien.', exampleRu: 'Её муж из Италии.', pronRu: 'дер Э-э-ман' },
  { de: 'Ehefrau', article: 'die', plural: '-en', pos: 'noun', ru: 'жена, супруга', example: 'Seine Ehefrau heißt Marta.', exampleRu: 'Его жену зовут Марта.', pronRu: 'ди Э-э-фрау' },
  { de: 'Partner', article: 'der', plural: '-', pos: 'noun', ru: 'партнёр, спутник жизни', example: 'Mein Partner heißt Jonas.', exampleRu: 'Моего партнёра зовут Йонас.', pronRu: 'дер ПАРТ-на' },
  { de: 'Partnerin', article: 'die', plural: '-nen', pos: 'noun', ru: 'партнёрша, спутница жизни', example: 'Seine Partnerin kommt aus Polen.', exampleRu: 'Его спутница из Польши.', pronRu: 'ди ПАРТ-нэ-рин' },
  { de: 'Freund', article: 'der', plural: '-e', pos: 'noun', ru: 'друг; парень (бойфренд)', example: 'Das ist mein Freund Paul.', exampleRu: 'Это мой друг Пауль.', pronRu: 'дер ФРОЙНТ' },
  { de: 'Freundin', article: 'die', plural: '-nen', pos: 'noun', ru: 'подруга; девушка (подруга)', example: 'Meine Freundin wohnt in Bonn.', exampleRu: 'Моя подруга живёт в Бонне.', pronRu: 'ди ФРОЙН-дин' },
  { de: 'lieben', forms: 'er liebt, hat geliebt', pos: 'verb', ru: 'любить', example: 'Ich liebe meine Familie.', exampleRu: 'Я люблю свою семью.', pronRu: 'ЛИ:-бэн' },
  { de: 'besuchen', forms: 'er besucht, hat besucht', pos: 'verb', ru: 'навещать, посещать', example: 'Ich besuche meine Eltern.', exampleRu: 'Я навещаю своих родителей.', pronRu: 'бэ-ЗУ-хэн' },

  // Kinder und Leute
  { de: 'Baby', article: 'das', plural: '-s', pos: 'noun', ru: 'младенец, малыш', example: 'Das Baby ist drei Monate alt.', exampleRu: 'Малышу три месяца.', pronRu: 'дас БЭЙ-би' },
  { de: 'Junge', article: 'der', plural: '-n', pos: 'noun', ru: 'мальчик', example: 'Der Junge heißt Tim.', exampleRu: 'Мальчика зовут Тим.', pronRu: 'дер ЮН-гэ' },
  { de: 'Mädchen', article: 'das', plural: '-', pos: 'noun', ru: 'девочка', example: 'Das Mädchen ist sechs Jahre alt.', exampleRu: 'Девочке шесть лет.', pronRu: 'дас МЭТ-хьэн' },
  { de: 'Leute', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'люди', example: 'Die Leute kommen aus Spanien.', exampleRu: 'Эти люди из Испании.', pronRu: 'ди ЛОЙ-тэ' },

  // Haustiere
  { de: 'Hund', article: 'der', plural: '-e', pos: 'noun', ru: 'собака', example: 'Unser Hund heißt Bello.', exampleRu: 'Нашу собаку зовут Белло.', pronRu: 'дер ХУНТ' },
  { de: 'Katze', article: 'die', plural: '-n', pos: 'noun', ru: 'кошка', example: 'Meine Katze ist drei Jahre alt.', exampleRu: 'Моей кошке три года.', pronRu: 'ди КА-цэ' },

  // Familie im Alltag
  { de: 'Mama', article: 'die', plural: '-s', pos: 'noun', ru: 'мама (разг.)', example: 'Mama, wo ist Papa?', exampleRu: 'Мама, где папа?', pronRu: 'ди МА-ма' },
  { de: 'Papa', article: 'der', plural: '-s', pos: 'noun', ru: 'папа (разг.)', example: 'Mein Papa heißt Igor.', exampleRu: 'Моего папу зовут Игорь.', pronRu: 'дер ПА-па' },
  { de: 'allein', pos: 'adv', ru: 'один, одна (без других)', example: 'Mein Opa wohnt allein.', exampleRu: 'Мой дедушка живёт один.', pronRu: 'а-ЛАЙН' },
];
