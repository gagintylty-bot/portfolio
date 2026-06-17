import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  /** Texto pequeno acima do título (eyebrow) */
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  /** Alinhamento do conjunto */
  align?: 'left' | 'center'
  className?: string
}

/** Cabeçalho de seção: eyebrow + barra de acento laranja + título + subtítulo. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      {/* Barra de acento laranja sob o eyebrow / sobre o título */}
      <span className={`mb-5 h-[3px] w-12 rounded-full bg-accent ${isCenter ? '' : ''}`} />
      <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-fg sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed text-muted sm:text-lg ${
            isCenter ? 'max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
