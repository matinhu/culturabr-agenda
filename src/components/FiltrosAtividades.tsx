"use client";

import { useEffect, useMemo, useState } from "react";
import type { Atividade } from "@/types";
import { CATEGORIAS } from "@/types";
import { SeletorLocalidade } from "./SeletorLocalidade";
import { CardAtividade } from "./CardAtividade";
import { carregarAtividades } from "@/lib/storage";

export function FiltrosAtividades() {
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    setAtividades(carregarAtividades());
  }, []);

  const filtradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return atividades
      .filter((a) => a.status !== "rascunho")
      .filter((a) => (uf ? a.estadoUf === uf : true))
      .filter((a) => (cidade ? a.cidade === cidade : true))
      .filter((a) => (categoria ? a.categoria === categoria : true))
      .filter((a) => {
        if (!termo) return true;
        return (
          a.titulo.toLowerCase().includes(termo) ||
          a.descricao.toLowerCase().includes(termo) ||
          a.instituicao.toLowerCase().includes(termo) ||
          a.local.toLowerCase().includes(termo) ||
          a.cidade.toLowerCase().includes(termo)
        );
      })
      .sort((a, b) => a.data.localeCompare(b.data));
  }, [atividades, uf, cidade, categoria, busca]);

  function limpar() {
    setUf("");
    setCidade("");
    setCategoria("");
    setBusca("");
  }

  return (
    <section className="space-y-6">
      <div className="card">
        <h2 className="section-title">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SeletorLocalidade
            ufSelecionada={uf}
            cidadeSelecionada={cidade}
            onUfChange={(novo) => setUf(novo)}
            onCidadeChange={(nova) => setCidade(nova)}
            permitirTodos
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="label" htmlFor="categoria">
                Categoria
              </label>
              <select
                id="categoria"
                className="select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Todas as categorias</option>
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="busca">
                Buscar
              </label>
              <input
                id="busca"
                className="input"
                placeholder="Buscar por título, instituição ou local..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 justify-between">
          <span className="text-sm text-[var(--muted)]">
            {filtradas.length} atividade{filtradas.length === 1 ? "" : "s"}{" "}
            encontrada{filtradas.length === 1 ? "" : "s"}
          </span>
          <button type="button" className="btn-ghost" onClick={limpar}>
            Limpar filtros
          </button>
        </div>
      </div>

      {filtradas.length === 0 ? (
        <div className="card text-center text-[var(--muted)]">
          Nenhuma atividade encontrada com os filtros selecionados. Tente
          ajustar a busca ou explorar outras cidades.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtradas.map((a) => (
            <CardAtividade key={a.id} atividade={a} />
          ))}
        </div>
      )}
    </section>
  );
}
