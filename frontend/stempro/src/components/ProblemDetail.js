import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import Question from "./Question";
import Solution from "./Solution";
import Discussion from "./Discussion";
import "./ProblemDetail.css";

const ProblemDetail = () => {
  const { id } = useParams();

  // Sample list of problems with names
  const problemList = {
    1: "Reverse a String",
    2: "Find the Largest Element in an Array",
    3: "Binary Search Implementation",
    4: "Check if a Number is Prime",
    5: "Find the Fibonacci Sequence",
  };

  // Get the problem name based on the ID from the URL
  const problemName = problemList[id] || "Unknown Problem";

  return (
    <div className="problem-detail-container">
      {/* Left Section: Problem Name, Buttons, and Content */}
      <div className="problem-left">
        <h2>{problemName}</h2>  {/* Display the problem name */}
        <div className="button-container">
          <Link to={`/computerscience/problem/${id}/question`} className="tab-button">Question</Link>
          <Link to={`/computerscience/problem/${id}/solution`} className="tab-button">Solution</Link>
          <Link to={`/computerscience/problem/${id}/discussion`} className="tab-button">Discussion</Link>
        </div>

        {/* Display the selected section BELOW the buttons */}
        <div className="content-container">
          <Routes>
            <Route path="question" element={<Question />} />
            <Route path="solution" element={<Solution />} />
            <Route path="discussion" element={<Discussion />} />
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
