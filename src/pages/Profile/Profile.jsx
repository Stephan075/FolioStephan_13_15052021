import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountCard from "../../components/CurrUser/AccountCard";
import Userinfo from "../../components/CurrUser/Userinfo";
import setAuthToken from "../../conf/axios-conf";
import { setUserData } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";

// immer
function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.userInfos.userInfos);

  useEffect(() => {
    try {
      const getUserInfo = async () => {
        setAuthToken(token);
        const userData = await callApi.getCurrentUserData();

        userData && dispatch(setUserData(userData));
      };
      getUserInfo();
    } catch (e) {
      console.log(e);
    }
  }, [token, dispatch]);

  useEffect(() => {
    document.title = `Argent Bank -  ${user?.firstName} ${user?.lastName}`;
  }, [user]);

  return (
    <main className="main bg-dark">
      <Userinfo />
      <h2 className="sr-only">Accounts</h2>
      <AccountCard />
    </main>
  );
}

export default Profile;
