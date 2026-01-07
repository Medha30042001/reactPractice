import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'

const ProductForm = () => {

    const {addProduct} = useContext(ProductContext);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addProduct({title});
        setTitle('');
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title"
            placeholder='Enter Title'
            value={title}
            onChange={(e) => {setTitle(e.target.value)}} />

            <button type='submit'>Add Product</button>
        </form>
    </>
  )
}

export default ProductForm