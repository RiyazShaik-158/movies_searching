import React from 'react';
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeWelcome from './components/Body/HomeWelcome/HomeWelcome';
import Home from './components/Body/Home/Home';
import Login from './components/Body/Login/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomeWelcome/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
      </BrowserRouter>
      

      
    </div>
  )
}

export default App
