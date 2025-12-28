import React from 'react'

const ProductList = React.memo(({products, onSelect}) => {

    console.log("ProductList Rendered");

  return (
    <>
        <ul>
            {products.map(p => (
                <li key={p.id}
                    onClick={() => onSelect(p)}
                >{p.name} - {p.price}</li>
            ))}
        </ul>
    </>
  )
});

export default ProductList