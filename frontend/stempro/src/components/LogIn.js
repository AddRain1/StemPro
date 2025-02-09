import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    // Define the state for the form inputs
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [userId, setUserId] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { username, password };

        try {
            // Send a POST request to the backend API
            await axios.post('http://localhost:3000/users/login', userData);
            // console.log("Response:", response); // Debugging
            // console.log("User registered:", response.data);  // Ensure `data` exists
        
            setSuccess('Log in successful!');
            setUsername('');
            setPassword('');
            setIsAuthenticated(true);
            
        
            navigate('/homepage')
        } catch (err) {
            // If there's an error, update the error state
            setError('Log in failed. ' + err.response?.data || err.message);
        }
    };

    return (
        <div className="register-form">
            <h2>Log in</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <form onSubmit={handleSubmit}>
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
                <button type="submit">LogIn</button>
            </form>
            {/* {!isAuthenticated && (
                <button onClick={() => navigate("/register")}>Register</button>
            )} */}
        </div>
    );
};

export default LogIn;
