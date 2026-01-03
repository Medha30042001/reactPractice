import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = () => {
    if(email === "admin@gmail.com" && password === "admin1234"){
        alert("Login Succes!");
        localStorage.setItem("isLoggedIn", "true");
        navigate('/admin');
    }else{
        alert("Wrong email or password");
    }
  }

  return (
    <>
        <h1>Login Here</h1>

       <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='none'
      />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='new-password'
      />

      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login