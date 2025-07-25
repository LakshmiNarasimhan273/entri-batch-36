import React from 'react'
import Button from './Button'

function Login() {
  return (
    <div>
        <h3>Login form</h3>
        <form>
            <input type="email" placeholder='john@mail.com' />
            <input type="password" placeholder='****' /><br />
            <Button label="Login" />
        </form>
    </div>
  )
}

export default Login