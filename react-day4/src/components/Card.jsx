import React from 'react'
import { Eye } from "lucide-react";


function Card() {
    return (
        // Card parent div
        <div className='max-w-sm bg-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-3xl'>
            <img className='w-full h-68 object-cover rounded-xl mb-4' src="https://i.pinimg.com/1200x/5e/fc/61/5efc6136a54b8b127a253b57eca987bf.jpg" alt="" />
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>NIKE Sports Shoe</h2>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, fugiat. Nostrum ipsum quaerat atque asperiores itaque repellat, necessitatibus voluptate totam odio molestiae distinctio voluptas maiores ipsa fugiat libero laborum illo!</p>
            <button className='flex gap-2 items-center bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 cursor-pointer'><Eye /> View more</button>
        </div>
    )
}

export default Card