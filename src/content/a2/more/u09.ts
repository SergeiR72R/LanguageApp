import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich weiß, ___ du krank bist.',
      options: ['dass', 'das', 'weil', 'wie'],
      answer: 0,
      explanationRu: 'Союз «что» — dass (с двумя s). das — артикль или «это». После dass глагол bist стоит в конце.',
    },
    {
      type: 'choice',
      prompt: 'Ich hoffe, dass du bald wieder gesund ___.',
      options: ['bist', 'bin', 'ist', 'sein'],
      answer: 0,
      explanationRu: 'В придаточном с dass подлежащее du, поэтому глагол — bist. Он стоит в самом конце.',
    },
    {
      type: 'choice',
      prompt: 'Der Arzt sagt, dass ich nicht rauchen ___.',
      options: ['darf', 'dürfen', 'darfst', 'gedurft'],
      answer: 0,
      explanationRu: 'Модальный глагол в придаточном стоит в самом конце, после инфинитива: dass ich nicht rauchen darf.',
    },
    {
      type: 'choice',
      prompt: 'Das Medikament hilft ___ sehr gut.',
      options: ['mir', 'mich', 'ich', 'meine'],
      answer: 0,
      explanationRu: 'helfen требует Dativ: помогает кому? — mir.',
    },
    {
      type: 'choice',
      prompt: 'Gefällt ___ die neue Praxis, Frau Weber?',
      options: ['Ihnen', 'Sie', 'Ihr', 'Ihre'],
      answer: 0,
      explanationRu: 'gefallen + Dativ. Вежливое обращение Sie в Dativ — Ihnen: Gefällt Ihnen …?',
    },
    {
      type: 'choice',
      prompt: 'Ich helfe ___ Oma beim Einkaufen.',
      options: ['meiner', 'meine', 'meinen', 'mein'],
      answer: 0,
      explanationRu: 'helfen + Dativ. die Oma — женский род, в Dativ: meiner Oma.',
    },
    {
      type: 'choice',
      audio: 'Die Apotheke ist heute bis zwanzig Uhr geöffnet.',
      prompt: 'До какого часа сегодня открыта аптека?',
      options: ['bis 20 Uhr', 'bis 12 Uhr', 'bis 18 Uhr', 'bis 22 Uhr'],
      answer: 0,
      explanationRu: 'Вы слышите «bis zwanzig Uhr» — до 20 часов (до восьми вечера).',
    },
    {
      type: 'gap',
      prompt: 'Die Suppe schmeckt ___ sehr gut.',
      answers: ['uns'],
      hintRu: 'wir',
      explanationRu: 'schmecken + Dativ. wir в Dativ — uns: Die Suppe schmeckt uns.',
    },
    {
      type: 'gap',
      prompt: 'Ich glaube, ___ der Arzt heute keine Sprechstunde hat.',
      answers: ['dass'],
      explanationRu: 'После «Ich glaube,» идёт придаточное с dass; глагол hat стоит в конце.',
    },
    {
      type: 'gap',
      prompt: 'Wem gehört die Tasche? – Sie gehört ___ Ärztin.',
      answers: ['der'],
      explanationRu: 'gehören + Dativ. die Ärztin — женский род, в Dativ артикль der: Sie gehört der Ärztin.',
    },
    {
      type: 'gap',
      prompt: 'Wir danken ___ für die Blumen!',
      answers: ['euch'],
      hintRu: 'ihr (вы — друзья)',
      explanationRu: 'danken + Dativ. ihr («вы» на «ты») в Dativ — euch.',
    },
    {
      type: 'gap',
      prompt: 'Es ist wichtig, dass er die Tabletten nach dem Essen ___.',
      answers: ['einnimmt'],
      hintRu: 'einnehmen',
      explanationRu: 'В придаточном отделяемый глагол стоит в конце и пишется слитно: er nimmt ein → dass er … einnimmt.',
    },
    {
      type: 'gap',
      audio: 'Ich glaube, dass ich eine Grippe habe.',
      prompt: 'Напишите недостающее слово: Ich glaube, dass ich eine ___ habe.',
      answers: ['Grippe'],
      explanationRu: 'Вы слышите «eine Grippe» — грипп. Обратите внимание: habe стоит в конце, потому что это придаточное с dass.',
    },
    {
      type: 'gap',
      audio: 'Mein Termin beim Zahnarzt ist am Dienstag um halb neun.',
      prompt: 'В какой день приём у зубного врача? Напишите день недели: am ___',
      answers: ['Dienstag'],
      explanationRu: 'Вы слышите «am Dienstag um halb neun» — во вторник в 8:30.',
    },
    {
      type: 'transform',
      instructionRu: 'Начните с «Ich hoffe, dass …».',
      prompt: 'Es geht dir bald besser.',
      answers: ['Ich hoffe, dass es dir bald besser geht.', 'Ich hoffe, dass es dir bald besser geht'],
      explanationRu: 'После dass спрягаемый глагол geht переходит в конец: …, dass es dir bald besser geht.',
    },
    {
      type: 'transform',
      instructionRu: 'Перескажите слова врача. Начните с «Die Ärztin sagt, dass …».',
      prompt: 'Ich soll drei Tage im Bett bleiben.',
      answers: ['Die Ärztin sagt, dass ich drei Tage im Bett bleiben soll.', 'Die Ärztin sagt, dass ich drei Tage im Bett bleiben soll'],
      explanationRu: 'Модальный глагол soll уходит в конец, после инфинитива bleiben.',
    },
    {
      type: 'order',
      words: ['Der Termin', 'passt', 'mir', 'leider', 'nicht.'],
      translationRu: 'Это время приёма мне, к сожалению, не подходит.',
      explanationRu: 'passen + Dativ (mir). Глагол на втором месте, nicht — в конце.',
    },
    {
      type: 'choice',
      prompt: 'Trinken Sie einen ___ Tee mit Honig.',
      options: ['heißen', 'heißer', 'heiße', 'heißes'],
      answer: 0,
      explanationRu: 'Повторение (юнит 7): der Tee — мужской род, Akkusativ: einen heißen Tee.',
    },
    {
      type: 'gap',
      prompt: 'Heute geht es mir schon viel ___.',
      answers: ['besser'],
      hintRu: 'gut, Komparativ',
      explanationRu: 'Повторение (юнит 8): gut → besser → am besten.',
    },
    {
      type: 'choice',
      prompt: 'Du bist krank. Du musst ___ ausruhen.',
      options: ['dich', 'dir', 'sich', 'mich'],
      answer: 0,
      explanationRu: 'Повторение (юнит 5): sich ausruhen — отдыхать. С du возвратное местоимение — dich.',
    },
  ],
  reading: [
    {
      title: 'Die Hausarztpraxis',
      textType: 'Aushang',
      texts: [
        {
          heading: 'Hausarztpraxis Dr. med. Anna Hoffmann – Allgemeinmedizin',
          body: `Sprechzeiten:
Montag, Dienstag, Donnerstag: 8 bis 12 Uhr und 15 bis 18 Uhr
Mittwoch und Freitag: 8 bis 12 Uhr

Termine bitte nur nach Vereinbarung: Telefon 0421 556670.
Bitte bringen Sie beim ersten Besuch im Quartal Ihre Versichertenkarte mit.
Rezepte können Sie auch telefonisch bestellen. Sie können sie dann am nächsten Tag in der Praxis abholen.

Urlaub: Vom 22. Juli bis 9. August ist die Praxis geschlossen. Vertretung: Dr. Klaus Meier, Lindenstraße 5.

Notfälle nachts und am Wochenende: Ärztlicher Bereitschaftsdienst, Telefon 116 117.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Aushang. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте объявление в практике врача. Верны или неверны утверждения? (Quartal — квартал, три месяца; Vertretung — врач, который заменяет.)',
          items: [
            { kind: 'tf', statement: 'Am Mittwochnachmittag hat die Praxis geöffnet.', answer: false, explanationRu: 'В среду приём только с 8 до 12 часов, после обеда практика закрыта.' },
            { kind: 'tf', statement: 'Für einen Besuch braucht man einen Termin.', answer: true, explanationRu: '«Termine bitte nur nach Vereinbarung» — только по предварительной записи.' },
            { kind: 'tf', statement: 'Ein Rezept kann man auch am Telefon bestellen.', answer: true, explanationRu: '«Rezepte können Sie auch telefonisch bestellen» — и забрать на следующий день.' },
            { kind: 'tf', statement: 'Im August ist die Praxis den ganzen Monat geschlossen.', answer: false, explanationRu: 'Отпуск только до 9 августа, потом практика снова открыта.' },
            { kind: 'tf', statement: 'Am Sonntag ruft man in einem Notfall die Nummer 116 117 an.', answer: true, explanationRu: 'В выходные и ночью при срочных случаях звонят в дежурную службу: 116 117.' },
          ],
        },
      ],
    },
    {
      title: 'Was hilft bei Erkältung?',
      textType: 'Ratgeber',
      texts: [
        { label: '1', body: 'Trinken Sie zwei Liter am Tag: Wasser, Tee oder eine warme Suppe. Das ist gut für den Hals, und Ihr Körper braucht jetzt viel Wasser.' },
        { label: '2', body: 'Bleiben Sie zu Hause und schlafen Sie viel. Gehen Sie nicht zur Arbeit. Sonst sind Ihre Kollegen bald auch krank.' },
        { label: '3', body: 'Waschen Sie oft die Hände, besonders vor dem Essen und nach dem Niesen. So bleibt auch Ihre Familie gesund.' },
        { label: '4', body: 'Sie haben hohes Fieber, über 39 Grad? Oder nach einer Woche geht es Ihnen nicht besser? Dann gehen Sie bitte zum Arzt.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Tipps. Welche Überschrift passt zu welchem Text?',
          instructionRu: 'Прочитайте советы. Какой заголовок подходит к какому тексту? Два заголовка лишние.',
          options: ['Wann zum Arzt?', 'Sport an der frischen Luft', 'Viel trinken', 'Hände waschen', 'Gesund essen', 'Ruhe und Schlaf'],
          items: [
            { kind: 'match', prompt: 'Text 1', answer: 2, explanationRu: 'Текст о том, что нужно пить два литра в день, — «Viel trinken».' },
            { kind: 'match', prompt: 'Text 2', answer: 5, explanationRu: 'Оставаться дома и много спать — «Ruhe und Schlaf».' },
            { kind: 'match', prompt: 'Text 3', answer: 3, explanationRu: 'Часто мыть руки — «Hände waschen».' },
            { kind: 'match', prompt: 'Text 4', answer: 0, explanationRu: 'Высокая температура или нет улучшения через неделю — тогда к врачу: «Wann zum Arzt?».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Der Anrufbeantworter der Praxis',
      kind: 'monolog',
      situation: 'Sie rufen beim Arzt an und hören eine Ansage auf dem Anrufbeantworter.',
      text: `Guten Tag, Sie haben die Praxis Dr. Krause angerufen. Im Moment ist die Praxis geschlossen. Unsere Sprechzeiten sind Montag bis Freitag von acht bis zwölf Uhr, am Montag und Donnerstag auch von fünfzehn bis neunzehn Uhr. Vom zweiten bis zum sechsten Juni hat Dr. Krause Urlaub. In dieser Zeit hilft Ihnen Frau Dr. Lehmann in der Bahnhofstraße zwölf. Rezepte können Sie auch per E-Mail bestellen. In einem Notfall rufen Sie bitte die Nummer eins eins zwei an. Vielen Dank und auf Wiederhören!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wann ist die Praxis am Donnerstagnachmittag geöffnet?',
              options: ['Von 15 bis 19 Uhr.', 'Von 15 bis 18 Uhr.', 'Gar nicht.'],
              answer: 0,
              explanationRu: '«am Montag und Donnerstag auch von fünfzehn bis neunzehn Uhr» — с 15 до 19.',
            },
            {
              kind: 'mc',
              question: 'Warum ist die Praxis im Juni geschlossen?',
              options: ['Der Arzt ist krank.', 'Der Arzt hat Urlaub.', 'Die Praxis zieht um.'],
              answer: 1,
              explanationRu: '«Vom zweiten bis zum sechsten Juni hat Dr. Krause Urlaub» — у врача отпуск.',
            },
            {
              kind: 'mc',
              question: 'Wo ist die Praxis von Frau Dr. Lehmann?',
              options: ['In der Bahnhofstraße 12.', 'In der Bahnhofstraße 2.', 'In der Hauptstraße 12.'],
              answer: 0,
              explanationRu: '«in der Bahnhofstraße zwölf» — Банхофштрассе, 12.',
            },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Rezepte kann man per E-Mail bestellen.', answer: true, explanationRu: '«Rezepte können Sie auch per E-Mail bestellen».' },
            { kind: 'tf', statement: 'In einem Notfall soll man die Praxis anrufen.', answer: false, explanationRu: 'В экстренном случае нужно звонить не в практику, а по номеру 112.' },
          ],
        },
      ],
    },
    {
      title: 'In der Apotheke',
      kind: 'dialog',
      speakers: { A: 'Apothekerin', B: 'Kunde' },
      situation: 'Ein Mann ist in der Apotheke. Er ist erkältet.',
      text: `A: Guten Tag, was kann ich für Sie tun?
B: Guten Tag. Ich habe seit gestern Schnupfen, und mein Hals tut weh. Haben Sie etwas dagegen?
A: Haben Sie auch Fieber?
B: Nein, kein Fieber.
A: Dann nehmen Sie am besten diese Tabletten hier. Sie sind rezeptfrei. Nehmen Sie dreimal am Tag eine Tablette.
B: Vor oder nach dem Essen?
A: Nach dem Essen. Und hier sind noch Nasentropfen gegen den Schnupfen. Aber nehmen Sie sie bitte nicht länger als eine Woche.
B: Gut. Was kostet das zusammen?
A: Die Tabletten kosten sechs Euro fünfzig und die Tropfen vier Euro. Das macht zehn Euro fünfzig.
B: Kann ich mit Karte zahlen?
A: Ja, natürlich. Gute Besserung!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung oder entscheiden Sie: richtig oder falsch?',
          instructionRu: 'Выберите правильный ответ или решите, верно ли утверждение.',
          items: [
            { kind: 'tf', statement: 'Der Mann hat Fieber.', answer: false, explanationRu: 'На вопрос о температуре он отвечает: «Nein, kein Fieber».' },
            {
              kind: 'mc',
              question: 'Wie oft soll er die Tabletten nehmen?',
              options: ['Einmal am Tag.', 'Zweimal am Tag.', 'Dreimal am Tag.'],
              answer: 2,
              explanationRu: '«Nehmen Sie dreimal am Tag eine Tablette».',
            },
            {
              kind: 'mc',
              question: 'Wann soll er die Tabletten nehmen?',
              options: ['Vor dem Essen.', 'Nach dem Essen.', 'Nur am Abend.'],
              answer: 1,
              explanationRu: 'На вопрос «Vor oder nach dem Essen?» аптекарь отвечает: «Nach dem Essen».',
            },
            { kind: 'tf', statement: 'Die Nasentropfen soll er nicht länger als eine Woche nehmen.', answer: true, explanationRu: '«nehmen Sie sie bitte nicht länger als eine Woche» — не дольше недели.' },
            {
              kind: 'mc',
              question: 'Wie viel bezahlt der Mann?',
              options: ['6,50 Euro.', '4 Euro.', '10,50 Euro.'],
              answer: 2,
              explanationRu: 'Таблетки 6,50 + капли 4 евро = 10,50 евро: «Das macht zehn Euro fünfzig».',
            },
          ],
        },
      ],
    },
  ],
};
