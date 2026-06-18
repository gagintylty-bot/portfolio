import type { Lei } from '../types'

/**
 * Contravenções Penais (DL 3.688/1941).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "contravencoes",
  numero: "DL 3.688/1941",
  nome: "Contravenções Penais",
  slug: "contravencoes-penais",
  resumo:
    "A Lei das Contravenções Penais tipifica infrações de menor gravidade, como vias de fato, perturbação do sossego e porte de instrumento. Em regra, são de menor potencial ofensivo e seguem rito próprio.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'contravencoes-f1',
      dificuldade: 'facil',
      enunciado:
        'Durante uma briga, seu cliente empurra e dá um tapa no rosto de outra pessoa, sem causar qualquer lesão corporal. Como essa conduta tende a ser classificada?',
      alternativas: [
        { id: 'a', texto: 'Lesão corporal grave.' },
        { id: 'b', texto: 'Vias de fato, contravenção penal.' },
        { id: 'c', texto: 'Tentativa de homicídio.' },
        { id: 'd', texto: 'Fato atípico.' },
      ],
      corretaId: 'b',
      explicacao:
        'A agressão física que não resulta em lesão corporal configura a contravenção de vias de fato, prevista na Lei das Contravenções Penais, com pena de prisão simples ou multa.',
      baseLegal: 'art. 21, DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-f2',
      dificuldade: 'facil',
      enunciado:
        'A defesa precisa esclarecer ao cliente qual é a espécie de pena privativa de liberdade cominada às contravenções penais. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'Reclusão.' },
        { id: 'b', texto: 'Detenção.' },
        { id: 'c', texto: 'Prisão simples.' },
        { id: 'd', texto: 'Prisão perpétua.' },
      ],
      corretaId: 'c',
      explicacao:
        'A Lei das Contravenções Penais comina a pena de prisão simples, distinta da reclusão e da detenção previstas para os crimes, devendo ser cumprida sem rigor penitenciário, em regime semiaberto ou aberto.',
      baseLegal: 'art. 6º, DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-f3',
      dificuldade: 'facil',
      enunciado:
        'Um vizinho promove festa com som altíssimo durante a madrugada, perturbando o sossego alheio. Em qual dispositivo o fato se enquadra como contravenção?',
      alternativas: [
        { id: 'a', texto: 'Perturbação do trabalho ou do sossego alheios.' },
        { id: 'b', texto: 'Dano qualificado.' },
        { id: 'c', texto: 'Desacato.' },
        { id: 'd', texto: 'Importunação ofensiva ao pudor.' },
      ],
      corretaId: 'a',
      explicacao:
        'Provocar ruído excessivo que perturba o trabalho ou o sossego alheios configura a contravenção de perturbação do trabalho ou do sossego, punida com prisão simples ou multa.',
      baseLegal: 'art. 42, DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-f4',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: as contravenções penais, em regra, são consideradas infrações de menor potencial ofensivo e seguem o rito sumaríssimo dos Juizados Especiais Criminais.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'As contravenções penais, por sua menor gravidade e penas reduzidas, enquadram-se no conceito de infração de menor potencial ofensivo, processando-se, em regra, perante os Juizados Especiais Criminais, com rito sumaríssimo.',
      baseLegal: 'art. 61, Lei 9.099/1995; DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-f5',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente foi flagrado portando, sem licença da autoridade, uma soqueira metálica guardada no bolso. Qual contravenção se discute nesse caso?',
      alternativas: [
        { id: 'a', texto: 'Porte de arma de fogo do Estatuto do Desarmamento.' },
        { id: 'b', texto: 'Porte de instrumento usualmente empregado na prática de crimes contra o patrimônio.' },
        { id: 'c', texto: 'Receptação.' },
        { id: 'd', texto: 'Fato atípico.' },
      ],
      corretaId: 'b',
      explicacao:
        'Trazer consigo, sem licença, instrumento usualmente empregado para a prática de crimes contra o patrimônio, como a soqueira, configura contravenção penal, distinta do porte de arma de fogo, que é crime do Estatuto do Desarmamento.',
      baseLegal: 'art. 19, DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-f6',
      dificuldade: 'facil',
      enunciado:
        'A defesa quer fixar a regra geral de territorialidade das contravenções. Onde, em regra, se aplica a lei brasileira de contravenções?',
      alternativas: [
        { id: 'a', texto: 'Apenas a contravenções praticadas no exterior.' },
        { id: 'b', texto: 'Somente à contravenção praticada no território nacional, não se punindo a praticada no estrangeiro.' },
        { id: 'c', texto: 'A qualquer contravenção, no Brasil ou no exterior, sem distinção.' },
        { id: 'd', texto: 'Apenas a contravenções praticadas em águas internacionais.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei das Contravenções Penais adota a territorialidade estrita: aplica-se à contravenção praticada no território nacional, não se punindo, em regra, a contravenção cometida no estrangeiro.',
      baseLegal: 'art. 2º, DL 3.688/1941',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'contravencoes-m1',
      dificuldade: 'medio',
      enunciado:
        'O promotor sustenta a punição da tentativa de uma contravenção de perturbação do sossego. A defesa contesta. O que diz a Lei das Contravenções Penais sobre a tentativa?',
      alternativas: [
        { id: 'a', texto: 'A tentativa é sempre punível como na forma consumada.' },
        { id: 'b', texto: 'A tentativa de contravenção não é punível.' },
        { id: 'c', texto: 'A tentativa é punível apenas com multa.' },
        { id: 'd', texto: 'A tentativa é punível com aumento de pena.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei das Contravenções Penais determina expressamente que não é punível a tentativa de contravenção, ao contrário do que ocorre, em regra, nos crimes.',
      baseLegal: 'art. 4º, DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-m2',
      dificuldade: 'medio',
      enunciado:
        'Diante de uma contravenção penal cuja iniciativa da ação se discute, qual a regra da Lei das Contravenções Penais quanto à ação penal?',
      alternativas: [
        { id: 'a', texto: 'A ação penal é sempre privada, dependente de queixa.' },
        { id: 'b', texto: 'A ação penal é, em regra, pública incondicionada, procedendo-se de ofício.' },
        { id: 'c', texto: 'A ação penal depende de requisição do Ministro da Justiça.' },
        { id: 'd', texto: 'Não há ação penal em contravenções.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei das Contravenções Penais estabelece que a ação penal é pública, procedendo-se de ofício, ou seja, em regra é pública incondicionada, dispensando representação ou queixa.',
      baseLegal: 'art. 17, DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: a contravenção de vias de fato resta absorvida quando, da mesma agressão, resulta lesão corporal, respondendo o agente apenas pelo crime de lesão corporal.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Pelo princípio da consunção, quando da agressão resulta lesão corporal, as vias de fato são absorvidas pelo crime de lesão corporal, respondendo o agente apenas por este, que é a conduta mais grave.',
      baseLegal: 'art. 21, DL 3.688/1941; art. 129, CP',
      revisado: false,
    },
    {
      id: 'contravencoes-m4',
      dificuldade: 'medio',
      enunciado:
        'A contravenção do antigo art. 47 (exercer profissão sem habilitação) é invocada na denúncia. Sob o enfoque do princípio da intervenção mínima, qual ponto a defesa pode levantar quanto a algumas contravenções?',
      alternativas: [
        { id: 'a', texto: 'Todas as contravenções foram revogadas em bloco.' },
        { id: 'b', texto: 'Diversas contravenções vêm sendo questionadas ou tendo sua aplicação relativizada à luz dos princípios da intervenção mínima e da proporcionalidade.' },
        { id: 'c', texto: 'As contravenções têm pena de reclusão, o que afasta a intervenção mínima.' },
        { id: 'd', texto: 'A intervenção mínima não se aplica ao Direito Penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'Várias contravenções, editadas em 1941, têm sua aplicação discutida à luz dos princípios da intervenção mínima, da proporcionalidade e da fragmentariedade, sendo importante avaliar a subsistência e a adequação constitucional de cada tipo.',
      baseLegal: 'DL 3.688/1941; princípio da intervenção mínima',
      revisado: false,
    },
    {
      id: 'contravencoes-m5',
      dificuldade: 'medio',
      enunciado:
        'No caso de uma contravenção de menor potencial ofensivo, sem antecedentes desfavoráveis do autor, qual instituto despenalizador da Lei 9.099/1995 pode ser oferecido logo na fase preliminar?',
      alternativas: [
        { id: 'a', texto: 'A transação penal.' },
        { id: 'b', texto: 'A delação premiada.' },
        { id: 'c', texto: 'O livramento condicional.' },
        { id: 'd', texto: 'O indulto.' },
      ],
      corretaId: 'a',
      explicacao:
        'Nas infrações de menor potencial ofensivo, como as contravenções, é cabível a transação penal, proposta pelo Ministério Público na fase preliminar, com aplicação imediata de pena restritiva de direitos ou multa, sem reconhecimento de culpa.',
      baseLegal: 'art. 76, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'contravencoes-m6',
      dificuldade: 'medio',
      enunciado:
        'A acusação imputa contravenção a um agente que se declara inimputável por doença mental à época do fato. Como a Lei das Contravenções Penais trata as regras de aplicação subsidiária?',
      alternativas: [
        { id: 'a', texto: 'A lei é totalmente autônoma e veda qualquer aplicação do Código Penal.' },
        { id: 'b', texto: 'Aplicam-se as regras gerais do Código Penal às contravenções, sempre que a lei contravencional não dispuser de modo diverso.' },
        { id: 'c', texto: 'Aplica-se apenas o Código de Processo Penal, nunca o Código Penal.' },
        { id: 'd', texto: 'As contravenções não admitem excludentes de culpabilidade.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei das Contravenções Penais determina a aplicação subsidiária das regras gerais do Código Penal às contravenções, sempre que a lei contravencional não disponha de forma diversa, abrangendo institutos como a inimputabilidade.',
      baseLegal: 'art. 1º, DL 3.688/1941; art. 26, CP',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'contravencoes-d1',
      dificuldade: 'dificil',
      enunciado:
        'Discute-se a constitucionalidade da contravenção de mendicância. Qual a situação atual desse tipo no ordenamento brasileiro?',
      alternativas: [
        { id: 'a', texto: 'A mendicância continua plenamente vigente como contravenção.' },
        { id: 'b', texto: 'A contravenção de mendicância foi revogada expressamente, deixando de constituir infração penal.' },
        { id: 'c', texto: 'A mendicância foi transformada em crime de reclusão.' },
        { id: 'd', texto: 'A mendicância passou a integrar a Lei de Drogas.' },
      ],
      corretaId: 'b',
      explicacao:
        'A contravenção de mendicância foi revogada por legislação posterior, deixando de constituir infração penal, em consonância com a dignidade da pessoa humana e a vedação ao direito penal do autor.',
      baseLegal: 'art. 60, DL 3.688/1941 (revogado pela Lei 11.983/2009)',
      revisado: false,
    },
    {
      id: 'contravencoes-d2',
      dificuldade: 'dificil',
      enunciado:
        'A defesa precisa sustentar a competência da Justiça Comum Estadual para julgar uma contravenção penal supostamente conexa a crime de competência federal. Qual a orientação consolidada?',
      alternativas: [
        { id: 'a', texto: 'A Justiça Federal julga contravenções penais em qualquer caso de conexão.' },
        { id: 'b', texto: 'A Justiça Federal não julga contravenções penais, mantendo-se a competência da Justiça Estadual, conforme entendimento sumulado.' },
        { id: 'c', texto: 'A competência é sempre do Tribunal do Júri.' },
        { id: 'd', texto: 'Contravenções penais são julgadas pela Justiça Militar.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Súmula 38 do STJ estabelece que compete à Justiça Estadual Comum, na vigência da Constituição de 1988, o processo por contravenção penal, ainda que praticada em detrimento de bens, serviços ou interesse da União ou de suas entidades.',
      baseLegal: 'Súmula 38, STJ; art. 109, IV, CF',
      revisado: false,
    },
    {
      id: 'contravencoes-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: por força do princípio da especialidade, a antiga contravenção de dirigir veículo sem habilitação foi, em regra, deslocada para o Código de Trânsito Brasileiro, que exige a geração de perigo de dano para configurar o crime correspondente.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O Código de Trânsito Brasileiro passou a tratar a direção sem habilitação como crime, exigindo a geração de perigo de dano. Pelo princípio da especialidade, afastou-se a aplicação da antiga contravenção correspondente, exigindo-se o resultado de perigo concreto.',
      baseLegal: 'art. 309, Lei 9.503/1997; Súmula 720, STF',
      revisado: false,
    },
    {
      id: 'contravencoes-d4',
      dificuldade: 'dificil',
      enunciado:
        'Em uma execução, o juízo aplica regime fechado para o cumprimento da prisão simples de uma contravenção. A defesa se insurge. Qual o erro técnico apontado?',
      alternativas: [
        { id: 'a', texto: 'Nenhum, a prisão simples admite regime fechado.' },
        { id: 'b', texto: 'A prisão simples deve ser cumprida sem rigor penitenciário, em regime semiaberto ou aberto, jamais em regime fechado.' },
        { id: 'c', texto: 'A prisão simples só pode ser cumprida em regime fechado.' },
        { id: 'd', texto: 'A prisão simples não admite cumprimento, apenas multa.' },
      ],
      corretaId: 'b',
      explicacao:
        'A pena de prisão simples deve ser cumprida sem rigor penitenciário, em estabelecimento adequado, nos regimes semiaberto ou aberto, sendo vedado o cumprimento em regime fechado, dada a natureza menos grave da contravenção.',
      baseLegal: 'art. 6º, DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-d5',
      dificuldade: 'dificil',
      enunciado:
        'O réu, reincidente específico em contravenções, teve a pena de multa convertida e majorada. A defesa avalia a aplicação das regras de reincidência da própria lei. Qual o tratamento previsto?',
      alternativas: [
        { id: 'a', texto: 'A reincidência é irrelevante nas contravenções.' },
        { id: 'b', texto: 'A Lei das Contravenções Penais disciplina a reincidência, que ocorre quando o agente pratica contravenção depois de condenação definitiva por crime ou contravenção anterior, refletindo na pena e em benefícios.' },
        { id: 'c', texto: 'A reincidência só existe entre crimes, nunca envolvendo contravenções.' },
        { id: 'd', texto: 'A reincidência converte a contravenção em crime hediondo.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei das Contravenções Penais prevê regras próprias de reincidência, que se configura quando o agente comete a contravenção após sentença condenatória irrecorrível por motivo de crime ou de contravenção, com reflexos na pena e na concessão de benefícios.',
      baseLegal: 'art. 7º, DL 3.688/1941',
      revisado: false,
    },
    {
      id: 'contravencoes-d6',
      dificuldade: 'dificil',
      enunciado:
        'No julgamento de uma contravenção em que se discute o exaurimento do prazo prescricional, qual sistemática de prescrição se aplica, considerando a natureza da pena de prisão simples?',
      alternativas: [
        { id: 'a', texto: 'As contravenções são imprescritíveis.' },
        { id: 'b', texto: 'Aplicam-se os prazos prescricionais do Código Penal, calculados com base no máximo da pena de prisão simples cominada, pela aplicação subsidiária das regras gerais.' },
        { id: 'c', texto: 'A prescrição das contravenções é sempre de vinte anos.' },
        { id: 'd', texto: 'A prescrição depende exclusivamente da vontade da vítima.' },
      ],
      corretaId: 'b',
      explicacao:
        'Diante da aplicação subsidiária das regras gerais do Código Penal, a prescrição das contravenções segue os prazos do art. 109 do CP, calculados conforme o máximo da pena de prisão simples cominada, observadas as causas interruptivas e suspensivas.',
      baseLegal: 'art. 1º, DL 3.688/1941; art. 109, CP',
      revisado: false,
    },
  ],
}
