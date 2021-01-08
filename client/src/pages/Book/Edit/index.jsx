import React, { useEffect } from "react";
import Form from "../../../components/Form";
import { useSelector, useDispatch } from "react-redux";
import { getBook } from "../../../redux/actions/book";
import { useParams } from "react-router-dom";

const Edit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);
  const initBook = useSelector((state) => state.book);

  return (
    <div>
      <p>Edit Books</p>
      <Form type={"Update"} initBook={initBook} />
    </div>
  );
};

export default Edit;
