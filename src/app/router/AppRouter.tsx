import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { Funds, Fund, Companies, Company, IpoCalendar } from "../pages";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="documents" element={<h1>I am Documents</h1>} />
          <Route path="archive" element={<h1>I am Archive</h1>} />
          <Route path="users" element={<h1>I am Members</h1>} />
          <Route path="profile" element={<h1>I am Profile</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
