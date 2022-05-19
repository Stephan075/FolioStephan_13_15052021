import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";

const Userinfo = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [user, setUser] = useState("");

  const getUserData = useSelector((state) => state.userInfos.userInfos);

  useEffect(() => {
    setUser(getUserData);
  }, [getUserData]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user?.firstName} {user?.lastName} !
      </h1>
      {displayForm ? (
        <Form setDisplayForm={setDisplayForm} />
      ) : (
        <button className="edit-button" onClick={() => setDisplayForm(true)}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Userinfo;
