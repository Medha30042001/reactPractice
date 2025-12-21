import React from 'react'
import { useContext } from 'react'
import { EventPassContext } from '../context/EventPassContext'

const PassFilters = () => {

    const {setFil} = useContext(EventPassContext);

  return (
    <>
    <div className='navBar'>
        <button onClick={() => setFil("All")}>All</button>
        <button onClick={() => setFil("Used")}>Used</button>
        <button onClick={() => setFil("Unused")}>Unused</button>
    </div>
    
    </>
  )
}

export default PassFilters