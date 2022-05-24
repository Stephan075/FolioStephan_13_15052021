import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import authService from "./authService";

// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// Login use
export const login = createAsyncThunk("login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (e) {
    const message =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
