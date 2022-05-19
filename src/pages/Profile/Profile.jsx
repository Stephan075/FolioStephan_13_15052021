import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountCard from "../../components/CurrUser/AccountCard";
import AccountItem from "../../components/CurrUser/AccountItem";
import Userinfo from "../../components/CurrUser/Userinfo";
import setAuthToken from "../../conf/axios-conf";
import { setUserData } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";

// immer
function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    try {
      const getUserInfo = async () => {
        setAuthToken(token);
        const userData = await callApi.getCurrentUserData();

        if (userData) {
          dispatch(setUserData(userData));
        }
      };
      getUserInfo();
    } catch (e) {
      console.log(e);
    }
  }, [token, dispatch]);

  return (
    <main className="main bg-dark">
      <Userinfo />
      <h2 className="sr-only">Accounts</h2>
      <AccountCard />
    </main>
  );
}

export default Profile;
