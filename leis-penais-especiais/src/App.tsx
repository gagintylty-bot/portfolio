import { TopBar } from './components/ui/TopBar'
import { StickyCTA } from './components/ui/StickyCTA'

import { Hero } from './components/sections/Hero'
import { Problema } from './components/sections/Problema'
import { Leis } from './components/sections/Leis'
import { Solucao } from './components/sections/Solucao'
import { Oferta } from './components/sections/Oferta'
import { Garantia } from './components/sections/Garantia'
import { ProvaSocial } from './components/sections/ProvaSocial'
import { ParaQuem } from './components/sections/ParaQuem'
import { FAQ } from './components/sections/FAQ'
import { CTAFinal } from './components/sections/CTAFinal'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <div id="top" className="noise-bg relative min-h-screen">
      <TopBar />

      <main className="relative z-10">
        <Hero />
        <Problema />
        <Leis />
        <Solucao />
        <Oferta />
        <Garantia />
        <ProvaSocial />
        <ParaQuem />
        <FAQ />
        <CTAFinal />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}
