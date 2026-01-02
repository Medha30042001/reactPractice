import React, { Suspense, useState } from 'react'
import Header from './Header'
import ProductList from '../ProductList';
import Analytics from './Analytics';

const products = [
    {id: 1, name: 'Laptop'},
    {id: 2, name: 'Phone'},
    {id: 3, name: 'Tablet'}
]

const Homee = () => {

    const [orders, setOrders] = useState(0);
    const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <>
        <div>
            <Header title='Admin Dashboard' />

            <h2>Orders Today : {orders}</h2>

            <button onClick={() => setOrders(c => c+1)}>Increase orders</button>

            <ProductList products={products} /><br />

            <button onClick={() => setShowAnalytics(true)}>View Analytics</button>

            <Suspense fallback={<h3>Loading Analytics...</h3>}>
                {showAnalytics && <Analytics />}
            </Suspense>
        </div>
    </>
  )
}

export default Homee