import React, { useState } from "react";
import "./CreatePost.css";
import { useNavigate } from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';
import axios from "axios";

export const CreatePost = () => {
    const [question, setQuestion] = useState("");
    const [subject, setSubject] = useState("Computer Science");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new post object
        const newPost = {
        question,
        subject,
        answer: answer.trim() ? answer : "No answer provided",
        user: "67a7e621cb68382b624977a8", // Hardcoded user ID for now
        };
        try {
        // Send a POST request to the server
            await axios.post("http://localhost:3000/posts", newPost);
            alert("Post Created Successfully!");

            // Reset Form
            setQuestion("");
            setSubject("");
            setAnswer("");

            navigate("/homepage");
        } catch (error) {
            alert("Failed to create post. Please try again.");
        }
    };

return (
    <div className="create-post-container">
        <button className="back-button" onClick={() => navigate('/')}>
                <ReplyIcon fontSize="large"/>
        </button>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        {/* Question Input */}
        <label>Question:</label>
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          required 
          placeholder="Enter your question..." 
        />

        {/* Category Dropdown */}
        <label>Subject:</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option>Computer Science</option>
          <option>Mathematics</option>
          <option>Physics</option>
          <option>Biology</option>
          <option>Engineering</option>
          <option>Chemistry</option>
        </select>

        {/* Optional Answer */}
        <label>Answer (Optional):</label>
        <textarea 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} 
          placeholder="Enter your answer..."
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
);
};
