import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { config } from '../../config'
import { trackCTA, type CtaKind } from '../../lib/track'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  /**
   * Define destino + tracking automaticamente:
   *  - 'checkout' → config.checkoutUrl + evento InitiateCheckout
   *  - 'whatsapp' → config.whatsappUrl + evento Lead
   */
  cta: CtaKind
  /** Identificador da seção para sabermos o que mais converte. */
  origem: string
  variant?: Variant
  size?: Size
  /** Ícone à esquerda (lucide) */
  icon?: ReactNode
  /** Ícone à direita (lucide) */
  trailingIcon?: ReactNode
  fullWidth?: boolean
  className?: string
}

const base =
  'group relative inline-flex items-center justify-center gap-2.5 rounded-xl font-display font-semibold uppercase tracking-wide transition-colors duration-200 select-none'

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-4 text-base sm:px-9 sm:text-lg',
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink cta-glow hover:bg-accent-soft',
  secondary: 'bg-surface-2 text-fg border border-line hover:border-accent/60 hover:text-accent',
  ghost: 'text-muted hover:text-fg underline-offset-4 hover:underline',
}

/** Botão de CTA: anchor externo + tracking centralizado em trackCTA. */
export function Button({
  children,
  cta,
  origem,
  variant = 'primary',
  size = 'lg',
  icon,
  trailingIcon,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const href = cta === 'whatsapp' ? config.whatsappUrl : config.checkoutUrl

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTA(origem, cta)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {trailingIcon && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {trailingIcon}
        </span>
      )}
    </motion.a>
  )
}
