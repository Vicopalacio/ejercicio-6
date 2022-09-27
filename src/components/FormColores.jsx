import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Cards from "./Cards";

const FormColores = () => {
  return (
    <>
    <Container>
      <h1 className="display-5 text-center my-5">Colores</h1>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicColor">
          <div className="colores mx-1" style={{ background: "blue" }}></div>
          <Form.Control type="text" placeholder="Ingrese un color" />
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
