import React, { useState } from "react";
import { useSelector } from "react-redux";

const Userinfo = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const userData = useSelector((state) => state.userInfos.userInfos);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log(userData);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userData?.firstName} {userData?.lastName}!
      </h1>
      {displayForm ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" />
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
