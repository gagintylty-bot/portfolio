import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

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
 * Respeita prefers-reduced-motion (mostra o valor final direto).
 */
export function CountUp({ to, duration = 1.5, className, format }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduzir = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduzir) {
      setValue(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      setValue(Math.round(easeOutCubic(p) * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduzir, to, duration])

  return (
    <span ref={ref} className={className}>
      {format ? format(value) : value}
    </span>
  )
}
