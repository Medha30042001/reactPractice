import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='bg-blue-50 text-whitep-6 flex 
            justify-between items-center' >
        <h1 className='text-xl font-bold'>Food App</h1>
        <div className='flex gap-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/signup' className='hover:underline'>Sign Up</Link>
            <Link to='/chef' className='hover:underline'>Chef</Link>
            <Link to='/customer' className='hover:underline'>Customer</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar