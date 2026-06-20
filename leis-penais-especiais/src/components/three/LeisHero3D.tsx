import { lazy, Suspense, useEffect, useState } from 'react'

const LeisScene = lazy(() => import('./LeisScene'))

/**
 * Idempotent capability check. Runs only on the client. Returns true only when
 * every gate passes: desktop viewport, no reduced-motion preference, and a
 * working WebGL context. Pure/side-effect-free aside from the throwaway canvas,
 * so it is safe to run twice under React StrictMode.
 */
function shouldRender3D(): boolean {
  if (typeof window === 'undefined') return false

  const isDesktop = window.matchMedia('(min-width: 1024px)').matches
  if (!isDesktop) return false

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  if (reducedMotion) return false

  try {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl2') || canvas.getContext('webgl')
    return !!gl
  } catch {
    return false
  }
}

export function LeisHero3D() {
  // Starts false so the very first paint is light and SSR/hydration-safe.
  const [habilitado, setHabilitado] = useState(false)

  useEffect(() => {
    setHabilitado(shouldRender3D())
  }, [])

  if (!habilitado) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <Suspense fallback={null}>
        <LeisScene />
      </Suspense>
    </div>
  )
}
