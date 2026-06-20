import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  /** Valor final. */
  to: number
  /** Duração em segundos. */
  duration?: number
  className?: string
  /** Formatação do número exibido (ex.: (n) => `R$ ${n}`). */
  format?: (n: number) => string
}

/**
 * Anima um número de 0 até `to` quando entra na viewport (easeOutCubic).
 * Usa IntersectionObserver nativo (sem Framer) e respeita prefers-reduced-motion.
 */
export function CountUp({ to, duration = 1.5, className, format }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduzir =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduzir) {
      setValue(to)
      return
    }

    let raf = 0
    let iniciado = false
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
    const animar = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / (duration * 1000), 1)
        setValue(Math.round(easeOutCubic(p) * to))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !iniciado) {
            iniciado = true
            io.disconnect()
            animar()
          }
        }
      },
      { threshold: 0.5 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {format ? format(value) : value}
    </span>
  )
}
