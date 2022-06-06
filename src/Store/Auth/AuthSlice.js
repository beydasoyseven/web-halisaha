import {createSlice} from "@reduxjs/toolkit";
import data from "./data";

const authSlice = createSlice({
    name: 'auth',
    initialState: data,
    reducers:{
        login(state, action){
            let username = action.payload.username;
            let password = action.payload.password;

            let userDatas = state.user.array;
            for (let i = 0; i < userDatas.length; i++) {
                let user = userDatas[i];
                if (user.username === username){
                    if (user.password === password){
                        state.auth.loginMessage = "Successfully Logged In !";
                        state.auth.username = user.username;
                        state.auth.userID = user.userId;
                        state.auth.isSuper = user.isSuper;
                        state.auth.isLoggedIn = true;
                        //TODO: Navigate MainPage
                        break;
                    }else{
                        state.auth.loginMessage = "Username or Password Wrong !";
                    }
                }else{
                    state.auth.loginMessage = "Username or Password Wrong !";
                }
            }
        },
        register(state, action){
            let username = action.payload.username;
            let email = action.payload.email;
            let password = action.payload.password;
            let repassword = action.payload.repassword;

            let userDatas = state.user.array;

            let foundFlag = false;
            for (let i = 0; i < userDatas.length; i++) {
                let user = userDatas[i];
                if (user.username === username || user.email === email) {
                    foundFlag = true;
                    break;
                }
            }

            if (foundFlag) {
                state.auth.registerMessage = "Username Or Email Already Taken !";
            }else{
                let userData = {
                    username:username,
                    password:password,
                    userId: state.user.userCount,
                    isSuper: false,
                    //TODO: Is super eklenecek
                }
                state.user.array = [...state.user.array,userData];
                state.user.userCount = state.user.userCount+1;
                console.log(userData);
            }

        },
        addField(action, payload){

        },
        addBooking(action, payload){

        }
    }
});

export const authAction = authSlice.actions;

export default authSlice;