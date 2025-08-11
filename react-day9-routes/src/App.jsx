import React from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import Products from './components/Products'

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Single page application routing methods - SPA */}
            <Route path='/' element={<Home />} />
            <Route path='/profile'  element={<Profile />} />
            <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App