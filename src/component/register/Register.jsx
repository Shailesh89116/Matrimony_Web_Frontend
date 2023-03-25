import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsRegShow } from '../../state mangement/showRegisterReducer';
import "./register.scss"

const Register = () => {
    const dispatch = useDispatch();
    const {isRegShow} = useSelector(state => state.showRegister);
    console.log(isRegShow);
    const close=()=>{
        dispatch(setIsRegShow(!isRegShow))
    }
  return (
    <div className={`${isRegShow ? "showReg" : ""} register`}>
        
        <div className="reg_wrapper">
            <div className="close">
            <span className="closeText" onClick={close}>close</span>
            </div>
            <div className="reg_form">
            <div className="reg_top">
                <p className="reg_logo">Kapol Milan</p>
                <p className="reg_head">Welcome back! Please reg</p>
            </div>
            <div className="reg_center">
                <div className="reg_field">
                <p className="reg_Text">Email ID</p>
                <input type="text" className="reg_input" placeholder='Enter Enail ID'/>
                </div>
                <div className="reg_field">
                <p className="reg_Text">Password</p>
                <input type="password" className="reg_input" placeholder='Enter Password'/>
                </div>
                <p className="forgot">Forgot Password?</p>
                <button className="reg_btn">Register</button>
            </div>
            <div className="reg_bottom">
                <p className="bottom_txt">New here? <span className='signUp'>{`Sign Up Free>`}</span></p>
            </div>
            </div>
        </div>
    </div>
  )
}
import "./register.scss"

export default Register
