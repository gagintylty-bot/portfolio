import type { Lei } from '../types'

/**
 * Crimes Licitatórios (14.133/2021).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "licitatorios",
  numero: "14.133/2021",
  nome: "Crimes Licitatórios",
  slug: "crimes-licitatorios",
  resumo:
    "A Nova Lei de Licitações trouxe os crimes em licitações e contratos para o Código Penal (arts. 337-E a 337-P), tipificando condutas como fraude, frustração do caráter competitivo e contratação direta indevida.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'licitatorios-f1',
      dificuldade: 'facil',
      enunciado:
        'A denúncia narra que o agente público dispensou licitação fora das hipóteses legais para favorecer determinado fornecedor. Onde, atualmente, estão localizados os crimes em licitações e contratos administrativos?',
      alternativas: [
        { id: 'a', texto: 'Na própria Lei 8.666/1993, ainda integralmente vigente quanto aos crimes.' },
        {
          id: 'b',
          texto:
            'No Código Penal, nos arts. 337-E a 337-P, inseridos pela Lei 14.133/2021.',
        },
        { id: 'c', texto: 'Na Lei de Improbidade Administrativa (8.429/1992).' },
        { id: 'd', texto: 'No Código de Defesa do Consumidor.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 14.133/2021 revogou os tipos penais da Lei 8.666/1993 e inseriu os crimes em licitações e contratos no Código Penal, nos arts. 337-E a 337-P, no capítulo dos crimes em licitações e contratos administrativos.',
      baseLegal: 'arts. 337-E a 337-P, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-f2',
      dificuldade: 'facil',
      enunciado:
        'O agente, com intenção de obter vantagem indevida, frustrou o caráter competitivo do certame mediante ajuste com outro licitante. Qual o tipo penal correspondente?',
      alternativas: [
        { id: 'a', texto: 'Contratação direta ilegal (art. 337-E do CP).' },
        { id: 'b', texto: 'Frustração do caráter competitivo de licitação (art. 337-F do CP).' },
        { id: 'c', texto: 'Patrocínio de contratação indevida (art. 337-G do CP).' },
        { id: 'd', texto: 'Perturbação de processo licitatório (art. 337-I do CP).' },
      ],
      corretaId: 'b',
      explicacao:
        'Frustrar ou fraudar, com o intuito de obter para si ou para outrem vantagem decorrente da adjudicação do objeto da licitação, o caráter competitivo do processo licitatório, é o tipo do art. 337-F do CP.',
      baseLegal: 'art. 337-F, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-f3',
      dificuldade: 'facil',
      enunciado:
        'O administrador admitiu à licitação empresa que sabia estar inidônea para contratar com a Administração. A defesa pergunta qual tipo do CP descreve essa conduta. Qual a resposta?',
      alternativas: [
        { id: 'a', texto: 'Admissão à licitação de empresa ou profissional declarado inidôneo (art. 337-M do CP).' },
        { id: 'b', texto: 'Frustração do caráter competitivo (art. 337-F do CP).' },
        { id: 'c', texto: 'Modificação ou pagamento irregular em contrato administrativo (art. 337-H do CP).' },
        { id: 'd', texto: 'Afastamento de licitante (art. 337-K do CP).' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 337-M do CP tipifica admitir à licitação empresa ou profissional declarado inidôneo, bem como celebrar contrato com empresa ou profissional nessa condição.',
      baseLegal: 'art. 337-M, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-f4',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A Lei 14.133/2021 revogou os crimes em licitações antes previstos na Lei 8.666/1993 e passou a tipificá-los no Código Penal.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Verdadeiro. A Lei 14.133/2021 revogou os tipos penais da antiga Lei 8.666/1993 e os deslocou para o Código Penal (arts. 337-E a 337-P), unificando o tratamento penal da matéria.',
      baseLegal: 'arts. 337-E a 337-P, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-f5',
      dificuldade: 'facil',
      enunciado:
        'O agente devassou o sigilo de proposta apresentada em procedimento licitatório, proporcionando a terceiro vantagem. Qual o tipo penal aplicável?',
      alternativas: [
        { id: 'a', texto: 'Contratação direta ilegal (art. 337-E do CP).' },
        { id: 'b', texto: 'Violação de sigilo em licitação (art. 337-J do CP).' },
        { id: 'c', texto: 'Perturbação de processo licitatório (art. 337-I do CP).' },
        { id: 'd', texto: 'Fraude em licitação ou contrato (art. 337-L do CP).' },
      ],
      corretaId: 'b',
      explicacao:
        'Devassar o sigilo de proposta apresentada em processo licitatório, ou proporcionar a terceiro o ensejo de devassá-lo, configura o crime de violação de sigilo em licitação do art. 337-J do CP.',
      baseLegal: 'art. 337-J, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-f6',
      dificuldade: 'facil',
      enunciado:
        'O servidor, mediante violência, afastou licitante por meio de fraude para impedir sua participação no certame. Qual figura típica corresponde a afastar licitante?',
      alternativas: [
        { id: 'a', texto: 'Afastamento de licitante (art. 337-K do CP).' },
        { id: 'b', texto: 'Contratação direta ilegal (art. 337-E do CP).' },
        { id: 'c', texto: 'Admissão de empresa inidônea (art. 337-M do CP).' },
        { id: 'd', texto: 'Modificação irregular de contrato (art. 337-H do CP).' },
      ],
      corretaId: 'a',
      explicacao:
        'Afastar ou tentar afastar licitante, por meio de violência, grave ameaça, fraude ou oferecimento de vantagem de qualquer tipo, é o crime de afastamento de licitante, previsto no art. 337-K do CP.',
      baseLegal: 'art. 337-K, CP (Lei 14.133/2021)',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'licitatorios-m1',
      dificuldade: 'medio',
      enunciado:
        'O prefeito dispensou licitação fora das hipóteses legais e, com isso, celebrou contrato superfaturado. A defesa sustenta ausência de dolo específico. Qual elemento o art. 337-E do CP exige para a contratação direta ilegal?',
      alternativas: [
        { id: 'a', texto: 'Basta a mera irregularidade formal, independentemente de finalidade.' },
        {
          id: 'b',
          texto:
            'Exige-se que o agente admita, possibilite ou dê causa à dispensa ou inexigibilidade fora das hipóteses legais, com o dolo de fraudar a licitação.',
        },
        { id: 'c', texto: 'Exige-se resultado naturalístico de prejuízo efetivo ao erário em qualquer caso.' },
        { id: 'd', texto: 'Exige-se apenas culpa, sem qualquer dolo.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 337-E pune admitir, possibilitar ou dar causa à contratação direta fora das hipóteses legais (dispensa ou inexigibilidade indevidas). A doutrina e a jurisprudência exigem o elemento subjetivo de fraudar o procedimento, não bastando irregularidade meramente formal.',
      baseLegal: 'art. 337-E, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-m2',
      dificuldade: 'medio',
      enunciado:
        'A acusação imputa ao agente o crime de patrocínio de contratação indevida. Qual conduta caracteriza esse tipo do art. 337-G do CP?',
      alternativas: [
        { id: 'a', texto: 'Devassar o sigilo de proposta.' },
        {
          id: 'b',
          texto:
            'Patrocinar, direta ou indiretamente, interesse privado perante a Administração, dando causa à instauração de licitação ou à celebração de contrato cuja invalidação vier a ser decretada.',
        },
        { id: 'c', texto: 'Afastar licitante mediante violência.' },
        { id: 'd', texto: 'Admitir empresa inidônea ao certame.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 337-G tipifica patrocinar, direta ou indiretamente, interesse privado perante a Administração, dando causa à instauração de licitação ou à celebração de contrato cuja invalidação vier a ser decretada pelo Poder Judiciário.',
      baseLegal: 'art. 337-G, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Os crimes em licitações e contratos administrativos previstos nos arts. 337-E a 337-P do Código Penal são, em regra, de ação penal pública incondicionada.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Verdadeiro. Os crimes em licitações e contratos administrativos são de ação penal pública incondicionada, cabendo ao Ministério Público a titularidade da persecução, independentemente de representação.',
      baseLegal: 'art. 100, CP; arts. 337-E a 337-P, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-m4',
      dificuldade: 'medio',
      enunciado:
        'O contratado apresentou documentação falsa para se habilitar no certame, obtendo a adjudicação. A acusação invoca o art. 337-L do CP. Qual conduta esse tipo descreve?',
      alternativas: [
        { id: 'a', texto: 'Perturbar ou fraudar a realização de ato do procedimento licitatório.' },
        {
          id: 'b',
          texto:
            'Fraudar, em prejuízo da Administração, licitação ou contrato dela decorrente, mediante entrega de mercadoria diversa, alteração de qualidade ou meio fraudulento.',
        },
        { id: 'c', texto: 'Devassar o sigilo de proposta.' },
        { id: 'd', texto: 'Patrocinar interesse privado perante a Administração.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 337-L tipifica fraudar, em prejuízo da Administração, licitação ou contrato dela decorrente, por meios como elevação arbitrária de preços, entrega de mercadoria falsificada ou diversa, alteração de qualidade ou tornar a execução mais onerosa.',
      baseLegal: 'art. 337-L, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-m5',
      dificuldade: 'medio',
      enunciado:
        'Discute-se a pena cominada ao crime de contratação direta ilegal (art. 337-E do CP). Qual a sanção prevista?',
      alternativas: [
        { id: 'a', texto: 'Detenção de 15 dias a 3 meses, ou multa.' },
        { id: 'b', texto: 'Reclusão de 4 a 8 anos e multa.' },
        { id: 'c', texto: 'Reclusão de 12 a 30 anos.' },
        { id: 'd', texto: 'Apenas multa, sem privação de liberdade.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 337-E comina pena de reclusão de 4 a 8 anos e multa para a contratação direta ilegal, refletindo a elevação do patamar punitivo trazida pela Lei 14.133/2021 em relação à legislação revogada.',
      baseLegal: 'art. 337-E, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-m6',
      dificuldade: 'medio',
      enunciado:
        'O agente impediu, perturbou ou fraudou a realização de ato do procedimento licitatório. Qual tipo penal corresponde à perturbação de processo licitatório?',
      alternativas: [
        { id: 'a', texto: 'Art. 337-I do CP.' },
        { id: 'b', texto: 'Art. 337-J do CP.' },
        { id: 'c', texto: 'Art. 337-M do CP.' },
        { id: 'd', texto: 'Art. 337-P do CP.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 337-I do CP tipifica impedir, perturbar ou fraudar a realização de qualquer ato de procedimento licitatório, com pena de detenção e multa.',
      baseLegal: 'art. 337-I, CP (Lei 14.133/2021)',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'licitatorios-d1',
      dificuldade: 'dificil',
      enunciado:
        'O fato (dispensa indevida de licitação) ocorreu sob a vigência da Lei 8.666/1993, mas o julgamento se dá após a Lei 14.133/2021, que cominou pena mais grave. Qual regra a defesa deve invocar quanto à lei aplicável?',
      alternativas: [
        { id: 'a', texto: 'Aplica-se sempre a lei nova, mais grave, por ser posterior.' },
        {
          id: 'b',
          texto:
            'Aplica-se a lei vigente ao tempo do fato se mais benéfica, pois a lei penal mais gravosa não retroage (irretroatividade da lex gravior).',
        },
        { id: 'c', texto: 'O fato se torna atípico por ter sido revogada a lei anterior.' },
        { id: 'd', texto: 'A pena deve ser a média entre as duas leis.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei penal não retroage para prejudicar o réu. Sendo a pena da Lei 8.666/1993 mais branda para fato pretérito, ela prevalece (ultratividade da lei mais benéfica); a Lei 14.133/2021, se mais gravosa, aplica-se apenas a fatos posteriores à sua vigência.',
      baseLegal: 'art. 5º, XL, CF; art. 2º, CP; arts. 337-E a 337-P, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-d2',
      dificuldade: 'dificil',
      enunciado:
        'O agente foi denunciado por fraude em licitação (art. 337-L do CP) e, pelos mesmos fatos, por peculato. A defesa invoca a consunção. Qual a análise técnica adequada?',
      alternativas: [
        { id: 'a', texto: 'A cumulação é sempre obrigatória, sem espaço para consunção.' },
        {
          id: 'b',
          texto:
            'Deve-se analisar, no caso concreto, se os crimes tutelam bens jurídicos e momentos distintos ou se um é meio para o outro, podendo haver consunção ou concurso conforme a prova.',
        },
        { id: 'c', texto: 'O crime licitatório sempre absorve o peculato.' },
        { id: 'd', texto: 'O peculato sempre absorve o crime licitatório.' },
      ],
      corretaId: 'b',
      explicacao:
        'A relação entre o crime licitatório e o patrimonial (como peculato) depende da análise concreta dos bens jurídicos tutelados e da relação meio-fim. Pode haver consunção, quando um é etapa do outro, ou concurso de crimes, quando há lesões autônomas, vedado o bis in idem.',
      baseLegal: 'art. 337-L, CP (Lei 14.133/2021); art. 312, CP',
      revisado: false,
    },
    {
      id: 'licitatorios-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'No crime de patrocínio de contratação indevida (art. 337-G do CP), a tipificação depende de que a invalidação da licitação ou do contrato venha a ser decretada pelo Poder Judiciário.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Verdadeiro. O art. 337-G exige que a instauração de licitação ou a celebração de contrato, decorrentes do patrocínio de interesse privado, tenham sua invalidação decretada pelo Poder Judiciário, sendo esse um elemento normativo do tipo a ser explorado pela defesa.',
      baseLegal: 'art. 337-G, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-d4',
      dificuldade: 'dificil',
      enunciado:
        'A acusação imputa o crime do art. 337-H do CP (modificação ou pagamento irregular em contrato administrativo). A defesa busca afastar o tipo. Qual conduta caracteriza essa figura?',
      alternativas: [
        { id: 'a', texto: 'Devassar o sigilo de proposta apresentada no certame.' },
        {
          id: 'b',
          texto:
            'Admitir, possibilitar ou dar causa a qualquer modificação ou vantagem, inclusive prorrogação contratual, em favor do contratado, durante a execução, sem autorização em lei, no edital ou no contrato, ou pagar fatura com preterição da ordem cronológica.',
        },
        { id: 'c', texto: 'Afastar licitante por grave ameaça.' },
        { id: 'd', texto: 'Frustrar o caráter competitivo do certame.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 337-H tipifica admitir, possibilitar ou dar causa a modificação ou vantagem indevida, inclusive prorrogação, em favor do contratado durante a execução, sem autorização legal, no edital ou no contrato, bem como pagar fatura com preterição da ordem cronológica de sua exigibilidade.',
      baseLegal: 'art. 337-H, CP (Lei 14.133/2021)',
      revisado: false,
    },
    {
      id: 'licitatorios-d5',
      dificuldade: 'dificil',
      enunciado:
        'O empresário particular, sem ser servidor, participou do conluio que fraudou o caráter competitivo da licitação ao lado de agente público. A defesa alega que o crime do art. 337-F do CP é próprio do funcionário. Qual a análise correta?',
      alternativas: [
        { id: 'a', texto: 'O particular jamais responde por crimes licitatórios.' },
        {
          id: 'b',
          texto:
            'O particular pode responder em concurso de pessoas; a condição de funcionário público, quando elementar, comunica-se ao coautor ou partícipe que dela tenha conhecimento.',
        },
        { id: 'c', texto: 'O particular responde sempre como autor único, excluindo o servidor.' },
        { id: 'd', texto: 'A participação do particular extingue a punibilidade do servidor.' },
      ],
      corretaId: 'b',
      explicacao:
        'O particular pode responder em concurso de pessoas pelos crimes licitatórios. Pela regra do art. 30 do CP, as circunstâncias e condições de caráter pessoal, quando elementares do crime, comunicam-se ao coautor ou partícipe que delas tenha conhecimento. Além disso, o art. 337-F não restringe o sujeito ativo apenas a funcionário.',
      baseLegal: 'art. 337-F, CP (Lei 14.133/2021); art. 30, CP',
      revisado: false,
    },
    {
      id: 'licitatorios-d6',
      dificuldade: 'dificil',
      enunciado:
        'Na dosimetria de crime licitatório, a acusação pede a aplicação da causa de aumento e do critério de cálculo da multa previstos na parte final do capítulo (art. 337-P do CP). Qual a peculiaridade da pena de multa nesses crimes?',
      alternativas: [
        { id: 'a', texto: 'A multa é fixada em salários mínimos, sem relação com o contrato.' },
        {
          id: 'b',
          texto:
            'A pena de multa segue o sistema do Código Penal e seu valor, conforme o capítulo, considera a vantagem indevidamente obtida ou pretendida pelo agente, não podendo ser inferior à vantagem auferida.',
        },
        { id: 'c', texto: 'Não há previsão de multa para crimes licitatórios.' },
        { id: 'd', texto: 'A multa é sempre convertida em prestação de serviços.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 337-P estabelece que a pena de multa cominada aos crimes do capítulo segue a sistemática do Código Penal e deve ser calculada de modo a guardar relação com a vantagem indevida pretendida ou obtida pelo agente, conferindo efetividade à reprovação patrimonial da conduta.',
      baseLegal: 'art. 337-P, CP (Lei 14.133/2021); arts. 49 e 60, CP',
      revisado: false,
    },
  ],
}
