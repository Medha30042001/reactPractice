import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("auth", "true");
        navigate('/dashboard');
    }

  return (
    <>
        <h2>Login Page</h2>
        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login