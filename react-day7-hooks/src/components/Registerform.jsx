import React, { useState } from 'react'

function Registerform() {
    const[username, setUsername] = useState("");

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${username}, your registration is completed`);
        setUsername("");
    }
  return (
    <div>
        <h1>Registration form</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter your name</label>
            <input type="text" onChange={handleChange} value={username} /><br /><br />
            <button type='submit'>Register </button>
        </form>

        <h3>{username}</h3>
    </div>
  )
}

export default Registerform