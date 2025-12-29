import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <>
        <div>{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter