import "../conf/axios-conf";
import * as axios from "axios";

// envoyer email, password au back qui fera la vérification du pseudo&password si c'est ok il nous envoi un token
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
    })
    .catch(function (e) {
      // if (window.console || window.console.firebug) {
      //   console.clear();
      // }
      if (e.response) {
        return e.response.data;
      }
    });
};

// return les info de l'utilisateur actuel
const getCurrentUserData = () => {
  return axios.post("/user/profile").then((response) => {
    // console.log(response.data.body);
    return response?.data?.body;
  });
};

// permet de modifier le firstName et lastName de l'utilisateur actuel
const updateCurrentUserData = (firstName, lastName) => {
  return axios
    .put("/user/profile", { firstName, lastName })
    .then((response) => {
      console.log(response?.data?.body);
      return response?.data?.body;
    });
};

const callApi = {
  login,
  getCurrentUserData,
  updateCurrentUserData,
};
export default callApi;
