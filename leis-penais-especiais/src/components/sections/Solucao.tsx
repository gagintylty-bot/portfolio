import { motion } from 'framer-motion'
import { Target, Layers, Gavel } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'
import { config } from '../../config'

const passos = [
  {
    icon: Target,
    titulo: 'Gatilho de aplicação',
    desc: 'Você aprende quando e por que cada lei especial entra no caso — não o artigo isolado, mas o que dispara a sua incidência.',
  },
  {
    icon: Layers,
    titulo: 'Estrutura prática',
    desc: 'Cada lei mapeada pelo que importa no fórum: tipos, ritos, prazos e as nulidades que o promotor torce para você não enxergar.',
  },
  {
    icon: Gavel,
    titulo: 'Pronto para a audiência',
    desc: 'Material de consulta rápida para revisar minutos antes de sustentar — segurança onde antes havia hesitação.',
  },
]

export function Solucao() {
  return (
    <Section id="metodo" surface>
      <Container>
        <SectionHeading
          eyebrow="A virada"
          title={
            <>
              Pare de decorar artigo por artigo.
              <br className="hidden sm:block" /> Domine pelos gatilhos.
            </>
          }
          subtitle="Decoreba não sobrevive à pressão da audiência. O caminho é entender a lógica de aplicação de cada lei especial — o que cai, o que o promotor usa e onde estão as nulidades."
        />

        <Reveal className="mt-6 flex justify-center">
          <Badge tone="accent">Apresentando o {config.metodoNome}</Badge>
        </Reveal>

        {/* respiro após o grid denso: bloco cresce devagar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {passos.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.titulo}
                className="flex h-full flex-col rounded-2xl border border-line bg-night/50 p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold uppercase text-fg">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
