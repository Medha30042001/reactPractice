import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const isLoggedIn = localStorage.getItem("isLoggedIn") === 'true';

    const handleLogin = () => {

        if(email === 'admin@gmail.com' && password === 'admin@123'){
            localStorage.setItem('isLoggedIn', 'true');
            alert('Login Success');
            navigate('/dashboard');
        }else{
            alert('Wrong Credentials')
            localStorage.setItem('isLoggedIn', 'false');
        }
    }

  return (
    <>
        <h2>Login Page</h2>

        <input type="email"
        placeholder='Enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='none' />

        <input type="password"
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='new-password' />

        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login