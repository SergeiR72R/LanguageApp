import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Die Tasche ___ Lehrerin liegt noch im Klassenzimmer.',
      options: ['der', 'des', 'die', 'dem'],
      answer: 0,
      explanationRu: 'die Lehrerin — женский род. Определённый артикль в Genitiv женского рода — der: die Tasche der Lehrerin.',
    },
    {
      type: 'choice',
      prompt: 'Das Spielzeug ___ Kindes ist kaputt.',
      options: ['der', 'des', 'dem', 'die'],
      answer: 1,
      explanationRu: 'das Kind — средний род. Genitiv: des Kindes (артикль des + окончание -es у существительного).',
    },
    {
      type: 'choice',
      prompt: 'Wie heißt eigentlich der Mann ___ Cousine?',
      options: ['deines', 'deiner', 'deinem', 'deine'],
      answer: 1,
      explanationRu: 'die Cousine — женский род → deiner Cousine. Ловушка: deines — только для мужского и среднего рода.',
    },
    {
      type: 'choice',
      prompt: 'Welche Form ist richtig?',
      options: ['die Farbe des Haus', 'die Farbe des Hauses', 'die Farbe der Hauses'],
      answer: 1,
      explanationRu: 'das Haus оканчивается на -s, поэтому в Genitiv обязательно -es: des Hauses.',
    },
    {
      type: 'choice',
      prompt: 'Das ist ___ Fahrrad. (Max)',
      options: ['Max’s', 'Max’', 'Maxs', 'des Max'],
      answer: 1,
      explanationRu: 'Если имя оканчивается на -s, -ß, -x, -z, в Genitiv ставится только апостроф: Max’ Fahrrad. Апостроф + s, как в английском, — ошибка.',
    },
    {
      type: 'choice',
      prompt: 'Mit ___ Auto seid ihr nach Italien gefahren?',
      options: ['wem', 'wessen', 'wer', 'wen'],
      answer: 1,
      explanationRu: 'Спрашиваем о владельце машины («на чьей машине?») → wessen. Предлог mit относится к слову Auto, а не к вопросительному слову.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt?',
      options: [
        'Das ist die Meinung Experten.',
        'Das ist die Meinung von Experten.',
        'Das ist die Meinung Expertens.',
      ],
      answer: 1,
      explanationRu: 'Если у существительного во множественном числе нет артикля, Genitiv не виден — тогда обязательно von + Dativ: die Meinung von Experten.',
    },
    {
      type: 'gap',
      prompt: 'Seit dem Sommer wohnen wir im Haus ___ Eltern.',
      answers: ['unserer'],
      hintRu: 'unser',
      explanationRu: 'Eltern — множественное число. Притяжательный артикль в Genitiv мн. числа: unserer Eltern.',
    },
    {
      type: 'gap',
      prompt: 'Das ist ein Foto ___ Hochzeit in Italien.',
      answers: ['einer'],
      hintRu: 'eine',
      explanationRu: 'die Hochzeit — женский род. Неопределённый артикль в Genitiv: einer Hochzeit.',
    },
    {
      type: 'gap',
      prompt: 'Das ist ___ Zimmer, und das daneben ist das Zimmer ihres Bruders.',
      answers: ['Lisas'],
      hintRu: 'Lisa',
      explanationRu: 'Имя в Genitiv стоит перед существительным и получает -s без апострофа: Lisas Zimmer.',
    },
    {
      type: 'gap',
      prompt: 'Das Fahrrad meines ___ steht noch in unserer Garage.',
      answers: ['Neffen'],
      hintRu: 'der Neffe',
      explanationRu: 'Ловушка: Neffe относится к n-склонению. Во всех падежах, кроме Nominativ, — окончание -n: meines Neffen (не «Neffes»).',
    },
    {
      type: 'gap',
      prompt: 'Kennst du schon die neue Freundin meines ___ Bruders?',
      answers: ['älteren'],
      hintRu: 'älter',
      explanationRu: 'Прилагательное в Genitiv после артикля получает окончание -en: meines älteren Bruders.',
    },
    {
      type: 'gap',
      prompt: 'Während ___ Essens hat Opa wieder alte Geschichten erzählt.',
      answers: ['des'],
      hintRu: 'das Essen',
      explanationRu: 'Предлог während требует Genitiv: während des Essens. Подробнее о предлогах с Genitiv — в юните 15.',
    },
    {
      type: 'gap',
      prompt: 'Meine Großeltern ___ 1971 aus der Türkei nach Deutschland gekommen.',
      answers: ['sind'],
      explanationRu: 'Повторение юнита 1: kommen — глагол движения, Perfekt образуется с sein: sind gekommen.',
    },
    {
      type: 'gap',
      prompt: 'Von meiner Oma habe ich einen wunderschönen ___ Ring geerbt.',
      answers: ['alten'],
      hintRu: 'alt',
      explanationRu: 'Повторение юнита 6: einen + прилагательное в Akkusativ мужского рода → -en: einen alten Ring. Оба прилагательных получают одинаковое окончание.',
    },
    {
      type: 'order',
      words: ['Wessen', 'Handy', 'liegt', 'da', 'auf', 'dem', 'Tisch?'],
      translationRu: 'Чей телефон лежит там на столе?',
      explanationRu: 'wessen стоит вместе с существительным на первом месте (Wessen Handy), затем спрягаемый глагол.',
    },
    {
      type: 'order',
      words: ['Die', 'Eltern', 'meines', 'Mannes', 'wohnen', 'seit', 'zwei', 'Jahren', 'bei', 'uns.'],
      translationRu: 'Родители моего мужа уже два года живут у нас.',
      explanationRu: 'Определение в Genitiv (meines Mannes) стоит сразу после существительного и вместе с ним образует подлежащее на первом месте.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените von + Dativ на Genitiv.',
      prompt: 'Der Garten von unseren Nachbarn ist wunderschön.',
      answers: ['Der Garten unserer Nachbarn ist wunderschön.'],
      explanationRu: 'von unseren Nachbarn (Dativ мн. ч.) → unserer Nachbarn (Genitiv мн. ч.). Окончание -n у Nachbarn остаётся.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение: поставьте имя в Genitiv перед существительным.',
      prompt: 'Die Wohnung von Thomas ist sehr modern.',
      answers: ['Thomas’ Wohnung ist sehr modern.', "Thomas' Wohnung ist sehr modern."],
      explanationRu: 'Имя оканчивается на -s, поэтому в Genitiv только апостроф: Thomas’ Wohnung. Артикль die исчезает.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините два предложения в одно с помощью Genitiv.',
      prompt: 'Mein Onkel hat einen Sohn. Der Sohn studiert in Wien.',
      answers: ['Der Sohn meines Onkels studiert in Wien.'],
      explanationRu: 'Чей сын? — meines Onkels. Onkel — многосложное слово мужского рода → окончание -s.',
    },
  ],
  reading: [
    {
      title: 'Wer waren meine Vorfahren?',
      textType: 'Blogbeitrag',
      texts: [
        {
          body: `Hallo zusammen! Mein Name ist Olga, ich bin 34 und lebe in Hannover. Heute möchte ich euch von meinem neuen Hobby erzählen: der Ahnenforschung.

Angefangen hat alles letzten Winter. Nach dem Tod meiner Großmutter haben wir ihre Wohnung aufgeräumt. In einem alten Koffer haben wir Briefe, Fotos und sogar das Hochzeitsfoto ihrer Eltern gefunden. Die Briefe waren auf Deutsch geschrieben, aber in einer alten Schrift, die ich nicht lesen konnte. Zum Glück gibt es an der Volkshochschule einen Kurs, in dem man diese Schrift lernt. Drei Monate lang habe ich jeden Dienstag geübt.

Was ich in den Briefen gelesen habe, hat mich wirklich überrascht. Die Familie meiner Großmutter ist vor über 200 Jahren aus Hessen an die Wolga ausgewandert. Dort haben sie als Bauern gelebt. Mein Urgroßvater war sogar Lehrer in einer deutschen Dorfschule. Ich wusste zwar, dass wir deutsche Wurzeln haben, aber über die Geschichte unserer Vorfahren hat in unserer Familie nie jemand gesprochen.

Inzwischen habe ich einen Stammbaum mit fast 80 Personen. Viele Informationen habe ich in Online-Archiven gefunden, manche Daten aber auch durch E-Mails an Kirchengemeinden in Hessen. Besonders spannend war eine Antwort aus einem kleinen Dorf bei Marburg: Dort steht das Haus meiner Vorfahren noch heute!

Im Sommer bin ich mit meiner Mutter hingefahren. Die heutigen Besitzer waren sehr freundlich und haben uns sogar zum Kaffee eingeladen. Meine Mutter hat geweint – vor Freude, sagt sie.

Mein Tipp für alle, die mit der Familienforschung anfangen wollen: Fragt zuerst die älteren Verwandten! Ich bereue sehr, dass ich meiner Oma so wenige Fragen gestellt habe, solange sie noch lebte.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Olga hat die Briefe in der Wohnung ihrer Großmutter gefunden.', answer: true, explanationRu: 'После смерти бабушки они убирали её квартиру и нашли в старом чемодане письма и фотографии.' },
            { kind: 'tf', statement: 'Olga konnte die Briefe sofort lesen.', answer: false, explanationRu: 'Письма были написаны старым шрифтом, «die ich nicht lesen konnte»; она три месяца училась на курсе.' },
            { kind: 'tf', statement: 'In Olgas Familie wurde oft über die Geschichte der Vorfahren gesprochen.', answer: false, explanationRu: '«…über die Geschichte unserer Vorfahren hat in unserer Familie nie jemand gesprochen».' },
            { kind: 'tf', statement: 'Olgas Urgroßvater hat an einer Schule unterrichtet.', answer: true, explanationRu: '«Mein Urgroßvater war sogar Lehrer in einer deutschen Dorfschule».' },
            { kind: 'tf', statement: 'Alle Informationen für den Stammbaum stammen aus dem Internet.', answer: false, explanationRu: 'Многое она нашла в онлайн-архивах, но некоторые данные — через письма в церковные общины Гессена.' },
            { kind: 'tf', statement: 'Olga findet es schade, dass sie ihrer Großmutter nicht mehr Fragen gestellt hat.', answer: true, explanationRu: '«Ich bereue sehr, dass ich meiner Oma so wenige Fragen gestellt habe…».' },
          ],
        },
      ],
    },
    {
      title: 'Oma und Opa als feste Babysitter?',
      textType: 'Leserbriefe',
      texts: [
        {
          label: 'Sabine, 38, Erfurt',
          body: 'Ohne meine Eltern könnte ich gar nicht Vollzeit arbeiten. Meine Mutter holt die Kinder dreimal pro Woche von der Schule ab und kocht für sie. Die Kinder lieben das, und ich weiß, dass sie in guten Händen sind. Eine bessere Betreuung gibt es nicht.',
        },
        {
          label: 'Heinz, 71, Bremen',
          body: 'Ich habe 45 Jahre gearbeitet und genieße jetzt meine Rente. Meine Frau und ich reisen gern und sind oft wochenlang unterwegs. Wenn ein Enkelkind krank ist, helfen wir natürlich sofort. Aber feste Termine jede Woche? Das möchten wir nicht mehr.',
        },
        {
          label: 'Laura, 29, München',
          body: 'Wir haben es ein Jahr lang probiert, aber es gab ständig Streit. Meine Schwiegermutter hat die Kinder mit Süßigkeiten verwöhnt und unsere Regeln nicht akzeptiert. Seit unser Sohn in die Kita geht, ist das Verhältnis zu ihr viel entspannter. Für uns ist das die bessere Lösung.',
        },
        {
          label: 'Mehmet, 45, Köln',
          body: 'In meiner Familie war es immer normal, dass die Großeltern auf die Kinder aufpassen. Ich selbst habe von meinem Opa mehr gelernt als in der Schule. Kinder brauchen den Kontakt zur älteren Generation, und regelmäßige Nachmittage bei Oma und Opa sind dafür ideal.',
        },
        {
          label: 'Gisela, 66, Rostock',
          body: 'Jeden Dienstag und Donnerstag hole ich meine zwei Enkelinnen vom Kindergarten ab. Wir backen, gehen in den Park oder lesen zusammen. Diese Nachmittage sind die schönsten der ganzen Woche! Ich finde, das hält mich jung – und meine Tochter kann in Ruhe arbeiten.',
        },
        {
          label: 'Tobias, 35, Stuttgart',
          body: 'Ich finde es falsch, dass so viele Familien die Großeltern als kostenloses Personal benutzen. Viele ältere Menschen sagen nicht Nein, weil sie ein schlechtes Gewissen haben. Der Staat muss für genug Kita-Plätze sorgen. Großeltern sollten Großeltern sein dürfen – nicht Babysitter.',
        },
        {
          label: 'Irina, 52, Leipzig',
          body: 'Bei uns wohnt meine Mutter im selben Haus, und sie kümmert sich jeden Nachmittag um meinen jüngsten Sohn. Natürlich gibt es manchmal unterschiedliche Meinungen über die Erziehung. Aber wir sprechen offen darüber, und unterm Strich profitieren alle drei Generationen davon.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte. Ist die Person für eine regelmäßige Kinderbetreuung durch die Großeltern?',
          instructionRu: 'Прочитайте тексты. Выступает ли человек за то, чтобы бабушки и дедушки регулярно присматривали за внуками?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            { kind: 'tf', statement: 'Sabine', answer: true, explanationRu: 'Без помощи родителей она не смогла бы работать полный день: «Eine bessere Betreuung gibt es nicht».' },
            { kind: 'tf', statement: 'Heinz', answer: false, explanationRu: 'Помогает только в экстренных случаях; «feste Termine jede Woche? Das möchten wir nicht mehr».' },
            { kind: 'tf', statement: 'Laura', answer: false, explanationRu: 'Пробовали год, но постоянно были ссоры; детский сад для них — лучшее решение.' },
            { kind: 'tf', statement: 'Mehmet', answer: true, explanationRu: 'Регулярные вечера у бабушки и дедушки, по его мнению, «dafür ideal».' },
            { kind: 'tf', statement: 'Gisela', answer: true, explanationRu: 'Дважды в неделю забирает внучек: «Diese Nachmittage sind die schönsten der ganzen Woche!»' },
            { kind: 'tf', statement: 'Tobias', answer: false, explanationRu: 'Бабушки и дедушки не должны быть бесплатной няней; государство должно обеспечить места в садиках.' },
            { kind: 'tf', statement: 'Irina', answer: true, explanationRu: 'Её мать каждый день присматривает за сыном, и «alle drei Generationen» от этого выигрывают.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Führung: Familienforschung im Stadtarchiv',
      kind: 'monolog',
      situation: 'Sie nehmen an einer Führung durch ein Stadtarchiv teil.',
      text: `Guten Tag, meine Damen und Herren, und herzlich willkommen im Stadtarchiv. Mein Name ist Petra Lohmann, ich arbeite seit fünfzehn Jahren hier, und ich zeige Ihnen heute, wie Sie bei uns etwas über die Geschichte Ihrer Familie herausfinden können.

Wir stehen jetzt im Lesesaal. Hier dürfen Sie alle Dokumente ansehen, aber bitte schreiben Sie nur mit Bleistift – Kugelschreiber sind im Lesesaal verboten. Jacken und Taschen lassen Sie bitte in den Schließfächern im Erdgeschoss.

Die meisten Besucher interessieren sich für die Melderegister. Dort steht, wer wann in welcher Wohnung gewohnt hat. So finden viele zum Beispiel die Adresse ihrer Großeltern oder Urgroßeltern. Die ältesten Register sind von 1850. Sehr beliebt sind auch die alten Adressbücher der Stadt, und die können Sie inzwischen sogar zu Hause am Computer lesen.

Für noch ältere Informationen brauchen Sie die Kirchenbücher. Die liegen aber nicht bei uns, sondern im Archiv der Kirche. Die Adresse bekommen Sie gleich am Infotisch.

Noch ein wichtiger Hinweis: Aus Datenschutzgründen dürfen Sie Dokumente über Personen, die noch leben, nicht einfach so ansehen. Wenn Sie zum Beispiel die Akte Ihres Vaters sehen möchten, brauchen Sie seine schriftliche Erlaubnis.

Kopien machen wir gern für Sie, eine Seite kostet fünfzig Cent. Fotos mit dem eigenen Handy sind kostenlos, aber bitte ohne Blitz.

So, und jetzt gehen wir zusammen in den Keller, wo die alten Akten liegen. Bitte bleiben Sie in der Gruppe.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören den Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите текст один раз. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist im Lesesaal nicht erlaubt?',
              options: ['mit Bleistift schreiben', 'Kugelschreiber benutzen', 'alte Dokumente ansehen'],
              answer: 1,
              explanationRu: '«Kugelschreiber sind im Lesesaal verboten».',
            },
            {
              kind: 'mc',
              question: 'Was findet man in den Melderegistern?',
              options: ['wer wann in welcher Wohnung gewohnt hat', 'Fotos von Familien aus der Stadt', 'Informationen aus der Zeit vor 1850'],
              answer: 0,
              explanationRu: '«Dort steht, wer wann in welcher Wohnung gewohnt hat». Самые старые реестры — 1850 года, более ранних нет.',
            },
            {
              kind: 'mc',
              question: 'Was kann man auch zu Hause am Computer lesen?',
              options: ['die Melderegister', 'die Kirchenbücher', 'die alten Adressbücher'],
              answer: 2,
              explanationRu: '«…die alten Adressbücher der Stadt, und die können Sie inzwischen sogar zu Hause am Computer lesen».',
            },
            {
              kind: 'mc',
              question: 'Was braucht man, wenn man die Akte des eigenen Vaters sehen möchte?',
              options: ['eine Kopie seines Ausweises', 'seine schriftliche Erlaubnis', 'einen Termin am Infotisch'],
              answer: 1,
              explanationRu: 'Из-за защиты данных о живых людях: «…brauchen Sie seine schriftliche Erlaubnis».',
            },
            {
              kind: 'mc',
              question: 'Was ist kostenlos?',
              options: ['Kopien von Dokumenten', 'Fotos mit dem eigenen Handy', 'Fotos mit Blitz'],
              answer: 1,
              explanationRu: 'Копия стоит 50 центов; фото на свой телефон бесплатны, но без вспышки.',
            },
          ],
        },
      ],
    },
    {
      title: 'Pflege der Eltern: zu Hause oder im Heim?',
      kind: 'discussion',
      speakers: { A: 'Moderatorin', B: 'Uwe Krause, pflegt seine Mutter', C: 'Sabine Wendt, Leiterin eines Pflegeheims' },
      situation: 'Sie hören eine Diskussion im Radio zum Thema „Pflege der Eltern“.',
      text: `A: Guten Abend und herzlich willkommen zu „Familie heute“. In Deutschland werden die meisten Pflegebedürftigen zu Hause versorgt, oft von ihren eigenen Kindern. Ist das die beste Lösung? Darüber spreche ich mit Uwe Krause, der seit drei Jahren seine Mutter pflegt, und mit Sabine Wendt, der Leiterin eines Pflegeheims. Herr Krause, wie sieht Ihr Alltag aus?
B: Meine Mutter ist 84, und nach einem Sturz kann sie nicht mehr allein laufen. Ich habe meine Arbeitszeit auf zwanzig Stunden pro Woche reduziert. Morgens kommt ein Pflegedienst und hilft ihr beim Waschen, den Rest des Tages mache ich. Das ist anstrengend, aber für mich war klar: Meine Mutter hat sich ihr Leben lang um mich gekümmert, jetzt kümmere ich mich um sie.
A: Frau Wendt, viele Menschen haben ein schlechtes Gewissen, wenn ihre Eltern ins Heim ziehen. Verstehen Sie das?
C: Natürlich. Aber ich erlebe oft, dass Angehörige viel zu lange warten. Sie pflegen, bis sie selbst krank werden. Das hilft am Ende niemandem. Bei uns sind rund um die Uhr Fachkräfte da, und die Bewohner haben jeden Tag Kontakt zu anderen Menschen.
B: Das stimmt schon. Ich merke auch, dass ich kaum noch Zeit für meine Freunde habe. Aber meine Mutter wäre in einem Heim todunglücklich. Sie hat ihr ganzes Leben in diesem Haus gewohnt.
C: Diese Sorge höre ich oft. Aber viele unserer Bewohner sagen schon nach ein paar Wochen, dass sie sich bei uns wohlfühlen. Gerade wer allein zu Hause sitzt, ist oft sehr einsam.
A: Ein großes Thema sind auch die Kosten. Für einen Platz im Pflegeheim muss eine Familie oft mehr als 2.500 Euro im Monat selbst bezahlen.
C: Ja, das ist leider ein echtes Problem. Hier muss die Politik dringend mehr tun.
A: Herr Krause, was wünschen Sie sich?
B: Mehr Unterstützung für pflegende Angehörige. Zum Beispiel, dass man sich so einfach eine Pflegezeit nehmen kann wie eine Elternzeit. Und mehr Plätze in der Tagespflege, damit man auch mal einen Tag frei hat.
C: Da bin ich ganz Ihrer Meinung. Eine gute Tagespflege ist für beide Seiten eine große Entlastung.
A: Vielen Dank Ihnen beiden für das Gespräch.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion zweimal. Wer sagt was?',
          instructionRu: 'Вы слышите дискуссию два раза. Кто что говорит?',
          options: ['Moderatorin', 'Uwe Krause', 'Sabine Wendt'],
          items: [
            { kind: 'match', prompt: 'Die meisten Menschen, die Pflege brauchen, werden zu Hause versorgt.', answer: 0, explanationRu: 'Модератор во вступлении: «…werden die meisten Pflegebedürftigen zu Hause versorgt».' },
            { kind: 'match', prompt: 'Ich arbeite weniger, damit ich meine Mutter pflegen kann.', answer: 1, explanationRu: 'Уве Краузе сократил рабочее время до двадцати часов в неделю.' },
            { kind: 'match', prompt: 'Viele Familien holen sich zu spät Hilfe.', answer: 2, explanationRu: 'Сабина Вендт: «…dass Angehörige viel zu lange warten».' },
            { kind: 'match', prompt: 'Wegen der Pflege sehe ich meine Freunde nur noch selten.', answer: 1, explanationRu: 'Краузе: «…dass ich kaum noch Zeit für meine Freunde habe».' },
            { kind: 'match', prompt: 'Viele Bewohner fühlen sich schon nach kurzer Zeit im Heim wohl.', answer: 2, explanationRu: 'Вендт: многие жильцы уже через несколько недель говорят, что им хорошо.' },
            { kind: 'match', prompt: 'Ein Heimplatz kostet die Familien sehr viel Geld.', answer: 0, explanationRu: 'Модератор называет сумму: больше 2500 евро в месяц.' },
            { kind: 'match', prompt: 'Pflegende Angehörige sollten so leicht eine Auszeit nehmen können wie Eltern nach einer Geburt.', answer: 1, explanationRu: 'Краузе хочет, чтобы Pflegezeit можно было взять так же просто, как Elternzeit.' },
            { kind: 'match', prompt: 'Bei den Kosten muss die Politik etwas ändern.', answer: 2, explanationRu: 'Вендт: «Hier muss die Politik dringend mehr tun».' },
          ],
        },
      ],
    },
  ],
};
