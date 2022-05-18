import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";

const Form = ({
  setDisplayForm,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userInfos.userInfos);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (firstName !== userData.firstName || lastName !== userData.lastName) {
        const update = await callApi.editUser(firstName, lastName);
        dispatch(setUserData(update));
      } else {
        console.log("aucune donnée n'est modifiée");
      }
      setDisplayForm(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
  );
};

export default Form;
