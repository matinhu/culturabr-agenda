"use client";

import { useEffect, useState } from "react";
import type {
  Atividade,
  CategoriaAtividade,
  StatusAtividade,
} from "@/types";
import { CATEGORIAS } from "@/types";
import { SeletorLocalidade } from "./SeletorLocalidade";
import { gerarId, slugify } from "@/lib/slug";

interface Props {
  atividade?: Atividade | null;
  onSalvar: (atividade: Atividade) => void;
  onCancelar: () => void;
}

function vazia(): Atividade {
  return {
    id: "",
    slug: "",
    titulo: "",
    categoria: "Música",
    descricao: "",
    estadoUf: "",
    estadoNome: "",
    cidade: "",
    data: "",
    horario: "",
    local: "",
    instituicao: "",
    contato: "",
    publicoAlvo: "",
    capacidade: 0,
    acessibilidade: "",
    status: "publicado",
  };
}

export function FormularioAtividade({ atividade, onSalvar, onCancelar }: Props) {
  const [estado, setEstado] = useState<Atividade>(atividade ?? vazia());

  useEffect(() => {
    setEstado(atividade ?? vazia());
  }, [atividade]);

  function atualizar<K extends keyof Atividade>(chave: K, valor: Atividade[K]) {
    setEstado((s) => ({ ...s, [chave]: valor }));
  }

  function submeter(e: React.FormEvent) {
    e.preventDefault();
    const id = estado.id || gerarId();
    const slug = estado.slug || `${slugify(estado.titulo)}-${id.slice(0, 6)}`;
    onSalvar({ ...estado, id, slug });
  }

  return (
    <form onSubmit={submeter} className="card space-y-4">
      <h2 className="section-title">
        {estado.id ? "Editar atividade" : "Nova atividade"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="md:col-span-2">
          <label className="label" htmlFor="titulo">
            Título
          </label>
          <input
            id="titulo"
            className="input"
            required
            value={estado.titulo}
            onChange={(e) => atualizar("titulo", e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="categoria">
            Categoria
          </label>
          <select
            id="categoria"
            className="select"
            value={estado.categoria}
            onChange={(e) =>
              atualizar("categoria", e.target.value as CategoriaAtividade)
            }
          >
            {CATEGORIAS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            className="select"
            value={estado.status}
            onChange={(e) =>
              atualizar("status", e.target.value as StatusAtividade)
            }
          >
            <option value="publicado">Publicado</option>
            <option value="rascunho">Rascunho</option>
            <option value="encerrado">Encerrado</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="label" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            id="descricao"
            className="textarea"
            rows={4}
            required
            value={estado.descricao}
            onChange={(e) => atualizar("descricao", e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <SeletorLocalidade
            ufSelecionada={estado.estadoUf}
            cidadeSelecionada={estado.cidade}
            onUfChange={(uf, nome) => {
              atualizar("estadoUf", uf);
              atualizar("estadoNome", nome);
            }}
            onCidadeChange={(c) => atualizar("cidade", c)}
            permitirTodos={false}
            obrigatorio
          />
        </div>

        <div>
          <label className="label" htmlFor="data">
            Data
          </label>
          <input
            id="data"
            type="date"
            className="input"
            required
            value={estado.data}
            onChange={(e) => atualizar("data", e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="horario">
            Horário
          </label>
          <input
            id="horario"
            className="input"
            required
            placeholder="19:00 às 22:00"
            value={estado.horario}
            onChange={(e) => atualizar("horario", e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="label" htmlFor="local">
            Local
          </label>
          <input
            id="local"
            className="input"
            required
            value={estado.local}
            onChange={(e) => atualizar("local", e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="instituicao">
            Instituição responsável
          </label>
          <input
            id="instituicao"
            className="input"
            required
            value={estado.instituicao}
            onChange={(e) => atualizar("instituicao", e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="contato">
            Contato
          </label>
          <input
            id="contato"
            className="input"
            placeholder="email@instituicao.org | (00) 00000-0000"
            value={estado.contato}
            onChange={(e) => atualizar("contato", e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="publico">
            Público-alvo
          </label>
          <input
            id="publico"
            className="input"
            value={estado.publicoAlvo}
            onChange={(e) => atualizar("publicoAlvo", e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="capacidade">
            Capacidade de participantes
          </label>
          <input
            id="capacidade"
            type="number"
            min={0}
            className="input"
            value={estado.capacidade}
            onChange={(e) =>
              atualizar("capacidade", Number(e.target.value || 0))
            }
          />
        </div>

        <div className="md:col-span-2">
          <label className="label" htmlFor="acessibilidade">
            Acessibilidade
          </label>
          <input
            id="acessibilidade"
            className="input"
            placeholder="Recursos disponíveis: rampas, Libras, audiodescrição..."
            value={estado.acessibilidade}
            onChange={(e) => atualizar("acessibilidade", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-primary">
          Salvar atividade
        </button>
        <button type="button" className="btn-ghost" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
