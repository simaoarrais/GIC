import express, { Router } from "express";
import { addPost, getPosts, getSinglePost, getTest, delPost } from "../controllers/post.js";

const router = express.Router();

router.post("/addPost", addPost);
router.get("/test", getTest);
router.get("/delPost/:id", delPost);
router.get("/:id", getSinglePost);
router.get("/", getPosts);

export default router;