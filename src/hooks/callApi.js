import "../conf/axios-conf";
import * as axios from "axios";

const login = (email, password) => {
  return axios
    .post("/user/login", JSON.stringify({ email, password }), {
      headers: { "Content-Type": "application/json" },
      // `withCredentials` indique si oui ou non les demandes de contrôle d'accès intersite
      // withCredentials: true,
    })
    .then((response) => {
      const accessToken = response?.data?.body?.token;

      // console.log(accessToken);

      return accessToken;
    });
};

const getCurrentUserData = () => {
  return axios.post("/user/profile").then((response) => {
    // console.log(response.data.body);
    return response?.data?.body;
  });
};

const editUser = (firstName, lastName) => {
  return axios
    .put("/user/profile", { firstName, lastName })
    .then((response) => {
      console.log(response);
      return response?.data?.body;
    });
};

const callApi = {
  login,
  getCurrentUserData,
  editUser,
};
export default callApi;
