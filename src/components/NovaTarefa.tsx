"use client";

import { useState } from "react";
import type { FormEvent } from "react";

interface NovaTarefaProps {
  onAdicionar: (titulo: string) => void;
}

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!titulo.trim()) return;

    onAdicionar(titulo.trim());
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        className="task-input"
        type="text"
        placeholder="Ex.: Estudar TypeScript..."
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        aria-label="Nova tarefa"
      />

      <button
        className="add-button"
        type="submit"
        disabled={!titulo.trim()}
      >
        + Adicionar
      </button>
    </form>
  );
}