import React from 'react';
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeWelcome from './components/Body/HomeWelcome/HomeWelcome';
import Home from './components/Body/Home/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomeWelcome/>}></Route>
            <Route path='/home' element={<Home/>}></Route>

          </Routes>
      </BrowserRouter>
      

      
    </div>
  )
}

export default App
