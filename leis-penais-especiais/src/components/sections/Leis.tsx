import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { CountUp } from '../ui/CountUp'
import { leisMeta as leis } from '../../data/leis/meta'

// Entrada em onda diagonal (cima-esquerda → baixo-direita) com overshoot.
const card: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 18,
      delay: (Math.floor(i / 4) + (i % 4)) * 0.05,
    },
  }),
}

export function Leis() {
  return (
    <Section id="leis" className="section-seam">
      <Container>
        <SectionHeading
          eyebrow="O escopo completo"
          title="As 20 leis penais especiais que você precisa dominar"
          subtitle="Não é teoria solta. É o mapa exato do que aparece na delegacia, na denúncia e na audiência criminal."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {leis.map((lei, i) => (
            <motion.div
              key={lei.slug}
              custom={i}
              variants={card}
              whileHover={{ y: -2 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-surface/60 p-4 transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/60 hover:bg-surface-2 hover:shadow-[0_8px_30px_-12px_rgb(255,107,26,0.55)]"
            >
              <span className="stat-number text-2xl text-accent/80 transition-colors group-hover:text-accent sm:text-3xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mt-4">
                <h3 className="font-display text-sm font-semibold uppercase leading-tight text-fg sm:text-base">
                  {lei.nome}
                </h3>
                <p className="mt-1 text-xs font-medium text-muted">Lei {lei.numero}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted">
            <span className="stat-number text-2xl text-accent">
              <CountUp to={357} duration={1.8} />
            </span>{' '}
            casos práticos de treino, das 20 leis — do fácil ao difícil.
          </p>
          <p className="max-w-xl text-sm text-muted">
            Vinte frentes onde um detalhe muda o resultado. Imagine entrar em qualquer uma delas
            sabendo exatamente onde pisar.
          </p>
          <Button cta="checkout" origem="leis" trailingIcon={<ArrowRight size={20} />}>
            Quero dominar as 20 leis
          </Button>
        </div>
      </Container>
    </Section>
  )
}
