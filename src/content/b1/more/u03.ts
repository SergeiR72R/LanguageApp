import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: [
        'Ich komme später, weil ich muss noch arbeiten.',
        'Ich komme später, weil ich noch arbeiten muss.',
        'Ich komme später, weil muss ich noch arbeiten.',
      ],
      answer: 1,
      explanationRu: 'В придаточном с weil спрягаемый глагол (здесь модальный muss) стоит в самом конце, инфинитив — перед ним: …arbeiten muss.',
    },
    {
      type: 'choice',
      prompt: 'Sie hat die Stelle bekommen, ___ sie kaum Berufserfahrung hatte.',
      options: ['obwohl', 'weil', 'deshalb', 'trotzdem'],
      answer: 0,
      explanationRu: 'Противоречие + глагол в конце (hatte) → союз obwohl. trotzdem и deshalb — наречия, после них идёт глагол, а не конечная позиция.',
    },
    {
      type: 'choice',
      prompt: 'Ich suche einen neuen Job, ___ mein Vertrag ist nur befristet.',
      options: ['weil', 'denn', 'deshalb', 'obwohl'],
      answer: 1,
      explanationRu: 'После пропуска глагол стоит на втором месте (mein Vertrag ist …) — так бывает только после denn. После weil глагол был бы в конце: weil mein Vertrag nur befristet ist.',
    },
    {
      type: 'choice',
      prompt: 'Ich weiß noch nicht, ___ ich das Angebot annehmen soll.',
      options: ['wenn', 'ob', 'dass', 'als'],
      answer: 1,
      explanationRu: 'Ловушка: русское «ли» в косвенном вопросе (не знаю, принять ли) — это ob, а не wenn.',
    },
    {
      type: 'choice',
      prompt: '___ ich gestern ins Büro kam, war noch niemand da.',
      options: ['Wenn', 'Als', 'Ob', 'Dass'],
      answer: 1,
      explanationRu: 'Однократное событие в прошлом → als. wenn употребляется для настоящего/будущего или для повторяющихся действий («каждый раз, когда»). Подробнее — в юните 10.',
    },
    {
      type: 'choice',
      prompt: 'Die Firma hat im letzten Jahr viele Aufträge verloren, ___.',
      options: [
        'deshalb sie hat Mitarbeiter entlassen',
        'deshalb hat sie Mitarbeiter entlassen',
        'weil sie hat Mitarbeiter entlassen',
        'trotzdem sie hat Mitarbeiter entlassen',
      ],
      answer: 1,
      explanationRu: 'deshalb занимает первое место, сразу за ним — спрягаемый глагол (hat), потом подлежащее. Формула «deshalb + глагол + подлежащее».',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich morgen früher Feierabend mache, ___ ich dich vom Bahnhof ab.',
      answers: ['hole'],
      hintRu: 'abholen',
      explanationRu: 'Придаточное стоит первым → главное начинается со спрягаемого глагола: «глагол — запятая — глагол». Приставка ab уходит в конец.',
    },
    {
      type: 'gap',
      prompt: 'Weißt du, dass die Besprechung heute schon um acht Uhr ___?',
      answers: ['anfängt'],
      hintRu: 'anfangen',
      explanationRu: 'В придаточном отделяемый глагол стоит в конце и не разделяется: …dass die Besprechung … anfängt.',
    },
    {
      type: 'gap',
      prompt: 'Er hat gekündigt, weil er keine Überstunden mehr machen ___.',
      answers: ['wollte', 'will'],
      hintRu: 'wollen',
      explanationRu: 'Модальный глагол в придаточном стоит после инфинитива, в самом конце: machen wollte. В прошлом модальные глаголы обычно в претерите.',
    },
    {
      type: 'gap',
      prompt: 'Das Gehalt ist nicht besonders hoch, ___ macht mir die Arbeit großen Spaß.',
      answers: ['trotzdem'],
      explanationRu: 'Противоречие + сразу после пропуска глагол (macht) → наречие trotzdem (тем не менее).',
    },
    {
      type: 'gap',
      prompt: 'Unserer Abteilung fehlen zwei Fachkräfte, ___ machen alle Überstunden.',
      answers: ['deshalb', 'deswegen', 'darum', 'daher'],
      explanationRu: 'Вторая часть — следствие, глагол сразу после пропуска → deshalb (deswegen, darum).',
    },
    {
      type: 'gap',
      prompt: 'Sie ist sicher, dass sie die richtige Entscheidung getroffen ___.',
      answers: ['hat'],
      explanationRu: 'Перфект в придаточном: вспомогательный глагол стоит в самом конце, после Partizip II: getroffen hat.',
    },
    {
      type: 'gap',
      prompt: 'Ich bin froh, dass unser Team endlich in ___ dritten Stock umgezogen ist.',
      answers: ['den'],
      explanationRu: 'Повторение юнита 2: umziehen — куда? → in + Akkusativ: in den dritten Stock.',
    },
    {
      type: 'order',
      words: ['Obwohl', 'sie', 'krank', 'war,', 'ist', 'sie', 'zur', 'Besprechung', 'gekommen.'],
      translationRu: 'Хотя она была больна, она пришла на совещание.',
      explanationRu: 'В придаточном с obwohl глагол в конце (war). Придаточное стоит первым → главное начинается с глагола (ist).',
    },
    {
      type: 'order',
      words: ['Der', 'Chef', 'sagt,', 'dass', 'wir', 'ab', 'Montag', 'im', 'Homeoffice', 'arbeiten', 'dürfen.'],
      translationRu: 'Начальник говорит, что с понедельника мы можем работать из дома.',
      explanationRu: 'Придаточное с dass: модальный глагол dürfen стоит в самом конце, после инфинитива arbeiten.',
    },
    {
      type: 'order',
      words: ['Ich', 'war', 'sauer,', 'weil', 'jemand', 'meine', 'Unterlagen', 'auf', 'den', 'Boden', 'gelegt', 'hatte.'],
      translationRu: 'Я разозлился, потому что кто-то положил мои документы на пол.',
      explanationRu: 'Повторение: плюсквамперфект (gelegt hatte) в конце придаточного с weil; legen — куда? → auf den Boden (Akkusativ).',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите с deshalb: сначала причина, потом следствие.',
      prompt: 'Ich nehme den Job an, weil das Gehalt gut ist.',
      answers: [
        'Das Gehalt ist gut, deshalb nehme ich den Job an.',
        'Das Gehalt ist gut, deswegen nehme ich den Job an.',
        'Das Gehalt ist gut, darum nehme ich den Job an.',
        'Das Gehalt ist gut. Deshalb nehme ich den Job an.',
      ],
      explanationRu: 'weil вводит причину, deshalb — следствие. После deshalb сразу идёт глагол: deshalb nehme ich …',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью obwohl.',
      prompt: 'Er hat wenig Erfahrung. Trotzdem hat die Firma ihn eingestellt.',
      answers: [
        'Obwohl er wenig Erfahrung hat, hat die Firma ihn eingestellt.',
        'Obwohl er wenig Erfahrung hat, hat ihn die Firma eingestellt.',
        'Die Firma hat ihn eingestellt, obwohl er wenig Erfahrung hat.',
      ],
      explanationRu: 'trotzdem стоит во втором предложении, obwohl — в предложении с противоречием (er hat wenig Erfahrung). Глагол hat уходит в конец придаточного.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините в одно предложение с wenn (придаточное — первым).',
      prompt: 'Man macht ständig Überstunden. Dann wird man irgendwann krank.',
      answers: ['Wenn man ständig Überstunden macht, wird man irgendwann krank.'],
      explanationRu: 'Условие → wenn, глагол macht в конце. Главное предложение начинается со спрягаемого глагола wird; dann можно опустить.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните с «Ich habe gehört, dass …».',
      prompt: 'Die Firma hat zwei neue Kolleginnen eingestellt.',
      answers: ['Ich habe gehört, dass die Firma zwei neue Kolleginnen eingestellt hat.'],
      explanationRu: 'Перфект в придаточном с dass: Partizip II (eingestellt), затем вспомогательный глагол hat в самом конце.',
    },
  ],
  reading: [
    {
      title: 'Anzeigen rund um Arbeit und Beruf',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Fotostudio Licht',
          body: 'Professionelle Bewerbungsfotos in nur 20 Minuten! Ohne Termin, Mo–Sa 9–19 Uhr. Digitale Dateien inklusive. Für Studierende 20 % Rabatt.',
        },
        {
          label: 'b',
          heading: 'Bewerbungstraining an der VHS Mitte',
          body: 'Sie leben seit Kurzem in Deutschland und möchten sich bewerben? In unserem kostenlosen Kurs lernen Sie, wie man einen deutschen Lebenslauf schreibt und sich im Vorstellungsgespräch gut präsentiert. Jeden Dienstag 18–20 Uhr. Anmeldung erforderlich.',
        },
        {
          label: 'c',
          heading: 'Bäckerei Krume',
          body: 'Wir suchen eine freundliche Aushilfe für den Verkauf – nur samstags und sonntags von 6 bis 12 Uhr. Erfahrung ist nicht nötig, wir arbeiten Sie gern ein. Bezahlung auf Minijob-Basis.',
        },
        {
          label: 'd',
          heading: 'Buchhaltung für Einsteiger',
          body: 'Berufsbegleitender Abendkurs: zweimal pro Woche, 18–21 Uhr, Dauer sechs Monate. Abschluss mit IHK-Zertifikat. Ideal für alle, die in einen Bürojob wechseln möchten. Förderung mit Bildungsgutschein möglich.',
        },
        {
          label: 'e',
          heading: 'Coworking-Space „Schreibtisch frei“',
          body: 'Flexible Arbeitsplätze ab 12 Euro pro Tag: schnelles WLAN, Drucker und Kaffee inklusive. Keine lange Vertragsbindung – kommen Sie, wann Sie wollen! Vormittags Kinderbetreuung im Haus.',
        },
        {
          label: 'f',
          heading: 'Karrieretag IT & Technik',
          body: 'Am 15. Mai stellen sich in Messehalle 3 über 60 Unternehmen aus der IT-Branche vor. Kostenloser Lebenslauf-Check vor Ort. Eintritt frei.',
        },
        {
          label: 'g',
          heading: 'Seniorenzentrum Abendrot',
          body: 'Wir suchen Pflegehelferinnen und Pflegehelfer in Teilzeit (20 Stunden pro Woche). Feste Arbeitszeiten von 7 bis 11 Uhr, keine Wochenend- und Nachtdienste. Deutschkenntnisse auf B1-Niveau erforderlich.',
        },
        {
          label: 'h',
          heading: 'Beratungsstelle „Anerkennung jetzt“',
          body: 'Sie haben Ihren Berufsabschluss im Ausland gemacht? Wir beraten Sie kostenlos, wie Sie Ihre Zeugnisse und Diplome in Deutschland anerkennen lassen können – auf Deutsch, Englisch, Russisch und Arabisch. Termine nach Vereinbarung.',
        },
        {
          label: 'i',
          heading: 'Übersetzungsbüro Nowak',
          body: 'Beglaubigte Übersetzungen von Zeugnissen und Urkunden aus dem Russischen, Ukrainischen und Polnischen. Express-Service: fertig in 48 Stunden!',
        },
        {
          label: 'j',
          heading: 'Kanzlei Berger & Partner',
          body: 'Ärger mit dem Arbeitgeber? Kündigung erhalten? Unser Fachanwalt für Arbeitsrecht hilft Ihnen. Die erste Beratung (30 Minuten) ist kostenlos.',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–7 und die Anzeigen a–j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–7 и объявления a–j. Какое объявление подходит к какой ситуации? Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет.',
          options: [
            'Fotostudio Licht',
            'Bewerbungstraining an der VHS Mitte',
            'Bäckerei Krume',
            'Buchhaltung für Einsteiger',
            'Coworking-Space „Schreibtisch frei“',
            'Karrieretag IT & Technik',
            'Seniorenzentrum Abendrot',
            'Beratungsstelle „Anerkennung jetzt“',
            'Übersetzungsbüro Nowak',
            'Kanzlei Berger & Partner',
          ],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Irina war in Kasachstan Ingenieurin und möchte wissen, ob ihr Diplom in Deutschland gültig ist.', answer: 7, explanationRu: 'h: консультация по признанию иностранных дипломов, в том числе на русском.' },
            { kind: 'match', prompt: 'Ihr Bruder braucht seine ukrainischen Schulzeugnisse sehr schnell auf Deutsch, weil er sich in drei Tagen bewerben will.', answer: 8, explanationRu: 'i: заверенные переводы с украинского, срочно — за 48 часов.' },
            { kind: 'match', prompt: 'Max studiert und sucht einen Job, bei dem er nur am Wochenende arbeiten muss.', answer: 2, explanationRu: 'c: подработка только по субботам и воскресеньям. Скидка для студентов в a — это не работа.' },
            { kind: 'match', prompt: 'Ihre Kollegin hat eine Kündigung bekommen und glaubt, dass sie nicht korrekt ist.', answer: 9, explanationRu: 'j: адвокат по трудовому праву, первая консультация бесплатно.' },
            { kind: 'match', prompt: 'Ein Freund arbeitet tagsüber im Lager und möchte abends eine Qualifikation für einen Bürojob erwerben.', answer: 3, explanationRu: 'd: вечерний курс бухгалтерии без отрыва от работы, «Ideal für alle, die in einen Bürojob wechseln möchten».' },
            { kind: 'match', prompt: 'Sie haben zwei kleine Kinder und suchen eine Stelle nur am Vormittag, ohne Wochenendarbeit.', answer: 6, explanationRu: 'g: работа с 7 до 11 часов, без выходных и ночных смен.' },
            { kind: 'match', prompt: 'Ein Bekannter möchte für seine neue Firma ein eigenes Büro mit einem Mietvertrag über mehrere Jahre.', answer: -1, explanationRu: 'Нет подходящего объявления: коворкинг (e) сдаёт места посуточно и «без долгого договора», а нужен свой офис надолго.' },
          ],
        },
      ],
    },
    {
      title: 'Mein Jahr als Teilzeit-Papa',
      textType: 'Blogbeitrag',
      texts: [
        {
          body: `Hallo, ich bin Daniel, 36, und seit genau einem Jahr arbeite ich nur noch 25 Stunden pro Woche. Heute möchte ich ehrlich erzählen, wie es mir damit geht.

Als unser Sohn Paul geboren wurde, war ich Projektleiter in einer Werbeagentur. Ich habe oft bis abends um acht gearbeitet, und am Wochenende habe ich E-Mails beantwortet. Meine Frau ist Ärztin und arbeitet im Schichtdienst, deshalb war schnell klar: So geht es nicht weiter. Einer von uns musste weniger arbeiten. Weil meine Frau mehr verdient als ich, habe ich meinen Chef gefragt, ob ich in Teilzeit wechseln kann.

Ehrlich gesagt hatte ich Angst vor dem Gespräch. In unserer Agentur arbeitete damals kein einziger Mann in Teilzeit. Mein Chef war zuerst skeptisch, trotzdem hat er Ja gesagt – allerdings unter einer Bedingung: Die Projektleitung musste ich abgeben. Das tat weh, obwohl ich wusste, dass es fair war.

Und wie ist es heute? Ich bringe Paul jeden Morgen in die Kita und hole ihn um halb drei wieder ab. Die Nachmittage auf dem Spielplatz sind wunderbar, auch wenn sie manchmal anstrengender sind als jedes Meeting. Finanziell ist es enger geworden; dieses Jahr fahren wir zum Beispiel nicht in den Urlaub.

Was mich überrascht hat: Im Büro bin ich jetzt viel effektiver. Wenn man weiß, dass man um zwei Uhr gehen muss, verschwendet man keine Zeit mit langen Kaffeepausen. Inzwischen haben zwei Kollegen ebenfalls ihre Stunden reduziert, und mein Chef erzählt Kunden sogar stolz davon.

Ob ich irgendwann wieder Vollzeit arbeite? Vielleicht, wenn Paul in die Schule kommt. Aber zurück zu den Zwölf-Stunden-Tagen will ich nie wieder.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Daniel hat früher auch am Wochenende gearbeitet.', answer: true, explanationRu: '«…am Wochenende habe ich E-Mails beantwortet».' },
            { kind: 'tf', statement: 'Daniel arbeitet weniger, weil seine Frau ein höheres Gehalt hat.', answer: true, explanationRu: '«Weil meine Frau mehr verdient als ich, habe ich meinen Chef gefragt…».' },
            { kind: 'tf', statement: 'In der Agentur gab es damals schon andere Männer in Teilzeit.', answer: false, explanationRu: '«In unserer Agentur arbeitete damals kein einziger Mann in Teilzeit».' },
            { kind: 'tf', statement: 'Daniel ist weiterhin Projektleiter.', answer: false, explanationRu: 'Условие начальника: «Die Projektleitung musste ich abgeben».' },
            { kind: 'tf', statement: 'Die Familie macht in diesem Jahr keine Urlaubsreise.', answer: true, explanationRu: '«…dieses Jahr fahren wir zum Beispiel nicht in den Urlaub».' },
            { kind: 'tf', statement: 'Daniel findet, dass er im Büro jetzt weniger schafft als früher.', answer: false, explanationRu: 'Наоборот: «Im Büro bin ich jetzt viel effektiver».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Radiotipp: Tag der Ausbildung',
      kind: 'monolog',
      situation: 'Sie hören einen Hinweis im Radio.',
      text: `Und jetzt unser Tipp für alle Schülerinnen und Schüler, die noch nicht wissen, was sie nach der Schule machen wollen: Am kommenden Samstag ist „Tag der Ausbildung“, und über vierzig Betriebe aus der Region öffnen ihre Türen. Wer schon immer wissen wollte, wie man in einer Bäckerei, in einer Autowerkstatt oder in einem Krankenhaus arbeitet, kann von 10 bis 16 Uhr einfach vorbeischauen. Eine Anmeldung ist nicht nötig, und der Eintritt ist natürlich frei. Wer einen Ausbildungsplatz sucht, sollte unbedingt seinen Lebenslauf mitbringen, weil viele Firmen direkt vor Ort Bewerbungsgespräche führen. Und weil einige Betriebe außerhalb der Stadt liegen, fahren an diesem Tag zusätzliche Busse ab dem Hauptbahnhof – alle zwanzig Minuten. Das ganze Programm finden Sie auf unserer Internetseite.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Für den Tag der Ausbildung muss man sich vorher anmelden.', answer: false, explanationRu: '«Eine Anmeldung ist nicht nötig».' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Warum sollen Jugendliche ihren Lebenslauf mitnehmen?',
              options: ['Man muss ihn am Eingang zeigen.', 'Manche Firmen führen sofort Bewerbungsgespräche.', 'Man kann damit kostenlos Bus fahren.'],
              answer: 1,
              explanationRu: '«…weil viele Firmen direkt vor Ort Bewerbungsgespräche führen».',
            },
          ],
        },
      ],
    },
    {
      title: 'Ein Angebot aus Mannheim',
      kind: 'dialog',
      speakers: { A: 'Sarah', B: 'Kemal, ihr Kollege' },
      situation: 'Sie hören ein Gespräch zwischen zwei Kollegen in der Kantine.',
      text: `A: Hallo Kemal, ist hier noch frei?
B: Klar, setz dich. Du siehst aber müde aus.
A: Bin ich auch. Ich habe heute Nacht kaum geschlafen, weil ich die ganze Zeit nachgedacht habe.
B: Worüber denn?
A: Du darfst es aber noch niemandem erzählen, okay? Ich habe ein Angebot von einer anderen Firma bekommen. Von Brenner & Söhne in Mannheim.
B: Wow! Und? Ist es gut?
A: Das Gehalt ist auf jeden Fall besser, ungefähr fünfhundert Euro mehr im Monat. Und ich soll dort ein eigenes Team leiten.
B: Das klingt doch super. Wo ist das Problem?
A: Na ja, Mannheim ist eine Stunde mit dem Zug von hier. Ich muss also jeden Tag pendeln, weil wir gerade erst ein Haus hier gekauft haben. Umziehen kommt nicht infrage.
B: Zwei Stunden am Tag im Zug … das ist schon viel. Gibt es dort Homeoffice?
A: Zwei Tage pro Woche, haben sie gesagt. Trotzdem bleiben drei Tage mit Pendeln.
B: Und was sagt dein Mann dazu?
A: Er findet, dass ich es machen soll. Er meint, so eine Chance kommt nicht so schnell wieder. Aber ich mag unser Team hier so sehr. Und ehrlich gesagt habe ich auch ein bisschen Angst, dass ich als Chefin nicht gut genug bin.
B: Quatsch! Du hast doch letztes Jahr das große Projekt mit den Schweizern geleitet, obwohl das eigentlich gar nicht deine Aufgabe war. Das hast du super gemacht.
A: Das stimmt schon …
B: Hast du schon mit Frau Kraus gesprochen? Vielleicht kann sie dir hier auch mehr bieten.
A: Nein, noch nicht. Ich weiß nicht, ob das eine gute Idee ist.
B: Ich finde schon. Sie ist fair. Und wenn sie dir nichts anbieten kann, weißt du wenigstens, woran du bist.
A: Du hast recht. Ich muss mich bis Freitag entscheiden, deshalb gehe ich am besten heute noch zu ihr.
B: Mach das. Und erzähl mir dann, wie es gelaufen ist!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слышите разговор один раз. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Sarah hat schlecht geschlafen, weil sie über ein Jobangebot nachgedacht hat.', answer: true, explanationRu: 'Она почти не спала, потому что всё время думала о предложении из Мангейма.' },
            { kind: 'tf', statement: 'In der neuen Firma bekommt Sarah weniger Geld.', answer: false, explanationRu: 'Наоборот: примерно на 500 евро в месяц больше.' },
            { kind: 'tf', statement: 'Sarah möchte nach Mannheim umziehen.', answer: false, explanationRu: '«Umziehen kommt nicht infrage» — они только что купили здесь дом.' },
            { kind: 'tf', statement: 'In der neuen Firma kann Sarah an manchen Tagen zu Hause arbeiten.', answer: true, explanationRu: 'Два дня в неделю — хоумофис.' },
            { kind: 'tf', statement: 'Sarahs Mann ist gegen den Jobwechsel.', answer: false, explanationRu: 'Муж считает, что ей нужно согласиться: такой шанс бывает нечасто.' },
            { kind: 'tf', statement: 'Sarah hat schon einmal ein großes Projekt geleitet.', answer: true, explanationRu: 'Кемаль напоминает: в прошлом году она руководила большим проектом со швейцарцами.' },
            { kind: 'tf', statement: 'Sarah will noch heute mit ihrer Chefin sprechen.', answer: true, explanationRu: '«…deshalb gehe ich am besten heute noch zu ihr».' },
          ],
        },
      ],
    },
  ],
};
