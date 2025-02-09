import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Question from "./Question";
import Solution from "./Solution";
import Discussion from "./Discussion";
import ReplyIcon from '@mui/icons-material/Reply';
import "./ProblemDetail.css";
import axios from "axios";

const ProblemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        console.log(res.data);
        setPostDetails(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  // Sample list of problems with names
  // const problemList = {
  //   1: "Reverse a String",
  //   2: "Find the Largest Element in an Array",
  //   3: "Binary Search Implementation",
  //   4: "Check if a Number is Prime",
  //   5: "Find the Fibonacci Sequence",
  // };

  // Get the problem name based on the ID from the URL
  // const problemName = problemList[id] || "Unknown Problem";

  return (
    <div className="problem-detail-container">
      {/* Left Section: Backwards Arrow, Problem Name, Buttons, and Content */}
      <div className="problem-left">
        <button className="back-button" onClick={() => navigate('/computerscience')}>
          <ReplyIcon fontSize="large" />
        </button>

        <div className="button-container">
          <Link
            to={`/computerscience/problem/${id}/question`}
            className="tab-button"
          >
            Question
          </Link>
          <Link
            to={`/computerscience/problem/${id}/solution`}
            className="tab-button"
          >
            Solution
          </Link>
          <Link
            to={`/computerscience/problem/${id}/discussion`}
            className="tab-button"
          >
            Discussion
          </Link>
        </div>
        {/* Display the selected section BELOW the buttons */}
        <div className="content-container">
          <Routes>
            <Route
              path="question"
              element={<Question postDetails={postDetails} />}
            />
            <Route
              path="solution"
              element={<Solution postDetails={postDetails} />}
            />
            <Route
              path="discussion"
              element={<Discussion postDetails={postDetails} />}
            />
          </Routes>
        </div>
      </div>

      {/* Right Section: Notepad */}
      <div className="problem-right">
        <h3>Notes</h3>
        <textarea
          className="notes-editor"
          placeholder="Type your thoughts here..."
        />
      </div>
    </div>
  );
};

export default ProblemDetail;
