import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div  className='Navbar'>
        <nav class="navbar">
            <div class="logo">Movies API</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Movies Details</a></li>
                <li><a href="#services">Favorites</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar