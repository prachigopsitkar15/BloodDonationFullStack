import React from 'react'
import '../App.css';
export default function Sidenav() {
  return (
    <div className ="sidenav"> 
      <ul className="sidenavul">
      <li><a className='navbarli' href="/donor">Donor</a></li>
        <li><a className='navbarli' href="/patient">Patient</a></li>
        <li><a className='navbarli'  href="/donation">Donation</a></li>
        <li><a className='navbarli'  href="/request">Blood Reque</a></li>
        <li><a className='navbarli'  href="/stock">Blood Stock</a></li>
        <li><a className='navbarli'  href="/logout">Log Out</a></li>
      </ul>
      </div>
  )
}
