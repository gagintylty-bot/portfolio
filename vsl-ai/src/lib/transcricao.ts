/**
 * Briefing por áudio: grava o microfone e, quando o navegador suporta
 * (Chrome/Edge), transcreve ao vivo com a Web Speech API — você fala,
 * o texto aparece.
 */

interface ResultadoGravacao {
  parar: () => void
}

type AoTexto = (textoFinal: string, parcial: string) => void

// A Web Speech API de reconhecimento ainda é prefixada
type Reconhecimento = {
  lang: string
  continuous: boolean
  interimResults: boolean
  onresult: ((e: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }> }) => void) | null
  onend: (() => void) | null
  start: () => void
  stop: () => void
}

function criarReconhecimento(): Reconhecimento | null {
  const w = window as unknown as Record<string, unknown>
  const Ctor = (w.SpeechRecognition ?? w.webkitSpeechRecognition) as (new () => Reconhecimento) | undefined
  return Ctor ? new Ctor() : null
}

export function suportaTranscricao(): boolean {
  return criarReconhecimento() !== null
}

/**
 * Inicia gravação + transcrição. `aoTexto` recebe o texto consolidado e o
 * trecho parcial em andamento. Retorna controle pra parar.
 */
export async function gravarBriefing(aoTexto: AoTexto): Promise<ResultadoGravacao> {
  // pede o microfone primeiro — sem permissão, nada acontece
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

  const rec = criarReconhecimento()
  let consolidado = ''
  let ativo = true

  if (rec) {
    rec.lang = 'pt-BR'
    rec.continuous = true
    rec.interimResults = true
    rec.onresult = (e) => {
      let parcial = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i]
        if (r.isFinal) consolidado += r[0].transcript + ' '
        else parcial += r[0].transcript
      }
      aoTexto(consolidado, parcial)
    }
    // o reconhecimento às vezes para sozinho; religa enquanto estiver ativo
    rec.onend = () => {
      if (ativo) {
        try {
          rec.start()
        } catch {
          /* já iniciado */
        }
      }
    }
    rec.start()
  }

  return {
    parar: () => {
      ativo = false
      rec?.stop()
      stream.getTracks().forEach((t) => t.stop())
    },
  }
}
