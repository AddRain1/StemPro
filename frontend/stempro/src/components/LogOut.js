import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Logout handler
    const handleLogout = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users/logout");
            if (response.status === 200) {
                console.log("Logout successful");
                navigate("/homepage");  // Redirect to login page after logout
            }
        } catch (err) {
            setError("Error logging out. Please try again.");
            console.error("Logout error:", err);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            {error && <div>{error}</div>}
        </div>
    );
};

export default Logout;
