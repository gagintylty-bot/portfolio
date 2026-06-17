# 📝 Conteúdo para editar — Matheus

Tudo que você precisa trocar antes de anunciar está aqui. A **maior parte**
fica num único arquivo: **`src/config.ts`**. O resto (textos longos de cada
seção) está sinalizado abaixo com o caminho do arquivo.

> Depois de editar, rode `npm run build` para gerar a versão final.

---

## 1. ⚙️ Essencial — arquivo `src/config.ts`

Abra `src/config.ts` e troque estes valores (todos marcados com `[EDITAR]`):

| Campo | O que é | Exemplo atual (placeholder) |
| --- | --- | --- |
| `checkoutUrl` | **URL do checkout** (Cakto/Kiwify) | `https://EDITAR-checkout.cakto.com.br/...` |
| `whatsappUrl` | **Link do WhatsApp** (wa.me) | `https://wa.me/5500000000000?...` |
| `metaPixelId` | **ID do Meta Pixel** (deixe `''` para desativar) | `''` |
| `metodoNome` | Nome do método/mecanismo | `Método G.A.P.` |
| `precoAncora` | Valor âncora riscado | `R$ 1.997` |
| `precoReal` | Preço real de venda | `R$ 497` |
| `precoParcelado` | Parcelamento (ou `''`) | `12x de R$ 49,70` |
| `garantiaDias` | Dias de garantia | `7` |
| `lote.nome` | Nome do lote de lançamento | `Lote de Fundador` |
| `lote.descricao` | Frase de escassez | `Preço de fundador...` |
| `lote.vagasRestantes` | Nº de vagas (escassez real) | `30` |
| `empresaNome` | Nome/responsável (rodapé) | `Matheus Vidic` |
| `cnpj` | CNPJ (rodapé) | `00.000.000/0001-00` |
| `email` | E-mail de contato | `contato@...` |
| `ano` | Ano do rodapé | `2026` |

> ⚠️ Os links de CTA (`checkoutUrl`, `whatsappUrl`) e o `metaPixelId` são o
> mínimo para o site funcionar de verdade. **Não anuncie sem trocar esses três.**

---

## 2. 🔍 SEO e compartilhamento — `index.html`

- **Domínio canônico/OG:** troque `https://EDITAR-seu-dominio.com.br/` (3 ocorrências).
- **Imagem de compartilhamento (Open Graph):** crie um arquivo
  `public/og-image.jpg` (recomendado 1200×630px). Hoje a tag aponta para
  `/og-image.jpg`, que ainda **não existe** — crie-o ou o preview do
  WhatsApp/Facebook ficará sem imagem.
- (Opcional) Ajustar `<title>` e `meta description` se quiser outro texto.

---

## 3. ✍️ Textos das seções (revisar a copy de rascunho)

Toda a copy já está preenchida (nada vazio). Revise/ajuste se quiser:

| Seção | Arquivo | O que revisar |
| --- | --- | --- |
| As 20 leis | `src/data/leis.ts` | **Confirmar/ajustar a lista** das 20 leis e números. |
| Depoimentos | `src/data/depoimentos.ts` | **Trocar por depoimentos reais.** Hoje são ilustrativos. |
| Oferta (itens) | `src/components/sections/Oferta.tsx` | Lista de itens entregues e valores de cada um. |
| FAQ | `src/components/sections/FAQ.tsx` | Respostas finais das 6 objeções. |
| Solução/método | `src/components/sections/Solucao.tsx` | Os 3 passos do método (textos). |
| Para quem é / não é | `src/components/sections/ParaQuem.tsx` | Listas de qualificação. |

---

## 4. ⚖️ Páginas legais (rodapé)

O rodapé tem links para `/politica-de-privacidade` e `/termos-de-uso`.
Essas páginas **ainda não existem**. Opções:

- Criar os textos e hospedar (ex.: como páginas estáticas), **ou**
- Trocar os `href` no `src/components/sections/Footer.tsx` por links externos
  (ex.: um Google Docs/Notion público), **ou**
- Remover os links se ainda não tiver as políticas.

---

## 5. ✅ Checklist rápido antes de anunciar

- [ ] `checkoutUrl` apontando para o checkout real
- [ ] `whatsappUrl` com seu número
- [ ] `metaPixelId` preenchido (e testado no Gerenciador de Eventos da Meta)
- [ ] Preços (`precoAncora`, `precoReal`, `precoParcelado`) corretos
- [ ] Lista das 20 leis conferida
- [ ] Depoimentos reais no lugar dos placeholders
- [ ] `public/og-image.jpg` criado
- [ ] Domínio canônico/OG trocado em `index.html`
- [ ] Páginas de política/termos resolvidas
- [ ] `npm run build` sem erros
