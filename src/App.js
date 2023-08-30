import React, { useState } from 'react';
import './App.css';

function App() {
  const [someState,setSomeState] = useState("")
  return (
    <div>
      <h1>Movies Search App</h1>
      <button onClick={()=>setSomeState("newState")}>setState</button>

      <h4>{someState}</h4>
    </div>
  )
}

export default App
