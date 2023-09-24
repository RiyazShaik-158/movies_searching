import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';


function LoginForm({
    handleLoginSubmit,
    username,
    setUsername,
    password,
    setPassword,
    setForgotPasswordClicked,
    theme
}) {
  return (
    <div className='LoginForm'>
       <h4>LOGIN</h4>
        <form className='Login_form' onSubmit={handleLoginSubmit}>
            <label htmlFor='username'>Username</label>
            <input name='username'autoFocus id='username' value={username} className='forUsername'  onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' value={password} className='forUsername'  onChange={(e)=>setPassword(e.target.value)}/>
            <p className='forgotPasswordLink' onClick={() => {setForgotPasswordClicked(true)}}>Forgot password?</p>
            <ThemeProvider theme={theme}>
                <Button variant='contained' color='success' type='submit'>Login</Button>
            </ThemeProvider>
            
        </form>
    </div>
  )
}

export default LoginForm
