import React, { useState } from 'react';
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeWelcome from './components/Body/HomeWelcome/HomeWelcome';
import Home from './components/Body/Home/Home';
import Login from './components/Body/Login/Login';
import SignUp from './components/Body/Login/LoginKids/SignUp.js/SignUp';
// import ForgotPassword from './components/Body/Login/LoginKids/ForgotPassword';
// import Footer from './components/Footer/Footer';

function App() {
  const [searchText,setSearchText] = useState("");
  const [userLoggedIn,setUserLoggedIn] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setSearchText={setSearchText} searchText={searchText}/>
          <Routes>
            <Route path='/' element={<HomeWelcome/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}  />}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            {/* <Route path='/login/' element={<ForgotPassword />}></Route> */}
          </Routes>

        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App
