import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'

const ProductList = () => {

    const {products, getProducts, updateProduct, deleteProduct} = useContext(ProductContext);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        getProducts();
    }, [])

  return (
    <>
        <div>
            {products.map(product => (
                <p key={product.id}>
                    {
                        editId === product.id ? (
                            <>
                                <input type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)} />

                                <button onClick={() => {
                                    updateProduct(product.id, {title: editValue});
                                    setEditId(null);
                                }}>Save</button>
                            </>
                        ) : (
                            <>
                                {product.title}
                                <button onClick={() => {
                                    setEditId(product.id)
                                    setEditValue(product.title)
                                }}>Edit</button>
                            </>
                        )
                    }
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                </p>
                // <p key={product.id}>
                //     {product.title}
                //     <button onClick={() => updateProduct(product.id, product)}>Update</button>
                //     <button onClick={() => deleteProduct(product.id)}>Delete</button>
                // </p>
            ))}
        </div>
    </>
  )
}

export default ProductList