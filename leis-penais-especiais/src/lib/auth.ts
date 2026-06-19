/**
 * ===================================================================
 *  GATE DE ACESSO (client-side) — PONTO ÚNICO DE TROCA
 * ===================================================================
 *  ⚠️ NÃO é segurança real (ver src/data/acessos.ts). É um gate simples
 *  por código, persistido em localStorage, para entrega rápida pós-compra.
 *
 *  Para migrar para auth de verdade (Supabase, Cakto/Kiwify, etc.),
 *  basta reescrever as funções abaixo — nenhum componente precisa mudar.
 * ===================================================================
 */
import { CODIGOS_VALIDOS } from '../data/acessos'

const STORAGE_KEY = 'lpe:acesso'

/** Normaliza o código (maiúsculas, sem espaços nas pontas). */
function normalizar(codigo: string): string {
  return codigo.trim().toUpperCase()
}

/** Verifica se um código está na lista de válidos. */
export function isCodigoValido(codigo: string): boolean {
  return CODIGOS_VALIDOS.map(normalizar).includes(normalizar(codigo))
}

/**
 * Tenta logar com um código. Retorna true se válido (e persiste o acesso).
 */
export function login(codigo: string): boolean {
  if (!isCodigoValido(codigo)) return false
  try {
    localStorage.setItem(STORAGE_KEY, normalizar(codigo))
  } catch {
    /* localStorage indisponível (modo privado) — segue só na sessão atual */
  }
  return true
}

/** Encerra o acesso. */
export function logout(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

/** Indica se há um acesso válido salvo. */
export function isAutenticado(): boolean {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY)
    return !!salvo && isCodigoValido(salvo)
  } catch {
    return false
  }
}

/** Retorna o código de acesso atualmente salvo (normalizado), ou null. */
export function getCodigoAtivo(): string | null {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY)
    return salvo && isCodigoValido(salvo) ? normalizar(salvo) : null
  } catch {
    return null
  }
}
