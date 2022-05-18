import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const update = await callApi.editUser(firstName, lastName);
      dispatch(setUserData(update));
      setDisplayForm(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName} !
      </h1>
      {displayForm ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              defaultValue={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              defaultValue={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setDisplayForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className="edit-button" onClick={() => setDisplayForm(true)}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Userinfo;
