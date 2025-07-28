import React from 'react'
import Card from './components/Card'
import { House, PackageSearch, UserRound } from 'lucide-react'

function App() {
  return (
    <>
      <div className='flex justify-between items-center p-4 bg-teal-800 text-white'>
        <div>
          <h2 className='font-semibold text-xl cursor-pointer'>MyStack</h2>
        </div>

        <div>
          <ul className='flex gap-4'>
            <li className='cursor-pointer flex flex-col items-center'><House size={18} />Home</li>
            <li className='cursor-pointer flex flex-col items-center'><PackageSearch size={18}/>Products</li>
            <li className='cursor-pointer flex flex-col items-center'><UserRound size={18} />Profile</li>
          </ul>
        </div>
      </div>

      <Card />
    </>

  )
}

export default App