import type { Lei } from '../types'

/**
 * ESQUELETO — Lavagem de Capitais (9.613/1998).
 * Cenários ainda NÃO gerados (aguardando validação do padrão na Lei de Drogas).
 * ⚠️ RASCUNHO EDUCACIONAL — todo conteúdo precisará de revisão jurídica.
 */
export const lei: Lei = {
  id: "lavagem",
  numero: "9.613/1998",
  nome: "Lavagem de Capitais",
  slug: "lavagem-de-capitais",
  resumo:
    "Tipifica a ocultação ou dissimulação da origem de bens, direitos e valores provenientes de infração penal. Estrutura-se em fases (colocação, ocultação e integração) e prevê deveres de comunicação e a atuação do COAF.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'lavagem-f1',
      dificuldade: 'facil',
      enunciado:
        'Em uma denúncia, o Ministério Público descreve que seu cliente ocultou a origem de valores provenientes de um crime de corrupção. Qual a conduta nuclear do crime de lavagem de capitais?',
      alternativas: [
        { id: 'a', texto: 'Receber qualquer quantia em dinheiro, independentemente da origem.' },
        { id: 'b', texto: 'Ocultar ou dissimular a natureza, origem, localização ou propriedade de bens provenientes de infração penal.' },
        { id: 'c', texto: 'Deixar de declarar rendimentos ao Fisco.' },
        { id: 'd', texto: 'Manter conta bancária no exterior sem comunicar ao banco.' },
      ],
      corretaId: 'b',
      explicacao:
        'O caput do art. 1º descreve a conduta de ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores provenientes, direta ou indiretamente, de infração penal.',
      baseLegal: 'art. 1º, caput, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-f2',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Após a reforma promovida pela Lei 12.683/2012, o crime de lavagem só pode ter como antecedente um rol taxativo de crimes graves expressamente listados na lei.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'A Lei 12.683/2012 extinguiu o rol taxativo de crimes antecedentes. Atualmente, qualquer infração penal (crime ou contravenção) pode figurar como antecedente da lavagem, bastando que dela provenham os bens ocultados ou dissimulados.',
      baseLegal: 'art. 1º, caput, Lei 9.613/1998 (com redação da Lei 12.683/2012)',
      revisado: false,
    },
    {
      id: 'lavagem-f3',
      dificuldade: 'facil',
      enunciado:
        'Numa audiência, discute-se qual órgão é responsável, no Brasil, por receber comunicações de operações financeiras suspeitas e produzir inteligência financeira. Qual é esse órgão?',
      alternativas: [
        { id: 'a', texto: 'O COAF (Conselho de Controle de Atividades Financeiras).' },
        { id: 'b', texto: 'O CADE.' },
        { id: 'c', texto: 'O CNJ.' },
        { id: 'd', texto: 'A Receita Federal, com exclusividade.' },
      ],
      corretaId: 'a',
      explicacao:
        'O COAF é a unidade de inteligência financeira brasileira, responsável por receber, examinar e identificar ocorrências suspeitas de lavagem, além de aplicar penas administrativas no âmbito da lei.',
      baseLegal: 'art. 14, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-f4',
      dificuldade: 'facil',
      enunciado:
        'O juiz pergunta qual a pena prevista no caput do art. 1º para o crime de lavagem de capitais. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'Detenção de 6 meses a 2 anos e multa.' },
        { id: 'b', texto: 'Reclusão de 3 a 10 anos e multa.' },
        { id: 'c', texto: 'Reclusão de 1 a 4 anos e multa.' },
        { id: 'd', texto: 'Apenas multa, sem pena privativa de liberdade.' },
      ],
      corretaId: 'b',
      explicacao:
        'A pena do caput do art. 1º é de reclusão de 3 a 10 anos e multa, aplicável também a quem oculta ou dissimula bens provenientes de infração penal.',
      baseLegal: 'art. 1º, caput, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-f5',
      dificuldade: 'facil',
      enunciado:
        'Em uma palestra interna do escritório, discute-se a estrutura clássica do processo de lavagem. Quais são, doutrinariamente, as três fases?',
      alternativas: [
        { id: 'a', texto: 'Denúncia, instrução e sentença.' },
        { id: 'b', texto: 'Colocação, ocultação (dissimulação) e integração.' },
        { id: 'c', texto: 'Apreensão, perdimento e leilão.' },
        { id: 'd', texto: 'Investigação, indiciamento e julgamento.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lavagem é tradicionalmente descrita em três fases: colocação (introdução do dinheiro sujo no sistema), ocultação ou dissimulação (afastamento da origem ilícita) e integração (reintrodução dos valores na economia com aparência lícita).',
      baseLegal: 'art. 1º, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-f6',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A lei prevê causa especial de aumento de pena quando o crime de lavagem é cometido de forma reiterada ou por intermédio de organização criminosa.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O § 4º do art. 1º prevê aumento de pena de um a dois terços se os crimes definidos na lei forem cometidos de forma reiterada ou por intermédio de organização criminosa.',
      baseLegal: 'art. 1º, § 4º, Lei 9.613/1998',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'lavagem-m1',
      dificuldade: 'medio',
      enunciado:
        'O réu foi denunciado por lavagem, mas a defesa sustenta que ele não participou do crime antecedente (corrupção). O juízo afirma que a condenação por lavagem depende de condenação prévia pelo antecedente. Qual a melhor tese acusatória contra esse argumento?',
      alternativas: [
        { id: 'a', texto: 'A lavagem só pode ser punida após o trânsito em julgado da condenação pelo crime antecedente.' },
        { id: 'b', texto: 'O processo e o julgamento da lavagem independem do processo e julgamento do crime antecedente, bastando indícios de sua existência.' },
        { id: 'c', texto: 'A lavagem exige que o réu seja o mesmo autor do crime antecedente.' },
        { id: 'd', texto: 'A absolvição no antecedente sempre impede a condenação por lavagem.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 2º, II, estabelece a autonomia da lavagem: o processo e o julgamento independem do processo e julgamento das infrações penais antecedentes, ainda que praticadas em outro país, bastando indícios suficientes da existência da infração antecedente.',
      baseLegal: 'art. 2º, II e § 1º, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-m2',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente, denunciado por lavagem, decide colaborar espontaneamente, prestando esclarecimentos que levam à apuração das infrações antecedentes e à localização dos bens. Que benefício a própria Lei de Lavagem prevê?',
      alternativas: [
        { id: 'a', texto: 'Extinção automática da punibilidade.' },
        { id: 'b', texto: 'Redução de pena de 1 a 2/3, cumprimento em regime aberto ou semiaberto, ou até substituição/perdão judicial pela colaboração.' },
        { id: 'c', texto: 'Conversão da pena em multa, em qualquer caso.' },
        { id: 'd', texto: 'Imunidade penal plena e irrestrita.' },
      ],
      corretaId: 'b',
      explicacao:
        'O § 5º do art. 1º prevê que a colaboração espontânea que leve à apuração das infrações, à identificação dos autores ou à localização dos bens permite reduzir a pena de 1 a 2/3, iniciar o cumprimento em regime aberto ou semiaberto, deixar de aplicar a pena ou substituí-la por restritiva de direitos.',
      baseLegal: 'art. 1º, § 5º, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-m3',
      dificuldade: 'medio',
      enunciado:
        'Durante a instrução, a defesa argumenta que o cliente apenas guardou o dinheiro, sem dolo de ocultar a origem ilícita, e que não havia sequer conhecimento da procedência criminosa. Qual o ponto técnico central dessa tese?',
      alternativas: [
        { id: 'a', texto: 'A lavagem admite a forma culposa, então o argumento é irrelevante.' },
        { id: 'b', texto: 'A lavagem exige dolo, sendo essencial demonstrar o conhecimento da origem ilícita dos bens.' },
        { id: 'c', texto: 'Basta a posse do dinheiro para configurar o crime, independentemente de dolo.' },
        { id: 'd', texto: 'O elemento subjetivo é presumido de forma absoluta pela apreensão.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lavagem é crime doloso e não admite modalidade culposa. É necessário demonstrar o conhecimento, ainda que por dolo eventual segundo parte da jurisprudência, da origem ilícita dos bens. A ausência desse elemento subjetivo afasta a tipicidade.',
      baseLegal: 'art. 1º, caput, Lei 9.613/1998; art. 18, CP',
      revisado: false,
    },
    {
      id: 'lavagem-m4',
      dificuldade: 'medio',
      enunciado:
        'O Ministério Público requer ao juízo medidas para garantir a futura reparação e o perdimento, recaindo sobre bens do investigado por lavagem. Qual providência cautelar a lei autoriza expressamente?',
      alternativas: [
        { id: 'a', texto: 'Apenas a prisão preventiva, jamais medidas patrimoniais.' },
        { id: 'b', texto: 'Apreensão ou sequestro de bens, direitos e valores do investigado, com possível alienação antecipada.' },
        { id: 'c', texto: 'A indisponibilidade só pode ser decretada após o trânsito em julgado.' },
        { id: 'd', texto: 'Somente o bloqueio de contas no exterior, nunca de bens no país.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei autoriza apreensão e sequestro de bens, direitos e valores do acusado, ou em nome de interpostas pessoas, objeto das infrações, prevendo inclusive a alienação antecipada para preservação do valor dos bens sujeitos a perdimento.',
      baseLegal: 'arts. 4º e 4º-A, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-m5',
      dificuldade: 'medio',
      enunciado:
        'A acusação atribui ao gerente de banco a omissão dolosa de comunicar ao COAF operação claramente suspeita de cliente. Qual a consequência prevista para o descumprimento dos deveres de comunicação pelas pessoas obrigadas?',
      alternativas: [
        { id: 'a', texto: 'Nenhuma, pois a comunicação é facultativa.' },
        { id: 'b', texto: 'Sujeição a sanções administrativas previstas na lei, como advertência, multa, inabilitação e cassação.' },
        { id: 'c', texto: 'Apenas responsabilidade civil, sem qualquer sanção administrativa.' },
        { id: 'd', texto: 'Prisão em flagrante obrigatória do gerente.' },
      ],
      corretaId: 'b',
      explicacao:
        'As pessoas obrigadas (instituições financeiras e outros sujeitos do art. 9º) que descumprem os deveres de identificação, registro e comunicação ficam sujeitas a sanções administrativas como advertência, multa, inabilitação temporária e cassação, aplicadas pelo órgão regulador ou pelo COAF.',
      baseLegal: 'arts. 10, 11 e 12, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-m6',
      dificuldade: 'medio',
      enunciado:
        'Discute-se a competência para processar lavagem cujo crime antecedente foi praticado em desfavor de bens da União, com operações de ocultação em diferentes estados. Qual o critério prevalente?',
      alternativas: [
        { id: 'a', texto: 'A competência é sempre da Justiça Estadual, em qualquer hipótese.' },
        { id: 'b', texto: 'Será da Justiça Federal quando praticada contra o sistema financeiro, a ordem econômico-financeira da União ou bens, serviços e interesses da União.' },
        { id: 'c', texto: 'A competência é definida exclusivamente pelo domicílio do réu.' },
        { id: 'd', texto: 'A lavagem é sempre de competência originária dos tribunais.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 2º, III, fixa a competência da Justiça Federal quando o crime antecedente for de sua competência, quando praticado contra o sistema financeiro e a ordem econômico-financeira, ou em detrimento de bens, serviços ou interesses da União, de suas entidades autárquicas ou empresas públicas.',
      baseLegal: 'art. 2º, III, Lei 9.613/1998; art. 109, CF',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'lavagem-d1',
      dificuldade: 'dificil',
      enunciado:
        'A defesa sustenta que a mera ocultação dos proveitos pelo próprio autor do crime antecedente seria mero exaurimento (autolavagem impunível). A acusação rebate. Qual o entendimento que predomina nos tribunais superiores?',
      alternativas: [
        { id: 'a', texto: 'A autolavagem é sempre impunível, pois constitui post factum não punível do crime antecedente.' },
        { id: 'b', texto: 'Admite-se a punição da autolavagem quando há atos autônomos de ocultação ou dissimulação que extrapolam o simples proveito do crime antecedente.' },
        { id: 'c', texto: 'A autolavagem só é punível se houver organização criminosa.' },
        { id: 'd', texto: 'A autolavagem foi expressamente revogada pela Lei 12.683/2012.' },
      ],
      corretaId: 'b',
      explicacao:
        'A jurisprudência admite a punição da autolavagem quando o autor do crime antecedente pratica condutas autônomas e idôneas de ocultação ou dissimulação, com desígnio próprio, não se confundindo com o mero proveito ou exaurimento do crime anterior.',
      baseLegal: 'art. 1º, Lei 9.613/1998; STF, AP 470; STJ, jurisprudência',
      revisado: false,
    },
    {
      id: 'lavagem-d2',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Reconhecida a extinção da punibilidade do crime antecedente pela prescrição, fica automaticamente impedida a persecução penal pelo crime de lavagem dele decorrente.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'Em razão da autonomia prevista no art. 2º, II, a extinção da punibilidade do crime antecedente, inclusive por prescrição, não impede, por si só, a persecução da lavagem, desde que existam indícios suficientes da existência material da infração antecedente.',
      baseLegal: 'art. 2º, II e § 1º, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-d3',
      dificuldade: 'dificil',
      enunciado:
        'O réu, advogado, recebeu honorários elevados em espécie de cliente investigado por tráfico. A acusação imputa lavagem. A defesa invoca a tese dos honorários maculados. Qual a abordagem mais consistente do ponto de vista técnico?',
      alternativas: [
        { id: 'a', texto: 'Todo recebimento de honorários por advogado configura lavagem automaticamente.' },
        { id: 'b', texto: 'É necessário demonstrar o dolo de ocultar a origem ilícita e a ciência da procedência criminosa, não bastando o mero recebimento dos valores pelo serviço advocatício efetivamente prestado.' },
        { id: 'c', texto: 'O recebimento de honorários é sempre atípico, vedada qualquer responsabilização.' },
        { id: 'd', texto: 'A lavagem por honorários dispensa qualquer análise do elemento subjetivo.' },
      ],
      corretaId: 'b',
      explicacao:
        'A discussão sobre honorários maculados exige análise concreta do dolo: a tipificação da lavagem depende da demonstração da intenção de ocultar/dissimular a origem ilícita e da ciência da procedência criminosa, não bastando o recebimento de valores por serviço efetivamente prestado e em montante compatível.',
      baseLegal: 'art. 1º, caput, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-d4',
      dificuldade: 'dificil',
      enunciado:
        'Em um acordo de colaboração premiada firmado em investigação de lavagem, o colaborador descumpre cláusulas e omite bens. O Ministério Público pretende a rescisão. Qual o efeito mais correto sobre as provas já produzidas?',
      alternativas: [
        { id: 'a', texto: 'A rescisão torna automaticamente nulas e inutilizáveis todas as provas decorrentes da colaboração.' },
        { id: 'b', texto: 'A rescisão por descumprimento afasta os benefícios ao colaborador, mas as provas e elementos válidos já produzidos podem, em regra, ser aproveitados.' },
        { id: 'c', texto: 'A colaboração premiada não pode ser rescindida em nenhuma hipótese.' },
        { id: 'd', texto: 'O descumprimento gera apenas multa, sem perda de benefícios.' },
      ],
      corretaId: 'b',
      explicacao:
        'A colaboração premiada é regida principalmente pela Lei 12.850/2013, aplicável à lavagem. O descumprimento pode ensejar rescisão e perda dos benefícios ao colaborador, mas as provas autônomas e validamente produzidas tendem a ser aproveitadas, conforme entendimento dos tribunais.',
      baseLegal: 'art. 1º, § 5º, Lei 9.613/1998; arts. 4º e 7º, Lei 12.850/2013',
      revisado: false,
    },
    {
      id: 'lavagem-d5',
      dificuldade: 'dificil',
      enunciado:
        'A acusação descreve um único episódio em que o réu transfere para conta de terceiro valor proveniente de peculato, sem nenhuma outra conduta. A defesa sustenta atipicidade da lavagem por ausência de autonomia frente ao antecedente. Qual o melhor enfoque?',
      alternativas: [
        { id: 'a', texto: 'Toda transferência de valor ilícito configura, isoladamente, lavagem autônoma.' },
        { id: 'b', texto: 'É preciso aferir se houve ato idôneo de ocultação ou dissimulação da origem, distinto do mero deslocamento do proveito do crime antecedente.' },
        { id: 'c', texto: 'A lavagem prescinde de qualquer conduta de ocultação, bastando o proveito.' },
        { id: 'd', texto: 'A atipicidade depende exclusivamente do valor envolvido.' },
      ],
      corretaId: 'b',
      explicacao:
        'A configuração da lavagem exige conduta de ocultar ou dissimular dotada de autonomia em relação ao crime antecedente. O simples deslocamento do proveito, sem aptidão para mascarar a origem ilícita, pode configurar mero exaurimento, demandando análise concreta da idoneidade do ato.',
      baseLegal: 'art. 1º, caput, Lei 9.613/1998',
      revisado: false,
    },
    {
      id: 'lavagem-d6',
      dificuldade: 'dificil',
      enunciado:
        'A condenação aplicou a causa de aumento do § 4º (organização criminosa) e, em ação conexa, o réu também responde pelo crime autônomo de integrar organização criminosa pelos mesmos fatos. Qual questionamento técnico é pertinente?',
      alternativas: [
        { id: 'a', texto: 'Nenhum; a cumulação é sempre devida e automática.' },
        { id: 'b', texto: 'Deve-se avaliar eventual bis in idem ao se valorar a mesma circunstância da organização criminosa como majorante da lavagem e como crime autônomo, exigindo fundamentação que distinga as bases fáticas.' },
        { id: 'c', texto: 'A majorante do § 4º absorve sempre o crime autônomo de organização criminosa.' },
        { id: 'd', texto: 'O crime de organização criminosa absorve necessariamente a lavagem.' },
      ],
      corretaId: 'b',
      explicacao:
        'A valoração da mesma circunstância fática de organização criminosa, simultaneamente como causa de aumento da lavagem (art. 1º, § 4º) e como crime autônomo (Lei 12.850/2013), suscita debate sobre vedação ao bis in idem, exigindo que se demonstrem bases fáticas distintas para a dupla punição.',
      baseLegal: 'art. 1º, § 4º, Lei 9.613/1998; art. 2º, Lei 12.850/2013; art. 5º, CF',
      revisado: false,
    },
  ],
}
