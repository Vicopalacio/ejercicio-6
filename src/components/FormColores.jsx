import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Cards from "./Cards";

const FormColores = () => {
  const [colores, setColores] = useState("");
  const [listaColores, setListaColores] = useState([]);

  const arregloColores = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, colores]);
    setColores("");
  };

  return (
    <>
      <Container>
        <h1 className="display-5 text-center my-5">Colores</h1>
        <Form onSubmit={arregloColores}>
          <Form.Group className="mb-3 d-flex" controlId="formBasicColor">
            <div className="colores mx-1" style={{ background: "blue" }}></div>
            <Form.Control
              type="text"
              placeholder="Ingrese un color"
              onChange={(e) => setColores(e.target.value)}
              value={colores}
            />
            <Button variant="outline-warning mx-1" type="submit">
              Agregar
            </Button>
          </Form.Group>
        </Form>
        <div className="row">
          <Cards></Cards>
        </div>
      </Container>
    </>
  );
};

export default FormColores;
