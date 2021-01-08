import Book from "../models/book.js";

// http://localhost:5000/book
export const index = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error" + error,
    });
  }
};

//http://localhost:5000/book/show/5ff20675cc4e0c31cc567e2f
export const show = async (req, res) => {
  const _id = req.params.id;
  try {
    const books = await Book.findById(_id);
    if (books) {
      return res.status(200).json({
        success: true,
        data: books,
      });
    } else if (!books) {
      return res.status(404).json({
        success: false,
        data: "No book found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error" + error,
    });
  }
};

//http://localhost:5000/book/create
export const create = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error: ${error}`,
    });
  }
};

//http://localhost:5000/book/edit/5ff20675cc4e0c31cc567e2f
export const update = async (req, res) => {
  const _id = req.params.id;
  const { title, author, description, image } = req.body;
  try {
    const updatedBook = { _id, title, author, description, image };
    await Book.findByIdAndUpdate(_id, updatedBook, { new: true });

    return res.status(201).json({
      success: true,
      data: updatedBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error: ${error}`,
    });
  }
};

//http://localhost:5000/book/delete/5ff20675cc4e0c31cc567e2f
export const remove = async (req, res) => {
  const _id = req.params.id;
  try {
    await Book.findByIdAndRemove(_id);
    res.status(200).json({ success: true, data: "Book deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error: ${error}`,
    });
  }
};
