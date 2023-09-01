import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [searchStarted,setSearchStarted] = useState(false);
  return (
    <div className='navbar_head'>
      <h1 className='navbar_title'>Movies Searching</h1>
      <div className='navbar_menu'>
        <Link to='/'>Home</Link>
        <a href='#'>Search</a>
        <Link to='/login'>SignUp/Login</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </div>
  )
}

export default Navbar
