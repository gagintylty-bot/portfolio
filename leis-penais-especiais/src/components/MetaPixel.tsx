import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { initPixel, trackPageView } from '../lib/meta-pixel'
import { config } from '../config'

/**
 * Inicializa o Meta Pixel uma única vez e dispara PageView a cada troca de rota.
 * Renderiza nada (componente invisível). Deve ficar dentro do Router.
 */
export function MetaPixel() {
  const location = useLocation()
  const primeiraRota = useRef(true)

  // Init único no mount (já dispara o PageView inicial).
  useEffect(() => {
    initPixel(config.metaPixelId)
  }, [])

  // PageView nas navegações seguintes (o load inicial já foi coberto no init).
  useEffect(() => {
    if (primeiraRota.current) {
      primeiraRota.current = false
      return
    }
    trackPageView()
  }, [location.pathname])

  return null
}
