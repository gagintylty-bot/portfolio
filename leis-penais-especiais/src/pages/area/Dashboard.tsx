import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, ArrowRight, CheckCircle2, PlayCircle, Circle, KeyRound } from 'lucide-react'
import { leis } from '../../data/leis'
import { getCodigoAtivo } from '../../lib/auth'
import { getResumoLei, getResumoGeral, type ResumoLei } from '../../lib/progresso'
import { AreaHeader } from '../../components/area/AreaHeader'
import { AvisoConteudo } from '../../components/area/AvisoConteudo'
import { ActionButton } from '../../components/ui/ActionButton'

type Filtro = 'todas' | 'nao-iniciadas' | 'em-andamento' | 'dominadas'

const FILTROS: { id: Filtro; rotulo: string }[] = [
  { id: 'todas', rotulo: 'Todas' },
  { id: 'nao-iniciadas', rotulo: 'Não iniciadas' },
  { id: 'em-andamento', rotulo: 'Em andamento' },
  { id: 'dominadas', rotulo: 'Dominadas' },
]

function casa(resumo: ResumoLei, filtro: Filtro): boolean {
  switch (filtro) {
    case 'nao-iniciadas':
      return !resumo.iniciada
    case 'em-andamento':
      return resumo.iniciada && !resumo.dominada
    case 'dominadas':
      return resumo.dominada
    default:
      return true
  }
}

export function Dashboard() {
  const [filtro, setFiltro] = useState<Filtro>('todas')

  // Calcula uma vez por render (lê localStorage).
  const resumos = useMemo(() => leis.map((lei) => ({ lei, resumo: getResumoLei(lei) })), [])
  const geral = useMemo(() => getResumoGeral(leis), [])

  // "Continuar de onde parou": 1ª em andamento, senão 1ª não iniciada.
  const continuar = useMemo(() => {
    const emAndamento = resumos.find(({ resumo }) => resumo.iniciada && !resumo.dominada)
    if (emAndamento) return emAndamento.lei
    return resumos.find(({ resumo }) => !resumo.iniciada)?.lei
  }, [resumos])

  const visiveis = resumos.filter(({ resumo }) => casa(resumo, filtro))
  const codigoAtivo = getCodigoAtivo()

  return (
    <div className="noise-bg min-h-screen">
      <AreaHeader />

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Saudação + visão geral */}
        <section>
          <h1 className="font-display text-2xl font-bold uppercase text-fg sm:text-3xl">
            Seu treino
          </h1>
          <p className="mt-2 text-muted">
            Você dominou{' '}
            <span className="font-semibold text-accent">{geral.dominadas}</span> de{' '}
            {geral.totalLeis} leis. {geral.emAndamento > 0 && `${geral.emAndamento} em andamento.`}
          </p>

          {codigoAtivo && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-3 py-1.5 text-xs text-muted">
              <KeyRound size={13} className="shrink-0 text-gold" />
              Seu acesso: salve este código para entrar em outro dispositivo —{' '}
              <span className="font-semibold tracking-wider text-fg">{codigoAtivo}</span>
            </p>
          )}

          {continuar && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 flex flex-col gap-4 rounded-2xl border border-accent/30 bg-surface/60 p-5 accent-glow sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Continuar de onde parou
                </span>
                <p className="mt-1 font-display text-lg font-semibold uppercase text-fg">
                  {continuar.nome}
                </p>
              </div>
              <ActionButton
                to={`/area/lei/${continuar.slug}`}
                trailingIcon={<ArrowRight size={20} />}
                className="w-full sm:w-auto"
              >
                Treinar agora
              </ActionButton>
            </motion.div>
          )}
        </section>

        {/* Filtros */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTROS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                filtro === f.id
                  ? 'border-accent bg-accent text-accent-ink'
                  : 'border-line bg-surface/60 text-muted hover:text-fg'
              }`}
            >
              {f.rotulo}
            </button>
          ))}
        </div>

        {/* Grid das leis */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map(({ lei, resumo }, i) => (
            <LawCard key={lei.slug} lei={lei} resumo={resumo} ordem={i + 1} />
          ))}
        </div>

        {visiveis.length === 0 && (
          <p className="mt-10 text-center text-muted">Nenhuma lei nesta categoria por enquanto.</p>
        )}

        <AvisoConteudo className="mt-12" />
      </main>
    </div>
  )
}

function LawCard({
  lei,
  resumo,
  ordem,
}: {
  lei: (typeof leis)[number]
  resumo: ResumoLei
  ordem: number
}) {
  const semCasos = resumo.total === 0

  const StatusIcon = resumo.dominada ? CheckCircle2 : resumo.iniciada ? PlayCircle : Circle
  const statusColor = resumo.dominada
    ? 'text-accent'
    : resumo.iniciada
      ? 'text-gold'
      : 'text-muted'

  return (
    <Link
      to={semCasos ? '#' : `/area/lei/${lei.slug}`}
      aria-disabled={semCasos}
      onClick={(e) => semCasos && e.preventDefault()}
      className={`group relative flex flex-col rounded-2xl border border-line bg-surface/60 p-5 transition-all duration-300 ${
        semCasos
          ? 'cursor-not-allowed opacity-60'
          : 'hover:border-accent/50 hover:bg-surface-2 hover:shadow-[0_0_30px_-12px_rgb(255,107,26,0.5)]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="stat-number text-2xl text-accent/70 sm:text-3xl">
          {String(ordem).padStart(2, '0')}
        </span>
        {resumo.dominada ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
            <Trophy size={12} /> Dominada
          </span>
        ) : (
          <StatusIcon size={18} className={statusColor} />
        )}
      </div>

      <h3 className="mt-3 font-display text-base font-semibold uppercase leading-tight text-fg">
        {lei.nome}
      </h3>
      <p className="mt-1 text-xs font-medium text-muted">Lei {lei.numero}</p>

      {/* Barra de progresso */}
      <div className="mt-4">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-night">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${resumo.percentConcluido}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-muted">
          {semCasos ? (
            <span className="italic">Em breve</span>
          ) : (
            <>
              <span>
                {resumo.respondidos}/{resumo.total} casos
              </span>
              <span>{resumo.percentConcluido}%</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
