/** Estilo narrativo da VSL — muda copy, paleta, trilha de SFX e ritmo. */
export type Estilo = 'urgencia' | 'premium' | 'educativo' | 'energetico'

/** Proporção do vídeo final. */
export type Formato = '16:9' | '9:16'

/** O que o usuário conta pra IA (por texto ou áudio transcrito). */
export interface Briefing {
  produto: string
  descricao: string
  publico: string
  oferta: string
  exemplos: string
  estilo: Estilo
  formato: Formato
}

export type SfxNome = 'whoosh' | 'impacto' | 'riser' | 'caixa' | 'clique' | 'brilho'

export type Forma3D = 'cubo' | 'piramide' | 'anel' | 'icosaedro'

/** Uma cena do vídeo: um beat do roteiro clássico de VSL. */
export interface Cena {
  id: string
  /** Nome do beat (Hook, Problema, Solução…) — aparece na timeline do estúdio. */
  beat: string
  /** Texto narrado pela voz escolhida. */
  narracao: string
  /** Frase curta que domina a tela (tipografia cinética). */
  titulo: string
  /** Palavras destacadas na cor de acento. */
  destaques: string[]
  /** Itens de lista (benefícios, provas) exibidos um a um. Opcional. */
  bullets?: string[]
  sfx: SfxNome
  forma: Forma3D
  /** Matiz base da cena (0–360) — o renderer anima em torno dela. */
  matiz: number
  /** Duração mínima em ms quando não há narração pra sincronizar. */
  duracaoMs: number
}

export interface Roteiro {
  cenas: Cena[]
  /** Aviso quando o briefing veio vago — a IA preenche, mas sinaliza. */
  observacoes: string[]
}

export interface VozOpcao {
  voz: SpeechSynthesisVoice
  rotulo: string
  descricao: string
}

export interface AjusteVoz {
  taxa: number // 0.5–2
  tom: number // 0–2
}
