import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";
import axios from "axios";

export const CreatePost = () => {
  const [question, setQuestion] = useState("");
  const [subject, setSubject] = useState("Computer Science");
  const [answer, setAnswer] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState(null); // Store logged-in user
  const navigate = useNavigate();

  // Check if user is logged in when component mounts
  useEffect(() => {
    const fetchAuth = async () => {
      const res = await axios.get("http://localhost:3000/api/auth/status", {
        withCredentials: true, // Ensure session cookies are sent
      });
      setUser(res.data);
      console.log(res.data);
    };

    fetchAuth();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!user) {
      alert("You must be logged in to create a post.");
      navigate("/login"); // Redirect to login page
      return;
    }

    // Create a new post object
    const newPost = {
      question,
      subject,
      description,
      answer: answer.trim() ? answer : "No answer provided",
      user: user._id,
    };
    try {
      // Send a POST request to the server
      await axios.post("http://localhost:3000/posts", newPost);
      alert("Post Created Successfully!");

      // Reset Form
      setQuestion("");
      setSubject("");
      setAnswer("");
      setDescription("");

      navigate("/homepage");
    } catch (error) {
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="create-post-container">
      <button className="back-button" onClick={() => navigate("/")}>
        <ReplyIcon fontSize="large" />
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

        {/* Description Input */}
        <label>Description (Optional):</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description..."
        ></textarea>

        {/* Category Dropdown */}
        <label>Subject:</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option>computer-science</option>
          <option>mathematics</option>
          <option>physics</option>
          <option>biology</option>
          <option>engineering</option>
          <option>chemistry</option>
        </select>

        {/* Optional Answer */}
        <label>Answer (Optional):</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer..."
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
