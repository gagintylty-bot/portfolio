/**
 * Verifica a integridade do conteúdo de treino:
 *  - cada lei tem no mínimo MIN_CASOS cenários;
 *  - todo cenário tem corretaId válido, explicacao, baseLegal e revisado === false.
 *
 * Sai com código !== 0 se algo falhar (serve como "teste" de aceite).
 * Uso: npm run check:cenarios
 */
import { build } from 'esbuild'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const MIN_CASOS = 15
const aqui = dirname(fileURLToPath(import.meta.url))
const entry = resolve(aqui, '../src/data/leis/index.ts')

// Bundla os dados TS (resolvendo imports) e carrega em memória.
const out = await build({
  entryPoints: [entry],
  bundle: true,
  format: 'esm',
  write: false,
  platform: 'node',
  logLevel: 'silent',
})
const code = out.outputFiles[0].text
const mod = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'))
/** @type {import('../src/data/types').Lei[]} */
const leis = mod.leis

// Sincronia com os metadados leves usados pela landing.
const metaOut = await build({
  entryPoints: [resolve(aqui, '../src/data/leis/meta.ts')],
  bundle: true,
  format: 'esm',
  write: false,
  platform: 'node',
  logLevel: 'silent',
})
const meta = (
  await import(
    'data:text/javascript;base64,' +
      Buffer.from(metaOut.outputFiles[0].text).toString('base64')
  )
).leisMeta

let erros = 0

if (meta.length !== leis.length) {
  console.error(`  ✗ meta.ts tem ${meta.length} leis; dados ricos têm ${leis.length}`)
  erros++
}
for (let i = 0; i < leis.length; i++) {
  const l = leis[i]
  const m = meta[i]
  if (!m || m.slug !== l.slug || m.nome !== l.nome || m.numero !== l.numero) {
    console.error(`  ✗ meta.ts dessincronizado em "${l.nome}" (slug/nome/numero)`)
    erros++
  }
}
let prontas = 0
let totalCasos = 0

console.log('Lei                                        casos  status')
console.log('-------------------------------------------------------')
for (const lei of leis) {
  const n = lei.cenarios.length
  totalCasos += n

  // Integridade de cada cenário
  for (const c of lei.cenarios) {
    const ok =
      c.corretaId &&
      c.alternativas.some((a) => a.id === c.corretaId) &&
      c.explicacao &&
      c.baseLegal
    if (!ok) {
      console.error(`  ✗ ${lei.slug}/${c.id}: cenário sem corretaId válido/explicacao/baseLegal`)
      erros++
    }
    if (c.revisado !== false) {
      console.error(`  ✗ ${lei.slug}/${c.id}: revisado deve ser false na geração`)
      erros++
    }
  }

  const pronta = n >= MIN_CASOS
  if (pronta) prontas++
  else erros++

  const status = pronta ? 'OK' : n === 0 ? 'pendente (0)' : `INSUFICIENTE (<${MIN_CASOS})`
  console.log(`${lei.nome.padEnd(42)} ${String(n).padStart(3)}    ${status}`)
}

console.log('-------------------------------------------------------')
console.log(`Leis prontas: ${prontas}/${leis.length} · total de casos: ${totalCasos}`)

if (erros > 0) {
  console.error(`\n❌ ${erros} problema(s). ${leis.length - prontas} lei(s) ainda sem ${MIN_CASOS}+ casos revisáveis.`)
  process.exit(1)
}
console.log('\n✅ Todas as leis têm 15+ casos íntegros.')
