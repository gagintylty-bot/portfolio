import type { Lei } from '../types'

/**
 * Estatuto do Desarmamento (10.826/2003).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. 3 do tipo V/F. Todos revisado: false.
 *
 * ⚠️ RASCUNHO EDUCACIONAL — precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: 'desarmamento',
  numero: '10.826/2003',
  nome: 'Estatuto do Desarmamento',
  slug: 'estatuto-do-desarmamento',
  resumo:
    'Disciplina o registro, a posse e o porte de armas de fogo e munições. Tipifica condutas como posse e porte ilegais, disparo de arma de fogo e comércio ilegal, com penas distintas conforme a origem e a destinação da arma.',
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'desarmamento-f1',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente foi flagrado mantendo, dentro de sua residência, uma arma de fogo de uso permitido sem registro. Qual crime, em regra, lhe é imputado?',
      alternativas: [
        { id: 'a', texto: 'Porte ilegal de arma de fogo de uso permitido (art. 14).' },
        { id: 'b', texto: 'Posse irregular de arma de fogo de uso permitido (art. 12).' },
        { id: 'c', texto: 'Comércio ilegal de arma de fogo (art. 17).' },
        { id: 'd', texto: 'Disparo de arma de fogo (art. 15).' },
      ],
      corretaId: 'b',
      explicacao:
        'Manter arma de fogo de uso permitido sem registro no interior da residência ou dependência configura a posse irregular do art. 12. O porte se caracteriza quando a arma é trazida fora desses espaços.',
      baseLegal: 'art. 12, Lei 10.826/2003',
      revisado: false,
    },
    {
      id: 'desarmamento-f2',
      dificuldade: 'facil',
      enunciado:
        'Em uma blitz na via pública, o cliente foi encontrado trazendo consigo uma pistola de uso permitido sem autorização. Qual a tipificação correta?',
      alternativas: [
        { id: 'a', texto: 'Posse irregular de arma de fogo (art. 12).' },
        { id: 'b', texto: 'Porte ilegal de arma de fogo de uso permitido (art. 14).' },
        { id: 'c', texto: 'Conduta atípica, por ser arma de uso permitido.' },
        { id: 'd', texto: 'Contravenção penal.' },
      ],
      corretaId: 'b',
      explicacao:
        'Trazer consigo, portar ou conduzir arma de fogo de uso permitido fora da residência, sem autorização e em desacordo com a lei, configura o crime de porte ilegal do art. 14, com pena de reclusão de 2 a 4 anos e multa.',
      baseLegal: 'art. 14, Lei 10.826/2003',
      revisado: false,
    },
    {
      id: 'desarmamento-f3',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: portar ilegalmente arma de fogo de uso restrito recebe o mesmo tratamento penal que portar arma de fogo de uso permitido, com idêntica pena.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'A afirmação é falsa. O porte de arma de uso permitido é tipificado no art. 14 (reclusão de 2 a 4 anos), enquanto o de uso restrito ou proibido está no art. 16, com pena mais grave (reclusão de 4 a 8 anos e multa).',
      baseLegal: 'arts. 14 e 16, Lei 10.826/2003',
      revisado: false,
    },
    {
      id: 'desarmamento-f4',
      dificuldade: 'facil',
      enunciado:
        'O cliente efetuou disparos de arma de fogo para o alto, em via pública, durante uma festa, sem atingir ninguém e sem intenção de matar ou ferir. Qual o crime configurado?',
      alternativas: [
        { id: 'a', texto: 'Tentativa de homicídio.' },
        { id: 'b', texto: 'Disparo de arma de fogo (art. 15).' },
        { id: 'c', texto: 'Posse irregular (art. 12).' },
        { id: 'd', texto: 'Nenhum crime, pois não houve vítima.' },
      ],
      corretaId: 'b',
      explicacao:
        'Disparar arma de fogo ou acionar munição em lugar habitado, via pública ou em direção a ela, desde que a conduta não constitua crime mais grave, configura o crime do art. 15, com pena de reclusão de 2 a 4 anos e multa.',
      baseLegal: 'art. 15, Lei 10.826/2003',
      revisado: false,
    },
    {
      id: 'desarmamento-f5',
      dificuldade: 'facil',
      enunciado:
        'Durante busca domiciliar, foram encontradas apenas algumas munições de uso permitido, sem a arma correspondente. A defesa pergunta se a posse isolada de munição é típica. Qual a resposta?',
      alternativas: [
        { id: 'a', texto: 'A posse de munição é sempre conduta atípica.' },
        {
          id: 'b',
          texto:
            'A munição está expressamente prevista nos tipos penais, sendo típica a sua posse ou porte irregular.',
        },
        { id: 'c', texto: 'Só é típica se houver mais de cem cartuchos.' },
        { id: 'd', texto: 'Configura apenas infração administrativa.' },
      ],
      corretaId: 'b',
      explicacao:
        'Os tipos penais do Estatuto incluem expressamente munição e acessórios. A posse ou o porte irregular de munição, ainda que sem a arma, é, em regra, conduta típica, sem prejuízo da análise do princípio da insignificância em casos concretos.',
      baseLegal: 'arts. 12, 14 e 16, Lei 10.826/2003',
      revisado: false,
    },
    {
      id: 'desarmamento-f6',
      dificuldade: 'facil',
      enunciado:
        'O cliente foi preso vendendo armas de fogo sem autorização e em desacordo com a determinação legal, como atividade comercial. Qual o tipo penal aplicável?',
      alternativas: [
        { id: 'a', texto: 'Porte ilegal (art. 14).' },
        { id: 'b', texto: 'Comércio ilegal de arma de fogo (art. 17).' },
        { id: 'c', texto: 'Posse irregular (art. 12).' },
        { id: 'd', texto: 'Disparo de arma de fogo (art. 15).' },
      ],
      corretaId: 'b',
      explicacao:
        'Adquirir, alugar, vender, expor à venda ou de qualquer forma utilizar arma de fogo, no exercício de atividade comercial ou industrial, sem autorização ou em desacordo com a lei, configura o comércio ilegal do art. 17.',
      baseLegal: 'art. 17, Lei 10.826/2003',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'desarmamento-m1',
      dificuldade: 'medio',
      enunciado:
        'O réu foi flagrado portando uma arma de fogo desmuniciada e sem acesso imediato a munição. A defesa alega atipicidade por ausência de potencialidade lesiva. Qual a posição majoritária dos tribunais superiores?',
      alternativas: [
        { id: 'a', texto: 'A conduta é atípica, pois arma desmuniciada não oferece perigo.' },
        {
          id: 'b',
          texto:
            'O porte de arma, ainda que desmuniciada, é típico, por se tratar de crime de perigo abstrato.',
        },
        { id: 'c', texto: 'A conduta configura apenas contravenção.' },
        { id: 'd', texto: 'Depende de perícia que ateste a eficiência do projétil.' },
      ],
      corretaId: 'b',
      explicacao:
        'Os crimes de porte e posse são de perigo abstrato e de mera conduta. O STJ e o STF consolidaram que o porte de arma de fogo, ainda que desmuniciada, é típico, tutelando-se a incolumidade pública independentemente de munição.',
      baseLegal: 'art. 14, Lei 10.826/2003; STJ, jurisprudência consolidada',
      revisado: false,
    },
    {
      id: 'desarmamento-m2',
      dificuldade: 'medio',
      enunciado:
        'Encerrados os sucessivos prazos das campanhas de entrega voluntária e regularização (abolitio criminis temporária), surge a discussão sobre a posse de arma de fogo com registro vencido. Como tem sido tratada essa situação pelo STJ?',
      alternativas: [
        { id: 'a', texto: 'Configura sempre o crime de porte do art. 14.' },
        {
          id: 'b',
          texto:
            'A posse de arma de uso permitido com registro vencido tem sido tratada como mera irregularidade administrativa, e não como crime, segundo o STJ.',
        },
        { id: 'c', texto: 'Caracteriza comércio ilegal (art. 17).' },
        { id: 'd', texto: 'Implica perda automática da nacionalidade.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STJ firmou que a posse de arma de fogo de uso permitido com registro vencido configura mera irregularidade administrativa, sujeita à renovação, e não conduta criminosa, por ausência de lesividade penal relevante.',
      baseLegal: 'art. 12, Lei 10.826/2003; STJ, jurisprudência sobre registro vencido',
      revisado: false,
    },
    {
      id: 'desarmamento-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: o porte ilegal de arma de fogo de uso permitido é crime inafiançável e insuscetível de liberdade provisória.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'A afirmação é falsa. O STF (ADI 3.112) declarou inconstitucionais os dispositivos do Estatuto que vedavam a liberdade provisória e a fiança a determinadas condutas. Assim, admite-se a concessão de liberdade provisória, conforme o caso concreto.',
      baseLegal: 'art. 14, Lei 10.826/2003; STF, ADI 3.112',
      revisado: false,
    },
    {
      id: 'desarmamento-m4',
      dificuldade: 'medio',
      enunciado:
        'O réu portava simultaneamente, no mesmo contexto, duas armas de fogo de uso permitido. A acusação pretende imputar dois crimes de porte em concurso material. Qual a tese defensiva mais consistente?',
      alternativas: [
        { id: 'a', texto: 'Há necessariamente dois crimes em concurso material.' },
        {
          id: 'b',
          texto:
            'Trata-se de crime único, pois o porte simultâneo de mais de uma arma no mesmo contexto não multiplica o delito.',
        },
        { id: 'c', texto: 'Há crime continuado com aumento obrigatório de dois terços.' },
        { id: 'd', texto: 'A conduta é atípica por ausência de dolo específico.' },
      ],
      corretaId: 'b',
      explicacao:
        'O bem jurídico tutelado é a incolumidade pública. O porte simultâneo de mais de uma arma, no mesmo contexto fático, configura crime único, e não concurso de crimes, pois há uma única violação ao bem jurídico coletivo.',
      baseLegal: 'art. 14, Lei 10.826/2003; art. 70, CP',
      revisado: false,
    },
    {
      id: 'desarmamento-m5',
      dificuldade: 'medio',
      enunciado:
        'A defesa requer a aplicação do princípio da insignificância à posse de um único cartucho de munição, isolado, sem a arma e sem potencial lesivo no caso concreto. Como tem decidido o STJ?',
      alternativas: [
        { id: 'a', texto: 'O princípio da insignificância nunca incide nesses crimes.' },
        {
          id: 'b',
          texto:
            'O STJ admite, excepcionalmente, a insignificância na posse de ínfima quantidade de munição, desprovida de potencial lesivo no caso concreto.',
        },
        { id: 'c', texto: 'A insignificância só se aplica a armas de uso restrito.' },
        { id: 'd', texto: 'A conduta deve ser convertida em comércio ilegal.' },
      ],
      corretaId: 'b',
      explicacao:
        'Embora se trate de crime de perigo abstrato, o STJ tem admitido, em caráter excepcional, a aplicação do princípio da insignificância à apreensão de quantidade ínfima de munição, sem arma e sem potencial ofensivo demonstrado no caso concreto.',
      baseLegal: 'art. 12, Lei 10.826/2003; STJ, jurisprudência sobre insignificância',
      revisado: false,
    },
    {
      id: 'desarmamento-m6',
      dificuldade: 'medio',
      enunciado:
        'O réu, integrante de organização criminosa, é flagrado portando arma de fogo com numeração de série raspada. Qual a consequência típica relevante quanto à classificação da conduta?',
      alternativas: [
        { id: 'a', texto: 'A conduta é desclassificada para posse irregular.' },
        {
          id: 'b',
          texto:
            'O porte de arma com numeração raspada ou adulterada é equiparado às condutas de uso restrito, com pena mais grave (art. 16).',
        },
        { id: 'c', texto: 'A raspagem da numeração torna o fato atípico.' },
        { id: 'd', texto: 'A conduta configura apenas comércio ilegal.' },
      ],
      corretaId: 'b',
      explicacao:
        'Portar, possuir ou deter arma de fogo com numeração, marca ou sinal de identificação raspado, suprimido ou adulterado é conduta equiparada à do art. 16 (uso restrito), com pena de reclusão de 4 a 8 anos e multa.',
      baseLegal: 'art. 16, parágrafo único, IV, Lei 10.826/2003',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'desarmamento-d1',
      dificuldade: 'dificil',
      enunciado:
        'O réu foi condenado por posse de arma de fogo de uso permitido (art. 12) e, no mesmo contexto e local, por posse de arma de uso restrito (art. 16). A acusação pediu concurso material. Qual a abordagem mais técnica?',
      alternativas: [
        { id: 'a', texto: 'Aplica-se sempre concurso material com soma das penas.' },
        {
          id: 'b',
          texto:
            'Havendo posse simultânea de armas de calibres distintos no mesmo contexto, prevalece o tipo mais grave, configurando crime único, segundo orientação do STJ.',
        },
        { id: 'c', texto: 'As condutas são atípicas por bis in idem.' },
        { id: 'd', texto: 'Aplica-se obrigatoriamente o crime continuado.' },
      ],
      corretaId: 'b',
      explicacao:
        'Segundo o STJ, a posse ou o porte simultâneo de armas de uso permitido e restrito, no mesmo contexto fático, caracteriza crime único, devendo o agente responder pelo tipo mais grave (art. 16), e não em concurso de crimes.',
      baseLegal: 'arts. 12 e 16, Lei 10.826/2003; STJ, jurisprudência consolidada',
      revisado: false,
    },
    {
      id: 'desarmamento-d2',
      dificuldade: 'dificil',
      enunciado:
        'Em laudo pericial, constata-se que a arma apreendida está totalmente inapta a disparar, de forma absoluta e irreversível, funcionando como mera sucata. Qual a tese defensiva mais robusta?',
      alternativas: [
        { id: 'a', texto: 'Mesmo inapta, a arma sempre configura o crime de perigo abstrato.' },
        {
          id: 'b',
          texto:
            'A arma absolutamente ineficaz, atestada por perícia como incapaz de disparar, pode levar à atipicidade por ausência de potencial lesivo (crime impossível).',
        },
        { id: 'c', texto: 'A inaptidão é irrelevante porque o tipo é formal.' },
        { id: 'd', texto: 'A conduta deve ser desclassificada para disparo.' },
      ],
      corretaId: 'b',
      explicacao:
        'Embora o crime seja de perigo abstrato, parte da jurisprudência reconhece a atipicidade quando a perícia atesta inaptidão absoluta e definitiva da arma para disparar, por ausência total de potencial lesivo, equiparando a hipótese a crime impossível.',
      baseLegal: 'art. 14, Lei 10.826/2003; art. 17, CP',
      revisado: false,
    },
    {
      id: 'desarmamento-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Julgue a afirmação: a apreensão de uma arma de fogo desmuniciada em um contexto e de munição compatível em outro local distinto, sem unidade de desígnio, autoriza, em tese, a punição autônoma das condutas de posse de arma e de posse de munição.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'f',
      explicacao:
        'A afirmação é falsa em sua conclusão de regra. A jurisprudência tende a reconhecer crime único quando arma e munição são apreendidas no mesmo contexto fático e com unidade de desígnio. A punição autônoma é excepcional e exige efetiva autonomia das condutas, não decorrendo automaticamente da diferença de local.',
      baseLegal: 'arts. 12 e 14, Lei 10.826/2003; STJ, jurisprudência sobre crime único',
      revisado: false,
    },
    {
      id: 'desarmamento-d4',
      dificuldade: 'dificil',
      enunciado:
        'O réu pratica roubo mediante emprego de arma de fogo. A defesa alega que o porte ilegal deveria ser punido autonomamente, em concurso com o roubo. Qual o tratamento correto, em regra?',
      alternativas: [
        { id: 'a', texto: 'O porte é sempre punido em concurso material com o roubo.' },
        {
          id: 'b',
          texto:
            'Quando a arma é empregada exclusivamente como meio para o roubo, o porte costuma ser absorvido pelo princípio da consunção, salvo prova de contexto autônomo.',
        },
        { id: 'c', texto: 'O roubo é absorvido pelo porte ilegal.' },
        { id: 'd', texto: 'Ambos os crimes são atípicos.' },
      ],
      corretaId: 'b',
      explicacao:
        'Pelo princípio da consunção, quando o porte ilegal serve apenas de meio para a prática do roubo, sem autonomia, ele é absorvido pelo crime-fim. Se houver porte em contexto autônomo (anterior ou desvinculado), admite-se punição separada.',
      baseLegal: 'art. 14, Lei 10.826/2003; art. 157, § 2º-A, CP; princípio da consunção',
      revisado: false,
    },
    {
      id: 'desarmamento-d5',
      dificuldade: 'dificil',
      enunciado:
        'A acusação imputa ao réu o tráfico internacional de arma de fogo. Qual a competência para processar e julgar e qual a tipificação aplicável?',
      alternativas: [
        { id: 'a', texto: 'Justiça Estadual, tipificado no art. 14.' },
        {
          id: 'b',
          texto:
            'Justiça Federal, por se tratar do crime de tráfico internacional de arma de fogo (art. 18), que envolve transposição de fronteiras.',
        },
        { id: 'c', texto: 'Justiça Militar, por se tratar de armamento.' },
        { id: 'd', texto: 'Justiça Eleitoral, em ano de eleição.' },
      ],
      corretaId: 'b',
      explicacao:
        'O tráfico internacional de arma de fogo, acessório ou munição (art. 18) pressupõe transposição de fronteiras nacionais, atraindo, em regra, a competência da Justiça Federal, dado o interesse da União e o caráter transnacional.',
      baseLegal: 'art. 18, Lei 10.826/2003; art. 109, IV e V, CF',
      revisado: false,
    },
    {
      id: 'desarmamento-d6',
      dificuldade: 'dificil',
      enunciado:
        'O réu, agente de segurança privada, é processado por porte de arma fora do horário e local de serviço. A defesa invoca causa de aumento e a acusação discute a incidência do art. 19 e 20. Qual a observação tecnicamente correta sobre as majorantes do Estatuto?',
      alternativas: [
        { id: 'a', texto: 'O Estatuto não prevê causas de aumento de pena.' },
        {
          id: 'b',
          texto:
            'O Estatuto prevê aumento da pena pela metade quando a arma é de uso restrito ou proibido (art. 19) e quando o crime é praticado por integrante de órgãos e empresas de segurança, entre outros (art. 20).',
        },
        { id: 'c', texto: 'As majorantes só incidem sobre o crime de disparo.' },
        { id: 'd', texto: 'O aumento é sempre fixo de dois terços.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 19 prevê aumento da pena da metade quando os crimes dos arts. 17 e 18 envolverem arma de uso restrito ou proibido. O art. 20 majora as penas em determinadas hipóteses, inclusive quando praticados por integrantes de órgãos e empresas de segurança pública ou privada, refletindo a maior reprovabilidade.',
      baseLegal: 'arts. 19 e 20, Lei 10.826/2003',
      revisado: false,
    },
  ],
}
