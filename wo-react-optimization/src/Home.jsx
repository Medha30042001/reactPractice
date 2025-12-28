import React, { useCallback, useMemo, useState } from 'react'
import ProductList from './ProductList';


const products = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1500 },
  { id: 3, name: "Headphones", price: 200 }
];

const Home = () => {

    const [count, setCount] = useState(0);

    const totalPrice = useMemo(() => {
        console.log("Calculating Total");
        return products.reduce((sum, p) => sum + p.price, 0);
    }, [products])
    

    const handleSelect = useCallback((product) => {
        console.log("Selected : ", product.name);
    }, []);

  return (
    <>
        <h2>Counter : {count}</h2>
        <button onClick={() => setCount(c => c + 1)}>
            Increment Counter
        </button>

        <h3>Total : ${totalPrice}</h3>

        <ProductList products = {products} 
                    onSelect = {handleSelect} />
    </>
  )
}

export default Home