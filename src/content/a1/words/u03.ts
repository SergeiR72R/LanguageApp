import type { VocabItem } from '../../types';

// Words of the day for unit 3: countries, languages and greetings.
export const words: VocabItem[] = [
  { de: 'Englisch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'английский язык', example: 'Sprechen Sie Englisch?', exampleRu: 'Вы говорите по-английски?', pronRu: 'ЭН-глиш' },
  { de: 'Französisch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'французский язык', example: 'Marie spricht Französisch.', exampleRu: 'Мари говорит по-французски.', pronRu: 'фран-ЦЁ:-зиш' },
  { de: 'Spanisch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'испанский язык', example: 'Carlos spricht Spanisch.', exampleRu: 'Карлос говорит по-испански.', pronRu: 'ШПА:-ниш' },
  { de: 'Italienisch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'итальянский язык', example: 'Paolo spricht Italienisch.', exampleRu: 'Паоло говорит по-итальянски.', pronRu: 'и-та-ЛЬЕ:-ниш' },
  { de: 'Ukrainisch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'украинский язык', example: 'Olena spricht Ukrainisch und Russisch.', exampleRu: 'Олена говорит по-украински и по-русски.', pronRu: 'у-кра-И:-ниш' },
  { de: 'Polnisch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'польский язык', example: 'Marek spricht Polnisch.', exampleRu: 'Марек говорит по-польски.', pronRu: 'ПОЛЬ-ниш' },
  { de: 'Türkisch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'турецкий язык', example: 'Emre spricht Türkisch und Deutsch.', exampleRu: 'Эмре говорит по-турецки и по-немецки.', pronRu: 'ТЮР-киш' },
  { de: 'Ukraine', article: 'die', plural: '–', forms: 'с артиклем: aus der Ukraine', pos: 'noun', ru: 'Украина', example: 'Olena kommt aus der Ukraine.', exampleRu: 'Олена из Украины.', pronRu: 'ди у-кра-И:-нэ' },
  { de: 'Türkei', article: 'die', plural: '–', forms: 'с артиклем: aus der Türkei', pos: 'noun', ru: 'Турция', example: 'Emre kommt aus der Türkei.', exampleRu: 'Эмре из Турции.', pronRu: 'ди тюр-КАЙ' },
  { de: 'Polen', forms: 'без артикля: aus Polen', pos: 'other', ru: 'Польша', example: 'Marek kommt aus Polen.', exampleRu: 'Марек из Польши.', pronRu: 'ПО:-лэн' },
  { de: 'Frankreich', forms: 'без артикля: aus Frankreich', pos: 'other', ru: 'Франция', example: 'Paris ist in Frankreich.', exampleRu: 'Париж находится во Франции.', pronRu: 'ФРАНК-райхь' },
  { de: 'Spanien', forms: 'без артикля: aus Spanien', pos: 'other', ru: 'Испания', example: 'Carlos kommt aus Spanien.', exampleRu: 'Карлос из Испании.', pronRu: 'ШПА:-ни-эн' },
  { de: 'Italien', forms: 'без артикля: aus Italien', pos: 'other', ru: 'Италия', example: 'Rom ist in Italien.', exampleRu: 'Рим находится в Италии.', pronRu: 'и-ТА:-ли-эн' },
  { de: 'England', forms: 'без артикля: aus England', pos: 'other', ru: 'Англия', example: 'London ist in England.', exampleRu: 'Лондон находится в Англии.', pronRu: 'ЭН-глант' },
  { de: 'Kasachstan', forms: 'без артикля: aus Kasachstan', pos: 'other', ru: 'Казахстан', example: 'Ivan kommt aus Kasachstan.', exampleRu: 'Иван из Казахстана.', pronRu: 'КА:-зах-стан' },
  { de: 'Europa', forms: 'без артикля: in Europa', pos: 'other', ru: 'Европа', example: 'Deutschland ist in Europa.', exampleRu: 'Германия находится в Европе.', pronRu: 'ой-РО:-па' },
  { de: 'ein bisschen', pos: 'adv', ru: 'немного, чуть-чуть', example: 'Ich spreche ein bisschen Deutsch.', exampleRu: 'Я немного говорю по-немецки.', pronRu: 'айн БИС-хьэн' },
  { de: 'Und Ihnen?', pos: 'phrase', ru: 'А у Вас? (в ответ на «Как дела?»)', example: 'Danke, gut. Und Ihnen?', exampleRu: 'Спасибо, хорошо. А у Вас?', pronRu: 'унт И:-нэн' },
  { de: 'Es geht.', pos: 'phrase', ru: 'Так себе. Нормально.', example: "Wie geht's? – Es geht.", exampleRu: 'Как дела? — Так себе.', pronRu: 'эс ГЭ:Т' },
  { de: 'Bis bald!', pos: 'phrase', ru: 'До скорого!', example: 'Tschüss, Anna! Bis bald!', exampleRu: 'Пока, Анна! До скорого!', pronRu: 'бис БАЛЬТ' },
  { de: 'Hallo zusammen!', pos: 'phrase', ru: 'Всем привет!', example: 'Hallo zusammen! Ich heiße Olga.', exampleRu: 'Всем привет! Меня зовут Ольга.', pronRu: 'ха-ЛО: цу-ЗА-мэн' },
  { de: 'Servus!', pos: 'phrase', ru: 'Привет! / Пока! (на юге Германии и в Австрии)', example: "Servus, Max! Wie geht's?", exampleRu: 'Привет, Макс! Как дела?', pronRu: 'ЗЭР-вус' },
  { de: 'Grüß Gott!', pos: 'phrase', ru: 'Здравствуйте! (в Баварии и Австрии)', example: 'Grüß Gott, Frau Huber!', exampleRu: 'Здравствуйте, госпожа Хубер!', pronRu: 'грю:с ГОТ' },
  { de: 'Moin!', pos: 'phrase', ru: 'Привет! (на севере Германии, в любое время дня)', example: "Moin! Wie geht's?", exampleRu: 'Привет! Как дела?', pronRu: 'МОЙН' },
];
