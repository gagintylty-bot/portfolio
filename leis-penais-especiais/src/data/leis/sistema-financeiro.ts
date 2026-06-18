import type { Lei } from '../types'

/**
 * Crimes contra o Sistema Financeiro (7.492/1986).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "sistema-financeiro",
  numero: "7.492/1986",
  nome: "Crimes contra o Sistema Financeiro",
  slug: "sistema-financeiro",
  resumo:
    "Define os crimes contra o Sistema Financeiro Nacional (crimes do colarinho branco), como gestão fraudulenta e temerária, evasão de divisas e operação de instituição financeira sem autorização.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'sistema-financeiro-f1',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente, administrador de um banco, é acusado de conduzir a instituição com sucessivas fraudes nas operações. Qual o crime central da Lei 7.492/1986 nesse cenário?',
      alternativas: [
        { id: 'a', texto: 'Estelionato comum.' },
        { id: 'b', texto: 'Gestão fraudulenta de instituição financeira.' },
        { id: 'c', texto: 'Furto qualificado.' },
        { id: 'd', texto: 'Apropriação indébita simples.' },
      ],
      corretaId: 'b',
      explicacao:
        'Gerir de forma fraudulenta instituição financeira configura o crime de gestão fraudulenta, uma das figuras mais graves da Lei 7.492/1986, punida com reclusão, dada a lesão à higidez do Sistema Financeiro Nacional.',
      baseLegal: 'art. 4º, caput, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-f2',
      dificuldade: 'facil',
      enunciado:
        'O cliente operava uma suposta corretora de câmbio sem qualquer autorização do Banco Central. Em qual dispositivo a conduta se enquadra?',
      alternativas: [
        { id: 'a', texto: 'Funcionamento de instituição financeira sem a devida autorização.' },
        { id: 'b', texto: 'Exercício arbitrário das próprias razões.' },
        { id: 'c', texto: 'Falsidade ideológica.' },
        { id: 'd', texto: 'Receptação qualificada.' },
      ],
      corretaId: 'a',
      explicacao:
        'Fazer operar, sem a devida autorização ou com autorização obtida mediante declaração falsa, instituição financeira é crime previsto na Lei 7.492/1986, voltado a proteger a regularidade e a fiscalização do sistema.',
      baseLegal: 'art. 16, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-f3',
      dificuldade: 'facil',
      enunciado:
        'O réu remeteu, à margem das regras cambiais, vultosa quantia ao exterior, mantendo recursos não declarados fora do país. Qual crime se discute?',
      alternativas: [
        { id: 'a', texto: 'Sonegação de contribuição previdenciária.' },
        { id: 'b', texto: 'Evasão de divisas.' },
        { id: 'c', texto: 'Contrabando.' },
        { id: 'd', texto: 'Descaminho.' },
      ],
      corretaId: 'b',
      explicacao:
        'Promover, sem autorização legal, a saída de moeda ou divisa para o exterior, ou nele manter depósitos não declarados à repartição federal competente, caracteriza o crime de evasão de divisas da Lei 7.492/1986.',
      baseLegal: 'art. 22, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-f4',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: os crimes contra o Sistema Financeiro Nacional definidos na Lei 7.492/1986 são, em regra, processados e julgados perante a Justiça Federal.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A própria Lei 7.492/1986 estabelece a competência da Justiça Federal para processar e julgar os crimes contra o Sistema Financeiro Nacional, dada a natureza do bem jurídico tutelado e o interesse da União.',
      baseLegal: 'art. 26, Lei 7.492/1986; art. 109, VI, CF',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-f5',
      dificuldade: 'facil',
      enunciado:
        'A defesa quer destacar a quem cabe, como regra, a iniciativa da ação penal nos crimes da Lei 7.492/1986. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'À vítima, mediante queixa-crime.' },
        { id: 'b', texto: 'Ao Ministério Público Federal, por se tratar de ação penal pública.' },
        { id: 'c', texto: 'Ao Banco Central, com exclusividade.' },
        { id: 'd', texto: 'Não há ação penal, apenas sanção administrativa.' },
      ],
      corretaId: 'b',
      explicacao:
        'A ação penal nos crimes contra o Sistema Financeiro Nacional é pública incondicionada, de iniciativa do Ministério Público Federal, perante a Justiça Federal.',
      baseLegal: 'art. 26, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-f6',
      dificuldade: 'facil',
      enunciado:
        'O cliente, diretor de uma financeira, divulgou informação falsa sobre a instituição para atrair investidores. Qual conduta da lei está em jogo?',
      alternativas: [
        { id: 'a', texto: 'Divulgar informação falsa ou prejudicialmente incompleta sobre instituição financeira.' },
        { id: 'b', texto: 'Crime de desacato.' },
        { id: 'c', texto: 'Crime de dano.' },
        { id: 'd', texto: 'Crime de constrangimento ilegal.' },
      ],
      corretaId: 'a',
      explicacao:
        'Divulgar informação falsa ou prejudicialmente incompleta sobre instituição financeira é crime expressamente previsto na Lei 7.492/1986, por afetar a confiança e a transparência do mercado.',
      baseLegal: 'art. 3º, Lei 7.492/1986',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'sistema-financeiro-m1',
      dificuldade: 'medio',
      enunciado:
        'A denúncia narra que o administrador, embora sem fraude, conduziu a instituição assumindo riscos excessivos e imprudentes. Como distinguir essa conduta da gestão fraudulenta?',
      alternativas: [
        { id: 'a', texto: 'Trata-se de gestão temerária, fundada na assunção de riscos excessivos, ao passo que a fraudulenta exige ardil ou engano.' },
        { id: 'b', texto: 'Não há distinção entre as figuras.' },
        { id: 'c', texto: 'A gestão temerária é mais grave que a fraudulenta.' },
        { id: 'd', texto: 'A gestão temerária é mero ilícito administrativo.' },
      ],
      corretaId: 'a',
      explicacao:
        'A gestão temerária caracteriza-se pela assunção de riscos excessivos e imprudentes na condução da instituição, sem o emprego de fraude. A gestão fraudulenta, por sua vez, pressupõe ardil, engano ou artifício, sendo punida com pena mais severa.',
      baseLegal: 'art. 4º, caput e parágrafo único, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-m2',
      dificuldade: 'medio',
      enunciado:
        'A defesa precisa enquadrar quem é considerado equiparado a instituição financeira para fins penais. Como a Lei 7.492/1986 trata o tema?',
      alternativas: [
        { id: 'a', texto: 'Somente bancos comerciais são instituições financeiras.' },
        { id: 'b', texto: 'A lei equipara à instituição financeira a pessoa jurídica que capte, intermedie ou aplique recursos de terceiros, e até a pessoa física que exerça tais atividades.' },
        { id: 'c', texto: 'Apenas o Banco Central é instituição financeira.' },
        { id: 'd', texto: 'Cooperativas jamais se equiparam a instituições financeiras.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 7.492/1986 traz conceito amplo, considerando instituição financeira a pessoa jurídica de direito público ou privado que tenha como atividade principal ou acessória a captação, intermediação ou aplicação de recursos de terceiros, equiparando inclusive a pessoa física que exerça tais atividades ainda que de forma eventual.',
      baseLegal: 'art. 1º, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: o crime de gestão fraudulenta de instituição financeira é considerado, pela jurisprudência majoritária, um crime habitual próprio, no qual diversos atos fraudulentos integram uma única gestão, configurando crime único.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A jurisprudência majoritária trata a gestão fraudulenta como crime habitual ou de ação múltipla, no qual a reiteração de atos fraudulentos na condução da instituição configura um único crime de gestão, e não vários crimes autônomos.',
      baseLegal: 'art. 4º, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-m4',
      dificuldade: 'medio',
      enunciado:
        'O réu, controlador de financeira, deixou de manter recursos no exterior dentro dos limites legais e omitiu informações ao Banco Central. A defesa avalia a colaboração. A lei prevê redução de pena por colaboração espontânea?',
      alternativas: [
        { id: 'a', texto: 'Não há qualquer previsão de redução por colaboração.' },
        { id: 'b', texto: 'Sim, a lei prevê redução de pena ao coautor ou partícipe que, por confissão espontânea, revelar à autoridade a trama delituosa.' },
        { id: 'c', texto: 'A colaboração extingue automaticamente a punibilidade.' },
        { id: 'd', texto: 'A colaboração só beneficia quem não é réu.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 7.492/1986 prevê que, nos crimes praticados em quadrilha ou coautoria, o coautor ou partícipe que, por confissão espontânea, revelar à autoridade a trama delituosa terá a pena reduzida de um a dois terços, em modalidade de colaboração.',
      baseLegal: 'art. 25, § 2º, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-m5',
      dificuldade: 'medio',
      enunciado:
        'A acusação imputa ao gestor o desvio de aplicação de recursos provenientes de financiamento concedido por instituição financeira oficial. Qual conduta típica está em discussão?',
      alternativas: [
        { id: 'a', texto: 'Aplicar em finalidade diversa da prevista recursos de financiamento de instituição financeira oficial.' },
        { id: 'b', texto: 'Mera inadimplência civil sem relevância penal.' },
        { id: 'c', texto: 'Crime de bigamia.' },
        { id: 'd', texto: 'Crime de dano simples.' },
      ],
      corretaId: 'a',
      explicacao:
        'Aplicar, em finalidade diversa da prevista em lei ou contrato, recursos provenientes de financiamento concedido por instituição financeira oficial ou por ela repassados é crime da Lei 7.492/1986, protegendo a correta destinação do crédito público.',
      baseLegal: 'art. 20, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-m6',
      dificuldade: 'medio',
      enunciado:
        'A defesa discute a possibilidade de fiança e a competência funcional. Quem pode determinar a prisão preventiva e medidas cautelares nesses crimes durante a apuração?',
      alternativas: [
        { id: 'a', texto: 'O Banco Central, por ato administrativo.' },
        { id: 'b', texto: 'O juízo federal competente, mediante representação ou requerimento, observados os requisitos legais.' },
        { id: 'c', texto: 'A Comissão de Valores Mobiliários, com exclusividade.' },
        { id: 'd', texto: 'A própria instituição financeira lesada.' },
      ],
      corretaId: 'b',
      explicacao:
        'Como os crimes da Lei 7.492/1986 são de competência da Justiça Federal, cabe ao juízo federal competente, e não a órgãos administrativos, decretar prisão preventiva e medidas cautelares, observados os requisitos do Código de Processo Penal.',
      baseLegal: 'art. 26, Lei 7.492/1986; arts. 312 e 319, CPP',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'sistema-financeiro-d1',
      dificuldade: 'dificil',
      enunciado:
        'O administrador é denunciado simultaneamente por gestão fraudulenta e por diversos atos fraudulentos isolados praticados ao longo da mesma gestão. Qual a tese defensiva mais consistente?',
      alternativas: [
        { id: 'a', texto: 'Cada ato fraudulento deve gerar um crime autônomo em concurso material.' },
        { id: 'b', texto: 'Sendo a gestão fraudulenta crime habitual, os atos fraudulentos da mesma gestão são por ela absorvidos, configurando crime único, e não concurso de crimes.' },
        { id: 'c', texto: 'A gestão fraudulenta é absorvida por cada ato isolado.' },
        { id: 'd', texto: 'A pluralidade de atos torna o fato atípico.' },
      ],
      corretaId: 'b',
      explicacao:
        'Por se tratar de crime habitual, a gestão fraudulenta absorve os atos fraudulentos isolados praticados no contexto da mesma gestão, configurando crime único. A imputação cumulativa autônoma de cada ato caracteriza indevido bis in idem.',
      baseLegal: 'art. 4º, Lei 7.492/1986',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-d2',
      dificuldade: 'dificil',
      enunciado:
        'A acusação trata como evasão de divisas a manutenção de pequena conta não declarada no exterior, sem expressividade econômica. Que princípio a defesa pode invocar com cautela?',
      alternativas: [
        { id: 'a', texto: 'O princípio da insignificância, ponderando o valor e a lesividade, embora sua aplicação seja restrita nesses crimes.' },
        { id: 'b', texto: 'O princípio da reserva legal, para anular a lei.' },
        { id: 'c', texto: 'O princípio da retroatividade maléfica.' },
        { id: 'd', texto: 'O princípio do non bis in idem, para majorar a pena.' },
      ],
      corretaId: 'a',
      explicacao:
        'A defesa pode arguir o princípio da insignificância considerando o valor e a baixa lesividade ao bem jurídico, mas sua aplicação aos crimes contra o Sistema Financeiro é restrita e controvertida, pois se tutela a higidez do sistema, e não apenas o patrimônio individual.',
      baseLegal: 'art. 22, Lei 7.492/1986; princípio da insignificância',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: a competência da Justiça Federal para os crimes da Lei 7.492/1986 abrange também eventuais crimes conexos de lavagem de dinheiro e contra a ordem tributária quando a conexão impuser a reunião dos processos.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Firmada a competência da Justiça Federal para o crime contra o Sistema Financeiro, ela pode atrair, por conexão, o julgamento de crimes correlatos, como lavagem de dinheiro e crimes tributários federais, quando a conexão recomendar a reunião dos feitos, prevalecendo o juízo federal.',
      baseLegal: 'art. 26, Lei 7.492/1986; arts. 76 e 78, CPP',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-d4',
      dificuldade: 'dificil',
      enunciado:
        'Na denúncia genérica, o Ministério Público imputa gestão fraudulenta a todos os diretores apenas por integrarem o conselho, sem descrever a conduta individual de cada um. Qual o vício a ser arguido?',
      alternativas: [
        { id: 'a', texto: 'Nenhum, a denúncia coletiva é sempre válida nos crimes societários.' },
        { id: 'b', texto: 'A inépcia da denúncia por imputação genérica, exigindo-se, ainda nos crimes societários, a mínima individualização do vínculo de cada acusado com os fatos.' },
        { id: 'c', texto: 'A incompetência absoluta do juízo.' },
        { id: 'd', texto: 'A litispendência.' },
      ],
      corretaId: 'b',
      explicacao:
        'Mesmo nos crimes societários, a jurisprudência exige descrição mínima do vínculo de cada acusado com a conduta, vedando a imputação meramente pelo cargo. A denúncia genérica que não individualiza os fatos é inepta e viola a ampla defesa.',
      baseLegal: 'art. 41, CPP; art. 5º, LV, CF',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-d5',
      dificuldade: 'dificil',
      enunciado:
        'A defesa pretende discutir a prescrição em crime de gestão fraudulenta supostamente encerrado quando o réu deixou a administração. A partir de quando, em regra, corre a prescrição nesse crime habitual?',
      alternativas: [
        { id: 'a', texto: 'Da data do primeiro ato fraudulento, sempre.' },
        { id: 'b', texto: 'Da cessação da habitualidade, ou seja, do último ato da gestão fraudulenta, pois o crime habitual consuma-se com a reiteração e se exaure ao cessar a conduta.' },
        { id: 'c', texto: 'Da data da denúncia.' },
        { id: 'd', texto: 'A gestão fraudulenta é imprescritível.' },
      ],
      corretaId: 'b',
      explicacao:
        'Como crime habitual, a gestão fraudulenta consuma-se pela reiteração de atos e seu termo inicial de prescrição, em regra, é a cessação da habitualidade, isto é, o último ato da gestão fraudulenta, momento em que se considera exaurida a conduta.',
      baseLegal: 'art. 4º, Lei 7.492/1986; art. 111, III, CP',
      revisado: false,
    },
    {
      id: 'sistema-financeiro-d6',
      dificuldade: 'dificil',
      enunciado:
        'O cliente celebrou acordo de colaboração premiada em investigação sobre crimes do colarinho branco, revelando esquema de evasão e gestão fraudulenta. Qual a base normativa que sustenta os benefícios negociados além da própria Lei 7.492/1986?',
      alternativas: [
        { id: 'a', texto: 'A colaboração premiada não tem base legal no Brasil.' },
        { id: 'b', texto: 'A Lei 12.850/2013, que disciplina a colaboração premiada, aplicável de forma integrada à apuração desses crimes, especialmente quando há organização criminosa.' },
        { id: 'c', texto: 'A Lei das Contravenções Penais.' },
        { id: 'd', texto: 'O Código de Defesa do Consumidor.' },
      ],
      corretaId: 'b',
      explicacao:
        'Além da redução por confissão prevista na própria Lei 7.492/1986, a colaboração premiada estruturada apoia-se na Lei 12.850/2013, que disciplina o instituto, seus benefícios e requisitos, sendo amplamente utilizada na apuração de crimes financeiros associados a organizações criminosas.',
      baseLegal: 'art. 25, § 2º, Lei 7.492/1986; arts. 4º e 6º, Lei 12.850/2013',
      revisado: false,
    },
  ],
}
