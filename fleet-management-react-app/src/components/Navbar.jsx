import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('isLoggedIn')
        navigate('/login');
    }

  return (
    <>
        <nav>
            <h3>Fleet Management</h3>
            <button onClick={logout}>Logout</button>
        </nav>
    </>
  )
}

export default Navbar