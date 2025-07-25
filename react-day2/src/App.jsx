import React from 'react'
import Homepage from './components/Homepage';
import Loginpage from "./components/Loginpage";
import Registerpage from "./components/Registerpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Entri!</h1>
      <Homepage />
      <Registerpage />
      <Loginpage />
    </div>
  )
}

export default App