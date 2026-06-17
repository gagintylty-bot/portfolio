import { Check, ArrowRight, Flame } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { config } from '../../config'

/** [EDITAR] Itens reais entregues no produto. */
const itens = [
  { titulo: 'As 20 leis penais especiais destrinchadas', valor: 'R$ 997' },
  { titulo: 'Mapa de gatilhos de aplicação de cada lei', valor: 'R$ 297' },
  { titulo: 'Material de consulta rápida para a audiência', valor: 'R$ 297' },
  { titulo: 'Guia de nulidades e teses defensivas mais usadas', valor: 'R$ 197' },
  { titulo: 'Atualizações sempre que a legislação mudar', valor: 'R$ 197' },
  { titulo: 'Acesso vitalício e em qualquer dispositivo', valor: 'Incluso' },
]

export function Oferta() {
  return (
    <Section id="oferta">
      <Container size="narrow">
        <SectionHeading
          eyebrow="A oferta"
          title="Tudo que você recebe para nunca mais travar fora do Código Penal"
        />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-accent/30 bg-surface/70 accent-glow">
            {/* topo do card */}
            <div className="border-b border-line bg-night/40 px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-lg font-bold uppercase text-fg sm:text-xl">
                  {config.metodoNome}
                </h3>
                <Badge tone="gold" icon={<Flame size={14} />}>
                  {config.lote.nome}
                </Badge>
              </div>
            </div>

            {/* itens */}
            <ul className="divide-y divide-line px-6 sm:px-8">
              {itens.map((item) => (
                <li key={item.titulo} className="flex items-center justify-between gap-4 py-4">
                  <span className="flex items-start gap-3 text-sm text-fg/90 sm:text-base">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                    {item.titulo}
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-muted line-through">
                    {item.valor}
                  </span>
                </li>
              ))}
            </ul>

            {/* preço */}
            <div className="border-t border-line bg-night/40 px-6 py-8 text-center sm:px-8">
              <p className="text-sm text-muted">
                Valor real de tudo:{' '}
                <span className="font-semibold text-fg line-through">{config.precoAncora}</span>
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-accent">
                Hoje, no {config.lote.nome.toLowerCase()}
              </p>
              <div className="mt-1 flex items-end justify-center gap-2">
                <span className="stat-number bg-gradient-to-b from-accent to-accent-soft bg-clip-text text-6xl text-transparent sm:text-7xl">
                  {config.precoReal}
                </span>
              </div>
              {config.precoParcelado && (
                <p className="mt-1 text-sm text-muted">ou {config.precoParcelado}</p>
              )}

              <div className="mt-7">
                <Button
                  cta="checkout"
                  origem="oferta"
                  fullWidth
                  trailingIcon={<ArrowRight size={20} />}
                >
                  Garantir minha vaga agora
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted">{config.lote.descricao}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
