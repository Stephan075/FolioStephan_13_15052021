import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";
import Form from "./Form";

const Userinfo = () => {
  const dispatch = useDispatch();

  const [displayForm, setDisplayForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const userData = useSelector((state) => state.userInfos.userInfos);

  useEffect(() => {
    setFirstName(userData?.firstName);
    setLastName(userData?.lastName);
  }, [userData?.firstName, userData?.lastName]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName} !
      </h1>
      {displayForm ? (
        <Form
          setDisplayForm={setDisplayForm}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
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
