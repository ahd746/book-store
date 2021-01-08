import axios from "axios";

const URL = "http://localhost:5000/book";

export const fetchBooks = () => axios.get(URL);
export const fetchBook = (id) => axios.get(`${URL}/${id}`);
export const postBook = (newBook) => axios.post(`${URL}`, newBook);
export const patchBook = (id, updatedBook) =>
  axios.patch(`${URL}/${id}`, updatedBook);
export const deleteBook = (id) => axios.delete(`${URL}/${id}`);
