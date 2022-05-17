import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useEffect, useState } from "react";
import Auth from "./guards/Auth";

function App() {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("user")).auth // recup ce que j'ai dans le local en string et le convertire en JSON et identifier la variable dan
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify({ auth }));
  }, [auth]);

  return (
    <>
      <Header auth={auth} logout={() => setAuth(false)} />
      <Routes>
        <Route path="/" element={<Home PageName="Home Page" />} />
        {!auth && (
          <>
            <Route
              path="/login"
              element={
                <Login
                  PageName="Login Page"
                  authenticate={() => setAuth(true)}
                />
              }
            />
          </>
        )}
        {auth && (
          <Route
            path="/profile"
            element={
              <Profile logout={() => setAuth(false)} PageName="Profile Page" />
            }
          />
        )}

        <Route
          path="*"
          element={<Navigate to={auth ? "/profile" : "/login"} />} //Navigate qui à remplacer le useHistory() sur la v6 de rrDom
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
