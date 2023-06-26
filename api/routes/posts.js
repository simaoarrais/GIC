import express, { Router } from "express";
import { addPost, getPosts, getSinglePost } from "../controllers/post.js";

const router = express.Router();

router.post("/addPost", addPost);
router.get("/:id", getSinglePost);
router.get("/", getPosts);

export default router;