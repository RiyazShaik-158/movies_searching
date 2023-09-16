import React, { useState } from 'react';
import './navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { genres } from './forGenres';
import { countries } from './forCountries';
import { Popover } from '@mui/material';

function Navbar({ searchText, setSearchText }) {
  const [searchStarting, setSearchStarting] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState(null);

  const handleSearchClose = () => {
    setSearchStarting(false);
  }

  const handleMouseEnter = (event, content) => {
    setAnchorEl(event.currentTarget);
    console.log(content)
    setPopoverContent(content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {searchStarting ? (
        <div className='Navbar_head'>
          <div className='searchNewDiv'>
            <div className='forSearch'>
              <SearchIcon />
              <input
                autoFocus
                className='Navbar_searchInput'
                placeholder='Enter keywords...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <HighlightOffIcon onClick={handleSearchClose} className='closeButton_search' />
          </div>
        </div>
      ) : (
        <div className='Navbar_head'>
          <div className='App_logoContainer'>
            <Link to='/'>
              <img src="gokuLogo.png" alt="GOKU Logo" title="GOKU" className='App_logo' />
            </Link>
          </div>
          <div className='App_menu'>
            <div className='menu1'>
              <Link to='/home'>Home</Link>
              <div
                className='GenreDiv'
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(event) => handleMouseEnter(event, genres)}
                // onMouseLeave={handlePopoverClose}
              >
                <h4>Genre</h4>
                <KeyboardArrowDownIcon className="downwardIcon" />
              </div>
              <div
                className='GenreDiv'
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(event) => handleMouseEnter(event, countries)}
                // onMouseLeave={handlePopoverClose}
              >
                <h4>Country</h4>
                <KeyboardArrowDownIcon className="downwardIcon" />
              </div>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'all'
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                className='forPopover_popping'
                onClose={handlePopoverClose}
              >
                {popoverContent && (
                  <div
                    style={{
                      width: '400px',
                      height: '370px',
                      backgroundColor: '#000',
                      color: '#fff',
                      display: 'flex',
                      flexWrap: 'wrap',
                      columnGap: '20px',
                      padding: '40px'
                    }}
                    className='genre_popover_div'
                  >
                    {popoverContent.map((item, idx) => (
                      <p onClick={handlePopoverClose} key={idx} style={{ fontSize: '14px', width: '30%', pointerEvents: 'all','&hover':{cursor:'pointer',color:'#e64d25',fontSize:'12px'}}}>{item}</p>
                    ))}
                  </div>
                )}
              </Popover>
              <Link to="/movies">Movies</Link>
              <Link to="/tvseries">TV Series</Link>
            </div>
            <div className='menu2'>
              <div className='GenreDiv' onClick={() => setSearchStarting(true)}>
                <SearchIcon fontSize='small' className="downwardIcon" />
                <h4>Search</h4>
              </div>
              <Link to="/login">
                <div className='GenreDiv'>
                  <PersonIcon className="downwardIcon" />
                  <h4>Login</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;
