import { createSlice } from "@reduxjs/toolkit";
import { getBanner, getCategory } from "../actions/home_action";

const initialState = {
  banners: {},
  categories: {},
  isLoading: true,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBanner.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.banners = action.payload;
    });
    builder.addCase(getBanner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories =action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { getBanners , getCategories } = homeSlice.actions;
export default homeSlice.reducer;
