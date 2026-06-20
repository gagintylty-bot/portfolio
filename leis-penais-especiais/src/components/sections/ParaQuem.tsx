import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const viewport = { once: true, amount: 0.3 } as const

const ehParaVoce = [
  'Advogado criminalista autônomo ou de escritório pequeno/médio.',
  'Recém-formado que escolheu a área criminal e quer atuar com segurança.',
  'Quem domina o Código Penal mas trava nas leis especiais.',
  'Quem quer consultar a lei certa em minutos, não em horas.',
  'Quem está cansado de evitar casos por insegurança.',
]

const naoEhParaVoce = [
  'Quem busca conteúdo só para a prova da OAB e não vai atuar.',
  'Quem quer um resumo raso para "decorar e esquecer".',
  'Quem não atua nem pretende atuar na esfera criminal.',
  'Quem espera milagre sem aplicar o método na rotina.',
]

export function ParaQuem() {
  return (
    <Section id="para-quem" surface>
      <Container>
        <SectionHeading eyebrow="Qualificação" title="Para quem é (e para quem não é)" />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-2xl border border-accent/30 bg-night/50 p-6 sm:p-8"
          >
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold uppercase text-accent">
              <Check size={20} /> É para você se…
            </h3>
            <ul className="mt-5 space-y-3">
              {ehParaVoce.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-fg/90 sm:text-base">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-2xl border border-line bg-night/50 p-6 sm:p-8"
          >
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold uppercase text-muted">
              <X size={20} /> Não é para você se…
            </h3>
            <ul className="mt-5 space-y-3">
              {naoEhParaVoce.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted">
                  <X size={18} className="mt-0.5 shrink-0 text-muted/70" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
