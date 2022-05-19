import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({ auth, logout }) {
  const [firstName, setFirstName] = useState("");
  const userData = useSelector((state) => state.userInfos.userInfos);

  useEffect(() => {
    setFirstName(userData?.firstName);
  }, [userData?.firstName, userData?.lastName]);

  return (
    <nav className="main-nav">
      {/* {console.log(auth)} */}
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="userInfo">
        {!auth ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            &thinsp;Sign In
          </Link>
        ) : (
          <>
            <Link className="main-nav-item" to="./user.html">
              <i className="fa fa-user-circle"></i> {firstName}
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
