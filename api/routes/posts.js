import express, { Router } from "express";
import { addPost, getPosts, getSinglePost, getTest } from "../controllers/post.js";

const router = express.Router();

router.post("/addPost", addPost);
router.get("/test", getTest);
router.get("/:id", getSinglePost);
router.get("/", getPosts);

export default router;