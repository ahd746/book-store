import * as types from "../types";
const reducer = (books = [], action) => {
  switch (action.type) {
    case types.GET_ALL:
      return action.payload;
    case types.GET_ONE:
      return action.payload;
    case types.CREATE:
    case types.UPDATE:
    case types.DELETE:
      return books;
    default:
      return books;
  }
};

export default reducer;
