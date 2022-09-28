import React from "react";
import { Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Colores = ({nombreColor, borrarColor}) => {
  return (
    <>
        <h4>{nombreColor}</h4>
        <CardHeader
          style={{
            background: "blue",
            width: "100px",
            height: "100px",
            borderRadius: "10px",
          }}
        ></CardHeader>
        <Button variant="danger" onClick={()=> borrarColor(nombreColor)}>
          Borrar
        </Button>
        </>
  );
};

export default Colores;
