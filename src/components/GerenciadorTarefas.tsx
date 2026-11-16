"use client";

import { useState } from "react";
import type { Tarefa } from "@/data/tarefas";
import NovaTarefa from "./NovaTarefa";
import ListaTarefas from "./ListaTarefas";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

interface GerenciadorTarefasProps {
  tarefasIniciais: Tarefa[];
}

export default function GerenciadorTarefas({
  tarefasIniciais,
}: GerenciadorTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const quantidade = useContadorDeTarefas(tarefas);
  const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
  const pendentes = quantidade - concluidas;

  function adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
      concluida: false,
    };

    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);
  }

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <div className="logo-icon">✓</div>
          <span>TaskFlow</span>
        </div>

        <div className="tag">Seu espaço de produtividade</div>

        <h1>Organize suas ideias.</h1>

        <p>
          Tire seus planos da cabeça e transforme-os em tarefas.
        </p>
      </header>

      <section className="dashboard">
        <div className="stat-card">
          <p className="stat-label">Total de tarefas</p>
          <p className="stat-value purple">{quantidade}</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Pendentes</p>
          <p className="stat-value">{pendentes}</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Concluídas</p>
          <p className="stat-value green">{concluidas}</p>
        </div>
      </section>

      <section className="panel">
        <h2 className="panel-title">Adicionar nova tarefa</h2>
        <NovaTarefa onAdicionar={adicionarTarefa} />
      </section>

      <section className="panel">
        <h2 className="panel-title">Suas tarefas</h2>
        <ListaTarefas tarefas={tarefas} />
      </section>

      <footer className="footer">
        TaskFlow · Organize seu dia, uma tarefa de cada vez.
      </footer>
    </div>
  );
}