import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { KeyRound, ArrowRight, MessageCircle, ArrowLeft } from 'lucide-react'
import { login, isAutenticado } from '../../lib/auth'
import { ActionButton } from '../../components/ui/ActionButton'
import { Button } from '../../components/ui/Button'
import { AvisoConteudo } from '../../components/area/AvisoConteudo'

export function Acesso() {
  const navigate = useNavigate()
  const [codigo, setCodigo] = useState('')
  const [erro, setErro] = useState(false)

  // Já tem acesso? vai direto para o painel.
  if (isAutenticado()) return <Navigate to="/area/dashboard" replace />

  function entrar(e: FormEvent) {
    e.preventDefault()
    if (login(codigo)) {
      navigate('/area/dashboard', { replace: true })
    } else {
      setErro(true)
    }
  }

  return (
    <main className="noise-bg hero-radial relative flex min-h-screen flex-col items-center justify-center px-5 py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-line bg-surface/70 p-7 backdrop-blur sm:p-9">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
              <KeyRound size={26} />
            </span>
            <h1 className="mt-5 font-display text-2xl font-bold uppercase text-fg sm:text-3xl">
              Área de Membros
            </h1>
            <p className="mt-2 text-sm text-muted">
              Digite o código de acesso que você recebeu após a compra.
            </p>
          </div>

          <form onSubmit={entrar} className="mt-7 space-y-4">
            <div>
              <label htmlFor="codigo" className="sr-only">
                Código de acesso
              </label>
              <input
                id="codigo"
                type="text"
                inputMode="text"
                autoComplete="off"
                autoCapitalize="characters"
                placeholder="Ex.: LPE-2026-FUNDADOR"
                value={codigo}
                onChange={(e) => {
                  setCodigo(e.target.value)
                  setErro(false)
                }}
                aria-invalid={erro}
                className={`w-full rounded-xl border bg-night px-4 py-3.5 text-center font-display uppercase tracking-wider text-fg placeholder:normal-case placeholder:tracking-normal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent ${
                  erro ? 'border-accent' : 'border-line'
                }`}
              />
              {erro && (
                <p className="mt-2 text-center text-sm text-accent">
                  Código inválido. Confira e tente novamente.
                </p>
              )}
            </div>

            <ActionButton type="submit" fullWidth trailingIcon={<ArrowRight size={20} />}>
              Entrar
            </ActionButton>
          </form>

          <div className="mt-6 flex flex-col items-center gap-3 border-t border-line pt-5">
            <Button
              cta="whatsapp"
              origem="area-acesso"
              variant="ghost"
              size="md"
              icon={<MessageCircle size={18} />}
            >
              Comprei e não recebi o código
            </Button>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
            >
              <ArrowLeft size={14} /> Voltar ao site
            </Link>
          </div>
        </div>

        <AvisoConteudo className="mt-5" />
      </motion.div>
    </main>
  )
}
