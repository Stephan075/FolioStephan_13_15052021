import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useState } from "react";
import Auth from "./guards/Auth";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Header logout={() => setUser(false)} />
      <Routes>
        <Route path="/" element={<Home PageName="Home Page" />} />

        <Route
          path="/login"
          element={
            <Login PageName="Login Page" authenticate={() => setUser(true)} />
          }
        />

        <Route
          path="/profile"
          element={
            <Profile logout={() => setUser(false)} PageName="Profile Page" />
          }
        />
      </Routes>
      <Footer />
    </>
  );
  // <div className="App">
  //   <Router>
  //     <Header logout={() => setUser(false)} />
  //     <Routes>
  //       {!user && (
  //         <>
  //           <Route path="/" element={<Home PageName="Home Page" />} />

  //           <Route path="/login" element={<Login PageName="Login Page" />} />
  //         </>
  //       )}

  //       {!user && (
  //         <Route
  //           path="/profile"
  //           element={
  //             <Profile
  //               logout={() => setUser(false)}
  //               PageName="Profile Page"
  //             />
  //           }
  //         />
  //       )}

  //       <Route path="*" element={<ErrorPage />} />
  //     </Routes>
  //     <Footer />
  //   </Router>
  // </div>
}

export default App;
