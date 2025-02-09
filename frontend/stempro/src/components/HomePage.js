import React, { useState, useEffect } from 'react';
import './HomePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);  // Track if the user is logged in
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await fetch('http://localhost:3000/isLoggedIn', {
                    method: 'GET',
                    credentials: 'include', // Make sure cookies are sent
                });
                const data = await response.json();
                if (data.isLoggedIn) {
                    setIsAuthenticated(true);
                    setUser(data.user);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error checking authentication', error);
            }
        };

        checkAuthentication();
    }, []); // Empty dependency array to only run once when the component mounts

    const handleComputerScience = () => {
        navigate('/computerscience');
    }
    const handleEngineering = () => {
        navigate('/engineering');
    }
    const handleMathematics = () => {
        navigate('/mathematics');
    }
    const handlePhysics = () => {
        navigate('/physics');
    }
    const handleBiology = () => {
        navigate('/biology');
    }
    const handleChemistry = () => {
        navigate('/chemistry');
    }
    const handleRegister = () => {
        navigate('/register')
    }
    const handleLogin = () => {
        navigate('/login')
    }
    const handleLogout = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users/logout");
            if (response.status === 200) {
                setIsAuthenticated(false);  // Update authentication state
                setUser(null);  // Clear user data
                navigate("/homepage");  // Redirect to login page
            }
        } catch (err) {
            setError("Error logging out.");
            console.error("Logout error:", err);
        }
    };

    return (
        <div className="homepage-container">
            <div className="homepage-box">
                <h1 className="homepage-title">Welcome to StemPro!</h1>
                <div className="button-container">
                    <button className="homepage-button" onClick={handleComputerScience}>Computer Science</button>
                    <button className="homepage-button" onClick={handleEngineering}>Engineering</button>
                    <button className="homepage-button" onClick={handleMathematics}>Mathematics</button>
                    <button className="homepage-button" onClick={handleChemistry}>Chemistry</button>
                    <button className="homepage-button" onClick={handlePhysics}>Physics</button>
                    <button className="homepage-button" onClick={handleBiology}>Biology</button>
                </div>
            </div>
            <div className="register-box">
                {isAuthenticated ? (
                    <div>
                        {/* <p>Welcome, {user?.username}!</p>
                        <button onClick={() => alert('You are logged in')}>Logout</button> */}
                    </div>
                ) : (
                    <button className="homepage-button" onClick={handleRegister}>Register</button>
                )}
            </div>
            <div className="login-box">
                {isAuthenticated ? (
                    <div>
                        <p>Welcome!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <button className="homepage-button" onClick={handleLogin}>Log in</button>
                )}
            </div>
        </div>
    )
}

export default HomePage;