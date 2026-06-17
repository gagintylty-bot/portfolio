import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { config } from '../../config'
import { trackCTA } from '../../lib/track'

/** Topo fino e fixo: marca + um único CTA. Sem menu (direct response). */
export function TopBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-night/85 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-base font-bold uppercase tracking-wide text-fg"
        >
          <span className="text-accent">§</span>
          <span className="hidden sm:inline">Leis Penais Especiais</span>
          <span className="sm:hidden">L.P.E.</span>
        </a>

        <a
          href={config.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCTA('topbar', 'checkout')}
          className="group hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-accent-ink transition-colors hover:bg-accent-soft sm:inline-flex"
        >
          Quero dominar
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  )
}
