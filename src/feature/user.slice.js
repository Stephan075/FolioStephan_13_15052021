import { createSlice, current } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfos: null,
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
  },
});

export const { setUserData, editUser } = userSlice.actions;
export default userSlice.reducer;
