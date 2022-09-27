import React from "react";
import { Col } from "react-bootstrap";
import Colores from "./Colores";

const Cards = ({listaColores, borrarColor}) => {
  return (
    <>
    <Col md={12}>
     {
     listaColores.map((colores, posicion)=> <Colores key={posicion} nombreColor={colores} borrarColor = {borrarColor}></Colores>)
     }
    </Col>
    </>
  );
};

export default Cards;
