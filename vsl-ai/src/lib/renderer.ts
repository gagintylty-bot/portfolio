import type { BeatEntry, BeatMap, Estilo, CameraMove } from './types'

export const W = 540
export const H = 960

// ── easing ──────────────────────────────────────────────────────────────────
const clamp = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x))
const easeOutCubic  = (t: number) => 1 - Math.pow(1 - clamp(t), 3)
const easeOutExpo   = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * clamp(t))
const easeOutBack   = (t: number) => { const c = 1.70158 + 1; const tc = clamp(t) - 1; return 1 + c * tc * tc * tc + 1.70158 * tc * tc }
const easeInOutQuad = (t: number) => { const tc = clamp(t); return tc < .5 ? 2*tc*tc : 1-Math.pow(-2*tc+2,2)/2 }

// ── wireframe shapes ─────────────────────────────────────────────────────────
type V3 = [number, number, number]
interface Malha { verts: V3[]; edges: [number,number][] }

const MALHAS: Record<string, Malha> = {
  cubo: {
    verts: [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],
    edges: [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],
  },
  icosaedro: (() => {
    const f = (1 + Math.sqrt(5)) / 2
    const verts: V3[] = [
      [-1,f,0],[1,f,0],[-1,-f,0],[1,-f,0],
      [0,-1,f],[0,1,f],[0,-1,-f],[0,1,-f],
      [f,0,-1],[f,0,1],[-f,0,-1],[-f,0,1],
    ].map(([x,y,z]) => [x/f,y/f,z/f] as V3)
    const edges: [number,number][] = []
    for (let i = 0; i < verts.length; i++)
      for (let j = i+1; j < verts.length; j++) {
        const [a,b] = [verts[i],verts[j]]
        if (Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]) < 1.3) edges.push([i,j])
      }
    return { verts, edges }
  })(),
  anel: (() => {
    const N = 24, verts: V3[] = [], edges: [number,number][] = []
    for (let i = 0; i < N; i++) {
      const a = (i/N)*Math.PI*2
      verts.push([Math.cos(a)*1.3, Math.sin(a)*1.3, 0.28])
      verts.push([Math.cos(a)*1.3, Math.sin(a)*1.3,-0.28])
    }
    for (let i = 0; i < N; i++) {
      const j = (i+1)%N
      edges.push([i*2,j*2],[i*2+1,j*2+1],[i*2,i*2+1])
    }
    return { verts, edges }
  })(),
}
const FORMA_PER_BEAT = ['icosaedro','cubo','cubo','anel','icosaedro','cubo','anel']

function rotate([x,y,z]: V3, rx: number, ry: number): V3 {
  const cy=Math.cos(ry),sy=Math.sin(ry),cx=Math.cos(rx),sx=Math.sin(rx)
  const x1=x*cy+z*sy, z1=-x*sy+z*cy, y2=y*cx-z1*sx, z2=y*sx+z1*cx
  return [x1,y2,z2]
}

// ── grain pregeneration ──────────────────────────────────────────────────────
const GRAIN_FRAMES = 4
let grainCanvases: HTMLCanvasElement[] = []

function buildGrain(w: number, h: number) {
  grainCanvases = Array.from({ length: GRAIN_FRAMES }, () => {
    const c = document.createElement('canvas')
    c.width = Math.ceil(w/4); c.height = Math.ceil(h/4)
    const gx = c.getContext('2d')!
    const img = gx.createImageData(c.width, c.height)
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255
      img.data[i] = v; img.data[i+1] = v; img.data[i+2] = v; img.data[i+3] = 22
    }
    gx.putImageData(img, 0, 0)
    return c
  })
}

export function initRenderer() {
  buildGrain(W, H)
}

// ── text chunking ─────────────────────────────────────────────────────────────
function chunks(titulo: string): string[] {
  const ws = titulo.toUpperCase().trim().split(/\s+/).filter(Boolean)
  if (ws.length <= 2) return [ws.join(' ')]
  if (ws.length <= 4) {
    const mid = Math.ceil(ws.length / 2)
    return [ws.slice(0, mid).join(' '), ws.slice(mid).join(' ')]
  }
  const third = Math.ceil(ws.length / 3)
  return [ws.slice(0, third).join(' '), ws.slice(third, third*2).join(' '), ws.slice(third*2).join(' ')].filter(Boolean)
}

interface ChunkState { text: string; cp: number; isLast: boolean }

function activeChunk(ch: string[], p: number): ChunkState | null {
  const n = ch.length
  for (let i = 0; i < n; i++) {
    const s = i / n, e = (i+1) / n
    if (p >= s - 0.01 && p < e + 0.01) {
      return { text: ch[i], cp: clamp((p - s) / (e - s)), isLast: i === n-1 }
    }
  }
  return null
}

// ── colour helpers ────────────────────────────────────────────────────────────
function accentColor(estilo: Estilo, matiz: number): string {
  if (estilo === 'agressivo') return `hsl(${matiz} 100% 55%)`
  if (estilo === 'premium')   return `hsl(${matiz} 85% 58%)`
  return `hsl(${matiz} 100% 60%)`
}

function bgColor(estilo: Estilo, matiz: number): string {
  if (estilo === 'agressivo') return `hsl(${matiz} 8% 5%)`
  if (estilo === 'premium')   return `hsl(${matiz} 10% 4%)`
  return `hsl(${matiz} 25% 4%)`
}

// ── font stack ────────────────────────────────────────────────────────────────
function fontStack(estilo: Estilo): string {
  if (estilo === 'agressivo') return "Impact, 'Arial Black', 'Haettenschweiler', sans-serif"
  if (estilo === 'premium')   return "'Oswald', 'Arial Narrow', Impact, sans-serif"
  return "'Courier New', 'Lucida Console', monospace"
}

// ── auto font size ────────────────────────────────────────────────────────────
function autoSize(ctx: CanvasRenderingContext2D, text: string, stack: string, maxW: number, maxH: number): number {
  let sz = Math.min(maxH, 200)
  while (sz > 28) {
    ctx.font = `900 ${sz}px ${stack}`
    if (ctx.measureText(text).width <= maxW) return sz
    sz -= 6
  }
  return 28
}

// ── background ────────────────────────────────────────────────────────────────
function drawBackground(ctx: CanvasRenderingContext2D, beat: BeatEntry, _p: number, t: number, estilo: Estilo) {
  const { matiz } = beat
  // solid dark base
  ctx.fillStyle = bgColor(estilo, matiz)
  ctx.fillRect(0, 0, W, H)

  // large colour orb (parallax layer 1)
  const ox = W * 0.5 + Math.sin(t / 5000) * W * 0.15
  const oy = H * 0.35 + Math.cos(t / 6000) * H * 0.08
  const gr = ctx.createRadialGradient(ox, oy, 0, ox, oy, W * 0.75)
  gr.addColorStop(0, `hsl(${matiz} 70% 18% / 0.55)`)
  gr.addColorStop(0.5, `hsl(${matiz+15} 60% 12% / 0.25)`)
  gr.addColorStop(1, 'transparent')
  ctx.fillStyle = gr
  ctx.fillRect(0, 0, W, H)

  if (estilo === 'tech') {
    // tech grid
    ctx.save()
    ctx.strokeStyle = `hsl(${matiz} 80% 55% / 0.07)`
    ctx.lineWidth = 1
    for (let x = 0; x < W; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
    }
    for (let y = 0; y < H; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
    }
    ctx.restore()
  } else if (estilo === 'agressivo') {
    // diagonal streak
    ctx.save()
    ctx.globalAlpha = 0.12 + Math.sin(t/1800) * 0.04
    ctx.translate(W/2, H/2)
    ctx.rotate(-0.25)
    const sg = ctx.createLinearGradient(-W*0.8, 0, W*0.8, 0)
    sg.addColorStop(0, 'transparent')
    sg.addColorStop(0.4, `hsl(${matiz} 100% 45%)`)
    sg.addColorStop(0.6, `hsl(${matiz} 100% 45%)`)
    sg.addColorStop(1, 'transparent')
    ctx.fillStyle = sg
    ctx.fillRect(-W*2, -H*0.35, W*4, H*0.7)
    ctx.restore()
  }

  // halftone dots
  ctx.save()
  const spacing = 22
  for (let x = spacing/2; x < W; x += spacing) {
    for (let y = spacing/2; y < H; y += spacing) {
      const d = (Math.sin(x/60 + t/8000) * Math.sin(y/50 + t/9000) + 1) / 2
      const r = 2.2 * d
      if (r < 0.5) continue
      ctx.fillStyle = `hsl(${matiz} 60% 55% / ${(0.03 + d * 0.04).toFixed(2)})`
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill()
    }
  }
  ctx.restore()
}

// ── wireframe element ─────────────────────────────────────────────────────────
function drawWireframe(ctx: CanvasRenderingContext2D, beat: BeatEntry, beatIdx: number, p: number, t: number, camMove: CameraMove, estilo: Estilo) {
  const forma = FORMA_PER_BEAT[beatIdx % FORMA_PER_BEAT.length]
  const malha = MALHAS[forma]
  const { matiz } = beat

  // camera scale
  let camScale = 1
  if (camMove === 'dolly-in') camScale = 1 + easeInOutQuad(p) * 0.06
  else if (camMove === 'punch-in') {
    const phase = clamp(p / 0.25)
    camScale = p < 0.25 ? 1 + easeOutBack(phase) * 0.12 : 1.06 - (p - 0.25) * 0.04
  } else if (camMove === 'hold') {
    camScale = 1 + Math.sin(t/2500) * 0.015
  } else if (camMove === 'orbit') {
    camScale = 1.04
  }

  const scale = Math.min(W, H) * 0.18 * camScale * (0.75 + 0.25 * easeOutCubic(p * 4))
  const cx3 = W / 2, cy3 = H * 0.22

  // rotation speed varies by beat type
  const orbitExtra = camMove === 'orbit' ? p * Math.PI * 0.6 : 0
  const rx = t / 2800
  const ry = t / 1800 + orbitExtra

  const proj = malha.verts.map(v => {
    const [x,y,z] = rotate(v, rx, ry)
    const persp = 3.5 / (3.5 + z)
    return { x: cx3 + x * scale * persp, y: cy3 + y * scale * persp, z }
  })

  ctx.save()
  ctx.lineWidth = estilo === 'agressivo' ? 2.5 : 1.5
  for (const [a, b] of malha.edges) {
    const depth = (proj[a].z + proj[b].z) / 2
    const alpha = 0.12 + 0.18 * (1 - (depth + 1.5) / 3)
    ctx.strokeStyle = `hsl(${matiz+50} 95% 68% / ${alpha.toFixed(2)})`
    ctx.beginPath(); ctx.moveTo(proj[a].x, proj[a].y); ctx.lineTo(proj[b].x, proj[b].y); ctx.stroke()
  }
  for (const v of proj) {
    ctx.fillStyle = `hsl(${matiz+60} 100% 80% / 0.35)`
    ctx.beginPath(); ctx.arc(v.x, v.y, 1.5, 0, Math.PI*2); ctx.fill()
  }
  ctx.restore()
}

// ── typography ────────────────────────────────────────────────────────────────
function drawTypo(ctx: CanvasRenderingContext2D, beat: BeatEntry, p: number, _t: number, estilo: Estilo) {
  const { tituloVisual, destaques, matiz, entrada } = beat
  const acc = accentColor(estilo, matiz)
  const stack = fontStack(estilo)
  const ch = chunks(tituloVisual)
  const active = activeChunk(ch, p)
  if (!active) return

  const { text, cp, isLast } = active
  const ep = clamp(cp / 0.22)  // entry 0→1 in first 22% of chunk

  // entry animation
  let sx = 1, sy = 1, ox = 0, alpha = 1, blur = 0

  if (entrada === 'stamp') {
    const scale = 1 + (1 - easeOutBack(ep)) * 0.55
    sx = sy = scale; alpha = ep > 0.05 ? 1 : ep / 0.05
  } else if (entrada === 'slide') {
    ox = (1 - easeOutExpo(ep)) * -W * 0.45
    alpha = clamp(ep * 3.5)
  } else if (entrada === 'zoom') {
    const sc = 0.25 + easeOutCubic(ep) * 0.75
    sx = sy = sc; alpha = clamp(ep * 4)
  } else if (entrada === 'blur-settle') {
    blur = (1 - easeOutCubic(ep)) * 14
    const sc = 1 + (1 - easeOutCubic(ep)) * 0.15
    sx = sy = sc; alpha = 0.4 + ep * 0.6
  }

  // exit animation (non-last chunks)
  const exitP = isLast ? 0 : clamp((cp - 0.82) / 0.18)
  if (exitP > 0) {
    ox += exitP * W * 0.28
    alpha *= (1 - exitP)
  }

  const tyY = H * (beat.bullets ? 0.55 : 0.58)
  const maxW = W * 0.88
  const fs = autoSize(ctx, text, stack, maxW, H * 0.22)

  ctx.save()
  if (blur > 0.3) ctx.filter = `blur(${blur.toFixed(1)}px)`
  ctx.globalAlpha = clamp(alpha)
  ctx.translate(W/2 + ox, tyY)
  ctx.scale(sx, sy)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = `900 ${fs}px ${stack}`

  // draw highlighted words
  const words = text.split(/\s+/)
  const destSet = new Set(destaques.map(d => d.toLowerCase().replace(/[^\wà-ú]/gi, '')))
  let totalW = 0
  for (const w of words) totalW += ctx.measureText(w + ' ').width
  let cx = -totalW / 2

  for (const word of words) {
    const ww = ctx.measureText(word + ' ').width
    const clean = word.toLowerCase().replace(/[^\wà-ú]/gi, '')
    const hl = destSet.has(clean) || destaques.some(d => clean.includes(d.toLowerCase().replace(/[^\wà-ú]/gi, '')))

    ctx.save()
    ctx.textAlign = 'left'
    ctx.fillStyle = hl ? acc : '#FFFFFF'
    ctx.shadowColor = hl ? acc : 'rgba(0,0,0,0.9)'
    ctx.shadowBlur = hl ? 28 : 14
    if (hl) {
      // extra glow pass
      ctx.shadowColor = acc
      ctx.shadowBlur = 48
      ctx.fillText(word, cx, 0)
    }
    ctx.fillText(word, cx, 0)
    ctx.restore()
    cx += ww
  }
  ctx.restore()
}

// ── bullets ───────────────────────────────────────────────────────────────────
function drawBullets(ctx: CanvasRenderingContext2D, beat: BeatEntry, p: number, estilo: Estilo) {
  if (!beat.bullets?.length) return
  const { bullets, matiz } = beat
  const acc = accentColor(estilo, matiz)
  const stack = fontStack(estilo)
  const n = bullets.length

  // size
  let sz = 30
  ctx.font = `700 ${sz}px ${stack}`
  const maxBW = bullets.reduce((m, b) => Math.max(m, ctx.measureText('✓  ' + b).width), 0)
  if (maxBW > W * 0.88) {
    sz = Math.floor(sz * (W * 0.88) / maxBW)
    ctx.font = `700 ${sz}px ${stack}`
  }

  const lineH = sz * 2.1
  const startY = H * 0.65

  for (let i = 0; i < n; i++) {
    const triggerP = 0.32 + i * (0.55 / n)
    const bp = clamp((p - triggerP) / 0.14)
    if (bp <= 0) continue

    const y = startY + i * lineH
    const ox = (1 - easeOutExpo(bp)) * 50

    ctx.save()
    ctx.globalAlpha = bp
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.font = `700 ${sz}px ${stack}`
    ctx.fillStyle = acc
    ctx.shadowColor = acc; ctx.shadowBlur = 16
    ctx.fillText('✓', W * 0.08 + ox, y)
    ctx.fillStyle = '#FFFFFF'
    ctx.shadowColor = 'rgba(0,0,0,0.8)'; ctx.shadowBlur = 10
    ctx.fillText(bullets[i], W * 0.08 + sz * 1.7 + ox, y)
    ctx.restore()
  }
}

// ── transition overlay ────────────────────────────────────────────────────────
function drawTransition(ctx: CanvasRenderingContext2D, beat: BeatEntry, p: number, _t: number) {
  const { transicao } = beat

  // entry effect at start of beat
  if (transicao === 'flash' && p < 0.12) {
    const fp = 1 - p / 0.12
    ctx.fillStyle = `rgba(255,255,255,${fp * 0.55})`
    ctx.fillRect(0, 0, W, H)
  } else if (transicao === 'wipe' && p < 0.18) {
    const clipX = easeOutExpo(p / 0.18) * W
    // black curtain to the right of reveal line
    ctx.save()
    ctx.fillStyle = '#050505'
    ctx.fillRect(clipX, 0, W - clipX, H)
    // sharp edge with slight glow
    const grd = ctx.createLinearGradient(clipX - 6, 0, clipX + 4, 0)
    grd.addColorStop(0, 'transparent')
    grd.addColorStop(0.5, `hsl(${beat.matiz} 90% 60% / 0.7)`)
    grd.addColorStop(1, 'transparent')
    ctx.fillStyle = grd
    ctx.fillRect(clipX - 6, 0, 10, H)
    ctx.restore()
  } else if (transicao === 'zoom-through' && p < 0.2) {
    const zp = 1 - p / 0.2
    ctx.fillStyle = `rgba(255,255,255,${zp * 0.45})`
    ctx.fillRect(0, 0, W, H)
  }
  // match-cut: no effect
}

// ── beat label ────────────────────────────────────────────────────────────────
function drawLabel(ctx: CanvasRenderingContext2D, beat: BeatEntry) {
  const sz = Math.round(H * 0.019)
  ctx.save()
  ctx.font = `600 ${sz}px system-ui, sans-serif`
  ctx.fillStyle = `hsl(${beat.matiz+40} 85% 65% / 0.7)`
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText(`▸ ${beat.beatNome}`, W * 0.04, H * 0.035)
  ctx.restore()
}

// ── progress bar ─────────────────────────────────────────────────────────────
function drawProgress(ctx: CanvasRenderingContext2D, beat: BeatEntry, beatIdx: number, progress: number, total: number) {
  const frac = (beatIdx + progress) / total
  ctx.fillStyle = `hsl(${beat.matiz+50} 60% 20% / 0.5)`
  ctx.fillRect(0, H-5, W, 5)
  ctx.fillStyle = `hsl(${beat.matiz+50} 95% 60%)`
  ctx.fillRect(0, H-5, W * frac, 5)
}

// ── vignette ─────────────────────────────────────────────────────────────────
function drawVignette(ctx: CanvasRenderingContext2D) {
  const vg = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.4, W/2, H/2, Math.max(W,H)*0.78)
  vg.addColorStop(0, 'rgba(0,0,0,0)')
  vg.addColorStop(1, 'rgba(0,0,0,0.52)')
  ctx.fillStyle = vg
  ctx.fillRect(0, 0, W, H)
}

// ── grain overlay ─────────────────────────────────────────────────────────────
function drawGrain(ctx: CanvasRenderingContext2D, t: number) {
  if (grainCanvases.length === 0) return
  const g = grainCanvases[Math.floor(t / 55) % GRAIN_FRAMES]
  ctx.save()
  ctx.globalCompositeOperation = 'screen'
  for (let x = 0; x < W; x += g.width) for (let y = 0; y < H; y += g.height) ctx.drawImage(g, x, y)
  ctx.restore()
}

// ── main draw function ────────────────────────────────────────────────────────
export function desenharQuadro(
  ctx: CanvasRenderingContext2D,
  map: BeatMap,
  beatIdx: number,
  progress: number,
  t: number,
) {
  const beat = map.beats[beatIdx]
  const estilo = map.estilo

  drawBackground(ctx, beat, progress, t, estilo)
  drawWireframe(ctx, beat, beatIdx, progress, t, beat.camera, estilo)
  drawTypo(ctx, beat, progress, t, estilo)
  drawBullets(ctx, beat, progress, estilo)
  drawVignette(ctx)
  drawGrain(ctx, t)
  drawLabel(ctx, beat)
  drawProgress(ctx, beat, beatIdx, progress, map.beats.length)
  drawTransition(ctx, beat, progress, t)
}
