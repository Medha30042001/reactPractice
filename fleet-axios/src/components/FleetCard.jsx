import React, {memo} from 'react'
import { useContext } from 'react'
import { FleetContext } from '../context/FleetContext'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FleetCard = ({fleet}) => {

    const {updateDriver, toggleAvail, deleteFleet} = useContext(FleetContext);

    const [isEditing, setIsEditing] = useState(false);
    const [driverName, setDriverName] = useState(fleet.driver);
    const navigate = useNavigate();

    const saveDriver = () => {
        updateDriver(fleet.id, driverName);
        setIsEditing(false);
    }

    const goToDetails = () => {
        navigate(`/fleet/${fleet.id}`);
    }

  return (
    <>
        <div className='fleet-card' onClick={goToDetails}>
           
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
            <button onClick={(e) => {
                e.stopPropagation();
                toggleAvail(fleet.id, !fleet.available)}}>
                Toggle Availability</button>

            <button onClick={(e) => {
                e.stopPropagation();
                deleteFleet(fleet.id)}}>Delete Fleet</button>

        </div>
    </>
  )
}

export default memo(FleetCard)