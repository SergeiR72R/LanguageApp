import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich habe heute keine Lust mehr, noch einen Fachartikel ___.',
      options: ['zu lesen', 'lesen', 'zu gelesen', 'gelesen zu haben'],
      answer: 0,
      explanationRu: 'Lust haben, … zu + инфинитив. Действие ещё не произошло → Infinitiv Präsens: zu lesen.',
    },
    {
      type: 'gap',
      prompt: 'Hast du Zeit, mir kurz bei der Präsentation ___?',
      answers: ['zu helfen'],
      hintRu: 'helfen',
      explanationRu: 'Zeit haben, … zu … После существительного Zeit — инфинитив с zu: zu helfen.',
    },
    {
      type: 'choice',
      prompt: 'Es ist nicht erlaubt, im Labor ___.',
      options: ['zu essen', 'essen', 'gegessen zu haben', 'zu gegessen'],
      answer: 0,
      explanationRu: 'Es ist (nicht) erlaubt, … zu … — общее правило, без предшествования → zu essen.',
    },
    {
      type: 'gap',
      prompt: 'Die Studentin hat vergessen, die Quelle ___.',
      answers: ['anzugeben'],
      hintRu: 'angeben',
      explanationRu: 'Отделяемый глагол: zu встаёт между приставкой и основой — an-zu-geben.',
    },
    {
      type: 'choice',
      prompt: 'Er erinnert sich, die Professorin schon einmal auf einem Kongress ___.',
      options: ['getroffen zu haben', 'zu treffen', 'getroffen zu sein', 'getroffen zu werden'],
      answer: 0,
      explanationRu: 'Встреча была раньше (schon einmal) → Infinitiv Perfekt. treffen образует Perfekt с haben → getroffen zu haben.',
    },
    {
      type: 'choice',
      prompt: 'Die Forscherin ist stolz, als erste Frau ihres Instituts zum Südpol ___.',
      options: ['gereist zu haben', 'gereist zu sein', 'zu reisen sein', 'gereist werden zu'],
      answer: 1,
      explanationRu: 'reisen (перемещение) образует Perfekt с sein: sie ist gereist → gereist zu sein.',
    },
    {
      type: 'gap',
      prompt: 'Der Politiker bestreitet, die Studie jemals ___.',
      answers: ['gelesen zu haben'],
      hintRu: 'lesen, действие в прошлом',
      explanationRu: 'Отрицает, что когда-либо читал → предшествование → Infinitiv Perfekt: gelesen zu haben.',
    },
    {
      type: 'gap',
      prompt: 'Die Schülerinnen hoffen, bald ins Schülerlabor der Universität ___.',
      answers: ['eingeladen zu werden'],
      hintRu: 'einladen, пассив',
      explanationRu: 'Их пригласят (действие совершают другие) → Passiv-Infinitiv: eingeladen zu werden.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное с dass инфинитивным оборотом.',
      prompt: 'Die Autorin ist überzeugt, dass sie alle Quellen korrekt angegeben hat.',
      answers: ['Die Autorin ist überzeugt, alle Quellen korrekt angegeben zu haben.'],
      explanationRu: 'Подлежащие совпадают (die Autorin = sie), действие предшествует → angegeben zu haben.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt?',
      options: [
        'Ich hoffe, dass du den Vortrag gut findest.',
        'Ich hoffe, du den Vortrag gut zu finden.',
        'Ich hoffe, den Vortrag gut finden zu du.',
        'Ich hoffe, dass den Vortrag gut zu finden.',
      ],
      answer: 0,
      explanationRu: 'Подлежащие разные (ich — du), поэтому инфинитивный оборот невозможен — нужен dass-Satz.',
    },
    {
      type: 'choice',
      prompt: 'Die Professorin bat die Studierenden, ___.',
      options: ['pünktlich zu sein', 'dass pünktlich sind', 'pünktlich sein', 'zu pünktlich sein'],
      answer: 0,
      explanationRu: 'После bitten, empfehlen, raten и т. п. исполнитель действия — дополнение главного предложения (die Studierenden), поэтому инфинитив возможен: pünktlich zu sein.',
    },
    {
      type: 'gap',
      prompt: 'Es ist eine echte Herausforderung, ein so komplexes Thema verständlich ___.',
      answers: ['darzustellen'],
      hintRu: 'darstellen',
      explanationRu: 'eine Herausforderung sein, … zu … ; отделяемый глагол → dar-zu-stellen.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное с dass инфинитивным оборотом.',
      prompt: 'Viele Experten befürchten, dass sie in den Medien falsch zitiert werden.',
      answers: ['Viele Experten befürchten, in den Medien falsch zitiert zu werden.'],
      explanationRu: 'Пассив настоящего времени (zitiert werden) → Passiv-Infinitiv: zitiert zu werden.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное с dass инфинитивным оборотом.',
      prompt: 'Der Forscher beklagt, dass er nicht über die Änderungen informiert worden ist.',
      answers: ['Der Forscher beklagt, nicht über die Änderungen informiert worden zu sein.'],
      explanationRu: 'Пассив Perfekt (informiert worden ist) → Passiv-Infinitiv Perfekt: informiert worden zu sein. Вспомогательный глагол пассива — всегда sein.',
    },
    {
      type: 'choice',
      prompt: 'Sie ärgert sich, bei der Preisverleihung nicht ___.',
      options: ['erwähnt worden zu sein', 'erwähnt zu haben', 'erwähnt worden zu haben', 'zu erwähnt werden'],
      answer: 0,
      explanationRu: 'Её не упомянули (пассив, в прошлом) → erwähnt worden zu sein. «worden zu haben» не бывает: пассив в Perfekt всегда с sein.',
    },
    {
      type: 'order',
      words: ['Der Nachwuchsforscher', 'freut sich,', 'für den Preis', 'nominiert', 'worden', 'zu sein.'],
      translationRu: 'Молодой исследователь рад, что его номинировали на премию.',
      explanationRu: 'Passiv-Infinitiv Perfekt: Partizip II + worden + zu sein — именно в таком порядке в конце оборота.',
    },
    {
      type: 'order',
      words: ['Wir', 'haben', 'leider', 'keine Möglichkeit,', 'die Rohdaten', 'selbst', 'zu überprüfen.'],
      translationRu: 'К сожалению, у нас нет возможности самим проверить исходные данные.',
      explanationRu: 'die Möglichkeit, … zu … Инфинитив с zu стоит в конце оборота, после запятой.',
    },
    {
      type: 'choice',
      prompt: '„Er behauptet, den Kometen mit bloßem Auge zu sehen.“ – Was bedeutet der Satz?',
      options: [
        'Er sieht den Kometen nach eigener Aussage gerade jetzt.',
        'Er hat den Kometen nach eigener Aussage früher gesehen.',
        'Er wird den Kometen bald sehen müssen.',
      ],
      answer: 0,
      explanationRu: 'Infinitiv Präsens (zu sehen) выражает одновременность с behauptet. Для прошлого нужно gesehen zu haben.',
    },
    {
      type: 'gap',
      prompt: 'Der Professor sagte, er ___ die Daten selbst überprüft.',
      answers: ['habe'],
      hintRu: 'повторение: косвенная речь, haben в Konjunktiv I',
      explanationRu: 'Повторение B2: косвенная речь — Konjunktiv I: er habe … überprüft.',
    },
    {
      type: 'choice',
      prompt: 'Die ___ konnten nach dem Vortrag Fragen stellen.',
      options: ['Anwesenden', 'Anwesende', 'Anwesender', 'Anwesendes'],
      answer: 0,
      explanationRu: 'Повторение (урок 15): субстантивированное Partizip I после die во мн. ч. → -en: die Anwesenden («присутствующие»).',
    },
  ],
  reading: [
    {
      title: 'Wenn Forschende zur Zielscheibe werden',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `Als die Virologin Katrin Brandt im Frühjahr in einer Talkshow erklärte, warum eine bestimmte Impfempfehlung geändert worden war, ahnte sie nicht, was folgen würde. Noch am selben Abend quoll ihr E-Mail-Postfach über: Hunderte Nachrichten, viele davon beleidigend, einige mit offenen Drohungen. „Ich hatte nur versucht, einen komplizierten Sachverhalt verständlich zu machen“, sagt die 46-Jährige. „Plötzlich wurde ich behandelt, als hätte ich persönlich ein Verbrechen begangen.“

Brandt ist kein Einzelfall. Eine Umfrage unter rund 2.000 Wissenschaftlerinnen und Wissenschaftlern ergab, dass fast die Hälfte derjenigen, die regelmäßig mit Medien sprechen, schon einmal angefeindet worden ist. Besonders betroffen sind Forschende aus der Medizin und der Klimaforschung – also aus Bereichen, in denen wissenschaftliche Erkenntnisse unmittelbar politische Entscheidungen beeinflussen.

Die Folgen sind nicht nur für die Betroffenen gravierend. Jeder Fünfte der Befragten gab an, nach solchen Erfahrungen bewusst darauf zu verzichten, sich öffentlich zu äußern. „Das ist ein Alarmsignal“, sagt der Kommunikationswissenschaftler Malte Römer. „Wenn sich ausgerechnet die Fachleute zurückziehen, überlassen wir die Debatte denen, die am lautesten sind, und nicht denen, die am meisten wissen.“

Viele Hochschulen haben inzwischen reagiert. Einige bieten ihren Beschäftigten eine Anlaufstelle an, die bei Anfeindungen juristisch und psychologisch unterstützt. Andere Einrichtungen schulen ihre Forschenden darin, mit Kritik im Netz umzugehen – etwa, indem sie lernen, sachliche Einwände von gezielten Angriffen zu unterscheiden.

Römer hält solche Angebote für sinnvoll, aber nicht für ausreichend. „Man darf das Problem nicht allein den Einzelnen aufbürden“, betont er. Die Plattformen müssten Drohungen schneller löschen und an die Behörden weitergeben. Zugleich sieht er auch die Wissenschaft selbst in der Pflicht: „Viele Menschen wissen nicht, dass sich Empfehlungen ändern dürfen, wenn neue Daten vorliegen. Wenn wir besser erklären, wie Forschung funktioniert, nehmen wir den Angreifern einen Teil ihrer Argumente.“

Katrin Brandt hat sich entschieden weiterzumachen. Sie gibt weiterhin Interviews, lässt ihre Konten in den sozialen Medien aber inzwischen von der Pressestelle betreuen. „Ich möchte mir nicht von ein paar Hundert Menschen vorschreiben lassen, ob ich mit Millionen anderen sprechen darf“, sagt sie. Ganz spurlos ist die Erfahrung allerdings nicht an ihr vorübergegangen: Ihre Privatadresse ist seitdem nirgends mehr öffentlich zu finden.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was geschah nach dem Fernsehauftritt von Katrin Brandt?',
              options: [
                'Sie wurde zu weiteren Talkshows eingeladen.',
                'Sie erhielt zahlreiche feindselige Nachrichten.',
                'Sie musste die Impfempfehlung zurücknehmen.',
              ],
              answer: 1,
              explanationRu: 'В тот же вечер её почтовый ящик переполнился оскорбительными сообщениями и угрозами.',
            },
            {
              kind: 'mc',
              question: 'Welche Forschenden sind laut Umfrage besonders häufig betroffen?',
              options: [
                'solche, deren Arbeit politische Entscheidungen beeinflusst',
                'solche, die keine Pressestelle haben',
                'vor allem junge Nachwuchswissenschaftler',
              ],
              answer: 0,
              explanationRu: 'Особенно часто — медицина и климатология, где выводы прямо влияют на политические решения.',
            },
            {
              kind: 'mc',
              question: 'Warum hält Malte Römer die Ergebnisse für alarmierend?',
              options: [
                'Weil die Zahl der Drohungen jedes Jahr steigt.',
                'Weil sich Fachleute aus öffentlichen Debatten zurückziehen.',
                'Weil Journalisten seltener über Wissenschaft berichten.',
              ],
              answer: 1,
              explanationRu: 'Каждый пятый отказывается выступать публично — тогда дискуссию ведут самые громкие, а не самые знающие.',
            },
            {
              kind: 'mc',
              question: 'Was bieten manche Hochschulen an?',
              options: [
                'Unterstützung für Beschäftigte, die angefeindet werden',
                'Kurse zum Schreiben von Pressemitteilungen',
                'finanzielle Entschädigungen für Betroffene',
              ],
              answer: 0,
              explanationRu: 'Некоторые вузы предлагают пункт помощи с юридической и психологической поддержкой, другие — тренинги.',
            },
            {
              kind: 'mc',
              question: 'Was fordert Römer unter anderem?',
              options: [
                'dass wissenschaftliche Empfehlungen nicht mehr geändert werden',
                'dass Forschende nicht mehr in Talkshows auftreten',
                'dass Plattformen konsequenter gegen Drohungen vorgehen',
              ],
              answer: 2,
              explanationRu: 'Платформы должны быстрее удалять угрозы и передавать их властям. Изменение рекомендаций он, наоборот, считает нормальным.',
            },
            {
              kind: 'mc',
              question: 'Wie geht Katrin Brandt heute mit der Situation um?',
              options: [
                'Sie hat sich vollständig aus der Öffentlichkeit zurückgezogen.',
                'Sie spricht weiter mit Medien, schützt aber ihre Privatsphäre stärker.',
                'Sie beantwortet jede Nachricht persönlich.',
              ],
              answer: 1,
              explanationRu: 'Она продолжает давать интервью, но соцсети ведёт пресс-служба, а её адрес больше нигде не опубликован.',
            },
          ],
        },
      ],
    },
    {
      title: 'Leitfaden der Pressestelle: Forschung in der Öffentlichkeit',
      textType: 'Informationstext',
      texts: [
        {
          label: '1',
          body: `Bevor Sie mit Journalistinnen und Journalisten sprechen, informieren Sie bitte die Pressestelle. Wir helfen Ihnen, Anfragen einzuschätzen, und vermitteln bei Bedarf ein Vorgespräch. Bei Interviews zu laufenden Projekten ist außerdem die Zustimmung der Projektleitung einzuholen. Für kurzfristige Anfragen, etwa am Wochenende, steht Ihnen eine Bereitschaftsnummer zur Verfügung.`,
        },
        {
          label: '2',
          body: `Ergebnisse, die noch nicht begutachtet wurden, dürfen nur mit einem deutlichen Hinweis darauf veröffentlicht werden. Vermeiden Sie es, vorläufige Daten als gesicherte Erkenntnisse darzustellen. Formulierungen wie „erste Hinweise deuten darauf hin“ sind hier angemessen. Weisen Sie außerdem auf die Grenzen Ihrer Studie hin, zum Beispiel auf eine geringe Zahl von Teilnehmenden.`,
        },
        {
          label: '3',
          body: `Sie haben das Recht, Ihre Zitate vor der Veröffentlichung zu prüfen, sofern dies vorher mit der Redaktion vereinbart wurde. Bitte korrigieren Sie dabei nur sachliche Fehler und nicht den Stil der Journalistinnen und Journalisten. Eine nachträgliche Änderung des gesamten Interviews ist in der Regel nicht möglich.`,
        },
        {
          label: '4',
          body: `Kurse zu Interviewtraining, Präsentationstechnik und sozialen Medien werden zweimal pro Semester angeboten. Die Teilnahme ist für alle Beschäftigten kostenlos und kann als Arbeitszeit angerechnet werden. Die Anmeldung erfolgt über das Weiterbildungsportal. Für Fortgeschrittene gibt es zusätzlich ein Kameratraining in kleinen Gruppen.`,
        },
        {
          label: '5',
          body: `Wer im Zusammenhang mit seiner Forschung beleidigt oder bedroht wird, kann sich jederzeit vertraulich an unsere Anlaufstelle wenden. Wir unterstützen Sie dabei, die Vorfälle zu dokumentieren, und stellen auf Wunsch den Kontakt zur Rechtsabteilung her. Alle Angaben werden selbstverständlich streng vertraulich behandelt.`,
        },
        {
          label: '6',
          body: `Wenn Sie in sozialen Netzwerken über Ihre Arbeit berichten, machen Sie bitte deutlich, ob Sie als Privatperson oder im Namen der Universität sprechen. Das Logo der Universität darf auf privaten Kanälen nicht verwendet werden. Bei Fragen zu Ihrem Profil berät Sie das Social-Media-Team der Pressestelle gern.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Abschnitte 1–6. Welche Überschrift a–h passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
          instructionRu: 'Прочитайте разделы 1–6. Какой заголовок a–h подходит к какому разделу? Два заголовка лишние.',
          options: [
            'Fortbildungsangebote',
            'Honorare für Medienauftritte',
            'Umgang mit vorläufigen Ergebnissen',
            'Hilfe bei Anfeindungen',
            'Absprache vor Medienkontakten',
            'Finanzierung von Forschungsreisen',
            'Private und dienstliche Auftritte im Netz',
            'Autorisierung von Zitaten',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Abschnitt 1',
              answer: 4,
              explanationRu: 'Перед общением с журналистами нужно сообщить пресс-службе и получить согласие руководителя проекта.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 2',
              answer: 2,
              explanationRu: 'Речь о неотрецензированных, предварительных данных и осторожных формулировках.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 3',
              answer: 7,
              explanationRu: 'Право проверить свои цитаты перед публикацией (авторизация).',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 4',
              answer: 0,
              explanationRu: 'Курсы по интервью, презентации и соцсетям — повышение квалификации.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 5',
              answer: 3,
              explanationRu: 'Помощь тем, кого оскорбляют или кому угрожают.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 6',
              answer: 6,
              explanationRu: 'Нужно ясно говорить, выступаете ли вы как частное лицо или от имени университета.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Vortrag: Wie spricht man über Unsicherheit?',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag einer Klimaforscherin in einer öffentlichen Vortragsreihe. Sie hören den Text zweimal.',
      text: `Meine sehr geehrten Damen und Herren, herzlich willkommen zur dritten Veranstaltung unserer Reihe „Wissenschaft im Dialog“. Mein Thema heute ist eine Frage, die mich seit Jahren beschäftigt: Wie spricht man über etwas, das man noch nicht genau weiß?

Lassen Sie mich mit einer kleinen Geschichte beginnen. Vor einigen Jahren wurde ich von einer Zeitung gefragt, wie stark der Meeresspiegel an der Nordseeküste bis zum Jahr 2100 steigen wird. Ich antwortete: „Nach unseren Modellen zwischen 40 Zentimetern und einem Meter, je nachdem, wie sich die Emissionen entwickeln.“ Am nächsten Tag lautete die Schlagzeile: „Forscherin warnt: Meer steigt um einen Meter!“ Die Bandbreite, die mir so wichtig gewesen war, war einfach verschwunden.

Warum passiert so etwas? Zum einen, weil Medien klare Aussagen brauchen. Eine Spanne von 40 bis 100 Zentimetern lässt sich schlecht in eine Überschrift packen. Zum anderen aber auch, weil viele von uns Forschenden nie gelernt haben, Unsicherheit verständlich auszudrücken. Wir sprechen von Konfidenzintervallen und Wahrscheinlichkeitsverteilungen – und wundern uns dann, dass uns niemand versteht.

Studien aus der Psychologie zeigen übrigens etwas Überraschendes: Menschen vertrauen Fachleuten nicht weniger, wenn diese offen über Unsicherheiten sprechen. Im Gegenteil – wer zugibt, etwas nicht genau zu wissen, wirkt auf viele sogar glaubwürdiger. Problematisch wird es erst, wenn eine scheinbar sichere Aussage später korrigiert werden muss. Dann entsteht der Eindruck, die Wissenschaft wisse selbst nicht, was sie wolle.

Was können wir also tun? Ich möchte Ihnen drei Vorschläge machen. Erstens: Nennen Sie nie nur eine Zahl, sondern immer auch den Bereich, und erklären Sie, wovon er abhängt. Zweitens: Unterscheiden Sie klar zwischen dem, was gesichert ist, und dem, was noch offen ist. Dass sich das Klima erwärmt, ist gesichert. Wie schnell genau das Eis in der Antarktis schmilzt, ist noch Gegenstand der Forschung. Drittens: Verwenden Sie Vergleiche aus dem Alltag. Die meisten Menschen gehen jeden Tag mit Unsicherheit um, etwa beim Wetterbericht. Eine Regenwahrscheinlichkeit von 70 Prozent versteht jeder – und niemand beschwert sich, wenn es dann doch trocken bleibt.

Natürlich liegt die Verantwortung nicht nur bei uns. Auch Redaktionen müssen bereit sein, Zwischentöne zuzulassen. Einige Zeitungen haben deshalb begonnen, Berichte über Studien mit einem kleinen Kasten zu versehen, in dem steht, wie belastbar die Ergebnisse sind. Ich halte das für einen sehr guten Ansatz.

Zum Schluss noch ein persönlicher Gedanke: Unsicherheit ist keine Schwäche der Wissenschaft, sondern ihr Motor. Ohne offene Fragen gäbe es keine Forschung. Wenn es uns gelingt, das zu vermitteln, haben wir schon viel gewonnen. Vielen Dank – und jetzt freue ich mich auf Ihre Fragen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете доклад два раза. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist das Thema des Vortrags?',
              options: [
                'wie man Fördergelder für die Klimaforschung beantragt',
                'wie der Meeresspiegel genau gemessen wird',
                'wie man über Unsicherheiten in der Forschung spricht',
              ],
              answer: 2,
              explanationRu: '«Wie spricht man über etwas, das man noch nicht genau weiß?»',
            },
            {
              kind: 'mc',
              question: 'Was passierte mit der Aussage der Rednerin in der Zeitung?',
              options: [
                'Sie wurde vollständig korrekt wiedergegeben.',
                'Die angegebene Spanne fehlte in der Schlagzeile.',
                'Die Zeitung verwechselte Nordsee und Ostsee.',
              ],
              answer: 1,
              explanationRu: 'Она назвала диапазон 40–100 см, а в заголовке осталось только «один метр».',
            },
            {
              kind: 'mc',
              question: 'Welchen Grund nennt die Rednerin auf Seiten der Forschenden?',
              options: [
                'Sie misstrauen grundsätzlich den Journalisten.',
                'Sie haben keine Zeit für Interviews.',
                'Sie haben nicht gelernt, Unsicherheit verständlich auszudrücken.',
              ],
              answer: 2,
              explanationRu: 'Многие исследователи «nie gelernt haben, Unsicherheit verständlich auszudrücken».',
            },
            {
              kind: 'mc',
              question: 'Was zeigen psychologische Studien?',
              options: [
                'Menschen wollen ausschließlich eindeutige Zahlen hören.',
                'Offenheit über Unsicherheit schadet dem Vertrauen nicht, eher im Gegenteil.',
                'Fachleute werden von der Bevölkerung kaum ernst genommen.',
              ],
              answer: 1,
              explanationRu: 'Кто признаёт, что чего-то точно не знает, кажется многим даже более надёжным.',
            },
            {
              kind: 'mc',
              question: 'Wann wird es laut der Rednerin problematisch?',
              options: [
                'wenn Forschende zu viele Fachbegriffe verwenden',
                'wenn eine sicher klingende Aussage später korrigiert werden muss',
                'wenn Medien zu häufig über das Klima berichten',
              ],
              answer: 1,
              explanationRu: '«Problematisch wird es erst, wenn eine scheinbar sichere Aussage später korrigiert werden muss.»',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt die Rednerin unter anderem?',
              options: [
                'auf Vergleiche aus dem Alltag zu verzichten',
                'möglichst nur eine einzige Zahl zu nennen',
                'Gesichertes und Offenes klar voneinander zu trennen',
              ],
              answer: 2,
              explanationRu: 'Второй совет: чётко различать, что доказано, а что ещё открыто. Сравнения из быта она, наоборот, советует использовать.',
            },
            {
              kind: 'mc',
              question: 'Warum erwähnt sie den Wetterbericht?',
              options: [
                'um zu zeigen, dass Menschen im Alltag mit Wahrscheinlichkeiten umgehen können',
                'weil Wetterprognosen besonders oft falsch sind',
                'weil sie selbst früher als Meteorologin gearbeitet hat',
              ],
              answer: 0,
              explanationRu: 'Вероятность дождя 70 % понимает каждый — это пример того, что люди привыкли к неопределённости.',
            },
            {
              kind: 'mc',
              question: 'Wie bewertet sie den Infokasten mancher Zeitungen?',
              options: ['als überflüssig', 'als guten Ansatz', 'als zu kompliziert für Laien'],
              answer: 1,
              explanationRu: '«Ich halte das für einen sehr guten Ansatz.»',
            },
          ],
        },
      ],
    },
    {
      title: 'Nachricht auf der Mailbox',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf einem Anrufbeantworter. Sie hören den Text zweimal.',
      text: `Guten Tag, Herr Dr. Weber, hier spricht Sabine Lorenz von der Pressestelle der Universität. Ich rufe wegen Ihres Interviews mit dem Regionalfernsehen an. Der Sender hat sich gemeldet: Der Drehtermin muss leider von Donnerstag auf Freitag verschoben werden, die Uhrzeit bleibt aber gleich, also zehn Uhr. Das Team möchte gern in Ihrem Labor filmen. Bitte denken Sie daran, die Kolleginnen und Kollegen vorher zu informieren, damit niemand ohne Einverständnis gefilmt wird. Außerdem hat die Redakteurin gefragt, ob Sie bereit wären, das Experiment mit den Bakterienkulturen kurz vorzuführen. Wenn das aus Sicherheitsgründen nicht möglich ist, reicht auch eine Grafik. Ich würde vorschlagen, dass wir uns vorher noch eine halbe Stunde zusammensetzen, um die wichtigsten Botschaften durchzugehen. Rufen Sie mich doch bitte bis morgen Mittag zurück, am besten unter meiner Durchwahl 4512. Vielen Dank und bis bald!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Das Interview findet zu einer anderen Uhrzeit statt als geplant.',
              answer: false,
              explanationRu: 'Переносится только день (с четверга на пятницу), время остаётся прежним — 10 часов.',
            },
            {
              kind: 'tf',
              statement: 'Herr Weber soll seine Kolleginnen und Kollegen über die Dreharbeiten informieren.',
              answer: true,
              explanationRu: '«Bitte denken Sie daran, die Kolleginnen und Kollegen vorher zu informieren».',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was schlägt Frau Lorenz vor?',
              options: [
                'das Interview im Büro statt im Labor zu führen',
                'sich vor dem Termin zur Vorbereitung zu treffen',
                'auf das Experiment ganz zu verzichten',
              ],
              answer: 1,
              explanationRu: 'Она предлагает заранее встретиться на полчаса и обсудить главные тезисы.',
            },
          ],
        },
      ],
    },
  ],
};
