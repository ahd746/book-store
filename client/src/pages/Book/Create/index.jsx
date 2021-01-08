import React from "react";
import Form from "../../../components/Form";

const Create = () => {
  const initBook = {
    title: "",
    author: "",
    description: "",
    image: "",
  };

  return (
    <div>
      <p>Create New Book</p>
      <Form type="Create" initBook={initBook} />
    </div>
  );
};

export default Create;
