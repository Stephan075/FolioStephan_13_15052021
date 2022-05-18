import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";

const Form = ({ setDisplayForm, currUserInfo, setCurrUserInfo }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userInfos.userInfos);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (
        currUserInfo.firstName !== userData.firstName ||
        currUserInfo.lastName !== userData.lastName
      ) {
        const update = await callApi.editUser(
          currUserInfo.firstName,
          currUserInfo.lastName
        );
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
          name="firstName"
          defaultValue={currUserInfo.firstName}
          onChange={(e) =>
            setCurrUserInfo({ ...currUserInfo, firstName: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue={currUserInfo.lastName}
          onChange={(e) =>
            setCurrUserInfo({ ...currUserInfo, lastName: e.target.value })
          }
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
