import type { AjusteVoz, VozOpcao } from './types'

/**
 * Galeria de vozes em cima da Web Speech API (roda 100% no navegador).
 * Prioriza vozes em português; descreve cada uma pra escolha ficar fácil.
 */

function descrever(v: SpeechSynthesisVoice, i: number): VozOpcao {
  const nome = v.name.replace(/^(Microsoft|Google|Apple)\s*/i, '').replace(/\s*-\s*Portuguese.*$/i, '')
  const local = v.lang.toLowerCase().includes('pt-br')
    ? 'Português (Brasil)'
    : v.lang.toLowerCase().startsWith('pt')
      ? 'Português (Portugal)'
      : v.lang
  const perfis = [
    'Grave e confiante — boa pra ofertas diretas',
    'Clara e próxima — boa pra tom educativo',
    'Enérgica — boa pra hooks e CTAs',
    'Neutra e versátil — funciona em qualquer beat',
  ]
  return { voz: v, rotulo: nome || `Voz ${i + 1}`, descricao: `${local} · ${perfis[i % perfis.length]}` }
}

/** Vozes podem carregar de forma assíncrona; resolve quando houver alguma. */
export function carregarVozes(): Promise<VozOpcao[]> {
  const montar = () => {
    const todas = window.speechSynthesis?.getVoices() ?? []
    const pt = todas.filter((v) => v.lang.toLowerCase().startsWith('pt'))
    const lista = (pt.length > 0 ? pt : todas).map(descrever)
    // pt-BR primeiro
    return lista.sort((a, b) => Number(b.voz.lang.toLowerCase().includes('pt-br')) - Number(a.voz.lang.toLowerCase().includes('pt-br')))
  }
  return new Promise((resolve) => {
    const agora = montar()
    if (agora.length > 0) return resolve(agora)
    if (!window.speechSynthesis) return resolve([])
    window.speechSynthesis.onvoiceschanged = () => resolve(montar())
    // fallback se o evento nunca disparar
    setTimeout(() => resolve(montar()), 1500)
  })
}

export function suportaNarracao(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

/** Fala um trecho e resolve quando terminar (ou for cancelada). */
export function falar(texto: string, voz: SpeechSynthesisVoice | null, ajuste: AjusteVoz): Promise<void> {
  return new Promise((resolve) => {
    if (!suportaNarracao()) return resolve()
    const u = new SpeechSynthesisUtterance(texto)
    if (voz) u.voice = voz
    u.lang = voz?.lang ?? 'pt-BR'
    u.rate = ajuste.taxa
    u.pitch = ajuste.tom
    u.onend = () => resolve()
    u.onerror = () => resolve()
    window.speechSynthesis.speak(u)
  })
}

export function pararFala() {
  if (suportaNarracao()) window.speechSynthesis.cancel()
}
