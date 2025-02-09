import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import ReplyIcon from "@mui/icons-material/Reply";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, username, password };

    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        userData
      );

      if (response.status === 200) {
        setSuccess("Registration successful!");
        setEmail("");
        setUsername("");
        setPassword("");
        navigate("/homepage");
      }
    } catch (err) {
      setError("Registration failed. " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="register-container">
      <button className="back-button" onClick={() => navigate(`/homepage`)}>
        <ReplyIcon fontSize="large" />
      </button>
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
