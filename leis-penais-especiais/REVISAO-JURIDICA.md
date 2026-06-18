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
   `explicacao` e `baseLegal`.
3. Quando um caso estiver revisado e correto, **mude `revisado: false` para
   `revisado: true`**.
4. Rode `npm run check:cenarios` para conferir contagem e integridade.

## Contagem por lei

| # | Lei | Nº | Casos gerados | Mínimo | Status |
|---|-----|----|---------------|--------|--------|
| 1 | Lei de Drogas | 11.343/2006 | **15** | 15 | ✅ amostra gerada — revisar |
| 2 | Lei Maria da Penha | 11.340/2006 | 0 | 15 | ⏳ a gerar |
| 3 | Estatuto do Desarmamento | 10.826/2003 | 0 | 15 | ⏳ a gerar |
| 4 | Crimes Hediondos | 8.072/1990 | 0 | 15 | ⏳ a gerar |
| 5 | Lei de Tortura | 9.455/1997 | 0 | 15 | ⏳ a gerar |
| 6 | Lavagem de Capitais | 9.613/1998 | 0 | 15 | ⏳ a gerar |
| 7 | Organização Criminosa | 12.850/2013 | 0 | 15 | ⏳ a gerar |
| 8 | Crimes contra a Ordem Tributária | 8.137/1990 | 0 | 15 | ⏳ a gerar |
| 9 | Interceptação Telefônica | 9.296/1996 | 0 | 15 | ⏳ a gerar |
| 10 | ECA (crimes) | 8.069/1990 | 0 | 15 | ⏳ a gerar |
| 11 | Crimes de Trânsito (CTB) | 9.503/1997 | 0 | 15 | ⏳ a gerar |
| 12 | Crimes Ambientais | 9.605/1998 | 0 | 15 | ⏳ a gerar |
| 13 | Abuso de Autoridade | 13.869/2019 | 0 | 15 | ⏳ a gerar |
| 14 | Crimes Raciais | 7.716/1989 | 0 | 15 | ⏳ a gerar |
| 15 | Contravenções Penais | DL 3.688/1941 | 0 | 15 | ⏳ a gerar |
| 16 | Crimes contra o Sistema Financeiro | 7.492/1986 | 0 | 15 | ⏳ a gerar |
| 17 | Estatuto do Idoso (crimes) | 10.741/2003 | 0 | 15 | ⏳ a gerar |
| 18 | Juizados Especiais Criminais | 9.099/1995 | 0 | 15 | ⏳ a gerar |
| 19 | Lei de Terrorismo | 13.260/2016 | 0 | 15 | ⏳ a gerar |
| 20 | Crimes Licitatórios | 14.133/2021 | 0 | 15 | ⏳ a gerar |

**Total atual: 15 / 300+ casos.**

> Esta é a **entrega de amostra**: apenas a Lei de Drogas foi gerada (15 casos),
> para validação do padrão. As outras 19 serão geradas após o "ok" no formato.

## Checklist antes de ir ao ar

- [ ] As 20 leis com ≥ 15 casos cada (`npm run check:cenarios` passa)
- [ ] Cada caso revisado por advogado(a) e marcado `revisado: true`
- [ ] Base legal de cada caso conferida com a legislação vigente
- [ ] Jurisprudência citada (STF/STJ) reconferida e atualizada
- [ ] Aviso de conteúdo educacional visível no app (já implementado)
