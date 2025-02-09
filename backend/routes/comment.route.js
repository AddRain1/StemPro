import express from "express";
import {
  getCommentsFromPost,
  getComment,
  getCommentsFromUser,
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/:postId", getCommentsFromPost);
router.get("/user/:userId", getCommentsFromUser);
router.get("/comment/:commentId", getComment);
router.post("/", createComment);
router.delete("/comment/:commentId", deleteComment);
router.patch("/comment/:commentId", updateComment);

export default router;
