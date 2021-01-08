import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BookCard from "../../components/BookCard";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getBooks } from "../../redux/actions/book";

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  });
  const books = useSelector((state) => state.book);
  return !books.length ? (
    <p>loading...</p>
  ) : (
    <Row>
      {books.map((book) => (
        <Col key={book._id} xs={6} md={4} lg={3} className="mb-3">
          <BookCard book={book} key={book._id} />
        </Col>
      ))}
    </Row>
  );
};
export default Books;
