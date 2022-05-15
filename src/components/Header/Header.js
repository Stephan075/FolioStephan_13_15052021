import React from "react";
import { Link } from "react-router-dom";

function Header({ user, logout }) {
  return (
    <nav className="main-nav">
      {console.log(user)}
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!user ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <>
            <Link className="main-nav-item" to="./user.html">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link onClick={logout} className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
