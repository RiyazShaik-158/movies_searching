import { Button, TextField, createTheme } from '@mui/material';
import React, { useState } from 'react';
import './login.scss';
import { ThemeProvider } from '@emotion/react';

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const theme = createTheme({
        components: {
            MuiButton:{
                styleOverrides:{
                    root : ({ownerState}) =>({
                        ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'success' && {
                            color : '#fff',
                            fontWeight : '500',
                            fontSize : '18px',
                            fontFamily : 'inherit',
                            textTransform : 'none',
                            borderRadius:'6px',
                            marginTop:"10px",
                            width:"25%"
                        })
                    })
                }
            }
        }
    })

  return (
    <div className='Login_head'>
      <div className='Login_contentBox'>
        <h1>Hello, <br/> Welcome back!</h1>
        <h4>LOGIN</h4>
        <form className='Login_form'>
            <label htmlFor='username'>Username</label>
            {/* <TextField 
                name='username'
                id='username'
                value={username}
                className='forUsername'
                onChange={(e)=>setUsername(e.target.value)}
            /> */}
            <input name='username' id='username' value={username} className='forUsername'  onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor='password'>Password</label>
            {/* <TextField 
                name='password'
                id='password'
                value={password}
                className='forUsername'
                onChange={(e)=>setPassword(e.target.value)}
            /> */}
            <input name='password' id='password' value={password} className='forUsername'  onChange={(e)=>setPassword(e.target.value)}/>
            <ThemeProvider theme={theme}>
                <Button variant='contained' color='success'>Login</Button>
            </ThemeProvider>
            
        </form>
      </div>
    </div>
  )
}

export default Login;
