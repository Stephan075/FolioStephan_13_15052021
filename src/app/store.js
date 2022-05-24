import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../feature/token.slice";
import authReducer from "../feature/auth.slice";
import userReducer from "../feature/user.slice";

export default configureStore({
  reducer: {
    authSlice: authReducer,
    token: tokenReducer,
    userInfos: userReducer,
  },
});
