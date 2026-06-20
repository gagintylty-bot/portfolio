import { Suspense, lazy } from 'react'
import { TopBar } from './components/ui/TopBar'
import { StickyCTA } from './components/ui/StickyCTA'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { Hero } from './components/sections/Hero'
import { Footer } from './components/sections/Footer'

// Above-the-fold (Hero) carrega imediato; o resto vem em chunk separado.
const BelowFold = lazy(() => import('./components/sections/BelowFold'))

export default function App() {
  return (
    <div id="top" className="noise-bg relative min-h-screen">
      <ScrollProgress />
      <TopBar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={null}>
          <BelowFold />
        </Suspense>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}
