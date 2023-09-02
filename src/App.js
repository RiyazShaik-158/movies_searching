import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  console.log("App starting")
  return (
    <div className='App'>
      <Navbar />
    </div>
  )
}

export default App
