import {Link, useNavigate} from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate('/login');
    }

  return (
    <>
        <h1>Welcome to your Dashboard</h1>

        <button onClick={handleLogout}>Logout</button>

        <ul style={{listStyle:'none'}}>
            <li>Blog 1 : <Link to='/blog/1'>/blog/1</Link></li>
            <li>Blog 2 : <Link to='/blog/2'>/blog/2</Link></li>
            <li>Blog 3 : <Link to='/blog/3'>/blog/3</Link></li>
        </ul>
    </>
  )
}

export default Dashboard