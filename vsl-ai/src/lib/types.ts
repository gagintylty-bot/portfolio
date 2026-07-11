export type Estilo = 'agressivo' | 'premium' | 'tech'
export type DuracaoPreset = 15 | 30 | 45
export type SfxNome = 'whoosh' | 'impacto' | 'riser' | 'caixa' | 'clique' | 'brilho'
export type EntradaTipo = 'stamp' | 'slide' | 'zoom' | 'blur-settle'
export type TransicaoTipo = 'wipe' | 'zoom-through' | 'flash' | 'match-cut'
export type CameraMove = 'dolly-in' | 'orbit' | 'punch-in' | 'hold'

export interface VideoConfig {
  texto: string
  estilo: Estilo
  duracaoSeg: DuracaoPreset
  cta: string
}

export interface BeatEntry {
  id: string
  beatNome: string
  frase: string
  tituloVisual: string
  destaques: string[]
  bullets?: string[]
  sfx: SfxNome
  entrada: EntradaTipo
  transicao: TransicaoTipo
  camera: CameraMove
  matiz: number
  duracaoMs: number
}

export interface BeatMap {
  beats: BeatEntry[]
  estilo: Estilo
  totalMs: number
}

export interface VozOpcao {
  voz: SpeechSynthesisVoice
  rotulo: string
  descricao: string
}

export interface AjusteVoz {
  taxa: number
  tom: number
}
