import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProblemDetail.css";

const ProblemDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("question");
  const [notes, setNotes] = useState("");

  return (
    <div className="problem-detail-container">
      {/* Left Section: Problem Number & Buttons */}
      <div className="problem-left">
        <h2>Problem {id}</h2>
        <div className="button-container">
          <button 
            className={`tab-button ${activeTab === "question" ? "active" : ""}`} 
            onClick={() => setActiveTab("question")}
          >
            Question
          </button>
          <button 
            className={`tab-button ${activeTab === "solution" ? "active" : ""}`} 
            onClick={() => setActiveTab("solution")}
          >
            Solution
          </button>
          <button 
            className={`tab-button ${activeTab === "discussion" ? "active" : ""}`} 
            onClick={() => setActiveTab("discussion")}
          >
            Discussion
          </button>
        </div>
      </div>

      {/* Right Section: Text Editor */}
      <div className="problem-right">
        <h3>Notes</h3>
        <textarea 
          className="notes-editor" 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} 
          placeholder="Type your thoughts here..."
        />
      </div>
    </div>
  );
};

export default ProblemDetail;
