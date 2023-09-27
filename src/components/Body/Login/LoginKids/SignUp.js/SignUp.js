import React, { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
import { intiSignUpObj, theme } from '../../Login';
import './signUp.scss';
import { Link } from 'react-router-dom';



function SignUp({signUpDetails,setSignUpDetails,handleSignUpFormSubmit}) {
  const [numerics,setNumerics] = useState([])

  const handleNumerics = () => {
    var a = Math.ceil(Math.random()*10);
    var b = Math.ceil(Math.random()*10);
    console.log(a,b)
    var c = a + b ;

    const numericsArray = [a,b,c]
    setNumerics(numericsArray);
  }

  const handleToLogin = () => {
    setSignUpDetails(intiSignUpObj);
  }

  useEffect(()=>{
    handleNumerics();
  },[])

  return (
    <div className='SignUpForm'>
      <h4>CREATE AN ACCOUNT</h4>
      <form className='SignUp_form' onSubmit={handleSignUpFormSubmit}>
        <label htmlFor='registerEmail'>Email<spa className='imp_input'>*</spa></label>
        <input type='text' name='registerEmail' id='registerEmail' className='forRegisterEmail' onChange={(e) => setSignUpDetails({...signUpDetails,registerEmail : e.target.value})}/>

        <label htmlFor='registerUsername'>Username<spa className='imp_input'>*</spa></label>
        <input type='text' name='registerUsername' id='registerUsername' className='forRegisterEmail' onChange={(e) => setSignUpDetails({...signUpDetails,registerUsername : e.target.value})}/>

        <label htmlFor='registerPassword'>Password<spa className='imp_input'>*</spa></label>
        <input type='password' name='registerPassword' id='registerPassword' className='forRegisterEmail' onChange={(e) => setSignUpDetails({...signUpDetails,registerPassword : e.target.value})}/>

        <label htmlFor='registerRepeat'>Repeat Password<spa className='imp_input'>*</spa></label>
        <input type='password' name='registerRepeat' id='registerRepeat' className='forRegisterEmail' onChange={(e) => setSignUpDetails({...signUpDetails,registerRepeat : e.target.value})}/>

        <label htmlFor='registerEmail'>{`${numerics[0]}+${numerics[1]}`}<spa className='imp_input'>*</spa></label>
        <input type='text' name='registerEmail' id='registerEmail' className='forRegisterEmail'/>

        <ThemeProvider theme={theme}>
            <Button variant='contained' color='success' type='submit' className='createAccountButton'>Create an Account</Button>
        </ThemeProvider>
      </form>
      <p className='toLoginLine'>Already have an account? <Link to='/login' onClick={handleToLogin}>Login</Link></p>
    </div>
  )
}

export default SignUp;
