import React, { useEffect } from "react";
import callApi from "../../hooks/callApi";

function Profile() {
  useEffect(() => {
    try {
      // const getUserInfo = async () => {
      //   await callApi.getCurrentUserData();
      // };
      // getUserInfo();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <div>Profile</div>;
}

export default Profile;
