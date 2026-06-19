/**
 * ===================================================================
 *  TRACKING DE CTA
 * ===================================================================
 *  trackCTA(origem) é chamada por TODOS os botões de CTA, para
 *  sabermos qual ação o usuário tomou e disparar o evento do Meta Pixel
 *  correspondente. A tipagem do fbq vive em lib/meta-pixel.ts (fonte única).
 *
 *   - clique no WhatsApp  -> 'Lead'
 *   - clique em comprar   -> 'InitiateCheckout'
 * ===================================================================
 */
import { trackEvent } from './meta-pixel'

/** Tipo de CTA, define qual evento de pixel disparar. */
export type CtaKind = 'checkout' | 'whatsapp'

/**
 * Registra um clique de CTA e dispara o evento de conversão no Meta Pixel.
 * @param origem  identificador da seção (ex.: 'hero', 'oferta', 'cta-final')
 * @param kind    'checkout' → InitiateCheckout, 'whatsapp' → Lead
 */
export function trackCTA(origem: string, kind: CtaKind = 'checkout'): void {
  if (kind === 'whatsapp') {
    trackEvent('Lead', { content_name: 'WhatsApp Lead' })
  } else {
    trackEvent('InitiateCheckout', {
      value: 197.0,
      currency: 'BRL',
      content_name: 'Método GAP',
    })
  }

  // Log em dev para conferência rápida de qual seção converte.
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info(`[trackCTA] origem="${origem}" → ${kind}`)
  }
}
