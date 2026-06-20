import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Barra fina de progresso de leitura no topo da página.
 * Preenche conforme o scroll (cor de destaque). Suavizada com spring.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2.5px] origin-left bg-accent"
    />
  )
}
