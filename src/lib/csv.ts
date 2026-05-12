import type { Atividade } from "@/types";

function escaparCampo(valor: string | number): string {
  const texto = String(valor ?? "");
  if (/[",;\n]/.test(texto)) {
    return `"${texto.replace(/"/g, '""')}"`;
  }
  return texto;
}

export function atividadesParaCSV(atividades: Atividade[]): string {
  const cabecalho = [
    "ID",
    "Título",
    "Categoria",
    "Estado",
    "Cidade",
    "Data",
    "Horário",
    "Local",
    "Instituição",
    "Contato",
    "Público-alvo",
    "Capacidade",
    "Acessibilidade",
    "Status",
    "Descrição",
  ];

  const linhas = atividades.map((a) =>
    [
      a.id,
      a.titulo,
      a.categoria,
      a.estadoUf,
      a.cidade,
      a.data,
      a.horario,
      a.local,
      a.instituicao,
      a.contato,
      a.publicoAlvo,
      a.capacidade,
      a.acessibilidade,
      a.status,
      a.descricao,
    ]
      .map(escaparCampo)
      .join(";"),
  );

  return [cabecalho.join(";"), ...linhas].join("\n");
}

export function baixarCSV(nomeArquivo: string, conteudo: string): void {
  if (typeof window === "undefined") return;
  const blob = new Blob(["﻿" + conteudo], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = nomeArquivo;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
