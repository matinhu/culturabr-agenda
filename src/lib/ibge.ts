import type { Cidade, Estado } from "@/types";

const URL_ESTADOS =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";

const URL_MUNICIPIOS = (uf: string) =>
  `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`;

export const ESTADOS_FALLBACK: Estado[] = [
  { id: 12, sigla: "AC", nome: "Acre" },
  { id: 27, sigla: "AL", nome: "Alagoas" },
  { id: 13, sigla: "AM", nome: "Amazonas" },
  { id: 16, sigla: "AP", nome: "Amapá" },
  { id: 29, sigla: "BA", nome: "Bahia" },
  { id: 23, sigla: "CE", nome: "Ceará" },
  { id: 53, sigla: "DF", nome: "Distrito Federal" },
  { id: 32, sigla: "ES", nome: "Espírito Santo" },
  { id: 52, sigla: "GO", nome: "Goiás" },
  { id: 21, sigla: "MA", nome: "Maranhão" },
  { id: 31, sigla: "MG", nome: "Minas Gerais" },
  { id: 50, sigla: "MS", nome: "Mato Grosso do Sul" },
  { id: 51, sigla: "MT", nome: "Mato Grosso" },
  { id: 15, sigla: "PA", nome: "Pará" },
  { id: 25, sigla: "PB", nome: "Paraíba" },
  { id: 26, sigla: "PE", nome: "Pernambuco" },
  { id: 22, sigla: "PI", nome: "Piauí" },
  { id: 41, sigla: "PR", nome: "Paraná" },
  { id: 33, sigla: "RJ", nome: "Rio de Janeiro" },
  { id: 24, sigla: "RN", nome: "Rio Grande do Norte" },
  { id: 11, sigla: "RO", nome: "Rondônia" },
  { id: 14, sigla: "RR", nome: "Roraima" },
  { id: 43, sigla: "RS", nome: "Rio Grande do Sul" },
  { id: 42, sigla: "SC", nome: "Santa Catarina" },
  { id: 28, sigla: "SE", nome: "Sergipe" },
  { id: 35, sigla: "SP", nome: "São Paulo" },
  { id: 17, sigla: "TO", nome: "Tocantins" },
];

export const CIDADES_FALLBACK: Record<string, string[]> = {
  SP: ["São Paulo", "Campinas", "Santos", "Ribeirão Preto"],
  RJ: ["Rio de Janeiro", "Niterói", "Petrópolis", "Cabo Frio"],
  MG: ["Belo Horizonte", "Ouro Preto", "Uberlândia", "Juiz de Fora"],
  BA: ["Salvador", "Feira de Santana", "Ilhéus", "Lençóis"],
  PE: ["Recife", "Olinda", "Caruaru", "Petrolina"],
  CE: ["Fortaleza", "Juazeiro do Norte", "Sobral", "Crato"],
  PA: ["Belém", "Santarém", "Marabá", "Altamira"],
  AM: ["Manaus", "Parintins", "Itacoatiara", "Tefé"],
  RS: ["Porto Alegre", "Gramado", "Pelotas", "Santa Maria"],
  PR: ["Curitiba", "Londrina", "Maringá", "Foz do Iguaçu"],
  SC: ["Florianópolis", "Joinville", "Blumenau", "Chapecó"],
  GO: ["Goiânia", "Anápolis", "Caldas Novas", "Pirenópolis"],
  DF: ["Brasília"],
};

export async function buscarEstados(): Promise<Estado[]> {
  try {
    const resp = await fetch(URL_ESTADOS, { cache: "force-cache" });
    if (!resp.ok) throw new Error("IBGE indisponível");
    const dados = (await resp.json()) as Array<{
      id: number;
      sigla: string;
      nome: string;
    }>;
    return dados
      .map((d) => ({ id: d.id, sigla: d.sigla, nome: d.nome }))
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  } catch {
    return ESTADOS_FALLBACK;
  }
}

export async function buscarCidades(uf: string): Promise<Cidade[]> {
  if (!uf) return [];
  try {
    const resp = await fetch(URL_MUNICIPIOS(uf), { cache: "force-cache" });
    if (!resp.ok) throw new Error("IBGE indisponível");
    const dados = (await resp.json()) as Array<{ id: number; nome: string }>;
    return dados
      .map((d) => ({ id: d.id, nome: d.nome }))
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  } catch {
    const lista = CIDADES_FALLBACK[uf] ?? [];
    return lista.map((nome, idx) => ({ id: idx + 1, nome }));
  }
}
