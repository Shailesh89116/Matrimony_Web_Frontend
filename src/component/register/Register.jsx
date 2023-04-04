import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsRegShow } from '../../state mangement/showRegisterReducer';
import UserCheck from '../userCheck/UserCheck';
import "./register.scss"

const Register = () => {
    const dispatch = useDispatch();

    const {isRegShow} = useSelector(state => state.showRegister);

    //to close register window
    const close=()=>{
        dispatch(setIsRegShow(!isRegShow))
    }

  return (
    <div className={`${isRegShow ? "showReg" : ""} register`}>
        
        <div className="reg_wrapper">
            <div className="close">
            <span className="closeText" onClick={close}>close</span>
            </div>
            <div className="regTop">
                <div className="regLogo"></div>
            <div className="userSelection">
                <h1 className="regHeading">This Profile is for</h1>
               <div className="selectionItem">
               <UserCheck user="My Self"/>
               <UserCheck user="My Son"/>
               <UserCheck user="My Daughter"/>
               <UserCheck user="My Brother"/>
               <UserCheck user="My Sister"/>
               <UserCheck user="My Friend"/>
               <UserCheck user="Relative"/>
               </div>
            </div>
            <div className="genderContainer">
            <div className="genderHeading">
                <span className="genderHead">Gender</span>
            </div>
            <div className="userGender">
                <div className="gender">
                    <UserCheck user="Male"/>
                    <UserCheck user="Female"/>
                </div>
            </div>
            </div>
            <div className="regContinue">
            <button className="continue_btn">Continue</button>
            </div>
            </div>
        </div>
    </div>
  )
}
import "./register.scss"

export default Register
