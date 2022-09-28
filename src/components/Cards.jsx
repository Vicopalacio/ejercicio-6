import React from "react";
import { Card } from "react-bootstrap";
import Colores from "./Colores";

const Cards = ({ listaColores, borrarColor }) => {
  return (
        <Card>
      {listaColores.map((colores, posicion) => (
        <Colores
          key={posicion}
          nombreColor={colores}
          borrarColor={borrarColor}
        ></Colores>
      ))}
          </Card>  
  );
};

export default Cards;
