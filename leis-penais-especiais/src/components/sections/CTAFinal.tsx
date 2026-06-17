import { ArrowRight, MessageCircle, Flame } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { config } from '../../config'

export function CTAFinal() {
  return (
    <Section id="garantir" className="overflow-hidden">
      <Container size="narrow">
        <Reveal>
          <div className="hero-radial relative rounded-3xl border border-accent/30 bg-surface/70 p-8 text-center accent-glow sm:p-12">
            <Badge tone="accent" icon={<Flame size={14} />} className="mb-6">
              {config.lote.nome} · {config.lote.vagasRestantes} vagas neste preço
            </Badge>

            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold uppercase leading-[1.05] text-fg sm:text-4xl lg:text-5xl">
              Domine as 20 leis especiais antes do próximo caso difícil.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Você entra sabendo o que cai, onde estão as nulidades e o que responder. O{' '}
              {config.lote.nome.toLowerCase()} sai do ar quando as vagas fecharem — e o preço sobe de
              verdade.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <Button
                cta="checkout"
                origem="cta-final"
                trailingIcon={<ArrowRight size={20} />}
                className="w-full sm:w-auto"
              >
                Quero garantir minha vaga
              </Button>
              <Button
                cta="whatsapp"
                origem="cta-final"
                variant="ghost"
                size="md"
                icon={<MessageCircle size={18} />}
              >
                Ainda tenho uma dúvida — falar no WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
