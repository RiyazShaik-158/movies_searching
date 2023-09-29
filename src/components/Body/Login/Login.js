import { createTheme } from '@mui/material';
import React, { useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginKids/LoginForm';
import ForgotPassword from './LoginKids/ForgotPassword';
import SignUp from './LoginKids/SignUp.js/SignUp';

const sampleUser = {
    userName : "Riyaz",
    password : "1234"
}

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
                        width:"25%",
                        transition : '0.3s all ease'
                    })
                })
            }
        }
    }
})

export {theme};

export const intiSignUpObj = {
    registerEmail : "",
    registerUsername : "",
    registerPassword : "",
    registerRepeat : ""
}


function Login({userLoggedIn,setUserLoggedIn}) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [forgotPasswordClicked,setForgotPasswordClicked] = useState(false);
    const [signupClicked,setSignupClicked] = useState(false);
    const [signUpDetails,setSignUpDetails] = useState(intiSignUpObj);
    const navigate = useNavigate();

    

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

    const handleSignUpFormSubmit = (event) => {
        event.preventDefault();
        if(event.target[0].value && event.target[1].value && event.target[2].value && event.target[3].value && event.target[2].value === event.target[3].value){
            console.log('register successful');
            navigate('/login');
        }
    }

  return (
    <div className='Login_head'>
      <div className='Login_contentBox' style={forgotPasswordClicked ? signupClicked ? {maxHeight:'1000px',borderBottom:'10px solid #e64d25'} : {maxHeight:'350px',borderBottom:'10px solid #e64d25'} : {maxHeight:'450px'}}>
        <h1>Hello, <br/> Welcome back!</h1>

        {
            forgotPasswordClicked             
            ?
            signupClicked
            ?
            <SignUp
                setSignUpDetails = {setSignUpDetails}
                signUpDetails = {signUpDetails}
                handleSignUpFormSubmit = {handleSignUpFormSubmit}
            />

            :

            <ForgotPassword 
                email = {email}
                setEmail = {setEmail}
                theme={theme}  
                handleForgotPasswordSubmit = {handleForgotPasswordSubmit}
                setSignupClicked = {setSignupClicked}
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
