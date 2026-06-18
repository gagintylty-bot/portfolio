import type { Lei } from '../types'

/**
 * ESQUELETO — Organização Criminosa (12.850/2013).
 * Cenários ainda NÃO gerados (aguardando validação do padrão na Lei de Drogas).
 * ⚠️ RASCUNHO EDUCACIONAL — todo conteúdo precisará de revisão jurídica.
 */
export const lei: Lei = {
  id: "organizacao-criminosa",
  numero: "12.850/2013",
  nome: "Organização Criminosa",
  slug: "organizacao-criminosa",
  resumo:
    "Define organização criminosa e o crime de promover, constituir ou integrar tal estrutura. Disciplina meios de obtenção de prova, com destaque para a colaboração premiada, a ação controlada e a infiltração de agentes.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'organizacao-criminosa-f1',
      dificuldade: 'facil',
      enunciado:
        'A denúncia descreve um grupo de quatro pessoas, estruturalmente ordenado e com divisão de tarefas, voltado a obter vantagem mediante crimes com pena máxima superior a quatro anos. Quantas pessoas, no mínimo, a lei exige para configurar organização criminosa?',
      alternativas: [
        { id: 'a', texto: 'Duas pessoas.' },
        { id: 'b', texto: 'Três pessoas.' },
        { id: 'c', texto: 'Quatro pessoas.' },
        { id: 'd', texto: 'Cinco pessoas.' },
      ],
      corretaId: 'c',
      explicacao:
        'O art. 1º, § 1º, define organização criminosa como a associação de 4 ou mais pessoas, estruturalmente ordenada e caracterizada pela divisão de tarefas, com objetivo de obter vantagem mediante a prática de infrações cujas penas máximas sejam superiores a 4 anos, ou de caráter transnacional.',
      baseLegal: 'art. 1º, § 1º, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-f2',
      dificuldade: 'facil',
      enunciado:
        'O promotor sustenta que seu cliente integra organização criminosa. Qual a pena prevista para promover, constituir, financiar ou integrar organização criminosa?',
      alternativas: [
        { id: 'a', texto: 'Detenção de 6 meses a 2 anos e multa.' },
        { id: 'b', texto: 'Reclusão de 3 a 8 anos e multa.' },
        { id: 'c', texto: 'Reclusão de 1 a 4 anos e multa.' },
        { id: 'd', texto: 'Apenas multa.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 2º, caput, comina pena de reclusão de 3 a 8 anos e multa a quem promove, constitui, financia ou integra, pessoalmente ou por interposta pessoa, organização criminosa, sem prejuízo das penas dos demais crimes praticados.',
      baseLegal: 'art. 2º, caput, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-f3',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A colaboração premiada, prevista na Lei 12.850/2013, é um meio de obtenção de prova que pode resultar em perdão judicial, redução da pena ou substituição por restritiva de direitos.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 4º prevê que o juiz poderá conceder perdão judicial, reduzir a pena privativa de liberdade em até 2/3 ou substituí-la por restritiva de direitos ao colaborador que tenha prestado efetiva e voluntária colaboração com resultados previstos na lei.',
      baseLegal: 'art. 4º, caput, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-f4',
      dificuldade: 'facil',
      enunciado:
        'Em uma operação, os investigadores retardam a intervenção policial para que a medida se concretize em momento mais eficaz à formação de provas. Qual instituto a lei nomeia para essa técnica?',
      alternativas: [
        { id: 'a', texto: 'Infiltração de agentes.' },
        { id: 'b', texto: 'Ação controlada.' },
        { id: 'c', texto: 'Interceptação ambiental.' },
        { id: 'd', texto: 'Busca e apreensão genérica.' },
      ],
      corretaId: 'b',
      explicacao:
        'A ação controlada (art. 8º) consiste em retardar a intervenção policial ou administrativa relativa à ação praticada por organização criminosa, mantendo-a sob observação para que a medida se concretize no momento mais eficaz à formação de provas.',
      baseLegal: 'art. 8º, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-f5',
      dificuldade: 'facil',
      enunciado:
        'Discute-se se um agente policial pode se infiltrar em uma organização para obter provas. Sob qual condição central a infiltração de agentes é admitida?',
      alternativas: [
        { id: 'a', texto: 'Mediante simples decisão da autoridade policial, sem controle judicial.' },
        { id: 'b', texto: 'Mediante autorização judicial prévia, circunstanciada, motivada e sigilosa.' },
        { id: 'c', texto: 'Independe de qualquer autorização, pois é técnica administrativa.' },
        { id: 'd', texto: 'Apenas com autorização do delegado e do promotor, sem o juiz.' },
      ],
      corretaId: 'b',
      explicacao:
        'A infiltração de agentes de polícia depende de autorização judicial prévia, circunstanciada, motivada e sigilosa, sendo precedida de manifestação técnica e admitida quando a prova não puder ser produzida por outros meios.',
      baseLegal: 'art. 10, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-f6',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Segundo a lei, basta a reunião eventual e momentânea de pessoas para a prática de um único crime para que se configure organização criminosa.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'A organização criminosa exige estrutura ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com estabilidade e permanência voltadas à obtenção de vantagem. A mera reunião eventual para um único crime configura concurso de pessoas, não organização criminosa.',
      baseLegal: 'art. 1º, § 1º, Lei 12.850/2013',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'organizacao-criminosa-m1',
      dificuldade: 'medio',
      enunciado:
        'O réu, integrante de organização, exercia o comando do grupo. A acusação pede a aplicação de circunstância agravante específica. O que a lei prevê para quem exerce posição de liderança?',
      alternativas: [
        { id: 'a', texto: 'Nenhuma consequência especial; a pena é igual para todos.' },
        { id: 'b', texto: 'A pena é agravada para quem exerce o comando, individual ou coletivo, da organização, ainda que não pratique pessoalmente os atos de execução.' },
        { id: 'c', texto: 'A liderança é causa de diminuição de pena.' },
        { id: 'd', texto: 'A liderança transforma o crime em contravenção.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 2º, § 3º, determina o agravamento da pena para quem exerce o comando, individual ou coletivo, da organização criminosa, ainda que não pratique pessoalmente atos de execução, em razão da maior reprovabilidade do papel de liderança.',
      baseLegal: 'art. 2º, § 3º, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-m2',
      dificuldade: 'medio',
      enunciado:
        'A defesa pretende impugnar uma sentença condenatória baseada exclusivamente nas declarações de um colaborador, sem outros elementos. Qual a vedação legal expressa que ampara a tese?',
      alternativas: [
        { id: 'a', texto: 'A colaboração premiada é prova absoluta e basta para a condenação.' },
        { id: 'b', texto: 'Nenhuma sentença condenatória será proferida com fundamento apenas nas declarações de agente colaborador.' },
        { id: 'c', texto: 'A colaboração só vale se confirmada por confissão do réu.' },
        { id: 'd', texto: 'A colaboração jamais pode ser usada como prova.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 4º, § 16, veda que se profira sentença condenatória com fundamento apenas nas declarações do colaborador. A colaboração é meio de obtenção de prova e exige corroboração por outros elementos.',
      baseLegal: 'art. 4º, § 16, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-m3',
      dificuldade: 'medio',
      enunciado:
        'O Ministério Público propõe acordo de colaboração ao réu já preso, prevendo redução de pena. A defesa questiona o momento em que o benefício pode ser pactuado. O que diz a lei?',
      alternativas: [
        { id: 'a', texto: 'A colaboração só pode ser firmada antes do oferecimento da denúncia.' },
        { id: 'b', texto: 'A colaboração pode ocorrer em qualquer fase, inclusive após a sentença, com benefícios diferenciados conforme o momento.' },
        { id: 'c', texto: 'A colaboração é vedada após o recebimento da denúncia.' },
        { id: 'd', texto: 'A colaboração só é possível em segundo grau.' },
      ],
      corretaId: 'b',
      explicacao:
        'A colaboração pode ser celebrada em diferentes fases da persecução. O art. 4º, § 5º, prevê inclusive que, se a colaboração for posterior à sentença, a pena poderá ser reduzida até a metade ou admitida a progressão de regime ainda que ausentes os requisitos objetivos.',
      baseLegal: 'art. 4º, § 5º, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-m4',
      dificuldade: 'medio',
      enunciado:
        'Em audiência, a acusação afirma que a organização criminosa empregava armas de fogo. Qual o efeito dessa circunstância segundo a lei?',
      alternativas: [
        { id: 'a', texto: 'Diminui a pena.' },
        { id: 'b', texto: 'Aumenta a pena de 1/6 a 2/3 se há emprego de arma de fogo na atuação da organização.' },
        { id: 'c', texto: 'É circunstância irrelevante para a pena.' },
        { id: 'd', texto: 'Exclui o crime de organização criminosa.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 2º, § 2º, prevê aumento de pena de 1/6 a 2/3 se há emprego de arma de fogo na atuação da organização criminosa, dada a maior periculosidade da conduta.',
      baseLegal: 'art. 2º, § 2º, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-m5',
      dificuldade: 'medio',
      enunciado:
        'A defesa questiona a denúncia que confunde organização criminosa com associação criminosa do Código Penal. Qual a principal distinção técnica entre os tipos?',
      alternativas: [
        { id: 'a', texto: 'São institutos idênticos, com a mesma pena e estrutura.' },
        { id: 'b', texto: 'A associação criminosa exige 3 ou mais pessoas para crimes em geral; a organização exige 4 ou mais, com estrutura ordenada e divisão de tarefas voltada a infrações de pena máxima superior a 4 anos ou transnacionais.' },
        { id: 'c', texto: 'A organização criminosa exige apenas 2 pessoas.' },
        { id: 'd', texto: 'A associação criminosa exige estrutura empresarial.' },
      ],
      corretaId: 'b',
      explicacao:
        'A associação criminosa (art. 288 do CP) exige 3 ou mais pessoas para o fim específico de cometer crimes. A organização criminosa exige 4 ou mais pessoas, estrutura ordenada, divisão de tarefas e objetivo de vantagem por infrações de pena máxima superior a 4 anos ou de caráter transnacional.',
      baseLegal: 'art. 1º, § 1º, Lei 12.850/2013; art. 288, CP',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-m6',
      dificuldade: 'medio',
      enunciado:
        'O réu, funcionário público, valeu-se do cargo para favorecer a organização. A defesa nega qualquer agravamento. O que a lei prevê quanto ao funcionário público?',
      alternativas: [
        { id: 'a', texto: 'A condição de funcionário público é indiferente para a pena.' },
        { id: 'b', texto: 'A pena é agravada para o funcionário público que se vale do cargo em proveito da organização, podendo haver, ainda, perda do cargo e interdição.' },
        { id: 'c', texto: 'O funcionário público é isento de pena.' },
        { id: 'd', texto: 'A condição funcional reduz a pena pela metade.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 2º, § 4º, IV, prevê aumento de pena quando há concurso de funcionário público valendo-se do cargo. Além disso, o § 6º prevê a perda do cargo, função, emprego ou mandato eletivo e a interdição para o exercício de função pública pelo dobro do prazo da pena.',
      baseLegal: 'art. 2º, §§ 4º, IV, e 6º, Lei 12.850/2013',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'organizacao-criminosa-d1',
      dificuldade: 'dificil',
      enunciado:
        'A defesa pleiteia ao juiz acesso integral aos elementos de prova já documentados que embasam acordo de colaboração, sob o argumento de cerceamento. A acusação resiste invocando sigilo. Qual o enfoque consagrado pelo STF?',
      alternativas: [
        { id: 'a', texto: 'O acusado nunca tem acesso aos elementos da colaboração.' },
        { id: 'b', texto: 'É assegurado ao defensor, no interesse do representado, acesso aos elementos de prova já documentados que digam respeito ao exercício da defesa, resguardadas diligências em andamento.' },
        { id: 'c', texto: 'O acesso depende exclusivamente da concordância do colaborador.' },
        { id: 'd', texto: 'O acesso só é possível após o trânsito em julgado.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Súmula Vinculante 14 e o art. 7º, § 2º, asseguram ao defensor acesso aos elementos de prova já documentados em procedimento investigatório que digam respeito ao exercício do direito de defesa, resguardando-se as diligências ainda em curso.',
      baseLegal: 'art. 7º, § 2º, Lei 12.850/2013; Súmula Vinculante 14, STF',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-d2',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Conforme entendimento do STF, o acordo de colaboração premiada constitui negócio jurídico processual e meio de obtenção de prova, e a homologação judicial não atesta a veracidade das declarações do colaborador.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O STF (HC 127.483) firmou que a colaboração premiada é negócio jurídico processual e meio de obtenção de prova, cuja homologação se limita ao exame de regularidade, legalidade e voluntariedade, sem juízo sobre a veracidade do conteúdo das declarações.',
      baseLegal: 'art. 4º, Lei 12.850/2013; STF, HC 127.483',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-d3',
      dificuldade: 'dificil',
      enunciado:
        'Durante infiltração autorizada, o agente policial, para manter a credibilidade junto à organização, pratica condutas típicas inerentes à investigação. A defesa de corréu pretende responsabilizá-lo. Qual a regra de exclusão de responsabilidade prevista?',
      alternativas: [
        { id: 'a', texto: 'O agente infiltrado responde por todos os crimes que praticar, sem qualquer excludente.' },
        { id: 'b', texto: 'Não é punível, no âmbito da infiltração, a prática de crime pelo agente infiltrado quando inexigível conduta diversa, observada a proporcionalidade.' },
        { id: 'c', texto: 'A infiltração afasta a responsabilidade de todos os investigados.' },
        { id: 'd', texto: 'O agente infiltrado tem imunidade absoluta e irrestrita.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 13, parágrafo único, prevê que não é punível, no curso da infiltração, a prática de crime pelo agente infiltrado quando inexigível conduta diversa, observados os limites da proporcionalidade, sem prejuízo da responsabilização por eventuais excessos.',
      baseLegal: 'art. 13, parágrafo único, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-d4',
      dificuldade: 'dificil',
      enunciado:
        'O réu colaborador prestou informações que não geraram nenhum dos resultados previstos em lei (identificação de coautores, recuperação de produto, prevenção de infrações). A defesa ainda pleiteia o benefício máximo. Qual o enfoque tecnicamente correto?',
      alternativas: [
        { id: 'a', texto: 'A simples assinatura do acordo garante o benefício máximo, independentemente de resultado.' },
        { id: 'b', texto: 'A concessão e a graduação dos benefícios dependem da efetividade da colaboração e do alcance de pelo menos um dos resultados previstos em lei.' },
        { id: 'c', texto: 'O benefício é automático sempre que houver confissão.' },
        { id: 'd', texto: 'A colaboração ineficaz gera perdão judicial obrigatório.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 4º condiciona a concessão e a dosagem dos benefícios à efetividade da colaboração e ao alcance de ao menos um dos resultados legais, como identificação de coautores, revelação da estrutura, prevenção de infrações ou recuperação do produto do crime.',
      baseLegal: 'art. 4º, caput e incisos, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-d5',
      dificuldade: 'dificil',
      enunciado:
        'A denúncia imputa, cumulativamente, o crime de organização criminosa e os crimes-fim por ela praticados, com base nos mesmos fatos. A defesa alega absorção. Qual o entendimento mais consistente sobre o concurso?',
      alternativas: [
        { id: 'a', texto: 'O crime de organização criminosa sempre absorve os crimes-fim.' },
        { id: 'b', texto: 'O crime de organização criminosa é autônomo e, em regra, há concurso com os crimes-fim, pois a lei prevê a punição sem prejuízo das penas dos demais delitos.' },
        { id: 'c', texto: 'Os crimes-fim sempre absorvem o crime de organização criminosa.' },
        { id: 'd', texto: 'Não há possibilidade de concurso, sob pena de bis in idem absoluto.' },
      ],
      corretaId: 'b',
      explicacao:
        'O próprio art. 2º, caput, ressalva a punição do crime de organização criminosa sem prejuízo das penas correspondentes às demais infrações praticadas. O crime associativo é autônomo e protege bem jurídico distinto, admitindo, em regra, concurso com os crimes-fim.',
      baseLegal: 'art. 2º, caput, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'organizacao-criminosa-d6',
      dificuldade: 'dificil',
      enunciado:
        'O juiz que homologou o acordo de colaboração foi posteriormente indicado para presidir a instrução e o julgamento do mesmo feito. A defesa alega quebra de imparcialidade. Qual o entendimento aplicável?',
      alternativas: [
        { id: 'a', texto: 'A homologação do acordo torna o juiz absolutamente impedido de qualquer ato futuro.' },
        { id: 'b', texto: 'A homologação limita-se ao juízo de regularidade, legalidade e voluntariedade, sem antecipar mérito, de modo que, em regra, não compromete por si só a imparcialidade do julgador.' },
        { id: 'c', texto: 'O juiz que homologa o acordo passa a integrar a acusação.' },
        { id: 'd', texto: 'A homologação obriga o juiz a condenar o colaborador.' },
      ],
      corretaId: 'b',
      explicacao:
        'Como a homologação se restringe à análise de regularidade, legalidade e voluntariedade (art. 4º, § 7º), sem juízo sobre a veracidade ou o mérito, prevalece o entendimento de que, por si só, esse ato não compromete a imparcialidade do julgador para a instrução e o julgamento.',
      baseLegal: 'art. 4º, §§ 7º e 8º, Lei 12.850/2013; STF, HC 127.483',
      revisado: false,
    },
  ],
}
