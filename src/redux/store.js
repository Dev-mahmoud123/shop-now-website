import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/auth_reducer"
import homeReducer from "./reducers/home_reducer";
import productReducer from "./reducers/product_reduce";
import favoriteReducer from "./reducers/favorite_reducer";
import cartReducer from "./reducers/cart_reducer";

export const store = configureStore({
      reducer: {
            user: userReducer,
            home: homeReducer,
            product: productReducer,
            favorite: favoriteReducer,
            cart:cartReducer
      }
});
