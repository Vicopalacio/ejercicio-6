import React from "react";
import { Button } from "react-bootstrap";

const Colores = ({nombreColor, borrarColor}) => {
  return (
    <>
      <div>
        <div
          style={{
            background: "blue",
            width: "100px",
            height: "100px",
            borderRadius: "10px",
          }}
        ></div>
        <Button variant="danger" onClick={()=> borrarColor(nombreColor)}>
          Borrar
        </Button>
      </div>
    </>
  );
};

export default Colores;
