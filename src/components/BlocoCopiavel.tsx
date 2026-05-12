"use client";

import { useState } from "react";

interface Props {
  titulo: string;
  texto: string;
}

export function BlocoCopiavel({ titulo, texto }: Props) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = texto;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2200);
  }

  return (
    <article className="card space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold">{titulo}</h3>
        <button type="button" className="btn-secondary" onClick={copiar}>
          {copiado ? "Copiado!" : "Copiar texto"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-sm font-sans bg-[var(--background)] border border-[var(--border)] rounded-md p-3">
        {texto}
      </pre>
    </article>
  );
}
