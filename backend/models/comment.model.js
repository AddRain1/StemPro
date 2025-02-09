const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Comment", commentSchema);
