"use client";

import { useEffect, useState } from "react";
import type { Cidade, Estado } from "@/types";
import { buscarCidades, buscarEstados } from "@/lib/ibge";

interface Props {
  ufSelecionada: string;
  cidadeSelecionada: string;
  onUfChange: (uf: string, nome: string) => void;
  onCidadeChange: (cidade: string) => void;
  obrigatorio?: boolean;
  permitirTodos?: boolean;
}

export function SeletorLocalidade({
  ufSelecionada,
  cidadeSelecionada,
  onUfChange,
  onCidadeChange,
  obrigatorio = false,
  permitirTodos = true,
}: Props) {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [carregandoCidades, setCarregandoCidades] = useState(false);

  useEffect(() => {
    let ativo = true;
    buscarEstados().then((resultado) => {
      if (ativo) setEstados(resultado);
    });
    return () => {
      ativo = false;
    };
  }, []);

  useEffect(() => {
    let ativo = true;
    if (!ufSelecionada) {
      setCidades([]);
      return;
    }
    setCarregandoCidades(true);
    buscarCidades(ufSelecionada)
      .then((resultado) => {
        if (ativo) setCidades(resultado);
      })
      .finally(() => {
        if (ativo) setCarregandoCidades(false);
      });
    return () => {
      ativo = false;
    };
  }, [ufSelecionada]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <label className="label" htmlFor="estado">
          Estado
        </label>
        <select
          id="estado"
          className="select"
          value={ufSelecionada}
          required={obrigatorio}
          onChange={(e) => {
            const sigla = e.target.value;
            const estado = estados.find((es) => es.sigla === sigla);
            onUfChange(sigla, estado?.nome ?? "");
            onCidadeChange("");
          }}
        >
          {permitirTodos && <option value="">Todos os estados</option>}
          {!permitirTodos && <option value="">Selecione um estado</option>}
          {estados.map((es) => (
            <option key={es.sigla} value={es.sigla}>
              {es.nome} ({es.sigla})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="label" htmlFor="cidade">
          Cidade
        </label>
        <select
          id="cidade"
          className="select"
          value={cidadeSelecionada}
          required={obrigatorio}
          disabled={!ufSelecionada || carregandoCidades}
          onChange={(e) => onCidadeChange(e.target.value)}
        >
          {permitirTodos && <option value="">Todas as cidades</option>}
          {!permitirTodos && <option value="">Selecione uma cidade</option>}
          {cidades.map((c) => (
            <option key={c.id} value={c.nome}>
              {c.nome}
            </option>
          ))}
        </select>
        {carregandoCidades && (
          <p className="help-text">Carregando cidades do IBGE...</p>
        )}
      </div>
    </div>
  );
}
