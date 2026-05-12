import Link from "next/link";
import type { Atividade } from "@/types";
import { formatarData } from "@/lib/dates";

export function CardAtividade({ atividade }: { atividade: Atividade }) {
  return (
    <article className="card flex flex-col gap-3 h-full">
      <div className="flex items-start justify-between gap-2">
        <span className="tag">{atividade.categoria}</span>
        <span
          className={
            atividade.status === "publicado"
              ? "tag tag-verde"
              : atividade.status === "encerrado"
                ? "tag tag-cinza"
                : "tag"
          }
        >
          {atividade.status === "publicado"
            ? "Publicado"
            : atividade.status === "encerrado"
              ? "Encerrado"
              : "Rascunho"}
        </span>
      </div>
      <h3 className="text-lg font-bold leading-snug">{atividade.titulo}</h3>
      <p className="text-sm text-[var(--muted)] line-clamp-3">
        {atividade.descricao}
      </p>
      <dl className="text-sm space-y-1">
        <div className="flex gap-2">
          <dt className="font-semibold w-20">Local:</dt>
          <dd>
            {atividade.cidade}/{atividade.estadoUf} — {atividade.local}
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold w-20">Data:</dt>
          <dd>
            {formatarData(atividade.data)} • {atividade.horario}
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold w-20">Instituição:</dt>
          <dd className="truncate">{atividade.instituicao}</dd>
        </div>
      </dl>
      <div className="mt-auto pt-2">
        <Link href={`/atividade/${atividade.slug}`} className="btn-primary">
          Ver detalhes →
        </Link>
      </div>
    </article>
  );
}
