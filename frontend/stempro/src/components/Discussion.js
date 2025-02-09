import "./Discussion.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Discussion = ({ postDetails }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const responses = await Promise.all(
          postDetails.comments.map((commentId) =>
            axios.get(`http://localhost:3000/comments/comment/${commentId}`)
          )
        );
        const fetchedComments = responses.map((res) => res.data);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postDetails.comments]);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/status", {
          withCredentials: true, // Ensures session cookies are sent
        });

        console.log("User Data:", res.data); // Make sure this logs properly
        setUser(res.data); // Assuming res.data contains the user object
      } catch (error) {
        console.log("It failed:", error);
      }
    };

    fetchAuth();
  }, []);

  const handleSubmit = async (e) => {
    try {
      // Send comment to the backend
      const res = await axios.post(
        "http://localhost:3000/comments",
        { user: user, text: text }, // Include post ID
        { withCredentials: true } // Ensure session persistence
      );

      // Append the new comment to the comments state
      setComments((prevComments) => [...prevComments, res.data]);

      // Clear the textarea
      setText("");

      console.log("Comment added successfully:", res.data);
    } catch (error) {
      console.error("Error adding comment:", error.response || error);
      alert("Failed to add comment. Please try again.");
    }
  };

  return (
    <div>
      <h2>Discussion</h2>
      {/* Show authenticated user info */}
      {user ? <p>Logged in as: {user.username}</p> : <p>Not logged in</p>}

      {comments.map((comment) => (
        <div key={comment._id}>
          <h3>User {comment.user}</h3>
          <p>{comment.text}</p>
        </div>
      ))}

      {/* Textarea goes directly under the heading */}
      <label htmlFor="comment">Comment</label>
      <textarea
        id="comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a comment..."
      ></textarea>
      <button type="submit" className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Discussion;
