import { t } from "@/i18n/dictionaries";

export function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="font-bold">{t("app.nome")}</div>
          <div className="text-xs opacity-90 max-w-md">
            {t("footer.descricao")}
          </div>
        </div>
        <div className="text-xs opacity-90">
          Projeto de Extensão II — Ação e Difusão Cultural
        </div>
      </div>
    </footer>
  );
}
