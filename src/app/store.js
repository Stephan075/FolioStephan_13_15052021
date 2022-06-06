import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.slice";
import tokenReducer from "../feature/token.slice";

export default configureStore({
  reducer: {
    userInfos: userReducer,
    token: tokenReducer,
  },
});
