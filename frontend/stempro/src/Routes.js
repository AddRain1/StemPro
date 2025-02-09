import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage.js";
import { NotFoundPage } from "./components/NotFoundPage.js";
import { ProblemListPage } from "./components/ProblemListPage.js";
import ProblemDetail from "./components/ProblemDetail.js";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate to="/homepage" />} />
        <Route path="/homepage" exact element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/:subject" element={<ProblemListPage />} />
        <Route path="/:subject/problem/:id/*" element={<ProblemDetail />} />
      </Routes>
    </Router>
  );
};
