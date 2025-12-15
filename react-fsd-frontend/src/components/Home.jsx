import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API } from '../api';

function Home() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    const allProducts = async () => {
        try {
            const response = await axios.get(`${API}/products`)
            setProducts(response.data.data);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        allProducts();
    }, []);

    return (
        <div>
            <button onClick={handleLogout} className='border border-red-500 mt-3 ml-3 px-2 p-2 rounded-lg cursor-pointer'>Logout</button>
            <div className='w-full max-w-2xl bg-gray-50 rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-semibold mb-4'>All Products</h3>

                {
                    products.length === 0 ? (
                        <p className='text-gray-600'>No Product Found</p>
                    ) : (
                        <ul className='space-y-3'>
                            {
                                products.map(data => (
                                    <li className='flex justify-between items-center border-b pb-2' key={data._id}>
                                        <div>
                                            <h4 className='font-bold'>{data.title}</h4>
                                            <p className='text-sm mb-4 text-gray-600'>{data.description}</p>
                                            <span className='bg-orange-200 px-4 py-1 rounded-lg font-semibold'>${data.price}</span><br />
                                            <button className='mt-4 bg-indigo-600 px-4 py-1 rounded-md text-white font-bold'>Add to Cart</button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Home;