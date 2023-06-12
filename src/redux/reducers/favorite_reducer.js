import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorite,
  deleteFavoriteProducts,
  getFavoriteProducts,
} from "../actions/favorite_action";

const initialState = {
  favorites: [],
  error: null,
  isLoading: true,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // use add product to favorites action
    builder.addCase(addToFavorite.pending, (state) => {
      state.isLoading = true;
      state.inFavorite = false;
    });
    builder.addCase(addToFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favorites.push(action.payload);
      state.inFavorite = true;
    });
    builder.addCase(addToFavorite.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.inFavorite = false;
    });
    builder.addCase(getFavoriteProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFavoriteProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favorites = action.payload;
    });
    builder.addCase(getFavoriteProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //
    builder.addCase(deleteFavoriteProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteFavoriteProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favorites = action.payload;
    });
    builder.addCase(deleteFavoriteProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {  addProductToFavorite, getFavoritesProducts, deleteFavoritesProducts } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
