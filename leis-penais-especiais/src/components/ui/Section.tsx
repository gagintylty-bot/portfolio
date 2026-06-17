import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  /** id para âncora/navegação */
  id?: string
  className?: string
  /** Aplica superfície levemente mais clara que o fundo base */
  surface?: boolean
  as?: 'section' | 'footer' | 'header'
}

/** Bloco de seção com espaçamento vertical generoso e consistente. */
export function Section({
  children,
  id,
  className = '',
  surface = false,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`relative scroll-mt-20 py-16 sm:py-20 lg:py-28 ${
        surface ? 'bg-surface/40' : ''
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
