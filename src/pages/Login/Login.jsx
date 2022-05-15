import React, { useEffect } from "react";
import LoginForm from "../../components/Login/LoginForm";

function Login({ PageName }) {
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);

  return <LoginForm />;
}

export default Login;
