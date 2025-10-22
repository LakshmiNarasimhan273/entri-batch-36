import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

// http://localhost:3001/auth/login

function Login() {
  const[form, setForm] = useState({
    email: "",
    password: ""
  });
  const[error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  // LOGIN API CALL
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/auth/login", form);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    }catch(err){
      setError(err.message || "Something went wrong");
    }
  }
  return (
    <div className='p-6 max-w-sm mx-auto'>
      <h2 className='text-xl font-bold mb-4'>Login Form</h2>

      <form onSubmit={handleLogin} className='space-y-4'>
        <input name='email' onChange={handleChange} className='border p-2 w-full rounded-md' type="email" placeholder='john@mail.com' />
        <input name='password' onChange={handleChange} className='border p-2 w-full rounded-md' type="password" placeholder='****' />
        {error && <p>{error}</p>}
        <button type='sumbit' className='bg-black text-white w-full p-2 rounded-md'>Login</button>
      </form>
      <div className='mt-4'>
        <h2 className='text-md font-semibold'>Don't have an account ? <Link className='text-blue-700 font-bold' to="/register">Register</Link></h2>
      </div>
    </div>
  )
}

export default Login