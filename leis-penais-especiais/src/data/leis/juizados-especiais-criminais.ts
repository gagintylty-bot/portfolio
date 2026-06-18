import type { Lei } from '../types'

/**
 * Juizados Especiais Criminais (9.099/1995).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "jecrim",
  numero: "9.099/1995",
  nome: "Juizados Especiais Criminais",
  slug: "juizados-especiais-criminais",
  resumo:
    "Institui os Juizados Especiais Cíveis e Criminais e disciplina as infrações de menor potencial ofensivo. Prevê institutos despenalizadores como composição civil, transação penal e suspensão condicional do processo.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'jecrim-f1',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente foi denunciado por crime cuja pena máxima cominada é de 2 anos. Em audiência, discute-se se a infração se enquadra na competência do Juizado Especial Criminal. Qual o critério legal para a definição de infração de menor potencial ofensivo?',
      alternativas: [
        { id: 'a', texto: 'Crimes cuja pena mínima não exceda 1 ano.' },
        {
          id: 'b',
          texto:
            'Contravenções penais e crimes a que a lei comine pena máxima não superior a 2 anos, cumulada ou não com multa.',
        },
        { id: 'c', texto: 'Apenas as contravenções penais, jamais os crimes.' },
        { id: 'd', texto: 'Qualquer crime, desde que o réu seja primário.' },
      ],
      corretaId: 'b',
      explicacao:
        'Consideram-se infrações de menor potencial ofensivo as contravenções penais e os crimes a que a lei comine pena máxima não superior a 2 anos, cumulada ou não com multa. Esse é o critério de competência do JECrim.',
      baseLegal: 'art. 61, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-f2',
      dificuldade: 'facil',
      enunciado:
        'Em audiência preliminar de lesão corporal leve, o juiz busca, antes de qualquer denúncia, a reparação dos danos sofridos pela vítima por acordo entre as partes. Qual instituto despenalizador está sendo aplicado?',
      alternativas: [
        { id: 'a', texto: 'A transação penal.' },
        { id: 'b', texto: 'A suspensão condicional do processo.' },
        { id: 'c', texto: 'A composição civil dos danos.' },
        { id: 'd', texto: 'O perdão judicial.' },
      ],
      corretaId: 'c',
      explicacao:
        'A composição civil dos danos é buscada na audiência preliminar. Homologada por sentença irrecorrível, acarreta, nos crimes de ação penal privada ou pública condicionada à representação, a renúncia ao direito de queixa ou representação.',
      baseLegal: 'art. 74, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-f3',
      dificuldade: 'facil',
      enunciado:
        'O Ministério Público, em vez de oferecer denúncia por crime de menor potencial ofensivo, propõe ao seu cliente a aplicação imediata de pena restritiva de direitos ou multa. De que instituto se trata?',
      alternativas: [
        { id: 'a', texto: 'Composição civil dos danos.' },
        { id: 'b', texto: 'Transação penal.' },
        { id: 'c', texto: 'Sursis (suspensão condicional da pena).' },
        { id: 'd', texto: 'Livramento condicional.' },
      ],
      corretaId: 'b',
      explicacao:
        'A transação penal consiste na proposta do Ministério Público de aplicação imediata de pena restritiva de direitos ou multa, antes do oferecimento da denúncia, evitando o processo e a discussão de culpa.',
      baseLegal: 'art. 76, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-f4',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'A aceitação da transação penal pelo seu cliente importa em reconhecimento de culpa e gera reincidência para fins penais.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'Falso. A imposição de sanção por transação penal não importa reincidência, sendo apenas registrada para impedir novo benefício no prazo de 5 anos, e não consta da certidão de antecedentes criminais nem gera efeitos civis.',
      baseLegal: 'art. 76, §§ 4º e 6º, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-f5',
      dificuldade: 'facil',
      enunciado:
        'No procedimento sumaríssimo do JECrim, o juiz pergunta qual princípio orienta a busca de soluções consensuais e a oralidade dos atos. Quais critérios norteiam o processo perante o Juizado?',
      alternativas: [
        { id: 'a', texto: 'Oralidade, simplicidade, informalidade, economia processual e celeridade.' },
        { id: 'b', texto: 'Apenas a celeridade, com prevalência da forma escrita.' },
        { id: 'c', texto: 'Sigilo absoluto e ausência de qualquer audiência.' },
        { id: 'd', texto: 'Indisponibilidade plena da ação penal em todos os casos.' },
      ],
      corretaId: 'a',
      explicacao:
        'O processo perante o Juizado orienta-se pelos critérios da oralidade, simplicidade, informalidade, economia processual e celeridade, buscando, sempre que possível, a conciliação ou a transação.',
      baseLegal: 'art. 62, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-f6',
      dificuldade: 'facil',
      enunciado:
        'O Ministério Público oferece denúncia por crime cuja pena mínima é de 1 ano e propõe a suspensão condicional do processo. Qual o limite de pena mínima cominada que admite esse benefício?',
      alternativas: [
        { id: 'a', texto: 'Pena mínima não superior a 1 ano.' },
        { id: 'b', texto: 'Pena mínima não superior a 2 anos.' },
        { id: 'c', texto: 'Pena máxima não superior a 2 anos.' },
        { id: 'd', texto: 'Pena mínima não superior a 4 anos.' },
      ],
      corretaId: 'a',
      explicacao:
        'A suspensão condicional do processo cabe nos crimes em que a pena mínima cominada for igual ou inferior a 1 ano, abrangidos ou não pela Lei dos Juizados, desde que presentes os demais requisitos.',
      baseLegal: 'art. 89, Lei 9.099/1995',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'jecrim-m1',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente cometeu três crimes em concurso material, cada um com pena máxima de 1 ano. A soma das penas máximas ultrapassa 2 anos. O caso permanece na competência do JECrim?',
      alternativas: [
        { id: 'a', texto: 'Sim, pois cada crime isoladamente é de menor potencial ofensivo.' },
        {
          id: 'b',
          texto:
            'Não; no concurso de crimes, a pena máxima a considerar resulta do somatório, afastando a competência do JECrim se ultrapassar 2 anos.',
        },
        { id: 'c', texto: 'Sim, pois a primariedade do réu garante o juízo especial.' },
        { id: 'd', texto: 'Não, mas apenas se houver violência doméstica.' },
      ],
      corretaId: 'b',
      explicacao:
        'Segundo entendimento consolidado, no concurso de crimes a pena considerada para fixar a competência é o resultado da soma (concurso material) ou da exasperação. Se o total ultrapassar 2 anos, afasta-se a competência do JECrim.',
      baseLegal: 'art. 61, Lei 9.099/1995; STJ, Súmula 723 STF por analogia',
      revisado: false,
    },
    {
      id: 'jecrim-m2',
      dificuldade: 'medio',
      enunciado:
        'Na suspensão condicional do processo aceita por seu cliente, foram impostas condições por período de prova de 2 anos. Durante esse período, ele é processado por outro crime. Qual a consequência prevista?',
      alternativas: [
        { id: 'a', texto: 'Nenhuma; o novo processo é irrelevante para a suspensão.' },
        {
          id: 'b',
          texto:
            'A suspensão será obrigatoriamente revogada se ele vier a ser processado por outro crime no curso do prazo.',
        },
        { id: 'c', texto: 'Converte-se automaticamente em transação penal.' },
        { id: 'd', texto: 'O período de prova é reduzido pela metade.' },
      ],
      corretaId: 'b',
      explicacao:
        'A suspensão será revogada se, no curso do prazo, o beneficiário vier a ser processado por outro crime ou não efetuar, sem motivo justificado, a reparação do dano (causas de revogação obrigatória).',
      baseLegal: 'art. 89, § 3º, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'A Lei dos Juizados Especiais Criminais, em sua redação atual, aplica-se aos crimes praticados com violência doméstica e familiar contra a mulher.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'Falso. A Lei 11.340/2006 (Lei Maria da Penha) veda expressamente a aplicação da Lei 9.099/1995 aos crimes praticados com violência doméstica e familiar contra a mulher, afastando os institutos despenalizadores nesses casos.',
      baseLegal: 'art. 41, Lei 11.340/2006; art. 61, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-m4',
      dificuldade: 'medio',
      enunciado:
        'O Ministério Público se recusa, sem justificativa idônea, a oferecer a proposta de transação penal a que seu cliente faria jus. Qual a providência cabível?',
      alternativas: [
        { id: 'a', texto: 'O juiz concede a transação de ofício, independentemente do MP.' },
        {
          id: 'b',
          texto:
            'Discordando da recusa, o juiz remete a questão ao Procurador-Geral, aplicando-se por analogia o art. 28 do CPP.',
        },
        { id: 'c', texto: 'A ação penal é automaticamente trancada.' },
        { id: 'd', texto: 'O réu fica obrigado a confessar para obter o benefício.' },
      ],
      corretaId: 'b',
      explicacao:
        'A transação é proposta pelo titular da ação penal. Havendo recusa que o juiz repute infundada, aplica-se por analogia o art. 28 do CPP, remetendo-se os autos à instância superior do Ministério Público (Súmula 696 do STF, no tema afim da suspensão).',
      baseLegal: 'art. 76, Lei 9.099/1995; art. 28, CPP; STF, Súmula 696',
      revisado: false,
    },
    {
      id: 'jecrim-m5',
      dificuldade: 'medio',
      enunciado:
        'Em crime de ação penal pública condicionada à representação, a vítima e o autor do fato celebram composição civil dos danos, devidamente homologada. Qual o efeito sobre a persecução penal?',
      alternativas: [
        { id: 'a', texto: 'Nenhum; a representação permanece intacta.' },
        {
          id: 'b',
          texto:
            'A homologação acarreta a renúncia ao direito de representação, extinguindo a possibilidade de persecução.',
        },
        { id: 'c', texto: 'Apenas suspende o prazo decadencial.' },
        { id: 'd', texto: 'Converte o crime em ação penal privada.' },
      ],
      corretaId: 'b',
      explicacao:
        'Nas ações penais privadas e nas públicas condicionadas à representação, o acordo de composição civil homologado acarreta a renúncia ao direito de queixa ou representação, com a consequente extinção da punibilidade.',
      baseLegal: 'art. 74, parágrafo único, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-m6',
      dificuldade: 'medio',
      enunciado:
        'Lavrado o termo circunstanciado por infração de menor potencial ofensivo, a autoridade policial deixou de prender o autor em flagrante porque ele assumiu o compromisso de comparecer ao Juizado. Esse procedimento é correto?',
      alternativas: [
        { id: 'a', texto: 'Não; o flagrante é sempre obrigatório nesses casos.' },
        {
          id: 'b',
          texto:
            'Sim; ao autor que assume o compromisso de comparecer ao Juizado não se imporá prisão em flagrante nem se exigirá fiança.',
        },
        { id: 'c', texto: 'Sim, mas somente se ele pagar fiança elevada.' },
        { id: 'd', texto: 'Não; é necessária a abertura de inquérito policial completo.' },
      ],
      corretaId: 'b',
      explicacao:
        'Ao autor do fato que, após a lavratura do termo circunstanciado, for imediatamente encaminhado ao Juizado ou assumir o compromisso de a ele comparecer, não se imporá prisão em flagrante nem se exigirá fiança.',
      baseLegal: 'art. 69, parágrafo único, Lei 9.099/1995',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'jecrim-d1',
      dificuldade: 'dificil',
      enunciado:
        'Seu cliente cumpriu integralmente as condições da suspensão condicional do processo durante o período de prova, sem revogação. Encerrado o prazo, qual a consequência jurídica?',
      alternativas: [
        { id: 'a', texto: 'A condenação é registrada para fins de reincidência.' },
        {
          id: 'b',
          texto:
            'Declara-se extinta a punibilidade, sem que haja condenação ou reconhecimento de culpa.',
        },
        { id: 'c', texto: 'O processo recomeça do zero, com nova denúncia.' },
        { id: 'd', texto: 'Aplica-se pena restritiva de direitos residual.' },
      ],
      corretaId: 'b',
      explicacao:
        'Expirado o prazo sem revogação, o juiz declarará extinta a punibilidade. A suspensão condicional do processo não gera condenação nem reconhecimento de culpa, distinguindo-se do mérito da imputação.',
      baseLegal: 'art. 89, § 5º, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-d2',
      dificuldade: 'dificil',
      enunciado:
        'O juiz homologou transação penal e, descumprida a pena restritiva de direitos imposta, pretende converter de plano a sanção em pena privativa de liberdade. A defesa se opõe. Qual a tese correta?',
      alternativas: [
        { id: 'a', texto: 'A conversão direta em prisão é válida e automática.' },
        {
          id: 'b',
          texto:
            'Descumprida a transação homologada, retoma-se a situação anterior, permitindo ao MP oferecer denúncia; não cabe conversão direta em prisão.',
        },
        { id: 'c', texto: 'O descumprimento gera apenas advertência verbal.' },
        { id: 'd', texto: 'A transação descumprida vira sursis automaticamente.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF (Súmula Vinculante 35) fixou que a homologação da transação não faz coisa julgada material e, descumpridas as cláusulas, retoma-se a situação anterior, possibilitando ao Ministério Público a continuidade da persecução penal; veda-se a conversão automática em prisão.',
      baseLegal: 'art. 76, Lei 9.099/1995; STF, Súmula Vinculante 35',
      revisado: false,
    },
    {
      id: 'jecrim-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'A suspensão condicional do processo pode ser proposta nos crimes em que a pena mínima cominada seja igual ou inferior a 1 ano, ainda que o crime não seja de competência do Juizado Especial Criminal.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'Verdadeiro. O art. 89 abrange crimes com pena mínima não superior a 1 ano, estejam ou não compreendidos no âmbito de competência do JECrim. O instituto não se limita às infrações de menor potencial ofensivo.',
      baseLegal: 'art. 89, Lei 9.099/1995',
      revisado: false,
    },
    {
      id: 'jecrim-d4',
      dificuldade: 'dificil',
      enunciado:
        'A infração de menor potencial ofensivo foi praticada em concurso com crime de competência da Justiça Comum, conexos entre si. A defesa discute o foro competente para julgar ambos. Qual a solução adequada?',
      alternativas: [
        { id: 'a', texto: 'Cada crime é julgado em juízo separado, sem reunião.' },
        {
          id: 'b',
          texto:
            'Havendo conexão com crime de competência da Justiça Comum, prevalece esta, reunindo-se os processos, observados os institutos despenalizadores.',
        },
        { id: 'c', texto: 'O JECrim atrai sempre a competência por ser mais célere.' },
        { id: 'd', texto: 'A conexão extingue a punibilidade da infração menor.' },
      ],
      corretaId: 'b',
      explicacao:
        'Na conexão ou continência entre infração de menor potencial ofensivo e crime de competência da Justiça Comum (ou do Tribunal do Júri), prevalece o juízo comum, sem prejuízo da aplicação dos institutos despenalizadores quando cabíveis.',
      baseLegal: 'art. 60, parágrafo único, Lei 9.099/1995; art. 78, CPP',
      revisado: false,
    },
    {
      id: 'jecrim-d5',
      dificuldade: 'dificil',
      enunciado:
        'Seu cliente foi denunciado por crime cuja pena mínima é superior a 1 ano. O MP, contudo, deixou de analisar a possibilidade de desclassificação que reduziria a pena mínima. Como sustentar o cabimento da suspensão condicional do processo?',
      alternativas: [
        { id: 'a', texto: 'Não cabe; basta a pena cominada na denúncia original.' },
        {
          id: 'b',
          texto:
            'Cabe analisar a emendatio ou desclassificação que altere a pena mínima; reconhecida, abre-se a possibilidade da proposta de suspensão.',
        },
        { id: 'c', texto: 'A suspensão independe da pena mínima do crime.' },
        { id: 'd', texto: 'A desclassificação é vedada após a denúncia.' },
      ],
      corretaId: 'b',
      explicacao:
        'Tratando-se de eventual desclassificação ou de definição jurídica diversa que reduza a pena mínima para patamar igual ou inferior a 1 ano, surge a possibilidade da suspensão condicional do processo, conforme a Súmula 337 do STJ, que admite o benefício quando a desclassificação a torne cabível.',
      baseLegal: 'art. 89, Lei 9.099/1995; STJ, Súmula 337',
      revisado: false,
    },
    {
      id: 'jecrim-d6',
      dificuldade: 'dificil',
      enunciado:
        'Em revisão criminal, discute-se se o benefício da transação penal pode ser concedido após o trânsito em julgado de sentença condenatória em procedimento que não a ofertou indevidamente. Qual o melhor enquadramento?',
      alternativas: [
        { id: 'a', texto: 'O instituto é pré-processual e, em regra, deve ser ofertado antes da denúncia, no momento próprio.' },
        { id: 'b', texto: 'A transação pode ser concedida a qualquer tempo, inclusive na execução penal.' },
        { id: 'c', texto: 'A transação só cabe após o trânsito em julgado.' },
        { id: 'd', texto: 'O benefício é incompatível com qualquer infração de menor potencial ofensivo.' },
      ],
      corretaId: 'a',
      explicacao:
        'A transação penal tem natureza pré-processual e momento próprio: a fase preliminar, antes do oferecimento da denúncia. A omissão indevida no momento adequado pode gerar nulidade a ser arguida pela via cabível, mas o instituto não se confunde com benefício de execução.',
      baseLegal: 'art. 76, Lei 9.099/1995',
      revisado: false,
    },
  ],
}
