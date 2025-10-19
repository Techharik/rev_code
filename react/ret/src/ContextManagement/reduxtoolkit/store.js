import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import { logger } from 'react-redux'
export const store = configureStore({
    reducer: { user: userReducer },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
    // .concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});
