import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputRef = useRef();
    const { login} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login({email, password});
        if(success) {
            alert('Login Success!');
            navigate('/admin');
        }else alert('Credentials dont match');
    }

  return (
    <>
        <h1>Login Here</h1>

        <form onSubmit={handleSubmit}>
            <input type="email" 
            name="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='none'
            ref={inputRef} />

            <input type="password" 
            name="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='new-password' />

            <button type='submit'>Login</button>

            <Link to='/signup'>Go to Signup page</Link>
        </form>
    </>
  )
}

export default Login