import { configureStore, createSlice } from "@reduxjs/toolkit";

import authSlice from "./Auth/AuthSlice"

const store = configureStore({
    reducer: { 
        auth:authSlice.reducer 
    } 
});

export default store;