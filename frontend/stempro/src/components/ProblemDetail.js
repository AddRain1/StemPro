import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Question from "./Question";
import Solution from "./Solution";
import Discussion from "./Discussion";
import ReplyIcon from "@mui/icons-material/Reply";
import "./ProblemDetail.css";
import axios from "axios";

const ProblemDetail = () => {
    let { id, subject } = useParams();
    const navigate = useNavigate();
    const [postDetails, setPostDetails] = useState([]);
    const [notes, setNotes] = useState("");

    useEffect(() => {
      const savedNotes = localStorage.getItem(`notes-${id}`);
      if(savedNotes) {
        setNotes(savedNotes);
      }
    }, [id]);

    // save notes to local storage
    useEffect(() => {
      localStorage.setItem(`notes-${id}`, notes);
    }, [notes, id]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        console.log(res.data);
        setPostDetails(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="problem-detail-container">
      {/* Left Section: Backwards Arrow, Problem Name, Buttons, and Content */}
      <div className="problem-left">
        <button className="back-button" onClick={() => navigate(`/${subject}`)}>
          <ReplyIcon fontSize="large" />
        </button>
        <div className="button-container">
          <Link
            to={`/${subject}/problem/${id}/question`}
            className="tab-button"
          >
            Question
          </Link>
          <Link
            to={`/${subject}/problem/${id}/solution`}
            className="tab-button"
          >
            Solution
          </Link>
          <Link
            to={`/${subject}/problem/${id}/discussion`}
            className="tab-button"
          >
            Discussion
          </Link>
        </div>
        <h2>{postDetails.question}</h2>
        <p>{postDetails.description}</p>
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
        <h2>Notes</h2>
        <textarea
          className="notes-editor"
          placeholder="Type your thoughts here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProblemDetail;
