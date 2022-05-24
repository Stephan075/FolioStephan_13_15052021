import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../feature/token.slice";
import { setEmail, setPassword } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";

const LoginFormRedux = () => {
  const userRef = useRef();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { user, isError, isSuccess, message } = useSelector((state) => {
    return state.auth;
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // focus l'input username
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <main className="login-main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
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

          {/* {error && <p className="error-message">{error}</p>} */}
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

export default LoginFormRedux;
