import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const viewport = { once: true, amount: 0.3 } as const

const sinais = [
  'Você trava quando o caso foge do Código Penal.',
  'Perde tempo caçando a lei certa no meio da audiência.',
  'Relê a mesma doutrina e ainda fica inseguro sobre o que cai na prática.',
  'Evita pegar certos casos por insegurança — e deixa dinheiro na mesa.',
]

export function Problema() {
  return (
    <Section id="problema" surface>
      <Container size="narrow">
        <SectionHeading
          align="left"
          eyebrow="O ponto cego"
          title="O Código Penal é só a base. As causas reais vivem nas leis especiais."
        />

        {/* desdobramento da dor: desliza da esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg"
        >
          <p>
            Drogas, armas, lavagem, organização criminosa. É aí que está o volume real de processos
            criminais — e é exatamente aí que a faculdade passou correndo.
          </p>
          <p>
            As leis penais especiais são <strong className="text-fg">fragmentadas</strong>, mudam com
            frequência e cada uma tem suas próprias regras de aplicação, nulidades e ritos. Um
            detalhe esquecido não custa só uma tese: custa o caso, o cliente e a sua credibilidade na
            frente do juiz.
          </p>
          <p className="text-fg">
            O problema nunca foi falta de estudo. É falta de uma estrutura que caiba na rotina de quem
            já está em audiência.
          </p>
        </motion.div>

        <div className="mt-10 rounded-2xl border border-line bg-night/60 p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-2 text-accent">
            <AlertTriangle size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Sinais de que você está vulnerável
            </span>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {sinais.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.4, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 rounded-xl border border-line/70 bg-surface/60 p-4 text-sm text-fg/90"
              >
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {s}
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
