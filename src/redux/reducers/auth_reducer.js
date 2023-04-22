import { createSlice } from "@reduxjs/toolkit";
import {
  createNewUser,
  getLoggedUser,
  loginUser,
} from "../actions/auth_action";

const initialState = {
  users: [],
  isLoading: true,
  error: null,
  isLogged: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //
    builder.addCase(createNewUser.pending, (state) => {
      state.isLoading = true;
      state.isLogged = false;
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
      state.isLogged = true
    });
    builder.addCase(createNewUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.isLogged = false;
    });
    //
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.isLogged = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.isLogged = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.isLogged = false;
    });
    //
    builder.addCase(getLoggedUser.pending, (state) => {
      state.isLoading = true;
      state.isLogged = false;
    });
    builder.addCase(getLoggedUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.isLogged = true;
    });
    builder.addCase(getLoggedUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.isLogged = false;
    });
  },
});

export const { addUser, loggedUser, getUser } = userSlice.actions;
export default userSlice.reducer;
