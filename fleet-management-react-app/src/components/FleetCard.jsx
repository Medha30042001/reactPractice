import React, { useContext } from 'react'
import { FleetContext } from './FleetContext'

const FleetCard = React.memo(({fleet}) => {

    const {updateDriver, toggleAvail, deleteFleet} = useContext(FleetContext);

  return (
    <>
        <div className='card'>
            <img src="https://img.freepik.com/free-vector/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="vehicle"
            style={{width:'200px'}} />

            <p>Reg : {fleet.reg}</p>
            <p>Category : {fleet.category}</p>
            <p>Driver : {fleet.driver}</p>
            <p>Status : {fleet.available ? 'Available' : 'Unavailable'}</p>
            
            <button onClick={() => updateDriver(fleet.id)}>Update Driver</button>
            <button onClick={() => toggleAvail(fleet.id)}>Change Availability</button>
            <button onClick={() => deleteFleet(fleet.id)}>Delete Fleet</button>
        </div>
    </>
  )
})

export default FleetCard