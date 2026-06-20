import { Problema } from './Problema'
import { Leis } from './Leis'
import { Solucao } from './Solucao'
import { Oferta } from './Oferta'
import { Garantia } from './Garantia'
import { ProvaSocial } from './ProvaSocial'
import { ParaQuem } from './ParaQuem'
import { FAQ } from './FAQ'
import { CTAFinal } from './CTAFinal'

/**
 * Todas as seções abaixo da dobra, agrupadas para code-splitting.
 * Carregadas sob demanda (React.lazy) → tiram peso do JS inicial da landing
 * sem afetar o conteúdo above-the-fold (Hero).
 */
export default function BelowFold() {
  return (
    <>
      <Problema />
      <Leis />
      <Solucao />
      <Oferta />
      <Garantia />
      <ProvaSocial />
      <ParaQuem />
      <FAQ />
      <CTAFinal />
    </>
  )
}
