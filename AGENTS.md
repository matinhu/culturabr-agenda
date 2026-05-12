# AGENTS.md — CulturaBR Agenda

## Explicação simples do sistema

O **CulturaBR Agenda** é uma aplicação web simples, em português do Brasil, feita para ajudar uma instituição ou grupo cultural a **divulgar, organizar e gerenciar atividades culturais** em cidades brasileiras.

O sistema não é uma aula, palestra ou treinamento. Ele é uma solução prática: a instituição consegue cadastrar eventos, oficinas, apresentações, exposições, feiras, rodas culturais e outras atividades; o público consegue filtrar essas atividades por **estado, cidade, categoria e data**; e o aluno consegue demonstrar no relatório que produziu uma ferramenta digital para facilitar a atividade cultural da instituição parceira.

O foco principal é o Brasil. A aplicação usa **PT-BR como idioma padrão**, com acentos corretos, textos naturais e nomes como “estado”, “cidade”, “atividade cultural”, “instituição parceira”, “agenda”, “inscrição” e “gestão”. Há suporte simples a i18n por dicionários (`pt-BR` e `en-US`), com PT-BR sempre como padrão.

A entrega prioriza uma versão estável publicada no Vercel, com dados de demonstração e uma área de gestão simples. Banco de dados real é opcional; nesta versão o armazenamento é local no navegador para garantir que a aplicação rode em qualquer ambiente.

---

## Contexto extensionista

Projeto produzido para **Projeto de Extensão II — Análise e Desenvolvimento de Sistemas**, no programa de **Ação e Difusão Cultural**.

A entrega é uma **produção de sistema**, não uma palestra. O sistema facilita, difunde e ajuda no gerenciamento da atividade exercida por uma instituição cultural.

---

## Stack utilizada

- Next.js 16 (App Router) com TypeScript.
- Tailwind CSS 4.
- Persistência local com `localStorage`.
- Dados iniciais em `src/data/atividades.ts`.
- API pública do IBGE para estados e municípios, com fallback local em `src/lib/ibge.ts`.
- Deploy automatizado no Vercel.
- Repositório no GitHub.

---

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Página inicial pública com hero, filtros (estado/cidade/categoria/busca) e lista de atividades. |
| `/atividade/[slug]` | Detalhes da atividade com formulário de manifestação de interesse. |
| `/gestao` | Área administrativa demonstrativa (senha `cultura2026`) com CRUD, exportação CSV e indicadores. |
| `/relatorio` | Blocos prontos para o relatório final (ODS, local, durante a ação, mudança de estratégia, resultado, conclusão, depoimento, referências ABNT). |
| `/sobre` | Explicação simples de funcionamento. |

---

## Estrutura

```
src/
  app/
    page.tsx                        // home com hero + filtros
    atividade/[slug]/page.tsx       // detalhe + inscrição
    atividade/[slug]/DetalheAtividade.tsx
    gestao/page.tsx
    gestao/GestaoCliente.tsx
    relatorio/page.tsx
    sobre/page.tsx
    layout.tsx
    globals.css
  components/
    Header.tsx
    Footer.tsx
    FiltrosAtividades.tsx
    CardAtividade.tsx
    FormularioAtividade.tsx
    FormularioInscricao.tsx
    BlocoCopiavel.tsx
    SeletorLocalidade.tsx
  data/
    atividades.ts                   // 9 atividades culturais seed
  i18n/
    dictionaries.ts                 // pt-BR (padrão) + en-US
  lib/
    ibge.ts                         // estados/cidades com fallback
    storage.ts                      // localStorage helpers
    csv.ts                          // export CSV
    slug.ts                         // slugify + gerarId
    dates.ts                        // formatação PT-BR
  types/
    index.ts
```

---

## Comandos

```bash
pnpm install
pnpm dev           # desenvolvimento (http://localhost:3000)
pnpm lint
pnpm build
pnpm start         # produção local
```

Deploy:

```bash
vercel --prod --yes
```

---

## ODS aderentes

- **ODS 11.4** — Patrimônio cultural.
- **ODS 10.2** — Inclusão social.
- **ODS 17.17** — Parcerias com a sociedade civil.
- **ODS 9** — Tecnologia digital aplicada a uma ação social/cultural.

---

## Critérios de aceite (todos atendidos)

- `pnpm build` passa sem erro.
- Página inicial lista atividades e os filtros (estado, cidade, categoria, texto) funcionam.
- A página de detalhe abre via slug.
- Formulário de inscrição salva no localStorage e mostra mensagem de sucesso.
- `/gestao` permite criar, editar, excluir, exportar CSV e copiar resumo da ação.
- `/relatorio` traz textos prontos para o relatório final com botão de copiar.
- `/sobre` explica o funcionamento do sistema.
- Interface 100% PT-BR com acentos.
- Projeto publicado no GitHub e no Vercel.
- Nenhum `README.md` no repositório; documentação única em `AGENTS.md`.
