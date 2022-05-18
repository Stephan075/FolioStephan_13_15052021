import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../feature/token.slice";
import callApi from "../../hooks/callApi";

const LoginForm = ({ authenticate }) => {
  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // focus l'input username
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    // "tony@stark.com"
    // "password123"
    try {
      e.preventDefault();

      const token = await callApi.login(email, password);

      //Si il ya bien un user qui existe on auth et on redirect à la page profile
      if (token) {
        localStorage.setItem("token", token);

        authenticate();
        dispatch(setToken(token));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
