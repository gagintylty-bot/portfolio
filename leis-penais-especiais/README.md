# Domínio das Leis Penais Especiais — Landing Page

Landing page de venda direta (single-page) para um método de estudo das **20
leis penais especiais** voltado a **advogados criminalistas**. Foco total em
**conversão** (direct response): a estrela é a copy e a clareza da oferta.

> **Antes de publicar**, edite os placeholders listados em
> [`CONTEUDO-PARA-EDITAR.md`](./CONTEUDO-PARA-EDITAR.md) — principalmente o
> `src/config.ts` (links de checkout/WhatsApp, Meta Pixel, preços).

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme` em `src/index.css`)
- **Framer Motion** (reveal on scroll + micro-interações nos CTAs)
- **lucide-react** (ícones)
- Fontes: **Oswald** (títulos) + **DM Sans** (corpo), via Google Fonts `display=swap`
- 100% estático, zero backend — pronto para a **Vercel**

## Rodando localmente

```bash
npm install      # instala dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build de produção
```

## Estrutura

```
src/
├─ config.ts                  # ⭐ TODOS os valores editáveis (links, preços, pixel)
├─ index.css                  # design tokens (cores, fontes) + base
├─ App.tsx                    # monta as seções na ordem
├─ main.tsx
├─ data/
│  ├─ leis.ts                 # as 20 leis penais especiais
│  └─ depoimentos.ts          # prova social (placeholder)
├─ lib/
│  └─ track.ts                # trackCTA() central + eventos do Meta Pixel
└─ components/
   ├─ MetaPixel.tsx           # injeta o pixel se config.metaPixelId existir
   ├─ ui/                     # Button, Badge, Section, Container, etc.
   └─ sections/               # 1 arquivo por seção da página
```

## Conversão / Tracking

- **`<MetaPixel />`** injeta o Meta Pixel **somente** se `config.metaPixelId`
  estiver preenchido (seguro em dev). Dispara `PageView` no load.
- Todos os CTAs chamam **`trackCTA(origem, kind)`**:
  - clique no **WhatsApp** → evento `Lead`
  - clique em **comprar/checkout** → evento `InitiateCheckout`
  - O parâmetro `origem` (ex.: `hero`, `oferta`, `cta-final`, `sticky-mobile`)
    permite saber **qual seção mais converte**.
- Em desenvolvimento, cada clique é logado no console para conferência.

## Deploy na Vercel

**Opção A — Dashboard (mais simples):**

1. Suba este projeto para um repositório Git (GitHub/GitLab).
2. Em [vercel.com](https://vercel.com) → **Add New… → Project** → importe o repo.
3. Se o projeto **não** estiver na raiz do repositório, defina **Root
   Directory** como `leis-penais-especiais`.
4. A Vercel detecta o Vite automaticamente:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy.** Depois, conecte seu domínio em **Settings → Domains**.

**Opção B — Vercel CLI:**

```bash
npm i -g vercel
vercel            # primeiro deploy (preview)
vercel --prod     # produção
```

> `vercel.json` já define framework, build e cache dos assets.

## Acessibilidade & Performance

- Mobile-first; testado em 375 / 768 / 1440px.
- Contraste adequado no tema escuro; `prefers-reduced-motion` respeitado.
- Sem imagens pesadas (ícones SVG + tipografia), CSS ~6 kB gzip.
- Lighthouse alvo: Performance e Accessibility > 90.

## Aviso

Conteúdo educacional — **não constitui consultoria jurídica**. Site não
afiliado ao Facebook/Meta.
