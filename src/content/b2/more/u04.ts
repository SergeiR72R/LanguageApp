import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Welche Form passt in eine Zeitungsmeldung? – Die Sprecherin sagte, das Unternehmen ___ keine Kundendaten an Dritte weiter.',
      options: ['gibt', 'gebe', 'gab', 'gäbe'],
      answer: 1,
      explanationRu: 'В новостях чужие слова передают в Konjunktiv I: geben → er/sie/es gebe. Gab — Präteritum, а время в косвенной речи не сдвигается из-за sagte.',
    },
    {
      type: 'gap',
      prompt: 'Die Autorin sagt, sie ___ soziale Medien nur noch selten.',
      answers: ['nutze', 'nütze'],
      hintRu: 'nutzen',
      explanationRu: 'Konjunktiv I 3-го лица ед. ч. = основа инфинитива + -e: nutzen → sie nutze.',
    },
    {
      type: 'choice',
      prompt: 'Der Moderator erklärte, er ___ seit zwanzig Jahren beim Sender.',
      options: ['seie', 'ist', 'sei', 'wäre gewesen'],
      answer: 2,
      explanationRu: 'Konjunktiv I от sein в 3-м лице ед. ч. — sei, без -e. Форма «seie» не существует. Wäre gewesen — Konjunktiv II прошедшего времени, он не подходит по смыслу.',
    },
    {
      type: 'gap',
      prompt: 'Der Minister erklärte, er ___ von den Plänen nichts.',
      answers: ['wisse'],
      hintRu: 'wissen',
      explanationRu: 'Konjunktiv I образуется от основы инфинитива, а не от формы weiß: wissen → er wisse.',
    },
    {
      type: 'choice',
      prompt: 'Die Journalisten behaupten, sie ___ von der Polizei bei der Arbeit behindert worden.',
      options: ['sei', 'seien', 'sind', 'würden'],
      answer: 1,
      explanationRu: 'Konjunktiv I от sein во мн. ч. — seien. Он отличается от индикатива (sind), поэтому замена не нужна. Пассив прошедшего времени: seien … behindert worden.',
    },
    {
      type: 'gap',
      prompt: 'Die Polizei teilte mit, der Täter ___ noch am selben Abend festgenommen worden.',
      answers: ['sei'],
      explanationRu: 'Пассив Perfekt в косвенной речи: sei + Partizip II + worden (повторение B2-01).',
    },
    {
      type: 'gap',
      prompt: '„Ich habe meinen Artikel überarbeitet“, sagte Lena. → Lena sagte, sie habe ___ Artikel überarbeitet.',
      answers: ['ihren'],
      explanationRu: 'В косвенной речи меняются не только личные, но и притяжательные местоимения: ich → sie, meinen → ihren.',
    },
    {
      type: 'order',
      words: ['Die Sprecherin', 'betonte,', 'die Firma', 'habe', 'sich', 'an alle Gesetze', 'gehalten.'],
      translationRu: 'Пресс-секретарь подчеркнула, что фирма соблюдала все законы.',
      explanationRu: 'Косвенная речь без dass — порядок слов главного предложения: habe на втором месте, Partizip II в конце.',
    },
    {
      type: 'gap',
      prompt: 'Viele Leser schrieben, sie ___ den Bericht als einseitig empfunden.',
      answers: ['hätten'],
      explanationRu: 'Konjunktiv I «sie haben» совпадает с индикативом, поэтому берут Konjunktiv II: sie hätten … empfunden.',
    },
    {
      type: 'transform',
      instructionRu: 'Передайте в косвенной речи (Konjunktiv I).',
      prompt: 'Der Politiker sagte: „Ich kenne den Journalisten nicht.“',
      answers: [
        'Der Politiker sagte, er kenne den Journalisten nicht.',
        'Der Politiker sagte, dass er den Journalisten nicht kenne.',
      ],
      explanationRu: 'ich → er; kennen → er kenne (Konjunktiv I). С dass глагол уходит в конец.',
    },
    {
      type: 'choice',
      prompt: '„Wann erscheint der Artikel?“, fragte die Leserin. → Die Leserin fragte, ___',
      options: [
        'ob der Artikel erscheine.',
        'wann erscheine der Artikel.',
        'wann der Artikel erscheine.',
        'wann der Artikel erscheint sei.',
      ],
      answer: 2,
      explanationRu: 'Вопрос с вопросительным словом сохраняет это слово (wann) и становится придаточным: глагол в конце, в Konjunktiv I. Ob — только для вопросов без вопросительного слова.',
    },
    {
      type: 'gap',
      prompt: 'Der Chefredakteur betonte, man ___ Gerüchte niemals ungeprüft veröffentlichen.',
      answers: ['dürfe'],
      hintRu: 'dürfen',
      explanationRu: 'Модальные глаголы в Konjunktiv I: основа инфинитива + -e: dürfen → man dürfe (не darf).',
    },
    {
      type: 'transform',
      instructionRu: 'Передайте в косвенной речи. Обратите внимание на форму во мн. ч.',
      prompt: 'Die Studierenden erklärten: „Wir haben die Umfrage selbst durchgeführt.“',
      answers: [
        'Die Studierenden erklärten, sie hätten die Umfrage selbst durchgeführt.',
        'Die Studierenden erklärten, dass sie die Umfrage selbst durchgeführt hätten.',
      ],
      explanationRu: 'wir → sie. Konjunktiv I «sie haben» = индикатив, поэтому замена на Konjunktiv II: sie hätten … durchgeführt.',
    },
    {
      type: 'gap',
      prompt: 'Medienforscher warnen, Jugendliche ___ Falschmeldungen oft nicht erkennen.',
      answers: ['könnten'],
      hintRu: 'können, мн. ч.',
      explanationRu: 'Konjunktiv I «sie können» совпадает с индикативом → Konjunktiv II: sie könnten.',
    },
    {
      type: 'choice',
      prompt: '„Löschen Sie den Beitrag sofort!“ → Der Anwalt forderte, der Blogger ___ den Beitrag sofort löschen.',
      options: ['soll', 'würde', 'solle', 'sollte gelöscht'],
      answer: 2,
      explanationRu: 'Повелительное наклонение в косвенной речи передаётся через sollen в Konjunktiv I: er solle … löschen.',
    },
    {
      type: 'transform',
      instructionRu: 'Передайте вопрос в косвенной речи.',
      prompt: 'Die Leserin fragte den Journalisten: „Haben Sie die Quelle überprüft?“',
      answers: ['Die Leserin fragte den Journalisten, ob er die Quelle überprüft habe.'],
      explanationRu: 'Вопрос без вопросительного слова → ob + глагол в конце. Sie (вежливая форма) → er; haben → habe (Konjunktiv I).',
    },
    {
      type: 'order',
      words: ['Der Reporter', 'wollte wissen,', 'warum', 'die Meldung', 'nicht', 'überprüft', 'worden', 'sei.'],
      translationRu: 'Репортёр хотел знать, почему сообщение не было проверено.',
      explanationRu: 'Косвенный вопрос с warum: в конце Partizip II + worden + sei (пассив прошедшего времени в Konjunktiv I).',
    },
    {
      type: 'choice',
      prompt: 'Der Sender teilte mit, die Serie ___ ab Januar nur noch im Internet ausgestrahlt.',
      options: ['wird', 'werde', 'würde', 'sei'],
      answer: 1,
      explanationRu: 'Пассив настоящего/будущего времени в Konjunktiv I: werde + Partizip II. Werde отличается от индикатива wird, поэтому würde не нужен.',
    },
    {
      type: 'transform',
      instructionRu: 'Передайте просьбу в косвенной речи с sollen.',
      prompt: 'Die Redakteurin sagte zum Praktikanten: „Recherchieren Sie die Fakten gründlich!“',
      answers: [
        'Die Redakteurin sagte zum Praktikanten, er solle die Fakten gründlich recherchieren.',
        'Die Redakteurin sagte zum Praktikanten, dass er die Fakten gründlich recherchieren solle.',
      ],
      explanationRu: 'Императив → sollen в Konjunktiv I (er solle) + Infinitiv. Sie (обращение) → er.',
    },
    {
      type: 'order',
      words: ['Dem Bericht', 'zufolge', 'habe', 'die Regierung', 'die Zahlen', 'geschönt.'],
      translationRu: 'Согласно докладу, правительство приукрасило цифры.',
      explanationRu: 'zufolge стоит после существительного в Dativ. Konjunktiv I в главном предложении показывает, что это слова источника, а не автора.',
    },
  ],
  reading: [
    {
      title: 'Erst prüfen, dann teilen',
      textType: 'Zeitungsartikel mit Lücken',
      texts: [
        {
          body: `Ein Foto zeigt einen Hai, der angeblich nach einem Sturm über eine überflutete Autobahn schwimmt. Innerhalb weniger Stunden wird es hunderttausendfach geteilt. [1] Das Bild ist eine Fälschung, die seit Jahren nach fast jedem großen Unwetter wieder auftaucht.

Solche Beispiele nutzt die Medienpädagogin Laura Brandt in ihren Workshops an Schulen. [2] Viele Jugendliche, so Brandt, hielten sich für Profis im Umgang mit dem Internet, weil sie damit aufgewachsen seien. „Doch wer täglich viele Stunden online ist, kann deshalb noch lange nicht zwischen seriösen und unseriösen Quellen unterscheiden.“

In den Workshops lernen die Schülerinnen und Schüler zunächst einfache Techniken. [3] Wer eine Meldung nur auf einer einzigen, unbekannten Seite findet, sollte skeptisch werden. Mit einer umgekehrten Bildersuche lässt sich außerdem schnell herausfinden, ob ein Foto schon früher in einem anderen Zusammenhang veröffentlicht wurde.

Brandt geht es aber um mehr als um Technik. [4] Falschmeldungen sprechen oft starke Gefühle wie Angst oder Wut an – und genau deshalb verbreiten sie sich so schnell. Wer sich über eine Nachricht besonders aufregt, sollte erst recht einen Moment innehalten, bevor er sie weiterleitet.

Die Workshops kommen bei den Jugendlichen gut an. Ein Schüler erzählte, er habe nach dem Workshop zum ersten Mal einen Beitrag seiner Tante in der Familiengruppe korrigiert. [5] Seine Tante habe sich zunächst geärgert, sich dann aber bei ihm bedankt.

Brandt wünscht sich, dass Nachrichtenkompetenz ein fester Bestandteil des Unterrichts wird. [6] Bisher hänge es meist vom Engagement einzelner Lehrkräfte ab, ob das Thema überhaupt behandelt werde. Ein eigenes Schulfach fordert sie allerdings nicht: Das Thema gehöre in Deutsch, Geschichte und Biologie genauso wie in Informatik.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Sie möchte, dass die Jugendlichen verstehen, warum sie auf bestimmte Meldungen hereinfallen.',
            'Deshalb sollten Jugendliche soziale Medien am besten gar nicht nutzen.',
            'Wer genauer hinsieht, merkt allerdings schnell, dass etwas nicht stimmt.',
            'Dafür müssten allerdings auch die Lehrkräfte besser ausgebildet werden.',
            'Dazu gehört zum Beispiel, eine Nachricht mit anderen Quellen zu vergleichen.',
            'Haie können tatsächlich längere Zeit in Süßwasser überleben.',
            'Dabei habe er freundlich, aber deutlich auf eine seriöse Quelle verwiesen.',
            'Dabei zeige sich immer wieder, dass die eigenen Fähigkeiten überschätzt würden.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 2,
              explanationRu: 'Между «фото распространяется» и «это фальшивка» нужен переход: при внимательном взгляде видно, что что-то не так.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 7,
              explanationRu: 'Дальше говорится, что подростки считают себя профи, — это пример переоценки собственных способностей.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 4,
              explanationRu: '«Einfache Techniken» → пример: сравнить сообщение с другими источниками; затем — про единственный неизвестный сайт.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 0,
              explanationRu: '«Больше, чем техника» → понять, почему люди попадаются; далее объясняется роль сильных эмоций.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 6,
              explanationRu: 'Продолжение истории ученика (Konjunktiv I habe): как именно он поправил тётю — сослался на серьёзный источник; затем описана её реакция.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 3,
              explanationRu: 'Требование включить тему в обучение → для этого нужно лучше готовить учителей; далее — о зависимости от отдельных учителей.',
            },
          ],
        },
      ],
    },
    {
      title: 'Wie informieren Sie sich?',
      textType: 'Meinungstexte',
      texts: [
        {
          label: 'a',
          heading: 'Helga, 71, Rentnerin',
          body: `Zu meinem Frühstück gehört seit fünfzig Jahren die Tageszeitung – auf Papier, versteht sich. Mein Enkel hat mir ein Tablet geschenkt, und ich habe es wirklich versucht, aber nach zehn Minuten tun mir die Augen weh. Ich vertraue meiner Zeitung, weil ich weiß, dass dort ausgebildete Journalisten arbeiten, die ihre Informationen prüfen. Was mich ärgert: Die Zeitung ist in den letzten Jahren immer dünner geworden, während der Preis ständig gestiegen ist. Der Lokalteil hat inzwischen nur noch zwei Seiten.`,
        },
        {
          label: 'b',
          heading: 'Leon, 19, Auszubildender',
          body: `Ehrlich gesagt bekomme ich alle Nachrichten über soziale Medien und Podcasts. Peinlich, aber wahr: Vor zwei Jahren habe ich eine Meldung über einen angeblichen Anschlag geteilt, die komplett erfunden war. Ein Freund hat mich darauf hingewiesen. Seitdem folge ich vor allem den Kanälen bekannter Zeitungen und Sender und nicht mehr irgendwelchen anonymen Accounts. Bezahlen würde ich für Nachrichten aber nicht. Es gibt doch so viel kostenlos im Netz – warum sollte ich da ein Abo abschließen?`,
        },
        {
          label: 'c',
          heading: 'Yasemin, 38, Journalistin',
          body: `Ich habe zwei digitale Abos, und eines davon bei einer Zeitung, deren politische Richtung ich eigentlich nicht teile. Das mache ich ganz bewusst. Die Algorithmen in den sozialen Netzwerken zeigen uns vor allem das, was unsere Meinung bestätigt. Da muss man aktiv gegensteuern. Was mich als Journalistin beschäftigt: Viele Menschen erwarten gründlich recherchierte Artikel, wollen aber nichts dafür zahlen. Gute Recherche kostet Zeit, und Zeit kostet Geld – das ist leider so.`,
        },
        {
          label: 'd',
          heading: 'Bernd, 52, Lkw-Fahrer',
          body: `Ich sitze zehn Stunden am Tag im Lkw, da habe ich keine Zeit zum Lesen. Ich höre jede Stunde die Nachrichten im Radio, und abends schaue ich manchmal noch eine Nachrichtensendung im Fernsehen. Sozialen Medien traue ich nicht über den Weg, da kann jeder alles behaupten. Mit den öffentlich-rechtlichen Sendern bin ich insgesamt zufrieden. Ich finde nur, dass sie mit den Rundfunkbeiträgen sparsamer umgehen könnten – nicht jede Talkshow muss so aufwendig produziert werden.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте тексты. Какое высказывание относится к какому человеку? Одного человека можно выбирать несколько раз.',
          options: ['Helga', 'Leon', 'Yasemin', 'Bernd'],
          items: [
            {
              kind: 'match',
              prompt: 'Ich lese bewusst auch Positionen, die nicht meiner Meinung entsprechen.',
              answer: 2,
              explanationRu: 'Yasemin сознательно подписана на газету, политическое направление которой не разделяет.',
            },
            {
              kind: 'match',
              prompt: 'Ich habe selbst schon einmal eine Falschmeldung verbreitet.',
              answer: 1,
              explanationRu: 'Leon поделился полностью выдуманным сообщением о теракте.',
            },
            {
              kind: 'match',
              prompt: 'Zum Lesen sind digitale Geräte für mich keine Alternative.',
              answer: 0,
              explanationRu: 'Helga пробовала планшет, но через десять минут у неё болят глаза.',
            },
            {
              kind: 'match',
              prompt: 'Für Nachrichten Geld auszugeben, sehe ich nicht ein.',
              answer: 1,
              explanationRu: 'Leon: в сети так много бесплатного — зачем оформлять подписку?',
            },
            {
              kind: 'match',
              prompt: 'Ich informiere mich vor allem nebenbei, während ich arbeite.',
              answer: 3,
              explanationRu: 'Bernd каждый час слушает новости по радио в кабине грузовика.',
            },
            {
              kind: 'match',
              prompt: 'Man bekommt heute weniger Inhalt für mehr Geld.',
              answer: 0,
              explanationRu: 'Helga: газета стала тоньше, а цена постоянно растёт.',
            },
            {
              kind: 'match',
              prompt: 'Wer sorgfältig recherchierte Berichte will, muss dafür bezahlen.',
              answer: 2,
              explanationRu: 'Yasemin: хорошее расследование требует времени, а время стоит денег.',
            },
            {
              kind: 'match',
              prompt: 'Nach einem Fehler habe ich meine Quellen gewechselt.',
              answer: 1,
              explanationRu: 'После случая с фейком Leon подписан в основном на каналы известных газет и телеканалов.',
            },
            {
              kind: 'match',
              prompt: 'Mit den Gebühren für den Rundfunk sollte sparsamer umgegangen werden.',
              answer: 3,
              explanationRu: 'Bernd в целом доволен общественными каналами, но считает, что они могли бы экономнее тратить взносы.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Interview: Wenn Nachrichten müde machen',
      kind: 'dialog',
      speakers: {
        A: 'Moderator',
        B: 'Dr. Miriam Falk, Medienpsychologin',
      },
      situation: 'Sie hören ein Interview mit einer Medienpsychologin zum Thema „Nachrichtenmüdigkeit“.',
      text: `A: Frau Dr. Falk, immer mehr Menschen sagen, sie würden Nachrichten bewusst meiden. Was steckt dahinter?
B: Die Gründe sind ziemlich ähnlich. Die Leute sagen, die Nachrichten seien zu negativ, es gebe zu viele davon, und sie selbst könnten ohnehin nichts ändern. Dieses Gefühl der Ohnmacht ist der entscheidende Punkt. Wer sich jeden Tag mit Krisen beschäftigt, auf die er keinen Einfluss hat, schaltet irgendwann ab.
A: Sind das vor allem Menschen, die sich ohnehin nicht für Politik interessieren?
B: Nein, und das überrascht viele. Wir finden Nachrichtenmüdigkeit auch bei gut gebildeten Menschen, besonders häufig bei jungen Eltern. Sie haben wenig Zeit, viel Verantwortung, und schlechte Nachrichten belasten sie zusätzlich.
A: Ist es denn schlimm, wenn man mal eine Pause macht?
B: Eine Pause ist völlig in Ordnung, manchmal sogar gesund. Problematisch wird es, wenn Menschen sich dauerhaft zurückziehen. Eine Demokratie braucht Bürgerinnen und Bürger, die wissen, worüber sie abstimmen.
A: Was raten Sie also?
B: Feste Zeiten. Zweimal am Tag bewusst Nachrichten lesen oder hören, und dazwischen nicht. Ich empfehle außerdem, die Push-Mitteilungen auf dem Handy auszuschalten. Die meisten Eilmeldungen sind gar nicht so eilig.
A: Manche Redaktionen setzen inzwischen auf sogenannten konstruktiven Journalismus. Kritiker sagen, das sei Schönfärberei.
B: Das ist ein Missverständnis. Konstruktiver Journalismus bedeutet nicht, nur gute Nachrichten zu bringen. Er berichtet über Probleme genauso kritisch, fragt aber auch: Wer versucht, das Problem zu lösen, und mit welchem Erfolg? Das gibt den Menschen das Gefühl zurück, dass Handeln möglich ist.
A: Und wie halten Sie es persönlich?
B: Vor dem Frühstück lese ich grundsätzlich keine Nachrichten. Und am Sonntag lese ich ein Wochenmagazin, in dem die Dinge mit etwas Abstand eingeordnet werden. Das hilft mir mehr als hundert Eilmeldungen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете интервью дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist laut Dr. Falk der wichtigste Grund für Nachrichtenmüdigkeit?',
              options: [
                'das Gefühl, selbst nichts bewirken zu können',
                'fehlendes Interesse an Politik',
                'zu hohe Kosten für Zeitungen',
              ],
              answer: 0,
              explanationRu: '«Dieses Gefühl der Ohnmacht ist der entscheidende Punkt» — ощущение бессилия.',
            },
            {
              kind: 'mc',
              question: 'Wer ist besonders häufig betroffen?',
              options: ['Rentnerinnen und Rentner', 'junge Eltern', 'Schülerinnen und Schüler'],
              answer: 1,
              explanationRu: 'Особенно часто — молодые родители: мало времени, много ответственности.',
            },
            {
              kind: 'mc',
              question: 'Wie beurteilt Dr. Falk eine Nachrichtenpause?',
              options: [
                'Sie ist grundsätzlich gefährlich für die Demokratie.',
                'Sie ist nur für Kranke sinnvoll.',
                'Sie ist in Ordnung, solange sie nicht dauerhaft wird.',
              ],
              answer: 2,
              explanationRu: 'Пауза — это нормально, проблема — когда люди уходят от новостей надолго.',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt sie konkret?',
              options: [
                'Eilmeldungen sofort zu lesen',
                'Mitteilungen auf dem Handy abzuschalten',
                'nur noch Radio zu hören',
              ],
              answer: 1,
              explanationRu: 'Она советует фиксированное время для новостей и отключить push-уведомления.',
            },
            {
              kind: 'mc',
              question: 'Was ist konstruktiver Journalismus laut Dr. Falk?',
              options: [
                'Er berichtet kritisch und zeigt zusätzlich Lösungsversuche.',
                'Er verzichtet auf negative Nachrichten.',
                'Er wird von Psychologen geschrieben.',
              ],
              answer: 0,
              explanationRu: 'Это не только хорошие новости: о проблемах пишут критически, но также показывают, кто и как пытается их решить.',
            },
            {
              kind: 'mc',
              question: 'Wie informiert sich Dr. Falk selbst?',
              options: [
                'Sie liest morgens vor dem Frühstück die Zeitung.',
                'Sie verfolgt den ganzen Tag Eilmeldungen.',
                'Sie liest am Wochenende ein Magazin, das die Ereignisse einordnet.',
              ],
              answer: 2,
              explanationRu: 'По воскресеньям она читает еженедельный журнал; до завтрака новости не читает.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Steuergeld für Lokalzeitungen?',
      kind: 'discussion',
      speakers: {
        A: 'Moderator Jan Riedel',
        B: 'Claudia Hartmann, Verlegerin einer Lokalzeitung',
        C: 'Prof. Stefan Kühn, Medienwissenschaftler',
      },
      situation: 'Sie hören eine Diskussion im Radio. Es geht um die Frage, ob der Staat Lokalzeitungen finanziell unterstützen soll.',
      text: `A: Guten Abend! In vielen Landkreisen gibt es inzwischen keine eigene Lokalzeitung mehr. Einige Politiker fordern deshalb staatliche Förderung für lokale Medien. Frau Hartmann, Sie geben selbst eine Lokalzeitung heraus. Brauchen Sie Hilfe vom Staat?
B: Ganz ehrlich: ja. Unsere Anzeigenerlöse sind in zehn Jahren um mehr als die Hälfte gesunken, und gleichzeitig sind die Kosten für Papier und Zustellung enorm gestiegen. Allein die Zustellung in die Dörfer kostet uns ein Vermögen. Ohne Unterstützung werden wir in einigen Jahren nicht mehr jeden Ort beliefern können.
A: Herr Professor Kühn, Sie sehen das kritisch?
C: Ich sehe das Problem, aber die Lösung macht mir Sorgen. Eine Zeitung soll die Mächtigen kontrollieren, auch den Bürgermeister und den Landrat. Wenn dieselbe Zeitung Geld vom Staat bekommt, entsteht zumindest der Verdacht, sie könnte weniger kritisch berichten.
B: Diesen Verdacht verstehe ich, aber er trifft nicht zu, wenn man es richtig macht. Man könnte zum Beispiel nur die Zustellung fördern, nicht die Redaktion. Dann hat der Staat keinerlei Einfluss auf die Inhalte.
C: Das wäre tatsächlich ein vernünftiger Kompromiss. Trotzdem müsste eine unabhängige Kommission entscheiden, wer Geld bekommt, und nicht ein Ministerium.
A: Was passiert eigentlich, wenn eine Region gar keine Lokalzeitung mehr hat?
C: Dazu gibt es Untersuchungen aus anderen Ländern. Dort sinkt die Wahlbeteiligung bei Kommunalwahlen, und es kandidieren weniger Menschen für Ämter. Die Leute wissen schlicht nicht mehr, was in ihrer Gemeinde passiert.
B: Genau das erlebe ich. Bei uns rufen Leserinnen an und sagen, sie hätten von einer Straßensperrung erst erfahren, als sie davorstanden. Facebook-Gruppen ersetzen keine Redaktion.
A: Frau Hartmann, könnten die Leser nicht einfach mehr für die Zeitung zahlen?
B: Viele unserer Abonnenten sind Rentner. Wenn wir den Preis weiter erhöhen, verlieren wir genau die Menschen, die uns die Treue halten.
C: Hier sollten die Verlage aber auch selbstkritisch sein. Viele haben das Internet zu lange ignoriert und ihre Inhalte jahrelang kostenlos ins Netz gestellt.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen den Personen zu.',
          instructionRu: 'Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderator Riedel', 'Frau Hartmann', 'Prof. Kühn'],
          items: [
            {
              kind: 'match',
              prompt: 'Besonders teuer ist es, die Zeitung in ländliche Orte zu bringen.',
              answer: 1,
              explanationRu: 'Frau Hartmann: доставка в деревни стоит целое состояние.',
            },
            {
              kind: 'match',
              prompt: 'Staatliches Geld könnte die Unabhängigkeit der Berichterstattung gefährden.',
              answer: 2,
              explanationRu: 'Prof. Kühn: если газета получает деньги от государства, возникает подозрение, что она будет менее критичной.',
            },
            {
              kind: 'match',
              prompt: 'Über die Vergabe der Fördermittel sollte kein Ministerium bestimmen.',
              answer: 2,
              explanationRu: 'Prof. Kühn: решать должна независимая комиссия, а не министерство.',
            },
            {
              kind: 'match',
              prompt: 'Was sind die Folgen, wenn es vor Ort keine Zeitung mehr gibt?',
              answer: 0,
              explanationRu: 'Этот вопрос задаёт модератор: «Was passiert eigentlich, wenn eine Region gar keine Lokalzeitung mehr hat?»',
            },
            {
              kind: 'match',
              prompt: 'Eine Preiserhöhung würde gerade die treuesten Leser vertreiben.',
              answer: 1,
              explanationRu: 'Frau Hartmann: многие подписчики — пенсионеры; при повышении цены газета потеряет самых верных читателей.',
            },
            {
              kind: 'match',
              prompt: 'Die Verlage haben ihre Probleme teilweise selbst verursacht.',
              answer: 2,
              explanationRu: 'Prof. Kühn: издательства слишком долго игнорировали интернет и бесплатно выкладывали материалы.',
            },
          ],
        },
      ],
    },
  ],
};
