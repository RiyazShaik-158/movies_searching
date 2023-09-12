import React from 'react';
import './footer.scss';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <div className='Footer_main'>
      <footer className='Footer_content'>
        <div className='Footer_content_aboutDiv'>
          <div className='Footer_aboutDiv_bigger_for_forAbout'>
            <h4>About Us</h4>
            <div className='subMenu_inFooter1'>
              <p>Terms of service</p>
              <p>Movies</p>
              <p>Contact</p>
              <p>TV Series</p>
            </div>
            
          </div>
          <div className='Footer_aboutDiv'>
            <h4>Genre</h4>
            <div className='subMenu_inFooter_genre'>
              <p>Action</p>
              <p>Fantasy</p>
              <p>Comedy</p>
              <p>Horror</p>
              <p>Drama</p>
              <p>Mystery</p>
            </div>
            
          </div>
          <div className='Footer_aboutDiv'>
            <h4>Connect us</h4>
            <div className='subMenu_inFooter_connections'>
              <div 
                className='connectingIconsDiv'
              ><TelegramIcon className='telegramIcon'  /><p>Join Group Telegram</p></div>
              <div className='connectingIconsDiv'><RedditIcon/><p>Join Group Reddit</p></div>
              <div className='connectingIconsDiv'><TwitterIcon/><p>Join Twitter</p></div>
            </div>
            
          </div>
        </div>
        <div className='goku_logo_again'>
          <img src='gokuLogo.png' alt='gokuLogo'/>
        </div>
      </footer>
      <div className='endingCopy'><span>&copy; 2023 GOKU with 🧡</span></div>
    </div>
  )
}

export default Footer
