import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { config } from '../../config'
import { trackCTA } from '../../lib/track'

/**
 * Barra de compra fixa no rodapé do mobile. Aparece depois que o usuário
 * passa do hero. Some quando o CTA final já está visível (evita duplicar).
 * Slide via CSS transition (sem Framer no caminho crítico).
 */
export function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 640
      const ctaFinal = document.getElementById('garantir')
      const nearEnd = ctaFinal
        ? ctaFinal.getBoundingClientRect().top < window.innerHeight
        : false
      setShow(past && !nearEnd)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-night/95 px-4 py-3 backdrop-blur transition-transform duration-300 ease-out lg:hidden ${
        show ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
    >
      <a
        href={config.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCTA('sticky-mobile', 'checkout')}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-accent-ink"
      >
        Quero dominar as 20 leis
        <ArrowRight size={18} />
      </a>
    </div>
  )
}
