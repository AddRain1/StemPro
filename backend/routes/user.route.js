import express from "express";
import catchAsync from "../lib/catchAsync.js";

const router = express.Router();
import { register, login, logout } from '../controllers/users.controller.js';
// const passport = require('passport');


router.route('/register')
  // .get(renderRegister)
  .post(catchAsync(register));

router.route('/login')
  // .get(renderLogin)
  .post(login)

router.get("/auth/checkAuth", (req, res) => {
  try {
    if (req.isAuthenticated()) {
      return res.status(200).json({
        isAuthenticated: true,
        user: {
          _id: req.user._id,
          username: req.user.username,
          email: req.user.email
        }
      });
    } else {
      return res.status(401).json({ isAuthenticated: false, message: "User not logged in" });
    }
  } catch (error) {
    console.error("Error checking authentication:", error);
    return res.status(500).json({ isAuthenticated: false, message: "Internal server error" });
  }
});

router.get('/logout', logout)
export default router;