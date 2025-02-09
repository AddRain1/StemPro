import axios from "axios";
import React, { useState, useEffect } from "react";

const Discussion = ({ postDetails }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const responses = await Promise.all(
          postDetails.comments.map((commentId) =>
            axios.get(`http://localhost:3000/comments/comment/${commentId}`)
          )
        );
        // Extract data from responses
        const fetchedComments = responses.map((res) => res.data);
        setComments(fetchedComments); // Update state with all comments at once
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (postDetails.comments.length > 0) {
      fetchComments();
    }
  }, [postDetails.comments]);

  return (
    <div>
      <h2>Discussion</h2>
      {comments.map((comment) => (
        <div key={comment._id}>
          <h3>User {comment.user}</h3>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Discussion;
