import { Quote, Star } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { depoimentos } from '../../data/depoimentos'

export function ProvaSocial() {
  return (
    <Section id="depoimentos">
      <Container>
        <SectionHeading
          eyebrow="Prova social"
          title="Advogados que pararam de travar"
          subtitle="Depoimentos de quem trocou a insegurança fora do Código Penal por método e clareza."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {depoimentos.map((d, i) => (
            <Reveal key={d.nome} delay={(i % 2) * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-accent/40">
                <Quote size={22} className="text-accent/70" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-fg/90 sm:text-base">
                  "{d.texto}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-night font-display text-sm font-semibold text-accent">
                    {d.iniciais}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-fg">{d.nome}</span>
                    <span className="block truncate text-xs text-muted">
                      {d.cargo} · {d.selo}
                    </span>
                  </span>
                  <span className="ml-auto flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center">
          <p className="text-xs uppercase tracking-widest text-muted">
            [EDITAR] Depoimentos ilustrativos — substituir por reais antes de anunciar.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
