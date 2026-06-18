import type { Lei } from '../types'

/**
 * Crimes Hediondos (8.072/1990).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. 3 do tipo V/F. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: 'crimes-hediondos',
  numero: '8.072/1990',
  nome: 'Crimes Hediondos',
  slug: 'crimes-hediondos',
  resumo:
    'Define o rol dos crimes hediondos e os submete a regime mais severo: vedação de graça, anistia, indulto e fiança, além de regras próprias de progressão de regime e livramento condicional.',
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'crimes-hediondos-f1',
      dificuldade: 'facil',
      enunciado:
        'O juiz pergunta à defesa quais benefícios são expressamente vedados aos condenados por crimes hediondos por força constitucional. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'Graça, anistia e indulto.' },
        { id: 'b', texto: 'Apenas o livramento condicional.' },
        { id: 'c', texto: 'Apenas a substituição da pena por multa.' },
        { id: 'd', texto: 'Somente a detração penal.' },
      ],
      corretaId: 'a',
      explicacao:
        'A Constituição e a Lei 8.072/1990 vedam aos crimes hediondos e equiparados a graça, a anistia e o indulto, além da fiança. Trata-se de tratamento penal mais rigoroso decorrente da maior gravidade dessas infrações.',
      baseLegal: 'art. 5º, XLIII, CF; art. 2º, I, Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-f2',
      dificuldade: 'facil',
      enunciado:
        'A defesa sustenta que o latrocínio (roubo seguido de morte) não seria hediondo. A acusação contesta. Qual a resposta correta segundo o rol legal?',
      alternativas: [
        { id: 'a', texto: 'O latrocínio não está no rol de crimes hediondos.' },
        { id: 'b', texto: 'O latrocínio é expressamente previsto como crime hediondo.' },
        { id: 'c', texto: 'O latrocínio é apenas equiparado, e não hediondo.' },
        { id: 'd', texto: 'O latrocínio é contravenção penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'O latrocínio (art. 157, § 3º, in fine, do CP) integra expressamente o rol de crimes hediondos previsto na Lei 8.072/1990, por se tratar de roubo qualificado pelo resultado morte.',
      baseLegal: 'art. 1º, II, Lei 8.072/1990; art. 157, § 3º, CP',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-f3',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: o tráfico de drogas, o terrorismo e a tortura, embora não constem do rol de crimes hediondos, recebem o mesmo tratamento penal rigoroso por serem crimes equiparados a hediondos.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A afirmação é verdadeira. A Constituição equipara a hediondos os crimes de tráfico ilícito de entorpecentes, terrorismo e tortura, submetendo-os ao mesmo tratamento rigoroso (insuscetibilidade de graça, anistia, indulto e fiança).',
      baseLegal: 'art. 5º, XLIII, CF; art. 2º, Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-f4',
      dificuldade: 'facil',
      enunciado:
        'O cliente foi denunciado por homicídio qualificado. A defesa quer saber se a qualificadora influencia a classificação como crime hediondo. Qual a resposta?',
      alternativas: [
        { id: 'a', texto: 'O homicídio qualificado é hediondo; o simples, em regra, não.' },
        { id: 'b', texto: 'Todo homicídio, simples ou qualificado, é hediondo.' },
        { id: 'c', texto: 'Apenas o homicídio culposo é hediondo.' },
        { id: 'd', texto: 'O homicídio jamais é considerado hediondo.' },
      ],
      corretaId: 'a',
      explicacao:
        'O homicídio qualificado é expressamente hediondo. O homicídio simples, em regra, só é hediondo quando praticado em atividade típica de grupo de extermínio, ainda que por um só agente.',
      baseLegal: 'art. 1º, I, Lei 8.072/1990; art. 121, § 2º, CP',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-f5',
      dificuldade: 'facil',
      enunciado:
        'A defesa pede arbitramento de fiança a réu preso em flagrante por crime hediondo. Qual a providência correta do delegado ou do juiz quanto à fiança?',
      alternativas: [
        { id: 'a', texto: 'Arbitrar fiança em valor elevado.' },
        { id: 'b', texto: 'A fiança é vedada aos crimes hediondos e equiparados.' },
        { id: 'c', texto: 'A fiança é sempre obrigatória nesses casos.' },
        { id: 'd', texto: 'A fiança deve ser fixada pela própria autoridade policial sem limites.' },
      ],
      corretaId: 'b',
      explicacao:
        'Os crimes hediondos e equiparados são insuscetíveis de fiança, conforme a Constituição e a lei. Isso não impede, porém, a eventual concessão de liberdade provisória sem fiança, conforme as circunstâncias.',
      baseLegal: 'art. 5º, XLIII, CF; art. 2º, II, Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-f6',
      dificuldade: 'facil',
      enunciado:
        'O cliente foi condenado por estupro de vulnerável. A defesa questiona se o crime é hediondo. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'Não, pois só o estupro com lesão grave é hediondo.' },
        { id: 'b', texto: 'Sim, o estupro de vulnerável é expressamente hediondo.' },
        { id: 'c', texto: 'Apenas se houver morte da vítima.' },
        { id: 'd', texto: 'Somente quando a vítima for maior de idade.' },
      ],
      corretaId: 'b',
      explicacao:
        'O estupro e o estupro de vulnerável estão expressamente previstos no rol de crimes hediondos da Lei 8.072/1990, independentemente da ocorrência de lesão grave ou morte.',
      baseLegal: 'art. 1º, V e VI, Lei 8.072/1990; arts. 213 e 217-A, CP',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'crimes-hediondos-m1',
      dificuldade: 'medio',
      enunciado:
        'Na execução penal de réu condenado por crime hediondo, sem resultado morte e primário, discute-se a fração para progressão de regime. Qual o percentual aplicável após a Lei 13.964/2019 (Pacote Anticrime)?',
      alternativas: [
        { id: 'a', texto: '16% da pena.' },
        { id: 'b', texto: '25% da pena.' },
        { id: 'c', texto: '40% da pena.' },
        { id: 'd', texto: '60% da pena.' },
      ],
      corretaId: 'c',
      explicacao:
        'Com o Pacote Anticrime, a progressão passou a observar percentuais fixados na Lei de Execução Penal. Para condenado primário por crime hediondo ou equiparado, sem resultado morte, exige-se o cumprimento de 40% da pena.',
      baseLegal: 'art. 112, V, LEP (Lei 7.210/1984), com redação da Lei 13.964/2019',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-m2',
      dificuldade: 'medio',
      enunciado:
        'A defesa requer livramento condicional a réu reincidente específico em crimes hediondos. Qual o entendimento legal aplicável?',
      alternativas: [
        { id: 'a', texto: 'O livramento é concedido após o cumprimento de um terço da pena.' },
        {
          id: 'b',
          texto:
            'É vedado o livramento condicional ao reincidente específico em crimes hediondos ou equiparados.',
        },
        { id: 'c', texto: 'O livramento é automático para qualquer reincidente.' },
        { id: 'd', texto: 'O livramento independe de cumprimento de pena.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 8.072/1990 veda o livramento condicional ao condenado por crime hediondo ou equiparado que seja reincidente específico nessas espécies de crimes. Para os não reincidentes específicos, exige-se cumprimento de mais de dois terços da pena.',
      baseLegal: 'art. 5º, Lei 8.072/1990; art. 83, V, CP',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: após a declaração de inconstitucionalidade do regime integralmente fechado pelo STF, passou a ser admitida a progressão de regime aos condenados por crimes hediondos.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A afirmação é verdadeira. O STF (HC 82.959) declarou inconstitucional a vedação à progressão de regime para crimes hediondos. A Lei 11.464/2007 adequou o texto legal, passando a admitir a progressão com frações próprias.',
      baseLegal: 'STF, HC 82.959; art. 2º, § 2º, Lei 8.072/1990 (Lei 11.464/2007)',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-m4',
      dificuldade: 'medio',
      enunciado:
        'A acusação imputa associação criminosa voltada à prática de crimes hediondos. A defesa quer saber se há previsão específica de aumento de pena para essa hipótese na Lei 8.072/1990. Qual a resposta?',
      alternativas: [
        { id: 'a', texto: 'Não há qualquer previsão na Lei 8.072/1990.' },
        {
          id: 'b',
          texto:
            'A lei prevê tipo específico de associação para a prática de crimes hediondos, com pena própria.',
        },
        { id: 'c', texto: 'Aplica-se apenas a circunstância agravante genérica do CP.' },
        { id: 'd', texto: 'A conduta é atípica.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 8º da Lei 8.072/1990 prevê pena específica (reclusão de 3 a 6 anos) para a associação de duas ou mais pessoas destinada à prática reiterada dos crimes hediondos ou equiparados, com previsão de delação premiada no parágrafo único.',
      baseLegal: 'art. 8º, Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-m5',
      dificuldade: 'medio',
      enunciado:
        'O réu confessa e colabora, permitindo o desmantelamento de quadrilha voltada a crimes hediondos. A defesa busca benefício específico previsto na Lei 8.072/1990. Qual é ele?',
      alternativas: [
        { id: 'a', texto: 'Extinção da punibilidade automática.' },
        {
          id: 'b',
          texto:
            'Redução de pena de 1/3 a 2/3 ao participante e ao associado que denunciar à autoridade o bando, possibilitando seu desmantelamento.',
        },
        { id: 'c', texto: 'Conversão da pena em multa.' },
        { id: 'd', texto: 'Concessão de indulto pleno.' },
      ],
      corretaId: 'b',
      explicacao:
        'O parágrafo único do art. 8º prevê causa de diminuição da pena de 1/3 a 2/3 ao participante e ao associado que denunciar à autoridade o bando ou a quadrilha, possibilitando o seu desmantelamento.',
      baseLegal: 'art. 8º, parágrafo único, Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-m6',
      dificuldade: 'medio',
      enunciado:
        'Discute-se o regime inicial de cumprimento de pena de réu condenado por crime hediondo. A defesa pleiteia regime aberto. Qual o entendimento atual após o julgamento do STF sobre o regime inicial?',
      alternativas: [
        { id: 'a', texto: 'O regime inicial é obrigatoriamente fechado para todos os hediondos.' },
        {
          id: 'b',
          texto:
            'O regime inicial não precisa ser necessariamente fechado; deve observar a pena aplicada e as circunstâncias judiciais, conforme entendimento do STF.',
        },
        { id: 'c', texto: 'O regime inicial é sempre semiaberto.' },
        { id: 'd', texto: 'O regime inicial é sempre aberto.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF (HC 111.840) declarou inconstitucional a obrigatoriedade do regime inicial fechado para crimes hediondos. O regime inicial deve ser fixado conforme a pena imposta e as circunstâncias do art. 33 do CP, podendo ser menos gravoso.',
      baseLegal: 'art. 2º, § 1º, Lei 8.072/1990; STF, HC 111.840; art. 33, CP',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'crimes-hediondos-d1',
      dificuldade: 'dificil',
      enunciado:
        'Réu primário foi condenado por crime hediondo com resultado morte. Na execução, discute-se a fração de progressão e a possibilidade de livramento condicional. Qual a observação tecnicamente correta após o Pacote Anticrime?',
      alternativas: [
        { id: 'a', texto: 'Exige-se 40% para progressão e admite-se livramento normalmente.' },
        {
          id: 'b',
          texto:
            'Exige-se o cumprimento de 50% da pena para progressão e é vedado o livramento condicional ao condenado por crime hediondo com resultado morte.',
        },
        { id: 'c', texto: 'Exige-se 16% para progressão e livramento livre.' },
        { id: 'd', texto: 'Não há qualquer requisito temporal.' },
      ],
      corretaId: 'b',
      explicacao:
        'Para o primário condenado por crime hediondo ou equiparado com resultado morte, a LEP exige 50% de cumprimento para progressão, sendo vedado o livramento condicional nessa hipótese, conforme alterações do Pacote Anticrime.',
      baseLegal: 'art. 112, VI, a, e § 5º, LEP, com redação da Lei 13.964/2019',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-d2',
      dificuldade: 'dificil',
      enunciado:
        'A defesa de condenado por tráfico privilegiado pleiteia, na execução, que se afaste o tratamento dos crimes equiparados a hediondos para fins de benefícios. Qual a tese correta?',
      alternativas: [
        { id: 'a', texto: 'O tráfico privilegiado mantém a natureza hedionda em qualquer caso.' },
        {
          id: 'b',
          texto:
            'O STF firmou que o tráfico privilegiado não tem natureza hedionda, afastando o tratamento mais gravoso dos equiparados.',
        },
        { id: 'c', texto: 'O tráfico privilegiado é contravenção penal.' },
        { id: 'd', texto: 'O benefício depende de indulto presidencial.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF (HC 118.533) firmou que o tráfico privilegiado (art. 33, § 4º, da Lei 11.343/2006) não ostenta natureza hedionda, afastando, na execução, o regime mais severo dos crimes equiparados a hediondos. A jurisprudência foi posteriormente positivada no rol legal.',
      baseLegal: 'art. 112, § 5º, LEP; STF, HC 118.533',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: a Lei 8.072/1990, ao majorar penas e endurecer o regime de crimes praticados antes de sua vigência, pode retroagir para alcançar fatos anteriores, por se tratar de norma de ordem pública.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'A afirmação é falsa. A lei penal mais gravosa (novatio legis in pejus) não retroage. A vedação à retroatividade da lei penal mais severa é garantia constitucional, sendo a Lei 8.072/1990 aplicável apenas a fatos praticados a partir de sua vigência, salvo no que for mais benéfica.',
      baseLegal: 'art. 5º, XL, CF; art. 1º, CP',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-d4',
      dificuldade: 'dificil',
      enunciado:
        'O réu foi condenado por roubo majorado pelo emprego de arma de fogo, sem resultado morte. A acusação pretende classificá-lo como hediondo. Qual a abordagem correta?',
      alternativas: [
        { id: 'a', texto: 'Todo roubo majorado é hediondo.' },
        {
          id: 'b',
          texto:
            'O roubo só é hediondo nas hipóteses expressamente previstas (como o praticado com emprego de arma de fogo de uso restrito ou proibido e o latrocínio); o roubo majorado por arma de fogo comum, isoladamente, não consta do rol.',
        },
        { id: 'c', texto: 'Nenhum roubo é hediondo.' },
        { id: 'd', texto: 'O roubo simples é sempre hediondo.' },
      ],
      corretaId: 'b',
      explicacao:
        'O rol de hediondos é taxativo. O latrocínio e o roubo com emprego de arma de fogo de uso restrito ou proibido (e o roubo com restrição de liberdade ou resultado lesão grave, conforme previsões legais) são hediondos. O roubo majorado por arma de fogo de uso permitido, isoladamente, não integra o rol.',
      baseLegal: 'art. 1º, II, Lei 8.072/1990; art. 157, CP',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-d5',
      dificuldade: 'dificil',
      enunciado:
        'Na execução, sobrevém entendimento que reduz a fração de progressão exigida para certo crime hediondo cometido antes da alteração. A defesa pleiteia a aplicação retroativa. Qual o princípio que ampara o pedido?',
      alternativas: [
        { id: 'a', texto: 'A irretroatividade absoluta da lei penal.' },
        {
          id: 'b',
          texto:
            'A retroatividade da lei penal mais benéfica (lex mitior), que alcança fatos anteriores em benefício do réu.',
        },
        { id: 'c', texto: 'O princípio da insignificância.' },
        { id: 'd', texto: 'A vedação ao bis in idem.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei penal mais benéfica retroage para alcançar fatos anteriores (lex mitior), inclusive na execução penal. Reduzida a fração necessária à progressão, a norma mais favorável incide sobre condenações por fatos anteriores à sua vigência.',
      baseLegal: 'art. 5º, XL, CF; art. 2º, parágrafo único, CP',
      revisado: false,
    },
    {
      id: 'crimes-hediondos-d6',
      dificuldade: 'dificil',
      enunciado:
        'Discute-se a possibilidade de indulto natalino a condenado por associação para o tráfico (art. 35 da Lei de Drogas), crime que não consta como hediondo no rol, mas é cometido em contexto de tráfico. Qual a abordagem mais técnica?',
      alternativas: [
        { id: 'a', texto: 'A associação para o tráfico é equiparada a hediondo e jamais admite indulto.' },
        {
          id: 'b',
          texto:
            'A associação para o tráfico (art. 35) não é, por si, equiparada a hediondo, podendo, em tese, ser alcançada por indulto conforme o decreto presidencial vigente, segundo entendimento dos tribunais superiores.',
        },
        { id: 'c', texto: 'O indulto é sempre vedado a qualquer crime relacionado a drogas.' },
        { id: 'd', texto: 'O indulto independe de previsão em decreto.' },
      ],
      corretaId: 'b',
      explicacao:
        'O crime de associação para o tráfico (art. 35) não integra o rol de equiparados a hediondos para fins de vedação de indulto, segundo orientação dos tribunais. Sua concessão depende dos requisitos do decreto presidencial, distinguindo-se do tráfico do art. 33.',
      baseLegal: 'art. 5º, XLIII, CF; art. 35, Lei 11.343/2006; STJ, jurisprudência sobre indulto',
      revisado: false,
    },
  ],
}
