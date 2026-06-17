import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  /** 'accent' (laranja) | 'gold' (autoridade) | 'neutral' */
  tone?: 'accent' | 'gold' | 'neutral'
  icon?: ReactNode
  className?: string
}

const tones = {
  accent: 'border-accent/30 bg-accent/10 text-accent',
  gold: 'border-gold/30 bg-gold/10 text-gold',
  neutral: 'border-line bg-surface text-muted',
}

/** Selo/etiqueta — autoridade, escassez, prova. */
export function Badge({ children, tone = 'neutral', icon, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  )
}
