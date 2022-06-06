import * as axios from "axios";

// Définir une URL de base de façon globale
axios.defaults.baseURL = "http://localhost:3001/api/v1";

// axios.defaults.headers.common[
//   "Authorization"
// ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODE1YTk4YmFiNGMyMGUyYzZmNTRhYSIsImlhdCI6MTY1MjgyNjYzMiwiZXhwIjoxNjUyOTEzMDMyfQ.9hPEyv8_HydLCMRgmQHckgEKgInqWOzOhab3if1_ods`;

export default function setAuthToken(token) {
  // axios.defaults.headers.common["Authorization"] = "";
  // delete axios.defaults.headers.common["Authorization"];

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}
