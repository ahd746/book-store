import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { createBook, updateBook } from "../../redux/actions/book";

const BookForm = ({ type, initBook }) => {
  const [redirect, setRedirect] = useState(false);
  const [book, setBook] = useState(initBook);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    type === "Create"
      ? dispatch(createBook(book))
      : dispatch(updateBook(initBook._id, book));
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          required
          placeholder="Book Title"
          value={book.title}
          onChange={(e) => {
            setBook({ ...book, title: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          required
          placeholder="Author"
          value={book.author}
          onChange={(e) => {
            setBook({ ...book, author: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          required
          as="textarea"
          rows={4}
          placeholder="Book Description"
          value={book.description}
          onChange={(e) => {
            setBook({ ...book, description: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <FileBase
          type="file"
          required
          multiple={false}
          value={book.image}
          onDone={({ base64 }) => setBook({ ...book, image: base64 })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {type}
      </Button>
    </Form>
  );
};

export default BookForm;
