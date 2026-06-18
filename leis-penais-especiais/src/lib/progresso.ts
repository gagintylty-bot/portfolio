/**
 * ===================================================================
 *  PROGRESSO DO TREINO — persistido em localStorage
 * ===================================================================
 *  Guarda, por lei e por cenário, a alternativa escolhida e se acertou.
 *  Tudo client-side; nenhum backend.
 * ===================================================================
 */
import type { Lei } from '../data/types'

const STORAGE_KEY = 'lpe:progresso'
const STREAK_KEY = 'lpe:streak'

/** Resposta salva de um cenário. */
export interface RespostaSalva {
  escolhaId: string
  correto: boolean
}

/** Mapa cenarioId → resposta, dentro de uma lei. */
type ProgressoLei = Record<string, RespostaSalva>
/** Mapa leiSlug → progresso da lei. */
type ProgressoStore = Record<string, ProgressoLei>

function ler(): ProgressoStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ProgressoStore) : {}
  } catch {
    return {}
  }
}

function gravar(store: ProgressoStore): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  } catch {
    /* ignore (modo privado / quota) */
  }
}

/** Respostas salvas de uma lei (por slug). */
export function getProgressoLei(slug: string): ProgressoLei {
  return ler()[slug] ?? {}
}

/** Registra a resposta de um cenário e atualiza a ofensiva (streak). */
export function registrarResposta(
  slug: string,
  cenarioId: string,
  escolhaId: string,
  correto: boolean,
): void {
  const store = ler()
  store[slug] = { ...(store[slug] ?? {}), [cenarioId]: { escolhaId, correto } }
  gravar(store)
  registrarAtividade()
}

/** Zera o progresso de uma lei (para "treinar de novo"). */
export function resetLei(slug: string): void {
  const store = ler()
  delete store[slug]
  gravar(store)
}

/** Estatísticas calculadas de uma lei. */
export interface ResumoLei {
  total: number
  respondidos: number
  acertos: number
  /** % de cenários respondidos (0–100). */
  percentConcluido: number
  /** % de acerto sobre os respondidos (0–100). */
  percentAcerto: number
  /** true quando todos os cenários foram respondidos. */
  concluida: boolean
  /** true quando todos foram respondidos E todos corretos. */
  dominada: boolean
  iniciada: boolean
}

/** Calcula o resumo de uma lei a partir dos seus cenários + progresso salvo. */
export function getResumoLei(lei: Lei): ResumoLei {
  const prog = getProgressoLei(lei.slug)
  const total = lei.cenarios.length
  const respostas = lei.cenarios.map((c) => prog[c.id]).filter(Boolean) as RespostaSalva[]
  const respondidos = respostas.length
  const acertos = respostas.filter((r) => r.correto).length
  const percentConcluido = total === 0 ? 0 : Math.round((respondidos / total) * 100)
  const percentAcerto = respondidos === 0 ? 0 : Math.round((acertos / respondidos) * 100)
  const concluida = total > 0 && respondidos === total
  const dominada = concluida && acertos === total
  return {
    total,
    respondidos,
    acertos,
    percentConcluido,
    percentAcerto,
    concluida,
    dominada,
    iniciada: respondidos > 0,
  }
}

/** Visão geral de todas as leis (para o painel). */
export interface ResumoGeral {
  totalLeis: number
  dominadas: number
  emAndamento: number
  naoIniciadas: number
}

export function getResumoGeral(leis: Lei[]): ResumoGeral {
  let dominadas = 0
  let emAndamento = 0
  let naoIniciadas = 0
  for (const lei of leis) {
    const r = getResumoLei(lei)
    if (r.dominada) dominadas++
    else if (r.iniciada) emAndamento++
    else naoIniciadas++
  }
  return { totalLeis: leis.length, dominadas, emAndamento, naoIniciadas }
}

/* ----------------------- Ofensiva (streak) ----------------------- */

interface Streak {
  count: number
  /** YYYY-MM-DD da última atividade. */
  ultimaData: string
}

function hojeISO(): string {
  return new Date().toISOString().slice(0, 10)
}

function diasEntre(a: string, b: string): number {
  const ms = new Date(b).getTime() - new Date(a).getTime()
  return Math.round(ms / 86_400_000)
}

/** Marca atividade de hoje e atualiza a contagem de dias seguidos. */
export function registrarAtividade(): void {
  try {
    const raw = localStorage.getItem(STREAK_KEY)
    const hoje = hojeISO()
    if (!raw) {
      localStorage.setItem(STREAK_KEY, JSON.stringify({ count: 1, ultimaData: hoje } satisfies Streak))
      return
    }
    const s = JSON.parse(raw) as Streak
    const dif = diasEntre(s.ultimaData, hoje)
    if (dif === 0) return // já treinou hoje
    const count = dif === 1 ? s.count + 1 : 1 // dia seguido soma; senão reinicia
    localStorage.setItem(STREAK_KEY, JSON.stringify({ count, ultimaData: hoje } satisfies Streak))
  } catch {
    /* ignore */
  }
}

/** Retorna a ofensiva atual (0 se quebrada/inexistente). */
export function getStreak(): number {
  try {
    const raw = localStorage.getItem(STREAK_KEY)
    if (!raw) return 0
    const s = JSON.parse(raw) as Streak
    const dif = diasEntre(s.ultimaData, hojeISO())
    return dif <= 1 ? s.count : 0
  } catch {
    return 0
  }
}
