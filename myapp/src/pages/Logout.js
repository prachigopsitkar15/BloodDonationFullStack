import React from 'react'
import Sidenav from '../components/Sidenav'
import '../App.css';
import success from './success.png';
export default function Logout() {
 
  return (
    <div className='logout'>
     
      <div className='logoutpage'>
        <div className='headlogout'>
            <h1> Spill a little love,<br/> Donate Blood </h1>
        </div>
        <div className='mainlogout'>
            <h1>You have Logged Out </h1>
            <img className='logoutimg' src={success}/>
            <h2>Thank You for using Blood Management System </h2>
        </div>
      </div>
    </div>
  )
}
