import type { Lei } from '../types'

/**
 * Lei de Tortura (9.455/1997).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. 3 do tipo V/F. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: 'tortura',
  numero: '9.455/1997',
  nome: 'Lei de Tortura',
  slug: 'lei-de-tortura',
  resumo:
    'Define e pune o crime de tortura em suas diversas modalidades, inclusive a tortura-castigo e a omissão de quem tinha o dever de evitá-la. Prevê causas de aumento e efeitos como a perda do cargo.',
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'tortura-f1',
      dificuldade: 'facil',
      enunciado:
        'Um agente constrange alguém, mediante grave ameaça e intenso sofrimento físico, com o fim de obter informação ou confissão. Qual modalidade de tortura se configura?',
      alternativas: [
        { id: 'a', texto: 'Tortura-prova (para obter informação, declaração ou confissão).' },
        { id: 'b', texto: 'Tortura-castigo.' },
        { id: 'c', texto: 'Tortura por omissão.' },
        { id: 'd', texto: 'Maus-tratos do Código Penal.' },
      ],
      corretaId: 'a',
      explicacao:
        'Constranger alguém com emprego de violência ou grave ameaça, causando sofrimento físico ou mental, com o fim de obter informação, declaração ou confissão, configura a tortura-prova, prevista no art. 1º, I, a, da Lei 9.455/1997.',
      baseLegal: 'art. 1º, I, a, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-f2',
      dificuldade: 'facil',
      enunciado:
        'Uma pessoa submete quem está sob sua guarda a intenso sofrimento físico como forma de aplicar castigo pessoal. Qual a tipificação adequada?',
      alternativas: [
        { id: 'a', texto: 'Tortura-castigo (art. 1º, II).' },
        { id: 'b', texto: 'Lesão corporal leve.' },
        { id: 'c', texto: 'Tortura-prova.' },
        { id: 'd', texto: 'Constrangimento ilegal.' },
      ],
      corretaId: 'a',
      explicacao:
        'Submeter alguém sob guarda, poder ou autoridade, com emprego de violência ou grave ameaça, a intenso sofrimento físico ou mental, como forma de aplicar castigo pessoal ou medida de caráter preventivo, configura a tortura-castigo do art. 1º, II.',
      baseLegal: 'art. 1º, II, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-f3',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: o crime de tortura é equiparado a hediondo, sendo insuscetível de graça, anistia, indulto e fiança.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A afirmação é verdadeira. A Constituição equipara a tortura a crime hediondo, e a própria Lei 9.455/1997 dispõe que o condenado por tortura iniciará o cumprimento da pena em regime fechado, sendo o crime insuscetível de graça, anistia, indulto e fiança.',
      baseLegal: 'art. 5º, XLIII, CF; art. 1º, §§ 6º e 7º, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-f4',
      dificuldade: 'facil',
      enunciado:
        'Um carcereiro presencia colegas torturando um preso e, podendo evitar a conduta, nada faz, embora tivesse o dever de agir. Como a lei trata essa omissão?',
      alternativas: [
        { id: 'a', texto: 'A omissão é atípica, pois ele não praticou a tortura.' },
        {
          id: 'b',
          texto:
            'Responde por crime próprio de omissão, com pena de detenção, por se omitir tendo o dever de evitar ou apurar a tortura.',
        },
        { id: 'c', texto: 'Responde apenas administrativamente.' },
        { id: 'd', texto: 'Responde por favorecimento pessoal.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 1º, § 2º, pune com detenção de 1 a 4 anos quem se omite em face das condutas de tortura, quando tinha o dever de evitá-las ou apurá-las. Trata-se de modalidade omissiva própria, com pena distinta da tortura comissiva.',
      baseLegal: 'art. 1º, § 2º, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-f5',
      dificuldade: 'facil',
      enunciado:
        'Da condenação por tortura praticada por servidor público no exercício da função decorre, automaticamente, qual efeito específico previsto na lei?',
      alternativas: [
        { id: 'a', texto: 'Apenas multa.' },
        {
          id: 'b',
          texto:
            'A perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena.',
        },
        { id: 'c', texto: 'A suspensão dos direitos políticos por dois anos.' },
        { id: 'd', texto: 'Nenhum efeito além da pena privativa de liberdade.' },
      ],
      corretaId: 'b',
      explicacao:
        'A condenação por tortura acarreta, como efeito automático, a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.',
      baseLegal: 'art. 1º, § 5º, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-f6',
      dificuldade: 'facil',
      enunciado:
        'O réu, condenado por tortura, pleiteia o cumprimento da pena em regime inicial aberto. Qual a previsão expressa da Lei de Tortura sobre o regime inicial?',
      alternativas: [
        { id: 'a', texto: 'O regime inicial é necessariamente aberto.' },
        { id: 'b', texto: 'A lei prevê que a pena será cumprida inicialmente em regime fechado.' },
        { id: 'c', texto: 'O regime inicial é sempre semiaberto.' },
        { id: 'd', texto: 'A lei não trata do regime inicial.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 1º, § 7º, da Lei 9.455/1997 dispõe que o condenado por crime de tortura iniciará o cumprimento da pena em regime fechado, reforçando o tratamento rigoroso conferido a esse delito.',
      baseLegal: 'art. 1º, § 7º, Lei 9.455/1997',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'tortura-m1',
      dificuldade: 'medio',
      enunciado:
        'A defesa sustenta que, embora a lei imponha o regime inicial fechado, o STF teria abrandado essa regra. Qual o entendimento do STF sobre o regime inicial obrigatório?',
      alternativas: [
        { id: 'a', texto: 'O regime inicial fechado obrigatório é plenamente válido em qualquer caso.' },
        {
          id: 'b',
          texto:
            'O STF entende inconstitucional a imposição automática do regime inicial fechado, devendo o regime ser fixado conforme as circunstâncias e a pena.',
        },
        { id: 'c', texto: 'O regime inicial deve ser sempre aberto.' },
        { id: 'd', texto: 'A pena é convertida em restritiva de direitos.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF (HC 111.840), ao tratar de crimes hediondos e equiparados, afastou a obrigatoriedade do regime inicial fechado, entendendo que o regime deve ser fixado conforme a pena imposta e as circunstâncias do art. 33 do CP, o que se estende à tortura.',
      baseLegal: 'art. 1º, § 7º, Lei 9.455/1997; STF, HC 111.840; art. 33, CP',
      revisado: false,
    },
    {
      id: 'tortura-m2',
      dificuldade: 'medio',
      enunciado:
        'Durante a tortura, sobrevém culposamente a morte da vítima. Qual a consequência na dosimetria, segundo a Lei de Tortura?',
      alternativas: [
        { id: 'a', texto: 'Não há agravamento; aplica-se a pena base.' },
        {
          id: 'b',
          texto:
            'A pena é aumentada (qualificadora pelo resultado), com reclusão de 8 a 16 anos se resulta morte.',
        },
        { id: 'c', texto: 'A conduta é desclassificada para homicídio simples.' },
        { id: 'd', texto: 'Aplica-se apenas a pena de lesão corporal.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 1º, § 3º, qualifica a tortura pelo resultado: se resulta lesão corporal grave ou gravíssima, a pena é de reclusão de 4 a 10 anos; se resulta morte, a reclusão é de 8 a 16 anos. Trata-se de crime preterdoloso quanto ao resultado.',
      baseLegal: 'art. 1º, § 3º, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: a Lei de Tortura prevê causas de aumento de pena quando o crime é cometido por agente público, contra criança, gestante, adolescente ou maior de sessenta anos, ou mediante sequestro.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A afirmação é verdadeira. O art. 1º, § 4º, prevê aumento de pena de um sexto até um terço quando o crime é cometido por agente público; contra criança, gestante, portador de deficiência, adolescente ou maior de sessenta anos; ou mediante sequestro.',
      baseLegal: 'art. 1º, § 4º, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-m4',
      dificuldade: 'medio',
      enunciado:
        'A defesa argumenta que a tortura só pode ser praticada por agente público. A acusação contesta. Qual o entendimento correto sobre o sujeito ativo da tortura no direito brasileiro?',
      alternativas: [
        { id: 'a', texto: 'A tortura é crime próprio, exclusivo de agente público.' },
        {
          id: 'b',
          texto:
            'A tortura, em regra, é crime comum, podendo ser praticada por qualquer pessoa, e não apenas por agente público.',
        },
        { id: 'c', texto: 'Apenas militares podem praticar tortura.' },
        { id: 'd', texto: 'Apenas particulares podem praticar tortura.' },
      ],
      corretaId: 'b',
      explicacao:
        'Diferentemente de tratados que centram a tortura no agente estatal, a lei brasileira, em regra, tipifica a tortura como crime comum, que pode ser praticado por qualquer pessoa. A condição de agente público funciona como causa de aumento de pena.',
      baseLegal: 'art. 1º, caput e § 4º, I, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-m5',
      dificuldade: 'medio',
      enunciado:
        'A acusação imputa tortura a um pai que submeteu o filho a intenso sofrimento físico como castigo. A defesa pretende a desclassificação para maus-tratos. Qual o critério distintivo central?',
      alternativas: [
        { id: 'a', texto: 'A distinção depende apenas da idade da vítima.' },
        {
          id: 'b',
          texto:
            'A tortura-castigo exige intenso sofrimento físico ou mental imposto como castigo; os maus-tratos visam a fim de educação/disciplina sem esse intenso sofrimento como castigo cruel.',
        },
        { id: 'c', texto: 'Não há qualquer diferença entre os tipos.' },
        { id: 'd', texto: 'A tortura só existe se houver finalidade de obter confissão.' },
      ],
      corretaId: 'b',
      explicacao:
        'A tortura-castigo (art. 1º, II) caracteriza-se pelo intenso sofrimento físico ou mental imposto como castigo pessoal a quem está sob guarda ou autoridade. Os maus-tratos (art. 136, CP) decorrem de excesso nos meios de correção ou disciplina, sem o intenso sofrimento próprio da tortura.',
      baseLegal: 'art. 1º, II, Lei 9.455/1997; art. 136, CP',
      revisado: false,
    },
    {
      id: 'tortura-m6',
      dificuldade: 'medio',
      enunciado:
        'O réu condenado por tortura pleiteia, na execução, a progressão de regime. A defesa busca a fração aplicável. Qual a observação correta após o Pacote Anticrime?',
      alternativas: [
        { id: 'a', texto: 'A tortura admite progressão com 1/6, como crime comum.' },
        {
          id: 'b',
          texto:
            'Por ser equiparada a hediondo, a progressão observa as frações próprias da LEP (40% se primário sem morte; 50% com morte), conforme o Pacote Anticrime.',
        },
        { id: 'c', texto: 'A tortura não admite progressão de regime.' },
        { id: 'd', texto: 'A progressão depende de indulto presidencial.' },
      ],
      corretaId: 'b',
      explicacao:
        'A tortura é equiparada a hediondo, de modo que a progressão de regime segue as frações da LEP introduzidas pelo Pacote Anticrime, como 40% para o primário sem resultado morte e 50% para o primário com resultado morte.',
      baseLegal: 'art. 1º, § 7º, Lei 9.455/1997; art. 112, LEP, com redação da Lei 13.964/2019',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'tortura-d1',
      dificuldade: 'dificil',
      enunciado:
        'Servidor público é condenado por tortura. O juiz deixa de declarar, na sentença, a perda do cargo, sob o argumento de que seria necessária fundamentação específica, como no art. 92 do CP. Qual a abordagem mais técnica?',
      alternativas: [
        { id: 'a', texto: 'A perda do cargo na tortura depende de fundamentação específica, como no art. 92 do CP.' },
        {
          id: 'b',
          texto:
            'Na Lei de Tortura, a perda do cargo é efeito automático e específico da condenação, não dependendo de fundamentação concreta como a do art. 92 do CP.',
        },
        { id: 'c', texto: 'A perda do cargo nunca decorre da condenação por tortura.' },
        { id: 'd', texto: 'A perda do cargo só ocorre em caso de reincidência.' },
      ],
      corretaId: 'b',
      explicacao:
        'Diferentemente do art. 92 do CP (que exige declaração motivada), a Lei de Tortura prevê a perda do cargo, função ou emprego como efeito automático e específico da condenação, dispensando fundamentação concreta para sua imposição.',
      baseLegal: 'art. 1º, § 5º, Lei 9.455/1997; art. 92, CP',
      revisado: false,
    },
    {
      id: 'tortura-d2',
      dificuldade: 'dificil',
      enunciado:
        'A defesa pretende a substituição da pena privativa de liberdade por restritiva de direitos a réu condenado por tortura simples, à pena de 2 anos. A acusação invoca o regime inicial fechado. Qual a abordagem mais correta?',
      alternativas: [
        { id: 'a', texto: 'A substituição é sempre vedada pela natureza equiparada a hediondo.' },
        {
          id: 'b',
          texto:
            'A substituição pode ser analisada à luz dos requisitos do art. 44 do CP; havendo controvérsia, há precedentes admitindo a substituição quando preenchidos os requisitos legais, apesar do rigor da lei.',
        },
        { id: 'c', texto: 'A substituição é automática para penas até 4 anos.' },
        { id: 'd', texto: 'A substituição independe de qualquer requisito.' },
      ],
      corretaId: 'b',
      explicacao:
        'Embora o tratamento da tortura seja rigoroso (regime inicial fechado em tese), a substituição por restritivas de direitos deve ser avaliada conforme os requisitos objetivos e subjetivos do art. 44 do CP. Há divergência, mas a análise não é simplesmente afastada de plano.',
      baseLegal: 'art. 1º, § 7º, Lei 9.455/1997; art. 44, CP',
      revisado: false,
    },
    {
      id: 'tortura-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: a Lei de Tortura tem aplicação extraterritorial, podendo a lei brasileira incidir sobre crime de tortura cometido no exterior quando a vítima for brasileira ou o agente se encontrar em local sob jurisdição brasileira.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A afirmação é verdadeira. O art. 2º da Lei 9.455/1997 estabelece que ela se aplica ainda quando o crime não tenha sido cometido em território nacional, sendo a vítima brasileira ou estando o agente em local sob jurisdição brasileira, prevendo hipótese de extraterritorialidade.',
      baseLegal: 'art. 2º, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-d4',
      dificuldade: 'dificil',
      enunciado:
        'Policiais agridem brutalmente um suspeito já rendido e algemado, causando intenso sofrimento físico sem finalidade de obter confissão, apenas por vingança. A defesa pede desclassificação para lesão corporal. Qual a tese mais consistente da acusação?',
      alternativas: [
        { id: 'a', texto: 'Trata-se de lesão corporal, pois não houve finalidade de confissão.' },
        {
          id: 'b',
          texto:
            'A conduta pode configurar tortura-castigo, que não exige finalidade de confissão, bastando o intenso sofrimento imposto a quem está sob poder ou autoridade do agente.',
        },
        { id: 'c', texto: 'A conduta é atípica por ausência de dolo.' },
        { id: 'd', texto: 'Configura apenas abuso de autoridade, sem tortura.' },
      ],
      corretaId: 'b',
      explicacao:
        'A tortura-castigo (art. 1º, II) não exige finalidade de obter confissão. Basta o intenso sofrimento físico ou mental imposto, como castigo, a quem se encontra sob guarda, poder ou autoridade do agente, o que pode abranger o preso ou rendido em poder de policiais.',
      baseLegal: 'art. 1º, II, e § 4º, I, Lei 9.455/1997',
      revisado: false,
    },
    {
      id: 'tortura-d5',
      dificuldade: 'dificil',
      enunciado:
        'Discute-se se o crime de tortura, embora equiparado a hediondo, admite livramento condicional, e em que condições. Qual a observação tecnicamente correta?',
      alternativas: [
        { id: 'a', texto: 'A tortura jamais admite livramento condicional.' },
        {
          id: 'b',
          texto:
            'Admite-se livramento condicional após o cumprimento de mais de dois terços da pena, salvo se o condenado for reincidente específico em crimes hediondos ou equiparados, hipótese vedada.',
        },
        { id: 'c', texto: 'O livramento é concedido após um terço da pena, como crime comum.' },
        { id: 'd', texto: 'O livramento é automático após a metade da pena.' },
      ],
      corretaId: 'b',
      explicacao:
        'Como crime equiparado a hediondo, a tortura admite livramento condicional somente após o cumprimento de mais de dois terços da pena, sendo vedado o benefício ao reincidente específico em crimes hediondos e equiparados.',
      baseLegal: 'art. 83, V, CP; art. 5º, Lei 8.072/1990',
      revisado: false,
    },
    {
      id: 'tortura-d6',
      dificuldade: 'dificil',
      enunciado:
        'O réu pratica uma única tortura-prova que, em razão do mesmo contexto, resulta em lesão corporal gravíssima na vítima. A acusação pretende imputar tortura e lesão corporal gravíssima em concurso. Qual a abordagem correta?',
      alternativas: [
        { id: 'a', texto: 'Há concurso material entre tortura e lesão corporal gravíssima.' },
        {
          id: 'b',
          texto:
            'A lesão grave/gravíssima resultante da tortura funciona como qualificadora pelo resultado, não havendo concurso autônomo com o crime de lesão corporal.',
        },
        { id: 'c', texto: 'A lesão absorve a tortura.' },
        { id: 'd', texto: 'Ambos os crimes são atípicos.' },
      ],
      corretaId: 'b',
      explicacao:
        'Quando da tortura resulta lesão corporal grave ou gravíssima, aplica-se a forma qualificada pelo resultado (art. 1º, § 3º), com pena de reclusão de 4 a 10 anos. A lesão é absorvida como resultado qualificador, não havendo concurso autônomo com o crime de lesão corporal do CP.',
      baseLegal: 'art. 1º, § 3º, Lei 9.455/1997; art. 129, CP',
      revisado: false,
    },
  ],
}
