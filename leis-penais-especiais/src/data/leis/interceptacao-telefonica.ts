import type { Lei } from '../types'

/**
 * ESQUELETO — Interceptação Telefônica (9.296/1996).
 * Cenários ainda NÃO gerados (aguardando validação do padrão na Lei de Drogas).
 * ⚠️ RASCUNHO EDUCACIONAL — todo conteúdo precisará de revisão jurídica.
 */
export const lei: Lei = {
  id: "interceptacao",
  numero: "9.296/1996",
  nome: "Interceptação Telefônica",
  slug: "interceptacao-telefonica",
  resumo:
    "Regulamenta a interceptação de comunicações telefônicas para fins de investigação criminal e instrução processual penal, mediante autorização judicial. Define requisitos, prazo e tipifica a interceptação ilegal.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'interceptacao-f1',
      dificuldade: 'facil',
      enunciado:
        'Em uma investigação, a autoridade policial pretende interceptar as comunicações telefônicas do suspeito. Qual o requisito essencial para a medida ser válida?',
      alternativas: [
        { id: 'a', texto: 'Basta a decisão do delegado de polícia.' },
        { id: 'b', texto: 'É indispensável autorização do juiz competente, sob sigilo.' },
        { id: 'c', texto: 'Basta a concordância do Ministério Público.' },
        { id: 'd', texto: 'Independe de qualquer autorização em crimes graves.' },
      ],
      corretaId: 'b',
      explicacao:
        'A interceptação das comunicações telefônicas, para fins de investigação criminal ou instrução processual penal, depende de ordem do juiz competente da ação principal, sob segredo de justiça, conforme a Constituição e a lei.',
      baseLegal: 'art. 1º, Lei 9.296/1996; art. 5º, XII, CF',
      revisado: false,
    },
    {
      id: 'interceptacao-f2',
      dificuldade: 'facil',
      enunciado:
        'O juiz indaga qual o prazo de duração da interceptação telefônica previsto na lei e a possibilidade de prorrogação. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: '24 horas, sem prorrogação.' },
        { id: 'b', texto: '15 dias, renovável por igual tempo desde que comprovada a indispensabilidade.' },
        { id: 'c', texto: '60 dias, sem possibilidade de renovação.' },
        { id: 'd', texto: 'Prazo indeterminado até o fim da investigação.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 5º estabelece que a interceptação não poderá exceder 15 dias, renovável por igual tempo uma vez comprovada a indispensabilidade do meio de prova, segundo a redação legal.',
      baseLegal: 'art. 5º, Lei 9.296/1996',
      revisado: false,
    },
    {
      id: 'interceptacao-f3',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Não se admite a interceptação telefônica quando o fato investigado constituir infração penal punida, no máximo, com pena de detenção.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 2º, III, veda a interceptação quando o fato investigado constituir infração penal punida, no máximo, com pena de detenção, restringindo a medida aos crimes mais graves, em respeito à proporcionalidade.',
      baseLegal: 'art. 2º, III, Lei 9.296/1996',
      revisado: false,
    },
    {
      id: 'interceptacao-f4',
      dificuldade: 'facil',
      enunciado:
        'Um particular grava clandestinamente a conversa telefônica de terceiros, sem ordem judicial, e divulga o conteúdo. Em qual crime, em regra, incide a conduta?',
      alternativas: [
        { id: 'a', texto: 'Nenhum, pois a gravação é lícita.' },
        { id: 'b', texto: 'No crime de realizar interceptação de comunicações telefônicas sem autorização judicial ou com objetivos não autorizados em lei.' },
        { id: 'c', texto: 'Apenas em ilícito civil, sem repercussão penal.' },
        { id: 'd', texto: 'No crime de furto de informações.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 10 tipifica a conduta de realizar interceptação de comunicações telefônicas, de informática ou telemática, promover escuta ambiental ou quebrar segredo de justiça, sem autorização judicial ou com objetivos não autorizados em lei.',
      baseLegal: 'art. 10, Lei 9.296/1996',
      revisado: false,
    },
    {
      id: 'interceptacao-f5',
      dificuldade: 'facil',
      enunciado:
        'O delegado pretende interceptar comunicações, mas existem outros meios disponíveis para a prova. Qual condição negativa a lei impõe à autorização?',
      alternativas: [
        { id: 'a', texto: 'A medida é sempre admitida, independentemente de outros meios.' },
        { id: 'b', texto: 'Não se admite a interceptação se a prova puder ser feita por outros meios disponíveis.' },
        { id: 'c', texto: 'A interceptação é obrigatória em toda investigação.' },
        { id: 'd', texto: 'A existência de outros meios apenas reduz o prazo da medida.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 2º, II, veda a interceptação quando a prova puder ser feita por outros meios disponíveis, consagrando seu caráter subsidiário e excepcional como meio de obtenção de prova que restringe direito fundamental.',
      baseLegal: 'art. 2º, II, Lei 9.296/1996',
      revisado: false,
    },
    {
      id: 'interceptacao-f6',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A interceptação telefônica pode ser determinada pelo juiz, de ofício, ou requerida pela autoridade policial ou pelo Ministério Público.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 3º prevê que a interceptação poderá ser determinada pelo juiz, de ofício ou a requerimento da autoridade policial, na investigação criminal, ou do representante do Ministério Público, na investigação e na instrução processual penal.',
      baseLegal: 'art. 3º, Lei 9.296/1996',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'interceptacao-m1',
      dificuldade: 'medio',
      enunciado:
        'A defesa impugna decisão que autorizou a interceptação por apenas referir genericamente a gravidade do crime, sem indicar indícios de autoria nem a imprescindibilidade. Qual o vício a ser arguido?',
      alternativas: [
        { id: 'a', texto: 'Nenhum; a decisão de interceptação dispensa fundamentação.' },
        { id: 'b', texto: 'Falta de fundamentação idônea, pois a decisão deve indicar a presença de indícios razoáveis de autoria e a imprescindibilidade do meio.' },
        { id: 'c', texto: 'A decisão só precisa ser fundamentada se houver recurso.' },
        { id: 'd', texto: 'A fundamentação é exigida apenas na prorrogação.' },
      ],
      corretaId: 'b',
      explicacao:
        'A decisão que defere a interceptação deve ser fundamentada, sob pena de nulidade, indicando os indícios razoáveis de autoria ou participação e a demonstração de que a prova não pode ser obtida por outros meios, conforme exigem os arts. 4º e 5º e a Constituição.',
      baseLegal: 'arts. 4º e 5º, Lei 9.296/1996; art. 93, IX, CF',
      revisado: false,
    },
    {
      id: 'interceptacao-m2',
      dificuldade: 'medio',
      enunciado:
        'Durante interceptação autorizada para apurar tráfico, captou-se diálogo que revela um homicídio conexo praticado pelo mesmo grupo. A defesa quer excluir essa prova. Como a jurisprudência trata o encontro fortuito de provas?',
      alternativas: [
        { id: 'a', texto: 'A prova do crime diverso é sempre ilícita e deve ser descartada.' },
        { id: 'b', texto: 'Admite-se a serendipidade, sendo válida a prova de crime diverso descoberto fortuitamente, sobretudo havendo conexão com o fato investigado.' },
        { id: 'c', texto: 'O encontro fortuito anula toda a interceptação.' },
        { id: 'd', texto: 'A prova só vale se o novo crime for menos grave que o investigado.' },
      ],
      corretaId: 'b',
      explicacao:
        'A jurisprudência admite o fenômeno da serendipidade (encontro fortuito de provas), reputando válida a prova de crime diverso obtida licitamente no curso da interceptação regularmente autorizada, especialmente quando há conexão com o fato originalmente investigado.',
      baseLegal: 'art. 1º, Lei 9.296/1996; STF e STJ, jurisprudência sobre serendipidade',
      revisado: false,
    },
    {
      id: 'interceptacao-m3',
      dificuldade: 'medio',
      enunciado:
        'A defesa alega que a interceptação foi prorrogada sucessivas vezes além de um único período. Qual o entendimento dominante sobre o número de renovações?',
      alternativas: [
        { id: 'a', texto: 'A interceptação admite apenas uma única prorrogação, no máximo.' },
        { id: 'b', texto: 'Admitem-se prorrogações sucessivas enquanto persistirem os pressupostos e for demonstrada, em cada decisão, a indispensabilidade.' },
        { id: 'c', texto: 'A interceptação não pode jamais ser prorrogada.' },
        { id: 'd', texto: 'A prorrogação independe de nova fundamentação.' },
      ],
      corretaId: 'b',
      explicacao:
        'Embora o art. 5º fale em renovação por igual período, a jurisprudência consolidou que são possíveis prorrogações sucessivas, desde que persistam os pressupostos e cada decisão demonstre, de forma fundamentada, a indispensabilidade da continuidade da medida.',
      baseLegal: 'art. 5º, Lei 9.296/1996; STF e STJ, jurisprudência',
      revisado: false,
    },
    {
      id: 'interceptacao-m4',
      dificuldade: 'medio',
      enunciado:
        'Concluída a interceptação, a defesa requer acesso à integralidade dos áudios captados, não apenas aos trechos selecionados pela acusação. Qual o fundamento do pedido?',
      alternativas: [
        { id: 'a', texto: 'A defesa só tem direito aos trechos transcritos pela acusação.' },
        { id: 'b', texto: 'O contraditório e a ampla defesa asseguram o acesso à integralidade do material captado, viabilizando a verificação da prova.' },
        { id: 'c', texto: 'O acesso ao material é vedado à defesa por sigilo absoluto.' },
        { id: 'd', texto: 'O acesso só é deferido após o trânsito em julgado.' },
      ],
      corretaId: 'b',
      explicacao:
        'O contraditório e a ampla defesa garantem ao acusado acesso à integralidade dos diálogos captados, e não apenas aos excertos selecionados pela acusação, permitindo a aferição da regularidade e do conteúdo da prova produzida.',
      baseLegal: 'art. 5º, LV, CF; art. 6º, Lei 9.296/1996',
      revisado: false,
    },
    {
      id: 'interceptacao-m5',
      dificuldade: 'medio',
      enunciado:
        'A acusação apresenta gravação de conversa telefônica feita por um dos próprios interlocutores, sem ordem judicial, para se defender de acusação. Qual a distinção técnica relevante?',
      alternativas: [
        { id: 'a', texto: 'Trata-se de interceptação ilegal, sempre ilícita.' },
        { id: 'b', texto: 'É gravação telefônica por um dos interlocutores, que, em regra, é admitida, distinta da interceptação por terceiro sem autorização.' },
        { id: 'c', texto: 'A gravação por interlocutor exige sempre autorização judicial prévia.' },
        { id: 'd', texto: 'A gravação por interlocutor é crime do art. 10 da lei.' },
      ],
      corretaId: 'b',
      explicacao:
        'A gravação de conversa por um dos próprios interlocutores não se confunde com a interceptação por terceiro. Aquela, em regra, é considerada prova lícita pela jurisprudência, sobretudo quando usada para defesa, não estando sujeita à reserva de jurisdição da Lei 9.296/1996.',
      baseLegal: 'art. 1º, Lei 9.296/1996; STF, jurisprudência sobre gravação por interlocutor',
      revisado: false,
    },
    {
      id: 'interceptacao-m6',
      dificuldade: 'medio',
      enunciado:
        'No curso da interceptação, captou-se diálogo entre o investigado e seu advogado sobre a estratégia de defesa. A acusação pretende usar o conteúdo. Qual a objeção pertinente?',
      alternativas: [
        { id: 'a', texto: 'O diálogo é prova válida e pode ser usado livremente.' },
        { id: 'b', texto: 'A comunicação entre cliente e advogado, no exercício da defesa, é protegida por sigilo e prerrogativa, não podendo ser utilizada como prova.' },
        { id: 'c', texto: 'O diálogo só é protegido se o advogado for testemunha.' },
        { id: 'd', texto: 'O sigilo profissional não alcança comunicações telefônicas.' },
      ],
      corretaId: 'b',
      explicacao:
        'As comunicações entre o investigado e seu advogado, relativas ao exercício da defesa, são protegidas pelo sigilo profissional e pelas prerrogativas da advocacia. Captadas em interceptação, não podem servir de prova, devendo ser desentranhadas.',
      baseLegal: 'art. 7º, II, Lei 8.906/1994; art. 5º, LV, CF',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'interceptacao-d1',
      dificuldade: 'dificil',
      enunciado:
        'A interceptação que embasou a denúncia foi autorizada por juízo posteriormente declarado incompetente. A defesa pleiteia a nulidade da prova. Qual o enfoque jurisprudencial mais consistente?',
      alternativas: [
        { id: 'a', texto: 'A incompetência torna a prova sempre absolutamente nula e imprestável.' },
        { id: 'b', texto: 'A jurisprudência admite, em hipóteses de incompetência relativa e boa-fé, a validade da prova produzida, aplicando a teoria do juízo aparente, conforme as circunstâncias.' },
        { id: 'c', texto: 'A incompetência é irrelevante para a validade da interceptação.' },
        { id: 'd', texto: 'A prova só é válida se o réu confessar.' },
      ],
      corretaId: 'b',
      explicacao:
        'A jurisprudência, pela teoria do juízo aparente, admite a validade da interceptação autorizada por juízo inicialmente competente segundo os elementos então disponíveis, ainda que depois reconhecida a incompetência, sobretudo quando relativa e ausente má-fé.',
      baseLegal: 'art. 1º, Lei 9.296/1996; STF e STJ, teoria do juízo aparente',
      revisado: false,
    },
    {
      id: 'interceptacao-d2',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Reconhecida a ilicitude da interceptação que originou a investigação, todas as provas dela derivadas devem, em regra, ser desentranhadas, salvo as que decorram de fonte independente ou descoberta inevitável.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Pela teoria dos frutos da árvore envenenada, a ilicitude da interceptação contamina as provas dela derivadas, que devem ser desentranhadas, ressalvadas as exceções da fonte independente e da descoberta inevitável, hoje positivadas no CPP.',
      baseLegal: 'art. 5º, LVI, CF; art. 157, §§ 1º e 2º, CPP',
      revisado: false,
    },
    {
      id: 'interceptacao-d3',
      dificuldade: 'dificil',
      enunciado:
        'A defesa demonstra que os autos não contêm os procedimentos de transcrição e que se perderam os áudios originais antes da perícia. Qual a consequência jurídica mais provável?',
      alternativas: [
        { id: 'a', texto: 'Nenhuma; basta a transcrição parcial feita pela polícia.' },
        { id: 'b', texto: 'O comprometimento da cadeia de custódia e da integridade da prova pode acarretar sua inutilização, por impossibilidade de aferição da autenticidade.' },
        { id: 'c', texto: 'A perda dos áudios apenas reduz o valor probatório, sem qualquer nulidade.' },
        { id: 'd', texto: 'A prova se convalida com a confissão do réu.' },
      ],
      corretaId: 'b',
      explicacao:
        'A integridade e a cadeia de custódia são essenciais à validade da prova. A perda dos áudios originais e a ausência de procedimentos regulares de transcrição e preservação comprometem a aferição da autenticidade, podendo levar à inutilização do material como prova.',
      baseLegal: 'art. 6º, Lei 9.296/1996; arts. 158-A a 158-F, CPP',
      revisado: false,
    },
    {
      id: 'interceptacao-d4',
      dificuldade: 'dificil',
      enunciado:
        'A acusação requer o compartilhamento de dados de interceptação com órgão administrativo de outro processo. A defesa resiste. Qual o parâmetro para a prova emprestada nesse caso?',
      alternativas: [
        { id: 'a', texto: 'O compartilhamento é sempre vedado, em qualquer hipótese.' },
        { id: 'b', texto: 'Admite-se o compartilhamento e a prova emprestada, desde que respeitados o contraditório e a finalidade compatível, observada a legalidade da interceptação de origem.' },
        { id: 'c', texto: 'A prova emprestada dispensa contraditório no processo de destino.' },
        { id: 'd', texto: 'O compartilhamento independe de autorização judicial.' },
      ],
      corretaId: 'b',
      explicacao:
        'A jurisprudência admite a prova emprestada e o compartilhamento de dados de interceptação lícita, inclusive para fins administrativos, desde que assegurado o contraditório no processo de destino e respeitada a legalidade da medida na origem.',
      baseLegal: 'art. 1º, Lei 9.296/1996; STF, jurisprudência sobre prova emprestada',
      revisado: false,
    },
    {
      id: 'interceptacao-d5',
      dificuldade: 'dificil',
      enunciado:
        'A defesa sustenta que a interceptação telemática de mensagens armazenadas em aplicativo e o acesso a registros não se confundem com a interceptação do fluxo de comunicações. Qual a distinção técnica relevante?',
      alternativas: [
        { id: 'a', texto: 'São institutos idênticos, regidos exclusivamente pela Lei 9.296/1996.' },
        { id: 'b', texto: 'A interceptação alcança o fluxo das comunicações em tempo real; o acesso a dados e mensagens armazenadas observa regime próprio, como o do Marco Civil da Internet.' },
        { id: 'c', texto: 'O acesso a mensagens armazenadas dispensa qualquer autorização judicial.' },
        { id: 'd', texto: 'A interceptação telemática é vedada em qualquer hipótese.' },
      ],
      corretaId: 'b',
      explicacao:
        'A interceptação prevista na Lei 9.296/1996 abrange o fluxo de comunicações em tempo real. O acesso a dados e mensagens já armazenadas segue regime distinto, notadamente o Marco Civil da Internet, exigindo ordem judicial específica e fundamentos próprios.',
      baseLegal: 'art. 1º, parágrafo único, Lei 9.296/1996; arts. 22 e 23, Lei 12.965/2014',
      revisado: false,
    },
    {
      id: 'interceptacao-d6',
      dificuldade: 'dificil',
      enunciado:
        'A condenação fundou-se exclusivamente em interceptação cujas prorrogações sucessivas não foram individualmente fundamentadas, com renovações automáticas. Qual a tese defensiva mais robusta?',
      alternativas: [
        { id: 'a', texto: 'As prorrogações são válidas por presunção, dispensada fundamentação.' },
        { id: 'b', texto: 'A ausência de fundamentação concreta e individualizada em cada prorrogação acarreta a nulidade da medida e a ilicitude da prova, contaminando a condenação que nela se apoia.' },
        { id: 'c', texto: 'A nulidade só atinge as prorrogações, preservando-se a condenação.' },
        { id: 'd', texto: 'A falta de fundamentação é sanada pela sentença condenatória.' },
      ],
      corretaId: 'b',
      explicacao:
        'Cada prorrogação da interceptação exige decisão fundamentada que demonstre a persistência dos requisitos e a indispensabilidade da continuidade. Renovações automáticas e desmotivadas tornam a prova ilícita, e, sendo o único fundamento, contaminam a condenação.',
      baseLegal: 'art. 5º, Lei 9.296/1996; art. 93, IX, e art. 5º, LVI, CF',
      revisado: false,
    },
  ],
}
