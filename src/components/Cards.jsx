import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const Cards = ({ listaColores, borrarColor }) => {
  return (
    <>
    <Row>
        {        
             listaColores.map((colores, posicion)=>{return <Col sm={6} md={4} lg={3}>
                <Card className="d-flex align-items-center border-0">
                <Card.Body>
              <Card.Title> {colores} </Card.Title>
                <div className="caja" key={posicion} style={{ 'background': colores }}></div>
            </Card.Body>
            <Button className="my-2 btn-sm" variant="danger" onClick={()=> borrarColor(colores)}>
              Borrar
            </Button>
          </Card>  
            </Col>})
        }
    </Row>
    </>
  );
};

export default Cards;
