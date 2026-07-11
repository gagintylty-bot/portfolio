import type { Briefing, Estilo, Formato } from '../lib/types'

interface Props {
  briefing: Briefing
  onChange: (b: Briefing) => void
  onAvancar: () => void
  onVoltar: () => void
}

const ESTILOS: { id: Estilo; nome: string; emoji: string; desc: string }[] = [
  { id: 'urgencia', nome: 'Urgência', emoji: '🔥', desc: 'Escassez, pressão e decisão agora. Clássico de lançamento.' },
  { id: 'premium', nome: 'Premium', emoji: '💎', desc: 'Elegante, seletivo, sem gritaria. Pra ticket alto.' },
  { id: 'educativo', nome: 'Educativo', emoji: '🎓', desc: 'Ensina antes de vender. Gera confiança.' },
  { id: 'energetico', nome: 'Energético', emoji: '⚡', desc: 'Ritmo acelerado e empolgação. Pra público jovem.' },
]

const FORMATOS: { id: Formato; nome: string; desc: string }[] = [
  { id: '16:9', nome: 'Horizontal 16:9', desc: 'YouTube, página de vendas' },
  { id: '9:16', nome: 'Vertical 9:16', desc: 'Reels, TikTok, Shorts' },
]

/** Passo 2 — estilo do vídeo, formato e exemplos de referência. */
export default function PassoEstilo({ briefing, onChange, onAvancar, onVoltar }: Props) {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Estilo e referências</h2>
        <p className="mt-1 text-sm text-white/60">
          A IA adapta roteiro, cores, ritmo e efeitos sonoros ao estilo escolhido.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {ESTILOS.map((e) => (
          <button
            key={e.id}
            onClick={() => onChange({ ...briefing, estilo: e.id })}
            className={`rounded-xl border p-4 text-left transition ${
              briefing.estilo === e.id
                ? 'border-acento bg-acento/10 ring-1 ring-acento'
                : 'border-borda bg-painel hover:border-white/30'
            }`}
          >
            <div className="text-lg font-semibold">
              {e.emoji} {e.nome}
            </div>
            <div className="mt-1 text-sm text-white/60">{e.desc}</div>
          </button>
        ))}
      </div>

      <div>
        <span className="text-sm font-medium text-white/80">Formato</span>
        <div className="mt-2 flex gap-3">
          {FORMATOS.map((f) => (
            <button
              key={f.id}
              onClick={() => onChange({ ...briefing, formato: f.id })}
              className={`flex-1 rounded-xl border p-3 text-left transition ${
                briefing.formato === f.id
                  ? 'border-acento-2 bg-acento-2/10 ring-1 ring-acento-2'
                  : 'border-borda bg-painel hover:border-white/30'
              }`}
            >
              <div className="font-semibold">{f.nome}</div>
              <div className="text-xs text-white/50">{f.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-white/80">
          Exemplos e referências <span className="text-white/40">(opcional — frases de VSLs que você curte, promessas, ganchos)</span>
        </span>
        <textarea
          value={briefing.exemplos}
          onChange={(e) => onChange({ ...briefing, exemplos: e.target.value })}
          rows={4}
          placeholder={'Ex.:\nEm 30 dias você fatura seu primeiro 10k — ou seu dinheiro de volta.\nO método que ninguém tem coragem de te contar.'}
          className="mt-1 w-full rounded-lg border border-borda bg-painel px-3 py-2 outline-none focus:border-acento"
        />
      </label>

      <div className="flex justify-between">
        <button onClick={onVoltar} className="rounded-lg border border-borda px-5 py-2.5 text-white/70 hover:border-white/40">
          ← Voltar
        </button>
        <button
          onClick={onAvancar}
          className="rounded-lg bg-acento px-6 py-2.5 font-semibold text-white transition hover:brightness-110"
        >
          Escolher a voz →
        </button>
      </div>
    </div>
  )
}
