import { createSlice } from "@reduxjs/toolkit";

export const showLoginSlice = createSlice({
    name : "showLogin",
    initialState:{
        isLoginShow: false
    },

    reducers: {
        setIsLoginShow :(state, {payload})=>{
            state.isLoginShow = payload;
        }
    }
});

export const {setIsLoginShow} = showLoginSlice.actions;
export default showLoginSlice.reducer;