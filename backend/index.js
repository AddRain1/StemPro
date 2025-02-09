import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import corsMiddleware from "./middlewares/corsMiddleware.js";
import passport from 'passport';
import session from 'express-session';
import './lib/passport.js';

const app = express();
app.use(corsMiddleware);
app.use(express.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
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

app.get('/isLoggedIn', (req, res) => {
  try {
    console.log(req.isAuthenticated)
    if (req.isAuthenticated) {
      console.log("Yay!")
      res.json({ isLoggedIn: true, user: req.user });
    } else {
      console.log("whoa")
      res.json({ isLoggedIn: false });
    }
  }
  catch (err) {
    console.error("Error in /isLoggedIn route:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running");
});
