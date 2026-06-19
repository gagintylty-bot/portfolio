/**
 * ===================================================================
 *  CONFIGURAÇÃO CENTRAL — TUDO QUE O MATHEUS PRECISA EDITAR
 * ===================================================================
 *  Este arquivo concentra os placeholders [EDITAR] do projeto.
 *  Troque os valores abaixo e o site inteiro se atualiza.
 *  Resumo completo também está em /CONTEUDO-PARA-EDITAR.md
 * ===================================================================
 */

export const config = {
  // --- LINKS DE CONVERSÃO -------------------------------------------
  /** [EDITAR] URL do checkout (Cakto / Kiwify) */
  checkoutUrl: 'https://EDITAR-checkout.cakto.com.br/seu-produto',

  /** [EDITAR] Link do WhatsApp (formato wa.me) */
  whatsappUrl:
    'https://wa.me/5500000000000?text=Quero%20saber%20mais%20sobre%20o%20m%C3%A9todo%20das%20leis%20penais%20especiais',

  // --- TRACKING -----------------------------------------------------
  /** [EDITAR] ID do Meta Pixel. Deixe vazio ('') para desativar em dev. */
  metaPixelId: '', // ex.: '1234567890123456'

  // --- OFERTA / PREÇO ----------------------------------------------
  /** [EDITAR] Nome do método/mecanismo */
  metodoNome: 'Método G.A.P.', // Gatilhos de Aplicação Prática

  /** [EDITAR] Valor âncora (riscado) */
  precoAncora: 'R$ 697',

  /** [EDITAR] Preço real de venda */
  precoReal: 'R$ 197',

  /** [EDITAR] Parcelamento (deixe '' para ocultar) */
  precoParcelado: '12x de R$ 19,90',

  /** [EDITAR] Prazo da garantia incondicional */
  garantiaDias: 7,

  /** [EDITAR] Vagas/lote de lançamento (escassez real — não mentir) */
  lote: {
    nome: 'Lote de Fundador',
    descricao: 'Preço de fundador. Sobe quando o lote fechar.',
    vagasRestantes: 30,
  },

  // --- RODAPÉ / EMPRESA --------------------------------------------
  /** [EDITAR] Nome comercial / responsável */
  empresaNome: 'Matheus Vidic',
  /** [EDITAR] CNPJ */
  cnpj: '00.000.000/0001-00',
  /** [EDITAR] E-mail de contato */
  email: 'contato@EDITAR-seudominio.com.br',
  /** [EDITAR] Ano (rodapé) */
  ano: 2026,
} as const

export type SiteConfig = typeof config
