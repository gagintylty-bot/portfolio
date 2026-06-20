import { useEffect, useRef } from 'react'

/**
 * Barra fina de progresso de leitura no topo (cor de destaque).
 * CSS puro + scroll listener com rAF — sem Framer no caminho crítico.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const el = ref.current
      if (!el) return
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const p = max > 0 ? doc.scrollTop / max : 0
      el.style.transform = `scaleX(${p})`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ transform: 'scaleX(0)' }}
      className="fixed inset-x-0 top-0 z-50 h-[2.5px] origin-left bg-accent transition-transform duration-75"
    />
  )
}
