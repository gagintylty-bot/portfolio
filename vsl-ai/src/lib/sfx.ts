import type { SfxNome } from './types'

/**
 * Efeitos sonoros 100% sintetizados com WebAudio — nenhum arquivo de áudio.
 * Todos os efeitos tocam num GainNode mestre que também alimenta um
 * MediaStreamDestination, pra entrarem na exportação do vídeo.
 */
export class MotorSfx {
  private ctx: AudioContext | null = null
  private mestre: GainNode | null = null
  private destinoStream: MediaStreamAudioDestinationNode | null = null

  private garantirCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext()
      this.mestre = this.ctx.createGain()
      this.mestre.gain.value = 0.6
      this.mestre.connect(this.ctx.destination)
      this.destinoStream = this.ctx.createMediaStreamDestination()
      this.mestre.connect(this.destinoStream)
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume()
    return this.ctx
  }

  /** Stream de áudio dos SFX, pra mixar na gravação do vídeo. */
  streamParaGravacao(): MediaStream {
    this.garantirCtx()
    return this.destinoStream!.stream
  }

  tocar(nome: SfxNome) {
    const ctx = this.garantirCtx()
    const t = ctx.currentTime
    switch (nome) {
      case 'whoosh':
        this.ruido(t, 0.35, { de: 400, para: 4000, tipo: 'bandpass', ganho: 0.5 })
        break
      case 'impacto':
        this.tom(t, 0.4, { de: 160, para: 38, tipo: 'sine', ganho: 0.9 })
        this.ruido(t, 0.18, { de: 2000, para: 200, tipo: 'lowpass', ganho: 0.6 })
        break
      case 'riser':
        this.tom(t, 1.4, { de: 90, para: 660, tipo: 'sawtooth', ganho: 0.22 })
        this.ruido(t, 1.4, { de: 300, para: 6000, tipo: 'bandpass', ganho: 0.25 })
        break
      case 'caixa': {
        // "cha-ching" de caixa registradora: dois sinos rápidos
        this.tom(t, 0.25, { de: 1046, para: 1046, tipo: 'triangle', ganho: 0.5 })
        this.tom(t + 0.09, 0.5, { de: 1568, para: 1568, tipo: 'triangle', ganho: 0.5 })
        break
      }
      case 'clique':
        this.tom(t, 0.07, { de: 900, para: 500, tipo: 'square', ganho: 0.35 })
        break
      case 'brilho': {
        // arpejo ascendente curto
        const notas = [523, 659, 784, 1046]
        notas.forEach((f, i) => this.tom(t + i * 0.07, 0.3, { de: f, para: f, tipo: 'sine', ganho: 0.3 }))
        break
      }
    }
  }

  private tom(
    inicio: number,
    dur: number,
    o: { de: number; para: number; tipo: OscillatorType; ganho: number },
  ) {
    const ctx = this.ctx!
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = o.tipo
    osc.frequency.setValueAtTime(o.de, inicio)
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, o.para), inicio + dur)
    g.gain.setValueAtTime(o.ganho, inicio)
    g.gain.exponentialRampToValueAtTime(0.001, inicio + dur)
    osc.connect(g).connect(this.mestre!)
    osc.start(inicio)
    osc.stop(inicio + dur + 0.05)
  }

  private ruido(
    inicio: number,
    dur: number,
    o: { de: number; para: number; tipo: BiquadFilterType; ganho: number },
  ) {
    const ctx = this.ctx!
    const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate)
    const dados = buf.getChannelData(0)
    for (let i = 0; i < dados.length; i++) dados[i] = Math.random() * 2 - 1
    const fonte = ctx.createBufferSource()
    fonte.buffer = buf
    const filtro = ctx.createBiquadFilter()
    filtro.type = o.tipo
    filtro.frequency.setValueAtTime(o.de, inicio)
    filtro.frequency.exponentialRampToValueAtTime(Math.max(1, o.para), inicio + dur)
    filtro.Q.value = 1.2
    const g = ctx.createGain()
    g.gain.setValueAtTime(o.ganho, inicio)
    g.gain.exponentialRampToValueAtTime(0.001, inicio + dur)
    fonte.connect(filtro).connect(g).connect(this.mestre!)
    fonte.start(inicio)
  }
}

export const sfx = new MotorSfx()
