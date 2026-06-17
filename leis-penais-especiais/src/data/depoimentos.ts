/**
 * Prova social.
 * [EDITAR] Substituir por depoimentos reais quando houver.
 * Os textos abaixo são PLACEHOLDERS de rascunho.
 */

export interface Depoimento {
  nome: string
  cargo: string
  /** Iniciais usadas no avatar (sem foto, mantém o tom sóbrio) */
  iniciais: string
  texto: string
  /** Localização ou OAB para reforço de autoridade */
  selo: string
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Dr. Rafael A.',
    cargo: 'Advogado criminalista',
    iniciais: 'RA',
    selo: 'OAB/SP',
    texto:
      'Eu sabia o Código Penal de trás pra frente, mas travava na Lei de Drogas em audiência. Depois do método, entro sabendo exatamente onde estão as nulidades. Mudou minha segurança na sustentação.',
  },
  {
    nome: 'Dra. Camila S.',
    cargo: 'Sócia de escritório criminal',
    iniciais: 'CS',
    selo: 'OAB/MG',
    texto:
      'O material de consulta rápida virou meu segundo cérebro antes de cada petição. Parei de perder tempo caçando a lei certa no meio do prazo.',
  },
  {
    nome: 'Dr. Bruno L.',
    cargo: 'Recém-formado na área criminal',
    iniciais: 'BL',
    selo: 'OAB/RJ',
    texto:
      'Comecei a aceitar casos que antes eu desviava por insegurança. Organização criminosa e lavagem deixaram de ser um buraco na minha atuação.',
  },
  {
    nome: 'Dra. Helena M.',
    cargo: 'Advogada autônoma',
    iniciais: 'HM',
    selo: 'OAB/PR',
    texto:
      'A lógica por gatilhos de aplicação faz a diferença. Não é decoreba — é saber o que cai, o que o promotor usa e por onde defender.',
  },
]
