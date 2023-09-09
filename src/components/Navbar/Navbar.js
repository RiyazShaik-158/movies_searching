import React, { useEffect, useState } from 'react';
import './navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

function Navbar({searchText,setSearchText}) {

  const [searchStarting,setSearchStarting] = useState(false);

  const handleSearchClose = () => {
    setSearchStarting(false);
  }

  useEffect(()=>{

  },[searchStarting])
  return (
    <>
      {
        searchStarting 
        ?
        // <h1 onClick={setSearchStarting(false)}>Search box will come here</h1>
        <div className='Navbar_head'>
          <div className='searchNewDiv'>
            <div className='forSearch'>
              <SearchIcon />
              <input className='Navbar_searchInput' placeholder='Enter keywords...' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>
            <HighlightOffIcon onClick={handleSearchClose} />
          </div>
        </div>
        :
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
                {/* <Link onClick={()=>setSearchStarting(true)}> */}
                  <div className='GenreDiv' onClick={()=>setSearchStarting(true)}><SearchIcon fontSize='small' className="downwardIcon"/><h4>Search</h4></div>
                {/* </Link> */}
                
                
                <Link to="/login">
                  <div className='GenreDiv'><PersonIcon className="downwardIcon"/><h4>Login</h4></div>
                </Link>
              </div>
            </div>
        </div>
      }
    </>
    
  )
}

export default Navbar;
