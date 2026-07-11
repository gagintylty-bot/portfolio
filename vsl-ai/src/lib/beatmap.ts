import type { BeatEntry, BeatMap, Estilo, DuracaoPreset, VideoConfig, SfxNome, EntradaTipo, TransicaoTipo, CameraMove } from './types'

interface ParsedInfo {
  produto: string
  verbo: string
  publico: string
  tempo: string
  valor: string | null
}


function parse(texto: string): ParsedInfo {
  const low = texto.toLowerCase()

  const VERBOS: Record<string, string> = {
    'vender':'vender','venda':'vender','vendas':'vender',
    'faturar':'faturar','fatura':'faturar','faturamento':'faturar',
    'ganhar':'ganhar','ganha':'ganhar',
    'crescer':'crescer','cresce':'crescer','crescimento':'crescer',
    'aprender':'aprender','aprende':'aprender',
    'criar':'criar','cria':'criar',
    'lançar':'lançar','lança':'lançar',
    'montar':'montar','monta':'montar',
    'escalar':'escalar','escala':'escalar',
    'editar':'editar','edição':'editar',
    'fotografar':'fotografar','fotografia':'fotografar',
    'emagrecer':'emagrecer','emagrecimento':'emagrecer',
    'investir':'investir','investimento':'investir',
    'economizar':'economizar',
    'treinar':'treinar','treinamento':'treinar',
    'viajar':'viajar','viagem':'viajar',
    'empreender':'empreender','empreendimento':'empreender',
  }
  let verbo = 'crescer'
  for (const [kw, v] of Object.entries(VERBOS)) {
    if (low.includes(kw)) { verbo = v; break }
  }

  const TIPOS = ['curso','método','sistema','programa','mentoria','consultoria','ferramenta','plataforma','comunidade','treinamento','workshop','produto','serviço','app','aplicativo']
  const tipo = TIPOS.find(t => low.includes(t)) || ''

  // audience = text after "para/pra"
  const audM = texto.match(/\b(?:para|pra)\s+([^,.;\n]+)/i)
  const publico = audM ? audM[1].trim().replace(/\s+que\s+.*$/i, '').trim().slice(0, 35) : 'quem quer resultado'

  // product = up to "para/pra" or first 50 chars
  const paraIdx = texto.search(/\s+(?:para|pra)\s+/i)
  const produtoRaw = (paraIdx > 0 ? texto.slice(0, paraIdx) : texto).trim()
  const produto = (tipo ? produtoRaw : (tipo || produtoRaw)).slice(0, 50)

  const tempoM = texto.match(/(\d+\s*dias?|\d+\s*semanas?|\d+\s*(?:meses?|mês))/i)
  const tempo = tempoM ? tempoM[1] : '30 dias'

  const valorM = texto.match(/R\$\s*[\d.,]+\s*k?(?:\s*\/\s*(?:mês|meses?|mes))?/i)
  const valor = valorM ? valorM[0] : null

  return { produto: produto || 'esse método', verbo, publico, tempo, valor }
}

function cap(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s
}

interface BeatCopy {
  frase: string
  titulo: string
  destaques: string[]
  bullets?: string[]
}

function gerarCopy(tipo: string, info: ParsedInfo, estilo: Estilo, cta: string): BeatCopy {
  const { produto, verbo, publico, tempo, valor } = info
  const valorStr = valor ? ` de ${valor}` : ''
  const ctaFinal = cta.trim() || `Garanta agora e comece a ${verbo}`

  if (estilo === 'agressivo') {
    switch (tipo) {
      case 'HOOK': return {
        frase: `${cap(publico)}, você ainda está tentando ${verbo} sem ver resultado de verdade?`,
        titulo: `AINDA SEM RESULTADO`,
        destaques: ['ainda','resultado'],
      }
      case 'DOR': return {
        frase: `Toda semana é a mesma história: você trabalha, mas o dinheiro não aparece.`,
        titulo: `A MESMA HISTÓRIA TODO MÊS`,
        destaques: ['mesma','história'],
      }
      case 'AGITAÇÃO': return {
        frase: `Enquanto você espera, seus concorrentes já estão usando ${produto} pra ${verbo}.`,
        titulo: `SEUS CONCORRENTES CRESCEM`,
        destaques: ['concorrentes','crescem'],
      }
      case 'SOLUÇÃO': return {
        frase: `${cap(produto)} é o método direto que prova: dá pra ${verbo}${valorStr} em ${tempo}.`,
        titulo: `${verbo.toUpperCase()} EM ${tempo.toUpperCase()}`,
        destaques: [tempo.split(' ')[0], verbo],
      }
      case 'PROVA': return {
        frase: `Números reais de quem parou de esperar e aplicou.`,
        titulo: `RESULTADOS REAIS`,
        destaques: ['resultados','reais'],
        bullets: gerarBullets(verbo, valor, tempo),
      }
      case 'OFERTA': return {
        frase: `${ctaFinal} — oferta válida por tempo limitado.`,
        titulo: `TEMPO LIMITADO`,
        destaques: ['tempo','limitado'],
      }
      case 'CTA': return {
        frase: `Clica agora e ${verbo} diferente. Não fica de fora.`,
        titulo: `CLICA E ${verbo.toUpperCase()}`,
        destaques: [verbo.toUpperCase()],
      }
    }
  }

  if (estilo === 'premium') {
    switch (tipo) {
      case 'HOOK': return {
        frase: `Existe uma diferença silenciosa entre quem tenta e quem domina. E ela começa aqui.`,
        titulo: `A DIFERENÇA É SILENCIOSA`,
        destaques: ['diferença','silenciosa'],
      }
      case 'DOR': return {
        frase: `O problema nunca foi falta de esforço. Foi falta do método certo para ${verbo}.`,
        titulo: `NÃO É ESFORÇO É MÉTODO`,
        destaques: ['método'],
      }
      case 'AGITAÇÃO': return {
        frase: `Sem o método certo, cada tentativa custa o seu ativo mais caro: tempo.`,
        titulo: `CADA DIA CUSTA CARO`,
        destaques: ['tempo'],
      }
      case 'SOLUÇÃO': return {
        frase: `${cap(produto)} foi criado exatamente para isso — ${verbo}${valorStr} em ${tempo}.`,
        titulo: cap(produto).slice(0, 25),
        destaques: [produto.split(' ')[0].toLowerCase()],
      }
      case 'PROVA': return {
        frase: `Uma experiência completa, com resultado comprovado.`,
        titulo: `RESULTADO COMPROVADO`,
        destaques: ['resultado','comprovado'],
        bullets: gerarBullets(verbo, valor, tempo),
      }
      case 'OFERTA': return {
        frase: `${ctaFinal}. O acesso é exclusivo e as condições mudam sem aviso.`,
        titulo: `ACESSO EXCLUSIVO`,
        destaques: ['exclusivo'],
      }
      case 'CTA': return {
        frase: `Se você chegou até aqui, já sabe o que fazer. O próximo passo está no botão.`,
        titulo: `DÊ O PRÓXIMO PASSO`,
        destaques: ['próximo','passo'],
      }
    }
  }

  // tech
  switch (tipo) {
    case 'HOOK': return {
      frase: `Vou te mostrar o que quase ninguém explica sobre como ${verbo} de verdade.`,
      titulo: `NINGUÉM EXPLICA ISSO`,
      destaques: ['ninguém','explica'],
    }
    case 'DOR': return {
      frase: `${cap(publico)} travam sempre no mesmo ponto — e não é por falta de capacidade.`,
      titulo: `TODO MUNDO TRAVA AQUI`,
      destaques: ['trava'],
    }
    case 'AGITAÇÃO': return {
      frase: `Sem resolver isso, qualquer esforço vira retrabalho. Você volta à estaca zero.`,
      titulo: `ESFORÇO VIROU RETRABALHO`,
      destaques: ['retrabalho'],
    }
    case 'SOLUÇÃO': return {
      frase: `${cap(produto)} resolve exatamente isso — ${verbo}${valorStr} em ${tempo}.`,
      titulo: cap(produto).slice(0, 25),
      destaques: [produto.split(' ')[0].toLowerCase()],
    }
    case 'PROVA': return {
      frase: `Dados reais. Sem enrolação. Veja o que você aprende e aplica.`,
      titulo: `DADOS REAIS RESULTADOS`,
      destaques: ['dados','reais'],
      bullets: gerarBullets(verbo, valor, tempo),
    }
    case 'OFERTA': return {
      frase: `${ctaFinal} — acesso liberado por tempo limitado.`,
      titulo: `ACESSO LIBERADO`,
      destaques: ['liberado'],
    }
    case 'CTA': return {
      frase: `Clica agora, acessa o método e começa a ${verbo} de verdade. É simples.`,
      titulo: `ACESSA E COMEÇA`,
      destaques: ['acessa','começa'],
    }
  }

  return { frase: '', titulo: '', destaques: [] }
}

function gerarBullets(verbo: string, valor: string | null, tempo: string): string[] {
  const valStr = valor ? valor : 'resultado em menos de ' + tempo
  const BULLETS: Record<string, string[]> = {
    vender: ['0 a 100 pedidos por mês', 'Faturamento triplicado em 21 dias', valStr],
    faturar: [valStr, 'Resultado na primeira quinzena', 'Método validado por centenas de alunos'],
    ganhar: [valStr, 'Primeiros resultados em 7 dias', 'Consistência mês após mês'],
    crescer: ['Crescimento de 3× em seguidores', '10× mais alcance orgânico', valStr],
    editar: ['Do zero ao portfólio completo', 'Clientes pagando R$2k+ por projeto', valStr],
    emagrecer: ['Primeiros 5 kg em 30 dias', 'Sem dieta restritiva', valStr],
  }
  return BULLETS[verbo] ?? ['Resultado comprovado em ' + tempo, 'Método direto sem enrolação', valStr]
}

interface BeatTemplate {
  tipo: string
  sfx: SfxNome
  entrada: EntradaTipo
  transicao: TransicaoTipo
  camera: CameraMove
  matizOff: number
}

const ESTRUTURA: BeatTemplate[] = [
  { tipo: 'HOOK',     sfx: 'impacto', entrada: 'stamp',       transicao: 'flash',       camera: 'punch-in', matizOff:   0 },
  { tipo: 'DOR',      sfx: 'whoosh',  entrada: 'slide',       transicao: 'wipe',        camera: 'hold',     matizOff:  18 },
  { tipo: 'AGITAÇÃO', sfx: 'riser',   entrada: 'zoom',        transicao: 'zoom-through',camera: 'dolly-in', matizOff:  36 },
  { tipo: 'SOLUÇÃO',  sfx: 'brilho',  entrada: 'blur-settle', transicao: 'wipe',        camera: 'dolly-in', matizOff: 150 },
  { tipo: 'PROVA',    sfx: 'whoosh',  entrada: 'slide',       transicao: 'match-cut',   camera: 'orbit',    matizOff: 168 },
  { tipo: 'OFERTA',   sfx: 'caixa',   entrada: 'stamp',       transicao: 'wipe',        camera: 'dolly-in', matizOff: 185 },
  { tipo: 'CTA',      sfx: 'clique',  entrada: 'stamp',       transicao: 'flash',       camera: 'punch-in', matizOff: 200 },
]

const MATIZ_BASE: Record<Estilo, number> = { agressivo: 0, premium: 45, tech: 195 }

const BEAT_INDICES: Record<DuracaoPreset, number[]> = {
  15: [0, 3, 6],
  30: [0, 1, 3, 4, 6],
  45: [0, 1, 2, 3, 4, 5, 6],
}

export function gerarBeatMap(config: VideoConfig): BeatMap {
  const { texto, estilo, duracaoSeg, cta } = config
  const info = parse(texto)
  const base = MATIZ_BASE[estilo]
  const idxs = BEAT_INDICES[duracaoSeg]
  const msPorBeat = Math.round((duracaoSeg * 1000) / idxs.length)

  const beats: BeatEntry[] = idxs.map((i, seq) => {
    const tpl = ESTRUTURA[i]
    const copy = gerarCopy(tpl.tipo, info, estilo, cta)
    const matiz = ((base + tpl.matizOff) % 360 + 360) % 360

    // Prova beat gets slightly more time for bullets
    const duracaoMs = tpl.tipo === 'PROVA' ? Math.round(msPorBeat * 1.3) : msPorBeat

    return {
      id: `beat-${seq}`,
      beatNome: tpl.tipo,
      frase: copy.frase,
      tituloVisual: copy.titulo,
      destaques: copy.destaques,
      bullets: copy.bullets,
      sfx: tpl.sfx,
      entrada: tpl.entrada,
      transicao: tpl.transicao,
      camera: tpl.camera,
      matiz,
      duracaoMs,
    }
  })

  return {
    beats,
    estilo,
    totalMs: beats.reduce((s, b) => s + b.duracaoMs, 0),
  }
}

export function beatMapParaTexto(map: BeatMap): string {
  return map.beats.map(b => `[${b.beatNome}]\n${b.frase}`).join('\n\n')
}
