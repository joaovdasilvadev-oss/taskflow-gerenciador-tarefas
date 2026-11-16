export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

const tarefasIniciais: Tarefa[] = [
  {
    id: 1,
    titulo: "Estudar Next.js",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Aprender Jest",
    concluida: false,
  },
  {
    id: 3,
    titulo: "Praticar testes unitários",
    concluida: true,
  },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefasIniciais);
}