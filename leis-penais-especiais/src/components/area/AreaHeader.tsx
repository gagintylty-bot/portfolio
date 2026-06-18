import { useNavigate, Link } from 'react-router-dom'
import { Flame, LogOut } from 'lucide-react'
import { logout } from '../../lib/auth'
import { getStreak } from '../../lib/progresso'

/** Topo fixo da área de membros. */
export function AreaHeader() {
  const navigate = useNavigate()
  const streak = getStreak()

  function sair() {
    logout()
    navigate('/area', { replace: true })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-night/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          to="/area/dashboard"
          className="flex items-center gap-2 font-display text-base font-bold uppercase tracking-wide text-fg"
        >
          <span className="text-accent">§</span>
          <span className="hidden sm:inline">Leis Penais Especiais</span>
          <span className="sm:hidden">L.P.E.</span>
        </Link>

        <div className="flex items-center gap-3">
          {streak > 0 && (
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
              title="Dias seguidos de treino"
            >
              <Flame size={14} />
              {streak} {streak === 1 ? 'dia' : 'dias'}
            </span>
          )}
          <button
            onClick={sair}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-fg"
          >
            <LogOut size={15} />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>
      </div>
    </header>
  )
}
