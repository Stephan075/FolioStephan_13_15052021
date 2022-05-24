import { createSlice, current } from "@reduxjs/toolkit";

// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    message: "",
  },
  //logique
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
