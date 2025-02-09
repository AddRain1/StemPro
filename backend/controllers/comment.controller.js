import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const getCommentsFromPost = async (req, res) => {
  const post = await Post.findById({ _id: req.params.postId });
  const comments = post.comments;
  res.status(200).send(comments);
};

export const getCommentsFromUser = async (req, res) => {
  const post = await Post.findById({ _id: req.params.postId });
  const comments = post.comments;
  res.status(200).send(comments);
};

export const getComment = async (req, res) => {
  const comment = await Comment.findOne({ _id: req.params.commentId });
  res.status(200).send(comment);
};

export const createComment = async (req, res) => {
  const newComment = new Comment(req.body);
  const comment = await newComment.save();
  res.status(200).json(comment);
};

export const deleteComment = async (req, res) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);
  res.status(200).json("Post has been deleted");
};
