import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setUserData } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";
import Form from "./Form";

const Userinfo = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const [currUserInfo, setCurrUserInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const getUserData = useSelector((state) => state.userInfos.userInfos);

  useEffect(() => {
    setCurrUserInfo({
      firstName: getUserData?.firstName,
      lastName: getUserData?.lastName,
    });
  }, [getUserData]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {currUserInfo.firstName} {currUserInfo.lastName} !
      </h1>
      {displayForm ? (
        <Form
          setDisplayForm={setDisplayForm}
          currUserInfo={currUserInfo}
          setCurrUserInfo={setCurrUserInfo}
        />
      ) : (
        <button className="edit-button" onClick={() => setDisplayForm(true)}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Userinfo;
