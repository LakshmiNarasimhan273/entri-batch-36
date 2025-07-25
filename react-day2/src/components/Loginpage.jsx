import React from 'react'
import Button from './Button'

function Loginpage() {
  return (
    <div>
        <h2>Login</h2>
        <input type="email" placeholder='john@mail.com' />
        <input type="password" placeholder='*****' />
        <Button />
    </div>
  )
}

export default Loginpage