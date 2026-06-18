import type { Lei } from '../types'

/**
 * RASCUNHO EDUCACIONAL — Crimes Ambientais (9.605/1998).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ Precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "ambientais",
  numero: "9.605/1998",
  nome: "Crimes Ambientais",
  slug: "crimes-ambientais",
  resumo:
    "Dispõe sobre sanções penais e administrativas derivadas de condutas lesivas ao meio ambiente. Admite responsabilidade penal da pessoa jurídica e prevê institutos próprios de composição e reparação do dano.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'ambientais-f1',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente foi flagrado caçando e abatendo animais silvestres sem a devida licença da autoridade competente. Qual o crime ambiental, em regra, imputável a essa conduta?',
      alternativas: [
        { id: 'a', texto: 'Crime contra a fauna, por matar espécime da fauna silvestre sem permissão, licença ou autorização.' },
        { id: 'b', texto: 'Crime contra a flora, exclusivamente.' },
        { id: 'c', texto: 'Crime de poluição.' },
        { id: 'd', texto: 'Conduta atípica, por se tratar de animal silvestre.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 29 da Lei 9.605/1998 tipifica matar, perseguir, caçar, apanhar ou utilizar espécimes da fauna silvestre, sem a devida permissão, licença ou autorização da autoridade competente, com pena de detenção e multa.',
      baseLegal: 'art. 29, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-f2',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A Lei 9.605/1998 admite a responsabilização penal da pessoa jurídica por crimes ambientais, sem prejuízo da responsabilidade das pessoas físicas autoras, coautoras ou partícipes do mesmo fato.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 3º da Lei 9.605/1998 prevê a responsabilidade penal da pessoa jurídica nos casos em que a infração seja cometida por decisão de seu representante legal ou contratual, ou de órgão colegiado, no interesse ou benefício da entidade, sem excluir a das pessoas físicas envolvidas.',
      baseLegal: 'art. 3º, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-f3',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente, empresário, lançou efluentes industriais em um rio, provocando mortandade de peixes e poluição das águas. Qual o crime ambiental em discussão?',
      alternativas: [
        { id: 'a', texto: 'Crime contra a flora.' },
        { id: 'b', texto: 'Crime de poluição que cause ou possa causar danos à saúde humana ou mortandade de animais.' },
        { id: 'c', texto: 'Crime contra o ordenamento urbano apenas.' },
        { id: 'd', texto: 'Conduta atípica, por ser atividade econômica.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 54 da Lei 9.605/1998 tipifica causar poluição de qualquer natureza em níveis tais que resultem ou possam resultar em danos à saúde humana, ou que provoquem a mortandade de animais ou a destruição significativa da flora.',
      baseLegal: 'art. 54, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-f4',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente promoveu o corte raso de vegetação em área de preservação permanente sem autorização. Qual a natureza dessa conduta na Lei de Crimes Ambientais?',
      alternativas: [
        { id: 'a', texto: 'Crime contra a flora, por destruir ou danificar vegetação em área de preservação permanente sem autorização.' },
        { id: 'b', texto: 'Crime contra a fauna.' },
        { id: 'c', texto: 'Mera infração administrativa, jamais crime.' },
        { id: 'd', texto: 'Crime de poluição sonora.' },
      ],
      corretaId: 'a',
      explicacao:
        'A Lei 9.605/1998 tipifica, entre os crimes contra a flora, destruir ou danificar vegetação em área de preservação permanente, ou utilizá-la com infringência das normas de proteção, sujeitando o agente a pena específica.',
      baseLegal: 'art. 38, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-f5',
      dificuldade: 'facil',
      enunciado:
        'Condenada uma empresa por crime ambiental, o juiz pretende aplicar penas próprias da pessoa jurídica. Qual destas é prevista na Lei 9.605/1998 como pena aplicável à pessoa jurídica?',
      alternativas: [
        { id: 'a', texto: 'Pena privativa de liberdade do representante, aplicada à própria empresa.' },
        { id: 'b', texto: 'Suspensão parcial ou total de atividades, interdição temporária de estabelecimento e proibição de contratar com o Poder Público.' },
        { id: 'c', texto: 'Apenas advertência verbal, sem outras sanções.' },
        { id: 'd', texto: 'Internação compulsória dos sócios.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 22 da Lei 9.605/1998 prevê, como penas restritivas de direitos aplicáveis à pessoa jurídica, a suspensão parcial ou total de atividades, a interdição temporária de estabelecimento, obra ou atividade e a proibição de contratar com o Poder Público, sendo a prestação de serviços à comunidade prevista no art. 23.',
      baseLegal: 'arts. 22 e 23, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-f6',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente provocou incêndio em mata, atingindo grande área de floresta. Qual o crime ambiental, em regra, imputável a essa conduta?',
      alternativas: [
        { id: 'a', texto: 'Provocar incêndio em mata ou floresta, crime contra a flora.' },
        { id: 'b', texto: 'Crime de poluição atmosférica, exclusivamente.' },
        { id: 'c', texto: 'Crime contra a administração ambiental.' },
        { id: 'd', texto: 'Conduta atípica, salvo se houver vítima humana.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 41 da Lei 9.605/1998 tipifica provocar incêndio em mata ou floresta, com pena de reclusão de 2 a 4 anos e multa, prevendo modalidade culposa quando o incêndio for causado por imprudência, negligência ou imperícia.',
      baseLegal: 'art. 41, Lei 9.605/1998',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'ambientais-m1',
      dificuldade: 'medio',
      enunciado:
        'A defesa pretende a aplicação da suspensão condicional do processo a seu cliente, denunciado por crime ambiental cuja pena mínima é de um ano. Qual a peculiaridade exigida pela Lei de Crimes Ambientais para essa proposta?',
      alternativas: [
        { id: 'a', texto: 'Nenhuma; aplicam-se apenas as regras gerais da Lei 9.099/1995.' },
        { id: 'b', texto: 'A declaração de que houve, ou a comprovação da reparação do dano ambiental, salvo impossibilidade, condiciona aspectos da suspensão e da sentença.' },
        { id: 'c', texto: 'A suspensão é vedada em qualquer crime ambiental.' },
        { id: 'd', texto: 'A suspensão exige confissão integral dos fatos.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 9.605/1998 condiciona institutos despenalizadores à reparação do dano. O art. 28 estabelece que a declaração de extinção da punibilidade, na suspensão condicional do processo, depende de laudo que comprove a reparação do dano ambiental, salvo impossibilidade de fazê-lo.',
      baseLegal: 'art. 28, Lei 9.605/1998; art. 89, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'ambientais-m2',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente foi denunciado por crime ambiental e pretende a transação penal. A Lei 9.605/1998 traz alguma condicionante específica para a transação nesses crimes?',
      alternativas: [
        { id: 'a', texto: 'Não, a transação segue exclusivamente a regra geral.' },
        { id: 'b', texto: 'Sim, a transação penal nos crimes ambientais de menor potencial ofensivo somente pode ser formulada havendo prévia composição do dano ambiental, salvo comprovada impossibilidade.' },
        { id: 'c', texto: 'A transação é proibida em todo crime ambiental.' },
        { id: 'd', texto: 'A transação independe de qualquer reparação.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 27 da Lei 9.605/1998 estabelece que, nos crimes ambientais de menor potencial ofensivo, a proposta de aplicação imediata de pena (transação) somente poderá ser formulada desde que tenha havido a prévia composição do dano ambiental, salvo em caso de comprovada impossibilidade.',
      baseLegal: 'art. 27, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Na dosimetria dos crimes ambientais, a reparação do dano e a situação econômica do infrator são circunstâncias que devem ser consideradas pelo juiz na imposição e gradação da pena.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 6º da Lei 9.605/1998 determina que, para imposição e gradação da penalidade, a autoridade competente observe a gravidade do fato, os antecedentes do infrator quanto ao cumprimento da legislação ambiental e a sua situação econômica, no caso de multa.',
      baseLegal: 'art. 6º, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-m4',
      dificuldade: 'medio',
      enunciado:
        'O Ministério Público denunciou apenas a pessoa jurídica por crime ambiental, sem indicar a pessoa física responsável pela decisão. A defesa questiona a denúncia. Qual a melhor leitura sobre a imputação à pessoa jurídica?',
      alternativas: [
        { id: 'a', texto: 'A responsabilização da pessoa jurídica é impossível em qualquer caso.' },
        { id: 'b', texto: 'A pessoa jurídica pode ser responsabilizada penalmente, e o STF passou a admitir sua condenação mesmo sem a imputação simultânea e obrigatória de pessoa física.' },
        { id: 'c', texto: 'A pessoa jurídica só responde se confessar o crime.' },
        { id: 'd', texto: 'A denúncia contra pessoa jurídica é sempre inepta.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF superou a chamada teoria da dupla imputação obrigatória, admitindo o processamento e a condenação da pessoa jurídica por crime ambiental ainda que não haja imputação simultânea de pessoa física, desde que presentes os requisitos do art. 3º da Lei 9.605/1998.',
      baseLegal: 'art. 3º, Lei 9.605/1998; STF, RE 548.181',
      revisado: false,
    },
    {
      id: 'ambientais-m5',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente foi autuado por construir em área de preservação permanente sem licença ambiental. A acusação descreve crime contra o ordenamento urbano e o patrimônio cultural. Qual dispositivo trata da construção em solo não edificável ou seu entorno?',
      alternativas: [
        { id: 'a', texto: 'O crime contra a fauna.' },
        { id: 'b', texto: 'O crime de construir em solo não edificável, ou no seu entorno, em razão de seu valor paisagístico, ecológico ou outro, sem autorização ou em desacordo com ela.' },
        { id: 'c', texto: 'O crime de poluição sonora.' },
        { id: 'd', texto: 'O crime de comércio de produtos perigosos.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 64 da Lei 9.605/1998 tipifica promover construção em solo não edificável, ou no seu entorno, assim considerado em razão de seu valor paisagístico, ecológico, artístico, turístico, histórico, cultural, religioso, arqueológico, etnográfico ou monumental, sem autorização ou em desacordo com a concedida.',
      baseLegal: 'art. 64, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-m6',
      dificuldade: 'medio',
      enunciado:
        'No crime de poluição do art. 54, a acusação imputa modalidade culposa por negligência na manutenção de equipamentos. Como a Lei trata a modalidade culposa desse crime?',
      alternativas: [
        { id: 'a', texto: 'Não há modalidade culposa; o crime de poluição é sempre doloso.' },
        { id: 'b', texto: 'Há previsão expressa de modalidade culposa, com pena menor que a da forma dolosa.' },
        { id: 'c', texto: 'A modalidade culposa converte o crime em contravenção.' },
        { id: 'd', texto: 'A culpa exclui a tipicidade ambiental.' },
      ],
      corretaId: 'b',
      explicacao:
        'O § 1º do art. 54 da Lei 9.605/1998 prevê expressamente a modalidade culposa do crime de poluição, com pena de detenção de 6 meses a 1 ano e multa, distinta e mais branda do que a prevista para a forma dolosa do caput.',
      baseLegal: 'art. 54, § 1º, Lei 9.605/1998',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'ambientais-d1',
      dificuldade: 'dificil',
      enunciado:
        'A defesa da pessoa jurídica sustenta a impossibilidade de responsabilização penal por ausência de capacidade de ação e culpabilidade. Qual o fundamento que sustenta, no direito brasileiro, a responsabilidade penal da pessoa jurídica em matéria ambiental?',
      alternativas: [
        { id: 'a', texto: 'Apenas a doutrina, sem qualquer base normativa.' },
        { id: 'b', texto: 'A própria Constituição prevê a sujeição da pessoa jurídica a sanções penais por condutas lesivas ao meio ambiente, concretizada pela Lei 9.605/1998.' },
        { id: 'c', texto: 'Somente o direito administrativo, jamais o penal.' },
        { id: 'd', texto: 'A responsabilidade penal da pessoa jurídica é vedada pela Constituição.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 225, § 3º, da Constituição prevê que as condutas lesivas ao meio ambiente sujeitam os infratores, pessoas físicas ou jurídicas, a sanções penais e administrativas, fundamento concretizado pelo art. 3º da Lei 9.605/1998.',
      baseLegal: 'art. 225, § 3º, CF; art. 3º, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-d2',
      dificuldade: 'dificil',
      enunciado:
        'Seu cliente, ribeirinho de baixa renda, foi denunciado por pescar exemplar de fauna aquática em período proibido, mas em pequena quantidade e para subsistência. Qual a tese defensiva tecnicamente mais robusta?',
      alternativas: [
        { id: 'a', texto: 'A conduta é sempre crime, sem qualquer excludente possível.' },
        { id: 'b', texto: 'A aplicação do princípio da insignificância e do reconhecimento da pesca de subsistência, conforme jurisprudência, pode afastar a tipicidade material no caso concreto.' },
        { id: 'c', texto: 'A pena deve ser convertida em prisão preventiva.' },
        { id: 'd', texto: 'A responsabilidade recai obrigatoriamente sobre pessoa jurídica.' },
      ],
      corretaId: 'b',
      explicacao:
        'A jurisprudência admite, no crime de pesca em período ou local proibido, a incidência do princípio da insignificância e o reconhecimento da pesca artesanal de subsistência, em pequena monta, como aptos a afastar a tipicidade material em casos concretos, à luz da lesividade ao bem jurídico.',
      baseLegal: 'art. 34, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'A reparação do dano ambiental, por ter natureza propter rem, pode ser exigida do atual proprietário do imóvel ainda que o dano tenha sido causado por anterior possuidor, sem que isso configure responsabilidade penal automática do adquirente.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A obrigação de reparar o dano ambiental tem natureza propter rem, acompanhando o imóvel e podendo ser exigida do atual titular na esfera civil. Isso, porém, não se confunde com a responsabilidade penal, que é pessoal e exige conduta e culpabilidade próprias do agente.',
      baseLegal: 'art. 225, § 3º, CF; art. 3º, Lei 9.605/1998; Súmula 623, STJ',
      revisado: false,
    },
    {
      id: 'ambientais-d4',
      dificuldade: 'dificil',
      enunciado:
        'O juiz dosou a multa de seu cliente em valor incompatível com sua capacidade econômica, tornando-a inócua. A defesa recorre. Qual a regra específica da Lei de Crimes Ambientais sobre a fixação da multa?',
      alternativas: [
        { id: 'a', texto: 'A multa ambiental segue exclusivamente o Código Penal, sem qualquer particularidade.' },
        { id: 'b', texto: 'Se a multa, mesmo no máximo, mostrar-se ineficaz diante da vantagem econômica auferida, pode ser aumentada até o triplo, e sua fixação deve considerar a situação econômica do infrator.' },
        { id: 'c', texto: 'A multa ambiental é fixa e invariável.' },
        { id: 'd', texto: 'A multa não pode jamais ultrapassar o valor do salário mínimo.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 18 da Lei 9.605/1998 prevê que a multa, calculada segundo o Código Penal, pode ser aumentada até o triplo se revelada ineficaz, ainda que aplicada no valor máximo, considerando-se o proveito econômico auferido, em harmonia com a situação econômica do infrator (art. 6º).',
      baseLegal: 'arts. 6º e 18, Lei 9.605/1998',
      revisado: false,
    },
    {
      id: 'ambientais-d5',
      dificuldade: 'dificil',
      enunciado:
        'Discute-se a competência para julgar crime ambiental consistente em supressão de vegetação em área que integra unidade de conservação federal e bem da União. Qual a competência tende a prevalecer?',
      alternativas: [
        { id: 'a', texto: 'Sempre da Justiça Estadual, por se tratar de crime ambiental.' },
        { id: 'b', texto: 'Da Justiça Federal, quando o crime atinge bens, serviços ou interesse direto e específico da União, suas autarquias ou empresas públicas, como unidade de conservação federal.' },
        { id: 'c', texto: 'Do Tribunal do Júri.' },
        { id: 'd', texto: 'Da Justiça do Trabalho.' },
      ],
      corretaId: 'b',
      explicacao:
        'A competência para crimes ambientais é, em regra, da Justiça Estadual, salvo quando houver lesão a bens, serviços ou interesse direto e específico da União, suas autarquias ou empresas públicas, como ocorre em unidades de conservação federais, hipótese que atrai a Justiça Federal.',
      baseLegal: 'art. 109, IV, CF; Lei 9.605/1998; Súmula 91, STJ (cancelada — analisar caso a caso)',
      revisado: false,
    },
    {
      id: 'ambientais-d6',
      dificuldade: 'dificil',
      enunciado:
        'Sentenciada a pessoa jurídica de seu cliente, o juiz determinou a desconsideração da personalidade para alcançar o patrimônio dos sócios e garantir a reparação do dano. Qual a previsão da Lei 9.605/1998 sobre isso?',
      alternativas: [
        { id: 'a', texto: 'A lei não admite, em hipótese alguma, a desconsideração da personalidade jurídica.' },
        { id: 'b', texto: 'A lei admite a desconsideração da pessoa jurídica sempre que sua personalidade for obstáculo ao ressarcimento de prejuízos causados à qualidade do meio ambiente.' },
        { id: 'c', texto: 'A desconsideração é automática em todo crime ambiental.' },
        { id: 'd', texto: 'A desconsideração transforma os sócios em réus penais por presunção.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 4º da Lei 9.605/1998 autoriza a desconsideração da personalidade jurídica sempre que esta for obstáculo ao ressarcimento de prejuízos causados à qualidade do meio ambiente, instituto voltado à reparação patrimonial, sem implicar responsabilização penal automática dos sócios.',
      baseLegal: 'art. 4º, Lei 9.605/1998',
      revisado: false,
    },
  ],
}
