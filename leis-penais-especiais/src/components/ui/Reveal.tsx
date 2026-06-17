import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Atraso da animação (escalonamento) */
  delay?: number
  /** Direção da entrada */
  y?: number
  as?: 'div' | 'li' | 'span'
}

/**
 * Reveal on scroll leve. Respeita prefers-reduced-motion via Framer Motion
 * (a transição é desligada pelo CSS global; aqui o once garante 1 disparo).
 */
export function Reveal({ children, className = '', delay = 0, y = 16, as = 'div' }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
