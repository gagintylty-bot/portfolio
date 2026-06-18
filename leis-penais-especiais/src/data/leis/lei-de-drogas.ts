import type { Lei } from '../types'

/**
 * AMOSTRA / PADRÃO DE REFERÊNCIA — Lei de Drogas (11.343/2006).
 * 15 casos: 5 fácil, 5 médio, 5 difícil. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 * Use este arquivo como modelo de estrutura/tom para as demais leis.
 */
export const leiDrogas: Lei = {
  id: 'drogas',
  numero: '11.343/2006',
  nome: 'Lei de Drogas',
  slug: 'lei-de-drogas',
  resumo:
    'Institui o Sistema Nacional de Políticas Públicas sobre Drogas e define crimes e penas. Distingue o usuário (art. 28, sem pena privativa de liberdade) do traficante (art. 33), além de figuras como associação para o tráfico e causas de aumento.',
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'drogas-f1',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente foi flagrado portando pequena quantidade de maconha que, segundo ele e as circunstâncias, destinava-se exclusivamente ao consumo próprio. Qual a principal consequência jurídica prevista para essa conduta?',
      alternativas: [
        { id: 'a', texto: 'Pena de reclusão de 5 a 15 anos, por se tratar de tráfico.' },
        {
          id: 'b',
          texto:
            'Não há pena privativa de liberdade; aplicam-se advertência, prestação de serviços à comunidade ou medida educativa.',
        },
        { id: 'c', texto: 'Prisão preventiva obrigatória até o julgamento.' },
        { id: 'd', texto: 'A conduta é atípica e deve ser arquivada de plano.' },
      ],
      corretaId: 'b',
      explicacao:
        'O porte de droga para consumo pessoal não comporta pena privativa de liberdade. O art. 28 prevê advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso.',
      baseLegal: 'art. 28, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-f2',
      dificuldade: 'facil',
      enunciado:
        'Em uma audiência, o promotor sustenta que o seu cliente praticou tráfico ao "trazer consigo" entorpecente para venda. Qual dispositivo tipifica, em regra, a conduta nuclear de tráfico de drogas?',
      alternativas: [
        { id: 'a', texto: 'Art. 28, caput.' },
        { id: 'b', texto: 'Art. 33, caput.' },
        { id: 'c', texto: 'Art. 35, caput.' },
        { id: 'd', texto: 'Art. 40, caput.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 33, caput, descreve as condutas de tráfico (importar, exportar, vender, expor à venda, ter em depósito, trazer consigo, entre outras), com pena de reclusão de 5 a 15 anos e multa.',
      baseLegal: 'art. 33, caput, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-f3',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente é réu primário, de bons antecedentes, não se dedica a atividades criminosas nem integra organização. A defesa pretende a redução de pena do chamado "tráfico privilegiado". Qual a fração de redução prevista?',
      alternativas: [
        { id: 'a', texto: 'De 1/6 a 2/3.' },
        { id: 'b', texto: 'De 1/3 à metade.' },
        { id: 'c', texto: 'Fixa de metade.' },
        { id: 'd', texto: 'Não há previsão de redução para o tráfico.' },
      ],
      corretaId: 'a',
      explicacao:
        'O § 4º do art. 33 permite reduzir a pena de 1/6 a 2/3 quando o agente for primário, de bons antecedentes, não se dedicar a atividades criminosas nem integrar organização criminosa.',
      baseLegal: 'art. 33, § 4º, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-f4',
      dificuldade: 'facil',
      enunciado:
        'Numa abordagem, a droga foi apreendida nas imediações de uma escola, em horário de saída de alunos. O que essa circunstância tende a representar na dosimetria?',
      alternativas: [
        { id: 'a', texto: 'Uma causa de diminuição de pena.' },
        { id: 'b', texto: 'Uma causa de aumento de pena.' },
        { id: 'c', texto: 'Uma circunstância irrelevante para a pena.' },
        { id: 'd', texto: 'A descaracterização do crime de tráfico.' },
      ],
      corretaId: 'b',
      explicacao:
        'A prática nas dependências ou imediações de estabelecimentos de ensino é causa de aumento de pena (de 1/6 a 2/3), pela maior exposição de pessoas vulneráveis.',
      baseLegal: 'art. 40, III, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-f5',
      dificuldade: 'facil',
      enunciado:
        'O juiz pergunta qual a natureza jurídica do crime de tráfico do art. 33, caput, para fins de benefícios penais. Qual a resposta correta?',
      alternativas: [
        { id: 'a', texto: 'Crime de menor potencial ofensivo.' },
        { id: 'b', texto: 'Contravenção penal.' },
        {
          id: 'c',
          texto:
            'Crime equiparado a hediondo, insuscetível de graça, anistia e indulto.',
        },
        { id: 'd', texto: 'Crime culposo.' },
      ],
      corretaId: 'c',
      explicacao:
        'O tráfico é equiparado a hediondo por força constitucional e legal, sendo insuscetível de graça, anistia e indulto, com regime mais severo de cumprimento de pena.',
      baseLegal: 'art. 5º, XLIII, CF; art. 44, Lei 11.343/2006',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'drogas-m1',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente foi condenado por tráfico com a redução do § 4º (tráfico privilegiado). O juízo da execução nega progressão sob o argumento de que o crime é hediondo. Qual a melhor tese da defesa?',
      alternativas: [
        {
          id: 'a',
          texto:
            'O tráfico privilegiado não tem natureza hedionda, conforme entendimento consolidado do STF.',
        },
        { id: 'b', texto: 'O tráfico privilegiado é sempre hediondo, nada a fazer.' },
        { id: 'c', texto: 'A pena deve ser convertida em multa.' },
        { id: 'd', texto: 'O crime deve ser reclassificado para o art. 28.' },
      ],
      corretaId: 'a',
      explicacao:
        'O STF firmou que o tráfico privilegiado (art. 33, § 4º) não ostenta natureza hedionda, afastando, por consequência, o regime mais gravoso dos crimes equiparados a hediondos para fins de benefícios.',
      baseLegal: 'art. 33, § 4º, Lei 11.343/2006; STF, HC 118.533',
      revisado: false,
    },
    {
      id: 'drogas-m2',
      dificuldade: 'medio',
      enunciado:
        'A denúncia imputa "associação para o tráfico" a duas pessoas flagradas juntas em um único ato de venda, sem outros elementos. Qual o ponto central para contestar o art. 35?',
      alternativas: [
        { id: 'a', texto: 'Basta a presença de duas pessoas no flagrante.' },
        {
          id: 'b',
          texto:
            'A associação exige vínculo estável e permanente entre os agentes, não bastando o concurso eventual.',
        },
        { id: 'c', texto: 'A associação independe de dolo específico.' },
        { id: 'd', texto: 'O art. 35 só se aplica a três ou mais pessoas.' },
      ],
      corretaId: 'b',
      explicacao:
        'A associação para o tráfico (art. 35) exige vínculo associativo estável e permanente entre duas ou mais pessoas, voltado à prática reiterada de tráfico. O mero concurso eventual em um ato isolado não configura o tipo.',
      baseLegal: 'art. 35, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-m3',
      dificuldade: 'medio',
      enunciado:
        'Na fixação da pena-base, o juiz pretende valorar negativamente a natureza e a quantidade da droga apreendida. Esse critério tem previsão expressa na Lei de Drogas?',
      alternativas: [
        { id: 'a', texto: 'Não; são critérios vedados.' },
        {
          id: 'b',
          texto:
            'Sim; a natureza e a quantidade da droga preponderam na fixação das penas, com previsão expressa.',
        },
        { id: 'c', texto: 'Apenas a quantidade pode ser considerada, nunca a natureza.' },
        { id: 'd', texto: 'Somente na segunda fase da dosimetria.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 42 determina que o juiz, na fixação das penas, considere com preponderância sobre o art. 59 do CP a natureza e a quantidade da substância, a personalidade e a conduta social do agente.',
      baseLegal: 'art. 42, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-m4',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente, indiciado por tráfico, decide colaborar voluntariamente, levando à identificação dos demais coautores e à recuperação do produto do crime. Qual benefício a lei prevê especificamente?',
      alternativas: [
        { id: 'a', texto: 'Extinção automática da punibilidade.' },
        {
          id: 'b',
          texto:
            'Redução de pena de 1/3 a 2/3 pela colaboração que leva à identificação de coautores e à recuperação do produto.',
        },
        { id: 'c', texto: 'Conversão da pena em advertência.' },
        { id: 'd', texto: 'Imunidade penal plena e irrestrita.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 41 prevê redução de pena de 1/3 a 2/3 ao indiciado ou acusado que colaborar voluntariamente, identificando os demais coautores ou partícipes e recuperando, total ou parcialmente, o produto do crime.',
      baseLegal: 'art. 41, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-m5',
      dificuldade: 'medio',
      enunciado:
        'A acusação pede aumento por envolvimento de adolescente na mercancia. Em qual hipótese a Lei de Drogas prevê majoração relacionada a crianças e adolescentes?',
      alternativas: [
        { id: 'a', texto: 'Não há previsão específica nessa lei.' },
        {
          id: 'b',
          texto:
            'Quando o agente se vale de criança/adolescente ou os envolve na prática, há causa de aumento.',
        },
        { id: 'c', texto: 'Apenas se a vítima for maior de 60 anos.' },
        { id: 'd', texto: 'Somente em caso de reincidência específica.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 40 prevê causas de aumento, entre elas quando o agente se vale de menores, ou os envolve, na prática do crime — refletindo a maior reprovabilidade da conduta.',
      baseLegal: 'art. 40, VI, Lei 11.343/2006',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'drogas-d1',
      dificuldade: 'dificil',
      enunciado:
        'Policiais ingressaram no domicílio do seu cliente sem mandado, sob alegação genérica de "atitude suspeita", e lá encontraram droga em depósito (crime permanente). Qual a tese defensiva mais robusta sobre a prova?',
      alternativas: [
        {
          id: 'a',
          texto:
            'A entrada é sempre válida no flagrante de crime permanente, sem qualquer exigência.',
        },
        {
          id: 'b',
          texto:
            'Sem fundadas razões prévias que justifiquem a entrada, a prova é ilícita, ainda que se trate de crime permanente.',
        },
        { id: 'c', texto: 'A ilicitude só atinge a prova se houver lesão corporal.' },
        { id: 'd', texto: 'O flagrante convalida qualquer ingresso domiciliar.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF (Tema 280, RE 603.616) exige que o ingresso domiciliar, mesmo em crime permanente, seja precedido de fundadas razões (justa causa) que indiquem a ocorrência de crime no interior, sob pena de ilicitude da prova e nulidade.',
      baseLegal: 'art. 5º, XI, CF; STF, RE 603.616 (Tema 280)',
      revisado: false,
    },
    {
      id: 'drogas-d2',
      dificuldade: 'dificil',
      enunciado:
        'No processo, há apenas laudo de constatação provisório da natureza da droga, sem laudo toxicológico definitivo juntado até a sentença. Qual a consequência discutível mais favorável à defesa?',
      alternativas: [
        { id: 'a', texto: 'Nada muda; o laudo provisório basta para condenar.' },
        {
          id: 'b',
          texto:
            'A ausência de laudo definitivo compromete a comprovação da materialidade, podendo levar à absolvição.',
        },
        { id: 'c', texto: 'A materialidade pode ser presumida pela confissão.' },
        { id: 'd', texto: 'O laudo é dispensável em qualquer hipótese.' },
      ],
      corretaId: 'b',
      explicacao:
        'A materialidade do crime de tráfico, em regra, depende de laudo toxicológico definitivo. O laudo de constatação é provisório e voltado à lavratura do flagrante; sua ausência, ao final, pode comprometer a prova da materialidade e ensejar absolvição.',
      baseLegal: 'art. 50, §§ 1º e 2º, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-d3',
      dificuldade: 'dificil',
      enunciado:
        'A acusação quer afastar o § 4º (tráfico privilegiado) alegando que a quantidade de droga, por si só, demonstra dedicação a atividades criminosas. Qual a abordagem mais consistente da defesa?',
      alternativas: [
        {
          id: 'a',
          texto:
            'A grande quantidade, isoladamente, afasta automaticamente o privilégio.',
        },
        {
          id: 'b',
          texto:
            'A exclusão do privilégio exige fundamentação concreta de dedicação a atividades criminosas, não bastando presunção pela quantidade.',
        },
        { id: 'c', texto: 'O privilégio é incompatível com qualquer apreensão de droga.' },
        { id: 'd', texto: 'O § 4º só se aplica ao usuário do art. 28.' },
      ],
      corretaId: 'b',
      explicacao:
        'A negativa do § 4º deve ser concretamente fundamentada na dedicação a atividades criminosas ou na integração a organização. A quantidade pode ser um indício, mas, isoladamente, não autoriza presumir tais requisitos negativos.',
      baseLegal: 'art. 33, § 4º, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-d4',
      dificuldade: 'dificil',
      enunciado:
        'O réu foi condenado pelo art. 33 e, cumulativamente, pelo art. 35 (associação), com base nos mesmos fatos e sem demonstração de estabilidade do vínculo. Qual o questionamento técnico pertinente?',
      alternativas: [
        { id: 'a', texto: 'A cumulação é sempre obrigatória.' },
        {
          id: 'b',
          texto:
            'Sem prova de vínculo estável e permanente, a condenação pelo art. 35 carece de lastro, devendo ser afastada.',
        },
        { id: 'c', texto: 'O art. 35 absorve o art. 33 em qualquer caso.' },
        { id: 'd', texto: 'A associação dispensa qualquer prova de vínculo.' },
      ],
      corretaId: 'b',
      explicacao:
        'A condenação pelo art. 35 pressupõe demonstração do vínculo associativo estável e permanente. Ausente essa prova, a imputação autônoma de associação não se sustenta e deve ser afastada, sem prejuízo do art. 33.',
      baseLegal: 'art. 35, Lei 11.343/2006',
      revisado: false,
    },
    {
      id: 'drogas-d5',
      dificuldade: 'dificil',
      enunciado:
        'Em sede de execução, discute-se a aplicação retroativa de entendimento mais favorável quanto à não hediondez do tráfico privilegiado a uma condenação anterior. Qual o princípio que ampara o pleito da defesa?',
      alternativas: [
        { id: 'a', texto: 'A irretroatividade absoluta da lei penal.' },
        {
          id: 'b',
          texto:
            'A retroatividade da norma/entendimento mais benéfico ao réu (lex mitior).',
        },
        { id: 'c', texto: 'O princípio da insignificância.' },
        { id: 'd', texto: 'A vedação ao bis in idem.' },
      ],
      corretaId: 'b',
      explicacao:
        'A lei penal mais benéfica retroage para alcançar fatos anteriores (lex mitior). O reconhecimento de que o tráfico privilegiado não é hediondo, sendo mais favorável, pode repercutir em benefícios da execução de condenações anteriores.',
      baseLegal: 'art. 5º, XL, CF; art. 2º, parágrafo único, CP',
      revisado: false,
    },
  ],
}
