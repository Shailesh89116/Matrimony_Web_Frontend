import React from 'react'
import './userCheck.scss'

const UserCheck = ({user}) => {
  return (
    <div className="userCheck">
        <div className="checkWrapper">
        <input type="checkbox" className='check' name='checkbox'/>
        <span className='text'>{user}</span>
        </div>
    </div>
  )
}

export default UserCheck
