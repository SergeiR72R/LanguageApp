import type { VocabItem } from '../../types';

// Word bank A2 · Unit 10 — Arbeit und Beruf
export const words: VocabItem[] = [
  // Arbeitszeit & Schichten
  { de: 'Frühschicht', article: 'die', plural: '-en', pos: 'noun', ru: 'утренняя смена', example: 'Die Frühschicht beginnt um sechs Uhr.', exampleRu: 'Утренняя смена начинается в шесть часов.', pronRu: 'ди ФРЮ:-шихьт' },
  { de: 'Spätschicht', article: 'die', plural: '-en', pos: 'noun', ru: 'вечерняя смена', example: 'Nächste Woche habe ich Spätschicht.', exampleRu: 'На следующей неделе у меня вечерняя смена.', pronRu: 'ди ШПЭТ-шихьт' },
  { de: 'Nachtschicht', article: 'die', plural: '-en', pos: 'noun', ru: 'ночная смена', example: 'Nach der Nachtschicht schlafe ich bis Mittag.', exampleRu: 'После ночной смены я сплю до обеда.', pronRu: 'ди НАХТ-шихьт' },
  { de: 'Schichtplan', article: 'der', plural: '-¨e', pos: 'noun', ru: 'график смен', example: 'Der neue Schichtplan hängt an der Tür.', exampleRu: 'Новый график смен висит на двери.' },
  { de: 'Vollzeit', article: 'die', plural: '–', pos: 'noun', ru: 'полный рабочий день (in Vollzeit arbeiten)', example: 'Ich arbeite in Vollzeit, 40 Stunden pro Woche.', exampleRu: 'Я работаю полный день, 40 часов в неделю.' },
  { de: 'Mittagspause', article: 'die', plural: '-n', pos: 'noun', ru: 'обеденный перерыв', example: 'In der Mittagspause gehe ich kurz spazieren.', exampleRu: 'В обеденный перерыв я ненадолго выхожу погулять.' },
  { de: 'Urlaubstag', article: 'der', plural: '-e', pos: 'noun', ru: 'день отпуска', example: 'Ich habe 28 Urlaubstage im Jahr.', exampleRu: 'У меня 28 дней отпуска в год.' },
  { de: 'Probezeit', article: 'die', plural: '-en', pos: 'noun', ru: 'испытательный срок', example: 'Die Probezeit dauert sechs Monate.', exampleRu: 'Испытательный срок длится шесть месяцев.', pronRu: 'ди ПРО:-бэ-цайт' },
  { de: 'sich krankmelden', forms: 'meldet sich krank, hat sich krankgemeldet', pos: 'verb', ru: 'сообщить на работу о болезни', example: 'Wenn du Fieber hast, musst du dich krankmelden.', exampleRu: 'Если у тебя температура, ты должен сообщить о болезни.' },
  { de: 'tauschen', forms: 'tauscht, hat getauscht', pos: 'verb', ru: 'менять(ся), обменивать', example: 'Kann ich am Freitag die Schicht mit dir tauschen?', exampleRu: 'Можно мне в пятницу поменяться с тобой сменой?' },

  // Geld & Vertrag
  { de: 'Lohn', article: 'der', plural: '-¨e', pos: 'noun', ru: 'заработная плата (часто почасовая)', example: 'Der Lohn kommt immer am Monatsende.', exampleRu: 'Зарплата всегда приходит в конце месяца.' },
  { de: 'Stundenlohn', article: 'der', plural: '-¨e', pos: 'noun', ru: 'почасовая оплата', example: 'Der Stundenlohn ist 14 Euro.', exampleRu: 'Почасовая оплата — 14 евро.' },
  { de: 'Vertrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'договор, контракт', example: 'Morgen unterschreibe ich meinen Vertrag.', exampleRu: 'Завтра я подписываю свой договор.', pronRu: 'дер фэр-ТРА:К' },
  { de: 'brutto', pos: 'adv', ru: 'брутто (до вычета налогов)', example: 'Ich verdiene 2500 Euro brutto.', exampleRu: 'Я зарабатываю 2500 евро брутто.' },
  { de: 'netto', pos: 'adv', ru: 'нетто, «на руки» (после вычета налогов)', example: 'Netto bekomme ich ungefähr 1800 Euro.', exampleRu: 'На руки я получаю примерно 1800 евро.' },
  { de: 'Minijob', article: 'der', plural: '-s', pos: 'noun', ru: 'мини-работа (подработка с небольшой зарплатой)', example: 'Am Wochenende hat sie einen Minijob in einem Café.', exampleRu: 'По выходным у неё подработка в кафе.' },
  { de: 'arbeitslos', pos: 'adj', ru: 'безработный', example: 'Er war ein Jahr arbeitslos, jetzt hat er wieder Arbeit.', exampleRu: 'Он год был безработным, теперь у него снова есть работа.' },
  { de: 'Jobcenter', article: 'das', plural: '-', pos: 'noun', ru: 'джобцентр (служба занятости)', example: 'Morgen habe ich einen Termin im Jobcenter.', exampleRu: 'Завтра у меня приём в джобцентре.', pronRu: 'дас ДЖОП-сэн-та' },

  // Bewerbung
  { de: 'Unterlagen', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'документы, бумаги', example: 'Bitte bringen Sie alle Unterlagen mit.', exampleRu: 'Пожалуйста, принесите все документы.', pronRu: 'ди УН-та-ла:-ген' },
  { de: 'Anschreiben', article: 'das', plural: '-', pos: 'noun', ru: 'сопроводительное письмо (к заявлению о работе)', example: 'Im Anschreiben schreibe ich, warum ich die Stelle möchte.', exampleRu: 'В сопроводительном письме я пишу, почему хочу эту должность.' },
  { de: 'Berufserfahrung', article: 'die', plural: '-en', pos: 'noun', ru: 'опыт работы', example: 'Haben Sie Berufserfahrung als Fahrer?', exampleRu: 'У вас есть опыт работы водителем?' },
  { de: 'Arbeitsagentur', article: 'die', plural: '-en', pos: 'noun', ru: 'агентство по труду (биржа труда)', example: 'Bei der Arbeitsagentur gibt es viele Stellenangebote.', exampleRu: 'В агентстве по труду много предложений работы.' },
  { de: 'Arbeitsplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'рабочее место', example: 'Mein Arbeitsplatz ist direkt am Fenster.', exampleRu: 'Моё рабочее место прямо у окна.' },
  { de: 'Aufgabe', article: 'die', plural: '-n', pos: 'noun', ru: 'задача, задание', example: 'Meine wichtigste Aufgabe ist die Arbeit mit Kunden.', exampleRu: 'Моя самая важная задача — работа с клиентами.' },
  { de: 'Team', article: 'das', plural: '-s', pos: 'noun', ru: 'команда, коллектив', example: 'Unser Team ist klein, aber sehr nett.', exampleRu: 'Наша команда маленькая, но очень дружная.', pronRu: 'дас ТИ:М' },
  { de: 'Leiter', article: 'der', plural: '-', pos: 'noun', ru: 'руководитель (die Leiterin — руководительница)', example: 'Der Leiter der Abteilung heißt Herr Krause.', exampleRu: 'Руководителя отдела зовут господин Краузе.' },
  { de: 'Teamleiter', article: 'der', plural: '-', pos: 'noun', ru: 'руководитель группы, бригадир', example: 'Wenn du Fragen hast, frag den Teamleiter.', exampleRu: 'Если у тебя есть вопросы, спроси бригадира.' },
  { de: 'Arbeitnehmer', article: 'der', plural: '-', pos: 'noun', ru: 'работник, наёмный работник', example: 'Die Firma hat 200 Arbeitnehmer.', exampleRu: 'На фирме 200 работников.' },

  // Arbeitsorte
  { de: 'Lager', article: 'das', plural: '-', pos: 'noun', ru: 'склад', example: 'Im Lager ist es im Winter kalt.', exampleRu: 'На складе зимой холодно.', pronRu: 'дас ЛА:-га' },
  { de: 'Werkstatt', article: 'die', plural: '-¨en', pos: 'noun', ru: 'мастерская', example: 'Mein Auto ist gerade in der Werkstatt.', exampleRu: 'Моя машина сейчас в мастерской.', pronRu: 'ди ВЭРК-штат' },
  { de: 'Baustelle', article: 'die', plural: '-n', pos: 'noun', ru: 'стройка, строительная площадка', example: 'Mein Bruder arbeitet auf einer Baustelle.', exampleRu: 'Мой брат работает на стройке.', pronRu: 'ди БАУ-штэ-ле' },
  { de: 'Fabrik', article: 'die', plural: '-en', pos: 'noun', ru: 'фабрика, завод', example: 'In dieser Fabrik macht man Autoteile.', exampleRu: 'На этом заводе делают автозапчасти.', pronRu: 'ди фа-БРИ:К' },
  { de: 'Praxis', article: 'die', plural: 'die Praxen', pos: 'noun', ru: 'практика, приёмная (врача)', example: 'Sie arbeitet an der Rezeption in einer Praxis.', exampleRu: 'Она работает на ресепшене во врачебной практике.' },
  { de: 'Kantine', article: 'die', plural: '-n', pos: 'noun', ru: 'столовая (на работе)', example: 'Das Essen in der Kantine ist billig.', exampleRu: 'Еда в столовой дешёвая.', pronRu: 'ди кан-ТИ:-не' },
  { de: 'Kasse', article: 'die', plural: '-n', pos: 'noun', ru: 'касса', example: 'Heute sitze ich an der Kasse.', exampleRu: 'Сегодня я сижу на кассе.' },

  // Berufe
  { de: 'Handwerker', article: 'der', plural: '-', pos: 'noun', ru: 'ремесленник, мастер (сантехник, плотник и т. п.)', example: 'Ein Handwerker repariert heute unsere Heizung.', exampleRu: 'Сегодня мастер ремонтирует наше отопление.' },
  { de: 'Elektriker', article: 'der', plural: '-', pos: 'noun', ru: 'электрик', example: 'Der Elektriker kommt morgen um acht.', exampleRu: 'Электрик придёт завтра в восемь.', pronRu: 'дер э-ЛЕК-три-ка' },
  { de: 'Maler', article: 'der', plural: '-', pos: 'noun', ru: 'маляр; художник', example: 'Der Maler streicht die Wände weiß.', exampleRu: 'Маляр красит стены в белый цвет.' },
  { de: 'Mechaniker', article: 'der', plural: '-', pos: 'noun', ru: 'механик', example: 'Der Mechaniker hat mein Auto schnell repariert.', exampleRu: 'Механик быстро починил мою машину.', pronRu: 'дер мэ-ХА:-ни-ка' },
  { de: 'Friseur', article: 'der', plural: '-e', pos: 'noun', ru: 'парикмахер (die Friseurin)', example: 'Am Samstag gehe ich zum Friseur.', exampleRu: 'В субботу я иду к парикмахеру.', pronRu: 'дер фри-ЗЁ:Р' },
  { de: 'Busfahrer', article: 'der', plural: '-', pos: 'noun', ru: 'водитель автобуса', example: 'Der Busfahrer ist immer freundlich.', exampleRu: 'Водитель автобуса всегда приветлив.' },
  { de: 'Reinigungskraft', article: 'die', plural: '-¨e', pos: 'noun', ru: 'уборщик, уборщица', example: 'Die Reinigungskraft kommt jeden Abend ins Büro.', exampleRu: 'Уборщица приходит в офис каждый вечер.', pronRu: 'ди РАЙ-ни-гунгс-крафт' },
  { de: 'Lagerarbeiter', article: 'der', plural: '-', pos: 'noun', ru: 'работник склада, кладовщик', example: 'Als Lagerarbeiter muss man viel tragen.', exampleRu: 'Работнику склада приходится много носить.' },
  { de: 'Kassierer', article: 'der', plural: '-', pos: 'noun', ru: 'кассир (die Kassiererin)', example: 'Die Kassiererin gibt mir den Kassenzettel.', exampleRu: 'Кассирша даёт мне чек.', pronRu: 'дер ка-СИ:-ра' },
  { de: 'Altenpfleger', article: 'der', plural: '-', pos: 'noun', ru: 'работник по уходу за пожилыми (die Altenpflegerin)', example: 'In Deutschland sucht man dringend Altenpfleger.', exampleRu: 'В Германии срочно ищут работников по уходу за пожилыми.' },
  { de: 'Programmierer', article: 'der', plural: '-', pos: 'noun', ru: 'программист', example: 'Mein Sohn ist Programmierer und arbeitet oft zu Hause.', exampleRu: 'Мой сын — программист и часто работает дома.' },
  { de: 'Kunde', article: 'der', plural: '-n', pos: 'noun', ru: 'клиент, покупатель (die Kundin)', example: 'Der Kunde möchte mit dem Chef sprechen.', exampleRu: 'Клиент хочет поговорить с начальником.' },

  // Tätigkeiten & Eigenschaften
  { de: 'bedienen', forms: 'bedient, hat bedient', pos: 'verb', ru: 'обслуживать (клиентов); управлять (машиной)', example: 'Im Restaurant bediene ich die Gäste.', exampleRu: 'В ресторане я обслуживаю гостей.' },
  { de: 'beraten', forms: 'berät, hat beraten', pos: 'verb', ru: 'консультировать, давать совет', example: 'Die Verkäuferin berät die Kunden.', exampleRu: 'Продавщица консультирует покупателей.' },
  { de: 'liefern', forms: 'liefert, hat geliefert', pos: 'verb', ru: 'доставлять, поставлять', example: 'Wir liefern die Möbel am Montag.', exampleRu: 'Мы доставим мебель в понедельник.' },
  { de: 'reparieren', forms: 'repariert, hat repariert', pos: 'verb', ru: 'ремонтировать, чинить', example: 'Kannst du mein Fahrrad reparieren?', exampleRu: 'Ты можешь починить мой велосипед?' },
  { de: 'flexibel', pos: 'adj', ru: 'гибкий (готовый работать в разное время)', example: 'Ich bin flexibel und kann auch am Wochenende arbeiten.', exampleRu: 'Я гибок и могу работать и по выходным.', pronRu: 'флэк-СИ:-бель' },
  { de: 'hilfsbereit', pos: 'adj', ru: 'отзывчивый, готовый помочь', example: 'Meine Kollegen sind sehr hilfsbereit.', exampleRu: 'Мои коллеги очень отзывчивые.' },
];
