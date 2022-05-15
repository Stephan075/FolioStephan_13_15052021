import React, { useEffect } from "react";
import LoginForm from "../../components/Login/LoginForm";

function Login({ PageName, authenticate }) {
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);

  return <LoginForm authenticate={authenticate} />;
}

export default Login;
