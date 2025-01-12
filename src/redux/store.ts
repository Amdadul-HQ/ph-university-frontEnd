import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"
import { baseApi } from "./api/baseApi";

export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        auth: authReducer
    },
    middleware:(getDefaultMiddlewar) =>{
        getDefaultMiddlewar().concat(baseApi.middleware);
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
