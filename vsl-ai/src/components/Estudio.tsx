import { useEffect, useMemo, useRef, useState } from 'react'
import type { AjusteVoz, Briefing } from '../lib/types'
import { gerarRoteiro, roteiroParaSrt, roteiroParaTexto } from '../lib/roteiro'
import { desenharQuadro, dimensoes } from '../lib/renderer'
import { falar, pararFala, suportaNarracao } from '../lib/narrador'
import { sfx } from '../lib/sfx'
import { GravadorVideo, baixarArquivo } from '../lib/exportar'

interface Props {
  briefing: Briefing
  voz: SpeechSynthesisVoice | null
  ajuste: AjusteVoz
  onVoltar: () => void
}

const esperar = (ms: number) => new Promise((r) => setTimeout(r, ms))

/**
 * Passo 4 — o estúdio: player do vídeo gerado (canvas + narração + SFX),
 * timeline de cenas e exportação (.webm, roteiro .txt, legendas .srt).
 */
export default function Estudio({ briefing, voz, ajuste, onVoltar }: Props) {
  const roteiro = useMemo(() => gerarRoteiro(briefing), [briefing])
  const { cenas } = roteiro
  const { w, h } = dimensoes(briefing.formato)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [tocando, setTocando] = useState(false)
  const [exportando, setExportando] = useState(false)
  const [indice, setIndice] = useState(0)

  const tokenRef = useRef(0)
  const tocandoRef = useRef(false)
  const cenaRef = useRef({ indice: 0, inicio: 0, duracao: cenas[0].duracaoMs })
  const gravadorRef = useRef(new GravadorVideo())

  // loop de desenho: roda sempre, pra cena ficar viva mesmo pausada
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let raf = 0
    const desenhar = () => {
      const agora = performance.now()
      const { indice: i, inicio, duracao } = cenaRef.current
      const p = tocandoRef.current ? Math.min(1, (agora - inicio) / duracao) : 1
      desenharQuadro(ctx, { cena: cenas[i], p, t: agora, indice: i, total: cenas.length })
      raf = requestAnimationFrame(desenhar)
    }
    raf = requestAnimationFrame(desenhar)
    return () => cancelAnimationFrame(raf)
  }, [cenas])

  useEffect(
    () => () => {
      tokenRef.current++
      pararFala()
    },
    [],
  )

  function parar() {
    tokenRef.current++
    tocandoRef.current = false
    setTocando(false)
    pararFala()
  }

  async function reproduzir(desde = 0): Promise<boolean> {
    const token = ++tokenRef.current
    tocandoRef.current = true
    setTocando(true)
    for (let i = desde; i < cenas.length; i++) {
      if (tokenRef.current !== token) return false
      setIndice(i)
      cenaRef.current = { indice: i, inicio: performance.now(), duracao: cenas[i].duracaoMs }
      sfx.tocar(cenas[i].sfx)
      const narracao = suportaNarracao() ? falar(cenas[i].narracao, voz, ajuste) : Promise.resolve()
      await Promise.all([narracao, esperar(cenas[i].duracaoMs)])
    }
    if (tokenRef.current !== token) return false
    tocandoRef.current = false
    setTocando(false)
    return true
  }

  async function exportar() {
    if (exportando) return
    const canvas = canvasRef.current
    if (!canvas) return
    parar()
    setExportando(true)
    gravadorRef.current.iniciar(canvas, sfx.streamParaGravacao())
    const completo = await reproduzir(0)
    const blob = await gravadorRef.current.parar()
    setExportando(false)
    if (completo && blob.size > 0) {
      baixarArquivo(blob, `vsl-${(briefing.produto || 'video').toLowerCase().replace(/\W+/g, '-')}.webm`)
    }
  }

  function irPara(i: number) {
    parar()
    setIndice(i)
    cenaRef.current = { indice: i, inicio: performance.now(), duracao: cenas[i].duracaoMs }
  }

  const duracaoTotal = Math.round(cenas.reduce((s, c) => s + c.duracaoMs, 0) / 1000)

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold">Sua VSL está pronta 🎬</h2>
          <p className="mt-1 text-sm text-white/60">
            {cenas.length} cenas · ~{duracaoTotal}s · estilo {briefing.estilo} · {briefing.formato}
          </p>
        </div>
        <button onClick={() => { parar(); onVoltar() }} className="rounded-lg border border-borda px-4 py-2 text-sm text-white/70 hover:border-white/40">
          ← Ajustar briefing
        </button>
      </div>

      <div className="flex justify-center rounded-2xl border border-borda bg-black/40 p-3">
        <canvas
          ref={canvasRef}
          width={w}
          height={h}
          className="rounded-lg"
          style={{ maxWidth: '100%', maxHeight: '68vh', aspectRatio: `${w} / ${h}` }}
        />
      </div>

      {/* timeline de cenas */}
      <div className="flex flex-wrap gap-2">
        {cenas.map((c, i) => (
          <button
            key={c.id}
            onClick={() => irPara(i)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              i === indice ? 'border-acento-2 bg-acento-2/15 text-acento-2' : 'border-borda bg-painel text-white/60 hover:border-white/30'
            }`}
          >
            {i + 1}. {c.beat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {tocando && !exportando ? (
          <button onClick={parar} className="rounded-lg border border-borda bg-painel px-6 py-2.5 font-semibold hover:border-white/40">
            ⏸ Pausar
          </button>
        ) : (
          <button
            onClick={() => reproduzir(indice >= cenas.length - 1 && !tocando ? 0 : indice)}
            disabled={exportando}
            className="rounded-lg bg-acento px-6 py-2.5 font-semibold text-white transition hover:brightness-110 disabled:opacity-50"
          >
            ▶ Assistir com narração
          </button>
        )}
        <button
          onClick={exportar}
          disabled={exportando}
          className="rounded-lg bg-acento-2/90 px-6 py-2.5 font-semibold text-black transition hover:brightness-110 disabled:opacity-50"
        >
          {exportando ? '⏺ Gravando o vídeo…' : '⬇ Exportar vídeo (.webm)'}
        </button>
        <button
          onClick={() => baixarArquivo(roteiroParaTexto(roteiro, briefing), 'roteiro-vsl.txt')}
          className="rounded-lg border border-borda px-4 py-2.5 text-sm text-white/70 hover:border-white/40"
        >
          📄 Roteiro (.txt)
        </button>
        <button
          onClick={() => baixarArquivo(roteiroParaSrt(roteiro), 'legendas-vsl.srt')}
          className="rounded-lg border border-borda px-4 py-2.5 text-sm text-white/70 hover:border-white/40"
        >
          💬 Legendas (.srt)
        </button>
      </div>

      <p className="text-xs text-white/45">
        A exportação grava o vídeo em tempo real com os efeitos sonoros. A narração por voz do navegador não entra no
        arquivo (limitação da Web Speech API) — use o roteiro/legendas pra dublar, ou conecte um TTS em nuvem
        (ElevenLabs, OpenAI) pra exportar com a voz embutida.
      </p>

      {roteiro.observacoes.length > 0 && (
        <div className="rounded-xl border border-yellow-600/40 bg-yellow-500/10 p-4 text-sm text-yellow-200">
          <div className="mb-1 font-semibold">💡 Dicas da IA pra essa VSL vender mais:</div>
          <ul className="list-inside list-disc space-y-1">
            {roteiro.observacoes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      {/* roteiro na íntegra */}
      <details className="rounded-xl border border-borda bg-painel p-4">
        <summary className="cursor-pointer font-semibold text-white/80">Ver roteiro completo</summary>
        <div className="mt-3 space-y-3 text-sm">
          {cenas.map((c) => (
            <div key={c.id}>
              <div className="font-semibold text-acento-2">{c.beat}</div>
              <p className="text-white/70">{c.narracao}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  )
}
