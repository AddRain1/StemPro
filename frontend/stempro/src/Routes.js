import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './components/HomePage.js';
import { NotFoundPage } from "./components/NotFoundPage.js";
import { ComputerScience } from "./components/ComputerScience.js";
import { Biology } from "./components/Biology.js";
import { Chemistry } from "./components/Chemistry.js";
import { Engineering } from "./components/Engineering.js";
import { Mathematics } from "./components/Mathematics.js";
import { Physics } from "./components/Physics.js";
import ProblemDetail from "./components/ProblemDetail.js";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Navigate to="/homepage" />} />
                <Route path="/homepage" exact element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/computerscience" element={<ComputerScience />} />
                <Route path="/computerscience/problem/:id/*" element={<ProblemDetail />} />
                <Route path="/biology" element={<Biology />} />
                <Route path="/chemistry" element={<Chemistry />} />
                <Route path="/engineering" element={<Engineering />} />
                <Route path="/mathematics" element={<Mathematics />} />
                <Route path="/physics" element={<Physics />} />
            </Routes>
        </Router>
    )
}