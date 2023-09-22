import { Button, createTheme } from '@mui/material';
import React, { useState } from 'react';
import './login.scss';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const sampleUser = {
    userName : "Riyaz",
    password : "1234"
}

function Login({userLoggedIn,setUserLoggedIn}) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

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

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        if(e.target[0].value === sampleUser.userName && e.target[1].value === sampleUser.password){
            alert("Login successful");
            navigate('/')
        }
    }

  return (
    <div className='Login_head'>
      <div className='Login_contentBox'>
        <h1>Hello, <br/> Welcome back!</h1>
        <h4>LOGIN</h4>
        <form className='Login_form' onSubmit={handleLoginSubmit}>
            <label htmlFor='username'>Username</label>
            {/* <TextField 
                name='username'
                id='username'
                value={username}
                className='forUsername'
                onChange={(e)=>setUsername(e.target.value)}
            /> */}
            <input name='username'autoFocus id='username' value={username} className='forUsername'  onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor='password'>Password</label>
            {/* <TextField 
                name='password'
                id='password'
                value={password}
                className='forUsername'
                onChange={(e)=>setPassword(e.target.value)}
            /> */}
            <input type='password' name='password' id='password' value={password} className='forUsername'  onChange={(e)=>setPassword(e.target.value)}/>
            <p className='forgotPasswordLink'>Forgot password?</p>
            <ThemeProvider theme={theme}>
                <Button variant='contained' color='success' type='submit'>Login</Button>
            </ThemeProvider>
            
        </form>
      </div>
    </div>
  )
}

export default Login;
