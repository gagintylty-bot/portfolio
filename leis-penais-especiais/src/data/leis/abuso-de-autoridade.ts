import type { Lei } from '../types'

/**
 * RASCUNHO EDUCACIONAL — Abuso de Autoridade (13.869/2019).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ Precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "abuso-autoridade",
  numero: "13.869/2019",
  nome: "Abuso de Autoridade",
  slug: "abuso-de-autoridade",
  resumo:
    "Define os crimes de abuso de autoridade praticados por agentes públicos. Exige finalidade específica (dolo de prejudicar, beneficiar ou por mero capricho) e prevê efeitos da condenação e sanções civis e administrativas.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'abuso-autoridade-f1',
      dificuldade: 'facil',
      enunciado:
        'A defesa sustenta que o delegado que atuou contra seu cliente não pode ser sujeito ativo de abuso de autoridade. Quem pode, em regra, praticar os crimes da Lei 13.869/2019?',
      alternativas: [
        { id: 'a', texto: 'Apenas magistrados e membros do Ministério Público.' },
        { id: 'b', texto: 'Qualquer agente público, servidor ou não, que no exercício de funções estatais pratique as condutas tipificadas.' },
        { id: 'c', texto: 'Somente policiais militares.' },
        { id: 'd', texto: 'Qualquer pessoa, ainda que particular.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 2º da Lei 13.869/2019 estabelece que é sujeito ativo do crime de abuso de autoridade qualquer agente público, servidor ou não, que, no exercício de funções estatais ou a pretexto de exercê-las, pratique as condutas previstas na lei.',
      baseLegal: 'art. 2º, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-f2',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Os crimes de abuso de autoridade são puníveis apenas a título de dolo, exigindo-se finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda o agir por mero capricho ou satisfação pessoal.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 1º, §§ 1º e 2º, da Lei 13.869/2019 exige dolo e finalidade específica de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou agir por mero capricho ou satisfação pessoal, afastando a punição por mera divergência interpretativa ou avaliação de fatos e provas.',
      baseLegal: 'art. 1º, §§ 1º e 2º, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-f3',
      dificuldade: 'facil',
      enunciado:
        'Um agente público decretou medida privativa da liberdade individual em manifesta desconformidade com as hipóteses legais. Como a Lei 13.869/2019 trata, em regra, essa conduta?',
      alternativas: [
        { id: 'a', texto: 'Como conduta atípica, por ser ato de autoridade.' },
        { id: 'b', texto: 'Como crime de abuso de autoridade por decretar medida de privação da liberdade em manifesta desconformidade com a lei.' },
        { id: 'c', texto: 'Como mera irregularidade administrativa.' },
        { id: 'd', texto: 'Como crime hediondo.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 9º da Lei 13.869/2019 tipifica decretar medida de privação da liberdade em manifesta desconformidade com as hipóteses legais, inclusive a prisão fora dos casos previstos em lei ou sem observância das formalidades legais.',
      baseLegal: 'art. 9º, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-f4',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente, preso em flagrante, deixou de ser informado sobre seu direito de permanecer calado e de contatar advogado. Há conduta tipificada na Lei de Abuso de Autoridade?',
      alternativas: [
        { id: 'a', texto: 'Não, pois esses direitos são meramente formais.' },
        { id: 'b', texto: 'Sim, constranger o preso ou detento a deixar de exercer direito, ou deixar de identificar-se e cientificá-lo de seus direitos pode configurar abuso.' },
        { id: 'c', texto: 'Sim, mas apenas se houver lesão corporal.' },
        { id: 'd', texto: 'Não, pois o direito ao silêncio não existe no Brasil.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 13.869/2019 tipifica condutas como constranger o preso ou detento a produzir prova contra si, bem como deixar a autoridade de identificar-se ou de cientificar o preso de seus direitos, em afronta às garantias do investigado e do preso.',
      baseLegal: 'arts. 13 e 15, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-f5',
      dificuldade: 'facil',
      enunciado:
        'Um juiz adotou interpretação de lei divergente da defesa, que então pede sua responsabilização por abuso de autoridade. Como a Lei 13.869/2019 trata a mera divergência interpretativa?',
      alternativas: [
        { id: 'a', texto: 'A divergência na interpretação de lei configura, por si só, abuso de autoridade.' },
        { id: 'b', texto: 'A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade.' },
        { id: 'c', texto: 'A divergência configura abuso apenas se houver recurso.' },
        { id: 'd', texto: 'A divergência configura crime culposo de abuso.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 1º, § 2º, da Lei 13.869/2019 dispõe expressamente que a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade, justamente para resguardar a atuação funcional de boa-fé.',
      baseLegal: 'art. 1º, § 2º, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-f6',
      dificuldade: 'facil',
      enunciado:
        'Qual a espécie de ação penal e a regra de competência, em regra, para os crimes de abuso de autoridade?',
      alternativas: [
        { id: 'a', texto: 'Ação penal privada, de iniciativa exclusiva da vítima.' },
        { id: 'b', texto: 'Ação penal pública incondicionada, admitida ação privada subsidiária da pública em caso de inércia do Ministério Público.' },
        { id: 'c', texto: 'Ação penal pública condicionada à representação, sempre.' },
        { id: 'd', texto: 'Não há ação penal, apenas processo administrativo.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 3º da Lei 13.869/2019 estabelece que os crimes de abuso de autoridade são de ação penal pública incondicionada, admitindo-se a ação privada subsidiária da pública se a denúncia não for oferecida no prazo legal.',
      baseLegal: 'art. 3º, Lei 13.869/2019',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'abuso-autoridade-m1',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente foi alvo de busca e apreensão domiciliar cumprida durante a madrugada, fora do período permitido e sem autorização judicial para tanto. Que crime de abuso, em regra, se discute?',
      alternativas: [
        { id: 'a', texto: 'Nenhum, pois a busca é sempre legítima.' },
        { id: 'b', texto: 'Cumprir mandado de busca e apreensão domiciliar após as 21h ou antes das 5h, ou ingressar em domicílio sem autorização, configura abuso conforme a lei.' },
        { id: 'c', texto: 'Apenas crime contra o patrimônio.' },
        { id: 'd', texto: 'Apenas infração disciplinar.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 22 da Lei 13.869/2019 tipifica invadir ou adentrar imóvel alheio ou suas dependências, ou nele permanecer, sem determinação judicial ou fora das condições legais, bem como cumprir mandado de busca e apreensão domiciliar fora do período legal, observada a finalidade específica.',
      baseLegal: 'art. 22, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-m2',
      dificuldade: 'medio',
      enunciado:
        'Um agente expôs seu cliente, ainda investigado, à execração pública por meio da imprensa, submetendo-o a vexame não autorizado em lei. Qual conduta da Lei 13.869/2019 está em discussão?',
      alternativas: [
        { id: 'a', texto: 'Submeter o preso ou investigado a situação vexatória ou a constrangimento não autorizado em lei.' },
        { id: 'b', texto: 'Crime contra a honra do Código Penal apenas, sem abuso.' },
        { id: 'c', texto: 'Conduta atípica, por ser de interesse público.' },
        { id: 'd', texto: 'Crime de prevaricação.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 13 da Lei 13.869/2019 tipifica constranger o preso ou detento, mediante violência, grave ameaça ou redução de capacidade de resistência, a submeter-se a situação vexatória ou a constrangimento não autorizado em lei, ou a produzir prova contra si mesmo.',
      baseLegal: 'art. 13, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'O agente que deixa de relaxar prisão manifestamente ilegal, podendo fazê-lo, pode responder por crime de abuso de autoridade.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 12 da Lei 13.869/2019 tipifica deixar injustificadamente de comunicar a prisão e, entre outras condutas, deixar de relaxar a prisão manifestamente ilegal ou de conceder liberdade quando devida, desde que presente a finalidade específica exigida pela lei.',
      baseLegal: 'art. 12, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-m4',
      dificuldade: 'medio',
      enunciado:
        'A acusação imputa ao agente o crime de obter prova por meio manifestamente ilícito em procedimento de investigação. Esse fato encontra tipificação específica na Lei de Abuso de Autoridade?',
      alternativas: [
        { id: 'a', texto: 'Não, a prova ilícita gera apenas nulidade processual.' },
        { id: 'b', texto: 'Sim, constitui crime de abuso de autoridade proceder à obtenção de prova por meio manifestamente ilícito, com a finalidade específica exigida.' },
        { id: 'c', texto: 'Sim, mas apenas se houver condenação do investigado.' },
        { id: 'd', texto: 'Não, pois prova é matéria exclusivamente processual.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 25 da Lei 13.869/2019 tipifica proceder à obtenção de prova, em procedimento de investigação ou fiscalização, por meio manifestamente ilícito, abrangendo também o agente que faz uso de prova que sabe ilícita, presente a finalidade específica.',
      baseLegal: 'art. 25, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-m5',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente foi processado por crime de abuso e a defesa sustenta atipicidade por ausência de finalidade específica. Por que esse elemento é decisivo na Lei 13.869/2019?',
      alternativas: [
        { id: 'a', texto: 'Porque a lei admite responsabilidade objetiva, dispensando dolo.' },
        { id: 'b', texto: 'Porque a tipicidade exige o especial fim de agir (prejudicar, beneficiar ou capricho), sem o qual a conduta não configura abuso de autoridade.' },
        { id: 'c', texto: 'Porque a finalidade específica é mera circunstância de aumento.' },
        { id: 'd', texto: 'Porque a culpa grave já basta para a condenação.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 13.869/2019 condiciona a tipicidade dos crimes de abuso à presença do especial fim de agir do art. 1º, § 1º. Sem a comprovação dessa finalidade específica, a conduta, ainda que irregular, não configura crime de abuso de autoridade.',
      baseLegal: 'art. 1º, § 1º, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-m6',
      dificuldade: 'medio',
      enunciado:
        'O agente requisitou condução coercitiva de testemunha sem prévia intimação para comparecer. A defesa aponta abuso. Qual o tratamento dessa conduta na lei?',
      alternativas: [
        { id: 'a', texto: 'A condução coercitiva é sempre livre e jamais configura abuso.' },
        { id: 'b', texto: 'Constranger alguém a depor, sob ameaça de prisão, ou a comparecer coercitivamente sem prévia intimação de comparecimento ao juízo pode configurar abuso.' },
        { id: 'c', texto: 'A condução coercitiva é crime hediondo.' },
        { id: 'd', texto: 'A conduta é atípica em qualquer hipótese.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 10 da Lei 13.869/2019 tipifica decretar a condução coercitiva de testemunha ou investigado manifestamente descabida, ou sem prévia intimação de comparecimento ao juízo, conduta que afronta as garantias processuais quando ausentes os requisitos legais.',
      baseLegal: 'art. 10, Lei 13.869/2019',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'abuso-autoridade-d1',
      dificuldade: 'dificil',
      enunciado:
        'Magistrado proferiu decisão que, segundo a acusação, contrariou a jurisprudência dominante. O Ministério Público denuncia-o por abuso. Qual a tese defensiva mais consistente?',
      alternativas: [
        { id: 'a', texto: 'Toda decisão contrária à jurisprudência configura abuso de autoridade.' },
        { id: 'b', texto: 'A divergência na interpretação da lei e na avaliação de fatos e provas não configura abuso, sob pena de criminalizar a atividade interpretativa do julgador.' },
        { id: 'c', texto: 'O magistrado responde por abuso por culpa grave.' },
        { id: 'd', texto: 'O magistrado nunca pode ser sujeito ativo de abuso.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 1º, § 2º, da Lei 13.869/2019 afasta o abuso de autoridade nos casos de divergência interpretativa de lei ou avaliação de fatos e provas, salvaguarda essencial à independência funcional e que impede a criminalização da hermenêutica jurídica.',
      baseLegal: 'art. 1º, § 2º, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-d2',
      dificuldade: 'dificil',
      enunciado:
        'Condenado por abuso de autoridade, o agente é reincidente específico nesse tipo de crime. Que efeito a Lei 13.869/2019 prevê especificamente para essa condenação?',
      alternativas: [
        { id: 'a', texto: 'Nenhum efeito além da pena privativa de liberdade.' },
        { id: 'b', texto: 'A perda do cargo, do mandato ou da função pública e a inabilitação para o exercício de cargo público podem ser declaradas, sobretudo na reincidência em crime de abuso.' },
        { id: 'c', texto: 'A conversão automática da pena em multa.' },
        { id: 'd', texto: 'A anistia obrigatória do agente.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 4º da Lei 13.869/2019 prevê, como efeitos da condenação, a obrigação de indenizar o dano, a inabilitação para o exercício de cargo, mandato ou função pública por até 5 anos e a perda do cargo, mandato ou função, este último aplicável especialmente em caso de reincidência em crime de abuso de autoridade.',
      baseLegal: 'art. 4º, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'A Lei de Abuso de Autoridade tipifica a conduta do agente que, no curso de investigação, requisita ou obtém dados telefônicos, telemáticos ou bancários sem autorização judicial, quando esta for legalmente exigida.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 32 da Lei 13.869/2019 tipifica negar acesso aos autos a quem de direito, e a lei sanciona condutas correlatas de quebra ilegal de sigilo; em conjunto com o ordenamento, a requisição ou obtenção de dados protegidos por reserva de jurisdição sem autorização judicial, quando exigida, sujeita o agente a responsabilização por abuso.',
      baseLegal: 'arts. 25 e 32, Lei 13.869/2019; art. 5º, XII, CF',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-d4',
      dificuldade: 'dificil',
      enunciado:
        'Agente prolongou execução de pena já extinta, mantendo o preso recolhido após o término do cumprimento. A defesa do preso busca responsabilização. Qual conduta da Lei 13.869/2019 melhor se ajusta?',
      alternativas: [
        { id: 'a', texto: 'Nenhuma, pois cabe ao preso requerer a soltura.' },
        { id: 'b', texto: 'Manter o indivíduo preso quando manifestamente cabível a liberdade, ou prolongar execução de pena ou medida já extinta, configura abuso conforme a lei.' },
        { id: 'c', texto: 'Apenas crime de cárcere privado comum.' },
        { id: 'd', texto: 'Conduta atípica por se tratar de execução penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 13.869/2019 tipifica condutas como prolongar execução de pena privativa de liberdade, de prisão temporária, de prisão preventiva, de medida de segurança ou outra medida quando manifestamente cabível a soltura, ou após extinta a punibilidade, presente a finalidade específica.',
      baseLegal: 'art. 12, parágrafo único, e art. 9º, Lei 13.869/2019',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-d5',
      dificuldade: 'dificil',
      enunciado:
        'A acusação imputa abuso de autoridade a um servidor que negou, sem fundamento legal, acesso do advogado aos autos de investigação em curso. Como tratar tecnicamente essa conduta?',
      alternativas: [
        { id: 'a', texto: 'O acesso aos autos é faculdade discricionária plena da autoridade.' },
        { id: 'b', texto: 'Negar ao interessado, seu defensor ou advogado, acesso aos autos de investigação, salvo nas diligências em andamento sob sigilo, configura crime de abuso.' },
        { id: 'c', texto: 'O advogado nunca tem direito de acesso a autos de investigação.' },
        { id: 'd', texto: 'A conduta é mera infração disciplinar sem reflexo penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 32 da Lei 13.869/2019 tipifica negar ao interessado, seu defensor ou advogado acesso aos autos de investigação preliminar, ao termo circunstanciado, ao inquérito ou a qualquer outro procedimento investigatório, ressalvado o acesso a peças relativas a diligências em curso sob sigilo, em consonância com a Súmula Vinculante 14 do STF.',
      baseLegal: 'art. 32, Lei 13.869/2019; Súmula Vinculante 14, STF',
      revisado: false,
    },
    {
      id: 'abuso-autoridade-d6',
      dificuldade: 'dificil',
      enunciado:
        'No mesmo contexto fático, o agente praticou conduta que se ajusta tanto a um crime de abuso de autoridade quanto à prevaricação do Código Penal. Como resolver, em regra, esse aparente conflito de normas?',
      alternativas: [
        { id: 'a', texto: 'Aplica-se sempre o concurso material entre os dois crimes.' },
        { id: 'b', texto: 'Resolve-se pelo princípio da especialidade, prevalecendo o tipo específico de abuso de autoridade sobre a figura genérica, conforme as elementares do caso.' },
        { id: 'c', texto: 'Aplica-se sempre o crime de pena mais grave, sem análise das elementares.' },
        { id: 'd', texto: 'A existência de dois tipos torna a conduta atípica.' },
      ],
      corretaId: 'b',
      explicacao:
        'O conflito aparente de normas resolve-se, em regra, pelo princípio da especialidade. Quando a conduta se amolda a tipo específico da Lei 13.869/2019, este prevalece sobre figuras genéricas do Código Penal, desde que presentes as elementares e a finalidade específica exigida pela lei especial.',
      baseLegal: 'art. 1º, Lei 13.869/2019; art. 12, CP',
      revisado: false,
    },
  ],
}
