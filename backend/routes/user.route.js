import express from "express";
import catchAsync from "../lib/catchAsync.js";

const router = express.Router();
import { register, login, logout } from "../controllers/users.controller.js";

router.route("/register").post(catchAsync(register));

router.route("/login").post(login);

router.get("/logout", logout);
export default router;
