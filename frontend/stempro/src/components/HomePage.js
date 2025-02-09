import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if the user is logged in
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("http://localhost:3000/isLoggedIn", {
          method: "GET",
          credentials: "include", // Make sure cookies are sent
        });
        const data = await response.json();
        if (data.isLoggedIn) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication", error);
      }
    };

    checkAuthentication();
  }, []); // Empty dependency array to only run once when the component mounts

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
  const handleCreatePost = () => {
    navigate("/createpost");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/logout");
      if (response.status === 200) {
        setIsAuthenticated(false); // Update authentication state
        setUser(null); // Clear user data
        navigate("/homepage"); // Redirect to login page
      }
    } catch (err) {
      setError("Error logging out.");
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="homepage-container">
      {/* Auth Container (Positioned at the Top Right) */}
      <div className="auth-container">
        {isAuthenticated ? (
          <button className="auth-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <button className="auth-button" onClick={handleRegister}>
              Register
            </button>
            <button className="auth-button" onClick={handleLogin}>
              Log in
            </button>
          </>
        )}
      </div>

      <div className="homepage-box">
        <h1 className="homepage-title">
          StemPro: Bridging the Gap Between Education and Industry
        </h1>
        <p className="homepage-title">
          StemPro is a centralized interview preparation platform designed to
          help students apply their academic knowledge to real-world industry
          scenarios.
        </p>

        {/* Main Buttons (Subjects and Create Post) */}
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
          <button
            className="homepage-button"
            onClick={handleCreatePost}
            id="createPostButton"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
