import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/auth_reducer"
import homeReducer from "./reducers/home_reducer";

export const store = configureStore({
      reducer: {
            user: userReducer,
            home: homeReducer,
      }
});
