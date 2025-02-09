import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import ReplyIcon from "@mui/icons-material/Reply";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password };

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        userData
      );
      console.log("Response:", response); // Debugging

      if (response.status === 200) {
        setSuccess("Log in successful!");
        setUsername("");
        setPassword("");
        setIsAuthenticated(true);
        console.log("Authenticated:", isAuthenticated);
        navigate("/homepage");
      }
    } catch (err) {
      setError("Log in failed. " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => navigate(`/homepage`)}>
        <ReplyIcon fontSize="large" />
      </button>
      <h2>Log In</h2>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>

      {/* Optional Register Button (uncomment if needed) */}
      {/* {!isAuthenticated && (
          <button className="register-button" onClick={() => navigate("/register")}>Register</button>
      )} */}
    </div>
  );
};

export default LogIn;
