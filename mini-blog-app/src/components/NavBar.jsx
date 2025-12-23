import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='navBar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </div>
    </>
  )
}

export default NavBar