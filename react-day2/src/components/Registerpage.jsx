import React from 'react'
import Button from './Button'

function Registerpage() {
  return (
    <div>
        <h2>Register</h2>
        <input type="email" placeholder='john@mail.com' />
        <input type="password" placeholder='****' />
        <input type="number" placeholder='123456789' />
        <Button />
    </div>
  )
}

export default Registerpage