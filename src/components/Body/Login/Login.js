import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './login.scss';

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

  return (
    <div className='Login_head'>
      <div className='Login_contentBox'>
        <h1>Hello, <br/> Welcome back!</h1>
        <h4>LOGIN</h4>
        <form className='Login_form'>
            <label htmlFor='username'>Username</label>
            <TextField 
                name='username'
                id='username'
                value={username}
                className='forUsername'
                onChange={(e)=>setUsername(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <TextField 
                name='password'
                id='password'
                value={password}
                className='forUsername'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <Button variant='contained' color='success'>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Login;
