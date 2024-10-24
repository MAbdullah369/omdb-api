import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div class='Navbar'>
    <nav class="navbar">
        <div class="logo">Movies API</div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Movies Details</a></li>
            <li><a href="#services">Favorites</a></li>
        </ul>
        <div class="search-container">
            <input type="text" placeholder="Search..." class="search-input"/>
            <button class="search-button">Search</button>
        </div>
    </nav>
</div>
  )
}

export default Navbar