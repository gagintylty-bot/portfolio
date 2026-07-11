import { useEffect, useState } from 'react'
import type { AjusteVoz, VozOpcao } from '../lib/types'
import { carregarVozes, falar, pararFala, suportaNarracao } from '../lib/narrador'

interface Props {
  vozEscolhida: SpeechSynthesisVoice | null
  ajuste: AjusteVoz
  onEscolher: (v: SpeechSynthesisVoice | null) => void
  onAjustar: (a: AjusteVoz) => void
  onAvancar: () => void
  onVoltar: () => void
}

const AMOSTRA = 'Essa é a voz que vai narrar a sua VSL. Gostou? Então bora gerar esse vídeo.'

/** Passo 3 — galeria de vozes do navegador, com amostra e ajuste de ritmo/tom. */
export default function PassoVoz({ vozEscolhida, ajuste, onEscolher, onAjustar, onAvancar, onVoltar }: Props) {
  const [vozes, setVozes] = useState<VozOpcao[] | null>(null)
  const [ouvindo, setOuvindo] = useState<string | null>(null)

  useEffect(() => {
    let ativo = true
    carregarVozes().then((v) => {
      if (!ativo) return
      setVozes(v)
      if (!vozEscolhida && v.length > 0) onEscolher(v[0].voz)
    })
    return () => {
      ativo = false
      pararFala()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function ouvir(o: VozOpcao) {
    pararFala()
    setOuvindo(o.voz.voiceURI)
    await falar(AMOSTRA, o.voz, ajuste)
    setOuvindo((atual) => (atual === o.voz.voiceURI ? null : atual))
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Galeria de vozes</h2>
        <p className="mt-1 text-sm text-white/60">
          Escolha quem narra sua VSL. As vozes rodam direto no seu navegador — toque em “ouvir amostra” pra testar.
        </p>
      </div>

      {!suportaNarracao() && (
        <p className="rounded-lg border border-yellow-600/40 bg-yellow-500/10 p-3 text-sm text-yellow-300">
          Seu navegador não suporta narração por voz. O vídeo será gerado sem narração — o roteiro completo fica
          disponível pra você gravar ou dublar.
        </p>
      )}

      {vozes === null && <p className="text-white/50">Carregando vozes…</p>}
      {vozes !== null && vozes.length === 0 && suportaNarracao() && (
        <p className="text-white/50">Nenhuma voz encontrada neste navegador.</p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {vozes?.map((o) => {
          const ativa = vozEscolhida?.voiceURI === o.voz.voiceURI
          return (
            <div
              key={o.voz.voiceURI}
              className={`rounded-xl border p-4 transition ${
                ativa ? 'border-acento bg-acento/10 ring-1 ring-acento' : 'border-borda bg-painel'
              }`}
            >
              <button onClick={() => onEscolher(o.voz)} className="block w-full text-left">
                <div className="font-semibold">
                  {ativa ? '✓ ' : ''}
                  {o.rotulo}
                </div>
                <div className="mt-1 text-xs text-white/55">{o.descricao}</div>
              </button>
              <button
                onClick={() => ouvir(o)}
                className="mt-3 rounded-full border border-borda px-3 py-1 text-xs text-acento-2 hover:border-acento-2"
              >
                {ouvindo === o.voz.voiceURI ? '🔊 Tocando…' : '▶ Ouvir amostra'}
              </button>
            </div>
          )
        })}
      </div>

      <div className="grid gap-4 rounded-xl border border-borda bg-painel p-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-white/80">Velocidade: {ajuste.taxa.toFixed(2)}×</span>
          <input
            type="range"
            min={0.7}
            max={1.4}
            step={0.05}
            value={ajuste.taxa}
            onChange={(e) => onAjustar({ ...ajuste, taxa: Number(e.target.value) })}
            className="mt-2 w-full accent-[var(--color-acento)]"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-white/80">Tom: {ajuste.tom.toFixed(2)}</span>
          <input
            type="range"
            min={0.6}
            max={1.6}
            step={0.05}
            value={ajuste.tom}
            onChange={(e) => onAjustar({ ...ajuste, tom: Number(e.target.value) })}
            className="mt-2 w-full accent-[var(--color-acento)]"
          />
        </label>
      </div>

      <div className="flex justify-between">
        <button onClick={onVoltar} className="rounded-lg border border-borda px-5 py-2.5 text-white/70 hover:border-white/40">
          ← Voltar
        </button>
        <button
          onClick={() => {
            pararFala()
            onAvancar()
          }}
          className="rounded-lg bg-acento px-6 py-2.5 font-semibold text-white transition hover:brightness-110"
        >
          Gerar minha VSL 🎬
        </button>
      </div>
    </div>
  )
}
