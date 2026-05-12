"use client";

import { useState } from "react";
import type { Atividade } from "@/types";
import { adicionarInscricao } from "@/lib/storage";
import { gerarId } from "@/lib/slug";

export function FormularioInscricao({ atividade }: { atividade: Atividade }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [observacao, setObservacao] = useState("");
  const [sucesso, setSucesso] = useState(false);

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    adicionarInscricao({
      id: gerarId(),
      atividadeId: atividade.id,
      atividadeTitulo: atividade.titulo,
      nome,
      email,
      telefone,
      observacao,
      criadoEm: new Date().toISOString(),
    });
    setSucesso(true);
    setNome("");
    setEmail("");
    setTelefone("");
    setObservacao("");
  }

  return (
    <form
      onSubmit={enviar}
      className="card space-y-4"
      aria-label="Formulário de manifestação de interesse"
    >
      <h2 className="section-title">Manifestar interesse</h2>
      <p className="text-sm text-[var(--muted)]">
        Preencha seus dados para que a instituição possa entrar em contato com
        informações sobre a atividade.
      </p>

      <div>
        <label className="label" htmlFor="nome">
          Nome completo
        </label>
        <input
          id="nome"
          className="input"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="label" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="telefone">
            Telefone
          </label>
          <input
            id="telefone"
            type="tel"
            className="input"
            placeholder="(11) 99999-0000"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="observacao">
          Observação
        </label>
        <textarea
          id="observacao"
          className="textarea"
          rows={3}
          placeholder="Comente sobre necessidades específicas, acompanhantes, dúvidas..."
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary">
          Enviar interesse
        </button>
        {sucesso && (
          <span className="toast" role="status">
            Interesse registrado com sucesso! A instituição entrará em contato.
          </span>
        )}
      </div>
    </form>
  );
}
