import type { Lei } from '../types'

/**
 * Lei Maria da Penha (11.340/2006).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. 3 do tipo V/F. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: 'maria-da-penha',
  numero: '11.340/2006',
  nome: 'Lei Maria da Penha',
  slug: 'maria-da-penha',
  resumo:
    'Cria mecanismos para coibir a violência doméstica e familiar contra a mulher. Define formas de violência, medidas protetivas de urgência e regras processuais próprias, afastando, em regra, os institutos despenalizadores dos juizados especiais.',
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'maria-da-penha-f1',
      dificuldade: 'facil',
      enunciado:
        'Em uma audiência, a defesa sustenta que a Lei Maria da Penha não se aplicaria porque o agressor e a vítima não eram casados nem viviam em união estável. A vítima, porém, é irmã do acusado e ambos moram na mesma casa. A lei se aplica?',
      alternativas: [
        { id: 'a', texto: 'Não, pois exige relação conjugal ou afetiva entre as partes.' },
        {
          id: 'b',
          texto:
            'Sim, pois a violência doméstica e familiar abrange relações de parentesco no âmbito da unidade doméstica, independentemente de relação conjugal.',
        },
        { id: 'c', texto: 'Não, pois só protege esposas e companheiras.' },
        { id: 'd', texto: 'Sim, mas apenas se houver coabitação por mais de cinco anos.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei abrange a violência praticada no âmbito da unidade doméstica, da família ou em qualquer relação íntima de afeto. O vínculo de parentesco entre irmãos que convivem na mesma casa configura âmbito familiar, atraindo a proteção legal.',
      baseLegal: 'art. 5º, I e II, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-f2',
      dificuldade: 'facil',
      enunciado:
        'O delegado pergunta qual forma de violência prevista na lei corresponde a condutas como controlar o dinheiro da vítima, reter seus bens e impedir que ela trabalhe. Qual é a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'Violência física.' },
        { id: 'b', texto: 'Violência sexual.' },
        { id: 'c', texto: 'Violência patrimonial.' },
        { id: 'd', texto: 'Violência moral.' },
      ],
      corretaId: 'c',
      explicacao:
        'A violência patrimonial é definida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de objetos, instrumentos de trabalho, documentos pessoais, bens e recursos econômicos da mulher.',
      baseLegal: 'art. 7º, IV, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-f3',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: a violência doméstica e familiar contra a mulher de que trata a Lei Maria da Penha exige, em todos os casos, a coabitação entre o agressor e a vítima.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'A afirmação é falsa. A configuração de relação íntima de afeto independe de coabitação, conforme expressa ressalva do parágrafo único do art. 5º. A lei pode incidir, por exemplo, sobre ex-namorados que nunca moraram juntos.',
      baseLegal: 'art. 5º, III e parágrafo único, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-f4',
      dificuldade: 'facil',
      enunciado:
        'Após a vítima registrar a ocorrência, o juiz precisa decidir sobre afastar o agressor do lar e proibir que ele se aproxime dela. Que instrumento processual a lei oferece para isso de forma urgente?',
      alternativas: [
        { id: 'a', texto: 'Medidas protetivas de urgência.' },
        { id: 'b', texto: 'Transação penal.' },
        { id: 'c', texto: 'Suspensão condicional do processo.' },
        { id: 'd', texto: 'Termo circunstanciado de ocorrência.' },
      ],
      corretaId: 'a',
      explicacao:
        'A lei prevê medidas protetivas de urgência, que obrigam o agressor (como afastamento do lar e proibição de aproximação e contato) e que protegem a ofendida, podendo ser concedidas de imediato pelo juiz.',
      baseLegal: 'arts. 22 e 23, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-f5',
      dificuldade: 'facil',
      enunciado:
        'A defesa pede a aplicação de transação penal e suspensão condicional do processo a um caso de lesão corporal leve praticada contra a esposa no contexto doméstico. Qual o entendimento correto?',
      alternativas: [
        { id: 'a', texto: 'Cabem normalmente, por se tratar de crime de menor potencial ofensivo.' },
        {
          id: 'b',
          texto:
            'Não se aplicam os institutos da Lei 9.099/95 aos crimes praticados com violência doméstica e familiar contra a mulher.',
        },
        { id: 'c', texto: 'Cabem apenas a transação penal, mas não a suspensão do processo.' },
        { id: 'd', texto: 'Dependem exclusivamente da concordância do agressor.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 41 afasta a aplicação da Lei 9.099/95 (com seus institutos despenalizadores) aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena prevista.',
      baseLegal: 'art. 41, Lei 11.340/2006; Súmula 536, STJ',
      revisado: false,
    },
    {
      id: 'maria-da-penha-f6',
      dificuldade: 'facil',
      enunciado:
        'Em um caso de lesão corporal leve dolosa praticada contra a companheira no ambiente doméstico, a defesa alega que a ação penal dependeria de representação da vítima. Qual o entendimento consolidado?',
      alternativas: [
        { id: 'a', texto: 'A ação é privada, ajuizada pela própria vítima.' },
        {
          id: 'b',
          texto:
            'A ação penal é pública incondicionada, independentemente de representação da ofendida.',
        },
        { id: 'c', texto: 'A ação é pública condicionada à representação da vítima.' },
        { id: 'd', texto: 'A ação depende de autorização do Ministério Público estadual.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF (ADI 4.424) firmou que a ação penal nos crimes de lesão corporal, ainda que leve, praticados contra a mulher no âmbito doméstico é pública incondicionada, dispensando representação.',
      baseLegal: 'art. 88, Lei 9.099/95; STF, ADI 4.424; Súmula 542, STJ',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'maria-da-penha-m1',
      dificuldade: 'medio',
      enunciado:
        'O agressor descumpre dolosamente decisão judicial que lhe impôs medida protetiva de proibição de aproximação, voltando a procurar a vítima. Como essa conduta é tratada após a Lei 13.641/2018?',
      alternativas: [
        { id: 'a', texto: 'É mero indiferente penal, resolvido apenas no juízo cível.' },
        {
          id: 'b',
          texto:
            'Configura crime autônomo de descumprimento de medidas protetivas de urgência, com pena de detenção.',
        },
        { id: 'c', texto: 'Configura apenas crime de desobediência do Código Penal.' },
        { id: 'd', texto: 'Gera somente multa administrativa.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 13.641/2018 inseriu o art. 24-A, criando o crime autônomo de descumprimento de medidas protetivas de urgência, punido com detenção de 3 meses a 2 anos, afastando a controvérsia sobre o crime de desobediência.',
      baseLegal: 'art. 24-A, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-m2',
      dificuldade: 'medio',
      enunciado:
        'A vítima comparece à delegacia e manifesta que deseja renunciar à representação em um crime de ameaça (ação pública condicionada) praticado pelo marido. Como deve proceder o juiz?',
      alternativas: [
        { id: 'a', texto: 'Homologar a renúncia imediatamente no balcão da delegacia.' },
        {
          id: 'b',
          texto:
            'A renúncia só é admitida perante o juiz, em audiência especialmente designada para tal fim, antes do recebimento da denúncia e ouvido o Ministério Público.',
        },
        { id: 'c', texto: 'Indeferir, pois a representação nunca pode ser renunciada.' },
        { id: 'd', texto: 'Encaminhar o caso à transação penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 16 estabelece que a renúncia à representação só será admitida perante o juiz, em audiência especialmente designada, antes do recebimento da denúncia e ouvido o Ministério Público. Isso busca evitar pressão sobre a vítima.',
      baseLegal: 'art. 16, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: o juiz pode conceder medidas protetivas de urgência que obrigam o agressor independentemente da instauração de inquérito ou do oferecimento de denúncia, e mesmo sem requerimento do Ministério Público quando solicitadas pela ofendida.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A afirmação é verdadeira. As medidas protetivas têm natureza autônoma e cautelar e podem ser concedidas a requerimento da ofendida ou do Ministério Público, independentemente de tipificação penal, ajuizamento de ação ou instauração de inquérito.',
      baseLegal: 'arts. 19 e 22, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-m4',
      dificuldade: 'medio',
      enunciado:
        'Em um processo por violência doméstica, o juiz pretende aplicar isoladamente o pagamento de cesta básica como pena substitutiva ao agressor. Essa providência é admitida pela Lei Maria da Penha?',
      alternativas: [
        { id: 'a', texto: 'Sim, é a sanção preferencial nesses casos.' },
        {
          id: 'b',
          texto:
            'Não; é vedada a aplicação de penas de cesta básica ou de prestação pecuniária, bem como a substituição por multa isolada.',
        },
        { id: 'c', texto: 'Sim, desde que a vítima concorde expressamente.' },
        { id: 'd', texto: 'Sim, mas somente em caso de réu primário.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 17 veda a aplicação, nos casos de violência doméstica e familiar contra a mulher, de penas de cesta básica ou outras de prestação pecuniária, bem como a substituição de pena que implique o pagamento isolado de multa.',
      baseLegal: 'art. 17, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-m5',
      dificuldade: 'medio',
      enunciado:
        'A acusação imputa ao réu o crime de feminicídio por homicídio praticado contra a esposa em razão da condição de sexo feminino. Qual a correta classificação penal e localização do tipo?',
      alternativas: [
        { id: 'a', texto: 'Crime autônomo previsto na própria Lei Maria da Penha.' },
        {
          id: 'b',
          texto:
            'Crime de homicídio qualificado pelo feminicídio, previsto no Código Penal, e considerado hediondo.',
        },
        { id: 'c', texto: 'Lesão corporal seguida de morte, sem natureza hedionda.' },
        { id: 'd', texto: 'Contravenção penal de vias de fato qualificada.' },
      ],
      corretaId: 'b',
      explicacao:
        'O feminicídio foi inserido como qualificadora do homicídio no Código Penal (matar mulher por razões da condição de sexo feminino) e integra o rol dos crimes hediondos. A Lei Maria da Penha fornece o contexto, mas o tipo está no CP.',
      baseLegal: 'art. 121, § 2º, VI, CP; art. 1º, Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'maria-da-penha-m6',
      dificuldade: 'medio',
      enunciado:
        'A defesa argumenta que a competência para julgar o crime de violência doméstica seria do Juizado Especial Criminal. A comarca conta com Juizado de Violência Doméstica e Familiar contra a Mulher. Qual a competência adequada?',
      alternativas: [
        { id: 'a', texto: 'Juizado Especial Criminal (Lei 9.099/95).' },
        {
          id: 'b',
          texto:
            'Juizado de Violência Doméstica e Familiar contra a Mulher, com competência cível e criminal.',
        },
        { id: 'c', texto: 'Vara da Infância e Juventude.' },
        { id: 'd', texto: 'Justiça Federal.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei prevê a criação dos Juizados de Violência Doméstica e Familiar contra a Mulher, com competência cível e criminal para as causas decorrentes da prática de violência doméstica e familiar, afastando o Juizado Especial Criminal comum.',
      baseLegal: 'arts. 14 e 41, Lei 11.340/2006',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'maria-da-penha-d1',
      dificuldade: 'dificil',
      enunciado:
        'A defesa sustenta a inconstitucionalidade da Lei Maria da Penha por afronta à isonomia, ao tratar diferentemente homens e mulheres. Qual a posição firmada pelo STF?',
      alternativas: [
        { id: 'a', texto: 'A lei é inconstitucional por violar a igualdade formal.' },
        {
          id: 'b',
          texto:
            'A lei é constitucional, pois realiza a igualdade material e ação afirmativa de proteção à mulher em situação de vulnerabilidade.',
        },
        { id: 'c', texto: 'A lei só é constitucional se aplicada também a homens.' },
        { id: 'd', texto: 'A lei é inconstitucional por afastar os juizados especiais.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF (ADC 19 e ADI 4.424) reconheceu a constitucionalidade integral da lei, entendendo que o tratamento diferenciado concretiza a igualdade material e protege grupo historicamente vulnerável, em consonância com tratados internacionais.',
      baseLegal: 'art. 5º, I, CF; STF, ADC 19 e ADI 4.424',
      revisado: false,
    },
    {
      id: 'maria-da-penha-d2',
      dificuldade: 'dificil',
      enunciado:
        'O réu, condenado por crime no contexto de violência doméstica, alega que a Lei Maria da Penha não poderia incidir porque a vítima é mulher transexual. Como tem se posicionado a jurisprudência mais recente do STJ?',
      alternativas: [
        { id: 'a', texto: 'A lei jamais se aplica a mulheres transexuais.' },
        {
          id: 'b',
          texto:
            'A proteção da lei alcança mulheres transexuais vítimas de violência baseada no gênero, conforme entendimento do STJ.',
        },
        { id: 'c', texto: 'A aplicação depende exclusivamente de retificação no registro civil.' },
        { id: 'd', texto: 'A lei só protege mulheres maiores de idade.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STJ reconheceu que a Lei Maria da Penha protege mulheres transexuais vítimas de violência de gênero no âmbito doméstico, em interpretação que privilegia a identidade de gênero e a finalidade protetiva da norma.',
      baseLegal: 'art. 5º, parágrafo único, Lei 11.340/2006; STJ, REsp 1.977.124',
      revisado: false,
    },
    {
      id: 'maria-da-penha-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: descumprida a medida protetiva, é cabível a decretação da prisão preventiva do agressor mesmo em crime cuja pena máxima não ultrapasse quatro anos, para garantir a execução das medidas protetivas de urgência.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A afirmação é verdadeira. O CPP admite a prisão preventiva, ainda que o crime tenha pena máxima não superior a quatro anos, quando praticado com violência doméstica para garantir a execução das medidas protetivas de urgência, excepcionando a regra geral.',
      baseLegal: 'art. 313, III e parágrafo único, CPP; art. 20, Lei 11.340/2006',
      revisado: false,
    },
    {
      id: 'maria-da-penha-d4',
      dificuldade: 'dificil',
      enunciado:
        'Em sentença, o juiz fixou valor mínimo de reparação dos danos morais sofridos pela vítima de violência doméstica, sem pedido expresso quantificado e sem instrução específica sobre o valor. Qual a posição do STJ sobre esse ponto?',
      alternativas: [
        { id: 'a', texto: 'É vedado fixar qualquer indenização na esfera penal.' },
        {
          id: 'b',
          texto:
            'É admissível a fixação de valor mínimo a título de dano moral, bastando pedido expresso e independentemente de instrução probatória específica sobre o quantum, dado o dano in re ipsa.',
        },
        { id: 'c', texto: 'Exige perícia contábil obrigatória para apurar o valor.' },
        { id: 'd', texto: 'Só é possível em ação cível autônoma posterior.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STJ (Tema 983) firmou que, nos crimes de violência doméstica, é cabível a fixação de valor mínimo de reparação por dano moral, bastando pedido expresso da acusação ou da ofendida, sendo o dano presumido (in re ipsa), sem necessidade de instrução probatória específica sobre o valor.',
      baseLegal: 'art. 387, IV, CPP; STJ, Tema 983 (REsp 1.675.874)',
      revisado: false,
    },
    {
      id: 'maria-da-penha-d5',
      dificuldade: 'dificil',
      enunciado:
        'O agressor é processado por contravenção penal de vias de fato praticada contra a companheira. A defesa pede a aplicação dos institutos da Lei 9.099/95, alegando que o art. 41 só menciona crimes. Qual a tese mais consistente da acusação?',
      alternativas: [
        { id: 'a', texto: 'A defesa tem razão, pois contravenção não é crime e o art. 41 só cita crimes.' },
        {
          id: 'b',
          texto:
            'A vedação do art. 41 alcança também as contravenções penais praticadas com violência doméstica, segundo interpretação teleológica adotada pelos tribunais superiores.',
        },
        { id: 'c', texto: 'A contravenção deve ser arquivada por atipicidade.' },
        { id: 'd', texto: 'A competência passa ao Juizado Especial Cível.' },
      ],
      corretaId: 'b',
      explicacao:
        'Embora o art. 41 mencione crimes, a jurisprudência adota interpretação teleológica e estende a vedação dos institutos da Lei 9.099/95 às contravenções penais praticadas no contexto de violência doméstica, sob pena de esvaziar a proteção legal.',
      baseLegal: 'art. 41, Lei 11.340/2006; STJ, jurisprudência sobre vias de fato',
      revisado: false,
    },
    {
      id: 'maria-da-penha-d6',
      dificuldade: 'dificil',
      enunciado:
        'O juiz deferiu medidas protetivas em favor da vítima e, posteriormente, o Ministério Público pede a fixação de prazo de validade para essas medidas. Qual o entendimento adequado sobre a duração das protetivas?',
      alternativas: [
        { id: 'a', texto: 'As medidas protetivas têm prazo fixo de 90 dias improrrogáveis.' },
        {
          id: 'b',
          texto:
            'As medidas protetivas podem vigorar enquanto persistir a situação de risco, sendo possível sua manutenção, revisão ou substituição a qualquer tempo, não vinculadas necessariamente ao processo penal.',
        },
        { id: 'c', texto: 'Cessam automaticamente com o recebimento da denúncia.' },
        { id: 'd', texto: 'Só valem durante o inquérito policial.' },
      ],
      corretaId: 'b',
      explicacao:
        'As medidas protetivas têm natureza cautelar autônoma e vigoram enquanto subsistir a situação de risco à integridade da vítima. Podem ser mantidas, revistas ou substituídas a qualquer tempo, não se exaurindo necessariamente com o término do processo criminal.',
      baseLegal: 'arts. 19, § 3º, e 22, § 1º, Lei 11.340/2006',
      revisado: false,
    },
  ],
}
