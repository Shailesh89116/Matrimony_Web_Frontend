import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoginShow } from '../../state mangement/showLoginReducer';
import { setIsRegShow } from '../../state mangement/showRegisterReducer';
import "./login.scss"

const Login = () => {

    const dispatch = useDispatch();

    const {isLoginShow} = useSelector(state => state.showLogin);

    //to close login window
    const close=()=>{
        dispatch(setIsLoginShow(false))
    }

    //to close login and open register window
    const handleReg=()=>{
        dispatch(setIsLoginShow(false));
        dispatch(setIsRegShow(true))
    }
    
  return (
    <div className={`${isLoginShow ? "show" : ""} login`}>
        <div className="login_wrapper">
            <div className="close">
            <span className="closeText" onClick={close}>close</span>
            </div>
            <div className="login_form">
            <div className="login_top">
                <p className="login_logo">Kapol Milan</p>
                <p className="login_head">Welcome back! Please Login</p>
            </div>
            <div className="login_center">
                <div className="login_field">
                <p className="login_Text">Email ID</p>
                <input type="text" className="login_input" placeholder='Enter Enail ID'/>
                </div>
                <div className="login_field">
                <p className="login_Text">Password</p>
                <input type="password" className="login_input" placeholder='Enter Password'/>
                </div>
                <p className="forgot">Forgot Password?</p>
                <button className="login_btn">Login</button>
            </div>
            <div className="login_bottom">
                <p className="bottom_txt">New here? <span className='signUp' onClick={handleReg}>{`Sign Up Free>`}</span></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login
