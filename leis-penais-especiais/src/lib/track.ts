/**
 * ===================================================================
 *  TRACKING CENTRAL
 * ===================================================================
 *  trackCTA(origem) é chamada por TODOS os botões de CTA, para
 *  sabermos qual seção mais converte.
 *
 *  Convenção de eventos do Meta Pixel:
 *   - clique no WhatsApp  -> 'Lead'
 *   - clique em comprar   -> 'InitiateCheckout'
 * ===================================================================
 */

type FbqFn = (...args: unknown[]) => void

declare global {
  interface Window {
    fbq?: FbqFn
    dataLayer?: unknown[]
  }
}

/** Tipo de CTA, define qual evento de pixel disparar. */
export type CtaKind = 'checkout' | 'whatsapp'

/**
 * Registra um clique de CTA.
 * @param origem  identificador da seção (ex.: 'hero', 'oferta', 'cta-final')
 * @param kind    'checkout' dispara InitiateCheckout, 'whatsapp' dispara Lead
 */
export function trackCTA(origem: string, kind: CtaKind = 'checkout'): void {
  const eventName = kind === 'whatsapp' ? 'Lead' : 'InitiateCheckout'

  // Meta Pixel (se configurado)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'CTAClick', { origem, kind })
    window.fbq('track', eventName, { content_name: origem })
  }

  // Log em dev para conferência rápida
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info(`[trackCTA] origem="${origem}" → ${eventName}`)
  }
}
