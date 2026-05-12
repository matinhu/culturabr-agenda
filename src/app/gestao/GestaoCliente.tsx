"use client";

import { useEffect, useMemo, useState } from "react";
import type { Atividade, Inscricao } from "@/types";
import {
  carregarAtividades,
  carregarInscricoes,
  resetarAtividades,
  salvarAtividades,
} from "@/lib/storage";
import { FormularioAtividade } from "@/components/FormularioAtividade";
import { atividadesParaCSV, baixarCSV } from "@/lib/csv";
import { formatarDataCurta } from "@/lib/dates";

const SENHA_DEMO = "cultura2026";

const RESUMO_ACAO = `Ação extensionista — CulturaBR Agenda

A presente ação extensionista resultou no desenvolvimento de uma aplicação web chamada CulturaBR Agenda, voltada à divulgação e gestão de atividades culturais em cidades brasileiras. O sistema permite que instituições culturais cadastrem oficinas, feiras, mostras, rodas e apresentações; que o público filtre as atividades por estado, cidade e categoria; e que manifeste seu interesse em participar.

A solução foi pensada para ser simples e acessível, atendendo à realidade de instituições e grupos culturais que precisam organizar informações de forma digital, ampliando o alcance da programação cultural e fortalecendo a parceria entre universidade e comunidade.`;

export function GestaoCliente() {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  const [senhaErro, setSenhaErro] = useState("");

  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);
  const [emEdicao, setEmEdicao] = useState<Atividade | null>(null);
  const [criando, setCriando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (!autenticado) return;
    setAtividades(carregarAtividades());
    setInscricoes(carregarInscricoes());
  }, [autenticado]);

  useEffect(() => {
    if (!mensagem) return;
    const id = setTimeout(() => setMensagem(""), 2800);
    return () => clearTimeout(id);
  }, [mensagem]);

  const inscricoesPorAtividade = useMemo(() => {
    const mapa = new Map<string, number>();
    inscricoes.forEach((i) => {
      mapa.set(i.atividadeId, (mapa.get(i.atividadeId) ?? 0) + 1);
    });
    return mapa;
  }, [inscricoes]);

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    if (senha.trim() === SENHA_DEMO) {
      setAutenticado(true);
      setSenhaErro("");
    } else {
      setSenhaErro("Senha incorreta. Use cultura2026 para a demonstração.");
    }
  }

  function aoSalvar(atividade: Atividade) {
    const existente = atividades.some((a) => a.id === atividade.id);
    const novaLista = existente
      ? atividades.map((a) => (a.id === atividade.id ? atividade : a))
      : [atividade, ...atividades];
    setAtividades(novaLista);
    salvarAtividades(novaLista);
    setEmEdicao(null);
    setCriando(false);
    setMensagem(
      existente
        ? "Atividade atualizada com sucesso."
        : "Atividade criada com sucesso.",
    );
  }

  function excluir(id: string) {
    if (
      !window.confirm(
        "Tem certeza que deseja excluir esta atividade? Esta ação não pode ser desfeita.",
      )
    )
      return;
    const nova = atividades.filter((a) => a.id !== id);
    setAtividades(nova);
    salvarAtividades(nova);
    setMensagem("Atividade excluída.");
  }

  function exportar() {
    const csv = atividadesParaCSV(atividades);
    baixarCSV("culturabr-atividades.csv", csv);
    setMensagem("Arquivo CSV gerado para download.");
  }

  async function copiarResumo() {
    try {
      await navigator.clipboard.writeText(RESUMO_ACAO);
      setMensagem("Resumo copiado para a área de transferência.");
    } catch {
      setMensagem("Não foi possível copiar automaticamente. Selecione o texto.");
    }
  }

  function restaurar() {
    if (
      !window.confirm(
        "Restaurar as atividades de demonstração? As alterações locais serão perdidas.",
      )
    )
      return;
    const lista = resetarAtividades();
    setAtividades(lista);
    setMensagem("Atividades de demonstração restauradas.");
  }

  if (!autenticado) {
    return (
      <div className="max-w-md mx-auto">
        <form onSubmit={entrar} className="card space-y-4">
          <h1 className="section-title">Área de gestão</h1>
          <p className="text-sm text-[var(--muted)]">
            Acesso demonstrativo. Use a senha{" "}
            <code className="bg-[var(--background)] px-1 py-0.5 rounded">
              cultura2026
            </code>{" "}
            para entrar.
          </p>
          <div>
            <label className="label" htmlFor="senha">
              Senha de demonstração
            </label>
            <input
              id="senha"
              type="password"
              className="input"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          {senhaErro && (
            <p className="text-sm text-red-700 font-medium">{senhaErro}</p>
          )}
          <button type="submit" className="btn-primary">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="section-title">Área de gestão</h1>
          <p className="text-sm text-[var(--muted)]">
            Cadastre, edite e organize as atividades culturais da instituição.
            Os dados ficam salvos neste navegador.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              setCriando(true);
              setEmEdicao(null);
            }}
          >
            Nova atividade
          </button>
          <button type="button" className="btn-secondary" onClick={exportar}>
            Exportar atividades em CSV
          </button>
          <button type="button" className="btn-ghost" onClick={copiarResumo}>
            Copiar resumo da ação extensionista
          </button>
          <button type="button" className="btn-ghost" onClick={restaurar}>
            Restaurar exemplos
          </button>
        </div>
      </div>

      {mensagem && <div className="toast">{mensagem}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Indicador titulo="Atividades cadastradas" valor={atividades.length} />
        <Indicador titulo="Atividades publicadas" valor={atividades.filter((a) => a.status === "publicado").length} />
        <Indicador titulo="Inscrições recebidas" valor={inscricoes.length} />
      </div>

      {(criando || emEdicao) && (
        <FormularioAtividade
          atividade={emEdicao}
          onSalvar={aoSalvar}
          onCancelar={() => {
            setCriando(false);
            setEmEdicao(null);
          }}
        />
      )}

      <section className="card">
        <h2 className="section-title">Atividades cadastradas</h2>
        {atividades.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">
            Nenhuma atividade cadastrada. Clique em &quot;Nova atividade&quot;
            para começar.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase text-[var(--muted)]">
                <tr>
                  <th className="py-2 pr-3">Atividade</th>
                  <th className="py-2 pr-3">Cidade/UF</th>
                  <th className="py-2 pr-3">Data</th>
                  <th className="py-2 pr-3">Status</th>
                  <th className="py-2 pr-3">Inscrições</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {atividades.map((a) => (
                  <tr
                    key={a.id}
                    className="border-t border-[var(--border)] align-top"
                  >
                    <td className="py-2 pr-3">
                      <div className="font-semibold">{a.titulo}</div>
                      <div className="text-xs text-[var(--muted)]">
                        {a.categoria} • {a.instituicao}
                      </div>
                    </td>
                    <td className="py-2 pr-3">
                      {a.cidade}/{a.estadoUf}
                    </td>
                    <td className="py-2 pr-3">{formatarDataCurta(a.data)}</td>
                    <td className="py-2 pr-3">
                      <span
                        className={
                          a.status === "publicado"
                            ? "tag tag-verde"
                            : a.status === "encerrado"
                              ? "tag tag-cinza"
                              : "tag"
                        }
                      >
                        {a.status === "publicado"
                          ? "Publicado"
                          : a.status === "encerrado"
                            ? "Encerrado"
                            : "Rascunho"}
                      </span>
                    </td>
                    <td className="py-2 pr-3 text-center">
                      {inscricoesPorAtividade.get(a.id) ?? 0}
                    </td>
                    <td className="py-2 whitespace-nowrap text-right">
                      <button
                        type="button"
                        className="btn-ghost text-xs"
                        onClick={() => {
                          setEmEdicao(a);
                          setCriando(false);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="btn-ghost text-xs ml-2"
                        onClick={() => excluir(a.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="card">
        <h2 className="section-title">Últimas inscrições</h2>
        {inscricoes.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">
            Ainda não há manifestações de interesse registradas.
          </p>
        ) : (
          <ul className="divide-y divide-[var(--border)]">
            {inscricoes.slice(0, 10).map((i) => (
              <li key={i.id} className="py-2 text-sm">
                <div className="font-semibold">{i.nome}</div>
                <div className="text-xs text-[var(--muted)]">
                  {i.atividadeTitulo} • {i.email}
                  {i.telefone ? ` • ${i.telefone}` : ""}
                </div>
                {i.observacao && (
                  <div className="text-xs mt-1">{i.observacao}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function Indicador({ titulo, valor }: { titulo: string; valor: number }) {
  return (
    <div className="card text-center">
      <div className="text-3xl font-bold text-[var(--primary)]">{valor}</div>
      <div className="text-xs uppercase tracking-wide text-[var(--muted)] mt-1">
        {titulo}
      </div>
    </div>
  );
}
