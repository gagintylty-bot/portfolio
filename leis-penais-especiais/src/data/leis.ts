/**
 * As 20 leis penais especiais — a "isca de autoridade".
 * [EDITAR] Matheus revisa nomes/números e a ordem se quiser.
 */

export interface Lei {
  /** Número de exibição no card (1..20) */
  ordem: number
  /** Nome curto da lei */
  nome: string
  /** Número/identificação da lei */
  numero: string
}

export const leis: Lei[] = [
  { ordem: 1, nome: 'Lei de Drogas', numero: '11.343/2006' },
  { ordem: 2, nome: 'Lei Maria da Penha', numero: '11.340/2006' },
  { ordem: 3, nome: 'Estatuto do Desarmamento', numero: '10.826/2003' },
  { ordem: 4, nome: 'Crimes Hediondos', numero: '8.072/1990' },
  { ordem: 5, nome: 'Lei de Tortura', numero: '9.455/1997' },
  { ordem: 6, nome: 'Lavagem de Capitais', numero: '9.613/1998' },
  { ordem: 7, nome: 'Organização Criminosa', numero: '12.850/2013' },
  { ordem: 8, nome: 'Crimes contra a Ordem Tributária', numero: '8.137/1990' },
  { ordem: 9, nome: 'Interceptação Telefônica', numero: '9.296/1996' },
  { ordem: 10, nome: 'ECA (crimes)', numero: '8.069/1990' },
  { ordem: 11, nome: 'Crimes de Trânsito (CTB)', numero: '9.503/1997' },
  { ordem: 12, nome: 'Crimes Ambientais', numero: '9.605/1998' },
  { ordem: 13, nome: 'Abuso de Autoridade', numero: '13.869/2019' },
  { ordem: 14, nome: 'Crimes Raciais', numero: '7.716/1989' },
  { ordem: 15, nome: 'Contravenções Penais', numero: 'DL 3.688/1941' },
  { ordem: 16, nome: 'Crimes contra o Sistema Financeiro', numero: '7.492/1986' },
  { ordem: 17, nome: 'Estatuto do Idoso (crimes)', numero: '10.741/2003' },
  { ordem: 18, nome: 'Juizados Especiais Criminais', numero: '9.099/1995' },
  { ordem: 19, nome: 'Lei de Terrorismo', numero: '13.260/2016' },
  { ordem: 20, nome: 'Crimes Licitatórios', numero: '14.133/2021' },
]
