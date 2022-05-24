import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../feature/token.slice";
import { setEmail, setPassword } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";

const LoginForm = ({ authenticate }) => {
  const userRef = useRef();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const email = useSelector((state) => state.userInfos.email);
  const password = useSelector((state) => state.userInfos.password);

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

      if (token.status === 400) {
        let errMessage = token.message.split(":");
        setError(errMessage[1]);
      } else {
        //Si il ya bien un user qui existe on auth et on redirect à la page profile
        if (token) {
          localStorage.setItem("token", token);

          authenticate();
          dispatch(setToken(token));
        }
      }
      dispatch(setEmail(null));
      dispatch(setPassword(null));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="login-main bg-dark">
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
              onChange={(e) => dispatch(setEmail(e.target.value))}
              // value={email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => dispatch(setPassword(e.target.value))}
              // value={password}
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          {/* {console.log(error)} */}

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
