import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const Navbar = ({setAvailFilter, setCatFilter, search, setSearch}) => {

    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

  return (
    <>
    <nav className='navbar'>
        <h1>Welcome, {user?.email}</h1>

        {/* Search Bar */}
        <input type="text"
        placeholder='Search driver...'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />

        {/* Availability Filter */}
        <select onChange={e => setAvailFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>

        {/* Category Filter */}
        <select onChange={(e) => setCatFilter(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="Truck">Truck</option>
          <option value="Auto">Auto</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
        </select>

        <button onClick={handleLogout}>Logout</button>
    </nav>
    </>
  )
}

export default Navbar