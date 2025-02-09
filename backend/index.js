// const express = require("express")
// const connectDB = require("./lib/connectDB.js")
// const userRouter = require("./routes/user.route.js")
// const postRouter = require("./routes/post.route.js")
// const commentRouter = require("./routes/comment.route.js")
import express from "express"
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import passport from 'passport';
import session from 'express-session';
import './lib/passport.js';

const app = express();
app.use(express.json());
app.use(session({
  secret: 'your_secret_key',  // Replace with a secret key
  resave: false,              // Don't save the session if it wasn't modified
  saveUninitialized: false,   // Don't create a session until something is stored
  cookie: { secure: false }   // Set to true if you're using HTTPS, false for development
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running");
});
