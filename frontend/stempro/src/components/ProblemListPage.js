import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProblemListPage.css";
import axios from "axios";
import ReplyIcon from "@mui/icons-material/Reply";

export const ProblemListPage = () => {
  let { subject } = useParams();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log(subject);
        const res = await axios.get(
          `http://localhost:3000/posts/subject/${subject}`
        );
        setPosts(res.data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [subject]);

  const handleProblemClick = (id) => {
    navigate(`/${subject}/problem/${id}`);
  };

  if (loading)
    return (
      <div className="computer-science-container">
        <h1 className="computer-science-title">
          {subject.charAt(0).toUpperCase() + subject.slice(1)} Problems
        </h1>
      </div>
    );

  if (subject === "computer-science") {
    subject = "Computer Science";
  }

  return (
    <div className="computer-science-container">
      <button className="back-button" onClick={() => navigate("/")}>
        <ReplyIcon fontSize="large" />
      </button>
      <h1 className="computer-science-title">
        {subject.charAt(0).toUpperCase() + subject.slice(1)} Problems
      </h1>
      <div className="computer-science-problems">
        {posts.length === 0 ? (
          <p>No problems found</p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="computer-science-problem"
              onClick={() => handleProblemClick(post._id)}
            >
              {post.question}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
