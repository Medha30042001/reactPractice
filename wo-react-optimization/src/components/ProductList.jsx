import React from 'react'

const ProductList = React.memo(({products}) => {

    console.log('ProductList Rendered');

    let total = 0;
    for(let i=0; i< 1000000000; i++){
        total += i;
    }
  return (
    <>
        <div>
            <h3>Products</h3>
            <ul>
                {products.map(p => (
                    <li key={p.id}>{p.name}</li>
                ))}
            </ul>
        </div>
    </>
  )
})

export default ProductList