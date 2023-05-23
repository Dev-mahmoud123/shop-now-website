import { createSlice } from "@reduxjs/toolkit"
import { deleteFavoriteProducts, getFavoriteProducts } from "../actions/favorite_action";


const initialState = {
      favorites: {},
      error: null,
      isLoading:true
}

const favoriteSlice = createSlice({
      name: 'favorite',
      initialState,
      reducers:{},
      extraReducers:(builder)=> { 
            builder.addCase(getFavoriteProducts.pending , (state)=> {
                   state.isLoading = true;
            })
            builder.addCase(getFavoriteProducts.fulfilled , (state, action)=> {
                  state.isLoading = false;
                  state.favorites = action.payload;
            })
            builder.addCase(getFavoriteProducts.rejected , (state,action)=> {
                  state.isLoading = false;
                  state.error = action.payload;
            })
            // 
            builder.addCase(deleteFavoriteProducts.pending , (state)=> {
                  state.isLoading = true;
            })
            builder.addCase(deleteFavoriteProducts.fulfilled , (state, action)=> {
                  state.isLoading = false;
                  state.favorites = action.payload;
            })
            builder.addCase(deleteFavoriteProducts.rejected , (state, action)=> {
                  state.isLoading = false;
                  state.error = action.payload;
            })

      }
})

export const {getFavoritesProducts , deleteFavoritesProducts} = favoriteSlice.actions;
export default favoriteSlice.reducer;