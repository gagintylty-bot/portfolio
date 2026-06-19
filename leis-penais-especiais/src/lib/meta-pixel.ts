/**
 * ===================================================================
 *  META PIXEL — módulo único (init + eventos + tipagem do fbq global)
 * ===================================================================
 *  Script nativo do Meta injetado no <head>. Sem libs de terceiros.
 *  Fonte única do `fbq` global do projeto.
 * ===================================================================
 */

type FbqFn = (...args: unknown[]) => void

/** Forma interna do fbq durante o bootstrap (fila + metadados). */
interface FbqBootstrap extends FbqFn {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  push: FbqFn
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq: FbqFn
    _fbq: FbqFn
  }
}

/**
 * Inicializa o Meta Pixel uma única vez (idempotente).
 * Injeta o script oficial, faz init e dispara o PageView inicial.
 */
export function initPixel(pixelId: string): void {
  if (typeof window === 'undefined' || !pixelId) return

  const w = window as unknown as { fbq?: FbqBootstrap; _fbq?: FbqBootstrap }
  if (w.fbq) return // já inicializado — evita dupla injeção

  // snippet oficial do Meta Pixel (reescrito com tipagem)
  const n = function (this: unknown, ...args: unknown[]) {
    n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
  } as FbqBootstrap
  n.queue = []
  n.push = n
  n.loaded = true
  n.version = '2.0'
  w.fbq = n
  if (!w._fbq) w._fbq = n

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  const first = document.getElementsByTagName('script')[0]
  first?.parentNode?.insertBefore(script, first)

  window.fbq('init', pixelId)
  window.fbq('track', 'PageView')
}

/**
 * Dispara um evento padrão do Pixel. Guard contra SSR / bloqueador de anúncio
 * / Pixel ainda não inicializado.
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
  if (params) window.fbq('track', eventName, params)
  else window.fbq('track', eventName)
}

/** Atalho para PageView. */
export function trackPageView(): void {
  trackEvent('PageView')
}
