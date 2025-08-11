import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-slate-800 text-white flex items-center justify-between p-4'>
        <div>
            <h1 className='font-bold text-xl'>Routing</h1>
        </div>

        <ul className='flex gap-4'>
            <li className='text-lg cursor-pointer'>
                <Link to="/">Home</Link>
            </li>
            <li className='text-lg cursor-pointer'><Link to="/products">Products</Link></li>
            <li className='text-lg cursor-pointer'><Link to="/profile">Profile</Link></li>
        </ul>
    </div>
  )
}

export default Navbar