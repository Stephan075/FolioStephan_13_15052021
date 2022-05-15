import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useEffect, useState } from "react";
import Auth from "./guards/Auth";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Header user={user} logout={() => setUser(false)} />
      <Routes>
        <Route path="/" element={<Home PageName="Home Page" />} />
        {!user && (
          <>
            <Route
              path="/login"
              element={
                <Login
                  PageName="Login Page"
                  authenticate={() => setUser(true)}
                />
              }
            />
          </>
        )}
        {user && (
          <Route
            path="/profile"
            element={
              <Profile logout={() => setUser(false)} PageName="Profile Page" />
            }
          />
        )}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
