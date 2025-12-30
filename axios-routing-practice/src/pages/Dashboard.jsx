import React from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("auth", "false");
        navigate('/login');
    }

  return (
    <>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Dashboard