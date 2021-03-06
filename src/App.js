import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetData } from "./feature/user.slice";
import { resetToken } from "./feature/token.slice";

function App() {
  const dispatch = useDispatch();

  // recup ce que j'ai dans le local en string et le convertire en JSON et identifier la variable dan
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth"))?.auth
      ? JSON.parse(localStorage.getItem("auth"))?.auth
      : false
  );

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify({ auth }));
  }, [auth]);

  //permet de se déconnecter
  const logout = () => {
    setAuth(false);
    dispatch(resetData());
    dispatch(resetToken());
    localStorage.removeItem("token");
  };
  return (
    <>
      <Header auth={auth} logout={logout} />
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
