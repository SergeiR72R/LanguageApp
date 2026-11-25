import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Der Pflegeroboter reagiert sogar auf ein ___ Gesicht.',
      options: ['lächelndes', 'lächelnde', 'gelächeltes', 'lächelnd'],
      answer: 0,
      explanationRu: 'Лицо улыбается само (активное действие) → Partizip I lächelnd. После ein в Akkusativ среднего рода окончание -es: ein lächelndes Gesicht.',
    },
    {
      type: 'gap',
      prompt: 'Die ___ Bevölkerung braucht in Zukunft mehr Unterstützung durch Technik.',
      answers: ['alternde'],
      hintRu: 'altern — стареть; Partizip I',
      explanationRu: 'Население стареет (процесс идёт сейчас) → Partizip I: altern + d = alternd + окончание -e (die … Bevölkerung, Nominativ).',
    },
    {
      type: 'choice',
      prompt: 'Die Forscher untersuchen den Meteoriten, der im Mai abgestürzt ist. → Die Forscher untersuchen den im Mai ___ Meteoriten.',
      options: ['abstürzenden', 'abgestürzten', 'abgestürzte', 'abgestürztem'],
      answer: 1,
      explanationRu: 'abstürzen образует Perfekt с sein, поэтому Partizip II здесь активное и завершённое: «упавший». Den … Meteoriten (Akkusativ) → окончание -en.',
    },
    {
      type: 'gap',
      prompt: 'Wegen der ständig ___ Datenmengen brauchen Rechenzentren immer mehr Strom.',
      answers: ['zunehmenden'],
      hintRu: 'zunehmen, Partizip I',
      explanationRu: 'Объёмы данных растут (одновременное активное действие) → Partizip I zunehmend. Wegen + Genitiv, мн. ч.: der zunehmenden Datenmengen. Приставка zu- остаётся слитной.',
    },
    {
      type: 'choice',
      prompt: 'Welche Wortgruppe ist NICHT korrekt?',
      options: [
        'die arbeitenden Roboter',
        'die eingesetzten Roboter',
        'die gearbeiteten Roboter',
        'die neu entwickelten Roboter',
      ],
      answer: 2,
      explanationRu: 'Partizip II непереходного глагола с haben (arbeiten → hat gearbeitet) нельзя использовать как определение. Возможны: Partizip I (arbeitende) или Partizip II переходных глаголов (eingesetzte, entwickelte).',
    },
    {
      type: 'gap',
      prompt: 'In der vor Kurzem ___ Forschungsstation arbeiten 40 Wissenschaftlerinnen und Wissenschaftler.',
      answers: ['errichteten'],
      hintRu: 'errichten — сооружать; Partizip II',
      explanationRu: 'Станцию построили (пассив, завершено) → Partizip II errichtet. In der … Station (Dativ, ж. р.) → окончание -en.',
    },
    {
      type: 'gap',
      prompt: 'Unabhängig voneinander ___ Studien zeigen, dass das neue Verfahren zuverlässig ist.',
      answers: ['durchgeführte'],
      hintRu: 'durchführen, Partizip II',
      explanationRu: 'Перед существительным нет артикля (мн. ч., Nominativ) → сильное окончание -e: durchgeführte Studien. Ловушка: многие пишут -en по привычке.',
    },
    {
      type: 'choice',
      prompt: 'Die sich rasant ___ Technologie verändert unseren Alltag.',
      options: ['entwickelte', 'entwickelnde', 'entwickelnden', 'entwickelt'],
      answer: 1,
      explanationRu: 'sich entwickeln — процесс происходит сейчас → Partizip I. Возвратное местоимение sich остаётся внутри определения. Die … Technologie (Nominativ) → -e.',
    },
    {
      type: 'gap',
      prompt: 'Der vor drei Tagen ___ Astronaut wird noch medizinisch untersucht.',
      answers: ['zurückgekehrte'],
      hintRu: 'zurückkehren, Partizip II',
      explanationRu: 'zurückkehren образует Perfekt с sein → Partizip II имеет активное значение «вернувшийся». Der … Astronaut (Nominativ) → -e.',
    },
    {
      type: 'order',
      words: ['Die', 'im Labor', 'gemessenen', 'Werte', 'müssen', 'noch', 'überprüft', 'werden.'],
      translationRu: 'Значения, измеренные в лаборатории, ещё нужно проверить.',
      explanationRu: 'Определение (im Labor gemessenen) стоит между артиклем и существительным. Дальше — пассив с модальным глаголом: müssen … überprüft werden.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное определительное причастным определением.',
      prompt: 'Roboter, die selbstständig lernen, werden in Fabriken immer häufiger eingesetzt.',
      answers: ['Selbstständig lernende Roboter werden in Fabriken immer häufiger eingesetzt.'],
      explanationRu: 'Активное действие в настоящем (lernen) → Partizip I lernend. Без артикля во мн. ч. — сильное окончание -e.',
    },
    {
      type: 'choice',
      prompt: 'Mit dem gerade ___ Impfstoff können Millionen Menschen geschützt werden.',
      options: ['zugelassene', 'zulassenden', 'zugelassenen', 'zugelassenem'],
      answer: 2,
      explanationRu: 'Вакцину допустили (пассив) → Partizip II zugelassen. Mit dem … (Dativ) после определённого артикля → слабое окончание -en.',
    },
    {
      type: 'gap',
      prompt: 'Die von der App ___ Standortdaten wurden jahrelang nicht gelöscht.',
      answers: ['gespeicherten', 'gesammelten', 'erfassten', 'erhobenen'],
      hintRu: 'speichern, Partizip II',
      explanationRu: 'Данные сохранены приложением (пассив, von + Dativ = кем) → Partizip II gespeichert + -en (die … Daten, мн. ч.).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное определительное причастным определением.',
      prompt: 'Der Satellit, der vor drei Wochen abgestürzt ist, war seit 1998 im All.',
      answers: ['Der vor drei Wochen abgestürzte Satellit war seit 1998 im All.'],
      explanationRu: 'Глагол с sein в Perfekt (ist abgestürzt) → Partizip II с активным значением. Обстоятельство vor drei Wochen стоит перед причастием.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените причастное определение придаточным определительным.',
      prompt: 'Das von zwei Studentinnen entwickelte Programm erkennt Falschmeldungen.',
      answers: [
        'Das Programm, das von zwei Studentinnen entwickelt wurde, erkennt Falschmeldungen.',
        'Das Programm, das von zwei Studentinnen entwickelt worden ist, erkennt Falschmeldungen.',
      ],
      explanationRu: 'Partizip II переходного глагола = пассив: entwickelt wurde (или entwickelt worden ist). Относительное местоимение das согласуется с das Programm.',
    },
    {
      type: 'gap',
      prompt: 'Das ist die Physikerin, ___ Erfindung die Solarbranche revolutioniert hat.',
      answers: ['deren'],
      hintRu: 'повторение B1: относительное местоимение в Genitiv',
      explanationRu: 'Повторение: относительное местоимение в родительном падеже («чьё изобретение»). Для женского рода — deren, для мужского и среднего — dessen.',
    },
    {
      type: 'order',
      words: ['Der', 'seit Jahren', 'an Alzheimer', 'forschende', 'Professor', 'hat', 'einen Durchbruch', 'erzielt.'],
      translationRu: 'Профессор, который уже много лет исследует болезнь Альцгеймера, совершил прорыв.',
      explanationRu: 'Расширенное определение: артикль + время + предложное дополнение + Partizip I + существительное. Сначала найдите Der … Professor.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное определительное причастным определением.',
      prompt: 'Wir arbeiten mit einem Verfahren, das in Japan erfunden wurde.',
      answers: ['Wir arbeiten mit einem in Japan erfundenen Verfahren.'],
      explanationRu: 'Пассив → Partizip II erfunden. Определение вставляется между einem и Verfahren; mit einem … (Dativ) → -en.',
    },
    {
      type: 'order',
      words: ['Die Ergebnisse', 'der', 'von einem internationalen Team', 'durchgeführten', 'Studie', 'sind', 'umstritten.'],
      translationRu: 'Результаты исследования, проведённого международной командой, спорны.',
      explanationRu: 'Определение стоит внутри группы в Genitiv: der … Studie. Подлежащее предложения — die Ergebnisse, поэтому глагол sind во мн. ч.',
    },
    {
      type: 'choice',
      prompt: 'Das größte noch ___ Problem der Solarenergie ist die Speicherung.',
      options: ['gelöste', 'lösende', 'zu lösende', 'zu gelösten'],
      answer: 2,
      explanationRu: 'zu + Partizip I = «которое нужно / можно решить» (пассивное значение долженствования): das noch zu lösende Problem = das Problem, das noch gelöst werden muss. Эта форма часто встречается в научных текстах.',
    },
  ],
  reading: [
    {
      title: 'Leserkommentare: Fahrerlose Busse in Neustadt',
      textType: 'Leserkommentare',
      texts: [
        {
          label: 'Artikel',
          heading: 'Neustadt testet fahrerlose Busse',
          body: `Ab Herbst sollen in Neustadt erstmals selbstfahrende Kleinbusse im regulären Linienverkehr eingesetzt werden. Die von der Stadt bestellten Fahrzeuge bieten Platz für zwölf Fahrgäste und kommen ohne Fahrer aus. Zunächst ist eine Testphase von zwei Jahren geplant. Wir haben unsere Leserinnen und Leser nach ihrer Meinung gefragt.`,
        },
        {
          label: '1',
          heading: 'Gerda W., 68',
          body: `Ich fahre seit einem Jahr nicht mehr selbst Auto. In meinem Ortsteil kommt der Bus nur zweimal am Tag, abends gar nicht. Wenn keine Fahrer bezahlt werden müssen, könnten die Busse viel häufiger fahren, auch nachts. Ich hoffe sehr, dass die Stadt diese Fahrzeuge nicht nur in der Innenstadt einsetzt, sondern gerade in den Außenbezirken. Für Menschen wie mich wäre das ein großer Gewinn an Freiheit.`,
        },
        {
          label: '2',
          heading: 'Jonas K., 24',
          body: `Als Informatikstudent finde ich die Technik faszinierend. Aber mir fehlt in dem Artikel ein wichtiger Punkt: Was passiert, wenn sich jemand in das System hackt? Ein von außen gesteuerter Bus mit zwölf Fahrgästen – das ist kein Science-Fiction-Szenario. Bevor die Fahrzeuge auf die Straße dürfen, sollten sie von unabhängigen Experten auf Sicherheitslücken getestet werden, nicht nur vom Hersteller selbst.`,
        },
        {
          label: '3',
          heading: 'Murat S., Busfahrer',
          body: `Natürlich mache ich mir Sorgen um meinen Arbeitsplatz. Aber darum geht es mir gar nicht in erster Linie. Ein Busfahrer macht viel mehr als nur fahren. Ich helfe Rollstuhlfahrern beim Einsteigen, erkläre Touristen den Weg und sorge dafür, dass nachts niemand belästigt wird. Wer soll das in einem fahrerlosen Bus übernehmen? Eine Kamera hilft keiner älteren Dame mit schweren Einkaufstaschen.`,
        },
        {
          label: '4',
          heading: 'Dr. Anke L.',
          body: `Ich halte das Projekt für reine Imagepflege. Die Stadt gibt Millionen für eine noch unausgereifte Technik aus, während auf vielen bestehenden Linien die Busse überfüllt sind und die Fahrpreise jedes Jahr steigen. Mit demselben Geld könnte man zusätzliche normale Busse anschaffen und die Tickets günstiger machen. Ein politisches Problem lässt sich nicht mit einem technischen Spielzeug lösen.`,
        },
        {
          label: '5',
          heading: 'Petra M., 45',
          body: `Ich bin im Urlaub in einer anderen Stadt schon mit so einem Bus gefahren. Ehrlich gesagt war es etwas enttäuschend: Das Fahrzeug fuhr sehr langsam und bremste bei jedem Fahrradfahrer, der in der Nähe war. Ein Jogger hat uns überholt! Unsicher habe ich mich allerdings keinen Moment gefühlt, eher im Gegenteil. Ich denke, das ist eine Technik, die noch Zeit braucht, aber in ein paar Jahren wirklich alltagstauglich sein wird.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Kommentare 1–5. Welche Aussage a–h passt zu welchem Kommentar? Drei Aussagen passen nicht.',
          instructionRu: 'Прочитайте комментарии 1–5. Какое высказывание a–h подходит к какому комментарию? Три высказывания лишние.',
          options: [
            'Ein Fahrzeug kann nicht alle Aufgaben übernehmen, die bisher Menschen erledigen.',
            'Selbstfahrende Busse sind schon heute schneller als herkömmliche.',
            'Vor allem Menschen in schlecht angebundenen Stadtteilen könnten profitieren.',
            'Das Geld wäre in herkömmliche Verkehrsangebote besser investiert.',
            'Die Stadt hätte die Bürger vorher befragen müssen.',
            'Aus eigener Erfahrung hält die Person die Fahrzeuge für langsam, aber sicher.',
            'Die Fahrkarten für die neuen Busse werden zu teuer sein.',
            'Die Systeme sollten vor dem Einsatz unabhängig gegen Angriffe geprüft werden.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Kommentar 1',
              answer: 2,
              explanationRu: 'Gerda W. живёт в районе, куда автобус ходит два раза в день, и надеется на машины именно для окраин.',
            },
            {
              kind: 'match',
              prompt: 'Kommentar 2',
              answer: 7,
              explanationRu: 'Jonas K. боится взлома и требует проверки независимыми экспертами, а не только производителем.',
            },
            {
              kind: 'match',
              prompt: 'Kommentar 3',
              answer: 0,
              explanationRu: 'Murat S. перечисляет, что делает водитель кроме вождения (помощь, информация, безопасность).',
            },
            {
              kind: 'match',
              prompt: 'Kommentar 4',
              answer: 3,
              explanationRu: 'Dr. Anke L.: на те же деньги можно купить обычные автобусы и снизить цены на билеты.',
            },
            {
              kind: 'match',
              prompt: 'Kommentar 5',
              answer: 5,
              explanationRu: 'Petra M. уже ездила на таком автобусе: он медленный (их обогнал бегун), но она чувствовала себя в безопасности.',
            },
          ],
        },
      ],
    },
    {
      title: 'Fleisch ohne Tier',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `In einem unscheinbaren Gebäude am Rand von Leipzig steht ein glänzender Stahltank, der an eine Brauerei erinnert. Doch in dem etwa zwei Meter hohen Behälter wird kein Bier gebraut, sondern Fleisch gezüchtet. Das vor vier Jahren gegründete Start-up „ZellGut“ will Rindfleisch herstellen, ohne dass dafür ein einziges Tier geschlachtet werden muss.

Das Prinzip klingt einfach: Einem lebenden Rind werden unter örtlicher Betäubung einige Muskelzellen entnommen. Diese werden in einer speziellen Nährlösung vermehrt, die sie mit Zucker, Aminosäuren und Vitaminen versorgt. Nach etwa drei Wochen ist aus der winzigen Probe eine Masse entstanden, die zu Hackfleisch verarbeitet werden kann. „Ein Steak mit Fett und Bindegewebe herzustellen, ist dagegen noch sehr viel schwieriger“, erklärt die Biologin Mareike Sommer, die das Forschungsteam leitet.

Die größte Hürde ist bisher der Preis. Zwar sind die Produktionskosten in den letzten Jahren deutlich gesunken, doch ein im Labor hergestellter Burger kostet immer noch ein Vielfaches eines herkömmlichen. Ein Grund dafür ist die Nährlösung. Lange enthielt sie ein aus dem Blut ungeborener Kälber gewonnenes Serum – teuer und ethisch fragwürdig. „Wir haben ein pflanzliches Ersatzmittel entwickelt“, sagt Sommer. „Damit ist unser Produkt erstmals wirklich tierfrei.“

Ob Laborfleisch tatsächlich besser für das Klima ist, bleibt allerdings umstritten. Die Bioreaktoren verbrauchen viel Energie. Nur wenn diese aus erneuerbaren Quellen stammt, fällt die Bilanz eindeutig positiv aus, betonen Umweltwissenschaftler. Dafür wird deutlich weniger Fläche benötigt als in der Tierhaltung, und es entsteht kein Methan aus Rindermägen.

Auch die Verbraucher sind gespalten. In einer von der Firma selbst in Auftrag gegebenen Umfrage gaben zwar viele junge Menschen an, das Fleisch probieren zu wollen. Ältere Befragte reagierten dagegen skeptisch; viele bezeichneten das Produkt als „unnatürlich“. Bevor Laborfleisch in deutschen Supermärkten verkauft werden darf, muss es außerdem von den europäischen Behörden zugelassen werden – ein Verfahren, das Jahre dauern kann.

Sommer bleibt gelassen. „Auch Joghurt und Käse werden mithilfe von Mikroorganismen hergestellt, und niemand findet das seltsam“, sagt sie. „Wir stehen erst am Anfang. In zwanzig Jahren wird man sich wundern, dass für ein Schnitzel einmal ein ganzes Tier gehalten wurde.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist das Ziel von „ZellGut“?',
              options: [
                'in denselben Anlagen Bier und Fleisch zu produzieren',
                'Fleisch vollständig durch Pflanzenprodukte zu ersetzen',
                'Fleisch herzustellen, ohne Tiere dafür zu töten',
              ],
              answer: 2,
              explanationRu: '«…ohne dass dafür ein einziges Tier geschlachtet werden muss». Бак лишь напоминает пивоварню.',
            },
            {
              kind: 'mc',
              question: 'Was ist laut Mareike Sommer noch besonders schwierig?',
              options: [
                'Muskelzellen von lebenden Tieren zu gewinnen',
                'Fleischstücke mit natürlicher Struktur herzustellen',
                'Hackfleisch in großen Mengen zu verkaufen',
              ],
              answer: 1,
              explanationRu: 'Фарш получить можно, а вот стейк с жиром и соединительной тканью — «noch sehr viel schwieriger».',
            },
            {
              kind: 'mc',
              question: 'Warum war die Nährlösung früher problematisch?',
              options: [
                'Sie enthielt einen teuren Stoff tierischer Herkunft.',
                'Sie veränderte den Geschmack des Fleisches.',
                'Sie war nur kurze Zeit haltbar.',
              ],
              answer: 0,
              explanationRu: 'В ней была сыворотка из крови нерождённых телят — дорого и этически сомнительно.',
            },
            {
              kind: 'mc',
              question: 'Wovon hängt die Klimabilanz von Laborfleisch vor allem ab?',
              options: [
                'von der Größe der Bioreaktoren',
                'von der benötigten Fläche',
                'von der Herkunft der eingesetzten Energie',
              ],
              answer: 2,
              explanationRu: 'Баланс однозначно положительный, только если энергия из возобновляемых источников.',
            },
            {
              kind: 'mc',
              question: 'Was ergab die Umfrage?',
              options: [
                'Die meisten Befragten lehnen Laborfleisch ab.',
                'Jüngere Menschen sind neugieriger als ältere.',
                'Umweltverbände unterstützen das Produkt.',
              ],
              answer: 1,
              explanationRu: 'Многие молодые хотят попробовать, пожилые настроены скептически.',
            },
            {
              kind: 'mc',
              question: 'Wie sieht Mareike Sommer die Zukunft?',
              options: [
                'Sie ist überzeugt, dass Laborfleisch langfristig normal sein wird.',
                'Sie rechnet mit einer schnellen Zulassung in Europa.',
                'Sie glaubt, dass Laborfleisch Joghurt und Käse ersetzen wird.',
              ],
              answer: 0,
              explanationRu: 'Через двадцать лет будут удивляться, что ради шницеля держали целое животное. О быстром допуске речи нет — процедура может длиться годы.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Durchsage im Technikmuseum',
      kind: 'monolog',
      situation: 'Sie hören eine Durchsage in einem Museum.',
      text: `Liebe Besucherinnen und Besucher, bitte beachten Sie folgende Hinweise. Die für 14 Uhr angekündigte Vorführung unseres sprechenden Roboters „Max“ in Halle 3 muss heute leider ausfallen, da ein defektes Bauteil ausgetauscht werden muss. Als Ersatz bieten wir um 14:30 Uhr eine kostenlose Führung durch die neu eröffnete Ausstellung „Vom Abakus zum Smartphone“ an. Treffpunkt ist der Infostand im Foyer. Außerdem weisen wir darauf hin, dass das Planetarium im Obergeschoss wegen einer geschlossenen Veranstaltung heute bereits um 16 Uhr schließt. Bereits gekaufte Tickets für die Vorstellung um 17 Uhr können an der Kasse umgetauscht oder erstattet werden. Wir wünschen Ihnen weiterhin einen spannenden Aufenthalt.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Die Vorführung des Roboters wird auf 14:30 Uhr verschoben.',
              answer: false,
              explanationRu: 'Показ робота отменён (muss ausfallen). В 14:30 вместо него проводится экскурсия по выставке.',
            },
            {
              kind: 'tf',
              statement: 'Für die Führung durch die neue Ausstellung muss man nichts bezahlen.',
              answer: true,
              explanationRu: '«eine kostenlose Führung durch die neu eröffnete Ausstellung».',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was gilt für Besucher mit Tickets für das Planetarium um 17 Uhr?',
              options: [
                'Sie können sich das Geld zurückgeben lassen.',
                'Die Vorstellung beginnt eine Stunde früher.',
                'Sie dürfen kostenlos an der Führung teilnehmen.',
              ],
              answer: 0,
              explanationRu: 'Билеты можно обменять или вернуть деньги (erstattet werden) в кассе.',
            },
            {
              kind: 'mc',
              question: 'Wo beginnt die Führung?',
              options: ['in Halle 3', 'im Obergeschoss', 'am Infostand im Foyer'],
              answer: 2,
              explanationRu: '«Treffpunkt ist der Infostand im Foyer».',
            },
          ],
        },
      ],
    },
    {
      title: 'Vortrag: Forschen kann jeder',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag zum Thema „Bürgerwissenschaft“.',
      text: `Guten Abend und vielen Dank für die Einladung. Mein Thema heute ist Bürgerwissenschaft, auf Englisch „Citizen Science“. Gemeint sind Forschungsprojekte, an denen sich Menschen ohne wissenschaftliche Ausbildung aktiv beteiligen. Das ist übrigens keine neue Idee: Schon im 19. Jahrhundert wurden Wetterdaten zu einem großen Teil von Laien gesammelt – von Pfarrern, Lehrern oder Bauern, die jeden Morgen ihr Thermometer ablasen.

Neu ist allerdings die Größenordnung. Dank Smartphone und Internet können heute Zehntausende Freiwillige gleichzeitig mitmachen. Ich nenne Ihnen drei Beispiele aus unserer eigenen Arbeit. Im ersten Projekt zählen Freiwillige jedes Frühjahr eine Stunde lang die Vögel in ihrem Garten und melden die Ergebnisse über eine App. Aus den gesammelten Daten können wir erkennen, welche Arten zurückgehen. Im zweiten Projekt messen Schulklassen mit selbst gebauten Sensoren die Luftqualität auf ihrem Schulweg. Und im dritten helfen Menschen am Computer dabei, alte, handgeschriebene Wetterberichte zu entziffern – eine Arbeit, die bisher keine Software zuverlässig erledigen kann.

Natürlich werde ich oft gefragt: Sind Daten von Laien überhaupt zuverlässig? Die ehrliche Antwort lautet: nicht jede einzelne Meldung. Ein Rotkehlchen wird schon mal mit einem Gimpel verwechselt. Aber bei vielen tausend Meldungen gleichen sich solche Fehler weitgehend aus. Außerdem werden auffällige Werte automatisch markiert und von Fachleuten überprüft.

Was haben die Freiwilligen davon? In Befragungen sagen die meisten, sie hätten die Natur in ihrer Umgebung ganz neu wahrgenommen. Und für mich ist ein anderer Effekt vielleicht der wichtigste: In Zeiten, in denen Forschungsergebnisse in sozialen Medien ständig angezweifelt werden, verstehen die Teilnehmenden besser, wie Wissen überhaupt entsteht – mit all seinen Unsicherheiten.

Es gibt aber auch Kritik, die ich ernst nehme. Manche Projekte nutzen Freiwillige als kostenlose Arbeitskräfte, ohne ihnen die Ergebnisse jemals mitzuteilen. Das halte ich für unfair. In unseren Projekten erhalten alle Teilnehmenden einmal im Jahr einen ausführlichen Bericht, und gute Ideen aus der Bürgerschaft fließen in die nächsten Forschungsfragen ein.

Wenn Sie jetzt Lust bekommen haben, selbst mitzumachen: Am Ausgang liegen Flyer mit unseren aktuellen Projekten. Die nächste Vogelzählung beginnt am zweiten Maiwochenende. Und nun freue ich mich auf Ihre Fragen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете доклад дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was versteht die Referentin unter Bürgerwissenschaft?',
              options: [
                'Forschung über das Verhalten von Bürgern',
                'Forschung, an der sich Laien aktiv beteiligen',
                'Vorträge von Wissenschaftlern für die Bevölkerung',
              ],
              answer: 1,
              explanationRu: 'Это проекты, в которых активно участвуют люди без научного образования.',
            },
            {
              kind: 'mc',
              question: 'Was sagt sie über das 19. Jahrhundert?',
              options: [
                'Schon damals sammelten Laien Wetterdaten.',
                'Damals gab es noch keine Thermometer.',
                'Nur ausgebildete Forscher durften Daten erheben.',
              ],
              answer: 0,
              explanationRu: 'Погодные данные собирали священники, учителя и крестьяне.',
            },
            {
              kind: 'mc',
              question: 'Was ist heute anders als früher?',
              options: [
                'Sehr viel mehr Menschen können gleichzeitig mitmachen.',
                'Die Freiwilligen werden für ihre Arbeit bezahlt.',
                'Die Projekte dauern nur noch wenige Tage.',
              ],
              answer: 0,
              explanationRu: 'Новое — масштаб: благодаря смартфонам и интернету участвуют десятки тысяч людей одновременно.',
            },
            {
              kind: 'mc',
              question: 'Was machen die Schulklassen?',
              options: [
                'Sie zählen Vögel in Schulgärten.',
                'Sie entziffern alte Wetterberichte.',
                'Sie messen die Luftqualität.',
              ],
              answer: 2,
              explanationRu: 'Школьники с самодельными датчиками измеряют качество воздуха по дороге в школу.',
            },
            {
              kind: 'mc',
              question: 'Warum braucht man für das dritte Projekt Menschen?',
              options: [
                'Programme können alte Handschriften noch nicht zuverlässig lesen.',
                'Die Wetterberichte dürfen nicht digitalisiert werden.',
                'Die Berichte sind in vielen Fremdsprachen verfasst.',
              ],
              answer: 0,
              explanationRu: '«…eine Arbeit, die bisher keine Software zuverlässig erledigen kann».',
            },
            {
              kind: 'mc',
              question: 'Wie geht man mit Fehlern in den Daten um?',
              options: [
                'Man verzichtet auf Meldungen von Anfängern.',
                'Bei großen Datenmengen gleichen sich Fehler aus, Auffälliges wird kontrolliert.',
                'Die Freiwilligen müssen vorher eine Prüfung ablegen.',
              ],
              answer: 1,
              explanationRu: 'Ошибки при тысячах сообщений в основном компенсируются, а подозрительные значения проверяют специалисты.',
            },
            {
              kind: 'mc',
              question: 'Welchen Effekt hält die Referentin für besonders wichtig?',
              options: [
                'Die Forschung wird dadurch billiger.',
                'Die Teilnehmer verbringen mehr Zeit in der Natur.',
                'Die Teilnehmer verstehen besser, wie Wissen entsteht.',
              ],
              answer: 2,
              explanationRu: 'Самым важным она считает то, что участники лучше понимают, как возникает знание, со всеми его неопределённостями.',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert sie an manchen anderen Projekten?',
              options: [
                'Sie sind für Laien zu kompliziert.',
                'Die Freiwilligen erfahren nichts über die Ergebnisse.',
                'Sie sammeln zu viele persönliche Daten.',
              ],
              answer: 1,
              explanationRu: 'Некоторые проекты используют добровольцев как бесплатную рабочую силу и не сообщают им результаты.',
            },
          ],
        },
      ],
    },
  ],
};
