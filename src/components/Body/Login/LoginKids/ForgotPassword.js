import { Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import './forgot_password.scss'
import React from 'react';
import { theme } from '../Login';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function ForgotPassword({email,setEmail,handleForgotPasswordSubmit,setSignupClicked}) {
  return (
    <div className='ForgotPasswordForm'>
      <h4>FORGOT PASSWORD?</h4>
      <form className='ForgotPassword_form' onSubmit={handleForgotPasswordSubmit}>
          <label htmlFor='email'>Your Email</label>
          <input name='email'autoFocus id='email' value={email} className='forEmail'  onChange={(e)=>setEmail(e.target.value)}/>
          {
            email.length > 5 && !emailRegex.test(email)
            &&
            <p className='error' style={{color:'red',fontSize:'14px'}}>invalid email</p>
          }
          
          <ThemeProvider theme={theme}>
              <Button variant='contained' color='success' type='submit' className='resetPasswordButton'>Reset Password</Button>
          </ThemeProvider>
      </form>
      <p className='signUp_link'>Don't have an account? <span onClick={() => setSignupClicked(true)}>Sign Up</span></p>
    </div>
  )
}

export default ForgotPassword
