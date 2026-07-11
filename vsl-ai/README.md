# 🎬 VSL.AI — Estúdio de vídeos de venda com IA

Protótipo de uma IA que transforma o seu briefing em um **vídeo de VSL dinâmico**, com narração, efeitos sonoros e elementos 3D — tudo rodando **100% no navegador**, sem chave de API.

## Como funciona (o fluxo que você descreveu)

1. **Briefing** — você explica o produto, o que vende e qual seu público. Dá pra **digitar ou falar**: aperte "Explicar por áudio" e a transcrição cai direto no campo (Chrome/Edge).
2. **Estilo e exemplos** — escolha o tom da VSL (🔥 Urgência, 💎 Premium, 🎓 Educativo, ⚡ Energético), o formato (16:9 pro YouTube ou 9:16 pra Reels/TikTok) e cole exemplos/referências que você curte — a IA aproveita no hook.
3. **Galeria de vozes** — escolha quem narra, ouça amostras e ajuste velocidade e tom.
4. **Vídeo pronto** — a IA monta o roteiro na estrutura clássica de VSL (Hook → Problema → Agitação → Solução → Prova → Oferta → CTA) e renderiza cada cena com:
   - **Tipografia cinética** (palavras entram uma a uma, com destaques em cor)
   - **Elementos 3D** girando (cubo, pirâmide, anel, icosaedro — projeção em perspectiva própria, sem three.js)
   - **Efeitos sonoros sintetizados** via WebAudio (whoosh, impacto, riser, caixa registradora, clique, brilho)
   - **Narração sincronizada** com a voz escolhida

## Exportação

- **Vídeo (.webm)** — grava o canvas em tempo real com os efeitos sonoros mixados
- **Roteiro (.txt)** — pronto pra gravação ou dublagem
- **Legendas (.srt)** — sincronizadas com a duração de cada cena

> ⚠️ Limitação conhecida: a narração da Web Speech API toca direto no dispositivo e o navegador não permite capturá-la — o `.webm` sai com motion + SFX. Pra exportar com a voz embutida, o próximo passo é plugar um TTS em nuvem (ElevenLabs, OpenAI TTS etc.) e mixar o áudio no `MediaStreamDestination` que já existe em `src/lib/sfx.ts`.

## Rodando

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção (dist/)
```

## Estrutura

| Arquivo | O que faz |
| --- | --- |
| `src/lib/roteiro.ts` | Motor de roteiro: briefing → 7 cenas de VSL, copy por estilo |
| `src/lib/renderer.ts` | Renderer canvas: fundo animado, grade em perspectiva, malhas 3D, tipografia cinética |
| `src/lib/sfx.ts` | Efeitos sonoros 100% sintetizados (WebAudio) |
| `src/lib/narrador.ts` | Galeria de vozes + narração (Web Speech API) |
| `src/lib/transcricao.ts` | Briefing por áudio com transcrição ao vivo |
| `src/lib/exportar.ts` | Gravação do canvas + áudio em `.webm` |
