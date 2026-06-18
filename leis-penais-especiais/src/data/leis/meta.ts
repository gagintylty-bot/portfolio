/**
 * Metadados leves das 20 leis (sem os cenários de treino).
 * Usado pela LANDING (grid das 20 leis) para NÃO carregar todo o
 * conteúdo de treino na página de anúncio (performance).
 *
 * ⚠️ Mantenha em sincronia com os arquivos ricos em src/data/leis/*.ts
 * (slug, nome e numero). O teste `npm run check:cenarios` valida a sincronia.
 */
export interface LeiMeta {
  slug: string
  nome: string
  numero: string
}

export const leisMeta: LeiMeta[] = [
  { slug: 'lei-de-drogas', nome: 'Lei de Drogas', numero: '11.343/2006' },
  { slug: 'maria-da-penha', nome: 'Lei Maria da Penha', numero: '11.340/2006' },
  { slug: 'estatuto-do-desarmamento', nome: 'Estatuto do Desarmamento', numero: '10.826/2003' },
  { slug: 'crimes-hediondos', nome: 'Crimes Hediondos', numero: '8.072/1990' },
  { slug: 'lei-de-tortura', nome: 'Lei de Tortura', numero: '9.455/1997' },
  { slug: 'lavagem-de-capitais', nome: 'Lavagem de Capitais', numero: '9.613/1998' },
  { slug: 'organizacao-criminosa', nome: 'Organização Criminosa', numero: '12.850/2013' },
  { slug: 'ordem-tributaria', nome: 'Crimes contra a Ordem Tributária', numero: '8.137/1990' },
  { slug: 'interceptacao-telefonica', nome: 'Interceptação Telefônica', numero: '9.296/1996' },
  { slug: 'eca', nome: 'ECA (crimes)', numero: '8.069/1990' },
  { slug: 'crimes-de-transito', nome: 'Crimes de Trânsito (CTB)', numero: '9.503/1997' },
  { slug: 'crimes-ambientais', nome: 'Crimes Ambientais', numero: '9.605/1998' },
  { slug: 'abuso-de-autoridade', nome: 'Abuso de Autoridade', numero: '13.869/2019' },
  { slug: 'crimes-raciais', nome: 'Crimes Raciais', numero: '7.716/1989' },
  { slug: 'contravencoes-penais', nome: 'Contravenções Penais', numero: 'DL 3.688/1941' },
  { slug: 'sistema-financeiro', nome: 'Crimes contra o Sistema Financeiro', numero: '7.492/1986' },
  { slug: 'estatuto-do-idoso', nome: 'Estatuto do Idoso (crimes)', numero: '10.741/2003' },
  { slug: 'juizados-especiais-criminais', nome: 'Juizados Especiais Criminais', numero: '9.099/1995' },
  { slug: 'lei-de-terrorismo', nome: 'Lei de Terrorismo', numero: '13.260/2016' },
  { slug: 'crimes-licitatorios', nome: 'Crimes Licitatórios', numero: '14.133/2021' },
]
