import { createSlice, current } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfos: null,
    email: null,
    password: null,
  },
  //logique
  reducers: {
    setUserData: (state, action) => {
      state.userInfos = action.payload;
    },
    editUser: (state, action) => {
      // console.log(current(state.userInfos));
      // console.log(action.payload);

      state.userInfos = {
        ...state.userInfos,
        ...action.payload,
      };
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setUserData, editUser, setEmail, setPassword } =
  userSlice.actions;
export default userSlice.reducer;
