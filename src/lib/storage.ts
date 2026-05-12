import type { Atividade, Inscricao } from "@/types";
import { atividadesIniciais } from "@/data/atividades";

const KEY_ATIVIDADES = "culturabr.atividades.v1";
const KEY_INSCRICOES = "culturabr.inscricoes.v1";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function carregarAtividades(): Atividade[] {
  if (!isBrowser()) return atividadesIniciais;
  try {
    const raw = window.localStorage.getItem(KEY_ATIVIDADES);
    if (!raw) {
      window.localStorage.setItem(
        KEY_ATIVIDADES,
        JSON.stringify(atividadesIniciais),
      );
      return atividadesIniciais;
    }
    const parsed = JSON.parse(raw) as Atividade[];
    if (!Array.isArray(parsed) || parsed.length === 0) return atividadesIniciais;
    return parsed;
  } catch {
    return atividadesIniciais;
  }
}

export function salvarAtividades(atividades: Atividade[]): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(KEY_ATIVIDADES, JSON.stringify(atividades));
}

export function carregarInscricoes(): Inscricao[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(KEY_INSCRICOES);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Inscricao[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function salvarInscricoes(inscricoes: Inscricao[]): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(KEY_INSCRICOES, JSON.stringify(inscricoes));
}

export function adicionarInscricao(inscricao: Inscricao): void {
  const atuais = carregarInscricoes();
  atuais.unshift(inscricao);
  salvarInscricoes(atuais);
}

export function resetarAtividades(): Atividade[] {
  if (!isBrowser()) return atividadesIniciais;
  window.localStorage.setItem(
    KEY_ATIVIDADES,
    JSON.stringify(atividadesIniciais),
  );
  return atividadesIniciais;
}
