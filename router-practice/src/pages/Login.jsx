import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    const handleLogin = () => {
        if(email === 'admin@gmail.com' && password === 'admin1234'){
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/todos');
        }else{
            setError('Invalid email or password')
            localStorage.setItem('isLoggedIn', 'false');
        }
    }

  return (
    <>
        <h2>Login page</h2>

        <input type="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='none'
            ref={emailRef}
        />

        <input type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='new-password'
        />

         {error && (<p style={{color:'red'}}>{error}</p>)}

        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login