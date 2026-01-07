import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputRef = useRef();
    const {signUp} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if(!email.includes('@')){
            alert('Invalid Email');
            return;
        }

        if(password.trim().length < 6){
            alert('Password must be more than 6 characters');
            return;
        }

        signUp({email, password});
        alert('Signup Successful! Please Login.');
        navigate('/login');
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

  return (
    <>
        <h1>Sign Up Page</h1>

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

            <button type='submit'>Sign Up</button>
        </form>
    </>
  )
}

export default Signup