import type { Briefing, Cena, Estilo, Roteiro, SfxNome, Forma3D } from './types'

/**
 * Motor de roteiro: transforma o briefing (produto, público, oferta, exemplos)
 * na estrutura clássica de VSL — hook, problema, agitação, solução, prova,
 * oferta e CTA — com copy adaptada ao estilo escolhido.
 */

interface BeatTemplate {
  beat: string
  sfx: SfxNome
  forma: Forma3D
  matiz: (base: number) => number
}

const ESTRUTURA: BeatTemplate[] = [
  { beat: 'Hook', sfx: 'impacto', forma: 'icosaedro', matiz: (b) => b },
  { beat: 'Problema', sfx: 'whoosh', forma: 'cubo', matiz: (b) => b + 18 },
  { beat: 'Agitação', sfx: 'riser', forma: 'piramide', matiz: (b) => b + 36 },
  { beat: 'Solução', sfx: 'brilho', forma: 'anel', matiz: (b) => b + 150 },
  { beat: 'Prova', sfx: 'whoosh', forma: 'icosaedro', matiz: (b) => b + 165 },
  { beat: 'Oferta', sfx: 'caixa', forma: 'cubo', matiz: (b) => b + 180 },
  { beat: 'CTA', sfx: 'clique', forma: 'anel', matiz: (b) => b + 195 },
]

const MATIZ_BASE: Record<Estilo, number> = {
  urgencia: 0, // vermelhos → verdes
  premium: 260, // violetas → dourados
  educativo: 210, // azuis → cianos
  energetico: 25, // laranjas → magentas
}

/** Divide a descrição em benefícios (linhas, vírgulas ou pontos). */
function extrairBeneficios(descricao: string): string[] {
  return descricao
    .split(/\n|;|(?<=\D)\.(?=\s|$)|,(?=\s[A-ZÀ-Úa-zà-ú])/)
    .map((s) => s.trim().replace(/^[-•*]\s*/, ''))
    .filter((s) => s.length > 3)
    .slice(0, 4)
}

/** Primeiras palavras significativas de uma frase, pra virar título de tela. */
function titularizar(frase: string, max = 6): string {
  const palavras = frase.replace(/[.!?]+$/, '').split(/\s+/)
  if (palavras.length <= max) return frase.replace(/[.!?]+$/, '')
  return palavras.slice(0, max).join(' ') + '…'
}

interface CopyBeats {
  hook: { narracao: string; titulo: string; destaques: string[] }
  problema: { narracao: string; titulo: string; destaques: string[] }
  agitacao: { narracao: string; titulo: string; destaques: string[] }
  solucao: { narracao: string; titulo: string; destaques: string[] }
  prova: { narracao: string; titulo: string; destaques: string[]; bullets: string[] }
  oferta: { narracao: string; titulo: string; destaques: string[] }
  cta: { narracao: string; titulo: string; destaques: string[] }
}

function gerarCopy(b: Briefing, beneficios: string[]): CopyBeats {
  const produto = b.produto.trim() || 'esse método'
  const publico = b.publico.trim() || 'você'
  const oferta = b.oferta.trim()
  const principal = beneficios[0] ?? b.descricao.trim() ?? 'o resultado que você procura'

  switch (b.estilo) {
    case 'urgencia':
      return {
        hook: {
          narracao: `Pare tudo o que você está fazendo. Se você é ${publico}, os próximos 60 segundos podem mudar completamente o seu jogo.`,
          titulo: 'PARE TUDO',
          destaques: ['PARE'],
        },
        problema: {
          narracao: `Todos os dias, ${publico} perdem tempo e dinheiro tentando resolver isso sozinhos — e a maioria desiste antes de ver qualquer resultado.`,
          titulo: 'Você está perdendo dinheiro',
          destaques: ['perdendo', 'dinheiro'],
        },
        agitacao: {
          narracao: `E a cada dia que passa fica pior: enquanto você hesita, outros já estão colhendo os resultados que deveriam ser seus.`,
          titulo: 'A cada dia fica PIOR',
          destaques: ['PIOR'],
        },
        solucao: {
          narracao: `É exatamente por isso que existe ${produto}: ${principal}.`,
          titulo: titularizar(`Conheça ${produto}`),
          destaques: [produto],
        },
        prova: {
          narracao: `Não é promessa — é o que ${produto} entrega, na prática, pra quem decide agir.`,
          titulo: 'Veja o que você leva',
          destaques: ['você leva'],
          bullets: beneficios,
        },
        oferta: {
          narracao: oferta
            ? `E hoje a condição é essa: ${oferta}. Mas é por tempo limitado.`
            : `E hoje você entra com uma condição especial — mas é por tempo limitado.`,
          titulo: 'Condição por tempo LIMITADO',
          destaques: ['LIMITADO'],
        },
        cta: {
          narracao: `Clique no botão agora e garanta sua vaga antes que feche. Depois, não reclame que não avisei.`,
          titulo: 'GARANTA AGORA',
          destaques: ['AGORA'],
        },
      }
    case 'premium':
      return {
        hook: {
          narracao: `Existe uma diferença silenciosa entre quem tenta e quem domina. E ela começa com uma decisão.`,
          titulo: 'A diferença é silenciosa',
          destaques: ['silenciosa'],
        },
        problema: {
          narracao: `${capitalizar(publico)} sabem: o problema nunca foi falta de esforço — foi falta do método certo.`,
          titulo: 'Não é esforço. É método.',
          destaques: ['método'],
        },
        agitacao: {
          narracao: `E sem o método certo, cada tentativa custa o seu ativo mais caro: tempo.`,
          titulo: 'Cada tentativa custa tempo',
          destaques: ['tempo'],
        },
        solucao: {
          narracao: `${capitalizar(produto)} foi desenhado para isso: ${principal}.`,
          titulo: titularizar(capitalizar(produto)),
          destaques: [produto],
        },
        prova: {
          narracao: `Cada detalhe foi pensado para entregar uma experiência completa.`,
          titulo: 'O que está incluído',
          destaques: ['incluído'],
          bullets: beneficios,
        },
        oferta: {
          narracao: oferta
            ? `O acesso é seletivo: ${oferta}.`
            : `O acesso é seletivo — e as condições de entrada, exclusivas.`,
          titulo: 'Acesso seletivo',
          destaques: ['seletivo'],
        },
        cta: {
          narracao: `Se você chegou até aqui, já sabe o que fazer. O próximo passo está no botão abaixo.`,
          titulo: 'Dê o próximo passo',
          destaques: ['próximo passo'],
        },
      }
    case 'educativo':
      return {
        hook: {
          narracao: `Deixa eu te mostrar uma coisa que quase ninguém explica direito sobre isso.`,
          titulo: 'Quase ninguém explica isso',
          destaques: ['ninguém explica'],
        },
        problema: {
          narracao: `A maioria de ${publico} trava sempre no mesmo ponto — e não é por falta de capacidade.`,
          titulo: 'Todo mundo trava aqui',
          destaques: ['trava'],
        },
        agitacao: {
          narracao: `O detalhe é que, sem corrigir isso, qualquer outro esforço vira retrabalho.`,
          titulo: 'Esforço sem direção = retrabalho',
          destaques: ['retrabalho'],
        },
        solucao: {
          narracao: `Foi pra resolver exatamente isso que criei ${produto}: ${principal}.`,
          titulo: titularizar(`Como ${produto} resolve`),
          destaques: [produto],
        },
        prova: {
          narracao: `Na prática, é isso que você aprende e leva com você.`,
          titulo: 'O que você aprende',
          destaques: ['aprende'],
          bullets: beneficios,
        },
        oferta: {
          narracao: oferta
            ? `E o investimento é acessível: ${oferta}.`
            : `E o melhor: o investimento é muito menor do que o custo de continuar travado.`,
          titulo: 'Investimento acessível',
          destaques: ['acessível'],
        },
        cta: {
          narracao: `Toque no botão abaixo e comece hoje. Eu te vejo do outro lado.`,
          titulo: 'Comece hoje',
          destaques: ['hoje'],
        },
      }
    case 'energetico':
      return {
        hook: {
          narracao: `Ei, ${publico}! Presta atenção porque isso aqui vai fazer diferença no seu resultado ainda essa semana.`,
          titulo: 'ISSO MUDA SEU RESULTADO',
          destaques: ['MUDA'],
        },
        problema: {
          narracao: `Você já tentou de tudo, não é? E mesmo assim parece que o resultado nunca chega.`,
          titulo: 'Já tentou de tudo?',
          destaques: ['tudo'],
        },
        agitacao: {
          narracao: `A real é que continuar do mesmo jeito só garante uma coisa: mais do mesmo.`,
          titulo: 'Mais do mesmo? NÃO.',
          destaques: ['NÃO'],
        },
        solucao: {
          narracao: `Chegou ${produto}! ${capitalizar(principal)}.`,
          titulo: titularizar(`Chegou ${produto}!`),
          destaques: [produto],
        },
        prova: {
          narracao: `Olha só tudo o que você destrava de uma vez:`,
          titulo: 'Você destrava TUDO isso',
          destaques: ['TUDO'],
          bullets: beneficios,
        },
        oferta: {
          narracao: oferta
            ? `E a oferta de hoje está insana: ${oferta}!`
            : `E a oferta de hoje está simplesmente insana!`,
          titulo: 'OFERTA INSANA',
          destaques: ['INSANA'],
        },
        cta: {
          narracao: `Clica no botão AGORA e bora pra cima! Sua vaga está te esperando.`,
          titulo: 'BORA PRA CIMA 🚀',
          destaques: ['BORA'],
        },
      }
  }
}

function capitalizar(s: string): string {
  const t = s.trim()
  return t ? t[0].toUpperCase() + t.slice(1) : t
}

/** ~16 caracteres por segundo de narração, com piso de 3.2s por cena. */
function estimarDuracao(narracao: string): number {
  return Math.max(3200, Math.round((narracao.length / 16) * 1000))
}

export function gerarRoteiro(b: Briefing): Roteiro {
  const observacoes: string[] = []
  if (!b.produto.trim()) observacoes.push('Você não nomeou o produto — usei um genérico. Volte ao briefing pra deixar a VSL mais forte.')
  if (!b.publico.trim()) observacoes.push('Sem público definido, o hook fica genérico. Diga pra quem você vende.')
  if (!b.oferta.trim()) observacoes.push('Sem oferta/preço, a cena de oferta usa escassez genérica.')

  const beneficios = extrairBeneficios(b.descricao)
  if (beneficios.length === 0) {
    beneficios.push('Resultado real, sem enrolação', 'Passo a passo direto ao ponto', 'Suporte pra você não travar')
    observacoes.push('Descreva os benefícios do produto (um por linha) pra cena de prova usar os seus, não os genéricos.')
  }

  // Exemplos/referências viram um reforço no hook: puxamos a frase mais curta
  // como "promessa emprestada" de estilo.
  const exemploCurto = b.exemplos
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s.length > 10 && s.length < 90)
    .sort((x, y) => x.length - y.length)[0]

  const copy = gerarCopy(b, beneficios)
  if (exemploCurto) {
    copy.hook.narracao += ` ${exemploCurto}`
  }

  const base = MATIZ_BASE[b.estilo]
  const beatsCopy = [copy.hook, copy.problema, copy.agitacao, copy.solucao, copy.prova, copy.oferta, copy.cta]

  const cenas: Cena[] = ESTRUTURA.map((tpl, i) => {
    const c = beatsCopy[i]
    return {
      id: `cena-${i}`,
      beat: tpl.beat,
      narracao: c.narracao,
      titulo: c.titulo,
      destaques: c.destaques,
      bullets: 'bullets' in c ? (c as CopyBeats['prova']).bullets : undefined,
      sfx: tpl.sfx,
      forma: tpl.forma,
      matiz: ((tpl.matiz(base) % 360) + 360) % 360,
      duracaoMs: estimarDuracao(c.narracao),
    }
  })

  return { cenas, observacoes }
}

/** Exporta o roteiro como texto pronto pra gravação/dublagem. */
export function roteiroParaTexto(r: Roteiro, b: Briefing): string {
  const linhas = [
    `ROTEIRO DE VSL — ${b.produto || 'Produto'}`,
    `Estilo: ${b.estilo} · Formato: ${b.formato}`,
    '',
    ...r.cenas.flatMap((c) => [`[${c.beat.toUpperCase()}]`, c.narracao, '']),
  ]
  return linhas.join('\n')
}

/** Exporta legendas SRT com base na duração estimada de cada cena. */
export function roteiroParaSrt(r: Roteiro): string {
  let t = 0
  const ts = (ms: number) => {
    const h = String(Math.floor(ms / 3600000)).padStart(2, '0')
    const m = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0')
    const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0')
    const mi = String(ms % 1000).padStart(3, '0')
    return `${h}:${m}:${s},${mi}`
  }
  return r.cenas
    .map((c, i) => {
      const ini = t
      t += c.duracaoMs
      return `${i + 1}\n${ts(ini)} --> ${ts(t)}\n${c.narracao}\n`
    })
    .join('\n')
}
