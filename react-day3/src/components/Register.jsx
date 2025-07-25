import React from 'react'
import Button from './Button'

function Register() {
  return (
    <div>
        <h3>Register form</h3>
        <form>
            <input type="email" placeholder='john@mail.cpom' />
            <input type="text" placeholder='john doe'/>
            <input type="password" placeholder='****' />
            <input type="password" placeholder='****' />
            <Button label="Register" />
        </form>
    </div>
  )
}

export default Register