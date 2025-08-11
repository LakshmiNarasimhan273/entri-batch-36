import React from 'react'

function Profile() {
  return (
    <div className='p-6 flex justify-center items-center h-[700px]'>
        <div className='bg-light shadow-lg rounded-lg p-6 w-full max-w-md'>
            <img className='w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500' src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="" />
            <h2 className='mt-4 text-2xl font-bold text-center'>Narasimhan</h2>
            <h3 className='text-center text-gray-700'>narasimhan@yahoo.com</h3>

            <div className='mt-6 space-y-2 text-gray-600'>
            <p>Your orders - 6</p>
            <p>Current order - Watch</p>
        </div>
        </div>

        
    </div>
  )
}

export default Profile