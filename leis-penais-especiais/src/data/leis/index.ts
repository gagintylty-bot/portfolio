import type { Lei } from '../types'
import { leiDrogas } from './lei-de-drogas'
import { lei as leiMariaDaPenha } from './maria-da-penha'
import { lei as leiDesarmamento } from './estatuto-do-desarmamento'
import { lei as leiCrimesHediondos } from './crimes-hediondos'
import { lei as leiTortura } from './lei-de-tortura'
import { lei as leiLavagem } from './lavagem-de-capitais'
import { lei as leiOrgCriminosa } from './organizacao-criminosa'
import { lei as leiOrdemTributaria } from './ordem-tributaria'
import { lei as leiInterceptacao } from './interceptacao-telefonica'
import { lei as leiEca } from './eca'
import { lei as leiCtb } from './crimes-de-transito'
import { lei as leiAmbientais } from './crimes-ambientais'
import { lei as leiAbuso } from './abuso-de-autoridade'
import { lei as leiCrimesRaciais } from './crimes-raciais'
import { lei as leiContravencoes } from './contravencoes-penais'
import { lei as leiSistemaFinanceiro } from './sistema-financeiro'
import { lei as leiIdoso } from './estatuto-do-idoso'
import { lei as leiJecrim } from './juizados-especiais-criminais'
import { lei as leiTerrorismo } from './lei-de-terrorismo'
import { lei as leiLicitatorios } from './crimes-licitatorios'

/**
 * Agrega as 20 leis penais especiais (1 arquivo por lei).
 * Ordem de exibição no painel/landing.
 */
export const leis: Lei[] = [
  leiDrogas,
  leiMariaDaPenha,
  leiDesarmamento,
  leiCrimesHediondos,
  leiTortura,
  leiLavagem,
  leiOrgCriminosa,
  leiOrdemTributaria,
  leiInterceptacao,
  leiEca,
  leiCtb,
  leiAmbientais,
  leiAbuso,
  leiCrimesRaciais,
  leiContravencoes,
  leiSistemaFinanceiro,
  leiIdoso,
  leiJecrim,
  leiTerrorismo,
  leiLicitatorios,
]

/** Busca uma lei pelo slug (rota /area/lei/:slug). */
export function getLeiBySlug(slug: string): Lei | undefined {
  return leis.find((l) => l.slug === slug)
}
