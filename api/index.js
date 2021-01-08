import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Body Parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Database
const PORT = process.env.PORT || 5000;
try {
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  app.listen(PORT, () =>
    console.log(`Server Running on Port: http://localhost:${PORT}`)
  );
} catch (error) {
  console.log(`${error} did not connect`);
  process.exit(1);
}

//Routes
import bookRoutes from "./routes/book.js";
app.use("/book", bookRoutes);
