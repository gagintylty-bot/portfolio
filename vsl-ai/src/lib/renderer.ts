import type { Cena, Formato } from './types'

/**
 * Renderer do vídeo: desenha cada cena no canvas com fundo animado,
 * partículas, um elemento 3D girando (projeção em perspectiva feita à mão —
 * sem three.js, pra manter o bundle leve) e tipografia cinética.
 */

type V3 = [number, number, number]

interface Malha {
  vertices: V3[]
  arestas: [number, number][]
}

const MALHAS: Record<Cena['forma'], Malha> = {
  cubo: {
    vertices: [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
    ],
    arestas: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ],
  },
  piramide: {
    vertices: [[0, -1.3, 0], [-1, 1, -1], [1, 1, -1], [1, 1, 1], [-1, 1, 1]],
    arestas: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [2, 3], [3, 4], [4, 1]],
  },
  anel: (() => {
    const vertices: V3[] = []
    const arestas: [number, number][] = []
    const N = 24
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2
      vertices.push([Math.cos(a) * 1.3, Math.sin(a) * 1.3, 0.25])
      vertices.push([Math.cos(a) * 1.3, Math.sin(a) * 1.3, -0.25])
    }
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N
      arestas.push([i * 2, j * 2], [i * 2 + 1, j * 2 + 1], [i * 2, i * 2 + 1])
    }
    return { vertices, arestas }
  })(),
  icosaedro: (() => {
    const f = (1 + Math.sqrt(5)) / 2
    const vertices: V3[] = [
      [-1, f, 0], [1, f, 0], [-1, -f, 0], [1, -f, 0],
      [0, -1, f], [0, 1, f], [0, -1, -f], [0, 1, -f],
      [f, 0, -1], [f, 0, 1], [-f, 0, -1], [-f, 0, 1],
    ].map(([x, y, z]) => [x / f, y / f, z / f] as V3)
    const arestas: [number, number][] = []
    for (let i = 0; i < vertices.length; i++)
      for (let j = i + 1; j < vertices.length; j++) {
        const [a, b] = [vertices[i], vertices[j]]
        const d = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
        if (d < 1.3) arestas.push([i, j])
      }
    return { vertices, arestas }
  })(),
}

function rotacionar([x, y, z]: V3, rx: number, ry: number): V3 {
  // rotação em Y, depois em X
  const cy = Math.cos(ry), sy = Math.sin(ry)
  const cx = Math.cos(rx), sx = Math.sin(rx)
  const x1 = x * cy + z * sy
  const z1 = -x * sy + z * cy
  const y2 = y * cx - z1 * sx
  const z2 = y * sx + z1 * cx
  return [x1, y2, z2]
}

export function dimensoes(formato: Formato): { w: number; h: number } {
  return formato === '16:9' ? { w: 1280, h: 720 } : { w: 720, h: 1280 }
}

export interface QuadroInfo {
  cena: Cena
  /** progresso 0–1 dentro da cena */
  p: number
  /** tempo global em ms (pra animações contínuas) */
  t: number
  indice: number
  total: number
}

const suave = (p: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, p)), 3)

export function desenharQuadro(ctx: CanvasRenderingContext2D, q: QuadroInfo) {
  const { width: w, height: h } = ctx.canvas
  const { cena, p, t } = q
  const matiz = cena.matiz + Math.sin(t / 4000) * 8

  // fundo: gradiente radial animado
  const g = ctx.createRadialGradient(
    w / 2 + Math.sin(t / 3000) * w * 0.1, h / 2 + Math.cos(t / 3700) * h * 0.1, 0,
    w / 2, h / 2, Math.max(w, h) * 0.8,
  )
  g.addColorStop(0, `hsl(${matiz} 60% 16%)`)
  g.addColorStop(1, `hsl(${matiz + 30} 70% 5%)`)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, w, h)

  // grade em perspectiva (chão)
  ctx.save()
  ctx.strokeStyle = `hsl(${matiz} 80% 55% / 0.14)`
  ctx.lineWidth = 1
  const horizonte = h * 0.62
  for (let i = 0; i <= 14; i++) {
    const x = (i / 14) * w
    ctx.beginPath()
    ctx.moveTo(w / 2 + (x - w / 2) * 0.15, horizonte)
    ctx.lineTo(x, h)
    ctx.stroke()
  }
  for (let i = 1; i <= 6; i++) {
    const desloc = ((t / 60) % (h * 0.06))
    const y = horizonte + Math.pow(i / 6, 2) * (h - horizonte) + desloc * (i / 6)
    if (y > h) continue
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(w, y)
    ctx.stroke()
  }
  ctx.restore()

  // partículas subindo
  ctx.save()
  for (let i = 0; i < 40; i++) {
    const px = ((i * 173.3) % w)
    const py = h - (((t * (0.02 + (i % 5) * 0.012) + i * 97) % (h * 1.2)))
    const r = 1 + (i % 3)
    ctx.fillStyle = `hsl(${matiz + 40} 90% 70% / ${0.06 + (i % 4) * 0.05})`
    ctx.beginPath()
    ctx.arc(px, py, r, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()

  // elemento 3D girando
  const malha = MALHAS[cena.forma]
  const escala = Math.min(w, h) * 0.16 * (0.8 + 0.2 * suave(p * 3))
  const cx3 = w / 2
  const cy3 = h * (q.cena.bullets ? 0.16 : 0.24)
  ctx.save()
  ctx.lineWidth = 2
  const rx = t / 2300
  const ry = t / 1500
  const proj = malha.vertices.map((v) => {
    const [x, y, z] = rotacionar(v, rx, ry)
    const persp = 3.2 / (3.2 + z) // câmera a 3.2 unidades
    return { x: cx3 + x * escala * persp, y: cy3 + y * escala * persp, z }
  })
  for (const [a, b] of malha.arestas) {
    const profundidade = (proj[a].z + proj[b].z) / 2
    const alfa = 0.35 + 0.45 * (1 - (profundidade + 1.5) / 3)
    ctx.strokeStyle = `hsl(${matiz + 50} 95% 68% / ${alfa})`
    ctx.beginPath()
    ctx.moveTo(proj[a].x, proj[a].y)
    ctx.lineTo(proj[b].x, proj[b].y)
    ctx.stroke()
  }
  // vértices brilhantes
  for (const v of proj) {
    ctx.fillStyle = `hsl(${matiz + 60} 100% 80% / 0.9)`
    ctx.beginPath()
    ctx.arc(v.x, v.y, 2.5, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()

  // rótulo do beat (canto superior esquerdo, fora do elemento 3D)
  ctx.save()
  ctx.font = `600 ${Math.round(h * 0.022)}px system-ui, sans-serif`
  ctx.fillStyle = `hsl(${matiz + 40} 90% 70% / 0.85)`
  ctx.textAlign = 'left'
  ctx.fillText(`● ${cena.beat.toUpperCase()}`, w * 0.035, h * 0.06)
  ctx.restore()

  // título com tipografia cinética: palavras entram uma a uma
  const palavras = cena.titulo.split(/\s+/)
  const porPalavra = 0.5 / Math.max(1, palavras.length)
  const tamBase = Math.min(w * 0.11, h * 0.09)
  ctx.save()
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // quebra em linhas que caibam
  const linhas: string[][] = [[]]
  ctx.font = `800 ${tamBase}px system-ui, sans-serif`
  for (const pal of palavras) {
    const atual = linhas[linhas.length - 1]
    if (ctx.measureText([...atual, pal].join(' ')).width > w * 0.86 && atual.length > 0) linhas.push([pal])
    else atual.push(pal)
  }

  const yBase = h * (cena.bullets ? 0.34 : 0.52)
  let idxPalavra = 0
  linhas.forEach((linha, li) => {
    // mede prefixos pra posicionar cada palavra individualmente
    const larguraLinha = ctx.measureText(linha.join(' ')).width
    let x = w / 2 - larguraLinha / 2
    for (const pal of linha) {
      const inicio = 0.08 + idxPalavra * porPalavra
      const pp = suave((p - inicio) / 0.18)
      const larg = ctx.measureText(pal + ' ').width
      if (pp > 0) {
        const destaque = cena.destaques.some((d) => pal.toLowerCase().replace(/[^\wà-ú]/gi, '').includes(d.toLowerCase().split(/\s+/)[0].replace(/[^\wà-ú]/gi, '')))
        ctx.save()
        ctx.globalAlpha = pp
        const escalaP = 0.6 + 0.4 * pp
        const px = x + larg / 2
        const py = yBase + li * tamBase * 1.18 + (1 - pp) * 30
        ctx.translate(px, py)
        ctx.scale(escalaP, escalaP)
        ctx.fillStyle = destaque ? `hsl(${matiz + 55} 100% 62%)` : 'white'
        ctx.shadowColor = destaque ? `hsl(${matiz + 55} 100% 55% / 0.9)` : 'rgba(0,0,0,0.6)'
        ctx.shadowBlur = destaque ? 26 : 12
        ctx.fillText(pal, 0, 0)
        ctx.restore()
      }
      x += larg
      idxPalavra++
    }
  })
  ctx.restore()

  // bullets (cena de prova): entram em sequência
  if (cena.bullets && cena.bullets.length > 0) {
    ctx.save()
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    let tamB = Math.min(w * 0.038, h * 0.034)
    ctx.font = `600 ${tamB}px system-ui, sans-serif`
    let maisLarga = Math.max(...cena.bullets.map((b) => ctx.measureText('✓  ' + b).width))
    // encolhe a fonte até o bullet mais largo caber na tela
    if (maisLarga > w * 0.88) {
      tamB *= (w * 0.88) / maisLarga
      ctx.font = `600 ${tamB}px system-ui, sans-serif`
      maisLarga = w * 0.88
    }
    const x0 = Math.max(w * 0.06, w / 2 - maisLarga / 2)
    cena.bullets.forEach((b, i) => {
      const inicio = 0.3 + i * 0.14
      const pp = suave((p - inicio) / 0.14)
      if (pp <= 0) return
      const y = h * 0.52 + i * tamB * 2.1
      ctx.globalAlpha = pp
      const desloc = (1 - pp) * 40
      ctx.fillStyle = `hsl(${matiz + 55} 100% 62%)`
      ctx.fillText('✓', x0 + desloc, y)
      ctx.fillStyle = 'white'
      ctx.fillText(b, x0 + desloc + tamB * 1.6, y)
    })
    ctx.restore()
  }

  // barra de progresso da cena + do vídeo
  ctx.save()
  ctx.fillStyle = `hsl(${matiz + 50} 90% 60% / 0.25)`
  ctx.fillRect(0, h - 6, w, 6)
  ctx.fillStyle = `hsl(${matiz + 50} 95% 62%)`
  ctx.fillRect(0, h - 6, w * ((q.indice + p) / q.total), 6)
  ctx.restore()

  // vinheta
  const vin = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.45, w / 2, h / 2, Math.max(w, h) * 0.75)
  vin.addColorStop(0, 'rgba(0,0,0,0)')
  vin.addColorStop(1, 'rgba(0,0,0,0.45)')
  ctx.fillStyle = vin
  ctx.fillRect(0, 0, w, h)

  // flash de transição no início da cena
  if (p < 0.06) {
    ctx.fillStyle = `rgba(255,255,255,${(1 - p / 0.06) * 0.35})`
    ctx.fillRect(0, 0, w, h)
  }
}
