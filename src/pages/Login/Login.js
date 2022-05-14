import React, { useEffect } from "react";

function Login({ PageName }) {
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);
  return (
    <div>
      <h1>This is the Login Page</h1>
    </div>
  );
}

export default Login;
