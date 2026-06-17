import { Plus } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

/** [EDITAR] Respostas finais do Matheus. */
const faqs = [
  {
    q: 'Tenho pouco tempo. Consigo aplicar isso na correria?',
    a: 'Sim. O método foi desenhado exatamente para quem já está em audiência. Em vez de releitura de doutrina, você tem estrutura por gatilhos e material de consulta rápida para revisar em minutos antes de cada ato.',
  },
  {
    q: 'Já estudei isso na faculdade. Vale a pena?',
    a: 'A faculdade ensina o Código Penal e passa correndo pelas leis especiais. Aqui o foco é a prática forense: o que cai na audiência, o que o promotor usa e onde estão as nulidades — não a teoria que você já viu.',
  },
  {
    q: 'O conteúdo é atualizado?',
    a: 'Sim. As leis penais especiais mudam com frequência, então o material recebe atualizações sempre que a legislação relevante é alterada, sem custo adicional dentro do seu acesso.',
  },
  {
    q: 'Serve para a prova da OAB ou só para a prática?',
    a: 'O foco é a atuação real do criminalista. A lógica por gatilhos ajuda a entender e fixar as leis, o que naturalmente reforça a prova — mas quem busca apenas teoria para a OAB não é o público ideal.',
  },
  {
    q: 'Como recebo o acesso depois da compra?',
    a: 'O acesso é liberado automaticamente após a confirmação do pagamento, na plataforma do checkout. Você acessa de qualquer dispositivo, quando e onde quiser.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem garantia incondicional. Se achar que não vale, é só pedir o reembolso dentro do prazo e devolvemos 100% — o risco é todo nosso.',
  },
]

export function FAQ() {
  return (
    <Section id="faq">
      <Container size="narrow">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={(i % 3) * 0.05}>
              <details className="group rounded-2xl border border-line bg-surface/60 transition-colors open:border-accent/40 hover:border-accent/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-base font-semibold uppercase leading-snug text-fg sm:text-lg">
                    {item.q}
                  </span>
                  <Plus
                    size={20}
                    className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-base">
                  {item.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
