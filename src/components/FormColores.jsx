import React from "react";
import { Form, Button } from "react-bootstrap";

const FormColores = () => {
  return (
    <>
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
    </>
  );
};

export default FormColores;
