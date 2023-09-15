import React, { useState } from 'react';
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, useNavigate  } from 'react-router-dom';
import HomeWelcome from './components/Body/HomeWelcome/HomeWelcome';
import Home from './components/Body/Home/Home';
import Login from './components/Body/Login/Login';
import Footer from './components/Footer/Footer';

function App() {
  const [searchText,setSearchText] = useState("");
  const navigate = useNavigate()

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setSearchText={setSearchText} searchText={searchText}/>
          <Routes>
            <Route path='/' element={<HomeWelcome/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>

        {!navigate().location.pathname === '/login' && <Footer/>}

        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
