# CulturaBR Agenda

**Divulgação e gestão de atividades culturais em cidades brasileiras.**

Aplicação web simples, em português do Brasil, criada para apoiar instituições, coletivos e grupos culturais brasileiros na divulgação e organização de suas atividades — oficinas, feiras, mostras, rodas, apresentações e exposições.

- 🟢 Sistema publicado: <https://culturabr-agenda.vercel.app>
- 💻 Repositório: <https://github.com/matinhu/culturabr-agenda>

---

## Objetivo

Produzir uma solução tecnológica prática que **facilite a divulgação, a organização e o gerenciamento** de atividades culturais em cidades brasileiras, ampliando o acesso da comunidade à programação cultural local.

## Problema atendido

Instituições e grupos culturais frequentemente têm dificuldade em divulgar sua programação de forma organizada e em registrar o interesse da comunidade. As informações ficam espalhadas em redes sociais, panfletos e mensagens, dificultando o planejamento da instituição e o acesso do público.

## Solução desenvolvida

Um sistema web onde:

- A instituição cultural cadastra suas atividades em uma área de gestão.
- O público consulta uma **agenda pública** com filtros por **estado**, **cidade**, **categoria** e busca textual.
- Cada atividade tem página de detalhes (local, horário, contato, acessibilidade, instituição responsável).
- O público manifesta interesse por meio de um formulário simples.
- A instituição acompanha as inscrições e exporta o catálogo em CSV.

## Público beneficiado

- Instituições, coletivos e grupos culturais brasileiros.
- Comunidade interessada em programação cultural local.
- Estudantes, famílias, turistas e artistas.

## Como o sistema funciona

| Página | O que faz |
| --- | --- |
| `/` | Agenda pública com filtros por estado, cidade, categoria e busca textual. |
| `/atividade/[slug]` | Detalhes da atividade + formulário de manifestação de interesse. |
| `/gestao` | Área administrativa (senha de demonstração: `cultura2026`) com cadastro, edição, exclusão, exportação CSV e indicadores. |
| `/relatorio` | Blocos de texto prontos para o relatório final extensionista, com botão de copiar. |
| `/sobre` | Explicação simples do funcionamento. |

Os estados e cidades são carregados da [API de Localidades do IBGE](https://servicodados.ibge.gov.br/api/v1/localidades), com fallback local caso o serviço esteja indisponível.

## Tecnologias utilizadas

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4**
- **localStorage** para persistência demonstrativa no navegador
- **API IBGE** para estados e municípios
- **Vercel** para hospedagem
- **GitHub** para versionamento

## Como rodar localmente

Requisitos: Node.js 20+ e pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm build
pnpm start        # produção local
```

## Como publicar

A publicação acontece em duas etapas:

```bash
gh repo create culturabr-agenda --public --source=. --push
vercel --prod --yes
```

## Alinhamento com o Projeto de Extensão II

Esta entrega aplica conhecimentos de Análise e Desenvolvimento de Sistemas — engenharia de requisitos, interação humano-computador, desenvolvimento front-end e gerenciamento de projetos — para produzir uma **solução tecnológica concreta** dentro do **Programa de Ação e Difusão Cultural**.

O projeto não se propõe como uma atividade de transferência de conhecimento (palestra, aula ou treinamento). Trata-se de um **produto digital funcional**, publicado e acessível, que pode ser efetivamente utilizado por uma instituição cultural brasileira para divulgar e organizar suas ações.

## ODS aderentes

- **ODS 11 — Cidades e Comunidades Sustentáveis** (meta 11.4): proteção e salvaguarda do patrimônio cultural.
- **ODS 10 — Redução das Desigualdades** (meta 10.2): inclusão social e ampliação do acesso à cultura.
- **ODS 17 — Parcerias e Meios de Implementação** (meta 17.17): incentivo a parcerias entre universidade e sociedade civil.
- **ODS 9 — Indústria, Inovação e Infraestrutura**: uso de tecnologia digital aplicada a uma ação social/cultural.

---

Projeto desenvolvido para **Projeto de Extensão II — Programa de Ação e Difusão Cultural** | CST em Análise e Desenvolvimento de Sistemas.
