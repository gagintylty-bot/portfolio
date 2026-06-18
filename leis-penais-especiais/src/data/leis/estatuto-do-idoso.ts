import type { Lei } from '../types'

/**
 * Estatuto do Idoso (crimes) (10.741/2003).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "estatuto-idoso",
  numero: "10.741/2003",
  nome: "Estatuto do Idoso (crimes)",
  slug: "estatuto-do-idoso",
  resumo:
    "O Estatuto da Pessoa Idosa prevê crimes voltados à proteção das pessoas com 60 anos ou mais, como abandono, exposição a perigo, apropriação de bens e discriminação, com procedimento e causas de aumento próprios.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'estatuto-idoso-f1',
      dificuldade: 'facil',
      enunciado:
        'A defesa precisa esclarecer, logo na primeira consulta, a partir de qual idade a pessoa é considerada idosa para fins de proteção do Estatuto. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'A partir de 50 anos.' },
        { id: 'b', texto: 'A partir de 60 anos.' },
        { id: 'c', texto: 'A partir de 65 anos.' },
        { id: 'd', texto: 'A partir de 70 anos.' },
      ],
      corretaId: 'b',
      explicacao:
        'O Estatuto destina-se a regular os direitos das pessoas com idade igual ou superior a 60 anos, que são consideradas idosas para fins de sua proteção, inclusive penal.',
      baseLegal: 'art. 1º, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-f2',
      dificuldade: 'facil',
      enunciado:
        'O filho deixa o pai idoso, dependente de cuidados, sozinho em casa de saúde sem prover suas necessidades básicas. Qual crime do Estatuto está em discussão?',
      alternativas: [
        { id: 'a', texto: 'Abandono de idoso em hospital, casa de saúde ou entidade de longa permanência.' },
        { id: 'b', texto: 'Furto.' },
        { id: 'c', texto: 'Estelionato.' },
        { id: 'd', texto: 'Fato atípico.' },
      ],
      corretaId: 'a',
      explicacao:
        'Abandonar o idoso em hospitais, casas de saúde, entidades de longa permanência ou não prover suas necessidades básicas quando obrigado por lei ou mandado é crime previsto no Estatuto da Pessoa Idosa.',
      baseLegal: 'art. 98, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-f3',
      dificuldade: 'facil',
      enunciado:
        'O cuidador apropria-se dos proventos de aposentadoria da idosa sob sua responsabilidade, dando-lhes destinação diversa da finalidade de seu sustento. Qual crime do Estatuto se configura?',
      alternativas: [
        { id: 'a', texto: 'Apropriação ou desvio de bens, proventos, pensão ou rendimentos do idoso.' },
        { id: 'b', texto: 'Receptação.' },
        { id: 'c', texto: 'Peculato.' },
        { id: 'd', texto: 'Dano qualificado.' },
      ],
      corretaId: 'a',
      explicacao:
        'Apropriar-se de ou desviar bens, proventos, pensão ou qualquer rendimento do idoso, dando-lhes aplicação diversa de sua finalidade, é crime expressamente tipificado no Estatuto da Pessoa Idosa.',
      baseLegal: 'art. 102, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-f4',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: o Estatuto da Pessoa Idosa prevê causa de aumento de pena para os crimes nele tipificados quando a vítima tiver idade igual ou superior a 70 anos.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O Estatuto determina o aumento da pena dos crimes nele previstos quando a vítima for maior de 70 anos, reconhecendo a maior vulnerabilidade nessa faixa etária.',
      baseLegal: 'art. 110, Lei 10.741/2003 (que insere o art. 121, § 7º e correlatos); art. 95 c/c agravantes do Estatuto',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-f5',
      dificuldade: 'facil',
      enunciado:
        'O atendente de uma loja humilha e despreza uma cliente idosa exclusivamente em razão da idade, recusando-se a atendê-la. Qual crime do Estatuto pode estar em jogo?',
      alternativas: [
        { id: 'a', texto: 'Discriminar pessoa idosa, impedindo ou dificultando seu acesso a operações ou meios em razão da idade.' },
        { id: 'b', texto: 'Crime de tortura.' },
        { id: 'c', texto: 'Crime de cárcere privado.' },
        { id: 'd', texto: 'Fato atípico.' },
      ],
      corretaId: 'a',
      explicacao:
        'Discriminar a pessoa idosa, impedindo ou dificultando seu acesso a operações bancárias, meios de transporte, ou desdenhando, humilhando ou desprezando o idoso em razão da idade, é crime do Estatuto.',
      baseLegal: 'art. 96, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-f6',
      dificuldade: 'facil',
      enunciado:
        'A defesa quer destacar a natureza da ação penal nos crimes do Estatuto da Pessoa Idosa. Qual a regra adotada?',
      alternativas: [
        { id: 'a', texto: 'Ação penal privada, dependente de queixa do idoso.' },
        { id: 'b', texto: 'Ação penal pública incondicionada.' },
        { id: 'c', texto: 'Ação penal pública condicionada à representação dos familiares.' },
        { id: 'd', texto: 'Não há ação penal, apenas medidas de proteção.' },
      ],
      corretaId: 'b',
      explicacao:
        'O Estatuto da Pessoa Idosa estabelece que os crimes nele definidos são de ação penal pública incondicionada, dispensando representação, dada a relevância da proteção conferida ao idoso.',
      baseLegal: 'art. 95, Lei 10.741/2003',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'estatuto-idoso-m1',
      dificuldade: 'medio',
      enunciado:
        'O réu deixou de prover, sem justa causa, os alimentos de seu genitor idoso, que dependia desse auxílio para subsistir. A defesa avalia a tipicidade penal no Estatuto. O que se discute?',
      alternativas: [
        { id: 'a', texto: 'Deixar de prover as necessidades básicas do idoso, quando obrigado, pode caracterizar crime de abandono material no Estatuto.' },
        { id: 'b', texto: 'A omissão alimentar nunca tem relevância penal.' },
        { id: 'c', texto: 'A conduta configura furto.' },
        { id: 'd', texto: 'A conduta é apenas ilícito tributário.' },
      ],
      corretaId: 'a',
      explicacao:
        'O Estatuto tipifica condutas de abandono e de negativa de prover, sem justa causa, as necessidades básicas do idoso por quem tem o dever legal de fazê-lo, protegendo o dever de cuidado e a subsistência da pessoa idosa.',
      baseLegal: 'art. 98 e art. 99, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-m2',
      dificuldade: 'medio',
      enunciado:
        'O cuidador expôs a idosa a condições degradantes e desumanas, sujeitando-a a perigo a sua integridade física e psíquica. Qual crime do Estatuto se discute e qual o efeito se resulta lesão grave?',
      alternativas: [
        { id: 'a', texto: 'Expor a perigo a integridade e a saúde do idoso, com pena majorada se resulta lesão corporal de natureza grave.' },
        { id: 'b', texto: 'Crime de injúria, sem qualquer agravamento.' },
        { id: 'c', texto: 'Crime de ameaça, com pena fixa.' },
        { id: 'd', texto: 'Fato atípico, por ausência de dolo de matar.' },
      ],
      corretaId: 'a',
      explicacao:
        'Expor a perigo a integridade e a saúde, física ou psíquica, do idoso, submetendo-o a condições desumanas ou degradantes, é crime do Estatuto, com causas de aumento quando do fato resulta lesão corporal grave ou morte.',
      baseLegal: 'art. 99, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: aos crimes previstos no Estatuto da Pessoa Idosa cuja pena máxima não ultrapasse quatro anos aplica-se, em regra, o procedimento da Lei dos Juizados Especiais Criminais.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O Estatuto determina a aplicação do procedimento da Lei 9.099/1995 aos crimes nele previstos cuja pena máxima privativa de liberdade não ultrapasse quatro anos, observadas as especificidades da proteção ao idoso.',
      baseLegal: 'art. 94, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-m4',
      dificuldade: 'medio',
      enunciado:
        'O médico de um plantão deixou de comunicar à autoridade competente caso de suspeita de maus-tratos contra idoso de que teve conhecimento no exercício da profissão. Qual a relevância penal dessa omissão no Estatuto?',
      alternativas: [
        { id: 'a', texto: 'O Estatuto tipifica a omissão do profissional de saúde que deixa de comunicar maus-tratos contra idoso à autoridade competente.' },
        { id: 'b', texto: 'A comunicação é facultativa e a omissão é irrelevante.' },
        { id: 'c', texto: 'A omissão configura crime de falso testemunho.' },
        { id: 'd', texto: 'A omissão configura prevaricação.' },
      ],
      corretaId: 'a',
      explicacao:
        'O Estatuto pune o profissional de saúde ou responsável por estabelecimento de atenção ao idoso que deixa de comunicar à autoridade competente os casos de crime ou de suspeita de maus-tratos de que tenha conhecimento.',
      baseLegal: 'art. 57, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-m5',
      dificuldade: 'medio',
      enunciado:
        'O cliente obrigou uma idosa a outorgar procuração que lhe permitiu controlar todos os bens dela, valendo-se da fragilidade da vítima. Qual conduta do Estatuto está em foco?',
      alternativas: [
        { id: 'a', texto: 'Coagir o idoso, de qualquer modo, a outorgar procuração para fins de administração de bens ou deles dispor livremente.' },
        { id: 'b', texto: 'Crime de extorsão mediante sequestro.' },
        { id: 'c', texto: 'Crime de moeda falsa.' },
        { id: 'd', texto: 'Fato atípico, por se tratar de relação civil.' },
      ],
      corretaId: 'a',
      explicacao:
        'O Estatuto tipifica a conduta de coagir, de qualquer modo, o idoso a outorgar procuração para fins de administração de bens ou deles dispor livremente, protegendo sua autonomia patrimonial e vontade.',
      baseLegal: 'art. 107, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-m6',
      dificuldade: 'medio',
      enunciado:
        'A acusação imputa ao réu reter o cartão magnético da aposentadoria de um idoso para garantir o pagamento de uma dívida. Como o Estatuto trata essa retenção?',
      alternativas: [
        { id: 'a', texto: 'Reter o cartão magnético de conta bancária do idoso, bem como qualquer documento, com o objetivo de assegurar recebimento de dívida, é crime do Estatuto.' },
        { id: 'b', texto: 'A retenção é exercício regular de direito do credor.' },
        { id: 'c', texto: 'A conduta configura apenas inadimplemento.' },
        { id: 'd', texto: 'A conduta é mero ilícito administrativo bancário.' },
      ],
      corretaId: 'a',
      explicacao:
        'O Estatuto pune quem retém o cartão magnético de conta bancária relativa a benefícios, proventos ou pensão do idoso, ou qualquer outro documento, com o objetivo de assegurar o recebimento ou o ressarcimento de dívida.',
      baseLegal: 'art. 104, Lei 10.741/2003',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'estatuto-idoso-d1',
      dificuldade: 'dificil',
      enunciado:
        'A vítima de um crime patrimonial tinha 68 anos. A defesa discute se incide a causa de aumento etária do Estatuto, prevista para vítima maior de 70 anos. Qual a leitura mais adequada?',
      alternativas: [
        { id: 'a', texto: 'O aumento incide sempre que a vítima for idosa, qualquer que seja a idade acima de 60 anos.' },
        { id: 'b', texto: 'A causa específica de aumento que exige idade superior a 70 anos não se aplica a quem tem 68 anos, podendo a condição de idoso repercutir por outras agravantes gerais.' },
        { id: 'c', texto: 'A vítima de 68 anos não é considerada idosa para nenhum fim.' },
        { id: 'd', texto: 'O aumento etário transforma o crime em hediondo.' },
      ],
      corretaId: 'b',
      explicacao:
        'Embora a pessoa de 60 anos já seja idosa, as causas de aumento que exigem idade superior a 70 anos não alcançam a vítima de 68. Ainda assim, a condição de idoso pode repercutir por agravantes gerais do Código Penal, observada a vedação ao bis in idem.',
      baseLegal: 'art. 1º, Lei 10.741/2003; art. 61, II, h, CP',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-d2',
      dificuldade: 'dificil',
      enunciado:
        'O réu praticou apropriação de bens da mãe idosa. A defesa pretende invocar a imunidade penal entre ascendentes e descendentes prevista no Código Penal. Qual a ressalva relevante?',
      alternativas: [
        { id: 'a', texto: 'A imunidade penal absoluta sempre se aplica entre parentes, sem exceção.' },
        { id: 'b', texto: 'As imunidades penais dos crimes patrimoniais não se aplicam quando a vítima é pessoa idosa, por expressa ressalva legal.' },
        { id: 'c', texto: 'A imunidade transforma o crime em contravenção.' },
        { id: 'd', texto: 'A imunidade depende de autorização judicial.' },
      ],
      corretaId: 'b',
      explicacao:
        'O Código Penal afasta a aplicação das imunidades penais dos crimes contra o patrimônio quando a vítima é pessoa com idade igual ou superior a 60 anos, de modo que a apropriação de bens da mãe idosa não é alcançada pela escusa absolutória.',
      baseLegal: 'art. 183, III, CP; art. 95, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: ainda que ao crime do Estatuto se aplique o procedimento dos Juizados Especiais Criminais, o Estatuto veda a aplicação dos institutos despenalizadores da Lei 9.099/1995 que importem na substituição da pena por cesta básica ou prestação pecuniária paga à própria vítima idosa.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O Estatuto, ao remeter aos Juizados, veda transformar a resposta penal em mera prestação de cesta básica ou pecuniária, preservando a finalidade protetiva e evitando a banalização da sanção em crimes praticados contra a pessoa idosa.',
      baseLegal: 'art. 94, Lei 10.741/2003; Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-d4',
      dificuldade: 'dificil',
      enunciado:
        'Na fase de instrução, percebe-se que o crime patrimonial contra o idoso foi cometido com violência e o resultado foi lesão grave. A defesa discute a competência diante da pena resultante. Qual o impacto processual?',
      alternativas: [
        { id: 'a', texto: 'A competência será sempre do Juizado Especial, independentemente da pena.' },
        { id: 'b', texto: 'Ultrapassada a pena máxima de quatro anos pela majoração, afasta-se o rito dos Juizados, atraindo o procedimento comum perante o juízo competente.' },
        { id: 'c', texto: 'A competência passa ao Tribunal do Júri.' },
        { id: 'd', texto: 'O processo deve ser arquivado.' },
      ],
      corretaId: 'b',
      explicacao:
        'O rito dos Juizados, previsto no Estatuto, alcança os crimes com pena máxima não superior a quatro anos. Se as majorantes elevam a pena além desse patamar, afasta-se o procedimento sumaríssimo, impondo-se o rito comum perante o juízo competente.',
      baseLegal: 'art. 94, Lei 10.741/2003; art. 61, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-d5',
      dificuldade: 'dificil',
      enunciado:
        'A defesa sustenta a atipicidade penal alegando que houve mera negociação patrimonial consentida pela idosa, plenamente capaz e informada, sem coação ou fraude. Qual o ponto decisivo dessa tese?',
      alternativas: [
        { id: 'a', texto: 'O consentimento válido e a capacidade plena da idosa, ausentes coação, fraude ou abuso, podem afastar a tipicidade dos crimes patrimoniais do Estatuto que pressupõem vício de vontade.' },
        { id: 'b', texto: 'O consentimento da idosa é sempre irrelevante.' },
        { id: 'c', texto: 'A capacidade da vítima agrava a pena.' },
        { id: 'd', texto: 'A negociação consentida configura o crime de extorsão.' },
      ],
      corretaId: 'a',
      explicacao:
        'Diversos crimes patrimoniais do Estatuto pressupõem coação, fraude ou abuso da vulnerabilidade. Demonstrado o consentimento válido de idosa plenamente capaz e informada, sem vício de vontade, pode-se afastar a tipicidade, cabendo análise concreta da prova.',
      baseLegal: 'arts. 102 e 107, Lei 10.741/2003',
      revisado: false,
    },
    {
      id: 'estatuto-idoso-d6',
      dificuldade: 'dificil',
      enunciado:
        'O réu responde, pelos mesmos fatos, por crime do Estatuto da Pessoa Idosa e, ainda, pela agravante genérica de crime contra maior de 60 anos prevista no Código Penal. Qual a objeção técnica pertinente?',
      alternativas: [
        { id: 'a', texto: 'A cumulação é obrigatória e sempre válida.' },
        { id: 'b', texto: 'Aplicar a agravante etária genérica do CP quando a idade da vítima já é elementar ou majorante do crime configura bis in idem, vedado em direito penal.' },
        { id: 'c', texto: 'A agravante etária do CP prevalece e afasta o Estatuto.' },
        { id: 'd', texto: 'A dupla valoração reduz a pena pela metade.' },
      ],
      corretaId: 'b',
      explicacao:
        'Quando a condição etária da vítima já integra a elementar ou a causa de aumento do tipo aplicado, não se pode também incidir a agravante genérica do art. 61, II, h, do CP pelos mesmos fatos, sob pena de dupla valoração e violação à vedação ao bis in idem.',
      baseLegal: 'art. 61, II, h, CP; Lei 10.741/2003',
      revisado: false,
    },
  ],
}
