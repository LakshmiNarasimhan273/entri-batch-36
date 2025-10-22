import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
      <h2 className='text-3xl font-bold mb-5'>Welcome Bro</h2>
      <button onClick={handleLogout} className='border border-red-500 px-6 py-2 rounded-md cursor-pointer text-red-400'>Logout</button>
    </div>
  )
}

export default Dashboard