import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const {logout, user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login')
    }

  return (
    <>
        <h2>Products</h2>
        <p>Welcome, {user.email}</p>
        <button onClick={handleLogout}>Logout</button>

        <ProductForm />
        <ProductList />

    </>
  )
}

export default Products