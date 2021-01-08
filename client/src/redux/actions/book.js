import * as api from "../api";
import * as type from "../types";

export const getBooks = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchBooks();
    dispatch({ type: type.GET_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBook = (id) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchBook(id);
    dispatch({ type: type.GET_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBook = (newBook) => async (dispatch) => {
  try {
    await api.postBook(newBook);
    dispatch({ type: type.CREATE });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBook = (id, editBook) => async (dispatch) => {
  try {
    await api.patchBook(id, editBook);
    dispatch({ type: type.UPDATE });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await await api.deleteBook(id);
    dispatch({ type: type.DELETE });
  } catch (error) {
    console.log(error.message);
  }
};
