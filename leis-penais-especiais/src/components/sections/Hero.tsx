import { ArrowRight, MessageCircle, ShieldCheck, Check } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { CountUp } from '../ui/CountUp'
import { LeisHero3D } from '../three/LeisHero3D'

const bullets = [
  'Da Lei de Drogas à Lei de Organização Criminosa',
  'Estrutura por gatilhos de aplicação, não decoreba',
  'Pronto para consultar antes da audiência',
]

// Headline revelada palavra a palavra (a frase de impacto sai em laranja).
const headline: { t: string; accent?: boolean }[] = [
  { t: 'Você' }, { t: 'domina' }, { t: 'o' }, { t: 'Código' }, { t: 'Penal.' },
  { t: 'Mas', accent: true }, { t: 'trava', accent: true }, { t: 'nas', accent: true },
  { t: 'leis', accent: true }, { t: 'penais', accent: true }, { t: 'especiais', accent: true },
  { t: '—' }, { t: 'bem' }, { t: 'na' }, { t: 'hora' }, { t: 'em' }, { t: 'que' },
  { t: 'o' }, { t: 'caso' }, { t: 'é' }, { t: 'decidido.' },
]

export function Hero() {
  return (
    <header className="hero-radial relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* linha de acento superior */}
      <div className="absolute inset-x-0 top-0 h-px hairline-accent" />

      {/* peça-assinatura 3D (desktop + WebGL apenas; senão, fica o fallback radial) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block"
      >
        <LeisHero3D />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Coluna de texto */}
          <div>
            <div className="anim-fade-up mb-6">
              <Badge tone="gold" icon={<ShieldCheck size={14} />}>
                Para advogados criminalistas
              </Badge>
            </div>

            <h1 className="font-display text-[2rem] font-bold uppercase leading-[1.04] text-fg sm:text-5xl lg:text-[3.4rem]">
              {headline.map((w, i) => (
                <span
                  key={i}
                  className={`anim-word ${w.accent ? 'text-accent' : ''}`}
                  style={{ marginRight: '0.25em', animationDelay: `${0.1 + i * 0.035}s` }}
                >
                  {w.t}
                </span>
              ))}
            </h1>

            <p
              className="anim-fade mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: '0.5s' }}
            >
              O método que faz o advogado criminalista dominar as{' '}
              <strong className="font-semibold text-fg">20 leis penais especiais</strong> que mais
              caem na prática — sem reler 4.000 páginas de doutrina.
            </p>

            <ul className="mt-7 space-y-2.5">
              {bullets.map((b, i) => (
                <li
                  key={b}
                  className="anim-slide-left flex items-start gap-3 text-sm text-fg/90 sm:text-base"
                  style={{ animationDelay: `${0.65 + i * 0.1}s` }}
                >
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div
              className="anim-pop mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: '1s' }}
            >
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
          </div>

          {/* Coluna do número editorial "20" (foreground, sobre o 3D) */}
          <div
            className="anim-scale-in relative mx-auto hidden w-full max-w-sm lg:block"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="accent-glow relative rounded-3xl border border-line bg-surface/60 p-8 backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                Leis penais especiais
              </span>
              <div className="stat-number mt-2 bg-gradient-to-b from-accent to-accent-soft bg-clip-text text-[10rem] text-transparent">
                <CountUp to={20} />
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
          </div>
        </div>
      </Container>
    </header>
  )
}
