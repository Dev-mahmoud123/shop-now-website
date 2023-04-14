import createSlice from "@reduxjs/toolkit";
import {
  createNewUser,
  getLoggedUser,
  loginUser,
} from "../actions/auth_action";

const initState = {
  users: [],
  isLoading: true,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initState,
  reducers: {},
  extraReducers: (builder) => {
    //
    builder.addCase(createNewUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createNewUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    //
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    //
    builder.addCase(getLoggedUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLoggedUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getLoggedUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addUser  , loggedUser, getUser} = userSlice.action;
export default userSlice.reducer;
