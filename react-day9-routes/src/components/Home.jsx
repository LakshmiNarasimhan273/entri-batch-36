import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <div className='p-6 flex flex-col justify-center items-center h-[700px]'>
        <h2 className='text-3xl font-bold'>Welcome to my ecommerce app</h2>
        <p className='mt-4 text-lg text-gray-700'>This is a central hub for all your needs</p>
        <button className='bg-blue-600 px-4 py-3 mt-6 text-white font-semibold rounded text-lg'><Link to="/products">Explore our products</Link></button>
   </div>
  )
}

export default Home