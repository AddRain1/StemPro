import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const getCommentsFromPost = async (req, res) => {
  const post = await Post.findById({ _id: req.params.postId });
  const comments = post.comments;
  res.status(200).send(comments);
};

export const getCommentsFromUser = async (req, res) => {
  const comments = await Comment.find({ user: req.params.userId });
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
  const comment = await Comment.findByIdAndDelete(req.params.commentId);
  res.status(200).json("Comment has been deleted");
};

export const updateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.commentId,
    req.body
  );
  res.status(200).json("Your comment has been edited");
};
