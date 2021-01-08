import express from "express";
import { index, show, create, update, remove } from "../controllers/book.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;
