import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginShow } from '../../state mangement/showLoginReducer';
import { setIsRegShow } from '../../state mangement/showRegisterReducer';
import './navbar.scss'

const Navbar = () => {

  const {isLoginShow} = useSelector(state => state.showLogin);
  const {isRegShow} = useSelector(state=> state.showRegister);
  const dispatch = useDispatch();

  const handleLoginClick=()=>{
    dispatch(setIsLoginShow(!isLoginShow))
  }

  const handleRegisterClick=()=>{
    dispatch(setIsRegShow(!isRegShow))
  }

  return (
    <div className='container'>
        <div className="wrapper">
        <div className="left"></div>
            <div className="center">Kapol Milan</div>
            <div className="right">
               <span className="auth" onClick={handleLoginClick}>Login</span>
                <span className="auth" onClick={handleRegisterClick}>Register</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
