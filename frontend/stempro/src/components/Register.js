import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // Define the state for the form inputs
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, username, password };

        try {
            // Send a POST request to the backend API
            const response = await axios.post('http://localhost:3000/users/register', userData);
            console.log("Response:", response); // Debugging
            console.log("User registered:", response.data);  // Ensure `data` exists
            if (response.status === 200) {
                setSuccess('Registration successful!');
                setEmail('');
                setUsername('');
                setPassword('');
            }
            navigate('/homepage')
        } catch (err) {
            // If there's an error, update the error state
            setError('Registration failed. ' + err.response?.data || err.message);
        }
    };

    return (
        <div className="register-form">
            <h2>Register</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
