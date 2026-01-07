import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputRef = useRef();
    const {signup} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email.includes('@')){
            alert('Invalid email');
            return;
        }
        if(password.trim().length < 6){
            alert("Password < 6 chars");
            return;
        }

        signup({email, password});
        alert('Signup Success!. Now Login');
        navigate('/login')
    }

  return (
    <>
        <h1>Signup Here</h1>
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

            <button type='submit'>Signup</button>
        </form>
    </>
  )
}

export default Signup