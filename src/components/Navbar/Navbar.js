import React from 'react';
import './navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
  return (
    <div className='Navbar_head'>
      <div className='App_logoContainer'>
        <img src="gokuLogo.png" alt="GOKU Logo" title="GOKU" className='App_logo' />
      </div>
      <div className='App_menu'>
        <div className='menu1'>
            <p>Home</p>
            <div className='GenreDiv'><h4>Genre</h4><KeyboardArrowDownIcon className="downwardIcon"/></div>
            <div className='GenreDiv'><h4>Country</h4><KeyboardArrowDownIcon className="downwardIcon"/></div>
            <p>Movies</p>
            <p>TV Series</p>
        </div>
        <div className='menu2'>
            <p>Search</p>
            <p>Login</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
