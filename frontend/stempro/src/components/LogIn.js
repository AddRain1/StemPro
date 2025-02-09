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
      const res = await axios.post("http://localhost:3000/api/auth", userData);
      if (res.status === 200) {
        console.log("THIS ONE LOOK AT THIS", res);
        console.log("Logged In");
        navigate("/homepage");
      }
    } catch (error) {
      console.log(error);
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
    </div>
  );
};

export default LogIn;
