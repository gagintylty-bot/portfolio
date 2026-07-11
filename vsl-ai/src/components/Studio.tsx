import { useEffect, useRef, useState, useCallback } from 'react'
import type { BeatMap, BeatEntry } from '../lib/types'
import { W, H, desenharQuadro, initRenderer } from '../lib/renderer'
import { sfx } from '../lib/sfx'
import { falar, pararFala, carregarVozes } from '../lib/narrador'
import type { AjusteVoz, VozOpcao } from '../lib/types'
import { GravadorVideo, baixarArquivo } from '../lib/exportar'
import { beatMapParaTexto } from '../lib/beatmap'

interface Props {
  map: BeatMap
  onVoltar: () => void
}

export default function Studio({ map, onVoltar }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const stateRef = useRef({ playing: false, startTime: 0, elapsed: 0, lastBeat: -1 })

  const [playing, setPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [activeBeat, setActiveBeat] = useState(0)
  const [vozes, setVozes] = useState<VozOpcao[]>([])
  const [vozIdx, setVozIdx] = useState(0)
  const [ajuste] = useState<AjusteVoz>({ taxa: 1.05, tom: 1 })
  const [gravando, setGravando] = useState(false)
  const [editando, setEditando] = useState<{ idx: number; campo: 'tituloVisual' | 'frase' } | null>(null)
  const [localBeats, setLocalBeats] = useState<BeatEntry[]>(map.beats)
  const gravadorRef = useRef(new GravadorVideo())

  // Load voices once
  useEffect(() => {
    carregarVozes().then(vs => { setVozes(vs) })
    initRenderer()
  }, [])

  // Seek helper
  const seekTo = useCallback((ms: number) => {
    stateRef.current.elapsed = ms
    stateRef.current.lastBeat = -1
    if (stateRef.current.playing) {
      stateRef.current.startTime = performance.now() - ms
    }
    setElapsed(ms)
    // Draw one frame immediately
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const { idx, bElapsed } = findBeat(ms, localBeats)
    desenharQuadro(ctx, { ...map, beats: localBeats }, idx, bElapsed / localBeats[idx].duracaoMs, performance.now())
    setActiveBeat(idx)
  }, [map, localBeats])

  // Main animation loop
  const tick = useCallback((now: number) => {
    const s = stateRef.current
    if (!s.playing) return
    const elapsed = now - s.startTime
    const totalMs = map.totalMs

    if (elapsed >= totalMs) {
      s.playing = false
      s.elapsed = totalMs
      setPlaying(false)
      setElapsed(totalMs)
      pararFala()
      return
    }

    const { idx, bElapsed } = findBeat(elapsed, localBeats)
    const progress = bElapsed / localBeats[idx].duracaoMs

    // Beat change → SFX + narration
    if (idx !== s.lastBeat) {
      s.lastBeat = idx
      sfx.tocar(localBeats[idx].sfx)
      pararFala()
      const voz = vozes[vozIdx]?.voz ?? null
      falar(localBeats[idx].frase, voz, ajuste)
    }

    // Draw
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) desenharQuadro(ctx, { ...map, beats: localBeats }, idx, progress, now)

    setElapsed(elapsed)
    setActiveBeat(idx)
    s.elapsed = elapsed

    rafRef.current = requestAnimationFrame(tick)
  }, [map, localBeats, vozes, vozIdx, ajuste])

  const play = useCallback(() => {
    const s = stateRef.current
    if (s.elapsed >= map.totalMs) s.elapsed = 0
    s.playing = true
    s.startTime = performance.now() - s.elapsed
    s.lastBeat = -1
    setPlaying(true)
    rafRef.current = requestAnimationFrame(tick)
  }, [tick, map.totalMs])

  const pause = useCallback(() => {
    stateRef.current.playing = false
    setPlaying(false)
    cancelAnimationFrame(rafRef.current)
    pararFala()
  }, [])

  // Draw first frame on mount
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) desenharQuadro(ctx, map, 0, 0, 0)
  }, [map])

  // Cleanup on unmount
  useEffect(() => () => {
    cancelAnimationFrame(rafRef.current)
    pararFala()
  }, [])

  // Beat cumulative start times
  const beatStarts = localBeats.reduce<number[]>((acc, _b, i) => {
    acc.push(i === 0 ? 0 : acc[i-1] + localBeats[i-1].duracaoMs)
    return acc
  }, [])

  const totalMs = map.totalMs

  async function exportarVideo() {
    if (gravando) return
    setGravando(true)
    const canvas = canvasRef.current!
    const audioStream = sfx.streamParaGravacao()
    gravadorRef.current.iniciar(canvas, audioStream)
    stateRef.current.elapsed = 0
    stateRef.current.lastBeat = -1
    play()
    // Stop after total duration
    setTimeout(async () => {
      pause()
      const blob = await gravadorRef.current.parar()
      baixarArquivo(blob, 'vsl.webm')
      setGravando(false)
    }, totalMs + 500)
  }

  function exportarRoteiro() {
    baixarArquivo(beatMapParaTexto({ ...map, beats: localBeats }), 'roteiro.txt')
  }

  function updateBeat(idx: number, campo: 'tituloVisual' | 'frase', val: string) {
    setLocalBeats(prev => prev.map((b, i) => i === idx ? { ...b, [campo]: val } : b))
  }

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      {/* Back */}
      <div className="w-full max-w-5xl flex items-center gap-3">
        <button onClick={onVoltar} className="rounded-full bg-painel px-3 py-1.5 text-xs text-white/50 border border-borda hover:bg-painel/80 transition">
          ← Novo vídeo
        </button>
        <span className="text-xs text-white/30">{localBeats.length} beats · {(totalMs/1000).toFixed(0)}s</span>
      </div>

      <div className="flex w-full max-w-5xl flex-col items-start gap-6 lg:flex-row">
        {/* Player column */}
        <div className="flex flex-col items-center gap-3 lg:sticky lg:top-4">
          {/* Canvas */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-borda/40" style={{ width: 324, height: 576 }}>
            <canvas
              ref={canvasRef}
              width={W}
              height={H}
              style={{ width: 324, height: 576, display: 'block' }}
            />
          </div>

          {/* Scrubber */}
          <div className="w-full" style={{ width: 324 }}>
            <input
              type="range" min={0} max={totalMs} value={elapsed}
              onChange={e => seekTo(Number(e.target.value))}
              className="w-full accent-acento h-1"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={playing ? pause : play}
              className="flex items-center gap-2 rounded-full bg-acento px-5 py-2.5 text-sm font-bold text-white hover:bg-acento/80 transition"
            >
              {playing ? '⏸ Pausar' : '▶ Assistir'}
            </button>
            <button onClick={() => seekTo(0)} className="rounded-full bg-painel px-3 py-2.5 text-sm border border-borda hover:bg-painel/70 transition">
              ↺
            </button>
          </div>

          {/* Voice picker */}
          {vozes.length > 0 && (
            <select
              value={vozIdx}
              onChange={e => setVozIdx(Number(e.target.value))}
              className="w-full rounded-xl border border-borda bg-painel px-3 py-2 text-xs text-white/70"
              style={{ width: 324 }}
            >
              {vozes.map((v, i) => (
                <option key={i} value={i}>{v.rotulo} — {v.descricao}</option>
              ))}
            </select>
          )}

          {/* Export */}
          <div className="flex gap-2" style={{ width: 324 }}>
            <button
              onClick={exportarVideo}
              disabled={gravando}
              className={`flex-1 rounded-xl border border-borda py-2 text-xs font-medium transition ${gravando ? 'gravando bg-red-500/20 text-red-400 border-red-500/40' : 'bg-painel hover:bg-painel/70 text-white/70'}`}
            >
              {gravando ? '● Gravando o vídeo…' : '↓ Exportar vídeo'}
            </button>
            <button onClick={exportarRoteiro} className="rounded-xl border border-borda bg-painel px-3 py-2 text-xs text-white/60 hover:bg-painel/70 transition">
              .txt
            </button>
          </div>
        </div>

        {/* Beat panel */}
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-wider">Roteiro · Edite cada beat</p>
          {localBeats.map((beat, i) => {
            const isActive = activeBeat === i
            const isEditing = editando?.idx === i
            return (
              <div
                key={beat.id}
                className={`rounded-2xl border p-4 transition cursor-pointer ${
                  isActive ? 'border-acento/60 bg-acento/8' : 'border-borda bg-painel/50 hover:border-borda/80'
                }`}
                onClick={() => !isEditing && seekTo(beatStarts[i])}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${isActive ? 'bg-acento text-white' : 'bg-painel text-white/40 border border-borda'}`}>
                    {beat.beatNome}
                  </span>
                  <span className="text-[11px] text-white/30">{(beat.duracaoMs/1000).toFixed(1)}s</span>
                </div>

                {/* Visual title */}
                {editando?.idx === i && editando.campo === 'tituloVisual' ? (
                  <input
                    autoFocus
                    className="w-full rounded-lg border border-acento/60 bg-fundo px-2 py-1 text-sm font-bold uppercase text-white mb-1"
                    value={beat.tituloVisual}
                    onChange={e => updateBeat(i, 'tituloVisual', e.target.value)}
                    onBlur={() => setEditando(null)}
                    onKeyDown={e => e.key === 'Enter' && setEditando(null)}
                    onClick={e => e.stopPropagation()}
                  />
                ) : (
                  <p
                    className="text-base font-extrabold uppercase tracking-tight text-white mb-1 cursor-text"
                    onDoubleClick={e => { e.stopPropagation(); setEditando({ idx: i, campo: 'tituloVisual' }) }}
                    title="Duplo clique para editar"
                  >
                    {beat.tituloVisual}
                  </p>
                )}

                {/* Narration */}
                {editando?.idx === i && editando.campo === 'frase' ? (
                  <textarea
                    autoFocus
                    rows={2}
                    className="w-full rounded-lg border border-acento/60 bg-fundo px-2 py-1 text-xs text-white/70 resize-none"
                    value={beat.frase}
                    onChange={e => updateBeat(i, 'frase', e.target.value)}
                    onBlur={() => setEditando(null)}
                    onClick={e => e.stopPropagation()}
                  />
                ) : (
                  <p
                    className="text-xs text-white/40 cursor-text leading-relaxed"
                    onDoubleClick={e => { e.stopPropagation(); setEditando({ idx: i, campo: 'frase' }) }}
                    title="Duplo clique para editar narração"
                  >
                    {beat.frase}
                  </p>
                )}

                {beat.bullets && (
                  <ul className="mt-2 flex flex-col gap-0.5">
                    {beat.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-white/50">
                        <span className="text-acento mt-0.5">✓</span>{b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
          <p className="text-[11px] text-white/25 text-center">Duplo clique no texto para editar · Clique no beat para pular</p>
        </div>
      </div>
    </div>
  )
}

// helpers
function findBeat(elapsed: number, beats: BeatEntry[]): { idx: number; bElapsed: number } {
  let cum = 0
  for (let i = 0; i < beats.length; i++) {
    if (elapsed < cum + beats[i].duracaoMs) return { idx: i, bElapsed: elapsed - cum }
    cum += beats[i].duracaoMs
  }
  return { idx: beats.length - 1, bElapsed: beats[beats.length - 1].duracaoMs - 1 }
}

