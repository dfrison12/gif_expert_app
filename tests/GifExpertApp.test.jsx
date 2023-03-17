import { render } from "react-dom";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("Debe de mostrarse correctamente", () => {
    render(<GifExpertApp />);
    screen.debug();
  });
});
