import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/auth_reducer"

export const store = configureStore({
      reducer: {
            user: userReducer
      }
});
