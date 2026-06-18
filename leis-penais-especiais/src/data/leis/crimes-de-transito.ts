import type { Lei } from '../types'

/**
 * RASCUNHO EDUCACIONAL — Crimes de Trânsito (CTB) (9.503/1997).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ Precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "ctb",
  numero: "9.503/1997",
  nome: "Crimes de Trânsito (CTB)",
  slug: "crimes-de-transito",
  resumo:
    "O Código de Trânsito Brasileiro tipifica crimes como homicídio e lesão culposos na direção, embriaguez ao volante e racha. Prevê penalidades específicas, como a suspensão do direito de dirigir, e causas de aumento próprias.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'ctb-f1',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente, dirigindo de forma imprudente, atropelou e matou um pedestre, sem intenção de matar. Qual o crime de trânsito, em regra, imputável a essa conduta?',
      alternativas: [
        { id: 'a', texto: 'Homicídio doloso, do Código Penal.' },
        { id: 'b', texto: 'Homicídio culposo na direção de veículo automotor, do CTB.' },
        { id: 'c', texto: 'Lesão corporal culposa.' },
        { id: 'd', texto: 'Fato atípico, por ausência de intenção.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 302 do CTB tipifica o homicídio culposo na direção de veículo automotor, com pena de detenção de 2 a 4 anos e suspensão ou proibição de se obter a permissão ou a habilitação para dirigir.',
      baseLegal: 'art. 302, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-f2',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir veículo automotor é uma penalidade prevista de forma específica para diversos crimes do Código de Trânsito Brasileiro.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O CTB prevê, como penalidade própria de vários crimes de trânsito, a suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir veículo automotor, aplicada cumulativamente com as demais penas, conforme os arts. 292 e seguintes.',
      baseLegal: 'arts. 292 e 293, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-f3',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente foi parado em blitz e o etilômetro apontou concentração de álcool acima do limite legal enquanto conduzia o veículo. Qual o crime de trânsito em discussão?',
      alternativas: [
        { id: 'a', texto: 'Embriaguez ao volante (conduzir veículo com capacidade psicomotora alterada por álcool).' },
        { id: 'b', texto: 'Racha, do art. 308 do CTB.' },
        { id: 'c', texto: 'Direção sem habilitação, apenas.' },
        { id: 'd', texto: 'Mera infração administrativa, sem crime.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 306 do CTB tipifica conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa que determine dependência, com pena de detenção de 6 meses a 3 anos, multa e suspensão do direito de dirigir.',
      baseLegal: 'art. 306, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-f4',
      dificuldade: 'facil',
      enunciado:
        'Após causar um acidente com vítima, o condutor fugiu do local para não ser responsabilizado. Como o CTB trata, de forma autônoma, a fuga do condutor do local do acidente?',
      alternativas: [
        { id: 'a', texto: 'É circunstância irrelevante para o direito penal.' },
        { id: 'b', texto: 'Constitui crime autônomo de afastar-se o condutor do local do acidente para fugir à responsabilidade penal ou civil.' },
        { id: 'c', texto: 'É apenas agravante genérica do Código Penal.' },
        { id: 'd', texto: 'Configura sempre homicídio doloso.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 305 do CTB tipifica afastar-se o condutor do veículo do local do acidente, para fugir à responsabilidade penal ou civil que lhe possa ser atribuída, com pena de detenção de 6 meses a 1 ano ou multa.',
      baseLegal: 'art. 305, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-f5',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente participou, em via pública, de uma corrida não autorizada (o chamado racha), gerando risco à incolumidade de terceiros, mas sem causar vítimas. Como o CTB trata essa conduta?',
      alternativas: [
        { id: 'a', texto: 'É conduta atípica enquanto não houver vítima com lesão.' },
        { id: 'b', texto: 'Configura crime, pois o art. 308 pune a participação em disputa não autorizada que gere situação de risco, independentemente de haver vítima.' },
        { id: 'c', texto: 'É mera infração administrativa de trânsito.' },
        { id: 'd', texto: 'É sempre homicídio doloso, mesmo sem vítima.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 308 do CTB pune a participação em corrida ou disputa não autorizada quando gera situação de risco à incolumidade pública ou privada, independentemente de haver vítima; a ocorrência de lesão grave ou morte configura formas qualificadas com penas maiores.',
      baseLegal: 'art. 308, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-f6',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente conduzia veículo sem nunca ter tido habilitação e, nessa condição, gerou perigo de dano a terceiros. Qual o crime do CTB em discussão?',
      alternativas: [
        { id: 'a', texto: 'Dirigir veículo automotor sem permissão ou habilitação, gerando perigo de dano.' },
        { id: 'b', texto: 'Homicídio culposo, ainda que sem vítima.' },
        { id: 'c', texto: 'Embriaguez ao volante.' },
        { id: 'd', texto: 'Fato atípico, por ser mera ausência de documento.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 309 do CTB tipifica dirigir veículo automotor, em via pública, sem a devida permissão para dirigir ou habilitação ou, ainda, com a permissão ou habilitação cassada ou suspensa, gerando perigo de dano, com pena de detenção de 6 meses a 1 ano ou multa.',
      baseLegal: 'art. 309, Lei 9.503/1997',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'ctb-m1',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente, em homicídio culposo na direção, deixou de prestar socorro à vítima podendo fazê-lo, sem risco pessoal. Qual a consequência na dosimetria?',
      alternativas: [
        { id: 'a', texto: 'Nenhuma, pois o socorro é mera recomendação ética.' },
        { id: 'b', texto: 'Incide causa de aumento de pena prevista para o homicídio culposo na direção quando o agente deixa de prestar socorro à vítima.' },
        { id: 'c', texto: 'A conduta é desclassificada para lesão corporal.' },
        { id: 'd', texto: 'O crime passa a ser doloso automaticamente.' },
      ],
      corretaId: 'b',
      explicacao:
        'O § 1º do art. 302 do CTB prevê causa de aumento de pena (de 1/3 à metade) quando o agente, entre outras hipóteses, deixa de prestar socorro, quando possível fazê-lo sem risco pessoal, à vítima do acidente.',
      baseLegal: 'art. 302, § 1º, III, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-m2',
      dificuldade: 'medio',
      enunciado:
        'No homicídio culposo na direção, a acusação requer aumento de pena por o condutor não possuir habilitação. Esse fato repercute na pena?',
      alternativas: [
        { id: 'a', texto: 'Não, a falta de habilitação é irrelevante.' },
        { id: 'b', texto: 'Sim, a ausência de permissão ou habilitação para dirigir é causa de aumento de pena no homicídio culposo na direção.' },
        { id: 'c', texto: 'Sim, mas apenas como atenuante.' },
        { id: 'd', texto: 'Apenas se houver embriaguez concomitante.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 302, § 1º, I, do CTB prevê aumento de pena quando o agente não possuir permissão para dirigir ou carteira de habilitação, refletindo a maior reprovabilidade da conduta de quem dirige sem estar habilitado.',
      baseLegal: 'art. 302, § 1º, I, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'A prova do estado de embriaguez ao volante pode ser feita por exame de sangue, etilômetro, exame clínico, perícia, vídeo, prova testemunhal ou outros meios de prova em direito admitidos.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O § 2º do art. 306 do CTB admite que a verificação da alteração da capacidade psicomotora se dê por exame de sangue, etilômetro, exame clínico, perícia, vídeo, prova testemunhal ou outros meios de prova em direito admitidos, observado o direito à contraprova.',
      baseLegal: 'art. 306, § 2º, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-m4',
      dificuldade: 'medio',
      enunciado:
        'O Ministério Público sustenta que houve lesão corporal culposa na direção com aumento por o agente estar conduzindo na faixa de pedestres. Qual a melhor leitura técnica?',
      alternativas: [
        { id: 'a', texto: 'A lesão corporal culposa na direção é crime autônomo no CTB, com causas de aumento próprias semelhantes às do homicídio culposo.' },
        { id: 'b', texto: 'A lesão corporal culposa na direção não existe no CTB.' },
        { id: 'c', texto: 'Toda lesão corporal na direção é dolosa.' },
        { id: 'd', texto: 'A faixa de pedestres é irrelevante em qualquer caso.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 303 do CTB tipifica a lesão corporal culposa na direção de veículo automotor, com penas próprias e causas de aumento equivalentes às do art. 302, como dirigir sobre faixa de pedestres ou sem habilitação.',
      baseLegal: 'art. 303, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-m5',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente foi denunciado por lesão corporal culposa leve no trânsito. A defesa pretende a composição de danos e a transação penal. Qual instituto, em regra, viabiliza isso nesse crime?',
      alternativas: [
        { id: 'a', texto: 'A aplicação dos institutos despenalizadores da Lei dos Juizados Especiais, por ser infração de menor potencial ofensivo na modalidade leve.' },
        { id: 'b', texto: 'A extinção automática da punibilidade pelo simples pagamento da multa de trânsito.' },
        { id: 'c', texto: 'A conversão obrigatória em pena privativa de liberdade.' },
        { id: 'd', texto: 'A impossibilidade de qualquer benefício, por ser crime de trânsito.' },
      ],
      corretaId: 'a',
      explicacao:
        'A lesão corporal culposa leve no trânsito, por ter pena máxima não superior a 2 anos, é infração de menor potencial ofensivo, comportando, em regra, os institutos despenalizadores da Lei 9.099/1995, como composição civil, transação penal e representação.',
      baseLegal: 'art. 303, Lei 9.503/1997; arts. 74, 76 e 88, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'ctb-m6',
      dificuldade: 'medio',
      enunciado:
        'Em ação por embriaguez ao volante, a defesa argumenta que não houve direção anormal nem risco concreto, apenas a constatação de álcool acima do limite. Como o crime do art. 306 é classificado quanto ao resultado?',
      alternativas: [
        { id: 'a', texto: 'Crime de dano, que exige resultado lesivo concreto.' },
        { id: 'b', texto: 'Crime de perigo abstrato, que se consuma com a conduta de dirigir com a capacidade psicomotora alterada, dispensando perigo concreto.' },
        { id: 'c', texto: 'Crime culposo, que depende de imprudência demonstrada.' },
        { id: 'd', texto: 'Contravenção penal, sem necessidade de dolo.' },
      ],
      corretaId: 'b',
      explicacao:
        'A jurisprudência consolidou que a embriaguez ao volante do art. 306 é crime de perigo abstrato, consumando-se com a conduta de conduzir o veículo com a capacidade psicomotora alterada, independentemente da demonstração de perigo concreto ou de condução anormal.',
      baseLegal: 'art. 306, Lei 9.503/1997',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'ctb-d1',
      dificuldade: 'dificil',
      enunciado:
        'Seu cliente, embriagado e em alta velocidade, avançou sinal e matou pedestres. A acusação pede desclassificação para homicídio doloso por dolo eventual, afastando o CTB. Qual a tese defensiva mais consistente sobre o elemento subjetivo?',
      alternativas: [
        { id: 'a', texto: 'A embriaguez ao volante já caracteriza, por si só e automaticamente, o dolo eventual.' },
        { id: 'b', texto: 'A distinção entre culpa consciente e dolo eventual depende de análise concreta da assunção do risco, não bastando a embriaguez para presumir dolo.' },
        { id: 'c', texto: 'O homicídio na direção é sempre culposo, sendo impossível dolo eventual no trânsito.' },
        { id: 'd', texto: 'O dolo eventual exige confissão expressa do condutor.' },
      ],
      corretaId: 'b',
      explicacao:
        'A qualificação como dolo eventual exige demonstração concreta de que o agente assumiu o risco de produzir o resultado, sendo distinta da culpa consciente. A jurisprudência rejeita presumir dolo eventual automaticamente da embriaguez, exigindo elementos concretos para afastar o CTB e atrair o homicídio doloso.',
      baseLegal: 'art. 302, Lei 9.503/1997; art. 18, I e II, CP',
      revisado: false,
    },
    {
      id: 'ctb-d2',
      dificuldade: 'dificil',
      enunciado:
        'Seu cliente recusou-se a soprar o etilômetro e a fazer exame de sangue. A acusação sustenta que a recusa, isoladamente, prova o crime do art. 306. Qual a melhor análise sobre o princípio aplicável?',
      alternativas: [
        { id: 'a', texto: 'A recusa, por si só, comprova o crime e configura confissão.' },
        { id: 'b', texto: 'Ninguém é obrigado a produzir prova contra si; a recusa não basta para a condenação, que depende de outros meios de prova da alteração da capacidade psicomotora.' },
        { id: 'c', texto: 'A recusa converte a conduta em homicídio culposo.' },
        { id: 'd', texto: 'A recusa autoriza a prisão preventiva automática.' },
      ],
      corretaId: 'b',
      explicacao:
        'O princípio do nemo tenetur se detegere assegura que ninguém é obrigado a produzir prova contra si mesmo. A recusa ao etilômetro ou ao exame de sangue não pode, por si só, fundamentar a condenação pelo art. 306, que demanda outros meios de prova admitidos da alteração da capacidade psicomotora.',
      baseLegal: 'art. 306, § 2º, Lei 9.503/1997; art. 5º, LXIII, CF',
      revisado: false,
    },
    {
      id: 'ctb-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'No crime de fuga do local do acidente (art. 305 do CTB), há entendimento do STF reconhecendo a constitucionalidade do tipo, por não obrigar o condutor a confessar, mas apenas a permanecer no local e se identificar.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O STF, no julgamento do RE 971.959 (Tema 907), reconheceu a constitucionalidade do art. 305 do CTB, entendendo que o tipo não viola o direito de não autoincriminação, pois não exige confissão de culpa, mas apenas a permanência no local e a identificação do condutor.',
      baseLegal: 'art. 305, Lei 9.503/1997; STF, RE 971.959 (Tema 907)',
      revisado: false,
    },
    {
      id: 'ctb-d4',
      dificuldade: 'dificil',
      enunciado:
        'Seu cliente foi condenado por embriaguez ao volante (art. 306) e, no mesmo contexto, por lesão corporal culposa na direção (art. 303), pelos mesmos fatos. A defesa alega bis in idem. Como tratar a relação entre os crimes?',
      alternativas: [
        { id: 'a', texto: 'Há sempre concurso material obrigatório entre os dois crimes.' },
        { id: 'b', texto: 'A embriaguez pode funcionar como causa de aumento da lesão corporal culposa, devendo-se evitar dupla valoração do mesmo fato como crime autônomo e como majorante.' },
        { id: 'c', texto: 'A lesão corporal culposa absorve sempre a embriaguez sem qualquer repercussão na pena.' },
        { id: 'd', texto: 'Os dois crimes são idênticos e fungíveis.' },
      ],
      corretaId: 'b',
      explicacao:
        'Quando a embriaguez já é considerada como causa de aumento da lesão corporal culposa na direção, a sua imputação simultânea como crime autônomo do art. 306 pode caracterizar dupla valoração do mesmo fato, atraindo a vedação ao bis in idem, a ser examinada conforme a estrutura típica e a jurisprudência.',
      baseLegal: 'arts. 303, § 1º, e 306, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-d5',
      dificuldade: 'dificil',
      enunciado:
        'No racha (art. 308) do qual resultou a morte de um terceiro, a acusação discute o elemento subjetivo da figura qualificada pelo resultado morte. Qual a melhor leitura sobre a natureza desse resultado?',
      alternativas: [
        { id: 'a', texto: 'O resultado morte no racha qualificado é sempre doloso, atraindo o Tribunal do Júri.' },
        { id: 'b', texto: 'As formas qualificadas do art. 308 pelo resultado lesão grave ou morte são, em regra, preterdolosas ou culposas quanto ao resultado, mantendo a competência do juízo singular.' },
        { id: 'c', texto: 'O resultado morte é irrelevante para a pena.' },
        { id: 'd', texto: 'O racha qualificado é contravenção penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'As figuras qualificadas do art. 308, §§ 1º e 2º, do CTB, com resultado lesão corporal grave ou morte, têm o resultado, em regra, atribuído a título culposo ou preterdoloso, o que afasta o dolo de matar e, por consequência, a competência do Tribunal do Júri, mantendo o juízo singular.',
      baseLegal: 'art. 308, §§ 1º e 2º, Lei 9.503/1997',
      revisado: false,
    },
    {
      id: 'ctb-d6',
      dificuldade: 'dificil',
      enunciado:
        'Na sentença por homicídio culposo na direção, o juiz impôs a suspensão do direito de dirigir e, na execução, surgiu dúvida sobre o termo inicial do prazo. Qual a regra aplicável a essa penalidade?',
      alternativas: [
        { id: 'a', texto: 'A penalidade começa a contar da data do fato.' },
        { id: 'b', texto: 'A penalidade de suspensão ou proibição de obter habilitação tem início a partir do trânsito em julgado da sentença condenatória, com regramento próprio no CTB.' },
        { id: 'c', texto: 'A penalidade é meramente administrativa e não depende de sentença.' },
        { id: 'd', texto: 'A penalidade só pode ser aplicada se houver reincidência.' },
      ],
      corretaId: 'b',
      explicacao:
        'A suspensão ou proibição de obter a permissão ou habilitação para dirigir é penalidade autônoma do CTB, com início a partir do trânsito em julgado da sentença condenatória, conforme o regramento dos arts. 293 e 296, comunicando-se ao órgão de trânsito para execução.',
      baseLegal: 'arts. 293 e 296, Lei 9.503/1997',
      revisado: false,
    },
  ],
}
