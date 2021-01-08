import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function BookCard({ book }) {
  return (
    <Card
      style={{ width: "11rem", height: "18rem", backgroundColor: "#EFEFEF" }}
    >
      <Link to={`/show/${book._id}`}>
        <Card.Img variant="top" src={book.image} style={{ height: "13rem" }} />
      </Link>
      <Card.Body>
        <p>By: {book.author}</p>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
