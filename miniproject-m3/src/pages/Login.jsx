import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputRef = useRef();
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const success = await login({email, password});

        if(success) navigate('/products');
        else alert('Credentials dont match')
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

  return (
    <>
        <h1>Login Page</h1>

        <form onSubmit={handleSubmit}>
            <input type="email"
            name='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='none'
            ref={inputRef} />

            <input type="password" 
            name="password"
            placeholder='Enter Password'
            value={password}
            autoComplete='new-password'
            onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'>Login</button>
        </form>
    </>
  )
}

export default Login