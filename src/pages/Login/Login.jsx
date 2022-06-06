import React, { useEffect } from "react";
import LoginForm from "../../components/Login/LoginForm";

/**
 *
 * @param {string} PageName
 * @param {function} authenticate - Permet de définir si l'utilisateur est connecté
 * @returns {React.Component}
 */
function Login({ PageName, authenticate }) {
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);

  return <LoginForm authenticate={authenticate} />;
}

export default Login;
