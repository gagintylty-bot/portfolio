import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  /** Largura máxima — 'default' (~1120px) ou 'narrow' (~820px, leitura) */
  size?: 'default' | 'narrow'
}

/** Container centralizado com respiro lateral consistente. */
export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const max = size === 'narrow' ? 'max-w-3xl' : 'max-w-6xl'
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  )
}
