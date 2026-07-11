import { useState } from 'react'
import type { VideoConfig, Estilo, DuracaoPreset } from '../lib/types'

interface Props {
  onGerar: (config: VideoConfig) => void
}

const ESTILOS: { id: Estilo; label: string; desc: string }[] = [
  { id: 'agressivo', label: '🔥 Agressivo', desc: 'Confronto direto, urgência, impacto' },
  { id: 'premium',   label: '💎 Premium',   desc: 'Autoridade, elegância, exclusividade' },
  { id: 'tech',      label: '⚡ Tech',       desc: 'Dados, precisão, inovação' },
]

const DURACOES: { v: DuracaoPreset; label: string }[] = [
  { v: 15, label: '15s — Reels/TikTok' },
  { v: 30, label: '30s — Padrão' },
  { v: 45, label: '45s — Completo' },
]

export default function Gerador({ onGerar }: Props) {
  const [texto, setTexto] = useState('')
  const [estilo, setEstilo] = useState<Estilo>('agressivo')
  const [duracao, setDuracao] = useState<DuracaoPreset>(30)
  const [cta, setCta] = useState('')
  const [err, setErr] = useState('')

  function handleGerar() {
    if (!texto.trim()) { setErr('Cole seu roteiro ou escreva o tema do produto.'); return }
    setErr('')
    onGerar({ texto: texto.trim(), estilo, duracaoSeg: duracao, cta: cta.trim() })
  }

  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-8 py-8">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-3xl font-black tracking-tight text-white">
          VSL<span className="text-acento">.AI</span>
        </h1>
        <p className="mt-1 text-sm text-white/45">Roteiro → vídeo de vendas em segundos. No navegador.</p>
      </div>

      {/* Script input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Cole seu roteiro ou descreva o produto
        </label>
        <textarea
          rows={6}
          value={texto}
          onChange={e => { setTexto(e.target.value); setErr('') }}
          placeholder={'Exemplo:\n"Mentoria de tráfego pago para donos de loja que querem vender todos os dias. Método validado, aulas diretas, suporte no WhatsApp."'}
          className="w-full rounded-2xl border border-borda bg-painel/70 px-4 py-3 text-sm text-white placeholder-white/25 focus:border-acento/50 focus:outline-none focus:ring-1 focus:ring-acento/30 resize-none leading-relaxed"
        />
        {err && <p className="text-xs text-red-400">{err}</p>}
      </div>

      {/* Style chips */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-white/50">Estilo</label>
        <div className="grid grid-cols-3 gap-2">
          {ESTILOS.map(e => (
            <button
              key={e.id}
              onClick={() => setEstilo(e.id)}
              className={`flex flex-col items-center gap-1 rounded-2xl border px-3 py-3 text-left transition ${
                estilo === e.id
                  ? 'border-acento bg-acento/15 text-white'
                  : 'border-borda bg-painel/40 text-white/55 hover:border-borda/80 hover:text-white/75'
              }`}
            >
              <span className="text-sm font-bold">{e.label}</span>
              <span className="text-[11px] text-center leading-snug opacity-70">{e.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Duration chips */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-white/50">Duração</label>
        <div className="flex gap-2">
          {DURACOES.map(d => (
            <button
              key={d.v}
              onClick={() => setDuracao(d.v)}
              className={`flex-1 rounded-xl border py-2.5 text-sm font-semibold transition ${
                duracao === d.v
                  ? 'border-acento bg-acento/15 text-white'
                  : 'border-borda bg-painel/40 text-white/55 hover:border-borda/80 hover:text-white/75'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* CTA field */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Call-to-action <span className="normal-case font-normal text-white/30">(opcional)</span>
        </label>
        <input
          type="text"
          value={cta}
          onChange={e => setCta(e.target.value)}
          placeholder="Ex: Garanta agora com 50% de desconto"
          className="w-full rounded-xl border border-borda bg-painel/70 px-4 py-3 text-sm text-white placeholder-white/25 focus:border-acento/50 focus:outline-none"
        />
      </div>

      {/* Generate button */}
      <button
        onClick={handleGerar}
        className="w-full rounded-2xl bg-acento py-4 text-base font-extrabold uppercase tracking-widest text-white shadow-lg shadow-acento/30 hover:bg-acento/85 active:scale-[0.98] transition"
      >
        ▶ Gerar Vídeo
      </button>

      <p className="text-center text-[11px] text-white/25">
        100% no navegador · sem chave de API · sem upload
      </p>
    </div>
  )
}
