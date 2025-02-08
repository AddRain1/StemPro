const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    answer: {
        type: String,
        required: true
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
})

module.exports = mongoose.model("Post", postSchema);