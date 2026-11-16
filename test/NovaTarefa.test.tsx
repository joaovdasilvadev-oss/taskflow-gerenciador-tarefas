import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("Componente NovaTarefa", () => {
  it("adiciona uma nova tarefa", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText("Nova tarefa");
    const botao = screen.getByRole("button", {
      name: "+ Adicionar",
    });

    fireEvent.change(input, {
      target: { value: "Estudar React" },
    });

    fireEvent.click(botao);

    expect(onAdicionar).toHaveBeenCalledWith("Estudar React");
    expect(input).toHaveValue("");
  });

  it("não permite adicionar uma tarefa vazia", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const botao = screen.getByRole("button", {
      name: "+ Adicionar",
    });

    expect(botao).toBeDisabled();
    expect(onAdicionar).not.toHaveBeenCalled();
  });
});