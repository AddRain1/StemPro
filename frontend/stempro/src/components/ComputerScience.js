import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ComputerScience.css";
import axios from "axios";
import ReplyIcon from '@mui/icons-material/Reply';

export const ComputerScience = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/posts/subject/computer-science"
        );
        setPosts(res.data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleProblemClick = (id) => {
    navigate(`/computerscience/problem/${id}`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="computer-science-container">
        <button className="back-button" onClick={() => navigate('/')}>
                <ReplyIcon fontSize="large"/>
        </button>
      <h1 className="computer-science-title">Computer Science Problems</h1>
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
