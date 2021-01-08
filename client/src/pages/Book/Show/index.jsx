import React, { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { getBook, deleteBook } from "../../../redux/actions/book";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";

const Show = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);
  const book = useSelector((state) => state.book);

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <>
      <h5>
        {book.title} <span>By:{book.author}</span>
      </h5>
      <Row>
        <Col md={4}>
          <img src={book.image} alt="book cover" style={{ height: "20rem" }} />
        </Col>
        <Col>
          <h6>Book description: </h6>
          <p>{book.description}</p>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg={2}>
          <Link to={`/edit/${id}`}>
            <Button variant="primary" style={{ width: "100%" }}>
              Edit
            </Button>
          </Link>
        </Col>
        <Col lg={2}>
          <Button
            variant="danger"
            style={{ width: "100%" }}
            onClick={() => {
              dispatch(deleteBook(id));
              setRedirect(true);
            }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Show;
