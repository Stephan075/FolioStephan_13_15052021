import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            name="Home page"
            path="/"
            element={<Home name="Home Page" />}
          />
          <Route path="/login" element={<Login PageName="Login Page" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
