import { useMemo, useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Trophy,
  BookOpen,
} from 'lucide-react'
import { getLeiBySlug } from '../../data/leis'
import {
  type Dificuldade,
  ROTULO_DIFICULDADE,
} from '../../data/types'
import {
  registrarResposta,
  resetLei,
  getProgressoLei,
  type RespostaSalva,
} from '../../lib/progresso'
import { AreaHeader } from '../../components/area/AreaHeader'
import { AvisoConteudo } from '../../components/area/AvisoConteudo'
import { ActionButton } from '../../components/ui/ActionButton'

const ORDEM_DIF: Record<Dificuldade, number> = { facil: 0, medio: 1, dificil: 2 }

const CORES_DIF: Record<Dificuldade, string> = {
  facil: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  medio: 'border-gold/40 bg-gold/10 text-gold',
  dificil: 'border-accent/40 bg-accent/10 text-accent',
}

function nivelAtingido(percentAcerto: number): string {
  if (percentAcerto >= 90) return 'Domínio'
  if (percentAcerto >= 70) return 'Avançado'
  if (percentAcerto >= 50) return 'Intermediário'
  return 'Em desenvolvimento'
}

export function Modulo() {
  const { slug = '' } = useParams()
  const lei = getLeiBySlug(slug)

  // Cenários em ordem de dificuldade (fácil → médio → difícil).
  const cenarios = useMemo(
    () =>
      lei ? [...lei.cenarios].sort((a, b) => ORDEM_DIF[a.dificuldade] - ORDEM_DIF[b.dificuldade]) : [],
    [lei],
  )

  const [respostas, setRespostas] = useState<Record<string, RespostaSalva>>(() =>
    lei ? getProgressoLei(lei.slug) : {},
  )
  // Começa no primeiro não respondido (continua de onde parou).
  const primeiroNaoRespondido = cenarios.findIndex((c) => !respostas[c.id])
  const [indice, setIndice] = useState(primeiroNaoRespondido === -1 ? 0 : primeiroNaoRespondido)
  const [view, setView] = useState<'treino' | 'resultado'>(
    cenarios.length > 0 && primeiroNaoRespondido === -1 ? 'resultado' : 'treino',
  )
  const [selecionada, setSelecionada] = useState<string | null>(null)

  useEffect(() => setSelecionada(null), [indice])

  if (!lei) return <Navigate to="/area/dashboard" replace />

  const total = cenarios.length
  const respondidos = cenarios.filter((c) => respostas[c.id]).length
  const acertos = cenarios.filter((c) => respostas[c.id]?.correto).length

  // ---------- Lei ainda sem casos (esqueleto) ----------
  if (total === 0) {
    return (
      <div className="noise-bg min-h-screen">
        <AreaHeader />
        <main className="relative z-10 mx-auto max-w-2xl px-5 py-16 text-center">
          <BookOpen size={40} className="mx-auto text-muted" />
          <h1 className="mt-5 font-display text-2xl font-bold uppercase text-fg">{lei.nome}</h1>
          <p className="mt-2 text-muted">
            Os casos de treino desta lei estão sendo preparados e revisados. Em breve disponíveis.
          </p>
          <ActionButton to="/area/dashboard" variant="secondary" size="md" className="mt-8">
            Voltar ao painel
          </ActionButton>
        </main>
      </div>
    )
  }

  const cenario = cenarios[indice]
  const salva = respostas[cenario.id]
  const confirmada = !!salva
  const escolha = salva?.escolhaId ?? selecionada

  function confirmar() {
    if (!selecionada || confirmada || !lei) return
    const correto = selecionada === cenario.corretaId
    registrarResposta(lei.slug, cenario.id, selecionada, correto)
    setRespostas((prev) => ({ ...prev, [cenario.id]: { escolhaId: selecionada, correto } }))
  }

  function proximo() {
    if (indice < total - 1) setIndice(indice + 1)
    else setView('resultado')
  }

  function treinarDeNovo() {
    if (!lei) return
    resetLei(lei.slug)
    setRespostas({})
    setIndice(0)
    setSelecionada(null)
    setView('treino')
  }

  // ---------------------- RESULTADO ----------------------
  if (view === 'resultado') {
    const percentAcerto = respondidos === 0 ? 0 : Math.round((acertos / respondidos) * 100)
    return (
      <div className="noise-bg min-h-screen">
        <AreaHeader />
        <main className="relative z-10 mx-auto max-w-xl px-5 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-accent/30 bg-surface/70 p-7 text-center accent-glow sm:p-9"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent">
              <Trophy size={32} />
            </span>
            <h1 className="mt-5 font-display text-2xl font-bold uppercase text-fg sm:text-3xl">
              Módulo concluído
            </h1>
            <p className="mt-1 text-sm text-muted">{lei.nome}</p>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <Stat valor={`${acertos}/${total}`} rotulo="Acertos" />
              <Stat valor={`${percentAcerto}%`} rotulo="Aproveitamento" />
              <Stat valor={nivelAtingido(percentAcerto)} rotulo="Nível" pequeno />
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <ActionButton onClick={treinarDeNovo} icon={<RotateCcw size={18} />} fullWidth>
                Treinar de novo
              </ActionButton>
              <ActionButton to="/area/dashboard" variant="secondary" fullWidth>
                Voltar ao painel
              </ActionButton>
            </div>
          </motion.div>
          <AvisoConteudo className="mt-5" />
        </main>
      </div>
    )
  }

  // ----------------------- TREINO -----------------------
  return (
    <div className="noise-bg min-h-screen">
      <AreaHeader />
      <main className="relative z-10 mx-auto max-w-2xl px-5 py-8 sm:py-10">
        {/* Cabeçalho da lei */}
        <Link
          to="/area/dashboard"
          className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={14} /> Painel
        </Link>
        <h1 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-fg sm:text-3xl">
          {lei.nome}
        </h1>
        <p className="text-sm font-medium text-muted">Lei {lei.numero}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{lei.resumo}</p>
        <AvisoConteudo className="mt-4" />

        {/* Barra de progresso do módulo */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-xs text-muted">
            <span>
              Caso {indice + 1} de {total}
            </span>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase ${CORES_DIF[cenario.dificuldade]}`}
            >
              {ROTULO_DIFICULDADE[cenario.dificuldade]}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-night">
            <div
              className="h-full rounded-full bg-accent transition-all duration-500"
              style={{ width: `${Math.round(((indice + (confirmada ? 1 : 0)) / total) * 100)}%` }}
            />
          </div>
        </div>

        {/* Caso atual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cenario.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="mt-6"
          >
            <div className="rounded-2xl border border-line bg-surface/60 p-5 sm:p-6">
              <p className="text-base leading-relaxed text-fg">{cenario.enunciado}</p>
            </div>

            {/* Alternativas */}
            <div className="mt-4 space-y-3">
              {cenario.alternativas.map((alt) => {
                const isCorreta = alt.id === cenario.corretaId
                const isEscolha = alt.id === escolha
                let estilo = 'border-line bg-surface/40 hover:border-accent/50 hover:bg-surface-2'
                let icon = null
                if (confirmada) {
                  if (isCorreta) {
                    estilo = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-100'
                    icon = <Check size={18} className="text-emerald-400" />
                  } else if (isEscolha) {
                    estilo = 'border-accent/60 bg-accent/10 text-accent'
                    icon = <X size={18} className="text-accent" />
                  } else {
                    estilo = 'border-line bg-surface/40 opacity-60'
                  }
                } else if (isEscolha) {
                  estilo = 'border-accent bg-accent/10'
                }
                return (
                  <button
                    key={alt.id}
                    disabled={confirmada}
                    onClick={() => setSelecionada(alt.id)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm leading-relaxed transition-colors disabled:cursor-default ${estilo}`}
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold uppercase">
                        {alt.id}
                      </span>
                      <span>{alt.texto}</span>
                    </span>
                    {icon}
                  </button>
                )
              })}
            </div>

            {/* Feedback */}
            <AnimatePresence>
              {confirmada && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div
                    className={`mt-4 rounded-2xl border p-5 ${
                      salva!.correto
                        ? 'border-emerald-500/40 bg-emerald-500/5'
                        : 'border-accent/40 bg-accent/5'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 font-display text-sm font-bold uppercase ${
                        salva!.correto ? 'text-emerald-300' : 'text-accent'
                      }`}
                    >
                      {salva!.correto ? <Check size={18} /> : <X size={18} />}
                      {salva!.correto ? 'Você acertou' : 'Resposta incorreta'}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-fg/90">{cenario.explicacao}</p>
                    <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-line bg-night px-3 py-1.5 text-xs font-medium text-muted">
                      <BookOpen size={13} className="text-gold" />
                      {cenario.baseLegal}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ações */}
            <div className="mt-5">
              {confirmada ? (
                <ActionButton
                  onClick={proximo}
                  fullWidth
                  trailingIcon={<ArrowRight size={20} />}
                >
                  {indice < total - 1 ? 'Próximo caso' : 'Ver resultado'}
                </ActionButton>
              ) : (
                <ActionButton onClick={confirmar} fullWidth disabled={!selecionada}>
                  Confirmar resposta
                </ActionButton>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

function Stat({
  valor,
  rotulo,
  pequeno = false,
}: {
  valor: string
  rotulo: string
  pequeno?: boolean
}) {
  return (
    <div className="rounded-xl border border-line bg-night/60 p-3">
      <div
        className={`stat-number text-accent ${pequeno ? 'text-sm leading-tight' : 'text-2xl'}`}
      >
        {valor}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">{rotulo}</div>
    </div>
  )
}
