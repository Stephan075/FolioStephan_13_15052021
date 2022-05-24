import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth.slice";
import tokenReducer from "../feature/token.slice";
import userReducer from "../feature/user.slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    userInfos: userReducer,
    token: tokenReducer,
  },
});
