import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { FcLike } from "react-icons/fc";

// Props: image , name, likes

function RatingCard({ pizza, handleClick, count }) {
  return (
    <Card className="card">
      <CardImg
        variant="top"
        src={require(`../images/${pizza.image}`)}
        alt={`${pizza.name} pizza`}
      />
      <Card.Title>
        {pizza.name}
        <span
          style={{ padding: "5px", height: "5px" }}
          onClick={() => handleClick(pizza)}
        >
          <FcLike />
        </span>
      </Card.Title>

      <Card.Body
        style={{
          marginBottom: "10px",
          height: "30px",
          fontSize: "14px",
          justifyItems: "center",
        }}
      >
        <Card.Text>{count}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default RatingCard;
