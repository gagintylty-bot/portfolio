import type { Lei } from '../types'

/**
 * Lei de Terrorismo (13.260/2016).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "terrorismo",
  numero: "13.260/2016",
  nome: "Lei de Terrorismo",
  slug: "lei-de-terrorismo",
  resumo:
    "Regulamenta o terrorismo, definindo a conduta, os atos preparatórios e penas. Trata também de financiamento ao terrorismo e de disposições investigatórias e processuais específicas.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'terrorismo-f1',
      dificuldade: 'facil',
      enunciado:
        'O Ministério Público sustenta, na denúncia, que a conduta do acusado se enquadra no crime de terrorismo. Qual o elemento subjetivo essencial (motivação) exigido pela Lei 13.260/2016 para a configuração do tipo?',
      alternativas: [
        { id: 'a', texto: 'Qualquer finalidade de lucro, ainda que individual.' },
        {
          id: 'b',
          texto:
            'Razões de xenofobia, discriminação ou preconceito de raça, cor, etnia e religião, com a finalidade de provocar terror social ou generalizado.',
        },
        { id: 'c', texto: 'Mera intenção de causar lesão corporal a uma pessoa determinada.' },
        { id: 'd', texto: 'Apenas o dolo de furtar coisa alheia móvel.' },
      ],
      corretaId: 'b',
      explicacao:
        'O terrorismo consiste na prática de atos por razões de xenofobia, discriminação ou preconceito de raça, cor, etnia e religião, com a finalidade de provocar terror social ou generalizado, expondo a perigo pessoa, patrimônio, a paz pública ou a incolumidade pública.',
      baseLegal: 'art. 2º, Lei 13.260/2016',
      revisado: false,
    },
    {
      id: 'terrorismo-f2',
      dificuldade: 'facil',
      enunciado:
        'Em audiência, discute-se a pena cominada ao crime de terrorismo do art. 2º da Lei 13.260/2016. Qual a sanção prevista para a conduta consumada?',
      alternativas: [
        { id: 'a', texto: 'Detenção de 6 meses a 1 ano.' },
        { id: 'b', texto: 'Reclusão de 12 a 30 anos, além das sanções correspondentes à ameaça ou violência.' },
        { id: 'c', texto: 'Apenas multa, sem pena privativa de liberdade.' },
        { id: 'd', texto: 'Prestação de serviços à comunidade.' },
      ],
      corretaId: 'b',
      explicacao:
        'A pena para o terrorismo do art. 2º é de reclusão de 12 a 30 anos, além das sanções correspondentes à ameaça ou à violência, demonstrando a elevada reprovabilidade da conduta.',
      baseLegal: 'art. 2º, § 1º, Lei 13.260/2016',
      revisado: false,
    },
    {
      id: 'terrorismo-f3',
      dificuldade: 'facil',
      enunciado:
        'A acusação imputa ao réu a conduta de promover e financiar uma organização terrorista. A Lei 13.260/2016 tipifica autonomamente o financiamento ao terrorismo?',
      alternativas: [
        { id: 'a', texto: 'Não; o financiamento é mera fase impunível do terrorismo.' },
        {
          id: 'b',
          texto:
            'Sim; receber, prover, oferecer ou guardar recursos para o financiamento de atos de terrorismo é conduta autonomamente tipificada.',
        },
        { id: 'c', texto: 'Sim, mas apenas como contravenção penal.' },
        { id: 'd', texto: 'Não; só há crime se houver morte da vítima.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei tipifica autonomamente o financiamento ao terrorismo: receber, prover, oferecer, obter, guardar, manter em depósito, solicitar ou investir recursos para custear atos de terrorismo ou organizações terroristas.',
      baseLegal: 'art. 6º, Lei 13.260/2016',
      revisado: false,
    },
    {
      id: 'terrorismo-f4',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A Lei 13.260/2016 ressalva expressamente que suas disposições não se aplicam à conduta individual ou coletiva de pessoas em movimentos sociais, sindicais, religiosos, de classe ou de categoria, dirigida por propósitos sociais ou reivindicatórios.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Verdadeiro. A própria lei ressalva que o disposto no art. 2º não se aplica à conduta individual ou coletiva de pessoas em manifestações políticas, movimentos sociais, sindicais, religiosos, de classe ou de categoria profissional, com finalidades sociais ou reivindicatórias, visando contestar, criticar, protestar ou apoiar.',
      baseLegal: 'art. 2º, § 2º, Lei 13.260/2016',
      revisado: false,
    },
    {
      id: 'terrorismo-f5',
      dificuldade: 'facil',
      enunciado:
        'A defesa precisa saber a natureza do crime de terrorismo para fins de progressão de regime e benefícios penais. Como a Constituição e a legislação tratam o terrorismo?',
      alternativas: [
        { id: 'a', texto: 'Como crime de menor potencial ofensivo.' },
        { id: 'b', texto: 'Como crime equiparado a hediondo, insuscetível de fiança, graça e anistia.' },
        { id: 'c', texto: 'Como contravenção penal.' },
        { id: 'd', texto: 'Como crime culposo, com pena reduzida.' },
      ],
      corretaId: 'b',
      explicacao:
        'O terrorismo é equiparado a crime hediondo por mandamento constitucional, sendo insuscetível de fiança, graça e anistia, com tratamento penal mais severo quanto a benefícios.',
      baseLegal: 'art. 5º, XLIII, CF; Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'terrorismo-f6',
      dificuldade: 'facil',
      enunciado:
        'A denúncia narra que o acusado, apenas, praticou atos preparatórios de terrorismo, sem chegar à execução. A Lei 13.260/2016 prevê punição para atos preparatórios?',
      alternativas: [
        { id: 'a', texto: 'Não; somente a consumação é punível.' },
        {
          id: 'b',
          texto:
            'Sim; a lei tipifica expressamente os atos preparatórios de terrorismo praticados com o propósito inequívoco de consumá-lo.',
        },
        { id: 'c', texto: 'Sim, mas a pena é meramente simbólica de multa.' },
        { id: 'd', texto: 'Não; atos preparatórios são sempre atípicos no direito penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 13.260/2016 inovou ao tipificar os atos preparatórios de terrorismo, desde que praticados com o propósito inequívoco de consumar tal delito, com pena correspondente à do crime consumado diminuída de um quarto até a metade.',
      baseLegal: 'art. 5º, Lei 13.260/2016',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'terrorismo-m1',
      dificuldade: 'medio',
      enunciado:
        'O juiz indaga qual a competência para processar e julgar os crimes da Lei 13.260/2016. Qual a resposta tecnicamente correta?',
      alternativas: [
        { id: 'a', texto: 'A competência é sempre da Justiça Estadual do local do fato.' },
        {
          id: 'b',
          texto:
            'A instrução e o julgamento competem à Justiça Federal, dado o interesse da União na repressão ao terrorismo.',
        },
        { id: 'c', texto: 'A competência é exclusiva do Tribunal do Júri.' },
        { id: 'd', texto: 'A competência é dos Juizados Especiais Criminais.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 13.260/2016 atribui à Justiça Federal a competência para processar e julgar os crimes nela previstos, considerando o interesse da União na prevenção e repressão ao terrorismo.',
      baseLegal: 'art. 11, Lei 13.260/2016; art. 109, CF',
      revisado: false,
    },
    {
      id: 'terrorismo-m2',
      dificuldade: 'medio',
      enunciado:
        'A acusação narra que o grupo, sem alvo de discriminação, pretendia tomar o controle de aeronave por meio de violência. A Lei 13.260/2016 prevê figura específica para esse cenário?',
      alternativas: [
        { id: 'a', texto: 'Não; o sequestro de aeronave nada tem a ver com a lei.' },
        {
          id: 'b',
          texto:
            'Sim; constitui ato de terrorismo apoderar-se ou exercer controle, total ou parcial, com violência ou grave ameaça, de meio de transporte coletivo de passageiros.',
        },
        { id: 'c', texto: 'Sim, mas apenas se houver explosivo envolvido.' },
        { id: 'd', texto: 'Não; aplica-se exclusivamente o Código Brasileiro de Aeronáutica.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 3º descreve atos de terrorismo, incluindo apoderar-se ou exercer o controle, total ou parcialmente, definitiva ou temporariamente, de meio de comunicação ou de transporte, de portos, aeroportos e instalações, por violência ou grave ameaça.',
      baseLegal: 'art. 3º, Lei 13.260/2016',
      revisado: false,
    },
    {
      id: 'terrorismo-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Para a configuração do crime de terrorismo do art. 2º, a Lei 13.260/2016 exige que a conduta seja motivada por razões de xenofobia, discriminação ou preconceito de raça, cor, etnia e religião.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Verdadeiro. O legislador, ao definir o terrorismo do art. 2º, restringiu o elemento subjetivo às razões de xenofobia, discriminação ou preconceito de raça, cor, etnia e religião. Essa motivação é elemento do tipo, ponto frequentemente explorado pela defesa.',
      baseLegal: 'art. 2º, Lei 13.260/2016',
      revisado: false,
    },
    {
      id: 'terrorismo-m4',
      dificuldade: 'medio',
      enunciado:
        'A defesa quer questionar a prisão preventiva decretada com base apenas na gravidade abstrata do crime de terrorismo. Qual o argumento processual mais consistente?',
      alternativas: [
        { id: 'a', texto: 'A gravidade abstrata, por si só, justifica a preventiva nesse crime.' },
        {
          id: 'b',
          texto:
            'A prisão preventiva exige fundamentação concreta dos requisitos cautelares, não bastando a gravidade abstrata do delito.',
        },
        { id: 'c', texto: 'A preventiva é vedada em qualquer crime hediondo.' },
        { id: 'd', texto: 'O terrorismo admite apenas prisão temporária, jamais preventiva.' },
      ],
      corretaId: 'b',
      explicacao:
        'Mesmo em crimes graves, a prisão preventiva depende de fundamentação concreta dos requisitos do art. 312 do CPP (garantia da ordem pública, instrução, aplicação da lei penal). A gravidade abstrata do tipo, isoladamente, não basta, conforme jurisprudência consolidada.',
      baseLegal: 'art. 312, CPP; STF, jurisprudência sobre fundamentação cautelar',
      revisado: false,
    },
    {
      id: 'terrorismo-m5',
      dificuldade: 'medio',
      enunciado:
        'No inquérito por terrorismo, a autoridade pretende empregar meios especiais de obtenção de prova. Qual diploma a Lei 13.260/2016 manda observar quanto a esses procedimentos?',
      alternativas: [
        { id: 'a', texto: 'Apenas o Código de Processo Penal comum, sem técnicas especiais.' },
        {
          id: 'b',
          texto:
            'A lei admite a aplicação dos meios de obtenção de prova e dos procedimentos da legislação de organizações criminosas (Lei 12.850/2013).',
        },
        { id: 'c', texto: 'Somente o sigilo absoluto, vedada qualquer interceptação.' },
        { id: 'd', texto: 'O Código Eleitoral.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 13.260/2016 determina a aplicação, no que couber, das disposições da Lei 12.850/2013 (organizações criminosas) quanto aos meios de obtenção de prova, ação controlada, infiltração de agentes e colaboração premiada.',
      baseLegal: 'art. 16, Lei 13.260/2016; Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'terrorismo-m6',
      dificuldade: 'medio',
      enunciado:
        'O réu integrava, de forma estável, organização terrorista, ainda que não tenha executado pessoalmente nenhum atentado. Há tipo penal autônomo para essa conduta?',
      alternativas: [
        { id: 'a', texto: 'Não; sem atentado executado, a conduta é atípica.' },
        {
          id: 'b',
          texto:
            'Sim; promover, constituir, integrar ou prestar auxílio a organização terrorista é conduta autonomamente punível.',
        },
        { id: 'c', texto: 'Sim, mas apenas como participação de menor importância.' },
        { id: 'd', texto: 'Não; aplica-se somente a Lei das Organizações Criminosas.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei pune autonomamente promover, constituir, integrar ou prestar auxílio, pessoalmente ou por interposta pessoa, a organização terrorista, com pena de reclusão de 5 a 8 anos e multa.',
      baseLegal: 'art. 3º, Lei 13.260/2016',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'terrorismo-d1',
      dificuldade: 'dificil',
      enunciado:
        'A defesa sustenta que a tipificação do terrorismo no art. 2º, ao listar motivações específicas (xenofobia, raça, cor, etnia, religião), não alcança atentado motivado por puro fanatismo político sem esse recorte. Qual a abordagem técnica mais consistente?',
      alternativas: [
        { id: 'a', texto: 'A motivação é irrelevante; qualquer violência grave é terrorismo.' },
        {
          id: 'b',
          texto:
            'A taxatividade do tipo exige a presença das motivações legalmente previstas; ausentes, discute-se atipicidade quanto ao art. 2º, vedada analogia in malam partem.',
        },
        { id: 'c', texto: 'O juiz pode ampliar o rol de motivações por interpretação extensiva contra o réu.' },
        { id: 'd', texto: 'A conduta deve ser sempre desclassificada para crime contra a segurança nacional.' },
      ],
      corretaId: 'b',
      explicacao:
        'Pelo princípio da legalidade e da taxatividade, os elementos do tipo do art. 2º incluem motivações específicas. Sua ausência impede o enquadramento nesse dispositivo, sendo vedada a analogia in malam partem para alcançar motivações não previstas, sem prejuízo de outros tipos eventualmente cabíveis.',
      baseLegal: 'art. 2º, Lei 13.260/2016; art. 5º, XXXIX, CF',
      revisado: false,
    },
    {
      id: 'terrorismo-d2',
      dificuldade: 'dificil',
      enunciado:
        'O acusado realizou atos preparatórios de terrorismo, mas desistiu voluntariamente antes de qualquer execução, comunicando a autoridade. Como a defesa pode explorar esse cenário diante do art. 5º?',
      alternativas: [
        { id: 'a', texto: 'A desistência é irrelevante; a punição dos atos preparatórios é absoluta.' },
        {
          id: 'b',
          texto:
            'Embora o art. 5º puna atos preparatórios, a desistência voluntária e o arrependimento eficaz são teses defensivas relevantes, a serem aferidas no caso concreto.',
        },
        { id: 'c', texto: 'A desistência converte o crime em mera contravenção.' },
        { id: 'd', texto: 'A comunicação à autoridade gera imunidade penal plena e automática.' },
      ],
      corretaId: 'b',
      explicacao:
        'A tipificação autônoma dos atos preparatórios não afasta, em tese, a discussão sobre desistência voluntária e arrependimento eficaz (art. 15 do CP), que devem ser analisados concretamente, especialmente quando a conduta cessa antes de qualquer execução.',
      baseLegal: 'art. 5º, Lei 13.260/2016; art. 15, CP',
      revisado: false,
    },
    {
      id: 'terrorismo-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Os crimes previstos na Lei 13.260/2016 são de competência da Justiça Federal e equiparados a hediondos, com tratamento penal mais severo quanto a benefícios.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Verdadeiro. A Lei 13.260/2016 fixa a competência da Justiça Federal e o terrorismo é equiparado a crime hediondo por força constitucional, sendo insuscetível de fiança, graça e anistia, com regime mais rigoroso de cumprimento de pena.',
      baseLegal: 'art. 11, Lei 13.260/2016; art. 5º, XLIII, CF; Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'terrorismo-d4',
      dificuldade: 'dificil',
      enunciado:
        'O acusado, em concurso, financiou organização terrorista e também integrou seus quadros. A acusação pretende cumular as imputações de financiamento e de integração. Qual a análise técnica pertinente?',
      alternativas: [
        { id: 'a', texto: 'É sempre vedado cumular qualquer imputação na lei de terrorismo.' },
        {
          id: 'b',
          texto:
            'O financiamento (art. 6º) e a integração de organização terrorista (art. 3º) são tipos autônomos, cabendo analisar concurso de crimes conforme as condutas concretamente provadas.',
        },
        { id: 'c', texto: 'O financiamento sempre absorve a integração, sem exceção.' },
        { id: 'd', texto: 'A integração sempre absorve o financiamento, sem exceção.' },
      ],
      corretaId: 'b',
      explicacao:
        'Financiamento (art. 6º) e integração de organização terrorista (art. 3º) tutelam condutas distintas e são tipos autônomos. A eventual cumulação ou absorção depende da análise das condutas concretas, do dolo e do princípio da consunção no caso concreto.',
      baseLegal: 'arts. 3º e 6º, Lei 13.260/2016',
      revisado: false,
    },
    {
      id: 'terrorismo-d5',
      dificuldade: 'dificil',
      enunciado:
        'A defesa argui nulidade de prova colhida em ação controlada e infiltração de agentes sem prévia autorização judicial fundamentada. Como sustentar a tese?',
      alternativas: [
        { id: 'a', texto: 'A infiltração dispensa autorização judicial nos crimes de terrorismo.' },
        {
          id: 'b',
          texto:
            'A ação controlada e a infiltração exigem os requisitos da Lei 12.850/2013, inclusive autorização judicial fundamentada; sua ausência pode acarretar ilicitude da prova.',
        },
        { id: 'c', texto: 'A nulidade só atinge a prova se houver confissão posterior.' },
        { id: 'd', texto: 'A infiltração é vedada em qualquer hipótese, sendo prova sempre ilícita.' },
      ],
      corretaId: 'b',
      explicacao:
        'Como a Lei 13.260/2016 remete à Lei 12.850/2013, os meios especiais de prova devem observar os respectivos requisitos legais, inclusive autorização judicial prévia e fundamentada para infiltração. A inobservância pode contaminar a prova com ilicitude, atraindo nulidade.',
      baseLegal: 'art. 16, Lei 13.260/2016; arts. 8º e 10, Lei 12.850/2013; art. 5º, LVI, CF',
      revisado: false,
    },
    {
      id: 'terrorismo-d6',
      dificuldade: 'dificil',
      enunciado:
        'Acusado de terrorismo colabora efetivamente, identificando coautores e prevenindo atentado iminente. A defesa busca benefício pela colaboração. Qual o enquadramento adequado?',
      alternativas: [
        { id: 'a', texto: 'Não há qualquer previsão de benefício por colaboração nesses crimes.' },
        {
          id: 'b',
          texto:
            'Aplicam-se, no que couber, os institutos da colaboração premiada da Lei 12.850/2013, com possível redução de pena ou perdão judicial, conforme a efetividade da colaboração.',
        },
        { id: 'c', texto: 'A colaboração gera imunidade penal plena e irrestrita.' },
        { id: 'd', texto: 'A colaboração só vale para crimes patrimoniais.' },
      ],
      corretaId: 'b',
      explicacao:
        'Diante da remissão da Lei 13.260/2016 à Lei 12.850/2013, a colaboração premiada é cabível, podendo render redução de pena, regime mais brando ou até perdão judicial, conforme os resultados efetivamente alcançados (identificação de coautores, prevenção de atos).',
      baseLegal: 'art. 16, Lei 13.260/2016; art. 4º, Lei 12.850/2013',
      revisado: false,
    },
  ],
}
