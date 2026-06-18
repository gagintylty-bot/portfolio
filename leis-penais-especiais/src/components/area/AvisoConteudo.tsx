import { Info } from 'lucide-react'
import { AVISO_CONTEUDO } from '../../data/types'

/** Banner do aviso obrigatório de conteúdo educacional. */
export function AvisoConteudo({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-gold/30 bg-gold/5 p-3.5 text-xs leading-relaxed text-muted sm:text-sm ${className}`}
      role="note"
    >
      <Info size={16} className="mt-0.5 shrink-0 text-gold" />
      <p>{AVISO_CONTEUDO}</p>
    </div>
  )
}
