const reducer = (books = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
    case "GET_ONE":
      return action.payload;
    case "CREATE":
    case "UPDATE":
    case "DELETE":
      return books;
    default:
      return books;
  }
};

export default reducer;
