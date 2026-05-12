"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Atividade } from "@/types";
import { atividadesIniciais } from "@/data/atividades";
import { carregarAtividades } from "@/lib/storage";
import { formatarData } from "@/lib/dates";
import { FormularioInscricao } from "@/components/FormularioInscricao";

export function DetalheAtividade({ slug }: { slug: string }) {
  const [atividade, setAtividade] = useState<Atividade | null>(() => {
    return atividadesIniciais.find((a) => a.slug === slug) ?? null;
  });
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const lista = carregarAtividades();
    const encontrada = lista.find((a) => a.slug === slug);
    if (encontrada) setAtividade(encontrada);
    setCarregado(true);
  }, [slug]);

  if (!atividade) {
    return (
      <div className="card text-center space-y-4">
        <h1 className="text-xl font-bold">Atividade não encontrada</h1>
        <p className="text-sm text-[var(--muted)]">
          {carregado
            ? "A atividade procurada não está disponível ou foi removida."
            : "Carregando informações..."}
        </p>
        <Link href="/" className="btn-primary inline-block">
          Voltar para a agenda
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link href="/" className="text-[var(--primary)] hover:underline text-sm">
        ← Voltar para a agenda
      </Link>

      <article className="card space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag">{atividade.categoria}</span>
          <span className="tag tag-verde">
            {atividade.cidade}/{atividade.estadoUf}
          </span>
          {atividade.status !== "publicado" && (
            <span className="tag tag-cinza">
              {atividade.status === "encerrado" ? "Encerrado" : "Rascunho"}
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold leading-tight">{atividade.titulo}</h1>
        <p className="text-base text-[var(--foreground)] whitespace-pre-line">
          {atividade.descricao}
        </p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Info termo="Data e horário">
            {formatarData(atividade.data)} • {atividade.horario}
          </Info>
          <Info termo="Local">{atividade.local}</Info>
          <Info termo="Cidade / Estado">
            {atividade.cidade} — {atividade.estadoNome || atividade.estadoUf} (
            {atividade.estadoUf})
          </Info>
          <Info termo="Instituição responsável">{atividade.instituicao}</Info>
          <Info termo="Contato">{atividade.contato}</Info>
          <Info termo="Público-alvo">{atividade.publicoAlvo}</Info>
          <Info termo="Acessibilidade">{atividade.acessibilidade}</Info>
          <Info termo="Capacidade">
            {atividade.capacidade > 0
              ? `${atividade.capacidade} participantes`
              : "Aberto"}
          </Info>
        </dl>
      </article>

      <FormularioInscricao atividade={atividade} />
    </div>
  );
}

function Info({
  termo,
  children,
}: {
  termo: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
        {termo}
      </dt>
      <dd className="text-sm mt-1">{children}</dd>
    </div>
  );
}
