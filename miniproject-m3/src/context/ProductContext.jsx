import React, { createContext, useEffect, useState } from 'react'
import api from '../api/api';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([]);

  const getProducts = async () =>{
    const res = await api.get(`/posts`);
    setProducts(res.data.slice(0,10)); 
  }

  const addProduct = async (product) => {
    const res = await api.post(`/posts`, product);
    setProducts(prev => [...prev, {...res.data, id:Date.now()}]);
  }

  const updateProduct = async (id, data) => {
    // await api.put(`/posts/${id}`, data);
    setProducts(products.map(p => p.id === id ? {...p, ...data} : p));
  }

  const deleteProduct = async (id) => {
    await api.delete(`/posts/${id}`);
    setProducts(products.filter(p => p.id !== id));
  }

  return (
    <ProductContext.Provider value={{
      products, getProducts, addProduct, updateProduct, deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;

