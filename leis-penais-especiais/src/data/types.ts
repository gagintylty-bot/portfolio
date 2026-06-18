/**
 * ===================================================================
 *  TIPOS DO PRODUTO DE TREINO (área de membros)
 * ===================================================================
 *  Todo o conteúdo jurídico vive em src/data/leis/ — 100% desacoplado
 *  dos componentes, para revisão por advogado sem tocar em código.
 * ===================================================================
 */

export type Dificuldade = 'facil' | 'medio' | 'dificil'

/**
 * Tipo da questão. Todos usam a mesma estrutura (alternativas + corretaId):
 *  - 'multipla' → 4 alternativas (padrão).
 *  - 'vf'       → 2 alternativas (Verdadeiro / Falso).
 */
export type TipoQuestao = 'multipla' | 'vf'

/** Uma situação prática de treino. */
export interface Cenario {
  id: string
  dificuldade: Dificuldade
  /** Tipo da questão (padrão 'multipla' quando ausente). */
  tipo?: TipoQuestao
  /** A situação prática — fato concreto que um criminalista enfrentaria. */
  enunciado: string
  /** Opções de resposta (4 na múltipla, 2 no V/F). */
  alternativas: { id: string; texto: string }[]
  /** id da alternativa correta. */
  corretaId: string
  /** Fundamentação do porquê da resposta. */
  explicacao: string
  /** Base legal, ex.: "art. 33, Lei 11.343/2006". */
  baseLegal: string
  /** SEMPRE false na geração — precisa de revisão jurídica antes de ir ao ar. */
  revisado: boolean
}

/** Uma lei penal especial e seu módulo de treino. */
export interface Lei {
  id: string
  /** ex.: "11.343/2006" */
  numero: string
  /** ex.: "Lei de Drogas" */
  nome: string
  /** ex.: "lei-de-drogas" (usado na rota /area/lei/:slug) */
  slug: string
  /** 2-3 frases do que a lei trata. */
  resumo: string
  /** Mínimo 15 cenários: ~5 fácil, ~5 médio, ~5 difícil. */
  cenarios: Cenario[]
}

export const DIFICULDADES: Dificuldade[] = ['facil', 'medio', 'dificil']

export const ROTULO_DIFICULDADE: Record<Dificuldade, string> = {
  facil: 'Fácil',
  medio: 'Médio',
  dificil: 'Difícil',
}

/** Aviso obrigatório exibido no app (rodapé + início de cada módulo). */
export const AVISO_CONTEUDO =
  'Conteúdo educacional. Não substitui consulta à legislação vigente nem assessoria jurídica. Sujeito a revisão.'
