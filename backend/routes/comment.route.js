import express from "express";
import {
  getCommentsFromPost,
  getComment,
  getCommentsFromUser,
  createComment,
  deleteComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/:postId", getCommentsFromPost);
router.get("/user/:userId", getCommentsFromUser);
router.get("/comment/:commentId", getComment);
router.post("/", createComment);
router.delete("/:id", deleteComment);

export default router;
