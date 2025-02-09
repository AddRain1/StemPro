import express from "express";
import catchAsync from "../util/catchAsync.js";

const router = express.Router();
import users from '../controllers/users.controller.js';
const passport = require('passport');


router.route('/register')
  .get(user.renderRegister)
  .post(catchAsync(users.register));

router.route('/login')
  .get(users.renderLogin)
  .post(users.login)

router.get('/logout', users.logout)
export default router;
