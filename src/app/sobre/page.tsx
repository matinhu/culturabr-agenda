import Link from "next/link";

export const metadata = {
  title: "Sobre o sistema — CulturaBR Agenda",
};

export default function PaginaSobre() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="section-title">Sobre o sistema</h1>

      <section className="card space-y-3">
        <h2 className="text-lg font-bold">O que é o CulturaBR Agenda</h2>
        <p>
          O <strong>CulturaBR Agenda</strong> é uma aplicação web simples, em
          português do Brasil, criada para apoiar instituições, coletivos e
          grupos culturais brasileiros na <strong>divulgação</strong>,{" "}
          <strong>organização</strong> e <strong>gestão</strong> de suas
          atividades culturais.
        </p>
        <p>
          A plataforma foi produzida como resultado de uma ação extensionista do
          programa <em>Ação e Difusão Cultural</em>, na disciplina Projeto de
          Extensão II do curso de Análise e Desenvolvimento de Sistemas.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-bold">Como funciona</h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          <li>
            A instituição cultural cadastra suas atividades pela área de{" "}
            <Link href="/gestao" className="text-[var(--primary)] underline">
              gestão
            </Link>{" "}
            (oficinas, feiras, mostras, rodas, apresentações etc.).
          </li>
          <li>
            O público consulta a{" "}
            <Link href="/" className="text-[var(--primary)] underline">
              agenda pública
            </Link>
            , filtrando atividades por estado, cidade, categoria ou texto livre.
          </li>
          <li>
            Em cada atividade, o público pode ver detalhes completos (local,
            horário, contato, acessibilidade) e manifestar interesse com um
            formulário simples.
          </li>
          <li>
            A instituição acompanha as inscrições, edita ou exclui atividades e
            exporta o catálogo em CSV para uso em relatórios ou comunicação.
          </li>
          <li>
            A página de{" "}
            <Link
              href="/relatorio"
              className="text-[var(--primary)] underline"
            >
              relatório
            </Link>{" "}
            reúne textos prontos em PT-BR para compor o relatório final da
            atividade extensionista.
          </li>
        </ol>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-bold">Tecnologia e dados</h2>
        <p className="text-sm">
          A aplicação foi desenvolvida em Next.js com TypeScript e Tailwind CSS.
          As cidades e estados são carregados em tempo real pela{" "}
          <a
            href="https://servicodados.ibge.gov.br/api/v1/localidades"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--primary)] underline"
          >
            API de Localidades do IBGE
          </a>
          , com fallback local caso o serviço esteja indisponível.
        </p>
        <p className="text-sm">
          Para garantir uma entrega rápida e demonstrável, os dados de
          atividades e inscrições são persistidos no <code>localStorage</code>{" "}
          do navegador. Isso significa que cada navegador mantém sua própria
          base, ideal para a demonstração do projeto extensionista. Em
          evoluções futuras, o sistema pode ser conectado a um banco PostgreSQL
          remoto sem alterar a interface.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-bold">Acessibilidade e idioma</h2>
        <p className="text-sm">
          A interface está totalmente em português do Brasil, com acentos
          corretos, labels em todos os campos, contraste adequado e layout
          responsivo para celular e desktop. O sistema também conta com um
          dicionário i18n preparado para receber outros idiomas, mantendo o
          PT-BR como padrão.
        </p>
      </section>
    </div>
  );
}
