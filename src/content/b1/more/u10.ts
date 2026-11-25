import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Kannst du mir helfen, den Tisch für die Gäste ___?',
      options: ['zu decken', 'decken', 'zudecken', 'gedeckt'],
      answer: 0,
      explanationRu: 'После helfen + дополнение идёт инфинитив с zu в конце: den Tisch zu decken. zudecken — другой глагол («укрывать»).',
    },
    {
      type: 'choice',
      prompt: 'Wir wollen dieses Jahr Silvester in Berlin ___.',
      options: ['feiern', 'zu feiern', 'gefeiert', 'um zu feiern'],
      answer: 0,
      explanationRu: 'Ловушка: после модальных глаголов (wollen, können, müssen …) инфинитив стоит без zu.',
    },
    {
      type: 'choice',
      prompt: '___ wir früher Besuch hatten, hat meine Mutter immer ihren berühmten Apfelkuchen gebacken.',
      options: ['Als', 'Wann', 'Wenn', 'Ob'],
      answer: 2,
      explanationRu: 'Повторяющееся действие в прошлом (immer, jedes Mal) → wenn. als — только для однократного события в прошлом, wann — вопросительное слово.',
    },
    {
      type: 'choice',
      prompt: 'Wir gehen früh los, ___ beim Umzug einen guten Platz zu bekommen.',
      options: ['damit', 'um', 'statt', 'ohne'],
      answer: 1,
      explanationRu: 'Цель при одном и том же подлежащем (wir) и инфинитив с zu в конце → um … zu.',
    },
    {
      type: 'choice',
      prompt: '___ zu feiern, mussten wir am Silvesterabend arbeiten.',
      options: ['Um', 'Ohne', 'Statt', 'Damit'],
      answer: 2,
      explanationRu: 'statt … zu = «вместо того чтобы»: вместо празднования мы работали.',
    },
    {
      type: 'choice',
      prompt: 'Weißt du, ___ das Stadtfest anfängt?',
      options: ['wann', 'wenn', 'als', 'während'],
      answer: 0,
      explanationRu: 'Косвенный вопрос «когда?» → wann. wenn и als — союзы временных придаточных, а не вопросительные слова.',
    },
    {
      type: 'gap',
      prompt: 'Vergiss nicht, die Getränke für die Party ___.',
      answers: ['einzukaufen'],
      hintRu: 'einkaufen',
      explanationRu: 'У отделяемых глаголов zu ставится между приставкой и корнем: ein-zu-kaufen (одним словом).',
    },
    {
      type: 'gap',
      prompt: 'Es ist gar nicht so einfach, eine große Hochzeit ___ organisieren.',
      answers: ['zu'],
      explanationRu: 'После выражений типа es ist einfach/schwer/wichtig инфинитив стоит с zu.',
    },
    {
      type: 'gap',
      prompt: 'Nachdem wir den Weihnachtsbaum geschmückt ___, packten wir die Geschenke aus.',
      answers: ['hatten'],
      explanationRu: 'nachdem + Plusquamperfekt, если главное предложение в прошедшем времени (packten): geschmückt hatten.',
    },
    {
      type: 'gap',
      prompt: 'Sie hat das Geschenk aufgemacht, ___ die Karte zu lesen.',
      answers: ['ohne'],
      explanationRu: 'ohne … zu = «не (сделав что-то)»: открыла подарок, не прочитав открытку.',
    },
    {
      type: 'gap',
      prompt: '___ die Band spielte, tanzten alle auf dem Marktplatz.',
      answers: ['Während', 'Als'],
      explanationRu: 'Одновременные действия: während (пока, в то время как). Возможно и als (однократная ситуация в прошлом). Глагол spielte — в конце придаточного.',
    },
    {
      type: 'gap',
      prompt: 'Wir stellen ein Schild an die Straße, ___ die Gäste das Haus leichter finden.',
      answers: ['damit'],
      explanationRu: 'Разные подлежащие (wir — die Gäste) → цель выражается через damit + придаточное, um … zu невозможно.',
    },
    {
      type: 'gap',
      prompt: 'Am 3. Oktober ___ in Deutschland der Tag der Deutschen Einheit gefeiert.',
      answers: ['wird'],
      explanationRu: 'Повторение раздела 09: пассив Präsens — wird + Partizip II (gefeiert). Подлежащее der Tag — ед. ч.',
    },
    {
      type: 'order',
      words: ['Wir', 'haben', 'vor,', 'im', 'Mai', 'eine', 'große', 'Gartenparty', 'zu', 'feiern.'],
      translationRu: 'Мы собираемся в мае устроить большую вечеринку в саду.',
      explanationRu: 'После vorhaben — инфинитивная группа с zu, zu feiern стоит в самом конце. eine große Gartenparty — Akk. ж. р. → -e.',
    },
    {
      type: 'order',
      words: ['Als', 'meine', 'Großeltern', 'heirateten,', 'gab', 'es', 'kein', 'großes', 'Fest.'],
      translationRu: 'Когда мои бабушка и дедушка поженились, большого праздника не было.',
      explanationRu: 'als — однократное событие в прошлом, глагол heirateten в конце придаточного; главное начинается с глагола gab. Повторение раздела 06: kein großes Fest (Akk. ср. р. → -es).',
    },
    {
      type: 'order',
      words: ['Es', 'wäre', 'schön,', 'wenn', 'du', 'zu', 'meiner', 'Feier', 'kommen', 'könntest.'],
      translationRu: 'Было бы здорово, если бы ты смог(ла) прийти на мой праздник.',
      explanationRu: 'Повторение раздела 08: Es wäre schön, wenn … + Konjunktiv II (könntest в конце). Здесь zu — предлог (zu meiner Feier), а не частица инфинитива.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью um … zu.',
      prompt: 'Ich backe einen Kuchen. Ich will meiner Nachbarin zum Geburtstag gratulieren.',
      answers: ['Ich backe einen Kuchen, um meiner Nachbarin zum Geburtstag zu gratulieren.'],
      explanationRu: 'Подлежащее одно (ich) → um … zu. wollen исчезает, zu gratulieren — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью damit.',
      prompt: 'Wir schmücken den Raum. Die Gäste sollen sich wohlfühlen.',
      answers: ['Wir schmücken den Raum, damit die Gäste sich wohlfühlen.', 'Wir schmücken den Raum, damit sich die Gäste wohlfühlen.'],
      explanationRu: 'Разные подлежащие → damit. sollen в придаточном с damit обычно опускается, глагол wohlfühlen — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью nachdem (используйте Plusquamperfekt).',
      prompt: 'Wir aßen die Torte. Dann sangen wir Lieder.',
      answers: ['Nachdem wir die Torte gegessen hatten, sangen wir Lieder.', 'Wir sangen Lieder, nachdem wir die Torte gegessen hatten.'],
      explanationRu: 'Более раннее действие — в Plusquamperfekt (gegessen hatten), более позднее — в Präteritum (sangen). dann исчезает.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью statt … zu.',
      prompt: 'Wir kaufen keine Geschenke. Wir spenden das Geld.',
      answers: ['Statt Geschenke zu kaufen, spenden wir das Geld.', 'Wir spenden das Geld, statt Geschenke zu kaufen.', 'Anstatt Geschenke zu kaufen, spenden wir das Geld.', 'Wir spenden das Geld, anstatt Geschenke zu kaufen.'],
      explanationRu: 'statt (anstatt) … zu + Infinitiv; отрицание keine исчезает: Geschenke zu kaufen.',
    },
  ],
  reading: [
    {
      title: 'Leserbriefe: Ein soziales Pflichtjahr für alle?',
      textType: 'Leserbriefe',
      texts: [
        {
          label: 'Ewa, 52',
          body: 'Ich engagiere mich seit zwanzig Jahren ehrenamtlich bei der Tafel. Viele junge Leute, die bei uns mithelfen, sagen schon nach ein paar Wochen, dass sie unglaublich viel gelernt haben. Ein Pflichtjahr würde allen helfen, über den eigenen Tellerrand zu schauen. Ich finde die Idee hervorragend.',
        },
        {
          label: 'Lukas, 19',
          body: 'Ich habe gerade Abitur gemacht und möchte so schnell wie möglich anfangen zu studieren. Ein ganzes Jahr verlieren, nur weil der Staat es so will? Wer helfen möchte, soll das freiwillig tun. Zwang ist der falsche Weg.',
        },
        {
          label: 'Gerhard, 70',
          body: 'Als ich jung war, gab es noch den Zivildienst. Ich habe damals in einem Krankenhaus gearbeitet, und das war eine der wichtigsten Erfahrungen meines Lebens. Heute fehlen überall Leute in der Pflege. Ein Pflichtjahr wäre eine gute Möglichkeit, dieses Problem wenigstens etwas kleiner zu machen.',
        },
        {
          label: 'Hanna, 34',
          body: 'Als Krankenschwester sehe ich das anders: Pflege ist ein Beruf, den man lernen muss. Junge Leute ohne Ausbildung können keine Fachkräfte ersetzen. Statt ein Pflichtjahr einzuführen, sollte man lieber die Pflegekräfte besser bezahlen.',
        },
        {
          label: 'Murat, 41',
          body: 'Meine Tochter hat nach der Schule ein freiwilliges soziales Jahr in einem Kindergarten gemacht. Vorher wusste sie nicht, was sie werden wollte – danach war klar: Erzieherin! Leider machen so etwas viel zu wenige. Deshalb bin ich dafür, dass alle Jugendlichen ein solches Jahr machen müssen.',
        },
        {
          label: 'Sophie, 23',
          body: 'Ich habe ein freiwilliges Jahr in Ghana gemacht, und es war toll. Aber gerade weil ich es freiwillig gemacht habe, war ich so motiviert. Wenn man Menschen zwingt, haben sie keine Lust – und das merken auch die Menschen, um die sie sich kümmern sollen.',
        },
        {
          label: 'Bernd, 58',
          body: 'In meiner Firma stelle ich am liebsten junge Leute ein, die schon einmal Verantwortung übernommen haben. Ein soziales Jahr zeigt, dass jemand zuverlässig ist und gut mit anderen Menschen umgehen kann. Wenn alle so ein Jahr machen, profitiert die ganze Gesellschaft. Von mir aus kann es sofort losgehen.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Leserbriefe. Ist die Person für ein soziales Pflichtjahr für alle jungen Menschen?',
          instructionRu: 'Прочитайте письма читателей. Выступает ли автор за обязательный социальный год для всех молодых людей?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            {
              kind: 'tf',
              statement: 'Ewa',
              answer: true,
              explanationRu: 'Да: «Ich finde die Idee hervorragend» — такой год помогает выйти за рамки привычного.',
            },
            {
              kind: 'tf',
              statement: 'Lukas',
              answer: false,
              explanationRu: 'Нет: он хочет скорее учиться, помогать нужно добровольно, «Zwang ist der falsche Weg».',
            },
            {
              kind: 'tf',
              statement: 'Gerhard',
              answer: true,
              explanationRu: 'Да: альтернативная служба была для него важным опытом, обязательный год помог бы решить нехватку людей в уходе за больными.',
            },
            {
              kind: 'tf',
              statement: 'Hanna',
              answer: false,
              explanationRu: 'Нет: молодёжь без образования не заменит специалистов, лучше больше платить медсёстрам («Statt ein Pflichtjahr einzuführen …»).',
            },
            {
              kind: 'tf',
              statement: 'Murat',
              answer: true,
              explanationRu: 'Да: «Deshalb bin ich dafür, dass alle Jugendlichen ein solches Jahr machen müssen».',
            },
            {
              kind: 'tf',
              statement: 'Sophie',
              answer: false,
              explanationRu: 'Нет: её год был удачным именно потому, что был добровольным; по принуждению у людей нет мотивации.',
            },
            {
              kind: 'tf',
              statement: 'Bernd',
              answer: true,
              explanationRu: 'Да: социальный год показывает надёжность, выигрывает всё общество — «Von mir aus kann es sofort losgehen».',
            },
          ],
        },
      ],
    },
    {
      title: 'Hinweise für die Vermietung des Festsaals',
      textType: 'Hausordnung',
      texts: [
        {
          heading: 'Bürgerhaus Lindenau – Hinweise für die Vermietung des Festsaals',
          body: `Sie möchten eine Hochzeit, einen runden Geburtstag oder ein Vereinsfest feiern? Unser Festsaal bietet Platz für bis zu 120 Personen. Bitte beachten Sie die folgenden Regeln.

Reservierung: Der Saal kann frühestens zwölf Monate vor der Feier reserviert werden. Die Reservierung ist erst gültig, wenn Sie den Mietvertrag unterschrieben und eine Kaution von 300 Euro überwiesen haben. Die Kaution bekommen Sie nach der Feier zurück, wenn keine Schäden entstanden sind.

Nutzungszeiten: Private Feiern müssen um 1 Uhr nachts beendet sein. Ab 22 Uhr müssen die Fenster geschlossen bleiben, damit die Nachbarn nicht gestört werden. Musik im Außenbereich ist nicht erlaubt.

Küche und Essen: Die Küche mit Kühlschränken und Geschirr für 120 Personen kann für 50 Euro zusätzlich gemietet werden. Sie dürfen das Essen selbst mitbringen oder einen Partyservice Ihrer Wahl beauftragen.

Dekoration: Dekorieren ist ausdrücklich erwünscht. Es ist aber verboten, Nägel in die Wände zu schlagen oder Konfetti zu verwenden. Kerzen sind nur auf den Tischen erlaubt.

Nach der Feier: Der Saal muss am nächsten Tag bis 12 Uhr besenrein übergeben werden. Wer keine Lust hat, selbst aufzuräumen, kann eine Endreinigung für 80 Euro buchen. Der Müll muss getrennt in die bereitgestellten Behälter geworfen werden.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aufgaben und den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте правила и выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Wann ist die Reservierung gültig?',
              options: ['sofort nach dem ersten Anruf', 'wenn man den Vertrag unterschrieben und die Kaution bezahlt hat', 'genau zwölf Monate vor der Feier'],
              answer: 1,
              explanationRu: '«Die Reservierung ist erst gültig, wenn Sie den Mietvertrag unterschrieben und eine Kaution … überwiesen haben». 12 месяцев — самый ранний срок брони.',
            },
            {
              kind: 'mc',
              question: 'Was gilt für die Musik?',
              options: ['Draußen darf keine Musik gespielt werden.', 'Ab 22 Uhr muss die Musik ausgeschaltet werden.', 'Im Garten ist Musik bis 1 Uhr erlaubt.'],
              answer: 0,
              explanationRu: '«Musik im Außenbereich ist nicht erlaubt». С 22 часов нужно лишь закрыть окна, музыку выключать не требуется.',
            },
            {
              kind: 'mc',
              question: 'Was ist beim Essen richtig?',
              options: ['Man muss den Partyservice des Bürgerhauses nehmen.', 'Die Küche ist im Mietpreis enthalten.', 'Man darf das Essen selbst mitbringen.'],
              answer: 2,
              explanationRu: '«Sie dürfen das Essen selbst mitbringen oder einen Partyservice Ihrer Wahl beauftragen». Кухня стоит дополнительно 50 евро.',
            },
            {
              kind: 'mc',
              question: 'Was ist bei der Dekoration erlaubt?',
              options: ['Konfetti auf die Tanzfläche werfen', 'Kerzen auf die Tische stellen', 'Bilder mit Nägeln an die Wand hängen'],
              answer: 1,
              explanationRu: '«Kerzen sind nur auf den Tischen erlaubt». Гвозди и конфетти запрещены.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Überraschungsparty',
      kind: 'dialog',
      speakers: { A: 'Nina', B: 'Kerstin, ihre Freundin' },
      situation: 'Sie hören ein Telefongespräch zwischen zwei Freundinnen.',
      text: `A: Hallo Kerstin, hast du kurz Zeit? Es geht um Michaels Geburtstag.
B: Klar, Nina. Er wird doch vierzig, oder? Wann genau ist das?
A: Am Samstag in drei Wochen. Ich habe vor, eine Überraschungsparty für ihn zu organisieren. Aber er darf natürlich nichts davon wissen.
B: Oh, wie schön! Wo soll die Party denn stattfinden? Eure Wohnung ist doch viel zu klein.
A: Genau, deshalb habe ich gestern im Tennisverein gefragt. Dort können wir den Raum kostenlos benutzen, weil Michael schon so lange Mitglied ist.
B: Perfekt. Und wie bekommst du ihn dahin, ohne dass er etwas merkt?
A: Ich sage ihm, dass wir mit Freunden essen gehen. Bevor wir ins Restaurant fahren, behaupte ich, dass ich noch schnell meine Tasche im Verein abholen muss. Und wenn wir reinkommen, rufen alle „Überraschung!“.
B: Ha, das ist gut! Kann ich dir irgendwie helfen?
A: Ja, deshalb rufe ich ja an. Du backst doch so tolle Torten. Hättest du Lust, eine Geburtstagstorte zu backen?
B: Natürlich, sehr gern! Und um die Getränke kümmere ich mich auch, mein Bruder hat einen großen Wagen.
A: Das wäre super. Um die Musik kümmert sich Michaels Kollege Tom, der legt manchmal als DJ auf.
B: Und wie viele Leute kommen ungefähr?
A: Ich habe fünfzig Leute eingeladen, aber bis jetzt haben erst dreißig geantwortet.
B: Dann schreib doch allen noch mal eine kurze Nachricht, damit sie bis nächsten Sonntag antworten.
A: Gute Idee, das mache ich heute Abend. Und bitte: kein Wort zu Michael!
B: Versprochen!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aussagen. Hören Sie dann das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Michael wird vierzig Jahre alt.',
              answer: true,
              explanationRu: 'Верно: «Er wird doch vierzig, oder?» — Нина это подтверждает.',
            },
            {
              kind: 'tf',
              statement: 'Die Party soll in Ninas und Michaels Wohnung stattfinden.',
              answer: false,
              explanationRu: 'Неверно: квартира слишком маленькая, праздник будет в теннисном клубе.',
            },
            {
              kind: 'tf',
              statement: 'Für den Raum im Tennisverein muss Nina nichts bezahlen.',
              answer: true,
              explanationRu: 'Верно: помещение можно использовать бесплатно, потому что Михаэль давно член клуба.',
            },
            {
              kind: 'tf',
              statement: 'Nina will Michael vorher von der Party erzählen.',
              answer: false,
              explanationRu: 'Неверно: это сюрприз, она скажет ему, что они идут ужинать с друзьями.',
            },
            {
              kind: 'tf',
              statement: 'Kerstin backt die Geburtstagstorte.',
              answer: true,
              explanationRu: 'Верно: на вопрос Нины она отвечает «Natürlich, sehr gern!».',
            },
            {
              kind: 'tf',
              statement: 'Ein Kollege von Michael ist für die Musik zuständig.',
              answer: true,
              explanationRu: 'Верно: «Um die Musik kümmert sich Michaels Kollege Tom».',
            },
            {
              kind: 'tf',
              statement: 'Alle Gäste haben schon auf die Einladung geantwortet.',
              answer: false,
              explanationRu: 'Неверно: из пятидесяти приглашённых ответили пока только тридцать.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Feuerwerk an Silvester – verbieten?',
      kind: 'discussion',
      speakers: { A: 'Moderatorin Frau Haupt', B: 'Herr Seidel, Feuerwehrmann', C: 'Frau Otto, Heimatverein Altstadt' },
      situation: 'Sie hören eine Diskussion im Radio. Die Moderatorin spricht mit zwei Gästen über Feuerwerk an Silvester.',
      text: `A: Guten Abend, liebe Hörerinnen und Hörer. Bald ist wieder Silvester, und jedes Jahr wird diskutiert: Sollte privates Feuerwerk verboten werden? Darüber spreche ich mit Herrn Seidel von der Berufsfeuerwehr und mit Frau Otto vom Heimatverein Altstadt. Herr Seidel, wie erleben Sie die Silvesternacht?
B: Für uns ist es jedes Jahr die anstrengendste Nacht. Wir haben in wenigen Stunden mehr Einsätze als sonst in einer ganzen Woche: brennende Mülltonnen, Balkonbrände und leider auch viele Verletzte. Ich bin deshalb dafür, privates Feuerwerk zu verbieten.
C: Ich verstehe die Feuerwehr. Aber Feuerwerk gehört für mich einfach zu Silvester dazu. Seit ich ein kleines Kind war, gehen wir um Mitternacht mit der ganzen Familie auf die Straße. Das ist eine Tradition, die ich nicht verlieren möchte.
A: Viele Hörerinnen und Hörer haben uns auch wegen ihrer Tiere geschrieben. Hunde und Katzen haben in dieser Nacht oft große Angst.
C: Das stimmt, unser Hund versteckt sich jedes Jahr unter dem Bett. Wir lassen ihn deshalb nie allein, während draußen geknallt wird.
B: Und dazu kommt der Feinstaub. In der Neujahrsnacht wird die Luft in manchen Städten so stark verschmutzt wie sonst im ganzen Jahr nicht.
C: Aber ein komplettes Verbot geht mir zu weit. Wie wäre es mit festen Zonen? Man könnte Feuerwerk zum Beispiel in der Altstadt mit den alten Holzhäusern verbieten und auf großen Plätzen erlauben.
B: Solche Zonen gibt es in einigen Städten schon. Das Problem ist: Wir können sie kaum kontrollieren. Ich fände ein großes, professionelles Feuerwerk der Stadt besser. Dann können alle zusammen feiern, ohne sich selbst in Gefahr zu bringen.
A: Ein zentrales Feuerwerk für alle – Frau Otto, wäre das für Sie eine Lösung?
C: Hm, für die Kinder wäre das sicher schön. Aber selbst eine Rakete anzuzünden, ist eben etwas anderes. Darauf möchten viele Leute nicht verzichten.
A: Wir merken schon: Bei diesem Thema ist es schwer, sich zu einigen. Vielen Dank Ihnen beiden!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Lesen Sie die Aussagen. Hören Sie dann die Diskussion. Wer sagt was?',
          instructionRu: 'Прослушайте дискуссию. Кто что говорит?',
          options: ['Moderatorin Frau Haupt', 'Herr Seidel', 'Frau Otto'],
          items: [
            {
              kind: 'match',
              prompt: 'Silvester ist für meine Arbeit die schwierigste Nacht des Jahres.',
              answer: 1,
              explanationRu: 'Херр Зайдель (пожарный): «Für uns ist es jedes Jahr die anstrengendste Nacht».',
            },
            {
              kind: 'match',
              prompt: 'Ich feiere Silvester schon seit meiner Kindheit mit Feuerwerk.',
              answer: 2,
              explanationRu: 'Фрау Отто: «Seit ich ein kleines Kind war, gehen wir um Mitternacht … auf die Straße».',
            },
            {
              kind: 'match',
              prompt: 'Viele Menschen machen sich Sorgen um ihre Haustiere.',
              answer: 0,
              explanationRu: 'Модератор: многие слушатели написали из-за своих животных.',
            },
            {
              kind: 'match',
              prompt: 'Durch das Feuerwerk wird die Luft stark verschmutzt.',
              answer: 1,
              explanationRu: 'Херр Зайдель говорит о мелкодисперсной пыли (Feinstaub) в новогоднюю ночь.',
            },
            {
              kind: 'match',
              prompt: 'Man könnte Feuerwerk nur an bestimmten Orten verbieten.',
              answer: 2,
              explanationRu: 'Фрау Отто предлагает зоны: запретить в старом городе, разрешить на больших площадях.',
            },
            {
              kind: 'match',
              prompt: 'Ein Feuerwerk, das die Stadt organisiert, wäre sicherer.',
              answer: 1,
              explanationRu: 'Херр Зайдель: большой профессиональный салют от города — праздновать, не подвергая себя опасности.',
            },
            {
              kind: 'match',
              prompt: 'Viele Leute wollen ihre Raketen selbst anzünden.',
              answer: 2,
              explanationRu: 'Фрау Отто: «selbst eine Rakete anzuzünden, ist eben etwas anderes. Darauf möchten viele Leute nicht verzichten».',
            },
            {
              kind: 'match',
              prompt: 'Bei diesem Thema ist eine Einigung schwierig.',
              answer: 0,
              explanationRu: 'Модератор в конце: «Bei diesem Thema ist es schwer, sich zu einigen».',
            },
          ],
        },
      ],
    },
  ],
};
