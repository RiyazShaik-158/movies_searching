import React, { useEffect, useState } from 'react';
import './navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { genres } from './forGenres';
import { Popover } from '@mui/material';

function Navbar({searchText,setSearchText}) {

  const [searchStarting,setSearchStarting] = useState(false);

  // for popover
  const [anchorEl, setAnchorEl] = useState(null);


  const handleSearchClose = () => {
    setSearchStarting(false);
  }

  useEffect(()=>{

  },[searchStarting])


  // for popover
  const handlePopoverOpen = (event) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


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
              <input autoFocus className='Navbar_searchInput' placeholder='Enter keywords...' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>
            <HighlightOffIcon onClick={handleSearchClose} className='closeButton_search'/>
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
                {/* for popover , need to write below that element only */}
                <div className='GenreDiv'
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <h4>Genre</h4><KeyboardArrowDownIcon className="downwardIcon"/>
                </div>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: 'none'
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
                  // disableRestoreFocus
                >
                  {/* <Typography sx={{ p: 1 }}>I use Popover.</Typography> */}
                  <div 
                    style={{
                      width:'400px',
                      height:'370px',
                      backgroundColor:'#000',
                      color:'#fff',
                      display:'flex',
                      flexWrap:'wrap',
                      columnGap:'20px',
                      padding:'40px'
                    }} 
                    className='genre_popover_div'
                  >
                    {
                      genres.map((item,idx)=> {
                        return(
                          <p key={idx} style={{fontSize:'14px',width:'30%',pointerEvents:'all'}}>{item}</p>
                        )
                      })
                    }
                    {/* <h4>testing popover</h4> */}
                  </div>
                </Popover>
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
