import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/auth_reducer"
import homeReducer from "./reducers/home_reducer";
import productReducer from "./reducers/product_reduce";

export const store = configureStore({
      reducer: {
            user: userReducer,
            home: homeReducer,
            product: productReducer,
      }
});
