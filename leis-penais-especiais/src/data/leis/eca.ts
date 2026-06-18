import type { Lei } from '../types'

/**
 * RASCUNHO EDUCACIONAL — ECA (crimes) (8.069/1990).
 * 18 casos: 6 fácil, 6 médio, 6 difícil. Todos revisado: false.
 *
 * ⚠️ Precisa de revisão por advogado antes de ir ao ar.
 */
export const lei: Lei = {
  id: "eca",
  numero: "8.069/1990",
  nome: "ECA (crimes)",
  slug: "eca",
  resumo:
    "O Estatuto da Criança e do Adolescente prevê crimes próprios em sua parte penal, voltados à proteção integral de crianças e adolescentes, além de disciplinar o procedimento de apuração de ato infracional.",
  cenarios: [
    // ---------------------------- FÁCIL ----------------------------
    {
      id: 'eca-f1',
      dificuldade: 'facil',
      enunciado:
        'Seu cliente, dono de uma conveniência, foi flagrado vendendo uma garrafa de cachaça a um adolescente de 15 anos. Como o ECA, em regra, trata atualmente essa conduta de venda de bebida alcoólica a menor?',
      alternativas: [
        { id: 'a', texto: 'É conduta atípica, configurando mera infração administrativa.' },
        { id: 'b', texto: 'É crime de vender bebida alcoólica a criança ou adolescente, com pena de detenção e multa.' },
        { id: 'c', texto: 'É crime hediondo, insuscetível de fiança.' },
        { id: 'd', texto: 'É contravenção penal punida apenas com multa.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 243 do ECA tipifica como crime vender, fornecer, servir, ministrar ou entregar bebida alcoólica a criança ou adolescente, com pena de detenção de 2 a 4 anos e multa, além de outras sanções administrativas.',
      baseLegal: 'art. 243, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-f2',
      dificuldade: 'facil',
      tipo: 'vf',
      enunciado:
        'Para fins do ECA, considera-se criança a pessoa até doze anos de idade incompletos e adolescente aquela entre doze e dezoito anos de idade.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 2º do ECA define criança como a pessoa até 12 anos de idade incompletos e adolescente aquela entre 12 e 18 anos de idade, distinção relevante para a tipificação de diversos crimes do Estatuto.',
      baseLegal: 'art. 2º, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-f3',
      dificuldade: 'facil',
      enunciado:
        'Um homem foi denunciado por fotografar cena de sexo explícito envolvendo uma criança. Qual o dispositivo do ECA que tipifica produzir ou registrar esse tipo de cena pornográfica?',
      alternativas: [
        { id: 'a', texto: 'Art. 240, que pune produzir, reproduzir ou registrar cena de sexo explícito ou pornográfica com criança ou adolescente.' },
        { id: 'b', texto: 'Art. 232, que trata de submeter a criança a vexame.' },
        { id: 'c', texto: 'Art. 230, que cuida de privação de liberdade ilegal.' },
        { id: 'd', texto: 'Art. 243, que trata de venda de bebida alcoólica.' },
      ],
      corretaId: 'a',
      explicacao:
        'O art. 240 do ECA pune com reclusão de 4 a 8 anos e multa quem produz, reproduz, dirige, fotografa, filma ou registra, por qualquer meio, cena de sexo explícito ou pornográfica envolvendo criança ou adolescente.',
      baseLegal: 'art. 240, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-f4',
      dificuldade: 'facil',
      enunciado:
        'Um adolescente foi apreendido em flagrante por ato infracional análogo a furto. Qual é o nome técnico que o ECA dá às respostas estatais aplicáveis ao adolescente autor de ato infracional?',
      alternativas: [
        { id: 'a', texto: 'Penas privativas de liberdade.' },
        { id: 'b', texto: 'Medidas socioeducativas.' },
        { id: 'c', texto: 'Medidas de segurança.' },
        { id: 'd', texto: 'Sanções administrativas.' },
      ],
      corretaId: 'b',
      explicacao:
        'Ao adolescente autor de ato infracional aplicam-se medidas socioeducativas, como advertência, obrigação de reparar o dano, prestação de serviços à comunidade, liberdade assistida, semiliberdade e internação, e não penas em sentido estrito.',
      baseLegal: 'art. 112, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-f5',
      dificuldade: 'facil',
      enunciado:
        'Aplicada a um adolescente a medida socioeducativa de internação, discute-se seu prazo máximo. Qual a regra geral prevista no ECA?',
      alternativas: [
        { id: 'a', texto: 'A internação tem prazo fixo e improrrogável de 6 meses.' },
        { id: 'b', texto: 'A internação não comporta prazo determinado, mas não pode, em regra, ultrapassar 3 anos, devendo o adolescente ser liberado no máximo aos 21 anos.' },
        { id: 'c', texto: 'A internação é por prazo indeterminado e sem qualquer limite máximo.' },
        { id: 'd', texto: 'A internação dura, no mínimo, 5 anos em qualquer caso.' },
      ],
      corretaId: 'b',
      explicacao:
        'A internação não comporta prazo determinado, mas a medida não pode, em regra, ultrapassar o período de 3 anos, com reavaliação no máximo a cada 6 meses, devendo o adolescente ser liberado, no máximo, aos 21 anos de idade.',
      baseLegal: 'art. 121, §§ 2º, 3º e 5º, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-f6',
      dificuldade: 'facil',
      enunciado:
        'O dirigente de uma entidade de acolhimento privou um adolescente de sua liberdade, deixando de comunicar a apreensão à autoridade competente e à família. Que crime do ECA, em tese, se discute?',
      alternativas: [
        { id: 'a', texto: 'Sequestro qualificado do Código Penal, exclusivamente.' },
        { id: 'b', texto: 'Crime de privar a criança ou adolescente de sua liberdade, procedendo à sua apreensão sem estar em flagrante ou sem ordem escrita da autoridade competente.' },
        { id: 'c', texto: 'Nenhum crime, pois dirigentes de entidade têm poder disciplinar amplo.' },
        { id: 'd', texto: 'Apenas infração administrativa sujeita a multa.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 230 do ECA pune privar a criança ou o adolescente de sua liberdade, procedendo à sua apreensão sem estar em flagrante de ato infracional ou inexistindo ordem escrita da autoridade judiciária competente.',
      baseLegal: 'art. 230, Lei 8.069/1990',
      revisado: false,
    },

    // ---------------------------- MÉDIO ----------------------------
    {
      id: 'eca-m1',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente foi denunciado por manter em seu computador, armazenadas, fotografias de pornografia infantil que apenas baixou da internet, sem produzi-las. A defesa sustenta atipicidade por ele não ter sido o produtor. Qual a melhor análise?',
      alternativas: [
        { id: 'a', texto: 'A conduta é atípica, pois somente o art. 240 (produção) é crime.' },
        { id: 'b', texto: 'A conduta é típica, pois o art. 241-B pune adquirir, possuir ou armazenar esse material, ainda que sem produção própria.' },
        { id: 'c', texto: 'A conduta configura apenas infração administrativa.' },
        { id: 'd', texto: 'A conduta só é crime se houver compartilhamento com terceiros.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 241-B do ECA tipifica autonomamente adquirir, possuir ou armazenar, por qualquer meio, fotografia, vídeo ou outra forma de registro de cena de sexo explícito ou pornográfica envolvendo criança ou adolescente, independentemente de produção própria.',
      baseLegal: 'art. 241-B, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-m2',
      dificuldade: 'medio',
      enunciado:
        'Na audiência de apresentação, discute-se a competência para processar e julgar adolescente acusado de ato infracional. A qual juízo cabe, em regra, essa apuração?',
      alternativas: [
        { id: 'a', texto: 'À Justiça comum criminal, como se réu adulto fosse.' },
        { id: 'b', texto: 'Ao Tribunal do Júri, por se tratar de fato grave.' },
        { id: 'c', texto: 'À Justiça da Infância e da Juventude, conforme regras de competência do ECA.' },
        { id: 'd', texto: 'À Justiça Militar, em qualquer hipótese.' },
      ],
      corretaId: 'c',
      explicacao:
        'A apuração de ato infracional atribuído a adolescente é da competência da Justiça da Infância e da Juventude, conforme o regramento próprio do ECA, que disciplina o procedimento e a aplicação das medidas socioeducativas.',
      baseLegal: 'arts. 146 e 148, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-m3',
      dificuldade: 'medio',
      tipo: 'vf',
      enunciado:
        'O crime de submeter criança ou adolescente, sob sua autoridade, guarda ou vigilância, a vexame ou a constrangimento exige a qualidade especial de quem detenha esse poder sobre a vítima.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'O art. 232 do ECA é crime próprio, pois exige que o agente submeta a vexame ou a constrangimento a criança ou adolescente que esteja sob sua autoridade, guarda ou vigilância, o que delimita o círculo de autores possíveis.',
      baseLegal: 'art. 232, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-m4',
      dificuldade: 'medio',
      enunciado:
        'A denúncia imputa ao seu cliente o crime de aliciar, assediar ou constranger criança, por meio de comunicação eletrônica, com o fim de praticar ato libidinoso. Qual o tratamento legal dessa conduta no ECA?',
      alternativas: [
        { id: 'a', texto: 'É conduta atípica enquanto não houver contato físico.' },
        { id: 'b', texto: 'É crime autônomo de aliciamento de criança para fim libidinoso, inclusive por meio eletrônico.' },
        { id: 'c', texto: 'É apenas ato preparatório impunível.' },
        { id: 'd', texto: 'É infração administrativa de competência do Conselho Tutelar.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 241-D do ECA tipifica aliciar, assediar, instigar ou constranger, por qualquer meio de comunicação, criança com o fim de com ela praticar ato libidinoso, alcançando expressamente o chamado aliciamento por meio eletrônico.',
      baseLegal: 'art. 241-D, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-m5',
      dificuldade: 'medio',
      enunciado:
        'Seu cliente, comerciante, vendeu fogos de estampido e de artifício a uma criança de 10 anos, que poderiam causar dano físico em caso de uso indevido. Como o ECA, em regra, tipifica essa conduta?',
      alternativas: [
        { id: 'a', texto: 'Como crime de vender a criança ou adolescente produtos cujos componentes possam causar dependência física ou psíquica.' },
        { id: 'b', texto: 'Como crime de vender, fornecer ou entregar a criança fogos de estampido e de artifício, exceto os de reduzido potencial.' },
        { id: 'c', texto: 'Como conduta atípica, pois fogos são de livre comércio.' },
        { id: 'd', texto: 'Como crime de corrupção de menores do Código Penal apenas.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 244 do ECA pune vender, fornecer ainda que gratuitamente ou entregar, de qualquer forma, a criança ou adolescente fogos de estampido e de artifício, exceto aqueles que, pelo seu reduzido potencial, sejam incapazes de provocar dano físico.',
      baseLegal: 'art. 244, Lei 8.069/1990',
      revisado: false,
    },
    {
      id: 'eca-m6',
      dificuldade: 'medio',
      enunciado:
        'Em ação penal por crime do art. 240 do ECA, a defesa alega que a vítima aparentava ser maior de idade nas imagens e que não houve dolo. Qual ponto é tecnicamente mais relevante para a tipicidade?',
      alternativas: [
        { id: 'a', texto: 'A efetiva condição de criança ou adolescente da vítima retratada, sendo o erro de tipo discutível conforme o caso concreto.' },
        { id: 'b', texto: 'A aparência da vítima é absolutamente irrelevante, configurando responsabilidade objetiva.' },
        { id: 'c', texto: 'Basta a confissão para condenar, independentemente da idade da vítima.' },
        { id: 'd', texto: 'O crime só se consuma com a divulgação das imagens.' },
      ],
      corretaId: 'a',
      explicacao:
        'A tipicidade do art. 240 pressupõe que a pessoa retratada seja efetivamente criança ou adolescente. A discussão sobre a aparência da vítima e o conhecimento do agente toca o dolo e a eventual alegação de erro de tipo, a ser examinada no caso concreto.',
      baseLegal: 'art. 240, Lei 8.069/1990; art. 20, CP',
      revisado: false,
    },

    // ---------------------------- DIFÍCIL ----------------------------
    {
      id: 'eca-d1',
      dificuldade: 'dificil',
      enunciado:
        'Seu cliente foi denunciado pelo art. 241-A do ECA por divulgar, em grupo de mensagens, imagens de pornografia infantil. A defesa questiona a competência. Considerando que a divulgação ocorreu pela internet com potencial transnacional, qual competência tende a se firmar?',
      alternativas: [
        { id: 'a', texto: 'Sempre da Justiça Estadual, por se tratar de crime do ECA.' },
        { id: 'b', texto: 'Da Justiça Federal, quando a publicação ocorre em ambiente de acesso transnacional, atraindo o interesse da União conforme entendimento dos tribunais superiores.' },
        { id: 'c', texto: 'Do Tribunal do Júri, por crime contra a pessoa.' },
        { id: 'd', texto: 'Da Justiça Militar, por envolver meio eletrônico.' },
      ],
      corretaId: 'b',
      explicacao:
        'O STF firmou que compete à Justiça Federal processar crimes do art. 241-A do ECA quando a divulgação de material de pornografia infantil ocorre em ambiente virtual de acesso transnacional, atraindo a aplicação de convenção internacional e o interesse da União.',
      baseLegal: 'art. 241-A, Lei 8.069/1990; art. 109, V, CF; STF, RE 628.624 (Tema 393)',
      revisado: false,
    },
    {
      id: 'eca-d2',
      dificuldade: 'dificil',
      enunciado:
        'O Ministério Público denunciou seu cliente por corrupção de menores por ter praticado roubo na companhia de um adolescente, mas sem comprovar que o adolescente foi efetivamente corrompido. Qual a tese técnica mais consistente sobre a natureza do crime?',
      alternativas: [
        { id: 'a', texto: 'O crime de corrupção de menores é material e exige prova da efetiva corrupção do adolescente.' },
        { id: 'b', texto: 'O crime de corrupção de menores é formal, bastando a prova da participação do menor no ato, conforme súmula do STJ.' },
        { id: 'c', texto: 'A conduta é atípica se o adolescente já tinha passagens anteriores.' },
        { id: 'd', texto: 'O crime exige que o agente seja maior de 21 anos.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Súmula 500 do STJ consolidou que a configuração do crime de corrupção de menores (art. 244-B do ECA) independe de prova da efetiva corrupção do menor, por se tratar de delito formal, bastando a comprovação da participação do menor na prática do ato.',
      baseLegal: 'art. 244-B, Lei 8.069/1990; Súmula 500, STJ',
      revisado: false,
    },
    {
      id: 'eca-d3',
      dificuldade: 'dificil',
      tipo: 'vf',
      enunciado:
        'Para a aplicação da medida socioeducativa de internação ao adolescente, é imprescindível a prova de sua participação no ato infracional e a observância do contraditório e da ampla defesa, não se admitindo internação fundada exclusivamente na gravidade abstrata do ato.',
      alternativas: [
        { id: 'v', texto: 'Verdadeiro' },
        { id: 'f', texto: 'Falso' },
      ],
      corretaId: 'v',
      explicacao:
        'A internação é medida excepcional, sujeita ao devido processo legal, ao contraditório e à ampla defesa, e às hipóteses taxativas do art. 122. A jurisprudência veda a internação fundada apenas na gravidade abstrata do ato infracional, exigindo demonstração concreta de seus pressupostos.',
      baseLegal: 'arts. 110, 121 e 122, Lei 8.069/1990; Súmula 492, STJ',
      revisado: false,
    },
    {
      id: 'eca-d4',
      dificuldade: 'dificil',
      enunciado:
        'Seu cliente foi condenado por ato infracional análogo a tráfico, com aplicação de internação fundamentada unicamente na natureza do ato. A defesa impetra habeas corpus. Qual o argumento de maior força?',
      alternativas: [
        { id: 'a', texto: 'A internação é a regra para qualquer ato infracional grave.' },
        { id: 'b', texto: 'O ato infracional análogo a tráfico, por si só, não autoriza a internação, que exige enquadramento nas hipóteses do art. 122 do ECA.' },
        { id: 'c', texto: 'O adolescente não pode sofrer qualquer medida socioeducativa por tráfico.' },
        { id: 'd', texto: 'A internação é obrigatória por equiparação a crime hediondo.' },
      ],
      corretaId: 'b',
      explicacao:
        'A Súmula 492 do STJ estabelece que o ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de internação ao adolescente. A medida exige enquadramento nas hipóteses taxativas do art. 122 do ECA, com fundamentação concreta.',
      baseLegal: 'art. 122, Lei 8.069/1990; Súmula 492, STJ',
      revisado: false,
    },
    {
      id: 'eca-d5',
      dificuldade: 'dificil',
      enunciado:
        'Em concurso de pessoas, seu cliente adulto praticou crime juntamente com um adolescente. O Ministério Público imputa o crime principal e, em cúmulo, a corrupção de menores. A defesa alega bis in idem. Qual a análise mais técnica?',
      alternativas: [
        { id: 'a', texto: 'Há bis in idem, pois os fatos são os mesmos, devendo a corrupção de menores ser afastada.' },
        { id: 'b', texto: 'Não há bis in idem; a corrupção de menores tutela bem jurídico distinto e pode concorrer com o crime praticado em coautoria com o adolescente.' },
        { id: 'c', texto: 'A corrupção de menores absorve sempre o crime principal.' },
        { id: 'd', texto: 'O crime principal absorve a corrupção de menores em qualquer hipótese.' },
      ],
      corretaId: 'b',
      explicacao:
        'A corrupção de menores (art. 244-B do ECA) tutela bem jurídico próprio, a formação moral do menor, distinto do bem protegido pelo crime praticado em coautoria. Por isso, em regra, não há bis in idem na cumulação, podendo haver concurso entre os delitos.',
      baseLegal: 'art. 244-B, Lei 8.069/1990; art. 70, CP',
      revisado: false,
    },
    {
      id: 'eca-d6',
      dificuldade: 'dificil',
      enunciado:
        'A defesa pretende a desclassificação da conduta do art. 241-A (divulgar) para o art. 241-B (armazenar), sustentando que seu cliente apenas guardava os arquivos sem disponibilizá-los a terceiros. Qual o critério decisivo de distinção entre os tipos?',
      alternativas: [
        { id: 'a', texto: 'A diferença está apenas na pena, não na conduta.' },
        { id: 'b', texto: 'A divulgação, oferta ou disponibilização a terceiros caracteriza o art. 241-A; a mera posse ou armazenamento sem disponibilização caracteriza o art. 241-B.' },
        { id: 'c', texto: 'Ambos exigem produção própria do material.' },
        { id: 'd', texto: 'Não há distinção possível, pois são o mesmo crime.' },
      ],
      corretaId: 'b',
      explicacao:
        'O art. 241-A pune oferecer, trocar, disponibilizar, transmitir, distribuir, publicar ou divulgar o material, exigindo conduta de disponibilização a terceiros. Já o art. 241-B pune a aquisição, posse ou armazenamento. A existência ou não de disponibilização é o critério distintivo central.',
      baseLegal: 'arts. 241-A e 241-B, Lei 8.069/1990',
      revisado: false,
    },
  ],
}
