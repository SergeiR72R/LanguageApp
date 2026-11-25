import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Mein Tablet ist nicht so schwer ___ mein Laptop.',
      options: ['als', 'wie', 'dann', 'so'],
      answer: 1,
      explanationRu: 'Отрицание равенства: nicht so + исходная форма + wie. als ставится только после сравнительной степени.',
    },
    {
      type: 'choice',
      prompt: 'Welches Handy hat den ___ Akku?',
      options: ['besten', 'bessten', 'gutesten', 'am besten'],
      answer: 0,
      explanationRu: 'gut – besser – am besten / der beste. Перед существительным в Akkusativ м. р.: den besten Akku. Форма «am besten» стоит только после глагола.',
    },
    {
      type: 'choice',
      prompt: 'Von allen Sendern bringt dieser die ___ Nachrichten.',
      options: ['aktuellste', 'aktuellsten', 'aktuellere', 'am aktuellsten'],
      answer: 1,
      explanationRu: 'Превосходная степень перед существительным склоняется как обычное прилагательное: die Nachrichten (мн. ч.) после die → -en: die aktuellsten Nachrichten.',
    },
    {
      type: 'choice',
      prompt: 'Mit meiner Schwester telefoniere ich ___ als mit meinem Bruder.',
      options: ['mehr oft', 'oftener', 'öfter', 'am öftesten'],
      answer: 2,
      explanationRu: 'oft – öfter (с умлаутом). В немецком нельзя строить сравнение через mehr + прилагательное, как русское «более часто».',
    },
    {
      type: 'choice',
      prompt: 'Je ___ der Bildschirm ist, desto mehr Strom braucht das Gerät.',
      options: ['hell', 'am hellsten', 'so hell', 'heller'],
      answer: 3,
      explanationRu: 'После je и desto всегда стоит сравнительная степень: je heller …, desto mehr …',
    },
    {
      type: 'choice',
      prompt: 'Das ist die ___ Doku, die ich je gesehen habe.',
      options: ['meisten interessante', 'interessanteste', 'interessantste', 'am interessantesten'],
      answer: 1,
      explanationRu: 'interessant оканчивается на -t, поэтому в превосходной степени вставляется e: interessant-e-ste. Перед существительным после die → -e.',
    },
    {
      type: 'gap',
      prompt: 'Die Nachricht hat sich viel ___ verbreitet als erwartet.',
      answers: ['schneller'],
      hintRu: 'schnell',
      explanationRu: 'Перед als нужна сравнительная степень: schnell → schneller. viel усиливает: «гораздо быстрее».',
    },
    {
      type: 'gap',
      prompt: 'Mein Opa sieht viel ___ fern als ich.',
      answers: ['mehr'],
      hintRu: 'viel',
      explanationRu: 'viel – mehr – am meisten (неправильная форма). mehr не склоняется.',
    },
    {
      type: 'gap',
      prompt: 'Meine Schwester ist zwei Jahre ___ als ich, hat aber schon viel mehr Follower.',
      answers: ['jünger'],
      hintRu: 'jung',
      explanationRu: 'Короткие прилагательные часто получают умлаут: jung → jünger.',
    },
    {
      type: 'gap',
      prompt: 'Der Fernsehturm ist das ___ Gebäude der Stadt.',
      answers: ['höchste'],
      hintRu: 'hoch',
      explanationRu: 'hoch – höher – am höchsten (неправильная форма, c выпадает). Перед существительным: das höchste Gebäude (Nominativ ср. р. → -e).',
    },
    {
      type: 'gap',
      prompt: 'Welche Quelle ist am ___?',
      answers: ['glaubwürdigsten'],
      hintRu: 'glaubwürdig',
      explanationRu: 'Превосходная степень после глагола: am + -sten → am glaubwürdigsten.',
    },
    {
      type: 'gap',
      prompt: 'Je ___ ich die Nachrichten lese, desto unruhiger werde ich.',
      answers: ['öfter', 'häufiger'],
      hintRu: 'oft',
      explanationRu: 'После je — сравнительная степень: oft → öfter (или häufiger). Глагол в части с je стоит в конце (lese).',
    },
    {
      type: 'gap',
      prompt: 'Der neue Router ist leider genauso langsam ___ der alte.',
      answers: ['wie'],
      explanationRu: 'Равенство: (genau)so + исходная форма + wie. Ошибка русскоговорящих — «genauso langsam als».',
    },
    {
      type: 'order',
      words: ['Je', 'länger', 'ein', 'Video', 'ist,', 'desto', 'weniger', 'Leute', 'sehen', 'es', 'bis', 'zum', 'Ende.'],
      translationRu: 'Чем длиннее видео, тем меньше людей досматривают его до конца.',
      explanationRu: 'В части с je глагол стоит в конце (ist); после desto + сравнительная степень (weniger Leute) сразу идёт глагол (sehen).',
    },
    {
      type: 'order',
      words: ['Das', 'ist', 'die', 'beste', 'App,', 'die', 'ich', 'kenne.'],
      translationRu: 'Это лучшее приложение из тех, что я знаю.',
      explanationRu: 'die beste App — превосходная степень перед существительным. Повторение: относительное придаточное (die ich kenne) с глаголом в конце.',
    },
    {
      type: 'order',
      words: ['Ich', 'finde,', 'dass', 'Podcasts', 'interessanter', 'als', 'Radiosendungen', 'sind.'],
      translationRu: 'Я считаю, что подкасты интереснее радиопередач.',
      explanationRu: 'Повторение: придаточное с dass, глагол sind в конце. Сравнение: interessanter als.',
    },
    {
      type: 'transform',
      instructionRu: 'Сравните газету и журнал (равенство) с прилагательным teuer.',
      prompt: 'Die Zeitung kostet zwei Euro. Die Zeitschrift kostet auch zwei Euro.',
      answers: ['Die Zeitung ist so teuer wie die Zeitschrift.', 'Die Zeitung ist genauso teuer wie die Zeitschrift.', 'Die Zeitschrift ist so teuer wie die Zeitung.', 'Die Zeitschrift ist genauso teuer wie die Zeitung.'],
      explanationRu: 'Равенство: (genau)so + teuer (исходная форма!) + wie.',
    },
    {
      type: 'transform',
      instructionRu: 'Перефразируйте с помощью nicht so … wie.',
      prompt: 'Das Radio ist weniger beliebt als das Internet.',
      answers: ['Das Radio ist nicht so beliebt wie das Internet.'],
      explanationRu: 'weniger … als = nicht so … wie. После so прилагательное стоит в исходной форме, а сравнивают с помощью wie.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью je … desto (lange → länger, schlecht → schlechter).',
      prompt: 'Man benutzt das Handy abends lange. Man schläft schlecht.',
      answers: ['Je länger man das Handy abends benutzt, desto schlechter schläft man.', 'Je länger man abends das Handy benutzt, desto schlechter schläft man.', 'Je länger man das Handy abends benutzt, umso schlechter schläft man.', 'Je länger man abends das Handy benutzt, umso schlechter schläft man.'],
      explanationRu: 'je + Komparativ … глагол в конце; desto/umso + Komparativ + глагол + подлежащее.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте прилагательное в сравнительную степень (не забудьте окончание).',
      prompt: 'Ich suche ein Handy mit einem großen Bildschirm.',
      answers: ['Ich suche ein Handy mit einem größeren Bildschirm.'],
      explanationRu: 'Повторение склонения: сравнительная степень перед существительным склоняется: groß → größer + -en (mit einem … Dativ) = größeren.',
    },
  ],
  reading: [
    {
      title: 'Zwei Zeitungsartikel: Smartphones in Bibliothek und Schule',
      textType: 'Zeitungsartikel',
      texts: [
        {
          label: 'Text 1',
          heading: 'Jung hilft Alt: Smartphone-Sprechstunde in der Stadtbibliothek',
          body: `Jeden Dienstagnachmittag ist es in der Stadtbibliothek Paderborn lauter als sonst. An sechs Tischen sitzen ältere Damen und Herren mit ihren Handys, neben ihnen Schülerinnen und Schüler der Realschule am Park. Die Jugendlichen erklären, wie man Fotos an die Enkel schickt, einen Videoanruf startet oder einen Arzttermin online bucht.

Die Idee hatte die Bibliothekarin Sabine Krull. „Viele ältere Menschen haben ein Smartphone geschenkt bekommen, trauen sich aber nicht, es richtig zu benutzen“, sagt sie. „Die Kurse an der Volkshochschule sind oft schnell ausgebucht und für manche zu teuer.“ Die Sprechstunde dagegen ist kostenlos, eine Anmeldung ist nicht nötig.

Die Schüler machen freiwillig mit. „Am Anfang dachte ich, das wird langweilig“, erzählt der 15-jährige Jonas. „Aber Frau Berger erzählt mir immer so spannende Geschichten von früher. Ich habe dabei mehr gelernt als sie.“ Die 81-jährige Ilse Berger lacht: „Er ist viel geduldiger als mein eigener Enkel.“ Wegen der großen Nachfrage will die Bibliothek ab Herbst einen zweiten Termin am Samstagvormittag anbieten.`,
        },
        {
          label: 'Text 2',
          heading: 'Handy aus, Kopf an? Gymnasium testet Smartphone-Pause',
          body: `Seit Beginn des Schuljahres gilt am Schiller-Gymnasium in Kassel eine neue Regel: Von der ersten bis zur letzten Stunde bleiben die Smartphones der Schülerinnen und Schüler in einem Schließfach. Nur in der Oberstufe dürfen die Geräte im Unterricht genutzt werden, wenn die Lehrkraft es erlaubt.

Nach drei Monaten zieht Schulleiter Thomas Reuter eine erste Bilanz – und die ist überwiegend positiv. „Die Pausen sind lebendiger geworden. Die Kinder spielen wieder Tischtennis und reden miteinander, statt nur auf den Bildschirm zu schauen.“ Auch Streit in Chatgruppen während der Schulzeit gibt es laut Reuter deutlich weniger.

Nicht alle sind begeistert. Einige Eltern beschweren sich, dass sie ihre Kinder tagsüber nicht erreichen können. Die Schule verweist auf das Sekretariat: In Notfällen kann man dort jederzeit anrufen. Die Schülervertretung wiederum wünscht sich mehr Mitsprache. „Wir verstehen die Gründe“, sagt Schülersprecherin Leonie Haas, „aber wir möchten bei so wichtigen Entscheidungen früher gefragt werden.“ Im Sommer will die Schulkonferenz entscheiden, ob die Regel dauerhaft bleibt.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie Text 1 und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 1 и выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was machen die Schüler in der Bibliothek?',
              options: ['Sie lernen dort für die Schule.', 'Sie helfen älteren Menschen mit dem Smartphone.', 'Sie verkaufen gebrauchte Handys.'],
              answer: 1,
              explanationRu: 'Школьники объясняют пожилым людям, как отправлять фото, звонить по видео и записываться к врачу онлайн.',
            },
            {
              kind: 'mc',
              question: 'Warum gibt es die Sprechstunde?',
              options: ['Die Kurse an der Volkshochschule sind oft voll oder zu teuer.', 'Die Bibliothek braucht mehr Besucher.', 'Die Realschule hat das verlangt.'],
              answer: 0,
              explanationRu: '«Die Kurse an der Volkshochschule sind oft schnell ausgebucht und für manche zu teuer» — так объясняет библиотекарь.',
            },
            {
              kind: 'mc',
              question: 'Was plant die Bibliothek?',
              options: ['Die Sprechstunde soll bald Geld kosten.', 'Man muss sich in Zukunft anmelden.', 'Es soll einen zusätzlichen Termin geben.'],
              answer: 2,
              explanationRu: 'Из-за большого спроса с осени будет второй термин — в субботу утром. Консультация остаётся бесплатной и без записи.',
            },
          ],
        },
        {
          instructionDe: 'Lesen Sie Text 2 und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 2 и выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Welche Regel gilt am Schiller-Gymnasium?',
              options: ['Handys sind nur in den Pausen erlaubt.', 'Alle dürfen ihr Handy im Unterricht benutzen.', 'Die Smartphones bleiben normalerweise während der ganzen Schulzeit im Schließfach.'],
              answer: 2,
              explanationRu: '«Von der ersten bis zur letzten Stunde bleiben die Smartphones … in einem Schließfach». Исключение — только старшие классы с разрешения учителя.',
            },
            {
              kind: 'mc',
              question: 'Was sagt der Schulleiter über die neue Regel?',
              options: ['Die Schüler reden in den Pausen wieder mehr miteinander.', 'Es gibt mehr Streit in den Chatgruppen.', 'Die Noten der Schüler sind besser geworden.'],
              answer: 0,
              explanationRu: '«Die Pausen sind lebendiger geworden … reden miteinander». Споров в чатах стало меньше, об оценках ничего не сказано.',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert die Schülervertretung?',
              options: ['Die Eltern können die Schule nicht anrufen.', 'Die Schüler wurden nicht früh genug gefragt.', 'Die Regel gilt auch für die Oberstufe.'],
              answer: 1,
              explanationRu: 'Лени Хаас: «wir möchten bei so wichtigen Entscheidungen früher gefragt werden» — их не спросили вовремя.',
            },
          ],
        },
      ],
    },
    {
      title: 'Leserbriefe: Ein eigenes Smartphone für Kinder?',
      textType: 'Leserbriefe',
      texts: [
        {
          label: 'Katrin, 38',
          body: 'Meine Tochter ist elf und hat seit einem Jahr ein eigenes Handy. Seitdem bin ich viel ruhiger, wenn sie allein mit dem Bus zum Training fährt. Natürlich haben wir klare Regeln: Beim Essen und nach 20 Uhr bleibt das Handy in der Küche. Ein Verbot finde ich übertrieben – Kinder sollten lieber lernen, vernünftig mit Medien umzugehen.',
        },
        {
          label: 'Herbert, 67',
          body: 'Früher haben wir draußen gespielt und uns ohne Handy verabredet – und es hat wunderbar funktioniert. Heute sitzen schon Achtjährige stundenlang vor dem kleinen Bildschirm. Je früher Kinder ein Smartphone bekommen, desto schwieriger wird es später, davon wegzukommen. Ich bin klar dafür, bis zum 14. Geburtstag zu warten.',
        },
        {
          label: 'Selin, 16',
          body: 'Ich habe mein erstes Handy mit zehn bekommen, und ehrlich gesagt war das das beste Geschenk meines Lebens. In meiner Klasse wurden alle Hausaufgaben und Termine über den Klassenchat organisiert. Wer kein Handy hatte, war einfach nicht dabei. Ein Verbot macht Kinder nur zu Außenseitern.',
        },
        {
          label: 'Martin, 45',
          body: 'Als Lehrer sehe ich täglich, wie sehr Smartphones die Konzentration stören. Viele Schüler können kaum noch eine halbe Stunde still lesen. Für den Notfall reicht ein einfaches Tastenhandy ohne Internet völlig aus. Das ist billiger und viel sicherer als ein modernes Smartphone.',
        },
        {
          label: 'Julia, 34',
          body: 'Mein Sohn ist neun und wünscht sich nichts dringender als ein eigenes Smartphone, weil alle seine Freunde eins haben. Ich verstehe ihn ja. Trotzdem bleibe ich hart: Mit neun Jahren kann er die Gefahren im Netz noch nicht einschätzen. Wenn er älter ist, sprechen wir noch einmal darüber.',
        },
        {
          label: 'Dennis, 29',
          body: 'Ich arbeite als Medienpädagoge. Verbote bringen nach meiner Erfahrung wenig, denn die Kinder nutzen dann heimlich die Geräte von Freunden. Viel sinnvoller ist es, wenn Eltern ihren Kindern früh ein eigenes Gerät geben und sie am Anfang eng begleiten. Mit Jugendschutz-Apps lässt sich vieles gut kontrollieren.',
        },
        {
          label: 'Monika, 52',
          body: 'Meine Zwillinge sind zwölf und haben seit ein paar Monaten Smartphones. Ich hatte große Angst davor, aber es klappt besser als gedacht. Die beiden rufen an, wenn der Zug Verspätung hat, und nutzen Lern-Apps für Englisch. Ich würde es heute genauso wieder machen.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Leserbriefe. Ist die Person dafür, dass Kinder unter 14 Jahren ein eigenes Smartphone bekommen?',
          instructionRu: 'Прочитайте письма читателей. Выступает ли автор за то, чтобы у детей до 14 лет был собственный смартфон?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            {
              kind: 'tf',
              statement: 'Katrin',
              answer: true,
              explanationRu: 'Да: у её 11-летней дочери есть телефон, запрет она считает чрезмерным («übertrieben»), главное — правила.',
            },
            {
              kind: 'tf',
              statement: 'Herbert',
              answer: false,
              explanationRu: 'Нет: «Ich bin klar dafür, bis zum 14. Geburtstag zu warten».',
            },
            {
              kind: 'tf',
              statement: 'Selin',
              answer: true,
              explanationRu: 'Да: телефон в 10 лет был лучшим подарком, без него дети становятся аутсайдерами.',
            },
            {
              kind: 'tf',
              statement: 'Martin',
              answer: false,
              explanationRu: 'Нет: смартфоны мешают концентрации, детям достаточно простого кнопочного телефона без интернета.',
            },
            {
              kind: 'tf',
              statement: 'Julia',
              answer: false,
              explanationRu: 'Нет: хотя она понимает сына, «trotzdem bleibe ich hart» — в девять лет он ещё не может оценить опасности.',
            },
            {
              kind: 'tf',
              statement: 'Dennis',
              answer: true,
              explanationRu: 'Да: запреты не помогают, разумнее рано дать ребёнку своё устройство и сопровождать его.',
            },
            {
              kind: 'tf',
              statement: 'Monika',
              answer: true,
              explanationRu: 'Да: у её 12-летних близнецов есть смартфоны, всё работает лучше, чем она думала, и она бы сделала так снова.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Führung im Museum für Kommunikation',
      kind: 'monolog',
      situation: 'Sie nehmen an einer Führung durch ein Museum teil. Sie hören den Text einmal.',
      text: `Herzlich willkommen im Museum für Kommunikation! Mein Name ist Petra Lohmann, und ich begleite Sie heute etwa eine Stunde durch unsere Ausstellung. Bevor wir anfangen, eine kurze Bitte: Fotografieren ist überall erlaubt, aber bitte ohne Blitz. Ihre Jacken und Taschen können Sie unten in den Schließfächern lassen. Dafür brauchen Sie eine Ein-Euro-Münze, die Sie am Ende zurückbekommen.

Wir beginnen hier im Erdgeschoss mit der ältesten Abteilung: Briefe und Post. Vor zweihundert Jahren war ein Brief von Berlin nach München oft eine Woche unterwegs. Heute dauert eine E-Mail weniger als eine Sekunde. Besonders beliebt bei Kindern ist unsere alte Postkutsche – da dürfen Sie sich auch gern hineinsetzen.

Im ersten Stock geht es um das Telefon. Dort sehen Sie das größte Telefon der Ausstellung: Es wiegt fast zehn Kilo! Die ersten Telefone waren nicht nur schwerer, sondern auch viel teurer als heute. Nur reiche Familien konnten sich eins leisten.

Im zweiten Stock zeigen wir Radio und Fernsehen. Dort gibt es auch unser kleines Studio. Wer möchte, kann selbst eine kurze Nachrichtensendung aufnehmen. Das Video schicken wir Ihnen dann kostenlos per E-Mail.

Zum Schluss besuchen wir die neueste Abteilung im Dachgeschoss: das Internet und die sozialen Medien. Diese Abteilung ist erst seit März geöffnet. Die Führung endet dort, aber Sie können natürlich so lange bleiben, wie Sie möchten. Unser Museumscafé im Erdgeschoss hat heute bis achtzehn Uhr geöffnet. So, dann folgen Sie mir bitte!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aufgaben. Hören Sie dann den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте экскурсию и выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was braucht man für die Schließfächer?',
              options: ['eine Eintrittskarte', 'eine Ein-Euro-Münze', 'einen Ausweis'],
              answer: 1,
              explanationRu: '«Dafür brauchen Sie eine Ein-Euro-Münze, die Sie am Ende zurückbekommen».',
            },
            {
              kind: 'mc',
              question: 'Was dürfen Besucher im Erdgeschoss machen?',
              options: ['mit einer alten Schreibmaschine schreiben', 'mit Blitz fotografieren', 'sich in eine Postkutsche setzen'],
              answer: 2,
              explanationRu: 'В старую почтовую карету можно сесть («da dürfen Sie sich auch gern hineinsetzen»). Фотографировать можно только без вспышки.',
            },
            {
              kind: 'mc',
              question: 'Was erfährt man über die ersten Telefone?',
              options: ['Sie waren viel teurer als heute.', 'Sie waren leichter als heutige Handys.', 'Fast jede Familie hatte eins.'],
              answer: 0,
              explanationRu: '«… nicht nur schwerer, sondern auch viel teurer als heute. Nur reiche Familien konnten sich eins leisten».',
            },
            {
              kind: 'mc',
              question: 'Was kann man im zweiten Stock machen?',
              options: ['alte Fernseher kaufen', 'selbst eine kurze Nachrichtensendung aufnehmen', 'an einem Radioquiz teilnehmen'],
              answer: 1,
              explanationRu: 'Во второй студии можно самому записать короткий выпуск новостей, видео пришлют по e-mail.',
            },
            {
              kind: 'mc',
              question: 'Welche Abteilung ist die neueste?',
              options: ['Telefon', 'Radio und Fernsehen', 'Internet und soziale Medien'],
              answer: 2,
              explanationRu: '«die neueste Abteilung im Dachgeschoss: das Internet und die sozialen Medien» — открыта только с марта.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Brauchen wir noch die gedruckte Zeitung?',
      kind: 'discussion',
      speakers: { A: 'Moderatorin Frau Klein', B: 'Herr Albers, Chefredakteur einer Lokalzeitung', C: 'Frau Yilmaz, Studentin und Bloggerin' },
      situation: 'Sie hören eine Diskussion im Radio. Die Moderatorin spricht mit zwei Gästen über die Zukunft der Zeitung.',
      text: `A: Guten Abend und herzlich willkommen zu „Thema am Abend“. Immer weniger Menschen kaufen eine gedruckte Zeitung. Brauchen wir die Zeitung auf Papier überhaupt noch? Darüber spreche ich heute mit Herrn Albers, Chefredakteur einer Lokalzeitung, und mit Frau Yilmaz, Studentin und Bloggerin. Herr Albers, wie sieht es bei Ihnen aus?
B: Ehrlich gesagt: nicht so gut wie vor zwanzig Jahren. Wir haben heute ungefähr ein Drittel weniger Abonnenten. Aber unsere Leserinnen und Leser sind sehr treu. Viele lesen die Zeitung jeden Morgen beim Frühstück, das ist für sie ein festes Ritual.
A: Frau Yilmaz, haben Sie eine Zeitung abonniert?
C: Nein, und in meinem Freundeskreis kenne ich auch niemanden, der eine hat. Ich informiere mich fast nur mit dem Handy, über Nachrichten-Apps und Podcasts. Das ist schneller und meistens auch billiger.
B: Schneller ja, aber nicht unbedingt besser. Im Internet ist es viel schwieriger zu erkennen, welche Quelle glaubwürdig ist. Bei uns prüfen zwei Kollegen jeden Artikel, bevor er erscheint.
C: Das stimmt so nicht ganz. Die großen Nachrichten-Apps gehören ja oft zu genau denselben Zeitungen. Da arbeiten dieselben Journalisten. Ich lese also eigentlich auch Zeitung, nur eben auf dem Bildschirm.
A: Das heißt, das Problem ist eher das Papier und nicht der Journalismus?
C: Genau. Und Papier ist auch nicht besonders umweltfreundlich, wenn man bedenkt, wie viele Zeitungen abends ungelesen im Müll landen.
B: Da muss ich widersprechen. Auch Handys und Server verbrauchen eine Menge Energie. Was mir aber wichtiger ist: Ältere Menschen lesen am liebsten auf Papier. Die dürfen wir nicht vergessen.
A: Ein Hörer hat uns übrigens geschrieben, dass er am Wochenende gern die gedruckte Zeitung liest und unter der Woche online. Ist das vielleicht die Lösung?
B: Für viele sicher. Wir bieten deshalb jetzt auch ein Wochenend-Abo an. Das ist günstiger als das normale Abo und wird sehr gut angenommen.
C: Das finde ich eine gute Idee. Je flexibler die Angebote sind, desto mehr junge Leute bezahlen auch für Journalismus. Für eine wirklich gute App würde ich sogar mehr bezahlen als jetzt.
A: Vielen Dank Ihnen beiden für das Gespräch!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aussagen. Hören Sie dann die Diskussion. Wer sagt was?',
          instructionRu: 'Прослушайте дискуссию. Кто что говорит?',
          options: ['Moderatorin Frau Klein', 'Herr Albers', 'Frau Yilmaz'],
          items: [
            {
              kind: 'match',
              prompt: 'Die Zahl der Abonnenten ist kleiner geworden.',
              answer: 1,
              explanationRu: 'Херр Альберс: «Wir haben heute ungefähr ein Drittel weniger Abonnenten».',
            },
            {
              kind: 'match',
              prompt: 'Ich bekomme meine Nachrichten fast nur über das Smartphone.',
              answer: 2,
              explanationRu: 'Фрау Йылмаз: «Ich informiere mich fast nur mit dem Handy».',
            },
            {
              kind: 'match',
              prompt: 'Im Internet erkennt man schlechter, ob eine Quelle zuverlässig ist.',
              answer: 1,
              explanationRu: 'Херр Альберс: «Im Internet ist es viel schwieriger zu erkennen, welche Quelle glaubwürdig ist».',
            },
            {
              kind: 'match',
              prompt: 'Online-Nachrichten kommen oft von denselben Journalisten wie die Zeitung.',
              answer: 2,
              explanationRu: 'Фрау Йылмаз: в больших новостных приложениях работают те же журналисты, что и в газетах.',
            },
            {
              kind: 'match',
              prompt: 'Vielleicht ist nicht der Journalismus das Problem, sondern das Papier.',
              answer: 0,
              explanationRu: 'Модератор спрашивает: «Das heißt, das Problem ist eher das Papier und nicht der Journalismus?»',
            },
            {
              kind: 'match',
              prompt: 'Auch digitale Geräte belasten die Umwelt.',
              answer: 1,
              explanationRu: 'Херр Альберс возражает: «Auch Handys und Server verbrauchen eine Menge Energie».',
            },
            {
              kind: 'match',
              prompt: 'Ein Hörer liest am Wochenende auf Papier und an Werktagen digital.',
              answer: 0,
              explanationRu: 'Модератор рассказывает о письме слушателя: в выходные — газета, в будни — онлайн.',
            },
            {
              kind: 'match',
              prompt: 'Junge Leute zahlen eher für Nachrichten, wenn die Angebote flexibel sind.',
              answer: 2,
              explanationRu: 'Фрау Йылмаз: «Je flexibler die Angebote sind, desto mehr junge Leute bezahlen auch für Journalismus».',
            },
          ],
        },
      ],
    },
  ],
};
