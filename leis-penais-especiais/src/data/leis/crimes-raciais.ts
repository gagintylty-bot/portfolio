import type { Lei } from '../types'

/**
 * Crimes Raciais (7.716/1989).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "crimes-raciais",
  numero: "7.716/1989",
  nome: "Crimes Raciais",
  slug: "crimes-raciais",
  resumo:
    "Define os crimes resultantes de preconceito de raça ou de cor, entre outros. Distingue a injúria racial do racismo e prevê condutas como recusa ou impedimento de acesso em razão de discriminação.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'crimes-raciais-f1',
      dificuldade: 'facil',
      enunciado:
        'O gerente de uma boate impede a entrada de um cliente exclusivamente em razão da cor da sua pele, declarando que ali aquele perfil de pessoa não é bem-vindo. Em qual diploma legal a conduta se enquadra como crime?',
      alternativas: [
        { id: 'a', texto: 'Na Lei das Contravenções Penais.' },
        { id: 'b', texto: 'Na Lei 7.716/1989, que define os crimes de preconceito de raça ou de cor.' },
        { id: 'c', texto: 'Apenas no Código de Defesa do Consumidor.' },
        { id: 'd', texto: 'Em nenhum, por se tratar de mero ilícito civil.' },
      ],
      corretaId: 'b',
      explicacao:
        'Impedir o acesso de alguém a estabelecimento aberto ao público em razão de raça ou cor é crime tipificado na Lei 7.716/1989, que define os crimes resultantes de preconceito de raça ou de cor.',
      baseLegal: 'art. 1º, Lei 7.716/1989',
      revisado: false,
    },
    {
      id: 'crimes-raciais-f2',
      dificuldade: 'facil',
      enunciado:
        'A defesa quer destacar ao juiz a pena base do crime de impedir ou recusar acesso a estabelecimento comercial por discriminação de raça ou cor. Qual a espécie de pena privativa de liberdade prevista?',
      alternativas: [
        { id: 'a', texto: 'Detenção.' },
        { id: 'b', texto: 'Reclusão.' },
        { id: 'c', texto: 'Prisão simples.' },
        { id: 'd', texto: 'Não há pena privativa de liberdade, apenas multa.' },
      ],
      corretaId: 'b',
      explicacao:
        'Os crimes da Lei 7.716/1989, como o de recusar ou impedir acesso a estabelecimento comercial, são punidos com reclusão, e não com detenção ou prisão simples.',
      baseLegal: 'art. 5º, Lei 7.716/1989',
      revisado: false,
    },
    {
      id: 'crimes-raciais-f3',
      dificuldade: 'facil',
      enunciado:
        'Em uma discussão de trânsito, o motorista xinga o outro condutor utilizando expressões depreciativas referentes à sua cor, com o intuito de ofender a honra daquela pessoa específica. Como se classifica, em regra, essa conduta?',
      alternativas: [
        { id: 'a', texto: 'Injúria racial, modalidade qualificada de injúria.' },
        { id: 'b', texto: 'Difamação simples.' },
        { id: 'c', texto: 'Conduta atípica.' },
        { id: 'd', texto: 'Calúnia.' },
      ],
      corretaId: 'a',
      explicacao:
        'Ofender a honra de pessoa determinada com utilização de elementos referentes a raça ou cor caracteriza, em regra, a injúria racial, prevista no Código Penal. Distingue-se do racismo da Lei 7.716/1989, que atinge um grupo ou coletividade.',
      baseLegal: 'art. 140, § 3º, CP',
      revisado: false,
    },
    {
      id: 'crimes-raciais-f4',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: segundo a Constituição Federal, a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A Constituição estabelece que a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei. Trata-se de mandado constitucional de criminalização.',
      baseLegal: 'art. 5º, XLII, CF',
      revisado: false,
    },
    {
      id: 'crimes-raciais-f5',
      dificuldade: 'facil',
      enunciado:
        'O dono de um hotel recusa hospedagem a uma família por preconceito de cor. Qual é a conduta nuclear que o tipo penal busca reprimir nesse caso?',
      alternativas: [
        { id: 'a', texto: 'Cobrar preço abusivo da família.' },
        { id: 'b', texto: 'Recusar ou impedir hospedagem em razão da discriminação racial.' },
        { id: 'c', texto: 'Deixar de emitir nota fiscal.' },
        { id: 'd', texto: 'Apenas tratar a família com grosseria.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 7.716/1989 tipifica expressamente a recusa ou impedimento de hospedagem em hotel, pensão, estalagem ou estabelecimento similar em razão de preconceito de raça ou cor.',
      baseLegal: 'art. 7º, Lei 7.716/1989',
      revisado: false,
    },
    {
      id: 'crimes-raciais-f6',
      dificuldade: 'facil',
      enunciado:
        'A defesa pretende esclarecer ao cliente qual o bem jurídico protegido pela Lei 7.716/1989. Qual a resposta mais adequada?',
      alternativas: [
        { id: 'a', texto: 'O patrimônio do estabelecimento comercial.' },
        { id: 'b', texto: 'A dignidade da pessoa humana e a igualdade, contra discriminações de raça, cor, etnia, religião ou procedência nacional.' },
        { id: 'c', texto: 'A ordem econômica e a livre concorrência.' },
        { id: 'd', texto: 'A administração da justiça.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei tutela a dignidade da pessoa humana e o princípio da igualdade, reprimindo condutas discriminatórias fundadas em raça, cor, etnia, religião ou procedência nacional.',
      baseLegal: 'art. 1º, Lei 7.716/1989; art. 5º, caput, CF',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'crimes-raciais-m1',
      dificuldade: 'medio',
      enunciado:
        'Em audiência, surge a controvérsia sobre a diferença entre injúria racial e o racismo do art. 20 da Lei 7.716/1989. Qual o critério tradicionalmente apontado para distinguir as figuras?',
      alternativas: [
        { id: 'a', texto: 'A injúria racial exige vítima determinada, enquanto o racismo atinge um grupo ou coletividade.' },
        { id: 'b', texto: 'A injúria racial é sempre culposa e o racismo é doloso.' },
        { id: 'c', texto: 'Não há diferença alguma entre as figuras.' },
        { id: 'd', texto: 'A injúria racial é mais grave que o racismo.' },
      ],
      corretaId: 'a',
      explicacao:
        'Tradicionalmente, a injúria racial dirige-se a pessoa determinada, ofendendo sua honra com elementos de raça ou cor, ao passo que o racismo do art. 20 atinge um grupo ou coletividade indeterminada. A jurisprudência recente, contudo, vem aproximando os regimes, reconhecendo a imprescritibilidade da injúria racial.',
      baseLegal: 'art. 20, Lei 7.716/1989; art. 140, § 3º, CP',
      revisado: false,
    },
    {
      id: 'crimes-raciais-m2',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: o Supremo Tribunal Federal, ao julgar a ADO 26 e o MI 4.733, equiparou a homofobia e a transfobia ao crime de racismo, enquadrando tais condutas na Lei 7.716/1989 até que o Congresso legisle sobre o tema.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'No julgamento da ADO 26 e do MI 4.733, o STF reconheceu a omissão legislativa e enquadrou a homofobia e a transfobia no conceito de racismo da Lei 7.716/1989, em interpretação conforme à Constituição, até a edição de lei específica.',
      baseLegal: 'Lei 7.716/1989; STF, ADO 26 e MI 4.733',
      revisado: false,
    },
    {
      id: 'crimes-raciais-m3',
      dificuldade: 'medio',
      enunciado:
        'A denúncia imputa ao réu a conduta de praticar, induzir ou incitar a discriminação ou o preconceito de raça por meio de publicações em rede social. Em qual dispositivo a acusação tende a se fundamentar?',
      alternativas: [
        { id: 'a', texto: 'No art. 20 da Lei 7.716/1989, que pune praticar, induzir ou incitar a discriminação ou preconceito.' },
        { id: 'b', texto: 'No art. 28 da Lei de Drogas.' },
        { id: 'c', texto: 'No crime de desacato.' },
        { id: 'd', texto: 'No crime de falsa identidade.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 20 da Lei 7.716/1989 pune praticar, induzir ou incitar a discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional, com causa de aumento quando cometido por meios de comunicação social ou publicação de qualquer natureza.',
      baseLegal: 'art. 20, caput e § 2º, Lei 7.716/1989',
      revisado: false,
    },
    {
      id: 'crimes-raciais-m4',
      dificuldade: 'medio',
      enunciado:
        'Réu condenado por crime do art. 20 utilizou a internet para difundir mensagens discriminatórias. Além da pena, qual providência o juiz pode determinar como efeito específico previsto na lei?',
      alternativas: [
        { id: 'a', texto: 'A perda do cargo público em qualquer hipótese.' },
        { id: 'b', texto: 'A cessação das transmissões e o recolhimento ou a busca e apreensão dos exemplares do material discriminatório.' },
        { id: 'c', texto: 'A conversão da pena em multa única.' },
        { id: 'd', texto: 'A interdição perpétua de direitos políticos.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 7.716/1989 prevê, para os crimes do art. 20, a possibilidade de o juiz determinar, sob pena de desobediência, o recolhimento ou a busca e apreensão dos exemplares do material e a cessação das respectivas transmissões.',
      baseLegal: 'art. 20, § 3º, Lei 7.716/1989',
      revisado: false,
    },
    {
      id: 'crimes-raciais-m5',
      dificuldade: 'medio',
      enunciado:
        'O cliente, professor de uma escola pública, é acusado de impedir matrícula de aluno por discriminação racial. A defesa questiona a tipicidade. Como a lei trata a discriminação no acesso ao ensino?',
      alternativas: [
        { id: 'a', texto: 'A lei é silente quanto ao acesso a estabelecimentos de ensino.' },
        { id: 'b', texto: 'A lei tipifica expressamente recusar, negar ou impedir a inscrição ou ingresso de aluno em estabelecimento de ensino por discriminação.' },
        { id: 'c', texto: 'A conduta só é crime se a escola for privada.' },
        { id: 'd', texto: 'A conduta configura apenas infração administrativa.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 7.716/1989 tipifica de forma autônoma a recusa, negativa ou impedimento de inscrição ou ingresso de aluno em estabelecimento de ensino público ou privado em razão de discriminação de raça, cor, etnia, religião ou procedência nacional.',
      baseLegal: 'art. 6º, Lei 7.716/1989',
      revisado: false,
    },
    {
      id: 'crimes-raciais-m6',
      dificuldade: 'medio',
      enunciado:
        'Diante de uma denúncia por injúria racial, o defensor avalia a iniciativa da ação penal. Após as alterações legislativas que reforçaram o caráter racista da conduta, qual a tendência quanto à natureza da ação na injúria racial?',
      alternativas: [
        { id: 'a', texto: 'Ação penal privada, dependente sempre de queixa-crime.' },
        { id: 'b', texto: 'Ação penal pública incondicionada, em sintonia com o tratamento dado ao racismo.' },
        { id: 'c', texto: 'Ação penal pública condicionada à requisição do Ministro da Justiça.' },
        { id: 'd', texto: 'Não há ação penal possível.' },
      ],
      corretaId: 'b',
      explicacao:
        'Com a Lei 14.532/2023, a injúria racial passou a ser tratada de forma equiparada ao racismo, inclusive quanto à ação penal pública incondicionada e à imprescritibilidade, reforçando a tutela contra a discriminação.',
      baseLegal: 'Lei 14.532/2023; art. 5º, XLII, CF',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'crimes-raciais-d1',
      dificuldade: 'dificil',
      enunciado:
        'O cliente foi condenado por injúria racial praticada em 2015, e a defesa pretende sustentar a prescrição da pretensão punitiva. Como a evolução jurisprudencial e legislativa impacta esse argumento?',
      alternativas: [
        { id: 'a', texto: 'A prescrição é automática, pois a injúria racial nunca foi equiparada ao racismo.' },
        { id: 'b', texto: 'O STF, no HC 154.248, reconheceu a imprescritibilidade da injúria racial por seu caráter racista, fragilizando a tese de prescrição.' },
        { id: 'c', texto: 'A imprescritibilidade só alcança crimes contra a vida.' },
        { id: 'd', texto: 'A injúria racial sempre foi imprescritível desde 1989.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF, ao julgar o HC 154.248, reconheceu que a injúria racial é espécie do gênero racismo e, portanto, imprescritível, alinhando-a ao art. 5º, XLII, da Constituição. Isso enfraquece a tese de prescrição da pretensão punitiva.',
      baseLegal: 'art. 5º, XLII, CF; STF, HC 154.248',
      revisado: false,
    },
    {
      id: 'crimes-raciais-d2',
      dificuldade: 'dificil',
      enunciado:
        'A acusação narra ofensas raciais proferidas por brasileiro em rede social acessível de qualquer país, com vítima coletiva. Há discussão sobre a competência. Qual o critério mais consistente para definir o juízo competente?',
      alternativas: [
        { id: 'a', texto: 'É sempre competência da Justiça Estadual, sem exceções.' },
        { id: 'b', texto: 'Pode atrair a competência da Justiça Federal quando a conduta, por meio da internet, ultrapassa fronteiras nacionais, atraindo tratado internacional de repressão à discriminação.' },
        { id: 'c', texto: 'A competência é do Tribunal do Júri.' },
        { id: 'd', texto: 'A competência é da Justiça do Trabalho.' },
      ],
      corretaId: 'b',
      explicacao:
        'Quando o crime de discriminação racial é praticado pela internet com potencial transnacional e envolve compromisso assumido em tratado internacional de combate à discriminação, pode-se firmar a competência da Justiça Federal. Do contrário, prevalece a Justiça Estadual.',
      baseLegal: 'art. 109, V, CF; Lei 7.716/1989',
      revisado: false,
    },
    {
      id: 'crimes-raciais-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Afirmação para julgar: como os crimes da Lei 7.716/1989 são punidos com reclusão e a injúria racial é equiparada ao racismo, tais delitos não admitem suspensão condicional do processo nem transação penal, por não serem de menor potencial ofensivo na maioria das figuras.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A maioria das figuras da Lei 7.716/1989 comina reclusão em patamares incompatíveis com o conceito de menor potencial ofensivo e com a suspensão condicional do processo. Somado ao tratamento agravado dado à discriminação racial, afasta-se, em regra, a aplicação dos institutos despenalizadores da Lei 9.099/1995.',
      baseLegal: 'Lei 7.716/1989; art. 89, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'crimes-raciais-d4',
      dificuldade: 'dificil',
      enunciado:
        'Na sentença, o juiz reconhece que o réu, funcionário público, valeu-se do cargo para praticar o crime de discriminação racial. Qual a repercussão prevista na própria Lei 7.716/1989?',
      alternativas: [
        { id: 'a', texto: 'Nenhuma, pois a condição funcional é irrelevante.' },
        { id: 'b', texto: 'A pena é aumentada quando o crime é cometido por funcionário público no exercício de suas funções.' },
        { id: 'c', texto: 'A pena é reduzida em razão da função pública.' },
        { id: 'd', texto: 'O crime se transforma em prevaricação.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Lei 7.716/1989 prevê aumento de pena quando o crime de discriminação é cometido por funcionário público no exercício de suas funções, dada a maior reprovabilidade da conduta praticada por quem deveria zelar pela igualdade.',
      baseLegal: 'art. 16, Lei 7.716/1989',
      revisado: false,
    },
    {
      id: 'crimes-raciais-d5',
      dificuldade: 'dificil',
      enunciado:
        'A defesa sustenta a atipicidade ao argumento de que a ofensa, embora com conotação racial, dirigiu-se a pessoa determinada e não a um grupo, devendo ser classificada como injúria racial, e não como racismo do art. 20. Por que essa distinção ainda importa na prática?',
      alternativas: [
        { id: 'a', texto: 'Porque permite definir a tipificação correta e os respectivos efeitos, ainda que ambas tenham caráter racista e tratamento severo.' },
        { id: 'b', texto: 'Porque a injúria racial é fato atípico.' },
        { id: 'c', texto: 'Porque o racismo do art. 20 é crime culposo.' },
        { id: 'd', texto: 'Porque a injúria racial é contravenção penal.' },
      ],
      corretaId: 'a',
      explicacao:
        'A correta subsunção entre injúria racial (vítima determinada, ofensa à honra) e racismo do art. 20 (discriminação ou incitação contra grupo) define a tipificação adequada e seus efeitos. Embora a jurisprudência e a Lei 14.532/2023 tenham aproximado os regimes, a distinção fática permanece relevante para a imputação.',
      baseLegal: 'art. 20, Lei 7.716/1989; art. 140, § 3º, CP',
      revisado: false,
    },
    {
      id: 'crimes-raciais-d6',
      dificuldade: 'dificil',
      enunciado:
        'No curso da instrução, percebe-se que o conjunto probatório indica apenas ofensa genérica de baixo calão, sem qualquer elemento referente a raça, cor, etnia, religião ou procedência nacional. Qual a consequência técnica mais adequada quanto ao crime racial imputado?',
      alternativas: [
        { id: 'a', texto: 'A condenação deve ser mantida por presunção de discriminação.' },
        { id: 'b', texto: 'Sem elemento discriminatório racial concreto, o tipo da Lei 7.716/1989 não se configura, impondo-se a absolvição quanto a esse crime por atipicidade.' },
        { id: 'c', texto: 'A conduta deve ser reclassificada para tráfico.' },
        { id: 'd', texto: 'A ausência de prova racial agrava a pena.' },
      ],
      corretaId: 'b',
      explicacao:
        'O dolo de discriminar em razão de raça, cor, etnia, religião ou procedência nacional é elementar dos crimes da Lei 7.716/1989. Ausente o componente discriminatório racial, falta tipicidade, devendo o acusado ser absolvido quanto à imputação racial, sem prejuízo de eventual crime contra a honra.',
      baseLegal: 'art. 1º, Lei 7.716/1989; art. 386, III, CPP',
      revisado: false,
    },
  ],
}
