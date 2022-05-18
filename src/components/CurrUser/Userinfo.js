import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Userinfo = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");

  const userData = useSelector((state) => state.userInfos.userInfos);

  useEffect(() => {
    setFirstName(userData?.firstName);
    setLastname(userData?.lastName);
  }, [userData?.firstName, userData?.lastName]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastname} !
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
              defaultValue={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <button>Save</button>
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
