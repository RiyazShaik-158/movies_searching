import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    const [searchStarted,setSearchStarted] = useState(false);
  return (
    <div className='navbar_head'>
      <h1 className='navbar_title'>Movies Searching</h1>
      <div className='navbar_menu'>
        <a href='#'>Home</a>
        <a href='#'>Search</a>
        <a href='#'>SignUp/Login</a>
        <a href='#'>Favorites</a>
      </div>
    </div>
  )
}

export default Navbar
