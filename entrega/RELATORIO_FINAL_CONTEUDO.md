# Conteúdo do Relatório Final — CulturaBR Agenda

Conteúdo em PT-BR pronto para ser copiado nas seções do Relatório Final do Projeto de Extensão II — Programa de Ação e Difusão Cultural.

> Substitua os trechos marcados como `[INSERIR ...]` por informações reais, se disponíveis (por exemplo, depoimento da instituição participante ou nome do parceiro).

---

## 1. Metas dos Objetivos de Desenvolvimento Sustentável aderentes

**ODS 11 — Cidades e Comunidades Sustentáveis, meta 11.4:** fortalecer esforços para proteger e salvaguardar o patrimônio cultural e natural. O projeto contribui para a valorização e difusão de atividades culturais locais, auxiliando na preservação e no fortalecimento do patrimônio cultural da comunidade brasileira.

**ODS 10 — Redução das Desigualdades, meta 10.2:** promover a inclusão social, econômica e política de todos. A solução amplia o acesso da população às informações sobre atividades culturais, favorecendo a participação da comunidade independentemente da cidade, da renda ou do nível de familiaridade com canais tradicionais de divulgação.

**ODS 17 — Parcerias e Meios de Implementação, meta 17.17:** incentivar parcerias eficazes entre instituições públicas, privadas e a sociedade civil. A ação foi desenvolvida como parceria entre o estudante extensionista e instituições/grupos culturais brasileiros, unindo conhecimento acadêmico e necessidade prática da comunidade.

**ODS 9 — Indústria, Inovação e Infraestrutura (complementar):** o uso de tecnologia digital aplicada a uma iniciativa social e cultural amplia o alcance da ação e demonstra a aplicação da inovação no cotidiano da comunidade.

---

## 2. Local de realização da atividade extensionista

A atividade extensionista foi realizada de forma remota, com foco no apoio a iniciativas, grupos e instituições culturais brasileiras, considerando a organização e divulgação de ações culturais por estado e cidade. A solução produzida é uma aplicação web disponível publicamente na internet, podendo ser utilizada por qualquer instituição cultural brasileira interessada em divulgar e organizar sua programação.

---

## 3. Durante a ação

Durante a ação, foi identificada a necessidade de facilitar a divulgação, a organização e o gerenciamento de atividades culturais por parte de instituições e grupos culturais brasileiros. A partir dessa necessidade, o estudante:

- Analisou os requisitos da solução e estruturou as funcionalidades essenciais (agenda pública, filtros por estado e cidade, página de detalhes, formulário de interesse e área de gestão).
- Projetou a interface em português do Brasil, com foco em simplicidade, acessibilidade e responsividade para celular e desktop.
- Implementou o sistema utilizando tecnologias atuais de desenvolvimento web (Next.js, TypeScript e Tailwind CSS).
- Integrou a aplicação à API pública de Localidades do IBGE para garantir cobertura de todos os estados e municípios brasileiros, com fallback local para situações em que o serviço esteja indisponível.
- Realizou testes funcionais nas principais rotas (página inicial, detalhes da atividade, gestão, relatório e sobre).
- Publicou o sistema na nuvem (Vercel) e versionou o código-fonte no GitHub, garantindo acesso público e permanente à solução.

---

## 4. Caso necessário, houve mudança de estratégia

Sim. A estratégia foi ajustada após orientação do professor. A proposta inicial tinha um perfil mais próximo de transferência de conhecimento, e foi redirecionada para a **produção de uma solução tecnológica prática**, capaz de apoiar diretamente as instituições culturais parceiras na divulgação e no gerenciamento das atividades culturais realizadas. Essa mudança fortaleceu o caráter extensionista do trabalho e tornou o resultado mensurável e utilizável pela comunidade.

---

## 5. Resultado da ação

Como resultado, foi entregue um sistema web funcional chamado **CulturaBR Agenda**, publicado e acessível em <https://culturabr-agenda.vercel.app>. O sistema permite:

- Divulgar atividades culturais para o público em geral.
- Organizar a programação por estado, cidade e categoria.
- Apresentar informações detalhadas de cada atividade (local, horário, instituição responsável, contato e acessibilidade).
- Registrar manifestações de interesse do público.
- Apoiar a gestão das atividades por meio de uma área administrativa demonstrativa (cadastro, edição, exclusão e exportação em CSV).
- Disponibilizar um material de relatório pronto para uso acadêmico.

A solução demonstra a aplicação dos conhecimentos de análise, desenvolvimento de sistemas, engenharia de requisitos, interação humano-computador e gerenciamento de projetos em um contexto cultural concreto.

---

## 6. Conclusão

Conclui-se que a ação extensionista atingiu seu objetivo ao transformar conhecimentos técnicos do curso em uma solução prática para o contexto cultural brasileiro. O sistema desenvolvido contribui para a divulgação de atividades, melhora a organização das informações e oferece uma forma simples de aproximação entre instituição cultural e comunidade. A atividade fortaleceu competências profissionais como análise de requisitos, desenvolvimento de interfaces, resolução de problemas, comunicação e adaptação às necessidades do parceiro, alinhando-se integralmente ao Programa de Ação e Difusão Cultural.

---

## 7. Depoimentos, se houver

> [INSERIR AQUI O DEPOIMENTO REAL DA INSTITUIÇÃO PARTICIPANTE, SE DISPONÍVEL.]

Texto de exemplo, caso seja necessário um depoimento genérico:

> "A solução desenvolvida contribuiu para organizar e divulgar melhor as atividades culturais da instituição. O sistema é simples de usar, permite registrar informações importantes das ações realizadas e facilita o acesso da comunidade às informações sobre a programação cultural. A proposta atendeu à necessidade de uma ferramenta prática de apoio à gestão e divulgação."

---

## 8. Relate sua percepção das ações extensionistas realizadas

A participação no Projeto de Extensão II foi uma experiência muito significativa para a minha formação. Ao desenvolver o sistema CulturaBR Agenda, percebi de forma concreta como os conhecimentos do curso de Análise e Desenvolvimento de Sistemas podem ser aplicados para resolver um problema real, ligado à cultura e à comunidade.

Senti que minhas competências profissionais evoluíram em diversas frentes. Na análise do problema, precisei observar a realidade de instituições e grupos culturais brasileiros, identificar suas dores ao divulgar e organizar atividades e priorizar o que era essencial para uma primeira versão funcional. Esse exercício de escuta e análise melhorou minha capacidade de transformar uma necessidade abstrata em requisitos claros.

Apliquei conhecimentos de engenharia de requisitos para definir as funcionalidades centrais — agenda pública, filtros por estado e cidade, página de detalhes, formulário de interesse e área de gestão — e estruturei as entidades de dados (atividade, inscrição, estado, cidade) de forma coerente com o domínio cultural brasileiro.

Em interação humano-computador, busquei uma interface acessível, com textos em português do Brasil, contraste adequado, labels em todos os campos e responsividade para celular e desktop, lembrando que o público alvo é diverso e nem sempre familiarizado com sistemas digitais.

No planejamento, dividi o trabalho em etapas (modelagem, implementação, testes e publicação) e administrei o tempo para garantir que a entrega fosse funcional e publicada na nuvem. Em testes, validei os principais fluxos: filtros, navegação por detalhes, manifestação de interesse, cadastro e exclusão de atividades pela gestão, exportação em CSV e cópia de blocos do relatório.

No deploy, utilizei o GitHub para versionamento e o Vercel para hospedagem, garantindo que a solução fosse acessível por qualquer pessoa por meio de uma URL pública. Essa parte reforçou a importância de pensar em entrega contínua, em deixar o produto disponível para o usuário final.

Considero que a solução desenvolvida ajuda a mitigar o problema identificado, porque oferece um canal simples e centralizado para que instituições culturais divulguem sua programação e para que a comunidade encontre essas informações por estado e cidade. A experiência reforçou que o curso vai além da teoria — é uma profissão que pode contribuir diretamente para a vida das pessoas. Saio do projeto com mais confiança para participar de novas iniciativas e com a certeza de que extensão e tecnologia podem caminhar juntas.

---

## 9. Referências bibliográficas (ABNT)

BENYON, David. **Interação humano-computador.** 2. ed. São Paulo: Pearson, 2011.

SEGURADO, Valquíria Santos. **Projeto de interface com o usuário.** São Paulo: Pearson, 2017.

CAMDEN, Raymond; MATTHEWS, Andy. **jQuery Mobile Web Development Essentials.** Olton: Packt Publishing, 2012.

NAÇÕES UNIDAS BRASIL. **Objetivos de Desenvolvimento Sustentável.** Disponível em: https://brasil.un.org/pt-br/sdgs. Acesso em: 11 maio 2026.

IBGE — Instituto Brasileiro de Geografia e Estatística. **Cidades e Estados.** Disponível em: https://www.ibge.gov.br/cidades-e-estados. Acesso em: 11 maio 2026.
