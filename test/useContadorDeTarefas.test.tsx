import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import { Tarefa } from "@/data/tarefas";

describe("Hook useContadorDeTarefas", () => {
  it("retorna a quantidade correta de tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: "Estudar", concluida: false },
      { id: 2, titulo: "Programar", concluida: false },
      { id: 3, titulo: "Praticar", concluida: true },
    ];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(3);
  });

  it("retorna zero quando não existem tarefas", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([])
    );

    expect(result.current).toBe(0);
  });
});