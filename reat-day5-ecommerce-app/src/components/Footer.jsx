import React from 'react'

function Footer() {
  return (
    <footer className='bg-red-600 text-white text-center p-4 mt-10 text-sm md:text-base'>
        <p>&copy; {new Date().getFullYear()} Shopify | All rights reserved</p>
    </footer>
  )
}

export default Footer