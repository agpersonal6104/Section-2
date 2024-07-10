import React from 'react'
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h1 className='items-center mt-10 text-3xl text-center text-blue-300'>Login page</h1>

        <button className={classes.loginBtn}>Login Now</button>
    </div>
  )
}

export default Login;