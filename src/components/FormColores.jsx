import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import Cards from "./Cards";

const FormColores = () => {
  const arregloLocalStorage = JSON.parse(localStorage.getItem("listaColoresKey")) || [];
  const [colores, setColores] = useState("");
  const [listaColores, setListaColores] = useState(arregloLocalStorage);

  useEffect(() => {
    localStorage.setItem("listaColoresKey", JSON.stringify(listaColores))}, [listaColores]);
  

  const arregloColores = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, colores]);
    setColores(""); 
  };

  const borrarColor = (color)=>{
    let copiaColores = listaColores.filter((colorBorrado)=> colorBorrado !== color);
    setListaColores(copiaColores);
  }

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
        <Row>
          <Cards listaColores = {listaColores} borrarColor = {borrarColor}></Cards>
        </Row>
      </Container>
    </>
  );
};

export default FormColores;
