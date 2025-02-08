import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleComputerScience = () => {
        navigate('/computerscience');
    }

    return (
        <div className="homepage-container">
            <div className="homepage-box">
                <h1 className="homepage-title">Welcome to StemPro!</h1>
                <button className="homepage-button" onClick={handleComputerScience}>Computer Science</button>
            </div>
        </div>
    )
}

export default HomePage;