import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:postId", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);

export default router;
