import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, resetToken } = tokenSlice.actions;
export default tokenSlice.reducer;
