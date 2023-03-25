import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
     <div className="wrapper">
     <div className="fContainer">
        <p className="heading">Need Help?</p><hr />
        <ul className='fList'>
            <li className='fListItem'>Member Login</li>
            <li className='fListItem'>SignUp</li>
            <li className='fListItem'>Partner Search</li>
            <li className='fListItem'>Customer Support</li>
        </ul>
     </div>
     <div className="fContainer">
        <p className="heading">Company</p><hr />
        <ul className='fList'>
            <li className='fListItem'>About Us</li>
            <li className='fListItem'>Contact Us</li>
        </ul>
     </div>
     <div className="fContainer">
        <p className="heading">Privacy & You</p><hr />
        <ul className='fList'>
            <li className='fListItem'>Term of Use</li>
            <li className='fListItem'>Privacy Policy</li>
            <li className='fListItem'>Be Safe Online</li>
            <li className='fListItem'>Report Misuse</li>
        </ul>
     </div>
     </div>
     <div className="copyRight">
        <p className='copyText'>© 2014 Kapolmilan.com. All Rights Reserved.</p>
     </div>
    </div>
  )
}

export default Footer
