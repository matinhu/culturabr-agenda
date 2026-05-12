export type StatusAtividade = "publicado" | "rascunho" | "encerrado";

export type CategoriaAtividade =
  | "Música"
  | "Teatro"
  | "Artesanato"
  | "Dança"
  | "Literatura"
  | "Cinema"
  | "Oficina"
  | "Exposição"
  | "Cultura popular";

export interface Atividade {
  id: string;
  slug: string;
  titulo: string;
  categoria: CategoriaAtividade;
  descricao: string;
  estadoUf: string;
  estadoNome: string;
  cidade: string;
  data: string;
  horario: string;
  local: string;
  instituicao: string;
  contato: string;
  publicoAlvo: string;
  capacidade: number;
  acessibilidade: string;
  status: StatusAtividade;
}

export interface Inscricao {
  id: string;
  atividadeId: string;
  atividadeTitulo: string;
  nome: string;
  email: string;
  telefone: string;
  observacao: string;
  criadoEm: string;
}

export interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

export interface Cidade {
  id: number;
  nome: string;
}

export type Idioma = "pt-BR" | "en-US";

export const CATEGORIAS: CategoriaAtividade[] = [
  "Música",
  "Teatro",
  "Artesanato",
  "Dança",
  "Literatura",
  "Cinema",
  "Oficina",
  "Exposição",
  "Cultura popular",
];
