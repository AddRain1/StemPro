import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleComputerScience = () => {
    navigate("/computer-science");
  };
  const handleEngineering = () => {
    navigate("/engineering");
  };
  const handleMathematics = () => {
    navigate("/mathematics");
  };
  const handlePhysics = () => {
    navigate("/physics");
  };
  const handleBiology = () => {
    navigate("/biology");
  };
  const handleChemistry = () => {
    navigate("/chemistry");
  };

  return (
    <div className="homepage-container">
      <div className="homepage-box">
        <h1 className="homepage-title">
          StemPro: Bridging the Gap Between Education and Industry
        </h1>
        <p className="homepage-title">
          StemPro is a centralized interview preparation platform designed to
          help students apply their academic knowledge to real-world industry
          scenarios. Built with the MERN stack, the platform connects students
          with industry-relevant problems curated by professionals, providing an
          interactive space for discussion, learning, and skill-building.
        </p>
        <div className="button-container">
          <button className="homepage-button" onClick={handleComputerScience}>
            Computer Science
          </button>
          <button className="homepage-button" onClick={handleEngineering}>
            Engineering
          </button>
          <button className="homepage-button" onClick={handleMathematics}>
            Mathematics
          </button>
          <button className="homepage-button" onClick={handleChemistry}>
            Chemistry
          </button>
          <button className="homepage-button" onClick={handlePhysics}>
            Physics
          </button>
          <button className="homepage-button" onClick={handleBiology}>
            Biology
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
