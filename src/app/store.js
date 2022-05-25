import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../feature/token.slice";
import userReducer from "../feature/user.slice";

export default configureStore({
  reducer: {
    userInfos: userReducer,
    token: tokenReducer,
  },
});
