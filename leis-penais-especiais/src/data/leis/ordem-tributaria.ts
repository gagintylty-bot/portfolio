import type { Lei } from '../types'

/**
 * ESQUELETO — Crimes contra a Ordem Tributária (8.137/1990).
 * Cenários ainda NÃO gerados (aguardando validação do padrão na Lei de Drogas).
 * ⚠️ RASCUNHO EDUCACIONAL — todo conteúdo precisará de revisão jurídica.
 */
export const lei: Lei = {
  id: "ordem-tributaria",
  numero: "8.137/1990",
  nome: "Crimes contra a Ordem Tributária",
  slug: "ordem-tributaria",
  resumo:
    "Define crimes contra a ordem tributária, econômica e as relações de consumo, como a supressão ou redução de tributo mediante fraude. A extinção da punibilidade pelo pagamento e o esgotamento da via administrativa são temas centrais.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'ordem-tributaria-f1',
      dificuldade: 'facil',
      enunciado:
        'A denúncia narra que seu cliente suprimiu tributo mediante a inserção de informações falsas em sua declaração fiscal. Qual a conduta nuclear dos crimes do art. 1º da Lei 8.137/1990?',
      alternativas: [
        { id: 'a', texto: 'Atrasar o pagamento de tributo regularmente declarado, sem qualquer fraude.' },
        { id: 'b', texto: 'Suprimir ou reduzir tributo mediante conduta fraudulenta, como omitir informação ou prestar declaração falsa às autoridades fazendárias.' },
        { id: 'c', texto: 'Discutir judicialmente a validade de uma cobrança tributária.' },
        { id: 'd', texto: 'Solicitar parcelamento de débito tributário.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 1º descreve crimes materiais consistentes em suprimir ou reduzir tributo, ou contribuição social, mediante condutas fraudulentas como omitir informação, prestar declaração falsa, fraudar a fiscalização ou inserir elementos inexatos em documentos fiscais.',
      baseLegal: 'art. 1º, Lei 8.137/1990',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-f2',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'O simples inadimplemento de tributo regularmente declarado, sem qualquer conduta fraudulenta, configura, por si só, o crime do art. 1º da Lei 8.137/1990.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'Os crimes do art. 1º exigem fraude como meio para a supressão ou redução do tributo. O mero inadimplemento de tributo regularmente declarado, sem ardil, não configura crime, sob pena de prisão por dívida, vedada pela Constituição.',
      baseLegal: 'art. 1º, Lei 8.137/1990; art. 5º, LXVII, CF',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-f3',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente quitou integralmente o tributo e os acessórios antes do recebimento da denúncia. A defesa pretende extinguir a punibilidade. O que prevê o ordenamento sobre o pagamento?',
      alternativas: [
        { id: 'a', texto: 'O pagamento é irrelevante em matéria penal tributária.' },
        { id: 'b', texto: 'O pagamento integral do débito, conforme a legislação aplicável, é causa de extinção da punibilidade.' },
        { id: 'c', texto: 'O pagamento apenas reduz a pena pela metade.' },
        { id: 'd', texto: 'O pagamento converte o crime em contravenção.' },
      ],
      corretaId: 'b',
      explicacao:
        'O pagamento integral do débito tributário é causa de extinção da punibilidade nos crimes contra a ordem tributária, conforme legislação superveniente (art. 9º, § 2º, da Lei 10.684/2003 e art. 83, § 4º, da Lei 9.430/1996), admitida em diferentes momentos da persecução.',
      baseLegal: 'art. 9º, § 2º, Lei 10.684/2003',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-f4',
      dificuldade: 'facil',
      enunciado:
        'O juiz indaga qual a pena prevista para os crimes do art. 1º da Lei 8.137/1990. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'Detenção de 6 meses a 2 anos e multa.' },
        { id: 'b', texto: 'Reclusão de 2 a 5 anos e multa.' },
        { id: 'c', texto: 'Reclusão de 4 a 10 anos e multa.' },
        { id: 'd', texto: 'Apenas multa.' },
      ],
      corretaId: 'b',
      explicacao:
        'Os crimes do art. 1º são apenados com reclusão de 2 a 5 anos e multa. Já os crimes do art. 2º, de menor gravidade, têm pena de detenção de 6 meses a 2 anos e multa.',
      baseLegal: 'art. 1º, Lei 8.137/1990',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-f5',
      dificuldade: 'facil',
      enunciado:
        'A acusação descreve que o comerciante deixou de fornecer nota fiscal relativa a venda de mercadoria. Em qual dispositivo, em regra, se enquadra essa conduta de menor gravidade?',
      alternativas: [
        { id: 'a', texto: 'Art. 1º, como crime material.' },
        { id: 'b', texto: 'Art. 2º, como crime formal de natureza tributária.' },
        { id: 'c', texto: 'Art. 4º, como crime contra a ordem econômica.' },
        { id: 'd', texto: 'Art. 7º, como crime contra as relações de consumo.' },
      ],
      corretaId: 'b',
      explicacao:
        'Deixar de fornecer nota fiscal ou documento equivalente relativo a venda de mercadoria ou prestação de serviço enquadra-se, em regra, no art. 2º, V, crime formal de natureza tributária, com pena de detenção de 6 meses a 2 anos e multa.',
      baseLegal: 'art. 2º, V, Lei 8.137/1990',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-f6',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A Lei 8.137/1990 tipifica, além dos crimes contra a ordem tributária, também crimes contra a ordem econômica e contra as relações de consumo.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A Lei 8.137/1990 não se limita à ordem tributária. Define também crimes contra a ordem econômica (art. 4º) e contra as relações de consumo (art. 7º), além das condutas de funcionários públicos (art. 3º).',
      baseLegal: 'arts. 4º e 7º, Lei 8.137/1990',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'ordem-tributaria-m1',
      dificuldade: 'medio',
      enunciado:
        'A defesa sustenta que a ação penal por crime material do art. 1º foi proposta antes do encerramento do processo administrativo de lançamento. Qual o entendimento sumular que ampara a tese?',
      alternativas: [
        { id: 'a', texto: 'A ação penal independe de qualquer providência administrativa.' },
        { id: 'b', texto: 'Não se tipifica crime material contra a ordem tributária antes do lançamento definitivo do tributo (Súmula Vinculante 24 do STF).' },
        { id: 'c', texto: 'O lançamento definitivo só é exigido nos crimes do art. 2º.' },
        { id: 'd', texto: 'A constituição do crédito é irrelevante para a tipicidade.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Súmula Vinculante 24 do STF estabelece que não se tipifica crime material contra a ordem tributária, previsto no art. 1º, I a IV, antes do lançamento definitivo do tributo, condição que constitui verdadeira questão prejudicial e marco para a persecução penal.',
      baseLegal: 'art. 1º, I a IV, Lei 8.137/1990; Súmula Vinculante 24, STF',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-m2',
      dificuldade: 'medio',
      enunciado:
        'A defesa pretende suspender a ação penal porque o cliente aderiu a parcelamento integral do débito tributário durante o processo. Qual o efeito do parcelamento regularmente formalizado?',
      alternativas: [
        { id: 'a', texto: 'O parcelamento extingue imediatamente a punibilidade.' },
        { id: 'b', texto: 'O parcelamento, conforme a legislação, suspende a pretensão punitiva e o curso da prescrição enquanto vigente o acordo.' },
        { id: 'c', texto: 'O parcelamento não produz qualquer efeito penal.' },
        { id: 'd', texto: 'O parcelamento agrava a pena por confissão da fraude.' },
      ],
      corretaId: 'b',
      explicacao:
        'A adesão a parcelamento, nos termos da legislação aplicável (como a Lei 10.684/2003 e a Lei 9.430/1996), suspende a pretensão punitiva e a prescrição enquanto vigente o acordo, e o pagamento integral, ao final, extingue a punibilidade.',
      baseLegal: 'art. 9º, Lei 10.684/2003; art. 83, §§ 2º a 4º, Lei 9.430/1996',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-m3',
      dificuldade: 'medio',
      enunciado:
        'Em uma fiscalização, o auditor exige vantagem indevida para deixar de lançar tributo devido pelo contribuinte. Em qual figura típica da própria Lei 8.137/1990 se enquadra a conduta do funcionário?',
      alternativas: [
        { id: 'a', texto: 'Art. 1º, como crime material do contribuinte.' },
        { id: 'b', texto: 'Art. 3º, que define crimes funcionais contra a ordem tributária praticados por funcionário público.' },
        { id: 'c', texto: 'Art. 7º, crime contra as relações de consumo.' },
        { id: 'd', texto: 'A conduta é atípica nessa lei.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 3º tipifica crimes funcionais contra a ordem tributária, como exigir, solicitar ou receber vantagem indevida para deixar de lançar ou cobrar tributo, ou patrocinar interesse privado, com penas mais severas em razão da condição de funcionário público.',
      baseLegal: 'art. 3º, Lei 8.137/1990',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-m4',
      dificuldade: 'medio',
      enunciado:
        'A defesa pretende o reconhecimento da insignificância em débito tributário federal de pequeno valor. Qual o parâmetro adotado pela jurisprudência dos tribunais superiores?',
      alternativas: [
        { id: 'a', texto: 'A insignificância nunca se aplica a crimes tributários.' },
        { id: 'b', texto: 'Aplica-se o princípio da insignificância a débitos tributários federais até o patamar fixado pela jurisprudência, à luz dos limites de execução fiscal da União.' },
        { id: 'c', texto: 'A insignificância depende exclusivamente de confissão.' },
        { id: 'd', texto: 'A insignificância só se aplica a tributos estaduais.' },
      ],
      corretaId: 'b',
      explicacao:
        'A jurisprudência do STF e do STJ admite a insignificância em crimes tributários federais quando o débito não supera o patamar de dispensa de execução fiscal pela União, parâmetro reiteradamente fixado em precedentes para aferir a lesividade ao bem jurídico.',
      baseLegal: 'art. 1º, Lei 8.137/1990; STJ e STF, jurisprudência sobre insignificância',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-m5',
      dificuldade: 'medio',
      enunciado:
        'A acusação narra a apropriação, pelo sócio-administrador, de valor de ICMS declarado e cobrado do adquirente, mas não recolhido ao Estado. Qual o enfoque jurisprudencial sobre essa conduta?',
      alternativas: [
        { id: 'a', texto: 'A conduta é sempre atípica, por se tratar de mero inadimplemento.' },
        { id: 'b', texto: 'O não recolhimento de ICMS próprio declarado e cobrado do consumidor pode configurar o crime do art. 2º, II, quando presente o dolo de apropriação, conforme entendimento do STF.' },
        { id: 'c', texto: 'A conduta se enquadra obrigatoriamente no art. 1º.' },
        { id: 'd', texto: 'A conduta configura crime contra as relações de consumo.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF (RHC 163.334) firmou que o contribuinte que, de forma contumaz e com dolo de apropriação, deixa de recolher ICMS próprio cobrado do adquirente pratica o crime do art. 2º, II, da Lei 8.137/1990.',
      baseLegal: 'art. 2º, II, Lei 8.137/1990; STF, RHC 163.334',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-m6',
      dificuldade: 'medio',
      enunciado:
        'Discute-se a competência para processar crime de sonegação de tributo federal cujo lançamento foi efetuado pela Receita Federal. Qual o juízo competente, em regra?',
      alternativas: [
        { id: 'a', texto: 'A Justiça Estadual, em qualquer caso.' },
        { id: 'b', texto: 'A Justiça Federal, quando o tributo sonegado for da competência da União.' },
        { id: 'c', texto: 'O tribunal do júri.' },
        { id: 'd', texto: 'A Justiça do Trabalho.' },
      ],
      corretaId: 'b',
      explicacao:
        'A competência se define pela natureza do tributo lesado. Tratando-se de tributo federal, em prejuízo de interesse da União, a competência é da Justiça Federal; tributos estaduais ou municipais atraem, em regra, a Justiça Estadual.',
      baseLegal: 'art. 1º, Lei 8.137/1990; art. 109, IV, CF',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'ordem-tributaria-d1',
      dificuldade: 'dificil',
      enunciado:
        'A defesa sustenta que o crime tributário só se consuma com o resultado supressão/redução do tributo e que, antes do lançamento definitivo, sequer corre a prescrição. Qual o enfoque correto sobre o termo inicial da prescrição nos crimes do art. 1º?',
      alternativas: [
        { id: 'a', texto: 'A prescrição corre desde a conduta fraudulenta, ainda que sem lançamento.' },
        { id: 'b', texto: 'Tratando-se de crime material que só se tipifica com o lançamento definitivo, a contagem da prescrição da pretensão punitiva tem por marco a constituição definitiva do crédito tributário.' },
        { id: 'c', texto: 'A prescrição nunca corre em crimes tributários.' },
        { id: 'd', texto: 'A prescrição corre a partir do trânsito em julgado da sentença penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'Como o crime material do art. 1º só se consuma e se tipifica com o lançamento definitivo (Súmula Vinculante 24), a prescrição da pretensão punitiva, em regra, tem por termo inicial a constituição definitiva do crédito tributário, momento da consumação.',
      baseLegal: 'art. 1º, Lei 8.137/1990; Súmula Vinculante 24, STF; art. 111, CP',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-d2',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Segundo entendimento consolidado, o pagamento integral do débito tributário extingue a punibilidade ainda que efetuado após o recebimento da denúncia e mesmo após a sentença condenatória, antes do trânsito em julgado.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 9º, § 2º, da Lei 10.684/2003 não estabeleceu limite temporal, e a jurisprudência admite que o pagamento integral do débito extingue a punibilidade dos crimes tributários ainda que realizado após o recebimento da denúncia, e mesmo após a sentença, antes do trânsito em julgado.',
      baseLegal: 'art. 9º, § 2º, Lei 10.684/2003; STF e STJ, jurisprudência',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-d3',
      dificuldade: 'dificil',
      enunciado:
        'O réu, mero sócio sem poderes de gestão, foi denunciado apenas por constar do contrato social da empresa autuada. A defesa alega ausência de individualização da conduta. Qual o vício a ser arguido?',
      alternativas: [
        { id: 'a', texto: 'Nenhum; basta a condição de sócio para a responsabilização penal.' },
        { id: 'b', texto: 'A denúncia genérica, fundada apenas na condição societária, sem descrição do nexo entre o sócio e a fraude, configura inépcia por responsabilidade penal objetiva vedada.' },
        { id: 'c', texto: 'A defesa deve apenas pleitear a redução da pena.' },
        { id: 'd', texto: 'A responsabilidade penal nas pessoas jurídicas é sempre objetiva.' },
      ],
      corretaId: 'b',
      explicacao:
        'A responsabilidade penal é subjetiva e pessoal. A denúncia que imputa o crime tributário apenas pela posição no contrato social, sem descrever o vínculo concreto do agente com a conduta fraudulenta, é inepta, por afronta à individualização e por adotar responsabilidade objetiva, vedada no direito penal.',
      baseLegal: 'art. 1º, Lei 8.137/1990; art. 41, CPP; art. 5º, XLV, CF',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-d4',
      dificuldade: 'dificil',
      enunciado:
        'O contribuinte emitiu notas fiscais falsas e, com isso, reduziu o tributo e ainda obteve creditamento indevido junto ao Fisco. A acusação pretende imputar, em concurso, sonegação e estelionato. Qual a análise técnica mais adequada?',
      alternativas: [
        { id: 'a', texto: 'Aplica-se sempre o concurso material entre sonegação e estelionato.' },
        { id: 'b', texto: 'Quando a fraude se esgota na supressão ou redução de tributo, prevalece o tipo especial da Lei 8.137/1990, afastando-se a dupla imputação pela aplicação do princípio da especialidade.' },
        { id: 'c', texto: 'O estelionato sempre absorve o crime tributário.' },
        { id: 'd', texto: 'As condutas são atípicas por ausência de lançamento.' },
      ],
      corretaId: 'b',
      explicacao:
        'Quando a conduta fraudulenta tem por fim e se exaure na supressão ou redução de tributo, o crime contra a ordem tributária (norma especial) prevalece sobre o estelionato genérico, pelo princípio da especialidade, evitando-se bis in idem; a dupla imputação exige autonomia fática.',
      baseLegal: 'art. 1º, Lei 8.137/1990; art. 12, CP; art. 171, CP',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-d5',
      dificuldade: 'dificil',
      enunciado:
        'A condenação aplicou a causa de aumento por crime que causou grave dano à coletividade. A defesa impugna a falta de fundamentação concreta. Quando incide a majorante prevista na lei?',
      alternativas: [
        { id: 'a', texto: 'A majorante é automática em todo crime tributário.' },
        { id: 'b', texto: 'A pena é aumentada quando o crime causa grave dano à coletividade, exigindo demonstração concreta da lesividade qualificada, como o elevado valor sonegado.' },
        { id: 'c', texto: 'A majorante só incide sobre crimes do art. 2º.' },
        { id: 'd', texto: 'A majorante depende exclusivamente da reincidência.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 12, I, prevê aumento de pena quando o crime ocasiona grave dano à coletividade. A incidência exige fundamentação concreta da lesividade qualificada, parâmetro frequentemente associado pela jurisprudência ao expressivo valor do tributo sonegado.',
      baseLegal: 'art. 12, I, Lei 8.137/1990',
      revisado: false,
    },
    {
      id: 'ordem-tributaria-d6',
      dificuldade: 'dificil',
      enunciado:
        'A ação penal foi instaurada com base em representação fiscal para fins penais, mas a defesa demonstra que pende impugnação administrativa ainda não julgada quanto ao lançamento. Qual a providência processual pertinente?',
      alternativas: [
        { id: 'a', texto: 'Prosseguir normalmente, pois o processo penal independe do administrativo.' },
        { id: 'b', texto: 'Reconhecer a ausência de justa causa ou de condição objetiva, com trancamento ou suspensão, pois pende o lançamento definitivo exigido pela Súmula Vinculante 24.' },
        { id: 'c', texto: 'Converter o feito em ação cível.' },
        { id: 'd', texto: 'Determinar a prisão preventiva do contribuinte.' },
      ],
      corretaId: 'b',
      explicacao:
        'Sem o lançamento definitivo, não há crime material do art. 1º (Súmula Vinculante 24). Pendente impugnação administrativa que pode desconstituir o crédito, falta justa causa para a ação penal, cabendo seu trancamento por habeas corpus ou a suspensão até o encerramento da via administrativa.',
      baseLegal: 'art. 1º, Lei 8.137/1990; Súmula Vinculante 24, STF; art. 648, I, CPP',
      revisado: false,
    },
  ],
}
