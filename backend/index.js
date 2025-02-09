import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import corsMiddleware from "./middlewares/corsMiddleware.js";
import passport from "passport";
import session from "express-session";
import "./strategies/local-strategy.js";
import cors from "cors";

const app = express();
app.use(corsMiddleware);
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001", // Replace with your frontend URL
    credentials: true, // Allow cookies and authentication headers
  })
);

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000, // 1 hour
      httpOnly: true,
      secure: false, // Set to true in production with HTTPS
      sameSite: "lax",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.post(
  "/api/auth",
  passport.authenticate("local", { keepSessionInfo: true }),
  (request, response) => {
    response.sendStatus(200);
  }
);

app.get("/api/auth/status", (request, response) => {
  console.log(request.session);
  return request.user ? response.send(request.user) : response.sendStatus(401);
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// app.use((error, req, res, next) => {
//   res.status(error.status || 500);

//   res.json({
//     message: error.message || "Something went wrong",
//     status: error.status,
//     stack: error.stack,
//   });
// });

// app.get("/isLoggedIn", (req, res) => {
//   try {
//     console.log("This is the beginning");
//     // console.log(req.isAuthenticated)
//     if (req.isAuthenticated) {
//       console.log("Yay!");
//       res.json({ isLoggedIn: true, user: req._user });
//     } else {
//       console.log("whoa");
//       res.json({ isLoggedIn: false });
//     }
//     console.log("This is the end");
//   } catch (err) {
//     console.error("Error in /isLoggedIn route:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

app.listen(3000, () => {
  connectDB();
  console.log("Server is running");
});
