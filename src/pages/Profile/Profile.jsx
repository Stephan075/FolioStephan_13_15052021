import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import setAuthToken from "../../conf/axios-conf";
import callApi from "../../hooks/callApi";

function Profile() {
  // const token = useSelector((state) => state.token.token);
  // console.log(token);
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      const getUserInfo = async () => {
        setAuthToken(token);
        const userData = await callApi.getCurrentUserData(token);
      };
      getUserInfo();
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  return (
    <div>
      <p>profile</p>
    </div>
  );
}

export default Profile;
