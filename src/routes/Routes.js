import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home PageName="Home Page" />} />
        <Route path="/login" element={<Login PageName="Login Page" />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
