import React, { useState } from 'react'
import {Menu, X} from "lucide-react";

function Navigationbar() {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  return (
        <nav className='bg-white shadow-md fixed w-full'>
            <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'> 
                {/* px-6 - mobile screen, px-6 - small medium device, px-8- larger screen */}
                <div className='flex justify-between h-16 items-center'>
                    <div className='text-xl font-bold text-red-500'>Shopify.</div>
                    {/* Menu */}
                    <div className='hidden md:flex space-x-6'>
                        <a href="">Home</a>
                        <a href="">Products</a>
                        <a href="">Newsletter</a>
                    </div>

                    {/* Mobile menu */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu}>
                            {
                                isOpen ? <X /> : <Menu />
                            }
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu design */}
            {
                isOpen && (
                    <div className='md:hidden bg-white px-4 pb-4 space-y-2 shadow'>
                        <a href="" className='block text-slate-800 font-semibold hover:text-blue-500'>Home</a>
                        <a href="" className='block text-slate-800 font-semibold hover:text-blue-500'>Products</a>
                        <a href="" className='block text-slate-800 font-semibold hover:text-blue-500'>Newsletter</a>
                    </div>
                )
            }
        </nav>
  )
}

export default Navigationbar