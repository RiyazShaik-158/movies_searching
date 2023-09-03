import React from 'react';
import './navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar_head'>
      <div className='App_logoContainer'>
        <Link to='/'><img src="gokuLogo.png" alt="GOKU Logo" title="GOKU" className='App_logo' /></Link>
      </div>
      <div className='App_menu'>
        <div className='menu1'>
            <Link to='/home'>Home</Link>
            <div className='GenreDiv'><h4>Genre</h4><KeyboardArrowDownIcon className="downwardIcon"/></div>
            <div className='GenreDiv'><h4>Country</h4><KeyboardArrowDownIcon className="downwardIcon"/></div>
            <Link to="/movies">Movies</Link>
            <Link to="/tvseries">TV Series</Link>
        </div>
        <div className='menu2'>
          <Link>Search</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
