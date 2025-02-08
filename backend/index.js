import express from "express";
import connectDB from "./lib/connectDB.js";

const app = express();

console.log("Changed2");

app.listen(3000, () => {
  console.log("Server is running");
});
