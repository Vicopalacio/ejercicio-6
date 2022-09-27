import React from "react";
import { Button} from "react-bootstrap";

const Cards = () => {
  return (
    <div className="col-md-3">
      <div
        style={{ background: "blue", width: "100px", height: "100px", borderRadius: "10px"}}></div>
      <Button variant="danger my-1" style={{ width: "100px", height: "40px" }}>
        Borrar
      </Button>
    </div>
  );
};

export default Cards;
