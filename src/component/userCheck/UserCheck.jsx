import React, { useState } from 'react'
import './userCheck.scss'

const UserCheck = ({user}) => {

  const [select, setSelect]=useState(false)

  const handleClick=()=>{
    setSelect(true)
  }

  return (
    <div className="userCheck">
        <div className="checkWrapper">
        <input type="radio" className={select ? "check active" : "check"} name='checkbox' onClick={handleClick}/>
        <span className='text'>{user}</span>
        </div>
    </div>
  )
}

export default UserCheck
