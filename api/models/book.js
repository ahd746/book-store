import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  author: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: new Date(),
  },
});

const Book = mongoose.model("Book", BookSchema);
export default Book;
