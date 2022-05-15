import "../conf/axios-conf";
import * as axios from "axios";

function login(email, password) {
  return axios
    .post("/user/login", JSON.stringify({ email, password }), {
      headers: { "Content-Type": "application/json" },
      // `withCredentials` indique si oui ou non les demandes de contrôle d'accès intersite
      // withCredentials: true,
    })
    .then((response) => {
      const accessToken = response?.data?.body?.token;

      console.log(accessToken);

      return accessToken;
    });
}

const callApi = {
  login,
};
export default callApi;
