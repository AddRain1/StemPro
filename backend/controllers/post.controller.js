import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
};

export const getPostsBySubject = async (req, res) => {
  const posts = await Post.find({ subject: req.params.subject });
  res.status(200).send(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.postId);
  res.status(200).send(post);
};

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  const post = await newPost.save();
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.status(200).json("Post has been deleted");
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json("The post has been updated");
};
