import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Página inicial", () => {
  it("renderiza as tarefas iniciais", async () => {
    const pagina = await Home();

    render(pagina);

    expect(await screen.findByText("Estudar Next.js")).toBeInTheDocument();
    expect(screen.getByText("Aprender Jest")).toBeInTheDocument();
    expect(screen.getByText("Praticar testes unitários")).toBeInTheDocument();
    expect(screen.getByText("Concluída")).toBeInTheDocument();
  });
});