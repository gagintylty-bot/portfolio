import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { leis } from '../../data/leis'

export function Leis() {
  return (
    <Section id="leis">
      <Container>
        <SectionHeading
          eyebrow="O escopo completo"
          title="As 20 leis penais especiais que você precisa dominar"
          subtitle="Não é teoria solta. É o mapa exato do que aparece na delegacia, na denúncia e na audiência criminal."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {leis.map((lei, i) => (
            <motion.div
              key={lei.ordem}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-surface/60 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-surface-2 hover:shadow-[0_0_30px_-12px_rgb(255,107,26,0.5)]"
            >
              <span className="stat-number text-2xl text-accent/80 transition-colors group-hover:text-accent sm:text-3xl">
                {String(lei.ordem).padStart(2, '0')}
              </span>
              <div className="mt-4">
                <h3 className="font-display text-sm font-semibold uppercase leading-tight text-fg sm:text-base">
                  {lei.nome}
                </h3>
                <p className="mt-1 text-xs font-medium text-muted">Lei {lei.numero}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
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
