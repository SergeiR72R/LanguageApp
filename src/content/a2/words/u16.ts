import type { VocabItem } from '../../types';

// Word bank A2 · Unit 16 — Sport und Freizeit
export const words: VocabItem[] = [
  // Menschen im Sport
  { de: 'Spieler', article: 'der', plural: '-', pos: 'noun', ru: 'игрок (die Spielerin)', example: 'In einer Fußballmannschaft spielen elf Spieler.', exampleRu: 'В футбольной команде играют одиннадцать игроков.' },
  { de: 'Sportler', article: 'der', plural: '-', pos: 'noun', ru: 'спортсмен (die Sportlerin)', example: 'Viele Sportler trainieren jeden Tag.', exampleRu: 'Многие спортсмены тренируются каждый день.', pronRu: 'дер ШПОРТ-ла' },
  { de: 'Fan', article: 'der', plural: '-s', pos: 'noun', ru: 'болельщик, фанат', example: 'Mein Bruder ist ein großer Fan von unserem Fußballverein.', exampleRu: 'Мой брат — большой болельщик нашего футбольного клуба.', pronRu: 'дер ФЭН' },
  { de: 'Torwart', article: 'der', plural: '-e', pos: 'noun', ru: 'вратарь', example: 'Unser Torwart hat heute sehr gut gespielt.', exampleRu: 'Наш вратарь сегодня очень хорошо сыграл.', pronRu: 'дер ТО:А-варт' },

  // Spiel und Ergebnis
  { de: 'Halbzeit', article: 'die', plural: '-en', pos: 'noun', ru: 'тайм; перерыв между таймами', example: 'In der Halbzeit hat es angefangen zu regnen.', exampleRu: 'Во время перерыва начался дождь.' },
  { de: 'schießen', forms: 'schießt, hat geschossen', pos: 'verb', ru: 'стрелять; бить (по мячу)', example: 'Er hat den Ball direkt ins Tor geschossen.', exampleRu: 'Он ударил мяч прямо в ворота.', pronRu: 'ШИ:-сэн' },
  { de: 'zuschauen', forms: 'schaut zu, hat zugeschaut', pos: 'verb', ru: 'смотреть, наблюдать (как зритель)', example: 'Ich spiele nicht mit, ich schaue nur zu.', exampleRu: 'Я не играю, я только смотрю.' },

  // Orte
  { de: 'Sporthalle', article: 'die', plural: '-n', pos: 'noun', ru: 'спортивный зал', example: 'Im Winter trainieren wir in der Sporthalle.', exampleRu: 'Зимой мы тренируемся в спортзале.' },
  { de: 'Sportplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'спортивная площадка', example: 'Hinter der Schule ist ein großer Sportplatz.', exampleRu: 'За школой есть большая спортивная площадка.' },
  { de: 'Hallenbad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'крытый бассейн', example: 'Das Hallenbad hat auch im Winter geöffnet.', exampleRu: 'Крытый бассейн открыт и зимой.' },
  { de: 'Freibad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'открытый бассейн', example: 'Im Sommer gehen wir oft ins Freibad.', exampleRu: 'Летом мы часто ходим в открытый бассейн.' },
  { de: 'Tennisplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'теннисный корт', example: 'Wir haben den Tennisplatz für eine Stunde gemietet.', exampleRu: 'Мы сняли теннисный корт на час.' },

  // Sportarten und Aktivitäten
  { de: 'Yoga', article: 'das', plural: '–', pos: 'noun', ru: 'йога', example: 'Seit einem Jahr mache ich jeden Morgen Yoga.', exampleRu: 'Уже год я каждое утро занимаюсь йогой.', pronRu: 'дас ЙО:-га' },
  { de: 'Gymnastik', article: 'die', plural: '–', pos: 'noun', ru: 'гимнастика, зарядка', example: 'Meine Mutter macht zweimal pro Woche Gymnastik.', exampleRu: 'Моя мама два раза в неделю занимается гимнастикой.' },
  { de: 'Tischtennis', article: 'das', plural: '–', pos: 'noun', ru: 'настольный теннис', example: 'In der Pause spielen wir oft Tischtennis.', exampleRu: 'На перерыве мы часто играем в настольный теннис.' },
  { de: 'Handball', article: 'der', plural: '–', pos: 'noun', ru: 'гандбол', example: 'Handball ist in Deutschland sehr beliebt.', exampleRu: 'Гандбол в Германии очень популярен.' },
  { de: 'Brettspiel', article: 'das', plural: '-e', pos: 'noun', ru: 'настольная игра', example: 'Am Sonntagabend spielen wir oft Brettspiele.', exampleRu: 'В воскресенье вечером мы часто играем в настольные игры.' },
  { de: 'Chor', article: 'der', plural: '-¨e', pos: 'noun', ru: 'хор', example: 'Meine Frau singt seit zehn Jahren in einem Chor.', exampleRu: 'Моя жена уже десять лет поёт в хоре.', pronRu: 'дер КО:А' },
  { de: 'Radtour', article: 'die', plural: '-en', pos: 'noun', ru: 'велосипедная прогулка, велопоход', example: 'Am Wochenende machen wir eine Radtour an den See.', exampleRu: 'На выходных мы едем на велосипедах к озеру.' },
  { de: 'Wanderung', article: 'die', plural: '-en', pos: 'noun', ru: 'поход (пешком)', example: 'Die Wanderung hat fünf Stunden gedauert.', exampleRu: 'Поход длился пять часов.' },
  { de: 'reiten', forms: 'reitet, ist geritten', pos: 'verb', ru: 'ездить верхом', example: 'Meine Tochter reitet seit drei Jahren.', exampleRu: 'Моя дочь уже три года занимается верховой ездой.' },
  { de: 'segeln', forms: 'segelt, ist gesegelt', pos: 'verb', ru: 'ходить под парусом', example: 'Im Urlaub sind wir auf dem See gesegelt.', exampleRu: 'В отпуске мы ходили под парусом по озеру.', pronRu: 'ЗЭ:-гэльн' },
  { de: 'angeln', forms: 'angelt, hat geangelt', pos: 'verb', ru: 'ловить рыбу удочкой', example: 'Mein Vater angelt gern am Fluss.', exampleRu: 'Мой отец любит ловить рыбу на реке.' },

  // Körper und Training
  { de: 'schwitzen', forms: 'schwitzt, hat geschwitzt', pos: 'verb', ru: 'потеть', example: 'Beim Joggen schwitze ich sehr.', exampleRu: 'Когда бегаю, я сильно потею.' },
  { de: 'sich verletzen', forms: 'verletzt sich, hat sich verletzt', pos: 'verb', ru: 'пораниться, получить травму', example: 'Er hat sich beim Fußball am Knie verletzt.', exampleRu: 'Он повредил колено во время футбола.' },
  { de: 'Verletzung', article: 'die', plural: '-en', pos: 'noun', ru: 'травма, ранение', example: 'Sie hat eine Verletzung am Knie und kann nicht spielen.', exampleRu: 'У неё травма колена, и она не может играть.' },
  { de: 'anstrengend', pos: 'adj', ru: 'утомительный, тяжёлый', example: 'Das Training heute war sehr anstrengend.', exampleRu: 'Сегодняшняя тренировка была очень тяжёлой.' },
  { de: 'aktiv', pos: 'adj', ru: 'активный', example: 'Auch im Alter möchte ich aktiv bleiben.', exampleRu: 'И в старости я хочу оставаться активным.' },
  { de: 'Sportschuh', article: 'der', plural: '-e', pos: 'noun', ru: 'спортивная обувь, кроссовка', example: 'Für die Halle brauchst du saubere Sportschuhe.', exampleRu: 'Для зала нужна чистая спортивная обувь.' },

  // Verein und Kurs
  { de: 'Mitgliedschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'членство', example: 'Die Mitgliedschaft im Verein kostet 15 Euro im Monat.', exampleRu: 'Членство в клубе стоит 15 евро в месяц.' },
  { de: 'Beitrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'взнос', example: 'Für Kinder ist der Beitrag billiger.', exampleRu: 'Для детей взнос дешевле.' },
  { de: 'Ermäßigung', article: 'die', plural: '-en', pos: 'noun', ru: 'скидка, льгота', example: 'Rentner bekommen eine Ermäßigung von 20 Prozent.', exampleRu: 'Пенсионеры получают скидку 20 процентов.', pronRu: 'ди эр-МЭ:-си-гунг' },
  { de: 'Probetraining', article: 'das', plural: '-s', pos: 'noun', ru: 'пробная тренировка', example: 'Das erste Probetraining ist kostenlos.', exampleRu: 'Первая пробная тренировка бесплатна.' },

  // Zeitangaben
  { de: 'seitdem', pos: 'adv', ru: 'с тех пор', example: 'Ich war im Mai beim Arzt. Seitdem gehe ich jeden Tag spazieren.', exampleRu: 'В мае я был у врача. С тех пор я каждый день гуляю.' },
  { de: 'inzwischen', pos: 'adv', ru: 'тем временем; теперь уже', example: 'Am Anfang war Yoga schwer, aber inzwischen macht es mir Spaß.', exampleRu: 'Сначала йога была трудной, но теперь она мне нравится.' },
  { de: 'zurzeit', pos: 'adv', ru: 'в настоящее время, сейчас', example: 'Zurzeit kann ich nicht trainieren, mein Fuß tut weh.', exampleRu: 'Сейчас я не могу тренироваться, у меня болит нога.' },
  { de: 'wöchentlich', pos: 'adj', ru: 'еженедельный; еженедельно', example: 'Der Kurs findet wöchentlich statt, immer am Freitag.', exampleRu: 'Курс проходит еженедельно, всегда по пятницам.' },
  // Weitere Sportarten und Wettkämpfe
  { de: 'Eishockey', article: 'das', plural: '–', pos: 'noun', ru: 'хоккей (на льду)', example: 'In Russland ist Eishockey sehr beliebt.', exampleRu: 'В России хоккей очень популярен.', pronRu: 'дас АЙС-хо-ки' },
  { de: 'Leichtathletik', article: 'die', plural: '–', pos: 'noun', ru: 'лёгкая атлетика', example: 'Meine Tochter macht seit einem Jahr Leichtathletik.', exampleRu: 'Моя дочь уже год занимается лёгкой атлетикой.', pronRu: 'ди ЛАЙХЬТ-ат-лэ:-тик' },
  { de: 'Lauf', article: 'der', plural: '-¨e', pos: 'noun', ru: 'забег, бег', example: 'Am Sonntag gibt es in der Stadt einen Lauf über zehn Kilometer.', exampleRu: 'В воскресенье в городе забег на десять километров.' },
  { de: 'Marathon', article: 'der', plural: '-s', pos: 'noun', ru: 'марафон', example: 'Mein Kollege ist schon dreimal einen Marathon gelaufen.', exampleRu: 'Мой коллега уже три раза пробежал марафон.' },
  { de: 'Sieger', article: 'der', plural: '-', pos: 'noun', ru: 'победитель (die Siegerin)', example: 'Der Sieger bekommt einen Pokal.', exampleRu: 'Победитель получает кубок.', pronRu: 'дер ЗИ:-га' },
  { de: 'Pokal', article: 'der', plural: '-e', pos: 'noun', ru: 'кубок', example: 'Im Vereinsheim stehen viele alte Pokale.', exampleRu: 'В клубном доме стоит много старых кубков.', pronRu: 'дер по-КА:ЛЬ' },
  { de: 'Medaille', article: 'die', plural: '-n', pos: 'noun', ru: 'медаль', example: 'Beim Schwimmen hat sie eine Medaille gewonnen.', exampleRu: 'По плаванию она выиграла медаль.', pronRu: 'ди мэ-ДАЛЬ-йе' },
  { de: 'unentschieden', pos: 'adv', ru: 'вничью', example: 'Das Spiel ist unentschieden ausgegangen: zwei zu zwei.', exampleRu: 'Игра закончилась вничью: два — два.', pronRu: 'УН-энт-ши:-дэн' },
  { de: 'Schläger', article: 'der', plural: '-', pos: 'noun', ru: 'ракетка; клюшка', example: 'Für Tennis brauchst du einen guten Schläger.', exampleRu: 'Для тенниса тебе нужна хорошая ракетка.', pronRu: 'дер ШЛЭ:-га' },
  { de: 'Tanzkurs', article: 'der', plural: '-e', pos: 'noun', ru: 'курс танцев', example: 'Meine Frau und ich machen zusammen einen Tanzkurs.', exampleRu: 'Мы с женой вместе ходим на курс танцев.' },
  { de: 'springen', forms: 'springt, ist gesprungen', pos: 'verb', ru: 'прыгать', example: 'Die Kinder springen ins Wasser.', exampleRu: 'Дети прыгают в воду.' },
  { de: 'tauchen', forms: 'taucht, ist getaucht', pos: 'verb', ru: 'нырять', example: 'Im Urlaub sind wir im Meer getaucht.', exampleRu: 'В отпуске мы ныряли в море.' },
  { de: 'mitmachen', forms: 'macht mit, hat mitgemacht', pos: 'verb', ru: 'участвовать, присоединяться', example: 'Wir spielen Volleyball. Willst du mitmachen?', exampleRu: 'Мы играем в волейбол. Хочешь с нами?' },
  { de: 'Muskel', article: 'der', plural: '-n', pos: 'noun', ru: 'мышца', example: 'Nach dem Training tun mir alle Muskeln weh.', exampleRu: 'После тренировки у меня болят все мышцы.' },
  { de: 'monatlich', pos: 'adj', ru: 'ежемесячный; ежемесячно', example: 'Den Beitrag bezahlt man monatlich.', exampleRu: 'Взнос платят ежемесячно.' },
];
