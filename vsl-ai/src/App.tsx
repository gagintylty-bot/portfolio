import { useState } from 'react'
import type { VideoConfig, BeatMap } from './lib/types'
import { gerarBeatMap } from './lib/beatmap'
import Gerador from './components/Gerador'
import Studio from './components/Studio'

export default function App() {
  const [map, setMap] = useState<BeatMap | null>(null)

  function handleGerar(config: VideoConfig) {
    setMap(gerarBeatMap(config))
  }

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-5xl px-4 py-2">
        {map == null
          ? <Gerador onGerar={handleGerar} />
          : <Studio map={map} onVoltar={() => setMap(null)} />
        }
      </main>

      <footer className="border-t border-borda py-4 text-center text-[11px] text-white/20">
        VSL.AI — protótipo · roteiro, narração, efeitos sonoros e motion no navegador
      </footer>
    </div>
  )
}
