import React, { useEffect } from "react";
import LoginForm from "../../components/Login/LoginForm";
import LoginFormRedux from "../../components/Login/LoginFormRedux";

function Login({ PageName, authenticate }) {
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);

  // return <LoginForm authenticate={authenticate} />;
  return <LoginFormRedux />;
}

export default Login;
