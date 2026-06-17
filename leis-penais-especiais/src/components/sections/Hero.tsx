import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, ShieldCheck, Check } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

const bullets = [
  'Da Lei de Drogas à Lei de Organização Criminosa',
  'Estrutura por gatilhos de aplicação, não decoreba',
  'Pronto para consultar antes da audiência',
]

export function Hero() {
  return (
    <header className="hero-radial relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* linha de acento superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge tone="gold" icon={<ShieldCheck size={14} />} className="mb-6">
              Para advogados criminalistas
            </Badge>

            <h1 className="font-display text-[2rem] font-bold uppercase leading-[1.04] text-fg sm:text-5xl lg:text-[3.4rem]">
              Você domina o Código Penal.{' '}
              <span className="text-accent">
                Mas trava nas leis penais especiais
              </span>{' '}
              — bem na hora em que o caso é decidido.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              O método que faz o advogado criminalista dominar as{' '}
              <strong className="font-semibold text-fg">20 leis penais especiais</strong> que mais
              caem na prática — sem reler 4.000 páginas de doutrina.
            </p>

            <ul className="mt-7 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-fg/90 sm:text-base">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                cta="checkout"
                origem="hero"
                trailingIcon={<ArrowRight size={20} />}
                className="w-full sm:w-auto"
              >
                Quero dominar as 20 leis
              </Button>
              <Button
                cta="whatsapp"
                origem="hero"
                variant="ghost"
                size="md"
                icon={<MessageCircle size={18} />}
              >
                ou fale comigo no WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Coluna do número editorial "20" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden w-full max-w-sm lg:block"
          >
            <div className="accent-glow relative rounded-3xl border border-line bg-surface/60 p-8 backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                Leis penais especiais
              </span>
              <div className="stat-number mt-2 bg-gradient-to-b from-accent to-accent-soft bg-clip-text text-[10rem] text-transparent">
                20
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                As que realmente decidem os casos criminais do dia a dia — organizadas para você
                consultar e aplicar sob pressão.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-xs text-muted">
                <ShieldCheck size={16} className="text-gold" />
                Método estruturado para a prática forense
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </header>
  )
}
