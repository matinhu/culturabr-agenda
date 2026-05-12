import Link from "next/link";
import { t } from "@/i18n/dictionaries";

export function Header() {
  return (
    <header className="bg-[var(--primary)] text-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="bg-[var(--accent)] text-[var(--foreground)] rounded-md w-10 h-10 flex items-center justify-center font-bold text-lg">
            BR
          </span>
          <div>
            <div className="text-lg font-bold leading-tight">
              {t("app.nome")}
            </div>
            <div className="text-xs opacity-90 leading-tight">
              {t("app.subtitulo")}
            </div>
          </div>
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm font-medium">
          <Link className="hover:underline" href="/">
            {t("nav.inicio")}
          </Link>
          <Link className="hover:underline" href="/gestao">
            {t("nav.gestao")}
          </Link>
          <Link className="hover:underline" href="/relatorio">
            {t("nav.relatorio")}
          </Link>
          <Link className="hover:underline" href="/sobre">
            {t("nav.sobre")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
