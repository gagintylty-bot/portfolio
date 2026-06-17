import { ShieldCheck } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { config } from '../../config'

export function Garantia() {
  return (
    <Section id="garantia" surface className="py-14 sm:py-16 lg:py-20">
      <Container size="narrow">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-gold/30 bg-night/50 p-8 text-center sm:flex-row sm:p-10 sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-fg sm:text-3xl">
                Garantia incondicional de {config.garantiaDias} dias
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Entre, veja o método por dentro e teste na sua rotina. Se em{' '}
                {config.garantiaDias} dias você achar que não vale cada centavo, devolvemos 100% do
                seu investimento. Sem pergunta, sem letra miúda. O risco é todo nosso — não seu.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
