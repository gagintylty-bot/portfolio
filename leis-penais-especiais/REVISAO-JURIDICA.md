# ⚖️ Revisão Jurídica — Conteúdo de Treino

> **STATUS GERAL: RASCUNHO. NÃO PUBLICAR SEM REVISÃO.**
>
> Todos os casos de treino foram gerados como **rascunho educacional** por IA,
> com o campo `revisado: false`. São **leis penais reais** — o conteúdo precisa
> ser revisado por um(a) advogado(a) antes de ir ao ar, conforme cada caso
> concreto e a legislação/jurisprudência vigentes.

## Como revisar

1. O conteúdo está em `src/data/leis/<slug>.ts` — **um arquivo por lei**, 100%
   desacoplado do código. Você edita só os dados, sem tocar em componente.
2. Para cada caso (`Cenario`), confira: `enunciado`, `alternativas`, `corretaId`,
   `explicacao` e `baseLegal`. Há dois formatos: múltipla escolha (4 alternativas
   `a/b/c/d`) e verdadeiro/falso (`tipo: 'vf'`, alternativas `v/f`).
3. Quando um caso estiver revisado e correto, **mude `revisado: false` para
   `revisado: true`**.
4. Rode `npm run check:cenarios` para conferir contagem e integridade.

## Contagem por lei

| # | Lei | Nº | Casos | V/F | Status |
|---|-----|----|-------|-----|--------|
| 1 | Lei de Drogas | 11.343/2006 | 15 | 0 | 🟡 rascunho — revisar |
| 2 | Lei Maria da Penha | 11.340/2006 | 18 | 3 | 🟡 rascunho — revisar |
| 3 | Estatuto do Desarmamento | 10.826/2003 | 18 | 3 | 🟡 rascunho — revisar |
| 4 | Crimes Hediondos | 8.072/1990 | 18 | 3 | 🟡 rascunho — revisar |
| 5 | Lei de Tortura | 9.455/1997 | 18 | 3 | 🟡 rascunho — revisar |
| 6 | Lavagem de Capitais | 9.613/1998 | 18 | 3 | 🟡 rascunho — revisar |
| 7 | Organização Criminosa | 12.850/2013 | 18 | 3 | 🟡 rascunho — revisar |
| 8 | Crimes contra a Ordem Tributária | 8.137/1990 | 18 | 3 | 🟡 rascunho — revisar |
| 9 | Interceptação Telefônica | 9.296/1996 | 18 | 3 | 🟡 rascunho — revisar |
| 10 | ECA (crimes) | 8.069/1990 | 18 | 3 | 🟡 rascunho — revisar |
| 11 | Crimes de Trânsito (CTB) | 9.503/1997 | 18 | 3 | 🟡 rascunho — revisar |
| 12 | Crimes Ambientais | 9.605/1998 | 18 | 3 | 🟡 rascunho — revisar |
| 13 | Abuso de Autoridade | 13.869/2019 | 18 | 3 | 🟡 rascunho — revisar |
| 14 | Crimes Raciais | 7.716/1989 | 18 | 3 | 🟡 rascunho — revisar |
| 15 | Contravenções Penais | DL 3.688/1941 | 18 | 3 | 🟡 rascunho — revisar |
| 16 | Crimes contra o Sistema Financeiro | 7.492/1986 | 18 | 3 | 🟡 rascunho — revisar |
| 17 | Estatuto do Idoso (crimes) | 10.741/2003 | 18 | 3 | 🟡 rascunho — revisar |
| 18 | Juizados Especiais Criminais | 9.099/1995 | 18 | 3 | 🟡 rascunho — revisar |
| 19 | Lei de Terrorismo | 13.260/2016 | 18 | 3 | 🟡 rascunho — revisar |
| 20 | Crimes Licitatórios | 14.133/2021 | 18 | 3 | 🟡 rascunho — revisar |

**Total: 357 casos** (15 da Lei de Drogas + 19 leis × 18). **0 revisados.**

> Rode `npm run check:cenarios` a qualquer momento para a contagem atualizada.

## Checklist antes de ir ao ar

- [x] As 20 leis com ≥ 15 casos cada (`npm run check:cenarios` passa)
- [ ] Cada caso revisado por advogado(a) e marcado `revisado: true`
- [ ] Base legal de cada caso conferida com a legislação vigente
- [ ] Jurisprudência citada (STF/STJ) reconferida e atualizada
- [x] Aviso de conteúdo educacional visível no app (implementado)

## Observações sobre o conteúdo gerado

- O conteúdo é **plausível, mas não verificado**. Cada `baseLegal` indica o
  artigo/lei de referência — **confira artigo por artigo**.
- Citações de jurisprudência (Temas, súmulas, HCs) são ilustrativas e
  **precisam ser reconferidas** antes da publicação.
- Crimes Licitatórios usam os arts. 337-E a 337-P do Código Penal (incluídos
  pela Lei 14.133/2021) — confira a numeração.
