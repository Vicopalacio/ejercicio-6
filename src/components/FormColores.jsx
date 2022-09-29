import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Cards from "./Cards";

const FormColores = () => {
  const arregloLocalStorage =
    JSON.parse(localStorage.getItem("listaColoresKey")) || [];
  const [colores, setColores] = useState("");
  const [listaColores, setListaColores] = useState(arregloLocalStorage);
  const [cambiarColor, setCambiarColor] = useState("");

  useEffect(() => {
    localStorage.setItem("listaColoresKey", JSON.stringify(listaColores));
  }, [listaColores]);

  const arregloColores = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, colores]);
    setColores("");
  };

  const borrarColor = (color) => {
    let copiaColores = listaColores.filter(
      (colorBorrado) => colorBorrado !== color
    );
    setListaColores(copiaColores);
  };

  const actualizarColor = (colorIngresado) => {
    setCambiarColor(colorIngresado);
    setColores(colorIngresado);
  };

  return (
    <>
      <h1 className="display-5 text-center my-5">Colores</h1>
      <Form onSubmit={arregloColores}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicColor">
          <div
            className="caja mx-1"
            style={{ "background": cambiarColor }}
          ></div>
          <Form.Control
            type="text"
            placeholder="Ingrese un color"
            onChange={(e) => actualizarColor(e.target.value)}
            value={colores}
          />
          <Button variant="outline-warning mx-1" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <Cards listaColores={listaColores} borrarColor={borrarColor}></Cards>
    </>
  );
};

export default FormColores;
