import React from "react";
import { useSelector } from "react-redux";

const Userinfo = () => {
  const userData = useSelector((state) => state.userInfos.userInfos);

  console.log(userData);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userData?.firstName} {userData?.lastName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default Userinfo;
