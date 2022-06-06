import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";

/**
 *
 * @param { function } - permet d'afficher ou non le formulaire
 * @returns {HTMLElement}
 */
const Form = ({ setDisplayForm }) => {
  const [inputForm, setInputForm] = useState({
    firstName: "",
    lastName: "",
  });

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userInfos.userInfos);

  useEffect(() => {
    setInputForm({
      firstName: userData?.firstName,
      lastName: userData?.lastName,
    });
  }, [userData?.firstName, userData?.lastName]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (
        inputForm.firstName !== userData.firstName ||
        inputForm.lastName !== userData.lastName
      ) {
        const update = await callApi.updateCurrentUserData(
          inputForm.firstName,
          inputForm.lastName
        );

        const { firstName, lastName } = update;
        const infosUpdate = { firstName, lastName };
        dispatch(editUser(infosUpdate));
      } else {
        console.log("aucune donnée n'est modifiée");
      }
      setDisplayForm(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="inputList">
        <div>
          <label htmlFor="firstname" hidden>
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            defaultValue={inputForm.firstName}
            onChange={(e) =>
              setInputForm({ ...inputForm, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lastname" hidden>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            defaultValue={inputForm.lastName}
            onChange={(e) =>
              setInputForm({ ...inputForm, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="user-form--btn">
        <button type="submit">Save</button>
        <button type="button" onClick={() => setDisplayForm(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
