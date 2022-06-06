import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers:{
        login(){},
        register(){},
    }
});

export const authActions = authSlice.actions;


const store = configureStore({
    reducer: { auth:authSlice.reducer } 
});

export default store;