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

router.get('/logout', logout)
export default router;