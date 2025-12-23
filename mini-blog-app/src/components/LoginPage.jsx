
import {useNavigate, Navigate} from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate();
    const isLoggedIn = (localStorage.getItem("isLoggedIn") || "") === "true";

    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", "true");
        navigate('/dashboard');
    }

    if(isLoggedIn){
        return <Navigate to='/dashboard'/>
    }

  return (
    <>
        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default LoginPage