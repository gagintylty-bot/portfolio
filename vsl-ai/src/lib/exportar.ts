/**
 * Exportação do vídeo: captura o canvas (30 fps) mixado com o áudio dos
 * efeitos sonoros e grava um .webm via MediaRecorder.
 *
 * Limitação conhecida: a narração da Web Speech API toca direto no
 * dispositivo e não pode ser capturada pelo navegador — por isso o arquivo
 * exportado sai com motion + SFX, e o roteiro/SRT ficam disponíveis pra
 * dublagem (ou pra plugar um TTS em nuvem depois).
 */
export class GravadorVideo {
  private gravador: MediaRecorder | null = null
  private pedacos: Blob[] = []

  iniciar(canvas: HTMLCanvasElement, audio: MediaStream) {
    const stream = canvas.captureStream(30)
    audio.getAudioTracks().forEach((t) => stream.addTrack(t))
    const mime = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'].find((m) =>
      MediaRecorder.isTypeSupported(m),
    )
    this.pedacos = []
    this.gravador = new MediaRecorder(stream, mime ? { mimeType: mime, videoBitsPerSecond: 6_000_000 } : undefined)
    this.gravador.ondataavailable = (e) => {
      if (e.data.size > 0) this.pedacos.push(e.data)
    }
    this.gravador.start(500)
  }

  gravando(): boolean {
    return this.gravador?.state === 'recording'
  }

  parar(): Promise<Blob> {
    return new Promise((resolve) => {
      const g = this.gravador
      if (!g || g.state === 'inactive') return resolve(new Blob(this.pedacos, { type: 'video/webm' }))
      g.onstop = () => resolve(new Blob(this.pedacos, { type: 'video/webm' }))
      g.stop()
    })
  }
}

export function baixarArquivo(conteudo: Blob | string, nome: string) {
  const blob = typeof conteudo === 'string' ? new Blob([conteudo], { type: 'text/plain;charset=utf-8' }) : conteudo
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nome
  a.click()
  URL.revokeObjectURL(url)
}
