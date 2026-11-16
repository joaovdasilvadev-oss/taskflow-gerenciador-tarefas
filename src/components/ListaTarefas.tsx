import type { Tarefa } from "@/data/tarefas";

interface ListaTarefasProps {
  tarefas: Tarefa[];
}

export default function ListaTarefas({ tarefas }: ListaTarefasProps) {
  if (tarefas.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhuma tarefa por aqui ainda.</p>
        <p>Adicione sua primeira tarefa acima!</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className="task-item">
          <span className="task-title">{tarefa.titulo}</span>

          {tarefa.concluida && (
            <span className="task-badge">Concluída</span>
          )}
        </li>
      ))}
    </ul>
  );
}