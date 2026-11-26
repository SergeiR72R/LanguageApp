import type { VocabItem } from '../../types';

// Word bank A2 · Unit 04 — Wohnen und Umziehen
export const words: VocabItem[] = [
  // Wohnung suchen und mieten
  { de: 'Kaltmiete', article: 'die', plural: '-n', pos: 'noun', ru: 'аренда без коммунальных расходов', example: 'Die Kaltmiete ist 520 Euro im Monat.', exampleRu: 'Аренда без коммуналки — 520 евро в месяц.' },
  { de: 'Warmmiete', article: 'die', plural: '-n', pos: 'noun', ru: 'аренда с коммунальными расходами', example: 'Die Warmmiete ist 700 Euro, mit Heizung und Wasser.', exampleRu: 'Аренда с коммуналкой — 700 евро, с отоплением и водой.' },
  { de: 'Besichtigung', article: 'die', plural: '-en', pos: 'noun', ru: 'осмотр (квартиры)', example: 'Die Besichtigung ist am Samstag um zehn Uhr.', exampleRu: 'Осмотр квартиры — в субботу в десять часов.', pronRu: 'бе-ЗИХЬ-ти-гунг' },
  { de: 'besichtigen', forms: 'besichtigt, hat besichtigt', pos: 'verb', ru: 'осматривать (квартиру, город)', example: 'Wir haben gestern drei Wohnungen besichtigt.', exampleRu: 'Вчера мы осмотрели три квартиры.' },
  { de: 'mieten', forms: 'mietet, hat gemietet', pos: 'verb', ru: 'снимать, арендовать', example: 'Wir mieten eine Wohnung in der Stadt.', exampleRu: 'Мы снимаем квартиру в городе.' },
  { de: 'vermieten', forms: 'vermietet, hat vermietet', pos: 'verb', ru: 'сдавать (в аренду)', example: 'Frau Berg vermietet ein Zimmer an Studenten.', exampleRu: 'Госпожа Берг сдаёт комнату студентам.' },
  { de: 'Lage', article: 'die', plural: '-n', pos: 'noun', ru: 'расположение', example: 'Die Lage ist super: Der Bahnhof ist nur fünf Minuten weg.', exampleRu: 'Расположение отличное: вокзал всего в пяти минутах.' },
  { de: 'Altbau', article: 'der', plural: '-ten', pos: 'noun', ru: 'старый дом (постройки до ~1950 г.)', example: 'Wir wohnen in einem Altbau. Die Zimmer sind sehr hoch.', exampleRu: 'Мы живём в старом доме. Комнаты очень высокие.' },
  { de: 'Neubau', article: 'der', plural: '-ten', pos: 'noun', ru: 'новостройка', example: 'Das Haus ist ein Neubau, hier ist alles neu.', exampleRu: 'Дом — новостройка, здесь всё новое.' },
  { de: 'Hochhaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'многоэтажный дом, высотка', example: 'Meine Tante wohnt in einem Hochhaus im zwölften Stock.', exampleRu: 'Моя тётя живёт в высотке на двенадцатом этаже.' },
  { de: 'Einfamilienhaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'частный дом (на одну семью)', example: 'Viele Familien träumen von einem Einfamilienhaus mit Garten.', exampleRu: 'Многие семьи мечтают о собственном доме с садом.' },
  { de: 'Stadtrand', article: 'der', plural: '-¨er', pos: 'noun', ru: 'окраина города', example: 'Am Stadtrand sind die Wohnungen billiger.', exampleRu: 'На окраине квартиры дешевле.' },
  { de: 'günstig', pos: 'adj', ru: 'выгодный, недорогой', example: 'Die Wohnung ist klein, aber günstig.', exampleRu: 'Квартира маленькая, но недорогая.' },
  { de: 'zentral', pos: 'adj', ru: 'в центре, удобно расположенный', example: 'Unsere Wohnung liegt sehr zentral.', exampleRu: 'Наша квартира расположена в самом центре.' },
  { de: 'zur Miete wohnen', pos: 'phrase', ru: 'жить на съёмной квартире', example: 'Wir haben kein Haus, wir wohnen zur Miete.', exampleRu: 'У нас нет дома, мы снимаем жильё.' },

  // Im Haus
  { de: 'Briefkasten', article: 'der', plural: '-¨', pos: 'noun', ru: 'почтовый ящик', example: 'Auf dem Briefkasten steht noch der alte Name.', exampleRu: 'На почтовом ящике ещё старое имя.' },
  { de: 'Klingel', article: 'die', plural: '-n', pos: 'noun', ru: 'звонок (у двери)', example: 'Unsere Klingel ist kaputt. Bitte klopfen Sie!', exampleRu: 'Наш звонок сломан. Пожалуйста, стучите!' },
  { de: 'klingeln', forms: 'klingelt, hat geklingelt', pos: 'verb', ru: 'звонить (в дверь)', example: 'Es hat geklingelt. Machst du bitte die Tür auf?', exampleRu: 'В дверь позвонили. Откроешь, пожалуйста?' },
  { de: 'Dach', article: 'das', plural: '-¨er', pos: 'noun', ru: 'крыша', example: 'Auf dem Dach sitzt eine Katze.', exampleRu: 'На крыше сидит кошка.' },
  { de: 'Decke', article: 'die', plural: '-n', pos: 'noun', ru: 'потолок; одеяло', example: 'Die Lampe hängt an der Decke.', exampleRu: 'Лампа висит на потолке.' },
  { de: 'Heizung', article: 'die', plural: '-en', pos: 'noun', ru: 'отопление; батарея', example: 'Im Winter ist die Heizung immer an.', exampleRu: 'Зимой отопление всегда включено.' },
  { de: 'Steckdose', article: 'die', plural: '-n', pos: 'noun', ru: 'розетка', example: 'Neben dem Bett ist keine Steckdose.', exampleRu: 'Рядом с кроватью нет розетки.', pronRu: 'ШТЕК-до:-зе' },
  { de: 'Nachbarschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'соседи; окрестности', example: 'In unserer Nachbarschaft gibt es einen Spielplatz.', exampleRu: 'В нашем районе есть детская площадка.' },

  // Möbel und Einrichtung
  { de: 'Kommode', article: 'die', plural: '-n', pos: 'noun', ru: 'комод', example: 'Die Socken liegen in der Kommode.', exampleRu: 'Носки лежат в комоде.' },
  { de: 'Kleiderschrank', article: 'der', plural: '-¨e', pos: 'noun', ru: 'платяной шкаф', example: 'Der Kleiderschrank steht im Schlafzimmer.', exampleRu: 'Платяной шкаф стоит в спальне.' },
  { de: 'Nachttisch', article: 'der', plural: '-e', pos: 'noun', ru: 'тумбочка у кровати', example: 'Meine Brille liegt auf dem Nachttisch.', exampleRu: 'Мои очки лежат на тумбочке.' },
  { de: 'Pflanze', article: 'die', plural: '-n', pos: 'noun', ru: 'растение', example: 'Ich stelle die Pflanze ans Fenster.', exampleRu: 'Я ставлю растение к окну.' },
  { de: 'Waschbecken', article: 'das', plural: '-', pos: 'noun', ru: 'раковина (умывальник)', example: 'Die Seife liegt am Waschbecken.', exampleRu: 'Мыло лежит у раковины.' },

  // Umziehen
  { de: 'Umzugskarton', article: 'der', plural: '-s', pos: 'noun', ru: 'коробка для переезда', example: 'Wir brauchen noch zwanzig Umzugskartons.', exampleRu: 'Нам нужно ещё двадцать коробок для переезда.' },
  { de: 'Transporter', article: 'der', plural: '-', pos: 'noun', ru: 'фургон, грузовой микроавтобус', example: 'Für den Umzug haben wir einen Transporter gemietet.', exampleRu: 'Для переезда мы взяли напрокат фургон.' },
  { de: 'aufhängen', forms: 'hängt auf, hat aufgehängt', pos: 'verb', ru: 'повесить (картину, бельё)', example: 'Am Wochenende hänge ich die Bilder auf.', exampleRu: 'На выходных я повешу картины.' },
  { de: 'streichen', forms: 'streicht, hat gestrichen', pos: 'verb', ru: 'красить (стены)', example: 'Wir haben das Kinderzimmer gelb gestrichen.', exampleRu: 'Мы покрасили детскую в жёлтый цвет.', pronRu: 'ШТРАЙ-хьен' },
  { de: 'stecken', forms: 'steckt, hat gesteckt; wohin? + Akk', pos: 'verb', ru: 'засовывать, вставлять', example: 'Ich stecke den Schlüssel in die Tasche.', exampleRu: 'Я кладу ключ в карман (сумку).' },
  // Ergänzungen
  { de: 'Einzug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'въезд, заселение', example: 'Der Einzug ist am ersten März.', exampleRu: 'Въезд — первого марта.' },
  { de: 'Wohnungssuche', article: 'die', plural: '–', pos: 'noun', ru: 'поиск квартиры', example: 'Die Wohnungssuche in München ist sehr schwer.', exampleRu: 'Искать квартиру в Мюнхене очень трудно.' },
  { de: 'Makler', article: 'der', plural: '-', pos: 'noun', ru: 'маклер, риелтор', example: 'Wir haben die Wohnung ohne Makler gefunden.', exampleRu: 'Мы нашли квартиру без риелтора.' },
  { de: 'Zweizimmerwohnung', article: 'die', plural: '-en', pos: 'noun', ru: 'двухкомнатная квартира', example: 'Wir suchen eine Zweizimmerwohnung mit Balkon.', exampleRu: 'Мы ищем двухкомнатную квартиру с балконом.' },
  { de: 'Dachwohnung', article: 'die', plural: '-en', pos: 'noun', ru: 'квартира под крышей, мансарда', example: 'Im Sommer ist es in der Dachwohnung sehr warm.', exampleRu: 'Летом в мансарде очень жарко.' },
  { de: 'Etage', article: 'die', plural: '-n', pos: 'noun', ru: 'этаж (= der Stock)', example: 'Die Wohnung liegt in der dritten Etage.', exampleRu: 'Квартира находится на третьем этаже (по-немецки).', pronRu: 'э-ТА:-же' },
  { de: 'Dachboden', article: 'der', plural: '-¨', pos: 'noun', ru: 'чердак', example: 'Die alten Möbel stehen auf dem Dachboden.', exampleRu: 'Старая мебель стоит на чердаке.' },
  { de: 'Haustier', article: 'das', plural: '-e', pos: 'noun', ru: 'домашнее животное', example: 'Sind Haustiere in der Wohnung erlaubt?', exampleRu: 'В квартире разрешено держать домашних животных?' },
  { de: 'Garderobe', article: 'die', plural: '-n', pos: 'noun', ru: 'вешалка (в прихожей)', example: 'Häng deine Jacke bitte an die Garderobe.', exampleRu: 'Повесь, пожалуйста, куртку на вешалку.', pronRu: 'гар-де-РО:-бе' },
  { de: 'Bücherregal', article: 'das', plural: '-e', pos: 'noun', ru: 'книжный стеллаж, книжная полка', example: 'Das Bücherregal steht neben dem Fenster.', exampleRu: 'Книжный стеллаж стоит рядом с окном.' },
  { de: 'Schublade', article: 'die', plural: '-n', pos: 'noun', ru: 'выдвижной ящик', example: 'Die Löffel liegen in der Schublade.', exampleRu: 'Ложки лежат в ящике.' },
  { de: 'Gardine', article: 'die', plural: '-n', pos: 'noun', ru: 'занавеска (тонкая)', example: 'Wir hängen neue Gardinen ans Fenster.', exampleRu: 'Мы вешаем на окно новые занавески.' },
  { de: 'Möbelwagen', article: 'der', plural: '-', pos: 'noun', ru: 'мебельный фургон (для переезда)', example: 'Der Möbelwagen kommt um acht Uhr.', exampleRu: 'Мебельный фургон приедет в восемь часов.' },
  { de: 'Hammer', article: 'der', plural: '-¨', pos: 'noun', ru: 'молоток', example: 'Hast du einen Hammer? Ich möchte ein Bild aufhängen.', exampleRu: 'У тебя есть молоток? Я хочу повесить картину.' },
  { de: 'Nagel', article: 'der', plural: '-¨', pos: 'noun', ru: 'гвоздь', example: 'Das Bild hängt an einem Nagel.', exampleRu: 'Картина висит на гвозде.' },
  { de: 'Bohrmaschine', article: 'die', plural: '-n', pos: 'noun', ru: 'дрель', example: 'Am Sonntag darf man keine Bohrmaschine benutzen.', exampleRu: 'В воскресенье нельзя пользоваться дрелью.' },
  { de: 'Werkzeug', article: 'das', plural: '-e', pos: 'noun', ru: 'инструмент(ы)', example: 'Das Werkzeug liegt im Keller.', exampleRu: 'Инструменты лежат в подвале.' },
  { de: 'zusammenbauen', forms: 'baut zusammen, hat zusammengebaut', pos: 'verb', ru: 'собирать (мебель)', example: 'Mein Sohn hat den Schrank zusammengebaut.', exampleRu: 'Мой сын собрал шкаф.' },
  { de: 'umstellen', forms: 'stellt um, hat umgestellt', pos: 'verb', ru: 'переставлять', example: 'Lass uns das Sofa umstellen!', exampleRu: 'Давай переставим диван!' },
  { de: 'schwer', pos: 'adj', ru: 'тяжёлый; трудный', example: 'Die Kiste mit den Büchern ist sehr schwer.', exampleRu: 'Ящик с книгами очень тяжёлый.' },
  { de: 'leicht', pos: 'adj', ru: 'лёгкий', example: 'Diese Kiste ist leicht, die kann ich allein tragen.', exampleRu: 'Этот ящик лёгкий, его я донесу сам.' },
  { de: 'voll', pos: 'adj', ru: 'полный', example: 'Der Keller ist schon ganz voll.', exampleRu: 'Подвал уже совсем полный.' },
];
