import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(response => setProducts(response.data.products))
            .catch(err => {
                setError(err.message);
            });
    }, [])

    if(error) return <p>{error}</p>
    
  return (
    <>
    <ul>
        {products.map(p => (
            <li key={p.id}>{p.title}</li>
        ))}
    </ul>
        
    </>
  )
}

export default Products