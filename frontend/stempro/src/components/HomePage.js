
import React, { useState, useEffect } from 'react';
import './HomePage.css';
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

    return (
        <div className="homepage-container">
            <div className="homepage-box">
                <h1 className="homepage-title">
                    StemPro: Bridging the Gap Between Education and Industry
                </h1>
                <p className="homepage-title">
                    StemPro is a centralized interview preparation platform designed to
                    help students apply their academic knowledge to real-world industry
                    scenarios.
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
                    <button
                        className="homepage-button"
                        id="createPostButton"
                        onClick={handleCreatePost}
                    >
                        Create Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
