import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className='Footer_main'>
      <footer className='Footer_content'>
        <div className='Footer_content_aboutDiv'>
          <div className='Footer_aboutDiv'>
            <h4>About Us</h4>
            <div className='subMenu_inFooter'>
              <p>Terms of service</p>
              <p>Movies</p>
              <p>Contact</p>
              <p>TV series</p>
            </div>
            
          </div>
          <div className='Footer_aboutDiv'>
            <h4>Genre</h4>
            <div className='subMenu_inFooter'>
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
            <div className='subMenu_inFooter'>
              <div><p>Join Group Telegram</p></div>
              <div><p>Join Group Reddit</p></div>
              <div><p>Join Twitter</p></div>
            </div>
            
          </div>
        </div>
        <div className='goku_logo_again'>
          <img src='gokuLogo.png' alt='gokuLogo'/>
        </div>
      </footer>
    </div>
  )
}

export default Footer
