import express from "express";
import {
  getPosts,
  getPostsBySubject,
  getPost,
  createPost,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/:postId", getPost);
router.get("/", getPosts);
router.get("/subject/:subject", getPostsBySubject);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);

export default router;
