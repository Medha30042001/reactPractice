import React from 'react'
import { useContext } from 'react'
import { FleetContext } from '../context/FleetContext'
import { useEffect } from 'react';
import { useState } from 'react';

const FleetCard = ({fleet}) => {

    const {updateDriver, toggleAvail, deleteFleet} = useContext(FleetContext);

    const [isEditing, setIsEditing] = useState(false);
    const [driverName, setDriverName] = useState(fleet.driver);

    const saveDriver = () => {
        updateDriver(fleet.id, driverName);
        setIsEditing(false);
    }

  return (
    <>
        <div>
           
            <h4>Reg no : {fleet.reg}</h4>
            <p>Category : {fleet.category}</p>

            {isEditing ? (
                <>
                    <input value={driverName}
                    onChange={(e) => setDriverName(e.target.value)} />
                    <button onClick={saveDriver}>Save</button>
                </>
            ) : (
                <>
                    <p>Driver : {fleet.driver}</p>
                </>
            )}

            <p>Status : {fleet.available? 'Available' : 'Unavailable'}</p>
            {!isEditing && (
                <button onClick={() => setIsEditing(true)}>Update Driver</button>
            )}
            <button onClick={() => toggleAvail(fleet.id, !fleet.available)}>
                Toggle Availability</button>

            <button onClick={() => deleteFleet(fleet.id)}>Delete Fleet</button>

        </div>
    </>
  )
}

export default FleetCard