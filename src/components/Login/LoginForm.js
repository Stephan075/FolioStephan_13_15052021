import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../feature/token.slice";
import callApi from "../../hooks/callApi";

const LoginForm = ({ authenticate }) => {
  const userRef = useRef();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  // focus l'input username
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const onChange = (e) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

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
              id="email"
              name="email"
              ref={userRef}
              autoComplete="off"
              onChange={onChange}
              placeholder="Enter your email"
              value={email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={onChange}
              placeholder="Enter password"
              value={password}
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
