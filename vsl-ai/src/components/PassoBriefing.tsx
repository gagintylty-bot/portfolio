import { useRef, useState } from 'react'
import type { Briefing } from '../lib/types'
import { gravarBriefing, suportaTranscricao } from '../lib/transcricao'

interface Props {
  briefing: Briefing
  onChange: (b: Briefing) => void
  onAvancar: () => void
}

/**
 * Passo 1 — você explica o produto, o que vende e pra quem.
 * Dá pra digitar ou apertar o microfone e falar: a transcrição cai
 * direto no campo de descrição.
 */
export default function PassoBriefing({ briefing, onChange, onAvancar }: Props) {
  const [gravando, setGravando] = useState(false)
  const [parcial, setParcial] = useState('')
  const [erroMic, setErroMic] = useState('')
  const controleRef = useRef<{ parar: () => void } | null>(null)
  const baseRef = useRef('')

  const set = (campo: keyof Briefing) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange({ ...briefing, [campo]: e.target.value })

  async function alternarGravacao() {
    if (gravando) {
      controleRef.current?.parar()
      setGravando(false)
      setParcial('')
      return
    }
    setErroMic('')
    baseRef.current = briefing.descricao ? briefing.descricao.trim() + '\n' : ''
    try {
      controleRef.current = await gravarBriefing((final, andamento) => {
        onChange({ ...briefing, descricao: (baseRef.current + final).trim() })
        setParcial(andamento)
      })
      setGravando(true)
    } catch {
      setErroMic('Não consegui acessar o microfone. Libere a permissão ou digite o briefing.')
    }
  }

  const pronto = briefing.descricao.trim().length > 10

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Explique seu produto pra IA</h2>
        <p className="mt-1 text-sm text-white/60">
          O que você vende, o que ele faz e qual seu público. Quanto mais contexto, melhor a VSL.
          {suportaTranscricao() ? ' Prefere falar? Aperta o microfone e explica por áudio.' : ''}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-white/80">Nome do produto</span>
          <input
            value={briefing.produto}
            onChange={set('produto')}
            placeholder="Ex.: Mentoria Tráfego Zero a 10k"
            className="mt-1 w-full rounded-lg border border-borda bg-painel px-3 py-2 outline-none focus:border-acento"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-white/80">Seu público</span>
          <input
            value={briefing.publico}
            onChange={set('publico')}
            placeholder="Ex.: donos de loja que querem vender online"
            className="mt-1 w-full rounded-lg border border-borda bg-painel px-3 py-2 outline-none focus:border-acento"
          />
        </label>
      </div>

      <label className="block">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/80">
            O que o produto faz / benefícios <span className="text-white/40">(um por linha)</span>
          </span>
          <button
            type="button"
            onClick={alternarGravacao}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              gravando
                ? 'gravando border-red-500 bg-red-500/20 text-red-300'
                : 'border-borda bg-painel text-white/80 hover:border-acento'
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${gravando ? 'bg-red-400' : 'bg-acento-2'}`} />
            {gravando ? 'Parar gravação' : 'Explicar por áudio'}
          </button>
        </div>
        <textarea
          value={briefing.descricao}
          onChange={set('descricao')}
          rows={6}
          placeholder={'Ex.:\nMétodo validado pra sair do zero em 30 dias\nAulas curtas e diretas\nSuporte no WhatsApp'}
          className="mt-1 w-full rounded-lg border border-borda bg-painel px-3 py-2 outline-none focus:border-acento"
        />
        {gravando && (
          <p className="mt-1 text-xs text-acento-2">
            🎙️ Ouvindo… {parcial && <em className="text-white/50">“{parcial}”</em>}
            {!suportaTranscricao() && ' (seu navegador não transcreve ao vivo — fale e depois complete digitando)'}
          </p>
        )}
        {erroMic && <p className="mt-1 text-xs text-red-400">{erroMic}</p>}
      </label>

      <label className="block">
        <span className="text-sm font-medium text-white/80">
          Oferta / preço <span className="text-white/40">(opcional)</span>
        </span>
        <input
          value={briefing.oferta}
          onChange={set('oferta')}
          placeholder="Ex.: de R$ 497 por R$ 197 com bônus de planilhas"
          className="mt-1 w-full rounded-lg border border-borda bg-painel px-3 py-2 outline-none focus:border-acento"
        />
      </label>

      <div className="flex justify-end">
        <button
          onClick={onAvancar}
          disabled={!pronto}
          className="rounded-lg bg-acento px-6 py-2.5 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continuar →
        </button>
      </div>
      {!pronto && <p className="text-right text-xs text-white/40">Descreva o produto (digitando ou por áudio) pra continuar.</p>}
    </div>
  )
}
