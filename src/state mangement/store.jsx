import { configureStore } from "@reduxjs/toolkit";
import showLoginReducer from "./showLoginReducer";
import showRegisterReducer from "./showRegisterReducer";



export default configureStore({
    reducer: {
        showLogin: showLoginReducer,
        showRegister : showRegisterReducer
    }
})