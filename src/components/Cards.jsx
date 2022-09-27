import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Card style={{ background: "blue", width: "100px", height: "100px"}}>
              <Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="outline-danger my-3">Borrar</Button>
      </Container>
    </>
  );
};

export default Cards;
