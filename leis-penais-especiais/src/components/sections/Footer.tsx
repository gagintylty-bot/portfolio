import { Container } from '../ui/Container'
import { config } from '../../config'

export function Footer() {
  return (
    <footer className="border-t border-line bg-night py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-display text-lg font-bold uppercase text-fg">
              <span className="text-accent">§</span> Leis Penais Especiais
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Método de estudo das 20 leis penais especiais para advogados criminalistas que querem
              atuar com segurança na prática forense.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-muted" aria-label="Rodapé">
            <a href="/politica-de-privacidade" className="transition-colors hover:text-fg">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="transition-colors hover:text-fg">
              Termos de Uso
            </a>
            <a
              href={`mailto:${config.email}`}
              className="transition-colors hover:text-fg"
            >
              {config.email}
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-muted">
            {config.empresaNome} — CNPJ {config.cnpj}. © {config.ano} Todos os direitos reservados.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Este material tem finalidade educacional e <strong>não constitui consultoria
            jurídica</strong> nem garante resultado em casos concretos. A aplicação das leis depende
            da análise de cada situação específica. Este site não é afiliado ao Facebook/Meta.
          </p>
        </div>
      </Container>
    </footer>
  )
}
