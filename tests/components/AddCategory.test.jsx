import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    //Se crea el sujeto de prueba
    render(<AddCategory onNewCategory={() => {}} />);
    //Se obtiene el elemento a probar input
    const input = screen.getByRole("textbox");
    //Se simula el evento de escribir en el input
    fireEvent.input(input, { target: { value: "Hola mundo" } });
    //Se obtiene el valor del input y se compara con el valor esperado
    expect(input.value).toBe("Hola mundo");
  });

  test("debe de llamar onNewCategory solo si el input tiene valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();
    //TODO
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    //Probar que la funcion a sido llamada
    expect(onNewCategory).toHaveBeenCalled();
    //Probar que la funcion a sido llamada solo una vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    //Probar que la funcion a sido llamada con el valor de inputValue
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);
    screen.debug();

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
