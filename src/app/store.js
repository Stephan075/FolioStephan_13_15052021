import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../feature/token.slice";

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
});
