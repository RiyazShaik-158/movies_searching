import React from 'react';
import './homeWelcome.scss'
import { Link } from 'react-router-dom';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../../Footer/Footer';

function HomeWelcome() {

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'warning' && {
                backgroundColor: '#e64d25',
                color: '#fff',
                fontWeight:'500',
                fontSize:'17px',
                fontFamily:'inherit',
                textTransform:'none'
              }),
          }),
        },
      },
    },
  });


  return (
    <>
      <div className='homeWelcome_main'>
        <header className='homeWelcome_header'>
          <Link to='/home'>Home</Link><h4> - Welcome</h4>
        </header>
        <section className='homeWelcome_content'>
          <img className='icon_image' src='welcome-home-icon.png' alt='welcome-home-icon'/>
          <div className='homeWelcome_content_afterImage'>
            <p>Please help us by sharing this site with your friends. Thanks!</p>
            <ThemeProvider theme={theme}>
              <Link to='/home'><Button color='warning' className="homeWelcome_content_afterImage_button" variant='contained'>Browse All Movies & Series <ArrowForwardIcon fontSize='small' sx={{paddingLeft:"15px",fontWeight:"700"}}/></Button></Link>
            </ThemeProvider>
          </div>
          
        </section>
        <section className='homeWelcome_content_features'>
            <h4 className='miniIntro'>Gokuto - Best website to Watch Free Movies Online</h4>
            <p className='featured_line'>- HD Quality</p>
            <p className='featured_line'>- Free Streaming without Signing-up</p>
            <p className='featured_line'>- One Click HD Streaming</p>
            <p className='featured_line'>- Fast and Secure Streaming Server</p>
            <p className='featured_line'>- Chromecast supported</p>
            <p className='featured_line'>- Subtitle in multi-languages</p>
          </section>
      </div>
      <Footer />
    </>
    
  )
}

export default HomeWelcome;
