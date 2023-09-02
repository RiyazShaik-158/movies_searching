import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

function Navbar() {
    const [searchStarted,setSearchStarted] = useState(false);
    const [searchName,setSearchName] = useState("");

    const handleSearchStart = () => {
        setSearchStarted(true)
    }

    const handleSearchOnChange = (e) => {
        setSearchName(e.target.value)
    }
  return (
    <>{
        searchStarted
        ?
        <TextField value={searchName} onChange={handleSearchOnChange} placeholder="Search..." />
        :
        <div className='navbar_head'>
            <h1 className='navbar_title'>Movies Searching</h1>
            <div className='navbar_menu'>
                <Link to='/'>Home</Link>
                <a onClick={handleSearchStart} href='#'>Search</a>
                <Link to='/login'>SignUp/Login</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>
        </div>
    }</>
    
  )
}

export default Navbar
