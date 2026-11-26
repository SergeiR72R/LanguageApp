import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wie kann man Stress im Büro reduzieren? – ___ man regelmäßig kurze Pausen macht.',
      options: ['Indem', 'Damit', 'Ohne dass', 'Je nachdem'],
      answer: 0,
      explanationRu: 'Ответ на вопрос «как?» (Wie?) — способ → indem. Damit выражает цель («чтобы»).',
    },
    {
      type: 'gap',
      prompt: 'Er hat den Bericht abgegeben, ohne ihn noch einmal ___ lesen.',
      answers: ['zu'],
      hintRu: 'ohne … ___ + Infinitiv',
      explanationRu: 'Субъект один (er) → ohne … zu + инфинитив в конце: ohne ihn noch einmal zu lesen.',
    },
    {
      type: 'choice',
      prompt: 'Man hat ihn zum Teamleiter befördert, ___ er sich je um die Stelle beworben hatte.',
      options: ['ohne zu', 'indem', 'statt zu', 'ohne dass'],
      answer: 3,
      explanationRu: 'Субъекты разные (man / er) → только ohne dass. Ohne … zu возможно лишь при одном и том же субъекте.',
    },
    {
      type: 'choice',
      prompt: 'Das ist das Büro, ___ früher unser Geschäftsführer saß.',
      options: ['indem', 'in dem', 'wodurch', 'dadurch'],
      answer: 1,
      explanationRu: 'Ловушка: здесь не способ действия, а относительное придаточное («кабинет, в котором…»): предлог in + относительное местоимение dem — раздельно. Союз indem пишется слитно и значит «тем, что».',
    },
    {
      type: 'gap',
      prompt: 'Statt den Kunden sofort ___, hat er ihm eine lange E-Mail geschrieben.',
      answers: ['anzurufen'],
      hintRu: 'anrufen + zu',
      explanationRu: 'statt … zu + инфинитив. У глаголов с отделяемой приставкой zu стоит между приставкой и корнем: an-zu-rufen.',
    },
    {
      type: 'choice',
      prompt: '___ man die Arbeit besser verteilt, könnte man viele Überstunden vermeiden.',
      options: ['Durch dass', 'Dadurch, dass', 'Dafür, dass', 'Ohne'],
      answer: 1,
      explanationRu: 'Средство → dadurch, dass. Союза «durch dass» не существует, а dafür, dass («за то, что») не выражает средство.',
    },
    {
      type: 'gap',
      prompt: 'Wir haben die Reisekosten ___ gesenkt, dass wir viele Termine online durchführen.',
      answers: ['dadurch'],
      hintRu: 'коррелят в главном предложении',
      explanationRu: 'Конструкция dadurch …, dass: dadurch стоит в главном предложении (в середине), а dass вводит придаточное.',
    },
    {
      type: 'choice',
      prompt: 'Die Abteilung wurde komplett umstrukturiert, ___ die Mitarbeitenden vorher gefragt wurden.',
      options: ['ohne dass', 'ohne zu', 'anstatt zu', 'indem'],
      answer: 0,
      explanationRu: 'Ожидаемое действие (спросить сотрудников) не произошло; субъекты разные (die Abteilung / die Mitarbeitenden) → ohne dass.',
    },
    {
      type: 'gap',
      prompt: 'Anstatt ___ der Chef alles allein entscheidet, sollte das Team mitreden dürfen.',
      answers: ['dass'],
      hintRu: 'разные субъекты',
      explanationRu: 'Субъекты разные (der Chef / das Team) → (an)statt dass + глагол в конце придаточного.',
    },
    {
      type: 'choice',
      prompt: 'Das Teamtreffen ist am Montag oder am Dienstag, ___ wann die meisten Zeit haben.',
      options: ['indem', 'je nachdem,', 'ohne dass', 'statt'],
      answer: 1,
      explanationRu: '«В зависимости от того, когда…» → je nachdem, wann. После je nachdem идёт запятая и вопросительное слово или ob.',
    },
    {
      type: 'gap',
      prompt: 'Je nachdem, ___ das Budget genehmigt wird, starten wir im März oder erst im Herbst.',
      answers: ['ob'],
      hintRu: '«ли» — да или нет?',
      explanationRu: 'Решение зависит от ответа «да/нет» (утвердят бюджет или нет) → je nachdem, ob.',
    },
    {
      type: 'choice',
      prompt: 'Sie hat am Wochenende gearbeitet, ___ die Deadline einzuhalten.',
      options: ['statt', 'ohne', 'um', 'indem'],
      answer: 2,
      explanationRu: 'Повторение B1: здесь выражается цель («чтобы успеть к сроку») → um … zu. Statt … zu значило бы «вместо того чтобы» — по смыслу не подходит.',
    },
    {
      type: 'choice',
      prompt: 'Durch ___ Feedback hat sich die Zusammenarbeit im Team deutlich verbessert.',
      options: ['regelmäßigem', 'regelmäßiges', 'regelmäßigen', 'regelmäßig'],
      answer: 1,
      explanationRu: 'Именной вариант способа: durch + Akkusativ. Das Feedback (ср. р.) без артикля → сильное окончание -es: durch regelmäßiges Feedback.',
    },
    {
      type: 'gap',
      prompt: 'Die Kollegen haben monatelang Überstunden gemacht, ___ der Chef ihnen auch nur einmal dafür gedankt hätte.',
      answers: ['ohne dass'],
      hintRu: 'два слова; разные субъекты',
      explanationRu: 'Разные субъекты → ohne dass. После ohne dass часто употребляется Konjunktiv II (hätte), чтобы подчеркнуть, что действие так и не произошло.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist NICHT korrekt?',
      options: [
        'Er hat gekündigt, ohne dass sein Chef davon wusste.',
        'Er hat gekündigt, ohne seinen Chef zu informieren.',
        'Er hat gekündigt, ohne sein Chef davon zu wissen.',
        'Er hat gekündigt, ohne vorher mit seinem Chef zu sprechen.',
      ],
      answer: 2,
      explanationRu: 'В третьем предложении у инфинитива другой субъект (sein Chef), а ohne … zu требует того же субъекта, что и в главном предложении. Правильно: ohne dass sein Chef davon wusste.',
    },
    {
      type: 'order',
      words: ['Statt', 'Kritik', 'persönlich', 'zu nehmen,', 'sollte', 'man', 'sachlich', 'nachfragen.'],
      translationRu: 'Вместо того чтобы принимать критику на свой счёт, следует спокойно задать уточняющие вопросы.',
      explanationRu: 'Инфинитивный оборот statt … zu занимает первое место, поэтому дальше сразу спрягаемый глагол sollte, затем подлежащее man.',
    },
    {
      type: 'order',
      words: ['Die Stimmung im Team', 'hat sich', 'dadurch', 'verbessert,', 'dass', 'wir', 'jeden Freitag', 'zusammen frühstücken.'],
      translationRu: 'Настроение в команде улучшилось благодаря тому, что мы каждую пятницу вместе завтракаем.',
      explanationRu: 'dadurch стоит в главном предложении после спрягаемого глагола, придаточное с dass — после причастия verbessert; в придаточном глагол в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Перестройте предложение с помощью dadurch …, dass.',
      prompt: 'Die Chefin hat das Vertrauen des Teams gewonnen, indem sie offen über Probleme gesprochen hat.',
      answers: [
        'Die Chefin hat das Vertrauen des Teams dadurch gewonnen, dass sie offen über Probleme gesprochen hat.',
        'Dadurch, dass sie offen über Probleme gesprochen hat, hat die Chefin das Vertrauen des Teams gewonnen.',
      ],
      explanationRu: 'indem и dadurch, dass взаимозаменяемы. Коррелят dadurch ставится в главное предложение перед причастием (или весь оборот «Dadurch, dass …» выносится в начало).',
    },
    {
      type: 'transform',
      instructionRu: 'Сократите придаточное до ohne … zu (субъект один и тот же).',
      prompt: 'Er hat die Stelle gewechselt, ohne dass er vorher mit seiner Familie darüber gesprochen hat.',
      answers: [
        'Er hat die Stelle gewechselt, ohne vorher mit seiner Familie darüber zu sprechen.',
        'Er hat die Stelle gewechselt, ohne vorher mit seiner Familie darüber gesprochen zu haben.',
      ],
      explanationRu: 'Субъект одинаковый (er), поэтому ohne dass лучше заменить на ohne … zu. Подлежащее исчезает, инфинитив с zu стоит в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Повторение B2-09: замените именную конструкцию придаточным/инфинитивным оборотом.',
      prompt: 'Ohne Rücksprache mit dem Team hat er den Termin verschoben.',
      answers: [
        'Er hat den Termin verschoben, ohne mit dem Team Rücksprache zu halten.',
        'Ohne mit dem Team Rücksprache zu halten, hat er den Termin verschoben.',
        'Er hat den Termin verschoben, ohne Rücksprache mit dem Team zu halten.',
        'Ohne Rücksprache mit dem Team zu halten, hat er den Termin verschoben.',
      ],
      explanationRu: 'Вербализация: ohne + существительное → ohne … zu + глагол. Rücksprache halten mit — устойчивое сочетание; субъект один (er).',
    },
  ],
  reading: [
    {
      title: 'Ein Unternehmen ohne Chefs',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `Montagmorgen in einer Softwarefirma in Augsburg. In einem hellen Besprechungsraum sitzen neun Menschen im Kreis und diskutieren darüber, wer das nächste Großprojekt leiten soll. Einen Chef, der diese Entscheidung trifft, gibt es nicht. Seit fünf Jahren organisiert sich das Unternehmen mit seinen 140 Beschäftigten ohne klassische Hierarchie.

„Am Anfang hatten viele Angst“, erinnert sich Gründer Markus Feldmann, der damals selbst Geschäftsführer war. „Die einen fürchteten Chaos, die anderen, dass am Ende doch wieder ich alles entscheide.“ Feldmann hat sich bewusst zurückgezogen: Statt Anweisungen zu geben, arbeitet er heute als Entwickler in einem der Teams. Jedes Team wählt für ein Jahr eine Person, die es nach außen vertritt und die Sitzungen moderiert. Wichtige Entscheidungen werden im sogenannten Konsent-Verfahren getroffen: Ein Vorschlag gilt als angenommen, wenn niemand einen schwerwiegenden Einwand hat.

Funktioniert das? Die Zahlen sprechen zumindest nicht dagegen. Der Umsatz ist in den letzten Jahren stetig gewachsen, und die Fluktuation liegt deutlich unter dem Branchendurchschnitt. In einer internen Befragung gaben 85 Prozent der Beschäftigten an, mit ihrer Arbeit zufrieden zu sein.

Doch das Modell hat auch Schattenseiten. „Ohne Chef gibt es niemanden, hinter dem man sich verstecken kann“, sagt die Entwicklerin Julia Brenner. Jeder müsse Verantwortung übernehmen, auch für unangenehme Entscheidungen. Als die Firma vor zwei Jahren nach dem Verlust eines Großkunden Stellen streichen musste, dauerte die Diskussion darüber Wochen. „Das war die schwierigste Zeit“, sagt Brenner. „Plötzlich mussten Kollegen über Kollegen entscheiden.“

Auch Konflikte verschwinden nicht, nur weil es keine Hierarchie gibt. Im Gegenteil: Manchmal entstehen informelle Machtstrukturen, ohne dass es jemand bemerkt. Wer gut reden kann oder schon lange dabei ist, hat oft mehr Einfluss als andere. Die Firma hat deshalb zwei interne Konfliktberaterinnen ausgebildet, an die sich alle wenden können.

Die Arbeitsforscherin Sabine Haller sieht solche Modelle differenziert. „Selbstorganisation kann die Motivation enorm steigern, indem Menschen mehr Einfluss auf ihre Arbeit bekommen“, sagt sie. „Aber sie ist kein Allheilmittel.“ Je nachdem, wie groß ein Unternehmen sei und in welcher Branche es arbeite, funktioniere das Modell besser oder schlechter. In einer Klinik etwa, wo in Notfällen schnell entschieden werden müsse, seien klare Zuständigkeiten unverzichtbar.

Für Markus Feldmann ist eine Rückkehr zum alten Modell trotzdem ausgeschlossen. „Ich vermisse es überhaupt nicht, der Chef zu sein“, sagt er und lacht. „Ehrlich gesagt programmiere ich viel lieber.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wie werden in der Firma wichtige Entscheidungen getroffen?',
              options: [
                'Der Gründer entscheidet nach Rücksprache mit den Teams.',
                'Ein Vorschlag gilt, wenn niemand ernsthaft widerspricht.',
                'Alle Beschäftigten stimmen mit Mehrheit ab.',
              ],
              answer: 1,
              explanationRu: 'Konsent-Verfahren: предложение принято, если ни у кого нет серьёзного возражения («wenn niemand einen schwerwiegenden Einwand hat»). О голосовании большинством речи нет.',
            },
            {
              kind: 'mc',
              question: 'Was macht Markus Feldmann heute?',
              options: [
                'Er arbeitet als Entwickler in einem Team.',
                'Er berät andere Unternehmen bei der Umstellung.',
                'Er moderiert die Sitzungen aller Teams.',
              ],
              answer: 0,
              explanationRu: '«Statt Anweisungen zu geben, arbeitet er heute als Entwickler in einem der Teams.» Модерируют выбранные командами люди.',
            },
            {
              kind: 'mc',
              question: 'Was zeigen die Zahlen?',
              options: [
                'Die Beschäftigten verdienen mehr als in anderen Firmen.',
                'Die Zufriedenheit ist in den letzten Jahren gesunken.',
                'Weniger Beschäftigte verlassen die Firma als im Branchendurchschnitt.',
              ],
              answer: 2,
              explanationRu: 'Текучесть кадров (Fluktuation) значительно ниже среднего по отрасли; 85 % довольны работой. О зарплате ничего не сказано.',
            },
            {
              kind: 'mc',
              question: 'Was war für Julia Brenner besonders schwierig?',
              options: [
                'dass Kollegen über den Abbau von Stellen entscheiden mussten',
                'dass ein neuer Großkunde gewonnen werden musste',
                'dass sie selbst Teamsprecherin werden sollte',
              ],
              answer: 0,
              explanationRu: 'Когда пришлось сокращать ставки, «mussten Kollegen über Kollegen entscheiden» — это было самое тяжёлое время. Крупного клиента, наоборот, потеряли.',
            },
            {
              kind: 'mc',
              question: 'Welches Problem nennt der Text?',
              options: [
                'Ohne Hierarchie gibt es überhaupt keine Konflikte mehr.',
                'Es entstehen manchmal unbemerkt informelle Machtverhältnisse.',
                'Die Konfliktberaterinnen sind völlig überlastet.',
              ],
              answer: 1,
              explanationRu: '«Manchmal entstehen informelle Machtstrukturen, ohne dass es jemand bemerkt» — влияние получают те, кто хорошо говорит или давно работает.',
            },
            {
              kind: 'mc',
              question: 'Wie beurteilt die Arbeitsforscherin das Modell?',
              options: [
                'Sie hält es für alle Branchen gleichermaßen geeignet.',
                'Sie lehnt es grundsätzlich ab.',
                'Sie meint, dass sein Erfolg von Größe und Branche abhängt.',
              ],
              answer: 2,
              explanationRu: 'Самоорганизация повышает мотивацию, но «kein Allheilmittel»: всё зависит от размера фирмы и отрасли (je nachdem, wie groß …); в клинике нужны чёткие зоны ответственности.',
            },
          ],
        },
      ],
    },
    {
      title: 'Leitfaden: Konflikte am Arbeitsplatz',
      textType: 'Informationstext / Leitfaden',
      texts: [
        {
          label: '1',
          body: `Konflikte gehören zum Arbeitsalltag. Sie sind kein Zeichen von Schwäche, sondern können – wenn sie fair ausgetragen werden – zu besseren Lösungen führen. Dieser Leitfaden gilt für alle Beschäftigten der Hansen Logistik GmbH, einschließlich der Auszubildenden und der Leiharbeitskräfte. Er wurde von der Geschäftsführung gemeinsam mit dem Betriebsrat erarbeitet und tritt am 1. März in Kraft.`,
        },
        {
          label: '2',
          body: `Bevor Sie andere Stellen einschalten, versuchen Sie bitte, den Konflikt im direkten Gespräch mit der betroffenen Person zu klären. Wählen Sie dafür einen ruhigen Ort und einen Zeitpunkt, an dem keiner von Ihnen unter Zeitdruck steht. Beschreiben Sie das Problem sachlich, indem Sie konkrete Situationen nennen, statt allgemeine Vorwürfe zu machen.`,
        },
        {
          label: '3',
          body: `Bringt dieses Gespräch keine Lösung, können Sie sich an Ihre direkte Führungskraft wenden. Diese hört zunächst beide Seiten getrennt an und lädt dann zu einem gemeinsamen Termin ein. Ist die Führungskraft selbst am Konflikt beteiligt, wenden Sie sich bitte an die nächsthöhere Ebene oder an die Personalabteilung.`,
        },
        {
          label: '4',
          body: `Bei schweren oder lang andauernden Konflikten kann eine Mediation durch eine externe Fachkraft beantragt werden. Die Kosten übernimmt das Unternehmen. Die Teilnahme ist freiwillig. Inhalte der Mediation werden vertraulich behandelt und ohne Zustimmung der Beteiligten weder an Vorgesetzte noch an die Personalabteilung weitergegeben.`,
        },
        {
          label: '5',
          body: `Mobbing, Diskriminierung und sexuelle Belästigung sind keine Konflikte im Sinne dieses Leitfadens, sondern schwere Verstöße gegen die Betriebsordnung. Betroffene können sich jederzeit – auf Wunsch auch anonym – an den Betriebsrat oder an die interne Beschwerdestelle wenden. Jeder Hinweis wird umgehend geprüft, ohne dass den Betroffenen daraus Nachteile entstehen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Abschnitte 1–5. Welche Überschrift a–g passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
          instructionRu: 'Прочитайте разделы 1–5. Какой заголовок a–g подходит к какому разделу? Два заголовка лишние.',
          options: [
            'Professionelle Hilfe von außen',
            'Kosten für Weiterbildungen',
            'Erster Schritt: das persönliche Gespräch',
            'Sonderfälle: Belästigung und Diskriminierung',
            'Für wen der Leitfaden gilt und warum',
            'Kündigung bei wiederholtem Fehlverhalten',
            'Unterstützung durch die Führungskraft',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Abschnitt 1',
              answer: 4,
              explanationRu: 'Раздел объясняет цель (конфликты могут вести к лучшим решениям) и круг лиц: все сотрудники, включая учеников и временный персонал.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 2',
              answer: 2,
              explanationRu: 'Прежде чем обращаться куда-то, нужно попытаться решить конфликт в личном разговоре с этим человеком.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 3',
              answer: 6,
              explanationRu: 'Если разговор не помог — обратиться к непосредственному руководителю, который выслушает обе стороны.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 4',
              answer: 0,
              explanationRu: 'Медиация с внешним специалистом; расходы несёт фирма. Заголовок «Kosten für Weiterbildungen» не подходит: речь не о повышении квалификации.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 5',
              answer: 3,
              explanationRu: 'Моббинг, дискриминация и домогательства — особые случаи, это не конфликты, а нарушения. Об увольнении в тексте ничего не сказано.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Vortrag: Konflikte im Team – Ursachen und Lösungen',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag einer Arbeitspsychologin auf einer Fachtagung für Führungskräfte.',
      text: `Meine Damen und Herren, herzlichen Dank für die Einladung. In meinem Vortrag geht es um Konflikte am Arbeitsplatz – ein Thema, über das in vielen Unternehmen nicht gern gesprochen wird. Dabei zeigen Untersuchungen, dass Führungskräfte bis zu einem Drittel ihrer Arbeitszeit damit verbringen, Konflikte zu bearbeiten.

Ich möchte zuerst über die Ursachen sprechen. Viele glauben, dass Konflikte vor allem durch schwierige Persönlichkeiten entstehen. Das ist nach meiner Erfahrung nur selten der Fall. In meiner Beratungspraxis sehe ich drei Hauptursachen: unklare Zuständigkeiten, knappe Ressourcen und fehlende Kommunikation. Wenn zwei Personen glauben, für dieselbe Aufgabe verantwortlich zu sein, ist Streit fast vorprogrammiert.

Zweitens: Wie entwickeln sich Konflikte? In der Konfliktforschung unterscheidet man mehrere Eskalationsstufen. Am Anfang geht es noch um die Sache, etwa um einen Termin oder ein Budget. Je länger der Konflikt dauert, desto mehr rückt die Person in den Mittelpunkt. Auf den letzten Stufen wollen die Beteiligten dem anderen nur noch schaden, selbst wenn sie sich dabei selbst schaden. Daraus folgt: Je früher man eingreift, desto leichter lässt sich ein Konflikt lösen.

Drittens: Was können Teams konkret tun? Erstens sollten Zuständigkeiten schriftlich festgehalten werden. Zweitens empfehle ich regelmäßige Feedbackrunden, in denen jeder Unzufriedenheit äußern kann, ohne dass das gleich als Angriff verstanden wird. Und drittens: Ich-Botschaften statt Vorwürfe. Sagen Sie also „Ich komme unter Druck, wenn die Zahlen erst am Freitag kommen“, statt „Du bist immer zu spät“.

Viertens möchte ich auf die Rolle der Führungskraft eingehen. Der häufigste Fehler ist, sofort Partei zu ergreifen. Hören Sie stattdessen zuerst beide Seiten getrennt an und führen Sie erst dann ein gemeinsames Gespräch. Ist die Führungskraft selbst Teil des Konflikts, sollte man eine externe Mediation in Betracht ziehen. Die kostet zwar Geld, aber ungelöste Konflikte kosten mehr: durch Krankmeldungen, Kündigungen und schlechte Entscheidungen.

Zum Schluss noch ein Gedanke, der Sie vielleicht überrascht: Konflikte sind nicht nur negativ. Teams, in denen nie gestritten wird, sind oft nicht besonders harmonisch, sondern eher schweigsam. Unterschiedliche Meinungen können zu besseren Lösungen führen – vorausgesetzt, man streitet fair. Vielen Dank für Ihre Aufmerksamkeit.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете доклад дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was sagt die Referentin über Führungskräfte?',
              options: [
                'Sie sprechen gern und oft über Konflikte.',
                'Sie verbringen viel Arbeitszeit mit der Bearbeitung von Konflikten.',
                'Sie verursachen die meisten Konflikte selbst.',
              ],
              answer: 1,
              explanationRu: 'Руководители тратят на конфликты до трети рабочего времени. При этом о конфликтах во многих фирмах говорят неохотно.',
            },
            {
              kind: 'mc',
              question: 'Was ist laut der Referentin nur selten die Ursache von Konflikten?',
              options: [
                'schwierige Persönlichkeiten',
                'unklare Zuständigkeiten',
                'knappe Ressourcen',
              ],
              answer: 0,
              explanationRu: 'Многие думают, что виноваты трудные характеры, но это «nur selten der Fall». Неясные обязанности и нехватка ресурсов — главные причины.',
            },
            {
              kind: 'mc',
              question: 'Wann ist Streit fast vorprogrammiert?',
              options: [
                'wenn ein Team zu groß ist',
                'wenn Ziele nicht schriftlich festgehalten werden',
                'wenn sich zwei Personen für dieselbe Aufgabe verantwortlich fühlen',
              ],
              answer: 2,
              explanationRu: '«Wenn zwei Personen glauben, für dieselbe Aufgabe verantwortlich zu sein, ist Streit fast vorprogrammiert.»',
            },
            {
              kind: 'mc',
              question: 'Was passiert auf den letzten Eskalationsstufen?',
              options: [
                'Die Beteiligten suchen gemeinsam nach einer Lösung.',
                'Die Beteiligten wollen dem anderen vor allem schaden.',
                'Es geht nur noch um Termine und Budgets.',
              ],
              answer: 1,
              explanationRu: 'На последних стадиях участники хотят лишь навредить другому, даже во вред себе. О сути дела (сроки, бюджет) спорят только в начале.',
            },
            {
              kind: 'mc',
              question: 'Wozu dienen regelmäßige Feedbackrunden?',
              options: [
                'Man kann Kritik äußern, ohne dass sie als Angriff gilt.',
                'Die Führungskraft kann die Leistung bewerten.',
                'Man kann Zuständigkeiten neu verteilen.',
              ],
              answer: 0,
              explanationRu: 'В таких встречах каждый может высказать недовольство, «ohne dass das gleich als Angriff verstanden wird».',
            },
            {
              kind: 'mc',
              question: 'Welche Formulierung empfiehlt die Referentin?',
              options: [
                'Vorwürfe möglichst direkt auszusprechen',
                'Probleme nur schriftlich anzusprechen',
                'die eigene Situation in Ich-Botschaften zu beschreiben',
              ],
              answer: 2,
              explanationRu: 'Она советует Ich-Botschaften вместо упрёков: «Ich komme unter Druck, wenn …» вместо «Du bist immer zu spät».',
            },
            {
              kind: 'mc',
              question: 'Was sollte eine Führungskraft zuerst tun?',
              options: [
                'sofort eine externe Mediation beauftragen',
                'beide Konfliktparteien einzeln anhören',
                'klar Partei für eine Seite ergreifen',
              ],
              answer: 1,
              explanationRu: 'Сначала выслушать обе стороны по отдельности, затем провести общий разговор. Сразу принимать чью-то сторону — самая частая ошибка.',
            },
            {
              kind: 'mc',
              question: 'Wie beurteilt die Referentin Teams, in denen nie gestritten wird?',
              options: [
                'Sie sind besonders harmonisch und produktiv.',
                'Sie sind oft eher schweigsam als harmonisch.',
                'Sie haben meistens eine starke Führungskraft.',
              ],
              answer: 1,
              explanationRu: 'Команды без споров «nicht besonders harmonisch, sondern eher schweigsam» — разные мнения при честном споре ведут к лучшим решениям.',
            },
          ],
        },
      ],
    },
    {
      title: 'Nachricht auf dem Anrufbeantworter',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf Ihrem Anrufbeantworter im Büro.',
      text: `Guten Tag, Herr Petrović, hier ist Sandra Weiß aus der Personalabteilung. Es geht um Ihr Jahresgespräch mit Frau Keller, das eigentlich für Dienstag um zehn Uhr geplant war. Frau Keller muss an diesem Tag leider kurzfristig zu einem Kunden nach Hamburg. Wir haben deshalb einen neuen Termin für Sie reserviert, und zwar am Donnerstag um 14 Uhr im Besprechungsraum im dritten Stock. Bitte bringen Sie Ihre Zielvereinbarung vom letzten Jahr mit. Außerdem wäre es hilfreich, wenn Sie den Fragebogen zur Selbsteinschätzung vorab ausfüllen, indem Sie ihn im Intranet herunterladen und mir bis Mittwochabend per E-Mail schicken. Falls Ihnen der Donnerstag nicht passt, rufen Sie mich bitte zurück – heute noch bis 17 Uhr oder morgen ab acht, je nachdem, wann es Ihnen besser passt. Meine Durchwahl ist die 245. Vielen Dank und einen schönen Tag noch!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Das Jahresgespräch findet wie geplant am Dienstag statt.',
              answer: false,
              explanationRu: 'Разговор перенесён: у Frau Keller во вторник поездка к клиенту, новый срок — четверг, 14 часов.',
            },
            {
              kind: 'tf',
              statement: 'Herr Petrović soll einen Fragebogen schon vor dem Gespräch zurückschicken.',
              answer: true,
              explanationRu: 'Анкету самооценки нужно заранее (vorab) скачать в интранете и отправить по почте до вечера среды.',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Warum wird der Termin verschoben?',
              options: [
                'Frau Weiß ist krank.',
                'Frau Keller hat einen dringenden Kundentermin.',
                'Der Besprechungsraum ist besetzt.',
              ],
              answer: 1,
              explanationRu: 'Frau Keller должна срочно (kurzfristig) поехать к клиенту в Гамбург.',
            },
            {
              kind: 'mc',
              question: 'Was soll Herr Petrović zum Gespräch mitbringen?',
              options: [
                'seine Zielvereinbarung vom Vorjahr',
                'einen ausgedruckten Fragebogen',
                'seinen aktuellen Arbeitsvertrag',
              ],
              answer: 0,
              explanationRu: '«Bitte bringen Sie Ihre Zielvereinbarung vom letzten Jahr mit.» Анкету нужно не приносить, а прислать по e-mail.',
            },
          ],
        },
      ],
    },
  ],
};
