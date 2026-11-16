import { buscarTarefas } from "@/data/tarefas";
import GerenciadorTarefas from "@/components/GerenciadorTarefas";

export default async function Home() {
  const tarefas = await buscarTarefas();

  return <GerenciadorTarefas tarefasIniciais={tarefas} />;
}