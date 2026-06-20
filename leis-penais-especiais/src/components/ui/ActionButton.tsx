import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-xl font-display font-semibold uppercase tracking-wide transition-colors duration-200 select-none disabled:opacity-50 disabled:pointer-events-none'

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink cta-glow hover:bg-accent-soft',
  secondary: 'bg-surface-2 text-fg border border-line hover:border-accent/60 hover:text-accent',
  ghost: 'text-muted hover:text-fg underline-offset-4 hover:underline',
}

interface CommonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  icon?: ReactNode
  trailingIcon?: ReactNode
  fullWidth?: boolean
  className?: string
}

type AsButton = CommonProps & {
  to?: undefined
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
}
type AsLink = CommonProps & { to: string }

/** Botão de ação interna (button) ou link de navegação (react-router Link). */
export function ActionButton(props: AsButton | AsLink) {
  const {
    children,
    variant = 'primary',
    size = 'lg',
    icon,
    trailingIcon,
    fullWidth = false,
    className = '',
  } = props
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  const inner = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {trailingIcon && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {trailingIcon}
        </span>
      )}
    </>
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {inner}
      </Link>
    )
  }

  const b = props as AsButton
  return (
    <motion.button
      type={b.type ?? 'button'}
      onClick={b.onClick}
      disabled={b.disabled}
      aria-label={b['aria-label']}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={cls}
    >
      {inner}
    </motion.button>
  )
}
