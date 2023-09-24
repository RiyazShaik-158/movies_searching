import { createTheme } from '@mui/material';
import React, { useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginKids/LoginForm';
import ForgotPassword from './LoginKids/ForgotPassword';

const sampleUser = {
    userName : "Riyaz",
    password : "1234"
}

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function Login({userLoggedIn,setUserLoggedIn}) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [forgotPasswordClicked,setForgotPasswordClicked] = useState(false);
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
                            marginTop:"30px",
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

    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        // if(emailRegex.test(email) ===){

        // }

    }

  return (
    <div className='Login_head'>
      <div className='Login_contentBox' style={forgotPasswordClicked ? {maxHeight:'350px',borderBottom:'10px solid #e64d25'} : {maxHeight:'410px'}}>
        <h1>Hello, <br/> Welcome back!</h1>

        {
            forgotPasswordClicked 
            ?
            <ForgotPassword 
                email = {email}
                setEmail = {setEmail}
                theme={theme}  
                handleForgotPasswordSubmit = {handleForgotPasswordSubmit}
            /> 
            :
            <LoginForm 
                handleLoginSubmit = {handleLoginSubmit}
                username = {username}
                setUsername = {setUsername}
                password = {password}
                setPassword = {setPassword}
                setForgotPasswordClicked = {setForgotPasswordClicked}
                theme={theme}  
            />
        }
        
        {/* <h4>LOGIN</h4>
        <form className='Login_form' onSubmit={handleLoginSubmit}>
            <label htmlFor='username'>Username</label>
            <input name='username'autoFocus id='username' value={username} className='forUsername'  onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor='password'>Password</label>
           
            <input type='password' name='password' id='password' value={password} className='forUsername'  onChange={(e)=>setPassword(e.target.value)}/>
            <p className='forgotPasswordLink' onClick={() => {setForgotPasswordClicked(true)}}>Forgot password?</p>
            <ThemeProvider theme={theme}>
                <Button variant='contained' color='success' type='submit'>Login</Button>
            </ThemeProvider>
            
        </form> */}
      </div>
    </div>
  )
}

export default Login;

// below these are supposed to be used as login username and password inputs, will update these

{/* <TextField 
name='username'
id='username'
value={username}
className='forUsername'
onChange={(e)=>setUsername(e.target.value)}
/>  */}

 {/* <TextField 
                name='password'
                id='password'
                value={password}
                className='forUsername'
                onChange={(e)=>setPassword(e.target.value)}
            /> */}
