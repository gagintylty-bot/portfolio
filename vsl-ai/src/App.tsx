import { useState } from 'react'
import type { AjusteVoz, Briefing } from './lib/types'
import PassoBriefing from './components/PassoBriefing'
import PassoEstilo from './components/PassoEstilo'
import PassoVoz from './components/PassoVoz'
import Estudio from './components/Estudio'

const PASSOS = ['Briefing', 'Estilo', 'Voz', 'Vídeo']

export default function App() {
  const [passo, setPasso] = useState(0)
  const [briefing, setBriefing] = useState<Briefing>({
    produto: '',
    descricao: '',
    publico: '',
    oferta: '',
    exemplos: '',
    estilo: 'urgencia',
    formato: '16:9',
  })
  const [voz, setVoz] = useState<SpeechSynthesisVoice | null>(null)
  const [ajuste, setAjuste] = useState<AjusteVoz>({ taxa: 1.05, tom: 1 })

  return (
    <div className="min-h-screen">
      <header className="border-b border-borda bg-painel/60 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎬</span>
            <div>
              <div className="text-lg font-extrabold tracking-tight">
                VSL<span className="text-acento">.AI</span>
              </div>
              <div className="text-[11px] text-white/50">seu vídeo de vendas, gerado por IA</div>
            </div>
          </div>
          {/* indicador de passos */}
          <nav className="flex items-center gap-1 text-xs sm:gap-2">
            {PASSOS.map((p, i) => (
              <div key={p} className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => i < passo && setPasso(i)}
                  disabled={i > passo}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium transition sm:px-3 ${
                    i === passo
                      ? 'bg-acento text-white'
                      : i < passo
                        ? 'bg-acento/20 text-acento hover:bg-acento/30'
                        : 'text-white/35'
                  }`}
                >
                  <span>{i + 1}</span>
                  <span className="hidden sm:inline">{p}</span>
                </button>
                {i < PASSOS.length - 1 && <span className="text-white/20">›</span>}
              </div>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        {passo === 0 && (
          <PassoBriefing briefing={briefing} onChange={setBriefing} onAvancar={() => setPasso(1)} />
        )}
        {passo === 1 && (
          <PassoEstilo
            briefing={briefing}
            onChange={setBriefing}
            onAvancar={() => setPasso(2)}
            onVoltar={() => setPasso(0)}
          />
        )}
        {passo === 2 && (
          <PassoVoz
            vozEscolhida={voz}
            ajuste={ajuste}
            onEscolher={setVoz}
            onAjustar={setAjuste}
            onAvancar={() => setPasso(3)}
            onVoltar={() => setPasso(1)}
          />
        )}
        {passo === 3 && <Estudio briefing={briefing} voz={voz} ajuste={ajuste} onVoltar={() => setPasso(0)} />}
      </main>

      <footer className="border-t border-borda py-6 text-center text-xs text-white/35">
        VSL.AI — protótipo · roteiro, narração, efeitos sonoros e motion gerados no seu navegador
      </footer>
    </div>
  )
}
