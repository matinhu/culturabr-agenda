import Link from "next/link";
import { FiltrosAtividades } from "@/components/FiltrosAtividades";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-soft)] text-white p-8 shadow">
        <div className="max-w-3xl space-y-3">
          <span className="inline-block bg-[var(--accent)] text-[var(--foreground)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Ação extensionista cultural
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            CulturaBR Agenda
          </h1>
          <p className="text-base sm:text-lg opacity-95">
            Uma ferramenta para divulgar e organizar atividades culturais em
            cidades brasileiras. Encontre oficinas, feiras, rodas, mostras e
            apresentações próximas a você e manifeste seu interesse com poucos
            cliques.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/sobre" className="btn-secondary">
              Como funciona
            </Link>
            <Link
              href="/gestao"
              className="btn-ghost bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Área da instituição
            </Link>
          </div>
        </div>
      </section>

      <FiltrosAtividades />
    </div>
  );
}
