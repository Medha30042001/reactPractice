import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

  return (
    <>
    <nav>
        <h1>Welcome, {user?.email}</h1>
        <button onClick={handleLogout}>Logout</button>
    </nav>
    </>
  )
}

export default Navbar