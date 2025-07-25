import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar-container'>
        <div>
            <h3>React app</h3>
        </div>

        <ul className='navbar-links'>
            <li>Home</li>
            <li>Products</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

export default Navbar