import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if(!email || !password) return alert('Enter Enmail/Password');
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login Successfully');
            navigate('/chef');
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
    
    <form onSubmit={handleLogin} className='bg-white p-6 rounded shadow-md w-80 flex flex-col gap-4'>
        
        <h2 className='text-2xl font-bold text-center'>Login Here</h2>
        
        <input type="email"
        placeholder='Enter Email' value={email}
        onChange={e=>setEmail(e.target.value)}
        autoComplete='none' />

        <input type="password"
        placeholder='Enter Password' value={password}
        onChange={e=>setPassword(e.target.value)}
        autoComplete='new-password' />

        <button type='submit'
        className='bg-green-600 text-white p-2 rounded 
        hover:bg-green-700'>Login</button>
    </form>
        
    </div>
  )
}

export default Login