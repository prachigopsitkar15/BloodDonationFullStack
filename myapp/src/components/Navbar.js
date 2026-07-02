import React from 'react'
import '../App.css';
export default function Navbar() {
  return (
    <nav className='navbarnav'>
        <a href="/" className='site-title'>Blood Management System</a>
        <ul className='navbarul'>
            <li><a className='navbarli' href="/home">Home</a></li>
            
            <li><a className='navbarli' href="/admin">Login</a></li>
            
        </ul>
    </nav>
  )
}
