import { createSlice } from "@reduxjs/toolkit";

const showRegisterSlice = createSlice({
    name: "showRegister",
    initialState:{
        isRegShow : false
    },

    reducers:{
        setIsRegShow:(state, {payload})=>{
            state.isRegShow = payload
        }
    }
});

export const {setIsRegShow} = showRegisterSlice.actions;
export default showRegisterSlice.reducer;