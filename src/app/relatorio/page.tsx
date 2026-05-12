import { BlocoCopiavel } from "@/components/BlocoCopiavel";

export const metadata = {
  title: "Relatório final — CulturaBR Agenda",
};

const METAS_ODS = `ODS 11 — Cidades e Comunidades Sustentáveis, meta 11.4: o projeto contribui para a valorização e difusão de atividades culturais locais, auxiliando na preservação e no fortalecimento do patrimônio cultural da comunidade.

ODS 10 — Redução das Desigualdades, meta 10.2: o projeto amplia o acesso da população às informações sobre atividades culturais, favorecendo a inclusão social e a participação da comunidade.

ODS 17 — Parcerias e Meios de Implementação, meta 17.17: a ação foi desenvolvida em parceria com uma instituição/grupo cultural, unindo conhecimento acadêmico e necessidade prática da comunidade.

ODS 9 — Indústria, Inovação e Infraestrutura: o uso de tecnologia digital para apoiar uma atividade social e cultural, ampliando o alcance da iniciativa.`;

const LOCAL_REALIZACAO = `A atividade extensionista foi realizada em ambiente digital, por meio do desenvolvimento de uma aplicação web voltada à divulgação e gestão de atividades culturais em cidades brasileiras. A solução pode ser utilizada por instituições, grupos culturais, coletivos artísticos, feiras de artesanato, oficinas culturais e demais iniciativas ligadas à cultura.`;

const DURANTE_ACAO = `Durante a ação, foi identificada a necessidade de facilitar a divulgação, organização e gerenciamento de atividades culturais. A partir dessa necessidade, foi desenvolvido o sistema CulturaBR Agenda, permitindo o cadastro de atividades, consulta por estado e cidade, visualização de detalhes e registro de interesse dos participantes. A solução foi pensada para ser simples, acessível e adequada à realidade de instituições culturais que precisam organizar informações de forma digital.`;

const MUDANCA_ESTRATEGIA = `Houve ajuste de estratégia para que o projeto não ficasse limitado à transferência de conhecimento. A proposta foi direcionada para a produção de uma ferramenta prática, capaz de apoiar diretamente a instituição parceira na divulgação e no gerenciamento das atividades culturais realizadas.`;

const RESULTADO_ACAO = `Como resultado, foi produzido um protótipo funcional de aplicação web chamado CulturaBR Agenda. O sistema permite divulgar atividades culturais, organizar informações por estado e cidade, registrar interesse de participantes e apoiar a gestão das ações culturais. A ferramenta demonstra a aplicação dos conhecimentos de análise, desenvolvimento de sistemas, engenharia de requisitos, interação humano-computador e gerenciamento de projetos.`;

const CONCLUSAO = `Conclui-se que a ação extensionista atingiu seu objetivo ao transformar conhecimentos técnicos do curso em uma solução prática para o contexto cultural. O sistema desenvolvido contribui para a divulgação de atividades, melhora a organização das informações e oferece uma forma simples de aproximação entre instituição cultural e comunidade. A atividade também fortaleceu competências profissionais como análise de requisitos, desenvolvimento de interfaces, resolução de problemas, comunicação e adaptação às necessidades do parceiro.`;

const DEPOIMENTO = `A solução apresentada contribuiu para organizar e divulgar melhor as atividades culturais da instituição. O sistema é simples de usar, permite registrar informações importantes das ações realizadas e facilita o acesso do público à programação cultural. A proposta atendeu à necessidade de uma ferramenta prática de apoio à gestão e divulgação das atividades.`;

const REFERENCIAS = `BENYON, David. Interação humano-computador. 2. ed. São Paulo: Pearson, 2011.

SEGURADO, Valquíria Santos. Projeto de interface com o usuário. São Paulo: Pearson, 2017.

CAMDEN, Raymond; MATTHEWS, Andy. jQuery Mobile Web Development Essentials. Olton: Packt Publishing, 2012.

INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. API de Localidades. Rio de Janeiro: IBGE, 2026. Disponível em: https://servicodados.ibge.gov.br/api/v1/localidades.

ORGANIZAÇÃO DAS NAÇÕES UNIDAS. Objetivos de Desenvolvimento Sustentável no Brasil. Brasília: ONU Brasil, 2026.`;

export default function PaginaRelatorio() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="section-title">Material para o relatório final</h1>
        <p className="text-sm text-[var(--muted)]">
          Use os blocos abaixo para compor o relatório da atividade extensionista
          do programa Ação e Difusão Cultural. Cada bloco está em PT-BR e pode
          ser copiado com um clique. Os textos enfatizam que a ação resultou na
          produção de um sistema digital de divulgação e gestão cultural.
        </p>
      </header>

      <BlocoCopiavel titulo="Metas ODS aderentes" texto={METAS_ODS} />
      <BlocoCopiavel
        titulo="Local de realização da atividade extensionista"
        texto={LOCAL_REALIZACAO}
      />
      <BlocoCopiavel titulo="Durante a ação" texto={DURANTE_ACAO} />
      <BlocoCopiavel titulo="Mudança de estratégia" texto={MUDANCA_ESTRATEGIA} />
      <BlocoCopiavel titulo="Resultado da ação" texto={RESULTADO_ACAO} />
      <BlocoCopiavel titulo="Conclusão" texto={CONCLUSAO} />
      <BlocoCopiavel
        titulo="Depoimento da instituição participante (texto de exemplo editável)"
        texto={DEPOIMENTO}
      />
      <BlocoCopiavel
        titulo="Referências bibliográficas (ABNT)"
        texto={REFERENCIAS}
      />
    </div>
  );
}
