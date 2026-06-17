import { useEffect } from 'react'
import { config } from '../config'

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Injeta o Meta Pixel apenas se config.metaPixelId estiver preenchido.
 * Dispara PageView no carregamento. Os eventos de conversão
 * (Lead / InitiateCheckout) são disparados em lib/track.ts.
 */
export function MetaPixel() {
  useEffect(() => {
    const id = config.metaPixelId
    if (!id) return // sem pixel configurado → não injeta nada (dev-safe)

    const w = window as any
    if (w.fbq) {
      // já carregado: apenas registra o PageView desta visita
      w.fbq('track', 'PageView')
      return
    }

    // snippet padrão do Meta Pixel
    ;(function (f: any, b: Document, e: string, v: string) {
      let n: any
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = true
      n.version = '2.0'
      n.queue = []
      const t = b.createElement(e) as HTMLScriptElement
      t.async = true
      t.src = v
      const s = b.getElementsByTagName(e)[0]
      s.parentNode?.insertBefore(t, s)
    })(w, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

    w.fbq('init', id)
    w.fbq('track', 'PageView')
  }, [])

  // O <noscript> de fallback do pixel é opcional e omitido para manter o DOM limpo.
  return null
}
