import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsRegShow } from '../../state mangement/showRegisterReducer';
import "./getStated.scss"

const GetStarted = () => {

  const dispatch = useDispatch();

  const getStarted=()=>{
    dispatch(setIsRegShow(true))
  }

  return (
    <div className='getStarted'>
        <div className="getStarted_wrapper">
        <span className='getStarted_text'>Your story is waiting to happen!</span>
        <button className="getStarted_btn" onClick={getStarted}>Get Started</button>
        </div>
    </div>
  )
}

export default GetStarted
